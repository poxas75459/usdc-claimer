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
    "4wsCrjGJRPuhyeJ6VtNRvxibWk8dnjv12DHTAMs2Dorp3cydp1ipKsbQNXHKjUcm6VU5VDESFEBWLP33gD7yEat6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qaguiayZScr3BmsBPsrq9KHadEG8QDNxG99XXc7w95se7B99G6fjJhABRWxbtPwV7dB5SZPzBG1NZneFNDoDNsn",
  "key1": "3NDMJJHBcB26NazXcmoqFBZ2sJiF4DVNwCivW3pEXqT2MatoNQXyoVdcfYwEju3KsKpWCfCNUP2fR6bmSmg36VNk",
  "key2": "4ksPLF7tU6TS1jsCTsdaMpkAr4ZALqxSXRTAKSZbtNh8JZFKSaoUo1WXkgpKetkNoxvJrMx4GjdgYny93KRPFTvu",
  "key3": "2NA45r1KkuZA7jaXRw6frKTxewf9V1t7aQiHz4HBs7pfFaX9LUg3cPRsuPWi7CwRWnZwvi14ue2R7mGUvPMwdZrg",
  "key4": "4PZgz4QBARkpFc62xNT8Nw8jJWCDTu6TS4J6Lgj2uUtirjA4rZR4xKuq9ZDWsnypEi81M5TDoqiaFiFe4PHwovpA",
  "key5": "4bnguj1baG5AnWvu7mQusru8s3feoYQ7SCFF1QrRWT2iL9o5thDthG5SfMXtBWeM1Fxaa6oPyniWiAJwgt3ukX7d",
  "key6": "4BAMHn2npLtRuP5vAi62FJg4kmgcWZDuw2C4nDUqYdrpknwD2Q1fkjRx83rbRSxHy9yLbXcHW4LgTzSPjvizvgMg",
  "key7": "51uBZE9LTTzQi5mAimrnG3GAknbFhtf8jRWZN7FQnRXToMQNQCd3SJN82FfF9g6JFHn8emonGEo1d6F9xmt31VJF",
  "key8": "jSjnDkqwaMLBicympfJwEB88jLv53b9g7eUVQ5NVtX5psuAy9NN7TKNdY3Zm878BoFv268DWvyZmvisynRdKjBp",
  "key9": "339VyvARDNseDYWcqgz81HDK7jr9dnXH1MEHAoRQdq8ZBH3CBwcXgwHL1KvvqNS7JGhFCcd1RrR8EPzL9CYnv96w",
  "key10": "2c3P1W2aEWt7qiAECRRZwoHHNwPDdxEcMFxBLuFMs5dqmRnwdZuicPJrfHW4XVvFf4UsnFxQY1XFuHzJZWNuR1m9",
  "key11": "5tMuHnWGnViL1ZomwLd6zYNZtvoKM64TaGvsqdMG9inYufZgeL5GnVSURhSB58jCXnJHHS7PK1P46UrQLmT3S3qf",
  "key12": "5N7VZQT3mLjK31MHpsEmDwB9A6DLGNHKgN24d26buMo6Ac66jrXY2Yc7o2mXADntkDr8gHAjf2FbYjLAZs43CwAA",
  "key13": "vKxWuu4rBpNYPj9xgx8jn3YP1duN8kFo8piWNS6ofWyWmmLz6k7sARfktebkWVLrr7ba6fjS3CfZbxUC5v1Qugr",
  "key14": "vA4mP8HDuTrKkndztKp55fWdbTR3zK4LhP8tvaLpB9NpZrk7G9MiFsxhS2pvLHZa7Jm5VQCWrXaFAwfUXz1Pvzx",
  "key15": "nr7XQARru9ovd2ft54z4WY9WDFRssZGtFKcGqNvSJ4YikN1EipFuJydBAQEPYk9EoEMYHHD4TB6gjNnweVWS2bi",
  "key16": "2TLDtXTTje1YbngJbN3n9my6wyP1mSAJGZ1rCFE33o1SHxzadaME69DDJwvPJNXhG7hvPdFxgBt6SwMvF7Hxx1CM",
  "key17": "4eZZmCX3Xz7W2tJfY8dhnfeJUUYMPd5ZGKgtmckPSYpKoKLnTGMo6S55FE4ijrJWMppCaHJLyU5cEoWSxAgsk27Z",
  "key18": "6ytAabSNzp4qCe6dK4BN5k2tnB1WQ5hj9dseUjW3qz1WvCKxbcEmjKfbq6EN2FWw4E9LyykE6riVgqXhMT2JZqU",
  "key19": "5FL97XW7QQQnB28mwidzJjbNVFYHGUXhTY5xJ42hLqLnE6c4ZpYGLmA8gcphWzHWWxzVDs3W2BnbdRhx3Upb18oH",
  "key20": "368cgZr9yE3yPxNgQZWUFg4MFABSf4JJyyH3MPvHsamY3R9YxhP1SedzRw5XPTM5SSW9djAtUJKAb44Mb9t96bQS",
  "key21": "5D4UyQZ6aQHZK7jZB3TNjS3qUe3NdXoFR9bSaKQX6beRvqBn177QKy3jNDx2rxbZseFriCd1fg76RezPuZ3HCa1Q",
  "key22": "v5qoLc8oT25oB7KPsoCUpvEJFgh7bpUUseDi7VkoWEzeexsRjzSFaHysFFZBsw4FcPvWkcaCTSp24YYLdamVLdV",
  "key23": "2QgTQxEcLL2GVypinG3tQxohsZugBKYmJCCm4Q5vKEv2rou3uf31HhWSpQN9qDL5Cg9aMo3N3kSmgXovoNUNjTDQ",
  "key24": "5PnkqbGMMk5LhBfEQpGcxexS62hbU1LAhjywZ1tYsJatKs55CUif4ce9sbgmHSvUFYqEsYmMpWjRnhsQwoqLqQHr",
  "key25": "5hWrPGB1L2kKfYpcKz44bRbRde6hNKzYGMRZeNtarEBmS6vXLEcLDzi8N8ty7Z5Rc2JHaLHreVsiKzsy832mDTay",
  "key26": "4WGQ6145QK4vHBkMUiX5AaHJvMKia4vWoJPQKZyTggLaZGpjvjB5Erj18oXMzi1nxyVrmLAi2qGJux8DBRbheGJM",
  "key27": "2vN3dZHvcvBAs4ZBjdrk7PvrevB2U9dT34cLc3n6q6rwtKoA6RD7bK19swfGD4h2jPuYof6iiK4YhxtsActcYZvj",
  "key28": "2KqsD82JAuRxLbrUiaZQCWntsNFawJ7TuqCxof1XcB9JP6U6g3KSzP4kKDnzHHxcWb7s6NFpsntB3iDXGLrLkDR6",
  "key29": "45od3x6MMwbxyaKdYLKrpuQx6bzysn4cX7RMN3rRa3fKFrjoffjPdK3zXQtoVaiFLCDBM2w948pBp9ShSvt5Pkr5",
  "key30": "5ERfS7cSYVQTLv8Gor4WpiPiiFQxNcH7Ve5Q3hVhy9gd1n7Y9e1fmUbBNG5Z5ABuZCz1RxXRS3ZJNxiDNqiCUVyZ",
  "key31": "5pQ1G4Dvf7P8cVgSVwnAtEksmrtFuvnPTpCMSTehBXiwYhoqfVw4u9AbF863Eomwh5mSWuuuqe4JdndYNPp4osir",
  "key32": "oCv76617R8iuiao2apyAk8anea1gxoVzpvk37dybJK5kj61VCpFBgi5krkqUemFgPJTc2nfGP7UmXcy7nHhsqHa",
  "key33": "2fYisAjNSVmXttXJrc9oSxAaaDqd59kdCimku9xHiSuM9oPmyudapwmkjaFvP4mHDC5ADACWkchw15KP5TXiXEUg",
  "key34": "55JGsCWQ6TdTrMCaJpEy8XHcLfwf2Gxif8wqH43MkTJGwLB1jf5Qv3HFLQKmfSVZmrPtVNN6RGqBtQwiZ839ULVA",
  "key35": "5tT1Ch497x1SDAju4oSz4yE91THzkTEUGszJJ44zCGGMd4KKJ2bf7Z9t6t5GgEvMjFhMnsoRgHsyJ9bM5yBJhDKk",
  "key36": "4VFECBPdcmoAHZfb2Q4qqautVBEbLrYGWE9kT33jmoLaAyZQNuJDDk2PtcchCNn766cCiciKmzugEUfiykSBQEio",
  "key37": "38qNrwHJmXgeHyb1pcaBeBdfjUUaYYVpYazWsu4bqamU3LEVbzk4hoyNwPQDysnFAhzXbFeJvzMYRvbWjR4MB9GA",
  "key38": "2yNPFbTfBsC3LNBFDaN7fLX6k3Jf51mGyicAfd7tMdi8QKxhn3aPz87uth7wA2jcZJLDrYvb8rqTaivfNewKktF4",
  "key39": "631ua38ate7F8bPtEPh4j3ak91VFatQsxFUeRkaG1WucwECZCLLJx74UuywU738Y3aDv239cUiUKHQpunDRATJh6",
  "key40": "4qPXeXZg9fqWQ3DELed2dAi5eGdqfExh93ARBn3w2N1utGo6Qx7tVXrLm8ZuLZxDmDqph1YAne1atHPo9iQC6BZ9",
  "key41": "544HYU4EzA5pMuptXee9hzjnqXuPt3x95bp5bh9ucLXWXUpvvLQVC1BTxbdx77JGduQ5vmwwqpT3KwnUY8WaQpiY",
  "key42": "59nM5uBdLzWyd1nrTLM7hwLRAqv5BBvuXTR5oTXZLa9fXCLgU5fh3SmU5TWwQKYhWUMWF5sscDbAwqHFw2ay13VF",
  "key43": "2qhhdxNENMaLeTWcFhKN7zgVKGJWW5o4kC7tjD2Q3GvxKnSXg51XGRJb4zgSWs53ns2NNksyDmtTRusvQ5QQCZGG",
  "key44": "2yhj3TL1ciqq7ku9KZQBgLBkqvaoy6VDAwmcLHyH2FP1MohJNJnxXXKBr2gNyHwj54hP1UP7MarLz4Qm929x8pGX",
  "key45": "5NtZaSNG6AXXqpLakbR4B39WWzrkfUh9CsECxURq8spMHFwgfrJwSQPMCqLqxMjfo1bSM13RbeZPxtJbCUEKsBKd",
  "key46": "3amqzRCDDUTQR1gMuhoeFYBxzXne6JC5RC2qARExYaY9gND4ChbYDv6hD6zNoDncPfCjvkqmh8HxRUwGFo95EdkC",
  "key47": "oTEwMmwCVkYBrHGqzDrtbzD831nC4eKcMnYziG3JGcnR37CVfSy4jwAs6bNJ5rZJdYuZ6xHPL6CWnW4gvLybLNH",
  "key48": "3vt2vRWP7Ki18zFz4PLkB3QCSvtN6T668bJJHmZbwHA3v2RD1mRuVeXY6DFrRu5uRL3q6PWC5pqdgtqa8B34YYNb"
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
