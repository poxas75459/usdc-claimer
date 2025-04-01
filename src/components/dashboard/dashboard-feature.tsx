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
    "2JtKS2LAVuNMze9qjv6UUvtqkZ7Ah2QbMeMTc6ZJjmocFngN4ZXuqt6kzpMNanPE6vFUghxrhDHXPDpzDxziRxRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MEVUQG86vtQ1D7DMwq2vBx9vBgFmiEn6rbsGFtpaPm9w49JDDBrAmri6DahAkEPunYoVdeECFcBibxbQZwv5Kdo",
  "key1": "bFSRFXuGN245kA4sU79hDR19anRhXfFoUiogwjLRrYWqemTA8SRkBFmz9tQzrN3ZKAPQrdNrAJho5mgkSwgq8mS",
  "key2": "61RQtK6puzdGa6ndFXdocLmAiXvMU5iCK3NqqYS6X6zepvxiv3eSSyPdSLbMTDkPxDAU8SLL6Yw9i4gjTgW8zpeG",
  "key3": "JoU7JcJxahuwsgDDoW7R9FMU7Abz98kYxEQsCTUhJqgT1iQoT4LP8oA6um57P882FrJUaWEngwoU3aTiN473W2x",
  "key4": "jVnYX6nCWfn28fwYG64qybFh7dAXiZ3frFfEJV9gRjKqc2p2J9xcDVFgVE4w6hiNFGGCVZUMPAoq1hAjr62k6Sx",
  "key5": "C8pQiMsY3hj7GoXQR6phJjpaGnwSrRxGyQz1o2fpJBnq82e4ytYsfVtUMErJHYcAuVkMqJLTHqxwpAUWmzkNERP",
  "key6": "5GsZVLfkdF4GGvFCspdRrxhxpmwMfbtjrtatBUsM8LmAASZUKsj559uH1hWEbDDBQ65jZ7cDAtdn1QNoHQressL6",
  "key7": "2UcKE7X1P6mSrBERfagUAQGxfnjjaJoyyAYQ73CcreqNhMHMSmMQ4iCeu6DYy7XzJSabqni1Hb7FvQc8WjcQ6qvb",
  "key8": "4Myja71tP6VVqzMyX8nZXbZxy2gY6RfvQtLSCy59DBbsvD5WrMBoMp4LwjoYyYuKDexiRAMuaC7vBg7Gvxi2cXLH",
  "key9": "51EYKEX3F5EqPUj6mHNFSSFZJo4AtmxEhcz2cA1CVwvQdGqr9B8NwUqbzwGQqc7cCkErJQNqRPzLviHDZ2uAPjjP",
  "key10": "3zKjmRnKWZxVwYistyfvNiRwmF25nRTWESa8eFKovXy3QXGtpAmRwDgX5sRJcvWsxUPbFvTXu9udyHgiupMsssSC",
  "key11": "5RG6VgMd8AqznZq6ifbLPQuSS9Ki3NN7eijCuHhaHSHMMbcdB8TwDzBR4tkMYUM84N3GwiZrxoteWSF7WJaS36Lp",
  "key12": "36rNAMmYtnrndWQ4Jd1rsV8V7ifdvBwUDCWgx1mabUwQUf4g9EsP6PjeZb94wJxdLtty983Wedz5ox4ZjzMqhTP7",
  "key13": "2hvMbjw12ZAZFpZPkdUpeusNS6JuFsBsHrguYqR9gTCtXuL5WxFQZmFbauysC5vNXRjCzcq3Nc7r6fZGvKnPCk3g",
  "key14": "4aeRP7a7CXN7SJd78eqoZnixttAhenhY24PubvD26ALVsFeqvATe5LbUTKmmG5WXahasMbz2QMucnipjBChbfczu",
  "key15": "3irHNo1wrr3xA3oAD2WaPfrG37gPwUQcp1BsMjng4GxZYMgG9ohDeazut9nByH4Q4KX8arpYcUaQ7gQh3Bi2GYpW",
  "key16": "3ugVfhp9yfzoBYvnYH7phKZJ9wEb5D3zk9mbd2SXBQWBiL9pqmzpVBMcrAYeEyN6D2ETnkmaNxGRAauL6LYAy4y1",
  "key17": "RETsLb8JHbpgF7GNeRuKpEs9grHh5phrmy926mNBg5iPPpMQB8R8qvyVKVQeqPNp2BMZ8ak8usTUrnco4pEiM25",
  "key18": "5iQB2Ppeynqn9g2ufw6RfRHqtyv5Ka68stdV4v35NjCAwcmhNuckB1pTb9yNxHBLQHcqEp2DHxwP3rBfLrF8SRpo",
  "key19": "QWbHmJ94RJV6YRadEfYoberxkADLxUsgwiYP4ko3G9vhjyqNZzyrMEuZBhzyzp9bZKBWgdygb36qe69zpqtetvP",
  "key20": "vw19djJhJEPbZhE3PfjndbkgUCJtf2Jt6zEMv74RaNS8FwCzyaoXERniWpnz2Mgt1hy9NYrhvCBRcZaRyXETmVJ",
  "key21": "53Yw8ZBEpFGsqFvZSUJwf4nF7zsG3zyag6xU6dugXNXjHam5PiBiTu72pwDCjQJJYDtjYatR4wkYptB2agGjaeau",
  "key22": "5o1jgZE4oed9N1VDARCuxDttaf9Ue2u8CyLeFKgff4SVy4S4E9oocZMRfKgrRGj14G8bde1ksWYbwJed5ZUMvp2R",
  "key23": "2bRMzACkztgkcSWe1XodNYZf1MisN735iUcWTE59DsTjDRE5JsHMVCYLD88Es4ahhs3P3SvmWrQf6zaaSZ5VX5A",
  "key24": "3Wb6gq4fTNLphi6rh4UHehd7XWinuy1D36HK4uAFrteYgUt6XDizfDhq61G2NP6WEkazn1baxhE37wJnRijJMXBa",
  "key25": "QNAqqv65n3BZXcyREcq2ce9CyVpvPCDZU5WUjZzcb7dJkYtLdK7efbnadFtBFTKPoRZMjHxkuMyUdpPgaLX26DZ",
  "key26": "42DKv9GnHmjVXHhLyGkH2zKFFBqs2cqdKh8gbY6bnS4Fvjo9xqKGMReAZiZm2ecysS3cEYdQma72kPwLm4Ticm6R",
  "key27": "47UqPop9g9TvNDsSLUqX3amGC93XfZHCjw1vpJJxk8eWcLihZdDXCJiPj5ndw7PFUuKMtZc9mhQxfwS9kbrsvXTu",
  "key28": "2xaWmrT68MCmYAptcBTcYHGqp9WVHZtJodGoysBM85DvqxG7wffx3dgas3PZiTCa1JgA7StBaXtpvazJiFWZF8EZ",
  "key29": "3vt1ZDg4JqQL2tuX9DBoQk34ri9D4rNnK2Zsic4VH8GARYLcJ2Ujy4PsJ2rN8aTa9gFTozBv7aHefUx9YX3E1WZf",
  "key30": "39bqY8yqqsogktbSioKHCTWHMGGAZRy7jrJUcVr46X8mT8bgrYyvvh5xq9G51gpcxtB9YyXABGxjfk7HcDfRFt3s",
  "key31": "3b9FBtnRFLHFkFM9zMyaohz3sxA6gooqRUj5nWHFNUcinbNEY4NLynkDYZL6bL5yWJz822RSNiWkbaRx5Np5fE3K"
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
