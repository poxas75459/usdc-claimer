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
    "5nh54UkNuesvZvJh5aGoVeQgjScHXX6nKtoK23JHZGhD9wyzuyWT2UwXxW39DBGRxtmGGGZQAdJEBBVfQP1HRGbZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28jRB8xR5WdnHLcwjx5WqfRYJWaSFi8Jx4Syhg7RgyXbPYdVbBDncYh3uh1HMzSEcHhVQsFKEDHaRMm18MgPDCMC",
  "key1": "4A2Q8r4iAVfHMQ9guEYJJPfRa363ApyLV4vRn72SwmkzxqfuHxxqchDxbMP7YpFh3DYRugy2KBWVfqJn6chVqYXY",
  "key2": "2N8gzzvWNAiJs1NekpWrYXWbPEEuhfiwi6DXG3scNh6TLAMggFER8PiBPNzPfNskMW19wqKyn6fjiAvNzbNtRyRs",
  "key3": "2dBtsn8pBz3oBSKtcHuSsQNMZ7wmsi94v2ZqeYFwshqhyaFB16KNApQNDsY2gu3RTCvGxcZkkzjjRz8wojrcFPkU",
  "key4": "3hCy1yDEFT4yw9bNjrXTzjymuGcRPk1PwHhepkk7JF3amKMbntSwS9dp1FEVUVThnNrERNnCKfn23P8tn1XvaNx6",
  "key5": "3fwwvZ6KzGe1TqMWy3GLrR5HsDY7JFpucQP3y9i3Hk6N8jnmTzXYsWgoHTDLmeRfjAwzWTgoEipfyJcW37Z1LZY3",
  "key6": "5dBMpKKEbwoHSSstPtm5SW5Bcgsgn46ymNPF4vksd9YYk1QmZoEjASUBc4uM7u3BqeCndJjbVdxgDJ3zH2W8z7qG",
  "key7": "4YPy4mB74tJjtUav44jSVzDgUGx6N4J8ZQ4QqJmUCeeWZSJyDi9PSMfp2oLw7UsoD8WBPEcQcFmw7snVZF1eKv2X",
  "key8": "3npjzp23Jx1tPcUNVkrPYk6brdvw6Gano42ekH3BfbFgcwZwVgNigpFxyc1zAofLXJTe69XpbdhXc8b6prNu3Mqf",
  "key9": "24DPJ9wM4dz7QjJdRJ9WsKAPbiGMNmRMbzYVRD4X7pnJiFe8xK5nQL5PksxzBjm1ZLCWVuTpuHnk88xJKTiUMEjX",
  "key10": "2FjuV7nRmV5bdrDM9VzoLG4FPAku3Fx6Gy7W4BgTAowgWYaZuceaY4WSizeA6c9KAJ7M9iiZJMwf6s41Y5vphyTj",
  "key11": "4Dzu53hkFmJecnTuxiQfNbwD912ZvEmR9uyXMJ4JzVijHPmCaGQLckCtRAe85pj9XwuQydMrd82iEN8pfLL5ajK5",
  "key12": "4tojNqR4q1huqnVYLeGqkDno19CQQmqT9TKMHcazCNbZLEuJ9ZWPT25im4iXAUH2RGRixCSwEQgWkViWhQKhGJaZ",
  "key13": "4u2b3fy9e6XyjQHT9kBKw67jbbX8vFgq289FaVTb3Vby7vk6a4zb5qTcnsNYkVfzzukx2baYZwiven2VbsozzAv7",
  "key14": "2qEEd3KyLGkq1oPyfqE1N5tFQGAtNzy2wt5PcXZdYV13wpi9xfGf5vWc59Cwb8wLDrnVPuCyZtQ1AQv4qm8assP3",
  "key15": "2yJWM7ciz86SBA9QVvwAuzx54p4n9PCdmCaLrUFJAs2aGHWspw3KCEYMKFaTMbeCUgC4vqr6eLmMRUwgCaLoLeQp",
  "key16": "AexdnHZw15Km4pxqJStRnrcjVnadxEK4pRrt2fThjt4rzvLwWxXxRNWRfeA43WpzWeBrRSz6Rhed9UDdWpXcBAA",
  "key17": "2SjoMa44P6z7Ev65YpZ3cKnWxduUTdQzJd7Fi9EuC5Sfab7hiwrffLFmHHvRTAr1sMgybDtjqqDgocEDLNeH1B6Y",
  "key18": "DLvEGXVxLVgSXTei8xRyhYTHeeurkRVYehLKcDp5uvFXo46dnwJ9s8BbbimS2nsYYS9HFtyQ5DpqKXMxVuiMSZM",
  "key19": "3eWTa857PtM6JBV2jyrdMLqEaEacQwo6QEfdAxcFgP43nNRj3sU8n3ZyyFEorAKhEaEJnVyx4iVQekQtB2R7EA9h",
  "key20": "3iJpLY2qkSudWDWmhQqBPcoRLi2XCVeBsKpmwoQehnpDqNhkDi4aF5T5ppV7qbq2XvX7ofBLCfLnpymx9r4diWXV",
  "key21": "w2oEQXEvsdcxqfnZXbQ56wtxALxsLH7bhQzoPmh24sTifig6orzCaFL56bnt7HaiUFwahW1kmiqMM6NVRZvt9Bn",
  "key22": "3qCvZtFnkVg4MtP2gH2smDuF7AxngpUngAD4QZ3oCobaPsVXZVCsE8fb8kM4Nx9Qd3r4B5zimSCrjJkxZfWsEZ9R",
  "key23": "64Bs9GEy9ohJZrwFW8VXPRZqcaTrNtGc5PzAcbohCcQs7ZTkyb8pVe5xeaFHWc64xeySH2PSEG7jcHAajtUcM3QA",
  "key24": "3mY4uyUBu6i9zg3QhE7Mjk6ocCCxBohwCE4vKyXwmPYwD3duzvW9x8TJGREjgp4T6N7ms7a4c23fpBzoiuxRMZdy",
  "key25": "2mbGP4aUD1hqQQ89WyrpBn2FgawdhweKi5ybApi3G6KfegK48v6p9P3gBtkS7ZVwYBz7ZsHDD1hrxjNgNa2dTm5s",
  "key26": "pqfsgZK96X8VqaX2Hgv6amvYUUBUbyzKSjt5xdX97HQpnvNJ2t4mk5xMPviVxPxwT16FFCEx4283M8HDZcUyprj",
  "key27": "329bdV65HH81uoZk4KAbUxkgSB45bLUZ1tZrHUtwFB2sNrrEHoG6gwrRq3L3XgpsZwQkit7uHYvK1QVJzHWdkBu7",
  "key28": "2Fa2pRM4tyQm3Ay4SUqsYm4JzS91uaMGEkQ7P9X6Gmr3qShafooPjcfWJejFa7XMPnPtDPNJsSAJiRGjiAvwjK3J",
  "key29": "2Qeesna2XhS17Ps5g8MBUW9gJQtQg3KyYhKfAbSMNbsvGQxhWGbTEZym9Hxjye5hUxMZv7N1g8mMGP9LArR7m43C",
  "key30": "YsiywTJ16dE4bicbCg8fzn2UH6KhSBpuTFscMB6h34ZRgv8yuAoKMqjbxMHDUNjwuEEdoiNpdCeY5fUveRZF7FL"
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
