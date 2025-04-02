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
    "2d2RyMboXMMCnHRZY7jpzbwkWVmdc1EgHtjjj41AjmokiBK9SjTt7PT4VA2Z63Q2Xm99ogptwcMsWA6Pzi7fQvQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ovLUDhk8CWAmpVtwLRMd8ZKubxweFdzhgK8aBAe3WEjZwd4YypKRyaFQnFBvCcXWCUBavZZAdX4yxicvzoEv4fu",
  "key1": "4c9RVCLuXzxpS6vjRzrcuPUxF1qXS9i9CzAvEoGFqviT9rbR7fVx5pL1ZaJcfHacNniprhSsjWbFXYbCkFJPF6YV",
  "key2": "LmmLFXyX1mBHkiHntLsvATmzu3odnrFwAwnSjpLG6VsMMaR8kc41s9rPYfBxKZMirBeQxy8Qpk3Jr48jW2Karc9",
  "key3": "3Bpn2CHMZ9fdAVi8mELWhZmqNAJ6j3rnjNg3Pqwr3VMumUkmAK89iEsr7vaWPwcPBqZhBjn7ukXdDb47KbceZERX",
  "key4": "3oBLJsR8A2DN9NFfg2UGcEm1aHGBdymppNqZ3e2vKbLpAHwmmASvbaktUcYfCDskPG3GHCJJESmWiFMncgcj3AdZ",
  "key5": "Niag53LN3AvKZghsG8QdfAt4EFHxWDgmiMBkqqR1CnKFFYcmE4zVF9FzpSDF7bUWvy1FAke8ZxcT9imbVwuGvtU",
  "key6": "5ts3GdDTSb1jB6fy1iDGe763mDZmP3pcW7tNmqedVVqho2PmDrfy7yVy7fJf1T7C7aa7x64Mvg5PHojwJbin1dJ5",
  "key7": "2gyRAbgbXp5c5SYZg2KxazgNkCHEbBYHgcuHehDUZFjqfjLTa1NWGYW9NF6Ay5RpAVjEhmQcEP9fSCRJHc3BBt3",
  "key8": "5PYNZiiKACzcjxMoWbFFj3CBHWr7kjn5kuYonmHKSeCUfTVv6swpbysHvzdLyE3PMn5uwGvVWTo7i83hSzZ8d3SV",
  "key9": "4QweBjEvKpPSQn6W5bGLhmXhyzSjtzZjjQNZGu5zXMDho6TPhHCJPAMppCHjukeAvagJmsLhie44EJybEzm6bC65",
  "key10": "4zxgiVqRnvBQTg8o7Ri5Yqmx2a7ezvf87uNY76PHELMiXAWZs918uZ8YKhExkdW2Ud3xA9jQa2kLDCau3sKW4JAs",
  "key11": "2TfsMn5rQ7grqkqwWb6nDxfFMbfyb2HbncrV6SX2pLA94yvXvkyGChthjY6jT6A7fC11f49ye8jhfBgvD2wpDVQQ",
  "key12": "Hqm75TQQnZSz7VSiuatzfQ5opPBeGL4SaDTZfHNFyoCEeAcG75eCB6LcDAWCYuiw3FQ7j8vEgj7QRieRcofVmNR",
  "key13": "36oAPZSBaafZcbcNpZy3uuJReQcwhrD9BdbtV8XF5HG9t1eoJn14w4XEkqx8MjxfUP7FwF1TnArqKyKb7ZEU5rGc",
  "key14": "5mwZgRTwz4sqCbvJ6ZJmDBLKDZWZZW6uCgZKkQw6CyFwrjui3BfVjcxkaEkJWqi21x3Mg6kajZXJQs9LUK1Zyr8c",
  "key15": "4hbz5VoZB7SRkWDwinnGa36VbKHoaGajy5WFYzVCWS5LaZ5WZKTgzNSpTyhKbCMrm64TM5WNwuVBuQWi8BaRW9pF",
  "key16": "CztQvRttj5RDdYxZTAodDcTYvniTYSW8eA3PMqqrKH8yNtgPthSX1RKztJ3ommDvCqNiQbQCSqHsiSz76d3SmG4",
  "key17": "zzJMxmGj8FztrviNRYPdsm3Y5p4PVR1SuMSsWsr3ac2LRUMFJGYu7pESDoKmh1Cgodu5ffKNH1J3CxYoHaeEdc4",
  "key18": "36jY3F9ncM8py7eT8W4pUCV8mxHo7Zg1GsYwgRhiqDgqir9g57a38WBzzcVteyjDUx8n4b7MmhpGN9CWZ2iYAT2f",
  "key19": "4ZysVUoJaLyUKw5hu8mYRtbTjV9asbuHbYeVcBmEBzRKhXAEKugvmLtLZU1PUP8sF5ABdRiDoJDS3nPGr6KgTFDQ",
  "key20": "4XGkGZXNL5PdeEhWdqCVjLUrMU9thJYsWuXiRp5WCBtbTa2Rf2k51NKQUPoMH2V4JHVanE9injJg1dDTjAR3gzuz",
  "key21": "2rvRGEos6ePxvtkEMPUyMTokYxrQ8Z9zSi3MUKJ4tMMimdhKmPFUpwtPA25xoqEiemmXYAoXvYo17y2cgqdKSW9R",
  "key22": "2FFSPstT36E2ZfZohMAfD2xZtNLNWyamt6QuVVHgRCxDzNxaeWPdeVAtuoKMknobYJKnfvVphASzwstLro7ZYCVH",
  "key23": "39JBpMXJbQRoqm3t821NzBF9aPLBvmdGHbLiyPuvAmYoQjb7ACpjUwMZGH5iaXB6vEqW1Uu3ud8ycWUthpRhnMVW",
  "key24": "39m53Sa2QGPCfJ239fMRnzT535HEzZVEjcvD15hfiHsHsCN3yBXQBDknbv9dnxyS8pJ2Q1qMibt5n4bjtwgYqWqW",
  "key25": "4BFhSKpajWwkm137iC2j7AMEvwxKAiU4VoQgqjiNpaDYwuWkH8xwQQzx3u3jekHdVFWAsSE9gxBaktmrYLNGDxEH",
  "key26": "zDVFnoMLfHKcwHPDBJZnMaRjQuiSGcjpdUWe2id6i64H3FodmoeGKTaNNVGAgYiMdSsFdJwoRRzhWF8EVCe99eJ",
  "key27": "3TwxfWZmoDwGgjMx17eon4QSE9DEiar6pXUzD2Hv26n1biQYMRnnXAMr2qQKDoxNYo1FSWXDaFEwgjv8a7uX4Bor",
  "key28": "39DgJaEEjJ3efi49LvywL3EtEoQHcMdKXWevwVjqm8e7Ggpd8KmH9yjWAL1pbwAA3h2U7z23e5XQPT2hsqXiBiVB",
  "key29": "5DoM9RWVfAdj8SoUwpZ6nmQaAV3CDFqXzrz9BmYiHTE8wGaN3zbhDCsyjED2W3sSLyMTzmXJQVphzy8gigA7a4gw",
  "key30": "26JtSosrdSVEqpgWLw6uGFQisAkkECJTBTQqbpQJ6cLh2u1wvTFEbmQ6pxDVvQtJPNHhRWvB1DA1BKrdomtepwaQ",
  "key31": "4g6vepvTvXcUVLXFo8FHhVsQGMBdFsSaUx5cMnCGsjbwrmz1oy9uL3SMzbWjjMkiGmAhDVhSaFUvWK1z8Zaevdjw",
  "key32": "iiDW2tVERnAokU9Ug7EXYhZrpLirGp9NmXcFtLwymzeyqC91pzLNdrssL822hufwSE6Q5aC2opwFcJ4J1VhmcFS",
  "key33": "8oVRi8wrptRB9zbTfvMkJsSu3sUMJCoZDAvzeR6C6kMfNroHDmdnC4dHwWfM4XzAg8oCckFp7ENyZNE7xNJprSg",
  "key34": "3xnCWdbGBLdLha4BhB33Hc3V5XeJpme3b8S3qzfEbydc1MapbLbczz6xFiYffBGdS14eTNLC2Uvmbxmi7VMqYZ3j",
  "key35": "2aYfLUq1s3wD28AtgBFFRRT4mJfoTbWFYTziBNeZG4PgzjRSAy7XBDTvgwdq6ngRx8QSspKuRmTweYpvHJEvemax",
  "key36": "V16dKFWDdoFkKphPEHsuNWhSmMHMD6QoZ3MiqmgNk4tvxVMVtWDfrrjJarMLTaWtKWtHNZL5RzyThLDh1R1D3od",
  "key37": "5hbzMZ6Xn4LGdNdmt57i1CtTEPvXTDcoxXvADMHtLtwrxMgWNhFz4t7kvzeF2EPEPzTNEmfNquLCKG2xJkAB8az6",
  "key38": "4THWJaos15CYEGxJA7XSRSggYK6Jsp4SVZpEQ6W4ciUE9wQRD8truFkCvgxT1KHzwSUBKid9rzukepfhD1L3WZks",
  "key39": "2T6d9LABw25Us498tfrvHv4dB5binxAn2a13B9LYG2f6zEyz1WFTQx8u65Au33YY9sf6tfQDiKHqP7ZeKDkwPtrQ",
  "key40": "UU74sVYwJsLhTtweqk49g66xCYwSB4x3u5m9NJWfpaDQFGYKTJdgLY9ghHU3dFpMQp1Uc4EpYq5KsUWfmRe9Qci",
  "key41": "4GxBKgXBuogXLGUkK39rtkVCjmDR6jbU9ziugEyL7bL3vsQCar5qUJ44cy3QbnETyNKHN5KwbTUyoRxKnHodW2PP",
  "key42": "4tDAh1qqTguHFpArypDdwoJaqVsbgKKy56ptyA9xcmutFuiPo5ZZjn6xZT91kAGRqByTrZBofkMcUxupMwVt4Lxp"
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
