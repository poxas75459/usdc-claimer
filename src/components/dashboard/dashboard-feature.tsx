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
    "2MSdF1pe4tY45WVxz2jVTWLSDMk6kaCGMMNaGXRZeDhdnRdH3bPUKrTtiP1A9DCKXePwAWdfX67qVZ6aDFqwHdjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59szT7Lz3QxqXz8SNva2ZGtphHKtet4AZNVmHxtrbEjMbLj7BqrrsuPoUZv8NuLQ6mvw1mieKsGEvDuGqavMSdnd",
  "key1": "2Fkgaq9n7EySrUo9Kj3zTGveyLGhoU6bkeVcGGgLpwrLX7588dg8RMuHyeCJLNiVKLbBLwYneBEzPwQPo1f2u2oT",
  "key2": "541hYaYTiwpSRmmzW7RqpakbtmaQKGewo95SGjpWqRmneLacuf5CiJJERLYy6G8x6gdK3ZYNSg9qvCxwZqkzyYp8",
  "key3": "5HwHUEvNZpb3UQzvXzKGWq4b2iyYkCfwdTXfbpKBMzAtSz5b9Nu3d7yL3S1Vkbp468FXaM6WE38kwqqcXjsmp7Y2",
  "key4": "tuxuCqFqFM5bGK4UGEWMnGL4Yw8WS9xdPLqPxZArqvnJCSXfR724HNdaJYi9y6ehbTJWn2uHPwm8y1TiD7oYDLy",
  "key5": "479DuzpH6WKFVHoiR3PtMKJNKh7wgomg6N5Bxft6Ts7Xd1qRxSKBk1rwUZ6TicdBnLNdun69MLa9RwNZa8g41b9X",
  "key6": "FzD8BS33hed7ttThAWDeF2UDp2bMveP7V6aef8SRpfbcepvKZwXm8idkSgwAzhy3eU2WyAXagwLYCCp7zvRPV9W",
  "key7": "5sHLhkA3bYYfqhnTnHuqAWj1zZTtwtdRqNwt8GDzL1rjogtRET1xJRnU9JGhGFhDm9ej1GB3zuCJCyHDxzb5kuA8",
  "key8": "4vxh1LAmBtdjpeWVMTFzgVhrvMMyYxoS6c6VkHdPSburdJVc57vmgFqMyhPf9sfihmgiTBtyAeXRZG5bt5peW7u5",
  "key9": "ntxJ5MXshuoY2CB2z2D5qMseCcHDsrWYhMvQ3qYcaVfdidnU4STQiW62GdN4Z9G3WDQscbzExiEFeaPYDPXyBrG",
  "key10": "53GtTjHyQqe7LtSYWS1NSAdTzv8twzkadni7tzoYmusEPTpvn86MY5t1nsFMw6PmnmKppNWgx753iJijNAaPyKCY",
  "key11": "4hV4dmQyUsbZjDK9pSTxAoRgZQYZYWtUZ576jchXVH2XepeEnzBeNLvkxPcnS8M9tR4RquWpHBZnNT5hAh9qwM9x",
  "key12": "HXMQscv14pW3kavRDVZBVX45Coq6BnmQEuX2SgqaUDfeGtcq6Dt73D7iBfwQCLRXJ5jkY9cJJtirU9fxLK3GaoF",
  "key13": "4NicutusiERDiexhy8Rb5BiEFPFjhri4rCEhhzP5W22ensJtsaHdeF1A2soHiVmaJT87tRGYhdRQS9Fq22K1ZKFD",
  "key14": "YUfj5g54htJjfuzYrNKpBdHHg4a5fHjp2786HuVpQrYYkyDxxF3FybtUq1ztEUWmZeRpgE9RK7DqajppyNJy7nP",
  "key15": "2sDecUiPBfC8MTcy2Y9TApoKLTvkm4Fs1c8QTbbffhgfV91SQUtMwud2uUbsAmvcfBjTe18ACtiF8nEZgp7pxWM6",
  "key16": "43ZmJspGpZYxH5mdWut3h6NybuHbCgmeGNNZg9F7rNgv9WYeBcFZEupEhb8htSDS7rakhTCfhekNUXeeyqCoRnwe",
  "key17": "GQFWQrYU8HmKXV8EfBLPsBw4NZY4FKp6GeqzmbKvA8TMFkAGiyok7YYxj6VTqpiqSwh1EsbS4SuZF6miqb4gvEQ",
  "key18": "3NN6LJAQmLFMMtr92oU44yq8MfMWMxSSJft8Bi14NC1pyVuuTY3crV5MVhaXBKJkcYrh492CH3k3JgtfEsrmDTzZ",
  "key19": "3mJ2jYSJoB5CXsajMX4vLGAAHK7JkibmvtDCtxEE8EbiKEWC96VznH5i8e6EPoMorp2VHtgfeUdzq1kRBgMo6ZPi",
  "key20": "4oRmnAnuJrbGwh8RK6TVvjYGWUEMTBEy24Jsf56m7nRraZaBLNSMVpj1SccXr8Kz4aV1DQ65aNuSqeUGU5YGb1Jc",
  "key21": "5DxqQ46eNDzY6PNGvDRqz8rZZWpiXYM4pCwgXJwvcYhVWGBZM2GUtN55H2WxVfYZd5bUjZcTZcMQ8571fYQfdvvA",
  "key22": "dyWKQBvi4uUk6bMu2JnoYFocFvfRFGxEJMbdRJYXDFKnKnDW9z15gtuWyULXRwfmaZmpe5danfc2KTayCge97nf",
  "key23": "32xfWAkfE24KETvabWwngcWgQACCnZsZgnoELDRy4x8BwoLpE4QsShv8GSCmwyJfS3pkhwXHemcpCeM8EGXLWcju",
  "key24": "5iYMn1A8SNngQpbYmZuK37UVVwa2Vw889rAF1rg2u7iTWh4zhK7NFJb36UiYyzJD5gJfw43m9TprH4akeN9f2LvS",
  "key25": "azxtBQMwLXUbG96ZJqHc2p6Pj1asrypWjoiN8b8F1L6mkEDrpQy2wrDLegQE4XpqvzHW7fR33Wx1SxRwucFzEfD",
  "key26": "5de7apUuQKvAWJCwpdEJcX5jxeNtLxVDRzHFHktbwb1MKXURYdNtGGZRtszyU6FTjS48bSzJpgVjuvbWj8hNDZ8L",
  "key27": "3KSjWnSZ97Dvxr3vNxSaS4nAhNM7Nq9a47yN7gCAMv6FghW3891A53tdyo5dgmeQnC2c45BfX7Sigk26jVAJr2oJ",
  "key28": "5PUqoywPw9bA4dYMZ5Qfg9j9RT6wpP32gJRoFoXNQQ6xoq6CsCVDcstPNV1Cxge5Zxe2h2VNbVeZUxkMQbDwWSfu",
  "key29": "chcriLpt8BNCgENtK3iwWPkNNnN3VdHhjJxnQBatvkgfkuTaWz9EVDQKSQiBEg8FrMqNjwJfK5aNSfBtR4Eu6Qc",
  "key30": "viAV2PiVnBRq1nwVvPPJ5DhRD36PHemWBSswKbQfjfQZHgsWNS6Rt4Y8BW46wrHeTQoFyRCHj9D7hZau2ZSjXV2",
  "key31": "xmibxGXNE9U6N4HwMYQcGxABoaU9ttcZmjJFe7DfTktFgqLU1ReWLDhwQYwvY2vnMm7kguQfGccpLg2FEmfbRkg",
  "key32": "4D2ZBtnqPACtGnYuie1sqyMvbeqJP5kh5M4JmPJmhZSuu2r9iwWzxjhxWRegCNeWyZz3iq2zhSErsptSeJNrGk16"
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
