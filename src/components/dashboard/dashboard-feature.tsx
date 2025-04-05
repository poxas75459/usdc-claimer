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
    "67jFXmLiaigQ3NRcUDs3VPn2FewGebpGWdBvUEW9QYC3XEvCybuvrC644Pyima8jxWR7or9Zd1WbPkw7cTnh8Tw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5922N1WKT7nJgXFzMnzQhakUmodnRuVMFEMZioHkfbAUKrJMzswFCbCXySvjToMNq1cXCoG3GD4ZQU4DLhmXNFYm",
  "key1": "3LpFqPoEKGst5wS48Jg5utYkfEvmP8R2hv6M5ZjFb6GRQEUoDxfRQ472Sw3v6BRjxjs1k1mihPRCuWNwHQKoc2Mk",
  "key2": "YjWgModWBkrtAweC2mCPAuKhcoNPFwf9zTBCHUTcHtT8j8frAfCmtskq6iN9GfakiS4XjGLeYLtBacUa45nfxaa",
  "key3": "mRdUS4rXCSdMSiZJgEpq2a2V4TMvjw11WFcc6dC9A2q3WGbFj7fhZ5BTN8SAezcZcVsTbfUivpHUJtTYXQgvcS7",
  "key4": "4c67YHu8nqgyG8f3b4yeahPvamwUvkHbjKYBjMeRiuh1uHLKoV1sg4BRJvFVQpokTNnfGcS8hgfB2fUFyg1LSEJZ",
  "key5": "2fqbCg7jJ8chBafpQVzqbHTTKR4Gce2o6g6dqZGfGrbkiegKLbnYz8CDGtYfAeNv4LDkt3sewaomT4VSVRnavA9G",
  "key6": "5ZG5c4hevxC3s46puLth5FTmzCjWAMULHYPA2wxsRppVQV5RNKZiLWk4S3dQpkXcx8oYofR5mCE4wz29iVJJbg9v",
  "key7": "3CZqdVUiTrZm4drJLCjwyp7YEubJNfH7X3gWxLsooBMB94WDNcyVdTcW4XAcbCecKJnbtD2nFZcjSLDZA37GXS2d",
  "key8": "5Dq8aw6G8SRfEQ7amv8CE2ocjsMMeg6FetSWywbMVy9WuyzkPhhBPfRPmB2nxERL2vmHx3ZJHgCyBgVxMzPezNc8",
  "key9": "54LDQSimuKLAr3U7weN981Wec4Um6Hdhhe4M3tC6cT8rDWBWYvhhinZ3V5ZKZ5imokhLoca2ZvHj4AyvCfnY9sGt",
  "key10": "2LVprm1Ts3bJ7eiLk8QRogBxxyxB5oFDhsRZeNjC2N235sSgX5uhaerYxNUaygGq1QuyniL6qoD4Bv74uGUbizpW",
  "key11": "2hLQcU5G7g9paW87NKsgWfLkxt2ZhWyjHYe6MywWmZugoE2yh8h6VGt18HdHCSJNtTFaP7kYhfxJp8ZXPftKJm3H",
  "key12": "4KSo4sFNhUSTpDAhKjqfjq3T1r3FtHz2z64Rfda6Q87vZ5Yo5gZbDaWjHHh6Y6ANy1h1oTM2xETshCErq8snbWHA",
  "key13": "4LWpFRjCWdoA4HZxa9ZgSztivcp377PmfmAkaEMPFZEW7tYmHMutaBzr68S4NihrTCBidwJRUfiLhpZq1gz5TH6e",
  "key14": "26uckLKN6NJAfdGyQ34UQcz6KFgHDV3VxTKSdg76VMp2gVRpxCPNEtV11tCXPbFukdJrERckKMmC41Lugnd87bvD",
  "key15": "22iYzGg16eQRWhDeuoM5w6urxpXoTuSzQ7TwkxWTuy4wXbz1FUahAniaDcVCLweM6XsEb3DRfZHfFeK8ZwpocMTL",
  "key16": "67fu2Yk2eLz98BH3YMGF2bogXd2hScU9dwdRprgj33ejCqv9o91VoZspWi8FeTZvZksKmpRrSpp3HRsZjbt3nPi2",
  "key17": "Cyraz6kptv2HxARLgZE1uU4CFhfE28XBmFwpBC6GxKejPwnfXL2BS4NXBam6dbsstSz5Cjx9wDNJ23mdiWe4yuq",
  "key18": "4xqSQtxzrJzkYeRCPRQ9hgyKTjuaZQhunFpgAYJdJgpiPahSPnZ15tLJ74nvNpGE4g79tee7UGcd9YN8CJDkkshs",
  "key19": "57kpkL6jQvLKNVzjJ6c2yrK9t8QHgPwMsX8Xiu4P779RgMKmzpgS8CCjq6scS5MPVeSioE6LKdJrqnTdJoehwKuH",
  "key20": "3YmU56JwvjasDubNXEv2zzny4GAYgrea4pNnW53qbZgUM32ooCDLw1e7K6cUNFeACvhysDyqma21JSb3FfujaMC8",
  "key21": "4xCZnnbG1b1wj4vQ4y7Fk1QrpiF1ruXsiQBpb5z2TpHCirB7q3tfCx4Y5MyYvHTUdGpRQNH8bKAwcCjoCiXjKjeh",
  "key22": "3ME8Pw44PqHqx5QCLpothZzTpku2XuSaEAi1YCwVxzaRQPSz4cru2e1Js9BaYQ6WCSNLA2fw8vwA15Xe49CkSGCE",
  "key23": "2AmJdyrmqTgEdbLeUoKGxmF773SsgV1N9GfLgkjsE29gLARHci2XnDNW2fVRNtqnEKAXq7k3wYkZ4pjMTJ28CGt6",
  "key24": "ivdUhhbaU8xPegXmowHf2xdFZsJHMQoQp8jd9pjNNZ5C7z9A9ZbSP7qGHfGRzeHArHSSTAs5U9x7mM12ZUzjswx",
  "key25": "4L5nQ2pJjAuFFthEtM3LJQyuPQUvwHCmUwZfSe53Un6zqGBrDuFKXDUR4ZvfmhiLA1HZxc78ykmBiJ7X9EqN2eb4"
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
