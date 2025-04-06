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
    "3iQrP4U1EotCVoAq3cgi6CuQKmbKj47izXjRB8ectkvfnSSRRrzUgF56L6JHmMk2x78NxxoVY9EdoMiNnjs34Lx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jJeCxK6p8V7PyTQwMY7KdFQep9xHaafTxe7tB7dq9cqrfECZ9ocXoSRYbeQNozSvmixMfsot5PDeeqMfHUFTHGT",
  "key1": "65uSyrR4CiE5VtW1FVs91t2KPMbwsfDfnPWDzSqQXMQfyhzHnT1Y33UueBu2DESHYijvNueACFZRzwyaPEXjXiMr",
  "key2": "2VmoizWrz15BvkPHT1sddgLCn9vMYvR4UNixL6JF8PXSdtkVTa4r8rnSXegEBqp8DuJ42A3qxN23zu5zQWQZr1dy",
  "key3": "55tzHwh6JkJuUtm2QyaZH5YWioACtfNYdjBFze23Q5iSSZRbBcG7fFBVqCrVwR4bhGx8Tz4kANDMNtaAKibEWphv",
  "key4": "61YdcYPgmQvvy6a21LKgSAH9GUbskjoS2aLRK3nDpXefqGRgNj6fJL2SUjMdEZwjyBVyLUthdsgXqS66aAo5t7Xi",
  "key5": "3hrsyCigSh2jQRtpEmtHGrQqrSSx2yPmWmADToVLma5ma7c5t7MVqMnKaxfg4xmey8LYEPbUxsLnkfN4qLwHVeT6",
  "key6": "2c7B4YPMhEAN6SEA3gs6SoxBBPgqi2PQmVGW7N3ikpSQyWeRKjSoHgVvMjvAijVLLcZr9BuJF4NqUHfUAz7Ae1ar",
  "key7": "njy4KzT4jxkY5t16JgaGUgUboTKQKZ6YqEXALkV9BdSyd2U6TVZjEryfPkyvoSTRoyFutoWAFPYqMhQTJBAde5o",
  "key8": "5Wbi4B7PbpCKJodXCypnGGBGgWdYj6Bmcs5Uzmyhu8t8Y2w1k3tG2eDWSnLMtG2VePhCTR6W1CJNz2Huiirn2c4n",
  "key9": "5r8hmwZBoysKhCYR35oam1MuhczJsGnSpG44f6ncLg9MKMkXtSiAqACfvhAnxCQCym5tjQpnjtt3HVZPzTSxDKSK",
  "key10": "2dLkkvg59PhHV7UeBJm9i1gfrUACCJGp3SEZv2ecRH1nraXk8qJr615HUEEidFdSQcQdUQxn81cJaQgpPnKgDMXy",
  "key11": "5U22yifwzR5pDNQ7y8hw3aZgRCTk5KaBxgAkWEcGYuyyjvFN6HfAr28oER8kPk9wmkjpJJVwJJ3525xNF4BkcY1b",
  "key12": "598NtkXigtnkuUr295hPZUMtZyDhzBNWTcfpxUwVopJ9h5LbGSoLTeDeGUfVFxXRwdLcGorrfGgLVDaDp4zDEbR3",
  "key13": "54yGyaHLAvp6pZjfvRmiLSch7ktXfnypR58jbFxAgqSpwvuUJvpBTkh8nBTMNncKCxMsh4Ai7mLB75dZow1YojDU",
  "key14": "2WVAtr87JxhcfdtTt3wMHHtGPFpAj142Qb5Xh6n1akHwzDC7c71ouuJScqp8p4EqoWKjvvXRXYA2KhiBar8RiXKj",
  "key15": "W53pea9ivVThvCMXUUgKxV4ywmzHHjq1tguWEk6qsCA1Gw5LgZxFmiazDF1v6HEEX6RBPq9kS7AX9Y3QS3S8mWZ",
  "key16": "66bhkfQX2JWwifiRXnMiexELznR8XEKnFwEHYfjpYmYutTErYRavg1raFH1nyfKPQ1yBJPhN2uWg4rP9yGrM5x63",
  "key17": "3KAqqRXy6xHud3y27WB83oZfFiLZzeHVKMJ3QSGkiQEki4E5m1RjM6Yc1GseuWf9oyQnE2Bx1qVrfdbMFkiPuWRP",
  "key18": "2AkrzM1CjoTAVgsyp5FBQ7GeX5Jj4L3RQ4Ry7yc8AqFuJuEu4f3m9prmiXy8UfKaurMHfiC3WbYL4fpk6HjWpdx2",
  "key19": "5R7u1szEYd3GkU1HvxS7MbCKtMLJEfk4iXTwmjZR92YZ99fF83GPCBgsHVYRg26FikfBHAmman2b5AKkoGMG5cS5",
  "key20": "YSHSsPwPkedX2cnPwtWwqPQbLkCn7XtDjXL75tuA3XKutTEkqVrJkeRwQJCMwpPtfSRj7tZSgpgvd9R15CpZeRP",
  "key21": "VYi8EeyryRFD6Fjr8CDHQqKa3sLBe825UxswAHv1zzgyeyLdMCQdLQ6bdmjjt6sp6Dbg8hdRK8pUSnc54BZkxSP",
  "key22": "XWQ6i7f9MoJaERAS9iHTg1S7QLXNXuqK8G4EsfLj7WAPE5NdjJaNHRst9S8r6AUwvzimc6zpeL8VdMhrufUfmAk",
  "key23": "3W9jaRR35Hc8fzsPo94d9dUgaXcScHbVcL6Q2NPuAZkiWNethssY3ppVbUepCaW2SLqP3B3ZENxe8TRkbLcTrVvw",
  "key24": "2zGiJMDZPYPznJmDMfEcAu8ekT2591YPaJKm4Tqw2wGFCdGY7maoJdAs3jf4MKn3TvnmUv2XoKbSmLTiCDUUJsQN"
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
