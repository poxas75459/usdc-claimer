/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "27UfBRP5P2pdtjKvUu62BCrPMw1RvnN6amL2KQhTrNQnVvAHaV6TwWACWiVRVgWePFvQMmQE1RXXsusyacg37PUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AS243aLqjnCfcHx4sc3w9DTVDc6tGjh9n2MbiQjPAp5JvnnTNLYdCQNU8KGsqV2AbmHgZ6anSvPFvt9jFgqWfQC",
  "key1": "2QxUsnA3LpxPJvhXGzmkAeAinZTt5e4dYpHzXqmh5uEZSW6Geich3DXP8iEkTsT7k2kocRLV54CdrzpkaypwACBP",
  "key2": "3Xo7pjjDwWQvZUFDNQKgasw7b5YutfSs1VcL8yKvLMYeJ46DNPPdG47frzZcskE9gyDyW1voRFEekq8Q9Q6F45tV",
  "key3": "QKy5g8BQvHCsJxgTHRNRMJXpstXiUHMYDAqY1Tjy67FZRtAnaEs8wzsp21ZTziFY164898TYgX8k1SHprGu9KNq",
  "key4": "2V4wcdHYtrQtbggwrHG8DRtnYJE77NBMGeKY2jZzm5TUrzfwfsZQTLCVcA9RzUz48Z6eSMynkXHa6SPXse1dgqPa",
  "key5": "ukzhSgFg1aYMZJSKWRreQvyFjdAusn9nuWvdV5kCdpgZF5Mwo32DkaQegbXvbMkbEq1GMnoN2t3acFN7YykpJH6",
  "key6": "9AwGg3XmAeQwT7hewUCoEwBPSJMDnjAGwfQNNV7EX9dBwXqdvbBVbG92Hp2hK7MezfnQCqjAB8ocW4agP7xDDCy",
  "key7": "5TzgJA5bTfqHKtPS37fwn4qBewmGfLBDVXzDEXXj7tyrDFWN65bzzJWrq4MX39wSiwszjoM1Yyp7Y2AoPDe6XkqJ",
  "key8": "2Av1XJfGnx8Ymj3Fojy814wbBSSPHJrQSFJ31RhR2yR2yx3sbFC6Kp4dsARC7HSPYa6ka8nkDmDaWZ76LBddSEwb",
  "key9": "3A7hBzSCaCmNNjtGAMWqgiA7iMUdw6Cu6qFTx4XiCca72qhfdcaMp7c8tC1UV7bRBYzK1TZmvPi2p3cT1v87i9s7",
  "key10": "4yNnnzHXpawLSKVKieYvd7XSEpydqWSXUm6oucpeyb9SBifh4fphB1EziRBjG8PL1DsxrpU84T8rjejCCe8FjcS",
  "key11": "5g2o5PK7K7HMTMmEy5gdx2DfTdHBM3T4En4SgWghL5h1LgPLwiJZwbYc5Lo2gAbFo9pDvP1yztRKCr1kZmgXscGt",
  "key12": "4E3z1xr2HccDRV4AFzsjVd111fwLG6PiP1QnzCqzEaYJdAZFwiuK8MvUZSHdz8mpWGTWz98tzkxFwCXkNgF53fiB",
  "key13": "KBdNRQmGXppe46L7Rn2HtfPbeSS2Jb6HnXecPrqowABDKFh4dJfzx3FCLRThZ6k6vJQE6TCBYNguXdoMAZuzj8M",
  "key14": "5Z8rH5NqVy37qb9TCP1sWKvAWKeca6hrv1UoQNfcmtkgVJu1nv9a6RYEizQBQ4aGSpdqTwTCnTsWdqZNoHU7UPcr",
  "key15": "3KVei9KUb5G7xLm4UUXx8s9c6WU19fH4iMbkiKsryZx1hyTame8ZZHkqJVcDKfeKb3nTpXPFNZofVvbTin2NV8qv",
  "key16": "51hYLZr9gdtJyfqHJUXQPu3kmTyuvwK27rCref2KeEeDH6dajLNdcgzcdZKMzoSMSyUtGj4LUxWenyzBed7DcSs9",
  "key17": "4SFG1AwebiFjpuYGTd4YrnsDMYeTS8jhpq7vxHiqY1zabBDBrZ4EkncYJHScjksNAUt2Ukm3ogqrPYYAXzfKzs1R",
  "key18": "5QrPRwVNHcmys3PGUNLivY89rhDKdXhWMU49Lu7zGX9kN32BMdqvNQZ14sJvP1wMgWjfSgeGDejFU5NtCDgm2VWa",
  "key19": "9Kv3h58sTXXLC3s8V7QWCZK4UDwmiFosishtEHuBADEazuL2au6Fx5vnPsapwDwvuFFUMRZzuuJJcFx59NanVRy",
  "key20": "51zn68vrf7w2TaLeohqzUazQnqKy3JJiy7G6o6LPpm2ehE9GsdZuU2akdZ7SXTnoN8TB7KTLfBhXnEHG5Sp4Dp3J",
  "key21": "5N1u7ZCt9eZPRuoGJhXQNA5ebdypYdB61GpJVHbqGpAyzZawLbSCKcbZrh3KfjsFYJ89ynr9Xqu6rBXLnDDonEsf",
  "key22": "JhbzTxJ68H75BJftD46bDgynSxMNVbPnEMTqP9Qg61XDVoGV91jvyvkYSxiaAbZRzegVx8MquBZVPK5iAQeRHBK",
  "key23": "5FNHyWeACzEVUNJFgZRYY2wZNi7xoZPuuS7JCRV6U6GzGrjuKMJBFABYwMKAG4qBrpj71SgRPyCEuNYrRFh12F6R",
  "key24": "3zQYGphSZJR1Jx66n4Hw7kLg44DvqTtjfNtVw5pLpCD7qx3AzzFH9GUvTtot4yR77aBDjSXNN4rwAYeNfsKnWXab",
  "key25": "2xZqmUeHhGgtByWgVjEwtnXvLV4ZTnWafbAxuco2RxSwacrEpSzTLcyVj73A4snizkuKYTxWasUVATTiuSP8f7aC",
  "key26": "7qdiMKftSMU2trMNaTLfb17dQj1UTZFsf2joF75XcTrVFdfG5yRdEV36uoZFRpCZimBmPnsy1KRfQkJa6Yj7NMn",
  "key27": "4vengYGaQw2Bz75UttbGiSEiQNvdSvPXFCM8WLGZCVj3ycoupaBVB126nWf4y9tGXNnwjJpHQQuWGMQaCmDmYtAh",
  "key28": "32aYhhPSJYgLddKEazPRrJLECiCdMLmoahZcNpVsTdwHYR5iFRXMURjzD9rt7MuQDTwyRtq2FAZiDzkQ6JBKqoWd",
  "key29": "5wLG7mbesBjWUzbCGXtVq1xRv4NwPpFjh4ukC8HgdbwsNTTzMh8bbYfHcF6Cb6EZ6niR1fMu5eRfCghhzjun1kfu",
  "key30": "4iifTxukK1FNsKSWURNhemyH86BaWCbjeKJ4GuqepXax9xbnhcFTPMogwLvMPHfRp15bh3f85fZtwf6ETVk6Qzjp",
  "key31": "3JzW2Yxxq3F3DGM5dNH5SAHM8xhzbmBEXtdDNdh7NCEdJUUE2pWY5amjev3XoGDkH9NqCnnfL2a9ADLc4s6pdpvr",
  "key32": "5biXgDKqEbA5auaW3oe6Hmqrw74PLwgVPpeMMafGaaVokBCU52qEcugciLHdavP6iQrfDYPQkoA8heo44mU5eQBB",
  "key33": "fjA3TJUFKvaT1QZzX12S53AyPGLM1yPh6f4PEUDa9VZGBuPZGq37goWAgSzFw9f4jKPJsyzNx5BpCdcjC6QaBbu",
  "key34": "5kvtxJsH9iJX2S5erc8s9hyRbQY5NvLkezy9zJUPVxVPqHZCqPXMany15fg63X7645C7kN2PMmdLzigvEbRKGacp",
  "key35": "2GXGcX8UjKsf4Xp7Ym2bdZkEjwrpMRbPDgieVm8U3vjtqKtD1tJsBvaNjVSbyNWUSMVez8EzXKN2G2tEA2WdnkAd",
  "key36": "3uJogPGZCUjjMWFmisaBY2uJ8hF6xEH1BVPTdtahgmfU9Wn2ArN3Gsd6Hygrg38DDNPFMvPys4cTvEYRX5GQSm1a",
  "key37": "28SzBrTwui3RBz9z4B7fgAwMCzr54MC8n7F4XGAMmnGpsKgbDxVHhBmjjCZkPRMRjrX6hQr7AvgeihoTnjHomX6u",
  "key38": "3m6vYrrUwNtLaDqxsGBbeKtKvrse5skvzZpmZ7RQ25eiCj9NKTvE3sFPmwCutwa2v4vepb9cdDQoUsb611G7PMJy",
  "key39": "3q6q32VSAnJJDrmqG68gqwKJZTYBYcQ4JKH1wJ7UzfHBPjCDoBo8WXsr3dLvAjSnR5GbHxWc37PTL781guxaTWxG",
  "key40": "4ZTk3WgqD2zH8QYxxfc75t39tUscanEMzPuWAxprDV5pzF1SbBkS3R2pMSDjRsC4BvuPjex6QmiwxGhDdqGVt5KX",
  "key41": "5kgJazQfyWV8QKGxYE9wqN1U6uMTUe8SqnUJ5zZwH7zdmFpvYfk3bCLj9vNioo2qo7GQBypV8P6deoMb9TSjqXe8",
  "key42": "5jCjaynp4Ecu3943fLc8PiNfQu5szFgcdh1sYmKMvdvKCxhJWhTobSLJSRYeBoQrzs6tfaDc5wsfxB4w5pRJjdv8",
  "key43": "3Cc8stU54Dn2mY1m9pbRLx2maVkF7e2TkCvEZ9atf2VbfPV2HGgz2L7EA5zfJjGHzogUCXXDnSSUzRmucXxEutZZ",
  "key44": "5hRdjBj27dMQP9AHHg1BE6BNzw4Exg6av1HbyWG7wkaj6V1GVRnPtHJkUPdnJMeXPtEezN86cNfMmSEka7o33qyh",
  "key45": "67eKhE6wEq9hLowSg2SVdUvkLcUKV5EWDMY31LdaGwF3xwQuB2oh6Ksnxt8PBSuQDBNrX1Y5Gxesut5jD3pwL3YC",
  "key46": "3mj2cswXfhY4e9wakE2eQVtYA9Khym7CvMm2ffMEpKi962PJ7tEXcVbo9VhuLB1SesQteJm4pPSMyxCiCqGNjmou",
  "key47": "2xkRVTRbZDvpo5fA6H5CPVp43tu4CNNvnpnvYFT7ihpdq8VTv35nGhCscfUdNJbEGUCUkkGj19szf1wznsroq6xT",
  "key48": "3ERZsQsKciuwqRdHEUSpLBMSKCDaanifr1fgUGou8fBjXaWoGuCw4THX1nyhn2WSJTGTu7edmf5wbkgaFV9XGqFx",
  "key49": "36wRMF8k6AkpfmoLN9Cdy5mogf3MHmSi9vDADHwgzVRh2zgHvBNsjR6xmyqKmy7Fp1CjBpXRsmLrhXnjXsfs9UUT"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
