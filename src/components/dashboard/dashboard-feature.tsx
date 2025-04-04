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
    "4FvYYstGjPMMKxovUWKHmfjHXkJXmsB489QNENrzR3MPJJ7BgfFcqVyypLiWs2PxFgteMMs9hdMRiJLEdcAKF8bu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LDQroe5tcarT17vYDs5Vkv8favdoPut1R67vmZuzx5oh5mEfefkPn5jzrS6ZhDVj2oiX8iQKQorJht9DeHjAiia",
  "key1": "5oRAicMWjNeSJFqzsm9acC82AoyR77y4ohz1Sqyu1LHUfpn914YB9JqmMLrrfkdqzTkhg8wketxocqR3nNWfj7rL",
  "key2": "LesKLiLQ83oo9cMgxNyds52WjgkYnZdyndtBbrwadtQvrbL3dexQqU8UxtERgmLoVF7TqXpTy63KuRZZQzDU5eh",
  "key3": "5FziYN2bsh7uUBTgpXKLL3L1yst8w5RquNfWJdvnfhLjMD81oFJ4RhBC1Rn57DsmW6gMtBF2XgmXdv9geN1wkff8",
  "key4": "4NZtF4Chgaba9UiiZtiYRHQCjgh4GS1tsh2yC9eWGFVBEnSaRgQDgSpZrerM7rPGu79efyaLuUgEizwmQWG5Zqm2",
  "key5": "5G17P81RTfrNPHFSFJiqJtUpCS4iW5bM4TezM5F46ffm4kJ9JeryGAeQU2JuRSS5WxCv84aYoAZTXSUCyunVL1mc",
  "key6": "5yXUwEGPTh2xyy5yJmKy64Dp3VzFi9t7HTdHvB18qToy1a1iQKT69Ynxbhw5z1emDNyVdeCP1MdwRjB6fa8Nh6wt",
  "key7": "5vWhBAQmvfnsHNAjfKjWK4Y1mvAKaJkwAedn42Giyn5HN3Pauqmpfj8DWWFS6CWyjsMX24nvhnmXcmNnW7x5zEuY",
  "key8": "2KwjxLB7CcXrv7XuLyW4MyCaj6H1zYXTNHQ5v9ok53hwZQZDYUSBTSGUw2imPNbukpnmLRv1zBubo3nv66JyJVgd",
  "key9": "H76htSRaV8TgTxRhiHnXpRapfQQZLPmpJYbREjMcoswoezEXwEBpKgsb3own16oQsKru59AhEA4bAMAyVsuvPdD",
  "key10": "3qKMRUvX6hNG2Qy6bpTRAmvcywv4LaH6Kn4T5yfvDRMfUbt3Gioc2fxe9RksjHg35yoqMNDk6nUBjuDg4H8RkCoY",
  "key11": "4h5F4bSYwTse9J1CAU3zSZa6uRn8GkgiyoWa7433cRkGvDeguynf2MHCJ9EVXhSDtDhjnhKXJUsSaD6QvyA5KQTA",
  "key12": "4f52Mfz5m4Rk6e1SMmYxBESLHBnm7EiNVrkxjF8k3FPaTR4Hk5rTJaZF6bdmQJ9Xr3bUTJhw8nCKmKpgQGn8FQow",
  "key13": "gLX1kD3doDR3uVbd3S9KCA1u1XAKFEf53GA1CixokzMgQnq6oHiCFwdjVtKDD9ooxa7L433HV8ruQ6wH3Z761n4",
  "key14": "X7h8dcNseLLUqSpNdcVmvnXne2v2mBSKtsCftmYVt3ALJ3GXTHhdybb6YDEiMPRHmHQAoebuRvpk8C2zuuG7hMi",
  "key15": "3kRCTBC3MQ3B62ERCzzk8wZUkuzmsd2adWgwfbxvEksqttzp4V5ZFZFwNPgQjfSNwFERRpF6zCNMQ88FGVzq5z49",
  "key16": "ZjKaeh5traCBme4FG5bfDKUsWRuX8jEpJ9wQrcF2gqrJwDptSKpHytiyFYqrDbFc4ek2SD6YLhk6tN165pu9Yc6",
  "key17": "2mcK4aNvHwuzp6EYxxfjoC3XyjupHsz4LhzR5xYPEy5gR9wdDURbYdoQn3GmcszHPwCPsPiMyESUdQbUfCkwFxaD",
  "key18": "4SZkgXEAfDCtQZCD6gZTb4vpdapjdSji3WE61s6kNJymUvZoxz2AYRP4zAnYYoHP4HkttJ7XUyGdK9xFVYdnKHjT",
  "key19": "GT6KnCnTwRYRQSa7ugbSwusbrCXxAN6SFPmPptxTqiFgyPTMKuKS9qpAFjqNGWvqCYk2PQiGFXRSuUew6FwAXSC",
  "key20": "4cRx3jnA7kV7JZ1ErCYVkojyjX4KyiW8v7YvFZTtpVa9jz2jWimwYjYqXzf54uTyiZ1qvjceoAEUWXCKvA1w4yZn",
  "key21": "5nNFDBDuKX8WtYYbMm9zu8ULzfmVsHXv3mvXdnKUD28FZrkzerNUpXBD48XXz9bpmge3bMGBkhX3VV1rCv8MyMKa",
  "key22": "aCe5yWiJNtdrpM42TzWFG6rbxLiPWmZfsDB76zUbNxqLPfik3Ecy6gKcVhhQBVLByjARLBXG6KSqoS1rCicenU7",
  "key23": "4X5WBjSqJ85E8N4PxtHJKGQLbT6JP4EkE84ZiLRekxeuPVzs8FMTSxs8ifE8G8yctz9jee4A5eLAVpyBm59DhZfA",
  "key24": "2zDafwnXw1QnoRSR1PX8HwsnpZEZRfb2ENsmBXTaMBMqLwHEpnhyV36GS1ooF74ci9Bfq4z2M9rEekE8xrbtw3zH",
  "key25": "4v4AoewujhiDHvrjxZ5hbyPvQJm5pgroniBKKgQZFy1BiVTebQo29tH9qBMyKqtqXcJrpo4FX5sHz5kTgDNpgKdz",
  "key26": "2aFuSm178FsPn5CYhvrWctmT8eafzjhmbGdTG1vxk2KFfCNQPrGRhWXParwq6SrwjKF6snWe16WTsNJAzn1SYrwJ",
  "key27": "2S8SYB6WA3Je6QJttFDF1Cu4ZscUnnddpopsUknfe42xeZuTL1MYVnxJuMpSVHpg5ZtFSaGhyS7iq1EZGNwkvyVg",
  "key28": "2LCWEKRN5YYYvZKXm4nK8iJpqUBTTboTaWh77he4qPYdMXLJKr9P9ACP3mNszF8NvU2dAbYTxoXWM9HcrivrtytD",
  "key29": "4bmwZPZC5hDtzjAQqycXHpZpWVvVKet4ZmEsrpKa2gNuiPLJAvpn7SdCm5DfMTnr5KYfRXz5VQkXYEC1TdbDHAqh",
  "key30": "bYvsvxd7FAyeLkxbXhrD4YqWd1zYrSNUnzUKXcZ8thHuawqmZDnmg5qaubdjSQYUzrqLaty2S9GLqFxMqNm4xQh",
  "key31": "4j4D6aMfZd2FjdSDifePEotfevHw2ThbeU47zLSv3rS2ey4htG3kf9E4xWw3akEcTPUCNL9NtxxYxqSjZYj2UjzH",
  "key32": "4rpkTH4oqgWj643ZzqHFYHnydpTA7ye1mLDMR7Lw4STJ2TeZLF2efBsjQqPE7NbftgdeFCJdaqkySMuShEgfBo1e",
  "key33": "oA1U7ifCFjj5KQjJso7CJHuNHbuZRmmctBT3WxjM2pg8gHmQsZfDdKEGvAUxgHNUJfJfvVwL99RWk1617EzH4Pf",
  "key34": "5yABBFjPEegzrxFPtKSBr7sgurmyTmdxb8DpGEfVX9Eh7dMcXFqGu8JiH6FxAAo6DYdawCydfXQFtxPJb2JvqNPH",
  "key35": "2QY8U7mLFGdFamTxLZcVH5uWncZNR8XnBDRQHdfVnb23SbBtxmPWBw7zG3hfBL1uxfbYt9mWPQNMaqF4amrEQehA",
  "key36": "5JnmcosUJ9xaExh62UkRW5ApiGarp1TESpb7jyf6yBjDwcWWxmmsgWUpvudCQCPUutQ1qzvuZAcqyaX6ZNPsMYQL",
  "key37": "3Wwim7anmNsdqkP8uQhGp11N4h2HSGKkS1koziAP3nhfbzdfVfNjFUNFtXMaMpMw8shxEAfN2mn2d4QFinakrLuP",
  "key38": "k969wJszfBExUha8RjbomsUQBZoecu4WgP6tgJF1eMae4PLLnK3bwDeboQGbLLXAEGu2QVmB9EBohFmLiyWk3bQ",
  "key39": "48WfDxDg5LVYmXXG8t5UsgPSDFyQfWNthYZYu9W1KXh2HR8U8yXyR3Qh9W1cBe78KchUe6kZLW11gquSzFDr8jgm",
  "key40": "3jsGAMtEwr5MzdGAjfW5JiKYLHGQ4DBVw6kmszKE2f3jRPocqZm4JZdRxea2wy8y3rS49oTyusuSuFibBGBcGRf7",
  "key41": "Qsp2EyNGr813bEkRwimH7974XM6dct4PEGEsVPGDWsmVDbtQfsYKchQcJb83W3XovQCKYNo3JgqvfZh3uJTtP5H",
  "key42": "2LYaYEfRWkYafmxuZMrmyKG9qRdEbRGVsbkCdbJsjSD7GwChmydVvfabS4C2AXDwkrJADZZ2gmUkq7HpHThpbpA2",
  "key43": "2VQ9jrTyuNtuEPtjBmbUYyEY1aJ39TfwupPKS3MhHR6q3NTSYZun3BU5yhug8NUetkUoTcDirHiRjQ6YxkTZggBT",
  "key44": "5U11YtT6KsAHL8j54ywHSL5SkCdTE1UjEbLHjyfX6M4AUhqVUUBbn688ozjBwnYzu98ueZzhdERUQSDyYaUjUQzK",
  "key45": "4LGfjWdx5Uciig6ppSfQbi5sDfsZZJvXpLVPMjoUtBtvBZEuZpPEHwsxzdAMRAKPHqFz7Rzz4KWyQyQdwFmqCg4T",
  "key46": "4hVPJikcwVSc9gcV44oNDaALsrqFncZdzvhgP5Jadq7yuySMcmV56jsFJzrME9w65yq1f1LoB7SFcZRry1vRu9Hp",
  "key47": "4sqdXnxJqD5zdjeL9fMV5m9JLFhTghyMABWZU94beeSFd8CyqZsJTjKZcUEVk7A2kAkgKwHsX3cNRY6uwZE99Dkt",
  "key48": "45g5y2A7vYjfKSfQzoHoVuFpA5zqAfjtskpwh4dxck89sPqvaWvX9r3R69FX9xgfHc3Sas5YTKbLhJDtwyXx5kCp",
  "key49": "5JETxZrwrAzqCZvN2WWXBGZjMJxq5ZznNjpjGngZVA52LZJKSwFn8ZxVsaBHNRDJPvqvGmEpPEVwoGLQwdKx7cXW"
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
