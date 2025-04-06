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
    "5LMjJNtW9hkdn9Doy3DMWaNDJws7KFTBqqYeApuBsLCCGyEyjk75LTZoHMWAMMdQPQ45NQwohwci8JyobdDERnnM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VvRko3JwEUiGpeX2gi5VMUrnrgax1Wm77GXnj64ReW26CxwWdLQBD5paFt5xGhjfHqFLBLQh1UhemCe9RN6Kha5",
  "key1": "4FGDb5ZemFCdtfYKUMvxT8AAscLxoPfrifxQFaCLsVsMqhs53K4uEZRL9vN7S1yDN9kkUqPcm2pD8x9P5XuNtoJX",
  "key2": "3PGdpwFUGyY5hWpB5qrvCHjS2B4DJCDz3TWrG9tYBcMjvW8KgwTJUx45vJzJMgp4gNYid6D4tjSF8eMdtMiSmWQC",
  "key3": "9EBfTR6eqvNS76bbLZ3nrCqer23zZN4BvM8ykzv1JLPaRL3atiJ6EKpJbwB9TP2cQQzKqwM6LbbJGiKYCXZWRZe",
  "key4": "5E2xYDPGwzWYTJ9PfXUbmS8zzbqdzoaFtrZQr7hfRFmdhmNX14tDMy5L33vrkesod78Evt56FKh8DsRYtBX3XH7M",
  "key5": "5Npgrfj98UmmaF4bBfk56n6vdM5sDPYMBUNryxBBmwwAnYNKjkExRowZMVXDsNzE3SVoxSTL1G9cMHpUr9N8mbir",
  "key6": "5GVPLgXM5joFXfHLVL4JiCrDxv1kEGp7okz3VxFATb7Q9MTPaWYWX19LbuXg3bUNhENNGzGpJCRgQrRYunE13NoW",
  "key7": "vsvt9Ju5saAvjqvgYcD3xk48n9AW1CYqaro6SWZtYzUyUvo5fgM5ZRLHiVjbPFH6UnTURmmNtH6HJLLKddL19At",
  "key8": "5RwUKNwAHcWHRhXCQYMc76dqf2bhUQV8JXR24mEMLniZqeQs3f43aFtApkvhCYd8hmLT1YQqdBFzdxKTcoQb51o4",
  "key9": "wSxKMkv1FA36fgQTuuUDEEAFVAh7DbVXiX6fRhXcgxxwR7BGmVBAuHLW7Q9DBdHNrvk3SJYmhRS8XDtGdWw3vXz",
  "key10": "5ULRdUkf5uuF9BQiUYjouBHaj4otZve6u7i8qzFoJMaM1zE6ojV4rYVgAPjCTXtintGR1jAHcPCF1YLUokVoCAth",
  "key11": "5opQi8f3LNXtRouDK2c5BRf9qx9J5qKcq8eeFi1zefCa1oYsdtzYVYySBgzbWMr1HxAet2BA1Zj8eBe8oKeCfW9N",
  "key12": "4UgB9nkgtSQZzKmBZZAyfWWjJe4EUAvSxud1QAXyYKXYqEe88oezvMy7grcVZ6AniiQ68QMsHANWVc3eBer8Uz1s",
  "key13": "3yvHNKNgGwEUyoVsRPkGnN48gZKtRcf91sUQiHKTR2f74Bm7qQUdUZYSrR3YD1TEFnuRxfbcUbyxvqQtYqfn9d8G",
  "key14": "659ubyYoVTfNNXMNs4wuZG34TrH378aTsDzc5AHrv3fJztT9VyLte224MgTM2ZSoQeYbaYNWuWo2AV6kPPFJtofg",
  "key15": "4mPzrYE2zLUgEAgEdYw4QsS5yE4UAXJmNvYsJR56aXtJKPcqATdU2n26BivFLAguJqq6KqAchfs6JgDvXZZ8c61x",
  "key16": "2kahZSLUPbYh6iqUniCV8SGb4NPottEWAm88pnSRZ7cTi42FG4FpPjne8A9cszJaDiN4MxA9VX5QJwu4qfYUw7y9",
  "key17": "5seZmVhpEA3ZFFb43vFcUfGjFmWnyfqSGWnrYG12UuYgmeTpMNJL8DzhUp1165nBW4Hc9UrRJRm8Z7WnHboFENEW",
  "key18": "3s73cGVwNfVR7LeheTQvAobKgN5V4MGcn2uc3WymzZznipWyUF5ki967dW3SGDPf9aB1HpjRc4sG76pzJXaKW3y9",
  "key19": "2YFNFTnTdq2EcoMPt463yyx3PDkhPiGxVGrrSF2hddEJG14jiModgh9WkqMPzoMsNjLck9D2M5PuXsLbgKJuHUTg",
  "key20": "5x73hLz9qeaAbt12H1JB9v3LgzWFrpvSES2Si1NyNaQpU6GrAJjaXLE7GSJBzcHBEUiGhnNa2D3us3Pw5q1tDvs7",
  "key21": "LpoBwdrf6AtbcKyZJU9ovb4T8hFBoMhE5cQnN5FLUqSP3JFBaPgnfNtNThJN5ZESnf1X7VaAKurNbFh2LpAYEfn",
  "key22": "2yd3HdPxsAabJZe3ndzvxRTeUcF2o6YdHLCP9wbbkHhXb1yUSn2hgC9H1u8gHjdJwQWAHsr4nHxehceaRNNe4Y9B",
  "key23": "WLD2tPCyGAfjr1USwDUtfrZn8mxRFKf3jYbvcJATaWzYLHWdfHkcqghi2BRJ8RaixYV7GgCcVHjuigMNrAUrf5o",
  "key24": "4uXsDqDe9xEbDP9idS8Hbc6jtdZekYWvHqfUmBKbQX67HbPF2gdxCU5AzZKx1CUsNTzUcafgnipB6BynMxzQe5oW",
  "key25": "4h2e1fEZzA5QzXrLEeZh2m57529ojDuaArdADn8uMvLXyZCW97wgxHaivURAqfoek2hnhpRAz9CtX1xyuvtKDzUc",
  "key26": "5zWPLReSGtUi29LUvoSdBzX9uugyXaCAD1CDhZhJMJqztFRSmBwTjMfE8FqmMtY2fViuNTUsajLBtnpco5ektdSG",
  "key27": "5GKCA6gXRmxrVvhpEoSU2Pm7SDpGKwvHaEah1QmYg9UvkbfHzw5PQkeEfUvN8NsfBWXAAApp3exjHAEkarrLVV8J"
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
