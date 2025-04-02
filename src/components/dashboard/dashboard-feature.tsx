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
    "3Wr5D8daFJ3WZKW3EUe7BNpNdfXY9JkwjfM4RFru3KSaTpxsyGkFgXbxmnUg1x1P81se9az1275G5xLkR2mZzhJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QJqu9V87WDzV5ho3hmNByhsSKnm9jcsz3r9ZsAxAAHinhaBtT1Ym22Ds4aLH1q5K5dFtPKJaHWG7dS3eGs1Bcuh",
  "key1": "3Gy93NFB2fBKCtHf8yR4BNBJmVepyANe3yj4L3QmMwgv3QBZjTh4tyNhdDtBB5X3RvFs7264AG6pzSa7azCusJEr",
  "key2": "3unWNLKb7u6HL7imSexXYkCGbJ1poUnxnrujmARhyv9JGrv9wXYGXA3zZkTJcdR4NPQiDSo6fr4SCYmnADC3CEvt",
  "key3": "2NeDxeb59ry29GF1YGUXafGBEizziRbfrT7b2utkhFmwnkZmCFEFeCQcJfGihYu2Dvwt8UFsjNB16sRKWLrcCgeq",
  "key4": "62QQjMdbam6artCj465FNr1taYb6zQutbK9TSYuyLjzw9DivLBFqwa1Dh5PKJxyUg21XPzPQmAsjXT6aus9wBZRn",
  "key5": "uERMJczKCXjrAALwZdGhRMz2QqbGBU6NGpxer1FSbYetExo9dSr4EjsN95HhGnWBaZkms97qqR3kq7YNWYHwPnE",
  "key6": "56SNBjc7iiLru8uAW47cyeEgyhGSTt1SAfWPwsT5U8LKpWB3EDka83nRQxBN66taVGgxuLJUt8sivg75aoTWtJDa",
  "key7": "21oCNsZXqPVJU3BzCBAprCiLSiWfTGhQuSv1VSmn3fcSGKh3kFhAa6qV1LTJTDyBuXfJ6URRxeEuuPGND3Zurzmh",
  "key8": "FUEwqxHzEJGzEM2tmT5areAk6s1evScQ41styaRKHzSNMD5HbtrnrxaGWGubZEfWEFcSLDVW8Y7f1fKUaxQXt1y",
  "key9": "3g5HZzqBDDxqvnk18GdmcCuwMN4ZuyXffEHopP2xXyW2V5R6xwvtT8ZQue5mmMHo9dub8T2MqQEJm2Y1S4KuEE6G",
  "key10": "54RdRMG7NDTHefo9K3RwA3UkZBdgGmRvsKQqxsKE7PCgC9JrnmFHEKLNiFUdyyLfQTQraWqcDKYozq7nfgMEUFop",
  "key11": "FFqroixRp9iXtekHAn54ZFC8nNSQBEoqRjzathuqmoeKHTnxn62scr1H68MY2FpubiWC57Z1ZWy2VUcrPDAUQV5",
  "key12": "5GumvjoTui7fN2Tp8VTEqcYx1KSqrc7DMs86qJ4Lqk7ej6XToWwqHHGq3gAUZUiQhegSGi5nv3K7o418wPMG2942",
  "key13": "kbDsALdbBwoeKzC3QnrCyETxghGXE39mKP7C6nKdFSgN39iq4kgLewq6zYKqZUS5ExSFStKH41vtcYu89BCAnSZ",
  "key14": "3fvNCVZnjKKcZjNx4CbhLc3hrJ74SYnYW44nikLPx6NbUwct5xewYrXB4isV8d1xbyhPrAEP3wF9jUHWWYMGBgrB",
  "key15": "yza1XxknbXQQHuk6FQfr8Vwgf6bkPvYVZS3tq5wNSZ1GBcTSzVsXvtctKVEbhPaBefWBL8PbCY5L1MzGV4GoYKH",
  "key16": "37XRbYugqwdUj7CnCYik5rufnVXERBfCJzqW18hpnYTcw2mPRzLcXok4A7dEDcLJh7vFbuHwPLXpYkGT5qsJBhoe",
  "key17": "5aFMzWSkxX2BisNVgddUamTcBdKomt3ZdTV96UNSTiRfcuvhFnLrtRcRzPVv6JTuQ3U7MbcfgQYyTU9jAzfT4y4D",
  "key18": "5aL6WbsuzUkEgMhyKKnsrJLE7fTXxaeb7QWUxGbVJNr64oncDVENud3fGwFiibtRhw59RZz2GzCVAmsmtCxC6aR6",
  "key19": "2KSHVQYJPqeStDsQ1bqxjvyd2r7s9owDrSrTzpzohVjDQykUFGNPECvm58ZM6MrdKyzHRc9fPh6enAfSAgzJRk7B",
  "key20": "2aHrfdKpmyUaSCqhA6MEuACMgSV2jv5ht38nqrSdZGZchHQxCxJAkmoUs5pfK3Td6xpi8Yhb5XYheCojCtfHr3Wa",
  "key21": "3wVxhL56mTY8M4RD2SShQ4k1222vG5LNVdxE9WjEV2g3eDw4pzscgntcNBUUqaBzt2FPgZvZsUftWMXZzrGvToyD",
  "key22": "2EX2UswAQz2qADRQyRvwfbyvw2D4GahekBzB7qMo5Fpru5EFpbX5anuS1gapnd53KHPKtgGJ1QV2EcbSCipV7a7H",
  "key23": "3ZBpHVwN1NCw6sC7Sw2h13fGwetqnRnpamwki3DkbswMrsxdStM3atpVd8b1rZ8KzRofzfKmiHhJGGzJTNLtCo1q",
  "key24": "4w8oeoNyhUN339kon8H1mV5rbDUPajhHfs6E17BhDGfHdxMD2FSUbK5xppFRki2yygRwZ2kq8ZQ76gN2FDCZmcqU",
  "key25": "5vAbvYswdey87xKpwTcpr2wAA1gCHeYwqmtTDKbEptpZHTY4nwwqdLKv993FDZUzQrU7oH2npnjsVPB8bWCFeHAs",
  "key26": "5aqeL66CEF7iYi2e22NxFRsCyf397CLC8zfcT2YXZYeU7yQvjDB4T9GmhhLWNfeSvKnej75yethqN9JfruqDj6Qr",
  "key27": "od4jZF5vXYsmJn2KThQ8hT7PG21TkZWg5qsSw5zPMrBxHDiJEvHwpANkmR9xRUaSXs6jhhHiDUQuDqEMnso8mZn",
  "key28": "2D795xtDiutwK9fTzgbkHEcNy88jSymdrZpH8JQknCxrnfusJhZSFZNu54Mfvo99kSaufcTbDQjvV3awHSQT8zKZ"
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
