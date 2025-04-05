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
    "2dCmra84N8TxnQ449mzykKPbUf3Y8tygLgxpjfr3pyXGJ3K3inps3LF4SwcZ7Mut7VtFGF3L53Z4aAGk86bdEfbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33WqPDYGmTCrJHZNS1yfLZjNUZpfeuetwHE79LM1rPUA2285fTiKQgZzz6VAvvca3nKgKuEXoSVswutV8zrriFdq",
  "key1": "zMUkDgoXJwdeFim1mSPiZL2VWcfibJKJSc9bBUESPCCCRNqaRfCymejPCZ1dZsUxwMsngMgEvyNzBsYirQYG39Q",
  "key2": "5cNdpbZY56rZ1R32F3aChQiaqV5aYepx3S1Tz7ft5mWaq2HG6VtZ4ciKHZ48QaCQHQMDNW6Hey7rA3JTyh16s1Vs",
  "key3": "5NUnvxQ4SA6o1ckhGjEPaQ7iLGdpMPEp32HsdcuLyzMETXqt6fYDQ7AkjtAC5hKHq2Vg4AQ7xDo3FwwzQzA7DRrq",
  "key4": "3NGJW7bdr1YcH1p9g2AFe9SWYzmJT3zG8dDrQHnMQuMo4FP15J7VQg2Lm8SN111rfeSUwu6ZDdZPWRLFeYxMNU45",
  "key5": "2EYyLxTnTLi8KR61sdtZ54dAxriqVwp3WRjY68yGepFciYyPAKzNxavg8YuyALxCMi7nNiHSintLfKCDoEQfsoqi",
  "key6": "5Xx51HWQKYuca8gsh78nFDVZKoHmqFWdum8AvuhW8i6c2eNcZta6s2MNuSwMZqHSm25isAapyF1eXMMkouc26PwK",
  "key7": "zRdd4yhtRFwx2ZKpedHnaDDSEu9e4Z19FbZ84eAisnM3aa2GQC4Nb4c7CTFytvzhVDRtPUCcmamVwHPD5EckUfg",
  "key8": "No6KXfhZVjwCXhAWVod1rWejk3HeGbdQ6dq36sDoofwydJjVE1x5nbVa43RRsV26vUhC3sLb1rcEV3dP1U7AorG",
  "key9": "3cw99Qit9T2GDDwisXjgqZ9UAiwWFwY37rM1o1BRQ5ZJNAEq33RaYhmHnPHJVkF25mogtwKLXM8ddsd43W1S8edx",
  "key10": "5boaBwic9PVwkmAH4HYJYkuAV8Toim6j2inJB1ktXMffMzpBrhueC9cWgzWyVWdbUWeEuu3JHEGBfarTqdY5oPD3",
  "key11": "4V9HdRDGcjyt5nz9cq3AnXvDw57vka99fSu9eYESKR5kSkxaBm7r9ZjEd62E6rihAwqfq8jfHq86rjuVxs4AhNdz",
  "key12": "4geerXr4XuKL8LD4PMJjSom5ne3H3fS2B1chdMvUuSSmnA7aUPm1wLkDcEVetuhdX7ij8hyvvEKzrbtei67xb8WZ",
  "key13": "5jZBbPsmy49TfpTDh8vM5oRJKNVcHzEhcz3FXfwMVtfbWZpRKCRVMHuthZ2dMGRPn3He2GshRGzD5UBUYNtzSzMp",
  "key14": "4JCoKZqD6G5biadMFL1mr278LxuHoVocT9QtnzQRH9sWTp1r9zBLcXXskjiUfbdbssGZCvzvFyKaiRHY5u9XxTSG",
  "key15": "3uxi1mJMKBoqAusseS5bXiD5oPn446H5bgWoJaypEux5GfyS5tbjJuxrYCVjDwJLL7cP7QADj4ygZdn3vBXyFrPr",
  "key16": "4RsytvbiHod5cLHaPckF3SxHoGfsytfi8MukFnS5J6jTR8Az4sh6oiUyXXUQbsY2LVnqL5DLViY9tT9zNd6PT1E4",
  "key17": "iRVrdiWo3VCnThrzsVzmwWzuBGowXJsv29L8DSs3Jjv5W2dBs3WyxEVAHh77MN4ZCCRUNhquCTiGLG5ZoqE6EGa",
  "key18": "5mCj6pfVm23KdyaC31h52z8PFaMa8QuqwkTvL4JQJozfFoaRg4PHyKwBCbWPQkXbkDRhCDbtrwZKbp1tMBxyrbgK",
  "key19": "ttK8xxW2qquh6QyNjgCrGPzizY4SDC5nZpCVtr65Ewi8DXmBGJuW3UVfk4EQa6Bk8qJx7yJFyWiEAg6mgLHbBKY",
  "key20": "5RjiQsMRfg2TYq3wSMRJys7y8JusqZj966Jr4UH69rUY1C11EbpDKoBKuP6vFZYnMhJAUBmtVA118VmwHn9trxjD",
  "key21": "4TcbmZHNSa4UaGxRVM2LuYbrXgf9HPg1WUidU3v2TrVFvNo4vjoA3sWDMp4kssjWRBeSUZrhXuuLx7xm3x24SCDn",
  "key22": "5szHmHDCAwiBMvi817ezhoizkdmeCxFRX45HoTKSN7tGJzRgRUA3UNwXmkjpWSEBN9tmiAM2atb7qPRjcHkgEiTH",
  "key23": "2KeK23VVCodjTGvA9avUuEzR14wh33BikrncwKtiN9x23RSxR7xHzKc6h2o8hR5NkrwXVo1x6HFGJoBAzRpAqAeg",
  "key24": "4CjaGV323SiU2Qsnu7idGBoGDB6KD5QKeAQjxV9LUJruR2N9v3v7Hfh6FQqU2jYo3hDRExASTPELYu2St5WqQzL5",
  "key25": "5B2TjNTzAusUYJTz8qdiUsytVoDpMyAGqoDtAkQJsdgzdMgcWtTAQw2r9sZch3J5iBmEjvR1WZ77c8hTDmvwhc6S",
  "key26": "5cTMosuXRBYt1Q9zBfVG3wJBE89vG1YmEEwVpYAb9JLyFB2pBSUBqSz6uXtvdjaHPgQy2VzsWPW5AeAChdhnMD2",
  "key27": "2VVoqeV3J7RV4fYpetp8iE4CQHYfFZ6ivbPzZMmsDFmQvn5wCyYaPH8BKkQWfgxMJqTqp1fRf3bovAP6pywNsboy"
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
