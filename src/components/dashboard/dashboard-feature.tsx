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
    "5Eeh3HCLyvB4rfrfm18fEGNpftk9xgQ9D8rcxoZCzVPHUkjHba32omixjNCKpv4zbTo8Eg5g2FN96woKtTdKxYTi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DogFy3jeMMx8kLt2zN3xGMhQKUvTiNDCpQYR8MJbAg7Z7dPAqVT9wTKWjYWFCMhSofbUhDkVcukqatG9FE9WHL4",
  "key1": "41QwFahPR471cNHPbFhFT8BojjPNVsxsMUH4ek8rUHQQhH4iMP2EthvbJEZJ53eUaZ6cM3Esn1wVMZEg7U8jBfzp",
  "key2": "4AH2PQoEStnPxsXtDGAUGSutg4BBRZ3btS6icwF54nkCfxCrNC9RtFFr8WAbpWTXKq1AjSqbAciQvYuvpNGKnHXx",
  "key3": "5kkwpoXjiiy5XaLPx85oHxTfSTdC4ShRZyQBF9gtQrxhCt9ymCPtjfxm1AgHmKt85ZLSYdyZkfAnNJPLPrduBr6Q",
  "key4": "7BfaHS87Gtf4WTZ5ypPC5Hs4BNYEi1iv9Lck9A4VfVRRryZ3WD37zZyCyw6LX5eoZ5apYFQAZb1KE27MeyJQxvN",
  "key5": "4HJjbnmLwYi1nY3wPQkWn7EDs4xVWiiNCWDQy94M48PPxaDeBBaYeXpwxiU6tWbXfkwBmutYWB2PvCoLtrDurLAn",
  "key6": "16GKYNyGoPn4aiZSCKKgGABCNDXia3Jhpxn5sna1aigoW2D9nDaFtVdrnjtJMEzydCMS1EKM2vrctNhH1Zi7p8L",
  "key7": "5Fp78GVShA5p76nCctowuxfRKdD9LC6yyVapEPvqoHe5yaxtJiMdfdCxdCpBPqyRnFkhYqfFSWFeqLUYcYQYvUdL",
  "key8": "51VrdXz272urrpgoKfByvppAXfw8GsuNMPnyhLeoHHCxPvjruRpygNJwbiMTZcseXWtNqSCpkDe1FXyN9Feo6xMY",
  "key9": "5UuyaYUxgvYYfJSy3vX5C1xFK5RMVvx3ou64hfu4zadmitV73ouoQfGDz2EB2DFpv2A7B1gZ8d1EX82jLXi1iWkw",
  "key10": "3Rg3ky8r1F5U79zZsaGF6AZMz5ycawkGHrQHHPQ9yicPtpWmrgujHX3jLUQ2TqFPFknZx3A9bQzBUpuArmwGrnZs",
  "key11": "4fAYprQLEEPBBCgXmKjDMQmq7mFbeWRRnAYDyvF3uaWRuVV8G9Xa9KERb5QjLvqoyvV521ySEx1agJvYk89hGhY6",
  "key12": "5xZvhRJZd85V9hbiKMv2eYnN4mbgc77nZ3XnmQv1j8pZ3nEinbQaX8oaB7L9WZrRXsMQcZYqQcc7iW4WDWacGiuh",
  "key13": "2Xdx1SBMose7AbvPKG5uX3GN3tFjF1YzUtQE2ZhM7KN7e4kH8zptdsj94nSk6pxF3hGxJZajEeyptcS3fnF7L7rX",
  "key14": "3BxYnwkPkCviqDvrAubrsEPwDsZQTQwvUmA1iBrA1m11yYpjCxfb1SAy9dnQdrgzhgriw3e6jUCrPVYShgYxjVyT",
  "key15": "49cwPyJwtje3AvV8C14S6zxP9aoPgvDhEewUqpg6wtGc7N6u1K9GDNxSiiM7LC67pw9RQPhyHEZX31nNLwAhXJGi",
  "key16": "4M4oHB6sDpMF5KYWoRnU5NbTsHfyw4Nm3aHatkNT4qsaaEWoEjeN1jn1zmvrtWuZ8hC4UqpgZ3gHJiZthHBydf2g",
  "key17": "q9VbiQLqYBp5sTpd4JRUn22Rzajj9iRfq9H49YKF9LnwVBTfPDGMVKESGwfVj1CL2377vMVfrTzzVimxBpdL6eE",
  "key18": "679MNnCG328WRZRAf6gmEFWCKc1tJKxqNP39WnX2bXGqTT1dFURBQgZaANak3y4aoShBmfZefai4sm87xzKnMNtg",
  "key19": "3WsocRKNwYYD3CY6nkkdBkpxLkZPdWGHuvPAZRpckRVMXrMH6fxRojPpFACtqVvcWhAtt6QFVRPj1bTm2hx9U1kE",
  "key20": "4xGZhJcgijvJk8y2TyLxLEfh4u5KQBZigJnfRVEkyuN7yKqK7WpD19D5Af2HyzXFRyFpv7yG3jfgZHHfDoqbhSt9",
  "key21": "57eUager7BuspvvWbjFcxKPRCWMJh7JWtEg8iPVhCjS8yMTAyiVEgMeA9u6HJAc34KucXPS3tSaomG7SHyvqKhVG",
  "key22": "5ix2Xu5JHjUBAMYsm97QRfQW4BxGmaRKGKmA6mAAMN7NK2wkCxmDC96Ri8ZudaNjnLrxzMH5cXxNd7T18sGeVrVg",
  "key23": "4uFa225ybEvEcQhwohbpqPNikPBL9Jx72i8deJMaWpFq4bZXHtFAeRp9UDU7PXiHJ5cFCPxPssEk3RpEWmg8CPAs",
  "key24": "4xRrUh4LfN1wKtN2pfeTfJ5CqATLdQxqFi547cp6c64mndZq5UTajVHYphEJuWnvRUNEHgQR7oZpY7zSZKJq4Hab",
  "key25": "2bmSME8D1wwk4q6jyTY9a85WAYoxipbn4WcgY861zT1brxYNbjjWqnKNY6SmQLCC1apxzfBEmQnMYewoeW9XZjZA",
  "key26": "3Yb4UCV5okrQtY8w7XTdodnyyPH8tkkTVzeYSVvDGjCAwWR7DmTmHGfyW6c4qoBQPWPBh6pJqfKGr7Z3etAAA9mN",
  "key27": "4H8TYhCS5h8oQw3BHDDtbJ3SJxcYvcYBWTexGSkJtKkSwMw43AidGk8q9nZbBBgJDfF7bYMuv7EmaA6DUeeZ7JkB"
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
