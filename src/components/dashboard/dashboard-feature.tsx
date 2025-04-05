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
    "PFMpUx42CD1HtQaAuKyyEsMLqzvaJdBavxxqi53gQJZNGskChGkmgPZoF8G7f8TUpSDNKA5qW5hVJ65YrbYc8CJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21XM9ctWWEwcYLRqyszya6u4HJUrXPxoG2ZNtpRpPzP86Vr7sQqcqroGQqC7gtGGeq9gDHfXzREKrrqFVtomBwLm",
  "key1": "28b1ZhVN7Y73FNEDVDzyn7G1n4pBQexJR5gAC49WzJvrBKjSEsN3djXCVcVyiH6pPA1BzR6ZibAYXst7qnEQ4SU5",
  "key2": "srkrN5SPg722DQj4F5vWLfTqgEt1xyNTkv3APXDP5RsWN7qcKqXoCY9Auytk9NBr3LmSpkBuvRJy3GqenkZ1CcP",
  "key3": "5UkkVTRvvvM9p8mQmWTvEzf2PCRwckQaTLeVUkSYCo1GDybhng6BEHRNorz4t5hDNhXboEwzNN7MdqptzRRWCGT4",
  "key4": "7kwnC4s4XS3ka7WcDibqcLFukA7vcMnj55ohFtpqmt8bgkvS1FTmbQJrrkQNahvQmY4usr9FjZUXxNXRLJkGRnH",
  "key5": "4iMAcDbUQKt1U1v5Ghe8GuD13pq2Cx2vc6usG9nKG5ccCuBjuJ2Ut4FBwn5JhwqfiDH5WchLrqGKJG3dNaJZGyMJ",
  "key6": "jMK7KQQsFj8NvBSVxQQPZX2kcZquGxgnfK9RBsusZaJ4EgQ3pURsvXWW2qSNHfZrRvqdmh56q7hcsFMa1QSeHB8",
  "key7": "2p482ddMWy9bcohsRrq66LTz4b4VRZHQYhGWVMpXbLuvWkhWkavDEXzQAKVWFkVhF6iX3XxdnzAJ6ZkrPr5Jza1F",
  "key8": "45ue1yV22DSMBBAEBzkAhVw6PAapEs8CBz4FEtdDdwh7D3amGpiyJpDdQ1tmhBUVvdAa9XVSmTd49rC9hCjLEZ83",
  "key9": "5ELV4Ce423HDaPuj7A3uLGnBaDo31MU9SudjULXnqjZ8TVKZs2eXdtAGwmyg8R6ERiMgA4SXoxggzzeBMm5miJJQ",
  "key10": "3mukyHuxkmkLZUGwbSYrjnCnqLegChRTyVSUxmNgZGZnrNUs2jiqGsnJ5vyoHv57Qk8UNWzxhNzi3wjCVHz5PPgU",
  "key11": "23WCkmVrmGEwmgBKf3YJ6Yo5CS7g8hDxcY2eC9b2gNBn3JLLadvcGEnXKQYdT7GMDxxFXm2uxcr3hKtpNSFwDBds",
  "key12": "2qebnPbFbX1EoXDu8E1E9igwrudhfsg27mpnxzP3dqqHuHstRa7RchsC9CKtRpMJjn6u7b1RqgqeQw9c8Q81sqkq",
  "key13": "4Bu9MUPtdtp2ep2KRBr4CarwMmmHtzi5YqzSdyy1yS8netFBwPPiovXkgnHPC4YjJZYK4RZqMKdAT58BR1NJmx1U",
  "key14": "2anPhZFWWW1HEfWkSKETAGDHQwaizMjxk9ZbCbsNA8AjBVGgGtJSJBAk7Nu7hyNNCTxZfGAiAbdrKsNLRyt5vkz1",
  "key15": "4a3nL2GWPzFVsTRhUzGEmNo2KQiSuBq2XyshKcHx9awNQHiWPtXSgfFx3pjMKVZu4QFoyb9qsTCd9UarS6rLTvBx",
  "key16": "2nsnAo54x5JU9BvYkVGkhcCzV5TpCwFDuPJUv9CyX3m2EEPoboZr935KaoxE8n3Z5grjFqV9URLmPdHLXygtciQW",
  "key17": "2AzWZzh8dkuRwcR5cuLU1Qi8whrvBREDmrSWYvxNKTSfFZyUC2fjjW86eNfZmei2LjsTv1ETBDCDkMNZmiazTZQu",
  "key18": "2iBx6ZwQXXARKtu7gh2WyTzMx2pxcjyLdDezpwE6GPx6EnsgvpbRcTAwrfUEQrxdrSH9WEj5Q6o1yZ8uiftfGBoU",
  "key19": "2Vu4uB3ee9LF9RFJnV84T19mrx91SRRJ41LhkTG83fjjoEUe8ukXMbsCmhCGfffSv9SVJySo6dm4b5D4PJh9TFVy",
  "key20": "2cF6Qr7Gb3zzh5sR23Tw1UcSnznniSdeLNsYuGYX3vyyD8fnXMPy82g8pDAFWfxFbSxDhVatCmrSBZJyPKZNBB6d",
  "key21": "2TMZxS6aDkVfmfT6r35dseU6ef86ArnnJHWPg9uvvL6rCbDLpiccvBAiuuUMQDJBHvz5AQDDduKHGaq1zWrgpCbN",
  "key22": "3iZTLzys3R5ZVTgpX8smQSe9HkdX9TzQAR4rrCBVn6yEJajHV9tyDKoQ71np1x5zjqLn33ERZAWXkWLbB9F4dL4L",
  "key23": "3uHD5FhxSMBmuzmd4VDkGXeXmDnsM83hqL8rjwYxT6mHEjyQekkzr81WYhorh5NDKuqY3FYCsZcLWXQ4gaMNkNjT",
  "key24": "3G3WBYe8J9NgoNWcdjbp7RFkk6m2eT6yPq9RHUzdUGArvzKtDUn8rAG8fqCXZ3T2oKZVbz2q8cT9xFABRGM2oLa4",
  "key25": "bBdGMFhBFxU9EBfLRZYgorhkMYFm3n5yvKbaR1hpCAtq4ENXVYz9pAdfPFbQXMTDseUdmtJxieSbZcT6EgGpfgz",
  "key26": "63ZVAqDVCEWtU88DqtPes9MpnEjv5Q7vePbwcn7TAWQdwQtAyy5W4aU9SNBQWwrhmsfJssUewwBGQgRc8WofyATB",
  "key27": "2TiN9QGDyKwPc9nHcVtoxCxb1e5eqPQ71SbkX8CkM4YCQxbWCX2dJWq1v6GLeG3b9xj5f3KJTcSUpsJUD4EqfKpc",
  "key28": "2EZe4AU8bNQHGxLATDfvw3T7hwwLvRasGTBWHPiemgoirqm5XmTvV9hwjiuyK38GVkxAYBCy6V3EGsavLNUgNW5R",
  "key29": "N2jSjLNJDA1cRapFSngpMwUpxMzSB2wd9wDgVxaccrZqbX52Je7ed8oVijGtkxmKfZ4Rti7dy5BhqetHpU5DmWM",
  "key30": "2pmCbueXewHSmUKx6aEqqc94iYjSX2axnRM31n9qgS5uVVhgEqc4iLKMjkh4d7HDcjo3kwvMoRvrRaLg2iKNoQTz",
  "key31": "M1muqEziTEdQ8uWCTZTPuSDzYu196eMeQaTb6dYDvB2mzUWh7SKvLGGi8AGYmRFNSaRb6N3ds1HWKqMcAvmECap",
  "key32": "2sG7VDfBFXJ3y4HXSMphhzzh3cnMBaLxgu7xJN6yKq5DKNtvBkcHspRWjQdEp81pDWZToT1YUqbrPR2wSJjDT2pk",
  "key33": "3Z64brJX5ELbDbwExHE9cyawGjADvsf82a96TAW7bHCZVT2jZ7VSf4UdurfzwXXgZ3pMeiExvHPDGao48p5qJ7sg",
  "key34": "2XD4cLYQuWRFgvcKNCVx6tSFy4c2hPwjQa2Es2ocuCBCq4wDJ2r74GFDvw4S1Vm9iECfFVbZ8mKTULBMTvsMazky",
  "key35": "3pByH5Zd5ybKbmtVFWcFscC6bG1KwUs5HC83wVzUx8qTFpibJenr8YrncqPEzZHhqvZF7nwuD3DDo9nXkFJqi7Zk",
  "key36": "STRVUY62JiYtaPYv5qfYbAUDfwAVr3cHEb78K6C89ECeqQQ5zoFp7z9Q25oKXjq7qgNu9YNnxKkYr3jA9N1nZ9N",
  "key37": "1fUHDgCC55z6LT3tyuC7yRmNxKt96wuaKcZg7uy5UfxYXzekBVcAqgxz3yXbaRXN9J4kBdkviyX42tQHB5beWkp",
  "key38": "6xYbnPHeFYaHEAPhmFgfGEzWFkanE7r4XxkcUt3v9Cq9crZMPWUAXrD5HmoumidyzoTYkwxoRLM2tLuJf3WsnyT"
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
