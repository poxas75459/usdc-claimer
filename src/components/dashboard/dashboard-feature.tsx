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
    "kEUt3uwxjeadMRDFgegScmj2MwfmBBMryDHk9uqutHrn87dB7fQDeoY4B7pQ9PXJKPNN1cgx6GZrkLunBTCybdv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QjTjT1FV2szihScq9G5tXu1UJYM61kdUcF375ZTfuTUFatb81iCYkrvS41bRjPnnPRnaDGLxHgubw66Q2x2PUUT",
  "key1": "53WkE4mqcBdEuGiWAmp6NRLpqJz6uYT1GmdYbAn2kpQNkBT85D6ChZfiLxt8KvRUx4e53MS7R7t45Y1iDvhHdaEP",
  "key2": "3zeD2kvYo9Nf2kqRHV8V6j8WPAqiM46fF8oBkENnqztRbnCuJVUYU3tNsBnM2QChdPtsYEAN1YJghopcKGtALzpd",
  "key3": "2ynCsEPXDRgZjTXnkzbRAmsCL8XEpyQn2Ro7o2mm1GAHrZtqUaj3Rv46HZC7KarKne8dMdoqZ4dMbQKaE3YnEYq3",
  "key4": "4hoWGRhTYiWgiqC9YwHU8sX5DVp61i3QytLGWqdvPnmtUWDTg1TgdGNs3ag3J8F2zDs6KVFXPkyMNZ9yM2wTg8X1",
  "key5": "361QwSHyzritDJxwie6f6on3a3cc4yjKqqrFjY56vPoWAeebu4aUkVw3rG9t7wBfF1fQeGRYewB4zoMBaXXmrFuq",
  "key6": "3Lggyby7VbhxGN4CTj9RYLvyiDiNYCgZiTdKxNCVTbFpTztn4AEGVUFHDGC4TfDsp77GZpQMtuQHuC7GTkc7N4rw",
  "key7": "azAeEzTYYYJCNVf82MGcjgSNQJLtxkNnajLob1Ty2ebFLGDNMzNhtSWpYzPJE32mn7LZXT2QVg5sSKuBJiq2XEu",
  "key8": "4W2JsAv7CVMpB8XcLA8QDff7nAsaHsRTKL9XK5dRHawvg4jgQTMH8bF2rhgB4vUgGbDu1z8MPJgeHXYYCsi9xext",
  "key9": "589nwrg66zz3NPpzuFwwFDD9o4ZLFfm6FpBMmpkRAMm47qDyGWyZoU8mFd5uGfK7HXPcRxMvPUqDwBqh4T3Nkmk",
  "key10": "4MomNasVYi3kHkRikiVgsZMEgTXvAdtCUs1XksurDptp3Yw31kK7vCe6Svqm5GjPHW3QjCzB4Zqyf9rBLMfL66Yg",
  "key11": "5hodwTtT2KkcmX3yAnYcMjMtf4gtju8Y816q1aNnkUGohBjxuErWifer7N1ATCDe8yZucu6phGuMiUpVPieayfTR",
  "key12": "2N5EpjLkULrD134gyQgxiVJtoNXHEu1sEUyhZX9ygY4x3fE2ngwyFaTge6yZn87xgo54ZChKPpPLLv8WyurcqXTT",
  "key13": "4VPpafpeCTgQeBwhiSvUJCXgPJ7dZyWuzVTVc1H9vmbDY9vyKXSKA6PvcZ3qyMKHngs3KDtRmythfjNwkgvvz6KZ",
  "key14": "4tbUvGHtv72jF1N9yuyfjdzz9qdVt5Ev2RNYXmqjEMDzr7CL6kZhawaZnHxfJhxWfFxnUo3WXzDEFnaXBx36LJS9",
  "key15": "278WGuan47zjav5FpJeWTMQvEG1KpFRynaCs5w8k4P4gnR1z1ziFKkLjgSsMcHP2CBMkUiwKEW7cMKzn1zgAJQLg",
  "key16": "3SoBAChwcxX6FT7d75eAHiY8MNpZTJ7AorPp4172WNiBzTmz89kdNTGmhVHKzb2rBgrn2Cmzpg4714NRRog3nkHq",
  "key17": "3NA7McAjmxwxU8f6jAP5RdDmZRE84yFwvWTSWYcjN9jEPSM8Dq4ReYjQRbRGvKopUekxba1VcRZiq9poWLSUSUQH",
  "key18": "2Xv2rcXpZWib4ikL2XzCRs4GSbWWt7YbGvgkepxFEBMu6XkVny9Vz3GDQdgLpbL545B2GN73VAjqaeSR96AmiU6s",
  "key19": "2brJkv8rkHuUpdwp7Dr7WsFWrz7MnUMPWQkQ7cn9Xib8HjgLxTrWjJEnsWcdx6cyC3BaS9Q7sYgBcCNtHBn6RNSw",
  "key20": "4fTngLa8c3JXXKCgQbLHtRTWcaWCzEpynewFgDbwPGoMQGtrDxYnVtLgDip6dSscExTWGZtghi9y7fhiVcuiEDZ5",
  "key21": "oSLs9L6wZsM1omP1e54pXrEZNyhkMf5iYz7Bq8i5Lzi6kqesJmgHCCj57FBwmARXBRdfw6RQPywMiPZsnqj8vvB",
  "key22": "39NpeApzzWrwDWB3MTyNY7RJqJySj89qdonud6GqxuRcCxtMrHEL3vPH9dRxQnfBEDvoLLnAtNP9eqiQ4LaujAEX",
  "key23": "4Zs5t1Gt7sLbuCQLrLZYx9khBrcFXVw5B7fN6aSnaAHFCx39JSKZdyLnsMK2Xk6fQuRw1RthFQbenEPBzbG5zBXM",
  "key24": "5eTXtu1dTxcrvra3kX82JCZEYSRAaemCZHSiUAKcczwopGZdhDdNhwUNDkSpE2a9Ymvo2oJNTnq57UVDAwZkQb4h",
  "key25": "5ayWnsFdEAeb1PQS2QAcov3zm5k7ze2u9Fkmaxr9FfgNRbtmu735fVSY4dknv9GsYDgd8smCyLf3xbJQUgvP6ZW2",
  "key26": "5gMpajVd9G99eHvjaWabvoan8WdZncMDs6EWdV2VJwqMxkavLsmxSduXHjUu9UFRc4GygYx89ef5wAV5FyprfwCE",
  "key27": "8WVYBf5RAeDiBUgaHbsq3JucLHKgFGVcqt5dPemv33F576pijZaVg2hAfpm6zjCC6DqgUPUPNUk2ZV33jJkbi66",
  "key28": "3LnmFzudcgWdRZ2mdVXiA3Vpw8JXcgaHzPNKoZZK6DHyxpWdzJk8UNAonwBoQx36zfkmgo2tUbUVi1gXjcZWo6UN"
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
