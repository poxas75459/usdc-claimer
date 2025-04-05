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
    "58XFNc6C4BhXREAVp9TW6FuJ4qWPhujy4ktDMaia5C5zSEr6PX1P4oGSoTfdaagcFHuAQvPBFE1CJKGqWYLT8BH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bUq6G7pMM9jFmbkgoqLwJu8tz34bmg3ptdvXCPPvnPDjj2RpPLNnPyn4iMw2ajm6JLrheh6A1XCm4D6LaHuGgJw",
  "key1": "7Uqy6ezYM6QJxC11ZFnGLq1UyNHC9a3gu1okoLKnB7JN1G5pGDKmyCvYGWx4sKZi7PftXomJGff238pN7cbyAHj",
  "key2": "4imE4JiiFPVswDGyRjb21tLGGKS1ZLSmRdn9RZCe5y4taVfMKqwtEJn4snucrzVyfSa8RAiiWTVucBQAbe7hA9zB",
  "key3": "ZkNS4CkgoHj59VGJogK2qRnSbaJWKwVZAAsdoNEcj99JK2UYNjU8bjX4Ygsmse14idPQxyyXkENcxwtMgbAGGnE",
  "key4": "4YFk7c38ACNrUAF8EQGcvd62xnxvw9hLeHb1XNd7qzETDbfCZCW5pFC62dzkWn8LkExtGMAhiyH51WApPZZgrJAG",
  "key5": "58naGMXz74QYpKraX2DVr8qgPDjv4tgLH8WgJseFQda5xgA8tFtbc7cJEqBTNYqwW78VR282y9WSo5oPKf2PhBcd",
  "key6": "42rFsveYccYmMdpUN4xNmo9SFuYibgFFrUpEcoJB8qKGWwvba7oiTpXtzSpFyvnY7tR6VtFVwhtxoZD6N8Z86rCz",
  "key7": "39KPG2hqWAvzVZuqErGwwTwuBFWDbE88g1X2tpTdgCRZPpHmu16hDVs3PBE4XGBAgRFRVy6MCKYaAyH3L2Csvjb6",
  "key8": "64yKA22RbQj1FxwWT9VY79XB5oeByTs6c4ucxj5EdLH4aaMp2tN139D8327kYxyLYcnZFrJd6bkNcwY49wuiV9Ch",
  "key9": "4hV87DaEQetbckd2uoBbNqrJ3smQUF9LDuYE1v6jfBkqKiZCS1gaJPoHkpeCsvqC6tWY1TAogNQY2V27GKk3wuCG",
  "key10": "4voWffyYpMFv85BkSnF9MiuoYgf77R9Gkgr5uNmCvJLK8bftQuuju1ps6tEum2gkS1CVv97dahDCZyDJu7nVTmwa",
  "key11": "a4Lf2s6cUeUGhWsLYT3nwWeULGeQBiCfPAkGN2YUvW4yPWD9Y3dQcLhWXzeFgt6XoXx2nwTuAAfgAEPoqKB2oRg",
  "key12": "45L3462bAgDx1mucucFHGDqE6AXHfYoVVpUH3jRmo7pGos5cZPmz1GhmBhjwW5NSZKMjBVAeDYLKeSxwSNY1eKKP",
  "key13": "4yVmSXUVoqcwvg4NvddfCa1dE2cPSmTb4PL5a4UpMgdRp37okTM6H8gM3geVfny6QDz28Pr6EvFrZVTyoXUj6TBq",
  "key14": "5yr4gHenfTEYFLJDXxDsBEfjgFMGbBZG4ja4b5xS3hRCuoGfFgr9nzosYcpAu3ChCWeyBp7ZZ7Jon22oxUaRr4rP",
  "key15": "295u1Szja2A5pD1QGxcot4X8GF7CLezDnJvy7jKCKdoDYB4qNBGh1B7kWfVafTDw518kL8P5oZ79JXpCR2Pammjm",
  "key16": "aTVi4NpfYvTk2nQ35yqLGCMhNWBbwvFGwWBDFrz9ZvEHbPHSRbWJFQkbXhGxxgfcdpJnKtJA4kq3wY82hEHTGZX",
  "key17": "3PrkgZdMndZcoVxfyDtbLgWk6ZSXdvJ5cwjAFBbM4Pc1BXnhwWTUWNBSihhZYikuaLyRCwpd2Sc2gLiTi68AQiDB",
  "key18": "3JwiRMGm2JF5DEmzCZiwspxkM5u52vMCFZ6fYd1obTpnbwtjdPLMhur6s7q6oV7mNRQZk9ZoCi1XyjErhAankN2P",
  "key19": "63eCzfBuq4k7t11W5QvymEWtqMoUEuHARugiPPnfLpVVd17Zq3FJS4Qd6PVDKUFx6VnqduJPiYeKBomfNT45PtNH",
  "key20": "4i6JdJh9CrR7H4ZspfDNgQJKLXxyFPzAsby8pEN2p4ro3JhhikmWNgS4woqNh7dnKZtAqM2fi64nt3fKAk5J6VnK",
  "key21": "29LsvHxVHvVoPBpB2YD6FRfuHvGHgrV8tbvNEhsSoYT69Ru2kENezS8HikEBVxPqWBzoaywUTeUhHpj3kY8QEnMe",
  "key22": "hjrWgaxRNAn9QkAekdfuva9AtkytpoPWHwMkzzT5xrH18DViG7TbsdUW6uZTTeonQytmu3WUzYuvy4FwbabwUX8",
  "key23": "282Lh3VJxKiiocww3uMTZ1pWSKDnmzH5Cu2pi9JZw8zwwSioqemMdJQnqZPP4RY1Wkagyk68rDZvLhmwsJZyZ3kd",
  "key24": "5sEZmU5mCqWYSZ6ZTAFux6QpgDBac4S1a3szqeq8rhZfmGJiWy6zb6u22AopBTWK7jdzgJxYMDU35AaZMGbCZe94",
  "key25": "5x9cqBXdHMvC6gyvuv7mLoaXhAedTFyLx6UhHnHEACXJ6MtT3XHWNRF4FW3S2HYvGZJ5hXndL8tWK9LUtLGgjadz",
  "key26": "ytSZdJtX5MQg3DbXhTvDP5xPQBGjCtToPKrdvXCj4heynGuBnfXMH5LM7gEiG13CVPVxEruzwvmCAjEJJbdVfTk",
  "key27": "5gKHPrECZX8jVAgxzsKRqjvowWFnHBUQyNsb5LkH26nzWKjGKtanRhN1AqQJYPUonFVZDaPi8veJS264uVprbyz",
  "key28": "5KSyJ15JvbRKtNRqC9rvVCY8dqVgL5kpeaxmZxYGpBx5Znjv3CWLfFQGA74Rbz7dHnNX6Qay3yqVBBmFfLsLZNAb",
  "key29": "EGhwEz8mqW4hSVYUK48d8BENBYK1nwAqhQSEa5CMo1uYB7BkCvwJN4veCNDz64wcuJ5SNYddm8V5eywd7wEnfKm",
  "key30": "3myTRDGyuLKz34TH4X4Bf8uJzhssAnKAoMDaZdsbDgpT6wquEXrzuFZ75sCcHpgQzcpSn4NzZ5ThU5sQRCaswMeH",
  "key31": "47s9a6unocZW9hRtXquL9U98E18J3JaFTGi1C1mt4ewu6uGW2nPTCZ3NfBkcJJ7sEtWyUpzh1LcNnTy3Qa5vZKVT",
  "key32": "2Zc97wjzryeB9ZDvNjJKoRukHCwd5cc3sfG8sD9mwyYpVoXKtnSBGNENozNmKZa5RnmA4nM49rBWGd6YTxxsqSG3",
  "key33": "49p4e8WXq1REQk3yyEHSoeByYZAxksQcBoFxZwnFaZGaM8rfrL5JUnyNAMbqKfzW9kgDhKGU9jd9oiMPqaPuTthK"
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
