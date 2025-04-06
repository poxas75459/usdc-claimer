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
    "4gPQT1qUBoiwvJc2Xtjqatzh2ykfHRMRfXm7p2GpeZxeRNgXFew1xM5u883uTYRfNB4eZPbH59ivCnFYpd5jtdXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mhaf79zB9D9KrR88M2rwHt3nAaPp75CjKDfb26PYLoGpCoF5fXgJ3SCH5aQVQGabXmFYKZt1qFspLbztPZPSNjD",
  "key1": "2QB4MXtvM1925oH3eA4Cc7C79j1V1pZtF8hMaCPySTnzddZXPF2w3XX5FvMLQHDKcqKgtNFJ56g9kKrh9BGnJWQM",
  "key2": "2gQw2A2AnLacm8C7FvFQbTmwBRiNHgHeQbUkehTVowvLkjG2NxAF2v7C3gwRtRYZb3ovpz6FBoqS9ba1eXE4ySpn",
  "key3": "5wGnvDNT4oaKzvJ7pSEvFZGXgKZt8W6ab6gwFDP2KDAz4b8CmSBKK5QZTbZibK7wu89YTpRsbL1D6e2DK1QNb2xa",
  "key4": "2uqXZsHh1xLdRi7nYyojr7EyFXn4DKJKUJt3UB9wwRZCuxguDLFT4x2DDP7SA2AmRvGuRNa8ND95fyMNmEgU7QX3",
  "key5": "5FkMjKr6T71N5mjVJ6HihD1e1uZKBugMCQEzgYBhrdUmaph3Y1UzAGxWmPNa1baFgDcnyVhB7twfjzgCsMDVNuwR",
  "key6": "4kTD5piNmxWB2dHuboKKaaH7nTPaTPfGQaJBgikhsvYRmCnmZ6f8XSLmCbazzMLJEkzEgdR1XjrBofPAMSto2P7L",
  "key7": "59hB4qbYzMY27xQ3xo6UshmQS7EgWsvLYN8adpmjChnzC7usnVwGThHhwFM5DHs2jkWpZx5qfZZ4Pq4DbmKKbUMi",
  "key8": "43pdaDH7MpmpNGhp1HWoWxGVKreSBcob5asDC8sRxtMRSfMkrBFT8n6jvMyvtZK56KjRyHgY99zpwGynP3SsbLnb",
  "key9": "LCSQbSjssdtC2j1sF3MbFwL8SAuQe5QF1q85TUHrLSKNN2vC4gSCHDMRwfpgs1txqaEmWAvrWgHxJwmEgYwnagu",
  "key10": "PrCi3csaxaWEf34TZYp5YFtu1KfKNPTQMQ8NQWjje2oxjqDG2dRjGiJDiNohTwNkNQmjBdHMR6rxf4yvHrcxvz5",
  "key11": "3X8S3r7F1xWigXnT76VeFcGVqitYmbZEyFJeiLaST9CGBuRw4EghwXojcPdQxeUcnt1kfCQc9ucyGjPMhyrPEhby",
  "key12": "3Uj5s21U4KaVa6dQ5CzLdQSmaaTyRrfiAxeMCXkCXpGdmVn2AEYrtWuq2hXYyDYUYuTmJ8BTdwwj4FnBM86rFAFu",
  "key13": "47HNHrzscY7ZUoVDYdfiQZmVGC3s5w6VRhQxndLubX4t3rLrnQ3nL9uwRGijdkv4sxeyiD1khYGtQdv9K7T2hVA7",
  "key14": "2ZEfFf65o1yAnzX1vnwC3RCCyAKe1sVpGRr4AmnGnGNa6dECJ9EqqoHpKBdR3QS8fgSXcjPtYEpHtHbBdqp4obUG",
  "key15": "5mnbQrrieE2tDimLJ4vmToZh34Nyj3tBq13K2vH2tK6CaxWcq7hbvQqyDCp5rLawAeyqA91qTGt1VgVNggSBbZaj",
  "key16": "3vCV4HEMvqVtLRxXs3Po7q8nyhS5v5mLzgJiRd32w5bgYb17YypHLBJhUTnW1Gexvc7Vwf41AxWVw4HYUaM9gB39",
  "key17": "2Vf1jQUjLs8BAUUamLUdgUZ89Ca8kiywqhcCAKmEVJ6WuXRYHnDw83wxoBUppN4E3vxPHoRv3WLgSUyVr5AZWUZr",
  "key18": "4exsvKgYSPriYkdkox5BH5xK9bL5yArojxc83dvrm61327jYYn4bPRMueg6qLmRdZTwKRX58jQyHGwzz5h3KCKc7",
  "key19": "2dViXshpqKACoqK6NYwnrMHh543yCJ5VMYQFmgZtbphsWW1NndMTDK6jEhKuKuRsCsnW5VKoSJscjBGAao9iqptT",
  "key20": "kMFn9mkqJRga1m45VLuEc1RPE3MwyahCwiXCVsQScEXzjvC24aUbM9eCuCrLn8Sv1PoLjm9qpC8817WJkh6jACF",
  "key21": "26BEbdUVRvGus18qWVp3GY1hQc26DkNECUw9WkGUMsGyRQ132iMmrc7VWhNyoBNXkrGYU95ViaG4beiKYr3BtbxR",
  "key22": "51oGMtLCFiuieS3juDXnX1n27RDPaT1xngns9eyxe15ZauZDsMBSCwv2jFQua5YeP6o3dSkh3ChT6v5HecFyUrKE",
  "key23": "2YPVr4oJW1Yn2RHvfHieMbt99biKXUeoViXiQKy6RTi2KKWieXcLsXTRJQDS7JmFc6HUTHAZ85EZQf2KuYWowGLS",
  "key24": "rbqaUttYfNpZt8tzR4UAF1CuMpfajvhXd1xLCrshDVLVvV8LFwzERnbMWF3QThEzqD5GB2cNRcgbXXDVtzusimg",
  "key25": "2DG2j6rY7P7SUWn3GvMGgAEYnJDPMTysCFZt9gf4sMmMEpayqktVe4L8ekW5iGKPrRiK7oVdLJ96HqtrdadfKtx9",
  "key26": "ScLFB7bb4ZJSx9souGzKJYUR9LkqNjxwiRzmqgQAmqT79iQTJ8fvUEWAUChXq8Z54G4YAsKzGCTh8tStb6MA5ZG",
  "key27": "r8KZaXUFkiLabwNZRKxdWw4Vp341m8cWnhiKwRf71qQmYpLpKV5RNwjxeU4GbjASnfGLttroVuTPxMNADv1de5s",
  "key28": "4mLpfyaq1kd1xHhr5gnzdiQudgTDVJyHPTuA6V2kPnThPstq251anZ5WeQZs9dPNCvURw7mWJYU5FyaTfwaqpCPC",
  "key29": "hZawPkJsFd4HNPQyDK5Ct9E4iDGjdWuzT8ycnYznX6QMoLZ4MQSejCo9nLxe3gnbPQLsLGyarB9V7sprqJCa86W",
  "key30": "2tUfoh9R6EoV4iFwYFhVhF8k388XV8aj1ugyKaEmjejvGuGj54g7whHaqwHphnq4cWBpfsA4iKFH8Yq6XKddRNib",
  "key31": "33tMd5NhmLpBiCzZ8C1dsWDAWhNb8hJwhBW2NfX396qDeNFjx3ShumbQXZEVP9xVersSYXoqzW4BcvqEJvYBFW8T",
  "key32": "53aAGsj4w9t8c7k3ucBSKkVwbdKwG25XikHxWY1ZSEA13uapd1xVv3Qo7Q88yTq6A85tYAG5jXJnyU8YtjrT8Uon",
  "key33": "UGqXggix6FoMcZGNRpi2bVUb16qBdPrMCftC4GBFYMogr9TdkLUpZkzw1X6DaWUHkSty7DBy7NkV6uA81hdh9w7"
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
