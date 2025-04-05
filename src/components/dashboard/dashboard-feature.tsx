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
    "3tPhYn5kbNaMst6fo29MgaLuY3YBQaqJyLeKAVfrTbpy3LARG4cjWc3mAfxLZo6cMoYo48mmkhZNQ62wB6tTtNwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eCi2RP2EqQ2vG9JcK8PaoXq8vyoUnKU9akbASP5q44Bt2F6RTQcQt3PgR4AiaA7uanDde2CHQWPkZpZNRu4XH4H",
  "key1": "5EtApb6m5HoGD7eCg7WTir8kHK1TB34vMTPme4bhbvXsrNA6h9VifMpKHmozUsFpaLN5cUhGPm7Pw2BGhK5H2iC5",
  "key2": "4RzMN7otSrcnn4cQho1HdDTkDxJyrvMQqwzdwFFZX4YTurUXpRPqobQ4Wn3XYqMuntTDEEPnFcxR3ZjhjBWEBhwV",
  "key3": "AYLA2AChZ2LfsPzd1giUwZsBdw9CZ3vyNERFt3wpFwujjQkXHVKRJzcRYmpPiFHYBpzfM8wmCMk5jFc5TQ6jryV",
  "key4": "3VR36BsdDijnwFSoJD8RjGk8ad35CBceJwxgRKrm5DuK8vkfSxTbiJ2ipPELXFnKiKXGewhUvYPRZVfBHnas6XuP",
  "key5": "5TmGgSwVZduViBeyyyFh7sT6sW8XydcggiLaRei4yJJvimRBY1Vmu5udp13B3Sa2W1FcFh2kxcNqxgJjCuxNvrZe",
  "key6": "2sc9Db9tUJrhQHbcVYyHVXL6EfdP8qM86uxH3A9dbJKMACFyMup4hSbV4VrFa2ZexKxVUkssXZa3Ut7tqjB72b8R",
  "key7": "5vZGa11oXYS4MPr7eWLhxzvVwNTj9CorhiW3RA2rVgxe5uPPiiqmoM8kuPx8TKwXQbJfLQPRhePBuWbXVc9DsAW6",
  "key8": "3MmDopQh4zjThqYcdPyf6Ro4oVrZxeBbYxpCLCwarebgP3vfWnPJ4uWybdYxPvXTVLsqbW6aGjoBo8skS57mzSVA",
  "key9": "4YYm9GfUBc9aEkT9po7y6GoJdfjH38VJC3Yx64tr6DBcAecWuStvQ6wpLnYPRdiMW7ZTuch63oTEjBTotAtEGu6B",
  "key10": "4x9tHnPmbMWUqCmv8YUGw5Wy1pwTV3QKLowWGbW1CKaVrCyR5Q1vtVmzkxogP384sck1E3MRHpU73mta45pW7cRA",
  "key11": "5HhK1ADAPyZu61VxiTtpxLKhWt3UQA5gjHULjnTCatBrrra4WM9hLF5BZB92QwXfZheJxhZ6PS7dkBqoJMdDgrZc",
  "key12": "3SRdaJxwNSv4Z3G5E1QesoBEcqR9kMyNg7jz3nw3JkBqpXgBWWZe4pc8m9k7qMvaM2CQRYvSBWzYy9uJBPjLQk99",
  "key13": "8DKVg6pimaFcZTnPvFkvu3ZckdZzDdu4kXK1sLkEXUdNwUbnbiarMdNkQo4pQ6Yx1AXzbFBP43UgrsRgYbk32J4",
  "key14": "2yTVWnQTQ2Hzjyp1gPM33CF4CzKz5j5S7XyBwD4vJT8E5xJigXFuQcPnvYdk8JWW1qrAUCgZPpwvQ6m4f5bjzuNS",
  "key15": "26aChubouDV38XuuvbxQ8kAAYWunykYyUeDJRWJqTREk71BCBnTED7hE3aFvbhdxZfi9dg2VMNAJpPq8hbF3m1eX",
  "key16": "5FWtVX21m44z87FZTfqrhztAQ7p4TBVZmDeKGwyum328zcpwJirdUpQvfLEyNr6rJzE6v4h1aukrTtTPwEHFyznE",
  "key17": "qgKHCX43NcmR6PUjiYwb24qWXfz4QCBY4Pq7ULHsmFcmLk3W3vk7ibVSD1nK6tMTLWjr78WMLqTcrkjPTuewYnt",
  "key18": "3vRBfevXTy1sd64n7JgnT76pNbVgwDxmF4cKey6AuTBy6TPGMzvq7hC8UHfrjEuLbxeSTayaBjAHWFh1eK22x3xp",
  "key19": "58SZQ3BrCj5ytF5dBiFwSKSsco9rqtURCYLnjaZ2DRKfQKWPNzgELG8KDt8kZPtaPKwyang1U7UySL81P3GsnejC",
  "key20": "2A1tzW1YFi8tbeP9osoaeYu2ro2QwM5JmpoDbveZSa9XdEfv4g8VbM6H6BBQ4dVqiyR8kmp4fpq2SApwmk8GB6ct",
  "key21": "5z4GrXaWovVHELonAZtR4YCru2CQhMirDTsZGYG1MtDUrPNVMpcAZ4VBKL6QQGLHiKDRRghxkHfFsLhtNd9HzZH3",
  "key22": "3HKH1DRhWdEsUNKo4JPr2nD1GcW5E6dEoQE4q36w34MctUnA61fYj29DJMnGZHTsZ3Z864NSAkkdFHQhmPsQLGx",
  "key23": "4UXrd1fLguMBj6YtW5h3Zf5Y5V74NwDFeDjJqfV5q71opV1y3xNUuPoYZebUhm77tmvBApCMGGCrngUeG6Z5gV2o",
  "key24": "5PrgeHg6VL58YwwmTYpiYpbFNyk6AKg5B6NVzWquApziU2Pf579MNpLeZGc7XvXDi8vUue4KKNPvAanVwqkShx2K"
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
