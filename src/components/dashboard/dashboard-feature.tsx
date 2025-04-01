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
    "225eCrF4TRyE8zjnD2caa14KpdSQygRsaYxPCN4M75rYX3yPAshmCJuWx2Rps6f6mFyJ9DtcBAa4sCUVEnaMXX8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gt9gPW8wCcApVPsVritBFVNPgFLqmHZA35baaX6wwDQYmNj2pRkL2vsbs6R9RTvyBufGCFgcWaWzrneJykk5Yjg",
  "key1": "2LDpNf8Ep5Jpdk1awdzoVnSsMziG7WVgtc4a8opE9cGVpH1TrEzLfdsKqqGEJByMp8awQLqyevbBf3obbXtotoFr",
  "key2": "5y7PGYSeHd8q6FeJ6Q6wkcTHjFhfJe6Je44xtqLz6BtWbqXk76sane4enCh7XeqQfJ4QkLQJxXqFJERiGTxXiCT6",
  "key3": "sJLsVr9iAw9WdHzJgLz1bA4P9sHrTBxVjtfjVpwVjVTc4mHptaAHEnQo8G3H2VeQgchM4pKTjuGKDA9fXPNiiAJ",
  "key4": "4k1yX8ZtUuzoe1UJNQgiD3xvYv66XmP7LZRohdMEU4x2Kf6Sn4PyeiX47fRBzykdTHWjBSCXBgsLUKYiQVpeagXe",
  "key5": "3aMmyxFGsEoAGjVP8S3yyDjdFCDocDZFLnYonyFSQ53eb1sMUgzYGYRxTywRdu8SgiJxo1KTdZuLFYR5UknosH79",
  "key6": "5K8sAKBgYFR99a9Uw39PhEutQY9nNh7NAi5tRvBpePa21fqvymJ5q75ktsDALoyByhrBVj7vDPJ9GE9kyyHqdJcz",
  "key7": "34UFvCvJVHYQHoNp7QKgdaHU1mmDJvvmNTxayEmRyz4YTqCG7tXLRAGhiv9GeXrHUBwyUoQcY9SQgAJKnJAtzTY",
  "key8": "uVLFpuhWxMpN2tNypumrfRfmX5xQDxqJZGQqftuqyeTVsDoA52u5DXLnHfFyN9ASLQXJ9zdm8E2vXzJp8yufvjV",
  "key9": "cwuaTjW35FyndTGPia3PCZi2xP3WnKbXZhAyLzqDbc7E7MTAZK3DeHgnwHQhtkCSCo9qoiHu3hrYhThi9FCE9De",
  "key10": "2omYfcFU1KFjToHRcf5kKdFVngg7swveERdDRxQJiafwNqHoB5uMZqZfpA7HwY9YQpRqn4BhZaupbzsXxCbCjCjR",
  "key11": "31bUVgfD36nFmDAwV7FgMuwbRsMh3DKe3Ao7xFLafvpHJKzgBf3i5Uzf8CL1Q5XKu5vvu8GY4WfPvMjLTmuzJ7Kc",
  "key12": "FSFEE2CDPCqxh1LAXrt731WnwZqhV2SiHiHHh8QWqqxwif4oEaBcYxfmWLaYUoktCVncZMh6YKoeMdB7ZGJxLqC",
  "key13": "69WkFJyfn3u4vPTegLaakraDt1kiSx8XfCHMRoVegdEkKHLhbxtRmwixdr6H3AkDSptMsaNUUshCr6d6UVFnD17",
  "key14": "4H1egiXshACq5p8rdpXApfkm26bWYyCkzbd3zfvtiJpzzNVQECQYSsW2dkEJhQZ9QeSmEyLLZsJPtcoN42KDmxPG",
  "key15": "2E7PjeasPG3Ha29b6XwDHiRzoGp3tB7M2Du6PZcb3D3tcy5K45jvPHX9v7XCmUNsurYamskQT5xRfqGQcwCKF3be",
  "key16": "waDR1TYtezZa3QuAMSa5pc9VrnG95MdLXb7gQLfWR9GbaztnU1fcAWYZm2meqaqrXnondMW5Zhm33xii5yJ37TJ",
  "key17": "2V8EVEN62wV81rMbZVfhrkb3qdqq2UH8Xr6eDYRfGuXBvF6CnXdTcDTVRKFyaaTW6URM9MeRG2EH5p8uSFPQG5oS",
  "key18": "63ayc6oFH7AgYHmZDinTFyP3w3yf9VBYywKsaMnuPWG6L9gjQmwzeWr7Q2vdyeLXRzrNAWSiPnxewbrbpKwX5eKk",
  "key19": "u4G6b2nBKcPu6qJCptMQUYG9Z2h8KYutzMddqdviEpMdVD9Jxm31YJaaLCZR14QLuwadtd5PEFhuHBDJNmey18o",
  "key20": "3WcpZaBynHuTyy9ruR9uUnvdmWw6hSj8AocRcd6Fv62wtNuNyoXfqZKWZsAg5PvYHMsLix8FTkcC7DHS8gZnTnwE",
  "key21": "55QqWunLNpoxgt6z8xU4jauKDni44HNE1LLR8i6YVu296AzXmL57rw2xKkhkX2EfomRpLUuFu5otiM37xn9SAvnX",
  "key22": "2FgtgvARzEFCw6CeDMwpqWYEAWLgAsqAMk3zkhSKRy4n7GRUNAGMKkwbfBqB1w126MZEp9jVMHskW6cJLFqtGjt7",
  "key23": "2WeAfr64S3mbEQfGbSHKjcjDuaULzykAWM5hjGrXEh7Muc24ZQtWppMSpzfePNNGEYd6CuYB7gVeJMcXzeph7K62",
  "key24": "wV8ycKmcy8QY9bRvZWsewuGyGfSr6ypRSbFSN6dNosdtL1cogmrX9iKkXcwGYPdn32CKCVCuBsf4k7okEMJbkmG",
  "key25": "2spP2VnfFREsKW4asCjL6Hy4UStYbhDNP5nDAjgKYueiEUxX14ynqgxL4wtk8YFntdTQ1JsJfptnWxxjAJSRMMFb",
  "key26": "4eMwB9hg78oSJmVN8Hoj3syWYe93LUswtkDKZaMcS9zARhh8ZGYCDjDBrZAUbky1cGMkp2WGmEQKRs8cn3tjVsuQ",
  "key27": "3PJR9Gir1yxBi43xZvNvKs5UJh3qiy6ukdZ3dpAA67zYYmnn5WyyMe7KnUyXBEZeFSqaULq8YhdB6Wnp3ovAUdwF",
  "key28": "5frYkSPr4k8yi9QwYUwPXSzME6JHuv7nxvfWkwB9GbRKD31HFKJp47Xvs762Jk5oarM6weVLQHCyusgJ56oxHXz7",
  "key29": "3zcs7R8woYi5XFa2S2fafJNj3XjUC8qqakDhUoHRCFsukFFpNV6h8TKQP9BTdvGTPHxAkpoDTVsvrgNRBbv5Ytid",
  "key30": "uazRf8GsKtTRNJToUdVSCQVtfGEJcYm9EyyoFfdTjnC3DF3UcZfP6b2z4ecr3oQLM3y1xZtEygJGNmX8YLShYK6",
  "key31": "F49LbCFiF3moMfEP4sXuSaXfrHUhw11qoGr1zqEW7nJVVfbctTX1KZ6VZk8W8oSnzEwaTduLBZDBKhg3yZXBHMx",
  "key32": "3iZL59Q4gkqb13k6Lv38u3LVqZgFZqEPJY3rnkCFTLLfttnvf1AyUGka2vEPtdkjxAJutuNBY6eQ3DyggVh1rvkx",
  "key33": "5nEZAfU5SawyLEKLepMypAYfaXCVPWbNRq9GpASL3LJL59B1RHreXZ9cAcUkGL1kKPhyxQZYPSCoBc3JKAtPSM2R"
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
