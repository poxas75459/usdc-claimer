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
    "3fKzAeut5KE4JUjBm6BpzHmGBNsepdup3pZQ34MmAYbVR2X8N3ZYQ3b7xCrVYvxWQqG8QaFbcGRS46LQfAf4FBcF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T2tKeZuHNqJzaEzpprir9NPYxi8Eznie77Pu9833ubomnkkDiTni4XxsyqCRRYDBABk45DPtwswKQQ1ENsyUYDa",
  "key1": "3ytQuB7nwyL5Wmd2SYj4nj1S7SzbmHAe1zdjWfQZXUN1pCp3CLf2pvM1Zayjc7iqyPEon9U7Ja7tYvwhoUvvf5cJ",
  "key2": "LJ2foLrNsFzN9GVrFpaYson7zydBU9kmyQUw3fZfrQNAT53bwsrRwWBmDz4zoQgtN5KEL9qs7dy42WxgRsTMyHv",
  "key3": "2KboeVBnyQp2yGirBUA9xnH5pNBti3EkfEcdw4ZJR6sHQftv6JBJAZYo1E1TEWN1fsz2mpK6Bvb8VPBGAs7nXmrm",
  "key4": "51CySegst4dNy4jCbiShHPMTKeW6RvzsrRK625GGDHqjteDLc1t1hZHLbHT1XxFiXoCC6ctKaXp27c1bHaN11duo",
  "key5": "2t3okCC4RT2oCNaUAET8AdTCisoV9YedSUSms8oY98n4dEH5nr67PezCEXcxQC2Pp1bMq8CRXKbwBeywRssPdXP3",
  "key6": "2qmbtasxLQ2n8GeuWyDBPADtjT2Z2SXaSDPBgRp5JuE1bf5u9XW5YiLWTk4y8mxPXwSDKymwMUu2keeMycbzmMfP",
  "key7": "27aqmM9fNgXYzYotFTR5K31A9bBjSDswZ2VvkJH455rk3qNcGy5waM4NnMhLwxDMi5UQ963MSpEWUpSrnZeN1vUU",
  "key8": "2KpHAChwQKTdqk83NviEFEofNEzJEMF7uMNw8jAMXCkm8Buic3gYL7czHCJJsEVaxyzYFCXhfk1K4Gw5s9ceYD81",
  "key9": "3sb6oA4bhiKrD1kQnK8QPnkCEs4SdkedsUknAZj9xGmHnwwgJnpxASx1Wds3qLkeAyT8QFGNaxxAmz69VVPjjPkA",
  "key10": "2uPCfVYtwzqHMxiDwwQ2Zq7WRfBV3pNML953wT359YgFrpjNM49iSxXhAnJW81yu2mW2qBznqDZempsc6WMhY9Cy",
  "key11": "aDLTAE5nQwz58Guh5PnYjdZDr2NMWCFi7hoJD2AnfeUatjD3KniwU2pVxoH2ERCgzSxZGHrT2UWrnMxFTW8zDCw",
  "key12": "5M8pzJ8UTiQDspPGz8t48HKnUigxiewqEeEgCvwqke7f2oAbSnFbTkWkJCpTW3qrXLqtdv67MiZBZRwuziCbdLpN",
  "key13": "5dwE2PEXnnP72DkQ74bBjiuFBScVtHJ96MXdMSvg6CVSpjdgfzzCZa9mdozsYXwXb3yahdStnkK3VyFawhd1mr9i",
  "key14": "2xANHmzBFq3dsjhZrT1tMT12isEs69Gt3vbdWrbaDsQexEEVaNyEiDSSz7dnpNiU7VdiHFyd8UTncUYdYFfo1Kfk",
  "key15": "S2pw6Lao3k45ADgLgNt6wrG4TiWmGN1TQQZM3P77bKwuje6ut4nauBZx1azgLVAZ3VhRuyMW9FSeSx4AFJu4WqK",
  "key16": "2aX6ZveZZogX3Fz3fjkbBNs23a7v5irnhUYrbqs7v5pNvcx1wjx2RbASGheU3QoShVMcUv9dBnmEanLo5zXsHwfW",
  "key17": "46vasrBRoSVfULiiTgAe3U4zvhHfV1EgFmmo8httyAq6k1E6FnMsBFM8wZzgUeoUhdM2Dhe4XhYg6sJMfvFQBYHe",
  "key18": "4WkFQbK9iGrYzfEdKCppcRLCTRmXotpw13KedGSRsGWVnUA29yxPgYGybPMLVXeSnggN9z569ajocQgJPfDEE5TC",
  "key19": "26JcDZrYJD7GyrTr8CTxKEmkWbtyn9nNGyihzoxEqgU89xYMDr6VLFkL5k1rzVxmXj7Mzzbk5vkAKxtndWq2me43",
  "key20": "56WEYWt6BC775wrGCTrMrbDsojMTndFJbnTmWkTH7UXaBNUqxAcGFVqJPpCyqYco9n9sx7bNRsUn93Y6LehsWshR",
  "key21": "3QtPhXdLNFqvvXctCbo9hcJU7EMjUF5s1tfm8ZJUbs1AQoVFZEXqG3hpRY4wRqW3sJdzr57RyHP4VnLgZpdNRmFj",
  "key22": "3ZG7VE5JL3rERJBxnEBfjuqWi5ZgyXfY74BBh5u2HRdPtKKziFrULeufpCw4Nwve9MU4VYYBv6EeVATmsQmqD8a9",
  "key23": "5aKy1WT5rZLqSCcLt6PdPFCtYeJf7V5XrWyoAWDfgBdPK7WqzXfGjvPmCKqRDTH8Podua4neY1Cx88PrRJ2cBKrW",
  "key24": "5kB6XS9jwwTSMsKJiHJy2CcYVwzqMMDbwAMtJCwhekz2XR2ZFqpUVgunHF2dAaYPaukDsdS3eLCWFhgKeQRpKb5x",
  "key25": "2mMLAen5egdQspkKBe2dw3BvhHMPW3gpPoJoDddu9Gw31DhMKGxdTb15hcuxeopb8uKbbXgkhbwsp3fui9J8b1gP",
  "key26": "KjZDRwZteoRzGoN6ceCMCzLwedfD57YJvwrMA3wwaeLQ8wuWPvem5Lq1HDB9B6jSxTXMBWJvvJKHSDxn7xLWut3",
  "key27": "3SY6YybHrFLCxqcwc7ub7wmmXJZRufmHQMnHHzk69T4P5LzbF3ZuGVgSVqJfTV9GwFMiDSCSearoAFHeborLkgyv",
  "key28": "5sLpxfWkvv1LyFu4fMPigYiiXx8g42Tu1qCsdfZRuG4ZDiJ62RFm4FF1BDSAnB7k41kWHpVJycyaaDA5vQdVcb2y",
  "key29": "2t4xeztD1NwiVKjRXbtwqnNRFWZ4sxU4H1rPP3YjwWrNC7EQBerAX7QWuNpqawLa6ukzQHX9juxragoeHoppvQqb",
  "key30": "4kp7HNsdHSzBY4Pou25DaGEEH8eLYEDABoTdkwdriW2SgBgJizmtRdwwWdV6GnMUVjiA6YXKXiW3Tp3tzaqkwbwT",
  "key31": "3ZB2ZncNhnHrBBzRJRPPFVHJdEXgLgMNVV7ABtUpBQ7MaxX4uwSszwoHM7easarEY6aKApsmWDwZiUNv5UNSam9H",
  "key32": "4LUhRHX6k8Tq2ppXRL4oCswkVQkYofTGf6EMvGAroxHBjouyD9LTZLSYdQniJ9NxZNEBYrh7wMHEpdhMpspKkWQy",
  "key33": "nq1DFwtFyRnTr55vYHcJRr9HzAkwXCm7auLKD9KH7KsokWAnYQ96VTe1oiN5Pzo4ZcCBh6sVF3dK4up7UJ3tZVY",
  "key34": "39DmEcFc9jMWzU4k45bpBJaRrnyidonfx746Fo4P7yvKj9U4mvuLoJ3zrq6vTHXwphFXet1sWKL1dp2FhGEJsFJh",
  "key35": "3urRfY21m5EGkqp14t4QrVctMD97tMwYz6cLQ1EpPk2LSRpmFHBMJncQnmygc7kc3kd43N58zkDxfWWe7ngk3ASg",
  "key36": "2dQAACxJxYM89PSvZBYRmpWvhcymekDK91iksMtQRd2WGpcFtcg7H3A594povqBvCEESDV75KMMPa59RMmCHUPnw",
  "key37": "2ARPDDPb4P6sLTonb6EzBCthK4tcrKCzJVFmtLhSQDWP7EuPpcStu8L9dKAptehGi71NRukJUiyK8ibUTUwZATVv",
  "key38": "3XKyWvGtwkERcuVFiFNWQYvDnRjBKWdEKsUunX9BPu8xudsWFax7S9oaC14c8tdtyi1X1jCnwzosAqzYjA2387C",
  "key39": "48GCyoLKDkXHftLxLYY5cZ66fvAGMnkHmtih6Ja1etuTWvtq2TM4tnjUWtfJoz37KNHXPY5RHJT8LaFidHmrGUnG",
  "key40": "59QH7qriuBfSezny35HYHj5ex1KHip2ZGDiVwdGV4xVhMRGk6wei1UPmNg6fMQp5sQDwXZSK4vfSBUDhRYTDYk1N",
  "key41": "53T7U9azhDqqeZHkWZYKYkATTN6yxeAjuQqsm2uWZMh4Fy3ocn2aRzQky1XQcpSarc7ihSZVbA6xVYZqcCNTyAPn",
  "key42": "2DfVfy6jsafxsUg2vkeq1mg4U5brFNG8mZ2mw33i8gACpGczx5FdqzP5WGC6vp8dCS1ybwgKg2UsrFmcgx1y8tkt"
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
