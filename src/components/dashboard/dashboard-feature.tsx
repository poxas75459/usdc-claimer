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
    "BhA3unrHhtYQmNPS2W1mhzarVjE7WMai2moAAZmaZXD4qkQa1fsuvCXsMqm1TgJa7a89KZtSVb5fVFA4Eo9hCeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LLCVcfxzNGWm3tvBgG35qEZv6NcXjm1PJ3JGBHYKiCPXH1qbfPgoTTexgVMtuyr1YYUH9ruEU6RVcUUYsoGrz6D",
  "key1": "2aDCxgHecmtUf8qbvBUaEpr3VGbwWcEqb46HsDjtRGHboFGg3nP6e7wnptvMvnVrBh5Nq7mD7ogeV68BepzaJ1ti",
  "key2": "3K5LBk5jzE81Nsb7BVeyZo8uApdaUjsXSZpvoMN3WF9QBnF7KxRFxum8194PHszDRsexQmUW3q7B49fgVQ86ZMnK",
  "key3": "33xWXm5VHz3iToavSq9d9yaTxpuFsumY3cCgzoiFZ9Xztx4kNY7sr9ut7Vcs7gyzYPH37KkJjqssRZhyLow2VNEh",
  "key4": "39LEvk1wMdRKbd6zjSfPNhu5LaqXGbCYMhE6441kdDLBBQaav19AszuhhsvfcvfMpK6SvYqou8ULsLdJ2nnpms4e",
  "key5": "5aBoDBY34oCedhkNNiUy85i2iksJPqKEsvdEwSbg7Xq3QaFWXxJb69JiV6c6u8jUE3Vo8B72zWhh6P9NYbENr1JR",
  "key6": "217c3Hc4gxq4W1gZc7rKXffFU27eNYKQyBGWxJgjkEv67ayxUihQzZ6qbjxaQiCJARP8SuCCTsmP35RmcVvSuBBz",
  "key7": "MVg7W3j7NJsySPCeD1KuTxBJR5n79dQgZSr2M1DZ6tHAnHguWf4xua673vufq339i7YHh7NTfY6b9hQZAK3dSYz",
  "key8": "XLBLUCYjQE15eUR1youRwsA737CXTT9hJ4T4cRM55E7ZkX3QqF4FV5dCSPdbXnjqpWQSgcStJfQ6f1uwbppBDu7",
  "key9": "62at2Yg8Wq9xJk7H23AjhEYeoA6Q87rEMgUJW7b3Gh26735uz39cJQyyk9BvdRtEC3TCzNZdawFjrQt9kkVkFEDf",
  "key10": "2HK9QkSrqKAUk3P1NqFguZw4YVEkfXZei5zGrZAuJmxYHhc5zhrnuo7EbDXYAruiYJ6wQBetFXgcx5e9CQsaGien",
  "key11": "2QSGKYN3AMhEvK7ViHzgcWkhSrQQR9p237c6Ap7pRB12LCe58Haq4xtZBfY4Y9wMTjrMUTFUb2B3F4yo86H2fL1N",
  "key12": "5d7uR8iHCGJga5wyqSGvvDBDenJwA6ZE98mpMrd7ESS7jRuNXn6LofkLteU2SEc5ycu3b9Z4c4CqF3hxNQ3gRrD",
  "key13": "5TMLLJ188xgpymbJupVCApoHogdffR8jskjNdknJo5e4VRs8VLasaaXBtQFtCGLQSJg3oBB27jisxAn4DA6opWVe",
  "key14": "4DL8mvS88CV5pe2E21UJ5wfDhyqCkZUAELs2BEBuZMopkKgt7pAFhXFG7s5JzTavHf5cz63NYivhdyU7EQXL1ngP",
  "key15": "4xiht5cj8FounxbEHMbXuY2xYY4RTbmakpH7Gn73DYU2vQbgBRjopD1LmzyW2AzsqPYy7ewaow5J78bBVF6fV9nS",
  "key16": "4PdUBEEWXDUETgS8uMUgiqkogZTaBPk6SQTapVfbrKc1AeCWEGQtsMZWYkrLULWNvBZqf7wPEERbEWiubUTrmc28",
  "key17": "4VEJKxNX7FB4FScVfLREQ9THNjLuhU1CKAhEBvndSDALZF2154TPQqc3s4zt733tT5Kua8mAeVsV7eE4WEsRBB12",
  "key18": "5ipP86cADKXzGwR7G2WxYEBbDAJ6X2FJHDWwbsQHpqMtE1HsYNe2sne1npTedyDbt7kCspFnmMY8gPheh5TdzrV4",
  "key19": "555CpXbsrSGcuWHhqbQiDUvohQ1Pd6PwNNmoQH5pZhZaRSsqDJEvrzmrrAEMeVNTjephizDpJycaSPpNimCpeVQF",
  "key20": "3jLBpvUhhHzaCKJeg8XjQgEZsB7sJhHQdtrbGwNqNyimBv9o89st2fvxR4BYyV1KwZ5Ct8CZDMafQELNeKqfM94d",
  "key21": "2Yw4vxr6C12PMuuTimpypTAPhTnKmX1DsRj7sLoHb7fTxfVnHjbhfP3Lh7NmBc1KE7nFXgM2xai9zZR2fc2N66Fh",
  "key22": "sBRRsV5HqN8F9KcD41kBnZdaLSJoX5g2LXakMpaWg4gJRNCCbP45fVZ7i25Gqigpkvn4wCkkjxFqoh86iYxycH9",
  "key23": "29ejyYrMinQcQKqCbjApQcTM3UqqX9SwicgEW2jSyHDeVuzHswfZLhtSwsQ83vzuEqxHvwp6i6MKNpZpVQCYsGpv",
  "key24": "3XRzLthH9xprg1hRZFb6SnQGSyySLkhdqieGkA5Cx3h1VrxANwKwmQgxDMEsdbvMdBsS9GPrGtMkJKrU1PtUCbnA",
  "key25": "3X2hAep7ejp2b8KxgTqgzKvrDj4NQAQgGTd5tJLoaSFhYZmWFjDeZzCt58Nu1FhhsjAkoRZmsDazQ8YNEjRh6R2j",
  "key26": "5MHVi3TTbFKnwsYAMZPrSooGdTUNAr5JwJfsJfK9NPpYp5BRA2M7n53XksgEuFhuh2D515R2PhvTb6YFdjT62WAF",
  "key27": "5iAt8FQJwY6mguoh74s8ZQybymubuacJUWTshtJvPoTxNAFQYxstPuhgPrepZgqHy8UZjqxdkABiYdTK73EzJZ4e",
  "key28": "2EPmWNcWrbPedPWwqJPp4vSDuu5xzYaCa1GoXxCrWWJGYW8u8qdfsT5tRg1ZKn4jFVDHsrAz2MgP7LmhUajFjc95",
  "key29": "3K13SZK6XZ1PJHZReBuZ7jhyeg7FqNx2TQCQDdcoVEaSG6uovr2xSnz9wpQxcC9K8rpwtQrkBUKJJ4kkfYzFMmMx"
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
