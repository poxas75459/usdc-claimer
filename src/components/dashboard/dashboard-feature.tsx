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
    "3BKG69oGEmce6mzS22jQydHW7YRjs16v4kPqjG66TpX1xijkXYiYHwzLpocEZ2wUBdLpaPMJu4aSneGwqU7DT3Pq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yakG8NWnRHjS64sm5quF2HjRhQTzuKqzkhoYyuxtxpkzHQ7DrezoxczeRhxoEencTau9M7MnFr7WLq4EXDpApLK",
  "key1": "2JfBiRVeFxg5dejmfNDkLBHkG1Y1tRbZeVA1Z71R7FwjGvGKenggr7pUNu2iVHBjx2JKaGQuKAQ9MXwUjCg1BqUV",
  "key2": "3SFCwdPwXS8wt6ScZ3y4xMKwZaRzh7Lo5CoMUrjtFvYzWeogFP5A1d9aDAYu78PEa7QkdxMX7uKcgbYnJi9im8G4",
  "key3": "2GbjXHyAxVtYo6YNhoQLhA8hKqwtzK5anQyHYpMFtkjj2ANerTqpjPejWgqXjAWqMs8vyfrSx1NxhvjXJVweUfnt",
  "key4": "3zCgwHDUTyATXh6oXoTTGBAirjJzBzsEZdpbvGCStkPRzT3xsJBjLFtoaxebvu9CepR2YbuRhHjxpdd1tRuWMD4y",
  "key5": "3LqRPneqLeDEH1NVNCcS9THyw1k9UypViZCybKpQuc6mtz5pfFpQZyVSA9i4PJgXqeVVdoRfJ8v67B3XCuBVbEz8",
  "key6": "3vLCdB2fxUnes348vUgRfNV1n8Bnk3Y9PwQHfVkHMUnuyCRqJroVMTbgHoL3NM4299vBYeJ2kQyXxjoHcNEtrh9C",
  "key7": "8mD8kyD4uJvtfMVMEaqk3CzhRaX3obQvWNsZAqf4TqKzLJGSpMfY2uxsYwywj873rF4cvrkLpyqPfK18rQhPuzt",
  "key8": "44JsyUYoDKkk2xnKK12CfdeSpJEREeWr1Hm8dMKSZ1yujrjHwHMPogCwCpRyPNUCzjoDEqQhWiEM4PEFA1qUEye6",
  "key9": "4mVhSobeB6RSUvcbQuq5woWTc3CkxNLMqq7Hpj89om865PJusBTCQaSSt98v9bR7o6g1HhHwuUZre2YtSRuZGfVD",
  "key10": "2tCBAycS8FJCTvw2H2mjzk7bS5AKFssXPgMpuSTA8pKE1ut4XMzc3yCqUVgaSMf6n4sKkpwBDELyFXSkXBD5gdLY",
  "key11": "3iewnp1ezKcjAoorp7tPSwGsH2uCGXPui2iyE4pD2Z695ssA7PwF9B6cemgPhy74nJm7TPZcWUR4dWuvo3tvQZ43",
  "key12": "4Ujy7KdGnyYJgvj9D8wARk9RXEDEGWabyBELfYkZsRnikw6yb1ktarx6fiT1kd8kX5UavxZQN99DY2pbyzVxbbVk",
  "key13": "4S9KABedfLuEjzXNt9NNa1bLeDmWwRVMp2FZ3stwjb2qdjwAzYGhEzavJNX9MmUx8PGcYvGraZX2eWzqboMNFh2k",
  "key14": "47sWrvra76a1qePoaUYQmJqre8kmjK6Q4FwJpxHLV7HLbA1vvoLAqCqy5B2gXM3azYhNNtUBu4kmXjdYWc2u9Z4X",
  "key15": "3WdRpbVxFdStwim4mzRRKLqFWrdZgTqLs1tUadJcCpLaLariNU5AZow88Yb4F3os6Jw98op64VQZBzzzh4UDZBr",
  "key16": "5TcXNujaLqCDSkypPULy4GpN74pZJ5L1DHVHmDTvWzbddzGsc6fr3ZNaLVyePcnThq7msQ2FEg1D9jyZN9ddxswJ",
  "key17": "24o9yh2icK1DTQqqiYQei47vyqRmSTSAFdn3y1Pmktp8VEkxp5tthnpK9Nh8Ryh69yEqV6iyGjcG8SyjrkGfCZEg",
  "key18": "5eSS2hApKkkJHj1K3phK6VNsGbamZo8EmbsAYa69ZY2QYg5ZWDaFWWwr2T2uwdsHAVBYE5sbVo5sEQGyP19NspjY",
  "key19": "3srP1Hsdee62yx2vhbUz1PFRBARpj9WNpfJdAJrjFpD3B9uXPJe9XPhVzyrf41q4K3Gxp8qwRQxWE8AYPBbFBNzB",
  "key20": "mkW1rvYom3qJtdxwcAgHVUEaPP5Mzf6wcp9cgpjLM7dhwtSKfGLjQw7MEpfnQcMJ9bqpYxYAW8cKzZTvcBrChSu",
  "key21": "4amvPi9EaBrKtRQp4Rk1g8Jv9ka5x2m6tWLj6gAhSLQ3xbP3jquKtM5AyFgkHzZKj4mtajsUdYPJTg7EPnPUnqBy",
  "key22": "4rk2Uyqc84yTrJH4Ve2fgwJvAdQJCRwdMsUa9Y2uKBx4cS3SMc2vGHuhEGhfagbcYmrG9uy1u5csnnmhgwQUhPzy",
  "key23": "2y1ubgzykyvZkP86qD9Do8bP3Hw7ZKk8uE4TrHGJVTEwAgqFhXCooiGJxTaX6KSRWTjEgkXDap3Dx4vELMeFLDP6",
  "key24": "5Hucw67UmL1FVYiBZMpidMHZsrCQyRrQNgBdJzbcgjCkxg2kus362LexJzZ4pyyFFRKxoP5neTg7DREowrHDRb6L"
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
