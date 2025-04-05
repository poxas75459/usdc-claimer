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
    "4TxRP2xBKTJ9zYkMrE34Uk9Jsif98rFsFFDJCAygWnvs8kgFeyCgzw7h97TtMdYJMVAUuzV36oxde8mjbS5YuLks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nhFdhjiBFAn4QRg3cN1Ssi2DXyLcLUujGR9nwox3i9Rec4Fdx71d5XmxPJ8veCDK5r5qtuN8xL7KTmdhgR3bhaj",
  "key1": "4M3zZjiyMFJw2hpptspTmzLireLiP3DekBjvUreygJ83csRKj3uPkuedDrzQTvnqHeVyuRrXTMvEE578VQofPHpS",
  "key2": "2uxYUCwSxyNxn7BNUwudgC7sXwEuQEHjTPP1UGtocwx59RMy1QLCFPWsCYUjnVSH3VxvyiNGzP59JkWpqvFFB1yQ",
  "key3": "5yCFbBfrwz9cTmCnnSuscNvJqxsxmKxqiB2zt25vzbfNcw2nip69wogrd1arJqYWDgMzjLyYwWAk1fEcx3PdMSve",
  "key4": "2eftBRfpGMfJix4jbqpNMQrA2Sbr5WZs5CtKaKvuyK2LDvPQiC7FfQ6YXGkJNdstQc1yagE9Kd5iEwCJUbodNJm8",
  "key5": "5AqcBsghVXBVUyhucCDtWr4KpeoqSCn4rU9uJyFDV16SXdGShHJT5TJkv4jxGd94SY7SWPuh9XEb1vydUCKSwMXz",
  "key6": "4gHsKCRF44oW9V4VLP1Y2o9AyLaN7MbKh68wykXehZmX6fYUDBgzvyMavpsiTYGBXHVtX12qGb7DussEdsWxfWM5",
  "key7": "3rm7HaHLoxSEKcFDkhYQdn16GzhjBKrWiWMCjo2mGucCz6S9Mp49fSCK8gDRRruFTPtc4sf2FDH8j4kmAZn1DJjD",
  "key8": "2Xmx439uvhwS5aoACrkLuJC4WyenRyLR9iBCprvafbuRYa1iXe8jkicTyfGjWpSX1e9685mAyEpEPdNWHt4bTy3y",
  "key9": "2Cnd68tKeUFwFgiF24TvMPYHzZsWZfQmxcsAorWHefs7K2LJaeJ9rC54tHYQnfzi2StEaZ1vr8brcsLh2ppfnZgb",
  "key10": "3TWNPbendRvXZiVhyQGT4MWupwqJG54MPZsZyx5cQvCeuiUgpvYAM1f3jPxdBnz8aHiB4a38pMKC2ruDf5eg727B",
  "key11": "4TaqtDEFeYs4CikBCwdtTnSFQdwysascq8DkcySGjJ4x6XM1sYWrYsaMTzP7rd23Qc3v18PbERa2rQiGJNJt6rrf",
  "key12": "4MaBefoEmYeAEvef5Q5uBhpFZ4ZDMkm72KD2KFS6PFT4eh1E6T3p3HMzxW6RYdWz5cEo2bgmYFzVCdjAkenc9jeY",
  "key13": "2rgVGQqMxeVRmyxUgFRCEtedEDkY5swHTM2LNjrA4pr2BjoUP26gHi2Bhwbq3etrGq4zuBvEnPg9M7BhW267BF9H",
  "key14": "1fE432VGXLpfzXrfm4kP7pBQ5DNKwdJ12BBw2EMVUPpgcErMz13rQSHW9aooMw1mBWwCHZky7VZvN3U6nXLmydr",
  "key15": "4dHHLnk7QQC4JfgZ1x1hS6DvEZMxAPaaRNxbPJjJ6d5PNmPjEAPrUy9suY5bmq17922VhhPCR9CwEhtetx1ZCUtU",
  "key16": "2cRtDBF5QJQ6E9bCJ1vkyVj9WKCHi2xt4yjys9irw4ATL9GVfFhWHdQVK8KJZirnD49uusKd1JjXMx3nM2wzZaH9",
  "key17": "3nYWdt5eKyk3KAbHRMsqxgTZQBwbd3gpHidpma1m5Z81LfSM6HP7icV6rweDnrNxfPm4v2yAxDqHRjjTa5YnSiRL",
  "key18": "5KytAkaUqP5fP3uFDWmjtqXE3jWAdKojneCtu74NEWKaLivfj9eiCDuSSkpJqd6cXvEkfCqSGPNFoW4tHn1HU4gn",
  "key19": "2pxYiKZwTYYs6ziG6SVVmcso9AyW1AeGjfR8Vm4gUcrUYcLg1naFyqeH1pe4oe2KbSs9cia8ZkRkSLoPpcjGgNtC",
  "key20": "3Mm8m9kNTgcrbbqumq9yUk1WFsNp2s7RN4U2RsQ2YqkcEnGHGf9mgDY7Z6kSiCBoYU5UdozaELprkZxhQqw2rfc8",
  "key21": "48b6mL7m8C1ZJUmACrfKFmudiPoxBrCwUr54HD2EDQLQXkzw85RnE4xrwuwBvtpqNxSg2DzVYufJgaZaeGbyJnsR",
  "key22": "LhZuhF5kHKm6Uz3pEZmPYxWnsuVVDK9195DGjqeD8P6zK3AoLxXaTyoFb5WuNEE2t2nc4YrRVj7DT48SnFSsYaZ",
  "key23": "3nr67NvAushFrMakSzYsTiNuPf8udHJHe9ZXu6XxoiuJLRPQSJhgcvE2W5a7CsfMfsQNNcE5dAMW8GB8X2af1VRi",
  "key24": "4ZwFAnCpYv5EmeyF3DC7gcFE7BZtCfX3SFvFkQMVZKcashGKF6Gw7n9wk9oJArWFK5UvUzs6FrhgetxxXATxbAMh",
  "key25": "2PYdvFjipAhbJr3CudyqD4Zec5biPSUA5HicCnn4MyY9YHk9hKEHLSgEERECY5MEFkcauM1EANhy7jD9aBsnin5x",
  "key26": "4pjoF4v646ELaoVoMmDXqAYLVLc2LvCiQhjmZDSXX8kp89hj5US8hukqyT3FSn8vtdnX3RjAN6WwthEVE1t2uyVw",
  "key27": "3AoEeUiq3otbaW6f3HfyzPMcandpSQHxPeib4ky3xeZhbzdq914k7Gcq7WqUhVTCwsgwxCs9zkbFnUkXHCn6p3Qn",
  "key28": "5rfkHGuvyiygcjePFK29vTrnnK3mEmhppAH39BxHF9zaScrAsnL5iSqKVXidkkBZyS5A8BXgxidYsQV6SL9SUtZR",
  "key29": "4G9vdmS9MrgbQpE1HueExsY3DeqxadFhNr7Pa3rx42vxPcznUKrUrhWSKfXGU1WoEHuqX79vVzMuWA3hFxGPNE46",
  "key30": "mdiNpKKCCSx9gc97Kw7XTZzzBfZgARPDLB33iqRgxRvZ7Y6xrrJv7fokL9kAnBrVujHYJUWUTA889iXrN7DhDDj",
  "key31": "54iAhjxRdwzc6RgvKyCm7GXgns89m6xqbqPxrR67nDTAbRqEUtcL1bP7E1jLXeVFMtwTYnN2YhhjZwFGugo8KwNo",
  "key32": "2MDrwzAaXYFD62oAzTfhxXx1NLDZUdoQnqqDrdhvTE842DEGWbCFxH8gGZG72rugYRQcc1Mg6kBYEPtS5G9Qnznh",
  "key33": "43atU5Nh9rRzHFZZJi4JZCYMMKQDjMSQHkvaHMSYLzqbQ2wjYzVWZXhruBgeqnmh7F7tARGrkQ6UotN8H4iBXoLD",
  "key34": "4on2bGZgZqKaxVZpLpK1cvzhpQY539hzFHVNFqDczE9VvWkjbUpa7EqEV59vAhFoirSUfUB5gJh6CNjDQGVMZ5By",
  "key35": "tTLwgCrNk6LqsttgVuvCz2JgnUPGCCw9gSMvtR2yAH6YerR866FGKxjfA9SNHhVYA8CTr56jhzUFZH1fuV42tLs",
  "key36": "wYk4AVTgrcVHzBGpDGULqjagxopS8HMtgMFZPrtRJTen8e21pMr5YZurFWWEqPF4TNrftDxZ7aeyJSLfgw6f69n",
  "key37": "45Fd1dpzqkEDKPp1H5qMFVBNDxf9x8ds9wLzksBTWWiN58NsLHe1sAkCUDsTvKaEpyL4ETgbejXJ5AoBLCP3RtjC",
  "key38": "264CWVcdhNQPoRnhfqCQbf4ixiebcBumQdwTYPg1XACd2jA7jsRQyRr3fPh1KCPEY1fmhZnJ9aDxg4osTZPGA5Ez",
  "key39": "BGEvMmkZGpnnTigDiimGBsCKA65XmDQTXBVvLPRnXp6m6Bsd4FoCtoP4X7nCzkuy1xw5jekcdvjEGbdny4PtRTh",
  "key40": "35J2DmxiNw1tQrCxVRJ3Yxi2XiSTerWVM817inM3MwAyw7wFpj3hYK1D9omPP92BhMGNjNJXfjHyi26gxDox9NUN",
  "key41": "4tcoae6XkbGxzrbYHVq5HUUUcYsSZnL2k8eaTCSWqBr2xNFfuwBrPwN6e4vRtiKUmD75WDLag9BXc4ce4Fo6kVFL",
  "key42": "42bkPoznFEf2LmpxBUUkxUxsRGcYfhcC4Evun6quCq4w1dMFJi2DuwrJNkG8ps3WHNmc11KESYGfpxQ513Qo2fMg",
  "key43": "5Zn6j2sXMFindQ1dSD4cVFVv1vWsVH55d48TVqqq2X6skcP8QFWx1TxDBAosBv43SXjW5vEBztR6cqXZFpEwMJCJ",
  "key44": "3sKSTVizzDQAmmiCN8J4Mz4UipzXcVWeZGToSR2BMmShNTmHiZVudfKi9Cd1e7g1eytJgae8AJieCPcsRdjzVDgd",
  "key45": "2Xg3bCEoJAhNmKfSvMBL6Z966JuKDY5fDuDkqTyfAmGRrDd9sqJWzhsykg7aGxgGrTBf2fL8tZecSeEwsnjofbgp"
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
