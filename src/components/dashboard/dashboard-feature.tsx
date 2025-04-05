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
    "2qYq4zGJjzCiS4odd6gLvD7SxaF9D7CTfJ7UBXf52zhycGyHj9BSi5kTko1Mr4zmMA5W1hkmXxPwQaSkPWHoP4J6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rKwK3GVNbE72fMrsmEBLwYJWFdgYtfTWrkJKm6MNWsWub5dGTVmxAcqz2FYcxjXa7TEcEbgQoJqGcozdjm3s3gh",
  "key1": "4Se51XkhecsvDdJTQcSjgbPQbzMoDqje2bq9beLoBkR3xnDqfNqvDKrkAYoj25qwnv3y6LaXwSV5cqFrcTdZZCiu",
  "key2": "5s44ALQEJx3r6DW7sWbqsJso9SCvvsqdpjqNfaU8eKMaq2ZKTjo3Pkjf9jXA4K5De6dCkyqoZ56nxCBD1y4hCwSX",
  "key3": "VPn9STEq4sRVHfZFZyPfKFHUb66zXoW3ExVWmMGMLCBSg21JZ3r8R9kUvNT8kqwyfdjiiSvxuotVBSG2Pf21Ny2",
  "key4": "1EskCpoh68fpMWhqFe1X4jdyC2QKNcvHjmwHk68n6YjbWUSPmYWvnVmJnki3V2XqXzjuVKcYWqKJufckkX6SxCo",
  "key5": "gL6PCo4giqshKDezh6oocDtNVbyFZXdMN2kpgDJHYykP1v21eCrBEgfydHzZ1TweBH6JVxuPkd63wM5C97Ucrd6",
  "key6": "2ynevgpSqpFvGZBGpNoRxfLSXBHvMw3epyzzHDm596ihCMjrcjzz3AHit2HmiEk4aAEnn2kFW8KWSmWJo75bxHj1",
  "key7": "3j1JNgnPhUKjspj6d1jR9g5JM7nJu3GbxfpJfBuXnEpGcaMRifWkzn1CGe98Z7BsbAHetNvqKNh8i95a3UHFo5HX",
  "key8": "5uXcVGYc8K5hcpAK8ERu82McmRY4Dc1QgFfrfgW5nNeFRpQp7L9Dq39sgr5MMqiqC5Ki5PfG4uGXFgg4fJ6p1Vn3",
  "key9": "2LcamhM9USDF6EKZmBL17zUjPec2HGmUNhjU1cVhRTkx3gWqN7kNBSV6KkGdznhohTQ8xFxZDh8qd5xvksv9jGAD",
  "key10": "5xEKJGvGBFMgkKdxWiGNzPr73AhCGmqkJyUb9bDJ4NsVwYxGQnDg22YayZhBQZPGuJMwZYZcQiVVYhuik4A7CnE7",
  "key11": "3Z5C59pgftW5wHNF19ScesrnvDoRMb3aiQQnqTmoTt4GZdSafoJQUB2ELGDgA5VkKaNNFcuyQx9WN1j9RL6v3YGL",
  "key12": "2mLSkXQKjb9RHQMJujGhWHUHr3Jd34oeRrSzru5Rqhd3FioywWukcEq3sb4Do44btq9vgpFL9r7bZQmRHCbQRrKu",
  "key13": "2BZzBYwxjmQ1hecBpcc2S5ZeDuFSJQ79X4ye9ypMnc5SVaeuucHgQasFP4gSagptEmZqQRbMz9TsywquZJTULjr8",
  "key14": "38gKXNmQyYXc8A8ox8bZLmNKY3Mc8VciVpCkGUFRay59mvb83WBfQbRnN9Unv8L2XK2P4zw1tcYgJqm19gxHT69e",
  "key15": "5kbZLdnTa12sRuFD7HNhoY7QNbg2u4zZRRJX5gs9VYeUm2Tgdbx1EY3YDQRYWQ3yVXz9xVKGPc3jYLVLYrv3tfqB",
  "key16": "5o2RzjGqsdqkCfoWcKLkggDnEAQBzCXyi4FGcHkEaPvWNyYmJ3ZuVfWpzE4YE7uhYnmD9sbmsgq3BDUSs8jHBWe9",
  "key17": "tr43XRntTZwtN3boYtV6BVvdEwadUsqjXbt6R5CUEPM6KcyFzthUS2tkrnVuXvHerN64zFYdSrwgzguPZeHPsvW",
  "key18": "3yLeRTVVpX3v6PSSJzzhNaVMJG9X4MQL5E9wTHZChTakh9ndGUhv3GuQnM1sx3i7HfQAed5SBoeGFiw9NcgFZawR",
  "key19": "5ZQTQMvoPTfXKuNVeDF2cunPtugErkcLU3T1TQAMiLSM3ZyjWsqfExiLVb34BHZhjVw4HMhc54coFqg8MUDnSToG",
  "key20": "4VErRytPbyxFNkcEZ7dKSuwjQkTj6ZMZSHns728AP3WMZnELtorBTgCABTeSGsuwMuroK2XPAkE7s1FKPKVXQGDW",
  "key21": "4GrtHoN1LJpmczyBSEhLqnHHnmdV7GFa9kF4oadSfxUbxriNFEEBu2xEpELrG9nPsSfjPFY5QQ4M3LmKPxZad1LQ",
  "key22": "TM7vo5vy9iDFqWCMtDnhPT9rAXf1eaomgLUpseGVkAbcxoDhDoYcb1wiNoXK2fyVm7jwpDChpH38S8hkxLvYUr4",
  "key23": "afBkKxKq5jQQeUHY3p575uT7Mmv95iAxGxyLcRpv3pzb6Wgvu4Z2xXfU5A5c9BYFBv9PVXgBvgvn7NfpweJT3M6",
  "key24": "36Rr1BBM7V83QhB5HLTAwN8gN4Y7iAZ5Wjp4h15ALNgr6CiHVBEF42kUWMQxfYn6VUhpiRzSrjnSMxhHoYLCZJEt",
  "key25": "456xesaQm9q3h1kSTMUT75jUVmNJCDgTbQgWDV6nfMrARAPXDqqKm1Lkx5aHnDFHd2wHeYAMKKdv6T6tHBkvzhZ9",
  "key26": "SusZxtbwoVnw88nLvdVTJTASDwHqH5BP3j3NTGaaXpGmjuUcgYSSMYyj4okc7dyR1uMzHnTQXbgTkw7MuzGyzv7",
  "key27": "3FXpZzPu3SbzbAfF9S1z1274NRVT1qvqGAwQSkmyPqPnviwnKfdeBsjGsWxxpUskSp1snWAv9VeFdy1mk4Gt7yo5",
  "key28": "5QsFaBKptXmQKyAXLHDXJ3NKbVakty1jJr1z5oqpUp1AbzrbAfTWpVU9718tuxLLJkkdPmQC9Dfzs5yU9YBHQ1Mf",
  "key29": "55DrCCUCBktMoeZ8DopfZah8QK6HzaaYVqMRrFwfuTSbacizGXptui4yuaF4zJme6AuDgARp7wrtDv3c7BrFjZsy",
  "key30": "Xy1RQXNUuqjeVFYfp6nz22K18RfAnNNeKRPzTSNRq1TVjrNHQdigCT9tyZKa3X6ofnZ6sr7mhiEwbwPVZXZzC9H"
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
