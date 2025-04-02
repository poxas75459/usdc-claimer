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
    "2E7sRsCYqhadRdiXrTpo1g6R15PGHs6WqzpoN9LkJdEroWANuXCvQ5knSuaiC6JLmqEFeaZ1hmDGHCEDg2Go8Cci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SU2EYuZNJLkYrrEZyYcJzTfoijH5DL784hFCvUqAetzwY62Xr6MEUvX8zr8YLDH3NYqGrCyTNjD2EVjZfkxevAy",
  "key1": "2FqY1hpBN9TXWuGciYACqsh2r6hrpL7LW5b1FNsqB6QorA2ryTEPgTQb42zhGeQ41sSCQkCNBhXgdv9BeyvVs3zd",
  "key2": "2RUMiNFuUKwmmbQg3Z1yqGYeyi8vcDLHN3pmqcHESLYvkVQTd5dZ4o7wTvLCNXS9Gv2St1TKzPNYmKoHLQrmeRVy",
  "key3": "4V9JxnpGjqFoYS2D4JP2j4Y5tEwxJZ6mDaLUJMFVGn5x9ycW1kHRWjtXUp7uKcVdoaaaJu1ApomHWTed4wyEagzq",
  "key4": "5RgVuY8ZeU61Wis4qUN4epFQJeox2SE4LUR5DPorrB5UwiHMFWKvXEFbgS59hXxwyFchsqzSakeyPyRKjFbJ4DGe",
  "key5": "5Wy2yTf7Wf34tgk7RDmVX1irdGWGHYxdpq61eVDm6ZonfDPmiD2ZXYHJBMU6YSz2G93n6w5NgTBfpnUrXMTshVDw",
  "key6": "RPv6rdf4CFg8Ax2TG3HWkqr6LfZTRrYwLxyzx6BDo6ChxxN8Y4KXiYnqzm5SbUGL3M5JErFJsqzfooGrdPxvnZC",
  "key7": "3X3bbNw1JgBCcNy9dU8LyL6gV9LH2ppoJZJtzuzzmwpYNczVqdFPUUP133KBXPnztwEVRAg53ikJwmBWVyK5eumz",
  "key8": "3pUBvawAg2AfMLuEnQBp6ejE4F1RM2nTve7J5ybh2owPyUxMpZef91HNbfYTX5gYsWPhpe2UnR6ntyu7LPVQrRQZ",
  "key9": "32jWSzBv3TyawhVFphqgDnKD6DTv41yUA4NCZewLzD9eiLFnm1qMmxEg4zSKhHfvRBZpNM65szfhDsBmgEZrfDTQ",
  "key10": "5YUs6W1wCPRSksu7Y7Zto3MKPuhJ18Zs9wXGajugvKx3wPDEUyi93b6Hc3WdyMRS1RnU7AqnjGXKKr2nDiYXw6QF",
  "key11": "cd7UrM84tTeK1eGtgmsvMVnfw4GxATYX5B59QRC5c6mHMUwSRsvQzaw4ys4VCWVKxUn4APbJuj1wFQqhTNUkKKv",
  "key12": "FbkBrAQzoatjGpoQzKqfgToe7i8PwJSiXeMai29qr7eJGSJvbFeZgNczv9smcNkjr4ZXm2EsHDHP72MJfvKAL92",
  "key13": "35yg3KAhYeKGvKaUREjsykvbT2qDeSj4kGoMpJmnbXVQQ6FRZoktCjvMbuHEqn7EQQzwPsJAWnydv9GmtZQSSuvo",
  "key14": "2P9PEGeNw57T3ZN2qfi7Lo68HEPPkRRCkPVbq7ovTkt4qEmVc15vMTYs3tSSVNxAce75eoyaidgEQAfxyWT22mKM",
  "key15": "2iRqvh9gHarquCBjkCurz8cq1SzW3gnaaNHX9tLdbtywAmNik3UyfDmuDdXT1niNHvXEJnroK3okJMibn8xAcmQW",
  "key16": "4gHBpPJvHK4kf5E1JsupVne3G9ZmkNmo9uASFCWTFxrhm6ecdMrA5jorUTw5LEDrk1uq6vBgxzk7cg458QoZp7CX",
  "key17": "3ufzheHRx5xUNaskPS6iNJv3LNitf7ukDqhgmhuz8S3WLAyMYSShK4SQv3eFNksx9C5CVZVFRgBsvQZVtcK3vGBi",
  "key18": "7VY9aWSZJB25haDS9Qk7sK8Stkx9bpKj9Y4DWcZ1opi7TGK1sTU3JuQBaRerYLBBfz5RBBZ4uvPQdePUskwRgSp",
  "key19": "XDf7P535ZH59TmYnboMHxLPJgXux4RuJDtPcMAsMRz7HnAcnoPS3jo3xSWJt63rohSKpJJB1y1nzMrik2aWe8wZ",
  "key20": "5CJ1iEpzD6FgyttCbfwzaACW3UYjQqCZqTBMLv5WE8dzUXHZyEeMwdQcbeJ7VJ98ry4AEzQR1XDhNJzVawhk4ao",
  "key21": "2X8dko8HJchK6ram11NVjUD72RGy5tVvJoTmw4PgSYxVxtGtCSF3nV4B1XTQF4TYeQNV2o54MqS8MK75wfcjcr7f",
  "key22": "66nzAzA6XVhJAXPKbKNvAPwqDuKiWoMgJKCtDimsFrmjDqoQMHWxH8D3QGaNKyWBC2aRs2ZDHtFFUqQYdgZEyrDG",
  "key23": "4rhyBPJPyJNN4NCAkvhasTGsLgwgxrv61vifUpKZ4WXcoSchsFWsvBmEXWfuvHQiH5eMpKYhawBNHm31V8WqmciF",
  "key24": "K21dURMC7aEVnwHVe9R9oDL9SVP1m3RHRfjRgRs78ap5GgaHEzQ6nLmVQAS9CBnHAqWK5n19BAcuPxJNRvemae4",
  "key25": "4MCYgdgYUvqM4WekqiXQcQBnuiSbUCKHFpKURnyfCefKPZf27vMRz9fMMoQ3uKZvJGPQsnEKddwfdSpTkn4fYMPp",
  "key26": "bk87YYgYjTSnZLbVvQD17PNUNxqv2QTXyyUNqRoCK1ggN5tL1f2zz29XUgx6eQiENA138efM1fCVzZ7bHurFVGd",
  "key27": "2GwT2zSgoxM4Fw773FuDKNMh5vtv1sgVW46KuU9NB8Z5BStjhci7KDj94cECmg6kZYJg8Z3yTphSFcBwCMvEpAGX",
  "key28": "2Ei1xfjC8NWRDywhzzSkV2Q9YRF6eCiC4ax8paunoarcDTg1jkAWvXnq1k7Bw6z474h8AqJcFTDdUc4KtSTiyiH1",
  "key29": "3eQ8hvZj26pWfqi5bLwxdDN9P4oa55TWhW9LfSXAuoJmnPtziEwQ86MvsWYgzbdnHq7X8iFeQrGscntdaPtgD4Hc",
  "key30": "3ApDKpSLmrux2TEuZgtA7EU16gdDP9yv4wTQWcnBcvGzotS6pzqvKh2RSwyHaZXXNbp3cgNwcYSPnJ5hMBPVPvS2",
  "key31": "8ELx5rsNg7y69dMjf7L8GnU7zhts2CyoJj7fGKgaiAncpvus3Mo8bxreGfdbR5H4TTQWCaxBLBBfhTWDkwJnnxi",
  "key32": "31h2F6zdy2eKTSAVgbZC3uEZQASYZuYV43143SyWyxftiJZZwt4zLFvCZwE6PiVcSdihrDHGbK3zsFcH1Nz2jiE8",
  "key33": "5MFmMMiyuEdK2QqvGiEfxmVoHAnRWcQQ25udMQ5fNTFHSKFnHiV2adot83gNegcbjyuE5DbADnF5FEu9fd3T7KmF",
  "key34": "2uBkEKZDDMinJX7gtJXivCCrWYLVbhL5K6Nkf1vPAAGLkaaDUJzaj8aFNfer9kWBDLZPXNwDmNoAS2mcY3D5rpKM",
  "key35": "43rbS9rSGH6ir1k6g3UNw1abfnxDbmv1PES3DGYmDpn7Cvitnmp1AKg2xtTwWz9fpqgoDaVn1GXcM58yR2GJsu5B",
  "key36": "3t2wrHzghBsbBwK77cUUGx92iBVXqStt4Q4rLwpmUYoPMiMc1EkbkYVHkSFqDkx74CEo1mRcdYph5pBuLWgMtg8H",
  "key37": "DYivd4B2mfVHLZ8GbLV1DnjZ7TcESRa3GbfpyEBTDCCtHULRwcr8LCwe1kB8Q3XdcjizM11zkyGWGgfFqWWQgG4",
  "key38": "26C1kUD6zXPxbMXosGY44ALFVZF7k3AMGSHJK8YeDjFdf4WamPipNY26kMxTBnMNwhqStDW2u1P4KWgbzUkNSWnc",
  "key39": "4NesYvM9uYPpn8a2DLCpk6XtWuDqxg5rDwjwqZHh6JkZ5HrSc5qFuE8255Rtw3KGQDizUfgqjtwQp1uvCrSVbUjz",
  "key40": "62auhqjKoUQwXid41KtPFgD8CHGQrimeRFsSEb6HUdTQJdYat13VdzyYn9NUJ9ueh4TwNogxq1qDGpGnegHC1VkZ",
  "key41": "XhRrGYEcrjwmJnSqLR7NZRTN3medPD1gMmm7P6MLAiRhiqVtezPjmitnvKj8pekhwgvfocZqNsRkZN7YokQPXrS",
  "key42": "26B8eFsz8QY9dNrjvfAva1aLM1WWx4gHHpMKFsz5AhYMaA89YzKi23PEJ65gNftrCGV9aS5VPpom2QNfs6mqrUTP",
  "key43": "5ThzQv4ayuwsAVxXT2JwDfDCwcVLwKASaXbvtxovFoFHkmqo9L3mmy78sdeygPtFgMkkKJR6XE3DnZBZiPdPkKpb"
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
