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
    "cJcFnfv43AMxCgjGcauXe7VhAd7AWyt8XCQ7Dcu1HeA63mUPrPnLrm58Hxt5Z9wJT5LxFCLmxRNxNHBoZmJ5How"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CUHHckBd9FH9TXgnErDzqZyJsFBRu72pJ8UwS6zAkdkg3ULa51fmJ3uugnK4neiRfnEbhaugKvHTK2ru2Z4iSKj",
  "key1": "sGMpm3V84CJhCrjxqrpS6ByvyABHu5PBWJ945tXNr7UN5FLNQoxLYRq59FLKKvKmfkA6hdHvuSFU7yLRYyqBJY6",
  "key2": "54vGjzTJtsDRynS6KG3AYjddyWmAhcBUaYCXVfEr7D7WGRvn48RwDysuVjTCBePF9MjdpFBPYAU64Kv6QAZKvFFH",
  "key3": "5dTTH56Yqx2Xgo6zqxEZ4aZA19AgBSGq7GFv4BH3hu7f8SqEVCx9noq7qHbKNjDFm7CPdJEYVUPrgRsj9aocHhJW",
  "key4": "3p7YkfzNVSidU6P3poknnxoGYW8VGYfFLKAx1wWeFmvXJmVwjuazMzcbmb4gY6d19PuD5KEr5TvLD2UnHpnp1DuD",
  "key5": "3NTrQnGVPLngtexfH9zoHye5ybJNy3xHmNXuDXvPKKY7KJe4Xn5d8f2BAtV1gj8XG6oqxBPQdQAaSAZMmRvh4GpC",
  "key6": "4PTbJG7j6hJcUZFKWNQCxdUEczEVAjzyH5wTF9BEnAuFEbUAJVWKQV7kPxbmBjiMiE6xMK1CSEremhQussttjU3w",
  "key7": "4gEbaUmKMN618Dvn8FveDqtwfkp6R5hDpLA2oyc5CkLrSKJdhEGTkD6k4FwBmdpT1H8NETycSBxHhPxEovGhBkgX",
  "key8": "3cC5t5nsZHsSw6sqsCzvDpM5SGMGHgTgebhrD9bFgw2L8Akwi7Qz3Szt4CXpPCT6ffCb2pPA72hERqzJN27B9VFt",
  "key9": "2rDeMS1jMc27368TBy34CMHqgpHQCfMkWJtBooSMq4YecFxo951ERByPs7Cyt4aX46znQ4u1XK6rJwaVDQo3KtU",
  "key10": "4PSkMZeqgdDqxkAv7RZm6Zv8YGLJB2u9vv51smeJPhcGPwmZFsG2HjjetuZBDHxuXgzHYqJirqH5Md5jmnBeZXAL",
  "key11": "BhF1ffVn691iNwaZExUvr3E5ZFNc9piEkAq3QV6xzT1nLEroctASa8xwDnBoe7BgqfmyU6U6xABwMi5kUh7sToe",
  "key12": "4EFjDgviUmCkWDDd74aa7VaMoC5VZkvYqcciNBsqhk9GH86ovJsnkDSsE7vNLX2zYrh99PFWRzNgPkMWFPhAu9c4",
  "key13": "oDRJXUQN7jZa5EcAuqvMovdNfx5j428xnCCHHFGoWwtj32XRwZyAfdbDvUkHHZbrfswHuV38dVZkPKCawgd7LTe",
  "key14": "UJBjRsAoYNNunoUm4cWPrWKrnup3kMuHGNixatjRf7aFymB2Wtq4MmQzhDBaYJVtEePkcHqmFHGUVwqvLxz4oNM",
  "key15": "1B4NuaB6s9fUjbqazzd7t21YktCrqKcC23NDaPzDaDDH2NGLX26JrxLkThxLvjwE6QWtyyDoaq6i1XNHoZSLWQW",
  "key16": "5KDtVVRUJCQbBBoy6ak9F8FdZui4tkE6ZZ7Aco1pvVQBHeoEE2rWWiH8f26hp6uiyegqPDAKh6LN7FQeZZEizJFU",
  "key17": "33hndiuAVnYuof9CmexPWmqqkg1ppiinR7Qvdabu6VU8DensJEvKq22uhLurXa3eyKAGRU9xRY6NRXSL8N81Gd5w",
  "key18": "yPY1zVr5NAhw9b7NPyCDKYvsWZw9wW5niPgAPNAffnqQQqWD4dr8zK9GAsStQYFXtAqf7rxVruzMevZ5ZmwTuz8",
  "key19": "3p2yj2Wogqd1wf35ftAbvNTUJ1pAy7KZqZuwcqkRrTcU7Uw75AeQnGD5jXTPLoecXd7J5sTPL2EwbtuduYnVjhfa",
  "key20": "2tMZ8JoWL7Q55RH2UvLPNBpNmGLoJrzmWTmCJ66X8F5hCiMQtNm8Zf8oyKR7Lr184UhzZuCziokr2afyebQ8Eidg",
  "key21": "2HBV8Cs1pMST4qXkdhRDToK1YBZ63txgR4X4PKhVfKAGPXeVDjRE6X5agZtrDFP5GH8uhbCLwbWswwE37FPeXvXj",
  "key22": "61Ny45DEW6B6D1efEJxAchhFXpMqQwVboFAuzo5hoJzm2GoTrHh7kFc7CPrJtZcegdpFH9tViP3343JBGBSEnKhi",
  "key23": "P25GaN78USSmXndZsfwNoLP78GSeSSgnrrXmXgf6LsZhPFpbXdyEiQ9sEKAy2yrUcaakJ4pzjjHQJcftMh3XSYX",
  "key24": "4zYrYidKftSLofqg3Bmibsrqhz1rUFFP6qZgbZja6qLYp58ogy1a8J31tDEN2XZAMcVGZN3iXdZkktQDmZ8aKnfN",
  "key25": "2uQz4U6yY5zootQdR5HqeiUjtG22qq7iuPgnAfioC4YGnUkRXRFh5STbwrhCmFTNGor63ewEQB41gtrQrx4ysq5c",
  "key26": "54iCQtnebeqqqgyPCXWjUHPJuxM5fspeigdwfoQxPQmRxohbXkNHC3yk7VuYDXh8nqCSHpvkVUPnZfKvNmDa5X66",
  "key27": "2yRLwBSRneBvAAfdWgRa8WjcSUjM3mnthgtciLk9Yuu7Gh6Au9YeQEXBd71nxpdPBUaB8FRDqWqkqXWhGp5y251n",
  "key28": "3gXnohiH7CJKdArTn6HHMKyez1ec4HyQVCFxu5iicKUk5eo8JqFj4vWRE2euQqt8LMarsXz7Q9GWEZ8sJw3T6ofh",
  "key29": "nrVvWnBcdv4inggMU5zd6hkMJpQJd1jUy8GS6g8rZdtTaNDL3CiwB97aEpfR2wJTD8NtxLSuU2w7DGcuQfPtFZ3",
  "key30": "WBFU2h5JngfhCh3GLn1qfBDiwuvNtJZXEBKsM5yHn1v1zRdx7hJbUo6QCth5MEg2VhkmTXkLNU6JGn8paqjqqtr",
  "key31": "552gVFkHDLbXPEw7jg4G6mqvxbnfNXW6X9GbegXkKMkECMDyakFo1eiwook5EUJNStTeL8vgbXFSEbYJzEpZ43kF",
  "key32": "kLneTkHopuT4uvy5hjiApvfXLgXb1wt8aGEjHWTDnJmwZ2NYhXwMarM99dnEx5JUVJFSUN5kJfFHB6g7YAJkFF1",
  "key33": "3mTHdGbsqGrDqXnBV42LZCfwVdpxZvUxHe6cPhHxg9DQ9GdysXwJm9bKDxn16Pz1ytV74q4V86wPkQEwhvXhtVH8",
  "key34": "6Hmx87z2GsiVKKYygKPXNQim3jsywEe4hG5b8MemggJosaKfeVEy5iHSgXN9bSCE2kj3p8SzZ5y4nCXb69BBfGi",
  "key35": "3DTxxnN5noVq4YpGYPwYXYbZSdAwFYDUbczUMLwgxWkLwXs1GBoJ8xtKdBfzw9M1TuyZnbcB62a5dbM6WcFiouu2"
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
