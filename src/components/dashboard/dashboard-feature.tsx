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
    "2PSfkGN31UXgUNGwDFs8jXt8Ja6XuFVyFYpz2pM1iHBDW2hKaoeSaZ4nLj7k58nbYGWnaMcrqCLaj2qYQeoEAwTE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gga13jbZU5NB5Zc9M3zr38RisJV8KeUJhB7XSdddyTD98xjBAZxSY76cdx6EAcRzKjdQfV3YRSBtYPciRr6yRqb",
  "key1": "34oegYLxnahRXvUwU6ckE6bQY45k3CMfcE7PrkC5xBt2CRgELqB7zceA5UFnS11FrHSs47pkbMmQDRZEv874zoqm",
  "key2": "48TM5jrhSEZboNP3o4QcEnhfRuwVJnFEfL9ebfbs7zgfXo1ttBCxLRaVVERHePmnXReNQUbh2V89BBXPjnpHt8Mp",
  "key3": "4QZ7fyiN9rEv1kGrzn8PJXTJUURcfEpwb5hBRbgzyZnUzkRtTtyGhq8Mv1NwTHWGA9gAKndHtV6srG8JZqAwx2Hg",
  "key4": "4P6akkmi5ZxLvPwcteNiAqdziu5ysfU1r867k8c5W6i1THqMK8ABmfYokBSbMtmcQ2W3kEoY6XgqJsVT87oSibcY",
  "key5": "jEcEwR7kmBmQWKCpXj3GcgkCgdWj8ubZJLyZ8NR5ZZeN1FJmzQuroWLsJMztyjGPm2ro4RDenf6YsVvRZjPBqQi",
  "key6": "5ouda8NsgDNi6wwTXYnGDoKfQsFVvwgQKgp86RuYw1hujpFrcNjuNfrwJus4vQxpm3cZjjPzxnEFGQ4fagbcptb",
  "key7": "5BA8NR2tYVmJ2p2UDJ3mT79dRPEvn1USrPXYMtYLeNh5zn8B3Fj5aWMWiDrGDJ6BXUuWjHkt4ycphJprH4DeGJ1k",
  "key8": "4ZbVSQb3f9qn4NZ8vBqynVswbPufZKvW8GRCskEwk4n1rewDFxpNzWVcgxqLkXF7vu4RUaDT2Xi7ia8Tn3ix7gs7",
  "key9": "4BhjX2k7ZjPg3ctwJgyXYvNEWx7XtuqjSLRVubByjKgwULZFzzgSF6ko5zusZUGEnHu76c92cEg41NjVNvJy27E5",
  "key10": "4yrCPCmYTriXTN8Shveuem9w2jz4iqxn3g1Qjj4X9t9XTuE7iPBJ1QRLbqfdEdDuyfEhiUWriGeWpmopGVaBuLmn",
  "key11": "45QgjCSjLjzeXSYE2mLo9D8oqYurw6JFD4wEBk4SV62KQZxugShVgLiwg1MeFaAamkBmyRzsgK7rPzgDc9Bg4nUD",
  "key12": "3N69CHaFR8gtMkKiEMq8gj4PTSRn7x3p5a11EtbKKEgdgxi3T3SNpK7r2UxyCauF8frupw3mpyCmyja1ZnARsoXo",
  "key13": "4Kr8Z1tzm3xjTZeb5dTaTs3JQjp6CKWmz9f5BPpNTCobs78JiTUZ2cjSo8hdWzJSEr72XWzrUxxr7LHUL4HWZzyx",
  "key14": "5bhms6CyqnyvMJJa3i2SKETcJnCXdVs2A7vtrSryXkQbBLjf6e6ro4FvxZtBaF8KT2Y7emJXHNvwaUcYmhea1u7",
  "key15": "2RFtXvWmr598dbotMdGXtn537Q5qphdvKKw6xHRCzQDGUQZtnHKzkCVRXZZhbWsu1bCoduHQfQ9TSYfLLZi2L3B3",
  "key16": "4YdyQEmMsrgk3T8nhVqu55B4ZEaJtz9A1fbPeUbvSd4LvMgXayKFeXhGAxM1ydCK27BBU6UAZK4WeXogDdJBUKJy",
  "key17": "otQYNpAhLKL26v79jfHry9LRLC8BJxe9SLcGf28WQUwXFrwGRrptEdYJsEtrzfDf8gHbjaD3xE2BEGejA2iRMW1",
  "key18": "4whDfNaWQXsr3RcVJCWxmucidL9A93LsRBq6YzUZVN6C3N5ZJTFZZg8TRmx7DU1UWnhTbuBzxMRy5YZhZtjtmDgY",
  "key19": "3LSVDWVHaRXySuL2uFgArR9zpDRc2jh4fqU3YhGQCoS2V76SC2Xs4GHb8xdgutFWt8KeV7YoQL9si1JRfkXmnNwe",
  "key20": "3hKnqkUWNbkWikULwYN1gJ3Y8EaG7iSSGBxwx8Zdt1ujuEgQpv717w8KB5W1ga3y8ozzFcrJpfVtBEYUXbZ9NF5i",
  "key21": "3KA2TBCeuhKSCj4UAmDoUHervp8NCLLfGdN4zMufL7FmQzLzY4AXR8QoABMrp1ZdtFj3JHF8ZJV1M95A34tXy4Tc",
  "key22": "4esQmwvCVSgrMEH3xvFGDfHAviaZH1EUndnk8yxMccXp27M29BixUm5apcqiRCwMGjDfYkfqGEe8yA9MQZa6vAzj",
  "key23": "3gxK3iYdjXL3BnsZJ3r8LRm57ySz6gk6N3rmuR2qdACnVti2pj3tqXUcVFra4gFuCnvJG2gULsQ56p43zKBUgEzj",
  "key24": "uZ2RmxMpNXpE94N92LiVZ44S8SavVVzEyFRtUuycxJ9dtKZwXVMjUgtBaYrRT2NnDyNEqdGxe41bkLwwjzmJm4g",
  "key25": "2DPb1EraUrn39oQd1GgLF5cTme6erUnnHmXbAStPaB4tbqC49ZwbRb7ijSVPw6CZxbMPbK69D2dgtpXfMcEEPQCS",
  "key26": "5ty2CijoWtryqPxTKjHfuzjddUYkSZMdKjnQL7bFpEei6cNLiJi1jiwc2DTmJDXcYwJyL25dnKqbwz67z5YGyXct",
  "key27": "tHkb9RCsdgc5B2w5sUaQV9SU69zh8BHLufAR8LciJa2M55ojRfMdxbspGaVor41x69T14hYhEkBY3NRmsRix5Lr",
  "key28": "SkscoUq3337e3jhJMfZ11PTpAqqdiyuwuYuqRzNyiNNGXJmMfLFZMRAsePiyNc18hnipw55CEG5USvRja4LHcwM",
  "key29": "588HNmik4WkXuMCBTmpsfNjuafyixmcAvNCcuGKDaeJw64wS7mgt76ArnJ3N7UCCnAHeDPmhbXqbjX9n3kEjtWwY",
  "key30": "2cPVQCyXmFqBzGQUD4qBYem3hPKaESLNdNH9q9tXd5eFBqfr5k21YsijKAWUre7DZB9kFiFXfTWxEuUQFp6NqmNu",
  "key31": "5N8W4uXV1KL8oFbGAZbjPPfhbnfjCSxPhd3p4zAApLhXxHjpgyRGA3s2CHwh7iJYEKuG3ZWxC5TxH9J4EWgrWEmX"
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
