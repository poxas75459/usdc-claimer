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
    "3a8xPDXBLmVdomKVyKpUTU7VqZquLTTUo3t5fccYbpWPYUhbeoQcuJafpzRubmTLdnGJx7PDWxWDYcHCUvu7YsFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qc92P17C6oEHC3bqGmjFJvCajJHUD3jp4WfZfFHxvqVHCRzbnxTVY4yjkyDx8wyjCLy8X8UF8d1fXreWoydFmtD",
  "key1": "5tgE3sX81Us47eKBoQ3JkrjZEqkszLm8pcpWrUpPFmkqcm6xpuvVcnfSLjK3SmJeUTKEpN7PwRF4Zwaf4kzfEU5T",
  "key2": "3UM6qWAJLM7onEjAKiWnNUaZKRfXbgfwL73YJZtfBQ2EoXQ5NmbPzzHvJkL8va5y7DTtm5ti9GvnbFUqzJkSXK3R",
  "key3": "21QbTJaLwwokoUSjxPQtfdE9E333MEzn6P5i68b8Pm6YLjzo22kTUw3oQT34iTpztrmddXhanjoWRxN8CgSZQfkS",
  "key4": "5gkjNZjzBmkxxEe6Y2XwBZSnH9dHEAdAqJubgKFJcGuEYKEimEh6hJv6ZFZG3K5PDEpuMSPGUV2rrPHZaT3wydQs",
  "key5": "fRC5856g4KX9soTGRJVrerVYtzZqT1tHm47VvQW1uDqu2e1oV5Y9kW6abrdm3uC1RqgQCeV5nNq2YpV2zYQcJZG",
  "key6": "fGW2rHHawA2neRSDSN7df1cEmHj2A7dzetapA6isf8S4qdwp4S7Ttbo6RzDL459AU3cQkaCGjeL1ftdSRgRKGQu",
  "key7": "3WZaQwXmA5TypUSBjUybZ6fybqewKKtWjzsTW3LcUXBJrLhjxxSQbwpDgaMKRC2T9jAAqUUSncG6ZciVarBHC625",
  "key8": "2xa4RH3Laxz4zSFgdHyWF28gfAGzUwPqQCcQuwNFnpe19Fxoq5iPfnhXwzdHV17zfQqLneN1erQuqMTGLmR4vgBX",
  "key9": "25R6gQveQTCdTp4mnaecxCYB5nDiFDaxMnesJqD8YXFXyZKjGjgD8hTCY8Y6ecbyJZq2YSj5nFLnKUeVNLRMJakv",
  "key10": "ZiWvrgnQjn6tz7ceadkDpWMmFay4bWWqNMHHWBEiwQLvCjKGSDeZtEKMApVCsAdNVrDHcqdURJdzd8sLZ5LUGHC",
  "key11": "2rVdsBW3zFQfvmopcdwR8bPNEtZrufJzMDXbAQfgSitrx6UXDrJi7BBTEhQmRCxGR5nevZ2guvmV7kuZbLS6PjKe",
  "key12": "5qQFw4Bco8wHJ6YHnf3FucBbjnawAqAhbjtuFmDMExTo1ZRjxEpjnREqgfUKopXcyaLHMEoFZjCtdkenLkWKabbn",
  "key13": "UUD7mnVfoQGcpUnXBKKd7SGeVovnq7dKEnr4VzEWZmmv6dzRLadvH3zHqYHCK1WFLPtjLNN692uTpqDTPC3n2b6",
  "key14": "387rGuwCTDWsnYsUzEh8NQHTWupernqJGBLfAygoDXQ8kro9g28A2RUGYD2b5R2yE4ZvM69nAhoBQYbViFPnXFbr",
  "key15": "3TNBmhd4eX2GhA432RiJSkwh6TYhCwSCukmt4AEPy6wWXM2rJhDkSs3GjVJ727uj2ha4KBp8nAedWSXp2DNevQUW",
  "key16": "2bbgnA6RDDmMXSPLq5GzM6b4BzFoA8PVtgBosb6BVvFCSCfeCHc2FhK72yRJ7b95Y3eipW6B9b1ZwqTBR2oL3VEK",
  "key17": "4nCBU84JNH4RdWc8Hh6aFLZzJTHUrHSargDxN4GmQALvDZ9YuXN7EQyuJ78ipRnzz9b9Nu12e5fcaiUghK9if3qn",
  "key18": "qTVC3Af37RCBqQUwyX1vaCTYxMKnFRFrd6yGNTUEbzWkWzT8RNXCdTTEdzkj7r4RGJETioistTN2hvYW92RUBua",
  "key19": "wxbhEHghVTp7kbTxnooEWYKSeB4DFMJk2tWEUZr3M8aoB3uSKXh3x1RQ9WBPYZkh7A9xXjAtrdyvWKaHUNXKshX",
  "key20": "3vrxbGYPmyrp4pV4norxustnswfDdDgecwRs2Vzs7Ep2gcESENbVEomzKCd25B7wRGTsPTYK2MWnH84ZVSJSWJUj",
  "key21": "4Sni7nGEj4HASeEGnSxy5gU8adyhpLnxKehFtvXja5niL5qVFHZtc3xAWTHmV6YmVKbLkfveYCGJ9Z6pZJ2USnCB",
  "key22": "44zojbBoibNkZgxbr6h9FpYLMoeDjoZQSEfmkmteNFyVaEanzTsM4KDxmmn2G4DQCp9ugf9cTdBEZnpQX74196Ao",
  "key23": "3XVpgu7bQJBpK3EpKGKryVYmwGN7WA4dNaR3MZyPYjcuo8c2hHUq3jYgKz1aZmUJxAK9yCCDocscA6ksv56dn5p2",
  "key24": "5X1aYV9Sw5CBqVmwSo6piJRebbLDY9cKmezqVbK4NJdqEztFAU5ph469wrdPkWp51VdqA2fb6W65SoNZMvv4cK6h",
  "key25": "tTSMQ4yiKzCgHBfrbCfwARzGi2MdeeT81TNSYEERGmtXqTdQMUbuE7UaS5uWJudTYxwDy39xBfzXYJT3ZfsCMDW",
  "key26": "2qugG7DvCK4LYrekw4F6mz88HskZnQ74b92UwQ4kSLznCQm891XajWJUtz1n17fy29qjePrK4SsQFKaR1U8Tfagg",
  "key27": "35wT5TczvxgBkwSs2fQLUAZCAkaoA6aU6a22tugwtqb9XabhN6CxRbQCcTMnA9G2dyJyPJ3j8Sij4dgmo2xeeUjw",
  "key28": "5oce59fTibFjGi5RipAq3n1d2ks5hKrarwwBaSfxVEqQhYsMSTtkeKrhWozRitJXDRJ2K6jApU7yKai6gkkRZEUx",
  "key29": "6621gxBU6ZWB88aqQt1fsauxC5Jw35nHLFa9G5TW4yyhAv5VfQAzB3EmAsHWTUkYPgehNHzZjmMdfGgsqPV5ym9B",
  "key30": "2VZBA2gi6gY2xkBwSiXu1VxcYZT2K1wwZZTycruteWd3pXgQGrweMD6yQtr4YrDSi3j5TMgm9TMHN2JRQ5nazr9u",
  "key31": "5oUsKEEFuXqBDFCwkWiFoXyTBpTbVK4MfpM4U9JN6jN5DCFJfVMk8TgJZBicYsXwzhGzABK4NeTFortoq2H5c3aK",
  "key32": "5EJ3UnT98HZxxo3uG8YNAarzLYztuvnJqejjusCW1KqAB35LYiirZpiwxp5Msq7761KJB6jrZmVPvrfNM6eK3FgK",
  "key33": "3f6UJLk5sE2raNusZntFMpikT5qhbHXJ5V6M8BfxHQKdwgxNKXkzzWjSmFo7pb3USH5oC5ZQvaYoMPUtcm5m41Bk",
  "key34": "3Crtbe3gk8TKLjxMntZMixAupkHhpDX8oUyXyZsAA2ZpPqdzsmtseDe6FAu3Ka3B57io95NVfhVjcR2CxKom1ypP",
  "key35": "3jgMv5aYZH3KGUWMuVuJhUvUDkqTRXktGc1vTitBRAChxLreCEZfB5a1AchrjasZHFYZx5JsFsN9dBA44d4SS4tJ",
  "key36": "3eBnSPZVMHb78GFtsubCCTd5wVnxP1YnmhFrTNMX4vDDoN3UQaQQicqc2f5PeqVZjSzUHXVHkQx2u96pPU91vxUM",
  "key37": "3m8jU681qC6ZLKw9G1XGRQzt3tqnMEBg6Z7YT1KuYC797xhEQf7EATp3uQDEZna8JpzXLnG55ZgYiUQtLTmB9pZg",
  "key38": "45WDLV8ief7f6Q7LJB7sTMS8NacQD8n9efwbDPYWurd2w9gDuCzP9Wqg3jUCDh1oDjjQyU7rZpxFVCfcuMFHbZej",
  "key39": "2SeoTLG1YNoC4KEfFqwzhm2ay5LtosMX4qFqaTqfUPE5EWato6hsER8brrisgj9qdqR7pPEHccTNP1drUiucwLGe",
  "key40": "z2Jeye8RBpgd6wnRFbz8WnH7B2bZdBprTYkTeERZLrmw4BBGdd3jGQz7qZrQAZ5cKtxdhbc3LubVw2XPyfTQSL2",
  "key41": "YXUZaAgDjhx9NfqgftyAnZf5YKYPn812t7eY4kxZn4pDWd5oKESLVnkAviDSUYFubZVmFtdnxXrKzCxENhkDtfn",
  "key42": "3TxDzEcDvWqVHbsQGB2boFeu2dtWL3QRmq2pNMyEEozdvXDrboiEnLzEgxCn2DR6VNhEpoVJ2yhiprQEuEaYovsG",
  "key43": "3rY5GXwVTjAbf2QzS6J3U1DbXWkSWRy5qwEzZPj547vCiSMU4sTaCvVtXoyoVpPKR1VuBtFmuLG8K69jQYN2eXep",
  "key44": "4rXCs5uTATea5QZDsVkaZnaPoX9GFsr9KzwFcNt1anypvtf2WokHffJGajfzVNPrPBi3ws8YewJgSLNHdT7znuBB",
  "key45": "3ZYWGWFDGFBpQqxdTMmjB5erEkqVsmzSdtUX9UkyYsYS6sPZgR5kBPtTEfgqdPdDbiMEMgUCu975DuyURmG5Fom4",
  "key46": "2WfChrCpSkNEuubLvfQ7za1C7EcyNQqwpMDp7pom8pCETGjBB8VH2danCJvtrBK43fZzQ81AFzyX2tXqJL1b4e6s",
  "key47": "5uUENpTudJM6hiSxuzSMKxYE54FjHSvywq2qU8h8ecqWoaGTePj7s4HMeAfdKDd7aAd8wWaVHcoYTiQ5D4DknnzY"
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
