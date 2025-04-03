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
    "u13Y6RZd5zax624mBPG9eLXbpgfDRVHpayNVMSVJRcGaowrXMxddSeLbU8N5pYPnj2XzN6p2f7DpjSKMj6EfRgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pEdayFzziskhSHavXgGNWYYBeowEjKdr4mSMhpeL7yeQorUFQjQTABsq5KESqMnbRyV4bkY3fLJVd3SV4XF4ffH",
  "key1": "2RyhV3oWJYFfs8RZrSsDtGQ5tLeHJBNZitkduz2ueBfGuCrakoaigGnoUi7YxnVMARTVSUJmiQoaqMNCZcoxZ7rJ",
  "key2": "2cfMoeJCBG3ogJ5TneK4QXQEb7N4Xdrxx3WMdYfJmyqVd9WrDDVk3v5UqaqdnuZuSVShh8M9v6ti3wrhsxw4bYxK",
  "key3": "5bmhwtMrSK6uKFAoS49UJEsHYP7XXtvGHWzeTeSxPf9Lwn78YRDkgVpoynTKZiFQumPHXChPEQf9dBV5w4pTsqJA",
  "key4": "5da5v7mRTSR4mDWpP3f6SFpwvgsQ5whRsgRX2yHB24KVzrbsRa18VBCFGTM1D6uTe8VposKnP9jUq1qvGp6GAgid",
  "key5": "3PrVpf7ZiW1dtdTnskPYZvkQAEyBhusrq7EijVLdx27JQiWg7XtAkiSpHVr6ybjH9R3cNzfeeFE6JqRL1Kbam5xA",
  "key6": "5m3mjEb5L9PrPV7nh5gyz2Ur3FicEJBppbqRyxGeYeiXSFtrvTHEWoMUR9wSAXEvdjF6SoNCHFmY26tiVh3Pubo2",
  "key7": "5dkjUyXk5Q8BuYvrnhMxL4rmfFgXc64khdWyC8Cf73fHwo2eacjrBgD3AQCj6g5orsjxE8g3iUw335G1dFbUJYN9",
  "key8": "3wugk9R6Yaus5oSPZwSf2H9MEqTfucHoSSigJxzJZV3Lzv64HMKx42g1mAFtuBDRdhrmMimtKWsWZ2H5AVLCaYfQ",
  "key9": "2VRAWzkpbNq1wGVPwNEbjeFvjNzzLrUDrYj7jbUQcsmfCVxLqLiW1eb8HFxc8CaJ7x5tQX91iu4VhvAHuj5DMWzE",
  "key10": "2to5YGEieFwLzpbgduNFSLFqHxhw6giZSzuUEobQifDPkXDwzje4okq2BbAXQFwi1dTX2D3665c3SJphzrHuBPqo",
  "key11": "3ZUSL2VVH633obUJ11k3gsT5MzMRR8vKzWeRZGGSMzQcPYGTZNuXdC9u6dXRPXf7UnpdYNy4nxXpxumdNFszbgzP",
  "key12": "eYK1bu1XVMjv1judzDfSVyNCvQViVBQ1CL3fjnQGFKXjUB4jhXjAJ4o9JFXNVH5kPDk3t9ogf3GeHmB54SdBs8k",
  "key13": "3xmZ9BEpxSVNUQ8sPXzo5EVZQwfkVkHwcK6UJ8KhC6HimuKbz3TxwayPvp35ceRWciWHSHRnHPMgNGmFjyARLemA",
  "key14": "3JLaxvd2tE79nSELtET2tr1dnJdRawjsxbfPzLiduwKnLX7U1bPqwZ1Gy4QHFXD2TXZUaoEBdhMHbhq9DQiTGpEy",
  "key15": "2nEAHgYKDXGyWQoi6MHWg5YKjNHZvPPwimpccpbgm2QT1wHS3yiP7RePUQzWDZDY11R1bn4MbLhgo6eK5BMhyaEa",
  "key16": "3PsSbivea2L2GrowLME3EzLpbxhNhc2JVfX9UDdAVjhG4qh9EbV9EJYMHmYheMtawMuhzfEA81RKEeAQ8qNGhCLu",
  "key17": "2K3VSE1iPATgFox4BrPhi7DPYatQhjG7UKybNkuHJEGTRp1yoy5gAinD1zYKus2BSFNtbh9Yofox1udKaKrSvfVC",
  "key18": "5NxVuosAnT3eZcr1vRhHexfgM887RJNYUBnafm7Xh3amL3inSsPeWf1MkBn6Ys3k21bDKGaFg7CGYab6ssuifqNS",
  "key19": "4ePQcXkABbwhUma7FDkbbSNzQiLWxFGYBounoDTkDsX9bWW7Lguovxx2iRMX5tvMkTZT3MC7hNwwUogKguxcNaFn",
  "key20": "4yg6ARQM8ddxTof49HhGEsi45GQakaQnSiE9CNMZj1CgpbztPijo6A8Sb7v7xmAPQLRnwDJ9hN2uVMJV7tX6tegZ",
  "key21": "3doMuLrBVcE4V5dGuZypJ7HgHLURiCrv7PM9gccSkFa1FiKZ1RmTyFCvPWPSAQRZX5cLfCPWSdCNA9fAGuE6WnA2",
  "key22": "44KM5ts1LnG522jbgnT61FWTTKye7SuJyVoXAgFU5Vr3P549LrBAYvxcdiLAQNehEoZi6U548n5coc8tMknd8Y2F",
  "key23": "42a4a35mN4HqnEBmDuAt9VsMQDbM1BTSPBkr6pfA2hdsbmN6LvnhBpmLgiZkRMnaV2Lt2SsXah49KpRk8s4Nj9SE",
  "key24": "4GxTCM3iYm9QCJNUSHkQxspjwWpva4zVy2DKUk5zYYpjewqfu6fxXcFGtowGmWxMzvbgqiZGk3fJsR1QpuEDQzyH",
  "key25": "3Nq5BtoDD9VUMnm8ZsLwGzLxZZXBZjLNUyKjCHLzXSp2km3k9mhweMw8VeP5E9Zd5EDDJG5DJfnvjojWyAbDzrVT",
  "key26": "3ydB1KHvrHgZFn3iUHhjM6WPq6Ms68JDaoCw2SKsecL4HxguHWwN8hMTyGiLNr4hKNLQfnoFTMJCkjXyQn7hTqd7",
  "key27": "5zRRHN5G52b7XdcYarmcUHhgpWATmtUZPViTVngSaMC11g9Y8BeP26QCDaBQJqERVigb1PSdgPm5uvQPH8qbCBFJ",
  "key28": "3tH62Hy4rWbay6e8RRV4SJWP3WSJwZzgjgw3ppkpDkrx8ssmCqHRcVtLcLJQTF51LEAcWaJzaq73rNXgA5yAmgZM",
  "key29": "SESLzDbLvFkSqu3Nftz7D89bekzMSvgShvKL13D7RUTvEqDbqLx71ZKKRZ8aw4siv9p8FytBAp6aET9r8CC1aN5",
  "key30": "3eaW7E4E147X7afDi1SCAZT6NgUuBQy5ftH8ogbzsR43BaYGaNxkB8b91fcUJMV9ERRSuhNjr7n5JwYMCakkcWZo",
  "key31": "W29wUntTFa7XdgNUZMxLksWmAQ7P9dHDA3AZdt17EqSo47x2fskpRMdvTptrEVWce6uBQCBEXWwEUBKAiEXzYff",
  "key32": "3sVihYXiohB5BjEqJ677PV8pySRyEgPBytSNdhjMmPdfdnDuptWvvBoyRL1vcsSvbQrfwAFcFX1a6x1uYA4BZMjH",
  "key33": "3J8Ls9FPTYB9ipDgbPkQJvanYoBgomsMrTKnG2ezZ68Yu3QTZuFVBJm18yN577nGeA2d2d413mVHaonJpSCa33oz",
  "key34": "65qEX4MbdQy9VKs3HiHCtZdmEUN75mBvk5RyBbqVubRujEMfzYjkVJSFwiPAWZaPs2TaaG5nreydRMPmRBsHtjHR",
  "key35": "5tqDDC6RskF9EZDJTWPBPFsXVx5NrJoVePY5DQciXWzmctKukR6kchBaeRvPxYszSaTTf8nJt3WWzseyctcDj2L7",
  "key36": "YfpfPSRoQ9f6pbndvbmMTehd9nkSavNbHCWHeCJ1r4Ve2akijpFRQ5njNGDpKPKUkXXDuUePVuSiRi5hTMDd2ak",
  "key37": "sxPzrW5d17dWMjtc2Fsk1BihmFeVbQYTFfM2MswJFTmPbCrVw779a8xfTPYTojT5mhesGRe5ELTjQMgsmztZgcJ",
  "key38": "31MUTHL1YfMLabHnGMNMGjnngZwHyzBLxmKZEZzyhEH388pEteHxJxXY2ZRdsEQRNJe9khao84Q2SReSwCKz3YUj",
  "key39": "3rGRWPmZajFAYUGsLjHgNsqcpXbZUbsgSPNkQGnnK78HzKPXEuSBXsoDyU2Df3kNvoxsSrjgha8JZ386j5FbAfrq",
  "key40": "2TagzPoj8QLeH6XSdkZBNTuKcvszUE4o5zZc36zzZ5G8WxHyGKXZ5T7xhifbBcc6faDdbrCNd6UjyVc8Ug2YLUav",
  "key41": "8UFwBAqsrCf6PQyHrwB3rFzsZZbnEYNmNuoSfU2L6JQoAyCBFEWVpdSEUnKGj2Nm4FzTbtbidWHbyJLTNvW8J4G",
  "key42": "2d4A3MX3jpUiunHw1CWKNz7vnukKFTTxR4ABCCAWDBK1FtnJhhw8H4hQ1vycWBVj2RJxNe7U5rhcscrswmxvYDNW",
  "key43": "5XpeCQUU5dLfTguczBii9PnZjm1xkdscvKCMHsHj1dsuvpn72hj3QGRDRYixnNTqrknahgxoiPNXu87aDkpcftZN",
  "key44": "3xcgok4GhTrrG3dnpvKY6n4VbKJBLAeEaoUzgt1BQV1wFYcyRAs838T3bvts9wXf61jTHERMcbFzGeh3gFTQ1Sho",
  "key45": "GV19TnWveE1TXNzp99yeYQkyPmS5oJHjNZBuy89v7dxfsmCbekTG3WSfNcTLTfzVeu9sUtXx5P9d2PYDQ2FZ61j",
  "key46": "cDNs9NcGJLLHPguzycjJHcePLCYnjE31cY5UxkUuGa437v7LpSJLPYrUmv8j4Um4eAd4fXdju2kHH7XyNTBUqPg",
  "key47": "hjZ2CpzymhAr83cNejZGLqS117xe834KYG62YT6VnikLcrECULCS22QKWYPKxyi6giXuMrFp5LBgnfHbueaEVxV",
  "key48": "4ntg7RhDJeRtFcKkTEKFZFJjCqBqDgWpW1PyuEgLMiSRoje23E1Pnyd7nhXVBjj8MjMweJaLfyvWiuFd8zm2k6uS"
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
