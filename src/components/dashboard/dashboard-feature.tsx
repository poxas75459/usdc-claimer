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
    "2cSPSCE3dG9Rghrg46HSmhDJKHGo3u1z1TABwQXWJDxPY8UNA6jtZJBZmWQkK4Mq2MjJqgZHLFY8N29BTvhAUovp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "287px7q58vMYha7bhrGCFf5qJpbuwM2TCbVnLTEgWgyjmofydbUkKJeWeuifVXre1B4vFnSdk2seKWJh7s2Curor",
  "key1": "aTddoTXjHmX8eVkyCSimja431CmH2h4MzUDwcMRRBN8nPw4YzMzU9t1iKJgtxT7xShLD1YPRH6qamerAaB8s2vc",
  "key2": "2wBP86k4kxAGYPrGxAHY6zV3SY5XNs2ik3MzHrNctaK7GQfcDzqUWxjfjmHhAt1sGNBVEUtvDXV2iYfNxaB93XPK",
  "key3": "3QjifipNqJv4KQiwt1LgM2fCCuztsgMqzWCK6mnZVsBGy8GxzDnn9W4LjHHHnwLzWspLiVUXJregmPt4DgHCCSEv",
  "key4": "4tCn5JHU2FbXXPWZZzgwYr72JSfdWYytPyUGLmMB6EZPy3kgrfjBSj68tD45AfSJkqf9qz2Gea49CETR4oiqA8TD",
  "key5": "fUg1JXR7n65PPqmY3G1bfKKmXahrVczR9ZnhficzwPLgQa1a4J26vvqvCMZsaJC8EbjKf2dD8ZSpwyzCdWsQJQF",
  "key6": "EUaZ7q8t7x2HGfkZqxJrD2m14EDLzxWSxPQ7MLRwp3GX53AqdQcoMNfJNHDFTnbwW1wVMd4prJj8XRJEBZhP4dk",
  "key7": "22bLm5Ykgq9a3drvJybqQC3o97DaN5hQoXYjWNJc7F5ffMtBkp3XNpz3rfXgHi9iSXa13oh37cB9fChXqJcTiPXw",
  "key8": "2caiQu6CfvnZVKopVyjzR9vfiStXgX7kyBZTgstbttZYgiZmoigeU5qc8LYe9JDFkCBuGw8QVWfoXe8hnF8PCNgP",
  "key9": "3YPoEQiCr54pp5WQs8rhegnpsJvQuYtGW1sBuzJbtFvnpvn4uAnihkFHeVZUcEM9LcA9WhzjE9UQqz8dSEBgqghm",
  "key10": "4yNFeuyR55X3adNz6RiVbJEHUr7rLg7cwZCpSX88uBi1Qzr6txH3bdDMbzGj6JjwwE2H4LuDDPGvwe46tkB6xNjA",
  "key11": "5XaNq2ExQmG9oUrz33Dqn9uW2cASRKzMDJpDkfhMnXrizAMSF61NobUA6AaM5Fb8C2GJZgSXgMHgmvfNGXRtkXgq",
  "key12": "5TsUFUR7TZFnzFQzwweeJri3yzvGXR8oKu8SKVMXSPjEZyWtjNrJ2F1N8kgofEmCvkP1vQBgaRpMjmnPsJ3PLiN5",
  "key13": "5S5C2CuJZjjpgPnWHCd9KEFMagFhSTVxEzsbzFkYS1dsmftJWHmsTobY5PAG1Q952CKb81c4DG6PDMhYN4uUFa8N",
  "key14": "3VGHFLPUjzq1cAAcH4YW7oY6kALEwm47SjNs3wmeFnojSJd1dYfVFw8G9eKY2ztGkjRyqteP233bRXpZLHMbU38g",
  "key15": "41eVfbjNH3fn52nt43Mzcmjib6se5ABcb42vZDGvPdYRwRCs2ERFC6mF4bKA1VPCwLAjfhA5LHNgHG4SJuKiy6Dp",
  "key16": "5TTAp2q6rpFYj33phqE7xsXLdLNJz1oR7yDANwxjgxySAp1zWQWcQ89LmBpDkiByk2SrngjSB6qE8HevBzcR9WbR",
  "key17": "4pANxWaCWBWtDSrKsVeRpzEUr5Cpto7CoCvMQsLbQJjVjW5MneBrXocLR9gsNVsm2gym1mxWEARXnz4CDpm9wtXn",
  "key18": "3rUrUYdyReeipzM25ZzxSfnF2D1LjsvF7hCs4avY5J48Kn76UyBA4gVJKhzfenssUttWzpiNm1VCjWZznsNb7pGu",
  "key19": "5VGC2xvKrht6vKuWc2wVKpFjZgw6wDnMqHA8JyxZ3bzPHcmt58XJnT7h5x3kgb5zMYL1868YgeWNecGdYp8RuZD5",
  "key20": "3eCCnK6mXpKUmGU9Ea3UDjnga3zdtfcktjDnJ7USR2nqCya9NyXVLrgTvYsH1bxzEM71YfKs5jnxhKboDRSHoSx2",
  "key21": "3xsB2mhGWL9GoHqRZWyY2ih4Ygg1FVKW1V9y9XCutcDwYuJAJY9A1AjGB36wT6wBGUuCQGVoDxNKV6TeRdfM8PKZ",
  "key22": "2oYr8yoH6Woz6naqe3onpazYRZx22B4SG9gkHZb87KRJNqRdSvoqMCBcVbJN1pEbm8Q7DgB5ziVMnJHsMUYhkVDd",
  "key23": "5FVHu87y9MTcrYAj2SivdSsdaMT4DUUGkbKs5eQKXDHCSntzsnMpB2rWAJutN79rYjqUD66T2vU5XrE52kLvTm13",
  "key24": "3uF4Y5ZjzPTQqYgRqhCqDUmYvtR84GaoFkKXmug38zzdMuDVwzgd8uHT8McoXgDgkETT57ccx8GyV4dsNXP7fq5d",
  "key25": "58gZHs9aYN6M8Pbsk6p4HFLc2QQK9i5DaX35d5UUitaMY38siZDiSgoBF67FhSQ483kcqgGMvZhEYcD4naVPhjw6",
  "key26": "g1iS2hTHopW7ks4FZEEXJhKZUDXoCCc23ozSZxQ8ZeLcf6CykkGDeq9qY2xFcGkVvnJLKXNCbGHngYhWWZ6c6vu",
  "key27": "2VNUR5GLcFez8YHevNrovAHfWG3KijmcECBeP5Hsu6Db7AeTozE4S2UMo4ATE53sY1dH2xurqh4CCyG1DarQZGxr",
  "key28": "4hMTsLupTWzEreVzxiQYXyMaJYeQtC3Pir7sXJrNEmX4f7YPRwNDUiEDWuKxyyphGSh9yvEQAnfhsEz6Wt5EKo6G",
  "key29": "62NNvjtSMNfKFb5yr9tXqxMXpDrZfMy4poC4Ann2YUpKedDpcCoYJjHT8bBtV5uZiANbveXGAUb5wfW29sUWD1Uo",
  "key30": "5eNvm9hNPowMaR8fifioWK1CA7wL4MynpbPxL8ySUbFJNeTyaoP29hrC6VMotvrvth67VT1ps9dhMWJqhawYMJGF",
  "key31": "4k7TFL7ShccSfxrvbFWq2GmpRbWjy9j6Th2xzQn6fiiM7T1ZMCTykzgBUKeXv3V4JHLJyoSbHbb8erGYUZMugSyx",
  "key32": "3kwUTBN7jca2Xv55xbFrezLXBFX17usgJADocN3uukeWhqTgrjQzVBhitNWxAtCXL6wfhVWmvPyYYAqxRb9WuMqn",
  "key33": "5yy7o8vkT8RUHbzQJcgaT6QDJxCujMkWGZpseas7ehehxfbZYhtB9nvQH2MMwWSG9x9ju6avhDRcvBKgkM7n7sLg",
  "key34": "57RQFLTsxxRpeqnGaLjaDCwNQwfWRWWpUscbtr648Xk3M7LV8E4qtUdcmnFmJZtL47d54byJaeUgvJnCMt1y9LVi",
  "key35": "mvRizqLmiLvNN4L1MRHXst3QVRBeewMBcNmUKLcmsPyD4WaLsQ5Z8QYjAZv3bsrEnRHsdNmBuUYcKVsQfV21TPb",
  "key36": "2awsqt6wDXM4nsoUbV5iMcwN19XWqauinydzFwvM51ZxUmgvBJzDUb2714s1CZqkV99myVkjAx2ysrQNARWvqzmK",
  "key37": "5U2MfhUwxNokxM5ETird9oER15hYnCbK2a8gNqkASqQvXyRThkeLsfvCsf67kK3NgULzCNhUpPS2BRkMkMwUacyW",
  "key38": "3Pa1iMtcFZi1Zn5VuRfAPhHC2w32tmvsBNa2SFwcdBMTgY3mKvJYChGphHpPCTzavZqBP3rqMipsMQfXS538WfQn",
  "key39": "2zmQUUsaUnsb5rK74BLBKggVYp91d7vb8g9sdQYgxH2LywgEQ1EfjHCrqYJBn57VHUr4HFmku9ZyiazcuWtS9jf2",
  "key40": "3p6TbJsG3AGnMxVsJJvi41H9TPntCirYmL9VeHmpZzUrZAz1QXv98HtbJn2V8qgpUp26h2KWojGWhgHfPPtByHQp"
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
