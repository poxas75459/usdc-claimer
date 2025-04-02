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
    "53yLLRxt55Ey3Shf5XmF4pdsu8rfwbEJfMiXTEeLwCvEanHTP5AHTWJFweEGroqegJxHMmVr9q78dwVtm4jZHyVK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xhdLqwSnXVvyXSYnpD3ByPoi2xpiNXs8AnDcfyEsYa1FeBcWy7WkixmambnEYNwAcyVFGpwYv3cBpfmu45pE8oK",
  "key1": "4qRQp7TEDmLpNXDusqaxmXD3BWhn6oi72QWj3oLKLzS8eon7HmnqzG3Z2jkaQDCVb4Es9E9bEmnP6PExBPeM7uDF",
  "key2": "3n4ioeXRcqvsxRiKQBGJvpccYgDztPmJsEwSXcrHK2x6yy4F3MfJX41izBR5zGBpPGcx7kbsWKPcEAdafFuPyg8K",
  "key3": "VBm2sjw7f7pNSvAFNao37E8T6gMX95MmGp1jfF3mmKiXwZT8i9kwjK9yEhjQsWDC4PiZ8R4dtoGTrsEViqjghAL",
  "key4": "2UkQ3XigqiG7W224ApjUrbyyA5AkRDbKBHtH4nF1AWToJqEbDmzQnLLQaXXTmiKV1FhzfMrxA4RGyFcYCQ2pgBDr",
  "key5": "44ee1dW34jzSwGUaCtkuoCJRJgb3vzDhtTPDZe2AFmanSY3MhCkD1mpBQVcwQSawGZyzMyFThqCS4wtXsJ6LjZ4",
  "key6": "57hBb3rCFsAZrXjaCnuNGcdRyNi2L44T5KGd4uxNMezS5jt2jZTDU1GGMFMz9sekE26hSrewqYd2DyQrQwJQ26er",
  "key7": "5yyQaUsqxRbaCzme1szPjFoNwQgZro9nSkqaE9qkpvpVMgbaVTG3FP5GXoVk8miYE5aFDW1tDS23UTDqtNfQMWzG",
  "key8": "5NqvFKHFSL2My36TsHogdN8yi69LmuZMtqu9ZgjujGatvF8zypX5hQCXCqvsmXKgVk5E2z43nWRAz5T2LUQFTE9o",
  "key9": "2BK8V6GFG9GXiW1udVeHKV2GoQQjMZtLXesbyq7pNigi5bfuxSzg3C1EKSEheguHBYwGX72bpmL9vy9CLdK6hkJQ",
  "key10": "5YhzBjjHwNYdGRuxXUNLTZxFcLKtancLRehmCFKoUbf9xVtWoAZGkiEKFVAYZJyVY8SSbxEpikY2kYZGQTgWUwg5",
  "key11": "45bAaCcWKiNEQ6aSEUHzegKA6gYHUigENd5XbppdK1UFRB9ULnBYJ3EkmDQ68YVqVQ1XLDATKe4R8TBo9G8FKag",
  "key12": "JnYgzWy7bkWNhjG8SmXYnMdi8C2XUtXeLXFuPDPwFMmKVPMv6oVaD5rezVRECXVRj1zwACA2ZvRbHfjVMdtCqeQ",
  "key13": "2cJpaXFVZEzUceoyFhpZ9BP6rP45cbQMn5QSa9U8Y4QyUKWAFrukQSekZ6ArmFkgbJLL9raR3hgEJ5FSV4Nyj7ZU",
  "key14": "357zg5RrvmdGVkvSnvNxgw1LMnfa7JdBCYRgBQJn8MgbPsitLRK5NQbAvcYbVqwkNBRVE9J58JPkVzfhtt6zmLGP",
  "key15": "6J8XHaLVc9PKvj6suuW1puMtrj6H9A85asN1ud2PVFeQNuspxYGLfs1bkL43BwCZVhYkCCgmLb2Mt5Veu1qYSTd",
  "key16": "4VCmK9UVvJncFb3spV9t1KcHgnsbutwwbXwsQP7qqFGoXzrmjcFkN529L6Ac1NXtbBexqCodRuutg6F7zu84uRP7",
  "key17": "4WjLGqysisa1hgK61vuqMTnhKoGCUPfa5hNMPxXaW8aFXFc8YbuGiE19z3KrP4KPkywJrELQhPHCp1dodYAgLrHC",
  "key18": "jgeuY7Mc9gK8h76GX9QxXQnJ5rbpgn4zAKDdoNTCeCU6e69GQs6rS4f7kgYG8ykLrYFVcE6b8y6VDKWNvc9c6Tj",
  "key19": "4VmSjTDT3D93z1e6Q6onNcYrFGps9Vsj5qkPr5mqnCSPdDSEC1v8YpxBBrNvhLmyn4rTQxiTSTMoFLMjtt7JoygL",
  "key20": "2YVZhLYyvU189d5beDbkFB6p5nn4kHCxxtg8tckByE2yqU5wMUbdtqHuasuwmr4HqFHr5tE1mYdL4LP59G4heNm3",
  "key21": "4bYHzPQbQi43o4g8w132QhjtCSsFap9AT9XM1a5ec1DLDTtkNK3JB3FhhnpEZfvM1C8HpNGxyL89uZbQqUimUBZ3",
  "key22": "5F36rTsoHWNPxrhaoxxbXqmrfCK513Bv99kmAMgwHUHacZVTRLSMYSXh9yTYayVB9YrLrpKL9sNozkDepJiMsVHq",
  "key23": "3mrJ4SZv6FTv7bCin7ce1vwHVBRn9Q9v4TZctrcwK5eDATdRGwbVE9KtfKgTjSB9bpzJaoWrjVFwRbfvKvDy2Ekz",
  "key24": "2b7FG1ijNjPdspudCzo9enHrzY6GYQKyqCMQV6BVQWBshuMMRi3mYMzHCU357fAB9YHUazTiNFs5x9bCeRJ4cbch",
  "key25": "5TowESEJvRZV5zJ9RD7tQYQ5kSqE9NcLVV7kq8sMspzfpsUHwFpwhsCqV42n8jCSVdjACxPqWyNADpf8txfpaXfh",
  "key26": "3zgR3i33AZZGxRKizEB8UfdpufFWB55HWAVf3fU63ihSUFFstMGtT8YN4xKvYmPovnfR644aKujLfws1VYtrusZc",
  "key27": "CuiSZ1DTSccisTQMoiNfX7XX86GNFW8mPZVCAzyahEXQQftquwa4EgvDamJ4W1kVEcoob68N64vdcjzeGjQLeHe",
  "key28": "2unr2arnoVgKoei3wXRXf7hvSVkoQpeTZAHPjqwyqUmrqiJrU1tUq9kdw86MFqzwGVFGQJsxdp5Ts7qTT6Wug6DG",
  "key29": "2GCK7Yyjkz8SPMNyRb8uZRQhUJGpus97Cs5AkWSA8RAyXMTETygAi59L4BDRGujrujkUAkHxg2RWXkvKecekZnGx",
  "key30": "4VWqxQoeNZzSKCHqbi3zwB8nUgpbHZb2ahz1CwxsbpRaCdupvWzB6acezFKXXBsdL6yPRTmrREbU3XeeV6CfWPmB",
  "key31": "31HjwKJp52atSuC14wkYYwz2idPUxsf5SwsGVPSFygHtPoeE3uv5JYpDJAkc6kqDqefY1MoAFS87zVaS7UnEruz7",
  "key32": "5RtN9do4S75xyUzMY62fc1jaRaYaWoEypyVXPVvdJj5iJZQEnj1uGUU3mmBev68EMt5j36zZ9YboSnVguuFtd5S7",
  "key33": "388DpXHaYS5XBZqEFLuGJtc1d2iG9dLcEovVdSz4gRRscP7trpZ4XYdb7Y6hZkcUY54LqjcAWfLCjDjwmf3qwR6j",
  "key34": "4YAAQUqjYMzTRV9Ym1ErNaVu9fZmzGaKqjCq3fYrMGt8WgJXvnCdrLuZRnPSWJefxngDFyrEeGVF496gqCYybzoH",
  "key35": "CmVS5ed9AyVduLP4PTHtHf2ag1B9JNKGa9FxA8CyubgZWZj46C5wK3BTg4ncGCm1bjdmLsEpiWWFf2GDbYT5X2k",
  "key36": "4gjid4xjQ3FLyM9VaXvSQ3ULZd4NZd4bf1rPWPNreEWe6QMgQQsaKAx1ic8JojZxgyV8hM6bci32xNy8W1nS27rU"
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
