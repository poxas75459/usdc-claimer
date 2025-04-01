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
    "3r4z63cgn5aLVtDGjknjNrG2NDD5tgaSd38TZ3BxW4JzDCU7Nb5LmTC4ysC8XhB9RZRWXK67PE4BYDkc619USMvY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TjVxVMMzmi3GhrG2edhcUkqJbx6TdDemPGb7F15nhHvrxzoaMiQyXyKDWduhGwkVqpuQaZzG61zfssLoVbwShTd",
  "key1": "5iDRDvzCnj7ExcdSFNydt69eQWERFADhsahhPvx5NTZptVwKaaBKFK47ty8uK33DYuo6qxznp2Yw7rt95Y48kzht",
  "key2": "3xwTso54sqLLApJnqstNUUjuUNjEtbPyB9mBj6b1HGqb3KT1FEVyyjKq4vXRUnKEP5xW52Wr9Lnywx2msUCpdEM2",
  "key3": "2b8rawQMBLobjCVxLHsfAwn1dgw3PaGVphPPAnhKANqPL3drvNrYSCfDF9q695xgviFvuzFu7QU4SELCypRwRkxe",
  "key4": "4pFysFe9hpzgEaLyBiYTy2XWJkPChbK8oquDvTHdbD2N8e2cy95uu1ARqUhNB6FXjnyVMS2WQhdRTUE71Pz5LLYf",
  "key5": "4XzGtE2QEbV88hPJeUMRgdcvBrvYQDWVfDerBRiWWMaitc4yVnnaXm2gcdV55pvnL5Wo5LWs8H6axktVnPF73Wfg",
  "key6": "4VaVcETvXPR4o64rLgPSrVPNNrRVqzcHAYYjof7q1pt8t5AWqLj31AKqkVocqQQvbwCLVTmZeRGqZhEBNrB3i6GZ",
  "key7": "2MrPU46dXvBGvFKEH4DzQHgkCTHaKrvtWmfpGxVh6LvrBc5FpMHpyFsDXJzxPJp2RHW9hXzkgsd19o3fprfs1a9m",
  "key8": "27YKtL7TmePmJZkpbxwnmTgEmvKSadjNxDEtc79GNNUrE81uVyKDibhVUpAVm51BvzcSJz1Me6uv7zzeQGhJoHN5",
  "key9": "5UafG67vru2HXsec7urK8sqKViCz7qnfMHwXWJ1Src5XjvPw9UBBEeLjBaLWgXydctdUrdhqjmGkiUJqaAq61d3K",
  "key10": "4HgzppRdNDUV5Xe8tgULshcEDJyPX37PpTxMYUctA1KsF41N4P3F5WNnp1dQ9TXATzP2QbB6YgPgWuSvvAEJ8JzV",
  "key11": "5ojzCt5a5dSx7bMzrCbxYwWv43XZBrptHCnxgRgxo8SMyPbfvw4LniPrHXGS9rY4j94qxeysxxm5oZqhD16rMrqn",
  "key12": "2xP7AsHbCUnU4FSZSjLvMUtwQ52YVYeydjHRo5xNGFxvRjjGr29fFanUb1wzw3X7THfPBqUPfnsPJjpDvomPXWX7",
  "key13": "2FHKC6MkxosdgghVjTL3R4cGowXiitwK4pELHT5JTDSncUPvme3RLPFXST7hKQD5Rm7MC4NtrjEzabiGvouLDc9a",
  "key14": "Yk4dgJ42LeCyuhUnKMhZMJtZYByjNXXBpqqPSBp1c8FkJNT3bKQTucA1BWvUhSYE7kMeRNuFZEqccvyLai1c4L3",
  "key15": "2fpPZyK8NQEoP3eVUdyYntZJe4cBFksw1cJRVuh8V1Zbidqj3ac3qfyZFcAvbkPReaCWqUaZ83kEZpdoVDhEaFGC",
  "key16": "2DxvTs98ELsgQo8EWqr3d9nBPqgxUXCoN2xqxDmqyapTa8PCwJjXtrXqtU27bb4v8SDbBHwN7mQkamLqnuMk69k",
  "key17": "Te6tvvDWdrQ1SYGJSg48t6KeJHZG2Cx9WGq3XZYdoGdExQPGsuX4xiAbYoMuyRMQiYr6dkthkSSpoYmtRx38qZd",
  "key18": "4HDnvUb6WeooH1hCkv2RGhoeFikcLsMkrLmoqFV8FCP1m2HvK9kzssw7TDF3jmUiThjLH6n8EfYrH9RLBATjx3H7",
  "key19": "3JPuyjRyuk42TcMYQpg3gM8U9f8686YbpNxxTfC2TUV6f4pA2twkYwQ9CUyH76DQkf46XN3bT3cN4d6dMYoP2hXY",
  "key20": "2PVyVgn6u62eG1pP42AQ8sGARMKXijFwLgfdNB7V62hpspyk5KL7b51YeZjFZp1iPQhSpzcWRLdUSVvb2rGb2ZZM",
  "key21": "38mWXfZMGpLUe6ken958LefcNnah1DrP8it1NWcncL6MMpZx8wzfihoCnj6SMp5Cv24N8g7fobCKhe12H5Eiec2n",
  "key22": "4TgxegXBmz6synXjN11vFQY6GhZZmtvfpqPfGpZBWiDPZ3DoaDPhJ59c4eidQxKkSVqQAf8Yx5ZsMxZ4Gf5jpMGt",
  "key23": "4LWYGZLZ9QnGVwMSqGaZtCFKARQxuvD9acQzkYC4xvRW9c7zxNqwLLU31r4LkHeGT44xQhvtXkAeAWmBAKwtuxSr",
  "key24": "4QDT2PiMnBLHeqqHemwsPhUPowCd338F3yBTTzP7LxYshLdBNiucDX552JBmpN9xExPmDkP7Qy1W5yYc2hjBhB4R",
  "key25": "3HxH1m27BNzmu6V3WM6GBYUou2zSomUJV3zUEDw4KMRc8FKEEUah3z8y4iPqqk81P2szo1Qd7PctjByhyB9MQfR2",
  "key26": "3BHQPUQqE4HzB21PBVNJHfBJuiFLABtp2N3nckEbJjiPx2qEoyBgJ9DhV7SJZoqi8kNcupXWRJ6BMcC2wEFbmSru",
  "key27": "29NigRAx4D1uXwgrznXE8UmdsoJUhgYZfxoxL2QjWRZ4dMJojJuq7cBEUzXkycEbHJJx4dNj9u5ekWcx3r4AGwe3",
  "key28": "nLmzvLVurHt3gQ4BH7aRRK1ajTFqA7j6GauLsZp4wnZqWYG94qbcA4v5bacniNAVaQ7Dfz8EAn775jRfvLmRax9",
  "key29": "ayjDwYhkRiLcx7bjKtkCD9Pfn2pXHDABiYcyg8pb578o5GVzVkDttSkFRaeBQncjBHeustpwgUoe9qd98yHzsGT",
  "key30": "44fc1GGHnpGKfRCgq5dza25tve15xKmvcGb6xsH9aMTmxhkRL3ahqYm474PzeoXNvBayPaWY51sQ6VTUkzrhvAy1",
  "key31": "moPXtHDfmf98Lobj2k3zrWp1nxBGs9eAd7Emej8dJK5xp28uAhvyZtfuxhRq9PmGFztv8npeWh6QppB1ADEB7QF",
  "key32": "jJAAYUEFmDr4ioXzBK7pxarEcmhFgtyExAophPyaTtaudEAj6jCDnqvDbb25XTNW1CDySPTebvMBe3tcoYVGAPG",
  "key33": "3gCGivLsk2cQY7cXVJVxcS7KkcPPXctohvSLhYEJmfs77mDjnKyHm2gmHPYX3JduXhGgsRWMSGdKmmRVCLCALT7B",
  "key34": "4rxjzg4aJEadYu4PtZhaERpAwkUgNMYqD5cyGDuBhwqfWkyXNaMBUWBxKuuTGyWsWM9VU3Jdq7FiTzRucGmPYvEE",
  "key35": "2YMYYdBTJ4TVEnk1JebnVTwHTYSfJNWiHEjUwAcMuVJWNTt4rkSkWnc1fRkC8vJ19FX2wyeSRniWiKe2bcLT5rbM",
  "key36": "5x5QW5P5doZqfzUJzpXhKvLyjjPHtRGZZ7YqnBkTeFgZFhzyGyNBKqVK2j2dsFVm5LP99mpSKocJN6ynbCGgGh9Y",
  "key37": "4UHNZtyPPNtJSgPgshJirRf1W59mmsqf4yB1T5RaqFKf79UHZtDa9b6YvkgxBv7oZynzu41EY372PqxxS9BWdmJA",
  "key38": "5V2jjuhrrdTveimDQNwSJ4moHVXEPftkCyqm21NHdS2BGjzR2f3KixRQNb3UpUdQ6bSwq4Q5RiUqjoKg11cpyway",
  "key39": "4ZAVx7DY4Lud6vCy5z6SFhj35zMzH9rnoUjgUtFCvab5qQAnZZvAVTB7ThzMZiPDnUiZGEPLW56jhE6BvJ9LKMxC",
  "key40": "43XeU9wvKQYCuKqADJSMig8d7Vw4s4RbqhZydbqzAFYYcQ3VAxjahoF6TBDCrz1XM4BoDfJRAdDoa3SB2E9D45tk",
  "key41": "Sgdx6BM1RvHsWogTLn6LBcta7No9c42Dmh2UpvCYbtSSXJtGDFDTyPgDWAyrc7E8hm33k1cNFk8DnNdYhCxjaaj",
  "key42": "4KziKhtkvkyKVzfpTCFTK6SMH3r4nVrEZL1uVxjKJPuMsnojpKCd9dKyPKekH5xYshMkTdZ5DoDhjk3CCtZ2oKYF"
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
