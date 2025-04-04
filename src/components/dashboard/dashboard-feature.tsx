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
    "5C7KJeVnPbqEjNeYrRyQHgqLBGbYme7KWb4Dc9us134pS2DJ7RNVYiPoxn8YPWdWdYuBZw9Yn3HuJye5wz9D9kn5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kYNMmE4JHFPatFrtGqD9bw3Ch3xdGF12YSuScBqjfMSCbgjeEMFfagWvWCA7t72VyFxyitqU7faUsttQQCPVbDV",
  "key1": "4qyaEsMTmE2JhX2mb1TWpkEGvfFaUUAsHnDjeSeUsBNWLUuouCnpoWuZ2dEACtA8tNeQ6g6RSzPjiayiZbJxrJYY",
  "key2": "5RVWFbondWeXU33Zz5fYMoaVDUWf1gDRUihVnLtgJfJ7PZbPCX9yroKEohNZ7swKzf1r3tAeihriGXWw9X29keUL",
  "key3": "3jenncy4bQETsLTeAY92wWy7LYG3YhUewJ8mYJxLEFNiQZufa7jVpWVj7bLe6mHigfs8uCFfdP4moSTXdnVAZwJZ",
  "key4": "3HJ6sy7C5HxRXWMkNbr1Xx3jBba6N2XB6nK1qaVLpaQR8nKupeV1wM9mQK57CgLpSZoiuhtkaRyjnhitxoedEq2p",
  "key5": "3jJvxwNKAtNAD67NNaSGuyzkM5jfW14gYnm8qqs1n76rY8GQDAQBvWDRGJiRBEf9c2uQWeNWKSMbEJu3yV73h9uW",
  "key6": "5GwvBchV4kdpyoduykKX4MtH9XzJdpKgTJnqm6FbPeuKuYVetMhbCwSwTL5CYGtxuzqPPmamXd2SgkLPbWdog2Ho",
  "key7": "xHSiegFnE3orYBrfBLv3jkmi3HkyfBzcYQXyAepAguNq8sLwE7MM5zSh2Tw5TM5PnNqCVjDu9MiC4XoeaNyByUF",
  "key8": "4cimrUjbnK5CVFK4Bp13i4wyyEVQxaHieWt4iCstN1C2txmNmHm3sYQEWjBf7kStESFcRxqq6TAVbjYSn1ghjyeD",
  "key9": "4E3xWB7EHw4ZaCaF3fRMcTknE4j2JAhtyyRtfZsgkDxPMmQu46SE2USuiLdA7k4GPiiKo79atyPF8RzYoTZn8JZv",
  "key10": "4kZfX8pGVtsAYXWHFVuM6rWzp9Ph198J3sTYyfZQgGnMVsEtBKD9XFPmaA2UsNyJ8R4fCsj8AK5Fwx6akHRJk1Ym",
  "key11": "4Aakyoue8QM8mgCLt95HdWzmwFTyzLrusHUPHnJLjCjediacysDV3sjfhEo5KCWpPSCN6mrHSf18VahUYLHgwPod",
  "key12": "VeioXv4Pms5BmexcR3NT126FyDytyYnEMCvGETaSxWxcg5ywryC4SFhz3tY2YAzr1XbbYhRS6KtdRhZZfEXXEw7",
  "key13": "4CD23Y8c9Vm8MGuNWHWU2wor8cQk16YKQbDDpCDKdDAwUmSwyWc74quiJ1s4Twu4ktajeyn7CZfcXLXyziesJ5zi",
  "key14": "2Jmpdg7jVT3nMd9X1BALkkHZ9qE9a3N6e95ki58mbkv8omAnCGZTViXpxKUVuuEDJ1pKSsXYqYjqcuxojv7eSety",
  "key15": "2ovkZ4vQWi2b2xgd7MSXcoKzmUjxnnPVFosU9hDv2QhQFSfSySbLdSfjsDVj5Y4dHGFa642Nrna7cLdqAJ9g9RmA",
  "key16": "22JtJsx8oULccxLx5G95gSo2PzSWj5qDmwTHggJHXG7HgSXgbpqMQJrvoaQKZEcPmFJo3NQTyzhiqo3p1UTvWQ7H",
  "key17": "24NpgqYzJTXrAjp8fQRV8Ed54Lxszn466a1U9C33pCMnXSzzmPZPdKcMsu28RRYwjU1Fzw3SUW2TmcW33VneEVWH",
  "key18": "y5PSVqCET7KdrxWZXFE7UJq9PJz3PE5Z8BqA1gsMuBSEe4tzwkCwPVWAWKvMhufgArYXkhGVNM3dEsy6RLie8iE",
  "key19": "2zJdUQYXU9kbvHtArQPhCBDkx2bkaKgbmeGdMa1wLerBJbyej9ZZKGKfrYU9H4yh4JpYunMoUWRNRckjnyaTD5D",
  "key20": "3wW8jM6F2DJfvPr6F4a9at8ph4josa4pDY1Ew69rNcNUXUc2c4vCtoQbG8RP4qvnQujfmbm71uojg1iMDRH8t886",
  "key21": "3WVg96wwfV6gs7NhSoG6nr3bKGaAwMnWcEEhxfJJXB4rDrZ4qb9qcFw1RiztH9GrWhRkNDWzktkh9GUJC94WAj6p",
  "key22": "3DWjHdB2QGWJ667zEfr6ETAon83JBryD7p7s5p1F4tETzC2f9pKBM66jAPTcyc4BExaH2i6AHT5mo69f1rDbQN14",
  "key23": "2eZZbf1h1bnAve6XD9ANMYsqaHsc9c9PJTFESjNhyXM78gwKepUx7SmCV4T3yhDoUCB16iWfhh3D9g5oPkDeemF5",
  "key24": "TRmKXeAxboXp4H8a2WDQgrxL8gHhyLknVzcfnS7bP2YHJgNfPm4pJC4EjzBWCd7cDf2KFWYNRD4GuZkv8Q7S7M3",
  "key25": "4onwPqJmCQpaAe1zw6v2K6m5CW3WAWkYTEqiuLvTgUpwX6tR3dLbRNbB2rNgRQ3pPiL5NCUCcm5oyR7fEBoatuPs",
  "key26": "2bfbuCmxTxirQjLaMBdVoDhjCHYBA5w9KufqH2R4L4DxWcoeADiLTzNdsY2tWkB4zwsTzEKUR23reVx2aeceMgbG",
  "key27": "3eW2VU8gdGkuqoeDqGsC2zK66Whh9B2XAup2GkbiBXNJ7cJBVFmW12zfVZCjWQGfkCzN8zPRkzbhYsqGBqXMNZ81",
  "key28": "cDLMB26pxXEMfD7JBUcgbV8fBYRJmubHnxfN9nhbqybBXdtKnDNMNUi9erEzexve5sJNEdYd35C3tocWGu123pL",
  "key29": "5SAjt7TwmLzmUueQXSxxjJeA3uPmJJUdXXjbGUbieNXgDW5X37AvF3jvb2nen3cu8Trv59PUfvrNGpABrVPZge89",
  "key30": "5G8SBAL9HShd4iqum4JseoZq6YTSJxVoqAtmtb1VXgYYpBSu6EKsKSC8NVnrdj2E2PoJ22ohExQi9u9FLN9L8sta",
  "key31": "4CTe8g4rkQi7Djx8MmcdCpgroNM2LfDBZ552SDZy4kLPJcnko5Do2CMKGh6bpFNx6fS63gicARjGcyXEqHsD2qLp",
  "key32": "TxrHn9jXMHR6ZAAFb5sAoGqLEgCEr1kW6FiuwAkY3YWSxhc1jS6L1V5PJD7JStYup3hFg22ShUwZyAMLniFZyS1",
  "key33": "2Q45rYXirmPWXb1rF1ddE8uaXDCpJpES6UooGvSEaEWgckbWuA6DpzLbEE2ez49WHhfVonBA1qhSYs8JZD5dUfUN",
  "key34": "2J3JC66QnqX4BAqYGHxn7K2DSpxcWSDcGHocKgxqygDjz22JJbaQ7md1nTvQNUxPPfsY396v5jNxUjS7kxaFarcL"
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
