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
    "35vjjsCXV6iUFyJrwnJfT5Nfd9cVSX3n8BcxTMXyrqu15XYxHpYh7rcK8fzb22CcDFwexW85jNZ8ruDUm7SMsidk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yCxvkoU7Gq1c5kdU6L4A6hVcV3mXLD4BGsVFgr7KMC8SFCAcxu2hTdb5sgw1Y8YkFnHqnWdPj4XJaMRxiiAJ48W",
  "key1": "2xPhto5GaNa7ZWBotwBActFZcQw9GMwzCkXJsM3Dg7wP4uGEfgUcKSWbd5NTAqwwjKdEKK9ShBj3WjyNd8jBoYmT",
  "key2": "4sLg4AuDUFxRV9jd9zztFoKZr51yDKU6c3CUGu4AswtXn85XcN8juz2tJuozJXbXNRWFhWdyT4DKeBHRK2NLSbSZ",
  "key3": "WDd8BryXA2HZzmpx88mAQnAyffn6MDX5sAzs74ttoQfPGLkimqwMxjj9oWkiRgeiUoGZm27nRkr8NRQ1TkZzFLb",
  "key4": "3NdwU2rMnn2y57LfY1YAjGFK6XwXqxEMkez8V8xC2PQHzBPFFn4mGkoBA6kD7i5cDporUaF3ABBGEC3WaYmvoyfM",
  "key5": "4PzHo8dH7d1YUnrR9GsbLimrysrFfPKEfuwKTzK7jx3XEra7WgUNfZCXX2u79C8j2T2MxsrbdF4EHTQ3uzGVjENJ",
  "key6": "2qyRsaRxdeh85MDE1YxCioXefnn32YuREEjjXy3nV2WBYmjB3zZZsESwCpNBGJWFq15rUGGTHvLTCZn1MJVFP8pb",
  "key7": "5SEb6feZ2FQVawUhEiFpJwe5KdnZ5qHdxcYEeygQ8Zf6A5psSSMKcUq5HgaX3hC6T9n4BQ9Exe456E4LGNhPhWyu",
  "key8": "GTZZuYUKeh2PbP1zuW7NnGDrHmzkz1wqPfeoHU66shLhXsm9FSYGdoXhMzdnE2EfQqpfoebUJCkWSD8AHCpcAUd",
  "key9": "5b1oxscJ92wByq5mYe7QhUyQ1n54JmYT6VKPxu5r6HoZFLBX873QwaDiNuYaih4Kxiv6rbCVHH1KLy7RzSvepTFW",
  "key10": "55nK4nBUCQJS3voYConLZEKXV3pg2pYtrxY1kVTWRg8NwbHZ2orQWJrcZ33yqmaWdPSBpK3BCYwFeEScy5sY5CcH",
  "key11": "4xFLgBXYw3GozE8YFUjEYAvtKb7CYXZ83hVMvhb4KjoPW8P8dikEinD57bMM8nCdPygUPuvAPLqdpoqMmgHdXqqx",
  "key12": "2RorLcLbo7KcBJ1ijwLwuFdsjjtCzLNxvmK9xzYYF2FCpkPGPfUrgQwXviP3vuUc6PCRGGjGQmVYvwuweQq5358H",
  "key13": "5Aq6eEBn38tUkCx1iLxAvcL8vc86HXiy2zGrCPouEiH8dut1YnR45znmENW19FLDUp8mGyrJp9kviDn1fAYfajdj",
  "key14": "53fD7BCByxBP5K8rGwebBPHNzMwdxuucGA6YnggSCmL7iAZCCUUctuZzE9ukWTNmJai4NeUHK3KPXNYMxbdAuWY",
  "key15": "4jY3uXnQJcpHBXCsqczzt12NiErVxSNh7U86XrbBjndfbEmU327EE4FnVT1Q1GhmCjdC5soN3q9QuHsts2eP5dgm",
  "key16": "2T85yusWtddDzF8LpiLa9CXLGBbQqoeYw8r57wYhnq7hhcra7PcWq64MyBMSav18DDaPEsVM411vzhtsr5kJHDXD",
  "key17": "3W7ADN7RzfSNZenZu1pcefRVfzetv1Raqdeqj1rgFuxFkkuWKVCbp1m6piAhQJryHwsZHo7EZrHsXaTWENuh5QeC",
  "key18": "27dRApNSie7nWbJTpBwbjwo9tX2afEHstgWYge2ykKyXyKnRbyoDe7ff8FPhY1w37eLXxCMaDHPSYV6M6RY9CSax",
  "key19": "2AffoFVDHZwBMvBDewGedWvfcJ13KbHki9kuGocx3a8Pyfo7XpWKwtVUHfQ2momqT5ActtMfJRfQHJSgFE1m1mcb",
  "key20": "3XgtkeF4LEYPwgmj5ZosvmwhW8FPWDeewSbeVSFferxBa1qw2Nj2Jg3vE9959NmjaZLNWLSHz8J52Py5cGfZxcin",
  "key21": "2m33qbte8puYs22xGK1ZxxQLJ9aTHN3YxWPBZPFe7hPtA155uZmq7iANArrMs4LecE1brvCfvgFgJeMrCYrwKCds",
  "key22": "8iqCACM5WcT9t78JgShWiBDUTRDrjn389QNqofSqukNxKV7oQf3kbo3NdERS1vJ7kvW2pUCdKbVF6dDQWVZnnzY",
  "key23": "4RiQtJwzkTtxQkVYZHdkWWyDVSdJBiH19zSaQ2agdfP15E14cyrRKjFvCXdCmEYxi3D3HKh1qB3xmPaEcdQU6NKE",
  "key24": "n2kafYhr6KFSkSvYebM9nyZV1Y11JdgWPMTJqmsDe2hivbABFfyEDMHqguijK9t5BbL7vt43eGg7w8rTbgNZMkN"
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
