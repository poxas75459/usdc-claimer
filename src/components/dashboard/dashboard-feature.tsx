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
    "5tyZcSTz5YyCmbGqXpRZFT9qKFb5e67gAHorZJrLxaDYMFRuB52vsB8LtJqYeCA2WGn3Nhs7jXe5SqrvYMLqigw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CKbcsre26z5ELbNwYp54hp8Xw1Cc4Yfj3cGXjPeyZQwdDcRZ1D1YZhmDYukn5z5QYM4W4SPvx8mwv3xNWLW9rbb",
  "key1": "Q8fbd7Hn2uNyc34GaUJZif2vU37MGoFvqcjw6xe5418c3AzXmcaVY49KpZQor5qN8Q2M2vwJL7htJDGzsDGKF6q",
  "key2": "4ZnxPuQS28aLqZ3vKuDoGUrP3gGzvak3uT1EwbcbHHEYa4Dcsf8PMJBYYQpEgKKaDCZR9tvK1sn1RJgWX2jTkpD8",
  "key3": "5jh74L8u54GatSQrWNHpAi1w71BiQpEsWc4X7vxv5GoV9cYuH5oMEzh9h5p13eLFVdd4Gj3yzV8vJULs1gs2RLGM",
  "key4": "5e9fcKP3ri24S1Tvn6H6cc3KLMUdFzZPoQTVqK9mQDbYYdVjen7oiR5VsMJX95Tp1HB3beiSJrrc4CcrCp2vjSpB",
  "key5": "TU2iotzyXAWqZ3Na5pXMi3h1cUEUJNvZDcGJ54i1ZMzWa65B6Dy7CYCEPpz4uT3BBpBWGzTxkHDozAvuwiNFBF9",
  "key6": "3KEdjcf3ScVc8HxbzVHXWkyuxWqVpf4bi23v5RGJG6iDxRtbEkp4uj1yQ952TmQbAkcaj5BhwK3PtDBEnHpAxF5X",
  "key7": "3iRisH36QYwa6wnqFD9qitmnau82sAjk5dQ6KC8GZm1EG3yCDgLiwHDab61n8HhBFoSFYK6XTX22PwUZ533dyty7",
  "key8": "FuszGHx4DjoNNNapYKqRVovn5czKszXDnsr2yEMpfQPFWFECmwbexJpikKQcAWBDspVh9i9cjvAcKiruTxmkpJE",
  "key9": "5HU3zgbPtaCyUGkPjiUpEnsRkbbKSCcSNV3MYPaR5iaZj9GiuTR2MqdsbaQyjxiFk4n5sDzqhKjdjH7dTudFBmms",
  "key10": "4grCE3QG1vGSujiYBwLxSvUjdvtLxAkz9Yi7WN7zz77m6hFMrtFYYtoBoyeqr84TMrUYCdub92mXFefbgb5WT7UZ",
  "key11": "54yiPYLF96zVtW2Lc7HSkKeG81PQm6RCoLd7HrsWecQzyaWhzZu7ppnYNstG1DbqYBsBEXHZ36fsc2Rw2vJi9qzy",
  "key12": "2wpFF1GQKqDwfjLbDVkBBkVbTAC5HjvdcVxthUB4AV2xLJA9oEKTDCzJDBE2dCnDSRRQnRpNyBrUNV3EgnEYRWWz",
  "key13": "64nAst8LWyrnKvB6ZGw153CUFnAVkD7R6pxZkPptoYZQX1oBa5ZrapPQspPG2KkrPUSvK1qNUYT1Xqp8Srpq1fsu",
  "key14": "2AAom1UQbZLcjK9APPd2hnCnebbxzaXRMt8b3V2rTk6WJJvYGf9kWbWxYAcgPhACKo96o6DHHv3QTiCb7EegMLUv",
  "key15": "46mtNS8cTTgRU1pHMqKGJoQxBk2SzcB3EFSUccjUJPcaAxRRPmYTrvCECdn66QKP9kPeaRS6LLoiv1k9V5fiXw5W",
  "key16": "4oPHe5f5Ms84i5kjMafkfRCVNcq3er9QQ4pkh1UECgrYPYRkpJcW1PsnWaywsYj8cwKnPm2giAEhotq65r849aQ5",
  "key17": "3aipdEqEDfwnhZ2zodMbw1PDYYSuL8NjJeenazzWKdq7WsEkaqPBZff8atWosYcLJLLHQZ7Nbrdqb9ezLmxLKEoU",
  "key18": "3QjNVAybuEuPY2wRgJHg3MSaYchUCbGnzDEg2MwSgJ7Qmvufmo1bkFaHXdjZm61VcqVPY3Ro3g9iQVGn6JQYKUej",
  "key19": "nQhcK24dqofzdcPJjqjrq4wVYxtGpDrrBbnQG53dRtMXruYQAos9ixU6vGTU39b6fA6ni7hiMRHcLsa6Sh8Bzd2",
  "key20": "2JdTMXotDYDkzsjHNDogUmqekNxGazSASM9KDpyfkbFTpKAwawcx35tN8ByNZuHTGXdDQbXcAH12Bk61w1N419Sa",
  "key21": "eoZJkH9f2Ywd2UoJMvDqm6rA7odWXV7ULmNoPMZ7PwBp9fsSswwsWk8nuNNnfgGxGXZZ3GcSEcZykbL1sKB3j8P",
  "key22": "43X97PSCNydUycKdAzyvcFdmpQpHvGUUh4U6REJ3hVPgD64EUHRUkQgBmxhzYd2ifS3tZvTYWLGv2yH3i8R28QN5",
  "key23": "3spzsNaFcuNyPHcpDAtL6wUWRX472c5JVdaZBVVjGincGgVwW3zvVuX9zbv3EYSK6Gd7ATs3VMjDh62f8ADuMRTR",
  "key24": "5vym1NzCMLvvVnSbtf7kf7aa7K56DdhUQF9CagssKSYosbsL44q96g742CqXzz7Tihqerie6wx5cHVTwWNNF8FRf",
  "key25": "5GaFpnw6sGpzmvMAqYJrddCa3LS9oZdGY54CsppNH4PAMEiZGxCx1E2fq5WQSioW4x4x82i8MZujCW7mEY7fbuA3",
  "key26": "23gJ6TxD1uqxCi9JJNjRys2La7w9ji7SyQ5SVX8ox95mn4SXYk7pUd8JFu4U4S2SjPsPDcSBKNSvQbpdPwnD5Ab2",
  "key27": "2LQnMFQW624C6bgD3SPEj2xbCnAPwYk8thPRxogx73Q3xcRoxe7EDNeNYWUexW854xL8zBPpAadqxHd6Dt6etZbK",
  "key28": "2ct8XNTG5tBGmzjQ5FoPR5dC8fVj79eAW6xygx1jP2ikhe5vesHjGsSXfkqxUBjqcNmsBubeVCwvjU2pHE7zHT3J",
  "key29": "5NuiYsf1Z1qXuH8Jm2X1LBffFYXUhprVAX1amR1MiwJoUVRF5XVRMZckStjxNeGMeNWnZ1GEshUZ6onUSDuaGHKa",
  "key30": "2SFCdZuCa6AQUVRKtjELTinZrubwJQK4T1eyx94Uw1aGDphXYRU5T42G1uJkeSmAJc8bicTKijWwiLMajcvLw6W",
  "key31": "3ayoACn5NijTFqe2Jzw3THHfysXb9BAkYeeyZVmK7ghXhWDJ5d5Y9AFUN6pZninUF4qjfoyKG6S2DNY2U1C6dZcT",
  "key32": "5BwNqAhppsRiLp3vdm8eYa1216jd8Gn9t8uxSbXmAYJUYMPcUv9994WLMVQU7kSdUSUe9BaCnpM1x3J4C1LxFAgP",
  "key33": "3PMHP8GXV5Es3vA7xJMsV1fQc1ZYMZ4no9J3Xkyaj48ZZ8TseCPnL2EvJN1aJHg7MiNd1SPqRkRgEzRyFkgR6d2N",
  "key34": "k6i23YjWSmhSWnWUDszYK3w8FqeZzZRz3448KmPitgTUz1jDRY7sbexNzQQHybucupB7FRj34NkWmMHAdsPM96s",
  "key35": "4odGVEp8tDJihBTDD51mZJRHMQ33qjQn3D3eCmKAiReifoBmYvfnMgxxyBBHMpKrzMB5g8QJkNfCMB9SEYR8iNXi"
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
