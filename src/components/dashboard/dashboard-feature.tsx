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
    "zH7DbCjAMZKbQoGEz4pcTKj4SM3rGSddZfTKRbkKR9mHbhy4GHCF58LJB5TyCQv4XfvHqVSQEWy19g2MWoSzusb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kWTgeHVfPPC47WVUDigoDMhcQvp4nzTZCkEdhwJaKE1FpMK3NmTtSPGrttF4Amh6AEDxQ8dVSjCyMsoUiNcpgTC",
  "key1": "4t7SKvMG7LQL5TetqGbtHz1D48RGmQ88hp7wvrjYDW6AsQj4By6qd5Koofp98hvZnZb7FXUAdKGWNQRWSapbRLuq",
  "key2": "2YCMwLGxrGuZDzK3S2RpTSdMbBzwpTvkYtAcrh7mZBAPauNAR6mcrjwdrSGGzoGxxr83fzf4V6NhY29FhytqwVVS",
  "key3": "6o7QBkCpf7EyXxMdotfBpjY1Mx3NkYnvyphemAGtiBYKZ8o8WEJ7K3JS42otBP6qgjqjE58pBxmMu5h64WqmPyq",
  "key4": "37JtoPj5899xrsCMdoLwC4spp1v9hgpT3yP3HKQw7dL8GFmTwD4i8n6cHvM9djxym48U3rerWKr45KzvqQxx5JY7",
  "key5": "62HWQctnnZaZrmBDdskQxkkVNkQKajw1Gw1fat4mgsqeEFNMEhyaNkfbMpZuGBkSPdva2NrVmcrWo39p9q2iQFPK",
  "key6": "3jcFHcyWbN45DXJ6wkYyAANSq9emznmakR1Qtb9sxPPwkfPowM48y4qJzKmmg142QK1nfF14vniBL4t1UhquE564",
  "key7": "4B1CjXW5rYquPWNiKZEF6gRjmPD1izXG75pEHhNaDNyErZD1DMiovNPKHKRVgJGtYLHYtdDPk4PYgwxkywuALdzm",
  "key8": "5uuiB4wRNZYn38uSSSDf7QHmAqo8bivCcE4QPccQ3rropk1YsGpmTNHRotrU6hbEuBACCHVvs6RqQTPq7i5UPGvA",
  "key9": "2qhSH9VAZyKjgzAFrdHqin2aUGqjDBqtxcjS4V7rLFV1BetkrYun7WP2svtd4t4c9dqMxSnkUkk3wW9WFjmP2phs",
  "key10": "3bWsNHsd7QHGFp1nxQPPRbDXtP8tY6SsLmvMXn8ExrUj1xfmvKSqKVetNkX55zJVwwE2G2gpghYXb7ooz5Zf8t3f",
  "key11": "5FdQNpMhFUDiZJHzk8YNfDCL9Tys7ptNhqPHJuyYy4Uo44fLZRsj2Y8AzHboTMz2GkxPigmEAteVhMzxeQy7d33X",
  "key12": "2Eq94BPJuGfxfxS8JTaLVzSSbhjrBAUBWPZEaXkbdpW8S1ZkJTfrax5R79u6gJCxtz2CjEscR8ibwZaJEgfzSGYn",
  "key13": "5gfCPYvrv6SoW2d2VihbPjZjHWF3uSYDaM6c1QkTokP1LS4YK5EfgUaX6SdzhTrq93vxGvY5yNiy2avWPiUsCnvb",
  "key14": "F81r2pxvaByjyc6fgZ1D7RGFw9D6WcZcE4sSqqvGm1BcvYftzgkY8ghtvys8qz16khq6GyT4wUdgwfxMkKaPy48",
  "key15": "3gS9vkeUP1KXHEAKZQddMz5Nb9juLDT3TThUEAeiCLE3mFTnpFazpUdELhccBKUCnSj7HaPBYZDAfXgtxSEmpjSV",
  "key16": "G6wvvRrCUqbF9mQB6ndiiMHKMUSueSRpmfyi51f1v66mTCkcbiamXQMyK4ZeQr6kfrBULh5hLvGGW4PueHYYXQE",
  "key17": "4EL9wjstAwjFMLmJ9dciDPpGdUCqa1rdbCGjTnjZu9Bj7Mt5FEmUuDzuBsEJhk9ecsu22kt1p4hAUhCa8zZQzpuc",
  "key18": "5v9nVWxknXvTRtj81mTwgSNLWtiNqRzJckCEVLKeLGgAqvZ3ma7DBqfUmL3H915fV9TsDMYQeMqZLm5q6jZdgnMK",
  "key19": "5tAbEjPZKGuXM1QTZH3BW38diDjyKCyChRBykMjrxQpbSTduHMhr4xmi7x6L6W1EmTeRHesZdBMoKunEa6oYxzU",
  "key20": "59Jht4yEMuwwS51wMwiGVX4kuUHAGAUtW2ickAwxwgDY6xggTar75oyEVJZ2Lgd87noy49SPxiXrobnBJStjmDtA",
  "key21": "2zo5a9V2EDbVTRHpLjW1AzaoxZfZt4kmwj4g91itTxv2PX2NT7bCmosbHy5KEfm5N2g2VTXc5ahyEvsiTJGRivKd",
  "key22": "2YozZUZ9npjDxUu9MxYW8puXLsmcMNNdY4C4sX4UNdjnG9jGcC5nKgqBsptXGTPrc72SAgYv64TmX3A2AXpg8tkz",
  "key23": "4LBLNtFogy79Z1e9HikYZeNcV3txW6aHNdkHd947hMEq8oDxbyTNcyrEPPDoccT79WL9JaBRwAdSMm6bJ8STKHEi",
  "key24": "2MrpFCNUSoSa7RWRsPmDeve5FvckJHe3AUbj24fppmwnpbndhRJ8eqRDfHr2MFU7sK6GLA7uHJMPynUMFJZNfKGk",
  "key25": "Qb4jtp345HRCGBw2XEshJ3N81pP6eDZwRE7vWmpf2WMqKdLVA63vyn4ZQ74bM4CAzKwS88ZV4nmMTZbLETttWVE",
  "key26": "3PihXNSMmoEb2ToVmK8QF69wHKp4UHfAUKq8FH41Vf7iECvzqm8ue1QbNCe55SszL6sCkARscxrFdq6qVE2HofNH",
  "key27": "35TS85XkwwhuqArWDmc79Nod5uQTtMcUzcztqceRJ4yT9FFVh2SzNEz1V27utUkUTh1K7oWmGF6WjzpDRWw7NjiA",
  "key28": "5bGAVe1qK4nv5Gt7Fv1KH9wCVXgiC1foHXwV7whCtx3rJS9GqVzR4QiERh3U2bXn8wf7bhEAGNtYAy3LzyXbw1oG",
  "key29": "5DgxZBTdREFnSaVTY6DieVHNJAi7upUCu7PsGq6E8T6KSbPUHphvqtt6Dz8FuirZ6BE7Qndy1t3jyN8WakPZzco7",
  "key30": "4XAojGYX3ZEzPNKnzuzsUKLCSaHp6BeXiuA3KxTp74KmtFxMufhKb2bnjSYudRREAVEkZaxp4akHdY9HszTg5d8r",
  "key31": "3pFHfu8o2x7ztcyu1RAmxmPNC4vjbhFHzmK1EnKhx3B9PSs57BDEgTTSefvowEQ32nBzvJr8dvZUdzdGDxHvSKTr",
  "key32": "3WitKJ3wyELxkeGi9vnj8ncebpmT1Rrw9md9cwJHAMCzHbRondb4Rm1R4rBKMrHAXFqfkoZrFKDXLTLRyfZzzfdK",
  "key33": "53L2o25f467h1zB8yziuLPcN3rFWzEJFVoKxJXGostfuqR5tvUkB721MGgTeSqWTSrUpFvwnqmQfyWczueHS2KUh",
  "key34": "5WdEZnEsD5c2Tw4USHxruXQc1k5tCjiSwEW7zb8kByJNXEpi56gymYP3v8NSQKzdwdYSoabQ6V7QRE1M4EnSLJYN",
  "key35": "2RPFXfpKKPpWnTrxw7qx6dPdY5NhaFihaSdh7rR6rSE5UJGADPXJsrKHiSgEHsZahvSrLnjAZR5xLumjwZiY1Pdn",
  "key36": "4FyMy8sTh9iiD1VuyBnnkVo9heKGsFL4n8UedJhZNFLnEupTncHsF3ELw84qCrgK99jUgs44xL7czngnoRTKpKnf",
  "key37": "5eNLaE9dHjbrbReKD81Kot1pzytqsx2xWGaVasU7qEEwxNdtogzksiyPofu9mKBbgXEht1hEt6RTkR4eajYAd3mp",
  "key38": "LL3YfJc57zrRxunJQG6J6Esi4fFQ4tsjfmUHe1X8g5DaBVxgzdGqgLVTd1VGyns9RbKDE1AyKCAMq3uPNoQ33Fi",
  "key39": "9bzrhvmXKnNspYz6rhaoh4QA7B3DHmF5LGBh5y9FrVwfzfNihZU4JGJq1kDy1Ggr2hAM2jcVANdBBofeYsDKjDg"
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
