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
    "3fMGHAD184fM6rcoysDGW9YHx7bYZKLEw4LT7SSCBrLuTDcGRKyAyow5JXDG4DBBha9f1zhSHegH1vaGXmxA4npg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28SnXdg8sUumaWXNGLh6RmtNfNUKhNq6GBWtTgzq4eSPzXw3eNpy42441xB3qutnebbPYjA7siYz5JVtHqdCC1pf",
  "key1": "2LSaPFjx1BmcXU38tJPXFP6SwzVGUdeqtqK4n9oY5y9Da6uBBn772i2cBDhRw6mQwvkFFt9Ms17YMHD6njS2RPDN",
  "key2": "4HLTvKg338oUWS3Sgn9eEjcmnrqe8heEEWSkMweduQdFFeepQG7jpq1AFdwne8KNV44qs8CX2KES7BvYZvcZSMKn",
  "key3": "3yT8kXSjt72N1Ni2NQ1vzmm1PugBttycu2GFMsA7E7LkVHXEqLLGCgbxS8ujw44fhRPyz4PPQyjBg969MuFv4M15",
  "key4": "4VMJ43kSbz2nVrke9cfCdVdmk6ADiH3qPcLqjUVUZ7dz7GhqFyWtgfZa36ed6MUXmcgddUnvE3WsSEzDkos4a6Gy",
  "key5": "5o9M6ggDwN6H9timtGjL55qnBcymiiMpjaAepKLkNFCAU73hY8PcF25NxWJUQ6qzYd6DSmzcFZT1gBtivYdtBL2h",
  "key6": "2d8NKJnaZPnTLcnQcarkTEZY4h1ejVRMrQgC8JvKvvSP9hHb1ReFnBhdcK1rhWSor2xK1FiiCcspEsqNDWHyg9k1",
  "key7": "2f9BR32Amsi3NDWHTYjvAAHN79MNCVBkf9PJ7Fvv9ZZCRvXrimCSNmj7yYY6p3vczg8bU84jCDMTLqmEpnaC6vq8",
  "key8": "4Y2f7SxWMwR9YwQXNEZgAZrRuZ8e4MmxBqVSKZhiksk9UdT2shRFetKBMYTyHiUcM7gkJDrqHGict4XwcYrfwgtG",
  "key9": "Pnx13kpXUigRhrrBvdQES6xayRmS5A7pWANeqE2gS9Ys9BAHmkDCM6sz5wVYJnDhypFsE4Ej4rQrtFXJycpQg3p",
  "key10": "4X27UmhEE9d65PmU4srrWK9hBj8ks13Ne4xw1w5bwsbM7rMNyZEGuepEeEAXiUtN9Y2EhqzTf5nK8Qc4e2oRc4GA",
  "key11": "XJFmcZjTrESwXzBfGmRRaByL5eEzkseCuCnruSZp5a49FLRVsmwvcxukS6XC98AJ4nnwbYa2cpzvRyQGeeeZiEK",
  "key12": "5GGeV2mKzepYQ6FEUDZCG9qKd44LktPZWJgEWRSwuXZcja7vdJ2NdsEYhJ1zd8SC4tEcosaTkSQ7sHUPw9T4tjfV",
  "key13": "4UfBnrL66SQsMX97oE4mK427w21RtfhkZ1f4nmmArYppW671dVvceabCDavbqVEHGzRRtSA6e5Esfue5gFVh3vJn",
  "key14": "3VZ52UNLrMoookHzFVt5jkS7nVkFVyJapcjVMufXq5pDLC3LngAVZQEBT4yUcwyYw3CkaDaFB4Gf4rr5vGkxk18q",
  "key15": "2BL8EE1iK1KAJ4qLu9N5tRKEbKc4HGM6UvXH3TehC9aM1h5HpVB66RUVwC4JTXRWjxNPFnTn8uVqdxgYEGB3zhLD",
  "key16": "5yLUAmpvkNuda42osnNZxQLekaZFJsGDzbaQe8jM5iiTAvWuhyrfMnuLJfcuZ2HQhXJMdzHjPhMMbqVEXmGF4tXE",
  "key17": "2hJpLVVvXte4hnpw7NtxZvbA4qiC3YDRBpPGWwjrAEzmHRkQQ3LTUNeiVNrdwygcSNRCivFxtgovjSmiQhYRh8Za",
  "key18": "VdJrfyWtaWcABUH7XsV7SKfBCTuZFDRGvVufGq2M4PRcnK7tAFaujxACYqAfdgUqn29qAUxmKsyiVN6WthX5YDD",
  "key19": "puHaRdWhRqaSCsHc5cgRnxJZj8XVQULDn1BogVKwfJxxgVDUbThpwXbeSps8whq8TjuDAPoJBYVRB8oYMFbA67j",
  "key20": "5CcEjJ634K3QK5qL2sHNmxaVtSvJRjZxXGXJ4T9buTj9j27WYZxuMpdvrYQeWiNJaRgLYe5MsRQgMTpDdrUQ4TNc",
  "key21": "gdUUdNMD33BtWCrSLUZVPgAye1K7HJxvGKpGPosRG8LNaJhRJx4qRoTJrxWSE7VWEdbgTs9HVGJiw6PxhDQHYRq",
  "key22": "2e7gvamBqUZ2u53GANCrnh1aJoK9nbHNXqPXVCvL83T5aTFmreaCzK9trCzfcTou6934gG2yQ7upjmLa7FWCUN1F",
  "key23": "4RBbTJxbo88mqN2uz5ivGp1rp2JhFgkAZaUej5VsPFQNuskHFnpDkvEDkcspsshtuttoYL8qiv4ePBtK8mKt9dFS",
  "key24": "5HtVu7qyhkeaVPxFBqsoEBRBkE42tqhpzrimicbZzUxSuML6abwsSaWm6N591bNtTffRpyHojqLXwLWTBZ5tU2zp",
  "key25": "2MJeNhc64Av9viARHJZVTwBy5dKbhRNNVGNdz2hsaXHYf7deHD5jqXjHsTTiByKUfRdoRYVXw6ArrjbgPkcLtUDo",
  "key26": "4rLdpAZqE1ZzcAcmRJPgW3jvBeD3FyhrLPZsJYKXZLgJHdVFHqkvG8fJMptFcs2HWETCE5RV8ZvANPmAfqbs3fxM",
  "key27": "4PUi3ykg2qTHqqScdDtQojaE3QYL52MkGXdHA84p5MExPgWYGDFnh1cDK9g88AiNMiEtXA9AUt3zhy8Jf3Ai5qG9",
  "key28": "67DucyWGrGx3TrvsKomJHn6AsmtVvNCmgWuANUFZw6g3QomhmCi2pubmNpP8LkfLMctFNLApmPu9fXZAxVcmLZvp",
  "key29": "pbU2oDiD7hHd4ua3Huk3RHgnAyEYeZHeL4DH1BC2inibpfWc28DzQ76d8dfn6q7MBKaamf4tDwVLgGhX2U9qG4z",
  "key30": "4t6BrKgJpvGGjgz1J5B9UV4Z4hGXeXFAaGa8z6T4LxnbJBQeMtg5EqzJXJn2pE8Ap64Eoq9Fpm7TZpjLNq5fui7B",
  "key31": "3nJBtSkMNWMzVRamrUCTGYioL1JTCDB4crYdLT6T49vcK7U8Q994JdWD8Bmb6WQPLwGHMUaEss7kcV9Jt1dwSxaY",
  "key32": "4NLn9KAx2vajFuhhX4fo4RwWEbu95V1ZSkW9MqvmJ2vJdP4GnnfofBx7GyQaoaDsysyxewutARTYcAJ224sKGxgo",
  "key33": "3f267CNuBNFHCpKpxKoLNwy9KU9BYn61R1jdLs4u4VQi2gLV6GF3K8xCYCgB7Dr3puuk2dzgdsjtNu7h8AvBTwKS",
  "key34": "2NLqkicnmed3E2BnKpQV2UFYFYWdnj81TZKy33ZymFwGe4FBRtGtQibTka2oUiEjMoq58NJHPjFjDvkUtieFBqJU",
  "key35": "2sFHAhBS2hBbNKm6atr39arn2ErycSiyZw1dBuw9umV8nKWzZ4nyQrrFWJjjTRoGvmdmzuu8qgDV6TeTA3cb2yLt",
  "key36": "2mQkuPeFEMSAUf7NhWiXyu6g1QTMFVRrwMfBJnCpevKv3ky5aWmkfuPbQtLf6JyTU67y8ogaNhL1eD1eFWXug8a2",
  "key37": "2q9WVyyAYH4naLmsdpHvG1RUDDTjH7aGuQbZnXamvBhrJNKCZUF1jdBRrzoWZKvH57HaxTTe6XF9DHUqWvxEMKc6",
  "key38": "4PBQNqKGmx2JcstWB582oV4o1omjuCp9C3DXyr3NRsbRyFJM7Z95DaMMohwFEuGRhrMVYVH5M4gFZjAw2MVJRd5r",
  "key39": "5YecCJTX8R4dypa8Wx8BqDBPXgLStCL241jeVEpPGmjYDk83GeT9XEgZvbQ8RQBHPydTDdyVJTgJFvQgoKbaba93",
  "key40": "3qt6DJ8FfNNxziCwb7cbhycmtWpC8qiCSfLs6JqPF6hwtd1aPdeQipd57no4hEUbRGThugWXvZKGkhNTQ27Bw8n5",
  "key41": "3TRdpiQaJsiZhYF9CH1uDubLzxppVgnNC3bEq9DPsLM8UWWKrG1bWcyQLmzaCuEqx1VknTuKpAh9Q4BSmfL36eCm",
  "key42": "LZRcGrjYkKw68upjMVXmN3y68DBgBgPwQdS83uxTWD7xVxTng4BN96R6Z3R1sLadyBTgcQytfbrXxPtBMGX4W4n"
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
