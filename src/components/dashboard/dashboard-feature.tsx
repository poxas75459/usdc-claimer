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
    "AJxJ4rruVC2SvQRBjwruxCneQGLjqVQQVgQASKL475xLGKJxanY1WnkhaV3wvvosdxBhCSgj6UdwZHh2FWog7eP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mYkHxFQCmGfpQFRQ2BLNkfkQZU5EiVHfxGwpimDqc4N3NeRFgDdnPV3tDg5YbwQLtAQLYK9Brs6ecd4kakajXWh",
  "key1": "5hnSnk3aXfh999Gu24mqXarUv52fWq1XydvaNFjV3CaLyX8Fj8LFoZfevEuNhiPZLLSebBSxppTWZoaU3FUEAJDb",
  "key2": "4Xu5cSi3sncNoWY4vqEQEVXqnhCZjD7STK2ATithoAMmsoPp4zY5iAqJZUvHRjy3ZWb5BwZrK1C5pJuPacRbGXxk",
  "key3": "5gfDGjgD9VgGJjGai6MjSbJNP8E6bgsgKNLJKPko7663eLaksHszSLwiwvYuB82gZGFePa8FYoAjTgN1VRvX2DNT",
  "key4": "49JF8RuMmrAwBuL9pQ9W4xUsfwrxY73T2EW911gzjMqkJ6fvhoc9v1mPJu4vAgTE3UWWAZMYWYxqKXLS7WyALDri",
  "key5": "5zkk9HGZBrGidK1xruVDBWzJWVar1GpvnAekCw8dJEnZ2YpScZNc2SnMQk4As7PHHic3dbW8oKm7f6aujZ74zfzK",
  "key6": "2AaWMhCUWujt3zJ9PkQ7HwWR1ra5Y3r72rUd6FrrunX6Zjgxgay4ekjCYsS2XtQA3zGPZjn9P5dodYxNMJcuSe8C",
  "key7": "26utEntHJmEgvScybTDETKPpBAkVuzBTmhy4Qpwew4VWMeR5aZLhH2ZpBxmHYMmaYKPGwMJnzfao5Kn3J8gLNK3U",
  "key8": "5jd2XT78Jra5Fs3RYUMqzZb2paLxJKMjyrvpBB8KAi8W9rhsiQg5LkKvxVEinCtEPnPtbTE72c3fsvU1DbqZyZNH",
  "key9": "5c72zHeLdqg1Rdz9mTDVAShhsHF6cHhCuTxRuCgSLJUCNmJt5tWBcXFnUTma62J3SuoKREzVdAjbqqem8UVnMv3F",
  "key10": "uzcTmzqyuup11rTFHGjKTUuhpyGBbLhvQbMcG3ooJsDqtK4jqjY9QFMsTZkpdps44vF9MfmfoLkfnoE9hazrSBB",
  "key11": "F1BMy9LibXPf2Ca4Jj8oun6VfRrwmdArp9XFbz7GcUT7aaCVJi5cCsm9JBVyQ62kV6zcdXgT82wxRp5RtwsrTR6",
  "key12": "22GZzYbgQwxCttiQkc9uyHctzdjSU1zkUcZMJZboqBCimPECMPPA2swn5YSkgQCi5ETm7WEJVx6GcrpMsz77s9ZK",
  "key13": "FNZDBUiKPT42ksLzVMfGRvD9fwZBsL9aX58v2CyaUFrrupTHVpzUb7HJiHC5s8KaimMH4XpjTHLWZNixjuh1849",
  "key14": "X9XoAjPUeGDpZtEnQDAmYPUr4L4mYkNxs7vFdh2b6yj862V9dokZtKPvjw8hycrgM8dSJUC8pX3jWZg3stsF6cS",
  "key15": "26ko2EuGpiUTBcryn7gXasA8HCotquEHpkFYTm6JLiynZENVpREaMntsbdx8oFf782FwRF45eUi8ZGGRn5s5QdzU",
  "key16": "5UrYnoci4mKv1xXjp2LhqXLM8CtxkdPnKMqvNJ8ZHzxGkrsmZL4xqJA1zqcJaTFyN3FvuANrpayiQuU1EXRqwo6U",
  "key17": "3kohDDrmNRbhWAskpxPuAfriECNU9S8pjrJNPofgaorZEVLucEaFPeSGn3YgFSUa2V4DRgViTA7jQVTh4RXbHA7h",
  "key18": "FBxXDmJsmC8SMy43YPgg4ipEApm66ntconHuma1y5hVW76gbvsBMbgQijPBFh76dKiYB4oTi2a77zX9uwH6bGGU",
  "key19": "2WMsNLegLAatjwbeQvPk31mdd3tuoVcYJdJmRN5XA758dhzeXjRnRSVQNyKi3EcCCMrBPmu9R5De4fynS94oyghd",
  "key20": "3BLb1N3i9nTRgDFgDKVLEc5oSC5rbkMtxCXhybkDeLmNPRLD2KzeeMMR8HGrHZ6Tm9aPVjZ6DoqhMdvXs6r6uHLy",
  "key21": "2jyc6kUFtP51uVRVeKeCFgk5Pkjv6hwQFj7f7ntyxXLEW8MweFh518mP76Pw7WHy56rmfoQWMsUmr6Dtqbp7CSxD",
  "key22": "3wFty9hYp8pdH5AZfaC1Wk6vN2TTnUe3AHXvWV7PyneSFyVCpt45sNcRQuWuLABXiN3gS1A5eeQ9mNhTBFo2f42Q",
  "key23": "2y6sTdZxoSxngTRt2r7fsFLZKYKJBoAngLcNZcnBbdyX6FDmWHzRcLGNjNYYMmDRATS8o9KdKC5aXg2tQeSmn1ub",
  "key24": "32TGAe15CzB5faeUAoBo7K24kgGyKyGiFvt6cF5kSo4Sj3gLEjVpiDByowQ8i5PtAfqvJixdwuPzMKs9WBZsB85c"
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
