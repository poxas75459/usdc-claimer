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
    "336i37gC4xYdUxRa3rSQD528Yv3C5nYnQBHzbqWiU5xsoJzKcokf6tvcQHfvYJVHKXyZEAdfNtzgqTpRi87FfCXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aPioARP7sU8hDjnUrTQT6w6qHxqQpAyVjyA5dgqtiBjYep3scjFA8Tx5WqWPT2fUa2MrNUjLhdT5F5mDY5f6TY7",
  "key1": "585H5TRWSV4rNACsQLrKoFjYNcquzUYhj5sfFF2eZDNZm9vZxT1wcDmPFvN6ocop84Pmhh1xYBmaoCgZzUk9A5vW",
  "key2": "2LZkPg5s1xEzTiY4g5fGozgDZvm6Xdq8Wpwy7b6YdxYy7QdnD9uSFBro7yKqFLYtffocxTfM96P28PKQCwZt2srh",
  "key3": "3P8MYJDYVxHGwxhsuYJmgTuPywTVws27zzXapwYkueUzfxFZbz612aPE6EbNk8bnFWDJL4u1gBdPpajZNA9YNxXt",
  "key4": "2jAFQBaxrkyDHAaMFBAJyw8jzzmJ8uCpkMwfQhz1MFohqAzPD8C4KJq8jopHj2SKZbbXK8g7sgtBS13sWwbiA9Yz",
  "key5": "3jQgMSP1yihvVDEocDxThnneEN7peeDrftnhh2gJf3FfhUfuyujJiiHthWBwA92VPuGxcKLKebcA6Z2tbthBbPvX",
  "key6": "3bq5N5KAVcHYsmRSaRnQA6wevPzYTqTczyRpwsCk5QGphkrCiaHLcyqu6pA4PLVNdAa4izE4GdJbwpykGda8XUGN",
  "key7": "4xE8Hed3W5csgba8zptxsiAQruPkPfeDmGpxB7rWB3j2V4bmPadJGPsNBcWZrUgNhJURwha7zFtULgSWqpCeNXUf",
  "key8": "5DKWZpXcgxnJZHpZ7eDs2NH64HnCa5TF6VQmeRWFREFuDdsuF28c7JDzvdCA1U8xyRYefAQmoNpwQ9aVZemHkr7E",
  "key9": "21AGCWzcYUBcHhVe31mksMyttKQt4ZCvUz93dZey3rbLBAnrTpqhGjjUrn8LeJDn5h2iupz2dK5C33hkvF3iuxBH",
  "key10": "4r5xLsBrZ5ozwsJij1TqbjGhYrfvtgTLQt8WhqDad5FauDGRoJaXJ5VppDaWwLkA8ZDhsG3asWEkKrDFT1a4rnqV",
  "key11": "4B1ueSUFb2189eP2JGGfB7w4xbqRixtDM4zaNH5PSJJvpcQMV8Qo5ufbXN8kuQDPu7S4QCW6VQdH5VogWSo5CnjW",
  "key12": "2CrV3QisxMuqumMq1ZgQ4myWGAvSMN8MapiFuxRek8qZmrtxMEbdprU94qnJS2ZYwwxNeTdBVJLhvyCvCNjvANjb",
  "key13": "4H5Pz2Yn5CDWGQU8JnR19uZBh4xAiDZWKDH9ie8YS4rmfB7j8tJjzNfqtHRpwCDrnVvmUpq54qnEs32ZCBLSnqBy",
  "key14": "2DdHvZc4NNeYqLsrHybrr3Z1JDBrpYGP2MNS2244wThHHKbN9pW8KZDuBxWbuWiWcayRiXE3t3qWHbkXp2qff6dW",
  "key15": "5DNM9toT31MbjHZoSw8RxeASFTK31TbT4tAkN6NV5rSFSgbEemWVNTQ4PUZ31cgzWH1kpgzo6LZWTVnL1ospXKRZ",
  "key16": "5R3ZMBpJXxvDrbARdvn4tJRYXgHeE6JjWG3EbKtzoUBKng5o2zXAouGiydq5x8HDYcGmyHpHQXWuUt1PpR69oRqW",
  "key17": "2r1XXUDoyrPjw5WKGMq3NvAXv8cetZp4DfnPVMu8xVp4BCGQ3FwsvoXL95GXoP2iJNywvj6QQaHfbcch6VwRCkov",
  "key18": "2fABYo5ME5QHkXXbyEoB1pcfL2ghFoSyyVBUJNUxhqmX4tvjGCCT9mEVX6zCXdJ2AMRBhmaRFk6oaNeeeMxW5r7x",
  "key19": "5C34KRCkFArY9jQnZMrhFc2pm6jCzPTEaUZx37mMw2shLEAETtg32pceiBtf3LiLjJeNVMnZgdgxhCW8XGk98v5e",
  "key20": "QjvxsvC8Zo8ShPaqxouHuWRDn6zVkeMnU1hp5w3fPq9yt4PMfitnxBUXex38bmcKxW8ura1BmztVe3ccV7k5McL",
  "key21": "5sn3fJUQYNcLehpXh5Wf47tFL6eEYKijBccweFoUqvbkGeEpf7bwee6BBWj2rUKUrqnzmWK4BCLjpR3QqJqLYNmM",
  "key22": "5WUM66sTv5o7VBuDaKtVuvvqfKB3hY79kjrLrmmqLLaQTdJ8bySm9uSEPy4UEHhp8AsDqzMNUzazB32jbg5sVKY2",
  "key23": "41C8MMoiP58HCNeZijQWFKEdMT7AGyvVWJgsTj9Pr11HGoX63frTpG8fgCUxqgJjEswdUpE2KzEpn3gPfvSrPug5",
  "key24": "2ewW3BcnAQ8fkGfABx4fNizbbBRTZz6CkEfo7JkvJqFtheSMcR3xYtXBBSs1WaPTQynH1cXj5CJ4hdHKre3fchPH",
  "key25": "2h93feFryqqYjxmFxqaMnR3UrV37AjgaFLgWKBPtMhgLj99kvUpxTVJUUkPN4qDjYHwrH9T97GHsngHmxAeGaUCS",
  "key26": "58TWbst6BPes838FNixT8sdzMobdrH13vyuXArQH7vMpD2oCRoqYSX1EpUzKXMRiEoZg8kDvKqh1Ecj4YUQKYdme",
  "key27": "5Gad6JMMPz8vtvwSXPqD2EQvDBrxX2EaYntcdEMPFFECVCJENsBjsJUuJDm78Zxd8Ei61skgnaJFXNujBSa41xnk"
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
