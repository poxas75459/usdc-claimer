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
    "3NCcVuveU2hG2Qf3qgCFzb7fVFiaDEXr92a9py5eJs3FgH6dazDLKnVnRr1yiPaFuWHebPCbMsB3HHujMjm6Cw2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LuSWZaHMbZneQjJUd7QYB6zrBSJQZvQsme2iGYja9yJQFz5mn26dd7f6pViwkApeRYkho2Z9NQ8LDh85CFZcukm",
  "key1": "HUXGibG3qmZ6owniErfTUjRJEGTTc6mYTGkjZqdUkimhdg72PaSyLfSkGLpMfmCCfz373guVemERTU78XuxiXxi",
  "key2": "5LPefoGJuWtPDtKzWr6WHrSMr5sNRhCKYxkMo1JTx4YLqFDAc7Kq7xYENgyy4c8b1xo2AZTAYfTLVS24VeiQ233Y",
  "key3": "7Aov8b9GMZHg887ECkpAF5tQ8ERZhtNZug1vBotNEEt4cX5PKHaiUt3AayxeReqmNokpa3zVX4ufNXmGn6GZwx9",
  "key4": "65JyGm5baPC7qm2ESxyCKatpxcvqm5qTtMRk8LzTWPAjLb5iJ1NfGXrpNKGNS6wRu8R7ria1AjrXD4cRQ1Cb6S2x",
  "key5": "53eD8nqe2KMWVd8qutXM8hHKLb4hKedNLqxvMES8vdV1oLckwP6pjt7AhfRUyaH2J97XdzmzKapnGVWZBJ6BrjuA",
  "key6": "4AxMphv3f6GnfFNNdepqSCtyKU2rmTwLZub3V73qTyCM5MQ6t523iwTzVVQvedtxKpD7SMfMQbNysDexSYo4ydRp",
  "key7": "3K9iQsAX8QuG1qCutKPdkCipEhWts7UGyBv4a8fsjN2nDAinRn8D5akKG78YTbvfifJH8cAR1SDL2SaCv6ozoBs9",
  "key8": "9aXfxegTb9zishvhVVYCqUrLtXggHRi61TofuC9qRFqHHZ7oPo4kwb2GT7R6Zcm832wiN23UXY3ZPBhHxMwaUdi",
  "key9": "2UCG4kuhmWRu8nRneqjLKXiAH8ZZngZvpMQFFEMaFutN9mnWW4DKB6eVkBSvMmiXebRvjsfgXdGhVqPB5QvdG8mb",
  "key10": "3hUSTC9G7mHVe44Utfn3vtWMkYWDftqNFXhDxc6cPC92heSWLitsGJP5fBJLstx4EUJ5GVeC2Qtg7UjTNEcMwMBD",
  "key11": "jJJK3wCCWVrwpxBgTnPYh599p5DMh1v9FdVLrkUDs5Ab9xZoL4k5sYpapTPX9S9g69wPikq7KKMWpy4L24Z1vjB",
  "key12": "4Q2Fo9PYaMPv7dSQzsRMazR7kYdi142j5oaGRugD5fYCn2kMqNDfCAuh4SzKYfvgtQ3echBWHZ5oz2RN52TepCdS",
  "key13": "h3MDvaZ5RvXUypET9wspVBZHqutazVmNr75w75fzwguy2cDzQQovQWzfsg5MidArRAjzkLu1r9v4yQnRxX2cpuz",
  "key14": "2JnF2ejuMHwdgrZuPfwt8axthT23n4PDr6fmwi3fZq8NJsuUbJTb9zzDdzDYGpdGsRHgdqDwiGAXBCnGWrYR1bX",
  "key15": "3py8KnBGJgenCue1qR5R7USR4bGA97gtSrScUL81iDG7fp15piZGo2VmPL1PDoNFg7z8xG9Wr91QqKc7Xz4bcLUo",
  "key16": "3Uq8Sh735Q46azUhphK15Pro92knqBUCM1ecg4DS6CrBu87tVpd93Niq2WkdbR3R6uCJ75Y53jmCHThwg2JHryEo",
  "key17": "61LmyWQEEeE57mvQHjGw5CNoVm4fd98Bf8KvtTZoq4jMC9TJonZHaEFgFXxT5DkM6EY3QKzrc9RmL4yAM4W3BVdV",
  "key18": "23C9nKjbu4Chui3HsgJvnNyTfEszvipAXSBn1MjEhRjDjmWgRNR2r9JkuJvkbk2oHMgGqQwGQYKDfidcJ5jWiA6X",
  "key19": "42vuUxqavBDjTgqcfqirRij6zdfix9J5eqFjC4hmvWiCZjeYCh8bQKYGaW7JAHkM9KnPNfEQqtpPtpdEwPvoj6Mc",
  "key20": "4pztWNXYE8FF9mKY3NgfTDuRfgCQe3xhKwLUQ7mpP5pbx9k4QPAMEjTCoZ2U35hzLJKZpbibuxgutP41bmEqu4TW",
  "key21": "3c8Nkn1bd7bK6pGZtHMo9MyTeytGb5BnNhSnSRcXY198QWdc8FMt8NTp8q97MSHaT4FbkvEaeuy6EFS5J981RJSQ",
  "key22": "22aGrxveshy1ZrKoMWp3jCfG9o3kwTsQrEGBQ5mBgWzqB5xRJT1nU5XyVAoRbeQ6CxWEP6SnE4Guf8Si6o3xB1hY",
  "key23": "bihb1rNKRt7iHJESkzLdUBfrJPKMavAAQynTGfEKp1iVUULWrC3g24FuCZGm56BiSpnKefuXyh5RbDxyyaB1HaW",
  "key24": "2WPXVAXxzSKn5iuaog9tGc483oo4VzmeNLXQVe7JZGzQzZYbxNJMiuk4i7tCEZoJGokoyqie2U318XubDnwhhkbp",
  "key25": "4VNYK3Yg6QQwajQZfyDerrdEY32XVQYSUorr9dY7QaWf9A8AGSDkLruWZm7iRHrj7exqHumMUagMyTkcnP4Php4H",
  "key26": "gw3rTVfBV9EWsU8x85vVWweFDzqjtHkHQbi2UR45tSnhWnJ639JGyzj7xj6voxMqwsJbE6muh4n743ScfrmVEh6",
  "key27": "64qzwF5Mb1jaLXWb3p37bGrANPcu8gS8BXyaMdZcoG9MB9qBHEpYsjqcwDALJNQnLvmecpjg6zdWPugXCFmgx2Hk",
  "key28": "5GJcPbcJubBbX4RUvrvx3mwWJdvPxBewfWEu6wCmbUcdXwuiffsgNMFe4udH7L3DUTZFDpQn2pBdo8pFbEMUKJf4",
  "key29": "5u6KrRzTt4vSBJq2kJVgQni8Z2pjHmjvijwHhYrsbqha5CoQxqZbrADvdCRBAXtviseRA3KQwgiihwKmeC8yuM2K",
  "key30": "4B6svgwC7HhZPpMapLK4fB3h2CqVMjtvL8e7tbZDkw3vTgTGoAmxtcjMHixayAPMoBft9YzC7kdDkLR52XzccGCX",
  "key31": "AhUpLGa2ZPZ12zRJeQ6F2kGkA4ep4qWi7opefNDwgw9TWVK8GPNbg1wP4ATqSyHCryKme6mK6kHqb6vo4Kjn7o7",
  "key32": "vvDXb5qvibpUfSrXXAGFNue7ndKFYKx6PP7Z9VcGZFTK487VTV2MEJm7znWcTemKhsNNEw9StWcKD2Vh8RVH52p",
  "key33": "3Y53CVrHuMqf9aK2kWm8XXwcpTQNpU9ZnwfJnRaU22WxXatXj2tV8H8vFsdcNwwHQnohokGgW7xvNf8L4FZVy4AC",
  "key34": "4Nhe9cJYNFL486FGhVCDiBuKsHXySao6N3HbUK1AdUVpBdVZrGbR4i3ALKfdhiZaNRDLcBo99CqNinqWj4wa6Nh7",
  "key35": "cnEarx2rmZF9im4C1vjmhR8ohVMvZxJnU3AKycrQMraaa2B4V7W8JA5jQX3iToxAC3TQgcsgP4URoWsjj6ZYZXR",
  "key36": "4EAXghRSEEDBzKknGs3ijn68iNaN3ABpJ2pWFyyQjccNZb5mBaY6EwXgx8UxdbwZ1u1M5SksLbm9jDyKDxoQwDDp",
  "key37": "3AWwGTGk8nkeMcDM2pEFxsmub2e1v1CH6p2teVHygTRBVg2fFBv9Amr5aNaPdSMT41HYxhfS8YBTyrLrEvsixLSY",
  "key38": "5XdCiFueA3GXLf9otmUiTHeF4qDBUK6UWxxVToLoNjz7Fp5mRxJrg9dwM4CTkMG39P1wp35661PeGwyFUarQWdkS",
  "key39": "k36jrjqsR3TS3vQU94QcdoNUKmS7gHQh8M5igRvC91R2utMfirAaXkQpriCxpkGyANY79AcuBpEkTUhtcmymXLw",
  "key40": "z36yRy9sMwG52MnZn3MdV2wXEst2m1mBCpMLmp8zFW2z922keffg4ps5N2ckM2gKQYWvNgd6HUxvg1E5wdq2FYd"
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
