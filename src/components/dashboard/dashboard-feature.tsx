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
    "3y91hd8rZhp8fgR2MhvBor8JXgryftVCX4vShSTRvjQ1KeBdM7GRCEVrcuKwoeoXsWot7YPm5svx9cEjq35akH9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sddKakUWwdUa4xGQpjT55w3LJoQ4jYxMi2CpyHSGjQs6zjD1ADQBFEpgVepdYrqvGhdGitboz5DPrEBvrtGPSCP",
  "key1": "661nvPAsWEAAkL6U4QjeurYZwdTYUFJj35hzM8Ly85s5XFfi7zBQiCWHGNFGqYSAVK2YVBxF9esvujGr7Vff9Qea",
  "key2": "3f6S66ZbyGjRi2NCRKqKvdGXLDqFDweSvoCxAzAVjeA91K1nMDRo1X7qJnLQjt9LTMm55uEp8zQC6jkSqH5LGYTY",
  "key3": "5UruuiamwSTtky51LdHQrxbZAJRaMXJcLpcTLxTF5JoaEN4xFjDy8jFzByZnWJsipp9hRFpvtQkAjpBnHhcEEQRh",
  "key4": "2Wsk1JMPW5ZMSWgiQ7D1zrzDYRhg3ZcnVnedvo1dPgDnBmEPBCtfbuwbhWPQCUV1127y21CZwN5CB2kLhX6YTfJi",
  "key5": "4MxrHTva7eW8NYQ2kdfRmUhKCB9uxqymprtQS9r9przeU4VYM5J8RJDkNHXnDy8QFDAc7xvsefWN3gb2y7qVmmtw",
  "key6": "3m1b8opX4QnqrDzQ6N6LThfzDyQMowFUJz2Kpa3c3y91EjRGPbV5y43R98dovEwg69eVex9rH1QhkBrq3f2iNotX",
  "key7": "5oJkzwF5KjQ2v7CEkEyJyiRaK33kjEo5KEAzGdXCyydFwavjyovAVzq21fZEi3n7iZTJKQaBvzacGrPRPtV2Kno2",
  "key8": "2K99upfskmUnHUB6hkYS6C2sUqrB2WHiBLxkfMcnhU9UENPbDUsJ9KQHYrpVj3YADz9pK99jehMzu1PvTtBhyQTE",
  "key9": "4BMJwSvPQ4Up9mLZv4heJLZNRX9UKXnwPQKEtMYH8KBr9kd9ztx8qXxjFGUULeWCW8V1BGsTwf3JsxJ8qzeXMUVq",
  "key10": "K7QQDLVaJiW6tdP2Q7uV7iDs8QJrxvMZdqDxpCpZV2hyKeGCm5HAj9e6gRx8JGPLqonbUMRk3yw6wiykTMRiahQ",
  "key11": "2LpSBJcGGJxcLeHA3unbKQvuFdZG7WTnptyLRQWwYtHT6aLaJx8Q9bErjAqqxz1VWRQTqC7HwNMQm5rN1rtuC1ah",
  "key12": "4JiEV6tj6bV9ub3JC5x9ExBctWom6ggSoWWfi6z2rbmzd19W5dx9N3EJXer5vkdvHGjbxGP2abTVcZYot8t3vqsB",
  "key13": "4XtqjJ7NU3nJG4VbAvsrmeG2bpNMGXqr1mkXaFYq9JjY7nWTSXPnag2jgEuHHMXKDTin3HhLjb4sMp1NAaSkkesT",
  "key14": "22nT6n5jYqz6pQSsNosHBKoE7yTFD1jcGP4BwveZwTtnFzbjpQcXoD3S7LekeUKH8xXy6845JYum9EGTZNa6XYpd",
  "key15": "K11ZHGKUXvPJUK6Pcz7Lmc9T8x54aiJ5DF68VzvCE7PnFQxK3LEj9LvgC753pBXKafVkhanP2So84Rt7RxSstHf",
  "key16": "2sJdfDgwnYjTBeKBcnWyGJsFq1dfHiaQCnT3YLLPfxjkpjYaMUcduGX9t1DXVgcy4CSqXj1KYicFnBgzZvRRjG3X",
  "key17": "56J6t7d2QwbkJazvzd9iuzp9EQivsahw7gfw1RcyaJkRx1n8Cvt7Rdk2uMAYN3facTicAdZcAjA3ACUo7i7UnsQA",
  "key18": "1V9YikUcJMK8wKcN5pxiWcYgiVitKHBr9AyR4qJw5hH6omTeKVSgT3rzvxcT8prjdFE3RKAbM19rDyt83Sdhmbu",
  "key19": "shLiBCo6ukejVGp86tKcJ3mYxxkFJQ4RtwjqkVJKwrGrmZJA7So3k9Ny68dsrQmoV5bAWW9F7yii544anbyjDTB",
  "key20": "2hchECXqLSRhD5dXejSgC84vaHZqsHL6hF29wHjxJ1KsNGX5HyT6bL4PngCCXFYCFGkb1qYwiP3NPXiFK8hM9vn8",
  "key21": "3oftPNNoa1FxKctze5n3FcLHKhZ1qcp5mPw9VHv64ARnbhjb35mXViRkFwrtRNnhjWPuHUjg1S33s67ai6KjaCed",
  "key22": "28BNKwfpuEKfmu9RTjpRfnMKqy7JNjfjUgT4iSPcPCBeUaYWXvh2GmSKpnFYZHQiPtSAbwqGmopq9frx57oRWoPZ",
  "key23": "3vp6ApSg9AhMNeF3UHYiRu8gkzGht1yT8qcN5fHnuYfk8YEV6emxp53cm4tBHYu5nJjurtwQunYdkvtJwX1iqRTt",
  "key24": "4aY7r4GJ6wxTBQgrdLRqnika12tkeUs3GHJL7E1e3UzvDe1KTbJ1dzGVANs5EDhrsG8PLXN5EVZ7Wh3oWX1549HJ",
  "key25": "4T6eN7wYAV5Nh3Aegnd8tg2fDtn16bNiCnmh4ZhwzQCRuqT2afNBVyiCF8NP2r2EYxMSNDEjpuQQvhuMfNXbxuJE",
  "key26": "NuDhhYz5q1TTYsmVmzJyNEDQVp3qF6JeQqHEjJTii8CoX28Gawqchg4WiZ2tbS3sv4rBoc89CuDTbh7TMkX3BSD",
  "key27": "3nRKGBxt6EpxaBt4ePyd2wq6zQBWjaTuatThD8yHWeECN6G7FG2PMhwoHSoDuFqv5xfddDXYUAX7NuT8tb7cAL3q",
  "key28": "2Ba3GvmFbnZvTbf26dVmmcQy47FXeJubz3hqfpFnrc73D4qRhRUurLcrwe12Y1RccznD4773xLhsVAsCj6t4uvNR",
  "key29": "4GTTuo8KU8qEjqEXMRdLvpyn1HjGP3dp6ViruAoeCQH9jASqg9qzao2HFiLAyShcmZGb17S9pX3dr6KwXzWvJZqH",
  "key30": "5UZVx1W3DLqugxBzpNovcYEVRELuRhk48jAHTKJAi8WLMPZPAsusSrnGvtyvP4s36f9xPe7kDR6emvdL4LFCzKuW",
  "key31": "oBz6vxLRHoeiRjaQvA5fhayE1HKZNu4NdzDxrhYffvWmczVbXGMo7Xxq1JsmHHZPBxAkveUV4bxRjbY3gu9ichf",
  "key32": "2nCMPgGFjA7DaBdw1zw9RA5yLTTSrfGk61L4NhXuQKsCb8ZSPoD5C4ouAVznvHqe4aLsqaSSNbgGdSeoXGNnNivs",
  "key33": "4671iA2nX76Mwnq6Qws8s3hZDrMhHcytPFhSjaeM9mCea5uFSF6JgNvcDMPVyE3pF1Qod9dNiayiG4kAv67YRyPN",
  "key34": "441Mrp6w4FMyknocB4Loj1TAsrBYBD9zEcm2J8dG36Zrhx6vokXkGK37XAuVfXQ5Fwur6kdW8hXqZBEWLow26y7i",
  "key35": "kXQggCDUJ3iD7wg3Lco52u53a1JQV1ujWvjggnmXgTK84HzxcypN3yngUkcXk3SMMy84sMpP6kDkx7p5wCya6F1",
  "key36": "31A32HMjN7BK9PAQMEoHeJc4uqNw7Lp6x5pZm4FFgq6NQjKs8BXPxScbmGDeqsxMXxx2Yx4wjNG218rjsGe1fqby",
  "key37": "5iPXA9y1Qdh46YjGwbryHk9ArNE6bwmAHY6Jnpk2dK5RF6SayYQQBLVvScCao5K1vv3dSxXX5nhhhwQ98bZbw32y",
  "key38": "2oXczqR9FWFzB2zcuczvEmuZe6pPJ4UiMiKm5rLWCGgF38XzsYQuEvazmWsCAF1SCwvxhSoKpkCZdKSPMsvZMtEH",
  "key39": "64b39iMgypg6HLHWqG8G9FdkLBZq7QnKkUtcWsCLa4GbsMtpiaVDji7wwZ8izZ1rf9BYdgsjRBNCymGYh83NwyFe",
  "key40": "4AvFjr4eYnC2WENctqbDsVv6wHeqLEXMMMuV2rkv1omHLfN6PmCtPQq9JeMPaPo1YsKsDac1PY7SBYdgbCxwZEfy",
  "key41": "4bx1AXEJrYRbCXj1qv9EPVHrf37BkbTS6ppWxiNC6pqaPkraFhsZmaoq1QMpxWPRfdeUHEAzUUnGMGxRdeDTSboW",
  "key42": "4kxoizApwDdGqMbKCHA1taRxd47zqYkXXLjrAQwiV4Yf2FPpgwLpgKSM5ZpcNRfaTYhFWNVMHKpnwUaV3BAmsFzT",
  "key43": "3NjqUYMWHyEMToyMtjakdiHu8Q69F3NFgdPQmWwjETXjLa4jfseo5nXU7KAe89wQ5Ykh4LrhQzX8j92mSTkDmEDX",
  "key44": "2VwqjJ9HCWUaoRe1qRCsgbNfyqjv4iwkVS76839sUmmG4Ur7QUj74WK9o1UCcFeWJPrdEj58w2DxeCTPmndVKRxo",
  "key45": "4P1wVR1WsofBhhVYCjWcVPk7X93CpFPw7CdAhtvbUrAThtAc1VgNdvofWU9rnCPzLdicZDziyMqLjdvAHPQeuFvN",
  "key46": "523CVyrGkLF6BcqzVxa9pMkyo8j4KeQ8tBm7FhAdBKG8y9QNBu3xcCQskomZ25TMnPTy9aRvt3TvjnU9ag6hM5eY",
  "key47": "5iHN3bs7fBNkizNsRjvZbWazKU4KUnPbyyKD5XZkofqf1H48hMCUucF1cf9HgxHUXtHfmeBwqSMb6j23qCBTtDbd",
  "key48": "Y64CByvqrxG5uAtzDBw9huLK2NmH2ppzmx9VczbeUvvGexScih3v455BftFckqYKfGxL8sfw7GJBZzDMJEz9Bcf"
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
