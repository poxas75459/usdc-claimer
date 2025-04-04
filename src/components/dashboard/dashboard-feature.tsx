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
    "4ZpM5XEZjADWAqAHnukDSmGPuhFotxqiNE8QbPaQ8GzY8etnCcaaQe2kL5Zu9mjAupbBP4fuihbhW2NroFKbt99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d59noNYirAYPaBfH2391S1rWCJddEQReiiHhB6Qe2D9G9GipG3SqEXaECpEQxHB7hadFzFAb1V7wHtTtL4fztWF",
  "key1": "5A2EoL1XbgfZhQ6NycitpeycE2XamjXQy9e5RtpFtLDzFAWGSQ9uTn62Qyt7Gp5NHCxSw8GNAMnRnWMxHEPDWkoP",
  "key2": "365ntzzHMrhrdhFcMjPtUbCdAneeAamks994dfGWVwttLERRaEKW2fYJV2QZe9eP1RjNxig5JXAHoCjzt6RLcYgY",
  "key3": "4aHPk3th9e4mXE21uXiDPiD2EesTXoiGYDNRq5cU6wZ1L9e5Ub9C49LGU7u1vMqKeMtZaWzmfmCBSDB7RJsqykip",
  "key4": "65C1HmA4C236K6LFCAJXHVaox4C72czUBTqXhGk4L8fHHAyWQqNk41wK6qowNHhzBYA1fHf9BN95F5CVuQG3Biax",
  "key5": "3JnpNdjXoKzD2WQhFwkzDCDGvUgMvqyXd6qVmzKD4kHu1YXppKYsMT8QuSzbuucJ6YAaPY7yPHzmZFCA1MQWJyUw",
  "key6": "J2jgfYWnZE3nwvAD1DFZ58oLy9PgbWXoakRU35MqRuUBpV8DJFLbjYM7EdZUFJGGjNBBZhFrm96NZa7jtt76RGh",
  "key7": "4kDrqUuWpmp3yfQDJqaaofYySBH92jPHsJWBaiTHLpaxgLgsSKi4CvXfDBwubrHF5Df3ZAGyuyNU9kZ4eHdjwBfa",
  "key8": "4JauEsdSaapU9pnCLbUo55sq36mHbhetVwJLviVeBv4ZhXsASEPDyZqyAEXh9YLi9vfff1bp9G3qMUL4biK2XATP",
  "key9": "4NRQNomW624QfvV4Khc7shwSsy8Sw7u2HgPq8uxScn64FPp7tE3jGyhMQZg4jd2hAcuMwdtXpyfr5GXp2n91hXzX",
  "key10": "4M5YjgNCb7ETPdFVfzgynL8wJwtebmHK5zKnRJ93HrqzeYaWViqpvYsDEwi9JHPqm31FENXesY4R26S6D41cDcg9",
  "key11": "4XLkzTCV6uFxExutmAR7sKtiGSq7UBuBgoJ8dquvBkYyBiCqqEmTiQqifFgtcMduTfUEwmFHbEskdhmcXqv4JTgq",
  "key12": "3mmb5DFn6vDSiqe7fa7zs3yefits31ssVrRGZRgNRuqtbTh1GQL1c4RFUmD5ZgWqzZ1R1Bgr44eZq6XDrSdfxUmw",
  "key13": "4dbqf83nhwuhjR68nTPnJmhhnNCetmMqsdif2d1uj4hHEw1TDU2qvoasRsHNvyZTgH1Zt4TutRH9AjQ532EXfQrj",
  "key14": "22kPL6hebeubYr9KkjsqweJxAuMYXhNeuQ6DQT1tPnsjV5aEc7rWdnveeQcdjkNVtzYP4BdjonLsTiheDzBA2uTV",
  "key15": "4qj6botiU9FeikseBfWE28VS82Ad1XWGngvonC1siWeAxsFce24K1B8CuymeQ7uhxjE2PeZMR1BprLUwN6BePPEV",
  "key16": "4WnL4dhEWTbDjSeN7dud2Yfxjnpmr1kCEGoi44ZXi2SMbQkS15YVoaBdHx39FNT6uqJHDDqUrMc1PLeZ1DgsPBQR",
  "key17": "59tabW9jjEZDaMxqLk6aoj5zhFcYanKeT8YLQaaaX5TgsdERHFydy2krg2MHhKtnzAn61XdArues1vZwmMmTPXtG",
  "key18": "3rpnkhrrqJ4ipBgkGChRRNfrBMPwYZsAksfG23G6L8PryJmwvBF4NHPiQWEbdhzZftvia1agu3AzByVK1UCyezvd",
  "key19": "p1tDWAQsXjt63p32Avca3od81awLQUpguEY9qA7wehmgPh5PLgdE5SWXP6afuiFhrfNe6oCBZQoTbyKHrJa49Vy",
  "key20": "WcF6mfhrubvcG22Q9S6xoX8jUXqrEg58phbe4kGXEWY6DEmjiRt6EC9BCMQwRtMofreMkU6a96Cq3buzz8G66gw",
  "key21": "2wggXNiXFfVTor8ELUkFPqHSfc9cCbv113uABFRTEA18Hjxw1eDF3JzqkdLuZLHdJMbasqNaSRHSL5PLXzZ1zFr",
  "key22": "44FoLDj4BktcWTDWC89RGUEGPQQjCBHE8TA8Nv96CRLgHYbmQyAd78818A2FgPpmA8Xq1rAZx7wxYQWv426ZpLE4",
  "key23": "5j851S78WxpYqNsAvFLrbfkmGwzXDWqTwCMJpKBj6rBTbmpx9PbC9wiPXTR1JEtSYoUaYcf5BUv45LuHCKyWEJwX",
  "key24": "5GBoJQmUZgb9r6YTXpZLxmEmKaw9oenGQpkCpzzdUcsR9jU98y1kWZYgG2qYXhzH2UtozotT2SxnhUUXcpNwieBB",
  "key25": "3S1VFWxMUVQg72XCMbNCtVzdgJzfnehKYmSWyJDGBKduZho8Nzgo1hcJwxfk6r41v9EpSgErnrac6vvMBH4wh3T7",
  "key26": "2UYKjwj3J7PaTECH6qZ4NxnLNouQ9CpCbeUKcEr5AMDYqLnua1UpDWi9RhgdDbbn9Yr7fji3KpFqt7xD6DbuwW15",
  "key27": "2CWy1UDxahae9MiJFTthLeavEkVhHNzCwJNrwELdyAfEVLkY8cGZXDhPjTqYKMkap8ZWZMJTvvpjqJDVH4yNJgxo",
  "key28": "2aZmG3MdjEwPmxYfn1TLDgEpuhWiXERxEvSgQ3iEu2gAouU33PMDcFey4KQzgd8LeykyjBMUqwYSbkdYpx2paG6K",
  "key29": "5hoXRMkhyiRdx3yEQuVbEFiz7fpeG7aypWwrfrz5qtqCifNuwYAicg5c4Kjj5zcBTynbck43HKk8AwMArYAmbS6j",
  "key30": "2w4YH3GKv1xs2GpWN4ZUepMzgNuG2QSyEzAWamoqQZFe1Q5UcwqYYbk1m8sNsqJRxwKMQeoSX7zbG8qvCZFiCQiz",
  "key31": "CQ3Lm5uuRgGFYgtUT1UZTM5wEf7beSwUE55h6wYPxWUsfK5Rk1R5rBwDkEN2Qkt6XjkH6xCW8X8A5vmEeFk8h5g",
  "key32": "2VzgJpyGbSNTJU84XURoSbQG3DjhSXGWj5H1eThrwWUge6XFWcPQ2HdawFZLLgdwERTtvmWsRtmiV7KEWSabEphE",
  "key33": "343Eiw8JMysjWJHfGqEMRTBiW1xoXMinwmM5SKbqERdnW7MGHHbgzi68fKsB8X93ioA45SugXzNRbEYABds7cfPn",
  "key34": "2jJqm4CbXvrVMaEjMk5qNhf6eqT8kHfCA23Xdx3MwFojpdW2d9NDgc7oe8RhE78G5GX5c8htYmdkHryTac1gbrkt",
  "key35": "v68rAk6JeCWuyPnpoHYg2U49unALAcUGKNC2oFCcsgCwKDgWWL9ESCuBmJ5uQDS3RnZn4FrXw9R3MfCNDHpA92t",
  "key36": "azyxYxepDvR7Disai5zx5dCZwpWnaJDCM2utLvbFzthnuvvcn4cYSS715c4TZ8hqigR7DqFfj9rYo4F6eA9NVAP",
  "key37": "2e176budyHXa1LYFRaMark2WGN3KtZ4uLZjHeCykFFeMacm7WWuDYyezYnvYzxeUWVzVgXckwRoHRTxcQHFQBcb1",
  "key38": "5mZBmAy6p7XBn2sNJkw6N6mZVT6t7rUyc22Mjo78eabmkwA1JCUU6d2xkzb71HpZ6e6RY1CxYGctnkCVpY85SPKK",
  "key39": "4QsayefydrymNCcAJ7JkxpmdT6my4RUc2tvMD5xTxeK2jXVbbXoY85SaJtFPqp2PGJPqfXa2Z6uiH7JJb8LDmAKY",
  "key40": "56o1ts7iMQqDG9zoeqRTiwYWGAPzzd6hivv3iKtPVz2Zqvg58E2ipaCahUGu8Fhe78dRLrpix8def9wbe9PiAntT",
  "key41": "5mKx7JD3umpEFPLGMEbx7HvtRpMzgYLeRnCzXNML253uCVeaH4qNbuifNe1wjCAWMdw3d6Zn5J32XqsvPgKAZLL6",
  "key42": "5beyzgahoijN9WuMg6hAzYAoEK5XakZP3vJQDoJhRdENeH2z6vmibTfXRPLFX6F581Rshgm6qz4uyd9cKB96Gt2R",
  "key43": "5r5f7R5zSjc2mM2UmLLuRaiouRA1sD94KVL1F4fCkK6v93VZPRsBUrFLZGbPmWEnPwbo8D1aAwQVGubgDMSd7THe",
  "key44": "2T9Fwq4jGr4YAnKEQoz2qwtJ6No5Su3DfmY5RWuYye236gCkUQS6HnoD5ydqyBqWE8J3yFLtSoHQPzxLMDYVkcCF"
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
