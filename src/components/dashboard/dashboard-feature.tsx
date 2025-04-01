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
    "2YjWiCt3dmFrxuBq66LPr9C6wDRSfbPkAJdLkJELsPEjX3vyuEQBMDygJke9XJ2BPFVYJMJsfbuLc6Zd5Qgu2ajY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eBGyzFXU9uibqzMmfqZeFb8hjXwCFV64P8thSAWCMcevE9XvC3gUZGtSRu2KSeiyK9zrXaa2PqwUArUk4NFdVNd",
  "key1": "4aaz4T7VLnDHnx5eG4d4EdkzEKrBRRQCHt4JaYQESom2Q8AhbsE3qRCT7TjjnY4fyvbDjntDapv9P77PSDkSCGou",
  "key2": "VTH5biXrKnKWaGw2t2Baj7h2CnGpZnxuTcaXTKPTBcRg9X5B38XMDBXQTSS3MLtaM7RpYAVjzaMy4Z4SuCdLn2e",
  "key3": "iHht173u7WuZWZSTpQJPAs7DTA8CL7XHHxnYqbHQLN7Bg88ChcSXHUDYgU8Wy7XcdW2emNu8dARo3ZMvCwmB9Ut",
  "key4": "22VYXwQzn1ezjjG5XKgapirY2Vb6ucpVyWQfzMZPuNsW1NAEAe3vdNALX15LRxLLd3EjAsDsNzJXnZyeXhDKxpuG",
  "key5": "3zYfUMXuHEwTmMBscCU7HzbNMdj7VJFkRFpMwTEeECmzzDXcGsxqDnC9ZWgwFDKvqR3MfXYdbiVV5qJRodcrofXU",
  "key6": "4VRacKQGzXsh6X88pqke22W6HCPGaP4nTqUkREr1FReY2MRKs57U1GaRGL5yXq9YbFMzPnMyr4zwjkVMXv1RCJNT",
  "key7": "3ksae9Z4GGWesmQs5neN8AJJWc2DD5fG9gVqMcu7MQ43iXnB6bjTUVPoRjxkZ4Cn82458kxsKWHUPnwFYVWzBm11",
  "key8": "4kBLjiXtqkDRh6J6zAqUdC5ZqaipqNtbWp6LENmio8iuZdVrAkajVNSBNamwAb31GrexXMqtKY2dSD2ZWsyLWdd7",
  "key9": "e4PPiCDoYXqXK554XDcd5cCEmu82vzPNWLTNSoTVHBqoFYUouo24kG3GSUtzg2uA5KmT159VySuJkoK9NnjD2U3",
  "key10": "58jpZNNRPBjwAsdnHBk3QYG3x84L2jUbTuR5hCmBnuQPJApYkHeCfakyRNAsi7Ax2V8Z1tq8wyVm8CHPwafAquTj",
  "key11": "4PuKzB3FjeHQtW2fEjaoq5Q1y17GqHpB6vCMoNu1vHxNmCFWp6deCruYmMDaokpW6C91L4NJVxjmn2YAqoFoFdgD",
  "key12": "PDYxhkGjinLFgCvnWi9cf7VbyM41jYqrnNSJfqBgmCZ6JMwPWNTBptVrk6E4oNMZTNcSYzSDbxmL3Ti556Re66u",
  "key13": "4y5jkgMrsmPLMiqbc6RwjwkqtN4U7d1w9yorM57TWBcjooqU2FPY4VfKyDkCbY55GSBxy3famHW6xk2xCLHan7qV",
  "key14": "3Dyk9TEMMcBDYs7q6n74t2MSJ8LKLJo6vFpzRSPWP4ESPrLgVqSj2J2a2psnR2Lawu788hTfmFFezmHHXPjsBtHo",
  "key15": "2HvhHhb8QqXuBLnVgzo13nWRW7jYoSVELdvkoqVUuT3rNBXhsSaSkTJspdpTbp7kTd17tBiKGvV4kSFJpm7EuKEg",
  "key16": "2jwt4w7yB15Lp5PxgZeA3T6FtVGRuZ59n5w19N97W4dr8rxnvpx3sFgL8TiUgKoL8j6VSZYXQ82FBaU1r18hLu6V",
  "key17": "4mT8P7bXuCj65487LN1EY3AwPgjPK8iFFLttAcrohZHzS7TEdinzh8jE7XP7Z89p9gvnZ39JWHjEm1NADWRdgXMv",
  "key18": "5e2M3gfAxpZJTyjLfiKzHotpQE7MV9Yb7XBEsmDNTRFYfXSSWSBH2kQet92BLcDvZdqLtSa5qxDBC7vfNY2VL3af",
  "key19": "5viLYzqfp4RsmbxYUJWEtLDo8x34hT9mTE5tA9ZPUwgeA2e9vLJMkjob3GTxWZBgrypijoFpt2gLnnZ8s8xZwNXb",
  "key20": "3Ms7T1Lp9sZVWTmryi3FYijodJ3w6GBPFbJNbinLjDauHmbbVp8wz9X1EoV4oJ78zzWvxqSdd8LztnJzFqqenPE",
  "key21": "4RGfsooF1zqPeTLzTMQBReUqUQBDf8QqfmSt2yN99hs5U4VuopkTdYCQ5qmHC2oFfMJ6sSmtpGSPqyQNtp7VgMmY",
  "key22": "2jSpWquweQmR87hvyN1vaF4gPXWpUsZtBVUbqRpcChW5NcnjrDoCTA8Dgk198h6hEGSkMCZKN8sd9ZqEQtbfnX4W",
  "key23": "4H3Z8rLjXFjmZdHXJzN1Ukrba5oBvmKtHkRwU8jCpsNuZPwyfJmcSq6HhYLfz8muu3mAPw8wrpDBPT5wYqXRiZRw",
  "key24": "48d9BDAKiXRAYBgPAq4MHs3o7771avvDP2qJgkYfATnuyqTyra4MmGa5wAwPrW6USHP7Sb2FzTG5qneQXoeztEJi",
  "key25": "3CxWocPCRmofJstHEbmTsCuKsHHnBfjqZtx4tG8YeTs8wBdAnyZhSc2xsMqGm1JTQYr9UQAbUidgiMismPzZ3G5c",
  "key26": "XrNTQhybKx9CB85XZpTFpF8KE6ktUU9VVRUwKXEg89m5YCxh9eMDweWTrRiSR2P1KxvsCHWjcn7GNGEyj6YPjdJ"
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
