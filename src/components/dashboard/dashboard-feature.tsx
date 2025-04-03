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
    "2ZVAeiqqxEc8n8vhbSnsQC5zpHhfdE677pPdQSjKivtYT8mjVzW785VDRjJUsrer3bCuyRPxp5qZr71rwTdLZehK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qUVpLB4J3dpR4eUGzN928cDTf4LecUQwU4hhKRti744FqbkBGcYPBYXyTKyXn9oaz2YxWYwhSsHdLv4R658QUUL",
  "key1": "28TRjDT2DnCKaa3iTxSsB2V2mLPxbNejug57UyemjfWyi22eejb8t1jHxJDAK2bYDYGM3HdT4GbaUPmJFc6QY3hz",
  "key2": "fe6y1F6R2dURixE93ndsAZXk14DZVTkH1KZ3UUbdiutWUyJhT3GwRFDjQWGASujZemuwicgidRroNT4kivyLKPj",
  "key3": "2DNSXjXe5wR8vxZyKph3ic75LB9Ymxs1uAydwiX2psTfPvZK7XeQZ9kWmVmjXLdqVVbWevh8vsHavYeG4uiBXsqT",
  "key4": "4yvm3rkEHFdpUmdKnjoae9SRPfvCrwxAVBjsF83MCiLERA1DurnHCRsug6gdR3geW2wMNaEXudvNjrftYvPZTgYN",
  "key5": "5wmLU4U4WPEZu4H2RYDf1Vj92cAZh4uQe8kRuFcEKqcP7y53DJZZa5LbnWw15Vrs77MbUHpJaXw819sdQRsQpwkR",
  "key6": "maC3ZbvwDfMXSDSKjMVq7QSosGSiFpUEpyzKs8P17iHww3w1kYEFHX5giD1ibzMBXi58F9rHYgddXM6LHRJYTEi",
  "key7": "A94TWXCXqmgXTnEGwiVLGohhH6VtJ9ocK3a6RHGCeuNZNFUByS62UGTo9nYA2hy4wyXoWMD2hNB1eBGXLQEyjcf",
  "key8": "65vTpWWpRFkwdBhiMvdQVU45FS1PduD5nYFJ9gL18KpRrGgsqN1z7LfUBszUR6a1nAUjFSRtrgRA9gmKzJ3kRpSE",
  "key9": "UHWvv4ZB5L1YeeTEaU3pCKn7hHvWgkBHVscLyhgg8fxVGbixzhsqUhbMucusx2N5rKRD8byAabFXqzVXQhkhKme",
  "key10": "2TYS7TTF5bmN9rzFTETLRQg2U3Mti4rDDgrVmasj2ymDw1aZDbRFW9MY8aUbViPqjLQHT5cRB8k2EDNXxpA6RoXT",
  "key11": "42vg3cw4ZEAJ98DdNE8NAh2D6qReW6ZUFCgVsUSF5uvmuQefooDK1rPFN3XLChYBXQVthaFSXsTb3Xk24cJkCkxW",
  "key12": "5KWJ8QaHoEnXTKsGEB5W293Nbgizj4feTrGaJkJAAsRUmu4fPW1VxJTntDZpt23QgjnxB6hNPXfyxNst2BVW4GYY",
  "key13": "5djkCsRFQdxqU7VBLToZkxgxH1PMzeZsT9Y7EzxZRUacoc4nbxKBqwz6of5HHZHfwVEj2uFK4ceZZ695c2qk9fME",
  "key14": "2ydnc1ZisoTiErpUauDvSLo4WTRhZDCxy56NUhZdhBdepojh2x5eMZK12cgXBCN7P2wv7ypi9uh7w17XZGKBxVuj",
  "key15": "5icxbjQWSMiT1HfF8K8NaArkp9cidCmeDmdkCZ3hgFyoVJ1EbzxNACkDUmKZr4aeDvYh41GQpUnC6uA7vtEgW3rT",
  "key16": "2oYHho1uRuuKn6XPK8sXFNJNfuboeFMc8N94NZrXKbct3xjkmzPcGCDkwQmJa14eQ9wXUfNRpgqJnnaGKDUE3pVP",
  "key17": "Hm6gFQEJT6ZYxUaKS3N4uKjdpaysTvLPg2GCSaYbywU9HQA8ACCPJaSTyPPfRRFoF9rsshsv1w57Tq83U6JUrVk",
  "key18": "sYX4jqiNDMemrgV92KaGwp2Jp8YXs7KwAMf5axjy6k6j2dVjewCS3NWzyW11JAnoMNcrQSLgYFAkM66xkJZRMKN",
  "key19": "3gd2VgtwzJS7RcvBp9DB2mV3dVquSfPzTLkjAUJooC3kN2168n48HChtV9oQm1qBrFtkPxGH7ny7rNDefiVgg6gF",
  "key20": "2taqeJSaeBfqDhzp5QfzZReowbD4pKtwkrFPBcU4bncmyU6zGeLt2PnJ9ZvWtjXsiUbENN9Yh2yNoTY29UPy4c2D",
  "key21": "32TT1e2S98sJUYfbW8vPzN3TChNeTHPSRY2e4wdeiq1GH8Lrkkm1tvaB47VdAqqtpFvi96s9TCBLP7hKYURz8y9f",
  "key22": "2JPD5fZAqAjGcbK5BPCiHyj1HYMnTepBtSLPhFxfk4RN5fMNPFQkWpiB7GTbBLtBoyAx7ASjrvL3wcVu8pQEhmpr",
  "key23": "3TBvLWFjJVoRTg7GvMf3Y12qKbVZTyyS7Yd1u2KjoGwKViFcTpPn8Lc8yDeyeHv9mVv4XLBGZoj6FLBvq19LTY9v",
  "key24": "67646gkbzR2EjwV9CSjf2wpZRzgiT6fGhneqFwBCCjBqGkgshsiWzwapXjb5HAXeXL7aT6DnJYsKGpToEdmptsJJ",
  "key25": "3KW5QA3QSeP2q5mU1W6r2bSNaXUtxoNgK3psABiMEV7uj6xA4HMYRGWdBdMFfiMxenRHCg3RTxiuEkZXhKRKbSD",
  "key26": "4SVTdcoydStbXgXjLYxuTMTqz2FB5ik8F13vNAQiLjFkn7UBG6aMMvaEUgqSNFYafia3CB3FiLBG3TE3eJRDk6Ch"
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
