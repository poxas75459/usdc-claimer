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
    "3a7cANbWxr3jigmVPe3CB5HoZLhMJSK3jKw4daEpX4SgXFGZssokXmVknWtjzzb5eagdcP7j1pU5TXAfTsNVt4g2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3scmvUc6K5tH39cUWtW8WtEqTxtXvppFhujQHN68veE8gxGP1SFrkzYDtr4JRRYSToN85ywjrT5cggCBt2pRmAwg",
  "key1": "2nSB3wrhKGCAvKXMKvegpLapZscuXL7sUVdNi3asRGfAUZ11a5BE5fvYfCWbZX7qvcVoUCEzvyz7JDToDbADEDGy",
  "key2": "3bdoe8B34ofvEudjRZzPQH7DoE4oYoCTogQHVVgap4WeijjBJc77HeaXYM3hArMSHfyW9SDEg7cfReXjsJcaab7d",
  "key3": "2wWQBUwzy821gBab9Bed9sGTHLioJTmo61WQQNxrW1gYPUZjYU2UyNdNzgnMELM92oJFYSBCsHdzWx2Kek56tp3e",
  "key4": "2oeHsM8GXEATs4W2ntJJc1jaimyzrGSiKokBHZPu5dq37Rs5EMJHmby8PghLZCPt98DifVL1BYVgP6Z647WSLfqq",
  "key5": "2DwydzGTwdwk6ctYPuZbGARDDZ9b6kFKHnx9zUxwuUtnUBirNYRZ5rwPkti4fyvfq13bdwqf9hZBnJDUEJzSJpyN",
  "key6": "4oGtVeBnX8dTSuziXfDAionUgLuS33gvf2bX3Hz1JqmzH5y5XB7rprUMVWKpqgwEyEirBTEyJgL7He41FC7qGLHQ",
  "key7": "4FbXRD9AHSS4kXePGpYwHyY7aGTHFkt9irMB7XEQpk8pXotovsdPZFM4KQURFvYvnNitf8iTKjKmRruEzrQHKnNM",
  "key8": "319PLiERguaALoWwhrS1oHoy3XjxdGkTaXxp6jWSmtAnbm2gQL4yGtd1d1iNGq6nkvqd7H3woUUFSefGQqXugjMf",
  "key9": "uWqw4RiJv3CQJpGMgiSguMosjj7NtBBaY151ig9MfWzEVy5vXF2NxGj8K5SNRUhoNVhruBzagzg5EkTngHPCNLt",
  "key10": "86c88br5tRFCDQurMtxRqF1uakyDqY2P6WdFMbMV8BSkZ3P3XTYHnFyVXT82qnc3tgJjozks26LyoNJ7YTjYUW6",
  "key11": "5XRAPgsygZEpwBJsdXpfQfQHnqpGfvq1tGNZgywMxnQT2MrdJXqBNhvLYza2uu56yvXWSmp5zfbwLhHVfmyqEbDd",
  "key12": "3p7HYE7aNFYtk7eN9LrTAp6EZxoF5Q5VSLSGnY8v95DaqpgWS98oKPFTGB9dE6DdarwRD9qnQghWnziBkENA69c4",
  "key13": "2FVSArSmKfmdGtPreBvCvZVNNALdQ5p6erL4w9jVuzVL9WhY3wYo7HtjZ8LPSoB56hnLWZYVioKsxhc1KpVyoyqi",
  "key14": "MsxdFra5fKRmUcAWXqrNNaaXek6MUTXNDj5XqSAXyvUQL1TDENy4QeZmjewiHXMKXoVu3B7MKwCX8srwDqNwn46",
  "key15": "4k8zntoq5nFKJLeujxjhczNtGFiCLzm6tupRej8sEsPLn24qi4drTtTHLuy5sNykm7npUK1Nx4j6QgEvCse3cg4y",
  "key16": "4862uELCotwtJ4FZ4ybTQ3zqyiutf14EivbjXR6Q3tpTvGfKMoUVeDhS8QHK6EViyw6F7gTc24RowZSXbAu8BBon",
  "key17": "4yH8eLHBBoTCXurLhkT1Kit7iRHovoVgdqbgLmuYwUiSyjeVZaMLTnL5d1yHuYgDT79ehLiwzyKTf5iJJrJXLvKr",
  "key18": "4iEUGvGA4N5gdzDqXvD3JZzACcytouhKaBYBy4TLTxsUWuZ9N2ed73QVrEoxkS9kLecx9sSvE1C15DadcfpKb1UN",
  "key19": "QwG3G4kiXCWiGUukjLbfxc6uyBtGhQhfyFWnRStjgeDxanLa3E3EZ8DTpWszBwHSnrP9AtSFGsY9WPwvfWfgEvo",
  "key20": "5TmKiAtrCeixJxhhvLcCL3bZ4uwBYkbNXjvSeuY4aJonLHudERAc3LUj44xZCVRAaVMeHeoVnJViihVZL9npZd8",
  "key21": "xYWTs4ZdAcHK9oHa1fARCpmpeTRu2Ebk4UgkYpox4KndMNviq72A1bqyMShxUUUPNLNeU3z693y2fmVy77fZF63",
  "key22": "5v9LFADdwmkYdiyDdzShZzN7oRpKwZnKZfMpWNxnKuymi27DnYkHNBPeWjL4L8JD9rsdAXQtnYLSk4BZiERNfSEd",
  "key23": "5zgYa7Vko7vmh6bHwWVgkPqXvYmTTomwDnKXbUiXooYiKrZ3YegaQ3KTNCTWoZLaDwq8JQkwLfEx24nMG2YKWuSW",
  "key24": "2tavpXdpZjNvTeXeLfQ9VVCHsMmGd9kQiMsz4trMG1ZiFPVSQsrXmnroxNAjvWcdbfobnVAojsBHGNHqVz6H8aZv",
  "key25": "nMqUymxWuLtTBrjXuo3ai45YizCy6RzCN5YPsGiz9Bp5WdwDna2PMEDRcZn737oGr8whJh7toYov6LUqrSyeUP1",
  "key26": "4FLj4ynCekWP5Eq9g9WzgDQXuQa4ju1MicmNyLZhbXoAuh4kysg7SiCit6Zkvqw8PCDjS96bZuyadytJdpusxKg7",
  "key27": "kgQp5ZAsiJPvqetifXz1mKAEgjroVU4TPcXURnwY6G2wgQYMv5SnBShq1yegBdU14ks7HWNQREJhFtvvNfS3ojM",
  "key28": "5tzXMoojbj57fPJKwRBkakqCWVuAc9ttiSZmvtVCfw2ezhsVyp7BnrsyCt89vitQrTq5FyDYNg3oCz2UCnVczn5g",
  "key29": "2JZgrLPdELqhYHsmY8LBcYLzVXjxjTNzyGs5WgcmUA5w42zKicUt8HbQHXcsWa5EaPxaA2gTfdP1S1QLmT91QPau",
  "key30": "2RmUpK8LEm4Ffk1nbvUh4KAVEvVhdykFDGQKbyzq9muBYEf9MQUMo1LRgbzwGiN7DgNLtWLim4njizasZ4kdx29s",
  "key31": "2gxhf63BXrLKm5pr7SQFeJRkZtZJtrRE1MZLjWCqjznBtEu5eHnkF3ugjcTLCL1Ck1b9ccLi4T63ogdJ5X3DUbzt",
  "key32": "NrhphRSyQjVAb3uet6CVnCA2pCMP36rseGtLicLwaLTbuG1dvxpvk2J4Lk7Jnrgs1sP9z8GLfXh4vEnHqaZPY8z",
  "key33": "5ePporvJ7ToFbTcNocVkrVDfR4JZB8yG4E4c4PRgrdLCyUEFjzVf4FUiQZ6aU1fKdVTXT7ekYRig5fyNvLFbnDqz",
  "key34": "4VnaBip6fzxaWZB7jYJMdtJHKJNKS47p6FeKp7YeaNaNXDyYbPvmyE2cZvc9UpokVuRrxfJRBFhSVkxeUmBDkYav",
  "key35": "4Dqup6fXJWenFnW6zu2mnbK9ywdiamFtN7ubfgEFiZFNzKoRhXmo5VxeDrsFYbGHYYzEjCzxE1Hh8fet56s5X9jQ",
  "key36": "5g3gxQwqKVqCKjCzQT1K1Wa3cfVHeAsWwTVUzmMi61kqnK1ChPQHRnqwTuHVDhcfyUuACcE2RjvNRgQF6WgfQ113",
  "key37": "3WKoznyq6nHC8fsm7uWFd7L4QcSanWUNCb2YYbeBkMooVf13aZVXvNp5RvHfQAUNxwAibGEDFpMuB3z1S765S4tS",
  "key38": "4qWJ1vbHuAJDfoycVj5HWzS2hkjXCq9HnWwQvsKUjGqbimdMAzbchWdeNPnAiU7aeS6Hwn18BzSnBpXKEq6zxhdf",
  "key39": "4JBdm9vMvHs9xXJx6SDUSd5HZrr4B4ixiCyMWb121GZUURvT8M5PFofkp2yLmZ3oBcU9TKkJgfBPW5CVRiyC5apn",
  "key40": "3WZ37bpafkRVqw1aDazVZQY8y7V5GJbfKBBMwsHw9pdBFMTTubiR1Q811uFVdLyHS9QMQUi75cD6TqX6HYc5tH1D",
  "key41": "4Ku3LfedhQ5ppaAcVV9JRqzWJqdyi3MjTR7XmqYBARpxEVQBopCrdLozBEshA9Vj67mE9gn16wws8wKzGPzR8Mvb",
  "key42": "3eke1xEqSdz2LshH7heDyZLhd5sg6UTjxgJb3rYzWr8FyNyMTaqYBwdhz2Rg7212yiub7Uz6XgnyT8en5Pp4RxGa",
  "key43": "4aaQJZJDypaCRzdj1KdqTpCN61qdf84mYESYrmWBmNiej58KejuuQJLowiRfUiHXyU1M9kuwQ9R48MvJgLWzA7nj",
  "key44": "45Bawxd1jaYGXLetkWM4uVBhHCvhbhGJ4PPp5t1NSBN5UMwydPKHA2CYxKTvC7gPqs3ehDXMDErBex7MMyXybW7w",
  "key45": "2EnqJb4DvjHySg1iZoGstKSdPZGGHrtn41gT33jLoTePfeCf4Yvt2aJzKKrejri9TXNsayYYNkS1uZJ4hz9ruykQ",
  "key46": "53BduBxoUvyV8XojVfdXTf5A72aZnkCRBHVyMJgbzKNFQezv5P8zr2KjNwAb7VXjMEP6uKuMkLjPYkFoRfKvyrrj",
  "key47": "4nXbGpsqVZ1m5NxZmFbjmVzMEfPDxZN3mgdUkSD8iQeP2uySqNCKzUVC8ynHzTVYUbuGKmY346uFf4Xt2BugobGu",
  "key48": "4kqtsw9DTcqmmyWhZWJkScMDp6ERKJmUixRDCAmmXd6twYhSiDgvoRSMLNCeEJ3qrnz7jLKLRCTWv3UD92xedR2f"
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
