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
    "2Vf6e7bRTsHN2UsePKMPcLQdqgetqLMv5AV9Z977QCR6UECr4yUw5LQx8RsC1txA3EzXThNziKhqcbcifKcPus6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p9QPr1NboGVGWfdp2fBqzeSkoggZkGNozxWM1mGNPAbguDsENBj4GQjuZtgU8ZpCghZJWVNMbhJ6FREUhM7YBud",
  "key1": "4zTmC39eiBYoSvf15zvjpqzkwuG3kJBRiCdkeEWzrPwu8VSE4ovf15XQeHbgmiZtSGsz7GJKQvqwXaefh3ScVxC7",
  "key2": "4y8gJDLSdCdhX7B3gSbamAhgEXmdhWvwmhk4R6qwmf9Hei9SXaxStkD4dLPMaGVYVXu1ms81Y9bHDs2MWAPPSaPL",
  "key3": "3zxrpJfphNofwotFB7NSrLcBf4D3CwNqpxGHKLQZq1czzwSHu71vs5vKddks8aCxrRKHX71gzLyAFC24CPEG8MHX",
  "key4": "4Qjceip9tDCtHvciAUB7LhX3Ceyp1KvEiqouQmrRVdweq6bHy4EdeC4hHjUkaom7SvkoZJyjDyHUH68dd14k9nnQ",
  "key5": "2A76f2PavHVrpfE6CkHdbYFrBAGgHpNWfR3211JuMRE2uH4mCXRupTR6iKgcXNZpbHR6Um9Gx5JXu4eUFfQMRdK6",
  "key6": "XQXx985hpAP5BLfA2cWrqnjv12dfXNVf1nvbVYdYgy7UpD8CvTAJdfTRPfY2HH5c2apNZcpijPtEMvz3Xiav1mo",
  "key7": "2eaNiGX4ZnzJM2XMUw8QXseaiPzZvxMiLa28kfKoGf9LF3YakrmqNSVjPQPBAuyF1inaqxbPfLDYJpjoEHXS4v9Q",
  "key8": "5hJT6EoMSHtVxMoNV8EyT74khveeUmcSV2YhCKbUcp1P52F5Vt8G2tXX9eZqVxWU1oQAPdBrGyC9c9CxtqHNQJPi",
  "key9": "4WSMXTHNxGoRhhjpVHJjcR6WgXE6ajD7PHdK9oPGw3i5WFeZe3ny3wNWKBACTHzTNdUwr1N33XsppFKsJF5HuxkL",
  "key10": "3hNFjuVM3U7NJp2MU46kdGhwrw2McFNPXWuxGjw8CA3appxKhrdahdxMozpEXPvjZiLNyP795TXXxrDAXeR9pp5y",
  "key11": "3qNsvGUUGoomiXYsm5uanjNxRmNYSXfpgf13qsXpQkRxwYxCx1qKZgjywKfQfMTsRKxiV2YGBXsqsXRgQCJBhXez",
  "key12": "4ZWT18TnxFaMhWJ7bob3XpWCcEcAtAMTkwdxU5CWCq6MmjUN9tvZxATsf2eg8fvJCfPYcrku7eKBCAgXkpxQU36P",
  "key13": "5bdcKwrVQy7T6A37rKuLtGbsBS1pMBg5eACAdXouVKQKqJAeWcNYbmqCEHYvrttPo1pVSjH3eDcVwvbv7cekEi7E",
  "key14": "4tnzcahQvSaJCnyphCQwYBYdixenGJZJz8DcD5NwNVNYNE7taQpM2WHC8QaSbHUeLcuwerps4mYYgoCL3Ji12cnV",
  "key15": "5wJhE8wXM6e5iMku2BUamm7Wp8JCnwZRj6w3kLwuWhbizcqvzyYV4Mi3H6V94Gfi8NrGQoqWJbYXNxMahZsJFpRr",
  "key16": "4N44YqKu4wP4pbed5sDDaFM431UZueHDW5evdi8swovwk9YsxcSDKTdWe7tNg1n5jmA4yt9KRQiPJXDXTwW7jggX",
  "key17": "26XvKh2FJLnQekxvP7KSearm2SLGW4JcifpmaydU7dyN8AmDUn8iSJbf7LFBJdFBXdR1AhxfA3d7LZf2rnUBHks2",
  "key18": "4XG715GnWfjD6KHLxqhY6oASeKqmbKBmDWey76sCs1JxMAZPrZ7HAPkbk37j2nCfVzv7Lq5BoAMaGbqrVip3QfVU",
  "key19": "5MYiNXSNidoHhiixztW5H79PKC1U6MaXd93tEdnce18dKxffp9CxFgF45iR2SygctoafcgUszPteTwtSav86zxRT",
  "key20": "5ssYW7DTC6KaAx4xaKVaoTMw64yxEvprFE9ytDEhWmDHXs5UqFyyhebncUvm6SRqExHSnV2LS4BTQSZAVY6A4HmF",
  "key21": "4J4Sv13XP78Vsug6yvpRyArwfFakbaUhujqTynbHbqZhKnCZ5n9kE5cqNGHFYibvdjPbgeH5YAqJTPZjWiYrbycF",
  "key22": "QLkHFCrRL5QqAVwWZKBmkUwg4qK7JFctivPErEqaGrVY6mRkAddF2hsaUxfUfASpLZc5U3xDfAohzKb2twUcN66",
  "key23": "3iDQv8ft7Cg56rNNwFx33NRS1uPES6Gzx3vZLr6vKP4Qi7BPxgLo5KeHYaiChkzKekfVWVqawQ29YSppzgtvFMzX",
  "key24": "5kegAz84xjiNWEbXoHeqruU9WPYXv6GNjRSopy6vy1CANpm982DTnZPXRHVKXwUAAv6doEon52SwyH1sRYu1tEyD"
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
