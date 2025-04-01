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
    "3g4vQkftuBzRGNXBCdoewXZ7h6qyZpcvpwk1NuUMvKoVvGnDoSC5yyKGBAyCG3Wo3ELj7V9fcUE2dggH8bzvkcYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37uFMRFfuv8oRXVvuWY1XW8kkjByxFKtaeihuw7Yp4LxV7rGj2SR79Bxv4QrzhZCtKFNUrP8RHpwoxvhZoCGXMjC",
  "key1": "3KEjGemeKLtMDpaGaWhEiP3BUWyfhwWuhK3FxTDbPCxAyDtTTV1SGgk2BpBhaGafrEqp6gq6scdqJRBLmxLKk5EW",
  "key2": "RKB24xPFHvW476bo6qs2gVtSHyWeH9XDg6FH2ayKw4rbXKbV7R3NJrmmXSgh1Sm6ZA92CvEA9hxmXhjT8DrVVat",
  "key3": "3f3XvHGmZMuznd9R44399oGVyGUUgVwYqwkroaQLJgfFi7G2fo9TCNK2L3yWTiLe1zrTYacJqvcwoVHgrLTyM1sB",
  "key4": "4vEV7j5uqwosMmQKJ3MfAHpfD16Ax68Q9jmUYxPJMFjTqKhPw6nBoHyS8hv6RzCQ8RXHknFFfUrFq2mvzvBTzMg4",
  "key5": "F9qnbaXP5pFv9hixMj4j51NB44JqPrkKu2ijFyiJNnUEiCHv57QZiCMtn8P2Yh8iH6b9NnrnbiyYMLyPdcFjzit",
  "key6": "2JC8CuE8RYe1AEtS9e6Bn97QXiMX8dVT4os8X1kT3ot35DUuKSBEzg4eGY7ZY8kM6r5vKEX7khR2rxehj9Q2rLQ",
  "key7": "485vrPj3TJQyb348bpF6XTTkKNisanu81udYPCxRwirFnTcjVP1sLLr4VZ913xNK4rYi22YTFFDF8Uy44nLRhYW6",
  "key8": "4x8zAebQjRt8NFSxqvQyeRTD6W49vCgB2dpVXFSZKooEyAa9JMu8tvvfwadnDbbWcehw9CCxjYqeNZiFiynwQVvw",
  "key9": "4oDX6BSXbsFozeicvAfr4TKtK6cSqj43DtyzpxvqxbnFdeehG3SFbEeH4WeVWEb9YMSaQrALTnUYF5mDAwBJT6h7",
  "key10": "4oEeDUZWHunuaNZjXjovRopGt5Me9GPhVgqW2gU1oERG27eWD8g7FxfUqThsVmrDsNB7qqsChB4m3drWZrky5VSr",
  "key11": "5c775bWwKjjgQ1HUyQc9ts1uuA3zs8HTwyQpXS4APBnMt3UaHEHrQEJNVhBnkW3hfcjPXci3bhgU9i6rMeh8rKqG",
  "key12": "5T6ak4YHTu95HNdvirhevNY3rpvT2Jox64xHMgZ78FVG8YjpRaysbHyThLpj3k1FxME2rLEQEvo2kNhTBEHU6t95",
  "key13": "Mi4WodSCkVgu5GXv6PHYGZH7Ld8UKB5Hs9YZFvNSQx36htSfpzATNmz8rkS1xQKs7nTyWtUHbDphoFM2pBZJSxU",
  "key14": "5H382qifWdf1DswcActL4v4yvkdKvfM1aq7GCxLH3wKRxjJec1ikiPZMD5jn6upRTconauqqMcjjfnKsSxaFJYzi",
  "key15": "4z5xdQWef34ZGHEqKrC3adJ21yJ5mpWZrf1uCActndxUATcx15STFCY7p6U58uydL7T3yPyvDUpcK462ZdYcBd8A",
  "key16": "3vmX4KJT3ZWS1YqjVytjG81TFGyE4pHnCqJWNYerordDvqnYRAF4ybLUfLSYtcJt6u8t6M2ue5oL9QaRjsmPkY2m",
  "key17": "cMKbBwYxgiurskA86vFxGxgpJ3i8BueDRjtZq2heuqcaiQdwuuoHwf4b8Vs5BAKF89NaySViQ8R7XRz9xHFAbaz",
  "key18": "zL584dvY8K96Yn68eKvv3VAdTHoKJqQFVkwmPBpuVvYqmkRPZsRURfqKJTG5sicKtDVZ9v2GxTQp6dbU31vtDGz",
  "key19": "5NVQ6Kg2tEMbZ2zrMsymib4VRcYeCESCPxJ9wsicV7qxGqab16rQu9pWVi83ekEr5tv6UikUYQUVtdKqwxWWVRN6",
  "key20": "5Bf7nJT7L9xgD9mJcyJ8vdiizN7NaR5mdTgMiPkfWQSgM7wNQk66uqC95ey5Q8dP4qgerrvCapxHQxLWvVyWJ9nk",
  "key21": "2oiL4AQQ4banLyuzL9Dek7CusDuFkcWNzEWicPGqG6g9LqKXd3XSmpHN5uRbBptXJkDVCaaSYKdPygyXdBqNXh53",
  "key22": "JDgdhNzsxWwknxqJzHaZC8kLb61jnxQhu6D1tQPHGz9hwiCo4siaT9BHtzwxqkAQwRDQsTpeA6c2an4BB9y4et4",
  "key23": "xUEguqTuNWQbN8pDaZmy2AtLoLvVt1kmRDdQoNFnqnmu3nmi6kHzdxB7CbJfuSQzL4NhYiVgzGjTYNuf995FsCw",
  "key24": "d8JkMd4K5DDuVAVavtfAGwouNZuWyzxa9jHfSdfYAXF4fwQD2cAmNdJuxzpxJuypjkzYvU4R4BUkpsyFdCNS1XT",
  "key25": "243w52hQzbG5KTxGreqrLRLt8QdUBNf1zBGJhLb9Uvzry5AxJ3r2yhsAftATirKDnWrtRJ2CiQzowdnVvccmmqMQ",
  "key26": "9Ucq9tCM13EXXJ9br9tWuNazxcBm3MWxy14ofBpmhA9dZccHov2noijo61uR2pXunAvrujcdSKETxEn7wcKFd7t",
  "key27": "4Ms3z6tTzGHHrWDULi22LzNx2sMD1baTXNwjZtLwoFSm1KPT4awko72GjZ3YYfBtwbUZTbdcU4gwm9PthLkTiTkF",
  "key28": "sMikhSY5HTBUmEvNxAsnPqT2zTrGwTPNY3yZksQpuHZuE7stWGdo3aPhXRfag9eR2LBq88hNsU1LrNFL2v1b8wC",
  "key29": "5medxPmCQW7g2TtnPpqQUemL6NF9koMbrBgRc7kGGY6ReK9SQLeM1JC98hu691SsrRP7KnTZLsCTwHhiDdnogyCu",
  "key30": "618qKGD1hNinFLztDuzAffnc8PpNL9hoyWA1hG75EJMxBz9jb3TC3ExEwaJKtjD7TAcVuQ2mtBKKJj26Usm1PcQL",
  "key31": "29HWfdBiranQn6qNtDAKwPr6rxgA9mJcHKZB9eneZWu8u7XPdBZND5K9C4jtPzjpWZomEdnid8UakPX4yoNMFBpB",
  "key32": "4JXCGSbzKDEJ8mwCVX5cwcTsDvJDTTkmFJQ7ypyG5zD9L92SSU6AhkPJd5P5pWqXpn5q2xCg16BvuKN5MKopH271",
  "key33": "2msheXHkj6MyZBPDhx17C6P2TCKgdB2pYFbSuDpL1RAsfSiLrvbxdT3uLieuEv8SpUgFV2PeVXCYo4igamUzbDRJ",
  "key34": "AH2kJcjE46ct7MuSYnC2yLbGukhW1DBuGZGkBAC1uwbSnJNgf7RvPQACP14xGaPjwnKtRwHnUaa1FJEfhZq7JcV",
  "key35": "4y6mAmtP96iUyrMRU6nkn7t1KZW8iHVp6ub3YAMbL6VHR6W8DZT6afuJAgH72BN9ribazXRowX7RP5UkMC9ziq8n",
  "key36": "4vsTRzzB2aCLYE6xtPjPP1eqVAqEC2H7nwfGKdcCzQxUBH9dAbB6HNg4YbWjp6GPtmGK3fZzDUDh6w7Pxxg6cRZX",
  "key37": "3o6JxetQMRNuQz99gnW2S8iD4NXn3bHJbtnKH9E6H7J25wCeZWmN19Ud52PMpaB3yvawzrwTJLAmkPvpS7jnEA1r",
  "key38": "4F5UGjGH7RnbPPBoEr3eW5Pb8rTMRzumLU6z54eZsATfXttawFvcASWhfJvRBdKCvm4yWMHxtKYAfzEwJ4fTGYQC"
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
