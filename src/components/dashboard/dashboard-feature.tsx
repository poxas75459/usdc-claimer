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
    "5tJMoXQLbCWAR79cdtEkg6S4b4R53MgkVKjFVFvvxyAD3ziKaj6Fpwc8matKDoyWTKbbBXQHTP2wgfrJExfGBwFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "229E3u4scbqLrvMKZ69hoMqBtHznXJ2tpwByNZSzFaRLifJ3N378v4ZdMsFzyub4hNJfHyQRSbGthHTEkdY6oa4N",
  "key1": "NFvhuXmymBGTnitUcUs6w6vLsJXKybTgYHNvM99yPSH8XW5UCvm7eimxt1f556FnFYbQ5fu7iw5poV591tnAFUE",
  "key2": "4YTjiCkHTWVmjkPgL8dwiaqsrc5EYA4iNqN3UBe4g1Ut7grkvXJPQNhs72uys3EUiq2QuvCcNXgfgf8ooW2xu8FD",
  "key3": "2pfqVvt9kB2b4Tsp9cwq2kqevmfHyXVq1R8AKKC1kASQS7CRjjwYHhPB32FUU284WWQnd25f39Ftpkzif95WE8r2",
  "key4": "xuz2zxQohiyMpjE67eb4TaCFLTvSDL82g2hTvwSNdCaY5AKEtoxz6h9uZW6FN6auosPx5xQhSHymGFBRxuwjt2j",
  "key5": "2zDZfqwHp5jHN8GyoH3mErGfoPJBaPnpSw76VxBjhTwf7sXVQrDJWvjd3Jd8kN62aw9RhJoHbxz2C3GA72PWZAkE",
  "key6": "3JRnrmQtWVbGass9iqXrVd1M3eF8L6XJBpgRbXuvq465y29UEZYTuo7XWwWHwTsCU2CzL5taL5WgddfL6cmzsJq2",
  "key7": "45iUrr6Q1T4jMGY7BfjKNC3LZHT1AE4fhDwV4U27czz1dqo7SeyLUCKGMMpHLfZ1mi29SbgwmNpQFzCR7dWFuJZq",
  "key8": "frutPxGtERt93TW7fs2XXaLeTJPf1QQvAGbH2Twj58R41ik6SYkJF3iaaZYViNKKNpCbvKkG5hEw2Ju3JGcgKbG",
  "key9": "4JZCrT7tURHzMLRSe8r4QSzh6xVu3Kt4sCT4Y9As4ASxho4nLqV6gyyG5TtnetxKCuwnXHqFQdX6FruBgnofRQ1g",
  "key10": "2hb2cBdVx38bmGGNQS5qNPegrgVxE3DTaHgzv9ZBvxVEGxt5qStQkxHwqeSfZDuq3VHJg9V1M36bRpyiThcAAuyg",
  "key11": "5FJWJbi9fjRXqUpjgouSikVT8vpBATSEjyAKGYh4VWduMdYYmBT3e2Gi7MXPfMbZY7UnjS6rAGL7d1QtaTotomKb",
  "key12": "2JzzbUxx1W7rkjpDAYMg9zH4N39GGhK6qegQdZRy96pEmZzMJH4PY69rkmk7Mh124Gc5DNQLFXGaWTaPLfukeDSQ",
  "key13": "43oWdn7fBtykvbYcSPSMzw37V5Fjcrk6WHh42S31DnmxLwq4SucbZDfyreNip3MzQYhQ6aS5pmcV6g4SB1zjibQJ",
  "key14": "4VCyxha9X6TLWuKjUJNpQ37fAhs3ED8m3soK6fAToqdJz2retUzL16zDofecF1dJ1APAQZDkRxjyAHMQ5WTphdum",
  "key15": "tU9UixeAKhomMDFdRaDAjSaZs9a1NScS5Lqk91qUXNyXZe1CnT7Tx9wpYL2fhmoihcokiCAQQS98qxd5CamQKJV",
  "key16": "2sLDiSWmWe1GfFGxoy6vBftwFwgrKvuC3wnZ1iCYoRTtLbYms12EBe6Bc5BK6fdivL9hSQHPMu2RpNvhgVzJ2yAN",
  "key17": "4wNzJQ5hiMK83WM5uDe5x87JpZtMdBMQH58vUVjiqxGnyE9wTpFS5DEn6PgSPZYSNhnSdyv2wTRpwQdBtnuAn2ht",
  "key18": "2idZrK9EusfVZGQwwmT4vbyizJzem1UApCLogbDDHVrYp8FRvquo9YSoEVrk8KqtZx54C864MXJRQofswaJgUo3S",
  "key19": "2vmtFQfrbrEMgZHkByRRMbCjvbwetw6Zt9VJt86u9JdkuGwiYokTpM3H3ihuz29CyzxXLy7FkiVT47ggdUgkTKx7",
  "key20": "7J4NKSKeeFzKVfpWMYEm3Wn7zDPsBWnAfAwJmXkHvCZGNZ4nNZ4BJHye8tsdeBc5chXz8qkARWgzs6uRt4fxxcz",
  "key21": "2AYP75SWF6mv5gB4eBHouNSZp92zJsQoULLBoDaecUeYryZDKBh93oJqq3bdapvweqRZ7qHDPaGiC4ZfaZKd5woW",
  "key22": "4t79yhGcN9MLGt9iUgrqREWGHBWAUceZf7PmspshErZ7xeAGHiHXjzPWiaYPMkRSr7FkLTWcVVZ87yQ3YBwg9U5K",
  "key23": "251FMjbbjZsZHHRYLnL5Zu4ppY2rkerhof2GdHd8oqi4WEbyuaY6UgptcExK1MBJrhPxW1DkQBkoRyjNSbx3inNg",
  "key24": "FPFL5U4cduFxrv8c3xQQW2p9BBaqj18rYk6riu8UmA6iS6oJ8q4vWGWY3sSjMYicPRGLGpLRHZLpA496iEFuCHF",
  "key25": "4KWp4HSNZ7b8zZyq5LVPknkuWCPdZoeHmDbp4haWTpGpd2vK5pPcKcnPFH37Ahr4ZWm1jwZAvgF4ZwkubRGF6HXF",
  "key26": "jCr2oXR3HPE9q1qV8MhYYcU3cdHjYfQz34p42CWdMj5Ch9Kf2dwsfETFLSVRDEmZW82zebRCPXMJaadkeYMBABD",
  "key27": "5U1v8RUuWCegbgbJVLSRkbE4f9LFSFqTKfPYPUFtGTeB2f4G5Rs3wx2zHwqUENvCqCRzxwAaWgaKsQfKikT1drnW",
  "key28": "4qUXEFM6jwvZ9iYXoWaW1JNAnmHAf5B9sX14Soej3JU33SQPAHGNXAuQPeBeMSHYv4XksxJQYHn9Mqyg6CcBVnv9",
  "key29": "3QF5cSLVueETwZBoTTZjbzb56r2zxDmLeZ2XuE98KkBCQTjAeWGp6AYZLyq1TTYj8vGJVYAP6SVvg3qextiWuxda",
  "key30": "FecBKhpDQ3KPbSZsZ6fL8HxDD1rhswTwrZJnT4WgKA7RNB5xZxnDu3xMRSXxo9r3yzREpq6sF1kVwvwTxYZZZdx",
  "key31": "3JjhpLfVZEsv6HsVM6jGeqMHKFTFykq7fB8Tkg3UnEYDyLWrbX6AAKcb1hJ7bfiDZbbJ5isvQuQkuiY7QebJiAFC",
  "key32": "5N7oeTSHshP5cqQ2W335pf196K5BX4mHZtKNFikwCn5MrrnQgsQ8F2ySKYhLPRh1tY5WivQNRRgh6QUPVx7mGonT",
  "key33": "2ubSL5aYTmFmgo8tD3GvnQqGTaXnJQo9drNRBeexzqCvGiFWLmJG7LgfLESCDCUN99a2cAz3SqK4URZNtYfaZwdp",
  "key34": "yHLcyusPvSJoQYcCeqCXn8GBdXDW844jh7tNVbWc65dwnt4mkc9hGAH1x5y9JEveZYcUPUfK9vnXru2HfPFZizM",
  "key35": "5Tj5Tf8zw4ogW95DQ4fvWdL2mXEBDAUwGjyYXU2VJxGq8nGphSkWXaojHYhi1QJRqFKXjpwqsabwUcvYtW6kyoin",
  "key36": "2mR1ctSmrwvcVphpbJYEMC5u2Xs53cMuV6Se4Jg9Qp8FUwSDjXKaf8gqoGJSivn1DccwgAoZGP2VdBNjgSHYq71E",
  "key37": "5Jm1RqCTqa45qBQW3Ln5UsoeGKBCMRpQXiQcDAgWzy9qMF6uADWXH67JK9Guofa8e9zM8FBYmkbtw7F2XTGoXye",
  "key38": "5AGyzHQQDTNvswRXi31Jbtcx5cyyCkAY4iwSSjj8T84tjgtjGNiSWFhfNhjaz2G1FeFGDKYnfA7JqHHG63Czhchg",
  "key39": "4vAnXrqWfcHj9UYgrdQ3eSpdrCirB51epXJcMqkywtZmduoLrTSKYt4xi5uG5q3343RSHMtwc7Rhr2Yn4U1K8VbT",
  "key40": "PvFz3kGwg9ra8GG3qFpTGqfK5kbLhbLvDz2N8cLuRaUzKdKjr3PKpjpccoqDzKXmhWLaQRPNAwr3wduCBUCraWP",
  "key41": "3nnKPreXmAkNBwSsqeF4WapfkZHRZrKbzHRh35y96GMGrsSxHx6pUXq5TDDSQL4gaeyXAoDHJ2enUc5Uxcr8LnCZ",
  "key42": "e1YRPiPoydkd24wL73hhopJuYmb5KeavkcumoiUjDA5V2trsZP6hWvsAa6wke7JaEyfmCtQxWToCaQc1MVDWJJr",
  "key43": "TMqvLpMiKEdVCoTw6rgDpkiGrxGCJzLZuGwL4j5h6kAaubBbKhicmMEcmU1mt1F4NfzFjKHSZSJPSdd5Y3ufaJZ",
  "key44": "5M3JLvEh553Zctp1vNritT9AN9t9927gqGWZBG7fney1mbtkdgvbCLUyJ71TdRQEs8JEQCyTqMcBWJ3j2YJSYRTj"
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
