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
    "NCnLijuY9qHBQAPHxyFjZsBBKUKVvhEzjD3VZg7wwMoZEBKxvtu9zzum6NvoTkqnYFaQ6RK6XgcoXT6bfg8AK49"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J4essZjzJgn3p84F4DThUPECZkESN6edk4VeUUJ8aYD7SQmdoAodiCm8qgmdioeZP83beU1oewtEC4jADxcSzYY",
  "key1": "43cq78bG3i1me4iaxhyPo1bj3dVYk4BSK4PHUPx2CxZitWxVR5TEM9Kg3bi3XH7b7CmmikQ6ov48eMTLkcKgaWUL",
  "key2": "4xj6XxKLiydZBi21VXRMWfZHaYSD2JuFDB5kv6Wt7Rd6Vhzw9AKAkWsmiFBgmJ4BVyZFghYss14RKZRN3hVssFgb",
  "key3": "3Jg2JXxhSDZwGySuzWAwTSfeYUwtdgmhuVqyNMxZqGPLRACqb9qs4i2sb64uwB8f1sZaSsNF1QozByg7DaqF7XA9",
  "key4": "22XgvnyBNFjgtjvCmqd4ivi8cXSRedHJLCcbSErH8cgRBY4LSsVEBjqeEBqk45yh6QmZPGw7ceTvXMjRUAfbk8Bg",
  "key5": "5Zh29BmLTFmr9bKdmZyVb88yiVwZNhDQ2dokEwHSZuJ8fuP6LUcvXhbeKL7GLWg9617BGdFaac9xCyPgRRXskxTW",
  "key6": "4VBoyafdPJYLr2PjHRbDxnNRSuMgxDrjz4FmkpYDAw1AtK3cRbbkSmu8iUtVxXFidLC7MJkfY9TufvcD9A2Z1cBr",
  "key7": "3unE9NvdHt4osDkqaZHbDpkCqF598PsuwBH2LZezqRWw68cZPghaAqaMsYjVUUofHA4i915nMXGaF7HdWU7SgiNH",
  "key8": "4AxYCmfCZpYuiB6voV3NKa2z9bq52ZXMhPk44H3aQJR5ihof15f2WtqUtRTYVhky8NZ1Env542P7JfaEZKW7xrRN",
  "key9": "h8DPAM83c13LsaPMjaXeA97yCg6cKwteLGKFUcBuu2zeM29C6v5WKTaVbyWRvZrSshhgrd5vqe1WkgAJYddw9WU",
  "key10": "4aRs67SuJSgezWPVLEJxB9xiPxJUHfaH9sZ3qgpWkjLdbEufbRYnsrfwkXQiJH7u6UZNFnoHt6zqycZ7J15Vgdrj",
  "key11": "26f3iQQ5QBpRu9xZuV2s2SFEZs9PxTYEEVhs2oTJTYw4DSuQnjkjcsKaG5p33Ck9dALPAkRV9kr93f8UQL4jo2bL",
  "key12": "2DzxYqKpeqDSYHnnzdK47LemM5wLD4rcnZZN75DDvtcGSFax1UZP4SxNnjQK9nNEXiZiUdL6PoDqKksEbpAT1wc",
  "key13": "3MhrF1GXb1yHHeMAftPd96mXk7JKDa4kegBsxHjmMd84AwbJpz2hBVSyaWizaKueWWYDJHuVi73rAJfgLdGTub1R",
  "key14": "3g6XvQM1vked1ZjMLNDt4YkLevrXwLLPb3mAHBWyDjvhbA3CuXEFHAKwyBk4h7G9vnVY4ZaSJDDvJUzA5jBZLGwF",
  "key15": "PSGLHHRKj4v9Z9tNPPLzjzj5qhrC57d7963xWLw4quMbkqdfzHGV7oJffZ4iWvGMcauhFE95TSisEJEz6riMcnR",
  "key16": "5f4LjGPhNMRNcN2Ydr8Bw9eZaFdzxmWpZz2m23inrAaNwE3a82Gwg5UvjAHP4saFJmzU44Z7zCTQ8Yt1rNB9C8LH",
  "key17": "CzcFMVPvSzQ5ag42g4uQK89WmedAxr6pEmj3tEPpiu8neYWGvk14rmwZaX8mWn7ssJGMrv5DWhnYXBNFYSyMs6B",
  "key18": "2HnEKKUEAXQqVafVmF8f6cKsBWjvjUyJ6rFkkay3A2L4rEcg26EA97rZAiWyX4a7XBYMWkEWtTuK9ERszhXuqV53",
  "key19": "ESJwKg85uG2qwW7MtBggc4nTpJfTmUW6HzdiqNAnZmHtx6Dn4NiZ8Ecz5JGtLMNkALg64G4PKU3B6UPBAYqV8Mz",
  "key20": "3Pt3EWrxJHgVyX1P1keY4jgp8iVku22DrvoRXH179P4WdsP73kwwU6EBu1TjxtEB6p12f2sMx4f9Qdp8Zuu5wwDw",
  "key21": "5cbBNs1a2Gvg7hB29yxxWUp8Z6tpcuZkC534JyHFqnLyTiQQGsg2cgHrJ9ftqgkR95WjfdC3HSnm9hnKC9JKigJ5",
  "key22": "5Nacr6x5Xcmi9wprf5v1kbosYmPsoMwzU8FKtDbuRHhp147jLQLSvoozBFMuFBprghiu5jH8oyhNdSnk8GBtJhwk",
  "key23": "3TJAXJrydfBYPCYDKne2NtUfosTqauQ9kdp8xuSqgrGwW191pFvJmsZtEafwG599o2CHwzzq3xAXurBMpEzFo25g",
  "key24": "JQppZD2c42iZMYhk2nk5BD6HedpykAqqZxqNm7BcLW3w7MmvjSpw7GTdq8F5LRS8ixbWyZyDwawTWNHdHKqDgU7",
  "key25": "3ph9Z94gN1bTbopCaBfvqPLSPS3dubYJSuuyiLyob6baXzWi3KCFDoAD5Lk5N5Fj8N3VTDem8PK1KCnsL8SHLXsH",
  "key26": "2BkaNczGDZtt67UhxtYM9s56xEVY1MrLd51xacNHu2YUWTqh1mPnExoz9ktZw7ifh3fNSSPmvavBkEoPduJcFaNf",
  "key27": "5LdWNQRjhdJcaJEzWFxFEigp6MmL5CeLczv4K6ti8ugyTCGRoZ2K5SALhs3JdYoVqENHDqkW1HyT6MZGnmwV7AJa",
  "key28": "qLbcHqYtSyUh2aSU8Bigp5oJS95yCL4yDSC3fU4MGTf1D6YgJt7dtX6UCQGJXMrarLpgMxLob7JWsGouPQ7oVTy"
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
