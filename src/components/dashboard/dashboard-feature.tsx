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
    "59BgCkxDyLiH3xmWLzL47t2znaBuX1mYN8eDekjtR9x5pPx8AHhZpL2LQGbwcAJFnViS5SdgLXZ59ZxEV2FKMX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "71ZCmw13Ebr4AWcLN4EKDvowxf4eX8dVMW9SVYwA5SxG3yNGp4aLBPSTyiTnvsJycg3zknAfs9PmPZ8sjrbQX2t",
  "key1": "3waNa7GQP47T7z89eo28mzN9Gp9dRiZSKYN1pVdkQD38PSvXWVgewVn1Y2kLkMXZ1hZjNzLRwPvBp3T4JPkLVFbC",
  "key2": "5eUDDDwDwnBfhRs8TfzKZQceCgntzx4WtPDuGzqK78oAKiWK4Jhj5AabHMSrkUGhtbkxD7CGE2nNQ9tJcFpYoYi2",
  "key3": "5d8YwoXwRYGLy2EgLQixpfzTbLCjaNj4YofYU8NAMVGgnMnxLrVNAhg5joP62fw4AYYc31aBkjxiFz3VLLWkBDDB",
  "key4": "3KoDiH7QcEQR4CXyKqeztqVyhuSFCntbWwoRR65gk7Z5ipwq6BcfCXuc8PV3zodaGitZebUiMkgGFn5aDvkAbNVe",
  "key5": "HzQ8uH7YeUDt6eY5bcaJ7qU6ZBzLPUmHaPNM7cxgpwJ6jPnaLWACxC5z6su78fKKoq1Gtb4UzN9Qnn553TQQV7d",
  "key6": "e4gQcZNera2W99MfSK6MzrpRduQyR4oUdNykSiN115a5hWoqG21giFQmVrmEVPf67ovizZqapjukuEiUSKG4bov",
  "key7": "3eLWgG6AkbskCp1vHnDcXFo1puzjwLhqPa9SEgt94kUvG5N6Q3cdZC68BKgvZwoEF9nLqSTnRAVmqqgF1a7cMiHZ",
  "key8": "2sqqyiWn1cjHAy8SPETyHFJLhEUbwCHVESMMoruK4TgT5wvgxMZvYNxouL3E8vGDrhAuDmQcsR3vMN2Lnkymk6rv",
  "key9": "YrKtGSMEz72pqDC8u47s3a1rTVAD6pvjvosW9YDs4GijiMVqvx8Tndxp7NqYXWVS1fdNYo85BJdcNoQJpHtK55P",
  "key10": "5sFASLWV1gUZT693PK4194y6cWiQy9pkw4peg5ucrmx3b4Tt4BSzXTYoM2xjRDLhfsiLsTqa2DSdfSe6hmi11kUZ",
  "key11": "39AvQf9S6yb1sC9eAt3trohwnni1q7kaqGaaAeCesEHeb6YH9B6SyimTV9VW4JQamctjSG3raQbE5NyMAAyWepjr",
  "key12": "5PagKkj3m3PECZaTNJ1hnvQyVYgHAky3gAxcVmjfAXDyz56FaPPweC1qoiBnLgqywbe6tmDA5wXjY7XgMpYQZEUK",
  "key13": "2x4bbx88NBom5NcfedBnpLEGwai8NQqnpVdvsoifGCjUu398DZ2uj9CXJozd2jLZZs2LUYhSAtM1GZEQfUSChfG6",
  "key14": "5SthXuWtn1HPhzKidi8EMEjyhDW8g46kwVt543MLebWctoddavnigZT8w1fYhQbmTvrRYevAJ78wi5AhxfT2Ck7w",
  "key15": "4DZx4PQPjzyps3VjkmrDBXoaXZyDSEsSHWS3Jjmw7vHJLqJsvxxKvEQdQQdTVcar5NZ6QSgtr8Hx1PGVf7DaUm3i",
  "key16": "5kmgSYAgp74iFJBJTkRjSDPfUaYpusc6CySQEHUiMXPn8EFbh6834x9wYAsYj1idkGAMgsrAGMcRH9JrH6RkW1VC",
  "key17": "3Fk1e2u3Ej2zPRUBEApdJYwEUcAgeEVBrTa66hTHBE3eAbDELMGdrF8qiEsJnGahZTQUrLGGWVCj1Wfmqg6J1mKr",
  "key18": "2FrycMJqAb772Vh8UyeJKjrBZZzDecm59ev6hM3S5dy13qqSerH28MDdrjXRmx7DMgiRcFX9d8JwQSYw5iriQP47",
  "key19": "CzufBvL26MZnJqtNptTpdJ3Yhukdy75dNQq1UfVTUhTJqAqNEaAfjkyicqk1N76Ja2YhHDDfRNQPTFmVn34rcpq",
  "key20": "PEJzx1jUbSaK4hJGRm2DpVo6d4xQD6gChH6bYbnTatKhFY88UFpNRLtP8DhLKo6QNbo8omW9K2FGBtm73EMHFfJ",
  "key21": "4UuWuX5FEdWpFfvHqh6Rr19Mf98L2jvKE74EydT5ranVmz41Fi7m8eL3Y91X6JxXjJfeCMtHxFEwps5B9iENwSqd",
  "key22": "TxNFu5zyhUDuBufmo9TY3F5ZMJssVdGx4qmSA145jaon4ZuTEo5kVEkcJoRGJeQknWsDRfL6MitbqtLePfN9HCt",
  "key23": "2FypsUZzygRxcLoUa3RxGC4Ayju8USxSQsR3HxS6scrEwkdKZaSYiMuVb5CJpRjesup39saRwFGgWKx4rDzJePBx",
  "key24": "5aJ2Vmp3K8Si5QXNuMeduQJPtzTTAVzwDPzL1PN77vQTZX1E21nsRXdvyXVZCN6SxzEqZUBgrtECSokciSMt25A2",
  "key25": "qMhxuHLknfDuAM5cqgHr9QUx3fRu7p4E6rj6QQ8PaWS7QUUipuaNocfhrXPGSr4iosLbaD6Fxmv9JssjffZheJk",
  "key26": "2UV9B55vWY2cshobveo9m8tdsPN1sHSHA41cNazwwN6rdAPhWKFjAX6p4Sv3Y6Fy2Pj2tGgSQcKt5mqie5tTD6Zd",
  "key27": "2JM1EQ9xD8NSHGz8J6fRS1ZE35S6jfEPQKEsJVvbh7jtf68SMQNtJUWS7E56pSXqLgP1yHis6gUXccSzrFbBSk4H",
  "key28": "hFYLguNuHhBCU8qKcbFjddg72sPiyDCA2vqeLbzbG1zyASv1g3RE28aaKT5ZERKYHDuT8FsZetziq8qZqnqnH8K",
  "key29": "GmtMHgYNotfztQuQ59voXDECxp3Eyh7JV87dm4bPwc2kJGb6vv3gxb8wCY9J426wJqUNEt2ektvCFzp2nNmY7nJ",
  "key30": "4wvvvZXqPMF4bwzu4KMeromghooC9fbvmki9zJbEXbzk5k2gTXQ2ce6DmAVcM3s2sS5sDJxvtqzYJ245h9Ly1Xbr",
  "key31": "5QzSMAgvLxWajH5BDFLGPspdPLKm9cDtButd6K9qqVHo5WVdVoweXu62mgDFg8EiUY13JFRgojB8EXDKpE6enjx7",
  "key32": "38HnsUbjKsNU8aqDtbKdWvjDfZFTV2japru8ZSNKCHEEAUrv5h3YUEUfq9NcLnfhaFE3n1fnYz39LZ4fp3KtQ2Fj",
  "key33": "5xBBHA1DjXHhS1yVZbJXMJrDohiwLxJS9jaLMHXnszahSpmh6UGbzPnoB5Cepn4BoJbHJRZxriKEkYDiA7GbDirL"
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
