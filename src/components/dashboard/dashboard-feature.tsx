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
    "28ckUvSdKcgD64faeexqifc6tfCrQ1tcrYycPUMBT7FkynxinQXLi3gSL3N4sXgcy2V29meoriF9Zv7tmPhbwP2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24n41LBEV2vSGqCBLWEJmhL9YqSzUvxHUDH4hXoksaYUfBwJvTHp3yEUTD7sgd8MsezmG2ze2GYTV82nzNPFHEqk",
  "key1": "5oSNHFunaxQBeHNYymNgrgKZSV5Pi1ZpRmjkGLgc4Q5qLdHJyZcf81mMWsQwgPTPy6mx44DmNRBfdAhrf4FetTUz",
  "key2": "ePtWfGgiNsbcE7SmA7fRAAoWqqQXfcBnChopvQHCB2uVsnvfEd4LUFDaVezsxDpTKvaTRqb2waTgVyruXr3eYKh",
  "key3": "3itWtpmKHP22LJWWf31WozGFdWRZgjxhS719A4SDoL9u8T2Mt9BkMB6E51Fis7wMJj8ukV3mviL5TGhPcjT2g8TN",
  "key4": "T52p3vvNMtoCbH4qG9wFhmot3N44oKsD4XsqEwg9XJzKR8V9nc4bc6EcvTg11Zyu9rogmgdNxCv17n1EQjngTq7",
  "key5": "2M3W2rFvxRmKrf4D62DDUeFVtZ7Z3AaqYdLiegNtVvcyo2RHFPn6JmiZSonKu7GHYbjtifcKJRS7tNvA61C6JjJP",
  "key6": "5pRZsw1vugoU3V1srWKBFNznBGQJAFsFMG5WZggRtxKZhhtBzEb6L17VwhNMeoChKA58PTFfJJMwJkC24pg7C1os",
  "key7": "3qcN4y3ZE2DZfQwBTtZhCvZnRqBF173hPTDKug1QSbhByfKyFrUhyoKYfPXfHY7V72NTB9SKyE1diUPJvt1FBLG5",
  "key8": "4z9xFqEUk72ffkzTrAgTrRmiUfnDzmUWsHeLZwrmzUpdqfiiCTjurbogaB8srQeQjyNBLa6XJqfnYfKYzwyAzYrC",
  "key9": "4Mf2Ry6zgxJDjFBKAP1DiJHv7LiH9xPauB7bdqf4P23QvtSZptMF5X9ctoMWoDtHGsfkTWPWcWHad5Xn3Pa8qwdP",
  "key10": "9akGug5wLN8QGAjXq93YCxcqmW6w6EpghRRcGq3HxotkpfJrWKe6JwkNKKL7eDtUzfb3ddC7GtYKERMTtciNRLa",
  "key11": "5sfmuDXSZpYsDvSJZMjoahqFsTujkpyLmSdECNzaHoC739vKStLks9U2a3C6Ao3rRXALVgQVPwJUEFZPibYjyr2V",
  "key12": "4Xqo2AP2SxCAeRTYCN7jm43eSoF4ne9bQDG8ZyZ7i1vTWG6QbXqSLH2DhVNjwfrgYPJiiMY7n2s2AZtnEXjuADog",
  "key13": "4kZHteDuBG2BUu1K7HdmTGwaUvqmNwHeGVyndJLoJy8xD24kMB6zWQZp2L8YZRDQVYvAypjZ6HnaSjro6iQ3j92E",
  "key14": "3vBRSxCzznTekXsj3RmrFMLFEi8PcjFm7q8qPm5VEs4DacW5bYHQGs112cZNFCSA65aUHyG9NFjrPuM2rW7nbAup",
  "key15": "zj6tUUxdJk7wCHoQghFKML52fN5JFqiJbuFjhaujC5S1QHdNuMnFKuCjczKpXJn6KcM6GcRgofoKxq34iMDQFMp",
  "key16": "2KWpDXRMppjErvqMZxZ37DzoUP1f3PX1yto5AGMjKaFJ4dsj4pZ9iZCi7UbmB46yb5g5YPHa23EnZfLMtCWqcptf",
  "key17": "2enrac6qsBL9w6MKz9eDCRVg26R8uWSF2V4kkXGtxToib2XeJ8PVihpFkMEuvKSqFx9xhSP9LDZpczEqNaXcwKN7",
  "key18": "5vs8Z7Uprm1WmPnbbUKdfRNTZxdjFaaM9TRLfyQfANXySPuT5mAKqivvaD5cGy1QMuBLgZtPuWh1jkD6SY4r6cyi",
  "key19": "21whwMBZhFMQ4b4RHzgsVhRvcEcnVkPtVYaatfH3X9o8PP6m6xeu4j535xdXqsc1tHkD8ZYisW1D4wg3i5Df2556",
  "key20": "3UXo1XxrqwhDX1RxxWqYbfT62huaxaBMcwCxhmpYw5tRKGjNDEmmsWG5ojggM4x6Umr8W6yVQymsRzMnkUKyreSu",
  "key21": "Za952LLhn8pFPiWen6Qb1uBD7Y1HfFzxKL7JN75CWt6i2YJAaE3qzoucdyqWXPVuzkSqy69RXdqY8Pj4evkaDQ9",
  "key22": "5D4ocb7GqrYBHVwgAp96YJ3WM9J3PrNxfFRGX85qRfntXtTfnXfN8qhFxcdjBWiutxSbqcms7zRJ5U6cuRsqXcX4",
  "key23": "3yyA18j92mrLXVMLmJeBjRPdj31iTPBkt2eySvXdn9njdf4zkNjoAYnoH9Wk7fUimnhTqtCWmsAWbQx33dPiimgn",
  "key24": "3kPCfW3Nd66riamWAgw4uMyJgDhxia7LnL8D6FEZigQrYZvCqtFFWTFkssjJQnZwpgy9Q8ie5j1HpgZiQxviamX2",
  "key25": "2VFwci7YLbLt6qGJhCqjkM8f3fpX19q3yMVSo6Hf6yXoMcqPdhVw8mrbdTecG8Qc8tHvifuKLAmqzbWRcH9FsRAk",
  "key26": "3ax5JQeKyN4jCYk8q61HvSp7cGg2pbh26H2zQNwPVkE9f58Vjrk1wQB15XfcaA9ELCptiRC2oCWYT2UhyT3iZoCp",
  "key27": "4d3WyYzoouVeqw3kMhHbqxZckGycpKhKtMGjwSKTVvFPASo4U2bHQbD6k9X27hE6utn3tmecRCzNBE8ekQq87ZXo",
  "key28": "4qwksNiWafvCX7j5TqgEE3h2px7UpNgYantD7h3z3RQkkydMdkJB4r3tSNVW9oNZCvT5DSYfDF86yrcQs89xwXtS",
  "key29": "KXkfT41f569yGQd3Kr7sckK7jhK9JwUR1vx8rZyur44oUjVnaBA8tWBSe5RupsYXBXXfTZiffwFJWB1SWoDgg91",
  "key30": "2BPPiqu871yr4gyHZ73x2Yyp6fckf5wGQjdnGd6msZ7zu9VqZMH3sHERGqbf6BSCK23VCmg3sJDmsRyftmLgjN7",
  "key31": "5HMRjCbaPSVUezE7gfLm9kugmnVwja4ER4Lr9Mcb6QydmaE5nufnwfsG8jcF4WSAsUhbd9ZDiE4a2G9BKXuNPnqE",
  "key32": "Drj8deUnd4VgXmhUotmQ2BoyE33vs9rpS13qH6sb1vYREzWFV2PtzghEGJ4wmQddSEGsmUL4pXNNUQwNjhYRWqN",
  "key33": "5yDoUL5t2qbi1k1v4BxqfDdu1HVrdrcpLtffzkEkGY5oiiDTRePFxQfR7RHVzGwjNiKL6kpstFRk9TRPZYAhPxJG",
  "key34": "5t5K7K8CYW9UFogfLdZ1RkC7uPKiJjhfFyPB9gCcEzd34sJKge5XXNGCGMswFE8nzpozJvQ5enp5j66NuogZDdPj",
  "key35": "4uXLkGjMGCH7HigMR8kWqJjY56VcEh3tb4rzDMksYYY31ZXnBfmvwXrbHsQo9sdv5dnLrgdyHaoU8kVzKwyuAm87",
  "key36": "5BnauaNjsBrQh9rMoqGvu2qCJeddXWnuZ2havrFrrQNnEbR2HAdWabqtxK1NZj5ahjxkwRmtx74ap1Dg4PqB2Dx9",
  "key37": "5c9VQ4VrxSm5Z4aXMisou69X1SsY5eExzyFXuusbEsd6nZfenJXiTFFVaWYnYs5gbYvUdNjYfhcFai4vNy7QTTbd"
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
