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
    "2Aber8zYPUA1BrpugERFjyiszqmqRdNcHksaGbpbQCYsrCApm2PUayW361rk4SfeBQZFqQm2UbbuhHMR6Pxt5rjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MqaM7rbpBWDRsyLSwCcwCBB1WMfMsDzyJVzDrYF6fvXCpZAN43EJ3fbLijCMLHP7mYkh7ozBDJWX2xnaEdg9qsp",
  "key1": "ozn3EzSA4rfB5NJjYANpyyQV4Jz5xb1f1XazvZPBKHT1oHDrVYKAZBAHfdf96xR9fkVaByXqpTCuyLxGbzPXobB",
  "key2": "5hJVuKNbyYJ2avFxrTi1WhMRaaQL9zHznfQSUTnkeBonVoUF9kNEtrUqTgGAnngL3BB4ouVzWg1LSRant2iXrxwz",
  "key3": "3dT5PXLzkud9hxpQ2iUaGqNX8h6M4dh7JDPdn1EAkuV9qG5QLEFbAVcV5hDbd3nBbBZK12Qd5Ywx5FCfSM3mjSAP",
  "key4": "2F98H9xAyxXzD4npf7HZB5shr8EtnjseHrzPQ1TdN5MK4wdECSSRXY4tm82BwZKACbG7GJxCWamuQZozSWSRKQNW",
  "key5": "3xmSLVp2h5JNDV1iTbLxLQZtT5vtaQdQqstsFnkPcLori6eWCeNo6qcXPQUSCMYinV6q8gsgFiH3Gr9j7eDpZk7V",
  "key6": "44Xh8LvSvub98wgeNHE5PNyk32QFdVERMN734sEsqHWpmBh4HexnVDxFYbmWabkXZZNnSrGrNSxddkGb38owjh4C",
  "key7": "36GN9USAWWsAfuuedrdhaSWbtJJgu2MnsgJHWmPsZq23KRRZoHoR7gvc1VZsefprovCk8Cr2DtkzD7FGyUtvfewh",
  "key8": "4w1gxpJt2PpwGnCvDiyFs5b5cudNYygtfgK5LLTJJi1Noc97Zi3GjamRjYa7g6gHzp386UNZUNSFGizDvRaSWT6N",
  "key9": "35WTg6F6pMrqjNLyDpVgYAxFJYvnBLYd4iJDpf45PhN3aBukzHB1VVPT4AieDBvuDryvvCDc1Q87gNdykMU3Yv86",
  "key10": "t3cvCggk4BcjGz5JawB3u7NNjNtLMfHhH1TKbP5B9ph8b4Ltuak3VymTix68QafMCtzC6kHLoJtGFWvLtwZzBDS",
  "key11": "4K59WiPhUma4qaD3VcRW3DosPcz8QrfnCUYB6ye8LMF9BAUUt5vzFLvxmkPPR6zgPeXvubPRdS1TrpkMqiPEGa6q",
  "key12": "35Btc6SgiqXek9mTm1pkx9vHTrevZiAYPnLjrNcDY4bqLDkwLPhuiQwvwNqjap8bJ7cr2Bqogq4ckfumH1bB91jG",
  "key13": "3iqdDYggKyS1ixJASUtJcGHhd4CU275By4T68uiur7dPxRjjE1hDUAzAxhxAHsJjYkUcQ47JcpzpvwKJSXdVAZt9",
  "key14": "63SdxBBmDRn9yTnrjdVFphj9FcjFpYbsrymxSstQoCQFkQNxtUvqVjKprbJ76b1CbPX2Y9haWntQm3T7L7pVYKd9",
  "key15": "4SzDPTnWo9nP4LBujPjJhW34hFdE6XZ7Rm6aPYpPB6jysiXAqHYrWuf9rhNkd4TDnzxQQzHNw4GhzLf4PHThG4De",
  "key16": "4WajYMF5AuvFPUtvFYsb8Gmmo8jqFRqk5t4BuYsdYzQ5ucY4p3fbMKMN6YgoPYWW1LRkrPxDDaU62urfctFmYzCS",
  "key17": "4TVKjYnWcZAKZ9St94dDt1xg7K3zxjNejnRXoL13awTsvuWQQAmmwEVzBHbgoZrZRobyLA673Xfo8M33DYVfkbQN",
  "key18": "3gzdM3SsqfBfYghd5WsKM4GEtAABjw739znixtWFLwFEeE9q29FRLFX4CbccNRDiAY6nkUE16Ka36Av3DGePv5zz",
  "key19": "66MqnVcns65nTrvdTbRPiZ4swjgjWbr4JiQ6bAuLtzm7rYMtBqdqW45eKbfL5WuSkzN39LXXp1ELAFUeKnRS5mhN",
  "key20": "LP1Z1Yws8pAA7dTH48PsMRXsocBWzmpcsDNCcAwccPVfxS7uU8AQyk9NLBj9JwrN4XHonWSnERuc76oYx3zPBXZ",
  "key21": "4YNJwBGiqcPETeYoVPvyPd2XuNWbpH9mKPwf4yDUjJQsAJb6ivLxF195qQZMZFgM9JpMcSZqatjtNDwV7SkUfxSg",
  "key22": "2n2hb95QkRXo1RxKRRzb3mM7kuniGyoUF5mScjxvDTYPrp3cDQKeKXLhqrwZnqYXF6dAZMSiRFGUE3tugFbNVKp9",
  "key23": "HJ1fBHrDMNS7maT4HLok6XgD1Hh2LTQwnx3psaAkoSVAw9B6nSNiTtwo9efB2c55kXKaXMZqYh7RKYcrnxeF1Qp",
  "key24": "5YCmFd3TEdqh9pSrmbmwXjkz5u1F7Y66Mzk61hhxU1Nu6usb3Eyh6EYGAG3AQkp25geohk5Ejx5SqQ4TUPxpZ1Kh",
  "key25": "545Hq6VSeTzZMM9tg8YoKAXTXMtxjoC4KTMira7jhX7BVkQXSZYyG7TvP8TdGgNbicaUjMM5h4QU5fiYZ5MLWD7T",
  "key26": "FAYk12gg5M5yTCAqjmir3LQ1gnsAathSs4b79788kPcBeJi6i3fNyALtJ9Royo25y1KeDqHoQHAjtqLCQZL15iF",
  "key27": "2vQA5bLNA8ezKUvCAYnU5vTcdsjXpYp3j45RgQxHcTn8EUPdXy1sYc6saXkHKLtNLsWdLidmWq3i8fEUXZMWkppu",
  "key28": "5jFWRzcpRYgmLMLRcurzGZN36MYeRFmA7yTpTr4nTERusMMquVNo8LQJpbcR9PABZSx6cf794zsSUUt7unSd3x3v",
  "key29": "2uFWSzALddEDecHLU4PuPSHeA7qFKp8wZgSxXJ5RP4URNYisvLzrWnTq2SSo5wHqh3PK8hniyAHJbnbSZUhT62WA",
  "key30": "5v5ZtfhPuc3zeZQp4QSkJBzckCE5axDMcFT2bMcRcokkCRi5ifTjZxs4GoQECNpgucaPFAwbgbv52aiMcm8VMuv1",
  "key31": "oKEpa6rEiPEH2xVBtvAh3sJRD7rTRyKgmt3bMyc8UqiZ2x184RskUGQgy9ysjEtX2bpXvTKunmcqhQc3htG3eQe",
  "key32": "4EZsfinov5fVf5veTPSqLxWjHpSZuXzHedHhAm9gpNLcCnuQnefdD5tEppPaV9oTzTiJevyWNfTGLaWiDLY5r3W7",
  "key33": "dBnDh8UggD5WYFq3Kf8Nafq6pkpc71A2Dv4vSYWz9Thbgk1619mK2qhwPfqdA19Y3QH1d39ZndMPy4ZTFNCMenf",
  "key34": "2X87jGk7LVy1nfp4dnX3MS2k4bXsGtRMXohD45gZk7TVosVb99UxWz8Yqhawem93B2GUgthm7za2juehYpLLc9bX",
  "key35": "56c1sVf4wUKGCjgAFcejsNsWh6QxdbY3b9tpaeiAc4TjttgqHrho2yJs8cn4WaR71PS6t4FrNnjejA6UeHSkuJKr",
  "key36": "3jsbYDamYbi1FUuotjG5SC7DUESyaNFmLwGWUBuuV4iQ8FiatL5GT1fJdcjaFFdiisxjKnj5amqsBE2hbYZMStjm",
  "key37": "2w3oiAsRZFbSgEfsyZeK5MHLstkxVGQeQtQEeLVYwkCy1moprHrVZVSvi86A2KuxTTnFNcNWyhHu7vC6xb8WvPCJ",
  "key38": "2P7m3kdJCweWFTJp6NWMYEEtDjTYWtauxsLtqPeX8ruvMfsjpo5EaAYSWU5VXaPDHcJKash1FB32WAbLnehUmBQD",
  "key39": "3tchpr8EGsemEzqnDSKPqav13hW4zTztUCHvRybvQwmePw6F1pguhFWBDiwXf5woB8QYs87FSZVrtsi9e3bj8otN",
  "key40": "4nMcFX6R1fo7pMEvgU4Qp9nGaKPZxBcj3YJvednJwtXvhBax4QjGA6MjvL7FfFak6psBmZ7ga439Fyuo6XxYRVRP",
  "key41": "rLpdQBRBkhFgtKRYGBYB3ovP1mowNFR2bFrmNfy4zrxsHY4k3nC1oDZ3F7gKSP5RNWAH4qDHevPeYkUp1MQac7Q",
  "key42": "BBuSfDjCJHkve8C9pBrEED92b9VR89B6h11CHxv5zityFMi1wbssdYDMFu5i3fvVjwstNq2NRuxYNatTWzk76KM",
  "key43": "5TXGRPE1pmGpxCUs6wa1tYJQEE3SEzZrL8rnyTBWWRbBeuytwwLn7BqcyYzXKor9LDjdu1UbNgfLEwsvgss6GrVd",
  "key44": "gNEhjHcKgty9nh9zfgMiTTqJFW1QV3YY9sasy71Z4fPLDYNyCQmyxxbJk45Pz8MFud3itHJ6EAvCCu4DxekEXSi",
  "key45": "kfJLUE4Bf2z1X2VcQyc9Kx9kCQnZHZH1cHGYtqiZVFDSuPcTFQJ2YF6aASet7zx2RR8JvWPBCkWVeff5d8anR9d",
  "key46": "53RWgXWj3QusBkL4NLtWhGcd9dFvXRia3ZP1HenaR5NkgmxQrX27ZT5qZiFBqh9j5c6mVV66FCYa5C765SNru9w1",
  "key47": "3zzoeps7paZM59h3FQqxyB7UoxyK5BY5zhCQz5n4Rx4JLWyifiwvyeW1vfmy8Tj2ZdfVonTJi6g9CXN9PBGTLBsc",
  "key48": "tWDcskEoSKbzQ9kmfZpYQwji2eKqY6yBCSNJkdK8aMdt6nJHy9h9JxAZj8yaHLoKTmHvDuwvV3Ao1rCTTvBWcwZ",
  "key49": "62KTsvKUfVUmvKjeM9KxNsN1MPeV34wvqNBrHLDrGfMw8vntFkhSE5ZX82oEKGGHjvu5tjvuQ3woBowEy9ekAs4H"
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
