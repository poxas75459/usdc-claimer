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
    "3ikQU1FK2PEw9J1MUV9VVLLNk2xF72ibJm2YL379uFekRLKMR6gUXNkFCn24GpKRGnPmse8Y4VPJBUbCARgfVsC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62nheaVrt6icj47NEhsSJFiWDxcyPFMh3e5owPUw16aVCA1MN6mAfgZXNzYSM1yy3FFMuEvLEVHkX3Hc8ET6Nvbd",
  "key1": "41zpR35g1uoJyFzdAmdoDSMnvwKyThmjQ88VnE8boqf6N6ng2wRPHGXsGHWaFuvs4f8oJM3BpNtSk4EDSySAQgQu",
  "key2": "63wEN9PSoyUYtWfnR1bkFbxFqAWonUdY6pN3NjpzgNcbVCsY7xhYfy2FaAW95M4fuW6x3MHTBwHD65knShgNxG1y",
  "key3": "574nf7AHmj7mpmt5RQ9FvxjFkvdsHRAqPLxvdAPPx1Xge4yaDwuNETok9wX33pRftqJaCGrkC1pZDrrnga9oG3jz",
  "key4": "28UMiuxgFXaLyNDYmepsWXNuwWx8s3xetdZPrKegYv5bZBmxs9tb2USEh89jszj3ZWS6NgMkZ2B55BGpfZVmXorR",
  "key5": "WDoMe7tnktEp2NkADn1bZucr3t8F22rjaPjLMsTV2p7nssNHn16chZJaiFYa2tXKm1qN1HDT1x5mfv1SLj3qHdt",
  "key6": "2Uixr2TmtfbGRSzQnVZLKYKwr8fFAkvRzufaoPgdpdFeQ6aqho5Vg44SEZn9jUhyx9vboXtKCL5XGxKiTxahioan",
  "key7": "2pHRbE45dds7TcnT6QSMPHt9ACybKwLWRtvf1F9GBNVvfEgRwdwf6dH56i4PHKRCkGibvcLgDLPZXyqVjh1m8pYC",
  "key8": "62o9CB2qcpP3e8qATaM4binaPW9Zo8fDfUtZd2LK3s6vSyX18811o1Sy6d9RtkApNVSCaVME9Q1F3vzRasRrSrUK",
  "key9": "4HxgAsmo8biwKXdiiZRtSVAZioKqVjYGUqdi4j8PZWuhk2C2qbncw8f6N6GFtagZEKqNU4QS7uE5pFE4a6b2mSQr",
  "key10": "59LGNQGj2wW8KMBnjVfgrhSUv4Zy9qgcvkk5jme9y7CyC51nLD7cCtVVwuEgzwudRpFTf4VHdsz4EEyNDVkyKTUm",
  "key11": "36b9xHuC9hTFnbYjQZFPcpSzSPjp1qf84FZu6rxxNnrvz6Yv8CvbUbvEawCjnxi2NMEiw95dYHWDue8C1Q3Y3SG9",
  "key12": "4ixWaixX1bgDCxSdASLhT74GMb3f9t73kfXFmFG1Q6M4MnCbAzEcfK8WbKrpBR5ubDsHGTURjC8Sxr9mx2JaQA6o",
  "key13": "36265v8BG21JBvnfjpPUPoQxucWiwRBc9dpEtTH94wmjfhEXkembCJP6JAbhMERKnLjZL52bD4WSGTeAkqsh69Mf",
  "key14": "giu6DFb5uNcEP1Qohamo72hAvK2FE7ZnEpag6dCSHcvM59h1KPrYphwNwYiFrjBUANRqanzKQ4WBgsHxy88TqPk",
  "key15": "3szfnSgx3nEt1Q6e5KvTogPaR2q9UX8HYroS4xtMQhNq98epTUYXc3GdYCWjXQNhW7fyqVrKj87suj7dY7Nnr3L6",
  "key16": "2jhS16JxJhptbKSrq2zZo7hadCG9UZaxSYLs8dijyVxtq5qnHfZDbSYc8XqV5ytS6p5PAbMYJrVkv9AHEAJLP8m8",
  "key17": "21whvGpHEdK85zQQP9cTzBy4EhVFNATmgkNZyvtk9gSrKQRL9kRMoVFXRj9RnYBPdndVKiyPMttoXYWsyTqzv2eQ",
  "key18": "4fYMy2mayAEEEdAScn1n7aQUeHFgqVW7gAWTDe3ooBehiQzjbDboL1sbXZ3NEb4SYcxZUarstyp9ZMNxEMW6QcVa",
  "key19": "XeBgBH6mjeQhpoE3V7FQuzNVNrYjtsQMKo7U6HSEXTWuoRwg3hz3scdCsbNaWN5o2SXHvhCHGAHEWRVLBn82T9Y",
  "key20": "5odh2fvwtJ4Z4sZ1J45XoRrpsg2VV2kvbpGzTe5A3ibv7QaAGny3AEZm96m9FxNdbQdif7d4KZ8BH1opYfZuBktt",
  "key21": "5s8sXFtdHPVRk2myMuGH27Wv1kCZ8ZKrTXjQZWDXZm8zydZgnfsEVzMYsaQp8aFLzeZoC63oVwiUeRWhZaQbeVT1",
  "key22": "n4VpSRVDWBqAvMosGvazQnTpQhmGzspSbo1mdZaaGKqVHnJtk8Ph1shoGreh5x3fF9zyk2EBXAMBhCPgPvBcdAB",
  "key23": "5TzstFU9GBxim7kTRE9mvZ3NMkGBaY4tP9wBg7akF3oj94jnogVHTkU8bJiHADjCyk2h5Mpqrt8b6c97W1qG3mU2",
  "key24": "5pf7Az7tMaGQKc4hW6zUG3khCBf9arrzAWZ86yY667huvqh4pB2HrXq1yR3Sj8rKuDHpDgWyTVdrhmHqzp2Nz1EP",
  "key25": "578YwhV8ktmSeWMzQm5woMsALYfyAkoVkZ5atCZxqaCkpqVJCekNhAb9bfcxmwYeG3E2nBpkmVrvQ1X4cpaSLr6s"
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
