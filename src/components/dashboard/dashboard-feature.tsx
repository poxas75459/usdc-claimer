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
    "4bo98Cn44t7Fx2QMWru1r2zCQQZL7rqYi9cMd1DHze68fFMUM6pKdJdpSGLbnRHvsiFtrTgT8uh43PcmvxvkGoS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eJxiTfnTPCoQRsxvd7QUHyrnZzzvMWCojNnt4oZeQQt2qhpmpPAcPTBtURUF2NRdBG2aMBCbFnJu8e4oAPcMtPR",
  "key1": "3SeyCBhTetHzJFT3ECnpCt1MdyufFH97iujVHW5pHa4z9cA1HVNZQ25xPazvDV5ABLYYEgiADrLypD85kfvytsZr",
  "key2": "2PCVSBMFdhnonBgtaEhsizuum7iRmLdVsFeB8cfYbMykDA4brnNz66CGd3cbiaNWV11zGZPPekvnKEU9f4tVEcjN",
  "key3": "2cMwz2e5fbiSwiB6HPjtm6ZnVWBDC82NicRdQVoW4oqNaUXe3cwwMDPQDDMwjJcvBERcLAxzrZwXKttjSx8ZVaBZ",
  "key4": "53UGGojYqfEEFSTWMDTWaMMZPAhjoxrzuED1qqepuHbmsrVPeS1dBLtt3omxJuegu5BM1V365zn4VNv7buQ1cohs",
  "key5": "2tcsUG2rsPPQWcmxjurFNtEeiLGSwN9JbBY5PVqkJxwP3YETdvFCryAeCzXaUnfH94XnovvcfB2zEnAV8Z42B6J7",
  "key6": "5aqfgAHHreD8SJ2BanxaHoPNmBgcXmEWLa217p7qxX9RUhijGXs4bHsC1XfZaPmkECggBEvbCqQG3pQFcb1gHxuR",
  "key7": "kHruvuLPTdkzDgW8PtFvFX3Dd9EJyZjh5xmgGfXK2U6PsaudCkotivqwqQuFuifZ5i3KkGkCVPTKt3GDebCHM1W",
  "key8": "4PTL15a63xwq5WFDem4QagdzRzUHDi6AEsHqzegD3FsRXYpEnZWkDFrps2e8YVKzrRhqSnCySjkULm3PtjJnYCrr",
  "key9": "3X1pCtGUxUx4R9UjtZEFxaTH1ePxskK3oxnfPPmfBzYF2JiBSLu54wRgETAqLeNKSgAHZBh4f7Cxzhr73k1LqArv",
  "key10": "3pz54VQa5fxoVwYmdZ8V5Geu81GxazQQDgkEE9A96BvR3mGwKZBJp1VBJmpAFzmPhnHd4x1s6fiQRhjn6LN5qg5p",
  "key11": "5CgnNqYKEyoESSArDdGa112mNjBxnRiAcadx1GwQ4KSBDxSEJ7py3pkubSTCWRBaSu3L3Bxxs8PaFVWPtLEvzWKN",
  "key12": "2TTJVb1AJzTei1Bqh7Dg8SEirv5w8cXiJwYFn4u77VafmGLBjmEuztKRV5KFhEiY24MStCHxdcPXkYxKdwbevSyA",
  "key13": "2yYJp8t7ubuNLJtAMs4h6XCZNJWdu2iSRgUEeWcJspVYWGV7aPa1E5rAejEcQcXsuaAFRy8kgJ6ubgUPQpjmZT5M",
  "key14": "3922uYKAevBZYnjair8v4YReXCgG2FSVRRevRZfz4sHkXixzMq7iNii99hNTSwzHGnUj1kjBvYSkP8ZVjsf391Zo",
  "key15": "2H1873N6S8CFLEZAMRfjaXrqZk7suYjmhLkEGbBZpPte85Anmb7yrTgDP8tM6eX6TU9fB1wCBDcZaqdog3LWV4Sn",
  "key16": "4jyDj23ZfDDTTkajhbX9honhRVM9o9T9Fd58ivgvcT4u69H8Bnnd8fRTv9ZAPHpbATbUMmK7kH3BTQykazeLQbMx",
  "key17": "Sxpj2DP5okZAtvntnTt4bDPvEKnNBk93FfiWgc94JDPYu2LPoQk8S9vjtxuPyPZkzdw7RwWpQGpc81rWVzbeDEL",
  "key18": "2H1xtqdQ3REbH5XrDPFnui5bDc8fMtVgFNYwgGHn8zUm5qE4BkL6CrHdVKZaFBUf4MJAumNVjEGgbCdWRqyQJHtZ",
  "key19": "5xhtyHHkFVrDCco1Q6BaE3iK6ECGCQ4KySjrgDki1NmtER69H42rhi8xqPrvCKuAReFs4DhRqKiXgsuB9Ah2S8DQ",
  "key20": "4pxDDovcoVLJ3478iND6cFCTsQdeFm256Z39BnuCjnFyKAX399h52s2e2QN2NSX5vjoNRJbPqQASYs3EbNtW6dGp",
  "key21": "3RSNVx962Tvd4xtJT9nDC63FNZDoaNzExU4aYpMGiM3jnqHonKT1VmmRe3FmdiSo7faXAUPJrMe9bQuNWMGAGo7R",
  "key22": "TxV1JaXEFMRbuRpqeN8mMf5GULPfUGUKpv2WM6hSy5B6qLZMFLDwrgRzzkX4AFeymLNWRJS1LXgrp99gGHtS5x8",
  "key23": "4unbLbTh6bUFDiPwfTSs3quPhN5TcwB55hzMsEB4JvbvD5URAxsu2LtWf5U9NFV2BpVBdEDp4atShboZFUYstNxx",
  "key24": "3GyrjjiKEiBNbU2LCPpRav3V8caxGK926ChYBH8ZiaurM99Jfa42vBmYLFSWh98K5NoasrCcggApLYVguLJZomTg",
  "key25": "CxVMRou1CUdZHq37qxXzu2Y3Q5F8H32EUvShPoNxHwR7rQfcJp6yJH71sAwm35bLhR1qF4AEMeoFv5fgcr5bUhQ",
  "key26": "36MqJ29YhM1oHcwR6nBxH3o5dC9MobSABjLZGXLwfFXkeHiGPWr6btZ4x5FNYge5PCGJioemo7ZjktFrLnGQdKG6",
  "key27": "54Jbovr85ks5gACsEqVRkqcVsg9cbebNwgHejNJ9Jqg8w9MHH2ivFwwGHdbBTznTuHoe6WkqRgf5QP5GjfztRDDM"
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
