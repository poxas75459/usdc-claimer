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
    "3iQ33jCGNN5XynjywAeDtQ3uPoShJzUEQeUSiLUMdC87ZdgKWFMpzefZnNbXQLGLFqwiv9nxK1UwnKRUXiF2yUM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RqaWKicFbbQHjdg6v3KQRzz8Lq44n2VLBfFy2Mdg1L6yp3ZGn36ZEAtpWxXEpAysWExCtpqDTTmtFeTABCjB24E",
  "key1": "2dWzyrdLPU6TrFGHhGXtPFdPwdHDeqn65r6qkPzqdEA7iXq2fg2gxJtuPVJYZM6AFniFf5y8unKBpHAAJThgwjMu",
  "key2": "J9HpJdC8N9J8wV9YMnmc6cDaL8nbcBgFv8keSSRHuL1o7jpLAosoq9emvpfhQBkgReKMnNGGzJyC2zC6HQv5qsj",
  "key3": "ENHEwu7aPAKiFLZD5jFN4XepB13KQ3Kd4ZPL3Vk8zv8hTpK34ZJxcqdAYvLREjGkqnjajzLYKohTxx4n4fA5hxM",
  "key4": "5SB53Lenq1rFeo4V6jtJkstD2xL1EdUu1WYxqCVZHUkQpJVS544bCbuAQ4HL9a8z7VH88rsU2yRZTLrreLxUkeds",
  "key5": "2rZFRtR3Mfm9qSBnJqvg2TEoY1i7p5MvXPYU28DVNodH82sGbwkEe5N2T83dWFofcGA5awox9F26R3dAdUSqCyV8",
  "key6": "RuKTTeZcF62692M4senTpNxbA7HkFp1LAyJB6u7qxfE8R3eUTi4C55SYeWcDhhtVijFZ3vdyuwXo6rLbixz4zPP",
  "key7": "4Pjhi6TjXV8jm247iswgN3S222iRfEtWkcRe3QR95JVqL71HhqTBsNC6Z3rE5aLtqMFzHEuKxLyBKnTQecVF7FZk",
  "key8": "21dkmXcfTrqwQrmzaLKvFAhUfX6H1t3zkXzBmVHuhuyMhCJfHGZaCn2uJQgGtshYwMeH1Z5Jqa2TPdSKbcuTYATc",
  "key9": "3w8Kr5BhbzLTH5zDiX8qm7KtgoDf9zsMDnadp4GELy7tVs1Nx7kzdG1E18QqDGFWPBMiLPeC3pXCjrN8a2NJ1cHo",
  "key10": "5xdKhWYE7HkQJSuZnB4VmLWxrYhTmHaxAFXg9LVJVhGMjS1akZGh1tCZgXQcaxZn1rsyoVJ1iaiPYvuqSWR8i5hT",
  "key11": "WS3u9g6Bxvo9YLYEReL6iR4FTukyw1kn2zjknU529jvz12JZVhaNeLyZ1qg3AwHTMnCe1KHNaoeX2RSVaDULpVH",
  "key12": "Pb3q9YihMkSAVF3Yo3x617dBcMBPk43g5k8RBUK31destkfRSKYruCwoaefL58suy6Lih9kZEVtKWSJ4iiJUv6q",
  "key13": "4DFazLVnQmYYYSUmTih4AFY9mVoST76FaCy9X9R8ZNhWv4eD6o9zLkDk7hsiWXPMR3WqBq2Xs6f6px9xmtfy49xJ",
  "key14": "5mHUaWMKeqXLYo7rH87aeAjZxDt4CEFCj7aAZPEbHXjbotCsqcMXyxyiqbR3aoS25J5aY556zSAbm6f4DU6adGb4",
  "key15": "BpMMe3zxUALSmXxwuUnu8Fw8yhNQ2o6L18AAVtxfcCGp7Dp8ZM5riN8qzsAX13mnWTB1ZsbzL3Q8PF8jr11DCLZ",
  "key16": "2Xmk82SNeZUnP29BqfhF6ZP7yBHd67G7vypmraQV28o2LKP9xKmDpsNBSEr6qfTTkrpV51PwuttYj8RRgEhwdr28",
  "key17": "5pu3dzTySem49QXYfNgjQeZhMKFqro7gnkRV4abLJKVaE15SEjjb8T2eXvdUkrZhv7tZmhtM1BeCUK28eqsLXHfU",
  "key18": "4FuG67PM3J24tLTwCLyHLYqss8tnUgNcumExJ3oWaCmXWgBYugy1fvonkiRtSr3MhryJLwoLqeHE8GX5TSqbxKHB",
  "key19": "4YfHsVVGMMbCBs7F16Bt4D9LM4UFhga3YPuVSbtUyCFzCg63TQ57gBT45AAcQDXRCKsT6ccjVCfiqCbovWyx2DhU",
  "key20": "5gHBquZb6ZAoih3b3kPYBKV31Ds4PVQz3j5ZvFETm2TeBy8oTQHuZ6sptQPig8VUGP4fmZT3JHKaLDik1M2jDmJs",
  "key21": "57yMZYZd6B4uzYbVg4KPsteKuDFUS34xPmKrKsyNcJws7phWJrMd7k3pGjCcjCGRyUxC8RCAogMNMDGytMDvDCy9",
  "key22": "4iHBmaYd3npfE5JjR7Ni64XA9AF5gjBoACctjnYvpEmVdVrRa9ZCxrJPvMzVtRgGDkS2uPGjUL5EV6iR9Ys2e95Q",
  "key23": "3VoyTygunW5EmwGrhzV2FkcPYKW8PtMD3E4hM7gEBEpNiYz4XhZaWPYWDUzuiVAhacopeZRQT2CP1Q6g4wV3XCdv",
  "key24": "bE1UkRLRugz4BetoQb1DAXikeaU3BNX38PWosya3bzRQQicV5dziZX4dvhEq7JEkmhHHYjLz4Tx2Cq6XfR82qJu",
  "key25": "2ToUEQH2FjLggBuhoyrPsoZvHK8pmj3tdUFZan8vAcTHAe5YSR4zoWf4wLmKEwWdTRsjuM1MGB3X35pHWV67TuQf",
  "key26": "5GhqfLFNnTUFCd2LSpUBC4uRCcvyAsRw579NvzUHuqKNCp28m7fzG18Cdydj3dvWCvRL3BunGoVzWJa1YSfmr81j",
  "key27": "55SXpDgu6Z7742cf4ucG7424ueAKB2RpGc6sznZveQruwdDGPRmHLpEL5CMWH6j2FAduF8rUYXqQSxxDNBry91vq",
  "key28": "21uG4YSnTPicFESs7acmJ3CvcixAkpY4dhCnghdio4ZSqLXxPTRphdEB59ux378Sk3apifmpENi7GgKNwQAdGXXx",
  "key29": "3UN5gbsvGEtu6ZF13B1DAcfWG6B9JAJYiSrPu9gPgbqX5DnSUsY9y9ZFLPTbSURh4W324xuMU1Ge9rEvTjadHzcm",
  "key30": "2ENvPntnDD6zQog1JpoqxQUHrh5CXBHJD3vcffMKH2EvghdLcmmH1p8QkQkToupdLGNqijNp7amFYnmahuEhEbpf",
  "key31": "315MpmDnmG3cgJ8mP4qC83aZBe2jZqKBuvNWKi9jG6T3Tuv3bHNzBvWqojRw5uu2SC46TKoD5EHuvwjMn5BomNuV",
  "key32": "5h1vkmLYwqiS3G6Tj5tiGoe2fLH6Fk57JtyzPUoPLiRWccKus4o9SbST1MLghmT8Tys5ch5VVcWiqQkNSqvsKkQr",
  "key33": "2yXLAV7JZHfPFsHMZa4cco4pAivscXaiSMEoyJyod1jNJyA1QQvpUnT2RkKZgzenNE24pSmcBn7n1sHAQH1gC4RM",
  "key34": "28FTusqYJMeUkozhXQxedMzvsV6TgFsFX3hDz5QRw9uAApFfana9dnoRknpSRH7ysQ3xt81mp6U6yZh8FeyQqRPZ",
  "key35": "2d4Fdz7cCqi3Uqk1gBEnuqtFcPTt1EMYctPDf6i5mU3cnvdWiummcs8rqWCZtxB82LxNri9xk6HQQ7rk6KPiWM5C",
  "key36": "2dpQmqcFVuFBiNwKSiTkefkZyJ75rfRyTVXS3UpRREVt4kqtDQLxaKkgaUaqFqUc2iPdQ58xp1qoXHUrVjSK8MvU",
  "key37": "64ZNvEUiX1WrPJ9kb4i32QM9g2ey3dhXEP4ZQ5JmRdM2cR9Mo72q3D1teUSkuMNG81tNzvVR1hBzrqjnUxCiCPzc",
  "key38": "5UUcSZY27js2o1jK4dMNU15KrQLVoKMg1GsUurdtMrKzuzcjqYZfkv8PuHXCDoggRzNGGQz2h32STk8PaSR4Cn5W",
  "key39": "2SqkvdiRgMGmn9ZNu52A5PPW1rBvmu9bdngRuGQBuPzMena5wDbDtMrKFz3tSaM12wpz3MDuJWZoSGshkdx4WFwu",
  "key40": "4acNwNt7hCK7KhMfScufCvEhJ6hJ3KzPXjV4xjaYUEpZm2tV7RgJWx8tV1VuhcR8GLGcdpg12sqhntbGrU8C2qNj"
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
