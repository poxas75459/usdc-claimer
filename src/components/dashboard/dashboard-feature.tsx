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
    "4Z1bqyEKYVu84jMZQDLiptcGoG8oD2csYHoJwBZVDJ7fsyzJ9SPWjRj8HFdr2CvcJi68ZTvwRcj2UtyUTw2C8M87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jk8h3m8SGw34V9QRzdD5WCgzkSD62GZETPoDwz1SGY8VuQZc8QR1TWNTYfA9yHnwNpNhqA7AWspLQC7rm9N9HfB",
  "key1": "5HNXeTB1u41U8e8qGev3DUcCFsRGwrxnkicpqXiK7h2MihUUZ3Yx5MpzCyAT6oFaWkb9kLXTYT6bEg2zrRBYaN9s",
  "key2": "4EgYXgyXd53ARfa3ytmbSCv5xEc6v3oMHYStehERRffiNt88C3Z8aZdX8M9JFB9ogCJLWYySnK42KL2exJcGJiQE",
  "key3": "21JhPgNJRgJWthcN81dd8x67KeuCu7cJ4J3n6L8orUpogPHoXJUsUd9YH5NEPJXeUEhVeYwn1NWJ6zvTYq2dUsgo",
  "key4": "4W6NruLECsp4khbH157VZHu1XGS1gYDWBY8Pq8BpzppCFu2mFQVNEFoL9KTY34wkCf4WdmUsEMy6uX6RXu8Vs4YC",
  "key5": "5t4ensHfqwtctg8BBV9ACHY3jxBRU2uELiPZn6Kr7GSFrdnmYqB8zjTfNam3e2W7a4SztHmNjvXq623wpFSTH6QS",
  "key6": "3zmYWVjS67hSNkmpAELtj8s5QHkBa6wSV1mfpEYjDfx5BYeEECZPZVnV8iaDYHPtdiAL9zMFwGeXscBmLQmQKVJw",
  "key7": "5wJZkKYJt7o63YB2A3XpJzZ64E1YSToZJGEh3ko86Y5WCS18hfdbHeAVJuXSVb8h2JF7gGoNLmDsXL89PwPJ8VFL",
  "key8": "36ewhvSVUdeSU7n12J8tNKy7vZijuyzYdYfrY3hK8uF4zqPgRt9CRSbkm1CrtmYwrKssSJ45tDwZgFw4j9HHBLSn",
  "key9": "uXqbc7TUL33No4ZxoxY76re3Co8eeeXGUBZS6fFQ4HSHRnUXkDoz4gSG73c8wsTX7TXvyVPrNDhaP8FTQYmJmiH",
  "key10": "2U88zu7eZBuowubmizy5nnuFtA4rQCos2PFLVhLpjMyNVXX4TNa4BKzxoTWoCy7bVXSMxEEPGhEnajBoGeYiNin1",
  "key11": "3YNs1FQPsVGUn4wM7kzU3wYBzBe7e1abVSyBzBFfTq64QCTxGRmBahjqAaztKiUbA7LGjWanqkijmFDqQZtdjrs4",
  "key12": "jnfpp7iwySaxMczq4G8AqdJx4qZnuQfpPVkvd8vd9EJ5ck88867PcoYDZk57YJigeg4SBw7hEBhs5A15a5gdGHt",
  "key13": "4tM57Y2YXsiHzp4Bw6BzD6UdBSYAoSSHLjmmDt632juiW8xsZEPdyf9eATsWPpQbiuuaMrDKgJ8atpoEUAca9EbF",
  "key14": "R2kMC8FKJgZtpQBfHjmKhrBCD3AAmvV2yLx3G6MzZfECu1uoBCYuxfPo6gTUK3YnbSsfTSRPgULtdnV3R8KVdWB",
  "key15": "2a7C3Xjes5VNeKFBVb4j8DqUW8S3XVPSscDnfYfoq57ddNTamFMXZroxXXJ1iD9BRnoQ53EHpiRV2B8QnRt4gqjJ",
  "key16": "4mKGvjSguuPHUB7nEwLEbMbXBfZfHtzGCK755f6Caw1zwcnLHmbxHwa3B9u2Zsg21PGCUEnZnU4C2LyyREUpWHVE",
  "key17": "3Jg3dEk2V2o9nVg9fi1efBu6ZvunBcAMPTeE8ieJYW1kGijEgAx6cjAbpfRd32oyg51FPV288UzLAM99CSGssnxw",
  "key18": "2WqM45o9StznvzBET2uvwLU9oaoSX6fGikFtPZoChwz544jdtCvkEdD8cvxSCrcE5bf4xwm4atDAovwxqJvP9HDM",
  "key19": "2aLrepWFSfo7zVvuR6dXYVn7rSDUU8rM4kDbhG2zGpN4quwPuVdab2yXBJyDV1Mx26AKZ8HkfxTZEE186BNKpJZU",
  "key20": "5Lugt7G4bFkmXMPLqXmHVQKnfs6Hw4PpftijK8CGF7tjewTxSEE7vfzKre2Cd9PHA8JiBbqejC56DPaagWdXQhet",
  "key21": "2pUBtDMe1hUwB2T9T7S1C756SGrjygsYtZ7gnxhidKiBiiLQFHtNoUPe254AN7JfVRC7Qy2E47nTbRopV41oFGss",
  "key22": "gyq812ZAQSnYWu6tcyCQLEGmcXG8reQtSDsGwPbNDyD6fhHKLVmYo7f5CzrUjb8KLUs8dixrV85KEAkaV7oKRy8",
  "key23": "66v7qcfZ7nDqtF8xvcMqtJQVqp6sre4vSSHCEE1NpiSojqVhKSmsF7haASs4Mt6hgqhkr3dTKZvvsEUf3bwxNcVd",
  "key24": "LbTrdEb4XXYw7FZMv2fEWhCQHcu8U76Lm5tuUFmC1rEPxFgYJtvJn6gKUoSzAUkmb2pVXinAjWKCmUKe6vCrie6",
  "key25": "42QsqUKEhVyGUDsxzziYZTcxMWUxnnktzxuRuhfMK4rU36YN4h83yq4TepuhTkTxQqQySXG4vLpvJcU6ttzEpaY3",
  "key26": "5RiUyXvVkfYy8FBc8v2kqkB1ZueXZ3qTjgNp8RDdpHTrqudRKbLG9GZMv6r8TmSRu1DZKXtYpaLpsgXPUipQM4VC",
  "key27": "ECfwQKsJfRhxCRC9nwFwo9bhWE6rUaGroU2EfXFrpAQVbqQF1CfqTiZmqFa3MMLXZjuVWxek8w4HxqCMWhsWNHF",
  "key28": "2Y1vCTHsxfcxC3HSR3GmhakofzvSy9xMycKVs1TzZreWTBKkxiHh3rXD2LNfTKYHmAqruX7oNroWEeowXLqiK4jy",
  "key29": "5LT2JfngmnpEdykBYfMeEHHdia28r5KoUhiXSDDsuZtM11X5uVth6Sa5dMRAGX8G6oz4U9mFrfWaozMmn9xHkCA4",
  "key30": "5n1EvHvx8dh1efomz98JtHYJMJ3QmjEomyGamJfbYfntvNLyzuTLNct5eDYrYKrXMHKREUYeNBspx3jzRYnrgXj9",
  "key31": "5hceFb3aomAGg5q5Hiuy1eYyYCZgd4KPiXoheqHVxUWW9ZWVySv4tbqhcHgN31xGxAPCjm9qHEc9S3j3xeCE19Ej",
  "key32": "EJr5aXoq4JzWXCf2a9M3WXZUHgj4vDjnk6wejR4Evu68mQQ4bG39ZFL85JGArBJ4NHr6eFUPfiwyLA3xFUUtP4w",
  "key33": "2h75DD96KQvB8xBRiTva5HTj6NNft6GMAtuNCJ7hF4FR9Fjs2XXsEePajLhjqTcrAmPvn9t65kAWYx5EpNgr2kBk",
  "key34": "44iX3W4cb2FXeLVr68nFGTiqogPMySPbMRASDpESezeDNmeeJBQQqQQTvFYrtJxE4PqdGT9tjoJ3VR4zQq1uJkHL",
  "key35": "5vtiShvhHjBCUwSa92F1cd3AuL86tmhup9rdD4PRgMHeTmhv3DoYbLk3RQWLTa9ZuCSH3sV89gmx64C5D2uxpjCh",
  "key36": "62NV5WPq4H5krB9gwYTF7aXLrnYBwXQJff4pi5HzWha7qvQVoTrYxMGBEkPCBdYQqjoBMAURBa8HhRYJ7Whc2Z4L",
  "key37": "2UDt3KTgGXLN3542PATXXWLysNKktNSr5cecxw3uzYnn3KYrWgLAwPYxKkRKchG1R9Yg1UXbxYnpDwWonZ8837j5",
  "key38": "4hUdBC2J64PrkK6wygyqXVZNtxwFuvFE86FRHP5Fr2U6m3qLkBzM5anodKEAS3P6DQCLsHNpSwN4gASwVxLh8Tv6",
  "key39": "4vUeXbwEMT71aeHefZXCxdFUcbBwkepxncVuYB9vBvDjxQuzTiD3ZiUzeMBssXzQ5QjFvefgsMCB41ahPBhqQ9Vn",
  "key40": "3ZzhqSUQhuyN31GMidafa4veRnAKApkCNzDRdNBn5DYP3QLmV5FvVuNxk1ZYJZBRvMK5YxRCmKQYFP7yi8fBbfSR",
  "key41": "5v2Qixs4AdU5S7Gyc7XUzBBHU5Jzt4XEjxjtvrFYb53Q68veL5Rt1GaHv99Nag9nixtZcfSUgeukjtMsgwxs1n4q",
  "key42": "4D5mfoVCmh5szcrwQmE98bnEccKjGTLG1Q7nHaVx3n6kkUJowNcy7haFcotg8KM1ciJUuH4yx6xodcsAvCXaC6xa",
  "key43": "3wyymsWsf8ov5s1QFsQSQnEkCFLQefupQF3pvUqW5V7R25cfRVCbFU1sfkcGPkuqEc7xhx5FJ8Qk5RhpHKGF6Wns",
  "key44": "3Wu8YXaHUpsWjzB2BJw1qH53R78rQkzntVGf8taanAXVmBKg1uYTHeBE4kjWnxr6aivxWGxGJ93QYMxXheoXz2ry",
  "key45": "2rxU8QbfUrgUuk5FuKY5m5sZDcPkJGafA9aadQSpNeDMh9vEQMc6hNWtGpLvyt4FRkZA171p57ubWaN3BfBJBwsU"
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
