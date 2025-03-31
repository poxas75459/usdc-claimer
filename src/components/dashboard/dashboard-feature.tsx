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
    "61Ts3cd7nXPWLS71HB3rQUJvMyPit1vsygYWsdwmnGBjZZbctKQoW23pNmLkRaNvERGfgGAWBbrHdV6xnjawcNj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TvphBFvNkVFnyF5EC35JhmAwS7tJmrkVPHkeR4nrQQpMHrVo2iGxdXn8sEyk3y1nVTAyiPd27Eaei9Q8XkjnNja",
  "key1": "3uUCuaPM9S34ghGVMFqg7NRehFVo44fLiGLyixdjmrwtrf5bBF3t5JChD5UJsk1VMq3HBjrqFZwJ2Tp99CqC4meM",
  "key2": "LZbLh7Bv9NLTfFDipitfga3HMSFkJCU5U9g4sNCtkbZeDzxQ8NRm1ycvjWyTycVgM2YXE5XWPEkGu4LtF8AkusC",
  "key3": "3YxgDLV57YPUGt52cmjJ7LomKsx2xijBc2f2VSie46cmBvNmJWELbZZER1id98bgbZEGTkkmw8mB7AR6uZjwJB9T",
  "key4": "3rJ4cDAgJhhsVKP9Vg33EpEsBhYHfcBkJ2H2ERimCh6aY1GqeKzP3UTB8eXhDBXQ8CXujgDo1LaxemzkeHox1idj",
  "key5": "HBh2BsLwFuKCDkHUiftADh8rUGs3L7Pjx5qCpMUPnjPieSFcPXyK6hQz6TSEhVYJt5QxtBhcYFPhiQiMjzd5Qz3",
  "key6": "62aLMNbSWVPfyBm9Y38tYRk6BLhWUM7gXn1FdpczmBYgqYjGNU9DvpfTpjwQPhEam4gxPQoQSvkpSsXMzaMU8CJg",
  "key7": "5gaZT6MmYbw1bVKv1r5zdZzthQ14ZnW1nAQc6hGY63zNhnutvrUqRfAKi3UAyLWaZN34j6QEMWYEvckQiyktGa2D",
  "key8": "4QuUBLKdgGTrkHFepSMgadUwu5RPhScMVKFz9qgAtFr7Qsom6zt3KF9ewCjwatoqz86JE4vjHzyCpU4PMqezyZsS",
  "key9": "yhxEtcLzdWqEFWnt2ptNLH1eHdjDvsvMcZxQfqkumwUhDQLiycfAVYWKzNpo5gJQ45vNQKL47EPLTczXtTsj8wi",
  "key10": "34cRxhSQSSHmGVyNrcXPEbcTcnX4aZTJwFYEVuwK8b1CHzQDBm4m45wtgQdwtV9PAWfMdqHFP7FQvx1Epiku61T8",
  "key11": "2KQe2KFDzxzaCdfqeFf6FrwifmpyR8gJBT9Vig3N3U3Sm7dRzEh326Ctv5cHXcwUE6wvZtYjRMNBigNsGx7CDZW7",
  "key12": "4BV8aHRD2jYUhEUCZJP77Rkp7thTkVo2B1tiAjSZdHrNqG2jG16joy8tjJptCnShcNPL33HQ9DTH3C7zre35jW5t",
  "key13": "5ySDn6om5ML3TCVZGPKDk2XpJrAd676DacZRziKeeBwSCLmZWz3e5gR2Mm9i2A3TuiJpFmoHHSpuDn51XBrpi8Vd",
  "key14": "2HorSJ8FzpawyZt5UvdJS2d6tEnLMncEswSU5EreBq7eXbociArEt2Rb6sPkw5bPDz4CFCzbqcBWpi9YUJF4iNoT",
  "key15": "2mK36GZefkhaUT8C3nHzFrmmHyxNfcBi8uzssnzeQVdSZPzayxMLur7y583SLvVDGj7TTnkkAE22nzUSEAra4LK4",
  "key16": "269z1wTWSojr9hE6cv4f9P6HnP8n3E2vXS6rcu2c9iNpoBWpeJw26d3nHWjvrTog6sJAK15DYGkJ3qJoGNMa65dY",
  "key17": "3abF6ewHXJG2CbEsG769RGCop1TJhKB6gh8dun6vzGKKetVPmHeRuXScJBdPDcQGBYS1djG5c81rQGjE21G5HBtY",
  "key18": "2ebZqkftau4eLFPQtuVjhWyNtPsCgi57BftmdJLUKTaBchckAcbZvso2VKeMZrpGvreBz6LX5b9BQrsYX8CAdrCU",
  "key19": "3GZ8JbZiB62KDvAzGkRvEUE1PEMt5BoLSoMzwM39xwnTUWDo69iTqQsebbJ24bZtXEaXpH8SiWpYUe6tPuV6Vj61",
  "key20": "6197LXDmJ48UFhgEJKdp2dU3wowizbBJMEMqknGFhfr8jG6HqQXvX5rJpZHxJCEdAGzygrrMDPgQxd5EhfegK7Go",
  "key21": "4pUGrrnLBCshzrHZ1u9N7HKpkMDzacWDrTAkpntVXSCKY1BDiXP7Hc7ZBdJVAEv1nMwBDAjdVFBxom71ZUFk8A8Z",
  "key22": "2MAvHMEKXtY31p5GSJy1qb56z88WVFiXb2B7r5DFKSKa5X8rG84rHWYR5HzXsyfHtHXV1o71i5ioChm54ciGYCBM",
  "key23": "35fjB5CtT4YAePSiprftU8pcUPAWuSY4UHEni56QSWDbKxMc3fGKYJ5Xn9ACyTYz4cHLKqz9KXPtZ4ip68K8KMjv",
  "key24": "2U3MiTv1GrtTQWzqNG5MRCVRgJ1d4vDHNsGoke1eoB63hfDTZJKNyWBQYH68fa48UeXn27m1bUmuyx1ruqvVZTUH",
  "key25": "4yjDkmmRnp4iTjN5V3EEiP2RwymVUkRZZrPUf1BnvjHeuMH7f1sJ6AZhzMXrakWUmUfnTgx9dgedX4agUWmGxPjy"
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
