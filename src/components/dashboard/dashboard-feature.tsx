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
    "w6o354uA3GG5QBiUXGaoeQaU6828PtzVv6WTLpUhza5wbFPVLszpSPt69YPikKGymX2F79wpw7gjn3Sa5DRQavg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YwYn63vuJyn9r58QQuqANoPW4g6B7u3CD2BpAWiZxzhXkFfXPgGWtwFTvMs9XQUr92DZr2BMUp4ZZZc21yRHYQd",
  "key1": "5KZNzMCngixqsV1dVTi6Cs2R32jXDzxCSjSSE5U5jHoStoshbbyygNNGY4LGst4GvtTThmqu3mXwGXrr5LDg99eE",
  "key2": "3uGt3DZs9NMfjrSNtV3DpH2GprswiVp1AbMcphuKD2aMS2SfofYSN1x4wh3v7Na6AGsPTbxppw3euhfWfuTR2iSx",
  "key3": "4h2HSe3nnxdXX9LNhywjkG7yiZSrHDM5aEdMsUPiBAzQn9PWtYL7nAb8Z9Ey1cp1p9jg4k3fPSvZtqP4Emf5uADs",
  "key4": "uuTxSppdu32Khyu8ZETYiQBD5jB1p1ed1WApucsJ6vPArfMiXMK4qqNo2sEMMuWemHC4bD6V6HNmWQ4XVLrG1rh",
  "key5": "TcRfEcQYAZYkH6ieKVnJQyAkkrTSTEUsoNdd9buBaKa6Z11inpRYfPK3UFiEBqLnNoqxaL7D6kGEiUdnXA5z8Ku",
  "key6": "nCQbZuvg2BgHbGJXscMwgNBGRGrSyPEnopqTdgSb3sNGxVtyfj5dxTukw2t4wCKz45PwsM8JGqEW18E4yU6x9gT",
  "key7": "2iGus6cvLZWWnoUpm9Si4ZdW8D5ttfiwMnmvqyVc5YhS784bXNGi2M2opcHKL7ioSZdRmJHd7Cyh6gzhiXiPTKWX",
  "key8": "2VSzYzaUHgykdLJoKti9o4EJHWoSyd8UyeQddzzaRSon5gWLLWswKH8yg72BwKFXxF7gE22s3yjvL5m6Aby2ZP6r",
  "key9": "GjwR7U7CePGX1p6cW3vqwA9xNuHY7rWDHnrY2j5Z9PgEmF4NzvN1ZwX89iKGogfBJyxn9X17f2gS38fe6NsXQ9C",
  "key10": "m3L1Ex9XTnZzdQoyGgyN58kHynj87q4YCUetso3MArHWGfANTBupAYDM95jt8oENqJ6aLetUxCiHzzaxG3C2Svs",
  "key11": "4DUb9wPuFpfmZjhALvsUCMSrEysVrqK3bV9bAppi3ioabUskXLvuGKDTnwWn42N4uMtsfTYCR7ebUkL3G3k6Jwpm",
  "key12": "2us1MuowndDn3BNkC5obaahGrgnV8qMpSFTXSTsFFQcP6m9a7GarZWqPFW6RDWEunLJXiR8bXmGAwYhtkeTvx2ER",
  "key13": "4WmSuzzeoJaE4QK4EdL6aSbcy8p7ZQUGUCbygttrDbx4XFoEPQAttJ9hs4keC4CRp8DyV3QdC8wS3MZZutNAy9KT",
  "key14": "3jJKA1cMsUVNMVrdcqE2qkhb9jnCCNmhA4HUFSPRPsZuKkVHbWFeNH7zD3swWS8iqvFbE8RFGKMPDtu2YpMZQpQL",
  "key15": "2WurXRRvJBmETBr7ZiKiJQ6Ddk52hpRwjGkNbGonynj2S1k56u6fKrb6gyKk1fkVdCgTxZov4oL2F28mF4gx5E4r",
  "key16": "2GDp8M8MwuE32JQDE1UjJ4GhPUNC4UUAaMJygRh1uGV9hwAiXMG1Z41Ch254Wnugm4Z17fUNy3nki762XFMJfCGB",
  "key17": "Doo9C3NopW88xXXuQ6fMMmwbXGMSMdHrithymbEioBM39cg1MxbANMX4Uki7qDWv6wgQbwgmbiWGcGyGL7oFCGu",
  "key18": "4eSxuiWVx7WuKRUyrrGimhfdi87p9oLde7cHyETZ2NiLdvCWqf1ryTLXDiMxZA5w8Y9Nh4Hr94ctztAf2GCnCGW1",
  "key19": "5Th1fqtv4VvgK77qTxQ4FcZWy56HVj1gBjwgvEvVBmGmYqvKR48ZoXCUxQUojrcy7ZomHkziKMpGdcUJFnrWfx9L",
  "key20": "3ti7Uz8ZUYsoJAnyhmmeHhQe365gdkMTugzZ2zheAd7x4AKhJ8JsjLy8e3D28fX51sWXtQ72cHgiYLhGdmJk6PXg",
  "key21": "4CtQewKcEmxiVB6JKVKaw515bwaZhjRdyToRdxyvR1ffcPcBGudftWJpckqHZBHDvkFaV5jbjnQmuAXgK38VZ2DG",
  "key22": "A4WtLeC61W5nR3KjJqWgKHqALd6Q8UzYZhQ18SYAh64HrpYdBkqquY7uqCGt5zNW2iVR2ef4bhCmAx9udfg3Stf",
  "key23": "nfRzqY2rGGVrtF3jpibf93i2j1DdofZL6UUgU8Zuefb9fdiRK8VDYiqox22XH7R2hXazTGK1g7GM9cfuEzH1XVG",
  "key24": "3zbwNZA3rVfozSLLeUu2Wd3SSsybg55vkcPcY6SMZuUFHKZFCzPXfATZcS3Yr7KigktA95RAmULmoBiUbS6hoNfw",
  "key25": "221Kp9sNFRUAAtMneNVYa1XmtoTb3foeJvjzkPvJfDcGbaUh1Fb7Ue4kJsbNSY2mLiMX8q6BVMMvZugXGYBzQE2L",
  "key26": "2jDfYKno2KNi886PjSz899k9bj3EmHQDwh6fY8F3MPfuL4EXQ8ARwDWV1rWQ67QSP8cvPGiRPoyLXJbhPDRdyJPU",
  "key27": "2WpijUM4pjM6yi65WuhmnvsdcnCxphrNF1NQgFHKh5vSGeKTnACFgUWKgDfDprkthJ3A2NkaEthGGzrK5zgXJd4A",
  "key28": "2SypkD1n4acTfYJHYBTcGBjsfuroJrXo159hF5fTHHgDKXyawY5ver775gFPKa7csx2Ctxq1VzXvW7GiM5VrLnTb",
  "key29": "22SkPePJ7GGM4bnZCFCYw8uAb5uhcxqY21RZVakTdAkyELyy6djx61i6QorbvsiC62BesRVhsLWPnwMr2mtA8TBt",
  "key30": "4wrBHZ8NNXWcNKNuGEJNtAH4URRqNTaRc7tsHmN68hLpDiRCrBbaweNfyrngXJ2apg3vywE5W18bEhL6awF9mXrd",
  "key31": "22cWtndbzoKfwyYPC4QKJZP261uPJLyhmBzmfyTFLrKTe8NdWRdVw3hsTK21qjg17W3c9moU7ioq1YSDDSeeP4g6",
  "key32": "3LjLUVyHZvK7yRbEyVYerZ55u8zd35MiraiSDTwgFpae6Pmw9yGGCKfAELDP6L4QLB2XXCgW3NQsiSdAXGXRki17",
  "key33": "ZWLCFx1NkD1PFGRXCHomy3LdZpSRabPEW74kZBzXoifg3fAgg9f6iU5dxshiQqq2fd8j3zg3MfVdHrw4gjQRbgt",
  "key34": "3xw368c7FjTvRwXR4VTvTjBK5FJMqgs6QoN3QUH8d2D3UMLewyd18xuUgnr1KDmFjpKRkPTzjo7anoLG6ngz2Rfs",
  "key35": "iL9hemWb4vh8bQzoRjtk5wSCH3XWnyXpQ8hfLaWKYdXhQR2TnednttsEBRFJoRiBsuAZ9Mbq4BVTBNpWFizqQU5",
  "key36": "5mQjesVirsbkp9uxYqfF5ze9D7s4FnkVWGMFWWJknYzLYE8qwZLRs38GcSyimAFDwwYphgXGforJLR6hmWYbL1py"
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
