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
    "eRcxwuByiMhyvJewxMnoRWv7tdmpkECj3Mu7Pad63FJFL4Y7qGvuLMSmB1sGGyHuqCeFmRH4A3x32w3EAh2J5cH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PxAot66Ae8M5gxGNiEaTpHZpU3jrJh7K1cU8mzc9W2ZhMz172WqB5N5Rc7fdex9ft1sPaAgbFx9Yq3bqTwnnQzX",
  "key1": "23zFZ44sGhyPmTDDfHxoEBwudBbw1M66Bdx1m2A6c5i19DNkB8pAiaaxqqkXg4m5j9QjfyEfCTNpL4xnEsAvGr3K",
  "key2": "4Y4wEPFjy6D79wRM278PJRTPn9ZxBPWx8W18mjoijwDxNfc4eHnUtf44A9L1yDuQ2PStegXnsmDPT3JimrBcY81M",
  "key3": "2kRGPC9SywEFR8gBdgs82HDnBu9pQ8PJGFmzsnkn6yWYiJRDe2nEx8kBYQ1zkQ79VygU5RLrArx9MXiRpR4jbTPA",
  "key4": "5UM6nUNQc4Jv7AqMfoRAqV9SjCigi4sYkjh9UJDHfX2Kfp6qK6JRGqRxs7d8eejyNhK5ZWrctqjd3kkTUkccajQi",
  "key5": "5hsukgWg76JRdBrsgd6XMf5cXfqa5sDxQ1o7PbM25fuGeJd6dRAQCEN4UJqWiUBhPhuYbUbNd898QkDBwSST8evU",
  "key6": "25TMsJh8aqDKasVz2uNunSUxYTbDBKt7Qh2bg5Lh1DRqxznPa3tZFqSh7nPCmsQCfyjP6piWFuzFmf54qQG7mqvb",
  "key7": "4ZnujSFaL5VUYep14AdAGSbqyamupA5UiSgvKRk24szDvpR4wcQUNNPJuN1rHdHYtAHUgQoXX7z35UFV54F5mFRX",
  "key8": "2VMJGo57mEfXE63YH2trodFQqq65cdapTqUYZWBWtMtTrrMCxYGD38Hsu7PGBMyTdLG4Buta3cvrfasZ4CrwqDVt",
  "key9": "2EPQypCYGotd5odb1kitFRNzrA1fCJgTjRUSAR5EL4ykEpEK8zNArJdfbmHxdwJYg3sYigv9XrLdpJdreHmeMG6T",
  "key10": "3FPSaJUWFUbJXvP3hP5zv5DQxixPr2dTq8UNJ8Zi9MZtZyGgb5CzjvJW6iDmmr8wWbf11EYz8Y7biF4R7sqZx78P",
  "key11": "2go2HnXa3ewyE71ozH3LyY5tAcovEQUj6pWjDPtf3fs56cFBi9BCvW2NqBY8D8N1A6eRf1m3kbhgotjzAXdjJGgY",
  "key12": "64GnTLt21mq1Q7kXRKKW8FHSVq8z1SsQqWjA8c1F8oHKmfCKKxqH5BYfjc1ze82WFyiFmpGFSpSNDkJov1zXWu6U",
  "key13": "tWL9ZGupQ1m4HaodrjB2y9XYa8KUr6Xcsbt6nk34mSeftkzYSVBZwPyLDpR9vgsDPJbuSM5BLDaS9jSf92xaQ3i",
  "key14": "5yuM3VXmwikvuyoQ78Qy9HpvZD9vDpmHBzsyjqiiQhGXn3QsSnocsEBFHkHNiVXPyRJJZBj2cbA5sWgHVomJBLqG",
  "key15": "2enExgoKA5uLfhoW1zQfXygaCKM2o76CCzeQyzh177g4gDqqtvdHb7Sq8QkJBEnvBQzBAfivt1UuaRnSZDJa6shP",
  "key16": "4vdreNgoWpK8hY8kNTJ3mtPU2yB6k2bQcX5Ske1gRCu3Z5DmnY4uFADQN9pQ8Qckob3APLp2byQWktCWDkH7uwqU",
  "key17": "22nUDaHGFNeKNTsxCimJgfT6MoHe2dF7HzvdhGKvgAFcScbuxkrJkeQMSaLBoH252ZB3MWrHp3evL8z32NQyFDMs",
  "key18": "4UVnKbgBKvjsVXogAvmwXXv1yZT3Y69YY2dXaNzPbfakJvxMR4zbFjZNS4VxQJpayDSm4YxygjYQ7knkc4vPzR8Y",
  "key19": "2jo892MgRZeUvdTFW1MGs7KGrAyQRYzsGiTJgRp8Mm7hDPMsRXBjtdc6Zv6XUbAcfoxVUZibqCfHe3GFwCr4qFBx",
  "key20": "48YaAgW26jcnH6n1TDmfotZzz85L9o8acmZYii89fBqUG191GKZStwsjfybFkeiFXkm1gcEjX4pt8EhhgFfE1ef6",
  "key21": "5CUhZQDaLVeW8TVQpjBxP7xwhXJfq5wbedny7MLnpUqaDY79fp5ANbrtq4oLsn9hUCP5EkeMTuCApit2ee3RZ9Un",
  "key22": "FXUVrxXDqKBC93qbDoyV1XCLYnaFJmiAvUrpp56mKjXd9m3HQuMPxEAfok41w97Bzdyvjo33PtcVYsmEBdAva3p",
  "key23": "VAZXgN5Ra3mwLf74ffBrTZLFVUmi57cRjs1Ru68CSFTxcuJqEU7K1tfsMuw2CXuT6uzFXJ5eapsPh7cNg1YVYwE",
  "key24": "46LD7GoiwEfMpPoCnQgRvgRkbCcDnm19PokcM5XrQfVWWF12wndzfgYwcV6EroPEgSzgrUgE27oGbHS7iBYoikqS",
  "key25": "5bwHjx4jYccvXFMgxS1We26NMLdBkJJBmxQtV9U9ikZwigfm2iAx5cgNuwAQoJsxXe7ELX8SUC3qiuyYLKwMBFjs",
  "key26": "5zJ336J2DcT6rY7KEeWGvnupSk5LFrfBuYpHw2zMC1WvkDaMHxJwjfxYTP54U3QCV6NHNMrhReQ9JEHD9uYnj4Q5",
  "key27": "2R1Qeso7o7CMeLzSeih3otSYXA8LjeUsknn5s9RYeFYXR7ABn7SR1a6CzrLNvqx9Vt4gjdSD9z9hDdz5PKmgVQ4g",
  "key28": "ZQiER3CvBK5VwmmJ6XfSeiW3kBVfWwM8ZAw5BsMvsdFrQEAYJojKSR7zxzWxQP3UJkVrZQdKYJNopC9vu4sydUs",
  "key29": "ZqScrG6dV5m5QFEjYmjx996hCV8YuJBTN4PAcfvgGUAJqjuLcNiDY1YcLiu9fjFkePpxs1saTpsdyCATfZdT6So",
  "key30": "28JriBy4C2Tbqa2e9oZKKujm4NruuEAu43gqXwwhV7zyiyB8njAfCs3x1ThpoWDg972QoNsSnV5CaZq1aFoQUgEu",
  "key31": "CC2JEkT64tMptXngpFrAQm2Rffwe2KvGYRsYeLGEdCQhzAezST5YHCAe4CJcnACrNKX95FPjPyAs3G4cskG3Vfr",
  "key32": "4SBBNjjXT8ypynwK9T7wzoxq7rkEshR3jvdEZ3LCR7EfgVqkbTBcEwv8ocLK1j7xkhd3V63UAV6FmTeWJK8Y17kP",
  "key33": "2ifxjDPpKWaGedBVbsgdE6p63xpb3DntAYvCwnA1hnfgPJugpsgkNKcEytSsiXNmVS5bLYE73p5uQLBFyP9fZkVC",
  "key34": "2EU8rpJWfmsTEDPLEFQeb4f9AtiLnMi2bekv9NTV53PwucGQuBGADSu1rkNBAduYbRg423RGTCr7tzsgXbJ1oTPj",
  "key35": "2KookzuUuNvDSkJMzzYeW4bkLP92XWKv7wF4fA1n45hFyLBFdDW78Pi7ZLUHQDxpbejA67cHWgwoK351ubYsfLZw",
  "key36": "3TiHz99qXcvQQhxfUWyFFVFNurLDDddTnFqmx8JNNDPyBs2dYLR8bUv5M3mBzRYn4hhhHzcfiX79CXF2iMCik5xT",
  "key37": "757dDdLjBBzw3Vp51WgfxmXEjwDaSKoJV5w3SK876VruCAreFYVWzdYtguwaqrGD78LKMK3sKbba9RBLTJ2Z9xP",
  "key38": "4gjViGpV1Fki6khSN5nj34khtejfaZyp3dfV5mW5pphbqgiWYaKsKBvR1w1zkUivbAtYnSSfuuSeKaxiSrxJoEDC",
  "key39": "5aLeC4XMVX7VG8WNNNF7f9CUUGXevEGRRtk5GetmRmrMaG8c9wMSL7qdscfT123d7LyER2mHk8RMFR28TiQkg8Pk",
  "key40": "5tamEMcozMGKbWG2NJMaMFQn8BxZKC7kcs98do7ipBLw38XnDwsNAYCnDMxLrnJ3hcC3NqGPo1s6y71LjEGwiZuV"
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
