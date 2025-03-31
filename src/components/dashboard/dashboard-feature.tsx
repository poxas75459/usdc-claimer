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
    "2VSQYdXjf255q4UhNDAZrB8KqCRxwZvftQRBVm6T6kMSzcbtMSTjVwQJUG5KG5437Qz1WdyEDFpWHDCy4bjYqPi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3awN1CUw2b87EG8cD76h4DgciwdEjxKbX54bDq9gdZCYrGVM565cV1mnzGAeDkf5BQ9fPGUP8bWZ9jFh6eWpQjZZ",
  "key1": "5Rdbrtpw3MXkwkfGgmaugP2M3mvfjBTFxUVXvgtcz75itvUA4UJFtnLQN7piQoSJ2Zjifm1gwdJDCYgwST5rRQt6",
  "key2": "3MyfXW4pL3BYB45WXfnqHJAzZqWU1sScEcQxaJmjzsLtarPPzJB7kmKUDvzRAsDYJm2rpGLGeE2DqDaAt16w9GjV",
  "key3": "5AhvST9hsKYoGyQAunk7ibF3uyKbUmRgd86eVFKFEZuAY1LT2CYHMe3Y4Pz8z1FWCBHpbMqPXnBpGUbVUKxuxwuX",
  "key4": "2jJBGwyVCe6EJgrNbpuAWLFuGSDHQ1gSgSas44PBqLvuDN4iSL88rnJyjtpidDy95PjLjhrrsSq8q9vJwHgKVjXV",
  "key5": "VdnfV5z6d1tWNjLB4o8twKrtkoHMd5pQDmHzp3M4i4dSjSNPFEmoC7i7214hcL2XnbXdAvBY7CTSTt3YEZRNmsj",
  "key6": "23srfHhcmg8km6aEqaUfwmgdf2xssP9raCtYzkJGLm3ZxQvY3snMhd9A4KUx37yBwwgTRBuD2naTCXYBsLs5tFHM",
  "key7": "389jjT4kV96inNPGeaUu7fpGujgJShxBL5jrRAVgySsVL8XkmbZ9n2uG3pKVxeiT8toxjr7p4xDK34YYxGsTpNAK",
  "key8": "3pv1i1ZR8s91tK1dX6sUuYSmQEUU4KtdYgeTtjSdKJsYM88jUA9RaqurCquebqiArwcfi9JGbVCkukDQQTZNBpiB",
  "key9": "4weTen4W7NDNKMZhh3rNf2z6rk75FUuxrsZy5AyQXiCXw4jBmi5Kwn8td811xcD7r4juKuxCFtSeavnj2yze2KpX",
  "key10": "54KAPdNd4iJ2wEZbkwNDg1CyD3GFo5DBvzXF5tLVMB2Tn5Xh1Qu9nJBQSDKi9ogYYM4Me764KZioVWAcLdmq7FGY",
  "key11": "2ehJ7tK16tE5W25Pifj9CotUUEJcMVYsP9HP4pmL3CuLHWSRrAonEUaYRZSpoKgUPzaL6syEbcFziX8yE3tJayQe",
  "key12": "kaL83ZrxYyRVP8TsCxiKWQFvr4KV1S5bKBcoAYz1oRedhUtzdpsJTXbH9yvaxE15DFa6ht1ZF4Y1K31rLwxqhcJ",
  "key13": "2nqX2nvV9i8tSGavDX9E21zKGtJyqif3cJn2aFy68iunM2AxPDfHKC1hYhuFMTdy4ypLe3A9N9v9GSWcGTAA4VHU",
  "key14": "4R32njebv33Zm4w9bVNm9y8vJahJ7ZNunQfE2M3kbHd1G2BQ5G6r4Jdn9d36AtReQFbGtzcFsX2TGC6ZSXQjDKDU",
  "key15": "3b1EsF44qhzcM9KGkyczNyupe4CzPVjDe94mXiN2D9yFnGe5AMthMCu4Yf3WEWBvLw18LUSoAGQfumcQ8utUmfhe",
  "key16": "32gyk8uYx2d2Q8tqwb1wjas8sXQtsSNuJkPTdrLySWHP2vEycNxysnF4QMcxRNG3KjRMeRXTbwDCRv5dJ7BfqKHB",
  "key17": "xZbZkmTySo6WVPBGSGsXnBoxbwduwFphPzPsTKBdNPYHijuDHBPqEER8KirEmREo7wMpswvngkFDtcZo28B9FQG",
  "key18": "2VA4weZkPfLyFLJcMkEATFPWsGHryWdihZjjBMVdHVxEDD6LGGW1DfkZyTxdrmf7dWhgN1HubcgC3urTUF5AAcCv",
  "key19": "2YrEWE1cZVhtbzkftTuosySo7PuVCo1EUPnjmBFwZ43ji8NpxXyojtBoaXBH1NosLLNgxomvrDmVbAUwF7tyT7fn",
  "key20": "Eh37jSidXS4ezCHXY964hQmUvD9s9eTsStpT8aMyVQ6v1KsnLbZE5F2tzXq2cHACyKPstBcd5GSF9TX2ZDLuo2g",
  "key21": "5eNW5Wy3suaLBdzaEpkTs5D6GJnZyxfZfiV4cBdwzimFBwcjAd6hzZ3siDHgFk9YQGwZxEZfUkcL2YPFzqBowN2m",
  "key22": "3NwmkdpS9BtuJTTPxx1VQPVG9ribkfk42JGsVGBM4YhnfyAqVvRdraCb8tV7dgwjcZmnv6ArJaXQdEzUHPuhw4qM",
  "key23": "QSXimHsrMsyGxgEY4T2mwHLW1MGiikqEjaeev5XZ5MCyzE54oJbrPR8BEAEEaRPduToL3tG53NhAB4xU8nV29Hx",
  "key24": "5QUr1tenGLWzJ7osnESDNwCZEX3BthUE6X17tD6YW76SGTk4KyHdze3CFTroWbVc4LNvRX2wMmgvEBPu5kzxTBmX",
  "key25": "w9EUgQCS9WBHjfZcqkY6LCvWBoyf24AEZqMj5WAkJkPQqeNkkAGGryGMmz9NR6ReoWzUoXNKTnC4hfz2ToFK4Y2",
  "key26": "5J2sS2Yged9pHYbWD2t5fp3wzBXdozqM15NiS6AYxc93zsc9BSUdpFdpKJXqCQiZxQLLk1YDSTWtB9HHdyCJVhvQ",
  "key27": "2Ae5Csn3XsJvvHxiAHb97L8jNArLUb2M78ZjURMJbraj5K5SyUwoEQJv9PZ5mkaxSS1bJTsTf2TwXKVVzy5jauD5",
  "key28": "3md1egLAWdPDowchYZxaPpCbUSNW7zbT1eyPBkceubUw6j4drL9BppPQCRkyvtt6tFW7nbKq4GKEUZueWnm8AE6E",
  "key29": "BAXTaTaCShKGiMH87VSP1XmCVJA3qr5kAs6h7Zgr75Lp19oSrNE5EeqPRVbf5FEcCaoqBQGTENMnQM9cELkfZtg",
  "key30": "2S29YmCZBrDSeBMEg9jqjrJgfNBPTZ79PzsqVKeVKN3yy1Lix8dKNbJ6NCqUwdzC6BmEMCW5uE9Z9Argn4qLpMPm",
  "key31": "3A77H9e9hVYmWJUVJ4Tjf3TQt4Ne3Wep2hEXoLUtyECJrVzMN1QietJ6C4WDkxnP6AZMZammR4GheRpjaDTp9p12",
  "key32": "2zHWwb5M81VHYcfSe4DPzcNc6qZZjCQ7ACrXhU7Ce1ZMVxYMZTrhQYnzXSLnqT2VgJq4rauzg12bz8vkQU14pQiJ",
  "key33": "51h9HbFG6ZfWaGv3MXsc8m5TBFpkMNb9Ct861g6Bg4HuYMa7DEZ4ZQ9Jei8dkB51caZpuuHWP7G4x5e9vQLjmHPE",
  "key34": "Za57ArD2Xdwz4Gj1qRHBK3zTchiRq7psGYN8hwnYeDe9wSnHs2TQzaGqkWwk1K1PiSQJBwf55FouCZW31a9o368",
  "key35": "FzuytXTWPNNdHghFVjfbzaxqmwejJ5WvqEyjQ68T5vuEgeZGowT3Ej1AHGJJ53WmsadhRsp9JG9ioS4umpn2JMh",
  "key36": "4nXrdkYeSY5t2cnUVemu66gC3EiRqn32uEzSHerd33EiVSxHjEzkhrbV6sUnm7Why6gfc8e22RrMcrZsYuzum8Kc"
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
