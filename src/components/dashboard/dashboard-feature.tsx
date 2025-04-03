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
    "UFDohDprBeyME47z9L57i77VXJQAuBqiTvkVTu5iRiLmFfHgEabvzZdUHmbCmZmhPRQohXJo3gVbRtcX2fLAgFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YAcYovSMYSVQqEf93CRT4hP8qfsF7qS31sJzUVMd6UWXaJDJeVWPoXjHwmtsjCqVhAG2dPE1aGbZBUQ3zepQwU3",
  "key1": "3mSehFdg25zxhCmPpmpcXaLhcztbJXrA3aDHRKn77qzLmgSToRJYvyFH3P5aQ6Lh1BJb9GBG7qsx3xxstcBcxfgX",
  "key2": "poF4P6ZAmeGPtrgQkEFePcHMA6FruNFFMxA258W2btpV6KWvFVmxsg4GmmqhQ7YibqTCrPrh2tJS7sANqkeVLdr",
  "key3": "KPzqv6A9Qt66bk3NKdP3a4gaDFSBLzD8v3Zxgn1ZgKbpYqqHc7Vwu3N7dKv5qftmaZwo27tnntR7f7prQZMkiqa",
  "key4": "5rVSF4r8d2aUpdw6ggWHxWUg5vJwpJWichqe1BmBDPVdMn1svEv99sEZNZUp7gSZPqJ4WFhrB8gVFa2EFHQfY5nN",
  "key5": "Nm4DJNcM7ckiDyAhE2QF8jasT59YkRkByAbWHC1jARFrNjEPWvVskRxTxWJbJtPkutpAzkrbKfKLUbTeYC5AyuE",
  "key6": "3hY1R5UZ1smseKXJecH1Ny9E9XL3HzaqzBAQrvz4mQA6bLVaxVwPLUGbKuyaXEFTkeKmxy1xfzyKwodQCoc5Gxpw",
  "key7": "3sx6V6DKcXWKSSg6LtD4Y7G2zesJy73ZTeQ5C2N8JZya4deCPd2DG2heZgzHsLEjpQpxA2rNLzPWkjEBx2GvQzmm",
  "key8": "4AoJgW7YDFx5HeFFQQnPGtooesTDi3SkXSHNfrHz9QLA4fDxh4NEah5vmBJ2VAS39sHUA8cscCexzzkJxUFuXz8o",
  "key9": "2XpQkk7Ek5s3bWSEuNHZshYq7ViUpCoKdAzDW5bHAjtP7Pn8pf1y2AnaBieF5dXgzieUE6NeBwNpM6yS5C41akmD",
  "key10": "4TaE6nkGouQASZ8c6WYPc5xjMoGYLfyj9j4y8tE7FzL5rtmKruosA8nvzW2H9sng29RTdeo7yZeGpn5FTZ2bHUq8",
  "key11": "7XaS5yeRQKj7dYvKwgB3xqjBaftbatrEHqJjcAaaFmfGHVbBWS5vjAMkKcYX7b1Ebc1G12gt7U8MJF2uyFRVRop",
  "key12": "123xkoZNoJXzBmVauAEWXJMiVi9MDNqKn76jt4fb9zy27XM5TCG8GMRbgpiVQ4FSrfS1XTcVnXjrmLN4sWgBUNCF",
  "key13": "1pYL5EaSRYpeegBvNd3UWD4gsgrQUHPFjVHQpiZT1F4W4VotE8iMVZhkcRupsgrNqBzK16RjcTockZZXRDRbrVm",
  "key14": "27znQu4m6PCunSfcisyZqGXbHUhVzGiBTNgPAogvHLzds8Tpg8rQX4FsxAyDVJiT5X9zDSmiXZX9E7AgKVmdTbiZ",
  "key15": "4fQy5Vo8m9aGHuz4gSRHLncNcH65LBbLLJVC3HmL38PK8JixvpEJKMfaHnNyFYpzJiw6mVsgwc5kxoQJ9TLMktUL",
  "key16": "EqzL1hQxEiEaLs19r3dPu1zid7gHn4H32S4VoL6LsfAZjSK9jfUwYviwxvfUAmTBV6xm2fpwDjhc5FQSFiSn7UH",
  "key17": "TmfSvnC4xTkygp6CdnAoGho5hUqXSG1cBnFtfmPFfPqaodRjnqHm3hnVLfymggZdg1cjvP14wQuZLHMYeYcsKTF",
  "key18": "2tug1bMF9NoiD79wncqMppbjjuRzegCcK3iGwGU5rVadN2BjghHh1T9sZuhCr7Baq5CGgwrwMnEbEoJLLVA5Vh6z",
  "key19": "3nYZbWhfTCzKXampdtsEwaZFv5Epc1FDpYFQ7HA9QKuNcYXGDsbbS49edPaNUg64xFzTAaMqKGkp2c5SgU57WqCC",
  "key20": "2buV52UQw8ThQVoiLKULBuiHQryGpmFmTyNDXHSqCvRL4uAL2W7zqjvvht75mv8HWyL7QcQkB6JXBRVDyYdeJzEQ",
  "key21": "5F4kW73j53rw8EjxxVpHmXEvLVFo8eErx1Sxa1FraBYa9d3kdggYQsFGFr4aGtGxd7kAAk3SLjkHC9AXDTBruEHn",
  "key22": "3yPyQheRhk1RFSn7fBHGAsvnsF9dg2zAndQEYefVHqtNDA1VSeXMdZtv4XAnMpPipBnswRAr6UTgdAjEBciKnSEe",
  "key23": "4uWHhU5M9SNKAG7FnCHJsDNLhjTiqTsx6Sj8hXkxc6HCEKG3tVZMSVpmYvdsy4SDtf24ahUVzjkVuGRJxZ8zNWx9",
  "key24": "qbG7TnMHeaVvvwfvU4XS3pqQnmgCarQCRsCXrkqytw7tqM16qCntMhZdUvWALcnixtQfMoLxT9DYVTcnbN1SN4G",
  "key25": "2smUwdP5KGxVoAoSDy66HbGHcdQeCeH97S2SwKk3F26k7JLoTtfeLWKZvaegGTQR27ewFooq7xYmh4YcgiXZy5Ui",
  "key26": "5Z7upQkn4EWDQ1UBkmPQj92A8uHAVw7TEMYGdy35vD6NrMHCE3nA5H8hsxS1xoc5E9Z6SkYyZWKxZPMNnV5PFJD1",
  "key27": "D53nSpQK5RwVcb9QmDkWpwEuG824JKSu1bA88qmzh1N1MxWD5neydYEs7HFQrAPvdQnaMLMSW88fzyxxRTouctD",
  "key28": "PWZjVVJcoQ9Tt59jCJXZEW5ZdLQFaGFNUgQrkuUFB91R5wBr3P3S2urGKn44faaUfgBLWhQRV8xwKcrSqbgpDEY",
  "key29": "2Po8EhdsdjaFQziYMbt4gbzqYFFEqBFK4CiwQ7WUQbAcLKH8U1Yh6AW5UwqU2s5P3apBMEpCBZiVtnb9D9RMttde",
  "key30": "3kpVzcxAgvTSVhDouHfNPLvNy26bJaet8DAX3CQ6sbJuYSDc7LBq1B3wSY1ky7KkSZfUJEZPG5uiXgQXcQdSXAcR",
  "key31": "3p6XzHybcnYAdtQkXUqVJ9cfGwMyeNXZu5sEiWAPZVUkbGVnMnt57pzz3SzQvj2KEbYMmdzqiukugAMwv2XrrpP1",
  "key32": "27XvHcvHFL6soNv26N9q6phD1CKvLbRigKj5XQMV8Xy5oDp7GGHj2PC6G6Mdi5tndyva7pNjcjGsyGbVrjPsvGht",
  "key33": "52kSsCAiPDLGkASNVYHWN77PqXpHbaewb91hiFqGqaNbGTWeKbM9nbKGFZYUxfcx2Zo4L8vUwXcDKNDzwf3hiYS8",
  "key34": "rgy4kUAtyoUK3KXeGTHTgpSvYNANXoRcerQyGmszZd4gssJFwa4n836XpqX9wNKTJd4HvKZ2oXTHrUxnhHE8PVK",
  "key35": "4AZU8v3XkJKpSbM3nernQwUrv9L5HyyHRp1P1bNbkBDcbQH22TgtwB4MWAKS1tMrYWCqmfJuphEp2QMwK1A5pNsf",
  "key36": "3XtqE8SA73KPL2kNuq35cx3iTHgJFKPnv5uTF8zL53x4ekLYDfaQ649Xtbk2fRHLECtY1xBtQFHQLDK4ozq9SHvz",
  "key37": "4pNAdh6o9SEa5NMKxMqywnTrMsg2s14ohsw12cE6mtUerXQ7aWeCWhD75i1CenazNYwoZbmyvsDzXWLeQaqzNhoT",
  "key38": "3wqcf4zA3B8v9pz6mtewC2AKmXJe6PPuK6z6WgVuj1JzryyVxzsahTF3tBEH4BQQRzMbH2WU77UTUacMK1cAibSx",
  "key39": "4tHwjW4C1XzaVM5xdGtwjxdpRjoo6L9VpSpEb1fib3AbqKLpd1CGpqGY7Vp6XctwpMqgdL5VW2z3asYfLReruoaZ",
  "key40": "2s2vpbmGdC7HyFmYJiytRg5tqBQmfCZCc9VVdDtaf2GChbKqFhcWbNfTtMQfCuiHCSutkt2jvcy9SgY2HVwa29rJ",
  "key41": "2L8uc5A86Qhj6N6F46Gx5ax1DcNkDCSBPNKJWtv5t4GaxS2dYZPTmdLcuE6CSgf2v429PYnCqmo86tcv79MLa1Lv",
  "key42": "4DkWzWtMwmCmV8LWN4CVkMjrSsfo8eLhRhrwdWW42zeKLdjFMuSMannA87N2JigTZjLkzwfD7iAEwYa8rtK6Tx1q",
  "key43": "4ahVAfLRPaJbTzLtSXh6m1eyrWiBjXUnjgFhjDkjRdwMGn46MYqPHASen8EZz5jvo3edpoKJxpe3r3P7yQQAJXAT",
  "key44": "um6A58cDYf8ezVJVT7iFVbwGGsYwxZ2SvMSi1Gx7KXoYMFUrfaq4M6J8jfLcwBBKJnisdaCvPqthaoK6jvyXvfW",
  "key45": "4oYxK4XRsg8vRbydo2XWJYt7rNarKSg4Tgr8fzXsQnaSWrJjAziNw9ExTmHNktKMX5Dg9DJz4LcgbqS8pWoaRpgY",
  "key46": "4Y6rYhFVk52dL4S8ro5St27v4NgNMNYLU6rUou82DA8XHyf4SN9rTDzEc11TCxJ8pBSFoLzTxSrVULovPyVkyuSB",
  "key47": "3GKQJkYzArMrpQRjG8VkaJdhUtxXWDy7pVfr9nhiKeKB1ucpdTzArWUQhB82UPtPVxK8J2Tp6h69PpULUNrgQD5",
  "key48": "3HFoytfhny42RCdKpqhGWASwcYFZr5xoZA6ev9Uv2DB3r4x6tx9XxW5YojgnzKd26e4gvtawrtapmZF3BEu2BaxF",
  "key49": "hahuwjTjNRsUUH2jsgr6qfVeTJy3k1JnvP1AeLvdm15AzrvGeoa7nig2XrF8BCFZptsRCokzobEdyeqR4tFkNMv"
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
