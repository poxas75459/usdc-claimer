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
    "5vmkodBorDGGdf68ZsXwPmv9mgtQAKdnwi4Lkjzobt6s4pB2fZvy15JxfaqTE1D5kecxW5HB7isLgDuJh7oQL9ki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CM9grydzy4e3AvBnJbSfjLe8inyk2KBW6zSMYX3CxBdo7jQuodJ8UPLdWu6Gv9WMmRVj1zfL39bLXsaeNtrfeWo",
  "key1": "3aderdJQU6seWv9h1UCJPVTSC8rLyChue6kZESLKe6jbCuYzep5oPwjcKx1kMnDbb5nqnJaAmhLHC3gTGzKf562a",
  "key2": "65nQ4zQz8FK7zeL1BNxgKkhcp1T4ai8CLK4L1PEMX2o4vJndY4hZgbKTXH5nwoBENwVxJY13FaFYBduMuA28aKrU",
  "key3": "3w2pQTrh17FTb2KEkQPLNfwisvNzxDwmuTPacdHbujgTu4okdmpLgBCDP1g4Bp3FKQuXmKnxpacuivG59ZmppBKF",
  "key4": "Eh5mhPXuU26n58JjPhACZTDKfHJhbyCgGW9GB3o5A1bAKq5CnYKyActg2GSfLt86AEWX216isab5EAEJPJJnyvW",
  "key5": "4j5hxmcKRiEmWSuETKLTE9dmXHtxYfqGyimkJzopHzefNP2zYDpm3aGo5mgZf1xFCddbP3AWEvPPt2oJYSQf6WDa",
  "key6": "4WPtaCeW5kFS8qqNEmPkRKzEoB6C3PEaBrNTE5631miBcGFQBmx4tjzvU8m89gMLMR2bDZMt5LjaPAG6LrezW8bE",
  "key7": "5AUjeEgFY4Et6kMWwRaptMBMELanCwqWjPv9DuzkS6gY7gWfhqtaXj4GkbEkf3ntwLAwcbjvWbCJYjCkBNnnoxqx",
  "key8": "3ka29bP6Kr66y6XmsJSogbVPQE2u9N77vk14qbaieVojZY7jdV2jebSAxZhMmLDvkDqEzBMHkWaK6jxFf2bfcHAT",
  "key9": "4HCQBhBhzkccWew9PvdmhnYzh4QnhVwYzuanhoE5jgzmNMWWK3avJkvLE7hja1A7PQcmesCNd6z88xSKbJsxr8XT",
  "key10": "2Vr5KvXhC7Z4fRhuGC22WvVFPaEUGAJbXAkuYDNptLgGnn5ed91mwuJxAqgYdecYm4q6x5ZvYCs2fLrTinhDz6jv",
  "key11": "5VM9KiXrwBM215hq8hJQ4tij5MxAKMe2DcvmgYENCXJHJmszA4W4ZQ5fhXhH7FJEwSv3NgaNeVsv4dFJN5FZBu8a",
  "key12": "3b4Nw2C4R5gj6JRzfpYZMrqMZSNoEkJzypomTRDQ8UVp9nBqPwdgBDeZLu1PYcGcPq97CHxfH7FbRw1jdY8QD2pi",
  "key13": "2okiMZqmBGJycYLcL5h3kqdi7SogrAon8CyzRkHz4WLkmxssjZnezwJCZc7iRZSvxncp4BXbJqMuB6C85y5Z5piM",
  "key14": "3XCCeacotBZPMAhycS1uiavvXDuAckyFv42ETbr5d2dDiibHy6ME2Z774HzMmTpW4UUZq9LJdSGb2U1TbRHMEKHB",
  "key15": "5BZFPaZDNRxFnQ5CNC3WJ53qAQsAUEbvtyYYEPK9B3fJA3HkYPjcUasAx46eP8WHmD7acszPj4hekFxkpk6uNMYE",
  "key16": "u2eubHc7DpWBnz3chGfwaVwJzKkabQbFrWiUaZTLUkr3xJ5CtC2ikrHeraUszwDsVkAySaXNwy6sZVrrMAVveow",
  "key17": "5b3u2FqJda2B2FssWMNPHKhwNVsyVzXMPTXMbS7eprRZpDSnLAKU9V84EvL2BwAMc3KjkhJPQUFuLHCVaTRhBkRs",
  "key18": "2Vg6AoeyBSsmYwDM5BaV4GNMvb8RcwV5NjUPnfDhVqcBpWncMumDH2XpXoGZBSjiCeyLftBPLLz7EuAcRpJeEGTi",
  "key19": "NAcg4cymZcFLNX4ee3Dpgmg2YsNgQWDFTLDwxf5mBxzw5u6uJHk9GdhkPLH7ThbG3gFDPoD6TEwe9Dsq99rWCwY",
  "key20": "mdE8TZAKRTsdgcQ6bkMTr8bjcDtr4jdTaWwnWVENMVKVVUBKWvMg8UytGPaCxjMzfSsZqeRrpw6vLs88jYskT4X",
  "key21": "2iJ6uvS6Q4uuTGMZFB4GrmwkDhfkJ5pPt3uqztbtAS8MtAreSgbSTUcwJLb5wyHXRSzL7T67usghG9Jiq2quKEuC",
  "key22": "4DFTCX38oah4bMDSd1BcjEY8EgSmsspxhbXD48PDaXzRMRrx45mifGr9jQPSCvuoyWFrr7GMYrUNQa3byh4Jpg73",
  "key23": "3EPAsSv9QA2DgxFrdwM8gt75TjvBbudRe1moZ39C5tCt5dhPiZ7maYeUX3Ug7jpcETMneEh8RBeDVLxEfRyAEa8p",
  "key24": "2bXkRKehMHRS7UEFgJZHVUxUXBAbxncJMveYXFqUETHWnmSaoPrsMxt3V7W13MRSwty1Lakgwcr6L779DjKfsAsq",
  "key25": "5MsLg6dpdpav9tDPrKtaxvJZduCpzx34Bx3Bfg8ZZ1MmjeWxFPYneTJJ5KrbTzuAubDEfc8ZZoFfV5CAsefhSGWf",
  "key26": "5ZmCDQ9eycLTLr3thA1K479TDNPgHHwjNhspX3197fanRhgJsXZj8ahn5bL97C27tGrsJv5kJY4FnxZho9ryJoPt"
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
