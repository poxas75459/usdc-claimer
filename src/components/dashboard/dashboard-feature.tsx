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
    "4L2vy7byAb6dzDBDvSpHyy94XWAQFNjBwwvBTxpJWizRntE8ZhZWgRstwfeeJdh7P9BzmUZFaWBDGT4RNwGVuGw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gTXhcpMBah6s137GC1hSNsrTSX69TADwMgjyu1yyjyimpWkZ2MJoJedVbX5osuoJB9CQ9UPZyjMcA6SayAhZK6z",
  "key1": "2VRAfjS27ds72pK3X9nGzUFtpukAVrukNu7VJs7GaFARnSvDG7JF6pBFQzzFhFmHeFB9D8yjVogHCnXgeUGeKBz5",
  "key2": "TqfiQB5b9kPymkhwfx1a8ZAkP9rhJvhsB2Skuk2GBYQEQuVGFZWb88irpTx72f5YfxnHAgg83xBpv4PAxPHvCwQ",
  "key3": "4teynV2hZkarQNDoJChvKHAsQutUqKob36bxjPeqrKkX4triQQtTzzdUm5L6YGaJJ9hcds5tBMg96sRkE9GZaoTX",
  "key4": "My6uTsZCqDwDdqTHrWaQGNG2NgiHJLE9ptPvB93dPJENhGUBgGhZMQVPyjMZQEap3T6kynetB9wdRGyuKYr8vnK",
  "key5": "5gePqeYAf1UHLFAQsx8TGpw6wwUXNzWhTJDdxv8i5ANNKpoAN7wME6uEzVdmoiRWQFYVtGkQiT3Y1LVptZed5tXp",
  "key6": "3sPPUVqWZo2jUumUQDeaNY34s3wVKLTLRCWcNgvDxYZH2ndHHMqNHmBu2j46bPFwEDR7p2wmbQ6JEZ2GA2ThCJ5x",
  "key7": "43pLttfvavKdbnqNeJtJoYtGFwpD7Mr5hdBdhzXaTJo87uaAxJ5xbqYarq48te2iNFNRhG8bbadX19eDPrMXZ8fJ",
  "key8": "5Cycwg7ovELa1JVzWkZ3tT6RJjPgHpK9Sr5xgEA71QkQjgYdNNoEWMnH1JLRPdGTUDiFv58xsq6kFFuY2drNNZNb",
  "key9": "62kbm3Vi8P2ZbXdif9ECvyy5TAmEGyRpXThz63AgbtT6GM9QgbmRguX6esRAzJkfusUx7cEHPNHvpd9vuHnai81m",
  "key10": "3M72zML2UKEBjUeg3aS4MMhRcF24uECDczaQVCLB4cbrWwhx8jZAnWG5o76jTyAf8QTJgpVQkfhqeWkJamipyp6Q",
  "key11": "3tu9X6gkd9VrfBFv1QzTH2NgpVkq3Yw28ZJASBibU6Liu1Gq6TsXeFDTA5v1Yvs7KVkQSpPr3VCHJv4cMVyZu1wk",
  "key12": "cUh44pvo6tAGsXbTTSCipPwknW2xxCiHu8K8enweg8XiRAxET7ojpX7YWa1vjzVdrAn492hmdiRCasTFXrCzXSD",
  "key13": "Qo5qCQBk8i35P2AHJw7qSkUYMVJh4cgqY3Msh1iXHchei5vVbQn6hPvoW2nZbq9QuFZ5CC6AoJXDK3PZa5bRxhZ",
  "key14": "3LJeYti2u2UXGEvyu9phCzVzb9UbzPCbSgsAvDxz3pnvSWtomBQFtmDtTJZ4vuUcLWATneHpE2XFC9SWtjVCqDKJ",
  "key15": "4mhyYQUbmeDoJgqbJVuqAvM27Eewvr39GLkwPLRAbRHWveik4H7nBCMcA5suqHMHDBXv6vWGAWnpTU1v4pJgiJ5v",
  "key16": "j1A5w4aA2Ga6izV6kJfRmeoGbPAQDfEcXf73d3ERW7dbHSRYhPQocioFJhK8Z61TP3GPVe31HK5N1FyTfNffH7Q",
  "key17": "3CreBbVgrMxvLjDoVwDmugmT8vMkZPeeYJG9Sy2e8qewiifJi6C64aybHMdYD7qneEfVpZAtZRJk8Dysg7MmVm1b",
  "key18": "3CRxhgKyqCZQcqt89TfrRzWZD3qhYQNQAttk6j3LM12ZmqzwNs2z4qzkBhjCxNvCExBdXiB45WSxQCfkbLESnJPo",
  "key19": "2EKHwMBeL9kHtA3AjSGYSMNTfXvggkKLGwk6YxcyPav3Hj79uTD9a4aVVSbVYHng4oEveHLzx7ZfR41voUsNvUuB",
  "key20": "5MXHu2YjYX6UnwWZkTGMPneDMRVug86awaRmwzxnPzVS4bVLM49hS5s1URwcGzX5MeNDX3aKTMvufiRV8eLH83Hv",
  "key21": "JuDXq779QZjc9yWjeaDnJMUDHJcEuXrNnPLeT1EyE2nmUwMRFUJuNTmnxeCPUoG3zTax48uddALUVhTuG6WyUYU",
  "key22": "5JW3XXyGA5cHdPbhet1imyoNzoFVmzMbMfk3xPBJB7Adr8r8sz7x1UD19u1Nmy8Jc5byoNR5VtRrFoxza6aVx2fY",
  "key23": "57xFUJDa7XeWX7qHfbXC857eBJkQjf6rQF34NYc8KqyVP4NhuAhCbqV873CtJvAGAksTQMB8XkuvXpigMUTAEGLt",
  "key24": "2ZZFuLmD6NFRLwNNmcc9cXw1tkQDiZAFUoKQQCK71pDhTUWDgABDhzv2ncyoqJRkJjPxL1kcVpseFZ7bUCfhhW9e",
  "key25": "4SdteKAqxxDi7Pc4bBJs6Xzy3uTrm2uS32DHzhUhUHGarotUudFgAgw6oCscm5Rm3QFREmcQiDHQcrP6x4UQBKFu",
  "key26": "2CxVSjsisf6qnNsNeetvjhkHdUTYdxE5bshtk9Uit2QDYsvAYKzTj3wHrQ3eUjJ2DZeZFggMz3WTWPSb2mauK9u4",
  "key27": "48sPnpzRfJLAKUW3142P7aVEhrMAjgiUDVd1trCmvb2tY28dGKgKGg24P8Wevo1mfdgmA1Y9yc8rXgQTFBjFVRJK",
  "key28": "5Vb6pEwxwfTPw3JLiX9PvNrg2hsUSf2Ud41HXGVvFFwqQKgVFiigoc1DUF9hnzLfYB2AH1K8adfsiMF75braeBkS",
  "key29": "37jRt5bhhhMNf6WTspzgQizBZggH5qgXj8KEzxwxMhz9BCyNFWhuNgYhjhWYtXmH1UvbgkP3tVkbTPVPjLmNeY3o",
  "key30": "PMvhLRR8ZTkcbmySdSWbHvbQMpxB2dQcddNDJN4So4wnVNZSBT35u1cL6k1C9TVhEVhwUZcHbV6w7Ppra3WPau3",
  "key31": "4rJSpYhpK6BTs5zwAdWnq76RfRgA2WeDT2abnatbdwbw5JxJNVNqGk4aTpvGE5nULWXB1n35vThdxushbvzxahh2",
  "key32": "5ZNV7wkgEMTEZqdZjQm6q6hesvVzqQSAo7eQGZHTQSvfSFFSmNywyTY2Gb64SZzB9EBcQApKN7rzA26JmJZVTiyF",
  "key33": "2qH3zxvUqMZnDpRAVw3Q4E22F4yD7vLTMVp9uJ7r9HiQCbt6Y8gG9gpHLfn3kScPdQnkR76CaJ6hcwEP78oGGNxj",
  "key34": "41fmTvnPDqNxYdgPyBg3njJzSmsLDT4tGebDULX4epjY6neZBcX8UafpQGhs9BnkaYeoLGR4f6QJR1R1vJ3hoG2k",
  "key35": "27zJsXSLD4TAqjHLfsDJ1BTeNWGM7Dhg8XwKj24WFpaHUQiA7f8qkytWpv3nrWKHGDh4M5ntm9PqEoJ2iey1YZ25",
  "key36": "5FKQQbSGLVM59zBMJGi7Zx5G96CqAfH9GnYBZXXQ3c5VPmepuvwikKmXTjomoMVtnbeB2dKYmTdWUvDdUrAa89MR",
  "key37": "9dCxdiXd6hQwB918zRSZ2jREg8rzkeXvZs47RKRooTTiATnMMLPndCkv5xiFKBKbpnkYnGKzk2WizjRoTLaALGC",
  "key38": "4tAxT5SQYPMoHqx7S6M49JZcTTx38wUVCGE2a3id2W8GVQZ4ttQMa1MZQztdBYMTxUkcFhEfjcGYD9nj2Czz3ubL",
  "key39": "2hFehmTEVuxatvxvcXSLZg9qcg2sDy5LzQXwwM28hNYhxcEBZEtk1SiMTnYvFRvPiuvHFyD8ZAMYfnFt7Cf6uhi5",
  "key40": "2aNSYzJDnNSykbQHT3TACiCVDxhrEbhjwUbFhs5mE7X8opweBi8pVRtWjXBCmVTJ1zvF7cMctuLCuGsoRLbJ6CGj",
  "key41": "Zso3GQy6Q82e3P4NEF2RbuvcAeBxfFSMkUXVD2P89k7ih8nnpS8myMnxtNFpUMC8Twgta9taYwTnKa41urxk9np"
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
