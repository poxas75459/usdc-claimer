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
    "2tKd2utvhdzMKkCG8etN5fG11nw5vzstxmzqDTyNeQxk2EnLY88ErkeL2GuXZrCSjVfw4yTE2wXgVQp8TyGfSw5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UaxLDySf5cJ223ikDkhSQTGQPRAy4L5nNpDqBADaeUu5YmWzipG7EnCS4kM3na5c6aygtkhfsGjTrcMqej5K3SV",
  "key1": "3TUcPiJkGCesiH2Wvg8xi75t3BWM9MK3GPRwRSCbaFsebfk9sbfEPZX3W3v8PwvbwcRcC4y9kSiVqCDKmrtF5B5e",
  "key2": "57B4Mb5BdRD1DL8ekd2MMYK8PzopwpTAF1H4fUTN5keGSo6thtEgXxdqJkGQSHLiq2efZdfv7eUmqQXa7aoecWhx",
  "key3": "vZb3acVzPuFn4Zg492wmr93uv1nW4UyvTK5aYWCM8i8zr41qjhnJLS4nRsq9M8MpdA7Mu6KbVbeaNJVRrD7d26g",
  "key4": "3Ver2o8fW4Ped2GHzKxMwzVwHyS7nwx3p4oMUcS36zcoguVsBZqHHwMQ2ds1KoRMqFiEL8o6nuqCGns8Cw7A1ULu",
  "key5": "5BhdLyGSpPKevpsWbRUfWJkYwwyA4ETn1YXQ1mfNxn3c6kw3R7DRAW9QeRMteprdcwNyjCz4SRqVgqr24BPYFvB8",
  "key6": "46i4UxB8RqxVasLVaJNbReooBVVFLdUCZSjt6ztyooqnhXVVA9pV1RGCjHvqu6j1PyJnczNwLcaviR82p9p6cwff",
  "key7": "3brm8fALnfBHHfUYd1dU8qnzdmH9Eo3uzCEpPyWDMRV5TmmFU9UdwANW2Unpt8m8mcYx4PNUmk1MGWoQfbfnmvBE",
  "key8": "313DV2nrC14tcFPtUQAKrGLLVUfjxwbeRmKcdiWHBTSC46q5ytSy6GFN5hDRXExwYkWgBuEBZYSGR8imPmzBEXCg",
  "key9": "BFMxrC1WYv3JrZANEXiMdFqZtbJT6qYX1i4Spd21fLg1ST2mVYDKAL5MSeGH5XFeNVcME12xiECTV2wG4Cg7SDo",
  "key10": "5na7Hn72cW8WndFDDE9G2oN1H492Lb6dFc2d9vo1M3E8xAZNJYPc7z83Jj5CM3KabrdS7CfrZr1sMWpBx9b5iDCV",
  "key11": "5ngc63tCd8vYBi9bEgPeQqW29sVc9V3wCrfZVmbV9RD2seXEvUtsbhj2XzTPD28nprhsiBa8DaGo1nd3FZHEU6UP",
  "key12": "3tBC2iCehcBdhvqbYTpZW2R7qfqJTCi7vYVcT87nkWrYPKMEbbimJwyMEGxuBc2itpMYususW1fgkna35zrMWpso",
  "key13": "57iCZ9hkzjebto37MoKVsnS6G1srEGfyD6YNt9F23eUi449uiS1bf619xH11EvWCke9fMkyuy5ZFv92NHq81mL2N",
  "key14": "2LsE1A5DyD8bxyS72Vq1ttog4oSL61ujJgBUoiDcm3s857HXLUdTErZHrYyTJXa6xvjjPTUwntZDWo3h14p12MZm",
  "key15": "5Rsj36Ebr9yvWSNuxxGxwSuDK7eqdVA244dmuUb2WiR8eqdG5aDqW4a43brRoYdd8Vncu2r6Tf8K3HfJ1kMhZBdG",
  "key16": "3HzmqBxtphcGVNUXgnyUFieyzBUnYQDZmR1eTCQVrMwyxcyPX5Um7VMZLiXAY15t5d1YREdcwEhCxFdYodCD76Df",
  "key17": "2h6RXakdifiUuQ3RMqxvj5dZJfzKyzrxdFm3CBuNUxaYwgVCsNrLMLhFEyt36moxCoyeQmUzwmWzjDuvDXSrBRmV",
  "key18": "3KduMffdV5tn76hQdWAfrFe7MGV7UTpPcYzYmYoaqmeoEAvE4Jn19TkYBR7hiJsP4bS4Fabr5fpRA946tL3PmDn2",
  "key19": "2Xg7GUpPVAbTjR11vLQbcCerS3nBRPWzdW5wjDWdkJpAW4eoDdgSSn3MeVjf3ZqNwFbp3oP7acgDJh91yJ8vRaTF",
  "key20": "627kwjPBDeJvWJdtUEzQWTzaocZd4dJfYUJG5uQe5S71jMGCWt7VzdbR97cXkTEg1VVUEK5EZ6vVjkRg6ZMESgqk",
  "key21": "3PNmoJyNrWrRyu8sHcFewmDUA5ZbPeWEsSR9tZsuhV1UpTD4udNDSiyG8TX42JSA6WiE3ZECsth41qKpVZMS2fa",
  "key22": "5ceS9oEGv7aJ5XGxbxvwAgCD6Q3JQ4AMjuezvp5aRx9qcTVT4uUGnNcpzs9oEEAff3fkEtH8tPxbdhnGGeVSLVS2",
  "key23": "3ysz5X5rkBhtq89M4nuVwj9yTL2R3RQgsWEKKmiDjNPTYgxkWpe6f2f9Eup1un9PFGqr5Yt21nu6GbvqyXM9aicU",
  "key24": "61vopGmcz5UzpZiSNbXXQXxjnQr9RCTBodcsLCdF8G7VVxLexD4NWh7AEymCi4WButFucJ6HTL5rG6jibTKZmYpe",
  "key25": "5kHv9fque16zKyKHZzu6eRFeFVco2qFPXzZPnpJs911So6eWvVwrcsyZ8LzUAXhMrKtSedxp9fviWbLGBnHtGP1w",
  "key26": "2NAnFujWW8ripV9TLFDiimzrCqEwiTxMVciQV6YhQXFcdbG54dNWtiVqTKcfWzZnTtpsfqWisxJyPhwvXkTAnGR",
  "key27": "SPu9z5tK268yM8fkCrEgSgWdkLSAVCxMeMp2f2aWeKpdpPX6ee9amSMcDkMTQ6NBiSa54edv9ruK6QgujgmJ5bY",
  "key28": "UCio96wVMi1RcAWDK1QdqUqbPecsZ4EYTLYnw4CUNPdH8za4hYBWd6nEQ4Qfrdm2ZPuEtYXrTpqsNzuvG4tEaJK",
  "key29": "4tGBfQCCsG7UjLueDzu1Vx5CMNXSSEogpwoCmLdPy6CVmrsNsMgSm6KpZ29F6xsuNcXGgxJGBbFYR12a2ziAV1M",
  "key30": "3ywrgdRC6ix8o4rcAccARQWJ66WCjk3BRdDyTZ8Lo2iNj6Qo6qpn6s2eb3XSiCKPmeAZggu5LXxmXUaCzjGjsy1v",
  "key31": "2dvrSA7vA1QspD26qMK647uufZ6RcdP2t2zYbwJTmxe9iFzDEP849RoBhEkpgdKWfb3XvjAqrz49fqhftP54AcHA",
  "key32": "2iC2hDmSE2pKc69rttcGeasRY3nd4reVPJBxCvbShnAXYnNdm8tyJqQehuzNvk4zDPRpZAF654StGgpMHSmyAtAH",
  "key33": "4e5zk7XZNagg7HGNn3z9TsZHNwrexzrUU6mhagskyn8X1ukB3a8MWYWXyW6ov45PM6uBYz5kmDaspckwDGAnPTS2",
  "key34": "5jSsuYkyk9tmrwn29zogNuR7L4zfiMBepGbEUDMdeo6PvpyX9P59rLXFcpD1ydxQGajJTQ6WgYkdjoXEQFFJMTWQ",
  "key35": "3tdXeqZA111K8wa7Ac55S4h1J7QzFMDXTTH3pQX69B8R6tKTAKDCWGCq8eVGzEYPZBTyrFdqnFhZTSGmf6X97jLZ",
  "key36": "4Z13kkTLfbfBEJREUNLHZ2o5NTGVxFUPLPHTLFkzX1HiJU9c3hHfGud2LME5Wh4Yb5Hk9HQeS66qF7SsSgMg7wHP",
  "key37": "4YCbZM8ezsxvBUdMPa6G17aCEQMVwdZMr1Z4zYF7bvBnya2PUQBGwTxDp3Vxsf9rXwbhPsnRMMvpk4LC6uq485bf",
  "key38": "5UoUjazPZiTqJckoM4pxQPCb3HYQoaqpZPdZfZiyMmgMNrNxaGiQCsKoAEHRw5GnEykkQEdnuqGZTe2brc1fsFEM",
  "key39": "4jBxpy65PadFCHR3HQaVPBZ2KAi95cSWWNtxjM5Hi263Nf6dULGiKC5Zs1FPJwcA7LHbqCNzRTqjadF9AU9Fxqct",
  "key40": "2aLsBfe9edGkHLs1FgLL9KbyJPQWXSzGa5f3yDv87Ku9hNFmu1qVM5LfBsQQsVRcArxMaYueStigb6oZEmWvjW5K",
  "key41": "uFcUqgdAn6L6Hmb4NebYQd3Vdtn2tKZKMG3N3Xh4tiVwNhdDrXB3TQhoRzydZW4YpA6C51RJEYvRhpZzPiJT9Pr",
  "key42": "3zAX7RnBqJomUHC3o755KMPzPAbGWoUGsKfATW8Yu7BivwmhuB5w6QydQc9N2iX3uxzaaXzseEB32ndsRtpqnT2T",
  "key43": "2pxKGXhw6jPPoya9ZbnE6CGxh51mHBnV1HeHxhiTEsWVpWr9X3XW47gC2ysjHk7AAn4WVDHbo618sH9L9wFNGu3M"
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
