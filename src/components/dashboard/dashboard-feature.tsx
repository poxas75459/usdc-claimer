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
    "4daH9b83tea3DuZKw1JzbPUr9hFRbXZebgK2eCgDQcNqrK3Vt2jBUv1STDSLJx3gM2Q2HShhk8LoBq9A4ysyT41F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54VTaRg5FcNPXBKzcZ5va1XiuUdRKH8emDrgrG8t8byzh6c7F5JvwyGda3SGMcdsQqPH6rrJuFYSuGBNu5b1afCM",
  "key1": "gq3TKLEoN4sn1G8fJNGzgoYZT46PLxbx7Xcxg5hLHLEj7T8QK1jxZZcdWhWPNWpJaLFrPpGKA1Q8bPyR4iqKTtx",
  "key2": "4U17XGnho72xftNPrUNFDrAXZUaRn45UupQeWguneZZMyLRFA3wG9HKKPZCaDZ5K6kmfFTkz1TghfDf13HqP8NrF",
  "key3": "4hLNHnYPXbonJ882BS1sBSD3f7U8LPTdZZVjaSQYeHQ4DvKrkEAqTPospHVfUsUo7FMTfu9DBvyJB2a7s3VB6aP2",
  "key4": "2fCNswowcZvULaHTn5HndFvGNixx8bU9HJ2MFVRY6TaM5KEL6t7UEGEGyrVB5292TPdkNrEMgC28cadKHAo7ag2g",
  "key5": "4DfjXBNunnKoQ5LJJfJZtX9Tv26mgxtt7Rr7c3X7LixKb9qMUs3HdZ4miBDewDPSZC3kgjxDG26eoRrCGAuEJYXa",
  "key6": "2cFGtW6o6brLeVq7UkhevN9AXvUvMAjSnHkGSQYVAHiyA3tEECrSgnxLLnvQNqMBwmoDggWnkTRPyL3CzodaAzLm",
  "key7": "311fnwwC8qRJE41pRThfdA68iLPkLTCgTPiSo16YrNDqaeNKzmFA5aWuTfs5dBofa8RWMkBB3uNqU1HhaX3p42r4",
  "key8": "4uFjxeHCPEfH7vT2AedXV7T2iCZBs2Bb9LSv6WTLwCkvWjexv3qaEmWTXKWQb6y5vBXThooLQ4vGFsQZYpGVw66H",
  "key9": "HzQyYY97eaDBteiSFnYkkdxTFtb9T8PpWBGaxHFdefmeapEfrbyqMpkC9xkrN9i379RkFWo4ofg3fXTpnxT2JiS",
  "key10": "2e9o61kizdVgzWMV6FrsDTSZRbr8ZqWJxTcdtvJe9pzCbgkfkRW2PPVCDNohcyu7tfu5y7JJmyBy4BSL7XcivD8V",
  "key11": "5w1bJZiiABkqYzwmzF6ZAefF1nkmjfdSGSCFzoxphxY3gQdawJRNnpXURtGGyMJa9ebunBBigNWnF6koEwsY75UA",
  "key12": "reR3XAVDUUMz1moSSYRTDgR7hnL5G2n7cnUaMHm4hCJfCngrw8m6BfgSDGLs9mggdePK8vgt6PUniG9ZcXQMVzV",
  "key13": "619WtWb9WAN3CtmZA2NNmXNyyE7eZSegx1HYv6Ri7Ybk6Dohyg1QEJps9xPBCeh8im7v5FS7D25XshA3JmLPViDr",
  "key14": "SHydE44zX5PqmVeLGZWGweJQbA3YHLtZp5KBJoSbELeu5d7oV6SiiQJ3cb4YgFMBpnHBBEzumTfqf6uFrQ1k7Ky",
  "key15": "5QaWwrpcVks5BAdY3ZVfTUrKHaes1xEC3ypheUsxCuZALsmGoEDNjrsZjgsurB7dLFmww8RJgjGaDNZg2pSzd6Lj",
  "key16": "63FWUbsNCrmgcbR18Zcsv7wPDcxgCjgGvfCP2i24MM4fNCm7DjFKVsb9jUSwpD6oxjEjLPFBn6vmaQymmGkqtajZ",
  "key17": "5Mnte9aFv6SaFpTVygmRf1fRN73k53xfrn3ViLpjuhy15z8R5AGcr2JmQHZFApTLqL4yjTxXLToEYujeGmAEzDmi",
  "key18": "22QHDQZkGa13NGUTzi23MNFzJUyC9ziPdLRuRXzBNnVSt1gcSxfnDYrrm2d9jHipGCcvrGVEqnfPeiN2wE8WbhGD",
  "key19": "zaioQUfghU9CkG1mAq8ySqgGKKnkHrg8ootVgw6N6p8CiMjZ8QJh3a73EdtcjBSvWRJw8mQu2Ewg9BD8rzhF3T3",
  "key20": "B5xV5x2VgBQSJarevow8iU7hjP6yunuFVPeKzQiCcoTb8qKPkQHiqa1qBqzWAvLx3yUaFrAQAHyyNAdpf7TMyxw",
  "key21": "2PXmBSJVyFqhWejzzndcmnvm8rgPRKsczUCmDZe1enLhBirBHb5sR5dhLerDss2hxE6V8Wuy1FomhDM41u4gURMZ",
  "key22": "3wgagLCae7UPHV6mBvE7MjRrWfz1frpvFghBiSg3o5Qo4ybmKCg95YwgPmF8oDruaZwgSaghxaUM2xn9wFE7R1Ck",
  "key23": "27ovbCnjW6tagD59dUzS7zsiTJ1uXYj7RM4F4RajE2cN3bKbDBBsM1pDaTLFThbGr1TBrXJ38z4rTo3yZxD2BWaT",
  "key24": "5A3dQbZwQ5wpfsjywmKMZ7fV4n77r45ZtmyuimmXvyMwikzYMHPi4sk2Fd9mGK344nC6GycWwoWsvksAqb6NPtZ4",
  "key25": "2ZxUcvvFxDgyAqEiPTEZVezo9fdoHYRuGTdadYb95hXJrQeTvn6aCkco4RhvGue5EeYZB7a3XyQubV5wpudaUdsn",
  "key26": "4nHCGyoApcf9SjkD52zkv3Qw1seJHGR7aQJRXotFQ2gSbWuZG7bmrMUKg4mryVjL8vcMJh9TnbQADwty2tx8WjPe",
  "key27": "4URiZqsF1iteifgmV4nsTLkvej39UNix4xJWBxikJxULvcsuRZHNNPUXTaKTm3bUknUz4KBWKhUxyQmegYHbweGW",
  "key28": "3LjNdR4i9fnCpZk3xJSEELCwwCHxn8dYGDwZuSUoRwbR3ktaQLiDAP1iY2p6h3H5PYt3c9WpAnabjr6RyoZWRvij",
  "key29": "3rjxNf2fB28VA4BS2Ar68Jvnm5QDWGPuUrEYHuuLLvZrWAy5pjnJ2PAJBZp4NMScVmaajBMhexrsDQeQ8UvQbQNR",
  "key30": "4nQ9T2WuXC6irr3tX52svHazaYfykFJ5Thzst59su9WCoajEax299E1FTYH2ud2vZc6Ne2dokwdwuJw1c3LihSkD",
  "key31": "26FEp49ib9ZSHVvWG5L2xY4sk5P94QTBvXzYfeTHwqATWmBHae4nTCLyybNKRjht6pZMQNkXWtKCp4YYXKEGQEaY",
  "key32": "jhx21xfZKXTRcRERC85Nr9PvAcT1fTr8YbjKzWhbQPwNCcY8KFX77w63yE7Ro7CqtUBufsYkDFYtT3JwVUXXhzT",
  "key33": "5PWcc8dCCtieesrsheLkk8g7ZJxvHhquqruxyRcn7sst8ybXvHEzjnC5bBuHTtCq5fhyWsAuBQ5HURN8MP69wrB2",
  "key34": "5jekPN8mTcyhyDqwqBU8nE7kqGHtsZjo8jXRCd1VQ3AcCkKXNecswHQYSbCR1hGeUTh1KbbMUbafhXrkHm6vynuz",
  "key35": "2rNGVQKHw8zq8eUi7VEUBA32BJYGEvWZsKqX5tGw3B3zbXoaEBc9pyef4FipMkqX4eAehpLdyagWZ7eoesfw3ZUy",
  "key36": "Hcv3E1KJm2omvFaNnTThqDVSLNbBMyiAduKu92FmnhjC72EDch1eRzYbBQNAErx3aSdV83q5k29TvGHQXgr6B3F",
  "key37": "3vSmLcBX6UpsNTrS8Wo7PS2R3kWnRdkE8FrH8mLbKroSh2PSMsJoaf6Ji7fb1R5x21SJcogrGQ4fJsrFWon1R3sh",
  "key38": "4QuHycfisYkZJvw9zm8ryoQLFwda4BZWYwaFNy3cysDRUeQnrJtczyv9SVLNHx7pvRt7zrP6QmsUaNTrX31QhNmm",
  "key39": "67FMMC2jXPpBkmtxftfGHYzWQ6WZxitPC93UMrtGYcN6FGLU8NEhBB6E8btttxsWLuqjoKhR2V31BHHWMWwi2HPw",
  "key40": "2yxhbBP9bwKhFwmWGs2bba5Y9zmKq78P84RBM3ja5meXvw2uhxeF3kcjVzTAv2zgGfuukPAUDxwNfqtCfXeradix",
  "key41": "4DgpdhpBAY1Be4XmpmXAfcBHsmeGK9o9TKRtwEcH5Gcsb42fhPVLkqobQK6uKURHScMdvHJTnzvQNDczksV6s7Qu",
  "key42": "3H5bxmcbcPSVUcu2UfYcGhcJJwWucYf1AtMHYB5nVJmPsjwQb34P9rR4ePSxwLmpydke473AnBZRQSRCxf3f5Sxz",
  "key43": "7GEagjiBcWCTGkqgKr7zEZajBYxRiNd9TLY4bPaUrVQ6Nh5hG5ai3VgSqBPwipwyaDiu9BBUAMiCrT9xQNex8gA",
  "key44": "2AVPH2N7gGTMUcucm3AddU7wnfUpnf8MMRxF2SeL7U2osGvGxVzAiddKR2wp8tnoU46pfXyJQDPZpHdsqSJxMdEB"
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
