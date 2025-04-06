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
    "2mzf1UuLdjX6vS63KeaLG6ZthAtwrv73s75Tpz63c3UyvEmzSR1ZXFNnFVgRekkgXVe1oPGbNtLu95U1MyUyb75L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cytAkX5C5xnSU8U4Khxntvm2CEf4wRDD5hJ4aC6q8D9KdKJnZbo5rcevpjKfXFhEdhPjs9R4RzgHU3ES7KkiGBV",
  "key1": "R7qGWc5TaJzSkgf2mQvmbA7iQrJTwnCHuwtWLcsWQ4RYTubNfEtGB9eDVWSyzMzAyjLJxwm2v9AYhouJCvna7VB",
  "key2": "VBrU3KaaCQGZ4LWH3rHWHxYRn5k6AS1iJy2QJDckvqSfgMybDfRuWyK4FSRomB3A99qoW3vTpzEfM1wKMHb7p5s",
  "key3": "Y2ZiUZ3ufe7z4NXuhxSeQQFhbK7TafMeDRigUEWyPWW8kyDrCCmdzKksdDwKQY8qADvxQUjrQvStfgUqDepAmJb",
  "key4": "3bFnGYVGtyFdYpo6cAw8fWAc4RRw81Q7Faehc4XvtFPTYajzKEwhdQuXZLYqqfCVmg3SjrJAQUMyeQTkYouGy3gs",
  "key5": "2kuFrkkZgjvtxWd8GNs6FpsoBfr2XkrcyJf6nQvP279Y5a31pWDXK3uZRZHw4ddqgcAwRqikgXkyje6Rhy7HscAQ",
  "key6": "4d8rmLpqvujEBYv1Fr13Cky6xYS6BFKP984bXmzdESugYuD4myCdVxd294qnf3eas7psxDWfRLGfUj5rk8VDPL2Y",
  "key7": "3Yj8DqcHdcEaU1kc9FJaQXrKxnsTbJHXxooZ5qoHch8ckTyrtwvpN52FL1Hb8bjyUPXf1kULvPX9BfucsyLaaoNG",
  "key8": "fTQTqCTjMXS7evmzQDJouiPPzfTfFaAQKsAXMsvFDHsbLK2aSNWNtkXvFw4eaQxRvWWbBBhkt4zaDsryB1nyAGg",
  "key9": "3oSZgR8LBGamr7p7yVSxyqX26TcUkFHPUukBUaSNvsLPY5xKsZNHCSkWrQ2FXPmLoqSPPx6hecy1dAo548cTHxNr",
  "key10": "2vHwXPcX3Cs218w2i36m3FYb8vMuvp695t3wD44HR44TaSV4uusTJRXKAjbqdQKccH4qHq2tuW1StLVq9vUH6ykD",
  "key11": "5AnLn3BU4VTqniaskDwfTPkBnsaNV6PRkV5h3fDoPXaLn1a6KhVKX41gZJQTcooL5tRC4Vo8pFDTmT7QtTM4bSdS",
  "key12": "3sbakHGDswrvuPp9wAdU3VMHTk65rNBfsSag3fUM4kww8WkZYKik5frtzeDbCqWjxU9nc71c4by8ouKpvDBc6Arq",
  "key13": "CvipYoRLDhFNx7XpMnF8aMwVomsUEjdWiikoPnUDF2sGpTmQJycBRQLcgnjS5wgwPu2ygvQ7RZAB3xGGLn4rmfY",
  "key14": "24haEUmb1j1SjqzfCDaAoMnfvsQ48975UGz3KYLafUsvbKLLFb1xuN4R5UkHqhamY8stANsG8KCG342QPnwvCoUq",
  "key15": "M9yP5GCQWTLtYc1pLSYEBbTDzioqg4JxCL4h4ac2J8br6xQmE5xibTYGbBMzSS7WnJyRrntzdQpuELFRX84UQFB",
  "key16": "4M8xhPtdiFHYwgkKfPRGRVTXS3FCvXR8RsAB3QYcvv9aUZC1NhMeaxkU8Uem3zmCYihRutzVNhQotcyQLUW2yqnt",
  "key17": "3KoX3bUQmFncmGytxArsG443gQqW4rgCYbwfQw3RYnqAyxdwVa5DtDKBAZprmutFaHCDDSiwvuNbceSiEkAt1Cia",
  "key18": "52UxvU42WVxjchaLBpPkLBcBWHRhBiqHWmYcTPmVgymXZVX5e8VAzQGXgnj4tEzrRvNhgcyn2ayJbxm1wAmZSD8n",
  "key19": "4YURrmhF4WeQ2xABUJpaTrmukTFrvtQ4sGonRZ3DRJ1mg6X3zWrKpZJ2gseaypRjgPD5PRUWNLMsUCMBYdLa5nPQ",
  "key20": "4Qntw5goeejwWiHRKYvn5MVJtdLa1mNwiMNHVubcCYVfwFNiCXyEHqbHGKYyGRtSxprE5GRGyq5XvvV2GhwXNUoQ",
  "key21": "25tZYee4ZNoYNeE76FUqZS6u6m8eV3Gb3Ntk4vECzVb5y1Gt6AHXVWGLMntHvj565a6DkVFff2B75FQGQuZLuHbn",
  "key22": "3qfZ4tQvbsuq1F5FSqcPJrcp6ZejaXKHQ7JBt86X5Ex5TrVWx4p2LNZMJm7ECvStzBTXQdB2XCNWYkY4AaSdPzih",
  "key23": "nJtxbf8UwX7ZnjL3Btkyj61epfKVA1ooYQVqqMBotc8toevnD4pr5Xqy7Pc9QAL5afzDzJNn5PcbviyGwYa3o7s",
  "key24": "1WXBitW6LFpDrYKbq4CTN8i9tZgYKR3LugkfLE9DGGLdTheuAsUUERyQaZSWwz4nqGMbbk8L5E7yMZeRCFeTsav",
  "key25": "mPzbBsVgzkFro9mWdYPxb4M3SKZVayyxZEBPAcGhTnEzSWxxSnQmsFRdfemSRpeFPRpK6S4iHJQ2ZLPU8c38j2P",
  "key26": "2CFD6AjwDPX8kGygTcMDVmZt2WEdBGvPoDznQCKN8yez5E28iyA7ShJvruX16SA3PJrCFMjqBN7GXd9o6CaWnn9Q",
  "key27": "3X8qa9SqX9htmpJR9Fhn4f8isvfVmsMmUgA5WiETe5FS5S2ZkXMmZFpnhbz6d1nr6nixgPcthdiJJvbDtRAdMJB9"
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
