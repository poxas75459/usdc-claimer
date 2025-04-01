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
    "4Yu2upDJ75uf1HthoSVN4gebAgcDXpGfQWcGSvma9aj5eeujd5ezVH8Amyp2vTpjsVuo1vCv5dpYgSzMznJsz6Go"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jZMvQEQ2EynLBEsYyfUkSb5AKkGc1cTBSztkmC5SkVAfd5UPWvE5bgM7W9jUAgSzMiY8gVhomYdwa4iFJyS9YUH",
  "key1": "3heeLHnGCkb3qP8zHWCB9CkgF5Q5DhrgEMtvP4eGzc1wqTjByhiACKTfR991vbsZrhQgVavD6Kn5A4UhxzbgHNqd",
  "key2": "2AmKLeXr9YXx6vaAdF8Astv26PJsmaKkqzLZXWWRghvwAoLJJuiisdsvDTpX6wpLtJ4VDnSxxoRVFDfjPCavhURd",
  "key3": "SvvYHhxZtC5rd13JzVWkphpLSuWhiuDeu4ssBQfWTHrm6MMgYLLWpZm5oS9A5jTYcFcSUmZKyhMBPW9dW5cLv4f",
  "key4": "Nt9XjjSqixUyVDDJD2HBB2ZLBTXCzL6fxRUCZWsg4SCaSerQWdFaDUZct9uh2stYm3XpnLRaFNYuNgNtHmdg2wn",
  "key5": "66wkAdLehrAMpMzYZLVi3nmCZD9a1THnViL7Uk3h4Pq448wE8dorbdmYLpKJ3wTMWU73AnyfaKfYcKpnvUUruh6C",
  "key6": "zMbkGNq7dBvmetMysDMeucvuRsFGaY13PBSUr7bpBdVV7zQAbZpY6EVRj93HZYTazHrG92qMvhSe2GgwBmapGB2",
  "key7": "3MMms5wV1VrHoRZtdQnAU8F4UNH5Q2jmh1rTchbaHE1KhxogueZ6qL1GCEtLmA67RS5jmFFR9ZwAFG1DHsVeHScF",
  "key8": "3PpJgqV2E5NAXBqLxrbtTfCdHs5LpCxQCvTxuMwzoKKhrJzmckJHXQhdX3ea8Ac9eKfDd93t2RAvGTddKG3fz3Fa",
  "key9": "2UWdL5hgJhNoVDZnAdRMDcFjXfqKCTvSpYsoVc328tWV7qB1QAuJmfsq61K1o2qE2WBVTqvznojnL1LxeCw7LRx2",
  "key10": "3UrtcmgBSJxyWiA6ZvbU2FK67tAjwLChEzDAgcrZNVYrFqPPMXwGRLmEQWJUkzthzjfDezWQvDV4qtabugu5ZUb1",
  "key11": "3okanz6vr9HEkaFEWXkoP3TeMMc7gfqawQmntoRdpTu3Mmq5nkyrJW1pifo6rgNkqBzqSfcsPCqmBJwbLbvUpz76",
  "key12": "4bYEC4rpm2w8ZF1ME8gu5jDPBVnNBTmQcHEcEdoUnJ9PveQ41CKrnryAMVyL41sPVzjpGWM7B8Nwui2Zh29ZZBPu",
  "key13": "2sqscukW222LivwdE7VTnut91enecntcZA3SudHhajFzmTk8V7KGDYVXddTKRSfYPpMjyGXaehwXW27yD5qcpLx9",
  "key14": "3KKBHuQzpWaCSbdAPcYk61pKd7b6vpnSFvAJpUiRdtTLefJDomFAuJyccSjRU4kEDgT8hzdTg6LBpVPBsd7PK2b5",
  "key15": "3E5tU8ntndCdzQS8YK96U3CnF3WvcNyCioaiy9xwFmH4fz1vtKMMPdxUxMQsMpfrhXRjkJ3sMzq3Fu7Y2THgieGA",
  "key16": "3ghJE2S5FxXDgwXPCYXGMNXzS4LetbxXHiWuj8T5tP4EB9QmS3vkGjMi41LuCDDiKQAo4tdeVLNjiri2qh6hXgmW",
  "key17": "3ZEXhEwQrrAePboxJH7MBytWSPJALXJfugCh1DP5V9NekEDxeXwvmA4ochtkoxNmsakJt2eQ9dx8cg3aXY9xZJPi",
  "key18": "3dnV6WjQX8xWMUigpYDLtBj89cTRzAm7z5gAhedWVe4oc1CjdVFaDwAUbAKgQWeVQYYSke4oKtYkqKtUpd2HBBAK",
  "key19": "iLzidVc4VtAu642z76x82bnhuUwG1ftBEBnQmv3m15Y97T9NsoREhGNw8Z19qZtLdYcmzF7dKsD7Z29Z81BjALr",
  "key20": "U8HGjMhVP5tuwBHkVjVNAN2Dn7Hko6JFeHQxCoJGoqN7vV7HQ8U3eTTS4PWSLugnVEAP8UL7qZowhcZvHCwC9Gy",
  "key21": "2gJGB2jfpodFu5xfc8qtryVj2qNaGJf7sH8W3JjrugEe9sgcjPMJzsGLTUfe9XuSsfw2oH2u84jpTsDg3nb4KSV1",
  "key22": "2tfxyYgAjSzfTzQYAJFNys8KT2LpG36qDK5j6n1wnWmrhaRYpnVsjeMvnwiPQ2fN3dFpzjegQtH4Zy9t1TBosZdQ",
  "key23": "3qaqc5XNGyQWXd84kYLJzJ7MherQyCwhAwYt58nGG37sGzsQtdNqEq5X7fh3MMrZ9wbwif4TZ9K2uQ76TcBAubB5",
  "key24": "3Q3PEZ1TvhvZ6NDrnfodVNinfYhjDPQ3eWksRrnKEickvEMWXs41hzMW1zSeVKkGMNiXG2PCnhUWNW4rGt4W5ECE"
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
