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
    "2cGJdLLRRp2y7n1D3oNU7YhuWXTGF7AyMPvYHSjijGMRrXAaHy9jAeLjypEn8uKVbqXfbu4fH9hFocZS78wV6TLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FHtfjxVPeA5bMENyG3XUrxbDoXDoDbfZEUfKqazA2BdixaCqc1eKqXUQ4kqrPyzm6PrS5pv9DW2Qv1FHGoqCXc",
  "key1": "5qXBx9EtEa6rxKBceAwSVhzUWH7FbagGEx8SSPvEKHt8SL7Kcjs8m7gSBfuXTwXZMBTf3KGYCd5rmFaV8GfdDQnt",
  "key2": "3MUpsxiLKa8tBYZ4eteXbKt5m1sNvptTCnZLRcf6TRgmyZQYgdNtAZ5ridfe8ei8bxnAheCezY7fPRVrgNGBySww",
  "key3": "2GdN4fpiQjLTfmcEPo9SYfdgoAVnJjdUL5srnvpYQPpU4sgEguYybGQB5PRcTmdot7xKYDGBfoRVbbBWQ9R3obG5",
  "key4": "kVx8SYvFkPnk1buBWeRv23as1tsiBAGsffcF4CUwF6wuj73vznDavACQWohCzpGgD7b2zK2aNkRJqWVrpx54iS9",
  "key5": "4hGwiqLzPaDynQuB8WK6tNBnRiRFF7tEgnC9txv665ebdLmFULBXn2cvXTytJv85vzbhiane2Qu7CaC2abGjQyNs",
  "key6": "2piKyn1smmdBmUjBN1B9uKancmA8fYRcoxDsr1xXTs3AxDyvXJeEuvtqZuwC3Bmh5CQHiSut3ezMWusu4L2dzzkW",
  "key7": "63GUE89SoUhsWTfRnZTn7LWqqAHBHLgJxHb84tZ35XmY9FM7jyhDEoPAwrhd5woC9VhALPk4dZiCeZaUqzLHGSjd",
  "key8": "qNHJmtQSGNSL9kJxzkLKr15RK9SKGBMGkkBBszuZHPWBS6sUNrXeLpmETDn4gE4zN6V8gcXquA6hDCmE2c9v6h6",
  "key9": "ZG1X9WZSCToyjB26kf54mXuWW6qhtn6bhyArN9AKm3ZysyEv5954DivkuSVSKJ1jqu6QyLQrqrWeY4Gxn3vouMz",
  "key10": "4d4yhEZ5Vxi7YonVRpKqZRLviQWgQ68GNyJzNvjhYqRrzxnj1QTtRaZfv38BZiwgTggzskpRGEdH5gVX6J9eqDWB",
  "key11": "2U6xBoL5iXy3WH3eSDX9k4DK7C3kUahs6iiuSBj2ZCr6LZBGzop5rtk5Xy2fCQNSgY146H3zevgiEwsUnrLETrQd",
  "key12": "59tHLVx7epJmzKwCLnDjMsahWcLtDomMNeBbipq1ngnLqevri8PtmUcY4q1o2Gv2SgtYPJ9E2vvd4pPz1kbgarAk",
  "key13": "4YU9zDAyG6PM1UPiL5JJoWpMMd1GL4x7rKXZdoTGHmqDUWc3yHEgewR7ejAJcmqFkkKne33mHV6amc5Cv6dTdBCQ",
  "key14": "5m5Vpn6J4Au1yVAf5Yp4Wk9k1XaAVTMY7U5U6CjnMtfUcSWddBfMYSfNKB1a97wuaQmBC5VLfpK3SpKvnic9shcx",
  "key15": "2TT9nQc1pbAo2KahH1gyALRd1mA28okJuwvgyBoSMZDfhPbF3tQjpc4VFGhoN6m9EoJrGxpKFqbBLCvFX134SYzA",
  "key16": "2QPYVEabo6wkZQQyw6gHrJQkUYeQK617zpWE2qm9QxbyFYjSTsv5nTjYPCG8dmDsjukQvevMMANkuA4bAL9jpY95",
  "key17": "ynR7zHbZYSUj1DGEU4V4dfHsfeTuYFGie6tUcQHsYdjHF3PxSSwVWBa3snHx1dhUjJkqSxdHYQh3eZ8HUnqyLDx",
  "key18": "3g4eVAqWz37RvUnB1neNakWBUdpJ3dDEqAQTvy38tszSiU7oNv3jJanzBVax8GdfxicDoe7g7eCTVQjZwWYNpPLY",
  "key19": "2KG2ePxsVG2Eg6fekj5rnkdcnYMKMvRB2j6Jwkwsnj7ww91HQcyWnX3K4KEsLzswUdpKi2j4nYEDWfX3DqFMvfvP",
  "key20": "anmZWwPuXxM3M2GTysy6LbvJk5JfqLcRDVTPFUrdKGYdE98Mn2sCtG3JymFjQEsDYDzu75UJarznQPHEzBtt1eG",
  "key21": "28PfjwNR1eHREuoczera1E9uNJkXzEywgWx6TTZdVgMT1tpXcb3NBsLMvkXC4thWFyTBuoEQKAsLFGMYvXcp7AFQ",
  "key22": "37vJxncx7E8kp6ZRz7jUyiCm38x7hHgHZtmUEGKLzRJJibYTNUGopPemDjq4DrL7ieKi28bEQX6ZXNebqjooqx29",
  "key23": "5G56ZogDCFQUw2NuJ3ioF4nB3KpUzevD4vNGfr5PJBrcyxrCWWwki5o8Ujm1uqCZC5dH1bVuYm6WjRJX4XdPxWVv",
  "key24": "3EPogearPSb2W1q6U7LzLwXDFmKvmRnURdd8tdJzHQ6PznNEh7okJ47E64CgviaEcrrqqf7w5KWGjhSXiLx2St1B",
  "key25": "49ohKrZhRy6Sj8gnvxvXJrFoaA2wZkEkgUVkJTC4eZdgdrtWnbgPvSB2YqG6QuKbG5opFx2BoxsNUGGA8vFGvbN2",
  "key26": "3RDcaLYyezih4tXwiuuUhmXu7XZQmWpNmNAyVPzBDwrFPzET1MrcdNhzS2G8QcY8d4xG6peUAyuMngrHi53364U",
  "key27": "sHbA4gWxPXEEeuUCtQtp5TUY8keNVUn5sWeE7yFvonPUS6fJKGZWLc7nZfrwB4A6sEroh93SmGNDt7hNHQHU5hZ",
  "key28": "5Hojqoos1W7MTeruJWQporcEuwhg7owKXh9kex9CyXZmL3eENCnqZssBxS37Zcm5CAndv6x3w7XyjpjBKzb3SReg",
  "key29": "oTbfmDDwpQVjB4avQXjV1S4WoSN8uqJPfQkSiUbZUT3Av7HGhAdXgD8gXDYq1tVMPCjeq5fDTc8Hm3X4WamY495"
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
