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
    "3mB68XKEzK9LGj4fkksuf8negxBWuoHME4SFcjwaBjY3xbEJGyr9nZrfCNewfXgBXCLCvH2PLJ7kZ4Dro4k8mqof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z7tYJi1emLhtSsihdDachFAwPwpEe8ivuBJrZPsbqgQ5JTyoeAnt45fVwZdy8PDzjRjACfxoPaRv8FnBN4kVFND",
  "key1": "3m2yk4RH2zLzM6t3Re5mFhtwtBJdrhLW5LSTtgCoAQ1HGAGYJdsQidB2sdoaz1qbHNhdasrSPvCjk2YspUvW5ugk",
  "key2": "56cFLd634w2v84jDeAD2CqnWPAfVWzuCj4Q2jbprWpLyMKrLTuFpuaaagRUVbKcGMezAAUALBm8me4EMTw3c2AMt",
  "key3": "5XGJNamGeaNEem4E2nDBrrh1sn5PukxTjWpufgyR1UWy6Ut1UXMNvhRruPZuA5LG5a5qLxgU5gBrpc6SsuwAHnAe",
  "key4": "4PzpynYfgTfCuySPXrHJjgM3QPj2KsRakzeShDoVTxJ3Zdh4i1DHnNbiqfr3nCWSSERMatSuRvcXFXchYjHtJfSa",
  "key5": "6Kzw5qMDdTG9v8WwYG45V1ppBGpWU4tmF29Gr7kZtHDgihQpYQ1TZvBb26DzDF5tf42gwkXeNiJMq3uVrTyFZSm",
  "key6": "3BCh59woXKR9MCc2D4pS3sgS2t1uQjjZSQtSEohmdTJ9WVRzitzGrc8bgLzyBUpwucrSaoWbbcmadK9gxzoA9hxF",
  "key7": "7yLDToWJNNJcKDFtkhxtWyx5yURkRcXaWNZYELL44AafoRyXg7wCsQuXbuLL4uPdC9QHX81zjBUyUUp6dmQi51n",
  "key8": "4mtA8aMgC2eTFLFv9X4GmEXRkAbYJCaTsdkud8pnJG5CgYRvRseANJHN5XrFNK7XgRT5G4z9EQZykzj2qVRXrYSS",
  "key9": "25msPLUhz35YDcxMDZjG6urTrJHrfMfqze6j8ei4bmgVisrCW77ZD4Av3YZYsXgN7M7Wh5FG8xrEPaf1NC6sEzcL",
  "key10": "QBTQstyGCPnnRJqdBwT1K87ri63YnHqkbGvMFukqbMcQVNhYsV19CyYbX2Wka36EfGidwvyWUFEaUeSte2iTxK1",
  "key11": "3sFDsQixvhonjCkve4U9qJMCJT78J5aoWePN2UQwtVeWZwkxqZ9VdfwFHE35ArokUKGrJsmXBxk74gjgu2zi59Wx",
  "key12": "52KAy3QuyjDNexKxC9TM2NnQBeWJuCmTpX4JKvd2dVctfBcQxoq2jL83iJoM9HioQWNCV1oEWYdVNJLRwoUjLu1s",
  "key13": "3boZkn6rRsVrmjun7FmP9varmH2iykFSk5BfZQxECrxdV294Fw7baMW6JBvzcrxWeXE8GQjdTDSfhyhXnAZRS4y",
  "key14": "3myDoFjxBaqxTrXcoHKsaaoou4gipSd4JRy3UTSjXyvbupz8mV35Ghnx79K3XsMXxdjXyTMQCrCmfHNMqFBtfAiE",
  "key15": "3hPdDZ5fUernxukV5VFKNAQhQkukCr1mhqtMeRY9hGDVtbBTND4LX9oVTEEtHcz9sFcdPy2PSuWChG7sLj2Yezvq",
  "key16": "548LhruHDGP5ecC9UYhnuwW4jDunrj1QZEUwCLXCgfHiZu5FZ5UEHYakd7L1883Gm1bPzJXhx9tTzBjx2AZNxpaV",
  "key17": "4LY6Z6QZKVDftYyf125nEKc4JzKG2HF8oeewhexcoMWuNVyDGJH7VmFHozXAtAPZ6vuVFSfqLd52dS32unMqappj",
  "key18": "2fdewiB65TFob9n89aM1EurRqGNrsfyrjkLGmYQCbLJdLsimUfGGpFcmP87KVNDGp4vvohZiS91jWVFj5JMPaJ6b",
  "key19": "3zZzm4XXwQ8bZhBPXxeMHrFGWEQ35NTdsDJtZ3Ydehk9zAgrKwqq4ejqJhp83JYKxz5Rd1rVAKMMsfzseww4HNwp",
  "key20": "4vsCnMSw5r9AreTJBJBGAhJhNugtx7FZ5u8CN8ebUivheNhKgdRBSMKCkyLb9yK559ErC4qRZHyJzcYPUQqsVJFV",
  "key21": "g8Z39mebcMaifbMhGSiN2bQQKFF1GTDaNEMqBByu9nqMF7mKmAjDLoG77JiQeqWPGEJB9gPkJGkbxhjrDeBVYCM",
  "key22": "2MuPZF6xPVcTJYmVy9ixsqSSzFq3QaN8At2WRhKjivAGRiW7vy44ANXFdRtm1R93Ri8ynDbtco6UMRpqWE5pNPBu",
  "key23": "2e1GpF3hEt3xo86KBpXQHjp6TaWcMyvpQaCswS2kwTtXAukEFCXsMXv4S5uHQNHpozjM42RjEquAyGwf4pXTCP2k",
  "key24": "2pU9jXxuXSH4XBu2K73rQ2zNRejz3wtZTqtW23MxbwjvbhCutGKQ153mPWn2hwKz9asuQ1rTRehSrZZL3oPkDCdn",
  "key25": "4XRpPtm2DjcSZTWSih6W7Ukotgp54S6rfZ17nkpvBDjvn7Nk27ou1ofY52sWZtVywWcsdJGd1qZusSiWk9KVHk3P",
  "key26": "4YFezRDDE2SiJyeE3btEsip67nfh1RAXrsEwZVWPKbjeADJpLWLpAZek1q5GUjFH9sz7JLN8f66q58VmVBo4uLbc",
  "key27": "4UeQezETf8vbqPgyZJwucC6hadJSFg4oG3fX8nbXnnyF3da4nS4Kf66Vs8V8NCDgkWYdv13ezdfdPcxD8HawyqsD",
  "key28": "XuDACBFXkDKWgETiXEKjrQhX8kHp43uvDtXJ11PBFpMScZs9RHZ2Y24xcnABoQmk9gcGdtUsDqXPitnrK2uKADH",
  "key29": "3Hwvap4KEYETHPmzEPaT5JFCyVUxD6SXDXTw8pxwVYNVcCtzP74FN5kzeuR5w6ypTanPiTukkFGP4s7yz1BsXAjH",
  "key30": "4wVJeyBTDo1ZofK6RBia35QXgbCkB7ji6eRBgSQqNe5ELMYUwWj3NU8tb28o8ujtsYmoAwfT2pPjbjf2fZTnJFQN",
  "key31": "5N8LiVKHdq52R9yCfAB7zVUEPyvDbp4UqnCNyWMAwpaDVuguajphdzYZvvKgyQGqrYaTcFv9L3bmZAnX1X128iVc",
  "key32": "4uevUbftmFthvGmHrk3LXVS6nrn89yqRgkCerRSsMoPB4MTk4H85yahVMZZsJ9DgkhW7Zk3SuiFkkKXmjKFf7KhE",
  "key33": "28UgcZNKLb8w7aJXZEE7Nfxu14kJfHraULWFPPTooSfVs938rfWeKRN5yMhCcDWAiY1QBikDeWyr3qDY7oQJCHrU",
  "key34": "2z4EqfNQCMYBJVizrR9rRpodhnbUx3YvbswQcwJYzbbjzeGNz65PkXjn6u8dAQMBza1H89vyKYsQZv1RU6VT2kCn",
  "key35": "2HSB9aJTAYb2GER9i1uGw1Zd51fNeH6TuuxhXQD5mQjwgDEH4HcLAquPXK8iuVwxhTAY6Eb4ZGDcYXtX2iYEUTcE",
  "key36": "5Q2rFv32GDugKonHvQ8U3gtx5rtgywGe6dPumCuFcxsose5pvARL5M8NQ9YTzW8fjmPG2jEB6YQuXrkkJFDmLVrZ"
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
