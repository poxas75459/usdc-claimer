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
    "2hPxg6bzFbgo5YzVjhff5nL2msaZT2qb8GJVzaKVXze3GCSat9RS2SdjRDqAVY2sZHaXmXLTPhqDipX7vnHJUKbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fVSXGFCufDdxsMYC1HetiSyCKqLtMDxwNDS36KKniUJW4DH8in5FdjbCmup5Ccp8ehCfSV1YjCJezoaStgfUNDH",
  "key1": "4gZDs8jD983aPiLupAm8eGYf8oAMEyHFujKryywtmDnq1aYScu3dNFZBe6WfTPuW8DSDa5AujKrBjaW7kFoGhs5B",
  "key2": "5iKHUT9CvD7jGRo4qVEKAySDGJ4HcVPRghXet7Y6CUk8u3WwCwK9E2CX6Uq599cpk1y4FsMxt1L3N68uY8dNYTm2",
  "key3": "3XSYXcp14H1vRSLK5bVP6ajGk7eYUzxKDQfiNpCvMX7fRDbRcKo2aishKEBeRmzWCXD9rPGoaXYgpoPDYntwGgaj",
  "key4": "2BJu33Cm7FdrWvvVXQY3mkmY4RRcVETbJxwrtZDRW8kXjVtAwegsx8ahC9B9NKVQnUR7LLiKQkL2jAvPS3qHBiqM",
  "key5": "cMftqpTDoYRdE9GtjMxQvXEsMpVhXvKMa3inwxuTvEYCc7c5vcfYXcunFMacC54QwcyicC2nKtvGh3WJjthd9dm",
  "key6": "5pYoYSCAXunkZh714Su8MPG1k9CoMCL61hkhDVqT1xB6aWcYPbo8JvfgSVgJn2WUcnKDj5TcTvwHXozjYj1CERdj",
  "key7": "Si3nau7LN8xbEEjBGmnLeX1stzV86okn5ktM7qDdTDHk1KXBa2rHagX7YWZ2EjoBZUhgfGQtY3EQspaqbcgVS3J",
  "key8": "8XzUUCnefQy5b9yH9nJi29PZac2QKHfDgpRw8gVTQYqFGRNbvD7X3w7VqxyLhf1G8Q6aj9gzuGpx3zct6915o9k",
  "key9": "46Wmq1jSSy1QoPb6vEeBEtrCvQp1S3JX6S7RgoRhimNEmBSyRn16Uj3xdvuqFxxAEYeAdJLNBh5xNfRNdGgaVpx1",
  "key10": "2QR9Cwt3Pyza7LrjbtxUVPgYKGx5eXbxVyfXjt2VpK68jnDfhc9aCuFdPtpnZydLEhpcwtwk7yCM4o1y6wBem7x5",
  "key11": "3pTByS2GBN617xE9uxxXRNJk5bJvbYq8qDbRdq8TGrpdp8ouvuym9D8LhgsaENsVTNnhyE2z2QNcKgJFiBCLWVpk",
  "key12": "41LAKxqYLSo5zXumZWVi85NjEZv1n1ut34Z29NaSj3xPEzTKZRoqL5sY7dNWVgFZUURPn4B6gj9Hx8h3yAEMNUzo",
  "key13": "56uHVUf7vuRCLBdz74hJeDHgvQEppHeiVHqnVFKfniUVGeE7z3V95bDGgU9XEADP8Vr1jaoacvcSqrRWNE7t81kw",
  "key14": "3NaELsUhRgCN33gCAvHVoSbqTKne9yRTYnT57cjTmJNPWa7ZwFYPYraxcJqb4b6kYSSpDwbcBJPjy4ZqmH838gr3",
  "key15": "z1kpCNnREn5RTvQAsD5gpqGUhwhUkmRWhi29Jfoyqzc89zXtoUxqQDAAZCgFatAoS4FSWWqR3zKKkVkX6DDrbEF",
  "key16": "5XTEKGpn59GrTWSTvHEdFsQjRpju477Nkbc4ijthRm9TtEbMcViwmAfq86bcknNr2r32rEG7WTDC9YWJvQwpooUh",
  "key17": "vTdgXajwGtKiKBiKcPFMGYErpzBMHrVceiRe9E2h46PExxYJ1EoYfY81Yt7bCSzGhagWZsZ1qeawKLD2nfHvkm5",
  "key18": "4JBMGW3pQbvMSRKBRtqrsNzPLdPY2AvLSY1EDDdcXF9uKyNDEQbXnmWf2NiL53Hxp5UkeoAUaqDCndcysoXA1P9J",
  "key19": "5HifGsgJA7wmy24JRSr38JQ8Nh4A6FjLGUgJMe4mpWjisqEX69WUxdqNvZc2Zgpf5kwvkirTmcDAHXARZU3cRtYc",
  "key20": "5GvUGwohmHfis1oPuttsBhV2hWCwHnhFnfasizvwDcDYmX5j8KmHKmMaMeAoD4zzzVjB6MNBf2xqXhYFo4cJgMo",
  "key21": "4tYvHuXDaxAtycLPqw7QTxxBZpPJevou2oHySoXSQnjFhrHQ1QaBnoMXziajwgwjEgdX8X5yBNZbe4bhDWgxoDkW",
  "key22": "3aWoguiWHpGeaomWd4khfeG9KodjhJcydyhv3LPRM2iEnYhCHeqzdkXe4mGfeTj6tBfQANszUMQyEKQe3HbtYCNq",
  "key23": "5Bx5A5ogMpF36bQLMqKiGQqYFzVL6dFAX7Jk9bQLYqRB2Kg1xnC2N6aEqw3cKKHqb8EsSHgpsxr8S6fpBcLmMpfF",
  "key24": "4dAhW6N2y2skpHviT2f52gg8o8Vng8uMu3wHGq755kHJNUXsRhkx5YYGQ27WBhCRAGQX1Wkcp6M3NkziDkush8ZE",
  "key25": "3FWGRL4MHYXJdCCm6V4Cow1tQikvCApFK4FQo72AbJCqePbfSV2Wwc42uBR26mo8wF8GzrscVeiP79BUmMJEaq2t",
  "key26": "2wWkP4pwWKVvY1EjcTfsq2xDtJPmV1g1iMBheE12eiWbYk6fEt4DDTCVxP5bK9aRGWiHs6KyvuCuPLeQcei1nL3q",
  "key27": "2o3Vr9L2TiW9P8y5wgCbeS1Qa2zYoe7LERbDKiTT8aQKpXzv1SrgqtK3EZpYQvUBNSqfMgTc6i4bHncQ1TMiuvqD",
  "key28": "24YzGLwkR2XTxjGqKw5pLwJc9kDeu2cWtKKJckpUTnJutKQdPsDvnAQoQcAgvWCu1SwQsVHUVAvR77bbdy8KPqa1",
  "key29": "FQF1ubxzLhJwUSXBtJnqcgCN5HkaajbSf2NLRbLzvcKKiAJbyTBTx5325WY3ux4dprFtL1Pv2dYeNTmrcZwqKRu",
  "key30": "uqsosSiEtbASCC2nsbm36zg87ogXJB7CJbf6ADAzK2WiSCnKUyBArqcQPJVcftEzy14siUqworyGExYWudfRoBX",
  "key31": "2uCNLdNk1aHQAMdqcD1jGHwswhSBuVcK5RbsSsooD7sDVAMiN4ScQYRJdtofmMAg15Kkv7u8WLKmWs2uam3sxXGR",
  "key32": "2HrWtmXAKgXhhHa1u2oxrHUMwrZCjuYFomM918WjgnVYvLcjtXgxrwVJ1RDq82wZKihvnKPndgWH6igtJL9e7NN2"
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
