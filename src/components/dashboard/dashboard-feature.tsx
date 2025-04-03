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
    "5gZDnQGQnLdxnjeaEEeCDSJZTTRrD88j4ES5FVGA4JEgfjgpLN13iRW4cwBkWS6YXAsJMWxdS6mWbRSUqSTcSNqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jDQcC427wdftK218GLkfKHxfWhiTC4bUuTFgfSC2FLqqaEzbetxEe3pqcpA7GRUzwDht5pqeFvxEGbz8GcCSEBZ",
  "key1": "3inGg7xdqnrVVRCgAN4EWqjXvbuwaApqpieL8e5kacBQeCCLnMo9Si4KJwAGXkt5NC5UXdK5VW2v4NLSnTDf9QG7",
  "key2": "55QShJeNUhtJrZfEVq44PDGzib4mUXeMhS48thnJ2Gkouo7HQER1PuDKkNcQBAYuzqUvR46WHWhLEHx57rSiBADN",
  "key3": "5UoSdTNCHRwobPhCqRZ9T6TCENEWYBh9MABoW6j6voyuxitASKC4T1qjJdnMtDnrApQQHZZugqP8dGCRNfTx7Ajn",
  "key4": "3rRvEB2mbP59HMpSFh6VKk9sBJnnib42UCtcs8ASr6FzayPbbGkW4RTuSyuF57hnFmP5KPU67j4LNeTaYL69wdr1",
  "key5": "3LnoAbDPiJ6WteRWbBcZDfbPGScGLm53nZgKJCWf5mYzLnffFhkkubg7eFQ2JP6hx5s7XT8gPwEFqhkN8sxS9bBH",
  "key6": "2mLEZr25FHUMGbjJ16nm2fYMXqLokt9p7mRafH5bZzTdU5tqggcJWZmuKAdkggGbByN3HUfdYujxXemErU2WrHsE",
  "key7": "MMivgJqJao98DbRzghuQhKS9H7ZVxisPS25a4ZS4kzBAJcouUy22DKmauEsQpMdTPMUa5rvK9KTuRMXZNcWZT1v",
  "key8": "5jge41ss4xaFGPwFh8UoCNKnuHy7cpiGC8oF5vSssrL6Sg2mfv8MyM2PdchJNdwkfUnx7VG2FyEBpZZxoukUVo7r",
  "key9": "RcjNYQa2NrunoW3mf8WEJ2vijReLTURMSTwWK4drdpDYHZm6hQY9BmL4WqgDsKxqcqmDs2qao4skkWHWEt2WD2a",
  "key10": "KVLPeYxMfkn2gJ1Am9nucdpAZZFfpLgHdpGG34Xou3S7asPfbfWv3rsVu4qjbjUr3Sf5GeFE4bAMLW9tuHdUEdM",
  "key11": "4YCXuQBbDoy7SphnXaxgqqip6St5NfQ18pCppWqCeVAk2s1u3BYbeobo2TTSQLRHL9yQ3rWJgrDY6tVJAXswf4kR",
  "key12": "EtgfsBP7FqBWQiH1vFvwKDjD5iTRLWmyuZorSi1bSNPkVzvdbhCNC8pRkThrn5KVgYUtLQWwdQVfUimKtjefob5",
  "key13": "4fYFL7GfC96hMqSMxYMQbnyRZsxFcqvyQoYtirg5txUwh3pfHaevjStv5hdBBsHsCSVBxCqyztnwvU8aprfdXdGX",
  "key14": "5hUBQgVQkQvaFbAPAGWnvfK71MyhpjpU5iUXPMdSLPTbU8542WYSLwz4NBDncAjnwXpCmFcktzAT2Nqph28RAGL8",
  "key15": "2ea2tbzDRBy9rJaE5gbS4rGgzfHKHduUi2xCZV8Dj7BqZcT42TrLNqLScAkEjGRUPddty3LxFw3LCZ1Y5UBqdcfr",
  "key16": "2ikrD8JGWhqurkxvCJ34qFxBpJwU7mMbzJ1h81Ty6PvBamiARtqGsyLnX7nxE2ticKxdN8jy7L9TuPY2zwVC6zVV",
  "key17": "2pYMFrnf6ebcNLAvxMkbHtADs6MZPRY92QcPgfTRT8dMoLzdiUnVD2Ys8GFErpZByw7CMDxSBezS7WNzbACg2Xya",
  "key18": "4DtPGuYWamMj95CPXkEm8CksxoLNJVSF4HjXG1rm5uQZasd1Ukrt2Hn6SYkXhVdZ5QVBdNVshm4xpeEPRohY7aVX",
  "key19": "36yqpjsE8fv8qLJ5AiDqVgv7E8Mmq31d3jTT94kpnBNWQhvcMW2jZdmDbeq6u5o96ngSTrQ76R7MgpfCyBvH3qha",
  "key20": "5nRh8uZ3VPfDNT8G7DxHY1Z4Ced7ARN9aLSAbZ17C2W59w1wT3ZyN6hiztPYNZZAbW4euvFs5vVUXR8ChgRsqjBJ",
  "key21": "2QSa2ZtQF3W6U8iHTaFoVJNq3o69jPiJi88JtM3mwEmBswCFgxWcqwrydouWXhuH6y7szEb5sKtybfMtW9HvLYBw",
  "key22": "2DJR8hryXtYLU1ER892wVrfEFgBwY5gUGGKqgfR5y6NdhYAwU6Rxr8EFdXnWqz832BvorPbKNxawmSpEqpKvjtUK",
  "key23": "2KhZD1JQe2SRSzWgYryizfiLPRK6Kuwxqd5dH8nMCsxsAe4AJX5yUSHzo9khfaPMZHPZYi1RELa8CdS65B7YqwG4",
  "key24": "55p56jQXNsmTPrAZ3yqjHxW7X8cbHrqKZcigE8BrXJLW9SxHzsA1kw7nStsCTGeMUFAStU6KedyZCQC9qo25Jhh7",
  "key25": "2M7mrsUzKQpUwHJYe72QpF4T43eZqtk985UCaVKBcE8XxS4PqYs9pb2Ry52MzLPWXzTLWQGQ2v8dcEynnnB63eoe",
  "key26": "2p8ctizsyMZ3G2bQEVeHkEi6BhXGHmiJgZc7cZzJh4wGdrT6iVS8RXjc1WM1166HzXS1xtdLSPaahEtqQ3YykzvA",
  "key27": "2r2cu2RgvfJwD4GPxgVYBoEDcXfzC4SCR222rGrL6W8J5XodZiPunvXdbfavJQ6XGxfM8gyeqMNFVxJVt7EUBM4T",
  "key28": "2cHViZc4rzHveoyinJUtmqJ1NQDnWPYRUoWJsnrspqVa7J1TpbWt7row7fWJyvxii6x3Lg5X5SR66vqhzKgYB4DX",
  "key29": "3RFBXsPPAhjbqGvf1ZJXSX9psQwcx6u1gvRy8GzXHnHGhc86GZKXCdXNopM6fk6hfJ9VaqJsS6eyLBPYvQqQfTCZ",
  "key30": "3k6PkKRf5ErDPmYLpTDsL5ADBi1UhTsnj5pogSuFtauKksY15pfS4yuzsVL6XoJ4shqeEkxe3Son7SfJixFpD4Fy",
  "key31": "5BLRH2z4tmp4k2XggofzDBXE1GrwWJt6DSp45gSEVJfsXfXdBmJzCVBfvz78hWAn8NxyvyyDEh8XGDhbf9GdfK89",
  "key32": "4YFFMG3H8Uaifh69MpmhEUkQhjQQgTh5fy7VEnRDbRJJfmjdWu7jhxr2xnr7DE6LDsy9RU3EFohSnRAgnoMFZo9J",
  "key33": "4kp9Ama1m4JboaukPyH2GA1DzZLqJaPN3neTDDZzPrNBdufoMG3UioqomFJkUkvThgin5s2NrNfTz5bps7oP3VaV",
  "key34": "4jbyRMZ1jKgkuJFrejn1SwVm3oWNA8Fdaue2Yny9xS75BKgkRXfvrATVPAB3qBACDypHfL7DgSZnQrJ9gSoaBsRu",
  "key35": "644beLD44BxuvfW3WAqrT1uvBV2sdJ7JJB2BbEsrCXh6NGrtGKxvA24vMTpMaPWLm9Z6m61HSGs7fqrPybjn6qoa",
  "key36": "5gYFoaMiHBGcU4B3vtN3bV5qpoxZcDmb568wYxZuaWqqnRNMJsYhZN5zFrWopfV8YthUDMsTyogsGZFVddJbSn3p",
  "key37": "5MYaZ3rSHtv4WpTPDMPrzsoghZHRGDDHb6MBLJZNyxTUZ9LJ5dXQ3s22q4ZazsiHfuDhhfVVMrbzQN5APeVvD6VC",
  "key38": "4xRMFgeyDsSpVvZCPquoCpcDuSF5JPiMUwrhZULo7un9Tg4Wgzo9MEMrsresBLuafyGzYt7oZN2qYuDXtwUfhyNz",
  "key39": "3f5iJkegqWF4k7xhUkoDdfmtx2Nt3oJmr1FV66rpsUFs5pRteHqVNGbUQAvCZgy2EgEmx1kUgnSX4CmL4dX6jU6",
  "key40": "4Pm4GjeNwLa7BhUAH5cRjw8uNWWCpUkhrXtWk8oKyEEgks4Kc7TzqEA5fX5gu5pACG77bkLVWU2TnQ2Wew6pKpCb",
  "key41": "3NhAoBUWCSy5gct5CAEPnX7xho7HFTKqT4yTC1Ez8GswenpnnEgHWnnoWEqUugGxor5di4uJm5mVSkM12m8q7rqa",
  "key42": "Y9GNveWRVyvYE6EciqyiSUzsj9kCCqe4Rovm2UhAs9WteuwoeMDAW473BUTdoJss44V9AZDFaUqGTpzDmfo5SCY",
  "key43": "TkU1oqcHq3SevxufVkDGTHHRyuHURqBsP9PUfGeLNrrz1vP1GBCp9ht4jxFevcuwNZXzEYZ9MtRG88FQJ7LMWZd"
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
