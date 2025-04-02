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
    "2PDgDu9DGLuNewtjtjGtusi7sPnUyQJtJjJAVub7XUHqmrNLMbLLgDsueM7Sy9f4gX6ZbSrrGqoZV4p7yNcNuKiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iodRnzGvKaiRPtVATUdUEtnwBx3Sa6XHkxQ9YXBgdXQePxsPhg52RL4TXgftUZtKDoMfnsQGV46KpeSpnGqmfRq",
  "key1": "4fJ5aUWFhYzk1imxrzJxzEsgHKDVqA7pM3v362JXHpKw4THjSd1BX4PodWQtMCboybd5Te5zj4vC6fXfcvbcHjDE",
  "key2": "4QPzo3bUZepskrwsj4X4yAiWfeG5NqpoLFVsMR7tdnRi2338mMpFHbhT2rxVug57qiUZtvtNWHzDySa5pxjDuJvu",
  "key3": "4LhaJ6hQwNPL6tvK1TbLTbcHUgNgq7DpE3jfvjZxXe6vNM29PKfoADNso7ktmqDYRWsSsATKjSXL13d6ps1uxAdr",
  "key4": "85bvoveZVfoYe4jiakzpmHgN3Jd276GmkArt1BE6WPuFvzzzmK24GUMLigcpBMaASGZoFoPGTpRNuzDXB6d6ht4",
  "key5": "3euSnBiXraKc6b5hDTACinJf8XR1D1SxHX41TKHvX31SUw9K6AL6TWTcxtiyawCKWXbX8Upyhd3XvjbV3qmUp5L6",
  "key6": "8scZAxzisLtWaUrkHcs6H1Ngn9JGqox2TKY8CbfjvqogdNRQUkLuAMGcvptBq4REj2WK2zzoLBHtrhyGxmT9Cgs",
  "key7": "32xHbiZVSMwjqdTZtFRf1Nmtu11K1DJJQ4Ayu6PVTwMwfaaJdZhmFgcnU69RtRos413Kkt1ifxthp16msZQCFL89",
  "key8": "4cLhwomB9QBNs5iYTf2fLFPbdZbVtxd6ZuZAfJ1u6iixyNmA8HWTewDBsxBCXq2KotbVQgZuA2ZyYrX1jAnCs4io",
  "key9": "2k1PzGVo5paNMTuFiQ811pV38ZMsDrfCoK9DCkkJ9E4Be866VcbQS64LHvdBCx9P9gPT2Sixee6S9zDTSYCE5sxU",
  "key10": "6fRAcXqaMbnbSFiyDm5467GbRe1dqmZ32W3b69NDJN9fsJrHdg98NP44FZT6Y7F2J53W65DPnPs1Fv24GjtxWyC",
  "key11": "2QyKMLDxFGsMbsT9Qcw2ec5iCm5WJoPvPLSqjqPEtnZ8ZGPuvRH3xcdkU17cCz9S9SD9YcPpRFT63vPrTgUfbUUJ",
  "key12": "54HDHipxvDneCwjQHYZHbk4geCYDXh1c1UE7tA6tr225BzwBKQr6SUuzYaUd7K4QD7im5ELL8ovqWvzdaen2XU1G",
  "key13": "2a4TuJVW2nQasgUPTaanJYy4XCHEe1bsakig92SbXvammiDeJWrxRaeJr2NXehhhCR7LPj698edu6LfKomHKeboA",
  "key14": "4YFw1gnFDQyRFW5fo3LZpfSEcaHZ2sKGLoCfgTo7cr1ASrJpu1j2UqbbHhkBAGDPvwEuHJRMkddDPBg1LKwhsmJC",
  "key15": "5feHhsT3tVVsp3qgCf4o1WYATQN3zJ2WLqhHTonjhNQQhgsKTe71sWGWLaZsqPakeRej7mQDtzPAkkooYaECSuTo",
  "key16": "4hj1jaD2UQcN68iJoNNRLhmoQGARSdFkkfBjxsKVPzkcyCmQbdrJeq2XVo4ZMqnEntN4ocM6Btfg5CS1MNZGU6sG",
  "key17": "5AGd3umzgJ1ijCf21VdSSZkC1zttTNH31iWrPoi6ku95geU9E6S3ZUzHLotp1D821Rpa5eFAELh1DmapzP64evk",
  "key18": "VkBwToSQkyMxhWZ68Fg1pRHY3EEdDba8754ZajZWRqyUzrJsTDX9KhhhPGgb71naCV6jm4v1bCGY68t6wpGe2kg",
  "key19": "kAzmJoT1vac1fsckUTWvFGZv7R1KT2uy9w26gaPamnbFfKeK9SXR5RPi4XyF7d1X1YybVn9hoYMQ9SXAV9mvmVR",
  "key20": "1VuTDpUmsu1eXx42YV2bfoWR9qCbR3umxCHo6vrd4vjR9aCMFMihfxWQjbZV3vyieayPM5QQEebkg5inCD6WnzK",
  "key21": "37ox7z1is167WBCHL5vLD3QBkiYcr7DHx88q2nKbjTAYzSfBPVhD4wPGYUq8PL3dguNSKvqnB11zyGQwsWDW3jMm",
  "key22": "4aV6cRebQesDJGLf3kJuSbSvftuiiBfpDCic6PnyAkpyFctVxF3QGATKaQFvdZFJkNum27fXn3gKBAdEmJB53pjX",
  "key23": "MVxcPnikMNcfGbCD3YfwEDBHctidUoFFqTRhm26D9ApV3vWQWcaB1XKJTDo2XKcWeBih3vKrrSRQppd9xe1f3ys",
  "key24": "5DHNcdGZ3BC9QsMtLCjEdfbUxVFuGKjtsEerXqhqE6aJzFQriRx51CrJW41JxsfoKHz14yU4ezU65zqF8cBtKK8w",
  "key25": "pDoVkXcmczX67pd27EHX4X85x32avjJ6xovsy2so42Ls1kz7FQKtZ9HUsyHDP7Ccr2ovMMyKtQVK8SQqN7fAqiJ",
  "key26": "2iRyt7J9TL6DnTxszA13dxJdo6ZTGsuXm7ayPBpRFt9ZcDRtECArGLLU18dd7UtMghLq3SDk5f1Zptr8fb1T1C6T"
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
