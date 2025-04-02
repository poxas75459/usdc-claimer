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
    "aBFNi94CybMHK8sDnR3BhbRomumkjA4A68p9iLE6HKezFPQYNAUvPZ685EUxd8PimRSVqN4VVMPeP5D2dyTrMkj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4emA34xMHMJqNUM8fB2ANnus3Tschi5YfRrBY2mcRH9qegZCwFc1mSs7ofbFAzbAndMbbTSHJyuM9K47cLQo1x32",
  "key1": "kbi3e489Qz2DSJQ66XvsfUHGNAFkR8t6iTjwHpYHj2c9rtjsYahngrY5zRGjpC6J7jU8vpYz7KWKqzhRkW2stQu",
  "key2": "zmY4tSkbRaxboQffEaJ5huMyqaRS87McKk1PLviz7jj42tqg7FQQdt7NkJsob4d4NAXD1fKcwK6b6e5e2L2jDXb",
  "key3": "4eyCSUWYEWrJkuo57YWkGcfXaiXVGKnsyqsSGeSb1qrM4NbHgMVGhS3YaZzmucfVDURsYChtw7w55o7LFuzoEgr8",
  "key4": "2RzGwkVHjwQrNsF2EMQTNo9ktNJhTiqmT37ezoJrBzd6T2ZeZ2M8wPd6YVmwPcREnJa1aXuTDyZfdXiTgocAYYw3",
  "key5": "2JS8FZssLL45HqHWV9EsdnGGY6Rwjc63qjb5jNZcbdGJyeGvWBk7SDN1QR5mXKrxhGAs9iQcQHtpDtHBt9MAH3y2",
  "key6": "31ZPTXNZETFCdcXf7scu63BY4kAwVZUBxzDLEXVdvh6ikD1cV9zfixrcR7vvMXcAWvBswRPyjmLvBsUeNeYAfyFp",
  "key7": "QLxpqBxb6kZpTC7fYzfbjZesuD8YTGrZ6DHF1kWRo73kbyuEpcgCTR95iwEBbjn5V9uGW21KMVu3MuHe6tRVA1i",
  "key8": "4bzfkvPfgq4UoP4fhbJ2vnp9e3p8ccgv6CjHAEc9W67z3DcvLQx5ssGZixzYMZgGHjVjQgSMusDfA7GT5vZeDD5w",
  "key9": "5zsCLe9NLjCeUctRQpVGfgvF9L2efu9HvhP8QfStvEXaAWt3UxQhB6nub8eEdNoFjuTKwTgH7wLNF9MdKwGj2HGh",
  "key10": "66jeRYYJqFjMzFEyFsLHiLsuuuV9Mtebifoay7LzDwi1WyUciPoLrtGWPqqByoBpt4wPnVdRsoosDfz46cwqE1Zx",
  "key11": "45EBTE1jhDhs5AkPFG5nNdbY74RsRM48bVZFP9qgDyQHstCpB8tXhfB8wXXPyiXYFZPRBAVxA8nEqGkSC1NbsS7Y",
  "key12": "2HQaKsihXC2Mo7Fn4W8W6WdVptBHJYfkcp3SkK2ucBv6skgNCuFJvu7vTLD1VUSpfjNpsUv6WkZKGcirj1VCYkia",
  "key13": "2vU6LoXqN4TBhuJgnzPJC1QZdYyZKSLKwHjRQLgCSApZDAzhGck7VqNBSav8GSHsUbYLPivVQcbsgLUWLdwxWfCw",
  "key14": "aLPey93mQ2M7vpDif2pj9aYmw15UcoayCFMnwtK2tXQuV6Wiw7x1Z4JTsZ7fTuvqUm4PjvHBuR4nfX3BmcGp537",
  "key15": "4TDKR6nZJi6tJaQsJkc4eSiwXEmyHmuFy8P7xhXB6Gx7tWyz6WZApzD9ZdEX38cTKNnDzpRNJQrc2WmrAnwuTrpw",
  "key16": "2snvXeotyHZcPja79L8R2BfFffdrXs5KZtQH9H4t76dXWHk331S2zt3U3kqNA6yjU1BsxBxFw3pzZSLm9qjJpHzP",
  "key17": "ug4cbwSduBt8k3RW5WYzPcdbVqQECKMtK8FtjQ4MENyRhTfPcu2nCB3kfNg6xs32RniqR7xVPSjp89cw4d86ASF",
  "key18": "5uW74MX3gEej2Yr4GPPQ18RDkAYGPpw8ztmXYUHWJo8Kz6vM81HyGFoGhG6L2YyDBDMAHWAgmqCLbwQE2eLPVKE6",
  "key19": "MK33E3pDwxBj8rTooWG6Mw91zM1BxQSfVBaHKAiUjKNLR7ECzsrxKhc8ZPcDLkjjr211aQvpwoQNnCrz2qdhJ9D",
  "key20": "5j4KNRcU85hyfDgPH5xR4vFdL1Vwz7MKBYHJiquERTChV8WYaC5tDbSu5zeBj2x9Sj3Sw82b7RZKPVz4dLCuA3e8",
  "key21": "4ojAjNGkZaNkLH1u9mSaPWCZVERhhxSecevJ4yR6YjCpVvuYH7s4cGFNzeec7iUwzHNUuVbPy84zB3apa6aqWHUN",
  "key22": "3AwwZcgH3QLPqcHgdheJj53nQ6qHDih9uYzpejpESeEphPyWGtuJYMCKdsoekcFtVg19cySVeYwKTyTBF5Q4qYDT",
  "key23": "5AjBQ1f98fKis4CPynqL8aSFcw3mtDgP5AysN2wPVS9z1Srbzk6f7Yfb8PhmkQXMAiJDhcuPTmYytdprDqTuoNBG",
  "key24": "2XJGYLoBFUvLan6DWDEgdTVj6UmP4c3gzbhtX17kwQsi4mv9LCE9KUG5jSWGcCjqRWBreQfHeW5fwgdByAXXGtpG",
  "key25": "4ZxE3x6Ua9z6peCQ8pQMZhVecn8pV9uXSepTPUz9Akza8acV56LGLdwv3SiMe12DHGEQNQvpTniUKk9HSYZDciV5",
  "key26": "3s2RP2oXmqBiKVQWuCGQUg1DBAcQoEcMfg5Z6XXZNT8Cdv8AVzcphG6dfcMEnptdaYXYYBoHnJy7dzLWTV1EyH8S",
  "key27": "gyy7JJjXxGofCQ7ArtQtfApn95PAmCANCNDw4JAkdJEQj6uunaxeDHz13WTJe8KDaWUUYdDGBWeaxqhMuVwoPGz",
  "key28": "4L4B5FyNEHoLeG3v4jueujABhzVVjK5aMEqYTy1cywgoYqMAcagbY7Mp9NziJiV883R7EfpDeQciXSWsDTK9x2e5",
  "key29": "aZbFL6PcHAgrfMAJqVAyo3H42XPJhUPBtmnLAC9z87JRXXXL8dqpcm9EnHQQ61nHNtK2kgnmBk5Q2MRBzg5yefo",
  "key30": "2WTz2A2Pjrehk4zesyis5d5vg3cqmkzMaFUHYVF7cM22gimv56bFmAQ5fo7qV81hYztMDKPdThfX9n49fhn8dCpv",
  "key31": "VPaYD5SPF9oHwo6iTAeNRGQxAC6Rx4KM5oEfRsxH2LsGxfCosMsoCoVLRciZEKMroT4DETHKHde3bgLA2CVrFHt",
  "key32": "5vrK7jQrf4QCUhhHudN1iuwoxq2US2SxmTnYuSuA6nDjEJAc7mXxhPX1QCWGgUmbXadQtQpHLiWqxQQy5bF12cwa",
  "key33": "5TZ2XHPASDQ5o4PMS4yRFTS7urHqUy4S1WKRj2oDZYAn9GKcQj8dt197AbdfDYDtJi3s4Zva2yyq5vEwyY7zeYJs",
  "key34": "4n7frHgAcrtf5TcZgGyVt1xjwVvab1vnXASLJiNZWG5a1DFYSwfCgEABpEtSMAPtbLi6mULutjnbS3uEgbcTVmGg",
  "key35": "5DTZdR6XLvh3w54369GhJdgbywPLA4wJn88WcqCoZmxBqRt57qpPwNUdehdC6EmaB7ZtTUjb37FMhtrGJa1cjL2D",
  "key36": "Zxsd3cjaLE4EQZyxpafRbobr3rfX3evhmFaXLtqzLxy6Nb5RPkDoqwjt9UdyKsbvkrTw8AGNP634igv9ZZz73hB",
  "key37": "6bjFXZnHEz9zp7LSguL5dgwaAq8D3ZFJsnzQUVBZ4RC4ayirxhiXRq4yRoqkUnCGatve3TAHqqwgXGg4j9TLmdc",
  "key38": "2nPA2iitnRaUzcK7WxtxLdXxXPmiCTdhoW4Qs6L9gKxu32cPTCTud59cFoE2vLkEfPhUQ5QG1E2J4fkUQdkMTVPi",
  "key39": "3cvLQB9SzMowaoGKC38amomeSabkNCfqra3dxMyRXfRKQCmZem1o6D7iY9qCPVRsboxQe4frC29YfHV4ozFQHEzF",
  "key40": "64CrBp2XZRwkN4D8jX8Ec8ipVr5nrj5czxdQ6VF2FejCPvzovLiVgtyMUqmPZTziK15ahwVePS8janfnC7N3qZkn",
  "key41": "3hUYbAsA7BEbEkoGFPPNu5K4FHCCPymgkfwPkGKLmeu6owd3QnvwF5NvBLB9WQ5dQcsX7pWkGTiFaWUbzt8WjKr8"
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
