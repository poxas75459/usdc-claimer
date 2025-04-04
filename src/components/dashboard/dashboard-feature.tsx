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
    "44VZmUXwgFtE7mhDy8juXGjYe728JWRNid9jEBEmrjbDzuYbXVjjWeo4mdsGuu1C8rDZz1d3Mi5oUWmohTVAnuow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rKKW4eb8dsTNkDPyiCYPwGEgvNVZdTBZSA18GnRnCL6g7TfiSUedo23kjZy7ff2mq6Bgkv8fzxPsVDjR2Ensksg",
  "key1": "43AwBJu8UM2K8VAWiXCxN1hJnoR3Vz9ZtuUqcf79NcPwePjaRBEoEeeXQUTha8pxzgSP4TZF1YZyVVuV4oHEKLia",
  "key2": "3uTRUH5oXdQrmKubjq7ouL6ktA2Ynfc7bCode7nkDnbiJqh5hNioMKnQ7DQH2y5TAxVxVPeUrcTD7qtySXy7tXcD",
  "key3": "4kEFAzD3bKAuaFc3SmRmGv3n8RaYo9srTnqn4p7uqcR9GPXbH9zM7q3tS4kvWf17pv8o5WAwXpVjRbEpWAXZrsJZ",
  "key4": "Rf1HYzFSHfoiwBKW6uHTaiE3ofriuD8cnLLA6FVTPPraLnZ94juQn8T7mA83xMaN2WPAzAC7uqXh6piMZyFPA7K",
  "key5": "3g3ryJqx6gP1SXYAkHWjJ5dhpuMPYwwz366GtmxFGdXrxUWw425tZTZMrTnKVkLtzC9vvRQJQUvUNx7QYMsHgyFs",
  "key6": "3t64Fobg7RZkKiLuWbL8i1ds2XzWwB9s3RX8YM6PRYCKKvk3JCgeDBWFsDDfZTm8yF747FL414RCNNSegy781kCq",
  "key7": "2pWm6vWVe5RsV6hbxcj6Z2pMCkdsprQ7oqu29C8bU89T9F8LfgpWGCETXNgc1eXQxnUqAsP5MtvHDu2kHvZvXuBr",
  "key8": "aMKvC3NSkT5mQ9skLXRa1jVTz8EdTwg2Rp6ghcfqWm7QrWCtemehjDQGAuovF2vMHyJ3bNZfRsycsjLYvHCcaD1",
  "key9": "5xAkWXbaLuxRpeCMtyo2wX6pMX1gsM1W6ZPgV8cUG3WeevSqqaR1bN25rmSjw8PpUZyLmgHXRFcKhLf2ptHGDE7i",
  "key10": "DBpYshXjiekf9m7mhFHQvmytx3o6xzxY5EdtW8SUDG8D8EE3njsJResW9xbqWLv8CLMrGDqjkM9M4BPXgBsSh25",
  "key11": "3MfzwkHoA35F5fKXnkAJPmFqiDyuarUsRcwNuLcDcmWS87fJVEcsoJrj1Pt27nx5Ls1sxZpHzppaLGmqcMueybEg",
  "key12": "65BFEo14uAiW7oMUC2NwBEqqko5RKmd2UHJ4G8nwLj9JpiP1oEStN14g1cQe5S1dpVe1q7rKU5CaTVV3JX282uSy",
  "key13": "2RANFYdMJotR2NqRhF9Lh4ip9hka1gmnJC2AXUXowoF7AP7x2TLYJjC9MwzRLBDBbvJm99t9s6SW4Xigfe1FSZrW",
  "key14": "3bK46weMSx3Wcht7zbd3Zm7MbaKh96na5aDMGJsnMpmkBax1Lqqv23x8AxpebedCcL6F5tv11FqDpE4nx31jkYga",
  "key15": "4d6ooRcrwa2q4xMLE7uUaPteXEq27BwSWyPmjtj9Qr2BwYdR3bdmjJ7e9VGY6kx2QGVtrBVB1cUhtg1gE4Xjp77X",
  "key16": "4Q17WLeWDETb77KMTnVPKaLsG7BNQYsjMEscCTz9x3TnTJugq9dy6N4PuduLduzCZGsB5qEHmfhRLysFjDzFFQhW",
  "key17": "NGEgggrwFmAmaMbNAukwaWGzY268utpob9Vp4Va1JiqghefjN5eabkvCBzeAs2v6gK31hJ9M5kdJ3ZGqvqxjPq3",
  "key18": "2TLVUsSpkgJHt5Amysw5qY7CUA4zuC4T4opLeVYFfrPXLxCbvu8pRjh7fPJzhP5etGLU8GKViRAzgh7dTREN18Ya",
  "key19": "M7rrUuYhuGuhHj6CWbepjqxk2WhgWbxxHSAS4QGgKGbyCZzf3g9k1w2yhBVy3GAFZsroB1zr8Su3HLV27tDeZK5",
  "key20": "2QxxoFCd5GpGe4Xk7N1Wn3HXs34F4qD6pSBaSTQMSc6Lmq7BQfGuHtj2L7NsZL3SFkSNdBWJ5oBMtB9pJLBnQDZz",
  "key21": "2hAuT8zMfZtUJfShLahsBD3Zof8T9oupsa3tRF2YPSTQCEc6etqhk5ZpnuJjkdDg8wvjPQZuQXUTennoGcy8qpoX",
  "key22": "3oC5trrtDfLEzEodhoEnSCkmhUB4iny8BK1yDLczv1b8do4oXbEzY82uUfqHNBTs5pFGnWQpF3q4vup7JUu3io1a",
  "key23": "4XY1yZQR2WxkbZupBRyq9RXef6V2cJWe1URNMmW2nALo7tLwqoEq4RXxhESadygR9XSkd79skUZMEva2gJyvNmXm",
  "key24": "4Sp1pMbAEfH7MoBRsKA7MAL9aZkpY9bbKmNqQW4RHULGEaHGjQ8x6totmpG82MwRY83xWMxZDUnZ1LvYm1CA9UxD",
  "key25": "2NKiEETfw6t3uzTw8mxP3MBEdnXHA3yaYb6JMvC4F8TnNpkciUsoVg7xayjfRMwhkzWPQFQzZojQnZEMWQTXiriB",
  "key26": "4qd16JXrYrRGGijCrgWd42zoG3mHrQiC9BrgMxi9A5tA557JXVipsx3HaX9nt5pWP8ihJwvbHCYJWoXJAy6ucWyp",
  "key27": "YVQSki9cEbYXCmAwQhCTiawY6WS36TtTSY2vtbbJKEYdH69uBdJBgfbNWvtgsTUeHrmRUwF6oAENrmzGU8qS5Ce"
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
