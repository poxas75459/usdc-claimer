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
    "5jdUihZnxWbh2jhKwLJen4d8KFo2aKyuTQjWJq7MTbd8adTJmKJxajrR6fizqUdfa1pLrcmvbw8FU2FcfceKbvFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G5fWYbJ5QfdJjU3N4FXCjPmwvJc3ebt5UfsKLLHkeT3hRZ8qWiEZ9RH6C5mzHvSfEjf4JJHSfEcnRsgKwvESi3Y",
  "key1": "5SZKzi9CzS1YKSGRKuCFVkSvfUmiNaWGT7ALZ3JYRjwj54fH43SefaPdSb82ZVfNkhwSPRBsPGqT8MhGprLAjmtJ",
  "key2": "4tJRQRskmQypY7brqvJD2s6BabGPMtmdr1av9MjmiX3GWWed55dQiVuFXAMG9SBRLbLNjMcrmcrfGoXxWvR2LK8t",
  "key3": "oNqnsPexyrgyMtpBJruKpbBGFYD1n7dCHPsq48e4yTuHFTMuh3rKfeqw533p1MXa7m12d9AotGQEGPomiw1TbUy",
  "key4": "3VeUFU4puWeN5NimneVd85Ktpbwc6vrDZyEaqUpKmQep5tEt7stcCdchx5LKBdSLBMWAXYvxd9NKKxe1g7mBwkga",
  "key5": "2RJHAgiWvbb3r68zMzNLoRkUuFX41AKPYWbnqpW4SJZMdpfr6QFUPP3z6f7356TfUReekidYwMEdV5m6zRk6LbX1",
  "key6": "2Don6AFmMjV2xKxQ26A76JWSWbdsNnqWL1rXrRL7WFirTVCS1WYMJGufeCtSoqYRWrMAy6P3EAMWFguciMGRpYde",
  "key7": "wz1jPUuMKYRQo5s5ommezMmRw5Pwashj6f3V2H5pVh1fgFwmcDMEVENNFL7o1C4z9KRMYfU7p3iHLSGjQy83z1i",
  "key8": "6pEU6dEfUqG5A7AWxkkbUEhVJy2b3vr7rvJ9aKpNnNS8pevKUt3sKYsAYTJgSaX3goeJnGCbucZh6VmzY6a8Ybc",
  "key9": "2Fnp8483KjHkqs9hV76DaTv6KNWMbhZXPVdbyMp2mPieYYcdHgjGUp7Y6ms3dCh8kZrWpPtyc8CoQ1j4JjvQg5WR",
  "key10": "ZhVmsJvbF7mp2STHqUVCC9hXMmnFoCook6ZQ2hKcZf1vU9eUhXe8mB9Gpv7cwTnKWvvZLHtpL1rr5cmMakNmdiS",
  "key11": "4iFp3ztCx2Lo5Fr3oGUvR6rmE3qJzNUczq17xb99Hxj9UFtsYeQbPxi16GirhrsvJtioZbZuMLyrKfDKHbJp9SB8",
  "key12": "w3hxDHXpq92mfQWpHpS4RtyJTjL2hMtof1LZXT2dTuqvkf4mPzjRo8SqUFYKcuJk2gTR96r4GPq9GiFD3uZK8Si",
  "key13": "5PJ4Gjtd3cgtvDTWLVgLw267hYN8tv7n37Tw4MyGW3NqCgp8tm3akpdacmbbUPKDonSj4mJm6Z23asQUqVHtE6RR",
  "key14": "f3XLZyej9eFoP7E3WJA1wDhKBEtNESMeFrHN6rVjbVvWaYv7vuGwmUo5NjBZXUg1q1Mb8PyQDZ5FbMfdDYErfgC",
  "key15": "axHp4Tm3Wch4AwC6QFEGG6Fgu2jerN34huFwkxmNQVEFX8B7ak3GmkWGavCgTMJwz472T4FApHzM6Ja1nuSrmTQ",
  "key16": "3Tgmtv6LmTDVw9K19D4pNDuCW6TskrY53aHYsSDPSpMdavdJPGcqdx9tBVMxNqD2ayGfH9iunRj133NryTCaeyib",
  "key17": "UrSZZKkLvwuJmsHg8RQ3RxrjSsVPUskmKMfNa9MqLqBBJN6SddgBCNSPzDCTysDmMRuFQ2hgxdSuk4MsusiPT1s",
  "key18": "4Qg9ZKQ9t385JKF3nuiYWdwNjHFbd9SswNqv5ndHNmPExNe1n2D3pNtxz4jWZ6Rbe4DJ5Wr4sLeQHHwEiyxw4dsG",
  "key19": "5GSDCQ19a37Ezi6k24aaMnQNnfChjZM2596tVvrkSqJz1x48z9A46Y7Jik2uW7FF7e1h1rgS2jqyAVXJkAWMvjHZ",
  "key20": "3efAbobFaYGK7wHSRkjkEuXQfeATxUVp9Tf1nkabFHV7fY7vLwdnrnLCBeEmg6jo9iesE8DeG3dHhm96MRojDRyX",
  "key21": "isMbWkF6anYLsxZiUesXnHmLMRatQdU8EEZmfjJ5kiXYs5ZUJNWFsg7nBiT3bTGoMPn9xgUVDMT5hwAax2rc8vi",
  "key22": "3boB7vRABc1PQ3ZKxst2ku9AeH4PfKuBCjpyW24ew7RHR1qpUFNq8TMMHVLGUX4S7ndwaQWJaKG1fcA4x7gMsEgR",
  "key23": "2p6rPmAgTWa4aRr6fV2VKDqReQDbJBCsPLrcxkMpL7aRFakSGkKwBSspZCagAvocHCoCVi177rY1FxVv192hjMSu",
  "key24": "3rpM2Mbhe3qRFbktgcqSa1tmArEfRg7hwkhj6CWnb6MxzRCQ4JaEX8ZXETfo2MUtXvds9ACATkUuUSgE1D2aN1qv",
  "key25": "4jYKm84XsGa9T65v1FY9DHpFQDMdiBjB9Biscfxgpx5oT3f1fEGC15mSuP2afzeC2Rv9EGGySNhdYueWjs9w47Lu",
  "key26": "uwi9srfERiD2JYHkqWuYCXDP44qWgmeUcFX5vsPD5GHhDcz4Becq5vo1H8dhd8McnUhdTmdvqMx4KDNm186Ctnc",
  "key27": "3rgDtnq5Ken5cRtVUDKQiqxxGAdrHegSCmKroxaVVJLizu2UqZRvAfckYYTn1JsHmE4ct13wHgZpueR9DwvSCWAV",
  "key28": "39FWyT8iXXF47CSBj4deoBKKuEigPUDpfUfx8KYgzpdUHCnX9f2Q5q4hZ1QL746Y1KmKcTeHK1KBHrJRnTSBKX5v",
  "key29": "XnKRN3A8FfMcGPFZ8tzvtTpgPJkSF6o319p5FdtFVCbsEJoXtwZB38cVD5sXBBPRe44T8FEHtLgiuqCL8tHJCuk",
  "key30": "2oTDDjNaCTTqmgrS5GzCLwYPnkimHrQZAug2yAKra3nbysvHwKLC3TDcLHXRBWgHM4modfpK5PkxJhdgkveQ8VeT",
  "key31": "49pepve9cK8CiqDhwN9M8TkUrE9Mpz3jxtCnvYbcSwMpGL6SysTdHy66Sfg4YZ1drVSSi5RYSz1rFMatw2tgVA7q",
  "key32": "2L8ADHXv3tfxmapaQdVYHXoXYzcTbrX2FTmZsQNMPKV4rDCpQGy8mgpYHDCAtRheeVdrjZFTTgXPLaTgnSiKitAK",
  "key33": "3UeXNS2vJPJRKDXSos6jyMERfFt5rWNaEf3bCAVrztxKtmvxpmBGWSdq47aHcthGf35W5fMo1MrVddyLcgaPTD6B",
  "key34": "4oZQEmdMsaK9Rwp3TicP7nxtiJE79ddXN3iD5qVoEAZmxgKKWq72b842igL4iru2SBrcKGPgSKeAtfdvpwG6EfH5"
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
