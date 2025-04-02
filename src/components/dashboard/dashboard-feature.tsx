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
    "47hztMor3rf7r44SQqNywsT8dwJBZGmta1Q3MaFUuim3iV3pMGmudxbrx1vZ588u7vwyFyyeU4mKjz3QcfgQCP86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wc7ZooNNJtYfskcrXDZRovC7urx2ig3fQpiMKNbyeqKhQ59qwSEfGq41zS1R6ZExjmUbbppWLy5sjY6om2uDkok",
  "key1": "25c29UqrEXpwQ9bHaspcYpbv3wjdjQ6CWb35v3rQWfzCoMzMp1p2yQEe526JWVNBfjFaUoSR5oqabd4827QKGSQw",
  "key2": "4QQdfWcmx6WzzUtn7S3p1BrpQcdf8VSJp6S3prXWqeoCfEShEB4C1CshzQ3sH1nx4jhtT5h1nVcjxXYfvfpXttm7",
  "key3": "mfKg5uJahhwsMeQYpaSKXaB5LaAMpHZJXgo7cXkX4wSLoH9wVCKXFNLsTK9NBqM9HsEFiuZhCPud3i7iyxGen8d",
  "key4": "2AkZ5fsYcEmrehyfyRN8t48AamKrKz3dC1tyMDznCEmEqpRcECmtaYN9GDzEBGGyjv2C81H69Qq7zzbK55L2u9af",
  "key5": "2XMaXdWET1UFSYBGQcUqbWa85kNzRxnqYEooS7NX9xahosWiChf8ztNzzqwEZi4etgYFLnPg2BNKSWoWKFWVx4JF",
  "key6": "TKLe5ipuUEyGQdWfR6W71WPgYCdSPPuyNbQ2zsqqgFBwKoi7dCYT5W7B2sNGCCsBmLxgibbh3q1eKfnxzCdLYgo",
  "key7": "3gRVZEguSn4F2hK6khNDXHF7U2FCnknYtNpGTrK5kaghjM8CCecCHhvaV7mBxF4Ah1GVJs8RtJj5DZigGHymHSyv",
  "key8": "3N6Y9kswcrQRNDmwCBesrqRnXWg1huZiF9dkEEe2z56Wbfbx3JbddQjhAFCh1d6aGUQnGPuXdPAuH7p426zWaR14",
  "key9": "5MBBv65VLytQSJfW1stnM41xKA4yiujFe3fyF2S3aMkUpYJtSxqkJYbpNjkBgFbdqj8WgqnviWT2ZuV9q5DF6h4f",
  "key10": "43Y8W5qrXQBVx8YLZBUngy5DA4oH1Q9XLzQZCoeVxrTmw1X5N6JJkV3CxPfKqrZHRPkhjkjBpGBxabC4a3GWGibG",
  "key11": "5wkEufwGfq6ySZPwXQEmtNYKncmKiz5hp4YYeX5NwnPmF9yKzLx7kJPp1FstfHd14trSXCyniHvufGcKEvpANwjx",
  "key12": "3dJTuyx6XBXRGfSaq8Jf7aJstgXdTvafk8mwDpPY2Df3EwMAu9jFNQ2KFyDwdv5sGibLSTFxfv66hNVT6GZxc3ye",
  "key13": "jRDzMkPjwiFwCXtTYk7vfWEFdKmP9MfmBRCVXNf1D8iZ57Yv7bCgncFKzBWf6dyiW8KHSs9z4Kqw6XwvbBPXSb6",
  "key14": "WbCjRhh7hjPFNgVFQQQAAnpd8LBWcFGgT3vmYq2yDpvcsQ19bexjnbrTijw2ChNB1VcAoG3vreuwWQDdkkPmGMr",
  "key15": "2JRrxjHGzpf8WkR7JfZo5UUGzx3wdyimagWNHdwkEimM9cTMmPf5vFoF6fXxKG1qpYvLU8PZfUR6GfGojpwQyvbv",
  "key16": "2eBsfAbiPeEgTXHJdFbnypzBqcdDuCXcZ91oEU6R9EbJSfQCJMdG3CgLwpaHKTALNqeMCsLaD1BTPu6MfMUxmFne",
  "key17": "3hbuXt81jkdbG26KQqn7GnShNTpAa9Qw5QeTxV7umEYRt94L4uBin7SJcu8hNaeMVrwaNY97ucbjXK1RVEN69ySP",
  "key18": "3bK594R8yrVyTsMc29BySFugzz9yxGs9HiBS6Cv6b92P2dmEs2pQa2wEp9JaiHn6aqnMJyRMJTMDMbHv3QcQHx1C",
  "key19": "4BszKVe5JiMSeWtzQiaWisxPG9ggVXguZzjDBQAcZWu8qHKmJQMMyDnn6AiENgdcrwgPXKLUWijDdRnspShmyEdh",
  "key20": "4d3yTb3PkZRvAmnTgTHo8Csq2cExheu32jY9eyENRFZzjjRoiGiMhVdu3cEZcZzDd3zC8TH2hzWf86UJFmA7XB4i",
  "key21": "LEuT5qtyhaVFDGb5mXx4Pj7nuMg51ERgdSTFSqayL3SEuuZTET6C5cZoAakY5cM4L9LSqPBzrSyYcKsgcU1Z5yi",
  "key22": "3TL1J8AZaZe7PTDdFkTHXAjASQik7pY8XwnSiu5FaoY5Un96vpmGetdWTZF66dimpqZLc1htRUMqhALzNGWnTjLQ",
  "key23": "3DyjMrUFtga1bcFPNjDUK4BbHQb2WsokSsRjcug9P8rV3aCmAe7rtJm5c5Fp8o8goRrchpzHf15tb5XUvgpiYny8",
  "key24": "3TfJ5gtCJNsf9dB6vXK27xWDyxhFqn9Qm6vEQ5VZnuTxm9SR5FNH7o7PBdeXT6YBoLSDVpbCwyxdY6oXwLEKp8SE",
  "key25": "5Qq1gPBRWkhhZQ36xXyv89ZxsVfss3P6JYG4joyd8oKGLpLzwTy7A39njBvS2TCaK3RoAWevHNMCgyrJhj9f13aA",
  "key26": "2JCo8hvfDVXQBTsC8v3TGZhtoCSNXYRbc1ejfW4hg96gsLty1ojAWaenAKKgp7viYiXU7HbDrbBv83iEEQHBoEjt"
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
