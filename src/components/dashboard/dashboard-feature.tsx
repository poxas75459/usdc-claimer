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
    "EJtbwcHwG96dTVtXtwZdn4am8W16y3Lkxfjt75Wugz7JxPMKX39vqYExAsLHWDdXkZoKdbntwiqzFgSqCooEDyi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yciy4bfNKNFFfgUyw8jDBDuoe5AgkMVwLanfiqCkRikbXmKMRafm3zU5pSrdFPmsLh1KwPx8Truh9PBS7RTFApw",
  "key1": "2qTtCLhMVd86EWSrikTRXeQoKv3LTZH2HmJP3SZgaqAcDXGm81npbBwvYfZGmSQaGhRyLQr1ZQqBpze5KubSsUgm",
  "key2": "73Y5AvXKpvX7KquUwMhK8tnudm886et3v36yaiqGRms7e4sGYbK1SNQfigWGEWcrGixY3ZsSx4VMEboDQ6uzzcP",
  "key3": "5Wchx56zZtHZvT7s3XwZnJESggth1CoM9vUMUTQD3EZG38gfiYGeY3gqdpSrxeZujDkMTtS9C6wNkyF2uEftjwR",
  "key4": "2HTyyZ81fi4AraTKcE7r3ET4GkZbRKuLTrQqdiCTkTWEpZQmQAtMHWHj6hV9kvZ6mi2Nn9rEareQAWjDqzhvw34v",
  "key5": "keGNzxVbfusuJcEizXwrKuivt1tyJTkaYe3cuVgrja2sJwLinrgAnMinU3jdPWRbXLxiCCMdr3Ypy3WruGhyKDh",
  "key6": "4MBK11WdNL3jCYcnDiAuTxmyi5CZp2HYShRgbSb8t4WhRAyfZgkdCf5G4pMgX5R2PZRX82u3sveedAgZVnBPYHM5",
  "key7": "4M6ohurAFKMnNmohNMddJfDuLVszMmNLW95hmePKsjE5h791uo6VXT2u9itHXV9kiQE1uwfyZUcnRm1dMtr3gpjP",
  "key8": "5CAWsTHZ7H1GuSLsicfs3ReGNwWbjytn9iHA84AWeUykCLnNHAu4NdMgHun2yxo45qk2jvFZeYJSZAjJ7MzxXQs7",
  "key9": "xJ5nDHBAh3Z7MfFa4qwg3rgSTEjLpm9ZTeTcWfU5iGUQRj5DA449edzJ1K1daV3Cu7sERBYWtPfE3TDeGUwFqzC",
  "key10": "4jnidpLifgqBj8SFHNumr2ruzmJJffsPm4PdYFi1q8Wu6HuYHnejS1KN5kTkFn9owJibC9RvMNa4mVYucEHfwsQN",
  "key11": "4U6YZoGq3Zge3PdTtHLcjnaeQn1EoMUEQ4mb72JKEG1FZhHkAaDA3Rx1eeYDudMSW5c59ddpLxYjVE1qVZddAMLq",
  "key12": "UtwjVTutRi4mk6S8DLFSnMiCELAWbewUQeuuGQs6NPDUxDF64wHg6FvtRmEp9N3vvEupZaArdTY7FZXnt8GDrF1",
  "key13": "4U49VcMrnZdqS8iaNGVETAsaQwjPPFWnzassxtFrwB5nuE9PV6QmdNwAyQfKEUtRs3CFQHHjHBBrph8nU7ufa8QZ",
  "key14": "54XJQWy5mbGTtrrP587fBYPZpPEbKSisNxMfPb65bTkYLH939Vq8AtzBp92oiekHR5JUoSnmgs96ZZGBrC6UzRQF",
  "key15": "4n94FMakpr4QKJgR77xc8eneyHkyrcJDxTJB5m6cstur7xcETMiQnpKEPpiVScwMEgAHjTyUe2DWRAsqhbEuWuaE",
  "key16": "2LzmrrJwfCEhnDbnwRduGVVqMrhCGMDb56gFi2ekKXtbj6hv1wCqBSirc8xgudUCTTF1BKBvmGcA2NhftwSLkfRb",
  "key17": "375gCYCsBeEDDhuja8jVV2qTwrHkMKfcP39zFLZ3jva1qsM7Q23msSR2pNsZ4o22quPcKTqjvfByDwje1uRdV8HT",
  "key18": "2k2ANirB67pUHiePSghTG3swFg1Lu6w7kqj2FxkcYqZ8VqVKPYK1yWmtjviUJgNhgw2kUuRiq26hysmqM1iMtpn4",
  "key19": "5tZM9o6fRJaUWkMz88Ci2wzNxV9JwdzC1TKpD1ts5XH7zUt62J71UR3QdDrCWQfvuKaCSCx1XeWDRParwreikj7x",
  "key20": "3tDX63S97qectmgkUSgwtrTVdg8JE7bEHwTEbPLbTXK7muzWrMHqL9zUv7sagBKz8EqYwi8SVAxrXzA1gB6mBE3E",
  "key21": "2tTeUU4p9yHpVkDA7DTvLYfwm5W7aGbPmyLCg4Yq7F5koBXiiAqdwbAbNop7ce6hZMYQmpxw9deL2jDZMtAK8wKa",
  "key22": "35r7sga81pHYFz2eL6oWhcw2QpwtY3fw6LxXyQf7csUd4iShED4obHHFHGWaipeLChpAjRceEtiYR3CRNwpCX9TQ",
  "key23": "PKYnqoVoyGdbmuHDT2j9fKuBuaVHKUQMfjwN6Ymn8CXGfFryWRivZ2oWj24ueL2RJBXciyJYfZuAcVQwBYoC8gx",
  "key24": "cGKsxyavkGiaPKiQVcKyq2pkezxW6xp8xrHCdStkEgLTRPWytA2LSrQh2jDwpPjZs5L4TwuHUEmVRXuXmNe1FGc",
  "key25": "28o9n4XFMJGTe1D9UQEWFNHE1k9AV3e7XUnucXKmMLWFuFLJXmLpRn3rTVo3fW9YzQTcakxhB3tYu2TGtsSTjHEH",
  "key26": "4eRxAw5QrDUCgqTH3w3MyEoPLfy7BJteAssfddXkqik1cQHaKDAFy4Q3gPyf4ZjDxtMuApeULtaTtN4ozAA24hAR",
  "key27": "37UxmhxmxS7eoscNwdZqzqHKxg9aLMdYdgFEKi7zbrhko3pgcfuV3Yc8SEcjKANetd5aX1g86qPRejkXFbH9fumV",
  "key28": "54Su9KDtSDkuK81SHcxarTP4En5rJ8rbjtkwMzK3DdfmsrMkFd3h5wFeFTagjLrEJ9mNZYxr4GHJHnCk7R1QRnd7",
  "key29": "tmArJwQFYkduHnaFeBrSeuLa1GWHGcNahE3xxSwxnGFMjwTgMLGQySLRa2hupV3qWDAbBW7s7ysnhFcCg1w2UVt",
  "key30": "4DQYPHhvbMKLo5NsgGBFAsu94GSnePERqjtEGZQqjfqZ2WkoFyMHHVs8SNodXbJyGdWD53koXnmSJVB7SnP3A42H"
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
