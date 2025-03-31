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
    "5XbjTH3zVxB77ABkn3iuprhTS18KYFeoW8RPjdAp9jCvA236usY5ssTiM6e6Nihzc2MuVaqUg7tBAGLpWh8gvdsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CQvSKBiUJesoS51SenGKWTpmYiqJYtWbUHzJZHnuuTTKNNAUWSc6fw2Q7RzptNh17jqw2uinDhiHn9yr9wA7ezt",
  "key1": "bMVJE3miLh1qeTX6LTMVwdftMoQLfsvGwNxkzkEKgn1txRPQR8a96MEsJmDY2szMaD13SQourwCPdqx8ZGitwpm",
  "key2": "5hKrJszwWNsfP573AitqTPbW3LSbnyKyN3nBFDFvG9sPcJyAdQpH7PierR7Cw7ZTtjo5pFq3X3VmBEhywoiygoQc",
  "key3": "9VDTLhVLGJ1AupRBdo4FSiaffhqtGvhoZecWmwCE7Ra8JNLTeYk9DrrCBLnpDizgL8yCwmAuNehvPcWdzuJEVXo",
  "key4": "3NcztnG1UebPePbkhuhvwquK59E5x9cRwFBix5iwDvotRhAAQScSdde76RsRb64sDQS5kYVrfbWM9hDSoFytB2rW",
  "key5": "35cZbCzHX3U8D5cWb6Tv7kS459RPqX6jnMWZzmi3PPJQ3mJ4oScJF6Bhidf7wDWinWvv4pKMKqdfCgzgsAeQt8ga",
  "key6": "4EdmSJLHG1Ajp3QkAx4i8Lm81u5r8WPpPE7aPNVPz3VpxKbc1g9gEAcvabqjGasjEFpKGw1dCyawk7NhZXqDdcMG",
  "key7": "3wGnUJRRnwh9xTM5Hpna1cohm92XpKoT7VGB6ZoSy74SnDH76AsVRtxYVf7CU3AmkMDdUGpmUZm6uFQuNShPRXQy",
  "key8": "2iuEJAmYCgTiLjHx3JSRT5H81vNN4AbzAMvqY88zwua91rwjzSXpRAhF6o4cpmorWqAniN68Vu5YoSQdET21dRg6",
  "key9": "37DbqxnEZzPBis7AWqCnY9VvXF4XmY28dEpZ4LNdTfZpWsHwNHDE19ik1RQf4F3Dfgzwyuo9f94B7DcT77YXPTNr",
  "key10": "3ZMjsTNrh2comwXiSJ6vdFr9eu1M7DmNyaMKb6cf4XU2R7u3cT1ogzBVMkU2JvzmpaYZYUZtN3NEy1aN3URDGBnq",
  "key11": "5Pb2SLHS16KSa2BrHdQVCEiD5Zcgstvy3w3mY3y5r591nNHLhDKG3C4sTMzMrdgXuCAEsC8aph4LfhsBJuw9navx",
  "key12": "4AV72BXk5d25zeSjCXTKohWWYHJ9CMXwSmFfuieAD7fxdChyCAySvzZgktvD8BthBSVa7Qw7w7hr5WgBZnKASX57",
  "key13": "4rhgzbdKrU4h7FCYnLyKmYEDJ7ASBsJP7pbgjquvBMZqcyXAX7CsKHxbKuyebfo23tqM3KKCBZjKo4waUAJiNfw7",
  "key14": "2kcBxkaMQdZMd7q4y6ti1JCjrPTSN8iSUwMStUbyh1RBKSzHHmSrT3PCKhKQjWsicjfi8irrTSiKquDNdNL2aWQ1",
  "key15": "4wvHEMQFkEkTUKQprTvBprkRe4DShpMbNiCcmxe9gu8DDYg6tT1hB2Mumv1u64aRRqqKtF4W38dkogHipdUDTKdo",
  "key16": "hkyTVDtnzhekp8rJfH547xVddeEbTM688wnKaBs6Hr3fh2kKvqrYLr7b4DTywGsoYeW7emEoyB6x33b9vLBPNeD",
  "key17": "xghJVr5yak9GyaMTcTtuWidt4gDbVq5p6NexJv1xSqgs2hq4ZWjnXH1K1ZsUuk53ui8o63u7gA6viVK4PRS2U5U",
  "key18": "5MwB8W4BCHxWwMk9uD5sVR7iP2jBW2HuGdez8GYnDv9QTK6imBhUMwAmVNMhCgS4RcgXXYFUXqdKFcLEDWsfxxkY",
  "key19": "2UaAkdKmPXiRtqmVnfok45Sd3RaVvQgh15DYpQHTnK36W5A2Dzi1bLMtzNvMuvj4cU5FKpb3bzHadsAuSXkUbYdz",
  "key20": "4T8yS5FPniScKWFZA6PmD89EFscqMkRcUTxRBNqDfpJxGatSLkstPxEkACkyyQ7FDUqjnTBN5Zmg9MSi4XT2PUPn",
  "key21": "26fCMTa8cgyJpWEAiRUE4MzFpo1upTVf36Vyf1E26X2rJ4PHXxQGwku5NUYsmPygAVot4eNfZV7RCeLFa5jAFVSw",
  "key22": "4sZpbewSRcgbUKf8Bk8fEd9qE811aQbiNyYkneY6ChQLELXcZZMkVMunt6SeZMUmPSAmUVkNwo77sMgpGx7DZAk",
  "key23": "39LF8hHGyV6qpvaNHqPaauXw7c3H5AjT5rLx7uuP1EQbvPW6jmj1xao96nqaDZhGGcrw4EkG2dg9Ra8tvBs21MC5",
  "key24": "26M2yiq5oLsciLXfCcwVWCJ7GwctSn4WQQTW6joEzbPekA8pmPBfSSEpzV4fAQr948cbPG6omzDvJCAXvKtxSCSe",
  "key25": "41urW3K97s3EQWizJyRvssDNTGBv2jS6Ns2Xh7xjuPhAo6fycnVehyhZvKzyBJzn5hhTjw5rMrUxgJ22yZhqEsvC",
  "key26": "2h6GNWV5kEZAT2xSEtUaLqHAXE8K5FRYaui2CXZcabbNDFFvFEZJCPxQQ4Rop89fjec1EviUFSp5cNhUi8quo16C",
  "key27": "2zBeUG7P8uyneMNHm5t5pKyBguEozKLG5HGucNx63TTtjqj2ymdEyQBzMv76NfQDmhKVB13iLYE9rgPat5f6EZSj",
  "key28": "3NRZsZSVp6q1SW893pijGexrfMw17Giq658hC6hpv1hmpj5s777HRRNYEAoBXhR3LPTsueNPdq4gLn88VtLWXXNP",
  "key29": "5B4xeUeasy7U4Hh44zkFYCYHfYzcSkLpymUe17cTmvSMeC4dUD3JGigojHZ2ja9N4kTJxEB34xN3L4gg9XiFa5ir",
  "key30": "3BXeCvhcqbafA4wC71Zveo8ZSrp7U62XGgFMuFS4WfCwu1QhDJDbGYfFErfYM73tFMXoSCVNc3Wa5yYJhLFsPGx8",
  "key31": "4MF5DXZ1mhPrLugZ7te9MGREqCLMEMGGkNCB9zp7ppM8VHe89JfjaoaqLJqi8fhUvShWpZUH9d4okEbUUExNRuG1",
  "key32": "5nNCbUtxJEkHBPnMfA7QueYxXq3iFXgEZpwXBmE8tcxKBdkAMT4bBAE6Jf2ZgCGRc1aL9VhurtVJjWvw3VyAR8tH",
  "key33": "63AEoBA1iqpB3U6HuQo8E8DLMZUNQ23qhRrgSrkxCVfwwZYnL5dinnF2j7g1cGqZYFWLqJp7eyzLjxQGWaKAdCrc",
  "key34": "5qGYgvKFSRwrXprRzHCxv6mqtETg86WcsjcXrWo8FXzoZ236tzrF57Z1ivtfs6VhFHiusPZBLQUZpW5nXVaBVGqw",
  "key35": "eFrWAjy1bnEbG2sczF6yUPNRabTdRHbD4zeGu8RriPzbKXyVVMgdzAugqvkUQV39d5mJ9MZYstRXtFhCBk61c5A",
  "key36": "3dK8kEaBWF5uafNPV8ApwFBs15GMYZSWYREKFpjPFSY3nf3V5NcJNdW6nTkKWs9FmHo1vyihTFs571GPvYf4ED9X",
  "key37": "4jYv1BdfzqREbT1ex29gMeFQLLju4GNmU25ZeTAEtnYvW45di4N8BfevMo5GVcfXAueFHMdZxig7Wf1xW2ijjesT",
  "key38": "3RSQhKB1oEm8b5sEUHtgbYy2A97gKRX1sC5tKB8oLxvtJoqY74DieCdBzbG5SdTQsYD4u4TRjgULZ341vKGE1a2V",
  "key39": "5WKuLsM7rrFnQWAETXQy5sgHHMsdBYK2NnSjBRyu46FAfUqiG1J4CsXxw9mdtXYHVRHT6QUcbrxTX1CnCj1Dc7NB",
  "key40": "2qMcfmnTSQrWTUdLuVL1pZx2qq8ouzwP768GYzXMUscWvRis8MVkyXCvcFByvECXBJe3azAraajpwDYxu9bUZgGC",
  "key41": "3toAU6eTeYFriFW1akzLpQpmWe78dEEBkcBoQy4LrqeXCApPiud9wgVGhD9HooVHDErNPCGBJRSuv8DGB15mKvxD"
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
