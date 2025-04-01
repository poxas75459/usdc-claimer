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
    "2XV29g6dTeSxR2Ru2ChKzpsXtNexG77fKtv7x3DT81F86hE1oHrxercpLasCeeSRBgzfotEFUGicaR49b8grpYc9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cs9XLcgyTb7Gj1FbWYv8yGaSPX2oVJrreAsXyJck8QGJP9Ab29vPiifK2TLauP4hxhUDjQqagtzTDN78g1nzwRs",
  "key1": "2WHoSz2ujhYsX1BFkZLU96mawBRrGHwBTCmNEATdimrjTwpwPaw4sxNbaakQnWTuUUwsLBK1dnJjdPf7KobY6Zxi",
  "key2": "5Hzn6WUfdjyBxVyWcXoSQEqW1EvKsqkGR9VR7pnqcB4xwuNiKRMhqXuo2MbLCDDHpakZrVzNTciQZ4kU83UTebUx",
  "key3": "5TYtHv8opLKuXWZKFDiLLcYjxR2YyvyRAw9FeVKcyCyU6nUbYgnxyXgiStKPv81KCDab4D1trrMEbN8CZJRURVm9",
  "key4": "5yUjGuHFn26oXnvdM7BAFT9rGC9z54GaFk81WsU1NTxcBUpYcs1xwHKUdVdbYsju6Z72fAxx1mUmMK2TL7n8e6QV",
  "key5": "4TziXoF5hXCZdJRcFWkRaJL8c7uxJEtDTjxeGKYcr1abg17UvWY1ES2ZxapqmbFx7wmNr5arzUsdKM6dznJZGZp8",
  "key6": "opBeeSCDF3EjZiMSmX3XbjYAV3Mo4q6mXND5kMJXruajL7hyeSHcWwGY6hprwQanVJY9qQ5N59HmPKoMEaJxEpK",
  "key7": "2UaXAKgMeFh4xU1CyK8mReKuaMc2c6c1CPp8Ev7fSn9ocwYCpMuFXzTCGjzca53VccdEyznZRMiFykGn9s2V3RQP",
  "key8": "4eBFHmUGtgHPQZNz9sr5Fq8KKjaTGJnUcs8NvCfMG57oM82mX3acVNZD5pq3QaasiSjsXZJKWCVygqg42oEzxoXB",
  "key9": "3dMFzo5ZcYqcVarBJopiDWoPwYmzwe8B2piLAK9z7jqi8Mv7EMXbcWCmXshcDE7jBGqKFyBv3j2eeTxfKUtNxv8t",
  "key10": "612133scBXQrSaL5tbQ6BjRXs5QZiJLiV3eyTzBMj7tA97xhp9DUNSV2e4ziXdPjzMeP6dD4GdQ5kJc6dPmc6R5E",
  "key11": "2tNf3Mo43S8n9sD2q6BiSys3mfTmuwDn7CXicWSSrEvwhTmzhag6NzLy6mQkHkhtGYBP5AYDXB9TLK5TTeLD9CLu",
  "key12": "R2L7gDbnZgynnUeLnvZVEiTKEF97Vkvxo8zwghMcXwNUDgwRzyic1jiNtjSwaf3mvKbZ3wDVSMeW7b2C1P4ekko",
  "key13": "66xybg9jTorr9EBAmiWgZxyb2NE2mPzzFip7MB2afPEA1oo6ZnXS6KvC53a9EkNHGib3b6qVJZ1guwCxsf1MQUHt",
  "key14": "38f52Re3cyTiuJxyTYPkP4pzPKK7hkxRf7WYdFYGihCfoAr9rNSt4CsNcZG16qUcP5zTBmi6BSZi5hhSAB1K2YiM",
  "key15": "2b3su97D1XthN9sRWtMk1tbHXkMQc8j3cd4BiySEwwdZYizm7wgmcWKww9QVoVzU7Rmi7GFaUBeNyK4Vz6R13NGH",
  "key16": "3MC9Qd2FKLrEmnc4gGXigcVG5znamjCxRhAMN1djpEKyha2FeDGPVNGZU5GvDanZtzYDxFwMf84zExu8b6ipGttW",
  "key17": "3ccJK7Rt4ciFrx3eXPgYs5SpMyigd65TKFEvPCMxJP5BoL59qwBXAw8YGndVq1ci8Y91QiptUpkD49MFQ5RCxRuH",
  "key18": "dgBvmmpvWpUrz9kX7vNPzCxEDAYhknmwWS3PvaY63YrRNY6UxpjvszUM3ppR5nxxzEkUYw2SUhkpueGh1KzonHx",
  "key19": "3Bnogo9SJGA5tLgktShLE1QYyoYm5YjQqau4wZM2GuXjHikCCWRTPMGtgG4QJ91znRRFpZJgzHmA2eGG3CFA8Qb3",
  "key20": "2MTrupMoWdx4hajhh1ff6EECWsV6t9PoTqKTQy3WXTva1oFgPDrCvFdEcZhMqRXEaha1g8toYTzeVWkZYCE9AgD7",
  "key21": "3npY3Tk5YTHbGuBpHyBMufztAem8r7DrcXzAfqPyoVY3wXUy5zPgeUUF19dxnph4ayeMsipKfBn7njpmfxaV1LpE",
  "key22": "5Wg3b3ABjZHgaqieyv4zX8QQApSDWoK6ZGxwdMCweT9PVa19GLx2xJ2FuPSViTCcUysh7PsfUf7h1t1VFQYmSPcq",
  "key23": "5LkY52ZkhacnKMQjpDzgmAduYUAsyjMQpZdGU1CULrfUvxr8i1wB5JfrBkiPLoScHA6GZrj4hmEm16S2a9itwFkS",
  "key24": "45kHpEDdJ5fPkt9AU1VhnyWPH6tcxyR5YnmPbUHNrQ8kT1Pjgx8djar3gT5Eu2ji6C7k9sthLnhNVY9doXhA4rcw",
  "key25": "4F71RqKQV5iCU81aqJdcJmFJTXWaxL2kt9J86nSVdVoRzzmRhGfn5wwsgwEEzBMWJPgHifPa7vbkcL2KS6A35Jjf",
  "key26": "KcbserC9iKV67kNh73F7EgjLHhsNDhxjU6ZZonXHcPF8nbTGZuWpShjKktrpCUqxZAUqsJtCa3DcGYguQZAmghc",
  "key27": "2agFb8hMsSnt99gH9SpPFBhPnMF2KX9tAdFVAYEFFzpoBJDPazxJCywypLyLhnv2yn3Q8axHSLKnbrtZVpa79oUK",
  "key28": "okViX5Pt3hcnNDJpMHm9wCPeSbZSNQvVoiVFTHoU5bMc2XdUGqRSnGSV9EVUEbz6hcizbTWDr7j6MrNQSKLvbh1",
  "key29": "3eo319f1VQM2t9WAWyRqjNLhMkWRRRPaGqbk8PscqPVAqC9x9Yq69bsj2vzWd1K4MezBX6Wjcb4FE2w1pV2cjzU9",
  "key30": "t7HNr24h9s5uWg1B33yTKdhTkZWgeAuUwx6EzmaiinerFSL9dwYSPK7m2qmANTEqCWavVebqL5CXeqaNjatvDXS",
  "key31": "5KWcwNjfbGGBQFG7prt6gvG2qVQVqvQhnbNzp1ZSmanMdrZH9dVwrB1TgsyQU3ZK7Y41tgZCGHJgDh9CVLv3EX4d",
  "key32": "3YxJzMCcR7zWVvoKq2A42VDZMGKmoykVBi3L5nXG1kG6RdNctYu3er8Rkmf1dEeos4b7vvbhWmqYVo6CZPoAvyfH",
  "key33": "67km2kpwV2Dr3RogM8z2eRrP9Xvksb5u5VRLzbXFgdort7qJjCz2uXLXjuo799UKPEd7xhhYQUbCxoX8Ksk9mfhD",
  "key34": "4cXketgMk7hQVY6ySSC6nn9QJ6P4RVSTZwvQE4a3wveKs6qwxcnX12NNiCEcmjffUUPYi25Md9Sdtc4mSNQAqYda",
  "key35": "2oqNVpqpvyTp3zz45trpgk5kZ2ZbApJnm4KWdS3Ns3DSVef8AhFVzdfn7ghPRcpCNUmsGMq7cDKv47B85oqNnaYf",
  "key36": "3dRkxXsmNKiTCF1DA1D9iCi1LrAZP5hRFJpcuzhKe3ffnemEEE82pt6zeGRimXjAVsmDYv2eZZAtkGYZ2FuGTamS",
  "key37": "67fUA3EhQVTeHXKJxwEsf2TjCtp3LbVWKdFYrNQnjpaWdBcpAQrmVW7Pek2mmj8j6RWrJYUuBZBijnKuHA3AeYtR",
  "key38": "3iHUT9PpvoePwE9mG1NEQugsVcmaqR7ULtaVYLM9kihemoQqWCerGzJp1KyjKTqoAQHG8ZtLML1e7vX9TWXghXNT",
  "key39": "SbCkWcUq5of9eDMUcGcwK3aHUGZWqCs7LKo9yoH6Xj4AXcs4esZSpL15zXe5L1shQU3MzN9CKnxhXHiLYoDZmC2",
  "key40": "4itQFLUVAY4hqXTHRxfmTBMPz5ckn3Ymujw3GxrC5nSTv9cFBxCi8RAeoKieARzrtbnGhyM899FkhB2zzPp1nqAm",
  "key41": "4LkJ7vfyg9Pv33BJJy5BxZrszsD7fZrcfb7hoK4aitW1P19VuSg8LChzuH3yPzgHGrMTuKaE76KtNkSnT3kG4ET9",
  "key42": "3VtFAwbjRcoaNktkm3TVzNFzzRNH3Warx89jqVoDAWgbk7NcBWGBaQ7961AJcUMEqC8Emuh5ybwW3astWs1c6Cn8",
  "key43": "2ShQQuBvsUfcGguVKZo9trLPPA2zFvZPrqoBSfRiNueSRtD7Lrnu3awZ5SYFvTTfh7Bpe1Dto1PaX1GfAjNT4i3d",
  "key44": "5ag4WiyV29Jb3FAAEso115kUkPoVTxt8Vs8XqxLro6XQdhwV9JZqBogCkDVVZJ7fKMaGLaHseXu59mLcXCbWCWUv",
  "key45": "4gunaAQYvCbwKHSxeov6Z8CnaCevoY9iaoALf6HyyvGCu7Pb1WQBfv8Zo8qVikNwbx3hS4BrQfF1uhUvchTGEAs3",
  "key46": "38UKB5FReGz7TibWew1NB6CpbRdmYagCBRwhGFbLwDhXA9PfeHXgJnGZU94mxkYYerRjjn8yzPSYdTpw9fLv9BFZ",
  "key47": "3aBncvgVLYUpVg533XmTy7W1AG9wqc4Mjbv164otNL73Bjwncgj4X9dhmaLJTf3B1eVg1MhJC3K6jzcostjfr8dq",
  "key48": "48ZLPtuTySwhBsCAnK48iW2GveUyaMsbtNpJWifeuM4rBCXsupLEKrVz2DLcN6M7nCHbDhRyVv9vFXcBWnZEiUY7",
  "key49": "5eoUgn2uvHrxngbVd7GUGFCWmgBtRBMhn4heBjiModGxjJr1ZvdFpNiWPX7h5m9zMC9FWJwsV5xrncoKH5ZByLeu"
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
