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
    "4pmYWpUkNBbRPy5ekrTkMgNBb5CZZd7BvcmPJ9GkbrjpswmoVCB2xYYjmxbjiy5wqr2FQKxh1KcHCkzxgs25HiS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bxxMpcVtVX1TjeKFVtXCdwezVd1nAZZQtKeRR8h6zSWbRGVHm6n6d6ZeQ8eaM535N1q9GNgH9KsmkWgxRBTXsdM",
  "key1": "2EAKC1aQv5GEfh8JRQzfRyCk412dcUDTaqxjjVFgKsmim7VbM45jKY32nVZtkHh4ox6rcYc6q49w8aVLjkaQdnRo",
  "key2": "5KLCD6iFQCxSVjTB2XZwvaxawbwsBgNmoQXi6LhKoT58cVx2dnZsXRrqNGM7kfsJkmorxrwWgznXYpN3UimiFTQ2",
  "key3": "gzAqaqBrqthDEqz7wfVmSEvBnfuHhgCQgXZYtcPfPnUaV42BbC3EsifwV28d7Re6nCewF5MM5swUa2JEWxmBvD2",
  "key4": "WeDoKuLLd9gWjbAQZ6xniA22cXyEikY4uSq9sxqrrJeJnHAVgGgDaJMKAzbP5s1YktckT7boNytQ6r9ci59ghet",
  "key5": "oYzzGzkjgYnRSMHYkxMw54k6mYVZxdREFEdNBkAVzeGZk91BmsP7foCNLosRywVhDBS5w1S5k4wUZaxPiE36oJj",
  "key6": "Q3KBUPiSYpteaEgRbjPfd8ddbFT3RKvJeCHjf7K5tL6sf6p4HUM99VqVtj5i3DL26u3ARyq6uNRKJvLKH65DHj8",
  "key7": "4fuE1C34JKMYg41kTDmKrgzEYbxfoPauU7Vu8xVsUxaqULNM6uqwKhTuR1S2nio3GReAp3Z53LRkspCRkQBhke3b",
  "key8": "2zNd8HqbtTDGJhLjXWGzHgtrrZEDqWMY7Ud9obyqzEyUpE5igFophWTQnpNtdL8tESqbFKMMaSkf1FTjaJ6Y4zAa",
  "key9": "3bWBbGRAiKieE8a5r6LUz8jYfUFvfnfio3TRPPRdZnTS27MsCbFqBwQiF8WqREefevmK1gmhwVp2J966bRS53xgR",
  "key10": "3KJq4QGicNkRgK2tohDxjcZq1yhJS1Jp5KuTWQFme43WbBRKSwh65uBaCDtQCfBXt7z65j8dkCDXANBcCg4XJQWY",
  "key11": "5ugcKbx4NGb1av2cbaCUHKRqVjpqHv5e1kbrK9H5zK1pWN2w2WerRZcSV45qy4QwjcxoHSEMXCMD35HKBQtE25cw",
  "key12": "3ZX1MbqhphE4zr9XEmp19WQMk9YBrpKkCs1cf5eAPS2hib96kAWeYcTFCuc8cUBFqZ5UR8wNkCsxg7Uji4YsBfVq",
  "key13": "3fsu8CCo1suwh8ysrPhRVW1FvzGPpXxRcrsKof1iLscJGiVv5AHBT3pjd2eeymwPNL4juZpDfvMXsRawgoEVPspY",
  "key14": "3sWDAGn5CfQybVEPpn6S2fw5KNaeievtAbnmgpFtKbTNgBTw1sFUjYPDQyCJLtALykSsopuhr7UqPjNyydVR7scr",
  "key15": "3nENoVqm3545keYNrX4ezuTxdnrf7a7FUSXhsAP1mNXieY8HE4cLFVgJ6ZjaXk33abJuRec7bRt7rRANXm7hXuxU",
  "key16": "5kwBadgmGRLqBQex7kRJbshQmfr9kuszFTbmXnapZakwX7Rd54iV8MJKeeEuVbdjg3x84Z7e8xbL8WG3K7VCo8aU",
  "key17": "39VyWuNud5XjYddXgekM9JJrhWkUwB1NCYQqJbCBiAFdckuDscUHeeAfJtWNC58okjBidnmp5RgAbEbH2g4Foteh",
  "key18": "5CnRZAWFFy7TRUhX8R8nW5E5AfJGQZZjyknxvb5aF1Lp5r87KzMsDXi9UDGMCaxM2LswhhfrE8DmfhXHd5QpnAsR",
  "key19": "4Whw4XRysKFCNGd68pkRcAoQRLkiMvpJmycEQAc5EcEsx356xz6KkQTVZhf8sgNoypr6oJmJ76wkvPELfzNKXh8w",
  "key20": "oimCQHdi4GYtSt5zpfDahHcUCfVECFZXLHEQU1JKfpYyGwix6aySD22U9LC11sfdz6Sum4NpEHL9vUWXk3MZtFC",
  "key21": "4oz3mXkMVkYo1AWXawqXWPvnA8q9jD5MXMSxMwFU34SxgJboxQeKeW69w4N4WyF9oiYTrJy5SEJk781MD5w4JN8c",
  "key22": "yqEFUy34bZvVsMucniAN6yFST1As8za7UNEx4p1pd6RjGAQJLwry7NwKTCBVFZAnbDs77ePkSYRAGdfHNw3WMgU",
  "key23": "5pweWUzxm1BtSmpp6DHyPxoRdWp5qjgBL7Kg8QxGef4kTVmqWSdm1nJXH91hUxVnNo1pYCzCSCWTsLPgfWjfFYVi",
  "key24": "3q4uUhGXEeCTfwPtyMYtYJGZ7Q82VGcbiWX9TG1pX5bi6tkRNufbaVYNx3u658faMNJ3NtMmb6GkixBz5ZcGrZCc",
  "key25": "4c1uLMDaPsv1NFy7dKjwjiW6fmtcRQEKfEBwsk3Jyy6P2vCWTCqSQ9Quvp4uSKSsvcgXxUsD77YYJMurnz2qmHif",
  "key26": "eHdLWPhzbkVRjBM6MUawQXDxw43dTq5wBuudTZ8QJz5Afc1b9SskfPRfGqzBXMXtU2QwSPR85VCTYP59G6qAqZx",
  "key27": "4XcFV7e2D5nkQh4z9HGFuz86bGnehqCAnkh1L4qB4xubH9KVPsKVyTSgQM2JqZmFGjF1xYqSiBvqU7cVFHnAMP8S",
  "key28": "cpokRaffoe9i3cX6TNcggNg9dYBmDRV3657H9zeKMUCLCiimowfMN8RvxDS2CaCinf3tk7AyLKdN6C87NKbCbjU",
  "key29": "2CmT9L6C5zRNLTVhPazyrxvsvt26f8gQ4FMfyJ71ksd5nvCxtyokuTy3XX4cnRUaZ13AwgiTfBqxqFWLPAaStvKj",
  "key30": "5m1iB5cw2cGaQHiEiFHw6WLGjMgKQpSaG7TM42p5dtWe83vHhZydyU5iwRx1oqzhzMuHRWzTFnVdkKLyWtoP8Joi",
  "key31": "usa5stYU6pRpWJSXmmAZ9uUVJ1jLTxyAWhLMQhGQn22MSAwRmmY36CzmqmkNipKnXVgvSMNtdhB2s4EsFk6aHni",
  "key32": "31MewaJA1hzrs5nFJqdSvvAD6eVopRcdVDMyDMLvvDebQtRizUWjsLqj4bgRypwXZncb8VmX6y6Gx2idD4DCW2f4",
  "key33": "2HvczN7HnTB8hGGzgdeYx7JtXpsHsv8n9usFBp3LKB1US3wnpXmMEkjiDU4wbwgktDDN64svpJb4mefPSZnntKru",
  "key34": "huHYnTUJUkvdTWqxhnXnTBcUcDBaYzHh4eHffqM7kHtBENUT25J1hmEYTPSwZ2jMJWL5Q5AwY5gBjX4UaZt9MFD",
  "key35": "3pa9yTCecD2v4KRzYYtgzqyeDHynKdU9dmnGzrFCkb7MKp97X75ffh5M1zrutbuZaY8quR2XFvgJ3KdfQXETAnmr",
  "key36": "4qH23EYxhM8E67QwUAg9xZXhMnFR9XXH1C9tsubaTWwARAg2fxniZu4nyETtXfhbMAgmcghA3LynC6c5eF4iSFSH",
  "key37": "Ee5qEMfCL7JSLc5VJKQnrmYDV1Zdu4ouZQD4DhThkeoggLCHVoJ6kXRBReBvKfe6ukmHXe8nvpiK3me6UuiJV9H",
  "key38": "2AGpMMxRQEmfz5rTvmprjqmsoqDKU8b4N3zmmnG2fcpv2ojJqew7iNceFGJ1MRCUL7AV3vvs9WRFQeLN6eyjef1o",
  "key39": "5cg1eSmbeA83Q8hsaSpiRRrAwwmaYigJVmbK4TQVMpaoVuuYXifDBL8FUpMH6PiNzyvTaPoWQWq7MsNqLyPzuufg",
  "key40": "5kZrmvECvDAgQ44sWVmC8rB3zi9uXgdhZ5x2qSQVRADHiecy4M9RjvmuBWD5XpknFSAt1W4ZKGcJZ84qhByvmMA7",
  "key41": "3SHeV2xFBYciYxNoeB2tB8cjZKDbn4Thi1JxfETyTmmF4LuXUKCz3KrnUQ9PY5v4RRkfhQPDkfQNFLFnyu41X836",
  "key42": "2YvMMGyW9uYwxThQgaAfuDH7dhBbHnvNmJ554oB64SYQLsK2kN3kg12msTMWJ7gJQcPu6aYfxfJkb27GGfR677nf",
  "key43": "4taEiUftyituyWWbQqGk7kx5Uz5vYyGpBrGK1GBFYNbNToMzrRCPz1JAJe4QF1cubHU3G8cUTdeR6SSmHseEvyMX"
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
