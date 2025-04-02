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
    "5fJKuWwrZewTveAvPw6AwrEwx1ArQoHFuWtpJiW5qgSyFRiA6avFzwwmqpu3DAso1HwYV35Rt2dWUjHtZTWHJRCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PN4d5M5D1oi6TM258B997EdnDZkUWAGo1PvMD4KXRaukftivzLe3ZHEZ58fUzeBiZ3cheEXBQQoTgPt3xxY6bjN",
  "key1": "5yNDWNMqqJAfgeA5Qiq7jvVG9GJfNhHR398JyZyT9FcqTQFafmYe4buZKr6Hnzdatz8xDvnu3h8qWLRbUgHMs7Ed",
  "key2": "3bdLg1srnRu6HuW24HFBYzwevpRLra4fTVyP2RmrTU6GAzPXt7nNvN5BcM4XP8puDrajShhscXdou4uZMWY4sdd8",
  "key3": "RQTgB5MyUaugWJgsjdW1UNidz8Kmz7dQS3EdKCCGLuXGLQwgjH4BLn5UmMVsrefEgCji2yHi3kBAeikNfrSJucC",
  "key4": "2P4DY3UmH9zYFnSTUw7QUoEc68iZdA8XGh3TwGqGpq8x1zdvbxaYUfmeiEGdNro3CrTc4tk34C7HFqob8SuxVsyi",
  "key5": "53omzi4UqZSJn7tyVcgEjqAJbuoLGKWMTVHzaRqpmmFxjPnQzcTmahPxuBmDoNvcGPX8J5epeHmP4jJ5NP3Ci5RS",
  "key6": "4xPXowq1bF61LHZTdzkXEkAvxhFxFfXtrx2pMuAHj4UjQKXAQXNrTfPGv1SV1ewDx1MLb934mJTUUftVU3vdYTwE",
  "key7": "2zR4YjPzsnhQEdo9BgGF8qfVuTRFS6p1FitcCVFX1MpTp4tWm5zxVKmjqh7e5ea8UQVNczb9KbXoBpDzvvmBLwmK",
  "key8": "2XpEA5RwiPNMWtVnJ5fxMR6ujYEaCPgKsBYdoP3ryCkKp2SUq4UFe24A4mjxhpre56hd9vd5LHURgzX5N7XPwBJR",
  "key9": "675xosYFkaN4CLrTC5KBZ6pMUGaK8hkx37yYHHzVc7ux4yEELsdR4gt7T1LgSupNspfPjsHvB4kBRQuKNKkTpwXT",
  "key10": "2FYgtJq1oqNq31CGY3z3yLhBtFCVXHeyFYfqpAZX1KPsdSeaemiWLp3CiA9sCcmxXPL44KDiVr5UoNFTBMme7Ykn",
  "key11": "2xYPzRcW6CAYTwtKRXAkZP3vQnGMu9GL5HTrh3KxuESa1Xf5ieHPGJZUggULePeoLvJJXornL3CVoT98nziFghpC",
  "key12": "3u4zytGq167LqhXbeVNnoXiGAqgKcw9q38UPTA6aiqqeSqBnNhFVdJ3hji5oBNZ8vPSRRR1HxUoxNihF8vrx82UZ",
  "key13": "3JYEj9kYsoWgGA1oHznDpdFibaXdWpdowWNZM5tT3JUU1JE51jdpJH2DM7AmZ6KD4QqY6NtzsBjpQnD2NjPMxPFh",
  "key14": "3dR8z3e3n6Zgy3SujcqY6aW2VfUAuELdNHej8cnknwSfnFVpoXRRwMyYdjFkzvLpvDHDW4WWcBxMYQfnk2P4ciio",
  "key15": "4mgqqkhmzfS3LLaWYLU2BmfCJNrxPNCbbzGw2QJtF54DbgvFQziXuML8JGyobHxRCJUoQZPXq35uuDzYRTeKkn7D",
  "key16": "4cwiYsxsQP9GAQwcecuvw4D1kxaFsVpigUqKppqbZvkKQCicCdnyUKi7QTVEdD8d7Yza4W2MEq9i2sZfFGsbPdXx",
  "key17": "41oaCDoLBy16ULAq3FeEvPQHFnDopFEpLDXp5qtmgxBy7BRhqXrVLJJeLEww7V4p5XbovAi8whAowTk3YT8sGzky",
  "key18": "5aa6s1Qgh4FY6hwoDeupAVqe63MNG6F3GqZHy3D2NTh7JEtF2UjzDCFWHzwE4NqWCDXED5hjXXAiewnLr1NsLuL4",
  "key19": "L4vga4utgbzRBUok9PQ95eftoHjF5pU6jAL55e86S19w9Mha4zkHRuSkTi4DQapWxobTvaF46rBcfLU35h1xq9K",
  "key20": "rjkthEJhWCtYfK4paBTi6HWdUUxTuydPkYfyxdwgySHwEtNvECF4wrjLQbHsojx2tLZGqv2oCHwyNCHN92UpuZW",
  "key21": "BgZYBw3uZkh2c1h6AGf62pi2Vz5YYWB1G9eG1S5UycZP7su87GR7fu8LXTWNcFywTfrD3yv8MSfUhcXLuWzgquK",
  "key22": "3hyef3VhLBAMJw3mxwrK59rjVWrvmcvhDmtcQcpRsCeNckTp8aeAy63RrrFwEwwRUQ7frodMquDgmQdLN6VtNqdQ",
  "key23": "4pAD4BCCZFQzQMig8iQeTdA9nh9qUBDvzmkU4hzmhzLj4ndpuuYn3CiVrrj2kKRUDsSsuuWMyzyoqXnKQkTUS8uK",
  "key24": "4SeRVMzcbbEaJcigd4HpzrAsEiRsdHGG8iwoMFirErdUR6j4vbiZEYuBVUNaGN6ZMs36FerJ3hcKqCLYAiHH2NSm",
  "key25": "3ZtwQ7YGiuvFeHpW7xGEZuYVDZLXB4wtW1nUtCTF9ueu4gVUQNdrjJyAaxyN8gkmSTHNcA28CochLkL7HyuHQfnd",
  "key26": "4X4R59JD5WmPyv5wPKvmuvS9raA4YTMWPZRQtPgYP4R99KbLv6vFdM4PiSfner5bnsEwVNoNkC8WM5wafg9p9Fba",
  "key27": "SJMCotb4ncJaFwYmnereDNMEJZSo5w1akhqRVYpky8FKay7SJM3TZVSz1wNZT3FPp2v4UMC5cYgYH5m9LSaEyYH",
  "key28": "4okKxMdQnoEhbbdxWKKo9Bm9mVexmJ8d1cXPnJA6fYXXLkSWjDFUv154YR2muCMPLfmRNWU5NKKer3LDTXYsyxgk",
  "key29": "5dVQ66neaZVgNQ7c9k93j9F3uG5Jjtf4Q82dd357J8WoXEWY2vLxdwDGexwHD9gLTupF6SwZJ3LtrfkkxiJWGyLm",
  "key30": "j6kMythFPhkYR2AUQD6VYktLysN1bD5tAvaDs8QTvxV5opPuhTARSZiHaZGePZpNKETFrLcTyBRPdi5Aox9x1iB",
  "key31": "29KAqbxbmMN2wNNnc21pZ9tkBGPhzphB1eENuQegGFFCM38LYWDnJmMZ3D95xDMeb1pxar8cfcXrQkBZp2jgaimT"
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
