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
    "ZXEcSohJSbrsURH7SHwVSLRoPVG5tgRKmvKUWUu5remN5bipk8d9ZaMSs8ibGhY1VwJWDHBSa31uVNpzzAtnsHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ghv7oMBLY1Z5rb1dZoKqDW8aebFsbUXL1tVqCGgiAp21kB2eP3wSb3tmhQhha6NNvUdjMX86u75ujnkb6jyytLp",
  "key1": "3szrKekRCEw2dSQNtXq9DNc4ZxFrQuF7gSQEN8oGS2W6Z3keGuNm99ajsoerFmYWBYe6TXn4xwq5PnMWugdhYBJC",
  "key2": "4GcZEfEWRrmSFYsMQYFRZXGDCZgHb7KhXnhcMpTusDVPTKjE1Gkko6PwfumgQv4AGj49964cNJvXLXucRukfyBa8",
  "key3": "48B9jz2vV7KJa5wcdB9mzYwRcQF6vW1ecmVmnmoZur3AGc91T1Hd54d8bqfyJbf9TZJGCVo4kPQVSJDtz8i5DryP",
  "key4": "2iwCSYzR8EvKcXGyFDrZqezwDeZys2EvF2dbamW7E9WBZhikie1kJADvsu6R8pjZQZSKPPMN5KtcU2hnE2h9MKRJ",
  "key5": "4aExkebxwyr8eCk4kK7Cymj7P318SM96btcyvXGbVGACDBgeCq5Z2HC9mX8Q3ZyXkb3mtsybrLA9osP2q5qGN316",
  "key6": "4aaahTgv7Yde2wVjfyzrZAZckdcbCwnVnYiegYdEXCgWv7BeNa8D9uDm27n5mc8yofNPMcg6SfbiwheosR5WrYwX",
  "key7": "2qRW7Gbhv6xf2x6d8sUgfs9WsmvngGRaGM8XHfqGqzjhEk8TBXyRQtPfjSkLbBeXkcD5Wk1nkvAFJSTzwoWfYazf",
  "key8": "2FwKPxmiCV2SmZTiWGjZcqB8j8aYk8R2Tdsn1Aeem2qoQcFjCj3kAZjfVSEPMtydAEGsD7FjqSpwHJDHjZk6MVnJ",
  "key9": "bYcVvMRVvxK9kcWfdKceAwqi7XX39HHGSLriAJUngKL3PTj7f28bEF9FuErHvPEKJWsyMNxdqaMTUx2A6WAi3mJ",
  "key10": "478LDbpTRTUxy1PXUJ7FicyeWN51jzRjwWzpRnZikejr182FnotTX74F1tJLuMFYq3qzWWakWPtwRXWJto52KWL2",
  "key11": "2Tsrn7haQACZMkgzWTUTx4FbiurnT9umeMpGG6PPrV3rY3w7U8JSt6TcPacoRBwTxqHsAYoN6odak6HJNkSZe9Mq",
  "key12": "5aC97CBi9DLh8dFea5UHPeQf6qHhMRhsPbLQJTgdwZYaQ7gKoDa6uycjJzB3oCKjLLVAZJU7JbF2aZVCfj97tZBD",
  "key13": "4stiYsPGTyTiCYtJioXeFFd3faZ1rQdM1pfivDJLYop8GD88HhK1Qsx5R8DoBx7sMit9NYyBYPKEE4fUqDmpPNX3",
  "key14": "2f8w2xhBtTbCtnYqJCt2dE9VH5MtTS97KqY77dShS7EGKkVviMgVD8xBbLnJ2QepCwwH31TdvRcEgqqbmTzPJYt5",
  "key15": "7mFDCVa7X6qrHSvDYi527AupE5u1Jw1g3fd3CTvzXVXbwddJ3ddFYxgHo6ggjVd3b6yczwVcKvuZ27ZsdazGXso",
  "key16": "2AZCZLHL5BeU1oECF68iv2V4AboXX9saEJuVuTMdXA7tLi47NeSWbhDBHsiM8ZR12c4eAYdvFJHW7TLbGZX9pG9L",
  "key17": "5KqkB8M4VUAue2ZDAVatkFuWevcjWwuGYa2Xsd2LpV3skTBHVpR91x2VAR8wqkNqvmi8nmm1NZfmhPxyqjxEf2B4",
  "key18": "5TahPR94RtbWuMzq2uDtamdXxUG34oWemFJro1vGkFRwcr5NznWVJc6ctfveWFSJv3oR4Jhj2XCzn4cKHRhoHv4H",
  "key19": "2f7qnnC5PCMBRdQSLq383tHz97dNevp5cbpNh4dMWxfQ754mExVdN8BdXPNNE1Kb7MT6gvvwMuDjf251SGm8B7uh",
  "key20": "4EeYqrvVNVHaQ1W2ANX93USVQn5An1npw4qp2xgTQ2XBnuJ7wk7KZyfY3hxG23Qecbx9oVCSzbukmxbr3tEywaEN",
  "key21": "4SBVSix4NtbyhptLoLtrbc8JHezrud3KQsdycyZ5iVWutvaDtRAZgeBTAaGbZSvchymNy93Z5fvzoGt8SDwxUkL",
  "key22": "kDWtk7DGcK9XQrpWxYUygZFVJ8a3H48eMXiXcAQXRqYLbhjPq7QitEBMm9ueWa31FAwjACYriHdRvEXtYch2fXt",
  "key23": "5oyAxf7ZdXYZYsqqaVZ654KZFhWNuSBHsLEz61nyfNgTudXbr6F9KLdMCAcpVLRUcfMaedygnfkeVMPiqK1NPexB",
  "key24": "vSBwLKCUP2dK1Vd28fjPNq9fqYN8L7C9HQWUNMNtmuDtDhEfXUEb8LmwKmthsHZDeHAj7da3j5fDtbRwgRMUf4r",
  "key25": "4AeFuKDjAsYundrLsijP1cFBEHK3wQWyUXWVSysGjd3Sf8Ho4ezs8ibeHY8A4d8ZhPu1D4XiUJyXoeSV58sgsu4V",
  "key26": "4hmu9fEg5oitMVBpY9UPiWYufevz97SQBbWwAkCTFhDAt76K6vV6nzVS9PPqzwZEJictboUe4zLFyk6wVsGW5jcJ",
  "key27": "52H22t29rrhpBQbyfBtpZpbzG2irubjN6vMX6qxxr8gwtohcSPGFYLF5i6SVK1mxWHGK9aR9iWrfGw5VzYe3aosn",
  "key28": "26qx8PucU5MZR63jazgYuojWVyRbx6BraLTz5ybGuLfA5igc9JzNtnkGvkW8x6Lz9GFJs6TPhenQ6KJ52fbmF2HE",
  "key29": "kRjkbJLrXWzXbemqvGXsPMtAqDC5qZS8idqmogHRPbRjohtTPHMsM43CwM6k4va4dwua8e8bbZmbDkWHjqabnjm",
  "key30": "3NyXYDYe1jVEfQ8i1rJ91szvbFAYqt5aV86cyYaVwms63jeZ6kKBT7M1kmcnD2eXaDPNqK1JiuAHR6N7h9vz1A4Y",
  "key31": "4REkUDA4DXFFjYdxmBC9N89GvNpP8tQkWi6KLUAbxUHPyao3Ed3ZGF2P7Jz5y8rReNe9jkkPu6UxWk9DAjqDg6pB",
  "key32": "3sewFog8RpTtJWyr1aijtFmqfQrmNc3GxvonRspb28DaEq1hVTKe7UAisKE7bXTbWwzD3HJ3fege8ztCKeaVoYvK",
  "key33": "3toN7v1WWokA984Z1AfRWrWbnpodwS278W7fGuasccv9jRjiBJ3mPd5zVJ18gBVTzS1MqZPxnKCifhzCkSnZGva1",
  "key34": "2p3auenrDy19LUyYSeLRYpCc3NFFtBh4Mwr2EcBMVfXgZR1BYNnpJRTTUzJKzwfzk4FtH17KVHsx3CqR9U5uQnBz",
  "key35": "5faGcqVacAb7z3GoAhmdCEDi2eYXD8fiVznW5CBggLZ34piw7NH1YLQRUeMfD4UF3FbUAkn1zsRixDwVzy6Z3uk6",
  "key36": "4t6hR6r4dUksKy8EpneSvjasjH3rygET6HMaNX66eJaHQRjW667jqU8X7NVod4tcNNMNp4q2cTDh3Yusz1PpHYjA",
  "key37": "nyNwrnf54JCogUYgvdewXD6VEQNcEJR92sNuvgx5NSosfGQfxVo62pht8WqUiShcDcmSsteQqQdqsU335UPjFW3",
  "key38": "2HvZEgqU2FnWxj6dZ6WdBcPWdoZsn8USHQ4g3Sa2wpYmLKWw1i4cowbXXQncNRHiJJT7o4dzsE7XAgHQKWxCoske",
  "key39": "4uCnBmAVmRjU1hN1HD8PbgMrBzEhJ6ceycfDf7oMP8DoVyixJpdCodvJ1emZdVUDSx18NbuLbfmgocbn9wkyJuHA",
  "key40": "2iVzL3Hcd4QZFM5SWNwpedCM6vpmfNbvteQ5ZEnHaRJg777VHX93uWm9g1GRbAc51KHyopnxb5peeeUu1vsLfS3L",
  "key41": "sZKKp7zc4WVXgKphARNy2QngZ41gvBwVo7a4SHEasgNyHry7h3tvZfKPtuxSzWfHGns22RbUr6QZov7wguqrjuA",
  "key42": "28aYmDu8M6HeudHrrBRE5ygYbEfN4roojwttd7D1VKaRaJ5LBkFvrosFhuZDALA9Rokow2usK4nHjQzLZDx9KVhD"
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
