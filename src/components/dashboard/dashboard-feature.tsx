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
    "41yEYqM9gLgZhpbb9h94Gx4xyvKySorHRhzmHGUbxurer36Vy6UN856qRzHZc3VgdQi1cgBLuEWeKQRuJ7CYyBBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GYjQvw8q3rirDn3eaE45AE15oTkLFN2kBm9qfWvTibz5A4Z9KBD1KuCNV7hU5x2TZWVcUrbLUB8ZpNqBmADdU4k",
  "key1": "59Gz5zZm5VM2x3H3PGvGWTeLFTTQPVHz7XNAaiTWqd43XGbF7jP7S46WyGvejJHhxB26RMJSyRnaQU6nDi7SpJ7M",
  "key2": "3M36PdzyRaa5V7c98TSd1ggWaqhjqMeDm77vLsYAoKwTfFJTpgoxCVzYH4uR5oMknaTeABMWeTUFpxTEvbrYGNuq",
  "key3": "5beS2D6LoSYaUXbFNHaoBJRg7RgCzRsYjnPYW8x4Lrrpm2mYeFiUtYMbTFxb55hMR8WjB16owCEYVK1zAydTebUX",
  "key4": "4yfKYx2C8TBZ5Y9FzeBm2tmHdy2dPtRipUQbeuxoVEEw6PJN2fNtPkULT3zntBtgH243pko1FYGytGG3uxWT4ozs",
  "key5": "44NU7QDKPqatpxRPNhh5PtvPEgQZfmBcLsyaeWCJoQmvzvanAwqbzTxuPjYy22HQEg36X4NdSbt5BLzi3uPH8zy2",
  "key6": "4gUnjcNDVWh7pJVHbVCy5YNsqPPa2SoEBqDL7Wcg25FhXTfti2ZMeYzpPhwZgFvPb77XBBnLmeWky8w4kfhufnmF",
  "key7": "sHXhmVxkUfCTTSPWUvWKsvL6vLbizFZFjbiJ6qpb1eNvyaxrYgAz4uoWzf2kKGhmHRYYUv8RoBUkEcsJ2hjUut7",
  "key8": "4ggpohLdmGXcQXxuh6ZaMpd4RrYkJcsqmThUaLG8QEkfBogWxabkzEAY6DtDmQ9xZ1FtAMEtTs5TAFx9dyc3XpGU",
  "key9": "4EpeEUGKyhhUSYaTLT4jbcnYz4rRMJdVf1RY4CsqbZy6F7ecF1gozLzFS8eeN9ZGLTDpxch39LxvB8hbF7o1TXoP",
  "key10": "42uC5gogh84osFUeGLikvAMnLK14qbcwGhaXm1c3UyxC26YTcPY4k7KP28ZuPux159uD4BJJX5ZZXFQTzhPRZQEA",
  "key11": "3Em62sQbJ4m3G2Kz9qWHbDHje9SP2uMPDngkL3CEJkKpgaEX2c16GtXxFtLfnaRVrQzRvwytr19xhZksEgVWM2Co",
  "key12": "23HXe7zfa4RguagTXCSKWiDBkA1vVJMNdvxFH5WNUgSoBuuNFf2CxsAYrY9hTSKR8aYVeBfBY5hSRu4GCHodgVm4",
  "key13": "5J6XCwCAfuTLaYhhMji5Wvqm8mwzQitLBvMhFHnnyEiFyrdepjTedeXxVRf9oabitVuWBYZPc4SJLL8iV4gF1NBG",
  "key14": "3XQNz3sU4E6uY93DYUmVCYK2p7BkBxQEsyXP8F2Uie1jVNvD9FooByGE6PuYbL3icYxZjA22VPQextgcxa8kJYZn",
  "key15": "3y4gCXVnfpxC7PzjjMrPBUj2kZA5oRkNCckhSiwMYPKqrQspqSwmVeunRju63aTmPfy65yL1dmropEUjaQ7brTGC",
  "key16": "5khLeQjmqLnon9JxgVhfUkUuDUWHvk5QbCmcQkCRtJHsWvYNndDqMJS4axSZfLn6eBvcb21CuJrniiEw3Y36gdhE",
  "key17": "NxfFKGeZFVqsCYWrbgRQAjMFMeLhdt9NTnfwoj2mstob2n7zZQbsbaAAV1moPWsDbDibG5a8NdNEimzYoGWbX8E",
  "key18": "j31bnXaAybonP9c9gmrNxBMJJzQJKJvPvLmWzQmsrvxStxJEAfsL7SGtz58x8uZSqveDiRsDgE938x9ZdfEYxZv",
  "key19": "51b9KdiwFjfoeXH5szGb6rWzhFQvJiGKDJmKddGFSZ8izF5V9Yatfcexrks1NrETMXG7HsqFeimuxEfza5qHCXBM",
  "key20": "4WQj9M4z2QNCAn9Mh2EVjF5L9QCuX4m9RjFeHcdaL1QzucLLS5bRxh1iKpixAJRjGsbwbnZ7r3fNJJmZpjzxXXzB",
  "key21": "51zW9gHr6p8ES7UyqzhbAPs55ZihWAMbQWJrd63QBEFmoLyVH6YyzPN7F4Fg7NBna8yeA8WV8NZUchd3WNdjVFQX",
  "key22": "4rUnWRqWWmWS9jdKAoycnQhvFenVwFZqgHLncHhr1ambxSVVa6H3Hj1WGDqsCF1N9F3Gwk8dTu6C5WUaexHh5D71",
  "key23": "5q7yND4dzpBddLqTo1bJymbXuY7UBPVzpCnMmZL913tNKMcFsf37bTcNtLFEfowqwVLfHxEHyBSSBqmechiaHFKm",
  "key24": "3wVT8Jrks2JWYBX25SKmijKTUYU2a9bFsnxhXi8WJmv3MrUXsVKFjzdJYu5SJFf37W6KmPsH761rQCvswP3YeGbW",
  "key25": "2SSD8Nyx5JSvs6WfcJ3a4HJ3se2fkUrMbeRyeqtKBXJLP2cowFhVYDGsGZbaFXz6GiwiZavdFbVgx5y6axfEUW7Z",
  "key26": "3q6fkPVqjBRtT3snBidpeBPyWGf5zMau6GoWsxXXiKkcQtTZKRkaoJ4QkyCg2sTBBcXrnvtW6iY78Yd8LvtvkFpa",
  "key27": "4L5ZeQbvSUxhYodaDaNscdHfNK3TmQkG2mtDimuLEaggSMAh8TcrWX7JgK7NaFiiXzNwK3vzcYvrzmJnEZGXqbtH",
  "key28": "4LMarYApAhwUYSG56oEWtddE8Usazr3NC3ESXzVXFRAHU9LAGSJeTxaD57a7D7UdmuMrYhfjbESpT95CeR42KKyc",
  "key29": "Kad94ha6Q1gDqdruoz1Df1QxcgEToPUrDH6fpvqJJ7d5bxvfAkYGaprxKG3mU1B7J4CrhMzdHbNUtJstJ9iJjbM",
  "key30": "4gpxj2yeThLuzhf6nw2KfZRPFt71cqPteiCeuXnQjkzSaQkLRXNdFinKkCVGQ2iqfEjafpvxrWgDbz3W8d1jvXgE",
  "key31": "XbDygQd3PjGgyjCn9jHGwj1yGAKERWTqpCJonh9b2ZaZ2cn1s88gmTH2WiuxJgk3TUW9YeaQf6L8YSuXnmJh8hJ"
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
