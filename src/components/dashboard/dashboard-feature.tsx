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
    "2m6xyqZBBQ12RcS8pY2rvA4qocSG3n9kZrAMm87XorphqSjRizcXg3qw41w5UBwSv4MgotB9ThSZYTFvrXQg2yor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aNSX6xUxAJfn9C7xdiSDvAQpis11RFoNwTovAWHcWDVj3aFcgtMfh22QeEwzPAVDfjd7t7twbJs5ByJVZQ2htB9",
  "key1": "3yPwDJAeKAawz4kSSRv7UpFFnng3pBa4nsd8JJvwLTRuqUhpmVPM1XkP3hrPumD3rKtvsT4CPFUaH7TTH91j1KDp",
  "key2": "4LyAZdkL4zWd6uw3WM6SLo7UnzexcsmDMiPL9e9LzxmU8JBYLBh9oFAWVPkajmHjnXAuYjpZZMFh5UeMfMv2S8KS",
  "key3": "5vahX3UTqjddxozQQxt4wUPP368DTHM9VXiy6idajSfmZt5hG8bviYTy92CyhufyuCDTX22PZn71Gb7ekyFAmLHa",
  "key4": "582Z4wYtnSc5q9my1rqXPW1FWYb3akhtcT7JxHU7Lh25zh83Wh5RTrSohJf4Mn9NCVetTFXxqFgDLtYVsXWisGNg",
  "key5": "64BK1rtvrwC6tLXr6i9Xi9czDBCRvuCFvxPh4V2UCxhQq2v9zEH5WFSyqhoiatsbwrQRer5UQXYPa6q9g6p3nZyp",
  "key6": "4qQLoafApjHnXTiB8hScxEvR2uqygGfzVj7iuzuAg6Mm6xPv8fVvMP2PpGh5CgB8gwyR7YfDnjYRAVCsSsjciwhw",
  "key7": "5kMbiP3iYwjbLFMVWFpoDGB2AqiaXe5rRcAKnUKY8rKEbtwxkgAc2JS3xFFBVv1TFuAJaAY6mBDWHYM7JG3YNEBk",
  "key8": "4kMz5TxPDnKPfCMDD4Tu5RJ5bGkRVQD5m54NmdDRF64fKvo2tbbHG5nau6ud47zin3LBWysLtoWcu2U6DNhyJpPx",
  "key9": "4LPs5j9JFyZ1j2wPf7cm6VYYFQ4DLaLW2NdbP879CxyHbMxBoojH8RDphnXLosN5wzix8NeBTgd7c4Fv89xQyiqp",
  "key10": "4LyK5M8AB5K8DQaMYqrgaNmv9gTLqk4oLQXzqfgkFXXMXRrcJQuyg6e3QojyZr4LA6cEw7sjuYAJe6az5eHqNRJw",
  "key11": "33oFywejQSnEaC1BfqXGwAzQ6Kh3tZ5GxK6LC6D4xwacBxyghrjSAyAF4incuLALmdGWCLe7qgn5eys6SBAk55N7",
  "key12": "2GWY1QHRw7QTL4RJ3SxZPSR2tpsKgpN2vpA6qi4dXCBVinC8XUc7RgDXdWwfQyhmHBGRNa2SUSsVdFM8zHAFxyn6",
  "key13": "5ftTZsSof1Ty72q4i1ob5WyZzysxFdEyfKAvGz1YXPy1xQbtGt5N11VTM31iWG62zgdgoAMnr5JRgURDGH4xKyMg",
  "key14": "4iSkcRFkMEPVTMSBx3S7MQicnc5yVVyXkyhaTojoSmCGjMrgoyfZSZiryYMZakf11674mYwm6qmr5ZofBp4f3xfn",
  "key15": "5BjxubZaRZbZ5D3a4tKeCWuvQDwHg79qGkE19R5dAvkh5WVfWNFhThLqZDHgvqK26aHx3bgyMP5P57ojfCuHBvWj",
  "key16": "jJcY1Qx1WvYmgQVhzekryMCuoPhu7sUyKdxHdEhcCbaqGsFLwKmKRxYteuXuipKBwXrLrfZZi6HrcrHmcEvWANY",
  "key17": "2VhtBqX9qj6CPrFRthCywPm9YncXAHywBnQ7aZUu2htTaGvgVgKdnw8Q3wWvbWkCwDWrU8JaWPCgt8uhbnxT1bLU",
  "key18": "Pr5dWRR47gHJV7chMHCjge4jh49r3N3YF6XSLC5keXDvyVpADSnBREhtphMJaSXoZ63wUxYxPHUtWWdwgrd95h7",
  "key19": "X1E5cx1E12MZP9GNAo5n6QeF1yXxPPd95LEgAhtGmeXVSQBTtG2hXqrz9hBV8ZDZygLzdWJCQwdrcXER9XWqD79",
  "key20": "3SjRiocNpjBPEJ2e4kyzJH7giT5wdBFJGKgU1rpH6JXs4zJkyBCw5tbpqTRdPhjaFp8JXNmRXfuuPPnA3WryS672",
  "key21": "3EMcBE4rVADB7R71UqH9d58N8QZDashhHs1etmFWnTPEBPWwLinTGPueJPqfUzQqrfXF3FGzboMhPnBG1jEm9fZr",
  "key22": "5xwCWGpQmin6j9naHvuJTAJ2agkytRdeoj9xjiv2kAhyxbsrM3bQqcFnYAbyFKUEYTmMvsWTkFAaDP6faBEb4Aj3",
  "key23": "2LhsLwGbaHNrgLsj5uAXhZPHqLNr1NyxxaFeS2YuUnksBFLiJXMFK4PSKapXVy3YDqv6GvZYvdd7uhMuNdfZx3jh",
  "key24": "3qPLz1VRRpohhaHZLzRAZ9UMeiwhNyRnLdCDjWBCo8tCo4qXfy3z1A3Gpo3yZobBD9feAXNHikNEjPKXKUfLzx19",
  "key25": "3ZN4BwSquQqFbiPBjCMiEvo3uxCrmWfYg2u63RVCFqm7bugu8No8A3uSVhrVNsDnGSj4hD1xy8WesyJm3CWxWmfC",
  "key26": "3FkgwBvEtSCsNGaoXwgA3HLfbE3AcpBY7dX4B4R2aU8bSdkvYbAtDkagdFoYB8AaYYxE72xwrUZprKu7ziTZsVvi",
  "key27": "4uCqGBk9ZpmYfCHHqJxrp5DdtQiu3hZ9gx6J9uKhN6ZutWGirVU6dzDdmov9J2SDR6cwcwQaaQkKSKEawhS7jfRp",
  "key28": "43kZxDVXXFw5Maqh6BbFysy3vuZnju8KJTkWLLBTCjsdVoe7VTjYSS2KgoKrznpGNvw6nEbGUcY5Cb3G9RANTdam",
  "key29": "31sWLebJrUCDwjk535VqcPFBMGN7yk1MW7VZHSef6ou6UwPNC3VkYpTz2aXZcA7JdEUBN6gBpVPyyGmXPSEesZ6E",
  "key30": "2kNRfuJbCpRNPP9Eemihmipob5HcaCzyGKFbzUNQq5NTRWHxnFcUCYHWUJp51zsh7B3VS4azCnw3sL6JtpS1JVCP",
  "key31": "3AVC44RBWbdomr97Wu6go2vrDesnaE8SqeNESG1TBecVM3fTGTnnsD74nB8KTrTNinDRQZdwqnEqUcgpYzuXa58i",
  "key32": "5A3g9QcmmFvWRbem15YTSJy37NUYT11eht1Wt3JcdFzLLbQM8FxmcsEvGKeaD5H7P3bP3TuqXJCbrkCQ7DgomnZ9",
  "key33": "3ouwaMRTJWD4RzpAYasWEkzdZFWgsu5vh9r2XRpP43LmuAgfFW2AjztWVx2kbWBBmuS5KxukktxS8QHwxAVqae1m",
  "key34": "j2PgZbZUxpbVsTiNTrw7Bonu8JmzG3kGreYrHc71BhVrsR4BmmU1ovV51mbRm8jqrUP79wEitihWcRPUtcRcEs3",
  "key35": "5vj5UnUYkPoDDDDMR4ArCffMHYtv9z2cSJASR9U74xHfxJwGknh7JLNqBfW5iSvz8Kv7aWvRKeHdsKaK9AnPvQqp",
  "key36": "57T7GPgYcVgpMzLarh8cwRm7CtJbAmEBUTe1pKPuBXUqDUNtYpagZviAhb2va48GCG4UNtmtpnC5pQSMsMM3Cb3W",
  "key37": "5PohVUVT1MjfaCp3XooMbXysWhzf9gfgNWU8aaTC3WTXkY4LMLMF7odEVCMCNQgt19Dpfq9aPoMskQ9M1U85bAoX",
  "key38": "2mDuJbZR7rWRpkP2S6mVXb25vUgtZohQo8aL6fXdRGEQiRYkhueFLbu1W6dQSafVSsJf849yQMLHJJKCcPZ3NuMc",
  "key39": "57p4pNuERb2zu4ByDMAEQ6ecWLiAHvigk3nZCPpEX8C4WJQ9aveRQyPjziRFRtMq9TQKQ3GWVcdf1wTUhcSqeFHD",
  "key40": "5kpkQrWpdMeGHJjyH6zL6B3BmXAC1ZQEgwCVqxbqvhQSMkA9op7DtpJnpwhvqToF4ECUxYVZgJpc5WyDt5A8PyAE",
  "key41": "3DaqcKaVC9KrcbNq8nqpcvSTkZrYtNcKYaS8jpAQCob2SUR5ikHVk1mPQHvHP1qhy9K8VD3JgSvChdtUeckK8zWN",
  "key42": "2foH9TUD7K5Ku2DgG1AVz4HTHFriJjRFiUBQ5ajZfbBZ9ykZZcwft9uggszLYYpdMD3FwnpfhEXyEWiZEMQtuDEu",
  "key43": "65V7USY89i8mZyYnx7Bw6RSaF9XHU5CBLTvc3DhBJ1EJ3WUgt1VkA8sJeQY7ZxFCYGUTtZiDpadJbuwbKcFJi1u3",
  "key44": "36hJVzdmsi8riKbfzmLDKRHPC86do2oa5Rjrx833fXYm6FUrYBEv66SNgKA3dtHnfAvbXHt9yLLXbRNqws8TTobz",
  "key45": "5TPi7u4M3r2t7PzH5KDmK5BKqzjnzFCGZT2e48LJjMPwbdH6P6Vb6DvQ7eYuaKaTfUDRtEyEH1HzgtJheesPQNfP"
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
