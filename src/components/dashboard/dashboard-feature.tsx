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
    "3tRxVc1wfMRDBfnt7knpe6boEXxEsh262dZTqdPy8VohdzhCFPpNX1GGf4AHTVPHpYgeePbWLR11smCeY1krdbFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66jMUcbfJMQmfg6P879pozWX7ddzTGXp12jHeMJGCexQXb3Apt9bnSM5wV9E4drf1zdL2Kha4cEptwtysaxBJFSn",
  "key1": "3zo4YqVhbE3AMKtkYHrDFNTaPmLXzTzvzNm8Fc6wkU2UP6PHirWjFZPPmVtJAd3u8GVNQTAbbXSsrLpKgTLDN45L",
  "key2": "d6aQ7jDgVPeNnRcwMUGV1Sa8Rn687bDzfCQMMSZEg1tC7UShTbS4kZaXwmj6TaYHhV4LPoqnLhaCr2qv9uULdmR",
  "key3": "2yvsqtSwdvwB72gTLHdRZe8whLQJrJ4pw6Qga8NTXKYvK8oXTdNJytQGq6kycKGFbDsjFrzf5QzGnvCLXHbZ4g6e",
  "key4": "CMVCvqVpsvLraR7kBtd5rjPCY6aMDqnsnrCNevMzdyJuzVvswuPwAzVQHBuKuacL2B2YHQn9Z1qkLsRuamgk29M",
  "key5": "39qzDyhfCrYkU838Wb8fFDHi9VUZ8bfUEJZS3yQ3LyUVyRnMwmthEm8hVCrEDv8wvsX9mk5XuHKwFLMZSATYQXqE",
  "key6": "4azsM81yVXaQoEXGePcLwsBtcsWZpa1SACQakPK5w5Mhfyd5TQVrxPMrWBAV9mmFJJdHi48F5bUJfqU26RkZyumf",
  "key7": "1nJT5s5J4V49iPdYyWyYd593GMnVdZscbu3pyF2BjrJt8bdtuMBcCjjzDHCH5pFsdiPTYqTGetjZzDRLKNHRoXW",
  "key8": "4nU65Y9sFon84VvA6nwxy6taWa63VTa2YoxF2cjSbwCjnvxJ98m4anTDQcHomqoU9b2kXYFNaWgnh1bPuPofKJfd",
  "key9": "3HQxM8nN3fvR91GVqNtkNmKexETkt5W8Xfov4y35f3Eovgzd1WFLDfeBhvdHirEYaBzCeDDXZTxrLiyVFWcpSCuh",
  "key10": "4xMd6KiRD4A6b8JawNzXnsBhzKbJsiTc4ZQUYYm8vUqx1ehGoFrt6ihxxV4WvaByk9V5ztSySe8s4Vwh2StB5d2M",
  "key11": "42di3iYyV64hvvkx2HTYbkNbgiSpswxqwgsGq6kUHVx9FNXzMY4TJWPREdzfCxtt6xogmtz5Fod5Km8W5TQB2Js6",
  "key12": "21NBH8bLQ16xufej7J7AdrJykfVZALQdoADQqTDXmknNXY2CC1VwmCqKH27H94SnqAMArD9mwfKfo59M6E4bAm2k",
  "key13": "Lpdd9NZuWsfu8C688Rb4ugnt4NwEADr4sYJ1yEXxCAcKrnhheXxvF33zywz1uTLyW3FtDQofPU6by33JTFL25DT",
  "key14": "34Au3xDrhhD3Ycf5eGmxdMDU4uhgAHKTyFxSYxgdApscdDRBRECUg1hJ8WwQjmhyCffRPiReA4vxqLaJuN7AP6V2",
  "key15": "5pZH12HVzWwqomwrqJvmM1UYJ7icwGenzuwH2GGxMSJKLXvhNgbUELykHfhonCVy5eANx5cWPgu2TgcsfYz76ZsA",
  "key16": "25A7uTP14YnBnsqLfBEFNsAHGJ1x9ndPYWGm8a78ss8n8R31RszpuTSBiRc168SSFj2UwdAkqgQMu641kGdz1SGx",
  "key17": "64ToAthjXdvKG3n77C2MbcGwpNgxvyQ7fhpCb9cYqmhP8EcstBdsGy7oRS1PwNgiX8enNa3fYVFxsM8XDnrr68z5",
  "key18": "KzwpHR1DKQ7f4mA2gGR5v7LwNqBs2y4UwBPncBSjYNkY9T1tDK3TtpCSV6qDbxJXrQmD4ENj9uk7pD5BKTA5js4",
  "key19": "5eQNzL5Af1Ezb3U6CGkuDzD4SLCJXr97sM4Hi7tVMxDssydrZvDjYG9UvUEkcDd6ZwMPD9ddZtPEnNTb3SuQFZw3",
  "key20": "3E5ZqXZQSepJNT1uNx9i2ugqrfN4KVZZNH2CLo83iqPeQaHMZp44pEQFaxUTFv8s9p8JVStwkwCMFUbcsWvaGJdq",
  "key21": "5wV5QHaa96KTxbzQQVCfxPr3HxQ333TTDQULjQ5iNZJkYAqu7jFjB1v1hnXaEMZVqLsGmdvCUg3Lh3xGiefspVCb",
  "key22": "2jkPCUrASBtp42817SNUrnTRCVCoBHnPzABKpuqams2PDnB3FJZv9gfSSWPcxMoMzsNAqHmMx2qmmuyqZkgesE7T",
  "key23": "4caTpTTAhsHRjqkv8cx8TXS3ZVj6nQZRDfmPxABoJCgUvtFu2K3r1mwJzhH9NhyYnfGBzjCLUFhYmULhzYns8aSd",
  "key24": "5xXwZpqF9cGduPxbXmGBDamagSTBM3PiRttaEPwfxPuKTm6AA4URoKJmuzGmhsSxT6PkWEEWq2vB6wZKAxT4uXcV",
  "key25": "4njps8H2XsbQeacQX8YivdtieetrKVEvbZYhuJCr7EzbfVQecGJJWYxaA8ykWj4pXXyPTB6WBNg9xk4qVxt1rU4i",
  "key26": "23K1NDyo26YGTwitX2FnHt5zGwGtV8c8A9aPtPbfqeud8kXjiXSwDXX2EY11v7mwREWEkkpu7j8zVuu5UghLjhdU",
  "key27": "5GWPo9cZEYiroEthgr6cKMa9wPkEcMftivhmkGA8p4ec3nybr2PUVWRn71keiWBfUHwv2DMHtboUSvWxrUPwvtvk",
  "key28": "5jFdCsjzLnmG68ivAtmjXS1XijgrC6pyTF8VoYMSfGFd9quwZU3KPAuszQqVYksWqfVAByedmYRNKZjqHQKNXDzi",
  "key29": "55QSr1FGUs37d7cN7x1UJy6ayQLjhG2sogbBk8TkXs6txfcAtz6xy1Fu3D4iFHV7uMtJRxELkjFszKThgvZ6FZws",
  "key30": "4ghQLDkSvSGbCmLppjy9EKG4YzoWN9sHHn4DJ56XDfU4rNkg3r18n6YY9CP5SAqjcacRhghaASgoLd5omAKRVQJR",
  "key31": "3kJdjx186PJBBDU6w1tsebZZJfP3LLavqpM8e1DLaXg3MQaEMiKGfejxDQrHMRjkzQ4bf87xf2GoAB5teeadBvv4",
  "key32": "5jFiv9j8HFEGRmT2ryB7aqmoJYaAjPox4YKaGR7TuMsJ9AXTDswn6we5FBp3Z1gbgBAWzoYAw7VfozU7KNFSLtmR",
  "key33": "3fQCjpR1b7u41t7Ur5tD1id2yepdKLB4bvL6Cn6jrTNKgDobUnAyqzhyM84ZV1NfNkFjqLApZiH9Hb5EgZ86jsz1",
  "key34": "5rDtPysFFu6DBUdpYUDfWa9KQvD53gevHoMHZWoTQLUsCZLwrVkT85dYJEdecaYfBnJoZf7paBmjJN43WJdKvc71",
  "key35": "3fwwQcrsrkkpiYtFYT2bQwEoJ8CRbVrcTaajJ1EANQNtrwPctqGfhnmWed95gifx2hxpPgAVn3PKZrisU7SSApMQ",
  "key36": "7XvrtgX1aRqeXZiw5M9R6bD1HwWPyFYBpVdfGup4Ew8nAwE51Y1KmFwi6CVt2YSpuYS4NYjMVrjtFKcVmAs9LUp",
  "key37": "27MsyUrujKxj3LUrLJJ6fzqR4n87M4yVyf1aKkJhcJDnFwsXWAGk3NokNzQN5tzgExEyqKnPr4GCv7i5oFCBHbL4",
  "key38": "53mmcjZZaubAKFczAcSJU3FMv3mCyLpNDFfhTKNDrDds2xiQ73rjinqjFUVM66LsnR3ebV8iJKcG7yEWSqj5CeEE"
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
