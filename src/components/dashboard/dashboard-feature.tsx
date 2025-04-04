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
    "2pkY3PQ7NCaUQJDxjRU3qKySwWkgwzLiTvRm8Q6jwJnPyDPaGkDS8Ysq1oV5QavrkRVqapfZDBaWqd6mvT2grXDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "12A2X37jX1CAvvxJNbrZksDvUBCgefyjZKobMMANQwezEEsVcGPV2m7UMqpPd4BLspy5MwctCDYojL8MTUNMCzER",
  "key1": "vTp5UgtL8TjTMHxEaoWk9sV7gctXvp64nuhua8KihrZjrZsBWdonLZZZC5H7E69RL68hJHpccCyxquRGnxP4MmA",
  "key2": "3JRL4DffcpqPTNnmY9Jc7h5nd1SRmWU3oYf3zhGx4CuCsHZ8URnzeZ4nV3uZ8JhdhxTDmwkno7UZXHUCekufEYUQ",
  "key3": "4stPG3PARRooskmUnjpJrtJ5xc4z7CnfM4vKju5hme8RuDsnzwKALVf4V4sofbqE9Mibtz3rv7nqLsvLgCGBS3m7",
  "key4": "42L1kBWZPfy3Rk2QKFQdxXN9zQeBhW5wMLFmg4eceMJAcjZ7hgv57xqEr3LJ7wZpXXBrFngV8KAKiatKtgCgDLuf",
  "key5": "59C1cA9sHjrkJf8GTEDL6kPEveMLrL2sALQuW75akm7Fkn2kQGtQG7nEEy7swqLQTRV1cfRwycuMS2kkZqSPGpmR",
  "key6": "4Y93t4gqGbSm4AZdr7iL8VGP4jq8MxW3RY2bEyN4WK7F4A7o4dgd3GBuwbKaYkxhcANsrv9Ln6CGW75FosAALwv7",
  "key7": "3gjvMfsgqm5LZ2VHhVU6X5grxBTkvNszxDfqxAUwJ25PhkSi2Fqk1dgEjGKc8VN9rDmP88t8CaJorpzS6jLdAtNF",
  "key8": "445wAqLPCNU4eJ2mj4LZPPVKUcCY35y7ziwXpCQMZ2PrDPanMF9duMFSiB8zqJH9XWsbcE2JAnkMU1fAMZSbvx1p",
  "key9": "2jzmFNF37zBU6fZ13f2uMxsvigDiKja1KyAwneYxP1aCP3GZnwfrucSL912M85gkAorYRAag1axwBrpPZHJ9AJnP",
  "key10": "5vtTqk4PDtvtuSnEc4Q7zWdbMw7cuAexjoG2jNVaE7DTQmpHEjczbij5Q3K91hJUAV9DPEUKMHsdApzbcaxRRtYx",
  "key11": "2tUeGkS7KuuLRFsePVSCDWZQLPCFJFep6wLRXrCDfbW5JfvoZgRHkfZi9a4WLsuR2y8NbtJzjFkRBs1iRZ2AumFc",
  "key12": "5sYvAmBZv7rZDhFKT9haW9jGjoNfUnyihfVR9Ga4BQQDaDKGYUc8Ztyjy3YVgGXQCn6SDv3415ZdzJUy5eFnFXK8",
  "key13": "4PJB1kqbdk8QY77cm5VBP9mz11axyaemwZzDvYMV5XMuNYXeTb9JG4hf4KPnHfDYhRGNKYHjxESc374YQxNTebm7",
  "key14": "2vLHN2wMUfxEd5oGpR89PCsAh1AKvkJxk9RCibVTQT5KsXhdEF7Zwiejk9LY9uvL88TAsczfkp1LNgmaQmaegn87",
  "key15": "tmS5RkYfcxEzRFZX5EEhoETkXt2c45uFnQXc3RjQP7wkjLHRK47Y5bKe8eE66JsqDtmwU3s9L7QVgQPvNwFTsgt",
  "key16": "4RfjzP2R4s6s78QHKfFJQfxHH3JmvJcjod7aHpNVRTPGi8wX5ha1XZKP8PHMrfkCjD9cXaQ2JdUgg7h6nf6eRv4K",
  "key17": "3tQubSc5dFgkfUS8BG8ywj3uWag6Eprcsa5sxF3csLLeyB2vdGiDBjwoJZsgXUCgcWNXCP6z6uQA37tnZ6cZsVAL",
  "key18": "5dZFMe9a4MrXQyruj76YnSQLxVBQ6K9LDAy2jmU2KygbK3SLcDVixtA9LaqW5VPEsr9RAZbfsP93KX6RMqpWti9c",
  "key19": "2hvuQSB2SAonfxjapLH2aguQFPJyjCsy28D9QLgVqSG5wgBd6AWJzh6TsXoDnGVnuZNLNASATpvGn6bFiD4Li4Uw",
  "key20": "2AT2Ft9f3kTBU71Q2ZUYmKRmyYt1e51DxBTxZmbA6fAgKW3sDeBrJNDMGRtpqnQ8tkeASge7K4sNT4cbsJ6QmLV3",
  "key21": "67KxaWtgRJHFU7bZEC5ffjvW3V2qNDjFQskKMJ69oaWAWBd8UgyCXePxRh1Er2u4CPajHZE1xaCDmHTmBCN9yb2D",
  "key22": "51ApPPR738BnsAmaiQam4YKuNCrbKMBoP7zLfYvaGtmEVqpJVbChSbWnaNvBiWamLod9kXsDEX2SPZEZiNVGmcDv",
  "key23": "5irfHJz7Ynd5Gbzsa4Wtrdvaw43JgNMDaUJok3eDoaACYXCNnCbcoFjpGUGnsQCyUhc68CRWZUGwEPX7uMmYwBaq",
  "key24": "2MWai76nCCdyyFDdNAG8HTk21KHz2UorhiTPo2C8TPmH55eqjxSeivwEERh9bJ1erTU7VJ8jmpoi1uYF7ssF8Fi1",
  "key25": "3Zc6zhEWmjQoaowBeHinKmWsfGGSLJhkqbtG23xfDzsoeeDDRzBzu79Qfh5DmTthgLr4ugR1ERXtwgs5BccEMrbJ",
  "key26": "4ZaKPk1r3Ffpm4C5nYX2MLMqJY748v9v6BC7hjtySgyNJqpkcN88qNkX9sUdTPK34P1rzTfgEBoPvd3SA1zpWzEX",
  "key27": "2evvMFcLTBQjRbB1hHF2acBnYVzXHRXzKyMZeG8LopRDzZMBjJMTUh9x9Xn8rxuPPCKAsxQsNCLDUFEtJgYGSCxR",
  "key28": "279kesf1wTQu9WtveEJV8QoBo6saLEUYzKueRE3h1SgcKfTUZdJm1H6X3rvgGSJGounkpSaD398TYsLdzu6d56Yn",
  "key29": "4v7gXdjw242WB7ZcabaiinU4LmHy47WSDoTdxXX7ZbTw6wXaXsgkVHfjsQ4CJG9x9ibnH7uGJNvguQJu4Ajhx5Tu",
  "key30": "2pQff5nVT1h5WtPCe7KQbNTQ9p9Z9VTu78E3tEENSJutyFXTgSym99MUDaii1JXkMGSbjNDNrnPy8j4MrxM6vsxo",
  "key31": "4Go4Y8ydqsrMHYkue97LuePFuRjhC2xSxVsXsrJ1xSZvzTrs3GV3GZLiXQehnN68gEtEdj4KGLR76XsvLetPFLXo",
  "key32": "5zk7DzVg7CF421aX14frqhprSFKHy61A4xHi9YjWW7NfdrmewDJoq7Sh98jan9qSJPteWEws6qg7rSyH5peJmNmb",
  "key33": "fsPeCMrQ1n4BsgfNs5s1HQQgWbayw4gMRQpgGugJ8JURSVKbqPs1akrbxGMgting25Wpt931MzJbN7ndGkNBJ68",
  "key34": "53J5crihcQ7Wwi1fDJycJNkWMoRSYCfct9YyGXzFNqb2RszShwvxKsUap9bxydhtRwWyoxRzjwLfAzz5V3mUtqJP"
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
