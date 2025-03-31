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
    "3t8sLPidFPqEErB4ym961D4U13Zm57RUSUPtnQgLp6gAZ5CXbhbtdadCLFXVdLvvELiFh5qozJnZbdGqM1x953eL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oJkrFcKFmnJoVXPqREUyZx62rsjpodZM9DMUEqZxYJ4f7rvJ2CuznxeWBcf3kEVcGVuxSeXYSP51LsoKfuYCwEi",
  "key1": "3EmYRZwZH3T854gSUiky6Xi6YY2iHU8irDifbscpsswb9HkmH4VyYkMoXkVXDR8cDYQ6aCSvUsZ8johNR29PoZnD",
  "key2": "ZGmPto8Ve8z7shFucYGBtwk46pECsJfJdHq8ppMJf3KqRLUBPQfe3Kmy1YUq2Fn6B9H5xva2VHwgRuwj1u6MB76",
  "key3": "3vrMxkneFx1oVKjMqfvmYuY8z6aoGHNHunSwmK3qJP4BuU7ZmaNvELuZcA5sTqMtKpBvpVhMgkHVDbD7UCFwAEHz",
  "key4": "4fCuAJBv5iwXPEFfm4CxLRDFJpbiS3j4QAtBSjFNWNfvFCptiUAW1vu22f2mcu2BPVAQQ4rJfjhvVPUHqZLTTnCn",
  "key5": "4ywdijTHTDnhQ5izTfsEmHkSpNBfQ8D8TcgmMDHYecDSH82NVH86vtPbQBburCweA6bFZ2u3ri4txgcUj2Grmkwc",
  "key6": "3gQpeEXn8rELUYHyRPQcrpqzd9v94ihrh9bkRSFfeMX4WUDJJ8ad9YCgLpnvSdbZZNTcNMB5YWtRYocG1sY57Co2",
  "key7": "3gn15MtZwTVhoPZdfaNNm5jrCSXyWAiHPsppXC6otrnYxuGy2ALmt2YXvQ5wqmFq1t1YSNEcS2jRuSC795yrgJNB",
  "key8": "2kVtHtxTggqNKxrzwTmY6mzZcS6fMecyBDqEb32Bn3Q5GVD6Y4HJDooUhP62N8mKWf7anYpagHxZmGPx4tMD5KsP",
  "key9": "3fNFn2zkbHa4bP3ZTs7biUY68JfpX8TcRRFcDYKnBZvD6czStLxnxRTRtkuQsRFvyVacmtBYBoGnrFQo2xb2NfDz",
  "key10": "3zkc6hugeANZiX9fcSVr8tDWJgmaS2vWcyDn1W18GzabHfsk6EgeuVaqKvp3HCz8iDG7hgYs5rux6jqQVFYgqXqu",
  "key11": "GU9fGJEZqCXgP8LfC1XsrNLei1HZ8Hzx1k36N48RUpzzEcjFRxyu2Ub8Fj3LTiGKnn9ih3EoRYbRp4XsACKs7Q8",
  "key12": "4R6iKHyJNE9sut6vqa5YJk3AN8HskaXY7TwSJ6VkS288DgFSyBn55EUnBhjdaU3FRhdg3y8HrkxUs1rz8iB9aEPL",
  "key13": "4owLTNtsTV5nWDxemkUM6hUty7jzSxtkX43YkhCHPvC5CL24GEAd7pQXDzoAHZCqH28bymBavYR5GkNKeA2aLFP5",
  "key14": "5d3rEkPvfWdrhYvCmhpGuLnWGCj3g5JQCKo3VunYRUDhc8DGqK95ADYxiJXokT2XCf7PncUkLD2WSU9cvEBnUtEh",
  "key15": "4taogZ5ASbxGHpWgn1eVk7gV28RpX3bwmN9DaKiWHCxTpmcPYcX9SH8EpTRakmzjZABt7PsHQdfeLiSdgeYh1gWP",
  "key16": "Uknpaxk1ucnTKeNRhwB3iZht71VFQuyn7GqyVqMkizm3vGeCpATcSgrfMgxVDRFSanV3M86j7dyyTdsxQvXB9ms",
  "key17": "HuJ3Q4RvWu6NFRWRCTn9wm9KnmaJUpn2mSbJzwTUac8NEWVN6iAETxSR8KAR2cgU11ktYGv6Q7SzE1SRyCaQuhq",
  "key18": "38RHoYrPWTSC1we2DeWenVVV69JAbZgesXQXAM7hk6qnz46FYsYfVxLLLUw7tt86b7RoGU1rMVRy1vbaBH6Txf1b",
  "key19": "21BEEb7AwWXrMHsYwCQnoBFQ1sQu14dT1VqeaCLFim5VLpemYR1snvkcAjZQk9iApwQHFYxXGkSXJw5RNwFFPkWL",
  "key20": "2ccKZCXXVa8AuA7P1Eg58nkWxLFGgFEvhbYVr8SihKTLSbvU51vkmgGvyWZgmfvJecMLCwpNKDjRknLAjqViJwKE",
  "key21": "5evc8BHJgERRLhKavHqf554fNsGny8SqWzxCPMwnmWU5P2MUvum8j1gMkQCPTdJqdXSm4mF6VfTFsV6jGG66wmx3",
  "key22": "5LMebXTzXUWTBcxMD6QxbBVopWVE9qthyriMRxRsTAppB8kytWvxwseSQjuefSFhMfpvcVpx3skY9QbqKD3Ve2j",
  "key23": "3gTnmLN4H1K6mRJKMbUTLtdigQQFVbq6B9PnJmRmvGmKzRiT1gvmCT7Er2BViAGaQ9r8bdKa3B6ej4nhu8XzgVfu",
  "key24": "yQociYdZhzEqppsYGVLMAMRMn9ynuLVnUYrvcpb2eJpTCdB6zba6dcGVAbZn94T2RpdwKbZGTbPQ3DqE5mBZsU8",
  "key25": "34UNo33LtS5UXfoL1mBzaWhRoaEd6qASaCAUdr1TYgMq4Hkn2Xwnew5GPNpPJ6mB8xYkT9pnNY3E6FG9fB9MvS1W",
  "key26": "2gGicsXA1pC9MroBvZbF6hMjeGmW9cpmKHVnxPPzERaeVbwrG3XD1LMnoGRgHwXpzNqnMje82xxqy6ejEsPiDbam",
  "key27": "49BiiKnbSf4bkUEpAv2NJKizdpJxTkjtpExeisypDZNYC5KrqFE5GUfECADLWMHKBFMqZUhs4A9sX7JRV151hWBE",
  "key28": "7q74TdijrHJP2DDY9apvWgG7jmACpa1hiyfptB6wcd1Rzo41dVmJ3Vto1vPmskAyrakc5ZDrSzSUvRWSePYY1FC",
  "key29": "3oHzRJwWiYaSw7udSV4TZaztP9tvA8MQmu8XmNa3bA9n6MZUbjtU4QXyxxpSDWZuDddc9ontZ2gt7whLAMeWesAN",
  "key30": "KoLrDdJ8FhxmQUBVWJBDHnkwXt7g87FDDC6HEyC41oAmaJ9TgqoaQCD2zygaSi3MEc4r1TdbGMB7GHCYKJ4S8Xp",
  "key31": "47Uoarzff2XbHhE7swvHBAdJv3Ctzd1xwGRdJDNJzsjNQai3MFECKqCfd1jDbDX3WGX9pxM1QzSCCD3SHBpmQb13",
  "key32": "3H5BU3W2voudepNBWPdt75pcpUfz7Ut3zs7wjXMjL8giSUcNyabocX5B8UNCuEhMnH5FGnZm2pWFqF5o8aPyfjPb",
  "key33": "4raHJrZvB2byQetmTg5j7cJmjuTtLymF3vUr4bQ8Lrar4fVXQeQpVDjnTSi1j67GRHp2WuXSzqJPYtdmb6kiHA5V",
  "key34": "4rBugm7ybUnLsVKWeX3FWdgPCjoCfi6RFrTi1JbsFCHSsqpfVy9R4si2bd8PtnVZw47VzCRX98Ew3BVj4iviSsh2",
  "key35": "4WyUy8mFzQjtysFuhEC1KYP8s96vgAsjmxa2kpmCZWR81H4TtVgLPFog7EafYX896XEs4CXmEFbKWiEXwrCCSiec",
  "key36": "37oh3RbLL9R9D6WcHYP13677FA9PLJ9uGJku4gA7aV6xbE6dtFDWzUpgHaJ1PcRaohiaPQN6wtXdj5mPWKPK6VKg",
  "key37": "48QEFopPSd7dPtBXQxWCn2qW8gToZETA9RWDWuMG76f4d8wMk2XUbiuw844snedmUFhA4mYTWrkCgqxZ5LExAsah",
  "key38": "5CNKknj3kaY3Yr19wTpAwSZQCsBtyMJGjpDCQ4QdMR4H7tY3m5QM6TWgtidKPDAFaAuzLcVP7U746EhzPqY5S4pC",
  "key39": "2t7b7D7D3jUHuLEozfbPnbA6eALWVpDDkWc3tGTkasNsv2sn6svjodvNzHwin5nDzZmM86kaTkzU9hiCSLX1SAB2",
  "key40": "4nAxWiCBhxzdXAcVb82y6Ldy5aQt9FE4FcUyd7fwzh9J5Vi49VRnEJfdGvPgxhpvMfLzthe1C2Z3mEQWv914Yp8W",
  "key41": "4BzXjDr335pvgwiNntMeDTrNYcrJ8HWJVbipX7GqBaS9DY7LtBhP2JBv9oSWGsRZRHzZVMvoHXP6MfJMp4eHEFde",
  "key42": "32kTHY4BGbWUSQMbFnt8sd7kY3SS2dW5DeAQoqzDWC5anM6qN7ByFD3VnaiHKfbxNB9ymyYTD54FJe6eSxh3Zx9M",
  "key43": "5AhP5L1BYyJPENMCVYsRT859ZdnTq7fcX7V6VKTQatZqZv9T6cNtkR8C1FmCU5xYf8rWFAqMuihbFFVnZXf1MUyz",
  "key44": "4JNaNwqu5Q3uz5EDDmjXbjEieXE77NR4tj3EbivGy528B4HqBZsrjDvNwdjHuCJ1e3izxGMUPT8bdzHQvrvRsG3G",
  "key45": "3xgBD2VJYwyo9bC7h2vkMozNH5DRBcufSZ6cdvaW41vdXE1biur1qyfyTippQ7DhEE4R7RJiemXH6mzzZr1mZQuF",
  "key46": "UqrHtyT2EMM8pkesDabJrRxPFCqTrUHPtqjx7SKyJrhABDgxKb6WfJ99Ma42VJH9UiUPaAKBBZZjYBCGfbSiNYX",
  "key47": "4K7U1toSKD8zMusKoeoH7dKnuviBtdWLTg2cm7sAdm86YwWTxHYMWZzShGC8d9KHb6AEsMxLPSQx698KHPCszhe9",
  "key48": "2ugztfXdDdPHyugHKARbzGDGS2GqA14MCeB9SWoxWgjYGh3MZcruTXVE69hxZRo8JJyFSoWYvuScAaYaKqWGFUuL"
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
