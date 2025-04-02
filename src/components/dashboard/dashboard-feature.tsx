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
    "3c2fGaJu3Jmh8EdagUfFZizT8VEy9WqjPSsoSH5W57rMuvtZ1YACdmSjLzY8HwyiLoQME3QQPnELmSx4VQys3J16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SAwPbB3dKgfBSWtughJNGR9TsRNemMKN5xNxwBwDhfUr66T6QD6eqfr5mimJ3YnWGuBbzgxcnzySTpYbLS9BREY",
  "key1": "375qNC3GkV1ywgeSqLw4cfAJu2rT33zgdKMJ1GRRuUXAjwewnM5abfHk5y6zX9M3dkTWN7gsUyist5wTykjURido",
  "key2": "2zGETcPVUrwaa235dLyyLVUseRuGaNbfvG3b1NfFR4wMAxEDxzbjnZWrTa9EShzAkJwk6iYFz7YqMPQXj7qiiUou",
  "key3": "5kdvZwaT5ZyRcqNxvWXiseBxeH8Vhwam2q5xFACLcDAEXdoAiuGYwR5jLszPDoD5tLTPwXdMyxtzgBMdkHT2kX4M",
  "key4": "4nAyMeNA5GBxnyWqyuRQvDVLAZgvzVop8c5N5V97BAkChAc4MepbMHpC1aSwEkRkocJeDVdfbM8CVzVyjtJkNcZu",
  "key5": "ZBpUy5YFhNTUX138kq7cyiFUL6LVNqJD1ewDi6mizUtkKoDt6AJp42WfhbbdcQnWLiL7qWT3FAVLrDTZqyok58Y",
  "key6": "4KdGQVpW1jRmFcfMPagXgsGCx7ntXpc7VDxJA2s3ycokWT8bBwCAHqYrEQogV2p4tpXYZP76dumkzebEc65qJpAS",
  "key7": "4hopbwHoFX4kSfEwmPZDxuvVaSdMYJyq4JzDZaeb3RtHtpfo84fFZJiuwJSRBePRvcXfaNtBfKXT4WjvzjNKEabU",
  "key8": "JjiqFcP6Wt3fY73zihCoW8zF4GYb8awG9PLhCThRLgHVTEJiSdhGSYq88NkqdpZSqWaiRMQ7WbkntPpAEf8AzdK",
  "key9": "3N74TeeFND61MjzfBZSrVTureVh7epZQVak8gwUqxk8tJZCCszJKcsvCznyuQUDfvkaL683kC3T7nVuxrNcVup5J",
  "key10": "2tWMmcBNKWTcLptQz8VYZRRzxYQky9PMSVF6vZwv3ihDdDsAwV9afBa4u2KFZ4r8MBzHyzpeSu6TCMS9GoZwgB9G",
  "key11": "2wkD9kQtMp1E3gjSdfCUi6Uc47dHDcfbAaRqEvkf2fvxDdnxCiYc9LxH8XDR9tbZUxU96dHfyS8cvHaVbjBZkn94",
  "key12": "3CYicJGbKW9xFLE8hAq4yvGKJ8m9hGE7Pk2aQ8eTkYqLRBHfGwJkthXqvKjX2rCTXN6d8PdSDJFpzNv6EPgTdycN",
  "key13": "56kt2ekokDGpt3XQYx9zNtPonkXERZNK2bwWYAagCUc4yBXNNjiy6Hno6gCgeWvFKexti6e33vzQGKediArkvFhj",
  "key14": "5GFmZhf1J5N26dtSJ3WxPawvmL1K83kpR9Q5BQMBq4ZcNowMocwZSqq8se4SnhBaDLBkkkQuoCevCTmbiGQXJT1j",
  "key15": "335RGxh3WVoztYo3CB9u2Myzbx11vP77Ja8C35QD2B6hpEurHyS3BP3hEUzDxoSunJArsYoDYW8aGJNLJvKnHMyw",
  "key16": "5VhDXmLfuq4NRf7rnZTvPe3keekwPh36t9ZS61doufYMfPNmje5TFzYdbUPtuaVkDStRDRGuM7bJ7xSyiwLhPayG",
  "key17": "5eiGEfrNfr5vmbHhFTcnyxHqaDAFdEUi4qMRvfU3uKhD73LnfXXAafBmhz1UStaX9CCPAtkv8wMepcSqFYkN1uuA",
  "key18": "3abTFbe1uNjb98ijksmYisjCz7zz1iE2tYucseAvYckedF9AqpZQp8QVfuPohZZE11RLYYiHRQUG4fvSDuhd8SRH",
  "key19": "LrXz7yBLmnkSZ4yqvF87pFZbRhbNzZXSj1LiBRYETXu2dJrEAeGBA5fWdkUrD8TRkaRPLx579LWBBr7rS6jk6aR",
  "key20": "EFQP9fcj5dVAsA5pEEQ34bM21Zg5Q9oq3gKKkvEZhBANjeqShzB9PRrmPPmJad8gnf8Yz97qWrhgKts3BnBBAuK",
  "key21": "2LYpfym53gq7GPinVAYhq2vcQdELAvkzJVx7WALCeWgAGjGwYd4KC7RumwS2wxJtPj9NuHqUk5ufJ8VyLTWwB6xf",
  "key22": "5EKC42FoQrdL5CJ4jPVDsFZYJHQvUZ4RXvgTXYz3zbRg1A3VmYrADcgFxRqE3FjJNu3L526re8GqnA1PhGWdtW39",
  "key23": "3nBuhL2NSE2FkgcYu2tsm47XE6hgEXkuFoUWWvRH7VH99TdriiYLLJdbfEey2JCH5iaBqunNdraZ4XnBViSFHTb9",
  "key24": "3KmpyLHZXaMDbR55ygXzKsVxkF8jpvDKLq97iMwBTjdWMx98KZQMDSG39gzKxCuVXEGoMDUKpfzwUEd4Me6W13sx",
  "key25": "4pRsd5reif3AEJCtuAcu2592uzRjHy63ohNF27LvT69JbRGiuGTWjWq8ygH1Uh1T9ALC9eJYEWc1psnY3JXwenbv",
  "key26": "5pvLVrnJumdY2iRFLDnJFQGb1qVy5hxRTgQvxUERAfnqpTMg7XuMjNZXsuosjwhScK9bMQYkBm42sM38DU5QKhuk",
  "key27": "5LPxvEo116ARmt5uWqsKqsgQ4wsAaJxHwgLbY5VfQoZd6QbKE6ZiNSeyXJszLt8fQsdCaLMCykDChws7W6s3FTyS",
  "key28": "5rpb9Q5L3XXGXrdmutUJfhx6F9LX5bBAnYUcKxmbjxidWcUAhLa9AJWWaviy7oBNayAUxHQMzVrmhPMhaAWGFBFe",
  "key29": "x8rAZGn35m7FHwNzEZFaUn3XkXWzTqnzAE115dWmQDkHNQaGTAWeesZD4rwgknYghzEEBGFxeanZaJWUdXNrDMk",
  "key30": "zqySkxWK4hDNiqNZqQ2w6cTQcN8uqTZfU7PgTnPCpuVZ84VuScfy9HdNj579h1wsqczXnRz6z9fEnVkqGJ1w9bm",
  "key31": "3yxJqMnzgzLd8YdHrDPu7ypGNxkz1S8g2pKByk1BWEC6ctfe7jvkjs7vk3Yqv5cXCZzkiSzNqT63Fzv1wcZzE6jL",
  "key32": "3dXaKGYPrHFVwS8yHAHwr6zTrR9E6xdWZA3xSmJe9Gx9PgjCnYshAJMbwd81DmtEWczLxsgiXwAx1fqfhxQidwC6",
  "key33": "31Wtx556awXCMye75DbKZTifyGGJtV6HsroTsQ1MoxDmy421vJLo33aUxogmieYKUrgSefirY6sMTL9wA5H2zNwn",
  "key34": "52wEpy2WTDLyBaQSP6SfV9yCSaSkYoXnJVvRfaGGukcJRfbZk8oAPrJdHdaVTt7K7d5W83xjFJ5ukWpAxNF4hUCe",
  "key35": "5V57g6K4nA8s8o1DFt7yEaHvWK2g9MzN9tAKb591KJCUsM4YwML3eJgW7X2a7BgDwKnqe3uDnC643QcRCkPz2JjM",
  "key36": "4LW5uSmNFcUhi9hiukvLDDHAB1jgUiceJr4uL8hd6YGdzVPjmiwjjYVyAvDvZiSwBBR2yp9wv3M8vUoffexsuqyA"
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
