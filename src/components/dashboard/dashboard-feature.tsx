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
    "2vQjw7m6W4wWvg9SQTokurBCbo3idJBZT7BVJc2HH9T6qqesaRs4Fg7HTeTHs6GQSPnFV73mDBT8BTSP7W6mfj7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TcDUZtjrcNUzsJHhBGs69oFYJBBeTDvWAzkdaN6NWNe7QEobwFsp22JW2qcaAeiJx2iCbmngdx81ybN8BwAQqDd",
  "key1": "3dnD93PxrGNUunegZYCXwJ3PbY18zbNHzMKZ5pZFCZbzNs9PtFiSQcpfRE5epv7rKDh7oJvTYTUJaNU6VCVcUyaq",
  "key2": "4shX4mdDScx1PJjRgqwXD3CKPSwHT2Y5ais5hQh76Qr2SpGcMoQohmJBuz6pVTdWyvXEefgmZnsqMPVJDxfY7AiQ",
  "key3": "TEWEGXQq8zFtu8KTRYgohHNiTiMXRuELSYgBPDcMtqUij8ZiuwNhnxwyxUGPr25eBJLJ6QAEJE6agxRenExEEJw",
  "key4": "JywvqSnrByywdXNvA5BLaJQQNEkfc7t6RAtR3udpCtYsy2tFowgAoYEs4UJ1cfXdsvy9hndhHQf2WF9QocKDZN7",
  "key5": "5FN2s8tWG3P14shvgFpmGZQEAqPEWVWenmNJSRPynrKwLDiGsXQiHqFpf2A7dwXbsM7njkW6Fe3LbHAn5aviyWDw",
  "key6": "3KsZKDEJcxDUjyXSWyT6BpFfna2VTTWutoZrduXgrNMwbzQK9WGAKMjinCGg2PhAdpXd3XMnLJN1fzkDCCyvnEEF",
  "key7": "389ZT2DYHmB957XC34eXFTw8LNjHs8NdmRVXzwYL33yDDBpbEQZvYzJkaZZe9VM679kRpsr1vAUtA1Ti2UGi5Wbc",
  "key8": "4UFj9WdkzGSjdBzVSmcxB2e9jvLrufDjU346Eos2sXR9EjpEWEH5nzHwsZ6N94syuU7MaxaTgEfUmbtK3XLs9upA",
  "key9": "pXUjvhoDBMpBnhmgbuBeRpaBEKVA4Kscbx7psHeBzmQL9bLg1FWBUf7k8UB33u2yEVBzjtCxevmfqLF1hvxV13w",
  "key10": "pEuvn9bTAR8VQS3UvnpJZpRTdQcN8zQ72SDkQdzNj6MoHuSDQhDUVkzAN4KHkKupewGxnzm9cLLyvVqAkbp3Ag8",
  "key11": "VpdCJi5oUSnYDkMywkdXnLavTBNDMUDgdABLVwYyPY57pwJtpbd2GU4LzL4XjQ83KbiWLZ7vYZyigAdKpQKNLwK",
  "key12": "5kDi2BSGKWTWqPDjPAmQ4jrCjDZ6ts94DV7tS5KA8Ci7YHh1j8mHLVqctY8UBWgrvGy1oEsPVWMBsKEDWVtHMf44",
  "key13": "3cVzXdzDNuFs6wARC7AG3gCypgMUUZko5aB4B35ofmkTZCE6okLoSxLNVvPAZwc8qZm58V9yU5FiDVmL7QbY8Fvr",
  "key14": "3m2QEdVKockQzARdPtPyjhNACrrNGcxhKdyKRqFhouHYwr2QTYu6wz2iN8xPMZNscAkbc8iSrBkkJmG57zLqBLgU",
  "key15": "4HdXNauFj8q3Y8upyub9HKNnysaZdTLFVAtuQUQVfZgsYTanuMbsHkZJ7mkCpjFZAciiH63gyEK3tNXEuPykoohb",
  "key16": "3DJKpNgyfXj9vcdruPE4HsoaHpNSA1suTw1iXKn2eEfYdL4AUsUkQxA39dEMd5WqNop3dDYGNPRdcTnhY8FMGotK",
  "key17": "NCMQemzuw8Nwbp1R7mMqrDQouLJsFM6mEtHKKEmMUeUEd3jy7xPXETLVnDQxgAQuANkQ74LUQFnmtzXzvP4FCi4",
  "key18": "2NeXtNYFU1KySwT4neAModrLpoBwwx2pnzStPSz6rgTb4EKTs6NGpMAkrfDijBbnmnAQBEQMg5XPkNrTKERGqM9H",
  "key19": "4eNM1iRtQsTkamjVcenq1WzWp2fEHZoVg4iEAcAeCCDv2rs5ckRjoff6DLpY8yE6wo3ScbQe8HDxs3JgPPu4FycV",
  "key20": "X8GqYP6vzkYVQbt3ZRxpb4Skyu5JvHYC9zwXhJsZUydFmLgtuTBuLQBLcbFiUUj5q3CZUdyw18WraxZDQXKzvHz",
  "key21": "5VKYJU3s1oGs8V2Ge5rD5hzpdobUTzmyf5rqFiwn4ATXe6TwBxAWwWkVe1qk2reKE5ZrZRZYFndovRg43zFbmM9",
  "key22": "ag4v3QNF61Arjz5Ck35WdASp8wWGyWcAd1kEFKESVwuBRYPCtpvx3GGEzZ5hjUci74F9JVhz5VEcLQgpPv7aoPx",
  "key23": "4xzaK49WTGFecibStJiGivbX4RxVEcgzUnFTwmVLzPM6HmYf6WADbHheDN5eNrXJ8XJzKGwA8EekeCXGo9HeUcYp",
  "key24": "2ez7SxTTJFifZf7pfVNoy5L8ZG8bzx6xiAZyce9ZSJGaD49KvpryQxVzn3tSCMTvp84vFJqxD9aHFhkgB4Y5q6MK",
  "key25": "4GH3rA7acSEG7P9agqt78HLNX5srn415yfFXNr2GXgC79C2jxeH2cqx5xxkPd4T2VmcAkjAVybpa2WpkpbE4tPpC",
  "key26": "4MKv7Aa3CMDWsdBfzaaBMFZRgex2py8XS6EYFoMtQSwovhF6e6YpUEhjLm9LBEBvcBLWPjV6F6mA71ZoB1ADV19S",
  "key27": "54N27SvUqVN7DPbpBJtQDXZhpGtFjdUkpXSicfAQu6RhWh4VJ2x3JwDq5TbGdDxtyTigArt92JJXFc4JVFGR5Uqf",
  "key28": "32dpb5AdcTqA1tk2g4wTLD5Edp4ME7VfEUaHJkfa6txwruGASiiPA2NyfspJ9RYZQabqBkmkcZ3bcUko8rZx7Gyq",
  "key29": "36mHMMrad6agLYhxCJp8TypfHRA312jEq8uSri5dutzTRYDAjcak4ceLSQouGr4stHiK7nVLnontngUxGrCaUN1i",
  "key30": "5pfbknfdPYKhA3UV2DPt8sg6rVDsoNMPpoJNgvGJ2iRsShh6ZxdtvvUP2U1sv3t4DsASh6BZhGQAGNPJKYjGYBne",
  "key31": "2tbxRvCHBHsZ8A7LeMbssPsWXp9FZj5NDGKB5fySgkpAPYqu4ZV7g1UmNhf4eeA6FcGmZoXzCVLNaqiXVEWdKX54",
  "key32": "5WzXt6Sup4wAxtvV8SBNCMBGmjGC3vS1ePxyBmX75Guwfk8EnSuK7kErcnYFfwEbmQymNapky365ARKEdYLh2U1o",
  "key33": "3pFGoW8vmFau72wnwuJki7s8FZhosWi6NfRfuQEtGfQQ45pc5vJPFsBdURMHgDxr1sxFgdBKHnDtzF9e2HxQ1Bya",
  "key34": "5i2CeenSjcuxgubPCfu5B6TXtfo9dKm2FsjiRy9cjytjZCN8sqXHTHdZvt2Fm5YHz73DDYdZ19QJXqiRrNHm2nzS",
  "key35": "4iXAZiu4tJjFYpUMyStzJxZhHd12Foyhgb93jNQizCQxWTDzAy6DN2CjpfzVmBUKoJ2hrvnsdS42XCAQB7jGuejw",
  "key36": "3P979VFA22cmKKtfFWi8FGgxydbF8yjQTeDs9PCHUMhaofniJ4zmxPt1hcHkKCXSBRYpCknwinZBUjEipA6ZUi32",
  "key37": "4UHJJ1FZS1kMffGmWb6Z6YN9UVX51tCsH5KxacbDxbqkVQMMFxdcxn2F8iWuZxtb5Wa1WU74TyvSxHoMPcbcX5NB",
  "key38": "37wwU3gGZDhRXJsLKvRciHQH8wTnW7UQiS6eguzAgqCEqxRBzH7mYj8kx35omi9D2AhtJdZdQ3iGkuUDiGouiUS7",
  "key39": "8YvYM1GttQnYBjteE35k6iikuGXMadypgHLLQRkkHDybPGq37uQdJGtC1PnxxVRUZ1D7VsaDaUEXs3kbo3unToF",
  "key40": "4xZm8jDPfAazsAnvYYQQAk2DZKkXK6ioncqtWMedSgnNZ26tdaewhq8YhKXDm4DroLkTJ1MgfqcjosDfVxsdjt34",
  "key41": "5PmgeJzA6TpSs2icYVSFogHhyJefkoMhSbS7QVX7McV8HsegKoWRwpdPbViBzSsNnfWuiytdAQRH4zLgZ1F7gaJ5",
  "key42": "5CR7XW5vMLdCGBfgnwrw3PT5ZcipqTzyHBV7Fv2zAu2JBPKHa7jnneqMJyaiiUCMvTJAKP4RVVREGEgNwSoC6G1K",
  "key43": "21EPmkeyfQMLGAqv5D4BrD4ju7ZEBXq8dm6anQjoms11jq4b591HoeaSzovffwA1qjYyubkyXepPZ4xLbtggBS15",
  "key44": "3tGjMTtWHApygQtVmk4L7H4hrAQ7xfWRv1sPCSnaKzZz8pCARpwmD8ZFHCHxuMhJEDgVfs2YAuEqkuDHTU9eJFtt",
  "key45": "38KwNm1szfbcsVtGFedBeRLZesTSy3PQaaBciyNer4UmkUYC1YvG72cUSZtZfVb1WVbePguR4VFVfBdscV2mD5zX",
  "key46": "2c4arfXFVsMNHYWsGry3N6uUPMnbyKduMjKVUh9Gaxac9r8zswym6rFboVdLRU33VraYDLzkGtVjh1QdH6X6PMB1"
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
