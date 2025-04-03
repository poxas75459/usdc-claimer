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
    "4SXLAumMwwo3kZEMri4TX5RG24fNjnZRoWHf6j5CF4qWjUBxq2KYYFkKWzBkXhkN9hvHhg3tUR1VyRFMt2DPkQLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e7hd6TLeMPZbw3hTqyK5EG3GcKi4ZcS8dH6g3mJea4JZmesAErpDwgUTFMBZn3kCiAT9z1JK1HiugXGfh2NbsD1",
  "key1": "4maD8BimX6daGh2ipA4fKWYkfq89zNdpzrnAW9TYwHNhf2JCh3EPaBhkwdwNfyotCzak5fWkLRLRYFftGUg6UWfu",
  "key2": "2iuzNw7c1454rEdkDcDpw1DuTcHbESPAPpk39LtWPoz4ZVBqiLFJ3yVRKQsTpepae7qfiKQodegY1uxgaaNGumr8",
  "key3": "3v8ao6QjXizFvampEL36CvqFG1a7Qjs4938AwdvLzFULzx5GfMm3eb19q66NUhLDgdnvZrfBX2hLrDSa6BrptdEY",
  "key4": "2Es3CnWyzFBAcJ5mjAg7sVs1kJk7rEtSHtRV82iZGMhxvpBGSiXTqti5TbeDCRXKQNUNtfMdRzvbw5kpH4qMV1DL",
  "key5": "3PVb7v4wkKJZCgEhN4y3swRPTj38V2tKdSMgiDaFh1MKjrzonRELewjbBJvkXKfutPwtXH4F3PJonEEos2Fx5mow",
  "key6": "33DzV4quEz353YDzDq6EjouLN5tnr6F3rL5yzV2xMrzUH2W98ThF1Ek7Fe87NqBZEkxW3HoPnctayquAfdDYVW3p",
  "key7": "5vxhJLJqd4GZ6JuPGGFcW5eCab8zYHVtDpJQ1VFvNycgboPkjrN2iqGwKUTDzSCakaN7oLfSZHSxZEC5BbQE3ZcE",
  "key8": "2S4U4fJDD5bC1hz6FUJnXvq1DF1w185N1ddZiw7aCCejvMfRE5rrsMfuVyTt1uNSvkwUDaGi31F2GYATA7PAho2j",
  "key9": "YhZLZdsBd7JR2Z5xn5qbVTpehFEYnbyApLbLRBMoWKi1ho5mUt55ot2sA9bmFiwjSNBhMFWcXPqi5gB1aNYvutb",
  "key10": "5uygV5c8hzeqkzhN2RqHBj1GaVGWcbEE8Mu3tuPtQRjgUCVuFjcacnniW9Apb9q3i5XBQBUyERcZ8TttyCzEEfVC",
  "key11": "6ojX9Nz4kbPzUHQTNsfGJXGR9sDCNsaSwAYifS3wpcYZ92m5oLRAUBv4oov4x8d3bNYQQKL1SWFBK3vdniyavD7",
  "key12": "44SUATJ2WHSPEgF7E3SHMAySWroh2CCzHTN16SPQSZgB7nXvdDRuhNGvNDWcoe57LXBbGpBqkdyZwoNmfvCgbjfj",
  "key13": "5XQSNkGew6ny8icwUMnZDAvWptjJA3tswziEieKH48DXyCdPR2QKMEo9scjhBMYizKb9JVfnb8e9wPx6c92kjqSG",
  "key14": "3MkGnoYqJDi2DFxFC1m45x2uTGwx3KavpjL7jdCFrkF6xrG4NJdFmNK7h5aqo8qfcqjQKDP7LWG5jmyfxrHWYnXZ",
  "key15": "3V9KftMrUH9CrhSVmMv4yBA8P4dZQxfftkzRZV1sM5gHYcVX4YzJRBunfZixziNjiHKcSWCFD2i48Syt5wncPEqB",
  "key16": "3J3jS8nVnUBsqZzJN9HkCXiJF6VqTBBX55tYxTwGFvaEG93QiN6shWdVKrghVbFTEhVK9dqPZ4dJ3yHjssvvnFQE",
  "key17": "56hkSmWCau3TrHBs2eBHiwPnYLD1SegVxrrfoME7T7fV6pNM4tcqLwH8bTQ4XmHyvNx8CE9cVgnB9ThddEQdzq78",
  "key18": "38hE7TpRAH3imTAAj32fJZ2GD8Kos41qK7qTRuhXgjeqxLRMUQTpGi87D4wxfTN7BbGg4gfVyXBGsJ5na17f7FcJ",
  "key19": "5umYCpjRZNzMNZXw2htNACVVGucYLn118jf36vcdkQC6fUZbFBaJkz7FWma1HgzUoTwHoWFpyqH8z1jVUm2Gb4SC",
  "key20": "RV3dmH89Kom1pFVyo7A8opzkSis7oE6iJX5PVBS1UVcA3EUzhfA6Z5Eifeghs7nSZum3kr51TKhZfVAFpfuEpxS",
  "key21": "5uNWoVxXGykYDmpjjBrno4Zzi4pC7TNsnQnWWqQjHbmWzvA5DiTgCDJ3VXYXvy71Q5c2hmSvc2P28CgPU3nmdfz5",
  "key22": "58RrDh7NKdnaviaCph4ieTkDLofFkQEywNdNWqyCbFqVEVnFRfccKiKJpYGa7197vyoyfNECMmiNT7rVkBhhR8oo",
  "key23": "f213PB5CbD7x1NdEKZWK5dBrPZ9HDzpYtYYXMhpzc8FcbmcGqfeRciozvaLXhwefKcrNhyahx2vcLmUr4Axod8b",
  "key24": "5JPwjzpahn7J7ENxbg7gnVfMU6AKZNwRcitJ1ridyJDQGqT36uF8uaP7awiMgcA53CSeE1c1PhwTy1McKK91wGR6",
  "key25": "537z6E5aQbCJ3HyYCmhr7JQZNAnCRx2MiHqZafMAw23PcfEL4DAPexuXJ6fvWB3VQZEhpUxR5cUs3HSBJ3bdDy5s",
  "key26": "4HYnwtLK8SYGTkdK94doLpACXDQdB4WacxkCTFmUAypty96KJxFikB8TXqZwirzWN1Xj19Tdp5dFV98HCVHqsLwx",
  "key27": "2Mydge37zBCCAN4bFgSLVbmj7w3RWbTBZ4v76YgybR84pnq52rS3edF95MXBHfzGwmsjZSbiKoyXF6h19851o5pt",
  "key28": "3PQeGGCSY7JkNQR3dkL5qTsXzJmJcmwfAA3Pcj2fjvJczr1ejkFRUGnmoxVUeofyRqnfoc2kNRwxDVRSgWC5CUWF",
  "key29": "662xDaZFWyRZm476C1RpkLrzzSprbL6WiCkp6foJFF128fxThW6NSd9RrwPzMk9zcV1KgznBPzTNFXfoC6jBG2TJ",
  "key30": "4ennnCXuW9R6HEt7B8ezA4BEnFs6pCN3ceGvagZC54iaJH5JVbfY8Dp5G8Tk4t12Mt88651bgynWJ2Lwc6Q6Q9qc",
  "key31": "4JzpwmWfoPaLt1TTce86s1rgd9j3RScYL1EhNyaDvAtDuwEENgQ3iHZkSfp6H51tmZoWU7rFmzhkv3WPzLdS6jPk",
  "key32": "2Vcxf9VQ4AZo1jZ3DH549PJAbEcK5ne9LTjbKX7MaLyHgZ8RBsSghac9ez8xVkNdMcsxuh7vQeaQWDYgZQNGzGrv",
  "key33": "3SAZxt6WNuqVjukWKA4Wuwmz4MHPZULtUjUfZHHt78N3aoKmGp5uMmg4edmaXbGfVKDq1x698T2dEC5so26dyRgi",
  "key34": "oHdJwheyWmJuvaqm2HX86rwFURdfRRHDYHaY7jA8qf8aeQtpGfwYqeJJqzFk83FuHJUvMqRRsMjS4TkTAYaKDZq",
  "key35": "5NrWMLmNtV14QDpLEYWExczGKtVrXghMpj9vvtoW1b4FNHzA5gYPeTwKk16yaGMsqdEjJi7reQjTgX6UGyTzUhpV",
  "key36": "3iGLWR3s1MGvG1mvvAo8g9GU9MdzKh7UzhEbfNfoe19SL2mwk8WjgqoPso8duTQfmRGCypZaCazddXiEt1LfSXo4",
  "key37": "3XG1kURoKr1NpEsBLrUEuZuppRYdFNLKXAMRm97CXcSzPkAd5HEe48pCr14BK3TcWLxGKp3qZzR9upqSBcc4jpXB",
  "key38": "5Ur95Cba85QYCYpGjgdCRDnAUfdJqRB3Jtp6tL51bGmvom4zKAQMQF5DP24nL4W6MrrD76XarPCjKuh74quiKgce",
  "key39": "5hcixeVMcJFsX7f15kmpsncv1QM3ooc7HNJ7oWK1qzJ98J99pkubJQ5eXaCJz1aaHawoeKkiP8c24rjC6iP2DYmg",
  "key40": "4BPBvfF4M2qctfDnwfhLXfzhoLxujga3nR9x1qBwAko4vuX9ytmF9p7V4r5gz5s7uoY3NgR1MPo7rAwF1sEyXkNP",
  "key41": "3N9c3fyE82KxQpV8t9Uh11bx8ByTFJSLKkHp7e4A522nbfpW8icanq9DaUMDAAo17sY68MpPxiqBMS3LmuQZntSv",
  "key42": "4kNmyTHQsRWN46Rmk2tpQsrBnfGeXq9kNTLxzABtugXNpJkcUpCF1PYHKe7WQBbEgTxTL26fSdiiUSCj5H4vRUMu",
  "key43": "3h1Uc6a4xPSMSxq49KbybJUQyxkkv3LnFQEHJtKsQHgCUraw767xdy7EfU1DoZmbtpVcRdpNDAG7DUYkn5aucArf"
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
