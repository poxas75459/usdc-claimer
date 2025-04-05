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
    "4J86cbYEo51kaXvNLpQPvaoNWpWyyW2iUuNESfWvm2quRHGyTEnu3Y74sf75S47tksun8Gve4GWTbANMC8j8pjB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bAwdE5epvBrCKQoS2RJ6e2uWWLU6s82QGxu544zwUta53dPohQB1ZBLJDvYUua5hPwp97RLJQQtAr5F9daRiRbC",
  "key1": "3hkttPgfARh6TYyoH9TLhPAz9Q6VGG3jyAxz8CcV6CWaFKPYd4smjv3FTWQohvSQUr7vFNNvWxwgruwa8THjVV1W",
  "key2": "57WWeFfn9NJRWajUU7wiv9Nk5sXeo9kkZ6CtVdi377DwgouVrgvjbCHRFJassxmaL1zGFKKe3AVHozZbwJWctXdQ",
  "key3": "5cCzXSSUqr4EVBLVDn5kKeD9ywHW6wfw96bGvLYGhncWtyhEV4qXHph9CNFhsYtbqfWhgFRpk96EsNBjTYb4gKJ5",
  "key4": "5kHHmkWaYq5EYrMDDjabBKZLrvDN2Mp5dZTmAELCFWWT5GJAEsBMMWsXxJ1VYbuvpEt7KB5QEHReGMVFq4WY7qeG",
  "key5": "2uRAFapUANcmKpMrcnfWEGDEaEvFz5vpZQuTgqfLvfz9JnRZLQCePTozA5zYwtMpbTVgu5JK48Qw32KKjCudMjBN",
  "key6": "214WMcVn9TWgz4xk8EvuSVdGwumpwHRTuqxBAcpnLmNqu4FWZgwpkULbaDsbE6YdLcrH7Fy37Y8C5jfTFWcrMkE7",
  "key7": "3uFWaJxXGkd8aJWN8b5RhiHxtGgfhJkEjqWWZXJQfWA5knw9wwvD8T2VgcvDDREiS8Hupu8vWoAyKbdBYNPvndVN",
  "key8": "21X9LZtQjM8kvv9GzHzsBzb334UnFJnePft3vXDQ8kAMpo4WfQnMfadfa9fL48gMQAWm4TTJ75yzn6tPoLCJxA99",
  "key9": "2MbcUDrLAVd3BqX8mfwGx2hxiBvMzF5NzLbj1nVsBXMdreN9MANKipzrN4aXk84qSDytacUBDeP1ZmK4Cq5jZ1ks",
  "key10": "2ugQr6Qf6BmnWxqNyHWtVMN5ukzjEh8djGokHBuF4aRN3cgc4Xk663hd7F5iZKFQFi8VpY5rdBeP4QVheejtggF3",
  "key11": "4tLhdS5Bq76JKUHEP26RE6t3HSsFREirUye3BXiMFKEBkToYEAQ1CvmD5TL5sKws3DKLnSzbgfscsU53cRPKTv6E",
  "key12": "2tFWqrtQW8JRwcb9eEkBzVzy1LXkwdTLZ92hUsUTpvsZFRDeENf1GtfWzYTUPYmN8aT6XurDjLL6DYCqfNAWmECc",
  "key13": "2v7WMnbWhPRHoN61AFjg4CXxC2KuyygCHbUP7D9B2ZTYVsfo6pqXewmMWL1e32qDGYQDtpzvJ2RdbWLfdbQAH9zV",
  "key14": "2ABoh2BGmfa4k7KBmsxRwp2EipFfjqbASUUva7GmcrQNFWVcy17KJDSXA3XJviQdBgnrBEDGCKar9bbsEkBeaZFQ",
  "key15": "5Y1Qn38miT1RLLipy1Up6cNTxCeBEwwPkGAmST2DJvAzxGLxcjXizDWvaM6SiuXxjVBsn6kvR8uJofXq7XQ8CwB2",
  "key16": "5bJPBiR4qHFd1dZkWt9kkmpA4wjV6BhFP71tejWg4Rv2ZjA4Sj5wwGn6JmsEQ4X9vEoQx5jKQWawmowGzqPvDYR3",
  "key17": "5omni9CiYvfPFRVX5k3E4jAZFRYMT6WzpwfvCxPrfFd3WZ5boEbqHBXwTuJ1yMppyfKUaaZtdduUTykvWDfS7DBb",
  "key18": "2hSbitEZDVKcQKoudrFNhdnNASC6Ny9ELwX3h9EfASreuME2nrsm4331vZsQrv36bksMdjibfQ4LvSxJ75ubXTY7",
  "key19": "4rAWSFGM9ehSkiJydLnPuHUPZw9xMk7ZYketAXdMoytkxPWuHA9y992eybqpXB6RPEN34uGDJGsqhe1UpHtyceAp",
  "key20": "4NLehwvvzt5H1RQLhevBwXFpBNTMJuCnxURWwP2FdwaeafpJSE82YYYmBP7pDJoLkdN6P5SDbwPxKzuFs5PYwHiV",
  "key21": "5dUfFa9e3ucLQqkq6ywcB8nKqTXiZq43YJQbD611K4xBdWrPspcHECuYq6tJbmTUEj63x9K5VwPVgpycb3DQwY37",
  "key22": "2gP7tzBZZUFjh3JBvvwFnHBaqwGmSxmiiyZZuvU8qpGaPZxRAT9i3MZPFQnQcbKqsmoFQvYbxyuRM1FUqdUA8rci",
  "key23": "J46drpzE14cznr93sSxKPbb3V1QCreugxsgL2vF6JpxZgqVb81zC2EjXmBP8L5bkX1VEdLn8Bre5J9sMWoRM7US",
  "key24": "54YRPpDny9vCh6sAYwp3HABiyjBz1ryXLdKtukCjhchgPrExAmddfAY2xrMxw4gJssTbko87e8kD24dPQKm886Vn",
  "key25": "3N5KDVBe4wbt4B8uoMNbKjivXZSFz54JnZ67ALSu7E9KAAb5Tu19YsD5qZvHhtPAEY2sUWH9hMJVTde58ogAHpnw",
  "key26": "5cX9dAsbdkJKF9Z5XZcRCtJ6oDWSY19ahXCTEajtGhcNYvCAksBpckbTJovoUxuMUUe4LKVzAGyVb2yxCw3HFNJm",
  "key27": "4WkZ6eEMjA7cT7N2TxDyQuA4Zv5fMUpfCp99NqSvjaxek7nuyVKLnSmUJUCDb9K5A8BzaVNbuf29tv52hveiJMPR",
  "key28": "xogYJinkeasRXFGPaLd3J4KZeUDEpdMf5oRJAH6SVSCtGY2ZpkzebG4XctNkYpWFxs649QPAUZR3iM9iwAaikRj",
  "key29": "2g72Wq4UUQNDsFyBcjtdQop17iL12BSTT6q2Zh5JxQ4m59xhYJdEkGmxiQ2Lf3z6wFqbmdiRxFgvCaA4agJWcW6e",
  "key30": "DjMGME5vFavg8hPhPEVNKLGjQFhhvKkxq8b3oBByBXEzMLoWFdQ2YukQCoPRMaJemcJ7Yd9iA2MXsd5ZrwPxHrK",
  "key31": "8bXi6BZNWfctxsHdZxttE2xP9mhyvs5y32wyGdLrDsgvuoY6uGDpHsW1mSi39pKpvuztRu169EVn1EJDBq7TsoQ",
  "key32": "2QWhEx8mi27U3xtwrkqNoog1TwA2xM5yno63nmV16kUnnN29YY5rD7TRps7twVzs4Une7BLSpe2n423RskW4Y6mn",
  "key33": "2G1bgaUxzc5d9GFdoLeZaFXMQDAgqTM7UjUVnRzfwkQqsQLf4vepXaJA7BzpnXn7qzx4tdiaFp5VSAaPWfgCStyD",
  "key34": "5QCmD82yUpaQgVKVNM2Xvjh2PSFe9oPPACkY6jzguNNTTKBQzQdsSEKC7fLxdNHo5SrPGYfhwmbd8Ec1z6R3g254",
  "key35": "3xbYa7MiJarp1mLtbFbeDGvQzR3SvyydVt1y2EoduVoSp219UtHERheBj9yP5Ni1HJT6JKuVbmkyLQF2h7GCvUyC",
  "key36": "EiL9Swq5Rsk8DhKLt9LERawJu2665cLZ8G9Wk7yZemYa8QsATpsfVPKvHMudk2BRbxWP412pDrn19MXb4akfYNQ"
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
