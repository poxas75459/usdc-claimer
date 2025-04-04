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
    "4JH3Xze5RY4rQFnQQJj5VZF9V2Um39uDMhD1unDYY9ns5WE4XaFzne9Ft4wQmNRgH8NJfMMJu4ieiHBwkqWMpZtZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zTsf5C6KTLBdsMVw31kF7guM681ttUVo51oLbqWHXshUBwkwcLBqDSiQWw5gg6XdYtHctNyoB68gndwQQ8KSJG5",
  "key1": "5Cztop9kC4rfJESicy63Ay4KP4yp2eWU5gtH69ahqXVzesoahFAYi1C43LGMftn4VAdez337JL1UXWT8LqKjeGAx",
  "key2": "5gJwKoXe5zNcnHRv8oqzszA45gtCdB4HVFdpqxukBSG1jEUgzgdzMgGkMU6yqJaaB1EKJSF96Zg7XRS97M1UGF9",
  "key3": "28TWUEoKnfcq288QPHQTLFUg16Y2inKiHTCXrgj1owHaN7QUsKnqWU94y26UbwD7i5awhSk1z2XKSkonnDXP5wpg",
  "key4": "4B54ha88pBArKBnuZawYRm27WVRAGaf9Ht9adStxCvZ4mxfnC1DbfV5wmFMgwPFiGkJ1N5rkSa425h2mabMqUGRL",
  "key5": "3df5sayrQSVAh3MfWW7HizSi8TryXSC8nJtdQFkEyTR8dmSyiz3J8SVXA1ptx7233nkbDFv56rjfaBzZox2LXkFM",
  "key6": "5bpuSfey7eQErEEPL8wN3jk8dJ4gB9ck1Rq9diyk4r3Rt4LcjcCXS4qyd8yYXkdLtRJrGWmc33oFRatTctk9tLvK",
  "key7": "2DJniZ7xkV69pFaYGaSqJq882AbbLmdV4d3hUorkQCVGSMyRgvXQbaB9ncmyBQ5JMEeVCxHAu5d8p46ZCkfHXP4S",
  "key8": "5LWoRAuwi2cANFfUg76jYFgTBpZGJ2VDchVG2Ez71BD7JnTwZRYtyDUYZW5EzQnqugP6ztk5ErfJyJytPsJD3BNs",
  "key9": "2UhGH8PwGuSfePrkh1MarHtoo83ccifsaAhUE2toi3bpLPkPg2GKb23SvrsqdDk7cmfNbKGAhtJG47t7YoeMoYnF",
  "key10": "rCF9Gge9aZRvWuDFjEzgNRvrqLfrn8CC63YZpRTMKhwZvXmpP3WAPQPcXrLfL2choMhiht9YYVW6xcsiW9gS6wd",
  "key11": "2sQVoVC8YGoDzw6AuE9YWobYScUzJLfes1f7UWMyg7QcLXyYFJLr2rYSmADtetjYoXWxbwXL9JmmzPABx5RtaiKB",
  "key12": "2jZL4drL9KgmE4HYruir8LYzYoTiWMyByCdjgVitkXgCcFux1fnGtaFLc3cL2pxFBc6r7V6ZKcN73KfY5A33Brid",
  "key13": "3K9t9u1UmxvHjYoCZXdAYvcoCXySH49HGs6h5C3jVuUb71eAXAoDNh66eYYuUVY1eCGZxbBLJ1vVpZQPgpjE4FEu",
  "key14": "3463sPDVNLPnU17WaXA1uTorceoL8J8rvyHfkutHrRGJPzVNjocoN1cy3ukwZKX5uyZjB6JN88nM8wZwhoHeG1Up",
  "key15": "1fT2EVDy3Tvf6HJAta2fQa1CLxYCv8tohJnrngubRMB55HXc75KafpX9zBD9NJKfCJ79ccLwbzb6eCVZWBmyrqv",
  "key16": "5bByno14FYbrGpjwgviji3daQ1QZjrVXtZY9iWqqgacrQ6RnC5CtGkpcvyxHN4gZ5xqkDF2K7hzaQCyqZito8sRr",
  "key17": "4H99Kcnbt9Vup8FdJ8fMFdSP4B4GxdrSbUxJkgQgm79nwU6PUEdRdRjKmcv58x1c2kWQXsqrnHof9JrscET5YzT5",
  "key18": "zU1ZR4b6PuHHFc1PusnW8ZVm2YDLPW9rya51G5zAo9otBrb3jgZQxedxfqE5rGi2Pz8augpbsZa3AhaQiDyeX7j",
  "key19": "31KNNSZJvy5JFRwhujNMtvPZ5LHFfAXnxQCHH87TzAGiWBuc1axD9BEmyh8zsSqCKbcGD4d8Lya5peyiPSBy79zR",
  "key20": "3o7tjpD1q62z1Pf4NYxD1vmW4afTRj9QULcGgk6LS7uhqwfFUk3U9UBGCUPHjHFRdrHP8uzeLxsx31KGgJYAj4oa",
  "key21": "3uAsAf8iXQuMED89DBEYGZEKLVNqFyQhx87mLfaLoVsTaTPpZPmvFwyRMNWJkua4c9TEuLWh736Hd54SgZjBntTv",
  "key22": "2W8uDQrnHU1Dth9xJ36pzk2tQ8VzJwzqDWA6NRZD3raRBKUEviKF2sh8BZL3YSHXYvrD7iAuyssxKG1xXKN4avtp",
  "key23": "3DPbdcqA8rkDGJUMEcfBbi7WHmNLpLPGhgyGoeTWTWtJA9icqqM4V3v1A1TqGe9FuWrD6UNEipVYHRMeXvdgLQ6S",
  "key24": "8sKPFpLNtBmpi9JZfJTNK5PDHM7xQWRFr6L1VYeFfyduYRinvvx8fr4kkxoHhh23f9mtL32DL15b4eJXnLvaJmM",
  "key25": "3xWbYLAukNGCiFUmj6CV5DskqcCzahSHsAApWut2byT3p4FmuvgqUwh9UdscsjTiydRzJ56bCJZb2eEMMhEKE6Uu",
  "key26": "46LmZUGXtgm8uZSizMH14xf6h4VjKmDuiNxXbJj1LoHZvd42mP1aDsMTojgv6DvHMWBCA3qD8iQ5rhmDcNBTaw91",
  "key27": "5WPcJPK7drhSS5ru1Hwoscc5PRfGgQEgYbC1HmN5iCx3KQrY8xvmYidokr6rv7BQFmutrWdmyF3cxhirZgrKYp9U",
  "key28": "ifgw1JPtpgMQL2dmz5pQqJdvw8xmjSNgFFNgpWHhn7tbxE3pYWVfg12NirrvbzuurspbDneG2sz5uJQqWUuqPFM",
  "key29": "3nbJp97qC1g61EwuEsdjUd1uD8CRBYBfVyEUTdgtD5uNtcv2autwrp8dG4gbCirvTMgSqNxJGqmXguUetaupsJsE",
  "key30": "2UptfL6j88RKKrYG6F218XgHs4QgpFWrthYLJuyENTHUoNfSvYhr27y8qxUP5pxMCv9Bx1MPLbwyvn96TQN6iyGn",
  "key31": "RCzyUVGHn7QyAhgcM5CPXaycwRStwfc7f3F2NeGpFd5e9iHd8N8wFCtsMbwck9YdzzeJ2tqA6EmBzAxYobsiNma",
  "key32": "5TgH7i9LN5JhEgY5596HqrDVH7Uf5CWJpCYU7gxdCbSGQMtgKgoNMuQ5Rdj689yMzAUnoMsnVvZVPTzUwXpoqNgv",
  "key33": "N8opf15DhHF9m5CuRWREH7RYykzhE5VqUAnPARWzPFi9GvT89v8Dg7fdJFH6p52spFCLaRXnrZ81eQZFtLbKSay",
  "key34": "4hjjZgUFk2FEerHJC8ooQYbpsKtiSZxyfzy7PMsAys9NjAkH7DwAZykwZ1nEX3NFCexQ1LV67Uwq1sbdE69QeCif",
  "key35": "WapwKqcGVg5bdF7GGHaeongU8RBXCZbrwTu5mxwrdsDzzQsrcrctxj6gUub8adoccRYT1zzn6BjyxgtoQ9hXpGr",
  "key36": "4HRLk6cbMpHFo7HDRYYKpjje2p6JNyUpVxoTfSobDfrMUhPifah6eWwdbSH7AmK2KzwKH6x4ydcYDMoS1GXYuk7Z",
  "key37": "65La5dsCQreZGURLEzpwYQ9fJeVzJBG8ya2xyaNroMbZ4XHmtb2R6G9GerCwLLiHw7iXaS9hpCrkHxeY37WKrFde",
  "key38": "4cZhidnQsnfrNf3JqjHjTKYGS8JFrSDvhzpkj9NLsSbe4U6HG9dEQg1PpGatvKVET9NRzYuxp6RZJHX26e5jempd",
  "key39": "djCWhWdXgZmJvF3DtZheGM6TqnthhiFPuHouPCQzTMKGfb7y4zVAaXB5HeCrRXcXumLrC76gmn1pQciT7FCB6HW"
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
