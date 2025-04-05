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
    "S9L2ypJQrP2LrnXkmRaeWVMvYzJ19zUfi6LqF4TiZwYYCCssi9oJm7H4bKpoA9Qu1r27bYSoxeK4PjAFofBxPdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61k73NRTBDCobtx3z4bzRLAXuZeAwtdBNKEKdPNSzPeNc2eni7aQ15JJLLu986axgKYAzwZ2BBJTmNmx3XXeC9fw",
  "key1": "jC1GJdzFwDpMRqjMjss1LNn77DPJWYwQ6kpGVeriQyFF9QQ7jtaUx4mfnBv6nTycMket4XCXDydvjurYhoWm9KM",
  "key2": "YecJfPthK51w4Xg7BnEcothRtkR5Nfa5xaqsThvDZevxQib8Dtkm3bj7r5fV3ML7VGUMN1whdEYK5h6awce55r8",
  "key3": "4M1Ua9pN2bSNBWb7Dyz47QQbzfHzJVGnouU3yhbuaz72EWsg7jSdFue8grezPaKT4Cs9cHA3QBcsMDzYtArSWQvJ",
  "key4": "Eh1tMfCFQGKykKzx3CCtK8UKgRgGJDebRebdEmwTYT5rjwiMjnwJB1JBwp1wzNatWwxg1AQR6FkvsLRhknAMo3x",
  "key5": "3TT1WSMQnjyuUbDXh3is5aaK4ASvLMVraB2BeYNVSUXDERzeMMnuECe29dF68LCyxx5sz1sQRdfeweowFSf7QwEx",
  "key6": "2LaT4TfwCwBbaUy7W3nyUDsfXfJogJXxTa1Tcd9aQspk83ejRsAJbyr1gKtU4bAgFc3y8WhCDUPr5BBkQSL9hfvw",
  "key7": "2QeBjmrSMP7ifx5rsbJnKYj2Saczt65xy7q4Y9kjG6shwJ4hBzikGYxLmm14xt5HZtyKatGEoGJ2r2CLgxLMG9DU",
  "key8": "4GD8PM396Qi3L8WUWByS4g4YM1AZe4vgZRmfrkZCTXTgceQ7HBzTLjJb6UFkNFA7sVJRYqaTDwtknaFNxEXdEJXK",
  "key9": "2e62EfxQ7ny7cuwZdqXgSqAR22u8MfTSzW3nMqH6pc5FapfxGh1GRBMXMcoHQJRxW7JBhmWry6iDsdZ8TCugKG1y",
  "key10": "oSPaHB4Q5ECd83snUVpLN8rJnzZBbmxwhnHAGFZK4XMW3RoNMnm5tykzvxJ4o3T2MYuBdHzyDQxy2YyZA7AC3Xq",
  "key11": "2FuGxBnzkDAryUbpmYeyspoaFKm1Ba1bpfMqMGwifgFgHEWjQAfFm9ptTpfjAEqRDerQytKA2zhyRfKx2BR1DHvk",
  "key12": "5AbBdNU95Qb2z8T4xB7n6dwU3xuXSvKLyLdEdPJo8NfKSXL5ZGkscD3pRjuBSgVSvjaGLVYo37nybqoj4oBrU7C3",
  "key13": "DJ7rH6xZedeUrfad1uXiEbTWWdTtScKcHsEeRcMyU94b3qubrjAarp7Y3Eo2vPAh84PfR39SUS23Cpip2FFPW8R",
  "key14": "5tLjTnHncjsFCPqVTAreJ57pdjHMorZ4EtdPMKS1C7igZFBVsUu4mo8Wtt4LG7cyzP44QtpTzwR7MRJd2cMiBrCD",
  "key15": "dqdnYaEoNyuRvsPBxUNr3FpRwQabjJxdeMpcbTPQ88dPMWS9T1JdMrbpoNbC2T36PTzJ9EJ2nL4Cgn4ZQSWnGnT",
  "key16": "34KmnYGujH8wTJZrdjdvycCLm5b4KeRQ7mF7gRi3ZoXTQ3mtF4RSB12W7DQ59FujadEwRFEzDgb5s9GgERpe6TzE",
  "key17": "2gwiKoTeou3hpdJbCwR38VubuDS9kjffnfZWDG75BHJgehqB4nkzQaVzHBgxNZEDttYbN4enW7mMp9fYxhUAAB3w",
  "key18": "2YjfNYLgVeMsA2pKoD7jRodMu69z8ig1sYLfgumnNkYzHZxT7Mp4yycGKWN6iW5VG8ma3mKUzDyhznisEDKUYH3M",
  "key19": "2MReACxXX46CEDMCitGitUbE7BqiFaUBNHeqrfNJuGrTcafd2hQwqrZeCiisBhZFUqWdRMtMYrfv4YCCafm4TuFz",
  "key20": "5mbkfoGwPnv2gGqPMFGBhVgWfYLCNqKuDyc3ay6cfNvB4kujPh3SCmjAEJkY1W6CYtgRzgTJgsZtD6sxrBW8tHeR",
  "key21": "3CLknxLyq7bTJUMsBSFmmDZoQyomyRwcJmKX2sGee5rERdgvP6ki8n6koRLY2HvarASwv2KZ6eXppp93BYwKBjDi",
  "key22": "5TdB678uMgyQKgawnQitEomaVK8f2yEnk3PjxYJHt9yUZsUw7hmu9XFp4nyV8HN7RdJhk4sarAcGcnzJZarhG4VZ",
  "key23": "5NWwLBkYcGgPAeokn26zUd82FMyitUrzFgfSs8c2sez5h8hfAKS4W7BwNSb5fYho5RBT12NMtHoRjisZ9tPo9pyN",
  "key24": "32XDaEZ9yymA5ge4dqnbhjgaSQHYFNVo39bRiVzVP5kmhaQmZMbNz3UJT7LgUyLp6TQHC5h18YSFXaFb4jeRi4uj"
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
