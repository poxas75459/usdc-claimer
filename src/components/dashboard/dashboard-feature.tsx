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
    "4CtcEMY3h5iooFUrvDxMnHx8myggUgxsfYxPr29MuFajdLx5pLhkT7AiLar67LA1y4VAmrsKwQu7GqRaB3LCbb2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MkgA6spHum8PgAz2wu6qxeZguVoG6XrHVyfUUPQ3PSxcwbG9ZQdqWmeUdo6at7MzN8tfpCohZJ4BdYupqQHYvTJ",
  "key1": "2E67cgMWc3gdwtUQqk967pUc4rFJYuoAsvJ5URgmxfskAnxBjHxE8a12SDZZAyUTLjS7nF79EuoTfmDcovv2xiRu",
  "key2": "57xaK6LkfvwVjLBV5X4Gr2YNwHT11SjM9rbVyFDJBvBNq3CEH5T5AAcNDrSuJXSFyezviFyfxKmVWK2ysLLwKMnn",
  "key3": "i11HZQFgWXhHy1BMZVrbX5yNtWPd5jfdNxTQA2tq6Ax2ejWM6myKY1EJ6auaPKnonmqY7wE4hsHKosr1T6cS5rE",
  "key4": "5fWzcuNJ4cgoMLd3Fy1RefsbRsjS9by4LJsx7x3fx6ENRGaZdTZF5goMnGV5PzK51tpAnoPhGuQe7VG258wxDQcY",
  "key5": "2frmHByij4o9Bm4yVxUwEqH79Zpw71reCYHd1pesWMADtuzLfCo938sqYwttJJJRKKe9yQsjR8Z13vUUa47QzGmD",
  "key6": "2H3UtHPjMyZXDjQPCHuzUkDBru9DFdpfj1XZAmRkFUDPfqqukhbm6ost8udH3znvy3SLNMUuS5HaFxoePDyFg2Be",
  "key7": "39M6TTYHJdhdP8AVKM9uv8c1LiGHzt6ooT66VbeqBZVUMGywK51jmyXybQvn268shwpwLdAZwY3Cb267x9tpK225",
  "key8": "5W925XzcxX2zjgqsowE2NApRWiomSBAdbwN33hCxfKpWjw4YRA6cLtUiYVdikVBpCFCN5zFgwivMJYe1jr53XQSb",
  "key9": "pggDZ99XVSENVNDoiD2DD3y3FAcUgGsEKNmyJ11jeuoRx1NFLvDP5ZVnd2qf4o1uBRo8TvbpKKMNDSDrVmeDgxb",
  "key10": "57kBJhDvXYx7QfCuB17yZEd7W94ynAMQcoH5xEzPyHXFKbfhg2BxqFSgJTT8WGZzn1mtdrKGWpAfB1hMxtzDn1Tf",
  "key11": "3wDwfvt3puQg5PWfBPEvWWUVLryQGhJA3ZcgsuU8Ci7t8ryvPDmB7YguFtFGnggpZQMq8wZgPJwB5Ak1isszqiTG",
  "key12": "2wRGWDpSw8dZ2fcdQpcGtzG6cGshbNd9d6aUFg3cx2kt9n9NraMXXykyKFJNscguE8xRjAfuTgd5YrQCv2cxyxeh",
  "key13": "2uAxAbUiSL764cPYEPzSfzQ7EvSwqzbK6q9owZurxKXpFQmYUZ8LbdTShzomi14psZp4yyJyPL6izYDtUJJbFa3W",
  "key14": "3htHE2Qq2qU7S98HmUDuVpurP2pV7mgYC5SeKkTCLKfcna8DzoskkiFQmPvmb9ZcrCWG43NaXZ4Vp7tyf3QqEQt3",
  "key15": "hcTVRhwz48osAs5NfPtbVoZ6cddQGcLsbgmtteA3c6hFF6qRx5gSALvcYTSnRHKGMRjcCfeBqznVJT8q5HveMQM",
  "key16": "2z2qFqSG7rZT5TKSEz23nAaswiAr3QAe4xbSaphwk3e1GbHdeShtoLKPVLSyf9HT16Nx9jfcD8J9Wa5mhpTFeu1u",
  "key17": "2tpFv2FqMAUSVdmzYRKHePR3tso3rzDhpb2BU1SkQMJTTG2gHVKHmCToPmGmP24QxQfxn9TqjVezyq67TkKnLBkp",
  "key18": "5FRoSPr6dGTiG4F1zdTPwypn9vKJfcaFXcKADFgRGJacZYbLp5Z9jSkBU95MfnYnqvy6Q2kfj1wrxJvpU39oKG7u",
  "key19": "5RHz9SdHemYtofrnSgCD33zdSUpfBxgdHh22F5aHfSNAkgaqk8Cm3kJFgGftJENhLhHoyj8D5cfGLvdreVehHnZa",
  "key20": "3UWmGQ8qyCzyWqwrZKDz5rqnphEUUj1nuBrSEQf3Jf2LcTzJTdjKXuL7tLbCeyZBCRG4crQcSMbJNeXAzKCSrco",
  "key21": "oqpWYDVSapvNxmFL6NoBGevZFXJmSX36DhhqCTfT3vqBEcqPt8Djft7ekVLZaHEiYtKHwkB8rX8X7V4mqvEaZvh",
  "key22": "4o1fWYTk5DN9uaas83xU4mqhsqGM5nCgpCVYRjvVPY1yqVTsnaB5TYcacKqVTr2FWKsdY7Urz8jQTRt6nnSyziTE",
  "key23": "279EtnmLqGHPiunu5mdrAMs8upnDtJQZiUn7t2rRNe7Eh67PhFRGEhNvgxZPNyQqg7tgL3Eu7FKkESeWvQqqUxUb",
  "key24": "3epq2q1SLA6tBsbCBTwrGE9oaHKLtF7np7fSQeDmw9yg6oXAHwSXGNLjWY7YqCfJn54RT4PVZYU2zeEkWjcZgCTe",
  "key25": "5ZUVnthq3wq8tduzRwLfM1s4rbTWLMZ2oQTYnA2XzehB4pHWzjDYvhNQRwadEoZUh41yDB2qj1RHoLwQs3WSFNZQ",
  "key26": "4dvmaVVRVhBLn9BXyYsoEd9e2aDoZMYNpSDQ7yEHbT6jnC53ybfH4mGgzDfcepBFVk17efh3rXU7UadmLWSRs4ew",
  "key27": "4JMPKjDJ3LK4MGH3jagFtJnPgjuTP249acSJcPtTcJzpBcLWc7V2weET7VSqTLzxuvVjNp758oMbzK4oDY9jZYZA",
  "key28": "5E6KKfty4h4kQvyabgaNPumifD7zN79R5uZEPgSjD6wFca3a55fMAnvs15A74eAMH1DvYCdw5qJ1tGjrWh12Bca3",
  "key29": "jAeWn7mqmmDMApJs5H2pBuUxN4D8Q6siVZxVABpF5WiiwgG2j8XLiBRdWo1PPmwWvcpW4VUox94iSTYKJqmxHU3",
  "key30": "4cFZw2efoF2Ww9YK23vw23NtZ7BGK9xNSa3bDRXaSouHzQhaBD1kXaGg7dgkj83Zqbipm53bA5Wmbp8kJwKj3udW"
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
