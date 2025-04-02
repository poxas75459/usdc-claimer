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
    "NP8TdKYV8eEgCtNt5gPqMPaQD1csPHzpXSycNUzThMbcoreii8iq5Fufc7DTtnKN1pV3gATn2qbYR7uLGHUj9Nr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62jHGP8nayymwZhJKVWwEuxK2THTSF76UAostsuvgkr7LKXw26SR9n7zp1fivqXN8YZkG3y3DFfHJQTSd9Fnx11S",
  "key1": "2C7438PBfek78DoCfsbVUTdXEbbV3QrqJ3ZCshiNxHtWtRGaGj1CcBZCtLS5nxH7o9upGPuCRDuS2KifkF37TQEX",
  "key2": "5kZ4ziuBQnEgP1vsZQBbE1mUFovsZTyXHBv18xnA1AUNqzq69SsNq8VQDY86omDHZ12xXdjcM189ssAHbUQsnsno",
  "key3": "29pwW46m6uwHCHMqKVM6ydS91oYSY1a8ryJoAQkedKx1UepLz5sqeMiDiYPJpYVzehNJxFAQQKRkbKU6CqF35B8H",
  "key4": "62d14E3p82RuJvU38QsM7ZzzCoPwmr2dghLg96Ng7Rmv1bnySSvo75UdU8QNHC9WL2njS5HF253RU2V4idHG7A7R",
  "key5": "561W3eS4Dgn6hYjaUH96oaRTNWetCtNwwC12mqDgrRpKs2xNzthWMfz62yke12QDM5cVXeFt6fkADxvANHxnZZ3H",
  "key6": "2mScohU8qzdQYxjyZd3niyuV7RNPuQPcMNfFSkDZePd2ZUanpxqtVwfjKqXUpWg8hrdoAUxMdg2cDTm8PUrdUzCc",
  "key7": "61X5TrAY5PCrB41jDM5NrZTkGyTirR7sEaG6tkiNUUDPVBsMbVemx1bBc987NpQATVpCo6vE63kVS8pfrAhGCAWK",
  "key8": "5UnuteQJ28KaF6HSaXEELdJCEPN5kpSG8phVEYTnkLeJRnGVBiXdU1iyqywuSHoafQZbaggm28KrHcBC8MXwZbZe",
  "key9": "5ZBtRGH8ipuS7ZPni9QiGGPo2JRCZ68gTYHkCc7TSG8T2ufFDHmnQrZPja9ALMrpk6juTBD1W5oKbcWa5WgdNyfX",
  "key10": "2z9VBRxV492fseAdTjn1z5rsQx8QeR6oB5HFvhJUL15rVGTeM2qSRBdVX7fTyFsWxucLR8VuFNYScToiULM2qEe1",
  "key11": "K5B3vk8evKq6aYNujgiPr8SkeUGatwH3oEXPCSDzqWNxG554ThAJiMR1qYMEUPHQpkRdSeJ8Qubd7SfJFqgmHBB",
  "key12": "3CN8rHNUXu9YpiQ24rfDdDUZoKAwdFQ5QP1xf8X13PE9hzw83JC9qFR2WjyCZm5t3D7jdpvLoTSryB7SdHi7CPsm",
  "key13": "3z5MWy1XoxPyGZLa6HJx1WHBFCmk33scKuN3ZZcAoErXNXh77kCve5FjLZ9u1X1fFpk23WtaddhmdVqnKNixRybD",
  "key14": "bw8UNoUKTWdG7Jrk7RXid8H9RecBunVhHMrRgcUFrqJpcV98ytMWh6V3bEmtdgJVBgu5ZujouECueMpnopDncEK",
  "key15": "4Vuo25CD9UDJ4LyCsZzoQh91h4biSkLjNMFLXG4BpxBJdFWSThhAzGZGLriDfpnmHhdoR9zTXwaPAZ72PsuZBfQp",
  "key16": "2jjt1gHiBDcVuY4qQeVSSwVpn6WmoUgHFPwn9bxVtwbvb75JknxMXoWUsHrotRMX8RVpPjjg5z1r2df9Jhi7ZDwa",
  "key17": "HFx9s5swFJVTwHr6QuaBNQvbDJKywRMH27waEMPCuTAaRoBCaFyS817U7RYMNZTf34uozWovB11gb1QwbCd8KLE",
  "key18": "5dCwRVWDQRDwSF3uZtVc84J23Ek5f9vRoJbVwUBeZ7hYpj3MQ9eTCWL6Bga2oDkBch3Mcm9FiSHjQLSM8F8ibsNy",
  "key19": "uQFRWNT5rQxobnguefrqL5tU76b9EsiXGV9cBVKDxMjLBCfzupaJGPqS5DiryLf9eSqm62QUMYmmXNquXTeZaH7",
  "key20": "2Ky8wxSqvJewVT752ggRAyDqpjeXNwojTb9VCdhHarDKoNzdkEAiBc9rVyFtgcbaNLUD2EN9rrev417RmJykLyx6",
  "key21": "3mN5xcZdffHig5dRJtiFs6ukyV43VaoiLdhmzmXdyPPH61hrWPDxvuLhr6jD4JiWedwRW2ii2tYE3m6zm3qMQmF4",
  "key22": "YavEPbzqPTtb2haYCid9wRbPD8cnfQaBAsRRNUHCiyGr6xXeXdmDXA5atkBBBUuMRUSvuCLJSLh61FkuEegymAW",
  "key23": "4UEynfP3qAvHoqNGnvBQJDynq8PekVed7mFuu7QumgUimeehfHc6Q1UJw2tu15jAecR5ZdhcRhSn3NzwDAEwhG3j",
  "key24": "5vsnwReNjDEKwkFC7J46WrBnjgRTnwD6x1XeC3oSdB1GcCSk8pD1BX4uHKiRE1gSEpoxrHwDAjyxZmNdXyu3Bhhe",
  "key25": "4rJegwzHAa4TqgmvFg1Hn1eKcGwBqA3ZFeDC435pVWdr63GnT3H4w5vQoAvemheHbc3Xoe5MAj2A62q6D93vtgxG",
  "key26": "dxaXrVRymu3Aef4jaGhQdTxPBy6sNjwEU5x8H7dXSawQDwdVZYTLEST7TXjTWkgx27GZ14jvN5nNrer93o4NZva",
  "key27": "4emj1CXkYb7Fa5iL6ehGja7XyAiQumc54Ueqakjy754e73UYu1bDADDrsRAzjSjBSKeJH6WBzEYhJURvWq5auvt7",
  "key28": "3nWWgJCGtTFvZq9gSR71Q6H9Bhhy4ZMV2b4b3fRdEKDac2XxnDYuuweGAs9CNe4dBMuu1CNRUi3L74jH7BZ4YAtt"
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
