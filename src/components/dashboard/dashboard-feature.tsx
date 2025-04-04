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
    "4vC115KWagVCjdDRFubEUGLv4KDJuEGYXpBprDS3nWt3kj767tNbLvcvXSBqSmjfM6aSJaEZeTkjhSf1wAKpxZN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CBNi6FvWbmKojouW5oSDkKJLVLvbUiAzwJEUudm1Dr5H5BULEEbjFV7FAduAAQr2gotzhRQNM4pyVyViGh2soUT",
  "key1": "61nicAuzowTGZo9DQQkn17TQZCz7WZh5FpMip6k217Gbfr3TMqNSiXDS33v4gTd5fnhw8NQd4LnECD88S55QQsUD",
  "key2": "62qBcrqbPPbaypZbrp6XM6tMRggkiCuDN4f5yMZGdEmzgnkF37wPcDaJH91Vmyiw7PBDLCkjKj1E4BskpxDCxW1m",
  "key3": "2Roeumy4sGQmu4VdATAfqAPjkE4DHHWADPt47xMQgzNbBsf9vRcsQyVZQhTwifSnoTdUgkGw9PmmnXzDXJz7eJgz",
  "key4": "3S99mrkkWoxutUJzx3StPL2NigbqkyEC9EF9roW6FiPPzCKPT5fniHBeVKTRFJJRWQuhaToxbKYSpEFiobXhi8tx",
  "key5": "3itAgmhTWyJQ19YQ3RuPnZSXrRZYSHwi52GQkszN6eS6DQPHXP3V5kGMPuvqsd195Ws82cP8Syhbod3uzUQgJNZD",
  "key6": "dLgbPyTXZj921R8ugitEXwQRkTdM7aXRiDTh8xMH14rk5m637ht4JCyUCQKxw1LQYcbQji3bDDkaE9CLz98snq6",
  "key7": "3jeqpJqrwpmYqxQMA8c7JTyyePQmeNk9wA2dztCYbbzvC9nz7fDs1rhL9Ld3yr7BnYBTkNQjkJnyGFXpUGvX1b6h",
  "key8": "4QCFEAxroY4aRS9JX9kH6AUWD3M9UBKr1KMVDjsSJpGCZC2JhHkzQzcXBoBomxBbcsNQDrUyWMxPu9fd2JTrD9UX",
  "key9": "4Tg9pHWhcC8FznVhekoESLgzTR524bmGxbLV6z6aPBfPg7Jb98tzFmovNrxZ1K4HHGd2ca25PhCZyj9hrE74saaE",
  "key10": "54RFyFTBMUHtt7HEWUgMGZ868aLVaegMEYiTorXPdiTCY55EyB7MigZcRq51TZTh2fcxrBjEr2qucxwunxtx476b",
  "key11": "5EJ3oRUDbrwXBhpLE4tXEq6yLtVew2Fnp42nf1YESownYoFiTT9EwoDXmpMPkCgW82hVH9FYjrx3U7RYBAwNphhU",
  "key12": "43rrvdJFkzX9j51UzdQDjqJ9Zobj46VHKwZyC2fcGUMZrn3L6wWrGHCfrSgzouzbgo85Uaq7p521NHJExc81fpCw",
  "key13": "5eG7PdKG54TkLZitLQTMjize3Qv9cAgUo7L3HpfMXy8NHCu2dYwiLauKMhecZzifktoNRF8s5Vc7bHFdHRPJ658v",
  "key14": "3X2MAN8yTfRsdE8YxbfQLx73y4KNrQqymEK7PurQhx6MoUNVoPE1B4nQYXokEAT2uxQFrSKuZVWTcdQkYu24bzEn",
  "key15": "4spscbXd7VxSAyMxs1ia6d2dHhn6ABHA7U6qbc2cnHLEDWmxJdQe5Hvo9PbsVPcAnJcsyCVeiLMcabVpW4nhPGsB",
  "key16": "qkEZNPUawccoCc6Cec1b43k5jTHBygZdTUumvwKAb4ufr3KMiicwjkTGpTimatxnNxZ93ESgLYRy4QL99Wx6pKK",
  "key17": "9rmLaL6t4w3EYe8PJ7Pkm3FzfBSipk7UWASyPSBahzQx5evn33v47ANT8bW5zAoAe1as7zkQ5qbBpero6nSEMLN",
  "key18": "49pSqC9Pn2Y6duetSLq68oVy9uwSUn4VaCjzKc3MvwrpKaGdbLKf8feXFYsfT6Lb4zQx3inb9FPdp28MjMxTs87w",
  "key19": "4ZUZw4UGoGMrCA8qe9xDCgTrBG7yxFe84q6Lv4ZHtcaujWdjADPDvdeVzKyLMVxUG6miVi4JZBaW722ELLdt54Vr",
  "key20": "soLJczRhrVDxWPxPCcZ4HNVABbL3Q3Ufger7K79VEAgHX5xpo5hgFnthNgeU22QuwfpZ6ZF3bj9UWvsfvHr95Lk",
  "key21": "vsRTB8zVzvEKyPsiXZS8oqD7YvjS5cSFLYX1RnVNw78TZGNTdRVtk7kR99aaGR8r1itbbG7BzkxMjjyN9U8hLeA",
  "key22": "4vAK2UR1np7UqxD5F7QDMvDWhtyV9yQpc9MpektnaSWf7bPqVmDdtCRhY5LBAkWqDhNmsyedSPzH4h6pvRgzBY1U",
  "key23": "2zuxKQ19BK29LieF1Ebg1Y1jCsncKq6GZGoSeKpYm7Cc5eVqnvMWG72zi6VaFNNPEvTHnrpNe2E96tLb6N3faTxb",
  "key24": "4BhWoZuNcf9TT9Rx86UVDHEERGhFcgsbbjTyVjfgf5PGw3zRW8C2qu9mqnaQHUd3SYjHBLdXj9goEwThydRXsNPR",
  "key25": "3Gkhbv8A6Q1m5zEx66tHrwHjccRYpu6msky9vzKw7jn9DtiavEeukugMcUjcZDFFBM15Vri2D3ZRCbNYPxiQT4YF",
  "key26": "2KXhMQx47vvvFniDUn7AdESBYmL8i7EGfEyHz7ZKShqJdgfrhL4vA6ZQ9tXcBM7xiS168FvykbeYK5C2ycbxY7vj",
  "key27": "2HmmRrJbNe9DqkbZHwUkFvNTTpQbnLXpesey6WLxPWMxS9S6DPCbGixNSA6j5apkHAirz3fuVz4hxqpi1cJVk5QZ",
  "key28": "3oHeF9StfjLe4RhbsD1p1KmjGNeLuFZPFa6gfBhW11TKAd58G9EPHpc9DnUJ64tgz34RyyWuDu8Nca5jQr5S39Pe",
  "key29": "5bVMHwFJS4qSra1yYDxWREg3BQNTgoDpHriHTusP6bN3y8VP3LRKB2W8MQuXCB44yoxn4719tbUnK6b3sqbY9nz8",
  "key30": "hLAp7QjnMSkaaiY539U1nrx2FF6kmCtuNFeUmPfzB22mLaD4Rkvhg8wG4wssRTTYegkXYpJHuj1k6BrSXvnQAau"
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
