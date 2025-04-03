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
    "5zfMt4grg5vcHW9eRrVrMknT26pFV5ySmBL2zeqDCp9yDhAGpNCGJUuxKmDgDaFG8buJsdSc1NKciSRzFjzoY48d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63dY3Y1ANUfPMzdB9hQEae5nnuLQrcnqBQeuj8KySF5Db8q6mwR23Wib7UgJhikPfaba2YXUgujmBgGGA6F4qX2t",
  "key1": "KCs9toCWUv1ARPdpZr6LWeGH1evQRkQ8KT7oNgpshcZk7mU8ptf5542XVphdeJas2gibtUqEYFmgg9ejtsaDxpf",
  "key2": "wiqfzkEnxetr6LVYNidQAntPgdhatCFhWtoY2YBPiv24UzbT7mjBHFnfpfqndMYb5o16t1WBE53ZfAZZS6UN1i7",
  "key3": "3ruK6ucLpkg6BvngZefmQy771qRuKSmonRXezAPWLMQUcDfTJZRxtD87ZMadmb8KF61gFkW8oV5sNNUdZTHLhJAz",
  "key4": "MSscLf7uGjyNesBgFumtfPdTAuhiJtpRjdW17nLL4z5JecoLWMfXfstbCchV4z65GdNGY3trBEG7wvxGGftpQso",
  "key5": "2Cerqsfmu1WorCAHmLLNbjKGXMMnnbP2pvjnZGwGe3P5TxT46W9pQWhKobczw6BXQwMqRRdUNiGbF3VTn4vKJPDr",
  "key6": "6Fya3wjsbzBJhnpe2X1rFVjY6jwK9p31zheFrB72bAPzet21mkhXB3NWBweQB7HMWYBGUHfe34ZbGTe9JoX96Ak",
  "key7": "2xBTWAJd9RSPHxjfbbUHGeLYz3p4bnM7R9wFHcjwAUxwXLGxA2xouohUzxUqHXSaBgWj24y4gdUvpp8jWk9QFzNw",
  "key8": "4DZmQyDuzvwzygkMNopFRYpiMKYSqpHLCTn2GKaXbAz2BfSRuM8v5L3LtLvWsBYAtWpPfVQpbb6zVchJgdjpMURt",
  "key9": "uDDGz7NfipcHju2WvNvaQ5YVMZSWQbMNBn3CtR8toZQB2SxkVj41KyAn7es8JncjhW4TsdWHPnKaJ8WkwkqQ1La",
  "key10": "ukB59RFeTWffkS6kC7qA4BounDAZt41x5naurTouPaKHetMY3hALaLcxehRDjDmpwhLq7GWAjt2wMLu3fUuH5ji",
  "key11": "5UsLkcGXJm23eUtSdABZCrLw2gtV2hefS7hbbqRDktCJF1TRv1mKs1rcozryJu1oEYsVqyTA7Zs9JHZ9LxF6W49d",
  "key12": "tSHRJhjLu8Jg7Dq6rWQAqLUfPS5y93JRRShNurpb4SP69LKGbxswS3uyMQVhBAjUuJ863C9FKwPjmvCtpzRzMNs",
  "key13": "6ENx874Ar9tU9UspAeQdRCatSYax31S8EKcNBQpFZjKRdXS6KP3a9mBWwYZGPPJkjfCn5vqmAzGzYjbz8q3nCHz",
  "key14": "46BdJsXTyUVYFBMNLwG2GXBpM3v7rvCzf4QYneprwyNCEyiS2uPyFuVUtrEwx6CCufdfH8K6k6H9yvnZUYhxdWMS",
  "key15": "33jAKzLJCZamuVmS27EHwD7EVmioQBTKkQSqj1EdmPScq6ybPSCzwCQnzy1niPufEVU5dt2Xeg8ueA4hNU6oEQSS",
  "key16": "21g1fUy2pMVsco1odLVgHXgURZTbig7bKBboUps36uDCaipkfWhGfQKysDXiXTegsWRHQMhfU7Vv6XqY1V3x9yEu",
  "key17": "4QCQ7B7sjqG8sbmvSbrXe3NiDdB3ESgMUuKGBwyqjZ1WraofeQr2Mw1bYy5z8Z1PxxFfMgZKeoh3kBEToNRfeevZ",
  "key18": "2K4zoEBKYiHekvHPVWsPHJtWu2SdCqLzDynvhjst5L2KTEgT19QfDHcGRM9i6q4cdJL31Q2EH8s5R4wgZfitkhSQ",
  "key19": "gTTNxTY5Z1WLzJuDiGjTxGnCoaj3nofBeXWjmdDhJ3FAPyDyHVja3TrjpZ64LSjxctGh9BJURaUaYPNtCs4HGiA",
  "key20": "czCeo5PjqTsQhsmqQ4V3dV35R93VxUiSSsGm7PDcab1kzPjcRicbTWmvbSwZtUJrCPwsQ1m5NqUtsTggj1qvtwT",
  "key21": "2fuwNHJtuDn3uf68aJuZEBDsLhZxzxZCUEdhCa6Ka38bctC783MgXejMNQtVr7JQC48VXTJZg965A48iuyiaf8DU",
  "key22": "3uQzUpekPihFr9y5ahpsvbEpN2e6gBCcj6cN86Kyoc2gh3R3XvByuf41p27TFCv9FSero7oaqGiGMsyQDn1VPDAX",
  "key23": "4n769iNVZ2NGamoyWLFt6gXVJHX7egbYJMAvNuo79UFvDsWAqAtrU7srQ82kVJja4n2XewHRYHzMCn9hmSMkFwK6",
  "key24": "2UvsWErshUeKLm5tJD61Bb9b5LbkCRHRMG2QBRf58tVMiLshrgcfgL5xz8fTfbfnkaB3ppKDV53i4b6hmvTrhMkg",
  "key25": "34NzZYKPGMtZwb1r8fWYCi92R2dUqiSCQA7dLQTU5fozFRVL43BoFtfbUGRxJkHYnk5ZPeey3Zqr6pRgRJ1Pe6f",
  "key26": "42cbM3s66dxSm4nVEE2D2cfRCpUKGPKp31LZEGzrkhbSPc8bngXZ5x165zvvDDJTbqwity7jnQMq99Vv7s4knisQ",
  "key27": "3agQuyUJdQHv9C3G1LHcxfcNYyo54qSBKQ9CANNgHWhToNBKrDuqowMEeXzb5FvgAV5TyuTUQRKkdxCCciaacnPn",
  "key28": "Eu7cNwdy9crnDjGVZwGGmDzbCAPfNuNyzKNCVsEnWbswEzVV8794B1UoW2NSXfjQYT3KjHufvsq614C7iUbx7FD",
  "key29": "2AAwnYYpgNm6QQw7FYj9ffQGYc7viL73Ds1GcnnVoTm8bdCo5wEwhEDwsWSQyBg9MsXqTEHvSMPYK4QpbUhNteqP",
  "key30": "itTAQsVNcJKLPAGfw6f7dXEcRMHHhXQSwAuo1yQJ8x9r4rcPJrj4qQuu1Myh4UMjiLU6BkQ453ngY7wEqr3nyyN"
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
