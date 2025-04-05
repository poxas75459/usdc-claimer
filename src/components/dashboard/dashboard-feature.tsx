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
    "3M6t1AKiVdMVNbeM1dxtdkhHKNkwzxyT1443DRR5y6ijsCtgmLsPD3Yk7jvRpm3wMccqP9MS4zzCJPdkH1aiJTiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34pMRwNo3dpWgNa6b9ycSGHWLzphzJwSxNWJmwkkLBEjWpgpQKGgM6jQvLc6kAk9ZekoXqraq82S8LiNbuvcnc5W",
  "key1": "66eMEf2H6wcnoLBJoUc1J3wrfNy7NfsBwGqq2URujF4cEwUf4jJDV7puFpC8Zpj5sx9S1xx6ipwGxmZLNjioeuxi",
  "key2": "58m53WjoT1hAtNds6ez8xnu77idXiByvcqshfDmnWWXepHqLs9Ae6bt4F69CS4izFkqg5dUoh4rNgMGNSNkbnx5g",
  "key3": "2HzeQXW11TqXEB96FWhxX3ZwAGR6pzCndMoE61rQHX556o2ogTxrSioRdn4SGFkUPk1appMGcCVTNK4sZTy6e7TA",
  "key4": "3FSgJbwBwF8HrsMa1iknL614K3tQ3uRG642a65ghmzjFSNyKxaApQemFnhvePxvQFAcprsr2wPWow531v6bnUJxN",
  "key5": "56mmRp31DHP4m7riQtorEG5h6u76zBU5HnbFKoRDQnq42jK1t1EcRBZr4SYmvRVV4oswryVUMKHffcp6Jpv9QRnt",
  "key6": "5uWBzWQzKgGCaVomg8JZ4HZuxhqoD3WKGePogEtXRa7BNiJ6uG6DwzUqXRPFZ4hWdYuLq1QE7eAmATgBPTwtRsHk",
  "key7": "6327LcxbLUhog3i2aSshzEqF1FFWCRhvxqCxaVmHUj3Xcahw6Gvja4UupWgA8zwv6zyspnEt3Xb22pVty6ufo9Zt",
  "key8": "3ZpApyt4eREK1tf15tu2V5TovNV2VYzHRZ4hmnjafPztUTRVnVtdatjx866ZTvp1M4xTxPbaNh8kRUot54vjYSJu",
  "key9": "2vZgRp4EqqPSS2EuMvNWntD4U1UGZBoxnAUTcR55ndHWDdwU78EhSQH8m2t22Bx7V9gMNXDz1Xi7dDacZfBeYnVX",
  "key10": "4e9dr4rQp3Sq5zfysKW7yQhgfy86JpdQwWPod7YFVEMf19JEK84M5JJuRfQqgM2J1GSs58GZFv5banVrsouCz8yt",
  "key11": "6AncezXkci25kCM9Gt1DB8qbwYW4S9gPKZi3pWLLRgfAyZYXCXNZYWsUo4bgosArqNbUx2FUTxqnoPyLA7ziPif",
  "key12": "CoHxBVJydk4nCPfHD8CYHoiCRSrD6gmcXJpuen7S9wAPghGnQcCSuKfAxhEjA9FRxSf27b98zULgwuiXGXZK1tw",
  "key13": "4RNhgjSZb1v8YAW1NoiQRveu7j7o7x26WhEnYU5LYa9KhqyypaWYzR2nWdYMv6tMiKKDh1tpBg6X8TnREFAnAW1S",
  "key14": "5Lk4799aY1PMVrTuEp7K7afDb2CPcqh6P38nCcWybc2dwY8vmfdvcAVGHzdwhHXKHHzeVrvu2NgkpasTrbvCFxit",
  "key15": "gLgUW7g3NgETb5iYjnezsbT3kbwifX3HtWXVpTqGujexNfkwf3nuVAXvfevqH1oUpdDYr3KpPvrYYXtPjmKJy6k",
  "key16": "2JnML7FzVoDpCZ2J6CwVj1cjs5S4bZaGt75Zew4JCtf9yf4AHntiYenwvtaeZaGzYL6iLdAkP6VDURhWxUrjkGUA",
  "key17": "3SRTj87NNLVhFmhzQisQYkYHPyHAfU278sn85QuzCXsx2uo1iXfz4bisCMWMemS17stgyr7QCuQrJ3LLSWVX2Vy5",
  "key18": "2Vn6Lub3tP61xPEexC3ZbTuKudGkD6nvUXT6dcbUWdBuaUrjE5PpBAwYhn4nDcHxAnFsMTWWuxfnjjTZKcA1rJ9",
  "key19": "5Ct1G1KtjSqYskeQXP16AV9k9egkKj4z32UBHF5k8A3H52PWgUumb9HG9vdw8xbWawYMz2H5sdpknR5Yj9QgipLB",
  "key20": "2JAEZPYZTNjpWbudujkxDREvWVZtNbohGWBgkw63uf8KKETpS529BANoakpGwb4Bs9WBUpfCZnF9w3ex8EVeouoo",
  "key21": "5eSyzqKsr93SDQQWJW8R3Ycqc6UrDvxWvWKR8osYEKZth3XWpCYQQq7oVHUz2SVeMntUN3R9PtsN1uw2Spw2XCHW",
  "key22": "3XJavrRayfAbieDzK9Z7p5zni36HPturfD7KMmjdaifccBxDKZccg1Lkm1Ee29zbQRyCc5iG2983c5iFcHTaG1Hm",
  "key23": "4idxew4aypkoA919cqinHf6rU6SkkLpZwKSPdRCiUwWh6k5igLCMSki11V8bvVpPUaKJVTQTLRmpGmtvXBcmBeug",
  "key24": "5XdStuZZmiVuXRH3h5pCMyS7YPXFGKEpMbSR3hFJYsFKa3FvnGJNz186anj9aTbvXR8Yjpc87epu5Nc9We6VhWVv",
  "key25": "3AAqZoWDCwNw3Mx8Ur9wLy9tgPrZAJG4wPdz35C1gQnAGoHAahW5dVKrh3Vg1fHGe6LN5cqC22GAKbepb8EuxWLb",
  "key26": "2NvmJKtLP37fp4M5zuYDFmSafVs9iyj7zk814s2YKsKvHZpyX5a5ZDizv9unoAfEbJBqqc1oksxTT2mRidbFoPYJ",
  "key27": "4dtTgyyVJ6sH8SXz9Qih51QSnYg5roZVBj95FsA5wFbR5Yt3JRchgUWzMma8DWjgy1h49P7rFjRW69QBJnrCobu7",
  "key28": "4kodPog1z3oBsUbrfKKTo5qXHrU1TE44B1MXVkM9MEnDjeKzbwLb3k1y3RJbxw42mmKC8Kii5tQVKCZoaSnGvrxA",
  "key29": "KExYW9ucMGhzXyM5AnNZ7hz98M8wggaSfxPjRmTrj3Zd15jEHtsJS64QwTPmq7am9bnou2bmLduDTx4qkDFdd2z",
  "key30": "5cpTsZLTMMRVvEJQYHdbD73FryMT8jvEBCnCNZF1K5GE7xkc97iMnBk7tmKZxaEGMWw57GPgkt2eV7xgopwE7V9Q",
  "key31": "4Srjhtcw9ohkJcB8TTgSU31amrBD8GNLB1ukxfQCJ6UAzGcXS7h5A1pXczjBZ9kiPpJi1QNCsTM7tqCq9vQoMfze",
  "key32": "5HWA9wqV3A4DwVAvE2swkwet7LGvgMg7syUqJNkpwQ7FXqNo1eNTR8S3c9bypqbeqgoNrPwT7jgvM1jgRoXmacty",
  "key33": "62C5SuCmhzEm6goENWwYLSEQuAcsHQ84tHsRKMEBaH5796r6HkGyeLJ2eZLVMzVHxNDu17tARKJu9aLi98REoY2M",
  "key34": "5vAXjGKMQktW34uEtLaWbbcSqFade5ek4NTUpnkor8SAAiyK5pNcS8n5iMgu3ozS5kTtneVP13sjkhtgqv6DvdDM",
  "key35": "5dVWH57GYHH7PK2Xp8CpzB7ZXDx2XvCjFFujE4exgdhAWc1rsgSMufMwXYU5KbZ4RSv834P6drC78TqNwfDoUyCG",
  "key36": "4RD4oyiuJpQMqr1F47qEb3gk9jRkdJtmpN2tpX8sF29K7vn1rQWoBGZfS6EdSkf1qfCBzy2M6nfNMiZ5a6yNyTk6",
  "key37": "nV44fnpDzwakq5KegtmuC6nNmzKTxprZAs2YX1Jj5nqTC3mJezRV5VJqoTcCwrBJJXdFW8G937gSv13yPAmiRyP",
  "key38": "3aUCvkddBenmaorPcPmH4YbepQwj7d9mk6ufd3L1d7eWRLg55A8X9zT4hfHsFh1ch7sHAtjE3unoZdQxsiLFVAAP",
  "key39": "43z7JeAyX31ePeHrTu2eUEfqHs5wH26HNSWvjFwV7eyBQckNjsjerHH4xMQp1AnuWCxhMsNkMKPC1ErjX3gL1aiu",
  "key40": "5fdLW9PtuqDPR3up9WkShk5kw7M1kQSueXQQbiPVDrU4oqxuFJD7132TPJvMjfXi6xMzzmH4DDVvEpCwsYpHyHmT"
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
