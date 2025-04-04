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
    "3S1X6HtNSn85o2jtytJd4CgReKe7JqeZr4ZZUJQUx2HkdF6iXdwdNSLKNthy6htMF8H4JA8XR5uF99WEq2hhZe9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58CR7aUePJvvAGB5TrPVUoK1QEaBmgndPrDMcM59hEBKnxHBs9eV8qdHrL2TqeFecqKrSjzQZhv3EBc2GprhQbCY",
  "key1": "4HY74E8LwTdfSSzhNi3QhyLY54rVJCbFAx7wtXrpwLea41tuYZsNkx32YTws3QwHe3HEVibcVmvYMjqZmzb9w8dp",
  "key2": "3RtgtieJd4K3f2itJhx5jzQUppbyRFXdkaaqcHA1ZckrTazWwnMtDeoHDvyRX84jgBzcAoJV2Ck7gh9QAijmKiqx",
  "key3": "3PUatWGBQxnHVtkcMvD9oXKKondaChuHvzRAm2RbrNX7gGFXbvscsMuZPjdJypLsSC4iwcG5sN4HSLvXHqAMEDxR",
  "key4": "5Yg5HkLJQspfNRWXnEYYf5MMjkVC6vd385JXcbbDDGxqQBcssJaYhdNRRDYm1wqUCuAnMMLKbSFUK4p1thoS3gQ1",
  "key5": "4xWLYiK7ucxBporpTwf47DYfvFbsw6DrEnTLkAzQAfW8R3D1yCgZJPGykhehLAMWniP5NUCv6eoW9SV4wZsL1MYB",
  "key6": "2XNEVBmzSP3p7BtV2msgwNwguk98HhhDyMKAXvqQ7Nz9NHNRrDWddmV1TWHX5rMtvV8ozeAiGprFjcjgSeu7iSTt",
  "key7": "3pjf36JfmaNGxFVMeQNqfas5sgRaHyDqbfpn4zmkfkZqJzPLNNH38hnrEUH1gKbapct5faT9gwbYhPQdbVYPtNue",
  "key8": "4aiTz3TdDD38NsnGXPweU3sBXnTFs32URxZjGmcoiDxRNriURqcseBPy1T6DZjHf5NgMi387uvccWcPGxxKf2jAq",
  "key9": "3Da7BB6oSfZcV8MSSZPhUr2QQSnJZkWXizkSBjQ83PAoaJFdkmJ796EyYX6f3tft47aGPF6SJNPEhBJvm7xGaqZs",
  "key10": "5cAY37a6SiPuoqfunCxce2FctFaJPMqcHJmi5x4kKg3px5PfdNaMvbbMGDPrmkhvQHJMYktjY71jXJVRsXUtmWYr",
  "key11": "2naNfZw4DtX36748cyS7b1jUHvXHLtXB6ahm15y3TsXdkGykB7gXqZ1WQyZxsewT7KJ2RqgnwBKrCzAQHD5wZh7J",
  "key12": "3a95JGmN18PjcXLiJoEJ8DHUy4Yxqdh1YkUqgEXwQZsUuj8M1xszsh6wsKKQ8pSB7fbZHr582kKdmU6fWhYk1bum",
  "key13": "5UvvKP41NwWNCDYTMNUxWPeYywj8V1uASrGjFnAAExNJ4nTyZdUj2UtwcBqv7L1sDHhAZ22q4Ezi8fAexyFUJzpd",
  "key14": "YqSGCSk76ELQM4paArkzdWKpKD33WPwVRYhk78GpiNTxQRRu8p9TEPHoHeQVPkVy4qxvuuFAnvqqEyiUUZz3svK",
  "key15": "5y4e3JHBUNfN5K36MZ3tyUMQYsVAUwq2Lf8uaaQXXBMx79hx2qpKPkURLaSB3WdGFcciRVe8MoSKv4Lx6Qye9paN",
  "key16": "5YbLbuVhjrRcGWMZ89kDX5rxkAoCqU2t4SxUKWoChxEoVGqagJbEaosn3cqwzUWXMHpgLQC8B6fhDy5ae3PbtzjV",
  "key17": "2GVaJ9pAH3eK9g26F8MtnZEAg2CyWWop69ntP6J33FgvMVSqcd6zzHVdHinCZEf9AQDYtBWaGYRSWmzJkxENAT3V",
  "key18": "3WbH9nccjGvGzzzd6C42Zdrd3cW4ZsAXdB8cFcrusHE3QAsgtLFmnWkiHULAQH1sgWVczo7CjnehBvFeGAedvmVp",
  "key19": "3N4BBy96qJQw8acT8FYS1r6RSVZSVCHrtJkQ39FwdsGgwLZApTyqURUC5yZLCGZLbMxkb1VdiFrkGWLQm5hoeoTp",
  "key20": "4Hg52iBos4quNY5tZaYMsMDTRn59294J3UMmEznj379aApxS8AjqfQUEWkm1TFeuc4CR5d4ptRRAaabddGfZ2FgJ",
  "key21": "38GqX81ew1dfKDbAqK6jH3DDgBWodEMUc9BuYyTBf8SdQCAF1ZeW5riiEPY3rqcn9NaJTSEB39gpLAGRQMevSKAw",
  "key22": "5dyuxAugCL2iNwPNYmH64YfihxumK1jbgqpNorQQZ3V8bPHJwhM7nqsDgXdLJ1BfbAKvnJr1ZQwxaDwVMQcmFzDt",
  "key23": "AGDFS7q2gxMoSPHyfKN77yJw3PrqjnU7jGPuSyMwCDjEjENsgAxAf26SyFZ11yGh1ZM5BAvwSrzdUTUUDUB49VT",
  "key24": "45ADsqdXiivHcmRBBxBxpB3qR6Q3oSySBXE5R2gLAxHqWHMgxmwvtgoTdqNnNBcKAARzehQmXYvk2Xd8WM6EWs85",
  "key25": "nAqaruefoAZrs4HcmjBDTVfBEkY14dKiUa1nLdG47fCwBxVGQKVaAUv8dxaXFqjwKHs6VvUmBT2d7ePVx6Xmi4R",
  "key26": "3JhA882cC8q9gLCa5TD5tS6Rds9VEg9EznoyLZVfYruhYGYBnqLKQEhGKB8LqXE5CQcWzEChgJkjLzF5taHuDTTT",
  "key27": "4xWzMPvN8TJyRYx9L3nExxJrRLmBzfwFQjKNmDDp9PxwZKnmMreQR5TydT1voNZCKGYoeqxEJv5gdvrdP5vCWJyg",
  "key28": "qNsKDHKna14HTs9PYoWyt4MjAS1UhYzhDErsEcw5ZcpWRRGGkLGbNNKvnwCtYm45MCvBEH7EWpi5CbgrYDs8c7T",
  "key29": "2C99pbsH95QL3PUxTBRyvdXJw1cJQekdEoRC25yxfWhXfA7Zrs9zCns8SDWNKidHhhxYbXtXZirBQiAT3U6Uwygr",
  "key30": "2vRRZsYBTeJ8SmbvjB28B13YPhBFo5EFLVfMmaYhRN8VEzqK6EpUMiyDo6XF5Y2v7bAGb9VDG47imzPdSQBjUi6s",
  "key31": "amWYSMQn5E6hRc57DwbPXYYeyhtF2cHNx7bb5P8HmoMgMvaGoN4Yh7oZysHdemT6Rt77X7ZymhUN36zwb6QJqVZ",
  "key32": "4zdZVmowfQMW2PwPwETQzzivHT4xA7SDkibPWnQR6jnt4WDtDPAYkWezrMVAjZFXgumjzScc4UERXb9gSKWqmwf7",
  "key33": "2muJChyYHmwA7C9YgnrBJLhfMRMxuVi4YZWGxnnWK3sB4GSxyxitDgEwRs7N9DCeSHcNNZ3LeijnevRamdspr33r",
  "key34": "5WucawfGvanwPrq1h3SYam6DD842qDEGgChHc2Ne6j9F5aM5x9kbdFhSdgukMgVrkam9ntUdv1kin7SRa5Bi92MV",
  "key35": "2x8kgKusaXqLHgXQ5QaivB4DyB2rNKiAfc1GEZi8gYsDRpEBmMkWkWXN3kKsopsXu82NryzGaDeZbik3A3MMkfoe"
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
