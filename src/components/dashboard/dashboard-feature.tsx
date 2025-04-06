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
    "5RRykf6Hu85pLcRNmtbaCBfKXrogktkmGxJJsfkh2bVBHmThghJnk8aDqkv8fuAqx8HXUR1VSXzmRCVoCanfz8tk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EA6ykCoA4N1JhibxchSNCKztBjxyYP2Tc8kScLahQgWLkmu4NPfFcAqWUknKMy7oWF5zqHhPzBoqB76ZY1iUWaF",
  "key1": "3rPyuqyzYhKbmAsKLPS1oaLKQCdNP9WTQ3hyYZ7b32jUeoKg41DTj6rqEuAXo1o2cEs7Ttqhmg4z2xqTnkYrEKoC",
  "key2": "4zE2JvUWuNKHoyifNR8AxF4XmJ8nYHWionbnZYvHwQ9HNwkzXuZWKTDG4pQgnGvDdQcZseE8MZkuAfwST3wErvR2",
  "key3": "48dJ8WdoSxHh198Wy1hkka9Y5itCLAAfAoRPwwHvup6Pizdue7hg8BSigcwQP98xHKwPv5Gj9Vse9nXcNjQH8mCd",
  "key4": "5oR2yrQP67xCiVZhB7eYqe7hzdYaVFsWqcYrQvKktEqFRYTKXRZWpqCAgonxV24V819Dk4kr2yafsRac8tfwHuTf",
  "key5": "4zVBUXtEy719zXofV27jBtSstQAb7WnsWNYLMiXMLZrLcM9mGRt25Q126ob2hLEjVBkcc7m1fxSkQL2XuJGtvx6D",
  "key6": "2NxTyvTHLHc3dNNbCyLLnUHqKi21k73fsFeAuihWnnRwk8BSuU4RJ8xFHktuWAGPBVVQKmpYpBZFTBr9w6cvAvGv",
  "key7": "3zffgRt9T6aAMLWV7qBq8zxMvTutRkWSGWnPsDZ7tCKt3UwZNdKjKVMq2WKLuSVNMKb5gQyzfhvy744najQBZr98",
  "key8": "5d3ep8u9B2piVqxwLFmSMjqWHfrP9H8UzAqW74umrFnyCmUfbBN5RVjMtPVSycbT4yYL24Gd1ESfXfvfbee3gEns",
  "key9": "3d7Xghim77meWncDraPRKH3yVA7QQzjsj59jbjFUQxnvvbidRPXoYEqYavepevN1rhtKfXTAmzFQ89nKmoueypiW",
  "key10": "4aP8CcawhnMdz8MD4FeVYVu82H9TnFWWbkGTSbHx88ei6foiXSqa5vRXcUddxa5rEwbFjdX6s7UhNwQSYTUHLvaS",
  "key11": "3bY2yQUPwkr7FETDLgaT55U44RDsfudmiWGXjTuhS8Fz4uV2J2XzhxUE8xeKm8SZhFCHKUQudSHr93uSXZw34fnS",
  "key12": "4KYXwe5yGJ8nzMsHcL9YvbaeHmpZ3n4KycGaPr86yrTMNGuQ84gT6gwN4KUmqSu9vbNFp5cLGq9nHhxMaGxfoeSV",
  "key13": "2ayFoLbBv6LZZiBWBqc2WcPyzJeszvBEuS3WAnBjjVxVdUXUnQmpqBxsfor4G2FjXt358xEcn6NhCaz7j7eancK3",
  "key14": "2suSXnWhTtbiooaGEixvbAw7qDZfQgRGRZXgbmcZfyo1H6F5R8Utwi1xAWpToBptcFyCLye1UDYUSHBgc6N6Feha",
  "key15": "3x3CUkLeZin2Af2iUHytVuGedo417NUsWJKXKshszUaj6mpc4SN5848mX62Ewjyp63wiWUFb8RQyU5ZMpntFGRoG",
  "key16": "4WNnntUvnnVUsL4AHn5XjFmFs3jKEEbjGgEoXi3EqxN1W5GCK7YwLktuQbjVS1T9RzsK7KVosuvFg8T5zQCTPseS",
  "key17": "376Y3NQBHamunhhH94VMDQ1669YourAsFHQHyzXz8ijpBwFQW7ANN45ePGDJifouAfGzpCnxtohWep1WkCoa5VR",
  "key18": "4MtSCvzQuY1RnUvcRS9fLaCxjCG3vF38vT32kFJsJTF7N8rzsBXSmb6cE5Wyu1oDqudJWoZxzPpmjGPendDcsrom",
  "key19": "5tqv2P4xegXeeoX2zQ4ZEmjqABWCJFoZLpeoamdaC1eKQQvfF71nVAFPFQaDvedDD4tPEMv4GrwbUyyK1ibCUjE",
  "key20": "27dmAsK5xJwusQFYeYcLmhs8pASwLKctgjBDG3xE4Ksz2thzfvTo7pTrQf8Pm3eaKdJHR2BhtSTyDVdgZS1SbMHo",
  "key21": "4aP5PXrgmF9n6ZfBpaTC3f53hmDHbSdMHGsWuAzyDAmhpzSi3JYMHSL9jZD3ToBmVxbevoS9si33urQLEobXJSC6",
  "key22": "5UpznuVfxF2HeDyrokh8Usyw7aYyRasvWrTUFxwTuv8gsdhPakgewrcFbxG3zSjWiqzQWzZLQDkALd6HkBQKXyYH",
  "key23": "kbdmNB6mEF3hnm8DTBCA5zvhqmPG1MWfQzUpW661qL7qzDC6Xtjyqd2KmksZ6q3esLBevpUxPmJDUvwJ3w9s6HS",
  "key24": "Lqfi9g8Be92Ptjct9uddwmuzFbhXY1Eeiz9gpusQLirRcZwgZfwNoHaSThQFTBVh33jsHHRAe1Q5VLzgdST6Fm7",
  "key25": "4e33p6CwLVCo8NPmyxfkU931FWwLw2vXhBHiKQHAS35nPwMk1bhAjw3rDXFUpzCh7ws9QUTPpyVkHhREQGmSBKQ7",
  "key26": "3sfvZNp3uqYpxSU8mcp5UfF2UHzCtVRnHmGsNLGiniquFew787EkaLNFuWP26gTQkc7rhbKWPUMzNQcfR8VTfcD9",
  "key27": "ATFL9LHZoi35uXor7MgaP69VugFPauiXpZ8vFYZYQYMQw8eMFM7rUSAhXMDsJ9o6pwJYHNzj5HsxygB2reDwApz",
  "key28": "ycFJmt9bwhnfui5Fsew8zy8GcmnAFYPXHDSAvNwR6r6ezGDVZA46htnCfnLa1mcePFwpcxCLybmYkRwvyjc8wDz",
  "key29": "5iDFEjaeP9ZfMnNvYieHXzLjxgfmQhvcQbTeZ67YimHGSm4B6iHcobZHYuAEuL7SpQvkUQaaQtiAj3e1arkQTgNz",
  "key30": "63JbHYn4H359mbYrCJzKfb9qna1Nw3K2KJkZY1iENRvdZMF6xGsBsyBB8AhJDanNmZu4qcpoHkmGEyoYpTeKV5is"
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
