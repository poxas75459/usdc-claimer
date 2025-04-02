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
    "4WRJ2b7y6KmVy2pNBJktkttXEMJvJ33TBXQJyR37QA7wQusGKHrwjcFfj4grdwM1ch39Vzmwk9NF1wAtXdeGnu8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gu56dXvJ2xZdTSP2NoBCwTLWtvsBgKscVjvbMM1d5jECNtbswGTDMGSyxuxppRiyy1b5jusdi6Q14oULZTL66b6",
  "key1": "3LkJtuyiXCxvNzRztXVuqN9drhsrUDV4fHr5xkjUKVRCo89JHGy9eptWeGnqsNkmetSxUxkto6w4od8USTJgRhCy",
  "key2": "2KksgpipJCUUMAtximuEHYvXXEEno7aE55ER7Sm6hzqNNKbowV7xx6rmQy3iTEr5jS3AeioGuFJUmgLWfjD7JZRw",
  "key3": "4hBMASNqCszh6xwHE4LGaYRAmg2Ji8Hi8rzZynqoKeNxwogkfn8KYrHtiyxrgrWCsi494EdSK7Fki6QLssX5q2KR",
  "key4": "2mez4CNJsR9XJrHAB9NHaFdC1MNtXBcvUoKVsGKXYr1ufJkRGBdqeCoqtiFeqBdEG5mpQKdREHDufYcdrPvZkHnS",
  "key5": "5rT7wC7oUZvBxUqnDmusajg6bmX8dUsXRyvQjsaRaNgW2LAodgcVBw5TbEYVRYM9VWVjBz8we4bSp8zwCg9LmNaQ",
  "key6": "3eJwTUETpwwSdFWRSChjD3qoeHdpS7ZPMWdoDf289iGqkoTFRFDP5DRHEiGY2qcPnZcHrrai8tRuWRMMooTS68WX",
  "key7": "2yvcc1buLMXjbCP1KymBF4Ssid6aPLxXwGdn4mM2FPb6LB5xXsB51aq6tziofcBy7PC1THqs1UTjLwQ898uYJyNS",
  "key8": "XD8q6siei8XRmKYrjoaR1YrT1QHLJZwLRpxrm6Akknkd334wDQbbhuh2GvbozWZY9T5pJyenhogs496Kw6WmsCv",
  "key9": "4fpB31dgGtru8PFpKpdNrqtWqpkGuPHXgJDuLYfbJgmbwGB4A8EywV7C5VUmafm4LRaDMjV9MDiUKQyzfkH9P5BG",
  "key10": "X8ztij7ERbKN7EaQTUJKWnhU6JUbLTDTjV1QcjmMZ2aP5h9GscdnNqPMe5cGNBK5DjwzVaG9TzsD65yqVW37zGC",
  "key11": "5Stf2Pag49YMcQKZQrE8B7wi7jfTsSqGWj5BqBGGRrsp2ppcfVUsQB3MBMX9Tgv3m9RBMdoiFQLXjtdyet4A5vNs",
  "key12": "oyeK2UPSTt9T3JD3G92puH6txE7bcEkw18Uvg1V9nQ1bGZNG2BikEBmsix15r3Hzw7ndJPrMVJZDA21rdMYYY8r",
  "key13": "3BDiUFcuAvTMPDU8RKpcHNktNnVSCrcXz3gXb2NgZbwwCHZYCSFWmzcKgvPK6qyULTGGBeWPAQPSA83iYZERCSoC",
  "key14": "49sya4pPiUY2MiZ9SQ49xxCZMJTFH4n32wap2SyKNgQoxid3LN7Y6b9yrcJxNRC94UHfoYQDQ9wWdcjzCNftFu8b",
  "key15": "4diey8n2RfddqRRFJ72pjLz37tBCFThzVMyJFGVLPSWgbu4baAyeNn4NZpTuGgGhhHckV4NDLcRsH6JBdtEyYkR7",
  "key16": "EGueCByUxUexqd9nzVGzSto94dHBHnw9MR8U3iECTZJDrpC5L5UNUzcEG6hbL6LUQvX1yDSEQu5dNvVhk9dPYUM",
  "key17": "zsFjDVMETQtkzYeFzByzx1xrhSaGR9rW3txXC4kbxXgGM2U852LigGdVFuBjqvizMwLLVpNNWH4abK5D8i5E2zo",
  "key18": "LtYy8ug2SHWgGUqHurVTEamvnAYHd1vzNrtps4TyFYHNnLhHMTipJqyqcWP4yM6iWA6ZQ66mHXoKxrn5wfPxsXq",
  "key19": "2Ur6MytXhDD6hXoQtrh95UkZDZS5pMKmdKZLVhLQr7H8cuJxNajRVyC6VPR3fjSL5CvJ3qybVGYmWqgMhX7V4RzD",
  "key20": "53vrbGHB3WXcjcN62tQCKVCGMBYjntzi5EcmnWknr9pUCQqdVtvPCGFtRdDre3YGUpGW6mz9seLYbB1WFgs7pXnn",
  "key21": "4RSi3HsgLqyWEipQ8CkxkKEZYz4vuoVNmEzVNfS5Lh6qUTcPhcGMCS6mVtyFXo1a2nYMyUrbhHG6DbrRxmNAVVVH",
  "key22": "46cJNdTJgN86w93gpxsj4sDajkbHsNXSthgzoJ4osqBDnJTswprB5jHnvAdhci4hCWpZkajeaMG2vS4i8TYrj9sk",
  "key23": "2xmHCV57B3BPtcPHpVvsNVnQUeK9DK1odwgyAaQSNWq7X44vRYW5mNmyTaZ5wvHqQmotvgFGx1mTBxjhuFVKtJJN",
  "key24": "2nWCKLrKkVQv3js1iKQ3inVFpzfvpyFQGF6fddVx3VcrWfD8WPKWf1foeLqjzbDXmoPv1oL17sVacU4Gm4kjGEqP",
  "key25": "3HSNPUN5KzKatPnEW6CHEnQLhoC2TQzJofQRxyekeQmNe3e22tvx7xm8XCMzjjXTBocTNxnvNPmnFSgLMX8ScGaB",
  "key26": "5LWBsyVxWCzJFwXXxQs42hzthyPvS2QzemUPibP3JVNdxECUBaSMNmeDwZVC8NfbrSFN46zydeaX6GDf5PRK2HdB",
  "key27": "47mESUA8c8roSUBdLVcRpuHvcCTPhvvyxVdQscpubuMW92WwTPmBbwnENtex1TGMeXjpfG7pT5xk7a96jZBEBzGo",
  "key28": "XN6zPAVVvbZQXfKuZN4LemELRFEZPAQNhvRjf238ggx8JvFWFyXNorUTVFrejEsVJXbaTQqvdSiz9bAZhQf1xLc",
  "key29": "3XqfDTjyWkff2rKxmQUTSyZo6Rq5nzYy2e1DKMJiUXboHC1EDv9rhtvgnESefc3oCPWdc5Xt89sANZaRMkf3ZCZt",
  "key30": "258VQrdf58cdJWYQqS9kQXohRfrscY1a82m2wajkNhZEfJVHJpn4ENXSrvC4rbhAiDJosQL3kp2rpXnUCrQsrkEz",
  "key31": "2JDkYTHaApjVLcYUtcxGGQnhvJZ4RfeHtkeyuEFv4VyL5NNLH4t5jLj34Lbjot846M1eUwQdj9JF9ga5BTUGGW5L"
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
