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
    "2BCb2VqcMmL3YuumGdY4c5zy5qvX4Ufic3nF4zP8r4k3AF6NaDxTX2fjaQVmFSDKNE3aGDZJe1MG2Nz7EvtEkLNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VQ8ynkPrkthBfuVHQFQFPjfqDE68qLQVnU6JZnRsRod8veQ9AoWgbfpR29qK7dVkxRBpeZvP3ejT3yzwYkWBpUL",
  "key1": "4Ej3oHU342BYko4qMdrJ9FrVo2pmZcfQD95BVGZRWHwwnbimySUs5Z6PumPnzCyVFhEhpgfmvUASWjXyMBt8Kznh",
  "key2": "2DrooR98P94bMxtp5Wy4UVjKdBEuS9oVrHSJeeD47x9MrSQywRrKQjoz7CM61WwvL9ZaxqvmeRFPHEzdgymy51g7",
  "key3": "3hEHowaxVPuTQZ1qnZyq7vpzkVt7139UfBAdyM6615wathrb1iunWxurAiEVJ6pi8LAwG18qEpTYhTxsQeGLx9Ug",
  "key4": "3sPsUVcH3uinxAXCRsPK6sQ2TUFm4XqNoFnLqn5ekBLqYbQx3D68HfmFv6EYGCah4p5jsYjKfZkF4dQjCpcLCSae",
  "key5": "2YS5G9jK9yPRzi7Wt45Pw6MFpQnu8MfdRRt8tbgjCEYoJHnEohQuS5bcVKm29RZ556J813U37xVeqCjSyXS3DptH",
  "key6": "23TjwXGaTAgMkNirxZ4HequBw8fMaoYhr45U5VE3UykZUczR6ons2PEop2xzpTbEbZTM21bkHmimCsx5seEGjzUq",
  "key7": "5HaDgJAtM83sBpWBCMR7op1VZFVesjwBhGedY4dZjBNMuJBhyRdQiQjVdQXb9fZgWHsfUwvKRp6vz31NQznA64AN",
  "key8": "4qvbBHVwf61wbZQy3BWrJ3TgKeM1PV9gGzWdi7vdsvDudXbKMa29fAjX66Ec2tnCTMdrkfe8jYf3eKKGNZYVCaTW",
  "key9": "2Qf8QqzRE7PANt7osSp3j2TcxJ5EBadJ893i8p4yrt9XypfqAeXw2vme6jnVFJprcAoiaobTUn5YZcRSQB4zBpmA",
  "key10": "4cw8hm6qMZSdNKn2V5cXNLdY7hu64Ffu5sB9b8yH9yrVhWu3HpMwc1PKKdbpCbDKMVe96cVpKDTNNoPQUu8E2mVZ",
  "key11": "5qHoGvqcbp3C18WzpyHdRiDLGsxeJzHCxzADwsw5q2JdLCuJ5j5RqdvroEraXu9Jn3TB459XCLNWwNAAisU2zpEy",
  "key12": "wXXNkJDPM2HYP9SyEDgEnoQwo4AhBKkfao8UwGKto4YVhZBWJZAmnfGNNPxvsaLUWF3y7PvvEmWnZbbKWoLh85M",
  "key13": "5DDDFz9uELVRRpcbYFxCETVt5K6crj85x3YtecT7i91dncKsE2Jp75WiUFzh5Eo82pju2h1BxdhVFkySkyqcdDaP",
  "key14": "2XnZHBwdfZjqZYjffyz5ztwHCGKRvXR8tVaUaxHz2idqHToyQxnnXtSuuU163ym4w5tvtbaZkpC7Y8MbSo69YDoW",
  "key15": "2iuS2DxajDZzZe6MPvYJYJP3B4bJRXHz2fP76nDFFC7ZvXeHRj3Mhs9KejyQsFqzkH1NNw7EMtC9pyJQZB346GyZ",
  "key16": "5gzH4StSoxzYbhnniWc2Sxfz41CJYCsiT2wHU2cV8kc8441fkBbvqCybbwPKXxNChAYWAUC8qsCgX2Fyz9aATyV1",
  "key17": "4Y8LxRLx1szVbFRnSgVLtqB6AWxo8Vq3wYGa2wPLbVSmxKUTZcgcGZxn2tsCCZd5xPSbGv7N5RunCgvEntfs4vG5",
  "key18": "fDGn48t74FbNu3NZHqJbdFhNwusNFrXMoeRzcC7Er8JstBuXLGYVJ1JPmWb9wjpoZyQhk4oFCsAC9ctgRW5YxpF",
  "key19": "2ZVzQ9ptrxW6rxUCaGjcoBZVUDZEkW7yU6gcN6Wio7D4CGpGBqQEN7LQ9ghmQ3KXkKeQWUrZiYHnzgYAQAqUNBgi",
  "key20": "8yxdWytbuNxruxJ4nRXt6afCTADJzFocTfZgZbKkcZP755ntd1NG9WMeny3P57RqRCCtRTXw4Vmq9RbGwaLzrBk",
  "key21": "tHM5GXNrKVSUhsq2SY9dgEz4wideWHP6ueBMgHmScjjKZwaWVUoiWqBc4KGsyBofQM3gnzuFcRUjAKk7ayuNyZi",
  "key22": "n4cnrnGHkq9BpFwCYZ6A6Fm1ueBpSeRK3XM1Z2W7Ymgop6McWMcizeVf4jbvziXciBJLnFKsTUTHtuFqodmD5Xk",
  "key23": "2m4ZwpJEAcsntKdZhr2vEj8kvyY16x86vwHhH52zscgCiKCG2irkWAT559h7bgE2GkJAJYxcjmaXKor7jb3btgMm",
  "key24": "B1L4KQyon9P41yrD1xmma69Zbezohuc5Z2i1QNRqfiyguddhyt3wNsWUA2QcZ8R5G8e5z3rdZaNKZRRuPs9ZfV1",
  "key25": "48ZGhZpobVXzMsk79sAH5fXbT76CCXKkB56pwoDq1MLujcupP9yVx72EHrpk5nW9JNKV57nhZ3R5RQuiwpX2ykx4",
  "key26": "55DJowT2Pj81yxeSAEYip8ZCUZU9T9tSpjXm3FMghdBBXLhAMMetMWUpUErJPrCrtEAcC9rHsCu2uZMS5WhehTcF",
  "key27": "2rSfyemtnWMPZxx44j8n9GMDGzVzKo7h5Q2WtuMuwSa5Bdu4ZMoBJppieAcSaN3iV8ys7YrDh3cpL8h3KZGHe6cL"
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
