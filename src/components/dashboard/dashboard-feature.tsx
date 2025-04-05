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
    "2xEUJVu8Vh4E9tXjHTDJSBgJ17LrxL7CPndK2e1sRow5WNtDrc6bz7N7krPWWFm6jnzTQL1AmhgN8v8pXUjEyxKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xZUFphcVhPnHSwvgnjmQVpCM71oxbRgs81HUUdgLLy3szDyj6CHFprqD3dFAwXp1Yn1xdd6vrcHL9qvBkEi7byP",
  "key1": "2d3ZMNDR2JDp91nGxpmoL9e4HNSVvdzA8aj7FPBmjihp1xziM5dt3CvKJ1Lm7xCNkM4EN6PeSros43oLS8b6UifH",
  "key2": "Txp6pzpavZxxdNKkEo3N1y6oGoG1uFnQUNcb3oUWuuFBgXEJwiSgKwSEuG7GG3P1Gq1WtNPUQ2vk42eWMP8kPRC",
  "key3": "4LkMrTxF9jtEH4W5Mi37s6Xb9UW6H7UTQDkTBb52QpBGcF1GnXNrTBQnJv9cRxuDH6jnxuRaVF7Ujf3TaDk5Wmwa",
  "key4": "34JSZzzZAtnhpomXUzXcRay7MsgRGMx5JqWjXbw435MRoLFMrcxrEVXUHepMPKJ9vEpsCNRPTfkr46yitj1nq6Jc",
  "key5": "2Ty1cCKo1FRXFKqG7yDQS75mdoFCuocLzaQ79dQx7WibMvhcyNp6T1VHA4AUiWD77ka6acLXPWdwGpsXAF4E2ibT",
  "key6": "497FNvuKpcoR7dvoBDZRCgCFFWsPhNYuj92U2zwvNVfh4yHSA7f9twRUuMb6nc5mwhzwNMVadvA2wkXWshYfEGg",
  "key7": "26mPKrJ7sUWtranV4mteUGbUpLsjfpT9u1AkAUPTWgcQLsrQU6xffsTpP33t8brp59cZ8121McTgiLvnnAV7nqs2",
  "key8": "4psRjWTno9UCeENEj1YGNmpZgN81yWpSbNETKC6NAPYnh417fnpXfg9EKZc4of2JmXQUKNRZrQeiLEmJC6pN5atU",
  "key9": "4YfmudC6fiE2kV9m81mqH4Ww3NdDcCYvpG6HtqfAwSPEbGU9BmZLPLUEwFek28CHYKRdP7DFmgaoCHNWdLawUhLk",
  "key10": "3FMaRr5VLyezyuWSDadgnCCiTrUJKiAft9WVuhapaBxKPnnfyiUeoYqHsV6ZrKrfxRTFSGUfFGrH6d9fLUou4HSs",
  "key11": "47qLbPuiSMLukRgJJARmUMBe4zYYkCQCC2WzTD5vMXMtoC5rAhaZECAww67dhiC8sWbZFfkakrzcRBrGCUyKemNw",
  "key12": "5HAqgKeerjuBLVkfmyeV4fdJ6M43atdYpuwmnLvpz4AMvXz6KJLwbJQNVsH7pxc2KtbLSJ2VQ55RmhTs7FBUfgUr",
  "key13": "5rAjQVCcw8g4uAWMSQznTqXu3VkLSujZrNMx436F9scjAWCVpcqRXcJgXBKyvfZQqJNobZey4hAEtKAFyQLscU3y",
  "key14": "25V74c4JyAKG1hR6mMxgaAhEM6GbHx3XSX2aHvTkPTzphBDYeqC76e9TPHDsjtHJxttsUJNeMFie9E5hFMJU3KW2",
  "key15": "JS6ZedFWW9o6XGods5RVNR2U9njMpEiZrupFyQCfPktCT4R2gE6LymzrZ8iuLModj2GC1MDfeP4yWRXMnKeeRRs",
  "key16": "4qbHfwMWsyK9FMa8mSVogKUMeGSZBicsKNurjuL446oA8DpRuWU6aF7TdQYzih1RTeZtted3b1cS2Y69SDfqbYvw",
  "key17": "tRwbmVX9y7v2a78XzJ1gmzDRwpjLfdiJLHj49SQzXLZxJX7nL5knixzvf9t9bzYYaKjLA6ddZvsRYiQyvZEt1c3",
  "key18": "2NDPcnn3Eko5w35z2dBui6V8zFRLfuFddBKC2YENkbodPgiFgfyRtjnrvsVBNmVvNRx5W7qejMDqhUa86S9b9MYr",
  "key19": "5PJC5sfxeDJecejXw6rtg59K9RgVUr4GrBmd4NTJ6qEiVwDqSZua924cPvKQZ3XcTeBSuLy4wDNLz5wm1hNmdXYq",
  "key20": "5DC1GLF3cPGJMSv4BKhc4x3bfs32Pk4YWLgLH9za4Dpnw9myWJhDMaSchtda3suW5pd7SnNw1m47cM1EMgYk19i9",
  "key21": "RzMLTNjAYJZyNsMbobcJfGTThq43WHCqpJ9xVp8vdsWLosGxWp4ZEiKniD8jmf9ouqVa9116FakAEdKzscCMAkE",
  "key22": "3bwcGSKQ77gSzyzaJPvT6wb5h1dybkK4BxiDjNrpVkA5YhDpqmhmFqMAE6RDBZAvF3LqhmGYUYmey5Zq8TedxuPi",
  "key23": "2THUy6cYuZZsuHvQ8jgb3Lu9poyvH5brotFxv5hgnzMmQgTfVFK2aQDkYaExCEbu6ra9nm6WKEmpyFjp67GxhQUW",
  "key24": "2cU2urSwXr7bgwSBaqQQMwnvc3B8xME178xBZoUkYTVBrQVQrYEyPa13UmLoz7N8YFNMAkF9DqgKyeNYUgaks8DJ"
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
