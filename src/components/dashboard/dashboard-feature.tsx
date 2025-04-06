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
    "53XrX2xqdBvj6p5bD3hRpwPf3KtjAS3TxKLShnJmKyw8YD3f71v9EQxpPP8es8mKdNnsZec8yPxPcweA9UZY8kMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sFhfBv9W2ynf7yGTN3VYLjnB8PskxCiyL8DMAEPWDZrptoif8KpvS6g3sRkVHKdd3omDW88n8oMha4MqwbDFkCt",
  "key1": "5SMKnVdN2g2F1kTCG2YkgA3ragBi4LrEHruZ4LH4LVRj7GYJSCQ5aMdftZiTW8NBQ3scYNhY9wA2DbCQ8anTMySX",
  "key2": "4fiXzdPRixt334AyEe6zPngVWpsZTGnTFff7aAgNTvgx8FcZk9SN2YcceDK36tX9j1o7LKUtnnnFiDHc5PXz9tFw",
  "key3": "5LEBTHfEB2orGQQ46B6vmBXmMXBs2r6ux75R7yqkzKGaw21Zvxmqp2Rpzk8dwKFQoABph3o8euC2AjEEzZdNoe8u",
  "key4": "3CQ6cPy8mtLZ3sQNezxSzeFwhpWnzRtyHAXkHrWM3tQi1EvWZnpG1cmXhasqD3D1GCCc5oLPtz9BCXruaQhhsPjB",
  "key5": "2CxPzkvNHm28YPRf8Qg7f1BLZXo6JKRpTg9CBrbPXj39h1gDMyCowrGZDccQELs4AaTStwk5rc3For1Rc6Q781uC",
  "key6": "3KuUVD4zSj5bM3eKEXEujJJUC568wwKWF3uMUdQFecXSd5aNxoKWuhidPHqeDMn79JXey76jrwVPjw9omJzjB2Dg",
  "key7": "2gPqeFVpgTgfiF79VhHNrQykeJxFBGoq6c3UdE1E4fbx9gAQztunSmRx3wD5hithuggBt76PhDEVqTm9CVSQNgny",
  "key8": "4AActojkqtASiPgndRNLi87zonqyee4cVjWZiPZ5CD4S3WF2cAaazwsDpg27UQS4CNavUzjhgPgitugG4dhz8amf",
  "key9": "56x3HaL9MQu9mvhS3iVmstYktEGUvV9CkHbiCSKRtL85ZVowsmDn6Q7UkiuJTvWsVitYfUeoCZgvhcfnxMFNoStf",
  "key10": "4aTc43VrAbatpmbGQHfx6f5uSiBMALwekyUT3sgkvVLkEXNTPrVUak4ZvwiPwnpCi6Y36o8VpXRU4g2tRQhb1roB",
  "key11": "3fmAB33Jzx1ayhQ3Z8SoBZUkEKZWDGwox1BjFfx6Yy24Vz4th8jccXhuP1Xao7tPLdsiGvbSe41y1hZk7RKNdShM",
  "key12": "43CRpozNKAKgKrnSL4eJo1NKXbwLzmFRKhBSxxbEDWrNGpG9SxqobMk7bq39zDV5F7ibftGrMQLA2XatfAMeDahj",
  "key13": "4rvGuVqB8hL4wgnRgjYSesKckNB4HHnhNqCRYZoMfCj5HEvvgd7riRqier8mqNwRRAGqVbL1mYjWV8qmwgJTSk86",
  "key14": "eYwPemv69qL6EoyMr7Vr8qp9VLx55JiTrQmQmVEHFQQDtTfiUEaTij5tTZSPrHxCQQruCM6ZCnonLHyxPvk3MzD",
  "key15": "3XCi9mmsiFXPVvwSRt4uJCTQkYNbaNhodeqVUPi31eGUNStXZPmghb9ZAT27L9HmvdGxUS635JQYGHqufxiGTCNa",
  "key16": "3NiNgVfuWbJu4bXFPX1uHp7nixvUwmUCAejbgrb3GPocSxBZJRiP3YSiF8DvkVFARnhcGkn9H1tznVbRUh2mztCG",
  "key17": "4D8c4efCFD8Qw1SnXWPZSQYBqnTwM4pR5RMJbU22iHVcKDbhPpQZugoqrtK6TUqhZxGyx2CJ4Zdg5b8hHf9wgTyQ",
  "key18": "3tZTdfEHoU9ADeJQ5DVgRTRxt7hGWUdmCPK7iRMKd5pc2nvkc2hRprGnxPmzBHwGe5hRRo24RzJDaRm8tuaxLB1a",
  "key19": "crwLBYm6UTYJZaCfu8An8HjRwbCSmqSvqcrHD3dKLzqyyfuNEbXu7gBie1BdeHKE7bp8f2ZWFvUxDS5F81qyt3j",
  "key20": "4zqSFvxaFcsLYRMsLNe7iPjDan8TN45WsWJhTjVWf8jZRVacjwjXgttc2K2rQsR6xGqaxqQZeZfBDQrchUddRSog",
  "key21": "54AaJ6NrsYH2DU5ausMEYEoickYPUtt1B2pqiNRCJLou6kmMMk3auH5AtwNM9sJDQszbZFkaWQ8TYEsE6foPBJAH",
  "key22": "4wgRBQoRpcqySxFFGU9xkxmGRWwJD6vAMdW8hXgDCNQwsBt39KFoaw1ditQwFZUstt6nabnQAJFeNBJ1CcGdaCWS",
  "key23": "4FXyHcugyRQiDqHHJh8uRvwKEswosCQJrp6ymRR3qAfnJYqdXZzAq92MZP2mcZumjVD2CpG5FhaezofzxzrT64Hj",
  "key24": "45yqkksR8PCkCCwex64yez86ahe6cXCUBg9szKcDCZBGGWL4AxsVhq4uK2QTJG9FMFyjFskQJFLRAZ5cuMj5zUxb",
  "key25": "25ifz2ax6vrUmdoTQqL8BFoiN53WWZG1uCmNP7Mktczk1XBVZ67QayYiwJq6odLs4j1F4t7WQcQ2QqZp2aUstsXf",
  "key26": "ZBNU4CQ6mjxrcU2p1doeh1ZAwGNNhewNUb3CqLrCfCGx968cKqyfLi3bmZsPsZZv6FknHs7A4oLD7h9hk1sW1o3"
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
