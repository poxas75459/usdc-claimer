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
    "Kg6RUWmET9FkHXR4pi9PLa4Ek9xNamkmADuMtuQDMv9HgWamBuYAdW4LGjVUutAMXXADQf6NzoZdeiqtoyf5Nzf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VtRRvzEhndgqKPWLM8YhCbbgydRkrkMKGdwn63gqBheTbffygRRHCJrrHFxMZeXF3tKvezEsz6MY3EzaaRvYsKZ",
  "key1": "3Lp6Wy2LiGJ837xUzC2ks86eK2FskPtJdCSZRmaNGDrCiyoPnvadAtWEVvM8n8mDNQ4qbB4DGbTzRDrFr1qfQrjg",
  "key2": "5RMLv2a8vhanfCWBX7UN5nQPEM9zps1w2CarumK4VpXUssJeYZUyRFMzHoVzAStt6CyGrWmoPu986fvVbcu3KLhi",
  "key3": "29XxA6xrERckULjmTbzB9FzE7ugZVU9M4TgT8ejNsSFCGFfC6nvZafcu8YEHiEAJtTyAvJCtK3RssuAziHNYvep5",
  "key4": "2a4WFV9nDjgcYwQcFWnViFPSMHdkMQ7nZn4hERwxCf5pkTJ6g7bjRw2cs477jrbR4nQwQuSZBTZANWVp15Dh8i2k",
  "key5": "5P18x2uUYtDzRpq8A8DGpxZWNF2zbTfQ2eUs1JN2UnESCwnspCPfm979g8prHnsYu9Cb4xHDLZ2r99sfWt3gLw54",
  "key6": "3LVgX98V5bjZqcxRFkJKXur6DdystxRTA8ep4aVd8v5PKj47sv1DSgWBKRvvozFWmgTBNUF5G3A3m9deoZzAtoMm",
  "key7": "3TR5s5sih9uojsizKBq82EkUSwkWapvaa14WSTgoSDUd66RsjYwc6qyL92MdpMF97fX6RH8gs6teyNarfAkBJBa7",
  "key8": "3V7ngSdCzsUUyzxh4eZKop8RQFmFjE49MDn6AEuoGNthWoLr2oHQ6htmVAq5FK2SXDEmrmzQr8odfch2UZzsLz6y",
  "key9": "1U1D1pUoAKpnB97JufU6NFYFDoDLZJpxq4kUF5NCUJd3xaMTX2xy47YLZD99Tgb1ExcKfgtAcLYCGaBnbNjg4db",
  "key10": "gugcXqxfTqEaVd8P42Mq6stUVkn9BWhCGpP5oN1bQj67zjWC6cX6mAYS7te47HtHFomav6Nv4Z2FgZWfCuy48Ym",
  "key11": "36xJaLbxie5PLDQaMj1T9QLaHAkLGL9zXeYniE1tGXHTG4xjGFQgRn2ScwK2sh453jgA9Pzf3Hni4ahBJUddZhHU",
  "key12": "hZUCwS7uHxBTBzSMK9tUoGD7XvQUm7UfCQBK3xERhVNsua6DeJWdHKXDBVjgJcmbdTQ2sUcyrh4u3o2psXXRKC4",
  "key13": "4e1JBHxKiubTDMxoyE3mpeZUCFJxaFGTpHMDoS8ANfm7WJUT4sz2SdRc2xQXktWfJFFmbSgYDGZgVZTPdjCb72bU",
  "key14": "4yUESNYXWfKJR5ukpsAuhMU4QNMzZH5zGgZ8yUocmQabvdG95Z9X2RLQVp22BseXHP4c7dz8tds4DwWGtYeFCRdM",
  "key15": "xAxW6zegCSpyqVgA68qm6jNxymkSd5EHyFRnZfQJVsJY39sugP2tERsYWVFQ7c89crpwwwKA6Xx33Q72HG36a7Y",
  "key16": "4UanGvbk6ThkxctJwQrP3srGknyC5ythL7QVJoFf5FuLv6xdpEoRdRM7D4ERt9KhUeoBmmNW1cX9qebrTr6hLWhZ",
  "key17": "4ps1NojGFvGYcgLF6EJPJDzJfwxyNxFkYTkpfiVHSyNN7mTaNGuMcQjP5NSnZyouijw65PT8JQVMB1qtHCFXSAFA",
  "key18": "48rFVThhS8neF2dJwUiRq6uZaFJWN7HGDwA48MazWSqgbbC8xpLT9NoXRwwTVYMtFAY81JnkKbpAXBuHhP7sub4N",
  "key19": "4G5k7ER5Naf854tQkEioBhR7h293ZzhRisY7ysxJnau5oMTUQPQXK8kpswjoMiFNxGnShHnjr2HWeuECBEC8RBMA",
  "key20": "249mudz9SW5N7moXgPobQhi6pP5meQmwXJGy4U2mYh1nibN4ZYJeXvCPGDKkxTXnY21pBcvNRpG2FvHLzwfkqqG7",
  "key21": "ymxsAPaeUWGcngtVFJCXFp9uoR15TwbwSueG6VvGqy5jh7qo9oP6XEVDpy7WNW8F7Z5yTtKMLAVwXB5hfFgEtvC",
  "key22": "2acsXTmnod7Gbr52oZHFKQPR87opMWPJUxmgGyXCdrMEjfEZkGGRRxBC8Z64yxZ68sKXg8bDUgbVo3nMH1JBkzHc",
  "key23": "2itQkYXut78Z6vXVhbmYAbyweVeLV2M341D8UnDwJJhW3vaJ1R7b3EvXuELuKQqNN7274yEbZmW5ibgcT6LHNSA5",
  "key24": "4LQjTmD3D9qQXvq33iui1QgqqWSNH1oHzosRktSa8hSnW9s9rxWNdfjD3Sn8gVDBTs5ZQNjwyAwzmnocdqcEvJQE",
  "key25": "jamzGp4ENSHpQdT2r9K94X1C3E562gM8JNCrxxGkiCXbNSe1ejpKipQmt5m1hjyGYRWH3qdRnXo9sJLEXwKusFh",
  "key26": "2CV9zLe6FwU5B6CFGvJSJGh7NSYzezTNxAJKkpNv6khp6q1Di8EX69GoPVNxmYVe3BqvBYvBtoGKedoEJJS33dVy",
  "key27": "2HqZDyk4JQT5XAguMXgBzjJSJ8uJa25j4DXuEiAcwAQeVZA2J4G1btu4t9kfQ3Xzj4QZ2Z4wutto5gXLvSvVZsfA",
  "key28": "34LU6kSKP4B9CXRfCfE8RDMNXNCMRQza6o3xsiFKQZUSAJ8FAGRGKkqRnmipwe8NXLf2uCPE61isB7yU6mDTatKj",
  "key29": "5n92iZXVU9SGdwZvv7NmPjY1UJmmazUCx59fS7Jrspwwq2cvQdhgKzBQthc78ty8xBq7ezbmmGvv2thwBoJ6mSqn",
  "key30": "4NjMLnSFNjmoDvkdUEwnA2zKJgmiZEyqFU5sgF53WjBoJjjMwWLw5rBamWNRtg6am7e6bN6XKxiH67jHyhVJQe11",
  "key31": "2Q4eGytbrf4sWUHnJd9Xz3bFsmcC3Su2kD931E7NdL1XM1rA5ZaEeLZoPsdjzGWueyTwB5Jke7TRDRpJLR7sVrRA",
  "key32": "4UxBJJzgGmwd8bYe3TVXxHWMqGgQp6TdfYFRJWy9PW2EJrLnmdZxHjENyDc1iwTtC4scG1Vx2vXm3JEXEykTgkih",
  "key33": "45jLT8z9EwnCeeLaykDGPqKbXroTn8hmqDTUP4StMBBvRaehiKEioevumWVHe1hkiWxKC4tXUoim3ggAGgrcgvDi",
  "key34": "2B8umPEiPiSnbCuD426Ydf7SaZ51bnRSZXH7XCP1YDuHEUUZK2HzpedW5RzZEDk95kdRe3QyBdn3tijTVfAFPLyD",
  "key35": "3oyq21qHjbqydNGhij4Ls1hXBCiSq6AZCBcuqeGScLWxeWX7iJifBJDne66j1Cor343z5JUtNxHzSwfeqH5fLQKh",
  "key36": "3p45Wax7M4z45nZT16yNoTUt7VvuDKzyaQia28wTpHRN8Y8Cp73ozJc2DfkGhqk76rfEi2Z7fTkcXydanyTt36RA",
  "key37": "3EkiCjNgcH9XrXyworE8XpLJMg1U1ayX99w1H5rTDq7TJ2es2FZ7Rts71xwZ3WG9smQyqUyfFvkX55Ggg6QNxJCT",
  "key38": "4Y4TAagdcLrCMdEVLrz9VcFCY2oSDBDMkihJzcNXt2onFoThWZeoe3o1tboQtdWu5EQ8fYD3PNbhiWn1Petx6N6",
  "key39": "5ou52b1p65WoQjb4nCiLVWZrKw67M6XvWVn7mHQQr3EQQGNMTeeqEcFdccPBmXk3V2ihiwjgVEa1qz1ueMnHhY8Y",
  "key40": "4uZnMKeqozxUeEbape752uqgd7e957pSiKh9Fw2BFv3Dj9JVp9AjvhDRCB4KSFQR9ZP6DxmEFZq6mWxgiEVb6WvN",
  "key41": "33FSxMV9GVNztdGrbrwMRw7MXXdJx4pqa2FTvwKRKrkp6Uwary5VnrsULcBGcM5vZsSkMn74Z83Zx3PvpVW9gZn8",
  "key42": "573SNaKz2pRqUSyyBBXCgGKSiSwWABdx4oz58k5Y3rACCLXfFxfLgs6NLRsQZxtnwJ5689BKetdWy5Znt1thBESV",
  "key43": "ieTZErKLycKVqrEkfybqzxDTTPkpotYpeuR2smkKjDjhMn2uqhEhG8bH5y4CeLTHMFSojazCPBc6CBrNR7tXk2v"
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
