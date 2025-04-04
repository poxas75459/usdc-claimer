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
    "4RjzsuEknrYbUeFhiz2uAi2e3sbf6ngkNpdJ2Ec5UbAdSkoEzEeN7cgJf714JzabTwfBjd4JpxbZsPtAc5b9LKXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rcG15aq7233bHwY5PtiS5Pr7GsjcXBMyFJu5Hh4CFjbjSCb5rAhgju7Pwq1mS1yGKwFYWmdqwfqJyjp8pLYJNfB",
  "key1": "4dC1xyg15pE3kUKWy5M7uoGmrdktTJh3s8YCQiGW6mWiSLr174ppkH9AWjqCq2UhFAJ7tqKoeaxR5nS8MhSAP9jY",
  "key2": "37UJrpHvxDWbgLdJ3b2rNkkZ6Ew1k5nY3BTbXCLctZCfdYw9F1hJXBsyxqnqoiM7pCcyKixHgq48jtCANq4kaHry",
  "key3": "4PTkw9zkFvjiLUyAKLm9pq3fbeumMSPRitwYkpDURBKAJ6KsBdEU7HmLdfYovmNkaTWceFDLasAwyxkZjpVS5Gzq",
  "key4": "5ptNRw8Zh64f6zGVTdHKZW3MxKiYPHJirP8NQH5HT7gMUvr2J84eYKajshE9KGJfNFxHqunhH2yNLyFSeykV2ufb",
  "key5": "5wztA6AN7HWSKbvsVYpDdCCEyGeQkq57gom67q3aJEiihAtqoLLxb5zDW1eNo9qSNWuQDtiv6wdqbUtqUXoos91Z",
  "key6": "3rmcmQTZ5gKU4RbayDeJG3B3Fc1a2dH5S7vfXZGt9YVe3FbAM6wyVXwocGzSxELpV7nBwahboRZMjm4ALhFFvt65",
  "key7": "5WDvAfc9s9wqUyJyVwddmxKsKe26rFKaDAXo29z6a94wKnfyscXPUrUp2KyAVjZtykvnYqBgtY47mubkobXN7xQ8",
  "key8": "3vx528sgRe5SfuZz1vHsJPPAnwVY5v25VxXWV9nV5Uu6AwPJsQur8BqfHxMrZma78X1zimLbnfGoYXLmF32i3eps",
  "key9": "4fq9ATcu4sDWo1u9cxkPg9T5AJ5pewup3TP6mEx67aS2cXE9mnnkr3cQK88LtWCbMctoqr5PkGs2AoQxNicPeR6T",
  "key10": "2JMcVJbesiumPu5NAtpHoWzX5UxF2gGVmUtgUF9XVL5X2ZBrQuPqvcWiayyqEJvSH2rsee5Bqxs3KRUonUoGYv1T",
  "key11": "3RRyHmXD34dU1apTCa9K9oBsZVaDb53kqDCh7PZAvk21x3GJD5M6PhZojCc8qPvs3p5zhfJDJhGLY6XkcsWB3PfK",
  "key12": "4wEq7wB7f8z8UftwnBhk25tH9WHNBxAGSXXU4oH7ktw9E2f3EYDbCJTCMaMUc2ahLRXtkm2ZJgDAwyXS73gKnqYL",
  "key13": "4ewnh3XssfkFzzw133h8BmFmcGci7284743Kca2gUeQZwqxDTcg6564567fNEpAB1S7Xebybs6ikt7MbC8rvWTNV",
  "key14": "3mm166t5M497ANa9yVfzLuH8UJiX2o1CzJqVKHRC4sm9DaAde7DhbHGvskBcaxKU7vTd2TpPnXqcqWniLuvu76MF",
  "key15": "5LLGTwqqFe4uaPxGsBa1Wk6bER1G2TojykDWhrPxMjKSJ9GLSKairrmgd69YdtDvrj3uN5Ksfrzyy1sdnFWx1uNP",
  "key16": "45h4sBdEvhAL6CiFeKMUqRzFkLdPA92oXAR7hKfE8cw3afsKM1LEy9jeZgBXoykUVM4bKjzqyr7RLP6shwMA5XK",
  "key17": "3fMmjYHax2kd1bX9pZxtGwQQo2kGyHdRXHmLoyt1hLZUMaUjAEQLVTitboZC9oFnYwGRUcATmUGXPwvDWxGx5tNZ",
  "key18": "z9ZAiqbZg3PJo5xaBDb9nfXDhcZfBZQ83X3VuYkPhuCgYCQYr7r2SXFUtJhjQdXoC7xAatnGDYp8QCzVtBWwjtX",
  "key19": "3brEToaJn4e7cpEY4cDBPC9ENApZMdfD3vAZGHRz536y8cRH7WmfxLomvNubsMQHXWxJEXKypH4v4i4SZ2TSkY7b",
  "key20": "5KMNsHZiLgUidV4fqsLym3z7kA6SXuU64P59wnFAPweH1Tku2LmCPinzLLSnZUUoRHC1rqjxuShoKT3zu3oAqmos",
  "key21": "5AFYHyDmmMdyNk7FFxFnrBUWwwLBUzERZki5qqydbDqjAigbvTdYmXM45hEg9nHoDEzasPDTTp56W7egiBZqfMua",
  "key22": "4nxQDzuPRMZ1ZN1HSQqqkTMpBBe8i7d3JLGmgXwc8D7vzS8F2Pz49QZFS6yuysnbpDYTnC3p2VFjss5j6sZCM7MX",
  "key23": "4XVt81raBHDCix193myjVtWzsnghS2ai7V8toDDqBtD4Aprgqq3Q3qcibxSKn5pEDtjs59iJNzCGWn9Yym9ejcVf",
  "key24": "3KuNwZa6R3fZqX5xohfWqEV6ktFLafvm2WRybZek4Cw4GkbyHpyMWW7QXeRW35hKzHVSVxY1Mz5vijrh4S3EFNnu",
  "key25": "cDio2MK2xfjkhpHb1LxMk61LmmgQMsLRvfocRnG2RgV3tgvkWuo9bvkTfEgsnWtrW9xo951qfDWzpFDoJXSFg6M",
  "key26": "4DEi1SxCfYUNwwQ14h1QqVmo4Z1sjzQNfsojv9zxngTJi2GqNUYxfG22ut5ik7nGy5Rz3HhBAivMBJZW4EaKxxNU",
  "key27": "4s6MKmWSVhUrRCcBwP8svddZXEFcAfgb8AgewqfaNosebxVwpxNjjN9JRMGsXVb3cuvgCipgVhz8Y18T7h2jjGNv"
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
