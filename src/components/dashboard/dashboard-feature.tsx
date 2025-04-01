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
    "4dg9KZ4cRcurybkLPXNbB74zAsrRosETJFsZXuvysEToFZntY2HoUzMBxu5go6RZo7kYdPq55tbfrmcA2wtC3Wy1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "592niu4g9RJEFfmkGnLzLRLoEo9G7QFnZfKjbnJsgQV5CHbeFAWRrUTzTtAPhiqxYS2A9asdyJqdcRhiGdTZo1CM",
  "key1": "3WuZaco4s4es5HAn6WZL2qxJeHkx3URoJQeCC2oDaRNPKTaaUatBUM6AkQJDhos4cd9NjTYdmpRvtw4hhbwhHb2M",
  "key2": "TQshMnmW4hQ3tuDX4quHVLEg3yS6VT2dVAW9n4qD1GCvRdF4btU526VWVeecMY9JgkioYGG83C9ezPzDATsxY2Z",
  "key3": "4oB8XSQnCZHAek3ZDHKroeLGizNSAABFTHmKs7QQxDVLX621Ds3B2wrBAfkPzzPpav4xy3uxbWYyqVT7efRvcXav",
  "key4": "5xh6PrzBz5Fq8yJyFyG5gCR6kWCxy9XQJofQ9jtERw8H8dYY9MY1Ui7XwPBLhuA2ymYZNXqidP8WdrpecmWqfUX4",
  "key5": "5f7VTG8Vz1gtbrqdWftamUtMA3L3DHgreQUtxNXzeNvCdCYRTBQRy6eCeb8aoH7AwuiepYFRtCgbcw6KfurVLCaw",
  "key6": "2gybSMejJjv7WdPrrddGUGsPb7TJCwb5MTGdJvWkPBTyx6FV5hMK9xeLLDmNddgDoeZoxEYSpYkTj863NtpFbox1",
  "key7": "33d1vwnDKgxLHkpfHFCXLPdjcJxbTbTLNYPUuDfKcvHnvdfYw5EFe7mKJTH9KdctKuPLtyr7H4MYuUAc8AdnZcQ9",
  "key8": "37zkDyENcWQS7eYDFAFwoUHLZBaWvErpnT7C9K96HPU6tdFuf2KDM4wvz84ECwj6SA4vR7gRqcVAAhL5Pwhgmoah",
  "key9": "4Qnft5PNycjDsqT3qkQim3f4FtrQXuvZ5EoXba4Byyd6GaYod8Kf28eM41jAb2L3QqWCdEBwtqZDFtDBV12qy9Ww",
  "key10": "NAUVtUVAHe7MZoJgBhN7ZeGrHZkDytKsZ931zo46xjFmNagoirD8vfgJqq64bW2H9e1KUuxWC3FRVfNeSVTWv1b",
  "key11": "RfNuzmzTLtmg1DrngijntAi5AQK3ZUAePxqfBnMUDZWx4Gz61AJ8mLbFJizh8Ubwn812pJhjTBsRhBf5Pjy1r82",
  "key12": "2DGnp1n3cjgbucdPpKSwTZjHFhrxipFXH8oWtSDQbPCx8oWo5WxHTDc8ERqTGt6npAfNHZ27eRXNviYNiNWRmrci",
  "key13": "3NaAYxLSVNPiEPnCLvzxrQxhhDAtAxAuDFa8k84UPAK1xGvVBYfgLwLiGw7NhVuG7E1JauP22Y1zMhXJPo8meVr1",
  "key14": "5R7z5ggAMeW7VDdMTfwakdcrAuAoUzizVPtPbN899XkNmUJ5Yi3GsKresR2CJgEa9Z7jvr7y7HeYdmDPV5dxnV8",
  "key15": "5bDFDbvmnAAobMCiuT53wtrmrQWbZxLkyp4dh6uhYKuJq61ciKfbgzhmFHHQyBVMEcfb81g4YcNYzvjrZE9Z1FQ6",
  "key16": "2HtWhVGuCMhx35Y5V5z3XKRMf4YnrLXnpgnoCgGQYUYNPp5nqgpStH3FFFP3r7pjDD1V5Bq3RxbwrxQQ6YbNeaaV",
  "key17": "2shVZavdY4k5Lj75JSZVZNGAxUnNt1rUR1j7WokKMAYf8XGYUT7NsKEAV9D4UoZH5bDvizugtvPiPHkYocZDLqQ8",
  "key18": "3qqtzrAUz4N5L5u3fY9nojemx35xJznvvXeiTRxx9rk831HVh7W3g15Fyd6biai5eJE3kFCjLAuECAkxcgRb2pmD",
  "key19": "weroiENP6JPyiThgL8JDE83wJdQhNXg5CNZacQMswGFD5AmvutE3xkqbU4ND415Wrg72tz4aoQNVsLjHKHAWJQu",
  "key20": "2nG6ZsNLbDpa3xLCGpQUrM85ftf6UCdSytoUq74RGuVK3VhaxjyH3sq4YgyX4L2wAt664FYsxHMqCtWu4k6fXHXo",
  "key21": "3E4Q8yH23dEa6EdcWpHYk6eP6V9QxNV6uL9WQFetK1ZVKE9KbFmuukjLGVYP918Q8RU1KtihDN86Vqhic4zP6MEw",
  "key22": "3SUiK1ASyJ62EQE5wxsLRpTCEAct6nnDbpDZaL2DcM9WY3DqeEoydjrRdvsxeMTj1AkBXdkVD9oX4VUuNoMACuVh",
  "key23": "2JR8DhCSVBDS6ZL7AW3ne2729a72V9CP7EEeQ6zGECRNjF4k7xBkvGuntCukPkXfNmGkeYW3tytx3WtbEDHq31ac",
  "key24": "3SrexnPP1PeBvfeoMmx7S1H1q6K1yGvtaraUjdryR8RASr7WipSwzG8Q6BfzcgJ7R5X2fEwD1VL1d74pn2YMY2ua",
  "key25": "4GLY7uivf9rKEeQVs95T8BniiZuEBMQx4KC9ZhnAc53NVzjQNRRkgDfs1Q6Ecn79uws7BvFSx6eHErXstyMd9KZF",
  "key26": "4HvcKsKigmysyPrVNRZCDYK9RbPKzSV7D3PJV7akeg4LuaX7eobEj7gSMavC3iTFGXPHmcrsBHbnNrvMR2FWhEa1",
  "key27": "5maDFGSDyAWY2XEMCiyZ2fT22xVhYvKYwmG7g2SVotqiNs39w3qYxHFpifbRvnwMLeKDCp7z8T2khQCwXH9TjkSG",
  "key28": "51GV4QoyFeDNABBWN9qoDUvwuhTJVXVUnkCZZBZGybm1dLcf3dnwBUkB8EqSf3s4rWyzHhF9TgPeKRXx6WBofULF",
  "key29": "3ciSHJBLU13u7nHdNJk8sHt8cUQHrpQ63fktqZExkQRqn2awYeACLgtoPHSM4BM8dtD5m88dSYTACTpVacuH8mGS",
  "key30": "2Y6heAZ59bVC8zkZY7Rx3aaQkcFVGv5mQ4EaiXzP9bWxZTjrHiudivfiyCmVhAgpLU8mXxjP2FT1hEeQQFSCzpws",
  "key31": "3sB15WJmV7oZQmzbCS8H7RKv9mmbXr3MvVL6FRyu9i77s2TYEAtMRiVAi4ss9NYvFrG13nTVytEDxFYXvfGFUe5a",
  "key32": "QbUbDyuZkdVutZiMjP5ctRg2j4Hn1WTXJ43FKBodYMLmC3VMZkswBiVtM2khqD4zMXYxQg81zwpqHc5q49v7osj",
  "key33": "3bPviEy9ktaQG7j7WQPLDh86zScuRPRVfH6g7EfPoEQZMMjQYswr7FKhPT153hsoJjcCfYYAi9vvzd3mXpzq9stt",
  "key34": "uqV6nhPRydmok5yDtqJBjxVkFURbHmPhWm4fvUbpxyJZL6zdYEeA16omyDuMbcoo5uzarRuecRdq6ZEBuEjaG1f",
  "key35": "52FK6noJwsTpsd2YBok76RwA653fpxKJSrVxwdjj5u22mMqT6zcTPKMKdrHK67WfXYQNW9bqka5PuSWwrUqDeB2",
  "key36": "5aogaW1zi2bLWosep1GeU9PuGhkVKGJPvKAjHV7HHrz81wmPVWRYsrSTa45jfN1RtaqzbAs8cfC9aMyTZHXoL4oK",
  "key37": "3EpQqmbCCiUU8BAZ1hwjMMhcNL8RHkof7EUETYrNd1cJn5q8cXPKf18mzhQx4XBpoLR6RuiwcFD9cmP7HZx897Aq",
  "key38": "GjQPFAKLAzbYcFH4m8cx3mBWT4YRiQWKFnrok4HESfb21otWCWySnsDhLSYD28USzXCinYwcJ6ni2AcdmD7gAFt",
  "key39": "3uf1raZ6ofhr8SwD7JgkJygX4aGrbSvPJ2ir9wEpcLsM7zLHhF2VukyfeTpCbgxi2zRLM3jXV5QUi3P6rft26yYK",
  "key40": "2KGnbcboThw9aocuWYpXd2vDRjQNDX1cvjPcttXEu6ebWKTQjLSgG9LVC3evB7LtrpGR22Rw9dsxeYjeGRzL4SWy",
  "key41": "WTqYzqGKiCpYtXbKUgcER5L5U1WZz9pWHfe2GPzgXqP48oSJqVt4V7uUMqgHcZispmb5WfpaRd9vi1DA8DDKGjs",
  "key42": "5f4mARSuTfLVYPiVb83yExu2FBcVmkpTK1QcLTaqm7ywZsZNwc92CJhNuzzzY31pdnvJaAKcWoxS2wkUbKoyn3mm",
  "key43": "2dtDHiZKu8WibSBTbktDNRDYQ4S37P52kSj9j7XuYa3mggS2aQ1JUoykBFHdjpX3HG1TUQbhAxxidQwqYiQPQ6Z8"
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
