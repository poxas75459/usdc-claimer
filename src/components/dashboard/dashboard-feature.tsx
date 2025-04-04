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
    "fcbFCMGREA8TULswjnkpgTboB9XwLEfWzzgLoB8Qi9MtWp4tNjW87L3gDt5fRRkxX7gyk6VNhfCTMeJZnBDnvzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FNn9UM4muNWNMPJiSui8mDUd96JQHoiNRS62v24dg8vEuep6hDWHz1e8UdfecDAk11A5bfArfqK5BdYUKTn7Yff",
  "key1": "2Ex7hahw7yJRUCLfK8KJAjYaVcTqMx2XhMuYFKX8YrAmJRh3QwcEJjfV2zh2Dvb4pFkJUbS9rmQ2hAYy4gSw68J6",
  "key2": "2Dm8Mzwuw8dAM3pdmWDJ4DxDVf9hv3QfDeYidxAdEucM3cVSyZw4mq8qPLnizotCQeoFwZ6ZjhvVSg17Ppg9e2kf",
  "key3": "T5KDsT1Mokk6xT3FRVYLMCdZbQyUk8M3JA4PiqHbUci77ZD2ie8KGyq5n8JKjSDD4ymxztkAstEzyaegkZima5C",
  "key4": "4Wv9DhNaa36yWJNHLxiLD4b3JA4TAhjPBYj4FyC7z1vJfkCzCevx9XveXXcGM3rVN5pwZsrUiFxfpaqPcYXq5NHy",
  "key5": "57hxAWPst5rDLVFHSkfKpKhUtQZzb68ATX4WQe83CEQNhrdFHNH6KU26NMTK1pp2zisk8arstXWFkxpNjFHPSzyc",
  "key6": "5pYnYRKZQTmpBTcj2WnMY4jNRMpDYCk3g3cWW42veaKP12dDemNHJvZSDiYENXZ3qGA3SZDYcfFYPHCtopgPATxB",
  "key7": "S5jRM2gnm7womdFqgsfx8ocwGzVf9RTyVYR2bwswNc6N6wWc579kCo8MgyAFAo2RhCMNf4kvxjyHuk3imSATgUa",
  "key8": "56NZ8kHjK9QrkNaVgPQbAxXDGqWwXEU7GiM8mTw23mwnctPKo2sEdWyqGTniB48Aqz2Hkbhje2goviGBSFYjXRBq",
  "key9": "3PgD7hnGejtnU9TKwjiZU179715MDB5boPRiAeB5fsLHgaA8eQB1Rs3MqmV5PdBkybHaPkK5u4ksECqxbcmFiUFj",
  "key10": "5BSXBh9dXVXzny7fzjQ2WjvPwp37tpYSsexziAciEs1317XJH8KdBFt4F7Km1gzPPssrbPJFsTq4MgL2BfVVuVhS",
  "key11": "4g8WQS1eo5DiwLtavNmxQVQscudVeNv4eoLawdAV4McdhzGtUiEQcw8AZ4nNAaSo8WqRLNGUBSofrzxDrVG2QxRb",
  "key12": "24NLagnrTWEFuijpHYVCqzycF4iNEVnuFdpHCfoRVn9MRnw2dxaRUj1Q93NbxSiS5NLwtdNn12NWfemTkhQ26gQt",
  "key13": "bhinG6i6oU9HtYPd8RUJ3AXrKvex2xET86aSjTm3TeGrUBYHMMbATJyfSUHdSKkKchk8wgbfuCcRtcFPYxvC2EA",
  "key14": "DHqB1mezvNkpQWYqrnGNDx7M1qRK2a5AoLKjTSWCmoT8ehmLjeXUybGB1t68tiRDJxj1DHa65DZdbWzGpXKHV6g",
  "key15": "3RnkcFbc6TRYZwEoZe8NPhHp2K6CKbc2bnm1BJRwjCcCLCeWzUt6jj2HKAnTH8ogomdYySN7CvFYEMyjsuVFA9jU",
  "key16": "4e5VTqRDcZpkRNMb2CQxxYY3V7Y6rMw44etRADV5PwK9udYJWShEWHiNM632uXdzkWPzQdq1Q9ayUqtDa9qePBgW",
  "key17": "35q42NcjGLSaBueq1Xfd9rMYPXcnyPGzSCiKYiLNynM1hEMzT3FhrindvdybRAWH3mrC9xyR2MH7LQoA5Jt5b5nT",
  "key18": "yron1rcXDjnYKhTebAWNVYiShKNfjYW5g96AhVHReifD4d3q6NDaG5XFopGLZpneqRXofxQPFs26XkhNpZfQNPg",
  "key19": "5fL5eWbfFNkj98BUkKW9rwZQtP4AZZNiPCDWYh1kzDsHDeRaHcYbwLiDW1voGNtV1919cPS8u5GEkPyDsV7bxL3N",
  "key20": "4xEo4FGYEQr8aET42yGz8TiP8incoL45S6F478RBRFGjFgBp9MeY57TE3yeJw1knDxtgwnbffC3dFdnUToxscQhH",
  "key21": "TKj6SdHTDVHXnL9n58jmp86MJ9hG9Jr2nm1vdNdvjAN6QHoAvszrFp1B9USfatwKp4kivAcAiuSmuH3hpXtXbuY",
  "key22": "3dTpQaEe8wyPpRM8SxJTaHjUYwCsCYMn5tfwbBna7Cvr7ctVRktmS7VY4Su2zoKXnAszNwQC7medA6w4dRK8jamj",
  "key23": "cR7qQnjWd8tGaQsUgWV44BdtWgSLMbtimY4WxD9MfeB4eDFdQH1wDRdeLaEkQVGNksSywAzrk6Yb5QtMSV1DKoA",
  "key24": "3FwapZX7DFvdyf2nZ7ztX7qqUVWvSXvQgmiYoJGpYJ1sQpKXBskZD4cCa3JEAziL5CsvVuNqfLtJJctdwgYLkmvW"
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
