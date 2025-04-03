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
    "53jEcGvkz9oN5xbTLLd3L1c7Hx6Vura8W4ccUsNd1JNmVkuzkYATFq2DLG3dhK4mg929dkuL8VLMy2FAJsXZqxo5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w19pdoxh2gwmBVmv9Xpk85MWabksAjQeXsfp6B4Ko36H3HUHBXyHZ39ijGvfspG6tijQzEWeQseVqaioF3MGbkP",
  "key1": "XKCYFVrZzWmfLyf5rNJTpJe3hu7iuwBHz4Vk8BgeKPmCXJM2Yv2r98qbq8voWqDcjAGdWX98k5S5s1SFUCjRwDG",
  "key2": "59MsHwozF31wkUFmbTm7vjN4PJEFHdgrN3TStjPYkC1e9SWonAdtLYvN2n72Du5fYHFvEfaPtDGBWTU3vAraw3KK",
  "key3": "TWCRroviUUUs5XoLdsnS8gBSi9supGGydtJLrcT7CPfJQVpyqpSe6rZwo7B5fjtZJNyVUPgjKjxuRvETMFUGdh7",
  "key4": "3otteXpMnLniJPRjXkXe7ejuwgU4DiQ53G79nnPCoRkQP15SSJL33xoviHSjzyeVz1xb3kk1GNzMceuUvUCyJAzF",
  "key5": "4frac3r5pj9HD4DT7JdBWmArbHxGL2THzP4oArJU552cqbkarnBJPAj2qodZ1jdupMu11RL4gbzMcEYmVBAM4vfp",
  "key6": "AoEg9U9ov95ns29WNDcDbz3bjth77KaEXL6sixu9yYDLUUwpvBacHo8zFU2yEY2RWKK8ESd8ZfEFeXmKZ7BzYZQ",
  "key7": "2KogptUGeGwb8Dejqezq7Rbak2i5qjhzABkg2ZRS3evgUFSZiiZdbJcKdShkfswyn7py5wx3YJqrTzFrqyzUJ6YQ",
  "key8": "2HNvpjq2bYi8C5Nz7RXzotkragCGgtnwTGXCJcog1y92M76BKohxD752RyU8wak5ptgY7uKXe1r2HvNiJEsuQXeV",
  "key9": "3G7h1iX8rZk24iigWJwDMtmAt2AMctFA4nmswdzVgRFqx12pL8NwwBW5jXfp5PvGrYpJaZwrPVUSkKM9q8zRNZJP",
  "key10": "4EX81j87BpatjU7vZecC48E9PGoEHPDJDH9CXQt9D1joGpNW3oEkkfSf7vAFdrZRxaNsbpQvnzjLnVC8T1Ddv1oH",
  "key11": "a1jZMKHaQvuqM5iuoM33i1Dr2owgDer2YYGMwQwwGTMA93g7QHMaCJH2pkJrewv1YiTkhmS54qWfSW8GfxbxZrt",
  "key12": "2Fw3fjeSWado8VLLGZ5ztg6JntWcRtiMmou1YNsueuUFdus22NLexgGucC9nSSwMhKaHz952MQRqQnaf7248LLVC",
  "key13": "4ewKiQriaQ4EuJRRXypkQZ6xXCAV5mAikC6n8NLDs9mYEqhPzjFVszqMaiXLGsarFqRcshsjPhERooQUydRz9pCR",
  "key14": "fhC51zE81QvBrXRovhncEaEwFwAqoUV3Rd3PJGkiEAWnXUKgHtToHWZE7E4ypUfofvxSDr1VLEcysKnYhzHytLR",
  "key15": "4R3fZAGSFc53WA3N6QScNnDFbRvBm4c84PQHiscKUQ7PQqTC8NihyFojDhyJ42DckfNydN8qP2hLdJFkC99a36HP",
  "key16": "2Wi7jjAB5UtTiXtXBbkPRjd7vJFpTgV2EQkoRQSrzTy4aWpzhcGxeG9WWfD5HJZaiD2ZJvxk6Y7wx7gHAmSoBFSk",
  "key17": "2JjvLX8ooVDW6smEaDVp57ob2W23ekfbCLXo6sHA7CXFzDsNcnDGJqkVWjKhWAaVAKCQuEgtTGu1XeLcHsJGxDmR",
  "key18": "4nK6Am1iY3s4WhRCVWE1Kr714iNB1ShZ8RSyGWqxmN5szwhwXyfQpaghz3poQdtrY3WpUDNoP5vGHtrW9AaFzCHe",
  "key19": "fEfoZzktsUgPdXAgXbch81eb5U39Utsb6vRJkzy1yyi9M3CAG9okiCg7Wuee7kR3tMYszBZbN9iemGKw8XwkUqm",
  "key20": "798j5QthDkJFqiVBBDCUB6oqE1J4B2sSSekZgSxii21hTmuJi1ac7h5k2HkoCvwnNKAGeenKy639EDWKQfaUEZ4",
  "key21": "39uaRRTrV4VB3LhY5qYGPtQH1842evLeebbyeACna1WPQceuYntr8tmDDQ2SocVmw88UpfzifrMzPkPzyt4Yvei1",
  "key22": "4rixPxQ39FKtN24L71s76gQmyNMvqm3wjP8wyFBJY8J8vdhpboTNtuVFbv445FhLqQcguajfUgEzMaUiQQrwFuhU",
  "key23": "4LAnyTARSmZ6upZTpGwFdbyNjWExFMM7gPRKfapWuqPLboiGFTondYVjWudmCNTkgCoXYBq2DbmBR5w3TsQBqWU8",
  "key24": "21jN8EnwsGoGZnpn5qbXN4m1NT4sTUMa6NeYfzY6ZAx4Cu6tCANWgVFUmDQmGcCsCTLosLUMV7wPSpJxxTLc9oXj",
  "key25": "2b1qDsGBKSsPMiwH4LTogMAhFDoUeuWRUyfrnk4egcuuK5S2bUKTsrxWtiLUsMk6cPBQXdK46PPxAHkfhF52Xyix",
  "key26": "5eDSpnSyF5qDYbgfQLFYno2Pq7obVn74yFHFoTxEgBh9VhZMXx1EWsUAbYiE7DV4KvMHmd5jzbfDqbuJQ1HMoqEJ",
  "key27": "CY796DjYNEP26fb5ZXW8SHV6FQ49naXH3Ffwr5kLNgbRUwMFAvdKpD2vxTGqT3ATDu6u2yphU8M3Uh9adzfk1Qk",
  "key28": "u2yAW3YndsBDhiKgS3fwtguycqWYFLvTL4mQUfcUpBJxL4n2VGmwPgWcoZkQzHrJZmSfWNpf7pGBWA1jtVtfwN2",
  "key29": "5xYjBUWfevrcjptWZ4TEzDwgiousLqFju92k2kvn6UShoN1Ww4eFv2SXnyBnEGVgvu8nbti9G88gpcS53B1DvZYQ",
  "key30": "vDXDnSGDwgJqUb8sekXn2nbZJsmSGLuWJvWJFCSHPv8Jz11wVCy6xZakUxHqib9Xuj7Q44Y9EuXxEcgF9Hvm2f2",
  "key31": "2SsJErpyQjMJwAff7JAjuNUQcaXGaYxqTDvugTLWwyTwLYmiR4RTvm8nHqBxW99Mf9Uj8p8EBjKtk78r7CXqfm9P",
  "key32": "5G9QYtMccf8MxrhSVL5g54pAoeVcQG6mgM3wgqfE6TvDYvYPgEriU7K3V6Lhm6PQNqUQLkXg8VzfQ72ka3kCReDg",
  "key33": "BAzym6HeZTfbobwhFU8yGWrRhE6D5xyoGP3geGM2PHevciaqtZjtgSVhvJkoVRvvaTuyqK8aDMkUwAEgkhsLtXj",
  "key34": "3XSj13tjqPhaJrMKBCAGKsn8Pjyzi9bjAwdFUbM8Z2jbCGkn3RpGrKi7JyTzHqAEpDDZ5fJuswqMjJsJJFEug7Hu",
  "key35": "2HQgnbKnzWndGpiAJtREg3zZxVNA29PCDgEPzYLdtsUFo2BErbtREsVfrUsHiw3YpqpV1EonbusCdxz7mVqtgahK",
  "key36": "fm9xaExKAe3nQuUFHmq5EjPfFZ1GWHAtb3aGdtp6iZ982L8XJKSasaJ3E867RSRmDkgegxszDxUStQ9FUhaDEaP"
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
