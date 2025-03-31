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
    "3sWhNbyW4DZ7Cwpx9FqKhBAfyY6rTdKqB1vo9eWdPoNnCkYLifkRij9TvteXXKwxJDryL83FMB6C4Z66inD3cKUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wdyRbrKWNbqr5T9CY5k1bT7fHakDAWL1hMdSzEa4y51SjYfYj781DNWSrUDsXvNncAdTk9byPdXJGrmQAcP5M82",
  "key1": "tf3R8fnodnTHmFFhvodRVR2nEc7B3bFbQ23wz2pvhJ5UVxg951rSynPgSTxUuhnqbGFrQ2VKr6E185sBQe118Vq",
  "key2": "4HMyuVuXEo2qPyWSVsLtS6BGBz7iXXzGNLZSZ5pQL28n3BCoeKMJcZVpE5Rt9wHqaRwAaBNHBK2rphBQFHnJKjN6",
  "key3": "2tTXxo6yPCp2F4x6QisR3wKm8oEh24X17XkRcTBBW9FAtSBTxP41WXhbz66JJLwUebqQ9qdqu4apvEELB9KsHFgE",
  "key4": "Tdn37RdKzRUuWyFQfvn6t9B5ZMGfBD1w4vC6ygNPWrEhuwF88zW7FM1TWNLrwzDpsUjGc1KfRvLhbPF5h6WXNrY",
  "key5": "3ZviGyF585E4u5hqUzkzwPjXFdPq4SD3HmCb6yR1835qpkSjj7osQSao5aYQ8s5RbAAqTJd6z1CMpibSpMCBMg7o",
  "key6": "tmqi8u7JjwR4xaropZbJRwYQov7bJHZsDaxaQs5ToXqvU3oLA5fWUa3XgjroeGAxTJkMVf9TR9ErAWkv92VJVfR",
  "key7": "sQQpPNsb9JE4qXv3CACH6ZLG5hbQQ9j81cHcaLRiuyAuEgLDZ6MgW7LPixG99SnsAaN9GmnVwA22wP6cZ6Jitnj",
  "key8": "65EbGvLaExDMQ7vbbT6oazhiHTByadZvAffVAL8u8yf9ayDCtgLgCBNX7VGjrgVEgkacdXtgxn7ywZxGzzNdeipd",
  "key9": "3xhxjCXRVt4tPHowDjoAS7rwrAiRfYQxeyr17heFUeRuJyPSJ6wKcEjyyEUG7AWF5NB3zucQL4ee5dMXBGXqYp8R",
  "key10": "2MMVgas3CUrSvgWrvMiFiQufrHeBaiNqhWZD6HJ5Xu935JejFMWG3JhYUfsBbJu15DYuBHDGzNdKJ919iJz9iAzT",
  "key11": "4kMH1GPSJft3HxDCk563wDfUZrXKqgNmFzgw4byMdaky7B7UPkwBoCXuDdM9hXwxdadu43MdzmGGCb3hZpo9Dv9d",
  "key12": "8UDwszvfyUH2kpk7NSoeNaixZXCN3tpS6DQr6o3Qv5CRsiy2fVfzxWZihqHw7vTfKsxhCanDo5sMPYjprykhP9F",
  "key13": "4QCLy92fqJxkeiKuw2w3NAw6KUPbwSkyaafU76kSsqzFVfrog7o7psksV3mxoQeGchra7cqQkzgzSrUTgfsXJ3jF",
  "key14": "41KuRLxN91w76uE7SeR82MGszSPdkn65c8GG5kqZcKHcD8QGt782nvXWsdJPU8PicpBiJqsgiwbyBhmXB8zbjvkv",
  "key15": "2xtK2yiVKHQBGokcRtu1XgMtsprxqBNSjofPfPwLp5EdTP9xENYUWSwiRvbbqcgYQDamvKSFCSTGCzDEtYAH1d5r",
  "key16": "8o4Cz1DzBb7tnPXUH3szzy8GwZ5XCMdDwcBNYpFr9GAmyLuvgGW4HotrScYqjJGtorpfTJXLD5T55sTxcyhB6vB",
  "key17": "2KM3qKQhApaoU7dH3a2AdVJbsASJWmHSawy4jkhDgHBr6o8w136K9mf9kbenHPS4bDJg3BgBan9KbvncykUB2GAZ",
  "key18": "259XFSV439av7arhbMrL6hz84PT1LAJDT7PYr83AtsPSmsNx5fB3RdFX2FHARNd5pHPWPsew2mLS1wFe4hhHpMi6",
  "key19": "5rrBFhwP7W6tW4jbCutV1BaPJBBJs7A5esQfJHyQfoWFRbiYe4hcZWHh4Uz8ukVqE4cVPRYL2xP83Pqb3xDSaoWg",
  "key20": "3rStr5CKaMam7bqvefsQhiTarTcdj3p1qNGWHUMmxCyb571Xi2ciohC9pshbEKz8kb2Mf9WrE3Wg87BYDRhghtmj",
  "key21": "5QabxYdupy97v1XYtR6k8JMT9m1wZP32sRwWGnMW9bFSNazrcFrJYcYbJmXd1gcHr5BzaA3CifA54eUotcdJarXh",
  "key22": "jCujgbUkdL7hP7Ag64ziE2zJWcWK3AwPht6fx84Kmbi9gFPtpCRmFL2wGm3T4n1DNjsHEgEPVuXhY1S5yWsexy8",
  "key23": "2tcB3yHhoSWcjG2jb6NT8UBCjFuKeeWB4N3LqNkp2THcE8XGLtZZ5gAWKWRjtUA2n7LSvrcjhAnr4xgJ21mhUnXP",
  "key24": "5gVfUE6Cd44Uuv5DgkRRTyKbuEkpFZYAPxKQieRDJV8TyoGK6wSLSoZhvHexPTyAM2U9R2L23HyR5asxpkPHp5Bs",
  "key25": "m7uJBrgAMPTCigjEsGCwc3hjDWEKiyi3bRaw3cVrvHBUJy8A7eaYswZcMjZAv2WQJtVjBuzRk4QT3arMyj3ubby",
  "key26": "2sJjgTmzv6mcZ6mgKdnjWTuBKBCvVYFxb4VLaReNyNgUvwFjDGB7CFqFDzMxDywe8SGvuSeXf2iSzpvgrYrvALbD",
  "key27": "62wZT221HRQtfFiaZHUgCLdXFcJMtEEgDgTS8BcNehv4QkvJQsNrNsJKN7xAHJyMAD2ALio5i2MJF9dY54wJCRXW",
  "key28": "4c3hXir37YViV68Tc6PY6CqicNnCvY9yR9iacs3qBaL2vzHV48dyGEaGpaP5U113UQ674YaxJQvzbcT57N4FEWh9",
  "key29": "5KpPetq5KVxGxRxq6oCkxp5DMEbQrJAo4qksJ4xDueRYT1y9t9PcLsaJu7EHyXyquD57a1ywPLD3YEm6QHLCsCTY",
  "key30": "2bezVpgQ9NDeStfyxj6yKtkgiSQTmvgPEKbD4UCqz1xd9bF9uwyY7NMhC4umg9Q9Zpcyx3MhuN9kPjj2VnA3HJ75",
  "key31": "2ggTxiUpCCxmaUx3PmJay46PTUHGsrdj4BgyCj8fMPiskNGWi7BXknrRLDP3QbJSqe3zcffzdmJGYYQvrRDdQ47t",
  "key32": "2cZ6DEHzVMiFeTSy81DgU8r6nKj2EfNLHDFTizMAnUe3vovBDiya293fe8DdmkXbLnUwv5vYjEB8DU6zfCT2nBzw",
  "key33": "4LtSANPa7GSrbC16oTZoDsRVj2LGfq24vdKfjCTga8XCKCJUzjYx9B3YKHJ4U1rrsJQS6dkeK4DW7ujz3V63EpXE",
  "key34": "aHwV4XcbziVzi3zGJ6d6fwepZAubWJ5JvnURYVCGrD2HxJFwPPV8A1kCMvBMgH2gvuhiYfyZPzcYSnjJK67MqmK",
  "key35": "cVuK3aczrZnyrqhKRCCifbMCJXvwMLk7p1TFmPQgHm99AvV1hiTwtLoGxoxzYkdX6kMZaWjRLWwSXWhxjfxP3G7"
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
