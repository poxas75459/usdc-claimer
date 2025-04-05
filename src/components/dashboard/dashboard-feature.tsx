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
    "BcrbfMNd8SKTwVXkLVV2KTEsXTog6de6GdB8Bpx93zd3JTh5vivp9c7TKfCUodmKiTW8zFrKUjuq5HEVxnNsywW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2unNRGapoNntoiWSvHJZaKoxdxvVZZWBNhkCkKGyWkobhi9BJ4jnhU8zKzRS5mnc3YeZejQ8TUKQ4Kq9cCTNsvmg",
  "key1": "5rAKsdDfYd2tgt2QJtneA3RMebHNaXRMGDvwcDqLRK1NQTdd3UdRJhKeptdNVi6VMW5cMz3tLqLqEoTdFFj8wzMG",
  "key2": "3nVKj5hJ2D9Ry9ssFWcizsj2bGz4FhtUAtd1We8myw8K9CCUURcLkHi6hWH3McZdd4Yo6BnhTgqc8QuMHDf3Dxqd",
  "key3": "2fBYgWMTfQzBKP6eieBsMdEo23256LGtdYxJApn78px2TqLZrtRkcnxY85kZ296Y3h9arzBqPitEsbyQom3KcgDj",
  "key4": "bKjF3FwRbRA7ehACBhPZp6yWWBjHrrrtEq21PtNoW6vcHJ7nxA7VgwCiwtLqsDWrLsTZ89SGkPJGPWyN2o2D2F9",
  "key5": "4m8JGD5EjEEDqrtST1Lue7FLVMYieXMAqNX2q7prEtXtFrSe7Jv4NZ9d7rAHBQX52JHKuM9dieEFS2ZACKGVMUa9",
  "key6": "e8tYswsKjYs4LVxuijwtW98c65kfmq5U3Has4VnvzP5CSnFr5xwUtQCFWcJ15fsKnhHjEP4FU3fAQnMtaAv9s49",
  "key7": "4RzxyxMxxckaZBV6Lxtkv1HtVX4pk9aYm6R7vDdW1hKT2ycf18Vne1izv842AuUfEm599YoJDrvmeMD7EUQNZXwx",
  "key8": "3iQR5o2NHj5nEMy6q15yzpoET4PNVEBoJDroFGNN7MW2p7nxmrzjQG9RuMYjpwJ3fCrjVKwd9sCreHMobRW9CmKi",
  "key9": "9WiVSLowEuktpwxNU8xqMboW6QeGZ7SV74Pe1gFm2foX6JcVXpjz6FcieE8GRqnzwW6w6HtGz5wVxuiMpnVvxwZ",
  "key10": "511ifNQykk3Cuw6V1GkMbP7i9u4rrhmc1muVdoWe3uPtoWQWgFa7e1rsgcUQEadXbTuXPusWAaLF3bCBZ5QtGFym",
  "key11": "2g7VQbbLC8stfhPbDF4J57iTdLNAEjuB82uqcLFM5f2hK6Lt1hWnrk63uXXVQoiu9SVdNZi9x9Eo275RdU5FekMQ",
  "key12": "26tJRo1YPuVz1rjKQuz951QMVJTQvBGjnGvQbT1jkPXASESkw7sPpoPMSdznTdynJ7VNLHXLsyJGf4Wum56xXzqA",
  "key13": "2r9puCmU5zSmR1eE3tPEVGWMRaVfR4jAmfBHuKzcbfLD6uFfDyZ52LRRr77Lij6k8jm6PSsQM4LFZtsHk77Vgd6J",
  "key14": "5P3ETNAHsXhrpq7xZF2KYPMrmQf9ai3oEuPaK2doBc9xHna2s6k6KjV9H7tPyY7NjmkBaJmSun7mJAk3FmuGFtAj",
  "key15": "2aqLwo3SYxoYcG7GRzUyDzQes8Ms73nhhLhpLbPFRDnoWfw3PhDP1WFqwFgaJ2CJJx2vrQQbe7DtT1Syu34cUSuk",
  "key16": "3mSM4CnY3FBNdzjJck3gZ58oqBwUEx36cvj2KSkq73JZ95LWAtLQ9GNtHieiKrHyTRQkJwvHsfgP87jLk7nKsCF6",
  "key17": "2fHSgut8jkVUEyD9Qud6NBt1vqG6xrFN4bn26rVK1JDurNMk6BCeSKLSJRHTeUfnUdvm8N61Edi7XkBTh3sUiuMo",
  "key18": "4vsL99E9oojceUVW5QCtXqSLxHLehdvXAocoDgyL6zq2PGbgZhskVic1Rp6Ej2kdpzJB5rfUKB2F8ft6JrH1Jnjr",
  "key19": "5EjwB8xUy5UJLZac11oDqxN7dNJQLy9oawSh7j38De3ubVfe5QZj2w7zyKMK2PCRfS8dUyqw1YkL8L7hx2RQCwRA",
  "key20": "3Wy9aMRecVdb9p34pLnZCjnXS2zaKpwL5YAkQJxMct2EcyuUvBxBGgYG2S9C4zQ45KugWud6z2EthfZKnSmyQbAH",
  "key21": "3exMQ5ZUdzPzTP3G3bs3JospXpvDzSAqkEymmdAVBYeVCjuqPw2gqE6eZwVFa15Xx2nP4bzcC5tzrGocyXzJ9Unu",
  "key22": "iUfnNBxRG277KzQ2L7FjKXcoxSJBJcaioGz5VP2ri1bxqFMmwfT3Sw3KpkG4p8H8UHDvorDNyvjAbqpNUSisanW",
  "key23": "2dMxb7kBmLiz6eE2KxRCkCmG5agDcjJ5zVJtY2Bea88hv8pabqixRhMwULJnmJk9wM89upDdTRBsNW3QwA7rgXwb",
  "key24": "4W3ETeoqpk29BZsAJxBs9D2PDoAoTsPcUDJ8Yf9D6AQgU8w9CymMcswYpeSysBUz2ubHvL1xt6WAUhMHBUfj4ZMM",
  "key25": "2yzewjHhaTR5RwZVepTM7Y9QvSKZx4CrnSFMMhz2Qf7gkH4gSis6RNdqPkLgZeAfgNPcRhZoyyEvRxwP39qJDueY",
  "key26": "3zifcCLphRSWLrQVPv1xX7rBMZNGTp7qvMpDCNaK2qXcD9RAbm6xXc9YStMKBY4JcZQo3VpeKcbxDFzq7SMAAtgi",
  "key27": "4SQhyiNEV1fyDufo78KmrTBaTPe9ybVy4zfpKNzysv2gYKVz8rqcNihi2LSYbRpdaW3z84jBswy9or9k2LDDiK5f"
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
