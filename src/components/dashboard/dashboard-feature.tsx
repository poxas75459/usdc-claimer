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
    "cXUuz7paxTupyo82xZgJj7uqsKYHH2XtXS7TYBNXY7ojtkU5RbQFqZ6srpqaYxNdyhwRAsdpErXcpFnzbsr3BBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FPuTNyGwqq1jJnwBedbg1qVMsZK2svqPbBopFQLVLNNDaBjvqVoAzvhZ2q4JirKgjg8m2DSKLAvMiTvoCvMQFRU",
  "key1": "5x3NyHMWDJE5bD64yZJcDfpbj8FazEnubtuecqGGdmNcTw93kB531EbPkMT5YzzBCM4BkJQA3kbgRhxGR7icqvuV",
  "key2": "4k2mZLYtBYJgMV3GPPh95NVJTKWkCREYPriMeG6wkFRdA6t6jJ6A4Sb69GJyDZu1qSFojuJNzy3xwZgAD6eNg1DZ",
  "key3": "2vKsQE8AA8i5sVtCoMXuchUzP6VmTdSKRK71MMRWqbxXk9Dzj9RFLVoW1b3MEY72mAMvfcX8Z5WrELaFCemr32zV",
  "key4": "2bScuXZ45riLSRBazqCy9mmUYhs5ARir5zuTPQfkrrf87ZKm9pWYo5vxYFFYiFa6KDp4tkbGV2uKBkpJvs2dvu4H",
  "key5": "5PtYPXS4JwRtkGS5VUBd2dLMWGdLQEz9hbhueRCncjSsRDoKerX62sbcnBnZZsx6h8w67i1NdBYTFACZ8NFmtVoe",
  "key6": "5pGUzvH4u3bNKGve7eupC2SJjSWAiHx1smkcmXfUtSdZgXTDfA8hn4Nm5EMZc51y8zhgnxZeQERihqR1MrC9tC79",
  "key7": "3E7RuwfXp5VymnrXyDsRGANuBLgAL1VFVWj17Z3Q2UngRuqXPpKohZFnWj8zj9juprtTmcddQBW4QFYQHgG5WuXE",
  "key8": "3wfMWkK4inmsCYsQoK4E9koBq3ZUAvzy4XfN3Cp79Xuuowi83BTH3ZvEABdYd6e2X98QCoNGyWDnMHkAphrrgrKL",
  "key9": "2JixjdvTWnkigg1hjw9DfWz1hnbyT5WNwVhy5qKuhT1WXJ1WWZNN6wBDVoW2baydTCzU9A3YnKYQMzcBHijEqcNn",
  "key10": "3A4JKS5h9NfTVfRyDGENyybRnCQDN1WcYRfgHx6W8W3RTpFBn4wkwyNWuZS1bxVW94yo4HcH2iF15TrsePGMXNff",
  "key11": "2NrgJGjwrXZ5T7xcUFnYCvDZSdMxJxM8d2F1p2xP7VdSPyqtQVRzdKKc4ViGDBJVkE1HNK4XKRazUAgJcGKSw1ea",
  "key12": "8jCpoiFkWBW8XUror96PRjHi2f73rFK3MMcdNeRQUGLmXPKoDwPntGExoQPjfDR6cv7A3ZTuodDcs5TAQybATUJ",
  "key13": "4ErzrBh12ErCjK7DDKZMTbqXMwciTb86AMPx8RyN3ePKLqXiwrxn5n4rDxVH53MJdwxCgxGJFEtkekcPjgbh78Ah",
  "key14": "52untUoKzb4Dt4XHDzaJTjyi3Y7nmoGCLoGfuzMd13hHqwxvinLMvnVEAnQ9Kxciw98LFLCpxw3sC4cfwEJVxGb6",
  "key15": "2ZzMqgKtnSpg425Y2mDokZdYk8aw1euovwHzN6BEPUaWMaxus9Yi1CDxsbUYm6UcGa5SXRfX7y1NaDvs5xYGXP37",
  "key16": "RiPQc38b5bmWFqse8bQExrSxrz1uWZLL2RNoR5TuLDzpXXiGqqJBRBfzMuStk4Do28WCvWanC7uWCUshy1ZfSDa",
  "key17": "VHhf1Tpe5jBYEzSPXULUTarGBMn3Ttn3LzkT8YfjJCoV3AxxPCp4dyEv6srKSgGYgD9hTbLQ5MSLmmeChZyKGdK",
  "key18": "2sRR9uNZd8FiPDLK9NrkEonBvDrg6EeebJ348EicZmnZjf64ght25VZniLzACFt9ALmikuncaZ784pv9xTgjoUDk",
  "key19": "wmSEWmL7HUYj9qF6o9kZmhJSRcSj2MHwqVmkCfjZhKtDvevi5sLCDg9xGPBVe6BH9BZenhfrcmCVXKEo2JutXJq",
  "key20": "2E6ddpRNXNgkJV5C9nhuPvTdmejKpxzwy9T5zy1Uwgd6LYnzy8cYkeVerWEnWwdnz2QCV3i1S7zzeDHYqTxPr7jv",
  "key21": "2eVs2gPBLhQKufWcmBmqpyXFwcN6rzD8QjPDectEB7Ejfc2JTJtiYH1SAU6T78ZdqfPn76ncyfnocKScFSghnNsM",
  "key22": "Lh1NfxCU5A1CeDpCd1Rg7PgFyesqAvX2x79rPk7cmYKag4YTymUM12yrfbcWaijX75Fem97H8b3XxjQMKyKJzqn",
  "key23": "2Wwcd1b6eCZ5C3AdffMPnyPe6UX1d31AH7gCkVPuQQNoMDdcXxSEqhMcphJneWPV6RbcW9p4xwYsJ9aYAigp8imn",
  "key24": "2g1DhSeZXh8o3vwBCvDy5nrDGhr3TtVrcJKnDh6bGtuwsw1kiD79ZLux6tyKtbc8XbsMAzsDQAUrFt4GoJJrv1i",
  "key25": "4gAm7TqhUPfagD4eWeMNPCNM5EmcWJwRw635JohGUYNhXCdzJskSM6YGArAD7ECpBimRSCFn98TD3VVdMMcVQNvS",
  "key26": "2aGvQmNgPE48p3oHKYZeJrG5hys7qRHTLLAC3xLaEUzLAwAVEjo42MhN7C2PWCFiYvD8mYsXUgxARkqWohFQZkJ3",
  "key27": "5ewVcEMNzNe8kt9hLnfGPEehyPLS6unEGZ6HDF4eHs3LqRCvY72sNYwB5KE5uUxB6W2PR3HmEWb1prj3zF5x3kJE",
  "key28": "5wZ3rC6SfWJkiKk7Lwwz9vzxHhF1scd9MB9nTpStHp2zoxywZX3JeBEJWtKZ3RTp2rAvQhnYQHLtkPRSJCkZW1xy"
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
