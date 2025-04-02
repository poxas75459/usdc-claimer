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
    "3F5MTQGyHVLndE5RGyhm4cN9be2Qix7AXeqpfzb9kyDcPqy1URCEa2zRV8Ti9DyZsvBkMZFiGv2A7aWTKK5kbbKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mtz9AMr4Ebzu11tN5AsKK87SiJ2aikKDt1F8NccDXB7LD7jnEe47tbYyyeF1GACQFqSUXwHFt5DsB2KiNKmmSTr",
  "key1": "53SFezeREP4z2BK3TDGecjUbH3d7Cx8nMayZR166exXHt4SYEK2Whas5yUAXy96xVvTzprdZdt9Zg8DJAD3vCrGX",
  "key2": "4u3ius7yDHC68afy3YNx4HuL1w9P25C7kHQqDUgvHwBbPDriQhn9o9SeRSfEEd1wDPiAf7bxJqS8Bz1269BfYgVN",
  "key3": "2pNcQPkQJxkTkAmob9Wg1pMVLiGss3RUerBDVGNpVZmDBgrFPsvALcvKM8wKYdphRxMPDJiQrqY7kH6MF3XZ3rh4",
  "key4": "2BjiJhETnF8ZU7BKcK658uMNXLnG3TiCg1G16fJ8ckcNjNKTYMhaNQgtdopcKKczXJuxsVa9GaMV9vec27uP1hce",
  "key5": "45owFg9bcZDZyMekdQxJnZ6XZjTniApMpQHqP5244Y5mgsAwSwJYL8FXdcdPzBPDt8cywMh6AdLKvVamSqNuA11k",
  "key6": "5k8dXVsZdiqKBBiapHPL7tuXZfjY4xSZ77qhBxaGDS18qCFATpPhF8iVt3kn4VGfdPHUJ7Z5E7JKmYLQ4vhRFTuG",
  "key7": "3rRgRg7xKtEyJXJ42AuWn6vqL41chHLZXQhbYzAM8hkwSyDXL6k8d2ZgCRPQjTpye7owKAfsXUx2YtzLH1rx328e",
  "key8": "2ty4V8ZAJHkNGZaWYVvcbLcrZ1oiDeAeNmRwrjM3saXEaNMyPRZWNZbqoGCHyXiiNvs4oJnd2ityXfhGkRCnzb3v",
  "key9": "2ErS7pamfnxeXBiicywfaGjLvrpiCHjgqZdxY4qtKhAruCbqKYo1GAvpymvRDao55KhyWE5zmcUiCkhzNx9HLH84",
  "key10": "hy5kpKCUXPkeEL5ozTu7WxEytQmZ1yW83GUQ7De3WnmMmnaTYKxp5Pt9NJe5rMgQksqp4iBkcPNuaXsykWEV1tL",
  "key11": "hwQzbSB4UvJT3G8qhq3bSjPJqKD5NaVohmFawkZSbv87MQdJJx7NaZK9u6J9GKBNjgJwS1WwAwRujXGSs5vYG8H",
  "key12": "4LptWeMV6Jg5wSy59N9TmjwtHSZKmjkCTSfZgsXgqrck87b9FX88ENCtfBMMxfGJJWFLq9NutDkUbrS8JyFQpW7G",
  "key13": "2GYxkgcMV7BopG2GZnoGYwRFEfVmP3gshaZ89NTRrYYN26wyqadxN2Qmz6KHzCFDDojPpAGGPHEqaKV5pUZpAWjo",
  "key14": "JYDJUKcywu8z7H6Y9fxBwsh7Bw7ycCZbfcsbPTjonriKuJ2d4nyFfScLy1ktp4ZJgQ69op7vskUm75JsH4sN5UM",
  "key15": "3imQcXaGUnNU3JWmEiKT3BZsQLtKGLph6pJvHfSVEbofg1MCzWDcvmPC3AvZx2cjYDJMUuTSL5gTBjk3ABQquMyu",
  "key16": "3ddj32RjB2LntzTqFRccmdWc7kLr8ktk8UAg9f9LANdQZC2QPqt2KLcmK5EWgcLKPDzUZhvZqnrTZt4aSMfU1yaD",
  "key17": "5SAS5m8yoCDmFAMGvUfY1t2bH1xY5dCuLYfoczNdMCAuv2nRLjADSkn8ujSoaSTVD7YoRLqejdB58Z643Fytj3yt",
  "key18": "2LgG6YY55sggxUPMi39Lo38xEd8N72zE6FwwXDKo2BWfSW8Wq5ddncQZzJ11D5mtmCChM5trsmSnkxN4YzJkS3DL",
  "key19": "5rePn2fnTe7HxDQUqV19QdMt2qFKJGNe4ztNBD4ER1VWnPjvd69t4wZJZXPNyVVLhMRNhTtMNDvhn3THuDJLkccA",
  "key20": "4225cmF7CM4agZGxLSMrHoAhDLJCL8hSAPVH9RKBt2FWZdfkzMg8JAJYMoP6Ur3qjXGPio3wXegXz8dyaSUyXHS2",
  "key21": "4gWoSYq1bfEPfWuPdRt317xSyuUQVKiAE2h9EjNfSj4WixQdDcVMKfuUnrQmUsSiyMcfjbykyQn7yGHVCgN8qY36",
  "key22": "DjnQGQosMLWCvm8yZVxUqm7Bg3TuH8UfmnnHdHzexqyWehAGvcryBzACUkRRbYaMWRqdhv1DQKHSnJdNSm2KX1V",
  "key23": "5ZKdjkXQdmkyd4DrA2fxBAS4BLNx3dunXfbZqPc1mBpYrzbXtuEX7GyQixPN1Da5SzvwpB6WPBNUS7P1Qzpc4fEF",
  "key24": "62mFdFEuaTMvCB9LXNtfA4kXuZZys6etbqWqN1KK7YgZ1WEaMFei7ENJP6DYz1mftynEWYTW7e3CnV11q9ZmgDJa",
  "key25": "5kp7WVhNi53n7p9d1sUtML5Sig8fjLDYmmbDnmVK3mV9o2ydLovs51GaUtTCDXDb44TErVjzRoKX4fSxsUskMQYm",
  "key26": "29fpPGMeudUS1R8eYuvRPMt1gYLJbe7AJHR1cxkALhdQyi37F4dTYXRhrhsBeSMxJeMEUCdzXHGdwQpEPKHvZGo6",
  "key27": "54BB6muWdkLobDSpRHvJpdQdv2cr78rxuzfCsUqY9t7MrpcnbDygv3v8vL9nDurXmHfdrwHXPguqFMR37miu9UNp",
  "key28": "5ftTvJUhXk73sJ8J5hxTLG6NpsSn4UMKvUQPGMG3C4cHrXnMzjqmXPatSLsn9xtUFahzTdqwGkMibLdRLyjJBUd5",
  "key29": "2H1aVtFhFqJZd8y9Cm3sVzfo4pofDWBfvPZxBPzLuBUsKxiHqwpbXSSaR4miaepRem394yM9SXHjkEyynmoRgAzQ",
  "key30": "4rAcmTX5e846gkoSuoqWe29kFBGymYmHSS9DEFriDd5kUjucM1uLYe6Te6Sf9z9r6twKkHMKK8mXBsBdX6XgqDop",
  "key31": "48jFE1z1VPm9xQpb6fZeGJTcqkB5PGYCBzkfx1pnB5NfrD6YKcdo2wWAPkivhzADYcVVaKL2GrnJEnw2hwdrTvbn",
  "key32": "2QiDazHbBAAAF7arFpHqMCfaWqM5Y4qBdoTNNUDxNYxxbLEDEecLZgF4jm2JcBnZyw2KvZhteCVqYY4hZBWt7bay",
  "key33": "5ZD9R5aLCDrXXcCFavLLxehbQCvFP77gjTU7bS9yHafdWPVKMhB3tt5XXzdtTGFep76eDE2oNAK7ZeKURsj8HKfc",
  "key34": "2NUJF97yRQh1dzBnzCnnPoTnETJLMAqyqzCRXu4oaB9Bn2r16tanRnUd7JDBV7uSm3RcJy9eS1TT5Qh1ZAZHNcgY",
  "key35": "3XjTtQR9CT4pK336wX5L2Ld5pKE37eEML7C4gvWHUF9JKcRTmzcSCD97MvrYce7b4aTtvnvcFoawAKdM14FpqhCL",
  "key36": "PHayXnph8pXBZErg3gRv2E8L1nWnVZwNMwfNyAfkp8TbS4SWuti9hUtW56vyGo7Cr9uEHfGahx1yzPYKqA49oms",
  "key37": "2okk28ShPvZi761gtd8MvvrWpdvtxLUhNt4zgC8sFRn17dVFDeY1fSpk5DNHqo3MDZFLPBn3ydgZdcL4Jct9NnYf",
  "key38": "WkBFVu3G58X518cfXyfh1oz5MBbVM1By4f2zkaCuZbyUaBM1wQ4Hvcvf56FKhAqbyjMkQ2PYjLhZ7mEfH4oQBpa",
  "key39": "oDG4CV2czx7qnpqfqRc3xoGCu9TYBk7Wb5oojxWe6jx14NsHYj7WRtrbe596aDXhzEMvDas819dSZgxVnjPaK89",
  "key40": "52RXjMNDum5k8gDFGjbyXJbVFdQDs3RVctTxrqygsSWZNcFsQzgSZJm6n8rntxLmN9e6Dj8R2ydKVe3qQ21AeMi7",
  "key41": "4jyXUDtSKP4miRfrgz9oNrUCBbmXKapMxb5pDpg5b2MUZMtXLBwPcBv6fsCKvYW8yzTshpL6cyc88u4g7xBbuHG",
  "key42": "452HGLTqFjLQYxzCiEpMi7Ew3bvCYRkbbRa6SasZqaiivfdb2zSGyFSorQj7BFHMT6kaPH7fkttiwS3CKhnsNhfa",
  "key43": "2RrKc8yqWsLYxhGknRQX69QkQywQop5g6pBw8ztgo51RT3abP1J7SBGMiEZpGZtELPvSqfkC7S6xJr2JDVT8y7Xr",
  "key44": "2QdZnK6r5zM6m4X7AWCw5AKMMA678pAYupf2HzeNCDk71RjgR1fCD4zRBEcU28RH6kGnUajN5XRNaoAq1tUELQjr",
  "key45": "4uCpaxd4ERbAiSqdFysk5AF6Xf7QKCicLx3F2ELcxtcTb6GCKXsBJKsoUYbLWBFT8x5PreYB3CjJv77hWaBN3p1N",
  "key46": "5EAHFvb7eZPxwMS9KgAKhmX8eRdXJdSQRpVH4kmUux7rZKgZ52gCcYEXH47ajkKaVj6PH6aogE6VZupeB5N5LDAz",
  "key47": "5AKvVhtw321DEBMiRdfgt57nwsxEfqXpAh3i6w6wFEJwNHFaXLqJDzeBFnYtJbvrMuZHcQ3WLcb5DcHSyaHd4G52",
  "key48": "8gBmcqtpJrVNrZANCLWPmi2sSSZd5Q4QHHsfWNXqVqTR15Q3uvPkkXcpmbRWPmtv7EBJvy6nTkUNtMb4Nh4wJhy"
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
