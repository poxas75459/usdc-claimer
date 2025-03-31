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
    "1FyxCC6embDLcaiWP2SWcC4CSK5tEykgJ2rH8RnMr99bBd288wQs243QWk7ZtMH6GyvrckMgsMeC3hstcf3yf1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WEYAutS2ifFMp8s6PCKJ91fZcyhHBbBrQnUanatTk4fmTBdDfwT1dw9iJziSKZQ9q7KpyeN9xwL1uMsNhs58fhM",
  "key1": "4bsKeWrnv6GnkF8S5Q7gqE6h454CVpmBHbXGEzHPSs46gxhQQvESArt8MD6fcdcvyLFfFhrXwQbL2ky3VMpJf1oc",
  "key2": "2ZP1cUnhCkiaUFaNvWJA4hATZv3aHmQAAwPLEyzWsUNvJFimDWc86sLFAwy863oUwatf58tNJqgReMCfbAEJaMfr",
  "key3": "55SUFCQ3zVqJeTfCFrxzMQpii3NFnNreyt2ufxVdP9G1vYYkfJqGaJky3Gc115tt8E2mMkTqG3opRZxPUtTVN39c",
  "key4": "5WAvZGprGfZDnRR3XPqwwCbTLgWe8WPDswsf9hgaC8xprqB2ek7fHVJLy7z5g16vWNSg2cfCnNg7QkZhS9mZ8Hm4",
  "key5": "4pzoDthr7GfdtbuBLNJS75AL63maHFQuy4vo8qhUYra4s5wv6LPLAmGM9H1m7fVNgYyzesqLQVGUKEN7xkW3J6ha",
  "key6": "JafYb9nhC8vUiGd1nYiTXExetMMC3j6NFtjyzrVoFrYWCCU658mBMF5Com5LwkfCNQFA6aAba5Z9tywvrAtFMrN",
  "key7": "2P1e8f3Y8H8YmaT6sKAcgEvFVqssvJBtkaegBTQZugbvVpwaJdp5mFcT1WocXYXBvAJDZqY6WbLAo3GFHjX5HLsJ",
  "key8": "3SRnFXzkZFet5jzDMGeCkXQ1YuWMr6q4mMufPeBB3dNEcFWmWNNQ95DzdszXTwcxjo4ymUykxrhyd53dj17mLWyU",
  "key9": "379Lf3NnokohFetVZiRyH4J5RrgMp5HdkdSewSHmQ2je7WZdAuijKvK44UidcVXGXF6YVMtHUBWLhj3WXzobcJQt",
  "key10": "fvUZfW7MQQrR7VdNjKusME5rsDBuL9K9ZUsLowG63Rm96uY6hBkQCHTFdDa3G9VLd2yYxjhvAM3ASE43TWeovD9",
  "key11": "Za1U7T5EKVen3PNwzKqixtu1MjUtozdrXiiU3TcmKXSQFEdFrUhCnioS2iz7pL3k2SiyiQCk1bh4pvvpV6JWCNN",
  "key12": "DRWiBh4RmsTkAhjmWJkfdJHqyWohwk9jfV1uov2jHcHTsQFBSAomjFvmAQJqMANA7TJfGDnzb8k9pYQaN9Ce2LA",
  "key13": "2fQt42CL2eUvL6LrZg7DbB1EehJjzj4g8mK6roPK9z4ejtMVNMTBUwB5EcSdSBSuenG3BRRkxU951k8mhWSy4Aaq",
  "key14": "3R7L8raBixfEerWeh9nfbMY1tS1NPSzQsZbamMUfMUuM5DS7KqMQkPdwkWrduDYyNQ19WRuA65hdivcEdyoh4UeV",
  "key15": "iKANuvGKnHxNnZUyXBa165GchhowydZR16VZPj6NbwrYNpwQPpWZc9JFp9rqLNwD4bfiL6A9xzX3yczf36iPvgz",
  "key16": "3dDNKURTNEauGGnJXMSoKw1W8r3A8TTdgFodHucea7CfyGjGwTWBSLiAJFungduNGKRJyamEffUZpFyHbgN3ffR4",
  "key17": "5zda4L6y7RWdyM9Rsr3qe3j7wDxiyUZgaeFyDxfjSfnMAg2PEeusSBhnBfoKppu4nKPVseoXG9CoCqZa43rvhecm",
  "key18": "32Ec9qmaHmGTsQUPXaVtVxL4uU1eu8kYcfj1ozCuh5Hyk2pJ4HESCyy2KwcRfsauLs1LA76usrxjCHjYFaHBYkoS",
  "key19": "4qUyRRXWAMWyN1rc1toL88ULgT93M26G3d3TW4C7upYca7BDNvutkQs5smAQR2dZ8zHFTb4dtcx84sgAvxjQsjqv",
  "key20": "5TcfXym1rEBUHfHE1h5rBjUYRuqpQj3Se1g8fMkj8kCWt58DtU1FsUpyjrRZ3cDRNRTnsNE7N6Yf72TWPbfeuJo",
  "key21": "ihRFxs5FGiSHxfmTy8J3e3ctwVVKK32YWEZjGJzUWJVhzHNmZTZhqZYzZjgFAgbcFpXKcGTEggdvvrteEuASZSt",
  "key22": "5eXrntGML7RUs6hj2HML4ks1vmZChZjdmsBYgW3pDaM739XWVkBq22Rx1dBctoVKk5RGKsbrur4CAAKqcVBycpak",
  "key23": "3CtMp3BvRmtgcwCkihoqvWDY4PdPx3VuDyJ8CyvYsguQzwUrCVzfQ8NJmboGsk6QiWCUHp5Q8bXhkuFMvrfB6m5c",
  "key24": "45CHL8pjdnpkkVCJ6YwTrn3P6jZhFn5iNaQBxmGwQ3D2wRxB9BJeykHobF5tqgygkAMiNdJ7FCZGxMbiRVALYmss",
  "key25": "5VWStQTzDwPjJKU12Phtoszpe7pxDoQJL9aLyM4q9VTUVAMxDtQDdLpLe96tQFgkMXR9McJCW984xuH4Hq8h4Jh8",
  "key26": "3UGyiuFyf2e8QY7KGPzq4VkkdhUf1bsE18nuXijuPjcJP3VaqbQFbGeJ5hDVQLTqnXBajVJdB8Uw5efLTRsfn9at",
  "key27": "3aBZAuvCuo8bJCVLE3bRcpFLTwbB2gNgH3vmdWWuhtwWKJ5VJEKPj2rgAfd3c8NgYTV6SNenrcN4vQae24MPG9VD",
  "key28": "5WF8h9LMh9P6CLHGrf799H6WAVqWUB7aHQLT1vr5BT52t98iwTJQqPV2swHjdYuY6NRBjsRf9gbERRNyWiWPb5Ga",
  "key29": "3sXCbpnPbCwJe2PLWC8KDskBdbsn4WLVEgBsGU163ihF5da7eB7nc2bMYEGoXdPAKGA2y1sos4kZTq2DQV9FK64z",
  "key30": "4ZPPmpEf4WPRiE3eVjD1pDb6jyuzUWxcrtQc7M9ymDBW1wfGzP2TB9Juie1TRogs4QVYebBYrpeap2P6c82k5KvP",
  "key31": "VfHiGzoXbBXT51H7A3bgtnv6YGFG9W7VdB63cPeMbKCTnyzmi4XFKmb9mQ4Cv1GCNTgf7tYJBrHL7iCkntQdkPJ",
  "key32": "43pDKNPpk9vF4M9fyKtdLwFWPo5xaB8yNAS3rizVG49FhUWiyFMo1DVX6QBe9TXSy5JgzbjpAhp4WhHP5W7S1QBr",
  "key33": "KYWUP7AEEJabvVPVYLZ37qhmrVPA7HK1faYFKbrMPw8Qgna2A3k4d5eMK5LuwCrtNCJ3D1RNQ455goabaU1xRG8",
  "key34": "414xn4Dw7hYD3kC9CyGxhWWrnRec1KqELizAHEtRYDkVCsWWCNpG9dbcaUUdH2Wm6HAUd31wiHVe9SrikeEEnyWE",
  "key35": "4Hie8TsEK9B6Hgn7By1ESbw2kQb2RKu5HgnTqdqTtpU3oG74VMRWnEiercvJcGAVf4Q1Uy781kripkbmTKx14He9",
  "key36": "45muM6qGdBLKpUTNYAmc6jDqFHC2RZVNzyBimwkKHHANUFYMzGGpUeHuBtSks8U3oRC1otHAFbS2rGADGrwZqRs8",
  "key37": "bE1f5s3jzYqQz7FTpjNdq8LyK1ARArXRBDg4GQr6yMc5JFckaiLNDPPJ1WVHh4yc9vXRKNTmx6Kvc6CzFdLWMRy",
  "key38": "2oFhbCAHYjELwYD9oumR1BPMnaCFLKVFVfcbTM5rqQ44gUeKK8PbnBr1D2UreMf34yvwZW34pEo5WHohDySsiMkw",
  "key39": "4qzeCG67LXPuQzcV2depdrF99NCujVvfJybf2p5PrXJBuwUjunRHtyHyGcoWi3KvMdRwtt7krrkhmGYjM6D4dw8b",
  "key40": "5NexHHG8DRyk6Nf8TFm32kT62nZ2PWGhhVdDCgqJ8nax4G3LARvDkYvabxLqoiTRkxQwFEkm6UQLx4z3vJpY66BC",
  "key41": "4Ds7wRDAKgsPqGT8mCEUZGQsFe6GBh3fdQTZeMRtZJu5N8hN71K9mRueaooZbhULavk3r6u3GZVdu9HHNykESrx2",
  "key42": "32N2sw2TMRyJxopTtFJUJJAiyqKvmJDAqRJKQgJSznqEweJqgKHZNdpQ9yKB5QbR9NGPLzaSRND7J5dEHeeaDiEd",
  "key43": "5dFwUYfhSbsGmSwZB6ZEeW4KuKBZ3GiVG5nvoZ3pXTKUL8BuyNnm2raqWuWhuqCjWdo1kLaE95m95gcdRyBvRGP6",
  "key44": "5RB1SmMhR9cnbFyqQJ6Ww45geQJ9inMDBP7BJRM3rvZjUjczTrdztDTz9co9NhAGqh9ofz3K5qzdoGJNvdhT5yep",
  "key45": "5L1yLWk5FPTEu8SjgoFG4mMTTnogXEMNBe6tpRxM63198UyToJNg8tk48tqvTp5tXWBETVD8SAhu8j2Lipi4uXFR"
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
