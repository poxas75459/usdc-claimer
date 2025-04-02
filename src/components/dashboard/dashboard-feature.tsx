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
    "5pVCiFqWcBk4ZydzkjGNg4JghyjpR2Rfcmnzy7FLNhUaBdA22tL381ksHwTuZFV3iyZc9wtUjWtzmgzkVNvrC4ig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WSLDVXd5Lc7yiz1zEKTVsfAcqv4DxShiqt3WLwsS6oTa7kaY6CUJDHMrxJ8oB6YjywpEquPZA7iYHQzjpaKT5BT",
  "key1": "i4CF95KcWjB94T6hhpZdY9F3UhxTtduhr5JVwP4a7hZhXwGHGD7xZLrMMtGqF9pJyZQ2iLGVGgcpD6wK66D4Ydo",
  "key2": "35ZbzZKfft86SBH7Mim3oR5qut5capEPL4HZArGFQWDXrgUpMuUHSno8DVbwFxW4KVnJ12ZV565mKWAfK5kSz3e7",
  "key3": "4jRY2Jdj9iVwUvQ6sTMeMWM2t8P5DWxmVvR12Cijr6mKVF264votVUQKxi2tLbrXE7UiP5t4cvomVLp697HiiHwW",
  "key4": "5rp6MrR7ziBRBAzL6sXVp92r2foLc8L6qCQHqzdMRHZxoa8j9NFZHe1CSkWQjcrTqVGkm6gJUPtuZjDbDDodg5vn",
  "key5": "27v5MD3mZFJNsUe3EhLB6gYAbVC7WcM4wVfrvQq1Q9HuFn1hJvW3Me5suCDWjXa7CP3SbJqwrPr8YVG8Thxyn1Gy",
  "key6": "4YbyDFK1AnrsJVEUfkqEAmRFVZodYK5kGc4bpPzRXEbhHKjXsC1RnKbtF4ifpGi6VRG6McnMuiku4G33SCWow8Ss",
  "key7": "4wM3Yy8rcJcFcccFNFUAXbgU4SBTpDViCopfJpEM9drfe82CPZAa9f5g3eVSAuLEtzYLW1cH1nVvBP5FbeeaqjpW",
  "key8": "5pKKXugcuJK3gmshx9E44HUtvNcEhQFtMDCK72y9oaLAyLbcTGjSWzNbfFRw8QbungzxXsDp5XRpGXSiejm76KZq",
  "key9": "Xx8bRUawNu1J2YrbhLQZ4mVZiy8Nmu6wmruAX6gTMauVBTe8sypeZ8hZ76ruMtH1TbcucnjVYcn1FxpCFx9SAPm",
  "key10": "XY3wTKF3KnFPKNcNaJHyHTEdfiV1zP7R1C2sU1k5GzvShr52RxaYhRwDAKHf8KQZE5KzAw6iTi2uxs6vXfBrqbq",
  "key11": "62oTSZwaKTVyBQ5vdMp9j5pkDEzr1NLDAX1w1c7i4xjRUzRShJr49gMyejhMM4Ytj2x3dBxzHHTsXK8oTCmAHxKk",
  "key12": "672Ko5TZW4nDAyWyGzvaYLy44X7f7fVJKRErBrZ4FwM66QLGEpwM4TUN3hgbsQm9s6hmcRAN3sNDeQME8cAYCMWD",
  "key13": "22aMGGKQgLvbGuBKc3ALZRHz4ufzGbNAnBpPxLvRBGcKZz9paNr46DJNN7gcb3MMjanqA5mMayZDJu5rfCXKoCge",
  "key14": "2fQrLGitnixyHMFfTwUAE4g6caREfaY9bokgzJKSKnLaTZJASxFMkQcyRKhjuRXQFwcqahPjpCr16weN9CokrTXh",
  "key15": "5SXbhvUrCU3N3wErpBweW7rETzY8M2auCciqQ9piPqWNksSFHBGLPFV8DkA7KrkcU2WMVKhw6yoUYtQnEzpm8bg5",
  "key16": "5VGJbBsUqrXfKKCVsomudavW3XqNTwswD9xqLkx9YYsXu9EGqGzBrGxf4zKF4aLAHZF42dyMnRjyPFbV3rapR1pE",
  "key17": "Qti5oeS3spVvfXMkw2Gm3wDeKPkcY57Bwi8d1hJQmJhoVXiBJZSk6mcAEeqWW2kpiuv2XeQ7Dxnowvp7mPgkVeY",
  "key18": "4i96fjFH9aoXaiGPxuTgSQP3BrgJM69sY1mR8qqggPVx9Cg855axVnbhNBWLsRwnB6ovEo93iv54wYho4HJKooGc",
  "key19": "59nWkeNWmTs37KV3zNn48St7Hqfr65hUFHkbDcE61Dg3r9nxV1zYRGJcyfaYL3iSQm2SBj1ebWZ1Py2oUnFt6o93",
  "key20": "fu6C5hNKcDXkEgjEqyekbwEcm1dPmpbvmBobBhQ27TRUyyox6UPNFcvo2ECRM4rZA6Vuk76pGhrvNUcYpLFvw6A",
  "key21": "4P8YJWSUB8no2zy3pP3sLdxi6UCCEcXYtBj2AY5RS9MvgkJ8XewJp2XGe7Wz1cN2C3WJaDVRW2gAvDxAXJ6wrGPU",
  "key22": "4SBu7WAnjd6ZCkoicDB4iqs8L8dd2hoaJLBCQtew5PH4SCec5gP8fbVNw729f9kQYMGo2TRLB84aYuJSDc1JuEVe",
  "key23": "63Q4qkVVLZi4FE9BbbDvFCGLraWcLs59po5nBmhf4tmimjg2V1qgt27sH7XNKnXs7igVoWid3veSDugsgRJqSfg3",
  "key24": "3qnxCHHGPA6REqEzw1NrsrsP9NbwxvvJE6nxNXuDBeFf3xGfhkGXypegTDK2Y7VtEB9mKdSFrRxpRp1FAiUGf5W6",
  "key25": "5w4LLSGxGfHuuMjs1L1GcDH63vwhWbz545Hh2f5q3eZ31N4uecjcvXRELYuQgXbRbzTYEwKsFYEDtJTvRxrGYEBo",
  "key26": "3yeE2anuDoBtMPTkaPESeP4j4V3m3gPKj6BghdWcKYSrXJFBX1vfqMcxyKJKNETym5q5ygyFzv835oSFK3YmDyE6"
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
