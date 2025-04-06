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
    "5oacnSvE7RBHiQibxMfDvB6kfK12xkqxqqY2voWgbRxqSh2ryaxdBEuy5y8bWwdSFjjfYrrjZu1PR3GQi97be7dT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cRHLsuasHt8TJYUvoipBrADhHb6eWhSdouq67cRvGP4YkCmsa3TmQLqTbFSih7uh2wbNAUAQKpGi9PDDkcuXDWf",
  "key1": "3wyivLZWkrQaN2HqXdhFarHrT2BUrduT85TwsUjYCUKL8YTg8AHgRPAP76haTcuJjVZd2rGECpzviioCVTQAwyw1",
  "key2": "51Q7a8VRLze4y6MUketY4AbQDdskQGNxbRDdtZHpComLh3D7kaAiPiPHoP4QS84isNndYiYEJL6PsWGSLwDtiXB9",
  "key3": "3i1MeqTJ8jzse2JJsZ8uPUaFt1deNrLmz7mv4RMc9MTDRjd6BmRpRXHoX8PsASQJdHUMnouDXZu6gYH7bn67GS7n",
  "key4": "2mJhxwSkkxKGUehKfyFhvHLNXu8E7PCQ6usSX1hxRbrJNE4gDMNyup2RcwkWAkDJVWK9BhGk86rxQUzhS7dUGXwA",
  "key5": "mcLuf9T23SyCvYFXZqE4E4uiX5suxqMu5WEdUcCfh1FCc8qqErWaEXXPCnPrDakc7q5LhYMk9cnJGEoa2GuSMQU",
  "key6": "2SBpy7S3V9MJdMLBeniqh3fPxetBXzy8p3kCo6ajPxEYujwYqwennnWUzMyrxZtZu8Kfk1vZbwAoVitm4yTyGU8m",
  "key7": "3B9GpKV2Ks34ym9t2tFUB7bfjiEmZAmxqT634y3yZt6hZDez8b9Df1Mfn8NAhVfQ37gHnFsMMjuJH6fivE2iewUS",
  "key8": "61yHdC57urbrPaMiYnH8C3QkbMxdX9CEdBMvpoGQ3E8g5K5xAE4FYJGXAwaGxed4oR58KDPNoFBVz3UfYW8Dx5HX",
  "key9": "LsoTVWFEMaXPRV8WGN2cRdoz9f9g38GqyGu9i6eXDwSch4MPBuMrpuSED2hxsYLH27mjHCq42vNjiyKPCPp12WQ",
  "key10": "4jXBbcgZQDmFRmPE1Q3dqaDNqZRyz8hsY65m7j2H1GdGNf1nCJ1prnDzQRe1oG334VdCcf2QVgLAdgzWcr8rCGzp",
  "key11": "3NkWWRukbphsx9uN8DD58fQdFdKUJAPmWSbeWBRiL4dyppJ87ean82wKa2194HLUmmmZSG3JKWJQxdm1fHuQaYHH",
  "key12": "3EYFXGxZfsRi3auBUGy5uu9LPZ32xzma2yGjHdEMJkpvLDbLJqRWthFTdPwEaGn6Z2iA7RwxsWvvZEXs2adgzeg9",
  "key13": "3jaegAwv8RtEU4fWB2DuJ5NrQTiqvNG4i8x8YMMtydJUVr7mFwGrkMhtKoAbvxrEYtmtJb9WqCdJhCz63ky7rg61",
  "key14": "XVEgfGt1GMrCCgYesZd1Fp1k2f7rWdPYtCALaceu9faVZRHL9ZMCHavj9AiFMhfXm6tEA7CZUJM8XB7BWfdUGAv",
  "key15": "4op9dpay9kPvpZZS9LCjV915PG9TpdHyxrrnCg3xXxrwh8ZPFg7e4McjM1EwHTbtZAJGPZaSqD5dz2DBqTsf1tbT",
  "key16": "4D5D7fYGqBbj58SztNQqPirCNgwHmQqJDZDJsCNRKhZYz3txSE2XcjeTMXp5hkSpab556wwrGGMRqTK9PJdPA7Xk",
  "key17": "5oxFRHM5PtYTF27SqYmmkmjebT6uzhXJErRW6TDUX6oek6MwrJrbujdjpUiXsukmg2pkmA3QE2rN39LPyHojTwmZ",
  "key18": "5MQDBoC52Aue9PxnasoLRvR2xPep5g6g8n2Rs6brPoDy2kpVTHFnvj8o83YY4vmBJP6c4U1XnFtJQwhwY8sRmp9Q",
  "key19": "4AbLrA6xaZc5K9LPhz3sLyhHHt5JkVKKgZJNc9PYdR9hu6MJ8uQtidabchocwxLt9JLfQZW6jeZUKeuuXCaT1272",
  "key20": "5z3FG2YjkUkGwckdFurmixXY9AaC9KFBe9Xh7RQtVyjZKkSET2XdBYueJgZ92AKjfSYRcBjSLajwCHCCScvtk8GP",
  "key21": "3LS4YQEF7i2Wd9KFyaKE9TdnAnkR4Q9VdFX16zE58dRseibv1msjcV87BwWTxQeaUeCuSJwF9KcNfsizGmomJ38M",
  "key22": "5JYza1DVuCuJcppUy1YvKvZWV1Rw5SYZy94HR12WqCXfn52YQKV8CZVCjmdsxKfq8ByNe6DZ5tqVtmU5r1PHVnQ1",
  "key23": "5fJJ8DiSFdruVH6rYfNj6G2HqCV5zxAmnM6gZK3e8vDBWgrhjDgRVvwg87ApCjSS9Cyup9UmTU8z6w4Zx3wJEmDz",
  "key24": "51bfSx6stS6MGr72Zs3fE5w3joz8hFtVEeLwLqCXiyBffbJ4tDzuriXzkJS19yqQMRhR6UbPN8Md4hDYXPygiX2z",
  "key25": "5xCpwQKA7hDvZwiQaRFHbDfqoqQL6cPdnSU8q1V4h77bwQdHBkFimfyixxVUqG7htEjsYUFq9sFwd5vgUQub4t9h",
  "key26": "34xVCWXZoQePceM7bN3RMcmtYuHrhtPcjRVSV56VDBDRcgxLzjAPTADgDok5CYnwVGDHBMu3z7Krh6Yo94k4h1ps",
  "key27": "4BUhNsS4paamxHTUMAEgcgnLzLoMf5HrhiezzeDcxm13F8FPLn4R7sxri9P4L72CVgH1PL9dqGzNZDBuiJYTuyt7",
  "key28": "XgyzXwfHP7rb9UzA3oFNWAWnV7wSpoJuqD4UimEVX1m3z4MPmZvw8xsoyAZ3jdV8XojwJjmJ1tAXi4VFYr8BtTa"
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
