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
    "V1XX1bxkRSuSkPfn6naHqfE34WHrjG9portbHCJW1L1JqiNGHXScbvCXBFKH6i1Hz81SoQ8GvhK5iSYSC98tU8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58qpUTDDXwD8xA6hPjqih48qiBtMEDNCoEYUmZbwmYx4sLGASkpuqFrK21KQrBaUNMoXeNXWoxC9mWHmsR6RCGvW",
  "key1": "tAxtFQAQ2vaP4hYSejhNUCRoo3w2pEXxLsZwNez2ceCtWNQbPiH99ut59EaqHXKeBStCtyPm4PXpqW1Fk3Ucd4c",
  "key2": "725eNgzCd44VNL8esjXurwqdbYbYR1i9j7FpvPW9oz8oHaXZMnybQkMqSdcQ1HLtJTHj26LcsqdoJN1CBdcDm9T",
  "key3": "4bpq8FoUzVT37DPaChmxYX9GaBfSnfv1uF9AzGZwRgnyKfmU5X3YCgFmjNhChukXXR85x6irJdxx119XLu5XxSeX",
  "key4": "mMQb4adV3HLpkgBDeuHvofxPkJRJUhBEcHBV2GjDcwKmkvS5Yah7hJKinMrkkQPPmaWW8EEes1zpCEr8HLHvfJn",
  "key5": "4PUg1m1BMfZHjwnLM3xA8QNkvYq6UaA5ZxYv4Dj4TAXwwh5ZVLBhFKpK77vKVrAtLjBM5vwFmYUp1Dd8nCUVFeuE",
  "key6": "5yTpuvRtLHZ1Ewmb4fjzhVXJBaY8qPvxVLrRhFCZErhZDVAkC78gLh38hLHStx3sTKurYNzyyL6yHWjw3paMpK7H",
  "key7": "536YoBkF9Jsn9GjbveEUnDViqeuz5z2Y4NrxNodwyDWLot6JA3xqUNzggWULyLs5PNosa7PvQXmyb6XAcmybJnSJ",
  "key8": "3vgPaBhW1CSuzd97JoQYPDQTNZwppbxBERsBw1ytsQXFFAv2K4pAKmpk2GZYGkq38TfZGjyVC5XRQ5KBn8PeTQ6E",
  "key9": "5KEySzh6Y9zbMbKFHeLUyDffwdvDExi5VRBQ3y1jngkcjuEXGwVx9JDiPwtazzuppAAje1R9nKmtd8uzptKGvfVW",
  "key10": "4NE8Q8vL6Pbb1EECH1gH5DcMnMypYghpQhbFRfYAL8DWgu96zwRuqcqZqzxJsrUxTgDoBFt991XhnSG1LZis4ZuQ",
  "key11": "RemiQWkMiLPuASw5Y92dVeR9ZF6AHF5RzVfaBNDUjAxFu8Gj1brq38UpMFuXhLyap6sxprc4y4kBv5c8mDt82TY",
  "key12": "2jcEdpEobYc6gyTHEVTt9wq3at2kadhpLrZvoXUvQqwA7ybNhBFJ4Hma76mSDBtSyd95SJfUCiaJnNnqL4dJKQ6T",
  "key13": "2VGhsowMP3kvMvVF8nTS16cbFuC6Qg6ch8xwdyn1CrpUyYygJw1VgykEodz1ZhwfZdpJNxUcUADmhW3U3Wx7McMZ",
  "key14": "21rceeYTA1TfaZa6dsJCEejUj7HTBk1s4GEoXqbDymEPrRR7yZNeCnFLU9qhMWh9Ke35SjKY3RZpeyMufSuS6TVS",
  "key15": "ZKuxopyCUWaZiyjoUVvZmtMCsR1cJnDd2mWEKmeXXY6j5vrvWgbmigoahmhZYMeb78qhH1977F2TnHeJ8RYZVte",
  "key16": "3ZuytGG63jEDn5fyEzNpD8B2t5irzjs4pjHK3NDPeYA9t3Vc45tFxTJbobJeMn1hdc3nXmsiy8SEToQGSRypKiQZ",
  "key17": "2ARxHsGmRhCrt3dS4wtJC9kvSLyY3PmBmFELjyhzWSMJcU97JXDS13RQxVNZZ6BkrY5ghZ69kdnnFUJFaU3bxh8a",
  "key18": "3Tm5EtHELdG33r5QC5wXByhryPzW1RFKT5s582oBmnZDREAiPH8wYoam2BJuoUa4Ve4JynpkKEzpEASVSXzGMF6A",
  "key19": "3neK8pG9YLyPbsfNpP8x99wrDfmX8VmX6Z9sPHsGuQ8YWFh1o8AQrprhikKqsshkQCdRFW66AqBPLZTns4a6pB1o",
  "key20": "UXVCnHjc2QE71D3DzUPPUQwtVQdsQCMWQqkFN6zoDhWiYd6223uB34j152GE2NSKqPuS8ZMWLH1kiqrsbowFj5D",
  "key21": "3Eytb1pM8VybGhfGURgMpLNFGxrQSwWtwPj1RMsvukQdcRdWgG8nnXgVwn2HLvREccyRjvdYoNKWnuHf9pWk69jC",
  "key22": "4Gcy2PDo1foEhDhc5vawsewUuLYnJvsqRdLLLk9ykeJb4QBRucsDX2PFsdH9h5Gpbw3M5XWZnaEvKrY1sXiy3cj7",
  "key23": "4yU3QGXr4xRozRnvD4ioZd6MEZ8wRhwWVWKomSwkkJwWADEfouM5dvVVqB9zauKuBN8bwoPKsXbhd59Y6eojwtQ3",
  "key24": "47rMnXaSRTN2goycYEzRpFmwsdrp1eYxQ715qmA7EckJDNCio2LBbLqB6vkD6zyc1M7DAkp4WDkA8Gw6LXpve3NX",
  "key25": "2NVZ3HqT6nXA1PYz9jseLkrER63F9pXSat24fVJ8edRnSxYhQUHcPyKZ5pRXsrq59SQVK6o1mPWxYAfZti1WJkMy",
  "key26": "VApjuWm6E6yYTRJezH2fkPKmQ6QbCQeM9qp6aZ1N75vA2yPXZX1KogmWGAkW7QQtjd1ZVpe8BHdQvAdXyfYY5dW",
  "key27": "233hGAfu9JX7iRZQccAHog9dk2mRdin5nj7oBx3HbVJrezSZskfC5qrDfwTYsFtHXiLMEWsygDf5jxBazdfE9Ppr",
  "key28": "3CaZgx7YEUujzcSVQuDdkV8weADkT9ay4vXkToMXrszAkq9HAqdfKncxSmNACu9DVM6FsLaKfLJQg8TKjHLvdhTQ",
  "key29": "3it4EkpxEXw1Az9ihxYejfLqjY2pNYj35NsmpUfdc1pEztPZG4mmZdhKvuwxjeZWLXg3GWNvYRWbXffz59eKFBLe",
  "key30": "4RUt8kVJjXEynRKd1Kgz3odvtzW1fjgVTS6nb3RnnvP2ytyVwcw933t3YziKKa2SECW8MQT2LPm7vUbMGocww831",
  "key31": "5uJAm53UjgJdEy2ZV9DeuSoS5LgTrXqm6S38QPMqUDQGpcvUXAyjiVSguevpn5R4wi1ZDtdcTJUbSUAMohFgbr3S",
  "key32": "3ftFeggG2USM2q6h3xumM7j7o4SFKJuyvXthoABqKPRfNTvez588HfLkCCJwkewGmakgEtLgzCCFYcK9y5R13iDn"
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
