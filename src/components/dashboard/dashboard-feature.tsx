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
    "w62x3HuWj3EC2UngsSTNZEF2ohaeT2WmdJeTEkHaSPp4AtsAtszjxkxGNE4My4vVnvDW8Hvi3EGPtJhqLZP7cpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "agcWpJ2HboysnkbbQ1srcVmBs7zRWoGZUB9jzrENmCwziWCCFiTFx3P6qqpe7cibiceJ3fjKfSb6yGyt23Zw4pZ",
  "key1": "2K969nb6MCZPv3Qg5HLyPGBoP2LUE3BRibbRU41NtJHUEhPCHUDg7CgYfQwybDqbnWtqQoEdxcvrsBV1Nx1bwi1k",
  "key2": "4B16GAuGAZWJcW8NxpdkGryAPD2q1k5bc1Yj5ALaPA2hJYLnQJ8xqzKXkSQAkj25uxni9VZaBB3FMr5swtGF6HSY",
  "key3": "2zdakfbB3kqRjMmkt28oPjDqUjpumumdGVPw679nagqfcLpswQADaM2HCRSTDiZHQJ4sfYcr4mAEqqRTJctgWC66",
  "key4": "5GABbSC3Ad2ivQJSTUZ1WwokuTAwn9XsCBu4L184T6TVCpfnDR4Ms7as7p54Xz4Lsoc9DUg5EGdSoVxppnEdEk67",
  "key5": "4Kth7aXCkk1AqdZNPSjnrUPQS54yTBPRNXPqsgWgoYTSvzUhxVpNYePP2o1rUCUme3WHMVaMQc2uY2HQn8ck1zpS",
  "key6": "5Sw6RsPrjNCypQeN5wxgEjFypiwsaSW9X17Psq14mASn2mq3btPMsdGoHo7uUwZWxEiwKQvhfxKTq3mUCwrAUWZN",
  "key7": "5YCkYGR51dSnwCK862NhybExiFvkx62JU3nqeBLzwTDeh5eH3Yg9nxFGYoovCdFXzNB31TNdSV4GTU2JYmU66qtj",
  "key8": "5Tcx5FnegEXhmBgkr8JWPzydyLBMXTYvcyQVyBec2uvzKhsqmJALtmBDoDnd14FDBSqfFCFumCeq8oKiRFHZdsFz",
  "key9": "33HbLXa2otYyeurULwVjTvAVq3UfqXpFZjMQve7CsHXR2zK5aTYEjc9BgESq75GJUopmPyt1o7P7doExfepzCDPo",
  "key10": "n4w2ydiiFw47C6YEfFU9KMsE1vbwnT4c8rX97sSgv5dRVTJ1typpDdSRC9MSviQd1Wv9wE9pRY9MiHV7RHWUnrY",
  "key11": "2XAifAUktRftLuiNMuEp8dBXmNgSnj1TkFkzV2TSQ19ZTS5knkmUhzvJyxDTygE9cqF8akZhbgDCfuQvG48w9KGx",
  "key12": "2APfHSgAEA5H6EnhPTftY34XuuQYHAdPrpi76QNYq5u2SYWMnkfSfcQ7iFCSRhTM8KCWKewbrPgrywkSy2M83Ecd",
  "key13": "37E5E3Tu4yTYchW1fEQKpXztFEJT7J5VyJGTwksenKkYwU4nyzWjnKDGLHMy4xYsFsuWVbZzdoT5pXxixaDV9iNW",
  "key14": "21ux9pro8h6NT2bqW3cDQApcA5HGh5X9hmKoAfiUis2gbPV6c89Au5ZueBh1U8gXA3cuK5veZjMiv7ZkmHgBQvJi",
  "key15": "29WzpeTdzgMd3eutedV9rq3xj5RTYb3sX4fLD2UNZ8Kj37DrzZ44TisfZqU7SboCkcT7Q1iBzgfGfg8ZxUBhTMSN",
  "key16": "4u3KFPJV3aFiD2nUrnga4vgPQu1iuiHP7AYNvrGxMqtj6ogkDhnCjfx3Qtoo4h89ctx42p6UwtVFRnSHnZADdRPo",
  "key17": "4DBAwZzDGUeya3JL9rvb6A8xnwGmmmS86wUcAmmArcUpd1vrhCyBL17diwR5PgMehwKonMowrg3SKhAgnTgHbGDo",
  "key18": "2VkTbRhGemMMKvhSnRcGdG1fBswvyFsd7Vmougatg3CBMvQTbFDnk9DGnyNwcxHd9x7YqteUiM4kx5Xc8JwF8FTQ",
  "key19": "4LkGbxQ85Vg8CGzvdnYPjuyTuGFjNoEL9fvYnC5VN11FbXeTCgrrBU89SbP8rj4FEFpcYqLfxbMKGzK1Qy3Lc1YL",
  "key20": "hqLQHNhuks8KxLecBVMYch26qHjgJi5HzCQfTnF2LoCXQxmXDecQ3nYWq25tQbdYSKjaZaDbqiaCYY9pVCsw4HG",
  "key21": "ZMrXngMvzGiC9CBKkdf8t2G3LubAbnyJWmKRq3YZYjGF3wK7WAnPuZ1MJNHjsc7dm3GiP4xJPKPxvByv2UCMNJs",
  "key22": "5pRwzbGRhr9fFDE1tFJjbiFvrj5L6Cc5Er4WqKBvxA9acug8Sx9Ri4ceDP6odv7zP88YMtbseBDhARa5uav9Uwgf",
  "key23": "2QdJ27Bj1gnFFUDLwzYc9XB9ov4ZmeJebThnt72knMiboguAYncRf3uLwRNLTQVFhTTL5SZfLZjX5s7NPEEQPmho",
  "key24": "57ZC1Hg9nEvMoRZZ2RbNdEhBSQMA5s3ZnfM94FKv5L7bMh9gXWQFm2cjCsABdrvBGr82ZFcjZ3DTbQFmuNPeaMYa",
  "key25": "4Nv7fstmokgjvniGy5PrmU97kPRJp41mB7RZir11fdjd4urLtiwAXNJJGjh1aQSH2DH7UnN4qUfX4VTMhkK2LSty",
  "key26": "2LER2eu44Ag6qdNLvysrk6ndwRjwfZdQbDivZDXaTY4s3Kpjsr5AxzCYExWiBY96wcmh3Dj4qrgi2iin9NR2voaq",
  "key27": "2WApVzg8j6nt8RTVV3enYGrjiSMbnMwQAhmrUvfYSrBmkdN27ngcHBTPSTTeKATWMuQL19s6T7iatZTndJmhnSEe",
  "key28": "21vrfjDQKBYG7Rc64RuRWwAkM7sqzG7tPSRqFERAYepANxvipQb9q1L3SZLzakTtgoy4gMQ1peG5y1nY9XaCsDMj",
  "key29": "4qk9B4SnT4ZFi4UvmHTPBarTk8DNzz9rTgq8iR6BQ9FaYaZKsivQ3nhpVzqiyXJ9SMTyay3pRvjdDSPJLU4UHyqw",
  "key30": "HeXD8aFhbgr8pg6U1NDLJ75i8MhpzazZeMbpKUN8m7NSiXR9oXxs7D1zJjLKTURokUeuEaxAf1go6yUtgrdGKnp",
  "key31": "3RC8PAAwh1uTP1NxGMzPbpQ1313NGRVAqHiR57ig4fZiRJpPT2NLam28HfKe95da7TNjeUibr7QSQaengf5gD8Qk",
  "key32": "2NvmRAbUE3ADeSucWUrteZuMfKDXQLsdtGH4VBvYW1mdc2Q9V6KoY64wWHKmmEoosmHvWyZUgJor6yAjpkcs5Km4",
  "key33": "3nzAVaZE474SudbuxmkvBWaA6FnD7ikC5edLqYiNBPL9dMrXeweiK3A4NvRPcghcchnPct92ZNZadfNZYnbnb5i8",
  "key34": "5y76rBiz834AWYU9ehcjV7imQhqXgHzWBMSnX3ip68iwrgsScpSFL9uh3VDnoEBXRC34EpX2eGYExrT7Cy5ZFV6X",
  "key35": "3Ci3Wr2c5DxfpDYpZh5C8KhHy7pzaY4eaxh2i3UDEkFPXno5byxwmhpjvJAFuQMtnqQwTnjCEjKu1JjeGinLsNaB",
  "key36": "2oWvVph9iB2kcojfDLfTkb5KD8YF9Y6PuM5RoiaMcPvJFgCq3dTh26F9ZSaNj3vbdxUQhp4DCE5UhE55cR6pshsg",
  "key37": "3dzmjGLYNgANgkBwkkEYbkpEQ97uj5mP3NXM7DNZFkzwEZbmhEMWyhSEL7o2ASGreE76DBjqiGpHTGTJ4g8Rihr4",
  "key38": "29nyweBSMAZArkNtUvWFaPixLiE77x32Tk9aHJpu9CaEKfYMD4GBfLwyXAKHmQ2mWamDu7XcoLotBSJr5BXANNf3",
  "key39": "2vpkX865cAqFsvGhcBM7LcLMRjgVu2XA6U7RbYCbM8whnECLBKdVDx37JSytppmrCmRVBqL9Nu8dfcXYMkRWSv3C"
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
