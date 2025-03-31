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
    "4mQFgDAJoyuncdZ56RNsmjPytKgqj5ZYdvryLTSbsiVx2cBFqPxYBueJGRdiWWZFas8AAKE87S5MbJqJbKeDyt9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SQmXFrGqH8HsvEzat8FgTTc8oqGgi9KhwZrczREU2CoZAnuAXz8PcjPiNtJ5Sz4BFEdH1hApo6jSvfAHoPne9aG",
  "key1": "45htBktQgbqmErv1ngdL1o7ZYW3wwn18qTrW4gLGvXfsXKh5vAXxJNpKRGpyynZmE5dtVnjZsngbyvSukQ2BscSR",
  "key2": "2vJB1QEp8RmftfXuVyscMsFwe4ZifYj9mEonWBH8bFQ2w16WPotP5xQfAzeamDZoMuGoDemyqCn2ZmXCNyvZGHjF",
  "key3": "2fg41qqEANBjMK2kKRpaggiKzLokWSfm5PSwsMdY7xJ4pb9MDHUUk66PX4PxqrSkzsNvxeQvFbWhhZ1BkBiHCFxk",
  "key4": "54DSfT3y6DSczUdbiAAX5mKyjHugTwRNKEaDQLKRzKEi4fhF9mNu1t8SkHSz3f5fKmHZo5x35VtH72DPdpSiqJvs",
  "key5": "4UXTJi46SZVjejtnNNb3ttThiVbYBWncUHUnMGmheVNQ7u5jPMLq2eNBgaqEhTccgrdyeSUPjETSJ8uHyCNrmVm7",
  "key6": "4DwKb9rsv97zXWVcRheUg1BCPQWzYXSBSWcjYqU8AbMxfnMHmbaAH7Bn2hNPvAvEPqoXi3yKvHHYmLKGBbMUUe95",
  "key7": "2WPVaa8q8VKikDZjaGKAV8W2pta2HNejvnf9fC9KNgekHTc1ViPnHfE14CKgvGQkzriNyBSa1h6S8H2Dyh5toSpF",
  "key8": "3qPR19bRfQHor7iLzdVBpcFEFK3XSkJL8Dg825jJX8hywJPnDrad4V5LPKPQjiYvwjKTPgtQVXCFc12US1UK8kM8",
  "key9": "43oADQkqKcm2K3BGYZHnx1gv7XrX7Qf1QtEK25BE2jo2bxaBC2Sr24ndHv4tjew9bPfzzXPmKKeSbCdXaSkaw8a2",
  "key10": "3nFxxc15qKWNaYSotA3PXGmNbc8eW8nSjXsvwBoDwgU4WtD5ivGxB5ZnQBfD1FAkH39nUDvGGhwnQPRfWhuEf9RX",
  "key11": "3Cu9yRDhY4UXwcnrtTXC2o1WQ7ytmPpv3Wt5FwnCTJjZHdy7nJXV5CheWfEb4t4Chorbn6BeZeYUyCemeGf7Db8c",
  "key12": "22J3xH9Mobyg1UmEpy5NnDdALbJpvXdc9RDDqhhW8HuDmBzmRGqoZUz9BsmApHQEdKT2A5qy7KtYJsks1qGauYd3",
  "key13": "cJoFZq6opJJ1SWowbart9oRzCqsRmf2RW6HuSfDi2j9ZQuv9CAxBmxtWbKjLhi37aKCXShio8pJsYxLE7zAHhqM",
  "key14": "4C1Ri3FsxgqcNfpLsq1xw2b2CR4Xd8TDCegSiwB3LNjCQjLiwhgtaotmwHqymcHgG5nsdc3TRxTFoUiSVAXe7QKt",
  "key15": "3qaoyQWpm3b8fg1FXa1A629F4AhmypiLsMzCQsSSpdzTca1hiAWFn8HSKsQVcSrShosS1dC1H6hiHULYM5dJrF6Y",
  "key16": "3sACRCEgFtv24xDYLNJdYcEkRv3HtK5v4hotCUSKVDFb97JWPuM6Bqjvbz7zf3SkwxabDG2L9gs8PqaRkG6sKvGK",
  "key17": "2GwRkRMbgiL3b7mk8mCHyX9XH15gcWuLEM299MomV4u9ZRUNz3L7txunt55tcSRQJbfG2wUAVz6U6pscP1vXMoz6",
  "key18": "2fLXZET4pjNraaSs6F78Ti5Xsnk6cJN9mgg1SNaycyt2YfXKR8NuHkYQXQyzWtjhjACe7Lfe4bJjtgLCZPQamMsk",
  "key19": "2r3KexoHn8eN5JxSohe3bJUbWKPzmL7wmJDt34aHFzs2SrXbrByJjVt8RVjUDchCp4NWdinwaS6HqFNo9BuRXzB2",
  "key20": "2xQM1RptG7NfSR497thFGQbFmg3HiF6XQMBexbseQh2mA1rfWzqFxXh8mJzpMmqsxf4dWycdoVgECfa4uJFtWmW7",
  "key21": "4qj7K4oXSTeCn9HHaF2d4oRCqUm5MDYRh6J6Ev9QEvYW8TuqZFgWE4DibRcrKz9Hb2pzPeCPWaGbifHE7X41gnRY",
  "key22": "24NibJQzak4i69m7gmMQU9MCUAjBFEwdMzYsFRk6osGTMnjh8sixHeW1sS1yooF7h5DMT3ApnigqqfhGty3LQNkX",
  "key23": "2KTonJhu4scaZgeUEzMSYAcQLS1Z43ThmWs9tovzaicWC2qP6rU7nJLZCYkQm6agiPRzsaf8wefLnGBiPH1JyW3",
  "key24": "2xjmTbnD7LiZiVCJL381ijoMKvwGFxNCfCp9UqW2n1NemsR8RoGNgnihA2ya9obcDDmKBAwqirHfHC7bWrmZyRTF",
  "key25": "58ob3k3ypu3t9QkkHwBHEBQVkyTa2SPbPBKhEm1R49632TvHe64NF7Q4anP7786eLoWATiuvzu88Sb6bvrJ3ExsL",
  "key26": "239Jva1uBYCKDmZ1GZNvw2NQrjffQ3ayhtTUUfQXzFgYVyyb8chHmmtb5xMbwcdeEoyxWLEeQePwt5A26dzDoRNc",
  "key27": "5AQHBmgk9xEDTsPKFeUQtpwp7ENqpubPXS5jXFpaSz1uKXpKKjSk8KFkURY9zc4kP5Da8N9ugcDGXSq9w9w4UZXQ",
  "key28": "3wXrJfRJM6CAsvS5bVZC1yKNP5j4kgKgdibtczgAaREWenjm8ose4os7ZUnykTe2fJTUFaVRReyymP7skqT2vqo3",
  "key29": "2kBGfQANKdYqrumjq3TZbB3v5FMscMHaWcrQtv6RAGDHRKakrgBsSFAA475g47qZUfoqQWhMYaa3gLMh7uaFiVPC",
  "key30": "u9HXirsJyXoTEd9E19iJZ5ZWociyYKmnDEVB4rnz11qVbW4WMfQvcddmz16AmkRHnpPkvLn9C9ba6MP9sYenuy1",
  "key31": "21NUHBDhVYuhvRt9cD11JBKaeHkH7NYaXbnCD9STywkMUYUdY8wrznY6P8pvf3ySxQjwzApgxVBsi5YenLhBvY6n",
  "key32": "2CbquxfJ2neWXSHf1bpLcuxnAdpwojZCpJ5n3Z4ePDWTjsowJ1gvt8j6fdcBWwjWaBautJJ4hcy1kW9ACYCUJeQP",
  "key33": "557jGqZxoeyW11XbXUoeVmHwrRddA5Hegiwi6TUqKj9y1WRrciTTYCgJC6X2pMtrBwF7aN8mLKqnrpwXohHmSxvB",
  "key34": "3moRLuEhUjS8fTbmkRZHjZ7DzdeH6AJfQB7WT1j4BTN1VLPpZgtXBJnfFPUfc6KicUCoU3VwW43ojYxY5XLY6zLD",
  "key35": "oKDVxAjVnSCm8kcEmJxKTMbAuFf2QVjCNtseptcdXTpkQrQD98App7nhGP4NCfG4WY47uyMSSXwEhGMS7pzoQnu",
  "key36": "4cdCXJ9tepvmBW7wSrJSwtvexsXGHUpqFouqqKPHy8hXxBTpQYMQUTaWxp9wXXfVqxGvCeDcEkJQd3iUDdw24bbd",
  "key37": "CPM8wGQtwHVp5fHTcK5N8svftrybmdrJ9VtZJAxvyHESjJ4eSBhu7ut4bGBaokP4Dg7AV6VqrovBK8W99Cy31c6",
  "key38": "2C4eLrRgVXpTC5XbNwuZBdHUrJufDzJ5fqBdpinhW3tAd27eZDk8iccz5DN5KkbACFQxcWpt3Zx4PyrSCuqEcxyS",
  "key39": "2q6JTss8m3T6JEprURxGXmcfmb1yTBJh2rNei9sJVjaKEEhdT91Xz3ea3b7SuCS9ECF3TBUy51RsoPxfBVAQhB3D"
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
