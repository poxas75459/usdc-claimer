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
    "5UgVN6Mt2RFCGJ7poh1z8713R8Wb88dTz25gpXUkdJf2DkBhgyiHtardQkYZ6QvNqB55wtvWgrBmbPXpwVDqGrwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ucZzJw7wJvrPE26kUx2aVBhrZp1bV7fMfpQJhz1Fpz3hh8cx4SRazkB5QHgJRPnCvxbhnWrLDMKETTimwsRoixM",
  "key1": "XdYhiJncpA9FnVrmUNaFjUXsPZ9AAHn8QHUWD9VdwoSuMoQecmiETHuy1SZ7ddGeyGVD8TDwbjt8S55VTFpqNmz",
  "key2": "V4gYvDh9boV2oZpY9NTidGDD97zwgagp8ah81HVPRx2F96trNhHJrPJWujekT5qNgtPWYQuR7ZtDjLb6bJ8rF2z",
  "key3": "3nPH2wRwQxRTmLuwYFSB3LezY8uAsiA8Hbj9M71kPV1VDkipyDQJCmexAcY3Lk4pTJiDbNrACZoyCJkKuu1WQ3Nj",
  "key4": "5oUftdrmxoaJ7akoyXJzSSVpXxNc1xcwwXswqQvG7M4fVLEcWDqF2xVYvWkdNAdTjrqd6aTyoLKgsTtpaAogFcfG",
  "key5": "4KeHstPDuUE8qDvGtsT2kRo9vAV5hupGkPi814Vun5X8tXREprGeMWcPsgh8i2oSWeGPWKtjYAqchGaRkVkfC3vM",
  "key6": "mX4QSXdU7NQVxMLVD3AAxrjTHwxtPMzk7HRCprZhEDpnGAJ2bY9VTyeKoz2xPAiwYZSPWShTuSDYBjRDap8SgSa",
  "key7": "43NxkxV1hdtmA6MPVAnzWRVvoDoqeUCx2f5vV5gBTosVaXa4exP2w24LRxwjZkuy4K3nLKbrCjmLwe4XMYqhLiRG",
  "key8": "5eFuxoPFi7wxJC9FPFQVpE7aC6H7KRfo1ZB2n2y15adXdqTvFHfhKDLDuqhJzBV5agavK3XYX82Tc7LEt13nLYoE",
  "key9": "JKkx9cp9QEth5ikSh6ZTPpMVMvKupbZsR3jG3L5msudH5JhKdAgve6W7J2Ts6gf3RDNo6efZKNutsap6LkXQvKe",
  "key10": "5BeoywA1FNy4BDjFiZP1Wuko8NrRh5Ju6St3A2MhtKvw1p1bQCrLLifzS6rdTCcBQEKrqg41W85D2uz2dskJQaZc",
  "key11": "3HHsMUkB9i2knt6ycHKuMpxgfVsfXggURNFrH6TQXJZw3yjJfjU1KRukW3Rmc7v7LbpDQ7RgcdGXG7PjsdyU9NU3",
  "key12": "3p91WUckWvETPaBoHk9XBmw5ytiikUzt9yUbMyRFRte9x3G1xiJctxVpe1baGPMPcARL8PFaPX7hM3AgH51Xm21C",
  "key13": "2Rev54YkziSWCJGFBVxUkHdoqhKnJaA33B3SCx4hqBzNq1opK4tufxuALDzf6a276SfNSfvGFYGapVWXmUgP3U9b",
  "key14": "VdjULjQ7vMgcwhcrJvk75K3HCSLPtCE5vEyiiWzqghDUycYx3ifqkyXLxdhzoCjxnjocPDhNh1LqqHQBCwFEbRz",
  "key15": "4VMZkmMU1iJqepp3bkXd9wKFBjn3GfTTdLMgunxTd6BWrmv67JJHkBqZi1FRhFDUQozwV674TseVn5R3r4jQeDWk",
  "key16": "5fRRotrYWEHoeuqjSoQBhCwQyYND9Wqvn7EeeFiCMxENr7JQE8Gn6ft5ViaDDjEY1BHpUhCZ4cWQtNUPZe1GcQs7",
  "key17": "58iX7RTMLD84r9q6zHuZwoMUrAy6Heq7gpW48KXpBEdMK9B3orptMv9FRp2qwvFuvqbEzYYBRtDsPMgFPaLETJHx",
  "key18": "5aq2RgH764KiwQ39RwVQGyUozC2TPrVfVT6XSyYFJ1zD46EVhydeSUFmDrSJAWc6qizC9Yi6exABzi3EQc3NQUrN",
  "key19": "QwTeQ9rzegcDp19seP9njahyPF3zbyHjw2EUsbrqhHh1ExkcvBwtgSi9vLgwTaHzt12Hda2no1RHhspdYDKjCRZ",
  "key20": "XYcz2YZUq6fhuh98tfNf9gT78caNb6aisjXFcKSXppu58SJQFtdgcN9pj8Ax6zNQbFUimL3kaQfwHfwcx1qEoYG",
  "key21": "2hzVS6eifjBkDt9euDF1ww2nVau3HQcNoY9LGHEG6KaurSwFbUs5nWCSkJNr4TgTSWA25ttjPgS2T1TtQZAv9fQZ",
  "key22": "3pz9wsQDZdUmvuz2zNTWZNJzREzVvDNstBDCQ3fjNhZENVvKC4J633Nz9smVyBv8MsChBUcWT3iEZUgYAaCei4oH",
  "key23": "4XtQ2oHJWWziZkWFq4QBWdkYRVGF8cCxuj2fofSsrnnzaAp8k1nkPmoPC39NVCZuHPYq95V9tZP9PgKXZQ1UrKBp",
  "key24": "2jvzcLTmDCSEduuJ3zL9gzLZrQoMMyzndxJ8A6pyQoa73wuUfgqrTktsu8ri2kYooqcAcQFb3CYEoBTkjnqPwgMC",
  "key25": "2aTZTCQjuF4whLNSXSmmnSBBdXue8YoYhZL1cxkGbq1YckBfm7hxjHL8EDh7LJUw7eF3uxdeiLTwUgHhsjrhg4UK",
  "key26": "51VRaDFc7jHFiBoK1FUp84hQXMbUVdbVGGpXbZkfGxcoN3z9AzMa5u62LjGoHH9cX3jMV19MLe9p65YicTDeNPnf",
  "key27": "37PKqh97WakLKY8yL6dDWTZqJtPMHQCVtGSQVv48FCxmC4tKPVhvNagKPJzwYxsDQNhL3AxDQZoLpygcN2r5UAys",
  "key28": "Dtin9eXtyE8GpJSbqepmaxeTQNDDfiT2XaLE64ufNiVm8MzEhTvU2ny4FFA64SYRrQT6XJrHn7eGmB7sxFSBdn8",
  "key29": "3SwrZrS1nyVHz4WmhTo1bafReQNgZj7wLy5bSSDponJypnhSSEx3LrGwWNTmNjpehLtXcMmPXL2hWc6QvRzL6kaC"
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
