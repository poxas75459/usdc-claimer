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
    "34R1g3TVFLhM4tXNVrRhpPHX2ErBKoRX8Vghn4zopjuCzwiwHxRn1gqibvjv2PpbfP2YEpCUyCktAFL3b3FpJd1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wv4s4Kap2Bhy45MpaPFQJbkbuQ8MxgfoR6Rwcr6wt8rnRd88cAbTue8t84mYbvNFGGgyBauiXkKVPq1uD5eDvJn",
  "key1": "3zgssw3YwKwLZPjr8uT4aKWCXmyExL17FPjZTUJQnVAJKrVXL2WSKSgDj1fNHwPfzmnbobQBo3ovGHitLMzCr3Tu",
  "key2": "62554Rxnt2RbaY551trq7hbijtmWuTfra67J9PjZRLYhPw7Jn5aWLzQuyzPchU4DAwXhy9nY9wNnVPi5GqW9rAhF",
  "key3": "QnH1vTG6rSn9cuK7HZ7RMYTdwgHhQ2a3VQjzx7JxMcwSAdyGaZfv6kCVhTReoiYQ9B6MsFAgZUix9v3QjBsyQzx",
  "key4": "2WBTDgRqoTRDxF6DYQMb499DViB9LkisKK9VZs9R2ta18PqZzmhLYPskfBX7ewPetvTKN7YjT24ZbRtqWG8CZ8FS",
  "key5": "2sEWfEiVPXstvEP2r79LiKa2kWnGFzegvurDmmSSFKQBnNXbrjDwzXJPindwsy1bBLPK1XkqWQCKJfE4qw3gdq4A",
  "key6": "P6GQAon57ecRbcHGiB8ZpM5oDBC7RZKNoNqAANyuUmNJUqooj9oM37LsrT1vuGvZS3wP5hVXBvXokg66z2WvF9S",
  "key7": "3qiJha7eHMrgpDrMKb9YwrSGse16YEgzQHFKtLF5XnjC43oPesw6tNpNGoKWCBE2sUztSPk7qexbXhRmNc5D1suZ",
  "key8": "4BML61jjMLgBMAxoJiWgj8RSRMG4EPorb9ymfDJtWB5PfDvdNSHezifDfS4frxQqGv8f8L6H1X73AnFQXWpVi6vb",
  "key9": "4eMh4WJb1GXhe4X9DF3AiVSQCgiv9qrVUEPCLgajivw8YPWDzekfZaDGnoS1TZwBBaKPAyn4uYfBeFxXCrh3Bhji",
  "key10": "2uReGYEu5qVZF9xhhS7GbVsYsVyD6uGb5BrLGvdm3xkJ7qiZfzJPwyKZNW5yDw1ir9oJmknrVoEHFYjTqo7mxuHZ",
  "key11": "5PGGiqSj65XmWACggCLAYoPEWjGUpHjMksXX29ATeHqVzF4HkddeT2hFpTYCfsqbVcT7ky5vLsxHRojji7NZMRLh",
  "key12": "wASR5q6jmCmNunMKJrFJxnanngy7CvqMVhUoHjf3ysPBx2sYC2Wqg6yCiHjqQ9kJ73HisUuAmk9vV8NXXppUNew",
  "key13": "5jXHcZ9HNBZCqJZsjcpLoW2UL1Knf3yHGndrQtvHTtuX8Z8Zf9WqyAvTftnwuFJSziQfTqnhaUyxgmR71ztBqziR",
  "key14": "dYY35qotDRKsJdy5pwbc5UEcNTr1qKCdbPA4AV7MRDHZ7Yqdjd1LvyAfQZSLm6hqdGoY7h1xwq1JSStMtxgjPXm",
  "key15": "3xi1mjg8aimNXwxQ9aLRPMySzSZY8r8aQH7PJt1ExhhXuJJGu4HPTWsCcrDWeC6Pr1x7TGyfJw155RMXnd7b3Hjd",
  "key16": "3dHwxg2iSdb6sgZeUgiwg7VrrfdfqqU7aKcEJqaNAKCGxJiBG4DXKwVKXPYC7tB6kRiAKmgEATiwqZm7ED9ZGs1k",
  "key17": "64pNyW4f6C9gfwwgj3aQgf5Qjwi2C2tELVvEiZbgvKgaLUzkqmjjw7MLs5cH2EYYsVYPd11L4oWzD8GT3kgLkp5Q",
  "key18": "31SgfXPJxM8DiCvhB3psa5Bvi16n4rV9argQ4Ggc2frxPMG8TpPDBMWSAmkaZ2kAv7RC9hw5ovewyBCsD39wAmxM",
  "key19": "QvnSFDV9LJ4yEoQM28n7QKVSE4qeKjkeGbQBKQadmjjYx9tQVf4LvG3RCWSbcqgPp6aakJgrh4nLtAmkx6dameM",
  "key20": "hxiRz79PCj9HVQRbJNqrBfXeaq2haVLvF9uAMQ56MKxqPiVbJFEpYkm7LmHjhsZVd1dmZ18Jqg8n5NaWww9XYG9",
  "key21": "2R8RbSLdFSejEtA2j7xF8nK7kx1oDDKVx6ttZ3KmBTUVf2ndRMsQFHYofCe4fBddyGuMUxuFw7kxShRMm1DKxCsf",
  "key22": "31ZrtjLxHraM1pqHZgWp6xvjhdhxPjKBiZpiz5jyDuZs7zPAqrohYJknEffm3o3uA1nZHCawtye5kmkvQ4kN8HtZ",
  "key23": "5YPHC7Y6JBg7pu76VABHbUa7LaXxTm3qZ83EZL9eXHa7dTyVDTH24WujK2LT6ug4aY6rxGfBYrFnTm8d9HMZJ4da",
  "key24": "39pHFhY17jNrYSTkdi35uWH2Ho7xveoyvBjKtwzkchCUTJghHTGkozuuWHBJtmBtuaCxaUFt9bifcz4xNAfeCqdr",
  "key25": "2H5vkY79FuPFK3RDuMY8N4RHiPEXGJGdcBrRVTirVQQBH2NN16ko2T8RECMjEDMdYnR8DZFPTJjbn3Ch5Bhhv5qD",
  "key26": "3XrzhoFmyptG5PzKvNQ81wgMPR7rn6s7DBevzdm9CBybPFYSmBqmiCpTGHM7b1sjuVQerq3FGgrFY7qxszynbUiu",
  "key27": "4EfLwwAats3DR3xVvUra5GUnpf1zXCJZhPu8jKHpgMu66DGBEUHzDMnw4DxwXGT8M8LfZBEjhLtChG9jJRZmJWuY",
  "key28": "5tpKW7yAsDrz4on3q6y5ccRGwzh7rwoUc3G8SpjPwRTajmyHgCJr8dntm7Va29qybKir53c8suMQcJqBu5UywNfV",
  "key29": "5PoNQHGwn2GR8iVeofaoJnoLcaf5ZonT1edZGMEkrgCi3znQbV8D2ELk7Gnu4wHDxM2SSmKczBqdakwzw7usVKuL",
  "key30": "G95eWFousCAJEZGeDrgSLTh6NiVz2mBy6DP3gZTcYQbsFJQHK8PHFjaZiphDzspyymCbfa2ZB4F8mtGhuTqS9fp",
  "key31": "3WqthpUrEz1n38Pf5TxnKe3dEKHZ6Qpq5rEWBvkgVjgksB1UUm3GQuozcEYScr4Rp3tMoHcxsDpfyrYwSay1NCSX",
  "key32": "5qtxQjqq53xot3TRfuzBAii1gqm7UznnNih69HFQGKrRWABGm1maajV9JFimeheDcEM1gMeAxrwCvEAqmAPRsKs8",
  "key33": "5D3P7ys8ASaLse9kTTfN2LxC7Bo6FSxteXaguigEdsPUFHU8AeWg1BXd6p11Zmu7mvQSDaFGcTHaLfQ4zgzoM4mB",
  "key34": "rCAnYdL9cmQjPg7F5gCf653w2icKzhJRJp7pD67n3A3q2EHHUz9j5CXwjmJqdvakEjCKhcpMywgGmPximi3ySiZ",
  "key35": "2t1Wb2AkQWBfeLL7Rym7tJWkRyViftSnMwrc7W9nHy361jN9446UsHjVCTs7Pv3v4u1QZsrbYfapsf9XaJ2To8RQ"
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
