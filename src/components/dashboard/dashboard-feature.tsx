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
    "7zDS3S3HwoDo7FGGnH3m64vBuuNiCYD5XwmRaNnUVazfNtAgcVubmFsTm5DRKY7JXhsz7MeqQg5ZMWRbEEyhD1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fhg5jWpTi9skzB9xiMrtkdneEfE51gxXEuHJW1PigazHKejW4d4v6D8VSHXuBTKe6jmcE3Ycgh9a4u46mgTTF9v",
  "key1": "3oQCzUbXxkTke22RdSpMeQWFGEEoxPQWkA9Zwcr1qzmJigDRKbeKMESRTm5pukpAcfXKDrHDbTe9DJqYEdP2vnoS",
  "key2": "5ae9E8FirQQEsJVXhsguTStxgiVDXvJAGPN6BxU1oFAMBNe2xfgbUQ8X3AQpYEuGEEJXfbBkVHEp4AYvvaamieig",
  "key3": "73HtcPBwfQAtJmjHHCe8S27GNTetCbuYqTPC7Squnc4o6x734ZcpFDVtck5h5ccLuAHZGohHKd5LSE9xB23abGo",
  "key4": "3GR777Xgq24ioKPujCAkL2w3tro91udQvKgb8QHjRoRAMwVCF2VmEHY1YnyLNFmwYoSDLnofoRUKji7HVWedRHPz",
  "key5": "5CeYBMihigN2ecrn3zmDZZqozyCGfZj8pVteYf3w7jGqsUeY3mD8eTGMwKoiAeSYiAzXD1rAMhumitAyResprhu2",
  "key6": "5LJttJPoDnsGrnyN3cSkcnmAUG24UBspkiYyByB37vK9dmYAwygH1BZZ4octwSuJdns6f1D315EQMetJBpvoLQHp",
  "key7": "3KbdasmY8BUNhqNt9by3ccJyXQ88pyJKN3jef9VjtiFyKwUXRg9uDEPZT13JPqSGAeCJk2XC1mFTCNSCgFMCmbCy",
  "key8": "59zWGrUP1KwUqq3tdMGgB26Vj7Ta2bQBLSfd74pZcjVXTVupyWUcPt27KSeE1397V9sTcGpSAMA9Chr8vkbyxaks",
  "key9": "4g4DUaDdPeJ88x3UKyQG4HRpw3s7vxpDkUgnjSxUF95yBKwAQpDKnQqeREw3bzj3aiaXArcq8aAYSDwaCjnkRFhW",
  "key10": "WwpfqkWedsLvkAptADsv9QNomnFFygP3qsAtUr13u6avMqpuEGfs4J4FgqPqmQidFPVKy13RuNAbvRFufj3NPcn",
  "key11": "65iqaeXgj64jVVvTM18mKsjhGQdA3ZXMSEJS6tJmoEE4JgDDuJNQrDND53uQjJH2ttXMqUnD1C5uYbwk4vE19wA2",
  "key12": "mBAoDiju93wPK6ek2GmMk5khPqKs7t6VMf2N2m6J7z9LoM5NmJ1hd1xfAP7svwW2NrLYVReJUZMmsySxBptwGAe",
  "key13": "2bA411LtEBBLn1CvGrWAyfWFeWY3h45fzsho2MdBs64e8qZb3vjZN6Qpb6XgmnbtSoXaCzyZ7ean6oenMNW17w4T",
  "key14": "2z2yMoe6UtG7NP2nX4w4pxmBu27B8g9tACasScoeQXTVQnT94mzYN5bXjUXLLfQtVHFCEXt96gPtM1B74trCotYe",
  "key15": "5A7uTQN5a9WkfkwbWw89WJyAycnBvhiEaZktcumR2T9nsDTnSY7iNLHAQUE5qqC5Zo3gVTBrsC6H7XhbHj9tLxre",
  "key16": "dP3h6Ji2Q6QedttB8m8JghUHtPy3eXoEESUa41mYUmfAUC648Cvmv56tQ5Jzz9mUWNnxSneutnGwnPuwvWNeXcc",
  "key17": "4qi2CjD1RdhQ5wcfiAahDuVv446Rc4kihDPxESADJRDB3Zf5rzF5ehguj8VB1A4ru4SxFSjoPTP8rQrQm5yqrwCK",
  "key18": "2qhUkvsJodEa7fiAU8LBNmyzXsNhhdFjazDePvYaugcTEj5yGXxVRUHpfww8nwWxdznyc2m7feekYJMxgppsoT9A",
  "key19": "qeTkG5JftpuqGTWJAvhKhp1ZmkXmhQQYkwK5GPcvEbvUdiYJpuh9xvi5Wzx6BeHfTGxh274b6sTz544tedXZ7df",
  "key20": "5vBddMpottsZ4cVtTpYEwwM5JnhRYcqH59ASwgtc12i1t62SdDhxZ8EkDYzy3MHzY4ehByUFHgpKijCuRhcQiRpT",
  "key21": "6UdnQSVtG4iKWkozJ3vsQgiDtZFkim4smBiR5tQq9VTAHYwH2BEpZ9wCctRwJFEZjpQH6wq9G297YfKmu6zh7Tv",
  "key22": "sZG3boULBjtrMM5fKcx8AxaFnktubFzGbtna1YGmGmLe3RqLxHnswQEF4Jg1LRKa3NPdHAaVXyxjFEyCkTrC4Jk",
  "key23": "59FxJuP3wyzHBgyB51DgxTbRDhy9c4mCjizAHwhc49xP189Pi6hPXAcnYNQb4KBQbkxitPih4mpZUXFDTui5vaFf",
  "key24": "4pKoSgqRbYHGj2GYS1e1KyUeUy175bdCErNz5qDSeak8UXTYc8WbcAAPcxuxc51Au9rZUKj1JaRXHNcVtEHmHBSg",
  "key25": "AAfMBt42DcTFiQqbnPWhLcdr3Wq6KqwvveFV1cQ477MzLjAQdP7zjReWqEytQEkKxxdaEZ219WK61vY3EbLhnAT",
  "key26": "2vPtDuB8XSYV1SvhLja9UbGhd2rQEtPcUfRaU6LuikCyDeySXMh1mK9TqudDuieH88zbkMYLJboW33qRmiKszYAh",
  "key27": "3yuFj1AmPR3hDm16sofKLN94VBWNMwvhw3MUbrhM7sfsFagV6HFKmYioQHsFmJu3LLH5tHUnhTNjm4hBaQrJPvLV",
  "key28": "5NouGwxrfRg2DBLvYLHqWFGupBuzxzpk2MA7sT3RqXZmc5xA4wg9dTBRYHkxc9TrP1tYKfQfNT9ewntjxPnaSjPu"
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
