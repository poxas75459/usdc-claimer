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
    "YwsMSHLk6T8n2Nrj4GrpcLF5V6MDgG6sEY3DAC9AzimQv8y7QqEKQcUeC7Nj7ohGo6oDeLNTw2y5uMtsmJY2HkA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XcJ2nhkHsjcnMpF1dCWocsLHPJiT8yprVEyFmDcihK2iDzmEht6ArDnX6Td1bCamVvKcuRLFkzQsmBfsFQicqq2",
  "key1": "5ZXwh4FdC9XNxXqSSg5xrmYCxDasPyeMr57tzmMYHHdKQCCrTsYHLDn8bctebXBXPGNwgPXS7yvsDxzqcu7Fgp6d",
  "key2": "5mSaRkWNGGg2erdnpgEkthdFYDcK4rZZuZNBsf5zHwtAEf7UVNop3zvobebjBJem9HqpEedqp23rM5Dj8phGaumN",
  "key3": "26fmHHbnfevBHGoN5y1idKxo3SfvSVePC25EexPQrVy7r1t5rSuScWXkUsAS77KSwQdYXQxxJm292yC6XVWiPQ2X",
  "key4": "2fFtiA3ouSQk7mL81YGFXascrk8gPSSie8JL7n6TESJhiBzrbmPMnU2pBD7XENW4mNoCiEKt33Y99mN6CBGT8Wfz",
  "key5": "54n9EYNTRHRcM2Je8YnjwpFtb4xaK95fHrAFnBzCYDxnkuEKiaTufFanrLsCz8UKrgLc2yT1HFkXwrueNeexMC6g",
  "key6": "35fyRPk54go7Uq5dFuAkRM6umtpRqnBt6aZE1FDwRPPqYMtwc2HgjYw8eR7MPjPnMEYhUqPByTzp6gYQ3HE2gV2W",
  "key7": "M8oNDLbw5k6fEHjzV2kf8DrnHakjZjC67tPxqGgPEXUEkoZF6ry7FWvFsXmU4PAXE6xRzdZrkhrBnuEkMK7SRFR",
  "key8": "4JquckK4KwpQF7ZoDsYgCBTaxgr5zHzSppTfsiK5gjMehZeU2oiD7fVnvB41QbhW9c44wBfoXg23rfxr7513ZnV7",
  "key9": "4CSGp1U6fP5R3efmBZ4gieDQxpk19k9SvyDtWnMwakqXzwhWdVc5BG2fpHjiXraj6QBVTS1uKvduWLPvaFdNmwty",
  "key10": "3Fc9S9hvFwo3T5BvcrVF1ejzxHSdh8BgcrwFtoWZpCnLjanrwjuYn1yzeRL2LTVwEcVaPvq9HcaZs57t2L9tyGAb",
  "key11": "2KxAaKXTEgt8YoTz3pS3v7qU5BRs15XaYAzQabtJepEpWT7LHqc8zrBLNT6LgxeXXnfmtpJKnzfF5ZFM4Jmuy4Ge",
  "key12": "5ZNoFf9GHSGJ6n5WM8DptRDgd1KbroKff1jZj8koyH1Wx96pnqMSJymiaf8y6Y8MgZ3k1VyY7AptSohjZaC643eb",
  "key13": "c1Q5mq3D91Gu4pqa5CMAWQbRAw6BFBHKwEjMjS4eFurW71fk4Ejmua1XJkofBhYdcTfiJFAf1CVfiChUwaE5qpY",
  "key14": "3pRQtCPePeRx1dm91wNe95LL88MrygdixaTXhnUYkA9TU3j5ZsiqZypd9LGi1aU6r7JkUfuaLUxEDqY7mzpwdzCh",
  "key15": "3jg61xL9b54B7ZcWjBs7yTZTK22YMwrrSMmt4eRmzwNvoz7hPuErosPMCL7XxAmDrhjaZj1MBsiY9Wo9kKZp3RFb",
  "key16": "o7X9BE2yp7bNYcP6qbRzz2wUEXig68J176D1HjncTi6rCkV4fFVhgh2FkDesgiXGDwqb341kXVJNmz3r1WFm837",
  "key17": "5j6eaThNKCaejhMdwaZu4HPXPNRq6L17NAsBkjjvaxNaoCVka9GbR6nRQVTpFFRYiUi7x4VphVvTMKkZnQFiH6Wa",
  "key18": "2FjnUcTQSf7onw3oBk5P4uHCM4TvbN22DrN8SFt9BmTvuLssfd8h7KC3QwhZU8V6unLMRjt4mp4KTdFRccr6zrVn",
  "key19": "4vNczyzHSmmJzSABeW1PHJGZ5YwgQqQZAnTFDbHyYZskkqQtg3LrppEv1cLcABS2nrKKxXmB5nRqRpKV7BPc1Fwh",
  "key20": "Jqqc27GrncgUFDQgg2Fvn4bsbriPS86CAV9thjPYSKai7baGsREouGF4HMC2Wep9BpxZwVjvDNktpr5Yma6Mrpk",
  "key21": "3CNCwK99siqVgfgiaUvt7jtQNzWiv6xpt1Yzc7hizSTCNZm9gtG6RGxeLPbQNDKcmswAgDTxHbLG2GATm5HYwZLd",
  "key22": "3EHLQpNvBHitsGChgVbi59opxmYDiBpKsQnuK9CDDHeB2WtQQ67FRfThfBVfDAjCHkpNPM9zSRwWdScyqts43Vno",
  "key23": "3k1FNsYSUch8Be7cQq2Etz5HuctQjYrURRzhQCxfC4xsdTAVEVzc6XJsw4H43EeCxgBhQk99N7LReSLs4SjxTRXS",
  "key24": "5fP84JUksd1faymjW3XNtTSz4mCek7T6mHpccx3LAMdJSmJUwDicsWzERj3XgQW2So2HHMtsgEdTxc4GcrBmd62X",
  "key25": "5crs73Qws82mTJzYaSaoA9fQMu5Lm1t4aVnqH4aWBPdx6b7h5J7uBp6mJfDrzqiF8ndWHPtFJ51vCAGhZfWfL6vp",
  "key26": "5euTftRi36tBp9SXdV4WT798v7LrABfT4q6iZA74Pqx2DYnHXjs9j86YHY5dUSByfBAiXLP1HpM6VfBz2iHpJjRj",
  "key27": "3Kjtp3XZrR2NBpMY4cq37EcVZFTnDpDAfR6FpfyepmM6prR5T3a3SLot64SuV9wxnBgL6DkkTo2EpwSkURY8L616",
  "key28": "48F6cFfs4QHG89JD3MvDC5rQ5mXe7qEF4HZpVzjY67vWbWHPJn4nVsQC9KTuzT4sJJ3MvcDCqz6Xrrnm1bzGhYGQ",
  "key29": "5VdcFj2FZECEQ9kzj9EVgsVPU46diomqRiAMks8yfpNmupgkP9wCLSeWYx8sxCFiKfAEmNYAjCa32AQrKoh5EEDR",
  "key30": "2xUyUZLAWJm4uXEKrw1BPUDpNHe419UhNmnDpaRWpgJj69Xuj3XMC3RSast2oRqqguZA5SHGpPtYREjNTEY6Wz61",
  "key31": "37Um6VKJoiMQWjeUL5JzuovEvqFBr1HjptFaRahW32PFcGrM9oQzxZLPpcXegnwhs3q6MJzeCwNxCXKf5Tee9Koi",
  "key32": "5gWdeRocsBJcxCyL8yZy6XFZ8P9bpKH64YE9SZoQJxxaTyTX2Xn568S5oF4AE2uzDe4wwyp1GrCzGtZPUJQv9Rzc",
  "key33": "SoidDntgx3JjzRwAK9wMBXnwPZLN6LzKJYpXg1Dyzne3nHxmmkvzCWSmBWeiefodqpLBJu77gZqQJGDcecqmYQ5",
  "key34": "2tVsRptPLxnufpTz76Cf7Y1U5taLZcojEdf1fegiYqVG4k5rib5PJ3fYXmBHAADieNyfdYGjenU5WmAChmStCLEJ",
  "key35": "4bYT9QY9ofFX5CJWuUdtirLj4gGHdjQHqpQGdLM1dt7ZBkYK7bqe6vzXZgTWytheemowbbistQnaPvB5LpMeRVAT",
  "key36": "2K4QaUTopdYtGmuc7eQx2YrfzAj418rAgHEDLjTDD4wGUhWsiLCm2fDhDzUtjJLwVtf6DTbp1zzBzVoc87RwfaTF",
  "key37": "2CPTVCKr2vCUW3CayUDLLSPjoAeUUn7fX92cGcWRFgbkA1HSLHmaejYTQZf4z3s2QfNsZd6wcTbTy816NGkLgN6i",
  "key38": "6CidTqtvwDXhVMsss4Q14vw1bc7X3bFP6MxhpiLNcMCm3JqwwcpgDbKbwZ3Xw6Uy4ptuctzbeo4upYb9VcJ8gQ6",
  "key39": "66RiztfjsUdwAto4cvD7pm8cnhFe3T7Rv2gGbTAYwuhDakCkV8Aswt7raEnUHCE9frcEc14mRu1hLnD6op9j3uXs",
  "key40": "3Ge5oANF37zZCF2yMBSVK9dwjoEtRHkBgNAAfuWaeX627enDCdLfQBuUVpyNcPV4tYQxskEDTvdaLYXeH14KAP4w",
  "key41": "2xFXzevu2VAbp8QPuL9DVvkdQVsAqwGrURcETqaAkMGxw7RD1BLXDkPbVYd4arsatFNc7UayMBuZfYvqJdpNkW1q",
  "key42": "3ZpiG7tifpbrFYRDm8HTHPD1nwinfyTnmyrbkj3XJRjEuBnTpzsR4XXM9GiuoXEGNFh8UBfjsm1RMno6g2NnjtAg",
  "key43": "41gxDHwDVKrL7W9UMuosXhZsFNf8TUKgfampoB4HYUsAbupG446A7ALtq1TJQmMfttjRsCFBnJ4TCmfL9xUMWJ9D",
  "key44": "3Tep56uuH7QjtJDzqr4yNsqAoRy3uWfRcZsfqwdTfWUBPoSAJJqxzCMgqQcw1S6x8RhUPGCzPQYbtxf5hGsGBhYx",
  "key45": "5zDiGpJbhoFrcw799d3VCjt3fBQ4Yu7cU16S7fkmDDB79ZbGciimTPjZnMruNrufNPdAS3ZdiK3yggfxisaNyCHD"
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
