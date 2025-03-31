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
    "2DKeiResF1XT9HLMY3rnKazQQgHmAmKxaFnpWAZ9VHtZGVtkzoWhiPdF8YkpFEv73okLYLajxLPk1kGSXCvzWwaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VnNhiK8DMEtzhjD239Cp1fRz7wTS7SMMtT7TR5TE58gzeR3dkHZD7qM5LYjmWYHBTnrsm7EFaXHQaKduRhK5gsL",
  "key1": "tjYhPT2L1V2pn8tyfodRdPJCAjvjTGgUnxRNDRGwmaKsjHjXQXprZCbBxSKhMywRdbXyL6jCmrG91tE2JSfPPFg",
  "key2": "34j1pLapd8YpXCPwgiBeM5p74ygWGrKtVssfxfpNiyfwR18Nxg1yrfWCQyYgsjURWo5E24dvAqWZf7tMLvVZdUEX",
  "key3": "2t1HSZs2B96AAPhU7xexEZH3j7hEp7SaayKviAE9U3RaUJD5SjxhWYDL6tjKhJW6PCRMeRBZwEFRZoGVt5yvYe4Q",
  "key4": "fQYfTS6nyTyB98SVp1krN2bFLx5i4MNy6C7FwUiaLmkUHWNjytugNoEheVFNpcFAjX44xxWdRC8rzCQMe7CVg8H",
  "key5": "3Jd6eVKRdfq68uzfXeXg1sGjCGJe1UDY6eih1iNQzmsZVKwg868CTc9x3R6huhR5NMh6vJRD8tn7kzXsHinoN7aq",
  "key6": "5RRtiprWxf8UzBjUcWd3BGF1FtNsfNGoYkYSu4ggY28RwgWHrdTyjcdYkBG6SzTQBX6DVeGzpgd2kAQo1JGoVH9d",
  "key7": "2fyUnY4G7SUxByGUAzUm6Pf8z8xiSCy7bFWCsdJdESWpHeHaX63KYsxtaLvG8zdEi8bBgQfFDNAfDiwcisc2wkCQ",
  "key8": "4eubw6Litr8nrr6xFMgW5dfKuZq5QAfuPnE8VUmARjwonDJXw3ismDeeDbTZXqUajE1JgEYkxCkciXa4rhKabZ4Q",
  "key9": "eP5asSeum49Cn9kdBnVvPQ9hfbFWf8Nqks3qhNUnurjDdMpkqwQ5YKWqqgbNVGL5UBFoPnJDXpz8nkfe1z6Rj3B",
  "key10": "2JmwoYSJBpijNmy57yC8rXWCNEYpzig7vZKp6KdYEL6A2wz5cBjDMDyRXiDJ3PUTM4xvawzKG6JNjkDdUX6uiSKt",
  "key11": "b9PJLx4NivUVF8MDE1QrZdeeysqtXb2yvnQXb1oc7tVD1SmoGJFhDhsW8QvcBoY2fvnihkdnVBp99iEw3evCUkc",
  "key12": "2QdL4dUaHkQBkyFMxNbWN1m3yfTFkUPhQixdvBw3ZceHozV59MbEFmohEeJiZuoncau9vMSEeu4R6Mrt4U9Hdh9p",
  "key13": "4bGvH7qhbuZwr8mcUrRpsNvhqs4s3V7jApMsqSBkbQudHKjszHDjTomJkes1LCy7mx4dXqRhJ7AsJH5W5YLenKbY",
  "key14": "3bMdjdFUW1NUSLLk8B3XkvS9U77i6Xv85ByRJ2dJXTJwToieNurDT1shzfQbxffjFPEY8L5hYgCvt26dpDzqtoq",
  "key15": "4v1Q1ZxByZLefxGar4RUUYBP8BFPqLC8Ts7Q4hAutp3xwBy1k7gFURGYdzKzGyazhm1XbfSr8ToGD86NwDSKtZbv",
  "key16": "57CXSw2VLwxhtWvgN7ZekmncFwdfHaFoPsCYbmmWXeNcfqvJB3hindafnruuUn2ycmytLHauqB7bPbx9bLLPiH8A",
  "key17": "5NEzJriTwxYwCReU1gLHH7sqFeM2nNpPjHzA8aoUTWhkcQQPzdZN9Mjye7c5AXkkuYCedpEkZSv5Xst4yYoRsDPB",
  "key18": "57pZHHPGPdjivR37fuayTFxqoyjAvi7U6BpADxY1gn287gUdZP8aVen2jGN4xbezWXNrRNaoqexpBXZzdgp2nZmg",
  "key19": "4nrVzD3b4A5usSjbDJa8R8DRwHygADRbGUSPkfyEhWSi7ugpjZtHTm65kkmjuiYLueVxaxqx6b7Ypg8Vdr4b944o",
  "key20": "vCDbdD7he2S78KCCaSLwBJ394go4dYjmmtnx9yLJL2YYDMcQbdRTavevipnVW9fKqge5Se7aQNp8Lx9whBcsqhS",
  "key21": "51oQ3xVhoWqiCLTcZiqUjarzF57V9hoCbB5QaWHvZQ3dvKbj6oEEtkkghekgfb3W142m8h7FudM1BVR4MVVXYbqM",
  "key22": "2i4iYUvN4RmUjxqjELSgNFR4rCZbHkpL3zh5CxUvtJCA9pJwboQKtp5yQYkpeCAU4ujaCFfGLknYZEPAR63qbqnz",
  "key23": "57jocosGFf6b7HA3AePMLe5y4P2F7vgRG1pQHzipHiAoowsdkUoKzUVh9m7YqwgGKhPaCqRLo1K4uLwHy3YER8gP",
  "key24": "P1BotC7YLchyBcsASkLXgdXaLs8B7ZnCae2y3QPL2LeyGseRQcix4TBimuHfDxkk8VYE8dKnBRujgru74i4S86d",
  "key25": "3ncWwa7HH348wnokSHX1fVRqY3KopDZGP7TJiPM5jFDh6wnoCcYkjx1qysrzy55XzR4LMU8kJf1NLwTo36nLVPwF"
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
