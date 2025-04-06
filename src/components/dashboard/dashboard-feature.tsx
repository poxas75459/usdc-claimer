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
    "rqHXNHz7koSD2pK1E1orGXiqE6Z7pu3VLi2v17ifJ3JPb88Vcj9RhpBa7DDCrHjpL2hUnPsTBLbcRWqvPKrvmuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MxbR1n7VM3YCyVdkJvhgfUbMfe8aUE4RzEPVm4f5wh9WHHo1GwK7y7GTfPgTtSUDsVeU7nJUMpf5MSmHjT6FYVB",
  "key1": "3vB549jib3nHHE78Vw6xJk4h555DVaorszahme2vwU9u5e6A36xf7GW9Yso5unzzCQJW5K9V4LB4FHQbx5wyo1Bm",
  "key2": "4FTv8bhS2dXMh8sFfhk7MnyDdVDakRBAg2QL73cwmBSnWqumnZWB3tX5yujesBzXnLagq5LyRstUj9BDvdxrsiDX",
  "key3": "2B1Fqe7bdeZ9EWe7jVkE5rGBWruCQk7yozXATyPapnLS55MPctKUt41rvfYbmQa4jTagzdEptC9AKEzM2ugdKfW4",
  "key4": "2Vr5FWxYRz1Zo6KEA1oHrhYzecSeb4zZvgbhMKMK9suMZuHZDwt27HEegKKot1LiRoKBnaJQY9ik76abzFfcW7b4",
  "key5": "63CEdxiBxYCJLRU1vvGokndVyAF52gCDHBgyDQ6SEL7m67LQoKjFGX9H7Rn8CmjBsDukphDuFjyBu14UABPdPcQE",
  "key6": "48tnccBxeSjhTnwce6uZVhvjTpwskghDqPos4wrZSo4hrnJSgd1XMyoAJE319AoUKFurM4vRj7ry5MCwPgyBTTuk",
  "key7": "4e5yHtrZmNXvDbDu3eP54PDxJrA38ANDVztxYQsafykEEpi6hLL2VsqEosiCTbrasMGHVdAkZMw4NbbfHhrr81rL",
  "key8": "5AmAnaE9dsJpsLeoHGmC9ZLQAYQAie9RxkK9oMbUb5aLqVxFteAW3PAjDkb3vEbf6oVRTxvMJqzJtWyxe8iYGzGN",
  "key9": "4XdSHA9wdrEYvMh3JhQfpqCzKcX7b74ZWyTAuf4SereRVLKLD3JRHBRvemjB5wzJXQzkbzjYtsUNKF6XTWnLSCcb",
  "key10": "562YNgpmP6hu6RHJN44vnGeokEstvYfc3xMApwVJvj2Ry7ofgxNiuzVfN7LppMuxXYSLmupKENLrcWvvNtfySWK6",
  "key11": "5DdvC9pKcv7983RPPZ97ARNd6HXjA2QYCC6EbgvHePV6ymiJEHxjguzWdwnGD9TCrqvTmE8RyD8ydTh5uZpm7sv8",
  "key12": "g6eoFn6tWRZkJ7MjsVZSmWodZdYfnBupHbUGfEavqm17DmK53FikdNFSTVhuXiVJVZYtAgDkif1fUFNt7h7DBjw",
  "key13": "5tJwvmKJri7WpuCibFiukSaFyCYZGMtifLhVDRAxaEwor9AhvNjGQ5P4YsXf3sn32m2JgZs1fWp1E1DCYTSUvZYJ",
  "key14": "472Y3dcojEBN7HaczWBHLgJFwahDB4wL39K7T7hvgaaVcm22VF2AuPnp8DrZLYMVQCiGB5n1bucLAR1hfAH1USoN",
  "key15": "58Qn9qwz1fxevVFV3MJLVrpBt8xT9ia7VZwJEg7YuYpEictTums2PP1UeestKLhB1CgctAqmrFc2cQtcfMYncLi9",
  "key16": "5MGwD6HQbZCWAoTH6vkCDbZQSP81PvkVWSn91FYFYBGiMpoFm5hPsjWye83Qc9UQsZSoqdoRE5pZisNvURRSNXoL",
  "key17": "4mJ3NLBkf59mkH6KvFSe7EiuWGnQNnE4UWQQNY134oaqBvDUFcEWsVgb4ywwqmHe719tuRaydiuGvp6Tdr3fFNUP",
  "key18": "4S7PZHvpKz8vkDFXuPWD4TkdxQoCs5rJi9KjXBPrRNnnuZFLvAqVZmYqRv98L5dL6GgAyALM7LGzYLGZ4idMAxgC",
  "key19": "2iWPargKn28jmFfWvmNekQeSHXqmUcsX8iuiMDo1W5JXcGTE4W4VazYcYJJ8EiMnMmsU5z2wfWaqS2cjrcrZAHwN",
  "key20": "XgkB24YjXg3ih5KWvTGsBvTQtkrN7iXofZceH44gKBjKAV4YFFNukWJACAxQQqm5UNeRKQy4QWYS5dgPzvwHoWe",
  "key21": "3yWG8nURqZ84TfQPGUaqjc5vTPSPgbVQYP8AAXjgvNpufFshTe36KVymXkoc1yXPYAX883jwFtXWcSG2XddoVFdq",
  "key22": "5hQt3er5erihKFcsV7inDpyoTtvddXvRhTaLR1Xa4ZZz78FwZusrfqQDYcVM4J4PihhGi7kjS7qZeooSQKpVWbna",
  "key23": "2TgezFe8gf8U7iP1sJcMvJbLWvi41p5q4DABzcHWhrBqQR1dhHLBakcXBVrxdb61imwv2YDFXAedET6TYgJzaF77",
  "key24": "2pij6NpdDXydZ51NMhiN7obaS9HyPLx7mnUwb7opcTAoMTMYFQDsM6cnZC1w7u4AjvyfzU6LQwDjWDHEgMT4qgya",
  "key25": "2R93PGtAhmcgwMndnHNwUGAXiwQLYVRUp2y6aszR3CKwtN8sFf8FboU5PE7T4XhtS3u8Wx4iKifn6yC1BoArGy7k",
  "key26": "gwx27YZZT5zSi8NLjaJNAPPPpD9wtmC2oj1UMNEULGCiSmawLG5EtAc1AJq32nfNVeEv5p91qMnMvEHyEeUvccF"
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
