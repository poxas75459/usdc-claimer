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
    "385UuDP6e6hJ7doNJMi9evmQSMUYirMQ5GBFKjNb1xMUgve8bABUpRJmJbkRmDMdGyQnn3cV7uc4HAvPmasviwbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59DwC9UU2Nb2HSFVdhDRp6NATZT6psgyaSpT4MQmifV9xKXAABdUoBCzUrBHVvu2Bu1vuDFYWq5HeiYcHZQC84Mh",
  "key1": "4hVt2xMAKMxfBxtvx4QwMoWeZbenbV8nTPPLK2EkjHXehkdpUHyjJUPCHe2etUmjSnoGLRPXKtLJLvT8uPUAuHWi",
  "key2": "6xiFSq8wVkVqfZUkXLZEfAmwiT8KANbmRR9NFneSJcP5ESyH1Sx1KV6wcBZji1YMTTXQcmAirBMcXAtbMnbc7Y6",
  "key3": "3GkDuCuyCvmVTYbVqnQuEfff3Wqijkj3MUKyN2AwQVjrtBHhMNX6bvvYu2LxfCMMAb5MUCkF1VndmcJa18nJNirq",
  "key4": "22HrcaWG5BEuqNZfUbAKbnECa23urUQR4425Pf4pRSNbUD44KZvkjFR72fESyV9ZJa27CJswqPJ2m9zr8eqwu5By",
  "key5": "4qhaJQdrEHyHWErXSD6s5nwkVoFXUjz6DMiVDAt4MqyY7xu2AowbavMzngg2eJ9uqvjTP65i7VUqMwa5LNxSnm2Q",
  "key6": "3d5xE8LFvAMaZi3qLcw8BPykdbqy4pGhBYu3TZ51E6Z1zcSb6ezVERM82xYNz1f9e2G8reG9UE5Cw9TC3exDM7GL",
  "key7": "5vx6V24VfBtL9Nif85u2PwdqWTkSbqyDSGYBBEPcr35cVpxbsELQEghGsdbvNnkxqXeHXgMsmFdSyPVxnAp17Fjt",
  "key8": "2NhtAtqeCoFhHFek8UJwa7Tb8VaThsYPehngz7j827V4woaq27Yr9WazE2dAhks7E7bynTYN4je5CAu6ULN194zX",
  "key9": "5yzKwC61rcBULdroyzmxV7hWqjacF4WpcFtLiF7JduxahhRUsw5w34N26PjkmjsZ4DsM55VjdPq3LAERCH1sUBXz",
  "key10": "4GUTLvYHhnQoAZSjYnwSs2vw3vdety76eRiV8SoWqbJCFvM3KBrfc6ThAibw1MCs5tY4CNXDwM4eJYY5QANTTS5k",
  "key11": "39K16aERHS9t6L1hLKELA2ZXYHvx1SWtdTu2LaYR2GCnDoAvQUddiAnMnVmDeUL6fqUoGGqB7A8JucVFNHt1iHNB",
  "key12": "3Z1Bjdev86mMo98gKkfBoTkf3tA3zogNeVykAopD1CYGcBt2M8cUMpqyUu9am6VZXVnDZkBt7sLPUJa2S5MNKdm1",
  "key13": "gTSZfkeytCFUYjN7hT8cFvutyqWyYNBdhTaquQB8HU4nBAyYHrchhSV8cwtLEopfLDxpqPCs5mnGm1THZ6A8esx",
  "key14": "4hkN8nnfcxbn3diJBqvsVNTrX576GxUeCjvt457LCBRC1n2yL32mxwkHiSetYQonkenot3wVJPDvs26fJuuGghyT",
  "key15": "2BBjKRPYApXkN8RMBCbwwa8w6qdmqpjBzkV1hJKuVRv2DcxKnPCz5wBGQsTYNrS54fCaQhL1EXofLrCCaTCPz2b6",
  "key16": "4aJMQyV3ZvKX9gVtRQeWs4rJQufikxvfCnU4aojum3vorT1Anagchtf9jKAennSiJvzpUhZ2ALAgMtXLoYtEzBrt",
  "key17": "2sbBqYxC3BzbgVZvu7YcgoY394RgBXUXFoEmmAzu5Ha9wKnUcC16rWoXPtEiG5ebkDer3YptMbxHj6B6ATocurLy",
  "key18": "2Q1dYFJtL1WbTvKLGxbg949UW8zqJJp3cw5Jx8ahfNJWQvqw2kwzoGFwjKkHD7nLXirbu6NTmEAQ3DrEkXMThBva",
  "key19": "5f1nxvMjKSysZAPS37gTa6x2SjW7A7GX4STTs5mgy15jBHJNvwq21AkYx2pNc7KyyWme3MmtiENvcNDakTCi9cys",
  "key20": "25cjuU5Rr8LigbrJJVfpQiPnqd19RJEvjTea55WYxo35HzZgiv5xLTz2qxTVgRZJhJqsXx1jeuodnBkuaZX4wAv8",
  "key21": "4iHK47uezG9YvmvBZPabxKLiaqDzovMnZ2nMSjSsvVomPGimeednBtXT86rUE96KLVEajstQDGJ8jrMLBgxCHU1j",
  "key22": "5y9fgturDuBxaEYU4cEVmc1SuX2hkaeXyspAGidaQv7K2Lf3EQgdetiirmeWoBhMtND9CmjKNo2pDtzyDgGthDK5",
  "key23": "5BXjPueYvTnRbY52Hn2qWRp9Q6M1BPHZs9TqhHGmr8fL2zhNhxyK38pLbhFizeHqdUcthvQVi2xvPmxRXttkv3vn",
  "key24": "2PNRMsPPuZKFwmNPadTJpiwGjAhaWgfX3G5kyapq1dgr3cAWoU3ncKFHUGPsDANG4LP3fLBtDC5ypw2sth8hWHU2",
  "key25": "64kp4PDom9eEtwLUtEKEHe7JExrkvHCTu9L2cBMCYkDLvJ9rzp8rEhfyiWy9hBBmVKCder6hV16sR1G2Tbpo8BxX",
  "key26": "ZiCxSrCcRJyqrPSdhTUnx28rKF6rf5FShgqJAtLhDpBCY6Nw2zfvA8AizACcfp4JW1uXcSwSZrzvr6qwXhYBjjH",
  "key27": "4YCQ2JBw5YyE6D53GeauWoNYeR7nG7tN2Wck2EJv7tzaNYMDWsMDRRNgcGKHuBfeaJPkyrsGWr92iDHguZvBRaMv",
  "key28": "3fCjhjBnifBSuf4A14EnT46dyRnZzbV7ZYk2rtx1JRBXwMTLE9NvLiatHAfXPS3tbkE1zLCzu93z36Y1cHjDEXSC",
  "key29": "TsDwBDkJH8tbwdbdGqbBJ6tRuirMkNQwJg6YxFqnkwqFB3fGgqVNWcWCSpqCk4ddGgATekJWdpztxKKgRdmbbNJ",
  "key30": "5xVXJneUxk3Tu46oihYtqFivuwgm2qmsa7wvpwfkCsKqzSvhQ9qTwwzNRVU8bNG7t8EmnGC934jM1FQ7oB4Ya6ga",
  "key31": "5hdVXgVx3oap6ywYXEHe8ySGhxPYiNLUPLrHL43AyLfgbGeaaBBrcXrJ6XzfvVz2Rs4GquwwhVR3X845odFjbDMk",
  "key32": "eEG1L8vnFACpyVaf25v2XUNajXXM1dWLHh3iLaySAaAMr8Yj5JLsnzQhyF8ZkdLXsHSRxV5FtoTX1ePxBmE7h9Y",
  "key33": "5m8pm6Tq4RjBTCSnyUCRk7uBRmqqs73Aw2JPJmgPc3MiXNn4VyNNcXJDT4GS9JedU2iseEsvBaT67fGYCeeDvxU9",
  "key34": "469MizVv73NiB8Y4Hu1GtmxwK3Ybi9N8KMj8K4v8WPdUyYFinViikc5AgtiiELTirpEw46kAE9uRxwFgjrCDwHqt",
  "key35": "4bCgUzXzHJJuq8jVmVD7sH5PDCnNw5Rjyg5aJfs2jxM1PaKZGSwPGtrkUn17UqjrjoVB2aUkj2kj3iZGXhYr9U6Y",
  "key36": "Cqm7c98R9ZkWVJ8A9nzsK6ttSuVoXtpvGibDrNTFJyoHsR821VGvFtuMEPmUTdRwgWNkSkoV8UQsfqFMwmW1bTh",
  "key37": "tuziUgPcC61unupM7XxC5knJpyFgaNf7mHSbzMNtxGnXY6enp4VZDoj6bSRdxcBB8fVfJoXcBGTq2MyzESvYLs7",
  "key38": "3Ym878Qgc1J1sfGxTTcytccDZ6X3Q7Y6DsXJZuPz6rahw7sTtCmpHig15M9RTgn3d7VVJgDodp7CX6EexvFBPyyg",
  "key39": "4qJJKFXk2QdLv4USgsLSEkuEAHaWqtVbuxdN5uowAzA9krYovQwWH1zhE6QbAzSBftHkYvvJgzXDx4vs6nE8Saj4",
  "key40": "3XFBKk29AqfnjbxW3qfM4kDK74cemrhFBsvn7D877H6cris5uUB3QYKbjhceemE9CkUdS7VTQtcmtZoNZnLUzQvi",
  "key41": "5sVubqkPkNgczUZP4aN6yihUacXmi1WUy94ke8g8GeaWRpZEagHhMfyztGUmcMBkgPHgbWwPpDu9fDdX6nDM8Mvc",
  "key42": "5sm1jXm8iNtR5sWtQoCmwkN7ayL95TSXtLTTMMBodpRJ4uCKqnzzkjQA68GVDe9TNvHvJpdu2VaMnhp975CoJjdF",
  "key43": "h8985eCvwrgmMn2Ese37NruAG4jNMS2rUSGFjsNzEhSNvS4e8Joh7N4KcejZnepyKQdp2FZ6a2hFzYpo2Y1QF9S",
  "key44": "4SBppUM3jNaSsA8gyxxFVpQocqhxbeTCdyZ69XrxV64MUkx5xXZ9Nhw9X2q5aAY1RuYgNSKXxBNVFcEoKK2dnccm",
  "key45": "3WpkasT7uMA81Eg82LHQ6PCrmiPAnWuQRQEiJgXkuANmXrWh63Kq8cNMEfmJGNyki1hDoHnNBHyVzWWPZV7ZU6pK",
  "key46": "2fcFHrdnnLrnrpmoPVo8L1siw3C41DxfMX7TSqk3wd9xUg4DNB2nKnaf4TStyaY36pxCYysNYV37hUfwp5YGRzQN",
  "key47": "4vuCD9o7JoT2JffTmRYqQ8BmtUMWWvMbi6dZpDvRwd7kTfLyCpnnetZywcRPz11RYghAJiQ1NBCqr8BjfUHtG6f1",
  "key48": "27GQ9GURiYv2WaUQYzd1p5b91HnJecWAVN5cLrARsweYqbhB7XsZtoGHLmLcruDtZUayomP5ekjV73dwuHxYVFEP"
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
