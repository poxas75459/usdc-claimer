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
    "cLYzSTYDvVZAq3WKGjp52nUbNGCV7WYKRXFw5pD8a258QdrmMa9fwqBPfvHP8XRCVmZGrWRLr4xN2MTat6h6sc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Vej6VZYWwaMyDPVSjPyWWd3wLjQUh4k5Rkj9USp734VQxEVu4Pdu8zeu5WrUQ9gg6wQXzxyLPtBrJ8X5H2jzYz",
  "key1": "5qDePU6QrXVKDdeUC4RdYGhPX8LacvkCbjXpZiEZVHYJjDQHLXhu5wrBa5H3HiDN4dFek35rYDCsxjEJQGNd7c42",
  "key2": "3aQPjyUvUKuAmMDhJkKQLPLvteuWdcZW2wTEvXWekmJyYAVexPYXtSQNeV9baxsFw2hNBJpCz93HuCQhKiE3BKXw",
  "key3": "3rzq7rtsAndSsEATiKsr9WwkX9w9hbkSv7Uq4kE6tzE8fhKgNMMLzCKzYFSTBXk1yDAukHFTX133eKtpas7UQ1zr",
  "key4": "HneAC4TQD8zMCtvQw2EvysEPmJDV3t9FeJRMW7FJ9Bwt7dJ3oLw6XQ2vNtvS2jNFHr4VBvZLoNoEZZuKmA6PBXt",
  "key5": "5EtAjQ4MoBZSbkzjhWLRP1DhJUv9EJQmCQ1KhqpGDFUNwozYyjDTKGChyeH9H5ts9sa4PdgKRJXBk5M7s7kKT93d",
  "key6": "oMDQZiQ5B5SJudhGm2XxKYhx7tMy58JRgYVruvt8ifn1fWtaQ2qPNFthYVpbSYDaVv1JnDeqeTLnjQw9DHqQ3dg",
  "key7": "3Zx2ok85CZ6pNn938tRwQ532smXiveHSRmr6MQk4f4hcbcykbpep8oznx634jEAmoS8ecDD2vcUSUYgTqG1ZAF5v",
  "key8": "5XnhSVNC4upxY5KpgygnZTqzLFCbPhyXxEH6Yu2siG4vdPEXihjz6hwfdfw6bZdLN5hbECHEBwkPov5fQQAx5YoV",
  "key9": "5x87WcmQz2dmvN7R8tGdeozywB85mqYu6JjbeVYdbgd9e5xDbKLyHzUZ5pqPds2LAhScv98M6hNUVF7BEG8DrugB",
  "key10": "4BM3KvhgLqm2BjGvFJRjZLCubThbmnfjjo18WxsyE5KfEKHqXwU3my5AhZRTERkrtZfQmcNQ8TMq57drisBkjrTy",
  "key11": "2bsLSZ5q4cdrG1js92LB614adhvrgn4M5CsMB7ontZUbaQtMhhZfSNAKpJb9RC2UqZuwYDWG4ZVfGdgWL2yv2hQw",
  "key12": "5LkRzysevojmcyAxTvkJ3fdRu5xVcGRpPBhF55Rw1RCytbzRhVkE6mryVYB5Z4ZFJfRWw3xUMva6HB3kT48yr5xw",
  "key13": "4XTZXKr7FB4Zk3EVtSncQ86rXyPN1RmEkoUndHR47no1heH4j6sxcMSqRyBoFDYVjdNgU5ZxWGQ8Tpzse6XMcA4p",
  "key14": "WufeeQgwkrgVp78WoghmAjzUo3Kjs13xsdN4coAuLJCY9L3byDARGAitsbMbXSiNL1ouHFEPWjuGEeeW9CE6XCu",
  "key15": "66CABJXVNttwSgXJ3XpcrW9cgfyixmJaDnfYZtuHaeCXMS8z4WtHdNy9LjCNiqvHkpH4pkJNsm6v2GgurcWkPoTM",
  "key16": "59f1Dy2SELY2AuhUsajLhoBJWZRT8BSPrq1THrw7BqbKQw6pSfdkHaCpdtFjgkrnaVNa7CDkaHtcc39HmixK9fmZ",
  "key17": "nEerdEdFK41GrFmazd6VXNfzSMSvKv6oV6jkXtv1uuUT9c4heSFT94c2AATaK1Y82dL2DRA9QkpK7KcEwKW15Gk",
  "key18": "3WfH2gswaN4g6gwvyodwgmySnB3CUQ8LVtJcsebf6B9k7M5KpJ2NbuQfuxoGnEXybwWDgasCKbzCDMB6BVCpAGtG",
  "key19": "2BedTB2RDFoJWhg1cfFdJmzVH4nFyiVEuhjCzkuSoWGixKb6emvmTmAJXSwYdAUpGUkDVJ6YbvDrMPt8oAxBWyPZ",
  "key20": "5D62xhosNGWMRh5h4xGF3jZe1Rxe3h2jgTcMkC8S38ktMFxkC5WZycbjUDveZpXFm2xAXUiU2JHa6xKMf7tPtEf3",
  "key21": "53mDL96ep5EvkjHoTF5enm4ggaFhbMbpJae3bsWbPAyfDzYtTmbGmJHdtS1DqAFVqc4g87mcbv5x9SGcqFDeHtrY",
  "key22": "34PTy3eDHbrMgiwPPuKxT9s6gQP2bT4svuj4fHjAxoV5i66XbhPLepKTzZS8oHCqQTitorcGqc4c6SYiHGTC9FfK",
  "key23": "2vUfURZW778GwLLc7tbixE7nNArXXETVyrnU6n5aWwWALX6SumcZjyT1hXTsNBYo7C5R1oAW7yUSMuso99GG1dqp",
  "key24": "5XaBhg9sqxx9No9tuKfisabRtfELRRc86gskTp8gsxBH1UuH4uivXi3n2pTTHt9hKNvzxB7ag4t52EySLqovSNV9",
  "key25": "525udoTSGpysFrssvEWNh9QBWdEm79RcGzsrQF3xYDQePgTRxjtjoJSGwNNXvKnbriHVfq5mn1DSfgBEcyaDqaAx",
  "key26": "2jcgWpyk1bdBhuqbH9tGM7PbtTCPMda1STiGFXfsbyZgyo62dnxEBkw4uhsjSJENkMKnatAFh7qjGdzUDNEp5akE",
  "key27": "4qBx75aDF6B5Zuo3aJQiPaQUNAFK1DGGaD8MZYu6zhcqfZbdqcHqDJTbRxaMHJGAmxCKeXaxZ2j9cB5kH9Too8CJ",
  "key28": "dNwrdqaegffmwQkpqM48yEReKJNArXUYoPRxmtbEQHJUJoLCj46BK3uhfXeHeE4E7votY1byAG4owQ13x43adiD",
  "key29": "3B5LxeuvFxTBBHU1ELD4qSv66t2pvRkRFXAt45oTCNSsLQkoEAD48Woz9eQEE3oEkAizJvZzToouduqofnfVnWad",
  "key30": "2fkEGZ7vpxMYEVZShhZSp7QC6kVHCeepSCwywnJ8TRPQ3MZKaVdC3KE2X2Jwaw1Dv27XZnR231BfoAUZUyP8jWVG",
  "key31": "4f1dntT51W795zCfUJQHWnC19hFYHEdhwSX22utPwymQCF1JRQFKxfD7HGchUPWLegMbsXLoyFEb7nVGYGueqz8h",
  "key32": "ev4ej9oRuK2nYNGzcP5iLnue71NBthn1Ca7Pbc7SXsirowxrM2ZxXr93hQrqfWnw43DHFjTBX6GFPPJNdX6CpfH",
  "key33": "MkRq3GTeJUMeeLM4yUJgUM2DqA67ko86Rj3P11XxP2oGsG63rfsEfUEWnN28daaJprMgPZ5TiY5YzeaW5vsRJHX",
  "key34": "3yzuoQ6f668VmJjjHyLpQFaFChqTgLa4KF2M7EzQadZhsS6v7poTYerhBSnwMsVU1JVsBN7sbjXc4d3KgASuXaE6",
  "key35": "2S8bCVLAe92Xo6BvWgZvPcCfBkQ5SqMgjEio1vCvT7iP7MDu22PqbrjCDkyBdsxdTP3KKVxdipFBEV1ouYRFdL13",
  "key36": "3mjM1LPtXLDB2VxTx8sr6R5pp2bHknCSmjxRWWS9kauSDTg3StWT8Th8k58P9zE7NTVp9j2qkWCovNZX9NrGKySP",
  "key37": "5c1q6bHhtH4fBgfBavUWkG8L4jbgNC3TJmArEQsQo7ZDjWU6L4FV6JWBqxyEz5Tzbx7aNxoJ39JbEmQiRUaoQPpH",
  "key38": "obCCFsHfiYiwcp43kzS2NPrTUf3Siy2oAN634Gy2sLLBuC6CAgWKsuCzc3bjG2rERxf3fXFdkXDXhq8YLserYXe",
  "key39": "3wbDpVPVHbSwRoZkxZT7wewzZCcspRnddnjroQ38ixKFMUtd8RX5S1Tzn2bjEnhCZ15NFkoCTfVaot3AG5Mnyxtz",
  "key40": "3U3AgqhzU65xn5rsdfeMS6kRryUu17C9wo7A8BXncoUyPydpmzDL5oCFcCKVycFPGfLXLStTkj2T5sMBf7aYSTbQ"
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
