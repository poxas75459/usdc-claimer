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
    "cumFXo6mVSuH7anwGkh2zMjJoEmRY9WHPWNr51cacbJDGtQGZxstcY7k1ZyyRZXHEKSS7f1Tq23E1JXd9nxyZ8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AX6FPhqRNjsAGD45WupS1kJbXm3NsvHXuu2ogGF9tWVQ2MuPMPCmbMQv3gWkSM3DbJetoA5sZFtdjzH5H7ShALr",
  "key1": "5JVvHc9L4x6ZmENytxg5PdSTJfb6dQyBZfbf3UeaGBqdJGsFiTgugwY47FcYpteEhbFaJpzhDiz6e6PhRodSNMnT",
  "key2": "2DwnerVXTN7NavgoVyuqSaFeoPX2SUGdmCeXCJVqCWJsYWojJ5xrEucUt3vdoWMkfQWEcKfPzXotUp53JzLrzrjy",
  "key3": "33ewXoBM59dvi75G8yWsVhrtcaq9BUXhK7DwAtfhXKT7H2QPbQcaUoei2bss6Vza96RwBM9whE44NC5YbmZSnnpP",
  "key4": "q8ZAxUjPeTduRnyM1e44zWhoQwAAmh9UHKGN7sDqqPTTg2nZNw1oymJsvUhxLaPirK8iYsvJd2zUUqGkdm5wkRq",
  "key5": "2eLMBrA11FXjMcd3TX9GMRNRL8J7GqaBBp7MDfgo1mNL8FiuXmGXSSi7DFwNqeLhM1smopQ3vHjdrBtqLtv1J6yM",
  "key6": "2we3tZihBVUgRBofwEwJemjG5m9PUo8cE5kvVSTMQVgMngRvZNEMC22vQze1reoDEFB714XiP9hRu3zUc2R7dXfe",
  "key7": "2NF6Pu73GznMA6ZqGwyGsnR5vyy4p7K4q9xErZHAy8xFkzaC2Tdf2eDEAfY175ZwXjRZQkn6SkTybXygwcdKAZd3",
  "key8": "2GLGKvfZLJg2qn8qASkU4EHVNntEEcsPT8sWncVpaVqbZ7DSpZghHr3VTaWsvsekR37ed9n5zXtf4hLRhtj5TXWT",
  "key9": "4BVPH6RJnAfZLxo4bmCD7wMzNuoxDchaEtZk7aEsppjtiDnKGQwpAnGaYbyEQ7BJCNdWvbdAaDnMg3BuCpt4z9Fq",
  "key10": "2p9REYU2i3WLQy2rfGVpRVyRRBGWJqoicofMvh2TP9fXozAh8k53J2v5sqMk2h3seps85N7dfLk1SpQbPknKfm8M",
  "key11": "5XeHk9JkL4MstBpKxVFjpyrCNnA3JLaHzUh3ekyswoDUVhpp1c4wQ9zQ32usP8dSwNe1dHGnHg1PaCTcMre8nT6R",
  "key12": "rNsfn86JBRP8tWc5tVy5bcsknXy4hGVQbnQzYp9LAkrGMycd7tzaKqcX4nVbEPRSc8BNa1PK8sdeXsmEGMhj7vK",
  "key13": "wiJqmx8b1fyEJspPYKE5yGfGrZouHuLL4mjEZGyCUP88SBGTd66MGfQcnFQTKgAuELnQGBBa2jSqSTbhLLAGG28",
  "key14": "25yUxzk8ESJz7ScNuuufFuJWUbAhNSaRZUU3AK1os6U7mAZDX1hFpCeHATvBkcVjs9Y2nN7U5fQCUoY6HKwcjMCA",
  "key15": "4thGjhTm6m2ZhC6TS4QQ9wARDjVvkXMGLVp6RR26ELx4bXyjjxLTUdHAiQRAxqGCLanW7fztfv5StVroDxfBzMhH",
  "key16": "3FB9sTj4tYDmMe8aHBKXhbYXFRWJ1zKpQt4MUT8r9NGikvXTypU87z6swHVTern5JM3BX5PYQS1hZVAi74bFo7hy",
  "key17": "3qX4QHXyDgyEULL4SKC2SomNKbNN5xqhArMRUszeESkhLhZJVhh9paz3G932w4cb6PxNr7b36RkHho4WRr9EVfDN",
  "key18": "2Eane5QJSPSUHdRyvRJw3ySWGRbMcaE7Q25HEBpwyv1yaqV7bfLMjSqqM4bcTsNqqRuFU5GyiSToZqexbfLPtAoB",
  "key19": "3qqT11K2g8ucnaanfvXmGh58BruvUMvXsiRSYUtcCgh4nw7PGzh7Uh6V2nKufuExReecSwWTcvgirAGVbgrngJ8P",
  "key20": "x5nXxpj3qEwEgbrZmRgFx9EWf7Mac27HRY927mh9etVd4ALYxG2qMFt2TziEyGfchEbCv7DVGRaBdBFZuKBGP5E",
  "key21": "2jyKC956ZKtjEyEern4LcwZn44kf4wuKgi6r9q8JMZcT4AcsHmy8VmmDGrGEi9kqNqvEjNGkU5KfbNd3bbPpAPWC",
  "key22": "5DET7Q28YgphThJiCdd4VqAYCkJbVPdCXT49RXMDrH3BhS6A25raYLaY1xFi5yhKpbsYWbyV8qtGyMTEr7NSxffq",
  "key23": "2sYpmqb4eFsgehTpPBZdHkmgq6xUMuPL4th5dsSNvsfqSy8AuQTqUDCzeRcWfweAWPha9Eu5MeDk4iufobDwXLXB",
  "key24": "2FTu8622JqUZ2N22NwJs7qc8ktTsc9cpkY6dHBigUjSbsgz7FE3SpUht98ZAekQDmSLE8WqgLHoqQamc1gX2cdT",
  "key25": "2bVBukb8ZojQanp52YNPVoa4YsmbRXFis4zedx2s2Cc2txoBBfRKSapCQYhXhcvvjreH4HqH39e56w1JNcceQJRr",
  "key26": "3x5tLJaJmdx3abvTh3cs7WXjhZ4aNE36wsVP5yVXtHhMf8xVnQhRw2RxJMTHedXrGbSBVnCuPXcA1gjmJBR5bMcd"
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
