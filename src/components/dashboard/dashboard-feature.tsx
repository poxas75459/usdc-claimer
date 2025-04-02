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
    "5XiBBisLuZwjpzA18Gts6yt5FmpPYRntWxPWi72znqnByPz4xKRYiTDfot8Tb51gNwsDmJneuAZWEnqUA8yDaZXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "evkbTPDnxB3FzEcCuhjunMxBqP1SeAN9u5CxdPUpANmZMRb4SPnwqoWaoCG8KCbMoFNfi1yYM5Ni9RXfqjuhEJR",
  "key1": "37AkBaA8d6W7iCvJW6oFMo8NEakEtX1VnRYE8RQWTUNSYjTZoXhoxM1XRmSqCw2y8DdhgpNnmiGHNnSqwiTrA4bL",
  "key2": "2SVBhxTToXdnoHjLyoWmpwrmHbNcS6WNAue69Xe5ffpsjfGmbRvwbHsEEZnnDaAQZTgf8zNHJdY9R1Q92rqG1waU",
  "key3": "5CNh4NvYtGvNYz6smEuaTuFvDpYjZ9WjK27EfmUcnzBS2ghcuro9G8YLexmWP73fx8W7tjQHLgJAt9o9Ey9XRrad",
  "key4": "3sF6yzjJyEGQZcqWw3jEC4cnB2cazhrqr4UiA3AEzkLHDmCLbVUP31X18wUgCQShnhYfUYxcsfD26cTze1Pk7tQL",
  "key5": "5wR32xSC94LuJMVJivtoW4LjZdCXZBTsxqT2DATvrw1xDLbh9UndVVRKL7bmFCPEtA6KxWYRtZjs37oT3h21BKiV",
  "key6": "CjV1CHJojHVdU28i4QvNF6maYYi1TBXJqDFrQGiLQQnjf1N5pH3CbG5TxGxETD11SbRdo4v6YgPas78iyqYSnmp",
  "key7": "3s9mFZLAarCRDG9ir81BtQFy3nDYsLEeqV4eNmUM9AYSrc24k8VZMddiHeHLm7Lk5FcfnzPXUdocg8XCF4ESozwx",
  "key8": "5hSvwrs6ZXXuV4uePzaGuADhgVdWttPBmNau9nS85PWnZ1RfMgotTzEYEW2x6ahs7uEhwosE7eRkbcjQ25FQDyq8",
  "key9": "5YMz4inQarKqPGAh9SMWGFkAGqdNmvCJ91sJz9KVPRrj7i5dEnZEoUqQRoRyJ6qf1dTh436Fsrd8QgBzWVJv4wJh",
  "key10": "4YjkyDRCTvhWru11F8kftxjsjtvar6xjyDtPmNoYceyzzXBY7s51qSQRteaChThreM3DoHde7D62ic89Xswzxvhx",
  "key11": "3N29Lpfj2PSMncaTpoh6sktoPSAeNUvZrGbheKSrKimNM1wjSp24Unr54cokVft38oBqLUcuLiACHagsQhRFcxjE",
  "key12": "42qcZ3duL8UDBptueLDGB1AcXdXVJzSavF2JZQDSM4JvwuKi4HG66aM3AB3Y1FfA1K1MtHyk8a3xHT9saKV71rzJ",
  "key13": "4FDhto8QjkQRKeqgmRDsrqj5AzrM73UH58n27mJ1CgxzjZwBZpXGNfaJEMLqU8FcRcHj7i48VJqtegMCSDZLHTZc",
  "key14": "3Tca559ZoZ44EsxVjL68EUpRW9VXnKs9nb2j7jbVy3Zo8ALknp6ha9sK5dTvU32DYgeCZDoC7iWZ1yRunMseMwzw",
  "key15": "3egtuGunJPfuvNBTiqHEdxBWJiKQ25APhossTDoo4ibBVHmTsbXJPhySQ6SfFjjXBRoqFsMZ8F86vj8Uw4X8H3cw",
  "key16": "3X44EhzdsUrMXxz5pdwmtbTCDTT73KS9ANjdhi4BWR9Sr3hHimvnB8rCiE3qnk9aCMZh2F17x6F9ihtRN7xe2cmC",
  "key17": "23YaLBgua8ADm2uhZuSQFavmUe4sZfYQvovPcMP16xDcDLEwWCpDUYdwcV5mCdvjwmK1xM1SdabxHsx71RYnED6g",
  "key18": "5VYzo92zAYQ1vzuHSgsDqSFtzoCpuGr2LjTibZ2vYt2Znoy1emKeKYMoR6nnDrn9Mwbpwz525J7QB5xjtjUuSjFV",
  "key19": "2R7zyrVX2bFUcV27SssCM363FBxE89AF7qDXRQyy2UvcEwuKXn546arEtwDPjYFfnmq2v5Jzz4fh2c3JJbrbvm9S",
  "key20": "2QsUhhNv1B93yy5T3NsXCqJvkZimWMzwVHuGUiav14SMSstRsuzk8GecxV4NasSRrVCekdp1RQDjX35vs9d7B1VT",
  "key21": "3LBy6mgscpm11jEpNv6pU3arhKamMq6moAUM5BtdpNVTZmdxVjsbgGskwgTja1UDfXvuCJ59gUqNbNzRvs5cAcp8",
  "key22": "4EEuA2aZZzhyK23w9FKpt2TfDeXwWhTiBAQ2N3pbn4VU4iVnrbPGwZbWQbgEhyAr2yFxMEzo6yVfkhH8soxYAdXp",
  "key23": "3gpvNfS2b3Cjk7quL8kHtukZc4kydUrqgQxqfWyi7b8fEys7zv4NyXDcJZ7e6S6JWwnnK7DQ15PpbFzoCbuHc1NF",
  "key24": "app1dJn4nQogWKTV5pNAvM4w7F1MC5vnXAbjbWYGfmQbqfn6ykRTwapnj9xYzgwRVh8q1vNW9zLJxgaZKGRZYoj",
  "key25": "293QQ49oUfXaVAf8vPQsQHw3YDdMmZFe7PRMEwW2gSD13CMH2e7hCaEkksm4Vdvs7GRcX7YZjC77caR3GTKpuk8x",
  "key26": "2dihXeUuvzijdxH6A9KSSRR9kKw9MnrPGmN9nm1YrB8Ts54hyAmH2obDtEfEgHXBdoZxTRhvn7PkYpVMvgJCxBfr"
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
