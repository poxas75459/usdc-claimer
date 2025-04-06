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
    "4j85bfpBknNnvbvTM9FHvaCDEejnyt9XojyvDPoCsuSc4Bd2KnC5E4pKeGwHd7CNY8doNEXDW8LjMMnWmb84xL6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pxdYzvZKw7EbLV8iYMPLVdsarsVr2cKhaGpVydXNgbZnKZWhVDeih5CTWhNgT1xss2a3Qpf1xNdBgG54wq2wmqR",
  "key1": "2K32v4XHJyTRzETUxKB4MiYPWF7BBjaw5haGhbkJGB8fEY5gWFGgQKq9jGZPPGa5xUU3Wz7TWZ73K7sbANvktS1a",
  "key2": "3khtCjWMbP8TSf7JVtXfkhcVuqkxii2o3NbnwTZHygNahpiGrxnbkoeZzJQk4wDiQLZ7K6rBdt8hCmBogHk5S75W",
  "key3": "66CLZrqz2YGyj4D6KveP6zppveZZiBHbfiMtrfjQ9XXYwiLQDmZXCtEb17mLPBvnTNQyAW7h9csVirXrfRcBa9wd",
  "key4": "4Agg2cgSvqWEsrWsjNz1EPKDWh8Y2AxJftZM5xF4XAq3c1Bj1kGT1kBUQxBKtb6WrCH3cz1B8E2XUjrVid2ixSR4",
  "key5": "4AmSvWgLE297A2JPcazhRXWpzSzRQ3BFXsLwKNZuxp1jERYp84BreSifSCsPPyxqZKYbA7tro7jhiF4Bmnx91Nyv",
  "key6": "2gvq16DSJBgj66m9feK7AKsyVWKf2YnBdQUEbr2GVUj64GqDVsCQRtAXiKsEHssuE6tBFtoEFiLQ3vmfS5HHGCg2",
  "key7": "H1sCdJYcCVE1xQJdLCfrc3nEuwvtDvMpdv6joahngrAi1Tij43Qesf3sbgg3ZRpJQEmjpFE9F4TQKY7EMs82mDH",
  "key8": "56gC5hsmnVz2CNQ4FCiuj5RrHmS9ZWghgjyJKeiSVoG2hXYrgavAG1TXcEhsAhrxzJrD6Sjgush1GahDHu3is1BC",
  "key9": "2eL5QHCTxwPqsfJhHngCCa93pNCdkiy9dwpTqrG1N89KwWduUzPqjwZKcuVtcNDYirRZ6EWEQj7phn92jidLCeiy",
  "key10": "3ZJTt4yNeApV4cWVgvGz7yQuFqMMBWCRKqT2fdSKFG9tY4nXFjTM7j1VCy1j4mz1GXszCsaAftPjdUd7r3AHRcCJ",
  "key11": "45gv7c6gFV4m9Y1ieVMkJ2umoqM7b26yCuLx2qVzszkxt5DtSdh5xzXNtWbcRgAJoAynC54y3LEFm3G1qrHkHbcn",
  "key12": "iaSZ3EpzqnxX9VUhvgfxQ8dMArjA81f2sCMxnsK9jTzfBTSgHJo2ig7Ret9VGSHotHrzu6oxHx24pUU6YLAemsY",
  "key13": "DBURG4MTsoQWsLJF1wEEZZM6tH1EiiPB67hLSe7uSwLPYSKpZNaJqXdwx8mSuwwkX4W1dSWQSTnBe3XNQ9aAF3J",
  "key14": "5h8JU1Rh4vzg8Q7zhhqeZzRHdDHDWCREMDFFMGrXVnYtHg15T3XvRMfCnEHY3bx7MzsCPqggL5pMh9DZ3YGtsQmP",
  "key15": "218vVD61uveTFdzdD7EQoQzdyCAXJJdKvQ11odiPFvvKC3sVFTr2qwXjFr1yhj3yeCdx8oYk4igihf3E5sGpDnHU",
  "key16": "46JqXGhuB27a2z3uE8mfpFu9E9nHLcjcCMVchyGRbCBVS4EKRNTxoupFDbfm4vZLA7SH6k7DFQeX4kviXfu9ofR2",
  "key17": "f6XBWaEHWkX8GdMSeWcbGt46VYD6cavAv8iZRaRNiJugWMQ2juW7J3kP3KDdbk1L7F24iCxs8wWSsngSy7sSfF6",
  "key18": "5RPcL7y6UDHGoqgQoEpSFvDcDkvAFq4W1KoWjzx1bnrWJgz2ecPPNdxgKvQSEfyskhkDD1DunLTXMAKkRgfiGVEm",
  "key19": "2Mnx9DFaKuUfUQRG3ckzL2hCCLDetMmTh5ZCAVSSNFpQyhhQSJKRqkoQzvS3R1wVfEbtHV2APmDVU1zZXyfjsJNU",
  "key20": "5D9h3jqgBDW1KEdqdRCNfSUptzLUhPdpnRJHmj4fRQU1Ppo6319gkA9oWb5qp5sVyAn56x6oeXCJ6D5n23XHGitF",
  "key21": "5KonxjN6XR9FYBtm1XepZnuqCWG9L99DTX74VTuy8C7brrnsQYK8qZyUzptvzZjhKe84Ry3TSe8srTNhJAzkkDyy",
  "key22": "2o5DHCAeW56R17e5huW5DRXd1QR7RXXDguG26F7ec5qb7VBBDqYd5FrPAYh1EKaqeGNhrcfrWZi2H6xBwc3XqRwi",
  "key23": "3NbBiDx35j9bJcW6QdvEpVC3seWRYUsAtUfEvgkhHGZDMVjoUja851EhYPReaFJ3JcLjPirt49TKs62TemRJqcE4",
  "key24": "HAKJAfgnATefwfzB9byG5LA5ESSxnLtYvPDRD1Ec7mwbxbVfUDctkNK76Nd3JtomyoHujcTWLYMNj53zmk9syng",
  "key25": "3HFydVPNAVjLW45wSWH1A6DPstjqscc3uJdmDWy1xTmDSqQjQAsARdUDhvLpHwkawK6qaiqPTJSJitEoxxfhfmiw",
  "key26": "Sfk7G27BmrCti5jynKs8tC9gzZgKCAmygjtf5wXzeXGVaNDJ7ADzfUxARYFMSeK2P1kK9wXyj6eopj4KHD85gYz",
  "key27": "5VFKZCAubetVAyaW2sHo4dUKdrYeVQsJDkzo4doAmL2zXuhTtzP2kcaM73tH3fLrrHz5qtJcpNcje4NdodjTaokW",
  "key28": "3X5Y3e62QwqtF9gUjAiipJw3bZg6qQm1g4FVBipnpcckqj1YxoKJ54zCuGyY2NZbR7TjjNTLsAzn1cKx61TsMR2V",
  "key29": "4vSHQUcaF6X8eZg4qYZQdP13whSHhnaMF9mV3gJbSTXaLp1wPANii97pTpo41FwMUvYzADN6UsNuyGbZDtjQCLip"
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
