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
    "5oi5UxuXvuCSXg7uR1sfdXr5nu7xG9iF7juYUbaWSEN2Qf1SeXoh5y1kAbEuh4SZELHQ9rfBTZMGFh8ZWpJv2ziN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yFWWEQSjkhhyT3D4Pr2LZ7X51Mco8xYx98374zY6KVxyydT52yFgWbt5fRRSqHM9GizsfcaZvcD2dQToZw68Pt7",
  "key1": "vL9ZYHDAjsfZtz83zTD6uH7Gk4GwfqPSFxsHsbEDMaW9H3izGYutDwus7jMS2AyCR3qp5tZw1i5xVXo3X8txDEX",
  "key2": "2MHgf88WNyKJRHNakp2XwgkQmx2BEcQtfFwWJj6Jf7ufTdFzCTPAJGW4oP1DLm8q8cvNaHY3nAeGkufbiWYcca47",
  "key3": "5ELcdUV5UYtnomBXFaYoMX1swuLH8rmgSMELohYrCiYywER5SsqkDTqATWf2zySqrHnwsL3b5Z2sNYE2ChJPSrTB",
  "key4": "iDxkSYxcocU2dwLFpL54ZKMAu5Jnb2W5uQpXtKW1Acxorq33ukoJTVkerp7q4HN8axMPkvjDF2qtEAseZ4N27SX",
  "key5": "QFzkR2e6RipFePV4P8QDdLf2jyfkMq9tivvcDjFcXo4eRwCRTLiFJVgVwVTh9zZLsB1zN4FSWpCP63atMmy8Th1",
  "key6": "2NMPdr6x6cBt89v7jcnPQYsdzjYqfkAgLGY3tXwfsjQMANDiL2dWhafp29exj39mLQdYegmh9kGPeNiNq7oosCjN",
  "key7": "3tuUJSnQj3xShtYfiQN9BHR4UF5oQhnoVpYjKfb3TqCHeJm8NJT2HD4XCHtNmArmZwyugzLASq2j3zqVGkZYgreX",
  "key8": "2CSUn5446ocurw8K4aP3TEFC5CZ16FpkkYW9SDwroS489mXx1BvyRgWVoyy5DpLYfqq4sJGU8tj75DvmuCartAXZ",
  "key9": "3dyXovswRDm17sTfeSR2Va2oF1GsDJ9ohxgShFRmBMjcAhVj4ZXjxh62bayWFfKWRpKAScY3wXfqx9yZtXVWK6Az",
  "key10": "23uX3DigoMMW4QQdn6vZvJ8GC8DgXQyFzGjwhuyMQtCq9QN8esJkSKAu5dRA6u13ziubZwFVnVPjCjQMt6xnbws5",
  "key11": "5ov881YNEk58oKGMRq5r1YyPXgTbUkTYZa9Xgz5ykEX8E427Jccgp6sedQhoShoezwYCj87ESJ262Nsqs2hohPD7",
  "key12": "YEYdS5ZKi1dzQcB1UBE6uy5tUfH8d6GHn2wE9MWXX9KafQfH8JHC2m81cE1TP6AA37TkSDDqzK4PXtZiCh1hPTE",
  "key13": "3M3rN38ytExZJuV9WuXRxYUp4agabzvhMQkWcPabGE2f6tX5YBsxA8iJMjS6cf5bZxKC2AdubSy3xZdKTocSbnCi",
  "key14": "4BsfNYzQwHgDk5YUcZwv2J65hn4oRoPQB1gAgkHbGANyXxVWitKkweWSGGekFuAqAs1A54d2cLqQxsbAPbRUsgph",
  "key15": "aT6FvzEXVzkeU2wuyAZrhEKiT6rjudvULoaeAXdiqVoV3DUiBx1MaTQqN4jQ8k5PFb5gRAsja2KUGPCcNahN6dm",
  "key16": "5XNN8fxUTp6hwZsbGBTs7nsoBkAg78WeiHBSkB2Nqkm87FenRecMSHsJV9jdhXYgDkFWHg6t1TPfa3yJ1hrTUG38",
  "key17": "47z2EB75aunHs3NMB1ehc7QYioejDNrnA3hn4gaCLakZafSeCP2cmWM5gojYESnrJQFGpYzpfTppy1Pc1ghzaFny",
  "key18": "5ASTsog2RBJFJwN7JmNHRpPnsn2H5wU7bYB6vKbh5EbvNLCQ3aTTA8c4RPn8KXbVgk8arinC45dufHNM46aGJV7E",
  "key19": "2LjLKeg1hiNjeDH6aETUzApGVUiSXJ3tzpUzARt7dDWvNyYmNiirSLw1VawHLGJdPRuQGYxVDs2v4EdyLLPthMti",
  "key20": "2mkMZGMzhjU1HUu4KC5SVQMsXp5ugQbma3kMq4PyrGvj2ZRCgCEydsa4PM2Emc27VNykMHVeW5qsTF1T9i1Xy4Lw",
  "key21": "4xcomwQyno1zhLTmKvsHMs9L1GKpMN7Jp7a5iczRZBgnHEEqbSN5uboAtwT9mFKVgLKkuk61ZTVcpBrBVenkMCke",
  "key22": "5v2BjSAQof4Dzjca53eq17fapjnCvR2Luq7cJns3SP2zm5bUnF1dLmEcwJXgXvBjJaGEwdMy6hyhxP3Ui1wdX5Qh",
  "key23": "TcKd24UYaSo9eq7ijZEhmYkpCQ72ssWSNt1s7xZSTSCYinsi9G8qztGPozEUXQBXTYhyMgkPQsHLS9VfZAMdAfE",
  "key24": "4WFXGxuy4roUgNUmB4iXDgXVL1VJErpvFA9vTSsfEmZeehw6XELDnDQv2c5Nof5NNPTGKTNv9ugRDN7gqhc3cVYR"
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
