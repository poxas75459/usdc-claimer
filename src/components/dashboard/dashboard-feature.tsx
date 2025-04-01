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
    "46USdWcJVf8yXnnntMjx7sZ1UMDQc7SsFVn4HfRk77hZo6eUsEZ6E9XrbQdQd4ktHXQ9DnWh5BdCVZ3oNNenvzPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h5SmMhBi2SSXcLQYnNpE8hGfqapYoSiVb3edgDYH533nXnNKxxTcJN2oSHWHm9JGpdmAFKkeKbwHVjJM12oKDQB",
  "key1": "578sAiMN3ncp5i7veBunhHR2Suj2RHuCXZgqHjgpEQwqWW1oYfgU2H65VC1nMt5LzT33wEddqUghgrKWgd4dD5is",
  "key2": "5Jg2NXos3dEfbyZSu8x9dVmeuee3qbQdoXhvNudpwwHiZzGYcphxcLmC9WssL5LjwTSVfdRvDwz28iY151kMKTdH",
  "key3": "2ogryKs92r8YsUTzzT95XqNtQeSbuJuao3LwMyj5dJ49NZnxSJwW4XtbW75jhfNjcthAEQJXNfhBSXt15uuwLLyt",
  "key4": "2gDnC76EDjgTUNN34fiT8bCJjvZm6heDcWcQbBkTBsf7MLSmw97sGa44npLFffhM9roTxkimJ1NUH74mzMPkWAmy",
  "key5": "3r41RLd8GLqhXpqV253wrZhJZPwomASJ4vvaQZhSmd8VoXFTfqMRmDQoHwkGax1h3VZFj5EdiWPNovPAc5grUAAn",
  "key6": "5Ny2zuQM81bENecz2fTbuSEfM8BEfBaRaWMYkJH35in8VJR75sGnnHtK5JuKwM1oHj3WWzgf1Ds3bqPk7euFz57P",
  "key7": "449beMMZhwbXpjqNxJpUNCmhmE3RcY5y3xiW21WG2UrFMFK4Tv6ZxPsqviNNcNJ7KTUgp3SpHsVTHNniTKwcdUMP",
  "key8": "4Jnxz7PeAT49DRTs1LNnoLv7FWwan41PR8zRzEyJk43tNAqU2w5RjFgAPHsd3yawWPLnQsadkjHYibYMUEqydLb5",
  "key9": "L1myoxUAy2HNaSGwBLZ1U3B3pU9WdNWHoDXmAExStwrgTDxJkUgoyhQD88dXv9iCN5aD2Yv7ikzdJMGUQMEtxvm",
  "key10": "4aYbHXb7uqeMfA9xqDsUxDmATrxCi7v4EtLCHR2CWYeuDAJkaoNkgLpRESZNaUCt69SNFiYASoso9JRdEzX6wnfr",
  "key11": "3sdEv77bQ96DjtRDBbxFwYvHWoFauXQG4K5J4buCsrALC8WA1bag84ZdtZtA9cAFsBdmPkeraUo8LTugTceNVuAJ",
  "key12": "5Xm3PWLiZ1sEMcge4DAy38auBWkn6n9aAUCMEAnvSyGdh8uXMLbJifWfQxSnExEQRS3YSQAXvfWinwNYu8Ucjc2V",
  "key13": "4ghgRicLiHoE9TshcxwDbLZ6PvJm7ThaySGWwjUk26dKdw7iyLQneJnBVVcSBsfkZrYTJMuNXFbVUQhmR9Csm4va",
  "key14": "641xkhnbCuph3NcHX2Gpp9NgWRcaMG26J1vPrmkNQM4qTqrtakTg7VTkdThMf56YGAZ6gVD7zPekDDVB4QTfGFcP",
  "key15": "5LEdvZ7LzLFKZuVstQQ3fwttTU7RkEMTYUAEekPrGfZ4VFWD52gxKoJx9vNCd7xLLZfULLV9Cp2dijxEFVHEgzcf",
  "key16": "2TzjogSkmm2oKtYnjgpFJup56cRYSdm3EafDGwwGtQWXTC5n5JboHnyfoCa5M799VsiosEjEJCbSSgBqucb2FY7h",
  "key17": "4SFzq18HDtxZ9MXvqp1xXTCSdBSxcPodYBbUnBLY1UnxbA8guaezVFRYAaEp9Q9KZXJkHRbv2qsucvfd7zsLukjv",
  "key18": "5VjouPPkFbPogD5e7he1yRUNqVUNodapxiVtcEXoUBVcntWzG9Ri5Qq61ssRwT81Sf6jSFEWfNpymiifas2kkEfK",
  "key19": "23euEWr8RMBpUy5FkvcXSKtfuG8dhMedYGz8oKkNv5jt2aSv6r2ykGdztnDmWaJ9tsNyAthGHAxdthSGQUiBdfAr",
  "key20": "KPhBawdrjLgkiRyKksgFBfLNhwvBi5Gd2Z5Nty8RWRH3hTSB8zKh6K7E9EoHW3xi2rgM1QkSRMKNUBh2dG7jKwV",
  "key21": "3fVQBnzVQLMCRiWFCg3FpN8S8j1xUkyhLTSQYnuuSG3rkc9DGEYzssFZpAHZH87aFWATeD19yzskMnaJjz72edAD",
  "key22": "3qkTKamhjkcshHo36Qjxb4ty9ZARTB5eksjYSLnGnHUb4Fjv4GE8Byua9fEQLUeBxQQNnjovqY7VqPsEC5VDQt7Y",
  "key23": "5kha74mGQVxHkCnjCbU6gH8Rq1EMR424r6KdbrLgAe1LKuJyhkwHcseiKSZFuD2FLDebZtV2ywgdwZztrkDbB4Z7",
  "key24": "S1uUp4Kbgh8YUnTNvfqbzCweb2renpeofQ13hAn3DHNQaHxeaeNwLC8wJCf49tXnvpp5NfhDRckQjDs2dQCXRWZ",
  "key25": "2BSnfJY179ofWpuCPwJ44VaaLqwNod9tykR4BduzfGAVpiwpGrwhxg5PcxciB4TmSTbpJmYnRzDa4q3GUDajEVZ",
  "key26": "4rNVeXJzXzqyFAtH5Ld5aRiBmHwzQwgYadppW4yfSm9mvdBu6QCh2QQrpTTeghUL8KooCubuDZ3vuFsEHYNQUBq2",
  "key27": "3Q33uaJcNiTbKMKtV6Bd9L2sKudVEnNDrLJcgiQvc66nMAMwkMhF548KWGESJo14NxRdr3rBJcawcFjmuj3gortd",
  "key28": "5Yed2wTug8XVjsU2uWXjtUKPqMm9hx1rYjE3P4NHCGnQc4mpGrAF1NrpuJHG4g9Y9ARexG3XjepiFeihjPe5DZ1X",
  "key29": "JFhS6xkd2LZmFRP62gAAW9mjTR8fno8QRuZx16LEmnpHVYuZnogwefEjJ7g2wnn2hNuDdys4gggsTEjUrwkc858",
  "key30": "4Es35pKr1dvGQHFpd15kAtysqp1R2XatrzufE2r45zN7PwmpgEYc6484wwhBdcLPukPoZofZWACAw1vdLboZFyjG",
  "key31": "3msRjkFfBe5Zge3QGxRL8kNmrzafAzQbRNVNP1NC1nLsRUiGdEnjPocBmE4w5uh6H7QQsH9U1jALr8hgCDUjTxvE",
  "key32": "5BuozX8SNTVj9tyMveffo8D6MeWnvbCE5TZPTs4WcijzHKHe3ZVgqJiHwMtoCe8igp36zEajwVENznU16LmisYB6",
  "key33": "27rxiWfRKddAXPKyTcSP4GpB3rMiTBtpgXt8CxcsajzNopmbrfyB2bHwShB6QvNVLDhe8gEysGKPdhdToiCXtsGu",
  "key34": "gx8xy6TJNpERZCC82fjEFeZVKjjpPskB5natdnMRvsdMFqTuTQDYCgkMnhV8oLtnWu9hGvQtZwybPPuGBee4v8e",
  "key35": "5QsRkwUBAs9xD7bBgZCXBmUUbwAHUxtaY9KECJhMrKJHYkpPsHYexRreeBPNCm7vA9PfZ5ab1PZRQTetd2P3G9vA",
  "key36": "3vE4MKx5EBEXY2CuPwak7xDkrqK6skwB1VkGns6bUaE1PSZetBpbRW3aAEKYq3ydu9NMo85dvK1FE74tUGKxtYzP",
  "key37": "5MzEoBB59g9GcTd9m5GzMxywrWApXbEXi9YRqJyzaTqoYMR6wy78tkc2njTJbPgWmTtRfL55KQe4uXqKpfrt2D2z",
  "key38": "5r3j7zEwKCLcjPxSAEUWPgqczWnetqLZymGmQax7GjfpKsde1qWMtZkDfc4uDmBs89GiH2ma3DuB7roS9dhgBXmT"
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
