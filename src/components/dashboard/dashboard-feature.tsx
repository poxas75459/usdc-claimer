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
    "5pn9ENq4zJ9espM6tKcSGiKpf5PMwC5PG4xyaWvbMvyAkrHoWTECZyaiUyoPuxK9KkfCaf8UrcPB7QTW38ZDJ7NV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dAF1tpgwTjrvpFHybezu9VLPYpQx8DSHwFo5PUE5YyEQQSAMmmUmais6KTc1XmXh5xejtg3fUQfcByUp4uESsJ7",
  "key1": "kp3BfPjbtjf89UVpr7fAD7EUvcQ2TQbSovPgj3aNohMyktNgaAw145sxe55SEWaexjNcfwsUnVSz6cZyxJztRHx",
  "key2": "3E1tvzouRRBYdBZzJd7zeSovAVEP4xLUjg3mCg5kzeGjBNyC1gtbSdZgEz94gVR6giWjr5Vx6ZXqkKYNEVBNCR5p",
  "key3": "3G3XrEkiQDjuMnGVsH4RxUzFHVpcnmHWnZ4yNwyx6xkBsPhy7TozRC9otZvbAVzSNJ9XkphyD83Ec6TcEN98gzhm",
  "key4": "5yJogoaF4xPUwRfGs7346QZXowJDfVDD9eutqEJdPdnrhaSEJmJbXxXQWy4PBb5wSrgQGZaEaav38KEFEaUcA6ds",
  "key5": "3isdHDa4UqHHKAHaztq9gvbHhBeoYdvQK5jK14AwFrqP7MRsnaJP84jzTRMCrcFUUaWAwC14NVu9ZoJxK2ccYP5q",
  "key6": "39JcXyoCDFKk8XQNR7kZ8MgTXgiSerk5AFEUGqGeAZZfmGiQ9EnAEYpYB4kAkoJXqREZcS37cDGGz92gL6GzAWcJ",
  "key7": "LLTYfRwUG9FuaszuybBApM24c97E8YjGaDYL88aRvTAKjHB5TpB8Fi4PZkeumqRQURZcQ1mXXkdnrVyknMRPA37",
  "key8": "5mSWfTTHDCaaTiFMoTbsXKmDS7CqP5VbpyZconFJEBtQwkHBUFn6WJMDfRTuXtr7coW9WekyPYHj4nrSiKy1mV2P",
  "key9": "4pUQpWbWSm3w5Apsg3dbbgzyEYootH4LUtPJMH7cnFp94uZTMUHqaGoH4ePqM5H4P64KFMC6HUEg8nm543HQGV8a",
  "key10": "21MLxaogSfyQodTjb7xgv2etbmckn1aBk7y9yXbsHNkXABZD2643ogSzKeku2d87XuvzqVgYzj7i1wBLRphH5LJx",
  "key11": "8EzoxugB6fXcUkhNsXWzUo2i7zNviDwm12SM5Y96mYvYsGkfDsrZ25bXstTQ3FcrFZAvJU4sdihMCS1vTih9KCD",
  "key12": "9iKq96tGGCKqVTenKq8zgwizSMBTdNgsRZbY4TkhsLiVX9ZDUXkqg9JS9ZsgbDCkf6vUpHeBZBXWTsJo7FZpfUH",
  "key13": "3jGrzTafxvPqh54Sc2omZo6fbxysnCqn7RjMytY8nStVCe22DNXbxxWJTJUPGmrZ75vr8fEZCA3NsGszscKF9JiZ",
  "key14": "4NeZhWwPvEHhZoENFFKQ5EuSe9u2P52XxkrrCrGZszWehD7QAwws3e29HXL9hXn9B8a8TZnPunHu9U9gkBLuHNsy",
  "key15": "5XUD6nNLvNy3xGMPPWQBk6WCHF4jdVrUrMpJkQbVGL85Qzgpj6ddMhXxVtSr7WA52487dmNwh6545VbwKDSW64Vu",
  "key16": "2eARvRTZCXgRyFpyeTGfF4muwP8s3hJncewD8kSG9QxSnnXJ95kadJ7R1GXQrngEy6HGxk9aLbrcKHz51MyaNSBi",
  "key17": "3xoWrv4K8vtPqpvqBbEkFkVWdZGWRWFJqiPifAk7ZP6goJt5AjvDHUT4XfNCeeo1QvVoQa9Fs3bQMmQpMpxuZGqM",
  "key18": "3TmvdDu2kTS1TgmJWuviQej5VRJeUxNUVdbbpmBgjLBUrKy83hvCzKqyUsCNtEfLorQzrp2UyKpuWeUn4rZAHC8z",
  "key19": "4xeWEVnfc9THnr54BAngmKr3BACaLgTFCmqdkZeQyd8HCdWkEm62mW2WrWKKZsApqiHGxEEGAPpWQQ3zbMYCD9X5",
  "key20": "3vQxHKaA5JWAx5ECELuHPKDihQjekn9LADB33LQ6bivmkRTQbh75GJYgb7gd84sCtqNarKpuk5VnQNzM8HjUtUs9",
  "key21": "RuADwUVBP65SHVBUedeaCciojZHZEJZ6Fvxco6k17G2pfik2TLHfLVNTXC4XfMkdXTmJvwD3K1K2iVinVSN29TA",
  "key22": "PpSxsrsCc4x5nFjrKCRSjTU6txmsVaNAyxKe48ZyJ6FNs1EtWzLZKnsp9jMr1ESAN4hE74Dfckv1YqhuwpyERKj",
  "key23": "4zioXfx9qD3FoJkgosoDiu6urnmr68V4spx941znCdJZeu69byrJvxX49R4HatZXEx6U4ePramCKp7K5osWMSUZ4",
  "key24": "3kb8SDd6FWYj4yB1xW9x2trozmXXNWPjfyVQHkh4fzVfHcYPiTrPhU1gh3YVKb6uhnEhQ8VKmnS9FX3oftbP8NZz",
  "key25": "289193vCQwe1szbA1igRcaajARrLBnZjVT6xaucNSqv7eSgZQLpvuosavqxBeJhEPhhSFam932s74EPDvphkdUSh",
  "key26": "5dpA4xhKRQsJjbT7pC6WSDyQrXLGheX1B3p6UHZtsmmwTDuFvy2Bq7KZxGHXL4dazzuaUyKXki55b3k4MDMJ4Q53",
  "key27": "fq4JorjGLBSJhScuPmFaq7QRAZdgzTogUvwk4ysAFsif5EoBnomYnvHg4yYRrtRtN2zxMWkhBLakTQm43AtoDEc",
  "key28": "3UbNp5RAMcHXs7ntuEMSapmpcs8Aevwjcsw3LQ5kMKVs9W4VLyj1MiKomyebvFe7JxaYRGRwiRngCFgek4YXWLhW",
  "key29": "4q3w4aQeD82exstTthokkUqQY18mVS7zy5sqepcAGc8YFKfbacj1sXcZmQdNVDAYRgH7QkMXr6x8SnETahU2WUx6",
  "key30": "4q8CVU51oz4ea3uhn5LHAsmyqePzF4utPsX753zavBjew4tC2DEMnd9d6u1y8Js479HvCmcJR5A2QaYHd3BNo33E",
  "key31": "5TFyBApAdJeftcicsccq7Wt8vS772YeBfnA2jyx9giCHZDMLjorqBDWPE1iAc5rXEGP3ZPiX38pWmnBrSWXxgWs4",
  "key32": "4gYRxtP3NA3RAibMLsta7w6SsjLDj21ZvfSQ2mdGCd1DhDu3QjMfY9k8PvXKDZZbkCvHN11KGkNBza9Pscqh9E72",
  "key33": "EyFCF9yiCH4Fpz2M7G9z5E9duR6Ak5wNf3jvm9Rup786naUxpG454Xc9dSZsKzL9JcqTcCHYShqRhhDHmp2JFPa",
  "key34": "4951bBEzQ5FfZFahPoA8EWd8ADhoCNJKbGFEGZdDXVXsHKizWoJkGiW2tiVGicXd3jTZjCW6P8B2LeqmbuH5j2Uf",
  "key35": "2PuhyWVHisNmt9qinK8U8L4cRLivNZnfwLYm2TG4hPgHW8JL76M4VYxgJEzLo95fQprV42LtAdXycBRiZK4RsYfn",
  "key36": "2ybAojNnvB3vjfs7Pj7TpCei11qpsxqZckYkiaUV5qgDHovXT4JTDYRftWGjPUvMVjgMhGTWp9oR8q4eZkWJP9H9",
  "key37": "4gsHj5DFnkeDYeVH1177bVKsceve7wZpHpbyavvhdWTvp4Wf4iL4wxTquWERiPRhq6YxFySfMfYt5BjX1JTBSgUT",
  "key38": "37YQYWNDrPth6n5g35XGzxzanE4rQyz146TKtbZRYfdCJbCqdywQfALiBUKmYoSL2zxZaR82U5F6xCGDrmu4uGT4",
  "key39": "h2H36YKLKZKpaKaeBE7zK6vzBojG7VdjKggTQ8Ppc6Ehp8vVrMYNAsieQ2macsFXh7mxBLrTsxNgkD1j7o1nXGa",
  "key40": "4whnHJE1fhtwYyDqGKajebeswD7Mp3u4hZfrJmqHuAVEcf9ejHhfco1ydsXQULXcacXvUsLGCJtrzQasSNq8eU78",
  "key41": "5yxdNpXmBKkLGbs5C23HjML7DperheMLuXjDZWohhLwU3e8r5M8FBjYHz9LdNy6JhoUMgR1KDpTLzyhJrAuLDTzU",
  "key42": "3jTdVbJaXmXCsdTrBKtu4dXNS1VHdEyAiNGKCcUCRcA8B6wJDLssjHjhBSAgaKvMdB8jVhakYJZzFKbDRdsGKKQ"
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
