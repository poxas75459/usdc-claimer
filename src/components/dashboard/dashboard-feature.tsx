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
    "3yrS7SdzRGZpK6b8Vjc3XSMhR7XRc2mmMvbjsQaeT22YjfJhv69EjMaxAGHW7HTcMwVYZzYHHH2LfZuUZGfKd9cD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qFsqmnfrX3DLeT9TdjB6vNwFnFPBiXHbdxzRa1csK4rV3hEvUT72Qfbf1WZL4PagWRQtUAMxETzwf2cTVXqkwuH",
  "key1": "3NPNbdT1BERAHbLZJVAmk3gkgG1F36JtWL1Mi26y1XUeSX7GzfFEqMNesL4aKNFHa3uWRWWTGWP9CrEe6HnKZb6T",
  "key2": "KQhB1CXhgHZDi1d9nqH3ZvzDMbH5e94CFXPG75G4Z7BC84roS1BgVUrkBoLoheFLc4gNRrjPMkyHwc54nJ8raVr",
  "key3": "tSoT4NfTfXrVz8EQwGW9PGYpC8YwTUQdXRp7zufccdQFiaJxEhmfCB7Ekp4x8xVWhYqH7xTHPhBqKG75wh6BYkm",
  "key4": "4JjPQJXUHbgJ4GGBAZmseBKaqrXCuBXvSPd922zjHr8MqyUY1wTPtEMea47ErVkhG9kz6gPvjkTX8gvW738FfEWD",
  "key5": "21MAztqaxV7vp4X2ZmrxfowKKQjcMMShs5YSwPd6nmXjUafmJrQaAUVEnsA3puQzfm1M9jmr3nJkE2Tr6W8d6DLt",
  "key6": "4HcwPpUUGuFihLymdD5SVSTxKZVVHZHE7UjdRP3VPwJMQPAgAHkn44Z4Uq7PSjyTRpTwQhUEVDQk4a8N3hMsmXjc",
  "key7": "2MNicq9UfmTLuniha5yaPyA3UWv5npjfQbCjeTfQ98z2iKRJ3ZsLi18u2N3eTkAturFfif1BZGu3LjvnTSGFPRjy",
  "key8": "34zxTHYjD16cvUmpodeWr5dUVM4JNdJdYXorjtqmZp8sAKnfrYgHAMZcP1seWeYnVvUUVVgCdxFHmdRVPZTpxiN",
  "key9": "5AGuyancjZGr28UoV1LUKet4uAAWfv9p1h1Gyfzj3JmXV8sU6ytAhHLQHM4qFN3LJfinGr2i12v1hUJHbFj8MC8G",
  "key10": "2rcDvrBfFZqMrYABmB2qip9vUECrG4yLtpxceKNPXqtDjLgnwtLMKNRvFRvCNdEEQ8eMvUgc29DTXEBtGq64kspg",
  "key11": "36hfRpikYc9ZpggihBzUwMLDnP6QnnQ8wPTmEjKbU1E13zD7NB16jTx1YYD2AgFfPXQ2tUmzq5g2MJY9SWeS3YdZ",
  "key12": "4Fud5CpfhM2ou65AmsNmUiAapLSrGh3JSEaaemuk2d1u3KVqDpjifUveyYZd7ZkU38BpVDSSJgYJidsCJAU8gxyf",
  "key13": "RdtDQADFi9AXf446q3KiBzZiEQAQbFmUv55a65nCWdEueNbCEqBRb5p9EYC1qjtCnPAfVZxBE9fRwovXghUgQ1n",
  "key14": "3D5Nd6Fk6jwH3LA27kTC1teRLj7WyQBysDPiNTDvDdn1fX6PujvuwhdxyHpXA4B2hMkeCbhe7WtqrurQWFTZkBb4",
  "key15": "56zRGmVL3ATzBHCDQfsxcRrVveGqLqd6aEvyvyfchU1a9r1x5QbUKY6iph4kWSveGMDcy2nYQLJQNxZPsTvzhhR3",
  "key16": "3pkL6iGAR7cVqHfx3aTaFWucfHTr9PwvMxnW8avG6QFW2bsiYje3nP2Vf8gFhHf2WBRbpj6x2rvm5b4r2ZoFEV7E",
  "key17": "wJTmP3mmR7voJhuiZWXGKNQyjDYbTQ4MjN7b8nSvwr8DGSAjqXmhB5iENR81bwd2k2bsxazjqA5Snd5QBAyuEJM",
  "key18": "129inCJGd1UKivBbyqE2nFAzJqn5hdsEWf3eMgKvvDR8Eq2zCz8APwmRWmtJuJCud6P6xGuRPp3wnRCFdeW1keh2",
  "key19": "V9XjrM3Mg3n5PvGbPCaHSeroDXYYfEoWYyhxzCqL45zhr1JodoD1wzgghwXCmRPbtpUajzpVy8KqThvEA81RhJK",
  "key20": "yiXGJ1sHnJimR8xoC1cu2ULcPsvaReX546xwCAA5Ep8H3g4KMHPN3y7t19GNZ4bEJJDD8rWZ7MQB29b7KRecB9N",
  "key21": "hdZow61qEGq48Q47tgETC7u2uoNPZGLBkvnWFPpZVVHARc6BCue2rtJQAgDoYZ1DQmLQjCSkM5GvmaunusbDWUU",
  "key22": "2xV1yA8r7Sg8gjTjREnyPW7AZ8ikAZnoaPXKSFSAyw3a28sdzBzEKgKRJFUjzkKPQDMpYmJFQTCjpNTFLPYYaPc5",
  "key23": "jQPdN8q9T45Wnr6XY5A8Bf25emqHrZ8DHFhsGY1Fpe5Ppag7ppEoejb9QqRoxchfbirchGtK5pjGjBRnYQV82xX",
  "key24": "4beepi8qh7SNfCsNnHpp75jpig9M5vbthCmqWT57KVpUk6ZtaCLYmSgRviDaFG62mCRjzKzCamAETtfWH2pR8dc5",
  "key25": "4ER7DrZvCCn5tNiDrBEGj2uEh9BBEbb5gcystBy7tuFCLQujxSPWv4PVWJr3fREraBuFCzdTtcwgajMk5Lqi81ZS",
  "key26": "44wcfeNNm6ReHAhdZz98kzGmkgeZBKjAPBMpPeEdis4FUwQm3Uj7FwgJmTv8HQpjUAABASjwVETMgNSGGmsJa9EC",
  "key27": "44wbHAFEKnhsDFYWrNBtiDWHB3tRoSji2m3DKxpEFEpdsjYxyixX1cuYLeSvAedhonhJQ5mnmBkhMp6fyJqzsYBz",
  "key28": "64Q6meUWAWPKZ97j1pbL1C6aefa1kyYqTbVHpfwZFe7zwQnKYmPSbyHk2beuCKbjaB3ZXoou4LF1yYKtkfgW9g2K",
  "key29": "4iYCuJj5uHv7qXe8AvokuQvd5seCCbSCSAxGDNWsNe28sf6FpkaGLoTBzpzkVBgkMxqXWqZZQndcdY2TW5DrLNT6",
  "key30": "5CxEzzBCteGmXinyKXzmxVqGKfBmSpPynbPDYxJjHEjvTmbsPxoQWUNBWHu5w9cLu78kfxo2B3L5FzuBWu7nsiqb",
  "key31": "674KSEdM2ggyg7wD6rhRJZt5d7TixVcUMnkk2MHDnU1uddt5g1DBBLiqfxvEFyqrrNFbnD5ViekFJA95ZGrJDS1c",
  "key32": "35Tsbgizhnu9EnZzY91p74zqtLsFeDXU2XTMm7bvfhmL2LZgeR2RgsL3z97QpdbyuLXF6YLZcP39pUT5Yrmbvor2",
  "key33": "2hJtY68EcVjaSMTrjBmPBc1PyNuiRJhkUJ6UToWPt5eWqYCSVwbao9wXQrJT34SUx4VBK5vaxxczmuiZ4Axf9J8Z",
  "key34": "2p8DQiFxTMVJgRhmKQnb5VFRZp2TQHQJQA2R6eL57q1SjBH49uBqdfrwQjL4vuq535aSN8C6ZUVgPavbpAX3Y6VW",
  "key35": "64AgTjJjjkG5Z5McKMr4NVnftRXoLNSswWKLn55gEovKyEq59mXZCsQnkRyoC28KCTyVUUVzQGkkjtTZgr4S4Yn9",
  "key36": "2U25f3q4DuyGzCT7rb9wpye9KuzgKqf9D8LvHgc6TFjyVSkfL4vVpd42WArs5ccaBUWasE4zz1XWKKytwcEF1spa",
  "key37": "QtsanS9L4Ezg1wbChb6ZDZooSJ1AJDFw4HrMWTLk1nSjPRQFQa3CzhR5wq93yzQr8ELRjH39xYWM7seZqANjpyT",
  "key38": "2A2EqjjWvbEA38ufGoBBdJHx6yVdBX4nUnWbnqntGpsFJoP7U7k2aT3qnCw2wNX25Asoe7c8XH5MVGnMbBrvTuEk"
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
