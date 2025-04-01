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
    "z7hmQqjhwKjGyYZZCLRDgiBE94FMVt4FufZQdhB1CP6QwZWYfvGt38B3X8DZB6SNWqwuAhZaHayC3XuyScv4fRm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zW2yUbDjo9j8kpAoB1uPtniPoz4HHGBZjob6PF4Hxr8e3QydQ9Lt82HGeEQTTEfciiAtb6VkFAhjcqGaT1GACv4",
  "key1": "3x3AVmBDwnA8kyxwJMJiEv2VAUDFFUbv96LMren4nBUNFEWB8pezyDcs48Mtmfsk8oeCrjYXdgZopmCDXdVTFVmD",
  "key2": "3WNtbhSrrLLdAFX1SbkJWfaa4J1bNrbYj5jgHgYxhbUP2N8MzLHEzwF5z3nWU4wQSd2BGtS5TuNJT4RUamn1bHog",
  "key3": "4KYmSfqSaW1gbKHCQv6gRReSZWvhXi9bdXAXP7M8vswV7FZEGaNm79zJEVL2jNxQExL25jpXz1HWzSb826LYHsVZ",
  "key4": "3hUhwUj5Dd65JSUSS9NqmohyCaRYehaN7jcUGhELJY6VKtqna8e63NwYkMxXpM9GYbVbGiWq9w2HjbeZzDbVfxVQ",
  "key5": "5oFSYVRSNXaM7ugehz3ZLkwH7FM8oLhbhiNEAMTDeekdQSpzbVcNXbbkNWfvUDb6unRkzoqatSeRGgTNUdk5Ekgx",
  "key6": "4hEsVn7BWbp9SW4XP6SHpo6FkJHqkvdJUZfvnMRf3G83Qqcw4Snto2VP4J4TKNUWM2i7L6Qb9xXADQFjCXj9dBBJ",
  "key7": "5iUAwjAxWNChnW4Dc68WVjpQbJ9MtYtc2qpF116s3ActXo7AyjqjFQSKCLDEB8hzWWCCkkP7RZGFHG9yTD5quNzb",
  "key8": "5MWDVUksjh7Nc3GKhggHh89bhv3SxETcJs8k7qN6CxfW5ViJrotwuGA2HGDxdtg34zdqUB6ziYxpBVP8BvUc9289",
  "key9": "4HDUL3hPj4GQmYBYXbP9V39dALmVm17jgVmggiyvTPmmgerRHrrMu5C7FGWyi3b6GXFMCpWHJgy2TfD2PvUKjgmo",
  "key10": "3Y7B5fAhpD9yRps1Lo7cjizSeSyXf8jv55vdfMWz9LECtV14TaQ6EzkPq4Q9p5DJtwLozJh6YN73fayRehg4LHTN",
  "key11": "5BWrmfUY7AttuFLhdEje9H6L4D9g4op7iVpqf8chYHuc2VSWDcmcE4v7yJxTHX9m1on878CW1gRRoYD5aamvHumD",
  "key12": "4odEiqwbsJoh4fyDAb5ft4bTBbucWv3ZmjkyhEnfc1zTUj3P9BE3a4x8LN9ZEKPshL9GsJ9APvj2FuaeqJtrYRHs",
  "key13": "2SGCfXmV2E19JcB4bcWDeME1KpoQHtdDLGjXEzuajKKYEEer7qeobUYgEU693Ck2M3paknaEWD9RABtSxapTKCV4",
  "key14": "3oTKHMpaWEyxSMczuo44NMzxtNzw394N3mpPUKtyRhzWUJgNM59MceKao8EMxj58DFCZLdJP9mEKSuujsareLrTh",
  "key15": "3fhiZMvubkLxYF7Ngz4gNqqhqoVkRub5TLnzB6k8PRpcApn2AyThQ2Wdye7h7PXU5rSepdtmjaf9Q6G2XUZDJWc",
  "key16": "3tRsKa3Kts6cWYTwKvu8VQyii7PWXo21Ur3jTpL4F3k7qPokK9ga5mwfDXzwpAVCFwn3FQbYzVUiNpBLxR4aaA77",
  "key17": "3Mgg86RTNpWUZ5hDh7yFH13FKnGwEY5A1WqMdf674Q3sRtr7KJUDZ2sCTxZvd5Atvg2zjRneYJDUaHSFzcLMZQkK",
  "key18": "Te333DpM2D3wTDggxSDDmrhbVRGnPgPHE4mHu3rgZMeBuHWcetFJ3RmGfXXUuwxxQWCziSrznPN7vw659ufCkeP",
  "key19": "TobuYtru5ZZpNweS87YYmj8s8KXu4qsHijSNHvhYPtbeY1y4k5jP6EoH9SiEqgdPEmTC5Wrb84Wb8fktBNy5Hsp",
  "key20": "3B9ZhUr7Y21GSvSVXu8gt3TKo8g8wf6QSy9N5Xihk1SnmvqYZWo68gNgdTWWL4VfGyqc84ypUqc9kZwxJgfZp9pQ",
  "key21": "5yu53UDKX8Aw6MgafUN7mAkhA2yyVFfYsiek6YA2n7twqg5Ck8935NyU7mAxq7vPMmmYkwnAzQ3qU7Fpc5kLSuw5",
  "key22": "52vQmSfuQfea6exFRPGbYixXDRQySuFeJKTsybnunfYwbejDennFDRbdEijHj9g6rRM6bwPKui2w4KcJ8RXBeJMG",
  "key23": "3iL6kks1NE6DdiX34Lq1KCrCgRBcdH18P8W1MdBsuVoGfTsc1NZSTHd2kYvpr2ihABypGUksFa8tX1pudW3UAVU3",
  "key24": "4g3xoYhhZiKfp2JLuUkcxCC4HUEqQ53RJjvzCbLToMpQmqbN9Uifhx5uEGcoE1iwDEZooEPgX47kZqGPt6KP4L29",
  "key25": "R8KCjvpi4k94X5oemgFzZ8m94trod7mwfr2J7sf1fTMdD9rFCKR3FRSwdhRxjpUmLv57DdQmgL9QvqnL9fajYdg",
  "key26": "4hunxsVw1Ya7yGgjiWa6MgyLatEhNMZhYNfWacoMyNcgVgkZ2pvk9acJJPQNo9cHM5QNRD3skgE84GDv5Sd2Y2DF",
  "key27": "4VSzrEy5Kb1qxg4FMFRNv9Nhhh4dJkRzbpQqXxUAo8Rb3vLtyaGVszcb3tr2kmTwp4due9rXvSC2t1FY333f11TA",
  "key28": "5dvq7AFVRXpX7RKwYMutHox1qabXW6cDMZNcVetbHqqnj4ciSXTXyFDcsqwcBPUQDUWQxbPhSnAiAnkt8hXfgvtL",
  "key29": "3hpspsK3JMZZJFjnH4rhuCFDyPHwQDa4isXZQTboMaNcVgg5HhS67cJNwPvW6cpc3Us8ofZ6sRpNXC7yAod819d2",
  "key30": "35xbDWkzjYezPCzcZcwGhVfgGNc9qLqrjK4HxJftHvfHGgKPWm2XAZLz1Mau7iRpRNJYKeuYAvSTpxYYN3pBq7qZ",
  "key31": "3WZHsH4anz2YVtaeBK3tMApiaATizz7AdVytQ5UcekJqhLeVnqY9Nf9hkwegnFtC1AR9c88aG7R7JvPkk9865p4Y",
  "key32": "kL2s9WdUtjSVeMQAWa9AewFrJKBSqve173cnFR6FoEitGAbKxt3M1fNiYRQixgPKg2JryC9tbqUyKGH5LkGunae",
  "key33": "Apf1we4kxD7x4nxiMh6A9PHe6fXBAkYZY46gjoS5XWGL8xEW4tS9SgUwqibzdLSm7jFwoz7poMRCm9XBvX6wNTU",
  "key34": "4w4puAsMCM8eFj4ajYZWiF685n4wKYuFjG83EaCG6WJtSRQqURJWC6jsKojZWQtpx13YQmtEuCkXT1r2EvkybjN",
  "key35": "2j9FXh3egcCExcqxQChWDkPTGMJ43zJCCx6vrgiR2NHgS4zifQESbaeu8A4m1ez7R54AMu3HmUecKRTBp4WMLFS2",
  "key36": "2DXyhnfVER2FCpoWrNMTj4kkCk6tqoNdjktvL7G5p5RmpnGQG9JMSZHSUT7me5FUtEHdiWzas9qF4pkmLfaiWGKJ",
  "key37": "5uznSqg7HoSC868cXrrmatoXFDpkPCkdNFhrJjFVKjXVg95oYZHpuGnz8azStYSnN9fmLHqFJH92aa3aQkqJT4mv",
  "key38": "5vLWRJigR5WRDVkCRdbZRm3gqXjancgKbvpYFPydH5hJn7JUTRyC5g8QK1D3GdnR9pJhWAS2C2wyrXfLuwoTS9Kj",
  "key39": "4k491P3KiRHa2k4CZtpDvyPKvZnFqYWWSt25HoxvAxnTtAWbqv39AuqmgW9i4HQss8zDmqWshKMBsrMwTucPgUCC",
  "key40": "3oRe1Ywb63nebtmaRG9zbdBjsCRQm97TNu62nvDKa6Jvo9WbgFueVGTm8VVDHAWyb4gMb2o1sk9vPvCt9h341aaN",
  "key41": "538hkvQERURcSh9Rcvyn8fCc2TjUSsX3ormUYgZ2ymNjuzmZoL1nqsBLYCA3p1Hmv86atqN4w6yCMZUU4hxqvn6o",
  "key42": "3ACA1LyNuRcE1SjE4yA2gmLb7q3up5djtjbV5hsbL8w1CoMyidBkRujWZphipKpfUMQsfzkdER3NfPsYQB1t3TyN"
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
