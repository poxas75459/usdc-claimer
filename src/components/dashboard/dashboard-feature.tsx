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
    "5p9n3B1LBDj5HDKczg1s3FcYQGiC5d8pNAzyQtpQ8WmA3vKGW15DhCriYJMPDKMta2z69X9DxkMRtRHMstwu1JuM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oZBXmp2rLwvbfqfc9GwXKzMqycEnadaMi6Sky4yus3L8fGWp2yY8XrsR6raeBfEg5yBhHjesEYMUHT1GYYsmfns",
  "key1": "44LTKhTrXGWuzmuLndWLx9Zk7ckFsoVwge21fBh7ZyCkPa1KC99PBVYwnmgCMC1VxV3eeVbs7VX3TFw9nuUxzz5E",
  "key2": "XFdGxwzBS9oRk8Aw5EXu87h9QyRs4q2ZXDSd2eN3wKcanjb5iNgdfDCq4MNk6cetXK4LtsEKsUrCTjNbeKrFv24",
  "key3": "3ndyKj2LjEuQthRS2kW7j81L46b5yRsCQEVQhoFuZynnYriA5j9U2aTtW9rTAxjTukKFRoxxQJHq3vuUbXVR9kzp",
  "key4": "3xm8t7CPuWe1BJLnLmVfWk8TjsVH43tRZsXjZ7vmRxc7WNarh6mFgKEc5Ch53x22p3BUrGrtAZF9aaE21SMScZWA",
  "key5": "4f4iHeFgjW47QFv9J3C5LRDzq9bK3hmdroFu6xb9wHTbSVTYfPQQNRLZAHhRNttbJas6bczdLm9JVps5QX442YEs",
  "key6": "KVnSFDUtvsYy7GQCz1QNXeeToQeZ9sVXjr5SX69BsuM5dkHqb9pdYomXVem31yL8Xun4okDeBMvGn4Sf3rY1D39",
  "key7": "64p4FDBXwmiKFkoWhyVJf1mhzc1SpUq71YJ79pxCKJ8FzbNdQiCLcaiSNuUaLQ3rPNqs3JMZcz9TDFcQt4jbqqBZ",
  "key8": "43sFnkhY9t6rMusxPPUc1u26Dt4jBVL374a2byCnWHNNDFfyuXaJSDSY8TPCKs47ZmJzHUZXnvHEV13ZpN8sUvJf",
  "key9": "4J2TXhXEKpLtWebmLRBhm2dTYS9by2tNzhG7mJ1p3VYBbRbyQyTm1vZDgZcoTQ8QQ8CcTyjERGBriRWimXRcszko",
  "key10": "2RmCaLABUCpvQU3NQwjdeXCdaZETeFrvFzpQhyaEBrUT1SypMNTa1fFbeRxiPyopxzHRJkrwHrM7oVq246jSQxxz",
  "key11": "5UEiUZe31rGhvTHCY2AfUqiF6jCjKtQfyjf2dtyrP6vrPJ46jeE6mcqYhNrFdCvMh6WLjxwJQXDpAkqHeQXbyEj9",
  "key12": "4mXUiTcutQJTwG2vbfFXhgY6GFJSSwaCLazuZ3879FeiKXfD5etKmYGP9jtYgjTZFuic6ELxbMaFfTeTi2C3DF3d",
  "key13": "4Kcv8AoFMK5Z1vyZtkq4nwwyboYUWuuKTpwckNiKo4pbsQ4hExuqvSWYaRwEdn8wvWUNoUBLGAzVT4jkARaqJJaX",
  "key14": "2cfEZbiApUx3hfU9vhRqBVZGHoNu7UZaGzPycDuDERBBuigX1JbGnpMcYTNMJWJ1Mx8GyN5n7Y9DJyepeX9KMYUi",
  "key15": "43rirjK1vwmYVrUMrfMSc15HHe3RKe7wGREQg3NY3S4QTFASbxuJ684EK6bGnYgFkeaNfhzrMo3NDtrH7dkAqCVP",
  "key16": "nB9wwyV5YDZRkk2zxqK17VGepJU3UMkN7ssch5uDnB94ueCqAMj3jcFgq3uE5iU3APtiCyh5Rkg1Toj1mw2i3Xk",
  "key17": "XvuM6HYupe6cM1DioJo5hZXQkASNBZurYx6mxV6nyajowm8VE13ghDDib2tqRivEQ3fkDSs3vJcQsd94GXgKALR",
  "key18": "hei9epsCv1bV7QoUu4AzfUFSVUiJdN1FWLad7swdeDEWNJiFApUVUWdgtBsfZTqsk9JKP3pGoMEyNSXBvqsLzw3",
  "key19": "3tDQkBnVtfRo71H3bABNctSEeBg9gHKCLaocgXu476yHipm93eEXQpLYN34wFji2X6SfDfnq5W23LTx3Nd2V2oYL",
  "key20": "5TjRNPNjg9Q2qXJiKahTwFgimR7mcAFAExQhWy6EeVEjtF3n1X6xLFcqfGEuGpfpBgNaNzh6azchii7mWEkyCUWf",
  "key21": "37EFUviauPxJWzgW5YRXd35FvTzt6p33NzutnnshqEuiPs5uhmDkdCWfLBUFmV1BHW183iZiCpi7aZmAu2Qxr1WY",
  "key22": "CdNJnCWNFqKLEg5VERqQuP2RNZCKMsu5t6g7g1Pu4n6Aj3SQXjz9PgQ3vBCZiR5zah8kkSGxrEVFtKmJ7Eu9gj1",
  "key23": "N6QdXDgYhjG5njiNQE2uFKoAhjTjtCVj36rLePkqKzFVArcNCzUFMyKdRZa7s7LcBcQTgeds64CqxpbGYCJfEpK",
  "key24": "4goAEYmNfEV9ZdBAcmADKkomXCbm6Vqjy3AbhCGbBfX1pRTny1VuDfx6tyJ85ELoGMiarTgGeWgdRwAd2PQzRoCG",
  "key25": "5ZemDUKQoc7NEWAJEXsFMA8ePUpTpi5scde9nxj7T51uruK7Yz9YW9wAgXZh62MnuhAQ6sdq8K1Q8DzhKuVhucWT",
  "key26": "2zC8hkjPCGNjAjYW2rGYt6GPCzKsxPZFSb5mfM9wc3EtUc9UoSE8WP1qndKFAHHJ4LXJ92jvDgs6UYAh7tbLzd9n",
  "key27": "3Nww1792EBRx69uRx4DcB2gWjGHsT6WMBsdFfcfBrTV6U1wgRgEWzKdXcQn2G2neC6Gpq9MF996Kqs9GrhPajRnt",
  "key28": "5bNHoUzvrgLrewQQdWYkoCjccnJDRyNfQFszNc2hbdyWjtwo7ePy8zo7KnBVDpPoo6xj3cHtnccqvdaJS1s8X2wj",
  "key29": "4xNo4MqL2pace4p81iQ4sgKNf2DHXQAunU1onUrshheZkEVUSLmdntDvWfxj5YYmEHMkYau7R6EFtur1agJ1EVuT",
  "key30": "2c9PUuXBu5YMKX5aFdA9yKQjjiZmdDsZ5QgwvHZ911H2apiEP1dP8L77EA2zpZHKfeqDZoXh3KoeqdWoG6M2gbR1",
  "key31": "5ER8EabVA5wNsK8qhGQx5rg8WPUEhzTQa3hMgcaBNRn5PeJKTo4swep3g5NLep8jtk1wzPfQENmYw2QXr6zUVpp2"
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
