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
    "22ybaqJgEEuyCVC946cKt8JF5pYmxoSTXJW4hQd2LyE2K5vX69MAZRpxHoZ1D5pvRumF9MkLC7LH3PFxtnkPGcKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LLLwXaQobvTreynKaT1xmHRsP8EacwrcghTzjaAW2JZD9iRXVWv64u2coqvomJN2PbK4oYVgc6tTPdk7whhqECZ",
  "key1": "2omg6YmeP2sCPvX4RbyB2Ejieo3VPa1AtgSiHeQdC8GWGvrW2E4NrnZhk6u98bh7HHD4iZ9dBKgAQSqcti8jJBEF",
  "key2": "2vXwfsFKJ26Cc1VMsZjYsnJY3RCjyvhyUzKBQHiELGzBAcEspfNn29fDu8c2mRWy86EGmZmAbua3rAzEah4nrjZt",
  "key3": "5YL2poq17VbozY4jEF7kRzR3i5vzy6ncb7P7H45B4eixs42yCSV2ee8r66VhhiarejpayW8Z3XTwhygeYWttrVRE",
  "key4": "2s2iarqgvMi5EqnBPjpHHiE8Vbtz4LgjrCAtUJwpoRcaf2SAowDk546m76vDzF9xDwX3FpRDkZoVQTmrCS58bTQY",
  "key5": "4CnaeTLgY4MnzKmFVXbRvCVPNeo2LBFBTv9k88pSBYffwLo1FJDWAXrpUdgDjPWcE4812BsQ4FaXSBxz323YmF8U",
  "key6": "5TrpSwt7HcrR5PyVw4WyFAXRaFUtVEoj2i9ZXbBQB5xF2xeZh8kFH2GJUpPebrEJTUJ3NZMEkXsnZfb9pfPPFRX3",
  "key7": "4Q7qSMC1op6T6iMjjEUnZX3K1DBFoaTcG8xUa7L3VP6rkEC3wgVFeX9Afz9STjeiFsbpBEtur3NBfURMR2LNrXJN",
  "key8": "5WCQQKTTdeMtkAsT8LRUGMvDwh8HDJwxsso9mKsNDftHfwpE81BgxM6dQYLr9MHBgtjismBKQe7AuRcAJrUUJ5vA",
  "key9": "4ZpePBqXePZDjrb98puVtWAkgvpjejRYZAuSviGFg2iaZo5jv6BPBb93DEvcEyd7nzM3RzHk5gj8SirqGrhtqFuW",
  "key10": "Y8VbRp6SuQBYR7ygNJbz2JAeBhHjy7dmUPJ7dnRKRzvxiNduA56dAM2UEyikePyFeADJfjkrTAVh1KgJZ86C287",
  "key11": "3uwcE6HQv6UxGAcWt2bxqWf8qKMtAmWvZsj8LqogCu8vrSrvxWYXMtusKcqLRLVqtYhq5UWDManMGsYuqMJ2wMp",
  "key12": "qNPBZfWRD7Z3QtgHgDzb83yFdLSgGF8y1dNbjvdtvRe2fPJPeSGDef8NsErTVTmWVX3sdvU223BTZjhKed3GGgD",
  "key13": "2Gk18Fkrvb85LgMPXJTQdEXwapqQ8VDp9QW8grCnBKEEetfszVrRZh9Rs7emZPGAK1hrY4TnHkdLXHF1vgU3FymG",
  "key14": "359ybEkHJp4PMXjtMNbeBuYzbGYBDRy4P4ApwwkhRxJquugFUBKXiYpqJLycUSUF22ZPLM3qiFneyUuJHhBN4ixn",
  "key15": "397efdsfE6Jkf6JKrn4PQuCTu59unEm4az8RdTiRYj8kxAJajEN4yL1KCf83fbSe5MGQPFJvK3oo424SmuaB2k3R",
  "key16": "2aXRdNMoGqiS911X94L4X9xp6jsMLwP8TvJYm3jxeF9GfRahnKuNz7Nw7xtgvzeshSXA3pYS7DJX6vsgYoRdTq9N",
  "key17": "5e4rL6p4KFKUjq9PfJc6hpgYtxSdu1GYAxHaEL4RmUpngAmc1HgPkbjipPGoKg8LxH4cLLibeAaWRqhpFkiCZdm1",
  "key18": "3RUyAtGcEb1efX2m3oPXYqedSN3joHM3vRToqbBDcCrME78gDXcBRZdUhMUH2npCwg9Jw2gCjsYBoJyc7HME1x1w",
  "key19": "3MYhVNLbrqNud87aAEZ2yr4omYsEU2dYPt9msaPFFSCXgH1zXN7prFz28qZdHxDRHhZMexqUJeSPikzAmTTySuqp",
  "key20": "Gd3YXAkKGWnkZuA2B97Jddfvh8XXcogcRJVM1oaxWhFVpmF91sUhwuD3PdGqDjYW4k9mGap7zkcsosgTVfXGxPn",
  "key21": "3hWzTWQVUmK92rPKnbBkNLc6gYPpWcvbvefMmAGdgx3CRAjD3gFEbrPH3R8xfwUzgRLuN1RWAnmgKbnkcB5awtXy",
  "key22": "5WHQSr7benJbZ9D3aFoGw2mTnFKGGc5xWZnGTV58k3RNNSpccLbisnUvbsXGaDooEiYTQrHgW3tj5FPMm3dBkgvQ",
  "key23": "2ikp7hv72cyPVU5yELmPL4WVSPLSv6DNcRfgXBukyekEKRSctTqSqRK1wu7JbkfDejkBn6ukRzD8SMng51yZ34at",
  "key24": "2i1UGW9THWrncSQxuRRekbJmrv5D26vgrABZaBoQ7izm2g1zMjqFHc5pM871kihbj6J6u7tY6HRnULyBVKaBrN2P",
  "key25": "5hgxewoaUR2wryhnCmBUwtGnMNWB1Zk5Xq1hgVb5G1UX2NNc5f9irWMfuW6JAqSbezi6yyVQx2GjLW6PrepSZVT9",
  "key26": "4XkWiaXUmaT77DHjXi3C1sZrqzfLmaMdTCfeZvRSEEwJ1yfivZtgX3dW6dNyZgV3ekADVTK2GWx25KPFDsqQtJAW",
  "key27": "3rRHAkg513YjHBmF29oTeF7LtgSSroJyqPUU8XuVGfahUqa4b5rk1r7caCWEFdExaeDGtAxbfo3fBVnMDZYBAQc6",
  "key28": "2Phb2ZbK7eeN4mwsHvgJig2yy3E1gTXPyXaXPhwZjp5DWsjfWvJHuxfBJMnSPTEiTu1A1iiTFHPsyMBkmebJjEWJ",
  "key29": "4cNhEzcxHr874QatR8bsiwnqF8ZG6TXDotkAFnKj9aBpB7KDHGGVNTe2DtWGPh2XWBEaa8T75TEMdw79wLb9xo2s",
  "key30": "2a3msE8wHPxBFnSbfPXd7AjMdxfqypXPbfdoXWSNXByp4WKr6xPQ2UaUYpzQHDJiKUNLnAzofa1nWJi8zEV4iQaB",
  "key31": "3YRm5EGkdH7iUTpZ6znfNPzQGg3vhmKKYy4rz3CiSR5k23N8rosQ3WRh96b4S8inA3JSL5E8GtmsqhoFxu3r3hhx",
  "key32": "2k7X9ih22j6sPheynNoWoWGtiKEz8HPZokoSPFnwjkzpRe51HScL8Dquudu76nFb1qMHoKR8UCgDHs1ryY8E4Ykf",
  "key33": "22fmG7kpaSrpSW96eeLonneS77S6ZcY8CZDiCypjMfkztrukng8hzRjjUtA2ikJdnhraDtpPkcB7WjQnLD7TWvkG",
  "key34": "2sg1UjaedztYDZVh9KWr8Vf6bbt9ZgVAznqk3GzhBWpdMvzsaT82R8Zd2sFBeFg3gxerVMioXHcWDaivtpdgDXvZ",
  "key35": "3Dx4JN9QatWmNh3mEMrpWFG4dmCuqe1GLG9WoPH8nrnYd8LG1th2EbJsTDedQSom8WVmYonLHz7PHMnNkFmDbTnP",
  "key36": "5mTgpQcw4aRNySymZFRK2fShjSySw43f7rF8xLGQLSDejyAnHgEWb8HM2Xm4AZHRC2gUaR26M1LF5geSqjaosuS8",
  "key37": "2Xv5bDYknqNt3UYt1kv3vnkQ5mRT6dLA1N3ty5pPY8cyGnoNkvR9Rg8pm1XgmxmUpJgmzDL841cREoqmi3M7HaYt",
  "key38": "3qdzhMUNz9yTSGEmgrQ4DF3rfqCnZXvJXSZEDaXykqFjgUeEWo5ETgm81SUYWqXoahA6igSHenQHWYrPctpN3g5o",
  "key39": "3adH38oPpDZgdYp4b1jHiBsdxS8GiVGXJHc2ZGTbyzgKt7QMvvy4aAFcbNvgvT9FBGzkovURy4vFAHHqZ2mXoHCb",
  "key40": "US8E64QrKxJjiN3QUsQewNz2gcYVdLvQgxwgw5cMrTJvSDkwZ76PQztrGQp7NFiaXcbbFbQ4yb7SCujYg7gBr3U",
  "key41": "51iiPXqeLvv86xqdP6DxrVhAzYc7p4TUhP47MW55yS7FSZsqAnZ1XjYRz3j7n1bX9xNBFYzdi4tz9FUS5fFffMLL",
  "key42": "5n7xPUf6bFQcXZXuqYWDeTKr5EuSazBZVB6WJJ5CwnFqYwzcinYFPcprxtCZsjXUwhmN2uvu3mtpRmBew1bASH3w"
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
