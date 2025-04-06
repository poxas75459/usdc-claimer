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
    "3pzdPJ2rCuj8abAEM5hEfwmaKxrvdMCtEkQLNm4ahPwTvj1NVFGqEaMyHdTFirwt8cyCrMcQK2N1JLB1Rd8MGGc4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XWnFEy2jxFpewxHDvK5FjNC66my3RdtYsGe2d5rtVZYbbapA1BKZasby98cYqvKaNAHsUaeCuUsNTSefyvTWfYX",
  "key1": "4uPynXVwxDa4XC9H54Au3SFzzNu6vyANx9N9w3aid2fg5L4tkBfX48DL4cwhf1pFvYgpsJd5peUcdhuE481e7Z7L",
  "key2": "2g2HhHC2djwgZw92fvQLvJgwjvb4U5yBpcf8XVn4JC2JoXiP8DTxHGYkUwbqGVgtU7wrRn563eXzrkTSqvUZ9dNJ",
  "key3": "4hKxdxjskFsSit9w1Jzi4eRLpCcekAFQWaVV9ZCjYqFkQ7AACKVZTnsXSefegpjYgJ4TiiDkkgH1bzqKZSaXjGpX",
  "key4": "5FwrYPsqcMKXMFm1yS49zUHm4GfcBgn8ANYaiyP3dTrmZfDyz4SqsWAGSnVi1j2fXApQSJA1SFKpAHXSN543CokJ",
  "key5": "LoBzmCRES7od1MKUJQCoN3CVK4fFfHoiiBwPu2nV1XMDzVKxrCL5Jar2UjMF6o3ZzpXziQPj1V4mpULidDJHUdy",
  "key6": "4HPzzQXMw3MzRtNqyQyy8RWnuZuGCg6pzg6dRS82NfrAPiFj8ePDjqMvevhCSG7GkUD5AytXuGGh1fjHys3AVuDw",
  "key7": "BQfFu1HQuWiz6BhKPrjKxStfch8f5KFvf7xwpMnWcm2ostuHYm7kFRmxULtgUG1ReoJcL7i495CBJ6sbcmeWFzm",
  "key8": "uvjXj6gzN7D2ouDS6WGYbkHTxpKjudYGxg4s5tRtfjwnoAUcLHa4KsuAz7fSSBm6DGNHsdnfnPVsLkZtnMwEh8h",
  "key9": "5HwhK4N9RsBdbAsUjNayQfPWsS9uN5L1KAvhcZkBLSyETYUeabUhnhn89hniKm8g2L1EJYK9uUfxA5P6MSM2VYRT",
  "key10": "4TM87dT48tHKovFkLfJgndsBmdXg3TnDJLsrHJDECvazkJuRtugiyHm8TaWGVynkqyEw3nB5NtzvN15NLMBuyYip",
  "key11": "2axxzPvzDYDpnyjvQwm1LvpzRUEvcGvNgXRYJqv7U8zTR2sZcGN1c4Em5e5E3RbmeHe4s3bjSkNwphuYZYe4yatR",
  "key12": "2xjpsKFzG6eHcAMr7FjaB65FV7SykBjvDSZYfeZhcFBu1aDz428PPGRWhbJtXMRRKztBBLpezK8f8K9HSMoPsApU",
  "key13": "4CTpessxAn4j7a2LEPweZt85sARQNE4ym6PcBC4B6B1asf3Uvy9AX9GAqpiaUW3my3kW1LKikEu1GYdqvpn28Coc",
  "key14": "3SBrVEYERRpdvUUGiHYMHDLYoR6kYg18aGYzPsYgWKTtGEHmPquwrLUYHW66fQJEpKGWPxV27LbDzLhVk4QoJagR",
  "key15": "CPzpZemnExheE6JDrn6HaHFSBLaLhgUmUZEViVyjW3kXKMn9tzMic3yr5KxQMTAGSpJkBwr5sS4srbvVADueCfD",
  "key16": "5aXEYG6ou4Jvxw2ZQT7KQShzTyShAaEykEDbVsPaYoUkCjN3Raz9GCYywTeCZzL6K47MCfBbgBa7fHYthr3aQfYL",
  "key17": "YeMiuG8TxTSiHSShueQ7WrmKDr8S19iYs8VrDZFoFSyg3Bgiwu6jMatygwumCJucP6NyG6biZhC6ELV3M7Wcs2c",
  "key18": "5tJsS4mpDREpJK2qshdE2nuuMqecyoiaGsKapeWAyf3aVv4cSKRdC6AKgbTpyMfWUj3VhXjtwadBjx5YVK3QTDyy",
  "key19": "62QauoEoZ2rgBW2QZSGH6KrSCXJGNth5qrkyiKrtB2WN5n6svUfwdQZwgDCedSMW3QGx9CA3oGJCo8zuKBRff4wZ",
  "key20": "sqaEeyzcHxeYWjP3fsXFshaE2Ng8uCvoroGLTz1iLSiV1CdKMCNuDNbGwJWkafHnfSAxkmXqbd1SnwLJerBV9by",
  "key21": "31Jdsh5zXa4jmVAxfpVFaiHJzLynjyUQjhHzsY28GsXRiiP5T7opZtgPHD9bx5SbxaJAgaedUsgydvJLgfCmb44H",
  "key22": "2SRMteP3XYswDqz3uMgBpF9r3yeVcRQWcEFYEYeMf7CPAFtoXSfvrZL19RVq1k47NuxHGr3ehFzeczqcpk9Wxoca",
  "key23": "xiZjFJDM5Jecqs5ZtNM5R667JyaDcZ5wMiaBeTjrg31bq7eZmrmYrjy6HWibtFp6Me5M7d3UHx1jp2q25XT2NwM",
  "key24": "5YvMebPj7jXbx6qe7tyMHDsyTeEsq7R27gXfAKo9S5jpVUKD2kz8fRmGQuELjZRWtA52Vs8fLgSidavFzqF6ZYBA",
  "key25": "2cwd2GoYUN3MtA5oRnqEBpADC41j47z9xGJBx9BMpRy86K8ZGHBNd4bhb1LJ99RpBCxewSCZ3JjHVhY2sBHM3gUM",
  "key26": "5dU3Babro1R766TQyXmns6xaznMvh8efLwMgSiHFkbdERBezMckvRPG9atF2TgA7JVUG91ErPcJ3dbdABWWtH7gq",
  "key27": "9yCg71LBUP6SkS2XtcUuCkTNrtcQNfDXTmSqWyBFR2B6eghXXmPHuE327UvYEWBUTn2TLKyRuB3fVwVeSX3dutn",
  "key28": "86Fj55mjrR9bbxnrpWzU1UKaGw6mwZnfTXpVnf2zfJQjti1C3y6g8o8VPFTDggRSoPZpoqW53qCb7ZBWwXCA76C",
  "key29": "26rVCxthk2Gd5SFctuXj12apiB7r1TPfgCYjUrRMs339RqMbE583qUAJxg6XSeoeBGeaQT6rTfJzd6Fd8fjfvsDW"
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
