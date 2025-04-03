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
    "2fcQP7L46ShJAZBXmp7zvKEfQLBwSaaHtGeViurp5DQDL5nKvLxnxx77YowhzFdZRjMrY1Yi7rb1Y9Tx1zaPDRZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SymGMjSGTKFuhitCEKSH5xTDNauFFnUFnNGujgH26LVswqm1UbPkvDKvNaqubChZPiPkFSEHCQ8r5taqSxSKArA",
  "key1": "2h6sMaRar4z2EiuBmxZryZfv31S9od2C52TjSoDrgqH5KCb7P32fdY3ZbrKBfkyN6nHs4dQxdnLfsCpBLs47Qktr",
  "key2": "3XThKPDMs2PDgX7uZX4Pu4JDdJ2hzh13FFWohofrd9W4idELnNdbkTf6ozk6BdArGa5hRwXxmT5QWt7fREbw2oDj",
  "key3": "5PX56kPPvNknGfcRwjS5u48JAT1tqnN98PWNdWrBaCzK4ow2hEbj5T1GSju4tKLCXKB7JMnZ6SAEkiozESspq2Fz",
  "key4": "2b3ZBkoK7PLRZMD7xPYh58iVBZePndVBCybmwwNusz4u63eZKtGQHsHmMxiMwQ17vdHP9qBicMB4KEDSUDRX9rV3",
  "key5": "3UhNXZoZsqv44YC1cTZfHGBL6LwapiHPCHQSu4pj37tbZpiHKqQcLUmgJGk2HQCTX8fv4EZx7Es85cnNdxXvgSFB",
  "key6": "VbzQuPs3FHkmc2T4TJHeYATwMU1ZokvmdewoHeM2ADXbbNVJjcEVuKkmPGXQJZgtr3dvwPAKmaSr24Ud94VDR5h",
  "key7": "3Q2ipE9nRNJBSRUTS2uKd8kchrtPgZdYusg2etWbHiDZdBNjHwy3xp1XSvCLsiCTM4df7r3zRJMkhJD1Hpz9SBrL",
  "key8": "7UVnxCcZ7Jdy9xbtKM2iMmkM319LiBKRKEg5RJNR33Kv2K7Mu6pxCzbAhpJZ7n8hz8PJifC7mRz5aa3CmnUiPPh",
  "key9": "furnZ5kFRbApuMBSkCFHHqMoAosPYnwexYytMkarJJPLk3bAw7tu89GCfbRH8Xn9Sk2sDAHRaMAn1Rj83fM43wN",
  "key10": "3Ncnc5UDCmNDgwtPpjpMqyxJAQy3mSEzTHD2eJ2Z46PvJqExMt9R1bcWDNRYobcBHsKRyFdCPNWvYAhyCtRssVi4",
  "key11": "25zhgfZF7MzGb9LgSQ7A1LswWoXJ4UfzJ3bhBZ5qWxUWPqvtXV19RiEBFCvBbhyqnvHyMQdtPmxBXTafYQ6TKiBr",
  "key12": "3ttPMnG28fyayWpFvPiptjovPEFyEdyBTrdrNhPLcwJcadUcdSD9DyYKnwJSN4jjWiiHiWspJR5rvpjWfzVWdybZ",
  "key13": "2RrgtnMZ1PbHY1xCzitpsEEG9rUvxBjn6eX3rrJJBpcQdTyV9qKJdauSBBSX5itFgCCojrXn9mKbH8ixW7SwAgN4",
  "key14": "4i6Kntfh47pzuKbFRf34kgHT57SA9NJExPn2qXDw7hdWnWtwyo5SU5vvTkVtugeu1XW3YeVkv39ogBXmMpFUk424",
  "key15": "3p79zUDN63pp8996Wex49LXTRX3bVT5SEA66Up6stpAyGgmYttVdaTZeD5VsCphtQN169UFma3X41KofpmBKMK2V",
  "key16": "2W2153i8Gtkj7QNHhiV4rhujTkQ1V51eSpYY4itF6t7AwJKuMALRAzRqsMpgFac3mpN4d8MusYeNtTbWSJUoaFfs",
  "key17": "3QTeYrskTBBgCupNSeZVQfhG8uvKMgkbpcBu3BmkAaQDEH1Bq8yCHUM6gu1zR6WjHaibjSL588pjHSbriiXoQWJL",
  "key18": "5z8vZEPyHv3ETsiimPYhySpRxtn6Qq2qHbHm3PUs5nx6Cm4qE6YbS2vrxgFm2TkkCxnhxPD3M5CDbA6DiJLS9iaH",
  "key19": "4SdASXpQNNAg9K5nT2HtD2xEf8MpXPt8fdZzjSrb5axQiio68DUKQ59hz2RB7oVDCbF75xSz9JmKpkcxepqfHLjY",
  "key20": "5QADh4RH878vUdYygQHAL4XcswijJMq5xmAQaFuS9DZyiPWKYs3rb8Mjt2g4dYUVJtjBexaWDESTDn2RJbYoTzxQ",
  "key21": "2Vy8JsoBo5xupZW9d9qe26K6ZyBPLgYws4aZ8SHfxwhN4trcx32rVJrMXGmFhMaL8X78YhZSu5Y7zbUEJTBwtuSf",
  "key22": "KY15ddHBmTkvQvv2sJe96XGaPpaeZnm6zgzPfRgA5Soed5NBZsXW7fwBAtFVufgS2uduTECQSRrqhksHE7sLHUC",
  "key23": "MeMYvbSnoG7PFTvNXLm74mrEbiJRterFbp3ywiLvKAUuFwjBoW5LErDHDfvhnmfN7i5e8gQZVzbc6jsM8a36diw",
  "key24": "wywEibEzMpvtWi6RtgurfF9zHeYhb7sDgYaG1pTJfYdt71JANYdmLs7nbtf4PduzWsp5TbNTGwQJN5QMdgvb9v7",
  "key25": "xv1jUEMy8hycRDFwGm3DqLDPmKZHbV6J7t2U1aBUqPMwJSKdFSNkDTvEwa974BgNj6bMZ8EL6qcq7Zn1Tp9nJPo",
  "key26": "2jJSa4YVfaUHmqn8sGM83o8zfJ9bLvtjd4ZEF2fBv8MRsQUdM4WiWMzi99y8iJPFixvKacrwyUWh9cmLabPrAHpQ",
  "key27": "21oRGSoVFHk8Ei4kpeghjNz72nxdVviWN9Yac3aJcqAXH5RtwTZzVau52BvdC6ZsLbvSdqPxJHiKn83qCBEL4u6T",
  "key28": "3CwcUnvuXKosjxUBdccT1yJUHfRgYWFqJt5FW3Zh2fPoiAyJX3asscd76jqeJLKm4ea2cSkMYxs8rVjDZuzZVE88"
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
