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
    "4zw1N7sR2TYsh9QiYBUndJJDNgZEac4g42s1oZJTVcPd5sdcNYavpDkFAQghHb4gYo3gS9iPsg7DCQezESdLmJVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YAcZZXCneE32G4K1MMzKQzGyhhbDhkMUp3XGEZqQuBPDTa7CYL8kbjXKgXUvFmVkrB19q5sMn34Knsk2dhaTnfu",
  "key1": "3nsd3nJJww9JEHkCvg1GqViwK4eL6g6JHBy68yWoQLrZgBXYkyrohGidUAujLJj1U9krqipe16rPxVZPcqPR5J79",
  "key2": "4arvQBEqfJXweYdjE5DSjAuG7XZQXQ1a8FhMb884Ln2P37o4oTbwEtYiaJGBQjYWLkvSzZBqzXgrpyfq7zUvgtz3",
  "key3": "5bXbyN1iZidrs8ERBJy83R2TTRbdqJWwrc38GvB4n2xvYUWvxueTZtGKtk8fnMjvta2UgE3Z3ivbpdeAijZ82fyb",
  "key4": "C4CCsxXj6oxWBP3oCzksA2HD8MfrGpys9Sq3q3dJctfxWscPSZa3rT8zFu38DMPaLuTdXGvnseyfBq7GHahtXmU",
  "key5": "5QJTShSmEx36o5DFfGWoTHhZRu8TFErRK8WFEgkpxwE3hbotvuBt46Mu24pBdAfY5gBnsFBfVjbmyp8PRBKV5Vtj",
  "key6": "4QTTD1g7bp37t14xQeXn1SXEkFhtDouhLpasAvuuDGWibPeJ1B1jpkiQFfJgDSbe7kpC2BFtFu1uNHYARakVyb9P",
  "key7": "4aXNpupQEA3x55NyfDxFzKM59cAP7uFGtLfhmFsDmofVuqkPukWKpmHjooXiorJrTvYj8WTKK8kByGhP6Jkt3NsM",
  "key8": "bejbh1PLJz9CtvZJRThXHLTeKUzi5mZDnQqZcE6xF6HFDTPVRYYa9LNVTTBfj3ye9oSsFMsr9XfcqeegxKopUxk",
  "key9": "3TF5koWd7k9AwfxSYNPxh9wtdUgUCxVs67fUDd4nzhnYDoXZ7S8SkQJ8aYFrASfFEiEjSTkezgPrHAGmpA2LVTxd",
  "key10": "4qdFhPjDLVyLhmAg5eZuBrGQysyibr9ZWT34H1R2FahbPb9VpS8GVDmdhqt65LQ95XpugWUjS8nitbgmNGeNX4wR",
  "key11": "2feKp1dzufFAozwALmhXxtPPR76Mu61MZi4UyzN3ypcaotYMaL8UGBnb2PUpeVUZ3VAjPzgK8wGE1cWR1rTzH3Jg",
  "key12": "8uWswHkdk97SWdZMhmc6VYMnfspapx9G4X33H7p82LjCew1tJ7GT2KPeCufJywtkBV3wVUX9abJgS7mdGNiR1gn",
  "key13": "4GLhqSaf4HBENWjYVFSqpB6bjnN2MKaD5e2sJfhRvKMHgKjZYB1bKhbRqWGcAZQ1JwRhrKgD2jJ5qqPidExHEmT4",
  "key14": "2DxjmV3CWQausZwxmF5qXCj8sLswVZ2FE2bqPhw6DM5ssYaszv2cR9diek3paAZxeJmvUoouZzVhNPvZqKcahp3v",
  "key15": "3G4oJMjJR6RkP5pyVdmk1W34AgfyC8XM4VzKvjSTfaUa9C5KWnFgxbEkgfshPJw641u6SqV9XJXSKcvXBwMrDoKH",
  "key16": "CF2z7L4PDKvTkL3tPxie4aPDfuCCnrMSvZwV4PNLp6nWmviFukbZBPyqckjJbfCaEGoy8a4HEAoJAPF2WBsHzkT",
  "key17": "33m5wSNvRSgaqzqShxgwphEzkTFygT5ZQUqfSG9GxNQ7j6tqsJZBdYKTDHqSX8VXqQfJvc87AfaJMUWaNHdEEcAb",
  "key18": "5NzJokMxBHFxb6srE4JyFPFEG3F4f5uhv9SEhkbesN5KczVPTx7qVwJ3Bae5LnNFAR6oLwqxhA6eL8tbBxTS8WnH",
  "key19": "3RqHg8WVix9ahLWhPhuLxx77vw8N8r3SSCWPXVf5uvgnj79PEZFn1VB73kgcGhdzeXaq2ZU9ih34H7hDMDnJo6nv",
  "key20": "4qFj74XPjC1eoCztWUHvMFkHau2HAcfg1jiL8vfcR2H4DKAyNB6FQ3wfzHj9Tr6Egq39SHzDRsQMX7eDyZ6yooxu",
  "key21": "5AHh8NVuV82qeePeQMuB8dzQgxi3Zq6orixZrYrLsATF8KbB7RoiZLT2mq1wACcnTKaJw2fh526kKHiYk6SsTR3a",
  "key22": "2HTsoLJEgH9oX6CQTGXkPCEmsfEMcsRiFLQyFif7yriYPozy2nvUhX3sQU6R1XWXdumCbQLtewNuvVceKh3pg4EF",
  "key23": "38y7E3B8PWYaY2FV7ZYecSxuRu2keNrxRDJZhU1ntBRPUHzTkozfxS4NdsefhnHdVqR6tz849yRLqyftiVppBrW8",
  "key24": "3WQMjbZr5os3zjk13ZSqdrKRnNPvhbYdBnVBL4HU9kxdWFK3QWKPMDMLipsFxp62h3TTZ8rwUPrFde6HgQJy38a3",
  "key25": "4zjChoVPdVxf4KxwNneW5AqZs5TYtKNXCsBsKP1CW1yqCfb1Tg7me5HQKvHhpCD5C8MYg42gH5r5RWWj5TyLF31q",
  "key26": "WqaCvqEuk98ZiJYKVkS1t6iBVV7BUJvQY1idNAUSZzfnhTbMiNVTmRMyE6CKCKNTdQF8mEBinQZ2kvfcR8MkZ6a",
  "key27": "AMKsAqrzbsn1yCrsHr3J7dnMWU3fC4V4eHHLeSCh93iA6wHPJScxzXxp7pgzFze5MyeiaLpLrFdpLjZAu7N65CW",
  "key28": "3HfnvCEE3Z4h1RcChRF2w4rrEHQGSNLvFF2HQoBzdTpeYyuFWUFcpgiwwTme52b2uN6wdcPNuK143CF24YgLrAFm",
  "key29": "3nWkUPC7XiVvKNsAtcExUKwQYhTp1nw5QaDPsU6heNJTBzdNgmCqEyeegE1F7Em5ZtaU3RnZiVMdZhb3Qyw5bkvy",
  "key30": "3AfcMXXeiYVTfgyYRN6Rkdg5bc3prpou8CvwxJ4AucRMSopLmZiT4X4sXSuU7TZTdL33EYPD9cwtE7prQqs5cNcu",
  "key31": "249r5ewPLkuHhv5CmeC3CEfWyagmpVHbwpBY5DgMG12AP8tpJRSJzxJK7jUqdbugjYTpoobZ9nYcDmTw6em3EDdc",
  "key32": "5YjN9GvMcuMvT4fxhY8L7cvFQZMK7w6xxTrEJrf3GnA3tcBMU4dC4xos2sDCozinvQVY3uajLhawSWxuDPgpyNgW",
  "key33": "3PhfLs2Syhd8E2Eh22xMH69FvZbDdjYwc5xh39tC1jEzC2uBe1M1h4fHn1ViCSrRS3CkykZT9zFEZVwyrhKeYoJX",
  "key34": "31JsmVhFPnY5BzWzFHRRXQyYfWvJEnzRTesQ7ncYYeYwtKL5rGvKakZBRycsBZLPtfp6S5wGyDKiNEKoJVHWz2nj",
  "key35": "2djxGSwAxdrT19PtoWjXLWXoPGBB3VtyomfRCMLz5j2X8AZYviS2kzHiPjkyg8ys34iBkRjGvB2wZZVvdR7611QT",
  "key36": "LeZyfEJBXPBAsCQVQsBtN6oYqixJZ83Fu5SxwDoUP79pu7kQT7b9dgWVKvqA323XgKe83JwkitiydeqTG6694WZ",
  "key37": "5DoRv9hBdxVFUbeE23rSH69jcQrE8xT7jXsBubqb6URbJ24CJYqEhW6NtwAMGnLwsrA7kyhri4LyhrJuKXCMLKYB",
  "key38": "4GrcQ27Yp6AfVA1Hjnc4XVVNuwrZGYa3VpLfnhaKt5Hfm3fqe5AngJ9fjgNfbmHiJJC97ty3osNwxa3XgLFnzGGP",
  "key39": "64oiPu2ocM2FM4Gqj9L4s7UQcqXwYEagtKHBuBeuQD6zTARCzYL1gv4Uec9hE9w21TtrFBdJWJrRdzuqcEAMSmEQ",
  "key40": "2BV79oVzBrUm8QjLR39gFH8CKHP5nc7uUg9Tnk53zz7qbUZG6eUCMwj5Qb7a58cVcruSLCtX6ePfumLSkMbHmZ3a",
  "key41": "5qvqeeDr9zQbN8oZSNBHf34tdHFsjgCr8d7rsZ4fK4Wf763136g3n8CGZ4SFVNKK4XjDduL16o6jsJTju7fSrzCh",
  "key42": "36m34a4puYHjPJRtWMJ55mL7oXvjujNj2ZFBW3NTCSWpC7aCwpW6PntMTYJo3aobovFT9sngD8QJSBXyaQekRh4q",
  "key43": "4RPKkx61RfFSVL5GAW68XjLe1RBeY4Ur8zLhwJf9bMQa7JibyVrwK4ZTr9fB3izzeJqYsQQwoVg8QbSbotMbEyWa",
  "key44": "2CQcCAZrhcMUrJbccE1dxWfQWrLVUCXkWrNgjQy9K7S3ZGBZewwGCEf4eTtVpQSR3r8vvChTEaUYjnfGT2H1X8uQ",
  "key45": "3RJP7e4774pjb56jfTw3TMpr58iBGponD1JTRAmAyyGGmPCvMS4wSzGd2vWCTG6e1KnPgkjnWb9kTmw2fH9jY81d"
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
