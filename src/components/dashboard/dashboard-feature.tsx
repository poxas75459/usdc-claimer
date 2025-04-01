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
    "5toWmEk5uMM1MpeiewDgwvemcib7ZUj1ncyCQjy3tsfspfu9MsYx1uoUWY69vDy4WKKExNevXiPh2JvY5QKDenJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eyjdbSb9eTieZ6uATRpvcteKSPmU5eJyjs6c4raSe48JhZoJ3EASFYwSp2shsT6F3JJZSM24MAH3br7y8sNVJD4",
  "key1": "5w4KoSTR1jXAtUdLX6aKmDcvmdVf6cWJnDeQ9uuoSFGQWFV4w5Rx5ETKUxtD4dAYixnada98VkxiBBLqAFDFLbvD",
  "key2": "3vQHwjaDJUen2idF1JrAGTX7gMvTrXGfZGWPHYo2ssU5aPmHbT3MxtgfUszpqF4gQ9sCv8j2D8SAf5X4HJ5MY8JU",
  "key3": "rG8T2Sex4Qwy8tQaHJ6RPzG8589F1PuD7Zg22PHSYi5QWTH2mwbxaNBoyuuVrbrocSDAFAaFe6CSMTgLPjiWyWN",
  "key4": "RC8oRgAzhK9u4JXSGwqz5CVp1ciVixw9i1Vu3mYmtuob5wXt6gxVNbW7MFqrEwqQZonEHkXycNd6ryw7mxmfFZY",
  "key5": "5Kj5QyUZwgZZQ4z67naMyW7CT6QGWJhk2eJn8GSAY27BMew44JogjjFTHwB7zCXbizhF8KPivbsSLEFateEQFovU",
  "key6": "5G57KbznuMsGpo4cpfFPv4tQbsDcQttKRiA2amR8xoU6avgY22RgdrsQvn2P4EntVzJBJK8vei5LT3PutsF1Lj3Z",
  "key7": "2mx8ci8ihS9sfQsHx1a7omwFgSUrDmTQS8xMYyZB9dom41nmdfPPcbnw6bNLWHm2yRYB8wotJqkqMssuTi1GuW4q",
  "key8": "2WWFL1vYSnJ9mNBsE7Mzx28zckeqgx74ULEZuAKvrusxrKxFzfrFkNzTupPDzjoPPz2xaDRmGWaDGtKWkvB6fsB8",
  "key9": "5PQuzdyc6H4ZQzPoSioZRhh42tSH3KvtSf5GjK8wRg2wuz18Biw91roTF3Am1658xFD3h95YGg4Bfw33aTXsXJ3Y",
  "key10": "2Uvqte23FHUWvQ33pZZHHnvWtyaS4zijXQiSQED9mYZ6vCD9dhu1H8gVTGgarHxQcDJxHQdgTqqVt14F2n9zXioP",
  "key11": "7caKmdmFETvsfkudm7k3CCwJcnzaNJdQGHLmgrb4BJRoPCB5B4kixznBBvbgoJbNueNLikuA7M8Twu5pQRMZZhA",
  "key12": "4devfnvKzo82ys4TTPssR5CFyyTqDdojDWgVEBRdQ9ZuVTvB4fGizcvcPyuqkUKpbVpspqpXxt3zjtVSi7f8vvGR",
  "key13": "cU27DaJ5rbzEp9mYhowTUsJ6obroxQ27nZkBkpMx1vb1xrEbnG9Zdupq4wnpDdgrciV6W2pc5L5oH5MQvTGtLyc",
  "key14": "5jq7NxoEB9Tz2NaNHEjpAvxNayA81SGBhipz5fQ4C3wMqQx9D5o3K3Dkh1mK7bRS7x9p5d8wksA2wpVv3xD7KZmm",
  "key15": "5PEe3Wyr413B3vNpvtAfGZ2C9Shzce3QsL2xH77azHnz1jaZdjifuJqbfrozu2DqytHpg4HksvdfFZADTbbwiwvv",
  "key16": "5QT9ow5TBQ6YdJRCbcQajVoBzB74pcRj9U7kMHQRb7aSae49ZbzL39St6rfDX1Gza3fjQgyG4oueayWoX5PH7wJh",
  "key17": "5QfS7zSrBqm61ATU9z6fx1eem2w8Q6Pd35a1umMDk9o3dZdmB8YpQbDi5U2DzZLAxmVk11unr3zzgQ6tYqGQ7WJ8",
  "key18": "48hJsVYDwLJCZeSy1kc9LdgqTFyuXGWBbfxie7M2ohVrey6KDkAD5L3VHJx7jhAwaFmJokb1MttEsQzZbspbcEvB",
  "key19": "661MSE1kdzHWcgu2jX8hrUyf25MdrmSKkZHNw9wxcRkWnRnrDzTeocDajWFvqFwuTXvNf4D6hCcUCzYD8H5r1VL4",
  "key20": "2Yw4Di1e43PVmdS74mY8KXV34wjzbLfSB5RxRx8ZbbFi2swzxjFYtGgDDtkjcrW2bYj3s7Acea4YzxjWAsP6ybhJ",
  "key21": "2CvMve66gCKm5fs8E6uninDGjNdBAt1E2Pfh6JYvwnKGq9AShsHvGnnwNCxuFkiJUjsUE8TD4FZ4mQiSLi2vcRbp",
  "key22": "h3VHec7kjpNSzerVGqmCFAZ2uHtd1hEyyrL4tnNQSmcarDGyjfHMBE9kvEeKNopv8c27t4Z534iggaxXKeLf5Ay",
  "key23": "fvjJUShS1r3SqcbVYTNKSmrJyZUX7JKca2EtfmLGohpj9KKMvvXofZNCsyHDTjEk1nH2buadvW6NTydhQqaiYhs",
  "key24": "2QVM4NfDjcG6VVUZ3wtTQJyC7QsWCCiJdfDG4cN9pfDULGJFtLdm1LLzDM2YyvxLGZA4rM3xrccwPZZxYqn1JPt3",
  "key25": "3kYfJzcV3E9QgGKNq3DdbVxaqXizQht9mNXxFtZAHCWHQR37AYfNKs4V8P1tx7KujLZDG9kWvS8qjv3Biubwyxdc",
  "key26": "GpnwqZ3fsePqKem7nCDiK8nNLKv263zFSs9ChA8B25m9JNuRaaS6Ynh42qzLuZfynAKEnXTLKiWXcQSqkW4P7i4",
  "key27": "2WAMUUWjg6rPF21zqxLxNxXLuaRAPeNASe4N6txwRidmfRFLLBwHSNDZH35dkbL6jMBGAZrdm7gfDHuCRVmdxWrq",
  "key28": "NQFnAtx3L2m5MNKnFRhNQxgeXvM2EewQcHJKQEUefv74DcUGQpiZrhg3a3F9Q9xvbBySSed5w1AVs5p6QwhEWpg",
  "key29": "2SbBKdQFSifSivcJTjhz2amcsY4Ajp16SWXCCFNAm4pXpwc2uabWqKJ4QBKZRptN7pgyR8yg7yNsDrzoMW1zgSRi",
  "key30": "5P1kJ57QQZwQAPbsUfvpgtuhzHVNnfXK9SgxcMo6JrrrkEuEwcp5C3fJjtw2fYiu4UmXFtS3eo8jLqrhnSP6VmQ7",
  "key31": "vSUZLvNcT3Q1ZsRHLxEv2uBPfbMCoG1vVPxSbhhu5TNX95akbXxh7wff1xpHYrExDcAxMZ79fqqdbcEsSWE8kNF",
  "key32": "8ecWV9povFkHqCbpWJTE7f5ksbRMaN4MnKN5NRHsca6g1D4xoYZQadLUQGneUYFTPNgK6FraJYBDE4HooAvDHU5",
  "key33": "CnD1CPQUDcXxnwM1D2S7vq1ZDtwTuYLUZDF2ZNEyMf9fCVCDVDa4Rpfe8ms99KJ4cBreQuH6YBBomCyRR2V37cq",
  "key34": "4nAQLwJjyEinZsx6Fd8nDht64AJqEX151E6rpRUKyQMK4JPdoDjCvTyStNDyt3NrMx82JSc6G3huJvmcgfveFUXe",
  "key35": "3K2JgA8AxEbPEha5Veu81Dg6owQR4vCnmYfSAZJpSohx1gPcZeL2NqmoStS41gzV3CWLnAv2zTFtjCRo6pq2t5ab",
  "key36": "525G2BPtRVcLuAPa9oLbr9ifSzZa8YxkgqbiTLS2sM87LbuAPSnhXX3KEaPHYZgY9NGwcdKy56gxmi9qvACX4rhq"
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
