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
    "2j35gbe1b9CEu9NgcC4BJ8kKJAHKSquxWueA9XhcgXk8Duy3uwX8jn9s1LcBLozAuhadzBoiBrecmiJhhiqwjDbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j8SjNTdmXKswpPnKqGPYezknpZJF7rtYddrwFBHBrEdM62WeBdC2xFYA3M1qQQymKijUi2jLJZKFURokECjCsoG",
  "key1": "j6ncXQ5qLemJdZwgnDox9LYfxSkZxwZPQkSrkomyHWPLAKnEuZ33X9tkNGuybieUDY83PhbEWL9CSEPQd6uUkJ3",
  "key2": "4tZvQvjwvaGzid8pP6DbvUmVGurWEjYi1FZSaDGjfEPEKzQKoPKaSDxWks5oe3LsVNzSCN2a87R3x7cH5YR8DPMx",
  "key3": "uYWTcX5CrxEN9LnHiku4VGe43wUe3CrZnSnpPRf24rvKFEU4iP8LGdkfwVDEBh1SckzPuZuTsMUrBUcUr4c3deK",
  "key4": "4qYcY2ba7U8VYHxn4ZHTjcw7xHveoCXigtGv2dJpyfoBGeKvDLWywZ6d9GvZz3Rq2kJEedUkWbj2d54covAY28dm",
  "key5": "QfypzYtqbwZJRfqFHGiP4NZ3ZXsB3egXjs4Y1fcnf2bCTnfEvSzqinq6j422CbmWzrVU3jaJHm7eRMEvvFFeJUd",
  "key6": "3wWc1hUso48Zr61gz7fHY3upKpFJyASwznGfMcNXTgQbsn1YcZBPngDfYspcth3rXqq6GTtAbKQb7SwwfiqhcsH2",
  "key7": "3SQ43zcUhudtdC11vG9beBTH1dKSPLSeXC36svfAfU2ehuY6c5UHPrsBEXuVn7svBsddXUby3pp3MEZq8Caq7tdf",
  "key8": "3HAUomhYQJU37ZN3Uw3nA55Dzq53YvDRKKbUte4povT4MjjCQNw3r1HArGgaBuumYtGYCqqmkvXniT5RnFFDRsfn",
  "key9": "2hbkfxEu6hEoUBDd7HnBYZ1GcQm1orniiFmFTsZtwxxEB1Q8q7hgeASkht2EPeqUa2StJPFXvJoL6obGdvYHUNfZ",
  "key10": "61uP3AAmUFF6Ac1oA2fGMvzUnHJhLGuALtDRUYySXpJTvp2mCZQjoPydzwgDr4WTR8RdUYxeT8ZndQvgmAVNhw5p",
  "key11": "53ruYXHRje39sW1kndC4sZFBivx1sFo8LfqYmVxjA4zs2i7EFKQYMqrifntRajxoTmBY1FGgvCYQwenLiqwnR1ai",
  "key12": "5mx7nsXFBzWu2ve4X6AcwGHLdxrZzX1aQiSj5yxEPFmNPxqDX5a8HZXw3tRA6fcgz5ba7y4P25r9kjfSkg3PbsiB",
  "key13": "39S6jcmpo4DiMjALtAWZKCK3vhba9smTiWY9oed3Z8aS9Jgm3TJKTJjiEyVRqVS8inwX713WGZyxaSnjuz96KQoG",
  "key14": "5e9kQEnfhazsmjBc39vQScNMHEwq1edh9AQYZBZFn6PgArdrwTXd34EZJdfD7wZ22NfgC8kSEebsQfJ2akiRAa76",
  "key15": "pNmTADoQiQ1Tv6mRciToDWyUvPfoNzqo43p2NW53NVdAQZbG427MenG5ZHT9MWuWYUZd1ch5fRTAwAc8xNtYiZL",
  "key16": "2YL8gySMcjPo3gXMVstP7S1CSeWkyBgPkrom4SpKKCn3S7vWXEcERxc3dBVGSFntmePAkzbG8iytmuaxwwgi4A7M",
  "key17": "3Ju8HRAMXPTX9cjxYTQhYKtaf5ckerF8djV9uFHuvkp2M27AQowrsMM3NmWpAVvfsmomYcs6LyTjVSCbjkAEGrBt",
  "key18": "2ksT6Jv8CJbKponcrziJhEXmSyojcxbxdKmQeGijNe3xAosvqyywwKMoFSfJ9HXkrs48uQc4z6nJVvCD6qeQMquW",
  "key19": "4tMfQKZYkWQFzNtyHP4X2cnqUwLhg8mYn4iLeTwW5BQnuZgomS5EzLYCfzXcm7QRiTiK6ZNjM2HBSb1UKFm1WbYL",
  "key20": "48EYPcraTjocxcbhqLshz6tNmj9xDZUfcYrB8LomennL4FdSJVPaRAcSgLuyB1yB5CzCQmehjQ83j8TwzWRTfjM2",
  "key21": "2aNqXfqpcr4mdB6YfAyZrbA3AcLAbzZsebhdcfLBLSd1L9eba4jSBZFw8dnG2Bsc4kFwYHSwYWEk2K7QuGYidpeX",
  "key22": "4PKURqazpRibbjmWrc7VReLFdPQJKXdkvwHaECMwvWLngyruktyrMW3UP5isKvYDZz33aWQjB7g6n53vbFBjM7gp",
  "key23": "PDEoS5dv3n2cU8RSDC3PEZPRCcPgiuZoujjWaS8sx6bXojiqFqkGecahPCdu3a3nCkQMbS58hZfj8XShARn6GbJ",
  "key24": "4KUa2e9BaTbrh9fs5MTVwvYUEmXi1hs2YrWSHNTrnmPxpSep6NTmi7MYnCcKJKfn12hTBiQA5KC6X8CFtPjVR3XL"
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
