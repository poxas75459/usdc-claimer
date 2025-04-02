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
    "5mXBdzAy6CNxLLcZpRfXQ6q9pSdYoXph5ccDw9CTnNDmkysLx6noPRGrSsTadFnMv6F8dkqjELM59PRRDXWktGvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WD8AtmmVia7CfKWpXuPcExZF6q7WaUVb7S5zT8YKagECsJR8HpfvCUrpzFjr9tu59CDSmkVECQssztyY2MnTajU",
  "key1": "2qdJJGHTRVThuEXGCnqu9ub13frJkTPSU12fuPmJGgapJAa78qc93V4EojAGbBHHJLhLJZiayWadqHpu1YJuqnjA",
  "key2": "3fw6VxZDGdCAX2jEYbXEJEeYaH67R8491nTE3ngR7722ZrUoV6WQ24TYprMuoyFuefGBPyhcwqZSwuQ8C4ACMAnZ",
  "key3": "E73vU7QKYdHAw5LyjijYehm6RWz8py8oxxCWZ5K5vgm9zQovfCEq4Qbevrja5ADeciPM3jcwVHDVeYrXwC4eiic",
  "key4": "46yG4hjpBhYpGEYhA8C1HCoCSe6WhXAHGPpQSmThjqGm6LXBtqyX5gW7mRAh1mZPhuyTymTDLVo2Yfpmb4nTrrKj",
  "key5": "4fgXMi9tp5QFKutRhzTsZ8nTekgbs9akjwXvpDfjoZ8ux87wkuthCq5uAC44Kc9V4eaCvQNQRzBS7LDsSHCxYcwq",
  "key6": "2ZTE6S6w9eBE7UnDnhgCqqNHyU7brN57CztkXFxNxoFwFWuCkCqprRZHi3JGFnKXDtx9BBhucmD8qAi9H89Cqjbz",
  "key7": "4TNvnNzuh1gBv7E2RXYi67LLDc2PQCqXp39PQEfb94hm5irx3XKCE1Cfni9stB1Eet951rqxNhvxi1tuGTiTUA42",
  "key8": "5R6cmJLYQaWV1MxkN7xcBoNG5M5yBLpDwCwoRUGpywrJrJEfyZk1AVZwPyCftiGWVRfa2STXwNRxibDgdbr379mZ",
  "key9": "5NJxEbDWRAdgKrbufAw3ggt7ozwMeps9N2gS2MMx8ohkfkJvtHoNRkiDL6e31s7Yfa4G2TuL6eDNzT1vCSo9f3rG",
  "key10": "61VK5ryrkuLC3CjfiqY2zpQ6jz5xt4TXvx8akezeFJwvXok866dE3vsNrQ9fd9Uqyg6ZgT4vkfS7nMhg93rPGiy",
  "key11": "2Ujp2CDeboskdW7CVay2sTqVN8pn3aQd1vmkE4NLrfc4USWbsp57CtVinXUjtuds2S4jm92bPbRjk3xa8W6qqHVr",
  "key12": "47Lf8KLDXYSRT3NmozA18oVj6XjJBSiQ7C6eUT4bv2wpNHGof1JJFcrk4Z8pTKmxySqomZkwSGj1Fvp8GX2K6sr8",
  "key13": "3J6qyrnEsLL3Pr11jXTV48y8z9JMBctch7i5Zw2HqDsoFg86KbpdnRRdpRKtL8g2K1uJpFnqfP1yFWU61fYncPoC",
  "key14": "63LSswBHb5jtHGmbWaQtHfwNRKkKUVtoHyHAJTzSLjvqEAHf7KpkxtMcNrtNJV95JwhjddjnBKVEWFYqEdYnvhBe",
  "key15": "2rwFGJQ3qR3m9vKuKThPxkQPsWCD1B1syDywLGASdsFdYwFt2kep5Mhzae4xxSVmDtqJSCJxWqJsExM2p7sony9M",
  "key16": "vXkNRC8aRSshy3KjZ9tunmcY9YNtr47SS8B68DfLh8AZWBg9HbaSccxEJKSnUY6SnV7wZtMfsPrBs7L7do1cpLf",
  "key17": "J9tdtjNfHmWgx7oPb1ZeX5qigrwGsUxsHRzozNPvNMYpTjYjbjXjTXYtoprC3XXarKkjWbqHgWzmvQBZiSfJWtv",
  "key18": "5rvaPN3XjUYsfLKKUmfHCC8VFcTTWrt7uQKwAcncgeUZ1TkTME5U6DCF8HMTsZNHs85ye9CzGLL2NmtdotkgJg1P",
  "key19": "2w9YFDvBAJ6EqB948wM8ceMZJkat1PWuzoP55dftCBgmAZu4GB4WpmWZJtU9518oD1BcMhjZrrVJRJXu2GWQviU8",
  "key20": "2N6txc9xmu6ZmU9xC5akNBvfKvkcjVbZP5EP25grx25wjXutS6JHDm8uMDR6guHYWcRQufw7hFUjm46RZGpVwj1D",
  "key21": "ayXxDcqvhd5j8yx4vDs6wYJ2CcXYYejoThqfMZCsGsCqsmBYiqyTZhYtHgCXd4V6MdZLdTm7wDBxQSEps9XrTDo",
  "key22": "oGX4SvEt43JtUrkiB1D7K18AF8EmkUFS9oCQn7zNUh5WpuvZV98G2mYngMG9KKv4DZoRHQkwFKjEPj3cySQJdsW",
  "key23": "2AvgWPgzroQ31pTRfyn4ZJ5ng6mUKtK88uJTqgUJXFR6nZ9vGrWGGkXo9ajVHj2dbc1UvtgeRwcLW3DScULmxPCK",
  "key24": "4ZUE2rieNZDd214gXvkwacUSDWP3e3dbQozQSxKXVkvKY1RDd6ee2tagWmjvvpdWzmTC41zmN9VURosYs4K6Byew",
  "key25": "eBkB1oZBbWxUXCncuRgne6kZwZLp1HtDNgiVoH8Ny64T63VtxxDZb8UErbdvbrKHHqTJ1cHwWmZWJQgxnG4jxSU",
  "key26": "3xzf3trKA4ctdot3rqyi5QUnDAksHbr5Pnnz4fZpqpcqMReHiTmVbawKa896oRRYVGQxKhV2TrEy9dgMnFXSS3uT",
  "key27": "2qrx3KbZe4a9TbiGduiznA61eFjz2nTk1CbYHJXYBFFzZa9cnvAhN7KecG7Y9PD5bTqMVHXhnAdk1Yszj1mduKKo",
  "key28": "2rGp9hYvMyXvzL9BpxcXQg6vhAdHbujYeVNeiuuvLAiGKyV3YSC3949mkzWj4rtmqEiKKzb4avH9iDbV3k73UZyY",
  "key29": "5SFLzm1Ads4d5SkgmY6yCEBXc46xUY9K6RaobF6hqhxxXRAubS7eNzqYbNQ94Swqx1bUJz9vGL6LMAsG5SZudnGo",
  "key30": "4StgtrPh8d5MjHPrYmp7ps6BgeeXXU295yBcXe1sTb61rrVMrd2FBrMuVNFSKaf5vCACoUkU6xnzsCwYERy6AS98",
  "key31": "2scVcaVjyvyhjANme5LFiQy1WSdWufRrTHZpXyeYf4yMemLn2jSwVVwYJBrRoFt2v8k51Wxymb6VN6nbntKjiu6n"
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
