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
    "YQ7PPzCWx1ueMr2GHey4QKsBLPgNXutNVsdbLf9eDNXaqSKsDEWKXsq2wSZKKKS9MZmXsuxL8kvT4FpCLyYHY6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59ziPpkBgBZ43h7kQaDrJdSMingA7XNrXLktjetJ94t4MK8nP9jE6Gz2343L5bV87YJbT36xiHgHvjVyD2Cz8hX8",
  "key1": "4EHMusi9UDEeyRSBLEegDvXcYzcS1nUvDWW65hSSKE665s5WxkrjHwLgk6uDPzGfXBzb9Gyu1Ja23jRy7aPxVPkL",
  "key2": "3JyLYAyqj7D8cTqTwwXi1CeYvA6LourJyopWW1pyPVw5HK3sAxgeia25NPswyLPiDb6tVNoq6JGVxGdFGMvG6cP8",
  "key3": "JSrjo5w7YFrVQkcDV9xvFDCVhfG4wJQA4jaPjk3cPKruhqMHcW3AyWJsxkBWvFajyKr8awcxLuJjcVbiJ8s77od",
  "key4": "3JqzAaXYhZYyiEJHCBoDcvhX8UjLCBk5MXnxCKaCRB6h8cw4zjdGAuHVZMuVaSTSEHrS5ieCsduW9mh2egTjT1Mh",
  "key5": "28BrbPgzo7bMooqVUfpLzbkb7joUygyA2JrHNfN2XzFfcrZcJzGCDjJBDriTCJdUHJE48j1mB83NV7uWmYFG2sy3",
  "key6": "3a77JFfQwkUACJbJtnVxruPGgonXxz624TL5yW9tWt2Ldt9UiBfifwoV4t96VuVFS8HDbiTgTkXDnA1Tb6ToQknE",
  "key7": "bxPm9yTGDjmapAKa57UVfrCGtkEAqAdnCx1HHyehson5hYPh5tH82LrsHqnSQiSmncWUVvvuYMQLCsDQQK7wh6v",
  "key8": "3x1fj7AHAurDLERmfAHsBwQ82NwUcZXx4mG3SixBcQWujTaZsZQEDk1WhfAnZAKrgNJFx5UJm5BVYFTcGd4vbkob",
  "key9": "4xY4hiuKW9U9xCmDAMG64pRCyYmiDVqQGV5bNtQSuXYpzTj2eW1GpJBQxEBMaxNBBBBov2wCEzp3GhxMPBxvxSeg",
  "key10": "4b1xa9iYtRxztMGEA6gCfhf2U934eoAAy8VaoRZhPTowK6aksmLRLhS8QvGAyCjngZhYiLbhKVrq7GqYqGVEuYKs",
  "key11": "3kZYEYAWainufuRpukBLhtarfTXmhPhc5ayLcXNxtNsZu7YXYYiQtAZbwVdCQdmD8iU8TCHgeVure2PQSgtadxr3",
  "key12": "5n2jjGPWjid6Nw99iv4fpzCG581M4RGgMCQ216yQog6TaUjase7op2MLKn7SkaCukJPSEtEVwM22fzRZou71EZ4j",
  "key13": "4N7X6NTh2PPub9nzkuNFq4o4172ieo9wcH5pQxUuRKP8KUqWeNEh82nv6wmKcE3GNwWjcFcMSuLwhgoLQ2sjTXy1",
  "key14": "5yYbqsEhNzWRLEhCxEoKiPG2TWzUcbRUeEcaZp4aBsRoqcHL4AsCa8gE2SBcYPR6SpRvdp36wxYWms7T449G6eyN",
  "key15": "3qyjGaRt3k1MygVhbGuzR82vP8xgkdA5G5AzAwMkqsaNBTBD16indegogQELKqRjroK9FQ7K3tDomZyV5DH9Vsck",
  "key16": "419tWJ6MPRrGWZEFEVv1G9U5VfqU3TBpJWMaHzwe3GqdXvtV5ArVwscK6bB5cWGaQHpFSb9JsCZdgRJSeRKRXVFD",
  "key17": "5qVFQTjhNxbpgNB6kxDs3VkmmsjuFvQ7TmsRL5UjAudQFFrP5rQv4FdkeurnoPWBzHrjF9hkrvUmT9jBGqakA94i",
  "key18": "3bARqBT6VYDanJQ67AokZ7gxmyhczxWr3pnHrgh3sc6VFSErVudDoFbUvDUeabg3jkjnYu3SACmxvBAwvmZLUQGS",
  "key19": "4AP5f9jGsLeLfUtcvaTMeYKK6Zpvy7HjqJX8UGf9tatfTbTzdTTmL5G78kp5SCio495YdVXNtVgFLhpWpQLNsALL",
  "key20": "2H8AkdY3iqAVXRVMxwCrzGpHNSXr5YC7m3r3odX4THSLw311C4ao2mrFXPzCEjuAymaAWyidWGP3wsjQJJ9Theu5",
  "key21": "5JvadeKuwuhRh83mc3VoPv4c7GVJPA5eeuYvdbdWA4nftoNNPFNVpqfHctwg82X7dtsqFJ8RDztxYQNLY3oFhwRy",
  "key22": "2gDJv2gGuYh8HJF4Js3afhrhXEvNQbKHVAo3RHEawU69ZAqYPxtDoihTdRd1VxWbnWycAuZEHx7UXzdUQjXysVrE",
  "key23": "4jXTJtujxLP6RVi6vw91MKzYvTCYQjbBFZwRwTGUubnu8DnyEWQ857pnNS9Q74i3MXAatRR5jML2oXML51sjDfsv",
  "key24": "BQn32z79HkiZ21UUavVZTXwjsbd1R7ZXa7Jgz2CsFgNrJirUFanX7Fn1osppJTcPzNK95FyPQ11kigh1uPUUpgk",
  "key25": "4bFkc2LUKibTU5T2R498zH4Ai5uSWNZDGVa4StYZtz9jc3fuGmzzzH6bvVVbNsNCCoJTzT5ZStoDCCX3UkawsvSc",
  "key26": "RRVUX5MFUFJBETURAH5qoB4FHZTC6yALDkgpvukeJUVRUL6ddwZR3XUMiqy7pa9F28p149oqMWo3pT7RdAJD7Aa"
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
