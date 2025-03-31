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
    "5iJVA5pEkFmJSEUUeFA7UgvaqEccaqjc9FtDzvey3xA9mrYdTmXs4F7xgL7UXA2hT4EDE2G1SaQuXnTUTNJ3xoy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UhmsdnbuXL35rsE2XJoK8Qgaeagk7WtPBVXUzUmyN97RyJbR1bLY9o3UahYUQqzhoR1Q41GNCJGHpcUkouBEG3X",
  "key1": "3ZsooLvrcXjGRDsGAEcT7Nbn3GgPjzzQtQB7oXQWVFBKFKQmaCYfPyqFXmkJ6iJfUqYpLP8U1GZcqhhdchAPQVC3",
  "key2": "3hyyu15w7Rd2p8RY9SXogzwzCn2ud6YuC2KkdchtZpT3351zBsHrsAjANenD6ni8WJSh4zkvU6pLgea5mCrgKtZ7",
  "key3": "2yYS45sBFifAtVqTLqPaLZ2qCNhtjBjXN3nMfPUbKsvqpofjRff4zGiRgqWGbZx5GJeUG5d8xYzuh93rFeobjHSe",
  "key4": "4Qj3Ac7wCQ4fTeX4hmVmpTxY7JtVBR6F1iHrz69UxidEvRxUF5LaeozbX4dssv9Pzag6Q7RmSLgwo2rqdmE8f6sZ",
  "key5": "52DYJbaHXVMyDkWheZTGfmB2oupAnm37Qky3MBqHhpUGyHUBYgg23DCiNcVqH9UYKC4DtuUKN7VQ4zsU1LuWHpta",
  "key6": "3qbLSpm4JC117Z2WV4XgkeXcFqQBLYsNQn7mDVBrjbsh8QAx7D8BM6Kfe4d4CCHEZDyrNeoSSo1TNekDKXqKCNys",
  "key7": "ptEFXg3ra2reHuX5oRiMwr37TdbuEn2mMGGBM4vE8FfwqZizUiVKJTsWKXeW1gGNhKaywm9NtAN2L4yLMqj1n7W",
  "key8": "33pbzLqJtDfwuFjad8uB4y5bUqdMUHaB6YcxJYPzioN68fwxghP1pCaTCLC5FEzmoPasW4aUCRDEtZTmFA8YN67N",
  "key9": "52rnyaMgVCk7xcfXDLi8E2uGuG75aF9qj83f4ZoG7xufdbYmDMen45jSjMRtNEfkXkMVmTLPKo4FHxrALEui6gEF",
  "key10": "3ZQf3QsW8WL66AEWs44neGow7cBSYs5hgootS9WCGCxFU15X4cRs1HQYkaHR6HfwLarg6gYeAqrmS9pgu8rTJkuP",
  "key11": "co8kRQ5pYi81QeSCRxbS7Nkrz4LAZuwyC2YehQYPRQVkmdeKmctvujuWW1Pyf8J32kNkY7r5rDHZzTUGftKTTyN",
  "key12": "BacoXKJJ3DuhSAkA9xSby8T8VeAMQWAP4iP5XLCupm21MA7qHoMHdP1isVidyUNLKsLjLcysrhkENy6gwafSCBK",
  "key13": "TTSJS7YP1d6hfQvdFQQ9QXPdAc15QuU8wXt5368EwegCHs5pReeAfdqxTaWS5s92rKYmGYH1vdFQny8JLCziuHU",
  "key14": "5Wx7NLJWYJtQ2YG3qzyi1GYmGLnswr2kj9H9MhhyRv3Te1ajZoa3VYuUoXPQP4KafbLHknRosr8ehKxVVGJRA1S3",
  "key15": "4Qhx3MyYukT69nQi2EzL8EACSefSWUnFFLQX1jMoQQJCWqS3wwecPUGry5WjYKARQ3GgB8TQXFXKU6D6uBZa8S2W",
  "key16": "3zEb3KDtKZX5MJ8HZzgNkyrRYBszfJgtPft3gCXqAPr3mqTk6FRmGG51hcoLTCXweXKgqabeN18KkVMb6a8VsHUp",
  "key17": "5VtZLgpKxWSTbbWZvEdhFn2f1UUHY8WnEiCf8nCnxMZxS6qEix5zhVyRPAshXCgvjBxFKCmifqFgBzqXtinNSrNJ",
  "key18": "TN2HKte72cSP52pb2D65C3rUnMZWB4ExL4cut9MwMTZ1U6zjENsF3SeAQvTkQUoQ2dYGfLZxbcxV5V1j5AKZ53n",
  "key19": "DYSQNtK7MF44eK7rX8GkE6gkb8mqTD2cwnQZ82zj79W2FBBhLF6EfiH9cXKa3rfvDLefqPZ7gXuMfbX8AM2tjCM",
  "key20": "58rXz2LzjnR32kRteNiVfdC9TeddarBSuch5UqNLYSbA87oDk8xsHw65N8F9UezY86dTdrX5Eapb38z7usXpXsA6",
  "key21": "5syycj17YTG9rdFpWMBMNLZeRqWYMthgZHEsffsuG74PX78oyWuiaMDes1U9suteEdQPEjavg5YGPLjf4DvSGm7z",
  "key22": "3CeCFKHmR9f7gPYgiQLmweQVq8qhAsjBXTNpvXHhZxPtG5BVf2omKKgTizUDzQnhjiKkQu6GsqKGM1ofU4CELamY",
  "key23": "4nqgHdd15KSXtXE3K35KjCdFbVgwtWHTPL1xQ8rahyy71m6Rb4wSNvKSwSayb7qwS5WWvh4BkBtn4Y6yi2XLZ7TN",
  "key24": "gvRPEsVJnPLSFYLq11Hkf9upp4GqwsjTygmF2WNdH5RbKGpXpyWkknTZvkTCA8izmo9Fu94ZFbjww1VcU1kpn2v",
  "key25": "U3C9pYxJxFxHrh7nRAbhs1ZN3MEnhEXPvNDr1eHEh7aw2cpswud47oVKDTEnn1c2xVURDBVeu8UAonah322nFNM",
  "key26": "2Q43dc5CNzofiAvdmpW9Hna3yNeSn8oV1sv3sSLLe9Moc3gF9X2GCGZGsuZskknXsBSjqtrac8PTGqopH2McAQCh",
  "key27": "4m9AMC2nRbBDrCgALfNxUYbjFdUdaZTV69SwPEyUJYGi7TBRVkhLM6A67itjmgRWE5t47QMqjcjw8wHQwu8BzNxh",
  "key28": "3GQZGMm9t9hNejxYuma7jLV3NYBJPBuaHU7rvWreXoKc1uwPPyZeLsTjCH1g7x4HoQFvQuVrSRGat2gvbba4p4bE",
  "key29": "5Sgg4ohwhDAoUu5sQYftjt5nnwc35k9ccVyozrupsd1jazdyTNesjBnAUUaDyXNRs5YaMy6JK8tyiznDsRCKMTMG",
  "key30": "2GovNJrjxW1CtTeYfMtmZMWBwjejnzuoiXoDuPaZph2jqDnAmTRGZpZoF6uvyLdXXWp2EQRZz1ZSggLFMWhFxHXY",
  "key31": "3hvAHr6g8J4KCC2LFLUW2mX1W5NN8wf7vaWAwm4gVyM3GHJxGApK1Z5nevbHvKPPd211AqngoDcHxFwd3ift8isz",
  "key32": "3r7yG9opCss1T5Svvs7YkgxhYtkfKba9z3q5sWvtCyoKRsb4cKCpzEZuWJHXKXPW39TKingDrnbAbqCaq7wARZpB",
  "key33": "37StWSdsiHLFNhFKrRdPCV4wNzgTA6YRRdWu8Hssr6eJRgdK238BgkswKEdSYCNdkpXLqM9RQTogStun2dsZUqsn",
  "key34": "625Ut7rtZ4BxRQtdJTNas63XQnj1Df9ioVtcru6QgVnCxhdkjQN7VLK8J7CcxAJGxqvMnMzo1eT2HUpQWtj2nAQs"
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
