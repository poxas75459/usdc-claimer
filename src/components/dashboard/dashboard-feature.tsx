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
    "5KJohBcFzkTDMaUTxHYWTy9StfDrvH7pf234VYhKymsoZFa98nZAygemmhDPaombb2sk9fXGx9wsexj7KZF6YkZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tt9GjJsWfscWdGTE5RuANhAdZQ1BTRb7se2ofgD1AF9W619UNs62u9LYhYq1inunPDDiK64Tm98FGEoP7gHRVLo",
  "key1": "41wDhZfoXBoCbFAWA4JqwkTLak1isDiUjyAvgbvHHAMs4GMqdztb2hEJPbPpT91tC8oYErrtu8ZPjWg7HhG94E1u",
  "key2": "zWfD2nKvpsKWHhFujDgjmFR8xDDfR3isx8u8kkfw6vdRxEYXULNKEvGnhyUkmNAEP9xg4RqJuVqqcbpeNKPQyuH",
  "key3": "49VNDTHvh6aeTGMKWRUX3vuMnMb65GfXKAWRx6YTS7ssTTgdBC4FpbAU1iBSoLAyPdznSSfZyRm4CMnAQFsJ3Dvk",
  "key4": "3tGKT7ZK7z1n3mw2dn2z36t8D29TUm6wqz2GdrMM15SmU2TXGnQWt6w32oZWFHmCkWKbdj6F3EqXvyA7jFPUGEV9",
  "key5": "3tUhE9cKBrqmX4zdwZnaeMLidhETyeupCQL4bZ5LvCSPGJcxuXxsA2ZNixkAMfQk2YvhpgwXRFdTgdg41E8a3sia",
  "key6": "2TShSaWLPoKNVuwGzhsgPP3Gk4548wnHbD8uY1bgVkshq9PN1ULvakGMYxodvBcSaP32MyjEH3GUVBbcWfy2K7Yc",
  "key7": "3Cw4nJmKbsFwHdwnckbJVd8jSyVE5ACJXivBYyrY6SLCKFqxTqaJ8cDgjEST97Dsn8WEbHeJeXmx51GfQToZVVDv",
  "key8": "59Qky8NiWKY8tgH5MPni89XpsiiBidJ6CD1niroShxp29SrFFN4CDPsYctpTRY4eubnQNtzJL194sU2JHnuNBxtg",
  "key9": "36Tv3dr9xoMWuT6Q6AcTQ3C4obVGteoVVWbAYxjSynBecJ5TNqE5wfZuziBs3oQc7J7fBy8RhEu1YdkroS988PeM",
  "key10": "218VDuUSFAJkd6jKCRryKbAMMvkS4q3ueDoYnv5JqUhUQMsDBZsxy5BqVcJqA2P7socASaZVX8gqXSQaf6NEjJvc",
  "key11": "3fnEu9z8iUZJH9KBjtpqUEwcYfLaGfHMLGtBB4TmuRtBKiqcspim2RSqseSatS2idBP2TbQicn7RHj9tBK8WVyqd",
  "key12": "fDW33W7C66Yiqs1FmsGRZorLcVKCR4p7KA6yHQpymBPVjty3AU6Y3hWteHhQtyMr1fKSkxDX2CboYza7xcsFByh",
  "key13": "4JXuYtvZnkjgCLLknrRvvaEa7XrLfTUrqo3kjrz5wcfmwazWAgfcXHvN1koCdJkBtfmyCF3U6KcVqAn1qdR8AJz5",
  "key14": "5TjDXQdqJKfDmTyAguiQaZyLYZwHdUnu42K4poX62h4kxYYW6HgqHKvaM2C37gPqo7GtdBAp1faUrakgkav65ahR",
  "key15": "x4VCLYoim9c2BMQ8iATyrjBUMcnWmLdLLbBmkBX9Spt6v3CPr4oSkBd6fiMidMqFQ27tZazApLQUivyiA6o2KgS",
  "key16": "qRimGh8exEZ4kgsTrmdYUjMzVJLfZ9TKugQ1KwhTA35Wwmi3M1ZsC5kEX1ni8SxJkvHjJW2fCn7QHaDZ81jjsqf",
  "key17": "M5dumQWBESEkJPcKHvDpRji78mtWvT2n5w1mW67Vng9gUm8NYGQ6ttWA5YZ3225kPPkq6i57wVSqHMr5KTBuAuS",
  "key18": "3fwMqPoiSQZ5fEVXL3Y6nBCA66mh93v7uJBF1N1WcX18KXVhuDNRho3yBeqhXjaiaYe76cwN4pyP3q8haQLQy4uZ",
  "key19": "uyKTN7gDVQLJCyi65jmDGo1BSLpAEDgvgtEjFGyqkrx1ikP5mtz7UGAzhCx4YzNfKZzRKtkymn89GnZw2C18sh7",
  "key20": "5anXATKDfpd4zWax3QKnVcE21iiGuV9QaMy3v1TWo6yijn4PXWmusrfVDtkDLNvw4kuX85BLwhtBGiaU37ZjzmwN",
  "key21": "2qxUieoDLtJ4a5HSmgSuj89Nv4Bkdawy8iww4rsp7E8ZL6ud6dQSvPTWaWTNsmJGBJ4FLkcf1brCoNKmc3tPRqb1",
  "key22": "Q9GeCzshESYBgnAcJyqMyzb5eR8wzKgdq9odNhu68bankbmNhk9n5wewohuv1XJL5vDh8bF5jimhEa6xmojknG2",
  "key23": "63V2ybD2xGJzeJkq1Ka6yybgM6GQEptYEJDp2Gp9dKfvS3KqDq197Ax3AVBnHdiH98HnByMeKuw5WqtNjbvXgtUH",
  "key24": "YLfHLrMgpYWx1veYGPJ6fvyXb5Hbh4vu6TbiTQ5fnsQDba9CsSzXbmwmthqme829AzJL9KuMDzqbthgCLrtZEzh",
  "key25": "4WEj6b5Wz4cU6fjT7sf43PKS49oyhtvPifd5mnqGe2y1T8JpcTgtoBi3XWUCVrkqbCCUMDA7ERADNyyNkvCGPgA4",
  "key26": "RF4K16ox2Wt33tNx4gcnoykKJ5tegMjsKLxNCqd1ETtCKktNk2CJ8CaAZvP3jEEggchnT2Qsa7TMhxQAoDMaYGQ",
  "key27": "5nhqS8HmqauB69cCNFAcvC2CfmfavVsQXLzQBLMQWbhDb458L7w6Pa6Rx6zKyLfyWUxXhokh9aQBBwSQnQBTSREo",
  "key28": "5UQPYETmcMAcNRqVUFAtbr6rYNoq7AfzEeAomLhs45o2PX7421PBRRXBd2yWSWEh1yosgGiRqSSoAxsLeTHBaJiE",
  "key29": "4M64ngn7EVoKoqeCEWywpw3WcYdS25rYaTQ9sTBjs8WGp3AzBLEDFBUGgqkrwDUVzP95x1AMhz43yMuu8QJCvWJJ",
  "key30": "2Grei2BhrMmYEZBGiMzoqJ6k3kwjmXgwgchhCSxCg99djVEsD2e9GaGtKHM3yGmXsvMbcuQCYksbV12BYdvWKUjy",
  "key31": "2wqg1oWZ9wR444EdWHZomxBzRPwBbgPCi3ULtfz2BRCzTTLqPKk26564BbjAKKs4EgiZNiVXYr2SkoZzTrWVo9gm",
  "key32": "5KRVC5qAkwJ7fZUNTD3zy7tK4ZA6TWo81eyjCyoqHD2wqaEkehSUPnvzonxTKcF6r42oasnA3wQknzjBeabaB3eR",
  "key33": "5RphAjExgG4P1cABx8iKUDudRBtVzP5aVugtRJzSJ75xz594PgCUFV1Zkz9zkrM2aGQysdwyK3e3PVFfG3XtxedH",
  "key34": "5hYk42oY8TCFrBPRqYwkEznEwgKJeJxD8w6nzvFMEvZPHnXAfvpwHt6kSwatJkNZC4bUoT1vWQPUsW3DcK4AGWkF",
  "key35": "5fE4xBbHRTg4wYtE3weLWomEyGd6mFydaLPMFJT5mvhaSjLmPcQ9MBVZ6hxbxfftCfBHiydTwwiQq2bFWbwcpNja",
  "key36": "5QE8w4XZDBrpA1RxQne4vLEJNBxEkgheHHiZyiYRJLeH6UrtFaAwjA39PYhZ3BtvdBrxNJKKmWk5kyhaSR7KdNVs",
  "key37": "3XiRUdmjMtrpGJhiprey8Vj5q9RKKurG3Z9WuYrFrCQUUD3LeUArcYLzCHcJNA2V6wZbAeGtYeotdQCrRXVHHrU5",
  "key38": "4p8VgnBrm22L9quae9nsiVsBnYmn9H3Dvd69K8iJLPPMDHqWKqzEupEPGtZFkDPz4sK7HB9prP8wf5xgSsQ6s9QA",
  "key39": "4wBpPCv4efj2DGVn8K3pCTnWDjnC9cG6KfKZ3UU7nYndxNk4dTNaw3aLNrt6hQ9Vzos3hHik3sf9vSF4soBNpqDQ",
  "key40": "4EwjzvWYKf96cjtRH3jZa4j4qgf8ZjsJKrYgjcgY8VvjA4FdTtdLJkhpXVVLs5Hqf1RZZ14KVdeR2FAicXsL9RA2",
  "key41": "49kDY6Yirv4WTQYLpJkaacHJWxPW66G9Z99F3VAPDapUK97AxUjES3sWt2836BJSjvdkmh9i7bJuR4U3fHPuawUV",
  "key42": "2igo556VkqLXub6CbD4fMkcj2kEXHkzJrTj7FWpW2wmA3Bi6snMFnwU3TBZdRmyZ2NuEPjJ9xNa4bBuSpKz5FAaj",
  "key43": "4svi2H98vWJxhqx8mVrgJ4cVR9jZrAqhtiU3yNXWauRTg8hSE6QNaREbwvKPxzhFdMNfCw6x1qdxGMuVAf9NFmZb"
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
