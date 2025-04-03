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
    "5NFo8uqfvrtw2SeJoThCqoeYTupDPKuYeZVvbD1R4mHEgsmJK3ytbJ3kQa5BWymjMYjYZioY7HBc2g5vnsKsiMg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o4wDnSQSbDEvi5NWxjW3witGvvhzC89ddEPpgxAYamsN9AH9vp3wA4LJmLZ6SSySC7Fq8AtU94PjrjHuFtF8gpL",
  "key1": "s9Kb75M8y4b1Sq2RaVhia7VC9M4vVQJ5Up9WDSLniYfXsQrEDLdBWanUBNTKrPdGqsjWJfv5TPi6gJRWVSNaUp1",
  "key2": "4giShcYX2prVzizW3sscBh5SPVu6McrR8w1zNmHwEV2An4iPjG8KUYkF1pg5wHWDSeXjxVdkMqA7nofFXy9WxQbb",
  "key3": "5owk34XHqyaQTGgdVdGfYs1Wd8rYddDHMcCQi56NQWh6PSTUz5Wv2cG9URNnFceoqB191TTeKMWYLaRR6iCC44QS",
  "key4": "4MeimxR7gwxXhqpzZVTq1wku4NqYwXKMQFwnjZvjmALPj16yGxQfMN3wSeq7k5NwMvy5haHpXjk7TdWW7WmxftQ6",
  "key5": "4Fvt3KD7EpLDWa9yZveRvscCefidTjSMDmycCNgycuWBhtuNV9NnG9nXcXKZPpht5K9y8TMFMpz8CrVSwKXYM9YS",
  "key6": "2r6fDV5bQrrvvxo4pyWMbuxTtMkPfQRWcSiTBrvxYerGE81b3AQHRGwxBgkSdEdpcATpy4Y8RmnPQoaUFQABo1zP",
  "key7": "5FzeZiMT5286vrFB35LRPuK1yeQPmk9cULfC1F8ZDT8PrJcq8YC56XcnScBxZuFATvjsAnwNGLcUTkd1TWcP4CNC",
  "key8": "3GV4pcUB5uVbv6HmQkdPVEFk8xC5TR7k8kgyU61pbp1Q4zGD4uequ1tFAHYxrsvcvtixdqFLHhHVgLVa6kp6AsoK",
  "key9": "3FFiXooMnqec6Px3vcUPM7yGuH53pKYG6yu5ALHJmR4sDXMXPR4opDstnPHNQQArZh8t213shkKnyNMdU2weinRC",
  "key10": "51dvVzMRYX2L7wMwcQU6EDtaVM4New4zai2kxLZCYDe8vwqdgnzJHrms88XG9VCVgXpDTMDiS3kWJ8jVwKFtUHKe",
  "key11": "2zZ4hTs6y2PP8reTRo5xJw1RtLSMrpm13Wzd7AsvgdGD5W3EPtWRn4D7uTw4XN2o2U5DsiU8n9dUMLEzhTgG4xfn",
  "key12": "3yno4mpqSHtUKRaWRb1x2Ak8WfeUjq4RadMT3NbFiL8JMJ3etr6Gq4oyViY4xgswLn5H3NE9resJcaQprQA86K76",
  "key13": "2UwqwQGgEfeAqnF1TwirR2JhstATAERhjKPTMkvv1SQCVU6Z6Se5djqgNZp58b5CSaki3PMi2X1YFBZgr7SFZTsY",
  "key14": "bmuDJ1SNF8EaZhu4BoR66c1FAaw1BpTtZmHU7FMNV2kj6DiCZuJ9RyLXLoM9aPgXAYPgiD95HVR9LccLTQ2yF2T",
  "key15": "4Jsx2JKvkXJ18RTagvG95mwYAP45xdKLkYReuPymAcD5Xj2197Xnr4STAMZLC9xyPGuqQVc2fjQU91G2vg3GiJ62",
  "key16": "3Y6TCJtpJcEyn9PpTDkFafLiQ1aUzUhBQFSgsSv4k3U3MMEBSbjw6UZVxt5xiBGEmiLVNGsm7VAeqeDGQeZSnpM2",
  "key17": "2X2HtMVKPmKnhBKBWyDcqcC29SZF1N58qt2LCUf6UWuUzCDrE7BucA5RahCaut2k5NfM6zvcAfkMWZpMUrpnAEhV",
  "key18": "28peGGdv3UEBYm5FA41wi3MDWzScBuVQLSPjLQdHKKKmckz3UwpzoLpzepcqMPNE1EzzvUgP7tpS7onFsPWtwGVA",
  "key19": "szfSQevQSL1ohvePBitNAD1LZjq2g3QEfrRmeg9PByU9o7A6q9juJC5vEc6jfNteFVF32v6D6PvF8oHsoVs8w7i",
  "key20": "3cGn3pQVvmbmMpt3SXa8ou5LNt5TgyQx9zhd29qDT5BYx79mLFaT45pfnK7QSyQBACDQgq1BqpbQdpQB45bopeCC",
  "key21": "4EkUEFM5et16TVxpbMXHaJ7dYWs2cKkPdLF9TPN6Jcg1mpFAhrS4xe5J7Acw7LHnRhC7PaSTamJwTxLNCLQ9CDHN",
  "key22": "5H9nmL7CCfqodzB98TS8Rye3moRFR6Z9cKNxdvVNwoqza6cj5VEqUaNn1iZqZypTXxmVbzxNtN8Mu2FjyfauQU1F",
  "key23": "4KA53H9WMa9YJdCRRvhp3LV15eJ3J4irj3G3ZgweYuPMCj7yopBP97vTJUBhLUDqzdbscByJFjCqUyYacpt13UDY",
  "key24": "3fsxmwJ5ZsLjC4fcG9p93RTqnCmJGfMBanniVjsT3AL6V3F6tHGGgazdm4o8BwYvbnGcVkeTMurYNs7JHXCok11E",
  "key25": "2qUXgtdSdnqTQRhDgPP2YqR7v3dBLL1tEoEBgveCVVJMVMmew7mGkp3kGUxf5Ae8F8HLwQe3pRSFhLSEoQUAfV8K",
  "key26": "66at4oaQ7mAkUrDAwFjyG5b8z15oYtEcJieLbpv9gfEuKpuzoh5DSYAK3Am2n3LZsdCGxdNCTz47R8Z5x27M6hAH",
  "key27": "39v2q57Gt4yBkEvqC4twjzxrYi2z2Yp7XpJt6Pynt5JrcGYZrNqCzkwkMHdEvVzwXZCVNycv5dAyUxQmnUkMYgHK",
  "key28": "3AEHfb1VQ5FK1RoBeu6UvdjW5wrSHFB7thvjcLbxycMurrpdu5qSTyu5Unrrn1un7XLeQxmq8Hj5kCBNRscrER1e",
  "key29": "41LXYDY55Hg1FQ7Srr96xyzjNXvuFgp85fpsphE9NtApjffDZ1i68J3tDjX9dpsWNXbevHYUWC31pV9DxPqqWasA",
  "key30": "pubjCau4SprvcitgbXyQeX1hHGCq4aJFZLAWyjayiQW6EpTQRE2ok2Cntsi1GNwCVD9uXBCzu5TtzizbBSgz3a6",
  "key31": "4EkpAEFcwiPa3c8uq3Vr74UZEqLHAs7XfMScYrzRt4WZH5DZm4CCaXcaoVfymz8ieQtNpzqTdCFco5UWYyWRx23E"
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
