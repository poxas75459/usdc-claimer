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
    "3oX4SXWbfBnMfVFAd5hea9LRuTJzkoHHfEEdmCFqf8KCo3YgPqLAmTTmzRqxmCRZ4aHZoRecaC9y9NAuKH2MELN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pLgkrjew4LnUUUDuRrEdQzbwzDL1mucCmZispXudsERxMzgpehsbX5PbNXucdWxuHvvrDtDjAgUP2ggZr8n46xM",
  "key1": "3cxEyg53n3TBGxRp5edRLWQHJbBgZzzGwpazbYJE7f3Er55tEcUim1tyZwdmp2Ddsr1MiE6HiCTjr3L67qtBw1VR",
  "key2": "2MLsg2pkMKepy1EmjuuUwAc5PCGE5hexiifsxg2V7eAQPVnUHAw6uqmBr96698mJDkTYrV6z3dCFxExotvLoLagA",
  "key3": "51sbRdFEeUwgm8x9UCKtpEZemoeiUq7aZWACu1qtueENFvYCsREXH6KYijLBobuSSTQt4qcNHuKPLxSfNC21E5p2",
  "key4": "3QGr98gw6ZyKySt5qwhJnPQagZd4ij6rwyAWRonPHfz2Y8CjMAxEam7EBoXrLZy4xX1CEmrSEiEweWf3VQsiNiY1",
  "key5": "4PEgQR31hvmgD7bp8PyL1cV2GUmx5LnSZrTdFSDWd1H62j9rZ8KpucmEX4cKokyvqrNShLphXuaV8HzskCoE7zaA",
  "key6": "34DRL2f9Hka6QqiMZkssYJUorMN6JUET2jKFn8rWMG6DZPqWHFgXHfEGvC8mn59K7DbwwthpdEjaQ32RokCuqFU4",
  "key7": "3DYic7JbAEJdZz5LkDfuh67HHmBcUVkNdDyziWu7uBr2To9omGnHLq3d7bnTZrXYhuQVoEzsAy6gdC76h3GwPBz",
  "key8": "2ZnSJw6ahCKoyzUu7TXzuwC52jMsGdFSmWiR76fv8P8JWVvxaEELjC4ANBREALKxUaU6tqmkXki58wanvTPU8ScZ",
  "key9": "izjWFWpquFyQ6KvsjgK5jHKhCErqAPaEGkpRMrMWgT7EP36q5rtg7DXANETpVBjz2GDJU4e9Lz4diu9Ec8E13Cn",
  "key10": "VmggzS37dRhJYHFQfvHKih4kpkNCHj4gkhg3fYv38G7S5zXA2dRuUQ4HfLqwxT5z86JYj4spibwC5GRjjE4mBc5",
  "key11": "3YHdng8KQY94LugaqrmsvgKhdtg8LbttXsgsnQnv9Q3GEPchHNrEZdZLw5bEWmNqe7XybunVWSQfwHJcmQ7fjxbY",
  "key12": "3AF3TEPLjHTvzf8gkWQNToAZt4hPsD1YWEH8CD2H3npFDU8e6BrNenUr8KfmbeZasMJk9pYKzD4WfR3zKZar9vx3",
  "key13": "4ZEVVmnyVQtU9xgr7CFnfE2i6UNv2XudB37eMMQ1HMuku7DXytW3PTNYRj91Sz5zvZWEptdADiGxDL33BPvMhkpQ",
  "key14": "J7LHyoxSoUWGMCqECzEyhGx7SjPL2YskrtXmyFuWwxhciLooz5oYjWnUQJKXbcukoYGG5UU2oG5jFDdm64TwZPD",
  "key15": "2yaNajEThQqVX4itWa2aqM2nGvD2Cb1uNKQiLAteoWamjBXRtopYZs23LXSrVKUduW8iAh9UDpaVnMY1t72s3XUc",
  "key16": "2EeoZ7bkG3e9kuM3mHfAgqR8ita5qzksKriT2ZQ4s3mbDnDDdr7ycKcx1ci4gEjPPvcG5pj14cAGtayFbVU54aLH",
  "key17": "2gqNB3b1xaeJvVoBuqhQGgZZxDt6NQKVoZ1w6NmeFKnechMrRCzegv4sAp9oYrWAyuPa3S7DPfwuSA37vvc5ycQC",
  "key18": "2ia6y9sEKHX7Q4v5WXppWtGjtgFEqnQUQzTKqNjPZddKLhgo8F3QQo3tFQVG7PJT2mWH3QXnTLpC1VyGVUeRoaZs",
  "key19": "x7NyvagYJAmqixj7dQC3CgtA6XCFHYh4czdVbA6K2k47uVyomJFbX1aEXNQkLHATW5fXU5vNeUPAm19zB5CgC9b",
  "key20": "2JY3R9Xy85BndSQM9416FLqmB8EBCH8q1AAparMQnCKJgb2f2raqUfYQk2kxShQULKN4mZGCkjUZTcrQJW3FDE39",
  "key21": "5YFZr1gSFtjmDQxgUFrGGCRr7W5HUp7VtS84tiSnrW1KuQuB3Bjmn1dq6bzVcrVdg1B5f9J726JepXT9YaGxPxWk",
  "key22": "rYjXAwykFp2ydRsRyYYUvjChwcGg7tzkDuf1g8KDMzmSxtbDZD25s5d2PEj2biNxaeR1cz8mwGFfpvRLg9sggTD",
  "key23": "ghdEo3cUBzsLXoKp3rmFVr4Wh7bNaypo2GwBAJHUkkTdEcwQE2GUM1peEZcg2TqeSWneipH7HJwFCNMWtR7Hdfn",
  "key24": "3yso29FuXYLooj568Hz9DY3QaYZbBMoLjJrYrY3KEaYpryEucMFkmqA7NTSi7LyJbXDqEbEEHHZT3oE2g7vKAz6i"
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
