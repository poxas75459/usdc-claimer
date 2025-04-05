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
    "5EVoP7dJmycqaDEvdoTFpqya54zEnqkZ1PzNqgLgmRFqE8uekKyhUiEwF5yjy8oPrqBp749vie8UUJcwPwLkgdEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YDo35vtxHRPTq2fiXe7Gx7ug31y5JDF9wHJj26UdtVDfSsCUxGP4V2964KCgV6ghfWVWcFkQewm3S9EvyjZJcM",
  "key1": "5WqXE3SE8bAo3NaXpPaZJzyN3U2pKujA8UhK2NqE2Z2rbLAdzaFZHtg8dm3kY2LXDSvvZaA2XpX5Byzv9yaaKggz",
  "key2": "7fQAsu83J1ByUsQpH4wBazPVuTvNPPdsnJot3u5FuvzsWNrBLTjs64qUzhzAGww6ruACrht4ZYEkoU7eWgGP1RD",
  "key3": "2yMPdcsMiYTnXZzw9Z5hU7WYBHY1mzdnc4mZU1mGGFLhVmmyyRj1Vvmt9buyySv1KgUb1z1nsCFgH6Z74yL2UAGB",
  "key4": "2wSd9cAqDRJUNdkuoVRQgUn77wAiH9YmJYjVk8Jos2jfEG46G2ZdF7YFTz3DawjiUKvFchpA3Z9QhWQFwdBpRBNF",
  "key5": "r7BKanwoyzhoGGTSErRwTEc8eqmzRVDCzxEWx52SiQpqjA78GCBoxHrh3vgijSpGdqYd4XMs6KzXgS8bdAnE9NZ",
  "key6": "5vCsrnNUA55JXZw4tDbNak45FmQUpsBzx1wCy8tRFYufMMyoKn91NXvwyzfxyRoDCoAStsqm4Yoh8syzkntqq48P",
  "key7": "2AiLUUwwdoncykNE2vQm1ujasyp21rZZjCd24ZBnzKtPAR4FJ6sekWDzqwCdHV5bmgvpFJVgegV2xPz69zD7Kd2B",
  "key8": "3f6bNMFR6EiKtXiyrJBezDgzX1Qj4khHPPURzkMDXvnEQE8Y4X42CrHFBq8Zxqg9cX1okxHxWep7YGadKQK1TTiT",
  "key9": "4cdshuQwXm5M8EBBm9oRhXqnqBaQ5NGUPV8U2EJG1sBzDxBH4ZPNyLNyuFghsJSs6DemrgBZzcVFforwvYZYoXZ2",
  "key10": "2dPPDSFy72AC3mgkQ5HxQfYrCk2rfmbE4eH12bvcQfSf92mZu99QHosQMubpLaZe9QfQuatuVBtY2Pz88xregfdT",
  "key11": "3HhmeK1TKs2VsPjyAYZN65XCqcYg5uNzoZewdimSEqqtRaSJAfZUV37LJV1bThqAobyp5bUodqb6ke31VTEhv9hs",
  "key12": "cRpDMfALE6GWUgXZxYEHHC9q53CYabaiCjcmBy7usGMWuN9rFg11nNkM2DLe5eiFqsFF8qhgUFqLEDwqZ3JtJjd",
  "key13": "3C6daLwwA5YkLX8dzgTrC2mGffFsgPxNW58ZfhMByXut89GaeMUtbovhNBE2aMRVr2KdDvTp942PzT5UgyTAqWxu",
  "key14": "5kwYgbyNinLJMMD4QVcn5Y8kdfG11DjcphKnL33QNcNdcbPmmfiinudAvmuXuqtrh55gfMMV3Eu4XqX7rvkF8k1V",
  "key15": "8U6raZ2Ak8P2z9SyfXncuYtPmo89CkUUs158TEahHLHypzLehJa1HJVRAJjw6ANTMRi43rD4QSbzUZ6q648LBHP",
  "key16": "gaLQU9UWzuGyqoXc9ZpeyEYbyoNPL6VVGnk85c4ZBESQJzGNJfUxDiA42wc6oVkRaGuP4SJ5m2MeM6t935gVXze",
  "key17": "3qEEgY2dmqCvA7zg9jUANCKSZYEkvFvxAnswRBzn947avTo8F7wB1r76w39iiYm3jp5vnPv49eer5fS6C4vDuKbQ",
  "key18": "EtoSmndaKENPSaSBK3kbZHDgRXqzkTfLzSNumthdbqDWnDh4kKesbd1bk7bMMGyAJPk6ZiC2maaXeNmTQS7QHJ1",
  "key19": "4heNfk61RGHxhRMShJP94zDoC86jTaAkXFVPRU8emKpQ8V4xD822KJr1KxjdAuTDZRXGS8WW74qm3h9hcfibWtMQ",
  "key20": "472UoMGrRtJUj9qHbdB2V1FyQzSTsFwL8nUXdNYutvy46oUoiEWUrN3eSPSy1b21qCyrQ54C299hThSSuUKQ9TPN",
  "key21": "1y2UKvuf9JUu7Zt6iunpW92YaZrgcwdaavkro3qqUEbEQvhdDfeRWNZcaXVesd5mdUcFcfzaG48CawT3B9KqH3G",
  "key22": "5EX7dZEngmCQ6LdAnMrxP3scWAQP16VyKoXFR4NXTah7FjaczPb9Tgssj2itmCm8NQuYTT2yMy8mkCpz1cEm6iUk",
  "key23": "3gmZD6Efu27dMn6ax2koDqhQbP4xwLVZi89i99MQYHZRaynAbXSGoi2H7zy6PvFX6vJ4Z6toEusa1ZpHQXZvCKBy",
  "key24": "3pitKcmvZ2KcEzMKTvHmHr75254rRAzaDApD3BS7oF4QYKErKyszrppWniW6szRhBdbt5ERgEt8adbNoc8kD97mZ",
  "key25": "5qgHLgEDKhm4N5ceVxorN2DreusJkY36wwMkszYhRQAUD1qgdznvhbs5hecrQFzrkrtGedPwYctzwU36e5dfb8yc",
  "key26": "5Bewv8R775kMVRBBBX8TjTqCHWJKXRXMduXKgJZjTLY9ycxrufAgGyeDsMnAVx6JDL5TU8svtjWn8mRcWMHk7wfW",
  "key27": "2LLaw6xjarXS8yzL9MUiqmrs9V9gRPz1bjVPfkeFuZvG6TcJfSFCwYczUh5zF9TtMvazFNFupXHu2jGPzqgA6dcg",
  "key28": "4itEZM6i5LBd2mR4LpwVN3HqPEVZVxR7yzza13DGfbdE7ZUMoKe1mVLMHQCsgXHjFS7SimxrYFX11oxxvaLcbbFu",
  "key29": "4ar9G65Ds6paPq9kX4Eyq1zzVjL7CPjECg2Pnh2gYyxbgxKeN7xe69W5rCENTCQfFV3C8m3j2dFqdsXSW1kv3YhD",
  "key30": "41LaUXDtgvSrKQysTXFsTDxY7VsmZFF5pN4dUBRsEGMG1JkiWTKbR34v2zTSYdgQZ27DqKWCDSMeQRUKDxtatHo3",
  "key31": "3fNwnBHk2BtybAEXxo5eUPAaiaVk7RBJ6sC4PaYdP3a4xBHyCo6frDwNSj4zkPw2wGu5H1TD6iy6dq7Se2BuigNY",
  "key32": "22esw4QXZpJrvKKUPeS77yVftwewLzKgvr8AqDQGVmZ83fDXbyrc7QCRZvk9PRXdrxGu58dHpC37aqrLD4kzJZgR",
  "key33": "weVFctcpUiTa1rrv25qM6h3hfEcHxGyYwijjZ182s96E5YMnAbVHshTXG5nsKz5tXhvrexB4WxKRejcKanronP8",
  "key34": "gMUqVzaotDC8vWw9P9oBcRrpKBhmBBLgFE5GusJ378ZKWLw9jaQfp1J4U4P9d9nmfFB8v6FP2jpFn3Z96sqm7th",
  "key35": "5wXgvQYaq3nsakMiv3gqznZAbzUvbz1qdGDZTo5iHfrEDvFd2qUxiH2X8Cg3AXTB5m9xEDfJxB5hXKt8r7B4J1qB",
  "key36": "3aoA3qAEQHZ7NTWj7FczPL7eb8b2CBKvA92fdL43MM8aGeweMFtqy7361keK4QnJXSpLBYSprEG3dZZDYGzc4FBt",
  "key37": "4TZ6gQE51AcDtf2cwKmak5ZzRYMcgqRdQnEq62a3hVhZiZnAQFHt3YPMMgYrHHEUhhSJF3EyicireAbprPo4ddEj",
  "key38": "3uaSpf7MsiSQyh7c51QDodYCJYCsHCoAtXNfRTEqXMcb6t2wMSq6EgzVMxA8DPJ2DgKR295H2nK93KhHzEjsTHYU",
  "key39": "4uwPCxytMe1etwSz9FqMttJ9QV8c1nDG2ibdwrXqYrMyVeGeHwi9gP5MUi3AWE3xZ8rHFT5khw5yjcSyukqAD8Uf",
  "key40": "55LxHFGnjbQEy9Q9S3t4xTVLEZjinHhB3qbvyQFwJSRsRnZPmMi7x3a3M41h2RbBMKnPF6A2iiJvEejURv3wFVoH",
  "key41": "4GhPkrcM3bUw21RZBkDnKRTyvM9v8Bdcwc5b917a3Umqthju4SqhYigbUvB6JceqAY4MTpWLybPUmWAHVk3Gakgr",
  "key42": "3x7468opMzpXUVmE5g6gA7FrhzQp1pFfiFpUXqwQsmVvB5mxyQmztU9hmKY3Ak7c3ySh1w3WSnv67JWjAzFZ3LC",
  "key43": "2H3Rp9vCG34raDUXUhEYCj53t5NfmjtkFBqyEVJPeFqf8j8pKuJQuDbn355g46MGdj8VckK63q7TMwCytWZjj6Cf",
  "key44": "56ot89VCZnNcZ4rvYvy1iDLWyPk3btQNwNxdge8efT7jwHrCU2qiK9H6i6uP2FJKMLyXN4W5oNDYMLYQ16UEaKco",
  "key45": "dd26t2nQqR9AMF5MvLKGTDGKGxSvrrmnMqSntKbnzrS8Rv1VNUV1ix4S4TjemymebkeQ78RLpVZrLrpmTyHhDap",
  "key46": "21B1TLscwNGAJaEoo4JgAKafDt2Ps44RaFfPyEWmUvrAdqsJ4cNUwbNUXMxordSJFqSiiqF9EDvSYfhiY418h7zW"
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
