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
    "3NLrErn3eCVBB5JoxgQiWt5Ej4XLYGWagsY6SSX9ZtoGBZjmHWUBoyX1T7CtnD8cB7o1oqiLmvLAgLeodfcSfKfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HUGaNGVaSZJuVS4BErZVJ2VzhNr5aVakTJJU78q1KugAH5izRK9sraMYAbjwwWxKtRzgUwtMJYQQrgHQ9hikAfF",
  "key1": "4gjjccpuLN6jgppwoFyQWc5LgWudbk7br7BykdsGXvRFb65LjZuMHV5gHbTQQwqVSw3gsbfTWYkiVUmJJ9uLJ7R",
  "key2": "5cuyUmRCCon3yLwac2xD3FT3URHMbg4D93nudFBRPropp5zSCTZehTBuxWV5prxFwjWcVz615aj2eBWwrx4zS9UU",
  "key3": "3gyYxJ6KwWcWARvuNaGgqNRe8u9J4MnanuLPSvLTMZ7DhU9n7RrVMewhnAXCSz5yRRQoLDP63eB1bhbFC2t3r2rb",
  "key4": "fNZTJ8X36WocW2TNft9ZYfU9GTgezwKysuZkyxvWcjaALjEYXg3bhUQhZdS8subH7G4Eria1GHNL5nbsGtdXzk5",
  "key5": "G1xoowLMdsG1PLqJWYjdBmaPxw5jq1zdUvXgoWGM6v1RUz1UBcHzNgMR28niLuLpthMjD6TNLwBqENfqR5knciA",
  "key6": "xBtVCovUFGkDY6xM3P4dV5V4KTH6nPycUL7AUL8ricMnZZeiMgYovA7jgEfKkcJx2JR1NR6MH8kmVdZxN6HTo5n",
  "key7": "4LkrbzpedAKDvmsZqjQcbuj3eyoQvgDctv7Ym3J241n57GyZDo6oTD2yartEDzqCa4MPJVRx7Boo2TACNrKvEJTd",
  "key8": "9fKUHzDvg2U4yPj4tJnBAmE6uYgQQiv92SrKSBVNeL89znjfMMKCxTcwkUnf3Z4AKoEjtYiZtVeyx4v1L77ux6p",
  "key9": "4TmywowbC2kJuDFWapTSS8RrqfTWzTjSZSPPtzfWH132nXRSTkbrsdTRPxVZjPfxDdapELwVWwCnXyReYJoa4dai",
  "key10": "2NQu9qJGAV4Jbe1Ym8BEQi1Rpo6Jm5EN4uxPknfrVnPgrw3ZktD2UepaCja44GAwbU37qiyaaw2oPTqoNUpVSYk5",
  "key11": "3EfdxafxHUvFTgJv2GNk1BvteSAX2hS73StZofBg6mkQo2he6N7xsKjXoygHfS8pvjS6jCBg95nmpCFVt1g9fj9S",
  "key12": "3Le5ExQ6ELKWPnUkptDoTWhqtondd97D5g4xCA42cSbFTnaqgM6FwCLHEYg6ReesW4HF5YSevRdeyL3CtSAVC8WB",
  "key13": "2eXxyoMgH97iVzCSDDXQk73c9f4iujfhnonAsZc83UJpSfGpvacLxuRMEDKEnsrMT1gfCyFj4fE3UV4Pck2ccSsy",
  "key14": "5hUbqc9u16x1ktgXgC4jNaV7geeoQYf3tXE6AQPcZnu3yHmGfT2SbUG469xFyerZuPpLBrzpVvy9tKqRdPuismPh",
  "key15": "21VeiysbnUQRFBY3X1D9wkmpRx1px9FcDpD9SD4kXEPBXk6H8KiUaiyCEZmyNYCER9BMGdgT1NMP2evnXQnM8Zvo",
  "key16": "5txKvwPfibCQhUhoawJh4gkfA9W6ASXE5GptEtfpCMhZ9o7nha6orHufpq8UHcf4WgGxNwghgPMJ68TW3Qtd4mqP",
  "key17": "3XkAY43uBeChH2BbVsjhJU2kJymfqmFWD2Y3jBvbLfFdA3UyNu7fzTpjq7um6DTU5DPJXrLMwERRdwbEwivTCn6p",
  "key18": "2EEtvkqcxG5CwWw8S22yBwgq3j2kGRRThf7fcXqreEdUxFn3m8r32yZ5TgMwd5r4jMGHaCBrVpkasBXmhCtWWyMe",
  "key19": "4UcZ6AT9ry8L7ojBSXR7CJVct8PvbNntQ4MuR3JPsSJtNxF4nYtm5LAgD1DTub8p6rRRLEwa7omCzvJHEYQCLwcz",
  "key20": "pRYE6nFrN2dZwpa8ckiP7xmagRu74yfh8YUt1cJkLGZbcv2wqTvS6RCS4VP1SWSJN3EN3W1H4vr9sTko3Ka4ebM",
  "key21": "2Z6ZGYnocC7CALFXx6WwcU2cqw149rxUa5GG4yr55NB9dQLWsbsufjzRD7jtmezjZRSkTjRZ6HSBsR5CoFzbRhze",
  "key22": "3LpTDrpdNDQLsSdfpFTboyq5NZi34yhKUyXGTmUrn63gKiDKAPcK4FfSgxMbuy2CCpMBrBjs8DiSXntXSpBXZLBS",
  "key23": "2QfFxeuqp9dpFJDMSaKEi1MmJyzQBav7LLKtQWsRjYGdv86csuZiyg5wzwG8hr7LeJX4XJyLDoqWEz2Z2LTAaXBC",
  "key24": "5PFjKj4dyt9YuJthMp2PN1dzwxnQC8fXH7Xq9jjHD928nQowp5pfcmum3W5yN9AEYtXB2ZE5TmUk5DgSBcDjMULa",
  "key25": "4KaKtFtrCEReDQY387rQ1ocaQekmVwoWnwS9Ken6FmQ5jaFTNdgo8rGR1p7Xp5wz8HLnVbMXAXTYCk7pCDDLidhG"
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
