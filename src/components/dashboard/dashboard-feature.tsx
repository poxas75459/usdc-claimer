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
    "2qAnHYb5Uy3NzkWG5T7THm6NupaiAgJkpBCzBghSvRLCGghW1KaZGNtL4LVxHwPj14sVQtX52j7MrtSrWWifRVET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61hWABifywQ8ZwPabYtwia48wt7nSTdSFJYb6Zw9rps7egRUvGjwTUcQkPEo5z1hfYrdFmhQmnDY7BvdzhqsXcv8",
  "key1": "3WFiZzowhponfjDjHmFcER5uMLRP4WpXrQb5jx1BmTN2jYaq9Z6hba2yzmnoB4RRqqFDsFvJvEzTJHrfvYkK8Jkr",
  "key2": "2zMBV89tBWkwnurqaNK6BiahsgJAL1ycbvhotTU1ezJQohUUexddYi5WjK5aeQoouhA1W1sSyqLHExnfrhDPRYyV",
  "key3": "2W3mm6BXWphQ4GEp5n7diPwCE5zYHU1xotbTMfEMAJTxTA1EzhKv3zbVySx8vfzkGePCEBb8tbToY6J5WjMdBc3k",
  "key4": "2r65hx3wTZrLwNogwtqWNwFxoApSmzj6MNDCBLr4Y9K1Sa3naKsgrez2qrHb5Jq8w9tKCqjbarhPBAdqmcMWkoLB",
  "key5": "5jsEDXojCd5aFoonaZLEUBQtTUruhZ6AUZLMPbFkyLf4hjsymhUd5rwhc7bLhqpmouCR1vBpaQTiti9BeENX2B1x",
  "key6": "2Ee4Kf4CmpRBus8Gu2aTY9PVTSMAStqNgd5Fja4X2y9Xd5G1tv29s367p25RkeM6LmoP3VFHu6YypZ8jGMcYepWo",
  "key7": "5dmDx1VYmHt9kGYHnrd3PfhVmxvRmAEDaekAwwfTvb3Gqis9VJ8uers2WEXcp9zaRA2Xwf1CYnFcoFQ4tFajdLfs",
  "key8": "xebcCn6xb5kSwLhcmiezQLeRDkPQysukiVuU5AKSDPPFHbFpijefLZCXwXHmoLE2DGodjc9onobdk2EY4Qfro14",
  "key9": "2zqq5ML6TNDcQWCTJQsVfzdZ9pod2hgCrnFhPjvD7B9rZio5ZMfKBaQM6tY3rMcJdfyveotHqnXwyRkx8rgexx4t",
  "key10": "5qNDFskr6wygjCaWANjefa3VJQfecLJ7NVdWXcrYsu8FdbMNtKwsGS9tu97yieT3bGKYw95u8wkpZybGwFQZsNjB",
  "key11": "2h216MR9LY6ZUGMXUq9m6raFGQUytp1xchYzZFAfMkqJarkD2wapVm5VUNivcr1vFYRr8LSxtwxaT9ENkJ137xzB",
  "key12": "3ifmFbwkJDrATteeyeAn7EFH7qimbs2ykfsUrdZUHUFUs5k8RPVWCLmoJ6vnSv91hW392ENnaTtkyqN59Q6X6QE7",
  "key13": "53HUgotRTEFahfS2AKf1yPK5ms5UZgYncs2XEG6p5cNoVWKMjm9wDVuYTUR3iJtZFkHNpMxLUfg1WzKkqHD7k1iB",
  "key14": "Tmk5qiaoMWE4LwoECvWZTd4vZ1T89wCSDA6G84qdLGgUZHDH6a6qarcVYFWFWKmPT6aySxxW2STGCrcdgC8vkYY",
  "key15": "YGU6CgxXLJ6ZSopaidFpxqtJcBe6ssu3zKxWGqZUvycbtedeYLer7rUMD2zq2fL2GquzTtoMH2nv3uSjcF98DUh",
  "key16": "3PComQPySiWUiQkrV9H8Zb4UKMLtvbeZ4peJBdLiZFqz4sZFbfmuMUkDnFtsULpU8GH51i6ZnNh37VaSJP2q6FGy",
  "key17": "2FubnJk1kMX7yEWppkURTefyjSt8TkM74iqTbWAzgPb3BUrC5PDxReot9SR5bbbAS32MkMRgyFyF8k12Mpojp28S",
  "key18": "tNmWB1trpPTwwQfcg4ntEGHHLYgstk7LUibpRLyYeZYzDWWgxa373DQVCFoPTcS9Qzoe7Ejwrd1fg8BJ2whmuRv",
  "key19": "3Jp6pnTs1qXNAxhcq1Fcmze9YLYPpYednLJQ3qcMnAJYvJqFSoxQBnAqF33gGiQaxMAu5fNAdysb41U9FmaK1wrk",
  "key20": "2jXwLtUU319GQVcGZJWK6a7Fseet5BodxzL7XRrP84v1RdoUWTThG9iqyL3JzD7McXYtPCX1ESpPquPHz4eqqqCa",
  "key21": "5p2QfMMs9EoLFP5gLn13u7zeNqUCUUgPKk5T6RX6ppQGZoMttckWvyeiF6jnLDzYDTA8VEpfhb5ttm9bjBXktxvR",
  "key22": "ydGWqKEq719Q16aJQYrso8G4wrxU9ETYYK8RX6XPzr5fBN6BxmQXr2HSDaHAq27SQVRuAvwqLrhgcxaxCAYDeHX",
  "key23": "5QdTE8P3rnTLqRma6jsJ9x3xLQDa95qgVxND3EKrwiP5DJWaY8xKxEPN72NupyPe9nGnnwcevnJ6F6ygNdo4Q5ip",
  "key24": "CnbEZrognDZMXjhXbhjBRcmvnkgzddiAH5DKjvdgguTr811xAtxNhQ8qsxwzaeENth4KbKUUAzcuDNe888AeF8L",
  "key25": "5d8rLEvRaJn5rAnWawU4kfgW1x3vZZpibE8CPTHMcwtDm35ZvnTGkbdgzD4DsCZogaQjFdDicRUirANvC7XmWzkR",
  "key26": "62VgaSMSBQAN7d1aYo6cTmqW5wMDMEN2vkieGH6n5Uy4MV8gWnrJTUYYFRkQcXzaTAJLqD9EzayvNz6mnxbaHfn1",
  "key27": "3U8biU8rp32PTTJivGmrpLbgXBWPFiDDEzHL41xoPm5bKbgM9yec7jw9D99ZWhqdqVY6nz5JLtHKLV9iXJCiFbfi",
  "key28": "4ic8nbUfeZCSCxyBC5n24chxCWDEp67QoYY5gMSnz4qa1HUVscppGtsRMgapoHCLAuF2wd9WAjFc4do1yJQoyGoG",
  "key29": "3sUZj7SEz38j9oSeCBhmSFocCKYLTmFokjpLtnDi31oZyoHWWyZgVsVu3iBv3FYeZreiKqij2vcpdrH7kwtECCqS",
  "key30": "34A3EtvtuvZX8Swx1xSkL1FHB38eMZRhmNdGvRCXhgM7tXD5e4HaPLYm2VEv5SKgphBi5b97S2wLjT4jmiq5rWHq",
  "key31": "459QepFEYVqanKXBmMoomPmoeSMt84oFeTARZyUXrHSwua13SkNKEXLf5gGyYwcuP18thzCyPMxR3nUrj1TqLQFu",
  "key32": "4ehZhMjXdP6Gm2jirydQBQzdcMeMdCUMXrZzWafpj1oFqdfpMn6TQ6h6CX6fo7NnyxqFp9DGEzz13TXfa2FPduzf",
  "key33": "33JuZERmfK6WM3e9ZQRrL4uib3drrdwucmoGtJxXErrTCPSiMvGBRXnP8cZDvTzVfRQ9Vj4wi7xg6ZPw2PUkv89H",
  "key34": "3wswAHqrhPoNi1kZYgcw57seFWZZDzQA6Do9WkmNeZ5ZSH2GiuYJEdQPMGqdWCTHaBYLUfoT7xcLUKxX88P9Jn3m",
  "key35": "2XgfDdxzvqcWYR6GLhH8zJCfTfG4EJgBkoaGTcUYxVXwCJXonzmUM3dQPQ8UcXArxAQeQD4ZiBGLCD3sNxY2miMM",
  "key36": "361BhzHu8BNUddJ6hF1FZfTvRvucuS1mrpimkK26Pf9DQG3ExJ4D5Ps8kYXA19guUmpnz9Aq9W16c4g4LfxEpkxM",
  "key37": "4Xmaa3LfUbTaXjU3uteE34pY9YV6WFFJqgbhjWnStsgXti8UFKM7nazgYC6LyQeNjoZ7CZqTty8bk5fXpGHecBzt",
  "key38": "2QxxhiXizDj2NGBs4vSYmhyyNZoN1vjt44kmoB7V6BieoKQm5rpshryYmj9B4ve5MfY1aF9Q53yhyNJugej6RXzH",
  "key39": "52XSKF9cCKLJKqoHfT2fckotQtKUkAztZVc982sZA6qpX7ZsEm6bR8S9b9T9Xrcv6prvPBb1hSFhVqxHDcjSiD81",
  "key40": "4FEkMK6EfdTJ5MrbjQ3DRmjfozn4aXpTzY7z6iAe3rXPrbdeoDNduXgR4bwyZqnY5PwfNEeU6qZdPHfzmGgEJXgo",
  "key41": "2NJmGCjdery8VesQqTCwZ579BSF2smuYtYnfJwJLJcWNuWa8pC19Lg6F1C74S3T1k1mTScSmKoM78Wx1QzqETQE2"
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
