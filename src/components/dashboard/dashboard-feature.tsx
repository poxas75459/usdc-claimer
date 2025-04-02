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
    "5pXm5jcvnxipShbJSd7ZJHZaXvJ8Zzx32BL5sqsrzyinihpM8mn2NsZaWCCXDBVaGtVJbJ2geWYQzWMk61Fk4axP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A8BjWy61HSphF4Ad63eEAYzUjhzXh9Jif74jNCY3wrLoHiUFzkAJBSogmxAyvyaSa574DhAQmYkEwxEQEiLTay9",
  "key1": "4Mwvhe28iifArY9XKgAVKS49c9Eb8Ez2eSEJ8vShj87S6H81ubqhmUxFD4ovGJy5y9wRS7eCJ71h8e4cHwjuy26z",
  "key2": "4xQxCc9cYYExvQ5FhaRzqFM2wCv5dwddTB8sWLCrzZRAs6wNWCotgEbbn6cTPRqCVqbrzuzaQMFAj3jjtrEX3GBA",
  "key3": "2HCkBWavY5v9Dc3vVA2mf4cv7vURCCTgz8s1BK9gmRnLsQAnh8ioTQA3uPExYiLXm8esWtWpcYSihi4tKufBUCo5",
  "key4": "2NLaBtXsEzq2F817XeG5k6QEVy62MHFjwqnbwNBpDbs7MoYU21uJSRCzCHQfEromfr8JWuF14kASe2nSdai42LCD",
  "key5": "56eCzS1kYLT52feWCLgoTMQA9NHYcHUQYSWfj2cyaTDu4y3ZT9He4Ch2hixwSsPEF1mkUdoz5isoSjtCsWXq5sPi",
  "key6": "sn8xrGY3CrynbpLDkQpQKLwPbq4pmAcpEKQVwdwtEfry7mXgDMY7zjrz1kYuqstBieL8QN5FenKNw52c1QBcFAg",
  "key7": "4E7FB5CHySgK4gXo2QJfUQL8RnUzGj4VM3K47zN3B4ieXm8jdduMwNDqVF7vB6yBkcnuTuBGBTsJy9FqiSLaPDkY",
  "key8": "29vzxrDGRR9yaN6pa9JmLFYEXTNwRCT8UTGXCkfH3A8ek1AqeB9HysjZg8LbgxnoRcrFN6RrU8d67Ea8aPZadPee",
  "key9": "3nXQ1tyT3ux1y7jF12d9tQmYrqE5jHWkokmQ8rjHGgZZKARCcqnqaZMq7RR77VTgAUgnWbeem1KKap3THzJ2jzAw",
  "key10": "4c8LPESwD5ZVTzcHj4WhtvDKUgfBxDa9vz88371DkR73heRBdyjcydLhTbYQwZkCQoGbTqR6PwRNe3aRDup2PaST",
  "key11": "5481cpZQB3Sw59LNp4WaC3igDjw1KaPTKVCaURJpvDNaXNgGmYGxeqefgNwXe1vj278Ksnfn1zfZLuHY3G7x4XJZ",
  "key12": "34GBNFBS7pfd9cCg2C75d1RfhYtj8zNGwt3i3DY88f3e7CmNMyvTAoN3KHdZNa9x98QGgFohWBexbKkqXhMf9z62",
  "key13": "5AezmzYrkKyFeBm9PzBD9L6oP93mY9LRV5NLwsedNMmmuN8sTnAMxCUQhmgyxt9f5BpHLjY6arwKtCNn9JGBYViu",
  "key14": "34ZKVitbNhM41tapnFvbB8e1AYtmHVUTCvKBgHWTp2Xvi2ZZTACeghQoYzJRppSRdUU42fUo5XgXJtnGz4ZM33VU",
  "key15": "2w17eexgxp41uwKFfQrQamwVu7FBZ3RCXSmtuBLJ2mWHqJUSK4VjVbCzr9YrmBXREqvEZAixRBbGbXABVULz8RZg",
  "key16": "2FgxEJZ7yRoZvvVXgUsp37w3Rcu2eUuG1k7UTCVCTJnhB4sRum9jiZ9UZAtLErRfvXxpF41BLxpGBECNb4X4NoMA",
  "key17": "4r22NQCizfbXNS1RxgdGAHTVeeo1ADxzPiXe1FP1PobjqZGxkpHA78hDTTAUjmjaHAeLtizjPHohN7SfdwWjpuQH",
  "key18": "5kDD6oJ5B3pMxrny8vPbUDtp8ArU6RgDznVkFhbP5WcsGaQ6hCbhBf1c1ZA9LNixMVMPPvnCrvoi5ZVk63SvgnBs",
  "key19": "38CYYE26nzUvi1ggi2j8BjfHfkA99sQHYU38433Wz3TowSt8WDMzcusG4eaJEotwkdm1wj6Bc7TRPPFaFzgRaQt1",
  "key20": "2knCG5L8dpLRtp1rG9QCJi8un86CUEVbX4JAiCF1JE5mbqpVn3Y4oV3bkebLTz1ALjTgZKbx7DxRNeofVwXfkpJn",
  "key21": "452SwMbbwzLwbGFBCL9Yp2o76HqiLW1Ab53RzbwqigQVtoM3ntMPr2BsWfb2CUayrNsPEch2ZSxu8BEmgzLND8U3",
  "key22": "Mb6P7gaKNEJcWQm2xDj6zx7m5aPHCytgr4jszMtfdRF34arWCh7Bz28hpdL2dPeZiBp4eQjuhkAproUri5ZqDQe",
  "key23": "4ZL7dKGAroW5kN1cnc1pFm7d2tjFxWyeQ6Tq5Aan61KVthSwHhuXJqy4DQuTdA4WuD998gv5r6LYnWZRq3xnwPWe",
  "key24": "iY2vvx5MAvX2x5XGgEKSM1JTyrW1r6E1jusqzbh6EyXgqKcjCBo328g2VCKh7aoYceNa6JtXcj1hEpgQ3fYmRh3",
  "key25": "3rSdfwJtjZofg5qgUpCDhmCg6ifZi5csJapyZVLyumVVEFTkY2BtvfAmTMDHQxM9RUfbpxitLENmLVnHz4ZwwYZp",
  "key26": "23XJgNgUoDkmzskkXQqwUiZpqgqqZvZuMbu48XCTbXYDmgxsmvtGjjGRXaHpm3NKr76gEBsmxv7Rg9e4pPtHY2V6",
  "key27": "5vHVkD7FCf9t48DnZ7GTaWiBqZH8FZTDp6cK4wJUFvgMiaRukG25Q3KDwfHnK16aDom9VaZXW647k6awuCSyjUsH",
  "key28": "4wE57sds86gscG2wXvBo7Gk6wV6behNMimds8sJBVmEpQBc4HaYKVN81XMXttsgGWJh5xpdSUqMJmRmHRya4DUEK",
  "key29": "3VvVws32XpKwhdQ3WHqd5p7Wgix5YsMdBemAjh9X4SH2A5QCFiZj1gvezg21YMzNfe8LpXGBJrnykw1nBhDeoTbS",
  "key30": "TEDo3WpuCekn8BMw45gpdvh6SWZKZALEr33JKPAs1dS5aTGMN4RjANBcBR65bmfL2unGMAUQ4DJM5s89W1bZmtm",
  "key31": "ZEussNtFaSBtRSwCcpZu1zczpgFRiiYm1ekWdT3As75rGnMfcKN28zU2dEBrvB94wRofwRdK7KmT2kDKjS3hcj8",
  "key32": "4JBehX3B3bDc2BiqWr5Td5m4DMNY93uvCLWHuRARDHoVfM8g7MRyx2FYSdV8gQXmwvK498Vy4L231WLBiHD8ZFKw",
  "key33": "3mnChKXSVvGEf4PPuZBApvvNpb6Vp48fdF5jczE8waYaXaV4gYoM8XbA9ypTV6Xd8JrfC6vVNKmT9CxxDUJ8D8JA",
  "key34": "4rFa2PqpUrr4stjaXkSC1aYxhoDK1xb9Gs9KcxTqcKGvhvC29k3M7rCtrfU1UC3QSP6gbE86hMxcEADtvi9u1naR",
  "key35": "4hM3eduqgPfynCFb5Nd1hTvjJbFRG1umdMkAZkWdE8cP4otvuJTBu1FtgegTDW93DvEiKd1zZpM1ZnZPvVqjsccM",
  "key36": "3DnWSj3kGV4Qqt4GRGYDd4f8jcHsGgJtVsuCUG8rKDk6xfaxZot3cQycqH787Ajq4SPmFJtbKb8wJuGD5Towp9N3"
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
