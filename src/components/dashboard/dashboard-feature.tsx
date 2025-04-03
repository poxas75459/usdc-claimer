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
    "5wsctd93CsSHQsQPuvmDNzqgY3qteFELRgpnDvWbtdLuJRxF82cNCC7CPNv6GwtoQbydV7UHTYwuaWAcrmMZndK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PoUv8pJ9VqZWQsmC2NfctJmSxWq6tQwCDJ2mdEc34VpXcoQj1KjYJxYfJu1YnCQDyutUy2Eq5AkrqfnvtefHY7f",
  "key1": "5favVow33wJZJbCKeAB8rfoC2rLFmbjVf8ctkj5JXFkz1B6Cwkm31ugFaaT5NCTyUj9tqU2eK8eF4WpNXd4vHauK",
  "key2": "3ukojUy9Zx6GFt4GsXFycQLdunfJ2sX1JaNpN9mgFQ1P19CBn99wc8EYRhCCTVa3xS2wrcjjFQDZGJ5Y9yBizy7v",
  "key3": "4Zc3Dq6B7X848S5WfxxK511nCxqdL3Q78Doj2UMvcipf7JB3bizFY6Bnc3tQkhR3aBePh8GPsMp6j4cgvYaYto5n",
  "key4": "2MLeFxNLbJ38KguvGRGeW5yec1hFJYY3eWCRHs9xbAUBomV6PqFGyXXRhNRDLP1rCXbqW6cU8eNZCW4k3hPnm1yr",
  "key5": "5NjLWAj2Fg5Dy2JB5M7q3TZhUUUr4aRcahkeaVgk7Vne1eq5q8kThvAEcaTXBWVeoKgAtLvZrADWLDWpt1dkyxqT",
  "key6": "57arzsaAhBDyq6P9sMDYXfjCZckcrXFhvCCtp4quA7N9gtUVuJudVa2e9uXrvX92j6poH3S9TNTbEkE4pSpRc2b4",
  "key7": "3NndjtArH5GJ1mNgZ9mgLPzZtMvg9TcsZyjKwEsA9Xwvn51MHm7xLDdhvqWxTQqaFEu1QG4ugtPeMvepD3obT4re",
  "key8": "zLvNoTiFdByZEUnY6fGN7zuTf8jGVQdJsCuNUP4S3aC8TvNNYn9P7zmr31orbe6NBBLbaLENQb8nZJgd2dvv36j",
  "key9": "4BzKBKHGwqGTbB8ZSsF2GCY9KrhvbemUUK2UHK4SSu4dd1wBXuX8sqaTbjPYLRt4T9octXPt9KDKHcYEmDG7Kyo1",
  "key10": "eNFC85UqKrMfgmKC9QGtFUKuauYsszujrUNoFVETM6dPAtn3go754ZHMiC3AJeHKaBvBamQ9uLJf6ybw78tz2yU",
  "key11": "chBn5dCCqsLykudf5Lriaek6DDmkmdgkJrAFpQDRD4haR5vFUStP4Bx7dynWwnPpcG7am22uXz9VwM6YRB6sXFk",
  "key12": "2DpFSuBoudARmkvqSLZTM34Z8btM7DpojaCjN9mZRReWEcXpBzEw42kVgRDvWkKPS5TMi2AGcs528FVssFuybcsq",
  "key13": "4mwNb36hhimotK1kR5hTwAZfhqqemyp4cyUVUGbFUU4yZ5ma3FLu8jx1et2p3e9oSC2esMXvCAMESmQUdLotPjqk",
  "key14": "4J9gEwVjEmk7o2QARb97e9UBC6pKs216WRzSPt4UVfSUTgQiTA1ScqywxnMCPxxNG9Rbc6A4tv51tDa5m5VAUf7d",
  "key15": "5BhCsNJeZ1xKwxEyktHphSAS1J2Kpu1i1ew8vA41SA955ykjBqmBns4Xc6JKptsAz3qoRryaDvyxxtQnv64LcDz4",
  "key16": "3TXojJCLJEu2GAF3hpn1jSEGGP8ToMgzL8iKHqZtubADnbkjiT3aTMuXYatd7gjAMzbwDyRnehK51LKU3iSZWabZ",
  "key17": "2bhHvF1KErjDUNbMTjw6P2q6L7hoHo6JQGR62vNCK67R9zytJksAgwCyMjtJU6ZFYdm2UC4KSxbb2hGLE2YE4ED1",
  "key18": "5n3D5MsB1ssjVf7dF3qfqJb9R9rvYT2yRsMorkXDokzL9VMwB1vEMFQNGcLY72XqXvcnqtfCC4KpS24giSnZtwui",
  "key19": "5VfaLVaV2S4JRBZ4uqb7vGxdxF7UU46Qq6SUcPEaHnQFqZTidLxVFn3bK2GG74PhYDmMaDMmuu8c6jtSpazGCwE4",
  "key20": "5WbAvv6DHHGRaWPhSH5fMTqnMxg2ArraXgjDNSgRUMcvPwxjED7VVYjC6v4fsi3wFk4iaZv39QRif5QbzJQSfXmJ",
  "key21": "3PfBu6GvjPhbjNPfbPbxPieUe8p8LX8EhJGZ8rzPS1ndh385uuX2QC17AVDUmx68GPEBzwvSy7Mw3nN8fDK3WCQb",
  "key22": "2vLsvR5wPx7Z7QM2hV1pAEz32LnDBe5NAx9P9GHUNzPNfiaJFnLXC685epZbg1HNX8WVfBPVm7ePzsUcbJpYT8Tr",
  "key23": "4zW4FEWueGB8PBhidwdxJ5qj8gjSwLQfPnqRyVRuabT33MrfTLpaAY39tfNx1Vdb6h8X6PNPLrqpfZ9hb59izjTi",
  "key24": "286y8AaPwt3CE2SHSTdayQvT4GMyCmoyn7kcPT5khXSTemsPjqcZUPAbxR4qssFD1j6RHACxMf4ajwGdMg4UTY4t",
  "key25": "4ot2fdrKjT9ErkRpKw94rqWhGr9ccp7B4EqkCq9XehRTG9BCr4tULQFDE3NDjRwGFHuDn4XSScbkb2GNjPAoepf2",
  "key26": "3YEaWXwuyhkWuZzs7kk2tQ37ARuzqJpHAcYAeXMscQf4NtyzbiS6rmBvGmvKohDH91nYYnTJtwRCEYmeZTENbLbc",
  "key27": "64y1D4drT26GLhWzzhEyaSBkKwmw89fBySEJEjkK22VN3zehnYN4RUYdAPsqLHoBoApGWbEEAQKNdLiQEWaHVrRh",
  "key28": "5AS8BHFt3agjp9pafzszLrgeB4yv5WshtwuttLhsiYEgZZ7P7QrKW8BvDra4Awzmr2hQcbDRcVuBfRwgByy7rt33",
  "key29": "4vwLXhdABSTXkTUQeu7RLHAQZpzhDA6WNMx8AUSuh6HqKnAnHjNCWuXvgHVJgGYPdGNeWgYuaLxawaTAP43fgwz8",
  "key30": "BuFCZUBt7hQbrNh4bg8kpAAznZPHeFVGNqc27LL58bXCQjBK7DSBJqunjDg9SFUr9ik2kYw1NyngAtwWHN7RBHG",
  "key31": "2zLbmiFYkeodwhwQJqdVmj14HtqxwpWLE42rd3FmBoKewK2HSvGdNTzUXBGKw8d1BNJ2CdPLoUQi1AoLqeaY1Ffr",
  "key32": "4scbP6YaVHBcJDcmRMqtjFo6RKYELZ34tEPYdbKUKygkJD5PNZAAykRmk9DttnWaEncT6WcepDnwgKvGj8vSEFLN",
  "key33": "5eeDXvZMpXeEyCQujTzU8bVAYLh2iSHTvLjj6KtkQSHE1boUU6bkV75DNNRAYThEFHhCDFh2jRwCnu6Fbbgegcup",
  "key34": "2noZymG6n5VGPdXSyEPo41nZzQVwgoqNXqNX4sYLWHYxP8QN9z8ZGqXiq9iLxXMoPPE77kGYvZkroXyAtHctRcDd",
  "key35": "59mh6TKqEEmuDyJ4aj6ymMTtjcCYoRJqEqjjZwwxzPN9JcriHstvVwFjwJcdurMgEAeKDLucpBZpupyWrsSb2C9x",
  "key36": "39MNj5XhP9fBz95JVrjTejvoqsAUK4mRfEENKLCLG2B7wZ1sbwqJ14dTHvAniPBDQK1Ggv9wsXkk5RX9XvE2ywug",
  "key37": "4HzksDrNCek45kcAbCogAfs1Na5AY7VYn5axWzZe64jzK8t2GQFP4UuKz36DVQi5EDeT8n6afGtc6nbFWcQEgmZN",
  "key38": "5tqQ4iRQgCHj5197NB2gAoLZJw1kRC1ETHjjqddFPCSq5oxidce6fhUSsCo3PnG53CwTwEGg7VFkewPDZkDtzNuS",
  "key39": "3LffTLp7BX7mBcm11VJTfMPtrTY47PeavxFB8qgUT8EPb18z4D8yHaKPntf4DGWMhGiV2qTcK5LCBj5mYoJ9Dqe5",
  "key40": "5APeygeXcLsz3U6wAz83py6u6haLqH6yjee4PFB9ZiC5GgsV625iUfBPgXontTUFihFZrLCXy6kjGBGsELBwB3WF",
  "key41": "2LsQ4EribQvCw5VHAXyXPVTZvMvT6PSmyU2qEShvqd18ke415zhApZAvi8vPAxXZCvGmdTM6pJJjHxXN8hunUCMx",
  "key42": "8kh1tUsikoD45jHWKE3zBfPqPnENWbiAW6QCnzKBPW1PMQELgTJQowGd4tKbxKw6Bc8KktgqT2smHsLfswz15FR",
  "key43": "2at1fHnBY71EahLkqfuGjpu8anyXk8m8iFPYMCED7hK16NEJkbHj8vcccuZizt5Spc9rEWCwHMvJZbpnfBuMYmqM",
  "key44": "4GpYTmMt6AUr6fdDuAoj147gRaaboqGALNdPmiVip1xjsHsZG7KqAyXDyoiAVqzqdk4CKrPVgBGRFyqjjgGChteU",
  "key45": "3Rc86B2iTrk9wc47CXbsPq8VEAZzqJd5Exe8nNVNS5FjhNAHLLViduHhYvu8ysqaRCuknp9UNvpp99HoXCD6AP1U"
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
