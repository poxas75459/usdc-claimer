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
    "5C9wWbfTT9isU3HHjENQzkbsZzmx5ac6QxyAV8msPHA6EQARzXQ5Td9mkkxp8NYGbUWwY25SRYHAdJuuHAbNpEJk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31pDd8sfnt6Kpnao4PqEWX6uCm7R296638gSL86r4tv62Uk5o5RhWsCBCGzLXoazzLxYSaq4KoveBWXXFrYLys1e",
  "key1": "2Drb2bcXqxyG4AwPL9Cbhgc1wqdEqQLUHmg5ETAnYsyqh9nrHuqTVPs6o5ew1Qd17yvoX6JEboLjwz8WyVgXLp4Z",
  "key2": "2KFUXAnyAmUHLq4FUgkzpheAsisG6E4nfm3eBTMpB2DYx8nqbkDj5eaEQPYhJND7gUopJBt2KR4QW3nuuBB56zHf",
  "key3": "4JJUhyyMevER9YiSTqYMEb5xy4g6qgrQ4GP4Y3EkSLhGzPSMdvfjePPwtu9i3RxLoHRcLdFz74a1rH5Pstp6awbk",
  "key4": "4x7vTbHWKSnPP8nH4E1YNP4ayaSbyezY9X4YtPkBc4XpV4chgPru4eH8XfwEt4HoMk8w5ceQYsJpxymwWbophEam",
  "key5": "3tVVmvbTHTNsS3D1drPcrv6id64kimqS46qNX2Wuy6S47tSxaUXxJQbXkXifetfNaUWUHNe5NQfBKoesFiJKzMAg",
  "key6": "5PgusrigKk8dXjk4YPi4jH5Dt14yqAQThjmGF7CS6Cu7V1rsLZeFZp6H1GH8dMzKZFcF5TdszF8TrEjiDmxMQVjn",
  "key7": "62KFpZFH5W2kQyfVhm1JNY9uahgukNo4fe4pobEx52wmMeh96wmM8ro1JxEMAmxCKUYjYvjh1zEzEQCeuv8Bpw3x",
  "key8": "5bLjHm3NXzvYh2gxQXNHKSPb6EVGvtpRSu7kfTRquePcjzMhZMD4ktYXQoVjAizxzN3wQ3YBqRJzhL5zka2iyB2Z",
  "key9": "3Fm1NQRa9J7W3mXMMPb4r7r5wTUcD8W4CpcBWKg1sHHawNUWvaykNUxyMW3JQE9tNFdRdxn4A2s23X7KxqreVM4a",
  "key10": "5LCrphD7h1fwjPzvKTt8T6hfehYRavotooKa7FKekYKDLnoaeAzMjEhKuQSqbnag9dzhvKeixRreTApWRKp5gg83",
  "key11": "32UzGWoPtXr6kxGKabty7jMy9LMufsDtt335BfW9wGr4D2JSMTY6mpuBMVmUzW8ULrRW2Bxe9CV8X4sHC4zkqFJG",
  "key12": "4eE2xsm2f5ufU4vURPHr9K7pnYEESJ22kFHrTenJ62zVogz3QmY5LrZCm5sAXZPP66Yq4D9BtvnY3sbMsgxBa2ms",
  "key13": "4sqY5uZPmhq9uW3BCSNwkPnBRZqJd2JvsdTXdvJvVNp6m3BN9h47Z2Q5r9rc5r7Nw4xQXb9GqTDG6ym7H9bvg5jj",
  "key14": "4Rrh9qyyWoym9HKqjT4GKemSsKdWFpQwv8RK7icBk83zmrE6GdKTVcBHNjCRepnxcfkjHiYAAA4PXR8tJ1cTiPhj",
  "key15": "5TSWgjDmtQhHBfkfxQQPpdYn3GGhKNnyEUMwzE9sFQcEyKRePRokSv2jwNoPqjg1hahozPgUrZVgagSCmyMVKgd",
  "key16": "2uAaFHtcdMm5KVzXB7P7LSLbxiDfbCeRt87M4CcHdZMvP3h6Ptzy9BtYG2SQFTf2nxoLwLkYFe9dYHmBBWyHfccB",
  "key17": "5jJbmevD3aGC71pGBDPirBXZ36wcSkazT2gQYcD5EqU6WY3nhDAjj3PFvQcK6Qj6R3W8DL2wXHgLqJNtYA6JH1E5",
  "key18": "2qARpvVhhdB6B69pBtZqcmusfFR8va8RwDh4nxmHDcAxtpCGG6QJemxH2rtE9nsJUw3GVyP92TrkupfD4e51PKvD",
  "key19": "2sHGZb8kMveJRd43XQrZDfbn5DwiV9p3cwVrvhTeuXFvhDWMQNtsW943Fhb5uJVRVc3qqpvKvEsHYMBCzxqNwDCS",
  "key20": "2gn59i3BYvgtQphBdCARHXPPFiTLUtt9QD6H1UUaHNhFTyev9D7nCg5V2CLujeYtjuopiWS8dQ8ZoFkTs87EhEV3",
  "key21": "3QpByfjv1gZDjWpygLNjzbuMpYukrXQxKDkApYWZwdcFG4kjnazxov5Dxk8UAajre6gpKyvKPX9xLtGFiY1TKRne",
  "key22": "2pAuBXQs2aMBqHFWLfKyoHu1NzDMjqGNh7bQiAasDi8Fh7rZu7Mm13qMSaebL5xDaaNTb2hn5xsJkngE6s5skE46",
  "key23": "5hc469t9hYXeoxppikYfqrUnYfWFeJWhYbdh67dAAhio4vmhyTa7GgV9J8ze66eDMWakUWtXbDTQFZsSmRoSZ16F",
  "key24": "5i6VxBjEcvFzLmsZfWAR6qeCFqfJq5zeP43LofVXgouZXmSDtVsw38ob8xuuow5iKSNuTF7KcZzyRt91gFwEqk1Y",
  "key25": "4d4yg8vCjw1uGMsvzh6fcgsFUVRFtnFnWq4QzN2RMpmrqgPoufystDefo1qijEczw5uNsegAcG8qKxzo2PLVErqc",
  "key26": "5nv52sLiqu3sAgkS2wXczUsKHnLjEfyt2N44r1ck7pvyKvSiJ6FTzu83zeNKEFKPa6JKsorTvxPNbU75DSX1gQKD",
  "key27": "5Ennzo6fRXdHgv5o6KKVDez32fkn8RyDHcXQx4439FdYij3x13dxztTJkSCsYfiJGHmHen3jBpbyEqe4QGF5KbwA",
  "key28": "3BCurgRRgAJY96XRFDgNaQ8VFGm8h8K8LYKd44Qx9E1kV5SCVXTkGHJeRaKBVq8uLqigYxh1tckhcw28mi2BJcgC",
  "key29": "3XMqVjTz7zVZs53Dy5GtbDXnJDyu2oMcjJEYC3P78Tp35MfQ7Byd58pQrghru2QnDfzAdYZGtCgXVnzFv5qzMkCg",
  "key30": "5pJEdGqRpPhQL7PTpyHnAfq4rfXcbtEp1b8MDHEjV7MQisCxsdZu3EFTWUcgmJjLyNhSHrMEH1ZumQpXJt8t4G8f",
  "key31": "aLW4NGXX3D492RSCGuJJmXFrMhiRC8xGRwqpU7vwWvgmWthR2REHSzTtRdwRg2pwaLqZVbg9t39HPT1xYQZxnoS",
  "key32": "3cQezSekakDRjapmGi42cEfsXW5pnEambUzzHCBMtMbqDdT6o2fsKJEGazremonGAVPC4D6K9TTT72o3WMc3hKuL",
  "key33": "7YhxbnEHmRdBPsatZZbw66dD44aXLwYY2iG2UDK2hBS1NvTivANVzEGkup7QoeMuU8QLf9m14uzTYBJ81ury9LR",
  "key34": "3cpLtuCcRz3xJywUK1J3W5dgxNRtRr3ViaBvNdgQhfm59rJvWgTTwoQVJEH2gweqR2gApg6zwNDC4nHxR86ZYQum",
  "key35": "2w28oeKxZ8B5U4SceVVy8UdpUDw3tq6HNSBwUsvPJZLV863zW3RX9ubrqRKcYsVJeodUYV72zXopRDrB2gVsnyMo",
  "key36": "3iMje8hyC1oRw4TKLFojQHMEm7E52B7rqiVUYTcEZ3bzecWtu4DMUFgPe5A86a4j6inDAeP7XHPpFEpYB8Y3XsGZ",
  "key37": "35xhGGonNijzEVJgCTCYaQV3R6wy3vzeUhP7KPycAmkxcT5giTwW14cd2xBSk8YaJdAWEE1SahhjcyQRML4N1BUB",
  "key38": "3u41ijhRXMf3Tpj1ssE63AMdeTsm6GZAUfxVe1B5E2hZAdZ53SPnTuEq1JQQKgnXwn2oJTqrHanumNgPD9dPEv5e",
  "key39": "2G2bnYXDzNoBvgZQpMHniknp7TgcZBvhHDjVYBwH7MYJKSxdPA57q5VdubXPkJRvks5XPjnAPgr49D3VT9VVb1eR",
  "key40": "4iuYsTbyNfoxxSdAdsLXXYjLfqxrkHgPGfw9H9dwzpL22kxx5CbG6gLc4Rqus6NbqoPPy2CVYSjGdZjNXgBFWXAg",
  "key41": "3V9tJmbaNRh7AZNrGsEuwsTqmhjUFnC2zsPiLDfN861wF3jnuYUsnnM8nnoiM6AmYXb684WwxbePsmxPtPvZUAtx",
  "key42": "2aVkeHTjbLAds2rUEY2B9YwbGLZCPvZSyMrXahoKJ58zeXouoVnc4pcPszN4aLsJx88QRifBTJG8ZVuRZYU8g14a",
  "key43": "4dEDudsww7WZRyQDv9cm5WKejHKiUqKhmndxkEtocp9L31ZJbpKHUcBaqHnSpUcWC5ag9AkGDcXuovGomi3HtHRj",
  "key44": "2CtdynqqrJz4isKHMe9UsHqdLtxDECByyf2NhofqZHsvYcyp5gpDYCCc4enbxDSvug7VKUPmrhjvF5hAaLtVQ8oV",
  "key45": "4NxjDpmysaM3SSkEEZWXCEbZD7FcGKFj8c4JzfRPmUG669ZJWmp3AJfvEtUZCJisfin81LGrrMj1N9cRcA48UhTh",
  "key46": "4S482dM4VucQKVPNYNSYQtQL7HpH3ttcPxbQ3iEViixcb55Q42trBfRnoUXV3TAPnD1PMzUpw6jiHQYQn8xktYw5"
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
