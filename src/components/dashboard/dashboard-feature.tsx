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
    "5StBvJvgcvExXrE5RzgEYXxrievyCCBzwJh42JkiauPk5vz9LC5NJ1QddoHminfJanhKuMR97C7hughw1AgSzBya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mhgUA62A2FqH5g1ouW3xZNegbk3KRYwB3AAUGxLxaMDPvmBGFbk2sGF8iCQuJNmSwVUMrQmHaaoWZ71P4HmJUUT",
  "key1": "48nGTs63R9uK33vUtwjmGQDqHm9ev4JpgP3y3zw7eNMQeKDSBa4sDPqTDfdzbiDNffn9MHN46Hr4FkeA23FNJRT8",
  "key2": "2uTy3B2ZHQvkyGFyrmAKESfU7wDBjcVCDgaAYfQwKqeoSYvc2A9SAwHehU5pGLSLpoC1nog6bpbfzkTiQQor2RB5",
  "key3": "2wW89U5JMu9gmnq4zniuhKa9SZMjnAUkjEdtT183dqLoAi4WB29wiWhNtMDzhWK6MmVTg8pHKPLKm1tF5EYYtWiQ",
  "key4": "4ZdtYTEReBFhG2TyCTaZJUFehKjn8GSFHBsjwrbJyZ2QbbzoxydPzurgzvfeYtgjUNyQaWYjqKP8RSW4JVW6xrCK",
  "key5": "8ywCdRFoMX69mrBDsVycZwZPyZQmm2N2CbzfXsZii9vEW7NcZ9zs3xsE4gq3uReCyrQFYy79B1yHqYVtd5f23Gt",
  "key6": "5tVnzH8rCeY7jPD5BF9K5GbX5ecDXY3WvHu8FrY1Lq4mMwrEg8AZLfJoHRiP8eeGrjo1qH4g6eAonAbsY1SEChp4",
  "key7": "4zBMT7qJXvrHWHBvZmcd1cHyQTFyWN23EQjGSAkYu79nsEY5z6cWYVeHBFCmHWkgYA79RC4n3av65dbspRwD85pH",
  "key8": "2h46szMYSNdtuErCjk1arZ7HvEy1M7JKfRdUuV9ffraybFNQZVkzT9mhC22B8WoqtwhHqpC7nn9ARoppxzaQoP8f",
  "key9": "2c3yw1cQsbfVQTw46FM7XfZeFmCMqqeMTrPEprH2KP2QzXGyR1iHMcpHhj5cLs8pWAtJMnn5WDLWDPhdWr326GVj",
  "key10": "41jVK3YpXGRnYyHTGTuj1S2JQ27ZQr25s5qUoU2RjqbmQxAb3qGUfDRU9dBoWTvddVDUqc23X2yW1D7PintW8Mf2",
  "key11": "5A33ebBxHjBb1rP3S8PsPN9eDMpwTsnQAE3AJ1d3tvmd3t6LinAKKAQ7cVU3KYAB8BeMZsq9TxXDZU6q9h6fdWYe",
  "key12": "kBgwa165M7Y5MuBWVmAckcr7Kto1h2mWnteRG3kKqgMtR37n6VpweuLdQVRte1Hwm5diyGz9sucShxfmL4HN9Wg",
  "key13": "y1oEP8wG5SkBbqJ35NSS3PHue4zteUwzvvQB4F8cVBEJCGnP3j6UY3SStcXbTg7tYvjxJh3q1cMKp4nvQjS9C12",
  "key14": "3wKCvTfPANHuXJibTen1aCFuxBzvUR3rH6tnFxEeJeLPQamZBxChqrHUJN5UeRw4APkbwzmbzuyYrRyGmm151KxM",
  "key15": "72tirwdiy5gt23HEo5cMKJMnqaEUdz4MRPyBMd1Dc4eChMJotecpSa8sDEZCXKsw3A43xow6deeZmvxYGRLRyba",
  "key16": "2uTVpKTUGbnw983syVDMsAPneHjou68w6Hao6pKPUKLrbBherRgvmkyKTzgAvCb4aU3A26k6BHmCPYyps86tofYD",
  "key17": "2o9MX4SntF4uzteKWhR2yftVmd9SZYrVWSuauxeaYBpqYy6GARTjd8RFMGfGye8U5RgZN8eUtoNAgMo8EgSWVEFX",
  "key18": "3Trgz5aJQJFFoEAnXLBout1mCF5YKmtNpDfY9VSXZRYRRZa5Sqo7EJNWYZWKayryBg6wgo9DLXpTZukGEqcfMdah",
  "key19": "61qfSRbQoBCSPeeqMiCP7uN6Ge3bG2mx5m5Ada4cf42xfTyauYvrUHdid4K92tGbEzZWuJ1odEShTwKZ1rkfsqHw",
  "key20": "4xPG41p4VZBhYn21E8Srjh3sYXBMfAaCgFWM9jGHvaBKgiWwKXzS81CaLW7TEcFsVv8oX6XeLEjchf4FUdNYLEMz",
  "key21": "4SDppudjcSZtUSNKwvavEWXNWaC4xSZg2TQKHK996AS5GU6RnpwKWEuTgecFW791EpBLXBbU6fMtdNMwj4jtBo12",
  "key22": "3QiDLZAc6ETdLo6bZpgSLenW1W4Lff3MU7yyDoy7A9K68GeUQAALWAUbbRXyQEhUyQVDnP5GU13E7WMgSCVYQugE",
  "key23": "5CsAmXtkYuNmLzPAf6RSLYnnQb3jp9uDix7N2JXhENzhA14THJPcFH3gPELBcDZToa4hqTT5Jnw18VCaQ3wCYCK5",
  "key24": "3Buc63H6ZyUPTmEKS2fGmaWC9LEeZCeHjayiawuYeM6bFg51R7STcCxrBcN34H8ac7Z1croBKU4rrr21WsaT7Tq3",
  "key25": "22NPz8JkcvRBgAqh5egLjxirfDEneqneqcdG3nminHHVTD3AaFWcFMPqDx5hqNqSsCTByGJfbRScrr8NeDNLKX5z",
  "key26": "4QZTRroEt2Lk55phdmZ7DpgxsjJkzG5syddDmTCigrKDRJxG3m9GRAyEQ71KZ1VHMLnxqVvd41YGHHWJbQnNAQaL"
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
