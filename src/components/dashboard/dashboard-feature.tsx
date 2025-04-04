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
    "2eQJNSRj86cg1eaxPxdY5jo8LxQXtoFfecpTkdJzpLW7WjuLcjUQ7RsYop1srFpaDcSgi6vuMvrDbapbpKbfQxjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wq8grScFNik27g7ykh414zKYeuq4dR3iZ8aueRsVut2ftgC8UsQWpuGortFMtV5GDRCw3xvP3bPtASpY5hTeKCF",
  "key1": "5Y34X5FvJfPXoKscBWTks5TDfo8mNnsccX4ojFNSERLShos41H4F4CzAUfzN6m3SkNECf1j1bZ13LxpgEuz31yE8",
  "key2": "5bVaHBpQ1WGwmjFwKcaTg3ppM33T1FjMUyztydhLRYidLSD4yGBkWHdW1L692Ma6B4u54QAVtCs27rBNcH9hNDGh",
  "key3": "LCC2WddNCXg6h61Z9R1giqwKcEH7mnrqV9ZokuqqTUwTbuJg9Qw2Ar6XELYYxdsUkSp8XhhhdBroaQFNgK2HPYY",
  "key4": "63UZXCTbhdMWb5EzywAQ4ypqmWgFMSfWeKtnrD1q4tBgdc7PecMU4wYofi2xBsWi2RpjRx1jM2Wgd94fyPGnjJdA",
  "key5": "2srPyp5kYEetWpRupfwV3AcMVzQQj5SvkKBFKbtPCts3i6TTK1gu9UppEeGAi8Rsw1oLwT7Do1EpBXGoeSMrxer1",
  "key6": "5zcMa8TgqMKd5nEpERtB1prCrBTNFee4EvvdoDhB9VWAqYBWkfFyhdXraH9ULzU8RXGAtaErgVuftiWrJgr6QWX6",
  "key7": "4pvr3RgCWi474d7kZtXUJNzCTWYwqhfdfoqQXwe3RsKqXB1v9D1isAF4zVUvesQvEjB6hpempQiYeHJCQJw8kKEX",
  "key8": "2Mg9kfzUAzMdpMdmQuRj9tinoJLb6erhkVsogiNgfYa9qTRz3C5irdhHDDJxQ5VSreKw1iEf1h1BfuEaRXsUzCaJ",
  "key9": "3sqGZaFgG46kf4QYuMKBhrJnbo8727dzvek6YVdZEW5AW5o2TKNgQA57u67VwvUor1JsbhZUFHPPMkJfFYp8N5W8",
  "key10": "27NrNbfDanSMPH2ofqrbubsLBbYfRn3V8AB9nXjMJZ5Edm1tsAVBDHLJ46sfQuao5aZZkVTY2D39eUXmV8xDsHTV",
  "key11": "3xqvDke3aXjkTHA7YckwZfkhTmXpQCrGx6B8odhzGLNDCyQTSk39i4XRCvm4kLUd3KyBTcynMJZLCb7rWEoSsRzT",
  "key12": "4hqPFSUCZmsxSWJAPFAE55HNWzdhSyCiuGLdttcy3aVw4ib49RGynaLdP4diA7o3LBcRsjQSxu5p7RZX2BXsCi9b",
  "key13": "4Tx5oDDxuuJZ373PjtPV6DT3rGrGe9p6ker9LhYLZR4HpYWbDMyQ9Dk76Vm4Yc4VbB1ebGEGXMc5o7pQm5k3KMrJ",
  "key14": "72xkvSxYzTjDWXnk2WVmUiZnPDgrrNSmz4sv7YPxciFMY4zGJtrwyaGFjYYihYi2o5N2Nf5yUWyMeaAorEXgFUX",
  "key15": "2ntzLzEwgQjVc77eAzrRdKtf2rgVNpGeoL1DE81kjptZgbP7Hh7FLxwbxbBU6LG1yFxHZtWJYsW1oqgBJtBPiqdS",
  "key16": "5WDCwgUsDT9xd1qxqBnreG6frr25yXHkTcpa2ZsMSwgZUvLfYbBa9CqLb31pjXmpcEHD3jS6azDxCCwssv4nyTkC",
  "key17": "ViABZ3VvK3qZkeyEBnMeAv19Vk7jKDhyaBLpFMuNrDVs26jKX1Ltb3CrELihEScs8vmcZzQ4V2gNYGv2LyfSUC6",
  "key18": "5i7VvmYGNwUg7Geu8hp7xJLuD573UvVpN45zSFBLLgL3dm2wGjBVSTJsebaGmGHoawNQV7E6Qy9w3LJceJLnZZx3",
  "key19": "386vF23Q8Bf2zmANZhCfWRPWaXCdfXZcWG5qEr9EuUfqVQX5ca5bySKkJ3UWvs35h9zfTuyK9MfUUSYHMjKB13A4",
  "key20": "2xxqSZdDAGL18NNT1R6gXMbgbgiLAoxTbtJUsx1FSdzrcsCzeDZT2T6hf6iJDCyUN7xS4ed8LXzQKcv8RqAgNw79",
  "key21": "3fqgJ1ijaDd17Ctxn8T4wAyjV1oNnCPa2euKtHTzqmhCP5N7enWEY8zj4PZonJRPVE5TuP9MimBKW2aw9gX3h4o1",
  "key22": "2CcmKodu9PRJtJ6rzZptBaZDTQd5q9Uqc9qFw95d5Vj9h1DEG7vi2wh6xdUyZtwYR3iZKk6rKCvFZEdJ1RFAFkqH",
  "key23": "5AiiR9FEodhTLmfMHrtVzod7Yqq9xz2YaqLN7bY7Qd2XFHtnvyDZ5ZgtSKFoxddUECb3hYbCbTQmt6sBJv4pGcqm",
  "key24": "zRUDFL7x7atBNJf79JgHifwZ626F8MPxqq3vB4X3mu44toyxuJZGC6Coujf6WWDmzkt756h232tyHt8YPRFAhDU",
  "key25": "2qYpEn2eLodzFaWsXA7cAXM1RESZJjuM5BWXJtnwW93gjEJxM4Grc9EWSAH4zK32jagwbQAT9qgYsD9gggiNTFnw",
  "key26": "5ERUJxQBQgD6JSZD8QEvgyufh4DxZwHP3rnVijkrN9WHcERsRBFHCYGFTyfKZZwHq7sUvwHy9Y4xbdNHNvfRLw7r",
  "key27": "5p9YFgZkkfHxe5xRGjabdeSdZX7xtHpJRrw4GDJLnRXa32KxBDt6fQccRhercBtChTcPeNmSciKPjKiCh4fqxNuh",
  "key28": "BpDuPLRSmM9TjoCV4EZZxG67tJFRmNEA9mRAU3FwGTKFvQ8cTrR5PpMeWQfMQL2JburvUpdkr1QJiiY1RXPLcQ5",
  "key29": "4gQyeoAq8Fa7VKMFTEBSbAFRZLMZYmNLif2mdWgh2cYbzMGkggQ7AKYyDt4wXzN94qd7r35dVnPhemtKfWdeGSMo",
  "key30": "45BHLCdHfCYjmeui1cPDKnMorsaiH8ksFSZ155bUEHbKT17TKLsYWHCwssf1k2kxw8nG7Voq4kNrZpFiqVGqnc37",
  "key31": "4vk3xntpkDhPo6hMq7bKWHd38SofjwvVNav7J47NmqQKK1qB9YhjRdV3QFzNKTiyaxm9AndboxnUxJmw8exr41g",
  "key32": "ksdCpFwMyUFB61SnqwmZjCwYgjRs8BrSeLA7pXt5BAtbeqrN7Ucvokf9WUD6Tr48geGg5yKjmoznuiA7dfoXqyh",
  "key33": "2fNNXzpcgHoqRV3SAvYWR2SertgCD7DoDngxWA8PyfAXccWBeGZNvC75tVNLEACaaRNyGb5TAgmXuN5c98vYbwJR",
  "key34": "5vutdiUsbCTc2iqp5MJF9irQT4L24w93DQFpCKURKADCaraB1kGFrS6Bdrs3cfVA2ZqbEZnHn9BBdF21Cg26GtUP",
  "key35": "4G4QGGdPkmoBPsYFRxhLyovnHQ8hBiFxq4Y1tuvGokMMuKBjPsFGaL6F7NFn6NrNYUwqV6Niiqpkmv1ehJJKcY3m",
  "key36": "5xfuAdbLTEWmYx6WcMdTHaSXA4g6zsfeXhtbm1hCdfAvSUF4ojTPEW5VP8s2RYdgBphdv3PuQ9rfGES5ywwbcGwh",
  "key37": "3EeHtvmUoyFovQj3zrRffFyLRYgExszRN9nmyxBHhjm4x7DhmhFtUJ8g5GbxGuabrrS4PrxaiiDVLc12YKd8ptjL",
  "key38": "4QSootF3xSUmGynagptzTzvN1DP8X5ev9CswsgTLMKdrHUQCD8W21C2dG1UZ26W6LexCAnCMJxnVvcd3S3puFDXs",
  "key39": "49JPK5kLKunDhd3FKM2GZ2fSt45d63JtFuvQs9KbfuWaa7ADyNUL8Lfnw6CaZZbQEUdDpZCSXQ4SdhNznLjwY7mQ",
  "key40": "3eDFmEKjrYj44zehZWhLoVA7TkKpSMAqA3bz2as6pLEkUfcSFrcRjvE8b1Ee7biMpPFCDtNPYcgQEVgykujFynZ9",
  "key41": "4FooEumxr7J2YcEhmBWLvQAByh72TFaGbdLwHmpwP3iFbiZ3b7BMpiPZqxWuAk114hQvotFaxSfwxCaQqEwdCNBM",
  "key42": "YtveuCxXWAavYz2jDGH8LatXd4Dpad5YW4mn2GbLCbVzpnt9ejwgSHAcNesqEkRVAKEDsSgq81WMRYCGF6CpEXf"
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
