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
    "5s4Js7b7YW252PeyLVgDLepxSo33hfPPLhCm9meUUAAqc64HjFJPYwfSetn5njsqUyUANV7LTchatxs2RbgbGG5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kjGnBSgtYeKfDSF5BCjffZ61fyktot7EVmcX8mDg7q92QGGQn8udLsgXu6jMTRiYQrQJwD2NUM7VJdq7u99zb3n",
  "key1": "5g5aEaZEJZ96E1FbVLmLMfKSjmPNch92QopZ1KfN14yqVdvn611xNpBU6hpuNJZrvTEAmPsPePyJBBTeS6vusBeY",
  "key2": "67nwLLqFqovk5z24bjrVa3rFmq7wMezABRqU2JGa2GxvJXTeXFCvnYjMsXiDaYWSJvWr4ErXEBBUnt6RBgp5CAcQ",
  "key3": "5BaKwbUcNnf85ygQCoRxVu9GmWhvp4mTtYYzTKpGkHUga4rqRVYLmQRkBr2KfM7LV4LZ6K4S3tv6ZF58Q1XMg8Ht",
  "key4": "4irqF3EgZqJTRYRoX6QJshKcKQrjnk3x93qGkswosYqEmGyXkh1KF5Wz6urRBoavLLnKsczzAq3Bjjn9ipYHESah",
  "key5": "3HR2nNVKtfg2qvw6uVfcw2ivQXmxZ8MvtaaEuf3fLP1mN6qBXVHeFXi2u6GqdWowvfg9hbwQL9cBZBLweeubMbvN",
  "key6": "4cuRfSqWoLhc4bLNgBjQcqj5ECL96inHxWpZMWsvwkV2rMDAdznDBUFA7pSAFMuWAyn6xnfLcKJqG5GRArRafYdR",
  "key7": "4BsESWp4AqahfYDXKC7ohTbrt3Xaa7aza5PtGg68mfVAWakGHEEnxnw7PyJHbuhpFwi8h1ENJ9Mz6nTr9jX74cKC",
  "key8": "4m7aQshwmMTdHyzK9mD9tkNwRaM6TD6Dtz57u2S4AEcEvAN9KuZ8PHWFCAsXhAMGfYbSLzbTYq4Pet8ZF4abu6BR",
  "key9": "4bpDEWgCqFsJQJLto5Zn5Yirs4ktTHRvbunUFAjaBgnSV1QGP6wde3DR4atCwghD8fu7Hy1WGGa1RT3PWgKp9DPv",
  "key10": "K1bt3ej3EHRbNaj4BdM3mPuayBbQ3auhmrNt844SLLH834RDjrT6GWhVTNYrH9NqirrGsKcvkcXLopMdPsvKsbV",
  "key11": "4vG3WQU3T6k1NfgZszEUM5USzuK4vVaryHBP4sKhgQFJoUzegaPr3GATq57STcQ8PUzbbcZfLvPjgTYfqprcQKrJ",
  "key12": "3tR9Abr6vPKxXfB3Bo2ucHrb2sZCJie4e1HxWv11bjCJU3KyocSWbGRXCUPnLnqnNXPYiFoLhPsPmrD12QdJMBXf",
  "key13": "2AFws7cACynMEWFYL1aPpqBqVWpBMmXpr6uRxvyymdvQY9tQexKderi85rzZw47TCSHtCCBiLqbvADT6SkseA1zH",
  "key14": "424kxLR7wbW5VjHZT9RzpSL145jQtZKU31X7hL5sJccVmWxaRfV4GjkuLBgiMKsxVzAAu2jnQAheJgqPqCKwc4RX",
  "key15": "32Arbzpx8ZnyZXJqsZH6b7xJJ11Rs8ov6hAKhew9LGsxtWTBH7HxdLDYHKVetA3NLCs37sdb4mUerskkSyscEZBP",
  "key16": "5xJySr1JtMM8nBvDmiVSb4e7fDTekburgxsdgXBhiG9WWhfcSgnhD1Q5uA74UzAo9owqExUAfERaJPrf6dNBvcEh",
  "key17": "2j7nUDfrmZwMbJV895ZQcJSmZoKgf8PY1ydL6rtCiyTxsGzcgPv9sCmCHPsVuEsyZqGu6wjPQ9LfUriEUCKG7yWL",
  "key18": "5eoEwjMgCQ9QEg1tCdJFYqU8jHu5p61kJWCMquaGfpChS2qBHfDGMb5yrqDkeLugW9GPTrdDJaPbpki3rqkVZtC4",
  "key19": "5cv6nEMpYFsdyxtFMFQTnqrEiJJcmeZQDW685okMNwNQtxNLjcP7MsBh4Ndt5pcqcnK1AuRU1VcwE2inhyTux7NG",
  "key20": "48uXeCCBQHUqno8tsbx39riJsSY3nz5qYPBPUShsPrSKnNeNxTjCSHNPaKoXq5c2zmN861DMBDaKkgrzcyeudQRQ",
  "key21": "4PnReRXr9HQDUR9ADVAutstPGhrS5a7ETRNZFiZBARy5GozJoJbEfGroWH4xYw1BqX2eSigfGGT95Sqi5qG43BFd",
  "key22": "3RX2LR3t2UFF4b9aRftt5xrs6Tgh9pcGwn1GstFSnTpjxDoWY9ByR5GEDjEKphnuQgAbwtXDcgTqYnftKAUsQB5p",
  "key23": "5dNkQx7RDVa9o1FPdmtSbE3njRhbnAdhqn2AANNiJmZA1221WVU316MLp2KkCynE4XTCdwDSdrx6Nwn4kMPJZSw6",
  "key24": "5V6TRa9TKMsoXSxcdb36ZgVNhYEsVNzuyLwD4Ksn3Lxu2TKuRqShLzYZME9muh9HdUawMyLwuELCxP9PaSfhmeKd",
  "key25": "45W8WrvjG7wuvRx7eDj7FfzfWKigNwr15vnwAJ8nV28KeZ2W73Y3joYgySP5U5h9eNMPTLXs2s32Sx3kgRWWcDXu",
  "key26": "4Febg2z9TpLpWU2vQGjLPevrTsJrSwveCDAD3ZRz5zrernsxNZkrgCD7RsYQGkmNgVrVT9Q9K3vAvWNfnGXtYCck",
  "key27": "rSsYoNtzL78cMCfDajYbWjoWGrQmyM6WQJM38L5PUJpEiSi2cAPo4FWRvRHkqHDLxYBeW8DthWLYN31vB7N2ps4",
  "key28": "5M2TMjMfgAnbHpGFhyUJ1J1c15SxADLiirnNE1D8dp75Mrjm9aFJaXUDA4ByjqJdcdmBKz35KhuPiuUuBrB21bu3",
  "key29": "5GCwxK3yP6rNAPLc1NyaxmeNnSzw7AaHXV9AGyffnzT42FJjqRy9Sm9MyawAAD8LneGEnpUwUTBdx7NEeSV7dq9U",
  "key30": "44ji6Ax59PbpnMSGub8yj6ZZFBeBZJaqPFdJ2q8Tt39PY9Uz6f9kvwsjzyE7ufky89whEfKmYrfr33eWF6XmeHvJ",
  "key31": "32qSk3aYtEgxLSAPmnB6oAS1a3WFjynMdcs2RfHQ1E4rqpEMV7E82hdMgxEhr9tGoMuRa6xFLpFUx26hcoqSPWR8",
  "key32": "8uXgfnTceyurHzV3DUuGd42pCVfymqdAAZS755hs7r8eoby6VizeLK5rG74Ap1sRM9zDR4WD6HVkURoNVqgjXkt",
  "key33": "27WnLKsWAm6QcA4L5hpbahmaMaAPdpNx61oUAj2Q4QaydfJdaps4xn2geyhnc8ozM1iX7uAR1KmUx5UKSCvLZbk5",
  "key34": "4QifzMLC8azLd8XWJKm3RbVjpB5HjjMwPAuVZ5jkqvcZAFZQPdNqpMGhxLTPMsqhA5gnefutVeNnd3SqrMCKKRFQ",
  "key35": "4msWSwKUbsPKkz9HZd4qiru8B8qswJshw91fryXvirrXpbSAAj1jR3Pvn1MWFbE8hHWSrczvy6keX4wHfQxg7Wag",
  "key36": "4AQXULdD5nioWK8LENArGUYbDo3z3oEtgjq2GHpNCTXhQnZMR92iraCurwvm9mAqi8XQRbUiybAE3HYuDp1EFYtC",
  "key37": "2iobc9QyqBwKZTKRh3T23GSkdcmmyz39hChHcJcRUKnVATcESkmEjXtsSMQiQXAazQE8HqCDfoZPxhRrcxTxgsYc",
  "key38": "31CBSbG6tkqzNAWft1tza8kJuwerTMBex4stnFxv1bSmdqsGkqkzQPVfgwHiBg3T2W2EsNEmRSmocqU5Vn1rEnYP",
  "key39": "4t5q9LgSFUeWZiaTLMTxefV21qqS1hE9CYDvUPYBCPbq51m9Twvw88Bapi5bi6Cchux6p8SdnEVBFMR4nhJbfn19",
  "key40": "fzEBaJ2eLKQMjk2zgghWwThwsXT8vPBFTeuMFo1PcBpFiAW7oPjPTkK5mz1pzsQsJZCjuJVCUZuY8imzJrdEy53",
  "key41": "5Z9LNq7TGyUFzbSSuVtEVaCaTVp92U74PhDHnF7vZuDMaEVErrgncL2cdD7SnEJiaPTzbEo6vfNcN65ECACuky2K",
  "key42": "2wTPzpNtAa51mGQDN5dWtgCXTZU5PVvP8rCUk9crAFWHeGDCNMU14sz3WWwiGRSB82pz9ThdxgYeD8ENWX3BAUKP",
  "key43": "2Xx7x7MSRoaXKcf1y9nb8z1ATPsAZgp1zpwoSgYWe5Zp97TRf5FxyQbsah99MjjBbtYqJGDPwCyTmUGCutRuWqw9"
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
