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
    "3Du3jqg1GaXasUEQoUhbVKiTLaRXc3ih6SVEuUP5cEGVCTgmbttn17Xx7vH38uDR2V37e6N5mvgXW6imUWgLNhJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HMK3DPSvjXX5nc5VQrmvxXu8Mofsqw3ecQc2yNBfvk2u6nUVcUFcbPEtVUpveeAB9hawTPHoLfTpgkXsmRYWuva",
  "key1": "4PxHc1eG9LFZ92HnFMfCfP6SHnixjesgxwpmv92qUkTBXfCQRbMpurxYhe9D1ZAgDxpoovNM1mEL59DvboQFJbn9",
  "key2": "2H1iNdL11p3Z7Ku9Ef3YuZ8GSqHLAfjQBAwf9WUpMfAc21KLPfb1sbDZBDkHRjAkadtjbKJgZfLE4Joe5mmFfVPF",
  "key3": "5WSCVSQw7E6gbPYzDXmggqE6Jz1jdnnKouxnsgQaXa7xCMv96hKJKonMnEUw2ryJPTWQKyGTrGiqNboY8axa3rL4",
  "key4": "9Kyybe1J9VqKrsxPcTftSmiS6wyWpZLH5tYKtgdPu7UvPaezLfx26RcmVdDyXigGoEePxPZSJLEmHpWgHuWcgLJ",
  "key5": "5jxZb15MQjTFd14hj3TiavP2NF9mYqewod6nhqVmR68r2YL9Yp9yF7cXvZ6ZNVWzaNb9oRc5aQd8984xp131tXqJ",
  "key6": "2DuQXXbbm3p5RNYPnw9T7o6vFNgdSB4GhM1NviCjZCv3BxkYnxoejqEvMK5Fs8E7r8omfhVR2Nuyq43RYvD8Uub8",
  "key7": "281YsqAwnBZYgLmEm5wtBbZR2uEeRPoPRX3HogVStMVw7nsNcPoaok7yYTAN4gmhLrTMsAix1F6ShVGbh6wMrTjh",
  "key8": "3fEkCB3RMw7vY9dnEKEQ4H1gQtmNi74cYwvmoXM67NnuZHx4dkr85hed3RfuuasSrMm8Jq2U5DwcUpw666PhD8C4",
  "key9": "2WANXSgwwH4RGBAMs3zNozaHjs8zkNoUo1SZLtq3NNT19pGvvhFi67DfgBdY84VxAxZvY6zLyxmuEXtvd64UW8Cr",
  "key10": "385wXoxko9SrWxdRzWUeTTsJF6BkPx6Hpik8mob7xyjXngTRYbamqvZWBSP7AhJ3oJauNpgjADiArQvre2z4qnZd",
  "key11": "2nsjtyK5cxdVJdB82LxwCGTUDsoYoH3ERskZF6M8kX5tfnSZHropW8E6DE8MCDy5H8Br33yufxHH91oVVYm4qkxy",
  "key12": "4i34nvsDUqa7UJLJd1PV66nsvVE56bX1MBf5ePmF6NXPe6bQKi1jTgXSUDozXkEcDCPtwp3Gu8H9fX2fiPKBfViM",
  "key13": "2SwHdhuquzU6EU9UXEfVLTRc2Bi9iqpejDiRTXEk76zn9diLazrtVFQ113ewa6G17S7g7Z632jXFMsEKqJDifYGS",
  "key14": "2nwZmrXv2TPrwjm6oYvTnhGZuZpVBtqbhC1FPi7dyrA4o52SYyEZBVipxFRBzaS4L6GUbiox3f2ss1cQgxJYF5UX",
  "key15": "2CASbykvu19WKGCZW32Tgvu1uVEZ1bPmQruQ7XDikzbShwKAFhLR28dHhHjChZHuKjUSn7H3WZS2y1QnpgVYNUqN",
  "key16": "1snry9XoChvP7eH52wHGdomVzpPQkBHrWsp7QgVWoSVnn88bHo37kPtfYbZ2EgYHZERkm3bNvJ3eNQTnHhbdK9d",
  "key17": "3XwRy7FZhNYxKSErhuStU8zDHWn7HsaRgTHvcq9pXZfwE8L75PWhMr1aDS1L6xBeMaFyy2QknhfZ3zXgpGNEVjyL",
  "key18": "4sBVKQ7enmqj86epNJcjqdHBwdN2JfUcMJkHvGacgSxay4XU5DpyJ59nVbXayyAjxzVtk4j5GbaD59aeCDG6kb8y",
  "key19": "5ZwpXaZrvs2BGA5RFTZWNZUw6NfP6RtWypJhwDotGjH4Np1fYkyPYmqgdneLyrHbc4NFrtFuGcJw3bRqqRUDnYft",
  "key20": "wWXshVgC86xLGiVUV1NYTJP1NJKArJtqiCwdkdPeHFbMvuxZwkLrD7yTFFkfZmfiUtRykaNrN8Leh4JiFqWPRP2",
  "key21": "ayUBoJ4PUHxiqMWjakXaBDMcNJa1LTxeQJdg3KH6e3cRRzQ3HEWAHjL7juWows1BDR8wvaDDieCVfQbNXAWkf8T",
  "key22": "5Th5SuXFiqPpfrz8XWiRWNMGoJejJdvufMCFmnpgtkYmoiN88PbCmMnXESW37TdE2ayBVEG78piSF4zCnyU5eZgc",
  "key23": "5CJ8WBdxeZEMKnbAaXM8gcnXAjUBq92Ps7UM82VRsV4aACxv2zQibHwVNEyHC6VjacNbwf3gVAAQ2FzUkTxKrRKF",
  "key24": "5ACr94Xgg1m6xPRSkUwgRkZGFVTL111WhgaLbLWzfxrbr715j5gfxE1iriegUsxmLuVRqDPdfEjMa36Z5bYQxkrS",
  "key25": "28KLyGapCZ1mLZPCbaWyWfSxyf8PztMmhtNBG7aCQRvqPvBwB9xvdikpWH9hfMYWbCm4C3QaLiSvJYDpS11xGTuN",
  "key26": "oP2vTBLwoUiLVZCr4dWrPb7CP3HKyw2FrbVmRCsYcvHPQ22r49UPCyvi2cEZAWVAPYNgbmxM3Nx6uRUAXHhyZKn",
  "key27": "yeJ5Z3qc69XAfPuzXqUqxcgfyZSL41Y8YJetboNUbx6EUkp4h3k6CMpV5CVZTQJ7nVHPBNVYnedSdXnygKNPmwG",
  "key28": "ZYKQTeGMGxKVSjdUZ4WCTSWv4rrDcqTwdeNhNi4gmY9DwEcRwpbeUbT1xBGBevcNCuzQ6csuJEUf3nukx7FVqAT",
  "key29": "4REFMZ61E6JafPEV9eiLF2mioxwKJh4sbrKJKcYGSbidHnQQvJM25Vxzz1jb5w1C1rkSWa51EZQRXRH985BJWdk1",
  "key30": "432Y8WyzKZi4w2RQ8nQGkPsjGSQhPdS1J7rjp5vogx7e7K576x38ZusxaeBcjanxeashR4oMNv9unwQT55vM5N6G",
  "key31": "BVv9MhMcDdzmt8qS7Tx1pUbrdpyMzdZt27eEnGUXJ5Rki1nCt9NTb3i3tbZx2av4weDrS6CGxf8MpKqgEr1KaVb",
  "key32": "4Xr95UqHTpPhoygvFpAQw14qEWMMvTETxGCJyidHPyGticpagkoLtbmoHUBgT9fFgkHu8Rnpe8dETXJUFXWvZxBg",
  "key33": "5c2PSNCseAyWVMTD5shArZkscZjRdcdcAvJ6vGNKq1XYhB4fDmEWeTU7y1TT23YkD9EfYBLM9TfmuujWR7gmk36S",
  "key34": "5TMRT7HfgZErw1jn5VWV569EGhvXv3ryuCvLfrRxvxTakZa41mtLbN22pBxU2aTkzFngiSHbqQLNsub6bgMSWcMH",
  "key35": "4mm74sQatk4Co6HiUW7jYXozv9keTT92npLM36x6EDkTXSTJFFkMC3ASdGEtwdbG3CzPNuMRxjpS9UNgSAbMpAYL",
  "key36": "3W1UmZFQbse9RZXL2ZNss9aChJpyQak6B8jmuxmLBraX4NVhMxE9pZPpHZhhtYNpJd5B9YDbPzQwj9ymEzF5yvDW",
  "key37": "zdrfA6yQcioEvNsU1cfihY7wcv1kZQcFLdjQqiqqPvJf7y6kcNHGqULCXruufWNE99bsSbCegca4L6p12shLsFZ",
  "key38": "4MBoA87L9SmEXyoGTL7auYW9r8suoVGjN5gdp9j6zMckkuL1WWwuxJuam2zwkfdTYmUjfiCvBw3KPBjynFjDRT59",
  "key39": "3dE12XXt6NvaNeNAqdjDeubysBefsSLXZ7DU5Xiy9e3weFb5GMzii2WdKyVZB2qBgVnSfTpEDThfgSmcJXHoe4MZ",
  "key40": "3ovoBbXUL2kX5cPCMXkPPyxDYsXyUKzMdGsciJEqPVUokCJMPVVpeyokahhGce9QowEv13o8hLuonytBQUtnvn2d",
  "key41": "UjUcpoyefta1zx5cFoDnvTB1oxNzCTitKr7TkAiWSZvZrNepDCa6z57z2297TnkB6k3FqdYAdZYP2CfYXB4nLdS",
  "key42": "5Pw4V6F6ZKoPPJ7MirM5Wi8nEy6skVRe6Brfo84Tbbqu5fk2toDgt9hkF1YboYQxnuc6Yf7wBAvuPxi2c8Hxisvr",
  "key43": "TXxtL3puAXCtwsck5Fbhv6Lyb215MWUbXTsXzoVMwdKwHhwMk9U32F82dWjBEeA8EpkgyVZsCDDT757eUCyULkF",
  "key44": "JojLAcHUhjzgfcWaLz7cAbGzhABM9xppejhBWmagHED4aLFFUj7pUAZ5LdJt95UHRazctKc7RTzZ6QBLuepVxjo",
  "key45": "K8BnA8yTa4oi7k4J6i5hyfqUYTQKumJokZXe1X23oosPbDeH4ibW72uUx3QZ6swohpmvgNCunLv3Dp5ErKSDd6m",
  "key46": "3Nub9eqg2zzW9yDCeqAuFXFgjA7ggN8tcM5sCA4oiTo7myBkCmG7LJcbSZErzMxPQALhnJXsWTNKHL89utoidZsz"
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
