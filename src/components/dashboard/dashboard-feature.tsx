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
    "5xAfK5aWyan2iTjFePXq6vRh9TsgJNdKwhzW1nZrU9Seyea3PPQeBbBofqV1K9SUjqpGdinWxwrzZcdcv3KYVZoz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55BzSAaBLwmw8kDHHWKYuvigq84UpV24epfaeYHiCcryGhvfZ7at22HL1thTw5ppCPY1mwQpLpRv6vsaRZWWkG93",
  "key1": "2FVm4zm3rWq2YCEZNzWQXujqHDitvxDu8HExjBPJyk41D7xiUDCdSBHgRGyTsohXwZM2gqJY8KqiP1RLvRuR4P17",
  "key2": "5ULtmy369ko5o75rKDxRz8ZCamy6cPK4CZU1ksjUCtH3mm77mVrxnUHJhs7GVUXTQCh2LWnHLPeicWbM7yxy9AbJ",
  "key3": "2AZYm2V14MPzFQ1T22GJQP7Vk1DEk1q4FfUgGSKmuYHJvFGjoGn5PbG5TxWStpQinsVGUXeqPq8hZzCrpcxEdr6p",
  "key4": "5dY7MDXVfeyLvJ8AhyttXWhJAdCpxYfwyczLcmBohPXjujzte8n9uAGgnXmM4KoRoUKAcJDYFceWDr6hF6HhTFT9",
  "key5": "4BYSQ1djLXzcDutteFEJULRZZaGB7gSdsABmKUmTgrpDtb76PbCyaeWWP29TJ76H6BHLYA8s73pXKi7jsu7pyHnc",
  "key6": "2SCTHgR72zMCLDkGfx3fjJ81WqQMdchRkhBjtDav5pQVwRduqCj2NJitsj9bmRnkoPKe7WJpX7EvouSN6TyQP9kV",
  "key7": "3UATZdrE6seTdNSEZyH1umiJMp2fKhZC6zb6zpzgNQ6jpKydaeswgPCRwPt1VTERC7CWGbQbh2uFMa3io1o1JBaz",
  "key8": "3Z98ZsiwufG615c25ThKokt6aj92gzT3DBPk7Fqi6hVoDhRoHVQqheQtcFFMUWEPkBX63FVv2nNeyH15wJwtFqpS",
  "key9": "4L1n9YRHsTyhbREiABxTZ3did4D6R8svCKBcVwrNqEzAnJJJccsb4VJQRPThYMFsERXXjb1DuDrMdYBoJdYsZJ9d",
  "key10": "ctTusEXJVmSFv2vRtz7LorYmsZDvMv35Ts1ga1KayZgJBxgG4M9zEXFZvwe1Xgyrj86RQ4V49BqZPJk5J8D1Wy8",
  "key11": "2XanBzzeoA8JQSyMsHF8Mvr9giRWsmFqY8nBe1aixatezGv5dMszUXSN4nSjX8KDVmSkpHH6n27ynPQ9xaF5Swtv",
  "key12": "5eY2EUgPgxt2yeAofUbDiyP4qTSwQjPYq8iW8RZ19dbM2KExkq8dbaVbRTxXAv5TpZriHT4XroMzZKxxAmDcyYSj",
  "key13": "4cV3beKappoGGokTkWNAFyY4MsCbgTakxHHB4KcearVX62HNfUC4qwoCwZ7ooLZZ5qzdC2TGJ5kifEaGxf61SeLQ",
  "key14": "2qU7guScmA3gXJLCLST51PCQa4qEe58S6GCzTcoVdbhVEogyBSi4NevQ7E7wWCjsXkkt4DoXz1TFmghRDD1v44eJ",
  "key15": "4apZWwybgY6Rm1KMvCoy8cZduqtfvMNwu8N8HsZjQ8fdnQVT4zJVZ4TyUhZmy7daQJXV9arGcaRu1Q9FyP2npkfM",
  "key16": "2fQ1ZJzNb3eFHxDVNzHNdmRv24TkEoL5p24q3SjcanyEvs8iJvrVzxHaP49WJQi6MsyJFsE5hRfrywuVx9sGTznk",
  "key17": "vqVfNBykqyFFf2axUAFkRDGxVfVPhSJXBxRnri2UPrMG2y8M16q1rmciAs9JWLYttKQP35BXLT3wyjh4gEJmgHM",
  "key18": "5V4X2wVbJv5CAL6QWWWbkKqnbv39Ws8ahfdEW1HHnJXxMHHDwtGeFQbnVxJ3vVqrueqrJ7QVMP59PHTHvRXypYHJ",
  "key19": "3Anb1mCmymvpaaKNbMWKrEPS7Gzay3i9LN93xkkkjbMuQ8FLPniiiZmEKAkuU2S7XizyXQB4jmStKGgwFhkvLf8h",
  "key20": "4DnQDQajDoRdGgoYW7UxHBRV7pi4Qe52PE4X9wDVopr9Zo8wVaLp9L3HTZ7SfCsgUcixCgztt5DN9dUEzbK4zUYc",
  "key21": "4uGWH1hT7BkuZRgFTJyGGETzM7GYmT6RGRJ5628Xhfm3Gkv8UFuZVz83DWeamWYkdVntU6RJuWVq4mvfVHZ3hWBX",
  "key22": "3s5x1HcnqwT3yWEico4Qx3LGWvMx13KHFfWPk5QLN9gspWJbgqs2v7BqHrLix4Lpk4q9Jz8e6BVB9HXF2LPaiA2T",
  "key23": "2wzEGBHZZd6tEf49Jd2SNYtVaQ9oXKojzwdQ7N7pHPcURBRRU43i2XdDodxfitdKmPA72zHhmoH2rwXwqDkx4BBm",
  "key24": "4kNiiurxC5JXN1qSQGBU1m8sL6kL1BKLfFpXkEfK9Hef3WcAjgCWKgFknk7SyV5Zzgpjq1UYasu6AYKw3LTWWwxs",
  "key25": "5aDgHTMcAzNvZduhuSiLLXdifSbSLs9jC1FvWJxxbYjdj1DubJGFTDMorBdX2ELPQKDMA6yuHThAxedViRKwTKyS",
  "key26": "3k1ZktStG96m5YaEqYjZNqqRjAWBhRzVuohQYGFx45JkXLTMHEKKzUw1FfH4ZsUDmr9qiiGmum1U2xxZSi23np7W",
  "key27": "5mM7YXVbHwkrpfq2cBbekRkXrZu7Df1zPsmJcj98eWjkcxxw2oiwkwHNk9GMtTrAtP7Ci2d7HxGDEt6Y8ST8q9r8",
  "key28": "61C4EoGdQaoBZkqBxpEQDHnpmD7HMT55eDeJaePQADphhxtLHTGDc2BWgzFT6sxhDQixybmxX9BBex9yV27oHDeL",
  "key29": "2SVcsscgLHXBM6uV2TaVBD993ErkQr5x7yt19ruwCAdEdCt8oHsgVUrcQDQeHFTzBe6NnQJzFRt3RJGMqUti4zfd",
  "key30": "5X78EWYUvf6efBKATgKnsYtqHdtcEvXzbjPyytSPbxAfBx5Ju944QNaxN4Vtksa5YeQKFjahH8wHpSpE1QitwAGc"
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
