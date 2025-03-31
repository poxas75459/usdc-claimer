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
    "4rXrP27FuAhcs6DTRBQDPGgRbRyuQq66XwQVznU7UoYTzuRwyrH1d6Xh6GuCwv7P4No8o1rLnQgHyF5dBcHrGEfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ko1NdkZgzPwg5EwhgGjMUoR6HFJ6bHgjtv78AYCzwYDCMTKYtZq2u9jMaQf4agCLnqgduEPr3KnkRchKTBhFSKU",
  "key1": "5QtMEa7HzUqPRWScWsmmUzWTHChRwxWbdX1nc6U97Ps5RQschFJTL6NYnwBdVf2EujoBtMpm9XCadTRZSou7Prcm",
  "key2": "3pYH5FukjQiBimtVWuAGSZ7KP4qfqfNnpnHHa7ZAJ2LbaBqwkzhxUoa8AsrpVhhRrGsFySbQrFKXdWQTYnBfJ58r",
  "key3": "4pjfWvHe7btmDVF3P31uBrYXBybsEvBofbMgufHNwjhRnTD6CdnsccZKG64X1XPCKbxU45PLeZYp9spc2oPmLFtX",
  "key4": "2v8KzZiE48myrDoB2gkkjX6v9PQVJSJ86ou9aTGaSbrzN54RatGakk55PMhWSmZ4q8dFuXmW4KgLDxh5isN9sGzt",
  "key5": "2WDzw4dJZaCSqYvDVcjcc2K7knYhK5jfN6ooQNJP7kWD58aeQiCs7aHtqjhcsi2SAx4yT4Vzf1QNtUN3DaW165in",
  "key6": "5Hhb17ykEVy2zBwqoJeqKpXqPbbJMLLfb68t1255Fd7cYkF8e3zsNvKi55kFJgLvcSRz19Fu5Ksn72gX82Kcyd28",
  "key7": "3vMUfHrcZ5zpTG5crCVjBZDrsBXcdjhPRV1zyyjPKGHiED6Nffojc79pxh37uWx7hrciy4vEMXJQq19RDWoC1iYD",
  "key8": "4RBkzZyw2FzvHVukNjVSNUKMjut2156ZtpLe1Es6rpFdvdXQKWm8YPyTyEUzDWp1TNLJ6xhYvRhokqQXQ3wGH3fJ",
  "key9": "39P2JtVQepKtJXWJ4i81Sr7xVzU6zpyhs2RCwoKkiN2d5yeKS6JEhe9GoQRJCE6NNQaLSha6CW5WdBnbVGy39KoD",
  "key10": "wX7GdUc4MqV6drF7BeTPmwuB8CzgsfcBaJ1oUhFrYdprkwd1m31DxNjNBhe4tCPpSnn8TJHxeqywLYL1RiseTey",
  "key11": "qDhuWN58Thf4kWVCmpTqLWqtU8iwiJs6TzzHg9jD9tpdS7aWZqE93N5dSoX1mCScFT3kU66bR74MiCKQA53XoJt",
  "key12": "2pzKJvWyDR5L2zAMqTPp5AMivArgq7iB5Ueiy1rUiUi4Se4bfrdU8VrNsU5GwQw3ZQaLMnZen8FYRAwE1GrGwmUb",
  "key13": "Fhhp2DUjYX31Uj8PQVjScKo86rngFKti2TgSd6QPDvh7iWTZ4dL9QU4d7kqYH6vy7hWHM1QWmgXitpYrV4DVvgu",
  "key14": "2YYgU4RW6TdZchZ68DUjUT6ppob7SFdkDMS6M5xsHhmaxKEjEh84zRosq675LtiHTyocLguRiyCd76k3nQnC18Xp",
  "key15": "NMo1XQPKNfDfoe6UeW4F7edfDuwc1tYHJgqW1sQGjWZRnbuChiNhHsgibMREneB7qJRh3WKQs7eHTcYQpb1CGPs",
  "key16": "5pAAUunTzKudpvVF9VwV1abCxwfheLm5dsiRAX8zu9K7Xf6xKQWU8eex95HS4izP7P6juDCenhLrY5igGk5yNph9",
  "key17": "4LYWaa5aasmT5sVTtutsvHaHwvWEdMDw4dAK9rGFbZ6V6nQB1v3WzAPcKa3SK9ySLuQrhHK67YAJvXBTUGj8Rwrc",
  "key18": "3qXUJekUQ7SvaaqDnhoDrdW4moHiRG4V8NCg7fzG12YXg4ucjm4QUHKWicRgmyKAUPee7fjtGEgxWkD3Yv6UeHE",
  "key19": "2N9iCoieTzzXXko4B4sJYjhtdHYXqFShifzhXez2Y7hckFWMiapncnuYijuQBb6PiXTjEzoWW9dtjF1kHHu4dz4y",
  "key20": "5niEz5rEzc2StSPYbqonRPB6QVgJw411FwhV555nx7oPAk1bGdCqDdbjadGkbBVxR6qHTF5NVf7Bj5AJbE4xcvkA",
  "key21": "37bLdDz1CmUrC819rYcYaK3airJBr429fYP9SceR7ydxiprinywgGUEqBAfQ1paFEh6rMWUh4zeep61oXjBL8aRn",
  "key22": "5ovA9vWy89v5iFaMmRyjQMcAGHBnKR9WCtvcyzRVH1P8ihg9L8p8AGYR23ATbmYVNzqgpHeDvkxf1QV2oLCHPTFQ",
  "key23": "dRHMhuw5XmP7WHysCVvXgFghNcUVb66T4ozG6pNHquppPruvoS858zs9W2rHGPqeGModST2x5pL5mhNTCRrqEU7",
  "key24": "3p8eJkcEt8dHeYW7gN5QJJCUYt99jDb4mD38ykhRAA3wFuHsuPbHn3QiUwbqM6v8ai6wmXL3JYxzd3yqb3exdRkW",
  "key25": "47qxzpNJFSnV5uLh5mpHv8szd27czC7BpN9VVStRKrZ4t2djyeADiZYHj6uL6qoASsjbBpjfxeSC162roX9tCzhJ",
  "key26": "497VyugRAPNupSe5sT97ZwFM9y4qE3r6itrUfPmbR5VaeJxsPeniTv4rPUTaB9yoZU72C8XBqxeKzwoVsbdwDMxL",
  "key27": "2yd7V3cirqbmZs2uG8RTrbuJqPtyA7KXcVDwhnC59KpYi595dNH6gADMfN5hn2yjFUGF89UjRtJfwezG47G3V9uY",
  "key28": "548GbXw3MoawaRhnWNk1yJdgVguERCY9gG9ip73nUxJbPsTcJzGY4NDr3A25hmqYJ8ES7mTZTseTMEaw94Bw4nqu",
  "key29": "gPEYvxtEjzZDCzkRZfegiAQxdyaHWBTwnF85j3zvk5JtxXX3QaaV2j9BsQ6vN3pABgoD6YxH7GvWDcDAvzJsZkr"
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
