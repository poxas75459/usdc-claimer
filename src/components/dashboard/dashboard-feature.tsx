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
    "bQyfqFZkuByb7u54baLZNYgfCi41mMi6ibNJFFUHe8Tw6SbM7rPt8yenHV14SSSQ36C4yHjk7u7SHRLhiA98Z7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nz144Argpe393ny3D9ijJ1fmaRvXitcdngm7dRVg5vBkrQGEKqEz4A6WWskfQHpV462EThTpJT6rU8LWXzFs1hV",
  "key1": "61AKEMd246ZwGWLNLMQCawXFRMufYRpvJLbJcNUvMzY2jFTfm1DpbfpGR4yp26STD69HXmJnQEpnVNZij3PGmP4b",
  "key2": "2RxdiAdxG1vmhh7zntY9JexhZn2zQ1YUVKdEtU3q6Q4ZNMAmidEkoMERzMmjEhiNtjCHjEEpGrsV4T8pa2KrrpUs",
  "key3": "29YoPbniX2mnZiwG2oEu7iUwFtKFENwHw2DQXfZwrpoNGqvMZHYrmKuw1JRxjNCHBksRU2vhLssxrAteZkYNNkX4",
  "key4": "3cYT6gidnCu4k9E3bGtsDCg7fJBTHQ4VzqBDjX36vcZC2kg1qA8cRrTYkRsEbTYH5kqJBeuwXk7MoJ59FfbjdXGw",
  "key5": "4MxRiobvaYjLqba1TnSpz7mCErxAgdTA2rypTjQrXigGpoLavLg7zwxwm5wYf414F2nLmrfHf1aS9A5JZxTHQ2JH",
  "key6": "5HDsPZxPVr61LEhDKWTcyuULXmAKmATxVDU25ttwuKPhs5iBanmc6CEcgDWRmg24ekCo2E2bEfTRNqQ757N5z8s",
  "key7": "3CSJd3JHAnrHdDRrmv3D2jCjQZtUW8kX25YCd1p7QHesf6FwzHMMXUi4teyMeooXBRUwLvFZkKgZHAfY7xTDuUPS",
  "key8": "5ipiiJig3XvbhQLFaFTSZucKzfiYzCDcyPQmGRCQu2Vtf5LQugqpmZ6FUD4kA8fXQjEHLHvoV6vqHmnMZysJK4rs",
  "key9": "4Z2eLmmFvDL9pbgSRarCTrAPxjPvBEDLgaB82A7XehCpTLn14z5GU6Gp26Lex7UjELxmv5Ps5X6jSnPsh4FSqWQQ",
  "key10": "kXrTCPiEEZ8zBWfDuY1cCXMipGDjabSUufKnmg5XyddJpT9uQWDM3CFMahUFPvcM616uTyK4WaQvg1ps1L8XohX",
  "key11": "21qK5t7777jLgpJ4uLDZ5aSKJDgTpGBG3zCp5wqfMMoCgtdq1anvrBCpFFLgwxgKwHr3t1HuCiue6QYGjpK8hj8b",
  "key12": "2QX7qKyP1wvvoh3drdRMCKovzBiFm7DR7UZAGosFVd8KsAyLFedwsxWyeKpPAwsSXuM784MguyN1zwdG1sy8q4JF",
  "key13": "5QA1Ydf785zKTBj4DofixnHTMCpq8Hd8o9fahKqRncaUFuGLk4bZHbeSjvpeimhdWiVBCnTBJTfKzvVhR4PZrD1n",
  "key14": "LqeEqX13iR6FWHJ4THYL4kyhDXxxNYbFbwWNrtZrPsHGSbBU4tWk5bZBwJzT4scVBvNZRTHYdoA9pzzNRzd5Bcx",
  "key15": "3vUdvEZ1eJjAMAQJH6tqwwCEXgqVYTsS6bXfJitsCjmXppwmohpdqCTps47Y4HPgcWLsFinbvB7p9n9DWtke9cVS",
  "key16": "4NM1XWFLFRVZKz51XcnUppW7mp4uwsEuqN19sUF8SKncCoSWtztjmzTj5kdBSPui8Et3MPzMh67XqgCCCY2yeDsx",
  "key17": "GiyZ9VCEkuCHyuufsgmVjnicdcXqhQhCxCcaeC39LbKTvcHshSGt2ebFSPxELv26Z8rEi77awjoGbRBVJjvtw5z",
  "key18": "5UPBu9VXVWQDT5rz75sxQaR7bfWNXb14YQs4kawBVahrFqX1io3VPMxFKAEXWSxHu1rwnHicJbPKPXTT25rhcnfu",
  "key19": "5BHbxVPxqxtcf19tMQR6SaZGEuZHthH78wR1hWiiqsFNPaxE6q4zvBGPs7bQmtpjDutwQEeiGMXDov3xwD7VsCjM",
  "key20": "348eSDcBcH8mwyYbHm1cvt6Tei5xxwfcyv1vrAVE3jXbP91b88QsKijkxCVHh6gu8NZvZrdgW1x1VsdzHDaFVRBJ",
  "key21": "2LQDWF1xqNevyiLzHnM54jrEnqzScWk55a9FkJ2gahRPV5gQpg2d3P9GMrSRzqk8zZ3x6NXR2dtPSQJfwRjSYdVD",
  "key22": "HZn6DxfcUayDiEaaL4nocjFxHsqs8spSSdgCptnsVHZh8dLtuxncpPuu5MTaGWbr8sCgEnr2GnyjMXBtfBj5TbF",
  "key23": "3tVKf5YofRSuU8Acpe9N9M2YU5Fue9TKgEWpMKGH45Xnx4tZyyHf6TzjHdyJsqoHG1ELA3w6WBHxjvqhbLpBbbWT",
  "key24": "3hQirgwXXw4QF8wsNWQ2QEjDqBDMBqmX7Dv4i7tRYT5ivCwtxWHc5pXC8Cs7Q2DD1DgDCAtbSPMvvDCYBCPxjDLa",
  "key25": "5C1DXhzWfWKnLrtBPaLSLYA7ijCWYfFuxuowWx6SzHLubnvZ6ft7xzBQZnES83RET5iJgSLmzzUcKGnVgMv1Jb9p",
  "key26": "5S2V4nYtzhPWwpvuUcizTL8Y6C7oEAHGzqFSKDpyfdocjk4D4VxRQ4tv15W2Ez3ihM8qo5RUx8VoMnx7Gf2R8jPr",
  "key27": "59EiFs3MrNrSiFp8qyifzvvm9dfppNjoamjUbMCSmn8J6dRhZnKooYomLHPHC8H8LPZuKQXJQnqHw8KyjU1CdZLP",
  "key28": "5JEwqeo1BMDWeovAmRJZZdGsBTodfAxr3E73YNKZArckERXasgyoQ3CEy5kWwDbbPjwZicuEDBPeu9z3FcSagMPR",
  "key29": "LRepAFQzEa2W2uGTYnS3PzAJoPVUHhZQBmtqPpXyTFe75tvaA7rKs4PfGCAcnMUEgjMkP6pE9Lkm8qMTRszYrZX",
  "key30": "54kGxTnsTyM8rWahDMgaKUQXDafCAA6YWp4bdhqQFMFKf1Gjhoum4kU59LRhhoj2rTurm9H5ZoZgci1p9r2gLqRW",
  "key31": "5xtPXxcTAAsZn1HQjosqVQotCTdhJWnFQVTsE1Sit17ZC7CUFR4VUZUYZccoxuDguqo8N8FLhKqNW9pjCpf54pb7",
  "key32": "4gDw5rPFARXtzCPspavanJaCP6S6CZemonJRR6cXfUg3djWz9ZNyNYVjSFhp9RJ7GXS4gmmxqFnmrnB3LmcfqDYa",
  "key33": "5ZYaXciGz9zeL5Nu4ddRKF9vuW8vTQw1qdhczGyuCwsky9mWrGUU62WkQG1bBdKcF3oQPgFCjgNGbZeFqRehp1hB"
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
