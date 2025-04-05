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
    "EKLoR8dHvHceF14eXA3zxmYrPsNJ5bfnSFCFG4PpdbMngoHtjEhneWfTrcDqXpDVqzVLA57wZVbfceWEXawdriD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bipzfc7SAxuEzSCrkX32WCpuLodyXrgKHPE2uynRmSaUHdQw6MTYtVB6gNXVem9aCMzwZjVQ3vfEwUJicgYu8vm",
  "key1": "3huFx5SjHKty2PHmvF8EHFYq6P4mEY2287awZFXPj7scXETmWa6tMYVre9EPWK2564Cxh9pEGtnaTRZ3qFtxqRSj",
  "key2": "4gVoHGVuxTYZ4QPpF6yvYcpKZkK8DXz72LAdDBKvGVrqX1ck59MVTHadEx5VM45EpM1jLzQ3wFbvoqZLNFBtg3Zi",
  "key3": "4ktk9h84NT4GbgdGZtp1C5z4aBQ1D1P4tUYyBHjKe5drgY9HURFi2oK5ZrVnFgHbAtL8aNVcNNhJCtaod5fjLjTv",
  "key4": "62gpjHoMrJtEaNe5xLTti7fEhAVFizToaGncnCJuEiXWdzyB5a9sDDmUibAz1btdXiTqgd2FW5ewcvvbZE1gMR7a",
  "key5": "4Xq5zFPQXGoZbQrnobc1U9WaKbEYpqdWF7x1yLeHUx4SAHEWFb4gnSJykvudCLAyuUhRyftcadN9WsUgF3wmvA7w",
  "key6": "2ZsE9ziRrrqSCNxS9BM3HkenKehdenQtCad8M2QQmnhUqDHyaWcYaiNYZHZMHEbs1MYWupprsQnqnW3CwuhSZBZX",
  "key7": "2W6QonMP7SaW8eLUrbarisod7U8qU9vUrSV8h9JPsrvxwg3wrYgyN8SCeRF4CcRVvSjGNxxVgUcKL1Q7jJsu6seP",
  "key8": "4i21qiUVHnVknmKRNeEzzxxv7fRnuusGnXReXK8mt5eRcCWuX4AheScFtJVTzVr5ecz6myXdqncMFJHEyb387VBP",
  "key9": "rKaDTJWQYeCtofD4LfskK4BNZ8pT48nEUkrXigrsZShnEuhV15qf9r5SKLsdy2HQ6RtJFsVz6cbcJFZRjvPAZdX",
  "key10": "3QnsA7qDCtz8JgzsKgN8nRzFVeTKNi6X1VpDVY6NXzPjhUTG8JiKVFEcN3Lt3GBGC6PTc48pBjS3wmW9wvwivw36",
  "key11": "4bEqNmmqN5hRgJ2x3Vox5zBgoRqf3bWcRoEV19e6sHFD9fNJiygkvyT8BcB5py613JB6bDTrZ8rFYkR8pXMqBH7N",
  "key12": "2cZJvBdc6bvPreJa6d3MJjwRQyrtPH6bmz7VV2izb7gfCjkQwHCKfYjFtsZg73zuR92r3u51ruF9fBbcSXPwLFiN",
  "key13": "5e4jqa6DjBeHJNZHayJvcACik6uube9sT1oZweaurpBPBJjzLSaTRZwpTHtzCiay9fshYP3s6mp7D4e4aGp8BVzd",
  "key14": "4GbNBmoSFtgPf5v7YvPHGXwqcCQ1JFCAE1KMTSsYRycsssyB1cnfu5kZkcrgDoPR3Q1A7Wx9GrgUgbgVaKCZdYy5",
  "key15": "4GSGihK17ZuWKYRKujURTmc64cE8wJMk3zeNVLqVeVV95bMx9ouurrQHQJpTizAZ1y3D7tLa8AbPJcdKgjV4Gxbz",
  "key16": "2EbiF1t4omR2Cs3E94RaheLDevV5b94FuxQZ8UaHM1z5rHpqCPGv7CZBpXpQrni49UpLRrrQkougGbWKMxzYzEXB",
  "key17": "421WhaKEomyd9eQnJ3TUVZXGux1ssU8UMs6ZQGx5K6Ty9qAzNLpcxN65TtTawMsiU4tCo1P7ApqpGwafqxv17U5t",
  "key18": "593sWMXft8Ryk4dwwHwt8QpT8L7cFay7tJefSzA8DdsHNjcWWc59f7NAkBwqSjEozx9pTQPpVcazEmPkhaeog1Ku",
  "key19": "bh1k5H4PQivqmDq29CvDXUQ1vvmdZPDzL3MvDfTWTYp2aSkLpueNoAfyGNgs5btvYyPzqBcefuAkwcCkA14Lb1V",
  "key20": "JuEVgRz1F1s325JfYBTgrUt1AVf4u1nCQZfV4ASN2BRmRDsggZqnMuvXyHYDiYVogeNdagDcvxzZirAsQthHo6a",
  "key21": "gG8gHdx2BB6dFgQRQYLrrRyQ9EyNP5pTKZj2mF7evDP2awcFZaLc1jC21No2HEEqF788cyLGi5ExsGoafbAgTTY",
  "key22": "5XortxLoi9meYaB2JKe38xAox3X3PeSHReV4h9CcNpGvFfts5zpJJRHhEa3Badxxwx97ipsDqiFZq4GYgMpHdnBD",
  "key23": "26MvpvsVTNh4u354peE9Zb7EM8aThQbFGjDE8jpxHZwjc9PAtgY2xuE42GqRXqi7sFMUpucYn4rs6xQSWGHpt7Rz",
  "key24": "5cLnDsr1SZfQ6H32mgHRTMd58QDnJoNo5ez4P67UCAymZz6to5D5v4MYT4Qpccaw2TKDPMn7paTCkAQ5QPw1HBrT",
  "key25": "2sdHrfNyTxL3CbWYQgwWk6wJCVxJwTB1JbNMiznPzDn15QeNZ6pYP7DWgbTDVqD8yQMgXvRGcEjMNhv5HF6n4Fpk",
  "key26": "2QxjdohnxbwbSJ3ZLtyeQWV9xZU14Jc8JVqeqZUnRL4LFQsV1zkGt7wJe7MUhNLqzaTBoLQp3L4NEVMQUhNCfT7e",
  "key27": "TRonVrPRZn4yQrNkqQhtPbHVNrZKcpZ2xQbdsDrDMPHtPXeJFP2GKUJsh4Mc6bi4whNUFZVb1gtxKgVzsoQJuw2",
  "key28": "2qHdYymaJPa4scJM7MVUk8k6oQ8JqVLsQbUWJXqAfNBHT8JPr5EZcPm6fWiWJjqpYFovMeYWip7dk3zUAph5ccgB",
  "key29": "4UYKBQEFeGsNkP7CUWpv6d3bUBXMR5bMmUc5JjHvFgaw7bJQv2qmjEcj2crdEkHGsgLPuUigQS687NSuiCdBa8uU",
  "key30": "5UHppijjbVgsts9R6AF3AtvMQVhkoQpkbYZ5fqXEFuaiwYy5rKtCY3N5oChQMNjNnusprD6MiHmyLvy6vyw1PWNJ",
  "key31": "xZ7Dk1DnMsKmn1rw3aUreyKAwVjYikVb1So2L3Tj3zXczF9DYF1EkEZo3wkF3JdzmimuCnRrPVpKYC1D8XqRXYR",
  "key32": "5hkP4Uz9H9yVkedi3suSzXH7cXdZEprCtZeZwR9SmWqpotXKuJgsYnMz1V3JUjLNXhQcQMZQddece7jLygffsMqX",
  "key33": "L6BgKPfxwJ7DAZPRwLh7dTiZWKQZfY88bJ5NmYQj7DodrWamM4NAwtt8bB7ABJWN5cyfGURWigTVJEDgmmhsx47",
  "key34": "5NsPp6TcXmJGkmoNC9QZscEryRJyoF11SbBAs1qcvLMriYiEi8Env7rdn96pkyusBxTu4hq9EC392f46cwSaFekj",
  "key35": "3iCEW6xWmowZzepuTp1UxhWfTW3nXKBaZHbefUgYwNynhXj48hMSDGuz5XqBkaS82MwfpbfL7ckwmWRk6nRfHSqt",
  "key36": "4P7JJZuazknDCEV2jtriZEHyzSybRfbtGbABwDRb8NZuPdf1oKWfrboq4BZg96k8Qx2hZBXHpGp3WweB9WKps8gK",
  "key37": "4rWJ2gJY5n5itgEvjM1cWmggpvNiXqFs4uY8AxhvpShp3WfgCj9n4gPsnzbKfQns22W8F7VqiyvA74tuskehByD3",
  "key38": "WaSakYhzZKgHHV1kMUjNYqJ6uEf8zWySJNzrGGdSQ3mee9FNjUA8eXjeBjehnhxVYwxGPr9jhjq7r45Lf8SBtTh",
  "key39": "2xbCETrapD5sttRzsgnmoxozMPdCJ1HLBuaVN8JeeoKc6NGYD793ZzwhBnQtygANFHdWj3vAmQwpJ4h651KcJ5ow",
  "key40": "21NjmtUDoJ1b3TrNtNb1JaihMJrPcZd9aFsHKWiuPr467Jy2JUroRpWYUwyNT3UCrSiW2f8pYo9NafBaznN6A2cr",
  "key41": "5QQjCJuJRwo4WQWdTg8Yi3gVCeZDhQ1UbERBQATsU9CcpYGVcr2mGxD9hzhJCBgfcsYFPaq3i5AA13tQKhSuNCVH",
  "key42": "2LMbco2E3irmmWohMuD34nRHRATRNPiZmJXc7yJ4AfVNhSJw5wMSgDkFd2dVg1APWND3WMYns1z8FH7TSYpZgH4S",
  "key43": "36P1zLfiftcWdWCYKb4QAFWN84GgZnLa1J5CQ5oGQtM4iYRsNy9NVSWwa2UqKCMm2AitSeserhh8GHmeJtdqATaA"
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
