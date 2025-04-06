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
    "4bgpfFkj4LS1SNiPV44UXUDNQQG7nbK1stUY3yaWDnbTWHyeW6xXQcGFXBMrMGSLZBFxoRc8njGzWKqq7X9JQyeg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vh5dwmPQh1B7WSDT1F4kswCN7wN1eBT9i62WrB28MxE3WKSh2u3C1aHf5RUBymX5BbcQzF1RUMmUYwEdNA1C13R",
  "key1": "1K98aq1MkkA8yUgU5PrE7MrnkVRhtzyisGGfKC3sJsBLnNUY6xQmZU5qrtdUTggo4tDTFYj66SyC6qyzxWzMx6F",
  "key2": "5n2AZX5q7h3xTBF8Et9dJXooKta2ZAKTbSpbMK5krApLCrkKqBxcHRXQvsRmrNGxYexWXCvSifsGsjmML9NpshLD",
  "key3": "zMaYB3cvmuxdDTNYrMo9udJnheG9ExT9XpCK2ZSg3vMUAdeLExnUr87Z6aqNF66cZfCYZvPXBvZVWu166e9k8e2",
  "key4": "Poo9NxnRmfcgfAro9SGGhnkGkXKZaGV1dfAKaoN1pjQjKzqFqFkJjzKcTHZ6tUZbRqgKfM3wkDu2E9PYxKNhoPe",
  "key5": "5bhvbQDzJaMnFu8K9zm65AQgMKC1ydQxmnEVVyr4DKVtSoWutpZfpHoXr7h6X3PggUNmRatz2gyRCookqq3SEnx1",
  "key6": "4N3mgz9vnpazQM6vxpBbtqgPZKPWVqPxjWhGG29uuo3JUrX1eXegvFW4G413pRCvqhPPc42pjEa2NHFmur9XLMoc",
  "key7": "zU57hhHybBEgxb4reV1GvMq87Wpa1Pypma2FwndGZ5BFCnxTFoCffm6YGcKFSHLKmktF89vS6L7YwR4Ho1RbCyy",
  "key8": "46R8WKTCAPCqaDb4QFgpVC3Vw1Z9gjtPDx3e5WorXN24EL4Nyz8aQXqKb7ftHg9xNQcui7oxFBSfVbd9cZrjzSgW",
  "key9": "5pQMziG26MJnEypSBCLw3Quvohz2B9DtML3M7Ch1JiDa2qMxrGEo9BFPDX53ZD6UpGmyFqx5ApoyifPcwRr2MMPE",
  "key10": "3oSHSsHVEidmYUcm3CAfqW47i2oasFDmTb2z7Yqws9mpBFSH1sfuncLb4Qxb2Ghb7r5bBdvUSTQnqUeB1FYVDAtS",
  "key11": "4zdmCFqVy3UpTQWoHvyXpDaGqJyLyMxPQz4cwK3Ra2EZFmZdKrS7R2f8AKBQ78RMQJT8m2f1mRqtSDE14khjxMoA",
  "key12": "4ML7vFZDxdNDqP97mhF6yw4we76TeSg5sXr6kbFNPZNcqUev8u1yFUxGLtYSaQYqk7KyR8sGxEDGTR57gAbKRPGs",
  "key13": "35ZzxpAd3LPHS1JCb9LRXRcpM9ts8QVKiyo4fFtFfnS2VjinBeWhvXVs4FANDzWEpeT3RiiyoqactizFgZjpmz5v",
  "key14": "4McpaNFhYPfmiZDYe8pt45ncK7Y7Zpw3Z1zSkf4Be9VkpVW7cVEZmh52rm9Re4pE1dtUNjgcyARRFDnXyYtFa9eb",
  "key15": "21WZmazqGJL8t3CwUGLNSz2cFW16dffe5B46gy8HTrbeU7Jz2viNo9LVEhmLr1mkap8pY6P2Y3yKKcCtmGZ5GbFG",
  "key16": "MpC8k9JU17yddbdy84YoVsr58p8wrGk5gtYFxTaFqVA6n2d99fH6ipxxZBgALuwaYgobogTRSxq8jXsHPdceDVY",
  "key17": "4pScd8T3wqJ11mTS6Cq9LVMND7XWbTQdCgpvnqfY5ACU85H8mUHBkGUtsDP27bn3fVb1dRtx5FjfKMM4mZvmJaCH",
  "key18": "49xCZFMddaFuLHuaXKfoU86deSKnx46kkgFiJE8uqEjQwE3imCCsv3DwyVNFmpEvwniMkbGTv8vboqnjrhqniNRR",
  "key19": "61TupBkdxtn1Lv8wVXReoHydTKxZunuhT4ypuNXqspHpbHPjYYkJxbDZvXk5Bq1JyLsTwFAFGapxFsaoeRvnrAAV",
  "key20": "2VTRm5Rs5jE9ittE65s35uZuDJAaEkY9x9seEuzTed7FRZ1xtqyX7gAWZSj1R9KkwVdxw7WqqXTSo3v7fxJuynH9",
  "key21": "MEZu5Zhq5xRns3nqyJyw39RfsXdCWUyiNcZgTnkmYgjaHthovjWnYTxqEutfy1fQ62BptmTNx1kD5nojMLp4YNB",
  "key22": "5DUWgDyLxLd1EF6QSwN9VTpEk78Zw9DCV3zmidxv5nRs6asJadRzeL7gsEi4D1ZbSyAczX6yd5JWgoGF8bzgmLPi",
  "key23": "5ZKGqW6bGBKwcSoBnSyMGVoQowMSpWPW1ir3Bz2PqyzA4c8Xiv17TeB5J4qpnuZkJYAUjVRJ2ZWYUk5r3KmdUywk",
  "key24": "4gVr9qfP82ztZNqrfzzLTSLtceiccNvfK8VLX66g153idNjLtoqDicmAN1qESoTRRZ429c2QNWWfKWPKR3hJ339a",
  "key25": "LDGeBGAdHJ6gTAKNu9GkyUwDpuQ74AxQZ4RB19YuoCqvRdpAMKqGMAw3PpzEChsZv8qytd2gGhVrQDA2EGGvyhX",
  "key26": "2NiAoekZ3S3qjyf4vsGTLviazknkPTRxwaNH5Qa2WCffzffAPDXT8RoECy3QazogjGsCcYvHkrDWm24uS49bKwDW"
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
