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
    "2bNMcijVko9znEk3KP84J33osPHymxz7HemzRYiYmSFNsHiPk1WJF7jY9HLCffsgAbnC7m89T3EwTS8YBtKLap98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i64LqGur3CYMHeqafovnADW2zxJGVR37gCsyZYoEJ1hebc18CYPGf63oWQPSLvx1jcsEfy1cYtBdPCxtTRBcxR7",
  "key1": "5LQqDCoko4xwovRYwQvSwPHtXE4wXemzmVzntrQGcRqMabvJgeQR3j6WsVrK7be5kB9K4CXHnutcmRbHhVYyGXWk",
  "key2": "2MNXDJVwmemuR7cM5xWmLU1An1ptTNYyY7uvY2R87ZS7dFdKp5Y8a68RigCprdqr1cDDE7dQts2UHWawzEWHujLs",
  "key3": "fW7cTEJXsckCDMAAonythpRpEsE9btSE9BVJLWUehB2mNsGK1ML7jSAPrkSZxRsP39HHFeEZi1mVWcL2NF8Lbei",
  "key4": "3TmdFe8MqA6BN67NrxSxPS3gMa1YqSaR1PnVrU29BPtJLeMjzeNrrpJcz7Dvs4L6x5aSZRQ5m2weBU3WaU4h47xL",
  "key5": "u4jzk9eC7KQVk3KfHg3s8w8mtC2RmWALV93oHC3msaJFfWi2af4uNFQyrmARgizV6WcPHh3oXB4Mt8Fgp63qR8B",
  "key6": "5kYjCcagqZ7nxUjSkVPydSVJyAeLqQjHDZ4pKDscYfQN1nDHY9GVcEqa21T2xfmSjVWjP4XhQSDHPACexffSArfq",
  "key7": "27khJJ4dwvYUavYxs1hyCyGiSbS7wrHVGDotweGWsVC6s4ETRTzsQnhGhPKeT6ee7wqTivGZh2gerPgDjULgMJwS",
  "key8": "5Q6GNUgypja7kEM329esxmR2fQPXVAkp5tHkw91XDUZXxJxT1vAPUhM5ydEjo9Ysfuo4o5W9cdmFf9Nhj4tuPzRi",
  "key9": "4UT6tzHrNdmG3BPnAdwS82b4fWF5QKBgagp6JHFnAgXTsJDSUZdxJr3RK56DvXtqXwhqndQY5ZYijcm2iXTFQJzD",
  "key10": "3pnanmwG51uuzGxbh8Bj5nBz6dTGKiqvigkNxFmthkeHRfieKa9edBqKwcvW3yvezfpBGn7Ndc2UKZFHRGTRcdjW",
  "key11": "MpwqkbZUp2Y6PRwSzQQzzz2kFS25qxL1gLk47e17MpdS2ZJnuEJ4QwTqH99rfFJdyYB4TEfeG7D8RCn29oKncfT",
  "key12": "2UZPeKAGzccWjxiPAF9DaS2zZiSMoucvt1NBK9CMmoN5G5p21P1ZnjRN6tG6MFyHozPeeg68cFxne9YkTQbYfGEo",
  "key13": "2ZUkmnLUJquMpF5kCLkHoJ2Ks4zpPvsAscz1TDEDx8BKKxNAMDHFLNH6YtVJ9oEfhPp1pta1Hbq9xkfurgQPVuPA",
  "key14": "62nR5uuCG4dTM1uQ8KP1xsBhYMTv6F7W2nDcSNBHFCGfqZZDef5Z8UeH1P89Hgqhw2T3Zau5TYKNT2tBSaGzH3jx",
  "key15": "3thygvJTfKa25GJNmDnihz92exE91zPdxy5fJaiVZcCyZ3jV2c2Fob4oP6WBJTVAZqMX4kmmt2MTPTyj9wayvSVH",
  "key16": "2oWtzUd6Zfay3EW1YpWmnGnnAAT8ae9yL84h1Nocvpi3vK4fKUbJUjyoxHVtDF5HDRAQW21vvS6trBtcdUhrjoV9",
  "key17": "3oHJ5duN5MyK3PPTXPmVTKF1EyfDNBXAbxP5mRkJdXea8HmoqsawYUNZiKofEEEmEKeg4QYrG8SGdsFxCjfuYkf3",
  "key18": "3Qm7ADBwQua9yvmjxrrUoMSJUfMXiZeJNkFfKKQ8ayJEpoHMXdb1jjudcTSBKQzUwZja9neSv67CkMEairdYhcHy",
  "key19": "3rBGWK2b9ZTCrGxf6U5egazV9zNfwonE9By8Mns7Apqn3L8JCS7BvWQN56TJ9dYDd1wjVy2KFiHBtjai9SXTFSwW",
  "key20": "3opuxFbjpYQURr7GvpoYc3jrN5t7GLNgijUiLRdcKbPvahFAwCscbYstQakLoiapf3NUC5q9dMGrHkXvY9RgDpgE",
  "key21": "2qdwVDR2KrczjD1ppeMGfEEu8ECxhnRF4oMVKRgU3xrYEcEcFnYKvPdvpjzBwUW5FsnMNzSF7nA1FXWgFcGGcHez",
  "key22": "4M6s1RirY11qny6ez6MrjQPBMSixbBvaGZEePcxANiXWNFNDf4rLHjvddGANhorjzbLGt88tziXgz31EaNXUxocP",
  "key23": "5hLKkuru29PQg88vYd5nEvenBsewR1DHMVV6NjS4MDuowpKonCSy8XBfGpxSswMY53bBz2rXRXEEyokoWkbZeeiC",
  "key24": "51vtSxALjxk6U17QyAXKHyU7q6ruP16hUoz4UEC72z5r2vyqPJ4pbYqo2hAos2mpWopTvyZf1wXDzhbfHhwapxui",
  "key25": "c84PfKJGvQvi2BZo8cqjGtXnpR4j2dapgaYBNjLSftxn7TbvXbfSWQK4S2znkorznMQV82ybZvAAvgwAgvmLmBT",
  "key26": "uLHvULihF1AJLjc87SyZUZheoPoEN9xvnXo3iDDbUNFHVMyGJNiozgjB4PkcpDfNDExTXndbduqBoTMEguJN9aK",
  "key27": "4vMUeJZuGb3s9p2yZeLK4XWnjw4kwz9dfWK9LycWvAduZbjMjvjnB12fT82prZyLRVS4vCH4XZY7ig57NG34734B",
  "key28": "HrEq3p7w696gkgosDwKz1S8ymkGkxsJAs4ngswwfMsFAe7ficscnWKE5unCuVF6zUt8i66tUr8GXA6FFUB5o7oN",
  "key29": "5J4LB7NkGUPLGXFokGbm7imfpKjxJkwfM4JzKUmh2RPGeqSNZzWTX9GEsYBrDPd8q9vkWbFLuWQFtsq7nWBMdRmT",
  "key30": "2UPt7vGc6xpqWDCoguPexRWryYZoiNmXywPcCc2d3TEi8zxqqUNNrXtMbE4hWZZbwzzRQANEBVQzVLUXWaNZ69TK"
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
