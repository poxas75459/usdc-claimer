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
    "3rFUSHEFdhkchYNkkUYrcQ99jQZQBa8npeZkeqwYQdU8jYsyjgsr9o8tzVYJcCqGxeVn13x3SJiUPd5YeBuiP6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Kqgnq1cQ9qCsjysFMCM4KBnQQLepc8gd8bXrk56ckhRkEGhgAL4SPb5z6Vaoa1fSCCLdkEH55DXTLkR3PEmjkwV",
  "key1": "3eVtvCEM9kHyDifcV89LmokeDXB1nSabhnTNvK2dtDEWKgHo5afUemzgGLY7GAK56Gh41wNf9P4jAkmJ1RD7H57V",
  "key2": "4A5rew1sSWm2a5qrZEKX7FoLezVGGTbtiAPojGoYqEfK5WCLfnfydhJoWUVNu8BpkPTRTzxZvvEA6gbV7jhf9WSh",
  "key3": "5HhHQYS4KyZ5Fa1kDRK5ELoxGQ4Pw1gF7tpBKUC7JTNtBsxgi4TfjBe5yBqDDtXzX5cbuSCzsNxvrh5ZJxDyJax5",
  "key4": "3PhmND8dB3ad7iPR12ndDDsVfXvCHzz67JCndkewLZRFPzBrqMqxsxQXwYqF7TD2AW1kSKbKAxS3G7PnK4oLRHUf",
  "key5": "5rXtzNCy9RkhFJKCmyZqrcdw1YsBN6rovayb1k9Uaej54eDfsFmWemXv511riPYbPNB1QsZWkFvrwo76Gqbp5Rgj",
  "key6": "2rPLnMBp5qnLRPMgDQVahEHxwS9D7CjLrK4AX77H6Cjd7widKXYSuQZSGQoNovLioqf5c8dDr48hbrYTtdKwsDza",
  "key7": "3tyUKvyYmu6RNBhur8Hb2DSUUgRqGTPnPeLNY62kYzTj3ZVAcyZeho87FN5uqnr1y34RSqUg5d4WKS9Dz6AgMFE6",
  "key8": "3ShZWjmmseSPdbBMNM6oPsKFRv2d1LF9fKoRnouknJyj7EHpGfk9AJCbK759njwqU6QHQ2WXPCJgpwB9ZRYb6Y6D",
  "key9": "B6mWEuApBbADR1JiPDWHqRbPUgjpCXYj6sb6gFdBqVmXBHTf9yTFGfC2CMiyEDBtjM4g6zHe3ELLBSxLqYHeBbL",
  "key10": "3wZM9Ue5QECkcb8Gk7p2cUmPrfTVBUC3cuYfVBhKjgGuXeJ2gGgjTov6j92X4Y4dKYdd26unqU4mEKgLSs4CLAAt",
  "key11": "AJmrGYPiTBGA7Ein6Tv4r5V8qGui7oXB2wq5dFpzsHBpkLEyqoqHeCW9MeR2HCUgTAge9gcS2i5jCxETqtchTmv",
  "key12": "5J54GvBys5JNPf2ARreg4pMZZeXvhBJesaUQEBaypgdgj4DuEfYbbES1CsddE2HBvJX7L9dqwYK64421xYrqjzeb",
  "key13": "3uJe4iHPU9Ei3cGBexfJir6SDSXYzi4F4PMNMhJMQvxjGETNVNoqD9jhmksvyd91eSepyLBHL8JeNZgpysdLftA",
  "key14": "3pComHUGGRXir9jr2jnB251J7YgpczE11WvKnDHUpjfZisnGjPHMVZUn7vTq7N3UL2mbmSY4cnuGyakK5CQkAs6E",
  "key15": "TzTwUH8LNeb4k7zPP6yP5i5v3dZavPwFBmttcT3onopzmSdh2FV5qGGXAX6uF991RXbhQyhZeu3MZrbzSYNukPz",
  "key16": "5HkyWjMmt72LAk9qdnS27LrtDHX726vanBoMMar8zKiq9mmoLwGDZze5sP1n6NsZw9UxgamG1mtBnHRHkpbawt2k",
  "key17": "3rzw18K9Tvfj23hvNrdpCmdR4V79Q3V5unpujjvYf25mUgh3ZLRtgbEnCG43Qj19fNoqtuHb1F94UQaSvHrobv5t",
  "key18": "3TWL6UTwTX8nC63HHn61wMg6VKbLBBHZfoBxyDj5Ae5sxz4GZvmPQQopZdjPDemDDxq3zc6u7jCAVrDshoehevci",
  "key19": "5jqTCMxPtaYCM2z1maW3r8j7gebMiNDxpNk6VXJLVjvT6A64zEDjVZDUmH3mxxBTptBK6Cc2zEYVATK8BtrnwzVt",
  "key20": "3vCJccWBQPjQDLvWym5B33bbP7Lv7UTfq2EBarSHhawYmbaG5H9SAxd66S2Last1iegPNDSkQ9QH3KaWSv7GTaLV",
  "key21": "3XkRd7NURRYhM2ZKjPQuSZsHL3YcJopcpGoWbKtBEw31hphyin87w2uLJzgVaWqHe3bW3yWi5uoz4UTnXPa7ojNa",
  "key22": "ecBWhAaEktLDwa7Saa21qrxZcfz4pkr7A9v2Vx6FepkyKBj3FerWh33bBnnf9aAtTj4wQ6GZTbHqQKNQGubZHc5",
  "key23": "36jEamShKuha6Xf8zxsNH1ADrcvq2RFXcgkm8ajWH29vvHVHx617FApLcx4LjSkFWLme3G52b688eeggiXLpspmg",
  "key24": "47JnZhSyxZkDXFfnPhAU1JDmqPLnVE41Nw3EaGnLv56UuowuvfdUfCciwbx2gVqJJxE5YB6w84wsyNWvVoeC4Ndu",
  "key25": "5iBidTWs2aQFCXUXqJSKB7LPaHjSqRdfzKyktqDoWFRAsYrF5Zt85RXbycLBQVVarPfyDtduGEGEFC3k7uR6zwiJ",
  "key26": "5vFy6hR7FnWonNFkvgzoyw1tjKKxb9A4oQRcBFAkQuqT6MXVJdS2CoLTFMnttF6nMUuszaMPHYCiXfLZV7ADo9Rp",
  "key27": "tED8c8xn9hqjcwFB8ZMkcyEbJSh5BDDvy8rm3c6R8air7TBFNAEhTGXEtvXtpKERFFDkA8JT7cWV1Tquyxsopkf",
  "key28": "29NuPccSnkLzbY2MDbDCAFUTXzDB44hGe1ueWgnbNhSBrqdfBBiiBcisTLas9uPf2vRbv7jL8wVLd7uLdLcAcvM3",
  "key29": "29c5R7w5Z5NmfvmqqPBtDjkh9NmsLTwKmz2hJo98xDdCoy1KjoqiZ3Y6YGDQR9iNLmtzDFgk4A5AHjKRevBqHev7",
  "key30": "5xq34ZHqMwtETHtQRvX5HFTS8mTT5FRrPTphwQrdvzMxeyF1bFiDBKyF26wYGKyGknNAED7W1yeup7oEhKCxGz6T"
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
