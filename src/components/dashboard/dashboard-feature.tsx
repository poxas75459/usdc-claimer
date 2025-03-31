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
    "3ohwWvAhUnQiWpeAabr5R6zrvpV9juoTGJc43YEHqEratc8o5JLSw3BaJLCwm5wiNsZNPeDsK9nEwrYfeC6v5tH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6DBaFDZGbVrmfsD5gjD4vGJEXm819yaEwR7YaohFaD1x8Buzp9jFCtMaceHi1qFRKbgBvaJcQPRbfQqVv1DeGvJ",
  "key1": "2uYcmRbtWw35XsHohdxj7r5kQhcuPargcbipbeQu1QuxpSqm14bUjFXy38rjRGpnQ4o8SAHgo27mTcm5XkZ9RjDY",
  "key2": "4Hyh86xQRdtpg3yRtDSyC9FiQ3ajhs2kJG33MFv7ho5ooyR2MU1vLcrwJrvhHjBhRT5LDzxs8BhH1WCv5Kh9hqQb",
  "key3": "5UXSguKJ62jX4ynrSKaExtj6VSGtrCeAoS4Febt3c415FuopxbW7U4VRbf9eRG9dYhsdNmTaRg1xSFMCkxc1FVmq",
  "key4": "43Q7zoLFKvKkP1t2ApzrAcvnsrE4ABGXrg6h2AT1MEDzVbWsUJPrqDSiAtNvvi2i1UTLZtYGAToFAWVaSJu5wArB",
  "key5": "PUPXo1281LeWUKX9gbj4Yf15LJP2ndEqeVgDSBBf4TLUxLprqXwhXTp8RhCEajYm6KrBC3CMfJbGsgWSPauN6LX",
  "key6": "2ZUUGwL5dB6vVNWrNdBjoq2nmkkUQMhksLKXgp16hPBvebRNwcpd6BanDqqLJ91ornZ3VsVf1TH225NPh9eYq3Ph",
  "key7": "39VpeGCsrgw61dVzxyn6a14oGvtDJAwuQFf9x85MLUExcbnc8GReA1h7A87o8RG8hCG5YVt3w5phs2CsDe48vGMs",
  "key8": "3u6RXv2zrUXYMKG6Kn6Z9UN4ogV2TUP3hktGXwXqXxQnS5L8kVWWEPTmop8qVQ8hARXxnb6vaR9mNXu7sDEniGaR",
  "key9": "2cNcobk6tmo2LzJL5ThELEmqHihmGTMEbkyPFaPe7LAWYjzULx8VWupz8SGcFxRUwSMND3wP4GUzUzQxYf83jM4m",
  "key10": "3CF4eQGxWmSZfmiSSPqrE4K9x41HMFmedzA2rVJZt6oqxzXRkQ2ZKQ1Tm995nMoUdhU2wYvn8otXrpqsADWgp6dh",
  "key11": "5BmMBW9dsjMNWg6H36KaNe64NFQVLQMJN4m1vXF9dq1n3FmDq2nXigKQNr5R4j5fwTVt9LzDvqSLmYzSQSLPiJBh",
  "key12": "5ukvxM6mFKmS1SCgqskVFjHLwtAALhAFcMwecUXzGMm3vSMFUg6QLroFc2mMSqNeY7F66VBaaVDoAY3wgrN16jeC",
  "key13": "2pDmHtiZrgmsNaY85L4ffisH4DaHpBD6gzuqdWGuPKV9hxHNUg6CJ9JLbfxfq2yDoZPfsjoAmuRqYNHAQetWBHWq",
  "key14": "2PDnygkmo3jsaCPpq4dTqg4FfGEpCBTbjoMZRoH7mBnBCVsNGmCm36hnGV5ytQDuZMoLGcwnUsfho3ak3mNFPsRX",
  "key15": "3Sr65HzMTjW8jrpmG52usnXJ8ETURXyZT8ZgHPHiRud9sF92jjk7yHHKvi8VBFC3ssneQnmjhUQ5XN1F1BcuaHMF",
  "key16": "4eaMEup9PnHUBrEf7cFGaANBaQ1T9tUQzCmNfmLbcYBLi4RpxiXQxRrgTbDKSKC4WdUrcUXHD2fM2D15JnAma1Hc",
  "key17": "4g4XSQ2ERaqgeQRWpdjTeZYkiT5JDtAVKqPm8QbTbddDi4vqfrBRHUafZrDvjkCkrG1E4Wmn3X9JztCiPNL43sCd",
  "key18": "58xAbCEVa2Hsdq2FZzwNc2joxLWf1TzSHeGoFDZmHEH8AuMihKjmnLKR5eaHdtrLbDGm9xqmqM3nBrgEz9Bj5PYa",
  "key19": "yMTkshrcV55iVxyvpTkcWgaj6sRCuXNXfNnzRqVbC3L7rF4ArnuUqeSFmwDETVK4KmfXk5b2ZRLtp366k9UHZVX",
  "key20": "xqeHS5KyVpYSwesmkpZXMpzyHa6bdphcvuwvuFoQFchj5DLZMFTzqWH41x1vzCzBUG4eSw7XBxEFsLB16XMH7vA",
  "key21": "42vEKrxkGKhQKzPD1wHcEkSKTL6iUhguRjJgVXxzKLj2MJuYKFAy9CL6y3qptNra5Mtr9Hgq1xLWhyym8LqFUH9Z",
  "key22": "63NX4Gw7qDj7f1YPTW6NR5XR66dcXS2Y6Az7PQxjA3GjLZvXNgvaJPFSRvx1s38JePEDtPDu6pZmrFVbG88HY82V",
  "key23": "3BtxGh3uR2NbcH46MidSUPo4apsXrgHgTv9HRY5AqebuZGyA8RbWroNZU9a5potoCridGBZg9ns3fh2FRWXAz2MN",
  "key24": "mX5GXQRsDkDExVewLiVW86vkSHWAMaKYCQJYS3sLz4wQtShmakXZC9YchFEj2oA4Eb6a4NZm7Aj7Hhii1gm7uQB",
  "key25": "3FFo1146rGaEm2dBnNgRmZsZ8RtdwZhtP6rJaZzmiuvy22d46asmbdH3u5xBk85kxTx4UAeNuMYtLVx27RBsswa9",
  "key26": "52wZnveWxit8h5jvJAXiXXxSiwUYsGLe2fMDKfhGbhuBvhKMyt8LVjwQyz4FrPDsySGAaUQn6k9geVT2bwUTpZj6",
  "key27": "4USK1y5Jf4etzHWS3V9tLqFFFzP97p9MkcrhcjhdsYS14bQhG5Up5BTvSMkaARnvAkvzjYQwb8njFKDG6VWN7W73",
  "key28": "3Nnk4Q6kBsHAWBXqA7xtCbJUGsaMVBq378DLSgT4LWBngHKG1eyc4yHuGbMCRgstd7TURqsMZuMz4xDiWp8JbJ7d",
  "key29": "2GZyV1QG2wsmRkj3t37PftRboinoeJGscXFcU29g165pdhZXi7qNoac1CcUzXH3zQBcPkCZV36CTjh5omJA3Gahk",
  "key30": "4mJuCJEEdjmvAXHrVeExQeSfuRK7u1FG2g6uRv2H4UiCBJJaqbxfDtL5nTYpEkmmdqRHAKuaEau1Ddobfa6vrNrm",
  "key31": "3KhMrjcXyNkkjZxkFk6By3sYHQJjbGe6KZGqrgCHsaZWNwZ9wTyVZ7u4eorrJKfyHaNG8h9oUbMtKiBi4TE4Zm7h",
  "key32": "hHpB91YHN5Xf9guQ8mQ5WF6ThrazFYhseqVrSGJRC1GWvf2CmuFqv35Uy2AcNxcaeY5LQzJhoRt6GwXqVbdzvgN",
  "key33": "3fQmYF2ZJtJTFDaRPpBBmET9eXmeEtx1gf5bF4cZQseh64dbK8ZKWNKtjh5bqm1TRMYN1LVxxGk7sh18jqw6mxmw",
  "key34": "4za6JDwc7sd8R3fnB4YWNtrZp2B2sP3KKjQbn1pnivWwDxNXPd5RmyqhQebHpy1s47h4hQRfwUDrEkBT59QuZiBV",
  "key35": "2ZvARfcK1XyfMWJAKg9z87m6LCDRakwvaavgs9Gwr6WyDGJmYRZRpELnxWaZdNw9jWM4ExUKTo292hCQQAkxfSkd",
  "key36": "2uZYprLUnmy7taQeXv8rBJyTCkuTSAZF3V7KE5Vmno7AFzvhe2PWWh7cF3fDboDipkeJySC3bpfqGa52L1a8RmkV",
  "key37": "433V3dM5m73T8v6jXATK7CfPWJqTTQYbHZQf9kgHrJnQ67x6DPG2JrTFoRpiE3cH87i4PgV55qArrrMuqE3ekCZt",
  "key38": "3pMUSLJv4bVZhz6V77kroxx2XLizbysAJn3WjtxZgsJZQQ33MFDR72hXpCneJxcuPFFUZEnsMaywRACWc16DWggt",
  "key39": "5JjjEenh6yKi2n6ajBBXuExc29H5ivCNCjWJ1qWkHjfaB2n25PJVZWhQjSVnTwuYdSmXjH1AETPXTepAS3ancDZ",
  "key40": "3cbcmCmvFnxeL8JTmKTMMSBTexjhBp7xXCJ6EK21EbUAAuMdKBzrhQAJnUFCNJcDsakpQxygVVjHNJYUg7qH2eLo",
  "key41": "MPRQpyozB99eKDSNMmVoCsKUZSAhyN6xofoDWzsPHoVpfk2zAwYvTTFp8TW5hW6Gpe7Nk1u3rMXpCypyRZvGzL3"
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
