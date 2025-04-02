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
    "3Xq2oBKqthV7A1UwRqa8mVQ8NtxWm92h2FmuYxjGAmPVNEJHxVYsyzGAowBvx1MeLCL7suMhdVsVKc2X9XM4Vbo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29vjDzMhuCtVYUvLKR1QiyHQxxL7fJ4iXrwHATjgkYm2G9o5kpcbopoTtu4WXJWwAZCQMCtWbQJppwUDhvMLHRvW",
  "key1": "4c3aY6N55CejQmBbAqTWbX1YW6DjH9xaQpbanKhHDNrbzWEpzFYR5fouje9FwWC5J4cFp89L4L8Kqb9LmffPCPSC",
  "key2": "2JXfWAHsdKmFADq7caHKVkxZqiWtJ92yKJQiXE4jHm3eUGrsE1hEndvg3NUGzx6W4z4oaG1TANAF6Po3qvuyTgJ4",
  "key3": "3hxaagrebFHbVrCvM9PDBHT45sphhTvBNQk4KTGjAyRTqJaarVPdZjpg48Ehk7qNjozUP88ntLN8PDBuexrkxdec",
  "key4": "5NhneDRJ9ycbZwz1VdzDXJ6CrSqWkepUJYLiQdAQ99T7eDLWGw4VZmJhTFEbtsBaZTouWKGJ95RtxgivAmoB2wRr",
  "key5": "3mYj5ps9ajhrEuUA18L2eyrwpMCnxKLDKSBMdVJGaXcmQa8EnmeicCkdexEggS1pnN4hBkJnTNdLi4UYA9cNffWP",
  "key6": "34Nxr3doLNwKCUjHjR8NBshRfJja56zKHK4LX5YFYQfpn61UZ3vgB8SAsYpvxSMkTAsoAWbVaGfsrEtunRLsnCzT",
  "key7": "q1Y24G6MzQYndLy7RYWLkEKWoA7fTebk5Hvrhcr57dEFpzzXXFF3uVw6x169PMTzgdTweur42ypbew7wkjwTGvZ",
  "key8": "2fFoGN45dfEEERsvwU4R2AaFFpNq4K7sacF72iKFL5QDu8joQK9Sps4x3fJy4sNEf1t9JLQyg7qd72TwpmCqY9cS",
  "key9": "35sZoSD2tBQUxf6nTFgwnynBBa4jzLxtRvuWMEbTmRFS6ojaRYqqoDWJC1fqQNABMsYXXN2KdpjECFAaPfSpK8Lo",
  "key10": "2tBQiG8bgwuJAhKz3tDH1MTHYpxQVLXpDuXJDhvcvPBNZLejf8dh6Pucf6deru7gAbcLkbBk9d2v5CGVErKK6f19",
  "key11": "2XEvXYTVK95oiTRwJ8pJdZuDZeK3aM47FgLq3cJsRUxswK71wAF1cbPQBM7o2D7pcZsNvFypNtWBSCGkAeN4dUa2",
  "key12": "4QxhsFK5QUugkbRGCPJPaaqapx4sdQ4hhi855uqYuakn5BWS6CDmcr7mxg6yHSM5kTXHBdKmSWGjXvPJXoSSwZBd",
  "key13": "2Tg4gBSYLGhweqay81RhmEr2krpQsBFFwkHitsX2sEy1BWKLqRFffGyjhdtcDufZ2JYLnW5V93p8aizYAqmfj5jU",
  "key14": "2hP1SH3sd4BikBw91HGwFmP7tkrn4VHjPSPoN9fLepE44CsMVJPCPJMUpSCmrk3jxUwpnerEeLfb4WqyBsVP73GU",
  "key15": "4qQRAD2oVs4Xt6p3RcqDkgr4FoKs9uzKbACuKUjs6pKx8YEZENBz21bPy3T4wYtJSqNW7C6eE7MW2GabNzsjznaT",
  "key16": "3441SdnGmDUN2J1PaffkVubfnoX9Z8B7QNKa2yo68iC3MpuBkkccphLgZ12pvJFt49bPGgBCcNCGV8XFQ1tBHu6b",
  "key17": "41pkuFM7XrdEexExXzFanLgBYX82u2NKvgU6UUcJxHGhkPY4FrqM3amh1rAs7oqn1ELemhxVj9RXXvqQwPEd4JBD",
  "key18": "2wc7qinq6U5zTqzsdcKNr8vkLvvkMU53GgLSX2oAYTKKScewT4SRGkUREDmyj6F7j5dR8yHVvspv8W5JUZJrHv6X",
  "key19": "rxygqdTjDAXtSkYrV5BFnCCW7f4N2qCPoGpVzFDfGYfNZ3oTHqLCKEu4WFy8UXy1HVS77cheicbFixuJcRkmN9t",
  "key20": "LYidUGBBGNxEpVqA2BvnzrqCZ9whkZzjDbVbworNfgRQeZAWquAHcVD1RW7TozHUq2oi467ELeBuZD97TpNNNvp",
  "key21": "3AorsrM6G4HgkqgYbdcuZhAh84NKQfkGZL7W3rC61WUAzKkwAmYDySqZvXw9h283DBm1fXdHrvJ49hM92uaFAQJD",
  "key22": "5y7Yi5GQJPnEq37Skh4rNweXNYqxCDcWSGZMnSbPJ1npL3dwcDu5Sg1r9mzYAkV3g2ox7SEruVB3XdJHLcwNph2K",
  "key23": "2thSws8K1Pa8tQkSgMtVjtpfdBESKJurPvUTmCDksqsppTE1ro8PY2wVT3i6qTb9VRUa6ApiySLbhTRFzfUKok33",
  "key24": "485uH8vjgbjSStgzGfaBmvEk86En9kPLzt1Hp9dMgccuFSj3aX1GFfpCD7QKGN5487qukYHXbX42ZenkMcWxJrz1",
  "key25": "5tN4BpeGdoJddr2gJ5tThYB9Q8ryR6c8e9FQUUE8bjxudLqi6DTFXJPFeSF3zWKkf45UCTpLkgytwQxXRABB5i25",
  "key26": "3p8R1toGaqKecePqgp9t9qsGEKjginhBeXxxEWzD7i8uPzBTJjegfR7Hx7X7ugmsD5kyhWVniz2iNPKxeCLAzEjf",
  "key27": "5gsAogubUeWmQkYz4MQcryyQbPsgQ9EGkQNgkcXqYvBwhcNRdHEWYMdzjgiG1wBKC7tDymt1wvvLM9Vq6xuPVMae",
  "key28": "4NaeYRxGBWRwndbDcxCGrMW9iRY3yQnBne6zBFr7JWk7wwW4VLKX2tNWY2HJF3cot4VfNxykKi2aq3sLYSWdNpZq",
  "key29": "5fen4i9xrBwpkYT7dFFLcKZ1nKFfThEcPE3d6pCieABe9no5yb5D2kftgb6xW2QzxqEEsFJyEMEN2SDujWzBF7Yk",
  "key30": "KPbUQaYaC4SJ9Du1UG87jbzVcizieBDASKosuCXzr2firPGiKyUCd7R9ZCgVSDJCJk5UeJRemnnpHNnoRZXVCuY",
  "key31": "WumBEWjr8PCHuyCVj3Q4K6RB8nXDuA9DBNXtkFQ2zLLUiTK3kosEVn5fed2rrYkroWB6YPtxYTMySNFci6nJvSj",
  "key32": "2KYnzDVcHFkp4coKMHsaWx8aCXpC3SyymLL5akDReRKVfr9gbSznhCFETGhCXwmbezgiTe5U4L1C8mK3s7NvzYuk"
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
