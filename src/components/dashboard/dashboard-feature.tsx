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
    "4BFrQidLKRrWCNyfQVQJUAY1WEiBPaELFjmmpYBSANdPv2aK6NMXXnU813WNBPFuYRTtMkfA7iHWFCzQuc6GUXii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wfjUmXDLXUAekkrvkfeaJRQzgo2wt4395UH3kp3VRU27riMpU1ywESEM56dFE6bcLHdpGtkpaimX3KcJo4TkqHn",
  "key1": "3JqGxm2US5DdKnCZDcrnyJ5bxshvHDQtPeJN7NtZ8n1T2o4rYnRH5yWR9Wttgwe43B94xJ9Qe6sweSzVGsU75DWk",
  "key2": "Aayb5ap7KWsTfup9fwsopEZ1fm8ud2b1cATVB3XnQAkGsXmJu2LPdWJvR8zrnZRpNc5pkGUko6niaH3k3aX4zm5",
  "key3": "3MrwkRvJ9xAefcZi6m5e5NW19D2BhdA2iHxak4FAowvghdzGC2iVkygqaLBgxi7J3tHAvEQnZAXsW6Ed59K6eUcc",
  "key4": "5gqfCr838nDHFzqoS5qoF3nTYQrmqCxEXi7hteoqLVBCB4xAjCFAJkH8f9JdRkvv77UsQ9Kwp7i3jqubR5yrXRqc",
  "key5": "5xCkjPDYrFiA334ssNus2q5AVRXbTaZB9YJidUWyfocVLZSsLkjhuMbDrmkvWKCJF83f31GrJPuozcsTumxwtXoJ",
  "key6": "2Krjex33KFW7D75qXFv6o5gsf8LKuXSWngG16aFUs32cYnKu1xmt5qouhQ3HyTfdzNb13jiPQBXvNybWiLBnPSKv",
  "key7": "2j4UPvrR7vNU4R9iDGS3kNJ3xCBr26WwyPRouT1nnBFfsZn3MZfYUHtN2Vyctt8cZ7v5PKiVazQsExW8D1svN47G",
  "key8": "2oGioNJD8AFvbsXEtNmy2Z5KRSBFvPDgVR8z8yjdVpHuvvzJig54HkGEV8YGAE9ATx8uRW59dsEHXkLB3Lz8DfaZ",
  "key9": "G8pun7HBaGnmtKw7Sqeqeuh1dTjvrPVrpz7gyrLsRGZJY3Gr6XeranFqwFFWQLABCRCpRMCw55QbZuuo2KQ8P95",
  "key10": "4nZMhddqJagcTSXyp7PQ2bLDjm7PjYcsx3HRRkF2ETUPLPESKZ8XoJmrj1WTU5DnwpAbtTkkfrEZXZmBm69HbK1d",
  "key11": "4bTVsbtBdF5h6P6E58xH5f3wrYwNQZNcB9PCv3m3t3dgr7bwB2uishb6sHcjxAunRqar9jWUZFmh1puQAUPxuTwa",
  "key12": "gdw1XoxD5qsWKjHXKsYBFEuHegoKFZNFuHtBKMir1X1q6yNYS8mSNebUh7eM37yQE1dbEJTsyFYWiqp3cijpeWC",
  "key13": "2Ah1DrDBwJEeNcmMPW7BPiiqRdRTNu43GYpZLwAiRepxzkLot37PLFzUq18J4ojPVLpa8atmqqT1mJGxWnFheezw",
  "key14": "uYZbYtnJp1VaYJYrGjvxBHGgK19E7SFU21fwp2Gxi3y93kLSeQLh9DR7zD84sPTNr5nb6Eo1wEmzAHA6PWTbfrC",
  "key15": "4HaUhZBy4EVddyForf3dTwJEFgcoeswtTkrjC2DGuTfFXnddQQVKiBynmEd1tzNftakDFFRk9JCaKmbnDUvJxKLH",
  "key16": "2z6ut4SboFLgeftBdB86CzJ7osEfCJNtGDcBWZaVEkjFsMEtPMP2ACpMEUN5X1LzBC31p2kHjPj7pn39NTHJcfkS",
  "key17": "YUQkib3HkkZBGPVxYLqcddJVvLcF767dVXjrDeFzJU9avBoGHDER9WH89C3QauFqu8gQppmK6mxinXo458KC8JN",
  "key18": "39Bq39xsW7Dj2PxHTdPkwgjzgn6LYuTRPRPUhu88qNWfdxzvYp3PkaaQaqfUgN6k1WEX9Jkywk8iusNahCwawV1y",
  "key19": "5GU5aXRaM6sB9qqDCTC8eHCx4MQ2Hy8F2UB3c79RqUSdEKTKtERDdqfyKJLHDz2e1x5vrTeeBc8yaXkCs4oQnbJ1",
  "key20": "23ifbWvrCvRsGxXP8iaBMNK7CQXrLKjyC7fz16YTmd9zUEhXD7CuN5LcmT1RJpDKGLeLaiU3RzQUDKnbCpAYS7tT",
  "key21": "565rXmhpKJpENzq9rrWU7Vj1ui2Ln1wmNuexNSwNwtDQoRwyq12ndZioGs7gUhPvs2usqqXuSanpgVBzaxoTgjXV",
  "key22": "2um6NTnvA6FKW6rTM5vWhVimmpLtWBM3F3Pu6cPQtu51dbUomJpNQzGrbkaSmXTMwNeUU9UsJdrFf5dYccqUKwKN",
  "key23": "5GXq9WJTuwvNH7aXgKUgwnBtGC2uiwwGE7doY18D3RMDcAdUUexwuhipJU4TWuyiNuKsZRpTdm8ZHW5NkudbG3gc",
  "key24": "3oTShdLDrT9nLfuLsHyQo3epHbYNYubXM6ohYbZwy6gpUmJtVoxcDB9jiZNnSfTb6Py2vkPsQNJz9pTiqLUUxjAD",
  "key25": "5oDyRJgvRxDcbeSWZDp1qdDEhEHXkbn5v1DbQnMUWS34A3y8Wncwd4Lf3c7wagNfq6xo4VztT6hyagAteFYeNxtw",
  "key26": "47SPfM5hpoXsxVzByAc5WQXvYwyoD29uSqAT2gjFRXTXG4o7aeXR9nQnV6qWQrdEwyAJDGN4swJxzuVnPfEvWiL1",
  "key27": "2cTnAfsY6C6LTUPUFcRybyAT6GdU6nXCFg47JWxurFhKNm55f3vtAV9kA1YZUaTntncvN3sRvJGGJJh6kbPu6whD",
  "key28": "9SYwT65jorHbYv3fkcgdCyZEoCYCETaPhbhEX9iPFGVg6a1pXmP99tkFAvY3QKzXTmww2HiNREk76ift9owkijS",
  "key29": "53BEEwj64J6QiqtrZZw8cMRewVw3Qtwg2poGK9cruHWPYCVnPpekWo1CTVm56WzqWRwXiH5yzrTpaK7C2JzSTwDe",
  "key30": "2W9joQnFfDZbSHDaq7TRWM2kjC3SDmxF1sHHg3NkdYB9LJne5PymcW4p1mKihJ6YQEJ1ZrYw2F3Rnnz2k2wSVcZZ",
  "key31": "3Xbv9fLLa3PYhMST83RncMrV5p3UbjBYSLmNcWePSkYwEF92bm13VmaYvroiP2euFnftC6yacqqBwfRxP7LqwzZs",
  "key32": "4RrQb89DwAKK9U64AjimScDvtssY8RhNkTvr7i7vJAuom52voKLwCoLNQa6VjziwJdQEcs3hDiGL82aMC5wrtjik",
  "key33": "2pftXWgnEvmPu28L86T4LqmV7eQHwZFgtJj4aqS3PDCo48uzzikgh8g7ekBsVyKFU58N7UAZVzeuWgBTmqr28zLm",
  "key34": "5swBjtLci7tTYU5zDTRowxNGKifsPL433hxi3d2TzuWtBmbUre7wqb9BFDW4EhtXHudtvSiR9AdK4Ys2tW2dNrWs",
  "key35": "3Q4XCwW4T5QfRDDhEZeMsJLUEWKRVfGbqjXuH4g2Wf11U8mxQKC5TGGta3xTB4kaZQqqmgvMfWtrE5JP4YwD6uvX",
  "key36": "2J31i8Wayr56Wz1TXC8SzQ9T75zaHeRTJHKBR5LcZiaSCsVYtSESx3xA6cRiPaUYCEvBomLHpeKEiJ4fKwwxcp4e",
  "key37": "2TFMswVMsyn9JThhZhBGt4wejcz2AWf7EPhxEgbrFntWX4d21dC6mB5PJKfAn5CTBRFkjrWXVxi2TMmDkApz66nS",
  "key38": "9nL9PkqM9KCUSFpcSVJmnSBhfAw6yBuBGEmhtLUynY7on2xRkLA8Ncmnvona1s5Kr4fX7YfDjmycjWqP4g9xU2t",
  "key39": "2SeYcJ8Fm2fSQUhxqmZi5gVy4rmWTSn58pnWTNCHU3rjmFYL7K9md1NGnECyUJiyP8FUZmSuXiVdwxKiFmEd6Zhc",
  "key40": "4qP9xjh7Y4MwhbHvDmbsmsSuhHwg6xTDRbJQZsEMa3L9GposHamG7vS11yQyYiDkVwxV4UsnmDMT9p8UhF4zfXnK",
  "key41": "2UP44jfSKicxfkqaqDwgPPyZsz1PExuFDwdw6EmfPy4uHpbe6KS9hQ1SaQm647XC6SF7v9EZizFpq2pB5SqinhEr",
  "key42": "5mF3oemLtmrfMiWHUSDLUrKzVMAdXrJVioLucdZcWDqDWr4PAgbfVb3mVNjYaRF7DkZYjrge4ytiZywjw7pgJeoU",
  "key43": "5iwDvdhFgHPrtgcAhbmpaXJM9UPZQQRkYtNPsahiEApZnpYnxaL63XjjwbcRxmuoiEPfkcJorVyXCsLxYtQxjb1h"
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
