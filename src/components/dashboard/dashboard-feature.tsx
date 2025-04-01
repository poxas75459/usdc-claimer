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
    "45L7NzLaDZETwfQE4SRSJy53MGxoXpZ8Fzck5yjBLahoe8DndjtpWT9TvrKLq44AvPvMKWb27p9XnoDzEPQCsDXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23Pu5hUqEVBqp73fBW3WJAfAX6W4L5gfJUWjfJcgVX4ch8yJ5v1eM6Ewqgxt4YyS1joed4nxcDHMmypHJ9zBZxzh",
  "key1": "5yRYWXuQy9uW8joiNdmHoZmeo9p4Zh3VrsiYqmoQk7w8Y3hS6TfuyGji179rdvJeWqvihddMnMDABsK88krWhqQN",
  "key2": "2HNYtYvUgS4QRg7BZZAmjKWMErgaip6fFURAAsUdHAZwJsh8m36wK1wh9ZKZJe6DW4zcE9AmVkfmikB2q7qe5SFC",
  "key3": "3qkpCct9cfYoMgX2eedEztCvajKqoGZ1zErfyMWMndyvvcetsyCmmfrJFCxEcDe6BVWkCiWYHVLfKJCfnT5sgxsm",
  "key4": "2JA9zyjHrKB9GpnMfX7ugzLEfWdeMYX1fnKS1tQREHM4qTX7GFan1Xe4S4SgNipCDfx1Hf9VUFqqFyQpRAkMbKKP",
  "key5": "3a6dWBuCNwodhRnNK75dvF66b7AiCRSggBXzYkXyFLmUJ9HxiNjApoSa4EfkfFWNBnyUxihdWoxPhzjcj4Ur6vzX",
  "key6": "3YWFmx3BUqZCdafHPTJaoLv5T39B4gXZEykGTYUF2m7frBLzCrn18i9Cmi7Pg7yXKjohxKZY5igfG1VVTs4zQZ6k",
  "key7": "2YKK2qWhpNAVtsPYeGf533NU1QhxZThFM7M3N6QoMm1cKLoRRc4wNmAnMLmUCBcr187nV7jFUMoP6zB7zC1nx8Ry",
  "key8": "fspTMwjewnmXH31kAMQDjJDykFZRdYJcKvYCYtNvsKcfu4xrdd368bgB7bbzZBrNt5SRNycQXDVcs1ccieJMxYs",
  "key9": "D7VJVpbdMh4dDy8wfhAzYigqhwkBvi9fsueGCHPw9EGqfswvM2AZsLpxSb6FLcGcoZ6sqZ3bupj6NTUQXHZ9VsC",
  "key10": "49Wg2n8EvkXZrCFEmKpN2DEtbx5LdXQYhPyu4HvKzvMGM8nUdR4VTefg73aAcNGkXrcTJeM3pLFWe8iU32xpXmb3",
  "key11": "5DUpAs3hmv8asTjiDrSD7KCyRwYnTvnadcFxhpNU1uUdtqdPcRguef6ECKGx32b3Z833tdE3oFNMRhnpyANe2dbj",
  "key12": "2ErLTJhk9cxLT7zzxiLFVuXLDYHnRid2nrTsz5sT5TXNSLbLNnoea9mcN2VuByoKqkiz7Kbk3W6UJfbv1jFxwG1M",
  "key13": "5F6uUBe4q35ePTk7H5aT5VfTtjxQCuMQXqeehzYdV74szPkiQU1pnVHMAJi7KwEuVNT82WYEbrGUJaM3wC61ahwU",
  "key14": "dY1t97mVKYFJcTwo9evuksG8NhhcsSLm4oJnco95aJ7hUCeMsFRWuGxF49LHsYZWXRRkFY5F8pGwESQ6cX8afXP",
  "key15": "5RNvvtsueshvtoLpy7JXUxmrQYFzJtJsJnmUSGWpx34UvdsfXy3UF2TCYnvCpPrUdtceB5kAeEJLobK3nZHyrhkL",
  "key16": "59LbMFrCCKbH4Rt6jkzdiiyPPnDapbCMa7ic7zoQhNDEhTxAXa3zD7XWbG9Kms1cXVb4cGss7HZMFSrHRfNmyeCH",
  "key17": "4qM5tC2uN76sapNQRaCdEL7REYy1mXPfHvhDYsS5fKQJgEHWK4JAcTTSVbvvy8Yx5ik6SKSCHWHWQLn7DeXFbTWs",
  "key18": "65u9YrycP8dxXB2zimkGt5CWfjYAnNMSCFBiVQWzbEZue13NnE8NjmesWMfyqyjg35VQwVhdUJ2X68He3sNZFbB",
  "key19": "62S8hY8zU2PB8eBp8Axk5rHxNNrv45fqfrRmTiY2pj1jGb3m1uJyYk4p9B3uaSHXpVjPYrVL7Ai8Aig4p8kXr8Zf",
  "key20": "3ZN4iU4odKxqTr2RmZYgzB7VgCF9XZ1G5zidyHnrV7beDW3BUUzxMM6KuKrLo8XKwumfJxTb1fVFiZbYddfUGhJp",
  "key21": "5AHdLRMS3mhwzMrJHiwrFRgSdSzD5vubtW9dQ9MCU8mksXTHtZPSBqXQwPPRbe963vQQVjoGuaUsjHzueXzW3nBu",
  "key22": "5myYVJgJLf4hMUErmA9zxV2pXoUzaegovtG7mUDJ2F85eLp1cBsKVf2ruC9a6HhbLgE4AjhQkM1Qicfq1ot3Cupb",
  "key23": "3qFv8EQ3CL3Ykwy6PwtA7VkoS8FrMGj5oS9caBY2e4rAvQ35iebcieTFmBG1YoiCZiPuYCk6N2BP4JGKtYzy3yPL",
  "key24": "3uEiqQYTojPGorod6dF6DgKJkULLoxTEex9HCbUx78ne6dDMvL4HHGBqAprVbUCMqGTYsJqcg2AxCwE8aQni5vnJ",
  "key25": "5EBPGEqJhkZ4xydNZgQQFtYT96PtULTqZ9SUAxwctcgKsprbHnbvqGg6YXZQ7uy4hcqnEr1jV8CzwJpEbhZZpDMT",
  "key26": "45kAZ9yiHUjzx3Qki7kKXQKNkkhngL7TuQ1FuDHDYz159r34DvvMLk2nz9SupYY4i8Y1Qv2mBcaomxcxXUq33E1L",
  "key27": "2uvp9tT3kZYNfosxvzFXWmp7US7jBPy2WRKrfE4pEvCQNzJr59fk2N4apUjh82iptDSatkXAMpJKDqEXWshjbUt1",
  "key28": "4re6D3idSa9cbbyMrquWpvhJzFRGJDLMXAG3maMyXQoE8NarDkkKoXt2KTvZKeE6sHGoEL4xaTj2L3rVwSP4G64X",
  "key29": "5LHXsZ6cPMzP29YawYQWDnWbsT4xXAadPHqdVAhzxFhFVy4TAxxPZ17Zdq9FLVCE9C68GPAyjAL64tVgosubXJBz",
  "key30": "MD4cQqhyetJygQduLYx9Zg7Q3eb7D7sZSiKkLyptvE7wDvwzbncwt5ynz6MeTQfHCpgAjsNT2sax2JhXRBx5w94",
  "key31": "4nqq8HMHRLA5naj4xJpms6S5itcn2wsrJ69LNwmC8RmmFSXSos8cHk18WLYkHFuwJgBfokyR8bEU2ddjtBPAgdbT",
  "key32": "2PXCjLwg64XLvd7m8HrmBTRWXpQwcGN46vJerZ7UwdXv3VnHDuVyzoVQidNYjqwqu7EzGbDCSXUoDb5znndCZeWk",
  "key33": "57AEZUtSt2o9MBHa76UownhsanSn2TdX4LNG4mpmygmHXqX6N5qRbjNGVS3UTC6NDL3soq5PAyautKsPp4LSMHYr",
  "key34": "5VHjADUVHb5zJFwQRvcdEPSWdQkPvyMnA5WZaXNCknmfbipLGPKz9Rb2wLBnmWFbJ1Yd2BK9msxmjEmq48r1yEEw",
  "key35": "3E4gtzWQBYZW37gehht6UKZ8oszQh3mu2GA1wcAw6D4KQ8nGHBBQDhhL2qxKmTHzbgXNd3WhQwYC9rqPHxHg7nRt",
  "key36": "4AeHqhBxQMDXdWqA9nEjKhVeA2orS3xZH9igiteKasZdWYDMfJpnkEriVVSNog4ux9T9DoTmoeLAXjysNky97yrx",
  "key37": "5Wk9MM72QrUoGaGzkb2LwKcKun9FYYBW7mSUVqmDihCdEyyD2JJWqcxizbnMidV84uqqzqWhyRDocHxeueZWjJk5",
  "key38": "3iP4RqGeUJ5ftDB7T75oyNQPHFQZ1FohPqBP4GPRu3RMcy8XXtHu8hZZC3BmotzzPatGyjjaJCQbJQyL8SmY4ksr"
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
