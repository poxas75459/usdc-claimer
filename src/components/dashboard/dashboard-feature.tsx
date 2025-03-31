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
    "2RQ49PXBWY3RNfv7GEUNNkBsPfQP7hAxaZWC4uESPDvzRoeHqnegB8ebfcXANcbdpNop9eccxRMDXp3rTWsrxBHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zr7UNLXSfWq3mRXRGqFzWx923W2C3LgdEjvmEyDvzANGsjRQRurS9bRFGiUQo2d3zit7RUK3r6RqNPoHJUFhV8S",
  "key1": "31Q7xPZY5fqLdHqCHZoincast2Z2ioKRqmXCJjeLcS6Lsk8CrhvcXCoiYdgH7FavTGCxU3UhJZyakFTF4f6UwYnm",
  "key2": "4SYDBcr74haMD7orFnb2TsVwV4KyXCGkJrZfmmHSfGySvhqLvjxkEiYBA3QHGA6r1EYeJ4xXFA8KJC2fqs2ZLFTi",
  "key3": "3eRAFUsE3Xdbih7amjtv3ioNAmmuPSwvBRqJ1aJV2XUzadzQot1znk2ui1VuaaxHsTkjz6XiMxVMuezRevxwutpn",
  "key4": "5TMjFsrCPx44oGdQ923cV5GCBWvkqBC7w6XCXbq3BRc76eXbmA92eGM2Qxxmb3HPv27AoNLcXBhG1v4BNGPTNf8s",
  "key5": "3ajBccFXBqZ97RD3z5qq8piWDTPMYQWaY1rr8Mnwq9t4va9R7hDde2E95FkwVvPs8K6HH6tv1KBbEmC7rNWNsCoV",
  "key6": "5FtVfYQ321o3YAWSP8x4xfo7GuPZLXFbnV5SB3YKTr9hYLLpKFtMP3mzSywpXrMWbH3hLRbSkuhg8WYW92faV58P",
  "key7": "RaY2CTWcjN4yy5H2pzRmn9gxERzdQbBU9BfvEvDnid2vPiPn8A5iyQ8qoqSyuKemh5XfVrDjxtWfW7ZhiongmpM",
  "key8": "4ovwU9VvkF8pW3kuL9TQ3u9LPwXxMAGaVBem65o9L8UqGj6sWUnCZ9ycGuQ5CmBLzetdYpKnavzo8VRZDr6W6rgX",
  "key9": "2BkZ9yivfptYdZvnE8yLKye1C7DtQY9GzmziAD86Gxyqjnwhk5iVZSTgUpkqtPP5DCCDvntxnvBotYwwTXcyxV7Y",
  "key10": "ugoaBQPRretb9aYptcg9C3TnFkKZxfe3XF9zj8usgmP7eWeJVeP9WUW2gzmDcyUTgZNSpfc8MU7UnY1GjRGmzTj",
  "key11": "2NbH78sGQkvetVLogkdivmKUzXFe7MojbZX7a6X9AFbkyXS4Q7n3em9K9eLtGtCxrC4vsiqZWURHKuGsxxd2LVw",
  "key12": "3WaxWotgEJjCb7jnvfhmXepX9nyzuRRH7Hd4e8DR8bhGcha6RU6oYcYc3iYYLjjs9D9NPZyPCPuAkKnEkdrnvUsw",
  "key13": "CydqBXMTr2wfYfoKLbJRXfveKY2WgBt5Ait3cvVPeLziF7vzUEMa8anjoGArnTJ6FsNHuqj6EQ5bbFbuk221iH3",
  "key14": "23EthYmNtqvuuxp5Pz3knocUNK42chdgBmESQi58m84uAPxriuAj7HnhH5Km2FvQiUXTJdEwbMdx8NBZ2Z7AocVz",
  "key15": "2yFEUhjjyeZeJVK84cZdsjG44kdsXwxKwoNePdFyKG1fMzLhqjnn6QirXeRzRscAwevT21fMtkPoLbtGF1Z4n3hJ",
  "key16": "5xAu1s8SkkU9gcA6iSerQHghYHEfAysSxbG6xYpXeEKayhyt1k1Cb4boNufMrCS3F9Q4Vg3eGDDzu6gmaj4yasVf",
  "key17": "2eD41sq7wzLT71AYwrfML5bhRtfsRKrGWzRgTPWVNdqTv9hHpqczJWBbMWCzhBebB65MmLjvMdXHmmnvLR3bVt7T",
  "key18": "FvpGms1XkAF8ErmZxxfja4hy61XUxWuQSPS6Vr1FbNGyRnGitNaVj1xVv4GUEir2Vy9tXzZkk4KXvopYoKF1VQy",
  "key19": "21Mtz4fQULAHyMRJ9nLY7EeRqRTkE81AcfZKGp84DWepshg9ZYmJueZCFzeThkAFFCLQzgxGkcCqs7AhcvrfyibP",
  "key20": "4KBkM4ES3GU79Ln9a9Z7Hc59qvBjr9sEZR8FfbNzipumhhMT9BYiW4Y9tcxBtUZgAav2Bv6QpasQxMTeNU8spp29",
  "key21": "43NEAcubrjPPLwwcwekyAnCirHM2DbJdnTGXWZFNb2P2FgRovcJ5dTSLQoe4sKWgXsLn5FE77qz7MTK5L2RkeHjh",
  "key22": "56URtAUGqZNCTeoAZQA3KgMEktDrogFtFPzr8pKnqQzby2tBNRFHErd7avN2P126ndDo1UT5WW2Ps2aGjoanDNUC",
  "key23": "2V5ENeaMgkG2fVBTMre4UPJZZBhsWCV9E6Hg2CfTXQsFE4Fe55FLAGr68HiYPRowyTJmXE6MBwSz6AJ8gw9BUHob",
  "key24": "3fRDSCxacs2GbfvXLNr8vUMPWaD9xJo5VvrgutbznxCJE57RioDZrr4D8j6nZ19gaQgiTYub2JbrvFjSFXiatFMQ",
  "key25": "3rcoTyqMzrjGUSSSjr9SnNhv81UewnhQcVznPqycbpzYGDMKmbYN7y8KiabHgpkunYqixMb7pEqhT9zxNNUqkiB5",
  "key26": "3yiVVoTMWcj5miT81oAHt11ZXjjPNXYoq7nKpz4nTihuxbr6r2aWnKQZ9DWmbwzWK3QUdhkm6xbcB33fSjzRfv9n",
  "key27": "57aCo7h6QbwSEbPbY4PU7531Vr99nNrZmd4EEadhRb1AUjo6ywQS3Q2hxa97n81aXH1bD4qdyoyV7b5FeXxRVbj1",
  "key28": "YeCtXjDvLJRCgHKDuys6cVfbRWQ9LpfPZR2jUw86BKAC9aZHzhEG4n51bKFrs1DWWCZ7uLbki2k66jLaVDb6ry8",
  "key29": "2n8XLxC7X8oTtwKCrwfVeYLonGgxB4jFQbUgxbxxrKzMfPu3gqs8ESXJoQXMsgzwnokYSWgb2VwG5WZ6a5PYswdT",
  "key30": "4JPBtWmtiYpvuGKtWunFAo5EhPrhkrrLZKmwK11W2czjzmV6iNVabALCZx6jqvECnr3cjd7LHusS5Em5h5X2zmEy",
  "key31": "Ftb7Q2QtwrDoQZg6DjAhv9D94ufRsDivLwd7Rt6qFqCimB9e6m6S4dQHjBC3XCyFWXEG1HZLgqD9x7JFhroXUUC"
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
