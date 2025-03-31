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
    "32HZAHDZ6rHRdSXarRHNh4GL9dWEpyTeFW3WXkrdnyhZcHCzQbbn75rHvbmbumhEWnKBRGpTdexdkHK3rTEcY6YS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u4LvjNPL1xkyHvCbM7yogtjBjbQzvqQwZH2BCWiF4wR3d6oa9p63gcZ1ZDt5jn8u6ZRh62yDcaUN5Y4YBCeNtkd",
  "key1": "dWp9wYrbNJ2GhHyoj89pkzoc6H4NxpFiMSEPcqBTmYiUbvNswPLTJHqH7TYRasHNpkProvUyYETajhYvEMJNsVm",
  "key2": "2edmWK7TYu9DvN977p6KzU9MRApin4iEBuJU74MvwTD2uDNtQUceuCdiG4G8KujJ4RtXHtmQnpBteL2ncrUEeYYZ",
  "key3": "3U6Z7yUxCyWy32Cuw2votYrF5e9wtWy7cQKWWn4LL9sewSET5Rons54hJVeqGX2UhtFuuGN3zucYZmYtbxb27Aay",
  "key4": "3VZJA33pDpU26F4akMWizFSpw6RHU1Kf5sX4HPZ9GFrQAmsQYPt9FG18LkvSffruxz3NSFC6GNTHfnAibPFVXpqC",
  "key5": "3RWvQynZ8bnjJGeBHJYzjnWxdNHYsgs8JusKxCuiqEoNUvAzzEkctV8b7aMsnqSfEaVctoALK5MAzQWHqG9GtaHE",
  "key6": "2zCXYzVuGwmbHy1MT7SA43sASedKe26Sc4qQLCxVdgtdMvxHN7SB57U3jNm82P9BZ1caDqtki8iR98AywZqPFvkF",
  "key7": "7H5msFGVw15iZTKrgLSzsTKkV4SfgKpc24aABjFpv2KbDXSJS7PnR3KueFmdVj97KZcqY6RAWbDdThf5TPw4pze",
  "key8": "56g7w7X2nkMmHaH4LV4F334oRs1JFejtKLqC7UzLdzzoPUxM8SWiQAHScYQj4ETkkFn2gqZZEM9iPRj5rgVmwjau",
  "key9": "2MhzJBAexM5ZHmiyDPt4uqorqP5dDfvTfeiW9NQVu6jwGJtYp3fEeq9ywQQ1RDPMKA3Xd7G8hENBYSxhAHkkjpfB",
  "key10": "5UN9VMJCt8rsK77e1is15qKbuoxyiNwF2rAKWXDDTvaanBkrHaPL269j7tEcToFVzbeNDQBshPVVmxyPhzjyygMt",
  "key11": "5i8KwsnRtAQ69JSXRwD8QkHaWgNJyc3UaqswyruBLRA7xNsBMckG8S8z3epZBEZFCPscrYeRgo6UyRaY4pMgFrWi",
  "key12": "4d4cLipgJcXAf16pqHfSytrJmcLLfDiBQCEkdkpaSRui4dC5vw7xD8a6TULdk97JhNjoLVZdjTjrdTHAjj9FMwJe",
  "key13": "4TPYyuqtYFPB7bCn9eicGBYkfa3Xhodku3bDBuaxHdh1gtAkcAurUjEFaUfBHXaqwMUVZ5GuinPsgYFKzf6zCFiz",
  "key14": "3mcCBqoKbSG9GcnT6yFDyUW7WY9T4eyMdErmNE71cxJkh1jr4iGS2TDAKnbfoEdtruKk8BZxQNZ3rgLWduyNeZPe",
  "key15": "3bAWGv22nkDyJc97hxmoS1TTgR6zTVtX81y9FnSwHgY1KmqdiTsQPCgCJHs1psV3CQQgfTJq7F28daQXQg1bwY5D",
  "key16": "2774qnsgUs9TQzMVY9Zk5Aab1QbBD5ff5e6dkLQxnixQ1M9iHmu1qh4EqaYoM9rTt24Ep5xMvBxWeTD5Mv8pFDPU",
  "key17": "4kcVosLSk5rGVEAD1QMuBZ1ShyTUqRmb7QYCE7uYnpfaFHYeap56m148yLWAmcnx4DDL1A4rcXKavQbLUKWGTpp7",
  "key18": "2YSSxgxSXRn3SSVZ3MG2YGLM45hsppDbW9AkvnknvvFte3z63dCkhMqgu44FcP3UhYmiEYJ15427EdXBZ5nbpptv",
  "key19": "2dAiZWAnNccBas4GW7Eh5GewymaErZXihXbvLyNdLxj4tzarrXdk5u7k1PzKbCgrn4dcY13AoTRoEpC6bLZ6UwKG",
  "key20": "2rJQF1ectKZJaef3MMQHrAcNe7WAorZknmqezxQMmHoJ1Xtwe1kNchxovJnaWFLH2YwoC1KQXf9xhGBSEiEPyn1x",
  "key21": "4rpeZ3JrGz21D1ZRUi3fezv1MRfFN62hHpy7H5WmspbzeaoBjg3n57JXFEgq7qvFAtwa8PfEfxcugsGpTgAfjzpZ",
  "key22": "3khTWA2smxoWpHf9xzuMJPjxUZXqecGR4bq7kgFfZnKP55tVtgu9DVeosHuwhRkwpYX9XayS27wbErdiwN6bRgov",
  "key23": "bRPoTU5W8WV5Q38SubChT4MPsTMpSZUnQtTKXz7yE24oPWdu8x1NXKxfZXvsp12K1r1puazHurb4qE28YUgcXgW",
  "key24": "23aq3EVR9g69p7fStqjAcnN7XaM2xATWQ8SKApqfTpocFvU2AGKvhNdKXomiJRWk5KUqxdGLmKq7Km4MX85ss6Cc",
  "key25": "3eSMcmGM7TEED9GwGBomF7eqHsFsANm4mi9EuExY2hmXk49P3Y4nMrQnhKAKmmCb6coy9pwRDoiCGQ2zgR1ccEGR",
  "key26": "2nhGYn9WDxL3GiC8f6E7s5sivFyk9NAp3Nry9Y29fZwAub2KguwypqQnUQYnSKozTynxgj7KVVGkNjYPWW1xXq7",
  "key27": "4Mm9fhEDmrQsgDLsd5xWAneitCtA77AkAFiXfFTiH1CNXha74NMkh5ANGRUn6TkVXHZXD3wwhTQhyvQGsK9H3tPN",
  "key28": "28b4ZYCojUvoYieXyRmRamVPvFDvFH61XHRwHvJqSy5ZCzBGN5v9jb3ui3hGepS4MyCqEnWFzoudmgqdj58J3Ao2",
  "key29": "5qnhQUpF1K2S4duDdGUc23qrz6BshZpgerhXaEH3qqerho6Uvob7y2ofekaYHtCU1tf3UrY59RDMa64t99GAMbdx",
  "key30": "223ER1upgTarryJ2ikCbNZG1UPu7e27bb6iRLhN5x4JpUvbq2STnthhoC2H2mLoYxK2PHwRkhaSJeMCJfYULi6ab",
  "key31": "5W9Jvvn1xanEaVCcW7rR3WuJXvRrvP6zE83unnNZR2jeAoWqYZU9esBipXLRWteEJCDQ7a3mQCNtoaQN9oTNaRt7",
  "key32": "2gMgpeMUbL1NXpyjTzLvPu6PpHXLAFeqQGavf5MGLDFCwPqkYDdUbxoHygzqyyNrPXkH4tmPu2KLuSjdoJkeuFjC",
  "key33": "3veD8WFdxuJb4AxktGv3h2G9KjKBbYbny5kmKRkzdExT2AiaSnKu7tLoB7PPRrNHMVnWLqHDb9XBMKpryuDJux44",
  "key34": "246Z4S8vJxTj1KoFfWUj1BwNBpGRAw8Zk93eafrq4N9UMpJgZZUFsgEridCLnk4duNkMCoZfXptRwxCr67fxick3",
  "key35": "4WWZNMogGLUv3YLGMGbPmUXfXZ4XXaQwgWGymrm8JQgg3pXTmBKcwvYtfVWgazjkH91ZT748RC4XTF3FL7oXDdD7"
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
