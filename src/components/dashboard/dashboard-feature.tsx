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
    "2TJwrzUgKSpLCMasZGeKuRg3xLXHU3qKC2vK8LHNg3hGU1SKYEQ7nLPSw42Zs3W56KW368Unq1b9FgNgYZP4h6MU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xw6thWuufGuPyKbpYq1Egu6TBu9mA5uXbzJw1kfBWmMCFpN9yL3KWBvVb287BKM2AqfhHVxsDMFXNkYgKECmHWU",
  "key1": "4JpeAZV6xMus5UJCnYXC3nk4p1jBwKpRRydvJP9dCLDx1eT6QoPM5AbUfxnDqoSx1DshbKLMwEba2xGNFks6opiZ",
  "key2": "5PEn2kGbdLTSTfBAxisUBsX1EAsxVVx3PcA5AbvEphq3pex3cYgjsfFz8XmUS5kFLo8CsovY6nJTw3McvGPmmbJo",
  "key3": "2GrqNKDY52mHJnvDWpzzY3FERXSHYRzUknjhSRT5JjpirztE39evV8ztQr9mD6y4DMpJgzvvc7isao3GpKJvah1Q",
  "key4": "4Lj2JcdAy7QmxscirG3bwSGCePSrM4zmQkuKefzZAoAKUoC5gXfJQQz5NeZXqxA4Dg676bhFCtcn3oDyUhm6QJj3",
  "key5": "2RA5NekJeGYtZNNbqM7UnUEarZfz64E1uy8NAQCR4NGvyUCT28kqip641qe7WifKzGxRp421eUGxHK5dQ7qowabB",
  "key6": "3k9RYEiFEwTbQWNTygkUjNYbxh1FciwaEFbRLSQrbZao2HUb2CDVupx8fNZypasBzkeQhmU3vt9CsQauAf1cyFLF",
  "key7": "3fGqC73gZYh8Z1cuGdGMmH8QZPsq8n7Mkn7bbK7dVTatBz47EdCJNwHVC77hqrZo1k7mALdL4dPiELgtEwR9bFGN",
  "key8": "3z8fDfWT8Ym2NpFnxR3ndnZP4Ra7b2PU3y4h8fYRNesWSm5irnEVAziHcox4oqCVja6g8xMVzTjjcpCG6NAR6SpC",
  "key9": "5LvLe3NdFLVp6wtgDTdC4veVMykWPMRRQp45N7Q3QccJqTK5LJUTb2yMpmDVviCpneA27Ad79vzSbHK6ATC3N2GP",
  "key10": "4BSq8w4FUiBKqfiGqcMDzpAWosqgTyYNvawjRfra2ChRAawa3QLRxzxd6xNifTxVmuHNb1PA5kA5n3fz8JYTw6cG",
  "key11": "gfKrRgox8aMMFkWmrC1ggGgpqUub5E7jVRxxey9A9ZYxxJzm3kxwjy8FnqCyFmyXx7UM99ALcKb1N2qWky27VTo",
  "key12": "2ZNjv8UTHiRXxNuT3zHsTpZesJY6MjJE3fkuWd7uExjWYDFTNRrNL1JSy6s9Nc3gVpY4sq4jJH2p8wh6NrHwmBSb",
  "key13": "5rghumvWnyeBdThVbTBKJGgedJDmx6ZERjXQ7grYKSPpSpV7LLBCn48co258FWJD8EJk7w9S8eNLN5aTeJCQhjx8",
  "key14": "4YRYhA6gwT5h1z1DByM4F3GNwP8yejg2maazn9q5YKD6q3ySte8Yo5CeXKpzsQxhQzCDrTohXxNcD9CRfN9pHNWi",
  "key15": "3pWbStAtzKrartXtipsyuKrFUtie17Z1Gvo2Kq1PGcM7pm7FMmqBZK7aciRVDdkPszM5i3kwyC5o1WVHrLWVjzn2",
  "key16": "eBYBt1eZ2WbYxrDcePvrtueoD75ap1RpHv3hPYpDktdV3JFdicmLFUaAexQt4iS61ErtXUpDqWjZg2KAsoY7Tf3",
  "key17": "45oihWKrJHqxD41jdWXV3aUTY4bg5YwK2s27cJq6aTtCDTqFDydaZCXQTfMYkhHV4Z3Skvxf7FTsTattfXynNWpJ",
  "key18": "ALHTQPptjmax5PQHNRtUzC9N2YpLCMPikeKApmADbapV1VATV6roLsTEdQnqJYpVnpE9mDq85BnXtG7LNTGXSoA",
  "key19": "3PsEi6iRKd42C8g9vpgYi6qB8nXqR7PLPAWbiKVcg6t2sWhGY7SA51Nhdntcp7v58PGHNF5a8Cpi7uEZMgbQnkd2",
  "key20": "2FSKU1F8MxbDSw3A4ACbxwq3WFXGxo3QrCEzUeYSodv6WV9A2VAUjYbqqvwPDc9WKXc17Yjzmyn1qHTNVaJeBt6A",
  "key21": "46cHUvUoz9vcCunh7CvMFGvPD8rCwNzPczDrALqJRSXne9cdU8hYyVj1gbpLmnuAjqHU5mUnh13gjKsWYL44T22E",
  "key22": "2oiKEGjUfVtERQGqLEf5oADDCujUksPNWM1H7hVJBhohmNcJj639Nc23oTHskshXFSHEJkmSJdwYP1MZikEjVNco",
  "key23": "59yYpARPx5meCXMES41uYdz3ENSEahEMYtD1veXhS2ifsyrJSRRmKuehhNbAx8uj5VVvkf7N6k1buaE5NDfiAe78",
  "key24": "wFRJ5GiG9RbcDCDddmRVSFzVAYsciNygc92Sr1Lnni2f54QnqWwKsLpGGnLPEDForvRrk1ffKQHhqSU6e1p9fez",
  "key25": "5oCZmD4YduuSkXgW7EgtoGGwz3iLim2XkbrhgLnLVMhkZWBtyT3YB6mtC382CURpfRmNSRjVTk8AGaJxHwa6nF4u",
  "key26": "2vsKMLQREeDjdGWZoqC12mwo3CKrJJXrYnGXnDfsZXktrmHVoLbLTAEBWUq4yuoTak4BEHrEpLTSkyXxVVuHMbou",
  "key27": "39QLALGzYMKW4o7Uq6SsqwJ1CZP91vF4jonvuXnLFKJr1TYUctXaFKZjfqMJRSDUQxHDXCTBp4xK3vKWt41oRYwS",
  "key28": "5XDkV4iHJNVeLRsR7sWNEBHjNNmHttxtMyuApFwmoZMgWec9fgG6JonYTbFreKY1DJyTTM2Lef7xHHNHm8zfyvFo",
  "key29": "4VCck239RF5dbrTyLDohvWR4Jd5Eo5VNXvc9p8tJ6huu79aEpSrcZrEDxjZyDpTRXquQF4jfZkw9GSWeB7W65RnY",
  "key30": "3tpuiC1n8g8FT3nxC2yp5ZhGe9s9iKKqgdJF9g27guRyBTt75EVpSc1FGuYSwjXHKY3NDxdeLzsDhk9zAT3DRZtg",
  "key31": "2XximjGA6t1gYcM3QJVKWBM88DKSzK4GERNRtMpcKRBU88Q8b3AHqcp8wGFkJALH5jR6WQDD7rKSyxU8fj3BB2HC",
  "key32": "2QK2H9aRsedMjsPVBpAxaQFeSWLYYJavU63Fc5SghewkCy2P3pnKVJ8Ho3gZANeqt95pQVBczmCTFhR4tS1GcTJZ"
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
