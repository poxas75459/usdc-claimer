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
    "3brzW2aKEEyPQNdGjKSZVRTCAyx9pDVVVeFeN12NUK8nEU9CHftsXyfhskpbdT8SH42iHdjAeYTGfdkLEk9vviK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FhrJ3ZkzMQQxfEXfV8RiXhD2ZePjbK33DKnhFvBNevRLmmVRRUmJBEde65N7K2kSEG6xCVerFeFQ8XgTUzqtwNy",
  "key1": "3N94vgtSAd4U1YAit3mdiNe1DtF89xzg9NssaqoFEYFftgp2cZZBz2QadMVDhpSAiAhADM6RVpr8MM71gZuVR324",
  "key2": "5VEZS5pDZrLiVUkZgEQyHMbJHpbwg7wG9kLzfpWYTLhPS46XR8c33P6cZDzPRjSnXhRS2WrtcqDhQ4HsZxRq3Mqo",
  "key3": "5mgFsL254YYAoeXnSZGHq9eghEoVk85KMA9rBfVVkVsGuws2Hj9jxWopVVh1nwYfLuANEfxQDsHTfc9BfFPjcnhP",
  "key4": "3Un9FxKdQ8LrAnrUYqUfmTpUHEW4scbXfEMNbjpEpZ8ANPFBgXTydMf1bCpy9trGtaWMTpYTPqoYNA44Va5dRDTr",
  "key5": "59K1hBk7CJh7nsJQaz9aEb8RbSWrHN8DZMNyqk6o4HEvB5C9ACuT6UsfAW62LRWoBA5j5FXYT9TuWpHZR6KKvasL",
  "key6": "4kaRzexEDtnWd3vtbtydrAvTYa8SZbuYnX3jYb58CuphuMFDMeYbdXNj5L2xqR3TrLdbBb4XEQjfswgE6hTpecSo",
  "key7": "VCqrKUP1cJVTcimRPHNMyvBQiNoZLpT8wVmePPj99rgmoc4yYTExPqL6QQVDYPwEJNMhNAqdHFjwSeeEmcLFhqf",
  "key8": "5RqwzDggkemtRzc1UJeBGEaY3RZwkG54kxQLB94HhGsqXMEpSDobPxBC3mqbZBTPi4HN93qDaiCjQdGEC9kdnNLV",
  "key9": "2tpaQKyufdkp6dynagQTfwTFfNY9T4f6xBj4h6hHjPgei5KAk48hrZzkCAB18w3f5mSQYPMQtCBgXHaUusWrWeYW",
  "key10": "4aMD3sNxBvHFMXYsya3kGWLBvxNU68C9Sfa2kacHWR9QKujDFuK8su5tnx4e8KXFRWJ9hR7nfX5EpGeGQb3Udqvs",
  "key11": "TZtnGPbtBf2ep5DVkKEbPTckKsgBDpMwTtK2Js4yh7GvxghdQ2ECqSpQERUpabqJ796SP5RY5tE23JSjz8jSjdq",
  "key12": "nVCpp4ueeaLCLR6aX6k5nt4qNfwDXQKxXVheqm7986t7cdZGE1Ewo6uQTikxbaUYaPkfAU26DWE8L26u8ZMCNum",
  "key13": "2JSWkv3iFxi7HcB5U1bCQfx9u9KaXBgMWcfT926zrVsJ1sFBFThurVSiEvZMcmKf9yDdFDTBBwm3gKoe336UUbSk",
  "key14": "8YyPr1y84WuuUSZnizyASJFp7KsPMazp1tT3iZSDCRvcvnVmpySAH5j2HBKPys5JbTeKUsEfqJtLFbZnmsazNkk",
  "key15": "4jX9Nuz3bayu1eKdGKDSySR8x2r8Qj72GxxEiYndGZA4oE6raASyTFstHowDiykzhLPf14uCTtM3MzzPDVUEEh76",
  "key16": "48kJZNp1SsX1gUHAyhMLy9J2PuPBGAT483BUKCUrdKbBLU4LCLkdQuFecFndamfqJ9hvLebDhPYTJa4SXTCyP3qL",
  "key17": "X8vcdTBDbbbxMZ4iZCAcWfLnJuhmQH9DxbAK5aENRJ3kcZ3689nUkE6cHdbN2zjnW7HLv54YtH81mDLWUxtb9n1",
  "key18": "5QtEDARihGhjnQjCaN8ZUCheap9KpTgYVe7ZSeQpKzNihMsiyzM7E7iJTTk9Kc1E4yrmoM2jdW4ZXYbKLWcwKNQk",
  "key19": "2uBcbUHuBYVRFSUnbxFD2Kg7D2cmiGWkNZcb72qQxPJY93mMDPFJHKreUQBS2cCQZvjke3nze4UTxvYVbj1Mv23X",
  "key20": "4Hwdm4L99u3wJS6qhLWrMMhSmAUF35GLY3ESRdPHse1CwT7rVVZNwyfkEmDJxoAkQvWxGXj5o2PyuzS8pfoERZdp",
  "key21": "4K7tB8FEfL6tssjw3Cg8ECsmx7LsqDP71rHhLze5U5u4P7cHiGo6Dqs6fKp8UuQ7e5vJDJHJ1iEYvSMVC3LwWyJt",
  "key22": "4u7qudbuT7q4h5pr4hYqPhg15RQmLCYoUMHg3D7KKN4nHnZduJtfUHPjkQL3bfSj1dniGvxoWW3g1FsWUnChrNmT",
  "key23": "3MarFq6TPDMk3PukB5XXBcfQYz5jcC4Bb14sPhStn3c7cXzUDFEnqiJpcJxNX5bqKDYEyqyciVgemhqi1oeiPoBV",
  "key24": "whLQA6ErBZjf6Pb6msD43gwXdd4wZz6czAeCkbRrDA5rW4fYK8tFHiMvJG8Lz1q9VhNHqtFkEcAVh9QPaVpaxRx",
  "key25": "5ZVJE1ZwcG3wDEmgmFkiT2TFDwvU1jsWFkBWjkinuYD2qQvu8MJvd7AaT4cJwBGcswCrLy1fdfzYfiJw5MRfLUzq",
  "key26": "57KqSjQznDdJiCGt8RDFfCwrmUSnLQqYCHTEzypPuUGxMnDJLn14dSvtRyCwY38o3QJgQUqxNEZPicNY1tpKQsju",
  "key27": "4h2Dd1Rfwes5ZAygseK9Ap8Uq1oKm4LskWhgCvdXLUhAarFW6oDv9GucvSMRXH3jGFd4g2Luhx4RYMrsY3DNog6W",
  "key28": "5msa8tMZvqj4Mye2tztrdmsTjuVwfoDLExspenKKnSVW8U1fiqjE6JiEQ2y7CfabwdJAjiF6k81gtqwsgpaxNz6H",
  "key29": "J4mH1qnyLeRTx6mR2u7Q7795SnqzwsiwUTCzXJVVkfJVcjMDxUvnXsfBmTzzoV7cvsq3rF8FNtaVeNxFgf188jU",
  "key30": "48RNLji3FDjqgxEedE3KisHaW7wCyjWrbWuFhurto6h8u4AhMKdXhEUt8KFU3whRLvkSMYHR7VX2PcdEy81JoSJK",
  "key31": "4Ra2m5eijoVzYzaH8oAmkBQT3khMTrdrepsPMPL61qDSG4qzPEJfo9vbADgcFufUh9MtQYjKx4MaEjS4oL4DLU3y",
  "key32": "4uxkHqGsVJgdATMUuHxWr7zxp4GKSdq6VUJUy1GKbSFVcbMLaFqFgiW5oAPfyuKHt6mGcdy1ePnHDWsLLuRBNYMJ",
  "key33": "4RK9rWWiQ9ZAmQZteUd5vKA6JbuTikeHGfuCUjibEXTt4PpwpEVXXXLHoryNhi6tFGvY5brziLCGV53Pv987vPPF",
  "key34": "2meQ1TaL8ZqWCUsu5kGzYkydvn8eU65D13yTzTUUhQwkStSx5eirV87uWUtiijZDrQFXv3Vnjx7dashPqcnzsJ13",
  "key35": "JkPGgKpqAEoSbsL5w1M6tqsq3d4xX6FrwFVNFUFT5dgcNJj1Urjk4M9LGJaect8Y8bLkDzA9dQEpckZL6gJfgwC",
  "key36": "4nXxYJyKS2SciCa5k68VwZX4DVrJG1s2LCMa1tGA5MJqLhEMacu8PL6wf8Mrfqev6qhFsvrAA4fbeEiVC1KJcJVE"
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
