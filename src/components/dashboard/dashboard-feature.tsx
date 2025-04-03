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
    "2vgmJAP4wE5mc37DoYNDTBizWtTEuYvhkYVPyHYEey1o8UmvXvRsNairzRsFpZysnYmheBnQwPRdSnpddafCuxiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KZxjmNjBJmBf8ruhVxzfNwbB3e7TD8PKUxGUQj5RknNgpq9PNoswTtgkRCWtGWJUVcAQR1iAXFzr6kqfrZeUCCe",
  "key1": "2MFdR1P8STviYefKxfh7XfyA5e8yR3cmqC9oGoyF5tNEijWnuCWriECM2Q5pckXibniazK3Lyz1MbBAVWxgHgmha",
  "key2": "5LQJiVJ1yJqctDkfVwCYtWiTfD8R5q3YUmcpaxBkdo2tDnJuAPrCYVKLUKR4NxhEHYWaLvndAYPMeJnFLWJobRU7",
  "key3": "4QuuH7GUHddhqCKzy1VweLyxk61pdecMUv75mzKdh23tCgSPnKurLHWexiL2d6HcGzgi3Bcw3fCGwQ3UtodQoDZ6",
  "key4": "qCYnpBS6wuot25Cw4LitxuYcEAXLFrwEL3zVe7uNSMtsXshRE3C2T3G7whAEQTEh75QiztBhJ3y1XZoHyzXq8gM",
  "key5": "2q6Whg39kPJZTScMxxd9MvgaLXusp48PCj7tzxDz3LZTKG3ZzvnST9fhPpEdy9MScxbTwjwMvFbxu5Ee9vdRTyTr",
  "key6": "2RFsoAiS4DTEdr7VGQ9codWmUqpj7ormYWxbhH6vzVkRW7EyJu5Sm4XVWLW4LEZucxxgq6GTLPCVe1cZXjgXYBmm",
  "key7": "4v65w3zX7uQnuujAZWCrXUoGoEKnsz2BBKWFkAMu5cgFUKPqwSwPdvRqZ4PLxZUkn9x1RVYuUyhw5PgJ1Ho4yLFc",
  "key8": "4oFA9hEoiZ4jDC6hJEGv5ot677pS7iABgpTRxysUFHW5AgxV6KTy91y47rhcPSdYubsL1VHUnTe4g4ZPmknvp7X3",
  "key9": "4Q31pXETQ33LaNQzGhAwxhp7Jm3F93K5eYvHzENXWCp3NcfcBAAQ98K8wsrM3qtiE7sqC4vT5RWWXFSWMyS3Sh1p",
  "key10": "4Fv8tQVsr2jYUu4zxrZTytgRZqouoGVmnwZkQLj8zNdbwTbndwvg7VktaUHQPdbwsUMYdvdAofZfKxz2y3t8Fv6X",
  "key11": "3XvadnRiRzUBjPLzLgzMvYS6w23Dm6VW6UAT3yaBZmKT91dwbWYs8SCiykEdcLVAv4qL6BkQnj8VhtNnUZzr8gsg",
  "key12": "4cSHAX1gW26HgbVNwoNgDa1tizxwYegs9BQHW6y3zAJmvs9pgWsY93ZrpuWwve5SGrivdA4GUweNbV2GLVQhVZQj",
  "key13": "3BayvWJigspWba8U3R7WSRZVfn3FLkEiqdmhbXtrBznm8Q6RnkYXcrxzTyu3nY89f2dxU9EuUfMs2QEEoDvyaaLM",
  "key14": "5QZ5mrJ5uqNntGXZeTmJ7NhVLYS3Krm5M8q19ScBqzte1W72ThYwWiU4QhoHkSsu3uvkc5Pqpup7DxPGRxG9f6Kh",
  "key15": "QrrZATRMeMnQobdiKu7B6akuaRR3mZpzW2uYy8eE5isGckADhQotFoBqy2oL3Kc3a57XKodvAvd81jdLhx8TAEc",
  "key16": "5yz52e7y4vXYbUu2SK7H8h4YRVESyPCnrdnyiUurVjWBPoPJEsshr1Au2UnUd3DQfw1GMvYuHhEjzrmkyWKoqFco",
  "key17": "2qe1FVHtQ8huFQgK8q6hERwXrnD8Ej1orytJBNFrznMzQ2CY4Gp9LLqmczpLL6Wj4zfbSc9WxHV4VV68XMXi6cx9",
  "key18": "5SQvKoortdN7hkQBJGGKeaV7BvZ2ce82qosnPzxiAgM2WbvypUgqNMAc1XZajsgAbboeGZYnDRD5Ap457TB2S8N3",
  "key19": "3rU7mZLXcz4v5tGBRxTn1bSfYBJz7XMRP9QfmPN6ExWzjbUjQvQ7T1MjeDJrM3KM6wJbiN5AsK5hP8m7C72yhmj4",
  "key20": "4p7E3rvMvMRENf2hjge2jpMLRBKi7E5VJxJQ9QHrJyq3Qf6QSXoSZgw7fYTmUmtgzzCYvGHLjvGWLGA1iRPCzKsf",
  "key21": "4EAHDrJg8r7WYtvH3HqxxFHTEq5w1TEguP8fLQckpXhrPnTY99kSjDWVKYcGz6GPJJCAFuwWmS9XHzec4kBSgise",
  "key22": "53LvDCGackGhmJL2s2wNXG9fBACEncZVHsWWQEGY4U3ssDDWKTYLyQ5YPtWx4GAYcYJiHC9DyiVg6DnHJHge4Fz4",
  "key23": "4UZKBW9qxcB22RzYXiGYBQ4R7qL8qfaJRSaAhLz4ZShSKkZQmqJss3CUoLTZ52gnvn1uM3maGr1EX7weM1knAqGZ",
  "key24": "3nk7JKtNGWmddhAWZmyuPPFEEvh2E6rmzWYLmZmJuZzmEsN31ReNmfuhw4GDHdmgR2FikXcjU2hjDYnvHY6uGMFo",
  "key25": "2VupiaPT1AbuZyCZZR5whUYqVdERaNj6JU5HHaZTFT9x9jBfm7zMC3zAtJDnZSVCKzYauM4KZiLfkJDcALc3RN4x",
  "key26": "5o63LATLjnBdUVHaS5vwQrpbzMu2GFBAskVsbFRS7C5uyVS6ZWv3TCr3Su4imQs7heqobX3dEwV7DCkt1UvK2LgC",
  "key27": "2oiAgjguWHHtmk97T1MMvKmiaePJF68PGvw6oJQTupkVPq3by3MKDzBnBM48d2aDuy4cPKhg7cAFnErdcXiUdAPi",
  "key28": "ZeQ97t4vfygQ8ixr3yLTD2QrvTTfBJj3zoYNqwUdja6DJTQTzUMLa62Q4q6UhkPqnaocnfewJa2reRk2uuQJMp1",
  "key29": "4eBLMwSvmvZEp6XCz8Vm84dbrW7FDqf4oKatiZHK66zrNpbd8RvLtKZSPQgEZ2xiomd2HrZ1SXRYv1F2qeW2BPU5",
  "key30": "inr5dCXgweaTxGqfVN9DXzeghXqYV275bVz5t3cdQfbJ7sVQ3pDDHm5m3MkuKgwrpZeZaPrQyPFpQhszVUKcngF",
  "key31": "222vrjKErkGghuRu9iMVYbT5Ji3Np1qoAkyvLvVKRxmj8FQRVgBiRh1sshfggMetUeT1XuQK2yocHy6KfqbXBqwq",
  "key32": "5sz3dAkzQoDWVnUCMopUquDF52gVQua3XFUX316zGVvDjffNYH9HuitfzSuUD9J8mgBHVpVitWcGutVy3atcLbcw",
  "key33": "mg4BEi1k1iaWn5Cttk8hVyCFrGWsNqHjtqnECvBiWLa2MrEXqyGVWghpq6anD63xTAr3Nk9jUCqEZJgeDLbyBLm",
  "key34": "2yuLEetzwjawpY18ZeEhiQ57QEY9ZVeKCjgPRuuZ9ipYLAQWsuj41LybXcLbbbTV235gvA5qCPDboqiVYs9S3sUH",
  "key35": "54CWe2DLxZe3sSstWdWA1xeWAHzWgday1HRqo8cfEZbej1XBZAsYvVsUze3V9mn8UDRU6nvfKGQ2YR6kYFCKqPVg",
  "key36": "JB3ZYxJPSLALZ2jbNZ9h2sL2j6xz4rr4x9yUcFoUmDoyxGqkMGvYZKbvx95FfWbZVtbo1PHGeiSuz5DrBdpHwif",
  "key37": "31Tn3Yd1nBpmnkfKE2zM3XRz7DCxjkUsmVY4wZ1MFrunfjVTUD26bpWc51xi9mVfoZkFxsiHEHP1PCtatGxbdiMi",
  "key38": "4cpovBqQnbdDYg97BjSCUzWKX3TNVsxtZJjq548zPzdVa9nW6KHk49VBjXXtZaJe53v28xPcT7SPc2aqh2zmAyST",
  "key39": "3SDeSExNr7SPcgcpX552eUNxU1Sm1YzbrVzSXMd1Nwp2tz9FL5cZNiRHT7RQ2jMZjCzsZ6dhDfNg4nmYaPyT5q8t",
  "key40": "5pZ35gzm2nH1wYDW3d7ZFmamKt8Mm3Bs4kBPgQrmVqEc6CaPFJSBkUSc3bQtcD7uf8BJyo34Utb6aaqmQCw6KjgM"
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
