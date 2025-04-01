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
    "5c6tBZjwVi1wsDmwY8UgiJip3Xs4HVjaaMS81MC7iKMuGq1TPfbLMi8xTJ1YVPuraNgNfXi42qbncV9jEyeReiTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TWbw4r9zgG42J2ocZsPPgrTYemRRVBpL2ePTw98zesvZaDjr2hWgs8Th4xYxJC1GLhT18qsc4kY1aWpsrJnqUPQ",
  "key1": "4hkFhsDM74nNErPkvSJ74smBVHHyQ3K8NkTWds4k2HApfc7RX9NGa3JYVqngiaaZm2SQYKwn2SnXt1f7W4yL7MKL",
  "key2": "2rPJzr2C4kujKUeoQzcjkv7YxvxkszFE42f19YuS2GWtRYzVwnVDcYctRUR9WVNbradWHNFFKfoYtJKBGjFjZg4a",
  "key3": "4JZ2aYXq1tJrTbfoLu6ieZq3Fk4roKtFuJY3krV8HvVKDf2Cc2Nwkubbg1FMbbDV7tvghhC9Q6ezgFtbBBwcWazM",
  "key4": "4CPddG5q855Fq4JCk7cwDHDWBjEJcvCYzcHrQs8uonDWCq18C1RqLHtbaJM6D3Zf1JqshgJPfyKFabGb9ofNDvL3",
  "key5": "2jqU1Uw2qzaso6MyBTSbBWztYRWxDwqiaNbnyL5ksGGkWydLWGS8mpnpRzyLdH5N4mfVSKSnsuEwvAy2Lf3NciRw",
  "key6": "5gKKJuSt2aF5RDfAganH9jFtbQWDVVm7aNvM5GZbVX5nPxY5Lfw7eyRGfpixAXDxnVnnKyPNLWsM3Ph9g2jLeACP",
  "key7": "3r58Z7qM1dHE93vHvroFwhrS6we57DYHvfPayo5SS7rgNsNYnwqRUfYdax3RzJrVwc8jHkizUGbT9fUiE3WwvwFJ",
  "key8": "5LYqUCNgEtD4ChvQQDK6WZvgDm2KxPzqZWSiy1oBLmP4Uisy2HQBK1ruAtj6e2LRfPXwP4kz7LF6h2yyatr1L2DP",
  "key9": "2DhxCfraNSxUrEZzmG61UnEmvcSQX8xRr5atApz9J13MZvoBMXz8GiedywJUm2jD3Xpi6CV9uYVBq9C2Mh6Pug1H",
  "key10": "2w9tvXesbzt2NGF1C5MAjofMqFDjFKhiqMNjV6Me26Rgg1DVLYQFqFLEzYZJnixqviN7mXWLgRKCZHMqxEHWm5qA",
  "key11": "x4C3ot4ZfKNuTHZszME4b45wmuaHYYEGLirEr9F6hdtcTRasioEPGBYeJ8LBZA6E1p9wqgKBSztVR882L3VAfe7",
  "key12": "jxReuU594iqm39SMovF3DS9zJa6cLBF36BzwBALKoFsMXkjaBcSPXKZrtH5kV99DzBY9r7aUDFFHkzrk8g4YZM6",
  "key13": "3W25nC3CJsmd1zF12aXVJ83R3D6AG8a2eewgCaqWAPeHG7b5fxovFb7NmUJTr7mbW6RhmZM24Tb7EhwmNdrg1yTh",
  "key14": "2n1b2AwiJ7RS8h29pECQiSywaFyAKPR9AjYyJpocw1R9etmh56gqQYT4o9VCAKctut9BEEz9hsTjkpMS3wenvYZf",
  "key15": "2kyKoFNqkZKivereDJ23pnGdySVku7f7VA1vD3jbbN4hymZ48x2QfvHnhGSwn6sCejwPq2hR8txDEPaBJe2z9DMj",
  "key16": "5YrDo8R5Pzx7Hsa5Lhb8uaCRuonPxrPyfJ5xYHqWpJnro7hdhExk9HUMFZXg6iivgca53BDofrjPU6ACZhJhifnj",
  "key17": "365JBcMRLVKEJTULxAcJnJpmNEcd5W8Hs6w5QabEmcxESwwtJY5VEgDK1C79MEh7Y28uF6XZoi9AufsN16wuyyhG",
  "key18": "2pPYssoiMoqiJrFtWC47VcBdavXFxgtGTHPJjq9jSZwJvngRKTekBwCbrfAoXdngn49fxUY61W8iuybWdZSLAYhN",
  "key19": "4RRGarUQEkXXVUMYHsKD26aLwpL6cHawu841rPb2xQRbaxCqSWTjPDaFcjkuhLnPRNfCDdoyC2aUFnxRwiR9btwt",
  "key20": "2v9oL6c7UBQiHQXxqpxe5dyfH7T39jmqNt1Hu1jJKhF2ZykEL4juyQzGowbgiRchGu6ZDMDXyjEGvt7DPpFbyyge",
  "key21": "2WB6jEdq9SENNs8PPmh3Pzq9fWz8hQoArAoGL5c8X11cUABdskFq5JsTh1tCVHP3dHD6hjeuAGmsHkE7zmFVCBLL",
  "key22": "21rBdHZZu1CWQeJMrvLhRWf7RksVqMAFbWMC7X42PdtXXF6inPfuKEB4Dqr2twY81zBeh2HDKavkPj2Us4SohiSj",
  "key23": "3yGYWUy4rRDyd6mCD48gwxrb5eoSLkzi4svuCWiiAMXdKb9cdPtubSBZnXCou7XcnxuVB1thWX8VzTtoMkncR2FG",
  "key24": "3SFn5eUSZT3kBNi6F81Lda3FKCckBwECYDhqe5RfmNbLwgXWmLneEATAgmAWtkF7TNG7sR24GmJf7S8zd6jnn8bF",
  "key25": "2VM9FSi3tBBqvKdiqY7vi5rBfATp54zC2Kv1xGfPZV7irvtNQ6236bxSPMpRfLZtUkACXz7UEuB7dhbirD7VNo1z",
  "key26": "4TajFzd39P2L3RYGMZKhFXx8wbovyZir4q2AahKrgFq9RLW2yCHK9LQ8EzTMHtccBZnz2PYK2K6QPBuMx1KxHut9",
  "key27": "3awSypYdhkmNXBxuf6gKePDAGqXYBLPsfGHVuAwBACzjqkt22HcBm6ifG1QcDeD8qs1VeRH7twceEHVtiSMuqeyN",
  "key28": "3JhUg7yQd4gHjSBBVc9FY5L237pHX2wizV3DNRVpqfAJjXH5j3YhWhc1pPfjv1Q8yJ5puj3k3Urt2zur1ae73SJR",
  "key29": "5KoE7RfAjgweL3R6J6ToKFGWXdwQq9NejHgDzQsbw4QUKCFNnXVjQyA2Er78phYpZ8SQKk6XLwVXM7JCeba6AZ14",
  "key30": "3PnXpM9Vztqr1CkjyS7BpXgSGm8RCG4X58UirLDSKHt7vumwq5oujZdsZ1CtkhQ3BTuG7FuC6oJGrKEPJukfvCi8",
  "key31": "4nrtZLuzRmByWPWXtwbjUj41QQHe3ZAva2urT3YDVeR5XbqPgmev96RmEDLuZNfb4rAxZCYHWps1kBkaBXgTF4zD",
  "key32": "JhLciQ2SrytfQFivNgPTo3LwCQBPxvMUHBmgUGnubq13hW11z1xn1YkV2ALjCWsNy8554TKZbc1KeiqH4M3NmR8",
  "key33": "4J5nkq87iCTaHWNBr2YFRmz6aLBdXbsEdcva7u6B33jgE7s9fvre6srShMHAHMpMKQDTTziUxmbZ1FfUyU8QuuXu",
  "key34": "2MxCTH5CoQBU6weHBXW64gYaUAVDrVKRHLvrj6PnHvH8zTQXv5dXUBN9Pto33yWACA3ozTRPpwLgsy9zN5oqJUFQ",
  "key35": "54SPeowTFyGm6ybUrZtxVX425kZxEv7rejex3fVYcUPox5rBGrLWx5ZHMdrymjWNAvrWdXrmrGhZNeXio6yJcsT4",
  "key36": "WrW52tGn7YddweKkvnzzh3hPHCDWvTWJ8mr43cARtrow7jVTCH4UkS3pinGLrKyNxAXr9pUK625xQZphi7yagec",
  "key37": "JXwYEMTSmLqPAH6RHzFe8LZiDw4uSk5Z8uLaXbaXCU5iCwicFVZf3QyTgQ4cC5nzekT7AUjsK7W2yL5ETZNEdh2",
  "key38": "MML4QH3o6SKxEs3mJ2X7r53X3LiPbDbVrx35DTujT6V15iTUdv3Jtn45xNFE7kN2BkEwFEJbVuYNdqGqCjrX9PJ",
  "key39": "4wMHWoaCvvHxxUaL75i8VNFQGKQaa12YNrWskiUWQFnDcz17mFRX7dGHK4AidQf2BYaKY3fEEBJMnbpsXgr1vFHs",
  "key40": "2ETBYmsCQJdUBiWxiTcfcg3VV8xNzP3AxJXBf4hirS3uizfAyZ33JzpA8ASjiVLEH1zdRHMFFmHeRCQxsCFCzZzQ",
  "key41": "o4XHJuRTdJyuSjcHhztXgJk9rDFLqPqf9AKYj4i6Mkn9BSX5Q1sm5DzWaf8CuDpBmjZfa5wP4gFD6LrNjPHaYRW",
  "key42": "5qrYvkxXxtErcNEgdCvaoAeHMA4TNBL1mVBkubWyTVx1FR4LQr7NEimcFzc9cMPGQSW6afqgytgpY53AR7jiNhNs"
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
