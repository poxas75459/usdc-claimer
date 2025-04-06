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
    "3S8RgMUuH8vM6cxMEfgTYR5vmXbrXwbGz2B7MWRgvtQnxuYP9TbkWSzFxnBLaTkvPbWCsSXKdpbCj68sGkdMJd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KXuZ2ReVsYE3tRDutnW2zYgftGkAYBh1rpjoX595pkvXstS6w1cC63HgcgJSUJUbhkTgry6kXjGA9M6J9wDa73q",
  "key1": "RPtGdE9wpNuudMVJ5cufdCMaiFecFFo57uYxCE2xTQdRuHjntJqS7ez7Vp9rd92rkYeiqTsiEcP4sYsvC75JhUN",
  "key2": "32Z6dRRM2fGRtcP1phcNLSdM7FiAvK6A3DwGKqDMXRCmyLoZGGyyAjevhXSKuvJBVHgk4gzGYsy96VUuQGUGsJrm",
  "key3": "3Gj7G4ELkhx5Ekn6vno4HYFRmzwBqTktvVtYVpqFXstgA5KnYMbjTGqypCUXovL3PF6jEQEuDwfPJ4Uy6JUk1os2",
  "key4": "3FzHGKQUqTbg9Wm3DrzkPG5yHRGqN1eX67frnzUpueqDvgY44ZgmMRyCwxSg8k9xP9RLTpQ3r3cCJ5Dk8MeJYvzf",
  "key5": "3FaFR8yVq1dDEhHrp3FUJ8WB9ZWHNLtafjbcNQksWNVF6nvB4zvRa9JsvecuHrdCtWmY1AVf2xuTPXdbH2PqQQne",
  "key6": "4AtsAorEhQWqh2HgjMmqREB3gjXmkzDJrJhEK2VSKJp8gfNncZS8MrePyHHPxpZH25fpqJk1vfGBHAUUquUnieHj",
  "key7": "3kqNSCrshrrLUSwh133ZEAphPzJipa4gAsvVrAx5czaPjet9Mef7r4hSBDHo8fBwd2N99kzYSCz7rrUaGVq2PNhf",
  "key8": "2LLxgssSQZYG5QNEDxNWta7MUcVmgqPEgumVZj3rsHgZXzw6PhTQxXdbqYvUZinkyrz3eQraZQSVeSf8b1hssBvR",
  "key9": "2FDLuH3Ex2tSYicESzE6tpyMyZeVGby73ni3i2pX48aKjXsFVcvPUhmuXr9LL8Yw1pLtjqw81xdsJwkvhUbkxnZ7",
  "key10": "32eQBi72agT9U22ALXNbfuixfxvJovMFwjrgC9m8SuajcFTUBSQZ6YUxcLCQaSXB7ajv88Qo2LJoHDxWNjskaDrV",
  "key11": "4hYsxB6qKca4rPymqNPfZUS3mtWxdWkpB9ZWxf9Z6xiQnEEET2u8Fhrq7NZFQT7XgzocrW7oSLnX7ZLbuSYAuBLp",
  "key12": "56dVadCjgfsH43aWDes1mebyijKbCh9LviKN8zaACYpzaC9hTgY7eBHRpdVFsgWbzFr8Kyd3odLdbxgQn4LiyJBL",
  "key13": "86vNrrTD77dsQviLA8k64LMTWHz5QC9N5EGkyR9jtWYNjtXqARvKHxfocsxxQSCDJK6ZfC6Z3pSkRdXWYDoeQYU",
  "key14": "2Ct4vqCxbzVKGjkU1iAAQJXTt7cJE7qNKNH7BmMYRt27o74qeXM5RnucunZvpwxJiFVjRw13scaT6qj3y661nL8n",
  "key15": "4ZxRv1s4e81impH4HF527Xo9VTirWS2zBaHr2g3WtZbjrAajMGkcYaCnXu3vLGrumfijEzQnndJy4yySFAkcghrb",
  "key16": "3KZVRYZGiCfDbVVWgKje4pXZDQT3ZQGiayUdAssgsh27YmupG8zPR37phz8mSfnqvUxizedaUEPzN47hh4NCmSxA",
  "key17": "2MZHNr5a8tYCrUyAm3VxFdGNsmkLjoGnRm8iBQYujqUj8mpNb6xPtua46PNchdJjQFq9UZ3tZ1AbkC11HbkjMWAD",
  "key18": "2naPvqB8d86EdkuxNHckN3NmWxCgcJmP4J3oi9W9UUCkzXa6MYScqQ9e9uGtMjNNEmTrPdbVt8CR3BxCGWddtKCX",
  "key19": "3tvEVukjTv5wKme6R6iojgPLrXxK7x4Sec85bcgYcMUwVynegGF7uC79BipRsqdPqApLChwUWw8euMQfXd25PL9m",
  "key20": "5aH4gu1BEQuSEEWn2xGYnogdgoAx7YHZM91TeDP9Tknsw8aS8m2zitHWV3ChYWaEy75Pdg67CkeXeN633HGouFQ2",
  "key21": "5LDUy1S3dR9Sfjx8aeGJh5huGZFDQXyGi16kos7wWKwKrs6T4E9atZLPXsojm231mJMczHeGoeyh26i2Wxjuj8Cg",
  "key22": "4ByPR5uRAfJaxyk6Ugkgpxp8YDCJBq2LVHgbPjWgwLuAm2UeLP25rkr15Ghj9RRnUp4wdAmn37ATovUyrfYg23FG",
  "key23": "skfJh5YZVZKD43r7nUADJRGdrPHXTdpopyxu3j6Kawe1c8E8DSAczPNy6CSNABN9WV2WffGbMenSK6yPrbD3mua",
  "key24": "2JNxNmpkcYukxCjXP3pHo75f1jkvNBdbZ5DjqpF5w2rKb8H4cJTv1x84px5LmX25A59DBaimXcicTCZJerXdENPh",
  "key25": "4PQNxomyt7f8yr5EpSLB24tVaG9FrmZNrM7wUJiXpFbgTPCsZsTmPxoGVJF71GAE7TAAVjywuVE6gXdBKAdnVZZK",
  "key26": "4kyXuG9keYAhFCYjqhfDGcGTZSYypnhnBHK8hsm6Ao5muoSQdnt74tZv83QmsNdcCVLDVR5VTG46CaejvgPecxKP",
  "key27": "T8YvvtJ5EiyfciqPmWzugAERsC7KFNNwjBk3neKuR5oj7aqdMUydn92h8262NG6YjXUU1t3jL8fdCTxcMt3cxoB",
  "key28": "iAbULaQ58vAThsBwy4NDF4HL5KDqMYjGrp9nL8U81QzEfrVxaEF3wxDeWuZAcrZ1PC2XRDihhUhcWk8vPXMV83a",
  "key29": "55o6yT7ULFu4TwCUQ1WCwwDa4ip3cEsFMKJXt2PanjNhhwKUqbMNhc8vTFyaXgUtQDbtpKS1MohDQGy84FbCvhRc"
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
