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
    "4DfTvcdUBHRRhga53ojByTqCciYPxufNZDVx6gi1fDxvGpU2TLQbHcATFXV982SFfiYRscywLPZQte4GUqntMF9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qvGcEFQTcayNJZCJFgJTSMU3LNAutk9iMvBEMskGkRKCiuvtEP3zJypTWZoSro4EpqKrbVrR9FmMg8a1fpKoxUD",
  "key1": "45pe1fXMRbFhQqyaXzrmZ83p2dPUhHzSvF9Mr9yafqvJeUg595mJzvs25uMAY8HgGJgWWao9VtGEgrUxAmvfjmBA",
  "key2": "5MS8VVn7qpgNx9jooZZ8gwt1S6WUy9PcgVokmYM6QDMe7aboCij2f5KqQipzNAHzmmpH1QSti8JeRWPQ8UTWfWu3",
  "key3": "34xHqr3iVe1Xk2YLDUY11vasX6d7rnWosBBToaU6hvHfTZDduUtfbvveh8HAg2mHjc68aQ4pVXMYse5WUrYFky5e",
  "key4": "3iR7fTqNrav53zZoN5ZzjMqPp3auU7tAPFKAN2gaYUMDG3RGwksXwp9gY1ftg3Fqurpb3T4R2RtYigqrJrnega9A",
  "key5": "5Z2sxEmaLQu94iqpmbBqN3pSELNQsNND813ECdvZpTXAmixuWkaYiNf2PnrdRbX3i1CMSxP2QTjJJj6iJkCPZPiE",
  "key6": "4oSgeNy7xnPCbtbu6zKoJKTBZaEkpjr5jDEf54db61hwtmYRzSktkxPpYftK67xN9ueC7pE9tutD8pm7igQ1ZPTE",
  "key7": "PvNnfbBCxgUv7PNBWcxjKhyMAP7gtq5xriatB8T1DF9JswtPh3PW58tpyedk7B4abSUtwhDJsPUPawAqbLyj5mi",
  "key8": "3sZruZcm2w1x3rYtiaHwbXFRH56orfiVi67W3zLBUxApTui4mbymrkLK6z7RPyNyNztcQp6Rykzqiw5HsFjUq8cT",
  "key9": "4TuLRGXjTy9oZRYB215hxL4wAh7CQ227zD6B43JFdH1FwRcSwkzrmbjiUsFtKuhqjCQEkkMmXoPvWVYwxyvTvPcx",
  "key10": "34TZxRimrmpnzjY8GMbymPqHxSvhBAJqe3He7gzsDYSHx8kfpjGYb8wxtjtaYHkGJLC5Rci48ngokWnEDBhPwvYL",
  "key11": "2LwLmjJgpDfyXmDdAiMnNyvRwKLfrPFn94yHvKsrM6A1tPUkQ4eTwsMuePXiDfiPkqqXsf9DXLcn5hXGCh4KZh1U",
  "key12": "xnusGEayppCfufYeEmp94EQnk411iYx41WSqKWztiQ9U4aVrYMCT6EtMwPXxqzTvrXPyLkzZui8h43QgKZH1MAk",
  "key13": "3JBpqcDY5azRYBcJsgDvEJixkG2k2P7T7J1myYq38FmNHBApHLoxnPmkPVKjoqKyXcZbCYrKrPHXvi1j25h1yH9S",
  "key14": "4fk7ztXBcxVQrCVjw27DAUEZLbjkroLCU2wjwcKXi6N8hPER6A2KCwKTqo82V24CwRsUqqnDwUZw225bj3ha9gSt",
  "key15": "24EyeQbpeKVzNFAspXJfCmbUFA9B7k3TvsSi9Espg29h5jNmNhr34NAPvqdmJhiLBh18JjrWhDrPuUSMb23jsuUv",
  "key16": "3jUUkTHxfCkYMN5QDKeLYYUn4gDYh9rCFq4zQFdvRbufi3oMUVhVLYskZSjn5UY4Fr62ovZphPQXRLZjgGdVtK29",
  "key17": "55XPK1wG5Hmp4FNC8LqHBxcB1jQGeW4e7bh2QUgD6RZGBrGkEy5YxTGWM17DDLAA19Kjf3Dan49Kz9Qieb5tAJug",
  "key18": "422iVdnfmX7w7c7t82SREdNh9n2nNqmxeL3hAki2shA6Vyr1vMahrm4ZiPg3NMtxH8cCjFhewszY55CnppDgp8q6",
  "key19": "eUTyDHt6puZiwgy2mAaape36kxHvF8epoT7e4fmwyAeabXncbJFTLYAseo5A6RFnxa2iYLvpHbPD8AEpjVmian7",
  "key20": "4ZtHiqLRbMJocLzGj6ZFYFWuTJDpcCXeDPJ5F675d8KeJhvYGXDPX9bat1JHtbsCYVeJPzY4oKYMYBX994Pgnm36",
  "key21": "bAn1D8aFCmtzhirhoxAdgVXMDWipzvLBAQoB48HeU1Yd6iaLYwbYeaU48uVGtTZ6aU4p19mZfXjXQ7zK2E3Hkjq",
  "key22": "2j4EvuUGGsSeKRGjm2Pkq6ZdxBVTAMzj7Uv7dzQ7e9Gti9azea3grk3jVskgq5jjgcS6RZqSL2QxBmdEkUpNeQdk",
  "key23": "4HD3x49TZAvrc9AZunV9j8uRZ1CGmR7f5hbYmxH4FfybpApGc6whf7q1XKrLeuthDdq8KR9eD9n9ooViDcAZRMYc",
  "key24": "omw1KSzeedegcdAuW2vY8bNccHJveVdKWLrX1Rffzo1df2d1CzpRuPf2RkrSGkmmPohdStcAr8SRoocyGr24afW",
  "key25": "4uzAjaU8cvukjtXMdwNvb3JSeuLZfgYV2o43KRJX2Zcm2Z2PSy2zqd1xx56c6EqcFREddH9MCGXFsBgqdSBX7Fs1",
  "key26": "5t3TKKgNBKJo1kN9jubWXWJBk52v3N1p9fdas5R3CnBq3g33kSwdcmZ5c5ptDuiLovMeU8nzcCCUcC3yuUn4aWov",
  "key27": "2SyPdh8Lda5rTa8tB17c5pYht7Lsj9a9zvW3WxpmSW7sv6S3egEN5UiXq4oi4iohLe1zX8C16uanvNXP535kJUo8",
  "key28": "3M2YvEsoH2Pjh9Zqjft8juxFYkEGNfezh3s2UaekXJZ8Rk23wEvPT3muLi68sTDFoeRv2GxEqzVwXn5V8HqnsZ4k",
  "key29": "2YuGwa9yqBk9rAF9is8ncRnB14Uk5bcGn1XPeoQnPQZ9SmmuY9Fe7xQUEiLfso1kSduA97NnLKNWtBXAcC5iNthV",
  "key30": "3XVqZ9e5oxasz5dHPkEKC2ietZ1147ec25iWogBuSYv2VQkgGUzS6eHG8z1ajThgmPFBegHrR71n2ybDx2RnS86b",
  "key31": "346Q19xrzGQkR6hAxH5dL9UbmJvFHW2e4QDa9dfKpbY5PJiQkzJGEHvmgB94BeKFrz5NgshJVpt2Az3KLbSujV3q",
  "key32": "v95zVN6fBfk5SwTBUsiucj8gaSN4S5SpRn6qnZpHsrH1kMzAt3b4QXbLNBSGUqSXP8g3KUPCW7bzkUgsbYJjY2A",
  "key33": "8AGKRXWuaW7EyShFxBcgUAsE9vSFRsoWqBB7x5z3Fd1WntbaqjWk3FJVkuQhS4tSahHGDzjHq7FggGcHrJjnzz3",
  "key34": "4CaC83k2p5h5fpceT8ji1nmNn9ym9kZU6vU492tdpQ3mq4SuuonJmg6dV95trLVDL4wHo4HTBZyaA5FrNAwkFDyb",
  "key35": "3V52oZdgTFke79vo4iD3kSbU9q9g2gThMH8ahibRkg1LvtwiX6NQ4PartmjewXBPKhAp8gRBTQEi7t9xZBnq5s5P",
  "key36": "3Sj53fwUAG5aBtCNc98HnQwrr65nVYXjXNv3aYmzsGM86bknrE6SDrbRGvX3sTcsKtwGVYi6G6pYJQnki5nbByJz",
  "key37": "5ShVADE6sihy7Ah3N6dSzyKaqvFPtXGGMoB87q5uF4Ri9Q4groHmXB3hKbhWA22og12Q2rnEfLJohE9WZuu85Cok",
  "key38": "4A6vaNStF8BbSKLVJc1kTtfcdsMibswGeZi4s6fxw6CiVnii3tuJ6D2rzBKyt4q9p5CKWkg39jFdHAM9do7Do7wa"
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
