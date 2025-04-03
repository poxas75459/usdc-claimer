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
    "4wmKWnFvvnnwXPyS6UBi1ft6PcyisBTETvpaXshctLhEyjrcQ9f5NE7PptT1DSffwbqmzQ7KiW67ZJjQM8wmLVWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wqaxP4yQY7TzFoSg1hXtu3DwUUgvAHWV7bUCyFZQsTF3DCzHq9Ku5kfFjWHyg8Qix8NhNnnAbCiKx2NRtEzxeqs",
  "key1": "2WJUkwmskMMDBLZpQgTuRaV4iRyNvvbHFTjYuHb7ptaDS3dnyJaSrVhengMUSD72tubKwjTectQ9T8PyAPZrERiP",
  "key2": "3KyUEMUQBbhqqHoZnZTncQZ6158Xs7ir3sNc3ktQh5AdJrC3vdEeQncRZwCSk8uUsfyLqpm4nVWBVfniGPpEJS8Q",
  "key3": "cPAEXwAF2vUrpbmHgh3tC9qTpbcRAtXfd1FjBZqgrnjmJ3vp43zds9nakDKwp9Rtijv2W1gHhc3WnSpcywbPAh4",
  "key4": "3H6Sa7b8JkKUjZ6c1RwSyYVdqtzCJks6Ganp1zrSuPh96TGWe1NWpwyiJJHVU87T2bBzt23H5RQgzMAUSBjC4DYj",
  "key5": "2MbS22QcRiHKsXwb4YzjAozoeui1Pg9dApiveHqvtVpGUbshebUWK99VjwbNgwsrQjeqn2AfDnXqjtLZg8LnoGrX",
  "key6": "4iszESbtkL4e9iZB8skvR3JZSEfVT8AVfSnSnkZGE4WAAY9ACDPQzV8ri56GX9swWoGMt9V5chqUkPhfG88dQemG",
  "key7": "2MXPfnZqHYDZJFiuYXo4n2scFzAGkKjias4tpKeWQtDE8WvFHTiE155qiYYVXQJhCXYmTEPoctxMT9zkh4SHtKam",
  "key8": "DBCbFk8oSRBKEtY2hD3oGe9NvSee5zSqsnzLw7itKGupLkQccGFcBzyAWwSkXaUUkADSw23RW1urTBuAvxdMj1Z",
  "key9": "44xoVtaFPy7QrLDAfBZaqDzGWoPfMB9wMtic75JF1DR8G6uho8ZciqECi9Pa7yFiEbCsmDYz4DQUf26TkFraoTEh",
  "key10": "5nSy9AiqDdxmz3H3YhNE11U2daWR6iHj7X5jZwnf9Ua2sLFWnvhnerqKy6E9aASxzYwGcovEN5bCpavCpFkRZvcn",
  "key11": "63L4n3P8PmD4n1Y1q591uSyT1GAvM85ed7k2Ads42AjKHbswtnwXPGvd7QwrZYiYjvxEVtXM2gNRuYdSKz5CcCPy",
  "key12": "2TTQpkJHLoRQ3RBixThSW3gHgbdkRoGda2otnucpS9R5iB1xjkM7pYFGMy3wkX1h8cestZYkYY2omEsweng1LLxm",
  "key13": "H7wUVJJwAFdqqpSQ6ejYJucskvnVPrdvGoKAJMGsPn19ZTkr1yN1Kxob7H1swijanvWnWjzq9BRDE7GJhpmuidA",
  "key14": "4wonGk7c36iEVy31QJd3iY1FBFfzmBmeCsDXvQKSD3rRbwVZS4fM7Y1bf5soMtpcgTrQBLSP1iHVUhgeJjPAL4hV",
  "key15": "aChdqgbAvLARD1PUtD7GA6knaYoUVnDtFEonsHwVn3b1NSA7FMxkkwrSxLCDXt8yMSyKiheXYv3jfnvkhdckWLN",
  "key16": "YcTnCw5UfpFaruMwvcvYMKCTyXqxPe9tTfPYCq13d72UJggz9DDkqfHwKM8u3v2hdCyVDfkp6YrLCDVsNeKVbon",
  "key17": "2Ud8Hroxqmp4nXvbYba6SmFmoeW6jnfdjH4yRcAjNjnEMKpx6557WbEZ19TwJjnoRmki3MNbgxt6Cm3WSRVEBKMi",
  "key18": "9JE3VGZEyWuiGdmuTfyk3zFWPpG6ve1MwrxMXhUYjWBgguFxgFExArFkJjiWmivkzLsWT66L7MALLe6Hm9VTyPg",
  "key19": "W4PHrvy6vYNww63kWcjiiKVCucjkYy1Q1c4U14AiRbb4mmCfzXaUyocpRip4YevCzbGey26Wdm6VsM3CfYkprBf",
  "key20": "5FXvvYDPdN59VriWepHHZb2A7LWQskk5LMvW2cZDdWGCzXiZqxPHcQqaTPadrqrK5VrJ4HqXdVF4byCiJutJusUK",
  "key21": "3Wg3jerGrpaG364Dcvua9bmpAJGrDqD92LMeFBp9TdewQaNCYFeN5YbfXPYL4wwqBmJrgVfU9BLfu3ujN4koTveU",
  "key22": "kah3PdiCCuXeyqVJkA1zZ8egqkmNWJJrE9LVcZ2HVh6Gh38pPpnW4NMAMaXkRC8NsGtfZBUmca3TdoDPfYBddBH",
  "key23": "61wtXW8J6Dti4zSsr52aVfpehBLQ7gKAnTnBzYuQkALmZBtMv9SmzDvyghARAf745yCnVdpqM5C6X8V26chTcNM5",
  "key24": "3bizQ2n11pimVoNRShsfKVJqFK1rdsFg8XtCcngVJyZjQUFAfqLbrJabuGyTwkUdhLtrHKHPVsoBHJJt9bpmgz2F",
  "key25": "3JWNgUyn7nseeHV8GPupXSY31Y9EdY8u2KyZfFYBpCbpusZp7ZSYY7DPtRXjZ6yzaHtcxdEWd3baL3PEWbexXyqb",
  "key26": "gVj21ytagkz3rdjjqjH9sbpRTM4ZAduwSrUm1XngnCsuKQzyCpde7PDXRfdBr9wAbeNFwSk6jZqpG4DMLDZZCrF",
  "key27": "5SKHdV6TSHucSpm7tRd4xJ7kEHav9nXUFMkPY63rrKYm9ubXBW1qJCtVC4azhJgvVNPPnvq5KBN2Gkfp2J8KM3xh",
  "key28": "YyT2J88ebR7Dk5Umsau1SQ9jMghJTM2XFa7oAr53WU3yiG2JiChJVLSc89cHd47jXQNrW8irhLiK6GrVqs2mtX6",
  "key29": "3f19sA71aP7ARJWWz4MFHGe2foF4NvvJxmPL3bNk5m3Lfono5sCodPopvrpqS3PC6ts6h43Zt8RxvqpUHq1WUgTm",
  "key30": "3xbbDrByRUh4UB5xZsfizEPsWrnfHqF6GuvSJoNomxqnNFhw599D6DE86rR2dwrFV8DyVqBUor3c7cHF1icSAdH1",
  "key31": "3qkvHb7QiaVti6GbZ5t48tHavcCGRd8gUDydhNoBQrRHg4Ej4P1Yanfz6dB9rxysM4TEps6ipFq9Hi2TiVRhxC7f",
  "key32": "5hF5xsQs2TEMeCVLMZQZDTAn6PAJvyXaNsSuME1q3RMUGfote4mZHrAS6WAEBYRxoYUbHwGRiQQhtajtJ7kyv49x",
  "key33": "3qqxeEDqLKKPmtkBH8GkBNk58t3wBnuHammQFgozPqC5eRVd5TBAUJn5bDsQgWL1kGKPHD9u2vw3AbhMmAFUVDyp",
  "key34": "4fbBD6xD3cc2EoxCChkEH25ozLunemx4y2veJEK6U7aR1Xj6TK3KMJ5iUEoX9xPLY1sRTMDqVh8AeeikhDQmPcmD",
  "key35": "3PC6rDWTHzWbWkYXCBqymwiGFa468umaXYr4DC3s4sf3mCHeq1wN6q4spKKn6jRyoeJTfuwzHtivrA6tRGozQA1F",
  "key36": "4fmjV4j8cvk6bqQs2DQBQz5Xwa1qcmyLpVp9oSqbKurvR8A9E1SgJPARfzaVWndRPgwhbdwns5f48QriC3JkE5D3",
  "key37": "4AEwQq3QJvomRrfEBDQ9dPFWh8cz9AEEpP4iJuywhKsNWZEo5d2W6g46ss88LCBwWaN9YJ4qCgW1pYGRqJhwSyp6",
  "key38": "4JiDNr3pYQf8FhzQhkxg2MccBHgBEKuoasNJAkCY57X4toHgD6DoDu8Ek3HJ1M4NXhcETAxJYZzbk9PsT6cendZB",
  "key39": "5GnjYbmS8y5iDdXXAbFpwdnXAbNi7tUdpM7McUTCWY5zxxe6w21PEs5Ydz7gGx3C5gH73GE3xQw2uE5hvpFBJmMi"
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
