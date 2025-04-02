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
    "4ZJ7JxCP4SNfU76BBwfdT5XQ4HZryT2zDqiKRFTMn79j4F5iiGErn3Tg6bYxzt3RHcZMB1jyrmxn9MyCfNXjpczQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZuDz5EStHvw6GZ9aHbtAARb1r1SNDbVrWjap5sfpowbqtwkzY9Wcaym7QY2bg1xXajcQHtLJqNiiuvzuLBvKYFa",
  "key1": "67JtsUXMX34kDFEDK5rV4n8t9znggeDuNWJftTNhheWby1m9C2i66FmHLJ3BZLxS4PJmRzrJs1ebKmY5xyT66SLR",
  "key2": "5aKgW19abuoDxxokvL1uHs42N9gksiHggW3sP7TrBhwr8nPZTUWqmaUh6nm3ydzyT9JWDtL7MiWeeRFhbPpriWeb",
  "key3": "2NMkLvgNWyDG2BFznx7H5F6GHdKNCf7pLYuaAoNdLXpUrxTVfYGRF71H35MQxb2K9UChicPvSKJaFG17orabnnUn",
  "key4": "3bPjo5tNar9ZXe84bKdKJArdxEgDGMaLR8k1BrryYN4KoyRfYCUraSm2s8PPi8puLtADLPcjLqZ9NNHegKdpbQyP",
  "key5": "56wFXv4VQLnWzwnV3FTWQ3sf6xThtbfV27rLs6GMFbY2EJWTnyjbJkKTHjJnLtSGZnQfehaaAL5p4gbQ69zzA28U",
  "key6": "2yTe4av3QwrVBowiiFaJKnwNhFZRjeYvD8wU9Qc1SmGBMBWkaer5iD91tiyjMoTtBeSvhPBkR5GUyxd93S6CgMU5",
  "key7": "3w37Mtu47Ts8m91YAoLyb1DhCTXGMYfoXDbv4MePGgfnGjw8XAKTuRqcpEGVxzQVHtJBDyu8D6KbYEeZcJsr1chT",
  "key8": "gv7phMoRAk2nwDhv9ULVwCh8yqwwYHzTDVD9ieoLgmUpjhAA88gYjznewnJxRU5eT7MCPT7UKtFaccL9dm6pqYW",
  "key9": "VVVpKJWLVeTKj3QfJrgyFs4FkrB1ovvCbyvytDfyttztUdfAyJaBeBr8Gp8RjRvshqd6d8Z2yC5qmkcRqxmaHna",
  "key10": "67AS26mdzRaNwbYNGcgp8asmbn1iW1QTNw72x7T6Fi8Ae5tE3THtbvJpumxC1XeEWiVzvCMbBGfYSjYhchoBLve4",
  "key11": "Lo5mmHLp6xwigAoXhn3SLWg6SxUuUSkoF83823Qv1d6WdfSfDKXEoCXgiEr1KYG3La8bir4hYNJQ2iZz2836D3c",
  "key12": "4CmuB39wZbAic4zFVfvpQwBRzQKTeZKrkTTsuYyRLFbQ96sJ2dVe4VkiDy3ka493R8nkgjfGFTovhMB9Y3iT18Mk",
  "key13": "3V5o6jB3A4BqDWhejLRyvTuoBR4VwVTbfk9CzqrQnHKH9H91qF5piLTHwkh1URe1VcE97KZguiZGV886gV7CcUCT",
  "key14": "2MGmtUY3ynKH9qDxC1Y2ofaCyPnU2b3GATv3JU9MizqgWcPR4SUss11DRRZ12UTwVoDM674vRAPPNeEDK4YMoyjA",
  "key15": "58z6rYFSSCaFanuiPiuK1Bmue6Ve4at7pqs1f7NgfLUHATyEKiv2Ja9MfzZhfAeU5BZjms5DuafQ1iT4zGdeWr8b",
  "key16": "dtu7kmd7mq1hKUMmkrRzyBAsyMqV1YXv8dUJ5KbR88W1CT8cgNVBfCYdXsyjw1S73LcVyBMBcC8nXjPfVSL94Ei",
  "key17": "3G62cws1BB4hKJ852KaKr8WhvUhfrqVo5ZmE3BsqnLGZXkLmphiLH2mbSX44kfNA5zNL4ZsBasQULXYFmhHVmMS5",
  "key18": "4ZWt8RE5tiDBPYcwA1B2CrFVgQejeR9cdkxuagQN8sc7a14C8WfUoV2qLCB7CYD4kpgxGYeerFXvgM4CAEGj562H",
  "key19": "5wLrUbDxBCaUdzH7ZUtZwWaTYZorWSgTyTU5duWvAJ1moYibDjZ2ZXu2aecREM5DLd3q5JDYcSsKcvoHfm2yAQfZ",
  "key20": "2JdLAJfjU3T1sqeZnDiXxaBRS8s6aMux3Wu77mnYHhFgmPe43WF7oFqxzXp1tEz5g5WdxPkKuFAReE4vQVbxkqoX",
  "key21": "ksxfYvznR1RubM8j4mGTRBw9sYRXYJ4daRE6SYbUyLJUt8GxFTZbcXQMnTxQRCnqCZhxqmJbhCiDQFBiDqtjYN9",
  "key22": "sT1Hczt7uTb4iDd2kPdphHmHHZXsu1zAuDr2crweNpBPq8oWUQmsU9J5iF13VSrXkqDaE14E2mooRbnoZkKZVfv",
  "key23": "3SbLxUMEaNgTf6NVVBVzDTQBfyLKdbSjXd5adkxzewYKrvxecr5kbezwuMYNgM1dj3WHPW1vGU5mWuMddYFrBb9w",
  "key24": "63kGrg41Z5h2xQp15mx5MEFGadUC9D2XNm1MvrahWE782tb2XKwYFFKgiNaVMamiBTmQuCSUVVfCmf24xm3uJLnF",
  "key25": "65MZnEtcaRbYLQFAPRiLzLcRdv9gbpeZfFHVY8nxAuvV7B3EAMGevQo1gk8cphSogZPTZJuQudo8PwTjvidXMHwo",
  "key26": "3f9pHxvWJsiqpA1jXtgwtjrtNU3UWhFECmtYw6gk5ZxDVXFVeE6oe42XNtM5LmESGFUo6kzDP7GXypGpvjz1onJV",
  "key27": "5whgmsSE3qCWzKaUWy7UhyyeidkRLZrfDF2kWn12B9iS9VxLJiwReNGwRqZviUeWz9Z1QG9dZtn194826Ze94fMj",
  "key28": "2R9m8YwpDfSK5W4iSwE8B535Ljfi6e4cc6jieiL9XhPmVhLnMijDGh6wmmTJ8GbpGKrtGBGEQ2emQGzRLwd15BSG",
  "key29": "3AKhuSNQxxDECRLxifqcBMzwKjSPRLHt5SmqjmqoM3ED7qvcsu47ufEYfyHrWxAAj6zprGarHUFgcwXHxcf8Qje7",
  "key30": "2ArDZQQFirH7ZUo1d45xyppktntTMMRgeo4y6vnT1SvcL2ZmwqVL4vQWCySCFZ3AdHh6yLMSoWFDnGxeaQHNrPC1",
  "key31": "4QFRR9bYUmKphQLDYBc3a4SquU9xNgdUr9tyhRgu6jB8z5Maqj7bF8gSvYr4B7cyjGxSsc1bhnFTuixv3w22m5LJ",
  "key32": "mETLoxgntzSQHaTdmjmAThVf5sJtV9scaH3vBMXEqxu8fg7TBibFVxVUh8cJJkRHzqhQfASg9vXpF3ahZQoMUrf",
  "key33": "4Y2dAPdxgFTrFw7TYj6NcjNNAqohjw5KAhbZSTLN32EQC4M2qntrqaJv6JiYXHGVk2siSbUQEcqLPCkgXjFPZ4EK",
  "key34": "3kKeUU4KH2KjrsZVoMRHW7j3R4Voxddh9GNBeRN2wRdSc7qKUQNnjpUavMnwX3WCzfW1sTr2vKyQ4P77YiEuv5te"
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
