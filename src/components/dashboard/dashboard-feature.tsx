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
    "2erCKzme7tSgaqepXELFHMR9PEZtd6A6fYL9jrQ66SdCSjSHiUSZdDaicvJxiXJDFGrn3NMz1axdDKsCnDV7AM9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rb1kjaZTSnDecZE7AqoWxMZ4Hq62wBvrPowbjsxmEFKZmzKMt5ib34udeyFWFCMgmE75aSAV8BN5jfGNpc2YWG5",
  "key1": "4LhvWqzWwHGsYV6wV2ULrFEt1NoiG1Yyz44gymhjpfCJGLpkaLics9PsWUnPJ4yV7yXcPqAVvpcgq22eKocZqacf",
  "key2": "2pZ7f3yLrA7CNHjy17GKYqPdNwj4Rm1PuVU8kSWWkiABJUhaXPHNawBXLvCeJbm9mboLsThKf7dRBs9pLgwvajpg",
  "key3": "3SGvBupuQGzdouQv6WRZtA6eBA9hPmDEGhtk81odenKR4ZxifBEkKgdnquc1FyNVTzS71q4B2xgDLFKZYVebaiHA",
  "key4": "46JES3GXpmXAujNuCrPU4PULiqcJo1AcuXKBe9uLpKKza2qsi3YnNHVzsLG4xUQC1CVCNm9TaXbXz3XdAZz452Pa",
  "key5": "4XDKUue2M1R3nqxn9526VCoqcUTy8g6pGwo647pJQzozFHoVzNVkj5YffeQQrMWUQm99dN5jMfygqc5FMS4MHkm1",
  "key6": "HTzKquq7WKsE7BhhACBNJNoW3zB5xxhdrPTK4JgbsWpq5quCWN3Fwo2TvuWg7j8KoYVbjt66Ns6CqSdkNM5oDNw",
  "key7": "4QH71CPHRjN5ZF7sbCQJoxmQLeMjXL3Uy1DyTE6jJur3xsVrNm7B374Ne5Jh3hAW1u4N48yHqyigN8UPse8i93EJ",
  "key8": "4gQVwhxKzbZPnLnoGwyo2wwoCezGGmuQDfHu5QdZorxwrXXXKoGqX2WgzZhf8rityTdtoVqZu9zWEg3KFKV1HssT",
  "key9": "3kUAhBs5iegeoQxAYcVhcEmEtMgwVZJkwBmSD6PiQzF9UDNZaz8d6JWoXkrFVCCjYFuaMGALg7a2Siyq8v6cdHCj",
  "key10": "63tpAAss5P4fxMZHgjqNxgmE4fmcPoQ4GEBSzmC8PWd8mtGCJ6dYpRF6mtk81SRXNjTtEfxkJRdQou4bXk9B7ogt",
  "key11": "2fVyRfD3QhTCqDPZnRnJqzuH5WWA3W98B382q6xqhHudbStRPEUC1ymFGE7P6Um5vnwvwwy1SZgcvh75LMUq2S9n",
  "key12": "y644Ju2dVRLbvhASDs1mF3Cpk68BcCLZQELGaGLWHnBPQemPaFFJwyLizBhRrhDt7ZGxfgc3nyKi7wXWMH4dbu5",
  "key13": "5i97eY5QguEDiDN7J2JJkrwWsdHB6Wv9E7AEzdGJNm84TQQ4v9HMtMimW7PKZikR1bs7kwXo6Zm62b7WfgHNBe6M",
  "key14": "g5NtThdXeapAagCA6Vdt66x7LJmqaZdpWZ59PQqLEpNy7sQmoBb146ySRAyDeyvYfvFFBp6ZAgeaj7ouDaD4iVH",
  "key15": "323UBFXC2upCsYEY6mi9RUFi3xnHGeDs2UHyyK81tvwRtXZN3QJPVbn2ZrmZGnkvhRmvFNMeW3tRNoyQscatvXzr",
  "key16": "2w6NEoGSG9H7hyyk5FC7d1Fwup2j26h1BmNJzJUUiZixD6L6vSLMggXKdjHjnbj7B1VAt8TYgCJEiySEo57epenU",
  "key17": "5bAHiMWY7YdZBCYrAehApypNbGSczbLhoiiSLaUfYHVuKTa43EDJKzK5Sdxra72GNqCGpEwatGkRSBPJDSN5JLxT",
  "key18": "3bjAVNQVv8rPYFEdnP7X4uMnVCXMwesSGQoczpfgUAQ6nSMqEmi3af8cJ2WwQotfMyRNdzVx8pVYniXZMqoUuada",
  "key19": "2w72UPPjuA9wqyu2x8fjBaur6YAXBUDZitkVdKnvpDsaYP2dXquBo2TJ46Na8TAqTqaHReWwWP3TLzFKY8AA7siY",
  "key20": "3J62Mo7L1yjewiW2DZUH3CuAbuN2JyztqfHBgebyornahNVzihE5kqu8tUrMGxK7TeDFoWKcL74ikKSm5Gp5nNH",
  "key21": "46XbzHxZuHg3DGJW52JPdtU1sr7rjyaZaM5JuomPqjLokZiUKfoxa6AoxjBBG6zVrk8oXcn9jn2ofp6GoHXs25sV",
  "key22": "3rosq5kfspqhoi7tCojt2y4Hoxpy4hjfWJPaZV2mR3KLXTZK1gwejQVw1aRwT3n3y82Gk8ygxJ64UBcebidiBevj",
  "key23": "51KLa6P3rVjps8RAZsMG3n7GmYftB4dvxz568Vjddrv8BNiwfkQXFAcLoBsGb1AU3yYVQho3EPpFG725FzCk7RhF",
  "key24": "2NCGsUPtg8q4DxMHBdyTi5tJkexXMZXCVXMCe8pfycwMfbu5AudXCHQX6RgHqyk63inmQsX51RnsZu9riz1qiu4G",
  "key25": "5d2DsF61aTWR4qmNQ8aN8qALbd2yFiqb88BaY3Kd9RBAdfCtbTaMpwe6ckaUBeGGHTruJLiNFsTs74t28nq62xcR",
  "key26": "XDAH6k1rGomHChpduhiXLL6bnChRHxQvbgd7AovsowawNzmvFnsraCyKKgerf5WTvYGALgx2tTYagpmT51ivxRe",
  "key27": "BTW18yMjxVKRBHPzrtEnNbxv38gUAKn26ispEwj1ZnjVZFZ2uwfpWGM9wsrv9YQtfKck6pgTR2xANTJKikLZFXo",
  "key28": "5UvPYjBVvPwxsKpGjC3qfJPDLENVTdzNLrDuvEjhQmiPAsunoMvdsTAg5Xa5Giy8mZ4kuEoeon2fYXcjTmtEvbUe",
  "key29": "JFfbrJPpGcsAR3eiqvHzh9Wb4VE1cgnxt7QqDsBxGBV6jP1rEjHYZ8BskeiTTEsCySRiT4TyW8vBQojYV2WMtoZ",
  "key30": "3SJtMDxqmmH73KN8EP2aP428Ca1MddpGAAaZEH3JiBgdecAgyFKZpL7WbpQDaGp7m6FXCT87YERaYLbME36viVd5",
  "key31": "2S82V9x5aYgBthGJNqZ1kozaMTAJz8ZTMR46BT7Psk5TEU3BvQrFRVvgjw4c4BC1764XYfAtoLHWHwXzVxpa5V1f",
  "key32": "5PhD6uuLWdMPDkepJYHGPBG1YFoCybi3oqAibDpM7pcuWMjk6yyr6aEYELntpX6cwdsQ3NumXB3W3iXWPUhCriCu",
  "key33": "4GFbJdpcCcM6iLVu6P1GunpjyjK3wjR5HpkJnkMgxtfZngGzGdpKiYZjTpxekFsbyQA8dNGixNe7aJe6uWuzmfca",
  "key34": "4F3JZKXE7yerLjCjAdnnA1Ny4Pyf4wjFSz7awvJG3QrCgbHD2kv278pjKoTfhGrqgYx2Rn3mn8j4YeFHsp1WeLzv",
  "key35": "QRfmvViTGDiufnDssejhT9WbZESuFAJkLQ8EYVJZQnabLYYKR7JSRExvFwAeEX5Y9NcAVnHmGMG4v44U5R8RxeL",
  "key36": "2DBXyLRrVzhQzRDzhABYqKEi7G7GAegFfnHg6zKdDLRB52VPr2ZE3v4ysDnQd9tQ2dQCP222tFQcdtuALLbZmzfs",
  "key37": "4BLsGZm3bFR7iqvtFhdDe8BzTFHfr5tGhc1CU4939kz57QHScmtNYKLitJJP4q7ZzxzE9PMg1XoiuV5hbSi5AwAo",
  "key38": "5J2Nmx4TzeTEwjffcZ3mRFGEzr8UVuedWbtWM7zERrsr8Hf1YM4sUd15ELXV12Qd1Nmu6Hk7YFhB5dHsiQvFbaWy",
  "key39": "3oH92C1Hhm8trAoccJqBsr21vwWAqsCfcJWqnqncENk3eK4f5wgfgy7R4PgBeum9MDX8g8Rz1M4MSzKV72GmUb8U",
  "key40": "5erK4GEXvaQzNeWxDayokimJxpWaVJ4DNHd7EL5iWUoapUUa4XQHsc2U4E5Zhfr6DaCXdkdGxzR9w3X8fvMgjWuN",
  "key41": "3Rr9Qq3LS3ZiLf415VZ2TTxEbgwRe5LwGqv5jQseAcTNUzFtgRKSEn5NBpq2VUQsKPv4JYNsqUYAA1B668yLnVMn",
  "key42": "GiyH9YYocBtvjHPKySzU1PKXeksUvHNt6hmP2CbWxLLvCTra8qupJh7ozM2hurK917kve8MoHhYrJdHnuDFEmWF",
  "key43": "2pgL5CPjMvvjQS58Zb3HWpKfDHdTJ4JPShwBw4krjJzk6oJPw9GkXuA2fZjGqDTG2wtW6NwyvrwtJwqfaqcYT67L",
  "key44": "3m6PTWEFVk1YsuNtx7bHZBsbWWixi3bti2Kf5pBxPJC5h3qqEhh46EujxWpugQzVuF7mP3DUryBkGJHg5ZXE4ja5"
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
