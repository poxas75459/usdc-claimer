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
    "5Ww2TncBLFZ6HAEYvYyX38ntkVzpPU53dMDeYim8mKet7TwLy3DwRUWqqHPLF7zLpH7DyWjmwG9PvQaw9XTmwARx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24d7d5J6FaRGRrVCWT4vyKTwn5rGHPQZsTEs1sKbGouAGE46tpHuFn2sDE6Ws4dJWv5ThbMoF8pv3NMBithCdqTY",
  "key1": "5BbLNPuZKEWkk6wJd2doCCme9rfYSYCkXaMKrALUCrJXCH2QVdq3wM9sWYfCFaZe3Bf1oeWSCWUZX77fN6R6pwcq",
  "key2": "4xG8jdYDUnNLoFX3gVKs137yTc3qXN72GZM998g6zU6nqvpq14d8pKhGpfpTcNbgiCuo4TvkUEk5ZTmquf4vdtaQ",
  "key3": "5NmCajvzwVUcKQs6u2fUKgPcDJsh9Q531Fk8K1Rhf9t13zPVKQXzmJDFVHirNh5pqaFpuYGUFyVwfxuuayZ2edaT",
  "key4": "MWZVymoYFPVdZPGUvToLGXjiQJeYJwbn3nqpKBeM3puyRSXCbejJSZDuUZ6z98kj1pXR89ru13a8gWbmUXLy1n4",
  "key5": "3raNkciFGJrxNHEcU1dMUWro2EdrMuGidNjESVvhj6S1Dzty1uZLvdxbjJhYqGF1zFqh6j65NBPQ5jw4NbqG9iB5",
  "key6": "21ofHMB1WstxMV1EBJMm5oDthZaJBFrcDaVQYsvJN4pLQmqWEWt26hn4ud3BD3yzeMkoyZtvVyTbwGaSau8psLDh",
  "key7": "54UH5vnUqdTLpS6VMsUQcPbZoHpWYinMX1AtQQzTrLaw8QWsDXnvt8Kn2MaukRBkVA1mw25LzeiRvc6TBGByHvya",
  "key8": "rcdUwJAsBtrQdsUGgMnVNjXbSDYjYEGhPY1FWW5GJqyjZ47yrPfA6QtMNhKremGcWq8nqphBoz4wu1ekDtRnvKZ",
  "key9": "53dJLPz1V6PTbQubVmvQhNUYgbasoNecHUBwQ5j3wDw6AK1gbsciB8nsYH2424P4E1XzY9aZRWdbSQmqfLeL25af",
  "key10": "5YBUrcdpPacoiP3L1HkC66sP2WPvgTMHUXH3QpVfyxCfjgvp8QMinHYV2PswHvDCX6EdxJXrMsJ6N8U7dsQEhAEr",
  "key11": "5K8YtJBxXFraMbPfyZgaEcxJN5uhPD6eSp4bcwW8jQSRorqwb867akCeQH279deAFsxzRVwc16V8r7wxWVNiMpT3",
  "key12": "2xVfwpNKBT7FG4FsyCmwUjQ5YZbMppwzCgZzHfEimJdZc1D88Ro9ozqD9DgNkYPc3hJXYGQAFLSW5TFvG8ZHa4bN",
  "key13": "5DybfefmZdri8RedyuU9QNHiG76Kv7QUATDjDqKmnuuPiJtTAzExCf25zfW4aiLXPdaGu9Z1RJZ8TiXtFcvNixUv",
  "key14": "4C2Gp2o9xPQ8aJ4aJxMy3hKfpdDiut3qu9pbFQHYB9rSJazZd6eFVoxQ9khNQ85jFAAbseHBi5WZMVFdLbJcAKas",
  "key15": "62K76uCeDV8hKE78VGjHWE5Ci1tEzK5uiZ6Z9HDLvJwJMMxnJpRDhwf3HU2pRDbLiZXEXn2nF4rHHFZxStFqZVpu",
  "key16": "35XvwmeErEHzogsLXwAqoNcsEWHc5Fm5N1q387j6qtUw7WXzNYBiL9ps8y3wdkrhTXkn74bJ1D8XQ7Kkdp1ptiae",
  "key17": "5XSk3xdpHzxA9jmEfxNfDkkBtBLB2wPpbgS1MAUnosmUnP8B7fjJQmkZsZQgANuTtuRnhRjBCqooMoruetQcYSsM",
  "key18": "TGSiugnSb7KtFtAZCkYGM4vyocHMszNS5CgC1qjC3KvLasXzr6Kue4j2EPvVv7fGHUcLNwUdJQmxHuYHNFgoVR9",
  "key19": "5UWrqhhwZXXHc9V8pAXzhstKohsb2gMvWHLdDPUjBNDbnEMKtWQnmmNvABch4RHJbqMzBe2NLqvMSuLejPrbJzP7",
  "key20": "4H364gFFFbpq4bJzWWVToL6oF3z2LexVH4WavbyJ1n8WdGvELfE99YPtvPvNcEUW4VRYUPjN3PtjcFWi2mUhgbFW",
  "key21": "4bTubAtSdQdCRBmZNgZkHZuzWM1ePXreRX2ELqor9z6fdZHenmRU7FcsERZjRzfPAsZtRBZxjwvkDJGXfFcSw4uV",
  "key22": "4o6nbb5pDfwP8tedXLUr1xpDeqT3VgXTHF9wtrKC3w5gZZge1H4s3HLjFLj461RFQfdyTfQ4ngLGSc31sYE9UVc1",
  "key23": "EkYsxdR9QTbAPexz6m2kh2bBaysFHqCTxLNnjyTLUqX7FVfnSdnKX41gxLJpGzcKQ5pLTBzGFKA6KnDSaFMv67c",
  "key24": "2hzjHh3e1JY5Y24AVmoXzQzQ2eLLoPCjPT5GHrq5nA5Yrce9K3Q72uvhAuZt2xcctW4yWYNRH8a4H74PaG3CeBmX",
  "key25": "5qnVyU7F3NpWTpTQkkdFNDESyvCUQRnNdCUbFiFTeL5ZX8dExQR1mB5Z5GTghLA56tV76ooJUEng1YD8DXseGNvA",
  "key26": "LELHsZrEMaW7rvM6WBnzPuZoAAHydu965N4aTmtKCrKpySVTNLcgt4tVFqhY8U1bTqLvdUg7VMedYipenq6JZ8n",
  "key27": "583Pe4rc9ZaueQeNKwzsEWVi4w4V8yejRr5LftjxBaFFFDfm4Kb5FHawwB99FDxBpcLN7gnU9mMMh1Z331DFHTjt",
  "key28": "6en1RJUtjFAaB1eCrKNqFjfJLTZjEhTbgWw5jyVsWZwWQvsxi3XpTC2NdvH6N9wtjSt9rpTJgyn3QGBYwP8xdRj",
  "key29": "mHN81fS6kJdKjWVv2wmhMhM61NtZhfULdnxszkWRzcdqymMJwzDHrW4dhzmY5iY29MFQ1VqT4P1zrqpiGmtmY4e",
  "key30": "5bzjnozYtdvYbZGdDYdzbagESWwwfZC5hwYtSwAPauD4gRQWX4CRsipftsLL4sKzgb9yetTSPEuikT5tAiMmgdGo",
  "key31": "ZH79SiQgqXa9kWcdYJNYicMrh1D1Rw5zydG1UZFaREWGLbkrpEih7BTQrgbxympL6Q1XAiEobfhhy4TMqBxk68W"
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
