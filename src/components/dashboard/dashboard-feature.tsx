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
    "4GkF765mhtpWHAorSfCNNqoEjxyp9Qs5z321Za5N5ypc1hPXNSLNWsDAarT1nzVkE47SgigNYog5R4ynQ7zUS8pW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VZZY14Nn8aF65NajuT44SRfcLtvKcZDad3oSnzEG4Aicc7KoRXphg6SEdLpAChjaoc8n7gKi5qZHWWvTe4PDjsa",
  "key1": "47mt2qdXQ9DiemVfqscEMU7iKiKgxD8c2Hxs12dxPNDzcfsKYHMVa3dNPN1zzah3P7BDd4KvTRVEYJQSXmsKhvJ2",
  "key2": "3T3Y6NRjVPWQHiYN5mnZBDfzQ2azZm9tHRNXko48DztSTFGcVE6e5e6LDBBGw6KjZpkQnaENkCTFbvTRYf9Avbm7",
  "key3": "us2BfZhsCA9txaA2bNXEnBnr1n9KQ7ujm9V6ZV2PYp8FJ6yAkJ1oRnNE1tWFPv8KZrjJKKmdi9xzRUvsLdcZVLK",
  "key4": "zZxPW99CF4U3FdXryjMVQG5SSoFDnapZ6UbtzgHkBfuYXcu4jNDSxR8mmAvvajkWSSU5KBU1fD6Hptv3iqSHkcA",
  "key5": "4e8XqipBwaFUDZESzVLhkvjHsAyc4CNk1G6WEhocp1Xc5fnCmfyQnqW7qh9wTPKf1dqHKMkJJS68EBqa3pMu51Ai",
  "key6": "Szx7AaVphfKkezGxGiAwCNLzeLLD9oLKa4f4UUo92e5zBUkRPAzRwhkvNG9wayhDi17wgiHFkHM152ikrM59EKX",
  "key7": "5ScQC5BjdgF8jjKTvNdKDSLMcgKhaUf9oM6Ge11SGB7MVniFUBKaaLxYh6pY76JQrU6Gja64CxzEyk4PGTCoef2m",
  "key8": "2HyGzwv7NQVJVeH7uSctfEwBmzmvzd3HGAVdFWX9NiUcZU41MsftCabWLfYWqscrYVrUxNt3d1yzzYo1hD9UZMem",
  "key9": "4jZE3jN2QoQPWi4bRM6NZLZUc8uZ8kTSRyKJ6DBPyLxahpi3GSVu7XMmL1VW11fnB1Yo7X3LXasJx9YTcDNt5kUs",
  "key10": "21QzTuUpSJnp9W2NS17sFUVV5U659pQVu6Se9TWnEFagVbrNDfoDjUtWgz8y4ckitxvpvTTzmsvtaadPkcesmZsb",
  "key11": "5DgDXBjCm3G4GaoQBWYEfbEx8LofU1qyW4VKr7kN9ZzLiwhsRD5U3caVKgDqKJUHbsiWf5hiZvmWGwnvPveh6UTy",
  "key12": "4Hi4fyT4echEZqJ4MpHHSTbNvsHJ2oXyiM8cceWttCt1uSvy64PUqiGwTeUHt6VwqP9FQArpJ9zWfopDURPPaMFQ",
  "key13": "4kYGQtM3cViCd8hnmFCw1cUFDVXWViLfBaK1VvJ4V7pYwd6D2CTv31BWcbe3Yb882oYDEvbXdY8SFRhmxbSxGdme",
  "key14": "67aWBmn1iQWcAUYKbWtEz2VGXLwFZ3hQqAUBtSVcrmvWAv8zpp7Ru7hPqHV68DLK8eJqfxKP4ikuUY9TL4t7822d",
  "key15": "3ordFJkDQZVwgwq3EAAcB8RumFfgZQLSv5jFH4YWCsCnyEkwarRtfkvbCkWSz64wfdBKPhuLLmXXai72mjXVWptg",
  "key16": "3jbPJHjACBhAkJnKhKFnyXy9H4dz2vL5aLxRkuSFVqgeC5ZSmrnG9WJo1FoLAEeGyCoXu1dR6pqWY2m9ZEvv8caQ",
  "key17": "5JBYJmc3QU3AHwkupNbfkpcstHJ8SBKeJyHCx1dfx7DZCsZpYYeL2mBZD2qswd7GE8kHpS2BZSicjMYrBdP9gWq3",
  "key18": "aMVdXM6hxgety2JZsvw2bPiuZRomFSuTXmvFH8Na2NfNBz4EuWtyhEyHBL19t664rbjbMEoUF3316msfJVtjmxo",
  "key19": "Mfg6FH1XMiJeswJ5QYDVWk5J49XsHHQGBEHrvbzUASgnq2xUisCxeM6Gt8zzzdZRwnBgV1qehfUqG9jikMw7iV8",
  "key20": "3qbwmrsamBpKVFJAE3hSa6GX9gUeuc8VF7QRQrxdu5pVPbocmg1d54imvrvGpG2GT9GsQ96TGwxqbp9Pb5Qggnhk",
  "key21": "4AGpAiaPUktedzuxws1dC9GmNYk7mqsx5oevaoJ97jgk5P8TPHPwz7TK6rkhFVfXk3EHJGKM5ktxW3vyq5KRtTeU",
  "key22": "dVvWsDBwPcuNsFdAJfYDYXndJERY3eZVUzgSahDq7oK5vDx52g62nSmayFSMY4qFhxxdSDisLQxs61vYoa6TXzN",
  "key23": "4gzk1hQhbVF7ksw1F16xQLHEaJgLFbU8cnz6gFmeNv3ne1wp3LdXyojDBWw9dR45UAXtPiiEGxKxf5PipAEY8gog",
  "key24": "5PimfscDf2NygMXQ9ad857cFm6zrP7wB8EocAJkTxWZza1vXDzw4SEWe62K6SDbSzakzab1MQ3EUfcCWPcgjsQkU",
  "key25": "2zoubLJuYZjLpi1VErACN9YwbDKTcEGDP97GzAeevk2naLuXZYPqvufgfa8qbxeKEJNzGRzZthK1SeqxLdm7iEYw",
  "key26": "TXgPhZHavGzwwKvXExkBiw8Z8Jk1kx5YJuSDPNjxRrSNQoaB6HmG5CzjTgZ7J4jnycMvbE3z9HpRr5reNBnCfBV",
  "key27": "MUpy4MwdF7Ld3P6Y31iFy2RqjZGFZGCckatAdjbrFPDuE3tiK3LcCttNQQF3DtJ43wjuXU7RTT29xpQWtoiyVha"
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
