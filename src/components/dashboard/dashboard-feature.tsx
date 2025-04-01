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
    "3jn6Utrw81PxKChWAAEuyocDYkomFDqzFsXdnJ4Bm88UgpnR2Wok7igrvwY4rJQBor4sQfQyQbw5W2TyxeJfA8R6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jMSEdb6QVmNhx97MwEX2REjpjoe74kRo82yGZjucMzdzVcoqLw5W58kG6u2rwZN3mLKvuKMC6MUm6Pk9hCLg7nD",
  "key1": "54EgzvvuRQeQ24s98sUg7XS6X6jZpoN7XSb5E95mcyTyeWWtCNjxgWXe9HvmpBeyoZpVsDwRiULzRxNSDhDFqXt7",
  "key2": "2ukFes5gmkp6rgtt11k3v2cWiVmkjngVhopg74mE7u6nSgYNb8BbSPzKUmFwDwGtsaduV4SorAn8cmYY7UpmBZrQ",
  "key3": "5Qyk1CpAJHUgBwiMs63MGT2XWApNGGdWGgperJ8HE3cwbaUDzTb4j8kQ4mmA28HqBbroi7igGFVPv5rrrnL7e6ii",
  "key4": "4kP6chTqoWbYheqvSo2prd6AS8rXYWwj5Zh1aPNBd4ji9ZnPHpQFG4Z381RFzTYtEYN4h8ybHm44L5DpB747JAq1",
  "key5": "qZPy4sTiTopjyEwM64MWv1pCzNjo24orB6wUz8zeGNNf1E7srGqZkomtc9RaWLmUt5vVbcbffn3dNiUXHRDFV3b",
  "key6": "64qAUdv8xKqJixfbhfespSXA6LvDDcfrqMcbJaruqCJDdu2Qc3UxnLgiE6cusqd7oDAZmXusbSiGBMXGpW2D4hr5",
  "key7": "5q3nXKuhpvA3bECVYf3aZcWaT9tVcCAaeUzSxypKppwNTGGK1F36Cr2PsG5FmXiMZUsBh6J54kYkT6XcFCYd5Zt8",
  "key8": "3wmqcboUtB6JMLVq99yyfqCmBWxVRcp7zY4xHcqk4JDSRQwUeRN2V9KEKufP4YoZB765CmBRL7DMWoxC7PgXA39n",
  "key9": "2mvPkzDQ1bBbZhP6mr4wJGYcHwf2YRSLMbWzMjk3qQnkRKsfky38aGJUCgKdGXgn2FQmJHx9PNuaLQQL2L4x6yJj",
  "key10": "4MYQtp9v4DvLp2icTNPP6oC69HUZfghiJBukNYXjdYwMRT6VqsrD5DhBcvLBJ3snCYUD8X4REDyNJifdHopqj5E5",
  "key11": "2VtjijWPTFT7HyR2it7Vet45q2xgPQvDqZw1xyF91Npeyp2jmJpcqmWGbhEqEFLDDfS22QupY6HHKY9qGP2DYqwf",
  "key12": "2W96Poetc9cCvRhBoJ87J9LWEjvUFVBe33UHfJusKQszyLKwSCxbPndvxs63WiY9ia7UHFbeeg9oeMa9kKfywbzN",
  "key13": "tynTiqT39s4CoFB2jiT4fNvp2QA3KXrtdjiDeLssTGXUW46uYuQcxVzgcDmzvR8qS2qGyyKFDZwWFskgdNrs2qD",
  "key14": "UFcXZXbPTGmgUCvHTsXbH2BTw3ZTTzzeD758oXDs9GKvB9PJv4ZKLKAWCjEAkEdtjK8v7M5Uz53u9PpTwnhhZRx",
  "key15": "4vYeMn3VbLFy6jdyyWDwo7EHek4eut92zjCy23AbdoKJJJkBjWeKG1RANg2ZiQqk7pLAQzreCU2MFjG4P86V9cn2",
  "key16": "4L5mRDoYYAJJRVTQcfRk3jHsUhpTEQdHSyZK3AUFSDXdSxbcZVeYYPyuKDS2SYiGdJJETpLcvD5EchBWsybNdVcM",
  "key17": "53JDps3J3ieqbT55EP35XBwcFarMhURFJPQPZj3ZSQWtffYeg4LbASdysQsVB9FsLyA6zqkNR7rqzSHCbHQQeizs",
  "key18": "4v15YHY6Xo8xFsmEpxaxccdfRUeMijhYWjUkx4ocQ16mVtZUETaaMZrAGsBkNvcrkuMgoLkQr33PR8UPwUieSKzA",
  "key19": "5d7FCLcMUSLoXMHmjRoJfB1BjXfg9stXeJKzy37Sw4vDxgXHxWA8vzgH9aQKKMtXi9VKTDCdTUH3DvN6oHjZZQpe",
  "key20": "EVmDDRBSKyGgbLLMS7fivneJt8GJ5AosPsB4GZC8bGKBUAmsLkrzedz6RorVBSSKdPx8Vy1m1GTqrBLmZj4x5HH",
  "key21": "3if4NXAemcze53UgfDn5eJCkkKqQAepN1WDTU9krc3mtfskgq3HnjjbV5kJTaHQS1VfThyWiScGt1vnYoxgJthYi",
  "key22": "4uBQGPazzpr6KhTW8NtgtsvpPLYuDuoYgmJ9tXh7UidRPcHoyvvFXqsV1t4PiK7hScjnTJAFKLHCHE4ipouzBBjf",
  "key23": "6vxZwn3dg74N3HpoeB7pyK1gEAQTSUUehuqTJLYGo2thNkfYfHw8d349TuFCK1DvHHuJyt6Ln5mHmJ5QXy47nf1",
  "key24": "4Ju3tfqHjYoieebJtGj11EVpf2jHmqeRz87NaM8ZGPJp7ojvCZRdET5DiFXY1wgUYVBJFit2GvNvuzyg8ZResMW2",
  "key25": "3Xf1Sy9BfVtM32N7UNAtbY8wKrGH1tKmDpKsrfa81PVFgtRhhqRwJxeUEyd9cLp55cRHHLsPyyp7Y9cRKYZHAQBo",
  "key26": "4dCjPq5sU7a9t4E3mv9oxymNFPUReRVioZh4PB2RgmLZU6Bj43WAbP6HDXpeHibHmij1Avr6brS8mwDAvagFx8be",
  "key27": "5pi99kpnJsPuf1oGqd7JzHhYDdYJJZxffoWxuyb9sVeQcvCgfDvQjBf8tK62CQWSxWtYDhV7MxNqnFXmgrXjN1aw",
  "key28": "2Ls7cQLKKCyjega5AwS7PnSgNwuXM1LybjDXfntbaqsHq9zm1GfPkR6hB72wUncsZXMCoMezvfbxkvrRiJB1BsBX",
  "key29": "6q58NKtbFK3n8u5zGGHFdtqjuTfURJ9pSvDL1j6JTevizpnxWRC4xkkrEmWDdMbvDph7bKHkbJbrfLBhwP2CTJ5",
  "key30": "45Ycm13TscVYcsGknJxL1UWgP6tH3Lc95Rd2HYaZd6Lu68qMLyRdt1fH9aP8eZjzCKbXKm1PTSJVs1PnCf9bDrzQ",
  "key31": "4mV2XpvvTB8TrsfMmrFso2Q9nD71MLZsdxmLAK2YZt9w9A8xF37PbCmb9mGUcPShLBfth8v8GSxZj1z335LKp6Q3",
  "key32": "4eTSb91Ey42XbFu7zk3tkggedgGaTW9DK7vWr48at9qcvAm87efET3DhjvanuzEjrup57kpQQDrN7uYqh7or3NZ2",
  "key33": "32bFcjHyRSNz9cBdt6bW8K7ydLptihpyjNd57hSR3ZuKigUtEAFiaPgK5My8abCT2ZtpUZvFpKzpXsrD6HsXtqdc",
  "key34": "3hiCfmfzeBoPbATsKYJW4kwbZoPM1b4X5d8guCTFngJSn44pYCo9psyW4tkpcUpuRxH4NiUofsTYcMj1qbze9TDk",
  "key35": "4VKMbxFW9vZcwDJQjeV81rNfohZvveRGBU26o4QjHRNgFvQheNBS8kjZKAXPksMW8c5AXo8YLKEzy6eLfoBWfap8",
  "key36": "5qLHWSCqtVF418qkeLarxBpF7zhjQmnA6ev4orBoJYbpsT2THVy5sGyxD8LJwiZS374s7N3Qe3Scm1oMDBKgFe28",
  "key37": "5hwMS84QrxT2vSQZ1opMqyeDq3jaeeVYtVzASq59jzJHbsC3RnK7BiVQ9Eu3A2XxpLMKr6MEgcRUtL7DXEjQUJUS",
  "key38": "gPHNsTtnwGvjNSPq9b55YXzidmQutZSxv6Yaj86a4i9qbTgEmSXzwPHrLc6436wixevmsqJXDfc966fq2tqHYUg",
  "key39": "gpRpMTMHU2pNQFeKj6znobB7PtnU4aJs7Cf6LWbm1hTi8MAHF5ujsz7Q6j3iLyWo32T5rDEKDLczLZxD457CD9W",
  "key40": "3t7QB7jqLV855AmMTwQBtHDb1vYM2UxFfsv4Ao4GByyUCbP5Rku8kZbNJbzSbuMu54f14ZvuztJpVcpgMgmVJ3Hd",
  "key41": "4KEMxsSs2odHKRXoFhuqXn1t7DA1BpNMAnjFVWbZLzXwhdh6F2qA1V2zXfeQyHfJfKK5VqupaBns3EGWYsxFLaen",
  "key42": "2F6hk4gcLg8xQDzgnqx7pGnoKm2ygYZ4K2v3zDf6RgutGk2BmLrXGpw8pQHgTV98GSDkBYYMvTqczy9FaTkkpn8J",
  "key43": "2SWK42zFJDHAfbMpADriFnAdq12F6z4w3yMsKdcBTs6AkSCfLEe9N8sHfUpGCmUQwc73mR24eTJrVCrXF38c5UZd"
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
