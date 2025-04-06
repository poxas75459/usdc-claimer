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
    "q7vepoP7GYPqoZJvE1eXPQiGgUxBQbQhaFymYY6sAGPZ1c2w7aJ5uYmY5shZ9ZsHobW7E3D4hbnVopTAexbsq1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mJqxP9vwgaJgJ5hEy1o9tUDXs1ri13WgsJggBtw1TqE5kmcaH9KHv2DiUBMNYsqCezLXPRLCmZ9xrg6Nz26FEBK",
  "key1": "4vWcw9JL1FBTL3P9g3gNQComwtXDjtQpedemhkvSFKhfu9QwKGxVvq96ZaiQcqaTRZoRvjZu5ZGt8v6vViHD1wAD",
  "key2": "56xTz1g2V2sWxW2WfY8ccmgoKm4aYXi1HBXnCvtAh3XSzxGAKscGG7jKZyj5e3gehBXC85pYdgFxiEDvSoSjnvzL",
  "key3": "YnBoFQ9qdVEfTmM8XBe6HeyeEbC4PomcTLqKeGFa8vcyR2jKg6h91NHXiH6r77dVSwn6yXzD6N3ECMJza51AaNf",
  "key4": "51edfhnP4GgK6cFCDx8HHA9E1bjiWNASu1qRw3FPRFtRHfVMdftrtfKaPjUpNwrDH6ZEfzPMKrcpP2btAsmX2w9b",
  "key5": "5PrDb14EJZAFRFgMioH5ruFWDhS7FrG4bn6Qqnkrqq2xGXncgjn8uZFZKVnwEjBYHbEsrxxsnEX4HT4g42CTKPF8",
  "key6": "4esYEhBecVTWkX9WGtUngjA6qF8a1X5eZgA1YewQm3euurTM855SputgX8owKxWas7NKA3N6JptckrZK44nincRi",
  "key7": "2dbcWqe5B1VWGh3JrZFdi9t846bRRuZ1QrhopAKUsSfLsKQQLn8u8PZ5yrn3b13K3aQbCBnGwZ6bRWcGDgwcS2b",
  "key8": "41UmT4BY6Q1VpzhgFB2hozQjWig2LojT3tjPu4hEVeBNhYvGwd9DTHrgj1tSY97kXrZRQojB8yoHsGJZ5ieVzxzR",
  "key9": "2ro57rRADxvsjSzoWTgWpiTodyGhn5Z26shJoKDr2oH5SAeLG5dEKXcSAvqxx9zXYBhcS6CEogmPs4Y8rZLYwcWN",
  "key10": "3qjosL7amaAjxWRvnA57Q5EasgBrYFBeC5XGLgNx2swni3aW5e4W5GNxo6aFwizHuAu2Yu41HGmz2GA9avnxZEjZ",
  "key11": "EDqkWijpLH5QR7mmFQ5DNajSjQ5FnTqo95ebaB3qs6bs26BLT6ysY79aM5Lm4XfeoKEbB92oSiRWDYFKz8gHnKj",
  "key12": "4HgH4zDv7RmioPLiZs4nZbdjCE1Pht6HKf48cGr1StNnFxEesq6ZfQPD9jv3UtcnhycqvESYLhrcULvmzCxAuzzB",
  "key13": "23AsyLSsciCGJThkSdSXjwdKpxhgQhWP9cFbHtGueQqiFyPqpXuJE2PFqozFRJyXmJqsi4i1f6bDSTSjz5aNiQLV",
  "key14": "47fUkpxyfpKLcJDaXE7q9EJhmgf7eohszdST7Da9L6W3V1pLnHpXqpxU8Rwens38p4uUGq25P2itHjwETymm5nxG",
  "key15": "3N89jz5Lioyn5UiJGAncVdGpUM4MxQ63ULB6bDVR3zqZWpVSxpLi6CXhGH9yrP2tCqnTwZLtwzb8WmvQNfwUJqQk",
  "key16": "3FwxwszgfM98dLb15kQtGb86uNz7LecfDdzci9c4GKN3gRDxJgMf3KbagGmpq6BjDSP796yR53PLgt8Q9j8a8DEq",
  "key17": "XGoED46HBVJcxRwDD8aZGuvad9tTuUJA4WQfhNSz52cMP1H57LxutuPF4vSYiSLFHTSLDX78ETow4XcMidCN6Rc",
  "key18": "5nDwDbgQdj4Co59JzzKBFSEi7jtZagfestazCDfU5XqWQWnYZC23GEDnd7sJWbgccPrPfCruEwha8kx1HaSMMBaL",
  "key19": "2JhbzJ3HCUKFZZp7Rm2szJTYsJPnTFdYPj3AZ21tPqD8hT5iaze7wXxqAui8C1m8V37QE9BTYNt1amJm4Mo8NBNZ",
  "key20": "7hUZVeb5JwxjhZsKhEwJ3ckQarL7yjJT6D8UQgt3h8AryJvFeWKAEG3XUkpr7uodHnu2mvW1LHv9UUL7cPjcupu",
  "key21": "ootj9iPhURR58WBe2jZtKxWgQU2uPMKwV8aM5Sno6MjVKpNhj5hQZ9oXP9dsgNibdr6jcKRWdHCurJQoF1xg1ug",
  "key22": "LhRjnd49r8ik7EYdB3NbYifreWzy2S5zCcYucaFNp5aqke1yjgJCVR4XxUzqbLXSAB7SmSYd5BVeqPE9oGazAp2",
  "key23": "4Ks1V79QbhAoRUdYcKaqSwtPbX6HjcYMf1rq1xWTdw6WcQ8WzMjehWffLmjQcBwQdxJ4Jk5bCCWbfQR7RxpMUuRW",
  "key24": "3FCJeerrURk3s99VzN3CvcjhEXySyzca2jEGyUDLVsMmMjpwCiji8zWEYTQ7jQ37L52cnGReBDP6m7FGuqgFoywu",
  "key25": "2MUbSz6WTMiZyvuZXqqmXKQb1iVM7bSYXn1oX1i8e9wdcDFBYzkHzMo6EFTbCF9p9yaKBjTDePtySeCvtWMQ4f2w",
  "key26": "3tdMhJWNCkXmn4fPc3U27qjdCgcXQEFAuKVTQVsHKkAagzFatuSFxkJmkJQJqdh4Mkyauo7CnGBWtxbLBJ5vdAme",
  "key27": "2mgSm5tzDxBxqsC8jbvmxhKZgUSropcU2J6sDsFd8Cy9ExxduZCHHQ9H5pygx2iLLsebHk6vXKNZE9ot5zADHyaZ",
  "key28": "4qz6QhUfaHXZUGbiXGLuBWu4W839omnPwQiCxjiauEmMwBnzqiqDByEXtNqTiQm9uWz9DFFoB9FKpw764dTqc2oM",
  "key29": "4u2vpEf2SMzSsZxyp6UUr4sAJqpWs3QrXJx1Qg53sQNL3oFxE8LenFFJpcBtu2jXLzhh7VBSAyEAiL6hZvcA9ak2",
  "key30": "49pBm11V7yVcyoHqpJRKFDUeGgNR2GC6zCrwS24Dj41FoypAVMynYwKqp1MPPca5sxbSLaxnbDX2KzL9w3FtWPzT",
  "key31": "5DdDNqY2pVVo9DH9qqR4kV2wHkgyt8HyUYnHTv3qhfqjnMmCHWatdZcxvWoJGpNWndcoayLhSk1EjfpfccwCrh59"
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
