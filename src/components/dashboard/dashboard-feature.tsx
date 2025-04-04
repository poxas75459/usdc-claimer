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
    "4o4fFMgqcyqnStZ5EEvCBuCekNT4dWcQou7UhZsTeKbyzH7amQLGXJLdVc82aA8HAau7uid1Xnknfg7aNTAtX3it"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7WuX3zvy9cS8rUGt5rq1Z7uHZagUuWWNruzLg8gL7PHDYZdYsWcscnTdhyNNV1hWSkCuWtcBifz9ZKCPuki1bhQ",
  "key1": "4H3BX4riYWMvJKK5aHE7c9aQRGnhiiXntRxuox6v73f9cgKDemUV7fMXCiEAEbB3CB3Dpi3BZypCnjU1mA1WH8DQ",
  "key2": "57AeC59KmStoujPXGmjfECgHaKKBE1aR7g23vSshMJ9KZkGHfE4uHbX7rZJ2SiYG93kub1tu59Th9tkTjB3YRfsg",
  "key3": "ApHJjvwJWBLfxQtA1SfpAoLnsZMspXrvu2Ffp1SS3UJ2KbrP2AZKTW6hsUznUpffN6hcSKtFWFSjSrqaWpEANUA",
  "key4": "e8MkLohs5jve8kJXmT9wP7QjjBnQ54kR9PLGPLuCDTAu6w6XBcVMc8NwLiwbwX3jhw9rCLkPA6e6wodPwabFfRH",
  "key5": "5bhxEHnD8Jhgnt2EcHZsUa4TSto1fAjyDSmR1jjse6ggTpC8avSQ19Z3fuZeeaXfKoziEygQGSsQjruPhzVvgysf",
  "key6": "4NyEHxLyXjcJk4fudHdredeHxYqjb2e8a7ZQRf8w4BYoXMUPxrx2zzwzpdF5GtGt3ZZEMBhY2mJvjhQXm6issUjD",
  "key7": "2wMbDPrkHgmu8ou9Ksf68TuGStvQCNUMRR5K7Xw34umuz8jvwMfbKGZ4ZoBEW5g3XCpEZDYsqcMed2NqBUa1Y1b",
  "key8": "3LvznbDB9svdgikWc4NMo3VuWs83PfAZXtenwRu77hh63XcBzzgiTESQLjgUypAucH4bso793MRtegL9XrLWXXKn",
  "key9": "3MmpjmsLMB2sgYc6bK7TuGgkZgnTHpWctX6r6vAVaVArZCkxuvDhZhKa1Vm5cTLf6fw3BwJpimKh7PRdpbQqVHL",
  "key10": "58YkeguC8GCCXsXqAPd5Kz13JUpiBWVTQ3G5ivRxFfgtbT3KCnDbAe3vjPVZmSavpo4V4pysiaC5LUiZgJgw4ssr",
  "key11": "4fc69XQMWMAmuyMgujV3yFHpa3dnQZCz4hqd8pF2YucRc1UpuhJjn2yTCPuwSMjQga2so9YcK42r6KcUgtVMNSfc",
  "key12": "pCbcr3AvEKa7dv1tXuAo3JCAZMVWjonsSNSyLvPMY8rvWKV4HSTsbrmn6y4btY5NaAy6oifQmgogt4Hzoa5fpJb",
  "key13": "5jJrzVpzeNJC55sUiX83MZA5YyuSr28g62tfVTJnoSmyAbeEpRF8qW3GfYhr1udLaVW4f5D9D2J9qGZqdTnWyxxH",
  "key14": "4aCgxeL9moAEc4sGLMFG2i2d4wUqE8Bky4wjmWeoGsjsHpZBhqEXMAWH6Xec661vrkBDFRyCBK6o7N6VDS8trDrh",
  "key15": "2Qbfhyd5rcQd4vZbfh9KD7419zY6ESfZYgrBeby4LqkgArMHyD6Sd4Po8PK3Up4MfMXgw4K5x6qi3P79e7S5G47K",
  "key16": "654APCSy6BRSmdWECDTpNnVF9uhEU5Dx4YGyvLecr8snk9x3hahDwGCiYqY2b2R9pBxnhijyxTxPLb4f1DFNzp9M",
  "key17": "5nHxokeq6TJ3Sz46VwkhojuFuGTre3x51kaaT95e6rASDDzhzmjQB8QQtZjSM8xXbuLsvyuWLtgZwcVtHMiYhKdZ",
  "key18": "R2vgLuzy57MTSBh3JLiU5uDZUeJ51EZHg2D742purLpoZ1CzsYLdKconvNMsffKWuoaAPRM8s1pYomkq6HkCK71",
  "key19": "dVhGZzR5GWbgnBzQtZTQHUL2HQ8RYmYkfNCEAS7Rg9YY9A6sBeur7fLtxNuqSHsbLPUsetkWZptNP3SeugBZ2zJ",
  "key20": "56dCWRPgxecnunV4p7p71seKxDtqA9Ppivs1QhSVYHSJCgRHPiAr8xkWpreLDvuHFsu8BCSZK521mv2ag3n73X5S",
  "key21": "54Fyx2VB5RDKeHTBXa7mHB1RFnryTWLfJk5FTmxDmtSvG8sdykicZp247boGyEpWFWq3upMdSPEUuf5RegB3hqw9",
  "key22": "2cZMjGGYkwUSCSFdHN4T879Se7XWXrPuufj1ZZ5g4CKz9Xnk55pNbQMetF3smEt4QTBxK1Roy4immphPd8ZAZaku",
  "key23": "2bAu8pAitYk4tc4KNTNy3KY2Fc1tuoiHuojjL7ei3ju4XYiUo7qcEykNTnYSfjGinpH5DFTwGGdvkbfJCPawQt7e",
  "key24": "3kHwrdM5CnuzYSwQC4g2civpP8oa3EBaWCeKz852q8D1GyLDtjytP7gnBGazqNNqSQ54Vz8iFatcyrxKKfwWQfuK",
  "key25": "2uws6p6kJZNMVEc4FjAK1w19o4SdGWhgAwXda5kkAb1ZnkpDoZX21UokpJACES2g1W7hmARcqKVVzzVLyHFPJyt7",
  "key26": "2SY7LYXotYt6E7BykmiDv9BsBjGt38nT7ZqiGgKXgXpoZtywG45yQ8uQ9KZ9j9Qvz8ragqDimgqg674Ta7MrzFYs",
  "key27": "2ajbMifNBDqFxje73MEYmMcuSYVARW2empLCTteSAboqUDynPdByWyh1YxTXWHk4UMfKSaVTA6gX5obqckMTnhoj",
  "key28": "3T69c7U5VL4ygwgSHBqNGPQcuUu3PsvBRZ9qmAZcDtiFkiUkjRtZNWRFRXwQY8NCz1PJ9pwPvQmVPFNZtbzAVuWC",
  "key29": "53WAwnQEJWqfrWJg7Ym3gcWQSLvueMpv2S1FKSMPxa9rbBJt7sGSRaiN7Ba7s2aYoDW2DrkoAKDBfjWSqWxqJevA",
  "key30": "5qkpycp4QoDkJ6XhMqrmqycbVoBkvRmx1BnZPUruSDjNfi9MH1Ph9tCaMc9DbKHFPTyyQ24ZZPcehWNHUNSJqmRG",
  "key31": "627tZaxvPPsKMi86EtJRXkbUsNcPzKZnJQ2dSatxErFzQpXAevy3whN2CXrtZqExMDNMrTQbMJBbJ61KeaxfxrLu",
  "key32": "4XFPLNCr24U8iWKcmkmPHKauQb3NPonwThXJiDgnREU34X7VyK8wvBZwMuSqzfkYC74e5iWzbDJMJLpGN8aJgDxd",
  "key33": "3uysWBqUSLXifqUUWnrsuu593XEfd8yHfniha6C3uJ7bjL14F3aM59oFKFShBmmMPSd3Bu7gLZk8ySzhJvMWMNgu",
  "key34": "AhXTTn3tFecptM89VZBihSTLukpq938PogxQo4iFsRut8W1qztqgKWAAv8cCb5gwxRSJofeGixeMkME7iMHsoQS",
  "key35": "ZHZLqRZeXd9F2bahkvzwWC1r4q2Nuku8Asyccg59iCxuanNwD9PE6dWtXaco6urJNDDrukQq1hXAyzieaKMGYQE",
  "key36": "2eEQNDmdMg9XGVXEjQFYvQQ5YwGUnzGFeZ4r7wQsaF2LKEeB1VjRhwep5WBbPGixJneZgHgcUpWk8n1L5dTQUWgm",
  "key37": "Btk365E1No5QSxoCBqbdZWovMUyN293y15sikp8PytxScwYU9M9rFyazEGhdbH5aEBLeDL8YLMvnnyDbU6Hs9G9",
  "key38": "4NM9L4fjQNKqRXw4NKue2eErjvGWGMN2uLMAK98NjFFHSJwf7BqJnWtwCNK6pcTMi9Bh7ZmAjLMYHbHR7yeqYxJk",
  "key39": "4myM8845yjA7fA2Ga3NVWjzb7T1kVZHDpgyohniA5ayPumDLQxDhAoRBaqRzhURKdvtTqmBVjuMaKmiimqHsdTYh",
  "key40": "fJ1AnWTKee3ra4xNHbJ9DaHotjs83QPkAM56pV9EgNUQNk4z77LR4ownNYrf6Ke1LiirY4mfZM4QLYsok3XvBae",
  "key41": "5uSKDDkjp9N8niFMfiYpeL96i8Fs3iNBDEvJM6JRYHTi137uffrQFPbbTBqJhY5EeMVYap6ZJdosfkU6VsAoQfp5",
  "key42": "4e2BTUDjscQDaDAGrPkGireG9d3gC827grjR9beFCR8P76PobnkcpNA2rdVa9bbdSCEqEg269pe6wrDg8VBCj1gQ"
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
