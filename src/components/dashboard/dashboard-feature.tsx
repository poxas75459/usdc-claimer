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
    "Q93TfeQeNLgfiGG5gXNMEHrpmA8vDPCme5xSc8pQxntoQDTTJd8biHzyBQSKt6375Tge2M88M3a3vijMLBhLXaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BgwKx7HegHizHgrtH4LFrdob9JpFCAvQCu4P3qc3DZdVSLsJ3Ak1omQbPViKRcVRnzRCrwpJntcEYjRjeu4ZL1k",
  "key1": "2pQ6Ucr5Jkw75KxrVkQBcwqi3sgCnoTowpFGYPMk7iBAVqoMopVJYaMhrUMoWJTDkDHHXw14DP8dfFCvE4KWq6eM",
  "key2": "48jqQbi2J4Zfg9viinhDbKYULdpLBAvB9gW9ZwHdtJ1JfJi1WJFSvxU9h1rQ7jJg8ToDGr7tc4anKEicTJWm3krZ",
  "key3": "pyYvJtKftDjofoYyVYAwjNPeL86Z6Uo65s5f4fHhvD4H62uoyARWShJ5ey7NrbsUfjhVg4pLmGGVB2FCRTmTaj6",
  "key4": "PNhByyf8R2aXDAmjLr14bHvPqipCjb6tL9wxX6V6LoHeToQ2NfXiwKPFjszUgerwD39YscVxDEwEe5puhxwmh7r",
  "key5": "KmaoJX4M9cUWJLrLEgETAGoW7Za2e4oH3hVd1n9RBGTbQCH3AWmSP5j4ZhUidC4A5mdoXfoQjHvMo7isdvzhVtf",
  "key6": "a34J8v2qc2MXe5gWzU3PDSu3WNzgdQckEHRAdrEcR2RMWfstPoMDwbQVhmq2HWzdtKQKQRuZSphc96HzGBbtgE1",
  "key7": "o8mxNoW9YtifwRqWCD772j2imahtqtYRR3wNx1TxS8x3zEFHii9kyVKQvPZN2uBc3MZrK3mk3s8zEry61dUm53H",
  "key8": "3ma1XSYV4ZVnm8mpt5tv6TiGQLWA5wjX7KYVLgUNC7DbRtYRMnscx14ahAPoCC53WYP9obmn3TxfLTAoPirrF2cK",
  "key9": "4Efr6sTvqaXBU7EBTvk7XD5CJh3hisKurxL5S9zT6b5PRt93w7NdRkU7cSP5XP22xfAdZW49WNkPY9Lt1wyDCaYr",
  "key10": "4nVTTntpxjfsxT3d2SpuXuajxmM8KcaMEdh2AM8QWPy6zV57az3yyfFqyB5utdj2jh4GaEhXhF6kvB7spYCfzgRQ",
  "key11": "34bcvdF8TN4qqy6wbTQPiLhHjJwFnPEfnStXo1P1bPQrWPirbGszZ3rfPkGjg2mh3iswNN8FRAejt1tScsv6iMMg",
  "key12": "5eFctRPujuet2oovAdjg7nMqYzx2hkTtmWADPa7BtokgHeALzBipd3s9TZAfebVkEX1tUck77iNjwwHFztmgQUBX",
  "key13": "2seGFCWH26R1mmoUMh3WVKQDTLvo8pGfA5W2mcf8dV46uwQ4iarSAjBozZ4awuPwyCzLMVKxTfVj7S66QivEQjpW",
  "key14": "3EbMLLcNuViSUsBKmdYfJx3ngEfBdAm53oPQJtTat6VgQcyeVyNjWES34suMdSrLb367D9n6ndKEn3F4DawgUGWx",
  "key15": "5A4LtAGr437a3FeVSG9mmkHTqXebHnzcKXc2u84HFZk8X6cPpcZDSnMGMhDqAZA9fN7bHtbZPWTKstE9QVRZbnur",
  "key16": "66iPkrsQyp6JNvaaVWBaZ7gGJ3eMiTBzz8y5Mjs7k6isjKobYT1mMWNYatfNibCh5eehKs7J5c2FMsCkxACi3uEF",
  "key17": "3gHe8mkWp7ipUFCHTdSppJ9GdDHg7HrYKPeaEPgULeMDouiQzjMhvYXRnRvZdJuXHU2Gq8KtzkPqE7Fg1Bon5w9C",
  "key18": "4QTXTg5ov5zw5vrU1J81sf6Fyt4qhY7jM64PSLCy94zPpnHEgfk6BLTVUEHH5r4ytiADRD8WcraaXziifwiZhH1",
  "key19": "bgZ5ZXNDxnnZCHqcRphShowwiT3fiJp8XNFyVGZuzMqXeSMrwYerGxWZxMH3tebKztJ6BmGMkA66yPdEPD7vq37",
  "key20": "4aSgsHzFtQhQ43wTseLEmbL64zozBx9sB6oe5nwmfWmJjx7Y9Ny2nSiCA9hWXJ94cU8AUQHN3vFR9tbn9te5XmjC",
  "key21": "5BYu6a1AdCKEKhxfWnf5VGAqanbBRS7yKzjKuZ4BtBhUKyQhVvf479HrL81PBbYqXfW8Wn5qMVN2AtoshAMQTkWd",
  "key22": "2vczSoS3tbZYmDkobpXepbQEMp3rRvEhVfRZBmoKGkRbNn7wEosEC45Pznha99sMEuPHaqwjf99WA9nTrbphhMMY",
  "key23": "bEWWWxG4KLgL4ofo5pZM5iC5z8aTeq2SRsXoyRHQMaaZ7w6SQZMkQd5jU88qNY6QbQkdfmwczmP4aDkyBnVRvN4",
  "key24": "4dCJqnpj1mgeU7tVy65epAi3hXk2EPJUknr52UHN9J1MrEPz9ffJxxtaUyR5y9kbGESnsDkkg4fiVqVE8YfJYRgt",
  "key25": "3igz4bPpdWao6Kj9RMhphxfnGkuSfVxoPv1epUpd1bgWKVbeYN1bxecXs6eKBTbfMzS3T9R4Huc1XhL3Rx2CvSAt",
  "key26": "4RJCfDJQw9viQbupbwgFeu4vWCacntCZ4s2zndW8we2KnUtdYzSgFXDXs8nuQVBmhHETVyt9eWX1c6pqN5M3RWGR",
  "key27": "27rcdhk5c3QtyfCUzdcdEJV8CgNhAitMp81vZT1aay8Va57fnHfCX43wBmYfEftTyRiE1bY13TXJCsn2xFFCdhy6",
  "key28": "5ZRYtU3a9wPeHeVoysy9pf7RE2ihcvoLWX4K6Q4oHoteHFuinVpKrV7dhba4j3YdMU9TFGjVMYerEWmuv2ZA1Sew",
  "key29": "3jCQxG6rgzvob8YgzpaaQXxBVoqJjPBaw5A3DpqWtAeFwbYSRNYHjJbwxeiuR9HVkMoAUG6LtoMCsWvR1E1bFPSK",
  "key30": "4NxvjKALVBcCD6JyGLdEJzp72xHJxRoNo7J2VFSfwnk55trGhzEmhwpChYFZpg4rLzgb7eaXA1wVnXvs21bE22PH",
  "key31": "2dqQnfeSdwczweesfDGhThdHHakoePXS82EhzLQs1FVLa8SbBPURZxSqm6qcthnMD6P37V8mZtmcPdiZY5yvJQcR",
  "key32": "5fXin1G7Wyk6fagHqigxiYnk1QzFvxb9195FLAWWRikt3HHXhhvcyJFFxXSfFWBLcq2wNSa8TVtH1GcZDNM3SpHe",
  "key33": "3Y4xDue9mBJPeanJ8YMJSGnkEgV9bpM9Fh3u5WNj2waWRwSNjHHL1uJxwxdaM9ttTHUivrzS4T8eqnSewKwrxz2x",
  "key34": "3X9ouG77Rmgws4yCJGDm921Tf8t7wCRKYQmJb8TAmDjTJpMUQtn1t5bmHKcBdGQ4Jj6YNb4PmYqpyt1h9gxRkDJv",
  "key35": "5zU2acobhE9NzXKF1RcDxoHd9gGA1YGDdjE54789FmFovumr8kRtx73XV7zm4cz2RDQisyKj9bai19YBJkG4r12g",
  "key36": "2utpWfmqTs9Sfo64DspJNN2g6Kehg1XqrpwJfrKzkTM585ho1xmKwkCLqS9xPxr5RBudnrjwiXchVQhQCLGEcHQL",
  "key37": "WQeTbAhmfzKvH8hrGSZBL11D8osnf1GN7QtwvT3U4nHuTa9MZKZujDavXkykSZtoJPkiqfHzwwWwzj7UCjHZkkQ",
  "key38": "3X5zbbxxvF7TKR18d3qn4UQBQvSkQ6MeBmhman1XtqjPePiW1XJDCaejbQavcxH1ud4wUPpXYbZc7iPfVtk1Nff5",
  "key39": "3iGw6szNR6xpDHHxCHCV6z37unh7sfnEhpVamaDsVBebEocxpbHxTVAwrWhqY3TZTXKJYPz7oaeFUosRPNuaFZ6D",
  "key40": "gotTeZc2SUj6yihAWPRo7cWATbTGhsrA2Kfny6pG5eL2dvtcdoKVtWGWiXaV3n47ktZQnri6Hk9ieKy7EmHJ8BG",
  "key41": "5ymoLwJbiqS6X4fy4tQ95SvbaQxpS9zvJWLa7Aqgv5WE3T1xWYvGfj8sd8EajXovAFNYVDJFtdsZ6T5tQEEk4e4H",
  "key42": "5TKVZuGfCjksvkdaFafp7Xmm9XCk3DU7W9Vcnzpg8MyeSyuMQst67RBhAhxfu4EWfnBeTUZ4VCg5pW88KfDBzQ39",
  "key43": "3KZt7CYZyshY5yofRwv1uMpZ6FKwByiRpFp1xtn65zcACQqwZWESNd57WyjrFS4vSVNNLziAdMPo6m1THExXxfAt",
  "key44": "4JF6PtNogaw24vcetU9i1hnTRehXFPS4ai9LPm588fPXAWLgKG3LyV1uqa9xDfLYzAa7YotuBVX9ZN9D7Um916vx",
  "key45": "2E7uAhogUTK5zvR8F7CoZM2kzHDJuccyiVyZYriv8NhCzMwWmxTKPvwF6e8cfMBSU2SaS14uyEnarQngf2G12c18",
  "key46": "36nCLxvseryxJGbNDEhnLmfqtNuZxJyiJKqCfvaphhuHLtbkLanMXGkhejAGGujw3uAy6jZ3eaHbnHrvvdGUWvNM",
  "key47": "3GXMsUEWRH71SqWouTPfq4nRDVbi6iCUXzvw1SMgJP3XiBaTebMLhWBFv36Rt4vTEA1S8TMiqvuheQqXeVJqQp42"
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
