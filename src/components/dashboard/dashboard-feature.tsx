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
    "4K1EEhM1t9PTwuaXckMTB4TrqEJNuGApdATesMbPQVBib9MmMzcWjhfRojRzzrYPUoKRwoGUpWYSKoM9xpcSQS4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AGrHAsowSqUHNqcb7zi34MazzmJ3oKbQoXnV4WyWMJSMJtPYcoTx4CT2NkESbJZWPQRC8dkvjgqq5XdBBA3euT6",
  "key1": "2TJyhxPVABiLDNnPFSeRxGUgjGfTVkPQr54qYLWXcTbX3Epau52RPcUchU1xW7Dmx9aVn3iLJ1bs64dAC149LcBi",
  "key2": "4ZQ1ZH3yfsESCbzTgzbRkLAor7h38U6ZdaunFv439HLD3YzBfp98p9QYCjSkEXC48akN8B6gtcrLNELyD4evfTXJ",
  "key3": "4g8Rku5oHTySnpYELiXyKXSZPjyRUBHB6LtpNePLZMLyyPqTtgULpdJQVjXEwuaWBkmxVGJHbiUgDrMsHpgUyDLA",
  "key4": "4GVYuXRW5GGNUTYqwpxYvF2Ah4ukQUbB5xN1Z2WVr2apBx5bjVYzZyjspR9jCLr1soXp59S6ARdcKsc3dDpGB8fP",
  "key5": "2xHFvxgy21akkqPTZAo3GfJiHrGCLPPvue6jVzgN4bcHani1wxWdjC2EwdKTGpik77r7hyaL4P7bXMmL65DoeMjC",
  "key6": "63RpGC91hzew8k8yZ27Yh3prYhGyZ28NvXkoBQNyesaNMUczPAGHgBEzWvhkV3vpmV9jBJEfKJEydvJ8Nx4YJmsK",
  "key7": "49SfbgznceUCXCrMf2j9gTBKuFVwRZpPoz1h2Nn39Fghag6h8isF4rV39kGPTomcJXprZRBhGtGyahYGmGZWhxk3",
  "key8": "2NcgHzDxRw1ymRXcmQSd1AEse8mVLWVpmmzwwZsRJHLJrkou7xt2y4yuyFwRgoTjURxtBVhkyRA2kknePBiC3a3n",
  "key9": "exPVSz2Ukvz5Kn3xpwGKRyj38m6JFMhDH7d5qZ4bg8eGsFcuizvMyjUTxQxT78YFFtduZo291ETQvuPyzhcDfHG",
  "key10": "4M82JawdMxMrfabAAh6diwJ9F7LFPzfx8kz73YpGkf2WWHRqQpdGzm29s5y3uixQd3RncvAQ6xU8MpR8P55HXRwQ",
  "key11": "5qx9b5Ag9CdSezuK4vUJ7xsd2E43pYT3FRUG69Pjkat7QkXcdnDb3fzLQ94HYMx9VKDHD54oMQPr1XB8tz3hRGha",
  "key12": "5yCVzRH6shKaG4EmnXa4UyYSVDv2GyrnxuS7XwFwR1KXpjJAB24MUS5s35UKeAv67w9VyLZGJdUPoMvAaa3ajvW",
  "key13": "47hfmk4TRmL78Q7ux4Q96CdDYp2sfWnY9bDXA5fLMRofvVELbLroYhW9JPP7gQyKjUQHgKk9p8YAAGiPWoAHuvbB",
  "key14": "QymW1oNBG2xu914KQEpTKFWZpVtXN6hhTGbEDLiG2kiiG7btdxHhgPzT1WqmAX2exTpaNBh2v2AjHm1vAPxw5w8",
  "key15": "4JrMiEehmyYd1jEZKQR5qd2EUu4H6gQJSJcmcpatuvVnufQixDgBjcfcYKrtKQpXD73X6bwGiDwtJDFdNV7f2LVF",
  "key16": "2wbS8e7QkWfaGPK62K1Le9FutVfieeoySoSsN1nA1dcrzfVVMkvrYc9zq4Yem1SihVxK2ak3KPuUgMSdiKufRpTF",
  "key17": "2YUHARsE4ciU2PMpF5Zk7jpACnQmVMV3GwEKf5MqMbJXoY9XGWQmbkuk7yi9j45Y2oufojrSzDXdAM3sJ6YD9d5H",
  "key18": "35XjtGgJsp1VGPtW1Kr95vj7PXg63mphSmnCGST35C1TgP9sbnpsNExZTapdgT2E8SLqfA6GZ35XY9HdhFxcteHG",
  "key19": "3MP13cPNtgxqW1t9UsVarbJWQk8WGjnYhFVt97HK3VyASkiaxXKw5ubUt3onw9yvUcAfubnKyZgEMy9LN2x9WdYb",
  "key20": "3mjxMHLysdhniJz2hGnSDoMYEzsffWf8rmjoxJT6tcckFRZgucwG8jRo1ndWGPzQgAtKA27F3Y7BR494ieF98M1X",
  "key21": "2N2LN1djmjiXFyxc85Lvb4FWJMj9TRc1XbQ6y47GqaP48nYmTxUy5xAjei5KHaVhsRGPDEx3UyRuxdWaLutUSxwf",
  "key22": "YU9xqEeGEWkEEHSHyC2jPWEra3pQETZZqbj94183yxNu9rcBRYSFEcWcvJhHdRKEXuVY5JDyL5aGxbCw2PTuyGU",
  "key23": "h4SUhxMe2fNfB1dtqyEtBBmJqCpYL18jGdTe4GRYR6zHHecKGdHpqEFC18byHjkyv9paWtfdEcfqhLiesRWtZA1",
  "key24": "34zFkE8CgoFGcorNAy6TBqdrVgxDfMVcbz8d43jSWsqFB6QeCy6yYFd6Bn66JefaJTLtnTxomNXBem4ffqdkcbDQ",
  "key25": "2nUedR4SVX55bV5ehmXf3va3fJrvqmhjNQGbFZPhmeM4dsSCL7xBwHNuXdXDRsfLeU7q2EMt7pJiB4RXjgBZwbek",
  "key26": "3BDEXJiov5Bzzp4Fni6TFtYE4s2CLLEzNTwhHLKyUNzGS4xnw97Q8hXs6CnfgykpMfdYi8HnzbN42p7fPmyxWLWn",
  "key27": "4zvaRoGUfSkGgTUsPChsSHbQjzVGzFBKD1UWyQrxcXkEkiaFwqA2GrtMrh9hKYpdHcFSVVYXD6kBHik6dSSBLX6S",
  "key28": "3KBC6artvEVkp7zcKkyuphrWg9gpGyhNzdyPZhfL1MZvQGKLRXa3pHJp95Jrxz4vuchjfNy7anqS8xED2ru9tp2m",
  "key29": "5j6pgMppP8Ssit7UsWcU5whK7J7n6V1dHnw18YBX2SeHPqhR8HV9JYsrMHYjLLd4x2fk9nbWFbMXPnh4HYyerRpt",
  "key30": "52sTCB8zToXZZCJ82N4fA5a2dhqYX5AJ3BtumRDsdedywVNr5weY6qz6hB2pXX7dSU1Er4Xa7f9ZWDtrWpmvNJsV",
  "key31": "36yQQzxzRF3eu1pqi5cnv2iggmfogeEqcnMLD9aMU8M412aEXVdSZVFLq3ahLoNFbresaf63oyYCPuAHfFPbsAex",
  "key32": "4SQPVLLyiijZoG1Zkyrd7WqbhLcZRrHu5gdAqBvXLT3sob7w1L2Hik6sDZFsvWTT1UEcg4bWbVeJvRZ8a981QVkn",
  "key33": "1LN8gtGNMFnLqDvWGC7DndXVu5UeezNDGkyWEHQ7Du8yoxn1u7b6X5Brop3HuRentdPuw4mSQiNhAipzTzQVKjD",
  "key34": "4nmnM2KSdDtzX5RKFPdjyEMsfVuCTXThPH2xTV1wbHyorvDpe3aCXJa63339Txsry7mmiafETsEtqoKUUH7h3H1D",
  "key35": "ZJ5AD7uRM537vEK8CUPKB1YT4kgQPPreCFkk4ssf7jTnQbjVXpvFvYNTqCWG722FbmYrMop57SXAwmoVtnSAUnT"
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
