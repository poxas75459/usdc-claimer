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
    "5GSXVG6Yy1iQnkUELVJb1vxBYvNxuSS2iPrhejCgdfJCywyDrqVMJZXB2ZgsPcXhKKvgE55w1p56xDDGTgkJR5Te"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rVsqonAAfeiFjYNEH2SaDVYSRSw4vCBXBLA9ALD8vnb19hGRkkXvhwGAZ17Xr1yowC3k7DCXpixF7VxsbuEGE9T",
  "key1": "3bVPcC3wRFdio7jSYcwgAmeBtZFoBkvDT8MHK1t482fAE9iJZad6viJgEXXtqw7yWBhAqc8sZoqPhiiHj1oZRfbC",
  "key2": "4Sdv3EszS2LRo8xFuAv6tCi2xG6kxgBYRT75125XrsmcmD6HPc7QyfJRLZSuATNsHPX9KSQtWoFfLvTttjQjoonJ",
  "key3": "4yd6UwSuVr6DvqHUumKcgx9Cb3d5CCj3apu1B6Bk4ERkTP9b4ZdsmKhb8YBAKCyCVpwG4mQzu9HFaUPzkeyGtfEo",
  "key4": "UH1BuhnNF5ri2VcrPqffbag8iVLYqRpA9bzxE9JH35PjsYfceK9TYyEQejCGK1n3jUCFRi4nhe5zyV5ioK3Cr8t",
  "key5": "4abKmYM72jY2XG6pcj3r5ghinRxafMxw67vFwMBwGEjc3zrdaG8LQdUyzdCtG8QivmRYd88jVTn2J9J3zw5iagkk",
  "key6": "5DUcEKB7NcV3ihToW41ePtXwufLmELQMhuamfL5NChog97R9xJEJpuiaUSYSf6hTQhdAaEbSDVi3C3FH3XbR5otB",
  "key7": "xJnLcuGE5kjZ64WWBCeQ9mzoe7qB268u3NfB6soRRH9Wqd7EYoJPehaStJ4gdpWmtwqeF4NJEucFhwh2BCj9vpC",
  "key8": "3x47hFTJcPjtQUobsyBShqemBsNpn2B1DnssMyMzMAb38ade6g1bJC4FB6maDPEVe3dYnLGuGt7U1QXmoZGhpzWC",
  "key9": "5pgB3T3NYqt5E2XqKPPx98AdWhMm74RKeMkBVgaFgvSdQRU2K24xKdtNKfjAmja3iGd1kNJaFbpqpMrCMoaGNRnh",
  "key10": "5Xm74cejJifTj9yVcSbtbPGLAoXtU9nBTu1Y6agiERGR7eSZrEtRTZXXZrja21h3gZBhSEsSnNJGeP3LfgraYJ4G",
  "key11": "5FoapXQ2pR4kguETTNRyyiofET43GtRHHmziLQh3jpq2bB75L9WY4TE4kSwiQNPe9AyEKEXbstRMdbZX8EXEzVDW",
  "key12": "rWhfPbWJhoxxWiwLdhUGuajDS5G6wdZAnfwHFHqKPyPqnAHFLrXnLQVugcxEikfKZjmKxdK2awcatqthjC6LNhj",
  "key13": "4isJZxGq5CLDVfVhZ8J4NNV7ZEvxqLBoq3xBuYSYChsiniCnCw1R4oNCcL6DnfXq3VmNvVbH437kGuma7DuZsP57",
  "key14": "3Pm2QmygJp7WkY7kpcH93UcgNi4pKx8kzJECNC5DjGnGwPfYZuUGwfFK1bi7LCyaLPcfMqfFmibXWT4tvmPMSfwD",
  "key15": "2RNEr3EkJB53yXdaUyCD6nGdh3abUvWyBq3XFjqw5nedafr7JCrYtodt9SEkbUuu881x28psWRPBGqkavxig7nn2",
  "key16": "42uHRmGMhZ4Nwp7nw7SisBDeKCtb8TeDHtKYsYAX1MuNpaije7vr5iaVxhG4DdkfSMDM9Qvw9rhuCwKuKja6C1Uq",
  "key17": "8EUR4bkMEy9dWMnSbofqAsYaTShAFgtBS8k4ytVKDVZa8GreMhhJgW6rFbzxbhTUi2mV5vyywDTxA6qkHRr8KHd",
  "key18": "65PdmUE1UeJF6say8xT1eg5ToBCXs8DgiGyzNerU6ZnaQqE9QZej1WxP4jBGnnQa5UocS9UEkpmBLkXfbFrL2Xjp",
  "key19": "WU2pYLrVLnVvpjXcNhpC3ByispmBS6bjDgN4pLVA4VfgQfb9mDfyxPdckq7GruxxZZGrePGdSg6SuamvnsXWe99",
  "key20": "Vxc42rBDe6Z1eTzP41orQCkFxEADA94KpduewdXPZTTTwuUj6YNMwERh9Q444BABBd5Hz2RZ9VEAkujkEv9CJoG",
  "key21": "ibdXiLX33W7qQxnGxXA1b3mqrMPWStzNNrSC2Ji3SGMgjYibzUQYRVugLboBZEvoH7GxmoRbsDPegkDiHZYRych",
  "key22": "3B2S1WadgWdF3NWvq75bqDuqkimvBBBjvoTFQUvm79AwwWRM2hzAYohR6fPLK2R4Rc2tr4iaNDec4MDo45XnkAHS",
  "key23": "2UPnt3VzEFDJhwX4yAPb6iuR5xcopcK86seVKu2siYUgM2TEhBZwBxy29bQyfeivAxj1uXuthzPvemYowLpMswEi",
  "key24": "28k3H1qUAhZMQukH34tMFZWWS6hcRYvdTr6rEyvqvqQzkwfUVXeP9NbvEWoToLERaMkQrtNk4kPBoUbYz5nrg6xb",
  "key25": "ip9YLw29jdXLCFzs3qpEB6uKhCuipPpkLMDyvtDhAMtBGot5mbuEPCZY96GH8W4eVfwajjvBamVBA895RWkdJNr",
  "key26": "2ZLoksvDfrJHzGwy5BmXNudTEMt4vFx84wFDvPaBjPbnfy9YgWjtvb3SYy5PTvALBTvjh52zmSWNzSZnfc76dBs6",
  "key27": "2e4BaqiLN8SigJddBm8TFAMHmKSuoaRUUpC28ZHTtqrS52cckpvejaG5HAQyPTfuSHdDchYDTzn9XCgN9jc13tad",
  "key28": "3JwztxZ88pmvKTVcjrs7QcavYUtgcxeb3dgJqvXa2kPiEEiWzQCnU8ytV2Bt2S9gGExTGr3QzR57JdwgJxusu4eT",
  "key29": "4QU8bxiWVJ25rE7G8iX26b38PmvXFefuKmVYCg4JN1j8HT4goRFzU2fqQn2CRhmmQnD5CEpqNyAi5zv7ry1YSKtF",
  "key30": "FCcJUjibAcQgKmT1KFVYHg4M3XLXKEzAxbbcBJMSsvNoKNKrbdJPBi8gZtom8bzwbsicgW88mNMTJUB8z35eZza",
  "key31": "29BfnqXoouhsxKxtDTLntxMCaaXNatgLw5hiUpyAz2jvvJ6MyJ5qQhuMqR94X1Ndru6yhYJgvfDDjiZ6tXEA4hNv",
  "key32": "4jrGeeNzozpgProAFY1AMZX4cy3qEpy9vvEQNQMbtwJkR71k874urmCokU7sXmBDHVXww7qLF1vA9zATpSLFaipb",
  "key33": "4CYuzYdTXUmmWVLZkB3noNxnbTwvRJucfhJQojNJL7JFhkG6yX1yQcN2k5kVuALBGJczW7SbDD2FPoUHznet45r3"
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
