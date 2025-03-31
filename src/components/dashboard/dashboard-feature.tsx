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
    "4C566tstZDi8ZC2D9eheK9SDrDWffS7vtzxTDNQq11m96zkhtG5nTS1dUhx6BSCYSdmen9vnAp4stzcdXcLE9GgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KJmotipPo7RS2nXdspWCNjniWvbFeovdpe5uq5WmoTMLBL5iqyhERavQQ8SbUi8nVAR67dQWZ9rqVbadP2UpLCQ",
  "key1": "2rg8oinGWkzJnjLvt9qPsvsVCe3TjKXbwBPFSvd29GdSsgMqXmVQPFt7zNA43kbW2yD69tezApV6JZskNGEHUxPp",
  "key2": "3Zzhki9QzufMNDNmb51byXRcJMo54zpmdTyDhgku3Rid8ocNWNzNqWVbz5VHiLxBqQvy2pufwZk5zC6bzfTDYZw9",
  "key3": "4dMTqcgLGPUm6TnsjQ7sujg4z2qoyHjb4phrHudMopm35yb34yxWdVwwWXYQhNTkThvhejdFyS24z6B1UaSeVCS",
  "key4": "2c6sscwtXxLHAsKAkecid13WigEwzX1R3S8psEgdmgsztRD5FFfu8AY3xrkH9oEVt3oi3ou3UsE4UvzxNRvY9AWC",
  "key5": "2ZAG3gwUmo6r9TCe4Ca8pLhpEgtbb8GyVRXfa6Djdhs16aaUuU2YvriuEkCm9g7bbx3Ea7meW2BB8aqTp4hRBPz",
  "key6": "3cE2jFwtQyor63BuxgwHxjyyEmWN2D4sj1f7uxiHzCfQNNXaFfCVyqpWFXfyNs1X9CT1mmFj85aHtKPhDqT6wHKN",
  "key7": "Tn3Jn3m8oLAcS3yKLbXFG47YCnMRkKnR3fER5zGvpnHKwjHXkzQoeT1NqFeCJj7hegFJULquTtWQ9SCHrZRKXqn",
  "key8": "34Phd6nzccd2p1TP9SmsXGGveg3d2YC5Nxrq5vQ9hY9yoA5aTVYPpNVe1mxpCjcSGeGATagfY1gZ8kofV362CabG",
  "key9": "ybS4fbdrMQr4Hs1zHm1iC3yhcRetfcQusnXPGtwPQzNLjqZ8W2d9KmSe1J6QLXZe2CBXQvz63V6mgqXaqK7PeGB",
  "key10": "5ZWC7Cxt99MgHdprMy1UwSrZTRrmXdUSt9Z9NZRPe6VsmN7PuexsKJJiCbS3fuYJDsL46zUTrrgFKcYt26RgYFwT",
  "key11": "4jnng4wfojgF5tSdu5apzHoaw8CXBDNqphiwns4szHpTKPhcxCuVkGqqauV8tBmYiFgquxFaFVRdJ3sQf1JXwQxy",
  "key12": "3w5hhKWxbniBB7pmrpVHwaz51EEY6a6Rcs8SW41qxVaA1kEEpiRwoSAAMVfULfmaSbFsHHeG2Vr28YE6pyFVS1sv",
  "key13": "Q8SYNKPFFzziXRvFekedzMvQzdMofoPRk6TNJ5y3ndvKrpLARdG8niaSfGUZXu47Jjk8PYGRTJAHszzCA7rrupS",
  "key14": "2frpXyXa7hTfy5o5kXZ28Q5NFe3meBqxXWtgDSTfGGbALAGAVV9frB14W3TSW76L7js6xrpCkNBwqY51JLrHErgC",
  "key15": "29RkfGTRbcZEyuA5en794b8LEEZ7XSekBrndjArjvgM3iZVWQ5RGfcRkkcwF7REA2VjTo4XuTegL1y9UEBK7hyPu",
  "key16": "5M7tjDu4zHe4GSdKfozHhPzHZDFT4wmegS3SYXVTGznGCjyk63tA8B6TzExRkPikNfosENjYjhxzLqoDSLGjZ6UB",
  "key17": "2vi2UPNyG2sYZx5rwpdyDguyPA7nZQbAAbT4zC5dJisfHws1k3hX8pb6xsP2b55W7g77Z17KyJ9nxjq2Rkh227CZ",
  "key18": "5j5rDoFpx34CkknrsZvyNiTmK65RKouGMgzBTnihyYt53Jdpq5W4yNQG24R6yN1672m3SJvTZKE7fc5NVmsmsKVZ",
  "key19": "28TaME9A48YmSQjE2rQ3WpDBmeStsNYDKAF89YyaSfYi8MS7wnv8k82JqGEJ6BHZocbbjhFfhwyqyXuMsrnGrtP3",
  "key20": "5QGyuZTVi44R9VA7dVZVLhWGznJfiqGKafv8jyScQU53oD6ma1j9bUaw2JEYLDtMdddek4F3Ra55JqnKW9iwXMe2",
  "key21": "3yyHdmh9EdZGRnbAmzVhp1hmodjcGPac3kiPkXqsL829Rw6SDhJrALGQQbo7hzkhfD1CW2hyX2ycMAgTzw9srdXT",
  "key22": "5rN5xEasY1RSqLkcWJi2bvXXSKGEJFNaaUzmy5FBE7rBFH1UnM4U4vPV7cpmhXuMrxwyi6nnDYUrTvvv5wnLzjje",
  "key23": "58k6DsCsADwTCjWvXHDJAKuQqA5BMY3XnYhwPUbAWnRzRZewBobZTLhJUj62PfxndTm7QskGEZPpZwQbTTAsj887",
  "key24": "knoUbXrT71VwL2yiEWQv8Bs7rveQJCJUrM5aB8wzXS8ULGmU785hUukCnPq5xyVnbfdibx4hExxpvSsL3i65Prz",
  "key25": "5oGwKVAMJ35wgwVopTH2eNb6RxkSNvcHqwKy6SBT5q9xtqiPmgyivon1xPtSMv7wEzCSfzbNKKd3e5vYg8ThgbeA",
  "key26": "3y5mCjnHpWxEyszTWMLVA9UxVV67Jv64jWCqE8ES9b3dH4qzm544GsC9HgJrRYJpkPFrvkyERUqBTYsXCmp195C8",
  "key27": "2kXWHx6sNrEwgvnNCYNWzrUUp7t7NhKPS46w8ZpTAksyfoseQ8ZA9ee9Qf8DRwp28CiSX6wyx6BUDuUPgAfBozLP"
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
