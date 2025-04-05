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
    "3isgcvgTgiWCf6XeBfRhSKy4S8rmmmPuf2wSt3kf3hQVvzHGsStcvXJiYpdEWeBMp5fCnvxcHXVBq9BGkwDnk5Su"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZZ43ySttznHVFHyc92FeVPUPzrUztUfXdetYfCqFZdnyzzKWrPBBQ7gkUGUYCenLUPREp641oUhotSQB9m3qEXL",
  "key1": "7LDj4VkPNi5RJfvMs2AfpPziBWEST33sJey1fqcpwomALoGS1MpDDwH8XWfZoKrCadCgCMn2FgBKqPW85wQvz8F",
  "key2": "3pnd9bHeQ2NDLeuS5xJLQFC3oi1S7gymHgDddXyynepdKEhQyZuNaCpSCcrpRPc2MWmcmtcbeRDAxPU2SgWWM3V4",
  "key3": "29p5oQgUFwBSq7rYgDC9YmQLCrT9Vbr6R16ZUaBqrbrEVFS4BxchvBxmy8SSRZj2iuCieJmhBFKcvE1NfzxcEXpg",
  "key4": "8anMXJXGTuHHbbDcKhmjveAadcazDNBSUBjuUMjaoaRiTLGoHnvsoPQ2e7UMVtQbiEu6gxLLbhuMdwHYukkFpKR",
  "key5": "4jYq8PvSa9YN6ycgXVicpb4Qae9CNRFR91dmUBwR1BGegffiDBJs8PRnftEYB1kuFx44dNhzi2Q2aRud1UcnsqfF",
  "key6": "3VXjDphY5k4qdCHuyssdncP3HGSySDrf1S6kXASaXC4PqTSm5k317r3NtjZaUHtKFtKVeRpeEPZfxpmtkxqxTtTU",
  "key7": "4i1ugaZ14mEw9oYpTGvZjqd8pBDLsYdTxjktdLZJwwM4BJ3nkh67EGW2HMtR9V4QSrWEeiQufBnyCwpKCQP6JSvH",
  "key8": "ku8gqHkgdMNxyQ1SBeSChRrvutXTndV5dnh4rRfPwGhEWN6rNSfhPqc4aeAMPVZ7JfshqhtqJ3WieMXSjq1Smu8",
  "key9": "2zCowdHA9ENdZ8uMG5yNDA1Ehrc5Cjr6ZUvbAsSW1UfUhDjW6mvGgvUZRaoS5wd3cw6MvJ4LiRRAak9hDcBu7RRT",
  "key10": "3xVYVDhoURRQW7DN8sc4GT9iKhRvV7FUqHmwBGrB42HzqUggDHb1AHks5thhgDSpFqJXaRFt7py4SMeeCU4ozt2u",
  "key11": "5jC8tWoMs7n2tdnksELsuX6TSbHgnyBevWTqxHoxzRPRVib4t66ALyotfqHnAenuX9vLzDfem3nGEYLCPZdLu5fx",
  "key12": "5jr3bcL6TqzW3uRavqtyqqKHJviPvTDU3nPVBDyzARu2MtxZGAdVPA6WGBjfLWHrUmMUo17fu5gARYZFEgAKY8Tp",
  "key13": "2wzhjUqHnNYeboTNZSWpSEuCv5ccYraQqFLp81JSqDTqAEHBxy5M8Xh5PodhgbL5zRLvmcbS21K6XruUYZfh7Jsm",
  "key14": "4ssNhs26hXSML5h2toQXB3KCsb22NzzVAZ3hiaFxY923XGFvamcsucxagnvDVHWuPvXy7kbiqNAU5MHT5EyAWsQx",
  "key15": "5FbpMvZM5ACAMuyqDMvfjqHfQaebkj9EgcddExsuDdFksnSRcTXo4R6KxXQgf76sPVyrvbMYYHaS6yDP2duvyqCw",
  "key16": "2qqKU37yPYRSo77bXqv9mG2iyqqGVek9asMP4prgwPooDhjZLasudJYmrdAdv5tgiBfdYWXC7EkjgdAzYcB8nrYF",
  "key17": "5urHd8QVDz87SGxZUyB2HYxyBVmqCYx4sJ9EndkRnTBDJWLbqzqytm7KPrEqr7tf8jDZqHYH8GyGui7hJVC9HAFr",
  "key18": "3fZMy6WzoUGAHfmUJSaLUbCqYYB33AeoSAj7Y6cMq52EpmNqa8guS76ATYiWpsp2ohUSPUBA3h7qYaKNrhQ2e6NR",
  "key19": "3ksMi8PY9mnKcDtFB4YT4XjesNyisDtMVSF3Gkk2ujjfxYNSu4M73GykX9jUaCnmNrVMU16XQ5p1THSZP6h376Vi",
  "key20": "cW4ygjwTx2iMSNkBBj1U5qmicGvkGapWXNG4GsBufZjEsvpt53Lguv3Hw8hSjz4E9B5gcG2v5QhmpSaEjtzdbRC",
  "key21": "2EkNFYZ5MQsfNqzgyN7PhNGo2T7djiZadicSear2q1JnEWw1omnJPAMivPnRPBtsH19XK3b4t1dRLZejJAZPm99D",
  "key22": "5PLukhkQx52tKfQJ6oDuxgJcmAoCZjMxCqm2va8mZAVoPHjivcTZ7ktHKNPHizW1McMJKn9BdQ77L1oJpjcSdnBE",
  "key23": "3cCGAd3ZqiptbHK37zV5GXtTib2qtywq9eiVn3Yi7KrS8rFBy8fVzNFbPBwyVRUdLVxiS3ugcDfdbpMGgz7cN9XE",
  "key24": "36FtiianyATZuNYxcsKy4PTWcXmd6QESSV4PYa5Ua9ZNdos5tfFifjSYEoTbZVU8kkk2Sgf2aQqBUQfL5zZkLbtA",
  "key25": "3Rcv9PYCtxiVUvzawPdGFUE8L3KBrSjTP318Y7FTTT51TwfSKfnKQR3sNuKBQPyomv2bbw7HY3aNEzmNfPyEoPYM"
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
