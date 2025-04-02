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
    "4yZcV9n2zb3EjczmXgNzhftXx8DHPuSZ6NuhYKr85JvfqDD6ncQR5MvQ2aivPd9oKdtmr6NuY9NfZQ8HeVTUrADL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KnmseyZVMTSbzAeFb4bpknBRJhNPA9pPkWVpenMCbtrXuqPichYH2WsNDAHtY76QL479P8HBH1VvYXWsP8HL3aK",
  "key1": "N53xNstfrtKCstk9C1oBkqb2Nb3TNHHKuirhUJbdqdHjC48YBwPrQAdKLu6rNdbqrTeG33optw4xNj2xFcPwgd4",
  "key2": "4BVyZinVhd7LNDYX5aH64xY6LimYzAYmDLLD5mEQJCTmHpnAfuVn5YmHLc9PkmZLtKsvgrjENRtWq4dbRvJ78zqn",
  "key3": "3BP5uyKMw3gXG6SdYJfdW9Vh3ef7RFG8FcS3yfHpoLLgKgvd2jf3U7EuyrLJGBrFkxxzpTTNMP8pifXRQiBN8x7T",
  "key4": "4CbbsYP5tj2jbKh9uU6poM9AtdaMPJtmXN3tHP4FD19VS6EUQfBUZLzULrtEdY29ZEAnueR6as9Jqat1mHp7Xz8R",
  "key5": "2o6hDTTZqtPyLA2Vg65XeobeGC4voTANjRzBQQf3MJf7xqNMxRk9SaobW16XzkXdZbPSpoJR3h2Gdsh4N2tmyNF5",
  "key6": "3L9i7he4KfDDnmaUY7tS4hhbG4D1uC4rM7yiRYdUG3xWy3NUHievF2C7ZSzB9qVKbM3Wq8XtMwp49UJQZfy7N8SX",
  "key7": "4DNHu3yXbK1yFoughR3Pmvgpjb4ZCxZZanVv7vh1a33UeCLWfw1ydWLAt7mKgnDYoDPtrcKMPgXQEWKkCNztqKcm",
  "key8": "2uwVVgcrzPMRcZwuifZfSmsKsiEqb1cjU7ezT3Fff3NVzXLshFHtN7hPSRGtPsV59q4tiV5Pw4LLWnMmp91tERcQ",
  "key9": "4cJxhjuGK2dN4skk13rSbBzkBtYb8MMwUaGrfvwL2huNFnvSHoSULMyaXEPcTFeuov8bsBWUcD68ua5rP5uPPZMy",
  "key10": "4Gm5LeaRbqRZCdwwy12dEyACm8hToEebroksAcURrN6i2a417586kmER17GdhsnoVPws2Kb6aYPv3LKNqnCP7UWM",
  "key11": "4pmYKQ8FWmDEXi7rAVqP8i214RBs3krwcAiopu7PQ3bQwzVbgp1eGqcTuxgyuoy6o88ggduZCaifn7RwBo5vSUfk",
  "key12": "5kPeo962UDfRJFwBdtnPvoaYWZfHLzaiUCqQvZR3XRspR9YMQH3E54aKJrriNkT373PAPorhYw1LG87S3jBKKFEW",
  "key13": "4W2fygyv5tzuRhrRRyHbRdgkvSf9EL2XpU5ZrsLTXmzm25vganXXtjgjNGbLnst6Kznmti6wCW53TQML7guCpjNQ",
  "key14": "1upq3buosvdyaFqW4U1afPVRGDbAxntdJz9XtjuVAtQ9dfDJysv7awJwtv9w7C1CwyH1zmTtS4nUyFHfoUBFQiA",
  "key15": "3swfszrgqwcwwQ5FSEHeDUyMd5NoWT5uFf8jgf3iDSNWeExng9C3qHHfKqPTZYXuqmmZELeBUY8nadk6cWe3AWMb",
  "key16": "56vbaCunp5ZuEvoHiTuUfHtemWo3bBFRejUyJgiLS3KUvKU24HpM8SnctZk1qMrYxa4C7edEqJ5doYEQPRiP1pzv",
  "key17": "2kPRUgyqp1uVoSzfQzaghuiFKYK8pD3pKNCPXzvUjrFfMPPvzuxGFAByG3YwteDZkrd4NqjJRMHq6BRtacQk5fgc",
  "key18": "4DdLTjsojKZF1sYJr2tyXLRBB2oEpEB3htszoq9EvcAfqhjsEt1x5ujQDLugbtp3cMum8HddTNnbYTUtnwj58s71",
  "key19": "5D4t9HEk49mdLDMYGXB5T5F23zKNwokDYGa2JAnG5dWeratSrFLeJJ31UWsk9s3T1prWKUiUbjbRh1i2sp6Xpfr2",
  "key20": "4t23WCWL7SeHxoJmmjuLhzx2GKf7J9stoVCJ2W7PUXU9YVfBerPcwBqyAXKSNXrrvJ5ucridbG5hdRNXQADH6S8b",
  "key21": "2wgSrWZTBbXF7q8zULgmkRqiDyiNsyGpLK7PFpJmGns1xApmSaVtGzpp4ZbRd2EgW7XhYgBv2AdaRq4sNEV126t3",
  "key22": "3oQST1xYs3N175eEEg1UQJx4g9mhvhH9Xu1bG2pxodJGarVMaABL2MziqC9M691BSHxYyABK4bLjKGE3dZcXMfcQ",
  "key23": "2kGCng3HwYecHRufSRFrgzEGe5TS3jR8YTUAPwd1Jsb2R2b9qWRRV33iGFZtnxCvNjniQEzkESpHmnt61DbmrqgH",
  "key24": "4fdTEDYv4wbSJo5YjWQHshX8RjYsP4wExcxCJEdprRZc31REw7roj12p8dBoZQRFbA5civ6pAXavN7HCi3Hc7TLj",
  "key25": "3ji6bbsco7sCNMmJAp6bDScU39LFUiYAeoB1UNkRu8caNwCoQ1S97ngGGYrp7sxdqzVFxvYjYcb6xkFbxGoK2Kn8",
  "key26": "3X7P237kG9rGrL5BvzUa2yCwYv7tobgrhTLKZw61PyG16JQmjTbUouRjSSqyJJEVsNnmuCKK6uJYp71bxKqfnfLS",
  "key27": "4V3tzYW2LQJ83Np5NPnWSi8u4UbAzzFaDdZ9R6XNCnKoQb9x1Z3eyxiUbuZ6MQetbSio4ej7g9Pce3KigdJ14x4m",
  "key28": "3QC7gjCaZ5PBQN2tnQSu25jkVxhSBUdmpzVsFq9yNREb7dNMhewydoLfgiYfoWah2MhCpPKgnx6EDHs4rYS4bsAL",
  "key29": "5wHTfeLWoiqzUDqhj7sRMv8MppkTcfRNj2LdcjUCFEbJkRsPAvHpzsVKdR6shSRE4H9hzKW4eBJeyednAWgHXjoh",
  "key30": "4jj6f5CGBmbSG5UoVy2DKWG4HTWbvaxNogKChSNzyVpBuWyeJWX9UbymvXqhGyCVuuvs6aH9cDrYYM73tmpoXcKV",
  "key31": "2AKLnw63Qz8MBJhPQuY9nG6fcEhQeeWW6PFMXnd7CJ934YaB2vchGujaKwsvozhyKJVwnTHJXMFK6U9sw9MPRCN",
  "key32": "v5jpfgq9VfBjV6jzWUj1Yx3bEo1BdjmBeuXLqFmsxvZFi3owQYDo8mGzWj8UnYE2GNeccc6DQrPo6z1LQXcWoi1",
  "key33": "5J1LNMbsaN9EyRXKYvTKthoBaoVcN6PUynM2wp57GMcBcNmwoNXb98xPUugVg7nED8TRYt8xQYbbtRjW8UhvnamG",
  "key34": "3TWkbsy5UutwGq9uS2fGUVRXvwjgDUCDHDpitnchPm9azZmuQcL9RFVSYGqKvYnGyCQtiNiAd6jj99pXqPxrVLhs",
  "key35": "Jvd5pLuendKeRJt8J7Dbnxck1HqY3pzz5UhdTzB2dGBnFFLe9iUWpmneQMQwKjBprs9RLbu1XV72rV5xn372AoG",
  "key36": "53Zw1Fxx5yNZdFnjNzz76KEPijVGiErRuUPLBEY2WQf33paKr73TpHNz5jVvGEKAcRrh4Ppf2PdDF76EfQ5pjh4b",
  "key37": "3AYrVQR9mZUnrvMrhyNC414jhxV5M4cMh2hECme3u7zTheY3CsCMGAFFQhAF6fGKyswxAbu5E91ZTdGi66SNziFm",
  "key38": "3WwTwFcxf5W3xPB4vd5fi43UV8BDqUzYfbQxQ9BRCZSKXY2VhueSmhjbh3VurgYJd9TApLHJ2wfVQ51pvQs47ERJ",
  "key39": "RF1JGhpwoh9H1XHBrcb25kgipMSvSuVvMFHGpoEyaMaegc6EScsDwRPM2sZYwEKMg7WH2ieLdbHNtEWdLXoeELs",
  "key40": "3zhk2TxGVXFAif6wd3RFvcsNRzwXScGLXEpSRSVxqVi5WdMHou2ZXBtCh4cBrmvavPw24FnwvSPJsbFaCzW9boBf",
  "key41": "3RRxxyVg8L11h2PytNVZvamVr75WsWFPrHjPLoZkqpQm4GimCPry2s6QeLyhnZHBMzzhWa6bwtXDTLZsXo16Nmsm",
  "key42": "63UNcsGpcHeyD2V5m9odsgC3KBQxtZ3eYKS4dT4QUCcbFbRKcqCdKNSf4Jr6UFGzQ4MeBh2HjUtQmotp9crTTBiz",
  "key43": "2hSBaFQNYs25qRWzyhV2tGJMBBWJ1HwN7YQqTfbeMxWfork1D3uJRZJzvXdyc5256Vts9UZFMJmHbpm9wV5FjwYY",
  "key44": "4hFEWoy3bTo9jHfWRM7gfATHw4qE4QUzQj3H2hioKFASSia4cS6NgyPxcAs3m7hFS77nQ1sioB1XLbxVdARq2UgE"
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
