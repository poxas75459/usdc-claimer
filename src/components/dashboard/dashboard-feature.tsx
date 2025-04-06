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
    "2xqwpLW3knFNERoHuSa8N5Edt87v5iHoiD474cKNXBSfFWPZGQr76K961gJijHYF1wAnJNATLByeKfeFq7VmFMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GJ6xrqETWLLXy43jo5NXHSgbgENDZdUQNyF4Qe5JAGguDf95yoFMBcw3VdjPSzf4RhVsDbW9cGtPQkzXYv4v8pa",
  "key1": "55DoQpYLkEaYUAW8cswZZWtVtHnNLC7bHGJp6cxCNfLZhdkUQCnAH86Wh6r8foWByk1riRPZDC7JCUsUHeASWzc",
  "key2": "5FhKR4c9gtPWPXg2tPmjrCzSwkfegGXKagvxrSRq4NcSLyopRvgbXzYJKkdiW8GLDcM1Rgj7WrCArzDpyMMgAZPW",
  "key3": "42prwirry3xMpga4Zfb66wnEUU6CgWEax2RdThgjiYvX4r4jQXwhAzKZG1Uaf5Fs3zJMWaDEE3sqVArLaGZCEqfA",
  "key4": "36G8KTVmL4FbxHYMtqQbpcVy9tvkxa7ULQg51MvA9NMVCyKwyi9tBJBUtpBQWrGX7SmBjVGpL7keE14RG3TQ379D",
  "key5": "5FZFQxjyz1uZnhiEPCha2Q5uEgS6cFGPkBeCCu3NXkV15K5PKjkeu2gEs8JJPFXsp4YHGkXWKYaqfEjTuis76JGA",
  "key6": "2x72Na4BtYYqUBP1uE7LGHWVLi21r5Mfmi44p6AepqAUM3XPTuop4RD78sw1R1ddee7rBpWsTW3u49yKorsT3EQe",
  "key7": "24oAbLqZv1Vjm8zszQtY5W7zGbPZrWSRHsFkHj2YTkAHJLKEqkaCFWbur49Xj3bSL8ginpqZUKXqMsfXErhgyeJo",
  "key8": "2EvCM3DaUDbmj2pMSoDCwhVvK7PEfrmzHNZ8uEirsYEpQ5gyr94FA7QwyK7bEPtuWS9uPVzoFF5GDzP8VrWGrwt",
  "key9": "4YD6hvuYZyhoAcT9AQP9N1THggxsrTmAoMQDvS35P5rqN6wA7pSSSZj61nbQJyRtx4RFeqSyVKWkLdoHsyhqTsUW",
  "key10": "u3izzgXz2X2NQLvVQ4FcDZQ5jwPgXJ2QXVuN8wJLdZ9NjTpat2zJXVGgQBHjcCdi73QNjFU65oLobckGNQ9iWuA",
  "key11": "3sAQuNurQQC5R4UasBuCuAYmM8DKU73W6ZkMR3U164ze7PtfdsCck6Zf686jQxVZ27aNrpNvPifhvtYiZ6k9fw13",
  "key12": "3s24em9zzYjH7DZSDfubFCdvKoT7bZFuM9ksc4o26yag4H8gCwfzkzL6295LkMFcSR49zDNZnotkRXPd4qGLWK4p",
  "key13": "MUMGsdhatEaEfrVE4JH6EAqyNEvvHNJX84wViujNnmci7MWDwqBneF22iy8xDcwNXZkt6umN8oW8wJsxrF3LfC4",
  "key14": "4Sn44vRAStgVsd928mCcKrarKbsGY6tUDpZuNPubmcQdLpEPoqcrrgwZrseHSC6P3jS8kgPi4pW2ETautnY4W7yp",
  "key15": "2UBeCsRzBhD4xvcVsK7HitJ6ATgDqLwDmvR3XZohi9QkYQcLtmmTjiZsy5dhZGtuWc6xVGJmebrr9yqctCPCmoSe",
  "key16": "2YoqtBhcDZ2vNN6NexuNBMYkksq2gpCDSrsa46ZuG3NATLGxE4McCiSR7f8hJ5kbm1TFgCYLvUhM3jTffMFxPhrB",
  "key17": "44C3h7zW5yQ2WYbubXKdvu9Da5Sq9XK9XExwbR3XWWq2fS9LACwGGARSDUuU7oPjwNC47u5FeChszzY198XcMX4h",
  "key18": "2LcM1aWsfwZcDALW9d1uRoyyRQEwr3wxvKGZ8VZR6gf6nh5ABBFefZrMrtUZeRjq4pvMJngKjpTU4SSMnrrebPs9",
  "key19": "ggevn3kko3HjMAvF8u64zwaGCN47Y254NYdqKF9AG6jPBzH4REEpuqcbZMiXzVWALeKMTJJhmYS5eqZ8edraxtV",
  "key20": "3LxMTp7xZgvS32QjYFNphNph9guCCdjNuUMCAmZL4rWr4BUHhZQjxqsiv4EdJhEFnqoFQG28W6R2ZTHhL8kUTTQu",
  "key21": "2dvQcZWwehX7cddENkxQmEKfxq3WJjgY2dRu4FHQFwscLXyyuyv3jGgvPW61czu1Q1Hz23tiXqBoFDPDLGSEwya9",
  "key22": "vhCqx1xxWgR9bztD75TkAYNuVNRqnjfA48jRMS9PnSavSzi6To4XEox1MWpNh2RwwvNDg2jw6AFJEJHroeWExKc",
  "key23": "MX1FRdh6BiVCW4danmmGp1bwrut7aJ74gP4BgAneVEravPj1994ETwhshGpiSvVnzGfkLSzzD1rkxpBFvyRdu62",
  "key24": "MTQx8ig7mVUjfpsvkAfvbE5oqxjmX9f2wkz77ZDUUYAMgNgEkABfHXt3vrR6YGfvTrK7R9jSeHYFxEB2KF8BL6C",
  "key25": "5Bie2DrFXqSsdtgUbtpdGUf5R4Ru8t9DRkNuWHdsF1M2YZzuP5rmkoVQQ6ab69jUPMtknHpJEZuy9DXackct3gA1",
  "key26": "5xSfwZ8FupyzsZQyQKuh2bF6EYMAL6NC3gZEGs9hgLLh5qhzbJieV6sMoMQ7sLVDvcb4bvkryhdm8eCEGAwosLsB",
  "key27": "54ncDuTAYkRhyjUevqCkuvkLSaQVvqHnMEm1XeXNtF6GQaE8jdWoyLbfF2SPwd7KsRMPYnhmzioEczhMTDGf3TsK",
  "key28": "4sZmTpqTcXdGWMe3kxsMg4GNrZmrsy53ykFAEGWuvrqa71EERyCg7FdabqJ6HgVsbs9JM3YKq7nHTCV48qRkq16F",
  "key29": "2GhpcAvksSjkWVRY9oATLhXjdiQFcT2LF8q5bzphcfcuGzT2sJNfojEtGpjHiMvHe3j7wkoLXqmTfs9dsE2QmjRH",
  "key30": "4soXvqxMH9WjwyFcJJrM1zT8nr8USvxbAYfAE3xffG1viK3QY4ZiLyNtmtdF13GFWWKBK3dpRW9Rj7imvNj2biTs",
  "key31": "5Ja12ejf26KkprUxqA1zXRAgDiAp5r2ojbdjxxbAXEV2QH5q576yofLLme59RpK3KfPpSAoCNJghEZt589V172zn",
  "key32": "3p5kNBk8Km12qjwpM9Z5Mo8hmKtBqX3NDUwLS1kXz4uKe2K2jq31DSh9E5LgUPM7EnDjq9QgJbkQJsetr13SPYD3",
  "key33": "44k15icPVHCQg6D2utg3RsKqmGrtKxVNiV2qGJUoe8guA2tgZBFSDaN87LVaL8ajrprL19oivhPdE3LNq8YpbnGA",
  "key34": "4TwCSs7kDmZaEkkgujS3hFeXKi3hcoUjWgfCcAdvDfVkoFS1jmKSGbLV6oWCB8agYStMy6uK9v99NtWPMiid6Jgr",
  "key35": "2hWYUQMV2tQxBioyHcDSLf35nGtoNesMm7JZvttJ6nJYs6b15T1fzNmBJPzn9n8S4TuMJTnCUmfspMfQRr42Ynnh",
  "key36": "54zxwLhb5aEeAHxGihGRkmBG1CUmVDR9CJAkCvVriYMoaF8k11Ff9rNoR32NeDMmomh1WZe3VfyGqxzv8F1z3ghq",
  "key37": "35QTdD6cEdHaz9hhsPShMhstu9rU5Gf1KuedX8sQgyrbF71v1Xc9MeVfT8bFQUAGFezcv3g4RscUAqsrPeJhtBBw",
  "key38": "2wiGcQLfmqKN9m6WWYw7BQm3UQ6v5WrhyAr2CzduVaCxU57LMY4NzVa5Fgfrx3bnEyjS4rDFBAbKvchW4k4WQJYc",
  "key39": "3jjF86zrFZuyGdTDB6ipxDxVSKH7t4uxjhnh4K5rhrr1GbWwrJRSXUAsQQCBqUoMoyZaegLV5ShKKMVxGwdKYopx",
  "key40": "2ponpyVp7PDeAhPmdHej4fmPyUn5mMcyKFkfLUTkWmQ72ZWuPzL3e6UxvV9FvV1Xm5n1AnXo4dw1nCH1fQkTYG1z",
  "key41": "2WxfhwvHaz4g6Qdr9k2mbL1ETVbzQ7wLgXHKn7LpDwrDrHNmvpUkEQ6T7Vb1vNSXYQTuKoy17bAmPpbWUtY7uaW9",
  "key42": "21r5fH619cEiayfHdegk61nsDGwDDNPBM3CTiG4pJPe8W3MdHU8Ao7QDrP7EAxXq6zjqoPBHYCDqq7psfzghqGVS",
  "key43": "5iDqvE9ifuhxG1DP1PY3qYkQ64SJdoDKMHj5rtqDqtXar8JyVzrNyiyeck2kwsZqYSVXYGiSceJ621JmgkxbC8s1",
  "key44": "xqdnqyGuy2zNec9ym1KvGrTmQkMPQZEDsJ87UhNmMaJRgFfUFEQzxHbuTmr1L8nKpXnyw2avp7tAN1Q1whdkAGg",
  "key45": "24Jj9LUbptqGUUfXskF7BVCi3wPanwjw8UWQWarkYmUMZErXYpCwvLzA7hxq5Q3xWy7haT5Kqi3QacWwoFrwGDqV"
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
