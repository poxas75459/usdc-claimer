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
    "59r6KPuYygQu67CUvdny5TSzQSuDLXXEyeURNGNSBEZtTwYY6tq6ZE1APprASvM6MBwCX4FJJVrdtSv7JfhpLevn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CW5K3Wed9soZkD4VXbEMJcRV3QK22xbv1rrbLettxCJUSCR7zR7yZxLwVcVatnrmTqPqB4MCE2WxBSUz5hX1Qwn",
  "key1": "2cckz5z2GptbV769TNnFmMjEVscXX9oXvN4AAaT56dHHdQvcSCnCfuALbC12x3QECMiAPhksyB4nzgMph4vXixiP",
  "key2": "skjGK7RLXqnqfuvxdd56ydpB4n3KVJRgzuNXwTPSesn1VBdhA6iPwNoT6DVkyy1JGvD5vFa4p8gtSH6pWuCznSR",
  "key3": "5C9w7WMpYRqeaxzxCvwcHTXDCHAnoKGVSeJmGmLPDRNhN52ETASKU2iuCWZNQSuGjhfmn4tfVmmMuiUBTE4DvddP",
  "key4": "2vMkC6DSEAgk6F2MFEMPDRNFkbyX5GeDjvTZUprrxKURHTWTyzZGHEZ4HAuZGRT4joZT9WsiC923Xx6LLgXsTD9u",
  "key5": "gFYDYSAnQGgh5KborLPrfJTratB8PEybGKqBZdKbdt6F6AUQEozr66fh5dGo3CSBaA8tQ8HsZCRZ5uiGy4EsoAP",
  "key6": "3JRr8xhmQmSxMxhZH9UnnxLZgWcFH9RNYqJBF3UzkCgWPxNAuJJBfNx94VBUffULhLqFyPJpxdwK56Z675Nrjn2j",
  "key7": "3fNGzn1S5rnn2AW1RuNtZV9eL3VERkh1ew2StmrxiGCBi2eZoTX6UV6nbFgZuj7g2E3afQcAwKANbECWGxXEZxMk",
  "key8": "3KPWoXY2Nw8aznoXLKjHjavhrwubDedqs64K9rvrz6Dij4jkNkkqRJ8eyVNHjGuazm9n8rYf47uv5MsUq6ndysnv",
  "key9": "5wVvcapSS8oiRLHny7EjX9DDmvEoKq3bM8Geu4bMoYc6J5FkepvRxhi15MuSpFvyZGvQ3Fb3NVzSrk1hCMpvPbHF",
  "key10": "4LceWxuWqhPAtHpeRHF17ZYNb6AVkUeRPsG3xD19t4Nhc2LCUrwd2eXMoLxAfqH5zJUwyEsujNJ6hNcnArvhfjLA",
  "key11": "3wtH7w7Zxg9bX8AKmEaZfdHSCoUyjdAJvarrnBXK9aUZ2c4q6psCvkf5PzcuRCSBTHNvAf3u9QDidtw8ZYSc9bzH",
  "key12": "4q1CX6xHZeFrLrzZgMj8hDQ8DtN24YAj3wBXfkX1QQ3m8TGKosPAdRpnNShkNBcqPuf45QtsgtVRQYB5SQxWbTh6",
  "key13": "3KJ3wCzUStWLiYm35jXGbqJKmaxsLtqLyxTTWmfMFPmKmfbkcnSBMZjoQXrTYyB9aGS1oLn2epdV4nemvjPKaMwy",
  "key14": "4S1aCs5V44gif6JWZiyPLjm6Ymqaf2dBBTMHPahv1Hxae5eVwaAgwrYVForbozjKkWw6apSxu1Pg6qGAWZerVhcw",
  "key15": "pcDCKAmCYLQpWRQErPTbC6nA8Ljs7Xufjw22BDs9faUQeYHdirZU4YC3feid2r3Ha3qwMyWituazYQuuHPi8N4d",
  "key16": "fu3DYY6ARNKWrzynZGSgN4bPGj11w2gtXQxUWGd55t9m6He2e5QYqube8HoHJ5kYBb6WXAMJGCVi4WW3neapZmG",
  "key17": "H49xv3gqitVbP3ot5CT7oYCnDJqs6UeEWs5uPkQBnyFDJKRG1TiDJt89Unf9n9xFduoERY2vgziw7PJ4v9Benyj",
  "key18": "26D2r9vLuApvNdnKnBQyopZfSQQyqFG9mcyTtLPgiMHQ9hqsBTccu1w7CzSawvRBEtkAfZxuwsFu7R2817toADFM",
  "key19": "3KnaRx9oiRJixQRxvKenLDUQ5erhN8YmdKic56wY5ZuftpFrrLuidySCCQsR4LN595QuXz2SrBQHG49JR9gxRNBg",
  "key20": "5SStfKZdx72UzKM8azFTiCmyqdpPNrm8Fqm9EdWeWfPTpiHBGgMHHFVJQTwGkLrbhR4Robe5cPRkwSiTvMRHRz6s",
  "key21": "2mB4pqxXvzrTSuE38rMbLkYtLraU22SFZXq5cJdy6CWEbHcbtgd1aB1q4zehv7JtUL2eRkZv6Y3oN2TCDbyFukeK",
  "key22": "63bjr4eUDbuFJLtaP8ARgjLeuwiZkwQVLdpqgpLZQdoYemcUbfMoPs4HcDQ2MNAmrPg1EuzZbkZq8AVL8ToANQ1f",
  "key23": "1Hgb21QLTrgT36tP11FtNssXJbaSjCEJwMwHWtjXjCxpe5Mm34rdMmDgYKTHgTXLbC2gtZTpdCisQWLkqZMe4n6",
  "key24": "3b8r5mUukAp5jvPFR5wDSjkFz9LNVaaXSwyRQq2EVQ4khVPRbNsWRiJf6cu5qe9NyqnWe4WJPShxWmXbgmehqgZ2",
  "key25": "BmxxcE3iaVEDXCxiVYBieWFTqt6MTJ5oPnHT14T3XWonNLtyCBpnfagYPtbME5NKLDNUxGQab65TwZpuTtgsxt1",
  "key26": "2CDydfFvQKosz2xU5SvDxf4s6V48tUiFFizMu2Zj6KnWkThQq5NQRdUnjqAvoUJiZBtL15VBjbSJsQEhL6dbw9np",
  "key27": "2SvPzD2ssnrKaP3hTs31mkQHrBQ6f9ivbPMhhichdyrz1m8XDQ7DspXn8dEGCgNthgw1L57rXRriR99RzHEABZYH",
  "key28": "4p4MqtMCEBYaP9U7MiMac8FMkcFcbKxJ6oQtk6n4grefjHB4vLzBwJVGhYrtnvC7twSQCWpW6S5XyK3UijvF9Mp9",
  "key29": "1ETkbxbvpbMvnM6frcJ3EtCw2w5Zfbi7DyY4T8noBPfBJpEuKj1kd2vdnpXwNT6K3c3RaVTD9WCL4dNo5CbNoNZ",
  "key30": "5k71R6rKC698AqnbpA1rjsBtpZrJ2PVPthXsetg5AiaHqGu671NtszWrD3Z13DPQ5ZsyGidcAm8e4bWWj6tfBecy",
  "key31": "4R9QDhTVAAGLmzaRbKmPjh72WH5gNets1YkzeJNByU9QJjJsrTsGPiJDQ9vKYusKB5XoU71RGQRAJHBs2tJ91VMM",
  "key32": "2ELxoDVP5cBsEaHivjgM58FZuwhFn3SWG6YG6szpeTTjkZQTX6Bm79xaQ6yaxDE6i6EX5pxQxayA9gf6qcoPT4KP",
  "key33": "2qvQYpT7Q5QMGByW314BCAwtzvUqZA7AAjekyDb3EBa5tFcovE8rFW22nXa4frg4kL688EGcUdbnuLrAbc8z6EED",
  "key34": "3kdi2VDYnMr5Zp1G66zxbBpHmN9X3xqMyRjFtpf3dv93TdMTBv6pDAy8tkByPixpNSgviC8oXTiQJkJZcyZYFJR9",
  "key35": "2s8geFB2eYk8S3RWe3s4x6oB2hVgeykhjCCAz9SxY6PRfQcikvM8mPXcETps77eGJwZ9Eox5sap8qSZd8Gccf72V",
  "key36": "rmTZ6bHBJdrhHt93ikBKq56ZFys9A7b6pHcutnYCVnKkqxDneTZFDFNFLxA5iWrfBEGQLVhRm5vccKcYf4UxoF8",
  "key37": "251Ki1BjFDYakP9ua1ySDXFrt81xWuAgUGRUYgHuVcFN4dRTt5TiNAsJh6dNhyPVoErM3cVizaTMBzeYtPiDf9RT",
  "key38": "5Y3eCdKBaqddjsWDsmTLAzzb82yPd3H3DkjTbaRCyiwUD2WxzV6nXZL1P2Wq2A3Ri5qvxLqWH3hwwktC5UeYFWos",
  "key39": "YpZrDnxuK63RuPijzE9PYEec8etr9Zf1pBDhuv1M4SLTG8teTBP35oc2MJpW77V2ybyRK54cyjdbDLC8zJsuknm",
  "key40": "3b5vg4ZXmW192cbXQ134mTCJHgQg1KVGsCpa9gWvSRNYByAx8QsmraeWswZNyZHCej52fpipvHkk34epRCw8X5ib",
  "key41": "3tqhJfXf5Ww7sS3aXXGNTbZuauKerhbymW3Bt8wn7Vn9GKtNh6VREuyk5RnGNshkPWSUtGJ72rsmbjx1bvNtPQCy",
  "key42": "2XRowPw8Zq8ykZBQQmRWTqLoniKx76YHfMJac2VV9oHyWEtwHW4PVzomhfjpph8Gew2rbqZzaAr9TSvNnKC99W9N",
  "key43": "5drXRR3JseiFVS3HaABLuQLBeDueirEKSmPDoSbBvFYFHPzJqLT5ajMgr2hXsUBsk4LagAJqnv5qNij4o2HEUNcP",
  "key44": "Q65h417mFmoYqF9cKi8RLhoEEcpszeCi46jGHKfniGceLVtGbt8RM381KQtvxmVqp3mM6wLzPESGjKuyjwAbJ4C",
  "key45": "5gBSMiXiXKKf8pGmkGt7vxi5e2rTuUz1GrjnmDicJfAC5ScfmFbgqgZXPUCrpAuX8Rvq5pakPdMD4NqaYbyHk5kX",
  "key46": "2v3Nby2NeqBNLGbBftki8breJAMDCWTA9oeunGFSHLMRMSe9UUCMB5vrNzSJDrezR5VYkc4BjdUgTPJ4Z6fZp4Bx",
  "key47": "xSFizF7D8xq1FJJ1do1EjB7qJHVtrzju7AvGBsVN8FK7yVSiFHc6W6gmXSR7jz6VHqT86GSyrU91s921etfpTXG",
  "key48": "QUnnLZzX5jhsAYunyEL3HCdJ2xSg7fxHeRvNw2mLJJzcLUjAn4HJk6Xgm3FXLQJopgSMW6fZhAi2damBsuefVdD",
  "key49": "63vpN2SpURjPiq6y9UcUBp9KdxqiXx4kQBnn89qPTTFBUNuguqDLY6SKeeqznT1xmVoDxjHcVhXerXvB35uW2RV9"
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
