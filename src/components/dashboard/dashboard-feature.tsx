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
    "2ibmyf2mthDxBKcuYobrak9caumwg9UNFALwRhELxsVimeeKcCEeQFSGfMj5grhP85VqShe3RgsJvYJwJqSUzDiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24gBk4nGpSGUtadjB8sRgJLfBgW1TppYt7actv6ESUaotajiJufZ2TJTBoLPGskxHq8gTT1Lp9paFNjBu7Am6Xqx",
  "key1": "3jLY3t8Wznfw5npQNroeByALHujiFMkrKSjoQPXixrxLgZukykLom44ikNjX1PZJBHNL4sqzbHzgvHpL78dYd7qk",
  "key2": "2LyE25ys2tBLEFCFYPMXTtaqACDauSoh7Nm6vbuzv2MiYfRqM7PtpeGDFZXB2xGKpjWE1fHjfqoPw9kKA8fw4eVF",
  "key3": "3DrRipMJ2f7o2zy7NNxNiyxkHD1gYYq3n7SReaLea9z7ijDhgqavzBvxRJumcn3Lvveox1LLDqKSBDQfDr3e8iQS",
  "key4": "9rZAneErKPChSTDArqW3Mz1J9pQcSd7LA53cfNaoSq2vRwd3aANqCm4GaDMSReRsSVUEP5tWwF2eYEyXHf1P8B5",
  "key5": "3Pmv8viDGmmp5yjU7x297wgvz8CFZ56YbEQnQYQtyLbDihcezMzEuPhWFA2VHM982PKeVjs4raUhjejRjJU8kBA4",
  "key6": "62B1xH4SpoUz2324etEUVDybtJijumCWoupDS87rrHX55kHJmukY6cSPuVr3RAAsP4pnircDHHrgYXAHq4eN5Ytt",
  "key7": "5mJR4feoEPPS9yFPZo99ZKdjQTUhvwbUizdDUWk9tgHRUEDwuqQCiFCnDkq4m3MjQbhWJL4ZSoxaGvfrk7bThBN",
  "key8": "2RYZRXirSTwwZ6HmGgzG4U8Eaeo58g8nuMGiiWTvNZRPbz8huwDL3tZmssv4hHN6A41kTjWccLMYrp1vmsCAuKpW",
  "key9": "47m9izRdsmQXjYiccLGmDNAnnuNbXqKjPq8w6zHx3GKYJQ59v8KovjZ5TDCjgEDCRQyhxS8zsLgL4K4qa2gWwNSH",
  "key10": "5WAT62LKSfyDGUFJss893FRAVbCWJ26yr9QY5EeoYeNXYENDVHnscvDEA9M13KwWdhD9PRgN7k8QKf3qPmSb1JMW",
  "key11": "23SbUemje7tvfy9mFwkZvfgNv16XUbtz8rJtiGfTsLtPAkyA4VapezT4sqkDb2rzTv4YkzKCdJRkM1TkNz9N4y5c",
  "key12": "3FGirr4NkLu6wvBsc4JDohLMpPnnKvqro7ce8yWK9Ebvy39tutP9GsX3VPVwwuzmNAs4pwcFwKBpDq1pk19XKZD9",
  "key13": "5VxwbAUF5QSjLRbYFKmuRpAEercVjc5cWcNjH9sPghHsgdcHUrDoEvopWiFLWnwXchZsdyHUva3uBdo7HFaFu7F1",
  "key14": "5iiCvQBwDZ2E75BLE2rBuod2ChF7DuVF1Yr5HUju19t3kGUxySphsQNHX9oaDHutfz7niB6dUV4n9ggBhnsuJFvC",
  "key15": "4of569fwE58rJW32UFi5yKuwydDSUV1z9JY9NzCQmxiNKbaH4AkiLBHrsFd8tWdxsf7vWkoJRja8PsUkSfATsMo9",
  "key16": "339HyrhJUJaUWAd6zUPTkjDsHske8j98T4Dz57Q6RexMo1GQBeJ7M7KUNNWiZ4KAxSSKhmZxYSdWAJcDyxLa9ytq",
  "key17": "4vcKCKGgBXuoU7XMWj81UT282f2D26SCgxo45Lc1GG36YHCihmgDWkaQP6eDqXGmyHEPQ3URnGmQzM1gbM9Tc65L",
  "key18": "5oDVFZq55Ca9ueczKLnaiiykWquHod8qSPAjtHxFzF2RemRsCTZuJNx8CLicMYhUF7DY15uXmXU94vwPPwr1U31F",
  "key19": "2yQSGXTfiUnvKWdXJgX4LAWpFCn14dmNTTyE2JbyixyphAAHShzuKD2mDd8TPHCpD3S8SPpGXJrUwQUPXcATRu2w",
  "key20": "3nwDk9F2QZmPGH8iRS1oBRmPAZqv3oropTyKdZEZvsmNkMayFzmPRAWBayT4d1ZeydMgWQSxTKEn3r3jKZWMgXvx",
  "key21": "4D8LYmixbUpHAunD2UpZPPdU544dFnm7BW7jsstSpDkW5u2rQa1BcnzzYMKjU2sZqJpDjfHxghXpEvT11GCrTJvb",
  "key22": "4Lob2Vch9y42tRWHdqUacfWvsb6EwrhPm1GgEJMf56PLeA4SKKu6HMBHjo6krbsMfYUMxKtu728X9PAQLqYwVvfM",
  "key23": "31TLH2PrDs7Y9dDu5YJJ8xmoEwMBwm2Y6SLMtZig2UfwzWGs3zPasj3ftAwHt4cDusTSu89C7otm51VYja9gjmob",
  "key24": "4oszPA5ArTmwR1DeixnbaGhdBYtiuMR5pJeaWPNDRujygLZJDKj9anzLkxJKscCC2uvAJrJ4y71vrKTCXvGfqnRF",
  "key25": "Zjh2hQLchEP8bPqS9Jx7ML8WSvm3otagfBTsuHNzDA4J6nFFsSXsZjAEDmBJBw7q2vTWSk3NLMQfGJfTUFEJjJA",
  "key26": "SCw5jxiTtT53KQWkfZMrKP6Xn1WWG2xnUsswsGBYSYQRAw9FDAbv9sxkQvmPhEFh96tJ5KkbWEbHg9pJZCGhLxW",
  "key27": "6cMQ2PqdnBiKh3vppjHBcJkwBqA7pghQCf1QiuEXwMxkhuWdWDWB3ySd7Rd3wMHmPmwEPCefPaBgvMQ8x12EGdD",
  "key28": "3r2ikK2Q7CJv4jc3E5HWCGxRo5oGETDGbqV8BiyKwHMqYvzE28CXQRBykvEFuXj5ox4D68Zv1jEvqF5zifgGHY7s",
  "key29": "3cgmgnFbyAhzZMVEQbDYU8SHMXsRPPqsavtpqfsMbdi6mj6yPyDKJrTzXMbpnTVxvQz3kVy7QB2uzd38cRyfhsxs",
  "key30": "38gfYkv3HWWRwR9LYDqbV1CaBTW91MB99dZe5EqQm14Wfaq3i37E7mz8xTGhT4zsDQaWPcQDDXjKDsiTWiFpoGAV"
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
