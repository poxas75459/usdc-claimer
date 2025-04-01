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
    "3XDESMF7BfQv53esGsviyyXrjX8oWNqf7NohA2N1ejnFWGFLFAm1JyrQ4Zm5X7g6Avuq2vHL55iYDsTwwfnufzgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s6s6ubji2wLK3CmtV2EjZjtzoQHQe4Cj5UZ3XF1jWz8kpYqJH52XuLx2hAUkd57TKjFyht813tGqsL5BGR4Q4tG",
  "key1": "5QNaS4eLPUieBQB4MS8vnVdYBYkGaJjhZqVKdooNtP2B2LoKhnptowEhfwD1tcnbY43DMgvRy4gdFAksbsTrB14k",
  "key2": "4VCMrtmtbewurXp9kZVzA22CRyNUg1RhQAjeJBhSv9fpotTmcVRnDHSbmbxLziZ7LbHpb5KLjPJKnM27eeBRhiTD",
  "key3": "4nwpK4zhmC5jAAoKiaueJoFiUoWoNGmUiVUdRNqUQhX24itgL8BHKM3KvQ3iuD2x44TMzZEfxb5wgyzQ4N7tXcGe",
  "key4": "BfyS63pcK958ELXvJ5CRXy9a4RoyFcCQVUH5brFhotB5enncrxHRU4SAG1L3Dm3kH2srPpm4WYeL3XegN2xpBEQ",
  "key5": "2PcsbmKwhrEAFZEMv7ZwiMMRYWGvpr98ZuRo5jzFUfmbpFY7S257Y5D6Z8qum64RvpQU5UtKCqxCanz2AJzWVsJe",
  "key6": "5WajbMXMgJdwT2F9LZXbL51DD3diH4FdekCzNXKAsjDPWbuPvgT2LQjhBgtdMcL7dbg5WBWvBoktSzxNLkJXGx5g",
  "key7": "e72af5yegs2PWWNeVzQs6RsTJW6sacCV8CCHTMJsxad3iMPTS1ZqKc4aEWLUToUd3VczqoNYQ7crNVzUmqrnSgU",
  "key8": "h9F4kYfzwFMxbFk56m3YrCtu44Ekivu8VhW3wGuAv6nhGkYsMRkMrV5HfSQD5fq6VgUXa8yJATRev6HAykJiHkU",
  "key9": "FmBbJjaqht34oEE4urpTYkCP4dBeNxAbo2nubTTD4nW5vWCau6PmAxgRUqX2PwMS4n5E4YicaduutEpoDqTjrGs",
  "key10": "2CeQMmrcgKtNzcBbpjSUQNxgWen2icqCr7VoH4QcSdHXqffcDttPfaLrzJa4Y8imnoxty4DZb7GzwzSqsY8ZgN3Q",
  "key11": "5LiGN6SYfmyGnuKR8aocMdJ7dgHn75yrgGsxzvadjrZCU3Ks7hBrUVDve1pB4QnJgEKQUDm9UX8qmLMunZWA4sei",
  "key12": "4hqaDv9Lg2dihDv8vX63FBNiQo1yfZ5mdTLaf7zgfapi5i7PUwiFwSJrGncYUztiDSeDQvGFQSt8HGSK2xYryNB4",
  "key13": "3o4ggLv7oVLhNFngSyUdQhm8mLxgUpoSpB1vbS5kuYD7czvkEsZKZRWkSQri7NV1JKvjmBBtidahW3yuqzUDqPcy",
  "key14": "4oSgxLfd9QzsEE5Dk2batpydE9bsy91iRYy5x4sbLWfHxzmmsD59MsKvLXPPAN7W34ygcWXaW7XqZQrFrLnLs1r8",
  "key15": "2Je8eciWPy8AazBbKTYAxYfoz4Rh7a7dLCCAjpqpdGDw2hRvCPecWpjPhLYR931HvCVmm6nujZ8G8HzPkZAaGGUa",
  "key16": "2YSUNTeCJtUnMrgbSRuDrbnqiazA1aeb7Z7W4kesAGJ9v4zeXnksGFVhwu3Wa4FeUaq7bLsHzHHr9fPgQ4ddHgyG",
  "key17": "58kK8XAhPNF4jrRijYKvPsNkuiv35FSdnhPigBhDcqeyVvGavBybH9kMYATFHtHpUkKqptzu13gGnEjrUpVkcTBn",
  "key18": "3evp7QLNmAik51QEsKaHELyw9aWXR8BUFR4Sqs8pZPQ5zRhhNuaPsFcDhdeRF2weeNgaU2Mj83Xdy4mFrZ8ATd4B",
  "key19": "MiN9VRF17rewXAKCtryF3o517rm9yPaCfdHUyG4GS9EG5bNhDy9qLaZUitYf814m293gzDkrMSmnGQMwRSFPQmr",
  "key20": "5jcBTV4Q3P4FyuL8ksAJpyfSRa59XQmPPaMv2xdQGwTnaPmYKuLFKzfBt8U66gswzWo65mDQ5LvDcLHN7jZoySbd",
  "key21": "2W37VipNjLQ5ocuv4HAvXyHZuXD3awMEiJxqQyeZiCVjwXqWRneamBDjhAa8QdQAdRUpkBbeMC3p4EJVKignudTY",
  "key22": "2gJEZYdqioWzFLXTAE4h2neVGARw2V5g1G4w5s9bCFMKxmG2qyg6m1azqGGUZDicDiqqUMSfRudMpJotYkShGsq5",
  "key23": "282vRb4KXjMh1J8LKKVQN4WsA2M4Ct2je3HiNn1f5jsYnt18zuAc2ybRYJjeREX69urHwihebp7VhJi49Mpx8Pag",
  "key24": "5kH6PRjEDzvSAw5xRiKS6jt53cnfhFiVX7jKTdqNgXPfUNPUxB3sUBMTSJgRGDv84Zm6RyuT6f7t4bSuYFHfJuhw",
  "key25": "HxNbb6QZpnfgYHqVkCCtU1SQKajgcYW5pU2SoU2Nme7V5ELwgvptUtFpvKSA3its4BzEGjJiCDxtX4hua9wr9kT",
  "key26": "3B4D6nQzzD5Fbv5PcMrudKabLWAGDP8PbK9a9LZS3pPKjqJrFCQe9DtZQQ4ycATVBFXvexooAxKpV7KAPiniMyzA",
  "key27": "4PtkEuit1JjoVJPWaSZHDq8CimrM4qdoXi1iut2wUz7VYbzPdBgYoJvNNg3VSRjoYJNXxgbdW69RdxkNsCAaXUTw",
  "key28": "38mNU3UYWUkyNH3UhxaTN9d3fAifZLXBBTFb87qfqo1YxHzt3ZrxL9gFEW8sau9HfQHa2P7LxdRhzEdEn3AZ7b1L",
  "key29": "318yJfHUn5xNePer3joAmM5EMoLRaXAaiGyfPqbKGSPzTmYpU3iAoAvZRV5JTRyLNhfcAH8JXBhHh8qhGmWFL4dU",
  "key30": "2JFkkM8o2QSRcGPsFCoJX6ab59hSYNK6oEsDsgfZnNByz8hksma5oztpmKzq7FBuS8Bu7AXhimr6GxY8ftBnrSJG",
  "key31": "XA1xgxZ9c1KsZRpz4EE8yEDtZU7913XRUATV1QHopRsVb2GCK8dey2LDRCvwvvGEBs2xJ2VgDHEuoYTmubdKTJY",
  "key32": "2xEB8LTQVr91dSVnhUWo3rPPE2Zpa2NqtHq1pXQhM6aohGKkLwdALpHsriqertWip8rceaTNuEqYVmH9ZvDPfmH5",
  "key33": "51Cy8cBau52zkuSB2Hapw26f4nQtr86oDVVVPXZCcjqN3i5HLY8C7WiVTWzPNdX2gnoj2frJduyccGLBx9REbBsh",
  "key34": "3iwkCcvmcAzShEtntVzDSnAvnorp7NJG6dTjSECQwvDRSQegrxFMBHgnKucJUpa5FUPB52tL7RXtvnRV4nfy1iuR",
  "key35": "2feHFRDWbxyrqMcJGdtvjxKWj3apLTXB4PPpNBTMmTxAAFP8yRP4XBx4xUBtwk8gVdEeK1Su1HGWadnJ9ypd9wBv",
  "key36": "31EXseT9kUJE5MCKux4T7MiApyvMCUrBTieEHxceN7sZAjDWqAZKBDyAzmSRJvZEGznVbGNCBSU4TCFh9z4i9mPP",
  "key37": "3DuS8mXFDXxpiu3koexsp77FdmcLTUTtA6Kb9Qi5W9jZREMLvuyaFnN6TG4iGr7jAvVtfTQtM4fXJHoiohGJB2SG",
  "key38": "tQuS1aj3iPAe653gCJteXN4ki9Md8RPjgowuWL4HyKUz3tDBHKs7tAgvhJVchx9kAZLYs1PnD1mU1C6giUbTZy9",
  "key39": "2G9ibyTodAjPezjhUuy3Y51W6MaWGdqW3mKWvCQAEkUxQqp4SvmmbSm7FFfR7ueuQ4SQzvJrni7KJGQiULQwh9ZJ",
  "key40": "3MTxvahyKzu2ewdNvMSYXhRUva3sBBxud2sJpijHjPdpb92HmoUALJ6kzS7d8foEGYUEWD7AgPurXJ1baP7KAAL7",
  "key41": "5d4NbxK8P1ZJ4Jr2qiQqq9gxo2bPCXz6ChHUPGntPf8PHyn49dA6uexqyFKMXUM4ua46E5GEtST5sJyDy7pnFSmS",
  "key42": "5CaAPC3pWxFQRiJDm6nTB9vVQd9ncGsX4s1j1g73wS3gswY5HsBv6k6FW3AgKYb5YyrJ45yFHipkJ1VUmMgwkMmx",
  "key43": "5n3dRczZyAhxMWMT4f5tjG1zC1BxdZB789waRAduN6x1WE4uXTaTsTf8oUs7cMuUdXwHiPZbertL7BYTDzoXoUZ",
  "key44": "5b4fhezgs8Mx868EmbHTGQabpycTWhuMDGRTDVcoofvkh9xeSVYghiqAHA3vHCzXWZZidfNuYQphxvvKzTRDVZEG",
  "key45": "4FecfnJaBeBmPzA6BVXNyXxkQpcoC56Xhip8uYkHFVeFci8eAv9B8BZET2FDqSLtR4q4tnThuodg66kEemg51tm1",
  "key46": "2RGdyPGJfgZw31Z1pRmqw4UDddiZZ8m3d24CjR3xz9ccaJQxzozgqCHj6MiQHiT2FXVTYKo7ir6BkF5dKKquf9fv",
  "key47": "4QnadecQgRbMoGuxnjUuSkTuQ1zz1hDKcErV838YsrmfvxbwJVjcCyYmq5YEGTigyXFtAak3db1tfdJ9THCNepnL"
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
