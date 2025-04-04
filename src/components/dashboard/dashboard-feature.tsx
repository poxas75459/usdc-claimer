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
    "5tKcVN9e2Hn1B5rhA7ZSAQvxxXEJJT4gBwyq12VNuVsQZ5i6wHgkK2ShvFEh13X1T8qoWc8zcCtqweLWEW67t9FM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LMQssR34XYMF5ecefjGFGWytvPeJ1B4umndXzRHMumnuj5UwtiYvbmsBGMp4DysbLDTJVi4CBX95px4UJ7itbog",
  "key1": "3G8aGoSgSo4Q9EtaETGL6UVZCJx7HTvBAJVJM4ijEmsYv85uQFd2YmdAtuFpEMumjwBX1LT9g5Bgsncnac2fhgLQ",
  "key2": "2Z21ymq5xp6tCykCWz7VauLyJ2h2bDgLH64yqoL5ZGhRw6RX7byRXEu1GqCLqm9PMAuDvRcBaGqGSThYgxQS9r2b",
  "key3": "4sNyFogU7QFUsRHHnsRYn72NrDeHsjyCwopWi3NPGpvMGqbxKg6WHiwy6dbD63ukndgtWL2aWmYdJmZbBqjv8RsU",
  "key4": "5nYpLfv4ayZEe3WdNoTk59LdnKHSDSC1xhxV2trjYjkBwrXRvNM5kPdZFGwRMdLEYwcwq5KSx2Me3HTvvrXZcZpk",
  "key5": "24epiMZgiBtkKCPCmU4SNZEdamL4DMb5zbL5fPnP3PUNDeB9jSRWxmRJgTwzXtRjZrGGkFgnAWd5YTgb966GGKJQ",
  "key6": "55VXKMtXe4VFQgNeQ84PY2HNPS4bf72i7cBUnLCcJWgeW1M6Fi8xrFsrbGY4mAcVAppKbCcnbi6EcP7w2b58iQm4",
  "key7": "5Mxa9cdX4iDLHcKoNDyvtpVeVYmjK6c8NWEJHysmAFpSr3wMQzqLvXCXwtoqpcr1jKkaRS3hj8gmXhnXsEdHPwwk",
  "key8": "dHYt1iTpQjF42xAHWRv1bWGvPnvJfyjQznG8N5gzGG58xdpW5pNFXb9jJ5R6Xw22bxrrXwSddhzAVa4k8d3XJhB",
  "key9": "ks4cCJYvUxgkhyzfaUh66KKGVk7zzFjPz16nGjQCgewcgqpj9hks9DpA4JhKZL1qxYuwFdTGRHxchFxgACfM1Sd",
  "key10": "4RqV79h4gWxVtSVRotVvHkx8EQPkozWdvVbY8WoUHHtJfwiseFappKEoRy7XkGKQW4maNCoQt8RJAAysmWZarzym",
  "key11": "2cYtD1K5RkDxrAJvPVjgzcAdck8rXzcPw19rWuzx7YQRBRMvM4xNqroQfmGnLq4ycpBUyZvUqgMmh9oqf8soRqjs",
  "key12": "2afq74UptMKeKgKjPWFK8nkjKPaDoqD21PqS12i52AGd4PEZqmJa5FFBp8TgUxGGs8LWxjFNoQWtEmCR3pnq5WQ",
  "key13": "2wQHG4tzhXc5TTmdaxE2YnbFua7XsmgatiFE1yFKMFZuLS7z6MsTy35fHCQgJf2AVF189XQE7gQVBYLVXDWU4sjX",
  "key14": "2Qfb3ag7kUES1FFu1eWXrKYW1yVcZdhrHZwE64cZwvzr1HQHoBswcyMP7JDFsb3ctKU5ajHjtgxs7bN3a9kbyTEt",
  "key15": "5EfiXQdQszj1WCJ1PpzAJK4uRPjkTtDGcN2v1FRqGwb7S8UZnwGUdfVXJ4Ndjr3kmWiDmwCr5TNk8eMGSJerA3RG",
  "key16": "53xLfG1CKyT8ie14fhws1Pqj6VPbhWjp9ZHEgYmm8a4EYK5tqwvKFPNpyFvWBcCicN1ddzDcbajBTLCuhLY7xqAg",
  "key17": "4ihmoa4dUstQR4v12SB5vxqUxd5rB6N2ikC2brKphPkR8gFCRCK6VhbRT2CCJcEGuobcVXkF7eBecotfee4qot3u",
  "key18": "Y2dcTsbsXHvjNS4kbFtWcB9um6BxJSU9L8kkhQQAZsWqF6KxpWYMPbEcMd7YhaNxLGMWxnrNATqeRuPcUAg2cic",
  "key19": "4Tu89dY9wmz3hkHt64DLWVBfSTf73cbSH4MqhF5T7KknXoKmwvB9oa7wqL6zT6GuVbY41Ye94aMVETKa5fhiU72w",
  "key20": "2UX2pxc5KNQ4Q3WseBXpjhnNsrxiEEiY4Bjq1NDGQpSPMYmyF6RpD4SwoquURgMneojkdfBbC4QYCFjzcnkXAWkG",
  "key21": "3AHGqRSyztkUGwC6WVp48jd68pi5z4MuhmZr4r3tp8P25bY5EWFhnmtVAkq3L9htFySM6dom2J446itnFgVVV1HQ",
  "key22": "2YHESjwWDiLC2HEtiwMS5a3btPMY9dowzQVaMUJXEwQZPN67mVXtCuJn7rDmv3vk7FsWdqyTHzxQWaAxVHZoiAPB",
  "key23": "2qPa4Wrt1wjABKtdrXV37LGLSbpFfdj7CaQQ2zsRdLwSfoptKPVprNZk5YskieUoobFrR6AyqsJjuoGvpnQkd8uY",
  "key24": "2zawEyzk7ZUivr7fUyPw245Tty5NJL2HC2ibsLFpbSN1JFxBWrCr3giyeZxqFnh5dso3iWqnme2G8d9HghAKJ57t",
  "key25": "2y75Wo2BbEXXs6uzKcW5b6hsVZeuTq2oUhqPpmdmuv8kVgpvNb76QyrkBS4Lh6Vd9SL7b2CdUn37kKf83CHfhn2s",
  "key26": "57TN7tZR66782qyKqU4XsR6GNTuMScobagx7zVDZ1kxd9SJMhKc8qhrUVFiDayTXcnEtueHk1ToKKRnXVExmzY3X",
  "key27": "2TyputCSjitw582dKELTD2SX187xeTuEo5y81TFG4DjZqQ86AvDEzQxeMuAsvgHjDJUAdNpR1Ssviqy3VyA4xCAL",
  "key28": "mS1J5bb1Han8oXUGbSBazVKSwvVdZCMQujM7PzoHPYasrB7ZxpqeX5UTL37nwwMKuuvH3sSz9JN2Nt2Ws1znvjp",
  "key29": "3hGC5WZkZmQD7vB269c1rtzEMBAbC8ZiiGAshPqUKNpcGhDfnYSthn6dPuoeJYR4apSsmDaMHuPbA4Y9ZuvAFFVP",
  "key30": "5BzVC2HyMcitR2x5yurZHAz1U1NpfJYzzZMgWhi2rWKmNn5Batv7vGcL6GVRmqVq89UJhtMPkCvrJbve8RVWk9sw",
  "key31": "U5MKeWZRHkztN6fNQ4f8nyHk8Y9sys8aPPsRAtUpLayfmE7h33c67qf8RUUfsS29kqWWCe5jBsjMEJfWmq255tJ",
  "key32": "4L5QsNesRqGScJdAW9fmSMc6Qf7n4JdW5uYpfDQpuG5Kb3vzzyg6GKnpHwRSRzP966ddHdAvTn69JLLmEKXbAHor"
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
