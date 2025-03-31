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
    "2mwznPEvPtvAjkN5KQNLBT9qWtp5373BBUsQDPft13p5MbWHHsoeUk6Hdr3LgRj8vc7V6Za2xd9rwdzKveBNayr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oXQHqjfyMDmCYu9pKY2VMkDYTN3EUriMDMFqTozd5NJVxU9FSrrdfNcYjEeh2n6gYxfgUmHztrD8mkXdPxcGQ6k",
  "key1": "42Wzqd2F3zkPxwrUu2wRJjizfWFUHXx2VLoRoBQzEYERuGYJD66ueumTKyRvPY4FuEi3XupEx6Y5FBva6yAseWXX",
  "key2": "3MTGFUb1MMqGfpJVnZC17x3TSDHRZG8s8tTLo9uyEthngn7mEiVYe2M1JojCFwWyboAg6DDx97RHgSMurWytFSZM",
  "key3": "3hKQjaa7SMDSatrdLwgbBgQTtsMf5xViDJ5t1toZYoJsYvjdk1mXaTiyGZGovgVMqmhYBLy8tejWSpp8UK2bQHfQ",
  "key4": "3E95r83bFsHB5XtvMvHQ69ngTdWvQQ1bUJVy9HXumybkBcWogeMVQB27eDA4f3UGSGUY8CC1SVUu8aqcdZznY1H4",
  "key5": "4o7EwjHo6b4s3SBV1JihZFNQ2P4jFKXrzMyqDiBxf7hisJ18LdQTsGwKWsEWCWpkbvfgo8NYuVNDboUrTjaLFoVU",
  "key6": "J89EpVeq6sAJjytn9KEn27kqZjPjph7xprKLUFrD6TjhmcfR8QpjhDJp6SGCbiBRaoocME4VZ85CxLerxXyFsBR",
  "key7": "4pcL4rLVP5Pr1tGha3PE4ZYwfw1HELtV3x2uP8XFZS6hAXmxhX1DQwWcM5jcSxGJKkYFTEWDjNiVNQCLUsEja5Fw",
  "key8": "4Y7TTkzBYayKhUPz5CEte46G8D5G1gohYybQ8MzJr8eU1PojvtAT8yStZcXxrwnRQVUSWaGFtsFwWiiuScqkkDqa",
  "key9": "5mM3JrM1zNiTGDwrtmYGwKU9x4NNaZ6F8zf9DVYYSe86yaAQUpcJz2TeBBeRXDWtEq6uSSgYXLVQ8UP1dEcYKzpv",
  "key10": "oZvf6Bm3DiJUqEhchmE1dBZK2NJijM7HteJzcVC8kj8pt3maU1FipKoUoWpMFzW37aAYAZLUhfXWoic2NWYLwah",
  "key11": "2Jqxt2Re43FZnSL9sRsrtWfbD7aGiU4NSiUQNuTyaDJdFQypu72kRGuUpgKjfe5jcs5KxEcLeQh6EF5G5x5WcHfW",
  "key12": "cPbY4UGixAZJarQCHH6ywt4P9vJYUTKEDedGe7Rgd7YyXm93dDPiCZAAJYApLSYiHynM1o9YxXvJvFg6MykHbdQ",
  "key13": "5o7HjFM627Ky3tCt2uR7qvBK7gApmFGcL6omL7fJQqxSe5LNa3xZXZNvy1M2GXKCQVcvBuVvPhMbYqkZbvEHDT2t",
  "key14": "2JtEUV22ETHRxLLJ2jfBB7pr8AwV3TbL5Sz8uerMemZFCUauaKGifUku6g6x8RqiDDzAuRy8rjjJDV1PmNgCdk34",
  "key15": "5RWWuZSTVCFXZnU16FkbCbR622RsvCV1hGm4g61ETKrt5JQpvmmfdibrju4ETpXbp88tXk521gCr9toKSz2WyL7a",
  "key16": "3W2Lnp4m5gGunJxQukUXPM6D6XKADRkGWFcgN5HNDRJUHWT4YHRTYAZ2dYsB6PD1ggxCRWxxNhpAtPJKYiEueN8D",
  "key17": "4DarudVtNhBcu2GfH8ESJamYtkvts7xkvhnU1cM5FaJgFSmgyrUrqVjMfa6dmwFvBrUAbauNPmTejdhVNmAeSz7H",
  "key18": "4RFi2ydxFaTXHMENLafpwenffj1HPfVsrnNE9eMSwB73kwVNTeVfE5FL6FMjjV4Z4qBJzLk6JCLTpWFK4wwXF9MF",
  "key19": "5qdUJeucWD9U3vPvpoAdXDrACydc3GUvtwdneVvf7bkmeF7do6EqGzmga7sE1msVcjFXFS5FKtEfNUeAv8P8sUc8",
  "key20": "2ARziimJnfW8RRGisCMmHsAhN8EtATZuiNEYM4Tqjjcx5dowg9mtoi6aX73khGzkGJKnXDnhGRXAUgydgnoYGoQc",
  "key21": "65FRMZgthPFXHdN9TrMt4gFFbbcMz59qTKQ9WENnMYUVQuN3UCN7mwfB5hggrYUPGCjDHm5Ai4H9zRKQkJZBjUHP",
  "key22": "4K9JxfvL38BtPCJhQhtcMorK6zyXzPideHfTDRPQvM3aC19GGm12NAFVc18rQvYm26CPCeSRHfTCAU7yEFmsH2Km",
  "key23": "haZ2afqB6Ct6Bg5wecjCoQiuPnDxn9rgAa5mj3Enq3TFXHkpsZXsEbPzt6gr2B9Dr7GJgTJ9VYQEJc2rPec8VBe",
  "key24": "ZccGN5E4eqc54rRTebCkvw2jfE3PCc8XXZG7Rub3XriQa1TUyAeiMATHff8wnX6R151dLDsSooSCdhMCrPjkRza",
  "key25": "ZsenXDD7sMSuEajFhvWm1gLvpsJjBRaBVjLGZ28Y8FvjQ1VjXPQq114wASv9Z31WALCRcVe9nevoJwnsXUGpKFx",
  "key26": "4s6WizfaujjMQLGVnPzqeELPsgof3xVG5qpSBrERSzKTJjLyvrXtLorahLgoTZ2CM3NTW4mKzUo5aAwwcXXyPHez",
  "key27": "3dDmpZfe8W4B5ZqrsbwxbcnxHM8tLn2jKxjjZZzNFWvMqaoh3xo7CkzMydZ6qxFi5aMBZNJvQ9Pm4DL5LfQ6VVBi",
  "key28": "2BnLSxsUBWNHuSz2mZrwQGM36yVsdf7KykpVS9w1ehKt5tccdTZLeFfYHPYm4u9P4gypH7ToHGceEmE485AYT1hg",
  "key29": "5p7M9A8c8jCmvrzoWSTHG5hno27MCry1TCkBuNLvHrJs72s9cGmwetizZzFztCtDpjf9SKZ8qka4P2yQKvVcJAfQ",
  "key30": "4giYs6HL9ErxBrXVXHgxSCmbXKBegFf6wZJMK4szLi2dUJhBuzE48o4SBfWsvFChQoDJWNbj5he1DS8LAhhQkfC1",
  "key31": "Btpwmg75pEuc5P9KShuke9K2cahDXcwHYaBVH8uiMGSvyG9ugSxhgGNMPxJ2KDcXNBMLvShePUDxrVmJYZwiKoh",
  "key32": "5n8xfF8may5dtgAAQAeXCDjmjVjy3VkktggzLEVoeifydLHm5tUcJEi4G7QssBJ49v6xurbPJvLRC3XuFpj9Voak",
  "key33": "jommu2ce2johjQteqTe7Z894AiF6oQv6vqEnDFh6CKs56n6SgzvNH7rRDncw6stRvthjjMRjh8BnpVMmxsVXq4C",
  "key34": "62M3Tz8uQZddbk95R58W1ZmTyeSZ3qv7uXdEw1qxFEz6cJ7ajktMqyYy4trgbrEaiSY3R2gAKszqtyfLjbxj3iUU",
  "key35": "5LJ4t5mxdVJibYX8zwZLu2hMLNvU5ddR4e9eAm6YMuwYucMQxWceJP1CbxpG5fx4e5LHcobtCPCVb7ZzFhE89np7",
  "key36": "2oRyBoeoJRVKqNgXpkGco3gRhwz9Cuz7X3A9GBD68GBMS7nTW9PpYPSVgZsaeYEVzBCFLqTcvjebSxnj9ry5zVDz",
  "key37": "jFRa6K1qYQXccecxVf9f6zZyXPrZJL3egLnd8eko4swusvxeRp4ffN82Kj6Dn3645wR8V6dWJjkzu82xTd2GstK",
  "key38": "3EjgUgs5HNWZPu4tFVJTq69mkZrAqmXYjsNXcQQRSSRBsGh4MhZWGpsR4R9Yz6nmDKCZC9FroV5kaTq3ao5UR7HD",
  "key39": "2fM96kGoFeaiVqKZLPoLkSZEasdim3b8oWSmCndycBWW6ty2MPy7kf4XZPXbM1u2dXikyz2g9JJ34okjQaX2wZBc",
  "key40": "46fX8zDZfqDsLZ6oEfpH3pv321F8HPBiwGhcoxWUsmUssHd1Gw4NoHPBBHw6A6yNwSG2Me3d1yhpe1yjRYHLbGhz",
  "key41": "S5ExweBpz8SSQTAnBcvrQdfToT5P7jmmeFYQZJVvAco6LABPAj2swNJyujWA6sJLT5HLMBTAtr9XhMLsskjUjrf",
  "key42": "9zGQaRLbV1kDbMzPq63MZpB6JqhK5uo6joekpycVsJHZoyNZpBZXttPjmPbvH7XBqxUxbw639YZqYCYzYra5RqD",
  "key43": "4EQ8ZisKHQyqEi4bF4TJvwvMSuc8Cg5awSV2F1ogUCGFoGeHZH3FQJLrJQuiiAqFdVDn7FhHVpe75cqHpNEDJJ8p",
  "key44": "u4MR6kcr1YpJfJmPpKgT6B8iU2jqpQVsrUJXCknaKQjxtWfWHSURV4ajeyE7iwRBYZMPgScbcqWvpXAHvTpjhHm",
  "key45": "8ibVy5Jg6t5gZf35RLCdEw5uswugMFRYyAMyEY89ySr39mEnjmNs4NRWstZAw6CWpUkfqiFAMozNd3voiXfN1WZ"
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
