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
    "4umxHRRBbLkhVPTgFGWmUeyTPJtHm2549GB6W9ff1jPLJneqYvUCsLVkLPU12eGd3rN36GqaTuXQgFrRo8twXefP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FivMNodfPCZv37tYEtufWCcMSk3BdYuYCm7E5p1YF68xHB4Fx5pC7A3gALKbdYSmgM5AaE5j937NX16QABA8Fyj",
  "key1": "4SLfVYsVxVdAABKX92FDrC8vZPm29HAc24VSAGpgr8dAQ51U5vJVMCDix29pNNMQKF1geDttEGEvaQRg55MZJKqb",
  "key2": "5ytSPAqNCxx9DPoNQ9XwFLNAD8Z1ESajqN2MgJpVAev3zNxF8SqQKiK46JFNTsxAWcyKqDYTWLpoqWdpBGjd8QMo",
  "key3": "2Hg1NcbjWJT8Jhzy1iRqkNDepV3Pkabj6DXDdBw7GLC3ip8z2rTHcw5PY59Y2sQgYb68CcGYSau5hCez2Uih2mon",
  "key4": "59ZdBNyBHKYQ7hfMTHPjzjh4ezfEypcdD3eLeQ7RT6v85o9tWaz2Nug2cW7C4Vq3GjNmjBDZDQ58StuwrKcfJ8RL",
  "key5": "2CzMEJiCVGwDzmSTTmnPkN5FGn1wP4ndyGMtakWj3G4nN64iLbsL1JCG8mgaBvDbaKBNvScYs4o1Xs8Hq1rSYQLk",
  "key6": "59vi3HmwkK9ssaXtnBAuruB7LA4LWiwZfnD2KFWmWbjisN8HYwnP8AfaVERJHabpZ7HYhxv4Ctz8ZoAcFRQDgkbr",
  "key7": "3WxYzkVr6bPxDENDcQ68Zx4ShXupENVgXc6c8zEyPRVhv958JhR2z1XwXQuVjsPasd2sztCrUPGYEuqDxYyALVgq",
  "key8": "2rBoqRCRN7G8E55HabMMqNgAHHKwunCgEQy6b1hUJSNPQqHyexEc6PfSiM9zqLUhBQ4YTnsvWvYYqbXe3MoCNdNx",
  "key9": "3xKsL3pfZtpDuQFeUeQ2n4MtnaCqgXNFxjYVKQ973etfgJgPb9iuFGwwkSUTVJj9BWvyPB8uFYe99WPRTiKQ9hfh",
  "key10": "5qqA3Xt97jum5tj4SqymvGCprRjyPmsihy3zgagNSz9mddhvqKLjpS4VQJYe7FGArXCrXMQQCyrJQLcaLtP5nE6G",
  "key11": "gocXvdWcrLXpjP28NeeLrS8j94347QY4uz6dNFecdXxfAmZ3PcM6DbPCoU1ddaA8qimvucTrSyq56nMPfx5mw9f",
  "key12": "5M3u2qfPGzTaJYHEAxx5wH7Doiwq3yJsYC9TjT5n3hShAhmNEEHwgrzz9HQeK5pazTysgwKzxD6FTqBmYnrUGE3M",
  "key13": "pkh9ZGN9n75YVMNN5tbzLgGdrHwXDVznnzj4CdLvDaWdvczfgpPD2ybB5DtLay735ssLBrzwP1dnsvZatW4g7nL",
  "key14": "4KkkkXmW6y8nZM8K443UGpZMtTookxty8KzgGfsqwi6rgR3Gq3CYWC5Pvv3YFUFkCYK2y5zpj7RSqbXjPSY167ek",
  "key15": "2AegwiiXwH5ZSndSNFfEVpko6cGSTtb1NkUYg1nyqtpzQAYYiVqVu3rowcg8c1TkVRtiYRq2vJ7BmigCNuSDdXrH",
  "key16": "2ZDQ2aR8iUvG3fK1L155VX3sGMe7HmPiSPZDAfiQbdDz6Qay3u1UkVevRcG28zZ58wyVmonGRdsxUKEmDwRCZahA",
  "key17": "5nYjUfozqsNLj8zu7CAmY5FCV1mNgMT7BDRr48bCiXeGAcA4oKPA5kjNmpFeBYKPUuc6KoVRqtMw4G1EJNLpLsxi",
  "key18": "CfCB7auwuAThW7zyKynspmwr5kNjvE16LbkxqLUdMmbpNpXFcgaebhkZxKe6xhbvhWeAyBJ4opHjwJSNW62tLjj",
  "key19": "3gnN3GJknx3pRAL7EErkdJ3KwESub9CfgH8EtQMt8Z3f54EsZwLWwAAK5jinCySaA9WGHQDdUTetDDbZpMKvVzU6",
  "key20": "3xU7WC4U7zM6iAjsJxFZ6XC2M3DeqJjYxh92xfQLZuZ42ua3DpeC1udVKFP2rMeiec6tPJXioqPJ1AP2RgJgG4Ws",
  "key21": "FiTVTU6fC1BuZQe4dDM35mL8kqyiDeKCrX4bKQEiFFxoc1JBURaos2aDTKwho4hzBYHQ53GYdgHFNWLRoL7VC4A",
  "key22": "3iogRz6uPDZQry8kmB2NxrFxJA1ACiwUuEGByo5GBmETztYPzZiVnFCQwXaNGbA7iWtwCTHY5oET922svTY8pDaa",
  "key23": "4fTQLzA9vMaJn6hfnT2kPEDJB5thfSPbmRVP3EjKcoMzhc4NQHzDoGrkK3TMHkJfbAQhpAVnJWy7KeNg8fGhAmcz",
  "key24": "31T9zWvqJnrVJcTMSfzoFomq2pQ36G2gS57AQQRKaJvaV1Vr8dxHiUPvunJe3Zkns3QkuEqZNeQuqzog15nCEYfR",
  "key25": "5S1C2ZK4k5UxzzxEXutGCR6dAebETadCGwQn5WfQiWrR5L4WFXsahAe2b7PTpmJXrtGKeWfWArNupeqSzMSCxHLn",
  "key26": "3vNj3ajayeuoGQa5GL49SF18ZkEkfzXDWQE1dscRfkciNDdQKq8xgoE15P6DkdggrEsmzt38g8To2gRuMuFdcPzW",
  "key27": "5d7fiWRNuuWPmik8Bxb4MmTYZHBpn4weVd7ZwiCQaFt6oiLADahze2meMXxcY624DuXvVPuScAW4nwmjcYejmStj",
  "key28": "2VgtmJfpDA381ugU4rHxrdaPKRUmz33nXQb927ctNZSunSwedwT5BJFpRxA6dHarn9daF6erh9PZ2gjCyms8Vomt",
  "key29": "2J8vSggDzTJz3JsVV9fNgr4JkyFpeyfw8jWwEC8t2ELoCLjVFcgC3p4Vb1RCKUKbXW4nQ8pDLdLmxRDpJvdm6Rpf",
  "key30": "2sL31EaSzynjFMhkHXPyKcEtFGoVmB1fbLEKoWQF52B1EHsriYQe8BPYQNPpCVtHh2EMm8rmUYpph3JK7pfstrjw",
  "key31": "jXwRoyoxjgKzYYL15QYw6agoC1WjDxb977BUWaJEReBsagEuwdXXHDGRKeJmCMt1584tAWAAgdu6XqEd6qNwAtp",
  "key32": "2CRQdQB6Yb8URVfbbS59ciTKYBbMi935yo6cRLEKErEH2G2eUmTEsJJSgcxqVADzQGaV2o2uwetfW2hkXqrb98BG",
  "key33": "uN23zcBDHpr83ojzAUpzou9Rz5Byk8zzS7fY5WVmX9dQHSsyLMxL8pFWYgdh35TUoUVN7JnsjK1cLfLWCKE8JbL",
  "key34": "3iMhMKJAY5bRFEYm4dKovXufZHNd3y2ey4D82QXvDtT2bW7zYqgbR1S4eEud1ew4PQ9whTJXBEXh3yRUDT6UEk93",
  "key35": "5wM2U9ebCgcsxXqNMP8kiktc1djwtJADap9G368RpYosv7ZdRVVNZ6Pn7tFiCo9wXXMtKSvAUGTDiAJdQapgjrMd",
  "key36": "fTorB4ac9umqq4HxVGU1XDPHRoaGjMHFb73YMXxMgd4PxvjeVtubzWmxo5GwfcQuEymxtxtnG25yrkEFXasyRsC",
  "key37": "5s2rKENpd9oCpDFDBttDjdbEiGzjDy1U2h7EiyEjqTgU8q8rd7qN1MjGXAU2JfQP45bajBaHgUdiQ81ErD25opAH",
  "key38": "21W3Y2mrU7DXNdUDwszwMRtPF6wMUmrJMHKE9FRrNzFsnry4YCMHKghy3LrgArFCKTQZkJVxV3WLj9wSjqBibvid"
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
