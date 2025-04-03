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
    "5akXxn3yMJFUzFzhAQj7A3w6r19WZtz9KbKppB1dWoJdJSSj1n5pFHDDzWVFJnAfjPwTwgvZQqiopG4uYNQgCn2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vMRf8gsAWAgTy3qz4DGBhF5Ke5UEx37wcwL7koF1mHbyVTVGR8jnY9b5pVd1QEH8KBBKDQECqBra94tBHiXLFVs",
  "key1": "49Me5qu6wDCvPiHESp7dfCFci4PeWS9giG7Rc6hB5eGvihFiMx1L1qgBvmWuEcQnWKZKy9mC9YwLBwNdDkhdx3U4",
  "key2": "3qxnVj7oWUFbCXi45LYo2a9D56Gxhfg5udW8gTnaMzyVeXkH9ptU3b6bCZxktyzxLBsk5viffiP24PxTB5gmAYWi",
  "key3": "3DmPv5JQFK3vEicyDqaPHdS9qeofP3p8u97daeXSVAT9QSNeH5rPhU6b97URkWwJ5N9yZAjbma7WXryhcuBYwDBx",
  "key4": "ysqtk3Kqm7X8agZ7ZoH3AL27bmR6TmwWRmrYfKYsPvaWnRz3AnK7dWxgEWttgvfFAyFtVvSsbo7BwAj8jf9yF17",
  "key5": "55Fu31eoXPbGR7mU2ihUvYPB6XzoTQzmyPMqgoE7cGeK9fmPr1fqYRoTPMXjh8mBqA35PZm2QGKE7STHPND4uS2U",
  "key6": "5G8qEFD91JdqqRibkeEUpppyAdDtSNT5otiCFYA2uYxv5d7uoykxmv3YxZcTqTigN9XKP3VBbW39NTsbfUGFJzKD",
  "key7": "4vbrsGTMjxoFCs1MD6P3qjBPZzRMsEvX59duLz4wCC8z2cEau3Rnmi7PUNmrkGNZamZ4dD9G9zVo1TfyyrLq2EgR",
  "key8": "3StUyvyirrX5oaLC1UwBgYZd1mwTsdjYVrjYtdz6zmQgM9wL9GARhowktiinaR2Dq6EZBuQp2hmSM36ieLoG2Sup",
  "key9": "5Vpry1QGCt64aehvaciidgJFuNmTD5CaZ3hmz5nFv1a5ANECoLrfvELvFQTKih2XZqEshXoHDSEq1AjvT5tnzn9A",
  "key10": "4bV8MhvqspJXhmznAMwrCWXGo5zCm6fFpMRZ5f3pEibbLGRLU1WDYXiBjL6i9THuSxPFkqaDDsGSEfc9C8TJZ4LS",
  "key11": "5CDNXQes3uykT8Z2xQVkdRCjj1qCyGWjJPH7FVQUwsMUK1JM1qPA8iZuq4FkJuq2sVpNUo8oepVNM2VgXnqyZYvP",
  "key12": "9sB7QcpHFwHz7ULKP4ATsoTpCy6udzCXoJUP6ZR2uSmd5AEArKg2uDk7b4yHupxeGuCupk6n4EYjwyCSjBHpE6i",
  "key13": "4BZmEWdGzdg8FDf6GhY5D9cANYrBtcK5kPFZakfKd3tLyXYigmwY91CzhEEhq81HNCWAADkwbYgoMo4e6d7zY1GE",
  "key14": "2wxcf3i4w1xjbb9n6UohZX8vYdrPr4enSnBpkENsuwGM5kvpdKGFA4UpUFZVZnJQ3qTMbhajUnJtdHGWp2DB9xo7",
  "key15": "35cqy7DVvXbawRiUvVanWnAvmQCwPiJAFeHdiKZeLHo4baCYMZzvjP2bKXDf5dP117ifYFQSsNAJdJ9Q7et9ex9v",
  "key16": "2E8K3rCR8GaCLdSdXy7TiST1NM64ZqJ2EyX3YqVWtCxL7LkS5KEFD2NEiKWm9fknR8YsyDvAySJiNzft61Araf7B",
  "key17": "2Lmy9AfYbkb17g6wgyRVEWDJVmdyXjYxw9aAmwyt4TSKp7YDGtcnyZCD56ZpPqLoaVNQFKuvPtWLpD8YSE64q5Wx",
  "key18": "2P3raX6HpqacBfPrTwvfgEyNQ28B9YqEVVHq878GtEkMv5B6siEAMUskpmRdwULq6WSU2inGdSZQnnG2UA31vGSM",
  "key19": "2EgFuxPfNuW778oRafJiRCMKEkVnKDxoxpeSvukdA5xucmZHxfHwFbrmZBeMX2JEdQwRwGXcpnury6SrwvNbV1g6",
  "key20": "64hem6r94wiysse6aG2KgKZyvePpz1kzS5Yjw1cLimxTeaHFzV2ofxLi2YDbSZxPWsRykRw2P99NnUBxrDTcGwRV",
  "key21": "336FqdiKUfGb3GRtMV2aaQhMyMePBcXobg1vz41crCKLLCWgxcNC6i1FNDkGVV11HBGUf3XoKEQPFUWsLmBCwqtP",
  "key22": "5f4L39F24Yt6j9m1ozHUacWbSvrC5DoBv5ZxG7tbGAGdSUEDXH7Um8CJR9iq3KxnDByaUWcdhKhF7Msj5Wtzqg65",
  "key23": "3NzMNm9H5Zry8dLgeL63z6w4kvSn8TNcnd5rT4kRvfkxikHbtb45vgrw7KAUfq1gVnw9GCEeNcRpxwe5VymunPEa",
  "key24": "5cy6e42U3x7LhHzLRvX1CcgbJn9cSsKoR2gAi6UJfFatyHrywZZztSxCxPJNx8W4q6nJehhEnk4Jd24vh2e792i",
  "key25": "Ljix37m16GcZx7zsx5D8Jw9rTTYkiUQByPG9ZTem9iaRpnnXUVK4mzNkgKbsGfbnqbwzWuvgJygUiYxi1gZcdjf",
  "key26": "GT2GBqnFqpsRaxPaPtbDcDBp6Fs8Gack3ssW76cmGcmxspEW8tx8w36xLCuGdjja7LLk3tvKrrepL71iM1d6bGk",
  "key27": "4kU12ioai1X2ztrNRHNwevaPYBzxWd4P4WEiXp7yDsCkww3jYQZ9paCrxz9Zxpemmmr5ZCdUpQgeuMQBtu2GTDMj",
  "key28": "3932BwBa7BVmYo1ntDiubdatCFH7xEHRpbphk5K23nYAG9vrj9Zpx7MKPdT4ieTY6bDSbLt31tLvcS5H4JoixfAU",
  "key29": "dLAzb2iMgsF9iQjioYGFeZSQXQzHPXfMs3NdsdhfXxoNqzUpsfAMsTfDzr6KGCkugMwz8efGLV4dGiNQwbnnKHF",
  "key30": "4Sz9qMnsX8dMtyUsz8QyzWQzasti1NoNSczasEjJQpGxfg3fr1qH9RfgbpQRVdPDbBsHHkTcWwBVWgDCVtEBpnm6",
  "key31": "3xZCg1md4xW8iftQmYJ1B54PJ1SmYUu8xMRiSmjrFifQMu6stVFxS6H8y6Y139D1PcqzJR3FkPMp15Ko2yrfrc7G",
  "key32": "9RqD1p2YURLNpTbjeXCm6cAJLbeGEXhBDN8XLdRDqGBkrKp3LYhysdfZP8Yqyd3z2CRjNpQ7VWjxFd9wr7bLMZr",
  "key33": "xoDt2bftorSmgcgp8v5qNiGw5mav61b6Yomm1nD8jhzJduMdZr7pQnwv63Bu1cPy7EzrJ4GMMbB8VqpvA4vQkFS",
  "key34": "2rfsGU7h1Bt9JTmqxZXMhZLueTy1ZBC25VfRAsiqLgfHqe3NnLqRhw96hCM2Xd7pUfvYtam3UzeGS3iQ6WMdeUk3"
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
