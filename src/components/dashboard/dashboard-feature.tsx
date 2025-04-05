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
    "v6qTVyDuK3bn8HF1hdaDV7LFiHcYzUPbLH9juHaE7M4Zp5ZbFNxgsrzUgj8ExXHUXYM3CDPMhJdUVo1m3qrxABW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g5r39hagoo9H78Ep6mMhLQJh39VESNAcQiiQA1bhFE1UrPEnvSzKfYnuSHyznFKyKHQ5xMfms35EN8Fiz1eXMwf",
  "key1": "2RdAXKGukau4gnCCKkFRsE9bi96NCW6Kbc9yGfdteU2ixzzvP1ftnyCgsoWnNZQtbnMJro35gN8sFz28pSahcXAo",
  "key2": "3QiGfkYthrcqvSxgfMm5ywKFEzxELyBH3yJZrGWZvQhtSLcRG4tSJz7UUScXCobKkDsiwN9F2wqHehauPMKdNDxN",
  "key3": "31gmUQ3pJL6TBekp5N6r8jhEakkjMh6wDKjPQqRWM9qmtx89gDzrsW6MgxdiQr93C1MEZEvMy2JY7VygmF7BvHXV",
  "key4": "37JX5NrwryigYjYeqiGewkgvbuh12fNJxkSCTWTWW7zFjaN3UH4gQqBCpc1L4a77YyRtbzTjff7WmumEYuodBeZD",
  "key5": "5aWfuDxqD5aaikmT8ucibqHFKML8UwZc6tt4q2m7eHsYDZ6hY19EZtywQVjkvbKkbLg8btk22ugbfDHgTrkc76ea",
  "key6": "4dyrHToxNyEjH4s4A7cdg1u5v5qetSAKotiWPVMK5bdhVNWDA5tQ9dX4Erae1m6qEogvMr9k7dgWLfwvEvGSDSt3",
  "key7": "51UxNYceYe4S36SRNh4WfCAmniKLYokX4MQ7ADtu9uwVuSfzek8evDbrTp4LrFaBbus1usmnDne8VKcmRm2iLuZ7",
  "key8": "5CM91sQqjYB1eWXkBMvGMHEMYHYrAury6vBDNKj5geQWpV132Q9Xdtoxgwtjqnjzx6XyC44JtsNPwT7rvbYcETiK",
  "key9": "2eLtrB7BiGyi94UVYTzdJZGC8UdwYC8L5YwAJazit49jomrjX3zFCiKKJwjd7geFESgvMhhvd9FET2FdKpC48kQc",
  "key10": "4nProgA2TNE9CvcD7f5r6U3Xo8CYJaNfRjbgVAVqnDN84BbepNihww2PUmDGRHoxKvsAFn1zDH3kX56K8ebEJ3KP",
  "key11": "5VWh7uAC9TrsQSkE7dmhxZEuM1nyUR4UCH7wbKAt9fbp9CHsCERTYyTYNp7kDj2dxuLYBnVJtr3uFQ6fP5o5VZTX",
  "key12": "5jweGuqgTRtuQbrGxxnEaCjEyazjxmBzdjBWmo78P36dYHDTTR12qHmChTe2SN3MZZHDsGNkjbPKEzV4zH9CsQSt",
  "key13": "3Yi76Qd3vBtwmoXxTZhXrqRBSUcV8QJZurN7nVMLvpoirWjQfzdyK2Qi8QciBiPHwt1k5i5z5QfGuPSF7ZhYqWS1",
  "key14": "4XeLH3bEacNuvECqKyF54V1xxQyq4LrwAvCmCaBUc4dvVeQTrdrvoBkAk7isMUDqogAVBPaGi3yVXTcZLAEH23gw",
  "key15": "2GdT7roysQW5Vfin3NfuUE6Gp9kVdKS6zL9aZny2PXeJTDpAp1AxJSB1NuqpYcnU1iQKo51aixCtNtrd2zFHoN87",
  "key16": "SbuMGqT1FRocLtRmk8GNCw7eNhPU2EfeZyi3T29DJpSQJMYX99GH7TD5tLtaPG6W8j566zdBkHh9io9dpVt1mTd",
  "key17": "5HqAVeaxCrzYsq2Q3GJnWQR7S2HiohjQk6ksi49YA4xtr7nNjzCmigbKez3DzYSsopQGMMCDrBwGXEK5VHz5n1Tu",
  "key18": "2RjjZFrPmwKTPGx8GnWH4W6PsJ2TpQaoKzCrt9ThZqJs8FrdRWvNsyNukQVCo3yR1KNwiUBmVvA8R4N3SsnqvXip",
  "key19": "2f1RXpXduWxz7BTF5e6ok8xevm4WeZqdYQfQWjNmg1SKPjaHzLPufYJxH9Xqjp8Rc6taqfMUCU57qifkUnPP8r4r",
  "key20": "2mNRFknSnbR7rTZ7GaqAfqGGqanb1MExfEqg8SzpnPEF9XngXzTZsydWGwvtXufxwryeg9ikYhdBti4MYsFs32aV",
  "key21": "2b1orc9Nxwamjy6vcHJzpc1LwgWWYHX4zbtqpQL6mrXgQ4esTCcYnz5GY6xLNGjU5Uiab5zZcGjQ6a9qrVSSyiRL",
  "key22": "24yu9ZHV4HLzMpZup8W8CRVSs4Kr9WsHP8i2r8wE8cpWcqEfdZb5uSSFHDHaeD4qqqQQWaQ5ZJz44y7hTi3KbjPh",
  "key23": "4d3Amvqg53XwgcjCDT54ts6EEEwhnKQDcECaQTeakskL6Xrk43VPAmF7DGqKSm1gELwBiE8fCdEw3C6WBiCXg13g",
  "key24": "4ptoPZ1KXyTXqNfKkqascnt7bBW9C5sgmYHsrpSR8UKn2Dm23V2XxnFrxdnTK4ESxykHj7EueSUdoaWoqD6GZFTv",
  "key25": "2YbKVT2xwKWWCDoBduu6ZnE2iaw26utni8drgvyoWkMxGKtuZR6Vqt4CdqhWfPC2eifgQccTWDLW9BwhfscsSdgi",
  "key26": "373nQmvw2vsjiD5L7FLpqfxTC9CcEHas5iVKWnaTyWRh2SJVyrKdPc2NdYZq5QNvtLQhMTPxcfYjJnpYZeDYS3Nq",
  "key27": "373W7hEsrdGAYhHKvrFaLbeuBe3trdaELASMikGs61UgZT6zLsXKAcHyatvfo9NkGbzjz1i7uHhP1N3PRBAA15Vm",
  "key28": "5BpGH7dab41fribFABJqsTYKuL9KcspytZgwz16h6JxFRPHe2e3HH8nmxaWewnrpQBR1cttY7FTM7FQZwPGuCgoa",
  "key29": "4SzWkqovfNdSd7BP1n9Vftqvx8SGSMoRtxsbcyXBxr2TFpFmuYsai4MQBN6aTjsoY3CMh5zpngEK83QPSUnNCRPN",
  "key30": "2uCYRjf28kB5V48Ppn2GvZKpNh5P7M53meDVn12qQ5ZAQDVaSCxmFvzEiLSZK5vQ2gaqqACeZvr6PRhg29b2TAKH",
  "key31": "5p8XfLZVzeGzxHap6MKmdHYhawoxB1VpxdjkLbn4JvkaBSr9WJeVnQmFFVEgA1rf3W7pWBBDYoAYTYZLFZbhcJg9",
  "key32": "27XZaxZBvheTXNcEMCCvGS9sNaKioCpe9nMbXoUt9nf7XvWPJLJMeX3ECMLFy2MPuwywk9jThRKS5YQXVw4pf8G1",
  "key33": "3yfASbqefN1sfsVGZefWJ6dcv3BiZdZuEr71zXGRYhem7xz1qYVJLZzFv3T9njaSHzdWg28NzuLGj4GSc6tAUsaf",
  "key34": "2eP56tUBvdRFDG3odUrUM2W7GXtmLr7SxJwxxoRqXhhcYFSEhc6UTZ1nH5PeczjFe7Ni7TjqsuN6yx7GTuSBreT7",
  "key35": "oWzfdji9iAT8y7hHHM9guEkmuNSun8ofqVydNiQPedsteLpxXhtHEsiVGyb935eweohfuDviXnissGrczA4LgZM",
  "key36": "3fDJVhJQBExVQyB71ng9DPzWj4rAce1eqqC4bZ6TcNFjqZrbPyU1Fk3ez9DhgCuwPzwzvrUGhkpM5DrCRxPQzUEW",
  "key37": "G6d3QDmZPE4WEsi3LbQi48tAJ1c7ScBZrw7Ny2TgFRTVTXcnm3YMCcJ6RTxmr6U2bFQks4ggBBHqEUa2rVGbcqj",
  "key38": "3fV9rT86a3jWxhMh9MMsB5RWwYHV5fcR8zJ2i7QZ8EcTN8dQiQvUXF9T2TLPoCM7MatVgJ7jLVdLJFuX6Uu81tg6"
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
