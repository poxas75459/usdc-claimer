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
    "3xtSUNQKX56EzinMbk9Se8kvmGqAxVjs57xJ75Fbj2Xy3kLXZAHNN99mea5iwoimzv3v4M6uJgRv2ESZtcMC6vqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VnX8EBAB7TZxdbo9pH2sfZK9pi9u8QEbKxRy7Xkrj5KXrWk2NjQBnkNW1rnRQbzfqqwrqyz53ShXH8GPu9KtCe7",
  "key1": "3ATgasCozpZcsqSQUddes8GUtQhNQkQnTH82zSkT261YoJJumKTaW277Zs6xLsknEniTSCVK1JFwPab4Gt3M2TFb",
  "key2": "3yrQYHFric25UH9wF5jZSzKLo6rZskB4fSs9dsXsaposjqcyZGehk6ejFAT5cpH79aDz5zFkYgKFWLQge6CyHM1x",
  "key3": "2Mh4ArivxcvnSJMxwpQJmEbpFSXbqEUy1tYcy4qxFTJWTX8PoKDU9cYtaW1Ve2urjj6DGBfypzxjuVkbNDvX8m4h",
  "key4": "5QPVB8RF6GNMCvPAQmQhpoQw62MvabKxWj3gprtVH9J4pGBQ9UPLmynqo4iTQ22WWAEjS4FVdqiyr2XDaGocCasj",
  "key5": "39Dcb9rcuSNLDkprQ3XBTPrXMLzFYoGmkvcV34fj6nbvDbpMziwHG37kse7TscgD5SJQrnFim6roGySoX3HE3EjZ",
  "key6": "23H7d1tt5WTaoCXJfAAXiC17gBWpkE5KRZcnc4gQnUAruKbA71yWM3jQdmk8nPbBDa43pFiMUsVSy5JP9oxkoSWk",
  "key7": "4oWvUpNEAy2xYZqbvJp9Gt76k8R5xUFiDhJ2dtwWURdNZPwTbjUny47JT8jr4CQAg3ZW26anvep1kj98De7say2m",
  "key8": "2AJHq62fkJoT7MoNNjAfg6aEQsZYm1t9C7D4F8AbL2TBBArLqBRax8uogmqgVhNjMkZWPDT1wYm7tDEYAzgPYuSe",
  "key9": "5oNNpRFQE4orYfNNV19XvTPVavahLuHfyLSn4mKJc5QPHJR9xTHXZTScRTS5pjia2sr7aLDbqWSEiLyPdB5Bn8wW",
  "key10": "4WsaY2Wkbmp5fMZWGxMPfVxpqLiXxMBFtcLp1V7ifxGDouVNNUWsPwqbZP42qPJjwB3mmJL6C1jd3k1TV3AwqdxG",
  "key11": "2hTFsQVGNUnT5mRZVmuzEwjJuWd1UAJAMfrcs8ci5nHV8CvXxwvkxQkQSiMDRZf6hMo5mUzkhwHNbz1hZoawxpSE",
  "key12": "3R5pTHfuc5G83xVNPbZm12ykrgaAp4vbbCVEw39TamJNEeGduvbcyge5uufMugYUcjgi7vQiXNjsB5B5zPQpPsFA",
  "key13": "41nr9p2kLrm7xG7HYzMU18cuYvPiTvTyLaTeEAYp7WESnvYj7cP3jQV6n6SmJLCxzDFZpTJa3Bn7EruMB5EhAwzr",
  "key14": "5vqKpxMmpakLJW8MUENDB8uyVwPje9bxZq4Qx5UfLhJKgx4gJ92rS1hZudg43nqCisgzHHXniD9xxEFpquTurNCd",
  "key15": "4zSWbwNSSbtcvm1vpbmuBABtGFT4yuGyFTeoX2Hv6ffzUa1MT9AvZ6VrkJAgJ5Rvcw1n4YhrYgnTV5Y8rSWDcsyS",
  "key16": "5MdNv9syBZTDAWYpLbyis5ZRTvdEMYmDLVoyHcHTVHEuyjwYxmrXRj3jQtK12hKsCJ6Hv2JerQ5d22MAuQeM5F2i",
  "key17": "5i3WQCTPHLRbuFhAJdV31sZZgqbg5cfaMWgCRSj2ePJ3gvh5mRHLLHihRJGggfcZqEk7NkVsr68KBKbU9ULcNdwg",
  "key18": "cruXRoQ4vqweNNeun7eQn1hTvgyq8Zi6vTvqnp66RSpduCFiqMJR62xRyASnotED7zsYNRdJ5ZUd7rcwQHijp3k",
  "key19": "5LkTM3md1mDzxTZCHZyKNEXiAv8FZmVyUaMwwhoLJJzL5jgEiJzBE9b3KVrGDdxyge52Wc2yz7NWELHzfWYMCXy7",
  "key20": "3LMXx1VAchkQU3XWRuijJZP6Kfdxko919pBe5BdeMwDF9n7vB6KnUn3Zpjfi55Ku4Lf4V5zdV1kajZV8xeouyCse",
  "key21": "61uJnuddipx44X7U1Kpo5Ji4tajpwAsKrWqkSSAvxnAq85D67HKEAnigqK4qPQPnQtvyDPRMTy1BqYikKNBNJfuB",
  "key22": "3gaoiDzkUqXT49nSt3MVKiJ132BYobphBu5AozDJwvA5P4evpap1yxsUJFVQ8A6VGTEsDPRbj8oz8zDg7DoEbAaY",
  "key23": "44bkCfqD5HzEDPGzd7Q41Cw5k8Mt5JtbdV8hubZP1cwotffMz3Zz6CLoCsRzMgQ3aGPh1NJyBMVNzTGSuQyYq7EZ",
  "key24": "3Yz9qQnYRVtsjNDYbRn7gpjYJJkj9B9JmWuydCdo8N2nzhyAQAVUGiWZsLrqhPsr2YVezsk7JJzJcdku8BZEEXQq",
  "key25": "45NwrcYYcP496XJP8MMvv5abwJW9AJi6xjCKMCnPRVVKTJy1AQSHb7ybrpfSBm6Asrw8HNpqV9JfHyHfbHwJUeC5",
  "key26": "4NGt1HHxDYqL98zyDKHzdy1zdXK82Py7zLvBup9EPBEXNCu2seb5L64nnPdxUgf25NxMq4eMPf8GXJuPKJP1kdUt",
  "key27": "2u5am5dnSKFtbDV8RzLiov9foxdk8Nd2rH95htpw1daFxe2mAtFdxH2755HzhzwAXzXMZ9oaErkna7MQaD94wajB"
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
