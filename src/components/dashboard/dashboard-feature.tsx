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
    "33dDYBAtjRbqCT1yUPWyKQotZTVzUnpZTbJ6stR3i2ZuGKr4JA4wur2BimkeUHUpeCEP1YJDih5SdUWt7YBg3Lt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LmXyGYfUsqRxaMFETYAHuBPb4KYCL7YUZfK7yUPp98MUND8XWnW3QmQYvHfPzmKRk66xc982BBscbzJWEiLMPxP",
  "key1": "AjfAeakBGUxyYqaUs6JTH8RJtYLwNVaGm5TcbjSpwzSMFQuzAzTnTaFjsdPn7TuSa528Vo5JpsgV15EwUhWF7Nj",
  "key2": "4tqfqpAbB3VUkr6NURprzfWPqg3DqoVbapyo5nG1jgMghoJEddU3Tg9nFVXVjV27fGRLrA7b4BvpARJvmzBL1QL4",
  "key3": "EKp8y48CCMXzCWU8Vgi8JfBizysdcKJvjaPwFSBHDj2vPNAEY9qguAv4HqYqEWYaVham6KV1HcjuUtc7TpwtVRU",
  "key4": "31RAroLi3gXhj2cQ5u6P3hYTrdtACGmZ4ShUB34oFnQaahyTv9o4vYPJ8rQtAKxAuH5Vxamti93rNpxXB5DDNiWN",
  "key5": "361D5qQ6vAYSFdPEyqz6zwHEG1NftotbPq8hrHgX8BPW5ncJcB1WijQdL6zAvdhx3x9LTxN6Hg2UTKrFNkMZ1LqE",
  "key6": "4B5w4n8s7ZLNZXUZbKopVSzXWjJf3Ji2s3ctnXUvhYE6DsiKmyEXRmR1qpyKg43stBXg5zMMWpwyXgKTFWe7VfGk",
  "key7": "5yvnmGyPs72MohX3ibwjVs3sZ8tcfWrF6Vr6N6r7Y9FijxkYfARBYL5teL9FqX3AvNxCU8F6xGGfHYyVoJZTiTWm",
  "key8": "4ii3n6a57i4iVWtEidgs4MQBDkkCupJBGbCUNeW4UjeTMhNs4jZFb6jkNTf6ubrxf3HDXRaFcgDtZaQaJndHFvtW",
  "key9": "5qC3cuN5EnFKUrE9SBshEkzst4gJmLWMUJJkvrftdyF7toQcMaoupa227dVce5H1kBQpEhqoBZB7pY3bPJaHXDhK",
  "key10": "5qEsteKAnvZg8U5jeyYtV62QLxxundUp7mKvNL7mEUPFysFnzjjBsbPyoYwjUUSiMQNoJH3QH9baQ6hGx1L6Q5bY",
  "key11": "6164iwQgqyZ9MYZTVTQi7QXsJp39jM4SvTGAR6KW8y493Z2sUWo8rpf1szg4Bvf2KdWkXqg6Tq3hsQgdUT7VV9UK",
  "key12": "4AYRWgMUtjtjzVvByLhXDcVpmS3euBdJYf15DGmBh38yzxmfGjbN8SLB75g9V7zhzBz8Y8dQj255AGbUQm2dWmSm",
  "key13": "3sed1jPSA6bPb6JUQrGEENmCtbaKv46ae31R5s1HJvYVer2CJtTTqJko9PjfxAZLeZVrmuSaYGSvRXN6Fgj2TmVY",
  "key14": "555EoJNbJMepBJDTCYnGYwPfkHcaueRggjTxsyD6d6JguVC2pFjWGgqqZwtD1oo6N8A9GFGYtZXs3JJ1sDvKW8Dd",
  "key15": "28K6ChxYTUPwiMiCnaPB9FooibprJLPGdA1FPggGFqxMgfJs91QdWmRYN6FGsYacdmDEhs5yCZ8tJDH6KELYR3fQ",
  "key16": "dMuJcc8QftjFS2CLpoQbsUmM1iD3XywnaoA1RVxfgY5FvDJZXjTt4iqBFYKQihSyigNwMhuqrJa9xskHaMddKf9",
  "key17": "5dgabce8ajmngRYWFjPT7TdKmzuvNTqrHX6ziUf3PZAgpCh4tTJ4YgapHvNRGzQE4z7KMVVPNyryp2ha94pe7NvE",
  "key18": "2X9HHd4eirFmipoEqpz5utJHsTt3mC8j834psaGNpjQDbfrp5wPTHZmzSXLR89xyshkvNsEWEDqXztozHe4Q6zhR",
  "key19": "3o5BVfRnXYqf1zWge2cWX4sbNtesgzDxer8VzFnzBjuiapsarG7P3NzVM7SUoAHX55rxpQkC29LnYXFGs6m94VSi",
  "key20": "dLE2of2Wys5JYCenVy6MZxPXEqwBtCCwzYszNpaaEBYP6imQPgV3meDMgKfnNMMSXjRokpxthJKCtDjm8T85vjP",
  "key21": "5WNPMZSoNCAVKbNasfMZpUjHCiSTtr4TeopeQ3fEUFNAjrq9tBAFURi27VUp3aQC8vWaygXX94iWcGVDhDSFHKPP",
  "key22": "2rKysyqYkfcTxe1kvsfcbAnPjcTNi6oEJCgoan27DfYhjfSoQ377CMcSQej5pUMC9ifJuPrKKErJwsWa8R6xYG2S",
  "key23": "NNGRRiuLPYpc4EraZoq5dhwMoUxmyo2VXt5Kw93Ppiabri7E2H1qo3Ax1WpodfXfKQNKFpWHhBRtZxezA3GQhnG",
  "key24": "AgGyxWnhubSqZ8kYDXEg4GvtQwvcPCQ5jPKvFwsJdE5UuUfFU2oa3SmiZmv5TF1Jivq4gqBPXPJ5dNqjMNdmmg8",
  "key25": "5UfWDvs1iWyQyu2QGS7XGDeE3UhTtihycuj5xCaUokVf1RYVv8213SoGT8bcyycc6zu2Z2kRFkakxu6rJQekzQqJ",
  "key26": "4jmPNjzhwmKffxitpqY7AtqPc2tXmGJXkQuzRRc4VxmWtjJ7LNWKZUtHbqCgh7kDGNChSnCswfmWtKKoUhrwkRk5",
  "key27": "jP8Yb5e8XvLHPqubvEgt7oYfBGQqiYkFHEy7e9c7XBhhiatg4AQ88KUnP67RUcFEToyBs25Rz6LDnwPGJwqXVoC",
  "key28": "5KgpeqhZGubHxGf7Ha6MbMk8GGm4SPX3Q471RsaNsTKLzxDryNP6UNvwrwoNN112df3aEAMAVmhjNXEp5QW5RmQi",
  "key29": "vsCAp9ErTZb6ZuGWwybfcu7bRyE1Ltb4efQXwe3STGzXYj8K4vTVjb2BiSHDvzrAoyPAhLioJJd7LqwZqTeNjJ9",
  "key30": "59Mrf3tuo26AD19d6RoMrm9tEAVYXLJDk2AUZoiqvCXEi1bmqN4sSwT9q2PmyvUTVK1EoXgbeRsMiXhAS7bV9xQ4",
  "key31": "5a5EQCj3BeBR2MMViJtgG4aU49VeTfEAHZqM4gNDFyGjpfTwy8NBTTqKqL84aCsQdF8ffGZee9xroeFMeLVLWAad",
  "key32": "2VggxFaVkNEoXiMipji6bvQgrQ89BeaqdJtz8ygVTi5p2FVXGvn15T5w9iKLtnXE3u8q1nqTSRwxysBWQis4hyXv",
  "key33": "3VuEfn58qbHBAvgT3GJJ8RYwtRnBbG3P49B397VousmJHYkAnaFAauGVK4YKsFcH2SVBsSqnREUE32u4VsLYvCia",
  "key34": "cEvLqSWjqTtoMtJmmDEVQZL1EmVWzNtQsUHuNkmNRdEqj7VcVyE1aPXihBtJCymG3jeQmroA9no9pTDCfz3gNwM",
  "key35": "59LZHGUuWYARacFavVDikBUssfcA4cBDKZWvRPPjpkrBFy2UY5PWMtXmKRREtEwDfQdGmYZYnFEanYoGMZ1QT2Y2",
  "key36": "jCHbxTHnVXEzZYPvEH5cSPePEU4biNSfdQ4e2fV2RAt2ZkDBes4L4sXdwus2ieREzQcEYPqt8T1LFdGF9PNx8Mg",
  "key37": "1QR222JUa5wQ1Zkj3PRYN2qKCoxbcH3fPtcHmJMaHBy93EJfaRaUp1vyCb96UmmS9RJNhwhFdqZhircxMLCTumR",
  "key38": "4F5QoXHxUEJw1QcAtng8e3SfLYQyevaY8MpyhfzfW2E2kehbktpaBtv4tJsXwYFvVoAn3FNpFMKV5tS8i8wVgrLj",
  "key39": "3zxRMTgA2xrnGZq88sGBjBU9vp71JtJXLWnzPajSi3QxY32CEk6yRDhyvJEVZz45HQ9zqfsy7dxQMA5FoqBz8Wrr"
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
