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
    "3VTGbCn2suqZLr5ALf3xeMn63mk7D2QbkGSwvRsGNGUQu4VvAtWtrmMURLjRSWhMg6ksK1HgsJrBuiNiAsZY2pxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8E7p6QRRZmEiajn1BcPHJLnAxpZsitk23ptR6fGKSXyvtHHQoeBJibvb9fkKBsNfsGkMCJNJTqpSzUGJk9pnnE8",
  "key1": "CjgsjzZFWSKv6yiKf4VL8gX119x52Nmgch3sJtkQVqYFdRKhzM5bQYaHiDCZstWW8CRZ7CEgJk2sWD3XoguSFMS",
  "key2": "5VEzVF2ziXP4qPARQxHLEDTj84fV36CFkSZjGFyrA8DgXF1aSceM8wG2macxfYStTqVNBCT9gFBf9GyLpKxufN4T",
  "key3": "3TfYUYjMpeWsBRgGh5WeJJMpjEJFnDogZcF2BMRdy4fb5Y1H2DteKeTepajSR1GfyVfV5rZSuA2erDjZt3J2At7h",
  "key4": "5Vbaof5YHrFRoU87XnRoa9ZFa3ChSZHDbY3DHWzR7R4Xbhm7S4JzGL7UBLpueS1VKQyztPwnHNQStCMSrVBvFWAF",
  "key5": "DygLs6Z6ibry4db7nt2GdWEumxziNB9FLQDyJvpFoWGVU4Fg43AqLTLCPvuzM2MBHbBMfnHmhHcGmL1Jxrp34J7",
  "key6": "4mBmoEBp5XqAga1cuxYzgiFvfdCAEZvRSTdZNevhW7UfrfpPYG943M4dXPoJEWjgUytW2RAH17b8KMy2frBxic57",
  "key7": "2pmvDeQuVB9fB6gBGeYLi9qVP3kxKk8dtKhQpviAwQiU4LpV2Uq1UJCZh88tjrELsytojMBEgUc98Mx89ga7fg5h",
  "key8": "28GSjN3aRA8pQkgFNCWeKGCxzepPZMbRgsMoQmJzBQYn9mhjBa6iZSHMiMwsqtKoyt2ZDggWfZPAj2oKpujEiPRF",
  "key9": "2Xk3Xf3UkPyjtUyPcgpxpXXvwHgHvRyEnrZo4szMkZyeWhw4yDLCKXepwYTcdBJ8qRjzdqDzhnwxSUxDmsCxGKtm",
  "key10": "4kdzs4JaiFBUnYq477wJLG3RxRof4DMJzSTfKuZ7ActdeTkKhFNGdhEmHCsyZmEaGnqDtpCDa2o7RHQ5edUVDMKM",
  "key11": "51hKCi5A8WhVCYY5a5JVNJF4eLPJHPxwpNw4ZovTnQpoAdLEd9M7tRpp49UUCv26mZs1iAHj6pPt7BpLiJxSKvse",
  "key12": "HpcUfG3EKGqjFmFq7P5VkhAwv953EQUFWikiTuyWUCTWjnLwD5DRcDkmQYnPntCbR56sjP1FesyGt7g7KZk7jMJ",
  "key13": "2FTPjhXTuyW7dQDVQu4r8aa4dcd8wuTd6WDjiS4ci1ujw7Ck2AKwtjtfrea7jFkJRwU8STpybKYqig1c2Bom9Vg3",
  "key14": "2xE8oBMrjzmgpZYP8hepyGMHa5sJ4H7rMuMrebNBS81JLYbs2GQtVYMAxdGmg3xgrLwMuGcLqgdiSVch3whUhRaR",
  "key15": "5fJQWGT3YJ65Jo1PssVXELTt6HfG1JZodrQHveG5hNhGZ4D4Zit1LaUT3meyNnQ4eDoKfyrS3xLnHhniAv3bz8np",
  "key16": "5MteMne2BrZj6yNWZQfR6Xmj4fsxfvT6i9eRJnBv9XBGLPjE13f2wu2iu3mX3BudTFxf97q6rxAWvJkKMfoXqsfC",
  "key17": "4YZfamrZ13hXAdTBAYPpz1Yb1r1MjC2dTTdsEmuad2FNDqeJs2YReKmuu8kZYSEhCjHJ7dJdJduidQsCiG2stwmF",
  "key18": "2inzfbXfupjnrPZ5AeWooa3uGHAbbN5GD42AsSF7bv8k3BmLY8nxohzqD61PYR1CFMgzxzAVmCG1u65y1m8tFsHJ",
  "key19": "2aYo1z8dVq85gK1QC5ZUVhFkrCrUNjpSiRqt6A4vnjCsnbD19hx1qANX4ivhFvM7Ka54vq7jUCBbibG19wYQSheT",
  "key20": "5MGoNm6Z3GcYXFwfbVSvVLqHR8XABjV98DctQM9DG6tZ7yBiP3xqqEJ7A68j1sgW88gYbizYwWQzX2ARV7hgPd5H",
  "key21": "379fBYUKYNmVkRqwJdNNKQQoYiZknPdvFXRKV1PyxsjeP83TRC4baNQFCkcRSNFY4p5T64KXsYmbAmWuZNbQaFw9",
  "key22": "2uq796dpJw5KKVVJqFQaoZrawqBfCWnNiYgrtJQc8YyJKGjs82Ti9pVpawn1YQfDUoh9FyERDYLngNBav8HYz3e",
  "key23": "62azxxEopmDhoP3McShAa8b8GZMgkNfn2vo3BqgatbrVQq22oNhJKwpAvo5m9EsQWQX11wjX896W8qVfcyw4hwVX",
  "key24": "539NVrHkMs4r9MCnMVvVdpYxKKUHb7F9Wvx6V1fUrginC4oaDVX37akiVw3By575hHbboNpjsUkGvrRnPTe6WMD9",
  "key25": "H6RkQH2Pbv4jutZK77GtKJUWVLx83Bna1wm7qn1MDNAxe7BeXSNL2EAaMKkNA3PxyvcbnU85aDmXyZ1nSGvv68o",
  "key26": "4LSbbE36saygfWfa43mNspsPciMjCYbJvBsEq6GCj7LxYvncfWLhQecokwuohVBPagbBkxzuJDY5DKdnrqBXompG",
  "key27": "LEuwv2aGY9gvUm87McjLnzX9twssxZ2ErDksm6yFCX5bVt5am9YSa8TFU77WW7Ap2oURyumWY6o5nS17vzZ5VrP",
  "key28": "3T1Cs6ukAcZCcqFKAmytcMN8UpzWWuEdZpkAHb6EYB2j5k4jKbDspdCoEA2rcBfu8o8cvZs5gnXH1L8S4zHqh6Hc",
  "key29": "2xKKYGycZ9TamHcpG9hSDZQdPY8hx7S6iv6fK73adDDDz75ayAXGB6GipY4PjKNe2ApCdokLuJhCRvCfQ4ueq8aG"
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
