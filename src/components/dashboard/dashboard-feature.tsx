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
    "2fb8t8gp9YzwUYuyk62uyMPRPDXoynzrBbRpo9qWt771htqgZzoCVhiJvt5z93Kqe98Nm6U8erGw9bmvwa3SuV82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57uRF9A3eMA6evRRtEHmVENR4wAqZsEda1VHe9yqVaiFxXaMLSDmiGufLqWvVsupUeaPcL7crSxSu4EBmZHauAvs",
  "key1": "5GZEheZkEgUky3FuG7zNSzPguybuXJ4EFjwrhBnmnuekYn3utmYQQsKuYRytY785NRuqj3RXuS8StafxjcNWZiY7",
  "key2": "2GNAKVZUufNtAQoQvzxBsN3yqrJkwhVUpuAN8EVDXiHkQdFaM8wStVpmdLZTqpimoQqvuswf3gbB2ivysFJjitRb",
  "key3": "5PGv49woRg7t8ESyURUbycamgHfn4ibbXDTYYZYoBBcRJxueQN2iqTBJxdhcKvT6LTK1NAFyKpNhAt9BcqX66LWB",
  "key4": "cw4koie39hYK8Jyx5LaNtVU1T3Wsk1fMbXBf1YQSnTfN1gFFFGmMBECdnmpJUawo7UKizrUWpEj23WChrKzcwbC",
  "key5": "3h5B3kjiSiAXkXaR91iJhMdpPx5cizejyjQADNRMQ2oAN581EiyxPGJLB5i5GaoKrLEzNLg6ZPapDQa9fWVzUSs",
  "key6": "i1CJbbXwthHhPbTj5JgAohHNedFqcM2eshVASqK86kQmnCLZntvSHovSHMgTHgEhQfpNxgdt8BcBhvca7bgd4z5",
  "key7": "4wuiM3xekmQBQ26b81qRz5KvoHTivKAz5Vptus5g7F3BjN4Rss3DStGvWHAzmMM77vSR8ZX6eWMYbdPHroMMaCDK",
  "key8": "5jzHKapj7w4QVtruc9LX5fdQ5jY1TpnKQgMDofXCsSWeoP1wu3HBaJv8bu7sFHQf33xxi3LNs1GLQZ1z5NyUfaa3",
  "key9": "QpoL9xTFGaEFpKgjSo1avuUDQSJqpcCSUw5Q5mKFHPobMNQpj7QU6McxPMsvtSGEcNJ1GwcRVXaMU4aVy8u8Fg6",
  "key10": "62ZEhFRBWga2kMZX7Vz5mybLPeYiCG7WcahhiMnxAD5fTmWTmpSTDj4QCsoYvnKhNg7ZTwnLy9JHoimpHNsUxqED",
  "key11": "4YenwB89CfAzi7bajiia8W2mnRsBLwFqmCFR1Amu7wLwpQmRsWjuZCVvuxFXcYzoesmQf9Z7UPuwE9jRkj9RmSfA",
  "key12": "gZrfvbSsjUBarGc6HATnUk5xjGSc3YyedPpA68HmiGmpYCVFeXpxPyNDtShGThJPKK5n6ciAUHQptzbR3MzDKcW",
  "key13": "4FddNvM9MYJxwxqVHEyGtvNiTB1YZhtPdq5wXWpEF4L3kZcP62uBn9gZb8An4uecwmBz8edy17toGAEAxNvZrjQ",
  "key14": "3TwEa1fVxhBoqRZXWGuPLqDfyiPp1brPsUJVaiALktUSZwZqmDR5UzRz4QpXYXx2mBUC22rUGSdUSE4Xu8M4AV1m",
  "key15": "2kKLeM62JCQdvFKmJHdNxcY76vyuCsNymYkZGqEUTXfCBZsvVrAuryrVCp1iWoTu1wGmdnxhiDF3HfmptMQbi7uq",
  "key16": "3FwyH8ME45G8FuLE6VAG4YBzekj1AkspK7ix4eXFrrNt76UHEFD71jjgAFNaQbEkmMaBndyRcwjtC6k3TeCwZBx4",
  "key17": "5GgHuUKg8MNDxzV7h5gdfvka2PWxXJB3gvAaGio9rE2GjXwvaHcy3LgLFPrsoNRxf5JUfduMYDLu1B4FUyMDYyyd",
  "key18": "51LjJmjWp1A9iZ5Y3c4gnfPAyKQER9L9gz1GtNZeZUy45Ds3W7M9ct4tiAetpXcgNkQzKuRk3iSQeby12XfXNtHV",
  "key19": "DE3ktdvVxEC8gVRuoAWwWDfGirr9TDAkody12NCRtZCEufFn7dBmKR3rcYhAL1cA4YyJbBsRhmzJM3tt5MMnPj8",
  "key20": "h6jeTTtFcoNmcjnbfWLGQ5d5a4HXcUA6kb1oeK7DA2CDTzMSpXxw2SUqwDLjvi42CaSLeJKTv17iXCnVJdRhQjt",
  "key21": "CAUNcrg2Ki7txUPGoqEeRbGsprWdmwbzFbzewaDHsCpMHF7GyidT4y4XDAAY7LfLxChbjiMr72PJhERCgyhPq75",
  "key22": "5YuQoXfbGb74YzRQUZEVVhkMawPKmpDf1XeVVs8d2LYuToyd4CnzEWrJ8VDHiDRHDRCwFbRxaeC5WtMWC2NH66XZ",
  "key23": "3WUUte4FYGWC7mqDtepEdwrUwHuQcUHtMubPkh4yMYpj7TWW1StyurMkU4dxHsVPUuWhCpZuPfaw4x1vU5daa69X",
  "key24": "3fxkVCVDKva68ZeN7fFzjsAL4THrkbLL87Pitv5QMwtaWDr7FGMnKo2jXPHtmaUCbUUnKXT8mPL2pzCCS9PjNxDU",
  "key25": "5n7xhmmJR88ii4xvNUU7yRHtXQzSVdZFReq3dX9tg7cF2MY1kqNMre2HPMkSGEuSj6gWVdSZ8A3PMDVCbYq8rNvM",
  "key26": "2cHvA4LmbeL5WpX8qDEod9R7C9ZAh1yPcBzTxjGnYBu9N6uYqvGc3Zmq1k8o3ZA9fBhEkW7zd2ipWPgtKVnXD2a",
  "key27": "TRB3q9Mc1Nde9X7Hegw1ogDjveyccvyAebWJADVVXd3gbAzV3m29W7VXZ4Nv6yRuyhe254j4LJwmqWR8P3Mt7PF",
  "key28": "23N9HnpADbQwWtdRAhWxbcEnYQLP1CjoYuHkjURe4M2ZagUFJj934pCg7uGJRQkaiAnrjHEhPPWjQNG3FgohWTNW"
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
