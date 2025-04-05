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
    "3Dt55xMPHh7uPTe686WxwWkiob2ZstdPAhdQUkYPYdKtqXsSrPcmTWagzm3W2oobyqJn1Fk7G5v1J9ChdEDGhMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nFbs1aDKcR93jx1kfqcfJwWnbhCuKzmu6WzMpgzctkUa4zZorvLLpSrU6UFwNXuudrMeMEvK7Z8gXy8MVDbPcCH",
  "key1": "4NcDHEXHsuxYHsmM6oX2oppJ9LwQuf9QfakzXGQHerSBAt3Zm6Ehwm9kg8vE8JMCWm4ZuXNBRsabFrJEr4EwHKUZ",
  "key2": "AvMjGvDBFCEpfcskTWduQGgS88vNWSeeAwFJxv1uL6CG9c9uiNWViRSwQmCkDoRpohyAHvASSBvSEY8PUgTJFoP",
  "key3": "2SR3tZWFWmV1F18biEUDC3995Uwi2rdoMcRcAqbJ2ERQcbLVwsd7tsmTb8E8a5p5uELoRkywAnWKduEiBZAAnVfg",
  "key4": "4tAFb6JLvvxqvUXuDtg5tziGwji4wsVmbyp5dcCLzVDmkkFjBcaXFvk5obF82f4kyEYwRXcfBFF6paDmuLhyFnd1",
  "key5": "Vo9ibcsVdfy3StTxxi3oceVf4R6oFtMKZr3BsHEivMUkkGbWyJpRbNHAyTEW6MNq4zYqey1i8yXNoRhL8bWynpJ",
  "key6": "5DRfvUzZSYF6p2wRLVLA48b14RSLjCnnbxMU3DSXvV51BaS7rqMMa6yEiQwHf1Kw7GVfGKiosbfmeJvL9NNDj8aT",
  "key7": "EZ6dFzWZQdRaA4JSo8ahnFPM3AYK9yzTvQytPKmoNCi8S8o97d7K8by6hpuJDsSfsLiCcZgjCBXR4UdYFDVDuSD",
  "key8": "51PdhjWXbLGWCcU3bMYFvanBZ4rQgicWYY4RdeaosHL7YJuogLUAbhFfd1Vydu2NBLHFhrnmS9XWAZwpuL2kF7tX",
  "key9": "563cTwnrJJmf87A546J5TVXv7kubijewXZv58AY3jey44KvGn83DTPL2VWdGdhjWTLkK5n9dwDEB2cXLck62Uege",
  "key10": "37BiuwQ2V5jyC3L1S46NuidkQUGwAZRcsLeVxoGDkETuytKCWMfPuACQAsopXue9vu9FuEbcTaR5D7gKF4X7xNqJ",
  "key11": "4ULrVyrr9nKfkhxK5YjBpE7Hacz6wQcKWX1x8euKf8X1cX7Meg2gJ5Cu2jsmb7it7Moq7ySXRAGLPaHY9gCnNyXG",
  "key12": "4pX9tFQ9n5xmT5BTqFRoGU2t6WYBWcDrr2z4hg9siavd4c9Z1zry5ih5xJhpV9fz8FpyoDDxbRW4T1ZCsyrEgWHo",
  "key13": "3VcHKGMHwuodK1MuA2FzywmNzUL3XJ7sjf58AfSzKTWSEMpy1tRqYjwRRSrWnPMxyiqBF63Viazxsay4A9t97rgF",
  "key14": "2JJRaAzrTxm1nGYjxZMwWs7XxNsUrZAFCmkdSyt5mXoAvtMWcHupWURdSXfjCzCZeS34zEBQSgBbrcKAyVU8UEt6",
  "key15": "WSyCUER7RA1fSV5axjT9SjKaaG8Tb5xLtjFFJqZZkXTu7KpGPpY2UXUvPYEzTgrG2byeH3M8pgGJ6zEmBzBJwAG",
  "key16": "4F4qvh9WKxhssUFxQY7LAp1rZLCXTXPckKuUbEQNDYsxhmTdkuurAW8PJjCkH279EVReb32Ltsn4ut8rwbaFnTro",
  "key17": "64bV8zZBVPxzZFdLE6FYoUmFpF5zTHXFAndvDZeh4szzJgg8ZnGZJwNJnznkNNwY9iy3Li3Bszn4RhjbbZkyacZp",
  "key18": "3hJfnsShFfoG9Y55AtkC6zzWUhCzwpbBN21nbb5eouBBr1yk9gy19uZRQ4KCVQAdgDBmV7RKs9sa3AffAHNEX7xD",
  "key19": "37wmuMb91PZp5GRCCmdCttHnZKh8QhVBQThim8FFn2pygH3iRnRaDmXBriewT3jJKUtTAwywLUTEvJsVDpX1Xw6N",
  "key20": "2hZiJVsUrJ55FuaWshRd72ESu46YrcVYvmGvxbtFEydMoPN1vT8qPAdQqiDXPhfUrgqSXfZJR8EyFqNcw7Y6uQHY",
  "key21": "3mprpt2LQt4P2cgBDBp989W8jkzihCZegthqPi3CbhM26S84V8agp1gyd1zrPPaTdYxaCZfWWBQtwqSLNkUpdKWV",
  "key22": "4ZdCUUsedHea8mKgLgEQ25Skh4MAjNMb1oW9jZACz6ykuYUfh7kvBPJmBxbky4kNHacGJViWRbnygoKPdywUXFQG",
  "key23": "fXN3WNRsjzPocTfrdB2cX1gfaXk8oDkhaLkwfJ2YVLmn39JDF8GkUTM7uhe2oiMgn9Eb8Xe6dvcdYvH9jSmtz6P",
  "key24": "2C8UXDY7HnGfWpxZWMocY5rfsb8soVzBE5TvyAcy8xEiAtL9FpXdiueQeZfAeecKEQ7uQ7gnjXtVYfG48WPdXDra",
  "key25": "3TZpraTPxxqyfG7dpbo7e4SpsX4NoWEzBYHiihY23mdVUSLzE7uU2ngreRXzLpYHxbgkJzZqzy1GW6FEt8qrCxiQ",
  "key26": "npKRYzyXn6ovUHGL1JMgEAfvjJrnPmuY65NAWM9Yv67N7kwSBdyDSrC6REXDh2n1ZHtRYda7PveW3XAaPf9YSXQ",
  "key27": "66Y8vKygqz2Yaee9DS1dd5cNpveekkRHzdCTjV3gUiZgyTu9u6tmRvDJh6V1rhq6bE8MkYtu3ytsFfhf8QF6v6B5",
  "key28": "ujQm4N98paMuNdAB9tb5vDhz7zQ5cgjeymELRbFrdSS3NYQeykSos262HHLNpmEQkbn9WPybWpB1fnhHs2EujfH",
  "key29": "tmrLudNLGDADNrjjVzyD19HRvCYk92o4xHpzp5gY4Pt4vAxkeAefHerU4iUELURL5xgzEH54gfLneURKrEEu5bY",
  "key30": "4kAkKf8f6WFGkV2FcLCB6drrUh9o6dJmyDAGnBd9rY8MX95N5mf9yaVNu5oH3G7YknUwU1HNb1XthitfMG8vhihR",
  "key31": "5jwTE4gtViSy5gBJLhpzujXqSUiHEyxEhkHH1SDo6UnDXLiD7SbZgfTWb2ro3xtcxUW5C275hMyxf9ACfu2UBJ3f",
  "key32": "4T6vWzCiZFs1DWddMTx6oWwvt5kvwjNfZdDeCsQrPM5ZZM9zuG3fXvwhAPM7aUsDBXBeE7MXosqmgGKP23wAuCQt",
  "key33": "4PAhyKJWG9VsLQdDMR488uet3fm9yJ61wP98zZVFTWTap4eaBgefj76WAQ75Bo1AWsG8Ra9iuqxCvYi91taCTFms",
  "key34": "9YgbFydDJ8Dzd18h8H6gq9ygTTicMbd3a4MYhaNaXCkQftkapnubzvY6G3cwa5eZPWPWu9KWJLpwzFYT6RDkmy7",
  "key35": "2R4m36mvroGG2zXp3EWrhJ4iSmBc86apbup4WPCodefEUPbYhPS8FtU5sab8zgXHiuyVpE68qxzCZ8gLrCmeQUdT",
  "key36": "3wvLPHzwehJJAQaRr1x4PgwriR7TzQ1wYzjGdaQnwmVfwgsgGa5ovo8srLXmbzHs9wv1BjYrRBakCt7FuJrt1umo",
  "key37": "q8n3brYByp5bGhteoTpXSZtRTzd6RVhXH6WsjVYR95QDA7Yc4f8AWGc8qQrLDKNPDh6BPTwEY6SuWFZ9DQFt2hL",
  "key38": "4JbVK6Pg8JWbfDWefBZ9VuGGUjAWKRmPxNTpBKzvx2LmdogjBuXg17AGUEjEfdPcXakyZNqZGhW39LwYbfaMbGLk",
  "key39": "35uJkPpASifs5kQS2eTmeptMxj4RZeVMQfSNfupgH13jCvwVZWKLjeGE964odjsBJYM2cxikAg6NT9fbDfo78GGf",
  "key40": "5BGuJfzQGNYYeC5KyVok2RphWeG8kfZv8VxM8z9R2i4wUfxWE6f2qkAbLNBGPu9GLGAbwWxSZAcNCJFfSabBVx29",
  "key41": "5xLZC2Vg6ZFcwXrKG43mcxFNroEkPVvE3PQZ6ykikcueC2eRvysYkGreBHDbmEQvQ3U2yhtX918xsnKqFWiZtCRA",
  "key42": "oZKmWS192bE7JtmA2dp85PWhJR32UdPmWm5RfqxKYW1Y6G5pfqBUC7C136T9zTqy5qGJRGF67aYNVPeTbZZ62pz",
  "key43": "2dxQa5HHuczFfqxfujFr4iFE8edFv6J75N5mVn6p7dicu1ELgqzy7y1U5TNvtPh8nuZYHMHRfQw8b4faYqLC8qPM",
  "key44": "LHejeVQz9qRj3StzpU5xWZ47cacuCeUEY5gZckaNa6g19WV88sPfDA4NyVRtAr2quZt78vn3dW6KovQLfkZwNUv",
  "key45": "gazpqCfXRjbSoKvQwAcdugRxfHm91QWNNxWuvruQ6ftedP5a5h5Sr73TmyK29pSJMdHMdqJhUZFJN8WMU9WsAKQ",
  "key46": "3HrEHSXyyMnPhepRUQoWUEMK57Ry2qfp8q1p7DbYadWDGnJVmxzAGr6hpGxfppvZDbZQvH7hmomwrJfSEzEo53sd",
  "key47": "24Dzzhk9HkPeby6AiDSSjgsCJUoF4mTEf2a5r5edinW1zvBsK5R2GywCWDgvR5ghgGNpQhCi8yE2shGAPiH4bJXA",
  "key48": "333smMT8TvKANsZzL6zBoXfT8zTu3m3f21v5fvRDyHZAvbXJsPDEyYAzZJUN7FCocAhpTn15d9XccEEijdLw5tqG",
  "key49": "cPeZRRqDUZirXsh5RPbX1RVDSAv4yfrvsAgRreiDmhxDgkCGEVxn56KU1TFV8488jpMgh9RNxqGUTn9qSQqLKoW"
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
