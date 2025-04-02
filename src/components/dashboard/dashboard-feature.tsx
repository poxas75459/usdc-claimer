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
    "4wZNqJ6sju4tRxzESjJKQziQqLY9jRyUtVYRy9S8mrfPSmixJyYqVPiXy2ERAzCUNUSkPSUkkdf7C1UGKPLjXbo6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58EEU9SyrDovfEHcxSdfDMbkZLyaughH3Ce8B1qyZhpZn8Qo7GCQhsSnyRu8wxKKZS5JP9Pz98vAeU8J6RYhkJcB",
  "key1": "2L8jnv93b6pySpJowgMQZXVDPw9nTvm9uB32hPEJsaUTEfR5JNnEq5LyTrYXA16NXNPqVaqVg9WjJF8GycNWk2m6",
  "key2": "nbiLvx6AjyY6TXeajQ6QDLPqxRTtKwMkC4o21b7mBogkuk33EdutLJq4PmMxe7nUnyNf32xUgfsv8mg83N2ANkD",
  "key3": "4qpEQUyPJ1qECddajY3L5Sk6i4FspLrJQKbPqCYjEJNitNWnypBVKxdgd9rGqgsoQZuWefEPJShae2n4Q3iWEhLv",
  "key4": "4zxnjKDBQnwywgrdU7kBezFgcwpExe1j6X6oFT4kfm4i2fQfzFBeiMncXEftaPpP7Sgqd3RXfzGnF3fAMbR6f3er",
  "key5": "3sZvWP4MjsX4RyafM4L3CkjauSHL62axLT8X8KmQbEiGM5uZmoKcmBYNY1NNR3hsPjBkjBPPB7FN89Xg3HcsfHZV",
  "key6": "TCmzxBxRE4zc53uDQdcZKj14c8kQKimRjdiQ1FKuoGtCcxgC8bN6YyFXDRaBWKH8saZXr4U2SHTtuqHJQkWM5j7",
  "key7": "5MAdeFtb4BLLcZf26u3owPEcQ4zrKjUSUxCbuJt7XH5BE9gwuZszd7vfiwM2d2ZQmpwfYAjvgPvzqg86hAuUX1Pw",
  "key8": "4DKexh1Y96XNhB6r8GfUVdmFQLNB7v2U1Ear5Qw7mdTB8FR5Qtauwh3MPLX17AaEZ6vvbaSeeHyfW17QnqVrFvgQ",
  "key9": "3GjeCK2d4XScFA8FxprCCmWxT3JpWfXmdPHtUHozd4oei1TRnfe8YMszxxuq7SC4xQAn7tvZodK462Fz5Jbpwt7",
  "key10": "Z6Pi8uwWVLbTeUzpwPXb3VCSfBg2gRdn5BiHuBcMW21sNzKBmDyrSzUhUU1Pa7DuYP55P4WQee27EeZSCYxNgXr",
  "key11": "4t5r4ejRQ1QFdv7FhbbTjhv8XaJBB3Zh95X7SP2w2bHw9JqiQKzG8APmWKfH5T2woJRfLu2YyrFDDht81UZA35yJ",
  "key12": "2TRjhYQP73VKXEK5pUSkzqTUM3w4pCMjAfVz1YvWYpah6tcv6JdHs8gDokCeAb9fwmtU4ryqis4oqNLrL8ivWZgM",
  "key13": "2qS9vZsLc2gxT44QHMSemmVDaXg2Wn7pswTpwiSEf3cuiNKgFkqPQi45yRpSqnTRkcJAev8w1RpfW3HPFWWdPrUK",
  "key14": "3pj5TykmsBQvjsAWmjv96EFTVYqhXuF5WdemCiPiAQGSw7AW8fsxVfFbUVtVEXmactEQChF9FDQJiLHGo4U3rqcp",
  "key15": "4gDhy8Skoa7GnbfBA9K2KwFYihuppLSPk264ygyXE4zVD46kU3BiHZpuxWELivNvGxH5QS4GXai18Pj25DF2gUcZ",
  "key16": "36CcXRh8WED7kT4YHn4UiiSKLm3BMX6T9XsNwuqgH2EJ78DJxhMwpvMofFiMcKqJgymQgqmHVgTeAuChjP1DE5EJ",
  "key17": "zWVxpGFfhYaqjfyP3NdxgdNoissRehby7QxxqDtkFzi53aMcB1uPGvZdE5SEALPz4GcYcd9sna9AJkv3mLcMyHE",
  "key18": "2RvhVWQfmNmEBzZqrc12x49U7kNtng51hV2k1Z7U2k7ytnenur6jXGouMkWa3rooN36txiWhUWLHRGaicbyU2smu",
  "key19": "5GvGVQ2zK6ebiHup86wHg1ubhtLJvJDDmVpUB9EytvADdikktKsuvTaKW2DnEtdqrS6hEXT4BRf2ymFuitxGvicN",
  "key20": "2GqnWXT97q64PGuDZjjXPPUnqvhBHPEarEdU5WdQ32FrKWjS8wYNrvW5afNwb57QcV3DcuNAEbjSH4LuShiX4NbW",
  "key21": "fvd2kFX1cPw5B3HH6mFJZL3fNdXxvcp56kK3EkXkxvMivrzhZgnjWzaFuSUM7pgRUEMqWjMn9B916XdmYptmGUv",
  "key22": "3n4mpFt9ZXh1yUQAL4ZDEWQb7uGt7LfirUDGEQy3TyMQh1XyXuSwS4vkmbLNbFBSuaZEAZmzZmDdWdHYMyKqyV3x",
  "key23": "5hyrwiVf2TEycHbVJEMPWw7xT8QR4WsJqeQNhCU5ZYH4FAEZE4tciJxZb3krADzPa3AHvQghW85GYBeHddhERuik",
  "key24": "CHsjwQEx21SXPQUMeFJKi4Zz1BJWvDn4TX5UnkdJFaU4wvDX2JG66Dpue8cXFMtfRAzwiQ8jqrJdbzm1z4Kc3yn",
  "key25": "3aZP5R5XggFwwKevqEysSnmXba6vxcJNv7B4hGePj5irrN5qUnxHAeejhi1oSy2iGK27r2boHUB2VA5smxZBM7ka",
  "key26": "cM2DH34wNrWbkvJDRhY6tCytbRU3D2XHQwzCfUK34gPy7AT2TsTgXK7h6QAtr7T3PdK58mewiJyhHqkPwuda33k",
  "key27": "3Rd8uuxcej2pC2XG71X9U8PfPpy9ZdovUMYu5H15PQBYpN29fmfPgYf7Zt9WvsC5c65fe5KV7qnFaT2JoZLa2MLU",
  "key28": "zKqZMxdbQwMoKGdpBETFHVVnEcNMxuq7uqcKzgPpnpM49FQaA6tL2Fiu6SvySpfqTk5WtAGv8b1FKEwMcizDmdH",
  "key29": "acDeLx3ePGooXnnZm4DbgLxC2ar4H68QyRoJChxXW6F5fF6VWqYPFv3RjMdJZDCfAvpDX7TSf9DqztBEryNH6pR",
  "key30": "46UsTU6ZUZ9BBecVg8XHbfATFqz16adavwXFxsZRBGTHgagd2CpsYQWkhd4qLNXVWKmqVf8ebywTv9m7KmSVoXBW",
  "key31": "2gzaRsaCiuF5bjQZk1ni83wTCSLrsj4SnuExgEh3iUeQsf5gRePYjqaqYn1exG3iqxwfZ9dB6UCjgB55Wq7hCAdB",
  "key32": "cvLXgmNn8ZreeFBCjyYPKzxnCCcxQ6QHtGKcoKFqCExnKzLGk5i43ytjtDgrUYu2pGaYjdwQTJcuaePxVwV2tH1",
  "key33": "47Lnob3NgHed57FyoRConydULogPta2UvzmmvRr9awX5PX7eNzfCbA9pJ4LsSaktu5ByQ2mUKXeJp7VSGwwuKtdP",
  "key34": "FevyzRqzboGGCfSsiRMijem5MLijf7tWSNAppcYc8rnA5i7NutCC53JE9h5g9w7sQ1SXPMGwt8Tt1spn5ihJzHi",
  "key35": "3Eeb7XmpMARLu7mghEja6v2KNhn9uzSYQr2UY45ws3nFnmL88RNbZhqJzxT25swXFrM8DiX4VijgMBXdecE1uZsU",
  "key36": "3182xx3yYUjffEo6MA4axuAhfxm7dvMhNb5ZAUtY2vJLdPy3kELtFNr5nD6zsZvACagEsa1wkCdPUfsXrPdLdJZW",
  "key37": "5a13sZepbVfgAnU7YjfJgLTBa8jHkMSysUXpkB1U4anUFa6V7fyJqcFUWTiJ95DSNf1UYmiZ5ov8c3dgPHVsLwsg",
  "key38": "2K91rU6VHNUfsVfPTco6p5YJ6WA6LinqjkaT8kehwi7e3a1xuKKKwhQsymWWZ3yMeZ6qer4xJcDu3ysTNVDk9hE4",
  "key39": "3fVdMjC9ZDd7vQ5m3zNn4UxQwApps4NLWTUy3FRAKKRuTsQ2KWTQBeiTMWLLWF25vxGhczZWzzSmEXDG2De4Jd64",
  "key40": "3xLfRZ6urtiGjLagK6GURRaZEW19X2AVV482aDM1DeenYe91iSgjV1YPeceR1WSWs48W6iu3P99sc7BMSUbMnjwC",
  "key41": "4vcpKSb5n6AAMijMokHiWgTpUboSrfjJZ3GPfxNxwfv3orJGU1VDtWwwuWK5ad7g94kQWycLXo71JCSEAcUWtdEL",
  "key42": "3hX2bZvdkCUWzV17ZcGzJqy5X7n6JcfYbrZ9zA4Qzbc68dniFkCcTbG36ciWBErFPnQvUGhKt8p784A2PpE4eynq",
  "key43": "2X84PdF6jSZHSZrFewFqUisgMxB197RZWVhSYg2jHFumbWiJsDiYxvDLxckFtTycCtgofBXuFbTiBvk3r9NurXBx"
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
