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
    "3foMiuadShHN6SZHrJ1TrW5kEFBrJwwjwWE3Ap4YTZDXcWW5CswBgWdQsZvJybkP1EW9cyiAWRrD1j7zeyW3BuNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nNitWNuQYvwosVS8Jb4mKuuE8YpGCAqCR2G9VAHHuirrNfTZqUAZME1HFEiJoUcaPxRaoto4Cc5KTRhPkDWcCqu",
  "key1": "4fvmqcn58DcAkhjAuCgHC6J4zwzjHNYrJZ4GdzbiQkX3bvCJJY4NPSCjp8HMqKaKCri5y9zDRmUaTh7dMoSaVUcT",
  "key2": "RXHFPHez6atEAKbesnd76JoGy6XFX34Zy8cR2VyiF3VQbCqBHYcvF4azBfgm8e3RAQXUQcjCuzoRrFZMFJtdPkG",
  "key3": "5Aoj3oDHHRKojfcTAbdbcyno7o18qu1wTK2QJNaFjYwqYMxGQkqXaFYjr8dzSdcctzcDdXTu3uoEEmkSBp9cQ1Qj",
  "key4": "3MZuDEnA4hVgG5xJFjrAb2JeaQ1ivR35YsHFS82ydR3jwZs1cGL5ytByWvq16aEEUUhUx27S92GGMiQxctbGf2bf",
  "key5": "4PpfRZCscb7opXP6rnK4oc1FtYPEpb9jZRf567ceh84pBc5cMZemC33519kiD4sozhnoZgNizByjxKD3aHWq6yCu",
  "key6": "4t47koqETPmBsFBEjzzYnTL3EEqwhGiAQhw7hAGP2WXqeeKRVnEBd9bgeVpPyJvKpe9u64xD4HqoMQXgqSykM51o",
  "key7": "2Cy89TQqoT25dBQ9nbGfiNFcVP8Pi8kCxE45WbcKUXv5Hb8L8PqhuGyXVc1k51N4MELjaZfTfKXEqKWS2XogYUau",
  "key8": "3xTgQ6fwpToheP1s3MN6HDbcorC32UxBAkjqpALYwmKZiwrnSW7xKm8k2g13vVYZuwRiU5wgQYC5cqHR6V94YVUy",
  "key9": "4Njgp5oYgnoTwDAupCG69Nrw6AzmuAqeFFq1T2LffDL74YkUage63HSi55RzBgQ5SDLaHiW1B3oDfVkqTVRbsqRZ",
  "key10": "72Kb4MGJ328d61nsPxasMmB4wTewXbBHZkRQhSvYAv4oBVcYhPQqYyUvdHdHHzVPpXttiqHzvnCpMfbFoXhgHY4",
  "key11": "357HfEVhBAtzZ426XRWKAvp6XiXe1qhdWRnWWR8JkFLdemHgeR7DXu9RX4hkQxrr75xz5QghGvCuDHS8PHzmg4xV",
  "key12": "3VY1XXjDS3qWeV7tWYKHbTkc98PzUhBq1mMaJBhCLab5pCxMx4G6YWqvNYFjSvCpdcBqYy3WkaM7JX4HzsiKuqWi",
  "key13": "3HR2pKP356dJwxGYExbZaX9y1hLA1qDKFWssTEtrVqMKDo4uy2tG7iCLEL1qx3GCaukLjCoYLh123pCeeK2AbRNi",
  "key14": "2kNdj394KSvP9fr3fWHbvt6Q2xPZYQwif6J4ebbyuevG6asKk3szUpfJA7Rmt6CuBB714pCFRJPNaSAzmcM7N2pz",
  "key15": "5Wwg3K8Lz1GWGv7V7Gx2tTBUCHxF3WnthFibuPEndCNvLKGvvkCC4g5zt54781KgRxVFTg99bstFV7EqS1tqceWF",
  "key16": "2zyvgu6RMDwrRWTBD7KiN56Gcv6jEs5LKZd8n72zLeX4tr8aHbPKVwkTmryxjDVxLXtRLhh9eiNjVo9GLFnvYqbo",
  "key17": "2DriuxjTP9Y37REaaV5fT8d2kaRVgVjyQyDWsiA9kmjC1uKEt7sac8hR1asN44zCMWxwCR9VYbSdG6cWyBDW9arh",
  "key18": "3JUTrJH41aQKBidJxkGefLdiGssbSsZm55VBBDKssgfJ1A34eGYYVtoSJw9bcQR2hzFpFjsiWB5ovZj8XdgQyBCV",
  "key19": "kafstQ2r2kXLxQopZtfH39MWjLbuiE7oEpzvp2vqRGJueSahrjLp5RASSCGX3sXXG3E59hbhxSDEAoS3amJhPHz",
  "key20": "3FJgNd3EfL5jDKud2MqebtyLd5kiiXz12uw53Yv7APCSoxWJCUnZDvqwTR9Goivso21gjg1etPcxvrK54q4BZxeA",
  "key21": "3rhsK7epmUjJquDUTSg567hs6rMZu3okREzNVVjRyV1nR1YxdYwzfBVcvxrgxVAMn4JLPbdLSXiDJemAos2WhXf",
  "key22": "2pkp4ySu3jH8N3vzXDnXXQHZreGuZB8N1AVgwdLgQ1y3rADCV7aeDY3TPgfUAyBNMfUTTmUzWbNGFV4YHjUwhr1Y",
  "key23": "2Ke8YX345nop5rd6TtECAoMRcrRUR1fA1xaizRMuj6ommFYXGnWgmKy6pmcQjoTSDjTSJSx4YQteAPgqSmewr6PJ",
  "key24": "2DGCZR1JSCbiCAAxJ6MAkgaidwkoPSJhPVxpAiSYPzCmkyzXJCNSq2yq3NZTt9zq8UUcn3BUbxTKEAug4cEhwT3y"
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
