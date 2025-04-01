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
    "4puFKF2KqouwT25Kce6g3VT5Z4SNKuaELsiPKAt6carwQGtZFJaNYzpFEMCnLkJWmK8xZDyNtMgq8CUc63Vn2T8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V6dShRhNXZ2DgxpjbJfe8cPE2kYo8gB4zdua6KR241JBD61x4gw6NjFHUNVWuFL2yTER54R4owZqx7FfNwa5moh",
  "key1": "5CYbaCDrdHa8VP5ZHLEe4LxKWxYexmUt83acRaaN4f5oagMHrVwmsJniiKSjFzmqUEZ892rE8VvoRrwweTWe1mNX",
  "key2": "99w6o4C6yYhjiiGp6VqAk8KhxJ5rDo91X84fy3GbtKowMy1wGj3Bx5oX9x8e6t9fFwib4QqQAF3Tipysw8ZepVx",
  "key3": "2mHsKqQSHwf54aeg6AGt2eJM5y4xqp2oTM7iP5mxbUHuQUSQzRvrJFY8VYq5yznjMvrgx5aNu5Vfj2TNZdBAn1e6",
  "key4": "dpHqZUUpkkSD57xJnkvSkyiDNA7FqY1r6RSJTDzNKg11vHDiZv8hQeKAASHoTP8Ln3Yo9CPpAkz2EGCuR1Whdxz",
  "key5": "2xCKK4UuCgLtYADgBycCsZCncb3TipuuU3ABjVSNfiLJ3SNoZfBnkHJFearHZf4SbA5zR5s2q45Z1rFJZmNX2jSA",
  "key6": "CNAesxdeQGaFaw5E9dSoTPRLZ36xzrqfont2b4LaQUqMSdNTrs9aRDHAKRfhgzVkBtiX7J6xeDebciygH7WFBGk",
  "key7": "4xQhT1WrkQ2sce7L2Ubsq2wmqQneR8n5GYxqzNdns8PjWzyLXheWJ8wsLeZ1ff8ZxnJL2RKPZwgHsCYYtEHiGY4X",
  "key8": "5DHEEEeGYouNPaJMy815v8JKf3Kz9T7kJgDDV7gZKVc61i5Vj7TcyNAmFbuJBDmbcM7oqL7KGo7PJSho1PjKzJAN",
  "key9": "Fv4kqNgpvhVHsU1rgF6q75NP7AAnboHseLvm1LCg18U3KCMh9mDQuoLd83przsjgtEdSspPBaKt3xMsj8zSbP4g",
  "key10": "3pEiuXyAuUsdsDzJZKjnfUp41FLnmCd5j5Ui4BYs9Ko8vkfNQmNsrQgV2iuKeaseAXHjhJaC4oDsikiYedXekfkM",
  "key11": "3qEAccAjvA1A3swiam3wRcxRCewX4mrmVapn14wxpS3GLKzeGuMhhsuHrVThokK1wxrS8h4o4swuUNWSzmh1bg3G",
  "key12": "2LjDkAJG1zJVZPKDrLskJCEKZpqRtdtetrXbtcEqrJqDX85PcSUeNmr9U4rDyvn63P8W1cgnomPqX9WJkSy5FKCx",
  "key13": "NeTT2exTn7KpxEU2h7kWzJJwWzDShYFASKyr3yHu3Hfj9qJ5kzBcJbVSSXm9jQD49hknfcpJGBmZ4nUzaqePsJE",
  "key14": "3TxNSHM1HE8QGxJ4PxA92ka7CeA7ixZZG8e99DZuxZdFmczPFxiW11hcEo6rN2UjxG2esRJLMcp16xwFv2LWQJit",
  "key15": "4PWFDD4MTduc9jB5k27BnnNUWDrTH59UZpkeBnC9MMiBfsPYFLMw9yJQhXjakjUVQKh6rSS2VCJydLswP4KWYyDS",
  "key16": "rJH9qvSv92v4mQeEW3a6kjvd1LUxTxEsQiLQqTJC8Xzpa9YuWRrg1XhqduwTi26dKGLA8d6BE9ULacz7ggKEnZq",
  "key17": "2oq3mqyu8VCgn9QPvqH1BtNsPyRNsytEE7JicVRJyLFQJasuUQgkTuVurp4BjFqbgDMCLDb4WkseXMXqhZ4hdVsj",
  "key18": "3jkwKiEd3SxYHEM6XdktsrxGjkjo4SQ8vUs6xeYYyPRToc5Zqm8ePZDZzu6bmjBDuhDYsUkgqXJcjiPD9KeL6fq",
  "key19": "3hHz2q2iGWZENeztJv22tkoDJwt8NTQ7A7RTsQcSLWqYU8tyMX6Cf8vHuJ932Yq8NpFDJdLBL8ucaxaDYA5hBrVb",
  "key20": "2EWbfLT176adTjHS3xQM3CGqP2WbfjpJVEFqWAK1bJ7YX1EGdjEZafLf37ASM9cDa6LDWTbLUNgNUJqZyvWvDsTU",
  "key21": "yPrFaEt4sjFXMyzJrKEHTYzp9z69HFnhBZQZwenU7FaDLnD4knnvbXsHMUL5mfkDaKx2tex3S7WbHRXvfFSARrV",
  "key22": "stDJfwPLDMtfbxwF2TCiZAdHFxpqEE4eQWs4ga1ySPpSMTbbgQqQXbjJGe63SFHMzX8gFeSw6chjMctoK6rwQWo",
  "key23": "5MBVc25AUVKfhm8C86NuMsyek9ycN5zknVSo5hXaTahCKkkRH6SQ3fRvdUqpiT9ryya8aM3jjeX6Bezf7N9dXRQp",
  "key24": "4CQxsdZvvBgmgsrU2u9zS1RuXPvCLSUv3YmePkL2MEG94w6Wk851o712Q4AYFijLrSSz9xdfbMUm4cS8QVUFfuwz",
  "key25": "3td3hVNgn9C3LvKGHrncm7UjeWcdN52GbUun51vdHPiWhuB63iCmUrbwp9sS39fxbXHcTQvASvoysV3itmmf9t3c",
  "key26": "3Me3HLBkGbf85ybq1dDA2oSGsoTdakVza8B7mVjSyWeRJhs17J3nBwjaTFP54WFATJm8HFpHSpjFVzB33yafQoP",
  "key27": "63jZHS3f9L2m1dZ3ZnFEUSQyqmFscDKAv89dv7Uxqi3u4AqabHRBchSgBx93NFwfG6evrVbYDMtJXRrzLJYbSesB",
  "key28": "NDTydLFVMpQ4iDPnyuigWyFLk5Vn424FfFbBDGipkbn8aJVg3qvdiCANumAz53cjKY1SjRfHsitEuD8RgcxT1Bf",
  "key29": "gUhg7DWzvhcJiphEUAKYfYktzF1MXipi3ijKahA1Yta6pXGdGrPNQrepf4o8rZLGCQWpk4VXnXmPcRestkKumfH",
  "key30": "3ZJpEQsK1LzCEBe3g1GL3VDRswq5CStkVMj2QwKpBX6WHLyFxw7dt8k8UkqtJiMtM24Sc9D7TVcKKfrpiGpqUAB2",
  "key31": "3ZMLJyKVb1uBnKNP7AzeAKsLG2uiZRCj75caUZAGqD45PU56FD4xiTzSn9ezDqPYcFvCu843K4iuSCEoGbW5jXFg",
  "key32": "3ionkxrawHeVo8p8UmV63dsBuuZBWaqGyYcWQUVeT9ZqekjwicrLcZAa9TejLGF4fNdbtxdiMgTZJeFYCQ7NaVTh",
  "key33": "58gLHV99V5DrgaZnatRKdFjTGuLhrXTqNySotqXrj3xDf7DiEaTPXq3frpKJ6Gp8FBu7dkcYsf9UTm1eowtDiKbg",
  "key34": "2Bprsyi7m9wMJ18iqL3YggNeNBK2ZDiFEvgEoAwdfHj6mrcL4GWTd9Wr5S6Jvz381GcYZcCz1RQP1WnAGzbV2NE3",
  "key35": "26QeG5SGGkNKqKNWGtw13jMMJX6xDZ2WdZAEYotX5Qy7Bnqft4EQSkeV575gP7xYz2uLPkQw1EwsrcWwGYXXx147",
  "key36": "2pcRS4D8gom3D4iAGK6WWjRfMLh8xEGvExUvNHsvRwRdjiZBVCGLXabVHHmbBc72UDYzDz8uxxqsYA2zGz2Y5Hwf",
  "key37": "kQd7kvzMqayqsUPniSLBsrnY5zgZueYducGH5kY1L2Px5jtmTeBAJJ8eG4qwYtugKw4hWsxYvf7B1Pn7DBwvYVT",
  "key38": "4h7gjEzS33uioff1GgheRBUPh71WWASkH6USRpd7ss8iRuL5Vt3CdEsxQMHej5efd8AvKWuQUtzr6HTTMQCUnVi6",
  "key39": "5WQs6zx3ZVCBabw8KjVyFfFJUhLvVQzAkAbqL14s5sC1awNvPnj3sD4ch4k6A3CVnhYSkEGY128xAzETQoPPgj66"
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
