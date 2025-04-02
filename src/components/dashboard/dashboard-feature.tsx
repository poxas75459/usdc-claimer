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
    "3cn6c6Yd2ijcAKGeEiq1A46Y9u4uiYwM6GJzayfRm9kDpxaEwCbt3HZnp3VSQEkh6YtW3Y2if2asRUof9K6yoLw4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34j29W1psHcRRmd91M3JNGM7KkPSY5Wr97CKrQ1MncQSuAcMXJGc1MVUBR95FBaGw92xa2NH5vYTgy1sVisEVnY1",
  "key1": "B125uujC32UPw7PitzKcf5d2pH68VofVe9112tZbGFDXhErXHpHY9ufn7C4TdsfSQvEKiE9YJVkfVwYr97gtdfY",
  "key2": "2ibUmdCXt29Rv72QrQW8CLxceR1XUHYsE6vN8Y28oA3X96jiadz9z9ma21kWQYc6uLb5CJfqogrUNDzDDfWM9S76",
  "key3": "3ZdEUZVqHnKpfnjnFoC2zLMxEQu1me5JWNDjFu4PANVjwmjt1egrPAkVLPLcN3uw86Bu3f3eZW3sb1dCQRmaAoj3",
  "key4": "4P3z7ZkegPcnu8d2iHKYjXN6XuJcXBuw4uHBboTSCHzcZqSpGrmQE42CEStv7YW68ZeEXeU96jLJLG35rtgQMSKW",
  "key5": "5upNBFxCvjgX1LtD1DF7PtiKVwffFavrz4w8UJbNsoFFhs4mXaqdSwshHpW5ZVWk5Ss8qhdw5fNPNp1ZmD2zMxYy",
  "key6": "2vwfw2b6wm7JRqTYdsw8MGGyF3oKx4nhfahr3mjatMVqu37uLTjrS2GyYHqZKjKmVQKEPUzY9he1YfWhbYiGhjt2",
  "key7": "56dj12tY7zcsdf1DX3vX9s4fH8yR14H4UqJzmbtEbyUEUvduYhcwZzbLzhrpygotntoTiTuqqsSJLTLwKdeM8zFJ",
  "key8": "4cEtazNWDvnRHkUUETKM3TTW8JvJ1ajvW5qaJAMHsXekv1Fg5i1cNe4THtAnyvixHLV5i4L7fLyiG5Aridyinw9C",
  "key9": "43ARVaWEuBK9B7i5idDYvm3yuXFJTUj1ob776aBTwHH5qPo5VFb1B5LNaTVVh4VSAnPAZW5HfUdgSPbCV94rBBnj",
  "key10": "4QsGPDvf3ou89UvZKGijfUTn1fzuEPGL5q8J5oLTVkS6MJdrbkSGM96WSd4PNH8SNxQVsBSeNfKXyAXYLN6hPEGC",
  "key11": "Bamdu9HVdJSW5PQcrPkegYWMQCwPJpQWwr1ULdf7yt6W268BrfsPpdTdcpp1gi5wnhf2Nhu5H7PHpYSLE8j9kN4",
  "key12": "5zndnz6WXubDYugKZk8agmXqpJoyRSph3VM3ipkyLiDWTVs3UX2XnjuBSafu4jGQPyVxSyu8wWXqEJpkFcbNEyoP",
  "key13": "355xjG7LnrbfZkjeP1CxvQywsTWrE2YV9Zm8QfrKpDggD5b3m7UGXJDtawf6mFvonTv16yf2rzTy21NLsTJYE9Tj",
  "key14": "5whqnPwsnUUN5ak3zyY865WNoaq9ktqaASDsDLj482ymH8SUGzrzcMiMVASJMQjPj8KKRDkoN539z5smW9SXGxQT",
  "key15": "3Qx7ms9653GsfnbgF4WGy3DWrBDjoRBbb9MfE9aHA49SBz1TU6rCyKbyCZJKYR9dWf1VH4hi71xBFAfWQbimSKAN",
  "key16": "3PvUzLKEy9SV1ntm2xW4wBncFC2RWXbPUgD3BeF9S5nz36be1SS6rzyGVuwSHgMLLSRU2vKt2i1xHMbKpQ211UZy",
  "key17": "4sF1VKG7LkUiPth95VmReK5xr1We8oCdtXBSMmMgqD4RCDNsgx4qHt2tJDeM3vJDbxx7SaNp3SEZ2M8bUY7Lq9AG",
  "key18": "Yz8DQLrc5nYdnNk4698vNxKmG9j8iXRLZr47kF22hVVySaePDJo228B4LGZJ5cERLrCCFFusScM6zhuJj9MnLzg",
  "key19": "4ZnDgP51sXJK6ZsfNhFEkJdCiATmdwG6iEWrwAEQfnRrV5Uz8XFwQutfwfj5cg5bhUTwUHB5VngXKUtTyUJsikXz",
  "key20": "1Lrfvno7y85wx1U7tdnU9kDU6q6su22SwUrF94ci86yFFzsbWZM95S1cphpyxyNPgYaCQ17d6HMcqNypQG7N12C",
  "key21": "LKMwuZkP29GV2kx4cLpCHLFejadR9mhka8yPJLs3dwqy1kd5RY4NhET7CCpN4gixX2xmd7CY9VxuTZkrKUyMBZa",
  "key22": "5p5iZvt6tCYdnVsoD73F6UpVHJswuiNSkyEmeJWRskLEsc14fLQvw8i7f6eHkRwckbasM1BQwsvYnpN24yUPo5UJ",
  "key23": "3m3nSDeo48TmawCQEj9u7grKKcRj7Jjz3pRLczbmwM5FkWxZrnxqBGTTVsHk3LqWo9PGHBNyB1xg3R7pKdAJswMu",
  "key24": "8ePVGh2iT93HAWftsT9EHooeuFJs361gJzbdC5Mc6mbXfmTU4aJHHJpDu2uJvVJZXHY5TaXxyHyHpDSab21rZBf",
  "key25": "5yR5VVDL5TLdKUBdbKYzEiERbGP1jm7pSfWP5xdKPMaL834hJX3X9yJX9JrhGHyYhgGrLQ8awoN5CbUbRm6WjcDb",
  "key26": "3888ofNJ6DQsyntZKkC8fAJbUzA9eergyzmBYY14uPKeM25yXA2mFVQV7whzAuNgTCGBJcDCAKWXdWtw5WnVogvf",
  "key27": "2tscC9EoBUFW2KvxbfPY5sFq5pYhaMF8Vq34aEiBPsAeaKvt2sJtFiBGqp6hEbVBVvd2Se6vbr1KDYhTZQZ3rMXx",
  "key28": "S3rKb5Pn5Xy3CdJYHqm9zX8Wtv8qzKKtRnkYqAxuooApzdPXbV92cqhEGEKzEohLkerH7LFscv1A5rrzxa5c4HK",
  "key29": "5rx6qiectxrF8T9vFYE1kxQoY42oHzv8BK6cy7U6qh8NCqr1jBn7YB3omtxS9Zs8QuEtJArsYhaHfvETMJvPMDBK",
  "key30": "45kY2KcQxe3BVJ5TZkiDSKmFvSh5wSNrsTKdPTNire9iUq7yrRM1FYVgUpgCvSW8oBKaqDPViqUwtEqE7vHtEJ3F"
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
