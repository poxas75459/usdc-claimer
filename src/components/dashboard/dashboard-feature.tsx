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
    "2wQJPU4pvSqj8nnw4ZjjtzasqSj5f6t8YNuzndsEXH8GfobNgAk2iwAbvXQhea8t9A4yGmEmuLzJafz3n9njMVie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MCvkBuCkmddSCwXx8ARAyxPF8s81x7h2bXmsrTtV75oxcUvnmjJj9ewmRw4N2rhd4DSBShd5bhMbY7QnV8E2ija",
  "key1": "3dXqDwZDjppBJJvzHu92bTNp1XsFT456wiH37VbLkNtvhnDdchrDqDgtEFetuKJNQbQqGwX7UvnP5TvdoqoGrNGA",
  "key2": "2WQgLSZDFWxeW5gChY8UyD9aKEEzBgxhgfRQAf8zyx7hYqDtr6NXd3bh8g6GA7jzG3faWExPdx9WJievUGwyuhjk",
  "key3": "24Yk3BhPvpw4s63ainhX2AvY8dGRvkaMbXLBQmeGU8Ge5WRPDPqw8QAqR8KN1jFLMBrXeGTL4gJnbqk51HkPVG2C",
  "key4": "66FFR2Wkcopq95taDpkgVyjBrniiUd7bJZJikEhyuY3usqceXgNvSZLmLL2xrsRF8R3fNt9BF2MbzLFqoxFSZNmv",
  "key5": "28MB9C2kVxwzwCXsyMSS5j9U1zZKjhZEPwi9pXHBCELZCtx5ANhomjnMhrdiyk5BrcHpjC5jpDk6AhoJjePmXhhb",
  "key6": "2HwDbNmw9bPCw19MZs3MBB6EekkAq1inKgVkSJNYCz5MKL2K8G5CKgbZgJAi2QrSSaznQnmidBu4soGGDF8AZRiY",
  "key7": "J5cJqJFTTt8rNy99AEtC9Sr8MNbeubmSwVcyGMmcR1NwjYn24mSWWdShWQrYV8UFrUZk99oHHGNYk9mbWaCAuhc",
  "key8": "419mYQFYcENEjCwBuMrTNtzQUCYSsSV4pwnBGBRbTEAaUqcKVNxhqd6FLndgax7WCHE58td2UNzAbTor9xjuVX4Y",
  "key9": "5H4CdL1rBHbak41uBUGCoWgqAiYE89ruit54PgB21ByccHCAxZyh69MvfLDBAzJC9xPcp3EqVJAeWWLhyM3Gk1rq",
  "key10": "3SyZVpHHkDu4YbyVViF9hAzphgC9FB9hDeNbwcD8nqWacjHyscTzkSXeM51qGgZsLcoyNY8WpsANMynPyUBxD1BR",
  "key11": "DYzDxtpE5W8FrGGBXW2guUuHNMUq52NkbttwCsznjhkP3FFbe1K81u9di9rtz2s2ax1mNVbaRGiYXGhALo3djfM",
  "key12": "4LdzcMcAxb51ax1nAXYjJG74xmYyXYS2UehpgjWxE7siT4mN7736aW9zrEszrpsm9HsqAbdBLQf9Vv5ESfXrkcRu",
  "key13": "5Db97YqMd5BnFihdhv2m5hnwV3v3uegkcpPPf7Rhv9cuURWypKmN4izANf12rnkrxZXy3hJ4hWPy3dKrsN9nZsbo",
  "key14": "3XuzQfTsXan4nk116CAq6sRbRBStHgUpuYF1JA7GcZ2TvgtnfBuyAticgWJc5Nb6BMBAZR7qx1VrZES7QESt5tb8",
  "key15": "HF4w679B6xRkYMTrscoRgysR9nAi782ofRcx9AZ3HRCy3Mvfg2G6nQFiC7B92VxiP7eoM1vpXMtrDpLPdDjHN9w",
  "key16": "5v1M4qhPz6u24Ns5gMu7zZupE3ELjt65ZcqpxJu4ctsUFxz2z7pQoQsUfQm4cLA7qe4mCgxKRo87nQC23zHCMi21",
  "key17": "9M6Qi78iAotACHUKWhgbznkmFLk2TXX7bAH67HrG16B8hpPj5RtfTFFied38W29BkqhCnrQ7RN5qgU7MRqP2LGe",
  "key18": "4kyD3zHFJfXL5W4rv5cyPN1RKg2o8YF9hp5hMd3bxBz7vE8wtEqg6T72GwjDTzGQPHrcNErc3nSHzJFcVYQdYzcK",
  "key19": "3qry9YJ7ao8rbpuAsAxreHAmqsJv84bZhHcFXDf9RZcv9Hys69ZykATZVDwrVPNVoVSZcG4VMCVLrWwvCdeYQv4c",
  "key20": "2J2FWEKTkirqUKgwRM3ntFRvwYCQBeESakYuuGuKh6ZHskV73wwdGeRRsKc79gBxxUWPZmDhpL6AscoBrmD3dvkP",
  "key21": "4iE28ehWe2dTjNh4BpRFnUpqK2fQ4MbcaviHCGirxrN4fLzNNpbkC4hAqzpdQhFpv3KbdsPgF4JYLXzroWZDw3W5",
  "key22": "4Eqc64VDQTwEqLBD2okXVFLu6dgT9Ecgh52RPwCKUi8CMjcVwb5jQPzFU8MwbGGmFSV8sPipV5jF9iSAzSBD8MCo",
  "key23": "4EkUVfVDdenieJWEacWbtK7xddciDvGAPztXfTDaKVgtRHZLt4kppKaFBCzkudaLcgLNCB41sW5GdzTLdXBAjA1Y",
  "key24": "3Zrk5ydkA94ZnYSiYqeMNz23mpqdPy8KBJAwNEj9wsLUW4yaoKMNzHypFs9heA1eSNy7yJeR7rbMGAtdJ4XxZE12",
  "key25": "5JgV7AAoYzR5TMnohzp3JUvWwuy42x3aKYJ4MXDhA7WTgTN2FWTRopdfnYKGZWYTYdqFtb6gF54BQpu2pDM4tmRb",
  "key26": "4VceTqKQ3syzxzqRBrURhx6JT6bQ5w1SdtWdGMoBSuuwTSePo2Vkepbu3akxggexSrN6XKKHTRsW9Nap1pP6CPFk",
  "key27": "Skjuc5dosD1NZBa21ew46fwUpyCUQHreA5FZEFvj9okdteMz3ECn13ZoK9zLA5GzCt5Zp2GAYPJJkRbpzHUsT8Y",
  "key28": "5Uh5vcPqsftWbcWHErQt2A7GN893LjbWUJHs12NMBxCFnB6mznCcwqic9AeFKwAbDaqgqDfB2G6btE9YpSaV1pzQ",
  "key29": "5p2ijzgHicvTPqSUjXRmDEcVfFtnvxkxpo8icd3QAWQamtBo7aMTWdKTztMVsuXE6rhe3z63gWWPpnLjG4833YRL",
  "key30": "3Yq1ZJwT12zfPxh4e9V1u63Qd7GCwtBATz2Rbasz7B3Tw9bL1jm2oz3UrcEnvo3GEcpSFAWk1RdQNCHc6PMqAsW4",
  "key31": "35X3ce2FFwRCYEm4gTRH3AfkjkRtAfbF8BGaZkfn34cECVw1QsBWy51xGnyMQwo56hctwvms6gcZHbaMuPFqjULZ",
  "key32": "2ugLAPuVxJ7rRaxsbwVMtnt5oWStz9GJTRK5RA6aXYhyL6myyf6uTTCzucTYoUQnGAo2zPZL3M4k3kukMkpy2nBQ",
  "key33": "3x8F2t26jnyDx8oM4fT5shw7NhQ99M3cqqJbeMPmmGsVrC6MRX1au7YopTK7NDjRZWohijnhwMXNevPEsTefyY8P",
  "key34": "1Khytwgw4pmfU6YCZjiktFtZPCQ2vLoTrXLk7AsbmmzLWNZKGvTgWv5RVqrRzHw95mbJYLkuwXfcdbk9WDq1wP9"
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
