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
    "67HPdStSjcjVxwMwaeYppBfjoWTvZAHGGVYv1FozcnhjfhmTnY1c1xwAMkmmL2MJLqEqC6jMKAafA9QeJXtw14mn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DcHvkeKc6D23EoGYNpjwkPZUoaGoYKsFqoZRbsdk6Wp82oWgs8LPwuzdt5PMBtg7thi1TeWNaGfu1hsvHhjqJx1",
  "key1": "qZMyo5wx5yq7E7iXQMT717WEC9pk5eQ8tFBYYwaqR7HAzDBxbDd1bEZMXH9gH6kcA4nYaURDL6VA7i76UuxUUzj",
  "key2": "2pKoJZmxYo4enqKycM9Cb1CZw1NziiCwgaksWQwMit2bfH691Dgr2ZSbDRDt9HKDot38Vg2iWJfRL5nazvqRubSi",
  "key3": "3jorQgSMJQ6xaUnhJsqtcx2fo7mVxeYnHAsnQodqry6KZaqY6poXMvrJjYPoaAhnyXGVZXdNbdzYsEuvsF7CicBe",
  "key4": "vEY1UZQQUFQUH1pHZrkru47h2kkzy5HHuBN7vTfYhnJVUxqR1L4bFfhg8EBZ9UA3xdYdax4p7NcPnkkuLLTwb76",
  "key5": "53TggtnXBtsTboW18gZofC3AJhQKUxqvthuL1Nsa8FvxpJGQxSadRLmTBf6KcDV9hgJZ3mhGUcW9ybQr47vdjzw7",
  "key6": "2d9AbWwmZ7bcEZdVKiHuXZ9ysRNEe2zyGPUsKXK9BSfKqeC2eqxo3YSMUZ6TpzXuLUprocHVTgfarMVsFaP7Kk4Q",
  "key7": "2baB6nPo5Aw3s1g2yShzqvTJyLy7Z5gnC8vbp6avkPXJofxksxky9D5SzCLt6sftuYryz5bwve3VgiLy7HrA4YKH",
  "key8": "4np1KXLbLt1r6yRnoPcBcXQd4NSC5G8nHkepFyhDVeKARHimG8TCxAw7TMJQbCVNjpqFrryXF6H9izbKbyEttubX",
  "key9": "3a1Ra6ncZc8coomobG6UC1GnjQaphZRRzGSA5wRk3wAv3iUCTDsHhSkPkCFp3oKf1gYJgukyVFoh8LkZyNiiwi1G",
  "key10": "4yPBdpM3N8u9WZgcGZvDDJGud1aPqikxL4oqwLAQit9eHGQP43JqqFiQfeWmr84M1JEDwLswvPgaNjioLKzMuqcm",
  "key11": "dwTSgU1epngT7ght5yHEhxzQQM5Db6Amh4WbTGB9LosvJXbaVUDkeX4zGKnxnbxC3kZdWcLLAaBk7hEvWdcZhVB",
  "key12": "3dTzstJEE57hJ9kFVgcCSj68qU9uqcpF34pkNzVbF3LyESEr2rW6b2uCub4fqWRkZWV7diGBYpx3wT6cerxRAUHj",
  "key13": "5K4VpaaJ1uKvVs2YiPKFKJn4HayqLwdCZbQJeMumpoLmAVja74F5srGXMRtdDVpbegbGAoa4QxtUnsGUoGbwdPCd",
  "key14": "Xtxebw1RxWKXHvv7XiQzzDD2i8Apov1ieQZBzjjg9FYAsEcuR2YJW7KQhVdofdbAVfrv1M5yYw8w3AF8aGKFbgn",
  "key15": "2iu562NRCtDuaTf73fWYVoLpB6CewJ8mpDaiHL1pTPSX8uisUysmTHQCzzf9hSr27M2Xsyv2Uepzq125QDnygeQ7",
  "key16": "3tnWS71C9QGe6kUfmYk8xXCdRdZFXEm3YBTetHfRJJ4Q4591cW1SJPZBFXjSr8vKoHr4hXmU3N7LDQTdPqb32m47",
  "key17": "5pSfUUVdQukbLDnA6nfQDaKxJT6UPUdL7go7KK7ZtJxf1AT6LVmC4NdW1Ee5zHquaGo5Gckq2MXeELP3UnSqRQy7",
  "key18": "eoKSbeHVmxAydeFnJBeyACNyNNuBUokqaQZ3hF8yWZFgyFKg21Whf36RsAsmC7e3czkqPEozZreu8g6GFmEvHaq",
  "key19": "5cR7k6cj5Dz1JSZcm6FYLsXZargPuVZtaYJzp1N5KtN8BxapsjCQw6uvs86w7PH15GaP1bxKr8vcdmDpmndg2VB4",
  "key20": "5rdGcZ8EDH3u8uYGEVT6NW1AgzrJFebkyvpvGrvvW9EA8n5hJVbWghTUAJq2RjNb6Etmvf9wkgPFikaqjLhMUfRH",
  "key21": "3adfpXxnhuJtSY9swchtzn2T9iwm8BTCvbuKqYLS4SQ4ER9Mm8CKw1NxZYpgh93DtACpgCWa3HgbRdeVEzGNwN85",
  "key22": "2SLV3bof65DFyKQHeQJNNhmB9YFfF8DEjaELHy2qPHcPwwMCKs4HeWxNoRBgg7iZkrgQXvjrsDg5j6UgJNnRG99v",
  "key23": "2KfqABWweQ8uL8M4phX1RZUjrL2yJfE2yuuqW1Jmpviy2iKBKwsT2rhKHx5GApX8NF2ghYsHkGFnNNpAiBaLhkxJ",
  "key24": "3qhxGhyAc1S69kaxrAZNHDZmsWKVs5GWATE5Ha2Tb2qe7BhquHdntg8kBwcnHZU5BVGoHwyEMqaxBRYmLeso13tM",
  "key25": "5secApf6Yfxny77NehYqYoTVupdCaTxJePfc9xjBDd4f1jYyWDzDB4nQukrhR3zaQ9DBbK9UFbeohupyYss7g6RM",
  "key26": "31TLzTzbkYP59QcwrKvXzmfXkz38cJ2pEqHSCFDjzzPRW4DbbL66a39PdY3hvFewbZyZMopt537qeXBbjQfWFZwF",
  "key27": "5teaxAqSwMDcPbkkxjHxigbc1BYEdFMme5SandgWYcHDKQp8CaibsVDB7KY1quZaCi6AS4MY6GWyg2UwmLHPqhJz",
  "key28": "4sz2Dm54rDCd8nHB77aR7vxSt8Q1hmontrcsTsUry6Swi9ToFUTw34sk6AtHHV3P77kARYvNGt8hk3Pwo1hrgUH1",
  "key29": "47bPZfLHXYFS3V2voapg7Bb63AHhyiFfXxP7uHP37mhSy4gmj2525a15nWsjJByGw52iMWxdNiurqFCTAn5i7PNo",
  "key30": "3yekrkwyweJB1J1mVn6UTFTigNSnVmj9tZWPEuNQ2HrUvLWo4gQyr4ppRRsT8PYq9PhxhEaSWSgHmaC6jxQz3Qj3"
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
