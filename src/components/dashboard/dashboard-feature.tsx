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
    "cVTCSFukn54eFiVwwd2r5CeooxLDsRJqjVDzoRw7DVRooH2t8tfXTKxBkyQ3EWYpQjJY5oa5687VqkXyi6yZ8YY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iucxGDZoEyV9WQgw5XmzLf5fingEt4v47JLBuF5x7FxycZhzmoEaNbZYJwTK2Q7LqEJtdvpaRcrT51srgY4qJtd",
  "key1": "2A1xh4QZhkAAG2xEHeodvoJqUjua6FvHevAyX3wukSDg7ASiAsbVX71HU9LP5SBAz3NUfU1W3T4PPS8cPi9MqACC",
  "key2": "3dFpAGZPxE877MVuWQUsBfpTbKCwUNm2ptU25zJtTwXbPox8wrutHWydBS29kFZDJYc6SFKoBRM247amt83gHwjo",
  "key3": "5YxPgmU354SuHi8eDfpqA4ii8QqPZDoBvJQBHrYZvDqZMWRgCjKhx9PRKdC3uRLh2iHXFrw8aem6vJ49xJzpeRDh",
  "key4": "56V8GEYE5Eje2etbBLR7UJD8ix5Ums6zxAfiAHuCQFH9kPtsBvmv8f6QYow1hb54HYkZyioFBxaRpEjbb2N29KQN",
  "key5": "2kc3FUytDbb75npEnDVdZ7bdAtd7aZKuRVHFdZcRKfggAa9o4K9THPHVGZQ9AuZAqEcykP8Lg3MM1ifzJE5N3T2N",
  "key6": "3ztFi7P5wH2RW4eaDrSyEq2qq4r8Dwm5ycFNCti3wY1VrM7FCY11DQXDPGuczmc171RQaqf5mmjnLJyzJgeSfhve",
  "key7": "qi1q2W65wWQPsG9twjcxkmRMNn1vDwaqPk2XhvJ6jTkca621c6UE51yKNATdQXKhbRRHV1CNm6fLACC8ezmXbYU",
  "key8": "3Wa6TiwoaSPyoaYKLtPviAEuCdJnTAKawAgsYJ3PjUasGMiFQfNjpC2ikmnKDBZF5TRQMgZwtnwVo2PATPmmrT6A",
  "key9": "cSjjiLn9x8KBu5TnatNndPYScpZdZvrKGLtvYmmd4v6UHZUHYPZ6tF2LQzvgn3yCb4qvacnYyx2fPyrsPeXanQS",
  "key10": "4bTZfqPa1Y5QQi9BtMS84gjU6iBFzdLb5TNBG9Nm2mowHpWiyJW64hu2Dxn1stojCFLRf2okVGp8yPaPthrjiJac",
  "key11": "2MecNeeoWzgNhsdYW5Mo6hjjwq7TNQ6keXB8LPT34hnQvsN3QKjAMSpQDaCwC1DEBeAigoakMEAySqdX51tbMb3N",
  "key12": "3tW9XVjUe84PmFsjrDt8r81Qb31gA6yeGSJEqUbi36FREr4tyZNfwaSe2SxfDiXxZbHcth8tPgG8L58mPJcC5ZZC",
  "key13": "4BByRa9SqM8HYZfgYyrFHgWrPLLYyqtM4Cf9Cngu6PD5ESLEZfkv6mRYnSA3CdYaU1kPWzQwjbEwTx3cj38mAqGR",
  "key14": "5YnrH45kcEPAi4fhLMTd2FyQ2T9rnMN2qfTbugQYznszmx8pmVotG2XwV4HbgPzn4ruwCkf5zSVuXm6iwaVPKrAQ",
  "key15": "59KYBUf9GeXZSHPoYDWzdEBAb8VPjbcKGoMiJ11uXmCu5Ve5fLEcLSGsGHkCo3UAQqx8uPUzWwTfJkpRqfH99seh",
  "key16": "3XZATBpWmxecF67kLRu4jfUu3cntipreQagibBrjJfo4uGUifSasrEJ3TT8DXErzfg4peBeWtRyUm7Mxx7ALgBgZ",
  "key17": "2P8MsZSHoY7QMH1Rct3EAMsMV6n9tV96Ahfn56mdbEoZtzS1dECnSbMa7SyEcFersyaC7oRwRqq2GMrPBZVPXDeS",
  "key18": "3c94HSGHiKbtCkPbPcZm223ZmfUUVHMvHSsCyeV7Eyjuvvc2VQB8QS1N4chtHb4HFoS6hxd5korbtk4Fr6kw2ZT7",
  "key19": "K6udga2WDtfqs6RotbrabRpUBtvaUm6TxaHBtdqwhhFmUqLp11ZBM234kQwd9xCqFYnEsM7rBacubWEkQwb3qzn",
  "key20": "2ya9V9K4kxV3kqmXAwaiegnhruy4wjqKxNdBUxn6NLM8GWxhtuw3ZL1dv1bSNifqXqiV7Xxc2xkCvn6GD5giCais",
  "key21": "4LjJguw6Kuysr6pMpgrLJ1pJJvohJRVSjUwuKpT1bN2JMvowbFq2BTHjZmPuL9vNKpbUhDtgzcwpKUVw4rq4CAQL",
  "key22": "4BiCSZWB3Dne124oJgZtfyEY9ySbZQ9MsHFweuT1kRujsw5aYQsjNzgnFfcDovrKKWSMnb3QNfPTrVht7JWkbg71",
  "key23": "5VvPCwJ6SQTUthzQUpBpH1h9i1gNdAhoUmBd7hqp6vPL4QvyoQCuH2jM15u1W6RyYfiL5HLwERmTCfBW8obrTWXD",
  "key24": "Cfg1kSS4kg31ERGySfDcLSAP29o9piU1AXqyX4ekkP7T51tsepVFDzA9jty23XNoBJsBM27UZTojatz3LY3R4wf",
  "key25": "qrFqFQYghM4mgAW4xipy2RMrH1a7kvwToTDwkDWhGYifMD8GEHwjGieV6zezWw1rNVsL6pquqL1gJVHNPVmchWo",
  "key26": "31W85HPzRrHyphEmQLT8scB4cZgEuTMHp2ubu43heoa8ZKH74sS7Zfrv2FWvAdztnFCFGYULZqnLUimR2j2kAZUZ",
  "key27": "62p12aJei8tmtXupZGt8q19xVyJA4ZYwE118pk3v9uRSX3LW4P96hr1PzocKxSPt2qfpVnu7Nvs1EpZG8kpneijt",
  "key28": "3G88qwzRBNAZbnqq9fAaantodiH92vmndK3gAet7vbE3eJtT4LqFuwdc4z4oB7VDw3sRKjoc5cqPtpgs59tGAY85",
  "key29": "76ovtqKVj4LiPRDSL6Tt9vi2G57Vpm9o3itdG8qUgjwDqUJwVZr3v9EYKKZqppwELgtkuSXuRNtkKFAJAMTTvUC",
  "key30": "UgZPwfeQ9ujg1Yb9tdA8z7gvX9nEzT179xXKVnqAzRCw32hArwwqKsR9YEVqJtAEz7izrtPK6JDPpgc19SJ374P",
  "key31": "2Wa9Btan8nwAzgi6wRkgtAGBHdDpY5YzMUh2cdTX1ZqZp4QCTf3SoPDJY3UsoziTi34GAMYGNWfitZbbi6GrWCP",
  "key32": "3uJVt6oe76hvbzUovHCmo8M5eXhQuN4iqeABJvHHPXThCRKHj2qjc43KrCKxkg8LP9aFpfu2hVSkopQMV3MycwZ3",
  "key33": "5wV2iFqKjB41nYzYuKhvAHgtqPyWC3yK5bND1b6vnbEtTE1L5iHMCmvPuqjtDonGzFfAVVxkWL6ZHhkoaQtVQVYG",
  "key34": "4vV62DboN3bhv6arLK1MKorxAZSEEkDCuD4yeEkwC8JbNx4p8qBrDZe5QRrS513Jc4M7kptxj3n4sRjG4ChUyx4m",
  "key35": "55Hp7qFtpA155gG9PuV5rqqoDqWJ9WEC1quQMRVcScmhtxrSup8vbTBh9bHMACFgMZ9mzf151AJ4tkk89rQsgqbp",
  "key36": "5G3WaVfR1JX3BzQneWqWdu6pKWU9WgBmzZcmLk4v7Wa8tTbBW5aXbHPvTfZvkqpiqEPAV89212k6mYgAeBp97AJ5"
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
