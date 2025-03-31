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
    "3RtJAuqauTHqTPYjEaNUNBvyh4dbUH8cFXHiNPT1UuD8a2v6qt9Ez1YrsFoQGtMGTfKR1eP59dND3VHeAohYfLms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53JxyA2Y6XmoRT8Fxn1WgqJMZDC9YT9VZAsHVvxmQtH6FcQqbRfvsaLK5vFoK1GXhQ8QHBZvawYHfSwF18f1gnpG",
  "key1": "24hM3Zbpms3hTE9FMML93VrB9qXiuR7awacZiyo1bRQ7awrVhqsRbC97wcXXW6bc3Wsu57dbjBAHWBnRRXxoLpRV",
  "key2": "sjTGQn7U1CNuGMGr24LQbcGoqNroeUsc7WdARMEaWyZKjzXb3MYtPxPNYFtQedR285Ne2MHpkGy7pyy6D39QoFW",
  "key3": "XdKW5y4STzeW7izxnyP6GgwM4569dhmqZnHC23Xu7s1Eg7P2Jb4whEsp4BEAKBkXgzuSVpFr21DCfGGAfNY9J3a",
  "key4": "4jQNxo56noLaJ5oQ8WHdwFeHgvKUH2PjtY3kiQxEW9jajqoqQZye71uXGnf3x36PEvmrNB7orwfu4rM4QvNSEL2i",
  "key5": "4ZUZK2GDE9kLVYFXctMMZUCKr5cxmGM7BPdm7E2GVcGZEay4jtKjRioRws7sFveyt6ZVWqZxX16LQPstmohazXtE",
  "key6": "kaqTXABAfU5hoEXsh2oxxndYpGoSdNwBQQh7kjp2D6Q7kEE8JrWphtityFvTb4hhGXbNY1F1KjYMnLoZiLUn7ah",
  "key7": "WA7kKbYYaYSNv19LGLqqh6shkJUcjaYWnhS2xgLirQSRype27bKf34pzZxzugttX2Vk18khTJcyNfgD2Bgp2PZv",
  "key8": "2qzF8KFTH6BqPvgGd8MixPK196U8LRxuVpGyPkc7Zcm5aCEdcJnLwsuudXbsTif5sh6fJd3m4CuWwotYNTg2TEmM",
  "key9": "4zgPQDPhSUTHrAnp1SKg6HmzBpGsJmejp3EZKRT1GCVNsWGB3ZASkkKe22oCQbzmwpQKe8h6mLqwEzYZhFXHxJdV",
  "key10": "4nARpdD8gfTt2C46wYb5nuVUHrLRYH3ddrG4mPaSwKuJqoDBRPhc4h1nvPExZTqswBDMypzWZFgp6DAaEHKT1sD2",
  "key11": "5xtUcfNaftkh37oR771p6jEYm4qV4mvkjBMyXpEkSWdF4ixtuTHwNHKDcpJSBy6vdj8x5qbC6vHj6SfbRzpkPUza",
  "key12": "4mw1nk8J1YHPFk6E6L5AimzUrWzbDmgUCWXCUJU8CWNjURVTdd92SBeEyAyhKEBDMjt7fYM5tvQZ3Ws5Q5JGeRRA",
  "key13": "2g98t8bdRkbfRCEaWjhQ3H1A9UU1bUoYnTj2W3k7rxMgx2om7tL9Hesa4J3Egqwd2msVYfGLuCwv8wSDJoiVVkch",
  "key14": "WKGU7J9rEUVDj5UpQVp362Ge3b2Xcgm2d6AiApMwqKqeDdfHNRhzqLu1YXygUzktPZykngNfdu2PFkNoh5e4i8N",
  "key15": "2P6Qpb7cmY5AaQxj727jd1uLQ6Kj5qXt8GLXQBwTEw5t8kEGFiu4KvdZ2awta3RNhixUwrqM9MuFtMzTNyM647YJ",
  "key16": "4EPiyancXrgr3fEaDTgmcdH3sQfiSD7G7jd5heXHkD7xzPwgBTemPu5rPkf8u1yjjy3LXe7Qymn45qsYNgq9mF3Y",
  "key17": "423tve3CAZgD95zTbbjr1dDXzpwF8UBWoDjC2TQ5gsVc64T59SMyKtwR3PPm7prExEiJ3o7AH11iziSKDg8Xsdj4",
  "key18": "3NwYFQboABmJAskZX8WBti93YPjM8rifBJk1ppZ6X7HkUTTq9FKQzCgjzzBrnnFW1sN1ygmXpYz8oZLFZKegCfZS",
  "key19": "2mUvdeA2djAhkwswB53d7cxWWaRoGJBkX3rH7WytSrwew6ta4Z1rRMf7PEPFBx2Za2h5VRwjnA2cTXYmBeDRrZsj",
  "key20": "3E6K3LsTqeZ7RjwE4Bi7vAgcqWNd37QmqgFCWFCgvA86tzirsCsfoKH7Dt2U8ipE1MsNpqKXEvWA6L4Pbq6xug1G",
  "key21": "5VVmgZUvk8mNaoLQC8MazcoqL7N9Asbmc9Fyos4i5jQCZCgNo2nZLJzfxfNi6QVaWaRX9SAzcLQUuZzkFYvB6F14",
  "key22": "4WW9YA7KNSoFFWyJkpAYyHkizfC1J3CusmHjJUCMKi1zVKxDmHHTPcvpaKLJsfnjmfRZ2P7ZBAwtixc95E3yNALN",
  "key23": "4g8jYYcBA3yVKW6qQR21FEThgBHicf75R4Zp9mEisZ1fo2dz3u3rSbLJDvovqagHfVoEKTLNuZcR8KR9gBcDNomA",
  "key24": "32eYCciJL1318rtBY9kDUwZwafL6ZFoHZ9eMv5yBPqr3LFCZLJSb1wAHhaPUhL5tzWY6vhGLdTsoQwaGYg8VszHe",
  "key25": "35NUWiuThJG27XKqvuPRrKPTXwk7NPBLkSWAUhfhBvw1wgVWrbbDjbd7dXEbeihtcQFXTgFzv939TWdHwZQtXjug",
  "key26": "4UMtEMztp8FYbizdnam7yXvr7izs8NuQUSx7bGhTSx3aWXXHitCRbV8M68VxjFuXG82js7tYZaZQYRUZ7ebjabUE",
  "key27": "3ZsLsLZxLePJTFg7Bju5Se3QJ2Q8ztgpCryZ3iL5XyEw7Fn5m2X9KSybiJGezKY8S83GFYfNinpedGNig545hGYV",
  "key28": "57JzkqDirKjWwRYAWAEhBAmfgcU2mGBkN5Bnbd8LYgyZTCYEtF6NnyB8cPSr6oRGUqDLDJJqTppVzwZf3yqpVPvz",
  "key29": "2XH2E5bUCRaWgTJYkcFAHTzyV2hYosyEVvRHhjfNktkvFuCRkdn9Pnm1ThcP2Ca3zbjnKVbUTYUi4NouKuPCqU5D",
  "key30": "3wx3M7T8mbCFfQ2FaUs6p8DPrRQocqTcmQyoyaWNrzFArHYYu1BGpZfLFwY4ZKYvnSGayrawJ7xSpUDj3VhPpY6t",
  "key31": "5w1CMnZzrLHsRZok4L3TYwKpAv6ch5vQBnPFSW6Q42g7RUKegXkcqYsvd87Kh3absUdwXza6G63N2hkTnc5bnYu2",
  "key32": "9V2s4y49eku4fvU3HnFBYpZWmBza4FgR92VA5M3wM7oV8wBabN3FB2pJVx3ZmtjR57ESV8n6BBEamzVcT8ZnpyV",
  "key33": "2PqaGcWXMQpzeCPJ3MMQKbdiS6ckazzJ9rb2o7h8JsHEsvKwsySWmABdBWK97DbmCd1cMV3PtoSYETZ86bZFP6VZ",
  "key34": "XSUCsUdnnXhb1oz2MchgkEKZCmCg7FoMPvzR4YkevdgxZ6bBQiThM4DynDRX75JUAA9n319f9QieoBFjLd7fJXP",
  "key35": "1S4CDPNV98fut7FWZoujrXkeRwVzwpVJNMuqZdzd3k8o44ENqhqsqVw64W6SWeLjZDNT5yw2kw8tGx7ThcmY4pf"
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
