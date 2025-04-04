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
    "23Un3U6ZtHQHxwrxTw7nW6fTUDfFhSM5jpYs2w3miarcwabt4tmFcoyUV55aTFKYtWZ7qCzFdBiPs2EjUArz1xRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ufgMCY1fE1kLLj9qwn6TdkTcYBfCCWsw7jPHc4LK5Gx9Mv27THgAKyozDHNHPhonHwCeRj3LFjjM1fPYKoGVUWM",
  "key1": "5F44HU1x2ZkoN5Zj2c3qE9XdK5GyHp3RXEKk9gbXwJqeFu9upTqBHLVHXenQxPNupLspop8FbBJ4AikqrSuviH5f",
  "key2": "34BmxXfZEVAhY93VY3KriDx5joDfWjSq1DmjX4GVTFuV3uiqAx2tqtGy8nk1GyxaY39uLsSXoRrxvES9wv1yFqEP",
  "key3": "3XajkoTsc8HwCep8T4x5jhZ1gB8bms6tZfGwpPMVk6hpy7YHufVRC5sTwieSpvbZxbsUdAoyz358Y7kBDVNCD5fS",
  "key4": "2T5gR1omXWJ8cTeNfdPTabKSzoyAFGUaor8jSFvKV8vy84jxHmpTTtrpyWBt8sL4dzUcxwpnzo8Y5K5na5cka1A5",
  "key5": "3XtsjzKdoDtLb2F355GsxU1t7kvtf37pvB6gGsnxy8fBcFcecT8K3bWBNbub9FwqxcpudV3aMJretCH5gMfd6UAu",
  "key6": "5bXpcScHSNPrGhwEEuhZZccTAfNTQRLnHgUT5UksWZP88ZmSV2Ppfkb1NFWgqKycAZ5WWmhjY9ZqDim28GU7ewLQ",
  "key7": "5JsY89J7m1qGMhuNvYhYRDjTnt3Y6yGArKnJ1VetPmjdUw1YhJzBgzmtAsBxdWjzbbUgRosq8JKaianKu26tKemG",
  "key8": "2imSKB9ofzzxDWtWH9DTJ9997LBRHS3VbVAd1v79ao2dB46scr4a2gxvxCM7P2vfMKDZfzuDKVKpGJGsYUb6zCzp",
  "key9": "3D8GwDqxtHDm33PMeMaqUxhY6c89JCra1ETHMzPGKPMHRTfj7XivPqLMCzWcNhUXL8xMdDSveP9bivWCnUXF3LJm",
  "key10": "5pR1GbPk2rLGwLBzPZ8eaH1LLV4LBhpGRHpjqHp57a7DTg7rXeG9ownPQXV2B5ynDsCHXYQupPwxyWzKUFBft7DG",
  "key11": "5rornfVvMHnDt97LPJoP9zDb7khYj6fY2dxhoYStQxxoELBycVwHPZdSfii3noJdGkH28AsnSkCt8hCfa4hgwhbR",
  "key12": "3XJKgVnEf9djPvSFAJp6SL5GN2F2rQ8QpnPRFr217cF1nRehcNr4Ac2RYwheULRKiTaV6bnkJzPJoGoYEVkrinpq",
  "key13": "Q9K1RbZjUC645b5HZyWcF9Mgh2jTdgEub8zNoc1z1e2PUHVxyb4i2Lwe2gxceSzD6wV4Pm6ddsvETQt8ExAHRQw",
  "key14": "2AgRC6tewgoNvrooqWqaooK5xF1G8tgdjWNu8CWuEgByGpt2x58QgxFa3X1TzJmysE9ciLpsNsWWNz7tKXyUjXjJ",
  "key15": "4vb9CGUxZrfeuh9iXPjjgAYVE3iRUDLwqYt3haSXC1covi6pX4ibQiAshoo5xhC4hYkBqmGFChJLC69LK9cpjZmt",
  "key16": "54b3NiLyMW3HQHZ7iKLs5G6rwowbRPqEGKgePQKbj7RFNuJhBECLnjF89JGQjCRfv7Z6GZ48dDwsq5mGbuiH6v9j",
  "key17": "2FFLYGFTbhy7fnwwiuZEKAJyYj9yR8yv5kegYZxEnNvrh5Jrvg4TnnWhyZn4zfUJ3diWJTrjFGWgyfMrHKkicWz6",
  "key18": "56Q2AayVbfkkCMDEJM6zmeJaniPJgj1gUDVinXYmp9bB3wNRMqNdrkafw5dkfjHsDQJYd9L1kUTNqkTY8kWq5KXv",
  "key19": "65VN6QRTEksq9mGTotL2K4mpZJvJU4Jd5HquAycqUPcWqNvcHNzr6V8TmpdC6Q6HcWUC1xEFC3RkTDpxCbVzUUWf",
  "key20": "2nu9vXvf2RxVS5bVMpjnwNeyFRQkETGemWzyEtWNjyD1aNM27YMecm2bcpcopPsfgv7riRQSs23z6Z94w7JtYw6j",
  "key21": "osXuWRjrcFrpZ8ib6T7kM3mmfR4VbSzKiRccZsLi5eHEE9qwh5y8h3xU2fgrcBfN1Nt5nKFFjqLFbuP5G94YcxE",
  "key22": "4d6CkmnfFNpjGrDf7CaMS4x383gGgyCmpb6CVLNv9dn5ecBDGeTegTFbjuxWTS8ykA2ZQeS4vmf4vPRxnjtud2T6",
  "key23": "28a4FDZf4c2BbkKrabfVKdkGtHXXSCGTKbJaD23rs79NRkjjH9GkPfGpGqzw5YUoSL8KJeDwfc3UWVRwKNpuLqmi",
  "key24": "4NojR8uB1uaW2fSPSH5NwVSQqnfkexRQGLkzi6zSyy586Ni7E2pg2Fpu5sfXkySQT68DEM7iQPqd8fW9ut5Lq9t",
  "key25": "3JNov1HGo6mJsx9M52UazW3b7oxGYm1AVk8KJjEKrAoHJRVUhAQfoEfLZ3eS9macUk6pvmuD3pmEYMHaU1K71euJ",
  "key26": "337k4MUkisZJ4ZNHwAPkmcZLceK8KGT23NymswrnM3WUXAm2Cr8AARdy8WB8EpUkNdvXRunAUx2fVmASdfBxwqwZ"
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
