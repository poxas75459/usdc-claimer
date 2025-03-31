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
    "5jG522rK2ivHvtLrPAsqtZekG9mgBWpXrCesoAo4R7jR66t9pwvQmVSzogiZD9YckAyCfWyNnbJkzqdwbBVzz4RC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tKq8UpYs7J4764zXSkCKTaJ5issNET9UTQHSEy7yQsNkJvFtczVnVf9UgM9qb3GdEP8kHPAqKb2Bk5JT7bNmub4",
  "key1": "d7MdKUXK2tELphHimCPxFt29JWV6U5afuYcjRSe5GLbRYMSgGMEE4zEppetZscYHqjavQJbEniEVuWcFjnSUBZv",
  "key2": "ia5rek7kPDzFE1mm2qUWHM7tjPNKUD9qG2vavn5AigjaJsqE82PPKpyBJvQMUJDzUUMW9MzkPUK5uVj9U5EosJH",
  "key3": "DARUSY6Ctet4qo23KTcYSbNuSRRsGBSEboUpDYfJ8yQPW9GQ3Qu3qN7qRzY45CweyupJNxy2cnxVSrwStShnFJh",
  "key4": "3evqDu4oNMSZM712itQzrBdNhWt4C9LoMDNxe1CiTpct2spshemtedEmQotMghX3gJVsPo3r5htwA1AeANxQR7BW",
  "key5": "3cReVfy1arha8rDGf1PFaHKjAP72ATV6EzXdcJgr6Efh7ZDRavYLm9ZQnMaGqQG9mYRrsxPXEEyuCvhJ9xe7xbMn",
  "key6": "e8HwAHzk2SawmEBFcihxzRMfGEAYBUDhWNpw4MN22nK79UMFFeyUuCeNRiDHjbyMSKqqxZ2vNZL1tpQQdpYG4FB",
  "key7": "5eRcDdLoEmfLzabwafrFHXzkceHV6rMwnNZfrgtDD7XRuwVq1yc4pn5dmCVKoKGkBCeF6ds7r2PXVCCnrWzko6Fz",
  "key8": "3tLg9FGbbSRxW2et57gr8g6CUbHxtUjWMQxZZ5kESavQ7eJ5WA4xVU8suX8w2Tt4NfDveZS7GbFmGZeZUhgSGd4x",
  "key9": "3br5TnmuwV4eSEaUmctrgckxdhh2aaEsJjmVbA2SQ546iSPFybEauTTqicTnHZgcLW95yqnk2sGJzY2RcBtqaXV9",
  "key10": "5JMEnWnCacGbkCe4xzH366arJx3MVyDu9iqNqFaAZA29CgU5piDzWZgtQp8t8ZGhWb8vjRKryRB4GL43PiYLbYon",
  "key11": "5DeKKRzjPXVUXUyw8gB7n68hm6JBR4xzPhwGR5dfeRudUtEG3Frg49Xetz8DF99Kjb2avcE9XfM7g8ScLo3EqQiV",
  "key12": "29vJb7e1oR4ZHgAWfhxtozMffMj7dgx1HNGVPcqf6b5HJ4vBedKGuHiEu8SPuByTsLFTt9FPRFupAQJ4Sdd7aczr",
  "key13": "2uZuDeBMutVNfju4QrYnoMjwAg43A61Jbz4LPKABB6MhobA2QmqwJdR81u37SuzKA1oN2JYDEbnnRzo3rZQ63yVn",
  "key14": "3F9D4XVexbYiKZcJ39Xyaf7LJR7ymAxpA3WeSdZbw569vWvyiRczhW1xzLZUKpPdy4yg3Di7ooVZacMG4TAow2FX",
  "key15": "tgwu8p1VcNMzqyudo9zk1SkVNgSCG5bq5B2VAEo7Schd9iyYp79qNgWzEFSjq8fsAnreVHeSFqTngP8AUzeikFb",
  "key16": "5vWw7bDahneBZXtaS9L8k9nnYp9HoEKY7Gv6aGMqYPEMMdHr2ofjokSrHWiACNjaif7TuwYQot5K6cajxmtc1hTS",
  "key17": "5ec6VdNTsgCxDhVKEQfWcgoiSBmPrG3J8uCs49o7yzqQUGNWEGnswKGwNk1ZCzhAvfTH31wyWi6s6eYfL7V6jfCw",
  "key18": "5Atd4ASbymTHzyMVsE8fXnkcdF5zRB9LnNMo573kgBXxzq2YJYSApdWoieqPmcoRiPtaUbQ4yCGQssUHNnZ8qBak",
  "key19": "5iyZ9UjwmXLpfZ6x6gsS4E5Dg1iu9RHw5CceYd26wY6J9VsAqP4LSiv564X7U2zwXmrrZUwsEtrtZnVxW88RLGHJ",
  "key20": "2UPxqtnuBLsoBZaeJKGo8f3EYFEkvWGsXRvUm9n9oS65dHY8ivZLLStzVSVgbH2VoHUv8iZbSFiS8gKhkZ8c4mmg",
  "key21": "345dQbPPmMnYrp98pTyJgeeNLHA6RRGqojLWbW4wQrHnyc98EYzpgcc2iNRLowkZK9G7B4PKk6S1WyDf2HAMBEDj",
  "key22": "2EpxvMx48CNvTcNc2obwKACTxkWgpB9cuhQgM8BqhMptPbXhmUfqGP6GTHHZxTCdCK17BFJHSvapuVrPUwhjyMML",
  "key23": "4i41gLdeo863yzsRp66niopeYxMHyCrUVf44ERgNSJ2NhjcQtqy5arLY9JpYySiySy3Lb2SDhFjpCkTJLGs3ZKBR",
  "key24": "5WK62eHhWujgy45EHRvDbd54drWnSqY5wig3oFNYGxExcSscd3ynEnX8rX6RVkpMJiSNaCvssVoAjZFsaL66CZQt",
  "key25": "5vH8PERKtD4Xo8oJCptUm87U1fk7Q7ionfSyez5EeRUUqu3wAMrohDFUKe4SeoQm4Asn6kJeSQt7TaEVuLB9tiZf",
  "key26": "4EGZ6NwqWLg8H2L7povDZnyBT4zLmTCHPVMdHyq1pctqvviWh2EN9bdvXmXRiMdzvTLr7a7ZtKnh6pSmJjZT4mXo",
  "key27": "5mVapqaUVdhmQrKJRZfbWEeunVNwtxiDaE5MRTtpLdmKpHeposE2vWbYTYW2BttCT2ds2cjtg1m4FxmhtkQAUpNd",
  "key28": "4ZBxNtNLJvKxMr2YbgW3SqgXiH959hvcj3uo2rAe1MMguBiQv17KicJaASZJ1nZ3yQ8Sq4xx7SWK564vR6PqPCam",
  "key29": "3nttp1r94Ve6SFwuADrbVEVvpBsiqUuHu9fTt58KX9eg9x3LGTe5EEKAwsCLC4QRjfcjCHLMz3Kvzbw3BGTyeNfN",
  "key30": "2aKcDG2ghtufvoj7B9rgh7kCZbW1AkxHGULAg5YCquXF5mjdg54JofJSbXe3L4Ryg2fFJMAUj15tcehfzkjcQQA1",
  "key31": "2GtVNj85oeXYBz3xyMJN8QkVwMwYpGxZ5NopCuvyENbSCuWj4s9roTSXfgVFgtGqBPaD7uzvxYEuRp4sDeCmxxhD",
  "key32": "5J91aF6HHMGbgVFujWPYM7zpsN8nhe8fqEm7VKnvnRf7X4TZj6WjsJ3yd3WAoKLUEb8FgBwBsTCHYna4FwsAUfNJ",
  "key33": "3GVTgb5e4oEzt7fVAUH1gqBGXh5vE6Bbms4vydR96r74bQA6BfVkiQapA9BmdmuF1FyF1dty8aJizUcFFXSEkBrL",
  "key34": "bR8ngo7Z8vWn4rGLMS3mvhPMpCPN1HYiVmrQ3N7SPptmWwYpY4N8VHgTjqJ3y5LtmnA6NSD3sc8KeVRtvN1AVv3",
  "key35": "28VnsEhKGv5VFYjAaTfiD8L349ViHEq141bA3i7mwg1Qrd6Avo1HJHcz6Cd1PoHRvK7yHwQjADKEhqNxM4MtsQf2",
  "key36": "5up9bJSCTKfXXKqZZeqhRYDDudBuzZWYdkNABBt5w9qjoMKCm1iCckKJ1xmWJLyCnRjBLsUbjLBx9CnFq99BTaqC",
  "key37": "5HzvWgpQhsMp6XE4kHf1YH6a1Vqcjoi7m3n1bqmV3rQVZ3CtXohUoJTkRe7fz79CPGwbWCntrfk793FjQ7y5WWdS",
  "key38": "2uR7CPZ3bg5zvfbyUqP7NXd6pdf1KaBK9HPGEByzT3vsiV9obAKzW5DQNnT7aeqP9ZMqAn4yikMwnnpWDqLvhauw",
  "key39": "5ZCi6NXoRPSQBuxdiZt2P123mhAd2apFurEy9Bwfp6Y4o1MhLBwEiSvEgrMdTfJcYTqvo1mwMWWSwvc7oqDWcGmF",
  "key40": "64kjTrFunQL7fGwXsq6DiZcYsGtuwi8CdLhYKa49qkjxY9TBsUMouMFBFTh7zM9fGaTD2US4TcerFYUDaxqzNraw",
  "key41": "49dRNWZRV7joQ7YK5ihBzEiHpMS71uk3ZNEggmmiH795F8MQGpaxK3ZkeSVBY8HLBWHkF9DLr3PrYUJgzTf7pF8T",
  "key42": "5kWynKpeY5HCGJCDqCBD3bikBnFRCHX6NDxNQjPNnBsBCegEyyPS8ZcUSts65gjmicMnBZ5TddeUhvY5b3hB7wZU",
  "key43": "2cUdrrRMuSbtxQK5PtZbVzH9QK56nY6j66kxsdS4wqshQTd7gxuE9QjqLELNvJorULTbKCmKKZAGubCeM5VV46V8"
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
