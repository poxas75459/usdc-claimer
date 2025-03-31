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
    "4M5LzYVfMjYSji9TKJQryMBPRfN5dSThWWCcWYVi18jbhXQ5vPk88UKgWn3sjgspxC4svNCqYhFDMyto97kbN1Wt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39giKvUP4zUndjDqjfRmesMiQQviUmTEBRtuaV4jJVJYCTWv2ykbiaz81jvTDSZSEGaDq7ByZksR4kKTF9wWzTzs",
  "key1": "5CxLeMS4NVSjiZ8pJEw8tUcqkwxdJghbxzXYaTiLpCyG4W35zA6CtN3R2RYSYBm6rKFaXtdheLFnvkY1qLfibr7s",
  "key2": "gXkrbJ3M9nsTFaCP8ntopwRJLahJfjTJ69UtcbPfFQZ2PJcb43GK2SiJBv6jFHhhtgJyTfhgtNQsWv1amms92yx",
  "key3": "3pZ1USiNEFQWyyRi8ijV7rHHFBbsDLTGkp72ZmnDoPwZRAzcZH6AT7NAE1iXPgYRptXrhYgB3igjYfs7Tucep5uy",
  "key4": "3ZC9wNg3Gp6YJWcWfgTUqZSnzenDsry9tmDPtSFczCvW7iLTMa6vrGhEFWVhRa5m8KDrfq3ff128oXcX7jztsvvU",
  "key5": "2vsc7qum35cRHrwJrV33ZtwbYnQR5ohetzQLW2X8J6UVKeF13kTBm8Rgx7bmXfbSQkE1tfMYNsj7nFqDE7qLbYsW",
  "key6": "34RFzBGpJArAfypdgmH7JGXdQ6ibBRmMXumCaMT2hEJENyRVppCZ7c2Xes4W8GR8RqTbRQySyYanRELxyFCLmrsL",
  "key7": "4dQwdPupR3bXJXcqoEjv429e7GdoB1eu8k6vnmSgwaT2j33bLpvd3CkrQ5SHNSUrSxWLzSjm1xmUp9FPp3DqhjME",
  "key8": "5h2WgQ3sVwSNuQ9Jp98G4waUUf6dSt6tZMbnAnjB9qBMoemk5azVjD8oufSp7Y9sqG2gFoj4WM127zcceoPwvWY",
  "key9": "2UAbqnw3PVbfsb2ah98uj5bSadAdb7zwrSZc5xXHFz3C1obNJfkBe24bAhX877y4ZmVErYqXU4QkF2HuNQLfHXQk",
  "key10": "3Wy1ZuaQYaitsZVVVKYnH3z2QHUsZEbqNwCJc4gA3iycqhCerHNSRfDBg7ZKL3Dor1Ldze81oV4ixuTnC3g3WZTc",
  "key11": "5wqtMBmtGjEypw545uWheVeAGXaGgUBw7qsqP1mDj99qrGUjwRZ414EnV1HJUJDXn2J3yEW9whzd7je1oCc12dKo",
  "key12": "2qhp9Q9xTAXWwY68nLjJbABmBRRDNDbGpVfmJmxT31A5j4z19owyAHY5HL6wJfyyWJcZWQPYZqpMVr7BhmBpMnXD",
  "key13": "3MU3krUWdaSCWF1iLTcNGWbJpvBrftusZgncpVK4mLeRBXghPYubsSmiW6oqU9c9HyLTYNoUbKDKB5MCX52GQzNw",
  "key14": "5NGWB3VjmYEcpAvKExRZ7671rWKQTM5jm2hGmHLJ2fuXb5GXX2CyHnt2EPhJZEsVzNdSKb31uu18hcf25stk8hXN",
  "key15": "2gQQd9ed3Dta7MZ13BTk2HNK9i44P8N9X4zToyQZaH5VnjqvY6tF8gbG3Ysv87Vr76eGs4pNbbYpQ87mzoBX6iUB",
  "key16": "Fk1h32zTYzSMv1XojNHfHyimJraLs4HooxtVrr7K5taLmrEFnB2576dMp7JZKEVFptYMe3nFsxqSrT9m1SKj1xq",
  "key17": "8FGCD6xR7TwsojY8TD5tqSm7RH2H8hcMXuuFgZQjSCer5YUF9PNgDg8u8bcNxGYtcHXNUsjShcpcx4s2dnPQTEH",
  "key18": "5giXZ4PrHkT4ypCDCiMqLiFQwCpEpD6zapREC23G7no7TsyNscmAfYcKW2Vm9VPJcJKbVHQWDjtpj1s1xxmjq5B1",
  "key19": "5trHjYZ3K766z23W3rrUMNncER65mStN4xAG9Drjtf9smnquFRA6Ec154iZwbjJvspyBMp3ne1cmTwaof3E9K61c",
  "key20": "3kR9bmKn1QxRxmmRX2LeqmCFWZVA5YpUb1PDRF6Tef2YRdk1BF7aCvK3eFzq34a4wBzKtNy8tqheq2Wq5G5MTwJM",
  "key21": "2v3jAdaRmUMHZCDYWjd7LgdzMWYkSUSRnx9STJmrytC5zpwvNeWrTtTdkLPSdhMtvHfhQRHipK551bQxJz6Bd4qA",
  "key22": "2bmYuTcVFQhTrnphMa6iBxgmgRaQEtjW4wPW8UerYMPKA7pFUPmdXXRWtHDDiZJs7Tf1nKtxBAu7tdHiV43DD75i",
  "key23": "3Y5qDdeJRdeEMptq2w7XpWsn1geapgJ17dsXJf9PgJ6a4PfWiA1k7LKEYKCdcqkbUk6N9ih6zBS3ygs1UqfnY8y6",
  "key24": "4CsB6itDnmpKicvwLgFNvavSUcoi59ShJoe7Xx3RsMhzM6KMUztQVjeNtjAbN47VjZtUYVmBZb32PABjmDgrq36k",
  "key25": "4YPFa5cgZUHNCikYQFYB9NhpR5ayxSZk9azcXuzmDPcg3hYmtg2euJsDi7LZSgRvZ8ufDmRbL7gcKfk6Vcdx7prx",
  "key26": "zg6Sxa1oFmTsbDfKTZSFJdVfQWqjC5Wq3V39QNP7T2MN3zScwvsfcev8wcxCoW5niiTh96t7EJHsRbVXsqsZ1ew",
  "key27": "2mT1XrJpMAYhQve64jEfnWLjprUBvPumjBUYUJKAY7B51MmDTXfEJzXCKgWbd1KpMLaRzMHDZ6zdJUCu5ttxjThu",
  "key28": "66goq7a5Z2d64u5bgY1SNffWNwnktnZSGgXEoQjVkPxFmYuxxXqECbpzeB96n2TEfJivDcB4SqsRm4xNkHy4n97j",
  "key29": "5kxZC5WoLRX9hy39QWjc1Qw5r9hUuM9BqDXzomwmwsZmn1b1JmsJXwaGEKH7QYe6G1GB71ZYkkG9PvqhkVaLuJvw",
  "key30": "4xvYdwoX7VHoShnJZr6EgPc6nWTk82FVE3W4tt7vPVRn3br3hphHCxqaBVnVRWdG4Mvhhvd27mSApJPEzaX1szaj",
  "key31": "44p4V8vhKisGLHBn2qMe29QQhDssUntWDryeAooYnhT3Zj1k5cB5AA32zhwYt9eCjRSPQ3zAJkDhAT864BmFpTnF",
  "key32": "5WtyCzgDoRaVtn6ZSyynvdZ6ZKY4ZPXEHzXqvWdzRdAjEWdunWHgCSiCJGUVBkcozk4pi8x4Mm2FyM2cgVsapLFo",
  "key33": "3YePUm2D1vYcnK2FNdVanT7rmWS7rDZtxAh7uNHx3KxWYJfvgxuAbhgb9oaePywzF9Tiapor861yZKaJ7NGx15Q",
  "key34": "w87Nt9aKVMc5DSJeChUZkm755woLgx97DfZKp4VKJUEs58EadYmmG24FGxLy9DHhJYAoJ5jpSB9GjDkLzLUcmNz",
  "key35": "KwfopD6JeJNQ99Qe6ZYhCtYeKAfaeqYoEUriiD9G9P63QjvVgr5ppLAW5w7v8DNFw3ogjNECUQpeEE5CrLtLH9d",
  "key36": "4PQWuoJfvmKaotY1QT8JqksRyrZHyLAZdcfnx8PMVtGWwVxaRoLMq8erS2d3g2JnP3zLyTEcBaBbaaX9YyCyAHD8",
  "key37": "3gKo6iFwUTLMJj67DkE8RciFhQpCTPuResjTvDhjKswYkJXa7DHQLRyNyFpRH1raPAyuyZeVX3hKAZ7oopi24GeN",
  "key38": "4Fjb9te6P7qtg6wHs8dSR8Udhxo5wYFcveNfVVFq1SjqT12E6X9YDC7mfu8dAx6DB9xT4QoUdwy8PRQm7d9MBpaX",
  "key39": "PUnDrUL4TjKgEsyUXAurPQ9YdNSewHWDxwgNgHzGZBSWYhqsZY4yvUJPtJYCUPr25euxmNSjvjAzzSyBPnmthZc",
  "key40": "PZXJzo3wgsSaHiFs9wWc4RBJs7BPSYdVvZWuz4x12P2U5ip6i17qfM7m9tT2mDFBZkARdX61ftcCkY4XjZ7PKeQ",
  "key41": "52vZ23LnPWwLwVGNYkxxMhKdhqP11gsNc4cvMrYVdCWCZsAiVwYapK4EYLM5SdfjpHWoby9q5qyWH7KRYp4yPCEi",
  "key42": "PPPh3eDutFhosnEmPC11v4EAonbMN23oaWYPd53DhftFPHw23zkxc74GtHGUtzA6nChLAEnzANXpoepbk2JRy3w",
  "key43": "5ti8Uu3bvJ7asU1jTSdDqQ58VfNjF52sv8ifXM7qMsFeYWn8TyN5kEMQGBpmgxJJyXL1MCANv1ZefzuESvos4hoM",
  "key44": "31GBMN5mdXF6jMEXDhnbvFK1pxyo1jeWmymunmxHESufpKBtZhMcgDpSDuu5EVHNZpWSZJbnVTPt57doXa9PwL5o",
  "key45": "56FkcST4Hph6Vmx1K4GQVdfPukQiKYFp7GLRXV26ngezQomr51qYPWYU3ZHdwXBowVVJ1iQSQBjAR9rwADV9B3Hr"
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
