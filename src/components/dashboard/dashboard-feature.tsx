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
    "cKcbQww8nhZPgD9StnG8D8KjPzdJS9qtVwAq7MCGDWjrsfxdDjd4aLfZa9NjZPDwkA47xSUmb5JyqQ2kNW3AZ8j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M1T3Re1CukUDjyMoE3DRDZBTtAtA8JUzksg62cfWAMteGErDNVdG3TepNUUu1jfuC5Lvb1aJkvyqiqp3KJDsNzi",
  "key1": "2q7oiUZ74yFZcQm7krNf9QpSny3K9rrMYJqKLuE34d3sMBjAfzSTr9w1W62phx5JZmP6ez3NoyP69tnQRG8LZpbE",
  "key2": "26KMeQwmz7rMbovym9KsQjVBMWjFw95Jhyc3CAtSFjguaWpZEWBG8ewFcahnEJCjVwFXmGk86cyoCUFVQGRcLxMq",
  "key3": "YhYkNq5Sfq8MyEGm7qjsjxXGcP6EyU3k5CSHR4BP4KNX1H8WZEL1NkvvxCzhzA8o5KWF82cTgezZDHozjhgkDD4",
  "key4": "2C32ym1vh8gAzFtBt5gh1vaCuFVE8Lg1GZtKrjQfevcDaWG44wmgDatTiZo35tR1Yizr7U1cqrNndp8XoVhqsfU4",
  "key5": "536AMSpTHs5xgrom2jWPfz7BPzaLGjWuPTpKL9MJ5hbYo2x1NyiSkwChjSFso6aFh7qu37Ut9jqBn4AGwnCMFPAj",
  "key6": "4vyFBpXsZm1o4LKhmAbj4eUiNiUPMALKUNJcAWhdznGEDY5Z8k5sT7gYKxoQaPvBuDSFnd3dhRcgnuf6KXSz8h5w",
  "key7": "5ptjNkHRhnjMPWF5DAi675LCWBejiYYSAxxi3R4uBqA1jdW7UuzW5vnmKBPVHFpFWC5hRz4uw8gR1nfK8wiggAiy",
  "key8": "F7RGtYz3432ZgLzUUTe25nGM8eWtJj9MCsBpQre6XucvAkcTJXLNy5Sxk8uG7eiuCqW5ka1SNNL6sHVf4ir6tze",
  "key9": "5NLJuETqdFtXTNoMCvbZxdH9zV7p4wJHmYkMa3vyiPWyWLBdCGKhZxKpD6VKkqskXVmSWaXHHDGAdevjL69A8GLs",
  "key10": "5uZmzcLgT7KtwnMUnq1KKaJF8Zz7nwwN29hrn4AUJCkYa6cEMi6eUbVMjndGtodsQuq7572LPKf7UHCA9x7Lh59w",
  "key11": "4YBTBABjkLTWva1sdnG1hpVZhJPaPRiANUzAKSttCeJt24uexkYdDRm3WGpiX1vXFXcn2GyHeyEarzhMT9gYPegj",
  "key12": "2S96NmsFvHxSZSCgmsABRsStqdaCx4BQHxZMPNwYk1JwqRsamX5dVf6D6tyx5gcX8631xQH7aiYje3JMpMGDGR1d",
  "key13": "3iRkozwBPLfFREMWkpd3aHtUu8Ga6UTQZ6YhioXFs8RWHCS3jGNCkkNcWXmtNxGTyxK31mEQmbLVPa46htfhQKm9",
  "key14": "24raHLrZhR99RY33eojCMdoZeuwLuLBeTZbduTcCEdABQM6xFgQ45fXRqy8u4UsWUHBo22o7w9vyBa37LPuxVLYJ",
  "key15": "3pWS47ZYzrqc5aFfxm29T9wSj8rxZbLBRtSb6iAUCFTpeKcB8BsykVRy82A1KkugHXb9rBXMTymbRc3bnDMbko5U",
  "key16": "5xGqawng1cZ9HMDCfJACevWWYYUW45rLX4qAo3nb56omVb5W6mA4RhVz9Cmk3cw1acFsbPdaVsFmWaioYvt8oWr",
  "key17": "2vtdgBzAaGHt4N9zvMmAeZTWFiq98ZMvyJvDTPBGgVyhZbBbvpmwstJCKbSdv6uZ3pcPTAsJ7VeZC6c5hHeyYmkW",
  "key18": "4sTxyaBviX5Pj3sJY2H65LeEMeMkumP5b6C2LzYxKfH1pzFtFkbSS2bKpnr9v7w2AwQrhBDvk6ueuuog5AwRZGb",
  "key19": "46dQLgvt7ZytXkAz4UmT36NuTo9Jvbf7Jd12zFRqU4jsppAnZdEPgu8pxmdAK9vqqjQWvBUAbaem2JP43cPzmCwn",
  "key20": "e1TeyPgJoBRQrj2Xfj3eCqsHXbN6wkjUUxpWbi7tZLeC6yZoPFiMZaH376YoKbVauSoiArFjgdw9CG91WxAxRnE",
  "key21": "3Gxhy3eLEX8dB98n51NekV86EkScNm4MXgDgy6qHVJwfmB3TxmcX99AgEXBANZrTqBgDxEdoSx12ry7PQ7rVhB34",
  "key22": "4YNTVoa7RtMeEUpzgd8Vvv2X22sXnf4rhBQjgKbi7PgfwMP1o21tBHBdphtTWFdPDfG39TEWwFW9rGktHZmHwWdv",
  "key23": "64ZVvVunQhUFqgHrYhYKFWMzMEeGBqN2QWMGuvXDhzXVALCEhEmNYzE54r9tQiWVLLfwgCKsw2Pqx5Pep9UiyFdS",
  "key24": "2ZiKQahGXJWegVTkVphUANEbTDq7eY6t9xjgLLP8mCGhubTp1hRVS6TNvqVzCZwzB4s9zaAwDXQzPdds56sBdtRN",
  "key25": "V4UB7PN8sVpyhvt6sCWvkHivAeJjQe6oDrZ2XiUTepJT8dtDufGM9yNXQywGnGrRFnGPNJ3NMP36CAJENMbVrhe",
  "key26": "YhQxo3Bhbm5H2aWQPQjicFH7kkrzvboq9JbSp5G8TmMb5SaTgPk2QrpBKCBBqp9Sn8TrCdHwvj4MjVBUDWMusYM",
  "key27": "2nStGZVvFQeJCtGpskdjRoyoJct2D1gL5cDSAvGMCQ9Ag8PoAe8c5BurcjKaKDmN7wpiYZ1GQ9w56o1xN526tcHw",
  "key28": "5b4wqQDbASVV6gp7drcScY58zVHdSp8DJkcvqBXv5ftD8AFSdWFTJxMnMMqxNsAUpYuEbU5RLLQXwQxoquCuNhhd",
  "key29": "M3yUyrvX51wr8KRHYTNfxHQvGsnnssmgm2GhG4nSWHZC3vrxpQBoYacoa9RADbrGkGgCksE9fekUCcvwsgjUGsW",
  "key30": "YpfVjT7fLuXQzKGnJ5mbkNDjm4UpMgF19GAT55FzXgnYaFjS4kTcjFe6XqMV1mFBgnnvQ38uUK6A5JZyQScYCh8",
  "key31": "4SxFCUe9JgAD1xVBzTdUWNkHA6ciZGzS419sgKLMUT61wHGLDrX8UwXXisMTkWGGbNcFAE1TLC3NjsbWwdAxpR2V",
  "key32": "5HBeajKswz9WJS9hiBEU95Y3gtnJHV82LryYdVXomce3nXJGuDLSiMUmrrzKJbU3odyfixRAoJzZyGSEeSBMP2aA",
  "key33": "5LJZBaaLU4TRaroiPWssswaTTs5JjKM8DxUHsew1ELxuEV1wmWPQA2R6DcmdJ1Kq35owYPkdf5iMwX6zkzhy9Ysw"
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
