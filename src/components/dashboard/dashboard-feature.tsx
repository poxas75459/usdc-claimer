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
    "2MX7PsDkPPZ8NTTg5TEBQocZ5uCSENjZa2PZxJMqVcLMBjuiQeDW6ZC3vtaGYuo8ZNdSbqoSLj2JMBaDsbwKJU4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54SsQ6K1ZvyxzjffgC8qbqEwN42LERoiASXgd3JpmV5PmbrukWFFggyTX8oCvFK1VwLGHgj4S5AtjA8M9PykPfJT",
  "key1": "4VH7WQcKcok25eWyNLFJdfKurDKmGDfqBXKFyEgpu8ie9fc4bX6S9RibPTMQvScZ4Wu7stZ2xEhpfWsDuV9vMUq7",
  "key2": "5VSqLrvC4L4pLaMyuy9FzoXQyKUMHyGBw3V2rWQ5vuQm3VR2v1xz994M4BysTTJqWPXNjRZUt8jw1vJNxt9geF1z",
  "key3": "41TcWttseC3gbg4Hj6S5kvmrzwjf4RBdAQuBcTL3H5Q6y8bdWHaf9HpyEjRo8FRxGuDrf33Hk3GRfm5TiZKT7nwo",
  "key4": "2tkPZmssN5Zdcr1hHMjgbzjiLApZZiqxbvEk2GDQsvSof3PQ1NHd8ukYV2J5Fq9pwsHE4E2CFehs4fEExqxLjeE5",
  "key5": "5yk8kbF7cTk6teh3oxBtpvF7RxPQaZttAE82RHatywWzmBEvYAE58TKUaAYa5AgWsac2E1VVDHh8yQcA9oZduZ2Z",
  "key6": "67MWwshNFprtMhrXkgNE7ZSzJGZQVVBwP4arkRKjxJVNCiUTD3NRmoZmvej581skPHuwtuj6kv1m6kYbPNTAVapc",
  "key7": "4mQvcqouwGLbuV3En5gPejgPUE31K71vycQT5sxT1u3SoPrfJdCeKfMcqWwcX7n8U9TTMtwcujjj79kLNWe4hG6Z",
  "key8": "2dSq17aPpxMjHbFovMLQhJ25B5h7ZHE7ywvUpEq9hoayn236JddLt2xV3ZgWh2P3my66wSdnchNtsGCYtQmNRpvg",
  "key9": "3R5fwBGRsZQ2XWH1cwp1WH6RnbrqdZbdp6WpYyCT5NjwJQSt5GrGsCkTfT9pYNGcChupgsdHMSBTpaKHqCGiXgUp",
  "key10": "2L1onRMEjeoubiiob1fU9P5wSNWx8NXGeZUvyYs3xuJnRZ4t8mS7Ueh68rpZ3VzNnT5fAKLy87E6rTMjLbTTMCwp",
  "key11": "2AprkXYrydBA6nih2o8J5mqe5pfaU7oxVbt2FVEcrWeS2yNuGNSZ49HtxnETRCQMtyWHviDk7r1uEAmBy1sKKBs2",
  "key12": "xdx6NPpM9EjrUBJQ6ceNdwPLG9SwicWKwfZgT4Gyq5VUyU1dLhgSivdzKF7cFabQxF1ggjjVLUJHyeQHhujK2L2",
  "key13": "46AxTZXKPtbAQAayXcwnmvv1Xby4qjTEMeCHVdAdTGrbpkoE78myAAMb9du78B5pK4GRHRwaJcQpQrBgEEovcpy4",
  "key14": "7Tiv11YzWU1Y7HnPRuR394HgDanrnakFUzNXCH7WSNeVq7X77bn4rwRYS2msPdtVUCTPxns13EBGrwf9uU3nSQT",
  "key15": "2mb8CBFgbxnKocBhGamPNoMNLbjKuzMRYJTBvyqxNHgj5ayn4y2ALe393eiuFGdyJMtREaEf64RQ1bVpJidE7A2e",
  "key16": "W8V3A2ApU9vmhSrCrvnCssEW6qm2ACxpqqA7pNyqDx7QXFM89bb44XMaMiFd4xYoHsbFBHRXATg2aDUfJJgfUJ9",
  "key17": "QyxLRP7VtKYh6EBTjToZXyuS7A3CD83dKRGYJpT1mt6zBSjtMteoLvuCk3ct4sL9tVdyHL1EKXurD6iCisp5xiA",
  "key18": "5wQCkF8UENTQT7m9tnZL2Bvv9sv9E51UUSwU4aeXPouTRiftSjrpw9jzaPDp9pq4f51vDb54SQM6GQDHmeigd9iG",
  "key19": "2PjQ1jaoMg3nM5Y5DSgNg1g5LGJDywb8N5qAuYXTkShDSZk3AP491wm5C122eoaCiCy13XnJqoyuKVE7tTncp8H1",
  "key20": "5XnVunZPfejmWLkQWm44SW9jP8K1avUb5VKEnRpcBnxDB1zA9jmeKKdTvVX7zFfGHroef677duxBPM6x75es98Vw",
  "key21": "Um6arFGdVzbFSH1UJrb1GRWoC6t9Bt3m6fctSXYT6RYkJindHrpVh2a3JR3HdbpATC3otEuBEXEduBXtoUGpPKd",
  "key22": "4HX5A1noTFk4RALUkYqkpkWai8mPAqVyCjvg2Y757hH67dH1a8qjZSxvzmk5DBCb5BAEsheMRWXDuviwhWyRgVUm",
  "key23": "4q1abwReNQAee6QRRBMVuvjwhVukH7TZcgeveAPWBkEgWJ5pu7zbVjDPeP4NsAjuieAo4zSx7NjPRoYssvQvc6t6",
  "key24": "4R8TUofmU9LtVNub3uFhZxNTtZ86gUuKHJ2eqxc9BpNmEi5knEcZcAvYe7AvYK6uA4MHMZY27JHqR5cB3Wzvnyhk",
  "key25": "3C2GEfi5xTYhtXDJTrAuLuvxk8jfb7N9sbqK6KRgVVZ58Ni9HJKpt4Xmv4JXvM4HSd3uHp1a8udjQ9MYXkGqj17n",
  "key26": "3nEUBE5gr8KxmS6mBirAg15cAbKByu8fPctXHkrfuWzDNaF7x3aRixgykJ7dYYnpX2u42pXnBTSKGeGcV7bBiS79",
  "key27": "5Gpvdv3NiPHL1CLSJQX1ZrgTEterXSMHxZijq8waXCzGDQPgEZNgKLFa5rgupgLcWT6Jie7CN12T6xZtTfAaF3CZ",
  "key28": "5aBstBoCL5X9yAb7Y5KA9FfwB2rzE2zW1GCruE8xFNjabpLQ9wZcLJzwMeQCFQSqyLhzazFRxp4HXS5sZGAvGRGm",
  "key29": "3MZjbDPLuhvCVTQLJjQ6WHKK9C3x2SwpSoJWmR3opEDJmqtpu2jnKpPiurnVer4nNZ2oVhbbz4C2i6crVJKVqUHv",
  "key30": "pNcmwKtKWreWogex4V9huBVbjpCvakcCHJT47oUpNbZcMZ7ybdorQxzmwAR21AnGcFhqzHqVuAv4FUZicMv6z74",
  "key31": "3acYr9RuitMBxXUMQkx6wcvP3E7ciAC7XWVeQZCQGaxUb1Fr71em7oUeQSarV1D6T9bVNPEZuFFcuc8wvryQ39C9",
  "key32": "617ELW6v36gP5gcYGmnWNnZ4iCadiM7nA7sphF5WD9aumMcSFNt3gV17ooDd6jxHbBXSBRXMpgwksZnpN394d9aA",
  "key33": "2rvHSdXA1f8b9DBqk4uNR3zat2TU4CBnvZMdCdFKGiALVTNDYY5eaSHGoeGPheGXgSanTV8GiRv9yyzrrgjGumkH",
  "key34": "2BbD2RKvGmFQyPtSGUuifp4kiMiwqDfXS2aZCNJp2dYHDSShzzEeDfwBRaLfeupsUYNffk8xMAmjRHiVeXUureLy",
  "key35": "3HaYSxgWvNDwFtyfYe6aCG7vu1W6gtuW9A7SFkq8rUoUt4b9cxaoYg3fVmXrkP7xR2EpHwAbu1HXtAc2i12ZjK9q",
  "key36": "52iHyAtKCEbg5HBY1sS7qMdws4V4AZEdXPWnb9MREic1StG6s3ufYziHQsufRqRK79hSCRGgWq7xU7dofmTJVHQE",
  "key37": "4RBfRNmJ8n6FtjLriYHriBU21xmURN58pjW9uKzYS43QghpAJjHg5TJDDFnpU3UQ7XhBNaJbQdKfvTfVYK6m3NYB",
  "key38": "2hMndGqpyCzQixbbMaE2UyR6GWSQtGNusQmz9s5LEy32HuXZeEyEsTYrh6kwTX8StvkAYvq9ahGAmcv2W9r5NjRR",
  "key39": "3CQGU9xa4PKP39KJrocr7UXosvaUw98yUPW5bkM3yaySReFTNYb3bA4bFkyq9EGEHr93QzuytsZWQfkWfR9QATPQ"
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
