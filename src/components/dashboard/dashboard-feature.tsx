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
    "2Yvhp8TT6DedTy8QSFhjvfaXGUgKCkpTWQzh8wTvfKa8kkdsKxdo9wV839hKMUgDgXn22s8j9N4wSmr3BMLtkUDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TXunSaZLKEcZdGYsSHKUjGe5q8ysJCjnyRbrYsVJvAexuTjzh6X53xvyJSrJox8Bejnwiq9aZEvvXTg29WUF5az",
  "key1": "3ABgcok2K75ra7WRTSRXqVHU5svwetBZ2rgVjAUME4QCVbA9o9LAqaghm75CRiBKizUMsxpiTUUiQRf8EKvncEXm",
  "key2": "5wDi5ZqYMTqhpjsxFH9df2r6mpFZPFLvtf8y8kdnPJTWDXpv5HbkB8iH2L5ZkLXc2zTxwtKxB2XH8sG8o6Yyn7ys",
  "key3": "AZkJhDa9DrF9Aj972xBqEqjumziGrip9R9Eif6xuu5HcrwhBiwgrCZrPufUnSzDogs2HgQXPzMRkKZg44iPHehV",
  "key4": "4nZJmZJby8txRyXUcZfoLh8DtLLMWqsw86VsiqbLVmGET9YydscLKKRrepVdAB7EjbKWuzGwicZ5Z6LuRqZywgis",
  "key5": "e5PGknmzt8T6StdjwfzDQ4J6r9GPqJHeHo5Jfk2MuB9rkokWz58cX73gJ1vqDKnYYhq21k8Fu68kHsbz9yuaEiA",
  "key6": "5CwjwtBVMEijMmrh82PPjf1cYxrhaRS1ipa115EDLweRo3ydfSzpV1Qyri3PsgNYiAmAUqLf3YcrskAwy8yaFtdh",
  "key7": "3CQ4bL4zp71jBUCxEHfgcnQSfWvKmT9Dq3ux3CnoRK7jFfkbjQ1pBL6tKYtf13nPYE9zk6RxghxXH79jQJvPMn1n",
  "key8": "8xL5RaasVrNfdsXfn5sT6k4ZwUe4WkjnBoJzwd2sVtFpoA6wWskv8sJ3PnNdShRhC6YNH7T41pP1YfLao6xZgf4",
  "key9": "ai7aFJTkM6HwpgY8X5XzyqyRaYQSHxvze5NCohCZ2TXXB6EHSYV57mvGmKkSmUDwZpzRyGdnehdAedPmpZ6nxTv",
  "key10": "4w5VwvwFu9gTwgTngNMEUDPqvD7BE4JvASkZ9kNogP861oLCki37BaLWLhFqYpGF5oSHewMMmQwFMXkr5sbeLrVf",
  "key11": "4pEszKY1DuadLJyvysCrPTaJXs58vnEN87dV89RMazZdwGu7TF1aAArqXqLCEFPKkSE2bQJGizHbE842PPoBeRSH",
  "key12": "3DEatGaRV3kBM6ydD7s2c9b2M8fjkgVL5t47C2KSXDEbiXMsG3h4TfQBPPL2C84Bjd95irw6yZKw3s89EquTxjes",
  "key13": "5UFZQjNJ7j1TCMw6zqdUjWcpkcX8gunhhVZiQqUw99CfEhnUsEZr8SevnqbLpvNPTNJeeXyxEPQSoFpxANrC8hxq",
  "key14": "2MxefVY9JHjGpcpAoBvaHWcJTZyPKuirbiQAqb4vyMzmfY4DC889em98ERvnrSsVc9xDy5Zy2YQmxekXX9EprJsp",
  "key15": "3F1r3J8N2HtgCjSQWnnNAWvS3bBoT6afTbXQQP4hHqaid4bCafeqJSrLaRQE9DATRSonTo7bhNGFcGaQJqtgRoHt",
  "key16": "3aKArwpiwgL1qiysU8wR5L1G8MuVCcxjCGsLaquXRJeGt4DPa7JNJX36faSgfqoBzabdZQt8Xi9vMGzMaF6SRWgh",
  "key17": "5b2xLu2539vxmrqj6LbttNpdCnKqNUDnLg67MDkQ4YE48FmRHBrVsMRYJQGjQgYWvSDh6Zsfgt6KcML7pikHbLwj",
  "key18": "34rt9P1LBQq1KKP5h2u6zRiXU5YrE2zqpEeepYFWsjQ5ndAb1FT91HyLSzgs2SqMnNn5zTz8x5hFXK2w7GDriaSS",
  "key19": "414xZRZCo82jpudEGj34We7FLkwUWMu17VDGJrenRssy2RNTUktz7coKoKdhQCoXEshEHA3ekZys2ziv1J3qRFJ8",
  "key20": "56s4kCfLNig89WzJcnJsLz3svPCkZHevyq6JRPk3qvyNS1kajDkSBiq625XQrQKsxxqtGNPabe7Yo5UzF3D4eZ56",
  "key21": "4e92r55DWggA8QvLsBh4AqKP35t5eYdJhCHwardRB8cm3m9UTYT6EjMBDx8YAJYDrVhjCvJi34uB14mJ4hHiJwrH",
  "key22": "4pckRVvyZyCRBPvJoTdspgfVamHygKz2N3Uje8n4qHHE28UFQuVmHC61ix6QiY8NP6txDRw7zwV7VrryZDpwEMJT",
  "key23": "4hk7RRsEiYN48GURjrj7nHaeSpDBisW8oHNdopnfZhe4wUdUXh5CPzuF39noPZ62rU5hez8PFMSaCGTJoXiZCipq",
  "key24": "3AzXs6aLRtDScxCpEfcDNrtft3ekhs5xgWXNswzaiKiQgtQy26XTEieGbnTy63HtVSBJzmiPqhoT4RmFzy61NGbG",
  "key25": "357QWgeUjZaBJDzYojEcBKh4snbCxPFmW7TtJcniGpmQxNqFhWxBDmugf7ZaJivnoEhfaJQk1BQgXdTrpfp6jgVi",
  "key26": "FeDYftWq8AYfbfKpG84svxDkxiPHe85eGomruwAhDbT9oagM52P8WjoqjdUDVik6gb4PRL6BF3BXpPnfmiQtagx",
  "key27": "dQKZvJ9SUxBQFDVyBdYV1pPNKz9vtekvH2kV79n9gD4QuLuRZpXQiXkXmAbMuzt56hsGn2UQkLmztbjQu8g7Fiz",
  "key28": "2PE83Qca9Fj6c2Xjki6KKUrn9BZQyvW9kBDmT6UGE838BFVAvCyGV12fXo9MMSUHDEyKYUEg2CvRdit54iNawUoA",
  "key29": "2sTwbzUGQ8CLHrHyuKBZ7Twoi6RuyHKZAL3PTh736owcptiuohuU2AbGapEgnEebgTmAf6MZumAEfNbgmRd65qDc",
  "key30": "4SnCtj6MgqGGS6vJvZg2ZBANJVfESWNZRTEyvqXpcWMvEyC9aUnvK6iJoTyCJLN1UxjeWGfYiMXGrj4jc9bYwX15",
  "key31": "3mYyHwdXZvVWgTxaQhVs317L2Cvn893trXJfK9XKHVh3rseMRHs1876BVaXLDDcrXNXt4gEt5ZNqGmvwFUVL6K4T",
  "key32": "e6jv3vh2jm7xxg9kLQsGNnvTVErxeNYbVC2FVsU7STzQo5j5gPvJhJQLsgaMA4KJrwcvf7DQiCno141jpMRBTHz",
  "key33": "2D6E35Y1NGEDQtNu2C31KWud9BAv4AFpWj92CZkpdwgVoRbBXRNdK5i1uFa2aY2VDgPTyKRWPcWujnun8xEQtExf",
  "key34": "myXHN9yvHhKJqfVXGBZnn3rwnhQ9h6Nx5uuUQoQj4JBGs5UBvwrq6przpxcvEF1DmFLVRDCrpWt1fNaQJqUGxG2"
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
