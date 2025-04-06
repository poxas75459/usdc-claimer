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
    "4fEMxWn1coRnSDb8YYoq5uK9cuc2CSGDYgtXYTSTwFhZmNNKLmLYTY1CCRtbNdyrjvYpxvYdBNaxw4LoVbEA3Dc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wdtH2tZJ7o6QF61n13v6YmjVrmv8ngEkuEY2sQKp8auShuoptfLPYZhYeAnefgES8bBjGFY4vSg6o9vMhGKW4Kx",
  "key1": "5BhuMSDWD47LiXBQVnx63NGQzcxrE1pZMfwR4khKGBBqUAsUmX2au8byyMc9RUrwoXvbXLAeU6P8ZFcHEuti8fsX",
  "key2": "4sU7t6xU9empjuQzetAcx1cHrjbtWWmVfv4hTUzCqKZM2jWFWA1nkCs4Y8h7rZJVnJ42DakqJevxEc27gwDUcM9f",
  "key3": "5aFcnfaqoZBQ75g6FWEvrkV3WLA7KXyZMLkRedKhbgWUpWyHW4nG4318jMh7VbyB5WmcCUWDdhLQ1JfbB14P86dP",
  "key4": "32qkebd5osygkbn11VDCfcpdvMnHoTDKgnsXzZcEQNM6asxgNjoYhGx79dpfxXktUSDv3wFjfeygwnhNd2FcZA5R",
  "key5": "254jonE7vmgkx5ku2XaBQK6ZRPYvdHwfz17V4wQw7Z1nHmMLJuWbFVtTTo3SXgkP2Gaips4qNG9utdtEKVntEVfu",
  "key6": "2JBaMkLN89MTfwokVigSk2SEvtkcccM8VD6Dpuz1qbskqH8W62RJhgYcPYw3zkT6MYbrmZRFvjVSrWHcCM5BFAc6",
  "key7": "4jVrkk7KT5myZyvhpLenMJysUb9t3e5fkmyBjzNjFJGeEWDYWU6R4jxuf7NGCK2rT1zK1AaWu3bbwJDoJ2USBCaT",
  "key8": "57NzSwjJNXo1gNLMuuQ7W9223RgStRQC4iw53WwZEd2cWT8i8Jc74Y8gWQbjwJtRCZwY63bd34AX7pWNRtVQwJjQ",
  "key9": "gdjNKzzEze8URv5LeWzeRVpJH1NKdJ22jvL2L8Ht8jETDANqRRZfDoRU8xrZz6LJixFZx8GeonWryt7SuX7ZWJq",
  "key10": "5Xa89H4UTs3VFx5ZNob9RquwEsqoBvJ1QDrQHaQz5K79m6DjfSKQQw57E5ReYTRNnzd1er1aq6kzPikLBx7AmYN7",
  "key11": "4UqcTmZXPeFNfyWGL2ZPBMy7hxsAaHSF2ghx5oz7p79EmirUneaRjLtBU6XU1A8VPDjQtt9muzh22mk18e27KBrP",
  "key12": "4ttuK7AkbebXmsv5FCsV7AbegVUfCDX5u1ZA21WZZz2m1eQSG4YixG9idQMKhkmSjfxDP23FWFk9mFSwA9pBjasp",
  "key13": "4pJKEfJ3A2bTzMb73EAQqACc9mi3xPZDxPTwASnnhSTtt3yRN4d3YsrPnzp3zqKJ6cNnouX1CNQ9Fve9QQqRSXji",
  "key14": "c1dHcLeK7JZmfxGUv5PFgJHesQioLDjpzVhCkdq3xAGfhqFpaFt6MP1xQy8Mqhf2f3gMMgPjF714NXQ6wxAccTu",
  "key15": "weT1a9FGprYp6wxrDaynJHV1axkGBK1B1EqgBJyrS1RGQPXZ8Hw7bNGHSA2g58JDhxD69YwcF5xPZUxHUziLiqF",
  "key16": "4HqWYkvRPdDr44z3QyeesnmAB9fo1v8M5MiJtY8gZkcxyMZ7Cbb79jY6jDfN5f1yG98rBgdWcHcJifePpJqYFTK9",
  "key17": "21C4sXnQmQTmxkydxyFoDaanUsFGvVpaT47veGx6P8EYbe4LZkR1morq4ySgz2zVWWQwjG5w4UB7XC7L8o5kB4df",
  "key18": "5njpPhJDZWh87AY26Sj4XHP4gtYngJR7Xf4gavgb967eazPSDmaifEBncPiHWg9jWoDDchgJnm561KVn3bynyFYJ",
  "key19": "3FNyyhdiz9AYSQQHnpLgYSrfGTyahpkBLriQZTpt576152m8My8dcoejpxH6haAUWXWp5qhFSMGbcwSSVUXjpnNp",
  "key20": "sWoGEvGsMBc3yFhfJH8jwG9ZwTt4biyrVMxBGgpceEPRTZA7bK7jqFQgthNc366bJ54eb8uhqhvLPKmcYUinRjK",
  "key21": "Y7EPKnnFE7HUmF7d8w9wn6H66vFRFuUr8e1uanpggDM1wV4XabCrWyzoMweaMbr68VXHmVeivdVS3c6SvydsFR4",
  "key22": "3mQHih1RrYFCz9t67xbmZGwWDVHypGMqoV5o8vgmNVwpsf7cY3tMxnYCDqDkssvS5yYNDGdRzoEH4i7vJbRfGDcM",
  "key23": "LYVMPu11iGWP9FYrUNgnWnPZrL3rhaZxJd8coxxKno5ZF2UHB6ZUBtCQsMghDk4qrXZvv3RuAvWzmr9aeWsCe8q",
  "key24": "2FMTaapybMnXtudncsiX9rLcZkUgMj9XRQhBd9XYFwJFDdoQZ5oxNw87irAJ6QqMT7bVUWJS5xnp863i9rXkN3NG",
  "key25": "3DRGcmR887YtFMH3AQBvNBe9C2Mku2FGj4UZxwSbsHpaJK85n4aTqrFrtSzWV8WsJys782oWk67X8r32okXkBp76",
  "key26": "3HZX45sMJuj61bxc7dWYXqu9GdwkVEFRBxbkjSjdWmgsByCfejE9fizigqhXZy8x8ccZVXfoEyYh95t4jZ3s86LD",
  "key27": "4SfdHA2tpDP4Cq4WCtUJCjut7X1S9JXZM6GmD546HdYAEpWyh6UUBc6gfaimb5LDjnxDUNqJmtoBownEaRWUGgAB",
  "key28": "2R3LBgHz6vo1Ld2EhBhVxVS1KAXJr1weNJAE2jUWDqr1cFmqfL5xvBNC66nEJmjop53pAiGX96pdnqLobbS9Xq1V",
  "key29": "4HdrUrpUpBZiwNEXBNeyEV1DcSdUXHWhkKyVs8R6gonvdEGJWbYW7UDN9xr5P2dQAatNHnzMD1MVMKtz65SFVbpt",
  "key30": "1pvqHsrekET6uwyr9yessMuyQZLeJyFWuqTXJoJaXYdbajRhxsbv5NYBxKhmbLpSWy59wYTfAPAAEKcgxpmWMWx",
  "key31": "2A7QUPDf2Sc1ofg3xwekuyRin9QmWoWUWaTXP7zaTzfY5A22LjE9hQ6BQrqrZGAcFf3Lhs6vWmQLv8z4HvSLvpS4",
  "key32": "2deYGECupeTspho6ep3cxgED5hsc4FJWc1gXWPP6RjpUK3KXSRoqB76gt6spR7MvUn33kCHiiDye2tXQmCXeVTnv",
  "key33": "hbGq41NsejAAsu1KZ29W72uRpv7a3Ht2qTESnP6s8YgQUpp3D8jD6QK85Hq6LtRekfufA6GmmcDsRMFYU5rx8qA",
  "key34": "3JhFFwLv6oBg9LRfWgN68hVeAeqrBkVdEuEWCLgPphRFMgpD4xNMZ79Z5rjXcKLe5Bgt4x65e9DNtBE6yFFwgpAY",
  "key35": "2F4Nkt8sB73W6Xox5D8i4BxWTD4Z14nqNocunFXG9Lad2NfxAH5paa7Ca88NMyHAYiQfCw8QTh5vSN5vzVgnyE3W",
  "key36": "4sEhxPou4gTaVnr2FPS1Q7GexGRXucsUua3rZ4E725mMgLFqyBAXuC9ocNQ647vAV3infeiBLzEceAvc9hPwymRD",
  "key37": "4Dc95dzZL3pYDAwpoukrmju1PnwPdJGku4b8JcVpPBsXitNnvp5e3w1sUhfVadurBQ1nVSDZg4U7grK8uymGzAw1",
  "key38": "3N3SCuNqUzvZPAiTR8SBka2B3UxB8KJmyHSjs7fovGFr4zguRV2fNig6Q4YGZ7G91tixrqrSNVuNRbRnqgz2LE8u",
  "key39": "AwToQvegCJ1msfCrFRqjMoMeVhtUBY1titXsBHc56FyXbnkfsyWrU7FsC6Jon7uriyHfjFxtwPzDc4VAAkqg49g"
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
