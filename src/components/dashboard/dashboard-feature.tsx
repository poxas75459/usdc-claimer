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
    "25Fht73AWypMfgz3gSZAShWaZmechEEUa7EfzRVjeuQXSmHgDMEWUVqgzTLAfUKJvtkyvzZuYFrVrs3UDqugYGXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uaZHBmSVoxhMrdPfvpPq1e6NgvXaES3sgy8GwhEHFbPoGgFg9RXkuczXfnbetjjYkCSc9CpJ762tCfa7BxF7Puo",
  "key1": "2S93TrvttJjZnW7jcCYBV8EniPNpaNzRUjtbuwk3RGTaX7PtUSb3cfRnjEutm3bo7Q8SiRcnbv2hMEN8UCyBjb4v",
  "key2": "2EX55v3Z5fSsjHf27HCEXnyZztPMDDihzHCQH9kDWpGZaqXogyfZWBZCcPwvmwnjvaepPnRAEgRCMHD7XzoyYAuv",
  "key3": "2yRsGtxgKwcuGz8gvFhiUJHp4copQvfWujovc8dCfYxSX8GiFDfbG2ndLezE3dTef8EWJCTCJFduxUBxYW5XLs9r",
  "key4": "2KSDypxxBzYjtC7oJVM48rXLXVc9AJixbHvEkzpvhpURCFxaaNHr5ikZzDh2Mfr4KY2NuC2YRsDuHG2McHHMqpak",
  "key5": "QyqS14Lpwsd9wc55sBuzvRnhpbmyxxGGV4nKgqt2QGtwgSzZRmPwGEP2YvAEFoijZoFh279jGTLmSR3cLmEqTJo",
  "key6": "25kLbCcQFRhamboJdBoKx78Hxtopy2TXYSGoMnTgBWT6NogsXDmr9gmqNDavgvYjBBdHaG2TwtBXkxmwZF5bLXy4",
  "key7": "4hgD8DTt66pRrwKBsTR5mN5YdtQqnkhKuTpjbbPCPmF1vgpsoLD17WZgv7j2S1LVfdd7oep8HUyQBrymQU5vRot",
  "key8": "4cvSQotNjfHNpUA9K4GhNqKvpFrsKjMu5wR54z19wFhtQNdrbLtA44QZnjE5Hr8bvYpjhb7pMrPZiKe2Ftfpquxi",
  "key9": "2YxVAMMafxyeruFgQyM6ky8a5mFhYF895cdCrNnsPHpHDnnermTsxknww4qezooL1WimwyDHTCdjiHFWYsKW9X7p",
  "key10": "5GecqQTVptHwziASRXYTNysXnxhVSkn6KELgon4y6A4J8YyU7Cgj68Trw6VbRq3kYVoLAb6qEKxtw1Tr1qv71Yt2",
  "key11": "3p3FrU6fzGp8DTDYnLh8MPYebRoRwoh87vXWWdZP4j9YDTmeYBLeampTBe6p3cMZSjqqmUcwQTV5fs6EFFNSERZ4",
  "key12": "4FgrzGqE2EByGsyHJomyUrcNWaiVRwdXLqPumEpy8wizk64m4ufjw9UDxaZGtJqpLXpa2JzwCRJXDCRDmjAP8no6",
  "key13": "28R2HBZa1YBjY7RVSgw4rgCy3zK6JzAsewgrKpr9bTojcHrAmsh2mPemhih2z9V6FVwKssVnjSz3Mz3LtcWxHg2q",
  "key14": "4WTKaRTDCeSWPJTM97TpL1TWn7XryFMmVaNkdEicq96hL8Lz997xj3PYhjgRh3mKd8UBAHhmiyQh6oyKDb2VuY3s",
  "key15": "6T3kJVRWZLh4TBy4cmAYE5Aos2Tv84Y7FnhCYLzxsmhTZhaFrFGd7j3qSnSWtk3CEEjHJ8J2osd1tURZwPZkN8L",
  "key16": "51eZx37aEHnatYqEtVEK5n12wc71iNxBJu7Ycku5nJHCXiVthFBcMT8iZ1fraXxAXbn2E4Q7YKoLpqdN2N6nTCqK",
  "key17": "5672E7rFqfDPxCtwCRWowd5TGZAFM6fjUux38Jskn5D5pmV99g1XdJBvsU1odFSiGkWNVzyQKFqV82L1PWLuEFJF",
  "key18": "4TWPY3Xk29Xhoz7wSTRkUAPtqQe2EjJYmHckVcAMDHgUDvkxvSgKFs1LDo6sFPHLPL3gdcaHcvD7ZF6MM41tkXWK",
  "key19": "5Rzuc9XfkhN8zLFeCjjYoZN4mcEfnW4RSGSHCRBS15m4MXSgaUqzgchjfByNFyp6G5fgKp4agehs4kEqBHTyL1EN",
  "key20": "54N9fTDxnLEhy1UNdxmiwBPV58HeLCcEZtAzk3krvAawY4rnhNEwRnQnYo4ut1Z3etEbo2MzPSqJABDctQTcEX3Y",
  "key21": "4Lotj1TZdGEqwMZM9K5BYA269SqZToyyB3ryyA2K11RD7J34o6uvXXMxvw7ZQ4DMCkZFgtndrqSgy1DsAromtwmP",
  "key22": "2Qq8jHpoeurRmf9t4wKB75FqP9dfGz8U33JhhxdSVshoNeUDuw9VF3S23Wnyaj6GzepRS2n9QAf55rG2pSr8UcRt",
  "key23": "3ot7kgnQuVpVoGwNE2XvVGa26yd1kgRpbxkpQUQtMP8LJMQho8EjNg6zrs16g94PxjWU943pFNXCJTSofr3MCSN5",
  "key24": "28DRAaJKfBWYMEK1eKzSZGkPhjZqA31qY5Romswb5cus5Y1BzDxruiwzuZ8x5UYU15jt5ax9KPDtLh7b9vcQCrCi",
  "key25": "4KsyB5xh33fcW2F7CSotJ82Nj6pooZiU2nqPRwipYKa3MY2fTWBNYC9tCjzAbeJNDy2Fhb88KLFTgC2MocQSihu8",
  "key26": "4Mkrm4fHVH4ycLAqnqJTigQ7VKPgtHqFeyX4nYKMzBWErgoxAAGbi1RbvndSN9oJ6HP5tCQNw98WQJkvkgoxuBUi",
  "key27": "5JX8JqBEGr7bvgQPdoCivnpRQea3NhiLZTzFMJp7tsUva96tG3VNcysmhnCEyocv5EUzhkxQk3GUeNrdVqwhHGup"
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
