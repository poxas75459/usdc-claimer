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
    "4Qbm6dVUDMRyVfENu5ftNb4hz16Eqr91AoAiLP2NQ8LTwFUAHVgfdWd5iisspQ5nJ4RkJepCRhiL3wqd3QRWiPSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32EmbpadWnNSNwdbG7U3DvFF71i1a1jnB5GzCc78Yyzj3bqfjtBNcxuRCx4UztfAvnE4v1F7nR1yGGy6j6yNrUMg",
  "key1": "HaXZpSVDvBi4NRY8fioUojf73TWYe8vsPzsEEQdyiwVsbi18MUPddR9kU66rmMEcS7JoijHKBa1aAU6X6C3i5aL",
  "key2": "3xFWZReXAUoXVNzXnhk4ab9Mo4PKZBt39iJcwpfrjTyw9WcXwwP8qzYWDeGe91e9dQ7qbrFuS3szDzChgGTdhHaE",
  "key3": "Wh7bQpvtMp9yx3EPSZEv3ucn6dd6Zh3Ljx91hRhKmgqVgTjhK5YMXPwtj7GM64kDqWnNFssV6Kh9jDrdS63Bhx4",
  "key4": "3yXC1yLDABf8Yh3QhV4ytxnbVj7ekEXKtxfCpTW5Bv7n9h2475DaReHuYEWr1LWePCcwpNKk5fHz7dhtqmZus2jX",
  "key5": "4seYnkVxMiwnDiBhMMEQTMhGiKUSTr2x82fJFXiMsDjY2YuYS2APQ3nF7CpbaEE8wXaZC1K7oHPqm2ijUk5honPx",
  "key6": "2qRbQR37Ac8adtJGY9tNibT49HBhtYiwTv4NLXAkgVYWKYL8jznZPqgVsyHyjMadHdTVsqFNwkem5fvzAUZ1xoyb",
  "key7": "3VKAvLVTkvb9a3usyDUez5GZ7MihsNVpj9Q1qMpj9TCuAt3XipU5zUzvuhcv4VymWs6LoZAQSGZA4MpEXVz1s16y",
  "key8": "Ey5u6jrPZPAt1rybC3PgHJShtX9sa3o6bhixWszzPEtwp17sCNPjri5seKDk7f89eXkA3ujHmcPNkBz3sxjfAuZ",
  "key9": "4mVH3DL7k14bFns4FmoCbT57XYbNB8iUx7sCNB1F4FotFJWUu5zDgzvfrYufz8Z14vUNDvz6yce2Tuv36hE39o4D",
  "key10": "4QZj6w4kgeQqoVafsR9CVVz8jFkgCYrdkgeFndBpRLSoNF6w2HHLj9jpzmCELpSqjdjwBzJqhtXfBRshUsb2cGpN",
  "key11": "T5tMVDy2kbkqaw9jQajeef6knwQRXLM6FPGaXskoroe1mcPB5ZEEpVG7fSv3bxeqb2XtJyWibwn3ub6zYFR5h3y",
  "key12": "5yngXLy1F9hQpijpuEbX1gCDy8htLkUFgFfADBZ8wxPxCcX1BoPfMWsYorj9moz84aTzLc9XEipvHaSDPn38TJ6Z",
  "key13": "4MNjYvXJizqbhZzCcqRDGKt6UysQfjcuFAHH1SaeKogcb5rh3ytHjeJrHzLW6ucrX6LTmeTD4tH1H3QyQzxayXf",
  "key14": "5zi9S8ZBsYmpTD2vLyCcUhinfUjupMejiUGJzYZMFzH1B7pKbQrDv9wXRxxhjK46D8ZJRZcbWxUjCyoaySypZDRu",
  "key15": "5hadG3AjMWbXdxrVFvettcUNqJwRKDv1D7861mrTCiGVbtwcogfVxFeQGGoc8w32b1WqDSCYYL7ZtbXUrU1t8ZoZ",
  "key16": "5Cff6446LYiP7JMo2MpEy2VPvopbYAqFzPbfYo4hQ76BnpF3TVePnYyBVaTpf37WR8jbu3G3gLBNWgzmjCZNRqCK",
  "key17": "5Rpxi3sqiaCpP8xioXnfTYZakBuLUJuYzrHd6MGweHXHZUirs6GHhc9Eup48QJjzRKNmn4rmsFEQQdECwJ5sDEfa",
  "key18": "5AanXbDrad5jdeP92F6TPXK8xme93beiDPwqmeSGa1GqDsCfCct1EQGPxuVuKh1wYvXRXUFNpepEpFFniYme2RZC",
  "key19": "3mxFT3G6z48b4sVTRt3j65xUs8Y3vvPmp8MLARE1W66bJtCr42m53h8MeooCVbgskKkUtsu9HnJKxRj61V696Ve7",
  "key20": "471zuneuu33R2Wj6tmqWUDaPzgyqpV2bQJ9REfp6QMKWJci1mZTV5txVQnWEBCGjUuKnRkkaQ1eqTxMMr3X3Lb9g",
  "key21": "5EqQmxgMcyQwSEkBNb5LobTvCDS2CvTwpJ67Pam2EjDaf8psmroP7JRED2jeucHgEP6qUA535RD8HuyXAyB8cS83",
  "key22": "5VGrdwXwXMq2BkqMXYtj7k233TBUh3DkCcs34hnRJhQuqQSVhvQcCj9KhkvviNG16sBR8HHNRwL87LGNHGwH3XBU",
  "key23": "2eUmk8PLkB2u8cz921pzC6BCmm1n1m96dAsbsTRocq3RrXPYGPJHom78rD9RcqW1BDaBEQAsF9jBt8gjWFWWyniM",
  "key24": "2BW6PyUbpMsRjkNcdRGbkB2myZy6HQgV2E54Y46GSD1wCDVhnnGmkbHqdByBvxSYzHgFnZgRcf3H5JBTkEjv3tum",
  "key25": "4wnnd8onujcihoGM2LoiFaHx1kAz9YzgmtjYsfw2xX4RcL6Wcdq7bYuitCiJYNTY9nR1w7oL6fuDZ1mwYEHiCjMz",
  "key26": "7p3ukWvY8RLuTV51fZfmokAnCm5KmTPSSR5MvT6Xipbw9Afcm9B1qeziiR86gsXHdPPNWmBZN6LXkSYfmzkwnde",
  "key27": "4HM6SEzMtfW1TCsn8qCrciKQnKLUq5sNBSWBBwahjXZpLyVJjapMHHZsLUb83gMF6NaNUAyB6vF2FfaxuDeJHEAS",
  "key28": "3rucstT9ZtmdZvTGChQ2mk1q8k8tDziV86TZjBX9534YgK3nnBp5q9dxuAeTkBocM37GT3qVotGivN1Xdj5HdKTU",
  "key29": "5Pnd4L22mcajYoQCKaStKCn1bUZgdK3ewtasjh6f8BoR834RhJoPLSUj1g8wVXKrqdgD4kK8717HnbQCzKQTaEDW",
  "key30": "3j2Pu5daJHtUrPr3TuRL6FrSGdXfZCP2vUQxB6DtQC8P3rp255FZXp2srQiuE1Wz29qtu4RQt2Tuhuhesmhhn49r",
  "key31": "5VrJg1JEd6kngsoiFyQXGPdxiV3NfqBizZxHkqjSVDzU42c4DSfLKNwYscwJcD8DdGwAKa3rwsn2vPKHZmzsJ5ea"
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
