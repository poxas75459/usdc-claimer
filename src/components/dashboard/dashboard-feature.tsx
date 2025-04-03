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
    "3xDUShix5RxZhabGcff5vUUeLLo1vWLxEp9ZRhDqGaUgVoGAnTD9rwAcmS6RXahtyVz7LBYVYNr7z1GskKEmhRbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KcV9cBUHRoXeWny7s6WxEwKXb8PCbtuCZw6XTeKzMdGpT7jFKTYX2wkGMWcrbHctAzdytJykQUTEz7BjpqzZGmw",
  "key1": "CSRkAKmeSZhBMGhdrXyEr2gHrL1E7iLvmoAkjcoJqaZxYhaGkKinq862SwT2w8qmaiVpDYCbiMajhjyXd7VZSNf",
  "key2": "4BpyCCYaeTLohu4DUimpR4zjHbQjKdrZNmSYLDJ6yNktvNWkvkpW1pccQHkjKAn34Wiobv3XGn4rHt8R8KbRCPTA",
  "key3": "3VUcaEvddWPvLP3peW5oRQnQFS9vCvNpgeVQ38koCLZwTYUWhBWjx736ohyeCjskRb4Ng6brXnGiEe6Tra8zFA8t",
  "key4": "3ScUvKW6Yu1gKTFFHzhbgUoWtUuSFwSivYtp9WNJP1gGNTDUyf1oGWAsySNdQdeebgBXsm6wibwxK7PeHhXTaqBG",
  "key5": "61e2kN3ZBfPNgLxSgf5N281SzjmUdqXM4ZavunaU81jZxRpJm4p4MrHUSDGwC22PsZB2aWVTaCjdVms6gGnvJLqH",
  "key6": "4nccCFj3o4KSK9rQFfuNTuU9eAj7eXzW6ezvEEu5N5GQ46bPRmMVEjoy1F3CmKvMdx8eSG33hTUFpa5QZBmbnAE1",
  "key7": "33fKgPy1zQWQa9UEajG3utGUjVdZa5Kzn87PawyBCsQ7vM6WxiL3RGLPsyFjeS9krfV1VgJ35ZaQsXx6pVJcwyVS",
  "key8": "EtvXgWnwhUCc54i8hAoRRSdyNrBdTRCxbUEFCBJZUjfYKw6rTqc7Zy8ao4ELwgwyJBS9tLQvicGknQBArgKcbmi",
  "key9": "3QZLUBQeFDdATGNuecLYdXoay3P25H2Cit7X32ib5nNSy6ggXg5yP2yaRTyt693BtV45f7CARVY4o7jxUu4omXfR",
  "key10": "rPfnELS8993rT551MRFiiinnE6g9hLfhyDkeMK5Rjh6BUta7K3YUdsuFumDzQywq4tPmFCRuc7C4QpsSjatd8dX",
  "key11": "37FqKERJhaDaUY514FMXTsUtCoZHVWUPVup8NY8xEkjx5uwjpxAYpe4ANG41PK5oHuvUa4Ys5MuHKkjk7d61kM6V",
  "key12": "3Zq4hnxSmoLrbmWMqCj8EARxkNDfEYTZoDvfwvCmbycLSM1KWBQnwUj8FFTdtArYWVa9dJm7nUCpUbxUe9u4exH8",
  "key13": "5jva81t2C7Ah6fJFdRyn6LLndNyqf5fUwG9G7TukVMdw4hyqhuAQi7wdPEab9E5zjtypPfu7MYogqPA39U6JeLGS",
  "key14": "YpruqUCKRqBBPNVXHFUzRLU9La9EuMiqRVGoTexbv2p3zEbsfqxQcaALsoKr7dFPk8U5YzLkaVDFUNDjVXV5Xuw",
  "key15": "5BSS1ahKEzK8i1ixfaGucGXyEzpnBsjXzQo5q5b1FKAQbBPpBXRGKsiJwcspon47cpD4fRz12P242GFJSEp2Q8qz",
  "key16": "3Da9HcJFDab2kc9DzpxQeFhui4ZCNEdmk7CtJYBjbuuRZhKoTpnTUrZbLetxgD3pfxXdVK3XRtLDL7tGyQVGHhE7",
  "key17": "3Uj3iyxbdjGfxq1f5iiZist2sgf1AgaT6j5F3RmaNsumo8En1a8yKmQXhcZbnfEHKFEfL1Fz1NgGGLQPvq63nkfw",
  "key18": "3TMGw2DKUzmiHa1BQnfYQh4ncGBKJhdubPrQxkYFmn4wgVtarNMRRR7DCE3Q63X4ZUrzBiZEkZDP3LFSDHNwwHF3",
  "key19": "21yqHFdYD8Wtcvjkce9PcL5vmsghBfwCNaJ4p1CbcoYRx3JiMu6jqHXXahXAx3fTdZytHGjpE9A6eK75AyZ3QNyC",
  "key20": "5TdB86UqS19EMKx7oudyhYAHKmWsfDC9t7XHsbg8JCpP5iMkbtHgVMgXybfdc6yRZNaFkmxXctAz3CTLL6ocuc9C",
  "key21": "4SDw9NxbE9CrpMHtPbmrfgFyqYLVQfHJwfkRqppR2bfTExVLu1jLCqbRxNfvwiN3LtAMPpj2jRndtfnm8SyV69LF",
  "key22": "2DBgdj5gHyzCzfvQjpypZke8vSmKU6N6AUrp8pN4PTqXPHcDXkvgbq9FwvYGtB3uQo5zy9SWmWQQPmYm9jBRSX6j",
  "key23": "gKUeZiVMbAWyiQ5j1khoi1acC97B8sJ7rs3tHchKmspy39xAa4mDT3CETFFUY9263uUnpMajDoPJaE4EEgWe4ex",
  "key24": "22vw57jcwqx1QYPRRE8Yamdf5BQrHju7dkZrFAmLJfCoYqE8PpjBh7gXCB8W3JAonBNNM6TSiq794PmvzmeT8DZ4",
  "key25": "5ZxtQhRESxknB9oZA8WkEfMM2UpCvzMLhkhmuoaDNtVTBmqcodCdZndrMNkSrqPK8XPBqzY8DNfSYzZsXv2uDHbc",
  "key26": "57t687E7Ff1nt41E4G5iLJ1cJoShwZWu1J6pc7h5EBwLmD5vThGL5pH67crDGsPBCBxxyVTLwqvXrXsziveTwxgN",
  "key27": "dZ4rRfNGWMtySuAxPcdHgKJr5J6JJxAStrtLyDVAGXNVjzKQmdmSM63Yzk7iLe2sKhHCAGvSy2ywPtkdaW8rmWq",
  "key28": "5i93DXyur9oVUCdyTZ9rXvVXUaKneSEsLdfQPsNkBwCCfzHtWHGnS5tXaGvGk9czpPzeTKY4ioojo6pNJ8EgY4oX",
  "key29": "3y2b3sBkovA5mKHQqnDaAa3yc74CjJcHo4DMaWxSYCQNcECcgn6FTMYuFxUyKSJzMVTME6om9QgXYgmSUXhqyGae",
  "key30": "5zFRCAm7EHpbvXcRLLYFXRN1ZJAXbk6xniqwz1kZ5HMKkrTF9YpAQ98tFtyUk5LTeAjbQAL1XTSeKFDH1CDMcK3y",
  "key31": "3TWgWvFaq3fUj6PyVFA5QJyMEiA6h7PKiugZbLPzgsJvCUv5uc8XsAS9SwA3L71QoXsifDyfRbyNNo3KXV36RCpN",
  "key32": "2nS2mV8xgZ7qZSgw2JpmaG2TRqopsmnYvenxUdot5XjZnEYWPpFNYFDYEEyELD3TBJnzUNTR9rFWu4LPVQb1Ty3c",
  "key33": "3bwsuNGPkQSXk1nhjtbjRwdSTpf5ukN6GbyS7maevDVTsh6FGXEuNm2hYecHe8cDb87MyA5JYkxzhcTVKDruz6Zg",
  "key34": "4qsHduWBEcmSbWysQD1SaUAuzmJKLmaGFwahgc9CKue3Gauea185p338xBGaFFgWvJ58kXdtRsWUMfgjJdrai1vq",
  "key35": "4GRPwZTPNmVF7ypjunCJosy9FtrjvZ3hcK4dKDK11tyP2d2uSJ7Wzuv6ZXxEqeaWHL1i95okup5TNdA3DiyBqHij",
  "key36": "5sMguPAJTFLubPwSnGykcp6MgQcoy1zeQzJEVQ3GWKp7o9oVDctkoHdMPLv4VHPWLV3GgwqsDVRnC3UJDn6tukfx"
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
