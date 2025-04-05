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
    "3ZGmhdsMQmzy5ozswprBhGwc6VUGWey2mvZc7k5o9RqCUHcHqTGGp2eL2ZW62xW8ZKDBanP6roQNw5TrFyWZu5vY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2enfq4Q1y6ohLSP85K1SYS4sC62i6nvkQEbM6Bhz118L1UVscwpX9XrxUgw5gacGxhf6PG2UEgG9drySMiKgJbWj",
  "key1": "57Ww8GpEcmgSSrZ1QDjWmGiXfuAYvGP9cA19UYQp2f8vivgCHAXd3wz7BRjYH9rxTqbUGQHb7bMAEUeajEAcSQ1Q",
  "key2": "3m3SmQKW6tz4b7YAXYJswE6jpsCeyQEZs37Vga6DV7VqBbgn77gJxjLKDMG9FoGBykYihCxXyHWHWHrhAgjVkNhP",
  "key3": "2DqDAs8WwoZGxdNusWR3RvnREG1x7NS5YrujBeBqMkqoJ1exFtgP4PYfpY1Bi3fEcSadunBrTZzppZop7Txi6v4S",
  "key4": "2UaDzyNCeVbtEQKPU5KPYhU82JcYiygZcDKoXFXtXj5sun2DL6tVaRHvKx4Z8ow3r9Ri43y3J2fUEWKLbNdN7BWM",
  "key5": "6678ZBqSPqd7hNPhS5dcLbtKK4MapNCyobRf7799XXq2atHKP7eWDb6UeNpXcMZxuWTtaJ4WxcVGgxkdDdE6vYxZ",
  "key6": "4qhmvbjyEQfkBzPxPnBgGYa9NkkcFSEpU6SnNK1buo9JpveiCupSGucZFvapxsAMNxUhHkJcDzrCyU2GEWrRE865",
  "key7": "7bBnMowf9NFhKsWv8N3TXgRV3TFHDHhA2RfYjPJqF9H3hVFRXm6w9YPZ9cJLrzbyjqv8VZV4eYTBhkk6s3ARnhe",
  "key8": "UFCx1WR2wN11bK1wxYYttt82Cq9t67m2i8m383YdbzUpi6S9eoLx3eaGfncnhT7uwZDkawULVGw9YaKES6aDqSb",
  "key9": "5unZYwBYCaSxwupaUKhHkTEJcLMU3aCAykuZESafpMxHaMCBMdjkY9dQZ2HuxxF1pXhr37vn4NoRgVTNeiVJzLuL",
  "key10": "2vEBHr1NbcNj5g5ryQdoh89jUGZoiXmiAv87otyoxEeV9zPiRsEsd8uLhuQsMw4m7hWjk4Qc7kCxP2m2ZipNTLdH",
  "key11": "MBKRW8u5Ra1zmQzuX9gP74NbG2xYnwBRs8nZ8x665n22oEXy5zZ3NuDRNgjQhuY9jW3Q5h5i2a9FjPPLgNQLEfG",
  "key12": "3omPQcx3ZwuhjZyUQ5suTp71SKRLmMugopLssQKiZVncyc6acYhasrB6vvRaUNsKrCx4wGxkoi4W3rjoBwCQnjSP",
  "key13": "3gyWurMxZ6YaxSMwu96GQtNyDxGajd2sYPF2EGetKmvx2p27DccmmLdX7WYQFTSXqgKt1xWKWD68hzG3JN6KCDJo",
  "key14": "5o9iWZT884Mr89frzEGcJiELfSxbLHXrhpUxs381E7cvRGsk9WausHQeRrFSnZ1aJQaxFpuTUpwMdtczDA8nnP8x",
  "key15": "2A9udW5T5h1d65KfEfrXxmotZiK7cRz74YSN9B5TXRx6fgYmrkdzvKAxWaFpRJWWvHcMw73nm5dcj1Q3gtSyrJvq",
  "key16": "4ZUvoDag9A2ZgNhf3ELjZvRSkRqbjJUeK8UmuXQwrrhsDcuMZNujPLE8B8vhMGF8aPwd7aqHZK274oJ7zrnynCFa",
  "key17": "4sGW5urrfRkFLqrMmzfNUvkgDA1PhhJ7pwkWYsvX5AamAxsbxNoRsvxZ849CngXQMPgWrgHShE1ebE7z4178BvAF",
  "key18": "tK9uAuRE5ESrBwad9yYB6XhT53zPmnqSWLhzRDwWyf3Vhe5WpX2a1BiQzzhW2k7oHBxhC5gXZ4smjDXoThPSosu",
  "key19": "5D9aG5oAaKTx1zkittbvUF5r2qzFSHaKtn57VMFafFogQHDqW8HgY8eYKcavZgGfRhjWNh26ejHeMhUmwcK4xaL2",
  "key20": "4pEuGKFQkC4LZjh8rYrwFR3Ead5weH3gcVgNHLjncKbgx9YaJeWxdYd5V8AAvGKzoLHFdwBMYwxapE9YHVtvohUV",
  "key21": "4Ngg2eDXYPoSmPZe1t4uyw7Y3ND6isEcDEvVffV46cgvWeJkSqfLYumEHH6SFPvfgMQzKduKmViPMdSxkieDW7ra",
  "key22": "gmuHAmzkVETkVknDdHSFFQHDLPgaHNCtrecXL3R5y6UrnEJryMDPgEo5VZgUY217jXo96Dbcpg1fdXRfufb38vt",
  "key23": "5rK14CUSVEXRmosgnCpMqeMATu8Tzrs8XHyYGqX7CbXYee5EGFNctAaskhxY7MqDLsT3c1AzN9sbWPo8iLSbYoDc",
  "key24": "5MHZnMGiqp6XWm7pAQAeHWt1d63McSQNxcugv5Tj2vuWENjHtCCCVzfyXysdKmEQspr7HpTtoWJ5GbxKgvWJgocH",
  "key25": "2QeHpYDXoiDbsBqEuqJ3yaw4zpyiBXKQL4CMzQvKUXLttb8xWv3T6gAq4VdkU2L9f41i5sfQUVrNKYPpp5sGfNEh",
  "key26": "4eLBWgnytAwNspRLrWMvPzsj8c49Er8Pskos5zzHtuoitf9cemoBz3WYeQpJUeSE5GJG6qzsAeKGYQmjhJXwVzMp",
  "key27": "23WCb6PJNs3FkXaAYb6zfdBpCiiJtaBS5gvbRZyjDQkKzaDhoH4dg47rYXYvzf9e69Ds2NMTU3M3vcr1TD6pgn5P",
  "key28": "4D6b1GkrUNGbRtJdHL6tdmkBEWH4yjG89Tit6NT8bQz5xhrhg7TeXPFhhi5SPNBmTyV6DjZFmYEe7CqjZVukxLre",
  "key29": "27ToreqL1YtZUBsVgqdPj9NQ4uZjMGyApBndENPNiG6eQbeywu78oVKXxBywNndvrxNSCKR1FTh7TTtBSz6rzAFT",
  "key30": "63GX8FScsf7eBGutsc3pB9GR1ec7RwZrpsDt4YZfdu9DydXypNXakde59No7H78gUrW3t7n2RFAuVNioQPSAi8oj",
  "key31": "4BzZqjicomARviw4g7TNvQoAfow9DSezXNvVnyjBjS3SNdi3W4eNQEjDNuZBEkzYmoiTt3zU2agJgeCN2tu7BPfh",
  "key32": "3hVLyhemakUoe5cypqLxLWDRSBXTPSRhgxVQYnC6htdEpFyALwg79cRpXPWDYqacAdi48jefqhP3aaQ7RxXbd3ZB",
  "key33": "5dpFK4Pzd6d2w98D4yLabguWT8JGrYJjDCcQWSfohRkHgmo29R9pgjm91VwG9XUgB1r2o6ZGXgwmjdnMwfJCyoER",
  "key34": "2ELQC61m7Mk4UBFwNAFjcF8BkNs5LWpsgMTVLd5ucZxp6gq38akBjQMMabiRJGJJo9fzjwopGrFydyfj6SLoVK8p",
  "key35": "5UH3MD4Z9s4XXzqrR3WEvYnK18kJGpMuStZePFvo719fcYM1CoM7LQzU1p5nJPVXGZwCBGUTHH1ihNTZJ9EobGN",
  "key36": "P2G3net7nbRYPBKEhhitTBSC9dntBLHvmUDKAnaisu9QvoCBazyEFMWt24UGwgqe8TYxv75pYGNUM47YCi98spV",
  "key37": "4eHnH5uZsDcM9FvGqQwQdCmbGdn4FnTnmd62YyMJnvpPkh8U8NWPWj8Y8i3SfsQL3v4rNQxWtBd9k2WDvP3aFM67"
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
