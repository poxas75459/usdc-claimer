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
    "24JdMnkZidiRbBYeXhw9FEzs1HxS9RGPBPHFGmTPazLmCEfjf3aqEA72JWDA1p1ftoWVaUeaXpU8dNNcWQMz6EC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AjRtKJeGXnzM4XNbmVBG8o5Lx8a4X9rNpf4iF8bVH5v44hSyFSkq43LYa8n1SuP22WDTiVwM4yok9NiZprmvAEG",
  "key1": "2J5FZJZfmwB5FMVVCFizxtVHoEkVMkKVkkp3JCqJGHg2m6usYQ52oSmB9V8y6mdCRkKvMwNpuRN3e2H5dcYcYBLX",
  "key2": "45Y4Mfe1LfYLNJ2khvHSLnkYYudXZCcqQjruzauxnm4kphRDP32khdDsy6iG8t2XWSrHHShx8AvP1qVYo615LbTz",
  "key3": "xg7ZNRraq8eKuH7G1tu27hnrdzDmmofYrMjx6RvvYH7rX8hUZ3oxe1wCLPvPZoCsF7HbYwd9fFYnvJptFBLdPGG",
  "key4": "4Ag3P9f8h1kC2X82vfGcLh2NeEd2FFVVUvpQq46k6TmRWefT5h7FXoui8HG8EYeedwsfAkKNjwB7gkbnZFNjrPPt",
  "key5": "127u4LDdXxL6iohHr8rxMQvo8s8dywNbCapz2tSEFca5g1m8E9HvMSr4oWdaxDeLUM1Q68bfj8hsE3GV21wcPTNS",
  "key6": "HiNqMo3uxyuMx6wogca9jyWuebf6VqexQnLgZd2y4SQMz6JTZ1gCdTBZGxEGty2dEcHWQX8JH7s8ruGsUfy7t6V",
  "key7": "3oLUtGU9CBWij8MvN9c8zuLCKbhgpi9QkkK4Ma7Aje2wWo8tyTiyLBBySwmmxqwmaoiCynhZHsdcspVRMorxKcdG",
  "key8": "2Av3sBvnP5j5MXCayDabEu3S24HQGwjFCMMjUBJ68Pe57R9FU2HrzvocbUXeTypm7BbwbwgcrGKfJGEQrPWCuQho",
  "key9": "3haSskkXvEDNkStb82s7RdKXsCW45jkKvLWsFA3wqFVVcMFHZTYpDN2tucU9PZhq8aWCVJGFXr9231wuQshA9tWc",
  "key10": "BYjh4anxmQhkvQcviQ9y3sBJH9jbjoXjenxSMeNh5opXJGWXCjoFHzj8vUHfR7vdANQFeozAgfoVL5Am6GhVKqc",
  "key11": "ZyErFKbJpS1o5e1f6zSDUS8gjPBzs8rtkhEGqULwWqg2nHciPT9XrCJmZYWGusZyBZhAnCDGYudZecUcReY6mVx",
  "key12": "fh3NtYRbqnYyXD6mifPtudaW59ozDWL64W2qRVgxRu9GLm3mdi37tNECmv2fG7auJysdEcYK98hmRnZVTGcyca7",
  "key13": "4J32aeRMatJg6dqrAj6d7Jzp5w67iaiXkSqpLSrgqJR8mHHnwG5EcuCaZiLvnchpLvnLaDLRpx18NW2qeLMhtRRJ",
  "key14": "2LoJ1Mn1ifdWE7dTWF5GN15CpqQDzD5NMvr4Y9dk2N6B38Dzu8JujE2o1SvEoaE7kHuHTkbhthqMjSm81zuYGnBb",
  "key15": "tsSSvJ2cLKXULEZzhk8f7Xr9Gv2hsJQ7wwSt3zjMEsWtj82CQ6UShf7hDpwwirBzPAXJa1SCEm6sYg9smdtfQxn",
  "key16": "5W4bpNFYQ8BJwNR66iMDJXkYGt8Yn7fgtRzY8DpyKAGaGDmK4VYQmWeNgS6eDTUWXnWf9KnwZERvaJ1nWEWi1Ftr",
  "key17": "4Mu1mMDd3yS7r464cg1XFZmzd2UNJSdEp1gE4mnN7etPKR8FYJfguHDcLormRge1EK7VMFTDfrEaQA7XeTo3BArE",
  "key18": "5isciFFNF4oTKPFqERmB8Q7q7fthLFgqB1Xwy1UT7cGJg22Yxm2TY1xZu38fzh7QH1amBmc8PMeDGZaTQ2hQuHWh",
  "key19": "4QS7oFQEtJPtiKk4WFXsCVqDQYah4p6Dcau7E5mSyfA2LapTEzg2ByimnMdq5J3hwrBSbuQeTq4WiZHezLPp42im",
  "key20": "5AgFGjrr8gjspSahWmyeQbj7WnDEBMKtLGx8RDreWZ1HyVJ4SqFRkZANxcNvsMv3EKk9YsugJQFCtQ2m2ubS1kpW",
  "key21": "5XM6w3AX3hmM3mZfjn7sp3eZyNWn54CFzwrEWxZYtw3o8kBb6D82uCDb3P3nKJtiFedr7Pp65c94iFEtDmYhVhSU",
  "key22": "34ssiNeKCroWv5GVtGk8aWmVAuno1ibDASB5tJaFwjDXL65paFuRuNyhZJ6Ex8y5tTLvM7phCaH561s1gCXotc8M",
  "key23": "bSwvHmfWfQ2jGrDHmhvwP6VgAZ3t1fpxj99tDtuRYRVa77PsTkpLD2QbWvvX1s8yXQfjAnF5EAct9FDkVLoG4jU",
  "key24": "2aH3bayk8UVXmXe7ERK3yoYnfSBQwDWKqy1S5WaMaUo3QrL7Ve8rUvhDSLN8DF56Be5jmpUESS6jpQxo8e5kCpUt",
  "key25": "4GavXjr3oDAwwGAGaUv6dVXb3LyJfUFWnYVg2TiHMkbvcrwBS3bSP32iehfeo9C2vvXCsay1tCMxStq9c1XmcYXY",
  "key26": "2UyLCK6jSqNNexQkzusYzRYGHfVgYvVmUarVdFu7j4sE96FexXJ2yC3wAyTst9C6HBzP4tHLZ9XakvCS4QJqF3Ad",
  "key27": "3dsFNrAweT9syRLUnHRMuZfzFVzxScfAhzmq8iZmupSRnzkWwPM48bYevFmA6rNXqe3ST86abcwEfe2xFRBSZoZj",
  "key28": "64pVusNW1TvEAyQCBipTANnAcNsUSMnE56nADnxGehxb8nFDKureEWBBg7iEYwikXkTCHuSAEVHKpEZiTRgzWUTe",
  "key29": "6pX2X2FhZVAnNHuWDtcFLjRRqjKJAviF87N4LvHAAHbVZ9Aq68Ex4qT4SSSy1XwKCrS893Th3MG2rpqKinT7dKj",
  "key30": "5fFvAjY73EhVBsMyWmRGjktB8cx5fL4kRWgUb11Q5K4fJcn2ZwSNn4hdCu9nk35oThXtdbf6FCifnyr5r3LrgPri",
  "key31": "28HMqHRXFBhYekyJwkA2tcmn624oTdSJy1hRb9dgzBSsuqMSR82D5UPGQ4GB489dyMrMHRXUfAeWVrQGKq5Sf3RQ",
  "key32": "5RrudwZBjrkLnkxpm36TC8j6CieBhYRCZcfeMAMtuCPEeo32w1BqB6kBq2YUTz55dVQveEnVbKAaGJwPtKCTHzvC",
  "key33": "3wjkyMXwXRZgVELRXrSzpdFvZZ7X4GLXKu9jx8yCj9ERPE6aLyTHyL65oBt3SzcZRCDtdro7u35PHazQsyW5KBBq",
  "key34": "4ztuzfZUHsf7pBqvADXfXe7PT26jtFkyLwXHjb91Ku5BUeQcF95xvW2y7R7VNLkHc9XEahuAsChHcF7AKpW3M75T",
  "key35": "6PNxjPWNdDbwJafgzNy9FqUYJM8VUWcfboWywwzycsbX1hi2vn9eYrSvadv9rawdG575wm7hQrD29YGutEUqosu",
  "key36": "5zsrDrgk9xKrsvp2ZcYev5Qnx9GFG7JSN7oQUo4PRV1wv4vqatcCPVNx2cqQQRJdwHGzkNu5YvsFYVvAH3EfRJyn",
  "key37": "577hVjFypAShRDqWbr1N2Vpoj8Q7z8EBuy3nBbwv3dtKnFddmSLFEehKq6xePahUGeYEY7G2kvmkByzY9mkehjRr",
  "key38": "4X3pbWb3xvFYY7WX5Jh8oMjPzhC8tvYaz9BjbZHUTywJrrA2RHWuBHZAHyNXEAjB72etLEmRqdpzAipv5hTpGy2N",
  "key39": "5RA4DaR9JXf5LiU7XL6NxAXdRX4yaeKGv8KAgyFihdANP28wmtr9CNy51vYwEGRSj5ok45UteE7Lo4wRR9tkKXK7",
  "key40": "5RFZ5AdvtR8bqo15u8i9Hn5ew4pkyZMQD5YC8hnueRGngvAGErDC7whyWde8NkvPpiiYX4Sq132apvKiyUoEaLke",
  "key41": "3qMQdCJGkxDgSPcbb4EgEwmp5Qou3Teuo6x1aoCPJsm9GvAkoTPfPg5wBHBuLC5drwzcFoZHivttfdzTzD3FjNwM",
  "key42": "3LNyo3E7gqyAFiHiDnZnxNXRamCZ83KdWwJyVU25Bu5cvYTo2y7xMmWT5MrDhYBJNDqbT9quWygTiM7XoDfAXqPP",
  "key43": "2bbxhorychT7a8Wrjo7oDSnwK4wTVDAq5VLTuJJmbpzsf2CedEncNaD7QWfgXENZF4MSpVbq4njcWk9f85FsDiMX",
  "key44": "4ihEmfXDLtJ7aLtAshNoca44dNhAntCThooY3EN7iBg4KFKHoxXEdyrpN5S13VRLjPJbijgw9kggBLTVq18RkCEh",
  "key45": "qDMVHgNX1vUr3nXS1AZx8Pj1wKs81VRWY2DirEpLkL5bxAgabmPVGPxsCiBSig6Cvq8fS8mgN1NMMeBQZf8tVdK",
  "key46": "DZt5q5LA82tZbrTVvpDAENsRyqmkfnqZmw5Yujid9Vb5RbCr3FJTLDqpcsZRxm2EaQ2W5GRBd7UYzPtwBQuXy7j",
  "key47": "kAnNNqBxRuMHYGAUiWzj49nFHzj2nYSn7MbsvjYjUMgB6w7xcMmvzuVxMkgzENE1piYodxiovLYE6FznMd7Pc9m",
  "key48": "3w8C75Xw1VNMHA2rfz74bUkHJGb8LhrJubuctyh83yZRgRp3quMDQgBkWvyfQqeN1fjEYEPQdC8nermZS6s4SsG3",
  "key49": "2fYijVeeS1AkETAGmin6Mfb1LC29CV27Zypb1Jmq9kvvKqmWWkNkUQEhapthZjYp2FyvPyQDT63U78AqebKrJ3EF"
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
