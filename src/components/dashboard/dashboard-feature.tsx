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
    "aQJZkT95ZKM8ucgCMZa3sHQQauavPYc498NUocJRg96uxdu11HVwaEy6dh6bJwNHoDPJB25jirgLB3Cg5CspDeF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hpKSQAemYjdyGmk9Y647DyDzD1H64kiCDaYYaJg7BbrPFTNvSCfGxYpkQXFLx28a31zaPLschNLs6jcXUSRE6VS",
  "key1": "5Ka6VESjCByqEWekpjUUtbMJhQNXMJQEFd8K8fPX9vunfLEdkNok3DX6DwYtRtTNoadLSRfZdsJa8CqTuFbu3neN",
  "key2": "PScs2vQ1tMsEp4n1VXvVwSUZVNccsUn52PM7NWd9akCj1W1vCTGYczX5YRkgz3xJB3KFKLjH9fUChJZpfK2DDTe",
  "key3": "63XjkafWbWr2VxQEcPSUugPBgzFoixkHT6RTSffWHpyjN2N3CHvda3DEXF3t9nUefBwpqn24qyJtXnBL59vfm8wk",
  "key4": "2mAqw1EbSm3foMHHLd7fAee6kXKry2xuJu3SRrH14JNomonTQZ2CBEmKP63bW5JvGDm36yXk9E1T9y8wWpFTznKc",
  "key5": "4fFUHzcKhb34r9nVrxnknTXbdWDNJJXUTMzv5BujWhiJyC6Ph3mPUqW93g2kRVd7KA3SQrSEuRFHFsfMA6MxrZrh",
  "key6": "52NBrR2Yjmx5oUqDHMorzso7sEX2y8aGDdSYh6813dBkd8knwztWXa7ndZY4yWyhUm7mj8zMN1izV55FvFWArqJZ",
  "key7": "2G9Psvi9gyDvvdrSsb4wS6tr5iFfqAQq13CiVR5Zqh6hms1Zha4SujxkpLcN7JiTNcA2CzKQhnxXsTh7Xy7Nfw2Z",
  "key8": "87nYA61NqHcdgifrGfFou7ebE8Wa58XH3GkADp9sbF4v8Uj2PtiPDd1jifdNRM6QPgBhmSr4eAwBCACbsK1NWEj",
  "key9": "4SXVmAcLY1nvHwAmXcFk7JJf7PdM8UhGawWKai872TBP6iibzNtx7XdDayJW7fXN6xHCNujVbiQqQGQq8aqdMLAt",
  "key10": "36KtL9tQmtEC4Bq2xhL31sPQth5pEseHJ5YA7MMsyi9JfazhpSAxJGzkjvDcnLvy2nc4dK2av9FTkqdVufphM5fc",
  "key11": "ikLhowSmApgw5s4tx9uChc8QrHcywUztkB4EEh8h9ctZxmiWqnPrmNyFn1wfKr4td69tdmdHFMkdBVMUXBZiYKT",
  "key12": "4738UZ3428AmpzGRPXpmXPheW1Pgv4eoG848qDsoiGcbwf3m6JXfGFhjKG21EkqRzqcjNyFMG2NpwAvNkwH8DXZD",
  "key13": "4QEbeAXuGEhEyRinJof69f23GHtRQii2YM6s5miH1uz5XuH5RS6F6oLEDjFXpzSwUHzN5Hr8YqR9zjtx7oPPj9gy",
  "key14": "24umKeyAhuYJ1FPmJskF58pNe9n4TWHNhSgpJJQhQNtBB4vXxBWajBdbUctwBKo1bAng6TYvKFHconXcnXA2Pn7M",
  "key15": "2rPHx3AuivMCbuAnPeh41w4pgc6wQFdNMeQdxAz3dyZpxew5AfpWGqWy1NodX899kjBWc37LpDgPceqLq3EfTdss",
  "key16": "52cac5MqzPkXKVetUn3AtVZJUuqVa7dEz6wvPSKx2xMnGp1Zpe5VBoHkkTGtqkrvQUwhsasZp7QYhtzUMya1mZuF",
  "key17": "3cXs4h6nQCVfP8JbZUmQQ8NYS5r1wjBuPhEDoCMvCxkv39yP4XYYR4ErDb3YREznDkBWgfzmX8uzYZMrA9wY6Ze1",
  "key18": "SNQAwge5rYc3hM2PvJ29zzptSsDpdpLMSguRkd3cW5zG2sKX8acq9h4jzH8nTuXeyZnmqR5MV15zyxLMZffH4Ad",
  "key19": "5FvbEFzP6raassnCU3SZhTPC7VCb2s6B3KrQYpJhRNveTqsuyhXWTGzw7cHwMf457hiyDjGEsQDFXQpus6z1ji1D",
  "key20": "3NB7YyhwkTbbxpQx6JJZKhgoEMYawt9kFJC9mt7isSDZJ6ZNWngEgan2NEEqkdxpWf3gqE6QrbfHyzcy96guKeL7",
  "key21": "22QptwgP2fxqKbeCHBmL9mg56p4HUq6D9CSatiH6GyU5t58cytKoJa86mvyxTMZy3KC9Z9W53647KAPCQatBpWjM",
  "key22": "3UFaSXBFkpUPXG4diU14jEJm9PUnS4ZWXYgSqzKyMGVbjk94Jnr3JoQZVzV8iD6QTLkE5bzV6EyCpCF6HMunJkAk",
  "key23": "NWPMKbXUfL6CVGVUYKePhVn68AZcftepPhfhwvoPaMWnrbHJQFBsKF7qEg7qafFKQZkDP3wNX6rRtGSsVnCG4F3",
  "key24": "2sWxMQYoEPhHgpa7rZxpkqepXKeDkgqeJGwe8DJEqwAVSTJjWbsBYPU6BxcP1W39nZe9BQaWKmec7KkAR8XYru9o",
  "key25": "zf44uoSEp9cC47fUW8PEpkruHgm1m7opo7xPHTmLsujZVSbme8nxHr9wqyPpf5GzP84EhPoYmFja36zDaGY3y6C",
  "key26": "3cxYntn7xHbm2qkEijHvfyPBeRyhRHqJh6q4LvJEM8zNSkCRvvCC8e8yk8qC56q21kQ1L1m4JyU4ML1ZhKeUnwfo",
  "key27": "4MLif9PtZtzXyB51knLdSEEfpUKXazUiL1Uh7gcyYV92nG1Fw273YtW1RxzooQ99Xf4ChrjbCeB2CsaZ9i6ZhCQu",
  "key28": "5Muw87ZBAqEnJSwzNCXRDcWgMT2ti3QXP9BEAeyd4nxo7aPqqEvvbbdnA2hZstekRVw1uEAVusc9pHmKGt189oDW",
  "key29": "4Z7Tjzoa5FwcpxQL1QyCpc4VVfcxpVrBMrfm7uT4tFyUwp6Ub9bQMpQj465cmRySkMqM6qmJAskZqB82MUPe9cUB",
  "key30": "3bYgxLXsp7f13z5h1QyZ7opSRGaT86mfvWrfTEtDpwEcFTRARbTGPvankJK8KJy5Vx6hcvM77PvXqtWQDW7RnxZa",
  "key31": "3T6Si7BLcaHThkWWyajc7Bw23KLBJTZ3hL2VBCDHH8UQdbQWPSeNpfvn3PuSrDMkTbHkSojZNHsfs3cUWGQhYTk1"
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
