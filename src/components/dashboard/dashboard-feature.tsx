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
    "2hE7MwVjg88MTRwfTs5ysbE3iwBA269drHNtgbEFMfk1sXbgoQhRiBeiy9EWipu6QTSbnbVV6tXfF46ymJhmB9bW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xnvfXRnqyUWiwY8X5yXbmnQ4TsybMKeRNW7qqKcJXodeBbp6fmDivR2Wx6oQwHw7Sums7pkLMT8SeQ1XLmFkYpM",
  "key1": "4w2o5ZjKS61WjAXmQdoRj7uhWPF26iij8M8NvYkWRxSbPWxEDCm9ct9HDg6JVBCH5ep8LrBJu5KGGwpR2xqTmJWS",
  "key2": "5dGuMF6D9dr7rpXgkCdDqw4pyWPpSqo5iyZ3VccMBfSr1gJQpFwhhstiVbTiC34NMLecL7C1rvX2CRFxaBVmBwTs",
  "key3": "2qTResSie3AbPjhFEENw3SGKmLEUqvjSCNTQ7q8Ds8iqXUyvMWi5Uon8WKKbpuXtjVeTkA3ENixEjufqtSoRn8rZ",
  "key4": "44LomvQorvst3ScgZ4z1HPBvbawjcmbedrVE1XaVHgtB2nuEMmG42JTbGZb4uNY746xx8ougeswz6BB57DwMM9sg",
  "key5": "5Zi7rmDEmLub85j2F2pJCACrLMGG85DmoBC8PGy5GLySDyQ6Mcqv6UCMk6WNJQgxAzEbqLiQ9dhSMBoBTggaAL6c",
  "key6": "qnzJQHFZL4KeapdXofD1vV574dkN3wQJz4x1JzNwr9a9hRKsfChY3axA1CCtp8F944DuWJJ71vsBGCC21ZtEKaE",
  "key7": "4miQhZF6JJEsFM6t2SQcFtZ8mDvam9SATyAFzRmLMN2dvUPzVNXGWxFG6hRbhaXEbPyvGyrGJ79gvz9ibmidjncq",
  "key8": "MmpcSy8eA5hP6U7ozY1vkMJzwXzTsXtrnt3Y8F7pVXwx7gCMs2b5EF8rvYEFp2MXLfywuAhwobnZ3uK9PFTxME2",
  "key9": "4VLMFunde1q8TReH6v5B24qbyZuGmBWh6Af1fc1t18UTdTt4cMihTp9u3ZLfoE6CAWDhSoLSTn2gQ1dTDSbqkjNS",
  "key10": "4j3XJXBBMQwwVkrYHaxd4k93SEuSVALe5cXrZaWYsSxhytREmb7XtfFwzZKXbmpzXE1QeZjYAVyvCXcVEkptWpeF",
  "key11": "WUAq3sf9NizQ64Aa5tVHw2azDB6NSZ3mXaqocu1kgBce7GzZcq19CEM9M3X4CKBkduL11bGE1WwjtwANt4spykM",
  "key12": "22ZujktEGNtaYjf1QNtnMM2pq68S5GMvTiVHhRVvmX5dch1pu6B3xH3qMe9KHMdhDuBxBfsajkz4Aa5V8Kw9RdLz",
  "key13": "2pf9AqHAfFCzi1H6QxMBbgDgexaaKA9YeCsBM3SNqaju7fLKYboo6yufXGgBa3PkRCyjNsp4L4dSpGk38zt9rdvF",
  "key14": "5dVR1pAAaMa5nmP9YNXXzQ7tE7Scn6qjtyF1XcxPByi8LdY7Namyk6D6f9UBFHYaq45W4jrbH3KWNszgkvw6cC4w",
  "key15": "W1eviTpo6aJARJCuTb2AuGBqqiQ5SwpVwG1spfFjaJuVtxrovpHrU8cZUTKLn5pyTeQ6KcfNFPswqTMfLe5xfem",
  "key16": "3j2ofomFoZWHZxhmqKNVKGbc8ZTLsDgHygFJ1L1ea8oV5aMrpV6W4h93f68kPypy7QZNvPTN55LG1H5L4vvVhqr",
  "key17": "5YGws3RjC5nbrvmrwXXqQDyTroxNmH9LVESynUHSvUJyoRJWhD51fqfFxMqS69HSLHP465FBk6RkNLiDJQrkJm3n",
  "key18": "4aLxsHYiEzzWspHoHfEbRmHPXrFmVvoHULRi42bfK7KVHh2QT5ncGucdE7Sj7idQjKPQfzG4UtMgF7ENn6UDh8Fv",
  "key19": "NLH5iszLrNGuitG6bawvRWqMg2DBvV1bHLXMgKgQ8o84M8fdamiAKea9RuhkjAFmp5LPrWj8JDx2Ytq7sqnxJAn",
  "key20": "2QfFe1PRUboxwtLnUxjUw2pFoLbRDiNxC5dCzaFMprA42K4UkW7qTRX6tzc8vVF4xqyU5BthWUmUUojAYCNEhsCf",
  "key21": "5BYxti7rbstaXr5zJLtCs7cZRjm7isbehWY8au79P9bE9kPP7i28o8Fu5mhJe37MjQ9bmJdJcE4gvVbe2dVoLjnv",
  "key22": "2JPurqf4Re4kmBJReYms2n2PXqF9tqpfbUVxT36QypDfzrCAQEdB2CQcHrmwDSoMi3jneCRQT3qJXVgByq16dbgK",
  "key23": "3UJoiWXuGA4ETep6fRhSTJ7gP6ZPQSE9bRXSM4F72cWaoDvbuZPCCS47Lq5bnmT4rEvRe44GoTSeEWJT3J6CBKkM",
  "key24": "3iViwaz7oDetNo3Gw9P5BpuJNMHoKb7Eb7A4htEjHSQ7gYm2GaYrf2Gh8hxft3mRKNLDgHiAA2gTD16FozHkiHWa",
  "key25": "3m6yABDqZjgHgdn1tW2YafHBzvAVjpc3z1YBikZR9M4b8BmHVzbozcNyEA48jefe2nnThATcLLEuzP5BuaNQqgpB",
  "key26": "3YEtRs23K8xUSGGegno9mdWL6Lkz6BJofWrPmgTeQ22ygft82NDaymW9QDJfWj68JRKB6fdGJb5d356iE8Ay9Zmb",
  "key27": "2kwZL9AJ1g9dYXXdqkyYaLY6GSJbLzf4BUtyDrWKwchW1kACBhGbSvg6sGkWqeQBUajm2JW1opRzk84JgcH8yuV9",
  "key28": "vmhLjuCYcsFcDQ2w7jKvNmZ7q1q7XowpdAqnCVmTjMmU2MPMiuK8nPBFwShDj5E8A9UVdtDQt5miGPq34dx4v9M",
  "key29": "3F1fGkELWVyqRXVHJeEEW6gZaceos14PcLurC5nnxkUQyTVcf8LM5xjgUfgxCZA5tphPSyVGiAbDXP7uot7KEWJ1",
  "key30": "5RdkWGeKgw7NC1MxthvpoBhGsjcn4wZwD6knDmPsiHikc2RDc1jVGkZuW1e5KHrH1bHXnD1DV7povbpVgjecg654",
  "key31": "55d3Grj4q8gdrZenB7saP5sqD6EtyMF55NKBvkMFudz8wnWsTPaZSFtybWSgXVJyo94xFo4k4xGDTeVRo95DR6X6",
  "key32": "55Z6PEMuZ2xYNoRywFW4mqFGpduqXzesFBioUWp6SFYytTvzDA1wkw8g3jrcCfk14A4EZSLQ2cTg93HJQx8h8hJi",
  "key33": "4idD7vLokWuLsUJc34EcR2eMzuucRJRDUVsXX2BtbPyD7RuXScDdFRBYMxwCid27pqq4c4F5mqmzAFi5opiUMF6g",
  "key34": "3TAa3Vuiad2nJVrU7tG69Kd3yAvXz2ri5XftHPMsxvURH1r2g3rQ5kdUfjvV3b9EycKuFC6w14xMzRFD5H2SqWVK",
  "key35": "2d3eZHToBb5ijGDRKcwMY6qkAwCyuxnC8ZQHv27w4ev3kGBznzMjPhnLaz8ndRjekjjq66x9C17Mh6EL4Kii5ieR",
  "key36": "31c1ehdcQExbmwjjbBmucMbEsPAHYKXBGXh1jZ8aF6u9M2RTcA18h8rYVu8fCTf6q3BaQn9AgSXS8KT9eqtRvxFo",
  "key37": "5qHwQRMxiteyzk4ZtkW4S4i8ktDuVV7ewTTG6NuWQDQwsJ385ZKGQzz3q6TYynNo5G5ZGQn5Ky3yCwPPPafeoznY",
  "key38": "5zeLpZdRsg6d3HsAEje7NyqsLgVWrRmBbBbgMH5Xj8ACPpwxhfC1UWpnj8pXELptoZdPVYAmBxtzi2VTxvGxNzSy",
  "key39": "X8uh7JXCDezE8G6sfZVm9Rwoq4ANLfhRUYncqVZFuqcw2ybEnmp4embm9T7zMJJd5tUwScRubjJJz6ZPfMBoThB",
  "key40": "4LoHbKxwBtTmuYpgrsUwxfR5vB2NS8AuenU9rHXBJk8F9n4GgUFVi1e36hp6apdMDBukBp3CjPd18zRpPhHrtp5t"
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
