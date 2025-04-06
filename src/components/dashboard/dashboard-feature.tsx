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
    "2wGoEhRHjo2iBdtQ3jzQPnoLdVfBe1R6ewUzZxXrYwhroGR6eZwhLXEzHvZY4dyQbfQtpv9sLXCTW4HhwaZuR5bR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E7v4xs1BXvnJTnMJ9n5hU6ngiQbo9npv1GXLzzsxXBVtNyBL6ZWpr4igqfb74dmhL1taf95j76TrEupMxk71GLR",
  "key1": "4fKHayuM5XTHgHiXLC2MMBF2hu9e64dYpUcdJTyM6C1YXphAnMiQ8nf6rQ3znqwMMgDahvZPkX9FE9JekVig61Ey",
  "key2": "EUVbKqvWvtS636fqaswoSRW3bX6fuHQKSya3MVsRhCJTE1s5qkdT97xXr4ByZL3GCSEueazfKSPSaGjsYXQThFd",
  "key3": "3L3UhNasnjGibvEQaiFqjgh6KfLdKEk62nsUsdVPoi72S4A6vtCR8MYb8X8w89ofYZTHwHnWf3tefUHGBk5pCcyF",
  "key4": "5mZu9H8wrMXs1p374ij86gFgmqWCL2tsjAGQfqNat4fb5UUExF9Vo1DkX7SFQ57aFJioKPAuJJ82Z5cXfvLbLrGd",
  "key5": "35kMiHua8g3Cy4BrQAt8ahJicjzn1MP5MndBitJLik894kBmfRbZyYM3aaJs6pN4sfS3NWMiG26KKhgqQrphCT5N",
  "key6": "2STcSFAHHRVoRaUPriGbJ8ebvZLNhjVhbR4PkRgk8ehX3yRiLPmkK2JsK7iAxm5FWnUSQSdLBEuQxuH5943dQGzE",
  "key7": "4d8LmJtqVsGEZQMFtr1W6BJQCY3i8ogc4T1xqQLy8TzNEYfmbZzeQWR1KeLjRQXf7NsCUWfoDBBz5bkZVynXjEAR",
  "key8": "62z4qdaAHUZz7zLmzw227NsBb2xTMV8hRa3eyTRnf1TSwPv542xee91fXkLFSSGWtauUMcrrDNnXifZtCxbTjqPA",
  "key9": "5cTvXcxD7LwjGQn4urWeG7dBcfr4Fy5pzXVvz3DVth8SkcZqZVK3NFfmbah6KjMRdPzUF1WQKNDPYk7oXYJ18mRX",
  "key10": "4JguPpcwsno5XBoMVTZuHrt4t84xJYMvGqtjTDt7DyQWkt1p8De8B3A7qJuHun5D2sJ1d44wwCo4J8c4wPwpQ4oz",
  "key11": "48c5aZnDYXa8uPJ52xXyQp6MCD4QEjN6VrVazYL9TaVkf63jFxGxQkTtVJkgEC1XeSvgnQqMKMkzFbywWXBfyiXL",
  "key12": "3Hx5gFhn9Tf5YQqmzvgLVXKvNF1cWTU1QKTzxFZEBcXXkfFCwN1TytGoSVKLw9iRYmMv59zY2WUd9DKFPdkbhcnq",
  "key13": "42Qgo3y6E1zdG5JtJSHP5JEXyi9Snyh8pSeD3Go4hdGpALsVZuCHRRLoV8mdnyhYmf4EooUS9eqXsoZ8TChk8QSp",
  "key14": "4ChjirVX8W6SmvgWRoQNT7BJuS161iYdymzTMfEXxZCpmZF7H5wdRKpPcuovzRBK6VSRrhLmAbDjZqjVmJH8UkQQ",
  "key15": "2qfP65Uk5D8PoTiH8kgCFeHBehRLkiwF5MaaunLdYQRv3MJuA24uS9YZiZ7DGXv9BgfcqYERnUPEA6EE4uKFffwQ",
  "key16": "c84M8VudtBxLbCnRsKEXJjjDiUaeE4KjCajTLRknPnrMUb5LjdAXebP7Y5hXKXeRSripp8jVQhF5MPtkwdjcr3x",
  "key17": "3Ahb2s3NHZRxonxqR3AVfS5ASMyBrdAW8t2EMz5EWFMEhmxmygB3FQ5Y1gVwX6Kx6kxmp5vMwdE3JrzAgpSRYuLa",
  "key18": "TZf1ZFiTDNE2ZDNkJwNRtzicBBZeLWsF9UjyXr9A2ZfecZxQrQa9osFfD3wZsia8pjHfi9apoban9FGcRdAQZtZ",
  "key19": "4KasQfVsqedWdRECQCEdx5uA4vXmsBLvbV1GzkH37A62Y2HfKw3BnWaaHFwDZwtQTTZUdzv3HpAMTQwUXj8sso6n",
  "key20": "4KPw1h3e9TguButSJJmBCBovMrx49baPp89KEjRMqRoPWeRj9v1JiVx6x3pRATMLXbBtda7qebijkaabpcpK7f8a",
  "key21": "5Cno2aTWXwqH9TP9CZpGNiQoHdPdiWVVLEXcuQsGLZ3RG5Uv5Jk9j8LWqCwSs9BPBRZ8qRCmgnvd3P4TLwrkPjgS",
  "key22": "3pEVssSuRaZYwRbzhJrq3H9irYQ87CJgcBrNyjChRaMPcNuJPuqXeJjcuEvWNLyqrKhEz7N6Nxk5kyajS4U5GTB2",
  "key23": "ySZniaD6GKADfmJceGjZmEWKydt4XFgupLMwZwbwZadn7oCYNFHqfCgqrnPWygYbPvhcTivYUoqXnUCnb95UnQD",
  "key24": "3TNfBjYAKCKRdw1QYPMWDp3ayzysCg1cYQoHhEtMrmGfNyrn8gvsERtonht6uhU9i5WqhbC1xwdg7eQaAUjENN3k",
  "key25": "3L3e8bgvY7nKZdUew733pzynEJK22wh2SSfPDFD2WaW3fZ1DvsL1erF8ZsLcjci8tTRjTEjTPAwGKiHVzJ13YotU",
  "key26": "5eb7pWExKS1hmn6aVyuKUnnRv7VfXRQ63UH1uqus7pWxgSRBvJMXwqkfP43r6vN9FuktECYdUtFnU8z4Yjn9J7dN",
  "key27": "3Xjc8jMJvhUrDaT6bZRfhqZzL6vY8YWS8jzc6SeRNPTpT3roFEZ1Rb9EREEVfSc1YA3x1RNmRJiyGSCiADHDoh2H",
  "key28": "46no62yUAFhXv5HiTScfoTEaXdMVutPKRuZuGgXphcqDBz7QAZbcMUgr2sS67TdWNMf129XcobvBZtQVfj5yKibV",
  "key29": "21cYmGMNUNbC5eSZUzeoH6n6rPegG6RG2xs3aREdrsemMgob1ZdSBmUpiZ2vuj3N9aD8FUqSiyhwvEEwceeH6ADM",
  "key30": "LeeJ2vXxdt2Dv1RnSgdLvHnHpbeK5wCrs9z1GimLAZqGxQxW1KrWLBazNXaJ6svv3NH8b1BZrWTFRF2MXSBq11p",
  "key31": "65cswgZEJZUPXa95XMjpMWJCeUBwQBqLnBnYxUCengabQRrPSoPqkCAkvug7Zo5CBv3m7ohXUrNysCJaGzRCo6y4",
  "key32": "3NwRvedsHtxzQ9qQEandTzoQcFnNUEg7wQCJN2QjDWbrbTAaSVXLuncRRyZD6eMAmQYZ4SVE2jvQker33ssnZFog",
  "key33": "3gWE29VXUjqGeCBi5dgndJdNnAdL9B11z9oCZ4dyfeRAyqoU3G7TBkkm1noRs4q5xF65g7q1YJkFB7aLawCLdKyt",
  "key34": "3eGVg8evhjoHc6h7PgWQo99sgeNqtLoDyHd7r5FczpvLB2fRayQLEad9MAELKiKcTQQrDrVqBcJqhoSYLCMAjKZJ",
  "key35": "3wSmkTncDpgNc15x4sJ3kTycggu3dT1Bm13TU7jnNenDCpo83gvXEsNVYAruSdD5sZ3hCEHo6PtjPCENwvshEGVd",
  "key36": "22ccwgnF5vZCCd3Q5BSopsqgN3FpyY8XMWQHv1H66U1LVBrTE12WwVHfWsZ5HNFfQztD73vjF6EuycamLPTyzubN",
  "key37": "3Bn4phPZte9WwrPsH2GxVn9jAp2acFu9fYUUamTnChjx7vGZXf8WwZv23BBsgbg3qZDdV32eG7RsQtDtrVd5uxfZ",
  "key38": "4byfaHZEGjFaaZyrbqmjtkCK7XPtZh1vGqRsnpzzBjZDdPq6xz65NknueDnDKwY1BDndDqKJJKCnzuFXNrv4gDXE",
  "key39": "GYHgZMKp6LT2br47VZDA4MTENkPTKCXfjUUWUqktgoUZFSv7PXCpAkrfFW3Q6oHbnuRCAJJaTZBbDZDgkU49Ysn",
  "key40": "n8mibCjcBtxyb5k5sJKpnjyou5D2m1n5qVeaVb5rNeoetvkAs4FZMZGXRqw7Ua4nuidZkmGJpF66781NZpTWmXG",
  "key41": "2QLTZ2mE9LcEPUEf1Wmy2S11hcRHEJTiYgWsgYkZ2owACcDuuaoXnh4TEnxHMKPHfmb923XLGb7Q7R9tv92Hahu6",
  "key42": "4AgHQiHKbLZQwS3YpSAeZhFfvWsSj5kAuaNDELj7h64DejFzGQKATohFCKrSk6cptbSNNV5huXjqav49x7qgGTPt",
  "key43": "4UFB5fnLBLbHaoHUK9tYGU3SKqF4RWfUXCziHhWGXRXStqntStHA6K7VmivEwcYc3ithGXBwVfnXt4bxVTNq1VSP",
  "key44": "2w56frMc1yaN8g4NXMfUWNMBFSJbQd5hAcEYdBGLEczeQ5Ua9wfb5UgTZRh68jgvKcWGdapzGk2BQunty8wBUe3s",
  "key45": "4qbUjPsVLbWjMvSMg5NJyPV6e4GcT5sLEYp1Q3RGwAdmSPDmTyzRkvssSkU5cdi45NVVGZUPU2bH4WjyXmYSQE6r",
  "key46": "fyBLXBSjwYyDoR3aUdTXzBHwnxT19qcYQGcBJcBZFhWAYjj2QYT1LAhLErRs87NP1L5Ne9WrMJQfCK1uLDdX77J",
  "key47": "5M3SSFsZdRKNToqVwGSd745um9gBzFkXFsSu3ZUkSkZu4Tqbeo1MsXEit3djHJQwWGAgwWhm1CVyts5rMuWpz5Dh",
  "key48": "3Ljc9C56AhqRby3V4dPhC8jMeZHCaNAPyEjAnQ82x8XXc9QV6v6Dii2soJPtEcf9Vxe1LDZ16nYubxqhyjDBzAQP",
  "key49": "v3scrawpYSMrS9aUFzbxS2tVgBkjo8qcZ3fVCm8xEY8LoC6jLCJ2UWJaoDoVp8Yx2KyWAjs3Fj4y5a54zand3Dn"
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
