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
    "46UB2HnPs8CzXe7Uyp2icemfgmVY1SjYexcbsni6TS9sPduoUQryKEhxML3XRNUgWrALCnojzac8szidfGUq181u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nYx2reEkwya4LKeGtbkvKUvERbHwDtBPjH2YiN8nBvAfVKdabbdYd8w1AhF4Qnj2My7sBxLS5L7wahZZXU5jtxq",
  "key1": "3bvuvP3Gz5pz8PfJwA1cPVJD6NuP2TTUvNQAgajR1HCPoh8mcQXCyGgntV75nit5whj1E82RQ1pqj9kMAVz6pDMU",
  "key2": "HosGN3mjjbfm6t8BHrmmgMQQxtWFek1UzsgWaW5dw6bcqYD5f1CfTxiLS3XbHWY5veudyuvqZ56aGWAUJeF7FNM",
  "key3": "4AASeko8qUS4fYtVZuiGreTV9BGMtasZ1ojsLRLWh6LwJr8Hi9S5UTrpE68LHKpbQjv1TkXETu6zQ4UyvpnFjz7h",
  "key4": "4LdqZkoeugAUmHyttuLh9b7YMM778XXopQKRsbuoYMzUDxYwhwvNcQ9mzTVVSxhXr1sSjVTTs66xQ3aBXHXtRJ1d",
  "key5": "5BmCTYSL8qaU1vFYALD1vwqNgsQwSoaW4qsRYhmu9RP3iXDgScVHjPJaXyo2j7kjhk6hGX4aCdwyr4KkwXo6SYAV",
  "key6": "3hHHViMpgJcyi2W8595gy9HCggpRcmgNdbvXMNCycvtqUpbNJ6B43Cj4wqDNy6WaeSJxX3XCFY1ZBN5s21xYtpyB",
  "key7": "3sWqgSFxRqXZR4hLgKUmds9RkuQtJjSPE67CSXMieDLa1oZLnwzXxK3EKxqRaCJFcnUksGBWnUDEJZmEDqtaH6Mb",
  "key8": "coTjjDK2NqghVExE2bCQh57V2MaLp9W6FuSR5CdDZrNMacxdk8gFEmqzknpsG4gerhh9vRG6UFZM37T8y6zqtVF",
  "key9": "XtxBkD1ioj8Mwo2Pmfuz1k1R4tVk2MWhq4ss3XicKXXBbUcZ7ayJAmEkKw99EHhaKZKYemKjZUgzBa7sehxxF4f",
  "key10": "26jEQtFgTMusTxRXj7qYdPrny9faHQusrEtgB5cj8iziXgcax9LDvYU9SfLLB8GTYX5YBcQSuTKZTZxZ1W78iohT",
  "key11": "kngF6YYAmcZGtySCdm1QFCZtaDvLM4GzCTH7iShYh36FDe3FwPDdjWENKQhMaG2gjwsWFKxT3KPX9poFRULpU3z",
  "key12": "2kw9YJ2SrNod9bv7oiuayhyz954SmGQCoFrdEJU1DDqjRfi4i1hf9WDSWZaXcTdGWVK8L6Uub833qQuiPGHXw56c",
  "key13": "QENBypS3ys1o4FG6xHae8vEJ75AtXpk2uz1KEe2QyRVDptq8EA6gR5dAdtcrmyVzxnboYkishDNnKLcWWQqjR8w",
  "key14": "3bj3WqZ96z4MEsvHaWNbuuyC9DtFJZdBZ3HEVLZxEX6LTQm85KAtFWg8NNNMm95Ljn7Yj8h4Cnt1E4aH9xQT7Q7j",
  "key15": "3MdZWESyu4egHrkzcjREUNPjN9g2nGLjnw7jXVt6GWM3sawWk5RCt9a8asWUJnp4wTRRTpKAP9dKqFjo7NXxDaSb",
  "key16": "2Kof9eMMPAUK9dLFvYTBsjz7yM5NqhPk7e9vZtNBBnzsNnumU22zASfV4VAkUPYkMk4B3tePA2QaUH1555Y8zqq7",
  "key17": "3vSdqe9RQ6avByafZqME8SAFaw4nCcXdHZt4FhpzUAk2pam6ZkfaNaNWBM1QT9AQUDeBeHBMfx5w7gizWn9mpfAN",
  "key18": "5sPdMEGkgeHhC7i6KBvLGvsENy1spiHLyogfizhRda7xf4HqxaUAst3tHBodRrH4588nRkj5KE6WmicWhJwNfsyb",
  "key19": "2siLYZ5yPNrY4rVv6RJ2vExoeio6Z5esUa83SqBEYHKPTPzgvtLxP6gdnWDncDV4duGaVBBDzL4RCQwEa6EwCN2b",
  "key20": "4XMqu4QytpjVQcoUmGTFwUArowc9XT6Km3ivnoH3MxwDSEbVmQPWSH6eNACugLBG2ciU9uUVLKkC3TA8QassxssN",
  "key21": "4Hzknzzso3Wgni8mq9nDzuNkoycjPuns6T1ij9Ao4S7c8aHFrPhTAPawAZrEekkwZbNS8w2Yw7fKx8JrFPWf2mU1",
  "key22": "i8Mb8qpRgihHF5MVjt7eiSdMNzSJY6MfvgjxQQBb4jLWfVjo2UzTYiDCJjjtbAZcp9aTAZ7zU6LnsYr3dLgrase",
  "key23": "4bAU3ZFM5teUnLCCEjug4y2DC3P5MfK3eXsEmQH7LUL4CPdNWWh8cpHkcwFmooBsYayUWjHTQQD3ieSxdQSCbMm9",
  "key24": "4xhVCNjgi99Yg6r8966EmZWHQrexwhs9PaAfERJFZoWF67iiq93NRRyE28CGZx6v3LjZxgeuRKMzpyZnUz4c3uJc",
  "key25": "5EdLqPcaZuJbHxHdnTTgaVHqx8JHdadzRhBpYpCFb6VF1e66jiKaHLQijzBeR4UZVmbp2sjYFkGNqS1B2tjHK4TT",
  "key26": "37FrY1Yao7TzpvgWWmVcALG3iPHMSL21AfSvwCMPD35HX484Vp1cJBrbRBWf3Lbbk3rvTxKgYQ7sUGWpPBy8LLeM",
  "key27": "3kKiQ4S69XHXxPm8gABH4UghPXfzRbFUpB3gS5YACkWFvqFnvQ5BxGMhtWFwTjEimZ2CBo5AWXJhvGCUV1S8EUVP",
  "key28": "4dXCLc3jRZ6WLG5juHtHtVQQrQFNyM1bNf2RGLzKTMagRznBVz5j8sGp6TivwBM8TBMwRbubDsCC9kigktF15rZQ",
  "key29": "48JmGnwTqPaSHY7DsNYekduEw7BWYXVDnfwgJJUM3taaFhekAAeujEXH34vF81A6KApZBVkF7xRSzxkXkXTz4Z17",
  "key30": "46S3rLhhxtsRwRW7ZTMWbgcKE5pHF6cDKZ7mC3LBgYvSssjkaqtFtN866d2SfeBKMWs2BbM9UxRSEKHiYq7kEsmx",
  "key31": "2KY64YJLfifpj4zzSMjF42Wsk6xyXRpGLybSExmqBhV9AcKrGrbFxbJCdk5g8TKZTJVGM55DKdGqXVArHcgGHeZx",
  "key32": "4ShaRCx6NSFYFGJhBAJk2xq2pJTjGkSL9ALD7URPC36UDvEHPqzdoNgKrSM3Kgn55dae7cHQQ7zMCuShpWxkHrFM",
  "key33": "29zf4j8HFqLDGAzW2cZM5wJxd5nH3C4ZqePVM2Wz5NvWCU8yXEVVF8sH2XsxDZCj3VSzj6vtnJytKirEXXAkVr3P",
  "key34": "4pfrnke6wZ8wLtA5cnZrDkDjixHHkEev7CC2QgwemzizxbDU4nKAjwuojaSk8SXPK2ia8whsN2cUBt9B4uegRWNq",
  "key35": "3yFr2ae8hq7B1zzzdMSwTN53K9VUCsyeC5dzeSkpee4QYUoKowKgjBByrDL5NVPwjtThtW8hYH1FBrW1tZfwcM2T",
  "key36": "26skWGh9K4aoQp8hf2Pw1coRc42M5Hf7zu8n1NnasbrqjjNiY77jspgRf3EeYiSSRSuk5J986N9VAFCN3kvcKXUq"
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
