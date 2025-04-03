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
    "35PMuWU2ZtrxTQzjQRmRwEYTuJum7WUxAGBbb6AHVy8xfNtK3HSkj2E6oC18tSPbBAUhXuxqdPizoMCbGuXwHSWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bfZY5Jm8GhZsRWGHL9iqXb77f8eT2wnZUbQcUgeFzCrnsBVQ7WYicN5Rwr9DAupf61w6iATaBN8sZd6e3vcAExN",
  "key1": "3ULTuiYGTsFqzb5b7UB9gSWGyPD7ELDvUX8zekqQgUwor4PAkzMw9Ex8hrRkJGmfH2EvedN4xTK9UHdrfL316KPt",
  "key2": "2gaWKwd6V8ntCEMuoEdj6iZkyknoFKsgJiDwtUHEywKiFKaiVpYtAMF7eDpXJASGMa2uYxmisKe3KaNHq11Tmwv5",
  "key3": "3FYDbn5vcxhAb3nHJGqqLznDGNE9yASY9M9RdaZapMpCTSpb1FTEJ7mJ7xLv2SdHV1MRTwxAQBC4e7eDxSW4TBgL",
  "key4": "47FKa5SYJxtGFnoNCk6PjB1dMbJE7CD22wvPqntWteh5Q2BSzpyfvWpBbNecu1Myqi35k6XtU3LH2uR3yj48SUw3",
  "key5": "5HiCpWdsxxfZq5D8P94nAeZ4eM9ahTwkuN1SPMVzTq1fYwfyETPj2bNXE6jRDEfpFmNm9vZGch9uHxqQvyMqN8gR",
  "key6": "2EwD1hN8QXwKaTPeENnwYf7oXqNjc54jxA4xVeRZAs2xtZu898BQP1Zdt18LVX5Kx7N2dyWQpX9JMcHqAHicL8WU",
  "key7": "4FAiWkWMREKcyUbWkWsJeJAK3SwAxib3kv1v3eJWWUvAkvVsYjC1dzhcKg6ZEqFk98faZGEnchEfeaoKxkhGNcbi",
  "key8": "3kYqwgU22xySFXMFTY2rmcFkWRPA5k9XmTDZx7to9C3xiCXKABFFwxacXZeuepNVbKk9ftBgBJL8gyXhHrg4MVs9",
  "key9": "4nGa8sf5YpGe6icKYJmV2v3mmWyyXyxchW6wExtFB5rue2sqXRBedJrq9zZ9qs3mkCEH3f2apDnEyz5zgigVZ3Lr",
  "key10": "3JWsTkHLBjTHPdtX6jqPKoEeaYyrcqZPLbrLo1kxnqqqCsJu5tToGDhkv6AAo31N4649MYBBp3XZuJ9xVm1iHKnP",
  "key11": "2xqBXo9vxG7QyeKdHVrdKvGVTvQYmR59roHhqe63LCJ7HFntYyzCs9qpbMAma3pLBZpjo7xG3BGDyUeFywqcxjSX",
  "key12": "48NysgATm3G5c1DB3s2w7i1XLDe9opGbyrr1J3qZDVt4gbwyB8hFeGNYEpJxE36rgXM1wqVuFWbWjqFDEVDh9SbT",
  "key13": "2QztQfYc8CJWfvLxsskZHPuz5k2PUmicNbNAbqd65uEyGn5t47a2ez72HfXqTB9jaizwTaGbkjFhMkRnNQQHVmyQ",
  "key14": "3cXFYpwT9CTkH3NY62NWUnvwH9unJh5c63eAUp4DPqDd9M6mMemG5MFtQBBPybZbQDb1KvwC2bymdeRVDDL6ktgx",
  "key15": "4jQvHs1CrPFtYYAco5oKpePuYFiEh9KVT3fzZVfKy85NqUBRPnDUvH8rSMW1JuB2qNdvajWEAUqFn7WsWq2FZiJh",
  "key16": "5HcPuH88oFGo4tXMhHbWyw9JJabKVsikHnmu6b9yFdrjM4ynycYNEj42NKE3AskydKNerNSk2jpRwo9WFD1PFWRb",
  "key17": "5j78cd4JcfkgtAKKvq4P2kDhPBSovUra8nYC5qDu6TxqR4221U6LuxGYepMA6wL5HVcyfXotmM259octkDX3dLxM",
  "key18": "48DaUXc94KhRHv74dKMEhDJepeQT2RmtWTiGLrKjvG6rtMd7mJqsvJjzeRbDgcadJ3znVAq1KTM1pgiRauGuUR9B",
  "key19": "2EYPhCviHUQgwRj1pGHv4m3SERGohGRaa2xxTQMSpo1hZxG1EsJNDgjmLixHpB6TyJJsk85N2M3m2YNFwNL3q4Pr",
  "key20": "4GJgPjEhUUf8vDfNrPA64STdYFNgeWDcHt1RSPytFEKDuneUjswdeAdp8hAr8J9MrwPuEoLxrL29YAy1X33f2Me6",
  "key21": "5XJiufvJDHvxSfjD6dkGrKbTEGtRJgHcP5Dh3kCtpeFBxwMgusvLn8QgL4KfTSyhcGCt4Nm1TmybxSrL9CT4pKes",
  "key22": "2sFByNWM2e7951CJqGykD2Z3D6E9V1RTw9YTHXbxsNqdWEXtXHhCHa9V6iPqBirdVQoxTfb7X1iDJptpcUKjaLKg",
  "key23": "1912jnYSK8jwf1EsTfq9wbJksBmgksb4CoxsCwNaa8gf5cTeBx8EeViFTJGmpCrJ8Gjm6VRYmbf6Gkpn84RVQnY",
  "key24": "3XKadFcxC5ntBTyQeSvnnza2EKJS3svy7WFA41UyTCJDKq1qCQ5ztoSw2RRcVocHbVroUMSbQde2CWN9dsg9eAfv",
  "key25": "h18VTmYq9zyLAJpByo4UMfG4c8Qjdex7M627cSZDZZ5a8tnDycGgnrfzTZBEDXe1cfZLRaHQVGBTp8yWg72mHmz",
  "key26": "arJdiwL32wrWXdYKtNTNSPSZio1BPzBD7rdwKEA8FbpzQTy8xWZMZbnZdQuRp3bLermTKRDuVYH9jNTP9d4fSqX",
  "key27": "4K4AXZ4ib6JxMhGVwQCiGp4fryk15XFKHCkgsFTkmTdv1xk2seBHxpjDmsnaxiwTJ7cimzDtB9tJthqxDCYyH1PM"
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
