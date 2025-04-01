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
    "38Gg7DCcr5Dr71AW8cnMNuCHRhTieViDWeL3nLqJjx2vKorsa9WxDvvcyvi2yxUytTgJ4MRADbS2biRD1LQsyLUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zwka1r7Q1CXu9wwneWTjxHnWG7ZTVTxEYyw86VhaT5Li4soJUgJUkpjwmenPn4S8Bv7TQHSokVP3JF64LJkfLj1",
  "key1": "3F6v9JQx7FcU4d9xUkdb1fPrtg2n6jrugdTRXHM6BiwRBkn47evJcvj76UYwTCgTJHwvvwkZoudVX1p5Wt1nfVwn",
  "key2": "cvXzFMP1JcbBSxRgi3vnWcvLMysETwR7h8PUJqvfgPPV2tYyRi8cGZUb6iHVJMj3ZC63pQUjysX3MaaYALmCSEH",
  "key3": "2fDzzp2gATvhY6A9xM43T3gakgBtTLb3wismBw8wfE2pendaRcdmawbv8TV25cjb4EvyZTKp69CD58RszyPXRRg1",
  "key4": "2FX98KR8C7EXfBcjunsKwvbrMDtGseV2AxxQwLTGB4isBUtJ6qje3gtJQ1BjipTuuqyJDUXcBAv7HZ1w1tiNd2Ke",
  "key5": "2WJbWqg7zq1UMkZ6mudAswSpdPBv3ZPEwVHFDa9uRTkKyanDCVwasYCJ5W2eZzNkweZw9RPSzSj6mJefwPvKLqZM",
  "key6": "61seVokFjADrnWGkjZY6XryqCpGdCdGqfbLyBnV3MSc8WJTotNcYcD8xB27TayEFHynXv6GznWnGyA75GXTANFo5",
  "key7": "3ZHEw6aCexQVq591rCVt6AtNjU22nHh5jdF9uvwcBCKuhCV7FzPmZfzChSZJfH5KvSL2VaNsEyMz6iW2Gc3mKYC9",
  "key8": "HqDUiVBS49JU3oy18kvQxKqoticedaR2m9aXJSdSoY55TwfkTDWMJpENtQ8d2pFwTPmQBGHEnA4jWouBAvCJAVv",
  "key9": "LURFU5cjkbLMH25tiFyLURqJsRZrmFFrdRDdxf2FtVMxwYh4pfHr4UjNm1948CTGBwPFqHzd77ZkqHpaqWNqZDE",
  "key10": "4PCMS1qJqnj9wzE4rkRugXefP6Zq1TFDuR97RuwjcACV74MhYiXwxyA7Foy8KEbt4UYAqpnpPDvdxgkweEg7kpgj",
  "key11": "3RStJph8fUsbaga1o9CnAqBR3vwMzfrYyYMDKpyTouFQ3oioZii3e4aXa1AQhbFLjJV91hs7wQVL4pSFMoqKoUS2",
  "key12": "521z9FRy8af15r5k8SXyutAwfQTkhPDX4XueCvwyK7Xu3C1LdFdqtdFvzfUZfQgcf6rzrng4saNoAFXR2zq81HGu",
  "key13": "2PN2BE77y5dVLe6PomisDKEJbDdS8vXwGApJsmD4uGvor5dzmpGXwqLXKbpn8h39znuHJ4LamJ8cduJTCfzhzV59",
  "key14": "3ssXRgPg9L3XBQFxAv2JwgH8gvRXygdwL3rUyHwVp8SArF5DvkLg9sKDssed8byRwenv4H24wqia4QxxC3HTt8DD",
  "key15": "23KYc2EoouNSPZYQw5nLd22qpYZDGZCK7CS85DXuubzjKTyH8H57npum8gJdPmYbXzdQARouYPDFqAb88sbvLGze",
  "key16": "RnhBoa8sxb5JsUD71KEbLVa89ru3tfesQSSuAcbqDy9RiGNHbem7XQh1gbGytC3QyWvpZEg2YrXubtVY9DUy3fM",
  "key17": "b5ykHu5btnMwbyqu6ksdoLpirNRmPfyrY6NZ38wW5VTihnSF6U5Z2h7exZR2CJzbmj5DUHtfgukxN4Qi2P4LLtp",
  "key18": "2aymZTvtAPikdpa7fcdpzorGLQb9A9v9i3qnMthziDfunpiMMFaYxJHcG5DxcXJt7KyHtRcxHX8f4LpNSrmfNkhA",
  "key19": "36Yionf5xGbT6UzW4VACUTMToUv3mArFbix1r3cEts4YdiKbnaTZTu53SZvUT9A3192kMSHtsQcRtfnK2N2Hm3Re",
  "key20": "3Gi1fS7bXDNqcfy9YhFYmPqmf7iP6ny2CoADxjKiCy5L4gTdm5a7NKjwHbSt6RYmk8kmHqbnSyhY96LJYCjRnxed",
  "key21": "5BPtnAk7vpay3MFTkojP1S9rapWAvgJJa9mgyY88upfJCTBS25xGz1pg8Rt73BGsyJhN749Tz9JLnVmze21k1Swy",
  "key22": "2J6PuD4zk95HcTebbYgWSfuUd7tpXFnJL39M87QvSq7J7sTixfEFfMZkwZiqybDkJ7qm4MFFmHZVXU5Hm6ABsfDB",
  "key23": "3rT2J5acrVRaXXsAAvqbaoRLJxPyWKvYzPzypWk6pCMD7wxoPtNps6e9DjDSsrRWjBsCPDy5aYDe3tc6HPSSoSae",
  "key24": "26PKUubF6bjzrpk9ZCnhbsMdhRkZaB71ytwLoLidLXyaz42sim6TaAUT9kpxqUF7caPT5e8m9VwCAr1dw6a6VRHY",
  "key25": "2wvHGmjvXb58YVoz6KZ3WFsw9zMjiiqoinQRdjiykEQfL1ycAZ2wYW3UXNWKsKDRPL2ctD6zYvgJe73JKVb6tABt",
  "key26": "GAUfUBRxQ6KU7vB8ERPzFBQYw1XobdzZonpBxRmxRhuCohMXgdA69GGm8jrRNPgJPKXhxbcKFj9eGeKYkqL7QJG",
  "key27": "4Hh7Pd9f5AF7F59xFpvvacc3AzomUH1G2RDSUBhoRsFEEG8u1NDm4m5zeNTRNYrn735cMBkmfm5swRg1feBbSZVL"
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
