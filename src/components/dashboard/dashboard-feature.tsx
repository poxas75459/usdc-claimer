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
    "21iDct85LXWfDQDotpt75TvSaeT1ALwhubYHSHse6vQLXZtzWiy1zjDxH2ft5QAUcfK2QNG6DfhHuVrUCCfwMshT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RFqbbS3MLvpmmJL7deemVBSBDYPKDG4M3RAUvRsMPUd8KjnPfYscK6nVPorHDeiyicsb1EHgUshXDykKSms7Tse",
  "key1": "45tH2Y2NSHZ7XyT7XPvYuCQBi9pEqRUTuWqKWCUujueZ5khQwfU9SbRjpYbD8ZFicMMPtJi2crCAiTL7rupCDHLT",
  "key2": "2ir92vricUSjjCR6qQqH57dxyyRfKzKaZXMBhjBGuMg9JNY9L5MgySf5WpCMtKKgQjMPcYAb4WE44hkKHAaRfYGB",
  "key3": "4Pcx6nJr6EPGmg56ddcGHY6Cmr4AWgK3PCcSM7zB943Hx6EequdT6zQKwRW3hbU8CgBCasLxjgWjsCh8UeUajZ11",
  "key4": "3dzauC1UuVupn5VjfgGwtrsVHiQtoTPD8SVZDwfyYVMv4pC2FHzub273irs1N1HPDd3GRuPcirPySAPTMRUCDSYb",
  "key5": "5F2gAYetqyemX9PjtdHcLr9aTyhksYRq4f8c7XMBzmNzHNmhi9knnhsEyB79dgRHjBz9McEB8N4DgwmEyMKfbysd",
  "key6": "Bb5V8BEYbQbQeof6b14Aqoru6Xvp9ta5seq7KCAa4FrY63rXQEMiJje842pgzZbNsTvrtmGC9K6ei2uEBFVQYGE",
  "key7": "4LwmS95XzC6mU3Hc9cv51xQCZ9xhFDDroMceJAmWyd5rBjnq53Q24M1VtamevRdBE5JeD783Nw4C1RaW8KtMUSjV",
  "key8": "5iRCt3chAtZb8T61AphdHTFyLWYH8yV2uguTwP6L625RpCztUvEBAgvpjvfKeACxAVDNFwHRvxuY42A6EkeHEtQU",
  "key9": "3QbBKuQSnVd5KQeyfoRyibCqr5CQCpyGNMxuxjv8oLwSNJgy6X14CnYJjMxCoAbHgREuKYpDLw8RPJUcFkYYPxPJ",
  "key10": "2JiETWMs2t2mcgi6Mq4kLXg5YKbrCoMrTgamSgxh3tTZLMtNxgi5RrpXwattPys7UAK317Pmv8GYqKX7avnUfVru",
  "key11": "5qtJYxicY4UCTVZkDBvuDRp1QJXC8goNM5LKeCeu7v1Jz4z7UPYfiSFaLKiUhNCdW3TDPBAPngUvMLzrzJ5oNkF7",
  "key12": "2WRWLSrEC48v3R9whB8gnyzyEFxSRqawu961ppdAcfzhG7yafzFafDooL8bwWeZe2GtHmoG4gzUxcWvg8F6v79KC",
  "key13": "3tsH2SC67TncX3o8DrcFwLqpkgiJzYcbA9P49JCKJCEzMbj6F34XXnvW8genHneWEgehGPmxX17uEyJhLpu68fgw",
  "key14": "mmPYdn9nmvK6QBjHLh4WvfCdepXGopkG9jEvESdzVfQuTw5EWcJhYPUSSZ8U4VXew7r8JJLcCts2SuTRJAQf5Zm",
  "key15": "5awPGZkS8Rdmdk8VQvkeUz8nBtvuwCD3C5sY2bxGPv4BKKNjebZbPntSehzfJnPAzLZxL1r9bEqECwJ2YDFibD6Y",
  "key16": "4duJgThMrxC98Y32BYNpkX5A9zob7tWmVEQfc2EaKdTf58d3nGkgDiScmi57bMxgZwrTCLxr42EKKoorGWnGAH3E",
  "key17": "3hZR5HUztYPDhTvuUwmvwo3WTBqyhMWw5d3kjdynhsGChvhpersT2m9nfGFwwaXc4PdKD6VVpB568dd5KSjf4U79",
  "key18": "63BbN7C4E46aujS8bnyS7kQEx6cG1xWAGYa7TVVVvFiJpZ5SRSdV67iuTSU7NXnjfwZ7yoQip6W8R6DfbvrdUCNz",
  "key19": "4QFyoA3k4r3JrCNf9AN8ZCgfaBPvgS6R2dbbKSRKJ6MLf4fMcyw3zcomDp9JFFnrBwnCs17k3waJELaZErbsK5wQ",
  "key20": "4kEoTGmfST2wMZgshFnQJ418UQCzncLZC19YRQLL7bsVVdjPam1FX8zwbUL6EXNYofMRXJNJw1hguuyQANtTkRxJ",
  "key21": "51VAkgj6HmUbMxQ4PHMmLUtXETK8s6Dqrpnqmxye7hDPs2jStQt87GQWk2XATtY31mvXFR5vcCSMgGVA7eK8ZKkt",
  "key22": "4ukL2SHuKcALeKJSuAgGmkK38Ukheux8yxe6bWvtirjfbSLPSfFJu7Yk5AjLYgPAiSgE3VEB2cGhx7TLLbtr27CV",
  "key23": "2oCvR63nw7iKKJeVTMgUEi21amARG2Eb5ASgD7hkEATC2ZmMJRu86wek6RZe3pAxSsEEpNqb9UdiMMb75gdjx4YL",
  "key24": "5pRQ2Yg5jsFedCM4Say1MBkaqygHAwLsJJXMUTynKVkLxATRSNajqDiL1n1ukQL34u4TxuvZV4Z1VUH7AGNdbZQU",
  "key25": "2mtUwp6jmw5DoQcob6g48r14fr7EpDgq7zUWzW5At1xKU6qFiDevqviooQnGwroJcPqGobaavkjB6Ryr8CVSYyou",
  "key26": "2B4Aydunvdu4LqLi1Dukg1TPQcoc4WdaFQ3iasciEwecexLw1wtF2tCvXJFLSdGzagZryd2Ntw5g3ZYSvea4ktG5",
  "key27": "4w4JfaAkDgCwympR1EaUWgEAKrZLAERzMbZcmLJPTz1oE3GLSD81JCGu8pqeL5FiaUc3DPiTN7ME5dU9neqFupYM",
  "key28": "4wEFxtHAvKdAcZM5fSuZsuYBjEoDUpFKqg3is1gzLV9xEwZTm9gw4bLDfc5ARwMndK1Pd3YG3tubygcsXAzVSVnF",
  "key29": "3BZ1dwvjfHGqo2RWmoHjgpkArTVFxd4mR82t86tLVhF5A8QXRhueWcgkNDoPvUhVu8NHd83FCvbWP83249HP5mY8",
  "key30": "3d1bmodRn4xzc8hCPjw8Y4E94fjaRRr6UmoZ6Wse2XH9WxjTWNNDqJWsV2ufWT5yqUhgY5zdap6GoyEJxFtqbBAX",
  "key31": "3pgocLSbAb8J9mgNLcwZEh2hSy6bV2H9RDx1bAMzebW3ykPpahpRXTq3VdvBHAeho9iECzuJPi4LhVmsKo9moLna",
  "key32": "4gsUPZM4e99hRjcQWuu4sA4mQKzzXT5x46eq18bSds9KZAzhoZ3JK4P9uo6cvrXuxB7umEtLT7K912bnUGbrCnyV",
  "key33": "3PXMEmci71XWVGuFDAjiuEVczot3XP9P3dozT5RoWrF4s1xqJjpUJBPgZHFwqu1Ea6qpFubF2sKVt3mHajVFjdgS",
  "key34": "Lhbq7gLxD6KUjjuXauQVbTxXc8QKzfYtmeoNiR8AxCNq3bLf1s1xhPaJkNhFYjh1wPtSbM5JwxiWNZFyZUrR3qf",
  "key35": "KxR3jRzZuy4GM22JVM7kB45NypdUsvdjwU8ne1KWaECTD1pB1nzVbJuEaWtcG6vC67eiKrebCMdCzg9TK9NeQxE",
  "key36": "5nqm5yBYNUber3cKFupPDdMPjezah5PHS82DNmuUDHrjoFgCVqK8hA3AECDbVd5KiUfWsFJhKHdzYt99TseCzF9s"
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
