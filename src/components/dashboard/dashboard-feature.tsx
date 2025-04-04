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
    "2oYGVxwkiwHqGwE7PdUUXqX2MpshH8vqUqBwxYQFGt6ZfsthZxCQmJYpT1jnXVtHuWEDoXm8PXBdjwkffiFTdaoP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HTAt5PLU5ZGX69jqbrau4aRej2vm6xn55CeRZdAibrkyLWMci66cpdHoM83YCSmqu2P7QnegCaLuY4ctxppzmv",
  "key1": "3yBEDXQzwAjuJ3a81Vd9QDYhYVheNP9f7xfvyvWuDYVdbyz8cceFYVZnnJowopSTqyxkNRNRUZii53uBkWzekKHT",
  "key2": "n6NF9BhhXzffNMhg9T3uj5otk5YoUVzi8BRX1SsvEJziurSY6Qzkmt2sPfcqvRKqwLzd2Fx5ar3mAauBfv1SUav",
  "key3": "5UciYHRFqbYvYF3fyYspQWENNPsPAWJdbQ37tPM77TzvCuaAroMNAjvUjRcTQpaxkvYBqmCPfpUTd293ERqSSE5W",
  "key4": "4TkRokLAUBxuo2T4BYq2iubA3T4aMfwatmbpgrRgnbUzp3usMoG6Fc83T5fitk3dLNWtB5uP4AMw4mh81Uo4gG7o",
  "key5": "32uxs9UwBt2rXMFY3Zx2k7EvocHUuMzeEQ2TgBKDm5XqaczotCNYG3XPN8xkKb1edDhaHfoochzEcUcb9nPFsdWr",
  "key6": "2Rah5ip9ZrPyxEV1eXQxJcbMUWjY7EiwWcn8jDfopA1dWjhiv9ZSKLzAGtjUt5FAzaKZvkmPAmLhABUcvXzyCX5t",
  "key7": "5F4hUK7dSCUa57k5noFq9ZMNAwAw4vVz6ZDHyNFzN1pG72HTViwF6CQdPatvcTgWFkp4G4ESmpSHwRqMf1odSPdd",
  "key8": "3TZLbFJqP8upwM4mwP5JyKvReu9U29jHJ5HcH27vidtrwgzXNTUnVQ1YJQg4Lhr8jMNYkPeQ6Jxgz2qiAbfZnLEn",
  "key9": "2oi7xRbPkRkH8Z4aMiDWbvcNe4ymMBiqaxBMRjdzeXhhZzJXnGPcLi4R3gF2t6JSb1ShLQnboUEySnsQnsNd7Hrx",
  "key10": "KqWeDe4Tncb1eCdABQqdrvCjbDXUFhVsnLcaheKBpJexeKogxVGRpKoCcg1ahkPVnzE4Gx2hRpUX1DgH541SUfy",
  "key11": "5XwLrkmCZLFDg2Ej6damTz3KBxtCt4XsSHsibKosKivAeNDoKVRjCE7GFZJv3rVTRS4ULXHuDbV1BRnT2Hf5JmgK",
  "key12": "5yJfwCLwXD2gfbNJf3Hnx8LwZWkzVAb2DY5uA1n1azAWhMUFMUF7R6jpXaP1cWYTa9unvsdAWpVQmFyYGc4BvQFZ",
  "key13": "3AdM64G8t4eoBddLB6TRo7VwvH2LrnTjKNT1kjiSqRJi9y1TNCGgNDT8dSKyaVjdC3yoPmhYGJeGkxwCnBwAGxBe",
  "key14": "2HU7QK7M79RS69aToNax829NPKbLezxUc2ozohQMJqmqmU2UDQ99Jp8UHsYcKEr4eurfDZPEELaT1ZAr22YcbAVj",
  "key15": "4i9XGprz7N9S1oYcVdVLktnfunTC5uxwSyyXMtDZEnMLykEm8APEfiaw2jwrjtyChEQ5kz1o78Wb83op5p7H8Gtb",
  "key16": "36yAUHnJopVbeVgZQXiWsFuTMhvvk9qSp9wQzLFQzwLWPUfhXjtiwrNgqsxrdQoGeoVhZdwGJ1CK8qbq63qSBpvf",
  "key17": "CojNP12SuQk5aaxC8YEkJqELApYzA2SG48xG9NdzxtMn5oyjiWgkT5mBhBxwcVuJi25Lq6qKSy7ZweVcJqTHnsd",
  "key18": "37mUq65s36jvFXi5U4hfs3j4P9kBiaf8Wd9f9o3qAsbXaNGiD8Azty4SwYJLkffc5vbbffzgKTwwkC1h2RtmmnNW",
  "key19": "3htFX5jBfHQFBcFyGErGHuxRVs8e6vEuz7R12ekFdhtt2mG8yBjjsXJhoZFLdATv6geHCdAFdSCoizJZ7oFgja8q",
  "key20": "2hE5WkxcMrE5h9CPuAJKaMaZj8R4r5Ub58x9VVWLB5wVHW6SrkWAw9ymzUvuDYbrvuNR23SEAxVxzrHkJkwQxi5j",
  "key21": "46BpDrhdS48vTMbkjVKC1U3Q4Cn8KvxHUM6PEz25j1bGtZps11gZjzs3E2b71Gm7q2uXhz3hqE6MgUyF2htDu1KM",
  "key22": "3ht5mDPwhWz362m21nt2SXTLmkPU6hchPHz7sVYRHExXo1VF8i8uEGcbnC9TJZB3j4Rw7CdxXHEhwHuTF8apifjd",
  "key23": "38oP11JLTZJW7L8HSP1dnKKdSRQrGSFDgSToKGjkMrF1ztCTsfnkCmBuF7K6wu7U3oM4R2iaKejK5a4HF75Wjv8H",
  "key24": "2R8XvjfoDgFQX15z5FvrrWxC9Zj9wB9LDAvk2yMJZvHREj63TTTbCXvy8BSgDSyq3xNG6Mx5yumsX5LDcd7ETDP1",
  "key25": "5vJ9VYiQcfm448DPq81v8LT4dYXVcPByM3puXUhPrS91H4X7ArhP5X7sUrdvokHrSwtNUuZprQSgNJVA4wvrLLxq"
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
