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
    "4NjhNyg7LizBW8Vn7TZ82Te7iMAuGwYpjNBPX45n8wgbZxtALn7bZe2RRbn5KLUtCZPQndDAJ8EYeW4AYmD2DTRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24e8PFbic3x84pXi4aLAWJbfcX34ycfTFiH1DehrqbsbBjpARhKBm1Tq1sw3GDpYqwEJDovtN95QMmQpACbtQxb1",
  "key1": "5nbePnaBJuLAxiLnMeC5ow3d3W15otmjKipYpfDUfZP6Yzm9vceshaapcPTwGc78wKPFz4yoHrJ48njLytv6eMfW",
  "key2": "58uzY579CKWo2C3XNbnfLgfh1iTYMeFzh47copi1gDVPnFqVs5NPHEd33LJM3j4wkpJeQinZdupnjzfHWMNpgUYo",
  "key3": "2ZERh7fnkXq1CsCNn2frU5KPfGSYQ2av5aj7FrYCr4WKTLMLNBcGxZtf2u9DRnng8SaJSY18m4BvxF6asdmT7vsr",
  "key4": "2PKSD2vHnjiYFqFgyixSN8poEkfUf9EvzJWz3E21HuS2REQG6JLa4pzZ32ZiyFY4oyAZ94LECjvzaUTiQQEAZiVL",
  "key5": "246pT8KG1aBgbiDZ5KeJSQgUK7oRG8cWy5hJYNXLhV9NA2WFdyyau4syq18hKK3aS9dcJnjvyRXHeCGxmLut1GBQ",
  "key6": "3LdGNnAfV437UuGLXFeeuE4mdisrajzQQo5k6azVVEmFC2bgQUsCqGhnM9Cq38s7APe3y8VmCimcvztsdeTtZWVV",
  "key7": "kUM6PdfnHbVsh8cfZZ7AG8QWK27mqjhfpoWzM49rzPfLq9PZ46kqW9ghw9KRnMCSzWnPkho6KUZXkxubYYxsBwX",
  "key8": "yBo5brN69PNf3Bt6mG7J1QiSuhUV2FXyruZdAdmdhBrneRCdt9qRmuqxqkrDP8g3v4kpjjFzTjAPLYUbF3LiMNy",
  "key9": "zJPrBopGR85XizaXWpMUJ4xVSab5DBndkLcH6kC9V8W6m4qS1TtKQqTvae4VWSLjZrvkBpz8BX3ES4er1wYg6Ux",
  "key10": "awUQRgmb4kTapSZbKgAx9PuqNzA6zEAJmwNz9vDKpLTsfvyKNzHSUqT6b4ScFWNRgpJjkW9SVZtSZFYiuUh9bwT",
  "key11": "4jE7Js7ruThFuzjo2u7K7MFGATD9iWA68WRe7poriUqvZE7a3VGfQbjA6Du1ujD8Uavqwstt64vCQjYM9d2p5S1Z",
  "key12": "3P7iexPjS77BnAhCcncZzhvn1QkaDywHH3mWBxyLTERfiPdjrRQ6p28NSEZ7WHFcdkiwGgymx7TiyKfcEBYTbdsL",
  "key13": "21VjPVHD9JzuheYkMQ4tcwsHNLHbkwWxJV4sjSQbA1BjgpW5Sb2nekxAdKk5R81h6AvNPAkonj167m8Lh9HFymwJ",
  "key14": "XWPzytAMksf7MSYSsxC8f3CFTVzs43DoJJmSKQeCFTwPgbwu5ZkjCMQmecJbGnVzzPvFXeYakcAHau6GUNbPjjr",
  "key15": "4mCfnmpAniUgBJLxHxiTNATa7h37uMaoDthHj3cqgkQfX645ztzB46xv7aWu6V9xq4jkhrShXYnJWmwgY5iSAp24",
  "key16": "5LmEAwkQTekRopEcqjyTi2mS1zQrKhndSviqkdyPzSueVX187CnuPMx4idvBr6EvdNxPwGkrv5VsMmQCWqWt4nmJ",
  "key17": "55LhpgjkJqhmizQMStQ6LWAaDAT6bpk8GrpCLL1TBa23HxEiP1iD7RVGkdi2xxdx9heirqkPSNHhL5EdvUUYHdu",
  "key18": "5umsQn5uKFvWioVuUHMhnxugvBZ667FwFyPwsmurDNYYPNQvXihFxKd9RUwn71JP1hk9uDT1SsVhYF3XPa4pf11N",
  "key19": "2UCyJjUGpLkqrjhSUedsP4DapAq1kPWndZbknZVFoHaSKi6q5bGHn14z8XtoKUDqRTQQn8NPPaNTrJkdvEEo8zMX",
  "key20": "3G6VUiYXG8tqPBDjgDKvAGDUWZFvBPJx5SzmqxmuqJyfHthBiMPhHNdKTZCmytA6Qdb91XzmUpdQ7Y9USZtCnDLM",
  "key21": "r14ELFDvvaQmbTiYoctrQusaBp1j27vGJbG7Lc32BAMxjoCdrqj8pEXdSjVj44QLFjG9ZewSPQq2tstHRsfcVke",
  "key22": "5oTCXVLC4Q58MxuKX3xnjrSZwknvMTUKQJ1cK2h2yWx78jZF3umvNWCHZuJZAgQCcEeW33ZCDW4azSRk3Ezcw2m5",
  "key23": "3oHwkbfrnZTb8foth4DrQmJuxMTG4qGcYXzDDmjkKTuz6TvHcuoNDWDuuSAzbtuepWHv3CHRRs8tMMWFz8T5yQFf",
  "key24": "2nbEUUMvAXPhdFt4wDgiqWCBPVpsZTtuEVRwhKXYZL21ptfU3JMbxLQF4jWiXVa7VTov3vhgyCcPVA6drTkxTd5d",
  "key25": "jQZJFNZBit51bkAaaLRFMinfR7R3SX8t5E7rMUpKhbYoURbrDYeS6csfLBWxcBLkW2Yn5WhtLigo7vviVEQ7k3M",
  "key26": "3GKaBvPfxr7rAQ4KkrWcEuk5C8JnmbXDXHCQt9yHzaiudEHJW7TgsRavE6H67xzFVMqFhpWvGisqNPhSNt9zoy57",
  "key27": "KsV5D1HjK5RBNYALXmM782tVjgSHeN7cjcGF1WxxopREDGcNSPPm3iLd6maGHxuMqNyEkXGkgnaPvtWe9J6ZixQ",
  "key28": "64vtv3rwp1S71N8vBoAaLdxDYtsSwWZ5YV66esBUFPjhx6uPnzP9UF3pSCksCsHhs2RbU4uWWU2SWagkgQyrAt7s",
  "key29": "TaEqspTduuwGXp1pGR23A7DG18WSbbswXqMMc6uSfjswFcLYC8yFxLkRkZKbHaLVRhcyaZhAauJYDb5TB7gEeY6",
  "key30": "4ZQb5UtEF26n6RPeZmr4hYEtUENHyfdFwgb6ED8vvoW3bBW5PZEwCAphQKyo6F4pZfAFsNygf6B72Jh6wx2tfTx4",
  "key31": "34F6djnoJbtnxBrtW4mvoN2eGHTHt8TR8BTGhsz5qXspjgupfVTxnfRzTpnNpjZmESac3tEQG4mGMQTr8kLoP2XF",
  "key32": "2DmbNPhQVQ5xMeN6VUDptbCg8iQtDAYegVXhdoKApPtT8b5TLPTXRoKtA1y8qhwdNKrPiNXDp1DeyzPjRnVMGP4G",
  "key33": "4EZycrWLKwSw1VfRiqrUziwvczYsD9t99G3NH3c4BGQGaNR2Wi3VLcu8p9xmPv6JNcDwJ3wPAbQjfauGfJHniUNw",
  "key34": "2XjQQ48RxLmUDB5TNMwMEHbKJVAJMxE7f1uRvtfAeo321N6ovT3kNZ98bz4QGsTh7eZB4mQSnmeNzzJvfY1XSFRS",
  "key35": "5AACgrZiDU1V2tDY92rWCYu3C32ojbVMjVbq9R6vFAPAGq3dxh1mkf47xXHVjZSizQxkcPqxHZeGb4jcBwjg6tg7",
  "key36": "2EutCqHDwgrjJwzXB4R8tigeJWz7dqhpj14CQQmrH3RVtbouGFWpYN8bNFCvG5F2d8NGmWGCtPqbcTZgPQ87yPst",
  "key37": "2gVKF6KWdJCBAAs3UQP535sguoi52g43z8dY4M5pAqJ4yoUkhgxhnqmPRqMHkPmFEpBT5wbkY2T58jkba36ohTK",
  "key38": "4rokE3UwDNEHZhG7XJhJbZgNRq3S6n5czhaip788YqKNmn9khQFCPAm3C2hGCxncYdDCByfV1VkN7zcGKkXzMdyw",
  "key39": "5et8Uamt9K9VhcdLBknVDApCFqi3LFhV8t1ZBk4tPx9fP7txaX23un6zbMP5H7rk26go9Lmv6upEhGdQiDhwA612",
  "key40": "otcCHbsMGQsFfEqX1QAMfT63RcKQyqebzBrteXZYLhGQRbiwciUNeR6ZfzC33T8Pyut7LvY5Mi2Avm8B28uyQpp",
  "key41": "2t3BX8CjiH5g7gQQqHsRQffN7XG7ipkHUKjBnY7HA1nMJJLaddQVFZek2GYeEfjWQwTURa8Yn7Q1hJoN3QVMAWKY",
  "key42": "2qpaVCiwPaHeYNLj2U7ngAM3fSPqpMqjRmtPbr6LcMb8D3n5rgyyMNJRcLvCBu6TH9YAFyTkQyKPeXY8vkEGmoe7",
  "key43": "3pRQdGRMLJMSTezib7r8TNGT6cDwA65zexPjy1xvcKqJf7ZiY7FodmF2t7PEaHS5wCUGNkYf6bzm7d2XKMcwPhDW",
  "key44": "26A889tHa9RumXtF2Af5gKSUtDQS4PcuYaTEjTwEDLPpWfVxtfv2L7ikAUvoemLGZZM3L6oZxxuEQSWGvre8LxuW",
  "key45": "5aFnzbzGTqSJWFBAggt9qKed8MP7GeJ2MUJGppFwwj7Cj4QA44exQA19c9XNjeSF888nGY2K8qa7bERRe2qA7tE8",
  "key46": "4NFfD4JDV4x9YKrWx6zLZ3AdAhQVLj6nkGZHYzL12768v6AkPZPADmaivDzKGGL3MHyK5yW8X28FksVUxe5a4Crm"
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
