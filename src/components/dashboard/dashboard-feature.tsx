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
    "xwaLaPaSZAtgv9wGvPbXdfpCcoyiAfavESGuKveB5sNmcWArPMJNgwKW8NGpyKx3XDL8p9i1Jt7iBJeuQbcLNhv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PYKMazFgWWDRjqVo385yntkz6HunDKcSnan3B6Ti9TqTai5izBtkfYnUuZR8WEQHrwfmcqKhgqS17Ekkv3MvNCb",
  "key1": "3UMCgjHVPzMGHXa4qfcELBuc97Bij9TexHtuVKrRi2QmGYxCMuW1X5mPjA6gjXYym9XmGjLkSSwWqH3CYofSwu9V",
  "key2": "2iPNTiFDotRARPzuoKGKQbpeGTevVMacCTb71t1dTm3yeAbfaFtse3ogNeJwXvb9XX6L8aTLjq7jey9476b6wQAR",
  "key3": "4m1wsQUApEGHQt5tAXLxYFFYx2dTv6exrXVWX8YTyM1ND3Bg9isUzWR7jxvSwvdYmp5vwG3NUAwJT38U2F1iSSzp",
  "key4": "51ZS3Mfb7m26frJdrzrPVayTn4vuGaHqnXdMDobHVMF9RMXig5Bxt5v8UqdDnnC3cAPfzhUum9Tv4bqyKAEkxioJ",
  "key5": "ZeCSz9H9BL5JKD9PULFGmnbMC8UXYi3rj2n8MVHBEbCJtqNn3se1sHpWjcw8xdpqfxoife9L6uswJVNEjgi1ZzA",
  "key6": "2KragtmmQMe2J7uEX1TnCcgPy8rCEQ2pUtj3YM8szCc5aP6vSWroSGzRSpyYZaD4Rgaz7K8PAScZrP7p78dCsphE",
  "key7": "2GHBQbGQa9VYn7ucqKzf4xdL3YF9qBMT56ZCrJeEu6B3LcpXLZX7kkUvp9ZhYpVcT8L24yTxApCMUwJSMK2mpfGk",
  "key8": "4ieYRHJYB74NWQJQ3WDpGzadRKAvtxteQexq1qaEjXhxVbrHwevjNzPpq6moSZRwa9b3e7jwHugwDBXZ9mDPHfzR",
  "key9": "2XjiPSsSUVYg6ssYTpNDxtomWu16wGjFycN2qee6PirXKKJcjAGdkunMK6EDXwFsB3aJNsrENFgHyFRJSCjrQwx4",
  "key10": "6ac8uhP1XjoxdHWQUThFM5tiP6yu2gWxi72jUX26ZioimReFwivXTADyXsLPb3vSccn7Th7ewasTb3s2C38bvNC",
  "key11": "5UAqZBpGpTdonRWmze676FRGS8W4De9cFcLDSzaF3tBjLXYBk1mC9hMiKRkCZRKtbAu9HdbsVumXsHQ3QJs6VkEr",
  "key12": "4uKL3ZMuYMRMNSbB7g6RZNQ9QpZJukturHKzaWLKe9pc3xiM7K7fpc1WRGCAqc92GMXgt7hYaQ7H4kxq4u74mEbv",
  "key13": "2vmzrdwgn1woPrKQH6xXs76xUvNiCSx6WrvPqEERfTmnv4YY8hwfLKZUNDBgNmKG3kvFbYSDce3tArQKcb4XL29n",
  "key14": "RTmPCCCiDDSTTJHbHthSVQZFUStUtJ64hJXPsV1wENyDsXEHG4jJ1rBtB5sVLodBdEZ73NntReMSmnMQMCvbebV",
  "key15": "4FwckkoVVDdvQ3aLQpCUAo5Q6KSwbAkds5D4zKtfFZh9446UF3qv2tjkZwKuraTurcgMAFpeZ3is3R8HD5ha1jLa",
  "key16": "2E3PSWPyYSNtKrujKsiwjrCxonFGhqTcuLSm8wWns1C7xwPA54mVnGvwEDLaSWtdZxz1eu8zSVduGxQZ7pf6pGnT",
  "key17": "31KcRjESqcgJ5AN1c5LPmsfKTG4o48xNpsLCcaDR9J9m9TexEsj37ig7Fmd1qJrJ3BU2AFs9YbBksSukZ5n461iE",
  "key18": "2cJz9HeqDrapTvH4MXG4tHnnxzkDYybcCmJJGaKgupTx7LvTTe9h81Bywuw9krGtjkTibNEXCVzH9xTVAj9t2irQ",
  "key19": "4LkewtUJeBScSK4XFEB3z8JvSKNQ2gk6RrmyVqc8ZUMhJsYx583ADVbr6KKo2ryqH1mRGSKkaeXo9tXDaDrRJMaS",
  "key20": "2jLz6AFhsiXpLRUWLbw8LKKknJhGmv8kE62gTW4aF5pQneSMuXK3D67ff5wG2ZaihgwTBeVmgXZFtzb8PtmCGSSu",
  "key21": "5sjDkQ3jLouwDCQRBcSoD3wcEvXyKWQptTCERvZ2aNbm1kcUe6sc5JH67Zshvs24fvtMSgTwCMbzxwCE2873xf3Z",
  "key22": "3CDNSxekV9eF6h4eV5quwMMpghvmZVievv9YKm1DMHdcdQzpVtc2UtAa7B3bYgtqM8e3ARQUXoevD78c6w3tCPqd",
  "key23": "5zAD9wMzDJG3czTJFA717nMGm1iNWMat5jhpoPwNfgzyzdUxUNar65t9S4rse7jgs4EftSfqbCSCCTK2FaBwUX3T",
  "key24": "LE7DMEA1FWrT4qDLNFAzKqeuRPr4foHnf9bt4NTtsj5yPcid8pKDisUJWQCEMNwYhKjzxyVUeGPNXUkBia9mwAA",
  "key25": "57XJ9WP7PR9HuTZYhqutqFt7c7ULSfmt7L7dTkSz2uUS3rRsCnpZCxeoCWR9TYjsUNVEJ82KXK4pRCuXQozi45Yd",
  "key26": "4eZAmyAKkLAU7SHyXWxkSFCfRZvoGg2ifWgfCxRcyxmHqcWWhQJLQwBhtJrVnTxNfoSHPPn46x9djHJsPZ7Htcke"
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
