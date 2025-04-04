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
    "XFCp8DrA2LraKW7Z6snVHJV5p1DGKZHRw9aypDoyQbfzqaLh3SqUmTFyU5pQJg7LtkovKhmmNPDp6dWGzRgtMt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64wPNbbnVpu6ozVoEDsFV3FbStMyhUt6bUVpkbfyeiEjgc6HLq1zkbR1pUuicqqRaW1xuHQnPdBURNYDe7vQqSqF",
  "key1": "4wYwDuQkv7UD5YyhSkdrcpzQQu4pCEjQtLkJr3QB5nFXamqYF6j4xxHmnAPKnZQ4wXJDbtbHe3Rbqj6qzddWEHFh",
  "key2": "2vHu1G4e85p7n48XnSzy1vdDyHPP21SRNAVtNtAVDungSc8d2QFW2cdpC2ZmceQnnWHEktxAZnetUPcCR3mi6A9o",
  "key3": "3PdotLB665Kw3qkKy6SXFTPsFaFHGpCk3wHNHKn5CBzLyMts7CUzxZ86PSBb6ietrXD8ETKiGKGVXrXNHZZPNz8T",
  "key4": "5cvT3V9a2FTVbdaxi8daSztLwfvXJjLjBb7MqYEU4ksj6iQLKoeqKVfGqTqJSmpyscc4o7qjKnMhNRjNHG68czcy",
  "key5": "4pRGW8PcRNT17CTv4D8NRthA1662QW7ETvztuaoghGLyA1v6KEbHkLMZQGmYf6rEbXzac3X9K5x8VamL4R2ak6Kp",
  "key6": "5DVpLgkM2TCKy4RHs8yGBX3G1uvhBB2cKX8mW1FjsZgszmX2boGQjh2KymwxmDmnXDenJRac1o6Lj4yBqwqch3bu",
  "key7": "5Rp5JYpMh22e6YnjwVEZUvZamKCG8Vo3ua7amLDAs3Wwgpy35NsGbp7Kt5SdSoDzWc1tsBKZo5LZPUJGz4m6bQe3",
  "key8": "2KTsZYsCMSUuyJhkb9Hya2Jmc66VwRugPvfoH9L3crg5erYZkGUWtsTSYcUepCZKFqiXjb3eVYvqNVsAfTdyyZyt",
  "key9": "5j9Np3fEKrxUSrxc4NQ63RFiUjGWwe1nND3haxudCQeu6uDEqpuNSdnU4zkZKTadcfAHjX77EJ9GoYi9KqFtDNX8",
  "key10": "3toGP2PyHR2m53rfpHUhwBREv3yJ2RtPgcxgf3XXc1m1pU8uhxe5ta5o9LnBcSLAcbggXa17RKs4RqbvS4Go21GF",
  "key11": "5oqDZ1pQer1mAkgspqpMN5TDARKjJz85C9EhfjKkwL2gK5deTqre2DuB49od2gPVqW3kpALSaLDbN4H5ftp8x8Xo",
  "key12": "57LUYkfs9XJkZiYKVLeCDSimTMuH6xVCaqL3BYW5LEojyfU8cjQQ5fJf6wSAA89L7MgHGQMnU8dhnK2M79ggh7rN",
  "key13": "gH68H2K4MJFb9jmKbLYCNFJWGvpCKUGzG5xZwc6YT6dtEdfq1CJBSZNs9ZodLXVNXttGnpipXojCERZb24oyZAF",
  "key14": "8jMGpJ2fKeiNDSM3Z8DGdufTY6Zsaq2LnLcFFjnpz69sFgCEuUoyAQ8GUqJJ36tW9mi4ubudt8SCXdRiYtfbBkY",
  "key15": "Mv5gitSjFXCDCbkGEn8Jjp5k5jvDF398PP2hNNNsTs5rkQ1WNEtGELddaJNg5vVED2M94qeEdapvB2akq93vZKk",
  "key16": "2XzzRzGg3ZfWXFAZEwjT4yB2ZDzPpc4AeovUi7Q7WzyfKodJFHjck5kSch4oN4wuMMtp6tNh2tG1TeGDVHU55T46",
  "key17": "5LoiJiQDmVoPHNQWpbhqDGr3zk3n6mCscSJkaSh8gvz9EBk4yeNqrRvCY9HEq7YME1sLkE5mQxMGrHoi7XqHr7Ex",
  "key18": "3qM84eom3Yj5wGp6Yyexa5AqBCwpP8cDRYuA4PEyWFgPoygcuhr6NydQTjnxcxH3PU54gwdZqqMic7TifYPBijWM",
  "key19": "4cGueP22oLDdro6KuLxxmSP5SBuuWchHctg8c6QqEsgqj55tZTocUFWroXNZcbGoHyhwj8MrZ9D9aoDANK2Bu65Z",
  "key20": "5hDbBrZiTR7oTnevpuHo1W4qGx5M1AKiHCQkYd96mLe5gdnwY58vwUUsDyZXBwLaoYPU7NqeEWZsPRu31h7n6tsB",
  "key21": "5m3fd578kPaqFcVnNn6EbdbE1vNQ3n6ui8Lt3FKakij9vygHBzsQab7VfgoNKBSEkMXEqMSiQckUB7VTqyWPDzAU",
  "key22": "UFD1pzipj5JTGeGJRJYbQPZhVkKaR7A3vAt1KGr2shobMxYpH49H7uoPjS2DecTJzj32zwmmXEAZqr5YMp7rjrJ",
  "key23": "63oj7JNi4fJKvys3cKS3Hkzf6rGJZUipwncf44i5WiTtmr3DzboJKaLfYBJPzApCP6yyVqLHnBng2aJFKNYSAAiT",
  "key24": "3Hr6fKqkFg7BnDejfYbUp45NB73NuH9qykUVoDKFCYvxuNqLxyZN56ZV7b2jSHWHiPQQXiWiVFBCiYyxPHNeL4b9"
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
