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
    "64GJTjuADPWgCXFScebCX3eUt7ZggLtF9nnUihx6uyZ3aNob2kY26h7EPttfsZCsfzeLoiEjbATce5KLZZ9gtfAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cs6LbF8AXUupJZw2gVuKDC3fARbpp7iiahgJeNNkgwWzkvBxnvKjb4itfGwuEJzU4GUQVWHJxUtRLwz1TyWGcuV",
  "key1": "2bp1VLQjitPiUCrN7rLm5Vr2mKm7VXAeKekMq4Lmv5ngCaimZRiSG9CiHHi7MWpe6rXPvDHKz2vToD3sRJFE1Auk",
  "key2": "5duxpxjiqYhASCyQeUFXXeFsvh67gzMEuuyLfcMYGag83e1CwpdeRSc1xBam62Dydk1mnkAtRujTBbgbDrpqkDeU",
  "key3": "5B91rYCTGFLNZdKiBmsYrTw73e83AVUVWgR3q2vRh5BtrTPZ7DDszTsninQqu94CgoZ3rchjrJ9qJvS7u1jLUst9",
  "key4": "3EGeT15fYqafCCTnxTWXBeK9XjQ3m9438vztTwkvjT6MqP966fQtSeXgUGpZXeYYhe5aDX2KGZL6n9HyYnyzKbiW",
  "key5": "3VCu1DdHTcGLLZL1NosZd53Bi82HytSGp49e6pa2LJfWDfnv3NRHbrbX4wS1NJY4Y5aAtwhXBaLBpFNkntuJ2qPu",
  "key6": "TYRyPuSqPCcH66tr6C7FR2yk53rpdr7rhgPaPqJiyY4QHj77JTG5R7RrcQ79EEpec8LgnAnVH16vqHGitkgsc4T",
  "key7": "EkrZ8aE5juBDnbZQeCc4AYASrJLhH32sBHADFqiXvtAjwNmW58XoDW4kkVF8hTqB65WQsfGAg8R7qPMXNGu3SaP",
  "key8": "3Qz5zvGUrF5XbAkznHa8z2x86YMXF2YfKX7WZUbKq6hJqWkuQJGgRFrUbste77ie1MqbvTuFY1G2tFe6FGswXE1F",
  "key9": "2GaGNLNrtfFAyFzqBRWUefpeF8BFLGnLoxquXseCBrcrfp2DXycgVkUJSYZbjstVuKYJs4iRzvUF9yXFr59tpnaK",
  "key10": "4tch7jexppdAKD4jTt3ui78Sht1U3YT5aNRvgoL5ZP2RWRegQ3cCLyQkdAmD3HP1TR1jJe3CHXVU5p9yfjn16Mak",
  "key11": "5nxAP6V3eueBupTDwLU7A5rkqz4BYdQf5mmMVoxGJ2kYhgYQU3BxAEBwxiTV7MSAXZWrfUKPUT8d21s38x2XFkHX",
  "key12": "4rb7qTUCg8HpnBUpypRiZH7d6XbZKBHWXJ9xUCCUgktLRA8vczXxj5fEjSS8YTxY4sZLhREWrJBmFQaL2uhPrUZR",
  "key13": "3GH4kd4nz8GZxdiLuu5p28KiaAqNSXBhQdVDTJDiKgvwFj4RDet2n8AtN9cM4Q4TosXXkdo29rxHu8xgTu8FQacB",
  "key14": "EZ7RY2sDzcWk8VKwEf7SfHjH9ZcbJHZZUUNSPtf3VVNwAEtz8BPQmZtJJQJ8pf6vV8cYbNqsPCSdwc1nZrzBW88",
  "key15": "4cE1SiDwn9CzW821Hvku1Nj2Bw8RNkPywY8KJvbvX8g4yhs89EzbBHzkMJk9y9JPhQRe8CKtN1KsuhqetmMNnwQ3",
  "key16": "3JPHNBz15eYysZyysnEbjBWM8EaUsXH84xjsqRh7UvXSCK1HSBMAqcNS2uAg5W6wRein2sbRtFX4uF8VrS5uo8Md",
  "key17": "5TSvJBfxx4Q7HxJtVyW9eC7xriYEqnJsejEWaspfLeL8b77CmDUiUdio26DjbCJjnE7oRZqEZ4ZDpWUHWwZzziA2",
  "key18": "5AGaizUhqQsMdXupQGPBS383kvmT4KXkiPihzHnJZHBkAryz4Mt2s6nBXBZAcYpCqP8GrBEjm7ERvYn7qqxyedAn",
  "key19": "2enESEYX8jhaQbHkKQ9rBVzXapc98AJiRzGFwjwQ4Ew2g6AwaGXXKLrhQUoxcEByS6ucfo545iKUwV7EZXHZ1GGw",
  "key20": "22q7ZoqjtanSZ4xtEuEikXxxFwtwuih7pJbWxxG3KFbDLFi8eaqohPef3LdjHAZW7BaQG3Jmjj3zVr9Fuwthfv8h",
  "key21": "56gZcXZH3hA1EbWEBw5zWxzwhuaxeWMo8j7dX9LF1XWvhv1QGqqWHJCSKtucLPJhq6XrQWbGBL9ZqnpH4NixrDsT",
  "key22": "4wSXERnBmDHTM1uhzFNAuRsKAwS1fKwWB5z2xAhFrA4wtWQmwTRNA2qKWQJ8PSFEgV3hEGKs6qu4xoyj2sfJihDo",
  "key23": "2P4fNrcJxZWbFCYKigKaLunu6NGfw7oDiMrtx4CaKKUNX5sNRmgtyS455pRsZmMLdLiQrxXjKEyFZ1h7uYYrfwT1",
  "key24": "55odPZYXgLLrzdfRswLiPTdkJQBJB4Dkcy7nnp9mZXgXcELxRCw9mwaLP224qygPA65bUthGyPbhmuhEvMcQ3KPv",
  "key25": "wcPxnfNbsFq9r5FpoRUF78Czp5uq9j8ZpJAu8Bu9C6sFQpWAHDDGYWoFGA3kpGTFKcFYxug2bAtVJrf6YZpYGJr",
  "key26": "5TpSL3xS4JjVVG64ezBK2jxvi6rsEFZSGFzL8JWZiaYemqP6SHgiqmyUdeYdxPH3GLNwD9mEEevPui58f87dnz59",
  "key27": "x1izqyw3pGhGHfZLX1SZu3Q4XHQiipimH1Ex1wpbZkYgh5fGdZkjZ6PuBcEfbwjguWZnWNttfPC5Sn8nNW5U66M"
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
