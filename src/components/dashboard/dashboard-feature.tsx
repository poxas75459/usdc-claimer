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
    "2hk58xfrUzS6TB6sMZBTKgtiUbcfbiraijf3a3QC8TuHg5GbC1KAPLJhxQrB4EvH1bru9yg9QGN8qNz5W3zKSr7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L18b8B73iVBqpGyn1FoQQXS3fRTq5NBq9FZ97iQqGzXFAZsvqbH6coez3o6Nf57Md1VjuAxjBcs3vQeKfagMWb8",
  "key1": "42ZY5fzPzMPkT7V5pQjjGVkZRppAtJiXJUgxbvYFK51VUcu1YdG6U26CrT66YG883CGZZBxgEXoNj5GdBHgSpTYX",
  "key2": "ReUr6ZzLpaCE25xuW92MXLsZ38KTK4YfQLTh7Fm79YMUGZSxK3N5pThoqTnpV5V92aP76zd8NwoXe1hbuoPijvz",
  "key3": "3oLmZSf67CbB8JvUh3QAohPea8SzmuszRZCP7Qa7hP4743PSywLy4LmmQxF9bjDdibn4CuaYT6XfwVyvLe6b1N6P",
  "key4": "3KxSTuhf6z4bWyQQwAtHKw3Y5hF7b5JKpkZxHtBZVuSvmwXHEfRYx4CewSYodX61vDJjDazBF1ZYdTmKSis8PHxd",
  "key5": "4w3FPLj6anXpteS4FubaTzgnXy6E5dXDRHWhNBaWfGwZUaBVE8XkEFUdUv5QaUJN8Fya1UV1iJv5jYKTGu6zLM7X",
  "key6": "5Ws9vP62SPxqVBBYXKpamLyJD7HE89VEKKeuXjSUZQ271CzanLToqM2Zq4kpg4cE43AcVpR9mzKMVRdUBq4iW7yu",
  "key7": "nC5Q5wWsdFas5mzz1wYoA2hDNNs2m4KaRLizdUCSLPn75E8DihNu8ttRQ7PEafFP6zbUnY1YaT6fbVhXmxNVud8",
  "key8": "5GTHQHMoMoezgbJiwW5ydTVZGPLST99NqYJ2P9oerncQBmsSfhNrhwWp7GD7pYtFMrLpHLAJGA7qWq2ZBRdpHqRS",
  "key9": "3WiALXUPBZHABWic9VTzPEj9FGfzZXdzX2P44m5xpuQvrxBhG4kGmY73ryvdDsR2NWFUNBtsZKSybLkTsAgVLPZZ",
  "key10": "GcbWNRgiSWpjX9PJLo43LHQtg62fEpr4h9UKnSfhK2Qt5M78733PFCTDPMLSxFihjHBEHYYz6KhhpfwwFbVsiHJ",
  "key11": "439NtkKdgo52dTgAPUM6ao733zqDE5Y8QimLxXKa5yuwv5UtePunVqktDKQDZTZv1G3FFTNBAw8W8YRwPJMTGMcW",
  "key12": "3kyXBWS53GASd3XdUjE4VaRAa4gYbjxanysnodhPRyCkefyQRvnYVor79qXCF6cgwV6LwiTvMz6C3szDVQCeMCaV",
  "key13": "5Ubh2pLdhcZKeeVnSpo4e12jkNe9U4Ea8pKAD7gxwYKP3SWYn4Puz4jXL1gWuVZnau29Y8bPjH2JfQWnbxkEmQNM",
  "key14": "3sGFwkfRbRJi8yd3FmdC4wqJhdsKsjhECCcV8zdrhr2DQP4CMbetacwpaiz6HsknWkZCcwsz8DbvpdA4pE5rCXKp",
  "key15": "3qxgGmoThbDz3usbuMkG3GNLjbecsZfo5qaCRmrs62vQrGgtCD6BS9H8ZPeh9hHsgwRVYNSkPkb368ajSx3KQki1",
  "key16": "5gHXZHFkRQ9dEifsak5jffmB7j7PHUK7K6LZJBiaMYf16f2pbPmH1RaqBnvGCcLtWza8YyfXB3hGpWRUazj7Xsqq",
  "key17": "5yAdyHciDumjUrDnxBhRZjF9491xjQZz4pD2Turk2nCXzB19JRr4fhYCpxNRAGsUHAtT2S26JS6R9WS4DrsdgRUB",
  "key18": "3VzQj7RYV3E8a2Yq26Pvmeh8XcLepaDSxKLvBrDqXZ9WmQvoh4xtRLG1fciVzoM4TLHS9ehZijbqpK5Wz6iuVV3p",
  "key19": "4BcPpenG2fC1KzaG7xrWKjNNiw6rnURkt5RKYDSBn7rxfnxNhdsUC6Df8V1qLVtT7d4htvTqsyjcDTWB6acDFwAb",
  "key20": "3Kuzow3erLtaPaNXTAnbnXK766hBVmwyjRkGtdg25S9UtA5PiRDqGgxcEPHTYBKQX92BJXYmjoRjZccVeE9uG2EJ",
  "key21": "4vEPCBuar5Trn56dVDrRhJJF4MLo1BGmL6NakFprdbW8uvUVrZPY1SvwftZLkBKYa6V3ZNekD9y4k7937qLbK9oC",
  "key22": "4PJCX3vVpSZvjX6PL8tsQkBiR9mUD3Cqf95dNt1avdpHMix7AmJRq2AUDLxSiDcS3dbETk5GMpVTu7M3ss4tUA3p",
  "key23": "2EcPniGDfJp1TxzS4YrxyfAaKMHxPMLyau3w4rMfhUSin33npD7gqhvSnbXc8Nv4pWvNtZ6EvZ8hJZDtiumWUtzL",
  "key24": "5VDUcGr8Gtn2JxaRtcXgLSqCznDnSqWZaLWurZfSjFagZF7bb15F8ETyW7ijZvRg47CC6UvUqFs9gi57smBsMXXT"
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
