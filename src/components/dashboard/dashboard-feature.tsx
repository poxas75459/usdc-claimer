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
    "5jdwtmGxsvQYrsKt6pciq3P5jLvWSrLZwXX6F7osEUftUnvrtqxNVa1uqj55Xq3dDthswwxzM8FAGPTPq73zdNXL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b5EmHy6Nqk5b7UfZaT79WvdG9aGNp9QG1EAFsjaedYbjDpMt6rEFibHqHBeLz4QZYJtxj8ziyDUmvE5wsn5rsBw",
  "key1": "5pBngjoeyygxUu4PyMvdrtfQfSbJ4NLUm8npKkurZnvTwFXTaugpzKxwNThYyfSm9DEdeBvc5MXEUwCe8V5a8PvC",
  "key2": "2sKNRi4Z6eM4M8pcLftPspct6kbJWmP27qCmrqZbNHtZjGdYx32Cz321p3Vr2DEqF3tCP76wmS9bV5AXsdTFEw8g",
  "key3": "5F6VaZKnVbnPX6jtnjcfyd51kQd2nGJJNfN4AeKFCuxpC5z2juNpqnzVcU1Y3tUC9p8EfAK648xWM73NfCk4q39N",
  "key4": "3M67L17J2QjZ5kH1Y9LugVnAoxxXzHECq3D1MrvjgP1RN18vfuNApwtFqpNqbauP2y46v3wHcb8i589jbmmHgyxo",
  "key5": "2VtRzNwV36HVZsrTLvUrxvqNr1h1zXmsQjoW6xpEgmREofmjCaREYUdZ5TZ3knCq7qfJfjLmnNbhPycZKbcyn4ju",
  "key6": "5pP4UEuzSxv2iNvpBoMqFMuMtXHnmGUfASkDLj29eKDuu3JbF3gdJ1jmafswnmCebEYjPoAfZgEB2xMZMkf3TwYV",
  "key7": "5TrtyZ1gXusb9k3VuoNFJp5fpHVk4E2DycoRoEzytWYuFXeoXiFPoF1u5pEjMMv91ng4WThmRVmiRxThy4kc8znA",
  "key8": "465P4aPgW5TCKSJM7KHHAHdAyLZqERoRrQpEoS9sxnWny7u9sMKByKtXNHafvh4EJa8VKXjdCQL6iEgjQ8Hfq31b",
  "key9": "U7HkSy73U7R8gSjN7xDD5QmiEFXvG347bS6W1NsVBwa5MxLsnwCeB8Zvkuxhcwu6AhFcxS2Pj22xbQepXokzDX4",
  "key10": "43TSLHtjmXqa3B4k4gUZwDPPaHS1y21H9DmUuzrQ5NpkxSFxKCvFno9NEXMaAWXHc2fYcB8CAWbQBtTV9u3SJHia",
  "key11": "5Fo2VwipLxQw9sPRKBV6jS99ABJaUyaSPfaWHpKih8HxBWSgkYhC6AF55Vefs1GiGePCuexFjSToaJRz6Zi9qPPR",
  "key12": "4vE7fLP8Wa1dPFcVjwrKYSdffa18prk9KaAUG3bkmAfNMmGAAUMXwTJEhDsE36rjYRnUdp49gjsdzKm4PqjT2wVK",
  "key13": "3wio8jqoz8ipLoAxckcvXQKa1ce1gcYugSNTcmwVfREoqG8z9Rz5xtCvz7yu1hjCvuiANUzF8bXqNCYzFFn5MQ37",
  "key14": "yJiw1qF1Ux8rTGubJdBT1EWm8wjbRhFCugzc6ghNwyzxK8ZgzeLxwkcR9S4JrG7WJ4GH1rp1qFNHZBsUnYgaWPT",
  "key15": "UH92fmXBt2wx4X9bM2qL7qgrx7Dtd7NvLvdWgNo5qf96AdJqxRoYbnGP3uPMGVLw2qUUhygpPMLMPq9p2MRRH3c",
  "key16": "5bteQq4xqMTTHsfdUoJKU31CAqm29TNHULUoNxfYPdDW33E63YmXMFBp9v5RqSdkbCXUbeJNKxfGSSNtChh7aKbw",
  "key17": "6hkf19V9YyAYBKQdFPgGB7Xy6Nj7mFf5vnjKD9ZBrcajcBgFCX8coLiz2mrg2vvw9PPdgbBUsy6rb968ATBzza1",
  "key18": "PaLiNRjaAxaLoDXuva8YUpvMoXyMv4owNKTSGgSVuNTzgs9C8VkYD6KGhYHqJCtJ4sCRSvhAK2gEdkmVDYJMU4p",
  "key19": "5V2spu4pRtA32vSjVwt61UZGRUccGLnJHSNbFN8Q8oE3t3xrAx4kdBePcpHNgRRc2F69EB2n7RMar1VLUbz1taYX",
  "key20": "4RnTd4CMq2zaLRzDoZYuKfcUUSpSRcsbaVjBjknbRD3fjPHd61LiiSqBFDm5Wkz6kxjrqDzUKBw1vWjkR3wcgrjf",
  "key21": "5nQyPSvfVYhVPiDbihTRvY5fTE5w1FFVKSW5KnZbWCJH2Y7K4tjLB8eySEs5mmWWdNSFDfEZXeMiBJNyYfBmo7Ex",
  "key22": "54EBYTXCTTZz7THH1DtTBzJbJrf7Mrq1HbEW4XA3Yy9xgFjSJ6qNXLdjfSB7XTGUvwCv3z4EXQf12KKi98DNVv2K",
  "key23": "QFsZ9P5RQwRW3orCsn2cdYQmUzZ4BLeQqK5ZQYqAm5ScXQroSxZcfKpGMCuCAX2r8esUbzJjKoRyG4QEUVfAW2o",
  "key24": "3EzqHSF37K1V6rCFgZaknohKVukPX37dnwxfoBHHZUw4s6revdZu4Fo7iSNwNdQWD1BLXa25CQmR3TNDZCNo4F8S"
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
