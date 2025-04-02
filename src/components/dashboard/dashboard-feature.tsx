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
    "jXdfw9Dym2AGvaYu7y4WppWVnpkyPsWd1BpsFfbUBBvXWsH5fcLetFj9Y3eb2sNLnAEvxFgiKbSbVyhJzJrLocu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W2Qzns775PK7vKuTbPzUSSMxGiPZNF1hB1s71VJdg2rvwEVrrB8N5KNvMihBN29CpQ2ER7F37cxLthN5mJooi3A",
  "key1": "2eSPjQH7tdZDMgGzSfuB2AWroey8ivNBuSY4q6KP96USc45CHG34GJnWpt5eLMe6XmCApTCU1W9aLzsHLJMDxULk",
  "key2": "62biaf8LoYt3mC2fr4FrzWZvTeBq2xYyP8ZRvsS79stAYfVDfc8W7gafSk9bFGMMMWkau6hHYp6gUys4kwvC5efw",
  "key3": "gtESMitJWx3t5cAcn2AHrw34MXZdACnSsXp6jFHF3sDqA5o1DdmUPVbUdbezY3s8n1udZfPs5sFTVRh57ZTL3CG",
  "key4": "2JNyg5wfALGyrNvvysNqKtVNdWPUQirLytx33UHnbJzuDJAF3t3LmDiGHMwcGeKzVSnH8poZsic3jSpaEJRAoytu",
  "key5": "2x9RGQE9T4ypX9qikmPXqixd5j46xSe2YrersVzQfghXZ83JkrVk1Ri8G64xRLm8ekAjUBAjFkuQKCsHPRSnge5Q",
  "key6": "5R3LmdQGoAw69Wpr1X739FK7Q3W3ecifHu6fDdUneYqUis5Repuy42mHh62Z4sqUzjAufJm8sq1qAQFpkrHrcSNy",
  "key7": "3AAtjXWKFSa4SpuUBUYdmYUVtKheGafAR9hMsPmekQVm7XTrhApsSfqwX3jFFUx9pZdESaF9NEsBDVs1C96djqkd",
  "key8": "NwzieFr1nnBspsaKkeEuTDJ4yAXTjLpih7LJawzBUvrXHUxdX2bHcFVFaWMfe1ZAJ2Whq7HvRo5S1ykkZPkvEVt",
  "key9": "372RRut9rafDvRDU59ty5RNGeaLJHVY8QWosWkFgKMsMuP1EunqAu57FwjNMECh1g1o16VmhHxbibBH4Sui81pPX",
  "key10": "4bUMzJbBoyvrNRnuJMTjFy4U3Qm46qrAUk7JDRMYZ8a6rhd94neAymzqKgZbemZoYDgfHYtW6m1bnhDrQof7j343",
  "key11": "5JA4JYDCPwJeCy9bfwY3Jx8UuzWtWB1tYTR7EkE8J5ecVpisiXk9qqoSoCCuyxoHbVrUv4ay82fsCwgFwBqVgMa4",
  "key12": "5FxYrHhzLhLXitXHDYwQ5KS6YLx2dER7ueqeVZHRedQQ1KjRyuMo6NRvoxRw4LG1PEAC7XWAczEDAwLH3wort2m",
  "key13": "495d12fYPhAYNF9q7Je8F6zvj6ARYHjCmoPZfcE4RskXVErDbTTpHLUNyzt1gapFXxG7jsUoikWiDM1bZJdvigET",
  "key14": "6TfPSBYJwNm2fyjYb3TH5436Mt3ERhw2r1z1FL8uqpfjBnwxCjPLckKDnVR3JXdqUrNfAC2afvP9EK6SvWMu5Q3",
  "key15": "3jQ9Dt8PqvGHFeYFddKDResom5Jii7Zmrw6HPaJS7uxQBmAjeihfHd4hMFm9FvwJncnvCByhGD8sxY2FLsxLJatr",
  "key16": "3Fqy4UB6tBDqqRupjFb8cxBS6oeYw1AtHyRr6CWdoVgRDr9ugVUVjYYn3oLuzhNvbJepLcbvnZs1Hp61PErsHFWu",
  "key17": "3Tap9LumcNwU9avifUKVLoqeyKHifiiNVyQ4VXfhdthWLYsVmGTYnxjGtzMRUrc816MVupzdnpHo9sajzKbdTnpU",
  "key18": "5SemvSR16wXhu3z7B4JzocnWuKvCahRLXdC6gsRt8M3tHo7UJA68m8Y7B9avEpuHzGVGpKNN8iiSxLNfRHYMQauV",
  "key19": "d3hwtLZpZmXYqDgo3ys9E4ASMw7EeP7Y8ozJ9gKAai6fKP2YdLvpXhj3eAzsnKmNJhYzm6sRurzUwPzUPFxohgr",
  "key20": "4pPdXt3KMf69gqrtxPL25q2a3p3KRTXAVS1Tda52A9xhaRSG6shBZ2REBRSU3E5mY6qJUhxm1bQ4RK5CKYYoZfA2",
  "key21": "2PpBQ7sqpzSrxt8cuxok2AhUB2FYapbaMT3pjrA849t53mcF74yBZinBqvZ9EFMAgHvuxWWPSZbQEyQ6EU3oAhae",
  "key22": "4xPsuq4UGk4EKhvFRSDjn9XGeppQwX4TKXMhHTbVbceC9v6CWvi63btNKGRcSNA2acLuzwhAYZQGteCdTKLqXxw1",
  "key23": "34sQbjSeLNfibwLTjf9iAvjMZDp44af6mrn8BAqZMGqeTMUT7Mf8fqQsDy5Z6udNgzu9c9zAQz4MbNydVVZ5mFtB",
  "key24": "35QRMpVuTQAKSRgPLTMCoJKKWQWmPVVuyuMeck2zyU7JRLCYqu8pXoexFewbz2da5bZcjS7QMoUfNDLGnf47Yd8o",
  "key25": "4omHNhDaVfJ4sSKn8rseLYja4MVcSNkXbRhRJyLTcMMW8azcdg6nb2tq4AKUnpKdF9U9NerRcHefpjKmJR7Ub6Cq",
  "key26": "5y3ebSLmrpASj7Cptw4QAFnXugedef87gbVFHKN6awGXkQN613ebSCgkoxBUfNvniV3Z6VZU8VMxMorxQyCxM9nb",
  "key27": "49Sy54NiaDqX1DPksZt4cu9YcQNt5TXiPVcjsYb8LGfoyiTFusL2WWaFEE8euf6F7k8ZgbPyq5ajV93sCvJnrH8Z",
  "key28": "d9chZbG4RBHMrbvDioFhMGDWhVRhFKHcoWssUqE4PpKmDyPThN9T5wps7oqcQiqoYtLnhEaxBSAG4otndPqyJZi",
  "key29": "msFGj4kVwBvrJfJUvQJCDq6zHw9fDgrQfVLUK296n1CisTyy7px9P6SYrPbfUUgSMnvr8FQVxSYAxbeFWTvkVvU",
  "key30": "5dsBpJsyzSQS5GFSNwNTWgGUNie7DHZLhztnCFXauvoPtbEpnLyueeihmoB6FiRfyP4Mw6927yQnLtvPE8EkMYDV",
  "key31": "638MKEEXbUAbK1pJpBntz8MZe21Tb98Z7MsNLxGk4o5nbckQJAkw9RyvW3Ke64kkBdTXL5iLY8XmhfSzZ6mHhxA7",
  "key32": "6X9tLNcSUiX1eSJKgVpTzUQWXGPq2CP8nZupjjGH4xLbdnYE5bVEiXGi7bZh7jgratnw2aCs5cEusEAvodvGyWF"
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
