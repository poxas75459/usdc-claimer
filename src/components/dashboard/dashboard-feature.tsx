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
    "3ZrvNwzTF3eqnRota1wBZVGEfJJ4bm563JemQa1MWZcxUrxjLQFDcuiWJQLPPWJ84EBohdbTCQzcgoFgQ7NSP5Qz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29PHjgprBsXi6BdrtTpfgziAXY57ubPCnEdz4WFjkKVjTHpNjFquKUzATCYD1BC57GVTqYiVa4eL4NEv7PE1HQLJ",
  "key1": "xQNywW5ujDdyEUBgFVz9JVRmtdCVL4VDaMpZYPypu8jrKdAq3uyuK8T9pvjuAXe8Rn65E7fYBraE57aqnjt2MtK",
  "key2": "4Htgnmuh3ek3MSNJ2nn7sZKnMZvWsUEufisvcmctcRxF214jXrabRiKuq5oMvZaWE6T5APgTbDT72w6g7U5EANPF",
  "key3": "52pMqx2yYL21DfbReXkuXSBHcYTjXfsNn9QdXhq3GrcNDvYYapPes3UgAZfW3zCzSN7G7CXT7pHkjRQfBwuh34B7",
  "key4": "DkPXjECFbLGJ2tb7vDL1bMqdBDwFYFmJSMUoV8GJCJ5P8Dv9spiyrdWtefkyyHXv3DpXgzToQbGdogKDHnB4qsS",
  "key5": "3pMn6mhHsf9fdLs54nt56HSCJdAMrhMn2zQ8e5tnZASpHDwDP6bb22gNaUBzyyrZaVhNxQpQZHxsuFVKaa228PRF",
  "key6": "2XfHMNsXfSVzbqt95vpYqPPErdupkJ2pR4Z9XtsHR7rAWF2txyThsfT3qrk1gNoHXGoQxy7iLfwf4JYafD7o6axP",
  "key7": "5r9vSnSBJr4ixdVGZaBmuQmyVFfb8UuiTyt5u7Cd9HNDxHU7C3odvRDYnivDrf4SMk4msMrg43rTni6z7skGSb7U",
  "key8": "4tu9qKPh3JLvAuesY57DGUv8Ahf35JJDSKi9BHdZUrYpeapBMY3ddTAjMgkgXFWrbHK1WgfeUHMj5894Mckdzut1",
  "key9": "SVKWgnJSRtKdzotmGbDrmeVXB7EzsZnUTgJCJQYnJMJo3rXNobLtyP12cJeTAqadwM3r7vSdviNuVdRYuvPV2pv",
  "key10": "4t6ZffFvYCQPp24QQHVGywzn3uRoYUFKGe5EagjKBHjFj3HWYg7re9E5aG9ojJLSA3h31oZdEzbrhzw4sv8Ufi5M",
  "key11": "4Q3mToP5pnEBdZfUWzzfMFoB9j5LLiQTDP1UWE7QUZEiJuEVrWGiTcvHNsx3vPuPnv62FUD9WKyp5sTzVjLrGqpB",
  "key12": "4XyYPtFRketqyiPVajGf1zv3Q83Cf3vw4152rpy8mVX86xc2qeYHnQ95GUnFk2JWzrTrPRL1oU9HvGSBohLBkP5x",
  "key13": "4sYz5VpNyUBzKwhtwwuERbrDsnpa3HpUyF6X4nZZmVAn4wDY97RCNEQ5AbZapiBGygfJfhFdMGNXqzN5TBccnw2n",
  "key14": "5y3YkXAC2Se5W9YDw6jePzNCMZcNUAN6zwUKHVqHAcCMG3Qj8mGhURWKm7vbnMTRJsSMdVe3WPfj6n6qyNzngKxR",
  "key15": "4GKKknB5RvTKAWSnSYQ4MrBRNQmksDXtzXwZP4Gagxx81To224KfVTWV4sEW1rdvTWNhXdT4mtJWSa3zSZsrndgK",
  "key16": "2ncg49k75LSThkoukPPceAjtoFjj5UhZeCadmcxenZ4SLYGpCV3F8Z8Wxkrz9kHtYoSKf2FZHDmXEbNxRP8mWCs1",
  "key17": "4ywSmjyGMLWURSXtCTToLXCF9HTEHN3pnJk7MBskLCVYMbZEeZvrcTtYFWZF5XAsVsjfCB7f2i7LpXrXkYYJLsjM",
  "key18": "66n4fZCvFQHKRUkFkykyFc5ty7JwZpeDZVEAyYZS1BHyAj1Ld5aHC21oqvRpiykbaZcczuMWr5z4SjCsVwc7qky7",
  "key19": "124kQvE6HB6hyV4biqqxJXqRRzKgwuwDyH16ianLEvHqcNSwGKXFFSsnDwUCUPwWooQ7Lr14UmMRTVBYSgiXNVxZ",
  "key20": "2erEuD51i1jovkbp4qe6AV1VYsxoxXtfwnnSm5qPsEWM98uZjr9iCkJ9oC758hiKQTMze2U2gNYMwgfsxDPUmqWG",
  "key21": "3jAGYHay2pgM4DwY7azRUB83VwiG2L9pmTeTq9hkNSau4PwD4AeKCRUWxQ8aT647RzKpdYS9vGwPx4Kcx5kydxVb",
  "key22": "45LfdJdrnfQYKDm3BKzrx5PA273XhKojrGt5oogvRsPbYcSm726kwYgZUMo8TDrMYgJfH3s6tG4bDSkNm8fQDV1W",
  "key23": "4TfvGFHbqKu5PZF81Bje9DYNhFKjm7kM3ywrqhs2atvvmMpimi9119NazT49mPrSpPzv9D5bPJ9fh8QZqfCDJLJ1",
  "key24": "2dEWufYY46PdeoBUoZj7muHkNw2HRNLCFF8Yc7am2vTSgdRYUqrjr4HJRSogeuJHrDRqdYx3GQ6x6zKtTd1JpYoT",
  "key25": "4zwtiHoNMt4aKzyCQw7Lp7ZrLWirr5AvTQXuCk5uMFFSvYPYGptTKKWMLRGjGGUc6nbMFNvX8fYF59ghrMkA4Jv5",
  "key26": "56CxyUmZLM9isuFXsds6PNdFHAoCjTMopfNFpW2VqtaukSL6C6z7gcoFo8juMHPgv2WZC4chNmt536xyYo76rBcd",
  "key27": "5x6xJbuqMKQ9cGEdY8GaGxCk5ivQq8RJVrSgXydKJ7uCDNvJH3rpKwPfzEBnhjKehFaHNKMn8pLYEdMEDweaUQnu",
  "key28": "589NPwkggfnnEUtxnhFrJXdKLYfxeKitSJTmEuq5Du12i4uBYxVSctZfAmZimvw52RCModYaciCMaq56jDugBBeM",
  "key29": "inCNpnN795bCHd8eVmzM6Nwfkq7a8ijBUsfNdpKGZAvVs5p4Bg3TVPebNJtaT6SEnWZHzH2vqr1V1nPWh4onD4H",
  "key30": "2dXv8BR8umXkXTVcWaB5Pi1d2dMgwQTtKh2mhtZdkF9J48rKhZfGDX3sXVq5h3mVtp1h2zHFFbXbyc1DzNP7jW2J",
  "key31": "47gZmxxbmg4ubwvhu1a88ULg2eYM7ZRwQUt2Vu5UzBaGY2C7ogMUTQUMruNjhXdk8uWzmZvy5XXLgmVoHD4BPFd",
  "key32": "4PDSEPRPFKaMyLHxnHoSAbWk2stEFEb9NuafGxmgZhVg6VSpUKZPY1QeCLKi9Pux8GrHyiphKGVq6iqi1HdN2Zf8",
  "key33": "3LzKmupxNvrvdU3Vyf8xFRsr7SfDRKMiF914BfFMYYHPiFhMw28YEoPAsmWwgBWeywkqMAsT9bqUYTSMLbHjVQZD",
  "key34": "4WkaYeKb6ocQoJLmGwpDUcXZaTrA1LeTokNUunYKP67PuU5DuQukfzUfQeUhgHHVYiAucCRoHmuTxo5p1AQeu1FS",
  "key35": "2Hvv6wocyB2VzMF3RGhznLWYa49ww2bMT6CFgeN8v1NjhXfCVqoop6QSShqLjseJRp6Rv9ohmVQUmu7DWo22kfeq",
  "key36": "5fNwGRiQnGoQdZB22sGsM8q6onAKSKuTwGB8C3xpSNYARgSN1rqoVw6PfR2Kzi3YidzAtFgnMR8oqE3bAmAe3Gy5",
  "key37": "5JpTPSQRew1wC7WtaNKMUVHJc1oXE5HQbBVB47sg4SuUTu8zwx5Tr6QydLTzeQqoEjDAjG6QP3Cz2zHMoMjeyJ5Z",
  "key38": "44wkSQ68XyjSwrhDRWGp5uWDQHV7FFmrGDRkzwnYYWkusDC8Sade7L8WwxkXhWmE2uLUGyeAMgX2QfoW1U3a4Xkf",
  "key39": "3zdun2PJQ2vKdGohCbkHi4D829mPsyueXomNf6nyQgjPjsnP8m34un4REnLcY6St4i8PsPeefJSUC29dhRtrGggr",
  "key40": "pG4c2ZNhx2Nwd3L4C1NynrHLBsRDb3NrD5QZuxbijWMw5bMMjc4J5voWp2E4x5imHtVU55hmBc8KD77u2SBLckn"
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
