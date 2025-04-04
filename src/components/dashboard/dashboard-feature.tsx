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
    "5h2kkMuTrCTFbjVS2h52Brq6d2M16AE7FSzbTuLrKeVnAr2nj7Gb6ju2iEhRiGyPESinAbAfDs3jYawTMrdQdszm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23CzprWfxyyYEQJsn9ruiJ1Zahe3yeAPUaSf8YzaxsTGuG4ZT53FJ5ZiYFtPvk2E8iqqo7pi1VtxrmkwdWFBtXWn",
  "key1": "DKVEhXFcqASbsYVjhpwPVWfdwos19m2p5ZBNcSqDzn1Q6WbXLfdHEMR1BcVT9A6eRxgfgy2BwigjFWXFbF2RQZj",
  "key2": "5a33ojhm7cD2s667Z3aaKVd8c5LHM8BMpyZqQ26SfGrjKgaYMYmUyGFsVT2pRZvHRG29EeZkT1P8NBo2R53jGDBc",
  "key3": "4PU5U4VMmdyTPUH7nsGkREuRpGCtHGHXRhDKh3Jrjep5Zqt75BadJUsDFcgU3FK6xyzNoJuXPoY89CCzdqV7WdYv",
  "key4": "3wj99WJkNRo7Vrw67oT1oFT3eNHV4sC2d9oRgfRwWZPFPxYhAfKdDMjs1KnGYboj4nMVsnnTKeqmCvZnwXv6xTi3",
  "key5": "5dusJCVBZiANuxsxP3MLQGTLXFpv1fuX2Rn9K2K5ozS8A7tcMsqaer8AnmiB9AaMc7axK53o2WtAF5cUHqrnoZW",
  "key6": "632XGKySpmpBomDyFhDD9SKEQXy83yPamkz1Ug3FrJ2pkb5DDHqdu2Nda7BBKsNTUXWtwNYwE8zPuhipgJcRUwGE",
  "key7": "2PJX27eutgEeXv3aATpU8PQUG61DdhFLiQyCF5atvx5Yo2yVzzqPE4ZxSHuNiR4TEMmUa48tA25eykjzvRYeiF9d",
  "key8": "2goPybHRQdKvvDEPVHhmJCiM8ccMR1PncHAqPQSdsDQnGny2DnP3maV5UWDy1zUzAYoU4wDqKbvLFfawRgX81cyC",
  "key9": "5VrCaS6gip9JqA1tbPUE1X4SNACwwbfmaRHHTbTnpgVZkeVMo8tK7AKTL2UhA5eVEd1pcLTq4Q7kLXNMf7utj8tv",
  "key10": "2dCC5nWdYNXGpLqx44xAa3Au7fpThHJvFxT5qMmEi1WRLWRHMk2fHeSjJ9j4B3oW4ZFeLc6iHdyet23tBgjKra9q",
  "key11": "5FKPwnfXnatJKxFV8s64cjCSJWM14HHHGZaQS5XYft48q8LGxQLu45ZyHNDAsMKQkxtSD7gyoKC5GkUuJdv1KkHE",
  "key12": "2sLP2VTbefA8MaSFvs6QnQ9FGBt1rLvTFmeKALCDevDsuMHFoVNCdWZ2zQHSB1XTJvjRTbEKk5preJmJMoupCW1t",
  "key13": "3TQ8BWN8YFuieX3CiucX54CKc5AkngaH38LWM4bY77BHwpLiEtbMrk4KrnVggygGbaZbMmLRZ1ysC4NJEtDdnA75",
  "key14": "4bhnMaXDLL8CvSptJAHi4YTqTxRHCVnki5GvrMABUpg2oDQPK8zRQToqk7UYY82nCJ1u5ZsbjAZCnccPrbQu6Sre",
  "key15": "5w4V6j18hcVLEBqAxVRe8BmJ4TYuQhDgMU7JwvKnsqw1pab4emMmxTgnozL2VvAyCG8SHLhVXgBsd9BFaF2fq6Ai",
  "key16": "4Z7qyrFM3TMDThToATqmCJsGSwiTBCDzpXn4bNo8sW9LB9EWyahTTK6hPo1vdHt2cB3pZDPCYFfbnBLMXcYdBZ59",
  "key17": "64oDdX1x5d1pxJqKQxLRVE3FwLgaqcgoT7EJBz8ECXVyMumzL6Vo2QsNuiVKoNBtowNanyDjaGdG5U61JPDauo8x",
  "key18": "KRoaPB3VmRo5XD3JkwCFkhJspVgCVsjWhRJ5urSVPJCboYBALzb289ENT9J39u5cMoCoSwc6TVWAK7Yc2N68vfd",
  "key19": "3SBoiDLNobn3ro3LU5qR7xBpNHjd1PYSr2ZgNaPeQizWk9Qfdtvt6g4DXS2NSTGKDgc4iwN3BJRGDcxQGAGUdTe2",
  "key20": "3wzhDykwn4oQGW7NhipCA6jvySiWkJF5Di1qdh6N9qCRhs5Evyv7EvCs4wYvk7pZdyUHDy8gWrwA2BFgD8hdTk7v",
  "key21": "5arWHWSzFzvxak82GZeG1MNHZCT7EZ5mizfYiho5x4GeE8ge8ciXRMapQPYqvDNAGtXhJbEkbaGEY9KDAp4ictdX",
  "key22": "37A65hMDdioKoKAzj59cQrgk35WjEWJw3VxxYBFjD5ivjYkkFExcZPKeq7SKwxvA8w7LZvDLowWXcbK2vM1n3tgC",
  "key23": "XuYXUem9nwbPFm5xT5Kaz7YpvAgZAsdvyWoD1yArTcUorXgLB1cVKfNjBVaSxLkkLqFu7sq7KhxNYuk7pjt9bqn",
  "key24": "4hrSVXeG8QUqDLUTnzLzsjG4yyWYWCc8avtMxEk54asxvVk5Y3Kz53XhJUzKpGjp18rBrdsU63VgYJwFoPqJyhCC",
  "key25": "FpLyhHDZtSKBLn6M1KBHRzvbCYnSssqBKATpXCUHevF3Qab1izCGUh4nVUUNrPM9R8o9ysrRjyRDmG9hg4apGdA",
  "key26": "2sZgw3rRZH318DqwDMYC2MXwYYJ1n1QW7F6H44ozY7dgW9gUXFfZX4Gw5EFXjF2amRSJAHgv3j1d1W1TLRr6sjBZ",
  "key27": "32YQzwapMqgk9cfxTwCwRUsnYC3tuRx9RBbtpPESB5663pzGwTm5ZDWrxbxdTSfPK32vZyiVZFBoU5KMoBPM1T7c",
  "key28": "5ynCgRg4fHPWydc8WwAvpBLwV1TaMByCvzYiNMteTVY98DrUnNjnmdrfAQqLDNvzU7Aa6AncuMAMdSqGWy7ofPJR",
  "key29": "2p81BPkboNNjjobrajVfp3HvMTkGH1WH78tsxzWgMgAvVMLYi7fjcwykMHG1B4WVu6qbqt44pzKTtaSAaobdgtfy",
  "key30": "3GPcPTHDLaYYZeJS9g1zWHGTPPGVA8yZiaR7EWhNDhyRyQfzoysABNhEBEFnLPWkkdenPmHc9ynwVuXFtF3E5xjf",
  "key31": "46aqRgJAjnqMmWHwLruTcvrovRhmkogugkgqJeDwH7jxV4rpkzFjNviJP2ueCMQvnBy8rRfdagWPF8GvFA4KYjhe",
  "key32": "2ixGBtszDMkZGKAcKSA2irK9CKH3ZokA1M5npY4FXq5MybWkddBDHiQMQkZLM3WUYWaYvHckNGvWwb7AQPeU95UK",
  "key33": "5N9sMv2q8RdJ7e9tzdFvYPwzrjte5wPGKr8mdZB8WoGVMG3bBsvEJWbxbd2LXqarsPd5wpgRujGZmz5ux1NR7Fqs"
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
