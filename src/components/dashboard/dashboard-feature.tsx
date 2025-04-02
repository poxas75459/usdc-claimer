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
    "5g8bHpDKFYMRJfNHWhpUXu2PBpHxpvndBw6tueWmTUoboyXSniXJj6gxT33baHCNm2f3q7RVK5nojhWbKrc3GuJk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jEmBP1W21ThFoqymCjoNvkmD9u2ymvjEGRGCvkPCNdTQJZuA2a7BdPjdbNdgLKV1pSrQ15ZgYqGDDgB8Emojwvn",
  "key1": "2otFq16xnmxPt8MrR4mida39m2y9jtXrH6MxvyonBt5NvvPk121yxgAuAB8GkDsFhN9kv8LGo31QhTR4LHF395DD",
  "key2": "3WfnEFcjPsdUDkzhQhJDknLyqRvsyeCdauMpxn1gYYR3hMgwhAYFW4JJB76pCHubDXZSFzmwX62HwodLgf7W9zMQ",
  "key3": "27z1Z1XsFHgm6Tc4kpr8C8B6idbxdHeW8ctyobtd9dnVnexFFuHK2skMbBSx9wPy1VDrGqB5z2bBBzzwerxuERtj",
  "key4": "2j3ezQDMEXUuxTE8dTc47RuRj49wBdQyAqeGTjHiHUtehGNcNVZw2DjiY8NQuzBDb6LYEgeT12asUTJ7K6hYYYkR",
  "key5": "5Ej8BLSRxeaFvbF7dabVJ4znJRAESyxfDQ1xXHi39oPGZEKvgXA8Jx66QUoJK9tTXHevecKowt1sSXih8z8YCFdQ",
  "key6": "5jVp3bzPE2u1AM7PCGpvuvVMWdnq4mUArrcRyykh2KA634RbdH5ewrYwt94mD5SuW2cP7RNGh6qtZDyFKkmd6LfG",
  "key7": "3MYswNz5V8M83z7zyze6HevarzLahSVbeJP7CdecNTL3mPKxUSeDVsXXYyJXgkVZ9NXck4DcMes4sg147Lv2aeit",
  "key8": "3oerFJyhMmja6eSyK6PxMNdzPK8eS1NoGd4GqYNN3ygFQtJdN2t1m35f48TTiRwg6BB855EzHYaXCZ4wZbCj5t7w",
  "key9": "35oNhnfrmrCoK8246m73LjFViu5VpugTsprbWtVU4LoBbg9C3wvtuzizVAP9pk6szgG17WW6QEzo8VjFydSZkH4X",
  "key10": "3awutrucKQmnecKQodNg59WidGJxdsTJXx7vzzTF8N3mfx3eU4QL14dTvWRncXkfyKT7GxwrKaamaWVdgF7ZdgCy",
  "key11": "2eDMbZ2ufj8YT92xHg6HA4gcFURY7JU5wak2M1NuAgfie3YffTUSJvV86wWc6s3yLvXqxwgpFY5eVLKVPGYq9fGS",
  "key12": "wofQvDQyuJgTwcwvgW5v9RFgZLQGqmHKX4vGu23PU6E9ZCgnvB19BnciZ9McX3LmXa6RGxCddj819otFcTmyQkm",
  "key13": "3CjdFp6fS5sX8prr7u7ooofWDNP3MirsUTAsUmKKvimHaKe7Yfdnp2yi18W7NdifwQj7LrecJh2pjhP9Nz2g2Pox",
  "key14": "tRkDL9U9H6Qr9krSRfH34aDXYzT8p6WQXgihYjL4Kivb5GqED3kxv12XNvv16z1HXwui4EmKtR3g337jox5RGrv",
  "key15": "558pco9v9fouziZHebQsRC3q8QpoCRnR2qXRjNEkAXbbL9eBaiEsN6HMGt5cPh6WzPZHsrscbom5BaDBFS5L57zN",
  "key16": "3UuBa5f2irWcCcsm6LjMWHJgYR5i4rc6X6hBGKXRxZvoRsStMSRMHC6qVsERMyAzHWnPTCaYdrD4f2NJYbJBardk",
  "key17": "3FjCeHjp2sybeh1yfaxMSaedxQERtJA7njKR7Fp7fFUov6rvtbtsAfvMVKDJCZhS6Kt8NpvyGZqBf1qitQXzbbRn",
  "key18": "5CQ4yXfGf74xLAEMSy5c8xoh5upB64qcrD2bY8WEKdSuwaQZ8H3gi9ACZoF3AT5GACGUd3C9SiQC3VyCqnJQ1oxB",
  "key19": "31mqn4JUT1oSHqiLodc472pod7VidfHgfeMeNuxGgw12nzxVb9mMrkj9HxxV6xjMC4jC7V93saHeCCbCmAFp7iVa",
  "key20": "44pqQZzNWANLS6vPFHYXPLJmcSwLXVShhH39FUYrDzqnYcSLUS4t4vHt7M7vC4njd8239eieTq2q9MzMrmZ5BZnN",
  "key21": "5mqg6MmtqGLE2aKR59xMevB3nbVQQm5raBXJQhw7h6UNiDAvsgFXjAvweUeRRBp3yyEhK2Wpm7XCcKN6fdGsaR6e",
  "key22": "vRm8uZtTxoXT3S9FUphb911BRKVLhoWsXUANKzAiEsgjPbrMsCwJtVS2DyZiFTZJE7kFMm8G2foSXsHRyPoApVt",
  "key23": "4vSfXX4RVSsNKJ3A5u1HcJLzw1bGs2PJE9CPbJELrnBaMKQWBtbWpbNMDNDHrTeQq2vTsXRE1ybLVimhUY3x6MCY",
  "key24": "21fSUPAT1mXgrQiYwSZa2gDhfNGNrABenWL7XimcKLqbw5BkgD4PgddsR6BX1YbwggRgc4emPL5ms6Fp78v6DBVy",
  "key25": "5ZgBQbjX2AUNbfYnha2xWzF2Bjwi8L3UFsmgHifgmK4VyQhkWiGyDKh6QT3JBPHMSTFEcpp81d74VyZoyieT9k79",
  "key26": "3BkmnQps4uUUwDCfc343zfegp5ykBwvZ1NP2HuycsYRZZUdwPefgMmxfVC9Fyu4VjPkMS7y3v6x7qHVXvdJLKG6u",
  "key27": "a6fyCysPsLWc1msqh3BNSqZ8HjLuNkRDB5ejwsfDTXupCk7mFZu5xj6w4jpoa4YUkyTecwMYZ72r4d88BNB1zBJ",
  "key28": "5SAkKvaqKfArxdE4D6gWBTd1MtYhcc4bEyeTERYr5dGtAzPZZwyBr7wVnE2EsjBg9xHdUa95FSJVD1sSqXwUK5sB",
  "key29": "2LQEkVbDTz9ygnGYterZJWd9GpM6nAQUHwqRq36h73UP4amkTkCkyZCDRUTeUHPXKSGt4zkgj6uGu8skAbcuPxbN",
  "key30": "56CKBzM2BVqkXBqjKougWr9vXve6Z8o5YoPBRWJNU7mVfCZwfJvSJ3AgZJvhynSDTtkFgsVVKbu5H16BcSmW5hP6",
  "key31": "LL7CbJTfSYL5UimWt8FhFLFEALtA4fLcbCswcCgjuW5rFfLzdja6cWBZdVXVDCXGBRyaUB5kNCkuMPRCREwXDG1",
  "key32": "3oaZB73P19YbZmhcvRYzGGTH1rfGu7VArtA1NuWRP13Lh98EYugAM3VygtsXrbnUpDaHyrFSui9esRxwiiHnb9pu",
  "key33": "2gthrQjMEkXBzKBEmdVwtQG7QwgjJNfDMkjVjfDekpYUcKW6Dtpx3r6srr2KhoQvTBK7ZRfHC8JZUYyw5RLPmkKV",
  "key34": "2QCQhMJbV3L13msv7QZesEEsPiFCgWgYQ8QZkTypUqyk3yZXFVg7gi1UkxZcwJ7ByyvwKyjJB2DqnK4xYvuebQ66",
  "key35": "rF1HR4g2q4iKWowaVcu9JPaPBuJ6BAtmS2L7UQUJi5AZMUPe1e5vA777RwZhRKYijp5GxfEf5bjdRufYGvB5j8h",
  "key36": "5AdqchPbQR85S5hJ5vRxTzAQYNbSVnpuYDzbKcRhuHmQcqJREJ6Fc5xeYAmC8SWsMxrRgFrB8yL6JzC4MpzkNgKW",
  "key37": "4ZfcHGyXDmg9QcHZF1yFsAYpM2vgzBoeH2BMNtuuQde3MadZvVvPBWFmginKMLEGbWk1eWcdhBVAxCmwVSNQLFgr"
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
