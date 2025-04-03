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
    "3mALePQVa6EVmLRU8WPNVtZofAbwkoPZYrwam1ct4q7nQKsJv2u9TVxQ9ytVgLcnAR13T5sCuMdP3nzmpsikK2mp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CgQGAfnYrP35fLPbLb8zXAe9D5Bz6JEFcvbGxixQCySe7NcfrmXfh9Q7KdmxXF9bKhpZ3PMFBAwEjv1LT536YrV",
  "key1": "s2zo8qTNjadfrFfwq6o7yjojnBQd9w5GmZF6WBpZqWjjKhgFPS2tz63Pv1PdaG5MV4653LL6ZjY5dzf7GMc4Vam",
  "key2": "5pektLyzLcMHK2p1HdtE7b1XPNzC7mLRMMbgeYmeGYa3Zy66kG78sXGoLb3cNEzBJRq8MT3VTPvyJs1eBjg4MECp",
  "key3": "5FAs24yojo4NLqnBTzvsETceiE2xRtssYJkpASDLwq7pv8ebWJXFHsSeub3izsGk8S1h8kY7Ca2tKiPbfDT88eX4",
  "key4": "25VpyA5jn9CY67cuwon7Ln627apB3DahxTjGgpmGiPrphjQyR1s7tbYUJon52ewuEpSQXQKcAwVKtFYAFVzXAgVc",
  "key5": "2wRBXsJdB9QSscAzhGXr1qd3F9QiTbzXjjz4ZG1DKnVqY2yQUFdiRbwJqKnTdZZqypzskyjWCD4ZTgWDbZYNxRNS",
  "key6": "5XQnxXKQsk9evMBaQbZyDQE1iWDHP9JoNBXfe1Kfqb6r2yeEdcqn9axAywWFnaLua5mzyZvn53YZk7a7AGLThtHM",
  "key7": "JEMPm7rtesKjpDM6Qe5hn8xt8S4v2oC3VR6sMnoghURcvrdv9kUChYBMvtue4A621PQUzm1gzr4E4yB6gJi2SrX",
  "key8": "2qMfQmBnMu7CNm23M3QtPS5HsNZ5iFVPCACn4Xd4rUVq9shvUhkwiQgRYmxo6Zr8BVdHE2D47nu254FfKJ1mbzMa",
  "key9": "zcMVXNiPVjreSXgesBrpGNc3cRPqDDw9SYNdbanzCvcyLug1sZP7vV2vpPxC7wrurJsLKNq2ywvC3zAkSBdZxTn",
  "key10": "4rsB6w7ApAPo5NnvqQv6mTFKiW7eViACTEspqtdrnJuDcfW236qgMjErePnLarVkHSqxCnVCVEnPxeEv7fxmb7VD",
  "key11": "5xEeWjcTNroBm7iTDtAzEfQGj23unmGusBvC5T3FYwmQBw566vBaESwPocVaJu1JeGNegUbMtN7h5o4iFMKb5jP2",
  "key12": "62zwrcHVfvr2S7cT5f4eSHyrDGdQ3sM7ZS5JDDoSHFJsnE3CFWM6ikLHfcPYhs749HBuyaxhkF6TJVsT9RqUAxXB",
  "key13": "ZwJ11ax7Wx7BowwpAxN1LWuiipCmkAgWS9hLmPWcRHpbCh3tv1wBt2vvDbR1zF86AojJS4UbaZiT2mP9ytzK8jb",
  "key14": "2SbaFr2KapFqNcHQFdCG5fDq53WtNFPekhkRBCDhXpMwBvpHQMuECvaUbfKzZ1s1cspNGsZErp2gjga4ktmKUZwQ",
  "key15": "57tA3GihAjzCdiAED4oH94Zs7rKbWcRX23sL8hctQTksPkHa9Z6Jgozxabma9N7aJzv9j6HX7FQQPo21hVXYtG2X",
  "key16": "44F31vHNGbxyxymJk1GQYoMNusuwnDbcpis6wjnuiu5cEp8m2mXirTSeMMxh8is6Y9cnt2QzPRUvouHHPLyA2zRz",
  "key17": "4k7KuUW1rWArHsFQP7gr6RfNxnWB2njGRf1JuZ3AnhQfUN1H2NSNRheVQzHmCJ63zT2sNE4WR5VhEWijDYj3P7sM",
  "key18": "4RN2r54AREMAvVUeFubq7BjppPLqg7HHd54HB144uPmdSvMNDUrA7cHzTe2RNWkr7A37eC3hugYiKD5rwY6T3Xq3",
  "key19": "4XBJgVgxNg6NamUySYmaeKxBopS8GSBy7J4Zmw8zGViLtyZyczcsqhqBAK1kjG4oNJwP8r5tSSSoc7Qmo3SUMoUj",
  "key20": "5q53w1yoPTKvHVmoRJhxb7E2yDVqoSYwMHgGqZFSaQ6Q5v97yCZecA2az2yhPnZXuYjxxezT7f1DCduvb8gpwobB",
  "key21": "MuNKZrgutKuvLnovXmfkUynnG4CQ9izhdCnafrpFZVXjQPGMt2H3CtWUzi8HwAK6NLWvULVNWqABUy7mWHFatAv",
  "key22": "BnzbAXqqbcny5CoqFmACGJgCdfj2iu4kyuQuNSreeyk36hrGgUbHybHFf2GZCSyCJJgJzjHV9KjiKtYs3w341Xs",
  "key23": "44dw57mzy9UXpPfqUVxBFRYnCAARohuWQtZZevrbJXnkFXmbUipQmwgAdtCMB7y6TqJEajUi9z7JPtTJCusKZs1",
  "key24": "4e8UVCzAToGqTm7uWRVsoVdGLsnYKNf55zfdKtt5KDoWdw61rRzQCUFkvwjcTbKKHL2sffcmmF8Q5cUubnV3qeMr",
  "key25": "36jwQ162KFLsGJst2gAjuLMFfiYSgrBwN15xUBvgPryeorSG1o2CYwursihyR9QQFd5RBoJiXBXQTTiTUDb4Xwdo",
  "key26": "4YebRGqzNhPoK5NsDd59Bj2Q5cZNU3RNfs9KUKJUoSnQNNSFZZjHNY24Svwm57zMHn6urbg44tzFU8ZXQzWwqNCZ",
  "key27": "47F8DJFauvFFZBfHpydwV3zmiBVfon1LiYL672iwzwgJgfM9YRnsFTmzfRJbctZXGKLYymo9PLD2UgDd9g26qJdW",
  "key28": "2hrF9foApbQdEk52QC8s4pQjNM7adL9VCDMGArwuresSfW1deDD42KmZTAEKiA8VqHV4iHNhW3uHLKTEi2yABLQW",
  "key29": "2g2oKkJSB6ad7AKUGzNUF7ooZpcnLWohKFezVrqiPrvToBc68uKGakkcc1L2nAxK35enBrx8x8e4qZzcyVHMoWV5",
  "key30": "4thCEKFzx5yu2ee6En7P5hPdAVs91CYzpcXEPn7usrD1vbspZh6NjRCZ75mVkqxTzJ2Hy7rTyTwZmnWdYFPegXEN",
  "key31": "5y4wViH9EBg3tVFX25YNJtBCERCAHgZj3xosRzE4fzDPMyH3sVTPqQRFxMvxXfxFasMMWV9HD9pEGaKW5f9Wo1Yn",
  "key32": "2CSy8SbKRkbXmHBnBL5KHnVQ7SHcJyQxHPcRZMY44cX72Rk26H6rNzE8hPwJw6yEN9iBPBFkDbttc9Y352CNvYHg",
  "key33": "5ZrQMNaWpoUH9PmWUVqWkFUqunaWrVkiX1yTRDyda4baw8Y7ZzzK11Dk8N2kHKMhcZ135DoZ4nfGxzH8cs3xsfzA",
  "key34": "3iMaf8SzHJy5YwT5UcSBkRY6fzr36KyhbnFvFHv3MUjn27wm2rKWBEV1bSg77jj7vT7BZ18UA3Gfai5Kw2zEBxQB",
  "key35": "2MZkfU7wLi1cXcszoDj4QSBmeyxTcvDzHFk2ibSuqFNGqoXYQ1NuCEXwwi5LjnRDuKxPrEtzsjxc8M1FGJGHci6a",
  "key36": "5KEeKDevNEMUjzCEAdbgKJXMcNMrfeNuYmyDGef246omXPv1kBTAjCqqgPiPZuwyx1tzeE1SSPGpjZ1hKUXKvC3a",
  "key37": "42kEvkLphWaSZLy3VM73EqaaY2bb9Aj3hLTF8zAYRcdSbFZUjnq32kaGQFhhBFvpp5fRrDy1DvJiQLMqNPWMoJvK",
  "key38": "25pD1un1Jeynssi4xLAGsjDAPgV19j1sALjSFR2MntVogUUsBEnqwpnK7GUAXZpaiomiHA3UJ2rPg7xCbBTRg7RB",
  "key39": "4pEMARo2WE4NAsCs2QsdNxT36JjcoiFY337q4CxV6S9F4YRkpMSmRShT2kMu2eJMVz1vKmd5AVhRSQ7GEUgi6ZAp"
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
