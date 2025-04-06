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
    "suEPzUeAbkZLYX16zW4LLbSpcZhaAwNyurvwzzmLWPE4NekaVQETR1LMUwyU9huXcd9Vzkv1eQPehVmct7p7ZZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A5aAuQt1EZNr9ETkJEdFoQTDw8k9VHDdHix72qSXYD2RyDq7WF5b99AY5if7kNFQhNrKCJN3Re69Yx3pddpQVVM",
  "key1": "2GHYpe9WRa6WSC1KMkaangr9XNyj5fVSdtsT9i9uDbnBCAzpxSDSqxAqhTnbHgRqTFEBCW7UH1qKxMwc2jqeDSwT",
  "key2": "2umPxfA4tSib2DmcE2gZqUj3cE6is4DXKFoFMnhKtHMfdnDpMHEWmkD3Z1FBszgEA2e83NoiCbG7QEaqZsr6TDNR",
  "key3": "66iRo56X4TuAjm1e2geY2hauvLmuE4GBhqf8QHfEhvz6phfwfeSXwi9v3V8RQxjpyBNrvzJMvM4VMVUgiHh7qwv9",
  "key4": "5hjxc42snQTaqBXTxyT6hsDNL3PE9VAcZVVyWVE5dMN6Jm9KdJ9uaV88rJ3LcvKpUfyQc8o1JqtHEZL8cZAb12mD",
  "key5": "36YKae2GGgdXddVLEF24gkLSs4J2RMKjub3VbigcpvKNRMnM5dWziMpTJj14ZYnnSgXR36prjXJ2ngL518eTHQxK",
  "key6": "3pucqCsV8vLF8FvBTiN6zYtDF22khSr4n5xPpDrWTAFbgMkkt4WvqtVqfBAFyjDDekMGGiHkFwiaurAkzy3P33Ad",
  "key7": "5TidREc2JxY1S58Q8SQP1z81fjKpNnaNLh4G7ENeK8Q2mXMxxekpMtRrTDhx3ieS2stqLFyTGJCSGMBU8DXtNV8d",
  "key8": "J2pyBeB6khXAxMmr6LA6ABo7MDaxGZ7MhQfwZ69pu1CjXWBhTS133XAtRgVggrT7e3FBuZsZ9xjoqfkaoLE1PfH",
  "key9": "5PLf4v3xsk211ssSoRryv7DLzBjWKDXdhoBitmvoZKXu52GkK92prRktf1HL1B2N2Ko9DJgGcQoPMqykZdirEvRd",
  "key10": "51oSbKp4HCNAvKCPRXZ5qcX7j6HjuD8qdBDy9i7Gmfwbhz638XTawiKkgZFxyAHGAhaondFr8RidcG8ZaZawmNNY",
  "key11": "5pbEvechqFME825aFxaiU6ZGUaiLkVZkMjiQBrQsC2kTp9hb9AdkG7WoKCzJLwycQN45Es1SUPjDAMbJQwk3Ahpw",
  "key12": "5dfvwFHmNYXCxcMU8VbUxBPMnUYNnBgMq1DVG2ECqDYUgmKwCpFJk6dgJYNvzsBMYXLxm7VKAejGsYTjZPpZfDzm",
  "key13": "3RmFnzUaEwwZeWCmxrKX4gYVL7X4CYgkG68nmfCGNkkMvNaPwCzpmjr2gRQp6wkKWWnSWaWNG1S7ZAgDM64DmJGC",
  "key14": "2i1VFoMnQCy2NgW967WDxG8F4RxEMZUnvn8V1nneesU4uANSiacSw8Sq1CopJNR4mkuHkfJDQiY21KJnup6XKf2m",
  "key15": "52w6bPcz2qR8H3j4TSfrN3d9fk3CErtxrFf1pRz9eVPiR52E3NHikk3UGrmQqxG8RQsZ8xXyvHESYVG3cCetqHH7",
  "key16": "3BuzCuXutwgmodCNJrM1UFvH55hZuJfjUG8XtVq73VWVtcWYhnm7uZg42xNW8FLrSBdP6J8Svu3N9bBF2RF66N8D",
  "key17": "MP7792uNxJmu2qhjhitmoTDHaLgaRUVtW3R2dbtR1wRp1vLX5hPrX3ojHzSE8Y3y9B1LqgZHDEBzuC4TJbV7RGD",
  "key18": "2LFJ9Z2tBJK2n8T6XUjuv8TwnT8QQR8YhYsLwgYHKAd82TUxcueEBNKYpJdM1HhLMtn36h4ajH1eE28mX5XpkvZa",
  "key19": "3BaArAoNTqp522APbSwfnCRrYHDEdjgSMVkt74eJzmm3f7VU3WfQT2hrrnaiQr212teDSiUy5NFSCKuwEM1JjvLp",
  "key20": "5tgBhMhvgG83AAfdN5MBqfQhzyn3pugfep7H73tsaswZVPPrCwbYCesxdtViYfC4aoR7NzNGPpNdowL8MjKXK48p",
  "key21": "gnzwjxrqXxBsHhEGH8kHCRNDkoCgJDNKCPkMECpMyZtBoesyFQ3WoPQBKNdivDrNXhgxBfAgeYqd9U7tAGQG5JE",
  "key22": "aNv7hh8FSqd7N1oBJwzhba4XMrwHgQtsu9tFVLTBP4ogPRa44HXXbuPY5ZWcAtrGgYnMdXUopUDSS4i5bL1XcuD",
  "key23": "4AbD9kPR8z2XnYGFxGc8jd2YheQbEagDvStTNS884oT897QR4tgkp399ofLyueV1LRZ7KPk4fjwffar3nYMNm6bH",
  "key24": "4ooKHVnY1Jq38jy4g2aJbuAxDcp1kXAFdFMU3ahKSEzbQEWRS6FM62uQ49KYjK1TdLniojxhyNjsJTfuxsUe6jci",
  "key25": "57TAqaXTxmkk3tZo4pto67yYFDZHp3Mg5Xk8MPjRhCCLR6G7SSJzhDBY8ceE7spECwmFmsYziaHN3ngZGf8AWGmN",
  "key26": "ri4pnWKd5EjyPYUxPFsMNDxvMMi7Gn6boR1NCuEBr7ncAuHkgx3BMBu68QCe3KFoz1MgPtugyTF9TDSVzEUYui7",
  "key27": "3Lr7fde3ZwfNk7eWR1MSFBL9qV4dMyDKvyLYm2XkpfPU8yei4QLUAZ2qmXnQG8RCZwu7ES1V7bVnY5tXiX2Z137a",
  "key28": "5mMTbUkU4y7ssh4nEuBk3hRA3XyZk3rpqz6BDgM7koqomnTsSD3LcXaNpF6Yx3z4PPT6jHrjuWZHcjSJCXLmkV5z",
  "key29": "3MStC7QC48Fdh4w8diioQhPncnBeE1ZBDYBxLnkFKysCSbiqCGLcVdLXtByCP36Pmd8mMqiaFCykK7Wn8svQ6HsL",
  "key30": "2HXXZaLSPM7BfVNin5ie97Xft4Xup6qLBw653PKgeZ9NC9dfV6rDUWuHYVsTSE78YumuEHBXeiH99W4HmWypveLd",
  "key31": "5FtcF4LhbTgMQWJtb1NsmJMPbp9hvq2UC6TYqzHxncpA5YnYp95CTvEL8tzf43ER8EuuE7Txo9yiWg7566MMtepW",
  "key32": "5mWrhYF9757HB3mZxiQt3Q26zksas3WQSLXEvxK8sBzBNTpqmpFjoazE68wDMutcyrN5HanqMNsZAPk6FFpcy5JD",
  "key33": "3Zh5jpSY3Bn5debVKX4X8Dui6h8dhdSnSExcgpmAXdrg1QjXvd1ZXXU85YRhzJtkwnsCyQpZ7ZWWJHYMyoJXQYb8",
  "key34": "5w6oa8MDFHbwwzU6SQfC6usgPCM2EnVFKgkuMM1YpQqUJTLbvA99BnwP32HRN3w99KXUmvyb7kD9EEvCtbCzjdHT",
  "key35": "4ASS1KbYzHvimMvHzx2nmw5Mk569jHFub673Aud92imgjDWn7dmL2KGK1N4SA6bxD227V3LVeof8Qsc3Z4CRiJt2",
  "key36": "24sP535fMCj1FyeTEZX7frwmz7vgSti4m5CkGWpNTkJq4nr7zZRSzeGwpLMov1VjyyixdnskGQdAhVF8hifX7P9Q",
  "key37": "5quURnLQNevyuNnjCmz2K8Z6MGhcp8rsshWmewftGkbjoNbzeuVdAAKdPbxMdCJyaXrJ8zuDe24GSz8K7nwMFaYP",
  "key38": "3egYqUdhwYAmUZNrtK1hH7u5TrKDQvqnMUM2ez7DvPWAq9wicC6cYB5WiLddiRafWxxULSuHM85ypemzGDx4eDta",
  "key39": "wm4VoKPpR83WAV5AuYGBPqBiNz34eRkZiGaPkXEmaKwczVSrUEgKLDindb7vZX2sSkbgMNcTgo23tbrXQHaM3db",
  "key40": "5RJB9ba7fE9QBToEgWMckAN4b4oTiajRabvoU862eQ7pMQBxuy97beC1iXxJ5BWSdkLS5oNsrxTcZe6Ci6MJfeu2"
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
