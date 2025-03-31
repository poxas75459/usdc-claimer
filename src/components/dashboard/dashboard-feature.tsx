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
    "3qbyBGmVUc9WXvL8rQGfYa4tNby6W7iGD3nPpxKpd3x288SiqFyxB73QaYw8Qn12TwGteZ1L1QLoruXFgdm1Fgj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ft74zi5naVWvL1UARxj6frZVpkci9dgGdUmqL684daVusqzUtYL5gHt6VPSCwRqigEA9gvg7ZbeEQPUsEq9j2uT",
  "key1": "5pydwKXMWNi2aDw9rbKGcAZCS4tfpaSHkzmg4f8nAXNgFFbKHT51hmmZ1wT3nRkRpTP2iemPBKAMovCVF4mp8Wih",
  "key2": "4xRUFcewddfn7euare7KLHr9LZNCJcCyL7LTQMqgiPThTdDhD8KahMxj4TohXAZAwnpxNH19o6bk6YizPq2WnSGp",
  "key3": "5kkiVPtrpFPd82aNP5kPr3sS3ey4sqL4AUJXZrsxfv93NppaKwy6DkhbV8XxBEPrk5162odKoEpN3Qq4RDzyCrnN",
  "key4": "26QUgmN23NUMC7q1aiDJQFeRZBNGCD692kzkDekU4THLFcfrvEQNhgVQLugvh6f4nLQkbD4AtMBGbto9rcHRY8Vm",
  "key5": "63J12Hied6tgogqc9WC3yvrpg6CyLUxYcstNLwTMhkNbaCvhrwuf8fhhKods5guFdshywfcSP8XRuy3YJxoAop31",
  "key6": "2baBg8BxDhdZBBYq9B3JLh6r5Xmz3GpunSCRB8KnjST8WW3ypXy82Au56XujWeSXKzQHnoSkaYB8M7wrGs3RByM6",
  "key7": "fpfhUJppYEvsGGQ1W9XJAsurAEmbbHQCpsvd2oPMwHatMjxcNmZJ8Q5KBgFycth4UQ9aR9iNxp3rNZSfYz3wtAx",
  "key8": "2FRR8on52AefR9BrjG31U3Pv6HYDp6ea9VqMvie6zwb7GWN5QkMKR6jHwLDrcjRvev4gsZ66tTrSyDramqfDYHLa",
  "key9": "3ps5r3ZxzB5XVHXuT7aTNQwC1wg1g5GYtrvt1XtPpbkrmFaVJwHVwUeScxHBuQBMXEEFotYQcLogCXQ8VCo6pXmg",
  "key10": "3RytTrHZaz4ECztw18Qm72cms5EhiFCmTUGQK5NeY1MYLo7fBhjM3bzwA8JUQHcu4BXNVPuUzCxmeShamWHkozY8",
  "key11": "45rPsqUHH3gRxiS4412vbf5FvnoQQj8A1fftHFyS6So4fDp3eqeWTzUy9it8hPLJEDm8BSaSDDvPuLiLKB9RscY7",
  "key12": "3dRYKfEC6pTkoQ5Lr2EJ7iA3RiLWAdErxBSekM5SXPDgM7N8AFgj5tTbzK7woFEdur6UYeyLE2jzMXokh7twoJ8g",
  "key13": "5eobZS21MjTrqfbCGSzXfuQsgYyzhZtj1xfKwG4Tp3o3NEyDDEdTV5YRZZUFUBJE4XF6R5J7y8LWQCA2Gcf7MY1v",
  "key14": "4L6nPsb5Ho7sPJmbcAubPoAzRMdrE5FMBfbetHau8MzTfPSgLekKFA6GZeXySq9EdV5zKrY8zLzBFLjW8oi8Sz4f",
  "key15": "3qfbKpYMe4Jk1YJrWbfVp7Ze8vthLL7rUk1Qe19SDpiKcTUWFnLaEf25NTFMnBKFRQf5HCeQrB59w9yWxqJwnQXn",
  "key16": "dvCLnKDDEhiaEPCKQScqChJugnn9YmcF5ZPR2aHQYNNzBvJNbSFJqVjv59GsSpLixEeRFVWnJBLUg6tsMTSzYj8",
  "key17": "5SdFwyypZAf3bf9YV16YE66rBVRN7fVTonCvnF83H4kNgZq5xHAK6YKhTC9Gj3UpGrw1a6VyeCsmGuHyaRL44nj9",
  "key18": "5UifiziFuWabWYcgtgRskq5uVjLJcFcfA3bqNiJtGFxaBkZoSYxCFsXMCw8y1QRJERTkAvkrPn73PCLzbbu8K64C",
  "key19": "3xZxwW5Xwg1bxUmXX22VjnXjnkdeXV8YriVFYTcHuiYsJhB5tnghsQddncZvJxzRYj6SGoDSQ4ukNT8F7d7JQxEM",
  "key20": "3y4sYBuAqbsTLAxwxt6Lkm7sPcnczJf7F5GghoTY6td6FCkpWdhcWf2ZvvFhkxqDcoWFKHpZQxqNK4MBNJ3gmKxN",
  "key21": "3tbaMqrFQ35yUTXaQjbJxRZecWXrhaQULoWEjyvde6jxc35Ls5QNUTDBv9vknabaznPyqJGotVSNBe3DEqWS7h8b",
  "key22": "3ZUdmCmMEQRP69XdNfqF2RTPaKEfstivzSE6EemYUkSAiCbzvTUiTp35gna1U8CUfUarG6W9NJJVPAKCYHQc4aMN",
  "key23": "38VrnE9ZhSNPoTFcxqnab4R1zfXX8mN2GwQC8i36EmK8bQbxqEKcjwJWvxukAeKevYrDVEP52vXoLU1kH8tW9g6H",
  "key24": "4CJXAr1JJT3DYPojPdsYoLX4oYMikDAid7d5c7GFJsBaKZEVW5zAHy3yyTusiiYYnPEd5DNTthUhdFXyEaDxBMKg",
  "key25": "3Y8acRoSar8K7zYTcwLHtamx5jiuYrmCVsouCbHg75VEP2LktkeTjeS29aayN2fFYkJiQCuSk3SCmqFk5dEvKLo1",
  "key26": "5yphZnD58WM76e9zVu2jDzeRn7d2HeYiNiND7rVHVf1yFYpQLFQJA6tj6H3nerkGU1ggPVxAkgsr6zUgMiQL2K8x",
  "key27": "5sXsSwX9EEK1tifCE2E1X9CTFurbqqnCuouy2RzzKbveXgYN7eQrjoTkMGRNArbPBQdhS4PbPMtNhjRtaPzcYGoe",
  "key28": "4But8jRKMaj7vdPwaN6rhhvnFYcish1E6z33Xcb5ftwdwDYMxZ4UReNiTph2UzoAL8F1iVrRtEPgX9jd4g8jcE7c",
  "key29": "4Gfu6PcPSyP3AmSU1DF9MtJq93EF81FSMxxZQsRweHRXxeSSm7KYTiySApZHM3bo9S5x58dtUQ1SnWEgdLTsAoAr",
  "key30": "3Kagm8XdfDFUahuH6EApEvM2y8XH7jyXG6jESicrsaaesz5TfBNCT7rApxMV7pp16vmy7JBqMMJiqjcgNj5Fn9Tm",
  "key31": "4CsJxWALsmpT6xLr1eFgku9duC3CWkwctp3YGogPrPoiRkUBkaULsa7pC3q5XbzHCVNaobF4fu4BVH9Gsbdks97k",
  "key32": "5pvxKT46mdy2oJRf6AHfngU1u2cnGTk2MKRBZZJjCwexUHKBFa53DH6PsJE4BRxL82vEYoz7gWtJCWJ3HNBKCMk7",
  "key33": "L9kfK1PwxmC2CCi3xQeg1JX51fGoZQZd3ptogSD2aG7sFNsv1LVf6DbgY6dEa86cA5Lw7cjcduTvrZkCypkP1SP",
  "key34": "3Q18vP942ioMTTq646n3ebxVTSrrAqVQgEWxyHUtftHcQ45KZquyiWeiLqoDvZe232ZJRuLCEvLTe9VFFiyiTHEM",
  "key35": "51hF9DtZG8TiQA587U8qyYSk4MGd77HkYncnqCkYbrL6TBKgKhrQTXTU2xCxfwLSMuWSFjgr2NryxgFyhDrQFBEC",
  "key36": "5JF9tVAHhv4n8H4n5AcrnB9CCP8C96ac2ufeQAvz6NXT3fxxJD7ZTbJxxCRnF9pXa2FzNDCbZrumqVoZD51p4woC",
  "key37": "3prkDhB8HiwGukTTwQXuYB5c4hCzb2gA3wuYabr1wjnMBTCLbNNM1D1P767ejhmhQq1So1KQbw4Rix4TFLhGjhtv",
  "key38": "3sRvh93qTbgmpJoj7efpaJLHttFU2RHjTyUDbpYc2vP1FqNw4K2EaNUb6gz6gjYFUMBuQcaeY8UFrAYfXhJ5g9e8",
  "key39": "ia1cmw5xhzQGfdvHtJGPSYGtYybLjsWqD5crfNCre6hj1m3j7XrPZs7rodL1qq3aVSnwBXrv7QF1Fb56rX8oMvb"
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
