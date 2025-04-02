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
    "3zwqbrw2jZ1K337GmmL4UXefCjFD6iG3S9psq2RCfTM838oMCSDU5gJagk2W5bh48w7HsRQEFnaMmsQuKwFFJSPE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iuqbhJ1KystHsGyKcvTjLn9ZmhQXMqwJeREKXQ72qf7yrdZrrCHy6t3TQzg6AU7aWTUhsvkPqHpFXAeLpdtzCzV",
  "key1": "3S5BLVB9SWGWYYKbKV6B6VNp96WXgYK7tFHcvcvXWJmvjUevKosyuWdUTZMC1SN1QZM7zL9w8Dv7hNjXmXhv3uAz",
  "key2": "2fh8nZHbcPabYuhCduE9ZUaSG9bFHNZG9HgxLYHN7Gw1xxGrVf9nL5V5vbc1DBM2oSWyb2yTbfDEU7kTSnTyXqkJ",
  "key3": "5hp3rZ8WBqKctJmHJJ1L74KJHgPzfvwS3gA7cwija5PBtHvB4CZk6twcrmWAGHJaf7V9zCtGusjkKjY8cDptJd4m",
  "key4": "3Nt7N87TmtAzok79npxHzEK77oF75tZUz85JWdEUjD29dNQdrx2pavwtkpi4n1fUPskNvhQj2YwSG23UYJ2eppr1",
  "key5": "4y2cfxmCmcuD1yxH2JsfJdVJ4gHLZjVXjF1pbUeBekKEAh6tmkBaJAjXrbtR54CMwqoFjPsPqVzw2BTpwBkAp1j",
  "key6": "4uDQyyUFLajGYjqRbxsWJLGpGSnDHAfTp53ExsubYtybayF6KR1AcKgZEaSgyJzfruLRB8ZMxoytMU9fTQgAxp54",
  "key7": "644NdkfXofgx56ke1H8Hgq8hYFcyZjByEQM7pWUQY6b1QaMq2vFfBjnzZ4wSsWMWmY2zj9XqUVSwt9mA2MLWVegP",
  "key8": "4g3aFSvJPpZxV2pkJZUxpBxZW9vbquVuANBuRE68phD7TUpHPZxangwRXmB9ypHdiGLE7creEcFjAB2jccbJmC57",
  "key9": "4eJqW4CraHR1pYuosfCgskq9cMrqnNhZuC5QoZmCvzWCg613f4Fnmso1VKRGr5Pa2cnNKPxeKdCaneXDkN1TXhgJ",
  "key10": "5s9Dg2iBWGVh2ugcN9hhsyPATPqj72vWyHzBS9UZgoqhFV5cZLLSc1oH4mZp26GQhETosjMyenosh43gTq2q98xK",
  "key11": "29JmwpLqDuxiNndNRGuLoa1srQRQRrsuMWQqynLFeWyQG8wQg5q5u8SwVBDKbVEtSQZuKwsaCocByytV2TBAh3tY",
  "key12": "3fBZoHajq12sVi763eB7AsLaSpKiK7dtbSztAXNWqecdvRQHgdV3v8FDcBJV19FyKE675JSaMckZfKkiTnhWdB5b",
  "key13": "2taiW2ZpEXmroUukSBqNXFqGt4d6L2s9uEUs7brjH7wXvYzk2QTJwLAARF6b1hCzCG1dUCDAFPsw7EVJY5Qg5FVm",
  "key14": "22df2KNg7d9Z22nSALaHjay2xCo8gYE5NWZ6BizqiFg2mfLhTq6QAhTKadrVP5DcnLLGa5LZYA9gGAa4RABZpUkL",
  "key15": "34E7PYqTjJ8FzzdHLVvJvTTA245GJ5yKyDUGpZZ1os35B4vB2nRWGJbDjJi96ZYX6jgLe6cMeN4bHd9YKooSDCNg",
  "key16": "2tJoyS4np678Zh3UShsQowcoHkeBJSpxwRLDDn9gLVLiEYymzgUqbvVF88U7Cm5uMfXxm9SbHWUdYtDMEpt8ZqDw",
  "key17": "3RKEL6hnQs5BZfdWF1dDsjfozf5hrbZyZ7gY2zaaHiy7d2td6aYKg41dXXYjxYDA7qcjLchd6TFxhQvfzPKK3CqV",
  "key18": "2boKcLhSS5RtLrLyatntSZeqQtbebarCRGX7YrEWSaDfnJ4AdcEGBx2zn3N28N1K1T9mnCX54YVCfvcLuHpnUyUc",
  "key19": "4yyfVd2NRSCNVevVD6LKKctq8QqeqynxnNdEsceNZRRx9pD79o6bjbQ2GKhAUHmm6zNjDBeqtL9AFTPUAVGZzvjj",
  "key20": "3mvDhQ3MXSCzQ4snDb7eVgyAwUnqCgDexAQJL6wtRBnZPf5stjuf7k6hj2b399mvPhvVmGRgDxXhAr9PLfQ8yRE1",
  "key21": "2N8yuMcxM7AvuxfHMe7GVqau5GH6tfQpevQtovQGetC2nDdWSqbC5uq9nkFPebJ7r2CGtjGAmTpRar1KCFDF76EF",
  "key22": "XaWh8zKxQ4f8NPxuQdkKDgjVr5RDNZj2GNT7qxwKZtVSZj1FHtBtAosWDKeEShEvuuhBzfvSMMVcvRqz3sZ8WmV",
  "key23": "5zvoLrvoTnf4pifaTdPvDns7zTKyxAnywv4LfzY2fPDLpz1T384yYfgBJFca3vbFSKT8j8qgCqVsXApJ9bVHdmEP",
  "key24": "5ivgnJ9sLdnzSAPPzMYeEGjobT5viUEa5HdiGpohPfJugAgoUQ4c46T8MsDgQbqjs8ANYB8TpdiQWVYRDokWgBbY",
  "key25": "3QeprvFfc46XBtyk7La53bw3LxQ5fpXY5cC8rmPQrmkQ3oYVkjFprEfG6qtWgAUmgVZDG5GMbmxhf15amNdjJFd2",
  "key26": "UtKxt16WjPfhXsio95ptxNKijYLoGenqkfJ37TWPB3iXvuaJiCrrBmjFa1ijJBwF1SP7u8BTBrnx7divmiCrJSC",
  "key27": "3Nv7xjLqNpnACwzzubvqnKL8w9QQ7APUxxBaKpii8ycaCH8wQNvDSStntZpV6pqJ4GGRbKwMCbphUsZsKudY3m8d",
  "key28": "2ENjyQhL19L2j2n9rTHz125iRNyFm8i5ybB6K8DMsgHM6iXn11HpdmayqKscCtLR2NxUCZBG3DhrNHnuKV7YX4TW",
  "key29": "5ek5aHg5qcEZ4K3yUqrwv8iUstUqt78sdVS6ZPgv1RDT3JbrM7w2jc6N7kW9znZzMDUwk8CvEDtqGeiiUP5wWcJE",
  "key30": "51F5MHg2aAJXTBMLWwEwSohZqwS1GUDaUfaaRAY9kuh4snPRTNhiJcUJ9EzQ3J7hXP4Tha9mw9RigePUqbL5adfJ",
  "key31": "4bektcH1ryUu9GoRTMbnpVthCW7vsJ6ufmCJYVfQ3EZfYc71KBTu7FB4qFhjxaa2zX48fekeAJ7xJ2c9iRAs1jrC",
  "key32": "47REKKPiy9jjUMaDnAHFhV5RnpcPs7K3LMGdGwm3vfGmtuqw6rwBZKXhVvzugtm4zToYW4bkkGTCU5M5yFqoPLvA",
  "key33": "4dzVw9LYPDkZ99biGyChqZ4S2GhVR363fJUF7mk3nRboDfWZWrbsWj6ZKLUZJ1zjKH69BEFKL2sAKK7m9GdqFY1",
  "key34": "5wtXNYJqE5WbdwQbvn3EaDWU8kNTMBct71MGMoVxaL4PYrL1nY6wt1xFzgf6UNuWZr5XkLBmkcDXMQVSebTLM1UB",
  "key35": "5WShkqTSQ6e4FAPgvXrQxH4rDR5Jfs2m9NdYoZMLfLzVAKDEM9FoWcT6iyP2wnURG3DoxcTKo2momo3dW5qbt28v",
  "key36": "42xCJ9Z3P5fPYg3uYuMng66cYbb58EbdUwg3UihUrWg3MCpgJHWXzPcVm685LDuJa3aBHRtiHzKrHZt7ATLJnBxA",
  "key37": "ht4HxsQ7GhiiNntKePDPbMWcxJ9wMomULdgaHCmbscetFyWoXEoEfg9YNiU1246XBmUtMdGXRQVU1YjVk9MEzeU",
  "key38": "2rbhoxiKBmthMJfmVeFrWQDVvgXdnPUTgswgmdwgNTC6xLPDuYWNPdmaJrS7yxCuZbjsys2N2YASoeewTa3VizLr",
  "key39": "3pNFAxnY8aSAX9YhkLtY3vfWj8kQWZFyV6ChXZXjw68rpC9gsYjud3QycKamwmCQsrnVKu9PrNi1pbcMGQCrRtQn",
  "key40": "frRAqfVfUgHw6W1oAztptrbdWk8JjJ9gUrbVtjd4cxE1bhCdMKdiw1GULe9x8n82PbkBMUXiB9SWuD2qLNxoC2p"
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
