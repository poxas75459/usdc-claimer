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
    "2M3MdmK2srdhuXNg55wHNRqu7k5mEdywxdayjKMt2FYvNLhH5AYZ7CQp2ahPhmFz98Z3ydzQKpBUCcNZWPJB9kNN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fiygc6e3hAenPUc4SLS7DTjoZNpBqE18agqUVd1hnG5nyDTdjjBtNA1jxCMM96pvps1kJWpxSGfzEEGjogwKgnb",
  "key1": "5ewYw8vY3wPXucurLbbK8FZRNHj7q5nYEXrsQTH2LzSJAnsohWxxsgXWk8wvuHbMzEj6CsnUVz7VQRFGkgZUd39r",
  "key2": "4E4TFehEUkFx12x3vgvEJnMTLu3328T5CTL55dMYGp8TVdPqipxN3hM1qm5ohP54Y937W8WW7fWh4vqBnxvPDDxU",
  "key3": "5q9MCyJG7YWviQCmySL4HmmL8SxdWErVTtVJWhxM5MrhT13JQBgTgQAsxtxdy7PDY3HKZDEW27hFZcVHt9gD26Fu",
  "key4": "4ziKzabKmGTegAMMG7KgFV61LHezdVEpmjzYSxDQM2AYukvoqvPJkHKA1WBb5LVLwqWT3v9mozdDNuJzu7TsGUWJ",
  "key5": "3wwyZW9MPZ8NLXSzzmMcXxrRqnwQeMwvKkuCGgEuviLoizbiAcVS4wvrmFYDVCjveXzK2s16cN52beAcCw6yUjxe",
  "key6": "uYfJDm64Uf2GDAT1tFk7TahgkUN4PbfivR6hyLq4yHCCGHcDZkSWPrxZZbLbbDScv9CcM4mfoCXWa3Ba9q2CTSx",
  "key7": "643jPjKv9QLc4HQyBSG8PxQRPrqqVVRTSfQrasVHGahddAvD8sUuUZjfVJU2xVWG1npmCeQeVkQrwNEFDiygb3GC",
  "key8": "2dbeWrZgPzgtQ3Pw4rZboZjXxagtZbuqZmW1Ap3yWuY23CYjig6myp9DWMgRrGopbqLBZRZLZeJimwcKQcb9vfHE",
  "key9": "3buVmzPkDdV8dp6KYHggoJVpYZgyVznNG7kQW7SU1eLtkoUwrmuS1kJXfaYbmdpk24vRVtEa2EPK5DN7dJpZxVRw",
  "key10": "3H4mEogAQPJVQrQD431Erpmh1DkSRrheP5bG3hf8AQMBoq9BNUzjXmKh4UctK68n2Q3XgjLroiT6BAYz8tMU6Cst",
  "key11": "5NiukCW2Qr3CSxYVSwUNy5ukExoYq95w7REEzdFgx3ttftGNcJuKYPyZZ1h5bmEREmZMw3fGM4QnFzrUZ6SKGdra",
  "key12": "UmHn8HpjSoVjEiMMLv7x1bi4x9bxGBfCzT9AixjC4jDY2gc3eFVLtTiaQ1r8xdNf1y4AoRrXWjPyYi2A2ZxUU4X",
  "key13": "4gvgoCmW5Tax6NeDQvsaJ3NnDYmeT8RJU8HZzikGotpuXJhAQzgN3GWS2kD3rZq9kuTv9p5HxdihDSxppyh1SJXV",
  "key14": "nAK5Ufwe7Bx4J4CZ9L7EUBjptXdn1sX4cWCS3PktPkDVa2yVbWKavBgvFehJyzfNZRhPQ9MUduLtaztdt2HaU72",
  "key15": "kiPbm8r2mJcBTU2tAdf7Pb59NvhuWgB36m9dEFc8jqjoWSVPitSKn6j73H7Su9kUeQJrvwJVrUWiKDj3dQPd1p4",
  "key16": "5qozfojqD816EsivgN2JzUR42VVwLnGhCTkaX5Xj62Be87QEZHoUuhH7kSwWWmGMWjUbR8XWqwbVq1D5kxkjGJX6",
  "key17": "3Y3UyquoMA6qmbNRfD37KUqi1jFwSu3Z4qRrw6Ltz3h3yE2QS4pWKsKV5d7dbKsF3J127WD9U5u6oPxEWHfjpazF",
  "key18": "56FBnvz51zBwD6Vc13sjhTFb6ogckPo1Y7FuiMwdVvBzr1cjYDTLZnq8LJK7nwJZq89zK4T1uHER13M6Ges8bQVM",
  "key19": "cBcUt4DHEAA1PQx6NTMopSs6fyPzatSaesWSs8dL4ierf9T6vcznZSDkuhjAiBaiAK3VMAa8zai32LHZv8GasT9",
  "key20": "2CjCfvoDxDFzqNGr4AmiXPHymP7ezQxHDQa4odrCXfyyC4v7K2oRK3exrhPXrLo9TqXkrKmn5YYwoEHy1ZafQcTN",
  "key21": "2N3TazRPKvuNKQXTZJ6AbrpZaHYXnHhiTQXp35on3bYdR7AShb3AgQ6MYpMVwbF1Uoa2bVNhWEnF3yFhMB49Qd8q",
  "key22": "4L3ZPG986dVpgfifFsNKUwnuhJzwqnDVuLKqrMZqRJxJQoVPCz6B4QbqCMVxjNqQvm3N5PEPWMbRoQp9HmiEHT9Y",
  "key23": "44oAi4EPwDsGD2dFjUGCeyujbaaxWVxDh8kXZcy6zRTHrvxAwpvhQrMY3r7azUTdD46QinQgz1MPooWmei9S8kNX",
  "key24": "2pBYfF6tSCVmBLdyYHHq5yU3EmcG6WR9nNJZSKsqbqfsJjAd88VqhV7q3aWAXY5kXzKjw4WuJ6CEX64jzgFxL7U6",
  "key25": "3e84UwY8jgZP3JiFCnuQgxTFW91gb4QoNmxtLUXTSHSEpdd7WT8Kw3wqxXvKCmiesCy3ov6vmLfsLkv1dTQFr7jC",
  "key26": "3ZPMubwW9WvD1NJhdzEUTrmMXTPTaRBzUGdA7R4ZKEd8eC4x7XUuKU81rnz1V12rcsEV6cdySSMGcL7njvcKXCzH",
  "key27": "5AYRduLvxDY1u9vdBqEo9qzYrcoE7MejU6MAL1qhXhogWA8bkMnUYmRxYRqBhToftKsPLqUVXnLHdAf3StRbgvSE",
  "key28": "Cry4GvUmPreJ55bFRtgt2oGFC5grbYWGviNEjmQYtvLpDjBtD2bpaKD8wiSJhtxVmTnyff6fjcY1Uj14VxFZFRC",
  "key29": "5X6b9qJ2vP7vvNVUqYDKSop8SWgBUoDZBxfmQuCMAZto6P3owLF32whwQscViWGRAVihC8xVLB823ix8DmQaxakJ",
  "key30": "5XZap3ZL2tmyoHDBs2F75VXgiqXJyWBg6aj2AqssvAoTfhouQWxHHqXnZ6ynpWhz7DDbxcasukGDqqKmkgJo4fTp",
  "key31": "39vH6qZPixfkHNaYkkFyNRLgb4sNKQ4VJunoVo3fxQFmbaz51QcFtRuiCDMLGfcrPK4bEgVKn2C6iWMX79G4HNrf",
  "key32": "2Ezv7JLTdP51XRRx7SVznjKZrJT9XMzAbvdH5fuuuuDZmYz3mU7mW5HAE7c8NdNUGohCgTeEC6zVTx6uTV7p4whV",
  "key33": "4iLgQJXMD1t6N5R6xv9nM9BK55JsLPvCPCjgZSttJYe2K8nCfzGAeyUECsSdo5uNagBJ9KimvXfcm7L35PoMw9C6",
  "key34": "5zLMFs3DDhhpAj45h2PK3XtFeQf6XKYW54tftkFZuUtFMmT3y1a8zq2wcC2raQKuujnkUUZSM29cTo5Xh3STuXqr",
  "key35": "276uzdKgDJWoCYNhqPkqQjZFL3omgGM5U745qhmE3KkbaZ4T7ikgiRSVDUA72gQfFWdU8Fvh2VX9jBFF2yHZmaAH",
  "key36": "4MNNoWSxsRUHJFjXqxJxKrwMJXvQfQS4gJzwm9CqLyTpXyc7MmCK5MtWRGCAgKqeBsCq4DUhSNNoDrqdzrxaAc23",
  "key37": "4RvFw9zktzDifXJ4AGiMRSR1c4HtomrWuusAKF2Gu1NHYbAuGY5ggMdLZFg3CmUWfkbAEekypXUrCLg29isidqYf",
  "key38": "5wWjLXQSaRKGMUQi4p3XhPHzezKyc2vvXuiEGGVaWGvv3mJtmevEpdeS5aGrDE53WyzgEArAicpKYRZmpfRmVpV8",
  "key39": "3r2U2u6cH7Kq56iFsvh6ciAaQzNUe56n8GKFts6iFnhGArh117TiRrg6C1yLTEDxc7ZKBhdxTzLoK6XsQTZmZbqV",
  "key40": "2i5j6AA1TkX2Jz3MZAc7pMGU2ogApAxuVBzoputnFsEAh1tQ9tP7b495rkAxdkguNVzSthDFa7JgiNv1s44oWAJC",
  "key41": "5VXWLtj4pShK5wCZkBKPz5CqNCQryZsiGsTVnU2nGrxVBmTQUZdgSDByHWQfdgcGZjFhDVWWD2NBLUZVWw4rPHYz",
  "key42": "5SiqQc6ox9w5KkCWDjC7gSaWzugcqYHLbukZfXKPTcM1Pzi9m3PigyYFmGgaYtP4k22CTYqnkNaP4EcCz4Cs5n3s"
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
