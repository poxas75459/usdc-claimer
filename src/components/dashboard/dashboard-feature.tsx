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
    "HYsV81vDLVi6CTLzmXJYLfHU6kFmVQijbN3jMduev7eqtPwNnWsWPDj8LDJ3KtzWojtj9vNyJJzVuPj7fwJ1WFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iWB7eB68X8WtjZzTAKKvXPVMogsTa2JVajyKo4J7AR3SArXNBqaRPaNkqtyP3wYLnJHDQqYcALCxx9MzaRyNJ4H",
  "key1": "3J7h4JB5NSYzdyjhJYSdcJ8g1uejKuXAzZyYw3KudCSnHHhhPheNj6RJ6NyqNu4nnEUgCr6spQRioPx7aLXG7ix5",
  "key2": "4RbNqnw4TwbU3XeNaToCEcE1nNrb4AA6gdeC2U3AVJTfGtdwtkSGRjwDva7eVtRmFBS1XxnA9dN5yatvQgAXrotH",
  "key3": "49eUra5wqpQic9XYjzNx3s2vtAvEXSvgXtMsJfUy4ndCEVWFoJ9X1a8Mz5ckcyWDuT7yXAWeZwmeTTpYoHWMFRtm",
  "key4": "5SNobe2oiyqCy3KHFTY6FcPJWdFFM7EftPYsiqmDYZxmPRPpST8XJG95MuDPaHpKbJjXtuAPs8Yb4NypZig9KSgS",
  "key5": "5ruRnFmK85xxABroMMsjdMwP2QnJS2HRysrgEs3E9WRA1kbY9paHZi5gRCExbiWZKJ6hMFg16YvyzaBiV2WEMRK8",
  "key6": "49G2RvhvGQgCNBceyTK7a6pw1CQzGzqW75jHx3T6tJULWFEzWdDf2N55NWWGJ7tEDNgu52SdzauEQWzheJQTTgnq",
  "key7": "3Dw7MwH4ZqWofsL79nBMEFZvaKfUhUNh6u7pJ36wTRj6tqXWwALSr64WerUsxgK19gr7k7cWd66895AWfaAPPWLb",
  "key8": "4qknzPVx4pWqmmMiM7dynH48tRMvDsAemRHZL5667mQoLSSHbSNhvnXA1dKngB5Nvqj5epMhDMqcA63NZHmLuuN",
  "key9": "2YHnZtUx6AExqWuP75C4HRw7FnAFnNhCKMnFLiNzxvpaksFN2cpK7nqGPn4q1JuvD4ouxT4eT35yUSwYSbBcEgba",
  "key10": "a1v6n88THpwVvq5EgDmqPKnwCELWShv3GAwHvFqTzdbGyTG3kMVFmN4czDdacKyn57JQjAjkF3tN4MHvpvVv14g",
  "key11": "4uf8bXNEkmLafSBsTtz6D7K2EZpM6QYuJXMoBs9WsTzGx3FP6U6YNaFDaxySKDtqzRauNCLTxgkWzfaAhXE6gxir",
  "key12": "V1C3UvhPdhCdgm849tRYCVormmpnigfcLgJP11dm2nbE1296a1hd5hD7im46hia8H3xDZSoYH3pNJMx6ap3DudA",
  "key13": "5dWBUYFKb5m5bwMD5Lb226e9RFNmaYesp7Nm55kC4WPVAo9dSdu2KFNXNP1UdYoM2rZpwPk7xs1747xUB73fTijA",
  "key14": "4XTonUZij6o2znvFTyc4rLpb2xzACdhE5gxuaePk1NsRQZM5thdpyKNUFPwfJvgmjkrEkoQzmJoWit35SY6uPAYM",
  "key15": "5HTCQ8oJCaz37nXqNRxuBZj6hArDnNrq3n5Sxv6ffs3a2xmBrXjCr21oWyHfzMooZKyeeegFK89jQr33WN9uGQnM",
  "key16": "4nWuGLQRLqDUFC4NXYQyQefUSWkdDi9Wp2MHmBvdTSW6zb9syPqRWBQSonRQcVUWDsDAK3gnZN5M84W4DKc2YXyR",
  "key17": "2srNMyHrVufun7s6S3yFuHGytSy7mCb6Vvi3E4v2iMPW9tW1jchjPTJFNH1jZq2wQo2HX3SEd5JcDcwJrU44KQAT",
  "key18": "2cSYuoHp1g6iGkHbNYaJm3MtW5L9sytvbDh6sD71nfj38PQYnFq8s922brdPCovkB2vSUp8FYK5k5ULKHZnC7jq8",
  "key19": "4HescVmY2SUY8mwhimUafm3Scg9EgUGvFMoc8X6YPfULmoq8wveTbPKNC8irEweFENErj8PVEr6GU2KzvakHN4dV",
  "key20": "jVhrt9LfB6SR2UShnrjjcQrdzSsDEMsK9LEDBwRfMhqx4Z6BKbM9vWzSJDFH3WTxdCYTyfs2bQvtd6QL9koqpk9",
  "key21": "2nDB7yekjhtXff31bKf9ahYYt2KQga6HYqRT3TNKoZGuUijJ51YedgtdPhzshHk9Va12QK3xmELPsiLzSZiTybML",
  "key22": "47ZsHKsxJtDaskJ8KJnPi2awZ5Py8hkfUXhgkGMiJQGUH2crk963Fhf4TtrwrfkCMR61Z3K1rgVjTCNXLSJWDCYb",
  "key23": "3XCN9o8XrrdDJbr3ccWkykoJbfvVeatmL6UhZN2efQzzBzWiFYp8oZL6Tu9ccd11iydTnWHqKrc1zJHkXy6PG2DS",
  "key24": "4R6VkCEiBcfEnrLd1p5RN8LPcwt1HM6pyDHwDqzTMD4HPhiV5at5ViMT5DLXUfw2JSsFXE1Pn8rKhRcz5SgLnad3",
  "key25": "3bWs1mSvE83VJhq27PXekCmgh9n31x7ip9zarZeXCUUDfNuCQtiuR76RhSteG3gsfCJk42kK9jzVrqQBjyygQwF1",
  "key26": "2jk3hUCfAkD7dJgnKfFLMNzHxQ1SyDEqAjxunrp3KeDKc4UdQWTuV8iQqDikpi5La942RdG5Sh3iJfzTMFdf5mVr",
  "key27": "4SvXuLD9fxaGUBxDduQZH4vRH9EovTjEaGuRrBAmWE59ddX764yYs8LHFdKbuxAqDaLeX1qfWxHywqhHkQHniPBe",
  "key28": "5MXsqeZAFjPuWEknCqzVsTYhKvoM7rXYDzmcHW9W9LJx3ezqx61ZtYTnkG3Ln3hg32qh6F9fG2NG6wTNuUxNBhnR",
  "key29": "2rb3ZKpPWX8pqmeR4WYS7LkCrQadWUt1MZJmrfGZxYBVtJ5vfJ9xUqBmBMioaGnRBqpvhnxP5BrGqS7fcCoFSCw3",
  "key30": "fKCx1ztgt5aWJjz8ZBd67yhy5uWUnVe99UGXwtyBNyVDENgAqUqwfNGix1Pix5g3DoyHABKtyZgt4bHBJxJ8jka",
  "key31": "24iAQcCcBBnCU6sEeCSE3k9ApXLnPm7AgqZ6sdV58asTB4esWDdNTk9ryEKjkWc6ag1HiSci1syZ6n8DHrBFqxcW",
  "key32": "2dfTgeWxEveRP2qHQ37co72mG1jUdrumdCTq9SPR8N1zrR6pWtsFxSuPA4K73q2YXiztno1Y7ubzrGam68smgi4F",
  "key33": "5JLaz9Xi3wQv37r1VJka1syUND2S8bWNcVfEpSbQfsFhDVxU16pGGDA9fL7ShKbx15NmiVzbbX74qaWK3kXQzMZ7",
  "key34": "GZTBqEHkUJMk6qzqhrrz8gv2A8uAuZirD7CLDuJu6oiWHeXKmAsS71CiDybtdnNC3NVXvWXf1eZeVuFnsWwT5Wh",
  "key35": "3sxN7GuAPkJrmrS8RWWdJHp4noMu3E7Y4AfFq9iqhdtk6GwQJrmGQmLBzNUriDKGDCAQ3PnwwZgmXvTgeRJTpgdW",
  "key36": "3JTWvy5SbokvvbUHrcFdtviePcNxN5Uo5HcQ2RstG9Uam473EpFWdRW2DLLobAeXBEavtpWuB3Ztgy4M8MYyXT8H",
  "key37": "5szAZGaxfW5rBDKiQJkW43HoHqed4KxUBDUf5NWbiaPbmrM2mJQdxPGPTp9w5x16X1CFePY3gngh6agpis1dkKtL",
  "key38": "3bjB3B6goiarHnG1aMUc4P2aKbuHry2BGxHWX9WATavdn2f1Fb4q9auw4zUwsFFBT7noaD52xaaak9cWDYPZeDvF",
  "key39": "3r1UfTPZFkgbUsNocmCGpewsn4ELBknxND9guH6FgRntMYqhYx5bygDeauPyYCmYF55ou3dcNj32Gk2ggyDtNTn9",
  "key40": "4ogQWE9nU6Kn52b9CscmZqxhCKQup9497TPC3373N39vFg7qDdWcndUdSnz1dKcUiXVQcARo7HgjfKc3RNWm6Ukd",
  "key41": "64P9EnJE7B8zvqgnZ1ZQeybeHVY2LooGSWf6wMNyXJNnTV3jAtRhd89Sxfcx9kvVX8f9N78uK3A9BEgxAfL8Rhvg",
  "key42": "4ZVTr8jsTw9cLwst2rfhDXxftGw4wBBooFY2PypxZfoN74tpd4yMkbqM83ZcNcbxcCyX4y6QeYkLY5QCLMM2TpCq",
  "key43": "3UqGv71UTmmuyrcqm3kWGXpNfZdFjgJCGmFq2ec8FiQDBwoKB7VjZtz4PoXMdgUH5mipCWMt1WQt1s21bi3uq6o3",
  "key44": "5Vor55QHAv25bFaErfrBkVWGQi3dzj4uaMsz3xuXxhKJhaTN5kuEhhb9qF8SQ7aRV6D3BCRn6SGK1hwtvUySEbaW",
  "key45": "HKDoE3Z4oZ6HSvAHGBh5YmLUHEbCmX9Z2feaUZ6zgriUnKb597MuPfBLVxS6uDe4QgKjrfJdh68Tji2tbsn6UJC",
  "key46": "3nC3JDq19ihJGW5EPAXpgdapSvDVJQyPcHyhkRuETcns9DQfT7zNzr4RP9zLbePnJahkAifDhqpN7meGahYTigQW",
  "key47": "2Xq2jpkun8uyk95xrgFk3UnywTLwc1BkaJqi6USEahxjb1Bp1RvqzAucf5zYerdPvc1FXLupPvCqgpDQWgSqvJz4",
  "key48": "4t6YUHTdrNqLqZUEyKE4wiXe1Knxg55MmUca5bE2repYio8YkEm8nSsGoTMkpgVdMMf5zJTxQkiCP6h5SL6KiNfG",
  "key49": "4L8YYATJpbzPXbudcJxDd3iqP3qYVo3APTVvvYHTgwExqu23LgThEsScrpZczHbz1J9QawZ34eaz2nA285aBYGYU"
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
