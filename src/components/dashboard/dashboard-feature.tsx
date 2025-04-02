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
    "4FeMEcULowBqtwtV6vJ1heSzj9e1thxdh81JJVF4AJJFYwxAemCxhoAaMXzxCGMuU9Eh1n9cSPVLPAadp3ggJEyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y2QtzqDyAWxQJJ8aS2cEbfLYSTJVfKeuQ1Q9z37NKNaZtHEgx9iyt6zm6vUvfFKC59hxpK7Ak4jmBcetgKRwNvw",
  "key1": "655Y28bhfAM15kP2G9EAiEQ7Xwyc9bu2ewUsg5ViGmiyxmRvnVDmg2TS1QBKwkCtvmDidR96wnTkuF3KS8WZ5qog",
  "key2": "2YsVskNoNV8FHHkjycND1reJaAXvvPNG5yaRuKPeBz54fvm9jPXD1FMdAVhycqpC4e1TpN5FxuwhvDtWY1ux4cqE",
  "key3": "2qxGhscFLEQpYD1z426ehwKNM59GrKyUYtxjTzyySXuUWp1jFkLLtaKfTyB5VMG4HntqgVDLHwovpHh2bm6s1H26",
  "key4": "2JUuTPtdacQQCa4htW9nNB4XU8z56gZpcgrbZbG8GjRjiPqAC3AG642WELYRhAjyHkTGKZ3wsA6qRZr1coYXQYwx",
  "key5": "22TChWqqnKLZn6BFYwZ9kMGuG43opXBdFsdcGvhpz3hcDWC4uQ5WynhSwx52QbospVoAwqF7QggiNa6QzjBuuSwV",
  "key6": "4Ufgr4QG8EkXBtdaeNrs7oEGUCtButqoEmAGCPAwAxxHofyF7fChS786b6G4iZaRnLgMj71So7toaair1swvwghv",
  "key7": "2CjwZguHa7MQFb4H6UwrgxTuxSF3P8sUCMZxXxwPLY89p9K9t4vdw2kWXSwpRW7JW2xxXWoVRnu6nUcHuihPDUot",
  "key8": "oqqURS8RSoTn4txf3TJAPZuDHuHty1pBDAHhofd2yax1KRd8hr4uWXTLFvvgD6VaikXDdRivppg84V25S4UuB1z",
  "key9": "3v8yykZJYX1KrL53oDCDePUs84u9P9KCKhZJJaGVVYdTokLtDipia1kks92VRtV45JxeMKw8iuzgVsbqdKdQpXEy",
  "key10": "3m9JYGUhCUSuKsHShxMtZmXm7iAFe8tojETnWkgiqDofeHoZDXVHZZS2kSYeYFfBQiEGAD89zSzaxpgiqduwzTy5",
  "key11": "VYyLpAGrWQMEqwh8e4vPCopnDpQjqisP925o1H3kpV3reo7hexK13ZZx1mP5tCC6TbGyDwvYa7n2DWo78S9FAqs",
  "key12": "2AqaHZ12dXALYE2HN3zuunGvYHXMSG4BY4CVkhu8GQ2Fr5tsp3zoQUoRM9AmbnV3RAwjKjZAVXdMHXEpU3tYBdAL",
  "key13": "gAGzCwnBaESiUp6KDqGip8opy6CjzhnRNudnQQNeAg3ThFumr9magJqR6TbyEyKd71Jd4Zzx8nk7cZPpGE91bPh",
  "key14": "rJu4YFnWZf3sbjXJR8hC1CoAg9MzuHaHCrRYDf6ExCwJY7VCyZb8eQ2mtEo25oGMn31QpsVd8GgeGYQQ8vUGxat",
  "key15": "5u979NPmecD9gxdPp6Dxzx71y9gAa8FpYDuNwakEwpepYs5EWbR3bKkkLhFUZvznbjSYEWgYYbmtFJrPFUC8MXBF",
  "key16": "2KExnCQDWLTKUB1fMHUohiiNdr1G6Ho2ZBzPLKRKMiWtqLp8zWnj3Yozn6oDAfzcZb9JUjVXwaHGzjAtUMpPtevs",
  "key17": "2LwgBWodDj6c78FZKFnomBLygnf46Sum75YLxQdS2n2iuUDtcG5btVGo1vdSabs89ad4eR5EBjDEaHvzwHUGGQPs",
  "key18": "35URJtdSFzqVnVPgrdoyNgU2ZLLDadtRe1oSJ5PEqH7169pRQHMyQQrwGzQFWr4pGmNS6wo1zqa6XGES41uQiEQ",
  "key19": "2Bu7wwBDetq94WKMx9izifj1UAVwMV2qbVLrHeobkDAyAiGJP16q4hneBLCbi2y9jCCkWtdrQLSeCneENkzZBgB9",
  "key20": "33fg4ZDF5j33qpq4RKAgB9PcgZoMuFY8c9tmLdPdcjMw2ggitGH7nhYhxULDxugRU3bszLj5i1m8dyGni5121oHz",
  "key21": "3JGTq8tXdd9etQx4zAG9UXxhdciL5xkBWBzeUmpzsee5FeLBgeVpERKzz54LTgrBZtz3dxMdFbdfFAZxveKiL5uo",
  "key22": "23Tq3yGx9m5hiB8FSMX1Ehs6gawac9EzbdSLs4zkqW4SoZaAYC2GMN8bTLzDtnDFfdwXAjzVhD7x2mjaNmZKRQW2",
  "key23": "5tKRCAqLQcafsp9Mu9SxpiUVHZhnyuTt7kUw9oTWQCufPQKRBLtq88jAjtkL8KYGJvr35cQh3s4nfgHWaQ7qdK6s",
  "key24": "4B334eHak1ZmjD1WNrK6Lfks94po6oqf97WbKn1fVV7H2Uqdk9r5bzSRXETCTFpXsTo9NKKMVZUu3h55HQ6fqrNm",
  "key25": "5urxHSkA8JjcKVDTojDAgHpkUY8XkT3GxV1VQuyb6fyEi5hHPvoviS5jzPDpqFYZcjV3mpM8Z5xwwJd25xz2SSjs",
  "key26": "5QTu1zbWd3uHmSJw4BbMiEoBwiWbiw6Md6Lid65gAeeVkvJ9UW688kacVADhuKAxDUMMXaZoQf248cvkE3MExMq2",
  "key27": "5tLamowHy5SLCzjranQq5Q26HMiEx5y8hsYyuE3D7bPkugHA3F6AtskKGhc9MPiA9fVYeWRU9mStRBjsGpZAbz7E",
  "key28": "2yFRFntriAjgT8CyJEJjJRpFzpPY4tEwHFy6UhehncrBLZuKcoypDBFGNNoAR8C7P1bFMwoC4rybMhnrdcuxcBA2",
  "key29": "39NXxfZmpznThLGePRK7CfNLuPDHRdgM3sqyFVHeWXfXobWyWsAfMHS6zXBpay8hRnxBdYz1sBukJW6bps2fexGV",
  "key30": "5qbMRqiKYL1EQxh8PznmDExyZBGRCCxYhFA9qJ2NqCjmbC4sHm3ttsXGypNk4hSAuLW13nYDmjyRhUd3tStkobTa",
  "key31": "3cDUd7XN3EAks6GfFVCMovPytv9Jr5QuRtt5WKdtqX3Te9MqD5hS5L2QzWMwvm63jveEpravrYjfDiCxHy6oM5Mw",
  "key32": "kSfks1gXwk1UiHncPYDkqk6j1YqzUecB6FXTGuEyx2vTb2Uc8tNHExa6HiMdnTtVSRxAd527z7cwB941QTT5cFV",
  "key33": "2JJCmn9x66eW7Jt3feUbDY23tDt9BzDN8Tzct4AxEsDWFPr4zGuXjeUx5fsCoPQeyJVuhaSd3mYYvAKC6GPvPt8R",
  "key34": "26UdefmboPHiSd4mQ8HHaju5M9Yv9627S2kN4BWEsVV2tXLEi2QDEiCEj5nuAEAA5vhnKbtyDXpKTzRj2FpQ6wYC",
  "key35": "2ymGGkUzJeT3TqysUqUd9KSccbgeCahQrMtG1X8iz51SAzJzsMEBD43QeRrY259jJ8fgBrPtwxnrCnsTebRJcE2w",
  "key36": "4np7bDQSfxxnTKPrBzUEciuuJCSBhbEC75rpL4TtqyJGsxAVNWDNcqRdQ6QZi1SWXEcW93ro1JodUkYPP6ev2AYB",
  "key37": "51Qe3mJgczzDvXZ4ZALxxKe3uMtPYMNjLvvs9Up1ZrnQpfPc9oZLkcSbFzSwMRkDadoRJ5BvMBdFm5gUW9wjScGM",
  "key38": "2qWPymHQ9DnwhzzZKiW1zv6Jpi21hhz2pJkdr5QkqMnKohQtoAYNE5hZssfnt3mMYtcQakfD1d8etnjdKeveHfpD",
  "key39": "5cShg27pQ3sVY2kTGxqYZEkRfj1EFNeqwWNECEMyFrqvKwYytunWzQQ4cx6MRHQa9jAHmKZppCBQfXDRCtNhFx37",
  "key40": "4FAsGzQLvSPVdMW9o5LsA1Htu7HiKGWVPuLRdgtxgcjrLb6SBHXkqwfPyz4Gdia6iWkpfBcwvefmzDqF5AHx667P",
  "key41": "5Eq3wby4UQigrdHGY3JaCH4KG97ozfH5vefR4FSK5MStFAfsb1mUDUBW8MjqhwKVsUEpXABUn33bicgpYK4GWBUn",
  "key42": "36pp68d6nx44Xfb6v3ngr25EFgA6WxsSrRptuCRckK2u9B18rB4DjrNRU6DLe68JX4rosw3CcKSvVHBB8EstiJtb"
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
