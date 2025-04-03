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
    "2MxgZNwdx6DoXdUREwJcyYKA6x9VvnqR2vLLjfoZdUnCTCEuMbLiYTqwFXKmUMPpLR4QQ5CSTBG4NK4VvF7wcj88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sPoqHvMQicKY3BY4znBAURPbLV5k6yozrMpvJbVAVAXw9eJMDGNim3pfnEKg7gJ6beAjjy5DU5veif6vGaWHk5B",
  "key1": "5AR37vP9zSce2tJERueVq8spSq7tEewma7fGKJLg23ysT1vQAdqNNuN8f58eP4Y1UYVnCZVE9wd4nVgkfsydRLFm",
  "key2": "2As7aG2a7cSMPTPiXvyM3HcpTHhbeqDUipF5ZLZsy9vJeMuKkbJBCjDxkr1AA1sZQ4zFBU6j37ti2r61Z96Vx6b3",
  "key3": "47EG8HCBewJFSfjdGjMH914MXmq22aw6QJ2CmitWgp8D3RFt6Fhgyib4EWbkrN2AMa9vs87EUiY4DdRjwGhSq1C7",
  "key4": "5seFADWLHup841B2pUFrz4EQ8SSiYGCn5Eoo2AD4SKtVLbi8F5rriVCPJRemhuLyYVmyeQjh9tAJhgVhMMH4VAR",
  "key5": "eGKXAcUmpDVigZP6EnV3a81B1DghHB14ss13KcS8RTZDKtYq95C8QJ3eJvyyUq9bG7FehfH42JEFD1PrNoaYxat",
  "key6": "51QXFr3sA3fAjDn8ZFUsDuCwahKRVU79i4wEro7qGoNVqAdf7QqdZuuAx9tqLLfka3t47ESHv1zua1tt2WzPqQm7",
  "key7": "3tSuoPmm3BXrS6y2DUQLWRzJrAeWw8E9P35NNKP1WsgRLvSihUDXkcdiKY7wuSoJTkmxuH49FkGyxc62HfNm9Q9",
  "key8": "2VhKWMUHx4Niberh9wEr1yzH1D3AMbdMyihydSYt6F5TSKYhb8D9XY1SJo87eDYLVvgBRfpvaMrcQK3sBBCepHY6",
  "key9": "2WrG9Yss5Qjfq7qtxXmpCpdaPrFmbzmYxbDPvArXFr7mJo8SV3cNmiCmoZRkJB4gsUrpHyVenmHdNq7H5LU4m6Km",
  "key10": "2fX4iUF3RVFoHVqxnNLRtVbkv4NuwQLYzL6PVDeYvGSWA3jFzcDqDAqNXPBMo95d5rY4Yp9U6YQDGx1qp8rfyYPY",
  "key11": "2A5N8s9c4GT5SRxzV9N1dhupKXzCwd8jnREbCd2Y71t6dncsnw5vzV69dV5R6BbpgQt5EyYfhEz1h3J9sz7vo5eu",
  "key12": "4hmFhKEL59ym1xVsN1hPvWj9HEtUkgpjDAmJtxrywQUCDTKjCDDZ3J1ZSCxGHdATZREiupqyzD49rsrPDDo22YLN",
  "key13": "4PvWS7HExrhD7GRXHgtmgbnJ7E9fd8xRXarYeqS2uryCedJCLdP3z5buc1ANrsC52VerUtiiZ2Fn7HwjNVu6Ywrs",
  "key14": "5aVYQjik2jx2mWZDiYXmsoCMT1dccinT6YhDzhVYeEk5fZktKUroSaa6ngk9dDHDdXuoeXgHdoTBj1mAHCw9n6LL",
  "key15": "2a3W5WVEfA6KFGcrsCp8XtHwxLBhK3foJHGoBDSQs3R4W3qp8yYsoTR55yYehWsgrb5A7XD4FivNQcx3dwnf4nhv",
  "key16": "5gVn1sgbfkU8V5LZqqgtvgpxtSVTmPeNcgy1DFHjE2CwGSL8hAU457tgrYrSvs3qCYeLTRqGRx2NVPxHHTGYJcFV",
  "key17": "5N6ug7PUiybAFsQFXKagsKHVFt1FrYLymNkZvi9AAno76j4QRAscrfhXCgPP9gbUGzeMYqvKswuNzW6GXRi73z2t",
  "key18": "2h79UPzS1h2LHMtYo3o8UnHfyFGaigAUm8kaBYN4BhMbs1AxQtLtFqh7Btt2xQtKzPB52XLxH7QNik2PfAExnbUf",
  "key19": "48y6jXDbHed9CJeX7TA5TFNr3wjbK43rSdDBh1VRq3Kar3wHApJeGQUmTwMtCtteBEYDcAXidQUxh6Pgh7zJMWW3",
  "key20": "4gMfKUeSthLYoLrfXRifyF6E8LMhW9PSTD2bA9Bi7sn39irHpEUdobJjn4v8EzdSEjM54nbNEjoBJ3VMnK5bcpBK",
  "key21": "22HiB5dnXoBbtobqVs8wF6DaJocpc517k1k8QbABxQ5A8zuJLT7asPXGrimFBpQCtNfJv4nVKk7h3DzuV31kJaFA",
  "key22": "2hXyZrxMKY2h11USTMDsF3txBNYg4K8HxcnzSSJGYHiihvonFDTS3p6tkAkmWLBiqLmb6YPGkrYtuiUrsvgrQieA",
  "key23": "4kVWYfs9N74ZqUFi5QDJr95H4kACcmgwkvaQvyB3Bh2RQWudhCPHt5NSZ8ckWhkPLqyaRnaPQ6kpiahUZaRzBGZY",
  "key24": "dYhuV1J1Zyy4LFUvpjPsY8XmXvac1Yf3cqGY1CiqmtAhrGZH6AREechNX87eWoD5DcHbxsucgDVrvMNyz5baUJm",
  "key25": "4zAmjmFhCtqoDH1T3oxLA5he8CULws3XmJqALUTjMCTLc5DrJxDCBTmvE3A83nK6QMjzgC7t8RdYfauvHsbkevwA",
  "key26": "3qtPvrVfvzkZu1JAtWW3hgSoixVyc7RnL7zkrpiZqmMB1Z6y8DjmnU92bHxVbSauVb9gzMBpc3kumngpbMmvxf1r",
  "key27": "55XF9wW2jSANGhX86hHDMK6w9aALofMZueRk8MmsrxNHbfjiXnua2aLsHXitSSAJnKGAyeVe4gabf3RyXPasFUNH",
  "key28": "5pXBWYFcv9wb9FwyCzirLQkqHpbjaxHWXRRZ5aUgvE7UsrdNxZ3qxMTUCQifhZkCYzZ8VPTxjro6UMvN9YQHHhUV",
  "key29": "V2dHzmjexTvxRsr56AYeLB2Jyq9hHtccCSwE3Xzuidy74KGdTdYcpNLDDTraop4tzvM66s8HDVVxzusyv6ZAcG3",
  "key30": "2jHeKyGW5vC5qqnGHzYnGvQwkZJixZBYbsNB4WNnsF4mrDXecMe3yT169LFHMgVQa7ore2KeaQjGMhNZ8dYS5Siq",
  "key31": "5yFe8Dns8dd8K442Z8wRSk7AmrWRvZB9F6EvSsUgFAvnYJsbsXMtfhRbJFTkqezVbFWrCsnvsW8yzcrNU2JVNztP",
  "key32": "5q6qje5bYMQ2eMuADGMpDCFDdKTCKKQoMEu1dD8361nX1wzd92eQBnPfUUF72uHm9pHTwJmzy87Ti7LaNw1UnU75",
  "key33": "3y4iJimLbW9zwy3sjyQTasLadDW5N8Qj3u2bH3tsZGKSaWpHLLaNPzwrHXmtq7obc7vzm9TZN6b2NGvG6AxfdU7f",
  "key34": "2K85wEiRXaLTobnzSgyXbxKSSAoVuLpbCBfraq4Hco9psmxEP8vKHKyjMpkbNBueQTPXAXFQLELAGTxLnV41gErJ",
  "key35": "4v8UQqddcgw7zhSfFwc2HsLUfJ48VHpWtJAEtWo53kpVz9meMaQQmqm4Qn31JsVNZTB83MKTj5xrt6LcYsWE2wsr",
  "key36": "3AgbgpnZDFE7CFSQ1R2Caq2K7cpeNHwVVU426fnxHdc8K3qSQAKe3uyvgdofVttJrpg1tRcxka7cPNoCLGkS1Sma",
  "key37": "4YJjzoV5J7QBoLPujsiDhW2RLj2wi3nMsFVWfncsdghafLGuiqEmSFQDzP34WbWGFyE3Cd5htp5CyJutPX7U8LyP",
  "key38": "3Z7rEFXiZrE8XPLUPjF74fZgrdjg33TLPcMRf1sFRJJnGAEE5r9W1XqXc1QHjHCssZwLpybvsPUozcKcSFoMmhTy",
  "key39": "3rg6NoKFXEDxKaxbJn6UyRQz8u8AFPLoxyE5cYrNAaNcjfJswXKEMVMGWdMZQWkKE9iwNUSBLHV1kBTyRoZjH2Hz",
  "key40": "5Rnh4en5odnvNssV2nYtmSC6Cd8pAw8GSUQEYxDWdtGYHfJzA4mZKM6AdCveoenmqajFzuGUZG36C6FCBQ8yoXWx"
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
