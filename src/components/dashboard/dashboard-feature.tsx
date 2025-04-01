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
    "43KUf7aiEmaSLnouBViXeiCSaM9EGgjMrn1xxjEmuhCFgcdvPXF2wN2Nhjwd2KSiav6uRMdX81k2datzLqgFwG94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AUEzk4BauiNBinXcJJ8ZcfMYucC4MQi4E8nU8N4RaYzhK9CdCL5cDR9qP8XZP3jKiHyLfSnu77SpzJYkJmmJSr",
  "key1": "i3ogWBeEmZKMAoE1TNg6ecwBmLPbRnGbWhg1TPYpc2GNr8FUVc4dJ4o4ZUfAu4tbaGsEduS84MWQoig47y3vfJs",
  "key2": "2uP53y4f5r7si45AkTWWFmZbzaDcscjcCM2ASFSXkTwqmdBDUrCtdjx7kkRMpno5bata2urpXz3NyqnyM8fxKYhe",
  "key3": "2zNoVnAY5qRjdjuwzSFieQmRvJs7kMynW3KHpgQXpei6x1fTkf3TConbmZfDeJmZi7JkmJybCVeiRW1LewPYeP76",
  "key4": "5CAq3nBjw1R7fzajWQ4AqeXC4qLZnDTZrGNP8rhtq3AtJD7hKWi8y9Ci6vNpHump6qFGwkmLiVrLGYH58AfCuyDX",
  "key5": "4GBxJ1HxWznVJs1SaFkdaT74UcL9k7coJoQEQZH5vZ7xw4qXcs9iKUaHisTsFM1Pr52TrSSDQMaJ2MSuJhhAvL5a",
  "key6": "64p32RprG6eYbNmcSMYEkPqfxnsSRnBkYFuBtuhPBp8z2tcp1HwpK9bg1oZVsvULJZbn1epVvfkQSGya5RY4psKW",
  "key7": "125um1fUzKZJqeQtBUDixatejs7fYevRHYKJjB2HQV1VJuzwCAMivjRiMFP4rPxA7uXfe1Hz2D3bEe53UjvBCYzF",
  "key8": "5tbwKHxq3s4MRXDvWCprPwkwyV4yXhM1smbWdQsZaMNYtiZ1fVsQWjhVRuhMMhNr9pwiyjZh4ZDo3FF5JEH2G8RB",
  "key9": "ZYRXiDN4KTmj6VVoDUADatJA2PgApL8A8xsTJfLf3r3NcoiMDkLnLYv3J594jVqmwtULMYCo2SAm1Nqk7K91TQc",
  "key10": "3FAvALudfBcGN3MEjvNjFyAWXcGRvF9NZUZuiKNerLwn5yaW8nmJU1fiDYYQpZg7uHkTAwBXZ3Km1jpvT2NF43wo",
  "key11": "35Wq8HpggEMfh8SQaum6o1UPGHiNjmMdUeb8UzZETWiGm6ZL4bJPQLBWAVSB52CypucHE5u7spRB7d8fTTrordBp",
  "key12": "2s839xPv9kb6iTePjjk4nYLNhj3Rt5ZY5b2VCceJfke2DabVkwzmw5a3LqaR9yUFYbU9fWkk1v91ucMvArQuiiMt",
  "key13": "JMXcDPTxdWY8KiKrmBJc8hEEeyQS4LT5QAtqkLkWB9mQS9uZ8oz97nEcJcU9zMQEAXMuXSxQWtfiii5HU1oUVdP",
  "key14": "5yBBbWCuEwdmSCbP9ktuN6cpE7ZehrFTpUZTSCjzJV8wJg49WBbNo6quNo2vFpQJd1ULkxDuvB5hyihvof2inqHz",
  "key15": "9kT1LHgoy88CXGyxHTHyNu8Zj8Ebz7LzhXs4iKiwzqfbqjNzG1AVTcDT1w2xD9Ybv5adocudUL7QV37iS9tLSsG",
  "key16": "23YHWn8NEYsK18zTPfDtPpHMBiqLxrfzpA1sjVEVtfkKechAb6V2A5GMpUaaeM9k7aPtjiGJcqEHFitZ3bc67x5e",
  "key17": "Fb9MBXpj1kEFs1MTcTZfx2GpviFTxN47Ck8xah67xmXEHBVfgWdc4VqHAeD7Yrk2dDaaFX9YSK8NBsijy2vaDJN",
  "key18": "hsL7NwEfcgMzLKKyC2SJ3guuq46LuhaCRv9yy9FZhHLUsrz6MAVgLvREXm2i8FrGdPJziLww3ieLEiyZp7CYgrQ",
  "key19": "2tuP9bC4KXYz2r4dP2QiPZX5Kjtw2ovbXC7vtSkddWZXyhy7wCHZsC7HDnx1mRDj5MNZsUB8TmavQiJKVGAV8xy1",
  "key20": "4xSX2u6gHbXVKPseo512CRRAykxAMQYLdkaZh5HN4VGq4NGKzXeGeHwoBnEdgQ6GgxXv8cFc6p3MFvZC5ysbUAVS",
  "key21": "2mqVHFW2DCSyxtxF7TwKCbdYP4R6GpxsG4RfKAkAyRm2h5vJQBD9wZVuHiaj6VaJThHv8U2k4HjkG57b6kyZ8hZW",
  "key22": "3172xpiAUCnKyY74GsLjmf12wthTT3it2iZqLqQkL2Vmyr847nLksHwpjh3gsCNcthHAUGn2e41qaUbeq3ZrFMMK",
  "key23": "3CgnzAp8JRdaxqovKkwPqwg3VbPo96xuYtWKbGvUAcAH2oy66zcLw9tcM4bZLkEKjjDdq8CQ5T4HfhgZL2dN26Nt",
  "key24": "5Meg847ufPfodqBnHkqP9NdrbzpY2ewn6N56imaqNkMAcdCL24Q6wKoNEVaoRPEgLXb821C27Ty9x2BUAAqgZAGd",
  "key25": "2JJMBvZzRsZAamUVgXSR2151EoBLdEvzHpe28tQnYDPHYLatMQ4j5Rgxg4mAEcXxH5mgrUhXtstc2LPejR49rh1v",
  "key26": "4CrmhqMPvhrTT3usNte4RDYmmsdzDCLeTPUQ8yJo2DxFH27fwWcJBjLF8qMMUhXXD1L4d8QjjTUzQ7pZZnpiPuLR",
  "key27": "5Y1oPYuGFqTfJD9HmiANdaZAJ7fLh8f2CwcYPiMupzVqrLxbUwSK8mrMWgtE68aniF85eFEzG9VX8L9JvyxXi3jL",
  "key28": "3qEvdCiHcmkUtW5cfpymLBQWwp1u1Pb5tfZ24BFGTDwy8w8i1qRTcXWEESxwWvXZiXxGwPEzhiwRYGBUUnT9XPU2",
  "key29": "4RkeCNLRtbr3NXzL6FQP8qoNDp86Qna2pNK7uQVQZTtZJchGUwWGhHX5Xs1ewTTHMBsiyDNcbYYuP9SJ14Zi7VPL",
  "key30": "4xX7j2Kad9Mwy3zxTnHZp8utENfghDcuB9YDKxniiVrPrKootrSbNcM5ZhXPWgQAC396QNjtPTG1wSfS6JHgUpEu",
  "key31": "FcfUyreEEdqpe5MKn6Ps62zy8Sip2qJsENx2E1GCKLW3ogUbpnEhFR1WfvyKsz5WJmXxmTcWYwbqvuvcrwPfdrY",
  "key32": "2q9Ub4Y2BCTd8aBJHLFUA8TVsU6QL5fmF9DRDMCAfoaQUWzTekpRY6nHperT6uCLuYA1sTMJMA4pkaSLwhdepf71",
  "key33": "2hKME43TGv3SQqrk9zfdpKTpGzgcQZLruMCTboPPLEP1AdLV7XRNVK9wbq2TzSK6xoUW22aBCY68tme4eyZE7gUq",
  "key34": "P6zJhpxL8BDgKwxZM6TDc6KoXksVpWLiNJEfdwM2AWLRmoT8ecLR8BqABZ3ydRbvA5x1tLbAx8bKFmd5kVEeoKr",
  "key35": "3iMcuHTWaNRt1cagnHePc5WioYZ97TkSRv4fPGkJ9TkSRMdG6GK16G8ZBmuihZeoATrChygUaFTAbGiLWUzTNduk"
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
