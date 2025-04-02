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
    "4G8xg3kQxJbWEqVMPVLBQVtveszFzAjL1CP2j5fxbBU57p78gVbRKMnrKR5LFzg9fWr2iEjjTQmKejN8pkLLUeTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SrPZrWE7vtnsipJbJzPQPU363sxPLZTgKfsQRmYfRfhPG7K2N9Cm8D2AYNuPW1GcRfwfXMBNDgemz3oKXUyccR1",
  "key1": "29rWqck7coqaXqPZMF7FNnLWG43TYuaQM1KxxJeWhQFDZ6aMKWi4kNAPQyxFsznWigPcFcrA6uw92MSTNjQLMei6",
  "key2": "5Lx8xN6YGT9WyEW4LRmfyP1WbUQmpwxGFpUBgmpQSvbSuxwazathCnuvKWY39JxYLHceEFehnU6sQeQizxeaudb9",
  "key3": "eBh28Gdk1npgyDwc2FP6LnXEL9bKopK1LMQnwQWG1d2HVJaBicDbM1rrpJFiDUEr3viKuhCAiEfHzYyX15rqGsj",
  "key4": "5wmeXhftanSTKmhGFU96mD4BGrEdJpwbVqzYGS5C1b3QKVuuvyH4FosUsAD1C9P49p5rCSb44krTday3z4ceQAwy",
  "key5": "5c73FjGQAWw9dKtdA5uPjdHtgCr7qtTRQ6Vr62gNYyWeDLsFfB9vGuiYrhgPuANgbCiUeo6mVVjoqX9Sb8oCn1qX",
  "key6": "JX8tBeKav95Q3GtvnuoocZqPW6Xp8VJSU7CbR8UAvUWpM9iG17howd5tZ17oNhDVK4DTfyTaQ7nTtkefv6PhuzT",
  "key7": "2hLx6CuRUZhnRWKkSF6VE8KmLftKPLq2iPe8fDGEj1H4mRFEQJhUEwdWfTjpNpPgN1CxsM5REExxqbNYxkpFPh8D",
  "key8": "2W6Mig1RSQJeG6sSqHRHcgTUho7ieWrcj2GNSz2FbMYKmjfspGeUYxbNTmAwFn6eeCnPEAtKqKK4ca2XrMJy79gK",
  "key9": "5Z4fHQFoh98FoukhUBs3eDfobhMrLhWGFBphdjUBM8S1ABRS2smqMCEMA798dbyXVZGcaUpDkGVpwsUKK7oWzDPh",
  "key10": "2dkvjCFiKh5t4xDHabVThh5rG9WahXU6gkeLZtZnTkWJDcWL2bBbBxAKtBCmVBKZGSUGNbQoSbNvLnk7X1azUtSt",
  "key11": "3zq9gLnhKjPwAHUQ97y8i2Xp1vV97wWGcaaVVwyi7z7QQ8HyymGGVx5ZViTec8tVHTWd61sqjrLwnJanf6evRQ4v",
  "key12": "2ikAhKHcBkSTPFZyzpnyawQ7GNakCVc43Sa1FhWBDMmkpSh3iMph1RUpd1Q86zcnPgr3z2awu29qL87p9wLPBDBH",
  "key13": "4qcrEu4bAFwEtsM9GLTodRpXCVhavbYAbtvDBrLr9osXWGxAKj6MKJDSXLkwbsPkKnrmxvaQb31HFvKxjvNtiL86",
  "key14": "3nkVEWSHg6sNDApL54yQCuceAbwTfSWfENy168JYakVnk7vXz2yX633D7g6fycq3w8XhVtdKbuXX5nAQfVXjcBRC",
  "key15": "5Jc6SMjAitwkHn5LVNA3eWZDvk5iTKr1SKxjGLEwGvDRzS4hGAMk1hCo9Jk1Td7kvQke5ZoXpAhSXFhaJX2koiJF",
  "key16": "3Z7U38ZzPe66zknwcFRiTaWLk6a1EBHwJv9y8KoHSB1xJG8Sna56MgBGbpGVQptNZXfsrMaPa1aGzexxSGb4AFr3",
  "key17": "57dub7Xua8rqF2ZMMKGwuKjaLdw1PrurHrZPZi5FMGNfDHkbXvVrPnmVSsHMjB36GWo5EXcepLRjDtVawhJqj6Jp",
  "key18": "2NeVVVKH3VyN8xukGK7V4xV7F37kqVDYFRrZr6YgxRVS3Sy85FMcnEw6WyYNrAjKVFsEEeFgAJ6BNRnZmiKGZoXk",
  "key19": "3VLWrodnxWojeaTcR1nuNu3CEbFpB3VUHDezWJGzaKozMYjKQVRcJCFEPae3LnxCCi8SoA98ed3WCVG4oopsTfMp",
  "key20": "5JA7uLnjDkyrD3g312X88fbaNUxNtnN2XAZuW1w5mkBpqWV1PHAhn38hqWMTrN8CinZE5cX2fuxAqUwippT3uxWy",
  "key21": "5xozAtRh9afAnEvhsRmWSEU64FFMuptxtHrwrTcHQBLH3YHBAUARmXKzV47vq2LDEHTuJesJBCQcDKNRBLiFMank",
  "key22": "4KSMdBJVU3ZgKMocEH633ZBhpiziXWYZRyWSqWZ3G67ozsfWyz6vudwEfzgC4L3vtmzBbXQqHwggTYcEWPvGht3h",
  "key23": "3qKrxzT8x5Bg2DyreVJAmD4t1GoWhFwhEEKV7a7KFE1ZbuQwkjXzccNehhsMBJgQ34WHyLYfxJ4NU96k6cpyDtk1",
  "key24": "4eC8RXUCTa68kKvrTGtpt8SnrYy87C6Nwg6d5h5ogK11k8c6qJhHmfKUcKrrFzesUqx7JHM9nh2467JjZC5tmFWi",
  "key25": "aUqTBotSrV4D73TtjdfWQRPnduTbqFpL9kbknRSonqFjXzqZxPRFfwvDnLWw3fCRZKGewQLVpb4DY8PAFsdJ89k",
  "key26": "3BpVyy52ixukNHfDBqC3MhouLyF65mnyT1pipZq6ky726Zr5hro7AKFtc4bZ8oPpSuzSbdM2cP1mEN1fZzPsZrAy",
  "key27": "rtXbxen333f1LHRwCDXo4V1g5jnUAcqgoJYE38PqpiDtX5kvfPZU5YzgDnLFoGjfpfFgtP9i6foGT7wk9BK6YCM",
  "key28": "4Qv9JQr7ncxmc6CSBBEj67FJkfoVKoCoLEqX2Ksov9RGFGHHuQqxVxombctgDqe1VU7oR8FyEnweNLsxRQ3jfuYa",
  "key29": "4cBhzCfcMRfMqW7EEgp3CHj3a7Q1A58LgNWySPGGdVYQfLe7TXYxEH2sJCbXQUMXDBcmk5EWtwMxhrkvumQKq21D",
  "key30": "4ymiMekG5uauTc3KqHtMPchzrS8AQa3swzAevx6iGNJEVr3n7TF7Sr9BVaUgqXRMakUjyN61sxQak3WmFyPCWBEX"
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
