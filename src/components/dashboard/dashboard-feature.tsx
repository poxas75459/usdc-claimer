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
    "4MQUzZHf4TPB6ncmnedJCSPyPFrH8SNcXZSpBcMoFXpZXeiVbv8D9MXc7fmv2JhdfdCh9CDeBnR2obiaJ68kmTgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "373VpUweHXF5u6URR39h3imUGewYBDjpvmoJqX2mJFrcjQszjapRMdR8Zr7RmJ1KE8Qc31gkRs7AnzsoixJLyJJC",
  "key1": "2ab6NJHJdNEVC5CaqCVZdCnUChJJsLLx63YAXJM57dkx3ZcnV1v9shZqGsRxTSBSGdtoZw6S1nLaA1q1Uw1jKsUR",
  "key2": "4oH7WZhKWpQpcHZhpRdjeNBrjGrZcivwcvFwWfuscNX9vMMoSsCUkSGVVXLnmBUM8qxKJSnk5nP8yrRDSnyr8iPK",
  "key3": "4GVjWkhbeMLvgmr2S7WWTPj1j22XHeQCzCALqmnLdTJPMt5uaTGrBqcxjEtbnXaNxt2U7R4hp8zB87wV8mVbHnrj",
  "key4": "3o3jg69TgxR2VFZEk22dv1oLhRSvMTYTuEW5PWJZVzjz8xvY361f81i3wYTtogFVczM88kcdypJjRWvhLX8z4Bjk",
  "key5": "2F2zZpdootADZCNjxGEzdzs2hwp9Fz3m8262zUGdYzk1qMdwPgQcLzX5v3DKthKSAvVYKTAGuX9zpH4futtj4fFE",
  "key6": "KSx1UmMxsaeWE9Cf9DRLnKGWAtyDtJJCdHEXcsuBaqsM65uYGXWXvtdAL2M1ZaDUrtNQTEjTnBcRJU2DHu6iWYB",
  "key7": "2Fbn2Do28ViJifcF9gigb8JU9Dg3MUrn2CsXdVzeQrE7ZFxi4ocZ8pKbPgbbBn8vZGJcVNEnnAdn72TNkbWA9dyV",
  "key8": "26Ciu7RP7xCtPvDysjznbRUDiA4rjLev2k7MdrbJbuxUiwytx5jiQC1QTBAgAVTDmypFxYjiuPE7sbmxirzi1WpZ",
  "key9": "3S99WQMHrJeFVaiKXNUKCe8S84iCmYZryc3fVV1Eo3Xibc6aykCeLqLVqEHCWch5qmVdxygndgwUMLomCMZRKfDW",
  "key10": "5aLKit3bo4kBrmcbyf4aihYbaiQShcDFGRX54QErw8WST24GrUF38RrJL6RqRMReqJdkz64u3PaFyPJQEnGL3FfV",
  "key11": "5QJLjERuGNPUE4TbZ2bngkSjLVWEzcm8yCw6EhuKriDdDQWcsrqJbAu5CjtSVocvtu6Fig8DJ7mQ7d37xQ4oYkDh",
  "key12": "2yaGZW77VgAsWdsVtXFZjUaFRYR9S9pPhksj5vBLMqz2T7JgzSyaDXs3GaUdY3dMkWyCpiZ6yYnp3CPVMd2PBdpp",
  "key13": "63xizfNzNdrYTWiRA9F7Hxbmtb5A27cfBdkrHPBLbJWgVWDpM2yVUbXgkwCca1zV3KRdDtYeLzMzkhiwoy59QQK2",
  "key14": "zQpJvWZx7Wp4vXnDi3SQvzbw6qUBBoaKRcqySqEPQdFVGkbuL9nwwrENze3tb79CadqaE8NAQR283xmGGbD4L6j",
  "key15": "3Qf4aXThuerSLoLHefEwscsrEAcBsoRQMwqRxmvVe86qyGa6wRNizZSJa7JMgHZGxFSbyjyBbGYrzdmTsgE6YBA2",
  "key16": "3WUs8aSN7HchqXBAVZn8PCWBG8ikAuGDjs642HQAJNj8aQgkXcMjqb1UDhmRR8EiXdAUfsdud2oJN6RezNz5cQny",
  "key17": "3pFGGXFG3dHQ7M63HY2xYDNKYn4FGkHZBta97DXFeLHGbsZz7FhCYYpTGeRwTjiDGd4FcjEpvAmTvbC15zYgh2kq",
  "key18": "2Be7DrnYzrm1idxMAPgZbY5pjNoHkYQhF44EG6LqdeytWvkWHbGkF2C3x8fa3ZV89ky4AYW22G9xokSEAET8h8mQ",
  "key19": "eViiQYSRbLPcJMBvTHPzWWQgfsHXqzSPmoPMmNiWfohkt7qrjMM9Ymqi9i8fWQvUcSRF5HQBVoPFy8pWoERn8JD",
  "key20": "4U2jBJAGXqaK4zNRtKxRuVwpo4zfN2a3C8MdzLFPUHf9EMd9RSK68iHwoTCqsQE6dR8UnCBJnT1iWqrjF34zj744",
  "key21": "61SDq2cdGGLkbDjHQvrWjynZwwk7o4Yf7wpvS54pE16XBfUxq677UDtia8bwC4FFMj6v7wFpDtdgMXVPy8ZHBped",
  "key22": "Lmca2j8FgQfgMXxevc4a4jkUyiW73S3nrk95xs4w9EziscHVGap7QJxRfjVfYakmLr2bYp9VTBphUY9Cj2sfqyJ",
  "key23": "62otP7GM2G4viGda7p2iqvYmHcn8QBZQEexCScQJYTEMuh1GTFX7URnJJB84Nf8HdDwjTxhjuNNb3zjJutr3skvg",
  "key24": "5Sp8cLjzXuFLHuZ5HEUgCUCBkBzxSAB3gF8aJZd2E2Kw5SHbSxWXTWZpdwMG94hNPjC95tN98VAAN7sMccX6FsUR",
  "key25": "5e2CwHkoTdwyQTNn1XoTd6x9VnYkrYF8UVuALHSHr3fmEBXsDgSSqSRfm5JqQM5LJC8vkPxNRH2V31jRBmnKCs6t",
  "key26": "ZSuSBmYRa3YcfegGbqs8gzvsr7DsQNfNPe39r28KcmBo6LJUayRkqPRBBg23FwJSKczRNmxzNCdVXswa6CezoHs",
  "key27": "37FFtBdhD6ZFW2zL7WpN1kboVuuRP7Fum6jC8i5rFbjS6oWNiYHYtwsqtwQEEkPPNDCTnqNC9P73txKzBpcqpU9x"
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
