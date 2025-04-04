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
    "5FkRzCQAas6BcfaBJJqBpGcsnhxzyxZcBX36XmEY4ZfsbKVj9LDrtkVCpzc92NPdBB7HihMxRquwqK5p1arTodZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e8dXhLjfXjnV2NeVaFyCgS72hvkD8m173DeE1fN6R2ypGiCnHwFZ7KdfBoQ8WwhPrZyLYyRuHAQCgBuFM9cZArL",
  "key1": "48RMaBfUwoTMeTvuYoSgmypKTZn7Wo2wJVie8gRyShsRYFQGbNP8p55ZfnqCYpdjVHV73EkbrrafTn6WqEU8Rfkp",
  "key2": "2AsEWK8J26w9o9DpLEbWUPU5pabArBMh5817PbKqbAy3XqLFK2CgQxEGXbs1DuY3jzAfAbJ4BVREFF4b49KKzzzp",
  "key3": "3f85j2RyVkakh2pPqp84DtPnnDy4mzXvk8ZLSNvAU7VN9YGGg767rFZ1haPxattggymMVF8RGSG83JvmMUHpuJvx",
  "key4": "4e3VZ9o7wP5FWcDJCvEXjf3XMb4UgC2fdfsStmwWsw4hePb87ECLMfZHraEGVL15dZXBa5jspLyfsifTAuSg9DR4",
  "key5": "5uuPJvyxWHUidXKXVYPzdxKiCVbxzm93fSxHu5gLo2ALLG4GmqJ9L3aEMfffaXq71sLn7FQdZAkYCqAvMbrXaqN2",
  "key6": "3vLocUPqsNU4jatEMxYnednkRSSkYJfKWYcyXYdaPg2qhNK9VuuamTxr6fRPrMBphVfi2F18cQLwSDzkqTSVmg3z",
  "key7": "3LbDAtRaZZCwjQZahcoRoJd6cKW1kRbnPsuQpQnmuL5hWY3KJtP9ZM7GBexDb7Dn3fPugma1Bb2UAAgTCyRp1GbU",
  "key8": "5Mw8y11MDJPmu2XTLpKqA3B2pt3wxGrNnDuyC9hEmoLyyv9Yyq81hCgSuvF55yba2bbMmAT8SXirXZd9VaUYGenx",
  "key9": "4nYN21hQQeeQCRpcQo2Hd2rA7pSgdRsfDxuZ2wyxwvoak81nuvw3zbJv6Nh75AXdoJx3cuhkis62BX5VSZrimD86",
  "key10": "2smrA1NSoQBgne6K1eoDFk22Sj29zf1RAGmNYY3DpnxLNNSr8MT1qdcpwq7ug9ptFW4x2AvyVm1ttJTy3RgtuekE",
  "key11": "3kiBdkCxaT56CFUcCPXmyQAn14753fiS2HkMjTnmiVruMbs63YLQp2TjLwzasVaU5XtE9QZxUAUBUo1L87hEYEnf",
  "key12": "3KSjzAK6rxvq35oDhA2dcABikJcC9P1pJULhpreJNbbgnYJBqoGNP1jTwtHU9Jave1pfdHx2UYNspe8CztLcv4xF",
  "key13": "3Hmi9FomyBAJGGC4jxN9D5o7RXY7LzawcyLw2he8dq88ZE99MB8HBpNo7aGcJhHJWQ8HTZvpfR5TYbeSZjffL6u2",
  "key14": "2aw69nW2n9zm6iawpwyHtCYCuAmvh7hSctgKh4F17kEZgxXmJPLYVbJpXJadFAKBjKhLnr8j2mSby98rAEk6hVFH",
  "key15": "5NLdYRAEP24tEkDWzRiT1XdnFJFQnagq82JHCxpaJizkBtxGW9Lb23M2HkZDb83QpJgWMHviCkrTbs4P4Zy6raZe",
  "key16": "2orPv988j8fJF923Nd9rPhJHNoikVDn76ncQxaAikAyPWf4E9zrK8L6snbu9yz8rDouJdKGgK7JekCEpe9erFEHT",
  "key17": "5LXU33ixurV8HbvU4dbvAa4LPXjjjWFiWciKXDeQzCLhwKdZ9tBLZ58zZi8uvmhc4K4RGChEPbDExCrNWvi4PsxN",
  "key18": "21gb997EgG2wnLsAFmr8wmFj2GcoWqrvKH4DD66ykiVxuqaNkTpUzpogePJpgQJ1yezm4y3GxxE7k7U74ysaqUFZ",
  "key19": "iLBQbGA8PH5HgFEiayKShES7PpdTqXjGaFvxKxhZN4kiXok5iFJLj82shz2tZM76FoXy9Jgf1C6dUEs4K4TWpQU",
  "key20": "XDZSnkRNRLHhwLJm2t1kn9vAjFxfLFyGy7s7rQBWEWUfM3gzfBm2DYxk3Q7MktCtaviWCU4M9tWq4Qza29jiagW",
  "key21": "gHLQWhTXGR8KVQof33YGCA7H2wDZdgifb19eRaEgEu4MLwiKuXy1ZaYan8f9buX8GGGAx4WNTofWVF41XXx2fGc",
  "key22": "3y9C8MVVraZx1Pi4CTuxaScDt67iZrbqXKg9iZe77wPr36EDS4pkAmsVKpKNR8GKcctzrQ3EnBWifjpqFn73vpLd",
  "key23": "39yUPESish4fs9iyxJGry32M2kEamgerQf7EaEJTm4GNb8LEK4mTYFtf6Ds6LdakbcgWBxq7GJYZXnu1Kw1tD4Mj",
  "key24": "NMtZrVnJXmSACGLJxFKvJvpoLXapiDcgEN3FBDpoUdMxhqwhbnhT7oqSB6nHZkk2PL3pWDopte3anMZ9AHZYah1",
  "key25": "2VftGvKP94CVRmCE1KtgMbCgNMe7ACEJbNdbYcBJtKpdtNfZY5aw75BEmwkopjqSyFXf5P1A23S4EQtER6ZYJoxg"
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
