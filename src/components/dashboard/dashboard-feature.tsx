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
    "cWz5cZHjo4utyDJWhYRjPyBWUuLL2fpkvsTmoJk9ZAMEkjJffDvMJA394tXH2rHcdUiYMQMgHsJ9nBCN4hSA2Yx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gxeVRx6WLFRxX7Xe7UUPJxi8dzjhDzVBktXz9F84h6uioVSxVhjAmvADWL1bPdqM3VsFEeuUo3JqZPaH6o6xcdi",
  "key1": "2mNsuJjttu517kNnurPApGGCMMmdC1YyyQJHKB1ihtDPGC1hZ6zxSTEnhoredVJ2WUtRkJd3GiwesNWRp6xJY3Tb",
  "key2": "4zRuv4mUzUfHtWDEJFxkiQCYXy7UHVLCtdD2u8yLjBuuWWErririXAZxNqMuN55iZ6YiLxw9ngwoiUmSDP4wcuG7",
  "key3": "4YaUhZhoUoP9PWnu86pFUZYp6vVLmTWE4hewosZZjMkoSr9JzpLcUEd47cZSwa7ir1xfcuEh7aihSMLe6FyAerJ",
  "key4": "4gRD1BucdEnUyGZeKtJZC7FgWe6GERrh9GmsWyL5CpnpJzgiUSeSkJerCQTurpGtVWHV9WJjkL6xNqBLSg1HmoHC",
  "key5": "5B5fbhaKMg6GUZGF8kQvZt9TehXQTz13LosC6xF8rbu9KDMMw6oZSbvrhNwCjCuUCL3gv1SGWvzvozYKhZ8vaw1Z",
  "key6": "2tnTfdpVBqMxcCrYp3iHKupR2mTAfU8PeqAVYBcwwD443ajG9BuaW5ozNytHPSJNvh2GYB12MEchXgvfPkY6tgSK",
  "key7": "2U5DVQUmLZTyMFgWYZTj9oXs8gAMoFnWcVS6ubw9fcnMnsyMjSTWYbp9DUf3joWUiGogofQG9Xvb2ioxtTzVQCgV",
  "key8": "TnTwgVbqr35wDtmbWJaVRCCAtqeyR8AzAUTQSRAYgyjE2NhjyHUu46M41J5d9pMdewDVT7B5bqBSDuCZSD6af7D",
  "key9": "22XmMH6WSvxdHZsKhEZwUs7mzyfXPpngazvE1amX3bh9chH7mKjCdg6VEfvvb3sMLUaa8LMaQoho1pRZeBHEdsAi",
  "key10": "37owm1tLwt3KuHTEwm5QCbhBWueB1g7kVGfPhZ1tXLDJA7gcyneqerKWv9uqXYKZvLfq82dqEKjry4fpzanv1sk",
  "key11": "2YUJdjLFnY56zLUQ61NCSruKAN9rNGEN4xBhaXBmvS5dLb6vw96zjHFdZFVmqtCT9uuTUrFv6uc7E5LbT7o3K4YP",
  "key12": "4Zz7VEZD4iC7WGLC89Pe4KE5gQwwjVd2p8DGKFbEFqgbzEnbvqcJg5RJgVPc74LAJFWHe4smzxm6HL6FibMNY8Rm",
  "key13": "41jp1Wam4kcd97tjWdSJrw9p7UrCutrJsNghNvhJ3kbiWeexMHbvd18UCyuiJcFq5s1ADQyq96FMimeJFh4fqJWB",
  "key14": "3ACso2LgHbYLcQE8iSKa8ZiRFZ3XAbdpNQyiBV83sBX9SrJzjUC7TuAAs4h5udn1jqLmr9NSefzvF5ZGqSgY35sm",
  "key15": "4WUZLqDFGBwP88abyzvXgifFNeDTVj4XVwLC82uMYa69pxrjCbRbssmwGGBuVNLWU5JnAAqFQdcgJ2aYkjYsAVVA",
  "key16": "3c5EyJTrHBrfagu3GgZ6L1isYhAGpTYncH72hTGdkJAP4hc4E7dTS5XFt28DR6w1LdiYZ4ULFae2SSLnkDW8Rad",
  "key17": "5FiMFWbY6PUYcC3Hdyb8mgGUBuvRrZwW9mcBpvrwzzEN1dPBR1ypxEcRWTx9era87tUEfQgR3TVHeXeqkehDoZRG",
  "key18": "bBSFzWiv9vFeqDpktjLETWLgiCBnQiFuiMLN2aiXXwE3PrPsHym3i9nA7BSeVS7d5DK1XYiLYSHcVqeysiJ7Ykn",
  "key19": "eZV8USVYcPcuunCPM5Bk71wMCLNE4ThySpWUkfH6boPkMCvyXrdvq8Ss9gKntzppRzWxM1QzTMsxzgX3XMoW1qm",
  "key20": "LFnuD5HZBD6C2ubowXc86XKHPxva29AwNCVSc2SeQnCvrFWMYVezhPpCUFcH9AE1kAwUQXHskvpPt4svbuNXmCK",
  "key21": "3jR188maN8jKUSuLxCinAkYN4HcYdjouzSzYm8sbP8giuZnYutgUcAQ7aK2b98YAbXkNCHyxb1N9vaz5rzJ63cyb",
  "key22": "3oPAYrw1yKVoT4U63MJxEEqU4s1HsTkKeb39QAJFqSK7Wh3ZkAJWmJQecC6pguGy5MPtuJfzXJ1i2nCFoE8drcMr",
  "key23": "251MteHyE2cfY2MDJ89DM8vLJMuSCM6XeZrkrpMZD7mvJctEJGGHusVw1FLASJbGKV7nm9SBF2dGKH3rKByrHbYs",
  "key24": "5UyVJiXArPTHgfgd3tBo58ZN7Z7anB6991fj4KdqmwnwQdkZgqvo3vMrEmxUMonddGPWT2NJs9QUfyAaZdhcV4AS",
  "key25": "3tkV9ooUikcS8QNudpfVM611ZQCUpQdfpAtoWqW6Drt6xyroz69uVte5gNGZfzXECVMwZL5ZdJkbiHDYKQqrrERw",
  "key26": "2VPx2rPEvFyWqvFajy7tFLKnNDDDJgfZKRc2mU3cVG7evjtWPiaT46UVGjvgoGNNXQbVSYbW8QEn8ceayPT7MbK3",
  "key27": "6TBwTDSy3NU5Xn9csvk9bErvNwZXXgQfPnv3jb9KWU4eMnSULMsGo3D5XLewe2DaboAuCoGuxp1qnJj39m4cT6J",
  "key28": "4pDQ4FUVq6rFsq6HgqLC2shaNQPMsE6aijvevAsT7PXgjnuuYGm9GmJDSfdmeVdUKTKGJY9aKCyePUSgqtChjkUw",
  "key29": "3RYQkwctmck3W7L26m3aMD5xc7wYy6tEHbAuHCTUgbLyrPztq5atLHUvnxkU3fUWMBT17hNjTRGqpoNGRxE78tdY",
  "key30": "4B6g57tBrbLaTrBnYpuVhaeZ9Mkd2E6CR5mS1J4HeWYqU558d75ociUgLcchVer52DboNGDSuD8EbuqdbUPe4GTB",
  "key31": "ML7eaLyMEAHo1uXDfFXNgqDbRHN62GVmPieweo3UcX8Zjkn3dz9p1BQPpqTF34UR9Wqau39sgx3kJWhDegpuNR4",
  "key32": "3rmTBpZ5H8FxQJ36bbSvUVRh5fvT4UKkSs7oPS4ZX8hXpxVb9ZqWv2EnVhwfut2iyQaEwPkzNTaiy9fAjLLYxrfa",
  "key33": "3Xe1CfFwj24nBBeri7igXM2CvhbvqFtKif45MBooNS5nKS8mEPvyAP4cyHWazW9xDMscce5GM6ATjgPyuTXXAp4J",
  "key34": "jWifLgvEaFtdoPNxRh9NLwyp7HWVQ2ALXGMR2pAaJHRVjnV72MCNWybA1pn4khKZriX9aTNJKxuKaLzbXCZ6zqr",
  "key35": "KxyeHA9CCwT4sy4zvJgjVfYjpXtZZ1faAoPjFTWUUqSQaN755Yo3HPUAi3s3ZPJ8Hg1k3ezk7bZ2pZb5f7ddxEH",
  "key36": "9bkYwJeYx5Ra3CoxGvRPKk6aYjrdGYnNJikESJo828Q1RtVFJBKzrnsoTNht5RWM5hRt2iHrZEh75Z9P6HNmecb",
  "key37": "fL2ognLcxwnNfrRMApXeSe66sF7FQaje6i7KCYVr9qFKMKkvMQctHH1XnpaLQDdQWmE4a3hSNgYbXWmhFbJPoKV"
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
