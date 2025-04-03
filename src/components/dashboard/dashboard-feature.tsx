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
    "37u3zuuVbAbndY9S7asksYt6WsgDWYavC8Zu5RrSzQzwRynb9xTg3zeVMgRLUQzqiFuXbP4FLs5vGb1oj3EqLkn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u2uTJRrRYxauNoQJmES864wzvCZGL5b6oQjJqQjxUwFW2vQm4jmxYrNmqvFgokCJqg7ZQjNY85GiKYRCeidKBx8",
  "key1": "LwHZB7EfVncz8mB3nWTUTVByRraRd4Hh654b5K6rfGfDHtY9gQcNed44AMwYtvEFq7DJYk3kd9KTeSPGa6GkWm1",
  "key2": "3BDxkBZfUJpD3cVnJu9NzvXMUfaspX4qJbytGS2pLSCbcaSATTX3uFJiuV7BFnAimsK6xJEjKju4HEbr9CpNuAKh",
  "key3": "4JCsdaEgGbJqyQWKDASA5oRu6N9Xbme32sLrQ35mVWFSPfHknCpMVkNKXgeQjUdVd2NbfeBrUfskrWhWWo1Gu2GC",
  "key4": "4c6K9VjhijiBLG278BDwh5m2Gj9sEaNdmZ4T4ttdemZ51J7aqKMpDPPfRdqtu22XYbSYi1GLVjh1mzWzMswVoUSH",
  "key5": "4szeZW1DWNTrPo6F8Y1xYWCZcskAyX55xqFUFjcq4dwsmfauqMuFSTNUntXVVMayup4oUTkPkiiL7a1AZWjGspUk",
  "key6": "UfAMHwXBW4yo4jo5g8m7NXjipgNdNs9hkYv3Gv4iVzyUDNjMZYiFaBtPoGX4bKcrysayksHikYF8teHszu3nbj3",
  "key7": "5N55AejTzneqA746MLqLSqHeoarpMy6g2sz1GXfseH4e2sn8uvKXEzuDFehGbfsjmAdh78FdCZBFqUZdmvGT35qg",
  "key8": "4EcmMC5oEd6RcJfA3gYPgFet8reaqd4UaGKtyKsGBMmkUcgz8jgD9kWpNAMRqDtyjDm21sFw1QtnWJKJmeDNNzuB",
  "key9": "2h6sPjc6HnKv16qm62Qy6X24Mndbg5bbwdxRaoHfiiT7ovtdzc2iPN1847hBDovaPQYMQGiRWKbn1iAZ498FFG9h",
  "key10": "5yipb3squySftKmq774Y28rkWuy6Yme3FhqLz6hqKUrYCvwDFmkfBYt3w7FLL6C9VzLJwwxvJfzqWP4bTTgUM5g8",
  "key11": "4HG7aV2JVENVSBkZc2hNDWrtaQFCvhx28usxpkUEmUuFPFUSUL8yDdhM5UEiqegugRg84GfGCfJyDzAUpwfbehEB",
  "key12": "2CH5VV5TTSHcR4J4Q2XPxKnPHSgJcShLoMGAbNhv9hmdY8aDTq6SoHmRwyRLfL6TCbMJ3o4SmUDAiB5vbRt8RoZ3",
  "key13": "4Up3agerdhtKvtPKEWVCs4B16A6r5gYWMebMqdBToJVXY7a82TGUtHUJb8D2z4h6WaU3tuGahEFr1Wf6etreMbAc",
  "key14": "nvcCQieZp2rHKo5gcAb4KxPFhuJQ2pHFuPAZe3Qrge9K8ksnacevsE4Bd18CmRecSLMyy7boK7Sxuxd6vDARYpU",
  "key15": "5o91ghiNjVJLnLza3Koa1zTLAFFMUzx2wE6h74C4ZzJ7RaUgztFvAgzaM7LMimbYZLHcndzKfg1goRPBqbg5EjU2",
  "key16": "5v6CHNsVNciDksEn8htGh61J3HrpUi26mfhzw1pCuWvmSM6RwFUAF1eGxMP9YFepKgKdCTUTRT8UrHXQUaZE4HAh",
  "key17": "PhsXb3qndjd3emRLQwYy61o3JBjCgpeTm5bZUpJ8stmRu6EibmopZVK1P8f6PQ9sqfSidCCm8jKu4mDAmdNbsaM",
  "key18": "2YrFzjJDca4ssJC3abicN1PzD9pw6cUAAiF9EuWLNaGTXzjg4G1LbzCeEaCEHn1p4fM5uhvGY3DUuLPrm2BXh3Ki",
  "key19": "2SiqzsptKYxybTmEhRQhCt5fQocUDykbdNMTVVHHJPg4u8238VeiyuGeNHi7ZREfK4E1DDa6XP5n9hjP5Fm6cwRD",
  "key20": "3HcRecBzAp62dQk8zr6kAc4TXNCiFDZdKi6UJjAjgeUbzbHsgEBA48pdoRYedezn8jHnD5qsHe4j7mnHWk4RB7CB",
  "key21": "39knpgFWfdMVEgSz1nPsmHNQKDaRA13ePsjtvjMmK5ZTimGH15sSjUzoc69mqTuUErj4SsgDhAz6PgxdoZjg6e6D",
  "key22": "4Zba1dCJy5yrKTRLLDZ5hNzSAyEz5vHdQ3ZGWxkbAadN2xZRbzchQzhbVcqmr8AQbbi2HVrGX2xK2vaQTReWKMMX",
  "key23": "qWPGFYjZtJ5fbrdz6nuHwXxowHYn6rbxoyp2c6et6k5oESdoRR72Usecdmex66SbSofDGp8kXGHoBVA52uqNuLH",
  "key24": "2gNHRvTcUiiz11XYskEraSeUrzoCKvnDCYCphsAnDG45sMCf3uMjAgBD5U4spFpmpfVqFau4Vuofetp9GUeFrdsU",
  "key25": "2b8HnUsH4bCBQRqBKadgVMaoSC8Zb6BrarcdtwuKJE7CdbDiEKGDGJzGAnAFfYAeVxzbqdawbksgEUX8Hv5WF9tj"
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
