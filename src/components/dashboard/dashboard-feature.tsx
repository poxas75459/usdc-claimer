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
    "5DyQD973RgNSuTgbEm98yd7jvmujLqgh3q4fnQ7yXrwawfbjVtkTmPbZMoKRro9ufr6Gp49GbSu9GBXMxJPqaGCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44EeiHqNT9AwncKMBkpDcaspza6zZB48UchdmoyiAKmnnBZ4x8WCXVe8tqWPHDymXQ77tzKwxMB79dK9sbcKFjnZ",
  "key1": "47eT6UBYQhcfEwgtwWZTrNHPmh4bfjF9cGXbwBgqJ1m1CSKxb33xSTqWrGzQAiBon3m9yoDFGppzySxKaQRqekuH",
  "key2": "5rorB3mZxtrtPoqYrt5Afpo77Tya8fNNd5wfD98xxLxd9X88TJ3PfZmzP5rmXmDZS4KSs8Qob7E4S6TW8VRiGn2T",
  "key3": "22FSJPLHZ9hsDtMV7kb97qnVyHDBnRQ3Zh4dEAkYBARxo56DNVPMJQJjnMByhLhmTXtfTkotPh63o7pJLj7VPp4H",
  "key4": "3khw2xkNSfwjGfH6D1Jd8K4W1YP9KyFZtJ6GUkhRbVWZaWxxPZNsfqy3cU4aGcQTqfTJgTX3PfvNQqETVtpBnUgu",
  "key5": "4kjAYm78YLrz5Gi5tA92HU12V3JHmQzYLi3SrroywWtShsCQrXUJkfdXUoscDz98f4p8k1AWLKcD8SFdy8UN66fs",
  "key6": "8oXPaSGg6sv6Yct4KBdH3MhNvb8yQKVKeYiSkYLqsevjYzRLqHfTe3GpV4zyZzQ88byVbyZ3YrhdkjiBA8HTPrZ",
  "key7": "3ceuePzS5wDUsKciBwchxNJAskA7q7XE2TuN4jbemvXHnMtLaGYZ4sp2bjyvFhWHvfuS8aV5r1R9KfWojGRQ9ZG5",
  "key8": "3d5JgaDnK1mnrVgzrNhps62AAHpXcEe9GsZC58shoLvTNayBourA37yif6zxge9sYBqGmfoSY5Tk5g2YgT5i49nh",
  "key9": "3cpmBer6eMa3B7KgsdASKSz4m3MuF6fxn5z8i4hqEa5TpBahVAyitG4u5M3F1QH2D44HXRkUiGJadG4ZHWwAkMvn",
  "key10": "4YWk4W9aPN2nqT1ZkaypfJM32b7veKPSrXqJ1Gb9HVABJMBASitdmz2kN54CWEVSn9R5dCPVH2Tzb37BaH9UKNfu",
  "key11": "CgZRyc2CMNvMuvSVQHRyKMy9f1n73vvua1fYr352bPBwbS4S4KBPUnJ2natiApm2UZSSGAf3rLPt1Sv6nhWGAY9",
  "key12": "2rJv78bCwHDQMGivoHTuygkrYhixNyignD7XjZCC4eW5K3dTaxwuGczgcjBcANfjF7ZVivzxLCkGFMJgHcmhDAct",
  "key13": "3LW8Q5akvQS4p2aD527UVKfmBPYy3sHr2fT8nPcgJtJwvK4L7aDiSiz2JSvrLngo29rMt6TQwmMuAkXw1Nt315RC",
  "key14": "2CJNt4vpDKYKo9165x9E1YwHBcg4K4VFBPGmANoebo9CViLxATFsKnHdpvu7JPsCxKEACYNLFE4cggsrKaWiD8S3",
  "key15": "VxPreDJDCqH6Cthh33SDMHUxwaiDCRwoWZYJDdMkLAT7JDXKoEqJQeuxdS9QppCnsMsUxh2Xp9QFAcfgEqTDtBy",
  "key16": "4L68fGsMYYD5ATqWzx3HgQxAwfsSNSNWL1pxhZFW5ZDRf9RzV2qbEaCLLUJYgBqkodycfNNx6G3YsH1VDnSo63J4",
  "key17": "2tLUY5NsMoUjktXeVwFLPokG9oXtag5HnzDAFuZYjcmrUorurFCGJBwDRjTjFQb2hohHFbeDoEvJoBeFYXPRFkDk",
  "key18": "5bc87DiqNEVDs9hZkYWLuKT3KaUfviRcx6Z1tfwJX43wuxSDmtGMLLQq1URckvr7odrbgBogc6sTpHkZ6WrtajJe",
  "key19": "25agvcCFVFt9jkxSQYbckXjiP2oRRaoR7mKRF9Kbc4frjm6ymASnpzqjd7e8QeGPM2kHahHy21gVBh9KgeBsMxED",
  "key20": "AzZDGyiGPaBsGzZ3S5GVnCxdiQqQA825cJaQcva2PCBVZ6Z4yjZrY29gsdpEmaRidim8YHxypehoYyGH2zLpmuP",
  "key21": "4W9VNQpAZvjqzq2y2eTqJ3uVJDDf9cHVGyLMTfNPvPxHX92Wgca5FzvgHEinYUUkDwdGKUyp7E6HxEBayiHLkGto",
  "key22": "mrzZKKpHRWdoHNXmpuNiCfM9B1fMuB9ddvSHYuxABVsEppFUELSUWXrM3LYJrNjYYkLhnd2oWGhgRYbxVceh3pb",
  "key23": "3CjMyaUUsDnGynnViihJNYnbMtLjD5fag4b7gR99Yy6rs6dK2cHfGwEs876hSHvD5ALhp8NYhUgCrUFJXsPXmpWn",
  "key24": "iypNd4tJLwUYWT6cYPaJtQRfi1M1np5GQcqk1m6AyLBx6NqZpfCMs5Sxm2wwYydgCaWDKrMVgvKcduTr5upsihm",
  "key25": "6f6pugocDaytEDLWcpDwp4R5Jv7zUCcfAvggxEtF9Ddigifgdq4UeWn9BxiZJfFhDBfZr6y3DVu6v5EoecT4acn",
  "key26": "qmnak4sf252YbE7s3F3yQngj6sM2ZnxtX5nvEDriDQT5WS79gGb1yB3NLN7e2fkUAYbfW3CbiBB7TC7uA9HDaQP",
  "key27": "5DwhnYVbP7tUJTMebBg7jHXimsQbro623uYwHkCMLE3Bnp6xJxEK6PfEBrZiSFQvKyyTJiQXBpTUJhWez4JGCmPb",
  "key28": "4CQDyrWmaSBEDRYHtopxrpFSURV28FYjJRfNkM2qRUkXDs3mw5rymSJQBP1VrMJ6TeSBKAKVyAuf2uzF8YzGHkjA",
  "key29": "hjQiZT4Bd8YB3vkt7Ko1g1ot5HxoNG1gFTBwfnw96PBvq9zkj2KR4s3jxZrsZja8UCa3XLGpp3L8DrUg7qqSRju",
  "key30": "5TCVEbGoiATd1KnhNy5Goco7KqieWoTyrWoNHiqMtineFkge4dr4dTK5kbUZumjSHpgoAFTtVo4GipEhWrutQgAg",
  "key31": "4rfvbueb7StfW4QdDYf81k1EJcotW8hw1vsky1y98FB9vVhiR7chvnc7VzHMDdpXt7UzBGdqw2r1TbWrfvdxqeM1"
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
