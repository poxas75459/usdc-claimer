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
    "3tqjQToa1THgU4vDaquB7u25i6FVh18g3q6FfhANZyeR9akFBF7WfRCDW67Q6VVxHzwVZPEhgV8FZA4VYMMsLkFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56SWU42Xz5hFNeRAKbXkyobnRQB5BoYDyMvhbcw9ARR8hYXSj7zMhmPUwAPqVKqhRZur5JgPTC7fVRsgRJVcoVpR",
  "key1": "3kaDsBDjVCDJNw5nrLYUpuUGR2VykzpUBRwghYGq9jST1KFVFjxcu2LgtcPjDX4Fx98u3zz6YwxtaQUsK7Kepx1w",
  "key2": "pK35DW1usWmV6adrczp92998vFz9qMcreyXJwyudbSJVtwQ9BxZnzFXVVgpzzFAtK7ovmsaJXeF1EcRLkDAs5iA",
  "key3": "62ZQd9sLPmWUec7ERU5vsLworKyP1tvpq8vQdA3zk69GFBaSekcZWyR6J1Tp8gG2fvsUoswKH9y2HbKGVMZ9wfM7",
  "key4": "5nhGWQ3xRswgcBut2MGHLXoEMm1UUQhrZAGb8r5XJgFyNQg8hiW6Uajdr9oa9fWEdmuoUUxzqe5d6KdXBwUVobSx",
  "key5": "5iCcxd3tEbqNS83eXMm6jBPQ281YpoYGZ2grDjDSNBrfa1WVjKrhpzdqXThBHeyCbYUSxxu5i17W235CpUPvxbLF",
  "key6": "5eNKahRsVnzmXaPfFcAkCpd4yhxGFNe4214zNXBxJBnKhjfkSvZmCPR9zaAs6kmbCshzyvfKPPf6vKqbW3oFoA7k",
  "key7": "D6DMFNMgdc6z2BDwBF6CnMsKt1FxU3d3DHGCYEVb1evCSMPpsZeL21UKZAD2qBPHcb6X3tueg4rmmLGR8qVR9kU",
  "key8": "WGvfEiGdWcjDxwMRU2kkAK6y7Au8gd4TGQarvu8maqQD9yWVzG9GRznDvCru7vB6VjFqUzbF59zGTX5yiMfBHah",
  "key9": "4sqbpBQ291gr9U3W8ZrJULaLvniTUorVnKcanqSc4Rabyy7sZpaLpAENx2B8sKbCgW7fQbKaDhmMYxpk87VFaoAZ",
  "key10": "vajyTyjmYPWbkKvoRxb8qsLpwX5uiTGeQPZ15DRNf4eBbFmGEPQ2qgBw6BtSaquPMWJmwqkTCd598hmmA5hNBJ2",
  "key11": "3V6S839PW5FQFXHpMJ8ade1bu4yQTWkMGX5bET6JBP6bMxoUaZtGSjBvqUrhgujSuJETSxugJLqA4cSZDwUyHVKz",
  "key12": "3BVF1uvX3MJ8Nk2ZjDc5dTECEPVzGQpwgPAccDcEgzsAZZoYQEWMxqfKK2TNmd2wCqgFRCiPuKaVsrf73aW83LRF",
  "key13": "61V5kKBvEBahp9sfs1sza9nFkeBdud4KrPu96X1ULbtirv6yNwsDk5iKNuYNEBKfkcaRrNASSzv24jzq9oyvoakU",
  "key14": "4j1C5AeLa659UEBkk9Z2LY4DxwHJLGoJoPPbxndgNGGPCob8JSbRa4jgujJBr5yYb4A2TzCG9uwUGndytbWEJB6j",
  "key15": "57swNYMpgJ1vq6GjMc6a8qyN16uxmJfU72y8rpD4jto6khXmkpVRwUgFtvFYjxRfbij3MeHQNQLyVT3XBQLFXsKy",
  "key16": "5h1gFrG3333XQx8iZNSg8uM2GumoLsCMCbPSbE1VMN1EH3WJvsgUVh56xwmiC4N6B8XEbMNpzv35RRikQJYTQM7V",
  "key17": "4Di6mS96rbH4bnPKG2kQJiuqEekS1Kyb4bVSKyziZAUpeFJTjVf51gfjLNkoD5HjZgh3YRrptdvRH4U1pmBbn3Ck",
  "key18": "4e7tESSim6Ui6hGkLjDMhSEvnp8rTRqrGZrkPmLDFskksH1hPyriYcmGMxe1eoW2Sn4BnYvFsGotTaHDsYjwrphh",
  "key19": "4mvuMRqhPAGPiNgAJTPoh2fy5qDtgVEzNNXH93EXHKRyk8AYwNamiogPvN9oRNF2S62Tk3Y77Nu28hcB1KvLTW6r",
  "key20": "KqWMG1KTCnaRfRfbnAx83qfg7vzHjwWyazD9ymFwNfoyj8WB9tBDbWpm5J7UqFpqVRJNW8fGkL8Rhjq1h8veZCZ",
  "key21": "38cmCeZSkpptwQtKJdFp6w8CuPss5KnHsyhHc8NADBg3wtmdabGYejfGdsyhKi5h7DTBfuXJNxYmUgVRwHFuUyvU",
  "key22": "2wZSr8WBPFUJbQ6U6rMVrt3HMjvoPNGLBActBQojWPBbSr5QpaMEGL4jpX8bguQ9thik1cRsrgoWxib1xuVdaxGE",
  "key23": "2mDpLCrA3gqvjR9imtRBA2a1fKb8CVuSouuzSyLjd2ABBHLQzJeCnyGr3xx9GRaaRw7oCq5mxckrfCZGBixsqLVV",
  "key24": "4QESexusSgN2git4aMeQqGVk4vWdpe6vUNxJZi6sEZLpUf7nB9dpk51AniDTVNqUhC7sRL2DarB5tG7AYvuizT3K",
  "key25": "2yfYDdArTaitAj21zfg1XgCT5tKaPQw5xvbu1KyHFEcGbE4AoxnRd19xYPVDKmH7stb9a4kyEoLkw1LVZmyptYbE"
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
