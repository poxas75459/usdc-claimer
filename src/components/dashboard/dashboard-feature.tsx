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
    "4df2GtRtHYbYhaukosB6fAr6753hd8ZEHzv3sjAbeYRJtfSAhjsVYSQMXsFHR4ZVAzANSFwiCa4w2UjPX684VgX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oFfLh31C3Rr8z73CjbqNSG7DUG7Y5WZkmRBLWfBQSLYUJb9dzNWPi2ZMRaSqHGhZqvkApXf1kh2Y9ZhNB4pK2gH",
  "key1": "2LhE4gYqnFDdhRQmxt1iKkjY3tZ9VTTy7LgNS8zyFYHKZFiULHexiCn1c2QwakiHb7JQvDMmpto7hz7GT9ZbVHQd",
  "key2": "3vrq5kHbMvt9C19Bcku12ijnwihTaGCa4tmBiR6e4RNdYXMdCTKnMajAVCFsqXHfzCnpGQrkNKb3Aqst317Sq9uA",
  "key3": "3zSFu5ybjG6B1EyJ6iAPr6JKshgmsVwtTY93zYNsDCJQ1eZR9f7jW9YHiYNVpxNwfCJVYeJCuiey4Q2D8nvcycvw",
  "key4": "3Zb5qgUBWzUpwDpkA5SrvUBzXFaYsM3U6j9AjYKSu2pMhfEn8nvWqGDoryj7RMeG1SLEeX1Gg7YY5Mzpw8bfhkji",
  "key5": "2ts22gPAfr6nYLPERvC3HjScuUW63CPr25JCXWY1kRtHbJ6JLRVxqcddqUzYbpbkYPHWbYbeKEXBKSVjpHhwMEPX",
  "key6": "3aeViefTWWXL13yNsZPhAnne8HJuBDBFLCa9kzd85LyDAdQYFsTt6a7tYdNoUXqspkhGVwCgHxYKmnYNnBTWsbuH",
  "key7": "5AimXJ94ncecWzW6XokJmkzHujw2nbhsNTpUkq7MZVVqXFdnDhPmk5fajs7jMJd1dX1ZsEuncSDhD42s18kypp8c",
  "key8": "5o5QoLVV5f7NuyJaBr47F8YVTP4FEHn7XKbicv3xtxTi8FC7oNR1Ti6pCSHMfsbaUEH6PFkbA4fj19t2AbojEatf",
  "key9": "SJr8h7QVtX5ojntdtPNbKwSFBBiDLF3dzT33dPntMUsDSsLH66RN2TJgxBAw1VXjfvfYZoLghuNoTApnRdVQ2K4",
  "key10": "2usqinm9dMk38Mj1QmeBxdGY4XKbUzb7MT6M8eHVRN1f2GqKwoBCx46VvSCpQQN2WUYXHd6pAznXQ9XCsm9Rxm9r",
  "key11": "3SbBAptnKi2X271t96D5NCA9tbrqfUcLVQFZ1LNFJkcbjJ63yp7P9dk128Db9NEkkNtvrEBrXLsyUnTyeLagFG7M",
  "key12": "2ueHZbL9hYxLophRfkZe7LLvG5bX9Evmak5quKdAfDLAPpUG6M7SCWzzhHuDww89G6UcRL85FvAfEMVvPCT7eA8J",
  "key13": "3G1eiwCZ3NUedKbigqWoyKH1e9m1iGNMfY2fwjzQVKspDXrKy1ASws6KeAvMQ5Qbs525cuvp31CqMMaoXhVnrh6t",
  "key14": "4VUsPsdkZEdqhQ7Zeti44mabZ3QDtf89fF5mWCVF6LnYzwT8AA43kZhsNVZjMRrE6YU3MNVAx84mfmUY7N8PH8MU",
  "key15": "5LShnTL41A5TupHi1qdwULAQswgFpfHa3QMWrCo5bTfHjuqqBWJVt6nGhtrAp68EiBp5LNE2AYb9uD6cGY2u761j",
  "key16": "6V1ZULLq3g3wMwPeUMj1JnmFnchcZWjrZbVkb9dA5VnkjPTPcSfpgjR9KQ4KiT2VzYLqAwEuwjHV1nHbw1DHdvg",
  "key17": "4xeC2gZVoYx8ce9obCiGPT7MWYD2CQ1UzSrja95o26stCoUVKJ1j2pRJWWmDhv7n16T2RSaQH7fdWbNgLAxezTwT",
  "key18": "K3YveFd1kUM8TaKFJMB51Z4cQP9JFKMhXu3ACZsEcJQEtDPHjYt1dTpSxzjueoEfcsSVGXarMco9BUuCWWVf2J1",
  "key19": "FRgsrpTysPfGXt3YHsN8vDW7kGRLgtSJb9m1G7mxzQEm3UeqhSVm2FW2C4WREVhJXHQwAfdCTRdA8Zhv6jVoM9w",
  "key20": "52314hBe6BcTnEmyjFhzXZEtkFx7tKSPYt1RpfK35NxYiYNCGu2sCwFsUidWWW11icQ53N8MgB34xU3XUtsdSyco",
  "key21": "2SedHAgaCfte98ukWZfNZWc6Wj9UFTmuVcX4tVN2rSXH69iBStZgVamVhorVnTGn6aXeghiDYL4cv4aFF6q6AK33",
  "key22": "4TA3BmxJUvSeDY1Y33cZRtsP8FvExfFm6pBontsrphp8KiAsQhdgC5iud47cAPqv1fQRFUUqvTKcXtNygvebsk6Q",
  "key23": "2bKHp6x3rRmM6TgdtYgQoawPdyuCVupypQmqNMJhuXrotYz3Zdm3D6UVs29ZbpEGarHKcEB4nGYeFg7vZLqx5Ykm",
  "key24": "2CteT2iHHCUcZZYzc6K1umQkhFdK4V14EzbQYCdq1wfmHaKGRuKeXDZYZ3T87QZFojxymVcK4ypCuD75bNHZj37Y",
  "key25": "4QSgnUmDuSPJk3KiGjcXgvpTXeB1NfNw6WZ9K3E2hHKeTPaV7gRM1jWRBapshqs9JYzH2kPm9BHXhq2TP6rSmwBn",
  "key26": "3avPKSkPiqXWMWF75pJH4BLc3dD29Htf3nuTyNFwF9sLvD4cYDJA766RBabTtMvwn1nAddmS1WyLVaqzkX25rPs6",
  "key27": "2jtjZKFdsdKw26GLpjrdc4BkW93XH15dqUJaLBeusGUeg7k1Bg1FXS2DiHJihxfYbM5Jrd7Y2SRK2fKAzpchsJp1",
  "key28": "3Kd1Ep9UM9K8H2cGJPu1WyQwpUVXeqQ3VA157HdRi1aABqJqg56ff4YyFkeVpJekCsdByGPeRHJ9hY9QkxrB2ur",
  "key29": "5evmSTpVZZQEy2uELNpMwxM7H1KWM97GtTpzuwzFY7GVodqZBmrCnyodeziCcDAYR3KidNHFzwFz3MBg8yoCQDDL",
  "key30": "5n7kipbCgJ7Nm6Laavmuw7osz5m8V6nFHqegnDs786TtewveTbhPLeJpoVs7sRXV1j5zpBoguZ4JmN9dpPgBQy3E",
  "key31": "HjzTNMPKqEuGkcoLUZLR8UQ3jXyvhiEoFByTBatdrxpV7dzQsfobWHV9yHPg344QR45ZX8ubhpd1cTvUyD8X2Do",
  "key32": "43kMYzKRtP6sX19QbvcHbhqbqBLkT7LXqE1aBiPx3rc4yRcK99898moxhz7MwNTdf29WSxcCgoRDaFhb7d52Gx6y",
  "key33": "CGb69BMU6sVDSxt79tdUmF8nUbcPPVSytmCTvSuf6x2NGqAefLQqqaj5We5JCbpABjspHyosCvovzXPYfKuWYGs",
  "key34": "38vyb8K5xifRs6T3e73KRkJczYb6T2XrNEUF5uBU4ES3oEuPFceNAS4DVq3nf5NojtP5emhfczYRdPq29sA99oJF",
  "key35": "rERy3NnX5Ff8aP1AJXoRh3pRcAevDn4Zsohbb1B8MhKjiaDgPwYAAn7EkkKVgCQFk6uvoDue7fxHgbaBN9P2A1v",
  "key36": "2oCw2o4bspNmKZ8KkCEwZdmDBnYD1woU7MnKZkcUWcU8VAdkd4JTkECgQxffJNcZJGjCUzFDMExSxRo7Gh3Bz7qx",
  "key37": "3kCp3FKRrnJVuc8MLWYnoxqJkm872L97KEvfzKh1cxFBEQhsQz52kvVveKrHsHQhMnaeBHbCr3beCaGz6td1gsnF",
  "key38": "58RrL3mbAwpkTxDtJ65M6Jo7ogaUEiXWSkxKRLuDws1temY4MiWmjdmgk8MnJRHFHKSSdUUS7GhdVPdpA1RnkSMz",
  "key39": "4jiftAwLmBDtaRfVTRYjfMDnn8d8D9AQufR4V1mmaDP7T4Cm5jzP3QrQ4HR3TJCtcVR9D8BtBGCqv9HVhF39qaDC",
  "key40": "JG9aJYwhBDKuguZ93grkaii4JQMxx1jgMDSzqBR1hp2paYJp3mhwkd7QgkjtoNmN5GHi2WF2EKYyXUdyyLNwPni",
  "key41": "4X763GGn67thQv2fLjAKyr2RYZExbLxhk7VW2ygBZG7QMDAYUzocTKdQ3Uckp1b8cQS1LYJbdj6kuH9q4hJCYf2j"
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
