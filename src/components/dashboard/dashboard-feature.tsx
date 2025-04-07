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
    "3cMgDo3puTVtEy9njrj3kcdQy2sxNLK4JaL4mB8Ri1c7VTRPhan3mNTSAhz65VgGmtt5BipfGtXUNb5RikP3hYoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sns7x9sCXT8HuW9vph3321J1BdH9JvGfdoYUgjy59JcnP7G8poVT18TfCFV8bN2WvGbbywLr1B5smxD4aC44hcX",
  "key1": "3qFZxwoT79Lixfm2NEAPNU2ATFfaQ5e5CpnkqCTQYKWiETBw42iwSAJBYT2vcWL6B1sMqikA4njH5VN3VXekWi1x",
  "key2": "55GiMC7xQEQEfAC1N5Yw3PM5q5gnSyk6ZYTAyhqWdLs7Wi5b2zkC7ACQkn5wXcMDGwfasHprndGDm7NFNVMigRvp",
  "key3": "2kp1g2EDbX2gmsBfu3vgZz5MTNfEtYSyrWitxFvEzgQsnCG2xKAVYDpUMNkwwcNNsi7FkHLWe5hFW3wimsY3KMBK",
  "key4": "DGUqC3iHpSzjRLBjuLMvBFtnaNZYeDkNLBKScXjuvrPLXc9YpFFfJ97FhPfFP9hVY2QbMnDQ3i4ax57BZ7ZHdCt",
  "key5": "4kUhwJcsCKa42ZsBtFMQa5bKafeqhgDCCFcsDAuNwTMy9aeH811jarRLmBs46voRHpGzoA2LsKPD7HGnhBSC4vNS",
  "key6": "61zwXDEaZ9yWJFjAQBhb6tm9cFrMeZoWbNuV3BiFLt1XfJVKbnsAwXAtJjno1Du2ekhAf51pppfEhKxyAC2xHbUA",
  "key7": "3JX3VunS7xTBTFCHnsN5Sw564WuydGFxVLDsuueHapKeY6RNor8CxKo5rDXASHnKKDTKHxqARA61EUnK1M1mcoT5",
  "key8": "2tMPz98GizJF4qvbsqJh5PSBaznsaoitVuVEuw5PfwqqQjPhF3DYFLr16Dh4n1rqU2BjqHKcdWFgrv3wckckM3qz",
  "key9": "3RaKTysvnbLYkAtW7WSoDUq8TMAGv7f3Nhtpb1URpsV34mjSTcerdM3ZEkoVigCscuB5agVFkVUBu5gErxyjt5pE",
  "key10": "4ttqnEo1wchQ8dos93uSKEX81iRSU5NYa3aFNNRzfm5WNY1UipFBLEHxeVSYHfEn2G9d2CgyiNFSjATfheG6tQpB",
  "key11": "5LjU4dxWUWKh9FxhHj5kjAfkYLp2dNqZefGRd5awvQ5LtmBaLqZpU9XZUipUize4Kp1Xhq6CXCJKZZ9KJUkctk1x",
  "key12": "sDGJn5dedPDLhEMLXA1ngZCVH7P7kzZ9gBd8PLRXWDudkQRj5AYeTVDSd1KDVgbpu8PpyLZGfXnFEyAjBainyeL",
  "key13": "3aiasUJBbPocaTzJbUeRp4yAqPM1kPwKk9PQMBcf7kkFe7YiJk7KD6KvLjTwJgq36EMJdcrbNVmkvnLVpscCi2t2",
  "key14": "3S3YdNcKfSYTUC9wtkZLAWVTh4g5GD8sqkdjJ9bUC6EmVpvuFxmPP3aishnHzYyPWDRX6coDFruxmfqejZWY3nmR",
  "key15": "4os77RQ4AJqG2jxk3NZwn2JtP3ChJnP5DfUx8rKqxrTPMMhVtgGYA1LJq1qJVQ87pEAUk7yBhgFHVYy77eaZy2Wi",
  "key16": "4JySwDJmEAZwUBpgngyTUCJcaYYT7K1fENLgZR3g3Gzus7Ni5EGpdxzrwuisYR1xoeS1X1vq8ZC7CWEjsZsw7VRh",
  "key17": "f5hNVeZ2QJbgDrkPd1Rt66c5DhPCPGA19wuTXAoHDqy43F1M5gqmsPyZQjojaSBFWx6f9u5rWx6AyCsd8X1fAoV",
  "key18": "4dETLcmva77fvuyjYgCtXtwZfDuYVjy58Xebc4fdk758KaKLJeiTpF7vZm19V6DVMf7xM1ButhqvHkvpFvmk28Gk",
  "key19": "58kxPhatuQgcA4Sx3K6a35ZYTTu8LBfGN2MEc9HySkb9xVPxy5a6iuLm9sH23AurRZN5cTzpBv9oaKKKL2fK12fz",
  "key20": "t8fJuSzejdYYnXjsjiSLS7cyHqHn1PKDgz6QbHZYgbwc5HFLnS4Goga8GT1eCna3tJCg6cyWB6KvUARbzHrbJzV",
  "key21": "2vAKW61EvpWca4tg1dmnYE7uDuhRTZgKjhqU5rb78AU25Mdyvg3P4T4KAUVG3KP4r8xFksRCwogALt6TigL3Doqn",
  "key22": "3ZgW1gFBHvhK6sR9kaSzwHipXWsinXsRBG2AjQxxMbNmeh8AugLDHHZj7LEqEXbRrLJbFGXGrT4rTWwifxtoktL2",
  "key23": "2UoArrDdzXFur1TxZaKZhCSnnpyoGoQHFjdA2sNjdmApRHUKT51D2b6pM7SmqbatfwXaP5kirJddeekuQkWcmSCp",
  "key24": "4ztzCrssaHzCCjG9cawFdERpbPpSooPDDPpKNCpKmxwK7Z8KNNgNMjzkEuwNgZdqLCUC73iP2zHSsL2hyn9ZvJ3a",
  "key25": "2Aqra8KD6EKRCT2qMnTzhpP4RtCJtGNPsRjNCfxwbPVzwVDpSzNy28CnPUtyJYNBemZMYrCMALG6EySpZoFrjXqG",
  "key26": "3cDdEz9c3RVEV1CrsPrBcxyRN75GP9K4zEXXJ5m1ZRkTKfex5mfKmkFeCoFSQ5b7m95pBYWmHGPEY2ZUcwU7zvkN",
  "key27": "g8FUW2cNxkucTNpzgfVAEYiCL5SPrq6fstfxkKioPk8nAAQncsrVxQriZoZ9GELkctofUumn5im6yycJwvVKr9Z",
  "key28": "3b9YmKQeyogMMyTjE7pRW7bM969T74FVaCTTDYBTnfhTut6k2XLrRxxq4gqCX3FkZUhZTHJpz4Xv1Xej7icS5Dep",
  "key29": "9m8VUj4QbWpAmYyEEAJcu5z8o8WBBu3ao1tD1GWhmE826TMQpQMHHXTwwYRa85sCscXiHNYME3oqxzLiL9MkDsf",
  "key30": "detH7hxJqxJYuJywd3yyqvWoWZYi3S4jU2mgye3KUQeb1rxCMrBaR9in9W7Wa6JEoJufmngaXyVRixkZdYMDsps",
  "key31": "2YJKUTLBdwxUDNAbbJx5r3d2GjJGPLToUZJBYQaXUsUqmvrZJzEybtPf95HfRKzoghJK4q6cPKUdXCcZZ6j6wPvY",
  "key32": "4gQq1CWLGA5wmYeaX3VEuVP9ZYHa3g9y3LDKyWEqRVQycwmxvTihV4VCaF8wpgTqvqd67h3e5yrWesHLcGCHK7qB",
  "key33": "4F47tjiAZTgN81V9b9rewsJdRa7byANDHBqugnkW3y5mZ8cfrdHpRPotPK72r1nuHdU4riMB7K4T1A2q1moEtpN",
  "key34": "46vRU7oDuhY88az27922jEMUaUeM6EzFPB5QW12fQN5rmiwPQKmyyrLF467gDkkhaRXucXhyb8Rb1q5omTxCcin",
  "key35": "ShUsw9V3yhUxkeiQcGYEtpV7C4ccLQBRyZKB7wP421J3wGWFHhsYsz3rN7tbupa92734LiTskNWje9KXsBSLNQX"
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
