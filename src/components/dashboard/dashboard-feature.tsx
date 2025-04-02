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
    "nhMV8Vw2buGBpD3BDwjXihdyjq4kDfwdErova3FF7tGrmMMRYt6SpYBb1fJvGvjritADkRuAaAHWr8AVCYjnLXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2agvtXM8g3PyJNZnKyefgaiSxcLX5s9CQj8rxjg7oxkYtD6NPMjSRM5zcCP1KD3YfkdrYWw6rTsJoUoGKeDgJ9hh",
  "key1": "3QiTygwxBHpEYnwU1GybDXUfBmszQWsBy34VjG9LSv1XvAuWL2VsaBhxpmH3rYuj6xt3DbzXySoauDCu54hvU1sC",
  "key2": "653cTYwGtDRCRhnD3Wg5NYW1iNUW2WgTEgRkzgNADXaH9p23bVrCwq1gmnbmFkV8YmxTsiTod8JH6ibYpry9tAUz",
  "key3": "3vF51zQvXf1vVkSp68uwUyDjjque37ZDnHEAEjWsRmP2U5ApmyDnAiaebAZMH3MFeDemgrCTkDhGZEWuETTGQmXN",
  "key4": "2A6wYotcFxQgi1t3MKNRC38eni2WAr8Qum1ZQCMtMTG7Led5mfNeSiZiDjHyorVZcsbBYB9bPwjhQCd2Sk5s9zk6",
  "key5": "3hGagfJbHWb6Ha693xDWoWq34F7V3iGzLLyM2egtjaamDRPj4eWnkpj5sbYCKy7k5w8Bs7DUq5DSUPqyXk4Y26KB",
  "key6": "3bLQgMV2zNooLeC26QGd4EXmCawgRroM42dvNX16VwD5Bpb9vqmRYstRupJhWcX5Yc2HvFGbZVnmaZBf9n53gcKh",
  "key7": "vgcZyjGEreSUccyvtGK57LN97jE847HUA5HM5ZkvZL8vgr5pU8HyUABDT3YC3pwTNS92ih3GqMiKts2CXWZS5Bi",
  "key8": "35HpzU3vrgRqked29qeK2sMNgZ1QXVwYjP4c95a1cojc2MP1t79gmL9CTkp6LNCg434JjfPGVg3nAqz28T7o6Pmc",
  "key9": "2T9U7k8ZmFk1SWZW7CeJp4vWNMo2hBa3uS8fWQgn6VffRcNQPTZANuGKrRZqU7S8epUpVJRbZ2i4cxmuohWpXXrQ",
  "key10": "4shBF5fWgfrgfaWt7itzQcpjwbkXXgXFxFsAKqK16kYn5HNcbTSxDdUtH6vr6fTHpoMdYZVJsMveBGAJi7FKRxFF",
  "key11": "3UNGNRqW3jDo77VN1RiqXw2K1uyba1VQKgg2pM5T63ij4pnPTSN2CuuQe2skinKa6z8k8GtAqz7wRf9noF5axm1R",
  "key12": "5x2sXzTXyvwHtqxJ64xUHVPpeZ7Uj8dYfAnrDqU5oWTDJ1dD7iX3tw43Bv3jzzqt84QWd33nRki7YK5AyjFecHur",
  "key13": "4EQDYvkvqPBHL45oJjccPLVVUy6jeeM9f4PVcEnztgVFHnNN1KcpXBGjfi8SBeR3i1WzwskKaUCF9BSfnT4S46wP",
  "key14": "5xQHxLoKyVGSehtRY2xs2avieEaFukJR2diYeGyhHwfyrHwF4XSUTVqujSnQLKuQg8DjJh4wQ7hRxserNMvCTikn",
  "key15": "5rcP2gR58hddWeGQGA6Kqg2kTSER6rutkJPWocAECM4Ep7pwcN7fEH4uDGq3UdBmNeVjM3B7jwiJybqbEN3PLyqH",
  "key16": "4AWVEFGiJM9dnRVvXJZPj4xtJjcwFRsyjbrUQrLL81ZbaduzSk9M5fy63dA6TmLRTMdhk3F7XpmTyJU1wT1nnKDA",
  "key17": "sSWFaVUmikka3ysHBBeQq5nj2K96a5zjeVvj2LCNQJNLg2hGtxdDqyA3cXCCYUWSNqHvMYMrRoiXW6aFUg6np1Q",
  "key18": "42xUmP8kBNvfkQSsFynNcvxUwJbsR34UxNMopFmqJy6nZiVCZhFBWf25bhRF91tLMcxGP6PnSJWcyDj4WEfUjp3u",
  "key19": "4c2DhKk2jp3SPJ57t8T5C2GcgpqigHmzkoiK4XUYuQLBHNPcKMkwxcP1jUka2pZuh6Ki4FWJPZ2s6bpd5Q1qRBsR",
  "key20": "3xgSEa5w3vRQGdjhReVy5oMQ3FC1gKSS1uceaCJWowvt3GJMQH6C7kXy7ZwjXj8Yr368TUmsozBYrd6cVfKRhbhj",
  "key21": "5waQjsybAX8c4CjbKbgqSGpaPmVTu57XGC6WVFQ55jdYEcYMHCHhj3jp5GM53Uw9hhupQgoL4auti1U5p5gXWVGc",
  "key22": "2S4MEryGoeCSDdFJGXZFkdFeATDeLenm3u1uvjoH5noKHotRk1UPiLpgkfta29raSSszn1W7U8nvLzEY5EqLDgT",
  "key23": "3PJp2VMqE79QFETtpzLyS3i2r8GVHfhPSnLKKk4uu9MBASJzDmkb8J4kRZaTGV3ynmbJQobRoK4EdfaWYa6r81bA",
  "key24": "5HM4hkWqgFMouvs9cub6Kwz1N9Ugir1c6HvCF89mB2CYYfyA1QDgBRoqChSPbriejj9NDJdXCvcHy8AuXX8EPYzY",
  "key25": "mvU9XcnZRuLsQAXXiQt9gDSnrC18PNeS4LK9CYY5TMjhqt5qRqgtzHjDtDSSLgBq3bQpdPEoaqCeVGjpXTjqAQQ",
  "key26": "4aTRxwykG7EM9hfu47SmA9h1AkXet3e9VswdqoxojGCHi68rpa7vmaWdg5dAiRx3sp1pCz2mAWy1yBo4bEAJVVp8",
  "key27": "36wGoJaT734uS5dTjv7fCvrJdgm1B6DkSU7juVgCd5jv6xpyYUJPoZUgAm1iWGS4CGTLJ38SJa1aZ3jP3v9GgyGL",
  "key28": "3B5LtR6fX2X8qTGpNNX7qdtDUNXZcK5eWP3AsvZBpyezav8FeUXQfDgQ9xAwZKTFYRPboB96HRv4wXEtt9j4RHU4"
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
