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
    "cSQsojrMggWmJD9wC1xpVnHXnwLc4CGuQ9JQxtXkr1WGDGmnUNxHTjGKXYJpS2fYpCQUe1kD3eGC47XdEdQToGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "362Kd83QRw1ydexntkwK9cbegidNoHG9mEQzhRJwUmGJtpWK2tjVjBkJhdHdi73AnrwiN8kvQKs6akFXxagJ2MiC",
  "key1": "4hpwsw8YaAFk1roBQHbiwRAvmnLtEFdSuDgtU3qTEKwV3BnFwqsRyqmT8176JCv5euLRn8URNjsKcSajbBiy1zaz",
  "key2": "5mtc5z9y9zZRSCyPbM2x249DsAL7rSFeyEGHZfAzvfHZYmwXpadverow536cauqeqCHowJ6UY8UHzYsw5xTVbe8i",
  "key3": "5fiCC9m3pbyqeVvAP9qQiPgUYVz6ZF3s5gDzQAhWs4SC1CsBygs7rMu4qV2qg8Xw8FabpCUxkH62RnAvaYphrqSh",
  "key4": "4HymsYZF4RFa1SifYEbbuPTfd6cK1pLxXxgr6P7e1MV94gnZr4Nu42Pdm2E4WzQXk1sJC6WKqoBQE6NsbySbQZ6Y",
  "key5": "4FxRQrhaehKyNzPA6wXFoaFRszZHGEphNscq4c6iLQgiAgrR9zPmLpHhPChRQbpQZeRabNuRi1xwBgAYwQZpMG7N",
  "key6": "3NU2PMrwZ5kXgTyeh18YfGfZgD8SBFoLJuuPX73YpYpjmtUxU8w5zpjMwGFefjBMqG3XWoSiWgGRRpKZxLiXbPcZ",
  "key7": "4Wq4gRzZqJnRY8JPcPamvgSkLEKkGjoWKxkj1hU6G3uMAZ7nhwNW7FQEspTRhjZuxz7NFSgVMVW1mvN6QE6ucj1Y",
  "key8": "2kasn1XPRw7CHx3TjMzypPo9DwfdZBRqdSaWovxv9ypKQzUZKbqr5QpYVbsF5n6Ci4z62kpUAxzaiPeYokDh6KiQ",
  "key9": "3f8n9zd1sndL8uHXWAjJfXVQDL8vPvXMP8pX984spseu6cvR2RqXiB9Rsg2UnxuYv3BWJYRda8q1ZXiG1L8HrV2Q",
  "key10": "WAZ3GXvd6VGYBPB9ti5vV2exYSaYwVgBjBh3FhGXsgZ2xf6y5gXYEk5XRB56yVCdKup4egbcpa4EoR7kwHMprHJ",
  "key11": "4XS2oTHmD63cYzZV13tUtHAmhwAhUrnegY45upYpA8ZsNoWspK6tYZixmPvXZa1v7h5wG3w7EkArVhVuoNbfrRV6",
  "key12": "58bes2hkkTDeCXoymUmr69VhZRFN9WMaVxHnmKvcfJZznJxZXBENVADepBdUHs9YpPtCYhBJR2xuMzUYHsDBXfDo",
  "key13": "354qcJpub3cjU3S5HM1mXD24FKUeJ8NBWzPdN9gR4fzHDVnmBy2CdyQrN7eSM7PzrinTRr7YPpJsR4q5w8yNqBg4",
  "key14": "3JCTcWaNjp1kafUajprvqSF2iPCK7NjXQRceh8SRTbiGyYSkc56ybKCWJsaYTeLQR9eK5DeNf659DbLkAwxBWb4c",
  "key15": "4Bg2fsoP3U2pQJqsBrncrATZTvsv3cW2kC7eyeXj4f1EePsCCR4p1TDNdeYMu11vc37YK626bR68k14XocmvZbyo",
  "key16": "4BrJ3WnTs37tsCXMgQELpgq7wW1rachchiuEmwGh1aWsVSuMjuKqTrvpWjPXSESAzTDfS41PmQrqLab6SKgkm7cU",
  "key17": "4V8CnkE2piWQ7ZRjJX9fsdHgS945uokohsDoNFiiKgf3TdmoZbEQSM7nrNhJnHSXtaR4RY3H7xbrRM7f5RXxUmY4",
  "key18": "8JJGkKKb5fju86VJmZKotr4dGMFRJRp5KdEykYynSJA7N7T1mvxftm8af3Fa1wYR1KvfwZUNwVaTzHo8rypEHLf",
  "key19": "2bzkeXLskzQS22T65kwKrPvBQaaqECCaU51eWbiCRm72YMXwXP2AWog6Aa6odpDQE4rkFZWmzocnCDxfS9D7b1eh",
  "key20": "5NX2gZESAeBQ9qZnWoA3gvF9RkjZqTVAhp72wykg3Sy2xdYKhwCuVy7rfmEDbEGp2yGEykKYVZ2cxHbe9rQoMbRF",
  "key21": "3LCuhDa9RBJ1pr4t1xZH3NF8x2cJAK5raiCer62bQYwTa7nQts6aYk1kv7vzb3i3xErN7CJt9iFeeF8cQE4oMyfe",
  "key22": "5fCXZu13i1giGqbzWgYjrCyJhuXnTABPCUeC2k9kJTeE5LajhHZWHQhVk8G2S25Zqgjf1FFxBboJkFtxsP32Ge3K",
  "key23": "2eDjPQV7Sacuu5Y88dWgp5RpvTUZArbDBsxBxZjjb1pMBin1eoFkHLTBaxLCAyLhXXChSJdcskMbvYYWQQBqwNiy",
  "key24": "5z5BahkhuokkToGNDaeYcYmTwSq1ErGZH7YxFZukaUA3dyFnwPzTEWpmG8Mo31MGxmzR9heG2p9igj6TswUJF9Rj",
  "key25": "5YTM2EdyoBBY1e49uXgxnTKB29LgVB6Bpvdx7WTatfGvEGeCxawaScBEaBZB8o3mVayVPFEXrqRRpAMSmQsMFGKa",
  "key26": "4vXXQYWqdXiFVvnBeEUy2ahH5PXTx1T9weoyxrFzXFZ3Vd5eVT79C9FzH8QzMtqg4x8L8JesX7ik3jHUVDC81Fo3",
  "key27": "5TmS6q8ie9TS8P3GhVziLe1SaoPDWVffprMo2c8QjH3mNZtSn9gd5fg7ew4ZPsUvqxzZ6jrj3bmT3mVYYqW6E4qn",
  "key28": "vkyKKaDV46XRzQhsim1T6pYaY4drWt6tDqkLepa51TM6idCabXFKaaCJGYWxHJyKD5MLDfUFvmqgLU2VW8GuBM1",
  "key29": "66gNFE9YbCzL9cCLctoi8GWWFHW5KpTN49YZB76juw8i6pYJYDiHLcPeVx8bRk7vW3ZDVzCeVDvnS6oyhTcG4GqU",
  "key30": "tHPLTJPVYospvLdVTTt3NyZXmsxkwpyPzEfAh8YcU6DLPeG6DCqyM9Ggc3vGwppefKMtK4oFDc8rhA3xxAA4cYc",
  "key31": "31uDBVkpS96FetVPnFcg8SM36zJkcbae4TnqmfJm5NApy6FniWS25DEpUxAc5Fqwg6YtVg2zW87e4L4YxBQS2uiG",
  "key32": "4eXaGF6ygTcRozWqZtYCVYUe5s3b2NQJw4avR4EvG4r6y4keVw6YcT52SyuHs7R6FDtmBRgAgsxe7c3b91oCD4bW",
  "key33": "39UiNSXQ6s4e92AonakVZUjBnE8Sd8aa9eSTRM2sZVyrKyc4739f7grJdywMdQ3AMN77K2KU9FxMNB3fUe7eNhJE",
  "key34": "3zrJ68gwuPPJ76xdjdocbWuwM9ozpzKhiTpCugWetaQxDRhtwvQJP1jSGEFkjozUscP9sHdtnw8JrnuBSnN3n9id",
  "key35": "ZY8msc2DVmx5GU5K56HhFc9w2ikDL9wJ3YzishcDYVEWujERJ2xN3Gyo3vZ7PCvC1eAeJeaQWQNH9nmxnqND8Yf",
  "key36": "2DKN9oeK8p8G3BkTaQuj26XNDosKnUgrHPQL1JHjbnFQrDWnDZNyievWGJPWecSMg1KeaCceFYe2vbKns48iKrsX",
  "key37": "4S5JxZydJj1Wo9oq3XqzoiqpRRThTFJ6K8zgSiEqp3dw6D8DxXvjtcBH5M1UDBBz3bgYV5ci3wcvJMFm8CEMfaBT",
  "key38": "5nW7EhPFNg9BqQioH6FJsFr9UZrgfSUvbHeGcu2QRxFRrbqiSUVMCkZE9t1KZPLuoPgVQxapG64xbDsaYuhhH1Tq",
  "key39": "5LDTsVxGPZiNXiUQergFhKEho3wDrshddp6y2fH6QRdhB59H4qvzn4LPA3MhqS2ymsx3YEGkDwCrFPEMNbZF2FWz",
  "key40": "Wk6bj71antWJfFL3gUeiUiognUWiLe7rQgsJu7TpJ3DJkWy8DHhpkWcG17q92V5vWX6k6C5QGfHMBrBHc36FBUf",
  "key41": "5GpFYW9HAB3SQHR59eNRBLiZUNpRDPYZ7WhrZCkMN7x8ztcwwMuaSDTyJ694LCmvpTdvkDcRLkcZ4UoCtG9c3NgQ",
  "key42": "2xtdC1y4ivFXdPyXPSqYXBDypwZYL9xuqhaet6ehfRqQB1cz2VXerT3NXcnKZUcgdhCVdUWYESFaNaywfuY1wBd3",
  "key43": "3CGDxfuJEV2rg8nAEPJqPPWySaZsUdutpCJ8tykEhbNwkC9U1SRGaTQmtLrUJ48DCH9Dgxqdtf5BchxepC8Zijpk",
  "key44": "3UVNX2oA4m9fG2wAkrNs9XaWzu7qHPnfDJbFgsSnXP7efsovLDtxV4EJPUzd8Buv1TNqrXhVKVGxx1sYLHAJcHFY"
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
