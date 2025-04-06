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
    "5rC1X5afzbf418fe7Z9ZAB98CYQzacJ7SCSsTWiCbsFQswJBHPWE4pp9g3ryzKt7dcTAMc4j3RR3Xbusg6b6U4pv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5agknzoXMq4C7qsdUcoTHQ4wXtgTSKMshLzMFkooLxFEsYbU6FBx1f7JjhegJ19EKSNX2wFFiqFK39tbAiHFcZjJ",
  "key1": "2kE7yxNq1Lw5vBUrJtpcTDbhkYTamLPUJYRCPQRpad1KZtyrZ1DLmPdqK2kV6Pdp1KrtuMjGQ5qjPa2zLGZe1QKk",
  "key2": "3WgagN4MEZYGS4hN44ngAL6ii8nAdHb95da5K5XN6YTEpLPf9qRVtWHvkaDF3xfMqNSa4Zf1fcSHQRkDss1VJG7W",
  "key3": "52CSgi5gibuwvNHehovydYcgVnCyRdRjhSE8SuquPvKH2XDhU5feJMJ8UmuDqmuPoaQeQxaiACgmMoa8SyHLy9gq",
  "key4": "4EmFNBCBapy3T8JV5YE8NdLqBry13hxJBLk6zpraogognCcaqKpGa4pRo6FBDAF14QuknabKgQyk5yh11gcEK5Bi",
  "key5": "McHopuBJ8GiP8dsWV8gbBsyuv7PoTTcuyU18sZHVQyjgYGbS5zK6swtvngCBMYf2zX9byufRGPGdSMZQ1szdwjt",
  "key6": "5kKAS5S4kzKWD2nRd1fyff49jqxGhLQAcTSh3gh5ikF2zBkb7QQJQ5yp3P7wScMDc8151MpUbcUHZYDBfhjnVpsX",
  "key7": "26KVLbyDPdGZmvc39wNNwSvutB2QsBsQGksz8afujowN6QeHDSJqkbQ755eLQCp6xwFMDUmNkbRj7Tv9yrTD8L2C",
  "key8": "4hk9VvZXdKB27XCRKo2qqYY4UufVJLc95GYvS281C2c3aZtviHmMJqGurWKChrg1PxVn3Dehqr2eL15vxP3Z13Tn",
  "key9": "4nAHdsvKoU14gCAsWQwpnbpGxm2d8yYPW7sUyfoexNuQ6B6naAXe6ak3ZjmWba8GRxAY8fBQvKE5hAcEMJjte7GG",
  "key10": "3qvcsr9p8Mn5DvRVLhde8rEDpwCP9goS5mfGt64QDxaKs6jpCqE5SiXgDYdD6WZrip7Ein8meBmMddxL4jeT5UK2",
  "key11": "3XJQVbTfYtDg17tWJpQcUQKNLot3uppz7Pwg42ts6yF53LteeH5b5fHF9F9m26JWiotrH6mH7a3MADxBtGpXMvJF",
  "key12": "N8tcry4b4VMJSp1oAKG924egXGLwzxfN46q4jDF9RXEC3fYKi8dX8R4MFW6bFF1BgnVDwtp2GcMTJ81ps6c3UEA",
  "key13": "4fYUjn4K7QfrDodfhR9wa68oLuvCjQgXPXPx8VLn36DqB5oEyWGcBBtZ3PDAwKrKx8uzSEhn7QqwkUDHf2EJh4jw",
  "key14": "3TQXjbxytNoCgCsf53nWKPZPfQbN3TZsnxYjoxT5kh43dFRoA6UiVyLe16BTgGx43fBeadVsrmLZnmgJKLjBvm4k",
  "key15": "3xdxozMyStLTbQWvup6zmDmGCmxbpktwfi5uMKGeFBBvUyKMMB2pJkwNQUxCaxPmdipAuskMAH4i5EdThqMqPGr9",
  "key16": "4ajuUmbp1T3nuxV7oMtseRWtjNzX5BaJHtFQu5ti76ZMcaR4ASjvHam4n1PNJKGCAXkhRYYPrtYf3w7aFTmKGvyx",
  "key17": "67UYgKgcuBVWQDURSG5NZMS86aPQP7cqcr13B2xMzjWKuSxw6uXvBKurY2JDDKA9JJB4w7P1HABsmWhkNyasZAp5",
  "key18": "4rTpqz9TapWJiNL7DmW6MvLmk6rrMXGkaZRLbhHSLsQRS38HZdb37zQ9bDy6mjzQjy3hacW7fxfUg1ehMsudYnCR",
  "key19": "2wvMBo1rCe7QUXfTKyyyzss8FPmxaTgceJPdeEm3SquQTQzEbpAD4ZWqwkfv1129A5WZCJvStDwXM8XspuWz5Hao",
  "key20": "4qa5M1cR7379ka6JgV66GrsFsFpcQP7nHagKuQnm9RQAb4WHDHuad8WoPprfq78cySEkN6dqYLpWLAoghxA5JB8U",
  "key21": "bMRq14mTcPuv62hj7aMLRT1qSh6XdqDjRYJDoG3qq3GBn4i7poAwvBATushhmHniJjti1iwfUKXKztRMEpF4XDz",
  "key22": "KtGfJY3TEv6wmAmZj5XXP9SwSD2WiQhqKaRmZrtnLMeKDNCp2ubmoWmgPR8nPaJuoixDU1fa6hziq2PVFcQcKhm",
  "key23": "5115yDhhbJfhWLkitaSjUUjbfLRkk52c9edV9uHonUn8WNAUmQQKAPK2PmEgUTNsrxmZM44ogtsVEzf5Cuojikvc",
  "key24": "6VWH9Vreexc9mwum47A2uh9NouPMM79o4dyonfTUT4RQW3b7Xugv58g2tk5jQfNbseQzJyCUtbm9W81pBDPQv7B",
  "key25": "GeutCz7PXiwGnUsq1VqkzgT5mELd2FmcE7BmMEdXQsNPCUj68UoqZAqiADdeVWjMiudhTyd6uNPHnQf3QzBBfxX",
  "key26": "5vTkYvufTBuxDZ9prz6U5bPnRYVPjZ4XsiDwRHxY7tbypdZYkKA8i8SMVvwRKMSKP88CaEJQ7ucEryM4VUvWgmPN",
  "key27": "G8LzE8JgMkRBaerDwy5otkqvyLNdahGzFhoj6nGmTZbdLeC43B5niViXfqeVozGoTUG9xQJGnCeRgYd8KnUKmpL",
  "key28": "51gbFiqxwGoPmYjQqQm3hcd3nefTwS6QwcBEX7RscPWnZKUy1pfbK1XxkmpvDcTe4rCLPEiP1zpRoNRfXAkRtF8W",
  "key29": "vvFi1rC2LJinqNWLM4iGKvPDmxHrbV48zXKX6DdTEVB7CTwgHWoAWK5p5hPnRDSmHdZArwDWD4M1tvGq8dNRw4y",
  "key30": "2PEcBtJTsGrFJbCtsmZ3xLCLCkqSK7Jssz1BzW8kauFExDfJpdrWDdciwGUqeHvNjawk3e5TZNwKYVU2VUhDFV9w",
  "key31": "5qpZH7xdx6MBXCcE3WRP4i2WdS4SJmbPg8nuKzjX7ZnR3KewdNu6vHFFjBp1W3x6Vv894jtcLgJbYrtaNP9vtZL1",
  "key32": "5HTB7YU1N18QxpJxtS8VwN9frFoNq5EBsCDiejFPURDE9i7TsAkerAVp6BzpUvGbLcuhvNR3rk6ZpKfiZEKKwd8D",
  "key33": "Pxs69SyWjgzbZBsGB94FJEgpGHDWE7Anu1GvYgAJKNgRWdXJqHdTqsBqsBKFoM5sTC3gAmx4jxG2ZxmPa3QBVni",
  "key34": "61o9LPrTpvdKtg7jqKawoKBZtp4gf1B6oVoseUjCDBVxRnJh2hm5vLiNxcbYwzEoJpf75XWjhKiFBxSa2WCdTdEh",
  "key35": "35Njef5oHKmyR2oGM1zufiUYDso4hT9FoPXBkuK9R9m3T4RAHGfzcQ4uAMZSSPs8vMoWQGV7q14NZySEEvyfyaTn",
  "key36": "3KJgs5eS3QhXYUDGSCkoyX5p9YuqrePqoVVJRRxyKUJMpy1a3S3zYjstiaTYFy1ArwxzshLJqkcwV5BKSgGsgdc2",
  "key37": "58SqQKQffpVZzSBst69eu7njNqRFsmjCNMXYwP6RES4YxBrDuL8NEKovgvYyt2s1CR1kWnEPX8UgTE3piwE6r4xw",
  "key38": "3NUzrL75SDDSRLFryKXuJhG4TDMRVUGJF3TK2iXzoQ7ERgr7857R4ZyrzhuoxUeV9V8ek4RhMAZ1ZUS4UiXgHU2i",
  "key39": "fM6EkW9JjiQyThDuVZnKYx3Hbmm22KRCTyrbcTjXi9oqu25qrJYWxdBzqQPrWoEXysruNAJ3AN9uwjYMTB3ba5m",
  "key40": "2fHn5fDvc6U6qQJzFW4pHbmkThyMg46EigNsdBAHzdpRx6WTsyDffktbaWAPvc4BzrWW5r1tJsVybXqxWeXsSSXL",
  "key41": "37aYCLVYVYW9k1GXCNAV1MV6V4C5u3yHkMYYJ9j4HEGAEbuyfFyT8ZkAoekQgDwmkWnWpCXs466pvw5xxjFHmL6",
  "key42": "2YiynbzWLzDJdk7WQ8FSypo9UVNxDJ8eKV12eP7T5TDkwyRRpoZusN6Hta3Ndk3SQ4zDRM2JWUBG7EQ9vHK2EyYq",
  "key43": "2cZMTffBx2wYtW7dBYvw5gr91sC3oVJpramE8GdUb7sA1Mr6KJr3Qc9Nqaq5FXBwa27vgwdf436ShHUcYyb2ogs9",
  "key44": "4XHxHLw3Ncaq6Be2RQLwDs5KnHpa48LKBvycDZXTjEfM7thoDwE17FjuA7yHFjetK1Z3wm46G1S7CRxXPAC9RqZz",
  "key45": "2yq1ZMrw1P6Y1DmpQt9eeKp14Ga5R57nsSi9PR9auRHvcum59eZt8VKmEpMNor8TWFZWa4ZM6rWEvS9PfYaEJJLj",
  "key46": "4qQSqaSXqoeMGZGNmbXrvCZK3QCAyvcvgGvgrgvxqR8XVaPYvmYfjKyDR9RahaZK548UYg1HpfEprnbBvb4kh2h",
  "key47": "4ApcPcogqzCYn4sUmsMu84Mdef9pi87srajbKYCLTogDtZU9rz6wdAYGD9WjJPhjeyAVVmthDBKPeJvdxuCz6GrL",
  "key48": "5pgXx5WXMYdn3P7voveaDkd6PFufVrZbg7bo5WJjoo58R4gPGqxDVQZZED4cdKTW1Z26qG8F8QrzWAQd1co47mXX"
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
