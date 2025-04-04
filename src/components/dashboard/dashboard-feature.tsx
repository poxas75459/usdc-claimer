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
    "3WrnzMcVfnXdjjwQFGfkS5aPR9F7x9uaZbomRvCUxdLcoSUYaUbJumNU2ZPDqqwUFwkuSWikcAfQYxtsGtXM5HLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EkYqWm3cV5L2j7TpJM41MECytpxEmJC2WH8x2DFq1KtDx12X9mAv7Bqn1ozsJWFPyNUVkBNd95699eYn7NU64w9",
  "key1": "SR8JcyKXHLAx8CWcAAzUkAYcjm6kM8sXMrAjZGkkGqfSvnXrkxVbQeCiKgegEpPbKDGF8PaceL2owxapJAuqLKY",
  "key2": "XSfw1Rm3A9Rx1SrqWHmDWBGsr6F1SQxbjykrVqK7yk6Ay8pTNhcheDsehxW7h6kuDHTrXPDf2Ef3i8WxYbxvFuU",
  "key3": "5Kj3sgVTpHRvPUyvKYc8ayrWJuwZEGRZPt4yFF285sGmBqG57ALUa9yH3BwDbfnJ1gTPWZQ3WZd31EnieG5zwNur",
  "key4": "sC7rVoW5ZtWJyg6x5MCpzvGYF8zi6ipmwKWaTup2Wuu9cZXf7zPH1k4YDgArWJfzBP6xunimE5dipJYH3mwJJRM",
  "key5": "64ryadapb14CWrX187aozsDRzWEMZTig1bahBx39T5QpfmbRwjX5zgbN6347fFw4WTGhRHW6QTefb9vHhjgB1uJJ",
  "key6": "2PQJUEBHJ2zUdvqhwvT4iQnH6F6REzbcbFMVZ68nuw8rrGgW2m6paUuYZ5D14KuUvcn6ZKTykcUfwTrUZibborgd",
  "key7": "2EZYEPy5ctN27aqBwM35eRHZsdeYo63inYTk8ajDrmbGYUZ5uMs5o4DgrKE321Wcy5ZzUN3kxiqkxRceFGPuQHRH",
  "key8": "39vKWUVhNXdisGBBvvthsXkzsVr9TCDW3ghmoxuj18MRWg9dtDK3Tthuwzy2RWNtq6s6B6WQVUjCSrvbANP44jJc",
  "key9": "2EVVEQpreF7tT3t9hKcCJFr11yCd4n3trc9gqDwwb9mse8aCGwphy6ZPMWzUREmt4a3pjQRJqE34hArHNCDXG6zP",
  "key10": "2uYd7SS4xRr5RZoJydughrhN7sUsSwm7uPftsXJ9xZ6TgurGGnRKRC8bb4R8Xiu5Qx7imxXnbEv2SqUkF3eSpYLe",
  "key11": "oiEz6jE1QfKq2Y4CXpWRnhtrpuWi7Y75bmphN5kvtWNenQgkzaSLD3ktXRyynfv3GGs7sEYZT8HNR2ZFAJT4tKK",
  "key12": "3hvGR3CJXHVWA8XyA2sHn9Wm1nQNLPEgRmgbiBp5hytjeMffWaca7fAyRMnbvJd6Hw2ydhsP2goSfHJ2r3VZwSfN",
  "key13": "3uEaYZ7EojKQ6RsLMv6X2aGs2QCQwF9MZKBMzoRNtDNqDyYXMChLB3Zytx2YcMvvmi29bDaTEqhLbC95F2eK1zRg",
  "key14": "3U6pNVZnAqHDEgwMignYq7xBsAqNRF3SVZGct5JsXseJzLU7y2aiyXGhuJki7i5ABfqRNEjY1g2D8R1CxkMceDqX",
  "key15": "2yUgy5awLKwkCnqMEREAmC6PPQ6VtiVLHbuxBmMJpYcVcFhrMHGSuR5UKR271f45oA9YPnqs2UvNwyNkbkxUNPHo",
  "key16": "4waVwhsLVve44jGjQpvjXro2dNNN21rrW3oxcf11La3k5rSBgcWNipqX7QJCR1CgPH5976gAXW4AoL4g1Moyf1Eo",
  "key17": "61Dbw7E47uwaK4AHZU8YEDHichLwnAEnbn1TQtbu1uQZYco7fRRbTFQzUxRtb2zjMGKpSNWqDc3oohbRmrW4cDvk",
  "key18": "4AcAcUoxoCD2BtUy5JPLSLNReZdar4Nwn5UBqqrEmZQ13gYVDc6We9mSrec14LERXHgvsLMGaSHfEBq8ha5wZfhV",
  "key19": "53TukLC5PEgykGcXjcCrkHqayeAmr2YfgJ7yPKbcTyRtGsprmwM5dbSby5U9Lf4eorMvQhr2otdEpxX1xHgSEQby",
  "key20": "4TGYtVrJFQ1ueGwpgPw2Kbf1LRdnK8vSKpbkbjnqG5XucVd5WbHdBgLRttdY8rNt973z3J9FCDeDWT2K3bnfDNER",
  "key21": "2DeD47qBgJVGG2tPaKbmLkTDcTUru2tVXhXq6CX85RBbXtqMncFabrMjJHofgTMTrbem6cfEt48G8fm5GXTpPf5u",
  "key22": "2V1UvxpnWBDPpsAquQUB7ZafLd3Ny5gxFnfEpcngQFAEBkJfisfDSoT8oYYSEC5RJJrJx5Bc386y2NAqDVx9ZNMm",
  "key23": "4RHdRPxvrFmG4rqRj2smtPHyi6R9bdphJFTtbHzSWzR7e9E1nfuLnxGjqMG4PcNuwXuEfZkG4z9i2rqVN2ywRcAt",
  "key24": "2CqLUP8KcaX1ujN3xiiiGk9dMPpyoHpKhX1XpmkMbt8wpA5FBpTtZfe9g9opToTSJWpDM22Rws4u2ytXE1C5YDi5",
  "key25": "3bdm5oy95wDkiHUwVBNZuP9qU4raNb9vYG8FzT4HtsxUaxfQjWtaPnCrhftYtwMiwLjrZdeiJ9gB64japgM5SsQA",
  "key26": "4qk4PwTHkTJ68ce9eG6nj3RjiXKpqxWr8DqGXE6L6CYRYLaB2FwGnJAz3TDQ1wBiHpbgwAkVQtTx5Nw5KnXXRnkk",
  "key27": "4LznmxSShmUgbTrVxMK5gpaWzrmvw84Z8K3y7FnszECCQAX3cJ4PAWa9Ti2honCTp9jTqPimvv99RiYR8uMyEDFX",
  "key28": "5JdiK3FaBJKavn5xGBVoptre2jty41iMR7fJkGcnVWYgUuuhTWmoBdJe4Tihaayks7DkEGgJF1hp4rfG9Mc6Amy8",
  "key29": "3xiaxdua8u9r4NzDL2ZFWWawTHv1THZd2hmUpBNz8QppJo6DAGHSqAN2voikdUDckndPimt1GGjUk6BmNk9h2bgP",
  "key30": "28EGkpowXZzQTofC15EVHHV1s3mT9zDQSnPG1yPHnmPFbypSPZrkV9Gox4gkMY9aBwfjkJYE4mnd5FMb1j7zoyFr",
  "key31": "2iauHcL9vtFXtWpQ6y2A6ZZcb1SM11WL3YWPSQ63PvXMw44MmZRvDvMWkkLgxt7dXaYJGH1pCxvHb6oi5Bscf892",
  "key32": "4fTnMt3qbMNGQDkArm8VgrwQSVqvNrQoStwa5skmQfGxFVWqPsm4MUHoTsLTEqxFnBmTjxEpwDCgycGArAysd9e4",
  "key33": "41r7h3r4Q44dcnyExMJRVCkGsZtsLLxZ1KCsHRPZgRpnhJvZjHuryx2ekAjZrrxexaNiGySAFicmWXcLL9vMQXwg",
  "key34": "3PCj8RQ9LevxUjUncXmffBfE6kxor7Urbt1TAvQA2Q7a4NTdUxGjoSeh999AaruSt8FcZvBLWc6u4QBZJjdrS8cs",
  "key35": "vBPYEXtbK1okPNwpA6RLkLYZTXwgsUGzSeckV5Us1RE3wrSE5aprqhjQ7nd56db58pJe3DTWGSHJiED16Q18GS1",
  "key36": "4aGTGTy7A9iYMkHkuW7aDktyjpktdUcJ5X47LSzP32ykP9ie8XQryocxr8ZJp1QcCLCmAn3ZpvJG6dnGgTiD2wKs",
  "key37": "5xgeekdED3kNHhsWtr64vokUHZxTjQavKbMEbnwDSmuoZwrS5BLNnzBTegkSKgb4bVT3hKNL3BvT7cr76YGjgCZR",
  "key38": "4Ba4BYAzd17bycZCgHjD1bWbD2dyGakxG8ZwhgmZhTv1kiWF9GLzaPGTVMfiWghEj5YvB76qW8rKL5yoEckaDSDE",
  "key39": "4KdGUxv5wteYxB845xzVCpkYXnGqFmBzsZszuEJ7QYUoq7Z2yNyh7JkD1geML4HQaFunzEo6BCPhUecYkqZcK67U",
  "key40": "2Mic3gKmoiAazCQK9QXKiVk5Nx6Ls8vkMjwgbsVQDd786xA2zpFg6QQb1xseDBdHVxCRPXJqH8UmELrFScc7Ydf2"
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
