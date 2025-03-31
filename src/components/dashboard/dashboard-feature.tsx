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
    "3gxecnFLxD8B4tDFKTmFMAbDqJa6LbBx8jtzJSkCFdQuYREtHTmUmq971DpnQTySXpitwqAYPpBcNDrbEfkUsnmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i6Q3nG15E6cNThLRPska1oRQzJFdHe6vNZeddWVznjhG7ggPUChs3FQZ2mK9AhpTXxSUAxBkqCzxnM68Xpu7nLg",
  "key1": "2SbwxEjiAAXEn5KGVs1AnWHQN1ynEnufBKVUbgR2ijNqwoiw1BcPUZ1xHqR5z4F29EWMdBmYDEHkTSqM6BvVjdr2",
  "key2": "63V4SSTPwU9k1HMvG77eUM9q3XWr53V9kbqbCeUtGs3mEoKQUsVERGdUM8QCYHqBp5ZaMgvT16jXXhPPba51ECYy",
  "key3": "XeyzmbAMEtvrusfQw8oJ9XvRLmUcvidru33AW12NteYigQAtierYfcwDSRBfkYE3jmcfffBZB3vAPRPQtZCXPYS",
  "key4": "6737MpBVZLMvcCmcxERG5onDiqawLvrcCU6iybuhP95iFD5MoYZBr51u8215W8QPqjk198c6Pxc1pAdPDqefXDSn",
  "key5": "3Jn7iAWSTkWCDtK8uiyRsCWwiV7EPbgQsumNERZoHZ7EGY4g6rSb2D1KNku2d6Mmwjhv1mQs5ZC94W4xLzMxun15",
  "key6": "2mTEnnMUBcFNU4yn2Jza2B574zxvg7kUJAT3nHqmiEEUz9FmkE1fX3Assck2DebfciqXQuSRCuEkNUSDS4Las9bE",
  "key7": "388mUTPUMb9c6ggLkRjBAo7ci3nJ9gYwMrLSM1EWaAs4PTPC9h74JwCypM8UEXrF4JBh4kZmhgTFh8XBuRZuKBX",
  "key8": "25kc5wjZCLFLBkwDZY7EvnZ6Kbu5cfH66bxLV9s2bxXaS2tm2Us7fww1PmMvYEPEiz7kMEjPw6UsnNdYtSaLCjo1",
  "key9": "2DL6nsahWkgrwM6PRKZddZcb1LN2U9ctFDAwaEgSznY2CRf4mrZ9LatwiyhgGi9m4n5n4Q4bBMPqiSmw1ikc9ueE",
  "key10": "CzMcoh1ZgrZTYrHf4rLydEN8VJfRUHdW9batbbkYmJAXGRJhSD2JthUDJdtkngxdbTBXqhiHQEgXSxv8DN7q2TE",
  "key11": "4xikBwTLuJRSL44iKXkA54YCPVKP7xoGF2L4NrPSMhCCDRbQqkB7B3L6poEwGDqofmwpJm17XtiSZLNfyUPUTyfq",
  "key12": "4SuUjySaU1n8ne9Vh6VbHad9tkF546ysGWQGLe7CZD2gMkBSB2MuY1vjdrm426mLnvpkaMDZSsSdS5RfqxFwrWAb",
  "key13": "4w4Vt6WNXrCZFQ8dep9bj2BqyWXUDmdT2DdpX4FecwMdc8dj9XQu9LC9Fe2gswTuUsRfKKDuA4rf5eahwf11sTtG",
  "key14": "5ibSWVk7PfyMjzWjRQgRb8mPcApzgrm6EaYFCoE8wjPoYJp9Rf4PBBRAKorSqQqvSAqJN7eCebvudhwYdwq7UqYB",
  "key15": "53SDYD4pitFKvAcADFZ48ot4J4vTCTvjiRRkMSUQY8hgQjY8MWey7NuYSaqMUqyubqP9xU5SztuAFE7ceGsLw8T7",
  "key16": "2a2ogxwtWSTans74jujg2sJAWusuHzuUCdQdyYnRZBG8RQvzVzbkMBgE8Bpgy5hWniDvd17nZoHU9GWVgAo9U6zr",
  "key17": "5QLChWDGvusGjH15RMkYo5LvRonRvQLdzPXqn2LJLdXu1riZV4dG1qB6AdC3CuYH31BCBvQJ6GLb29vcfMnUNcrY",
  "key18": "nt5T8eT97FnUAr2EYmzQiVRi6xDwwoRGPnfbbTcA12kkcPVteAj89SguzCwokWURs9YCP3Q7avxL27EGHcxJCV9",
  "key19": "5hhXxpereazYGcWwA3Xoas3s2rnkfYLWxE7NR4RweDeX7DoyoMxhQMFXWjdRHippeBLnLaS2U1DjRUL25kuxo92j",
  "key20": "31cfMAdo9tB285uNeRSUV5iHEcbVDfy73ReDwqhoCJ1KoFsQhBDKSMeQuAdkpjxq9p7GdwEBsAXDpZyHbjZivpVS",
  "key21": "2SHsGkjWbkNZvWCsTdbMH6eVcRJjg5uw8Yuz6xUjWbkQjXxfDaDYnV5KDXkGZ6s3xihLQYj3cknftdzDrufvSjPL",
  "key22": "3FDmqRDjT8RMi7pbSP6pH1AyE4LEBj9Q1b7CQQVZmoT8Hv6NzzNgdmDmcpQh6PDfg2fPbTpGGTBDF1ysTr4pAvGs",
  "key23": "2jRaXy2g4RcKRPGtvf1Udf881xM9NRgSkHxkdVP38tQrXM3acNCM5FHjza5gcpm6Yc4JyLPjikeDPR3zArXSc5rC",
  "key24": "2FWyvdjjbKC68vryczB5XscWfYHZyKhxpSSCbfv9MXRVpLrzHe1A89ycXmQvcRiEjaPVuk9zaC3eNs6QH24UD6YA",
  "key25": "3Y2eYqJVEmivBk3guCH7T991rPzrK7y9vynUsowAyWSZKbXFpuA2apmGZYSUsRYYkzsgejzTt7HXw8xyNxzBSuM1",
  "key26": "3twW1XYuwJfXN8uV69UoRLGUcKf4cSUMvKbAfQDaGZLenFAohCoVXAihWGGVV8Fp7HBWxhAqXQo74CarkvEg1ZXt",
  "key27": "3jfL3rzvd6K2etjtLdaS9Rw225gqotX7MpsKivbDtJV3PyQHRK473BhUFhQ7krJuMz2AWviS5qZoUmBMjtj41D8K",
  "key28": "4bZah4UXW91wes5sPur41R8wzJeyzc2vR94d4ffFEehP7ou5YCpPMNjTRnk36as9kxxQGJqDBjEgYrxTijtHiJBJ",
  "key29": "5Q7yebGhzQhe5DZWyWVApT37PSDPBEkZjvKpowZ8mzwAFbQTHMLgdSARvciErsAiK4VbnfF2dy6hAkZWAjVBTfZr",
  "key30": "KeBAbAucDDp1AJZM19madADBjdL7mgvJyhevsmgBpkZWSJoGLxPJNtTvKh4gacTUgTqJwCbCC5UKcRn7nt7LVGR",
  "key31": "vuQTJEeAi7vAHkoViRwhaEZaXzc8JgPXCTN9Zd7XJYbenBAJMhmhiaRrLUU6WDUHsNvWZaPqAviV7iczyhKETVz",
  "key32": "5AybkmwaNKqUTVTfeNCKijmDEymm66d3MJpGXW4ht6Tii57tpXMdNPfAg2pjk2p7d7F1hYAGWHUBkn7fxGHA7CWH",
  "key33": "3aTcYYGBwVxHyRL8Bvmj7fCg1BamDTenBppRqQxrB4E7eymiR2VcjMdY972Mxk6zgZ39qQenLRfRaRc7e977HN7a",
  "key34": "3Bm2tjHsEuxyyCTRMd5e9t6A71JmgLQv8Vf4Ea7W8wPW3ruo2h8yFPuvHCCSocVwZFNuepjZpFhDHW6eZSsfxyRy",
  "key35": "63EzF39DqwWaWps6V2DT5SS2MvL3XhGNkKZzRqDyLLxRAgv5ghnJwLWLCu5ncm1L25rpmcp79kzaUVZftwBNmnqp",
  "key36": "5PbqTXep8NyFUVLpWU3Aq8YcamfQkRL4Cr9LTDEEB7s6x6UsjgRDD2wTwtZZhoqrG6wvGpZaUiSpQcFNF4DustVb",
  "key37": "3QXpLEP1TtqsZxX4XhFJxBuDBLTEjU5ufxKJ5221UGKPkK14GsBadmRH5xELQY8nX2HX1CVwJCAMqXqA6aF7EG72",
  "key38": "5bsD4G4LAWVGVrqwMsWk6T36AXcbN1c9zY7XvzJdvWtv6PopjfVwq6UwMJnXEMzFQJQbM6fCJ4ib89hsE9ENGotq",
  "key39": "42tL4nnXLt4TzDQsu1JE5arhBH1nCPqqotKSGrZxSRbfBtHDFx3gLgoYZwNtUTJ7SD3q1C2RfEcsdMr2up7aYh5A"
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
