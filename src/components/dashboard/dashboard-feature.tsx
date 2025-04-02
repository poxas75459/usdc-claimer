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
    "4MTrmkQRV6aJtefciH1NgQCQ7JaTnkkQCygnGyARdvegRwsdmSKa1dyXvgu7AsR56F8ijFqs4J9ME2CpuXmyxSeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E67h2AU3pBsynohnM4kDq45YaG4GE9WV1B4z43338bmxGAqh1vnvHazToGARpAtX9Y8nEyP2hnS6Z4WK9VXyxM6",
  "key1": "haueK1eCwq9sEG5X489dznB2YpkAhReEKqNjPbrkMQMevJK7UXZ1SfsJvrn7yRp9KmUeHZvPShVJVHzzuGCmEuJ",
  "key2": "4UvwxtMU4SS3gdB3PhjD2z7PsZMPZ7xpvSQUFGV1i2WozwPj9VAyxh3ytVXrNCCyy7Tyhq4QUJ84Ju3rNqegiKwo",
  "key3": "4xfDRZ1axPuQxJCfep9BFb5LAQLP97oXAd2pFvU91CDmZKMjhZjmsFP4CiUqV5NkNFiqarWQL3zFXiu7s3GBJD3T",
  "key4": "osQtXqq9nmRYpmXESST2SPXMBw7WqBvbhNKwAdtjz4JLJjyfR9Jp4iBxQtbPe8P4nqaN8DfXKEprS1QV5oBvKxE",
  "key5": "3UTRniKcWgVRPauAUabFakgkDgx673QUBAUoq9MDngc7fVC5eN4naPnvAhpFzf8uT56Q1KoKNdNsD89QH3WpNanw",
  "key6": "37NcuqJ3TCXzjhPAW91SnVVe282dwnuQG4xaULdpT2a1JVn8JpUMZDNP9r9BdTTKNaARetsXHvv6RhUzG3TUzcih",
  "key7": "5fu5zLX11dikPwSTeSK6S6voUXLDLyTf5xiRgo9ehmiB3hCZsLEpzcgMaabebwraRYBabuPyHUbzvHMD8VRayaS",
  "key8": "2EyR997zGXhLqyP3ZijrYmQQtggNwaZvaNieJpDKiWt5YQVyQcz3rE9g3drRLZm2LPpsqUz4uFBfZCj5qZUEJNmG",
  "key9": "5cbHkCWtAHbLNv46Kqr84zz67cpJrbx5fTGH28bVJv16hhMQnXc7qeAE9HUmP6e81ACjYGEWefk3mi9a6urSGNVm",
  "key10": "5Pnattr8V3ygC23j99tMmJfms4KmfZQHezVroFJQ6YREVz5vQR6GjiaZz7UW2fSmUdaaKjFPQEa1UavnLHYEjFid",
  "key11": "2THTrgpBPtSzGcY62T8ifax1o4Nyu2efekw9oz6wETrKVzMXr7j25DMK6dYX6CEayeyGRYhTZk2TcLwpwDyzrepb",
  "key12": "SFYecdVhrvTWcyDTDUr5HdQPrrJuUdmsN6APqejkK5fNSYnJvQqJRMrMfEeTXqxaWcEDHNz6kGJYvWcBmtkSWDe",
  "key13": "5RXnm6xDwQio5CoD4G5YDrkwhNdjzcmvJpMquXahUkQw75CfB5SosiGWdPJbXDEnNr9jNbx67v4moWN1fL5LHLtJ",
  "key14": "2gsht4PVeLxeWeK3CSCrQtQT1M3q6GgCcrDQqWcRc4BL5y9Er7BSNk4aqpHqDntZ5q8BTtcTrxFPpMkxurFuCMDG",
  "key15": "51eriUsLDHasaCbYPsm387CjTEckRkTvENL4TEVwkCr29MChjiC81FAzRxDFGnwvXtbXMCcdC469MN3xnA2XBrdF",
  "key16": "3X4sae43eoCHvqCDQTQp1QqdPJHyK271QEPKwp18GSa7sZay4UCH7hMUNTeho1Jtmohg8A52EvkfQrP83TPYgtmE",
  "key17": "g1bV3HdyYGiV3AVuJudjN4yUhA8eqVEVfKUgSRZLE1hHeQgQWo3HyJNtcyrCKDYATdCrtki9YBe6Q6qDx8mtpyh",
  "key18": "3QPfgmMvzZ1d8gqxs1mK4CsMgYLwwnuDPvGuqmHXQag6bimmZNHcC2a7REjqZ8W5EbzHB8mGNejheetcdbebq8Eo",
  "key19": "2FY1brnpMJLdVhFzEx2nC4xWseRasaUoKwbLYEHW6XvnmNKqrxBoGvQQWFrV71Qsesr19bML5B49yvij6jbFLYJw",
  "key20": "2vcjzicY2bF7kS5XHh7jmQQAn9Hbs8spXni7t9teBnvbtYZKgCx8AMcdxfJHaKLyUiBRv5o4g4X4gXNt8guRdZSK",
  "key21": "3ERRhJowEBZy9xf7sLR57NyiXwfubZcfLwXXZ9sa8AodKrVbfYNdwJrb5RuyRmT7dx4JBFE4aRYmkQojUN33XM8J",
  "key22": "32CMQNdJpuPWXMB4ZgiHmec5xA49dqfvk2H6fumEA3fkZVbywKm5p9dfTm3XbKxZg6jsqepPGawtJBHUZPFGtGng",
  "key23": "5bw8SQDwqP4fVDzS6ACXnLD7fV6BwXwvkj3FLsZ3rZqKib2h1xYXXXanGvKPoBPM97vqVyMPG5Z8AStRjnmRkGEa",
  "key24": "3bRJ9DdfwFZmhqe7hcnauJYFQi2yY6yiyNx1vdoGUYNHJ7gQBEwZZSMs41vKdEaf4XbgLHnCXgksaHhsxoy19bYv",
  "key25": "3hXViJqxoUmJAq3aerp8S24ZxzkxD3RcQ3FRAQKmbTnU8aV5F9UiKWcDNYm1vjXux5qfCwQQTHvVnBJLqE2jNqKh",
  "key26": "4hH6Tfmr6gA8djXNNcSwuW6fbx1TZ6RURGS3pyZ3BuDN6S2nmA1Kt9HEddVM11xKoksjrxS6bCyogU6ZYVgrLET1",
  "key27": "23huSkgxWQtgnoxMRG9JuDteBaKdjrw8j5sgYt9Y75m3MCgnfHbdKuYEJdTuM4WED3HPtwZzkBPSH8j6dt6zHcbc",
  "key28": "63rHUpxar4rCSV9FhEqo5ocDD6GF7Fer8JBzQUeLs7udh5RdLy7b6Qjsn1qZXMh51JFXMTtZPd678SUHwqq3nkua",
  "key29": "vN3XV8caVSoHnVtAS3kV5P7ZFVt9t3CsxtPgUM57G7Nwz2wCJLJr9kqNrsVV2F6usMmmJ3Zw3RnopTcMuRG7Anj"
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
