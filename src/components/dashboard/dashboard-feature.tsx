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
    "2FWYFnmKeAoiqcrSZsk3TNZV6iuWmb5KtFqXDD4x76hgzcQKKCiqvgKqmiP6Hbd7g4ZsMghbE5miseDyHG7KQQDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CxzSao9pL1X5La9YXwyd9UyEyZ4nVD3gz1YJwWKtoMBawyBvFemYT7ZRu5U45YAi4Z1vm8Ua8mLh9Pv6KPDMse1",
  "key1": "2CpjaKZyY8ApPSFxUzb3UyjrWJF2eNEFNRrKb3V4ych9y58byZGPw2sDq3wP26PTiRir1uubTGo17CbJxJdY5PWq",
  "key2": "QptVYdrDVvmcCHMDVjbjqvuUqev7Vq8RndUa4uGwyvh4CnPuiQcfoCFvnDbZrfnLsHy8dhua1rkpfVfenAqi3J9",
  "key3": "5HmMCTWUhVyg8mBz3DrTnpoj7NP8hHT55WmcLzSwAiFcinwAt9NRM7K83Ysr1B7SxCHFsx5BJ28BNKRoLLR5WVMh",
  "key4": "5UmnHc4APZKjKjkzXbUWbX4eoW7j7obe64yGzWJ3WcLsmZ36e66CvYbak8UBU8fX6KcL7PgWYF6DzoMxNLvR9Aon",
  "key5": "3TDajVnHMfGQkifqsDug3YeYw9iXXBovabGLxY5NSe8P1378BB7fvEDaA2G53kYwhwB3Gx5UUT8Nos25TxoXFEu6",
  "key6": "pApNuh2Tda4ApeZ68baoPDFLbz4WcZsw5YPeFU57txLPqs1BVzKPPMngV4QV6DVGjgesbZXwv7WZjxFxh391ih8",
  "key7": "48g3MrLm8EHREqv1MjqJALAbrBtMBminMfrFJC1DUZqk2nwpEejErjkoRZUqRu7ZcZnfmUBb9sGmogPpyuQ6rNZw",
  "key8": "4PTwDV3UyiPjnwZbT29MhgtpBf2WL6ZwxaNC53T3DnChqAzngYhebq3TY1oXW577BesJQfEfMdBRSra8N8zcNGeh",
  "key9": "5KQWM9NHC6npz9ooEDJSysQ7tfnJYPtFd1VG3zaA8JPz594ymPddnZMeZvkJj4bEG7ifjSVycfd5BXskobq12sCM",
  "key10": "9CSDggsABozxj1Nzcp2vkYMitg7TmvPfgTR9fMLeaKV7AfmD2yat4JmFnEyN3be4iCtsNTcv7JjmXsEVC1RoH2c",
  "key11": "3o8njdCkeZaFfT2xFhV23RxnkFroNHT8YaBFkqsCLGaxE9LpjFvpjLzStRoWekgiJ9Pvdytdp6ER3fcyvh8Wjnpv",
  "key12": "3MYPsEbh1HeMz2Ld8c6GGzEtSYJqENwk6qCEsTcF8z295VNWU67uu2sHz53d2yx7C2xrkX6oByaEbYvRxpVxi5f3",
  "key13": "2JKrJPbTtJuZSnkqkHXcs5mX9huB58UXJJGxaxHbyv29jkEdJ75LGjzqoj8a94W6kAYv3xZXXU5wzHH4c7oCX83p",
  "key14": "4Vohtzth3Lu3sAdSyBsgo7t2wAo4uimqHoTHDx2mNdW1CPTf94YMiCLAvNsVrkjQjtJUJX6Q72ErU8zTZZQkw198",
  "key15": "2iLLZvLGvrVtvbvfdeh8YGv2LckJeRvJZmnK6bTdA5peiw5cPv23TSDQNWTeNj2CFbBXxt3cvhYgjoWwjWYM7CQH",
  "key16": "2YmNhUBdPj9qEgpzF281DQpVRS4FvNW7Hj6DG1mag74nPRVv2NzGjy2xkbT5KwQZhorLtZZmMrZmzsVs9Ty2aYXw",
  "key17": "2N2fTAocJdrLQawMzopkQrnxk3dU82wZ3VhrG7q9LnPDSu5JxFJvMbi2WXwjCgL1DUTVFVqmx4dMiYoJWNj852AB",
  "key18": "3SiKxiiU19LWZq9MENCWbcw8XirwatrhZGKUUsQbE7NFs8Cs4wcbxJsSwivMms3D2VzoLYpPQ1bW6LFiGhuBT4VS",
  "key19": "5LgCjRWiB4xPeXztuqnZdWNS3ppVp5MykUp3LuvzK3fGpWWM4m173neirKzZXEdLUvfqq1hRTa5wkvviLCZA5cDg",
  "key20": "65MEQZpi4RbxMtsqqHkq9rT2vPovCaWzK8VahretwitfnQpeEjVhKidGoaZvn1J72UJy6vc7PRu8Kom2qKYnq6WX",
  "key21": "5bvzjmKEosAEekDTphMS8tss17zzmsG2PwfdPsqPyDBvmK4kYcMNRShJqv4j9owYRzuhnNMs58ZDg71WiezwdDM6",
  "key22": "Co8PL7WEDvRySWmvXEnQgVFJubkqfpU32gAS1Y5oTsK1Vm8stTs4Hzr46X925R3gypNvqP3tjESwtELUUuHgB3B",
  "key23": "2f1a33Z2y98eezKCPoVbKRAVh3iHfhWtTjTj9ywTQu8vXuAS3SJyDAV1cfvzhkuZe5z1cAYLfVQpfEFYPcvCHhow",
  "key24": "3QkWGZywdqjyas7jusPLfvEbo2U7QsgymdqSFU1dvnDCsW5XHEocgxDBHLXWZz7Ji9RwpY1LYcmrSWg3GmZrHCZM",
  "key25": "5qDHF55yMK2ZsQuY3edF34SBEsZCZMhsKViARFGp1iT2Lwb7jxnmxA5DtJgk7xr7mzYkby2gJroPNBKSPwJoaGa9",
  "key26": "mkKPP2r3UTus5VWkJYkkxzHuXEUAS7Ko8VVnmQr5dTzZF6yPPgMgpVnGeedogxvQgQ6VKbxkk1ZdkFZDCv8jMMn",
  "key27": "e7fViQRXBAsY4Hus9yNoLVP9mPZCTRZ3SfjAXTG6wJmFbq2APmJjjHiiw2BVaeBvw8ezm7KDokd5K4iN4xppWHE",
  "key28": "4vi8V6sCoNZsxURSicTp2EFwFdr1fzTC31Wb1gWUjjwwzjNabumpPmo6VCrPeQnrWt1Jv8WcQu549DrUsMoBDP7L",
  "key29": "2isaGdxAsdABC8jHXAYKaKYx4AHmT9omXodcRzJZ7PubqfRJCjm3bSReGFRm71WqmXQkMWkStT4ibjvkY2j19BJM",
  "key30": "31D9RmUBjkNpWufLWd4c5D6CrnRVcZckPfUqtCxB6YPtEmYAsQvt9QpnuXEm573Qxzits5QhSkE5gqgNAjox4fEi",
  "key31": "2aGuEsVyNp1Tw7oWMV4X7ZrNssZL3sm6vAXHvfW1aWNigTne4wjGQ9SmDFHoCLqRKhMgEsdU2naBcV1pHbVLvcYC",
  "key32": "5MBzqUycwmjHcBq2NjMU22WCpofMJ9ShPPmb7Gv73qCw4YgXvci9yCxnPTMcbUkozAwoUmxmEcecLGfXDXUePrHU",
  "key33": "2SA9v1BLnVARhmAWbFAG2QtxYj8dhwsRPV4xW8QGjNbRqMBxRWBcmt7HcZLamUmMh1vEevRgZFkDEFoZ7Ka6khd9",
  "key34": "5ii1XfwbVzMTYrFg5CqdyW3NCt338jp9BcoqmrXAKxku9rg383hV2wmPZ9kZ4ZHrzqeiacaeAXzyui2MiSdnjyFt",
  "key35": "gXjTvDpozqfmaRALJNMeuz9UWxnPBhbpuJszAnt4ufANUgw6Cfz8QvPW88d7WSaNc8pcVpo2zMZY5Bn3yF7uNHd",
  "key36": "4o3cbBCaVwL6C5UqbSr5Fsf9MzpKHsooN2jtT9QBCM7yWaeYogqeDi3Q8eC2J1viJU2m8Eyoq2UudVWcufC9heHd",
  "key37": "3uzbxgkuYrNcZKHMbDv5pU6DJ7rHeLtkVV9gNJJrFAAXUn4xdCjnB9MZDzCvDAR8xSdGzcPVzbzBiSyL4YsNx65t",
  "key38": "3yACsntM9oKJbvDuJ6psj5aMViwynwJQ1kN7UnQDpQcxUgRjpsJ9jroSx3Ttkp2gwzPQgJmqzN9h3DFaK6vgwb7j",
  "key39": "4h648q2UPsvdZHhsFogU2rvyGdGX9ijX4yrsuz93PyD8dEaX9LjD1tGfdGMTo4scuQWFmRzTRiFiFiRCWJU8KLfE",
  "key40": "FQZtRAHo3Hrh8GogZRQuQsUwi3CGCbEWpPRLbMhDBZbMCm3JeKrjMNAQQJ99TctsdmpoH1weo5PUa3T9d2ic6wv",
  "key41": "46dzrmUpy23farbWJzpQRwjLR49Nmu1uvuXDEGuiseXYfcNMzQL2pgzLmT2tmUpLfx3UVGdDtU9tvry9qMn8X6Xy",
  "key42": "8TLnhV7MTFuuL647A9RtMKcvuEDnEVHrbg2xGiCQnRYPFweHKaukK9GYJXbsTt9hDjS3aXph7w1y8rkvCMmBD7s",
  "key43": "qLEcjFjRDEr1LLccBZjXNkBTxLjTeV3W4v2towhdfiEeoN5zNhncyMCEsmn5hz86x6pPyZe328f97xAGFMKfGxR",
  "key44": "4ZLwXTxzgHA3gkoaYXZ8uELJoPZAeX3wFp5RD8cjE1TJLok2fXKPtwdDxUziTPDtMkfjCo3Hvwmc7hYfkTRJNk8X",
  "key45": "4P8BWFWJT5YYb8s1BDtzke7Gr1PSDVFTEbK7FKjCJzVKJdRhbxc14z6zRe8K5vRos8igBkvX7RkaLmyFpUZtkV4v",
  "key46": "3VjYYwKEtA2krQjbSnjwHJLYtFQUQ5WjiBpRjyCfRYgAYxFQWAkwd515FndwP4PQQhZ5Ysaq36gyV53fQbSg8oaM",
  "key47": "4uLv3NF1AFihVD3AJmNdW9jEmHUdaBWWAMaQaY4vwMGh8Epbj25eBswfWzjhKwUGDNvcrWizmJmwnK6f1dchSUXm",
  "key48": "4xH8nHXujfpWMRnRXtoaGUzekMip2DGNk4Z54qg4eF5oqTbJEUWLttqydMe1Br3knB3LuWLHyALKN4xvA47TQVGA"
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
