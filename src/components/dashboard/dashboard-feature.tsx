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
    "5zcCcEpWbLR9x3vx3MrTit4i1RTMpEWUUqZPPvjBUMMdHhpYxoYnjxaRpFVagxACirfmMPLq4B8C3USM9dpwPsXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fzjb173UE44QY82X7AimsCkvf18qJkjUZKS6mKaY4iZw72ZcifA5XfHT4DR31gFAYBqit49AXtW2fqShQ3b92vB",
  "key1": "3BM8bkk9NoGcXZq4umNrgvDxo8skcxM93aKAtm93QS2j5AVwhr8MubWjpCrUd4wxK2JmoEmjo61Ef329jvTSBdaS",
  "key2": "3cSWcc1u71Zag5RhJAHbkUHdaqiTPdBjjJx1YpT9ZQJp3FBGM1DCmT8Wvs4kvuNXtmhi3rasW7ZE2bwftffosb8k",
  "key3": "4z3hroArz36uxd3hXzyEQNdNpgUgsigSBsQGhKPfVbqPXd8Lx2U3BgDCWFGxfLMGTME7dVzrExT7JDgncpTnHFYN",
  "key4": "2GFfURZQZUgaG4u4Q885a2pmqukxNTfjvNjfsDMNbZwG5xU871mYtZQeWQw1iSPr8nfmQ4kcnsjfm3m83BuQnugv",
  "key5": "2HQ1YRn9MZ1NSQHAxy9gwxzkAqJWgpjh3ER4aMN3sXbqWYAMmGiQVJbKdq1ddtCSoPXLFxvQFUa7LxEB2JEYZVCx",
  "key6": "467wG5bSw6u2Mo9QHHGbTKvpjVAXkPC2rhG1ZPy5iu8ThpjwJAq869ckNtUKEp6E6Kkcn3vDDC1Lfp7rTvJeW5TA",
  "key7": "5ChhQBG6EP4thXQajaR8RHjhPREX5Y1S7DAgvsottJvrB9CWSv3aXBYjVAotEdjLEDQT64can7XF2bHcFh3RFibw",
  "key8": "4BnWKy54NyQQbadpgq4xKbEFkA8CcZFt5VN9UcNP89P6mU3srdTWGNzmEANA4ia9swN5RYiBSMtHahtKiauFWk6y",
  "key9": "5Jc6B2yQPfifiRdSQqEH9CRPgEYH1R3YGFGkNVzyuYR3h92Jhua9cMwj7m6pYksGJWyFbk8VnKdhnkuxMyJuKDnE",
  "key10": "iPRsHP1yN3BAjPKzBx8gdAsch3J7KXHdoDgzGyr5A2C8CDmpi3YFshsHNN4ViDtCPfKDnNkfXE5mcgKQqDb18Rf",
  "key11": "52H2jgEP98QGNpMzdHhbTwsCshUMcHwnduWPpHRxdyZdMhRU3ZapHHqGKxhguKrBJjy23d56RXVYQHB9qLT8F26y",
  "key12": "4XncUZ8GJuENno6cXosx6voNW2faoeFi94P9xBUFcuawyhMb8xYGdBD1r9PHFqCBQtErAg5hDU6VUhbrRbucZj6U",
  "key13": "4Fm87AezVaYdgXbGjs3fagajhRuW6sAwuqLCGqy8oJZ3i5Mdjr5nQa2ii3AB9a6CuCazKSJ8oxTzxdePxSNXzoEs",
  "key14": "2YdxCyB8s2VTGmS8tV2LYcRDWwEVi5UYPuKQvPdopWoy6QjWGtMqW6ZW293kRJY8kD1V8WTXYFAejgARjwcUmUac",
  "key15": "4Gr46nYKczRdQhCRvRU1Fyr95UGjACARsdSDHueSo4pWiULYbxQjf83ak6cGEdTLV33AroNdZZjQfJWKqA4FFjYr",
  "key16": "4usztPgug482q4tPgF4wr9thwnTpC1orNFZD4EB6Pk8dUdKkWgk3xPi2iRRTQZCgi2VxP6eiR5yKgngf9B2BqGGE",
  "key17": "31jX7fwLcC1Ep5FTPpx6vbJtRLM6ETpn2Ada3AuNysqNGha9yEDfnvxQ81dDjUDP8gah85iFQ27GWNBb4aEoEd8f",
  "key18": "5t72wwqoXV7ok4ZtL5Ce3bhcmxziMfnwD6xFfmgquwp3r7FGS1UhyPatvQEkxP3bevhH4uhApHvtNQMJRyJKUVHE",
  "key19": "4TD269ZrCbX3zq78TefkkDh1k3RKrt4ivm9A7VLkQv4TmefAxfWJV8GWnetwWGt5rshuiAbaQP2rVyxwPwNBddWP",
  "key20": "9jtJpppSmCG6UyCJb4pT4nGa5qqgx2h8mgyk7CwYUMSXiANF1PffQzRCe2Pp4PtNYzsidKWepzxW7ucUdxYkaJP",
  "key21": "3Tqk6CNtYB8XGZyCFGRXNY4hGNwgPPaE5fWk1hE72fnH7SAhBdYPfXxvPV8p51za1DmVgQ4Yqqqf7ZFcKWuQVFnY",
  "key22": "5qPFvzurXeDbmxJC7yPTJrq8nWGDxpHFTigNNrXAkzL8tYFyTkkB83qiAE7W4U8SuWNXQ9uPXy4EGDztfxqgTgEu",
  "key23": "5Nqf6iiFAhCuacagHddF7sGgr9nEfwf6yvcmCLHetm1jBPR1oGYvGunt8r8aKs28aSjwJfYCnnhX5FBvGuz5F4UU",
  "key24": "5AJPQBHNCTQLvyD4mqaGS4xw6G2N75T4jFfaWDjW5Ary6R5KtKniQSQW5DgF7uaspFnFVj1YBazEDxRB8JQUSraT",
  "key25": "38FaAE69KGo6y4HHJMuWXgMJuddkCEjWpLi1f6vVxWWJF27pxV8C8NXn2CyqunRThJcAJQRC7fbiNz4wtbh1ATPg",
  "key26": "2qtMwq55YMYCzqDYp4AbYC9HVbGhAiETPZQX5rSif8JwdChoULbiViGSickWpR2DuWAsqNQ1oSK694KJSDtGrhmL",
  "key27": "5aX2NVeAPd2BbcVv2pHYmmf1Pq2UXgiKrYoeYWS6T7Qj2TfZVqdYxKKCgrt72scFofkDLwbqMSMfpY65PhkaEDX2",
  "key28": "5MhzoDnbUj8F5YndcmUFytt62oU9vnVp2oqTbuYpLe79iFtWFYcGHbmAmUqBgBFXgPGmfSd5eEw6GYGYnErdg7Ru",
  "key29": "4ce2aoNBDvduMA9mScDks7FH2F2GkhcKw1SYLwgsXgB8VMo2LsLquTcrUscgrrBT8nQEgaoHRusJspog3W8biNZr",
  "key30": "2pwrHoofEHW15X78mGPVukGXa297SiZPgSzHk5TEqmZmFmbFkcK2K2bc2ZGaGp6HJK6PmdBANSK8VN3PZGDED5tH",
  "key31": "xoLALxvyL8zjnCjKUaP5XJuSqZSeHnRqUCx8eRjRB2Ko3My9zBu2Uv8CyD7xF4erKNPBXYRkpe72cmJSMx4Yiib",
  "key32": "2TGxvVu45s917CVUHAEsr7hNAkoyCwRmpfWav9nBzXfUKt5ALs4SRLNF4mUQ715hA2Rem9hM6q3pQQcEpeXWusyt",
  "key33": "2pT8zogvAwCUdiR11gs21mFocW7zQxa3JaBpJKrRQ4g15g3kTXhQHwkcAYGeGwGKUjsaz3xet9zzBGVvdGM1dnps",
  "key34": "5krVgcWXifEQYcbeyoWiraCcifzBRHg1qtokrobofc42QmubJ7Tvg6X6M3X34crpoYv9GLRpkB6tvKL59i1re5W4",
  "key35": "KT3oH1LKzW6FHe1XRzP2ADRonD1vpkgTveCYAay8a3SSThdFQzXqJZnLuQXehSkzWMLshMozWT2WiyLKdYhQB3Z",
  "key36": "5XhDwmDgXXWqrUXgeWC2uSCrmoC2J1mon8mivquZu7vdSVr5NtSUV4HXggvHsjTNUnDKbL4F87tLQqJii2RbB3jV",
  "key37": "2hZveXBvUzRq52qRzvsqSAsF3ZHoVQP6VygMfQrw28absE5JpMw8wGqDKwCtPW4JLvQnkKiGWWEsk4SyrCTy95KA",
  "key38": "4WmN4a7eKeQDsMbfZZbC2n7a5rcAVMKNjPwVLuj1NcNaLmUSZvsrdKZGj6xsMM6CTugoukxoZKYYXxVuHCrUg3a7",
  "key39": "2dfuDL1i8hNGFVk5aF4UbRMz8JrXtTLvNogkZArFqxkNyYTzNmLxiHN6AjqKuQzwd8j6XtkybtU84pf4MUaMUt9y",
  "key40": "5JmYyHbecQUfXLFsyGDcwgKaxfQAGPW3pa35AqXsJVCZHNRR4WRtLC2SjWD4UnA5xWm51iL4NgUHstPcLrqzBYTj",
  "key41": "EJjb7VYEued2n25uHQtTLHsgF1iZGfFujvAUFYqRfy9upTfufNnSn9xGxx1W8wxhwvYjzjj5TmL2V7e2sPEzvSm",
  "key42": "4s6XM6WKhT7GxS4qh9WhNt8gPs9fsmQbST1EF3bVKPjx8xSxgrUxETULM2bvGZAsmN2TRVwwepfKxc1kYzDoLAF1",
  "key43": "2wMNUXtnz4xxmfdpiV7PvuaaRG9YzJnvrWHxbwCHrkAJBWn4jkfpdZ1g12ixhZKo2A55vZvPgMjbJmfM9mRBMUbw",
  "key44": "sYhtcAqUCADqdgQXC6V6gdDEwbVBMxR3PRjg5XNXEBejaceiKs9drmgpn4vieNrVYks5sErjMAY51ERyeDnDuEi",
  "key45": "3ntBE2aLPmY1v39HgCxivSqwA1G8SvypRENVUps5MsiJivkdU25YvbjBawsJ3trmyTnnAGNXrvphB9JwqQtioCfG",
  "key46": "XLmqG641jdCpP8mGP4D1QPyEryzC7cJbSRszFqPFkmY9DLGU66Xuh2JRVxc1v7re6GaWK6H7PmKJzs9SvgVRGDF",
  "key47": "543PLez3nQr4ZBX9td3WChomyxG828HYD5duQUmUpavfQAHmCv43TvzbnjndieBATNY77qrFrCmjsQEHkBBzcZ3K"
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
