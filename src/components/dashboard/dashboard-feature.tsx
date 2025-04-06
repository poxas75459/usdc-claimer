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
    "3wEeBokNmkf99rhCZ4vxGdkniTebsLNMboADxP2xUCXcQRPWnNmHvmXgrAKpTH3dEPtPcnroVPh5SKtfufhiEdt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aJCDyfe5WgQ4Ps5D86Vt3R1oiwfsV89EcdUjAQdZst171j3dM3bhpGrSd8hMjNn9UAA73c9h5hLnHXdbt6d9FBW",
  "key1": "2DK7i1VR19iCzGavvyz3iJbtWUegWVZi9tXAjP2nePUCXoGEBr9VB9RgwHFn38mSrsnXUPUfT1jMUd4bXYgizQcG",
  "key2": "ApkSY3oWrV2wBCjdCijeWno48wcyabBtXti8BBnNin1Rhe6k1Q1S6ACXn6MAPktHUFdGosPg17nE9jtUavHBH8P",
  "key3": "2Ftn2kvq33hCHk6epXkVgh9PYPbvgZxXLojcg5Q1L1uSEqaHt8yMyCYWxxoV2YqHptybs7egBpBeV5Q7nX3BrRu4",
  "key4": "hcDGssDNzUYqpoP6Zjz6jTP2gkN7xDiKLKbPDDKjoLexyc7fdsWrojcSwbNBhKChdrv9N8C2tpMhMs93rKjihBg",
  "key5": "8nwbScQwnkwQStpTxUmpxJo6asi8c3859Z4AEVPHxjJnw6yY3wigp8FiqJLGEERvJmpBZLderKkEUHGvGQbGxqR",
  "key6": "3HNrSLDNEyWxxSf8RjS5cnAuXhB9JryntePKRQFfT39mZ6rp8J7inuGAhMEd1V32KNxKbu5zQYtNRR887ae7tRsf",
  "key7": "31t7oFjL8puMo398HEQnLU21J4t3rLurEbjizGAtPambTbL9y1rVbp1pYQYaC5zFRuDw8BczP8ht9YSCcvkapMdk",
  "key8": "491M8KFT5BBfCptvfRsScMzJ6cCM5bpvBrESZMqig1hkCJ2HbYGXh5PxxCnnBZ24M4Rtig9uyYPnG7K3a5XQHqPb",
  "key9": "SLCWKYjFC7BTMd8PN2s4QVekw1yHFcxdNwC3Wo1e9ufyXLmNA6VD3uB4XvA7x1oimwY1X5d1yajvxWMm5ARf3rR",
  "key10": "5qZbUCmbQ5AowDBc6XerD8vyzdg77ywTpz5eFiJYny96uUHvU8AnYf5gt2SZrvoiy2pfTf5XdQy2jFy6K1p7QT23",
  "key11": "2YDNxEriacQdTXh8xKBKYpV6getdP1rB6k6ovNRXeKhTysDGUL92qLdsyicbQEvJeL9c9wGAmS1W3Nh79udraBdZ",
  "key12": "4axXjLH5C7j3mAPuGLZ1EhA4o4bWsGGVmkwC5CuXAih2XeTfMS5nvo2Cv34VnF5f2kFPNfuLnhdMKx1iHKWEQVWf",
  "key13": "j9vsx1dSRvERA1JVGdDkKCm39PAqHfMhJt8KRDJSehtFCNJhmTSbzASwYPtBhDCNuKMAarxDynbdVWGYpEA5zAS",
  "key14": "4oxkHWdVHKPNXJgpSXR6pKvvRW6JEK8gBt6kAyvpdVSZte6srZuYQ1bpK1oLR4NsxGoy1n4EvFoVg2BL48kQD4af",
  "key15": "5BuN2wfwyZH7u4EdBDbec2vqJaaC5NyQ3uMTiGqHEiMVrW49EBndqJ2srbastu1pRpMSUsWenCYLL9Vp3cqFktHZ",
  "key16": "53bEt5eGkFT8iWrKctsAWtihWT8w4Qds78Sbq9hJbdnG92riczwS9egqrQAtMNyZsYaXFFvJ2ATtxA2Jvnwsf4Sq",
  "key17": "4SrvG6V6yp5LfCGQR52DukTZVJM2Aak8t5X9FTR1SYjHPacPZ7LNbcaukNr5y2SzjQdLwfWyTJtPVf6AoEqZqiR3",
  "key18": "3bnYoa6hKBJyKh39sETM7Qj4QTq5TNDWcnxr3zSxv4fvuzqM5tCXyPxtrNTpxQKGjczkrvdLytMmUZAStqUz1Gfr",
  "key19": "4JjMtwDEurq5Z8Q9k26GmB5pNB1LBPdhek4uwGVzgSuUvGEbYNq3vCyZiZjx4iz4UqZFL9AuTGQfTW6JfHLmGafx",
  "key20": "4gAtu9yU2gBXTaoU9CWzxU5VyPtNUNoLKJ9hkEBQPAQYwifsSdyTbb8n3G3v41dxvCemCCsQjGCNaL7rViDcSucN",
  "key21": "PyhZDThswR8a4MbrqtknZWgR4CKSNanFpGmRAsQKKc5PkY15d6z3itYnccCUDzLbzsRY9NvhqmayJLKcUHuMukc",
  "key22": "2vUedCxyXyg9SQjaTEAF3zZPxzy6b6uvKGZdrhaQznirLtX6wmBtz8DUxMUeCK6crifzbUCBg9DaaM3Kv1nTYhsm",
  "key23": "2i63A9Ju6CZDVcocpQQkiyzfFp73RoeWZbRcn9yZxoqujWZH7yiSCywwXJzDJvP7Gu2nhMx57GegDURnbeLMjeGn",
  "key24": "2bezS1UeDvaYVm5CJs5ukSgMMeYP6yccgMsv5abMd6dz7f3Y4sewCAeA8t2ojSm7oKYnuFio9TWLNfxGgjQHyVZD",
  "key25": "3bAhMDznHPiWxDgMFgZp8hmMXCwtznRaC1L6MVFEJMKWHvWqEdAjemsKgo8hJMn2FR3zEfAnJLQG3zgcUzPBq8fe",
  "key26": "4JyXnU1m6AhznNsUcgY8oz7q5YJxrHveoYDH35q7cgTQZYZTCmG4trwFtKkMKsXcYTPgDWW2yJ4U12bxE92CVAd4",
  "key27": "32oovuCJbV4E9mYyJNEtDnyig9mVLUste8gF7AN4MkAkNiJt8FBZp8wSeZfRSP4HxidWP1dfewFS1TxvKrF4WQvH",
  "key28": "cxGsrU3TfAGTQEb9eGE3yZ6Cnn861RHvTzA33oLswaNcrw8ctCp8VypPGse56VDsG7QjkswxSjUxsKCjXUF6PJ7",
  "key29": "U4SyNsEnwJ9MZsQcRew2szV6JggSdPfNjGQNdCpn7FG9oXXSNb1LV64YJ6HVfaQFAxGep7ibrYvjRmdb1ziWwPp"
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
