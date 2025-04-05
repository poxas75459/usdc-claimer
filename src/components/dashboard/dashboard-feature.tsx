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
    "2ib1UfUw8uUPH3qwZNauCoeL475Ak9YgK7rsmUtKKwqrSZ9woMDMN3TD687RbJ5puokbVST81NVe4wYPk71owLNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5te4JNBWdyCouxVQEbxbj7y8zFtvN4mxiAxqRwiUHqx8g3R5LH7bjRvRq4AdyhnvVhXzHebn3ZqMDPGr7Ggt79xB",
  "key1": "4Zo29YSjd34wJqzxe3V1bF1q4E7Zu7QdCh3zsKqqNjxHG7aeKe82ZRZNukpzhAdUjwfV7wXPoWYRNH6mPYu7AZih",
  "key2": "2xWX62CCyDHc1Dy2VXdK1ZdCMxsWi6WzwLVtWhiNSueAqmkd4qskEYUQkesot8tyXg8apN2aGs51SdCyN9FMeQHy",
  "key3": "24mUkSWmdTdpbt956AB4KzqjXhgsgPTdeNdgm674pMvb8YnoznTxevjkmiraE6toxjcLi5g5i7pfHU1t67nm9awb",
  "key4": "38WnVY3FpKB5GCB53DGiyAoPLQzNpySntUzerzBRCe1kc835CjsrL7XKESuqMtX8eKi72W22CVVNk8H2am2QRCdu",
  "key5": "3K86JyMRo2j5x86Btu1RuoDMQJG4yu5YdoeZT4ab8Z5qgA4zYS2wv6c4jxnprjMJTyFeKtbpyoCW87V8B2LH64fz",
  "key6": "3f23U8bARmDHiQXsu9PVmqGSTeTTWZZ6NseLS68hGJFCrHehP3FbCsWHZ4Q48jAZ5qMWDgFk2xNuv3VJGL7E3NZ3",
  "key7": "5NQqHexVYeBWgeqz22DG6PEHnnUVRnNexcq2XX6A55NYDoUR9V5ZSnkYYNbvUemH6ten4QLfruo2ToqMyfz3EEFP",
  "key8": "2D6Rmhxf9qpkyba2cdFXVbiTW1zWAF8wi2qLyWQ1PXfHhAS9jEebJWep393QGy6bbd1vjKpCu7b4GirAUCaNdysW",
  "key9": "2Ke7LmL5MseJWZBG7a9FXYmnCAsRKJ48zrhExqPU9SLJgMCXAxspu6g6G9SfPtByMavjynw2xGxYdsDFpgMFfiY1",
  "key10": "5YRbyBctT4pcEYabwDcwLiyta9Ao6oj5ea5x37XW95uiFiYf8MQ9GFEQAwa3Cs38hp6DDif8QEwBBNgx4GuJJWyW",
  "key11": "Tdcrma6mFVtKZXNX9Yu5g9dtUTkynKnVCNXZiXWHDDHyXWeARN3f4ryFWPQnc82MQFe3ZrinAJTqvXCPWgfEtx9",
  "key12": "61tnGi66Rh4gxhkpxVouq6Xm4YAepMwd2WwfyAhRwtRU8MbKLvumCDhMzLkWUQ8ezMvwzzd6YcHV3EzjjiJaJU8h",
  "key13": "CcTUnfgsuSLyBSqXxvidvizZVnMrodrXBv6WUgcUibsbocWVGN5UMd421ak4ALbTMte2LuBciFgJNAe2VHqK9MS",
  "key14": "3SJTdNPisJGwZ8QsvBgnVoHqzJcUZf82xtPNvnfEux2NLv56AFKWCspuXq4TZfzvZBkfwEQ7dLcxXFgcWBQ1bpFw",
  "key15": "4VP4Q4TXn4NKkzRuLw6mMEkLy2VSeK6xyMNZzT8qP3Qvgx9dtBdcVpsVXHqdhGPtpZggGSVCStGat7Gd5fSXQ6pM",
  "key16": "nSzzHqPQiC6KjdZY2Dg4zdJpctnYjJgaFLjKFLCzZ5UqEK3kkrtGcxyJc6Honw28V51rdVZtyaE9spG8zHvkj2n",
  "key17": "2fSozdsJrPF6B68yFt4SrGLHYELfJc3VbVgkVj9kwpYc6nzQSzf8CKnCwbbcjNwfRKiiTvTrFkD3wP6C3Ufw8vfH",
  "key18": "3DBYN6k2c6VMqPrbX4BiM8G9a4uoBq8F2N6kgCsi2RJAGf2hap44YhJiY2taPjrSPmFwj2LNamdgZKRZ7aBy1bN1",
  "key19": "57vptrgGpsVGYmVcd1NnfbqgMCGTuxjKCfz9WD5NaT42YDMtLtDKv43ZcTjP7CugucBBTpoywS7HaYPdG1wuY3rE",
  "key20": "4N3uQd1Dzk21xbQAYgZNFxJfxjFdGYnGawTTrw6eAsUhzPRmhJcxV9F4bmooeGucZwWAKp5zftVRxRP1u57V4dte",
  "key21": "guBiy6gPbRXJroVh8kULMcSfvRGpcHoxZFRQVFtYdBafY9y2WSNLwu9zwUcVzcujkg3qgaSGwJECwMiUuJPzozT",
  "key22": "5PTab6Ru47dLMBrgFDUJqhXhfaZXjeauHykNCfhASX39gSzGBFeymzG7B4Q2fccf6PX9gqjAyVNyeyFSkyPJUqv2",
  "key23": "2e8QRjcj6HbAj6ycdTDU2YVNz8e7mj3UVnjEsP32uxHaUcF6vTQ5Y6dZtkRF4LurDEtjWgYgvHn84mL7b5siBfqF",
  "key24": "ubqouMRBJ2ncpUDme5Fnct4gYMDHEdJV2dhnELJDwdmgXSwHJpnDMncJUFfKsQ3MqVknfz99BmX71uoLhRuvHEL",
  "key25": "yc9abeFsaNp9mz8YUCrFQ9UHZ7ASXSybRS3kCFjfF21DtzeATPmcnhfBdrjpxYCjkXMEXAMokWrHmNGNEEFZSQZ",
  "key26": "5BkvcjYqfk1xS9GkGsELpio3dBCX9WjfEpoiYpAz1kzhBSAoiEXRshWwD8ms37kxviKDQRzfZBrqJ7hhMXNdAmHo",
  "key27": "4zLP7LV9SinjK5NWDKo4y5BLJKPoEiChLMEdzwvt4au7JnfPB91bPJPQjqmuRMzW752jxyQLgNruLQVBfJ42Y4xk",
  "key28": "2Q7qbNLq16qUBJdZuC6xRvbGMZmtED3pX4bKrw2gRdDoTDVqHwD724mC8vsQBe4xrmk6iA3TUfCy8uWNqba5qAxZ",
  "key29": "4y5qoim3iuSajj13awga54uMxTdonM6qq82iYbGbKbwxVrowqnwgEdymkDugx5iNbknLDYvemwTyzuY4PLtd4y2K",
  "key30": "xWfWXPZiKMAEKo3nnAcPp6vaGDPr7X1Nv4SDuXqgGzXAXRSZ7PhrNqNRkSDm3ULCySZFCzhU7mmC2nVq3FpdxpA",
  "key31": "dmg72Q5DR1rvxPSRbbUNtvm7tnvMQV5WJLf8dwo5YfDbLjxUgX3NP82yN5VW5dmxRpfPsCJh7qVWsQXCcwakseK",
  "key32": "35ifymNngYN1R7Hbaph3gQJRtXs5Uf3gK3styAcw237BgrK9aRgqHoVrxenPWEPm8YrciDnPQLA7rbhd3CHYqgPd",
  "key33": "ccABJ9bw2HF6WHiVixoLbDrodwV5b1Q7AT59LLmChihPxv5Eobf6DHaJEG4VuWRTE6mLAfAwcV5VNix77BDhg2y",
  "key34": "KUdaw3BKehprmgLozFcsVoTQ9DykiHxdWGrfmJtQzVumvKJwCbQr8m2HqN1vSh8tzRDMSnfBG99EpBkJ6VrRYKM",
  "key35": "3a4rqPTj4PkUspzT1PPRTeozx2omBgNJDhUUrkLJBLekWRtiFpCfX5oisJZfJR82S6bvQaC65C1FiqzXwmG4tHSG",
  "key36": "F23SZ5Ldx1T8j7WRnFmzMQN5rXMFH2Rf7wu4Jpd4QYVowbnYTen23ngRkkak7jqA6mrvQinxH7KuSSjiHwvPgXT",
  "key37": "2fefJ7RYU9nuFQLAPJ45mhfmcdLdgCdQQQfj6KXWLNWdauq3N3VBVcJ3pdmp8Uc2BXibQxroUe9KbLUHt8rHzN9p",
  "key38": "4YKk7hSxWPgRF1BkwU2a5GM9nfwiTg34n6urBxb5c7VVZRyhSG6DCnMGQQhhoyGXU2MM6eXBeMQQKhZSeJPKhdZV",
  "key39": "3yBMY2qhrpdFmsbGDmS217frsiNHaNDaoBfStBArKrJpdoHsNZavq9dDj9Ez1cD749ahB3mGJWiucPQByeSEPhhJ",
  "key40": "5AMFSTzCFkoyT3pzvi6V9XWyCr8qHKrvn6MDbP1qgmT7tfsm3RmLM9qfxwmbtukDKHy1RzovroG3cCQ5NvXeWXAs",
  "key41": "2vhGSk8evyAKWwaB56bTxK5BerR7y3T8ZFeFHeRHkbm95Cp5WLgtxeAGheeVD7i61ycMHwowRsSzuuvLokGrmK5X",
  "key42": "5nKjYdbNJkcoGC7dd9rAgK6qrURj2PSe8g3FbQY6Y43UyKYJ42VxsqGeUAveEdEc54Gu7hPgB7Xitf2pCmv24dc2",
  "key43": "3Wd1hDJiwWXDg68ewybxJyTzjQappxWLeLaQQsVtxAz74aSZFZr4kEHN4me4EByssrC8UJX84Br7jbVU1gLXpNZq",
  "key44": "2ewXGc4Sh5Qne2yNoBLqxi3YjZ1i4JmAzVYJsrFcVdW5GgrUkviCrS7J7sy3JaqUaSTVF76FnihqZo9yQ1gVd8ED",
  "key45": "4RrveiWLN18qr4H8cm8hem9urLiLWuAz1H9Jq9ehhMwJkAJ2j9JQvgLbS1iExK4yytpXMMi1vv8bee16djvYU4Su",
  "key46": "5EkNeSDWLez87hzmHBUAp4sW9rkHNAod25svNsFywwQ1VPXwShyutuq3BMwRGC83SC2f6e5yiCsJm7VcZzbX5akX"
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
