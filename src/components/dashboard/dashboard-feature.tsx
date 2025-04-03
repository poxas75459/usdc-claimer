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
    "3UAv8Yg8nCVh5XhZDSCi8q7Z8vKFMtiv3HFqQC3TLL1E42wEv2EGMU5c6f7gu11PU1vMY6T7bfmrGUZiZbNFLked"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z2B3UXzGqHLbYH7DtLZvyjxD1SA4ktve9DC9q5Fq6QmuxAEQ7LPMgTnZCGiVQLTgEDh9cp6pc4YpKXpfvg9fDXK",
  "key1": "4CYw5DgH3Vcnu7X3b3KKufNMVwLArBN2Egmn5kYWr1A1BsVNWYsrGL6jJ9J7CubaGjVu1QsgMBdRtPSpmjAia8xn",
  "key2": "DJiQUBWh3dcvE5vxMpTi5qAP4UexorHFxcCTK9D35FiyT5gzJjcA5oBgB31j2RDXTkw1vp3i4tE3n88rQ6TVA2M",
  "key3": "26zwEwvD7as4WS9zjr6oEFXwGGDJosZWqk9hhvaXdWwTgTWbsZN4zG3Qz7sDDPu6sCepHFDxFauBKeomDcu96QEp",
  "key4": "2DJEy6j7kLUpwtmjmtwWFHZwoJwYHrCD3Hc2gHfqeZJZ95A7Sug1wbxJ1RUGt9UnsNv6TDivbb5bqsC2mbrLA2qB",
  "key5": "3xN8o6kyqWFYfuj1n1EUpCe2sWi3RT75HtUYmBRRcirS68Tj1uXJfLYN93EBYd5UT9B1w5npz2Nu5K2QHcvDUHWE",
  "key6": "3TUnSnXA1a7WdK9cMrHjPxsyPN779AZjFan1mZAYxxqWwun4ASAoBxnE4y6FCbaydvAFsx5cixgaYqpapFXYV5jE",
  "key7": "5abVq2rxUGnhytSrUb3AAm5rBhw2fmW4HXwpJxJ5VjoFLLJtS1YvoAgQdRM7GFDvM5J23M7HRSZNHpcqpYJrddpQ",
  "key8": "5NGhPQfLnZaBcmibFZMmmWW8e7B4tdpoFGKApSmR9Z1tkaQRW1FGRN9Y3FN8QLzFfRxT8rn1jnaboBx5NEV6A6Mj",
  "key9": "44ZctGSa9F74UtqXnAg4wYxKQX3HkdHSbS7nna9i6nU8qMHnNDDpEfycCVmmotmWxhuc74MoiBNNbQ6Yu191u6eL",
  "key10": "3JtN3miamJ9RHVS1Zjy5RNyaycEJw9GSdSAbNcn9dQ2JETKEv6QhQYZCPsKLFRriD8KDfbR8SgpQr5fQjeTp2Ldv",
  "key11": "3u5zefWgcyEHd3qVsJ6T1GPFhaQWSzNsLr6WDrAMFZN8QY3VQCJif8WDyYuZPCvZBcQNGR5vDaMLnc6xeg7DVhPH",
  "key12": "5dYiBScyzeGDAh8wPA4KiwrkdPSWerJRso4NmLexJVsBmLtbcABPnwn4sSWLG6hXfo1cgQp7vie6P6mDufcoLS75",
  "key13": "2NWrTFknMwLPfuMDAEbem7YpWqWuKs84mSAVzkW3F46jvvbouVG3JnkArPbnzdTMPoJMqwGTmKnhMeQrsz4ktVXp",
  "key14": "4NDfhDR3KBArtzqP8nh1mFUYSNqrKDuToyEERhacbxPUmdrCbYMWLndSZNFcqYmBRH6Bwgp6Wjbcqt6LjznaaT8Q",
  "key15": "3psgbR422a9MJ4xM5z2HH5kCynFcEDkVnA9BQEKbz9anan9XYBALtasZE8XjvsFAf4qVfhmVHN9nKAafbduNC5cv",
  "key16": "4J1SEJ1N85LSHnUdun2GmXhSYta19CRrFNoeoPzgUJCGeyWd6kMQ437E97q4hUhF55tsA7cVnrE8GgEv4nqE7BPu",
  "key17": "yE6KQUfuCKkQ7gFDCB6uVpv9C18jRsqkhjitTDeAZP9fhZcmtYZeRj4RHL1HYRZuBqQaMN7133dtA7NdJ5mNpBp",
  "key18": "2yqtdN9c85d4okfAw4di8WXyBWr87WujQ5JX8auoDA69jJy3sZLXYh8qLWTGuTE8fBe5N78VNCTSvtDuiSebMPrL",
  "key19": "2BJc28qhyyyxNdjFtsmLnYLDJGnXKRFpBeapdWMYzYSyC3wjaXujY2L8fwznhAU5H15Q5ZDf83pAeWEhHRp6xodB",
  "key20": "2c5HnnL1h9RtPQDn3gjxpJLJZWfzwNfy3VeJAD6AoRK4C3QaiXw1TXbDhuenRVN6Pm9waBatZgcGHA1SnnuyhsiF",
  "key21": "4Yzd5CNr8D9JXt8JwzUjbNB7LM1rMRutth3ZdVL4zovopiaD6npXtK8D4rGrwUHTNWwew4fB74umF6dd5dXykJsJ",
  "key22": "4U6ShcLo3TKDDzY2tt78GptcmYkLD3HRUJG6M2px914J4ca1oWvnx32EP3Yf3VqAgdsPnt7XZSHc3rGRj4W79vQZ",
  "key23": "4SByGhCU2AC7bRYKVcoNM5UyYBriuj1fvuyjmwcYg2Vem7yuRhgZKUWjwed3oEt67TPMGfEgNNcQfDvG5DTZAfEu",
  "key24": "5TXA6xhCdEz4Csv8bScAs9dQUBzHjtuVA6i9G8CNv4QPTXJPewHSXSoKggTc3J3qeHapxUK6JZnBWL5m87iybwJv",
  "key25": "677yJGJGeKtAAAdQ7AReR3JTA3LvgTjgZK4UatGDZwnr7kZuovat2cMzA4xbeegpPGWY3fYX29XPFgzhLvEGnvjK",
  "key26": "2VEFgYiYVkgLjZ1CWLbJobQpDsrpunhPzigKqoqntEAixH7ERsWG6uY9H9AzUinD8PouVq23Sci8Stn1cz3RC769",
  "key27": "QgfF8oYhEGrGNMNj6ZxgmdMUQHRs7ECHCtBRvB7ymJPR6LGak8h82m9NfCpYGn2r8ya1cqSh9xfLdSJgeKz4zey",
  "key28": "3uU2wHViMmd4w1TDkSK2HX8XwZhywe6gB8CxX3G3sdwCo3PQABJv8SjYdfTNhKwyv6FQuQvtADvKaUHoW6rnaiMD",
  "key29": "xnUAmUMhWEUyjbzCiah5gYWKHmcJVFq6N3wFbUFCi4Wfa1QW4nj9bELhpvStWZKgh4gxsdr7AQyRydt2W4yPYaM",
  "key30": "42beapXhbLAGes476GYf7AZa8vtGATPpMuxEJuPzn3NLev7NWvXdTyQVBf5qA1FqbHePqxBBvBgRjzhxYA4KH1S1",
  "key31": "5XMzzbDeNCrZuRcFq8DxbcDSCPK7H6cHtz8nrfpQDZKQyWhSucszJuA19smUD61kVHyoB4orKFiQBJapu5yPgPv2",
  "key32": "2AucdCyric9VdFhQhjiPnPc6cnC2ZZ2EpxiQBetWFYWGUGdLvS3u27LPFuHrmHyuz1Z3tv4c3iYLx3zyhUjhg9te",
  "key33": "4iNWd36mC47whP8ouPwsNnzSUouHJ1t4B78GmE9VQm6Zg9RDphqxKyJY9tQq3prWVMam2B9hupd6NWxAwjJLBpUe",
  "key34": "3FmHrpt4bXLyRyp3hCfdFtnjBWeAVSGHywzZ8UFSno3FUWcb76UkuL8hDk1qEQgFxi1mWDQeVDAimofkcmgFTy3Z",
  "key35": "4ZY96ktjUa4TyBFqMPB5t7N5gNiAasGLTordryRDxzSKLgUretRGqUrWAEhHxQMMBj9q9XmHF1j36Pp5fmCkseAX",
  "key36": "wxQSnwadmQ9Hj5GiHYPNh4okmJfnnBRbEX69VuK3EDXrV2BCdZR6UaYyDnzvNRzGyvMTFHpQSMyBL48Fiwxcoxb",
  "key37": "5o74WwCuZFDuXwSPYgVEzjxeFvhZMszjkPyUgsQPSqepzkdDgKFRzN4pEHUyMqTc8LhVESX8MHqCFnYcsFGQSmCZ",
  "key38": "28W7vc4eKaSTyRaCcmMs3LejE63VdsJuCUsjpAULwM9etaPXx8rBvpaLCuRHMGGUEspEEHjGTxHZLV16uAQGMBkf",
  "key39": "3eeszhP36UUG481FM236f23RJmfbCvf7qjm6pfib9fVjSu17w3xYPecGiTGo7UD6bSZCfpiACVsC3Pn3XvcCBHPW",
  "key40": "43NUp6FAvFFcyqG1QCb7fWWVrQEfacmNHDR5UwXRD4jCNjT3jXAbkBxR5qZX1z8tBxxmmbWKHw9NdZWoBobSRvVL"
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
