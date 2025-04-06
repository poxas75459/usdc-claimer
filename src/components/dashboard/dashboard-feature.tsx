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
    "2bsbzt3wyR2YcwQx1aGLfsK8md2jjUgVmxiJfGBbV9MKFpYLNzFebjLgEmrwesQEJf88vr22UoxoJZkqZYUzaENs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cu9G7rwQZucpiymoNR9DCRuHGdaZXKaP9wHiwWdMLFBn6HvDgesNhKEJrv4Xjqc2nn8KfBmzX42CqR6ayN6nUK",
  "key1": "5QcKhfMz9SVvGuYAKDHbYg56mR2YbpuyWxGwqGnGN2GUf4a3KunEzznj7ZCQ4N9JpHmY8Mh3yzfVxtAazPCHnb1v",
  "key2": "4XFjMzUeY6ih3z9C6dsMfK2Lf19RKHQijT68MmEbDcbj6sqAhembejsbdYQb2d95wz6msjfHb3bjwzFP9FEeT7q2",
  "key3": "4bjQBZj9rf6sFJkerp35hvSUUks8i7w44c1QC6shmnYn8kBPycnXAaJJUM9SMtf5c9MkZoyZhYU8pZYAJd9gkKB1",
  "key4": "273o43dQgHvRiHy8NzMCRRBmeSErP4v3F7tHEM4yuaJeYBNqpYfKjRZPQT4eckV6yqWhuLoAXD58pGy9pf31sEX6",
  "key5": "4NYxh1HtojpSYDVcytx1YNDdSz7nMix4TWxsDYaSPwzYoofCgUEtF9SHrFL8VE7tWTkP5sbVGSNMj28TeAVYLdvk",
  "key6": "5PTtP43nNTTZHarK3HZoug4JZqwom16nAhYKb1pgL1HHPW2a6M1A2WJy8mHAopsnRpMK336Xb9aUsRprsppb1zAZ",
  "key7": "3BdLb3f925t5SLRqrhKGpswFp3zUR6N5vk5sogwT7gm8qeuB3QfWEckjyKNJeuvh7SmJCi8vWM2Hzaag369V47Y",
  "key8": "5bVnPZXWRdTtzHEzUuFMHu5GAGoX9Cts5wJfs8jTLNcvkPPitptmNHBsVXdEtNRPLxUkM8E1Bxjqo7LPRQyVWEjB",
  "key9": "agzpMNnTmVgswxzrZbaAP3wUPaoKMS8YKkDyRMHBHUUmqxv63Rd456TbzxS2mNKLv6WYr4Z3Y3dXTPsjfyhrCM5",
  "key10": "4D9Tew62fdYQJwknf8pNbE9FtAquPAcCLLcorSVLSfsa6c6nJoKkWdsaNjz5LQRHH5qvGriP1LdTtYsa7KSYBgUj",
  "key11": "4wE7VZeXwSW1ckm9xUTHZtR1ycHRaFMzkCWhXRR9sNM2g9i3uGVCsiGYPdRCjGtKebdVhAPZSH2rnGMj8nrpmEG9",
  "key12": "5GssarKgpuhU7qp2U7TbSvZr4TAmpjRrup9uiUXzBewRqgt9ca1WKN1F6hKbjAiy4QUKiMJ6vN54Vkuc4omPht2f",
  "key13": "4F3smSSZKgfAU8VxBjrQVBCW98GtxgbZBWfdBe4NPoFJcrDBm4PEAuCw54jMqn5D9ws1Dv8PnuzcVbvxRhYpmi1e",
  "key14": "4ii7KVDL8vZvfdGPkP3Ajs5t7DkA3fqWiDGC6ohaiRiPsKfTpRkWKrCSyPcZxxhpBdCvepi5aL3hg7Aq5hPQMpX6",
  "key15": "37BSNxoVJcd3AFkt5VKZQBK6L3tWMZX3k3yzkVZXHAGPXgxdXUhd57kPJGePWkWj6d58dsZd8SStPgXfgNmPqcmh",
  "key16": "4fhdKeqihHFXVp5h6TcxzwYu4hMyRWfcJMcvMJpe352WgeXQ87BXTarZ3P9PCtKNyY8AnmQisf9VhYinw3Xe5ESf",
  "key17": "hixqHCq7LwhqBYUK4TxEWCvdhnVf21E2YX3hDmpbPyJrAeEHu8Cr5YfqUNnsNtfpjbHjtmyH6Z5NdFrtnVTegHX",
  "key18": "4ELUKy6MF4B6X5SwXRJhQXhPKPgbfJUy3McoC3jV5KrF6stZqL2gyVeuwnL1BhNoH6GqDLvmjZxQoihmeweUaxQy",
  "key19": "4E179uaNMWfyJazN3bpQbxj4gaWqSf3ZBx85J6H9UbAYnszw5ysvy1xGFsdRiQhdEkXXax97FdPW7KHNKqn586zy",
  "key20": "3UqBvpjYaT5e3pwKaHVqV3YnTjAbLzmgL29AABMmDYeWZjTU7cVkarWsMEvg3QqjbgVo6HhKtuTJ1cxdAU4wr7yc",
  "key21": "4cqRFZxs4FeeAYPVWrtyA6owf8zrt3aw7sw5Ek5T6TgY5Cr5BZxsM5RASDXzGopaQTBiE54S5JUXkpTjdsU9Fbyt",
  "key22": "mj4hPwsbPybQ6HKD6a4djGw5cUbUdTUomCKqVQ4jbLf57Xcry3JehtTupV1QgiNVnZptNWmTw26euRzWaGJte4q",
  "key23": "5efBVMC9FyXEe2YA7sdiZQBcjrAQJyYj2CTxXz9QscpbqYG5VfZYcyyEmigVEP4agJpctqMJmmWpHrFQmEnk51kY",
  "key24": "268NAeTjbCSYygtpwSB3YQBexoAHQRNMAcoYSB5wWjfTREmFpRzddgwkaSYoZ9UhyXeFYT9JYqiXVJ1zuDkFCXv8",
  "key25": "Htu6kdto2Z1y8iA5A9EcEU95s6Ds3CWGXqKEULzKY7r7DZFW6PmUUsoNeqGVzfT5Syc6TKCrnia6XB8DXPu48G8",
  "key26": "4MAd42bG1QKeVdfUoiTF39Xx3hddtSzYfT9YkNumMrKjgXJFBeHTzSQ2SJmGYnjmMGNmgHvNBk13GgEC4CgqjDkD",
  "key27": "J3XnS8vVNKUcbxbMrFZdn53kySTy7Kw3woviF2V98sG2DmLXbWdNKSKuqtrgLnSr6dQNnuwpCCzXg8Wz29fSkbL",
  "key28": "5t11x7Z6ueixTsg4Xvvb7R6aC3ogLgYxeo45quvUjAzGYXzdUr9jPCn3ToQnkqUvq5FcbsYhpuajNLrCNWJQHgZP",
  "key29": "47B72iN5nbovJ84rkGpwhMJC8jTfhREWK2c1RWSB6hLWVV2Ct2RE4Qa1Q2QykRMPXcQetYMB3buGoHZRdQatA4Nh",
  "key30": "4wg4Mg9JVAkE1MMAxbd9YkosHnz5LN8VbebJyLVxf738Tzd7S9TT67vV9Gt2azvXaEp3KLdSTckUsVRZrMtbT1Lr",
  "key31": "5DaMZEqTmveBW64yM23vz9fiVF2MpFjzp9r35RWhAezpA13jQdocu7JTbetfTsfXJ5sYjC6yd3W7f5kWzpHLhHBe",
  "key32": "6rsdFNm4L56bH79Abm1pGtXea9ws15o2Qa3CstYfowBLvjVu61ngaKSG93G1VRESZCdKRCo9NQ4cnLLKbuQYgag",
  "key33": "4v9fpN2BYahuxaHBrKVVpePvjEFnfZNLXoEok7ECKzCG9ZQgu5FUw3zsoMNfKQBjHCWemMXdQ7XmXpqSk8fo4DWT",
  "key34": "2N9ENqPw1DBCtJ7k3wgxEbRB6YDqjhPSJXM1qkadAPHRJmKR4CStH3fCcs6dGEEmUy7g4dnfe17gjjctjC6SivLt",
  "key35": "2NJshy59U7bZvqxHH6PCRjtG3mZbr1K4k9z5VBeQqqce8QMrTWFMLV1UT6eDs7njEKKAfrUzKc9dWkPb6oA1QL3P",
  "key36": "4B1bMDUfguE9DoFJ3qLZAG5SbsAs67mXK6821VvcGC8PvuqD4TPi2yrU1Lr5eEDiatwaLf9mmK25mjdZTn7Hezc1",
  "key37": "59m9sv79Z8dYQFtvUtiEeUxNkLSquptG6qTiUuuxfgwyEyffoksoNguP3yGvkCfKZ6LNUrMMH96W62pfkBsQ2E1g",
  "key38": "66Ad98XrVFi5xBx3gvWbirEJGbxqpP4N24JQqBjjH67WCU997D3ySkvHPNU7aP7ffQFSDGuYF6DdKeLs4A8wZby8",
  "key39": "4McDfWrAZaRGKCafQC8W8PiLjrBzUJMzrLjyrnZxi3krebBLuoDMuq127G22Ls6o37R9Ef2HPwJXdsPq2CPsw6VE",
  "key40": "JsUK8jPXwvuaFkXyv1Pfj2Piyeq6pihCR6dMBoEmacM6EcqHo7gXk7X47TxUEZ97ZW2VFeWpomeGEmyftrXKFWm",
  "key41": "2geEqeQL2FSESbUmNJo2Fu9wBLji1YK7Jos3WfBzTq71nCdKDR2oaQW7V1kyayX5u5RGY8DeeRHpageXUWY8hi3V",
  "key42": "dLhASTP7r1xa5sfD6zqmEpFDXatH9LgfZ4m5cuu8a6NKcobNgpVw96J1yZnD9trEzmmiXeAFWnShjWbbEvX4hBG",
  "key43": "3tBphUGbdTXJvGM6h3J4VyiBgmRnQ82JpmD9adojkfhzTWEamAXiijUx1Zctoig3WJPPXaCvgaiXLoSWZVdeg68M",
  "key44": "vu4PvhmbRAAUWdL844w8eo7rJxmhedPniSW3UDzeui8bW1GkqjvRkeAC3yKUEZQmoLtVV1iyLs68bDjAFw68nCX",
  "key45": "2AogCz3TQTcF8Y6zvjoPbDmDAZnobaZVTzBcZjAH4o2WBKHhjMKaygG9u8qKGKjBjNWJsHNexN64dXmsijJ4xbT1",
  "key46": "5rmL4ubQsqZFHvhSJjQv2WFeja9pABHrZ5fC7nxhYtYN6vAzjFbLP1C8s9fEtW7VeGfR5MvbEV8ksxrnArKmUdWp",
  "key47": "2rG8jcs4cgz7xobNmED3rfjop7TBqUKjfmUgWA49TzZFD9quDCLYHHp8MByrEnXdrn9vniySwzkhHofCsoQzjufN",
  "key48": "5LEFXwLUHRhu5mDk4dsYzw5JCnESCSD7tjWQoEH9o1V2147eeuFTEbEJNzLGZhSpMnjpAXGzmbYx4ZpFt8DCmEGA"
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
