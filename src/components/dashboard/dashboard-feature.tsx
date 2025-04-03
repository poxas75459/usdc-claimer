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
    "5GWBhr4GdVzHf4smsqvpTwxXZoFdEKEv9UEuQaXpNNGfiBaMYaZcAhUwxZqEipQtKFyLarJDMhModUr9G8iYB3Rp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e39uaADi79yuZuL9zZbjUSZ9YSN1jx1MhNQ1ixiasSrkNpsy2U9HEnd4zVRXcozsYQT6hrwxiegFd1tmpPZfCwA",
  "key1": "4GRCe6hLv4bs6LFZMtuLTGNXkpMCXay4cQuQM96EyL2ZScsrnHJQJNaQsWSzeepjvCn246KKidF1Mzm7XGHFZnoY",
  "key2": "3HxTYsb4p5u66zqZ4xhEkXAhpVLraU6yitJ2gncAN44QHpSWcfZ6hB6zdjrDPDLZrSfVZkNhBzsxRn2BYRrx5irn",
  "key3": "3Ps9bzxxos7zxLNGUxmMwe6uMDb7Ai9tptfq93PoZ5PCtQh9VLGgJCq1CByB12GSs2U3vs9pxDPkmoJD5jZpvqK3",
  "key4": "4B19fr6Fg69dJzH981X8vAK6xedPJNrqYHBeXdAhAaZGvHC3qjqT7wxb7T1yTHccZqCgvP7qRjDgi1AruviJ3Fcw",
  "key5": "2zoWEoXVZwei7qFTsqjjuWTadmkjLk3FrEiRdRxdQ5YHje1FStGGT5mANtrBqYYUmt62Un35itWihUstGEDmh43A",
  "key6": "4Lnaj4NpE1vEyXBcZMfMtvAfs1ZnGqLY1hFV33DzJVmBsRfASRMbSfSdUJuAFQNsg7EbZ57vpk2wEW8548ysKdY",
  "key7": "3guTVQcyDojoLZCiyVeQ1U4LoWhWsorUWT9E89ZAw9jpQJ4kGU99rG9DD9QScECMq8fy88xgdg9bY7rNsjmFBgxJ",
  "key8": "4XhakVdnnodSiEzr4DA5Xr7DRVN5Zt71Sef17cSR9GHhqXvLqE1S7MoE3eSbvCKjhr2fK5A5BXn2vDG6PbCJKFc3",
  "key9": "4ux5wqhaH45qzfDzd2xk6xD2D2ZYSrAsbPWHX8gfHmgUW4ockCd8PjBuu4AMc87LvFRkGFx1MoP6VJCQFQzvUhHt",
  "key10": "4ihMPGZyS1HPT63JrPf1pCuky2JndZxzsuHJDFFtwoGNGWaR97mnYp1QPrYa513hAKe7Xx2ecDeBg3y9SsmyWP9Q",
  "key11": "8X2rTp5xqPPQtUvrmBAfFCgqQ4R6MLyUnouBuXDhiGMHcVaZ84QKMC1VYLTLVXznbtAbJbN9WecaaYDweKqd5wd",
  "key12": "3ZM2qYkADHCPcx7Mq2gKGJEVTQp2Di5feN6KvQjr4WA16HtczzBNATHCWfWmRHiXwkRaxdnjqSrWyBbi36BDiW2F",
  "key13": "39M3KruGmdVubzNkRJftNnQWE3bPeVCF47dRki4jeFBdhxxR7Eqi1Jyhmn7HvW9ocY5pMmuf9bnSphJU6Kkictaa",
  "key14": "4b4Rz2UeyRAHdNaqqcjJquq1HLuyLmeRJaCeakaHSfaWVUxJw9geyoX8tu4jF2ufcsGjn4noMa99a6678m5vgpUJ",
  "key15": "5hYzWPCgRHC3BsV1ZMkhWaqrvaaeHQEvL1thuWwsKHEKLsd7D5RTXfWDMPAFjPMfR3iSL2pcAtxSQYQ2w3ZPG5EQ",
  "key16": "23g8bytdDVTXm1tVtApVbcxy2qqri92bygwZGcqo2TQXesChUmE3nYFA1yYXXHxJ2XdjKDEgD8WQz4qG7j88VFpS",
  "key17": "4mqZyEj7Sh6VYyXAsEVsHNPpSK2gJuJjaqebKM1ihRXz5mU1sD9CpGMPpNT63KNm7xUtqSFpUed5MaUmQU2HWeVy",
  "key18": "3D7P5AjteGW7TnFnZwxi2JNCqYnYWFp74Wwq9kFokc6UMc6oXcst2kBvYC9snxV6nJZBuikDTkvKy8JUv6TrCpeW",
  "key19": "4UpANY3vTMESo61XEW5CJhwfHBkrKmqFp7k5vBGqoWi2PUAJUmPHJagQ8jkS3siGTxwW2jLqAm3Q2D7BdmyKU41n",
  "key20": "3fXz4m6PTfNdQ2rriEB8be2MwY1E3NefgYfLeo6wUs4GU2GWvJjY13eK1eHWmHb5vdK6dwb1XGdZ5MEbmD1eYiMW",
  "key21": "2fR4VskNYGFBxr1WoaaaYa7YMxcNMMXZUDNvQpur54TJX9MVMC3Fcb9uXuuUY99uwyPX55VNb9LwVHw4WpQK7a2U",
  "key22": "47SLGtvjAQAfwTndFv1PHEqSrHJTptQhsErWVpxfavThtAJTEKbEACgBtsTxAffEraVrdeTNEfjNshUspMVGhWqb",
  "key23": "3L4kaJ7fRpeAvru6pxuR1FWUvg4eDGHkthBubfkNGXCFyy4qrhj7U3J8AUNmgBhaXcGFENskzAy8SvaM1KG2TGi2",
  "key24": "3t8PjxiD9JFzEpDvSmDzfLMAudhmPVZ2To4K6oHooijW3mwhCKBCNxYUGnSmzy4Edi1c3Rq9cVqzCkz8snyBFPBn",
  "key25": "3cKbmhNzFz3e9tyYpMzFNhFuMALLDswQEKNxSdLQViAjCZp8FhDWCREA8WZGSHQYtsq4DPUuG5A18WiaeYTRp1MQ",
  "key26": "4JnirNoTncYyGoyCkG9rjhvh3c8cTQpLXhLwrycHuGKGNgJzw4daRrG9Ku4S9MJK7XnaWetPGc8u4kDq8bfTfSwa",
  "key27": "2UAfAE3jHXeEbVWnFafJe5vRq7JAYAS84LjgqevmyVWnD8YeVUjkRLeNGHgjQdnFwwhoiYiRxW2aHezV9VAoeeDP",
  "key28": "Sk46e3ATaCR8muKx9eySBZ6Yf4Fty4c69qfs9TJDKbvE3guF9LEx5iPUG1S3y8rye75hHJm2PVjwrVG8FjVndv2",
  "key29": "4j1T5gJSVmXTSsenRYDHyZUqUYwBQKr1NfAa9DSopMPq9MXXUhT4Y163ABEX5gq8tMvvKpRopHY1ygSs4Xn7Nin2"
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
