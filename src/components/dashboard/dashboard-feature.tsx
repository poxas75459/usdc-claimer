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
    "2nHe6DnTta4c8VxJzYgWnzRUes5becNWas5HW2nvaBH9uHfVd3P8H5ewLPRpYmHAimYwNDJce12RCic98o35cS6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wRkxnRpWqvT6kkhHVoDqURtx9zcvg7XjANEjkaxPeV7NzeDpM4ohyCwCt1QY4JAbBz3S2QmGuos4NzQYPVLXnZ7",
  "key1": "2F9nftePbST8es5z1Mf6ssDnvnSPs8D3oDmx3bBDkMhX43AWqJDcRe3CZJpyU8BRekxpdd1ouFqs3CXJHuk2bs4g",
  "key2": "2ssmzqQuAh1zNa1h2Txc9REWYfv5nH1NXATJ7bszsPWyDKDieSXSfMpzgh82Hm9FAV8a39u7du7Vs1XvMhSHEzNv",
  "key3": "4txgVBkn4uXWTCAa8HMon9HhZTDUK16eR3MrbUxMNobjyKSJjcoB3usjdnmGQxFtPUV8NwtmhiGXPUpdX1UpBzgi",
  "key4": "4GbpAZgPTsNDWxHRFRho58mPnqX9D1NT3QPTKPhLAL7fF4hnZMpZLUXx2zgVpu5S3nTZChacVi4ZFsrbLimVgJkq",
  "key5": "2vs4vZEbtjDoa42pFogjx16XeGs562y9g7iR36AXfFzTxxJpFPpRfUwMyej8vtbs7ZhcQ7pUMXXLAT2ujp9hqGUR",
  "key6": "3aVTt11XzMgBEXupcDujiB42ANZY7WkjNpEgqWeePUJnzQ9XQ77renSHet7zuQ6GDFGPoUDZhLWyLr11LtjUv87B",
  "key7": "4QJK3MKxViTtpgHVDUF9n4wqp8BUUkw9heXXXgBw29T1J1LJNgj4oujzUtcryGHNk7zAyoTq3gdHsMY4UzgiSEAK",
  "key8": "4YqSQqKS4qRGSkPbZYgFaRfpjQxkonVHqepTPPRS4o4EqTgyEZR1kQjEXkmrWsNs9YwNhtfSaLkQFmUzXZJsxFNm",
  "key9": "4GouuT8pbaxbD5XTDxmFaLbgniPU5Ed45YwLnqsxWK6hfZo7tomVa9RUWUfw4ZGtHWg6zuFCP7mHxmyaQj7y7QSh",
  "key10": "5FVPjvdUWqtbFaUxhUoQADR2xHzdTCF9upzkAAkpZrT2dRGaQNAsScmUmT9r1xPE784wVagaC5JjUygCU2JR3Gjt",
  "key11": "3ope22mEyvPCiBAevjQjdkUMskgqaeEvjk6X8nnK3Cx494csTqUvNjiYjAaMu3vrLDWKe3WTCmfnVvRF8zD6UiT5",
  "key12": "2ZCfdzZ1BcTFEPSZhshbr8N98d7YwqpfvAQgRvLKQutWGpU9xswMnXHCQJvBmKrUCX2iGxqH4X5TU2xXb9T1y1N9",
  "key13": "5UWB4FrB1RsYSZk3V42q7egNzRK7Ybz818gJgUAMkqDV6Xua6N4zzr6Hqz3RctD8CmLTaUdw26opy8tYQMvi9BEv",
  "key14": "5dHoaGqjxagvFK7bPpESwJvgp4JwvsZ25T4q7aNQGw8kBJy6tjYH49TQJMmXLGehjZXCTW5mbEJMFh31jbmJ9wWs",
  "key15": "3iGoZJ7YviMqZursnK5yWwi55S3SDChPME5NsHLCPcjMsDHqYEPmYdCLmY2sHnKEFDHhToZs5MdvNP2GoKPQ4ZaP",
  "key16": "3d2g1pb86D94xJu6y5LUjnFLSNuggg2no68vAGemPjXG9VWnjTgEq5Ba9kUPaNeCMVB9AG64ixSzxFCijYQu8GWm",
  "key17": "2XCMojfUjWAro2n6dNHnhgpno9bhKzKwip7B9cA825U4UizKagjpQd45TbA95ZaijHMxyWc4RUqqadcvDQju5aM9",
  "key18": "WPhWKL74FDizxEgw9cFf4bETVYjka58wv6LLqigmgGLTtvB2TtfTTw1WbhadwGXPAgGWgK8f2Edsi4H81XL7Uj5",
  "key19": "vroG3keXUjWsYrioVmjLZ6KP3AiBYjTh5WcjXWFCpQAK61sSPPtnKeW4R5hLoZGH94rx7WWLMCD5582yicL64hE",
  "key20": "qraCpax9EbXzeBseRZDkAEgcqWNHMqTktyzpX7vb68ZVW1NV5VVFBW1m56g5wbGn2FqFfURRYJTwNoWNeYmstms",
  "key21": "2Q5wYu2TjYGPY7jNSCXa9xZ4C7qyxLoeyoET7UYzoGJwRw8S5hTW3jAA8D2xLtQj7B4SxfeWggyhXXHhsKnVZe4a",
  "key22": "2nBuet88yTcoS6s6qpNw2js24KeAapH8McNMEMqDyPqvtB3nhD88eii77K7qvSYWqgjZtwxtNPyvKgHzr2oSj2tU",
  "key23": "5oSH1yRE1yaUxGrLKSJ7Qd9ZGQxjtzxCE37RXM9mF2oGHa66TRW6zQhAoSk9eCDB7LwajbYJKJx2TGGcaKWpPKmP",
  "key24": "5ibyun4HSUuJAUbamU236YPKTsVT4b64XBh4DrQFtRiKv5x8tiFxLA2Gd9MNzU3PQWzRhkduQFvS3tyJAJUsLhKQ",
  "key25": "nSHLVETyX5qiwi5AhDE6amzugfK4Lcdwko9Fpi9q4kwqzef3oSGpyYQw68d72sVjScJuVnojszDeVDm4FZpHqWw",
  "key26": "3UFRMPLGo79CAPN9fEgfrt8qMaGYZ3YoJ2w4PLZA9KrP6piD3qDGkbRNrWN2mQMFpiUAS5iotnNqHknn86hm1Zow",
  "key27": "3RvSbwTmHA4bhq69ge7AduMMCqkTRweoHj8T4pzrAnMRmGM68pZtELr67gBsJqVhpx2X3w1xo8GwM1jUasn4cXGm"
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
