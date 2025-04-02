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
    "5GTPadqCN16aasoNDSZ3Bd7BsgDYDvN5yMNZNWUZfnycULEZYY87A6FU9frpj4bdGjzZ7VkvU2xWxJjHUpeSeURp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57HdepN1ekhCzPYrQKsATN51CtuEoSVPicAjYWeuF5z3jK6jg8KYFP3imaAVT9bc4R3LP3SqfovGNsUkaPhWeAFo",
  "key1": "33KXS2UJkVwPSJXXdSbTfsfpZthMXQGjJ3avfFxki6huj3StkHyjumvfpwaJ9MnDNbxXu55X1gCFEAx3WRPdvq5J",
  "key2": "67NjpsXvRe5GiRZz7Xswmnp2osxzFuunWc5VYQb5nG78sKfJEspEARAfdp2BZbRqbMbUQbPk2bWjANg2stEvhwqd",
  "key3": "3udg9E5ecCzzjktpKf9rH8TpfpYkfMqVmxrjoTWyei4ATxDKW4awnTojmbWCgaVG9mgKhtVkHJG3kBc8RQ8kMXoP",
  "key4": "46tr3RqU9PvVe521SG1ACYWujQbi3pFs4P8NypkBMChNHPAnbfNWcTVSLJCe8LPdi45vkKwoXx9oD2anpYeS1B56",
  "key5": "5APynvzuwoWoq5UA6hpMS1mkFUyKUxBXTC7VBojNx6xDSp6gWv1bKyQFmcWyfrdbA7vLzFLAqqonqtazdD5qTiVp",
  "key6": "2YGKuophJpvC3DPVgojUTiKTP2sWXVUU4y6jCVFcWnXdLg59uudCyZeT54B5xQ4wWMDsyMog5WNzmvwPPkcZKXP5",
  "key7": "4DRp5LJG3ACT2KT1Ubg9g6nAVKHL6QWBSeD7wmWsdTZfNxqfZZP55bbUkktgWe7BYW6t7y9xMeviRPDBU5W8KjqH",
  "key8": "4w5LCVQkqZGZdp77KT1SKmTdfUEiMVa61bEWgnrbRTA5YDmpgrvvoW9f1XKpiPDPfzJyLg65BFpYgNAbs2q2TctY",
  "key9": "5oh5ddpGTXHtVqv3PoErXdczGVT8r8AEczG4yXYUBfVwXuMuMSGJBzNnFtPfgGQqXSGu4TbZpXujH67ysF7rf7pS",
  "key10": "4ZUtycXwYEJt1XWGgMQuApbC7hbuivzQz2AGeRXTYzmn9thdPSwc4xeSGEkMM9moqPLCmXzkn15WnEe2TBhUpzFe",
  "key11": "TD3hiuipKPi8Ey5Ddu45jY4f7cFyGN8QTvviWStenYmsGpLRXfpeqnqp9gG4vtvATSXkvMUu8by3jbQcQV8kbuk",
  "key12": "5f1E7fMza3NGsZRB4DTxBRsdoM9aQtbH2yr977q7y8dANKUfHNGzbfL79WEcJpLzU9e2ZdVhMqQzeEurvtJC5rF7",
  "key13": "AbDeyaDyJnGw4YHoZUwmJaHdUhjHN1JxWKjvZAegvWEHHxDiaEyJAXMZUY3BwASkQskwDodwoQwy9umYTwYd6eU",
  "key14": "3b9uhhbSHaVpAtzqFLJ7qCAH4tubWxk3hNHkHxRfixMQ7fAJeyZsEUStsixPQeyoocyqN8rJo6ohLtQMR37m2FfG",
  "key15": "2u4ken491exejGjeG6DFZhQXzyoLh4w1yCw3FButW7vqyyV3rrhME9vCMi7dY8BV21mieLSgBa9hviDe62UFAQJh",
  "key16": "3yiVsTniqWqjTLq6BhNvvvQMxFQ6gz62FJNWQzdFenBe4Qj1DFKRN9kTFhbz1CPSNhqwbjNggF9ZY4YC1pJojhgX",
  "key17": "5PHNG9VWSSsDpueabEMrf9iBrbEWyyik2oiaSghHGmXt7H5rWuc47vYrMB53x4dQaE2fBKe8scCVbcaCf1UR8it",
  "key18": "47t2xTcwAxjPmuKTFht6ZtRCGbHiUnpyybua6ArXxD3sCiptWt32dQHLLBVNJ9N635d1PYAbmEJtg78PbPKVC3Ca",
  "key19": "3UhmnyZ42ggA7EgLbvEAhvqWe4V51jk6mGazCf9eTgchNr2ADF7TNo15CJ6j9qNAhVLUWVNXGCTvt6mzEMxarBTb",
  "key20": "3o2ea1ZR6nTmitwap2nBUWRJrp1peUHd7tbk2QbBpiK9suZCFjKWxH2tPYipUuVoDJyheHPHoNCnE8rU9kczViUS",
  "key21": "66febpsETG6LSnY5shbnGrqNkDRDRW94LtGpNCpH2M2ckCZj6SNf12NJhnZ87QkeGpShjGt9UhPp6cHMhWSxXErC",
  "key22": "A2sULxwq7zwhYVGkzc4scfN4ws5RUgiUXyUWh8CfG26YjouzsVb1X3ro3YhQtUiD4jXRM2pC1EUWmwKJoD8hjVA",
  "key23": "4fAPNp8aSjvqRQrNTyu4naDbLJ2xJ6U7Pig1dH3Yt1XKw45nh1odrnWewd7UVsxe6wqwfDnof8shLJgMmcbapCAM",
  "key24": "2uWRG3YVuznTF2jiEzUFiz6do7VHamZraXxSoV3KCqHmvDEjmkN4q4Rx5q9G2AjQdy77icgzWkARBamrBF4GYyDT"
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
