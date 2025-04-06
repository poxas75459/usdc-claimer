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
    "o9JvSiPzsV3oRhJeEuznfsSHrfmRVaJT6mfneR7sEvRMhEQjnBaiM1WiY8YnEai9E5ADqgd68isi4Rb1EA96fft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fFqPbLPV8hpjmnnXJpgAu2LJ3DtkmiGJh4Zz5NDRcmH3dWgdRnq7eEDGmCCCct3tfJP9QFoKmoWEdqkRFmJHpW3",
  "key1": "5L4RZ9FXNcZqg9vPnfzT7KUNrKC3seYb13r4GWGa3GS3WMEjSjqtwqsyDped65ghvn3ofXwsNX9EkgfmJNDauscn",
  "key2": "3DubxJjBFM8fMNvGZztKavUmMTNykPwsppTACiKD1tLuno4kUZQdEgSiwbpQQYKucrGNFSwZzx5JQb2AAy4JZS6s",
  "key3": "5wCTzS4XQbSD1BBzAXDGGmU4y2gJ3uQodm2radXcfVWYD8CpofENdPt5eUvMVPRZ9AafAi5nQJmsoLTvv3zeH9nV",
  "key4": "fcssizQUBVdhWg4cC1q3fCgTxyF415YAdFTte9EzJYCBCWbERK953uJCnTgYzVv4AzLhtdUdU1gtQLhmyiDYGS1",
  "key5": "3b3UBYgKehy9xLh3huV3DcvUaT1XAqs8JdsJJ7N88UiyBRgvhBbwDBjHEgY1R3ayHSGoPMZ27Evy3sDoMKoGBbLd",
  "key6": "T8R2WE4ycdxhM5djtCqsuDmsxwN1DoCnqpqz4VkrCXB3w28RnQBcFqm7zCPUGuwzqFu56U35pYwG9xQFsLoUpX9",
  "key7": "4Jy4gQjd8ngkRcGLEmVecZ1o5ei3UucuRGctYp1g8WEo8Vfbff2aBjUCkkHZCaYuRCPUJZyKAEEkx1ZFYJB2Vsq9",
  "key8": "4ZQHBPssMf3jNtPgoad6ff5FwBeFqZbD9i7LtgyDMchL7k494kz1zoSyKdYQtLELHz6H3YCE8ob17istSxDpKffJ",
  "key9": "2Ae1rfPANrMdHrjJ6wbcePfdRsoerKakdwMMc77rp7Zn3pkwW4BGTmeVXHUC2UPeEW3WED5rH4jNoZNuajdZ6xue",
  "key10": "4z2dc4UfehC4LZPdLbtkw4Leigtqa16ZyF5yReBGsaKXyk46jo3Nt9yj62g4y7F5FhX585tWFRNqdxrJWnTAb7o7",
  "key11": "5ojPtPTsmmTztePFy2SuvD8SJE5wBWCLBCWUJvMi2kwdp6HmXUs6iRFkfpQgBU7aZKZqNLQjxm4Mbum1Ugsu2a9g",
  "key12": "3PSw9GU4VbjBQheYnf8g8M9gzcVKz9pH9Fw5fTjK4bbr63H6UP7ZwmM4YjvxJLP6LiSxbXwAWCWbmXWYi9TeBNHW",
  "key13": "3kHh33kjHXgNVVp2uXyh15R1Rd4iGjNyByoxEQ1kCx72fwwhCSpgGXXMQGWg4192FgbvHctSrir4fscbFGYQF5ny",
  "key14": "GMtbongkqLroFLkfibzAGAxkxGCHVTzM1kK9iLf8CgExv38JtZw6kFz1JfFKGCoR9n49nHwHuQKdazKNbzkk67o",
  "key15": "58SM7RL9QwAFedRGT3bwyM5Ns399gFH7HoMrZPB9dKTQ7gqnn5zXGpH8Rxxq2b2hT6wHQBAuGSSzW7wmEhFP4ApC",
  "key16": "28pC2iUzjh1Tn8j9ibtmjprvXtxpnLdSxDiS4ZvxAq56kdXoDYNFSjXxT6is1zvNTJ8KmmJJsJgQDAkHUgRe3hxx",
  "key17": "4x1h6pZg9AQuHQRPzwqVqPmcCNdeJefEXtNtvM2RBTSahuu3N7HJQg2fGLXUfesjPPDczVujsM4xxx8bHb1BGUX4",
  "key18": "4KBo9Q2XH82aXwQueHtWhEKG7WQhDchW2Yb1tpXWUiVY1n37SDVNrFhiuybz9Fcn8uF2MaZAd3wrCWUg2CQavGRg",
  "key19": "3RJhL1oJMi7wccpAqLdiE3Ln6sYqoLmphK8ZByw1rWpUy1c6KDsBEx53Tn3MTNpYFRJXY9hJzebNAAoLDMCGFDf2",
  "key20": "5y3wGnL8fBuHQqz46FWQfNzkdQpnWYQXyycVTdgJsX3dgxnx2GpvWPbNX4i26HmKQyWhD4VpWs2TcmxqRiwEyZyF",
  "key21": "4aW2kR1dECSaR8ZiXJENtxcxFxosZePAHRHRjZxVqWMPYZgx6w2n6ZSELsNzrLaiu2L6UkBbYG6dih2rViyuqbq4",
  "key22": "4GdHsK8ZagfTgEs14NANq1a7CEyxTprzgNjUaHxuLSiUUXMEtDH6toK5bWv8WAHpJjtjDgQsDcPnskMXmev6stbh",
  "key23": "QDcgRBTrhmemziHDaAFqK8C9K2N4jaagfgZy9kotGZcBx1LZMZ4dBjEdNjV8WX1JFLeWsMtqBCa3zEExxboxsBb",
  "key24": "4JYTxGDz6Up4wDSV5HSsAhEmzgpSrQzA2c68SuvTFKBXeYriLTnmANtbVk428aLUoJSCr2kaGGHrt6gMy3u5cbYM"
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
