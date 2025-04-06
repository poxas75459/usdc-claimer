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
    "5G62CL2aYNQ5TCmyPPcwMHdz9db2c9JyV4hEVdumKvE1NtShCnmE6jrsCHh7ES4T2qVpqPVcafeJJ39pYYpEnRqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D9wXHeBdyMewPeWmGpNs7khSn8fBFCT7JoTkE4Brzejv67dNUjLG1cz3yrX9fXnjZKA4oJroYHWbki57sV4Zu2Y",
  "key1": "zRjP6hZCMAkgVofguEgcMqCUQQ56tMguSeAX2b7ND5RkPSBtsst7UnYJHQRB5z5LYEZXavqwJAZqW1P6iifP6RX",
  "key2": "26TUkXjKsoZZdqvfb7gHy42HCFcgtFytHcGnsY55R5JULUK2jix34v7uu1cAhFDExYkn1usAo4jsUuq7j8iMPRPv",
  "key3": "2uk4muebuiizU3XXcPDoscoYzLv7Dff3JCNYDYwuRGPv6Z3GM1KCCSsbAuJ3UKKiV9baWiJaPmDoxGTc6HVxJ4MT",
  "key4": "5RPJzdFsWHBbdTmdnu5GYdBk9UsKSXRwapLKWBBzSFXiPUyHmctLCtKURFoAqtoj2HAQ5B2nJw5gCGcS7iTkuajQ",
  "key5": "5CLgN5WknZ7m3HdZ4k8Kq3eTZWhhhSx7uSiEQcxh9rSKCCHkXPX9ynzv4tApvTzMsSEJ6HJ2Kv9p4Sq4azYsgYvo",
  "key6": "dxyy3JJdG1AdxDMwtBULWLbKQhULLKqeSBCURe6npLtpBzUxgdvMZ3Rzpuz59KVRyUdihyNSH1UrcLx9777WhZW",
  "key7": "2obbPxBgAKxmTTAhVTPvBULzp6DxW7eoCpF8mSDRGEw9h9j5D58Shrqa1P9dQL5d9fvnNvPXPVgFbkcx6BjucKVh",
  "key8": "2wMzmDQ7Htu9LdziiwccYtov2hCwbKKQWnU3n8H5aR2GPvV3xM3ZtMUNrefebS72saAxZFRy89QxxF4GgT9DdiZJ",
  "key9": "5HkMajyTVe9ZGgcUUCkWTRuWEUEiUwS8ZcCm1AjE2JPY4u58XSocYZcfseo6iXgZfAhbPqWjome49jYM4MdhWCdr",
  "key10": "3mdDxahwWjTttwVDRrtX9NAz5JzoKFwHsefXqsGYv42nU4otDg6u85z2dy31iBpCdMq8ryF89XdEkV1xWxTDkBww",
  "key11": "5vfmaHohRAetdV769FU3URfcZRAHmqkRAccKmXZvGgt3pBYp42jGaYmXAydbHXLocb2tpg8CzkC96KPbWnu6Mwux",
  "key12": "rqPwwrNVuZT4SZAYsoxkD7HPVyAKYbwXYoDY1wixzfqb4CWmGBuBHbjCiYuh5WkmmSGHEkZpxfjX33XuPeziiNe",
  "key13": "tJXpVDHu6ECUuCgKJvUB2LTQy7hgaz6qMjSN3jYdSj3m9wLGcHwXMiBktYNvDBwAhGKUW3PukmQrrXJaanrHque",
  "key14": "TzdBdL9BGyairhdSjQxpjAEd9766aeMjaNXbdzujcsw9qUWVh3QMDK5TSKUaHhsEgcFzZY5JgNPkJ1j6j95XoGB",
  "key15": "4DPLYQ5nBSD2yAdsYG5zQef2FKbd5rE4qn3Fq7gAKMVnyo2SRdqEnRWJ2HuWx1v7ceyUAVTbn7VkXpD8N5WqXUt7",
  "key16": "5o7RwjXqmJYFr9y7HbWNSXrtc7WRvitq2tWrGjjLBdCmXomcqzdw8i8g1Suaoqa4BHgZVcdYAzoRCch2m2U65F6u",
  "key17": "HEvo5oXmyzjBajJ35ZGP95EU3jGGpV65ZtDasVHPZ61wBduWF46xhSekAHh4qzsXDp7266KX4AcTysGNKrRP43a",
  "key18": "3HfQfd5446kgxRomxp96JsFP3hJkZkUaz1qjQwM9t9LWQB8C476bCbpochgZqZQH1FaL9adW17U1XRPtAp4taPYe",
  "key19": "KnLS2d6zdprhw2PduP7ECDQUxNnH89AyxSywyugtRLtXdxULafT4kEQmkXJEhWhbC7qXHAxtYLHAvyA9BBfXFhG",
  "key20": "27FbkewwAYg5piLdQqjRtRAwEzy7UiRVUUxijXe1Pah83ydWmVJE4Cp2mMCEzsPvz1rr3Q2vYRprXRpBC1jeMZjJ",
  "key21": "wG213S8QqBHYmCcKFqvUJrN9FfSDf2webETGixr3CbUG9vNNgQyVMZWtLcxdQMTcXYHmpwFCbHDZxusmM81KuP1",
  "key22": "2kzxsx27AoY4xci6LniRzGKct8RcdWX6jcioqCeX5jrQRjpBuZtrYdxQFUnJs8EfKTEExpyr8aBRNBKGiXGXp2he",
  "key23": "3bmffTB1CqekAwtt61dtyWKWHVMwjKXX6ckYgf53n5FPgQWLuvk4iBs68BdQo3FVhHqPinAGFva1QdZezB1QDc65",
  "key24": "4Ezn5ZizDWyL2yvjLkFGxoyDqnnzUFrhn8urT7R2WP7ckiB4AStRrchuutbTmeqRKa8AkYfcsYnF8ziKYZL7XGL3",
  "key25": "5f6dnM1SN1pxETHazNdyCZCLavXuyKQ9kKdZN5UFg7GQnag4L2YAhq7GyHSVbbssqMQVbGeWQWDuZmcjt3T2ndGX",
  "key26": "5Ti4oZj6gSn5XLiMnYQY4Nhpthb7pu4bsqLoPonGcgQGAZBB7N9ccaYh56owCoaYfx92sv7JLG7gGBvHW4KaeF7G",
  "key27": "2xY2gzfgkthKWzN1ULmsfjWqervFSGebJUfDNHQsLej7BqWjkGrFJ8S35ri5VcvE2my97u6hUP76defynxaUpcui",
  "key28": "5s6Zi2VCx2DKNH7HWj4rqTphydx5aU1oLh5KKtkFWh5kFF9GHtE4qfsAf2BdXM9dehmCxHY6KZdzXpzUVsTZ7Bjs",
  "key29": "2jhie4Tgc7eN7Sv6mmpGmr6FAGFSiTX3ypMWFbJAdc4tUpMPTL12rca1UXB5YpDPjQUrLtm1eTtKxuvgSd7V5Lby",
  "key30": "5mbqwHAcNpKx88CbZxoNiqrqLQc2FN1V5BnZdBnfYLbNmvMHHFEXuVks1poqZ19Wzq8D7VuYVQa4wf19dG1bGcdR",
  "key31": "4ZMBe13nUqcCiZD4uFW5nXqa5b3Sc8rdVqZHCoEpq2V9YSQsNej75ZWM7cjg1F3cikie4Rd8ZjQQQNSCs9YySbcx",
  "key32": "2D427xjhPynTiyHcsNaUunnoaUojH5gRTsprNGVPLkaQAdmdFFgYMTGQ87DCf1B4VhydgxeTKtqgffQwtCWuFGwB",
  "key33": "5okobrvKvs2ayM5Scyg2KHXfihTQjuPL8TMbZ9sXrfk9FVBc3vLaNrF7igccDUpfs62ubcmNg7ab7acVRr7A6QUJ",
  "key34": "EZKkAPaZAAgZfbJV9UCcX4pW9yGHSfSfXWA7QTHWQHU9hZjhDk8wZX48zjd3MYA35SURVeMupT1c8Wd5854LJk3",
  "key35": "226uqh72rK6QovZWxuPU3d3No2VLQxyXstTMngyCxmKRQu9i2SxsmgwhtxpngzoMup3bLr7joUKsYM72PHmgqXUd",
  "key36": "3p9bMfNUamR6MaGNuFyB2QxqvA3BDEfU1uA9skCRcjp2C3yMcR14uaBvbSnQrcP81x5DPXneex1Vt8WgFkFvG7nV",
  "key37": "3GwdriW8pyv9hmGS2KwyEMpVJkUbwY18dWaScbnsqen5vuHEt42AKbFPQhTxVUH2DSMsweqa6eCWDxLU9AXL9iMj",
  "key38": "3dUSCfPoCUSHpW2quG35NrktV4xSJR581c7r2Fa7fkE5qstTs9xCVC6dgjb8bPndV8fDAe31srswGV3UbRaEqRME",
  "key39": "2d5ZYoneEfoYYZw28kmRHwU6eRYnDSCWNnQ6Fnnb5CWKPS3owExsuicgo8ZnYNvo24Eic3bqgeYqG41w4BTJFt5N",
  "key40": "5zNL8JQxLoicpjn99b5SpQQGBYNfAQc7agaHf8zwZJK1C3892Wj4poVHGBe1c7kdpPWUyNXBzkpjoKYcqQXEScwf",
  "key41": "3YnjKoCrCHpZojH6dVozHMXrgUTx3M15qVo3qgvLYPbvnoY4bGXFeB6NZuSHL8M5RDjpDv4YUzAAcF4qehAG5ZrK",
  "key42": "4sEa46CnWhCqC8oQREJtGrdMTbGCPKn5tDPbVVhz7BUXvRSBdVDVhU75PzgMwKwXJi31uWRmbEg8VXr5sDMHJpBX",
  "key43": "2cEPjGkqgGEeozx2pfkdWpxhBqrsyN1T2repQTrnRE3wayXTHWDg7j45UmadQJFjYQLHXwV2mhpgok6sAKvR2Jih"
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
