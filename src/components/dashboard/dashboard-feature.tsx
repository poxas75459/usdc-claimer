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
    "34rj2ynePARJ19BPU6BDk2YkQJ27VxsLszQExbh7nc86c73BmWhTWNewMNjwbqcv2XwiPMbYUbiuHhtSQ2Ke12xG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29T9TgYvThKspSmhY5Vz2w4FoYgLcUpgDkakUTvMoJ1NALAo9uGXrhpuchvE9kxWKR3SGxK7FfJCaoFiVnqcgs3U",
  "key1": "48T8VXePkF6ivWu7pf7yDocREfhNws6fyLzqgEWYkdpmznigxnXSYHbHkTbtPCJV4AQGWDXwoDhE6BP9nU5mVz7B",
  "key2": "dNYFf5J6VFj7Nw2jigNnA1v1BjqL5NrfdQvmfSFMBo3noPTrLHZYn4qspdiTb721896b6hVgqQTXLe5UN6YPMFc",
  "key3": "W9S8njYcmgao3scMCfB6qSqTYj2eC5cd8DdkLavQ82tG8PsFJNwVVKeRjoKccZzz6hFyn3gSyjqqhCqnKBCxHNH",
  "key4": "44C9maJMvVKoECoRLC9ZYypXQymRvppUaPEwvC6szF6TvJGQngfrvdmpPxv74GmcjFwp839nY7Y5ScNwzXfo2nHo",
  "key5": "4zUwJiEoPnvgJHeZZEPtaWPCcU7TkozLUWMzeuprVfPwN82aKpv1Ns72NTxAPzk8CaMu6fnsqqrWMCsZn6TTJ1Rg",
  "key6": "2BbtS4Ugaj7DYY1ttkABmTNmb14sQ5wvFb1x83rQK8WuL2F96iYBjH4iu795TcZ1EGKN4RU66Sgnaxi35mhnXsbL",
  "key7": "5Rxe5Zovttf5AxYeUfWqJ32DKMbaub8xSFZLahdPw4eF8rXzaZt8omkuNWqKU1CHiLxmFcypWKiDpKVpuXUixHEi",
  "key8": "2zsiefo52w7PkR9xt9TdEHvrBgTriwZfTjgPiZtvS1M8AD1WnvN1sN8DkX6emyN3QtYbn5uML7BzQE7fP2BtSP31",
  "key9": "5JLxoe8122YyWhTGkuxQHajXSPR6ZkxAgAefQomVrSjFSzdB9NPUhXeqgMQtjfhCvU1numJjmBeFJ2Ligxw1DchA",
  "key10": "2qRxLW3ykKT9NVdmounUgxWPsqqLJWSAcaYQZHUoh8MCQjrCFzkbur7FgW1a1k7CR7TzF3CtehoEPunHCKx2CH2Z",
  "key11": "3uJJhE1cd3BHRx1beCidpR9gcz52D95SrP2217ajGvoLLrSz4xCDNPSiLfY3wYePmrFAB6cnn915uisKRjkUZVwy",
  "key12": "36Gnq2ejkRtiaacKXFPD5sM3r1w1FDLPCftUdWu4ZVBdLE8X14V5K6u1aMmF4gCaqSHzVx1zuhhRgx6qhY2goEnm",
  "key13": "42bZteBvpjDKstxdEoBcPrXpUhs71b2YSodEZj28y33dLon2w9VvD1YoZdWrZzV3ZwVjUddqSeKSUCZNms9degSr",
  "key14": "3RFqiMLu3bdptx3kCx8L4hZSR4To16HVpMxGBBmyWkXLEN9hp7BnZkadPgCNERJn3q9jrodcCf5dLZPtHXC957Sr",
  "key15": "p6NsaN8K1roicfRRqJxrnGc2gspYKsxB3cS5BkddrF7xRoibQdh8k8gtev9nt3NsRs6azEAwAd6JYrKH3G2iEeu",
  "key16": "3tQWLpqiSdypbBbCBTJEPYJAkCLHqZvbQbnX6CpZVqcCW1YwvUKfaJzG4qEak7hCMuvFbtg2Ea4RF6HSECNY4BAu",
  "key17": "2TZSKLczBAJD2DJqYfzs3jg9fEFW6dwqk3D98XWh9MMSyfasaABts4R1n3HG47xDSfaVzh3qBVfCQv6zF81BvR5p",
  "key18": "6BCAobGWx1XZYmgCvA5XrC1oFD8r2U6oHNthJ5bfmbzeZpnHghfvN2GP9VT8chtFb8pxaao4qZCgMY2FoSEr1i9",
  "key19": "2NqBQDSyykduF7ynCoWFbNSTPohBbmrvzkG3n5sToimBuWVxYneFUmW8Lz3dB2QWmisX7zggR7LMRx8yFMfPAsuG",
  "key20": "hqFB8CYU8GaZpcRTRarrrieSjPx3Byd785Hw5Wg8v7eSR296ujtGdjSTf5oa6KTaBVfCcpQGCjfy4s1Duz9JTJr",
  "key21": "61vK33RwyHA6otnyTTkY2KkEf5Y2HZrSNABRtkjYsfsiQU2EK2c1QJjCSvTi2C1TvK2XGszCAsct1BvvjdyhS5qt",
  "key22": "3Zd5sWVc9B9hwsuwCkcrnLfdQ9SX493pvRRS99xkuXty9R3T5FXRv7YHcry7JyVn4VJupP5YdgUQCJWTQnzaGn1Q",
  "key23": "3kjGKttxsDT5sEY43hBHVLwBMw7VGXjDmC1eiuCXvM9EYA49cPY4nCM9KKBt4pBT2v4avwTEXm5vy7wAU1RakuAb",
  "key24": "2uAwi2VEyEGn4V7Fc2nGsGZR9Whruu8qAgM6nm3PKVnZrJGYsZYzwBAFBmbFRmyyh8nDzP2oDXb6u8kuwSXZZuyZ",
  "key25": "HZDzXeHEhEkYQsxyc59PABxwnuNVWRoXmaFXJmkNF7WxQQ7M6BM4khmCNesGVA2jJzSXypdxtj5d6VDD5Rk6eeC"
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
