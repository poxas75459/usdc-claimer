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
    "5QQS2i4nTNbzQUyyq5aQDEHLKVwiKNtovuQRbG7sxNA7753CMaRFkR2JyyHsRrs7ACMqSneM2LVxAxsU81BQ4yhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v13zQmXd4268fq2AJtw4vVBWpNKwovXNJpgNzjy9f32X2TjXV1bYk9BWPontaGLGA8Qyb3aXbfaJtMgrwbqg3EV",
  "key1": "2zDqNXc9pqSijCa8JXjE6QaAVxJJXWRmw6i3yPS3XWPGP3PuaJsxcEJV6QcF72AonBiGdmrKfTAo2nAh3TL5taZ3",
  "key2": "2ZpDx8AnGA8JwtJPA87DXJVdy6AxzWUoNdih1wCDa6qxrt3JfAMJ5ZWHLrQZRn2TaMphssC4Cg6biUAAF86JPoEd",
  "key3": "74KsaSZvoV6hjP1S8MA4gDoGTgREth9citNGXGphbtbUHtjacB4MJT2Fw7KPoXUkKpQkz8CVGaFk1dQKRBYxQ3i",
  "key4": "2JDQqp2jsZXChkMD8xFjczMsS4xA6dRPV2yCPvBVw2VxG6KRYGEiEv2DyNbRhKvK2Ao4DXjd8Hw4ZLhrE5xP9rfu",
  "key5": "3jjgLvJFu1UZc6iDuzkcytt2CDJrjZekaTG8gbNAf2vEKcFQtAM6BSJhEwLMjCvAyGpVw67HrFZLzK32AiFTiKFD",
  "key6": "3ZXyxsW6xBe5pjBL6a6VC7rzYPpXC1cYuxUKunTgfpxkWZpmdEG1APJEJF6VWG995euaGdMdSkkgDgE8WpWeQrou",
  "key7": "4bSDWCZtgdepG93bndFnaySHCd7Wv1GZsVFx5oJf3KQVFujYGCT8P6wp8zVGYTBDcPeTL5Tj148vmH4y1F2epSHK",
  "key8": "3BWAP3abV2kJyzLVcVcAEyEGSKUbmYqgWgBdgHp6pR3fEQgKBecnf7hSbk4Ap9BRovscRy6Sjr1xANU4CNv9Dmba",
  "key9": "3fn4vCSNhqZ27mMCyhaeDwtyjj6ZzMC6v6rw9Muybm3T9Yn9vwaiirgghzuGA2nDCzRMZkuZMUUoUrvVF4Au3ozS",
  "key10": "4MYH7526Cj6LikXi4boLDsg4eYuvonwWgsRDNiBVb4jGFQ3dYrTSfCopYujNWdvMjShxzK8s6mt87QMZPG7qj1pc",
  "key11": "3zXY1ckwMgq9DtvAGRcv1xrARDtiHn9hZ1sAhf3wChtDfVc23PDgEv96xVpWYZt9ZQfuFcUSbog4oPCCAoveXkyb",
  "key12": "2JmrhpSHZYYueitLFQMUwuCFYUg7iGTGYz9ocbnvEq7HapFiF9HzCqprrVKePHNobzqTanvjTW5v5cP2oGCkhMEj",
  "key13": "xshoj9YXmwRszyNYKmsQxTAHDq2ajxQbgQiHSriihMBF3y3wuT5cstHsEtgtDe8s6fk51geobhKPL1fnNQXYDqT",
  "key14": "4Y18zzw12YhNDsi9pJpptmnvaNJ9cUFDYApPSEDnoct65yHsRsnMCGeAudbFAvdknQyAKh9amE7cMae3ukMLPG1G",
  "key15": "4cHteJipuAmejUUcz7UeAvTp7MxY5oVp1UVaQsneoAdmD4SPUvojVigHWsn1mJnehsjWwNSc1M7R6jUdTaq9oGju",
  "key16": "5Hnh2zjQCjuKWDpwpctevunHtPTaSuo37EaeMzpJLrdYMpEPjz4KwWLAERBveoSBUBcodRM4rGkKCpBJuErxVRi8",
  "key17": "5TCRUCgoTgAczvTzgm92QoZNkEEEMzpx4B4mRzS3oK82C6vrVzxXeoSj3XwctqPtY2vwoVSh6ijZPUfyJ195HsUB",
  "key18": "4Ed46kkYxZHAhChVfuG1Ay1YHEV8mwz1zmuw5jUQkxNYcoUx7rxnpgnGVi1CHsSA2APJDtM2yih4wpYbJ5tpan4h",
  "key19": "2VJupJkVi7ZcyTc3JuhpdWEZiFue6EUK7p5EmMrZStsqzFKZgpRznCCzyT5SAJDCbWETXVgVLG69Su41PHyj3D7U",
  "key20": "uZXdEGaXoVKbUyuNoBj4p5N9ZD8gL8JXDkjw4uVUdFEdMxAna51syMr1XDspxAiEjqbjT46zhB9Uk9TpEgU11BP",
  "key21": "2Si1NtMUJPqdqs6DDC9pSDiEwpdEVmMMmy9E396mwop3HZUZjpPceF5af8PqMLsrki8Vuc7vVsyA1QEoqbE4E9kB",
  "key22": "4wkpdnb1EX9yhsHBAMeAybbvfb18KdtrpnKX5DUJEhcyFWXo5K9Lou6SmLEsZz5JEogAaPshf2YMieMhawcvqSUc",
  "key23": "39YmCJ4a1HaqdFecA1WRWpieDuAjm7ieVJTQcTMgzuRnWgX5qd8H8ZvFLXa7ET8jt4hrzY53B5kpRYZ92QYjm9am",
  "key24": "4zv5UwvzTkkXE8A7tBgm8a8vpQsShUtA4o5vsgbUadJU8qfzoFyD1QccKW83CeQgU3dRSqqb5Gau6JsHWRHkj6ER",
  "key25": "34ZL9L5Uw5mcrWSHpfVDNYKzj5McrNJyNcEJqMfJvep8UrZVvLMsxaSfeP6BnZjEcyQQQZzFPyVgGo7KULabtDJ6",
  "key26": "435wDpinyvVfUKBzwihtMzZZbRFWHwUtveHYAkJYhXUSyfVeBSSiT7csEaWDWit1t1mSBVPP1PqGYTLTy6KGFjsg",
  "key27": "4KiaPudj9DUb6EWA8hYG5tFxBq2n646rABsqgWJyMoYobPjqqxNJJDZtUQE34z5Ux3PVMMHYwz5MCWukhDJMzbY9",
  "key28": "5JddDSpQVYV76iHWkNVGkxmFC8hDoYFvMikwSAvEnUkpGePct54BoFRCgDYcnX2TzqjLFrysXZEPCZeYtFbV3Rs9",
  "key29": "5Q1BF3H5jeCQbpkoRGNovPwnhUkPBqQrjEG4XdYXehphCDxp5MBPn3H6e6hvGTGD9ibtfbGD8QjprWrDon7HJr5w",
  "key30": "46gRoYU4MJyjaVfxE7yF4QdSJQtv4EBc61tBt1356vZ2vEeEpLztypzJDE5L9utBmDRpopiVSBj5pEzPty5CoBzy",
  "key31": "26FUPVfyZAUhHssRAfTnqeF8xsp5GYr6rg6NMYp3GdJgPWD6ebFVv5M3t2YtdmhazwLRhe6iUVvaFzK47H8BLYYD",
  "key32": "5dNbbmpzkBpAhPYW5Kc1y66MsWTHKDR5hGnuyZsYBVg5fE3zSHosHUoBhRtxdBUE9TFTz3iHKLxD8EoxYDWNzKKT",
  "key33": "zZniV81udKamyxpNUybTq8ZncgRRzdi2bSWbyEYErVs2LqfAYJ8zjicFqtrBiRF1R7iJqg2eDnZjykjoUYBv189",
  "key34": "dvuaQMqDyNrCM6XcPs7UMEfyy16z9poYnvdKmqkza9cZDmKcAj9biULHZCQMr7QuLb74V99pZHGrcLiTbUWDmkH",
  "key35": "7VY24GH7P4riDiox8uBuVZzCkZz15WG81oH9bxCZdiA2z5PpAtABH6g6qk3VzCxqjELEcYRWsZCtPa8yNQVEJti",
  "key36": "5VtarGEcszCkPQXGDeY3GkZ3xXjxJzroZN9F84w5u2X9PAxAvyECKLngqNR6Mih8QsVKmPzFVkoKZf6tHcgtUJRG",
  "key37": "5seVaX1NE6TiMGt2mACf55n44SvQAyExchPynYX5Jv62VgCokC1VDorKbx2fLvbuQ8yaYfuD39oS9UrY5zfkVMX8",
  "key38": "3ZCrmhJFo5vNTHcemDJ4MBRtnpA17srXzs8YSqnRW2GovBwJBqABU51FjRMmuT1hgGadG6tStYYTjLGyBZJfExX2",
  "key39": "3GUNr5X9ovYtPzNKLcSEvRByBAdC5Z2Vyz5aeJEodvgFci7pfHLPi24Pms5qPXZB178dyEw5TjdN5rWVMqXq3zAX",
  "key40": "xUqhwNKDMiUR13wfhZ1rctWAh5Up9CG7MSpvGqWsYcBWBZRxFUCUNRSZ3U12vrpqXkxVYF6f4Kt4pXgYu8EPar9",
  "key41": "2R7FhYggf468uGr7NJi6VJxN3rwAmH9E5xQjo5p6QFizEY3iAjSyUsGQLh4toHhqz9BvrqfLKu9L8WWMwcuSYf69",
  "key42": "6k9DxjLSpr6CV6fumYhqUsFLXYPYyoGUoz6YyG3igfdrMwQu5TxKousQLXbbefRUFLXXd7YDKMPTYmhWxCcqi2Q",
  "key43": "5TWR2NiZBh5np5o799armzNtNj64Ys8LEpGfieJLb58saJfNzQbfGVzKN8Qo2f6jUbm5J6APeyf4Upj9H5FtjYs7",
  "key44": "4mw2p1dwttMroEhkuG3s8W1hZzh2VpJtg3o9M3C9iQuxiy86Lw3WZPTbs48uf3fnAovMXNsP5DX18hhfojRGd7Qw"
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
