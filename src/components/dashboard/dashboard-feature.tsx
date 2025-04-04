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
    "53txYA3v28JDraCmJC8EpBw8rYVf7Zh5U3qWSH4Kgh2zVwGyHmqvCN13DBmueYEahd6xmL1qqthj6WSHvpYmCqSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UsTx5F8QeTWgeUtPH3m2MKTYqiGQjsshTsB9fLA8t8JqBcdn7hwrve4UsWFktqLjxHAQiAq8qdLB5KqjxziVCcr",
  "key1": "5HctmtphZmn5pG64aZdc3V9TvJvhzpDzQSxR1nvz2abq4Tokr7PUFaSgiwqNUjRe5rsiS8H9oNq8M4SwhBUQ8bVz",
  "key2": "3g6xKXqUBqxxh7k9uA6JawiMQ2A2FPhS9oYZAr6K9z7s2Edrd6HJUw8QZeqikfzFKP8aQjfZeniPt2FffhouyxPy",
  "key3": "5LHCSAKuTZgEWQxNu7jXCadTcdY8hcP7fh1sCd91VYHNExW2qoDMmun6qKaAZ5xtcGmy9zgbhYm3ZBCFnWwSHW69",
  "key4": "4tJrjY8fnBVqi8Y4rR7mpgha5ik41773xFokHm93tmMZJrgSsgURMww5RTPqBwXXgjBwMbjfDqWxGt5ie4WxcAz8",
  "key5": "2GPjf77ZHK9xr5a5cmdWeEgg5o1cry8fQS5W7HX562Bh4QTnkgjJ2rMYBxnbR7RoafyrBJCGE8YVLbJtKrKx94Tu",
  "key6": "pvQXXUqSrBwF92Luukpw6QW7rTFriFiQx8VDwNCr1JDUTYjHMCgBMsC765gZ9mzd12Jb8FfT8zw4tpBYuXqgdmV",
  "key7": "2iDFr55sSm3TeiqmC61PwDU9mjbNrQrCdcCaSAQHdCLiwTuA3mqPpDbJDP1FDhvEA27stAkuD5vUj9W7xXdR9f4F",
  "key8": "26GPTVH197QrvsQ7naL4v77GAX9jaF1PXdMQKyzudbd7co52pa5AzjeQUUikFq9zzwCUeqGwat4VhMvjPrA3F917",
  "key9": "3EPqeMTGFuW68M8yD1gGB38b5JwL92zFo6bEj5D87qzs89VEwHwAWZa2rnVDj8Yo34wpJ2yTxdLaUebvf2MNZ5MC",
  "key10": "4R1NFE8VwYXJwZAs5wUic4dFKaLZBVgMhTBD8fSFekPpcXHaXnzSqtbgyVU648yJ6zgr6sjBS6c3NPZqxL6DTX2y",
  "key11": "5T4BCQ8BV7yTai2iha6kaWG3vAcFWHqdstMUJyPorPgCNqpZY1y4yqrohQVWVfZQbrGNJqAvzTnT834mHHEuongU",
  "key12": "34vPVXjS8NcuV5b5hrNVTbqhCwh3PwVc2VDVwT97QGLQJnT5y6MThQuaoeVd3kvJkEDd6r2XvkaBhBmfucDM9Sjw",
  "key13": "3kMT2bor8WZTLtFpYTD8SxrWYexz97thPY44inA3kR8WKjkWeTpFkMZ1qLNwjFWCXm5cD2yosVHEJSg6uYD1e2M2",
  "key14": "4ph5YFzrBXCA6WaCMGGL9nxhpR7P9fTFbJMcYqVKCeRerKE9MXvaea8PXFCU7bAxrq5m82jKSdbxCqivJgZSZGNx",
  "key15": "QgvcnrsSNvgrubCKbQTg6jWCngCMqaorB1LPqyGfJ6x86kHWBW9tzAbERUb2cQfZQuFCmTNnyAnmg8s4iWA43jG",
  "key16": "3iESLGvYyJRdhK3Sa2WVnUHJXmi5gjF5yDfvCvXh2z2pXPcJgaLrXRxfAHBSh4Q6s9bigaMhTooWKGv3AmYfN47C",
  "key17": "2pn1Rpb39UTHC4g9VDYqpJYhJLD1ZbUeBQcLzYxV6AUEioNjhDvCr44nLrsX3AiZhqW9KF2ApC5juPBpxunUaLXj",
  "key18": "3yefvhAz5wALbgTJTux79TmEwRjsjHyTDUtB6JMB9skmhb36p9rPAyUVuxgVvZK9sYivaNZXwfLC2aYEUV2kDoLp",
  "key19": "3gYwW2HRmP5nfEvPgND6YGRKyY6uawYPpbxaenJdbUULFP5FBQ2KczKUf439CPKAfASNPvexdMYW5gRn7sFh6jBS",
  "key20": "4Ko7LkLEriTLjM6Uy4SUmYVW1Zb6uuhSuXrC3ZanAdeHM2BjTx7KkPCoNmDExtv7QBmTMYEuKY8sKseuprkbBZWn",
  "key21": "6BSrPBe9zuC2Ct94rjenyrybQp1cUsznFQiQUpRRE5H7dSWvGryZFj92M7iBQJNp7bTYP2o8oMtn8Wz1sh9Y99S",
  "key22": "VFNtdV1dQK4BXybkiQJPeMJpJK5qwh5swUYMZQSK9Go75EVUr6aQKyyKTdu6Bwbtdp8tBZZqxSj78S6y4Er3C2R",
  "key23": "5jQKWHDuskLNaruoBDRkG4VoPUJDRCqbZMTHeQb7eYkoFsswM1JpFaUHDXDhtrYG6QoejRgNHmDoHCy9p74fgkZu",
  "key24": "3LM18Arjw6rrH7W5JsMJheSb7gbGvGZKDHm2NhcnSmBGURqNfs97kouuKUADNLax8KZS79PMgEaLNmbFWEtaeQKP",
  "key25": "5dSjHWpCh5cJA6QPfyQwibgu1q9dLQNeCzy648yDWfN6WM8BhCh2WUMRSbQBtX3AbKiRp12FGZtzBn2x9gUopda6",
  "key26": "4svRaFbSetVRgR2dsKojJXoTQ8qr1H2BeruN7dDo64LqEKhdB5YwTrpGut5Jixu4D2nUSD2EjWXeDSAKhUaVR8Ej",
  "key27": "23fLRR7JL1sTHCdSoKhAAeXUDayVyvnsdP3cgGocQpFcJc4sFXm27dfxf7Q2E1dPLEohdv6gqqkwMrKQRJ6SFtde",
  "key28": "4c2gu9RuJrtJ7oW3Hh3aKtzZ8HXds25uGHvjjpS8wdCPam76QcNqfVYBwtTZKozqGk78f9yBmLHuuDzWWhFia2wX",
  "key29": "2mqRFK1haRVL7g7jv6gDgFqSaxLD6Bd6u2VecuzGDtjor4vgrHeUBdh3QbGifV15iT2eKagDMuLa5RceP9dUoWoh",
  "key30": "4mcqWsHcxnjFAHAovNKtc6TLFPXSw5cDkwfixACgwfGKrvgePpZq7sSg87s5L7d8CL8uVaPr6LinBqzwkA3WNJY7",
  "key31": "4HyJi1faNNryU4PdeqeY33GTsmmNWJE5FbJmTivo7G4msuZNjrryjBuTZZYY2UyZgKd76uBCAJLsZ1EDiZGc5bii"
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
