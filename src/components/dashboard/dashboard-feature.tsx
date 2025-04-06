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
    "f2wqKTTmm1AjBS7FKbYUrkAtRdb5pZztqpThPAqAX6Y5vdyJxrPWjfVq7XhFskBajWmpnLHffrjs2xqAJcHte16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j3B6pN7L5G8f55o1MNtvJUHhks78Kr4aUQ15oHnCKn1zQzqJfCTztbcj7uC1vvdribmFNw8Um1ig6PbaQiWJw5a",
  "key1": "3J9NNQ9MfSXKGhKmd9oqdbgwW7HpwedBiFkp5MHWrTz5RjPjnSTeXhXnjiLbJQ2C9c8Bx5dhAAVv1QZCEfXdK6Pv",
  "key2": "87axptenzF1tJaK35dcgb1kDC7NybdBmF8iM61hzWWSCMJHEPYt1qvfrtwfs1ZB6U8rPHvKmA6EauB4QhkMs7kM",
  "key3": "5M9mDWaQhkDL2mTqUrwQjgQbLG1om7CFdYVkDLjQYdoF5oFBxXWU4DqoFgiayNssP17dn2mdNuKWLFm8vS8nMhnM",
  "key4": "2nCZKDio28CV5h2pK6NrHpafJQygG2XoipPiqY5jQ7u9n2oCPMdTZrJyFDA2y2xqegqo34W75Gh2HcquZhTxmHaU",
  "key5": "oN3BUyCVD6SSUD79xqbs3HrfFQmwruqC2F5Qp57wnL7kcxRE2RTM84KVEDqS4zgofvAdMtC4wzSekk9j1JzFe3n",
  "key6": "4HA6jUdq16vcR35j1mvi2ohtTQ5Cksx276gtFDifmHur1ojdxek5ZPB2KBAZuuqoxrC76FLisKTF64xAimd8niYg",
  "key7": "5Vc2ervUBkDtLgMvg6HotR6nMmyxNrSaDTaH6eATUu1DZ1arrtvWNJ1Wt67xWndePEWjCEu4hEevSfrMgsnA82Qa",
  "key8": "AxnKz7Tf99VCHrFYaXTbyaJ5z77kHWsn2xkwxWx32wfYLX3y9NSU8GtZxEGHNfFbuDUSUnA3HCGjGwa8zVdEYVe",
  "key9": "4FXrBkz2YShftyKaQkhL7g1sUdFAhhkeAsXyCZhM7d53WaiTuhwGFCzJbuGQf4DXPwbx1XJ6J4QpWx7y9qtMqRUX",
  "key10": "SpMGJPMsKstLBJCFaPoG1uF3vktme54JheBQWtqAdR2pJEVL7G1dPBoNujDNbMyakcBcUvZnrK2YwydXkfuGB2m",
  "key11": "22gsAKWWGotbTBr29kgMdsEw2QMhE8sTu78KRwZre2n6UQBmav6kicMZVTMLNEQpQyCnEK5MUUgNjJ8TReGPcN1G",
  "key12": "5ATtBCj4rnEosFsQNUbNZ9rq6MEQQCzZbKkQsupQBKWrzxFYSeWyvPi6gzm1krgMjpW3xnD8ZXFYD5Lg5PvMwBh6",
  "key13": "UZfzhduRC17wo4aGA2HsLkFFwxCeVdAFEN2n491hZK4wZ1vENhqbpf8cme9egCE6ZNJdWBkzmbp5VuzhdDkVTeh",
  "key14": "4CQ2m61VJHLgvjami6nVzKbeG8kXygGTERyR99E7P5hxuVi8joZ5WJToNHczsu2QdFseobkiVELYCHZN6FctNJsJ",
  "key15": "ovYSdCugZLA5vFJDDxzRLheSC4HrU4Pe8Pj8qxrhTfL9iUECPxLo286cYxC4kFEMFsJTMgJThnWoYEGscXfmSNY",
  "key16": "65e9MHvVS6egsbnxe354y8QZVWNsYQsDd2pywwME7wvTDA1NXQ9ynRntx5iw5bCPCcNmcP2A5me1J4LhCZWCHCWj",
  "key17": "4y1L1wdPB9c7Lg1TTESfkHdhnEr8vNKbsYcgoMJofQjmztcF3BPC6hS5k2iPVUr6auQQgWzr3wmWkReV8mG9E8ny",
  "key18": "4GiHnKUd3j5g6m9PgZRG723QE4dCBYSJEYf51YNK7neWS4MRJoBdziBA796e8ukmJJTZx7tbQpSUJ2r7XHZKc17h",
  "key19": "31QHvqwixsW3FigDJSLdg157KgB3dS3szg343Tp4Rbk9NoebD9MSXZcVmdajoMDzXoTc3dJRtX9rUn8SH3ehJd2w",
  "key20": "3Fzr62ofTxesrRsLkkRnmpFY72oDgY5nPia1XSHrKg9ZEvN9mFSjzPkkwN2kLncTqFdMzns3XQWNumT5Esinjt33",
  "key21": "FMuJPdpz4NU3EX5VJHfoys4cjv3GbEig76fDz62uKtXcYUV2k688qh77Q2eM7FU1BiaYAJTR1YrWsvx3J3idWb1",
  "key22": "4uyoArR8L3oe4XFhSxo58cPu2SkniDiQBbwK91sPLkRAxFhrSYYRbiYkA5Eg3FPqgtCynwNa6VVLir4aLWQGnLDq",
  "key23": "453dMZhcjFnWnGrDhcUc6TCehVdWGQ7q7MorX23pYh45n6gUjmDxgh9qTASK5LtkBtJHqHsB7Az7oZ7JNYVxgWQ5",
  "key24": "U5WhjriWhzf39zieuNUspujqM9gLQt3YYcfcnm7C1i5uZkeaoDVQsyXPn5vJsfgUmLexnXNxagdVJwcrUuvBvBb",
  "key25": "55xibLyvnrxomt6sdN11qqrsKewvk8ZZmKek3vk6C1queEMmrv8aEVc8keVocZJ7nkjDi4f2oRatsakCSmWuKPA1",
  "key26": "evbtw4btRq1YQHEXoJQrQknH2MV6nqiAR2egZe4wQQa7KU8KtgUzQaNRd81PgTXanotmGZh9vcEhQqmiggaAkuh",
  "key27": "5k7T1ibFJwGpESBjrai6cbRkuQ918gQPRE1xgy3sWwQpV1RXeq2JSDamE7gLhvWPhXa31Hop6Jf7piskFDkwqMJV"
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
