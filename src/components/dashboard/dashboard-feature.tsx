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
    "ZszQBkW5zmzvbRrpRMgfZ6m15LDEnASrBHzFWnjhJ6DkRFm41Dn5RbYNdxD2BYt4wFjjX5ziLEN8htXAgTqA3sv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TgxWqbNR483NdN71Pd2uGUA1kMEsSXdpAMWy5Qb4FiJejUPMCKEuVGHdw1fXPu8SNYvZ6ToSQv9bsR6siha2yf8",
  "key1": "ZS1VihxysLRU61Tr5x1WK3BVNSDgmMq3m8oWkbPHMhdeZ4mpLFi9656WwtSKMvPCBRWuFa7JCYdR1RfVWDVkrzk",
  "key2": "B29o9mUvYVuNT4o1tsfpBo7JXUTaZA6KLMqpK653Tka1ez6EXZUQUjJm8FKauv2Y2G6eoivQR2etKPHTJYnfA9m",
  "key3": "2UiwWD9R4VeRv3ZmJLTNyfXbgb939ZZSHzH7EtBWnjSAB3SACSS41HwaMNhKmQSW8H61uFGRoZ94qt9kYR4sVmw3",
  "key4": "4PFpEhUNXgu7tHKc4vwiSvMhKrh4aT1iSw1TsqEWWVqecdVYPPCxrt1WxmS9FMFZEoDcV5emNeAUD1aGdSyg691L",
  "key5": "5eZrLfWaNgmndGddXity7JMTbXhLeUPhQ2FJFbRoJXvBoqBwxWDdWvDSLWpPYz5QRCvtUD6jm3GYDpKd92nJEVeP",
  "key6": "5JJTPdBzGeUCrn22L724nM2j6d1g16SafXfgLiixtJ42buVGSeacPj6fSAbgPTLQgSzHgf7vDBeZiowjP3nuZCTn",
  "key7": "5UHwsWsmvnj3SGddLQJQfox2fv6KpKA7qgHgCgrZh5Nr6HRvPGEKnWe9o4bTka6JXhUd1EpoUkZrsZ1USedGjWrJ",
  "key8": "3QLnujgRE9ctjJuvL9sVUgFU2QcHHwNa9tPFmb3mGJrHNuuT5bSMSKJFNDouLVRx6egqc3p4Z9WrCKRZskLzr5pR",
  "key9": "3enZMWeJfBYPVbxsrh6KHwS3YBMrXEeEbwfgSgvhVEkMa7TTpng94s3T11sa6gjJXWHf9NCzytZ1Zkf5zfqqTuuZ",
  "key10": "49Yms7WvQ1QAHdctZajeXk2MjLa7Dt2AJAN72DY5FAePFJ95o3Cng2iiLTQKoUuP85QzHaE92Dt8DyqgEhepaDqe",
  "key11": "jVT9tHmxnFC5S5cCt7uApEKkiWT8kt5fgEV3rykxud5NbhcyTzfY491cDnEuS3wmWDAq79PrTwNntrawnqiNWxv",
  "key12": "3zWeXgj1RQqVzupnhnd2rQy44GbvWmquRx8oCPVx5NpxsnSCdJgtEGgJQ893us7RwnBTKJeEKNbiLfcPZq9d3tbj",
  "key13": "3TCQ7ipVmP4NjLGs5T4GNyjzJG9AbPjzApVP4LnUAttNTQFEJT9ccTeaXjGw3AAHbCULschBG9SYd8pkUmkG2AE6",
  "key14": "3mdZL1X3XcWgr3uEmQf9c1VVd46viedd2hVxdUZnF4iw6FRYYi3HxgdQFut1jfHn4WXuN9Z5F9oDcM3rBWbYFDFm",
  "key15": "29KGDpkg7VpQafZf23Rx7ME3j1p73VMaMefLfs1AghkjhtDW2WKxiZNvipNxSLLfheTURNaAFvFMWzLtYS7kCXQb",
  "key16": "3JApUM5iKHFuS3hqqxvrPb41tWJLfLDNQBZQyitGzkCgoLrHC6r4ATfet79Eo1DFr3v4gRobcWMoXDxeRkkR71Uo",
  "key17": "pLFa8fWbbwxagr5sxApH2upe5rhr7mnkibzhu6Gca9z1Jc1NoTMv2ahiK4pn2NzLUijTTPzpcJfaf5WQTbTdXjd",
  "key18": "4GeqAEtdKWFgUtCvy4WcuRRqoB6qS8VEeeSsGdNu83z2jdMhn7oYV6A3rqy8MsxntRJb3VFprqPLKP28y2vzZHdk",
  "key19": "ELo9YJsc6TCfZRtXiLXVHp9VMVyox47DQHkaQR4yhCVWGZXsNsAPjqb81JKzLvYPFr8isLcLgRD6TtwGZCyAcyX",
  "key20": "2sYMJ95CwYggXbWfMtqrTGyhjEX2yenmm3DdB36fwVnJd4ghvGvjqC2yGg8tzLxq3A2FPpPCj95vAdkFeZLjNsDe",
  "key21": "4FjgKkC7AdCeuxKb5CHURfpSMGrMyeQ4qua9T5wcruZYD2bYe82bHCmG17nXwoM8dA8ByBhVBocDH1UftNrTqbBw",
  "key22": "2hD4UuED6cbJNACW5qSjpoZsGwSW8VZMcFACKjKciWSrTa9kD2uQ4qsXa9isu1R5HjNqJ1BdSaFPGcTVMiZztmdw",
  "key23": "4sgMw7NrF6YqZGsrr623gs2TcaE3dcR7KLREvG5fxyQ3RhrieEJh6Hpksji19mXjY85VWzBMX1otCAFVQCuWTinK",
  "key24": "3aGVBTm8aHsyjhduQceMPJzFbmYxoSQwvq49hV1Xi2cMhQUYdetypPwzaaB7C1UQPNGwCgZsi4a7XF8YRPtRnxYj",
  "key25": "5R75m7ceGWgA4CxWSQQEPJdkEdeFTKJMufSR2tzxynPFtsWbd9sc2E3ZGafJeVYAan7pmch3356SQcfKZrhkd2yp",
  "key26": "2GR6HUEbMU79joQSbiLn8oamarvJ6dAiTVMeGwUaT1oj7YAD16Y7nNNim79zAzGPxfLSUNx2bCgtMTLrvaeSp9PV",
  "key27": "3d55Dc5Ez4XmEe3dfSma4v9JLiFePLth9VJo4YPjBfvvrFw2tUUtESE5N4hn5qqXyTRFZnu3VVryaDv4qivwoUHR",
  "key28": "4DbfViYmdNyxpGoLGBYH2FkLK4ijanPshB45HZZeerHTrV8aW967sVfu4QfGsuTbW48P6w7gvajbmvUKNVJJxfZL",
  "key29": "3RKyZ3ygH4efijHDxMzaQD44G35akGn3qBL8fzUNStJGStZgRPZBqdrh7CcMYVb1nEMFDA6xq8D7HJvdkjGjpYAR",
  "key30": "4MkX2g8ksAHkgwPPmGxu2CjrCpA21hWsLhTKnJZ2eEDLRZRN3xWt4Sj1SZkHK1v5a52meWcrAR53maURGGG1bpgu",
  "key31": "6714sC5jPU8y8KAHT6NUs2EiizuKhhoFpfU1XE6mFSuX87p8o3sR5oEo2k8UYP9rcVhawNinWJPaGcqQNhFzPEbj",
  "key32": "Bzprf3ih6MTV7yTPxfJPXWrqxBPtuuMLS1ntuufHz9Z7tXPmdPsKUdaQN37nEGDFRbaMFQtFoGf56XgjUa2x8tA",
  "key33": "2ujKw1cyGUDrvug5nLzU1gfkt4Z8rX8AiCY86n3f1KLWGuDrbEUThH5opdn3hVy177Wp2GothpsroN1CEtVAtL3e",
  "key34": "36TDAbTmznzdeLawtFPeVkTivvxBJ81m16dFoKYQKhTWkGVYPNAc1JiLAuJxPZMmattRakCrzU4UiPJJBNHuczrn",
  "key35": "ftZeNQ7fZ5QM7nhDGnyktyr1NywDyEZVGXSjv6g3xvQ135N7Se87KnQcdP7qQbiuVTcAtqJUhdW9srhZDvGcwGy",
  "key36": "4mGuSoyput6bDKc9N68nMCkds6gBmV8u2UaT1Va6WPTq7bhEUhWh8P6TYmzvuq8PrP8nrrbfhjWy7sBShWdLYNQa",
  "key37": "5W4guvBkPXiYeakPCQ8rZ5NzYFvfjZy5amMvHWK5wm4cFmP2KabK78XrtyAYX2hY4Vg5TV6x9AowxbhP8DCuRP82",
  "key38": "5Ecnev7tPEssG7yw1Z7xXjsqrR1i4GiZAmEbyujdA6Hs2H5HVD4FBJJQqD5Sq6o2wniX1AZR1PmPgRTj7CNFjgvu",
  "key39": "3sUGXw2CXw8SD8VrwBsyjyFquVLUcHaLhZXLTPnqEcSU6J7q43TopSaLuSoE7upkoq8z55XVQ9ppvxZZk4qvNEuX",
  "key40": "4NSN5adHnmtHS4yaVPKTLJwSpBvJrySpUJSL1zwnwbop6Exf8DvwG6bidnfcNvNhgmpfGx4y7iaPWxTF2JmLNuZ9",
  "key41": "2cNNj4pQL8hmG76F7keTDyFsiKbZgaBu2392LHDak8gdugxxhE3n1rLAUTHouR9w9bbZA6NxxvuzVTw9Z41Dd7BH",
  "key42": "3ECYe5TtUg5V3TX8RZ2uZBJQ3gjzhibyCFrttHbu3T7s6tta9riJbXWzWNbiLiHUQfDCpAvid5qLJwLNA455kBNs",
  "key43": "23mR96Ku6YyAQbGAnCsDhKN67u79ZeBFnKU4nj3oGMoSn6sjis4PL9TME3hXV2VtkVHE8K8GhwBGCMZmLMzukqoD",
  "key44": "3F28Rh5Gkti76ZFNVaPqNNZUi4cAKYaXXkksv5i4o2JYEbdENKaKWbcibbpquZBUiHjcxbg6HmAiCjDfdaSTgd3T",
  "key45": "xDRaV2RAfpHLuYBcRZb7N6NiMvwzjPusk7v49Vzks3N2ER1CjiF6f1rAQyiurRqnCdfKkCuSL41swbKcrnUUrST",
  "key46": "37sU6sQVkAPDNcoCwR62rTKBM1YJ1cxDQ3yoGD4V9uWQ7V9SaSxrRFacpt38FfnLLCPkSM65PfG2Cz3UG6dWNgNf"
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
