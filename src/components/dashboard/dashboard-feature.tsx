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
    "hLe1zo7jxUy8f5LxSCEUhTviLCPqDcs67usjQtiGJCfUAKx5UomU4pQxNBSeg8ARAuwxJDPXdFF2zkmouo2TuT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Zq8csvPifKRAjpGJuMBB2717qpdMbL8WM83UYxMYeHzncViogFxR49toj9FS8yqGP9M8NSjdhnopPHqp9hw2cQ",
  "key1": "4A3Q3PEDQpxqfceP8MdGaWqS43H2YRLDAbssx5t25w5xWPsWWU3WZETrXWpj5JHEAtopnhxPXySrTZUYcgVZ68mQ",
  "key2": "5S6EWP6iQj7TF6nmh7TYCjBtnhwQK8jr9QHXDj3cox38dTUYKUW5urg8HtTE8EPCfiNbQuSYcQ9Sxq3j9QqUuAa3",
  "key3": "3VrtMVsCThvzwduyeBPnFRs5ry81HvQXJN7FSC5rWAC7Kpp4RUSL4VJHZqnJiX3wuo5mnoFVFc3oNodfyokUNDSK",
  "key4": "4B6HMksLcYycAYamVJYMBhyxEdadW2c9HyVhQVNZAcSizN1a4UDtupynL91vL536nP9iivxUj2NWqZZ6iFaNuELZ",
  "key5": "rfruqkTAFgFsa72uq6AqpuUFVQA63nmonSkpHXLukocWygQnFeBKjATktUKjPAtgR8oW88ZWDc1Hdr22jTU2YeB",
  "key6": "4AUQZwNVdySJtLFf4Z1s7sHrJwPtFrDLxKu7xKNrqHdf1VQaLzbBvtFMskzxXMFaWNsdYcQwifYYzjnbznykJ4fc",
  "key7": "fpt1LjorB8jyftxswucvodUQUaadb21ULWFw6hBgrvouzApMFBmLTmK2ZDM15JEqiGP11szQsarehsNVAyHdTvX",
  "key8": "3szd48bnSmMkYTpmP5Tap9riX6i5D6uhuoHn5u7zgLh7eLitnCiqFogdaj3fUmAkLbPRSQLirGDE4RqKdsHo1tAX",
  "key9": "3DbReP3ZkkzXhNHXM4pg843mFaf2gQsKoYd72BorDjdYRzbdygTz7B5dRCqurCj1ibvchZARsLKGVN3o3FdbWwKe",
  "key10": "4VgHQDamSiUwnk18BVSbXXEpjH7NVgpNVYnksUkNL61xBnuVMuJxCigMLgEiHEM3PNxYp3NLerm4XBuyJV7J2Z22",
  "key11": "5tnGsqHnM8oufJqbNuaJA7RDWFhK2mZLEtfrJ1GeKKMibmEwm11HER2q1Gx9mM3oKPPv1r1ZEjjUS6bNJqtxi7JX",
  "key12": "ZAW5LjaqU1h8BSBXDeu1bGzbChUwxeY79EXG7eUjz2YiSmzHRNuNQ9c21ZgUYwXVBoxxCLYzZkdJviKP9fKajEK",
  "key13": "TEdXWV1UbKJ8dFSt8PxfmxKqUsHfQvGgTLZpfyGDZszGQTfQVZSVNStbUk5XTZg6PN38iFLYspQZ6d6PUAoNYqZ",
  "key14": "4uqN9j53fjnxhwwEp4RhKphcsf1zjmUbgoa8EroBvZCoM7Gc1Tw2Hs91vg4fHTZPQdFQv8mZhizHJAWTpdSijo3g",
  "key15": "2QAEeDvPGpwzhNUnGjVPq1y2G71PVN5BpB4RcTQCPFk4npVZsxDL4a6bdZV68f32hJ54smkdGufbnqGfBN5mg3my",
  "key16": "5yB9TGW3Hd4nuW1QQeZ5VoAnjpxF3VMtKiDfR7We54joaa9Hoqf6bQrqFHq4VKGdVhkr9DruosMBku3KZQ4FF86j",
  "key17": "Ys5t7auh3UcRH2zdgM1oNwQ1RnGKUEAUxAfTLz4BHHJD31yW4hdLusVzC8AhZk91JDVBC8n2pzF7VCuSweziC8S",
  "key18": "4NDw1ubeCZ3xqjdyNPyMuRbK9vL2G7gkhsqQGuUkEaWtDsTaLSKfmjPQGVmi5dqV59SEbGHsUrqRqvF3dj4cR9VZ",
  "key19": "2NfnRQDNJ5MSS2FCfadxVWB6bJgmC538YFFRUVxf92HKhnhWEH6zGY22zNRiwgUhaetV8gcS9ajm7tBSe3VwYffL",
  "key20": "5rJkCCH9iGUreAam4o98RUtg2td6jxZE2uxm7jPpygJSLYbgCmNayWudHJNz8NB4m1EGMggqznsJK4aanL9DEgHq",
  "key21": "4Vw2PSpcBGF3JZPPyszuzhweAnd64FwYDk74Wioha12tKgqpA1eJtugEhYozkKwzPc4iJDg9sjXAPVDschpJwZF9",
  "key22": "4kN4zQUHCiPH9F6FVie9ETwQVuCRRtarTdqd4pTHxPCXp2LhYQhCqm4q8CvsfVLsZr4ZnxLq3hAf2Lo87wC1tgHm",
  "key23": "5M9kUFn5rzkqtwY9AbVLUk33t6gZ9YEvxvrZyYTD7yJmPKDyZgh9D2vqjpy8ZCF4rvC6a45P7WbhVuTng7jL2jnV",
  "key24": "59YB5XCX6JGtGSHLDZWcG8xkpgMpKp4R8vXF9SReA3dDKJp1rzYecU9XCnqGodtQFdWr21WLk2mWUi9Nce5hifHD",
  "key25": "5DvbuzizibWSBtKu35D3X7irP1MtVyeSbk8qbhBiMc8MmxzYNJKY9ockyV5wLxkSnF92Bt5WAXd5jZaDEUpzNuJw",
  "key26": "5bxqhE87Dm8q2aGEhXuzHkqvS3UFVxvGx8F59EDeRQuQHiPvUAyyzPbocVbcnKXaMJzH4E5qpqJqw4K3bTKRu9Lt",
  "key27": "4qopzvG5vUgjccrTPNwRaSrszG12YmSD9ufDtrNPjD6WVUcRpkMEot2Z6ujndVJdpVhmKm2A32SgewD7GphBWNXr",
  "key28": "4ts2YfE3P2DgTYuFfxiCQatvUBDKNb27dD2AKfPLph1JTAmc11gNegV2WuNNMRzXPh3WQGwEXZk6gNvwb85KECBg",
  "key29": "2zmp5BBtD4WYtPPWUnyKRqdvKfv2EQS3g3dvQBQhzHn6WE1cDDErU5KFNzaezqw7c5cftWT7Jj2qRfzma6FxAhxz",
  "key30": "iczKZT6JySBPESkwmRmqg9XmCndKMMa62VE8BfRrayq1uhysK3Jst35CyfCf7HAte5ELZpwFMHEdXYBTNCRptY4",
  "key31": "5Esari4buiF36kzaeQLtxvSQYoTECpuiDpm2PqBrYj87p1mZmJvWb7oJg9yPyu2snAj2UJ4avCjEhJDXZPJ9uLr8",
  "key32": "3M6ZGyc7pCNCKRHvuSS3G7uPRiFGBmgwRFhP1NJG4vNFj3H9oCFPSSfvEjQkAz71P7MZDMx9BWLeW8YdNpAuneJm",
  "key33": "4Yjng1E8fuTiQ6y4LeqzZf9uA68J5YeoVB2tu4pbJFsSTKvCe6mSqTK61asADiV9egrsGPzX5yHdir75x5Sb4jfS",
  "key34": "6wWkLMADPpNoW9My14x5iUog4Qgqc2QVXEWVB4NLePfBEb3pQpXyQKVTNfRxTMDDxN8jdKEhvr3g7sEaWQUhxiL",
  "key35": "3DdWxVcbuEWi6kX9ChpK72KMhHeKY53St5oeQShNo3eiB5aWSVjvg8ihS5Rbn2DTR3peBuNPjc8PoVjzqp1yvTEC",
  "key36": "3jcaeJjMzSkkA8jJVkBGCq3BGnHWm8ThjVbvxVBgdztPaVhQWGhpq4wLpzT6kF26S5xzXcXHbDzACpV3pu2Q8bVB",
  "key37": "DyCaCQ5UnAmtB593fRkDn6EPtMtsn54z3tGEnvmbwTXAjy5nu3gnQ83Vt733opf9xPWm3KzGD1R2Vnr8sawtdAq"
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
