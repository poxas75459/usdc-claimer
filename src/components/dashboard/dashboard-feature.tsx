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
    "xmKc2sGCK7LibmAMzEccxgLSR2oxjE5XL8pavWHFKrbfCUxShr4T2vxafmDLJAmD42MR1CR4QKxMsx3hj8BMUXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3riAKgkieuT9jyZH5NqsXQoVM96FwZLfundjfnPWmtGkKDwySrp8dc5vxLT26b62eQEh41FAoWPDByrKKvKvCSAn",
  "key1": "3asHZ14PcAY7SjyCRFapaetK7tCF4tY8VBi6mPHJ1HnTkDadTwomhvk7HVgcihtM1AXjmhzC28jbzc3qzH1fu9e3",
  "key2": "4zvWJB8F9k5zYEoWiwifemZQFWF1tcp3GWmvUvrHbJFgeznhbyov555cbP4Q8m1SoP1q5PdD8Loytsh58aWw37tH",
  "key3": "5qHa685vkWVqgSV8kiFr89QwijXrBN49SoMfpr43VRu1eBMvqMXgpmYZVnYnqErWKe8AtJ2bHMkev4zntEiKxE3Q",
  "key4": "bpx82ToBLkv5gmqkEkRmqowrk3S3cJpU7DpwZSZAjFm5WdiqsL9LYjHNW4YtrbhavszSrLx7Fcdx34seJhoA5B1",
  "key5": "4qFYuKUrBiwwGmiywMwJrtvtwKLptroSAMvaho2WHGhURSWev52vZG9FvBLrUSa77MEssWuHcfd6XbTRxDt4ktnR",
  "key6": "2TM31fwK14ak5HBbf2FhHQ8XR97iXSGyx6fcEy79ZrHfwPV5XtfLBZm8NQyqoAarcMaqv7A6sWQe3ofUm6jBWZyP",
  "key7": "peHerDpayieBqunZHrs8bAporY3Aqu8ZYRYQeGocrno1VJrQM4xzySE4y5UVA4JSnmdyTM1rWppddSQNR6HXUxd",
  "key8": "5ivGJMkTRHxE18sRBo5wd7rxuuiZZNTpgh51yezK9kJ5HaUdKJjf9qe55ngqX2E6R87X9dKLG7nDtX2auGaSFoHa",
  "key9": "2MTtXEKWYiGRUhMQ1s2PNGBrimfhNXLtDzeedzsws5YjKEwvNnkVZJvxTaFy8poRtcW8My4297bajwj3akKok86r",
  "key10": "5PJ6adaw9hL8dmdHsHtctG6SViqE6HMr3tQkXUEkKuD1WA8LNL1DBXLrKqdhMQWfkmNBgqEVQtEyp4PKWLxxjmGw",
  "key11": "4giJZo3KQbTXFhBn7u6kwimTmDEEpzxv6h1BX9JEjhfQVYmE7eUeXnvipc1SL23tPd1qSjbMLaCo8d17q8TWEiEi",
  "key12": "F3FaqLgnUS4iD59R2tcpEj6YDC66i1hjgpb4sacSrcZgR5Hx25HMmpRRo74AbBZABmEccSYEnn4TXqHiZJq9ZBN",
  "key13": "yGvsyjq2VJVeCMiRXiSRikQABW8KULXWcZoQP8Bk8XQdKFMNUz7MyN5K5rRzfVMJotD5mUrphrNqj22VTgJxjTb",
  "key14": "i3iBk7KJDpVwxmhtEn1bBLi4UqdyFxx9cv7HHZnqwDkciAVU1LGGWcca2hE89Z51fUQvkEkDQBvSjUoQDNhfWXJ",
  "key15": "2hmMNM4Z1D6u3KX4aoX4wBZ7GW6avsbBRydKE8XqH3GhfZg2ySpfVjo7MYTAtB762hvXJcfL1T4Hq57NdzGeQYRK",
  "key16": "iHBA9yA5at6Jqkjb8vTVHPii9jPesZxzXaY5RdhCoC69gtgcQ6w2veXCqNC88DNMEuLcaVekw8E3PuaQZPYcbAb",
  "key17": "2zYcdC8GiRqykyduk4DVudANCCUSByxawiooCGqiDEwa8bkhobRYFJLnZAmoRJajFzRowVCd9cdqpkQf4CQHt9B9",
  "key18": "4TWHaQ3qnTwVXabDCTZLpCQhxGdaGKdv2ZLtuR3yedBezwqHvqkrzTjnurxEW6EMYg2RnMC96VBFbQ3K5VwuRhMC",
  "key19": "4V2yaDqZAW9HL7ExAiYw2TRaAZxjzrgehAXrCLsxhwbvGjVc5FiASvC9VwmZff6wL8gxvaqmQd3iETKkarAB1sSq",
  "key20": "2CXNcU8kQdVDSc4KiRsuNhwvvbS2spzZcde5Wwnq9pqHbm3dtq6KJs6T9V8mATuU2tdqvPdJbTdpPFzubjvs57HX",
  "key21": "4t4jsyfhkp6D87ECEiycRAcbhFGXsj6uTr3bSPisauFirjUrZViXzLY29RSF7ZKxEZfVrdGTtVq5Ri8syPdN4Xyv",
  "key22": "NqAx1ddByycaL23S2dN2SbcS1Rf1q82uwzkyjw5DQuAW91dhGBGdGEnwWbUaWG1MPthVhoHtf3fpHj9uEZ6iLpD",
  "key23": "2qjk4TdAWMFRobAfnAb5j98qMqtRY8ymqgDDkwd1RemDXUMc26DwgeKgtSKLzqNbj4xWLfbcqVJD2Xrxg79enETd",
  "key24": "3HyB6Xv6kt5KJH6tuWRnXpt1Y7kLSX5mTJrAqUSC7ac7416CgXCTENaZX64hUoJW6uTszj7Xxx4udgcR5YcE7Krm",
  "key25": "5CH98Q2DfAM55Dbj2BuAG7aVM5pkHLAFnDQcf1fbbyqSBt9ZFqAcoMi2bEFezdfh4u6LmPaCYb8ijrdgyUg66vux"
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
