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
    "22enK1DLAWQp7aDqpzKnxXDErz9bk8f3NwXD9dmSydjDkYWQXqsEBvDtpmGqnZPkPJSDgPMLvHWB5oo4FFgXKRL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n3FEWaC5cbQmB3mmzPX4GUfy6SqrHeoVM7Gi7YpV7g18CaGJdc1isL9Finymok2zZe7gKvw9VD2rdv2nZZkpvrU",
  "key1": "5tKYgPaMgRxdN33QCorjrgNFpn3PL6a2aGXdDmR9ZoXaGNAEtKGpGaagcmbHhRS46QaUWh7kgGBc1fpRpehgNCd6",
  "key2": "4PAESZKA6trSMtUo1G1fPNUFJZPVpuyKESt2d5ULbTSFvssWJLg8AajjH9ck64xr2mwDC7bP4pAgEXVd4Z12VXL5",
  "key3": "4oFkaSXoBoUM9USy4aspvvjy6sUuMmMRusDtx7feqoazqZjDMXz1AjgmZ5XhAHbfyTcmpf9pTnpVRZjjx7k4RyEY",
  "key4": "3L7pesQtirj6XJn4M1mNw5vWTjRFKS4k4KhG7N7bjnmh8Lns21Pb8nC9EcGpVGtg9zDYTQP5bpkvKmLSwGwXHowo",
  "key5": "Uq45MrxHnbRUagXY3dUKGpZBmC8F4QxkAHLEoeiJxQp6zSaHic7k5mUhuM4D5Pgh7H6exff3bQVHuCwnmiKVYxM",
  "key6": "8ojZTxLy3rxWcjbgi2fQ11UcC93PvzLqouuGkEprZNu8zm3AVNuRDm7GNtdqCtvv9L5LuYaE7MJcdKKDcL4nr7F",
  "key7": "HJv8tyHbJwbEWgHs9ShEpKkVkwr3LRLcwhfDf7KnJt1XCpHu8VchGVyiSei4MqCZSu6s7nPuwLpUApuuRcb58RU",
  "key8": "eGzUHPknm4mZViEcN2QmeHw9joZwDJk61qyKAznwqpCsrjJ4PwFxj7TaaC3zF58hE3qdrFv7xqJJ66MmBG67ZP1",
  "key9": "cwYi6mWaiXTWntZEjBGyBjtX9NMDAU6qbn1zzCukBWLA2jy4ed35KVzixGhqDvg9Xr1wy3sXkhknyFPB757Px2J",
  "key10": "3pCo7LT6PqW2SoSx8kD8DQtCQkQgjpQAj6mFD9qWAmVYb6FLLz8tNva9q4gbo4MgfqhpoZG11UBESkSiLXz6ZNUi",
  "key11": "21zy9dhDTSWpHavmmxvZ9tNrT5um55dLW3ZDS4yNx6QLLvTfZtZjb9gQ91KJkQg5hHMd4VtR8PLTv4mPc86K9sge",
  "key12": "5hfYBzy9PVHcxYT732eqgDcoG8uSBk3KMLnPoR3FH3cxzJzzUQmfjnB7JmW714sZG5u61nNsE8XeN5LeQWWrzaF3",
  "key13": "2AHKFcVQUVAAJksEQxivhJfGBqc9yEMkga8wym5u6oSdBn6HMoAWtvBfvDrVAJMKyihR8HWh1w6iwMRk6QoWcaKr",
  "key14": "4MYQqB6zHvBtwb372uYyU2XFLMxvuep7Q4Rh4X1RQqahum4Rt1JEg8xrPHaQ8B8Evi1Tj6UTvhfPYHrKxh1kLtRw",
  "key15": "4LqNWaoDj5HZ6Pfro2CojR1KS4Ztgd7NkueSgNr9fUHZCT5Y7N4zH95MWCQvemBNHzDZFTfUHcoSBPdmfvZVZNpy",
  "key16": "46W4ENNXVcShXwdc4g9sXoKWtdL1cpkJKq2a1PCxs8zUEwZQiBi3f3mW8ys2GMx64jqrro4bBxnLCCkckVBQoYeG",
  "key17": "5hxZ7CXjngG8YCJ2Z6kUxjFPM9hwYdPR9r1yTqHnLpZS16ekBoo6DMUVq8wpgB9RTj7MWAi9N1Uy7EFhbDR6GQ1U",
  "key18": "3RBbn3ZV515vGqeoZ1dYcWZwyM13p1iAYJx7rg4652x398fk9AMesefNK6g2GPgmGSUNiqRWVZYrUcTY16v8DH4t",
  "key19": "oaZAKMFpu26FFwHS74ZTG7pximAZPLYAxGKkD4XkMx7wkhct1G6Kj1ATPeK776F8Xk2Uvm5cXJLeN7eVqVSoTYM",
  "key20": "3LYmiPjrrb7ohd7k77j3unL3ytZnCoWj7pxh9ZoD2TDgGYhcAJp51YiYaSeopdLbcwYKbueY77RUToiV6V8NGAp",
  "key21": "BgjERcxv7Mhq9oEqJAxrqkYDWefAKXvD5fcsMcBfkNN29C1fW2SKkU1vuFTsiRass84pHG61Qh97aPvYBkN8jTL",
  "key22": "Ux7CnqKkb88dgbBx5DVRq5GovJnFFQnBjRaR5Zc4zeLgHfHnm3Tm1NZSD3bzou8sMkybk3nfgUj3QjYz1iEA67R",
  "key23": "5MKBTf4N12e1tCYwkK5uZ1K3BSfobhM5BoFACLSmdgzXMPcnnzBThuwyD8Eyv33dECMRvYs832b5KJu4rahLfvmG",
  "key24": "2hncPyTjhznj7YjtFHv6fYN7fyTcMj3A2qX7CFvSSEMjXuJxM1vJ7TtTtQubDWFuqwAmbMHNwD1Eqekuaqe9s1rW",
  "key25": "SD5nfyPTe5mhPHer6HgHCf9Fy9wWu62MHQowtWmLH76NMjoBhhhVmNWFZNo2p9tsUq9NGLCEqm54caAaKBv2H8F",
  "key26": "3Bmcv7MfNFdM4TH399sxhUc7UrD2uwLQJfpBjbYHXeH29aHTf5uAHTg2hnxTkxiFnPeC2tVnqMzdyQ4cW6t6uyCK",
  "key27": "3M3jPduDC76FGDLnog2HCCdKWYpYQFWfCkEGRFr1RGA7orom9ksYKPEAT2X3MMhT1URXEcjJdrHx2jkQYuWWDaRk",
  "key28": "2EbprZUJUQiX2WCmDxxqcGwSCKqGDt9cVaEEJidg8DMQ3pENvji1E8yzXmXzKLoUVzQK3bBDPtS5VBtGqSoHqxjs",
  "key29": "2AZp2sN7pVMFVdUZYakL2iN5hHmmHv1FkEDxEwJ4XsGEUQJqv4MRUaQx5jVAJJ4D1gQj6W8PRyAvvNK8t979RQQU",
  "key30": "3UeChnqhdcJ6dwsLeY15dJ1WCB1ZU2DYrvPhRHAxXdeK3WGn1qRa3DpSdxNgxr6rsvsSRPznqFBy5XM5YHboRA9k",
  "key31": "4Q5Ynq3t7w8ymuMKGSQtVRc1CHbTPYmj7WuD88jDG6QCRRrSqXyEgakeXSqKCdeaMMNFh3xXyDkFUf31JZM3Ha7F",
  "key32": "64annbw2rnp75MhdaFwNPZhtjd73rPEZG915CeMPjgeHhgJtD8AtdCW4MeHH48zAN3bhqndLs2xN5c2awAo8kE6u",
  "key33": "3xHaRZncf2auCLH5KeWzpoz54wR6S9yaM6dDB1rwDj9F8LTxNDDMrueZcg6bMsDUHnpZc7eKXGSmDDE9LWr1judb",
  "key34": "4WKdxi32D7rW5r6vuio5wrkEDNKysQ7nSbyDRuhWHAUwTdzQY8La8i1zDCgTEK4bkbz4Qo1RssrN4bpbopjFTYfT",
  "key35": "4j59pJnkCcURQvgFJEbzQEhFE41W41PvnfDVQxh5zbXL4WcA3NtGXDAkXmps3Lsej9RMdPg1MUuNsoGQuWogrBFb",
  "key36": "2P5zT5xFsvKkwmnL9Fr8FcmeuH87iLuHsxa4wgDNEnB5U6TaYrtegPi51Uo93e1r1d9vnganG6tf24FXxfAV6Hrp",
  "key37": "4UwxrWe4M6pW5dxiwD1xNwa7SDKmEHye9dMZGSHJWkbd5u7dTbEqibvwdpxG4ii3RSzmAseRvwS87zjFkVwpT4FU",
  "key38": "3SuCdGgmtN1rFZapYr4kAqY4kHp6EeV9R2AjFD2D5QMP6u5qvki9idqTXjr946DKNAfXLkwjMo2aNgTH73m3GVgb",
  "key39": "4GNiGzZhNNFw1gtrMiWqt5RfcgEdQjk9TSFaEFC4oK465X3frrZr42p6CAcYh6kzQhRrqAAXUzmBtaFrJp22PcJt",
  "key40": "3JN9nLqNnBR4TQUcZ8ZRq34yJSZRDT2GK9HqzxAKYtt2ahAHsNdgkdJVMF87wWWNwcSSLTUpofqa7hXBKmoavEyd",
  "key41": "fFPf92a5SbQhk6WzcaSXjvgswUjbSzxPAA7tEYLU8jirMRwPunnQtsz5dMuGdc3V3eqGrp9jQ5vk2Zb7v4cRVMA",
  "key42": "54QRffkpeXRJKdknCX4Yd5UoRdGn45vYmAo7RcdaJZL9sbyoS4drbPiPByZXvcKCUR97fdk7fQzVRminwx78jrim",
  "key43": "2DkhYdNQz2qAdmLD9TLXDtRvCQZbB1W5FD8yDat9mWbCFK4KtKAxv6vUiKvNnpdvTRJMzWQv79UELgoDudWpHK1u",
  "key44": "5U4qkAuH5mi2bRspX64LePGTepPDo528fKF32dVE51jKnZ67nNo8YHDubb37KKbXAZttKdVt5fyZrPBRsGgYKbh4",
  "key45": "3wmCG7ZxgHBgjYcqDHrPM2CxTkjf1SzWV8nvdfs7UU6arLzXLe6EiP6P9ZrXVt4rRVR75fDDTmPyBoERahjySsB",
  "key46": "4DXQ4NsC3uT351YTg2Dq3kLbKxTFGfTp1uGRvWQHzGdmxZay1ATDd18oGbrX6b1sbsKFBLP8keTL42R4BjR8VoPa",
  "key47": "1thStbkZF29xVQdjN2eidxedZaZfE1zpz1VTBBMTfujsV3uBrrkaLx8Mz8y6kLK74hDJCTjtp3EMzh7wuuvdkE6",
  "key48": "5nDxn3WkrrryMWoeDnEtpTYzbqd1F8wKuMwoexisJXH7PgUWBf85eQQV4Q8ZUCWSKeV1F4MciKf14b8V2qQkjwW"
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
