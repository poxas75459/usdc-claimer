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
    "4zmU3CcQus6kmLBDe5B5CXouQruTzhCcpNAo2AQoXsYTZY3UwLkGMhitiwrgro7abDc8Yn4qRHoregZ6Fh9ebDpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34ygug5gBxM6jQRKkdzLKFbUE6Aw1R9ytFx1CZLCgeu4aQWV9xgQBdvTpWrSbAnXHMs9cRVV7ZBbZa2JsJdj4HwP",
  "key1": "4yVrCR5gDmQ2Q2dFVtfch8N7qt2FYSJ4xJXQyMKHT9NZrTaXZHMT6NC8P9gvdDVJiGq5UF3xdkMFsj9aReDVkQuY",
  "key2": "4gy3DMTUYV389sZf7daP6KFmkUJdiGGPq5e5kjRDj63Zr3xJWdUmmWucKgksWYwoSw8YbNLZUYUmN1g81PwWUh75",
  "key3": "dnmU1MWjYBpEEGWtammo3yr7sjNFCkwEzCXRBxTQW1jUTrtbFWBBz8cTtJ3Xc9bAK5kjkRhk7ix8sFBYC2qpM8j",
  "key4": "5oCzTShtVWhmZTMPoz7Wi4YGEYkZkBQXZBU51rJvsgL8VfErJibg9AkoLootTUoc39yorwNi254RTu2ov73B9i5k",
  "key5": "5nCLYcSSLEBxGLngyWM3wKXu6EwyzBZtvhQWjTRJXo7UasqyVKb5unpEdWxyUUy1iaPxFVcoUp7RR8QHpb46M58c",
  "key6": "W1EoKQpFBvJYUdjkCzc7rmxouM2y9PheNaD9GvjtiXpvgTxc7te5hNpfr5uZ6dZAHTpVTJxHuFoZFpaNwNSyB9t",
  "key7": "yTJJ5Q1K5ZDVDt3Tu2Tc4xwCpParn1xYttbnDKaaUsc5fjMiac1GHeWfZh4LqwPQxASfTfc88ZiTdgwtYXiTsZK",
  "key8": "ahDUJBMHsJSp4RiwshbNnZ6aEWaeKK7ubXy3fkZSPrZwLDdZ93ocCKwzYgSQ5iM8ComepE42qUta2XPxZHddsnJ",
  "key9": "osqXEfw7u9QjjAHuLRtTQLt1hW4r84cFq5T7dwhn8AzRcUicfL3FPGJkzLror15BeN1wo7kQ4mkQuX4dQfkqGCY",
  "key10": "35Jp94DjR8Q3scMPjk4ozRSanpckwUkB9ZsWhrxy6muzKbHw494k7areDSLwiBJBVvNkYq2SQjojb99na9rCgJgD",
  "key11": "31Sm8VDGuvWfT9RLdouCUX9GWnmcpB5euokuWpT9KX3toQenw7wZKa71QBMTnw6Ww6Vz5iZ9ARQb9ErXStd8fm9Y",
  "key12": "5rnBaTjijwDnkaF5iXkcqAUTgP76GUdGuU3UqNuJGZH6JsAt3N5eHmRYAhgD2k86ebYTAKwZjgvyukngSR7iKnQQ",
  "key13": "2HTx84jwKkME8TSeSBN99ArH2kgptvUTsCdYKzNwJmUmoksja1VxDwzuSCQjbv8FyPUDo2Ka4Kgjw41jKTJ1QrAF",
  "key14": "UBtchsm6gPA6y7kRj8wHvMh18wjY6HRnhf1GxiUwNHcFcEK6B24ebWeNtmskgfM7GjJxa1BYS8b5rc8TqsTKjKj",
  "key15": "47HZMExiqBQZ4JBLSah8ZcZZqLonT1bRicjkgTWcqU8SbJUYwbbQPouUmq1fcMyPrnNhuomUX65Tntnjcjk56hEC",
  "key16": "5tHiTJYGGDKC62BjsqLFpWHLNPsXQGqzETvHgETnksUcMxEdmSdEq8dH7fGb4xhPWq9RprX9fDMZ7X2sQw1oWm3n",
  "key17": "42MEYLFPh2VALGwKymmX6RnNKt6Z4gvN6XGaZ4mqTG3P5PjqqT16AcZM8QhpwMbapTcsSafqQZchuwNJWgMZ5r46",
  "key18": "32XSvc1DerNyWdG6CTqPAVZUPfYGWfHkqMVFrKHsFwg7cbKEBRa4XryWN1U3ENmuFafCkHPLYyJ6jJSuXfjeMmhb",
  "key19": "2JkeVnzhZeABzzv5TEj5DG96RVkRb523yk9jVSRsBGSXqR1acbwk1UZL6aUdixKwpyHbong3NPAg1XRz39Es7TLQ",
  "key20": "LZtAc4JEzjLnjfb5y4vxEsQKqU4mH7qqfh2k3e87QxYA4dqjy16PbAvKY6iqLJX2fmS4dLcEFuWULjvVN4LTP49",
  "key21": "GWJEP6DLJ8Ez2Ep3HtrdfwbwZiCEzLSt9jMi2MEQvoX9mRnHL6ubmQjcp13uiifk1AN8c7u9zbu6geEZXxZuDSM",
  "key22": "2F5WUqZHrHPBaRFN2imATJ2UGhwKUoFtMjbK5G59WuYPWDsWvuCuaLoHdKgKm8KLh1CZQUgfEEmHchScHr2KWi43",
  "key23": "TSagh3YZSQ8q56tzcRnVaVBAd4wwnBpFjSQxPsPoMgUgGiukv4TE62AbuufZEgKrXsJZm1f82rghQ1JwTdzK2bY",
  "key24": "2aNBuePfsc7Xy9qb5LW4WY5Nn7CMZzRy6JkjdjghYmnfaR158dVmzpZq7DygmvUNbhWTABd5VQNthAhEbdzpb8CJ",
  "key25": "3HECnR9YDG465rkLDTNhZfTbT5QjhStnbkURne8wg2VQB2wncG4QzAot11DrLhZNLvh6aFqC3FjTrCNYkZb9sqFi",
  "key26": "3QdD435fc3KzdCJbHpDHamgAZhYuiWsg9YgSy4RV4oArrBuUX1ouiTxRNCXEtXtxxUDTJNR7nUhTKjoYiFUjLNwS",
  "key27": "4GGzfmmGq5Z2Di5fhZ7mQYFnEtvSrmoAmwP8ac6RNypWhWr74Kp2isTMYVqqZYhp2wk69Z7KkdCu2EkfjYUoMvdk",
  "key28": "CWJCS18HjUqK3e9gkZGcEjhsoWhez6udkZwbgdcMHVuV6XzbZnYLovFKgwbWBJ9yLZPDXsjrFL5swKTQ67t7xps",
  "key29": "Vk5ZSFC5xecwsbJLTu9TbduUXKjtN5SstEL1qjRuU3zgcZuo8wbxkwmr8wgLcGjGxWZGNS6XvcLLw4JEcBBuEF8",
  "key30": "4NC3BXbDeCaWvfe9A1wBsGpiTLaDUQV83YbtdpVc79vLc1aHCdgkV3Y3cR11FgiqVmNWev7jPTtEMKgEHtN2WKvi",
  "key31": "66q6rEuuvP2QZVCfjn25uBxd13kqXqTKtgbMgmfXSKbZnCHbuAMacwwRDuFB2UUdaPGBppxMTUyopUTnrD94S4D5",
  "key32": "Ggv91qh9hJqp28iUGcZxAYqoc1KmdqrXfpUqm9mpGMZs4WLsEcBaLPiSpThrBjK6HwvStURVUuibXrF2hE2Vy9V",
  "key33": "2HTLesbKeSrbafZ4Jhnnr8MXS5m3NQZZ5eAfqoWm91UyiaJNgutq3Cs7UhHHKcNeYY6TJ2Vq49UnNYn5WDWN6T25",
  "key34": "4JVAZjVGfk7G3pe1vmnjNnnxXZDnpD66coNT6nBMgKerCEEFw99JtEF8xeRLUFjrkQoRyv8S6xr4ueHgfrajwEC5",
  "key35": "4yY9fRf6jBTnG1XxrErWNTubhcUrnXUreQyLD1dEj7w9BQ3MPcjA6z1Pgcu1CmC4tvnME3A1d6WUYNz8xve2Efzn",
  "key36": "64uzC9FxxCPfvwD3hMf15jKpoPZvxr8X9yYNzMbxCyBDsqabSVLifAgupZmoFWKKS6NTuVAE88de59ZDF2L66oCb",
  "key37": "R58GnStXQxaG8zDYdh8oEfr5AanM4dZwprnNC1ZuXwYfvA6JJA2u6qkYVDZdGY8EmwE17x6vnr4rMgUWdQtsLKf",
  "key38": "GPxHbMTLvekPxG6gRqBB6x2UjhenH6cP35c7EtCSSXHn4sxUd3tnih7JEP9sm8K1FDXHww477RaQnu97a3dTgn2",
  "key39": "23kaMCsNYrpyWrS27tgMbtuMGa9S4rXLMNrWJpmhMAnimDaYRix8FaSuHaWMEMS2CuJrtSU3wFKSs5B6TVs5DE5P",
  "key40": "cZrup8B3nk7wfFV4wQXWZ2BWpzpYAAXuaugeuVW8DSMUXNqEhvPVki234mWAbAsoz27a3eeWrL6WLU7pHPVbQzX",
  "key41": "2MrWcXmxSybVMxjqVuQgVjTWZVDrki4RSy3D2VYNBZ1gapfksZmcY61AFXawEEqs5yt9xApLpkg1YZ33zM4dgviE",
  "key42": "48m5kvNZpVq8UVca5p2QxbBjCrKckUgLF5pjRwbArEboB9jVs48A6PzV9dpX4hTSWsC9CAwf5iZ4R8rH1CgC7pmN",
  "key43": "37E7wqjbBA79d5iUemxw2xsaQgyAdjTTXRemPy2abtPZQSwgPHi9wnNK55SyNud5fdK1NDDriNMjCKFViLwgAHFj",
  "key44": "5BWMSdzrBiWc3msfkBNrhYz5dnNMVdEEnsyxfH3pJeqsrUEWn2hFYCBBegu9DmgpCERNtuasSYtK3HQcvXbrJEUC",
  "key45": "BPq7dtV21iwwiXsFqc84AA5zBCYEvkW9zc3SmHkYw2iij3xFbMp8SJSL2p1pCPisoZ3Nj5iC3dPBy3AJeQTgRZ9",
  "key46": "PrpxuU5UfacCRaeBqRPAEGw1eehThWNGQTbwfksq9qRBsXVysbsX3L2TjtG64JdkbjC1kGiim887ucih6s2nezJ"
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
