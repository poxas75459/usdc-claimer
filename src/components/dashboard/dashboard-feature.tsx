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
    "dbKg5RFSWbfMdD3xcjfwbhMGjmWvvDDinqoCyRfNb52DFQfotYvpNLqP3gSYyy3vz6t51MY3xcJf4zDteWW8Hak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dW1EytrWGnr62T8wrUgtkahSaUnmQJ5eWZWVSnFzPzHa8dzbP4H5pyLaTfXLdUav5ZN1CSe1Cg489KsfxGE5xsM",
  "key1": "2BuHMggrueE5bJ4dU5AqhBucvXvVFjpLcCiq7bVRSMhUHzLD6W8LaDA4juyfuhyDrgCY2r8VBUWaGX8Aug3LdkaQ",
  "key2": "2VHKb4ctYc64KP71XdezeJStYiw2sndrKiph3v1nLC9m9sNdUdCJ1GJP6mXKHoFhMMeXa5pqyzyyN4aKVAR3PzeJ",
  "key3": "CHmsXijCh87JbHZyguEedyv6ShZGR4LeHdZibCfB4uF2xKrJVc48NsxbkriYyqasWesex7RB9dJMgtHW18yx1wY",
  "key4": "3inKaPsuSJXMDbgSDchnqGNyH61h35E85V13nVBdbrsptm2BFpQQNnvuhKs4trwkET7Me9Ct68fLVAHJmrGaPkGF",
  "key5": "3YbXAsoP52S4CVv5xYhTqb1invisa8zFBnSH5o1G1gTNJPy3gaMWpdo4dKSys15bjsxHDEFESS9zZ4tUmgXu8JAF",
  "key6": "2R2H4q2UVCqcXD3Lxmm778mmz41ocVkzm3PAndhZFVT638w57q4wq5j435GC3MTr47Q4H5H5S4BGCM7LQRYgni4U",
  "key7": "ZzYtMmYxtW6sdfJJnfj9pX7gsb4dvb42aQKTw9i5JH7zwuWhaN629AHot2chdeHx6HpDHmXXqhFey38JtV6Qu7f",
  "key8": "4LiDZGvfwu5WKLjuZM6MmyK9qjnR9Nf5xfMTTmLQVwFo4G2a9kZcHFzFDTiKx4egzM5CkCJbBnpeZmorjT4Wc8E",
  "key9": "5sr6gPCtLxxJ67fyovFauxTDy6CdnmcZshnaWNrVn7fnKEVBBFdsiGRSuizA2v12Sy4sCknRNWQn3y4hT4C2aGrm",
  "key10": "5uweH4sQHSHVMT8Ryb33pkdndeJEojBtrFq6UFYmmLGqvNYwEATZ86HQuTvBWNFi5swD1TVRTmKxBRBJ1eGrkiFx",
  "key11": "4SeKtmgMPwTmygmnW8Uja9M1fDm2PGmnZbZ1faXFD52KzJpQtZLBsUCMp9yeFNvxm4mN9EqzfmbJtHGF5QVn1NSR",
  "key12": "3TyQ8W5hdwweFd2FrisCbB98QKDivXBL7VR4n2CqDPAS5ruYTJ17wpU6igCSacfcKo9q2kJ1M5wmeLeML44ZKn8U",
  "key13": "35VMZcoM7AEpm6cLjjkCBw9Mn38F9mSCvyWu7MZUU4u352bXCSXMQWCXLzLkY5gBgXnb1purcAryg6fLEHazcCF6",
  "key14": "3StmEEWDfN3SGqXkw5xd56kC1c2DU2xXFY4ew22ppBhxdtUfk8PH8JznKtNtJUWaQF3wxbHJ4GW7GuRpiqRNRMuz",
  "key15": "2sLuRCFgY6fwFku6vCFaD6dhb9GcHEDRudoDi7EmqfAXoTuE4veifysN48bkpX3K4F81TVvmXt43thje3NyxkLVV",
  "key16": "4qhN4jPepeD7mGBcZ6jh6hg3gxjHQ92ipTdA3NSR48RPrP2ipQhmngfAuanAJhG1VGamJZZBZRaXJcNkCNa9NC5T",
  "key17": "w52pLJmhvEajt3UVZu7rDahQj5sEa99TvidTwQj6GcqRQZqofNZwpMwh5PkvMEhgXcCzi2fThBPES1z1uUZ9UAC",
  "key18": "6MDCqvQrH6qeEmSap9VHk4jC2Nc3JjNC85EdQbFStNXyGfu6oRR5gc5RmCrevvTrMLkiqyzFy745NkGc8UxsJAy",
  "key19": "7DAZabVQjrDmt79J1qQudjK3MwngBvxULXzKL5rs5ogLv61FGdJq3r9k28HcqmGfdi4oRhNQNWWReMmMBFLhQwy",
  "key20": "2FZTRzQwkwNU1LhRrKz3QkiH94pKyqcsf16WA5AQQFgVkrJED9oJN8EdYwuT6nPPdFpy2QJ7o4y963R8pL6tYqxr",
  "key21": "hkQczM6etYyB2wqhPiVMC9oFm6o2RS4UH9eoZi1BVpo7sc6Er4prokzzNUs5GrqVoNWVwachFyJz4VR3ui8ch4S",
  "key22": "5g34vsky8UjyYDsjpJ4igYCC9Pi21TpMSoj8Z8XZmWkdN8kPgoYMJAEyLDWymbtM758Fg4x7VhckDuoyZiujExrY",
  "key23": "4X2mkNr5Yh5o49HJJ9NQzhVDEBisFUVfCUMcjPachtYueogeWhu8p2zyQ5ypqGzsghH6tQ3yEpR8imsEYLRkphZo",
  "key24": "3foGYwzxvfQSbXk3eP6QjSSrviNxYKFiGEz2XXLacuVaf766HCfqeuEgz6kD5K92Uadg6BpQNdnaFfByn1gLSc5t",
  "key25": "3NpLhSxZCMtQH7ajghqAe18ZkNrqFNqCjPYFYMBRMAnqZNX85eFqcHDqe4Yn7nePE9bak54agvV3oPNLGEeUempA",
  "key26": "Xp3mrSo2ZTZPdUzUp9RHrP27gZ1JPaDLmWtEjysBffUVu27ZkLt9sC5SQq52yAvh9Rzbe2q6ePx9T2QnPEwJ1oj",
  "key27": "49u7YurAcz5uRw3gMw8eHR8NSfGo8fSwf7fYLTfuRSXNXLDWB6eEPnY2RnnJuywcN3y8x289d8YBdpJLP6xrMzHn",
  "key28": "3hLcUa9e9XYiL2GphJtn7YGxKyDVjPgYDfrWULuHHH7TB7gWPNo2Zz2orGBeumZpNJx3VYJjeskPN4f3BwwCNQ9e",
  "key29": "57gNyPwLntc4PqWvT9TzD5ZaPC9T1ZMx6jR8bkRHihaGFVv7L8eJGRCWVxopc8DPy4gn5Fq9eUgXftT2FnctF91X",
  "key30": "3qvoyfWyzzv4Unx1VgS9HjuUeZ1MRmTd5iVs1eW7PGMP97vosUWYEJXgWremBk2MsxiRabAxPxUfFeqU3KWb32YK",
  "key31": "vURrZCATQsuczFTc2Bq4VoMfpVQxktzBj1QdSFcTDkJRiKkcTKMdmirw8ckE9RxJ6NLSHoWawyaduZHfwBME38r",
  "key32": "4GaraHV59aKYPXVBtJcL7Zjjd3VohbLKfKsC1hiBBaPD22TUaXMDcJdhq9FWaVEfhpscepVdBAQyNU6B4kCxV6Hp",
  "key33": "3Y6pV3SyrPLkNzFEUiqvgXMU1GE6TUQEwR2iVXohD7ZTfuY6GBx9ZHA7AywdAKiVeMkJuQbu3QmnAPvprhpTJoAX",
  "key34": "3auCUtHbiUZeb2XHHmtytqVvg9JcbJauZJK8qMhjUbtVMo2yHsXub4Lhh6pv6BonfJPiKHNm9P4ahg7NezEY3mVr",
  "key35": "4QVuR4mJpUVDpgML3Z5N4Vi3Uq5dDaz17hN4NkBuQG8JrfEPhnz2inRd42pebdDmv8JyW1sQCkPV2nHremLKDZSf",
  "key36": "vYeBiC6j66QXFMC8z3YmBZhAQVHWinXoidUKZUDPbBFT9nV9tzgLB16sMpCb3VU33KwT2hF6gCaQL2JZvb1NDKi",
  "key37": "4o8qaEYQRiAXDNhPCUX7JhEioGtLBh3n3gQnUxbKr4Q5kmBYAZzfS2hQ33UkjTKDwk6vpNTcEk7W1m4SvLhKGwEj",
  "key38": "5kKkRSHSttD6VNDY6coBMDddZJUN8dMU12YKE6ujc8hxNHmijXp2m9EF7i4FX2z5MVjizg9Sq3uCpTvfiYs4DxEj",
  "key39": "5JPaB4iGDrYyVTzPsnU5znj15dihgkfzWkyrTaFTFsERHit4YSDu2FiQzPKY3TWA44Gja8n2tL3SnQ3Xp62JvMHt",
  "key40": "26eBCE4GfFpvgmRnxmAL1oWZ5M179bZtSQgFtpDiSSpBcejZp8Z1RMkRwzuJKUqVestSNSmhghC5Trz5bX2SU4oS",
  "key41": "t27nFLfzXjxg5jbwAo6wyPXsN6ASqdJUvXzJmpstQwt6MYBgS9P689s5Mj4U7mor9sQmKyfS5FyMxLQj6hEJnhq",
  "key42": "42mLN5rPMWU9xtYh6sSg8j5SECM7u2qshJqD795aqUmdyYp7MJSYpfhq3Psgg8rq6MSiUiAhh8NjPFNmhqiq17Cu",
  "key43": "3sArvBRzJA1z4817srBskQZT9wqi4ymbmPoEnAxopo5cLdtCGKhiRrRx8LFc159fm2a2g2caQ3L5fNTmVcHPXPAE",
  "key44": "4Ar9R3q1wdad9umS8vFgLigsm6Xmpthz7icCzzFKoTWsFmg1cyYvkuVEbwbc2WYYpBBnBtpzNewvY3m5obC8J6Ef",
  "key45": "jAuSGPqBPX3r5hm5WqvDbp5u54xdyLkSzyHQnYDWLRtP16axGjKfP5yoKEY7DvEgdBmTmvZjCn846QJDzFMeTEd",
  "key46": "2BcpHucMZhyHh3e4XUHu5JjfaCwrNzcPtBDwFGNWUogCS4pLQtdDCY3JmDnb63SUpTED12Rfxe4T9PmajbvZafPh",
  "key47": "EU9zpeiWD9wFBJSyACcRF9K3ajKHKTQpqybeiYPqDz9JWhV4pqT2b954Y5JE7tTBjA3RmBMSaw1nD2Vaa7MXH5E",
  "key48": "2Rhim7L853doW2NXSYH6dw1cWfo1ugjLBpBzSGhyEs68aJz5wS7zM8bg1TrQ5mWEQRD4f6fqFhozoNrXmaNwVPh6"
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
