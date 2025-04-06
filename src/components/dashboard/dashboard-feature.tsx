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
    "23qdXbMLQDBpL7rpMYB2tZd7zHzpPR9zNEAGqkt8r8W1wJp4M4vvQ9cr1Wc4hyys8MB3fmFPMr1UD6JNgDtuxyS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HjTVMneAmeVEh35BRJk7M2deh5X38vAspQCinLtQiwNdk9oMtD6zksqisTjVcP1nRFGrYAxdj6T4vEsS73g32xg",
  "key1": "WBe3EDsM3758E9fRp1PnnGfcgqhcwEk8wo9Ly78ZeuASZc6yXRuxZrNncT52Q3kMFmYut6xZ6f6mPx4qGLQQQ5s",
  "key2": "NcNAeGHtHq8MPSUoaAqCnPNdJ7PJiHijJHB6EtDSq3Z7tgQSntbpsLEPyAJ5KAj9dztKhAKpcERuAwdWNAot2v3",
  "key3": "48SctP4fD95vi8nKguFDrQfcg4F4DiUpBdwTj1nuqSbDAbyoZNJnorR28VsUg7Gg3LHjJ1EDJvb4qessCUaD3pH9",
  "key4": "4QMLAozTwetSAFtKoJfjd8D8jyPwhJz56fnRNyZQwLnmAHxYbwbN4mgzVRe39mQqsJTNLDgpPMH35JsaNXwAycHN",
  "key5": "2bu9Z7XGZGSvtzRezQj7PB4CCHWH8Vssp1LfmUL6Uj7WqmfUXwwzSYHf6KNeETFiLEj8hcSQfgD9Ag1ArPjp32Dy",
  "key6": "2kcHUnN8N7u7ZjrJRGyBgVgzzpFPf1gAzBCaBdwZkigu9i6vkoFy5bvBsUax4GxFtaCeoWrQ3pNZKJFHrhqk93TU",
  "key7": "2va2YgFiNurEPmzbbYe3zBnZP9Rv5wbhCrJS7nqk6KUyUVmr92Jcvwb1dESmG9wZwEbeD3Sb9jut5hrXPES5Su7C",
  "key8": "PmfPqrQJwUGnfzBM79gd5d2is6exXn4HGUdE6rRhjsth1sNiazJWLiD2kjxYwgZusjDFoo8S3bMV1Kc6kfrMCcG",
  "key9": "48udk9LX8KRa9SG18dEHNSU4c9DhdBoiTzkxhes9c3DFRbKHuRfpa2a5BGjFgpmJ7MJmtmxh5DxpTemDwRNkcgRs",
  "key10": "85uTKpxadjuV37H9ozSTHrUoyS6ZG5HQpMiAPKC38qstHq2MaA4WnvXNrVAq2dKukUcz5F2tvFFDfVAJRDLAnsH",
  "key11": "4bHXau2XBMGnWfHskBoeh63hSSEbtCt6fQrrZmnpqiiwBDNQ9p28RgraBDKcykgHJKaNgunCjzHpJq65vQKNhmvc",
  "key12": "2Rygiq9dh6EWvjNK6nrrpXRowsu6uPpX6651zQFb8dZRimXEKwCgqtVw5BeNEfbx9MZv1FLCf1hZDcK7RxvYUCpM",
  "key13": "5RecUYZpakua6TGCPEPW4Hw8fB1bx3Pu64qMRYHN6xYoMevSF9qqirZFY3V65yC2TUrWPVgW1BtTZAMCogTpMz1N",
  "key14": "4xf9R89ixbAR8cWK1qLNe6bRJhqDkAHmeH1jkvNeCMprgFHcZttVTeBZD8Uj83rVoBamezUpAHHMp7Neyv1BPuqS",
  "key15": "5tn3WkKE9rSV9vau8LSw3XJXeWUn8x2gyAmciJFB8eLgQJ2yLspFijqN3y95wPKoeSPN8zBV3JDMrpMivB1jRqBv",
  "key16": "uWPWXXBCbc1u23j4nMxvgcoetszN6sBsvpzsPBAQi1W5cvAVD7odtDcbZ98dxadqDCcYjET8myaTbKmsBAtmSp3",
  "key17": "61JcVts4XUmt8vgykt8L1z2XjmjUR2UYkYfsu53uyej69EK9yZWMSeDtsz6fqKVXUrsyjXui4q83SY6v7oHWGmZh",
  "key18": "2gKDJRVCAGRv38Z4wsfPNJTH8w11rVkzSF7mRAku21K4C6PwZxQt8UbR1SePVvMWyRgVWFfVfKmRFBBwhn8BMV5J",
  "key19": "3P3DVk6DjkySh4qi3cHcq7SrKBu3bUZB6kAJkPokcSVj4V2vKwiEsJMPCC33rVeC4dMCUZ54BHTkKAtwkpyPM6zg",
  "key20": "5GFt1jJYxqxRYFyW7PDiC8e8eo5nWQ2gQeTDWpgZujkEFxHqU7ESCykENzvLaJnMS6XbvTHs1S8f8JxtRRtBiweo",
  "key21": "3MrcBXgvqjFnKXo6V2h7d1mptiQToKiVCvvyG63AnchCwBD5sWvn5YM1C4TNbNVMkwoQSMX3yfvm8nw16JGJSFyo",
  "key22": "DuwB76pjXUZRqJmmn8SkS7mzuwHWhtQHwELF3es7oEc6oRaESKab3w9RzNw63Y3Jk9uin4Cdgd8strnbFjfjCfD",
  "key23": "2EYQKFp1Ro28jEethaTtxkuvFRPHkzxzqvNn6Y5osaPpNdwCXC7dHvPcpvtw5CgN5BuBLCZX4SsR7o2accjTds8d",
  "key24": "3rm177zZL949rj5XHS9zTx4AYg4GEXjLzJVetmuvLZFLmuLttCv6N334MurbK3iby7QWx7LDacbwn7wUjsAD8M4z",
  "key25": "2H7mCEnwzhoogCQhCiDKJZdCqqBN72GigLFJgUedkkCEPWuo6hgcv9g5BvLgqNF2jgsrsFFk8jJ1fTyMtyGutkKS",
  "key26": "4S3KNTQisYztmqctaArGqCPS14Efgen9bTVDoSsJDtLK8AuMQxe3GLgGsfzSX4dvhrFgKLfYV1iEiiCrPhfkaifw",
  "key27": "znW8mj1mPhKigv21iFWLht4cjuZs8m8UMkGrDg2EwMWp5zWbyXcX7iGfRZDaYKp5WHhVJgpTBeKtoYSUSqHvtLu",
  "key28": "5ZF7YGCnELjZMxoykQfnnDrpCrcRwnuGGPz2nnDg2jo1LKP6A1a3kZhB89L9QjfZcBA9hzh9nXzYT3Hy54f97PDv",
  "key29": "ddxQwC1rxUncEnPXJY4kAWcdUodG9UtDGTjemYuZUWmaaGvcgQnrgzeKG5r1UhCLgUG5MzCRDaZ8Dh6MRimu7B6",
  "key30": "dqFoYhqQmwy9p9wiKYSprXLq7DoskAkqZvYx5n5ZJTuzZfH3B8t4CaZyMza8k8gAco4QET8QYDemNVAvp722EA2",
  "key31": "5nTKEKLcEyUb9SaKQVWaWJLhSJWG99FSxuQpsdxSjozFh5oLLpg8xZuTkxKjgsqa4MCABCRyY5KFW9qmh3hWQY4d",
  "key32": "4L9EwC7Pa74ttby9wuKWGP7HUc2qQLqmyFFST8581XYyv2VE3GxHv5BSVyuSLoZjzPKPXArkpYe2YadDsLg3dbPE",
  "key33": "5yGLxAiZ1Pi7Jh4PExirqrcDn6jyRRjZBHvzdaguVobsfeyaH1zeFsuAQzh979MXU51YXJnFbvUpEz8NXVqMAhCo",
  "key34": "2HAM8PT2iVqUDR99n4wVWj8TeBTXAps2NLcsrCpCNS4gz6BNoGoN4v9YCWvivS142kTfR9dr2FMFQc7uc4aBaZYZ",
  "key35": "5ZARG1XU7vD5QPtzk5z2ZRQPHEM6KG1Pv2s7bUeJCBiddwJdW7PkQ35uJDKcEeQAqmzHLtfE95RAAZaDS5zAjLy3",
  "key36": "2zE7EFc1sXAawShzSGBwMpdVE3CB6BDEh2gkeEMVtUMCnCxhdTcdLK6PTdsrFUmK5pXwu2YvFqsG1HBfAjn2ndu2",
  "key37": "4f7DEY5rQXecgZJ6WVipsqYJHgKDV9JY9598tLMJpfXZdqG7JrgyddzucVPbFd6vvM3X7ab655e2gZKAazo1XjrV",
  "key38": "nFzUhcEYw1LR6LPHvBsnnjN23Sw1erCWBZaSqZ4eWp7y4iTC9in6ohAXNUXEPN3oJexAfoiEPnXJG2yQ7Barm8T"
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
