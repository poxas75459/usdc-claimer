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
    "32etcL8cbNYXRARuP4eG4M3XaPT7oigMAJofUMEyNGM55V1Hy1Nxn8tvjEAhg4d5EPprig5qnom3bGUK6Z8A3Exm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38SNwrQYF3j5u58UjBs9ds8dgkJxRiismNVw2kBqtrtKnkgBQq9wnUieqRCqsnaJyvhxaoyG9WqZiga8heATQs96",
  "key1": "38P2LL2P5FY4pwBTVZoVxkCqgCD3ceSHpfbpMknQD8L3hMfZrqRoE9sTSrr8m9UFZnCpGL8tWds89iJKgjr8Z2fV",
  "key2": "66nhZALsp3eYadKZHu393ZFX4cBM5ZnHVZeZyz2kxab8SoJEgZ6HgwoFswE4Nr6DotKxEzSkiwuATwNzLufFyrni",
  "key3": "5RzurhEnzD8YCpVGpNqFEKPzz4gTWx6smWtJMV72tDgHjYDUcikwJU6vdBdEB4hmfsSFiA1mohUjFUTzqM6v3yCY",
  "key4": "4aRSEkSr2tcG448Ah2AurcZcR54d5G4LXxoDFZczrVao7fw7qKBK7FMGMi39NBLMrYfLXJmWWvwe75EAnz55RjiW",
  "key5": "PBZzdXoccqdvyL4pG3kEb6LhrLibPQjGeWuogostF3erBEm8zfHbjj7AZLKHBsikzPYj5FSawShFRiFxYTyNToM",
  "key6": "2DTq8fp7NwDtB6eVJZweZd8TExFSKDsTLhwPNAqGnuT3pgun3SYvktkFoeUgp3UHsWG8SvKMNCNyeRddCRLLXorp",
  "key7": "3vq4Y3YWCBZrgLvZ5wwoN7jwx6C42h6ZSYBEQNvejYV2L6b9KEwQYLZw24vvtyqrm7dGYFpfgvBCdanPYuJFjHsr",
  "key8": "2ucPo9d8ArbxjJgpfLVQ8nHnz1ZJKXjjgNBbnqPLYMhjai7hNvrkZ3SDUVKfwtnvnAqEwGQZcbLsESixXPjAP8L2",
  "key9": "58Xq9Yem6yep3ej8jqZNJTELiyyBP1yr3oTQkadRhrAM4qSdHrybTCzaEWgML7H26DsMLb6oqDejPGV682NU5YUu",
  "key10": "5qwvV1H4ebN3V1N7HbP458KQkw1s4MbCAom1o6Ac8UcN9auqjX1eFNoR3P4keeBEMjUdsLLx42aZezHVJYARC3Uh",
  "key11": "25v3tSc53xbZsRCCMvWbf1hyAnFMgPmp7RBsZUkK6va2jvP2woo734f6aawB7tsRHA16N2e4Kae4sFZ5285ChA7N",
  "key12": "4MMaupNqhsB6wNrze3htFk6VZz9Z8ZLypTeVkjaWRjTc38Nge7QiiX6knuvN6paf5ouP9HCmaABZmTSrxvjppbNb",
  "key13": "3qusca2Fb1hdEU2wsfYjw7R51w4SzGVJKyCMrT6ep6Tc4RvfHkzjEZ2fpfqNgokcaRRyneTnmXTsyuXM66kjQHLZ",
  "key14": "3AuZsXgMvth8r5WKFXjuAxeLXEydC3KYHEyURur55rpV7iC3CPQc8UZZznkiFcVoKov1Ax26QGCq2xUvVpUXmj6c",
  "key15": "Gv8JMUcFNENWvHW1LPVDFLnrxNLbTUY1tv3fMC4A77Wns26nFVpDoCsn9eqhmfVdbgDuEpSNDk13VDxF7C7bnvr",
  "key16": "FYJrMj81CQzxPPH2sp4YcXCBd7c5PSAcDbeTGUy1YvT4MSByWeW7MptfMqxHzJJNxW4CGvZCqSW1fdmGUCWkrhp",
  "key17": "4oGYLSA1hh4KvHYDbSdBccumcm5f4YWumoWNoaJakL5K8Pisx9XDxEM7mTBRvUKmkXs3S22XhqaA2T3jtBPdZs8w",
  "key18": "h1gVndqXeuYrarEdD855DWgVBfBbaeBeq7tmCdwEFBxZFtvkDhXDFUWJgZWwvDwgXjH2p7d2zCxhWD7C8H8RkmE",
  "key19": "5fFcEjVkFL3kzjzt7vvuFHtfjKZPme1LmYz261wQ5ZQZ3KcfpvCX9Fty9YuPuVmYJx9WYW93ks8pq5Ef8QYUp3xX",
  "key20": "614x6bqYPBYSnARVNg3LPNtLh6rmRPBvegxcKMzqmwbKaHrLw8w9m8La3d7zgAumBEwZixWJdHpih2CQxr1v9zdM",
  "key21": "31pXDu1tji2W2J7DfAHRGq4YpWiXkdrqRPKXWq5VRyXp11frzMZGBB879aTevRRi2UJvdnL52bGjgDSRBwYG4V7D",
  "key22": "58Wq5Uow68kahqN3Q1pYHMuUE1TqHmSZXzy29HmNNDAJrodaraiqAPjhbTtU6YdVcMTk2v26M1C2vyeDgVtmJQRT",
  "key23": "396BuDPXxawgvPDNZL29Tde73gh13ERn4zog2CrJ4aMwzJUb3D9Y1Mt4EGjdhBW3T6z1GoP9jLrvGsjQrudMMXcA",
  "key24": "3DvqWGd8E4QDgPRvCpBFobpgCi4Fj4F7hs6oEVmo5FRfP18BB3UqiAWPXSmggWHhkjLQ49JRh4JXqc2jsEkJGFcz",
  "key25": "3S2ve7cvxA1YJxUYRCcv2HxFwmuizhYs4EjNFwuvWbZmBaa5WRLm4XM5Fj5rEem9V26KrW5bE637x4vDT7Z9Btwd",
  "key26": "55mrLDLXCM6ZMxwMfpCyTCgsT9R7LiZjw1ASJJ5C6du3c4PUeoxMDnc8NW6qKiEqC7jGAro4k9SvzujCmZWwMYvm",
  "key27": "3cWPEeGG4giLkFPorDRnkQGyRf4W847dCFMucqr2FNRg3wWXzTNynNBKDaj7FaSsdEwLCXp1dBnpzMkH9pkfsvWx",
  "key28": "4otx7Y7QRvz5bBrRdz7y2M8aaYUsgfLUpxFk7m1Yrd2HZXiyWdcsiPcWAViQ9GzfdM3PC4SNXZfJNyYfL4L3KGYt",
  "key29": "5DgP4hQo2PQYWHKcDcT7QFbEvKryzeS2QRFFprpJ3GfrpAncSj7irJCVUw4AHepQVFHKDNwcVfUyD5X8yzKmoWb3",
  "key30": "3TdiKt2b74v1eVsjMxsjMttVr8ka5y9J2wSAkawR8E9YAghCoqd5YyDSZFgjUJHHndZn6UhvhdZDWZjaphCurFBW",
  "key31": "2WrV3ZYzht9zCE61v3AvDhi5pGELgk9t48oygRmTBKrVgMNDwj7KZaEdRkcTyMHiaB7UCJVbzBJfLw7iyaYaFS3K",
  "key32": "3Eta77CYkDpcmEDd78BdfBVNMcxrHrjjSjSuoBk8z1EpmH8QQK8TJzo9xmwofgNZt4287Y2uhV8VST71AnoX5DfU"
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
