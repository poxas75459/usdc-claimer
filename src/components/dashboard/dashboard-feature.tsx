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
    "56rK6E8MY9G5VqG8wm1EhqxNReSP9TeWa5G1sSYsFTiUFbFrm8iHPBMfZK1a2P3SUZCKa8kFeGzXSEwSoA75wEfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KVuw7ms3at3nn7E2AfjZvy2FVk4skMeXx9xgoi5dYL2BGXR46ZqtxVrKFDNiyrYJZk6FhSaV5VyY8FdZsxLAbBW",
  "key1": "2pVQAxkZ4UwN4euNVxaKSV8bshXnEgEjgVZ13YEp6qznwHGM8Rd39DCCdtAmma1yXKoNUK73TJNnoDb8YKDMrSCT",
  "key2": "7HhSdRwNBySyfqbJjeNiVhc5uQSeWZGTPr2TiYdWHiADLCDz9y7Ye8UHrAyeq5Vae5Tf4xvQgsf4HLHAHj8WfBb",
  "key3": "3PQbLFrfMa4s4wnePLpRhXdodxeTz7MqrGA5jyQ4LY1WJEVb6ctN75hbX7rzXMVeqBiAfPaGSu6rLWtNzD97bwaJ",
  "key4": "2RkCKTXoB2ybRyvUzQfy2hbUstqX2aNzKT1koUs1KRFQ4riz9ztqkXZWoJ5oDyNARh1cEfu5Px4CnDRv4PihtZmg",
  "key5": "5oYdGGpSBaw4ZW2oDaJpPtMahynsszkn5y62jE1t4rA5yqacBevndW1svQE2nAuFeKJbZ2bWVQMcS1SqKxLkrJBV",
  "key6": "5pCsLqZFL9doXck4dW1uSmdzGmRYPCJxRmgcZ9ZpUC3St9cjp4283c4yj1AuLygfxH4vdvAkbVs6PPDEUJyg8XwS",
  "key7": "2dmMmPC3vXGkGXAHhL662qUBtNgcxAuCPaPZnkMnZQtnLS1PWc8eQie72D66QvGhnc9LqcSX9KT4W47AJB6ogjuz",
  "key8": "hpS5otnSbmUyutSbVNtHcQSjuwiix2r5HBKQrHTTS6dgHyMAhegy3o7gTvtsETmifzZRem9FX1GFy94ahr8Xnyk",
  "key9": "4EjMZkQx1QNJoS5L9HuTns587Asu7VYeQUfZHUN8Dz4VY7uEp3Xzd8Crakx2nWQXNswjibERNKUBiUTwoKSePXhk",
  "key10": "2BdtmxhjVdrYshVa3bD1kbhwJnratNpKW62zhUt9983EE74RwMg8hqGZMgNVYWKHN2NciyJ4uLNhwGw3SKHMvj3D",
  "key11": "2JvmSba9JDN1dabKwuXNsuhUWfFEYUwooQghvk98Rh5CbCL2mHi6YyUcmmwc6U3GLZP3T8nL1qdZ3guw5DEMQW7R",
  "key12": "3Hgipm6oPaQVks8iWxohq2jqyqVEDtP2uuooqXFi2YR7pC6YTDJJjVm1GCnoVvYhAcro5zXivKLFKEpdVhLAt2xo",
  "key13": "64sXMji2puWKKzsRJ8cWE7q5HkR1Zd1uSePvZrf5AEGKd9ha1fD8dnbn3dT2YF62RmL99HxTQz1awosaJ2oaMUe5",
  "key14": "335hvheuCaZQeyFt7N4BviPmUBE9hH6Pgps4LHvb5xYxvynt5bjRnpnjNFc3zQ5RcR4CC6aHMygppuzByiVQaQzw",
  "key15": "5hPD4g4toVszKUbkbox1trXg8mEMa1XgQjNAUW7SHv5pMMbDZsZUG4ndZ737CYkmbb5iHRoED8ZsoNEzmNWycq3x",
  "key16": "5oQsxNSvo6Z89bET2jac9EYJSuPcCd685DHmQLXMaBxqkmgM6W1fBJhn5VsvatcQEZErrHCqisdoPd8DxxazDZQf",
  "key17": "34z5BVveTjLrCHa8U9DqrbBPvjuKmLa2QdnBmBJCY34dwvHNEHWb8QkK79Hs7pKRaJTeoUNrpy9Wab7k9cPCYRXN",
  "key18": "2x4PvCQqzt4yGPMUVKiGVmemag38EEWGL8Atik1wvqugpnm9pPKNsK7X8BdbgDM5VAAfGpKuC9kuwVp4ocDjazYg",
  "key19": "9JgdTqbAfFcyaayA9zVCDGG2DRhSyL4HqYcRFcwywJ3XqANPXgCGbZbiE4bvPB3BbV9WjapdNGWSxGDnz2bznDW",
  "key20": "62HKkySpcKvieuyyXhVUKL4BifXa4hyqaJKZLmCpM9U42bcXoWGuX8dKeyNikRT84cYMbPmy7c774yiEmhPrm8EC",
  "key21": "3CSxdxqzx5oDRz9qh7vx3D1yWwNq4EHawkXSAqdrH8Ak4ZeEuFBaBzoMXgqZL6A8M2GGrySPez5ECVhFWMMtpS9s",
  "key22": "5vTvtgr3R9sVRk5ujuWcGhvN2sDreQUaQnymtnJR5L3VCYhTq4aLyy7XBgfGcyFxUwRjMEim4TWmyHShhkuEptyL",
  "key23": "thBHawuGgfzTNLsaBpc6amRXw1gki5xUR9w25LcsmZzPTGj9kUsK2skWKcLrunwyJ9jLeRd1E9SBGoeafgoaDn1",
  "key24": "5YLrYSr21qNRy2QTKTq3kiWCTQdrKAR8Hw3wpURZHv14P5rf8mrqKaEt3PFjgYZrSHxy2jW9AGLAKXsw7hvoLpzw",
  "key25": "3anMyA4RM4GmNj3wbvB6aCz1iFGNXJ9TmL3TDQBMVYzuVW3LPfCCupFDznjZM3qwF6YZdgATu8MzivwHJhqvy9bL",
  "key26": "31iA3NAL7nNQsJ1vwB39qiZpFyHKZ5a5RT9uKxS2iGukcPAX24AJHmE9gyf3f6bKFYyAEteb8173PvQfRaqj2FL9",
  "key27": "3QW4W3TgG38AgPaE5aaMsUPdRaKSXnmQwdqmUrwNfWZrsZqVDf3cd4hCfc22GC44SCJigotFEYBs9T4XdUprGtYF",
  "key28": "2fqNv6vnKphqE3U28mVtgnTDgsjuYXL5fBAUTM65TdfxteET7F8CrT1473dPa68r1U71wwJnNjHzRJdWCCW6QcYU",
  "key29": "2AapT5FdcNABgqrpwie9cpik7YmYY73tmGdUhFjrHnf57hoLqa7iq3x1xfdunvVhavtmherBNBdAxd32j6ReoAm1",
  "key30": "4YEAsFuis3eJj7qSyD8yzM2pocG4rNh5ivYp9c3yEvcD3h8Xn2dzT7atZmNMq9wPWa9aYUrJ4HRUZSs4pdsMGUD5",
  "key31": "4vAv3vGmm98KEyj5hAwYkWGnFepkig99pB4Hc9bhErJGJ16NKmdQuerNahFmQ1NYTAULNyAGkcsaTVz76buADigx",
  "key32": "2ws9CRj6CbeHnLRhLVu65Qd7i46pvkT3wNeWjzpppcUM8iR7ufs9Q3W9LZuVnD9NHja76jhdez1sVXHogm1aGj2K",
  "key33": "5AYHtCnobp7V9UkpzWNfYQkFhS39NZQek6FNCGpxx72o5i54e8cEpPrGDBaugxw3AFjQiaUdXaVo37exq957xCKp",
  "key34": "2AZD7emWWrA7kqQiXTXpScHmYFymWs26NfwJJDt4L62AUhymWsTTvrwwBwUE1avtbLRzNDzvuYukGKUbEj3XRyX8",
  "key35": "PKXqoyfckED3Sh2MW1LnfH2GfsuJLQxstPWXbwdPwsYra1iZhNcfCzsHGBAE964CxcRjGcRaXfrs7BwoHQUCueD",
  "key36": "4rYCC7sFqD99uMt9MTa6k4HMqzSJKRS5BDDSkVpnK6RDkXVqxzdqbNab6XQ3Ja7WfTDGnne2aAo4LfQxBhgb5AKJ"
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
