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
    "3R44e4TaSXfi3ybd2D54vu56PBrbEpH3UCdpXETzfUz6V8oNahycyShLn8DPGdaretApg3S4jccXQu5cMcWVFFuf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MVxYptdjYRsxSgERGm4LLn5ScmkaPBkDaQDBsyMzrqG3JcvYSkEpBs2bCS17MJeNC8jhWnGcqrVV1dcdkSSj1wn",
  "key1": "5twR2WhubWya8AYS3Tfu5aN9q6CZ4nm6nm3uCocd2abCxmj59DQxpFe41e8UdG39ccsfdefXZTLQw9evcH7JqFdG",
  "key2": "3iewTvrZACVHmqFS9d1uegrou69Dzp1SVFaFzC6TZ5DYAZTXo1E6Ko7MMFuPtzif4UuWP68TAMfx38EpBN7zZKvZ",
  "key3": "63P154YTdCn6xgucAqrrXxQaXuAheEQfiXMaARKbugeeTunHuAVP5oq5VpV4pTNG7zPSnnWaUL8qsFcHD74DuK7F",
  "key4": "5psMFWFw1doQj1ACzHTWKgPC3MZEHUiZXowYLs5UDpdHhRprc3jrcagjxBo3d1ctaKFqABHojPzwhm7qptFZEyaW",
  "key5": "24jCjx6VKJhjXVhDXDpgnUj7nbjzNXuN2HxEYtdYrVpXRFR84xJmDk1STic6TtMFSXbH3EpWXAhtBpVdRYsDgYz4",
  "key6": "471kfAsxd4rSX8yGoWHPr41ai9t1tLpCpYEC4QBUSth8sKeD2FfGqST4rQPkfQZ2HnNaafZ8maZ5m1TZ3PLHFUfh",
  "key7": "M23MW9HgWC4HyWED1tMZLW5sYCHUCHpCiSK3wYsBDHCUaojYno7mF3KCE7H16YRT1DrgfaF43vsxbcd9xWBBZAj",
  "key8": "UvFceBXNyGt6V7hmcetFyLPvKj2xEJud7HBMFFYGVh2TAw6FbGB2JqXVyk2ov77gs7k4phDh9FRRR6BWN19Mn6d",
  "key9": "gUbSswgty5tMBYTsXZJzADz6j8WcQVZQpxFNchVN8HYMFyx43fFxo1nHSJHrFms3Ufx8Wpm92cjkv3D3d6CiUWH",
  "key10": "5t8VEetFnS9aieV28wYBdkcGnjvFbPmgzu1o9vnQTEZgHZCFPyAeM9a38GtN5jAZG8hjzbsQBG6Bb13oPZ5eBcaY",
  "key11": "3dYbRv1t6CaaXRkYacz9diGtXiv4GiGmHDZGxD8k7tFZjCcNqQb3NC9wQ65jybyCD5q6vwjDQddiZKyQ7fXXw9XJ",
  "key12": "2dhqseiyWmKjHHRu9gqoGYBZYPM4tuE4fjaE6HQCBFQADG2D82rC2YpQkgN7V5h25BkzpizSP5HCEV9GoidAVALT",
  "key13": "5uPeCzJYPbrALL3C4ZWsPtBsTUjfYyUPtEP2rDpPocsJYi1fXD9nfYHn1gHZZZtEJspExPQgx3svQ9YXYemoxxYS",
  "key14": "5vtrXoxWzt7wsK2Qv3tyqEhBvqVMSsN2ii2Yzz1vUy7mobJbxRVHgtFX56eSu35nQJ1vuLukwz8QDqxBJnMQhSQ9",
  "key15": "Ebq4WvZgRQiofQABpd7azpv6QScXHNdTZtVohZsBdPXsgRnwMERaXtRmFR5hup3uUD2zpjoKTTXdueZhBSRYK6J",
  "key16": "65HJKpMMLQeDiteKZcWAVkRK1eWvsL1dpDZAERdZPmGXVpxiviX694aNsW22EEX19fBAjeXVQSLfzWyLqZ1poCPP",
  "key17": "5Sxd1VPf6S5Ruq56fDnoPkgqZ3MCHgsy5y7rGGYBi85QWVghoCRvUCaGVfoJRqpsrWk8pighi7pKeXVEa7E4eEk7",
  "key18": "qGeKM52umVNNVkWRCahep4x9kqWowM6Mfp9yzURqGMM5KC1bj4tMHwSSBWKsDQ49VrnTbwk13C6css7Ky6iLMZP",
  "key19": "5BJRfTsNmWaptXYWsUHfM8G3a4UMtuXZbtbLn8M9VrWY862uFQJFz3jMgbdPZYw3TfabTdUDBG37KVkgMbfv6zvw",
  "key20": "2S61S8YfFozX5cNZVJ5eEhQ6VvYohxzTXGyawfovaTV1Lv3EWtSgmif5n9oQuagVC6HFyvk7gfT3Br9w9kmzhDQ9",
  "key21": "4e5gQ4r7DdkEGPUzBjCH9fj77GwMMDBRP8GZZw7ETtmDYkHHBCwiXRwJVesvy888HgjouuD7rMFiE2MwNfevVfam",
  "key22": "5potHygGcww9V6s5fTD3JvNJofms2UHygRtpuWGJhoUze69eTNqDAYgfnbm8DeHHa5y9xoTuEp6WSenNYX3j9zhk",
  "key23": "59taFeqabX7XQkZQbWCtVwTSnJ9s4Eji4yBEqeCkJR3EWx3mqa1wp4DdXtZsoXvErnK2xNYV87waEtF2pXAVgfCS",
  "key24": "m5UMkb69Rc8LqCcVtUGaMdEaZ2v3j3Kh4SxQvBYedeeV7EMJYPmWM3htcJxyezHMAaYqAN43K3xZbAP777b441s",
  "key25": "2CPTKSv7k7PfGUDvDLZnN4T8RF7t9BaqCjes15PecmczSgy7otQVVhQhAJ8Rgi1Wh93Apxo2E6xJGxmjUdB6Ri3e",
  "key26": "HGbNFjPMjgHpkA1MZiN44FLAmw9pbK3ABdUfSTkRbJ9FSDBHUEkbhRX8QW4WKma5KpSCpHmuViH9Bku3WkoVLfE",
  "key27": "4NPE1LHGR8HszMokGFabLEhmwyBxXniYxqQ3dDkLhKgBzKbsJKkuLzN5jeVZ17ybS9CXJQAmTP6Uy3mmF4gwCXEK",
  "key28": "5FpqZdGL1phhijD6cuLcvo5wjnymQcLz7Tp9UxHFTsiGHXLyBBJKTBoiRerY3s2Jrn4cSx43pqoy8Zat6bwYNiUL",
  "key29": "5LJF2NkYxtWyzhxiPVbHQK1Pj7BMNkfpNXhPTFNQ6QnZ7vDW333LD7qb2MSPxyiUAwycQzJHQoWRGCMK7JVo4d52",
  "key30": "4FGxwTvyins2ZAeBbk3bnApnABkw365guLp4ZNRGQ5rwSK1rPuyiD6AjJzXKz4wyXhxa6Mceq4Hb8iBJnQ3zoZuv",
  "key31": "2uef8XWwNCR3UpQhsdVFTajgJ6AZyHVMTSdZ98QhE7mGXnWWtz8Q4CYkKKTCE6y76WjBWHZM1zNdFhSGKcUBh9Zy",
  "key32": "4vzEu4ECV4rMQnnJRoZ74PuD86Y3rzfgM3Sskta8Dkp5pGvKbweC7xq99vsFNivY1JsGnpPEMNCgpWKZGJzaQi2W",
  "key33": "u7kRH86uoBVD6aNmVX8zNFk37rRw7EvoaZ56c6mMWw5nU94Jr2tBhpSTdELwnQjj7FGgjsyqRKMcsvMSNdYbG4V",
  "key34": "3jeiTebqYgsX582s3rN8Qm7qKdhf7dnYzhM3cLXch2oXJHzv8PnDefvA8qi665dmGXcKYarv9JjxadPQbasHLH22",
  "key35": "1k9cKjbvrH1p79eDYZ3t4QiqSLgugn43jBRshz1gbF6NTmxjxRPmgniZ11NJhcD7YHj7QkV8U6aXuq4R23tN6ya",
  "key36": "4wMiKMi33tECFqaob1JU8aL29WG3uWpB9dLfVS7J2hddd2mgFooSQcRuVU5vHhNQztuGtQ1eSvprANeGXw4mHtfm",
  "key37": "21fhuWfKYeiaJQXne78LxBY1FAfiCgRr4tHr9xWTptkb7QNiyvc4p2Sq8MqTy5w8uWatYziJXcrtYqiB9fhxLSHC",
  "key38": "4j2Dxwvp7EfBxBuYBUpLABUeoTQuf7e3ZVXhc9ZpmmdXjSqqvjpJnqvMfucUySiG525Cq1w1Je5a8dw9eapUPq1X",
  "key39": "2Q4DBBGeJbiZS1WAuDE2xYeXiyGSR1Q1q51UUqvPYZKVER35Mrgcaa5zoZDp7DucoLT4ade4MbSvi6pqp5A6xzDu",
  "key40": "2bX5oqkCrYkT93zQqnyaYM2qusCd7Tm93cYpNukQBn62FsWXihpePE7vj3ex7syshz4QQadLJhGpJwLNntMsu7qB",
  "key41": "4MkKXF2Cbnej5hNMSVdhP6UqfPJ5HEHye7zVsmKthV1fBWXNuiNAcHq4zPDyYUAEh4p582Rmmw7o6jpec1rtwZt2",
  "key42": "MFhBd115uXVRstcaMFng4NszMntNTH4cDJ8iJG17FX8cBKAi4UcErZofzMQwcUQ4mmgf7rGificunVJSywknHLw",
  "key43": "4QB1pdRmK8ust5B6cdG8Gi4p7W9vB7uF7yKvpRy1wTNKwtACnFtGveZLFQPSEEFPxPEsYJ7GL8jY1eJHfzvjsBNh",
  "key44": "3zZUGRvZUEQqRzrXiVJgqMFoaFgwWuvgTSURJwctRRzsBZeVx83bn4PeP6qRn9H7YFxQ1sNeDdMH8DRqvWj4pRja",
  "key45": "3pwdaLLNkQVtSfZFWmABB7jAVSnVccQjAA6hmoQwNTw1ha46f7yssjNvC3BKZyokMZyYVMPk7FKryitUugik6bys",
  "key46": "329cViRW6kXCa5SSVtnD7Uu6FiyYuaDvZyDZVhqkJYUyAbGe7nu6hFbvzzgrB91RKSguyzkWi6MfZ6eSjaWvZt9w"
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
