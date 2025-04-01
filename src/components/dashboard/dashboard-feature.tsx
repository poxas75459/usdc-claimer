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
    "2Dqo9f38AW5dtwNpRP9Aw2ixjQZrKmixAoDH7eLnrjuqkKAjHhuhMhZTfYzp8ijEXzFZqeKRtuwEHzNCPSH1B2N8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jn5nbuSFFmJoCBEj22he9XFXCSqg5MRW6fVTutWY9dnFhFRrfwLGCrV1Ca2qJYCdKw8oKdeKxx6W5VYT66pY2gp",
  "key1": "3CLvL7WkHNRb9sqorttFGNqtoWMDrcTRsMemFFjinGVasg5xgdxEch4okZLvQNyUh311jPKjTEvXhNStMh9XgqeL",
  "key2": "3zUzu8jeoEcaTytFQLE6re9yRjxjWSP2cFWDHG56caU8cBHagjG7mSUeNXizw3x8an9jdzF3mxzi6SFqJLEdqMB5",
  "key3": "3SrUi9aJdsdJaVKaMxuATVSwwX4sfZYfCsordwFt1BiZ3NNARNSuDSzi1KKzG29bT3qWUTfsuqT1xHoV2EZwEoNh",
  "key4": "38WfgsMPGu4QDzJgH5yQSmDcT5xmEgChh2yPZtg8iE7HLgKU8ZmsxgrhPup7afmM9LaeUqXKohTRBeFKcyZRfeUg",
  "key5": "613PFB4FGNvniRnYJWWGwX2t7CM9GsE31oHujz4rekS4PaNgKhqRt6N6JmNBdyBYyh8TQqm3vFJahX2fNjQsmto3",
  "key6": "33MFFSDg8FkJ8jxPndbt8nCr5RMJVA6zUtoSHrpTVssMUtnNRndJEZ2MwX852qMPCStFA6NVzQU5HNsfqoj2AoUt",
  "key7": "5TmVZ4mz5qe5RvL3pVCrgwtS4AUyQW6YNtGY4Rqups3heVvQKPqAWtTUxd6yVtenZs8mvVEybfKbPD3xBGdLJTZk",
  "key8": "wzq3nXCfufjFENGWGr4yHTQJRhvNmA1RarnoQvHVPDDHxxNHcksvEPgMwXAC9HqLWBkU95enX6PYTLUW7pYc5zW",
  "key9": "4RwgUbGj1Gs9aRWmXsP2qx2Gmbg3QjiG7SUjNjrSiz2Nyt2rhKHmiLeQHzyr6z7fbCY1nBUyizKM9jnhXRob6zu3",
  "key10": "4hS71bbZzE98KrXDrPJCFW2pqZwkRy81TMEK4xRgiV4EAMaATeVDYNFUv6qD54z5E71BtRfW4Uj3d6E3RiBpUtkP",
  "key11": "2HbP3az2Fkr8Q233PUTaMrNGiCZUF2UPzys51Jdsa6z2tHXBts3VPpRAz3pRx6LyRxL43ihiZNRAnTXLWdb8tary",
  "key12": "XDaLaU9heEd419X1n8sVUvv6GLRxf4zUoz4W8V2zq7GyC5q49nXzm3XmwhXznyP1M4JySfhNqgRgDujJN8h7Wtz",
  "key13": "4SgqKMmp7GvSfRbZbkzfZUFBEB4V8HVXJRo9ZFvdfexK3iB7LKzYNwnHXP55UfAXUee2oAGQjsXcCqnBNbfWUeDX",
  "key14": "37EjP1X7cUAjeJsBs5VNc9iwnxTLm28QKUUHpLvmVziJp9kNbQtwRiWD1yHHrMyCuVxfMNxj4hY1kFVycSV2h7f1",
  "key15": "3HrQHwfmqM6pYke6KDshGkUZYZs2wyxwe1vvDYAkiiRqGCLE4uedXFKhGvjEdws8WEeyidQbsguznCAYsZYJPxwZ",
  "key16": "4dADBfgNGsM4LQqqsAwFasW7h8LbShE3fkDRAXeiUHWfPLaY6sXPpgp6DiVVEorkqhhYA5oURV6QZAbFiUfqz8bz",
  "key17": "4Wbu6CvgVo7VFwJFSJGeL6up5MN8mgNUFCGfkfj9w5Br9Lv1sY7Eh9a8SRUxdZonhDCqPZmwoLJVDVzkNhVLG2A2",
  "key18": "5g3GkPRo6yQpvzc7MK2VWkfiLGPaxj52DtmHZaNhEcRG4xwBMHPqvbiFz8ZXYvxPJePHkTNdiSWcfQK6QmJH1wwj",
  "key19": "6SsrUk9BY4taUJwzgn6o19eX5hdwMECxeSv2dq1vhi1Kcm9VhxYjXSPrAhf3wkToa2uq6dJWT1Vr27WL3oWQSnA",
  "key20": "3fp7MMR5J7NrgA6LCLWEUcQk6o8uvEMCpdxG4cpY5oqDZM5P37RaxUL6CdtPFRTLUY7jfvumyVkH8u7QnuXqiFpR",
  "key21": "2FrkQav2iXjZML3j3TGAbMtwo2VmYfk8zLRfM3ud62XYj9HqkDyy94oCdvXUM3PEeKQn3EgxKPLuYW7Pgk569SMh",
  "key22": "e7Ymc2zSU6HyeRJNb1oWtsoEqN7nYprb82onutaHz7ezb8PqUS6wPmVzi3mbUFfRaJSRTHpw4eBUuPs4JxVwAt8",
  "key23": "4MQhccwFfs9nS5oUKgA5ZKdEYtUipzuUwJEhXHYFp94NSGxCAE3SLhedj2AKaSh2cRiKfiJzZ1wAtMDyuQWxDadW",
  "key24": "R5bxY9KrttpV2T4zRuY4d918acCN7L4SaGkDewKRCigz7woaSr7rzCMqQDRjWschyVjFSa2shoZ37PYayfaNbY8",
  "key25": "3WHEtgaes2f72HjiakmVQLWG12bjXHwJxnB4xqoqKf82WrDXomL53Tctbn7GrGLhjd3oudwz91PiRUN4eKroNMty",
  "key26": "2TTiks4uyukiKk2t3sR55ZKJedYJu6ppYkudWeb4gLPfmbNGnxrnhUJrdtXReePUwyuPMbYRCPJ8Jo5vdchHQGAn",
  "key27": "5ELkstqc1eguBGiWcxkcDTdoSfcVD6xy1AQ9uZfQir4E4c6JCqx3rECCZAwTiWMV87sVWKMpgU1vy5QVt6sFYitt",
  "key28": "3bB4oSLkpHd1Jn6vTvqEYyUKEDAaEDtMLfesanmdpYN1JnPn8QsqiRovF8G6RotXnTZqgP1hchnkdbJ9ueYypPv9",
  "key29": "5DmZqBS7rxq1UC7EzrmFapE598VL7dhXwdmZ13164VzMjqjt9d74zz2NDd1hXJo3aQLtk5P4WkWAJAubog14PD5z",
  "key30": "49yXsdBg2h7h52oQwTdkXqrN9wtb4LuWqZVh5T6tPpxZSPXzWp4gYVLvpRJWCHrkhYTgFLPsbT6v5QUEzGBQC8Ps",
  "key31": "662UjUH57jy6kGTzH3DG5Xf7simxdxxCNNJhiUYbX72RQoSuRJaz5X8JQ8kTvMeFxuHfGwN7dXMVY3x8SJZduwsv",
  "key32": "5MDCVCm442L7QFy1nG7dJJsQfJeCB32FMNfnUmtgT5t6SLwQLJmZr1n918Y3YU9Km1FeAaDwrRTPQqY22R4qaCQL",
  "key33": "55WKbMoyDuLMnb7v9kWzDj42jAtnQbZa7qHB35pQm1CJsELc1DNydhXLWS4mvdfmMyXtgs4wScYWdv1ZTNTZBbxY",
  "key34": "4uicm8YJRz8ALsqAP32xs6DPRAsHMfHX1LcUDW56nachJRzbi3WuJWdXafrjQv8PXwRFNqKREeLB1kCQfJjcC7TB",
  "key35": "4qLNgqbjWNsJPhaZi5fKaxn5rUJ7VNJ95th6PBzgbsoEDvhLH6zKzrD4NEixHVeiUM7y7bKo389A3qUgwHS14BED",
  "key36": "66BhshMZJwTSU8FqGdKvZDSv8T2cRyV4HSQ77LY2xyjXmUXztYYNupqmVMSYu1XDhj8guZtrqc94dBQfcFfCFpWL",
  "key37": "eZKGoFn1kTYtoomwu9JYb76Qs5hvHiffPjkcKGQ263fShZMyHQ8DzxRUtKVu3Ay6AEb4XdcRTzDG8Eho8F3EN1R",
  "key38": "5qgu3HGiMvn5fxF9YrEkcbmLXarf8brEUdnPfx5Hd63PHLeQuuP62aEBjvDPqX3DSDppikPrGmy8AWq8Jtev6b9f",
  "key39": "3pg4Kzk5osePgU3rAri4MmzVRCEhrGKPSJCdCKUHZeQca5yYLaaHNRshv8VwDpH51KyFjnKNnKxJP36yJnRwhhEL",
  "key40": "39TxQYUpCYFXV2UwrzPv9yGiNWTavz9sc4UZ1JoZ6EJhTabdTqtc4888GtyuWFMRW65qD7tUX5YPiVTnBaZWqWqG",
  "key41": "5uNbhUqZrA5w3NqvX31BNHUaH3y3pMWFM7p4hd8TXEYFKqXvTvd8YyGkqFVynxTASkH3E9NdGvkNRPzDyLeXKpE8",
  "key42": "3XS1jJ8frxpKDxC4J9jaCibWLoycWj4afqAPbSnudz3STBDo7bkrcyLREixmsx3zQQDfVeGsyNJ6eqXVtVcGEUZn",
  "key43": "5XfbxgavJcrWxmweAZ6KBo8UN9TanP5MqY61Yk11CPiDYmqpmxWWFx9cDKX8igMcp49sWewktVvP9mPEHJfLkAmJ",
  "key44": "3ULgT7K6QezoFYHLK9qtBXTPgRQUDRt7RCBFEgWHM14LUvuBdhytVT1FPnpmDQ3htoHGc8bdgv2ZCxcicQZrNsHJ",
  "key45": "4WL5mH4XJYvfHuHmEQ3fWZvGowMTgQqjQUuqHfXgyRJh2tcXCdGGXYXePrYTqYLVhySwjsJJAv5NeLWQ2Guo6hfK",
  "key46": "4hLSPmF2XXXZfXLBiwxqn7RXDFU76vwRbTkkFtMVKF886YvmbEYEB6Gk8wYj1dQTvpc9aWZsJUEiEUDHRvWqMg7b",
  "key47": "2Q6aJDFtYJARZFaiKzUanofbGfMcjJFAVGaqLqoFxNkBjXi8vdvXMfoNJ9bHvRAe7BaiiHhg6XD4c7cPBkF24BGv"
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
