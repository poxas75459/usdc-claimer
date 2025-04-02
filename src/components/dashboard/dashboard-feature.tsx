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
    "PHgRB53sUZpwDt2ha4ka22M9NS2LFTNcQfzFo7cN4Ly1uLiWd4EGpeS6hz9pC8JjhtikZAdsoWijHnqwVw4azEN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P7C49wL49faAF6ftNwSVd1A44m5X6HZYXj6t5FgCpLWg66K85zmKs1JaUMcYAvr4GW6DGUFQPi8D9rkVuEm1x3K",
  "key1": "4y3JpiZXHpqvDsBgX3EYAknchbPaE4RDjouLDBafZR3usg4SiYmLDPaeWhyU5nu21Xtzu3udTRGHUSyFJmWXrYMm",
  "key2": "4rQssFNgpReNL6PMnmLoKuoE3EfEvr7JC7Z4YMeiUKc7am1W6WBU6KV6jaasX2BfYTGG3FgNfrV84GEMcjdzdguY",
  "key3": "2rnKeEaPX892EbR86jnkCGH6YN13Jw3ukGqQinCtPpfAc7DvD9NUhicS1j1zmUjEGvFdAhPcKCkczjaPeFeNCZHY",
  "key4": "TuLrSW7bdHnNGKfrMjL3zGf5YJvYUR3SbBSU2TDQShVm55Z6kAisyu4VWcqEbWtbUDdaWPDc69P2fCiq2VsKxPy",
  "key5": "4taH8khv1ycEdaqEKkFyPjtW2WkMrRdYxKSmUVCAy9R3V6kBXrtAkP3DjS82zgzk6FCPdvofYE7PYNoC88HqPjMn",
  "key6": "44T8XA9JGUWNAhjUephndbpirmyJfpZLkfo5BGoqGjM53voL9RRBEbAHXuojyJm61Yj1z5FCMdtDqYgyWjB2a6he",
  "key7": "5VBoa86h1Qv32QXi8NdDVwoQ2KDp7CdMRZMjjV8VrwNoy79YDx3NFYP48FXgm2HTTzdWg2Z7grsGr78yNXaosCVa",
  "key8": "2y1S1tG22YYUE9b6XiEtMH5Q3i1t4wCTGcdnNBx66NDBQMqzbfhM4wz6qPa6i7pt8Gk68siLJCbjf4fPevywbP9G",
  "key9": "2dW3cQVirHDUta1GJ4VGfoRmc627SmCeCqyxodhHmhhtksFnjEWZCyXytNW18zZqREX4DfwVU8r7S4ro8Ltg4dPo",
  "key10": "2NfbgtptJHsFmRjvWGiPxten2mDCC36v7KiJxyrTy1rxL1wS4hWHvuGm8LgeHo2VsXrZqdvFceFTBFeVt5wLx7ge",
  "key11": "Vo9c8nxSMNaJCvxSudWYkc8Ue5dySR55sjJ4pxSo5bpNx4oTLuwAEoZXNPPvGJyedLXNX4FdAFKuqJpgaThpbLh",
  "key12": "5tLD447izKstML2WS5jJ2ehpXnM38aKbnBadx6USKkAQXHK4BVsB1aVNSSaXrCWfJJeSKxhLCMKiFPJJqXJeZ7pc",
  "key13": "EaQU5LxsjK1GFEykiTBtZ8zQFe4FRKRbok74dvFQP9vF7UrHWa6WMFDRiDmVxRUvCXpuVLZQRxnG2uzXv97H58G",
  "key14": "2a3sdAYRAR5caMSH1nWTzpgJWEd3shULkRQiJWgA1gNXXUrNtcewDFZUsHt9kuXU7ciSQU44dkovLEeaLBC6Zdd2",
  "key15": "uUbumSuvvTG3b2qzEhu44PTCAfhnZ3wy79TF5w72WB5gPcQng1hFeAB8zcr97eY1ow4jgRL2BdV4vBe886rTHMX",
  "key16": "4TQz6427ZvTRCs6VHf9Jy5kie1URXDWEUDiDzVwetRzHPySjJy7mvr1VLnc2ZnkRQ6JJo4xDA5g2PZ4QpK1AjGhr",
  "key17": "njgQo9LA8v4zy1mt2n8eCJWEE5wPziM6Qo5VooyK7xfeXRYqZkkh1Cw4r5WjubbmfFsxktrCA2ZRLHx7XEbKy2t",
  "key18": "QozzGYKjjcqX2qMjnskQfUwMhiKV3EPzYFztsmYWszRy5TMgjX23NJ3sRGPGgd6hBkULUJEWentWE2okja3MUTq",
  "key19": "5j3i8jhPTR7ZTZnE7SSYypLEpcCnSeJjV2pkeNmCRZgx3bk9Zr6QwoLu8JpoiEXvAzXpaYKyYZ129SPYWNCrQ8mj",
  "key20": "5ThnKmGx81Peray3M2NYhuiJkKuojo3ZQBhZmeG3HpU9mQJjTE3cZBL5Dz1UFXgDFpC5f8itRTVRnG7uMS4MZSe",
  "key21": "5VTKBA41QaMdof2W33qaFXYfUmqB9TwNbqaQkb9GpWJqMnua56cxaeqtbnELLjZuUPFXUDY5esTmmuBd7FfrVk4q",
  "key22": "mSBbRcTEDA7DgrJREEieCTeqp3piz6YsexJ6dd2dgo1HXk3K9uNdV3kCrjxzkQDSM6AQbbjjrRQWR9LFzjC6dZX",
  "key23": "4QCHTQ53cKWaeccw7huVZA8kuzEUT8ZGJnq9bnZ9AGR7TeZ9QvA3o43xPoPi1wrgHAgstNzkncvNKBhvvJC9KfCU",
  "key24": "4Sazece59veusPN9di8RJXMzdwmSffs1F44fHLYtY6GqyneCLdSaoqJtgK93iwALLeiMZBCqLQWFzJLkMnBhViKs",
  "key25": "2L6h1BxufFuuLfKPdhvxPZf6SD3EpBymfPz87gUWL539kDCteQb2VAsY1U2CoHMSu551LSjLwDufGDSizRoFa6op",
  "key26": "3rcBaZczreUCdEBCKt7pM6jh38kwFLGPSFTrPE5gmd2wbw97WUdMFVPdG95bjebMJkNSXBatW1UiZ6LRM9BEmWeo",
  "key27": "2ug8YS7yd42ahTLgvitjyH2um3pzydHEWY7VsbrHYV7WrAXxnjHEDeg57dBPGk8rCh4YhiBtUgqXgayUH1bhGLS",
  "key28": "21u7VA2hEzydMvGCd9M6y4YJbkJFEtU4u5xPpTiCyXHWtpqENFeq3LtysQcHec4KJb8saBm6usD4sxPCwvxxmDeA",
  "key29": "5xEBwSUDNikBMQYw4t2xNTeLLakFdQRxvv1C6ktvitJMkqyGPtnU5sbXaoLVHx9nhSixZ2KoHTT3wguqwSCHP4U1",
  "key30": "298CEyYYqSGbrQXDup4uZhpBo9wHPd4rjHzCvQRpZYUMhs4vWVi7GnTwpYL3KAwTqGjofXjDEwce2bPtbTRjGi1R",
  "key31": "3Tn2jL1ufpqGf2u76JCLruYn3PaSPH4LY9EoeR5CkFzoYfX5MavTJwBYqEgZjwPzGDVcCFeHtSLN6aVuPaGDh1si",
  "key32": "PVWD72nXdD4wn8g5s7eDmAw3otpLmXspYbDVGWgdp5VNwkccSKFDAysCsgvchQtbeFERBgjhedHz8tgLz5B2kKt",
  "key33": "2eMaPeY2QyADYP1WZx51WWiJjDDB4scaz2oNsiRrzz5zuVufyb2axXBVYNumpy98G7muACD3iSS1xVhCL2N9mTai",
  "key34": "MLXU1U9nNWeTzS2mgHHzUXaDSzkAtn1PW7Hey3fHTD7J9Fvp9GxT3z7sGEiZA8UkbNznxtLU3Sfi1Vp98UzCNM8",
  "key35": "4RMgH7iQhhpNtAqEBxtHjAA41LX8hEfEeaMg6cU3tU1JEqpJGxe4Er4nruLwEyioj8a2N7hWHo46UpqNCeiVww2h",
  "key36": "5NMUotX5wVVfZGuPAnYVkhTVxpoBN5wXhsPN2gkvsE8683w4ZSfUyMXrtEChHkmThG6XkgGFQhDXkcneXRqCf1SM"
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
