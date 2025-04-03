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
    "5UDARcnDyBqZoxCUCR9B8PPvNk89Ho8PjfMPJWd6ZybDpaNpMWdQRn2itWy6M4WCbFPdTd2suEVLTzWczBoJQaVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45joXVQsRnomLboy6rciFPmo3E3L66xxyHcNmBYtHBQfCE8xdcYtT23mBSwb4WeTMH9eCTgkfWZaFLWftLrxKgs4",
  "key1": "2DT1Le4kEjpJWKhuAzuQVFBhg2ZM2wRDtPjSovN1U47fauZ2r93ovNt4xvL6QpKR857triUiqRFwrg3yCwEdEGFC",
  "key2": "5DPNxQ5cZEaCBXGkFdC51445UhA6j5Werr4Ec4Mhd8oPUgvW1PknWozCuea1b1PbYytkPAYwDWQHgQrbYRCfCrrd",
  "key3": "3GstdyFhQF1nXNKjasDnjsDSDZciY9kJZpsCFtBLK5NEghWw3N85g3fgVrG8Scs91thHbHm7SNXimrjKJhg5KEyb",
  "key4": "4GYKEGLJEQVMrzhEQrRVVn3gzPfoMgG8582Noixmu5TV3BPxQsSnjVRwxCdo6XbLtq1LMmmS4A3KGHPZidFDL3A",
  "key5": "3Zjxk31gvwUNUbbySmzExdhwoFdpT9phRX5Nc6CGktBqTLM5BCiYup4e8J3FxXsDVHpkiqVsQynrCYQd9Bwnzcpf",
  "key6": "3X5N6vyuov4XYZDY3qeHtkdYZkovi1SC3SsCBbYrFY5XZQnKoiPKBa9oXh2ZuVv3pvSPXbw1qp9aHuDTGXj4MqP5",
  "key7": "FpYinm4fkqAY3VM5hkXBtiz198mP62N4XF1GUBSKb1PYgyBiWFshNrnmgNVvXejCzwmoCSUxgaPuhVnq4kzLHvz",
  "key8": "2zMC1GEoeQ1dv5WW44Xi3wVjr5KLB4sJUUvKKEPmmafoQJ92JHP3fvLFCz6xcKioFnR3UGzNUjDNz6Bt6622ne2Y",
  "key9": "6744Ar28UUpaTc22WKV2XuxtG6mF99ZGcf8FmF8dufe3cjs8JRyeM6SEZhyPh2x9YjrytTEjuHXDX1eDL2cmxv4k",
  "key10": "3Nkw91aJ1xAB4UtHfidvDJ2eUK41vBddWTZUb9Pfk8pbGXTPyJvnXChDjBkSoehAM9T5mU9irBDyjq7CAgdnpHb3",
  "key11": "5J63StDrujcnzgAxUzSdvisy4Gw68KXCD9Xoj4yeLPP95CrETNZcZPpnasiJkx5u5ikMHMwbkv2PmoeKsncuUcqj",
  "key12": "2KtWC2cRDcqcyFFEzBH5CJkzubvWYnbLeKYWnD2BHQ9FtGRPAq26CEncKeuLuzucsr1Dzkvtto8wg7vGxP3hBBeW",
  "key13": "5nNuczc1Dx5tJKbW5p7f2Mm9r1zLSZ1EtzREXiyjgNCdpBbp6JzWHzfQZMvJFB8FA2QhVjDezjeeb2J2mbSf9Lm8",
  "key14": "yjwCTtVJ5wZNQVQ5zrXCxUF2YiNibr17DVoJ2qSA5n6J5iVzsZTea3P7sS2nStshSdLtH3qvM9nfeTcrBM3Rk4y",
  "key15": "2AgezvkyE6sfSbPXzP7Go2RcWuz5MiNj3mj5GsJje84MBfGHkSLnTHSYUjw75rmTfXQw22Biyrg81MtnpzjzC39p",
  "key16": "2NDEB79XazXDsvDbSkKJceBTGAintRT33fgxYdSYE6jBwvJCiBuitknGbB93EZQK39kSTz7PLECcoGGWHp4ubuuq",
  "key17": "5ZUoM1JY8c2ERzo3vuw78gFt6SRFRivryQsy6cVAa2DepSKs1UHvZKuGdAVA7V5LiviagpfT8Q1pj3UfkZVxA27a",
  "key18": "7YgnPVHa2jFFfMhxMo3WUvWHm1noTER1WWarTYDCVGAqVoCDsR1NfzDn2XQSGjsCoCnbenBKQtcCfizstKp8dTH",
  "key19": "45RAbYiwXoDkFtnDZWCSw474RnpEouMnf6Ae79GpfzoNRarFWnsKLmGzc5XUuXNUuz39baUAzw2uZRfwM68EyEv7",
  "key20": "21xdrVhC8w2ASAR4tWdvp1cm6BNXbY8K5iJTEgsq5aoySeTTv5tUshZbFUA2nvQshR1LW9kNWN8T1pzei78V3S8m",
  "key21": "2Su74NSHo7BsqBGeqa1dN2KxSiVYX5XjPNfPvMMX5KhWWhkzSoxfgS41xz2AMyi1crUJ5b9prdT4zcmrcsfKetvn",
  "key22": "5MKYGYQTaSkJJ6kz383WvgfMiQj4YqdQVGr5zoSJSExNxAFtk8mWsoAAWkz5EdA51oEcBpcyvDs3JpG42TuKCtHY",
  "key23": "4gbmdi1ftMTxqecU8gqgnfR7oZCMCw6ctcZ3Lmz9e8GBjUEzDVyprReshqJvD8QUGjocVt1uiq5KneLGso7daqNW",
  "key24": "2kye2P2FbQy7TytT2zhG7uXvbc21yjZim6PXwDS4JyYc9MXXU9fBitsuCUiSdqjDMVzFybdBDw6W37nXnBn95gt8",
  "key25": "49kTCCuvh73GCK5GcZKJGY7TbQmMFrS5Z53PvAB4JBJW716zQfcEayk1JoGgyNYZd6jviTD4cgZkuXesU1jjnYnm",
  "key26": "4Vng4dnk5CHtSVb6HnsXQJeGgwixjqnD4oGS9FeZA66irE2CYGjNcY5i1MWTYEH9oTRDuYEJLAvHLzxFVfyJvTB5",
  "key27": "2cMNjnhi6NtQUDfKfr3xRDhh1kigyGLNGAQhXhkzUe2RTvXGPGnkpdniMs6p48CuKrT7uCPXNhoRGiddYSZFG9Wm",
  "key28": "223qTWzM5g8jeKWVQdeh21a1usQ9R8hRABga9z3QjNbCXz2cvsRdLw4zADHks7kXAV5JXd1AVb7FKvv7xG7yfrBb",
  "key29": "3Y5iryMTmevwQQSTNgzTPGhis13XdUn3CX4kiXnSk2Ru71qRQkg4iB9MetFVP3y61Vx9v29nbLFgSVUhmSoquq3q",
  "key30": "4mH7pgidD1VmjKVdjbKdBaXv3xHZ993CSwzFYrmjwDNaLV1efXZqNZw6mQXu2AYZJUAUn4RhRMKExGjLPDpCZjX5",
  "key31": "2Cmmj34BFxwgD9KFmjF1YdyxWQk6m9PKWJAgrYzHDCAsPc8gu2iA4JSSRq3jYM1oyveY2SEnUSeqixXWynZSKmdw",
  "key32": "5AnJGyDoYYxZjnfjwqYxEbt4NUb9kenWGRAAcEEMEet4Pn8fFmaum8sDxosQqj4RdKHCBPKGjZkJZnmscw9ZQqfL",
  "key33": "57VJT2M1PSxr9UmTtYkjeuAA3QLYiinwJgyi8AmSGSpG8NSZjrgmmiriY8EbGjh1CXbZGzcog3eVvDJg585LrwQg",
  "key34": "3h33b5miQubkBrRGBS5UfGyVekrwgyn9fvXJEFfAXt6XPab3kBKW2AwQDyD2XWoXyunEQDtJPZvSh9Fvyx4nGAd2",
  "key35": "65hR1TmAjMGp2FWmrMwh1Wnz1sojgduvtBndUwWUMotdwSJtPgZ2yPAHT6kQgcFFfFr18Qm1S4ETHkCLoVCWswyD",
  "key36": "3CuBVmfRxiWntBNV4f3qawXqi6xt6LoF9JUZWoLNWyf2iSM8p6DRMaDQEPzzbhrgVuehyq97aWVwGSqfddLr5WHs",
  "key37": "4zkRhYV5ZMwrWVyLxr9AwD4ikvTW4sdhPeD8P6SQukkdhuKxBqMSK7r2WqSPbVDUSf8355FYP1MhUpL7QvZY6yWW",
  "key38": "4L23Mq1tWNSPmWiWHW76b34FbqzRYLL2U8AqKdjHDeEDL1DU9fYni2dndii6J5NRkAmCZPtJpmQcwLqyDAfTTiEM"
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
