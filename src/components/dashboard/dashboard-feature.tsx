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
    "3K9CxxTYr1sQQvtxQ6xtg39bfaCsJscpmDcd4jZeLDNJ8ZwyKq5Cfu8tskPYNic5u87xLvYzdibczNWdquj1qgiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oHN3LKFB8fBQe5yNcRLMEzm5738E3F7WXmMxqHuWhSqD8Lo2Cs8ikh1SwDT6ppYj7q8bEhg6ZzpQmrNSK179vu9",
  "key1": "e2188XG2sRcRrkf5tqyChKR9k4CBQhSr88kNYdjq94NQ8xYgweYPk8CXkVXeQSBDzAk6nA4negzpDVR8o2T1p9r",
  "key2": "5MFE5GisJt2RuuKZx2WxgZfXaFKM3YRUFcoWiPZpsRVWVtKjo7tzaYLRRdquM4biVvyAwkGS6fxJUg2aLAVvv4WU",
  "key3": "2SvTpXfVuR9V8fNrPSo5Vgm3nWGghfY9pW8P9fyaKfxdTWyAUKLMvnibhtBv4N7pALiebF5GGZghsP4dA161DUNR",
  "key4": "5zPGneAxnGkodcMD3JVoecd19HGsCgKx1QERYprRcoGzFYm6QymVBtahcV2B9aFhaFWp3xqLo1XsEGZ3rZkSURR3",
  "key5": "2jQ1y9W6UnYSAdkAgECVdNdaYfg4hToW2x1KBkPZerrgjrRhTgL1V6LhdqQqJS2ypPkj4EgtsLN7bwGzYdMcHFva",
  "key6": "5bWPPHTGQqvGYtj7mpvESWrrTUMB7y7BMTdkGgsPnvjCNtDuyX1o9NVMLHWiRHDHYJ2qtrPKYERJovMrNpygKTyQ",
  "key7": "4rEyJ137bssyEJwVqZ4P3VJG3dAcd9yTEYKnWiX8BWeuts2CQKM7NfLGoxKNapH7y4yqvRfkzSUA8ovw3J57RAH9",
  "key8": "617JYX949Au1JuNWuXhpdyhwdoi2wEX1SVSvSiwd1YbvxAXGQK7bsfMdoUDZxFntUNoo6wyLg8MXdbefsqk7rT3A",
  "key9": "59nUdqGGtLRYNmWiYiDohPo6TtNxLbSKwDMbN4oYb68CZWEymzbkxZV6HwEFU8ReHuceocGu1qx8Y2XP9Lxun6Pz",
  "key10": "3sMMpZMntnUxFsSKtthBU6imDBCSvDEodoFEVrZSuR4McuEPqPiDAt1pguVXUuUzGMjy82aZHorU2uziUEaNNbnT",
  "key11": "5SPaRKpz5791538jqWti5cTXc8L1m2V7HpyKfRhqsZTtfeNWAxUCfJdScSF9KCuhdGhNKzHdj9NHRbL5DNkDZ1Cw",
  "key12": "4uourypq2YoEdbzNa6y9wwaTvwdMDxTpwMtYx8p2qnXEdFdY5M1LFGgDC1ZVpVXm4eUP1H7M1ppWnYHZQCzV6FFf",
  "key13": "Dnkq8q1BUR6AZH9w6srPdgDAEsG53ZHnWFqcq2mLy2YCN4F7KCR3114GJk44uv2SiCgAMMcsCU9R5np1Jo2vLY5",
  "key14": "8ST1gLmDEWLSPHFNwRE6NZWC4G9xvqWs63szDuwEUZzrTRNmfg7SfbZnDKi345DJCP7ANgF6gAcVSQNKbwo4kb7",
  "key15": "ueurPDAHCWGtyzkm4ZMNEzMPpAuwkD24A9XcH8KHZDnaTx3xHybgCmZYQEtdAAfGxuicb4uqafgPa72ijTyXpz8",
  "key16": "3dw7M52pUD5iNfewPgdLkXj3Dj4W2tgiW4KqYKSUuR4fWnSb2NKKP2UepEjaruuZEawoszZs2tHLNSZ6ipDoPHjT",
  "key17": "5fkGXyKqxdtLbcxfEF5pk1UsS9gJqc9fJ4CvpRw556jADWCCQDtJhbdMQ3MQ4yGTux6pGUZ6k3o1T3rEMEy7prco",
  "key18": "3gzW1pnaK1iKhJH1CV5wN2pUSvfuHoVmnJUPuMumkMHbPLxALwD5boxfxUY9WUATGVyRdwwYnKrm8aGWEm1ywdKj",
  "key19": "eL5QZkUJsnhPivu7CoKZJiw7MVH8yrd3cDM2v7PYe8iJPWA6wKubpW4KHomP4HHEG4QR2ftaUqzPsaB3hLUNMgq",
  "key20": "5LMci9YTsEFkGdyfewpNZSBo5GmH3PXXLoF6jU9di6DDY3xG8YuMT8EhSWK19PjHMpDa1dAYkp7UjqhZjPmJbwsH",
  "key21": "42NEUKv63pcNyDhVTRYhbvkyXtj5VtxwQKkeM6MYUBFeh1xkt2pjtbpJsGKzHvM7iF4ajtwUhwxV94SYdAyoTwCv",
  "key22": "2gZmxeVC4nAL6qwWPPGeqcyx9To71ikUBzQisPY7qFb1w4w7kAAqzgsHapbuC2g48MUEda2udUjkXGh1UZGTq6GF",
  "key23": "4AgDhpjm5wkfohoKxGHk9kF7Gyqu2RZSLHD4LsYfSLsvbzHnBWthLt8ZcLpmAYrtmpAmrks3cwsPptNFLntGqDsi",
  "key24": "X3u7iky8SNgkhNwycXNT1skrqWGE79cNdihYowBmAutnXsP9J6V6BaxAPpZgGZodxo5DnkZDFHKvupMJFDTb1VT",
  "key25": "4ervCkZ4db4xgb4hdKsngG76itgPFNwLvsMsMi9GGzR5LeJM3jvC3aVYV2HmTLzAeYCjkDG8NVtPAqMxFwodZyEk",
  "key26": "2ShQLjLfvFUzn9bhDeqTweQAJ2bcFMGX2YSFwMFpKww5nKxqnh8DWRgWgK2UcqGyyoZdWLg3AEAk3b3gSyhwC8TX",
  "key27": "5cKpjrx69tMcaSuNAEr9NGgQhoHeaod51hGddNvJSPzz3sPLHjQbBHDBei3g94Gre5iofe6SXyVyBtwBqc1QPnBN",
  "key28": "3ZiyMUdTQKZsrw3vEXHmRbR4cTxJ8G3Z2P7A9QjvoJP8aH1vD8by7qopweJNb8yvUxnjag2useP6oY6y6EnS3tnu",
  "key29": "4zKDGd99hqMCmKrNtcxTVNwyrc5czWVtSr45aMnTBTHENKFpZpmpmVn8u3jrSbpm2D1VsT6Yc4nz5NdVevws3GS2",
  "key30": "3W7GtEJKLdiRycanntgDYFeptsHUjNd5XGoKLig1U6mAtXYfuYehEDk3oQXDyCVTpwSZ2jFWtacPyfLyQBiLvaSA",
  "key31": "3R2bfGMDdAZQyWsf6JGdUsi1g6RiELaPG2yVQo28BJTjYrisyibiFthW4KDErerXYqxaMXoGX7AHiU2ggvKUG5wC",
  "key32": "4Po3JBTM1yuzyTvJC7wVP2vdDGbq5Ngx3m7hrxZN3Poz9cSF93MXRgf5hfkKgEPBdRqweru9SUD8uNKUU9fZr7yh",
  "key33": "3MRjmuRv84FchonNYNhYugFpbAHnoR88zCdvX4sUimtxT1v5T554CAa48798RwqTiGPsbFpGRpRnSm8h6fAK2YFg",
  "key34": "2sDNbo7Lge1EFakSJ2PWDpeo3toLtHHF7SU31xpmfJwzrr8xMHA3pA1h85MCvMBdsXox8eJVqd8gDe5PL97j737o",
  "key35": "5K3CHmrWuH6SVULc6b6f2Gir68rTG1txJQt7QA11MvYaoaoYfZoGDCb5N1rQ4EaYytLua7WeSYBYyzh1CVZYLkfh",
  "key36": "4eN1DxSgKCCGeF144uCUhkAqmeP2v9hvxovgoRow7v7TjP9vmg5xTSDsuMYuJrMrcWxzkWPuNLYcH8MgfJ44K865",
  "key37": "4XL3VKuoQHDqrTb4wu2cCxQ9cFzyeUFuqFwgkmBNq1JK4Lq5o7rMt4hhod4qgHbWuMEz7N5ESew77eJPdTyDAbSG",
  "key38": "3hKSXf1KQv9gHoQPNU7F9iL1SorzfwvF1BmWeEDvqpqtLDTaTBJ9m1hAQVuHqoRB4qGNCQVdVQid2vKmyVXaW3Gx",
  "key39": "5PxigHLV4bDYES6DnJdRcAZQjRhDxvUq19ATuem67rk29dcyn71yjKhEisUd9b9kc7iRWBKbaFWWve1mDvkaqYLr",
  "key40": "5JaMbMgTfu9f4hqUL937At9rF2Wbm52d3AvuiGGNjoUuphoY1FKxX6FJJUMX1oi5oJXrNVj2WjCBY5AQbQucKh6n",
  "key41": "AjanpjkWmRAYsRnBjRjzkwxptqcV6t3i4fA9PeVAB4Unt3f1dhLnQ1XaCUu6cntJxv47Hb8eDjMWzBCdY3qVGos",
  "key42": "63XCsBnDRGhMFNgEga6eEm43wtJq5TfKx7kCPqyoxqpZhdaWohGyPQKH6UBgc8pK7cjq3GCA6S7pZXXssJgDY38d",
  "key43": "5FzWjZd4oBFax8N3WgdDFGVUMdqmDCpF4qsb9cPSyLCZbRC2udRXe2Zh2KtwkLaNyMnXPhpV2kuY37zVyrUxhA6K",
  "key44": "wqnJLm2ZDEcPVKbKU9vXHuXratzmRNYwHnzrcxdgaravtZfaAVZw7nZ9J21kf7XRmdecjeGWiXVc4zJTFw9hWjg",
  "key45": "4z9XBQJU9M97r4f4dq72GdjWvf45rTqXXJ76yKkNWrYaGdBkK1ToYUd7BwkNyKbMoLDjhRd1iUvAJiRKDLBDV1E5"
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
