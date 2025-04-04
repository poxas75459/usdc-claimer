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
    "3XTM9gvbh9NDJvr8S1iBbo6nNwoqg6uzE4Wz6bpQzUJiszokvB9iAuT5RggV2ZqFjc6dfA5PQjCVcnnrQdpnbE5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57HpN6bkTtE6siNXQu6ZSR4bYHFnfCntNiXKvczTHBz3LoBdP1nXNPKDwtJH31SZ8VVhTS7voqr2GXMrwvxYngQ4",
  "key1": "4fC9gNZZQwjGfDFXbdjdgoU2aRwMnrUKoinCKVwhSnaXCRhZ1d8fcwvSgg1yYPutAWPecjdtYctwLWtgRwKrMUEt",
  "key2": "2Db2yfL5Kece1C6X76c7AiHrjyJmNLamR8anXA869GsxvcNAN9nUM1N8Usvc1Xb5BGgDRdZkLswX2YLSjx4jiyYg",
  "key3": "4b9veuxvUSotSCodaSeAJ6tuEewUyDN8pSsMTooURJPZmm4ehTdSpUxRHPSJZufM3c1ZKZothDcKCXaQtaTaWaA3",
  "key4": "5FezYQF9kwZpjcsu1YKZZ5NhaWG3qFUKTvGE2XYs7Mr1gg1n9wGrgYLAuzpm322NkMjN9Sw4BxnH11qkM6CJL17L",
  "key5": "4GdfUP7f1BpPa7LqBsGK84dgGR6iTvf6cpsSecjTv9N16sgfoWiQakQ7JNJBhoUvWN4ahifnhbQehzPy1Viom2yb",
  "key6": "5pyF72Kmkt4B19fT4QWDwUHtNJJWQAWHqKid1ppCkB6uG8RQEZps1cG8cYk6UtmpE5qQy9XeBCcdPri1eQtVRkfR",
  "key7": "4tC1hvFhzwpSVf78APihsCQmkW7tVdyLjCbYUiZEViNqEWpSwY5v8A9HCjS43Dgbk88D52dqH3aoW2xVFJGKUw17",
  "key8": "4k3mr12qUHcn5idiuuiwkXH7wifjGQSo5Ct3JAJCHbkxZBBcwtUoP12tfQVPPfGwTgqmYZVM3WqRF6etE2AEnRzF",
  "key9": "479ms8fjfS3tN5Keh2vgkSV2iqWLXnhpzNehCm7k35G5ZiatyoS1zmUPVbaaVkhKtV3UfQKzRGP1ZASCLpWeWmW",
  "key10": "5NA6rhPN9P14J3Hxd1fJPYTfN1vaiz6qhr3ZmAoWxQghU3Xs7mUM5Zn7ySsmtL5NT2deBcEbZGDu7CCctrUj2veA",
  "key11": "5D8N7vFK5FE7x9xsmuKkf6YCrNZ3434rAVdxD94teCMKGAwbaTodXhxUhNhsnZNGzR1WV7Hn75cd7H2BiY1HGytg",
  "key12": "4oaBzDkTTQfXUARkG3Y4ouLYjiXbykjMiZgPrUeg15uu8Ht2WiwUMNrki8cJhw1KCoyMGVjoDZhZ9q4SRMWcUeD8",
  "key13": "4uhyVT9hP2QL19YchtDw9mxX4iejunjA6KwYZ5KbZn7tCQ8wfaJt63VZ6fL6qCbgb3PwSoYaUVmCnjvtwYj3cxXd",
  "key14": "5rBj2DThXLXbphTPxaK9JUSsaFMDbgfWErumcvkWoTix68wRbCQGakADJNYF2ry6BW6RurjBHvLVXxX3Agmqoih2",
  "key15": "5nJFooBcKjdqMtgtNQkp1J6QPd9cRP91PsWLBZVtaEPHvUjsV8VyZXPTk6aCke4gES7eF2Cny9tLMrQ3XooLfUrD",
  "key16": "3A1Stu3p8fztJicTYP9eMHCzcuMtqa2ffNMPKMuJYH4stYAgh2FPcUmydz4CHJrMCsvnk57k9S5hJ1GnwSM22iBe",
  "key17": "5eRxkYNsbPtPakw1wHugKe1V9MQP5mGJwJaqWBzh9Tk2tiUeWgPuUizuiSq3yoeEuPLjU9eqmNyLD17Mh8dAh9L9",
  "key18": "62jHMLYULeLiWfTM1mDj4MevoEUPcyEHPWo5Tv2cN6qvDdHmeXyPePfBDiwow7cAKcxVBJXrFpXGRwJipx8kVq4A",
  "key19": "3YFmkr9PruH9Fux1kNcHEFouZMNJxpoxuQNws2NtQk6Jp5wSFhex8ZNDkoaXfwYNmXvUVuXGzigj1wWF4bnNctTw",
  "key20": "5c1QiQmdRLbintnj72hSKvGhcoTbQotURyMyhYsSt1vg3vowVDWWPLcNouUbM3SUyVT5hMELdDB5zCWPBkiTUbWF",
  "key21": "2x2bd743MusshvCQXvSW29CyDgfNZoy5wXKjZbbCzgEwC8CEpFNoefifbLjoTkxK8ZNd7SYmod4DCFQ5BtQVF8cH",
  "key22": "TPWZ5PtfUvtUMeyNCtpQKaX4NUkZCZimRBJop7xbEZvdepbowuHJiEYqXNYaSf7EPnvZee2Z5xDAeQKCdMo4wE7",
  "key23": "y9GNRYCZFVjgfae1Qb9ZdM3fXWRGhkFSG2oaW2qiZSUHfCnkYjH3jQnbPfRKq6Ef5MmJpFAL2LPYECkPsDoUukc",
  "key24": "zezpGmULrmLUD9QNzRL6p5uyc41NgbhTNcEYZFfSFAeGJ66DGfmcxmAoddJ9x9gMCJ4j81KHg9ZFu2TTvRXoo7q",
  "key25": "4z9MRkUdjryDgS7wAUV8JDZGbfo4cLPZNYHeFnbu6TTBDPW5QWwJFWvrKK9sJbJUyUasyK4AopDfhPhQ3CbuZ7Dr",
  "key26": "5ZutoPkfJA845AUaiaANPZ75nd4W8sJRi7vwAhfPZAK69ZgGQN3pb8RFB3Nx2McZzd9UsAPGQdpajYMgdp1NyJL6",
  "key27": "4sUxVeqC2k63yQXdwS4w1fGBNT1RBnZ7bJtS4kwha8SfZpDtySEUTiM4BMYdPEcesrdWWEG3jUWJvVNHhx9zpBs2",
  "key28": "27iZruUsY9mgTc7ZFZqe9QQV5fe5EscRcafGzBHhDrLXoKTTuverQHhKJk9cnNbFNSy74w2Y75vbysDMa5BkN3TA",
  "key29": "4nZ1REaXUYJR16ptPwTseTxPsLrTV81YUW5UtwxkyuEtwrm3eHjJdPmZKeTFa8xEBJhntEh4pj6drin3CEWxGPTL",
  "key30": "98uxGpWuDJseQbjSBoTHYz9so5a7YkU5KhzvcyNwcxCv6ekUvztPakzyMLJNT35EH3nPXhjMrZZVsXf96ZxHvDQ"
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
