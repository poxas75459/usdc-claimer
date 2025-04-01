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
    "5yaSY5LLa7GDd5xgcqxzbdqRVJsobzySknAghqABcYw9t5hT8r3uokcg6HzsAb9njLXMYW7a67vjTWicz6g2kanN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46rBipQqNNeaxpgjvNWrjBegtWD5de3Guy4dNTfWeGnTjqcrrha531mBt6Lt8ERtf5jLS9MN99fbGD5TG6NsUWpm",
  "key1": "5mPEML3cqyFXTBoWHX8Y2WTfdrGFFy5c1QASkzjU8VmV9ziidAfAXoxvBmWAxC94yYoNDMowQfNXk9fJU49riQ5W",
  "key2": "2KTA3vzHMkVhjLUVbhcb8Yswi749xVhAXKBn6homh5psX1xwnPnreGpL13JByWj269dc9hyFuQQZaeVibzWCRxh7",
  "key3": "5P8k6kRTycaPTLp2se3bUPLAQ9KUuRhHuaVZUeGpVbMWMExzTs7kP1oJ3BB7CueiTZdssPH4wZQujRgz8JX22cdc",
  "key4": "5poiSq7TrzV3CYAj4DW5LVgmSEhTa3fY4ZSHCJmEwstdvppX5qM5ryb3XTTq75h3FGvZKkrGrKrVY9obSF2FHzSC",
  "key5": "4gp6cSuGP32b9opGAmCaiCqXyVUJwMAi7xLYSUg8CqMV1qLEjcuZDWrCmpxxJWMdmNwUrPBHe8xuRd9F3jJU7Lnt",
  "key6": "5yeaAYZdjiiQhjVRG2UjZhS1kuBnK3S4BNmpQxZ2YSshXZCoxWccieguudfKxi4udS51QX4ssbz6gqzuPLRSpySo",
  "key7": "3Mc8LZunFuWRu7fjVXhBGuQUQfn1qg8aNPjmZJPK9Kev5BzmzX6YoJfUMvYgQKCsQj3wuoCHyPoBaPEkb5cpP1eG",
  "key8": "3YCn6jcx6JrB4TjawWSk4hQRu7eoP337FXkpmb6hwypZoPV65c7J1SpeJTnFtHQU4Rrnm7GyT6hS3aJXo7Kr5eZK",
  "key9": "3BxGxgmGZsvXvsv86yHEbzMKZ7DTm6aFgdkrgfpSM2gZ4sq9Nt4abkwWpgeL2WsmSaLZXKrRoCvpfNVSJWtyJ9t8",
  "key10": "2TJe9JszpGswmEDBCssRmeffRsBYA38R14RCzfRujPChNcEke2fMhzTZmJdaoiFJQaDSH6DJyDHu9ZGi6iG7kzTa",
  "key11": "2ZVYoc6VanwPcwY2S33iFRd6Tb9qzRNEKWEJVfRLryQ8GMNMnHp6E58PHiz1WCBGhCBGqbcE6iXVENPkkguoacfo",
  "key12": "5tdcZBEhC8YbabGJyPZBXhQYT2dJEYF92bCHHPNpxqRJEi5vz8UYiySM7nFoPcTqzg1MRLc759ogoZ9Nrs5FCXGG",
  "key13": "57PRacKXkkMZARTsrM6MRd3Ye5RPSicY1TR7Tru5unKsCUDuENmKPQEozJ2Rx4CCGPexuZ6VUxvdGKvK6J7hsHhw",
  "key14": "5aMkyejsjpwE8gcnGyokdpaFwFRgu8dFPbrPSZUQfCDSAxXnY8iTX6HzfvmNAxPZqajQe8NZMJzRVwgrxnsq1uiB",
  "key15": "3WYsv43YKMFYguCr8qr9nURgseydZcsggFK8u4mtLGLDExfpHuXcUfkcLUSbZhe1pp6m3CGq32FtnLXf97yp34r",
  "key16": "5ZnzyLkhuyYwyhN4opyMxnxtm514xnBPtToyZ5CaxJ949FQro6RnUYGAE4ujYq8EPur1oXTyNETfE4qk7sao8aM",
  "key17": "3eGyfLTqx4HAPDTsCpvGhp3GXinmdk5yAQfKC88vH2bY6zNCay199jQAy5AmoyTZrwMagYVAJTwg1w7JkJTesazA",
  "key18": "GtC5oi8dWfRxF1WihXpPtM9zNVfpjAq8hG4jJHiuEnKQAoD7tSsB2pYG4vpz7UG4kpyQ7RUr731KHQ3BmJ1Agr5",
  "key19": "3SoiwcqhdcrdMty6otSiR6FPjnHJjwHUg4nuzgakrAAanLb5S1yCKekUxcY7TiLupiwLPZxq4AXE6j3uWoQ8U1aW",
  "key20": "Zxt9otpqWcK85N3ShGmnRfMskXarmey8bSuDZeQpN7VRcC6JcQ48SXNV2QTHuUwvBAFSZZ8mq8qfW7VjZU4PsoJ",
  "key21": "3Lr7knGQHg91zabEHySnFPuVsRFsBnk1dwpds9MUuWWDKFkb95iH6DyX2J8Fk8eDAMHYAuhyGsdVCe4SV4UmBFCv",
  "key22": "5fY2SmXDUsncE6Aao9Stc22BFqvkRNFHajq57nQ3xQ37AXjV1pifvXqwEoxgFM8Etaz2fxvoK7NprRdTTXC2MSu9",
  "key23": "3pse6DWawqknSiGpPjgT9SghXo546bqwpuPaj7qzFT8L54jQkGTwEBy6L99Lx5EYGncMMUkria82Wg5uEmQnBZmU",
  "key24": "4C6ygwreAPDtcAbyz1EhPSnicrF3rFmCXQjWU4JLZZVsNNAofY6G6Q8iYXhtNkVcshHay4yJR36gZsGXMZdPPWDb",
  "key25": "5V5tvsq2azRQ45CCfjvkdNBNT4rirHr5s5ZgjiLJvcpwfUqGBVbWpa4Q7CXA2M6cEiNTRLe8evEAYwPRXqXeSd7v",
  "key26": "49YrJV2PurP6nZRM1JoH4qDodkHrL7xf9cmmEbnU8Tg8YdcjgWjBsg6z4u385oPJ66hjsHEXK9LzhabBanb71Sk6",
  "key27": "3gRVcUtY8eQjbwww7uqRQ7Ddf2UcT6jBNp9YSZjmhy2ior3ukWmd1AAu5qMvYCraXwZWbaKGhw3qzfunzaeRv2jD"
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
