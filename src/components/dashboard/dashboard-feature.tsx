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
    "3ZzVFXwVjvk1Z72AnPMzhQYUVFSYRiqbeC751Kx2nzywfYZCmNXux1pv2H3SVwg1UehGqAzkNKBUt3RZVsmB7nVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AdpY1VCVDs8B4BEkuNc8mck69uBqbAfegPpjzfhA7nypw6cLJmG2Y2XDdarFrC3DZP93EtYyNAqm4SJAbEEp3U6",
  "key1": "5c2gMyEZe2r9posmDUAYWkKVbJXyvxAPfuvu3g5NMTCn1Ejz6j3huSB4ZJkZBGxTte4DinrQJBmRDdHD1v9i16tj",
  "key2": "3ZngzmN8Y3R5B4Z6wswn6G2d3DAZjzvzRx5CVWRon8sa9y3zdbq8R65X3pMgi9SL7FMeM9PAqJMa1sQxCM9Pw9k4",
  "key3": "ZVATBtALJa43MQoSyu3yBM6TXAyhmNG2yKaeSpc2tvz5Lt5oWnsfez3iVg5PNVHh4k8ZNCn7Y7S7EFBQAYJmFHt",
  "key4": "2gXt1DkDwAdgxrNJxy3EmszG3h7nQmKf3mmNgXfbAKXyE318dU9rNqiLFnsJmP4yUoSa4qBgLjoZp1CvfWoxyrY5",
  "key5": "4tBhsaieMH5M3KQ5vxh9GsoLipx1W3QwafA3i7NpeLn2hEWzamPHxbe7m9J4TjycB6yJTc1gkWNreaWU8FTR9HDu",
  "key6": "34EAhukpme9pk9MHTZuWJsLhX4n4cLwZsR9At3kCj2PNBEEvYG2vZ2yDm6XqA3Je278XGMc7ENrbzzpdkarhZsEL",
  "key7": "3Zq6VRaHHrAXXTFo3oK2G41Xe4DRcNWLZkbwpY4AzrnbWcDT1cdnTxVrNK6G8hcGYAX4riwsAZf5Rree5q95dofN",
  "key8": "4BnQBwczyLfAJx8qAZeLVhRb8bvTgrQoF6s4T1wnUtE7M1bzHzjLvyYV7toVFrYxVDiEMn5Nmbx1zdcoYng7sRMz",
  "key9": "4VMbsDcrkG6gZRw93Ez6mbMw5VkP7botfqKXRNVy2RjhWfnjKWaJYxZrWNmMvMP4Lao3ZrmRuzADxuf4ZRQps22p",
  "key10": "27nXA8E3N9WrohtxYv5U3PbJkPNj6MHUMkhQf7L3u9tc7fEFrLNdte3Wvy2LpFvSJ3rD8EGT2yt3FcLBXUDoqcoM",
  "key11": "RKQVKKYPQ3oRj6SdkwkJuDPtNVZX4LUoiThc5qXvxVpooWNqQZHtgeJpCbfaUijPza2v4HCpk8pitZbjLS3tESu",
  "key12": "238vJDRP7MYTHz6xaXKbsLKNqaeahXGCHLJMuQtu8BUzyjUPw4DsyrLAMUNjH6Djq3L7SJK3QLFvHn9aHA9f9nPo",
  "key13": "4QtiG7Hg4oeXdDCXKAFxZBRuqzfcpZrc5WfE98XXrk36Rgnu4eC58xr1cKQyuQ4HcQsuU2WTELzZ8rmR66RJu5Ln",
  "key14": "4JnnnanTY91BYebi8fXdWZTbRk7A2adLSn7KnXFHuCQEWQ1YBniNVYTdaRtPZuK6CNcU8ZSc1UwQYTZbaXGx9Gt2",
  "key15": "4D6VBpXwrxupb8yG9WhyQqjt1NmqfQnb985keXK1NNHCT7dUm3w1eQ7P3e6XVKLbCn2G7VeiKsMRc4WoQTvMxH48",
  "key16": "3A7tjQh3kFUnk4rgRiJKXYEFkoPj8vu97LnD5GVLxknMULkCtN4X28z3a35pHLctyMZLGE7oMtSAJ4Qpy21ZZjhw",
  "key17": "5qR2n5UsUDPzSAEJpWqPLTrNC26uVAsdTWfwFuMCVVkLT5CHDssVato8PyuXLxVmPm9TvohHmcjrYsAiCD82uXAE",
  "key18": "4S68FeUxG8jzxZgo4eBmzRJCmor8Dk2yFWBQb1e6VMAXGkGyhyLhXfoTR7j7oAiR5RbWRwXwXti4GWchDnVMRrTa",
  "key19": "3uQu3XfkP8hKafd54ALW8E77pJEJ7H2zw6euMLJPgA9wqBaYD9gjGnJ9PZzUxKYNSzPgBcb6ufyBQUtrziWC2Hhe",
  "key20": "4ktZjhhyn8ytrxd2bEED4MzqM3xbz697sdSJ2vgXjwN7P1gjeEq3PctiCWJoxUaoKv7RwghHkHSfMwtoL1eRkiht",
  "key21": "5hDhev3NNZfnbWu9sctFnJyCQ39eC99tS92MWAGvThU4GtdrZS2zjNMKaWj7zA4GegMuqs9FJHBrz7q3QgR6iJ65",
  "key22": "5WqhLhf1RYjsVsfR2y5LCfdYRjQdV7ueEaqnWuoCXLrfkafr1TEDShhRPSRcJY8Bv1H8s9KMTqkBcJ6ysEW2B9GM",
  "key23": "4hPPw8HEKxx4cDADq3stb4CTDEPyqUjZMUpkPqLVGvaNwbS7FBKgn1q7bvThSSxyKuVXR2qSDra3EWVkCR7PGmmf",
  "key24": "TKY4mV3E1wfn8aqyxdaiTn3oGgRdAM4hyU7GiU1oHYDYFizWnBs4EeeZCeQ7gAdzNHxFdQjn2Hmc5zpFycs8Lyi",
  "key25": "2vtznNwSaZq5UieYdcDuXzgPwhiDu54PPdq6wd29pi99AtxbSjE2kJjDbtzAMTS2aze18kz3cKg65s6C3gToiWQ8",
  "key26": "3Uvc5y6vUR7w9rm27xyujjDvn8Q1iVQqkvPPLSoLnZfWm5gj9fUzudDfDx3nK7AiRZWj31rpKBGLWRvfKND4k5NZ",
  "key27": "3yQZ2j5iRAKW8pqxFe72797fZBJUsNNxPYLHUFY4zHfrubeCvCMmCwSLsE9Sxk9jdRtZeVZakuVLDTdZnGjrnp4p",
  "key28": "4zpUfcDaGQgGTCkyieQDH3WfUfdeZKwDZFosYmBGQFsJbMKkVHfdfWg1Bm9LdQjngrStcVuKZ9nzYMNSg8LRHMts",
  "key29": "413ZPAGWp8VXuZY3UEt93GdcrzeenVE8Rw51S1Aeqh15nD1xZ4wo894QVTYq8J36amixPSfEdY7jShCAzTZpxaSY",
  "key30": "qzpV7Cz66J4NuywKF5sKQatarwKtdLt9wXqTR4gGameLnV8DUGW9XgQ3nY8JwKXoEfuupttUc1Wpk2UFxxmpcnM"
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
