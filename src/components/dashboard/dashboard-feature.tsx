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
    "5JJFuP5cKi89WAWe9KXS9ZTRYHCJnWZQ2AfMQYbrWp4kbUKeiFSTszuAWG2mua5QNL592wV3NYm2XfxqR1oUchxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3shRPtM2zZCB4vUiTJEQm6SeSarGWLEcZya89AtSEeTjqQRbfdVGZNmRm4Su5nLsXeHuoD2STbVB3Z7tg5FaxKty",
  "key1": "zdfdm3aqFnX7oGEwHyxXr3aNZj3gzxmqxKoSzjfZq13CBGYJ6hr4izMLH3qZzc36M3T9hisJnHvK7azCCtPMi6K",
  "key2": "3THNZDXCXuheXiL9mWpJzrCrKqAGZ4XBhFHEXesB6nAnhgnteKqfFR2mrKBgcmSPkRcWVZtjNB729TfF8pcCaSEx",
  "key3": "46hCCQWoAGfH2wVP7gspQb2nj1QEtRnFU6AoPxA13pTu3fQ4y9tPyCh4SCV26Hiq7XWgFBWzMV4pSqEKJ9JDQ4Hb",
  "key4": "4d8pT6V5CgG9sJE1ev9Mr4zQoktF6GQQsvkBnHJG5f7icuvmH9JZ9eL71FNXvo9GqcPWdsKYhjwQ2vaMK3m6Pv2j",
  "key5": "VLCnYV2Ezz5a3retDbzYRjxeDg9PBpSN8XpL2CBk1Kz8HcPyGhhDu39NNDFLW7e2eBczfUFbLy8bptbrR6mGjgo",
  "key6": "3pT1t2Ku6E35Jx16bBwLSMvVBuAfJqExA3QzjDr16GdZwjDcoD2ESLVW8wsLE75CB9P6Wpia75y37j1iwiMyqCq4",
  "key7": "A7wJEmejee1AnuL68opLviwdGVdqPCXfDvLFit9ydszWA4H26hDuNVEoAj2eRgLZcr9sJEMcgv6WdCLg9vs3gLw",
  "key8": "4jVaoQMxKYf2ii2hL77WYsNB5aFQGbY8R2h9PgEjA1zHqYsrbGZPxck9XjCcTxLKNM7WEMj6H1vVhGeAS7Wpx9Bu",
  "key9": "a7P8rZF6LxRjB51kT5mRsp1foGvm43JuoQmCYZi78PfZBnKaqqNdimXsFH3cvUrjmJbFmy2FU84fAxy6kDW33XH",
  "key10": "5YzScW6jFwuZB4bC9tTS8m91vGP6A43h8iFeQbFPs3rLZdUY6T3nbkz7vENsdAtQuxAr2nTgqNya9wLWgfDBwAvj",
  "key11": "3tKi8xCeFSLdG4ijRHSQs4eCs3p584g9q8rtmMFyzx5pfsGVkUK5DhdBe5DWSaZ3bJVbsATomEUoj8KX94ZfyfvT",
  "key12": "5GPocTH88r5vU6u9pGUUAJZbZMCFyKYhRRqugFehQemVgtdQZ5TYXWAzaZhSiioD2ZEX8LpE3SYVBonntN1bQfwH",
  "key13": "3YApArbcgho6gAFAyffF5TbyccMdT5YDETPP1PWFDKZpXnXMGyYWc98HbPP5Ekbft4LPiiVHSVDncqdY24458MS5",
  "key14": "2sxrwfdSriUFXZnqKosVrsvx7e8w4EppKLnYLsAKngrFJco1N4QjA3zEdgsWxt2NPzCFgKu6NEU2JpMKCuQj1mWr",
  "key15": "4KNgBBwvR21VdDX5D9abQU7ce9LymQtATm8S2aKC7DJ8mSAAiRs5DsrgJ3kvCcw1Z8CSnRxZ8jdPC73AcnHhBBwF",
  "key16": "4njfgCoGeXHDYdY85fVjRRhn9gBkHXLuKzaUQoSwuCPkK6qho1FCuUtbyuPuWMHpWtVhHmBdqHjvXcvsVicDjeYT",
  "key17": "4hJi8kCgQ877UrTdvT1o6wLjGKp9HN9CQiXLue5xL19Tdde1DnotvURfK1PCMvdNhVCx26d94cJHZmsPreixiiRx",
  "key18": "3Skcw4tkivppU9a3sBjN8eVTsWFpgrXHhYAKPeJnbuLnhTMa1c2eCq6KEPfzshAykf45zJbf6naYmzLSeUDks9Uv",
  "key19": "3YpqnJ7pscKcHZsh1dLocs1miSJPsBLC4yK94cKGL2G3SmddjMdDyVLMXCaG2PjeDdpioUr1GAWPxGq5wU1zGYZd",
  "key20": "214YpQYQycRWYDS4x6mhsqj9ubrKkKLJfez6yUQfXA3CF2Crz9zmB5MnKUHKYgUH9EnZ1kiBkjVUK95A718Fkktg",
  "key21": "5nwP7eSPgJaZA4WAeoXnTA2pE3HwA7etr8ZQCExvwARjjyYV65QE8BwqgUpLvSQbt8FtLoBZkyfjrkwWkMUNiYgy",
  "key22": "4U2PFwGmu9kMoEFzURRqJHMrkHwSSJoaDgZshwQWiiit83aCjcXYMbMqWiZXHphcqKjGJk1PMyAJsHrAMBuq8jm7",
  "key23": "4KbX7cUvTYTyyiPDML2mRwH8QguyhJ6ETALGuotQL3Jg3SHqqtQN2MdKqvHCb8xwckYMYVU3NoSz8C5XcWPf5uGM",
  "key24": "2v43ih5UXbgkRz9nyYoJHt2xqYwGrE4xkNKb4TEQZ5gv85Mi9tTm9aHVMS9BST3TcTXWooQLbxgxiZiZVEfg1mif",
  "key25": "XDtj8cmSu2irARpLoWWMwtepn2W9WfdGn7HNbuMjTPNzPQTQyKu8RcidV7Sy4WGQCwFaaB3v4KngvnstG63KYVU",
  "key26": "4mZ9eGmVCtGwLFNaZobyHfakVaZFfQsW8bdqdyVkKGYH6A6TspaSXCRVRg9MY6TvxmxS9uMwSLTZKW8nbMsDVVar"
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
