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
    "4sVoBK6VHimgdAareW9ef15xoACHoktRwEw8FyheDQ2Svk7smEnYkoFQZFAWMPt6ngFfPusd8FcQdB7zMWyRo3uR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bC7AH9XcJfskqE3X5mFerbpsfzh3SzA622GGQkjJTAYFg3RfPTappsYGPFKxZrDzHA6x8z51UXhYdzoJhgxM9jn",
  "key1": "3JacA36NRtxkJ6pSDSChg1sL3ss8ocn6KBVWk4iGb2XA86e2xXhSUptepEQCtLgCG9dCau3tXqRFd4FR6Ctg7rBa",
  "key2": "4wfwpK6J2toZaXBuSWJgxJt47FDux2JVYfwTYYh8ud6Xj5kpqkggf23DEAoq8u2HfyuLuWuVxr5jBhudTdY5ivpt",
  "key3": "cBUPmbTTWWNV5SHb66pF78gCEhivpWgMmiLAozyHD5UXrqyzm3fKdEWQEmLZfkJAqGiasfG8ujkm9uxpmzgd7nL",
  "key4": "3NqJUxh3P9y7V9mtSVPDh4tYyCpGbsBQXgEGsjcB3FhBQdNkLKMQXdEgjPoteVcyArKVYe4dsxwuruLVmU3ALbd9",
  "key5": "y1BuwRWJb7VNmbywVUdyaU2dn865xCPvcKmHWu4VqB3dGeji8RBcHntgkmmWmKHhHoeejXJb6dP1pAUETy4uJMo",
  "key6": "aTibu4fH7XmEba8bybTPBrZgarvEWeYPFprukiCchuN3mFvzV66eyUkEXH6BtowcLWFeA6ov9PHsvh3uZ66B41x",
  "key7": "4nDXfax6RJ7VbqC2YHeEZHC8BVexjQCNP7YWcJaGQJjXsQ55rcTnsUU3zq49LzaR6TbqTrjLFgGfckJjp9kg6vyd",
  "key8": "JbzewMaeLzzeNurKYcCPVusLzXEGiX22tp6raKTD8c7hX5RtjbXQDFG6WLGMUHi1r217oFfFq34o6C14QkdfHez",
  "key9": "4bVw4EESRHiSwkLTFY211E6mYssVCYkuUuqYmVUbYpnkgoJ9ZiQBqtpyameGpfGssMpyqcmYsZWhB6n1i4VvZRQn",
  "key10": "2vVwowcJCdikomxSYda1usSvMgrA1Zc7QnHzSjEnBkfoLH6XmhmtmbbywHVk4ReCbZBZmCFaheWwH2me8Y2mzHJK",
  "key11": "5cX2vTP4Nx4prTSWD1grcp1wSBJL19VEA49nW3AYkcoQej5th9CZpedQ2tG32RgTK1k5PqMP31mhYn2vW7n7bHQm",
  "key12": "4KXtuhz4YDbc4EjLX2c4ciYT7B3CwiNQzJFFQs2WD9hy3sSRcQjN38TMwBnJVjgtnmHyow57Jhc2d9F3cK51RDtf",
  "key13": "3cs6R58Me6qfite6E2VYjKJavBCMkQikD1XJrapYWPnmMRjVWy7J9t7A8pHxCNEmVdup1nSbkRpFTqxHxFQKUWg8",
  "key14": "5dcXtENvLbLxcPzgnN9UGfb8yJT1YdWDf6uep3ptwkvYPb4bdtUZKSNjwtzTfSSf5WbzxPck8eiy98DX6UXN39Yr",
  "key15": "3V6YiGpk72KD8uXZ7NoaudoQxKzrXbFjgPRaeGEr1sbnzR4n2Wi2Gm2XRLC8KcYHPMH9V8XNATSKpULwHWs2in5q",
  "key16": "28dmvvs5H2HvSryZK2ug6fqFhK69URuVv8zPjLrxQArRk1cjh78REtLT9PRcLtRgTmuiZ34BVoPokeH9MJXNj6YK",
  "key17": "NvjXDpARPuCe2LS2HLTBYfsUMWtY9RrH6KonFjpgTKyoEG5wfNgjUqizYtCESrqvk6iUoM7HXK1soWfF5GUR8bQ",
  "key18": "2YWjnEVosoziQiBbNQaArR1UZtX9iNqRaCZCH1qkd3yLoa1psxWAzbJMLm7xFdoZBUBZm4xHtfLmpetHqvE46F6b",
  "key19": "4F2Jt11HmL1Jve7FG1T5d4GdwPxkra9hivfqY2h7JusXd81jy9M9iTn8urTumQXvHZ1sPmbgjke5rUK2NdBXMSi6",
  "key20": "ghSPRVihy1uUZLpMq6tbpMfs3CpvBAYYL1LQer6vhgR2QsNMZemkQ9dH8Xxp9W57ZZ1NVaXXDwQuHbkWDf6AMFX",
  "key21": "64QxVkMUsmY7UQoL2qxnj5kFt4X1WfeTNKRNCUebbo6PCyyvPwMNvkB5DeGrQ2TeHftWiifs1UD3An6BF2sKhXu2",
  "key22": "64GkZewdRUms9Rd549QtMBZCgGVtFoEXGrfZtKSr4gMgnxG8V48mQLE9rQ99qg7ZrbPXg4RiQ1Cr48NAxmHtA4Jx",
  "key23": "1bt7kMTrjoXE7PExQeqZ9Kg6zrghTjnjxrd5HMLLbfx3BFSzkQkLxuSJwDCLC4hqxFYuk87PJbLymu8wm6a8v1S",
  "key24": "3HU2exbbFu49UGcjRF7ez7DWaga2pAsygXyXSqp1jUm9ykJnqUh5h3p8D5AB4HcuJQLJdcYjgPS2VF4Gvk2PiSD5",
  "key25": "3ErTqCFj1fXHujfawC2X8HP9P21oYqthSGsQ1vJi2jB1jrcixVgV97kozmaPrrbrCZPSWYsWgnguc7pFTkepHWTi",
  "key26": "5mUtBvbtekeSjNaszKDHSLhR6XfPuqnzwWRQUPiEFJKDmzcRAYkcsSVCSwtLtQBNndA9E9MU2BR9JMRMFG4Nkpic",
  "key27": "3QcBk9YbZeNdMhyDEc4DhsjKZx6AF7w4SzpAtGk9k46X268AAnQLKpQNgNFb7bnewM3xEE2b9YuCfrNkWYqjZ8y4",
  "key28": "WMRZ8v3kpiiMBp15KkUwKmeK3cmYSeMvzDXBdojVMD4oxUVn9B8PG99bqXDx6nfZyEaXJAqUQjA38YE5jk1JJRA",
  "key29": "QkhkLaGvEZWM1Q4CxEW2YqeSXPABh518r1VobaZXhLQtQrLEj9TAM31uogNWU6pjkY5z41aYKx3RWb9R779rvCC",
  "key30": "5rPvm63edzPEVdMXVMFoye8MHK3zXcAHMnpKLsJwJrVdQhTyveaUSYuJ8t6WiP14pNr4RQ7M2JgpvyLzRmwoUFwt",
  "key31": "46HwrttpjKxtqqLfGeNGCQ1jd1Q8e4mGZ3FbQjgdrUQ94uFi8Z3JqgVcGSKWdCoy8V3t3Pnv9KvGSseejv9aWfFA",
  "key32": "31cJWjrg2SxuJaogmxWyp5nhuH9rR6CdezyMmCWXTC9jqqKJ15ncFaeBoaNtx7dV2iPQ3fAfDVcEJUtnUY2hzc7k",
  "key33": "4UnP1r5pDX34s3bGQs7J1dV79NKzYHavTWm7w7K6hx8ZLVpmYBUVx5aoHkBNTC5JsFFFSQmZgqYkMPUN2teSSUV8",
  "key34": "47hfdhLsccJqxuCyeGjDbBGcd1to5bABWRKjMZNVgraN8kLeC8FqSVmfmo9EA9f4tmrm4QDFxBgRyPPs8es8jsJB",
  "key35": "2LK58FGcdFMhdSo6VqV4HwijoZ7NzEo4gYv5ApeVSujXDhbF8eC9pb3ZKD7VkY1La9v5bvmW58vxonVecr33K9Qv",
  "key36": "2xBD4XDM9rNogRG7arbLM59JKY8Xis1yuCEp2nLZRkAgkjhoLu1vYmzbFgD1aKpx5LX7ryFaD5uPa2R5Wn2aVv5H"
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
