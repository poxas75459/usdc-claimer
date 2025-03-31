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
    "34Xf3JXT1A18SjqwBqegmb6ce6HKUGmR35QR1BGLsm18kEPnzfFUfbvBwtpJvHKqdHjzyF4wRou4KwkmXaoutBpF"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "35nb44aVCgZHxeUkfkSP6eUmtsxzAA1baNqcya3iuE4bu2sQcrKNs9RmCknqzJRcEWdzVUXeUm96dLsW2EwUD1y5",
  "decoyKey1": "4v3DxFCWHQ5HYr5fGaTrrFgoqZW422SgzszdcAAuAMjkiKWGJApKDpxjKS9A8MgPUEyE5iDFyWKdjiPvJdwEatPB",
  "decoyKey2": "zmwufA3kcMrxfDxbBdw8Fb4Li99XT4PsNAJYJBtAGjxAxtfeEFVHv9Fqa9JzgeMXnPEcoQ563TjJyJCxVADfexP",
  "decoyKey3": "4HTh1rJngNNsdvEfEhGkirtxSg9eJwsCDtfuEX7wWVTi82cY7EK5EvUVjTRMmwMQ7CTpNws9fpRnMNSHqUHCU12N",
  "decoyKey4": "4JXXikjYKAfPZSCJoRSgj4tBti54afa5yr6meZv7AguPTHCUB1HXeb2aRany2QiSADjTKry46N59E5j4zt7WA5cH",
  "decoyKey5": "5s8KMfLxna7ejBwGCYT7nahcB2LAQpb9fY38LZbDkxmqMkhyo7EGNP8rhE74nUWMrdbRAPepm3aQh8SqUsULoAZP",
  "decoyKey6": "45ENajHbKmAGHQ3Nbn7m1nVLmxnZpETP7bgi3FR21w4Nf6qiVTdmz6VCY24ErEadVVoEevLrpZGszX9DWotchoUG",
  "decoyKey7": "5Qfeukk258yMSN2J8cEyu2h6R38HKioXjmYNkcaLWUoagoy6nbArxihjZV7wsfk8SAzTR7e2Y72HrGZm7pKiX3Ux",
  "decoyKey8": "4ZeTZJXTKRE2VY6pJRdPRH5Xc3LpygUJpM83Lzugyaw8CHT13mMJ71hcFHhG8Mw7mFSoUGuUfM9ZxjEj7YSMBF4H",
  "decoyKey9": "cnrpUyJErD7yKr3PLiVd15zYoWy8igoYW7BX4RNQ2uekWXhG5WGD37AHduELP5BkkzZcgP4XP9FezkoiagEzLtC",
  "decoyKey10": "34Ewzim8T2Anu9nXRzkvwH8eP7pw1Bx6gpWFVZ46Ff4Ux35xaqMzecx2uN2TLxaBVLCMXvtbCMmt9eiERBwY2mP7",
  "decoyKey11": "yw1MX5cfNeUgx9T3mTqXqfDpHMsXeqLPjXTtWZLLJb6e4kCdjVL29zeDMkKz4TvJVCuGxvrKYczDxAK2zVBPsnm",
  "decoyKey12": "2H9W9Tc1YSA8EHMQyAx7C2r297Wc2JEUcxaQGKjKQ45kxAqEGprdE21tLzmPA6xCCyL79S13WyWAbV6E69wAd9zF",
  "decoyKey13": "3ZrUu1Cu7UjLnaQByTpccRA12ns3cBQyopJtCZic3hvHGYKAHueBKwnhV6Pg2LfucyhskHeTKe5irL7ygLHA8BUZ",
  "decoyKey14": "2KwFKMmAHvhY6eu4rF33ZwtLp8fVY3z8iLTXi7Qf9M9gu7k6HZLyW5qiYkcuesUCgH6HKsxKPgxey5S9CTD28Veq",
  "decoyKey15": "5z1NGndNK4rRC8YKUfvmZcMcDRjhrMkRJNfdpxgGeRs47BrmCHnkPnec9wukCh2hJAocyGJYf49UHgri4u93y5dF",
  "decoyKey16": "2YF2UejyjLEf78sy8Zr8FGJ2FDa8HKgpMJ9pmCnxUUXcAmWUkPx69uJYfd8AAr2rm7nKxLV11yHmqr6FAjV4qcyh",
  "decoyKey17": "3yCvMWqE54xXBFV3oMwGU4yuo4EEU7UVsS9vuSMqp2P7ebiaxzrHsWB5qdtT9m5euzf4CqZMsDCPUN6sumKYJbcq",
  "decoyKey18": "378wk1T1LtfBwuws2YsSJ77sXtb2rGv2twa73ETCH6MhjPnKTGrNkMYgCpHqK8WwuUFznbiK7EZJpazuPfMvbQe1",
  "decoyKey19": "2M5o21EuM4p7YewbkUkvS4ukBgBZJmaaCNF1CVcQnRU3CysMZUUDH6mn2yVtv2K62wguiXpVoqpANkzixfV9ZNx6",
  "decoyKey20": "3KbSawWQCVn9gfi5HVT1sJheD3QbRQx1oBcfSkHx9HaNSomHCGXQWPw5PKZBPfc5CE35P7GN845bjSZHvYvznzYC",
  "decoyKey21": "2hx9yw6G7AWkNr1LDjH7BeA2Q3PNEevsw5aFgG1Yb2iLUrdKNNF8pFkcKiKMyvcvA6iGNx1skNngrwDqzj5Tkhre",
  "decoyKey22": "65hyA8zE61rQiCF3BivVYgdc1nsGne3y3HdbRMg43eeA2DBWB9tVQptU4cPdSd7AVdCZWcDZC1oPFnP5R4X3XW59",
  "decoyKey23": "4GB82Jcu1ytWmCASLQbz38XZpqiSpyHqFEpn1VJAgTDAngb3bEQjSUUrPAnMEvCUFP3icC1LjjWmxuRfwrxMxJyi",
  "decoyKey24": "3cNE64eMEaUiWCijduiKkGaQyV79quBaUMy9F7XcppKXSW9z3r5WqBiijkwc7kvSLLvLy6FcqktxFCnnFqLMCwqV",
  "decoyKey25": "2z1kUsHrJ1fonZkLK6AyLhVnGqkUXFgvQwaXVtdccMm7WzFkrK6tAxzt494naCudqnLPhcrqAnmZK2N5k5gvLsmx",
  "decoyKey26": "dBrefkiFdJmYAyF9GsnGaD4wazwKVd6nm62vVdPrW87BV8MwTEgWVXwScLtCS9ZDtfsLdSMNHZEqQJ8StzrW9wS",
  "decoyKey27": "3vRJHCR5X68g3VejvYHZbTUSDQNtt1pBSaBUcubgh5ZBJFYFhfGwYyMKWh5aV9oXVUfvXd5RKbXBaSjSQLWX2R68",
  "decoyKey28": "o9GCQHfoUvG3DFaLSbHV5caLJ9yTYgYduygwWUie9mow5QRD4VyB5xGEEBJm2gJgiS86qZ5ryh1y8wpEPZzt6CT",
  "decoyKey29": "xgKj1B7jbdkNXuPPtrFWDc19YEshek8aTCarNrkytcDuTvaUHRXeyqXV4zQRNyUikhwdgMRJskJfes7uCMuTCkY",
  "decoyKey30": "3tMabSNcpCuNAiGcoBG1GvP4NAFZMR5FrAPvrpuz8nKeFRPkV4fhWcW2kvd9Mf6RcbKWas1xSMHUoTi3Pqq1onMH",
  "decoyKey31": "5tSxzc6S45vnRy4awaa7uiF7iiTQqKiviwUj5vGvHaYfG8Vfc1ygy64XovDCdgPwSYU9uBtCBwv8RAWxzgHSSvUA",
  "decoyKey32": "2BUn74m1zDgrLM5jSXM6faNHvAXmL1Ec6yFzkD82DC5YtKPsJeunfKLkWYVTuWL1D5rgpU2bh218FAwxABP53beJ",
  "decoyKey33": "52szDJ7jWnMBrMQLGoUdGVbCP4UDLpGDuLDaDMGKSiar5CVYRBbym297Hii11rGEGtVbCWRKmoNX1dtYmcLeDPpn",
  "decoyKey34": "4QWuxB9fvbz16wJrdKpig5kusnsuvSU1nFUHMdPfWsYdAfAswQJ9wXTpMMuJEU3ejAwCsiuThX49u2mXFaWrK3pK",
  "decoyKey35": "iCytJBuvwB9QnhQQDXEsNrpK3MkW2KEzUaULCGi8sxRCgh4YE4V1AMXUpzP7kXwPLRXqAnzhFf8h7Y2Df7iUKaN",
  "decoyKey36": "bRhV1PLag8VXaT8yz6nsfXyTcUiGt1pNuwa3evsxpS7W1Q3avufAifZirZKZyDVjfzGRKZ9hjKX8N5DEUr1gHCL",
  "decoyKey37": "41hZLut3CmWLguYxny6LMwNmkhxwFQbi4Jf9tSvpoaydzmmKwMwmY6sTjoSGkbmhCF9squTzp2DjNxr8qJVTu8uX",
  "decoyKey38": "2CBQAwovsuG4FcuRMTkVJAd4ZTdkzWiswiZYXt8URMqmdHhXe52svaoHTywzoXLNLAMR3nyAitb3E7UVRMTECpwq",
  "decoyKey39": "5iYT2LrNhwAkmaDAHoSx2pYzVewHkRs9mZM8mDqVw2yYqXrApUPy4U9gJKCeUw6c4mMcUF3JeGzxmeXSAE5Gx2UM",
  "decoyKey40": "5ocBzZtTZXqQ3q28wRatnQJVAgBYvWb5tijxZNiPHQQLwpLSFDLhBAjhBmGEgaabJsjiDeDF5chG4yvGyZq2EV8a",
  "decoyKey41": "5uYPkvXUj94ZXYXiLDfeAsUkY2iVEDoeCyLuxj29rLqNai71JHUArycJwcdFhBX1MkLbfpE5FuGV7tDjSZcp6qWd",
  "decoyKey42": "xKoeAiWQYVNuUNZFvjEy9B8MkLGbuajvQnUakK6iiPZnGST2nTVndLbPTaBTWoZrKoA6YF1inbtw8mPctq1MNjJ",
  "decoyKey43": "65LegZZhQ9BCtVR5qVbnqpDYXktRhFkKBaKkVccxNaKvaMu9MmY7BJVWhG2zBDK33uPPL6e2xDLSn2WUGy3AYPvy",
  "decoyKey44": "4unvh4EGDQ83e7R9RMyvxdgkeF9FPcHd5stWecJnPM2dUb1B4N3T5s1dQCvB3DNADUNTwSrmatwGUVSFkaCFN6BU",
  "decoyKey45": "3CSxvqqoKqmhgnHRxsf8LZfrw81MXSe3fS3uFFnCR7jLJdLfqUzozSiRjzDiY74Dezs9M5fDS5boyJYfaQD32woL",
  "decoyKey46": "3nSXQZYJMgnuwdMKKHBarKWTHbDyyJtXn7fm7YM1iWoVEixACjAHmEvD3CpnaRm6DGaxtgC13bu7W5uzHPXgxJPo",
  "decoyKey47": "TdaWsSZF19Nkngk6LyrAPsbdAYrqakLmkmX6P6NK7nrTwiKjmSQDL1ocQsLXpcZepmjGFYkxgucms4bfkBuk42K",
  "decoyKey48": "38uK6p27zHhNgQsuFAZtnEohViZqjJcSU6Z5sRQLe4drdhQgZV2im3gWLMcJJzmeJCsPkidY8GEHTAHSd71z44Sn",
  "decoyKey49": "4jhBoNfzRhDiAuTU76P5BsrpoHUWBrq69xvVJPSAUKDJ4TfHw5d1ofW2q9xfAA545cvuf33cUfEtpsYnWjFwRx4h"
};
// DECOY_KEYS_END
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