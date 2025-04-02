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
    "37KFSNmZcPPXEWkrjDPW7WHJXo1p4x8Ez3XQb4DAW4ofoaDVuRrJNgAJCf6QwzmGNe1U9K5ad67tQo2GsKdmkao8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9QuQ3CwRA6iukXNtkxpjwECus754vpMuzogGG1uqBoUBqk8ivsYfKj3rDQFYDx2YELhgBNhq5LDZ8LU5G67YbGB",
  "key1": "56oHnAwzR9pEPskYNkzncoYSsGtAuyPhdXGR1Bp3LSqBq4x1R5fSQA3qtGanENskxh9dD4oh4G3nR9SMpyjkBqVZ",
  "key2": "WSE5vB6ASjvz72MBzLFgms2FUiViqQXxL2xiWvE9LDcyHwPbMZAkoDnc6hMW8B3MxQRCfJqWQoGM87Lzsen55ag",
  "key3": "2C54UsNNyXXaVJEEMk4vSr1hSTcURwQBvecJ1GtQNeYzAw4W7CKoYuPJou7Thm8q2MBqA4naGrD3jDVYBoKmVR8E",
  "key4": "2H4fpDTVg4yLg9f7Lv9u4sDK4XaHxhahU8EQ3itQq3x9KiA8xHATdNDp7Yo4CTF5V8SJHJuoC7ygKKWrEs42zWun",
  "key5": "286idBrmyzEiNH4g8Ht1ELCewXUm3cvxUpLv2xZ8nae58pT7GfhXYkgjhwYA1WaNtHFirsvJyCC528mkMwVJwifR",
  "key6": "3hUaNNbxHb9osa86xNcoPvHFrmy4Wm73HEeFcJdquV4qNqREUe6SLgM8EoxHh2XB7BPo7RNxfVtWGJwNWgfzmU41",
  "key7": "4dDngqnniQ5NDyfmnSTKKmzxHfzqRRZNKnkPeKGSWVpyQK3bA8QS7ByDmLVq5VTPSZfUofXtGE46HimMRSHftqsN",
  "key8": "2JQNJouPYShAqGFVJxKGsZRFQeu5KE1fBfWJAwcdGy5E2dxyGHSxnGnGuRGGGFEmmCMCQVLyRt3TxGgtzKJfn4Ki",
  "key9": "4fomSvtjsXgL6ziYKCuWrA9o3druyCwHUgFNmo7NgMjWGb9wzkFztKYFjnx4be23JiEgTS5F9cK5etKfKegJthj7",
  "key10": "c1khC6jqDPhap7m76YVx8rFH6YocJhEdwyS52okUwvrkfLDhKxLsVCX1QhtphcCBTWQXZ5nDsjKFsXzSh2CoPCL",
  "key11": "GgeD6mQg4AnSy1P8bh8hDc93uecVwWd6Hf1stafNGHn9dSzZwxXdM4cJB9rKPey2Zpg72orrFMeetai7c82tUpK",
  "key12": "4XSqVfu8THezwAN4i6s4vWDw8rragxEtn65JsUE5JCDpPDyMNQUVjCgZZh6xojj66ECaCP5hzmvaTxxmHnGPfn5j",
  "key13": "2qERf4fiDEVnqTYA4L7DmTeW9ya2D33a4WiNeQB8ktTdN45S27Kc5pmKeECYKrcqt7JR9CUALoeKDpXcw3sbdmpJ",
  "key14": "KtTLJLEArC945RYwHRexxV6pFbrBj8U2fp7XLqs8YrByGwxdPobEkBNqq23FHHij7GkeoS2cyNuAHtvVB8XRdpB",
  "key15": "569ZUoZi4kJsuU6iD7pYPRTM9QVcpSZbLRywhi4omzWVFdiYugLLHNWnGfnR7CThdnskMSsgH16KDe6gF3evCfEx",
  "key16": "3Zx1emxgaM9GRktSVakUoQkfS7AAQsemYop4XqNmuZsHELaFZbSJmcGkEh2cC4MbQVu3xnEBgyNyjgvbp4FaT54s",
  "key17": "5gvYJbY1sMNNXCiqcAuZYY6Ac7oTczEJGtaWuie4Zhjy7y8jkejNhWahU1wsJGGwu9aMCWBRhC2LPbuogQhpVd92",
  "key18": "5srbcbjGivvhfBCA97WEHuEDgHrJDvZdoxbRQc5x3qEiS3YkrQWV6nxeWqABCCqq1GjwFJyx5gsi2NonoAxSR8JU",
  "key19": "4FmtCV9aQZAX5beFVkq8kyKCPvinQ7McM86cPCy6LPqkMTbv5AnmZFtNnNBaJL12iabioEYLbdJQNiVmFtw3asyK",
  "key20": "2nBhPv6y9X7nSWTBnCxbDzAUfKnic2Qw2F1Kxc44rAgsHCYQxXTLDMPtdSRPvw3yb4H6RthHHPnmsPMBK1Yua1Pn",
  "key21": "64w1DULEMr81aeqLNLKW1MMCtnHEgNMbZnaiuz7pcrPPbaHrMLCGVHKM9XJummc4zhoJwY1KEbRPuvpvF56S6CtE",
  "key22": "4yRV8ZNmCbsDeHypQPCFDqA6xhZ38qve6pywBWGqF2rsGFH59twnyAkShfwkVzrtSg39Lk7Ua3Gu5BBwGJUBWUvJ",
  "key23": "2qZyFipUKLoWL8X9xgA5WcHkNqsYTX4xgt2hTdgLnvg6rrLwBMSXuadGndDpBs9fTgR9KbNGgCpW1tgu4yFwgKvc",
  "key24": "3WR9tGVxduoUTeM7aW1ASv6GmGbYvzVMeKk86gNhqtDQf849SJELiepjWERENbZwNqHYxSQ8WiJnW6Q7AgrsM4ZP",
  "key25": "5YGPWfRHM6CbHCedxrTmUsrJ5niNuRCtRTVYqwc2z1bUeQ99TPCecgawFMBzdBpD44HCSTSEr89BPnor1unaMd67",
  "key26": "2HxSzRe3su3wrpg48ZEx8FFnZiqskrSEsdpvL36d4MtUXXHgqUqaywXJ5E2w4CJkFtwD7xGjhWqDzS25UV7tRuPs",
  "key27": "AfPs78kbC5sUTvDYYffo7gCgBYzdv2brd4ZmChkXz47iJY5ztYRpTwpFm2v9ozkpob4HgFi1Z3imMyAJ4GhhytV",
  "key28": "4j9jZ3CFYFPZhBKBfmDVsnPY5rUrEybTj2LH8wo6NqjJnJ46bkhN6wLNRmi1QeSN1cgxZdYSTrx9RkGdQvonjxz3",
  "key29": "3gv48fsgQFT7MJLaJYXymQ2WeL3u9PMcJJiSKzguR5KjMkvSWgW1Vpxmnba9a34mmBPY83eAuzk8KKfFP2dSxpsk",
  "key30": "23mFWH27cqvSGSGDfrG1eLSyS7xs6gBgvNFWFLGXJqwjmEzAxxHdwKymGitciw5d6uVrhzswSZrRinEnJXyuMR3i",
  "key31": "2TwiFXzpbfYxE6zAYx9w2aMZwUe8raHpZPtYDEXAbWkJrbcEJPk7gfRpKRnFDFFaaGjdd2paCf5TvPnwMM3VwC6N",
  "key32": "4VGCeHqZCYu91EYhUCZYm9fxJ2RajfARse91naYzR63s8QZEStPEW66RyyNp54Puhw9qd6v7qrhQicd1keapMDBL",
  "key33": "3kMEPxjzWFdAMehSmatFSVMWrCdPZEt1odrkdHwVgwr669SHGFGVgmAoQc2PRFDxgxoRLv6s1iRMxh2zjSVtUuy3",
  "key34": "wct2qbEWFrnDri8R1iWbuivN8NearjuVDQycgyYLt1v9TcUxcwz8SxhQhZpkbboZmeExRFJCUuQTS8s9HMWT8kS",
  "key35": "3a7iNjuP9arSbgcYsUbkMR4EoJGeuSDPqSXee2yfdo8GjRbRNcF8F593j7iWGYFFCuvS2CH1Ws1XaUYU6nNQY1Hm",
  "key36": "5EGypu1mBbgWKYVATPb5iwgEA9qpUSEBaks4awFn8v6X1ov5Zk1r6Y6fhFnfvPfwnojPgqLD4iuiZzzCKzApDxDY",
  "key37": "391XGZvCYKvbCAJSEssnP1q12QTEDHAi93rrbyikgtP68dXsEAJ4m7efZv99caUFWm2R8yGrSNenVCBJNRfVxUHN"
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
