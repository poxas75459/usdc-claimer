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
    "3cvZEy47VvjBUr9qLvQjuSLHRWTRpe2WehcnqJwCSczE95oxCdRug9PM282kZNoNrGWy8C9oF5caYfN2cNNZQL5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wqVEUEbCWaFSo1GoVw8AcYeovi8CqCT9tHWmLFss91q59xqkkMgc9CYQ9fvVM3VnyuxtAAnWDh8MmUkHtfodMZY",
  "key1": "5PwJT9oqYZWkm7U78iKJTnqotxs1shuACewc1DLxsVNQDWv6GwJwV9Bk2Ke4vRXLGeh9M38sEeCXioANeS6ssyio",
  "key2": "5qgaVnD5PjeD7FF6DFQ8mqb8SaPtJY2EzpyEWB2qEEncfGaGzuDCH9BchADHRKCYwWftNfmv5G6KkbA1BuvuE1bM",
  "key3": "2YUX6G849XsBcZ3MyKrkcQ3DL4GTvvv3gM9m2XczjqezViKM49NQhck9fnRzdGBU6m3FF5HKExcciQz4B6XwiufH",
  "key4": "3jiCcNDKstxCMCpUa9N4TSD5fNpfHg3cWPvPbeiMYLByLbUunqTFXBRAWGFxCWENvcWGZUTpgaCiFJVubfNpFW8B",
  "key5": "Hjzr5NP4rQ8JaBQyf3q95Zid96UUwJouA9ieiwjWajTpYS5YVfamBtVEwvwyvH7aEbYyt9qwK7zbGnwPsscBNpN",
  "key6": "4JKEode1Kkr1GqUx4yRxzsEoe3qPK8jnT5v8bomjVDbnVhDhtAG3yUKZnJ7kDAK8NFYZYRqBr6jyUn6asQJQaGaG",
  "key7": "5TbGjq1YoBgb5tLC8ttv6sXyAX5Kvbo7Q65z8ywEnKz5eRdNgGJa3KYob6WZU1jXMiQXtLH1ybjojosrrLLcEkD1",
  "key8": "aWG5AFFLhitgzod4PiNMsP3cFANhjRd2FdttjR22erZcmSxN5Q6HvPux6VoPWHUm48BvFZQJZEF4Bpu9U3bnxLE",
  "key9": "58SPFQVbJa6R1AZZTGWCdRNtHQ7ZXfwD9R96GFgiKHsSwy6GSWqSyXhkiPaNQAXwk88MQbEwHPUmGc8PTj4kyVCk",
  "key10": "5km4s8Y24T4aYhr1BPVQ2tENGZRzjWFA487qAkygRpXmRi2QswwkdZzvJCaYvBQeoeZLG7RhM3tpApdaHucF1U7T",
  "key11": "QjAntrJchYQea3iauZXEtd8wJfLbcV5uR2y4JTJ4cpqoibdScA1exEYGDZeQmH7rJLuMEiYmR3cHuvvtao4Gyss",
  "key12": "2sb7t39s5Dz2UQTeB99TxYvAZAaF323ajzLAmyVoCHsuxywWvvaHZ8myT2Y7MsQs6wXV95xeSLj3Rhss961Ststx",
  "key13": "4LbU5SneBbprjTMdskaRfvw2PgBNt3DfSvUT5c2pKtKcdT5EhAG4F6hndXYqzFhUwktdQNA6qAduGFaTFuiuYzHN",
  "key14": "4XSzerVigzYLabP861amauTkciw7yBSE5iaD7pGYHFRkqHwLxTErqy7M8ttXyQKfvL6cyJEu68TvkEZtJcxJp9dD",
  "key15": "23MVACtFtPTQwf3LTFKQTZvph8QhfAdkdSbQ89pAfGV7TdFBhfqZd8UJjskCGPhAuNCR83JhF7phxxB2Mc9hWJB8",
  "key16": "5haAmmR2K5aRn6RaTYFGdTjPBYmDabFeLRBkCYJqsfYDDdgQjdL8y3DFHkFqLDMAXsCxnrPLsJJzuwtGTRpszp7E",
  "key17": "2qpZ6aaWX5JLi5s9X6BPat2EAyRQEn7E84QrRpTa1pujrrtq46FV3Wq79ZbumcczQNR1CRZaJ7Zu7CUJucYu87P9",
  "key18": "VTTp5EWosHaENpiHh2yVT6HWVyXLLuoKiKEX8FP8yhFSgsBtsVzQPDcMAZy7fhkt9NDygn3vZuntUceTGHasMFM",
  "key19": "5Yc6pGEZY8caH2tMLG7iv2Cic4Ke1QXNJuLchz3nbShBJpVJrYzNscyE2BfCxrkT8FpBFJKhWktBuWeeX6LTgASg",
  "key20": "m9w5h1bcoVMAwdb1xdJsUfBj55r87NDPLrJzS93d7NYT2Zsns1hGESTKe3rySRPPrecyWEtxuyaGeRJaPk2P3ct",
  "key21": "4A7gM3C56FTixeh1jRZ5rZNWmo88ugBphCnn7dkRyUzXBtYftcvxXnT4bZhzcfKUTAt9uxjocLGsJbTJwBronsaH",
  "key22": "HdimGQ3HB2EhLD5UADUK1HqhCZMEASfNxixdaHnH36emWTZY2dLkrtvzdR7xsWtmG7rS6xR3rQWkc7WGi3rW6US",
  "key23": "2tg1sZ8jSrzZKB2u8KSypdFjSXbW2P3ukpLk1tqizpXdZGk3NRwNztM9Wffza9bL35noASXTGx35gz3p6Fhg59ko",
  "key24": "4AJRwL2iDkcC35ZJf8XxxUMGBLfUcFmwo33KQRvMVuCWPkv3RBLV7QTJBqXJDC9jGbUbwsHvAaDhMzr7Lxahg1EF",
  "key25": "64J55aBsys5ZNaYZJ9aWfq9FZ5MXTSgGpJ8UVHLvgocQ5ZM5FAZPVAAKBV4eu198xKrqXi9m2CHedoTtXiHTDipf",
  "key26": "5KLcB15F4U18H8ZyfnK1a7JZWnxiJ47kvPeYqAe3Ji3t5xAuwJnzEWoKzTk8XkivAVU6i6eFAwctPBgB3djPG6MH",
  "key27": "JWB5o9M4zzSKtLtRPTUiZHuACtTYB2NJG4oS6KpYKoRHo8zbhX5uixxsn2i89pfkJBG3bVQtZt4vwYraDpzRkrP",
  "key28": "2a9wPuXHZwyt6yEADoY2TwjRfAEUYGF4Bb6A1kjwLjZwMHyK5TnMsQi7tYqAqSafpCeZT3eNEDarTYDr8sTp2YCV",
  "key29": "5hEaWbUZQDd5Dq1yA8fkgC6cnFZyscmNbuUFiFoYSXfGuJKywDAPKBHxbthh4hMEa96wN6FwQ6DvFvGuwZ9sVqoL",
  "key30": "2TZ2ymda33e4zB2Ab4gUZK8V2Sv4Q67urthxhG8Ang35VeGYW6KT8sEM3WEbBE4gB7r5rSVN36bhgG8RU2N9B9cg",
  "key31": "2pk16Y2uf9Aa4YehnDGKz4DvjwURQsoQXuFfVFmXTwksAvKMs16DxpsPxWEYgwqShSjGssGtizs916oefnyKgt3w"
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
