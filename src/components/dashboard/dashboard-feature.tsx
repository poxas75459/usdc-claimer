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
    "4H4JSCRDNAekK9THKg6TeYZ7cUWjaTtTQoz6g9okU6kHYTLwLBCaYxuGMDZbNhaz41SGAERtPbsz5Y74rd5TM835"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WYAQmczVfSyZ7AFJjMRQQFKG87ScQPa1bYS2hHjjpc56GtmoHJR2pfHXb9mMb8Eif86K4vr1VnHXJf3uRcHXtgh",
  "key1": "32dFjihFYB4zNVmB9ubahiHX6Q2vHBYtfBUWEmWM4A6UgtwMoxBeZ3GvhSSFsEQz9FTbXzPZQFXAqw9Bo1BzHmGj",
  "key2": "2XttM1c2uYzVhvzgaMwAv4xBii82MxgNn2SUdNjakSMDDbGnwE9RqtKC9yrfLV6WXtF6BGCh9Kk9naorfebEBMtA",
  "key3": "5yzDpcBpCv6zF3tiEn7ajrAD9AKdvdjFei9bVynvsdpsTzS62hgJAUCfB4uDvdcL53cRfke86GWrDmduyrxAGBpG",
  "key4": "3pumsHkmz57iPVc2QmM8Qp5Xsnx1SbskYrD7zdb4DqK8ySuJeeRBGfQtLNJWU4zXiPQYMUTKWAxjHb9MAApApLhE",
  "key5": "2nNuCYNotWLPyZJBXATks6iivyz3czqt7BEKixW4FpMyqyUEFLRktR6GL9uDWvbEimCo8N4qChd9sTi6cHcuP6ez",
  "key6": "3Jvkwm7dgEgvHQMtKK489YKmzLuj42zJe6X4K5enCHPEqMfvLcV1vCLcyZag6SrHpL7WgAMvkwkz6bVVSRfnpAFT",
  "key7": "ba7d7SD1AdHPntnuvYwUNPNEUtHrQWn7yypvT6tjRPHBwBsQqL3sXYdDay1PvMS31dz79ABG4kMhGqTQE1dZ4Y3",
  "key8": "31sdYU6GnM6JfPK21XJ9DbtYSh3ux824vXe841uiuYZrHRmK1D4xyBedBjDKCv2V6jHMw5Xcii2jqVT9ibyWzBy3",
  "key9": "21rmaVL8Jh8ERPRNqLQbbc2iWgPh9jc9Sq6DiGoLpGvhkfGaRTTxsP4hJLtfsxAk2BWmD9HMRozuLkrrQYCU6qvS",
  "key10": "5u9nSVRZtPNuiQY3c5hPZYR3V94LCXzf6XxfvPP4SMpBcGMHAoASf5LSAdCh25Q1Sr9GpJsBQq8B9Sq8keMcppEb",
  "key11": "5o6Yy9nUZMf2xJ6X7TyxmC4VQEQSgGtSC3iy2C4tibNdbfX6UEfLaaJ3tS45Hv4tfx797ZScppdZ1MLGWQMPcJKV",
  "key12": "EzUyjDPGLMLmgNMtp2ysMfQ51Fys1KmZvRMPrKSnTDANoHPpoYL4Jt5byw6m6UMN1XUgJ75BDNC3wjLbuNitPdi",
  "key13": "4ReA1ASZm7xqAJ8XUNYeHRZP4Z7ipSDZBn1KSiXyXBqoz3iMjLjBskqvyiBvwofLXrUs4hqX4tgFJL8itH9YWLKC",
  "key14": "22hWcH3Y5UscaN9nMkCJ5mYZQXuGKJk3YWHUK9hZXFsrF8j82Wcp5KzirjN751uPX4fNVXqFWqaBZfZtxESaiXXR",
  "key15": "2qMbiWRTRysCzEZqMUoWWicscGSkxYxMP9owMJxLNDjdmSm1GvrTh68iSheS6ixb5A7ZoopLcRAt3GWgDToxSUB6",
  "key16": "62ThS1UcqfxMaxwi3hPh6VdNRWVqNuJsk7KHpoQdSKRPW7z7ib5mtACjzGt7nUwikzrL5DWsSWdMEYE6YhFhjmXy",
  "key17": "PpQWvVjuCcqL4KA7b5KaoX4WzkHLH6NVurxSYTuCiq2oDW7JBPiRc4DryhH1Yg14SyppBMpbtbzQu4iYtgvMkqb",
  "key18": "3RW1XBimzmPmNQ7YuzfCu28M1zNkEKK5dVEBfo8s6ttjVhNbH6N3zGKTzUTYj7v9ubXKrdsXLwuEhZ1Vk48K6dXg",
  "key19": "4wz1wL51YKh6QVQouxu5PJGHr5TpZtei6uzgVGAceAqCG1pSiM8KTSzSeC42rNUeNeqvkUCSqbhuK4EBBUmesWLQ",
  "key20": "4U79i2FcjGLVeWrwAxGoyBaW55yXCKVoLyv1YXBvdqfCsYuFddDbiz4arjYWQdgmUh34s5dx9jxYoGHgxcBUy44s",
  "key21": "2Ntc5K2rnhbH7c4Jb1Nzt45Mq87v2zthPmST4edcGgnyjHAYNhPoGuYyycHXEhkYQvgChNprzvh3tX3wp7MQRCyy",
  "key22": "5EkYTWeaLpxy3JYjbu8puZsEz7dFLhtphtXRrWSMD4pKQCtuYJLQt4n3imjZeorsx4d3gKcB2ZKgzmH4DfJzkEbZ",
  "key23": "4u7PfqFpf6bAUDynwPuTKD9gmREuKwZvqFMriQ48vdzofEqGjhy2V1CPpYGSeJru924xGeM8cje2doeF8GcqoPVZ",
  "key24": "2wtEzFWQm3jhB4xBGXMW8BViGoQbHQNV368g8KgDzJp9J9nC9zo6MRj6DCwbeWfrfHsu2RRAftg9F9y7RpcbQZSz",
  "key25": "2vGU8hjgGgaPde38t6tNSs4pQ7JwKWmbS6PeUD5tLiKx8TcA7b2bQ147LJHKHqbebxEr3RmV3fz4EujC5VLr2tp1",
  "key26": "3utMjGicHWL4jbrJDYDi4mTXBgjXyAGV8dUMGTmf7bUZpYbDP2JnPFjtTuQYKam1SMgrmmq5YpFP2trFGmMrVAA5",
  "key27": "5Xx4hyF8kzrVznnP2RtQArRKyH7BwPPbU54wqFR4aBp1h3TZA8JzRs8vkCkLkTE78urU4rHdLGPMw4b3tSJH9wjx",
  "key28": "54kaTrJEsfDgmbxZzv5KpiZn1v3BuUNGw7mH1u5ngcK2CaMnyZyUasfARnWuS2idgMDAk4vHSksEt5KYHL2VHv9b",
  "key29": "37KdfMuHeYPxLJttazRLPa7Ci6ncjQL6d28gX4PDyDuS8JXJK9pGVbAE4TQDmz7fYfB5zWc6Q85k67sERVDWjqZo"
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
