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
    "5LQ3QBqheHyK9g5XjcqvBi65vX66d1CRbYhngoqrsjSu6Z5RXxHE4XCJcU2Ug3Qnjb6GJWbkSAMdYdnEdLyUGm28"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CC1aV162wqnhrZSSaXVpn5bHGqPcQpXy4iCDyA2ts3VgXyR8L2Wh2WqT85UTBBFs1L1pDdv8SMNRLezjGiNEdkJ",
  "key1": "3MegsNzX2or5UjhsNoZ8p8RsXxRFEUG9PSewCqHb9PxPUQm3nSAuZUSkTmszy7o5oEbNSk4WTP274MZpBRw6ENtJ",
  "key2": "5PK4MPEZkWGdAyNdAAjqD6kiupRuJd1iALoHRnFTzHw4qzzqRsGiBDnykEQrCHAh4xqvR7JSdD1Q1hV1TqfSjMu7",
  "key3": "wykDhMDuP1h8mizU1V6aZzbbCDMBxsHvofnEBvUkFoD3oEGVCqt4SasDSzGEZ53uCq8fpUbSGg7jea63oCDFXN9",
  "key4": "5bAYb563A7Mb4ZQBJhF9gTDz84Jwco4TG5zsoaYJRmPjVKPEZmJoZWge1fUn7kve4s2JWQiNGD6mmTUP4MmtdYW5",
  "key5": "it3mVtHpjV6wTQg8rrUT6p1j5PZZyyNhCw9RYpPcnpTy95TdGgfTQwaTE593sqwBz72PTHgPKmp8hQK8ezGpp5k",
  "key6": "3nBhbrkmCWtUrs8RrV1bRCnaTDoudQzKmYUTSD19YKbaEiDZaMBn1oL9gTDJdm1h537E2bmiXdxHS2VEkoYAKfFH",
  "key7": "2fCR7LpZXjoJNR6HRSmEoMVvkkxhUXEWfw5QvfiX5MGmuoSkg4kjkC5BYySD1vJwU8JPQnc32vm1vmgB4MFcuxpP",
  "key8": "AH6vk6dHs8uS3TaRdtbQyMHAUyA5SMD45UkFbi69qtYPKmCbZWsQFzXAyYGvEHRQSa5FaMLgGncfMGnpG839d4v",
  "key9": "3bkVEc15PivwdLMs3E1S9GRFK3AV57wQTeA2R5r4BTtfGJaA8W69CcuAhFpkhG6bQiwFssx7wbQj7gvktFS7R5hp",
  "key10": "5x4mZCh7PQHoCCHJ4nMHvmbHsKZs1w6ZjmuYSB2UCmTTvey6zzqdgRh2w6APfZfFjfqDd6Lr1ejaWQWuQXvm7JdD",
  "key11": "39tqT3rmRP2Yconb2HjBjjrXVUDgkN879z1Jj5WnPU3KUM9wzdLEXfzQeEifekynDcWfH9Pms3daoFvJWVpShgHt",
  "key12": "3SWY3chj9iY2xJCH6vB7Zg1gW4wDgByKaEns1569NRwAg32RPunvEoj1s2mySjnWzSxWBZUR783a2ktnMAEn668Q",
  "key13": "Cyji9Qej2S2vy9MQpSUYCHEeD1XTwT52Cnnefx1KjAq5A3NAueeGwPj27pcoG1BsAbspanxxtQ7p8uwGuefj8fe",
  "key14": "3TKsAorPkufeNzzhiHDaVKvUv7okshg7qD6CSuNu3v5yUezBfeAbzk9aHUBdhdsaJMDPKSMNQts5jYproeVT3RZv",
  "key15": "3cKKz4RudLbwv63hevfF7hex31oncJEGaMmiybbpFLxuafsBSsJUbNsAJRqv9AY3bFa4bghmyMhtVg2oroG1xaQJ",
  "key16": "WVUycU5reucgHfLVbuSRr5Wux4KQB8yH7fcfDWgHXLDyZgHJbcoEsBvgbQJ6CCwefM1THtCZ4WJ8CEPK6LmWqMT",
  "key17": "EbsJ6oJNgT4FwNwEQP2CS1sfihzCJH1jUP2vnwcKyRox75tS6DVqi54UDx9xk12m8gfXfekiiEFACEQsmvWxMZV",
  "key18": "4NVnjrT2EpTQ4ycLwKwvdEGA8zdPt66Me9DmjAhP1Gmv4tYEXWrPreFVLraEAecetwCeDF2CzYUBQ96cbfVs9QVw",
  "key19": "62VbNeNurGRJu95dwuUHtSMnSvBGutJWRbGPemErA6Dy6ohknkziVjpuLrQM9mcWLKzD2QS8NZKAiaUU4jWdkr2b",
  "key20": "2u3L4uEmaaJwX3Svmu3icrmb7FhmYDYvAc6GkEVd1fhtCYPvDY8Mn6V87NuTg69aF5o1ghnPv4uAaDU9tzukbUt1",
  "key21": "3hpDgRg6QkoS4Ck93DtE2W2mkfhqPbNq91MYpAv2W39UxsazsZcToWVLb7DbunLGr6j6vTQzVQx2a9XHoCdieR9J",
  "key22": "24LdRnKAjVcFdemobtquQ8owHuQwcc6EBYhxKB62XV8PmAFSdq6JAtfr5Jcb2iXbepzQMmJinJKhy6nfcBrRTw9g",
  "key23": "DuZYE1qHjvFdDgS5wjhNXk4f5iJUBqMSudmAVxHmfmjcirnk5m9EoBu77M19AayxHC47Bfj343cePevCH4NsSp8",
  "key24": "37LjGxu1CkZhWCLGYKLMxLsXZuCxkiiJgfJPgoC78pPEE6yEFYdKumwTC8CYZ92hmSiua5v9kfwhCYgCi4br6WFd",
  "key25": "3JH51gVqZ2ptJCzYkLVUniCZ4B4rTTFpXnwwTUxoq89P7AEwhjxLNdQFTG5ayKbtDzcBj4o548pS6AWZdkbmgMtX",
  "key26": "2TAhdrwPZUrtVuZevDEmxuFvvQuZZkd7CnWVFKA1n39NGgs3ryTz1DYi97vtrpVpEKFkDptQfqrYLFMqrB4gmssb",
  "key27": "4CKyxuATNs6U6SauCfjR7tTHYFyCEza1FNFzAFFnXWsTxBt4ed5gEDxQdobsDHoEPvURpWAhgijny47q2n23pHdM",
  "key28": "55GpwHagRFoDhRycqYT1eqK9q1HK2ZwysoBRC4GS6mTkCNvy4LXUhWQea2i3rnAvwnMvvgdMdSra6eVEHfXxPrSJ",
  "key29": "5r4fmqCoSnP1wiUFBSajxGogKGcs2easvjgPfiZ3429nC1dHu6KVyzMjH9faiE3udqaF5jKkoEjBrmp8fN9jG3qi",
  "key30": "36qRZMR1TZK5gtmX7tmnVL6PTAfK565C5qykoWxxTavp4ikKceqDJqy96wFVEoEg3JAQS15ob9UCvpdT53PnVwGZ",
  "key31": "3HN6kKmoCW5m7WpreV9WAWBxzWW2ecGtU6fs4x5bAaqxF9GkoGBjJdBXsU6nqd8qCzrtk3jjHJX7TFskwxZVQafx",
  "key32": "4zZRi4jSuF4aqCzEkq5GBubXzEi9zxofGL1ZW3678MnobgyEW1xEzGdS6AzA5NKJ8BQVqSMDT1uS19KmTvBXEfKh",
  "key33": "2pGDd2MFDuUvWM3wfg63p5ZnxqAb5LC9CpmUd4Q3UHVh3nx5VPqCCumcc373v4xngDJfha8z3bsFaWDVJYu4SENG",
  "key34": "5D5Xazf1dsQmHrMSDTTkToZEztMdPyFuvdvuSmneRGMWas3y35XJb3GKsGyL8txyrXHQ6fMKdYZJVG7tC6xEsgj9",
  "key35": "4hzXnxN9wVY5EyMoJJVSuKxtHHjg5YqGCUMGopjSyYYEHrvH13ToABd9CMv35sGpXBETsNYbKg4xvMxS3EDv5J4K",
  "key36": "4wjNJbb2FmUcPw15Jky9MApLbDREX84MdCB59eHR17yzXo5nkyKW4PjXaWXB1tiwt6U2B8PgVDsB7cfLGzfpCvvj",
  "key37": "wfPF1mYwim43wgvdHetpNLKEPC2vBjLYeuZKNkS39nRP5eKwixptoethbrnJwTPoRRbYyyS9tf5jjP3xp2mrdYk",
  "key38": "5f84VUEnFTkFdSisGXzhaE6H2LVH9DB1516gV82LyH7QmcoLfGao3ay9Zvw9czzHLUKZtiAP9dq6Psca655rw8nh",
  "key39": "3pY4DgtvntQANghoubtn7uxiNhq7kufoLTaDUMSLnPKiPk46PCTTT9aTXDKC4Z9r4uPG2oRoWdaeng5ZUZeFxPjp",
  "key40": "3LPHZdFQYbRyBuAf1uRYvS53ZN61fSSjhDCsAXSYxRg6TCFUdUYBrBPKeYiyJ2cwJSz6mfshuMdKQEU6boGs7uJi",
  "key41": "47LDFFgo4qq7Vui9Vrf5rw5L6mYDiVTPu6mYRtEzFYF6GDt8677S3b4JGskaUz4T4wXNsZcMdK6tgQLK3yagu3J",
  "key42": "65aK4vFRARoikX1bCt4deWGmThsePYhqWYwTVR1hnNESHq5mXA3c6uruS2Xe8gakkWCgbGY5x679DLaugYU8zZQA",
  "key43": "3P1Scgegs7pjNgodkCsACF3fzDRKaBon8afvy8DfVA267qQAzv3Viazbsf7oHrBboicPXXN7nr94R8UKHYfJwNMT",
  "key44": "4MT7uiaGub29UoPxi6pbxnGdzYyYYFMjByyu2B1W74VGjNnNbc9baLQme1Z2n5qKiLZoRy6gmja6Ym6pktpJ7cLK",
  "key45": "3z4aTsQ3FPYKhLeEax5E3Cmqmeogh7Tyjj9mQvcgDNfC6NPPxNADx6h1paFuxpHw7KCG7WduKNCFZgZze5oU1BZn",
  "key46": "2hQJFCZYhaYmek9KEcB4Lc541MgafAeNdyqVWJ1tyHNmYkGgT4NSntRKNh5FQisdhiX8Gc5ED2iUgNkBFBF3EM5T",
  "key47": "4rMzCqdWZwoR7LxYqwPwog9YYttA5zVhZG6rdpLNFJyaJfaPNo48CdFJ7ZV1uTAUyKJP3CGYWMj9YRx7ecqLBmZ1",
  "key48": "4Qd3P6yq1HuATcebzqMboJ6DCyNhmMyXns9BRkXFUQJgfPatfPTYEmMiTKqPvKCR7BecJcEA5vBVC7XXywcoeXut",
  "key49": "26Uv8doGk1V1KpUuRH5tbXrG7NhKodrmDu7Hj5Dq9Y6jXy1j5mNftzj38t8wNCANzqPshPhWg7MERfBTNGBQS8vi"
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
