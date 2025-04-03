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
    "5mqpC67HsGubqXhBCe84Nac5SE3w6Gzb5V2MtnamxjtRbFbRJgvyASK6LCYcKW13i5R5656Ao11xnmnDTUUAgZJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tK5qbqQ3PYKCjcvsW9mQfM26mbNyRccH5qgcyMi7Pu8p2JVnk6ErqYxomYcGntqmGaqZr2LpjSvJLNphRVY9iwr",
  "key1": "HLYf6LbFu4PRoNAJFbowCQf8kZTMyEQk7n9aHz3aiPLemrMQmvgbTV4ArzLnrY4eSFqEovdyZ6No9iYUmHvbNBr",
  "key2": "22A6FFjQeJyZYgL43LNJXgizhAMiB7c5TFHBCxDqJzrK64DtMzvM16NjzSiYuGVjqb4euLppp8MidtodKt9r158G",
  "key3": "2S7wWVWBKXf1fhkaeHpANpSxU2fJS3AE7N2uauXa39JQH1zKJrKQThB2VYMQszsgHXyG7EHFjjFZpUiVMiVAy3WA",
  "key4": "7J2HMYR8taLkFYfUkUnVPA83D8w96qoFfYqHYk4B5TniSsT7zse5gdvdUpq4aoAi1ttugQcjmEYcwbdipXE3Nj3",
  "key5": "4m1qGK8HTjh1uNxetyxMQkZF5PjbW98KgLH7T2ZtHk22zEyz23qkhccyFVpUeUgWKtHGaWQr5ExZoENNaQ7SeSNX",
  "key6": "4M1qBAEAWESNZZ1vo2Cu4QLcL4HLjMfSpbivJcXQKWZTS14af5ygh8gVn64Ft595zkhUDVASG86jNJX2D9AE9gVv",
  "key7": "uAz3LpD6zTtbUhtobmbTGaYaXSNo6aqbYsme8Ykust9ARAhATd8ihrKyTQWH2LgZadw8AJHuECgNz2QU4avhPdD",
  "key8": "5nMBQSczamqWYdKH51CwQTtmuLScj3mSo1f1hT65vpJoxfiiedtt26DQtAgWLCtZBhWBMBAhjebJPoUqH8VSpVaB",
  "key9": "3NLQMFPikwdyjv91WcpKHjQfeCoKDFasuDeSW5DCtet9oFGGLxoZJF9wPLZGaeAeYjQ4z7TZ2Ks1d368TzFTFSHo",
  "key10": "3mYih6WSj5V4Fhn3BEoMnGJMh57qFLRaRQ1ivzCZLqAXqEyN7LcoCaoWK7grcPWYBovDuSzRn3F6VDDNpYhtfRob",
  "key11": "dYQD9y9CfUDL4FjjyixcsZvVjh48aEYy6XcwMD5jtbNw2n57r8J5LHDDqjr1a5xCUbGyniWjUrrfMbjhoC4EA2a",
  "key12": "5HvcbjaQ4mcpzb4BkNQZrUhW7m1HhwNRXhUHhphBL4fcjcebsUFrwkyU4271RpLaQL1bGXtFYPhNr81s7pYaZpEu",
  "key13": "5teDaYiWxgX23v3TKqnPCkeVGVgzTtnk2F8q5bu7TcKbKdydV98FNx9k8Gs9bAKxWeJAXUJi3fETrT8s4CLfiaep",
  "key14": "62AZhp6KZ57nyanMBH7AnPq4mx6DqjCgmURZwSaHZtCS8HPBNybmFRNXWRhebEpX6ioqxvBa6JYckrQYQJGdyUua",
  "key15": "2YLSf6uutNrBq8ADFupJAef3n3ErHKZwFfa4g4yviNjd7KoNp6qrHAEcbQ8Jd3RY4TmUJ8rW7HhGBojkgvSi2rnb",
  "key16": "cgetAMiTd6mmJUeTS8eAz16oa2tncL87bDBy38DfMGKwnNn8HG1BBTznaFndUSiXyYmu4b6MeeTAUJVqHrFKoe5",
  "key17": "2qnbp6K6WnSAXYnL3NRWCNn6QPfT4dYAf62jpfd3HbRXoweoZkk3MPobhm9wqQ28yJegjLdX4jj9ukbz98HpAt7S",
  "key18": "5qr8TmxGS2kEAN5NhpS9ioTnvPZzdZDrS9pUTm1qMvKNFEWzfvz4jyijG4Pfcfg3xDi8z8CAkpjNvHdXUVgvG3Xy",
  "key19": "5xYHrNRBkXpWdyhzxYhTdF6f4L2ogNVXBfffZEc7FDvtJdHF3doKswmXGyBvRTDiGvxbnwaqg7hzBs3rEVhHmrS6",
  "key20": "4dm3Rd94rxZPQQHVfhK2yyZGajyoD1mc6tPsS82rzeedipqtzevfCR3Bt4QmPdMxV1GSmGUK8KeKRDcWbzPSNmTv",
  "key21": "51G7kyVexGsL2agR4h7Pv65PjoVbwxSPaVyRiPewyBEH5cwHqC1MFAi9HDBMRPj5wzLQN77zaSLUtffArKAHEtFb",
  "key22": "zubjaBeejfzJrsjzyD1zxKR9U4HabLpq6maPKibRoZmDDzvjAxUuB9Y3gNi9APVgDRN2LhcWzAPCQ8YJxn2fVhe",
  "key23": "3vM3ZVv2Waky59KBwRRf2zsL1vqxsfnKUa4Xv39TvF1tVNmnz8p513WhnUr5ELhgLwULwVSJxfQJRYU9M7XRnCpQ",
  "key24": "5S5bezagHfmVuZoQX9F73K6L5ZsoSqeAQKMxVntht5vyeEeok1hDpWSBFts5pLo9w1mb3GrfEupyMX8Hih8i7E4n"
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
