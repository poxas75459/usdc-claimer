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
    "eLVkbhaYEjvoX8spCvE8rgVEfvmFSHmBEjv4rfjw7Ti2BRfmaZtdDTkb9Lrg6Bp2TGhvgx9xquPSAry1GMtGCAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2srZLkGWy8GKkv5ceJHGQgtjfN27HnAnEwKspEHBYfCobphC6chB6C8JkuJPrPnbrW7LUGHSTq4uNJjewvTMDcz6",
  "key1": "3p9A54WneNHGxoUaZcyvk1R6uMY5js23WWpFayuuzD6CJRHqWapE47YDDtnueCzwfCaJQg4WyhikmcAicK8cnPdj",
  "key2": "3kn3vh9Y1FBMTfNBaJwUroXpJ5v475KNsor5GDrnomw2iM1z21qNVDAXGqgY9KmRtGsqPi1knYf5G5j1trCkCu46",
  "key3": "5q4cqvg8h6uSqbwZauaVQ65XMLvMhpp22mzoYoP6hFaYM1RZ6kCDibzwvPN1Ygkz4ArQURuVPxjfUuA6g75oPoLS",
  "key4": "jief3oeAdxbBd8GX1aERuFa6LMVCGDfsvmvoXuBU8SYX5jVggTUUrLEiwjXhC86RbXZEkbKJqcQQy4n3H4zn3Fc",
  "key5": "5pYhxcMpRDp9hKQaQiNPXZ1n1jrYBU3jfK6eqeE7wkQeWitrpuyNSevub64WGxgH4gwpAHDNbmfTSTXc9JPM1dPY",
  "key6": "2NULFKTpXv5sezUMd2BCLEAysJRQ5TYWGpSMm3myrwm1M1Fz9ybZ9UPQfi7JjecbJDrbcUiDPn6gegSWHY4KirA",
  "key7": "JBy4YGxkEgXbMYz5ctXTJmVVA3aKbXaf15LsX7MC1D1XssWTvbVSGf2Jh6jDEAd2Jjdm7h2p3DyU7PCTZDAQoFB",
  "key8": "5wSYmfPrLe8xvarguaqNBBaa9GBnu8RuTxhcGbtFR9caVBetgRhChSbSUbUDTHH1Ey7znz9fedmGKG5Ptdano76f",
  "key9": "58CcDfNM9z3Sbqz7GHuTUiyh1i2K5aUXqkkbWwYrHVVMCTQrLTP37SrTvU4mSHLRg1hjdWTx8XXLbYTQrFxYrSvc",
  "key10": "5TQQZsXYdYiHzjpm8sZByye5iQivuNpEWNTe6KJvZ8iTZrNJqwXamdPLG2ovaYKwMbqmTyXFp5b4GMLZVGg7UpHy",
  "key11": "4is3uR5JRiVFBV8fBkr7FCvpmKx1pyaxDGN7H5CPHH5iV32Zui3uUtEfcZcDWVydFdnbBG6DoQPMp6CBmt3pxuHT",
  "key12": "4A1x4Vfe9nVpJQsWHupFCDPEqHQkx9TZVaZpnCLca8rx7SoVu2K9o5fko5G46uW4a1eHmZKvCpFeUhPkVNdyxYQB",
  "key13": "2WX1rNgv9uVsAGuNj6TLG2R9nxu143DyjKVc1dQZbyaZBJvvR7NGqWGscugnVmA7DH1R2yUDHvpssinkHsb1rvUk",
  "key14": "3PXaTiTauFHH89VGTH62LnEzYqs2ofxQ6gynP3yP6bmVzB6J6Ayos8uS3m5BnpsdxijYSRRXU5CyxMzSbo6ZgfTd",
  "key15": "4SyxkLLigfbJb59aSvVhuCCyhv5DvDx5cTXd8jKRPz9SAP3jfoYVmKvQ7RG5mjFmSXpTWgbqswSi6xSZ3LLT7nQk",
  "key16": "3xKK3FTY5zzwj2toCscuXQzwv3wKkrjcz2MHhFwVqsfDA4fmB3Tpxu25iEbPxGuuyaKyWbNCrL6XsiBLWKi8CwXN",
  "key17": "q2aUV25rRhWmURNDFhaw3pssR3Mcj1EFykLMhCR3WPbqJFb9DPkQDGAPHHBgrccfv65hdnJYQ4WHnstiMjZou6P",
  "key18": "4WtmATrSRd9zYm28ixC5sQ3Jz2wu4MvdXG5fCSkU1zCxoqA79qZuUB4H7uZw67GyPEg1BENGt3CkMCVXTaEXMY6w",
  "key19": "5gS4e7J4cv8ebbqDPvdekuKZQHMt4mB9cYM1ZiruGFUXrnRDuoGoqKsVUpf5fp5uCchGPmg6LWQEzgH8Gfz2WtD4",
  "key20": "2jrbMgHewFuFtuzjcT91j9Qtitd1LMuoh8sYc8L8WVAJfogTbTLs3zYMWaqnKF6rtxeTx4GzxDT1Z4zAEyqdiKfy",
  "key21": "4fc7bnW3ouBqeiXEFNQym2UzsqMbSzRr5CW9kLrVGh47pGvVkF1g25Hb9Ze4ME55VX133UzywKXjrtoWyXTsY2tX",
  "key22": "fU5K88RFc1rUjCcEsL4rQSifS42UA85fGVQpQpTzJksfcWTAc1wgQAsPrBTVT74HH5a79Wwqe3p7eTHpp5nD2Et",
  "key23": "61vmS5DvvkYoWsNZdUCCVxLWChBu8N2LMJwjZKDNxeJx9TNyEZsUULk6eRpqoE6nzwmnyS4J7KLxhNRCRxEGH1oZ",
  "key24": "DpdvtoDfYDNWbpAij6SifCA6RSN1eeVRh8TpdRqCvtvKdoLGMJXKZxwRYDr3Yg8s6SzNWcvgjaEqJziBoXNUvDJ",
  "key25": "2uP9MScu4ybN3m1tjTzmCvpNX4r3K64jDLFEngbNYQU6ec9t1YL7LN84oYr7mwDVaQmFyiWzypjYy2i9rx5YUJQ2",
  "key26": "2EzsJWX5bUBpb5kLBHuJU1DinwxUo5roftFjBMdkXpefipycmUE4H5LzrLqUPPBFwNQbsZd9pRX4EWSV5ar4xGdR",
  "key27": "TZqoUBGDymEBr6JNKUQYBU65W73uPgHvCDSiP2pNvGippGDdVimG79hRVPF9U9ooHRzepdr4E4K16PWAUAJsjM9",
  "key28": "4V47akjSheMYGH9gnTBpzFx61XUy1iSQrPX8W2nRp3g9Q5vvDrPfp1XPdhggFx5iZ4u7Eb4waqrnAK2KsV84ZECP",
  "key29": "3SyHbaDJa8wWzF3ifK26uu9fDw6CZo7dDSVJ1ish7SaDMbj72moGDScHD1RJLgrntdBjwV6m9EdoTfdbPuZ8KrTX",
  "key30": "5fFsthfbyQ98azrNWvMATEoYbeLAg1MZSosMSwpQSGBGB7FkPiHyZibEP5LhFQjwQprVK9Z1TTX3eQVjKm95KijL",
  "key31": "1SsspEBhM4hpiktpzTxXd1yMeeRDquJvReQJuMKvdsvUngxgsP17huRWFqwD2LEcxFqvnzRvZQKhqikzBiMTgTE",
  "key32": "2GnAKyHTorJiKLWszGLW8do2iw9HQdZxNYYWzs58Kuj6fHE2GEDVH2ZTp9LXf7K37zSTdyY9XjU4usMYwRzsrqHq",
  "key33": "4wY1ANygVzWdmXrwV1ziJFMqmtQUUdWHnwgXQZ5gcABCJXJQ5MUcmN2tNvyZe2twupLCqrL4bwS4VxHneiAvCN9s",
  "key34": "hWvkRmyKwXr4sR3o5MMYZoAta7FsNRTKLMKVLUsPrvXJgYgPKU4kf8XUBLxghc9CKMzzuyTyzTcQgpJqRirvR46",
  "key35": "3vR3qpvtUpC3s9efE8hFTaVzQytPXZiAp6vttfDWikd7BNLhj4RAwMXAPYcgDbjjp6ViW7tWGnnatBYSENvZaccf",
  "key36": "4ucTL93AaDrMgAYRb76Xrt7DYBDLe1hMx2B2pGpnn6TaQPxsBK3bpfKKojELNLKmhiBMaB4aW8LsujNbsJYN9HzR"
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
