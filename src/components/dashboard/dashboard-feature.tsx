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
    "3DXDvuxN4Wcdo5GPhx1HqifL7FDYUXrDWtQL9emC5DcWZV2tSogKeSfwxCVFgYVwUmTmUTec6Dg9gkNhMFDJNhFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WtSSsM8ftwPSwf3eexbUjR8xhfxKdWMrjVLbc1tbpkw5Xa9k6XjCmzDMPWpJXATodZgQrwWVqTExYftxadz8hpL",
  "key1": "64SEHD6vvqJhBUL68v6Ax2wZq4E1HrCQo5BL8sDUFH1zmVTzMKZPcBuwZRiPqqqY2mFdYPwWrKfLLxfv35HjMjmy",
  "key2": "3ryQRMEHHC7jSaofCaqDcTPvyUhxx6yNcXQDhCL5o1T8U8NtobsGZf1E9gw9y8gcABDveTPs23nGS9TzRdEMiFZ1",
  "key3": "T8AWsindJaw63RskoNo2efm5AQcWjahHom6mJMQDxtsHstNFmZduhGzR5b7zLHfEhBjEUDHBbjF57k9TiMkQjDX",
  "key4": "3hkEqiFUJ63WUzqosAxn41MZsNWGdcYtqsyYun1VS2jnRQQmrq7azoFRtzz6kEN2EmhCbitAp9kjm7k7834G8UiG",
  "key5": "4TPBpbJa5skTppKYz2f486HgmgqRcvWhkbKDirRHSDPrc4Ks8fPvW2hH7PSTAL9Umtjg3PETMYJESV5jDj1fPAka",
  "key6": "T1TqWDGf6JrdJYdvQFsH69vuAj1TdCiisSFUPJmK4uZ11rMgEgLh8fTNzon2GiEbAiWLGBX8F8KTbTC9shVV4oa",
  "key7": "feaNNN9taeWe3PWHRa1pBhCFooSpjFhkpPBorhjLkZ5CNhEvgbcrNun9sfpqawT6RxBHxiP2MRcrSF4gnn6wjEZ",
  "key8": "3GEJRATmBphWTG4ZQFaXAnt4g2jxWtoLNUMX49WVZuXtxVeyt5ZEU1A4iSSKmKiLTF18ngkN11UtAVuahnW9ENR3",
  "key9": "2TPPJ22o7d5ugezvKqHq9SwdXFM8ebAd8gUsmY4zPDjqhNfp8cM3icn1xJJkFaWKnXireHHMmGE9im4VNKw8bKBr",
  "key10": "5RTP2Uv7BY5dSGBEk6USPxV4dg8ZMk7aTbMCF8C149XYZYXRLLXdKGYkHmWNJjPBrdZSWkrcfDSkgnhyN2aMbuiy",
  "key11": "43Gt83d5wig1vRRZwSbadqUHtaiVmffTR57u72YvpRjY6gqDFmhXxkV3249SevZKpReoRLitgDBB5wM4ZcLpBV3Q",
  "key12": "5baESzFAjhKtKkgYkZuvgzsBKTmXVmLpWyBnP9KasWuUc7HLbJwMuxM4Dmziq4wQqxnGHim95cBdBrKaFJhxiLHq",
  "key13": "piK9YeEFgNwpgSqvbpTLJjGsFXRoPJ73yqicCjKxnbwQWA3vvFYwEXodq7867rEXHjSb8pBXeUHgKD5z1LJEkAW",
  "key14": "51hod8nYo8sVHnG3AKxxGp6zQin7UQMCe6R19yQv1hqwsw1nL3mC9wJXDjWiLByYmT9Nuo4SRKQs8fgqicQvZQjS",
  "key15": "2sWCijtNTxoqJoW4fWDDG9MxVovHNrYkLpRse5JqjAsvvVvxdfkdrBSU1bRFouT4v3vLTiDyo3u6KEVUFRPALP14",
  "key16": "3D4RuHdQejRDnNLdtk6cKmvM33U6QpU2h4HXJ4r8FgQLxYYMA5bp3grDE2mZEQfAB7Gq8CuYTD6B3u1rv8c9A5G3",
  "key17": "3j5ja7JbqfLSBNhptUvS2b4MiWVJyVSS5PT1bb6KkGarZjxnZ8AZHzeQTq3mhRDu6NRbJES1WsY5CqfRfjGSosMF",
  "key18": "5r1D4Ca6b2QE3bQcR9acobZyUsK9zH83sBvVEUgLNxXjKjWy1zbVzmikfLcX72JqCh1KYhv2UPNR4K3TbciwvxE1",
  "key19": "3R2anqZHoHSKHEapX1yhAoxCDyc2gmRQgbZBdHayfnjo1PbA5N73ksqbGx6tcyoe18maHAdHRrfzwedwiB5PuPC6",
  "key20": "3kQUpFFq3zaCRceyv2pGjpFCqDj3H9nGf2oMgpcwquSudW6anj3joZBw1BZwAtFLh1xXxXqLRqJrDq7qnTteAGHb",
  "key21": "5zLnMgM1UgY1iiMf67C2XjgsPrBqrK6kVrWwmgLpYRrQQNsxtYye9FfeXZvHUxuD67CoWLTgGMk79V8jiqg4Qve",
  "key22": "5aV6Eti26f1tYVz5w4AvmhvdDjXR6jg8fs6Bof2KJEqzbBgaeVWgvz8q9YLxpsBbJGT2vLqjuFRfigpFrTA1PfFf",
  "key23": "3MpMZJ4EsmC5pHJGgtwazbgh749wqFBAAAXuceAhE5R6yE4QpZ2hFqEbekjmRAv1tMT79rEbccY7vHwV7mgku4Fz",
  "key24": "3mBa88p5yRpRQ3RyULbUawi1zCnCGjKnszxDt7DCkJegTTCZYt95xjgbvA2ZwNt2hCR9WuvAFKqAL17R8RMwsHsM",
  "key25": "4B1jF1PsjuZzkqdfhzKcodzV8NXsdMx3sTtF7HNftDxHrynRxtdmXeNSs5WcbDbx5oHZKcMRZRRDCXPHt9FZGurm",
  "key26": "28Fw1aaBAN5BFqFtoR3CFXVM6yDJkLCMzuumvr74KavMWA7g7CkYGZfGVAUhj3qHwu2a744oawGzW5aNvDHeWW3r",
  "key27": "5VYDjZbV8BM2WwviynMzUp1S2dgJYVTPNCTmw9L1sa6VWHvvJEDkRGvpGE6R8GEt2N1axXXV5nps4LMYJpKsiCYH",
  "key28": "5U5SeDQAE7TdxuH1VZ22LuRDojQDeoHtZZrBwkrco9MKRw4LmjFjczjHD8gHo2QyXu9PSs6mGtdzzoGfTfTRjbwm",
  "key29": "2HGBNNUiV8JMEhNRYCjoZcaNdXbR3LEbGnhriLsheFqBXqLZ7ZXDXFVNtEUoZtJpmv4VjYGJYkXAShtX8yFkrKwD",
  "key30": "66s6SJsXz7cQaxgwDEqpDENhSghEcXVzcTvDTTpxPZ67XCB1paJBNHTvpudyCNDwUdmSo1HEWXYwVxpdYfApHY1q",
  "key31": "z7fx8qpQKs1ZFJQjQHvxBiAsBiz1rxJ7RXV2PfvWNJtoT5Qes7SWCxnQo7tbxooxFdqVU59okCCF3BwiMKxDKyc"
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
