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
    "5nFFHsSbgJctWKwLcsQgRa9VPYByB1byJLBMX245qoQ2kFR4TqW5bGSGEQeS8p5SVoC9USrRJGmyYtBQZqof8syR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49XK3gYGktXnPUrDr1hiD7hAz3jbcuwbx7zer2enVaJbbZV5tBSbd7jEc2rDj9L9dvJJ6tjTgRf3TWrGy8ko5k5T",
  "key1": "36TBwuDUR32jaoGQWMze2vd7uGqoYgfVBHAnnW231gQU27P8Yc95w3SF4Sxu3x7Z7DRGWiU6rRQbbrDVV77kkSPt",
  "key2": "4uHj71JXEP61H7J8p3Dob46nb89sAiWMxr15FV8JqbZ3ziEXPKHKuPdfy6k7kExPE5RpVF6K3E1zegpvqvDFWWzd",
  "key3": "2zBh3z3TnQNdTUSGPb1PSZpCcEHCg73uC12XEC8uS4L5icZB49DftebYbBd8sXimg42d3h22ZNYR7EZu2wNGX5sM",
  "key4": "41UYZ9XfuRDQrGvCL9iqeyVNn8jXDjaAYL17pmKHDG2M7yznZg8QcFf57akKLys3hu526G6NSnZgtVRCRxTjDytY",
  "key5": "3z7yKL9zzwa473LpFubCSf5qW4tzMeWdrZpHiDFsHWRnj77eGTcXoZn8CXBapCJv2ob1R5WrbCQ7PRsc8eW3Apkg",
  "key6": "5YSuEryqURuLjyAi9D1SMNgd6Bm867QQ1we8ScKR86Mkgm1DTUWLsgAuSbjKqBykKge72wLRCmzNJnxcYddcwaVg",
  "key7": "DgVb4Ntxo6JfAmXuuDKqQaPvYNdyMgD58sVAszBiekRX37QeHqc1CCBpEJtY8czx4R7B3uSc2WehEZJZPTyALSq",
  "key8": "3zAbCxjgMw5M21jYhut1ACA2K2PicHL6b3s6vfsMiwXfwKSUSmr6UYzuVmLNu9avgtLa1GKV4guVLSNi2eFgG3Fo",
  "key9": "3HgkNxh75poTHXjgGMyxzUiLESEUWYhRDaRut8M5AaTWcBTZyf564T5mtjBjR7Fxuw5YLgiC5kf1GtVky8ZgMpR7",
  "key10": "4Ezn6wNJJDp9McPiYhi94FAT6yXhQu6Acomh2htvKe5RUjXXVL3HUZKF1PZwsd4YkRuMZE4myyYgjd8wkUwkcyMU",
  "key11": "2x8KKuaYzLRxJyUm4SLgifZbFnpuXXVhGdnuquZsnZTfEW1SxFhjkBZaHJY77DFNiikddyHMXqnXHYtW51a2D2Ke",
  "key12": "4TDM6PHpKGhUzc6jnrWfiqQcLMYohxh4Kwg9A8PWJddD5rUR8NTYfeG5vVw4xQ6eMKZwZV9C6w5WUhwnkgXbmG6W",
  "key13": "3zv99zepK8k345oRAAzpc43BHMKpNU8LMRWTXhswU63xJCAEN4ca6QJvaNFZoUfwcFTu9YdSi3BLzvzyLvQmmYYx",
  "key14": "4J3NNpcqcrpEvt3dcovqE6RmPho9pYLkRRQyLP8J7HSabBzy1NMByU1eBSCc3ZPBS5FLS9aawbzqAGYRuARKMoyF",
  "key15": "628jLNhVpXpHL3fKXhRVknEpk4RpmfstWfeqWLMStunSzXXh5fWDT1UavGM3oB7gWm9TeZm4hg2AAu9kgeq552iN",
  "key16": "55cPHvf9YV1KQBJNVDGHD7wxzVMUmAZi2qbEFFXpFSDwKHFFvbgxMVdxxf7AUmgaWa7YGaRsLfZ2kZpKiK9iG5F3",
  "key17": "2Pczx8Nhp3T135e6tRpJF2UdvsWRn9u7DCrpGK9YdtL9tpw6b8RLfxjymxayx5KFyJp41z7R9ZbxECxCvt9AnqRE",
  "key18": "38Bsj4oyweSQXNuruHCbRtedWTXoeM6sj8U9GqNWJWTHWG7t8hKwZjPbyQfEGx6KdKJiFp2AvjHkz1zBR1Wrjx6f",
  "key19": "4dCk5upBYMU7u2rVCC2VqqAZxABMvz2eoi6dRsRKmWCyGRw9m2PiRQvaH815De486ZbSHbzph8VzCjqWK2Thon8y",
  "key20": "3RKYXWRRScQdWP9Cv2zMXriQWkuLeQrFj9GBeyZxxJuefpPomsih2Dnu1HnQmUfHWRT5rHr3rLCEuEdQHdKMPTWk",
  "key21": "2zPdMLmWp1GVwAvshapFsfD3SH9E4Uvbmba7j1Q27UwgCSimzHshEnq57BFV7zrZj7dQu3yKwm5XVZUcZiBYEscG",
  "key22": "63q9zEXV7Md4e8RHPKtRqygqLbX7CDreY3NXRPtc5D7QZDJyXJPGtjQtLF5wTk4hutue6ad2TwJV2vvAyX8YxrRG",
  "key23": "321bTACptJFkUQptaPAmi3m7YQFj9BDPXxpVRyaQGXhR6H6uFDotPi8bX5QCGhL2x1rcgidrpKjScwg5pptjA2Ew",
  "key24": "4VFC5F12CSXUKke9y4FEkwZhiESmdd7kFVzGJM9sXg4oR2gzcq2WkQC17T4UFnjVR7cw4cNnhsq9Xni1t6JWuLps",
  "key25": "4NN1Y9jBpSFcUhuTP9ygPEehm7ukML2iZvgGxc8EVNbxUkLrte6Y17PYy3buzpqJirRTV3KfZiPV2vPe6zM9oudW",
  "key26": "3yqQFKMePeT67R3wb88HZ9GDcgKUJE9YDvpgQz3vkCJtARVwkWGxs4g9dLzcbuHnVCgjeSQUnVPc7DTktSgcF2ck",
  "key27": "23C1KDKarzThPqPNmi2EzVsYNqT3xZCju2FbPq9axYGXwLuCtFVbmKsnbWTddXUso3MKYESCC6UucqwxtW3S4orM",
  "key28": "4HBWmfPNij9RcmyCog5mrHH3Q4YnnS8KBUFRDjLmRNFvrbbKYJTMvqd6Kn2TAMifvFbzVDsWPi5LgJxWKsKqzrrr",
  "key29": "21joDk8VCrsCnufVo8MaKNLZ8wZXqNZspSiAnFijKcCdnkJxZhpJ95zdUmDTqpMFXZwN6hBAfF6hbx8YRxmqrroR",
  "key30": "3d7USbxxTCaYYemLcqaKDJXF72U5ZTyZ6v7iG5kj7kpDPgu98i3UVCUV8cXcMcHNYp6mRT2VsB9mHrnuuA6fXKdD",
  "key31": "Jwt9ayHgtXrmjjsTvshNKHBUxnAHsTapdwhrKBeh2fE8tC9xMFRMupQtCyVwzD1M3SgjGvySWaVggsi4uKAhwbW",
  "key32": "2BFPqP8A2btYA732R6dMQZ7WvwKoQwHoocMM3tmuxKuzccxPkjfiBGNEbL5ko5BeF7UhFQ9pDm8q1HnrdCASegTA",
  "key33": "41jyStXN6eYRiqV9W3qf3tYHH8FRDLbbKMkEWMSbq4x2xWq4KjpZCrJaRe6qjsxTm1HT1dN3fRe2BASgcxCFz2Nk",
  "key34": "3Pm3TyonCFfZniCxnNu2vCrcZPHmh8HAiWAJ4bY5KLmezhrVJFLNyxhhCxS4ZNMQ2fqJoszUQWfiA3oFYiUb2WMU",
  "key35": "5F1LfDx1Z2DMDrUXv4ncbzLBM8QiffDqybGDG5tmfmA95rYcd6cK1YNaYzqM1u9mwTWNDKYXtkAezUJbtGes3s6x",
  "key36": "zZJrVATrzqtYraSH9WWPeYs62o1d9t7Q6yd324mZgu9daPGu52WV1V29R5ju3v8Lmq4xPaxVi4aGpfg5yMqSFui",
  "key37": "5Zx1yngDxvbqL7gxxAFQzYZonUwvKHGTRhr4HZAaYSJC7s4ZdNp1JzCz2BaW1fpiHp5Nu1XapqVbrKuE3nvX8ycd",
  "key38": "6UBn1VsZVBiAJ3JPqVu3drqfwY3ZJ7LsqNTXSEuibJS9gy1HcWX6JBaYxNFgciqezamibS5am6DkeH4F499oBf2",
  "key39": "3gytQgHbLhyW2v5VQo7MJv9ZtePPqRSkbvJb8GqvEQDxkTCoTJDkGyMkHVEJD1Yzp7F6ZiidQCqpg7eE3QxvWTQP",
  "key40": "2RdC6crZUoec1hZ7fow5BsojbWnybZAb2ikoygHbgxZHcs3Koqkx6fuwcDsCELEsUCjYqhEiJmfvJRus6LdJ4FUt",
  "key41": "2RTHU2AuGubCoVk8xGnghjDxPCFfXfD7P6CAtSVCcgAPrm5Fx5t8ub29QV4bBEq6oKMKr8AdeUuX5xvU43AoMb4a",
  "key42": "5DjgbmTb17kEzewQG1c2mbjAP2HywxfUxguYRE8QZ9QbHbEWBUyrJTFDZsqXN57MpmaqfKYKceKvsQegvnh8KeAe",
  "key43": "4xaumq9m3U3AwzGEFZwuyPCSkvN3KUTYLfbmYGGjuVncsTne5DdZML1LExUiL4Nt5MNWSLrUTwQ4SqF648zSEbGp",
  "key44": "4jdYQeU5r32KNrUyMSmq1iz6gkTm2aQsffdyffbc3U57SgTxvzmhKuWekfabrMogf3zJpbDFAV3xWg8obYTKeVeL",
  "key45": "39ujpGNZhx7GyNt2FGLwbufxcNfsd6brKnmLnCath5horj6EXUQ11aGwj2U5XJpHHP32WZAPSPXqdaF3RdCa7oZe",
  "key46": "4nKRfivKBvQUDoGxMYYcQNFvxYBKTbB5ttMY3GE5TRRdNKxZ9nRTnETL7K32vDC5vx76GSYxtt1T8yYEPVtwPe69",
  "key47": "Ye69sSGDfMJVhqZBFkM5mRb6XuzWLumjo3rC8ZBJ3irFdcKAUrh5gh2gYPsLgGcue1yQtgMoN8KjTtGMAZn9XHJ",
  "key48": "3UJ4LRSdDT1Rebqr1iKjwDv1nc2yto5RAH7dffLVArUTMFfnAiRLgiN3GMzX8Sm2uzKwB2sEwnw4RAW3gjBRqa8p"
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
