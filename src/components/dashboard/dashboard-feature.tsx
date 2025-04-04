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
    "5tDXrGqAvTED3GLPcBCQ25w82tGAA48SZwwvape9xjzdwTL7eGbk27MFNK62RKWGBk9bNtkxXmKw8qJWWjs9FGrf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43zKPbEwPZNhNuNpQ7BQiGZuuopTW9SDXhckvVQshNfCdufaSStMbynttsGgapj7K7Kr1DVYwsfVkx3VmzRejGA3",
  "key1": "5KKCZdmVJDfbkc57TCPB5d6TYZt4ZMHSDt69AxehcCQvYkYCGVTLsZ4eAXGyzzHEgFqBLATNeuoA32Ge7dHsg29M",
  "key2": "HpsnZQQDUz6GCX45DNUwNoYDhNT9aJyoMfsfVySk81euUTsifafvGmjJVn81nvGnHiyGcwCscJ9uqp6rKyLgH5o",
  "key3": "3qqzepxawTr46YHo2dfiyvAnqwH3uiN35MK9fdzMpaqvnAKsoVJLdHhcYNNczD6XqXy41Sp5kZxh331caMvhVAs8",
  "key4": "561jikb7TMapPrEp72WxUvMXv3J54X2VJrJtoY9gVQVwdTaP9Wi7fo3iKMCzxFxdE6ScRqiywKzyRekSRms81enw",
  "key5": "27TTR1kPaus84SjfedLsokj6CAGgz3JCpGcPdKqpufvP65G3iP5vKVKyVuNz9tPXm8RWCFyX5yu5TRKX1iuxTM3Y",
  "key6": "3nMoz5wpRoy1ZbE3w7YEyjukjRpwS4TY3oZDDLfA5CDe4BqCzTcTzjntC8SkNt6BPt5P9YqTfosMNamT5yPcAdCA",
  "key7": "5LT9PqwFUvUehhiBqGxBmqeoyF8DrxtizTSY9MbuY4SSxmM86UcegeSZQXQZDWSsxvjdeq45KcL17UJKxp9B73Ws",
  "key8": "5kvP6m2phy9A8frokDut94etCRHS4A8VBWwohPZoXyGU1aLnzewgr4t399UvZFCXgbX8TSGNBP1DoC5LTjvfJWLG",
  "key9": "2AbbFPYzc3qi2SuB7WsePbBYUQo31cfqCyffJ53PyJSfmcTskwv96ZPMJi8PA2xe7rC3MWnaPYjTHUi4Ko35yx7U",
  "key10": "5AxSKVyLjBXdABpsD3UuAUB1qsmg84pWTL5hpfHp6fmNgVcHYtfHGW7CSw1v2cMsX9Re2vRLkX1GK29qZyVtd1k8",
  "key11": "5xCRnAbfTjTY5EKdQoysVqLAtUN574AeotCdpASjqNm2nY1CZJN11ZV3Mbni3Krr3H1HvWtp3n7isGp8k7MSAr2H",
  "key12": "Y4j6xymyFaRpSHd91j2n82dEo9pDJGo7JoDvuKnyJtZpfq5VYkHBvE8bwpuvP1RoRhwE4oGymzuz6hqVnrfzkPs",
  "key13": "5ep2GWLdRm2Q9UzzR41PnDr89EiQMgDtJDrG2M3XTuW6zf764j7Fycus2aE42z7dEqRh9DoRz7B9kRDZSmrhkRCF",
  "key14": "3GAZ4QrJ2XkVJyWToBbbSs6dAWy3DGJG3xd2QiPrh74kwyH39ozoogNDd7Ha2vKWuA6WGgvmNcfNeE876ukpFfJb",
  "key15": "2HHCGk7QABXAehMe1HEAGnr4PkRycpex2p4cZLvsDTpFMSvrmN1Q5dhBQQ7TzZReGSgYbud5cPTivhBLCaBv3VgK",
  "key16": "244qyGsW2e46N6HryFtowtKNV87WfwAADqhyHgML7ZMuZnGgd2LKGhELukLyJzjj5dmcGiPsPoQ8mfz1n5pRFJ4g",
  "key17": "5PM7GYHNQWKFunpv4k1vA1t2oeHA3g86VjG7VRHFY3gnhraKK8NpqEBfneVXKRhmKfBsbJT2rkoVo3c6Lxg1TABe",
  "key18": "3yZxpUCsdZocU1KLQLm9hrc5ZKXjL7yiNxKS5Fmqp5vdYHvQF1YoFwauyxKYGHZF9owQPPysVunxN8ddJwoS8gyL",
  "key19": "4FHg79k84EQwwXU8BBy3weUfByQbXECS8y4CSbBLSYAwASfGarnGHhEW8o8afz3Gf8VtkGqUnCoaQ8FjhKsFtKiY",
  "key20": "29HpWSeA5cxMMdSySGdh147Pis9DxMFrgKSTMrtm36nc5z4N3ntxTFnEyr9eFH6TcCyLrSDhtPHtHWce3WNPKJ1J",
  "key21": "PRdzoXUVGEB2zKF9gH2J8kxdLGTRSZ3BRpDamVv3qk1EQSyo7QcwouFnNTDcA9Hj6m2vGkJ9hBk9Qp1nAR5BMMY",
  "key22": "55xkNrWb6jnDsA1pvWvjXNdDyw9TCqAh47tkAFZBPEj7qXqvoKPCHdMzCcXfb8HYeRXnMU6ArkPx9nA3v24ckc78",
  "key23": "25k49WKCPo5poFL38Q7p6JcswBDFu6P1HjByWVRt3knfTybZd1SbF2vBtKhBhq21BuBCQRqCcXAj13zbMmFvkEE3",
  "key24": "3CrUvmEbL9NfjE5cdR8aHzS87DsSLaVj3V7RthdxHBsLvQcwseLKLYp921fMTHwMSWtMjwxLvcc5rViBWC2e7m98",
  "key25": "4QodnW4k4Lo6XKpECxPDCD5w1s2QAaTzTVPTsauR1hBMwTkgMBoK6oy52Du5KpS44WUQ5L4gSx2uXS9UvSzVkJgC",
  "key26": "if1qhjHFjXBUbmihAUDmQvp7ZLGcPCQyavitPMJyFHmHdHEEFUzbAWHntZcv1HqnvsP6KEYwRe2jAZ1yXyzW8rL",
  "key27": "2s2pPSVqDbW9L2iq8S6b7E9STsWw95fLiQjAqACJnsGmgNftzK4mrh1AzyLTa9KFJFtS9WQDcX1sSpoKLL9yFvKu",
  "key28": "4ZseiSchPPV4k8eoFEZXfahofqjzTBGGpH9TbWvy1nyeCnDGg7mraA5RTE5Mg7wLXdhEybLyhzoDU2TzxZJVjLDt",
  "key29": "4CZeFUQrUvhtbKN5MUtPN1LDynqXUt9LC8gBjihac3FUkryVzfRtMJ6jwh16FJFoHVjd9GAj66cg8zWrrWGmnXpW",
  "key30": "4cFMVf33WvgZDz2YLyhKc1E8m4U2PzqEsWo6rDRG8LC85zJ8yrTPwL6nEnmKxwgDoHX5pLRo9MfDoSXiGsga1uwx",
  "key31": "5H3LKeBzSfzxF1N43PT6gfLQnJckuTC4PRRYtqykL1dmfwZs49saPceHp5AVpE2bEPPR2P7nRmSR9u7Qvq3XVFst",
  "key32": "z7kfgsDjnqZSmEszVFiGceLjEd86Lw4KkbQUgzZjHvuZC6rYyZrB1LyuXSAKFRj1LMoaScsDiUShj6V9gCCD84b",
  "key33": "eg1mSQbx289ZgDEuVEMMKN35vdivp6ZwCuw8uQvhboiEZHV4Ah3jpzwb1HWZZESkga2NkFqVPA5MumPcYUuoknJ",
  "key34": "4MfpABsDyPSUqqBtYbpe5xpc7G6L6HgdHPUptNf8cHW7nMoS4gMKrMY6eZVN49Jopoozpj8m1T2UzscVmG9CaaCS",
  "key35": "2rRRav9QMEkgBrsJNYyjmyus9gHhT6xBtVf2MznfvRf69goNtsdaZtHLGqPkRwM2kv3wwsPzvRFk3oBfKJ7AeNmT"
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
