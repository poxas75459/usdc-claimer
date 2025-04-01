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
    "288AY4VQd8QUiDBd6YtpBPC766tboHSmu1cpFWZy5wak7JnTnJ8ZHcttrLL7qz7aWHuFy4BERQz1JfEr9bpyrhew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BpL5MFkWEy4VKiwv1fBWtyodoNgAJUPH2b6JZseJupuQKQY6kh9wtH7C759oKE3QiEXvFkwHrJQgRPrKF3fbqo3",
  "key1": "UbUY9QTqncmQoVPpwUTiBhq63MZMJryKW6WKqpuEmj6zGW18mxRX7cUKkTrUX2HkT8NgTuKgGFpB9jmg2N5s9Ve",
  "key2": "3bkNJiMsnJ8oXWwMC7gQ2z1XdgCWiqMA1PZgUNbSABG7DqrG11UayUWF7RyAit5NVbarwFPT1pQDDeewHwrG39CH",
  "key3": "4RENYKs86L8uN985mNBk721bDiNG4Na1nHRpyJednUmAyLqnFeJ29c2dSmd1ggcGfDi6HasCTRn8j412b4WfABRU",
  "key4": "4VNyD6WfFagZF16ut8UShWvG8Hmpa5XvWeALJgHTgMcibp1WU6VmTrREND1YxgdJohqpEeVbcj9JSZ9Fse544fTm",
  "key5": "i3KggkF877PDqw2oSfS9cQNCyLhRJtpyYV6MdoMirejCSUT4YN4htWTZNCP6CnEVAn8pzkp7CSiyyEJuJsepwYz",
  "key6": "4hc1QoiF1CKn5BmCFm1PSiN9Qmmn1fXmpihtWfHjFo4QV4DWWdJAjQz2RPybC15HQV5XXcKoaWZBjUfQWUcJJYfZ",
  "key7": "24GeG7noKtbTt6xxxVW4tJbxGeq128JLyQGGVUPBYt5jRW83wymzPY8HvuRWXHD5fbtNgUkKRK34w8YGaL71xAmX",
  "key8": "8RQMkruwY5nYy6e4YRXAmu7rqJiPuodN3oxt5oYX8RLGjUDs8EXxzUh8jjwRtKKXCECWovZpspc2CrStQFCSFut",
  "key9": "iaWkDsJcxN6n45A4GmMDv1LYfk2BpcEqnS53zo8dE8S8cCn7LiGhy4uJgGqJoENh2Dyv9iCrZb1quzuLcrTHFMk",
  "key10": "3kr7cZbfyHDNSD9hYNT9gZFZmGkBtzrMqD4BmRDnR4ZazKJUjybHyQgMAGdYuVKHwoVVeVuEDgfG5mnrXBhfGW3E",
  "key11": "obTBsyHEAwnApvobCLxaanCr7a1RuzexRMQP2dFCiVp8EMgordgd9WeRKNr5Faq8GyoyV6bhGL87rkUne18uRUU",
  "key12": "2yLi13FawawBcsZSqT4Gz9o61nGZXPNytHedZtHY7cs1wV8ZqnGjBAor65iTHaeQq3frwgWF1oZJccCrunoWSZdD",
  "key13": "5QY5HbXmwMCjaj7smajNwXE3JfC6qip9nk4xEQePrUTAJr2oHXhjzjxR1sykj1i8bZQQFdBKyjX9gUWHih33dwV8",
  "key14": "38d2G8gTxi9xX587ywo2tKL4myF2yeMTwN3cX8uxVUShDyNVVZoqJaVNEUEbSGZ31PPSq17HU9nnJkBKmV2on7RR",
  "key15": "33QTBoWiSS4TZowDXNNpmeeAQ7c7K9WzSwHVCPVRKFzY7A4uit5hLpWPBz6o5pCPBSd3vPhdzBdwp1MeBkerNrku",
  "key16": "5HgXEU9fRk3g7zpB2raUds6pV3WPithtHwybmrkpmwPnSmUKpdxJjKdMEqFzZ6xY6uqxDXG3BKJyzpbsczJh1SBh",
  "key17": "4H48PoU6kdpcRcmS3VdZHf9JnCCG55DhPfWjyVhDpjmKsXCyN612xGEryJtDAKuPmHhxY9xBNMWNpK5kJgAXaSRw",
  "key18": "47B5W7iFQYWBQ48D7tn5SmP5bk8sGh6FRU1FbcuMvdSbLRRqAbASNoWshoUCcoStQrJP7y6Uezef6mVWcFdC456u",
  "key19": "dRbSaPhCz8LwM9nwUmZsWjY9Van7eHCEvmp1nTTJnn45GegrhyZKG6kiQjF7dfYGRuyDfuVk6gb3AMXXpyCKMt9",
  "key20": "2GZJ1PBRLVM2Z563b5DMB2phBuA76jhLX2gpsLo82z9KBUpBLeGfzZ9LrgGr94tED2Dx5rmECAqPdUpaDAor1HWh",
  "key21": "26EN9tbz7ckNqNC76BKAEyD9Pbw4eeU9eZvtAC7zjfkhfjccdLyhercety26r63obfFw1t2p8QWVhWD987o5p18D",
  "key22": "4CowT71ckZGM1z2yDKKS8MW8U59QXxyDKKN2usoVEKLAyM9h9yZe3Zj5PyLtZ3yrVkGGri854iwkpGgmnA9j13ZC",
  "key23": "38EoCaqkpR98YddgUbVheNUBjLtdjKC7qZeppZNMdZTtFuBp74EQQDxzmLT9zXbb3DvnGtCKU9J3eAdoKVhHr2vc",
  "key24": "3LD4d7TwHmECVcnbBDXB9H4Ze7P1SfmpnyXzncF9m149yqnq8gfXYwrgKwNDtwRqXc7VGRKHFMjiu2Ekm4J6KXmq",
  "key25": "3TtVJta3B2txDykgLrunKx3uL5GYEYZu3HUijM4EiCKPbdE3eTGnDQnpL2TVswhPG2AtT7irovB53Msxb4rwKrJU"
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
