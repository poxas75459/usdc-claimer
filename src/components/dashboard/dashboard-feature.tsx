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
    "33U8juPF4wN32BhP4K7VNicD36uBuWDo6SiaPDAFuwFJyRDzfcej22uHVtrJWfKBgd5r6hY2f7nNJtX6in45HsxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63QRJtNzC3KMPqotaLJfegvPUakQhEzu4xCoWXowmz1sVVPw3QKtfJS9yXp7L9SL5PgEEhArGdZ9CCBvYwaYoYRY",
  "key1": "2jHcd2TdeKGjfd2x3taF1K9rGzYZqH8stoq47yjVGQbdttSEtkfgA7a9cwPg5ruwpQazzivbRfhc3YKnDVn9tzXU",
  "key2": "5H9GajEmirzbipVwpKKsT5d4KxrtHEHEr67qBtmVmRUCcC7Q2AHP9zr47YtAv5qQdrba7RMotf3x4vUpdc3aJfBv",
  "key3": "4zdy7jQXAm3LiyUWnByjWQVHPPNECvMBQzS85CFna7bDWsfvkjBM8xoZEUjzXqfuockhuNhfEMFAUZ2MrGcU3SZh",
  "key4": "3sKYH1v13sfs6EtN13Z8xVE4L5kDmpqhcCNGxM2zGZE5QWY55NnYujykoY1htPmDgW7sNcVku19BnkXppf8cdrUS",
  "key5": "KmiwryANi8Sb7e7F4CYyEgFaR2wUNzHRyHnbZhLHqT1B5NYqdn34e6qUEW1TnDGMUo35pDZUgbzrGKAcpzxWmtg",
  "key6": "ys9gGa5tHXivpGYJBHQkv8tcqd2npCnJdNP9HSw8tZzKkdZqRkRZbfM4VWvYXFUvYEaGMVL7RvhhBQfto68eAAh",
  "key7": "2hnNvqF6Ag1yAiBjpe4gPSbAtRyrDLgrddjKQip36s3GF3AJg5nnGxKPRYd4J3XqKFrZNSkmnCcrpHKC9qiCtwrM",
  "key8": "14S67KRGLiadnJf8fVYFF5G5vSdYcoD15UecpYUmwSJ8XnPQiPbH4cA4v8fESVpK9tg781SSPhFJPMMAEEKQR6E",
  "key9": "3zFJoppMrBZbdWA3boTKL5agGcyPmnWVsUU2F74jAc1ky4FcoiVYB3qkcAWHuK3sydqUPNeDXPaUmunKWZBRRuVm",
  "key10": "4NHNc9D2XkjAozNmZF5TFzZFYtLCpeapVfAZ3dgPKFZhwcYAMGtgbcHMhbqTGLTfEy7w3BE2ktm4YEPS8KHshpUA",
  "key11": "3zeecMT7q2DCuTPwabHTHEChncutTg5L26D1t4AXyhsFx3pLeeQQaqCcmQQCFUWjLRuorJNwuX2kttquUzX42RTQ",
  "key12": "43wCxi7vFkSmA2pG4MyrCnc3NrJsSEAUNbypPtUBtutzuxss7urJY5CYhVdFVYdocGM3q5wM28UnW2YHJENZLcj",
  "key13": "4UeYpTALhdwTcjkjnkQknFGwmDTYHbTq7qdibQXFY42UJLAkf7TSTAAULVQ11ZNZBdvZqQjCWSerP36Yoc58yyDi",
  "key14": "5rM6tR6mL48iVkzP3mtTkaWjDCqWUcXxqef3Wpd2EyEPM37ZrmwM3a1wYhfB3tQbz21kHQ9qMbbr81XUWe95y78C",
  "key15": "4SavgAqfaB1eZhsidgVRBj4xWr8NhAx4zboQ6AZjdu9rkEK6cTN9BZk8NQJLTfmGERVf35f6MMXrgnetf6ifW7vB",
  "key16": "3BCkEzV5U2vPU9eT2ZTUfzfmhDEgA4GKbsXpDEQbBzdJqaTQpFiK4wxA1vtM22d3jUaXzpkzkEv5qQsscBMLrQYf",
  "key17": "DnbZLZf9H9YvZ3ERLfBxkXEYcfG2fxAzW4bMnbLQt77TW56XDF1DBWeWTGpeTTxvcnG4sU65BGv3k3b2RZgFnbn",
  "key18": "Koqov95iMe4aPYeax2KbJ3bnxHqT7i7vRfbeuT1NPDyEr4G7jutBDXvDc9L57Lu9VjimwPqTDhDS1XX9t1T43TU",
  "key19": "jdsCx7EE9r6yayoTYV3rezN7aDXaq6mnPFxu8A4iZW27MkXzXnCS8P3v5uUGruHs17U9gWECC6LR8C5eJ8y61YU",
  "key20": "2XuJW2scj16CK6YLBTWgQuj4aosDrzph7GnGJuWXcER8VBA2Q6uBiJgC5Bu6BV6UucBsXFXuXFSY6VPXE3rj53xm",
  "key21": "4dtC6GXbK1Dc7yyYy5Am7UjT7x9Gu51sbsXozUuwDVDJkwkejCCSAisf3tvsky6iUPV6k5d6o62A4DU2gkP5Ku2N",
  "key22": "4xwq2Yv6Ru5WDok3GVKWWNL5bJraw3zkiHencALBitnfGKVkuq2PESi7ZyTFYZppEYD53MVdd2AJfg7Bk9sNaU1j",
  "key23": "3oLBxePt8MB2wKVJgZ87VT1PufHh6oGkxRLqHa2SoG2khmpFpfr3bT37ghHavsj1qR2FxoRyDhax1hnvnbhFcpkS",
  "key24": "25cmXj6LDtTSTC4sUV7VQYJjzVsmCwFSdFGv64RCjmqUE1QdeTjH8ZbxPJ3vRDxpya8Fq8qtp7Jfsn7foLNFACAu",
  "key25": "2io9pbBuDn87hjsonhaMK6v1QkHGF9Nr5HgpfpFmNcxm5ti3BAN4WD18fwkedsPPsVa9ZiAPc6cZVSakjQvZbWxe",
  "key26": "5JvCUUDoyoYFmE84bPWz63uUZ4eLp8MYrP7cgrUG3LbQEUjQcvP5XHXfMiba996k6wa6TyEH1L4PgjkRRdUhQ5Ho",
  "key27": "4EkczA7BCj2CuJfeQTL3TKhaUm1StGt992zLkeGMtm7CAtUa6mUE8EGWgsXbrt8e6AzhAKXaYvHAT1aYqkqk9xf7",
  "key28": "H1FCKME3JQioDUcGWjKZUbmDZBRJzB4KXjksRQVxA66SXbR7xVrt4hDViJCb453a3a2iLZxBqnuvujAwTXFQFQX",
  "key29": "635CV9RR5bkABuofqhG15c2R1H2d9drwayx88m5Aqz4Tr82uWMNWBjDXSbWUSfhE8kkYF9EtnVdnLZ2aP37Jp4Su",
  "key30": "4gpaemKdegVvHoa8RcFZfQoB2KiQVyo1cYoSheragX974zL4ab47AkfMX24ND4TZaNUCeJsy5q76GtXvDB4fFH1J",
  "key31": "5fk5A9rxRBSbJ3bJndsXF7KYmsd3GSwveF7BvCDvgBtbYpDixXRsmt4VNt13m4kmt89taNsfPkzQkzfNti11ahnv",
  "key32": "49rK6pVttSpSMP15jXx2kjPe1vb6opa3Cfw2bUqR41uti76y3rpfkdiRTAkVaKRpnYa5NkUNMd2j1gvSzeK6rqgh",
  "key33": "5Hq82TDAPbpscMigWLyatQhsbwJBWRbrazjqL4mZwRGWFN9qN61d7uXyaCuKvJPW3ZfWrZriqxgdxQaJEpPaXukF",
  "key34": "2DEviR7CqXpqKKYLKQmX6wV2gEVp1CHGoXVUSvESPrhdoez4JRhRvzFevrxEH5YNiQUwXrTXt4BDWUFyQ2933oEW",
  "key35": "3MWhABaAAxehJp2DNmgywG7VG3oymGjJyFJJM8uJKGaf7wZLyyfmcPaA4nPy2aqAwAs2fEVpEFNt9JCn8EUAdhCu",
  "key36": "4BafoQGgiU4hue2h7QPmf7qmmz8Df5nuU2K1NH2si7SUFVoyaobJpBunGfH2hAnQXugRmcb21MgsuTxxGd5XBiV8",
  "key37": "MdE78rUK5YNMYdhVCrK6dD5DQPYWKa9Aj32S3nUxzctZGiwrU5seVgvgqHY8rdZ222CYAq9yNLtqDcFMDx42nfX"
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
