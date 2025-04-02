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
    "5zWbyNDdGbb6T838G5TdXs8THen6orA5bZao2ofjjETp19AfhT9JdfVh5F5RXMu9QMJxqC7qJ65oxnYiK77mNH8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FqQ3JgJe42taNsGzJQZfCKkWhJA8rWJKtQmwFF9UdLPVLWs2wfEpu9zYLogzbTJjHNGwmKZ1sZ2upGevXwrsxJm",
  "key1": "5bDs9EhahTKZQE8LPJib7qt3NJVyuzYihAovdcqrtZdcQDsYn8755kYJ5kyfYZAtaWXgAEvHPdcoyrSDZPKox28Q",
  "key2": "4pADK2w7WtaLQMN11qymx4QXmjrzHEeqW9rSy5zoNmRMTQv8yiUBguygVjEYRipLyWYUnTKqEcqCK15TGZ9GLvLk",
  "key3": "42Fb5nsxrLHpqw5jzJbTow4xw6oNHnPC3fM47be2ZZs7LYwdmWAA9dwzjwP7a9jo53boM89dnh27amEK8e63U6aR",
  "key4": "4KxqSpdGPhCKSXgdVKFDWUVCBgjmBSpMGAt1agcWRg47m27FPZbYegym8Kq997mebLZRYcoJpeiEZq657RrrqrSm",
  "key5": "cSoQ3CnjVjWhdHBuzir91hXJzKkvapyPTT819ynw6Uue9jk5VeFLGLXzh1pxN3dgSaoGPNqPVM4ZPPtFocNc68h",
  "key6": "2kX8DTGVFxq34viwq86VVAGFBAgYoFYBawhPCNvRDrCCHJWLf3H6He3U3H4KWUmcrT96JHaJt555aMQd2dW7KQgG",
  "key7": "4UZCwaKJ1XnkpmPhjCcFBLaYL6cgrDBLE9FBmsPxkrmQqMd7aj1CQBW9hP1KzU42n2dAfB5FnQ1peBKTjKfUhePZ",
  "key8": "2CrBkpsGnJRVGwNjU8kBqPw3L9xzHao2fvatUHQa8pDworsipJrzwhz7FPAzhhbRpUynVr8cCZCnVyjMBM15CPyz",
  "key9": "3LrmEe31FiqoJdvytLwFuhvJsHb6Jn76jQf4q1KXqnd94CZK6sS9kUG7XmKjKxmoG1gXTzwB663Vo7YwEVqnQqa6",
  "key10": "3Tpozo4PTrx9MT56CS1hUs7CERjGJPAJY1GwVgcykcZALjfDFqSj4EM9XZUWjxBFEu47fQJvfXY8p6w4J9w8fpsh",
  "key11": "59vBD3hYUdzwJ17wsbLbRHWmoFstAk27Da1JPqNWSaCVytna6iQBdKibwKZrkz4BZEdpdyZDcBv9GG8iGccR83YR",
  "key12": "4X71ThC9RmN4UAUuKihS7NeJQ8xK2dyhsPWtzhGX3Gxb9hXqsRXtraeMeG5erQzeQEzYQAhmndYzU4xv1uFQBbgs",
  "key13": "2uunCVbFUfeMsBkmj8ueYqqAbboXL4o8iR3rH6wtJgtJbGjReGMtzvo8Nb2JwabcgqBMekPfU8nMYtZetMyCkhGg",
  "key14": "4sjE1ro5fDjrVRr2xYfskPQuV7eKT3W21NKKRRDhyf8vkWpwyBF5r9F8qAuyMddy5KVU133wU63XH2gATx31qayP",
  "key15": "tFdmm8De2bU4XM4YKavjmJzi45PU2G26ZUVjredhQrrNDXcYuRdQdkU1hvX5yrWRjuH3KrsAQC1en4iqK5yv3Jv",
  "key16": "5KUwgL1YUJtVrdJYDC2P9cw5F1634n1DfVJFgFyX8xNHZ7Uayc6f3cgpLvQhbsDoFhJNyWWgDy9C5TbfXJc3myoQ",
  "key17": "4WinzdCXQUSsjhnGki3u15kcmD4E35tDeTRmZsq2mcQNGhUK86XdB9Z7usmBD9ipmSAhxhLukqLqQeruZ6KXFWJh",
  "key18": "2AzW1i3XEsoXrHA919B1hNar5u9ExtrB67umvjQW9aBv3VUa5bqZX2pqYR4knEbWGu7GMkAUr2A3M9pcxhXFGna8",
  "key19": "4VwyJh1LjtjqWqKt4B8uJwZR4kGFET4a5GCMNM3e8wzeqMB9FixrKuz6DQRbKYCRTrc6UrvxahSoVtmgQ4qvK9ns",
  "key20": "46noW5nsMW2ZWEExNP43QZYRPw9XtX3AmW6qdQ5LRkaAKrYLmRT3QLCs2jHfa3NvrTP5wuEEhmBgDKTEs2virmFw",
  "key21": "2MD4fZzaap69AToAhybAAThZfxXK3P1a3p7YkA62Pjd9cqwqW8AdQvdfQ6eYgYLT7q1NuVRyjnYTnbyvPGtumxg9",
  "key22": "3udu1z5w2JMtCuExZ7c8sbYx7SQPg7dyCesKDmx6pxjqaTfGBt4NxUv7BhpuaJE3a57UU2gaFBj8DugJzdhjA3sR",
  "key23": "63w6rYkRqvtHLbTi5hTTE4qjaPSgCSQH7cYpvThMnoWk7gNoK95WkQzufCWCkogAqDfLAZidbLye8FbzJfn6c7vE",
  "key24": "59URTs3sZ6sP6f4PV3RXyowVezsUhNNdbJeinuVhcJ7MKukQNPy2AgYsTbRCaRTuMG6vcuqLrTJsN1FsaQCEfbYR",
  "key25": "3rALeGjEaaXvmQSjZYAieVRgAoLjef3tG9zVSwhNSKjL1Y3tm35h5fpKD1hadgzsXvSjC1WM9HmHduoxzncxtUX1",
  "key26": "39Gydx8NxVNaR7hL7hdJJ5ERJzhcYcmki51kJ35moB7B5XtqUaihhLCWJmLtF8gJdabTD8ALSi4WzV8J14WRCcCd",
  "key27": "4F91x2psaQfUAErHAx6TxTpCKkiC8MdC9Ap1NWG9GZifRfd6MBpChfoLyvJGhPLbFsUMDGyKQRzMjP3e7g62CNBM",
  "key28": "qXiNBGxfvxJksQzuJEpMN2DZBB8zfFJSuNph7AT6Q2govCuFmkaRyEnchattRff7i6BWusF35YfsMeVYZZBQqhG",
  "key29": "4CPU6Hd8h3AKr2RBvRtSbsXTMjDuUUG1HtPBtK5PxXANmaN33nspxsJcHrVvnqTTtsx1pK7s4DmQbuoiYGWi7mJ1",
  "key30": "3DysjJVFKSXfCLBduPhUDwGpg5jKe9odSBgmRDzqhwuK6cac3esZyCnGr1Lg1mytC4vUoqE7znaNKAYFeSwAGCD2",
  "key31": "3Eqd5mHVCEqdUFriZumEoafBr5vjZjhFHau14BYw4kGg62P1m1G4srZMYojh89PtgXsdJHjPUNGmKjCV52puD34T",
  "key32": "dpe7DTtkecEM8kxyyYzmAkwqS9VwbDffzcRDmU37Q8ncQCdLTeXpiSKgX9zKESwP4XS6DauBmPBK9tvis16YqCP",
  "key33": "5knx6DRWpSR8qDokGFKyr2tTKhW62NCtHGb6LDDR4HWguin3rAQcVXR6izavrQrJZrL384tNyYjnXYLU64WQZ9P"
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
