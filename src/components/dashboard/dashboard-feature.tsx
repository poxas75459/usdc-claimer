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
    "5jQNaUc71awjmWidctUbKBpUeWEgvqxr6MH4vGjrXEyovQrgGBiRsXFVsdYiJzcbDsQUAjavB91RCoFBSow7kEaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yz6zCRP6wggRePy4abQnXxrzTZHHFKEnF1XdR2fu8D3fuKvJTU7aRbJ41DjfbVWKQSPUsDQF2gn7T8kqEgr7d1n",
  "key1": "3Zf21yNp24DgjUZhn6aiHBPzEGdkz3DKTc7FZkdbn7s7Frtn87YhdSciA6QSgceim1WkmdWLsBiALSHZyXA7XvsB",
  "key2": "dryLfyYVE9kWihdeWUFy8c1G51X2Q6ZguNjZDSwDMRJ4symT9zPSx5fLRDoNa8FCauhDQdCojQzC1HijYymkZnC",
  "key3": "3BRWJMa27vZHqVhS2Ky1Wz4Ve9MHDf1sjE5F2JCuzFoynBvkkeze6MBitv41RAx56UkAth8NcF79PrmbHYwVYEF7",
  "key4": "5we52CaAti3uY12Z7nASxWPvqFCDKw8FPU4pYfxpGxy6pTuSZpKPX9RQKN84cKmccoDo22fL6Sczfs68qbknQVbM",
  "key5": "2cdkWWwEqdPeAyiaR92DArW6ctWCGHSLqo5HfX3yS74ZJQk4P9HsMJf1Jpr7hkutrq2zvpPM15a7zj2Tqh37VUtB",
  "key6": "5QT3Q1ZjG2Qr7PoMW2qaphuMtZjhCoxbvkzXEh8JrQnzkrDPfmtyGy4ANKU7CHqgtyzDXrgkWxsK4r3VuUJWjRw5",
  "key7": "3ALJ9TerEpEHo4geK8UnYPMg2gRxvLqDv4TFRzsx8aGwW8awgmb1Gxok89aLHq78SEhemuRySJfFb21gyCgUuAce",
  "key8": "3CMC8caEM7KKrR22aYQasBRYpQxeiszfuXkArwxNfPcLbKfyNrEpUhcaAEJTJRt3uFeEptgHEto852J7Kpe8JeU2",
  "key9": "5W3dhRUjpe8TRgfSPtHj4sKtqgtrzXWWtT2h5eSeJoj2hU3RH1Q8eP84trea7ALe7hZLdRN1fjgY6uX7CVWDYd5N",
  "key10": "zAVNE865tiyxyNBqri5Nb7YGB2rRHcC1KAwbjVBhraGm2DQRf8WjA5PMwMoE8eqiZHNJ8e55JC6goUpXEpVo337",
  "key11": "2XEkg5f5kYir7vGMWCfZP4dHHYDGkAjgZi4S68sqWkwoSTPR8mBcLvWXMEbf3ye2ULVLjwkZ5mnRnKiAmp5UUvg5",
  "key12": "2Ry3AtrWqDbdX96gtj1VJotCFN71pa2ca2HrLQfF56PKEHeD1R16UjRJtLtXD6gLRgno8dgio9h177z3mxs5s3ko",
  "key13": "39XLAwmcfXfggHFGT4aVSvBw164SwNmHbFNUwsi3YUvhj71jmfQoEPCaQRqKQGNy2mGDmuaaSyvj9bET8r1iWQD3",
  "key14": "22UoBTPEahgqRh7XrRx4eU2fjkYZSaA1B5EaG5KLPSJGS3gioaKY5i1sDTmydS7EDh1Lg8jq4vtaGiz576rcTnfm",
  "key15": "3G4GXe5Y6eSJEnUnUhw4uTvuwEKsq5rT5ZL8mZWSqe3NEqU1Di4fxjbrQirNBn9cNCtot17z73xryxnurEdDwWya",
  "key16": "fmoML6bB3DtghwsdP2ZyzZ9A5UGWitPbWecTdmRSf73npJ1a4HZY3WhDfQh2xE2BttN9dr3B5uAyUSqNMJRVqaB",
  "key17": "6xCWrnnDbZXoPxYzKC1eus5uJfkJUEr2X9u1QavyS6zqoQzMbac7ZHD4SL2tvNMKKJ7xgoPBP7qXXYFdLawr45S",
  "key18": "3qwZEU4h8AEMzsqFp3AoARfDLAH7ph5MgfxhQPq4HgQNTfDkwNwjk89oBVHzxrLUMgzACp6cY4xhzyfDiYnopiXQ",
  "key19": "4MP3oDDWfoFF2orqZWoWo3EKoXBxJphghpFzQp2sTapG29ie1zFgYrDJGKRgRGihjQgaBscJuWV8yD4VRExKAzDJ",
  "key20": "pkdExTpXXPKpdz1MrGBuNZsL6fh1kodtEPbbPLNHJXAp23Uwpwk9yE9LTV7occx7FcadsF5rzBcWP2XuMdq833B",
  "key21": "tTtaVGLgAnqdRF7H9Ae6ZVr6CFUqsebHscwh97fa4q1LeSdQfcR6ajaPovQVFA2SBkFJBuvTZUpvNzFw73ZXYRh",
  "key22": "5ySnSSYFpsZmN1jFsMXAU72gWRHtafCyHKbx9ZzHauhtBJ5WTkvVUaxLLytXjCdXWxrCfVeoYNoaGcjXk8fCaxmB",
  "key23": "3hSfdMRZR5ehb7PWZSBZR2jYDrgybKohEirSsHwvL1cEjd9VsVKVBjMZXt7N8WMYQR7CQTr4Txgo1StXMeMFoyYH",
  "key24": "NjqbadRFFF45PpAmDSCXP6Gmcsmh6QiHrbzpLjeFsvodtKCyv5W5hWkfG1sb3sU3DnZCV6TVntp3RRj9dQ27X96",
  "key25": "3jW1MFCSRphdHGxamAPPWmvFFxDRxz3dYko3Aoev4aLxHQWU3XD8z7PhxY7WjmGMRZxEBng7x3pMLbGBFD4MFiB"
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
