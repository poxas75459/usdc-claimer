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
    "3hpbt8VRYNkVs61LoQLnLh62jByU8wQtGddk23Ph11g42vn1W4fBTuKpKiJMGVqfAikhAYhXQ1qak1Pr53tfCf2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xQpfBj5gXjN69UJcckxEJfr8Y1XX2k58KMp3tTz3kStNQ3a7FamcZFQCyFUQ3VggrYwNcvJL2EwAjPBLcnH3EzU",
  "key1": "3u4Wr4BU8hE7bxkoBY9RQiMFfFUJcYNfcxrMfsVEs9PJQoc3mmzKbdiGmjVueLx15YCfzYM8cL2ES7Tk12KSiT6M",
  "key2": "4MpBWHT5j1wwfhodTb2xmPYALKrfMbdo4MTpAjA1ooWfRBmAFKzmYnkNMwCNt61SFTFQL5F2n9iGw1hyHm1XQtjE",
  "key3": "3t35PNUhYH1YWRnWrGPXj4wxPJpqixFnazG61mjkbuAYgR12Ap3H1oXYmyAVgJJadcVBK1TLwhXomion1U47wgCB",
  "key4": "35yKMHs1xnnW9pvR3vNKQ8M9b1q32NieZfQsK1ub6mNcidHMD33w36689Z4c1WcrVmsdMhbDwBvsjkb4pAebgn9j",
  "key5": "5UuaBD3t34gbnfwm8EzhVByTdatvwcrVMUEL6yR62RrGLq1JyTfseR7ntF5THdnVAV2AKALvmKjN4CofeaExrFxC",
  "key6": "5HLoqgVuDcpYsoUFexjKAmswqWaZwVajdKtV4o3HjgVe6J985Dqs18HZNxoz94744pgbH8BZXihzmNBAWdvx32MR",
  "key7": "34cAgv6EeBqeHiC52FyYUcNjCqhHe6RtZpunrAcnnCUF3UD4yiN3zW6US11wno6qYrqS9V2KnRrA2AuSQgwq3Coc",
  "key8": "5aW3oDMjsJJWwRY1xeoiaTH8ooKZRhGhUz2DdQwGJhumswKryVnXJ9GF8zt6DReQA3GS38PmiK6NMho9AJqMLonA",
  "key9": "526rm7YY6X5XMdE3h2YiQQ7vn5vihiqNEbNnshataA62VoBqxfwfWLGyz1NZxJGPyPazm67Be5KTU5R9Re46TVbn",
  "key10": "5uaLEawpFwyNnKitVNyoAoh5jJhnUv1cudVqxmb4ENK8kfpRsiFQRafEMtk4ibjKUL8jUSG6ZVtBamGKtD5KzqUS",
  "key11": "bhMc5u2ztiAiZDRUJLDRHVVjwsbukqYJjaj1CF2EsAGQndGmKYGnT2kVNwmJnhW78zaHFEC76QmVMGGPxrMjUsn",
  "key12": "SUqP39mnU9B83XgS8cLhXePVQgLzsWKedgaifTSrTJVg2XDhkeBpN17HzfwHGX7yHhECgQ6saSVbnAL8ThzHG2m",
  "key13": "5Ttty4drXmqAYwnUJzpGs6vVbfQN5mEbycfiiLVG1YdzDj2fpVVuwufaqYwRWzhFTaREEPc839Ybcg8UVFq13kGy",
  "key14": "4yqsTGD4u65coUtySrQ6oA2xR4RAkvQ9m7CszW6RnwBXixoATu5EYvxYcBcPPYBF8vDWd763AufkW64mfXKZ4qct",
  "key15": "2JnwuG7JynX9KFJLcQovpPYeHx7s9BD6Vf8Q67eprisaCamV3dpPrem6jycUuR4qtV66CqPP3e8JMbd17CoTC5yz",
  "key16": "4HyopxPfP1yKZyyWMRXyXBu2iMq1oubDk7Pxvf9RAAeW9fj5YULpauXjYSDqoYtCxJTmY7q7ceHUem23LK5KaPNg",
  "key17": "bGTZANuA5GnuPsK7vdmWswqmeUoCjsNQGuyqim4nv8Bj6vxdgP3zQQUB71VrChJtKgF8NA3M5ayVG9g2AL9amdk",
  "key18": "4N4qKVrj98PWUUmpVCbFnVMXdTakc8bzBxvBQruQMV2ovS72hbQswkzrBjzANpYrqpHEXhfVHkLrY8sAiZGvcYKX",
  "key19": "5td2HT5JLGUX24R9NtvKeKTxwb7qFdx9xyJ2eUMdMMgXjdht2DgeTqoNPLM8x8CTvCBejpBsVrXjkDoRwCNMG6Rz",
  "key20": "4iBGWoabiEJ38Qk4zNyUDjE3chALRsp8hLBXfkRGALRHdcAXjrdeSSroDwBd6KGGa5tyvkdcggDDYgZ44k3NhbR",
  "key21": "3iAKqNvZJ1gJa7rCLssmsQDXaZouG6yoEEPZJequoDbbEpcxNPqp1jamqPtDoDiWRRNbNbX35bC8nfXLUiPiW7Ji",
  "key22": "3UHdstRLnf92FfZ9Y69RJhXy9hWECAVjGnDVuXCfeaBLTdCgzWnhwF8tKXLENoNGfM6g8RBXT7VwY6ZdwqfiQpcT",
  "key23": "4ePHi76xDiUWiyLKdtfgJJkFFHzyiibk1tMzN9hA1uzZPBTWPSvPMQ4Q8MZNCK2VRq3BQcHtDgZ4aqyZ8Fihzo86",
  "key24": "5bvETgwcE9Lts4NACBJYiKBJRjmuLVywDYFHjSsJseSqcVQd5GzHw9hxvW6wPj1p8XcnHXfjeBzXQVqSr7cYyM6S",
  "key25": "4AEE8nWVyap2j7GX2TTStGPmYaRVCT2xFAo3oNNxipPdZ45LXcGyaoyYMBCrKTfb4eNyuj39JbdkAfVEtp7jSBvz",
  "key26": "5AWgtaXA6JFayGUpdc11TPXWr46BnFdWaPdfJ7vwLceX8iXmPqoYnoyPno92oW9NWU3EZL8x3yETMqrEkRmenVgb",
  "key27": "3CgiHRYZruzHwHanVJQb8v4tvX9rLxVBjpMou8Vs8igDiyX4tBjD3nAYAXgfefTw8gyGvWpKkPw7F88tqF3554fx",
  "key28": "3gqAr2NRcyJZJ2BiXsHScAWYKeNQaxHS75Tn3uWMPduwupFHjbPUVrHuRPGgorAkrZxB1tRceMxTX7vsCvvHnpNt",
  "key29": "4zECidDkhWJBtPPRbpjTxCXPAeecLUp2uWidkmfJh36fV6cNKRia9iLV8Ac6WdDnrG1dgUfj8BcgYkaS9SrCi9Hn",
  "key30": "QF9bDop9Qutzz25EVmgjgUn4x8Fd3DSXCMV1ZkdZUwaymtvuj7f2nSbJcPsQJRhwjTsoVqHkqd1nTwSjR4sFTZU",
  "key31": "3NiWkdsf6ahjU94vAdgcrgPcvxPC7MU5zWAmCHos9eTz3r52bd9FRHqzy9FoWJfSmwGEjN5Cy9M7PtGHB4fuDgTk",
  "key32": "2hUAzjB6eaC7gPJH9hgmDQsz9mv34y5y8nXYxyTwsGHceF6cZYMxtRyKy9DyqG5Szkkna3dNqMLTV99e4qL4Dfw8"
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
