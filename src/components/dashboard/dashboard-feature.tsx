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
    "4aPpen5gDSXmiN3udka9W3DfQRTjJx5xvVw4CFsfjFtWT8kbRgeyazdm6oAfjffrUZW5igBKypMbxNYq5sKWHw7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64HJR1xqCYFbKR8k2vVwMAVuwLLRL5HGvJjwkragd3D1YbiU18iLJFeuVvAvD21TxmZZgowC83nk1DzVdqtM2ebT",
  "key1": "3doXNhDo4fxM6XZDzwy3iMbHWkUjYqm48k24F7T7z6Rog8FzySLwqGAuXt27hDTksKx6ZtfwuAMqovJzZQu6mTp8",
  "key2": "2296F7xZMw52ohLsGiA2WDcwv7rLXQPMFzL9Z27P9ytsbQAdSG8jUWnQesxY44n7B4Zis5SB5z2yQ9b9btfjXs3f",
  "key3": "3awew4YCuw7TLcUJWfNF4bs5PdN31DTbCt1F4nUDQ92m7hdRdeEM5stfDuT2Wwnrv8K6Y3JHb6mipdttGWPNY5rb",
  "key4": "3ZTzUGPrfrFoXgUHyMfvqRRuMgPYJrRwLzYRkrcTooBoPcN9vg91ZMVVCihtC1tBJJH4KF23qJ9WCYbzcYdDPsXD",
  "key5": "5xsXdStMUp4oTLGFaYAVqkg3JJVHDJFxF5rkYFTm9fsu1QL9BAdQ6JG2U6Fh8C4meh8suoyoEjcZ8xA2iHmr5y5B",
  "key6": "5TicvL7WBPXwe8NMVUVjNwPjmehyCccr866kNDpUsvjLfG7uhmh3nbNqcUVndEqHTZHrpkbz6q66meBCBQjEMNjP",
  "key7": "4jtCQWB6NEv9j3Uhy1TaWpywe1gP8xNgaBY58Fyg8o9W2aBm4J3TkWrvNXsXMHbGpPnCxH3r8o7vkwKiZ5nihhUt",
  "key8": "5c2iiw649bjEQ7bM51QxqVgBHbgz5K8uy1aJ1NFzMa3xy9rAYfQUwV3LRftTxFamKmt7RwhiyYMrr2BcNJrqxJ5j",
  "key9": "3BmMXskwe33u6y3dyQCALaG1qKoopv9Cvm2kpVHu4BincmyNK6v8KXc4vBHACUndowuZA9KzCWsAwAWaaasLkgZ8",
  "key10": "1A1urfViyeMWrGGYUr7ttgiQBtSC7zXdPSCNsk1PzGnjmbpf1uXXKowR9B6Q4TEtaC6SJoskXjiEZjzSMqZFaor",
  "key11": "5XjFx82NaJsWYRMi3Wk1tbpvfGAHVTHCQoQaZHdnTuj3ETSpLQEyYWfbinrQdRdFbgPZwNzJALE6YoHrq8S67xSa",
  "key12": "54bzfQuyUPjdXuPMiVHrtuYWo9e3aJLHNqmz11ZFDvPrJW7SmaGjhVFkAXK6hMMKZPBeFrfB1vwyyqRbkBP5xz7F",
  "key13": "4aRsnGpKxPAqsNpfbAAQBTjTDr2wh6iSdDcsS4T4EDZULGRQjmKBdRHkjYdcm6eJUo3F9oyWiYRD1ztWP86mvxRe",
  "key14": "LnrwMb9apntJE3VBenrhQUu8ChjksNuKf8WyrFzEnXuVNgw17Yhp8dkhLw1CbKoj45whaxjt1yo5RCPrM2tkqkm",
  "key15": "5PxxcFdnTS5XrPGwb7ihE7mLfdjS1DjtYVBXYSY1ED1wfEebvWC28UExRqQ4Cg9tygPcepqbj5hcZgEH97jNizqc",
  "key16": "2sHw32kNtW7o35miGcuzsPGnRawSvkSkhBhCpXBNQebPdyPyfpkX9rm7NZh2Yhx3nqa1V6C54q6wWC4iMoMkWNiB",
  "key17": "3dvmd5239L2w8arhcuSc9hBFwygQG8b2AB31DLKfnQJJZjHyYMGbVCt3fKHaKxZtBizgAcmbR9T7WXXFW8WZz1jh",
  "key18": "2eN3jMJdAUKsfL5kFpyjeDc38SnNGnorLyYbQ1SFQpvjVW5RHWYRYxVnJ2ckxFtGcQS98zD8zYwSXftKXoLpMpWv",
  "key19": "trAwu36Xg7k2fukAeZCvYkW3FeLhTpAhy3tgeVdEoQVA6ypCs4jo2vc3ZuhoFGdL9ddMSQ79jmBt4HeLsuooYf2",
  "key20": "5bYmZAXvyYSBGqJsv2bpdgvA5MFLV33gprDBKnsRhHhjTgeGBMTnDKqm5LVpbGzqLVtPMmDTrAVAezX24tCBdasY",
  "key21": "58tzw3jEhTdEYokgWtPzWfSCLgVGDGaXPrvLkFk5ofXb8GLvhMrSREWyEsDs9mZFemNMMWtKnVCofuLSXRKqMWBL",
  "key22": "JssQnigjLGWvV2723EewvpLVBdDyfAzcPQxkouBkscjuYNLSCh5f2wshgyknnPKsnyM9zegwbbKcogbVqxGnD6Y",
  "key23": "3zeZ24X1wdHHRNr9JWSw7myAoLy23jtM1tpJffWbZJqj5dPmF4Yx2pbw25mBFnSeQfvyexxNWaUxqQ4nRXsEsfw7",
  "key24": "4i6fH4qQStdSoww78uzV52UWdzKyL8XZGJZTHB6GPpvAV1szpSC1aPUJ63WrLVSai3gcU2coNWTcModcyoizSDDD",
  "key25": "45YHdeQSdt5abAbkigYKq579gSYLX9RpvsyU7NYNTKfwMasXXqHyammHBDUAAPjDsBPj7hZM26wH5C9syBCKEew9",
  "key26": "3jLN4YSmo3DkeQvsmfhKSfw6AcurkfmycSWBT9Jdb1BWPbSUmStYjBzt6mhgBVYVAr3WGE1uFiHfpiWcWWLPLXVF",
  "key27": "2nok2q9hHudmNwJTd6cd7mQRfn8dUsVyS5vXwfksHkfRJEPZuKMNFfxCnmWKMpjd3UpeSmBkqKbn9My7USjsWvSk",
  "key28": "BRBntJiGsqKXMCG8wthq9yVRGyNz2mbGrpfGoK61ooHQSsprgqDt56QKCYJmdaQkmp2YfMhjJBQtv5qcuKz63Uz",
  "key29": "2rkeHbkFxv7TQHRkjEitFZ7c2Bos9xz97cwu7gWtsj3FkD6MaSyBdu6mvwVjqBQ47Ads9dFmqk3scKC7an3DHeEy",
  "key30": "2xaJ85keJRAygHpwXmmhFw4YzRwA23RbSC8fLhd8hcJRbxpYfTA5DZbJEeQkFTBpB6CRz2YzVKtgts9XLsxFXTAK",
  "key31": "gX39yRPpcUxkEHBpNjMhq6pGAgU2cStMPnvbhVPjhy7GmCbjcb8cAZzvjpKxZPmYgu7zfdJFDyALLJzfFwTBvwV",
  "key32": "4hMwt4oXNKZsoQ7WRJrqdZZSumZckUFrsscgPByLrqnKKDRVHfoQmWzLWB82dvG58D8MpTGhQAeamK9tk6yN2Wua",
  "key33": "3TQz5zVVJovvz3p8fMxEyhgxYMhvUAZ3qYC142S7EtQWqVy3EPFHe2JcYEuPQdWdY72uXWSaUeGRWmbab6SGfrnk",
  "key34": "5DzUEmxfdTRrAdZ7tkutPLGcdPQb15KJ8mokKiXhJLQMMcoquPGMFCQdTZqdSqNRABXVTqom6FybTR8huKNzaydk",
  "key35": "2W8wPK5TGU33qsjQwhak9LvyUY9QWV33AUvxE1uxg4EW7waXnM4hbYjKD6Dh862CSqRNSdwXequ6RJC2g3Q8GTag",
  "key36": "3A59yQLDK4rsAqwJpxoSDoAo88zzrmYjh2gJMPpUUAmg7rTbCa2WnWuGgMpB3nuotMxJoxwtPaMVRrHauSjEa7Xp",
  "key37": "51GmvwCSsuBNYLNCXMyS1YZebcRHnrdzUYesMvyRpAb2d3okL79igKrrJ5Q35JD9TziAwFnBNbwP7gpFGJDz9JQc",
  "key38": "3V39HxNRDr1g6fwUsXc1DUSYLV4CmBYqRTEm3MzZsTpnninQSsySq4B1Xb5LX4HCLyimp7Wy1uxKy5UxAuwgGZiS",
  "key39": "3bqdnAj1RJDFrj4HBjZ87GPwnEnX5v9BgRYeqrxqpb54C3froCd6aXsBUeXSKK1rACE65L8DmM4t18adcyBgL2Mp",
  "key40": "4cPDYcLuHrsWzPjg1v7mChuBfVNmG1KSEcgBEAXi3p6jgaAmsaLAGcHuKDm8urD1tCSJmESYfKm5inS5HzbEU2ip",
  "key41": "4Jq4N3DohNKWk6DTgg7jJQmPhgcn5KRNwtyCjwG5ad1Ga9v1ZYq5vsjfCP2VaVc3JDiQcFv6YLyUCkWdHbVokagg",
  "key42": "4wFsgccbejEwG2A3c8KiqAgFAqyJeQCRzzw3agC9C4TUqGYv5vYBNVpKw64CTGk3mM4gUE5eorP4dVM7qu82tatW",
  "key43": "5KoC2BJCQdtt3T9Fh5Vmspt2aqH2unRpJxHXhaiPLGG5J3iXtUDeswWJnHzgHHTyVSs7wMaU493fcVFZ2SW4bsdS",
  "key44": "2f4sP5oPTxtzBXrTzBRY3mKoAViwxp8ATDuJLPHr7rCaXCpny3nFVxPx6JkbPZJXGuxKX49iUcnStpXBbj68rHfm",
  "key45": "5nBB9NU7HyhdgGsYtwZfTMmfsQou6p62ceJ9iYEVz53LByS7pNCw9yHDTDs8mnY3BbDLmGJMC4oeC4Fq3dLDvhPZ",
  "key46": "2qqAP99oTDoR9HTDGJe5aVtLLa8a7tAoXHtSUq2sQqquqeU9isMTr3sMM8KRzuX6qViMT7HQYYeU5nD4dZRekX1N"
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
