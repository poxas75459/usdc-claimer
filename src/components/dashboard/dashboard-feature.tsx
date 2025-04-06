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
    "4WtUGtHiVHeXMWVjzdCdkZJcn7yG7etdXRXgke27srSgtcQy8emuDgZDsAruX4BaE7sWR2EzsKvJA9EHoy69f8yw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25W9vWkemzmXmzBeZ2dxnAyPRzV7zPs4esuyqzmTQT2Y7buGLctBJdEjGBtZhn3txGToRtHGiYfJzZ5AFVTsyAdN",
  "key1": "gueZP6dDC3mDW5nRcSUKd551yH9WhxAAJH5oTfj8MjwFkMdVd92b5otCLony5nuFK7fWRu6BMGv5ZDMVsTimj7s",
  "key2": "2PHr2KcU18u7Bm1Ho2atKFNPpzVPyKWMbhahsxGXWvegrUqUuaUwqNcVRWLMBtoStQadSM7wdAaQ8AprghTC3pR7",
  "key3": "SmCKHJyWLr68X2L5YHfYp32ug2QV6LthnDrLXq7kCJVm4Z95mMKXUz7isPMDe28zbtZp6CyxNiu3Q8pEcA8sEo5",
  "key4": "2G3r3GEaTXotZABDNLjuUDkQFZTFMJ83RjLFuBWK3pwxeekJZGBA9UrbGzuLURrQHTPWz7TCDqBitYao9y2VRcE4",
  "key5": "5EXj1rrBZAHbdSz9jz478MLdCkTPxpqZHUsLPMC6mA2fRFgPJ9votjh5EtJjt15HKmAjtANxvrz9DmALRCm7tupp",
  "key6": "4YAfmRR9vzNMe1cBZtuwiyKFDizaRXfZBJ3RGhcAav8ZqD69YEJhiHZh3WHTMcLUYMd5dRVoFRyeuCepaby6AXZP",
  "key7": "5uwxbTKEnGgdemrN4sGFzPfeSjG4mCP885BGLhFF62Khtddx146jcyKT9z9AwMfaeLWDjq3EtempnqGDjAe6tDV7",
  "key8": "4TdMNxCyo5z4brbn8B3Rn7UuC4NVCpscRqDm2jsQfw9JMiJE9Bp6BW1FgWkkf4jwc9rVY6TiQngrrwBboVecoqD9",
  "key9": "3ZFAMHKkcw8h7scBvb21YwNTpZX22pUui29GTNfmF6V2tBa9axSnWKS5sKfXXMFWHf5h4trjS7QutQUrgAMxpXCn",
  "key10": "5vsRimnCysfqKqrjN8NiXtZinnUDmKCjoNdB96X4Zd5HV91e9t3domfM7XypEi48vpswAKv5nviL37Edd4X9eVF2",
  "key11": "4S5Jpd1bKtijJf7zewtviEm1vo8bqwhPJ6fEw24z8RUEpiavZyyd617Vngb8M54JdT3pA4pxNcaC9tXG5FJrqAEe",
  "key12": "2xCMNnixP8Z5bAi7VDhoQ2JHTmGXZsNPU2EhMoh5fLing5qnM4Pgq1aemCuUp5K36Yz1aw4QLKA9CHKEzZrWvDPn",
  "key13": "8CgvzgextVD9D2nie6kwoTQUgWEy5DErdpDcFD14kXBu2cSwjjh5fdZof6vtvb3u5hq6Th2pywNTf1gBPpX7KpX",
  "key14": "49R1E1di2N4tABjN37W9XhUWKxbGafGGs2vgPrxZ6rRWf7rrJTQNBaRjd4bGpVg9pUyfyDnDdMsLkneLbYHfUKXZ",
  "key15": "fxg1dvXgb7YbND2WwNh4M5ru1ggC1JzWTZTKRo9SGHe4tDKidenffTURTnVsBCx5HYgWQ5BRhdue4H3Yn7tpSxr",
  "key16": "4sksimMuecdP6ZgWkMyFynnqZFQkZsZhjB2z5skqKQS5BTh7BkVwFc2T73Cy84FQJLdc2Kt5STAn6x14njHFfBY8",
  "key17": "2oR6t8CSv6RnFWqyg1ARsy8yT8rZjkg2WkYW225YaPiYnW4o1vUh2pB7v4awhTe3YezUTfCs7ZXncQggkxZvgnRX",
  "key18": "3ha7DgNputVkMj1TkYuP3Uk11PvTmTtWbPHFMF9eiFN1fD3FvD2DS3zzTDjfDfsC5JuQgqdGK7w1XeULyt2qi7rg",
  "key19": "5kKZdRm6J4CCt2yrZhTa9CK3hadCrp9mp9fh8bmY7qn6x6aKhHcr2pMNeLDdjVy3CT1kaENEaQbR8NbPhrMQacJ3",
  "key20": "4oiUNDggjRXGoZTUefExapV8oyWxia6r1yZCatN3hkrtRtcKZ9pa7YaLg8rzWMuHR37K6XF7j8djRpXQJC2x2s7m",
  "key21": "4CwUjh62dkS4y97mqVyUviNA43QmeTkGSuEBdT4usfzk3vnnG3ZqSRQGRQhPgK93w1tU27QKL5ntxyamoHrminU",
  "key22": "5xUhKNPymgy118qutuTmUa27JpT7UrBa7ZdN1jm1xZevDCxFdd33XWY36Fvr5DiwUTEfsRJMHFi7txawPfXdYvJc",
  "key23": "3E6tWieYCiX7geqbaEYY3zRaLywT8khUvkYrUdcUitkvBezbTtU4wb6qtq6Jb5q5KB7L56rArAKP2rzxo6YL5j7h",
  "key24": "38VyXNRET7yvtYr7nYFQKSEoksiSLpn5Du2dEHNZMDGG8BNGFKo6d6HyefZe6ve9mLKiiDcP54AHgiDWwsLyiuPE",
  "key25": "hhmYzDXPnnJ7cyXQe4CbqUZBjdBwT56NreSX8PU5oRSLazcWp7zrtM2iJXW2P5K6KhSe86doZF55BRc9bwrVM1z",
  "key26": "3JrEWRTzkV5GdofqnGzKouZ54siK7rLuag97Lcvh25Vu62Gwc2GWfY1hWg29hnFCnoAdr5CTCdTVZDSHtMtUMFvc",
  "key27": "4XVoi1CyvkoRYej8b26oYM2cjVJeuftxx9qFsjsQwQdALCmcer9jhV4X6VfkkErLqDgkE5Wd9gwQwkp1BYpPeiWt",
  "key28": "2FrXprjoSpJ96i9nLct6Jq7SCD595gLGfwRbwYsgxtXjubPgaj7BdurgxzyVBF5injJ7z8bmLzegDrrNmgK1fRQP",
  "key29": "5hSSCvvwPf3MJHJMTmxXDLkL2XxV37vWxxqFxvw1Nz53AqYhe2KbYuG3uhUiUGruQbBc17tm4ZSG9UgP8qhV8CGf",
  "key30": "37ijH23pQu1HPaihQYYwsDyUaPEcmmRFfHQfz9EufEvrBGMbU3CApWKAVZFMMex6Xrgmzi5sipWGQ25CHVfYACUh",
  "key31": "5jvaZ4kK1SqNfCSTfAVD6w4KEBoBpTqwNxJ5sUwbw5o2QUvgJto7jjA5Hgq4CwhqFAGzbVqt5aPGKJjy1tMmb9hx"
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
