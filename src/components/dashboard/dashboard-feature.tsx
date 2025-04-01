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
    "5WDWSaJZfS8L9BwXGApxezsoeuXM1ruvfVfZmL7tzojdeUuSJo7zKZnkQFxoY5KodNsZ2bSms8dZhmuZ92uxRpMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cnpBr5ZuKkK99z8QBkiEJBLbn16NDW4Us5XmQ6UPDspqS19meo7dd3CNWZm54HL55bd1GVmghwZfWWaf55YbCbf",
  "key1": "B2t2SwWBKhX4HBEiqS3WWouj5UYh9vP261HqHZWf4jdL1gKZofMbxdXhTJvyTJ7gLuDcoidtA2yskfMVyQsBEaS",
  "key2": "eqK5CW7NVz6ZRcHzj7puaG1SFhpmXCQce2UQJtRwnPieP3sERJLyfQNy1wc5pW8xzxUPvmVVfENv9nyNv2LVEdn",
  "key3": "2hBsxHhYxKh6TLkYoJk4ewTpZ5LXWGwZk4D25pgVXQcAaVWfshsF6sHz8QCYS4RjkgHK8crUfCczu9uTz8NaUqdf",
  "key4": "24HLyrCnhaGph2a9ny7JntR1WLvaLA37hs1ij2GVvZr7MkcrofE4CBgSek8fdKF62nx5LBXEw2gU8UHnnU4FSFog",
  "key5": "5Tqs2j75LZu4uKPkiGF4hGfu1mdZRB5XanB4YuEjjut4QdGXhJ9ZD2uB5xxgSnahnbQ23DXnC9z5kE1wKZdTwSvo",
  "key6": "34mbdpACgDM8gkYRJ3DFW5UtjnFHhRAs24eZ3aRHSCKVdN1nqrHJBHu3wKfuFfVYdSPpmKirSEjaBWjhWdGzXCh7",
  "key7": "2ZKud1Rv6KJBQeE8VaPDLzmLbJSh8sxaWroeoVggEW5AWCJMe8xCJKfSiUXswzUbC6a5dPJi8E4vNxKjMxMAVJFy",
  "key8": "6r9bws9RQ8mXakpDiwZe8hVKsHDXsUXP8XnanooF8the6JV3ABj25non8CsTeFy9y21TDUCyUnJgstHfhUYyGCV",
  "key9": "Hh2SfvD7o6fJh3GQci8Usr1wfF9oG79DPh4hJYG3CnrSBD1kpQY1whKsZgZFqLhSMMef47tcgfGnBhFBj5r4SJW",
  "key10": "2WGaDcr737ewGNuWVzjQT24rWFJh7y1bnRQiuYUuZGRcVqyEjbEyoLouFLQSGerwHofPFbNzgki71FrJh5KCcGGx",
  "key11": "4c8D4sjLRttbPDc1APvFHaqdN1YEDnQfdr28uYrtbkNwNCjTMEogU8oRmQe6tbE9ajAbFCn4NxY26LBcy94Hp5Gb",
  "key12": "3Pjbgrz7dxb37LR7WaSmqvR728mzFzrXBXy38bD3zeavPv4QqceAiz81J6VcRMLtPfYHzzdH7rF2UFWV7hXTUbon",
  "key13": "5ydmn8GfhuMkq7dxGzPTL6u8bLNGqtKMKVKMHDsXhSvxNoY2nkzXj44koiEdsKpcf8AGvd4EsbhdGfjHSy9KF5dZ",
  "key14": "3WMxMcid129DFBRFYbRpQ3MbvfWH78kArgTRKZHsT4fmxtJrCNCv1zFdpy5bmjnLu7TwAhZemMMdPApwCu6L142x",
  "key15": "gN1qroRVe8joebHZSZ9ocgv9nhdy7ZDht11mgF3aJpWr3XxTf1H4wgWhwidD5DuKGepGsZ2J2pxNeHxDyxrRgw5",
  "key16": "5syA1ivnVDA7fDHYW4w2cuqNmDTbkj3oCsWoAGnujJByPbjcixcr3QCx4zGXp47eDKBi81TSr7cWxvPubRDdEToU",
  "key17": "3yn7xUX5PDKQ8mVPCJS3XYp8Tn2KrD6sZ92AQt691H5NFd4EFKSYtKGiCijSn8cRZfVCbJmXuc9TcXPUie1GZU6t",
  "key18": "5qAFvTy6Q9qwnaaxmj6AhFiYkhWUwXc8DgoJ5FEKyzSmskn7YvE8kJ3gXhUaq9g57EzUdvjb1Bt4dSu2PxAi5rSv",
  "key19": "3uwFDmixp8ysPjDbYK8MFR87TyXeJVpGJW5rwRhjASwfmzHGWuzZb9CSvEMsmFyAZCKZoj3SDKBcemfwctKDM7HD",
  "key20": "5AbhBasAeoXkftNApvghWErnW6meLZwrWp95mCm2DeMW6tNx7ZmmowhyRto9cjai3q5ExchA35QF3ef7XxRbEjBE",
  "key21": "4r4ZbcFyag8vJKbVTZJNcmiv12kLJznTAV2PZREjTp2dPWsT6HxfTnmRTt1FNCtYRBWtBDJV5NfWYcB74bz8sqDJ",
  "key22": "3AgJdvZ8YCRbkzBA7Ss2VewQnJJUpTmh6cfjFMgEfU5pdKyCLsJcoa1RMvaM4r1rbWqhGEdi1iAmgyHeakDWQ9KY",
  "key23": "4B17Ja8nRMr9A7fR5sj4Vd2sux57a7wQy3MhFSU8VD23o8TbbkaD3v2NjbkuECvCfnB84do55PupApfR3T4Twfhn",
  "key24": "4qqh6HdndK9nKwad2C3JTYYqAEcrE5KQdwRsDFfbU9CKPepDrt5GaVuvRFyDxi9Br3CYVALWr9tRdvNEjhqDgcUC",
  "key25": "5H9gKuFMwW3DZKJgjoUB2bv4UZ5kfBVAabdXYZSVVHjqBfsJn94xJwcQHfWeEkUsRkZf4pmaHU6EJRBwjp7xp8ja",
  "key26": "2B5U7rcYiHddPAmBjaUHRZ1P5cF5rhMvSKrgighsiwTvDvoaRyRcvqUQznpybsRB15YC2qNiKage7pqcdwn3s74v",
  "key27": "3agLSZw5YauGDeCvcGzjpHCqKyA52BN94wXEYiHNRCTpUCgiRKZSYtHjKgs4FCLYu2nKvJSdy3kpwgxc9xvXR8n4",
  "key28": "47LbALaRrG4UdJ24aNPCxVZb3U6pYY8ngfpb2XjGWQqf2TL2ryCZVnnX1u5bNFziXkrjen5UycFXvdnmWApbuBvS",
  "key29": "4gz5Jmtz4EpbEeE6QmKMijX91Q4BfApPaYuFjrZW5atFk87iFeUzqy4ULHQBGCcBfiEfcjAVjaroRja3XnokJDRB",
  "key30": "2NFodARvBBjD8dPd7ZcszgK6zoEaWpJx9Ysf6s8Xi52X3Vks4JuYAM7gnhAk6byaQmcsx56gdaoLiA9NMfZnwgYR",
  "key31": "3nbN6npWudscZSiUA4WXAFt8xpvJCXEhzzsN9LKjjgHvBGNFTqEwRipwc7nzdvovRPGSwzCSgpjrgcMaSPaRNmZ9",
  "key32": "3unCqBbR4ZLh5wukChhstku7MB7CztfkikErbXrd2G5xVeSKudGhHNRNRGt6dNGMwVUpPnQx2pA5opbuoMw7rFer",
  "key33": "2qNrRjpoL24r5BHZkemvLAfePdRjn1QRvjJvhxYQ78WXLUhcXFdRnmonf4PJwUYBJE4bmqwn79pnGrm7QuFTVAuj",
  "key34": "2fEE6cuVbsALbZL42ZZmaULxdWuAfaocXmCyVekes6tgFdam7MaVhoEevbUCfBL5bdGxVisKb6NZypiV3L6dyteH",
  "key35": "4T7pmSYp9Yq66tNktfCFyQXwSvAzoCs4X6SqpDc2vKKD4GNAC45YJfDo4g7KWnxuCRXSag9puSMRphQLNvgdQmRp",
  "key36": "3aJtgPSKGkJJJ6LJ818V35NSf52oQx1zfQz2aiWkFgTYVCKD6WRLj7Yf8WMh5zobxSxaZxTDRr9qSMSWNNq2MqM6",
  "key37": "eNM8XUu3KYQKmo9SKfQE5Kd4Phiz945wocVKWKgcysHUpbNG61FJt9Tv2A6ZE9U9WNNZGEfUCe7SeyDDEy7FDgW",
  "key38": "271fyG5fdwWTwLPxD1YnvnVuJfPGDbh7a28VFNQm56zNLSj4Codz4K3SaXt4bbEuKeVK7fbipjTu3aq6DSFBA7z4",
  "key39": "2cy1Q1r8qfePZeYbz2JE9MpqAfD4JpmYJLbVgdnuAEjFaBWd4vK9NXbJqZS1k3vwpZy4wXk7iDJPXXwkLddpQgpo",
  "key40": "5QLS3dfUD8mBCwT55fFcJZWXnCBo2e5qUKfnkYyQQ5SvATYxMX7rVFJLzxby4butTieJVVayj3J1qehA9MJe6gbH",
  "key41": "3rpLiVqAP9gSWAib94qMprhtCGZk8QZ4cxVB1xhUyPaoi4hyFxmdG8Zxf9wtWqkTwV8MfjKxTeDUBZfaPDt9mCPy",
  "key42": "2iSpswC6hpxHb4SzLsjBuHfWZ48qkwnX7jQLHyBwHgF7xtk3pUU1Ayvgg9ugaSBRJjPVLGoihYAnhgKh4L6n5oQ7",
  "key43": "5SxT3AXdYhU2SqtvjMMKGPNDRBViX5kN4pxLjKdqQBW3Q52LFfEfmEJBkiUQqdZvUq6cSCcT3MsCtPj2rZqKZ5rz",
  "key44": "34d9MTYgxFxyYsgyB3pLxYjxaCFvsfmyeemu5q3jJtXvpz2oXFQT5KMqD4mWyKT2QLQzwYs82iZ1FN8La1yzcmE4",
  "key45": "3wqQUyuozd3UqwFDmNBrVkhtvsAFbah47bPB4BWKYv14CXcCnx1e3xk54j9XskrYS7NzRwEY8nCEtjjvj5QWWE4W",
  "key46": "27PhGEm5pA6zB3zDSUDg2qMVByheaTjoM5yv5HH9AgwZd1Dk178PQn8oB6Gote3qQAMqecBuoUut6Z48Qpe44ij3"
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
