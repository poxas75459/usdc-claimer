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
    "5uZ8UQpQfZ7xRKhGUE9Z7ozCZqNQAG2tEPj4zeEzonS7HR1xz83zSozZX4oWwJANqowvbikTWRFx2s56WPKu7hkd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RXEmLx8Skqx97u3UzDmTtFU1iY8XaqcMxtSYbdAQSdvUjJGHbfmX1QgSjqj6o7hmyaY2BpnDat8oE83fyeEg9fy",
  "key1": "3CMVq8m51bF3Nmx4hbWgUgP8idxQsH662VVRadhi4EyLHkJqzH8RjrNyXXa3h7Wz6Jc7VvPWwTtKK4qCCuPnUgPb",
  "key2": "65HjJ3P4jS8ia3Mbrsg55A9YMrvu3PDuxwyim1gjow3CwtC951XjXA7nGwjrSZ7ZJw2LyVdCZSWeCYUkgoKLN5aW",
  "key3": "3YfKgqMVrUZGoLinzANwmwmsJnMSKYXLxdfmzJWQD2BCvMRttqVVX4grFVXw5ubL1SWZGMFN5sJsJrBZJCDqDUTQ",
  "key4": "48ZEGUiu5BJjpHm1NdmRKWU7CkvFgP5ePfzj5cUe5E38a6B4U2PFXhDh2xwrXLuiAxfWTktvX82WZDdRxDHoa9oy",
  "key5": "49v5Zo7UMM3DAWcTadg7svGqNEgpvYUYX1xvko4r2brRbEQthn5mnqZKYvADkh8c47CtJCkr9xA7Ksprmyju3ffd",
  "key6": "2s4F2Bt2Szfn7Rt2S2TSJrVg4b4KArKztSaKGSgnd1WrNTYbTywLzNBbdW8jGP4Uet348KXZg3yachn3yJfdmoyq",
  "key7": "2hxL8GnSEWX182eSSJ1tzDW3VmxWRpQVJKGHo3ZfJmygT9Wr4Dsex5TGvBUmKEAdfmsXoPNDFrTZgdDKtY2Fo3dV",
  "key8": "4RM9pk6GktujAfkb3u7F5JjJH6A8ki88aqMaTJoFPBanYJVLbbbQqXt149fQdzQms2mqciQVzVq99ZsZefWXLSis",
  "key9": "3tnf8ReK4rW3WDrvxXLvQ9PQD4pHVC8LQx1r2ZTpRAP2G7PMZUW2cYnVRtAVcXLju41TNgqsi7maVZs5NJgA8A3P",
  "key10": "3b1PRcSsEj8eUrFntdrLrHQLwv3Wo51bVCAMVWCojXe55h1qiPa95aeMM6qztDm9BRg3bRdXUykeZhDrXVa1A9kE",
  "key11": "66pDx2MAXE9pmZjKsrApZYTGCBcUbiF4ecA4zefkRaKrpxWy4kasxxEM6QuEDm8zbna3xwJNDsPUoD1m6RBPhp3s",
  "key12": "2eAy7qqFXsDeL7BZ5pb3qs4EfAH1ERe96t8a4Qs6uisrdrquaVxvYHZztMUrApGcMgeJBkt3aAwvgBnBc2h6vEiz",
  "key13": "61zrEoL2Ub1gpduQ91Stx8bsUZ21NdtNTfofDFRaWgRCTugqriTi8QajR79TFnsd22W2pBoEcwY3Qb5vGmY92M3d",
  "key14": "5BTiHAoNF1uJA4Uycp62Bd4vCLypucRShZK6HiH81mDWnVndzcqHnHnXo2MyzFD6izduhejmGdxy4Pkk1PwyAFk",
  "key15": "38AQqCt8oZeFXc7GXu8KKk7wKdswAEt2gp9wAjP7PJkUNh5EbArPTV44aSrBzEQxrySY59Ufq3Yfez3awcsHqnPU",
  "key16": "2MXSNwWNrXYc25jwRZRf5MxLNNPkTmghRLPvzjsJpkH1ejHurBhPR8FF7AFxwUZ9UPvWmoc2FLauD1183Vk6xecd",
  "key17": "9XmZnWR4FUVxzcSrMYrmVmTVGjoivHAJzQWBtzeYJmzfTU7E2fV4aco9XXcoKaNErVpM3fENFA5b9F3TUK1CsPz",
  "key18": "4VtgPx1RfFmWHfY9w7E68YoQx5L2UdFuYSA4CDoDAKh7QcdnTH1NXmKMai7MbRfSkZm5sQDaHayp5osNBe1D9Nez",
  "key19": "4i5UJhj46pZA6CLw6GkTVCGvwcytex4WegZUPQYQHwM7UZUZ95CS8ZL91AtYodur8KiKsdKWWXM5HjF7CoHQTV8a",
  "key20": "5BEEAAxECCRnrNGzWaciT1vxcscPLBkXopFSskQcsdN46V1XmiQaDGU4jNCbEiNcUBKRgqcFnCntay6CXeTpZacX",
  "key21": "smeDQSYXo8SP7PR5NgKQvXF6Ecx4vcHn6ktQVgKZUsxXFZz9DNYZ9i6dj1TUuqEj77TF6SYzvzxpRGQy77vcmLZ",
  "key22": "2Xi8WWYQWN1fP9hQ1P9YXkDYgnronwBoTWxu9ETMF2FTnYUQaJGXtCoZXT7CcrVWrSy9j5Uk9eQzgio7TkpGpXW3",
  "key23": "25J3cNpTnWrJ4PQpBmkt9px4B972Tvzbhin5cRZUgawWNn5AxQ8s8sXr6FzFsMxYnt8WfmjygbgYEghXLwV9UGmg",
  "key24": "42svNSWYuDUhZueAXY8KeQHzEfoV8CxyB6CohwyswYQN3XxVdoVrCX6fRuWGTLGmrLMvLNFZBkEGcrk5ykyykKKC",
  "key25": "5ssFH49ctk9dqBtdw6sRsUco2b426vynkjbDNXbH1W67L86y2nKWBNcyEVGMQBohkpgKCjLcNru1KEV7rCVEQDQE",
  "key26": "3BuvDphhM42AuDFRRyCCrm1QonswNYRQC7cybMJt2r176CL4hXTqarK8an1oAsNQfMWDGwySZvaqykd8no5jhJto",
  "key27": "5Fqnejs5yDd48FmWAKmjMBmiMdJLcqdaj9ue8wh22HwPNdE7uLRuZrAysEmxbXGYUnM93K9d2LNy7kgp81uRW2Pw",
  "key28": "2BuXdJvUg93SFQxFxoBXrhssSHLWay8aCJmt5ZeqLTmctCCHaa8U9ycD9RAn9WSbvV6NXvPTLncb2dGfCg8WCwnn",
  "key29": "3PLVkwVFkiduApamKjhPhmu7FCs8yuxLezKJ8Ksuz8RdPcAcPuBSvhoRP6nRHsEk7LDCz5uw4N4QEViNVjNcUmgT",
  "key30": "5zQaLaC88wdHT94jNzVMqSfTEKgdZ2TtdF7KQkRqBY8qZ8fLxZWm39RVjiutXPzjXsE5h6EJWjhnh8L5d1KY48gz",
  "key31": "37GsEkjY9AAbUriwyK3NTgwgX7VPEnadJSd31LXVP74b32nVJJDVD323fEK3RLH1p6s1mKU83K4WfWBaKzfRDmDv",
  "key32": "5sLUgy71FsKRWmKFPNDdHBiXhYmFoub5rjbfqcJ9wHuvq1fuDRABPD8MALGPLZEk5oh2BkSKB58cRK3CmCJ8pbAN",
  "key33": "5QdgQ8GnrxMPfCzn6Hsw6qD8btzeLRXTdhSdD5NQqczQPEm3BgmbsEccd81VbT8FMKqtU7VaF4bHY8cU1VE9FMqJ",
  "key34": "2wp8jnRctBDew7uYE9vviUx4KiLbusZ1PNnPyGqSs33MQcMsyYRpjjxdL1kPUqvABihTvETCNqcdJpTDszJ1Nd4A",
  "key35": "5APnqzcvGwpCXGsSf8dFAUmYEkMQviYa782SKJpiH1NBkSEhoFnb1Bxwb9EhN8efohj66PgaTyTyceUB9UJ73VXT",
  "key36": "5PdR4wJQ1EzpkHrZqc1L7hCWxUJHpbscJjjUVv7KbzVRA7c5K2w1BbTP7yW2t5goaBPFSkspVfAXAWRZjknQovXk",
  "key37": "4ZAq3BCKcy9KL4LoYzepXJQXPrnmBsswBT62NX7Zx26bCZ83cXPevSRLTKvrK89CuD5SzpeDz8h9ZytFBjgjpAvF",
  "key38": "5WXcsffCut4JtxyMVDjLWALSnBHnwreSMM3KUgnLGqvber4V3xqTdXGixH13ETGygnii1aMKSf2UsNkQaQEEFMXB",
  "key39": "4ScC7WKmMCczjvwB4x5SucnsNCFY5x1QxgHHtu1WNGqUySmztB7VqMXL2WAuR2kqnE8QQeP18d3J5hDPL3iBUD46",
  "key40": "4k7CKSxd8sJkmjfJDctRonJCFved4gnRRyioGEtn413tLyLCk8TaCkNNJQyEQvx3P8tKhLAkSKp8whASobqT63CS",
  "key41": "389zRzKRjFjXWM3yYwTc6W3M9eJ6PnTSJB85D2idKksXvexwmyzBXwMdm7r5smGTXiXXEDCdxp8kgyJFrJBoHxNi",
  "key42": "9uGphSXiFUCPrsSyoTZfNPDkr2aB2hcUPPbVDu5QogD7R1noFXksnRe4L814BpG23GpQjr8jkgG46KVBAVLYPop",
  "key43": "5X7NoaudQ8N8G32KGWJm76Zpg4nQtBWVG7xnCmyDkSLTYhRo52nXa582D33wKBaJjGn3vDthbDcwHmGTTVDp2Bvn"
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
