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
    "2PAfhyMSYE38ZQwzvYr88Yc2suLEX1PwAHGCkxie9tvW2ou8o57wJJFbybkwRwZkzMQi8KTAupkg52JxTmowyc9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L8XqS4QZfdqYjKYJe3wvYxTC4byiqgpvb4hpRLo6hxZDZneJFNE71uD3vdnCSxC7oc6nDenTHNHJ1kHAMPBZR7c",
  "key1": "5gBYhJ8PxwoZs3VdFc8Aqsq2CU5FCHDSU3ZBXtDqRX3NtJJzEuS9SReFuDz8iGnSdryDjVqgLpgzo5bUx7HuHdkF",
  "key2": "2Aepf9ek5LH5ukMxKfKdh6TLa7k1Jm3mLAV2hdkMoDLbbKqbZvhjZRBzEpjCKcfGFDpfMkSvBEGNns2yFgRk6Fvt",
  "key3": "uAcyVWHBtknb6HREVvaMwvR4K9R3XbUSErNjyxMmNaxXBWxJPwtDuqTpBM9veLM4L19P14ezV4AoVX5CaZdAvfY",
  "key4": "5pCjwLdgZ4rBYkBd7QF7Dc5N3RxJYqkpAcp5N6WjJc3A14xdxqvtphx4iKNuWcPNvhjKJ9qQ9MFK5MwC8TuXR6fs",
  "key5": "CJDtVmCgLYTzTSMoPfii32WFXZVBRG4wdLQRzoramdYEwDn7BNY1UGBS7aAsSRYFuaWf1sR6EfC5fUKcztBqS9X",
  "key6": "3cxrLNTqhSiS38eogzwvQbyWcZmNqKcEdnitDSQvpm2CPyysDnHVLQeQkmvfcf37gZDY2sopbUFhcHqTPKWX7SjP",
  "key7": "5Bd5UJza1VVjuSTh51oqkkHzLw2i3Z4XczDKKH4igCt5p3VM33hBsnqPoQQA7YW5cP7vFZDf3uzNYJnnzJuB3TNn",
  "key8": "YHfWAse8EHUjnMsQuZuh91dEp2XVHndfWkW5aPVEfo819jz4ucoegmaHQyrqf4yuNsdRy7SwR1FMdSrqyFZDAsG",
  "key9": "LrXLyjyHcFh5MwafSN1iMdqhbbQK1rS5it7ZvisnqQnsE5acuFuva83smoDSXt8rrZovqjgrzqUu67F3AYzbNDX",
  "key10": "fbrmvYbAWPazwzK6wXx7X6TLfpRzRh2ED2ofopf4Q5RwSo9RaroKbHUzo8s2SgJ7GHatGrU5h2wq9QNz8gkTq66",
  "key11": "3E5knUJ2ZqSs83jb28YiLrvT2uaWFWacRPjyP7CDLGxnLRX7ymVFdcss6yEjsa5F14iFLySAGfBBTLbXaxSRwCj3",
  "key12": "4YiTsfe6YD1sNDZLirpLgCAbUcNtZSyvftnbLgheP9g19WS6ifkuNFYgFrNsKpB4APBdboFSocniqZKxjjWdtdun",
  "key13": "25U3WZpPCUGTtTKAyehWqPeGgHVXZiRUcZDvjWJPPf1Z5gW1egvJGJ2TrzWP6ZgV6uaKAD7oWvnUaC3yRg34Lyga",
  "key14": "2itALKgHgZEBFnr1J7xj3WjfekXo1FtVz2NUVAQVFkFeUijwEAxGk7gVcofUf21bszJ391xCrr84JpKmW2pjr4z2",
  "key15": "5xLDrjdVuqXt2rFeGWStPRvC2P2YKUCBgHN2cZ3jG4Jhkz5FLRQNYHebffUjQonhSQx7CrFyJ6AxgPFABdxqsqB2",
  "key16": "4kzVnzLjPPmvHSACacXxSGmkGQruxocEjeCUmFh6moYy7dRgujH8CSZj7jPv9xzHvcAxx5NLatbdvWPD2UQZukio",
  "key17": "FCFsUnumrPqZjWtWFkZe5CRhCdG4fV2ZxP6MRqY1YtBkiregc4bZRJWUxdMdZfYCNuGiNBt4cEU6oxpiGoa7PJT",
  "key18": "4Ea9hyE5SNyV78dyWtWJZkAa7jGuGGKaQ46XghumaR1Pih4fpwXczJZb5KGJktifzk8sRZm159xVHnXsBZPboDG3",
  "key19": "2r3p72ih7wHFcMayRLa974MgEiAiX2DJVFU2ygGL2omKGETVMc6KvncKa3NqxN6hLzGY9SjntYD5weoYw685tnax",
  "key20": "3fpd8fqvcVWQJoq2CqJ4d9t52BDzJT9yWaGjHCac6r7WVmrZTZtce6QmpM3Ls3Yac4PiDk4xBEYoFVBf8rxikycc",
  "key21": "6XqRPX7VzCEh3atT6tdh9S9yVpjza1FTu1D8X5fchEfTpWykFQku7dS8q2jW5x38U1zmhJPLTSRaReiHpbicpRd",
  "key22": "2ibFECrvZLQS9Vt8op8VUq6CkrNYaf1TZ7CNpwq2brBhYPYw3nohbnYGyu6QbycXAbmmDVkjr2i5FMs1TuE2VQah",
  "key23": "4HGtJqxH8YhazHFBqoArWFZLG3cYLVNQnzstsEqF6oLFtYXgJUMPDSWcXFxyEpAYJ2CKMf73jgJdeeFfi7aY1uhm",
  "key24": "uQzz7dcbEKyaRZh9qSRifEGVxpFnSxMuGZGkEXBz3zNDZFHf2fCdN7EXSkNBEV1dGXBkM6xfMd1nyrMXCKmkNJ5",
  "key25": "35PbThcU4HVgDAXt9YvUjTHh7R8CrSFS9sWYmBHDVJVFSgjUuPfmjuZjZiUfJeYPVq32Z3tRBrVysavUkv7KwG8s"
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
