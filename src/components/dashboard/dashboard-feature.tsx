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
    "5CD87bgbtNooogRY8Yghxprma6BtxwRerxmTRYnwYDMzGNr9bkTUXdaFzbHvAr4kZHqttm3B2RzynhV8f72kC5th"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fk1Fav2Eqn2nMh3xTFtc8vLzRHrNdygNzJmFHdPBeNi96CXWEG6FUW66oxNgJxuPwBTWPLm1J8JyofFcGQRqhyU",
  "key1": "62KZS7AEcxuddZ6msWcSZG2PfN48a3iMVinyJW147X6sT81RS9A2DL1nkEBtG4RCYzWBbjpkyamaA2kKQpLnresy",
  "key2": "Afk9CLLb2DmKfBqdwtMoWZ6iTNuenj5TpkdEWGNFNTBNnBkZobMq3gwDmdS76bFaTeNHLumKFyRAuHkPbKrzJAe",
  "key3": "5fwFdLrdU3zdLTAVGrGar1fetr3aSQJrpd2xpukQsvDxNh2SzGgmnobahgKamA2pFFQJxAQRGGFNLWuQTvGENVPN",
  "key4": "2ukQztDQPbGa8FR2Ac2yDinZUUkMvsTsDRkmmMRAnHoRfekYXzUkpQHwVgCVp8qsgqxDnNSugHFAm9WudB8Y6mnt",
  "key5": "5Fzen7sTHAoHq3XBw6ZAfufnbWRk5JQCswkR9Vsc1ZoqhbWqQmXwZVwuJLnAokfcYZcCQmoougrLRt8EL6TBAnSD",
  "key6": "CUu3QNGa9uffw66W51oED1pQqM1mL5MZrzp5Uhhc7vKheNUZUf46BVTHRjD3WSwUYhZR5DWdw1CU7HyLihiedZw",
  "key7": "4ZT5unhtmYibfXm6gm6aHffYEi9u5V6F6EUog7jgJdguV4gFhK8x6rvYdLbR8uuJwZSZwjoi8iLFMavhhy5zgfhT",
  "key8": "4kz8LGQ11JiRRU8jE9XWEaPerjPxpo93jDYkKuigxF91iBWyz6ZgQCgTLtueDE8Sh32ctATYj6B7fkKoNUFjiqT2",
  "key9": "5zzvKn4j566kKkVbhhjXBw7J268CKgiqotnEmwXgALFneNASh7qYPyBg8LNmJaryf5hzv43RV4dFK1uJcfbyvssv",
  "key10": "5ewxivbeuP3sB9myjBpjRjPZJHohWkCVYJH8uZURAkodE13Vxnv3K4pKXNCUJeCBKG9w2Jz5XuGDuhrwMe9QCFEK",
  "key11": "5GMi4ceYEDD7CMpbELYjTC7CS36dFMYdYeggmpMitZ2TEQPBbENrc6qt2yrZvXq16BhLXapncaUwhPHnUJaVTXE6",
  "key12": "31wjdYCGU9JkGpxdT3XUNqNWtRPffXeHindeLtp5HKyfyLgsocqJSFRVdAmz2h544bPmJarja5U3Ajki2JVixN3",
  "key13": "33rmQhNy33MozNQo3tDwoZxqvP5obQaDouJZz48rsqbP4xCrjbBiwAmwz7FLSeiNhfkFbq3TMFdGWamH2t8zyEsC",
  "key14": "4o1DnNFRM4gTmQGuugHojHF8mBcGTedSKS85kiCzARoV61y5om7PxJ7AF4Tm6D9DamTzuAKtmSYQ68phJD3xD7pk",
  "key15": "2AuLsXTHVA8SPF1vbo4qKJEzTNvJahxJm92DTotrMpgq63bCDT9xQ1anwdm8enDDK6uFw94oGB9QMqL4QNGyhoVH",
  "key16": "3jvXv4d4GRei9UTdj5o6JGwc7uZ2uFuRXtqffnLNA1esznL7pM7kPYfBRSon3B8BzfjenA8YGaxs4aPR6shMeFBh",
  "key17": "2X7okoFWHkUjrmbMsuXJpN8A2UN1jk79LECy41Kc5vthDRn4u2fKT8tmsMP79WVMn7wetJv2UF3k5BrfuJrAZBpp",
  "key18": "1L2A4kEsz5MGfTkVYggW3abjsb8E7xs9FPppXeGntb2e7U94qAh8z3AgJeLd2g1HavD2Gi4MYKw1HY4j1rh6QcK",
  "key19": "3LY9hojf254w28PjAXQ2s8soU2VcR2EQChr39GU1FCFZURdxFDNBP91Ef8tCtEQaAxyMeP8oX7hXxjpfotgCnBB7",
  "key20": "5uoPZojErzFcdwCVXgW6PFZN8SAWbB9Wg2tsLfsTEvU8pF7x53yKeo5kbGEWogx5q4nyVJQXjuJ7MJ5wH1WF9wwL",
  "key21": "4jh9U5dt4SfLQU71dXwdCCgpvn8XHhiURMVofXEok3ePLe9e4nQw931QusXBwC92wtJsDeo3q3ckmKjPNwp8ErRa",
  "key22": "pw3NbLuETVH4rf4no5SyqcdzR1d2MRcR9SuGoJvMFBupVwxwXtgJCAZpKLmKryyKYZvTAhCQj9dkTuuuu2F7P1n",
  "key23": "5tBLNd3NJgWEMBno9RUo4ebBeEUU8aHrjqNfGEv3RZ9LmpoP7u7MHMn1jjBiadaSKpaQZDA5UwVk7K7wEZJJuXkR",
  "key24": "HiHPtNqoeL7kdcra9baYjJkGM5ftcDdATPdDFqQgsqDT6mwxGsa5meDNe9BR92QCrisiJLe7BEop7z6TBsAqYHh",
  "key25": "QocSFJRGrEnSMD4QbHyCbEf2snkcxNt1iTqqAz5unyoGL7pSZoC3RCyDfUXHbHQA1o9DDNcdgWaCpEmep4eaont",
  "key26": "4NxbGN6YWT18JckGYDwfyx3Lkbbt7zManisx6BVkETb2VBTvhcjxTmNXHGugv4r84xCEuU4yYLsiQLjPcF4ooMJ2",
  "key27": "2cXTuBQi3HdH25WEMYnFoPyna6EBMBoBtwp1RYrjtxRS8zsi3Bdkh4BmHKqJS5yg9E8JrEpJExfbCTvY7ZyKdMYe",
  "key28": "2LxR6SNEdxwVAhfVqyoTiYBhXBX7nzvTzp8BHcXpPi25WFJ1Rm4AvAjrG6qi1RchoyAL1G8RBsEvXPhBAgmoxqTx",
  "key29": "2EqGq8SnUG6CQGQvMCnEX3JmCt8czzxrMzvbCECjKDiQAEP6xuKeeJPJBWxWFrsJKD7pxzZUfde3HPRxPvXdstrj",
  "key30": "4EuDThqAKTNk37p4NsqzpEPKdcVYBs77WdknLZbknQXHCk8jhtj3g6nksiGoSCV3DHEinL5J9m8nNTfSwBHvbBmi",
  "key31": "az8D2HsKcWWWtNscvShgUFhScuEFAAnSGA2nfQfjw8eLbBUyKriVY1mZ7vC2ftKFkwPszp7K19NQ91UoXD11Tq2",
  "key32": "2khMKrWgRKkg2kpe7THynDVW8eHQsgs15uUMEwfb1GPaF9mKuQdg6yUJgYfeP56VGT5EcNVEevbqTygJRqFnHChv",
  "key33": "UPg6fLuUWJrw8aWhR6fncbjDHm1nQLA2ipLqxdmt3LmBRmQc6tbsYhBmujC96qVgExNGxk5eKBpMtuXM4rMcCMA",
  "key34": "2WiXiLpAYY2bwW78hiTU4RUBnDvwREWftqLipJkvA8BKQVWx9N4ttDD5RqdddssQZswZC4KE5SqckJz2yCNmRuem",
  "key35": "4TJtXMX5sv4n5gVkxrp7cK5UtCro6u9q2JpSRVYG9hHkPTtaTKASFtmZpytoLNkYTxwEkWzGeYZdmWMjFamB19t2",
  "key36": "D5PGbsukGa9ytWqAMiSsBagu4niH8fsedRwF6B9s1jZhvVrW4tfKvYTwrCuEd9FiaqMF9bRwAjW1TiaVTpkfhQ6",
  "key37": "5NvPdKc2nkXuLWJ2ojYnPxSWqgD78eHKEZNJCh6tKBuaCFY1mbLEstZ1GTgfdpq4A4dnf6LzDrDD5L62RmMWvChw",
  "key38": "MXrw77zijNRVe8CFSH21GLPTY5dnzMPKYm1QQcT2pSYockmq8RAFHVMJdjuoNdo1D1gvTMw1nr8jwXtdBveMwng",
  "key39": "2CF6H3QPXG3UpEWzK1Z6Yh7waHW59KrDdTCMyKMS6P35QBqBCxM7US6ojQpDexwQKyRgAmARQk2ffZ2qUwNqKjj9",
  "key40": "5Kjtj8UK5czvFsmZ1nhKjXKvEgYwrcFoeJLuFf2xEnkRRATnNXCxuuYZQYJrmSLT3yABtGRL9RJDdWkrJBLZTJMj",
  "key41": "41R2Mid9oNb2huhkboo1KGbszc6unE29vLC8Korb2mbnJ2RzDAPgr36G9ZNxrP6yaA3C8vSrkegaD54uagf7Y62Y",
  "key42": "5N3N9kmxeGSiyEeohsEZmZHVYsTtwLVCebSu3mYWMtKAVzn87xaPNM8EdQxfi52y8mcriRtpL6RnTbetPVYz1tFA",
  "key43": "gpLc4NK17fe6nEZLBe59wMUy2S1Yi5LQh8PkAEk78pGrCFqgAnyEP17EPmje3VgYqcvmr9GHaNhLcoTZaqMRc3Y",
  "key44": "5zq9jmZqgzGCVm7MFdLe96kfTQqEoHie5Bvb68r4qxRS8wUWZvxstxksxVPYgDF14oTR5MmPaUWQvXdWRcg2teF9",
  "key45": "2x5cdXq2Tsq9iEuQxNfEokp7rnKuDhQwCY7RQmw41SzZ2hczYE3GDiAMUt66MZPU66Jn7yrMjfc9xn3XiDbNR3Ga",
  "key46": "3dBtFjhwwsLBV5N5zr1m9zkAosF2wqfLgAYxRidQTNVnzAobm9in46eAkUcNfaqkkecU1s68Uqitneemx2ENb9zn",
  "key47": "RNp1rAgxojASdBG5hgz5cuvyRacY3zsFyd6sHG1PSUjmydYNgSNUiK5jhuGQu3hCTwn7sX6SL6BQtN7kJCVAHtR",
  "key48": "4jeueXREQ1Hq51sWECkMwStEqqBXdiu4Jx9SotoG8d7TuvyQv3ZY51VdxKcSwHFFr9kcxjjwLskAWM1Tj4Le98b1",
  "key49": "2UzZSBNMBW4Rs4ry919t6DcnJJh1cgpBu7T9xKhCpsQdsYsrRHCTT55TSxHuNV3f4QgAfRo5n5sKqp4r79GboHSf"
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
