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
    "5rrvnDq1AKUUK53BpHz6emUmgtu7St8Pj4EfG5QhfCt2iEcuJXkG6SwhZS4xHLYjs1wonNvmSkMEhUvZ98ajDWSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oc2CWWrmC7iv9fs6NF3bDaxYF7WHNSuXPiZFrUgRAy7qQ9Y8x7cQsXCKVkn5Mh4XST497Y4geqBdhsVePHZj4x3",
  "key1": "2KX8FQWWEbhQbCq3jMTPH29kNPJe7AMg4D9BPror3CNcBzkQd8EpqVkdf7fqFBjKynDMzr91WJGoSGDh2aHK8wf5",
  "key2": "3mepE3HUDHXzzHdzMwaPo2zy6envavGyktMH4FvUWzQMueYCF7YbeazHjx4Wz2QTqpHN5n2NkjF9UAYGM9ybDwVG",
  "key3": "47kFGkKrGi9xyJnbZsu9VMiegQkDQnpYfNG2v8m8z8KDY6BTuKEkDTKnVLDVKFBSWGtYf5EeDLkA7B2HKirodK8z",
  "key4": "5K7jLLncti4zZWb2phm3urJ2effxz4qUnPn5Cws7PUHmDQkUtg2MVWZZnjwcCnwCYh6rjwFocuFbmNi77zkp8Zmf",
  "key5": "pVf7vAM7DvmDSEQWxXNTg3AQmMjGPvdDnrWDHvraLswvV9ZGsAfFNnBNxexmxRYdrPbArM3dHDHpr5iAuKkW4QM",
  "key6": "4PiaLjjofzNycDBo4vXmAfTabWzXapRbfeeaQZfoKicmnXiYGwpeHCALpwFYgA6b4KaMwwedw2XKzC8pgPYzUPi4",
  "key7": "21udEBW6mVU8LFKY8Qg4UpPfkmeotvj75pgcpUd1rvYFJAwQQqcPVhrxahj7483Pgafsjnyd8yM8RbNTRwYLiXJx",
  "key8": "4Ge5uSaRkB5zfC5B9gGxb4EBYrAa797ctLkH4TsCgHys84DHeoXYJBDDtjeXknCPwANk2jgFuScWA3bNKDPyHgxK",
  "key9": "9VEMS8xBQ8CBwtXQqDNSBLsCYusARcgZrUq6VaWRriMDqAqPM78wScA4wHxmsK2aM5qzHgKdwhRgbfvwjfjZAKF",
  "key10": "38xf9GzsYCMpsbtsPVBfgUXNWP99WzVVMTvUDdJvv2wt8xphNKZzFdfaCV417Pct76GmMyXJXVP6kF6cvP97CNqt",
  "key11": "4abYivgtscRCXqihgPj2yEzaZjD4eQgtHxCAdcn8h3jgRv7823pYHRwDipcEwNjKPghFjCjC3SKUqSqbbRqaAykL",
  "key12": "43bTJqYu2XmQwDwUPCFZhxVksrx2AwWJFouz9nEqBW6seuU3nwQYMAST76sLzu8sjDVerz9Ja8wmbF5Nbd3Qwb6i",
  "key13": "4Xj9Wgk9NYTYo8zs2ELtqWcQeiFJNFVX4nAvSrC4SPqQNVKcRUHUxTdJtJEZwzdbMivGBuLpJQHD9Q4kztNCNSqe",
  "key14": "5zMHzMPDKEND2vRe3BG6MXU6aq3qG41i7QojBDEi5Vmy5Cf8QGPvfzjYtSh6r6xTekg3LBiE9DEjrwUT3xm7pXQ9",
  "key15": "34sbsAPX3Duuz6s75mGJx2n62TPM3d1XFccPm35WLVhDmBsj71rys8b1HBVLB45ju38KGEkeRCourcuxbPM29CwP",
  "key16": "3uuqLqfTykCgsbPH4QgBgxx43MaE81YHWZg4LJQpWn74xzjax8oFE6g8sWJppFH3hjrDhcGi2sWgam6Ek3FNEgfY",
  "key17": "4gxWadaiHpJCHzV4raqMTcNRKR4zjAcJhXUKTXKYE4ySUxpbzvihmEYZyY29UGXFGy2PzvNzYAfVJ3rYiy1ehiPu",
  "key18": "55Zx3HCvgpnEgmZjKeRi3ZeiKLjuAqgGqBQnz9CScrdje1EUug3U5sJZFjLyNe1CUiAUPjwCy4ZVa9xhhkTJdb2Y",
  "key19": "bbSHnv85YscJhQMSqzdBbZMtFBeD8oxSwXe6SJEbQM1MqdDGJ5pHPjsf8AcjSnEzXxjEV3sTdaxgdCdenf2WisL",
  "key20": "22iG5aMrT1MtPSdyiVvMwuswZxi5sbAjoZX75Ua4nmLJyGsMBtxNSvFX45fCCmWfdF8siYxbzWwidw8P3WiZvDoG",
  "key21": "5m8btufPuwTPgxiZ2orPtWbx7tdoJnRZsfaTsRxVmySUdM7ucfHJcqRmhBTo1QJkwuBRkh87FaC4zWZR3voA9dgG",
  "key22": "2fD4m4pWEHQo7byxZJVsTkJqTKvbWJvkCPQCDesS1ae1b9WAmR4V4vCrw6qtCAe6ije2tHGHFPWKQ12Xb65Kr8iK",
  "key23": "4JrQckGt9uZSLocC8GzW5cah58Ewag5FW1fjRCBhkXz7fMjr3x3eRgtHfSGkSwgzpDwiebWKc1z6vvAYobheZEF1",
  "key24": "4qkKmNg9WjYCBAiCgPPsvWCL3A6EDcRp5pCq9ZdXUwko1rdMSpPuAZfGsLBDWy678nAjP1PD7SWpUA36ar2Ei9xH",
  "key25": "5gabNjpkcBG4hjTACmCBmmyvzeEN51ncQ6eMBm648eUafattn4FT5kQsCY7BkDKhsGsnHqLAfmCm3PBN6W98ELd9",
  "key26": "4oiLnvAELjNtXvKiN6Bcw3TGVyDUXCwigJKCVAEj8g3E2zQyDiiJz7bweWfhrHudtBcengW8mcPMWYbfYzMAC76Q",
  "key27": "5NnJz5GLkqBME11QsmWfmhJ9RBjNCBEP9jRPFSCd9hGG2ALGNjcQZzjqNCMxKk8YDWFnfhDT6TYuRVnnRBC8ZMCW",
  "key28": "211RbEfTuFkBuya99Gr7jQa8nbdXPN4ADmTdWrZw94WMUTVbmRx4U5tYxjCtojXeWCDBpXov6GVKuz4eMF6tbJDE",
  "key29": "5swLx8gcL5Y11eGxpip1uGmUHgEmGjZFXQHuyd5UitRPuvXRL2JcVuqVQe1hByW21W9djjRzuDBt1Tj4Z69nfVna",
  "key30": "4V6Uva9D6dCUfTAabendkAsjDtvXDveuHsYqXFc6EbLWmsnc8tBkKyzHji8YWEqXJYQ6gkEbD21CnkiCgNBVDY1m",
  "key31": "QujvJ793UjyMHXYrctV9Evym1JyYKgpq9typHHeTy5YJ24YJP1dKFDa1haqyo2mRQB5WJ5cqLDZWc3zd3q8Dyzs",
  "key32": "4dTK1w1YUza9cnrXQer4VNAav9QXwwTeR7chRxrW6toaJmD7iZk53VsQrmxUZFAD7AZcSUD2EXCYBLWa4C8YB6ej",
  "key33": "iPwWvhsiRqSfRizfqkaNbAHtAVJZjNcxLpR14ajkw7qgT34khpYGddfAGx6gudiSKg51FgWkzi3Kt88y1mZwucZ",
  "key34": "wSZYBu9kU5EERyhydTJ3iME2wLwqrckgVkZS5aQpAm3XFVqSLK8PsFbmnAuDrac4rDdCQWvzyF4EBojnWDLrcH6",
  "key35": "3CwaPZioRFEMHDDXj2L5c33fpbwZpf5hjhoaH4QsXRTN5AE13T81f3Z3g3EsThzJqPysqbsRtF3GFkyTReYYyu15",
  "key36": "59Ur5MdysTbg6SrJ8YDXvBqDG4b9X7uUCNZ8FtQiBmjZDjVzUBtyWSZvgQLfRvEd7u7LnGDBNnDqfzAb1tY48vMR"
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
