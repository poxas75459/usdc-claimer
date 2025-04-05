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
    "5BHgX8ZhGDhATiYmaSfV2XiJ3ynZWYDH4Z9uCNvdE3DH4ArSKRT4VohW9rErMF9Yq3QASpLVN4V6QKgUZX9yLPmX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FiHgSQiXGBw2VFis7dVjn9PQDTyHyU68esg1f6rhgZCkbD7U3jbS5JCDr4JuoUV4NVLrt4mYVNr9wwi6fMM5sxe",
  "key1": "2XtytUUHeiL63ehxcFcGEs5AcrHbJyipwfPv47MHqNAWhvamrnzqF9CbwWTn7dqXf35e52K1TumDHoRA4sk9yYGD",
  "key2": "4JvoWGhMRkzowwUh1BSz7wy1mmssUJdZ2u2caH9MK3Km5PrExqfzRGyHMFRFWG7czSkiE3gjEsZNJ8Q2taxtZ3pi",
  "key3": "2Xf96C2ha5ad47E5vpByxCWdkr4VCUfdwcGmrNTnokTVXMbcbP8LvvG9JEZUcX1D96Tsmyk1hbgpTWGyQKKLVRsk",
  "key4": "3ddS8Up881HD2YtiwcDSffsYthRhjcSDnNacZNES4ihVtDmkTMjhA6U1J6U4UCKkuJPyMqnJcT7xEGtMgSuY7L7h",
  "key5": "2QCvQLZiNzAS3pGXM1aLWnaKqc61mB6HH2rtpyQeKJxAtDU5fmEXVg94LAkWjAo6Q2A9jJ9BsC8L4eHLWBWuPmxD",
  "key6": "26K3YHGRT7ihBUTxk7SFbhCDTM3N4KkYMWoVCKJ6envKfWz1SmsJkutP3f2rcraH9ixu7P6WrgBNfYKZbgAiM5cu",
  "key7": "5obFLt4NWUzjpkDFNgyyiuAv9D5m8Psc5RNjZG2Fd5JHaXsSUcqXCfNmJjGKB33mUDe4M2LRhUnEJ2GbgtetYttr",
  "key8": "2R85JcKi7NGiAWUVpGjebfPjRDHPRT2JXFjDAHw7pM4jAWWuFJz7jeSJNfh3LEoi3coJbAKK48JLdACaYnTuVZB5",
  "key9": "4FL4zc9Mq5BmsguCFqZnP9AcVDkUjV1k5tWVHhCxq1KTNDPSNUUXcDREPNJfrWrrLHiRFbsezgJK9rtDBPkSGzpS",
  "key10": "2Nykag9icZ6JhUvSGDt3Gh9wdKUuUBLmr3D3mbXcMgzwFMPqaR6jk2yXVMjx4Go5jNhVim95mYYtq2UsNYvLuagj",
  "key11": "56vjhE2v2e3goTgvjWBDHq773whjvU4UwehSsCDuFp5coq4w5ye2Lb8KQNUTzPAnkZ21rNxSRRB5a6TGZwheV7od",
  "key12": "55TQuEotmDAJcg81KVxwhCFZCfvdLsz3Z8EwSjuKorizQLaGBAx4zphzh7azGz6YUzQZJgTu6mFyJnk1bHKGzwYw",
  "key13": "5fZQVTuqjmoCadug5quTYbr3MaqNuhFQhhYjX7xeZdH7heokPxYoDMjmhPDVTuJGXUkhJwZDJmKgpMZrfKhJ7cCj",
  "key14": "UUxqtGx6FsdgzUwtc7r9D6W9s9zdrXkDZGuU5gMYBKcozBQWWbCnPNhA97WsaBNsmbG3PYceCQVbE889AewSeak",
  "key15": "msGWKnE5vBw32fQBa9ejw5TiMCeNqZyeKfQiWKUmwHmiqAEENppi4orVQj8yvKSGdmTrjvS53PQCLzkkuu9Gkfi",
  "key16": "4oqzyWCsjLqkUAfGL3pfRp2cNw85CXsQ5asoXzxDq12YJVkLL96jpEftwh7dDFspPfAp32A5z9xGU82zVYPAJp7s",
  "key17": "5peMj8HbzPL8ngsoH16gJGRKRmoeLsMVWnYYd7y3tavEF1E9m9uJjGXp1dfys5VHNBEhbbuCzE4g9ZEGjTCBb4Px",
  "key18": "5EpNohTdXtFRbTr1LgD5i9Gq4CTZrJLvDBW1r6zMN7qD4Z5KsaA9QY6Hv7ojUixuSVaEqCwFLRbgguwwz7M7tLWg",
  "key19": "3neUyLmL8UXpforia6tqdrkEMoMXuAZrYyC9S6o2P3SjAPaAu4ycWXSZoFRUqSv9DfaG7SVzBv9VPWJV1S7hVQ5b",
  "key20": "A85TiSzcQeQUk9zxQLwKXjqaSH2qfEeM5KqmjgnVyskfDYkvwmg1V6tQw65zxvcf6NGmhJNvTmr3mWwFQBEVQdk",
  "key21": "2MezSi8ynFDUTiBAVNBd5697aCx6S1ex5ma9mmhEFSGrRXDfEqpmBybAWnyspNVhBbWwoQdivDt9grbEdCBwZ595",
  "key22": "4f2xR13ziCUZ5sUMfDcqPWvkKRAsKDkE3NzFcHFpXWJP3vSDEGxj6QvKYtjEryVvPNWCeYuey6mr6BTYzL7zef79",
  "key23": "2MNgeXHEG1t9NcGAMhomM8d7umGsyxwwVZ66hiEjiG3q4a9KcRpFShzVKS4vDs8BRfndaDCgurG5tH6cxRB7VMux",
  "key24": "2TgTmboXdSpuPTCwDGTeX2AVh1CPBdtSAoUaNaUb7qPiVQX8rkpBFdHmS7B82XHdqXB6hgXv7CMfe5LjQ5aTZ7sG"
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
