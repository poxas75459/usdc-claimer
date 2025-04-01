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
    "4nF2Xzatt28qFJAD6C3EYaFWKZyFsivwwEHfwvJpKXwaohnBUWxgL5prEtJHafBb5DDaGFyFyQQRwKtf8ouEPj7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wht927k41sbxMf7BkwH6sJFEhNUnW9tezB1CSmEz22AJzx66iZxMWL5s2E64twbW9jN7vg5MbQ2rTTgPaAqk1Bk",
  "key1": "2ytMdQrCXtU49pkLDajHzjTGXbMEFYCRpSNYwQF8XznAqtPx54A22CiAUn3t2koj432zSCnqCutqQixyeiYvYcJj",
  "key2": "295iacFyahj5RkBBxdi5Jq2r6QGL15AGJzv3zHU3pL2eumkYsAC9sRzfbXzdgYJurSWekiGoR82E1HhRHH4mRnbm",
  "key3": "55ZupVwivkNVsEGpmum5B91sCmCt3rtvd6sjkWV8vaAPJFz1JAwm5YvGQdU4vX9kRUsTF2wLmj4aM4UPCM85wzWh",
  "key4": "26nimdfsWe5o7DT49doPU12QpD5yDHcdtigYLLLMW5oQu2eTX9eeyFafdGSskZ66wcdkbQ3rsNZBXWWDDvoZHugg",
  "key5": "5voFsj7fDLnjom7Dd8Jrxfqhsw2vkX7etsAuvmHtbJfENG4dSWubiHMy5H9mzv7VJpncUiqros8msKfGGEW2eV15",
  "key6": "5cByhFRaFJqj9GHTbTeeXM3gx1SdSEs4b7DbkTUJxppn6aSFM26RxKTKG13aXGaB2tVg1knYEYaKVME73E2U48u",
  "key7": "XLBZiANPfy5Hs18prB9bwB43uW8mSEkR4m3xqC2dJ4GtATbhNtgkvKhC53gEeBDJGiatmmKu9hGUtF5RzDLxX2T",
  "key8": "2jDXb8QHGtwMoBYMN1ZvoNFro8YaUbpMcxkhBSSR35xsJmpN62821mLmJG6ZcSz78hQDSNRXUtAUtFvFw6mQ1uor",
  "key9": "4rTRSBSnFCftbctBYYxvh79RQiBEAp8LbbPE92UMf9pSadVxX3ZP6qSUCkQGtn23M81Q5QARUSCAg29f5PeAJacM",
  "key10": "Ve4zmBBU1mbvJE4YKzVgAKht6Yz8rM2h3qUQgij8QQojHoA2TiHwEKU4sBSTVWA1SHkz7d9p9ndR9iswkvPy6xC",
  "key11": "5MiQnUd6iKFdnrTUJzUrfWKvN2zci1yieyfFF4LgiHJ5Emw61n5GmyFqrsKmrLroJPuyzRFebkf8bgGzaj2J6jDG",
  "key12": "3rSPAE4KQS8LJXHnonSdftipkiHvXYoDkwFwYbeZHTjLqJZTFpuHj9opb3GDNVcVDwKWiwNeM2Vo1NuQFFd1FjoB",
  "key13": "RRWQaHWk4ct7e3Hc5m8LWX3Ti9sciSfsNvF9uqzpB1fmrucnak7wnDjNaX1ReLimZGoEr2PRorfvCi2ie1XPtDK",
  "key14": "51D88J9tSxBeMGpwWnB3d2NvvNCyB36zvSHPZ7HFqcwMEcz33d2HrJ1zWu7gwScPQzE54tciTY5h8QEY5vWVgAvW",
  "key15": "5GVPbc3SyyUKHxJ9Xwe251oPrpLe7Eixu4YZ5s6fKX2jCJra7Hp1JmRhgDk4EsoCrHq4b7iR9KiKoq8HQoVAMShQ",
  "key16": "2qbiaQtRfCFgjH9ZoEpiZrA5yJvTtFGUefH2TEFe9r5jjea85Qka9rwuSeCoFA1zcUrNnmW4WQTHh4eg797Wc73D",
  "key17": "5PiXN93rG3svxankqfzeej1Kj3WBGjZqiPheTo1BpzF4sw8A1EHPwkZFQabA372aDZzmgdYNcpPJLX6nEcwA4fiL",
  "key18": "2z7ocpEPPbrQy9muTAzLTGLtsDW1JYaod5iuyryAXMvL9qKzeTti8FN4YFJMmYfK2GCU3nKvHqePE9zBaCzGgbfm",
  "key19": "2r59F5zeq6Qv4A1DKo8hzMHEfHz3wXQHRVNZnuZTaQDsneBPdzUJZ7qvARzBDyDoVSmkAvDTJtzKNVNfxxQXhmbD",
  "key20": "mpKWbFRtNBg1J8S3i9Q65kfrF22f25rxf2WxXKJvBySyjRZ1n7n9jZ3acDnXXoBZsDdSHNW1HNpA1A6BLJbMaWn",
  "key21": "4QA4fc2vzFXSuj26U1cjCVaSDQwca2rNHm46ihaodJQjt9SuCzH7Gx1VHmfEJLNsVBDr2pswo7unrA5dBxTh3LvL",
  "key22": "39H27LvC4JHwDh5XgbeAkXCntEQkfBKxo35wv1VzZE5zo97tNn7huYVj4aXxwkWEVz9Q9RzKXMLxZz555aBM7Zh2",
  "key23": "2iks8imZdgLdvkKWwkan1ziLu5EHNLw1uVDryDZCQzmsH6Gkr8MoqMSEUbqaCm11vTJ1vJAVBiB8yxd9dxhX2JeB",
  "key24": "3vCjrAqRghezUrgATxciU4HpjimXc1Ch9DoHgPLfFKXE26FH3tfgKuVh5ZrrSauayzqTrJev4Yc1ZQvk2knrBhc5",
  "key25": "29CRu1cFPe5wZMcvNCfxrzDia8DEzjU6bCZ7L9DxvwW3MFNG5BwVzy1YjD2Y4ZVzzZX8D2uYFEa3C8i78u43CGbK",
  "key26": "2TfghLRPJVeP5o1rKSdtAJXs7EKDFd19NZNEWu5vD1RTvXDQVEe6smSGFY71dxbrxJrvaDTBQ1ApZMtLqWpM7krb",
  "key27": "MMyCCLLYa9Vec1QapU42Cev43577MwBGn2KTQwGwMp5Zx1rdnpP3CxQwyxL5PBahrZUpV5YE5rjVwvsX3jvLXXR",
  "key28": "HwXpdKu7yWH1STpVZcqBTKHmuohT9YAz1ivGZnRsnP5f7pkZFzb5zfk1Ur5jxQbnMimeBkoEpfYXMraw3bnU1LH",
  "key29": "2zmw9YqGv7s8MaeyjW2vabDowszkkYAL2WnYwTkU6ZKsQ47qMgcCwt5KQkWaDFd9EZ7EEt3h5PutYqMZBt16WPHF",
  "key30": "2LfPPpYVYTbx6C3jueCjdPviuKqj5b3VHJDk5WfSnaciuGN7zYa8ZPufJWjGLgTMEyyzDjrP3LenPU6zdMqmJR9B",
  "key31": "5HutLKxeVHwknHjuyZu1hMbSBAYCBaW8Wc91io2f3KvHMz542iji9eBNmVttyjx73APf5Dz5rMLUYtNTdK88MVfj",
  "key32": "4zWEmcPegvvT9KVkc3qo8NWFpwGJeKuniTonJcaFebYHU5AkUoHbWZ59szbvwruqTVk6xGVkBY1NSgumqRBC5QPp",
  "key33": "62QMNpsPxoqAAettd1yzwEpCJyJ8fhR9p4WjKm4eCdJFv38ZmYcBCDacmPftdyzwwGGyEYFNQeuMk3ZyTNgLq1Pg",
  "key34": "3WPkVkXXjy1jPEaiGoCN3b2ZPiVAG5yyuTZYE9KPxENjYz3umsz9sWBFPwoLK6ATvacp993UUkHSLDT9koEiiwr4",
  "key35": "4stGAD1n7AYWHSa9qXvsQNVSX6RkbQp9WNHwtaET8cdR4qA8pzQq89u4bqGNQ9KReXHsYg2XDfyqXVnYgvBBrT8h",
  "key36": "5UKd41DnWzCBeC3Gry2noZsrP2PFNL37fyqq4BXdVVc95eRb1RxE4BF4Q2grxabBfLywuDaDbANNZDpYwtYcq5qG",
  "key37": "5XzMH1RX8usXgZyBsFh3G57JN5GaWByZeei36puq7Xz1fdvKJegrUXaDB61SGU1ZxFFvScct7vAnboKDSWApWcAy"
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
