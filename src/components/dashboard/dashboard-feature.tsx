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
    "2sbbbM6Zpe4SZTFkLsgMpKVpe2vrjSbcMN1nVeFyuthFm2Vo3hrtwy5gzJVRryWxaRiaQyucQCRQ8wPKgEU5rRHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pegBdzEWGie9HHqgbZ2bs6aedwT1DQWDHgnt3WMeoK5coX4hSWmEpUY6w1yW5M4icBy7iCujGmPAA9QtJtBBKQ1",
  "key1": "4gMfQse6JQdr3vf1fVRiVhTJLYKbCRBkzgGZfAA6FAorKUXxBoMdqVVcvHgMfvFe6rjUUWH5VnREbF6dGXLttQqU",
  "key2": "4ujoGtEArMrJpCazmfTPxLCFuTkyR6KQmQ4hHUY3sNmHgbiGKAVYcT7czE4PPuZnHvc6yQc3r3DurX1T68UmLXow",
  "key3": "3A9sr58LdHdoYBXfj6ZY71bxCT9LUijew6CG6858drsbQh4KBvGYPYPgTFzeS9SnkVuZCmqob5rMKg17ufGxYGhw",
  "key4": "4zsKwPg4q9iL6GCeNETqUpjdhrT7YzRRbQRSqMhLg999XRVMKL6P8vfuC2QoWd6DXsLdtBs3anguxMXnLhbR9oRJ",
  "key5": "bqZpaY5UmVWFnM3kMFtgV2mRW7fCWXAkWP1TzXABJHAwSyJ8WyQbGdMsEmLo4pDzfJDFm4SpzdFpzjjXQK5ebFJ",
  "key6": "zWWTicugHC7dzzYM82oDTxwjRtncuqCB5Dfgvifnm555BZXLtesMvWzgPfkTVN9U3oPdYRprWQHL5s9cdRJvZP1",
  "key7": "4A3FjoH4tGFHzvS7BHrXQiebusP2jYZP5uheb7U1Ukbu5d6dSrsnUSatQE2SAQQrxwzB6WnENWya1xJsYH4ZHEhG",
  "key8": "31GSz71ySZcg2UKs8XyUpBXPE5EqtZsAQpMGRf2xjLswHWAMfeGXMhvujwzPRjMqwdESz4U1SWCaK4chphXEJQ1w",
  "key9": "5jgfgAgrXDyt5EvkRELpcAM2AiTKFrHrxdC5uP3428SVoA1AjJZodUaQW5aW6rHR4zh3myrRB9BdZdTGUCjwbc1b",
  "key10": "w3ERMLT528nu33Cjdk2nRFqUwyf9tNLL6xu2KxhhhLLHmcLEHGBpjgepv76GkcjyPUMEBFu1TZ9rdXF2TWmchgK",
  "key11": "4bMQQ4QwHuuaR2jgpwomKF7HVPZN2MPQvNUJPqwxxEM5fwZWMgB3SgoTRRvsBAAzUQ6nxr2KXToHgw3x5r4PGnoH",
  "key12": "64m2x6ZtYbhiwk2Qndh6339nDzBAzkEhStm6zj5womgKBhvVPFG6r9j1mW9E1TasGapS9rfbsvCSjn5Xg28wzGaq",
  "key13": "5ZtKpTpeEq3RqeTmxjEs1Uwi42vKrGrXNu9xhbpVDWAi3CHUv8Zc22V43ammTb7y7gcwm4sahhQaEgHjPvQQSyWg",
  "key14": "5KvcUJcSmw8jvp6y56GTb825dVjk4vof36bD3XCbxMnf1qu5kY8NrBmMX7pUVP2F32cGf5RnhvF9qzSG2Xj1Ank2",
  "key15": "27NBbuggHmym7e7RHYm8wLjtgeqeNX3EgUuz32JJEqMJB9YqzMfEHtSP8aqJaVfZoZGV3bre9LqWorPqr1fsin3M",
  "key16": "5XxpazFxYDKfhcQo6zDLSGY2WuBBapA9LxpiFpSMKLAqHVcZ2ReSDTp6kwKxeSWVQrKQtzTCaxbEVsDuFZorL5o2",
  "key17": "bm6SGTu4udUHSxmc5phiaYSJnNtx8WhJxZiSQLN8BApquhnPdP5h6vwCzgvGTeqXBkMjz75Pc7dfLTQ19VNrP5v",
  "key18": "5wPzoLYTfeZ8vBHf4DEHamuBrFb1s2uXPUY4v5UDmNVDnYmYHkjw88Arjwwui2phaaM8HPP8GLPVe8dyXf9RRamF",
  "key19": "WY7goU4kNMuSu8BzwSpJPF9GKQcpaPYH4ba4KZdaScDJMxXza2cgMx2WYWZXEYVjBXCNYZFZY5SuySXike7jfFR",
  "key20": "5ykNGeQRXbhqEPzs73ZLDvGTTfKd1Z1xYSSc1UxLvxJMZ9G6FfdRPRsJsJtyERrMqJLwttaEVqEa828cx6soPgXj",
  "key21": "2fwh2JBPbgzzuMix5muu3m7MZ28bBU9jbaCRpPde2MnqpDHQQEjPWiMmhgKarNjmBeh9U6JLzWcjpW5V3sT8SXrn",
  "key22": "oURggf35GFV9hTbLWg67RsMSTDwbVgSsxtFBuwPtXJS57FeBdaTv16zuB5yoMDnS95ws4UESSWzdx426X9q1wJu",
  "key23": "35bCxLgegePWAYFcJWPByBfXmdqegeW8kFPSZNQcoezk9rG7bjSMLLxpGvUuk3hawSwkNzNeeqxRxioej7FxXByS",
  "key24": "3v3HqKaxxfpXUHM4NjT38iSq178i3xJoU5KF1iqurCUuYDdhj9oBo8ubDPzYbXjpuFYiJqn5cGuLEBQjmSL7FW5C",
  "key25": "1ZmiocyAcWPBSznN5yH5aMMPL6n6ndQQb3cbp8sakhfkRmx637eaRUKtx2benyLMAoq8BXKQazNq7Qkid8iJk7R",
  "key26": "3kYMXWjRb2yVzP91hfHXUPkeua1M5psyfMLi7CVs2Wt7D6adqecaX7fanZi3hcWkxRWbxWmQhNdFmL28RmPa4QDg",
  "key27": "5nRy6enyRnbb4KeoT8y278Hty5LgmjMu84eqPkUZGm2jriNBmr787cZR48auTdi7yeU9YNo3ZxhzwbXmGB2Ny4g4",
  "key28": "JxGEyr81RZQqxwzmbyKCk665Y9DHkXRM6DNf2f7cSmouNBZfdWCF8sWusvyFDzEQYKhbHvnoY9LvBb7kmFWLiLi",
  "key29": "4TWnLVCC9ejnXZ9XqfSH52PRi4ASTnygTgH93CGEoDBiHrduTvKRYBrbN44FycuPDApot8TmLCz9J1MJzYMdPh9R",
  "key30": "4cxMGtHPoKRpTPvogy8BvQcYzCS6ZK2XjTpgMMbLALkebZZS6imbY6Kazn1sHxX2okmpj17ERxfdPAw1kEKebk1Q",
  "key31": "HiU216rBX6wBb4vqtjhFQMiWR9FsK3NyKmsCepCQGsyyFuLCWHiQmBtEu6iMSjLTCdZDheAV7UdaH7hUV8QtwZu",
  "key32": "2piMe4JV5Jfoq4T8QSW93q2w8u7J9p55tfT92UJhffrMoPVSsXr4aHytJKyLnhUPGEAJL34P5gGNVym4ZX8H4Mgi",
  "key33": "4XRdTGf8xsp6m6Smp7Qx6nebbkwayrbMgTQ76MauWVAuK4hfvanqcBQAeZgez2ucXbvv6DQSa54wkv1QVXjc9oNx",
  "key34": "3ARrPnV4dKsbgG5L2qVsH9PBpCxdV6Yy2f6J6ZRJTzPNmXFfNPYwrVp3zj26ttwbxk477KcAFstsmAW56yh9hwkS"
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
