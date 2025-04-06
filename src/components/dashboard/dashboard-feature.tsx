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
    "464NHqdKufLZZg1pGRtyecfksk6RuZUeZShPvrwf1ktTai3SPwSYi5YvYSZvTB2mXdXDEkTKDab8dEuXzj9RQZh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zZ6KxqFgHsbrhVXiKj9SzUK6unqwd1n8gki8xsmGStWaLBynw8aVEohpsKBc5DiCSGiYP6W7No8K7viycLbeuEb",
  "key1": "4ocfCoAXNGjDA3SSZQ64mBfxVduR2FCbakPhmbUKF1nG4jetrPDy2VxszHtnh685a5Pm5pPd1VMnfH6Wh4i73JTF",
  "key2": "3kFdsLC1FTFERLmopn1W1EWHxxyqPWDKP45AcNtTxrL1be9tHorm3CYvYuukq4yhFpDrEzhoaE3oc2i19T7hXpHE",
  "key3": "2nsPp7d4BdxxRn2QxeFTP7eFoPtHm4qPv6CTQSwavT6ctuSav9xtqmK29mY9VGmBr6qk5f5YsFVkrPRMrnE9nqps",
  "key4": "8tTmREZcqFKtMtRneSa9FjPkVPLLZzvVAN7sXQyh3kBLTU5UAy1yyU8cuTfYAU8FEkZcQSEa5JZh7DionyiT1RC",
  "key5": "3RsLvuyXgyKq5UsNmMSJF5xPLH18XQ3QFDbDwmgUME7a1WEEfB6zLP38x9JWJAZcdkoP4WzAWTS82Q5zA58aHkiN",
  "key6": "3o9E5WbXvauVBqmvtAsB4mgnhHRvvkD9F4zeiroYFpaWcF9u4Cz6jqbiQH63k6Gf6g5DiHnjYiL391RSpYrKVDu3",
  "key7": "5a99vNxHYGdumsccGxvsmf7BBj65gFXBrS4KZLzgtJazmn4B4w12EusmZry6Yo7JqkhJgamcZDXPoPUiwuqn9mU6",
  "key8": "4KVEjtiSLw6R4scCFkzxh7ENyBEcFDXLZh6AyCLd4u8sAop2w2REEVFvFrj2U3wSR42MEuYDZ3PR6TP2QMTqVkWf",
  "key9": "3KtPJBFANPd3Se6ntKzqZ886PapTiQ5oxBtu6zbXFjGvgvrBKvkpWBUih5CQpcZhgsp6K1Jx2WndoGmpUs5VAsED",
  "key10": "2HfUs15GFoyNyK6dJyxj44vJggEUkLeQEtMx6PWnqmdLszmK5nxMvFjz93Wy4fgsU4pLeDXwTvqSDoStPB4ETZEm",
  "key11": "2voFZ3QPhpBVRkZeXTwAw6mfaFrgbdGnoPHhTN9W8Pnk7jhCvFgnffvCAbaD7aJFaNqmQ6LutvYNg99kfVodsm5R",
  "key12": "4exYqnEUS2V1UPbmurz74FbviFPjD38mbstbaF86Q6d7YzcFR4fWm6KVt8fqFXtYRqdCRm71hWzyPRN24PXFVdh2",
  "key13": "DVSxp2nu6Mpr5QvoF21zqZKB6f3tJbwPvvdTsSfSr1hnPS5KDo4VbEZ14ur8uUvzw3iU9naphJioze5UN2oXzDF",
  "key14": "2MpS6S468gwHE7CgKnF5rfXFb7a1f24iTGMUTnz9BFXpcmDia7s1KxYsdXpCbtqKcp58QrrxTvRy6jUS1pHmXeCs",
  "key15": "5Dc11v12FWuHa4hAAYwe3AEoVX8hgiKk8nUKjgvpVE8jZWBVrxh8PzLX7y4rSMhmwvaaNLFmhodt1Wd33faVxMTQ",
  "key16": "4Grdcv1HYWKrnjM1sbi3fx3zhAfNPjurVPGmeet5tZWLbQ9En1UKstBSVFunFmH6v8EZR31sTo7KQdWwzEZNBypb",
  "key17": "4YEcTr8dxcaMMxC15B9iTqKwfZhE2jhnNWR5TqbLP6ojgXrXApM9VrminJ19tarvM6YsS63PATiF5JY4EGr7dduG",
  "key18": "4QJzTd4VexaHo5Hc14SDWA5dpFD6EawCMX6KYADSb1B9TSL2fXAKf44sjb64mHbmXQDLneD94jvsSQ8ftC3iRgH2",
  "key19": "85GZLZdLZDzfBKpMMsYK4aP7bgr51RrCeWGfJGsS349tSEnQ8TRnXAcV7RpP1bMkzmVwxuNHHA89S39G3TUXRQu",
  "key20": "4DKF7LjdtbAv1LS4k1LpjGYbNJ5Kkxx5xMSNTWBgwjDfDMjRtUULbtzcY2fAgXA8UiBFsFWrV5AiugNTaLTDh7cs",
  "key21": "4TvYPBgZ68NVWXQ2MEeujuzk9sLdf7h6hkrp7ogJ1gifdVH5Yyuwrs2j8cQV4j5AzJxPRg19MRpfgs1GNLQnX7UB",
  "key22": "5AmqeueWhdQY8oMKtYLh3fFeJqazJGbSXFTsjoZFKbKHsZcLVQFthB115roqL6UA3zT29beiwqjKfd7cfg1hJrLN",
  "key23": "3osMLwstzeCHDDo6SUVeLwyD2Ww7foHeg26CayQtvd7scZAhXwiauHJFe8fdUycV5tfDtXiHQJt7NDtCPJanrunh",
  "key24": "5bX8uWzsWhrZhVqBV59bRZxvC3HcDtUuCUN7yMPSaRfQHLRhaNzfBCnNhvHhZ5ATTKvivRAm82qf3ZKAUqFCyKLG",
  "key25": "4FQiUvFFncHcRbYpUN1zrU7P9CpzkoC4Usf5eMeTBGWDszsAgATZiwgJ7a8DLTdKQLEvziRjZwj1DpjxVJeyqrq1",
  "key26": "633ywUQvzogXc3MdsExyaUj7UGi7ASq5vAfPVEVBHgSWdFskUApytxeh84Bkp8jiNMv6QfnD74dziFX8P9vjwLfJ",
  "key27": "5WGAMmkECGgkWjAgt7SZyBPBjTcHgZjDeFT4uKnWGf4F27AwNtvzAtEkZekuKXjcoFWifwDCsKvziUMgfQZZP9dt",
  "key28": "3FFqSsHfQaBzigSzFaLLKfcVuBMdyF12F4vh1Z29cbuMg9FMJx4i7Rh7VfKS6kxw1xnERarSsChJfyH6LRMptSWk",
  "key29": "3EeqfqocFja2cNmy1r2VYgomHyB1uq6Nynej8n86SGZfQ3vEXuYZwoa1ZruFEgLBafquZVMPjEQi9rCK3xUUPjPo",
  "key30": "56cUETk2fdyo7xnx9rfLZzZozuttbuY6KrMQN369m789dNzi5L7aVbxFPVHVEJV7Af6wNtNYEUihg4RChnjzJFfy",
  "key31": "33A9QZ4nWvosZAnkuYWazeUUpy3emz4SaNDdKeojX2SQ786F4PFqRRNVe5UK4dRPfvBN8Pw51jhA5hD56KWHzZPR",
  "key32": "5o83p42e6uNG4AHcRYg53sj2EVeKHCJhwMKZqJLzL2fUkkCSFmMaxtRBAzWBwwSJhH8whDy37mx29rAgNj9ekdWe",
  "key33": "2CadNsoaUVpCRtLfUBnpYBpAs8fpaaBWahcnavsTYimUvzvNZy5S649VZyrmaw5xMxMgdZk7ZD7XEyGsRWn7LQR4",
  "key34": "3KDkEyyCuwaW3nL4GhXKoYNVM1fmCGGex9A3dDoGY8tc9GtG4QQvBYrQ34cow8hE3CUjKmvvku7TmcUkRa2PP2xL",
  "key35": "4vshbcUNxuTBEpGCHWTdQTMgj6Q59Rteap73vZ5SVTyS8pLKAmb3opyMZXHDFhwiYeZZoe4wNkZ6AaTQcS9g88D9",
  "key36": "5niXRzYs7iFML5NguaTukrZEWdDxgHgwujykoGTW2WkUc5qo4QrD7znEPc4r9SYHYNLgUCaQQpoKtY1fE6hbssii"
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
