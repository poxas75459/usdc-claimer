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
    "3MphZXyeaD5AkpfbWANAp6N85v3W3jJYqSoMrFafm874cq6zE4RXqckBpoWFjz38uDZE4bofmHwHpS23bv3Q7phT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22U72HSuZeh6rNQEx6vzzpuoC6Fcf7MaJc9ueWshkSFkzcziBTG9vLerFvWtDQkoX5Y7mQ8X9taxtaoQ37wyLVgx",
  "key1": "HHRMQkPhDnpoRyovCh6U2tfN4xH4wA59cC8i3zRjV6Zfng6vmwvEiereoEeR9cm6FyeYJRW9qBoRqK1YjvkuAgg",
  "key2": "379PjgjBod3iZZ48FQppZNC17dovrTJzyLWyzSwrNQkV1WuqGbwyEcp1a6a7umPPuFNekH3W4psYBEM9dseQjc9i",
  "key3": "ccEKp3WopMPQBH8hnNsVETAzEMorLQWkzvbbAwPD7z3H7akrn6Y6fBuqxC3Q56Wk91TGVsHLLVDWottLBCDFn51",
  "key4": "4sbb78bmLnfRpkkaqhJKkqGZG2uaAbbzdybHD7h7aHC9sAoLoPLE5cvCdTeEtpF6Us4bhTzMtQTpHZ5Z6tWZRJRN",
  "key5": "ma2ukEGuH8wn6fPfGWgMUvMhDunqEtqcyYhPkhtHEGvHngTBTzg1HhR4QFpGAyKJN9UU8gnuJ2Vto1cuhKrMaEo",
  "key6": "3avHckCi5qUefNYTkjd9neUkjrXng67ijTYtyzGvwSbC9RuvW4ivZZdKgSD8rrS2xPm2GJ7QbVHp3ouh2pKUiY6C",
  "key7": "5MweA43y7PURoC1KdDGWjrkwmMgETwkbq8JeyE1YTHgdbsMejsreWX4T7qD78PzLKM71LFE8uZARJ5Zu8KjLXExP",
  "key8": "2JKcQvjMtjHtg5U8uP7pyM1JqJRQxzbmzhh7iFHz7p28oNyxXn7kbmye3BezTs8Wxy8QDaQakqjzgKtnJDBKGihu",
  "key9": "3TBArTZ7hwVWYTYZVS7GsbVytcgocy1vKVXjL7ZrvpqwKAPPa4AYCZihdgjjU3u6wXgRuwBm1mAybszNCHdvYzgb",
  "key10": "GZSkygQ67bBkLSAfRUS2N4ezBaJKAmPvG3bFJvNYL2VYfeQC43mYfmqndGBjfpvKj1Tfh5AXUFNahwYUEqgSzyf",
  "key11": "5s2NoRpQhMGmeyrbE9iFdvK7D5HqD94DgifmmDqMynFzeicisZAHttvddh51P1z9Ubt7W6smAGrktubNBhDPHotf",
  "key12": "2VxRQv6yU5R3PN8aoBWc3Lvq1qRdrEPDp1yGjzYY8DwNLq6yidAwMBKpJGXti6EzDeZKpwadU7fX2MofN9bQ5uMB",
  "key13": "WWdnaSmRhFkkgnTHmKS9Hjxu6hnaUkLyrFeVKhBenJqxBqbenYepEFo8Zxta4jey4SgdQX5pMy9ibmotqD1kbow",
  "key14": "5p9p6uevfMRbJgSH3vNg9eFji7R4sspXfszMzQKRDtix5Xvb1s5VGHzUadoeLK8EdLaY3W9epp4UfBtGnVr4Q6pQ",
  "key15": "3RRb5q13dtQVoywb9YP5j47oY5WPaqrJDUyj77wpAp2Vm4APt6i4tNMAYCrxvnjA7FQR7XnGsPLt8KEqYxwMixwd",
  "key16": "25L7fsTjsPfUSdcZsaKfjLXz75crjxZLPbDYJQ5oJkJE3tD4cJMdKo8JTLZNtf6iDejNPZtXWSw84VAG4zwdHrkn",
  "key17": "292qHkwiRcLizmaDUTALd259iJ1fqkGFA5SteT6y1XW9RyNJWWZizzwthbCTd5Dpcb1KEZx6LpfWShSGRsW9K2yv",
  "key18": "3H2CYaKGnfg9tQqETM3C35Kh8FNCd2reve5bmXWT6NisFWv3EdszeESZMB8FHSHJtnpqbFrGpg1Y4Gv99CZFgeP5",
  "key19": "2wY2VNDmZ4TzoF87yVi42qcARGJq4eqbLNLioL399hxePnbNmxGoVVzyTUthTwp7zCJTqwnL55XQECAZcgWbZvzF",
  "key20": "5d7jghhaVXWntWJb3LEYEScHNocDd8fYStx7BWVnwh18maPcY25ic9edw4VRoStwqeuyszTW5pTf325repojs3rd",
  "key21": "RjXzLX6BYLqVwaS3JvnhqyfK1VLhSBTQaghBZgBE2JkDvWmEMxUAcWFmPknsyRMER1WyoLLBUmxQbHnuQ3wgF36",
  "key22": "2Qn4X7Ntpe4Yy8uEt5z9TiEsRekQdLn6aags2Yjpr8MTAgT5wHexcFUwJ6VoobaZRcAcjahnkPEjDcoNQ6iEZNyV",
  "key23": "43cFhQ2HK6Zco1nmdbmXsiS2ewWTs5jEvbCm6CiotroW8YXe3x3Ri9Qx7QtT1WHmeNCRpjP1tUMqCcEfZvrzrPCX",
  "key24": "3FefQWXZjWKbbJVhhESB7V1LktaCuwnh45Fmmz2vfhGJQYd6kpVDxiVqRnMZ58Crv9v88cWwF4p3Pqn3f9trpxN2",
  "key25": "oL2Y9PeWfxZ9Bc71TrhTYufVrojNftyv6fDhX2Mn9FjmZVX6mMpiGAaV8764w8Tafc7tFGgZuauWxaswKmXSjHA",
  "key26": "3wdfmeUimyjWigfN5Mj1f6AgrWHhXQaXRCEYBDhAZi8HJPjPbSJmjUEg7uMDncAKtYoHEs3onKWoL9c9i2CNA7QZ"
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
