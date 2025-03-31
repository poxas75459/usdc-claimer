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
    "4ni4gJTDBH39stjzXRMYXJDf4EMDWXbJU2sAujGAPD7XP77pVbpwSZL4Bg611FxP7qhL3FKHEaJHwjDjiMdt4R3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Du5Vbcm1M44JrJW5Sj28psW94LEf6AGEHWWn7iU1ys5DubYUSHFXfXn2resvau3UnbHQWy9TwxUBeEa6CnxXGxw",
  "key1": "2rzdXbVpA4GVFj99ySmJkttCdjFL9TrwYDeGVZbhox9HZCBoWtCBPf2qv9aNBa32f6NMW8B7SdufqcpXP1di1UCH",
  "key2": "5C4Vn4AVC367b9BxzFUo6r852sZ1JfnPxWHeyyJedeiPyUbk6bx915chADjgV1px43tcWyjbhW5otxeuD57xG9ND",
  "key3": "2vjZLQ8BhcedE6Ve3bTpcE52FRBQXBfCScWZYEod1YGxrphNXwfjJtR5fuNJYkkC8x4Y5oGDsiXCNb18nEDrwQ2s",
  "key4": "4Q2U9VWcewuns1ma2FANDvFYVyGv25iN2VYWwythcKQiQX6W8WKs2o68NBidXVTrSwutHFXSDbourJDhB2PoBouY",
  "key5": "396BTDxpt1GrrMPvj7Jk6Y54uEH6JXLxiDkEWS5yz3MY5uSCGCB3K2kmJqkn5z5h7i4LjbhCmrYWvnw2eCzhFxDE",
  "key6": "pkCvU9RCq32h57weLg1zXkp42JBfjLJ9p4hzhJVQxnuEa5rfgXBHbXDddVso2jb49ypy1Ck2W2JQUSNzv1X1rcK",
  "key7": "43oRbTALnBFBM8zBkYhtDdc6ZmkcjpwjCmnGS7qM6nqTLXksk7zantyPRNCwaMDSVUGQxNM4QN667Nef3Uzk7Wq3",
  "key8": "4r9nQzceK2tndYPoPSR3zeSrL9sSjePtdRm1FScgUXiXEcUntLTDLjLugCMJVTCYybXQP5rXKLdZZ3AVWaovFwzP",
  "key9": "2iNFX46c3H5Fo6NmmRMXdTiuTyNnJknioioZKei6Up9XMZ8t26ZxA5sQmSrfvmqqTE9uDZZSqQgy3srQRvCGha7g",
  "key10": "2Sazth8pCHJshC4fpkdA2oyUxn5Tce83zquwKxpb1tCGJU1qS1atvKTbnqbwkJXd81Kp4F3Y4JdND8FQX3LrNB3Y",
  "key11": "3RGwngjoLqyVnWvgBtLx91iKJc5XYrmuhDgZJ7eLhGxYqNTdCigc6Ye8da92aGkqvmrRWe45reYFSPrUsLpbLcrV",
  "key12": "5t2Njs4jqR78GHjPDK2hbKPgXJ16GPBN32D35x3NiPS7G26BbSyUBY4TfCeRZgwVKaro8EdMGAv4NRmqc6XPHwdF",
  "key13": "4tSQ9hE2Kd24yWgBDPUTs9mfNxAdDA5agtWj2XyVeu1pa8LueLHCtYvxy8Ly38CHfcGLv3t2JZqYHS2dGNVqJruC",
  "key14": "3fMqcrwWCLU8rFtVFJDDvk7JpFqppKHzJEGD14AWKW7T4Cgc4JgH2SzVr7G1f6S7yaWcBtZ8TBMdM3s5C5vw3esN",
  "key15": "4g97E6iFmeBAiEEYVefdjfsrHcZun59Kc7JuPBSyj2NBMxTw1Q4aswihEBv1SYfACcVyuyVdLd7AV4DUvV9fpvi9",
  "key16": "2VyDeAaHSTH4BEJEgcEJaBJrS5HxTTSvjLzoz3CQ8chzgMDaf1EPsniMBoGLTaxR6e9tpbij7Xbpjd991betQRAc",
  "key17": "3LvUJ7sD2cZee1oH2tsXFcMsuK16r4q32i6P9bj62NGfPvzfazUxhJRtUvqXL1pSU1St1rHTEqffXyVQUAL7yhgG",
  "key18": "zyT5zySbE5jjA9tj59zmhQbH8bDMXFeHqtJtztrfQmEDVHVMBd8EZr7b4LoQke2bdR82Qyc5kdCHVzKgt5oggAv",
  "key19": "2C8ugAVXfKHYiA1dDMJhDpBKB8GhLsjmGa5NmqSV56yJBYg5JaoXkdaQ3KUccu5Gt7mSesQ2nmG1GxVMbMGzZQZx",
  "key20": "3wW4wFVCJ1BRViaTFchEwSYxsqbgXTDwBWU5DRritSAVS8cTn4LL1t3TG8BT9CXhEAafbAX2veRBuqRKPa7s6fjd",
  "key21": "4949iFowka8YjWvDzXQsEpSUv4fiyfbVu1zWZiHn23HFsaoxjxvLDfwuVnfyoX5ixBdW6A8TDgQkwMeo3kWZxqMx",
  "key22": "5rGcCvKJC8SFP4UTQjkZxmANSQkgmmZU4pdCdP1LSHPkY21QKHKRv51izXNjJ9ZEY4GqEXUnkXoDPGVgCMZ7dAYe",
  "key23": "5CUGDDdWr3B8JhmmXTmovpQmFs9LLSGbXUywbVTWc33LGydP4k8sMD2FsbTSvEs7HL2MnRkDZPwVxx2T9tzKxB1a",
  "key24": "3Hb6nnw1a7WDerUy1HQ6bohiX9DBxnbMc5qdYCuzjKT7beYemAdnRSM4np9D3pYgvtmEWYTaDhJxQPrngFprjLRx",
  "key25": "31ZQRXA3Pg4CKXZY8xi3RmtAAGz6EpdSWB1pooqijGGSWmVn2uBSriMm8b7zMJF1bo4L31LaSzXNftiYPNYiwsKe",
  "key26": "fii61muEiYketiE4wA9RTTvd6EMdeqvohZR7D3XZYjHj5Apzmp5dWkR6HHMPcDeGYrMAq4fEsShBmYRmXrR9ynb",
  "key27": "57G4kn9KeKbY9JfRWh3dcBJYq9X9qWHE3Tq9nmzqoknr99uDdjywiWzDjaLkzePS13M7FM2tTjAD2gLFHi1GdkwB",
  "key28": "5HBhrr3wM3SDxboNZrTuu126kFqDREyYhhT7XYwXC7Yb1pguKcCG89BKc853rXS3wGHkx5vEDDRFExuFdHhtTzat",
  "key29": "23nCJRUpabnfDkrHdiyYfByhKU85ZMYM6AboLRVvFaLTitPGaMEKi7RoJWkhZuuCzWTanZqEaCXYDfVsgXUNQL1M"
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
