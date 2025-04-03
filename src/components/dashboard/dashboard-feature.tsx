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
    "PhcZ6N7mK1gdcyVxCnvsS9Fu6faTFns21hcs1731TsJ4D8kVzynAgZ4uoNQFGPaHfwMLvvSzJF2Y3yc1xwopbQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xNUSs2Fe5vtzzhtYkfcbyqhaiovsxbShqFE6qqHejBotf83RW93EdT71L2FcCUxYfNdhq6jiiLZjsozUSEJXpxT",
  "key1": "4mg3GTQScyW37nUWY2X8eqQAHvsdzhuDoFKref13nt6XE2wcchQYdc5sqqeasr1nCrrmxJnx4ekTHqenVVUqWnq2",
  "key2": "4Vwz6iYVyZbxHfoBUqcfs5onWSPvZeAcPog7Mb6SyFs29RgpnwsQoqwRrMGybqZevHmJWuBcfGWD8XHZ5Xvjr8ni",
  "key3": "4DjxouEgWybYuTiX4TzAhv9FjR5nCyxGgnaUKxRRfF7bvZAeKzAgxapxp8qhcacBkuDFJG9TnyNnr6E61gct6Rk3",
  "key4": "5VTVssbo3mQsUEQF9oxTE9BYgKkA6kwrZArLzTH7dLnJLPTNSp9o2XDm2J2rF8GTastD5peeEmJJiusZr4GzSxUf",
  "key5": "3YirFmJkdNit3LXHMAdqMaMh6d7nWuWrJf3UCU7vBuD7CAXioxYgEs7HtPhALpZxfMLF8Ez7AbvKbcTChrpDLyfU",
  "key6": "5JBRkYfVwtpp4Awi6N9WuWpT9VrZ99Ykefh5hTSkeSk2MYspjvztp4JLXMLBx7JEt7dfw8583P4gwrcjUm2PFSNd",
  "key7": "JBWHs6STjSiYo2gNrGUbEEZ4PKeuBDKzeYWfw73HBk5XKhzyim5P41vhJbG88bvCyVSX19phdtZcLBWnRwq1EaB",
  "key8": "SLSF6XAd6QeADW3oooDSCRFPjqoso9t3wyEA8q3gvksUCtJccnTJPuvB1aBKsarSZcb49uFHvGiWDuEzsGSWwga",
  "key9": "4w5o9CoZC3vZJjVY96ZxUy7QLE9NG7aW8DvtJ5qiXCne8SeWaAhrAWbDbeZCXvmYqxLGzYh7nfdVjPwAM5HLLVJy",
  "key10": "3vWAnyvfQMpwSiAtQrZNHM9xKup59cQBqpYDY3q1p7adnb6iYfJ77hQWBWApzhqTRsQSo5PMq2g4JNhszjjbq8rN",
  "key11": "47qkTArm6VzuU8nmDArCWsMBkAdh7rziFzygqQ9nm4NFyYHXdgmEQnkyGZKbppCMn6jnzpXgvtmsFgAdmKdDBz4o",
  "key12": "5LYeParGaxBqNfr3TWC1PXDHSXyBNZSbrTrxS2VsRAmv7bgNrPhHjdpEja6uURNeeqmXUsQN5hm71fuK89L7qiay",
  "key13": "4q9y7Amdm6pUG6KnEKGRf6e5Sy2exhpUFDqw42RRYfwN1WVKT8M9PjmzjiRpRTbrJJrGjzRs4Q4rBxfJzMjMfHYv",
  "key14": "Ju521yCdENF23TbcFEvb7196UyJSBwyEK8ECPTBaWH3qUQ1ySXSrnUz37Jsr5RbxyZ5QP7rcLDgrXW6TuCnameB",
  "key15": "2dYiXJaXRio9atzztobkXCSaNkKjdjDEQFHSaqnEpJWcn2hvhcukjg5tFqtf3AzkEayqWDLFvUbF78X6Pk4EWGMQ",
  "key16": "2vS1uz3YMHnbt4P1fYqSJnRTkcsU7NaYqJGNMddk6wWQjm7VCxRnzir3ezf2N7tLYUJteTdt6uW2uUdp2vpuT9Gu",
  "key17": "3EbprqECW1v5QYuSqAwDS9eYb11NDCbkWCE31EHinNnPkMsQrJLS49YdvKd1LKXyR9Nh1EQZDdWmgFTHkVuCR7fz",
  "key18": "5e37Gvi1JJBMW4qQkGUT1mVrBDPEtPG3v1UZmd4pnxpYAaeSJ8H4FamTmCGAM7npYw86CB9SimrpHvaxzvoUC6VA",
  "key19": "4i31YA7kNht8Jejkdnt8kyka9L9Djy5wLVj1wH3HcNHnwVpPQpViQjEiWhejBtALwKGQpTV3msqYbRGYCgrdkWfW",
  "key20": "3ZDAMxk2VEbtLCkw6rLKZDkXtFaje1UUCzn3X1apjfoHDCp8gTjvWxcASCSwRSkSXFmqLReLGUfiwGXBevT9uE4D",
  "key21": "2QLjWWdj6TNVgmgRvTp25CeJPiQY6KEwKmEYeSfLip9u3ze1opEBYUMTRwNpMuEJBtwimKEMbL2Y3Tn36ZpF5M1R",
  "key22": "5mWTsx8P46qkZ5mvsYFGTWhuUfXwXW8Z5GoLDCrQgc6tnCkxhseS3EkerCvEZY56rLY7YN5L9ZQVsMUmwHMcPJU7",
  "key23": "u6f34H43UdiixH7zh3x8HwZoVHaN3B6PhSeuj4z9b3dzSut6LCUxCrbnGmW6qSdv8tcnErfww5TUNpc1BrnNGwZ",
  "key24": "5ZAtQC2PiV2LTbpTffnR7vYUo8uwGWjWZsUPnxqUNHxE1o7TsKwwb6UrjJM5kymocxzgCQeuE24zTMZQhFHY5RUK",
  "key25": "4VC4BFjkumfDRp7g6sobYDXmt875LqU1T3isGnMEwFGz2DjFZHgvV8pDdJqLhTskweiimhZC8nLVd7Chdi3Po6He",
  "key26": "RDJsZdssbZJi1UvjP1EKxvUSCeENBqcxVhXQEG8tjSKn3aA2YidEPLkxLYfvASGtaiwMGuSMYE6ufATWgjDrFG1",
  "key27": "4ZcTuFdS2w7Mn3onx1CphwSK7So9icw5rmQWdrRGrfCgRd79uKAyhQG4wU9MaoZk8UiWGtcAyrECfC2c7hBqBYwi",
  "key28": "3Ywz1kjwG5kHaGKRRoQ6CmWJuJjtuCdrWeVS8kgQjjY2t8ZNaqwXhmujL2NS4en7TU278YdbKxcqNTuVZt9L8vym",
  "key29": "58VMPFKe5VoiAVFaC1ARzehArurwbZu7s2JqczGUZSbpwTiZVxCdXUw1E8mKmyfNGGvCoPMc8k5BBhP9yLUk65V5",
  "key30": "5VZu2rZKowqKD3jQo6rezuSXsKa9et2FeTYcHPS58KBCCawvAU1AU7sJhZsv3BinKDTM1xioAxtcHoas8hJTdxzo",
  "key31": "sqJ3z7Y9kUv1siqWSP8UijenHPWTiCNFgv4ou7KfRZLprNXUQQDz5v6Z1APmvc4hN7bU3NvjBszwhBk6cUSzEKA",
  "key32": "5svng3P7e2cUsrRR6qUWtVLrNrQHwQzV5j52k8CzoRPfHLBbSPNfjSfMPJwsFFAWbwqmxK2AshuyWhNxaqZjJhEb",
  "key33": "5hUdoK7JDcuRnaECF7NUFtfZwiANJ3QK8i3NMrjhdfpiPQHMegFqoHym8QNtDwz6QmGDTnDzAXvSmfVfcG1Pao1p",
  "key34": "27bKA3mWsQvC3uWu67TrXeh7eDBrL3zFiBB8KJCrYHfddi9pSJYtC74JHS4zWJD14BTY3c9zHX8y7HZt5iLveUUu",
  "key35": "5TvvWEQ9Cm7Bss6GEHuUrm274bRgnQCJ68orvhUn2gPCrjTY8fj4W5oSQqyDSvUt8fjEa9ACGNNgrUdLNhhfw1aN",
  "key36": "5bUW9WFRaJUFSnCZVw3nFNkALtbuVxLDGtPERgrxQb5RX7p8vWS2tdbvq4r9xrsmNmwpp7ueNc4tp9aHuM9NnLp",
  "key37": "5CiY3m4X6bWiYP6NyQdimxs2kqLPx2zVrBcQo9p7ZVzpwKbZyB1gcGaEedpTzKkhR8L6LfEvWyKYC2pJAkWgDtAS",
  "key38": "2h5WKrLwz4vKpbwk61idsZoJZzqE2845ZbV7f4gcbMehHRDhMzkaZnVJUbhudAHUNJ6nJjyGYh6KydvJPSXQn6me",
  "key39": "4cs3dacHJQs3qe2UzfVBb4NzfRFYtBkQ3WckFGaPUTV7NGovMfgE8MCZGG8MoL3bpPbDpmWGvjdTTu869xGe2vAe",
  "key40": "45Eee6nfi1vNs32W1EF3jzZHmhtBeR1zczCJyKoBqGJZiQyeGUCzeM26NE6RqJMj1pyAF8Zxxpfm9Vz2nMaq97Vm",
  "key41": "5Rb7dYrJkxwYXPVXrUjrjvyv5KAENkMRKst6HEptAxLDmsL9mw2V3nswqeEFT8mMHuSZauKm7vG2eUa6iNfuKCER",
  "key42": "5HAhzvYmhRFv7cRqJacYHyQjgWwKVuPW4SP9J4C3p4X2csJmPkDRxH7g5SUz7BTagihk8is6Pj7BhnQxUeZBeT49",
  "key43": "XQytjnADQK36ne7SSHDddCgvB7j7zgWnKjunUY3WMCEdkYkCt9hiJ773zfMXr6URXY5T5m67512VzvBhaHY5Ewg",
  "key44": "aWRWecK1eeDJRAgaxRnNQMhmnL5wVkfQuG94ga9s8GNVzTD4GwtWWZ7X1fecwPxubvymJMm4msJibMNcN7foGvo",
  "key45": "5r4LxJ3B7YzwTjzM8rTACWYbwnJe1EuoKcLC4TyevzTjQyziDmAxRqCvyYKs3Xqtu2Zpfx7CAjS8fyPVPSUHNkoM",
  "key46": "66aig3adhiydUKoj8NKyzeyhhdn7WD5HLwQ6GZENp3nhmkGsBcYmUV6J4bL7aydH5GBzaVjv9FfPFfeJGz1PdKhR",
  "key47": "reLYyPQhVJnxvBk2mrsPDK6rtKKgjz55fpoW1nYdHbLBUzVXbcLzn7bCyvAz1vZtZVihNBHGtXYHSg2ydqAUdfd",
  "key48": "4na6TjBddGWVFEu6FCCwE4doDpya87cQbL43e5oeNZqPGSFjXAnYGJQQLFVB5sc7Qm1gpeN7kqbpZmvu3PhJNd1W",
  "key49": "2qJJ2xhLYiTdDkum4gWuVWs1RAMTf3wRoNykZScCEwf4yPTTV3D5AhFStyGRBjTegaFH1qniSsBiQoNqy7NRtuv9"
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
