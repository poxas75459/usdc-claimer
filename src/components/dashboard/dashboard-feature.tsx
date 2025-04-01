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
    "5RW4nLjxQQpuhgN47DayyuNjkwzPCN9mDWndWhJ3sZTVNp7oB9vF9DPbPkCL1KnRx3zHwt4sVzjVAsDfEbo9fdHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31XTTeJY1nDVNWLmhu5FFr1D18L2X1XGv74hYqVwwhNxxZcR2VPERkCxoLJnXggTnmv8UTBs2FKpbScCFfKzTmch",
  "key1": "481dCU78mRj2Ei5EZN2v132GD2jvbWWzGWge4rFGPXSAe6p6fJgntQsn6YkptRL75xrNGr4N1jRn97nFunHkVhvz",
  "key2": "3kN8ogwsNxEcd3tgP6kj8o2im46Aghne4aTSBx7nUqKEKjK6iAcTBLwCbRqd1hq9Uny5zkWEFFxGDnkCmQJRAxKs",
  "key3": "4Bfc1DaYGqCFLNSeBe9kKosEJMS7ZMaESN31yyrjSQyFiugSebQSEtsuyEZs7PbRZef4hYd191Mk6nEegKtQPsFs",
  "key4": "2uC1i6Bt8z4Vip64gfHq4nrGxHwtM4M7a3wSQuuwWL1CtSMxHzyCy8TK2Sd7TVYtJXxcNcvaf1Do9PxdmeVAgi7r",
  "key5": "4MSRYpmhAAvAakwQELB3894GPvYpGXf6N2mTw7cyKDXUMswCGZY6EBqsEmfgnYN3ijyBxPBkLetXENa1A4US5QmF",
  "key6": "3TcVLHwUUJLytR2PKPMemUMLuRMwAoZAwg8Aw1v73tcYzkSpwvu7g1iRj64ZL2udJdLRy9DAvsK95wtxNSUT3mNd",
  "key7": "3Rku9XFqp2XmBnxtr6nNMDQL4DxEuDLH8gsFEsjsCFCQ46oihoqZFbzK5t2rL8AdohuUmdH83LB3CAxC7x9eBtnR",
  "key8": "3SFXebgPDXthSiGSyFSp9o4kSdRkyE9pXXdyBJn44Hkb1A5iMn857B5Ek4udq3xHhQyoX3Yf5yAtKaiABmmmXSDG",
  "key9": "3DpjJPxC4QSuWMcAEk3hVhidAygCuhG4V7jJnQDXjowDXZhpvtu1EzBLW9HX5tY5kdf6sRcZmBgP9PHGt5wGFEdS",
  "key10": "2J19opuiEGoKouHCnb2tA8h4DnntWi41H7w1LF7MRk7NzS6akghG4NRmFKnuiswjfK3EtsuDXvFBiYwLeTDN5f6v",
  "key11": "2gisWbPfwLea3BEXH23XKyETMPxV1WD4tR4BmWNguJHHpEcZeNwYDsuz8ornB9qfptKnpFz1X3NLETER4StP1Y1B",
  "key12": "9EJJi6w12tpSbS1PMCzUt5KbnkhmZ9UVzwCdxpC54uEdY9xFrC6bEpnAmjyRiZBGbjm1RsCbiGzPVAHQMbBwPqX",
  "key13": "crCvLGjkWruDQ1bv4kpcKzSMatrZCBtU3dA1eduUgaho85GDfAnpn52aghBKDtPGeGN78UMaTxx6zFhrAFd74rX",
  "key14": "NThmdv8a1M45qAXBAX8ahMpnc2cwmfBZ4GMDqBPNQQ5yF9cGw7jexWh8iWeeFa7jAbgYV7BokAyJ1BJw74ByG6c",
  "key15": "4Ee3VybaxBsZf11T2MmEJok2yHCMthR9gCkEs5BzdbrRnwJTo1K66nooVPiXHd7ypmKeX6nshGB5BxXxR5aeTmEe",
  "key16": "3C1FeNNtS3Lp13pJUFK1nzAs6sLe2jXtheeVPjDqL93TMajwckpEBTUSAFn64qqa5nnUzv7TARZ8Ybtn3YnhrX8N",
  "key17": "2erGVNExazTkddKYjYtrZUGdWziqHyLbuUCki2DJGMb7VbghR42XiMgPdho5Y84nkkWwewLvbYGdonCxdhjkYpyU",
  "key18": "3sfU9DTP83qjjKiRgcHy8RwbsMvE7nzYjJXXwxbWKvcF4rKAJdSbwCsDFnuv9mLRYBUFjjurdWpD3o84NGnEkKy7",
  "key19": "66NkNi5piMaywobxX26LKbi2YJNxLAqriR9GeVP5cx74ZgK7HNFiei76q2ezEjmziS1mk1ZnCbVMnSr9wDPoS3w8",
  "key20": "3rcALs6UaKfxUAA3wPp6j9eHF9wHnnoyLhvUmFwUz36GwaqSdZvB57rZy77Rgf846hXXrzjW2QLiWRPp1bvqkt5N",
  "key21": "4eBoTMrX7x8uZSGr6PtC6JfayjSXSn9RqqsdQfDtxjUUed5X8WxcyEVyfgZrvgdz3iBY3d6j3vhQ9QUVHXcpcLUn",
  "key22": "549TK7DZQ4i6NAbg7Y2nteWzyZLAzL6A9g5fhoGE91CtC731NiomSFTbgcuab128r5zpswLc9JLbRtno9jkC3N8a",
  "key23": "4KDWF3dGY4mtLmjkcovSoXfzmTGzobaJ6TVhi2PeX7Kz7KCTY6d9LUQZwYwPp4xX6p8fZfGgc6PG6qazhk6f8P7i",
  "key24": "9NvjKsdR65LLjzZwoCdEqcN9QTn7ptqftrq93rLjJbDM5oddSzs6uZrVw6HVpjgtaTUHG6fcV7Yss3tzpcUQqTG",
  "key25": "3StQnWBwweYRxXH4dC9Cu4nMWWzujPuMuf5Y39oW6Kinq3gwAH7s5S96AsSepwaiQwWcQin4E7XxhUUSAAJM7Cok",
  "key26": "3dbVJLHkWLcmY4CM53Mpufhq5focDS2d2HZtY9aHR6Exqt1LkrXtfJr6kEFwATUeaSjP5a6Rcu2otmacGR9uMUEF",
  "key27": "HeQfdc9BjRV5ciD8MpeKQc5bP6DyJgErB23DEfZ7uBpUGXecFDfu6n2JycWB728kcdrv5KthUizgshpzCmQEgaM",
  "key28": "3vv4UQDUP7LjKz5KmdZEDQggRqqoCyHYGMktirdEuSYWjgB1p1e9Bv1LjNaS9UNFSip4cnnJuXaEf4uT3B8egp5p",
  "key29": "2cYcoKzkNsrbFztrDkfPfWn1J3aHJniJhe8c4NQEigBiNQ8VyfkJVDNN7DPsf8J3WjpyCooTDotfhcP7dv1B6Zbq",
  "key30": "5E49FGayZ19PN4MPWyyWY5u7ThZGVVXuf7KJVnoyLYVd51qLcQKmtGfRynTfAsiSU7bmprqJgjPAX9da9Aho6Ai7",
  "key31": "57xoRqfpXLyA9pn7WLCEuZwGHi7iXpgS1JRQiJ6BVyecgnX25AdF7KspoGrYyUSbD4w5p5h2omunB3mBW2D955Qx",
  "key32": "5JyMHXpuUGQgUXnvL8awNw3gALdTv8NT7FKiBkwZuLBG1puRPnCKxFSvNePgyhTn8Q52C5LQX712A6nexzHrxxQS",
  "key33": "4MM5jvk9MnLUqZJxs5NEkJ153bFWgADosGkxfd7qCXBsGuzi9oHQrMEZr8GvzJCDLV7WkD77AhEjPsR4o61E1kKw",
  "key34": "252rVoZ45KC9GrC5amShDY333kg7PVLLhw1YMPcXCarS2y99yy38UozroLspT9Cmnz8hGn1WqpUpZiVJKKLadnh4",
  "key35": "TR2nhgVV9ufBqnQC4PXxpjcnCS16nRqjC8sQd92nmN41CoCnLtTTc6qfiUeuXY1CvRmWTHTxLtK8cJo4ppbNzC8",
  "key36": "64ZxhuJGfWhWXhHjTtffgAUCzC9cDaYg7jZCNBXasPgB5soL6UBFuRKBzjyRssofX47W6YGuRVYvMwKkyXvk2X3k",
  "key37": "59ECATKnQ3w3HwbYVF4TVGNtzWXM3M6CN3KceT3KzeeEnec76reZ1wZzrGHL7ATSWxiieNFq5wBNwSQsdBs6y9PS",
  "key38": "quzxGUGN4vVDTRBoYQTrx2Rmqkvg4UTSDvBJopG1jguQrbKecDpUzQ4jBiLbTvkRKz1vMy6MfQvyUakDSEFZypK",
  "key39": "va2R9VXqJSLr8nEiEo3fJbw4sSUy8AAm7Yr9muF1L9G6a3DD1rPcx8joiF63XDTDHH8mBQ67ExXCdRaJBb4uttT",
  "key40": "5FQte54ESLENPDAeWyfVvYbgiir6a5QQVNqU58YNXtBi24J8YwX85kmbxrbWax4CNDmY6dLiicYG7G7kRBsrehRC",
  "key41": "4DQ1MCLybYCNAFN8XME9oVWeLXVgvqTqzAWiFdfHcrGVXJQdyzvFtxYbMaNY6egtjH3CS1Mv6q2JTKxK3Gv1sAoV",
  "key42": "3c69sr77vEPHkswb9isW3Z9z4dwv4EKCKFmckEXa83hZfV69RE4PZYFGcAnRJSzfP9oVzMqF4Ns4BxNwGty1FExv",
  "key43": "2WLNsRU52udbGELnecwt5XEBrKKjpUuUBnPHrPn5kcw8eYQpsW3cBpvEySUWPuSewtz6WcAxZfqLLqa1EdJs6a1H",
  "key44": "5XToURCqVcysMAvh4coQNUC5q892G4LhPKfyXboA8BeTj6BXZvqRpefqE9iSq6XLvn6yHu4sQh5tK4L4zjwyppVG",
  "key45": "51cCH5qZDeiEycGwNzMq64fMLP5vRWWLqtagksxWUxGSLHEiuyjEwMwpukeNmaVBUQr8adxrvm2UpvYSAbUzgbyV",
  "key46": "3WY1KHRPM5qMJUsaeM9AzxQFXDgKhF3A2y4hzsXuc6c3C7DUbaKHBqbCFahHXc35Vs5oJhX8t9FxzzX7vMVmWnMS",
  "key47": "5CDj6u97ckCTfR1wwCpGNWqWVWZXAhBPL69MaRDqS2UVoKhEidfoR4vDfH6PrymsMGgGX3ScNZHsnYp5m2YdG9ZH",
  "key48": "5Bjf4vYUxyysViosJaRxKmtrtkz4UmpRxoK7YjWFhjCSCfLdkqXMyJwufJANwwQWJL8ZNHKxXnhKsQu6UHK8QrWK"
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
