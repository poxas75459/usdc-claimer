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
    "4fsv85VYqrfApn56uVLues8vCjBVGA8NFCkNNgWCe9RTQq9fsZjmisPFS4Hudz8YM6Rrh6rkWzeUS2hWKAB4Y2LM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sLwzZRzv2TKi88YWmhC1j66CVuTBVqNKNu7qtJyEdtcH3vWLEnQdWqFAqjgZLrgYkvjoFbm4Sjfnjg3nyjbgMDq",
  "key1": "5si8bVvb4pte26FPrubh2NmPV9PSttsb6HwXh2MhVkiRnYuWzw8Dk51fSuFfaefRiWGy5SV5QjNsPa8z4wkS573B",
  "key2": "SBfrEzvgm23DwDRTDru7JMyja5YNo8KLmeZj43xea7neXKyxzy6HaDYqYmFnZEmnNVjiKbsL9H4wNvvkKi76fSb",
  "key3": "3b7UGT37sS2bPDDPjH7UaHknspz2zQzoAHAJP9tU4GyhpinU9X9sPjDKro4YLZUk5UnqTfbEiQqZo7NVrNbqCGMC",
  "key4": "46uL9xCoBgcBBZVWYpbKH5LtBr7SyzqUhSz7iVJ3fc2GPhkCZjgybAo6koRnnNCgSWmYuJMxZABYduvxtDkPDWrv",
  "key5": "3PkmDneCVmz49keEpF8qRyzvWHz8WiGejXgi7xeBR9rrESTEW7zA2rc82mY54JZa7eyeyKe8Bk56WywNdMDFZZUz",
  "key6": "51f9pe1pc21W1Uq1zN2x7jjCvtn3t97YwL79o5D9foptEGaq6rzNfj7dCxzn2xJAwJ3S1z35fPB7hNjoGVA1SCVj",
  "key7": "3KJD4BYKP9RAVZe51enVKs1F5XyiMjWzKS5DQP8cwxVaCzCek7oYKw5jrjqyXdAjGkW1VG7N395dVpvDjWX6xMcy",
  "key8": "27BgR7Xtt7VpD3UvHCJ25vQUCuKFsg8mkne6FkaYfipmir9QfJWA9n8vR8DzWtHLVZtDPhWu5vouhpy14ad9DiaX",
  "key9": "f6naxGB18bDemTmtvq6i4ASQAQwedhuzbN9btrtViakVWybJNyGa3pHQN6uuV8xLiPUihfHpy84nrf6imDwcPHu",
  "key10": "if9QTZb95a2pPVx3hEkopyA3E2cj4hHu1L8AisVKjXTwKFvLnPaF81nK4KWozFGnT1HG617V2NSHdvSfLqBjgHd",
  "key11": "2iwsqipVs3BRWtRfv94KLeCyrqjNw38aw4PSZfDxMpZWdmFfTQHPFMZpUBqASiFS7ZJtZdPRAFp36C3v2skHero2",
  "key12": "2fsoGP2pcf722FCN1Wp8PTR9wM2GNDLQxe2sMKYjvk6BaCSPCnKBche2pRA2ZZemDu8zDxPadKLGGE48DM5UG8qX",
  "key13": "3HMVHTYCBu1nrRwZc91avBnRiZNox1xmDJXuZhRjAt6E8S3FTWEwbM4u8652XV53RZfadKDE9nnEmar3oj1Wiffu",
  "key14": "WifoDCJV5SLukEvqVBQXeDwn65hpEV4CSGiPUZfQKGphaMHNe4psx3b9inNnPpveKUoZS631rKqBcozjjb671aF",
  "key15": "3XYBgcbsJuAKcHDok9fWEKpnJb55WymATjHozmq15yf6H6i2NheCo7uKMhr4TRr3iyT1f4kUWbxHU5E1eq2PkDfo",
  "key16": "4MjDkQALe9VYmkhNamTpJcp3yCmrvNiCqnPDA9DBHcQDvvtYULSqRjbi4AMMgDyantNVqGt1fHsVso7TYMFrM5kB",
  "key17": "4dnt9gs37EDLnLiHkvBNLbnJZxg1RhhcVnrLk7npG6c2NA5GuHPKLH6MpFm3ZsekWnuRSpPfMxnCM2HQh8TwgVNL",
  "key18": "3qA1wJ74nnr4tjLaBz4R5HxB3Yja6UgsjzWhFq8FyF9JWCN8kcfWzEZ3ufut17CdtmXMqsMeLcs7eb5ww6opj7ft",
  "key19": "2qA4uyDTzyAAVbTYPC1MUGoBNzKx6vBuBKichPhsUpJ8Aimr4tDxjFUueUgZNr2UPUFb4jrSNcFiJwPaN7CaRx1a",
  "key20": "abetGk1dnswv96gRKBbrwUZrWaPD7shmTKXPCY9ups1Uy9Chqe3mMAY3sUsTtK1faTpZsoCKKq3dwSMfX7DQqPt",
  "key21": "Mk84z7YLusX1wb7reP9nDMpWm5N3WD97FYpJjZaHkh5FLudz8XkjSxLF6dg5cQkVJw48HpqXWTZeKBU45EhhTYJ",
  "key22": "3EmvDgm747NGmCDZ3XVjxo2QPUeUhTkAogwWcstwCcZaXmjZkoNPqA2CJQdt5DxuSCiAtjmPMUmzZsBRK54ECr6P",
  "key23": "4mYUxCtw936NVP4y466nivis7vKf86VF6hNjH4SnphDQVyz8wqQv9z71AMvZtbrHfbM9eAK7mFWQGdVKx1EpPUSx",
  "key24": "NKkvxVbDgcrb2c7b71aYLS4oMSK6GpYo4uBrjsxfpyXiBPzNZBd9WZPio3DdVghUCWN951oQdEK8swTy4FvMsbo",
  "key25": "5U6zAqQRpZQtreFdjUicPCVAxqA1GMGqywFMTW2LhdAKrRRzWJmndGdP45qz4XuCaJ9Q7DLiPboCJHxDUG6LjoW5",
  "key26": "49sWtfCVHRutkx2Vc3UbqM4A7qndWGCkCiFrR46X5q78Ff8JxMekMkjBSqA3oXu6dDcf2fRq8ms4CL4aZoMSeT4v",
  "key27": "VLwbfb1CU2fnJUbN5dvFFNc33HNR62ca38okWCAbCD38sjJsqVQKg7aBTQXMcBq3U64gqErjGjESSa1cK3xS8Cr",
  "key28": "3sUTb8JYhNhSGsXGL8KPrsRP2LWFCADcX7BiQkWcaoEsfF4UFPCubw5p9wGdLdXC2ffYNpP3MduxFhDa4jXNfkDs",
  "key29": "4PeEiU43XTRb12zVQSszkEMFmEYJAoYaWjpCe8bqpbAmBKad4LQUPsTaA5Aghy7pfPy5Stv89uScMhTknkwyhiSJ",
  "key30": "ANbHggHJsLD4k1idy2aCwXi68PQN3LuDioVY4zguG7A6c2VEVyMSS5SDZAHaTQTMWMnzkbSbgfS3GNDnn7F7A9u",
  "key31": "cqhYjZxXSnghrfN4iqMTCXY7spdPiX6LpNMy45uMG8YcHf2NYiEMZHypEU58k1C7TzvrWChY139cikCQSY5w9m9",
  "key32": "44sQvZHiTjfSdUSqHc6gFhC7nVpE4myyKMLvNJJM2TZySaMxnodpR62bSDoL66JAxxwAooDBcXb4Eyep81b1Cmcs",
  "key33": "4Ahe75AzaJjLeMWbXkB5xU3hh29AnHuMdRxUoPPGx1XsqTFc6QvTwfQTtCuqxZ9m5R7wVrXkagxXVS2LmGGEjyCH",
  "key34": "4LGMWLUh1AfvCkpNQwj8YzTN7pzqjcFBAwu4odsZ4GEmMfYihgQFgfYxgdpuQCsiSTfS2MJhiUB7bATEHoLdkAGQ",
  "key35": "32xMes1Reu5qwEJdXB9FNjYXT3kaQxW9ejTM9GDQoA2RperP4EWVd4DHnT2bMfc3YzbMLwZsRBiRHWDBKnTTaXk7",
  "key36": "5bWuF9kpZw8dwcoCHyHUdtLezRbk2irDih8w5Lpmcki1QsotpSUyHQN2vkYaBj3azjfA7fJ7W7spBGNXvG1rDjMQ",
  "key37": "dAXAzjEHTpHs6tJqYtS3Cp2kw6S81NCc2aeoQu4BWtX3ais4SXhuGhNKVLPQpWnaW4DXd5vbeviF3vagHaUxfKk",
  "key38": "3ysH3S4481YXnd8SoqP9awGrc5mZMwEWMGRktc9QcMhBtARj3hd41yjiAjUgXFfmf5cJMfwuwapvZwBuqNhFXnty"
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
