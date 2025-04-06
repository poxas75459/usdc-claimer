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
    "3WibFurmtA9N1jcUgoe3ap3io1wRUV7jivoeMfWKvyZTWAbddaLSw3H2GMKN2WPgMNoebr9AvYYZGSFB3E9AT2iK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8E2NGCSnyo9FiqdgsUX4XJMgPg68d483ZzPoxc6YEEtSX26yY6EeBDHhYVirzDDfU21evVe55h57RAPc3cxSyQS",
  "key1": "35h64nvoZ4CtxPAdhfg6iiAzku6GytfvYYetbGDiwU3vqfXzzqfqysQrziS6u3AQ4aXysENgdrXcdGrrP4DYrsbE",
  "key2": "3TT4XWfdkZu6wPUoCYuELTMCJsjf2ETQnapzMX1mwyZSqQHmLErXtjcpUSQThfjUHE5kYievFqLXvyHZPV7AKnkk",
  "key3": "3od1jELjXygRadPTyoseJ7SMj7tKmw14CNExSHjCXTbJgX6an2UuUJ7f5rBkTzZboHzCJC59znZo69t1Sm7iotXa",
  "key4": "2BKHrYQ9JefQyWgu6CuTcTjAWRpszzMwrgATxPCaZ44w4q7sAeqKb8ifEJAWt55xChpKC8BRkaWTh14QLHA5oMQu",
  "key5": "3ksoZdmEyGVm2p7N7d2iw8hYF4Q3S7xsuTtmRKKn8CcvNnBXMivdV6LWhc1jQQ9vxPS8esxyswBjzJhjud1XAJVF",
  "key6": "55BEpgdj7XsGmBLy5aWikTQoij5JNu5cEATBagRC9WE5ocKa5XiRByXWXFkiLEDwfRQ8sKxGz7VRrW4t3VNL4jdW",
  "key7": "g3dHkXoHWBuwPmPBEooSK36Ca2awS4zSEoVvdAaW6JVPfFfLo4irfSSJGMgFwrpWpvXD3JQCzfCFuaxafJXrWUp",
  "key8": "4JLngQXEPRS68ZK3fZxiffmqmptcc5t9n8tjFFNhNYQZYfvEsBctyWBVj49FjWgVH82EfYDmBUEx5DMWpq42ujMw",
  "key9": "5cZQFmMsm25hueWXK3oApqzkrHBPsRuWNEdY3bC2WuqckM9mJJjT4RkcMr5V2ZD82sSRi4Qx12DoYLGumFaVWgu3",
  "key10": "2QbEuN7EqEJ2XZDQiCG9TaKP78nWn5f8YfM5wnj2zuUQf6agc5msKnJfjqjPRfLYzv1vKrihePvym7MZJ3ehj7Ym",
  "key11": "5viy1Go3BAXwd8SuyNWdUx9RsjWWQK2M3yRZ88zfbveBiFhkZgbRkeTuWiK3Sz5J4F5gRccRNQ26VacyiCdWRUo5",
  "key12": "2gvz5zn1NzWtSvCmBnjMkpY165ioSdUHc1vrggM6s1kiEWHAPp6tooZpfiZdWqQRKmyZ3TmkqjzwYrkWNWTWDQMy",
  "key13": "3JWKzASPghqXMtSB2mvU89SJxWbK4ByRDdUybn2E3pt3b4x8idWqJtQr52Jdx4bj79Mbdbta1Uowo1yRLHwAYQ4f",
  "key14": "5chJHP9Lyc4kncDx9Q25JPV2KctdyNsq41xwsJKsaC2zFEDmms3DGCdP6PTDFVZ8cUNJCoBi8ipPwVRyiidEZCRH",
  "key15": "jsF7newb63r8xkjHeZ8i3zf2gePnHCF64C71YTbNJj6fCfTLZPemKtUYaJvCwWuK2De9qyoTaJmzZFP9HBtmZRe",
  "key16": "3fuLcH4sbCdY2AiBAs8SiFFHgdfnTBKrZcwZCiQB66ZtJgQkWePQxJWV3dy5p5p9SrYeh8GXWo8BVbiQU6KRbas",
  "key17": "2Gzr1r9udoSX5D2gFMxm9wqzmN1wEuDCGNhYJQ5a1hdouMdWgtDw8WtXLwGToMNbUpSY4nwBZndRsHB4X3vMo6z9",
  "key18": "23NHyJbvg3NsVK5y6ewosfsb5orhLak2zGHu2hKUsD8xbxWgYVz7CmjmRbGS77nqAp9SLqJLT7vgb4xcJzZ2jApn",
  "key19": "3ue6uBwvBHRGDK6DGAo3GhgAsBoFhJjWpCnc9TJQ11WBukMSpxt82GBGo5qmE9XPLmeL9BWvycw9R2yxB3XcjrNC",
  "key20": "58RYK6Zdrk4oGeHMmaPhZiQgXFaPRAWANy9b2KGEnDyyDvXvoschKPGTPHQiw2AUadm6e95xyZDqaJGCUKiuor5b",
  "key21": "2dENSow9ceDPfnYTzGnyzZg6YScs3imkBans4qruVoFtLMBE6GuMzhsqmvAPK3iQgUzwEy6DJuCsZEFopDAmqEMC",
  "key22": "3bWo3zbwWkXsSug3YnY2dsFUDEGhZgFLScudDjgekPcHAzikW5x1e8zarktqhphsHciBuR4jFMc5PHUyjXuNhi6d",
  "key23": "4xp2wafCr41vkummgeUAFaombwsdrpNyNJvB1BmJbWnfoHR2EuUmr3x1gQkcR8oWhV54raKMziKdWwL98PAR53HU",
  "key24": "4dLnWquRwtmTfLuiUztCEut3GPRRELaR8p1jiYPE6fqYPqHDUv2v4yyD9NQLJFN98ooHBnTwWDACkx334XRztueB",
  "key25": "5K1UgrqzANGNPoT2GEgXecJ97pmxTNTrrG2fTeLyASEWRq48u63wiK9CaTq2u9MsqqjMLqi4oKanZAAEh9A89oWW",
  "key26": "547Tfvo7GpnHcm78b9Kyfx4pKk8G2hEp5Koj1YJ6eNZw1dnikoJ67pFHKDjT1Phafo3xyMRUPhNYKXcmbL6bhc1u",
  "key27": "5sE497qeYbxXzUzJFaEBCaWVsfD2QcPMjw2uCzhEL96gxa5goDQFNH7eAi1DNJJZDh5bUvU5zQQ1qAUQesLR3VUD"
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
