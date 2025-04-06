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
    "4TXp3cm6mQEQdEdkifvqn4wnWmZM6Uh4zAQqng3jZNfUjdH1WhtrsgBh4iWYtaoDcBQ5egHPobL6UY3aKgKbNMap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RVwmzjS1y2LTLkA3uYDSTBH2ZteerhAgiFoXBe5F6GpwuFLnW8q3m4GAmVdYsZQed3bCRez8iAiPK7nGq5F6fRj",
  "key1": "5Lpw2FpPxuXrDJcnezMQYhZdhwkMYbyEqekC12sAju9ZGUR8hMY1irRkTRyxathDVP7wFMrZh9LVhjDK42aC8xvA",
  "key2": "4pNiJB7HT7FWZhehQwvQhNT1ddJhPAmNgd4QeLfzFbmsn88zUiZyp7BpxkhFmyvQPQTavVyF74pqxxLokzdUM1RX",
  "key3": "5HLVT8DUEYRqZu4yFmFryTELZPna8SNdSe56Xs8BqLXGXZ2VDb83w4pL5y8MTZqFFTqjyrosZFCCbpTHV2q4sJbu",
  "key4": "5Rba1rs1ZFLRcnbDizLkJVEZZwgjKSV5x1KNYLSwRzQohqpbYDUYnd1PhmByDyY5wPo9ZpVJsiaNuMBU2j3wQ13T",
  "key5": "53Bx82HWBuJPPDv88sWxH5XUh9RxeKSRwUcpVCxg2KfpW7aQBk6mMLFNTSTA1hfP5rbAQUMYAteQNGRs6pgoEjqx",
  "key6": "41bNNvSYavZpAQjDs6bQQVqTJrRDEP9ocXznzKnyf3kG6edgqCNKEcf9VtjUhZCL1mrPwCKdvT2gidmsdZUGBwgN",
  "key7": "3rdtaKc43VNumGutQev94exm26gi34dCGh4RZyvMGAULckDefufSjVz4pJHVZqtK3cPJaMw5fpGshfHfGA8m2MPz",
  "key8": "5kWzU7UBEx4eFdvJ5Ri2TGbp62freXsixvepxb6bifUaGuGspqq7Yz44Wcw2v4YXqWukiCKLpPzxdTNCbngRK9Zc",
  "key9": "2P41qpRkx5Vx2dAQ199aHL11qUuZkf4KgaJwFadKmmQZ1xyLpRxSDV3peHcjRBSmEV1otfkS7yr1Y8E79maj4w57",
  "key10": "5QrTYy2bzm4rdUsrnLvf35c7VhgTmt2GzZ9Y3AgT7Nm1kbS8ECzF84uVCgk2vwpug7WdrVrCA2ffKTENVtnViUtT",
  "key11": "2PfiRiiQcmy5db2x4Au3LfkM3jwhSHFyRGQxfiKcbhzZ9FWVMgVaU89HyzEmPcLaL6Y3ucWk9vEwxeUD1ZoLMjrk",
  "key12": "4qCPzdsSU2AtWbrD9E5Q3FBmay68daWPNuqrAMy8FmyR3TGCESTs1FJtgGiVKMq1gx4Fgd7aDTB4DapKc33qBH21",
  "key13": "5J3bdTiy4RNNVcuBDJSLVamccgcTJoTHui9m6Q67EC6SLPyczUMECjrR5TJ9Uagx1S78ah3xy9SttSkydPSjFXvr",
  "key14": "4Vs3zizGGRo9jYBJgRQLBNMwCQcJcxuxBXPFEkBwCQBGgvJThfTpU3v42iV9w5vgsQX6Mii8iK9CCKGVn1Mhuxb7",
  "key15": "2fJAqytufj8vFqyFj4Y6UNypEuH6PKTPVpndrNtbgLJBuzpMBmTHYe8w6smsd1ax6rAwjtz1gSighSEtc1qzTNTu",
  "key16": "4hcz36VvyMjX72WZvsaYskTYGY1vGAEJRHawG2CCRWbYhHRg7P2dt3p5XCozZiQ2LLrXUGwR7SrBrKqxVdYf5u7v",
  "key17": "dEcJ396gDZEGsWhcDLetGXAUFsqNHUsAZYJDGMi1EM4wPMWEaKyWuf8h1Yw7cbMZ6oiqjCo1kCVY9HekT8fdHuS",
  "key18": "5BwXv4SomaPbPsPyzeNhrYG2Wn66qn7UAXRYdeyN8aeq8sD2m5WBDi2h5HukSL8F8QPBYxMnqDazoRzugSvXHnYM",
  "key19": "3yrPoasj6b6q2M5tCyRJdHW8Smuo2BWLNWKWvDkk1wfoonH5GEUZKCbtrCRC3rw3JB1mRtHz6xX35cQ5RHb1U96N",
  "key20": "3jkNGRgTbSMLeYMGURoz19PTQz4PHUUAuYgTYAxu25ukPYxAM5f5rKQzUHUUictJ8oyktmdbAShEU1cviQ3QB8hL",
  "key21": "2zUwWYM6ZN4P5MVx7x8ZWix9TvFNsK8FM6Z1t5tsrrF9TSRLw88iRDdmqudq8idxZ6Mwv2xRxnFquRP75aRTfbs",
  "key22": "4ZErQDT82Qy5brv7r1yTSVN1CNM5hjgU57zqpmiqq51fkqRHDTo65XunrKRWHJMmoXycZJTjJR3VKhxCFv4T7KuP",
  "key23": "35a2y9VJG3rZcDqRciU2v2sySTeFKCzVkT4einz9jdLooc5X5PYUH1DgP6UdRVxxFnfk7ZEKNreTZpU3ZSQMbtwB",
  "key24": "m3og62QDuCEFXGpY3fuxXJq6dm8qcRptviyPDwdJKcuAfVgWYSN7sW4vmgwqhR6CeEKzdXYug7Upj22L77K9Phm",
  "key25": "QVMn2CRHe4pWnTwhuvbDEnF1EraBrxqRRBuBfPTWaD1xZNZ9VuifJhQ75jthtWX9REUgyAQTU5BBsWWQG7yeKLy",
  "key26": "4gZ9V7iojZ9HHNKhZs7kKaUgsWjQZwmZiyu5WmETxiyaa3gfYQGuGQAvX6nPTUP7B9CBoKKLZFcUYGVYASEs78io",
  "key27": "mrBMQtBdA1G4SWXZcCpQX9JbYHbyPZMyYteVTmhagnrhATYj4wr2VjvScWbEe78GwecvkpWsfMNhozXkZh8Ag5H",
  "key28": "26BGqjQtTxhE54RKNDVgxu16DpwfF557kYpyNte2qfyhP8MUxFyg4AWL8miFUs19Ykp52VcgJd7C5ZEMYpZDgMsf",
  "key29": "2B32PJZHtEJ3c7gzxCcW77k3BEKdvaEHjgtVLn7LywLHNM2oPkcT853koLX8fDMj8a3DtjU96PTnFVj6WZwbce5Z",
  "key30": "4FYhqmcPZFizSbX97N9pYiP75MzfPVQziiPLDchFMDrW6JhdRPU3E7U3sq1Wo4rfiNhYndqq4CdkJRkoTuF6vqme",
  "key31": "DM1DW75Ck6ud2jLiNGG1jQvGVrfm9J8MsW78jg2JPpptWyAnepj2QuTjCDcJoLFTaPeUEfeAzWPkeRkct6EhGjQ"
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
