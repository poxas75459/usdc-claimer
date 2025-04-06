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
    "3vb8eYWY34atKyMgUw7XfFPoA9ZkL3JSU6uX7N5ipV2WcsgEMThWXvTKTicHBrYiUaCa14isB6h4i1JZTzYiE3W8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VG4LTUhdwj83NHB67zTmPCgtPD4P7tZmRPV8CzQquuc39AbMUhKE6EJYmBZ8yjDZCJPZvVaacSqsTh9JCXcVLzb",
  "key1": "28hXRkdeg55QzXigosmtpmc8F7fp8ptkxsZoQNyQgk8tXPaomquqdpsyS1C1zEGq4kCgD7DN7sYyVHu1ESm2kkqX",
  "key2": "qP4XT6gQvFQYyFntkhVkABsctUT3dt3h2f7ErHfqyfwcmxGXhrMMetqtc1UM5MjtXzKZXVGgakLbSVUkqJFuxeV",
  "key3": "4eA4pnfaKrGDWUVbfyf3Tzfe7gv567cCJiNynxcLyCHGx6ZPs7zHQ3FsdhZc1bzw3fzf5AreWtqGZhJLtmXdJxJ6",
  "key4": "4r85ZKD9fYgQpiLkkuv39FvGLQB2Z2WDP6FZ1vV9mahmJ52VSCKkXHuefbiq2XwKFaLV1ob58Db5oAVXeqTjzPGD",
  "key5": "5WSnn4cSjXyyrsGz9mCpEhDF5TvfWeKziNwwdvy3fcmtMKz63n41huNzcaeUufTibFBN2gP5wpcRdfiEXhTEpXnG",
  "key6": "2e39rPTAym3yy46MKbzFS1DgSapJHZPf8hjX6LK8e2HnceLeD93bESUmMLRB7RnkDVUTpYLVnL9GWRL6B6MEEVEm",
  "key7": "4su4gMrsfz3ybb3qxVZtcJ8Xi2F72q4ZuReaMZ5wAVHWwDTs993cUYFMdHXzi14AiQHp3nKjxXUkb1PAQ7izKNXw",
  "key8": "2x3Dua2YYFbZd6cjBWnJjjdcvWrZWa8T5J54C6dbw3MqNCbgwHoTjWCZmcfbXWmXTCGwGZwHkceow5LZzX87V9CT",
  "key9": "43U1oBjmTUEY8jLYg6VZwF3Xs8qmqNXAtPWGPMDd4qLDyb7sBUoZGWDMZ7u1Le3HukBkDSWhCAEh3vPgakX3WLMJ",
  "key10": "2WxFfyP5UQCnMBUW9JCqzQvMFr97sV8sRNkfUAhErxKmfPGSxCibZ7zvCE2LyAwq4TEDbWBBhis8MzwgHJaz1hRn",
  "key11": "2HppEfsqXFcuFJY2eAhUFqbiv35y52WJibBN8Q7JcHD4jb3qtY2rYpm5NM51FmF34qJKfn7GxLAZJDNCkK9R1oAq",
  "key12": "59KCujKzTXd44TCcJxZexQuyppY2j1fbtZnViBZkodpXFm7LxqCx4gahSAQ9b1YziSUEkfRBpKxCdJPHwSES3LZZ",
  "key13": "4TM1nhYTxBLcrSiHipLT3CUFvDJb8uHcxyHG8zYRZgoFRdttxjyzK1bGiVn22mgdapNv6NJcyW8i4XCiJna8wkkQ",
  "key14": "23WjBDPkXUmhpTERzY6JpCE1pnhPtDrWtWfQNRy8rhXw2otuVUdGDBvievh1WDoqZigpK2havgtfa4ZcVRzgivFG",
  "key15": "4xJNFEiNyXiwW18fM9tsn1GDAJbgbLrnfCJBhV6fC2rZwDbWcjNwwXRaBzdrXkb95HK16AYiykL9TT952grY63uJ",
  "key16": "2wSNQzXNXFZEnM6r7CBGm8CkLLSGGhpPCin57uueAnVfVGwy8Ak2k37WRgimrgsbTPG4vfhZpqFTrtE87gYPph3S",
  "key17": "b97ZWZWfqPejCaU3S43TkGFS2itguXHsnARuVeAMCsi5m7vTmttojaS1qmwdqytnF7zYyAXThc6YZDgrrhKCqYm",
  "key18": "26fpXUMxqa7ZE2LXPpa1fGma5tgnJeiPJfiq55B7QsZVcmdrMjzZnDfn1qymqACswJ7YJ7Hk9eWHJCtKeVCPTqQY",
  "key19": "3LmgX7KtAVZXrx15NTcdKH1zP9faffGdVNjGLz8Nb3tKP83qcj8EjeUG9fSbaz5Tq3a8EvKx2o6gcotyMrbzUF11",
  "key20": "5MaGf8tHSHH7EpLqAqAtb5xZLW4b4iq7PWK5MCt4CiMQARYvr4TpCq6pwJPGPrNQknD5xNR3RPvjvVWbBwEzrA1H",
  "key21": "52CHGMU7EkW7SFtCLe8sy7zemqFQgJjPPGQjFdkqEQqAxJvggFGR3L29Gmxy8ApAqckXq3joJK94jpMr9Ds7JcxH",
  "key22": "Cv16w1xeC8hqqyjMfYqqgFeJXZGHMDw2C284XPrFqmixuH1NcLYMA1tgSarkmmMzEX8yP5WRA1ATRMm4taFF7wU",
  "key23": "2uee1AjZ3evky4dmkW3dqXm3FJin7qqYBVeHB59z2VrmkDfyzp7xjRSe9rVgieNf1MpTnCnHkZASQ7Tvix79t3q1",
  "key24": "3Tx3BxSUhPfqcQ53EHoFxcXRsjfdzLmbNptjxEZNiQKXhBkgQ7h6AU84mip6LqoRQ2KpgvKnQyHMiFyKW3R9qj6S",
  "key25": "5h6nGi9azXNvTN8NTZFi36FezfXuNB5cGxr9iQWKsy15mcopnwF6AXpr5N56hdXHb4Zv364vXwYrmgPX4MTxj7Te",
  "key26": "2e3PYQKgZa9GXCr3iDejUpcneE3143EDnMGrxbfnWTYxwC1EAbxD3WMh8xEdAPQZS7PbzGbqYvjFWq6yFXkkAFbC",
  "key27": "pi4saHmoJVBmtuWGBay8LN446H2rZKVGWtEwyF5V7ALnH3P68ybkBHk8UcNYe6khz5h21MZPJd3PAVZGPxKgkdT",
  "key28": "2TsqVJNVu1WHrhQiY6jx5AeZAjyiqiVHgb5yQB6dCXmdwr9dZ12q1QDtKkbrdFfcUU8CoRXPDj1EZivvLFM3ZTDT",
  "key29": "61RQYgammsuimgV3dtDfCWBwLVfLdJ4to74pJQ7k6jBpHKrYG2iX2GajoywpXW61BwjZSxkwYURsXAde2ATTzh23",
  "key30": "4cCJrywK6u3bus8WeFmkKktHsRRvvDTTVscNtfDjrDsXGY98s9v7pnohFNB27sGoCLtC5fPVwbXhwFfsP7tw6dXL",
  "key31": "4tKS9hZdB4P9HyAdmr7JJHnJHkkGvjmJDQh23izfyL3D9gndFfDeuLXQ3LwsFqjiFWzw5mQPjp3Lwe2J8JnWFezy",
  "key32": "5ASB3XQxzSPf8aQUinCHAphpdYJcg2P5YB5grXAiH9wUGJMxx9APkj58ETkA7oMWYY2mmPvbfGdv2dKExC5Ktf6t",
  "key33": "4xtWGXDin7GsBnPXuQNVHiqKhokXte18MCEk1iAJD5iTGBCxQvTcMxz3ZPYJ9ztcgiD6VdzzU9Jo6vrxKTWDXy12",
  "key34": "5H8J8rbuycF1r1PAK9MmHxbAfazVM4jTiRqJdDbbUhqeRu1HpPrFzbXaSN3E7skPrVBVBh1MbGSQYJ9UhRA7JyM9",
  "key35": "661h1monUe4Bf9KQmZkqENZgLPgjGAWq4tuAZnVbx6qMG9rf3Pc6nCDnrnDFcpSvin6eF8txBtaunp4ywxP5Yp3K",
  "key36": "2fHqQtz5CpoW4e9rMgC1qQZfrkm4zgXz1oz4sCQAmXXqNtqK4N8AhHwm5TtePpDMWqQKpd3tvirasYeKzZMeuaDh",
  "key37": "4m6BvDhBkaMr2g3hyz8begfTZe4Hf4k6K8pUD43fmfuJ8mw8vkE9wNcjNauyPD9XdrzDrvZy3JtyzhQoS6Vsts1S",
  "key38": "4GL4s9S8CYgDPd4tuxKrNTzEzuxjZeoM3u4pfRE69utp6vzyHqipCPZVJQLaBgYLPJ9MTMFUNnkTDUL7YnrV1Lom",
  "key39": "2gnQdZsaU7MTPMEa8Mp1JqYex2KmTdCDkfm7U75ks3jV5T4jyfsuwJDuAPS452nccT6FMkzqe12eWzwd6NqSiLNs",
  "key40": "31TSc3uE43FZdtJfySh5RxpVpfZm22iPHmHRGByzRG45e3Zg7W5Lg8foNcxpkbkL2Rok2m3AEj7UQAmfPvRYLeMV",
  "key41": "zgktksTWUFepYRMmy7fqB76BddJnCJHtkiKELkoXvzacbC4ko9gd3WKd3e7aGRM1pik5iRB24ncf2g96AXiRW8S",
  "key42": "3fETmPyjtk5nA7AuzLEN5FEqgQ99D2J717ZXqa8GqoSWEcqt9qiD4rnWyNk8uanEJBTYa4ZgqnCsNerQwo2SuqD6",
  "key43": "2gQyBzjuVdfqbZdHxwEasiE4asv5cFy6izBKyUZmiUsDprFQ42U5qLGfSL6TGgDFS1myoZYZ8DV9n3HrC1oYRXeM",
  "key44": "52gG53s8N8s7AtunVjWHY913JoYnrjJdwDvYX4fJcmNWo4ZthKMm3uaEE5SAvbGYaWfxGcNwY1v43HTRNFYr47hr",
  "key45": "4rQTgXZceGTmJUpCwQZHvT4WNzXXajx973n5fuhp1JmdRbY5Qwd84LA8jmuN2mWkABonSC1fpQVu5Uto9JacsZSF",
  "key46": "2Kc4CF6Ab6B8JngsVGEJGdiUaXaJphXRvmGPsHEZMP3ks1o8cVjkfwJwFGvcJxaros7pmRs2ZTmxZo87pidKXggk",
  "key47": "28RehX3hQMh9NMGSz7QcTbEMew82agvZodTG5nJw6LAnz27VnXLxaa9iX9wotmTjzyvVppx8PUBvFnZs8rdNJ1tT"
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
