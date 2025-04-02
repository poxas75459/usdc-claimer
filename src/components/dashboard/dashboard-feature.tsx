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
    "2e46E56wJ7o7auVBAdoZ3KHBuPUurSTJufzBTL1gtjrEA9RK592sL4rZeRNq53Szd7CZPM6t7AUF8JSMeTyNyCgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F5kHDdKxp2e8YDxWNk1SPinxA75ri28qSDuRooGfsgpG17SPNFw5kmNgVnoP73TNYVF9yL49NQi6i9wewyaqohV",
  "key1": "4wYmsjHXUM1G6gUfoVaa1DmfSRCB6bgD9MRKshcQce1ne74aECA9dZx2igx5JAgRZTq32ocSrRbBpVyux7ZoEagL",
  "key2": "DfayeMtKLMcqA1Lq2sKr1XGs9th9zACiguXP7bJYatzzDjKnezLSTU9Hs64tm8ioMtvG3jAMhXKu4RMJ794U3pC",
  "key3": "2qska7aeheh85gDH1YhWQx7tCZjfAH4h8vfRXeHfe4CV7dy8cVz6KF7KULEbgCYKk3ZU38QCeMQVhUfaZzT3NsXi",
  "key4": "5NakuqRk2HgNweMKXqndNKynC3KuVudu1Poc7PcQzQwnrdd5bwBhiijtoS75LUArqkKJiQtv2aTkVECf7T4PUQup",
  "key5": "5DqCc4bEqaAcvK75Gh9arH6hXiVmtasfEKo6uQcz6bth4oAx9XkuJuUM4TfHFo9cBeewt6C4viMRMYY6Z2U2Hc2Z",
  "key6": "5JkN5an5sVB3mzWvUX5UqrSPgJj5guv43ZfvUmSPsgDy1v1xtVEn5bfmLQuyznHSbReabCf3wqnDSKtPn6oneh9S",
  "key7": "mXyLJieyenz48fL52hJ3pCboj5j8Cfrb9QE4ucfdGoT7QHoW67AmvE5mxtC3owRiWX6bfZ1dwZrY5FpZgNK8A5S",
  "key8": "2K8fauHaTQf1GABTda2fEjMQstjvXgr82variP6kRFGZN27waAepGZDCkC3uhMhdWNF3yi6NhJbECCXHt7uyDMmH",
  "key9": "LCAW7rjJtSs42xMfrjj45oTctEkpFKoGnVNRZHPtQk7EFcGS9AS2jnDc3CSeWCKzWxgQWAfYyMBt3zYvWyJkXXh",
  "key10": "2FJFAisLbCcozMexcXwAifeBimqoVb1d9QDEJLZZMteVjvpFWH7LrakNESkrjh92x8hav9dKeWgQ9hXV3Kqp8i1g",
  "key11": "57Lp9TTGToJKRbzJ9pejAsHxQtbe1DUSWV1oQhnmv2GJqa4GeW9hcNbm7jfkimv38EvP7FvrpxzKYTzLxJXxE4oq",
  "key12": "id8ckpzUnrF12NQC3cpfQyc9dVGPZe5wjvUbpbiLf5gAJit72gjycHF6Q1i88v7xHBJWqHK3gQYvb7sTShK98T2",
  "key13": "2B3fSokwuTTg3WfEJppGDak8j13EvyoJXWTo3dtCbUWKsK7sBVCSaKALBAynjxbiowyJurLf3bXgjvk6FtPzUTik",
  "key14": "2ZX8XhqnGZYsnR5sHu3sdp7zahtSNXis32zwBV3oJ8utqMy2gUiQv71dS2XpK9nyTQHHfGibZBUvBaw5PsN5Zd82",
  "key15": "4aaFCw4d38LcXPij4xVnCWaS5FBqUehpSSBbqMn2CtBrXqJWTJTaDoN4nr951RWKVoWCkyoe22i5QL5M8B4BKaD3",
  "key16": "2h45yEoaU8wHc9PJrMRAaGs4EW6LTuUgvtgU1KSZBnWebCM3MaoXV7nH1XBkJSxvtebfoRL2NGJB94V9ViUfp6GM",
  "key17": "5ddAJ4Tic8paQrUNKgdDcnXWbhFF1g49HjedJ7Rp5ddPJsKEej9jWtnf6xd41vvkhyxeEW7mDCrgKGKe7UurrfPi",
  "key18": "LQoqqXCoLaaeKo8dVLuxvDJiBBb9WX4uuvHEKE355zPdpMZZVNDGTxptrioFpAuJtpXtjzwMTaPyxcrPPCkSLsH",
  "key19": "5D43Ddz9UbpJ8dZ3puDn3AfFgwRYAWquNMaX9YiMjYBbdy4NVLxHhBCDG4HyJ1FnT7XULuZQp2XZrhebbJvupGXV",
  "key20": "KZBmmjzUowsS2Zrev6XMLxvpeCdRsAf8z6aNoBTknoa5tBoZ32H4XujuqmBjy343bcUjDzLBpMRSVz3ZGaGd2mo",
  "key21": "VaQuBpp5rsHAj62cbLG4Z6Hed5h8vaowHmzeskGVtZf6xswz8b9fhCgurSySSqo5g5zxE4zGsuVmBng7hkTut4y",
  "key22": "gxEWzQKX4CmiVvMYnw8Hm2UHpPhV63CgjrY9f9Xho6YXYYGLGTk2xvkKd7nwRzptNjY3kPmZyoQZZmo52795kM5",
  "key23": "3rdZ1TSZkjjpu5p1xJsbKxNuXVAoFdPywe2x4BNboPiMF9sxFq6o9thJrYBwXZ4H5EJ6qAPmBHqmkBkxXEih7Hgu",
  "key24": "5nUGfkzCxffgLXFeYxDyAPhg2RHhCMeBB6VXHgjQDURmHMAfwMo1KszytNobu8aJCCwWd5Fd4LeAhH7do6UaXE6M",
  "key25": "53EAixZeKCgs4W6KzV2K4eMZD8eJWCL8E135pmuKUuh3aVgb8QSA67oRFkNtA8McTbix4kKvmZGvSHc5K82QVb3z",
  "key26": "3hnZUKg9Y6cAP2rN3pSGb1CE3CYTeDmfK5U1Dpar72pJQ36BJgwLBh3hQWc94XX5bLB48WbFyGCV3v2jwk25WZiM",
  "key27": "2sRCF3frBAMbQNSrWuWLH99iEPQDWPKtuzByMte4b35oVddWmF8i3tAMKiAn4CvcvHUVrgD2zTQbpqNpHD8gSE7x",
  "key28": "3RJTZfcp6nnh84ejz9VCm7GSZ5F597UAUeP9oty736X6t3C3rnmHz64FGQYV5FLCniy9BfJTA5juQ43a7SwuiQo4",
  "key29": "4VfDn8ZTcQhGH68QD5dPHdctLbhTBt3rrhJS2WNvWk6nRkxQi8c2yqCEND4RQyHNDyEVGVPihdrMD9MbigRLewyN"
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
