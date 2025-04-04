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
    "5yM3Zg2bU59bvQLeZEdezwg2urhPibvvJDgZCR64MgUUihG3qp5scsrCqDe1gkChkgbmgTRGX4deiZYjVLJnDai9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LcMbmjxpFPfKiCCgR8q79xYz78W7RUGbWRK5t4BRUnVKqARDWL2VipPAzKTr4ZEwU7kJbMxAB9BXrB9AmKKqEmY",
  "key1": "4mThfqjz4mvACz3ZV9KawzPFjCCTXeFta1i7CbVcLidb2s4VusLEzJZskPjYmC3t82NP394iySUkHh7ZYRGjhEkJ",
  "key2": "5d8ZoGFeKinWkGuPPKYVWJJobcFUTEiVdazT2g9wXV6rqNHGhGW5ggs5zrV4voTdg5JQ4YnxTuBPKrq17TYGqSXD",
  "key3": "5nVNfxj7RvdNgR6KFn44pEdHYbkF7BgZEoREne6PYZd93HNVpXtENs5fuQmSEW8ceApZprgkD4cbUYhhexYNvpRP",
  "key4": "N81qf2cxcEnW9KUQV1h7zP6fvdDkHXtLBNs3Bfz6QzVBPaaAt8LrHmH2vPHmPCZCCa6F3mR2cP6FgZJcEdkex13",
  "key5": "3zMaPq89qVGT8xyBqrNhZ3JRbfHS4SXkPqjwAeDbRCFbsKkkXZi9REPv16MRM4H3iwfubPWzEMEvaLi7oMg6Mi1m",
  "key6": "23JRrGkQUYV4dV6sDSzNtByNo15NmSfSTPf15QqThzmz6RoJ12W2rFH7nHwjWWcsbbTbVwFgQcA7RyHZxCcrWCPo",
  "key7": "mhSMVyXNdaZ7sLpc24y7cRrf6U7TKquwBAw73tjSi8VJcEXmn9kpPfZEWBEVhpFdQStyqUDzakcS1qxrkc9A5mB",
  "key8": "2koE46PYwnN1VsEt2rscFurRRaKv5ZMa43NafLYYSyPHpTrK6JF4pomBoz6zeuFooNba8WvARjVPuNRLRa2PFtPt",
  "key9": "2MoYvFh79SiYygGFeNcWqPpuGZ4Fa5WATPD9AGPDx8Vgms7VVB8hT2wSRM9LhqHHTey6nCtyuw7dWCciPyYWhPmq",
  "key10": "4abUGWqMwun2f8WvtJuEgHfiNfWaTGXvt4bKiLQhVy6TGiA4dXs3VqDWgEGnWiLkJzuNNDiF3CcpX664se1dpdze",
  "key11": "5LXdPYeJtjSU4zeiM2p3rE9dSdzBWhkepucVi6AP2VVwJJSg3zqaeMxUttXjg4HgUgsC1Swe8xmpSZ1ejyaeuHGQ",
  "key12": "GgnHkidFYrCCi7Zk9PHb9mxxx92MiknNQnyzaCBbm6DT9WAvco86Jv4QfTotfRt25aNZsxkwV8p9K8eKpiKbP2K",
  "key13": "25eUZPYDLeFHDmTUEA3SGpXzQaiBoRDMt2KPj92UaXwoKiTD3MMyBxZhgvoydgV6cb8zyKyLeEGdbe2X37Uk63bc",
  "key14": "2mgxQCkzLHVdB8Z84j8P9bJgi1AuP7vv5LRdx7jGdpRUyPsXgyqfvoiqcftiZu9kUrP5YQYMaTtEfXxFpSqnBmUa",
  "key15": "54nfnSg39NnLEPYEGAQC3iokhTNPk5KF9ng6q83AcKF73Q1AeaRLzDe461nYxhfYkHZmTeN2t8nrqVUPPtZeq7PN",
  "key16": "5BwhwFgLkLF9vSwqvpyPnx9DSvXAL8sFWmBoETpDnKhJCyZNwucexFgnSKgU6CjohzxECnN6WteAsSmA1316SbM9",
  "key17": "4myAH7a1U8EiKXqf7QW2fMrhC36yf2VXaca9SvwJgeGXtdmKiMV5J7M8giYzGseT1ZwoQuEMQbm2SUpZiCMJGBwi",
  "key18": "4B1K5bRduHZTHGHxdH7EjtA7uMk6LiVR4RGhNsCJB3XANtQHUcQ1UmV94tnwuPSxRSKt7MK7vuc8Tn7rBQWhdn9R",
  "key19": "fQPnTUmTPgvDDxydqKY8bpLQnPKahhFpmPP137QAY49LZ3KzXMF7uFpczYTuY6rLKCZ3Q7bjuRwm2pz2XFhyxwT",
  "key20": "37Jom2kUU7raUJgrm1CYPzMWdHE9gMNtWQjdfSxPBx7gVakARQE4jiyP4VNEgA5ajEK1QfbGd23WUeTzR4F2Jctb",
  "key21": "4QsFFZVQT7yu52rZqhTLB1ToZetyc8D2T8foXH9HdEM4bd8fowNQuHMuFEjzW4taUiiuQFFq4wzruyzcBMawQxUK",
  "key22": "5vT6arbUYt4ZTQkdiZV2a7X1eMzHb25QKzgtbDPB1Bx4UJ4CSZTRB1atWuQf5qsCCF16RUqZcidxa5m1owf7madq",
  "key23": "5eSxnrcijxgmFSBDRw22o3PEYMS7h3aSU8SFLwVKPa7mC57yvxCot3BwxQoxwoPQiVsnvPSQf6RZoG8HZdXptSBY",
  "key24": "23e6HCYhTcuhvR2KiRxsva6qHabkRU2txrAxcJJND6WV6ZREWnMHQqku4HsTcF9CtgpXXKBoH94hSyJVfybq6BMo",
  "key25": "3Dyb4JsgdewDz3GURBeEL8f7idverC5p81WmotNJHQPizH1WknFT5qXrAZqr2F3i44swEF6XR5BQYrGJX4paJ7pE",
  "key26": "4U9E25eRmknFGHX16LZQwL31hugUVRyudWgju45uy2UpMtwFExAQShgsNp1V1LL8gpQ7MfqYuX2xNUsZr8Az3znB",
  "key27": "2RK6J2Beij1iBnC7ewUvTRke3A5t6Ey37LBEW1Kct5XsyzTNEGYnBkZuxWZpTSQRrNJ9EQLGrwTkq7cdh6sSE7DH",
  "key28": "5nobgkuNe9mW4hWdxiui2eeqmsSLGFT7EU2GuC6ZHkZEaekCdvxjBVmqebUgH1g28QehqLpPLYDhG1noQdshhf2L",
  "key29": "5vUV1MUrxzdAZ7PMZ5Sequ88mFeTRr1jx3mNEHRkAUgJtpQbHXWnXcSUe4yX63wwYcpSfdwc2KYQ6ALeAZYZ16YE",
  "key30": "5H7LxoGycXNRGpuyFLAY3esmUwTrFtXXFLx17Qs15zYpwVLkvyJNm8bdoWybZwgNWNCCiNCEKaK1HNDpsZkezdhP",
  "key31": "2BCr6rr1sruYptzGkTPYXYHrfSzqiAHbfJv4wpKj1Wk7u1EjWnJZRbmeYGZLLRGcrqRaR8fsL5cdRwAv4yV9cydJ",
  "key32": "2pA4dr4LSW2waYgRighiazfAduQK2WKJ94uo5g7LwCVsN46e1WWLPUnJ1b8q1svH8dtYuYHEBapkvcbfcwXBLYTC",
  "key33": "3jw1GUHa9en4GbixKbXzK7njgfe6wsofLWmdWHc6KeoqHM7Ch2W6GAckMUbadoaf2TFZD1jeL2Dq53cvVaoVRPfy",
  "key34": "3Z6eTJVd1y3TUjpaQK6bxnu5ubLxFFNmJS67Niq3fbngZqxy11TpQqueLybLuEaKDZx9L9nGndgEhdezVwi56DmT",
  "key35": "2217xe5MXYRfgLcMuDXdVk3iBKS9WEDMQZ6MnQFT482AJyHtn9o8gctJNYe9yTPcXn4Wjay1zT6JKTmFFmGM2SPv",
  "key36": "5h2GcXDyWPzzaQtyZbFfo6RJZJat3BSWUbgpkEU8YNJ6a8dJpz3rc4XVfZLjpxbRbtq18kuZVzMVzEmaTbhdkdNx",
  "key37": "2h2BcSRhnBeLHuVaoqknK6AMDbcy5KgkWCuWsaAqettYCS9XUGcyw8XGAA4NPqu7esvTJZjmZ653AhUkstezyGpK",
  "key38": "u6CAXcYy8NFfV4Sctg1BAn9rxgvZi9gNaA968V17rxe3rumXduKNyd5o9MnUMBdLrJumR7AB2iNptFr8qfPxVXa",
  "key39": "3arHLYw5PxMcstvaffLd3wjnTRYNNfL8zWDUPpTJYwZEKLGHqhySZgK6cWUBY43z843RFUbi1Awf6LdAfXK1fpYZ",
  "key40": "5CaVfwcNCvgveeo6JXEV74B3tP4ZYP8QADbfgwdFxLw5fHwYkmBiTi6RsjncxAabr47owmwUM1XoR4BchfGkAxe8",
  "key41": "3TPAiGSoHWQgbscD3YbR3yszYwn2pm81FMQgQZHpaahywRodsY6iSRLUrvrzXeL6ct2VhF5J4JRVsjZofcd2wK5G",
  "key42": "iU93wtdAL6NKdkeekVq6JVM9Rrx3UmdR7KiZNnwMJG18DZ4Sx2twLK22fGi8gZjyze8KxNgLKJZZroVxAvMAvGK",
  "key43": "19FkLzKv5wenMkAQ2QMTD8YoCqSf83cbkHA9NrDycUjqkYUAmsgLcNsnTwiTF9YDYeb12DS1JYVXfEfesHocoRD",
  "key44": "49jePJUnHcSf3WYAknhkcMKwRthkDfztpwawJ69TeeV2T2kuZfCuQymm4WBC2fqKdezB3nrdpesVgq4gHQCm6GrZ"
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
