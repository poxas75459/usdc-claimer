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
    "4AGf53ee6teYeqQvRXvXD2HD3aUfinANsMwG9hEksgTB4tFPX9ZfR2VbjHbnUHZHQwXJKmq1ozRHqSkzR56HhWtq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nGdcowf2Z4go6JTV7vgKyE4N3dzV2fGyDdc6rErZiHAYfxpmAgZnDjzpGqteve2qDSj2M52Y56NMSpdBV5Du3LH",
  "key1": "2svb72NhoiymCfN69umRCCPeNVvXFH5GuGUwJiaFgQyk28KCMD9TrEzbvYHSixaXd3ojSVHJDK738yf4HjwCgr7N",
  "key2": "2tqaWqfAwa6JAX5wEPdzt7r7m3NKTYMpy3oeZFifeqVLoobtQ6xJYE7Rd4zieTfxecDRZdsSHLQ3XWoWc7owwwRb",
  "key3": "5bLV92fNuL8amgHPWuUFAmVdpd2yxTjHbp6vsezEPZxnYJsT2BKbDnaegT2jG6bz566s1epC3LfQAG573GCUhqG4",
  "key4": "zyHWT4Z3EcWpzHoUNA2mWi4rSbnUoyo4c1oEwzbDfaSoV6sK3wDgsgvoc36pSoZjVzQ5WZE9DuJDBSAujWkJNJc",
  "key5": "218E1BQbJtPxxuUM3iFV9yqUMLXz9F44B1MKHZigovDBknFoAo5y1mmWqjzZiTZWmQZybJjYsHVV6dj1Gmmz6LK6",
  "key6": "2HbS8Si8EQQ6wnmrqhhNkADcdfXvDgZv2gKbyXEPaD1757qpGr9aSJmo7Txq8FQRnWkiaT93HGbh2vkoHcY5msqe",
  "key7": "3z2akWTrGmEcstKmAc55Cs4PGcquyGMuu2UWAgxVA6PouWpBzby2DPan3KH562JzjDjXqvEfu6bMqCoGJehSvAu4",
  "key8": "5Twt2PDGFFy4gEAz3pRSNmqHaqgbPPztAxxhYv19ieCKW6eqeGkduhV3ZNqWAQ6pNMLqFnXnBpZFdvxUoSkLDKmN",
  "key9": "4bKXxNDtUFpFuw3RBnzT5EKYrb42MwmCULpUZ5tACmfuAnPzP4pAniBtr68wxKHGtMuUCz1NNA4HtotSSWdu4gZr",
  "key10": "8fCBJs6pbBwHo1sx4xQsiGeUdm7My7VfVePKyH9XCLtfbBRfc8wmwgbQoMD1uhWUETH3D7x9oTdu9LTkfpvtnXT",
  "key11": "3RkyU17DiUnsJ718hs8TCgJpBBKVqraDGpHYH9Mg4tCW8hHEaTqk2A4rMnK11fZLC88sHmcmbnesZ8dCNtSagiYj",
  "key12": "4zDJDJKTCQWyUZbT6N4H9BLkjX7tfaHjV2ytr1JiNZAdEkAZozdLmrvkuKj85ik6HTbHCTbgt6RzkQa7WkwcbLWJ",
  "key13": "4usBQuTXyc9FoU2ggJdMHDLTRaPopwScjmuqenJocnmeKdVHebFSrGuCNKsoLYt4eehw9qihQTd6Vv67J9DcRq4",
  "key14": "5UR1aBB2FE7hEFxwULQNrsPgT5uM7BgcePndLy5kTFK7sXgBGmpyh3f9Mj6g1PdyqNLFcqbdGrR5mLj8bLoHefTP",
  "key15": "5mv5LK31QPWCvNtNZzPSQPFn2Ub94VVKRwsobV2paweSLUdDyLbULKS66C1maSRbfEtTwX6DShx5KiK6VhZuQhx5",
  "key16": "2uAtM2HkKP1nhAd6ba868Etahj1d5UYK86UjpdRyheoMibd2YNxthuz8DxJJg3UFbPZ94G5DrxiFqd6128oPQU2o",
  "key17": "5gm5X6hcvSgDGjcGxkq8oP7bRe3urbdm5sEjCjejF8FFz74czbkee4mCtrNVgjRbzWbv1NmzLqH3DUsEQbVTjZQM",
  "key18": "4iy8UgPXMWihY2oMqojwnySvN8Y1usVVGiiajbQWQBg82ujF4FEVJVVjGyJUcFX1d4URowkro7SPPG8Ww83BBTFh",
  "key19": "3ofTVFBSudjg2SuzUvhK794fuThJLZrjL2MVt5bSo2QKjXLWQUG3oT43LRscPCEj9VPxvdo8jbZVM1Fa2mW9uQoE",
  "key20": "21DdJzcBhTsG8ngfaNQKEZ71kWTE1QumHJDVncH2cqvMZpYbGTm7NkFhHoE3MBj2k1KaaeJxYEPBfehJ7zyy7XXq",
  "key21": "3yCBmpvqb7Ar8AfXrsmePXjjMFLYgfEo5RXiMcHpLoYwriacLtK5in3viHr1Tet4AXL3BAqPAt77QssZtzwW5Jto",
  "key22": "4v5Q3Pv7recTnuyr72SuCqNQLdFavhVxQ1V1mS2z8KPPyHxAav2R6Bgs21Ly8vvJ4FN1sy3AdqaL6ibH3qSqDx8y",
  "key23": "5Vm8XYW5ZGfSnB159EX7BgLpdcXbrTQY57fnhmJ8owB9Qf72z7Jo13zDkYMcnHpiAx98gs8T2z6SYuTocf4iTbNK",
  "key24": "4oAQcbeVdcYBzio5ktJCPXRdzKRtoughUpDkWRevb7Rw3SBNDZm97GrNavnxPvwKcnewEEutFBAC7qDJNn9eLWim",
  "key25": "fP1jHwsgAuzvhBhScMTidwyZNPPJLxwEPoBNPupoWxjeLKJU7cChixy6EriL8eXRtrZga4jmpPJYFgpMMfX4cE7",
  "key26": "3ELTft3M1ShdSksXsd5Uagmg4miJAodtJM1NbMRgdi1YUQ19fQTVoRL2HLruTCxU7s9tmnMbvRTwsi2Hj4YGVyCA",
  "key27": "2TbUA33YE5qSXzCeDL4wKKw8C1rqYcS9XvcJc3B5GY8Jznf5T1SmhFP4dFFF11xBQWUwUTDiVWa3tPjWgPSWB2T1",
  "key28": "ZozCtS9R8xxkv49ci6Yv3shmRFsyv9taoHKsWtXGatEfS6GnHpae2UHxkqUWcwyZc1gYB1B61gCmnJwQwuAYFBG",
  "key29": "4FnGQ8iRHKgqeqCYgUhqjojYBkiJmYxJfWCSNPin8pp1Qfn6U4neBDFvDwVrKVWtb6cwhUizjzYe42eUgZn8qgFG",
  "key30": "5vXA1c4D374a6d4tdG1AZyeF6SmHPjq7uxBhTqN5o4tiEiBoTRSPxCPkrAoV7fsaPTmCbsghnjkN8D6nKcruozSp",
  "key31": "5WQkfj5Qftsvyix8ZQXNT4AuD1vivaD3ShxwWFgoi89LH1CQwiddX68tyvBoxTT5Vb9QvaHy7sWkytMnizHV9bE7",
  "key32": "4817zJDqSuzstKTNALEgNrqYmeWyNDyLTN8zKJH5S8GU5TPQCCCUv28J9pjoU8cDtGKhAXMEoBNEaPjvmUtzfhLB",
  "key33": "2JTX5L3w6ytzBB33XJTm2JwyUx19tGr8DuzmNZfeeGb8ftrw7h7HKmsfEs1a6EF25tz9HaqCCbe6QyxJQN16e4SP"
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
