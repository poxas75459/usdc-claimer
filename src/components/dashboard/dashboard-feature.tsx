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
    "2BhgqjejYeZfGb1aQCogETqRCf3wEAa6Dk1RgYVhPLSaf1YpNchRVXYq3kZpksVu42pX7c4pG1GDGK1WQk1XJmei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yKp48PTjvx3mKDuB3dQUw7hq2R5difnJEnZycYtctVQiXmoKUFi6nXeS9QGDTowmzQND8NFijTMmz23sa1xLUum",
  "key1": "3KGZkwK2gkVUcJHZ1rvUZMgifTXEQNuqidbDtZXwzebwuTUhABCk7oyTA4iiDfq8LQXMDkeVR3fPLYxopoSEVmC2",
  "key2": "2o24o6Vh3vKKenSw4CVAHMKs5u6kKdCLCqGXnzrRM4LcMPSbyZbbnu8UXFKc2hqgG6oMXqW93fJmGCCYb57W11nh",
  "key3": "4kEGWcqWLzYahnpRGHussu7wD9nb13PUUp8W4bxE1HydczBooSsR4wtmPCDJq2eVgeHVuf1rpScb7jjaXyxgq8kz",
  "key4": "3zDR7UugCVkBeoht4pbV1dfYWk75HgrWVWqrJLfDC7i1KTYta4xZRKBZ2YhBSAmN52zrqz3KtvWZtR531NmE5XGB",
  "key5": "4Ps7o8ZzoUpxP334KDohG1Cyb8aWrLSLGPFGFDTXRkQt7nAbWscdNrGgGwVZzHj4yMgjvncaN4TfyonZUDV3v4HP",
  "key6": "2gFBWH5NFnj48DCvCjcL8BMa2M6FJUR6UgPwuvTuA9avyAF1e8KercpQZ1ooZ91UbR5ev57HYWmcV7Wq1eyVZSnL",
  "key7": "4exWxPaakGoEJr541YfUCn8CU1s6o83NeLHD6DwAmJjDSiQAcckLXNfNX4p3t4sZoEtLESfCsCzgsvbvz1DR5SQp",
  "key8": "4JC69qpdyETymQh6oWd6PYP8Xj74bAHpC3qsURX6NJ22tasptw7r2ELvnyQnCXMqfSBMJZmUoAW1gopCPvagJrd4",
  "key9": "2RPNDi56q53QxiC7kTJbkppxxqXqqSfUVBdTBz4RKCe2k2fHqi9sETEo3mjWjabJxD1uyfRCmgrkk66rcCmyuf78",
  "key10": "5uJPwfU3xDPhUnefKdU89krjSAKttnW6qu6tnhN2kNCpXibKArd2Vfh2itf4aQKTeVtkXwvRTADL3xu67bvCwokA",
  "key11": "2itGQ6KqtVZ8W1Nw2vaBJ5NbYD5AAVaJ7eiKYKTrwQQxbzitMTSc6e6dvPQHS9zs9FmNkDfPugPe6pGJM2dPh8Ms",
  "key12": "2gBUjwbvwvA1Kx3tNeUNVpwXkGmGcVGKMgnGs9vD5KS5TRrce7QQgY315HnWN2tyKXAWSqTPJ4a3sg1SxsVPZJ1m",
  "key13": "2q7cUaDgqyvVrQE2JGyXE3s1KYqxkXLJXwmm3Lh4LzX9vPdkDngATFZGYN7hTA9TS9FG6UGE3MT7FEzoEMf1GP5T",
  "key14": "3gVntVJZCWgqakFp8H2Zc6BqS1qrFsz4zrk6pTgEBb8aR9MsRyAdJAZUjA6hVxDcmzTt45j4xipRYQyHB5p93Yih",
  "key15": "4TFvokdieHu2AgVVcjeYRb4BJV8dMN6RVoVy2gESSjWLSqvqmqJMYdKXWEsgY6QsgYXesbKwPEq6U9DTF425acRb",
  "key16": "4fPMs2UdU8XtJNWCDh1AjX39XKYctCuNq5mm5gE3bygLmhuhCDSuCHFVeXo95Q3JqNTcMT4EuB6p6JXuZGEJX2Du",
  "key17": "44KPiB7ikgHU7jpeJUWvE3WhsqeaddfJZkFitZGu6SkYHNtQyyuzwdj4zR5TLPAZHxSDShpVdMhiD346t4AaWXzJ",
  "key18": "3nHweTkfaVtU7DKfdcrf6HFbg3HmXDiPg3GmVgyWtiRUFWjji4nNynGUqivouhgo6F4cqLrS1ZPhow7NXTUYQE8U",
  "key19": "2ZSmyeXvi4GkbBwRnZFCv67HcPfwZBuiZWf9g3HaLPv7UmkqYEjKq748EjxNTcvxvGmApZ2UzsMSnnq7NTn58XeT",
  "key20": "5gLMZzGtKMG5xFHM7tvzn7vZiQjxDDiaUKLF6YopTAcW9DttR3QH8jjvmc3bASoPzViKaN5xXh9Xr6t74ddWJPjJ",
  "key21": "25BQNtJM4EruuF6CALZ1RDUh3fq4yjaN9TaWzRojPXV7iWLDv5AuJnMinwbJnA55iiEf7r9i6ojNQ2dkAqQYwMk4",
  "key22": "2AzAbUsurtguaMR8xm7DEFdRELv3MgYUBitwAFLf4fRs4SfsEYAu7bR7ZLLe3jszawCDQoAhFTucgeiYjNhgSYYR",
  "key23": "2TWD7we99JVRBUaxwpK2gWoP5AYhrfEe8VUpxkmDvTXzBYZZodS4Tqo7VvTfRPVLnNsAyPH8RxZDVNGwN6WGKPxh",
  "key24": "pYAPGMcPUo5FVQuWWW9tw7miyJqBv6Sngrm5hUvxcQfyrAouMiJb79chYcyHAQDKCawZMmXBLydqNkamd253TRS",
  "key25": "3HJGpB31rJaZyGAL65zLjGR7o8SZWRJY74MLXJxru3FTxrnvnDyZpvroXdbCYcpFGS7kdq3Cq1xavsxh3TaTbR2h",
  "key26": "5nfqcu4DfiJts6Yee71816wbDtTtoVoREH5QMCXLpr74yYrxZGLHFrWEqBiidTAuUadYHXhriq2mzU6VjF7yq2TM",
  "key27": "49Tq6o8tKmV44UpHzDe4XbSb7L5Anx9X5YgpLFyUd5JRxbkQzazA5HiFMGgzYpvscomH5QgghVbTUQ6XzoTLXmSK",
  "key28": "2QjCgSnD9RTSiTkrfAkHoDLFN3vZ6gbSw7j6WmseB1ZVN3q8LejkEzogGDHwTV1PJxgnWSfpUNvnHqhLyX5bUyVY"
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
