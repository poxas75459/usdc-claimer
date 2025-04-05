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
    "3fbaXuUifMY4TcyAA4QmdgBb7XJVjb9Qqyw1ZGm8EtHo887AKL9UewC4baa9P2JXPgjSWixjSYah4LHASnntiV9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R2UHhefgHbMhP7wrDjBGKmpFjd4G6Md3Ej6vC8D4549GVvYnhA2epoKb5hJA1Mbyu5C459cbxtHnRRhPWQ8DtcE",
  "key1": "5KeGof2owZcBRVidYBn1c3GaPFCTZac1SVcMWHENjHxrp2aHwB17ZiCB5XYKUufturwQV6hGzQN1FbXG7oXHMMuR",
  "key2": "5vEh3UY1Hi32ZEAMr85xRmER29dc8phH9t7m39N3jrV8DrVKoxXbECJVonx2xAfCAdyC5HKq97zBcCnAWSdTkzAs",
  "key3": "3pwwSXoiJ1hRSP6zYQoksXfh5Wiw1mVyzTtPzTVFfatc8kfGryPbfxmmFHtRR69rCePPawvoDzt3xzWe1mVne23R",
  "key4": "34EwBwik18UwcUdkgQuqUT3oXrU3i4f65V6rvtwRDq7QUq63j9raEewUxp9PztfhUaQrPfM77JM5H4gDp5BmJwWB",
  "key5": "5Uffq2UkFKCzTFHppsKCzn5e63yYXhzDGUhMnfLr4FPxNvzinhv858MxfVxP61YhsYK3fniQpTKLQ2FwH4HX2Q2f",
  "key6": "2wPuGMjoMouvFcaEBAMfDhijVxwUoFcjqAmMu4MpGfysfZFcpMzeBiHuuJJVFeiHwtETGU161X4WYVt4SSuKAvVb",
  "key7": "3Sy1j1wwZs8MPmfKDB4oKgVyrvMw9yua7V3w3U4npx5GbGpQXRNSSzE24t3Z646cgTTNue3uj4U7NEoXdpPKhBLX",
  "key8": "4JT6hsXyS5Pir16eRPj8qmihhzcX5sHawZYBv5TmgDa4JAdV3Ur74mNQY8FyTRNzM9vuPPyYig5oXehpyDQ1s4BM",
  "key9": "3HCL3SSWoEF87xDC6RANi3bboYKSSiKFBqmx6XgH935iyPmNxNsP8PHnb8LePu9dCaUWB6mSACtBZqnmh7iyHoo4",
  "key10": "5KbuKgpDd4a9ca2qspiGMGuuLiNvAcVxFDVWwttjroabtxKsvxEZHhmAfyGiPmFBuGd88Fn5qF5ETzHhV6aWQ7zo",
  "key11": "4ZPddffKLMtqyCqnBHTqaUZ189AcfiYztrVBCef1YDFVhe4Xxsz48EGMDoeVFvt7z6AGLULg3LKsFCzfvRtwkCat",
  "key12": "2rrCbpvH1kaCvQq25BwtakAryU8SNZkrzVsDmfs3Lbagzike5oTt1RU98zWsGSTnfsVQNT1hyui5KRNXZKupui6g",
  "key13": "2rabqhSySVkU7kxePcoP9jpSzDQkkpzb7rgyf9AeYMGEyKuWEQW8iNxHUFsG1RTYjjUiy7i3rpgrxUA2JUCsCd7d",
  "key14": "3kDhbkhvE9DB5ZbzTBs28fKNGhUBpKQPx8gEVJfFGWyG1VCMjQG1e1eLGm724naDRDVy1uacwANj4efsSipWsP7k",
  "key15": "39KnY3Xp6Fq9sQdFzgRvM3avoQ4Q4zuEssoqQKeXJE82EDVTjKUreni9SUb5kiezQfY9wB5TikWbufxNUzifs6Y2",
  "key16": "2kbb2HR4zHdrmNZXibMroWxQ42sukJ4QvaDZJYtj8vd6N4zSkTQgC1F5okufrdLtjmauHZqGM85D81wTB5svraik",
  "key17": "8tcnqHzXfEyvu8qnBGQnjGi7tz5nUEMdmmhRLCbimevgNUpkjohQQxuPAjfeAqzPG4VZ5jBSz1oCty7uUec5bHn",
  "key18": "UeFAUuNaAeZVVo86aiumsa5AhVnPLJvSWHbkGD31msKTGqK4QUBVA6uL2xaRh2YJ72q6XYgFndEWMNfStDsLpRw",
  "key19": "2PQ2Di7x3YhwRdCBtkckvtuGGqWkG5H9Y83je3wugrBd5jDVkMhp1DoyBHkQGUoCxC4T8mHBTQ98LzQRfbg9ML8v",
  "key20": "4G9SDyGhPJ3WBVcVYmQi8BRfuTX1FSySr2Ss1hEZJALJwbPwX2Co15NABtYkbQL7SxcJmDpkxRPd9CaLp7CkrVxo",
  "key21": "4uAxm4kqxo6hY4z7zAMfPNQQUUiGQMdYjSpxizd4HuMkTFqiFon1TZi6AtKSdiB288WMBNWoCwtab6snp7RvQz9y",
  "key22": "QANRGNmNSEguWo36Qviw1XrNJdgatdfEpzzNdMqwHQX3hrWK7zhqssZhPGsupFUJgGcKcvq9eKv7pf6nK9a9zXq",
  "key23": "5H2sRMPdMU1bu2KkavH63o6T7b4gY4B79VDo9LYC4JWeJPigdZzcbcpXKN2zsDds8xXYJrtAuZ6KTLg2asnoZJiF",
  "key24": "5izd3ZvcoXB9bNGymB3prs8zumuPdvCukNz3ZAdKC95sE15u5stuEp9tfU3LGk8XRu3GGTXaYogoF23sMt8euouP",
  "key25": "2XFweHmUZ1bF4mJzhTzJ2Cos1tVHASrkB6tT9ojQEdvvAo5pHQ8u2HixvghjSjN4bF5z54SRHweTHakVNTjG2cP2",
  "key26": "3G1bJypAw1YoXQZMJAikcyBLaJGXhhjTVsvyCaG3pR4P5oknBtA6xPjfR8Ww4XSDZqmKQxnRVCYGiS7aNDopaxjD",
  "key27": "2k3U7gxjryVtZnaSCoideqfqyrAsm8makMxgjP5iDYCqn7wJL4NT4ZCdPRZfXfPsqCQji3nRAQWQCdE3Rm9Qum9E",
  "key28": "5h8g5zNy2RZtkBi8Xbw1F7wTw9kEBbs1gxzYvBcsML1PkRjN56tF9XaH7h52ybBmxRXZe6PSUPiSgiDdHgHN7Gms",
  "key29": "4k6q2g63K6VyRkDuRmWALLmq838zNc1p27B2DvMyhLw4KpK2GFjkjjmgL5kTF94dgHswgaGGNPB62BDfpz2ZtQxr",
  "key30": "2yKoNWPgM2tvEdaFCWuwRcq8p7uJM2kckJML1FQo5K1gwnnZFWuAj1UXA5rmE7Nqo3nZ7ic7Sh76iUZZn64ksWR",
  "key31": "2GHaU4eWAQdAD3ebURa25B93d3YbrfqFV9h3TxCKXNsKDpPfZzc1DsAyCnnJQ2YtbyDPrvC6QMv9gFQuiS1wLHgF",
  "key32": "3jMTxAv3pej9Sddx59dokKD5oTuGsnZyJg1HkkpyHB7uuExwgrcdPYp3wuSoGSyeQar6e2SiUorJ99vCdsWNYhX",
  "key33": "3B7yngXAz8tWJyX3EYSZH4V2LiosmsJ14Zpzb9v8sQvAhfPTNNETnKsCP9Myt3t399Htyw3sWtRdsjfxsqXJ9igU",
  "key34": "4RL8Jxh4GdgauGj3RfmpWJEcXki3B5gBxHWQmuigRwLYi8XptYPHT4uubRyHCGhaq2JpRSwn9z9aJGicN1w6L2mC",
  "key35": "3RLfVidd22dFHQajL9Jw7Yfb6ANEXmzkbQLF9mBZpUuDbe15UThA1eeZcxFRbxHcMPc3HMPrppz7w1iXRTjWJRoT",
  "key36": "324ZDddLdfvJ5MKUSmotpwuDeYn4ZCT1ACy3QZBSMRf5uuHCrEt6MpcJRn1ttkfPDaWu5CrmpxyFQd3xrb9guxYf",
  "key37": "3Pz94XeJHNvjGznJSKBf6SdSxqkX3THTstHxCe9uPqDaY2fi7mDmct6t4pU78c45UBV7axYm82By5omnY174g949",
  "key38": "4Fa4jyxigdisSRjg7Kainw3fTuPfLNjFTzNzR1souPJFeFJ3dWDQjDSuDhCT19JSbKp44ZcUBCuzNuet5shQ3BQz",
  "key39": "nWX4kUbdoQiSUy2a73LD7XBH3a4rD7WgK51ustXZCcpwSJXmSCzJoKwFdkocYkfBWwJTqS7ZAwX6Cz9g5rsdhCk",
  "key40": "4vzJwLbKKWoyj35kN68HRaKUzkXB2jM6HR3b3Q7nXbtrsKWVCEv7iHn5HVMa9YN3ZiqM7kMaogGAvJMDaDvpqZqM",
  "key41": "5ej2AYi3F1Zw9DXDihF5hpoWWeGzuJHQthTQ4HXkAavvDZCpPCgXLNb5vWZvCBWouEKth8mwrQ7ux2zF1VC5ZkRw",
  "key42": "P5Yypb2iaTMBVH8R5YWcP19TDyG69iuHcN7S3GepFrUsr5WM9DpQd5YfW28Xcd6uECHAWcoVA9joSwSZGWcfWNQ",
  "key43": "2dMPDbbV6GtdHac85TcuDLxRfcqgU2BMMCvWbxSpFJpW8GE2A21WR2SWGLxQt2GQM3mNnp4FVrXffspERCzNsALX",
  "key44": "VP32yMzHYwZLRwcYe4WfBBCpW7cWc2hg57Fv4kAMxNpmFqNG7Ma1uqLHNJ4BaVZxYVqpizgd3q8TxP7KnqDcbKz"
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
