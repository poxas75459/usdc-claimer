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
    "2a1T166NmHZYDsAZVKn6zq5h7MRsoAhiTJq7TsNdKJgKb3KtLohY96dqKtsWF3WTuow5JCNVkpooNqwHaa7RJfVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ipAWsym8Zkaht3fVU4ZpVfJTh5DQEUabeKF4b6Vg6BRR7qr18rRVySFZFKYMV7XdZfnNQu64kvNhhmMgGpdZBky",
  "key1": "yENtUdzpav9PjPtEkMXpGzkkWycwmbtAGDXMhiERiXvDZFnFWWfi57aD5RSsfiM1dGs5oGMhrtnLP8YQ3uK18Jj",
  "key2": "2T7QNik9GNc3vvajKJTDqTe7vpCKjduUqRNg8wjzw5cZmY2juWSdhE6HWBab7pz2qDStQC2mn3GkczCht9vZgnMa",
  "key3": "2WVV5qFDsBqEaHLME2cYun7GFBXiBSQ5MP2R865UvCpJcMRWaUZ7pwWGHTyihKHsVP1DT2yemGc91xUfyH1enkaV",
  "key4": "3bEXP7xv1pCFD1PGTLBASgkJam5Trc5n1d4NLYrWGUt7qfb6Kt6K1xsPxWMvDTUyHzEzErmnWcyBtu24cghRQWAe",
  "key5": "254JcAfakDLqPXeUELhMn45qHdyv4srbvwc3GV2tbxJkuo1w1tzmFKWXQXuijwzDkaqeNKJFrHggGkMhN6KuWPM9",
  "key6": "S3ZduqxHavgfbxWKz8bX4W8gTx5DP1k7FxihUdkmbJofRc8BeFNohTyHxbDqyMLfRzLB3FiYW4bpjSjsMthiXG1",
  "key7": "4dwPgmj9A3uooLgQsEUsVrdp4PoHdk15R3NPXnfWL3gZuoDPRr4iFGVFYfQWEoTTCB682mQGiGbC6aRjFSD9qCA9",
  "key8": "2kG6AAuxHGQMkT94uthv6c5nWpjuMyMq2Q1sZeTGGjxR949ohcCGoypyHDfp3NRa2bVG4n7davM44AMmGh5Ga6wp",
  "key9": "2UgMVfTxuwBebxGhUR63Ypw6NPrGMD34iBZqyyBsugy7bZHjr7cJLfLFdqx5y8BqWgqtwSFnZbG2C3gbyRf4S2zk",
  "key10": "4tu35pPSoxvyDDNqgt2FZFuytsYTDFLVPZig4CnVpF9YASFWWLzoH291YX4xZR7FF9XAHpYLH5QnYrth3HGa3H6X",
  "key11": "3TeKm3Q1kaDcQyiM8AM1bZ4AQSRppJ4AsSaQ3tp86EX3gwnqALUHv8QHAZhzRHXJMK6ZWZYJQ9CuZ7rLGL3noCCa",
  "key12": "38gdjWfzzEW68jotY1ypiiJ2cPNmBUNYwGFqKQAidTDBkSTPDBwL6wGMjrF4KHMgyjyXt4scZDRZGCpX6AiLj2Ng",
  "key13": "5Vswy89sHa3WpaHB2ky2a91RwApEFGQ5L5oYy44s19uvGrjt1H2vFNsFW5zpFFVXfSio3EvkSvNQaceKkpwYCcJV",
  "key14": "3r1vQRgfEVxy5AafGGMrMtkD8M9oa3WD1vNQ5aKfTAmbggFzjNYz3r47NuvtmjhX48RqjNCf3zhT4WyokK14jhiC",
  "key15": "5pTwUU5pCCBb4iJRM5y49bXnxb6ocbqbZhQ5ikHjSi4Pb6tuW3PgNXDget9Vz8k2FnEeHvkztYCAXR9xyq1eQZWD",
  "key16": "ux2VXnjvGa1RMLio2AazjVXAvFA4hCULmnpGNkSU1ZJhfPHEBmpxs2ZTqLvbUpPrn7zZzYYAELbN31rQMDKgiap",
  "key17": "5o5LAjabnC2H5imLGQiu9yXnMLXnyLc2aRY1Uh8ACr47FoxgPMkkSmkHkey8GBvf2sfXJ5sA7AmdMp3AL3uE1GPr",
  "key18": "5EsXQv1PYf9TJB4i3sJetH7BZE4i7ba3CWscicNzFtB7GabwuXW1pycfPfkRBaxVQjDpjqjHzoHTMqZv12dJbFjK",
  "key19": "42gVnq9ztn1KA5is1yXLki8Ui2P911LkNTfusMhJrWvLmirALV4RiDdy8d46xaiLacTaFbBT9UdSo1wJQSzSvr3E",
  "key20": "4Jw1EdyEpMKWSq3ktaF4bpp1uQJab3UQJwtAMjU1CjwNSX92ZeXsxjXsVG4pjxeMp6NjWS2VwFWidCdoLxsqVG5H",
  "key21": "4PwaNrLpojbC6qhZBmnRan5tEaxM6GpWB1TCaPqfepgqe1NMEn4YHpGTsNcgyxxd1XyL5yvRYfo57pALMgJiaGzS",
  "key22": "Qi1tGBhP8MKec5vzXKQoZRmBkipoHoT7yGBJYE8nLPTxyiHoY9sBoBpRZYqc2uRGWXn84EUfmTo7wRNJYspUX9n",
  "key23": "2N5Kvwt498G96z4B9aH4GQGsHL2HSfD9rKmNyUMy8AaTnhVxfKwgUu9qaegJZCCSqThzAzEZo5DmCZ8Uue9aihVz",
  "key24": "YWnpZunRLKnpBkK7sMFWiS7KJFDAJu2JfU2a1vNutGsB87tGicER5Q1dv1oyjUQH1d9VirhEkA9ZiRr1i8J8Ynz",
  "key25": "3MabqVcLi225fLpgjECrdHQvz6P1JL5zMGSyr4ZKvoqFY1x1fVApME6W86fKUe35dSM4BP5cL1a86M9w91uyZuJ6",
  "key26": "2E31oCbYvgD6xjqCVve4HEKimCUA9NDxUGntCK4Lf1z6K4agthZoKSnFBtbzi9sVvZ8G8ndF8nBRbZ3sNwPwPUn9",
  "key27": "2nKM7rTYsA4oBmc81Aukk7iWkzF85nEHWySTzA71HSXBFQj6dz3mD4pRsg68wmnpykoKWu5JKw2tm5XPPJWGwvXt",
  "key28": "5LLsNVUzUstN7HEVSnANoyQdLW6pam4AVN6KRo1FoFad1V8gaQKBursAjbEFzZMgaA2qmEJ57ESWDs8kiLrfPxVE",
  "key29": "2SY6jwJtyqL7sLPKZhvGAkqYw9na2LbPNq83k8mzi5tuVkTFnXBYauysEPqPqyQjCKkiwiou41h9indebiAywyk2",
  "key30": "yZUR7Xifw1ivLQWZBNzUoJHrhbaShWQF4knxapbpAzs9dMYPoS8kVE9kDwuVu244PkhGvvzJR7PQxcyk8VtLeum",
  "key31": "2UGEKWtNWwb72AVR4jfufRAkz7XiZ8Ja4Wcmweqh8xA7ZRdGdQYC5BS8gPmdZetRV4tPBsLWGrUv8te2TWHFJF8f",
  "key32": "5a58MvfUph6yzVMApBHBD4if6t184nm79s7Qo5e3wZtrnJ4MZLFKkFYghmNtVBAofEnuow7cX7vzDL4sPBviakNZ",
  "key33": "5dAjB37TntjGXvCN4WKzopoahmtnnVzou4MYnzksYTY1PaSn3t3zsyaLtG9i3Wn3zVN4akLkSVuQHUCdP8aHua99",
  "key34": "4vCj3cqL4KZ9H8EN6K52qeauftmRwV3Qm1oKSpGMuDYxbbkx3NafuZidHPUxb38NLikSKwQCJx2qG5W9Pb9w9Lg6"
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
