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
    "65vRJS2TPHSA5ygpo8rKexBf7tYLwpC7hqXo29kUyBubjumkNjH7N6n1nuDEbNthdyyN15YeMnvUznmijA4swSG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WYdBEt6jDDR9adsq8qY4ZEeed7xmbQ1Df3MkJEZojZqjz4z1LkweTwyEKPh4moX2TcQwc5sGqTUUTNz5pKm7JK2",
  "key1": "3Ym8NC5zvmCJaLKvLEoCksYref8k3GQ7zQyGQMtBVEaxhx2Ldpz4rG3YaqTSjfRVB1cQiQPevBLVPnLPuSZuu3S3",
  "key2": "4VuPArHXLFCvTfLVAoNPqULgpibrCi7nPN5XcuSw1DpwZyEk8EokvEjzemS9erGJoR6ufuiKDLMbJRV18jfxvCJx",
  "key3": "2ZmcWKroMJdZu2zbuRj7TsaxBpxcgXF8q1CJd4PPgqEzG6RuYcVe3GZ4gVQvFwd1Az6Hw8Q9gLFKmt5UeAvFvqVs",
  "key4": "3URc8tL6UX1n42Xayg3MDvUgjmN7ZCpw4aN72RFY4ane6VHC4o36BdRPUSwVwnjdhU2XwD54LBdwwBzU9KdvXoEt",
  "key5": "42urwEeyTAuuJamGnHs4Q6DcpcHuSwXC2wd5PEKZkhoQT364yKubkS1RSoGSrnv1Arvx8ASyAR8wZdai5CAcBnyC",
  "key6": "31N73Yax3jqoNHTZJXud1RtLYjqTf8BXP2KoAjR1Xr9wkJ32vjCSRSRkCgAJJLmhtTkhhTyw7nKrG3Wf2uzszHnE",
  "key7": "53SBQU35dz3hSMDh51VZj2KwQqjS6cKhSe9ZEuC4KhokNTc9mUdkoyJxuCA5SLA4RyuCiXkFSKHh1VU9hdEoCjqj",
  "key8": "2MJ3bKx1rqKJ2KpXR3mKJ2tL2Jx4S1hT6xvwixzR2JPPfwxwMj1pWQdMeZCMTNxDne1fJGuUMqhd8wP6R1EvATrL",
  "key9": "5NBYtGJL2hR1MS5t6hvxgwrRj9NqEPnkCdGip79xgJh3JPaf8Mh9H5QuF1H2UgcE4j9m5t5ADdvhiC2AmHGy7dem",
  "key10": "4wC2TgTN6UaDExsT4ejdFveiunqUN3bo7TSR7NLX3oHNEpozYZA783bL4UYEevCWhs2ZVfzzk2k3xxq8eipTbuuA",
  "key11": "5HBy4xsEYqWhZSd9D28qRrQ9YKrQU5cz8zgsr2rTr2yoVJmSSZgAstixrbCxuoTYaaUADQLYQYMeLS8SYjE2xDLz",
  "key12": "2h53nvwkgDf2JYHcZuixSpqXkm4GRCKLK7Vse2Ua45U9gPygEtnn9T5xLimVj22fVionPg3bpwTEVaCRkvZ123pw",
  "key13": "YGjBtS29gTASnVCADpBgqGJZNLN5Snx6KJDWHJVKhyuNGsFS6G9di4MvdezTge81132UzVUG7UiNTPrevN7e5ZS",
  "key14": "Ktu37APXqE86USBVKJaGPf1gaYnCgwQx2Za2Ej7mpsqmJno1YBbXNFquWHjBsRTLLh3Hmehxv7x4k1zg3jBKCuk",
  "key15": "4VkMUqC7jHFr8ZUzH2R45RtpwUHz8Hh4JU83k5X4K518P3Hy6kTnMSFHSnDXUudLJyyuZaYdAnikLQUH4gLdxhBT",
  "key16": "3TzZkjqb5pWzoYjzNTKR7E9D1aFG9jP6qPW1XkxjdAD5F6jx5oikywy7GdNge4DD5s8CdAUVP8NFUuz1uAoanoyz",
  "key17": "wkHY5Y6WF5hU87TBSmzdu9uXrMTJKcU5orDhDgfvU9iUR6oT5cyzo7tHf77Hxf9ZBtsJ7yPNsSoy3LXCozRu2yg",
  "key18": "mRYbX1nJBXE1jSUgZXVnbEZXpxcJa7qHbDpb9mpWbygzNBzt2CYLd4rg1Ar4c6KxvmPFaFX5PrWmKSKKPjBhc2i",
  "key19": "2F5GYZ3uASt8BhG4ppeFPnvxqex7rsbQZubEJo7YhDdrVwNzM6QWQ2HQ5VKCuryWui4aamKK39okgu6wGtA2W2uo",
  "key20": "3fYuWK8CtvnpotcCjC93i7LcUYYGKwW8dazBQhhfay2tKwgGs7kFaN4SpE5sJtQ6YRbydRuUjudq3c4a1PS1BhRf",
  "key21": "43xi72w3Leh36sGLdH5vgCDoiNMu7aAtPNRJ1LK9ct5CTEKq82tUS4oxESZeBd3XVeo9uuHkn3mfJG6uyMh62334",
  "key22": "5xQu1a7g1TdVsEgQ5mD6YH7PmUhu5QZmuMjZNdcsr43F6tSGLWiNyLcctNDYqsbkw1NL8WrioSzR3htQxiUbDWX7",
  "key23": "omWBhncqUNsjpSX9shckhk8maBWH3MQcHfKuLpBxcaua8bwpKuusu57ejnHWvmbsCjD3UwfL82tKUs1KqCxBun7",
  "key24": "6781JFW3EUsjdjuxaSgfdfuozCEoTSQjkVi5uHYtDpAtXi1m7PxhrZQeKiM93cSCBUDgCs1gts1TeE4mFCeKRmZD",
  "key25": "5qHt1tpSe12nf8ZekQSoChLyBy44KmFgQzVRn3KqSokfrtms72PhpqbdkQALxxoaG5pSdipohZbFWQxCNC6ZSMWQ",
  "key26": "2EAZu2CGi5kbNh97ZNcpkiueYK2c5HFBFzAxN5KYP5mQq6YEKBnRwPrNBTXTjkfmJEBCCT6eRzQrrjXrUurRi8fu",
  "key27": "5UTY85GMUtPGqugiQ37xHHKF78cVMzpPV63SERDUT5XrxLguFMmj1NRBQy7hhLgNgKgBt1NZG2urUvSHiRkVyfPa",
  "key28": "66nayDSdiYyCrxFt25MqGQCxceWqjSvRYeG2xg46VWtBzcfdDLwxFBcdUw9vYkBYGbuuzemwH81jHENR2UpCPxXg",
  "key29": "453Jct3CeJrp3k4coX8VAQrAd2f9HBtP8bBha4tyB9g5KvkmnuHnekS7hNAVHMAHHYQLrkYBnPtUo7fttWitnU8q",
  "key30": "YNfrPnxZPwmvEqvHmc5hG35CAgWj2m9HfH4x7HH46Nu9JSqqUQFYpLbU3eXu44z92GhaS1PsB5QU4H4zEYTfesx",
  "key31": "2Cd4TzMkWoxHVnQ8CbRUnRLYxjcmn7nQQ5WXtx9uQ6Q74b42aNaq4BmPk5fyasbzrH3beCrND9QYBjnDzSVHZmr8",
  "key32": "2zzKt7ux6MxbY1Ca28VUQrKMPmYv56m4TxhZGbLFHWHhQAcu8cyUjmTkA5W6B3QyYy1DE3wXeSRX7Zf1A3UoCcf9",
  "key33": "4Mp4GMuNwyDtq8UxHSLjgQR8tkT7zStpYho93HcFFyfXui3yk3UfHASUaVyQ3vg7ECnDcUnj4kL5xZYhbxsoFSP4",
  "key34": "4v8AxEbuEQaYbm8p1azJquhJHXz576t8riQ2MAMxX7LjWwU6L5dcupCzrropt4HGqHUKxgPi3NCfg5uAquq4HntR",
  "key35": "4GuWP5CrWRqJcbhZWGCz6WHE1WChrBZWC1D1mDF21rbfkFQPy3bFmWbH2absaUZbj8LapaJ87W5AvCUS3XpvftKZ",
  "key36": "5YMYxj4rG2J6nRn27JNyWpyg7PEZpddnmHASRq3RSv7KA85GEzTGKTQ2nLtCQWzCM6dmND7Cnh4QNERDf9MNxHfF",
  "key37": "2kLqZBEEiseztkaqWsDSWHQZZ18nyMVx3TSnoBvwcjH6Bp7K75FHGYfEmBk9xqVeJ5WwAhp289LZEmDEhLSA1F2m",
  "key38": "NCajkhg8swJ1DgmAwX8tesSKJePVyBppKagkTF2akDAcTyNmCbL1eqQstbyM8Tc9d5r9Ui3STcUJbh6Vb7Gnq1j"
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
