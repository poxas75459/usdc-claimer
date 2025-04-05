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
    "3tDS41JV2j37Q3yRN6m5v7bBR75Sy8PM2ULAsSNNc4U7J262t8j7WX1H3Loowu2Sr5SLe356d72KN3CBrzPphhJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ggr5UhWFcPxSvfjj4EYT3XGs9eaK1kkEyeqfjt2KsChs4MwpTaLSEVs3cXimPCr6vomWxpoppf3W3vqcHK9cskR",
  "key1": "3pxKq8BYmEqmQHCq7pRFYo12wsvj9P2TfRDSLagTmhpvHd9vGsVGm1J4HgfbrNTHFjwLgtBMcheKrqc3gWZamyFF",
  "key2": "tsXfn6nLBUAHHwHdw5EoYa7GMCY3F9QwjpHKQCwW2GNMUK1xXhwF12aXxpejPtTB18kjHTGr3zZjdBKFSBU6t4m",
  "key3": "zh1nVanbrAZHtUEmgtVydAyBrBEdvZL41FVw17sFtEUcgJ92RRkq97uZ3hFaS4ZwNK4pyLmQYUjuVVFCKHSEoHL",
  "key4": "5dNk7Jx4JBjdVtb2BRREznA1j73H1v4FSSQAfzLcKqUe7mdpNGqqJtnrGsE1Pv7X8jese9UbnhP5nJovFJ67s1aT",
  "key5": "4ThQoZGdjANt5TgmX5mjqkNS1nPsAb8tBhrtHeUiB66X175R6cd96X9qdbvxCWAdyzkdtrHNhNWtdVBp3eM5jazw",
  "key6": "3WYyqERcmKqecWPn4dzBiatRH7uy5yCTB22xEd1MdodQVtY1LRZaCdCN7p9wLoyibmajqR7txAmsVQZ4ZFgZCvGi",
  "key7": "3URF42pGi47Hp95jgUoXAV2t1hG34tw3xhJSq41bG3CgUB56NsjAwrNybSoG2Wqtp3RbNaEGEqaXFcuU1TxBjVeB",
  "key8": "57GHaFedisqS7gLJ5x888LWFHh6BLr9sjMFR9q62sPckjk2TTVLNk1ao5cZhBMf4cxVjQPAciwT4x3fuG1cox9bH",
  "key9": "2Nu6hbS1MawpeYAy9BsZqZvcDzAA1bYdHvEKo5ahspVSAK8v8wGzpT9cHAGFszYuAp7NzTL7oVepXnxVKAeebKHP",
  "key10": "58CLJJpTNR2fxjdqJKLLnvv5PrYoBvJVc3hjRQ39e6SXrimrUKWuXF6hLTWLYmP8A4E8SFS6g75JAkAoGknej5CC",
  "key11": "3gc3S4zTjaHJGCYFxLX7immhmBB6mCBox4vbs3z3ipbNAWUVi17Z3sJ7w8fWsfGY8s4bFTvepATf2FDZvRCzRj7i",
  "key12": "2ubZQSHUH9271kQHC4c3mNSkW3Ur2wfBiL9rCLcdxgZhgotZaKp3yGYSP1yk5WKnx9bCUsEEnE5Kespo94xZ31Qz",
  "key13": "33q5FPmY4Zmr6gDMvTpkzKoh23fziZucAo1j1bjfk3hixjimdTxSyGp7PXfrnMqx5NbUrXSUVV6PTZZtk9vPFB5f",
  "key14": "34u2jgw6bRANfMbihXVj7qUQ1bJX1Ai4ViMpaiKSZjrVXd7XPkq57M9J9YCZhb82cBzZPfxeR4XYHcKF2nuLY5jy",
  "key15": "5LPMZbg99WRu8mPc4Hua1FBxJPi5hW6v4JkpZxdjAM2KKjp7h2rbtHdBEE1p7qVAHhSX8r3NazsmNQH2r2Eypkss",
  "key16": "9AabSvknrYDSwexU6tmTgg4kwCausaEKqDef3wvF1L54wkZVUyQTcVEvomyAfdUfcbLCvsu3LhtR3qq1TMeg1WT",
  "key17": "2mZAfYWiKxcfv1GUPSJBJB99SoarsUmiPgas16gq37ouegEQBo2Eo4pXWNvfJgVhf9Rqs2fJSDT4KDAuM8QsJZMy",
  "key18": "64urMWRHDF16sJZvV9jJ6yixFTwdkrnW4hZkLaMWGznDJGzQuNAuvujnvhGPNLZsiG2QRvvcWbg9oC8ZTUr5jA27",
  "key19": "4Cuyw2vYqMW1ej8Jhcnrww6AXL1jF9ujuVBhmzBUPiQVLjCoX6JpyvYCxsQhJp8jJyFoACvGgXYzNCUa1xrz9rVu",
  "key20": "54sZyKT3jJcy6ZNRCuRqb9GzW93719i2vHigHDeDhLV44Lfqg6PpapPozvW6Qq1LzhuAuPWHtD46GF7msYJ1WJi",
  "key21": "qbUs9V7Rvu1ipZcQFUYvybvJ3NsswvU5XNjwiUo4jhswnMapFApVEv1SGDBHAGHrE9bFBjV8L7NvmHiLxokGU7c",
  "key22": "5JxHXxBVFwAtFxm8gyYukSJXCtiAWGZq9Zkjku8B7JhRmovW2FT8g3ep8GSsJfiuXKBZETQCmnNqccVDjQsuHxzh",
  "key23": "2BRf9HtECq6gf7zjamup4EMnp5CxksEGnGpjfiqWuZmkxfAAcDAG6UkzjjjPsXjZBRfwuBSKML2A1hwQgVTFa93h",
  "key24": "4uGoeCAsnCYziybaRgfebcgpyETVz21ZLktgB54SxLjqerB6JNGa48wUejVNZq1gMHoYEkcAFLHEpLpj5mQEkizM",
  "key25": "67STeK71U2MkD747aud9TyNbGn5HjRhSCHimiMNoEnexCnn5GD18MHuwMHAqgE9R3tUXpA5V29kbWQCqxzRsJC8B",
  "key26": "2NrrQc6tAS3vBjzknqWQdCYhPm34W85AMNxgwRvYdDaGcMGoRfdR9gxmHrwvoV7GWUM1tmETGg84RvbtL2nA6BC3",
  "key27": "4nrpibNY13WSeTBmst89mtczaVczwPPiEoT4NCo5Ydj4LeswuqfXS6NrMVixnem6Nt3swGi3Z9Nmcw7oi7phhamx",
  "key28": "R3Lfi6LLZtSgDqUDuqApQ94zUNLVRxNkZthbWZ26VN7ch3dq9wn6HYqUwtG6UmLZ85xxT7qG7PgkWpMvgUD7gah",
  "key29": "3uwLxSbSLt6szb3hrTFvjteUMqgWbsjP28k7o5sCQWrWJGX7iQHsuQT3DVtkzcWQgUuAhPRk5d4pza46QKP9MjRE",
  "key30": "2HdeTpbAxWJo8buA5Pu9yPdenh2gWxbkqTQULXFVyRnTNnBdGEeDhmRZ1Aqb2y5L7VPVBTrhRjKatsQbeeraSKkJ",
  "key31": "2BghSeEPPoYsNFLXkuRPWfJRuHHGYSGywRQWQZzceb2h5mLReYBm4wMGxmiE2WKsCN3HAmFzh4Hpg2hze1xRjWwm",
  "key32": "5TSRAPAhwMALbdBPSjwCqfHSZsXX3sXRK3UjLZxHVGYNUk5EXHfhwbmoUujMVVLkHomJBADT1nQ3KhHL4dUuLS5F",
  "key33": "2M4cQzy9d3A2x2ypp1rzCqFCZGTrXesUDoC5VnFYMxbRtkj27TVfxfaigXd17JPHdpBRFhQ4JDDTKbdSyktcLCdQ",
  "key34": "QmFQWp4VfPe1o6bCuvtJX4aHPHJ6tjGtdKjJA4RqtLB3yPdDXxkRqvg6d2yshWmKwLuoQ1cX2aC4XCgySH3XmrT",
  "key35": "4APnr6WdUZtva5nTScKqsTG13BYnsyWzagUEFpyJWzX6H6DvgPEupYZZct1yWDdXL8CayBKdECunJNPDnNrs9Z8R",
  "key36": "WCNCvF7ZWRv56KgnuNdmfjzzTHoZiQSJTSSHsthTFxpQkb48wFve11Lb4vXR3mxtdRYcSSfE7UEsxdJt9pfTfe8",
  "key37": "5d7Y712zNym1iUjn3YANoG1p73FE3VWDxguEgmf569nWRvFitSxq2XHYggJmrYs67Ea9V9fhJjSwmKa2Yt7A7ckp",
  "key38": "3TFrFNLeWJptJEQ1aBAd8tdctXFdXygjKXiS28LHHPACJtufAF5fm6oAjz9feqWVbHoW3DeZgX9j7oWEueDwMwrx",
  "key39": "4d3VhKjEEku3h9ZMahTay68mp7FXNjRkW5T2Eatpm2q31kQYFXuZeCYSpvw1ej2f6wcYBj8NRrxoadBKoSAQoEjn",
  "key40": "4N7jkZroZpKvDZHoupgMANS1tdnh28sZa8gKWcfwBoFVLgXYsU1XCzrdQJd8HvAaiHa9jwcbKJMxzG9JpCNfy854",
  "key41": "587HeNrs1XH67AQrk4PSro94Djb8qGV8siyetXDtG4MRMtKSj5JtKxqhcmcdt728Z6BeMrQh6gZ7q3JpEyRJ1Yb",
  "key42": "4eCJCYfxUmMJw8gxKK53BADMza4CYYAuvpvJGW8qWFTT5Yyhx2o1wg1ic84tbdqDgiy6PATQeE5Ddzjv3bdsKHaK",
  "key43": "Aafy4Mu9VNAdYbW61LEACT84heTGGRUUnpmFV9PFcZzmtWYyNLURUwBNcFtTAfCBzjjp8xSZjUPkNnARjiiRJXR",
  "key44": "2kkD5ZzBwFbFawpfa3JgxAFCy9XsHypQq7WEts2mn5AXXFvtvaP9eEXwm5SWxLYp8wUYGeU3qmy4Pnq81bmTUHcU",
  "key45": "FHxJQUek3pKB2Myz8SKYcaVHHALCTw1GB7eH8gjk8QLEaPyvrUXrobk37eCgD3FP24UicZU4QKDPVNnHUSitExt",
  "key46": "3fjVfLdoCWitBWjZ2NcjJGkeqbpYwETHrUdxPFQbQA3jpfctXrfg7HDHvK4whbcw7nS8pFZnz5quSLSYTEx3CpnY",
  "key47": "46zjeoxgAhk6WfkLAUDZD66jqLu6SmB28nV4mrECJWfpZ69vqjiLvHSLVVEcj4pUCUvBZ1qjV7XdtLtq76CRS3r3",
  "key48": "3C1g9qiKyJFRMawWuF4UmQiLeapncdDbB3eJSKKf6Wps6Wj6VKeck4umAdWRc8jPaYnpLQpBZjiRhi93DfqagWyn"
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
