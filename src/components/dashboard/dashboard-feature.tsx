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
    "3oF8tGgQXNgZiKgB8WL3uY7JhxuCfr8ewDDtGzmcbdhtMh5PCSMk8HseRwefiChhnzTi6k1TFj2NpoAUAgp3xB4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2psMWJfS5Ts6yQtyNuwYQkPuGYDyRn8MxWA5Qc4fqWKJ3UgGZspMB4i6AJ1n3Mb2ELdfGq9P2wD2mcYqX6TRtfC",
  "key1": "5ZCfYfiMpspurxySvkTQU6QSPo9C1FA5B3CqFs1WbgjZRJReMFCH7WtpP2AD9ck7nrQo88osH9hyS3VmsghL2jFq",
  "key2": "wpw4y8hdwH83XunmPUYkyRfytBf5opMJkLt3n6bHHo4gEwPgmoWrNATD7cMupn2R9QVXG2KQx45xyJtSHFZZQF1",
  "key3": "3hEggjb7SB9Ui8Tn49M3Ww3pF7QonVH8gGWbCC2yyRxLQeSQHriodz19PK86EsTfxCXXpz8T2BgqbKoqVK1Mpepx",
  "key4": "7oskLtRipGhJcuK9KNeDKLbvMqoPpDaNCRLdhmbhG9nDaQqgCapD9LLXxykqrCbGn7gr1e1wqvzPEtm39NVWHR2",
  "key5": "43kiU8iBm5Bq7qyGAsvpjh1hsGenjCP2ofdfGuEihMvu5TN3eSvdWhcYmweeExdZfi1Co42XP73ZV1JHvK1zbCEK",
  "key6": "JCKkF9CdAHiJnPf3b3gu7aoGxadMdCWvUSREFQxUwZDw4abXi8CikorDRJqc3Nbc13g5CjTKsLQjhphQHadFx6X",
  "key7": "5vPzEcghckSvRPdKVeM4w531UxovKGaw6p4MK8SMJdQb8dVKPD2SxyYGzMMEbpUdWaJ51WH1NBBNpEkvhuEgyG4q",
  "key8": "5C5sE5WGJT9suN8KELdNEXxdgUSaLxRagWMEL89RRKtXYTEEy6YSV7cZkZSh5mV1TPrNVgAsDihJ37Dfok7sbwev",
  "key9": "3iz3T8xTRf6xuBMk924UG69HgQi6MqyVj8v873PBjZeSy1MC2Q86Ak4DxAjUFo5NUmAgeKhnXQHQbRYu5aNDbJF",
  "key10": "2Wh9uw3kdYdGBsp3Bb7ppE7DBVTwbhdid8P7BpbFSsMdCGr6RE1qGSeL66vQM5dTYthR5zps9jVdSRdZADLQeKBU",
  "key11": "svPF5TL1m1gDt8eu3wnuDDi9gX3JhuyuvkT8eZCW2ZzZWCcKREVvHZVnh3Bw6xBXMtaMHReYW2hXcpP1eMFr5Mh",
  "key12": "2hV5MvGRX8Qx18iN1UxQ9WsXcdvMJUbqtvaY2rmUFtrYqGzPAtsmd9uZfDSuyj9SLgBfhker459MnLTUuQ4Fch6A",
  "key13": "a3H2d3it8Pow5SALxxAnizoUat4rCdUPNosVDYtvZpEEUCKQB3FUgUro39faeQiPnk76RMRjgUUDnSLCsZiEj4L",
  "key14": "2Dd6pskz1BHoSXKyCvty1HmpoWNmCzToYwTGMzy5TjELT6NzGru8F8vS1TbQsCvnRu2erTsSjhTBjfJK7JyMATfp",
  "key15": "4mVXMZfqZkGMwUvwH86E3vv3mxEwBki7GsU3gKfQ7DoAWM5yfyqYgqLw78jWtvTqyNZnrUpnH9T5RQyxnS7QbB3E",
  "key16": "4cZ7s5usBLVEFVSzHVdg73T3diZBoqe2RRphbHooVoUFXtmUHN4nTZLuq19QToHhUW8L9zkUXBBMgCJLozgDusFV",
  "key17": "39CXnTWatk2kjLBt4jZMFyd6se9Ea3sBV8x8i2vLsCeiaM8jEvwqYSdSvDB6cfvis2MuHoLuBptL3BW4FKzAp2EU",
  "key18": "5xiUZHK55RqPgtp6sfupcwgELnxGkzR2FePqkmZPQMmxVzn6GtxDiRwraRdYwENzEiwjxhKYEpnDLwkmAnz571CD",
  "key19": "4ZeJnYWonZuUSju6vay8aAP5waVq5U3ZmqiLK8v6ZyhpJAKoyjsutjHRZ3UHvnTY1zJUpGH7Rcm6s9T5NpstArfn",
  "key20": "53e57YrYmaoFF2bqEtbK8QG5bF7q8jMxnqKLanjP8UiFGwd7tnbHSiUE3wSH7GLjqA38hsZ3JkU87PDee3EoaiLN",
  "key21": "5VCF1rkh9LEwYKnrz9TZs7bSMLJqxe5U4JZ4sjusRRSAMJq8yHjFPGbiP9HKJcZg8MVhinrvyYeBtRwm3UTy6j7m",
  "key22": "3hK2F5hUzbppPmwxujURtz5fLYFboVTfLL533vuey3KZZaEupB1bq8SD9NbKucJp7ajhJSLKGe5sDWTYnRSCMt9L",
  "key23": "2C4SMi5YpsRSJqkTNnaJTUMJuYpgpvySES2VJn5AGSCnTHRjzDUHbLdHGi7mBEWFsKJs1Rv4oR5fsCagSkg5huSZ",
  "key24": "NFwUZKUkXX7dBprySUAXawM47K6qcXTYQfiAtu6WmYb2PxuosnASD6P2RXTe9R2VxBPXeLdmCZbo42rF2q8pcEd",
  "key25": "4pXmio7VbYeoTp8tpgygdnB8arwvVswgKcjyhGDBjKDXao8NhKEQdLkXaoK4zQibM4oFrNWcj1sifzHYdRR26B8U",
  "key26": "3VefRZkLQf5jPBaiX5BfVMGkWJ2R9HJyGs58Qzra9jPJeUssmdVeYxTKHvDsq7Wn11pVHWZFvU81FsDL6UxGaV4n",
  "key27": "2UpEjhYXi79jCedj4zwcwNKWzNXd8oZiMq3mKHHxrktdaBHBU749XhakQugYDzkFXj2tMwD1Jaz2YCyC1LbTagPQ"
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
