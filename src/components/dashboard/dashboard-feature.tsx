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
    "4yMcJrwcAuCecpzByqVJG4AhgKgQRq4PD8DfKVNkVmSmZ4wjJc2D72QxPf6qyk4ZJooRvTGBh3bZyCSJ7attiTPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cZTNd8EeykTazHCPkwyyWkVGMpCraPbr6teobQLNTnhTAUUn92iShuhRcEwnzUfQfYbKcdtaUoHru8hMYUX9JMA",
  "key1": "32FhspAScAWDwYsRmqrrmvAU8VypZxbVEHsZpRrgZTJqy6sHrRLPsT1jqp8gVZQoL7TaVC1JWWtZkyxfnN7AfaCM",
  "key2": "4PZ7QAHUoNHYGKqh92AP6925TBbXxnupRraJn8Tmpf434inu1tPE5NKiyZGTeBEBcyT4BaT1kag9YHVUw2fSqp9A",
  "key3": "5tXYCrsVWPJNJhpdb1pzY162RDMWE2ShSr8mLZXj4rKGWXqhpGEuM5cWChhfiwoNey5nfBCwsp8Pn4Ju73ccQVtE",
  "key4": "348TwuqCAMemBDVt264rA36qgpVWhZ5oYdz7JRNaYf8bnaCMLcQhT8LeGdFXStpaU718FEGqEsZnQUBmJNTK7aCS",
  "key5": "BfHdg5ewUvRWKbwvqnBRCQWCf1oByc8FdZFzmxcfMEtsoGK8iwbQuwRQjErxnkaJvjXf3DBj15hkUq5J9YhXmD2",
  "key6": "4H4SbWKDm7pdBKTyF42zdWTrFDngb9gVd19fzz1jPcaZiSCYk8S9usmGBsyLzEJrsxAXp4kbXgRy9mZDUWZzT5Tn",
  "key7": "3V6hGfUUyoBWdUaBTPVtcQ2KbETNjdrNDyGoHdZMkpMFnPTs9innqsTtpbJAXHghmjGVFmcpxE9nJTvaFftnPSZG",
  "key8": "3apWo5V6pATZoHjBBPLxLgCSRuTN2gwbj8vdTLwAYDWfwmMStWWiZnzd4aXnGy39Q5wrnfLYuCQ4vkcvwY1zLcmF",
  "key9": "3hRwt5K7eYDx6cSaC4PJL7ERQqLRjiKhytZg8EHwdd1UAuhCGgep4xBjPLuoWt5xpR234fEh1QsAgthTnwF7VhLD",
  "key10": "2635ZZ4RYzbcouFxetHyiTLWE9r4EKX2hrJoRDKYAuTHi9oUDq719vhX9yLDAVAam23h91txRidtE2y9B2mHeizo",
  "key11": "36ndMEAe7aYTVwap92vexnvRcBvEDKZ6h4ikgGUW9sqCKnL17GPkzA1ZpBqvAUEz9Wjpi9CVsW2KtriJMEFD7bYw",
  "key12": "Pfwi9nTp1qDePQj2bNptX3xCYu1nZnFg3rFn8JGRR3BUSGEpY17ToTcFoc9hwDrDxyydczhzSFJ4mxvURdyxnsA",
  "key13": "2qn9gmXakD6wQoQ2dB5mr7V1VXUnJRz2kATM9kvFY7gY1MTm2b1E52kt3XA9MnRxLVsFj9sUzpi8NvyFJgdKeTjj",
  "key14": "5Y7vduMNMpDwEyiFZYHJbyYSu3cH7AWNoyfx5UPc4KXcDqm56LaEXv2iUM5Ktmme52v9H1sMMcqp1RZHpbWjucwj",
  "key15": "2W2rYEQ7BdtkgF4FSs52Yn5hv8E7RzA3d75UNdtmnKqza7nVi7pQYiPAv1jxWEtCKmbraSyfCXaTzN1S4BiFpkCB",
  "key16": "5PM5Li5ADuWv3PzGcjPkJFf7qA9CE8i5LTnL32MhKT61eG6LEzgpFDoAxdVigTfYrRQCb23WkidAeyFpaYYm99cd",
  "key17": "3Ah5raRjDr9dKNBa5V63jtK8VdXSiWFNypxKtDPiUyJ16CyKXm877bnA6d3sZuufm5ae6jNpQcv7KiYjvw6a2Run",
  "key18": "5F19ZoqmBJq7wVTbdNVgcjvxSpbMZpt8Zvq8SAUMV2Yh3L2sUhryKCpoKUMco9irUSg7eUG2KVnsdPVTRTJmQn3n",
  "key19": "2c1h9EAXmFndXCvCUA6ZqVsFyYSmVKhWvx9FJCNkz1hGmBxwmQetTSehoE18x39Y78NpJtvMGLaMrphMvFrC3PGi",
  "key20": "4FewfTpzuPYn7z1fuAjGNvSzuFo1BjJKDgCgcGi1MGWb6xfCEHT2Eq3oLKGB6ujVKFZ8UpaMSWcXNAJjZx4xDBQN",
  "key21": "37mw7bdds4UZjCNNGLyVdKFFTqRtzjxf2uC4sFHn14yAAwkoWy6J9tdfRCat2DS6PkuPBUo92QUxAeVPawAdGaha",
  "key22": "3F8ZFLiNMs3y8nJGwB2iTkhyVWZiHFwdyo2rUehnwVALkinua7soo1NKJTVcyPbNEkwxJhwFoyvAMP2BQ9w6KyJG",
  "key23": "5g6mixSHvddrdppfmYcpEyxX6okPeqhvWGNrtU9LnsnwuNSrigvEnVKRMWya3A1ZU3Gihxk1qSAFJmtBxyHfvwhM",
  "key24": "4hFBqAMZRswwwY5vK7Cnfpw1XnNAPYhqTSHy3WAnxBy6YCdy2HkGLvydfsnNrBidMVMSsjmAJmv5r8dwSqy5AyNu",
  "key25": "2vYxLaBCTJACBP364hDHXNb9kq2z4Rgtu1d5SfFEG1t5Y8UaXZ2ZXw5ccXhy31HKefQwN4FPA9dfaQYnvkggEDp1",
  "key26": "JQ82B9seNSn5AoA5G97knSYEFTPkfGj73V7hvpbvHXBN4G9NG1mYgmr92W44j8j9Jewhc1WmM9FG1v27uF6371M",
  "key27": "3152iJ6TpxVNMAQbALAsTZBPPvJUqohh5LPLfkym4eYKF1g9jASr1fsqn7MWesMRarVYH2CAqq22w3CafZKLVpAk",
  "key28": "3cp7EPf8jhPBW2AjX764Qnq25xvNaveFkDXc7J767gnynwoY226QkB8uuZGp3WKBKD5FDj6EHLxAEyEJMaWUueq7"
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
