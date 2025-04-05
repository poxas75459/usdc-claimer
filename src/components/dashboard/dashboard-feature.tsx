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
    "2Qd18r8aKMCgzi65TefEbT48V6QS9xTZsr8RhHqFGbMa5TiW7mkGywHpSQNoLa4ttwUY9hGwiVDWUWZxSDaSuo17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51ym8aqLnMjERB4a6J22BKRkineHtmndEZohTNzsSyvWjF2h2MGiuWKKFRGa3h2K6rmpBvBpKGfHxKZtWhXBmwhX",
  "key1": "y1TRQfjni9xfm3DKX5tCANxwRx2anYvZEWvj5VEdHxgpMgL3maw2e14AsQ4YxxD5in8b8m6GHvprDMLJjJEudbQ",
  "key2": "2jNHFb8HCeTGry2XeXbpPuDN1xpXL2iV5Jbng69i6tbqVRvhFWuejE9GtQRRccMVd2Fq9LvCMNKAaEV2Tropy12h",
  "key3": "4T6vQF8KWdViP7V8HRQuaCBz8U9nBy28qakUPfxJJ78joSap8ZS47VeYnoQLmSVoafbPDmrF2K7D5ceRy3zonR9G",
  "key4": "63nFXXU9u441Y3fbFXzQR7QgAn76TziH9WT5YpeNeowNtTBQfLgLyt24rcasBzU7E8eAxeogS6pZfVLPmUNjXE7x",
  "key5": "2969JZiDF3pUconERGFjGGeF6KuArWYWvYVsb1YFirQ7ssPhQBNWQNbK7sf9tg1FkP3eTzdbHjL987fqD7urfZmJ",
  "key6": "2zABoPapPhJj7BzdjC7sMeHxTfNUfMDteeGwXphYGuBtTFGAA7LWPhDi1CYQZugL6Rt1tDXzfLSu8v9Zp8ythW9X",
  "key7": "25dif4ahYwSwC3C4hfnzjvqoAsBV3waGCfyphcQMEVVCcGgCr4VZFUTZziyVtc7G4298RvXXTYeoF8ZfXgS8o4Hj",
  "key8": "wyNg5M7wE9o5RZerPxxGw2B6VsUaDx5kvYFUW8R8Wv1teo4hqsbCXKLxxSwfdYdJhbaABw5u812vnVD5jdyan2L",
  "key9": "5EWcG2dvF8yLjVFr6HUx9e5XohNJu9oZ1JvpKtTD1ZyCDsMgL7Dw6cNUfVWuAGkyvMQGJgqxz7q7ogAKRLF7oXqT",
  "key10": "2pLVDS64DwLSpW64x2LVwKTo6zi3XSMsw4dMqYjy1Q2W1DNAMEW6x4eMkFc1jrmzfdRux8PC2ftZ9p9XSns7QxG8",
  "key11": "5k2vqdVLjnmajZwhbhbZezu6wMVBF9JZwHeoH6v3YXtLp7TA6B3Vqp65914s48Gqres3wdLbixh6Xhp9dGEQ1qhh",
  "key12": "FEsjDCRNz19pvT98cB98WpkR46u6XUpzdGHQb2A97gZGWz6pyr6E1DWweTqBZ12iLh3Rcau1PNcoVPm635Jzq6U",
  "key13": "3Zt23NAQwQgyEdTh61axypzhmwvm2SJ581rHb6u14xx4o3tv2QuANteVF925xzTSceapJtg6dqhv48tnUhfn5nti",
  "key14": "2ypwz7Nu7mHPuucnFyfePa3P5kVVGWBCFcHJfKW29jJouk6cjPJ7cGcvbd66rVPKenT4ox3uvQYxSyyiSLrbN5T4",
  "key15": "zuGni6SJfQNExVkfMMTeS4quKXhGJXgroB4QzXdeg3w5nfHbK9yRi8ZtsxJsu8FLWWUrugGz6qjxpGGpJYh7xky",
  "key16": "MbZGe9GqhtntZPmZhdnvsbyAvSJvj6QHyReTxTVBytnpHrGaEhigUy3WCamgcavJZNAgLT7a7SANv9cW38DsjbZ",
  "key17": "29XTL2iJyKWfoYdadmNdpYgo7TtNcyAP4ohmEwLHRDRXaioXctNDXrW3RD2T8MD1MvW1BZf6Ni3nfJjWeh21xgqJ",
  "key18": "5xhpTDwJBn8LAo9AyWxh2rJeyYK8CK1kAbJoRUXoLR7yafafYkpf6oHJ3yHS7GStPxatVVAnnmhiuotpAGzBnj5b",
  "key19": "otVbYEqFKb2ytRHsemVmRuxkxUDTpCHRtYg4w1qpy5jAranh8rGJHpYYzmuaEYc8289BbLjfeLaD25uLHvnAZSG",
  "key20": "iZfUmnSvykBVxRn9qNsfGKCFtUjdszTywrRn81Bwob7VbpLoBdQ4ZG3qmSUGBwspoXSNku2YQju5dTTvWJCzcGd",
  "key21": "2mUNZ6aBJZcsWHWmkK4suypofwDW3kZXXGTwNGh7BvoinwvmJRMhPfTP9GCVv6Z7VhKLnqNyiWUVchFNnoJ9Wm2W",
  "key22": "2tKKoxCa5yMz9cXgXYHPTsdWmk11zfcVzwruwpQv9UR486RJin1gD4A6GeWa85gSTabfBFS72scwYwP6YjJ3GFjr",
  "key23": "5NTzaJ2SAc9384LUzVqgCFbhG9kF4duyuURg8ZnB2gzx9tJASXrfpWb77wXo6BEHqAwx1hLaVGe6rtSJmhmfUQWe",
  "key24": "2Q7g4i7JvE9BkngU79gZwm2pPqbtnqTzpHgX89qcaNJKmYxBwUjBSWuwQeb22tvVPoYD8VknqN6XUKJDL3xUCHkj",
  "key25": "2kNMHxR3KjrtGdzDb5J9EdGB9qwZAnoWTCQ5Tmiw8Mn8spdAm6m8eYwCs89YmDEQ8fMuPEPSnjWUFdT922hG8ECZ",
  "key26": "dNxgwEC89yqbERm7Pec55xhqKirNoFqs3f1w3fcDhH6moVDkyME5EVv5hEv1B8pXyjgCGovtoU5uKt6y5feWVYh",
  "key27": "YLtzgryCQEGmBE8KvvZHdb21M6StmjG2U2gEkTxiu6485JCr71qy655Mibz2sGZuUZs9SVniwpCsBWMDCvg8kub",
  "key28": "4p7G9erXBt7gc5xxTt6qdS38ALx1tHDhpnKbCE3B9Q6erzEG4ghhRP2sirUprwMw7nW6fP2PUC4AX3oSeqrYkPBf",
  "key29": "2aiE3w9jFMgHRF5co83oxccEvqimL2LwNETR8LKh7whyakRAp3NG9VM4fhLPzAVxYXU96q7L4M54wCcZjjLLTuwS",
  "key30": "4MvZU37qY9PgSuwwcE7YxoRiCxHdmhQVKtB6hDntn63WzpEixUaCG8VxdGKgHMSUc6F6oEQdn7SjXWCv9vnfxxcd",
  "key31": "3W1nVg3P9XSokqzQJQstALMHSctw7qGKqaU3UgxXGwpALLUHhFd2TPkf4bLje3CNEhWWqLoafoWTxv7kEYbtF3EQ",
  "key32": "2qLeqV7dkRLripr4WDZ1BD1aTamY6q8MAPuWoxcAhKRhuqW6qYokwxcmwLspbPcoRZnQPUGbuzkcHG6HE3J4ekGq",
  "key33": "WLa1eos1GS59kFaj9WFEpxXFAmCWzUjuqMrSwjxKHuVj3vAt7uornArhzmJiCKGeeBjn3xemdQSVq4he2Ft9CDa",
  "key34": "5NfE5H5anfZqLafoc73v4cNBHdbXKUQV2CqSbw5DvdWZtWoqT8qEtXrZZX82HfL2AovgEU57A4r47ZP2wSB9dmaB",
  "key35": "4inzdirD6h24g4SaFkSQkBmPusjr1siF8THabt6YbW3hW4rjk9vLaTbqLZ7FbnPfCwoMAam3pnMJUB4F4DEPJsrr",
  "key36": "54EUjnK5kSYkW8L92HyrTBbnbeMd4fzGHeAw6pWJus5z7sDtYNwoa7RMaf2fe7mkfLJGiJFZVVS6EtBv9SjjUKLA",
  "key37": "4Ya82ntPXN5AJ24rfHdMuSX2NnoYcUGXZQ2nNVf2JNEbf5AZDPNoeq9HrYUoVE4z8wH935Ywg1XwnLdGnhg5WUSH",
  "key38": "27KRDkMPZJvT8cKSvp3ThchRQWyU1MS7xGu6Xuw8R4YQ1LrFxE5gESmUtSgfptpQB3AqXWgr7K4uhXdf9nQrdkHZ",
  "key39": "5Q77GwfVS5h2prGnN6RPuKBx1tvjGJQvHtF7kfp7EHPocYuwh7tKbLw6yKGXPR8FoGo6EmJZGXt49tLM2qR3j9c4",
  "key40": "X59pPMXp4ZZ3FPUNrrpoNGQRJkFghpwUd4zY8xZNhAUBHfJN94uiKaD73cxwJfuNiXWyrgS6AiE8uZkZeuYYL7g",
  "key41": "5skyz1ExRbe9vLQUUqGbpke5crVNeu67PgSfR1T5pc5JKMTYJ298gs8YUfArLUMBuAxTRHXDRr2yuTAq2zmontyW"
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
