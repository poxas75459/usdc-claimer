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
    "3vtPwCRiipwrxd9eCYoEkSUg19XBfDKtUkTuVyyDNvWw5PyKNTBi7wRRsipeL1FsRt68rY1SvWdFDLdQ8XME1xB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AvUgPRk53Kk5huXfCtWqK3BdGaMnwEY8tWm4HLAuQtHGv7uDg8cdaDtjGAfCdyYuSo8RK3BQ27PFTuDm7dky66y",
  "key1": "Hz33ymXBEE9KySwW166EQd2i8ZA1ZFL8eKrtNJ7832j8SDSLa8uZ5W4LkCgtAfqb39imgwCiX82Se5UQhXpQtr9",
  "key2": "2eAZ7qK9pm3eMWvRTyUn7AaJb84RpSM3nQDRSjX96uNqygsC2Fb8qdLkEfae8oQ8tXyepcEwQHpF84gYnNm9NSQC",
  "key3": "54yY2T6nJ1pqG5KzyddHbH64egksJU48vboYvh3iyVbwqL75kMdLionzEt7VBEBTzuSXQyHFwKk1ZuCaBNcmhGPQ",
  "key4": "2YsSQkFbTiy9DY8GxutWT61FofV6tSDVpXKKd9kAZq4x9WkxXUCpSkhMV9w6mPZmgFEncQv4HzzeNAV54aKXGKyd",
  "key5": "5i24HxJeDoWWK68t5HDNkWq7EV9De5NqPuK4hN39cy1EictkBkAGESeGeFmvcDWSvuhJdc99xaqPSknQbPN7QqnZ",
  "key6": "hAaT11aZn3X46XCTSHTW9q4QNNbDX6SErX5ZernvoXyTEFVaQruYncJH73qqSTTujKP5stFuc73Fj8CTAPnGRaH",
  "key7": "2eFArjhb6ZJMqhAxxEJzgbw3wDwWgtzRcSQpPyjDtMJJxqPzAYm888wKWa8aHbJHD5fcwojpCGgbANM2CcKC7sx6",
  "key8": "3Lf86yBBZKMmBuVqxPpFM1Zrd3Vjy2gwcbnMPEz9CfLiLz81gTqco65tQxATaqoFobWAV2RZrGcfHh4d32c3u8gV",
  "key9": "2Cq4ayuzrd6BCBXhqTqBDqR89npJ9Cf5726yKfVY8dqdHy9dpE2oeAw9W1UWdWonq84YtossGbYmHC5MWACdSQry",
  "key10": "122y1SyFBdDhVTP5iGGpzvWoiiYcN8PJ3tPuD8E5dvDYYCrqDvZX4BwoHuaPa5sivVDZm1qZBucULYEhpWnsKirU",
  "key11": "2RwcBVbxHs6ckwmu72Y51Nxkn8iRr4XkHnMRBv5pJkwYHEiF1wXdh8jaxwnYnsZAGhY74QYnonwXR7UMRmmyk2Up",
  "key12": "4Cr1x7jquzaPCqciYdewqPXM4NLqNDYQpJtAzENjUEgMx4eMCkzuQ2oWwxXmdUJzxpAT8pkWigGEW5HLnVk9wSDS",
  "key13": "5mdRuMoy8EoWYPe78Da4DnM9dSybJRdMPUtuwvZZfjuX4TZz6foeeaBftgra1UPDJxvDif5NaRwFNmyaXyzvsAZU",
  "key14": "1sJewy7dxubnJkMsiDxzztA36wbNiBhLadaQFcfSqUYXDbbuyp7SL4uSvtWmyakYeUpHzFxhVtinaYs3VkMWeoF",
  "key15": "5udcuoi9NRM4Xci2Y9FkdB23BiA6xfZWwNkxUDwy87yaCC3QnTRQBRJUtuQSyWbdUbipGV1WFvcknRDpwVSftkhA",
  "key16": "2YK4NKKNZWgkk4a4neh1eusAWsaF3Uu8rsfAe9mfEF5qX9vWNFDeNRGLXsf6RoybjXjncdPQFvMiWLTTfTB2hsNU",
  "key17": "4Mb7HXiYG4VQFb431QqKnE8oN8zMMVR1AX3F2tFaRZA6oxiJuiZMCn6hM6L1mH72nahCs6rgL1rbPhjPjMEfhugV",
  "key18": "5ajwHNRRQVELZDHgrj1UbixDmjJ5jufm9UEVPGy2hmwNsQudQNYsMn1LS794wZwM58kt4owFy9sSJhgJq8KyLgfz",
  "key19": "4AkXEQkhj8deMUdSYwTBnVCHvLAgXFSdqTK8VoHs1jUtPFAaA2xoWuLDJKGbsDDMgYx5vMxEaNvdVjcaLP4vrZB8",
  "key20": "3UcrRBY2UGvzeZmtKUXrxM499e9GR3Y6oqZvWAzh4Xm5XeqtK5yEmdJ8RWTe2TLywQdQL2mYAmSaCyuwb1yePRis",
  "key21": "2icWmVjUnoqPLiZyUZfL5NB38ve6tN2y14jh53EK7mw43qTqGXNETJBoLmXewpWXpE8Z1goYd6Mn5fw4gbgN41ZM",
  "key22": "JWfkqB4sbpuSVU2KGSG6EC1MZYyRtxX2dfDFzBrZp86Jh1LGxRrBARXd9JMdVWMkgizVcdL9Kpb3TG64kdeUtnD",
  "key23": "5cfn19pAdKjith5NXY3m6qkN7H8n6Mzib1kEPuYzVkx3x5zeUxpMkce7erVZnB3T2SwoPvQ6rAZ52RXknNWgCDKC",
  "key24": "5rPsvRmxa5A1rCKeePMrnZWE5dU54SsJwQfjT6uoXbtWAKo6XWkgdbZKxKFbtrnzMgYzZBKUjhCin2B44Atsze5W",
  "key25": "4yAzMmA1eK7r7DuLcCHH85AKvdV5TF9aZ9c9SMk8AqyExkq1V6NZEPzQr1mh7BaBxh2juP5gCafvu1syQR7JzZgr",
  "key26": "4EXptWo916hjgCuqR9smZ4c1wJTPEaNffnwMjnd29cNArtpFAkANRJLH2i6qKcyppZYPKaUT4Jpfw5cBTgpqE19b",
  "key27": "41vmiBKtV9TBPf89rdRHmvZ66pqfg1DyUazASZpZTtrphtEGdeKF3S3QCvV8PF4SfqNsjppzzy5wEfPT5puWUAxp",
  "key28": "7VRNB7GDhLn6Mw4pkhs7jfXw33CZybfhH9peBPXJDreU3TNTyamdHvStQ8H3F7w2thGUx8zc4qQw6WeGT8SPexC",
  "key29": "aZJBwfwYnZ1FPr251KrqXh7baqK43DaBHntXPPzVmHXgMdMDyTUKkhdHCJzUSd84m1ecLU7NQghDUCxdSt46KmZ",
  "key30": "3Q4yMSzjNg2XJCLP9Mf7LX769wSozhkxzCNEbonvYAqp78mDJwS6wrGqQfJpPLTjTvYgd9j816Q5gtoRgmeeq5M5",
  "key31": "ByaLuohKd3k5bubJc1RXtV2hpFYYYF2aAeTs6NG3jgwjwQidzwXr2yzjQMikMcNKhThpsQaTneeHLPuptYHgDaj",
  "key32": "49CyeZw18FMTdc6W8zS3Mf1GvNkBD73pexPsnCpSZzGDo16PvywdCGaricxF7SW3r6oXghRdQeorJUYFddUAqGz9"
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
