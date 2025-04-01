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
    "3wZte4iiNwwEgJG6Xy8vc92w6MwrfFL1pUqbhadAszcJddJcFXrhmKVpj416c4u4UZJonESk9J1xDB7FtXxyveFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YCVjBULwgyrnPi4vAXakicWGxJkee1HfKfhNbLFu536WaDn8CCFqFAjGADNm9QrJQW2cWAdaX17C7FvqmbknVCf",
  "key1": "4QJ7CeUbPxfBKkZ728KoEHH4j18Bk7PMA45434Cpp73ZzLAKRfWFBoJhF3KThsR296eKicix5R7W2idvaK3YspHB",
  "key2": "5ZRjpC6Xwnqh43utNkyDVF373h4Mn7gvyQrzdW1a3Pg32b53LGGiCLbSayrY9dWwwgJkmynvMJc1gjDfskAw1NjQ",
  "key3": "5N3FybfyTq7DD23Ui379bL41eSSH7Yu7YgSq5DazrnsMh6EEtJRSSt7natVy5ooyyvLMbWynoBiWPGyZxHX8FU7n",
  "key4": "qqqRMJSxpLaA2mWksmMYvuWwwmPGov8hs6skegRQt3KXpsVsEcCk6E5ZN2GJxyNt5WzwJVfGbVLjjwAQ4wuG6HM",
  "key5": "44nZRNTfvNbSVeL4XBaSuZpQ1gGJ6bXJfWb4iSmkBPKC2uYZWGVPgikZzhG474bic4gpCW8GV5e7NkYSatU3Ar1F",
  "key6": "5GsvSdDd9jHCN2tXtVfvioS8WcMcS5KufUiUSVwLUZVSLhNQWxfjuXiqfv4GGtiGKimFPhzAA5JgbtVRUUEirNgT",
  "key7": "5KoEnX9aNoAAwYrDUVqdNK1eWnG9DRdt8kCrm8afZvYgMB7PymPJazHvsjUczStNrGdobWhZ4eSLkpy2K6zm6gvy",
  "key8": "nje6KkoCLD7Xd7YKk7mb9pFvveBSQKXFgTf2Z7umYxiECewHu3Vgv6L3TRAAxCmA4NtomdhvafkizmQY4898tg4",
  "key9": "2HDSMFWUt8Raw5fn76XRC2ZDxNVSZfYGWZuPLrrXCHscLcVu1UiFiir5UdWTBEi3bnwRwaU37wx7q7hLQ6rZtfrv",
  "key10": "5uYa3SVujjaY8EoY12NZGg7xk7mMGuRczcTPjeZSRSPBZnkbbLQps2pnxhjuMgPvijvpqpSMnwtc184TSywPoyVx",
  "key11": "pNvkba5u3zSyQzveAhVoEMD5a8wBamUtnKyQsXexm2UsjFcNATNGU31gQFZQbBUN4a6jxSfkjWQr5HEA8uTx8Ye",
  "key12": "5CTrVdoZw1d9LMQHnVvaCv7Jbs2vKF6w1NXZTx2VbeCBPNGK69eJGqyyrhBj41tjPvuGpFc12ETCUT4HZgKAcq9R",
  "key13": "2oN11Wm5gDA1uCeUEuiuc1yoysKMub8tUb6TRNSLLD585X2nozKT5B5Ru9iYCPVxTNghtgJQPghC2AMNixHPVk5F",
  "key14": "35W4t4jUSackoU6dFaNbA7rUmMmZyPkRicPWXzaXbRBCPshA1TJKn6xXtWADtC3YVGhprSUjcvYiSQAoQpLmDR1B",
  "key15": "359TkMACHNYFHDAFLwst2WaPc2RH1dr27CTw4pNRvs6DccXJRhxabKiNc5vRfDBbTMRVsjPxkzgEw16U8c7Qws8d",
  "key16": "4eEsAyJ5PFWpPZpb3t6Fd1dqC6HkGd8ig2qoACAr2ZyAJds3HrkjG9vMwsYyNNXoEt7vsBMpTGydGktKdpheUsBo",
  "key17": "3qcvVxVqddqdQmwFSfdQwwgZNstNEZejGWGi1M9KGmvKifdPcgJTorLbkjqADyNbWSjKkXN1a35RbeTu48cNKsVs",
  "key18": "5XviQK5mC37NiXjeMiyfP9gg6MgXBvVHLWBNsGjgGFmm2VKVTJLng7t2HXNJhmRM5Z4DLbZ5qL6Xsy46jG8hApR3",
  "key19": "2XWh9voMGD2ZRCxShE4HJpKXfZBdezGVnxbpHvve5XWNar9HRBkM6encwHtSRN2g4muUjLSpdND9ELeEkqHQY824",
  "key20": "4NGCXQCNvtfHjPpjqenak3tCXwoixfYa1K6iMv9TB3qeV9NkBgC84vnSmXu5sEWwcziLFqQHbhtp5zJnWaogPEiL",
  "key21": "2EPXzPGFxHPhqwi5udnv3pdLuWQ8rKkEqQsthvtzygXh3r962fQMBPofP21FAgN3LaS5rs65APYkDHXipJUNEAPo",
  "key22": "3NDxpNMUVbQxYYjd6GcwmyHFV5uwRAUi7GvrnqCwiF2TfTGyqkZa2nwFwXdydyooGgrdCotJmijv1SPaJee9ij2f",
  "key23": "TF1x31KdEYdcXt7GJEaztZBB297F6Us9fhfg6vBwaNqVzjZbejF95aEppsWfuboJPV9tmyKRZHTeLdGNsEisJ5A",
  "key24": "VVunA6K1e6zgJifpkD62n3QnJ3LUm2ZLDko82zA61foLXYM5hTdKwDFk2395GFv78G7ni4DTHhuWzMV9RGKwmpY",
  "key25": "3zp8AHLcFB4BGcTEFP85VSmTezWmE7WcPjZaMKG8WAJCShiLExbzw5QNokWXUBBfzG6CSuQLsQcAKehWtKFuM5Gb",
  "key26": "63Azd1gtYbtPsQKbUjjksQHHUfYmiDTaCJVaTp1mvhtPaNsmctqWL2nBpXuoVFnH55288KWB8HUbvRytLsnxSBcA",
  "key27": "4jVsYHmAgLZYd6W65g12fVkeUg85kWazWVm4P1hSRDP4y44pg8NpmqBmWc6y6EEw4pbh7tyYoYhsDTRAyc6fgbMK",
  "key28": "wXvUz3BVDHh2CUfEbioBxswAWgQH6PfcxSouHvo94jJpDdCHVwinMYdckxKrSaWxHHVezKviRt3GeR1yDixSgzn",
  "key29": "2fmVnFuUT1bcHRwekfCoiehm1wupAHynj3X6tfUTRCbrmQpY3zoea1rKhTQzLbE5u9ioAArzmz4EJBYorF2NkmVK",
  "key30": "3JYsnNkgnqu7u5j1QFMGef3Ppidi4S4XtoiF2NiAzcJsyVzHY2ks6BySi3LJ9qrTiXzoUUkSyi1rm7r4WMHBepra",
  "key31": "24bm2oyFJKHAMuV8eNtbD8mYPzSXvH9xKnQ4LbdXoFFrvrhspPocWYpdDfZPkuuNPXxLWknd2QNoKjY2dVxh8cnj",
  "key32": "46tUDNU6rvTNhM4j85Bzt55WF5kehYLxf9sTuWsuYDhQZ1PmSSB9LqZ43ZRHLwW9DTEt4tJyHWSbqaUsbGWk459t",
  "key33": "3ymLugBu38oGWxwovkDSw5EvPTi67y3MaKoxZGUcZfMLGo9BfEzEoMc9Br2RQrSYxGtm2ktkn5ZcHEPVVVtp3SxZ",
  "key34": "3A14zsLNKtfYFxamg5uABN9kA9sfFz8Rbped3KCZunsCbSSLQUWbeWUoSUAMRaSjNTnYKSFxBzqamxVnTBLebgmb",
  "key35": "4hzEbwqTcJYuDqGJGENAs8p1naXvGtZ1ebykTzLWRcNF5egJx3juqdNFqhP5vG11JaxxBM2kKkUyTS1MRXsMheMb",
  "key36": "3GjCF3UQQtvrf6ATW5uSH4TxbHzWbiU33mgFjrLeNzdmiGHYsU3RsdbzXYxRZk7atekaZCS4Qev7Pg3BbnAkesPv",
  "key37": "55V4ABGuHWLiPVtoB6Tf68UTYBr9tntcmdWEKVJUGP1djsz42XyR8d5qUnDdjHHnkJWsYj1kKbKFReHNABjBPvxw",
  "key38": "2LsnQxxHF9ADzWDz45Hv67fu2KZqvCyXpcWW43efwreJC6G3j1FyNudPda7HdWQD5iE2S6P52EpF6gKPxDbJRSLN",
  "key39": "58Kr7BUYaoVY7GbohU4hNagdc5mkYH17YsSxVEuZdmtFmK7RBR1TwfyLDPw8wpUd8afSRM715yvAGyGuVR44gyTi",
  "key40": "5FTpDJVX7BR6WnSkUoQK5PeB32EuDKkqsYJbbAsM8j6zRP8vmJ6aWVUMqgxoTetHKyhLdTFtB7CoPwekkmwgRejp",
  "key41": "3QTBAWabY5cJJKtW8eCmiiSoorWbZg9mSLFU7tvrGBoBZzUfKvMymAjY3H4gMe4Awu22pmLgQRV63fEbVpdTgGjD",
  "key42": "7NsTFA5jaE38j88xhg4M8vMdwdgRZ6Lq6mWbA1sm4pxrnZhn7DXHoXg4PbQrs51sWCVtc4vfxp76fAhaf5PpM8v",
  "key43": "58Sq58BuQVxzCJ39SZWxhCxNtAcCJQBytwr3SRhgPxNCt6fFGf9TVYkT9ui2GqH1UnBVxXLPdgKn3uqNrmywb3zx",
  "key44": "5a192s7tRKigWsoB9U5CCKEcMRd11sGSBH8ctaxtUR5rCVVyX5hGnwGXds4YxfsQWaJgAp3Vgx2amLGhY7Pg6oES",
  "key45": "VPnCeXjw8eBMEKWvMfLCpwvSvpFJiKVUfAxP4xWqKYpfnEBbRUqhyWnshj28oNKJbeCB3Mac83aTKkp8vGgyYD4",
  "key46": "hgeDz1p8pPhnyfbnFJbRBMLSn3awwCZ3vBYMxCa6fmyC7oZB7wWDEHgjEk7GSiP4wyBgjMERayFYJ2knHnUt2Np",
  "key47": "2qNC6mNgX4pXLh2Z47icjGiEZnv8mnq97YMwh7fJUdPEimGHkV5KWTP7owiKRLPo8NXmYdRsa3cowqa4U7ErU8Ax",
  "key48": "3hybXD4AYaEPpKhbNb6i9XXdZEdiSFQLfdt7yPu2VAhHrssna5FritPXPZx4QdLZqEbvZUsZmzPo5daR9JB8PUyP",
  "key49": "3wQDf8LMxswdDyBDaBfP5YsccpZa1ExSwiJkLnrrtKG653GkiE28DMwW7EYJ13TJLLZ6ao2FQeUhGdRukdPQEnti"
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
