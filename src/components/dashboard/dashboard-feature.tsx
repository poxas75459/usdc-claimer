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
    "4udown2KwnWxEQznKtuRCBM8wRJKSRkHuzN83Sm9udQ5RGwrGkJ4Tu4ruBjWPBVt1weap4kSu59BQ1UKjXt9ExNR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rvQ9aS2w6GdJdJBFVJHMt5vS22c6zdxTHuUWDSarmD294egH2UwNGmqWgeyPiWofgM7BHVMAgozCLcBN9mGjkap",
  "key1": "3VkP4UEkyuJ8Nydpjq2hx3qZgoBnV33M78r9v4UUQY7uULeaGYFFM9iq9cLde1qFm9iWbGN34h7f8KBKSChLCcFa",
  "key2": "67dy3WLsaAVRSyHWRfbLidbUYaV9yaV6KhTRaXHzUUEbUuaRdtF9u4YhrBvTAP7fkkBzHew7Pm18AvFavy69p9nG",
  "key3": "2cU1hnzKihbch3pfXgKTLndwCX7rJjQ2KX56yf6h1nB9kyEaTMB3ig5YbqrcVkq6dktE76tBSUPCWqPMhhDmCNiW",
  "key4": "5SKN86vzatwN28zUh5kq5rfUAaWWsBwhDKx6QaLxAzA9rmFyVQTicKpnr6RszFcustuEVfNiShfiWqwqYPMb6zxe",
  "key5": "2fgPh35Zt7CgavZyNRfSVLRSAAGjMHqScckwmJEJ13Wwz9rgFkKfNLqbHbGv5MEtwBt4CMEgGQknY3Csh4bpz2wb",
  "key6": "DoeJg54kY886dPxtsmxxZmk1bXCDFgJZjzkucY8FXn4GKF32RodtYKTS8NaRyX3UxZJATZiuCoBswCa7r7eCeik",
  "key7": "3Ez9oFsY8iftA7LERkGB7eEkxmgmr1mLbsbcLY679gf7JXLENn59dV3zHTSV4cm2dgGo7Mb31XeK766yFWc6nNXy",
  "key8": "3DNoNMwd4TdkV6X6z5P6RVCLToDGLRxVzLZ4ZMnzEEXB6XgdwSjTizFPpqQ6JjZaS4Rw6irjZpe81Y2aUedMQqaq",
  "key9": "3oioasw1uKPJgYcVAm4sSJX4nA5Eq23rixE2STRDPjygVUQFqWEUPBEMpuhseDS6qNPMofR6Y3J3GzQRPNaEzCy1",
  "key10": "3zjpBovNQwbB4ofU3EsPRYff4Vka6KSNeKvKUiFg9ToPQvsok2xd4hjmqJAG9PosAzfzBW3pbTSA6HFS8Ng6z1XJ",
  "key11": "2GG3zAWzGUhEndoKr6yDkhWCBwqzJTx2MRhGcU8G8iasivyTjjhnVMr3kcbwWrQbuDU32JufHWRSv8tEpYUa9AVr",
  "key12": "2Vf7KeZJS7dTaPd9oJ16vvPacSkWfXBzRmAKfm9JR8ZScfTbVsB7qADMAVxWDnJf7ZZhbUhAi8LSuyaNLRVT6PF",
  "key13": "2AsmvoZmTWpbL24ie8juNBzrqcA5BKWNyzLVbsTuLtY3cQfNqehJWccQHDZQSCRNeoNzLKZKjG5BRq6Vmu748svy",
  "key14": "5rhwxDktHvYapioZiwpkJLbSjkBo9UYS7A21FXzsXJPDsHYPvfpbQNwxHiRGPM7qhTmVx592rj3vZTWix6395ZjG",
  "key15": "saTR72v9UJQYkW1St4Nmrb1f9DRJdjz1vXsHt9eyyqh82RYyaEiDo6kQk14mFEDi7qnWzvWBG2NnuZiCezTuhux",
  "key16": "rRqYgnjT28DBLT5yQyfV1QzkSK6PCuJyVkCYRnCQ3dLbjo1PwS5bEDrPCS5A6uES6pqyNFiuPbT8sz5qgxsCd5f",
  "key17": "2EAERwWB6mJCMVzKhGFeRe3cxFSLBfb6xetWK6aJ2eimd8a7faXbAAvkJuBHqKpmiXhvE5fzMNatjPxhrC6MAdBJ",
  "key18": "5qHrBH5J2DSgQ6DVx695e9XhVpdy6hvpNriypyT1DCeCVUW7x4vHNq6Sdsdc4xCruwr6d1m4rFkuFFmB5yxUu5na",
  "key19": "4u2UP3YU858kxKkHZxeWq7Jb9tofZ9Gj7fr1PZ9zme8JeM4iXadVLXGKgqFQLMvaoYE3EhhzX2awgSU7ES9UBX2P",
  "key20": "7eLcBAccmKMPqRdG2LhzDQoy5G1EM7zRi7U8UqrMjGnEoUoMTdpcMKTgGYJr8XHvB2vk4yNDo3gkr9Rb427FwEz",
  "key21": "5EJ2TV5QExxGpc1sKqDn1sWSB6qz6UMZumJstiXNw7C6cXW44KjbKFQFTjghrYWyvB3ffA9YWpwaDzKm7UB6PhCD",
  "key22": "2gkmDRYnyV7GoqS47yPfdfXiiJD3uwx5zcHNxwoMCAxjzT8AmNLKZ74sedZHyS9m42f7KspuC7ZC7qitnD9TAeEA",
  "key23": "2rACH3SNnfQHomdSK3rpd9jr1kn3qp5dmmbHeh12qthnX2CAEMr3HRHSz5YWcU1RFFDkXCH21mV7cVEZzEpUJ9rL",
  "key24": "5PRUu1sMM6CVmsHvfTt3GaNSvwNUGoqZu3jd3w4n7X6ToYMgHhEqYLhZAUcvaDT42awGYJxXnzzS1hN2zkWr6WYJ",
  "key25": "eat5jNhv2mNYAnDLQXv4C6GXwnC6cebPT7v8YXaUN2i8tiXcrDxwcjDi7C5opqQ63amBJM9tWQV75gUEUwxvU1p"
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
