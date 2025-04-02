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
    "bARNafv96Yxm7J4XRCRvv2FqpRLNPpjvfXoFXZpf8psrAsikaDofqvAhBip2YBHv8aq5oCydnYy8GVpmLGwRYFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SMk4Z3n3Nv253RLQTZS7x9XGMH51zmyEbdG9JfWQHQxrduXmzGqKKM7oAFQXDsvTZ339sLwHNuVdX7KUtezpeUV",
  "key1": "FfzFch7enfx6cUe8juc3294eoADV8HF3hVKmiijeZrv51pfrMx4w8fAMTrgHDLbuWEvQmGPWjkgUL1HUdhsSdyj",
  "key2": "tryFtZmiQ4sTCYVzE8xcZxT4wnx2Q8dHXSUh2k5xUNwX17JM4X8zmbHJD4FywFTpJ8CxHFTs86Wj6KJcgQvq2zA",
  "key3": "5SvnVjQV6ofdmfH5HQRvwofGsuucJvSNrFx1kazss3fs2KnQH5HSSpcex4iz5rAcnRuUhZNVbsa7EsTNF15ryuRs",
  "key4": "2XQWyQy5Wg6rNwgDBZFAx71nniMbjr7xsiQc9SqYdBPzVAYciShmH9WDJC1JRAomcwi1voBscyN4N35yeaarrHG",
  "key5": "4XoZveVqFg1dSJd8pA6wZk6dyhBRoT4EzoStdwN8eWPiU5YDjkPbCytwZXEaoZrH4gmtF5SFYCkB4LJoxmdoEqs5",
  "key6": "2DcV1gPrB56yQE8zcWve22QWf1Tn15JbF128Hygbc8A5oAt9xuGbdiCp64yFBKvyeLxg9dJqnhyp8EoU9VERGTrL",
  "key7": "VxjjYUdNCNRLh4behRerRwXCEftyqGXQBiTk5gnqc8YjRTeU7XV8sxjhhpSrjhTtt1EiM6aWkiz1Q6focN5rd5Z",
  "key8": "45XxjnXcvXkX2CqQ27DdVkw5a7MfQit3J818JqNZU5Km38aDVgpDgGM7WRtpDbe7XCCJT5GZeNCUPSABcoCcGU2t",
  "key9": "5cgDM2GPrmcGjS4BjkDAtFsTQNdP82jb4c5y6UofxRaLFRsH1YBm3aA5gLYq2Xgr6PXkqV1qHxw8dBQyk89CH84G",
  "key10": "2nxy5XRMzE3VXiWAjTCAYhYBg3vBtwGWD1nHL6qd3viYQsMocTfCfNBszRtdz5nRRv6kdJps7UVbRVKKLuBvB3Ly",
  "key11": "2qdkvArKWrfa6ptymbnVdyd8jaECxb2v7rigkbqCUPQaEZ4x85Pd9QtmuUWAB37pWPvWJmFAuLbWfrw6LPevQCC4",
  "key12": "b8V67docp6GEbdUh4AEYVgYKhMjFfVxz1uhuYUcyqWBP2Y2uTs9geQbTT8YNo3K4HvWNU7UXy64vPx3myeKHVJF",
  "key13": "EUbEbqdL1Q4fHxVPFX6hADUnHBpi6cui5S6zAX8qPyZWA2VEjxsTnFJQEms6UX9RAeUZpVzzvjtbk8YgYverLjF",
  "key14": "5uJvBB4BqVn5W1thf8r6Vvf5W7LD8s5sGanmG2W3kJu4pGht5Ln3Xnxj5rppgNzT4WtHr4syLfNscdBcw476gMPL",
  "key15": "4Azen7spXLaBbP29oxiWfBqjUw45E3HYTgrFewbt9Hf584vSh3PxUZtnLTTA2b3Mb2FRfAVCGDa5y4uGYYUgmomG",
  "key16": "38qJfTjxb6WMGMSmLW1YhFLnAce3fYCHZ2XuKHwEiVt9ZZCh296KRPxqhocJkPwd4rd73RbvEqeHGYCNoDJh1L6W",
  "key17": "fqxqGPDXdy6qkUkMhBhtMPWt8C2tLiaM5QDMhgXwBcqeKcDcXhiJpRNxVYrv1PQYMWD88wiemDkL3dBv8zbnRHN",
  "key18": "5EJkrpbHmL1Gzruy3NfhtGnhMhaF6A57wxgqCDzt1hiDWUWRRViaaohiqX4rxbfdqemcDVd4KBpYnJA7KhoPmUGB",
  "key19": "5Q2MDHNy1dty7f3nxPFwMvChBg9SvE4seUfxeLFFG88jMR4E2e4EyMW4x6Nz6i21WqkB5KkZydW5TxQEcjq42Hgb",
  "key20": "3CC43MUV3p7uFXKtMyGs3pRF5cN5Zq1eSakfTdUKrSLTk2ck6rUXRJnPjuWfNyX7M19zdxW1MqPZ7C4zFeuhZUqM",
  "key21": "2XEt9ZHV96LJEco85ZRHkp1z1nhPRZBxX6iurT1FGrRD3qXjs8CQQTdLNSdXSaKa98i3Mvyb3zdcEoGwEiebxWMX",
  "key22": "2ehj1rTaeFVMcVk9oToXBYgZBBDYK4noD3wXLEknAwzmSsEe6K6TTBr2AbWAFa4QcfVNrfQHCrV8gbxoJXmrj84q",
  "key23": "FTvARRYv9MUsHNZjgkEWErMM5gSRxXPASbjNbSmy1F28NDt5dMPW91dkgemjy1jNmxPuMU6akR6MrkNyJVa2JTG",
  "key24": "2WdFnsnM5iGTFodMC34d4wNaKJZPhTSfNWFXYPLj5GLdAVsYAhd4CUUUDZppzwScUq8XnLom8V6DZiVjCv9TdRoR",
  "key25": "53gZshyxPvA6Xd6JsFNZXXy29HXVLnGU89m8p3cj77xceZJbUxJrr6eiEkyzBRVRZEPN8cUDzMAjsfTgQLa3h2Qk",
  "key26": "42MHMW5cC65nmGEc6WqMcbzAAjVyJAku4i3awQipHftGKjJaabGxgP9PzJcxtW4XNvhZtAiQdAdZwLVSb2zPddVf",
  "key27": "674RmwkzN5rzZxjGsp9Zn38coLK9ztQ2wKadQZZd7qJeQqeov7nPqXBe315BDS3RjDgQxbJjkkbMVFiTn176R5JM",
  "key28": "3Sd2DmgcrGTTeKdybCXfrAy1257DPBmv98ruXDr1LF2qEeDWD58BbUWkrFeYf1tHzFoNtehk9wKBuWcevwwHL4xr",
  "key29": "2x4QnfnFiJzEtpwj77yFFKJnkJ8AscX1KrNSFF4dwfPaGskuwSMTpXAkyFRmXbVi1ukZCi998yD9sgCZhnFKJtYf",
  "key30": "3hn726XdeK5cWfcec2JJJHcksUm8rSFqgWmJcYtYnpTcKt2gfDP2SCHWmCHhSdVreEW9wUYeY9RWbE28vdo9Y5uV",
  "key31": "5SvucpxYR8551T3h7AAwTjEjva9uQy9j6cKsfXmCptJkZeAQVFgGaiEvA3RXEauVqW2FdzF6PpTJGjaGwG8CNmmt",
  "key32": "5yZ2xFPD9Xm5naeNNaavPfFRbkLCnuuHeCswP6ce762U8SjZa7ZxQ8fhmbdeyYURNFqFgTqnmoZYpaPKhKeJ51bx",
  "key33": "5c8UR5A6U4ph9YL4KHsQfCVgBm6XbiifSrakwN2X7XFWi3PBBzDtBofE1fMATiGtXgYCVWUc4Jvv1BYvLZfKD773",
  "key34": "24RmfBMe7xdupcaYmZ8xVQ17tmwz3toeNFxeCqhGCAQQ6FJeaSW1Hsq67r5rYVBcHf4dduPoaWm52qAijbyCYiu5",
  "key35": "4zP1Jqf1dsdoMhHDdWUeLTTitLwCYiUN6nomGKzBzUdEK1EaBEenNbATVM6y17ovgVR7chcdhnjrQpKFcMarXDdR",
  "key36": "5Xgyw99TBkWVCkssZcdcGk2xA7HStDH5xnNzHjkPspHxmg1JE4GsKP2Lvc9jUnmDtFn6LAc6meGmuWqD8Gvq62jt",
  "key37": "4P6RNJEXJugkL7aPMPxEFsyFVHJp1D5J9xws65HHqHYr4hdMC5BGeaWRegB3S4T7NETumttHmtbV2BPNQZtkjMnL",
  "key38": "UUyaMnu2z8CDwbnwVsD96xzPjToXraobpJRWHxaU8UAHh5R1y8283EEdLXnMdvWRB2T2QTqqD1eFFxQcKj7Ex9N",
  "key39": "52UHGnwboDoEYjYTkhi74TNrwA5fGNbdzB1hr2ZosWaXJFx2qw8vio2djPUWUMxr4QXrtSvbz2VKwKhVugE6H8Y3",
  "key40": "odnA9qBu1cWQnuwndMi7FztM3K9dF7SibXoFQeZD6T3vE8zeDHKQrsVAyFg5i1chaWB3b93qX2ZNoWzLRp45694"
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
