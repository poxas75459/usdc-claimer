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
    "34uoDYJSuhfjbjLajQmcL4TYDJCZ5iuh7FKinCMqGoHeriUbxQyeJq6N2mrfcEcwMfuQ1ZqhDzSsPN4yJLJdnTwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bFiFui4PgyioHXXV63hbUJewwDmUiPfgN5XyJPV3Sq1F8QCp3pVfF1p93AzjweX5Za2vcTnJUQESqpqvzSkth3o",
  "key1": "27tosH7eJPAhoE4t8mrgEC9YiRCTqNi6FSMzwLErkcisAJtrHWJaDUc9Nc2BAtBP2X3XcKnZuRjm6cQjLENS4r4F",
  "key2": "2ysmhGtEW9VSkhaw9aeTnQa3dWM3d5UMYcFsTnM5GyPLfRhUDyTLhy4BvoVBXunNvXgWNxncVnm52XX6bPU2aSfE",
  "key3": "3fnmdVrk851J8MxD3mzpwBzoagVDXWASWVP2FDDKowjB4pBMF3FNiqtDPMCjTMLftq3f4q5D7bKq5xbPYvrVkjvf",
  "key4": "3pWV879qMyLcGcpDwB9H8ru1WPFJ3CRQG2Uty5fvdjtSvZXQnSW44BU499nn3sEd9EdD43WAKSLD4vXCZpiygeWo",
  "key5": "3mrzhFH3JrezoeNVJByxS2uVJs6Rf96koh1AF3UaJHPLA5gj3AjoricRfqVGZ1aqdFHPQsXANA2GUnaQLAY5Vaio",
  "key6": "2n4KLgN6Lx7z7aXP9ja5bvDtqBLs2AYekJojeEV9wRE6DP64iZtsCz78tbVRRG9R7PyybucgC61n79XbsveRNRJ7",
  "key7": "4b5VLShHEZQgKK4VhhydTPcMHMZbQUD2z68UDWSUUNn7WAdWTrxkykFBYiaDMT1fDamFou2wodmbz28f1mAfxY88",
  "key8": "9udFTW3z3kDUxCBRNn2mWgnoGmyYemFHKraRhm6W55TQcAsA8Cq5t6aUALWcWHARwSJQMsho5vL4toH7jG4XmCX",
  "key9": "368woxT3A3jGgU7dtWybquag9UM7cKwTXt8mXpKoYvmjcD1XiSb1LZFZHxMer6UYWEtR2Cd3QBYVkEy5givTPY3j",
  "key10": "24TiKWEMqyRo3ZvF879DkUDAMZFLApiM1JAWSujRsDqLiqo9bxVVcojMxFbd37o533NCJDMdNNnMtZjhfCwNULUS",
  "key11": "39yYntSnwWha2xtYRNgj5AygMk29UGHBtZxR52c5ekF7XNjGHinsfcrv24xrum3XgaWdFTgz93xXptCBb7ALZbpG",
  "key12": "5Rfghipa1Z6z3YLE4QkbMeQVe7DJtsZkWBVATcU9r69SbiuPjzDgQXi4gWQoao7diU39juDhz7d3nZv1sUGLqWTr",
  "key13": "546anK5NQ24G1h9o4J9CgMpePXQv8uojzty5Qt3JHQGiSWW9DmsHaKr2xvkDtj4qntJckmjU9znaK2c4iSresZC",
  "key14": "46cXwoVw61UKdmuRBrKcsQDZJrirR9zYcc9NLz11Vh1F73bYJ7QkypEnwHcPcTrfMvZiQCHs5TqTL3mpod1DMViB",
  "key15": "b3R5jYhEYvmdcGL7spVjF7VtzFVNg1B93z4tN1A7dS6R5QnkB2LRViMXyKshx6PdWRMrXXCWiRrhekE6FUgHVLm",
  "key16": "3i5JBVVGodjYLip6aKBn6F7uP9znHMgskPzWvyd8TraoBqaB36aWrbfr7X5EL2wAh8pAPwHxFMALMmsWPdk4JMCT",
  "key17": "4hxia6JbiM9qtDzK64GwBGEPixb2HDrSdHbSBcsRyrRFFH9x9E7jjkNr3PDu8jeogsvJMHUmPCnPY69GunN7C5u3",
  "key18": "2MFo18EFGD2z2rU1yN7xprYqkKhTjQC7mif6kWdWPCidMs2Zw43bHNCUNXbtDPmYz821pf6Yv98SqwSmztB1g17q",
  "key19": "4ybukZzdHwnjSum1FcEnUGtWjjz9o7ngV1pKQBNuLCneNBpBgW39eVLy7u1QFxbdBermUFHkWVVB6KYCkvzgXttf",
  "key20": "4Uu7926MQjUxsLhWFRxSSxMVkkRFRppPPCaqPwXZ473WVfbRF39aq5kuczYSYGVopvHmKCK6DjC8kXhU6U3GNPGe",
  "key21": "Et89xj77sXR5MnNzkDWvRwSXGrrfHSt7HdbMWoBqqHqWtc4i5CB2QaFNfC58YrwkVYUgCU3hHrdiJ42SjcnqsEf",
  "key22": "4wedeMNhxziGAT7yXLdGPEAZngtaHfPFMgyWV3UEoHJ3U7F5UKBYD4b7EskUdJDwoqiy2NDZ2srD1Gfjfpk29Eu3",
  "key23": "4o6AV61Tqa73NoVaXgkD7fAGqc6zkVQfzhZoHpq7AXrcNL8spsgWsSqHbyR2Ja82FSeBVFghXc8S6YVyffD754gm",
  "key24": "5r6pkXrdjA9tzfzN1huPmKXv4fq4VqgKPnTFyQNzbdu4wBULgbeM2L4EjvcRyUdSdxhvf6uVnMFdWhG6oNRBJyLA",
  "key25": "58SqNRPai1b147kxuLwmWuceAVdFGgYSDwq7xHEwPbXxCCf1HygctzQG1rP8jGAUcCmcTh5bhN98m7LTDSDk9jtB",
  "key26": "3ZUhXoR97bN9xbKthdbQCGvVbyzzZ2E9BR4zj5pD4udGeta4UxhM9DS4Z153pUTBHmKXiGRT9wsmXE9uVY2GM3mY",
  "key27": "4kBp93vvobJXiMp17BSatZQ6CQeFFMKHEfS92eN5kqP6v7fihGfT4XfS1vMm7qRh6ZaUzz3K2UvPrjphEXXQ9hDG",
  "key28": "MH456HcrVKdD87CN9EmMiEYUrSnER8VMFgN2fLwqcFs41wcXA5tBJ2gBGMtnKHuCbDouqomtVcz3mksHdiYFoAH",
  "key29": "5bETAmHSkAYNzLsncZUNbnBNCeKMorDSz6PVdcPZApeWzKRKTBVSsrhCednw4WUvfB4jqDSJZ1evrDX661pbQQ98",
  "key30": "3JTSy1y9Wn6PzSk5mu8FdqTqZt5jo36SxR8uw7VMFEKG5fWq1MasS6NyPkjNmDcseVhM1P6dn8iDe318xBN7x98r",
  "key31": "4Fyh99mEixA2MeR1YMjFejxK2QrUcdqQsrHfXTLGSYJECMqbp8EpuPEkDJbRqY3HgH2JRSVrHKtrj5aBGpaRLGjc",
  "key32": "4brZ8EhU9yvPAUDFfqTPU17cWheM8U1YDTA4pavV8EK3qG5tSFjmN8C1RbLmBPHdpsSQcbRHuGVrgQGRMDfqjttf",
  "key33": "5r2GL376ywBozHP4V7WCskJWf5XgCNPBtNdVbqqSxzvh88q6NF9ycaxX8HBtdBnee6nWkQnQU2thcH9hfUecquFb",
  "key34": "3dPC3Gsu87LueCHo468PBHV21cr6u9hN9GawCX5hEwMyTWBLExaVQkV82myLiAh6TrHx1vaEeAqXQ5dTggsXbGWN",
  "key35": "4bVJLwzB5oBau5o84jxZDTGpP2LkqW9Uij6NtyLa1bZSnet666R8xieW8n8jv6TKzDsT6QmzLvQigbR8rbD4oL83",
  "key36": "2fXMpbnkXpeZDK8F7q4PGeVz8PVWjRpjHoLL7rm4xuqkaFDVmzTJCnw7qLKwKJTxwNmp9jVDcPrhAiJG3UhZtqEK",
  "key37": "4z4JmdKKWjTpcjTxDWAidwPyyAwWn7cajrg7sCvArALUvSpuzBkF1wxqmeQ7QboFjjqcg1B2eJYTjcC3fZmX2wH5",
  "key38": "2kxyvZ5FxDtEvu9Lc3pjRpeGtkK3VouDLkRWjf7v4AcVc4m73nZX3ni5Foghybq19rQJSrcnqXnaR7Gwv7S4bxvb",
  "key39": "4Ejpa7LRmtkLgnN9JHVTShVuMeVdjKmS5gFP7JXvYsP66DQSvN39urVxNjKz12hijQCh9yFQwn6UqUPcmjeQDcGF"
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
