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
    "5yw4QB7nmoFP22fCzRe9RKigD8jtvcRqkX3TKwhkcPowAcoi14c79zsFyQhQ5mrYk4YezyvjBLpwjdDzs8v3MjSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qXkNzmoUgXsFxAC5ZzVizpQyGMFK3EU7agyQc1eL8qfkoMTsadFmoNmaomhSrcc3fQGcwCqdfxCvdJyefMWsAmk",
  "key1": "J3aTG83iqGnwtjQ1PeMxnEQAxPxSfHRYNmAeqpt4j2XwrwuVmQ9xczveqCeFB22pCArKqkxVLjH2fzmsB62vdot",
  "key2": "4CxFuuw4B6QmGje6VYXyWVAfKPuvmxHxBRNhidLtySfr6AX9s8hMuLUBX2w1LckqMoCoPKSZKqcuRkWis89V3jGR",
  "key3": "3UX8MgtK5Jx3EjETcJXDCJL7j9BzZxgsW1RaZyoUdVjYwzHskHjRb5yyLX7C9Pepz2kWqwbCjkSSc6KFLgbuDkqc",
  "key4": "5fDjb5pFLaeuteVFtWuev3L4iKEtxciV1x3uaNaNeUwn1EMB8fSkmnsEsikp4VSPgJHWAac6SNTRMYcPkFssiyEz",
  "key5": "5kgXcKVGuDCRooe3fZxycvqf8W1irKFDiJMvG8mZ86DUhZbvxpPahtfCHPLc6FzskqYX5CsWRsrZLZNzGzDjTVWh",
  "key6": "388cwJwPa6PScyDpRkfJdgmCfDCbwNL34oCpqEKdWWKNwXVQt1zbJUs2vrgCrPX5ntTnWavGihBFGTmpWDCPT25v",
  "key7": "43sg8GpjCa6qzpKP52karbbfmNy4P1UmVUmbVURjYNb9JmS74hfuzKFofeQPV7ACrvNmtPmNkXDxVGYuTRwC4nQY",
  "key8": "2zwsx1JnXP4HJr3hMr7E3kWKEDAVZL17z7jGfFvhjxGXzwdwfBu3gqUwM1gNow4bi7oR4ocQRanpoJtgnDB7R4Cg",
  "key9": "4MBWNQeVoawVW1QFB8qBb9i5utdxtc5QCqDaqeG4fKLVJTCcsE1piAHdmTPjDfstka26DT59sRoibP5JnFMWp8ho",
  "key10": "AQokR1sXzfuErBgseBtnbm4us2oySneHB81c1r99j6Dr83qcGtrEESNTSwzZdJ4mpvuXnBs4XXaXhExVyiML9LV",
  "key11": "4Kun6ELRtzstpQpVDXuJ3PXC8at1Erb7wXRM7KLjDNAeTWmMgYGYTmri17SUkgdxYL8cgMwh1HkZiWFRMdvFFJKW",
  "key12": "bZbjK1cQDbr7xVkV9kZBb8yyb4jRHxEVavCUSDVRQUyFe44iyQQWLc2AL6A5y2dagH1Z2tGMggLJEvo57Rzgvmx",
  "key13": "3gcGP74wtqAAYszFNocGLbDD6wMzWLCHWKXaq7K9DAZuDffjSX1oeQdZgFZceD3hv78u6uHDYPu3W8Wgi6sHEQ5C",
  "key14": "4ZoPrmHLPod4vqozY9g3kMkry15bnKwv3EHwqRXZitmnafYe8w7apN6QSgpzPmUZvropZNor7DUu8hP3qQSmocS",
  "key15": "55fvsDMgsk3dWXJJ8Cyeh7n4tKvLfdgmP3qJaWRSGcGCXFS4UMkmxXTSAhP2m5Fp5mKdTFojYZCY8SPWhwdh8WMm",
  "key16": "rcH5fWWhJ5vgrBiT2GZTVJjWYBNA2XMv2F4gVxj9fFvdmL8A9wHyN3yJcK6e81QqLf4zqMqodJoA8Ld6nxPGMwz",
  "key17": "5WnoZjBAfy4pAJFEdhYv84cPr1vBZUWGDaFwco2p5DicmouawGPHq1ym1NrxD3ABLCzgHmerUPYmLewUmHpEGBEs",
  "key18": "A1RzLW2R4KU1BVo5D38syHT56RWqeSiWRKawmarVZA1FzRrspE4ekZK6uUokjcegMS3jDPyarwEdxHvsfwb5RLk",
  "key19": "3rbcSJWitvgTFQQWS4X8Z9ubWCEtBWaZzBtu5MESQv9DH2dgYejkHTeoVy2yC7LimDJYcjaPAjBMevzpv5pvYHTn",
  "key20": "2vdgqJBNWFSmRXrtJgd88ka7UQUfWn3SiCtw6hpcoE9fyLPRBXenBc1hw82CszgWsgzncMjALkvUvTYECrDFcScD",
  "key21": "3c73wNkwunB4myFeVtq8Hba3qW6968askuibnC55VdRWUVgzDBJWveGFk3Unc51nYmvB7nTmmYJgwLAsm7SyAtNj",
  "key22": "x56vvZTpYga5YS4jHnYebuSUz3MjPtmvAT5W1CrKhDfgyxQ4UYRgetVudjTsgiCEsyop9m3fMzsfdaKxtyHVWcD",
  "key23": "24a7oquYUFwZExApDWtaoCQPN8vxpr639omL4B1VYbbiYPm1bBhCmdme4RiK7N7pHoaXUGewQzGT8FnzBjtjMFLa",
  "key24": "5bqfmXZzgt9vgW2sY1ym22pubTXJRD3Tnt5n4EsA9eQ7kDATuRYHfpgoGBvryH2ohdTtiSAHK72rWNR5eNf9gYmd",
  "key25": "5raqzNBZ2SKXMjRszSPf5bJwjpo8Zo9wueEhhFPAjMkL9j5tgX5dpcz6vGCgxjoLVzoHFPoeNED6y9qgfNzGJvDB",
  "key26": "3uFLb9E7QunrwVHkyQSoFMgv1sMQ1AUL9NUbkJhy32S9nJDuj8EaghXQbGRwT6zzE5E2k3HhLkNNXchzGZ51Jsds",
  "key27": "2rrFuNKgf1STE1stjSStB35vT4ArCLywovo1fSRmDLFVE1UABk44vt9g7wjNbbxAcJgLYqFt4uRCGeTuXb2MpEU9",
  "key28": "yeKDdBZXvPrDedt2Wa518YWJovyU5ujLpGuF591itn1x7Ty5R3DGhKnfRP5CynezqGXjjJmA41sdaNhb6fEmW7f",
  "key29": "1AfPGMApbvg4GyRxRYJYZGWwoaMWWKVtEBCdHVyPWt1yxGELkQfeXSwqKZtPQLwz2aAkxdm3rbG89cmThFdeDvr",
  "key30": "52jsEZirGWaqSG1FM496uPs83K1qh4nv7eWnDFte7aW4CyzTt8WAgV31mkjAQahPmKfLSL6bjPvGZUFbDKhfS7Uk",
  "key31": "2LWNEcEUVZar2QKRnTxEP3fnS86KeKaWLayg7nsKVLyMo4eB78Lk38QaHJqu17hVoac9Y572wtZeVCidKAvLGN7f",
  "key32": "2w1W2yo5oSW25noAxocEqYjJfXjRqHXuQnHF8xc2Hv87umVzaE6WEr4NBxKiVxXdKBJhRCmJc31m5RSp7vU9kXTu",
  "key33": "611hxkzqo1EJAwCoUVRtkv2J6agYUuD6ETmooYn6FQdzznJw5Q2Mvh8B37KkouFwsPLnGEsqrsb83jfH5pzkoW99",
  "key34": "4vD8BUawR5U3brA4XZDsh9JcgJQFsgPbXxfs578W82rsi1w7HZUvb756HFj6sNA9RaYcVGzpcnxfX3BevTDtE3XF",
  "key35": "2kYuyhRC754bxJBeahwUXjkhRSkjP2uwXoQHETAEyJF1LxQoZTZY2L2evYWPkX4B4BXbF95TFUzQWTQMCL9hwDWe",
  "key36": "5bCanhmHyX19Ju5M4QcFjESHHhs4NkDfDALJFQtJGGQxMKqpiviECsZywaKatEFs1iGJCBKhLFYGefEYMaqZeaZU",
  "key37": "3iGczMzJG1pgmG3pp3UuV4dY4xsKZ3untP9bapdazEyEvGV99dT1cJuAiUsXDefPzQpSGN64z6t4DNqLf1ffgHtZ",
  "key38": "46K9Uvt5pv7wUUWcydQrJ2cDGz53pi245nFAGToGe2ttcCxsS7yAyjZzjeq6mw8yGDds6bX27fEp4LQhTVS8HAYK"
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
