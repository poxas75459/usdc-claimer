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
    "2ELWiFpaXkj8aXMVfBLtPnEoXYhLsZknTjEQ5RmbKwvjuy66SrNSMWzo93nhqz9BKfAqJXgCovYnRr7fjsQcSVBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eJwTWo6tF2qswYfj6En582i6iZMWydQ5qzZWpTtGLsfC7csTaKwrADsHmkLao819dd8rzPRFy2zQu7sadm9r8Ff",
  "key1": "2QerAxm4aiR25poRmaePZGFbiGFHn9oKPL9GuGGbtPpDMxvETEBWu7JVCNdWtfEXhiGUESUoNFD29bp56EdjZQRa",
  "key2": "Yvgg2HKCgi4a5iKcbENwRMKx64AMJ76j8LRX3CsBzMgbXcCEiNXxyxp3EoJ1MCnM7QP1FNPkSHps26GtnApsjLi",
  "key3": "ZQqwbDhUKCPAk5r5HMn9AxK7qZyKkjGz4FoshxypeuQ38hPJnLHKUbMt2xJXNyKbgonhsehSEEhFiH8K5C2L2hB",
  "key4": "5GJMqPg9gpuf3AHqDNLNsmBNXkLCaSgjqi3HLHccDAdXwQsq4HzBLcu8bbvRYbpEaFxZ593c5aK1GM43s3nDyHhz",
  "key5": "2fmQNrv2GPJNr6SUi5c7xZbVAWf3EKDDJrWbEPrM5pKiG4zHkZ3ULkz895cCDBLMU6oXL2kdBwV5EkPJUpGS4Qrg",
  "key6": "1uizfdp4jPPGTRMxRRCngannYpbmuzN62s5CeuvToUntGGyHFauhmTeuwdkH7JWvv2tnP9DfoKx7vadwskrauWV",
  "key7": "39AGmNYvgtDN27fP4nUXRW2k1xogR5H4o6BEYxmiGot9cHvJefQva5XiaHcT1yPv7mVkKrFQ5881mBB324rMXR9b",
  "key8": "5G3SY95pxQw8ehgVWsSAg5WziivR5MP5RJg9bz1chcx7jq6HwW6kHSx2PZk4Agf7cceEgJjfkPGU8N59WpF5aLqi",
  "key9": "W3f1FRzSFpK5Gig2nQAa6BoLAor6pnTP8sFzqGHxhw7J2BzSqUeYZ5vMpbmwf25QAWMt82ehuZRoYNgHiYBQKnN",
  "key10": "DyzXsdC6yDTaVE8sAMhxSaGhA7fHmdcRqYDtKjWijPPKGcoYNzDCmH2C42RKLRrcesDx4LKv3WgQD9fsBzhpQ3p",
  "key11": "3ZoYJe1Qc4aHrSXPaKAjaDE2sGYJLbVzAoAZG5pSGyNHhHF6JAWFXejNfmHM4J7he6G8cxd3sKxtj817xAsAeS5i",
  "key12": "4aj54d6gG32jXuiCC1PwGFXtdAbPthdZpDDks14DvSH4j5VAixXEy2uXw4hxTAVwVcEoEac3aenBnBCVt1sRE2Fo",
  "key13": "4ShrHrF2MuY6WfTuJsGqCKjGqJuA61QT3TuUooLM2ad4UUhxLt6vRCX3yUBu5f2gWtkuZFTusThztmmuHEfFxCkj",
  "key14": "418juoZkFxT1MKELKbvHZAhdKuhuNXjtjwhpyz6BmsFnfDYQC9WNdKpU6vufvG2JGQAYbm7jjQFLEQFS8xiCYWwX",
  "key15": "2HgscW8YLH6Kp3e9DSgRsMUEtptrnfyLjrDmj2Sh1D3DDPMSjvNqNKQ7TcTHRTJUgoUb4ZaurdYt7Jpugsm7QRoC",
  "key16": "5RYQjNUH6n7wySk2uLAQQPM9ibaB5QLWTjJ5FpbPM7rsf4xN2ZUeA9RH6C6dXFh8cyc7AGzZWBWb1JWn2BUNVxj3",
  "key17": "5oTPmotLrs8v61i1JZfdjPzgi1cA8JygGeKm2imAUVbdnnvLHJPUeFik3fFVWo1tpqMqCrhshDVh3xjNh9ePBXRf",
  "key18": "aDnGznfdPwX1RWNDKQgcG5XLnCAZZm9vW8kjs9wgLXqjeNDTF5r6RZJqbPxthGYQMassAXxXj99Rr71fTUx7yVM",
  "key19": "3CK3LDwYVJWoT1umV6SQiii9PW8Mru3BMnCtwfPzcaDQ9BfxmFeZ7rQqkTNWZ78KuQWTEBoMYYPewwDeAm5DyPEj",
  "key20": "6pHm7B5JrdC7E6yH375SfUi4k1z5eUJqN2tub9HdPLBLxAwAdApbNn4fouVfnJRvs6xoijSX8XDB3op8Mhz6t7q",
  "key21": "4kokFRbsX4jvm7CWQH4reRrCc5jG5EgmRLCmLHQDjsZrVXCuPZYrYij9iSCfaTh88sJzabeSH4ztjGZQs2fzHExf",
  "key22": "2eBB21AAWkJ7uRpsDdvNNKQcqnfbXGAsNvt8d1KFLB8gnN7e8udC7N5pRkYvT1gbzWCZpjT3FQyaq6kCtXCxvwiK",
  "key23": "3t926jCCDeK1vtn3qJjLpZSMq9SMQwFRAmgJSAn9wrAggNF8GAWKBmzTb2EFPZZmaVcFUKD5iw8S3njC7Sgf5hWL",
  "key24": "4Nws8h6zTyNtbq4o23QtXFVrfz4erB2chMVxvRszfgpyXCDghCQUZydCpMMi4cbp3AFaL8tdC6EFp7nLjKi1CFsV",
  "key25": "2njJM1WLHRFxhoiGv2NWQFsp9izWsTb3NgsyP64ixrcrcSBmLBC7GjVcPuUytk3seFHtaJq6jVuXgGVFXHzTGioE",
  "key26": "2rUSJ9HfhgiPo6szJqnzuorjW7kFhWC8XLmPJTASz6crPWR6A9G5dKThqmEZYRW4Yxk9Yv7q6nygb7LUGQeoCXRh",
  "key27": "5PtZVh6dsDWMxGcD4saaXHUawxpPqTBQseUHRiA7PjxhEvXWYctt2MMr9ks7VPcGrvBCgwMj6rogmMUWkYYBwNb4",
  "key28": "586H9Ydzob8av3fMVFSdEhthPQu5qXDccJYGxZj1t3ATy7sjjPPRx3ZgezaZxcy5u5qrqh8YavAxJG6C7r3Rng1k",
  "key29": "3esBWz7meBLCAzH3D2uUwqgm6pSx2pEAXPv4h5TK2DR7DdwL3JcoapKYhRYqFKDqnfb5wDTRUrEohGuGn7Yd7vQi",
  "key30": "3j4r3k2Tvk1JKVY2xgaHnnpfB14SCBvXGfG7rXnjNZBrR234mF4tpzycKCKrqDotBFbLxGuBASauiGW9i7nwg7VY",
  "key31": "65uo2WXuDuae7fy7a5RVMiiKzwDUSyPqjj4QvxAWJNfVK6UJGm4U3jXDfaS2wKsGo2i6KkgrgWMbPjAKDGchWvVD",
  "key32": "57ni6gvTY5tovqxnzy9H2VHtp54J2fspMhwasnFzUqfF8QHU4auDJcq2KQvkkbxcz2nX3kBGd5iqnVV4FTMG8iY1",
  "key33": "4DSAYegzij4djUHhsr65SvPspyhsgpEqdaBWoe5cYsCuuAyN7wgpa1rHLGrRfXgWZwDfGK5CDM2z8UxrgrxRoNv3",
  "key34": "2UZ8jqQzn7fU4cDnWtgAv31GUAquYD27ovrAVjnF9YNmrqK2QJP6u58CdnSuJ2CjdaaTfVBtP6qRPvLMVvGdSGm2",
  "key35": "4F8vjirazmzGHTQ3A7kfg39yvZBD7SdWmnjQBYcSVfZm5omrc567dooqwETdLBay7EMg5sfo3MKQ2pSqGd3pvMgB",
  "key36": "5tXGVRwcxBEmnh8ie5E6jGe7pafEoDyspkGKA5H7Nd9M7qTS62uR5VwEeC2SjZ5Lc4NocEstMxwAmiPbCvAz4xvn",
  "key37": "2BgRFxHMhKiesNwZS7Qhwe45tNgZ8Hb74NNeNmckra5EEqYcschfWFsbxLx7Ukz79BK1nWjBbqLuAKzsLjPpQwhf",
  "key38": "3uWzPTzFmFxW31RU1DAxWpJ1WDf7qM8cpsF5Uy7JARmxvsb7myqDM5KfREGBm8jwhZ7Ne4d3E6V24PGQnj7YUx6L",
  "key39": "3JzYCHp96m1mmrnf1jLEoGhShHTrV4bWMdchE4UyfPQjG1aQco5pcoSn1MHTiBi95X6M8KzN4CssvyPmB2YqvAQ3",
  "key40": "4ZtG75mfKMdyKawnBr8MPXn7pCwZ3NrKyoAmuFKXW4QfBhEwyUSE6iZeh35vo1YaUVfa8KyiyG95dZ6u2wZh98W5",
  "key41": "3sZWDUqrefo9caMfsHxdvRvcYi14mcC5SPXgtbNckbibC34QxbdakY58rdD2An93ACB2v61LsEYHBxdoDfbB8KhS",
  "key42": "4DpUAqn638tZtoqacutLM72aDEV7KHYSwvmqGAJ72AHd24EpPZYtLLt8FbJzXV7kiRfwksTVPsL5DpzkkVsUBJaT",
  "key43": "2HBfQEzvu8vbpvKrkDWnuebxteSvnyUe3bkaX9K3YrQ1UtjDEMdwZqF14XqSyzckREjMj4jC4rF74eqCFJwima2G",
  "key44": "2B8qyu7zxdXTJhCiGCbnGFMv4ieUUWzyJy8AiuCWdLGCR5LEs1WZVzyaXakGRnLLt4HVVmGGwjhqsGbrMvkTJr5h",
  "key45": "5YWzuULzsJiTNzByyR75F3SXwTWbS8n1YbL6Msf4Zq6JePpC1LSD5R1ANv84dGNavV5tnJfBB4dgCNrzCM1VySE",
  "key46": "4X8Pj2XBdmtaAgTFrXgGTiwgpBYokgZjCW1yd5YWUGsHG5bRg1QUjrBa4GMUwv9SBPKkwV1MUrLSJADYmKY9FTab",
  "key47": "67cXQL838z862VdQkgRKkZt7BQUMc38BKTV3JDtALhrYcZ23cuCCqfJujUHM9v5U2taGhfjUzgRuM5rm8XSyhFbb",
  "key48": "4D1smd8jjSmk8A6zdoRRDAfbSMBw6WU4tgMgmsjMRKs61VCJrUBpjZwnruPPWTmGuukyPj96oy5YNobyKuHy16s4"
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
