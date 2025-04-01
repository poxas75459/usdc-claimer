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
    "gSZ9ukPiyWchLMcPQsPqDayTQXn2jVqsXBZYg48nGmWz7w26HLX6jnztVCSSFiJpSFD1Z4S8AJfJ4SVujwXe965"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PCWUZKNqoRBxSoF7vRh2CBCztTzhUoLt6aadVQu1EAHuCYhce32SAF7bHgVorYZAya4WbruhDdMVu2wtErh5Apb",
  "key1": "Evg6yNLpXBFuGpFe71ZNgjEZm2WzJa4SUnMNtLMP7127zmyuep7B9fyxPgBSgkQLoh7t58XDmwtyn86RzdJ6jQq",
  "key2": "4DnwaenGfpjXXNTrzuAnSemmFnXWmgc5sXeAYsZuNN7zFAWLsdnHAW7XSP1vnLbF6VhPvcXmnBBGY4VHnViuN4Fk",
  "key3": "3xWjindc233wGt5JBQ8nhqzRaaaemsEZHcyEiW9WZKb1b37JhtUoaZH1xpojgH9qu6vhdNAo7gvh51b4GduR6sb8",
  "key4": "3RvC46rxKibR9qAazqinzE8xwM9ug5Z6RTP7BF8GaGMpCpCqoU4NsUsbj5xQCacD9CzW8p7FWJkGXBKcFbctoE2V",
  "key5": "2ehbbcxGkmGJe7McLoB2ERYkid2hVGEhmtfiupCy4JFyNUEyPgrR7LYmVQECaMh2aMw2CLXiASzY6k3VF3KssP9i",
  "key6": "4wQdVDKrnDifsVk63ZXkaVNMWJT35AfnZycFf3uWAu6ADzktdVeg3B7NM8dWufhzPSVYxC74rQE1ure28yf1ffi",
  "key7": "4j3uyRqgPGuaq9e7VfFiWGte9YAdfvDMgSKx4EUGM19C9qPzGyM44apBLw5e2egSvZUjbuGybFVaVhA8nHHgc8ja",
  "key8": "4CsTuj99FBHaxq8fdQT2TA1P2PTharpixSbMcyjByMmF86JQagQKcrQdHxeJNFnmrmnHJzv9GVU46iEX3AJucnGz",
  "key9": "5o3qQMdUeEXETsGg5Eg6umqtdJPs1RmxUjvf67SMvgznrQoPP4s5LN73GwBxBWmyuLQunXziWsX6Rp4qKYjTnE55",
  "key10": "4zb2AuEiqWmgL5AhEbzvwUmQRcq4RHdJNPi513G6f5SeJKF7fkd6c2KG5TsfT2HAXk5HdBG91SqDnc6PYcy5a7cP",
  "key11": "34Q41RgmiadEqsPK4pJnmjWaXYVTQ4puqTe9gPkHtJzBbi8z751gGLDkNSQ9sn7rLV2ez13XvpXsmno655RfrZpn",
  "key12": "3qeCavikDVaZSh1F2t8XiXPDwDbwAhmiE1H4haSPc8qvGuBFjDdjg6aoLSnmjv5RSQMc1f7XdrAbsu1mFy5XbX8Q",
  "key13": "uKJbJxt4FyELuY6xMk5smYSXcaf9MobTBccxc3483kQyvvduRaf3NzHjJko17BUvASUjoaAAT1c6mcS6Kht9L2F",
  "key14": "2HyaVZPzJzxpY6KRSaxSp6BNVhN3nQBwFdvy7LaDWVf51xedzH9EqBVgJKPtN1B6w91jrKJXUprxsVBbdG1cfKGs",
  "key15": "59V6m5hkRDcnbqSRCA9H1sLa25oEwZazqhbbdUPVYbsf9FRHQ5p1xvTHrQE8QoZ2VqVEi6WnmExmGfVwxNt2v9AU",
  "key16": "3rDbU5f3fw2URZebbMLbJTwxpSyDUHmqmgFi38GprmycvyHT1CBbr1fn4zAThGicZQXwKNVd9ZEGk13Y4R3y9tJK",
  "key17": "2UH3iYQ35DC9QTyxAgThEAfqFrPWkmm3Baz6eaaJMbXzeqLA9dvPfMJy2Agm26XkMXsE3kc4PHNky5UPWowAxyE5",
  "key18": "XohHZqNAJ5957JS8FuzF9mzL2WzJLDJa37auSgobRUYmbQbjc18vgNva1UqUrYGbSNCLDeKKHTfJXbTKjsP2CHX",
  "key19": "5XbRMF7X8zxiY7iPo1eGhpSBcNXsX9bZH1zKHFrfpJQ7C4TCd7VHgNLCMidvUgoLXqJ5vnS9xspydgUYhX7ogcyo",
  "key20": "2m3jgkD2b9kzuAxeDYZGQ6bcJxYLNvF6Qj8HhM2WCARSLeJZHwr6VYKz1FJXdj9otcguACuKJ3nNDPjCoXQfGXZ2",
  "key21": "2XnYAwqWMv7FpA73T4J7EPRrChGjkyo8rNdfQ8kMs7bN7usn2BXYZjE1cn99UpwvEgsdRrsG5jDqEXd1ECcR8AGM",
  "key22": "EBGeoqndgzLxP1SgoLMzZ3b1cKgx5dv2dEN3f5gpEn2BM3sNEWiDYi1jPhyGLSJt7ZWP7DHhqLCDQpbW5hwvdQB",
  "key23": "2SyS8xLM912wWfhyGxJNUhrJfnwo9kKDBxzr4xZ2GmweavpZHKoBcrP4sv28Y3JNoAkS31TFbP2TMMLsXG1ZfGHs",
  "key24": "62k31xhBPom52xKrnf7xgD2X6TKiVC8Jc26B34te9oF3Dwywua4qwcyQ7mUxWY13c4u69u8Qb7gszoxmSQi1urL7",
  "key25": "5LJZtH1NGNbE7bPHvhRVMPMbTVaccYDKSSFpJR9vEwdh4MpRjPzEoYGBLxCmZ7yJurjvTJsk1ded2DS5Z8RhxJtP",
  "key26": "7Rt8xJacpqQBYr1UYukhfpRoJUUco7EFVjS5PJ6foQsyGTHif3cxLrMReMHP92uGEqzsnrAXyvD5UovQxvrAqRR",
  "key27": "2cNQkJgR6oipo5M8FB1udEiAWqNsUe6wAzLxb6F8Q1JVD477eDrkq9NdZVWAufvxwpHgpbj8xkcBWkQr8f8NnCdF",
  "key28": "b7742tvHwJJqm6wjvRFJ7Yzq9sboKrowz6Afke7JxFeKaHA4d7gZw6WWbdZtV2VQK6Y62TemL1Pxs8Ce93rKZYb",
  "key29": "3z6ukgGRawL4HKZArkM4aKcU1mLhsmkvjMex7z8wbSfR6ZBFS5ZRaCZNDCgNAquNt1NtAtg6nG3rttLzqp2TRKx7",
  "key30": "3aPZ8W6SB1ANmD16JHwxJSSezhbCDav1KcKdboiKho9r2EbugcMHegJbPFD2UvVn2zvCASCTrX8CRCBeRGf9NE8c",
  "key31": "5tcLoEKSEtFzH1EmfMLzRdpTLdn7fzbUbS91wfGgMFkJkPsyhyU8WqjHn2uDXwgvDbcvz2RDTYbD9aYhBvokGggo",
  "key32": "ZF9nWiDHJy8YmXFN4tFoA4Qobv6QFWBsf6bkZTVEmfiGg6Jw3QNzwNv19i1qwymT6J9NnQ48jcU4m6vdP8Cgzcw",
  "key33": "p5WRb2cNzR7Neo1sXbb3KvxPqvupuhNH94U2S5ae9TTP26eGwKD1v2GSkx31giXjf5EorFEWkMmew7XEkBQ9ceZ",
  "key34": "2dkkmoE6BygBGvyQ1rMKJ7Z2e6bQiYnhmHB3K8wwfPhCrJFFGKGc4WJV8FhA29U4V4QxuuEWG14LJdRrt29oV6qk",
  "key35": "2ruY1ux5ezpj2tBrcJ87wKkbZVBmywszQLoXLGenBEcBCn11wGq2G75edBKp8zrucBmkytfyv9ZKk3RjDkJihgEH",
  "key36": "44RG1ohEUCFU6Qy22KHqGa23Vj5mHt81v6P41ZhiPNrZ4RPgvzLKd5njngKcDfwVeeFii6xRysRoDnQDtCEXm3XA",
  "key37": "4N1bwhNkAH6tcHyzYaQLyFZ3AEAvQriVVx9aeG3cy9rBg3mNCshNKdGFm1hnLhaREXkJiMTQ3swuNYmSdc22mBtg",
  "key38": "2Wupx2tNDxeybW9pwotxouERm1E2JByz4U4EXCt31GeQ44WDNvkzn4tnmo8YVT4WPchmQX1Yjzv4XEojGRtFzJea",
  "key39": "48AnGBpNz6Wq36GxBrRafx9NHYk8JcgnaVWLuUMgiNzfnNeGgriMhRDwtxZ7snjruGKYSoF4SgTZvefq1ZiZbAZQ",
  "key40": "3v6sQruFNFu7XKu4rPaURQ983xrE2aEznPdiPi8nddVRq3han4qvAHYrJM7R5a8EQbSyHmuPSSgefLpUAjYuGs78"
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
