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
    "49Q9bKB1YoweMtqwYgyVv4Xps1JovWTPvpMEN7ZYWtUKXPbpVNWNCC1JAVFo8HZfpTspKh9ijFXzLngvUaP13GqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TVf2ridVXiWWVrcdBZ8y88PczDSS42cCbVeYiJGhWzjuYuHViNhGEy2VUq2JF9DsReMm7Md9SicRFmQjxe42NEM",
  "key1": "KHUogg5Hzi29Y6MifZXNwkAHworupYdHJ3CKJp6raK78siPjdVLJLfPKsSKbUcw4wjG2MKrSaipip5sx7M6MwMb",
  "key2": "9jxsG9z9j4eCikZhPhmh2GuQyVUBSMSxRf1FKzn8xvs4yYpcPCkou1L9fVJYWcRCAN4TffDJ3jK9ztR5NLsHenP",
  "key3": "27mREtU7JhkuaW1hU81joCDpDs5LkB41Pgnw9JPzXh44ctvRvkcncVPwDEoeMBgSTKTYs3xYWe3S9Bz4oYrTUQ9G",
  "key4": "3eswwvaRUdyfn4XXsu7RMhgMPDkSzdWN9KFmTXSW6hV7WZodQLqZRKTvtMvkskebJ9rVe8KzqSaMMBmqaqt1rpZ6",
  "key5": "2hfbka1Zn7R3gYfPbwwFWavaZgDGHT1sfLckgw3yXSmQDgQRvc4jREeNpJHjwhw1RRrXr4trae7YbjzajauyLtt7",
  "key6": "2Bf6peKjhNLvBSTCzv13LsvZPZk2BQBBo6iYx5HWFoV1WjrUP6VUnvWzYFFMEJ8frDyMFHRMuEz17zyCntfnYVAU",
  "key7": "3YoZY51vWRbw2HRUE4zgvRk8HDuoxpRRPJEbaUcMTsbvBv59UGtE8bNQX27N9BDvjpwa1ZaSWVW4AQZ1x6UNpvrp",
  "key8": "XfqBSGNKFYGz8mGSoeW7uLMXWH8T2FXWZVXKTL8ykPMxbWxgdSwUtVL5VVWT16iozhSiEvVTX56TgfAnUz9Xjeb",
  "key9": "3t18tSv5Gvnedn8GtzdBqxwgDLHfuPnFKZoXw85e2xbkg6bUJDX4GPoAsah92SMKdYdbTn4YBCFEmNBfwXgLGnWB",
  "key10": "5DrNH8tfsWS3Pa7tRqFoLsTXzw1w3uXupWL2wSfYhzqtk5KnFZm79jtGYsVu2oeZLGPSqdQLUL7RGSJAW82hJpVY",
  "key11": "3s4vGh8yvLeTwxB5aPS78sAhZMDpWnPzzEpongC1hFp5fAuQeYMwHdnsAM1sA4ebtHVjk3BsRQZmBdtcRtF7m73y",
  "key12": "527ovEAMo8C9Wtw9SSs7nSYKTNzFkduvGoXLQgfo3q4kMfqKypitToPn5YYUWck1LWZho51kg8vJfsJCdTFk7kJc",
  "key13": "NKkrPhPvdm9ySCLwtZ6Jq2AccPGBMVwXD454dwCorVtHGC3xFPzrjccSpxZ3rpikZoPqfMufBJrnEMrQaUNazHz",
  "key14": "ECnHFVwEmNACciSQz4yV4ze7mvHCw2YZc8hLWX87u8qhXTZJ8fg74RQV2fRLssTjfDZrdFiKVLJkWLwKmdEZ3bL",
  "key15": "4MEqtn66zbiDLBbRr7nuaPedLnQZQtVH5NbhEZmBJLm7q4Ep8y9E4cJXJEEPz4trnyDQySoF4aeuzsXn8ywvpjxJ",
  "key16": "42eVcfRhSkigbx47F3Fjs7QEPpW4iLf4HTNnCaktJ376CufAEDdGd5qtchP2h558RMGhBCPVyc9nGyQGopw4gsa8",
  "key17": "412X1ucHURQLoBxLmw3mZgrNGHNfD4kc9sVVejvfd6M6eMADJoPoVDvY8bAS2G4z8zcycm3QWWTkanVtNVfybEig",
  "key18": "MNtRRnTtSGZZb1RcSpRSQW3cWzWKVyM1NcbHW1VPdE1vKxx6b4Qs2GUGZawr3Z4TjiYBRa5SJwb9GiVR7UHatFd",
  "key19": "2yXt5JcBUVvfFvD6GzBvTykY9srd2aaD3MyywBv63E6AHe21pU8YwT9DdMc4pshsSAfBpBkA4pD2xjohMGGJ4Yea",
  "key20": "2gmmgcXU45eJR9HuDNu9whpcB1j2avv5HhqFWHkoJR9H9iHgeMZVePmJJPU824UPznVizXhokP83SpP4mM6EoU4e",
  "key21": "NSjpvsyd4CyWgNkNd8VEdVFify7XjwPdTGaJf4C2ZUcnQw4ctNuFbuh4Ze8FtT7hkn6BJX7seMBtszyRidsf1tg",
  "key22": "3zLtSWZHBrPS1nES74TqRpT6ktCUfio81xniBN9dwQ29HAED3jKgeLSBxMMd95Nm3dBseYYiYeVy6BiKqgwcz7k1",
  "key23": "5rhHZDwVgwRsJiS2urkA61BKatmPcejCFPSohQJi61UahgQV4LRVAQSMCzQPQD7DDca89svRdzV5biytFjHDyxUw",
  "key24": "3cN2WfVvSA1hkHaQWvvhHo1rHQb6vGQXL85FxfdYNxeyHV9cyzJ3nDjQvHVuzPGQLyvTXRsUMMrFzFT6jWgKigVn",
  "key25": "21wHQjmfR9LsNUms5avqgGswEMASUGYqM44KPFs3RMQSYAzWb8sEo4qTULc42LL2Z9RCMfbarm81z5xJhAgJeE7k",
  "key26": "4PnsYC9sVQ2Y9ExULJHJSAPBU3i1J9dCozqJtmtpe5xUNhqVowJvEkAPrJbFhoFuRYUJDUPHaavUExYzBDkJ1pK7",
  "key27": "2FDVZRQVmrBdtC6Db1AK6QUjJ1ajfDRi5yySBFuKZJD7pwwJodLGcGTFvrWxUxSbx6ZNL2iho8ZeLdbsKpMrbx91",
  "key28": "3VwCMvx7vJDuMpdt9SjyX5q9MX2oWFEKcMnHU4iZY6ZTVyWbvVWmfdWZwkfWEihGGWSUd8zp3fDaNv9YS7GjoeWc",
  "key29": "4FnLBSNyoyov4u6iikh3z3RmSFkFN9UhH1N4X3NbUYW5MyYcb45oJJkkUmgiXS62xGxLzLyQ61BUPCQEEENkVzbD",
  "key30": "3PeShGFCTfb6tAfXVmgPfzkZgm4nvtnjVN7WoWu9xpvGaaN9T4ajDF55PgZFRHUjv5np3Ati9SRz7FqmnMyT6gRR",
  "key31": "2HyYvJJZ376dHoD2qKHYsPQYfdofZ9sJQZQd7jmNmxWLXeffZRqYAjT7owmczVy1BBrtqvDVvn6kiW4yhMr8sBwp",
  "key32": "vfNuzBTGjQd3e55sGepyJofreEnBfw6WiAMYg8rtU1CqGbo8tvteXDucvFcj6s4c9Wn7DiqWmZPojd8EcwWanCT"
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
