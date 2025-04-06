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
    "3nf33FrPWXDyzzdyBZ3VR5jeDXTjziu5DiJwMjMkBtuSnqJCkEr7oe3QLLpscMKqGAfwguyFR8vtwwEh5XL58uhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ervnZJztwwtGF1YocznfTf212T9EcXPc1gWR7ZW47TtbsPXp1oCqt33oHg3QQR2xN3ZRq7aFpqc4yzvAncyPk3b",
  "key1": "bJoQNEizRj5sj6MAgicWCpAQ6XT6Cuydz6VYoq5pSmFyATfrznriqXqNzbjewF1shk8GM8vLo9TQE8gG9HeLYBB",
  "key2": "2BsoN4s34uCtZ8c27eS6CLkw2SRahraGMqo4mYBHzAsSNZaHMzSro1v6gqxmBeaN9eLgFzsgsFCBwfnrgHSjb3cW",
  "key3": "2Xyis3eiM3FARjzBiph7LLwYzBiFAt6MTLRXHrSJYD4pyM39QMLV3U1QxPxbtAGZQR22KzyupuVZv9cFRhZUphbM",
  "key4": "443yrMTYNTsRqo9tcim7QrSrPGTTJu1hbha9mx1nRsEJ2z5ZWVqhBwhhEVLZnypx6RfKD6d7e24YGBdKwdp1eLuA",
  "key5": "fsvRwkFv7FpJpa8BUpU2LqxpoGfzpSyFwbwhJx8JYpJVmNSz33QbSZw1us86p6DsQ8iFWwyx7zykp6CpZSk5iHp",
  "key6": "3p1onZ1AbCfoqZjkryizyC9b47f98nZ5ycjtC8tWgay6NUFicLawSgaSovmQhvCDYFAVAuVozGHmEiRAexv3xRG3",
  "key7": "3zogfiYbge8CUkPU6oKuX4SkKgHwV9BytHHVhcK3BoLFhTpP4dq1T4gM47CiMLZtdpBwsbnPuzKYiXyqPjkjGsVx",
  "key8": "3g9c48jc4PyDUrmx56VzM2H6rjkHEmsBvE9wbLvm1A4Pq4ttD1V6uQBgGCaf4gD9jo9S31ergaoAaRQ27dHTNJbb",
  "key9": "5ySDewErcQkxcRUVeoKao8szZm68Sz6H8uwaQNgDgB85yA19pDjLTPykqRqc5uf56q4ZipoS6byWWXGQtFXFBcaU",
  "key10": "4sVwJxFW6fUupZgttMQTacr49hZDdjU1ps2eRqThx5ZSkKQ8DyQFXYPw5Vyok5qUawXMd1fugvbUYyTQZ9AiLwUH",
  "key11": "3VyWc2VonujejrbW8xtaquWKqX4FHeZgLtHg4e9hh727kH54NKxKh14cYkSjz59rroyq1vGxi21AqcJBkPMAAEUT",
  "key12": "4KLWwMUF95SmSE6zCzpoj6ubhjBxFEZMknvHun8mBpVVqJb76ai49RMKMzykzgfwnBCpC16seyveSX3QhxF3BTaz",
  "key13": "5VRB9zqNJFnVkwDRfB9GVE9C3R5Rn8BNjXT3s4oyvpBjHfhZ3D71wmiT7nKWwE9j4ENp4VwzcJ7rt72zKHCrt52L",
  "key14": "4gdTkoiEV8Hwo3opxWZinbquTEDrvNBwQHsjiFjGHWanK2icWzqgTctFvmjo4duyadQVKbioSQ66uzLxxCcsoUDJ",
  "key15": "r2kppV9dcRgbQ6LC9YQBi2XPTKVDDodUb4ZgKtLrqrU8uFB5WgwRdyyyNZSLNXA3dH4U9xuG5Jcq9Wo2pn3QFgJ",
  "key16": "5aVms4vGchC52dxZWR32bSv6Z8GJb4s74RgdPFeRZCnyynMWdnWn5AUrZqNMXM7BBgB5Gs3gTq8GMsEfCVYFcmNr",
  "key17": "3QhKnP49Ec6dRJ4bWG3pwMtLXyPErmQqX3WcAdsPxde8zyGDpNDiotK9BVviVNAVBKxn9Ey9NTzXFidNUfQ8NfcQ",
  "key18": "5eAcsZCN6F9NaFwzQSz1TkK8gUQQjko2DqmybBmYaBo5Vjdf48iJ4pz7vgh51BWt1nFGACEuvQ4pWfrZRvunmxZr",
  "key19": "4q9KXth7DxmbkGRpfR49sB1oHW3juML8g5BL6vXeEW5QpinTm5TDPLtXWS9FrxND57qjkcwXrT2jE4AcaqG8xVde",
  "key20": "4EvNX4XGrYE7qC3catCE88N6hzCVTLzLMa64yiTpa3Ms9yj1MT6xRL6dXLTb5ZdcchE1cfiusZie28Xe7dwSuCsi",
  "key21": "5G7rHSzdk3hVsg5U4CXytT8TPK3W1sgHdt5VRyZ7xYX7F4kSKo7fT8rEEKoWV6Ud2HQEjsY7ZAkJqYYHvFyQ1qfa",
  "key22": "25ho58N25YddPC7gKpUPA47hDELzWdgky4gU7MiZEpFV3nZ9SVC74ZAjLFcM5X16UicAy5utpGcpahihTqcZNcq3",
  "key23": "5JS3KY5gJngEXgHV5UDrbV4Rb1fjDjZPYtanr1jkHQPHFyzchCnWz1HEPofbFANanXvSsxc1mhNLHh97HmUaPhFs",
  "key24": "37248wBhafjpCUDySz4eCrvp7jJNZCAdFGd5dV5VYy3A9668cymmsTZejsLXFxXp313Uv7sgGgqiBWoExMjYbbXZ",
  "key25": "4jV7ZT1hd1RqBLGKQh2MeVUAFxnGWERidYGagWXifcCAXSvLa2paf6ZqVxVrNb7MfGBtDHqx7CeNDfX9aoh4c1RD",
  "key26": "3J4ob9Wjz92PjQDe1mgz33znY4h9bCFWBRLezU4vrEZddLerfE63PnQ3CWNb1HppM7MTYmvHmsYFpfN9YdudnAty",
  "key27": "2P9jxTPZz2NEykdB42c8fFQ4gtvRYe2u2fyf7TRXb48EmybqqduQfCu8C1EeoreW8fmcEnJm2oqQxnTHr87Y7iFX",
  "key28": "3rrFXDZXCQ41udNxwy6RbhaGfP6wDQuYj1F5BNX1QiibULLbrw6tu36cRdaZ7qEuNtdrspKWJNTiSmHxRUb7jvWL",
  "key29": "3S34HLAzqQ4XWB3TcMZFaiT4hMyzSw3fHXQnq5q51WVXzrY5kp6Q1WsaP3L4xPAkHLkJ8LRh93dYKTkbKJtRDZYR",
  "key30": "fufhk5YQrYeuTxNNtHLT3FFjRJitFordq8jDGTVtT4SJeCfUeK5YKuQCDQTQHhmu6UcPc5zhmBQGhEeLUDjKiXo",
  "key31": "4gYv9mibvpQm56z3eJdkaHc4pGHu7xEngoRFZCi371PBpeiJgCF7sDewdErwx1CxkpxCGtdxJXcaLJrzkbCBDv6S",
  "key32": "4VGudhfVUHfPrdwNg4KCHJKE1BeGMppkfszr35GX4U7wVykCJdoipKkY8n2UnMAqvDq6MjkFTdVU5EM7zHwZbBrd",
  "key33": "2LYuztrQv5o6Rk4UhnT3nQbFZDbfJXoVybWnher6MJKmSo8tsC7saM9uakg46uuWLdv7fs6XecpaGGigDXPZK5q5",
  "key34": "2ZgxgP1UiCZrjrpVDVLmGwJDmxqCBYWH7fescv5sfugBvxM6ewXkVgz5tufBY3AMCNsT6qxB1ELH11rjvFV9MLdR",
  "key35": "5onsJH6oNBR8hHmnq6SpzHtT4ZSqjnYsYPzhujMkNosqmSdG7PkPuho32ZijH4s7TJUu71Y4kZvRtTTy7RRijsG3",
  "key36": "3P8iA2oK4SFUoYYG6mdRPYKGUbeJvkc6v9nJsGbgHFgXJWReKPkNbqCHYX4CYxJepUNRKEEfCQi3CKTQdVSiXMLz",
  "key37": "Co6AmJ9ypPHr96yyJCLyvYEkjU6aWyf6VddvZXujSCrH7dspNRM4yiL4HfWvtDu1YLBfMQhVFkbTHa8Rv1cfTVf",
  "key38": "2Ub2F3ZvQHojHKe7Jr4gap3vJAqCgrNXoTksaGxWvVM89CKVK4d8diCH9ZWQzj1o1rCjjt9KPtp8hWNrZfdv6SuG",
  "key39": "4A3qyxoPSDxAgLx7EBEP21cieAg9SKiaoELWKdGF4BZqay6k54Y1iwfQwECCdQj48bWJ1yDMtf7Ngz6tNwcwPSqM",
  "key40": "3oA73y9qaNUSmfPZfGR472szCUFF246sZAZEEP4UA9QJ7amkku2ZLEBuy4A5EEdb38enGAEXHQhJV3Mqm1nAnaNx",
  "key41": "5NYzjreH9MCtW5CmaYhj98VMVPCMrKuGsrB2PKwVdHe2NkMUq1Q71TeXnMmxr43zFgTNxVihBkTcfMPHc5ndLwVj",
  "key42": "yFscHcRjwHrAKK4spqicCNNxhJ73FkT6L98vv75TopRTNH4x1uJpBMoJqnE8cJPmBZjsLYd8KN3Ta1nUJQbH5nF",
  "key43": "N73uV5KC2Pkaoh9t3BDoionJenY8q3WFpiWhCbrHBYwSsA8EjHvjZY5ttK1QCzqSrW1gpxo9fEoL1FqV6au2ApS",
  "key44": "4hktYwakq29w9UPTAvDhAJoVdkr5qDB3Y53V3KNivAD3733vCKHqVZYKeXSMzSVxNfbsj2st8opRqNcn7njq7UrE",
  "key45": "41NJfivnxyny4HMWEH2fZjYYRgYTvs78vTkb2WBJHsnJ6dfhMm3QHbmTbQBrdSWa92a3CAzaYDRLh7zFNuVy34f6",
  "key46": "2JM4YpbNPuMMz5RPYNV68rYZiQsfebhACNWYSLo53QaiE816LtExJAbhFjK434CPNpg6govE4R2y1TUHQpjFkX6q",
  "key47": "5QtLdWs1SmnXmwL9Fbu91gVjXamEmAToYathuYMAyJd4sNESXcc6zNBhvEiaiAnJDN7dyxDZM1Ast1LxC1F2wmRE",
  "key48": "3XXpavn2rR6TwzpbiPweyJs4TAhDsBcwFRUo961Xg2pzatVUhRF4hMKAfvnke9FZSHzZUXo5sVrTpTgWe93hmnAx",
  "key49": "5UCPPhaFzWmu3yKwvuEhDnrh3APBVUYS9mZVQBayzzHLSHVK9MsbZuwJBDgpzywRa8T2NFd9Jm7qGzqrkJyimUNk"
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
