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
    "3uTeKfgNbzQaPW9kt4pKNQ33rKtkBN5d6DzqQs9GsfvLivFBuDDx3fTdxegQ1PXVwXyMWVqBAuLaGHKdByJdeth3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45D27Tkk2QbFf2pUrANrLmMv525dREBe7tMSLYqNRkKkmQ1HApjAMH4yB1rGi9RscqeQ79wJ71DpxBHdZEEUsqT1",
  "key1": "2xmHc4PT1ymashpREq6vMGSMrq62VEYF1KWtXC7fnuzwnBb3FP9R8PbQu77DfsCn3AX2c5MAGLShya66PSahbCQq",
  "key2": "2FRsZJAkPVQpywcxcoWz8M2sRB1cKdKC1yfdLmBvyDnqgm8SFAcJE9XVfoqzWRFbc934TJdSTLaRDvrrtD597SeW",
  "key3": "2Z6u4myvSmxx9sJvbw3aWhdJaixmxecwKqa3Ns8BDPdFtpzeUzoWjQ6RJ6mhtvyKVop73tCUFVQFQzNnSb5yeRtd",
  "key4": "3RrXTNAkgqxDKjLxuYbJoXbrqPs7fj7E234YXoh8QNnHiv2zdK1DwVYFbTvj1ctPc12PrSbM1UDhxYu82pu9CcuG",
  "key5": "55h6N1Y5wGWbWaJv57cpemz59bJeXVBHRGa6zwXJCN8PfeWgz5nzdD7ed47CSwaAJo74K7WmmP7yRz38fmoX4PiT",
  "key6": "5fqicdqFB7pVqWepqvi4EDCVJnchgbJESL55h9okUEMC1nWC8hTH4pniZhBBghyyN23MXh6rodiGHNQT9DGpCi3J",
  "key7": "2oJrXFciaUmSudVvfAifGtj7ais5cJADyqaoH7SzP3JVnCbZcDfBookiLhcSwFerVEuCZwHhSoxunMZLvfEhrWbN",
  "key8": "ocQsqbFHahGwFiW3yorH1MMtqLuDC2F76yRLM2Dopwan4uhvzxSYHdrAiQMx3bwVobGWwjybByHBr1pfBBuYSur",
  "key9": "2SCNqucX5vsTS8683dB6xC8bzhTHtwYXrTjMkPfvEZ9SgvfUTenTzEPkHQs6GDcrF7LQDpePHQJGeecdCnkVvabU",
  "key10": "3y24z9hvJZx91tyVQV68UrNG1FV7zFra2tbx4HBGmAk3i1RFctTKcoA976Jj76gzr6oFYstUQY8676mn4W6ecD74",
  "key11": "5ywcXBjP2KTp7d6DpfdNLR9yfPynshnYL1TpSRiLVqWe58nhCCRGzVRzhX9HKAKebE4MMNmY5ZCkFwYqbh48SPz8",
  "key12": "gGCHajgkiAx1HXKz4E7rLCcyCunsSU14wb678LzSjqy88NqAWMGU9pCDJMuLvixNHZm1W8v5YWkdeVwhcY4CAZf",
  "key13": "5Uu18jvJJpXHqH7U6T9iHNAzB5NwTaUvJj28zb2RSEXbHKwXe3DnBF5ZjQSQwBKZRsmjQDQ3UcFQvxCGyXZPNx4C",
  "key14": "NknfRXnVYR4FtSk8W5sMvYHFPoG9nKHcu9BXGQTvCkpF79s4qX7dgWnuGTRM6f6WvKxkc5KaAsahZ6dbdTxu4xT",
  "key15": "46rtCdjxvDrnam2igGsDqDx2Mms49XJ9ehK97A6p6CGisSTWcNJ9sGAcXjLLkrogBAFZ2HHLYa3WVA8ojBXHWMrF",
  "key16": "vKro83beuaVzYccukWQZfyaXq2qFh3GjwLwG9tAjV3L4nusa1WFVavpqdDLpLKwR5pCLYod8xeqVrCH5doE8YWK",
  "key17": "4a9ZsSPs5ScePNjLQ7MVnCSvPcwoRZvQD28RTdciqX65wWJvDgfS7jD3TbJuX4iXiJBqQqHUkrjFh3L1iL1kQV2q",
  "key18": "CdEyZiCzbkLhzvsWwN56YRbMbzZSjfJyG58eGMeCamuZ1WMnsfTvVmbzG842fdZBkpTMtQdh1nmaaRrFXUw3sjP",
  "key19": "2g7pH2fkhfYYKfBnuS7djVGdP9ZuBUNXehSm1LSTVBrhf39AoY4KsZG2SswPkieaMt6GgPoqh9WgtBwhuhLcjpBX",
  "key20": "o84exdB2NxWNZ6S1N7XrckbgKXcRjDobaBz7wUQDYoKJtKoHRYEHKpDcTYjBoh35mzDPveUGc8bcDPwcxpE6g33",
  "key21": "2RNojBXckFFdpn9BekbfzAFYsRkyWVX3Fn3oZ17XoyGD8SMBpPTVvT9TGNf6daDqiUhSnTpBNzNcp9xZgDntJucp",
  "key22": "5cUFUgasyXZJEHTtMbQtxvKjvZPrU8CfPTGQ3hLd9ma1YXRkE2vP7drHfM8mvDeYAobPwZ78EhrsoxhpxL6freZs",
  "key23": "4J5a6wgVsVJrTw3Nab1QfwT67cbf4GibGykBtp1P93H2aXrS93mJkKo15vv27pzfTWwmafDeZu1FGKepBE2KuFYA",
  "key24": "3ZR9mS4mNPVaAHjGwbYb5U4VYcRPPTP5XrNUKt5NhYc6BFK6a5nB1J1tJpTyzwK6pfMSnsrUbnNVkv6LN8JBYeYs",
  "key25": "4vsgghvUGx4GZERAfHi1EjFi1cHvxhto2utiNx1DXxeqvUY2Y8NwrWdoufR7xjkwbjuA1GjebTiSNF7NdxLiAakf",
  "key26": "5DM9EiYPiLockz5gczLik8mKaku6J3W5T82gz1h2Ut4z5gPx2xEEL2cBKRFqwbYHJaoPGfgitJMNWwEYekr5W18U",
  "key27": "5Cf8LMZVcjbKqocHozjrrQuQWpTt32HgcpNrxvESepAoyGDy1VAdxMLcXXTgYfVEwfRQtGwdeJ7nkYczqpxeQ2H4",
  "key28": "4dyA5iLtUxXucx7AGtWNyA7zoswCj5SBefNccViru9aPZJ5twYKiX9i5GyoNYbiqbFSNUHeynzBq9tjjHDANXjib",
  "key29": "2SgtJB8oMwKKrDapkt2kzVxXqHwTvkF279ye2aCTjrFHvBmC8Zd3Xh1jwMf8LPRjVMEtQZm8tadTWMSWLEpo3rhK",
  "key30": "2ZVPaNkvUtdSt3x6YoRDTiRLF3ptcLG91qWeAJMxDGQw5LpdsLL2j1ASySNR2ZPA5RzcyixjGVYXGGvjqr6gcuLF",
  "key31": "5Uww1R7woTzbDPTXH9y1kPevQg53mBLWbM7Y58WtYRVsgUVPqrPfuwfQNxN1XjHn4CmKSL38aVU1CYkBgMej1AEZ",
  "key32": "2iDpmrjCqUKef3mboi4SYpMjGpBHx8QUuQcMvmwccBFrhibGAaQzZQ2479WChw45kL8EwXBNta5d2nx7mJUJdiim",
  "key33": "94Ct2h1MXpirvvfTY83TRME2yE7EiwMFZDqbkJZva6S3mRpmJ31jpdiR3J8F7mssMGgMoYFv2dyPpkVEcK7ucQo",
  "key34": "45c2as2WQAGie1ot6rgxM9ubx7Ge4izGb8cCWTqYLaEjoCtAD6NwmX2efUihZLM3J6u7hUFaTb2iZJwmXpPDNV4n",
  "key35": "5hvQHJWKYcL5NJJKt1NXVdiFoYWhz4Xt5eqcBrYJBk4v3wZvNY5BqYJMVaJM9jdAAWwZEZBgPWRdPEqw7UT68n4q",
  "key36": "4DLVf3ApUaJ57ycSaGNRsJwkXAr3xSN5Y46yzPbXpxfBMyAma6vdFKNamk7AYdhR4cCMex1RHF7jtKZsnB7HZPqW",
  "key37": "55PuA6C9Abd4S5uJVENLDVGNSPptG9Kzf9mi2jRqoBmNDSz9Mtu2S5J3pQ1FsC3vFbyBJtyewFAXMif5yrM6aHD",
  "key38": "48pCr9HvscFbdNoPGZCiQZoa2iJjFXugD4rEzFhYo6RTokDGUMQ4RaWhHVimBSt71Jif58D7bVtibr8oFGs3hzwv",
  "key39": "2JwJT4hsc9cFrwFfkvVHnWGHX8BvHJH2bvyM9eTazBrBRpABSLtdS5uTWHh5nQNWUVUfcUVnZFdwf643CxJZGe7b",
  "key40": "ue1ZmL1aQtVKoaETAAr2HC1Wpq1yWe2Vro3nGyjwcjP3cMjR9JyM5FoYF1dToAvPG6QqmBHimPwVchN29ycaarg",
  "key41": "2ihpDYVVuyhzZ3AWjprZVsUTjaeeybLf6nJf3v6qybRnELB5kiqoregnRtYVJU6e2fG28E5kRCYJWay3PrHagkHs",
  "key42": "3q8TNAmp36KT92VoQRfMq3DRbpHUcdHuxtHPjez7v66Uum8wgm13vJSveUy7nvgchUHHeXczfusBMEmZ3mvyy1z2",
  "key43": "2BDnuR8rVrtJTvHp8hRdPqj3GxqDKLcWMozn8Bi7HQQDPnQ7iFEqHKN6bokyjtbj7UABJGzgorEozgdoaWc3sENm",
  "key44": "2N5EJghwkRnxqTuCg48LF5kcWs2VQmx5VwLynBqKXj9ajN11yCo1Lavm3bK6G1uM7zaYqnGVBvZ2Xj7wEpKGGefR"
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
