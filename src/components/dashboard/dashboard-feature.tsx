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
    "2yPUuU47Zep8P1KdpUSF2i5JfnF3gdjjEmmjUyysSrBVXhCpAkA94sKTgqgfMBTpCJTpX56HjtFiwpHH9CKM7qf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VNkbSL6THLdUDL8PV9B7dvWK3v5wHC5fgEHAxHfi4q3eSap5mPjrkJjQgtpBDcRt4cnhUvPcKw8wgXrobLowecd",
  "key1": "2iPvfiYcU4rDHru8eYqXxMZLT3GYsQwFKxuvo2ZC4fdMs2hmxuBLgB7PQ6uSxiXqc7JLDrAHjqY3LtYki44rX8Zx",
  "key2": "49i3CdZGucjZTLnykNsT3h3qgbGBXriqQqS75n3fK77Fni11EUMS47nEeuuLSA5c2riChhTZyfy6wLq4Co7gGfyf",
  "key3": "Jb2jNKfEFf5wmkMYAJ4m9HxBKrTBLExoiCPT1usZvgaw51ZFWhqLhdRHkCWXW627wZUdCGTtVEC6t8ZghsL9hDr",
  "key4": "qgemwUCLyQZqF1Nxg7EWM3uoDbaBsm1wnHhbfD6Qz4Y3HGJJLGpSoFLHmiFCqPpTeBqM2zLGLr6p5CfckvJgmfd",
  "key5": "3hzeYppQ2cqy6qjjLcYCKUW9QZLXuB7GrPTvkXQTvLdaMNDkEtCKjBF7fYhuQsiRz3jyDFyE93ffx9aiL3uCWkWM",
  "key6": "2dhh6yMmfAq8gn8kFtDawKork6Fz3mDjFG78d2xCLwE1uj73PmN2hVwMEpFCaxPtzqJ33EsYUfQkFeJ7KZqWQRbK",
  "key7": "5Qb3ecj6Doiso34z8yj9BJqMGHMCWcgboi3bwDf1jK17rv35rRRn52aKM9WirkPsnnTU4isWKQ5nb5vbYhih7cY5",
  "key8": "cLTtakb9oTc79ecQPk9Ujo8YcRtkbEc7dwhaJYPDcYt71sYRTToityis2a7CUnTgVcDYMzSTS12ajyDXeAbJA9c",
  "key9": "cWvveALo3dZBRJ9HRfEVapdCpGJWxCBc22WSdNzmnrcTSowc3MNtXnwxvsrHdNpFCaYWyExMRhqJihKNynxtAxk",
  "key10": "4rYtHnbggJZpzPKff2qD9GYypFyMhS5JBkkRsXqnujbrKANng6YGuaxQsLYm5nzrFTbusBHudNzYAW6SadpTYE6D",
  "key11": "wLuSd5TxWGfs12Yqnq3HomWKZNeVhUXjtyEXnRKpm3o1xzMeD9PniT3irMnAjY528w97Xzqz2F2qDUJ7Zk2UpeD",
  "key12": "4jZD1XxyUtLMUzjNEs7bTcpsYvb4WHbJuNx2eo4pS8yFuBZ4CcBwSuySKq79xRg8Hfby9eE5hSkJsqhVUPq47gTL",
  "key13": "2xSCbii9qr4kvWJYVjN6jm2k4irHnViY7bqAqy6HKEpJdNzTigM7GEh23xQLXcygPJL1rkvAx1VMvNTVjQ8ySaGf",
  "key14": "49U1WKqmYZGwEXnjopgDGEsPsAz9vydA7BgekkdusSTMwZn9TB2uLhQW6eLD6cpwT7pWNu4Luftv9pUbQKdZDN2c",
  "key15": "Xfc6bUp7hPxWwYr5ni63uF5DYf4e6p8c7jZeMjx1Mnzqe8hAf9f4rfXipPoBgT1Y3PRujAtWWpk7P5RMPn4TsR7",
  "key16": "2Aaa1uYLCsaUvT66YnwNgnU7NanW2ebK4hdDDSVJwMd9LyhCdSzko1SQpT4LfmWTwKcj8HGgHJN778mvHq4frFja",
  "key17": "4CcVjeLHwy4KddgMvMrRsfP2CggxzvFVfnBzeBswFnznCtwMsQCtaiZUPpAWt16hUn5ALvC7zpF4iJKoQBJTuAfB",
  "key18": "7sqSna2sGGHx9TedsdFWgxwUvNoYGzo4LSTjc49KG5NbJxSXvKU2spQn6yE66UsrFVZuFzC9cxVkCB7dsp5b83p",
  "key19": "5FJpvai4YNnzWhsBdGsmieDNiNCC6Bxb2FRtm9SNjsiPqaUZc3QihfLEJUJJgheVtJPaxLcUkdXkyLdfwB5NLW3X",
  "key20": "Nim9oqKASJXp1hUHZ65pGZV9XvrKKHp88sTyNupAPBhuN6mhMKuzhW9NvN248aDTzefFh5bS8N7wbdYHKJQhYfe",
  "key21": "4NJcaVHogDcUKRP9SAGNVmuePS311KKw55cwJuCNHZLtNPboz86CNThuMfvtEoFVgBq2Cccfi89qEjSqSS1pRVCf",
  "key22": "3dmyNppSBVDpdmMJvVpGeFPeMXqNVfZDCff21MUjFZtB7YX3Y5nmmn8Sjn9KZH6aWoaC7gAEVQgxx94KvJYREpQ8",
  "key23": "2Fr9oMGmbkjA3pjRhhinZJVy3MDW4CszEjGMsxuLzVMyy2nwf2VBiH6D5UiWTnLmPa6v3WyCUrCfkSm5tJm8BXdP",
  "key24": "FpiUcPtd3pxTkPWUbxcexPpfir7tfSDUzJ41yg9WHyDeMJkz38brL4LJgGSGHZ2jbSiSP7XDgJdDMGoBkU9LiZk",
  "key25": "2EjWiMdnrLEt7YnhJHqcnDWCDCux89YJSvTugzSyYaaC2PWcZdxTEVAwqJchRL66X5x2LzdZLHYKYgEwxcHH1cdG",
  "key26": "voBK9DWmcS62EyawmbdgrNhXPTfNqCofNGygHtmosiXMKQBnDHDrgiYiBnk7AW1CL78QRjZxt7Xp8a1JCiZ6UEF",
  "key27": "3E2Cdj9QyibPbxrnukP7DxME14HnAEUMeS8txV93D8sKgvByesAeLczgsqgYNSQqZvxFYYTCFBegtoGSK5X13TNT",
  "key28": "4Z8iST7Qug4x4piP46xPtuuhM6DEESaAbndKBNJN5TkJfSrFYP9iGeEt3sS53VsvnNBFrL4j1UTpUkhWZBMS4jPK",
  "key29": "38jj5n95tzU6N7TYJVUsiRCizxo3hGvEXAYsvPdP2T4kW9NRVu16bkUKDzPjobwWCMjz7S6uA4r8AJgkHSdeeBJb",
  "key30": "231hev18VJPkRKU5D4sfNGMxvWTQGGLTase76pu72gs7yHc3HtMhcqSgYuPuG4Xk9HV197a6cnowijwhNFdopja9",
  "key31": "rzGNAMka3oaQFfyXML7qoyUfWMeg394jdamdzy1p2gpa5TdYotJbhGib2Cwkk8txsTX7qKkin4uZDTrAykxq1ES",
  "key32": "4HvhsLoKaj14gk9TrmJuds43JKYcor7a4nToJ3y2TBtYKtkEsdKtFDQQ39ckTPywToUepAu9AfcBdZs8HmtDhNUp",
  "key33": "55m9Up7VkMfgFgemDZ1s6ds8PcbexPJcF6fVBEGe6YbEnZBC4ekekbZP4qb4u4Xvw9bjVANZuw3owjxkzpQWNDe",
  "key34": "qgsWzW3REprD5KPQMHYDCWjkzvVwfvDWZf5QoL2rQXkA5T62p3Q4D2voEJmmzaRXTu7JFEJkQXyCMNcavLJbj2w",
  "key35": "2vGRa7QKStHAzARyr6gMSN5NJnWoCiER75BjZa65YKJhPS3ArtpjzogxeT4FwjN8N5stimkV3GiyNSf7jWhb8Yor",
  "key36": "HhkfSUEJe6bE7KMwekLS4UGuaEJXkHA4DqMAyBEvjxmAFFb3EZQyyEB6pijoS4oBtJAyqGpsSWvfhvVZ5AHQZqs",
  "key37": "3ttgbFgeHcnQYLXkYJjVmWP7PFRtdCxZfMzuusNQiy2BzbMT6EoEznHGAJJT2oyi74Es9B2UhvMapmYDJf2vrb6G",
  "key38": "2ZfQYSRkxfJUZF4GBW1tJdG3ZBCKwSYdte3SGfR6qTqhDafFpweH9zodqcNHHGoq4aUKmYjFvqjKoAd3FnG5PCAS",
  "key39": "5R7vbcbmmjpC7ACiKGckJc9YbPbF7sG8Yvsb9y8vHfb5xwCMAdpy5hCKPGUSvaheBZDAgQyxTzKCxAmGta49RRMZ",
  "key40": "2DrGy1PazSGXoGhR5XUqvcbVhvAQnrGgfY8y4eJePmeaP7PdStL172LgLJ7SaL6k18zC3kPQTTTsWf4U7dphAMrx",
  "key41": "3wojnbbGgDC47yeZxUhAs2rzHAFfKoyqayjj31op8WmPvwqgCJBXrBvuw4G3WK5oWi5Wviwqv3mu41dfmj7k2utt",
  "key42": "52LTJq7iu7SbX1GUNa9GseY6DYhbude7biPaBdUjvhCQLFpfbyNFbEaNVR2DjSRDeqTiqcQsQMvni1BDWqU3NegB",
  "key43": "3n3V9QdxFSC6MZrMNkxa1QZvd1crHMrHr5DscnFiR6gWcY7TT6NvSTA3xBvir8xsdQHrDFo7CFZgpcHw2ZkdEE6",
  "key44": "3TTr28dj1p5g4ytAGgMQdsc3nQsyGmzrbJ4KW4PWfna1U9qus4QfkgjP9rCvHsaZDeUDTPGytSzjoK9PpnF8v1xW",
  "key45": "21hsSFKnyC6BayKNVTxsMKZqs6Afq2ULp6mjY7ET9oxrwGDrM6LsR7vzGbGvo6fxqgRvpVmRAEpGpTafEW3V6hzB",
  "key46": "5yP5BpRDb1j5FvYCc5twFMYa14FWhL23LvMrywsy1arfRofRFnbosPbnNwjby6qatbKmfLUDhxcwavGs1WiaAT8t",
  "key47": "zv13vXca2TTWASR1ntrpTh4kJ5PE1UVtGFZiRQKmTH3Ec6gq7WAhdCo3PjWGaN97hUJnKgQh3dANjg5DZBtuGpM"
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
