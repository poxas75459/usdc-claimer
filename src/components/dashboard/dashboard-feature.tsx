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
    "4hNDkNif5BUtQVHwmaeCrTTiV5iuEfFQZFrTFC8j6YZKFjzqdVWCMhiqGHS1ScCbVaqP7a7XddN7n4TK2XNTC2bt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HsBe1upxiFqaeAoKVGb1m9xmBqjuGXYx5gYHaoN61WYUzyFh4t7UEhX3L49NUCj7W1ond7J1LjHjx7kNSK7gH3v",
  "key1": "aEEUy76E6MZJf28r2NextXBmtJ7cMzuBfzRUiMYJsiQVMByc9b6FvEEx6DFfqcAFN4S64VjK6BxzVhChpEZnXPF",
  "key2": "5erAGKSs8ajvHHWBgN9QUKuaEA1RYWS9fWppq5VERnwyru9ubSqgmT27FNed88vWhZ6m1AEUf9wsRLk3ciNL4hTp",
  "key3": "57Fm8Wac9ykT2vBCkwTkog4ZLTZsnK2NRvKr73mReAv9VCuMq3qYPzySQsugvXNxmt3HwFmrAKqMUPzv8vLR6jpn",
  "key4": "5sH9prrv7hj5tnmAZbRja3Apwti36motV1bXSGCrbqWmMCgudmtoH7U7t9UR7he4sBhKJX47DNK3ayEBzhMyNxX6",
  "key5": "2ToKx7dZQq5QbLPXBmbLvckiqMxvnHarFAoTq4TFv2cLy8T7eM9XeKWZwRt6CUfcrT4PrbDNR54E4pYuqB4Esk8v",
  "key6": "4aof6DDDmxaL2e4RE8ZKR9ie9NWDXXJ86aajGuJDu3kj3CCagKXXZsC9dEdPVmgJkHPQcDeo6R4AjnuxNX2k4atE",
  "key7": "4dcUA7AuECgWoiBQU7bsu59Nj9VRoSETPZ9V8rS3yxnQrju9W2FHjhmyuZPwdWeGpaE5S1LRBQ2g98ybcC1dr4FT",
  "key8": "4SwerF5SDd4m5SuERMSBjSnAtoRWjT8e8LeGQe1pJRzzKiguZ1s7M93r18N6zMuBShfSnztTMUm5F6iogpwQfxTF",
  "key9": "5T8iyGC2b5mfQbe88btJwCNgZvKQQXEfMA2eqEKiQkh6MX1NurWrBgBfEwLpBhbx9mRG6Uc4xrGywrLdguLSECQp",
  "key10": "2vq55y3RUcHqpgxovv5HLpv9k4noeXxeA9V1dfwK1jg3bd3vNeCDeyGCXGNTT3nkg6Ai7QHmHhPUckCKpsAt2tKf",
  "key11": "2yzy8br9VCsuqBHSbXaddRJccgHAX4U5wTXr2tTQ5CpYE9K9K4tqqqp5aex2i2MkYoUFsUY86ypRU7mLGMRcdbUR",
  "key12": "3CgmMNCYyXt9Cb6TgquLyAGXLqPa7NY4Wjj8yZZpgKumdNX5JtxkiyrUqFcN2fK2jac8rjVJEitxygRGNtxPUTYw",
  "key13": "2Xs2BTtb8zKc4Afe9qafVBCdUNsSgUM8ePL6tr7pjV4NrTou7BY4qC9DoNooMS1pbpXFE6PF2U7QS8uhJc3RyC3W",
  "key14": "2GkzUmsujhyDjV2Qc1xsTH1LcDJsNLAeii5ie7GMDhnpULqPG6q2QPKFKzvcCm6eUaxDSq8JU1sJjCSdYBmv8wQ7",
  "key15": "4XQoTqiPhKP22YjpNNa6sq4zEptqkV5f8arCwWpV8sS8inhjUVmQZbgzxrQ3VQXUyqwz4nKdhYD2sGLvRkBHjLos",
  "key16": "52yqkiQZhV53vNPwfjiLjcf6k1JUydDjGRGgtr6wpHS8QRejWNe5cG1pSz2Y4CFUsW6QaHA6JhhN58JzycZX8GSE",
  "key17": "5VfYFkegnc9SoEG9Nq4uF4isoXKUwkLAVPmoCU2tSm6vEb6hE9hzAWQBjbuzCPLrE4KJ6fEbZqRaH9Uohni9r7Fi",
  "key18": "oe8G8UipFdqSmvL6QnZYzjjSDEKLaLmPAb4F1wMQRwd2sJ7F7N2RmpYfr6CpQZEFFuG4THdBDAyaozV71HyKP2Z",
  "key19": "bn2xLXR9e4Cs4PTgTbqd7XMw2xfN5PkjZnvjwKhANFg5CpbdVvJeLVb7uRmJfQA4VTZYzB1idVNw2CQsTDn4ghP",
  "key20": "4diikLmaZwqh5WkXHpBfrDpQ56WiXZ6uECxsTgh4vxkDSGGBEmghzkdiNdQF7jF8arpT4CrVqMwf8pDy8gvYEz7Z",
  "key21": "4nhkk6fWZWqbPzupRW8GkRiGiwN9CWWqr1FqUPbP86ABeszkFQMCf6Zy7MWGwKLD8BnMqkWgEu2v4DaMYTG1ruyw",
  "key22": "VtkNURQcUGhj7bqzeUbU1ND8rgkYnpA62dB7qrBEaVJU4H18k1aabaQf5z7UqyYKEtimbn91CQBk5bydkabikJs",
  "key23": "4u9Bzqjc6tbw8p1WVyJrLXia8tr1rJJ8bDDF37rTiMbb947mtbu54dg3BTEekskqwaoy64YSjSb52sbc8Crbh5ZE",
  "key24": "537CYbtbs9wJKtWHqufeubhPFdooZDPGszRQN4PMJBAUFS8FG4KaJc5uoYaL5zyoVAfGpuHP8d4tWjfyDfYzkHHB",
  "key25": "4YMaus1pLM2Gc6MZNPtK9Qsk4tP4jfCNd3tmZYdzYCpxdF7idjJFT48ExXz7nbBwFGvexBPiUQd5Sg9ofqdZx2MZ",
  "key26": "2vvJHAK4iT5ohnn4Q6hj6XqfYFZktnexMSB4MymcmnwzQSosBjefBtajNjzaNgD8bBCjsaXE6rFdSKuADTJYaGqN",
  "key27": "4momjSjXBZwmXuSsVe6XzGSXc6tH1jjZm2xmc7zVZ1zHtEJdTmYrW9zkURYQBWXas11pdfZrVBfAmEtwiUzkjA4c",
  "key28": "3onvBBNwYVs9u64DBGNY44CZic7QVBrDTmdRWzKYMUmek1muYX9pfaFMseMCQtSL7HHRF7WbEZnScDY18er2qgPN",
  "key29": "giHeC6AZCoWzReXmLPdhiJruXq6GxFe5uKFk1aieZ9oEVJ6ocXEuaxqqLvbLT6ixXbW28Qpw6XXLakEf8aK4U8c",
  "key30": "4CscFRtsJ4qxQkQ4bgWhZ74KXARPMSK2S4AvRbgkZCvtcEw1tKsj8xMuTA6cJphvSiXMTLp7qZLA2guUzurjw5zC",
  "key31": "au5vBbRKmsQzNbdcrq73EA3QKpPKyqSPJHRydsWLYMqA5wyJeScUMBVyXPvhYGHZ7Mfj58PmhRwi6okjVPCYZqR",
  "key32": "5sKrLuf2Vf7gPRYX8vrGUrKxf5xZ1KLDhhSTFVm9FJqJyxPhrhaM3Pc6hQL7codyvskpZQ8Lg3bUdSqx1sQA2Ybg",
  "key33": "54DkSR9yaD4T9kdSyi5asWwu1j8oD1r9ureKJg3JWwPivhga9o3RJ2psA7aVkWQ6z6WX4PKLevBHmkYFNGPv1ync",
  "key34": "5igK83tJ1qVja7Wvyh6JqMpLNvgtYPGTEC8FHBjuzDMnL7bgwhMb5MAL1nBJMMQh4CjscmdjPkLbFU8D7RUNYMzK",
  "key35": "H7Lo4RMKpdJtG3HTYK5BpnZ9vUqZbHz2VAn5DiEEXjZoEHMtxGrAMVwmfaTFZ2fKsopb5pd6xAktdVJ9EFciDtS",
  "key36": "4MePp2XBzSkuSEixCjzGcGYFZLteDHJCixQgtzieiC6qgZ3wX2PyzCe59wbnfXZMGEi14HjmUtaKsMoozzsay4VN",
  "key37": "5qeVeupLUgGiXsh3HeeYVYUZdhXhKQJvRgVwJwJ4Xn7hhTWPmLLJE6Qz4nBVNf5wJd7g17gnKGeiiSv1d2uCumLN",
  "key38": "3aFRrsruwsPWGXJEAnHk91tMvncqqaqY3827pTqnoL1w6kgS8GJkQUcd2GfNV5yfTkL4xGNF6hdb22oYnvmuNZfC",
  "key39": "41gCF1DaiMSYjPozKE8yEwDFBvRGaGU5scrwvhGr1NUk5CTxUSSDKPmovZHsLdwj1kyi2xAxMryBVfr5WaUk9Mnj",
  "key40": "2Dbt68WPf9cJoaTE4cpqrCtTEjCsL3yfQovPXoBV8bA863PZJjjDTSz62K8RXHLaewcuhbuuqunCEqn3ViZeM8v8",
  "key41": "2GPFN2w1eAWGLsKvgE6LzezzwM5Hw6rk4haW3LhQCaxZYZ3VC9EA3i1auAsHLy9gnHf7vbX11TKY6yuXP8FVNiww"
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
