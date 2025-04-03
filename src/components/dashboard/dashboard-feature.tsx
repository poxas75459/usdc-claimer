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
    "5aPoN6uzq3BWq476dnjbW2RwrGanfKuo73gHrHyzNJccaUHTdZEKZtAxo6uGxWwasR3pmWn6N4JBkYAGaKmqF8Vh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qMbYVXHz9XTaUC25SHrKFd3qr1YQFhiK3AZh7xPAMdfNGDzvscvbGX4oo6h5yMKKxheGGNagVy9jGUsBQQXcubA",
  "key1": "4pvui7NBHu3Ehe2PpzoScDKPie5m4azG1gtAH8amvWGbLYP6Uqcj6UenykPoTjxrnEtF11ji7DWUCAfLEqcdy6Cr",
  "key2": "4abeaKepeyJHXAfhy9TmdZ1TbDmVzx4XdVMhLPswxq4RbLT3hnenR4Qp9iYXtTzXoctY6HwDyiseGrT3D3GrUWck",
  "key3": "WarJudubCrrK3oZXJhkvTe5sXeN4kJ9uSmRYsPLsDbJKw3ZcaMy9F2zqWz6SznYeh3BkjHA6wZH8shFKVeMYWuH",
  "key4": "3MJU1qpGsUQgB5kEMpp9pXRjzhvtadr28MBUiSxkLDugptt5GkUYy1uevwNLbkbKfCwMZXRSSQ8zk4LHYkGKsWcP",
  "key5": "5Z8KkXjqP1fn7fLDHJZt3SD6xdCrdGLvddpg6R2BN2aiwRgxiSnrDFDi1YnmuR7AQuTfhtrk6kpLP1he6Y9ZRwjU",
  "key6": "CgYedUtDw2WbArFHcHBDuja8PJCVf4osPPy85i4UgckTnnJNSPJN7zFxphJMpeNHrhbizCyKRs6rV8nnngwYqa8",
  "key7": "3c8fbJ6PvoXRgKcZ6xCx7BwCLybXH7AZgKZzyABniJqdBmApfgYrRf1TTBLX3EZZRdLPAf317hZrxsGX69NSfbqx",
  "key8": "3kosjyBXXZHAC1PLXk2Ju5MSjGwJjimV9NXyFHptkosvkFdXBXff1f3pup91gk1ZSSuzgqyAHSYSsqWT82sQFgTD",
  "key9": "pkdgN33gF6L2YJExCb8wJVyCHDJQQXT5rhtuyLFhqoGAZe7WY1qkJ5P7Gp3n5m3ijudYhmiuJN5D3KpMyXc1ijg",
  "key10": "5uqFKQ79LWN3vWLjCvQ4SDGdKp4HzcvTtcgFMgupP3kbJNGxHprvtt67t6AbsSY7wgV5Ua71bT3yztNN5sY6np7p",
  "key11": "32QDMLD6MVRqmV4zthogVnfiqGs2JCQbrvtBiT9W2pjPFPcK6QoC6vraAKxYezfdXF7LKUdPcbuwdrGRrkUuce7",
  "key12": "3pphBbU3yfWhbCxYGGxg4YdaqsQvnPHL4dLaa1fosbmxEg6QmkJqiRGRhqDzWZzTjgqvmtZrUo9eTiBpyoW3fm5V",
  "key13": "yiCWo4GovzstBSnkKnujigoc8utWZgiDCeySRFTXcmrMVfgaMTrmUFRPePh3Qy4BUgkftbVXxexkA4gazUmF1o1",
  "key14": "3gLsYdQjGuwEkKHBWt3H9X95SVHk76aw2J7iX4qu9pMNZbB2gcxpGyyJwYeVXKVWJpo1Y9GqyNpdBwpsPse3toyw",
  "key15": "4jRd5nWxmFaTkHK7YdnB1vKiuDcg1TtZGFqMVbmm2k4dPWP278LLgtYXtpPwQ1VUDjEfJAWjVJQTd1nfST2CZgQe",
  "key16": "38QqUEYgVFVYDVGkKGApwk2i6KZXQNcvLRaz4Pt78y7vbBZsVjyGqrmNTtxrCvgyZBbuZPqY1SYRcMMxPBnLf5F3",
  "key17": "2oWLVxEhatStPce18BG5nZV1yJ9pg6TGF19mB3L1Asuun6ot5vjeKjVnXrWoM1Z65gf6AmjsGZmcAWWwF8ky46bW",
  "key18": "UE26KakTbjhsNszFeaPmDQPLmiKbD33FP6iqLKjrNMd3N6Q2ad75ZuciAoHrUQfmp69Y7QgHmWLrLXHTWuB1CXy",
  "key19": "21y5gPeueqd7N7exqsYCZYvsUNrofZ2xZdz8785qf2oT1t2NsH5St72Y94cGuwu44qTQXrX5fieDp2ZWvXWrd6Ut",
  "key20": "2jS629DkxMuL3cpHeztUtc9WGugaQPW1gUmY77JHVTC8VXcpdFJyASwUc41YLe4af5UkqbgVuvqrsJMzcFB8VC76",
  "key21": "vDCeqDhep13x5LjNGQNcQW9oZcWAurU7oUJswNCP9M7k7FHcSQDxqRMqyukGRn2vmabieiBDTbphozmeauDR952",
  "key22": "2TTZFHWkxTBgnQrNt1XU8gSJ9yLcm66iLRtfWbfNFTSKGWCAiekU5hbAeDF3tFHkyf4aHdHqHZT4ZWhxG22eLSFx",
  "key23": "F1YYu6hpgenZ5z4KN7uwnufzqYhDgLLfZ5rSuJ7uQhUqFLy2hXwMTaLT1mJo14p8zAAHZciJ82vAQbnhvGhpbSJ",
  "key24": "3y3jc5oTvcHfn5oAXrVRuGcTisvd1LrDC53wHup8WFLGWezbSCYLv8DXPJDg1e8qbZF7WjYYskfSESxkh8w8VFp8",
  "key25": "5x61ifPqkFzZYc4PMNbSjgcJ4LZDu8w4mypMn6AjxuXYponXS6zq22ySWtuEozBdL8Tob4uWsuhc9uXRwgnaCaXR",
  "key26": "5tbkdqDMMiuAvD4JftgkKtvohed6Dtt49BfXX9Ab6fkUQDmA3pR7qX5jxMzZwhue17M8g1AdobJgTXAxZZuciKk4",
  "key27": "bmt1Jms4GmZXiaJbZAkWg6ZNq7AYjmdG7FPk2gfduBZa8DeNJHVskgJrWpYvM1LzekrNxy3DmoeVGfoZ8VRgiGe",
  "key28": "4GgFBxPP8QZNekv1ds3VQTQM8Jt9f6Uo2yY1K9d6XM3aGu1iM9r5iAZd1eqaG4ApZ4w3rJvMUn24ivBq3h9gSc3x",
  "key29": "UjMYMVjsM5KmrjoP1H3i7n65RuZP1F1bgcoviDD11p5CmnzTk6AAh5wNQXHrc5Q4MUYT6A3BZfGjLveY2JCrq2Y",
  "key30": "26tEb3EVzpxTANLvoaD2kev7h8rPGJKJbkNQivtCUayABsQJV8MsnUouLjkHUM2f9AiT2RgWnDQTmWsocLv8FZvL",
  "key31": "3FcrwyVK7ZbzwrBHRwoaZKr32P49WuV6Gkke3SzzzrveHhSXpr47QwfL7w8f8iZrcpbFVkeYSgZiAmtj7ABJELs",
  "key32": "3RxxoQzvoRv1qzddHxrWFJwsxhmhNuNdQg867qXNG3hsrBvmteAX9F7RQS6YXbtdrDfV3K5gGuykR2aBhKde3S7L",
  "key33": "4n9E6i1LfzrJeGwypZcdYamwXVkgo1MoE82ssev2v9BC2fJFNG2FaKjJ5z7giCVBWoxX95d5Y5HtmRR4Mh5zfigi",
  "key34": "56GBBKYc2cAsHNBTX7XPcWkhYTcZBHRmkUnr8ApVDf6FrEtRDJPstmhL83JpLBtx5QqhoaKDYPafWGFUZgeRgLtW",
  "key35": "31pPy83dTDqMkrhNy98z8QNahdBwcFbv7UcJrDg3QHz7xVRKfnCe8K1xTsZSacvp2k1m3igMraFVXzTKZm6y4JQH",
  "key36": "4QpF7qLpx9cFvX48CFditNNF7TnWSXzHKLrh4Jaa4tPJ1zrQHB3RZSxuZpnxiEZBtWMPFUTcPXGwkkNGVmaY3ZeJ",
  "key37": "3YdrAuQ48nxxvNbiFoCZWJYf84zjKAAAUnZdgKs4AEV2TuoF6bouUYadDYuxYvEoEBmptswkwCAvzH8BKNzy5MGy",
  "key38": "27ZKQBNFcpyc9xFa1jQJxH5wohvBWa3bDCJo1AABBhLDtBarVZJh6pC6WYoYn59WsuFncDyzYEkEG8td8ixqmFS8",
  "key39": "QBjjkL5Mqhwss66ZDAXWekawtp6HDLVMQJbafmkCksyZzxTsAP3V4ktdKEiXHS5zZSFRKNZh83f1zzkYhgiAKXG",
  "key40": "2bkMqa9Dzo3TogcqzNWhdzjUefnKmc8z6ZscYSb3959XprF1nkndWkPgyDtfnzTMsS4fbeLqnbbteYujfQyUF1ER",
  "key41": "3GbHwTDqd5p8dVmaAuwpdgXKGxTeAN55q78zwYaPKoA3BtrsTPdBKHa68spCMRfDd2nRan49b2DJUKMfFH9z6UzG"
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
