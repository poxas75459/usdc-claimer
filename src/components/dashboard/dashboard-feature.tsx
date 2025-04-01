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
    "59UkBz26styXoCJbvqRwjKg9jedx8xUqVgkqzDc7S1XsURQJHpp2c9EYjFEukvwXwJUq4GL3JGQJJnqYxupnD39t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wk9J6ag8fRAoyzEHK4uDY2vDyYihdUnXiuM9HC9Bajk9V6o3Anno6GknG2weF7oJD7KnTUACo4NjWgaaVJUFjUd",
  "key1": "41VcwSjth9hGcEh5t8npPJ2VFa9QkkusssmcV9PwjBtmLyC6WGTKSgcbeYkSbnKh3XttNdgx3k3N9xpo5rNecAZv",
  "key2": "RJ5ofQZMtiB3B3CaNh7WvRCspix2aL8pw3qUnfqVcKJMov46dHzxgx4aUpHCGLqBCSZR2cxHqpyA5DrXiz6RLoR",
  "key3": "3YdhLQ66rxLSVyxJV1LrgTHjJLBuNTVK84TSaGSkpHciAypTo1xCMgbQyzVxm6xvfT3dNUKrozDjB9C3VKyWsSGF",
  "key4": "4ZR6FVmhKG7CGLYeQfJ8VavfTanQGk72khBdtk71NkSXvpiifRc2yxiQ4fCzeiWMuvPYLUH8qbnq33PJHZhpxpbA",
  "key5": "G4sQ6HHVSPd7buR7cZbfzgANc8JhzMvxfzQer1DgGHQ8NyRtnKCMnG1h6zraH9MY3yVxUfssLTbNPvyF3vbEvFR",
  "key6": "2tBXZ1m6bnsiVqdD92WX41x88BBt7iM9xBfoDdRchgRn7okcgj1V8MTboyTUXp65iL5XNrkssAsYDQteuN1K7ySG",
  "key7": "2MWAotow9kJ2o2WcXuYD3aoxmpMjJyDURJoMBS1B5wbU97eywbkTKUX4t4fyKiSdn3z26ufd6SQD2pVvXmHAcgTv",
  "key8": "33N8PNpee4tCMgSFy2fwoeenC1QU3EWZHREb25k4dKwhoMVowf1mHZ2Bi7ft4htBuLVret2BtbmMhAmFrCyLud1y",
  "key9": "2DSiDDe4kAfDHDGS4X3X7oMJhx3KykRHkC9yxaoaiKJyDdEepRZxZNiuUDEBdomxiHboH4KSpdK1d97UY9Y8Vh6C",
  "key10": "3dK3KfzFUzcKuHMW5GAJLLTzuLE5JrHLgkzUa9vqjMjXDJ6Cff2WFfiqXn7mErCwYGXdF3XxkBkDyvdQswb3RJWg",
  "key11": "bd1CGCmUexQdj6YJVZXALpneKU8aMfVgUehA9yn6P35JoFfs3uV8skDLNybiLcEeVRuv6zCnXXChTCAuTjvhRKh",
  "key12": "5wS38o1x5WSoCGMfPf7z4Pbdvq2W4LaBJvFs2VKCL71K1B1iwZYwv5UxvnBRcdzNmheBpmYYXsvUipCjgsTsCkiZ",
  "key13": "5zDfSVB7aGEVbbS1A5MNcWXhJz72qZfepDgb1mFsy3YeuEHvrFfJA4RDynpcHYtabEXbwHk6eKwS5ZfoZ1Zmfawx",
  "key14": "4rdgvwJ6Pgw7JDR7HAgbmecCE3Y7HTVct4qiQBh26uRFcB6REbtRXkpJcbeTmEMYNhWojs3D7M6zgJAn6hhDLQRm",
  "key15": "3wHFz8o5RMvpgnDZiM7Pg7sNemCVz443tgrZA9Au18NCAUJ3kiBvPFSmbdtKXZp5zPzhrqYy59jP9qU7qAuqAENc",
  "key16": "4NRFAMUyNxtRyAgPgUvKNSt7CU5rY2PxygTTBiHuA7E1AfvMmKfLP22xLwLLp7rCEXW8w5A82xmLjyi5ygTHtSsq",
  "key17": "2PLdjib626ciQHF4bHbnxAFiXdmT6VRcVEcuvnzbtpyjtWN597Zm2x61KmoAbicAwM6fA9AvK8vYMiNrq1WXH7gf",
  "key18": "49fTjKGniSU1i3fjBqXmnMXyDfRaEZUGVuvWgrsYqQWgN3bzfbR5W1ygMmcvfTqFCUmWdbdXc1Sc9FnBMVRBMCAX",
  "key19": "4daH3TDNptMgkkEA3sPUL8Gx9WRubv9uUapqy3pw5pXa2wAnVfVyPcon5PQHbrFArfm1h9t6QHPHPLnubjFax5j3",
  "key20": "55xdtEiovxvfd2G7nP87QvrfwqkmmWr3zF3SCULpaY1fCFoJiNvkcUka4DkHwE95weBuXuMGW5uhrv7gmzMHWHW2",
  "key21": "2C6kWJLpT3DCiGUyTe7bzVvNZ8X5PdKiniazFQoZDuhCrFAgnmsS9Uf1Lmb36XEYh7nyyFsgn1PY7PSM32EVikb5",
  "key22": "4JgwHEy74j3Bs4ZLPGuSMaweZbJ3isRh5mkzyKoNt5e9DzEpo98pSrakVqwEfnNDa8TGYEEukXwBiu4XNHSpWNq9",
  "key23": "5jeRGrSUQQowm4VLNQ7hduyc5ofsqAYtjaesfJ8Ko45hLoufjfPSBrdQcJDgDR4KyrvgocHBWHm6Hx5u8Mn5us4i",
  "key24": "gU5N8jUHwgc17nL47Uv8RTeeNjQJfi2M3qQxsah2XAwagyZzpvGoQr4GRpxVEDhDJWuMKqDnT8Y326A2Uy5He4k",
  "key25": "2CwvLp6fmJhMhmphTdNQfmJCbGbhCtogZfT1tQBTmXsPHr5TsYNUwkF9teqKEMYRUjdaqNfsk97Ptshyn897LhS5",
  "key26": "5iztgbnk6vvJynsCVagp7jDpck4Uo9cGVhkHYfs32gd5JwXsoWsE4CMfFze4YaMh1MVUXyApijSAYqHG9eG7RdJS",
  "key27": "3jTnUXGtfcBr5AnsbWp19VFBCuuF34qmM2H9jBVcD7f27AgFLnrS8VgsCB4PZfpczdeqRg8hZXk8zBvEnTJSEi7r",
  "key28": "4hjBFk7dn8SPYSRYwKBqq1redBbXpYgLCg4E3mF84PNYE4KHafKZC6Bwk73mo3dkqhdj8SpyJKoB4F4RXZuTFmXn"
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
