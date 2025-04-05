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
    "4Xs7WkoNwiM212W9x4WssNV7z8XprXBvEniVo3jVjFEGqhY68wwDbzZW6bJ48R9WgWRnpo36mBTwZuHjyuiPUmA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dJKhTaBKvR7BAsrvnKxa9phkzsmDCVwJE3sXv6eLkVcG9BnekFXVuu6191csVDGTzmRk6ME64uC7g1PZs7gKwt",
  "key1": "5jzzXNUnDhcvZFRbcPE822zxJge2JNinzzRDYd3CgSSJYqpyPms1sg92yueN6B2QWnewgWwuEQwWhR3DK2xdqBAG",
  "key2": "3KC9e58tNamwNSfKW7dCPWzAvGNYU11PZcXTnEN1rBLzME555Rrq5RrUfVmwygHyuwUddF4csCDfkTKxazAJThjn",
  "key3": "3Pko3efFyM4cwvaBUWjuAtUdmrXdQLhA9rsJfstX5atRj8eyqxBcUbzABJSXhRetrTqNxbocTx6VTsKamamfbWp1",
  "key4": "5jXvF1AgLBedALLk6dfSW8CKUfZSEwDMK68HFS9RPpovkMKGmy7iLgF2oimUbiLcWgyNEdpTybUuShooPRCx7PS1",
  "key5": "4hBcmaK5iMvzCvfgUHxRf2Pnxz6q8ueLjEz8F2M4rzxxfV8ACgPYpejfeaZgdVAyUcqoVb3EY1mTrw6ye2ax8Rq8",
  "key6": "2cMvHrkqMVKtxG2deGXgvGWC745swEsSiv6nn4d2Weup3cRCpzzfuJqbS3ar6duY64dgxR9CZNh54XgWbzgvNsd5",
  "key7": "5FPAtgByeW14Mke1rp6HfD7CZm6PUGBPLFmSFPafnPVkQ2R9WWTHV97695T9S7WpTy61iQt6UNT8T4sGzFRvG81o",
  "key8": "3hvVypkQHJXTgVNfvrdJrRgjsi8efSGab6gCmAFnBT4hUwhPJ2X8qY9NF3hLm2eCYdCqMynxFSRxdJYkP1jzb3FW",
  "key9": "54w9teAQBVQKtAPFtW3AMj6ccLm6Dp9FY5Txx18DuwvndVpR1ywuSArgRRZQDPYkYxxQir6FekLt1BztVSPiqV2r",
  "key10": "4Yrj3ZFZS9tkYJHfSwPe5Sr1LPNyLuya5mXsGv6u4wh74uoETraiCLNEhRE943kQ8Ce8ErmwbST9KkXQPtp7jpME",
  "key11": "6DjgbtUJ9nGauXVFBhSXbAfuUtDBPMo4N8WuhxWXVm3ptM6p8xb4YQvDAS24tjLa9hGnCNDv8X4EoeDsLS5Kyfg",
  "key12": "93zFNrfgUxeaeCzHNMPtb7qQr6dyqHxhts5KsnUVrkVqVoWGf1tnqcbRFATur6kXWGQCG7Ket1BcimbULrQAGSd",
  "key13": "2WPQY9ScNtDSTpXM69PGGp6LuZZidnKddviHXSsAvLkyoHZMSHeFJT36PAYBi6xwnA15wecZKdWBBgoSgTuZEQth",
  "key14": "64UUbL27SnaRa4VCd3BohEV7Q5Nug5fxdVdGDa9ri4Z1cGzBQL5b83idNd9wSSMWCEcvBTqZm2QP2XaQpNwN9oyV",
  "key15": "2QiPFvAKW2b69VctWaNrjGPGRnuY4qR1MffsD7j15PnsRjbexJKdzr4dbeQ3M8K6Vc3P2ATqh3tMVAf584Co5AWv",
  "key16": "5ciqX3FqUYrcNDhysvT119Ch8832Rpsvz2DSjsjgGSrm7y179qHEn3kYgFsCr2t9NRzKSSfmqmwBzDYxu8udCj9Q",
  "key17": "4dXU6L6Qtd8geAD4p4GesGTwCLdjUUoNERVHRYumYKm9sUKqKKNCq8vvMPPnKpkChVJpUJwsKFRhahmfk8BtZZxR",
  "key18": "58RYQ1ugPBao7xJjDGeExh7Zojq5NgrEvZbp1FcTNQqfNxjhJy7UZS9ThHVYFDMZvfUvFafJGpf59yXU22sbbBR3",
  "key19": "3VT6K26L942ofkeZP6waeTfV8KPk98BKfhrW6RY4rqsVCr7wDZj9qq64x4NTxCXgm1EZoZjXURLbSMF6BzborQ9Y",
  "key20": "36yUQoABCkbLWMnPj7AYK7rs87LUwgHSAJUihmiBXKdJ2rUFWJJjdg927EbgMFD5cozfz1cgNyrNJikb3L9eGj6C",
  "key21": "3CZzYYmhV28o843s4zmHvLK2sU22AGR7L3u4iUz3k6JbwumZqhzzaDpU8HntJ48jQPVR3ZuT6uDjAEBtAS6QWErG",
  "key22": "2eAv9j6YB7LCjG3WU1K97jUT832D89263k1oRjR9BFWajurKgo5LLHdxChZ2H6AwFEwygsaMrskGFG7Xf8Gd576B",
  "key23": "4XoA2J38jFsYatMtrmDH2dhw39rMuro4gDTHQ4NXuTp6UPY16BpsrmpPJCaciy6Q8wSdhc4KsaYTuMVkFUWeLwAV",
  "key24": "2wQ1ZBwrWqBvqtCc46vJYUJqfWhLRjDmbXdV3pgoxtB7qrCuPb659HZRWxKQCzBSEyHatvyhFjNQUZweeE1o8zb2",
  "key25": "29PoMQGG2dxYG8nsB8nGYU32hVgonrfMwQX1zyx9WRbyVPu9WUxCJcHiwXk1Ues6vHtYAVaw5mMhyG8QbLLfFpXu",
  "key26": "5vvN2RLHurPStBQTdeiW6R3LTFR4VGPhAxK1t4zqbHmTLu718f4wEdWUatfSeoTFZsaDbj4gRe9TT2wrrfVECQCr",
  "key27": "3c8MTRUE5Kj46VrHBEYPSopmBHmSGvQ1Whei4MUdR3wKR1xBcTqpq9sFWgRFrFoDggvt89P8PaKVB4TzGW2RRKCk",
  "key28": "pggKAVXeniAWNZkZeqoQwoCReRP4uhFQzAWBnL6X4tN2i1xYhEXubMYAZNFzfV27s7qAN4ereGFhJFB9Aberk49",
  "key29": "5pnurFnGQz6MN5bmSmULawLAtHDnuhSw8noRRsBi5yfumvnpuVffJinEpMskLstUKCRFcu39wd7FW8arKuB5MmnJ",
  "key30": "5Y3byXT8RxhEbNvw7C3V5ub8sgpp8Xw8Gaf8QBk1EwZXQmtsGTiyY7LViDPrrWBsfPLv1HQqBxFt8zcQZqqWD8Gz",
  "key31": "WYVwLvk8fLBNuMrUxSpuT9scvp2VPqtjqSWv2ynLhJ2DBtW1G1n1J461ExZoWA6vxLDoqGswrQVqJQFnSAQkaoh",
  "key32": "4U76TjeBKb6tmqon6FahKvE2cBkG9tsTCFqwL65GWfAcRphDbXhjJc7om91WqA6PiTuZfsDY7MUxBMw2M9gyjD2W",
  "key33": "TPnbBNCVtNU45FhPKXQ489s96isTBe7XhwLWPJjHeT2GYj4CrwcLqiX6fafK2Uyozh8mMZyErGqGuA6xbWgrqYd",
  "key34": "5ZHNb3UxDYmG3HKYPZx7AguqGgo8VCqtgFJvwoEETAp76DqMtPBLNkUmaFbn7oZZsGUhWt7ytABo179xe772iRxC",
  "key35": "361sYnsxCW49og3YEnY6BcgDfuVVU5A8uuPRoGePP5bWrf3ELTKog8vFuJr2DzT6GhbvBp6K8ZtoSZV5g56vrjYa",
  "key36": "34qLVUQsVgXcEQWaKRVmTRqLqQFejcqNrb9TUYurC4kd6DqyrHqb3hsiwYATSLUwoMRWc91p1H9PbC1UubneG7Wg",
  "key37": "22nd7NXHp5yFaAYaM2cM9Wepak6YNz6Ds9vy7qtoWNeR67ruengPrtJAfTVfC4PtrNDfcCUDaTYxKW91Y1d94E3Y",
  "key38": "3hotS7y6sqEQeBy9x3VoEA9NoMfXAcyWPaZfhgWdPT7izQtpD4tnRU8EmHGMuNiTcBu2JBzj2frkjvppsGDyCfvX"
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
