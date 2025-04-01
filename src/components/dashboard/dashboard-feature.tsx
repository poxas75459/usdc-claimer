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
    "5wD4j6pPUauvYmjm8cv44uJGteZcAXMWLEUK4tZFKgfNNpPMS2u12dpSfb96BXzRJPV2JqHNDgSvFJpCKmPDYh9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FUvnjBBacJQSUvYrBhouqPFaX6DAbnceq7fucG6vtzT6dgwiG9515SBMHTQ42CGgULFZzpceDETpLbJursbMzJt",
  "key1": "5p4SX4EdzfdMgQqWbkoUHJ9CC37T9nV34RhunQdte22pFCTdPErQEqS7xeJHyM3RoJS9ryCVgXJb7maUoBLtCck",
  "key2": "3VGwD9jPkca99rVuDKdxyMRUpcS3eRrhp3Bdt9to6CRW9CgEnLXi3DyhM9ZQVoto72WqpLdVnc8atZ8QArFMgoUS",
  "key3": "59VGQ9genTu8PTqQFKVcMj8G3zfH2TjdvuGkQAMh5te1fWoToPTNm86iP2Yeg6EuUP5jVgshbKSQzxdubvrdVHpb",
  "key4": "5FV1pektMtp2TNXrgYV4YTdMfBDK4VKXCgEfsf1mnP4i3cLWqv4YcbHTkKJ2TZZr4ubJnV2gyJXTiS1cKtJ37xjV",
  "key5": "31w38vPyjcs786QdKeMwepSfBvWASMT1UApXyaGmZh5XjMoafWVfzHZCpG3Rtu9FUjRpG8pdE5ZWrccRMFx93QZq",
  "key6": "5P1nJZk5kjaGHQBw7RTygu8SA9QT4SAfvDndi49XAXAcZKXjqF2bdYj8EL6PPS5g6wN9z73PK3jjhynRW14kL1hX",
  "key7": "5A8J3tzeTeDfBKfdjcYQ6xywHeZNupNjAT8Pe7cAGmKSLE2Y2UZMoq3bp5gtbKhy7tXxMxw1z7tkAmDfTzaeYdYJ",
  "key8": "2vWCFGKK6jvKSKNJKv3b9BpF2eQoL34WM6MZ6ZZgUyDLCitHRkDSXBFzauZxeKeJKqJsiP8D5xrpypegWppfPECh",
  "key9": "2nu39vUAevh18AoV8fH1QuMHziZENDs2uMiRfWpXBwEFdJB8jG3v9oGn96BDPEvqGktg7rkow1g1whJtvySdKnhn",
  "key10": "21q84RV682pNGpvjThH8qUABPxA3dseZHTomXZAeKdpRvMgr3owg9WUhhiD5hxvZBNiVYrcagtK6CxSBWSq36i3P",
  "key11": "FHni9ypntpkbUxHVPtS4BffTpyvdLCuiNw5ot53PoKqhz7bmmCsUB7Ea2iFrPfQcRp1yb9BsJCihJXWw2Yz9K9N",
  "key12": "2Ffk3i3H7qW77whtAoHr2kUqu3qHGvHYuAQ1MYV1byvnUh2T2cA2EjJv53jH1cihza9QgZ8YY1wHgWpdLHjvJzB1",
  "key13": "3AeioCwZRu2e2QnU7PCMybGrL8qT6hYckKCZzH6VGs8ufZJNmfchNvVWzSqKnypBbxr5Mpyqd3A4cvyeWbagbibh",
  "key14": "5bpTT3q9buiXdNWiv7B3jAAhGTxfxuEURJKY2z9GVu2Cg4QcJVcNNBwE4gTJmyvTwWmrHjpt2VX1TR824oAAFsff",
  "key15": "4nksGYDisXvYGZ1Vj6tZFEbuGYYuubh8K3iNayHCHd6CtESvYYa1FB8GFZmHjN1Ei7rzohhgF9GHZRpwhviMRXgF",
  "key16": "3E1K8QrxJ3kg4XZudysnv1biu3hJuP42W7kCuUdkdUm17NDckU2CrSdvNcu8YKqswCudLTTK2TvEKfwbXyy2DrnV",
  "key17": "LUesqjtpavXEyFi2nogg326dTsPfDuBc7ohjQ6hmMQFnyudKrYTQKQxZAn7FdEMBM7v9YEjh41xbenkKTY9VUiu",
  "key18": "bb4HsMi9aUgt4aQHjUJNkuBH62SVbsCja3gwDUV5EuzM58jLJa8KSv7TVbaGBkYvyKAnT2161NY9UBb9qHoEv6K",
  "key19": "4XidUeZmaSLteeWCK6iwV8bc4DaMxgh2mmfee189Ym7VFQDo9iNhQ3N8nHufZAuJeqmzQrPP3cd68jJ642sENt9U",
  "key20": "29HZc7Aixh1nvmpm6Aw56wS3NSCYQuZnGguhGKgK13P65rEVH95zWR8FiKv5kN2MN9Lz6w57zTqx4H3rFtJYR9DD",
  "key21": "5USmfP6e13WXiVk96PVXa88Eo218jzYQjBrvzknUpPEoUnkuWQiquy2Gfq3EPiMpRGTYtzi4Fx4ttXjKQedTHh1A",
  "key22": "4ofKzsUwFL7gBjqVhtzwdkhA7pBqGkkYad3vS9HpG8f2qpmEDn97SturihuBDCAyNfkK4BBBaX1BfLvoznby3at",
  "key23": "XLqfbyXRvmeBMvQm4ERmV76EYct5QtAZqxKMh5PvTpZ7K14kzAsnRtqrQ2PF3m3j6KC3RB37Qhzg5GGSQJpdeEs",
  "key24": "5Em6gejKyu5NWvYQMS1kpA56X53LdW6GR9GEjPW5qoq8Zq1bCJoseoBvDfrFxQgdo4aS2sG1e81MWnyY7ixXaf14",
  "key25": "3beeatRT7Mj9RB5jPbKSjNqM44knWTuC9GiQK5ru8eARMWjsScTSnaVqwKvbTrmaftWaz9XShaTJBi2MEX9ehXhX",
  "key26": "4B89Z5Luzy8k21XiPsLo9mZgfwiMESA3U1L3L91YybeNkYjKvQWcHx66njxAnyygjQrfYgbNWUqAi5wbtXMtYt4w",
  "key27": "4GtCt24mXpLoSyYAcyMm6UhnkCGaQj16stqKUCKD2wta4JK2xVGs1rTivMtvc4GRxTAgmYJfsbe38wczcdWk7wgk",
  "key28": "62eu8Bb33NA7ZhQP2Pbug3LQLEwWkVF3ncXJKfVML6gQudTE8VTSoF4PQJEo9vsbUiPNgsSytdrxnqSH1jvdnD79",
  "key29": "2arVNt4uR8Z19j82b8LPLELoSRYWfFm9fVd816rGyRWUta1PYJU8noXi2q4VgW2uZMScW1CP1yLhseFjLi41Jiwv",
  "key30": "5d5gofZtwWo1FFwZL28KEap1LYwetVkWJgvpGa48MwSEDyKTudzLjAQEGTdnALbQ94ELMGLJQ2iRpfMJaHzKhUMK",
  "key31": "4FSF5tmUZo8x5kPyxPpWaLBBsgmGhzQ1QciQPPUfNKkXRacnryonabxak7rSkKk79txRgBMv8A3GtCS2VTE7d8zf",
  "key32": "4tdwWh9DTatARnirt6FmP8yHwRxq4aDorpKoB5RW8vf5y2arewEamPRM81wbKr5vPD8ByKdhv5ArPivszZEssh44",
  "key33": "2fFXM232coHy3qkg5cYTsDWu5Q75cg2EY6v2bauc37nT7m7SPChGEMPm5PXAFTWjU9gxSEiBCL4g7UfJRtSdNPFu",
  "key34": "34i6kxkkj2g63hnNreo43EEhdtHCSGDvbLq5DN9Cjje7UmonZdZe9PpQ6YpAyNYs6knQR2MondfXEp6apgCxRNmC",
  "key35": "4b6XU7z3yeYNLT8voN4wstTqFMLgvRCbpQQjLA7ePmH5zf8YaQnfR4koX9NhtW7rLXqadbbkLknXiEzhCcR7GjGq",
  "key36": "53amHgmzpaECBoGLofxpgq4s8nfMRUZbSEDFBjYDhYfGQ2CnrNN1Z8cRuKAqSLCYgmYsqLCddtdJs7FP1VrPmeG3",
  "key37": "2Y7HzN41YwcoEBjL7MkwYYv4KegxbsNvzcuatSk9Xsm3x9PsELUy85Kicanr5FgpbvX6nue1FzTNYExSbbgA3uGY",
  "key38": "5sAxMb8z1YQ3ENDs19Dbj5tPNcDGP9xsuajBmeoEafUAMshkZVJ6Vm42d15yZyqBJ5aG8JytST4W3JbqSQiv5kr7"
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
