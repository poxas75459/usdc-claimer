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
    "2UGhakksnEowDac3TtknRTQwsthaynZdAnQErvAaG9qfk9UxydXCSjfYi8QEiay463UgjVhWnvWQc6zEvukkt2M7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HrXvJiZMowPz4DZLDS3L5rbaFikeJ74GmNxPR6ic9KP1GEAy4yHWArymJ7wdHYaCcCRUkUgjSUmeA9UzoLd192t",
  "key1": "63X1uVocM8SPNsoXzWzC9bVuYW2JDTZS32Eiz65W5vtZQknvAxBuTvcd7TobakxpLSJYsJ7JEqD2NMGQDPMx3mnn",
  "key2": "3By5CW6f4DCE31SNWrSdKLUJmzX3JqTKUcycDjm8TQst4oDg9WcAGtvyhRFvRmQySFL9gpgJUio9ggT4D7gupneh",
  "key3": "4HsDBNL7t6kuUc4STWnPH7NBPRsYwuX2dZTiQjjzGExFj3VVpGkWyeG44WvUgmPqoxC5oNoscPTRonX7s3t3cL4J",
  "key4": "VB1JNrt6VWQBjUEaA8xmEh4JkqG1AnvNrGSNeN6YYLz18VC5C4K9nY6q57whkjAJJTc2E6eAKYFomVDTDskFjzR",
  "key5": "3B5PA4JJMZkTYn6MGTpzyMvZWhp21213Z3AfmD9PgbcZAv3uJCuuhZw8c7DefjWGehknhhSKfJv4vdCpxNwtntNr",
  "key6": "2VrRZFmytuCWmhw9y2VhWPRXd4xbb1B8dvMsTVpAPXmspnztJ9WW2K9muhS5UyizYAHcwhgDeXxyC892gXcTt7Km",
  "key7": "5VzyT2DyDCeE5D13tfLU4WUmiMQbKTheByzNXbru72SQv1ML7PJt5NgKqq4Unkz72AvsqLJySNrrNfWSPsXzFNAH",
  "key8": "5ASP3kVaY1y162FXadt6Tnxu7Jtrch8WBm2igdtYTvMcoNoRrAtoymiLy6gUqxW8HQm6g9fDkQfhZBSiPg4YDL1c",
  "key9": "4F628e2qMZLcrquDr1pa7VHvyGCMHTC1fru5GroKc29esuf4ug46BYdNBvPpYLCrSW6pqdCaBWWSN1FPLKSe4WkW",
  "key10": "63cNNpp9kSt8wKjBeVFsrJQjegacC1YZYVYtjD6pJQzPU996YcrvnuvXTxnb3hANLfjPZ3nudNRZfXoFQeykig6q",
  "key11": "4qMcYAQYqiBf7edzJnqea2x9E5PhR1i5qJ3WCGfCkUj2ByVaMpG6FZqzK5LK7gZcPfWQ5ytKYevQC5HrzByxFQ8V",
  "key12": "5TWRfXFbt1XEamDmQGff8S1MpFMhJ4mpE7L8ZcVsTepJhp27S7tixtkzXJhVwva3d6d4NvETbA6n1YnRGTvRYzEx",
  "key13": "3oHgHi57NCT3b3QH3CbQ3zgbJxBBpwXk6Ybj1DqMPgV52du5ZDNUmadcjCWEkKSk37gSoV6kDAzgWLvgprWLmUfm",
  "key14": "4XTvBK2H647dSLtN78mK9GQoXpsvRaVy7Goz57PQrBGE8XP2xfwerZJKYPiQwHSdoSrgecBhyRYu1aRUYhKzcQVe",
  "key15": "2qTnTy8fq9LnUcpdJk4MpUz2ULXZWcevzzB1VPD3a4P2kjefL3H9qGr87fw4kvAqiMArPRarKB3aFZ3z9tCE4ATN",
  "key16": "Z6yFgLaaTLf1otraMAzeqzUb4UAAZxnUVDzBsYspAWKhXDYBULr7BfeCc55gLN97w3i28B7Nrst5ntkmYvGSFQw",
  "key17": "3GQReYFaBKhAQ9iiVKSKLGqkFvsNqVy3cShXkV2Y24KHLTK3FD7h9kQTAGZpMtapozkcJN4KT3ZdYtnHYzoTuzZZ",
  "key18": "5ia9qCCZkWEGAbFbNJH32trUFHiEjrcFzvVcyToZTvk68EeN9P7HAnaEm7iVszSEiMyLbhiFjEn61Wtr3JL5LL3h",
  "key19": "3pSpSJ3FV1Y9m13XgnUbxoe7mFvqGBp1qboVE5SMZmVmme3Bdj49mx38YEoyBMsvgeznQJC2eKvzg9A16LditJtH",
  "key20": "3CpSG1TB8G6t9oDEz3Ne85JdJQsbJWnJCBEPe6GMRqiTpYhDTJT2NDAaLwbwqqXtinWduYmek5kZkwUCngT9q5vr",
  "key21": "5RNjraWp4LbxNknsw29iiFe7dfhFKGwSPFy1ArEJhty4A1Qu64pbS7DbMdSf9uifpuqrCUwkkSWpJrgSdqaxLi3s",
  "key22": "3NXoy7AYoHkR35KU5yym9wiHavsJk3F2D5gtTWZaTtqdCrXDCmbpiK3DY3WuryYpCsJZh6aE9LBXEwMQMBzYZTw5",
  "key23": "24Fbs8dHSKqUgaxhTPwbD5vLk3pdeDP8ZdkaKqRkRBwFX21Yc7V4RXYfwy8vDzv346gfLqWWK17TjKmRwKvWGys4",
  "key24": "51jrUizp2JLDwEiYDkizSdDxSShVKNtEr4c6sNXsxcXrmrkE1jPF86kZLavE3afSwQgmtP9GyrMTQEu8Xf7asU5m",
  "key25": "3VwWBidf5E1fRgipTdER61wfBZZfLg75viSpdUSVkvBCrPC68QeFJkiWdnEBcwu4bcRvAzEgg7pjSt4QXEjd1tFT",
  "key26": "4F5RHa2fhCLkuEhA3m3CvYFE9Er1uDwvL3UyzmimyXB6yFXd6dhCb4U2tNu57kRSmJRKJGL7f9Uy3sWze8aC4wj4"
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
