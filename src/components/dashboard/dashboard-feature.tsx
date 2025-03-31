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
    "54oM8HFz7f4ecWwnpRLWQtJx8uhxE391YXAc7pbQp8rjoyGn584TXnNLLN81mw7rG4V1s18AKLTmF1HJf8K1Nofk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tYsJB8Lx2dkhhwfVLxM2uXXdXjHARWeEDZ4SZYzTid4aejRJKyjvMoSR6r46sdT2V8cYM5Cn7ZcFXjNQbMMDK8E",
  "key1": "2WFM9BFc6WHWPUBB5qSYXCgdcEJ8jdUVHSQkrMDQXFjnDqFD93NjsZzauRktgwRHSmts119PUL6rq2Au1bmveiZK",
  "key2": "TmqpMAdFasQQXxSdGK2LxwGvn1viHnQQ6uKjmuTz7Qjkmgv2PxvxcPw6U9RMnmLeodMuuZEjmNMHcnERDsxitNN",
  "key3": "43RLP8jzUMLswGSEMDTdgVoVX7L9FT94Rdg5pvPCQ3x3qWAcs64Q1p3CN28QXcPnVfxTHonBkRFrG8vVRy2XPPkF",
  "key4": "XxMxzhCCqauPTLDQzHQSQqfFRYgqLcPT6rNZc371j387CWKP1XAosu5drGki2zU7XpfTeQdrm3L7jPLV66RNo59",
  "key5": "3vUJgqwwWUzrL8wN59Z2ko82fQJNZjytQqR5QsoYVBx8S6kdHmGXrM4FhPd1GZghSxz3V9Cnd5ov26Ky4vSvLBEN",
  "key6": "3Z96PRLo65weDwdUt4fHDSDrwwH6ckcCCTtGSRHZ2bvyhXNL4tgrWmf69ph1iXsWXbkHFzfeMYbKknsNSpLcNv64",
  "key7": "2TMW9rgjSN4DymoYDs366oWRhWF2iJ43CcDozRXBMEoHyy4FbPNn5poZdwUnQAJ3b64wVupC5ZpDqNxX8qae4DBm",
  "key8": "3jCLbbWcHwteHhBSfEuhdK8stGiFW4V7fX6FrwD9x6NpgELAuxKS5HY8cHaX8f6hNgKX5j4iniEguR3NMqAksWAe",
  "key9": "2MkgRD7KdkSBAQo8so5GeJ1t3VZaktr9FKkwZgeSNn2HrSy7bwPUDTnVrYnZyjYyPMTu6WLTL8YW76qydeeJrEMT",
  "key10": "4D7QocoPJahj7MU1QwMj3uEASgw174NJnDrLnPBtoXcc89xvuwz4PpGerpLQgxfjBwadBVUnXGTXD8GWTrKSrqr8",
  "key11": "2oYJABM3DHCzj3E9WsUNvDdXgNUZnPwqmgbEFwgzzRKCJk74T8dzpigsH8JBU8hemCfJNCaKv6xRYu7a8Md1H3EX",
  "key12": "5PCyfd6sjPF68toidgHMACF4PSACd3dVHBvgzo4zbLr3v5vnQvWwavfLUEFzkmPopa1mZ6LfiKMcggfZoqgz69Rx",
  "key13": "5KwqEyWQ3V5zyV1oZA63f3gNhHMcWZecXefAgyTcsdvJ12H4V9ZBawajkPafbtjqYcK89a2nWrdJEE8P9mSFa3LT",
  "key14": "529JRdQ15bLCx4U81LcKguA4RMPDoqwMGWCvyUbva1iQZshLjq39eQ6gYDqRhv8BjCcBLe5LpNHVyZkTwyryAmon",
  "key15": "5mk75Pn73FGMC2j2TjBdNYYHjyJ9BNuToBj576JNjKk3wo2qfpXkSzdQ4f9n1EQgvZEnFDPnWbVK9YqkZ7zreyXu",
  "key16": "4RDfZSbaAGQu1uut763Fxr9PRPjnD9EY8H4CVcPskWUF2LfU7mQz62h9uP97HhCKaps8tdpkGgZ7bvsRxY92jm5C",
  "key17": "5wsMPYuix6CPdPAt7ZFneRj4SeRs87iRLSa5tkqeS9XsURPiZK1RK6KKie77WcatWym31RBnFgnKGgJA9SnGB9dA",
  "key18": "4GsQxta5KuoWarhBesQX4FRJYJ9cSAUXQ9nrnZ4qvgettciJBi5TRowVovQ36BQ8UVKVzzGyXbeoZ3EMtDYXgKSP",
  "key19": "5sv7429Biys18ja8X3xdpS4tkB5dcKjpq4XBzF9rPeYdSDn1iUrtJHDzMtaeEVxCaDSHvScuT8hrigbiNBTnfU6a",
  "key20": "3bFQvybqBTVjxp1fELRHTmHBTTcD4RaZdHkMZXacbD635zoeULGvRoueXPCfezJ6VNo8fyNW8xu4WgbvqmT4LCyh",
  "key21": "5R2LDXmxWGqgvCCNSXww7bMtZGsX4Tq5QY3JFmtyfDrwc48mmJRqWVDw4gUfaWxnSZjaGx6f4FNoR7xUMoz92GEz",
  "key22": "5yZR3WzhfPu7m44k9y9FuGpxmLXpsxmcgFNcdtqLtuvCwqMkeSsywozCQ9NxkBayZvRPg6SKQqTqxPJjJjJYTkTv",
  "key23": "4hunGYJA2aRJuNHn3jdw2HcRF1sgnA4xV8211TfBkcHsUuYLy3X3ZbKaGuk47NhHSx1iGSNdyDDnS7D6sWB4A42o",
  "key24": "36VZyhFVVg3DLuVuEiqnkRYVEifh89YjwSRxHTJS8qTuQ3eGhHhSFS6gNopGS4Sfy8D9fa2Dow6GF9L5N9za4ji2",
  "key25": "4uat6HRgfy5ik3o3WqfXfuk9rS8Pmaj6SHPa12zddirThQqjzh62ebXwzzPVKsDXCpPCUYEaJ4DSz4UEGLoxfv3Z",
  "key26": "ZyVRnyyNx1ZYdUMmPSdEpBj2QwsxwDqZ2nWbc7mmnipBR72YC4s9uaGf5R2PiEDB9gzwPQzDYXa3jQvyW5N2S2L"
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
