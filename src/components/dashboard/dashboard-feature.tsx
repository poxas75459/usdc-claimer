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
    "QD4xZeqmXSEmAnP3BGx8Ka6RWdia4AZSraE2dv4ZNdLiogWzAsmJz7KZtUPqeeL4fpiYrv5WMY4YRR3r8p8RK5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UTzvFvAmbKc7LZZisUcA2qnAyXiT4gAjDpkwWRf3yFkZv1wkDd7s8qSf5jrVE7oycRPzFpwJFvSN8TnidHdF8wE",
  "key1": "5nmvHVK6Pr5D7EeqPJJsE7xMFx7dpqFgnuYNjuAncBwGHNocSuMPFqQw5y6uMFqxvVtmXnY1vZy4z16ity5sey72",
  "key2": "DQSDGo7K19ZnL2SdASmCjg16Zjc47PKgRwtQF8LNYswF8T1ggSN5xTSHPBF1mwtNai96frbANBw82msyo1MFtCS",
  "key3": "2QDWRA4Emqrp51nxMdm2qyCXDqDAat3MqPxKaCE8f7jhtQ9Eqn4LbpSH4R9EMm5nwTDaRwNoZpP1R28zXrB7xLUD",
  "key4": "MAKwhPanBekm7ujQvy3iY7mWSJKLeT8Z8zuoPahe7u9WUTFQxEAsUHLng4YoEAjV7G3oYHpBVdG56ALKkefjScB",
  "key5": "3YVRaPxMV63oXD832UHE5M1iVaDe8hz7LZqq4PdqVN7h2TV1Ag3eG1VviWxEigcuXx3aoKXdWeigVPpsssdbw9fp",
  "key6": "3s4uGbhVBWJjvFzg73muTpUB66fg6dbeQXpWQTfmjKsmMZZPU2eQ1MZiALsZEpNrXGdJ5FuwyKEonG61AMGAMQK3",
  "key7": "4N2ihr7juWTwBjCSAw4ThsV8aB6d5MYmr95p4s6FU3NmsLPVo7rKcTmPRNrWpyP9JcoKpA9DmApRVyjA8smV7NRC",
  "key8": "47Y77Q9fcSxzhRu5WhLUBPi4ZGm8oKVmkb93SwTFzB4sSkKZvXVF6EaFdKCL2Tk9MFTdiFTfokPmu25ND5By5GYT",
  "key9": "5mM3DdnEuiVvGoPKMaWv1uL3eviJWvY2TbQvGZvWx3QemejYrbLYbxRtfaf4RmgcfZZXLeHjzYFLvJbT5cRfYeu3",
  "key10": "21dL4jHXt4c5FzRYepu4BWrhuRngaqnY2DrUaCEYuxEBTGXkMJsyMtEKYeBeRC2RpZ5dnU3vkmxz66zHCdz7BTag",
  "key11": "2reEz5hMhG9i7RDvLRkcjak596r4iWH1vHjYXZ4hWrXqdi9BiKmbwpspLG5VKbur7gUXUH2A6voQW8gio6NZ4rTW",
  "key12": "4LAv3rruGqqdPvuhkZkPUkg2q7Foqwp8HM2tDqej8TtMBByGHGHErFrSZRwrkeUWEwkcuLPxcuTgLkcDYQNmMRcw",
  "key13": "51TWNGD6VqCCMd2WNhXNcyRHFfUfis7h5qxE5JEpiPx6JZ4GLHzi9vn2Sqp2Ar9HnH3tF8bSQjk6YYDs3b1m3JBM",
  "key14": "37QWAuHSEWetqkvhhTVTKPDGArGu7M422b8o7QTJxMkMcrmeg7ceiGPJvfn6Nz8T7bZtwRDkfnNn69u789hEcVK",
  "key15": "F6Tqsx3b2FYWbybmAyyDMcmnr4su5xiqiAHHoM26wN1ccLC2fkEuk75xGz9NNvoSZXNyr9vbJxfJ6s6Nn67cG9n",
  "key16": "2sqyAJgAgLVy7KK4f8riB9DF1w9je7x4YQxegHwh2gUihbmk31ceqRWMWjXHGqiVjzJvtGVCGJdThStRDN7dS6t",
  "key17": "2wrytiH5ipn3HY9fmhZTeUf9qV2iyqKeYeo7Jdeg7bKUdciA1iE6nijPh1B3muXjxMDTy5Dio2LK5ijYycV1oeGx",
  "key18": "3FpR42xGfGtBHXU3XydJ77dBNiq52vDxyA6hyWqtMgdzQQgiTQBzJ8dpnBMKz1CT8kYt67AsLTiuQDh8P3WU2gn1",
  "key19": "4NZvAodQrkhEZXrJssqabhg5AWyxkfCCzLBDxZQTrEE4JkhXtoRFhvdjqwQwwUjVan2UBKqEaUXnUbBxBBSiAJVw",
  "key20": "4F9oU4yAPwE7obcssz1ZbdDSUGL2yrxZhhbJArYJs3ybf6evurgF9svYxKuc48t9JqdoxhvhAjMZdyR2QLLbQ7EG",
  "key21": "fndQbMtMBLsyfo9mTx2yUXk2rsugxtd9ekxS7UafYxLqiAGcgWDU1B5gZZ6DX7SVjL3e12gTzPUbdBXdNBhJ7kb",
  "key22": "AYR1urQaCDseim4pcWgpF5i7sV1ezvixfrMhYd2KgRvDRXYK4TTPguDvgu1DDRN2EkSARNj4kFfouq67JwebeZ6",
  "key23": "3vv7U8k6jDQLxV9z51bCfNXHJWVnt1spdV5FFQQdXxaoX5rPjhNZHbbu9kUKs9a5rGzYzURBhv7tv8RtKD6Kscvs",
  "key24": "5ptrXFypUrdZVrEviLwUptn2jJoKLfwfcRAbtiL1y65zaJCvFmjRAYc4rHAHtp8MMspPCSaSUiHw5onWHPRGinte",
  "key25": "5ifBmqHuDms7BSJoEN7YnphsrtsQQ8Q3d4TMnomxzvgYnpx1bFaYvQQwoiuLS6eBnyT8rwHAkDEtPQs9Fys67s8L",
  "key26": "54gApVnoSPb1irMMHXNWdwRuJa1JhDRAFNxWjqPDUxppbuhmytZVQjSGCvX8tQWq1ZA9rbH1Wh2sDfH3L4EupzDp",
  "key27": "627rFFWQML6Z68if8Xc4kYo69FfHsNjBb28d3Bd7bL8Dhw27MYYuWoxJYDjsHBvW4AcHrZk7kbatjK1mRHZc67f9",
  "key28": "5o67cUyhZ2wKas67JYp3cduJvQ7BhC3RJJ3pmozXDpEp6Rmw6Msuc858J2efpBirRPztJeP8RPpV5iG88k2u76oi",
  "key29": "2Ta9KFcwcstGpz2Wb6mzTfXcYKAAUJxrATwqWVFBgkYA713xSss57gTiYu5vhgzUAzMVmhzsGoUS74FtoNiK1DCK",
  "key30": "51f7fBTtvetRDj3e7YHYWkZ82zzyUpPDFYWYH5kAB8ssuR6i9LUB6kb57w4LYvKy8kuScwg7uvVzPupAKZ7Y7Dbe",
  "key31": "5dufXNoH8ehRaMRQay3KiA7fQ6isDPmEvBY2q2sqxxazfe9kS6LYRxS1ssVybdfWSr29ytWrC1cAZ8ZxK8dLJ5KT",
  "key32": "2hH8C12pGwtu3muqqstHBeedu34jnGadnoJbkCW4HEqMXF5KhLvQ2UK4p39iS2ohpaEcvfpr89em7wEdsf8uEEff",
  "key33": "eYPydfGBa4cow1Q1TczcjRFpcZh43KpM3Ve1JuSqeBjj2AhfSKD1FdT7xCR9FH1WP4GCBtK6mN3zZ5dspNBUC4U",
  "key34": "3Ke6mZ9MXi9fS3o5sjdSAFHGPzrdTL4pTGSSuxXVqjxyn37GGwSThTssL32Ce7Puzh2hyr4QVa193JLYNnaCtLst",
  "key35": "36njeUm7xbcmhXJx3f5Puz5DoGbLNR1vMWPZqsGwDFgVFKLK4DAJx2G4oDs5pn9KWs6Njj8KsuHcJkJKsLUpq5ex",
  "key36": "2hCfrrc43LvHn9dhGJ8pvcSE2MnmfxfMafvPtScPEmy2YQextE9KrYYaJFBQh69P1yTUANkVaRWcN6YRDsLgNfsY",
  "key37": "PHtQCC66erCuiYTEhB2S8RdcZaywnZ37zF73AWAfRkjfEFMYhLbUAG4GojQWtr9RiKtTrP8UH34DA6BWggJWLqz",
  "key38": "DQnFJ2NkihxBoKmPyV4kftA3LykGhLE2P2gMrrvn7bnXksTw7CbCPbGbvoqg33jYx6zSdGktkMXQpEYPppp4gCu",
  "key39": "4RRJRmexyNj6kY9t3rykzRx8b3XJs875Erb8cWcTmWmo5uAjrbEiJQ91pFcNhnbfJB1ZAfxt86mZUbnUh3bJgmM9",
  "key40": "PS9j3yUxX4zUJvkWHsZUa4XCUsm3qUdaXMyFwb584oqMfZubQAQAgwbjXY3cr5dLKAJTRy3WrwxqzshDoo1rS4y",
  "key41": "4NdWvmWhiDc7YbzEQN7ySjfCCj3q48r2ZrAPD27U1xFL4SiTyZLTWP5LF3S9bW91WYQqVpyht2bnRdFFzepSCRdY",
  "key42": "4DrEj1vmXvDL7F4MQycKYhNnUhQpk4zmGSBSBFJa987VoCE83SZZLB65jWUevNMmRR5MmkDLQaoWwKsqPKRjb1nL",
  "key43": "NBetEdk7tDAXAT45qjiTs5dCc39tCTb1SGjvSCCcnFdbqDyVccSHEFTfZA8jWQCcz4c4MMfY2hTPQD31p7sZ1dc",
  "key44": "24ptXryGyq4riL4PiyBd3F4wPZg6oPdwswJTctDq6tqcQ4QB96DnHwkf6G5BwxjE8MpQesK3ARfKDegGUB1mnQi8",
  "key45": "4XUGRotA1CAk2848DiAQQnJecYN6T5f4AqeCm4Mh7HgDMkK2NfFLZRzvesHC2p77UwBiXRN33wSHFqY2EbAvMnZo",
  "key46": "5i4VtwUguMJm4XspHbkYrApXXu7vuSr7h8Z7RfodWeTBWegqn5p1FQwvV3tszLGB1n8msHTUWW9BycMxrtfniVGW",
  "key47": "5YvDkJfNKbUUtk1vX6G9CNrWMVtyZaZMj73NdJ2XJ7n17R9jJTgdYUNwSHyviLD93fnJeaTdbo4XtFpunQun2LPq",
  "key48": "4gJbXxQMZ58FkBJdtugnN6pCTRzoMN7BHEST4tU6xz9veRT2qn8J8RrG4PbEr1Zi8GXxCLJCRwZ2jmdiuMYkAGgh",
  "key49": "4bYXAnXneGMNLFfwX2N3dPEao4917yncpQ5ninLR2EFMo4PmQhNub12kSWcBWhDJmcGof9gUWqHmpuo4hzxgww9Y"
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
