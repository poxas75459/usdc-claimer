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
    "CrZfbk57YnEz5BfpZmeWYQVJrynGAoDSEJZBxk3eY2oEcukHQdhk4Nw4XGJQAmbfPiSSMuLYitjMpyaLFzzhLMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kYqm3ULUUPGpg7uGg4y9AZJUtsQRd4J6AZp4r3QX3vesWUHN9Qd7tccRd7yzmhSvK5b78Z6iLxLAiuagiqcbyAG",
  "key1": "3HENi9h72D3p5xTrCD2EM33q5YQ2MVUJhGrKndL1iMrFnQ73unZ3ZoF5c5LShfmdVvY1YAKAivtfsdZtZBsAMFW",
  "key2": "5BzttHAbE2RrPCCk4PdSYNypcNhnVWUejsiAj2zH4RhRJ65qsvzKvnZ3ErodzywRr2JjSVqqBeUnsVVAtTrkEU4u",
  "key3": "2hqVHxVNf3J36ByKGisbQKGT4S2gLejdUjvD9B9GLkBy1M3bw5JyUqvdMgPSmu1oBULu2WHTEPAJZyPwMPkEoBKk",
  "key4": "3rotwQLw2ubHNp6kjXkyw1knK5xWA7rjLqiGDXvG3sa28za38rMESyUhh9RAyimPWthiSTzApyUQavBChmLbcRCw",
  "key5": "4kSJUdmTxo75DBxp3eL7bcGDJHstu1zTXb5QEmERFmNiLD3Qzdqomc54qUSLcEfdUiApGqsGCqa88U8FBJ8Ax6oX",
  "key6": "jp2Nq1Qr2Kg23rVg5Yb59jcCkRuXNtrG8D5dTPKakoVX2Gbjg6LSms89JSrJQVxnJJhFZeGUsfoncpCiVXYg931",
  "key7": "2fFe948anF7VriMY6FFJrS53b2C1RY6hgFWnPAsSmY8x4rhnm9Ztw797QbaXc9APZtTXoVnWT2xECdzuxJdU9duf",
  "key8": "3b82X8P9pck1p3a4zwA53Bu8BkZwvoyjzKcwCER4nawytqzNWZMu5goSJMXEbmaQWKCTsP59VyrPCwocjkN44Y69",
  "key9": "5y6Z7xj93KNAxvtrdcsvDWG1Dt6h56wvYXZqSZUZmrxHs196AkYoUbjfVgR46BcepsyMe5Lxx3Xct6DvTSBiDCPG",
  "key10": "5SYnH7shxREVXhSfbTM6UA93uPEBY9iNGonQuhakxU814T497dPLnux7X7UY6XehYNYnxzVnf5A2ZaQxpM5tMn3i",
  "key11": "274k4SP1G7tbiWhxfXDvpK4PjHMCwuihSjWCLxkiWcdHzHVnNSLieGBBVEff7UcZgh4QmtqyMRFrKbkKA8Ezwmgh",
  "key12": "4DGpsvwky1ywp9wqSZSDJp8cR5SjvsGgDwe9we4i5nmJGmN9vcyBxFD5Kxvok66TVDEezzWcjwkbLG2hTgkV4Z1j",
  "key13": "FKReNe6CzVXX4rYRzHKkSi25BTiTtrEN3qy3vj32iPL2HhGELTdmT2iSTLFsDaiYcojEVezoDUmdmHvYp9c9wqS",
  "key14": "64wGdufJLTxafM8V31hxAcmbcdz7KbAnwq3fYh8VQwgLJqWwQgwKXtdhemRupabgZW2JGHZDUe8FdcjLirD4UHe4",
  "key15": "4iLSHP4XbPMHy9CWYu2jN7qK3ce1ud3rEJsb3pZexL61K6hX2C73eUdVGRE2oSprFMP8f5MBDHvgUyh5GhwjEUmH",
  "key16": "4q76k3xbMsB5YTTQU8bqWpSRLotmJEtR73BQdkvThmhj47pRsmddy6tQiaUVpfahJqSKAccrYWCfL9GAW8qaMEjH",
  "key17": "3LcGkzkjFfmGQCUDXiE1tLPUNrY7ihb2oDHbhEUvzkJFG3FktD6ZmATMoUBjwUjF5fwADNgo1HM9uk2p4fo17Et1",
  "key18": "gYTCPASi3hfQWSBg7fBQGoiWuSMbmYPkbpztwEcuuUb4a4EcVSPV7t3whdrJcKfje9gjCXfiPVYdCBNXCnGdrAy",
  "key19": "38JHDGpZuT7t15Mrk9aiKQFukvQW7D2j1mHqyPbwqbHXtcx7hQqj3gabYRHqR2Jj9rN1JCK736GsH6nGyADMEa7",
  "key20": "27bbFn6ziASZJUsBUMWjW3ipo7YP2RZVMxvPuwzYKWzrp7iNcnKcFjipdHwEiKFGVPEB88sZWGY2CM16GmFthmwr",
  "key21": "28gVcVPoFqN16YrzsLrVJNse1CYP72iBCdHxQuDCQbVxxnchDbPMHraH8a9bbmjPWx2AAgAHdTrBMrwDyqxMhVBi",
  "key22": "d9P86gfBVGHLDhwcd1g6ZZVWMPN5Nb4tJ7yDktNsFxbaHMzaKnc76dzLfAeepUuWCWQ7SzLeLeKos2g4xZTPi8T",
  "key23": "5EbUTTECkLbhw1e32SnHTsdpaVZvPiHfAWo4QfgrQJu43EWCsG15kyXbDr4CoEFVDsJ32G7KgpSgPfCQgwXKjH5x",
  "key24": "2pyBikqSKEBG8D8faexgzdhwopeGbmZ6GiKpwwAJWCQ7W2XMQsJRv46k3Em3LpeRidV7V7Wf5QG1jejuBp8evcnb",
  "key25": "5hJ86WZB42XzfywQ9XK21wmW6YFXL8Jd7dr5ZPDzgDkCwLUts4wf6X5W9SBTwKrvQk1coWTcJbbPYveZKuWzesmN",
  "key26": "2o5Zf6HPVy8FgGvivr4G1RRf5PAmbLZGvtUXNmk8ShvnZTrjQ1hcH3w5EWv5h1m9ZuLdQKFxWpYEZU1HSnwqAnx2",
  "key27": "57wBFh5yji3TSH4eqstKSavHzi4DbMAHSmdt1GJx49ua1XkzLLGrEHDCERVuVjDJGyQXXAsvcqSHvw83y5CnyreQ",
  "key28": "5unrNrU2Kevynh68Z8BQjHcnCXD4oZyDsyP3fzdLnCGVGjovztsyF4mWXXprYAjsYXAuAJnSTKGSqJX9Ak2oG895",
  "key29": "4Lh9X4uy8J2yw5T8Na7YMjpL7GzUVcKhu69djyskpYPrTw7fgBdWf56MvWkaPwbsEwy35Qy6eZPGCDWG4CJzaTuy",
  "key30": "2vzF2mcrRkj4LPNhihmYYtWHEhKKcwSsQdQMBQFeBbqLDutKEiEMjAzihQ5u2KYFD4QvX2YUKC7fj9qZFTU6Ywuv",
  "key31": "WdHgaMnau6nevbN936tTv899E63WnqzwNYE6JieMiXbUB5or8hk2bDDpgFcJURYnZTtKN5twa5YK3abwC3Ncw24",
  "key32": "4imhzjLjJJkJAJc6ppTAAMEqWFr49eubH7Q1Lzce1Ru5r5t7T3MPE6pgwUu7wHQaihbEmhTH9zFksaYtxm6uH4Bf"
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
