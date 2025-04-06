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
    "4pRpodkH2m89aoAcn3uFWBk5KCWUSTL6Uz39Y5wC49hrgGkxBUcFsNNNu41FCEuD521HD1NsjEM1F6nUUJThiCL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xzcmguvhkmi6u8f6XTxZ3U23wvehM84jXGha4eqv7qsGMkGiQBdhuF5FkLBeTkv6d1BWLyyKcsi8QRcHg3Piqxv",
  "key1": "5z4mNt51EvePWG5yCqxKx1jUKRmazmQvCrQtRnpCb745aUMxp3TuJXnHADXtFoYDnnBsCZRkTLMgJnuNnv4Tfh6r",
  "key2": "vYRfZ2xbLEPpKe5eHv4Abm2xRpHBBxQMQ7BrhY3BuRreASzSrNn8GZoNhvtqb8zgLYkJL7KDhYdxmqYaHhAd5zd",
  "key3": "4wfsRweYZgYDbPrhPVzZTyBhPBK3gJNT441f4GXv95N1MZgXbjESta7DUFihn5By2e2pNFAQcYXS6WRUrbdUpoo8",
  "key4": "D3z6gYYwtzEkVbpWrvXHJp4Aq6BfBMoYGZFnRSu52YXrewJLkFocaiHTFKQ3YnausXNyCt76UaFSR33rrMADsur",
  "key5": "iEkSgg7VibM1rdT4H6FRLo6J3RU2do59jvFoEdC8EyqnGLdgNxMurqSMX3aUeTvzvH8yRmVnxkhYeNXdquQxmVT",
  "key6": "4x1EWrZJJSZ3wP9DMwJL8yGMhiWACnPKxwtZK7zVUqRwoUen5PzCzRhFgMLma4rvpADWYH13WrBawZ9M8kucxB33",
  "key7": "5m1DEhKdgXEyxMDQB72bhdjT8Cjy5VZyaiVAvMtGKaUE9XCfvVQjPZR7XamyhmttVpsJeyCQeNrcmuDWgUUQ9wW6",
  "key8": "3JWKK9f3Ci7L8QxTiydi5NrwX1n2bhYxhbjT39f4iu3Pq9xnNjUUevVXfjw8197W9fsdjHAFQmgLA7H3DGbfTT1g",
  "key9": "3mv6WT3RXvCSQ6EyZgKy3AXQHQewtrBExhsqbcX6KEjEVxND8wXypPweybu6Ke2bUZxgKgWBAL6A5569dweDFukH",
  "key10": "33CY7tMqi7wW4KFr3U8gRzexNBLSfcUYh8s4ErYs2yRAfMX6cftgC3RAUUY8La3t8TFq19mFFa1tBQ4tpTvqVjga",
  "key11": "31MQcerbYMpYiBNoSP44gNDywvQ8hrYiMrZk3jwBdQ62fJdoAeYf8gmSJqCthpb6jntuHLhP4MgMgFjsp9w5uziR",
  "key12": "2136r9USXefb9mMqRicFq3RzuCftwBemmCttwFGD88fbBLiKf7KARLzrX5ue6bY3pyDSPJYSPyAWvRJkEpCz8qJc",
  "key13": "4RV1ELgbArq8ptp2hE39tzaWxG8awt48wCQ7KdE3yZEFwAiQ5qy1AizLWJHsd4qkLF2oYhFZTo54hsMVNM3o9Z6u",
  "key14": "NxGFs7Zzh3NnjEKi54mUsp3CoG6Wu8oBrS1bCR5eig255PK6hqK7Qocr7VLjLyMSBWNstQCWgqXDrKGgdDYuGLN",
  "key15": "2feDFnguvtzB5dxekDmiWuVR1Xzkot7PxssvqAQXnCibYmL5go6fTTZKBK7HySGpLQwvBqwLMbNgsCaw8TP1wwq2",
  "key16": "3kwDjrdN2ocMRQkvmYaMvRMbuFtKW3hApaEyGcdSoMKcCcwSMcXwdyqmk5gvJJyAjTNEhyNFpTyD3jH13Xnzew5w",
  "key17": "4pddxEWCX6WFvDUCJMW4jC49i3HMb4PjMNLYhwTHxs1rGEMfjdyArbHmqH3XtRbvGusrifpznrdPxpTBx2sqhqoC",
  "key18": "2UhLjUsD52cvM9bPWkZYMC7cjjiiiaXsxU53sLYPZAEztTm7ntrZUX68GNqMaFjapHhsP38S3on6dbzMijStjjKL",
  "key19": "4kc6n4WBMJKidPNi1Gz5KhTPFWsHmeP9YrccGUaKGDWCG4mjPpCHffbqAVoaTULMYwjMvtVLguGgxLrCgNiecFc1",
  "key20": "2akDZprbAp9QRqFtKFN3s6o1o3bpeXmzZ9xaZpMAfg7hWpva1F54fVoDprcg79mnY7JUudGbrgWtDq2mEC3v7LgG",
  "key21": "5G982D4dDskfwir8FM5ZBe2FwprRaPwmDY9qxyLjGWzoJPY4abUnua9GwW3EZDa6QAV37L2b7zkuhUum34f2G6CQ",
  "key22": "2znkb5KVmhahWcaznYjPwQDZ1Mv3UjtmVMdehCCBV6zEVzgCT6f9wrCnu2brT6hBCZCjGyewV7SxzwFbyzE3tZ4j",
  "key23": "3jmkXcRBEFXxcBQpTgBFGp648MK7y2wfgz4pdM7zRQdxMzLWgkSzKENcax68X34vUhoPwd8uLoNJBrH1rdvefEwc",
  "key24": "2G1j9BRH8DUkKatmSCrvEhtXxiHSdzg8MU4YUZKHnpY8pcL4C9aTrshQPJJWYbQYiAeYUKVtprm1j5aqfknikZvx",
  "key25": "2sqogjB9ywBuBLNPUyx6KuqW9CrBSgaaJEvMPa5zzJb1AMtS3Naaz51PdHswJoQR7jVFtgrysQcKAoNZTzyVpKz1",
  "key26": "5R7qARCP88skGdYT2XoDD8n7h7fmkbVA8cC5xg4D5auVtjTEx6FmWhBykcXMWkNZ8ws9hDFv8QRAon7mqCUGNdDB",
  "key27": "24qyoeH9vqutCKbZms39aZ9bCz7fEEJbpej82mzW1KRhm73nRfB8VMsRhxzNX6jghV4dqwzDwTDpmjLoTCvywZsn",
  "key28": "5W7Bi2Bv6bAUTDZMHR81RcumBtsy19K91bnq32KDkxzMT1jNMqConTm5swGgv14cTt8ya84v468p4bGa9KZNHUT6",
  "key29": "4kUiD5nTcxhd1t3SxTt4VFPZvFXzjb5sFeM2zd12d5EnZWG3qdxwGSYZPtzGRMWS9SZUAvVtzqcA8Eu3pG6G387f",
  "key30": "5Yj3YzasfGDQgSEcYo2BguNQsQcfybmNw92Wj345xiQgAB2Bin4HnHdkBLNEwrLGUYrPYM9CMDRu7CjcFHYao82",
  "key31": "4Ngvoc34Z7AktjewY6WSTVEDbUx4SFnjJ7qcwMnPcSLomCE7v2xv6uXsfax338mDCdZ6yLsxbauCjenGUNZHWg1p",
  "key32": "2T7eDhALk7veSah1sti5NvmwtZxX4XMMVm1jt7JmCkANajHd1TyRMkugoKqa1jrdjuLkYQMjjTxfFzv2RXg63Z1f",
  "key33": "5T61kqxWrsic7FAvLrp4vN5Gpy63Y7vqQNCbyJAvFbxq9nfZCxmXkyiQLXMKDm48HZRyYfJT3EHHBKNJd4QFntwX",
  "key34": "65YLj9rbaSswerCgY6fc3QSTxeVXtPKCQvNzk689wmM6qDNX4Hi8MwGq99yHFzEgRBW3JcoKYSmAmkEy9ikAS4Hd",
  "key35": "ArYrKCLPS31hnJaUPJJkfagmMntUna1EEMC7cEGT4afeoyC8CB8VNQmPiiBZt1YhV3t2ym7MP3GtRf7GsWXbUfy",
  "key36": "5NJaMLDi2KrMaRNAkN2W9zGN3kNmJwJBTor274JTocRcXSw5QzUC1NX42FLJAPrHruytT2ESZqr8TpmAmQwDvcN5",
  "key37": "2epnA7aYGpoVZsXQjSo5ZDKt4tNV613PL2Voq1tLitmUMN78PY8Wqx5GqRfBnewDvthnaVEjrQq7W3eG88GcDWoK",
  "key38": "2eH1g3SH273dEBzen4dT3xqxP4EoUBLUUECp3yKPWZaigXWmjno9uYWKwmh13StwwCrKLoMvWUhZ1cAG8S32eRLf",
  "key39": "4zyCR35pRR53czLx8p1AfkrkF8Yu18BAd8r1mg1QjhybXtQonxXY6Cua3zKVzhUhjzaXxixuycgfSzmBAkvzkqjK"
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
