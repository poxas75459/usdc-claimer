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
    "2rkZnY2ynZwkzoM5cum9ChRSboAWs75zTTDHaQFB8pfqQ3QMNfZvCcJBy7icZXzZzM9ANt48iu8ojf8GR2HUraAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B2fPVr6o6341pX1XDF1BYsgCh4VVefoE8LsnZ2h3FRQqrTy3XaF9HLTexRzff3A2Aq5oLDGkX4itMeaaUvEzuUT",
  "key1": "5LM8hFxkRtazW7g2rzSj7k2N2z1EfizVynHCXBqjYeqWnjCeEC15DpmuhVbyfE9WMrSjXQDMbp47LkvVFjtT3ugS",
  "key2": "o37btzUM1KxyBpAovm7p2iuQ1LRKgbwqJzaiDVeSTY6xM1TXYrrJyH2zqizCQo7rYQkDwzhRz5T487VhajGLxSE",
  "key3": "5Gn923FRfc8DUUN7zu2S6RannAv4voADteNKQp6jvD8PGpGYS9UdzDXQLSgrgyabMp1QsZeG1pQryJ3xdswnxicw",
  "key4": "4w8qNrhUHCS1cDWv9D46FrGajtDbWvnnvwsd4kDbsQAhx3ccevySqyTYqa51qpaEx52WRQeWroZE75i9P6jynrSd",
  "key5": "3kiQ4mPSsi8n7GTM8z3WREpsy9qZ29hnS3FqMoE667QPoxG7bChz8TTr3J5y7a9oRXb5Zywk1NePW1JE9wi2PG5K",
  "key6": "LVmbW1dJf9v565T2MEKnoGLZqyBWHffjCauYCME2Qr724VgCtTaAUo29CpJuAwMxpavGc7cZGeaqAK75rMDpNqT",
  "key7": "2DahrFtWDGARp3yGtNYo7UG11aTC4a33WEtrsYvvJHCXdWRQkbdmFaKZDSP4q9idnsHmGXX4pA5vCE9hw8wpzrzn",
  "key8": "2LGKKP4LZW7gBVQVKYUL7hF5tWNcTVsqR8bF6yfHndprqzDJ6br9nDpGGvtsnsMDjcd9pmrPunJj12dzDsrgv8xs",
  "key9": "2bZTT2Tqqh363TfNPEknJNzUqtSAszfoaJ6JQrfU6fXxvXLtMr9jdJgNGkvW7yUFE6qBHGBU8GY8dHYHG8iLZF8V",
  "key10": "5Ex1CtikrY9DddQTrvo2Ho7ctJN64z2aQgpvyUQMXGXGXh3dsGuo5VD4AC4w9gWPEPNx3pyuHsEEeecJ5PYqYaTU",
  "key11": "3gobUsSgw5TjdpL6U6FpBaJWqG8a2qzrosECBUtrSf59dSWWNMiYP3GgATiuFCqP1PSSV9YmCBd3AgHsB8br21wY",
  "key12": "2kUBR5tk7HoEJ2HNXoyHiffuh65UZhaGSnCj9UDRLy9FeKBDp8AJFmDj6wGKm6w2G4TDVGY2KTYP7CPjADp742Z8",
  "key13": "2SCmXiJQ6s4ie9mvasv1amQeGycc4iHefWwZMut6NUMeSU5m476ehM2ARNDPtkSRB28gA3WutDQasajHaaVhPNeC",
  "key14": "3Ym54mMrsULwKABfwzpfMTFhid5DDN5KBYA28mCEekaC2qqJPW275FcBD8VSKFURTidXsfqiGwgCoc8RRybLP3aT",
  "key15": "2cWog8n2HHnszuYo8ECfmqmbVauUVyweGS3KFtXFyUJAudMybaJ7CEkzJ7ukKt4qDn5XyGVxzWnDuAUD7d8wSZfS",
  "key16": "2DUaLm9qeQcacLUegCiU8dXoK4cPsxVhBx3jgcMtvyovFzL5rKeSnJMZbFGCEhe2H9qZJs3Cs37HrEkThCqFHNoG",
  "key17": "5ABY9d173vewCdo9WrMwYkfFN9WjZXAqZSpBrQyP3vLVSUJaKQ9w5YunJr6TNHwLhvieJpsfzVvcTBYVjqcfHFJR",
  "key18": "2s91KPuE48VgLusxuBrKpggtsQEh3oXH9HbuGhi3hHDdPJN4Z63tWy11zvm4XNmBAYknme7Nu3o6yk3ULmc5H9fx",
  "key19": "4d2SEczcGaspeCPx24EioWThqfmugV9Syw7sSMn28EgNDZciMK1kc25iXbGXqe3VQLWPUUPBUS8cW4QME8WXKHST",
  "key20": "4LghA9vMkwT85SNAc6X4b8H2kzQK5gNswNb8vAJXZ4esYt7wTWDGEvdGhnCSUWSo1MTNNbtZxTRwYuJF7G2sqT9z",
  "key21": "4xGAnixUuoRMknm3Y2bFqU4CBmk29d8DbfdGEPZez87txEY8aPBrvyBqsnKhbvQfEqD5KX6jV4UfPQJFwv5ZgBrP",
  "key22": "JgGmPS5Bkw5yuqgrxJdYxyCr5vaBQH9GvVJ3iaAiaHPQtte3H1KHEM1T9vNsvHkQKnxMSYWZn8PZwpCxhwUW2bL",
  "key23": "4nSFJ5jVwqayx1TuJfsenAY6Sj2M6cgnLNZwQLztCv65VgoK9kSPZb4Psv3FifzbjXoDsA5G4vLsHSQ2gmW7niMo",
  "key24": "5R2Qc5NfQRAVqqbXE2WaPvtc3Xu4TDo3jU4Q14ysCrtcxvtxunUC5mHDaL79LXeAAXTBcVKH8TDnvpfc38RiKH5o",
  "key25": "2FdiJ7LwwZrfGkxoAN1Vr1LekMm9oZEzdveA9XDyV1vDMww35rrfW28ugbfF7m3PAud1Mm9bXLUVVpXaXrVW6gmg",
  "key26": "5Qm89SNCmozc8sLfbGB5t4fzf3jY2vNsLHXJWgkAZ1cVqKqLxc4YCnYkBFyag1yoqxzYeLAZ5bHb97y3AkWX1TBU",
  "key27": "5KccsRR4YJy863Tq8isD2fZFDyGaPNbdtrUQ1Up9x27B5UFbcX3VWN9tp66nSBhphWy1pRoxKUk1UZS3WTzx317D"
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
