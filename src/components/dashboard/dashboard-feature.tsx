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
    "4dtRHreVJLuVsRyKXpgNset8Sv13q5iDGZuHc3vMDJw3TQNGBEsmgddZ98EtvPHw2fozrxvjbmp3AEMjEKw9x9bd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JsdqthuYsouiEYvUkYQjawKXUUsEhSqCZSATpJ4hXbgcFDz4Pg5vEkb5Nvs2Skb9z5Yz6141ymm22uevTd7TNPf",
  "key1": "4tRQXTYnmStcGPRRDzobndt7PV4QLU1dhxnLVNzkoqChcywdaPNGZJN6iSqBdLXBtUTnprWWyhrfHym9HBCgDhRC",
  "key2": "3Pf79VjsvrtQq558SqYBBRzFrntGHpirshBGJ6xx1zVqVErR4n7ccuFsaS8dXcRUsfa8TixN79QQq5wnbAdpqpkT",
  "key3": "39pRY9yRusgMU2jsq3VLn84BWu8r1Nx6PeQ9RF8irmxqnkA5VqWebdZmFFVbMDLHHa82cB1g6AkG4fajPi2jmCdu",
  "key4": "Qq5RwdzMRPfMZBnLhLJZu7NDRnFAQb3GM8yWWwACKf77374uS2Gie9uuSCS7rc7MQiQrfUsZWBEHEA1BY19GdEL",
  "key5": "5wPKWZhpzrzyUrTLR8n4w9rB2KMgh6juQEg6SwwiwqMM2VKCn3dn7UgtQkDTbuSMcAMRF2Yk8vbYZVwTS4biRrGU",
  "key6": "4s2E4PN93XpvzJPVxRBUWT8pZ9Z1HgeKJxy9DBXfTdbRdkZWizPqdfCLTBuZDgBh9BHRwZK4moX1zuycgnL3pnes",
  "key7": "VzsnkL372TpjVhTeBforRejBRmpWbqPWUgZghgnMsGDc4pQFP5ww7tvVq9svpJTcGvKjR8JFWR6KtaxTwyezqJU",
  "key8": "4ekjNPEjY3rzg489SD8dFP7LB8jXqzsT7LKmGXgnZvEyEmLsEwTv8Zi4pgyNqshW3gE1mCUzDZ7nptNDK9hnkLuC",
  "key9": "3Ybw5jdxbYHbMEU9jd4fARh8BxfM7JmSCa95zr3iUDD49nnGR2EVcAdUjnmi8kJyiz8sQwamQXnvW2qdpSbBZtej",
  "key10": "4WHTvm1CHRwJvBBtSj9dgHBC6bpiJXkyXhoWdxVJUNobDmSAXAhN3DvnUpHP2Eg3Kd7r7QWL5NwfBCssLdjnYJna",
  "key11": "556Cz4mW2PijfWmHVGHNijasTHagE5MiPxKin3Seorf1tT5WKBqCqE5nPZUUusUEe1TGeuW7EQStiP22JD6ihGKd",
  "key12": "64HbkbsDuStWVnSX7JQQe83uhuVkMkKhhjRE2of75JcbgFpxD5rJDzZ7fHVdMWh4MJeagwbYxVQpzY1FZFpCDNwx",
  "key13": "3MSaQaTSyCHa339CVWMnEuwfns8f3whrfD8Sx12ZHsS8PDDAuoq5yaRy1uULG6xm3HTTjuKDhqnazJPBQhfkEGis",
  "key14": "21cydtu9tEv4WKa4gnJrmeQW9HidRN4hxdijT3mBXUcznvCYYad3i7UPrzqGLqBboVWR5sunm7GSWtrWWP7eUuhe",
  "key15": "65y943txAf6CUHxRTVyHpefmQsh9sxn9Gm9mbx4wANBgFH8Mg88fMAxd8c55tvvrnnnCN9VWmCP4M1NACaw7GRpE",
  "key16": "N6jRMSra7SJ6Qu2bkKYnCHthxRdSfMGevps4FF8iKheDk81h3mNhgNtPzMsLgmboKiAwSW45QohKaETohb7mg95",
  "key17": "2Bm5cihu5z3HnPN9BGb3h87cMaHBKBtXeg3cn13imeuBR4e4bwWHvm8Yc1573fKJRDitwtrfojpxGx2W5MT58uoW",
  "key18": "3H2d5tPAX7uG5J81kReKhpqfeKLWDWfaeXRqByNq9kbS7yEk1AKZDRwu8hvGD1WaDMH1vjJ6YdiwhPEqjoqzf4wr",
  "key19": "4BjU3ZLkXsBQtb2SFvhoRgLgirSjVTZiQxzPJUjkaNw2ursnbCyf3bD9oHMGfznPzWke8NcTQeKNPfpo9shTTikw",
  "key20": "5KfMmyRfZempuFnHJ5oijAC4pC4VhhBiVwhMSN6hmtd8DwGqHbF26iTfpNrp79iJP3RARB4iC3NRgasudezzb7Y3",
  "key21": "Jg5q6o4TcwAJnLtQF6oaffAg8VWDzCt9Aiko2MYgQMQu6ZyFn3vvnqx3pRMBeA8NbtmEUw1j5yeGdZv8f73cXWe",
  "key22": "3inRmC1wygo69jWG5dRhksWfbQiAAw8ZFPDoM1bZW4cavEGnezpvGVNP4DZ2NmoCTxhxjxHMMxz8MVntoKsZFiYb",
  "key23": "4mMViXX5QmSKkrXeTVL1K87Evy4mmqPTeJr6xQxZzb5wd68Ro8grkfHzS8ebwaoyximCBHSnx9FSpMg31hYJ8ijh",
  "key24": "4RPJihvxry5VWr95LeJJGkTnuAbdTEoFS5HhTLtPjpnYbKbZpSgeE5Z4Atxz7G8iE2HVASqXq9dbtvk3nHsbwUL4",
  "key25": "v45yTrPiNbpGFL7hMqMrmNwofDGoQDkWEzmoDbpX1ZRjLDqLpyZMyEZR8q2tR3ykh6GZoYVYzy5MWkuv1YBB74v",
  "key26": "2yKTbjfg7znNw7pEVhq3XVZJrPYZtgF8xXcrsDv9xYyY4rJArpKQmMM9Cfu9u6Fu9stvVhy8hXz95JQBmchQneqo",
  "key27": "2YxGJuUABkRkAGkQhT7AZFJMsQqoqKe2x6nkHePzj1kk61JxU8fhTzFox59yamcw6MZTS1idp9Gg4t5wsKGqWtQt",
  "key28": "5uR39VxuRuniGMPoR8C2WHt6jHNLDLnhkgUrnT8KuM3fB5V7QKzDFngnYcC7AxkJVtNKyReQKkKACNasC2LquBkL",
  "key29": "5VMYRpYEQvQfw8Qgw37UeBgkVxNXF5jZH5mLzfvkiLMgPQMfCLxsd9bU3cX24HWNocwjsfbPEkfJ8J9VNanwdYEB",
  "key30": "39SSCtfj2nQt5hX3R6JRh4ydsamvZrqARs77r7QVDkRy5gcYEELAkTCFxn6vY5k5AqQNsuz2ouGww5gyu7zuWHRm"
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
