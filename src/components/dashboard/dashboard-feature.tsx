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
    "3vpqaATvdYfMV5V84bNriNU39uzaR5CYrfTZJjRPg5YZvDMM6tBuDUMrKFFwCEGTPaQnznECwDVEzLf2cUzijnUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TVqzUYRMnzYjxhaZMsSKqSHPDCbBsvQaPwGacD4rhABsxumEkNAAuLxBNmUTL7p8jqdekcCdJdUFyoRDiaDUWyb",
  "key1": "52YEnV7BTaiymCKMd1Gqn9mBRR7ZXN1KPhWDiViKmAL3bbD8QmJJYUXdu3TvBKbyBpk5LorceaLYUToZhw8uuEqX",
  "key2": "3FnyejiXKTpdAGZtV1vQUbyN8T4FSGcHez6iWVTH4fjiwDVtAWCjsDq7583n92ev1v41pyYsLQz64zjEEZ4cvLNP",
  "key3": "4otpwRqXL1kGsuPaMpGRCUuoa3tMxyJCcMRPs76sypvWz7nwPoBwhdy7u2G3KEsdsKXD7k1GS5pP3xQzp77KvzuN",
  "key4": "4eG2ERk9jvEpSeYoVD89f7msf5U2t26HA7z5hs8LU99Pwhjw6vkDFX1eHmtjXG4XMkZwiygf8rsn7xUs9jFze7i7",
  "key5": "3W6RgyE7Dy3bcQ2YhJC3v3dx8cYiHDp6YRht9oKp8FF64Hi8esk2uMaaScqFoFa7X4WbxkvPkqnP9Jxfk5Q7PNRn",
  "key6": "4RDpwK1AWMPWiD3WkWFmGEDNdwdVLdN3mxjUMi1BbTLUWRxV8hWABWsWEiJGLFjKL6cttHSquCKSHCKrzQHAa7BK",
  "key7": "2eVq4Aw6VeNcsKvqQrQDHvtBZu57voBFECFvUMArhggPCjqQw3MhJbi4iG2fT7mv2gWFEi48fnWFDC6ZaPKfuthy",
  "key8": "3VdSMZXDYotVvb45dLZKrG7EU5ouS1UMxC9qQFqwdxgRbv2RbhfWE1TfcvGi5UFA6MrznRxz4TyrrbLeZvjZfTxq",
  "key9": "5g9x6JnGBm836oVXYYVD55AVbAagidPyv1wMsFFsC1C1f6yZGY5hkC3CAvuLYSq6bcKpRBrarjagLBusPVEW5kUa",
  "key10": "kyQagwVdRpAK1AjKkgu3mf6acUvcWBMAt9w6BTkk1zk1MM5EgLTjuXmcMoqNSL8fVoRn2Jw4godhYzYxATWwN7s",
  "key11": "3EpXkFD93DS7cpeXPctinRpAgTq4oHTHCgsQPdcs5nzDhK1i1PACqt131wynmnmTk4Hqmyg6EskrCM49vkJ2wp6P",
  "key12": "1277EKgqkgz2f1CMDVVfLaL4XGLWmqrrVRA968pXgxRYxdVM6qxKciPszRpRbU9bhqpL9VSyNtMPXrtRZdGb96BB",
  "key13": "46s6QnLZuMxfUCJvxrKAj26UFXrH8a2sniDsiPdHGE75qyjTfW6qeeuvTAZj1mSXEG9PxY64t5SYMwVqby4q5Tjw",
  "key14": "3cJxE335PgwRAPCaZyCa7otQ1vSgoNb4EjasZmL1dP9UNWVebpgAfGQjV4oTqYudKQZbURFqHocV8HJdPEhJ13Hw",
  "key15": "2DiEHCVMw6ZqNABwEbsz3CgbAcdT8PzDiShyiTgpLiDYjkx3oFQ2dTREf2QLMWgygpQ8DN1rBv8mAzgKJgMK3n9",
  "key16": "PYtrwjBnirYECfcgkgH2tJcBxiPk6R6QVjqovRxHbaxngQowu7B7pzoYrsx6Z9TnHu5wnX4DFV5KqdU6NQdoZjG",
  "key17": "3BNLQ27pcoK5WPnAkjpDbjiWDtX6S7dCEaH5uViA26ei5jogzWxB85d6eATbixTPNwXGvfXnwqe1qS8PuFipupxt",
  "key18": "47PtEsrND2k1Lf6oyr1pwZghx1nj98oAy8ers6KExAMzXjWczzTR4yfPQZuJVJnphHtDyUymcNEq9HyBWkiZNdkP",
  "key19": "5SYrKy4RDy31B12p9g9aZLbG1nxMrvBQGrZqPHLfLakjS5ydjJuJwTFQAcfgbRoRHWFmKiwc9VC9Mpn7F6h7WV1q",
  "key20": "4dJaZCRhGD4mRRkHXx1ATvUHmbKYats2X9eLZfEjhvMeB1HpRgkDFfV1ufCU5pnxAdus6Dpu3vsTYTmwicBUsz4P",
  "key21": "tT5RMy9B4yFqfdjsMpHeika8erqPnBDW7bQuShcoG22VKVMawhrhpnmTuG1S8YV45TKzD4qRxWTtsAkWewTjq5R",
  "key22": "628Jj1kNcxTLAeBf7bvWp7quNpZHefkUWyQwiU3FCZxZuxtjDs6p2AdrzrDN59dhuzTF1g9ZB215TuicUxWS9vNp",
  "key23": "2iYkSGT6oR2tcB5uxDyQU6tJpAkLKoEdNQ9tWTHdei9j7rNmor3jZULZEhW8E89WJ8BpenU4WQ15aiLNRuSygCGu",
  "key24": "mSYfUQkxW9SwGbB1RFnMQW7J5qZdneBcLffwZkNdq1KoiEs4FoaFg8RQsXopzv79tvgJgdkDKrgszrQNbcgU7Kv",
  "key25": "4UqDTZ4F9vi6XCDp7FhPzGS38D8jUSkUPVDbBbc5c8xJWie5t4yciMMdn5xyQTXF2dUwgbq9yKYak5rnjLnyXX7m",
  "key26": "sZCGfZ6dR3s4qAQf91yhxzEFhiNyBkL7L9ko5Aju1YyqjLwm3TTFL5rR3tFWp5k7kM2LHvGrgFwDC8YkxNroLYT",
  "key27": "mdmwr5bNidQTHy14XQVdofgTNa5xvdanxD6KhXGHdTxyHtePUQAkSEyrevyiS4qL3838YEip118C5mGsfTjDDN4",
  "key28": "5wFuaF6UMQFA4XhUrNKsEe8uju49QkEoH8KKDZ2T8dfdxskPBjpTqBBWgwmiAKL3X6tXRUs3Q1mDea2Virr6C7si",
  "key29": "4MzhfnTwoeLEjDxsdPzmhA7UFf1HmKf8NnUXL4RCbWbSxQGMcs9s5guGHLqkwebgV2kY8bpW4qRCRQqEWLUxt2Mx"
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
