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
    "4UKEbbZHZ1gn4Ej6wi2TnHKYAhQdtSjd9rXi1anj6dwfDRC9ucuhNTuM6CfBY7LqAXyApXRYjyracwSAvFfdih1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HVNxqtsNn6bwgh35Yw3jV7mdQtudP4yctq5PxgnPir3ozvfWxnLW2V79AtjRik3L9bbKVkUAJWtVDCY4RnfYMh",
  "key1": "4Czyjo8q2Xkk9kdpDdHSCZB8PZbnyV2WADqmPXRvSYQEU6pZrMzm27YZ2a56HsCqdkqy3RLXScSggVnRD7H23sCK",
  "key2": "9qo9N4HWTaZNr77LTGm1zGgdSJqVsWR25UFf7R3dZBnBciHnca93M8ykg5WJY9Nca5o2pqBjFpL3PXo7fekNtyU",
  "key3": "2d5V2ehqk6wyCNtjwGTiMTim33dsjZ4N1MXuSfxV5ADBDjh8V6rdHnr7whoDDcdoTeVuPAwPcq9skNqW3Ux65zPM",
  "key4": "3ZY5vAkbQrv1e4CQp2ov9CSRzQeVzHHKKkF4r3LYF2hv47GWS4VCBgmPThyhPevP5fYYE61o6925a7bYLdj9dVs6",
  "key5": "64bmPJMskoqvVTgLE7EKafKSt8WtqgbcpwfAvceL4FMmooNci2qSPj5LafVnJXe2Lf7P41BFbM9JDj7ERYvCQycJ",
  "key6": "nMrHWZCNMGPD9KrE5GiPRhKBmu2ufobAYVkK1kM2BpbWhvT1vSofwKvJ1F1repuEZqZfY9GrdVPwRBRGKK7yacf",
  "key7": "4D2AupPXaacRJSvdTYjvFGbSuurrFSRsVepxTRHoagADJukjQncFQfhYiU7GCwd69JTMtvVbyne7x6owJgEBJz3k",
  "key8": "2nsnpE2wshy6AyiebrUFwXezyUgQRQ2Nfh7wKcLaw8hfEMw4hzSahqUrTL6f1RerCU5Xjj8nYCCYrF3ACHAW6oqJ",
  "key9": "5KmK9PmP3MvLXSiRzsPUuytjT4nkV8Yep8EK94nj8FmpMZkcai8gSoeEFYVfB6p6vMSNWnXkijFCj2zZLhdqDkVa",
  "key10": "3XQJgSZoSqQCtYJxyiurDrco6URw5T2gFXjX5u1Vn6SCwkUXmEPDt3qyErwjpBSowNsvu1s9K3i4NUYC6hywKctw",
  "key11": "5Qne1gqGFFaEvo3vzQEkHZTiSuDURzPQtaCNYwhykRkN6WFdioyXD33y7tKun5rcMjX2S94ineVQb3nHJVgpSZrC",
  "key12": "2MaokswmBgWiNUTM4yUg5KtnuoDo4GedmVN1YzXvDpzZxqDxuGzk44WbjaWaFPZtx8oc6q6cauzHwE9bp7yZgW3q",
  "key13": "3dZ9hca6NyMy3BuW4ZkbMX3bgErFXuFErYRjn9o5iZz9iwLdUCkjzRuMNujpLV8gextzsjGpdPzuASKGv5bh9d8A",
  "key14": "5wWNkknv2u69XxMMq6KcamcpwvFeHgW2PhqHJzDuiPMRDo8zpLocDtQCeKUWrN25nNap4wjgkPdhh4AFGiY2wrzm",
  "key15": "2JL3f73eV1aYdPz87414jqAWpqbLAsSphheqLC587cq7WGw1gV8r9KUzZfVopNTZ514cz4bTei1pT85mgiSpN5aV",
  "key16": "4V2z2JY22ScxGsKDt2DPH1k13gGbQY2P8q6HUwYbXryYJuuxC7BVwuAJK8HNvP5yis7Dau6gd3jdTQ7pa6AXhruC",
  "key17": "2xBaJmr6fuyNDZxx11qP8s34qApT2kcNdtDtUxkdY5RQDQVodmFSxmFgfLEQ1HTPqv19Pj6pPzCFSt3u1AMFwv41",
  "key18": "2gDBWGPUwDn2oA6h9ZQA2d7pzNnkznv8EfedKKJoRMjkQKUFE2eKu6vYFiDETXfKCYRa4ZxqUidSToXqgxcYi5E3",
  "key19": "eC1TFwnv4P3AqTBT7oafZiAEvuF77jHsjLg9aiHnxKP43KRB3MQQ3CTxSxEMTmBxw6PQAEgC6JL1fyaNBMYVBdd",
  "key20": "CANvD37ZeNw1CLcvbcsZqenibiM55ntvcJweHpuxiwW8R5UnbXaTV8aZzqDzL6xqhUwSXPQdRgkhqqwtwyxQkB1",
  "key21": "39nw7mPVKHY8FzgMTGfvpWV6fVsspSkqrNoZDNKRHa5Wp137KQvSkby2dAh2FuZTrG5dvCE1fQzMiLUpcNFW4SnF",
  "key22": "2g8hHWyEqD6J4NLvkUVSVRy3kSJsTcWofgCUaxuzhCUK3penNY89UbQHTyLBNKLd7UBFUgSemU1dVCfY4U3PFqS2",
  "key23": "42G7pw9NKDPJEfgQR7SP4GMSE6sFVH7dx74HJRhHMUrcPAqLhtdANiY1A12x6oNPqva6enmPU6qYLaYu11ov1iuk",
  "key24": "aksKYUkVdKXErzrN7ohdhpScF9RDDnYpQxZ4WAn3xqv1QbMRwzpyRSdd4GPfw9wJBMR5eThmnRfi8RtqWdfLmSS",
  "key25": "ZEJBdGB4QRWk4F71P7GMeMCi85XX3kTgd4RXHfnmdaoAmFkhFmZjczjrWcnYU6iJk8ht82X7CECknqrSdZ7ygS8",
  "key26": "r8AcvLK4m8ZQzM1yKfk2kXgedjZ6oEWupshDkJUGf9xopbxgiGLYJcMaVhUbYSE7KhCyZh9YKmpLS51EPxB5UCt",
  "key27": "g8rrf1KwP73YS4M7hDhCjDwAY8pFQ11PXziWUKHuwdYZuqf2U9cgsD56rPs9BNm3Hw5V3hYfgA5M38NAjmqdfCB",
  "key28": "3wyMuEFqbSEUEcR5sj5U9776sB5JugSWcCmm8dXSijqgzUT7vjyJZGTR9RnCepoBSv9pYteD8vrUmTSQpRfUAdw5",
  "key29": "WSEWg1uBgzsNZEq4meTDPxe39wn9PfDcigRXhoFxZ1JBo5vvCYrs4tHB1oBkbt2bVHemgkVVCAvK1HnoupTZLbZ",
  "key30": "2w8ug3ScZ5NQMqmQ2M4Vyr95JDqgNvHiwogrNfEfTqPuLB7jrNePrmDs3sPriCjWn4VjLitSQpEnQhryskW9hVRE",
  "key31": "58iB7mottEmNKEeHYSsh7Kzu3LfJ81Nnnd5TQTTZudBZZrWNqEpYi42gXwS45hHezT432bReaBsRwobWgmaYAJpV",
  "key32": "2BkxBZB8kwNKUvUhHozHHvX6ojnCwuvmALqcJkLGNekTxX2wzfUtTUqLZrFkVjDjk9iogouT2ihR9q7SW3zyyzKf",
  "key33": "MWXU44nF1AoH2CGshz98yitsRkgA25SxZJiE3s5y4SHTjxaTtStR7PxD2Re4Nz7kzu2vXiCScTBJtTXzeytSpkE",
  "key34": "3L6Gu6r5XvToZ5iEZBgNzqHTaTyhv3MKLwCsEmLXYURAGczKTSfeLZWuPtKwQEPhq4DENNq73VGYVKmT3pTi6PHG",
  "key35": "2RLSHr9BaQsjtbGWHnK7ri94k24hoXXNJapEBQP4EYwLBss2pDwfhfkUR8rwdAPe39VdZXjpBqo5abYVXJF1fvAv",
  "key36": "2kqFGnGgeQbv8qCQW9P9jrYUDnsnpau4caPoNt3eb8WbF8WeGcz3R7QGxsgrkZ4rY8WJQFhJD2r2cJ8zrL4QNRCC",
  "key37": "ynxjrBFMTxRzhVzzz49VYorzLKqCGC1jWjQRdEXHJsVDUPr5tsfwYJ6FwMAwpRVfstg88VayJJac2MdfobbuBLk",
  "key38": "31nwQ2yFVSJUbMSUynfd757kt1N6GLVeL2AyF3gEjSQo95Xh9g7NGtNso42RhWnMoSikpgrvzdTaU7x28ruizHzE",
  "key39": "2yWH8xGhmnN2HnDmH48FbahdKCNtXRnFVsQe7MMTKYVzpEsG6i95tWo1KDCooQBitkfUq6q2M7c6ToaMYQQfTJJq",
  "key40": "BkzUL7wLLcEPzMjZPzpQQxQmzU27QNLV2GLsbrKCwsjojgNfeeTLC14egKC5zCssBA4MLV55AUyerem1mrr6ULg",
  "key41": "2MwtyGVXcVxmJ8CSgxzSxDyyCJb9aRcVeFYGoeT9UviqL5FmKrR5W7tDkyRduX7FovAax7D9sQCDDJ2K14jPe2Y1",
  "key42": "3RM95HQATMX4UbURurpy81Eg47zjtURyyeSHMSzhNzzS1XZfE23upieCzdJveeTGN4vgeeC92mttsJGoXM2R5t8z",
  "key43": "5bgKmLhNe5Gvsz1EeuorrhuexAqi7vRK6vRgBmY4dgBzBrHghfYE6VzFp3s2sssAfbyNtx53DBZNxsgGXtdbYYZ9",
  "key44": "3GiXhNFmQYtSipQZQVy4ZmJcBzh8X1rjtPcNXf6zPRcZ45vNEJyYeeoEbWuDti121pNQ8vj8uk7hVpLXmATbxaur",
  "key45": "xmqwkFw1wJTN5Sggi1NmYezQsSZPunFPxG7LeQx6y4as9B4n3aMrDCroZ9UvdCN3g6cXtXnNN4Bkeq53oRVxtHu",
  "key46": "3cMQeV8qn3B3vAGVFrGjucuVsbENrPFHbbExDtdpycpH744qcmDrz4wzDaaM1Mbk8s2S6c7P6cEEuP1YcJbSJjFg",
  "key47": "2ZmH7SUYPr97aDxJ5cEnkAS6eceTsAVuV5uZXSi3aJVrp67nVGedjz4NM4a3DLnWc3thGhVNsEFY3ogT7sDu9EGE",
  "key48": "64mKjsLEhmgEPo8jgrCRdZt1CfvwZJ7nEM6XJ48TUpk1zvYYPKgfYiuF5VQTmJjTmwevqKk3jL7CDjdeCRMjgcha",
  "key49": "5nb4AZaYQvxzSqj8Gt5zeTKaawBEd2p8NQ8DTUHiNstLy3T9ERGyvN1dkmsR7PbXF7zh8j2w5mJUfjbBqimAkZYy"
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
