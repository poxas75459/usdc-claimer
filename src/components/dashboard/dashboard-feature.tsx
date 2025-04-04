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
    "4RET72HEzRmLPjtbgQr3NPaLhYYKVELa974djzYCKTMipJro1TB31PrZRf9Lh9uSDsq5CeD6YjN1KNj76rEtUbXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BGgd2NYVY8kwrQ43ATUM2D8qC2jQ2HPrysAEhb1rfdjzPwzrXFqrRh5QM4u7zyMuGSjAwxj9iGMy5YnysFs7pak",
  "key1": "RS8miaRFS77gckMHSUTzTch8Ys3EBB33FLEkwCUgv7xsHXdgCpWdMpDm7nXadQL6ZzEdoXiKJEoQr64Fwrvp8ED",
  "key2": "Ye211T4hZFhME6WPmRCy4voUxEyC1HCoWksu9wXE8BM2BEr6NChJPctcsYvQmtAiQu3tSbGXosfZeCa8BiwKpSA",
  "key3": "3B7dtPchLtZKABakLSHgDRsWL8Pmxipw9uWc7rzrsUPYU4GCerP2XUkxK7wRo1NyN8Y9qz9Q4KDW82ZRDzLc4eyp",
  "key4": "dH44EjUhBwp24iFKsSVKn1qKbkBFjWt2ZcNVR9NA9Kgy2RwaTpU5nW5EnfoVjbTvtQY7eFgxdoGDZhvDW1pSfgU",
  "key5": "CTEccFmwxVnM8mHaZkkPf66x6p6f9iy3dUUchBpfVVMs3vhRuLUBgBwjKoNiUvEzz5cF1xNFKuKzuu8qkjre5at",
  "key6": "54QtkfSef33Qvxdhxr9sc1bXy7TsUTaUGtWLonoKUxiLUAT5PS5TZhz5uXrwnJfASajpwWHU6eP3jE2NubjCJrVG",
  "key7": "5FhnAc5t3fioxVC3BoyQUE73nLe5GdkQVgdJRXeUhgh8JFeUxNNLQeYv7v9fqBWZbVbz5QQKUnAcEVw7angFqC7n",
  "key8": "4AjE5iCKf4qVophGeBBfQxU3eeq56pEM88c815YbCDb7ZPu4xj4TD5r3GUGRejxh1V25ohPS3heTdPXVgyewgC8m",
  "key9": "5WoFvJMkV8c7E5Y4Dk6AMVVNEedVrKRvV6yRxpA8yrX2MZCp1nSmKDKtyHQFvw7KJbyWEQxjBwH8ckRcm3u4hZyX",
  "key10": "4EBJex1Nm5NvKb2uLLuQ8yXff7MKf98UpMEdQDohFNQYvDYweybWAUz43Sq6M1Q5h6hKrw3gXjbELeBpEbmA7orc",
  "key11": "3coZr4VuojrT2DBfoiEWABZHWSFSnASHZmjPvvAPiqfnQm7Ae1HsYCuncrpjZzHGVPvGDpDXKpXgwdiz1RKhnu4c",
  "key12": "2VqcKidg23jLATdFE8bWLZv9SaRkqzf95oy9aaUyYHWbdEMGwh2h254h6NCLB8ret4eb4vAY7fzpSKoHZnZvQRg6",
  "key13": "4rJJCbc12FTty7Lfra9pf63HyAgENbcYE8jdL3CsTcsqJJi3vKhdstwzy4MS7zjqsNE29tzXdJS9E1kk7eovkaFS",
  "key14": "4xdD6nKBzkMUnosv4qYv1KAd1Tytafq1cqYi8UMqhhYvFRsBeARCV6U76x26dUTQ5PE1KCn1E5V7WLYAfMnNZbie",
  "key15": "4ZBn1ogHdmfeeiwa2hFn6rLmKYnkKL6hopFSmpNDQuyfQDrsnVdiFj5RsB7HnYtJnM58SqLd2ZME7kNL1nF1XHNF",
  "key16": "2cpQrmgu4bWZKSSLxrLMzHzwaVgsdCcFtzWrLoeeUuJAxA8FJYA5gQ9zVHcPkSkmQNQpKXida7xcFVjjZNF93m4h",
  "key17": "5WXXYRMv5AEsE7avTrDso2HzSjisnMGEH5WLRJyRo7UyjYJAYovY9Y3dt5Eaut2NXYTQv4n2XDoDbKqkgLpocPet",
  "key18": "VCfxSyBwuihxVnkEfUmMf46sc1rSi8PuMxkbwyeEbx1EXpYhMoV9potkLmhEnxK8nMNTFJ3tpxt56imqmr3WyBU",
  "key19": "3c2K7cDgfKi94inDRokLiZm7sLrx85MqdnhTG49ctyyJn1mpHcUbn6QoqXR9KkDTHzvTiW9HS3kdqdpxAHSnD4WB",
  "key20": "2qi5oc8XqpQ1WzAU6JzmL7Sgr417boi89S4xPFXF3KypJuBxyqgGxwMZg1xasK9XVSix47PSBNwKU5kW3BgPiz4p",
  "key21": "42977snReLbPBiNsP8iYHyahN2YwqA9ziUdYANRc6yDLRsPaxPZkZumsBrqoz45eEPZZfd4w3ERaUZw4NujBqWY",
  "key22": "5gr9uiDEYk5evESDcWTanwq6sBxGwNb4TnqXCfqyPBEBMyqyVvD49xErYYYdLJmJF9imNkpN9MFyJmLcLWYDWUBq",
  "key23": "2S8dVAe5FLCRFsESeC236hYixANEgvfdQuuyL3o7pHeDR13XVPtzrejM8dJYj4otp9obtSxYwAHjzVhXzvehrf7s",
  "key24": "RdGajVQCEWVj3rJzxVrQYv2yzoQ8zk8nLDuiJw1sPcwZRw26eGQLLnchrrw2FbH7jFiYRKM2KmNj7Cnk2ks3ehv",
  "key25": "4icaUEZCr4uDYPLXBDZgcHERn1ZpwkAtQvAuVJMbyLaENjv1PAzkgWNc2s3WJHkSdQGpnWiniyKjHzMNAJEYLb7R",
  "key26": "5imnnXomaFqf1BEN5MMc7FyVhqwNB4WmYxJQr6r67XCth2Nd5TXYrVFLHvZkLBfqj3KngjwWp5uAnALp5GLHgS93",
  "key27": "5fm6Y8ZLFGrHfMEcUoRFzkkweewmtcFysBYCfNHXoZv2LUytwpRMS1hPhy2mTB2hMFu57Fy3wohXYo7yuhroR2wV",
  "key28": "59cSPgZvRJzwvcKoMdp6RSkiE3fFKmzJm1U6HccJmBPq8WvAt1xFpkE8SfZ3cQd8WhPaxKiUNhSsc5wQ396DFupw"
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
