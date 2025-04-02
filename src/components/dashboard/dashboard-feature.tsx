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
    "3AMeDh6ZsBBCmFSMpABG5UtSSYhgasQLFxtjSTr9eiwj7Ck4ca6ZqLAzZbb1xbQKV5DyM5jaqs2UNRBY82J41w8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i6NWGXX9rwy5K3VYAYqLpRm5BgxdFcfuj3CWTy1H9oqmqt9e8tjyG3k4z9mXzTiRVTaBqenSpE7ziNEwYHySUqY",
  "key1": "5y7xmB1xHNuWuAJKk6RuJ3unoWMxPuTi2ZrxMApUsUEuZkdcvQBy4C8Ht7fquwaHLJrw9tcJ33suqokqoqvTmu6M",
  "key2": "Rk9KhrFAgkwFwgXPyn9toJphqewkxFeuSw4MSSq1PHm6QFBVnEARa8XzVwcDFQ1VWLmqmV47DMQnbTrnU8pqmam",
  "key3": "2Sf6jm8nqzbjEbJdfs2qJVpeR1p33uFKCua9bzUpqfjq34Nb5T7Kcpa8xFSHVWfxw6XE1Zs4ZjZnzof1erATVwic",
  "key4": "5xUCytjQciDyeJtn6yZbA5CPJribr23ufzoPMzREzHUdxaaykbPsZkbAC6UcQAmHxBzUkfkXXNDUUConVxZv5f2a",
  "key5": "5MdzLB1AAgpJamviYiLX4RmwrouokxQCq51iFbULXwqVFApVEUYEETjjGFUxp4PhXcPx5HJRWwoPqmGmee96qYN2",
  "key6": "4ab9N6YsfbR3LRLT2xvroDxX3oxrERNpv5mERooMEhNZHLy6a7LDe4bCPdjTXABFNLnqKRW9QVpeksVg3xk9qwyR",
  "key7": "2j4fRrzQgLYhxpKL4yWAWLQiYDdXgC1t12TZ7ABt9TPLHA3iu88Uw1WrbakUNWwcAqBBV3kA8UZZxoJ8JwoRjmTE",
  "key8": "rCsCbZio1QcaWJfhTCHiTUaVZa4fLg6KeDMoCPMgrCE8t5kmh6HUUT4SGrkZkHSsMPPpCmmepk1EDKoYDBeqgrR",
  "key9": "24KYzovV5s1ho9XhgHo9GowREhEdkQQzFu8W3aSUc1WqeFwrQpouM7w7PrFi1vQtkAB8oGkhTVy64NusYfVg4RZP",
  "key10": "2QSXfSu5KBQNfBs9XMCHkGZBCAZY6FL1gEpfc9c57mqMxooxPr9dQBu9hss9WdrUorpvA6FzmeDxvzAYQvpwVDAw",
  "key11": "MMyCa9ncT3ufqDui87V9EDzDBzyVjvJfh3UHBo4DauTawgPSw4WAvoJv8C5VKT9e3z3NWC63yrR1HNhtD2hwBmf",
  "key12": "36NSWKrVGnXuFvFRNN2yCe3GjiJ8pdZYphANMwEr1GWmmCfCwQM6u5no8QnJKdDfbNyDdgYPxutWLvKS89sAqmWt",
  "key13": "3Z6qmqN1WCukJ4E2VLrACE4et67SoUnsBotyTFpJJxx7GzysFyUL3JBS2B9pn9NXFXcSLZLXq6QDcT19mydeLMb5",
  "key14": "23rnLJarQsktouHiHwYGFkeivCw4mBrj2KGLWR8bQBxP3YtYkCvHn1uScAeHMqcxLQh3d2UsAFYJ7gDjSHX8jYe9",
  "key15": "5zZgfdLfczJnwdCPqc3eq4tBExk34W71PV9hFRSBrtpfu8duRxUuNW5hcz4YzTeMjF84vxKp4uAGGAGAB9m4issR",
  "key16": "65MrMx5FeZvSYhBhBSqSW7NzHSxJPV2HW1fxNjvQH6wJWKj8pQrF762M4PncPVb3pULCSsvWxFQhgCbSHP4aeMLb",
  "key17": "3QsbHssdpbjsHm346SysBbJ5RNaA1wPbQiTKkKSiBKAPk4VK4aYs7fSttiK2t72Ym9XB1KWzVeuMqDS2TX94fzRK",
  "key18": "4GfNfQaDLyyH5A9aUWaV8AWPGh6WF1aGNyfkorLdycdgfEW6eLmC6khfNuXiLtxE3oAefnjmNjTg4ZDGkCb6LqCR",
  "key19": "wrQTCbHPW8Dnmm1HNTUZ14nhuHfy8LnoLSdmpp8iFNrvtyQNw8FpjNqcnjV4pWUCFy9sumQAJWPKjjimLMkGctU",
  "key20": "2bdY6a3thgRMBFacEmamZyRACVFt132WqCcD5hhKB9RHRmgdJyqbzbij5FfZguHkwHaQQKB6P49LKchHxGVc3Ldj",
  "key21": "3VB36QP5hT9krYgKKp5HF1ABEr67dWxesBUJuMRWT3vA67e5iMRDTYsKJ97mjnU5ZhVp8YqfEVij1q38qgA9ijT6",
  "key22": "3tyPYf36RLVFjamG2CQ1osJn9m6VWTT4NAUjjVYguFiLAYwCFXBpnxMBC4w3b6fiRUAGcDLT9fXP3jbQNGjBwYY7",
  "key23": "3kmffpK88mY4BpMs5HGUdjzbeEXdvFKpYog9wZ9CxpxHiHHcVGtZDADwxWVMMVJXuw1SG7MX5ghgaCA7JNZDHFuV",
  "key24": "5kg9xjrngfaUyvZyRKbLJf3VAcwgFtsbzh17Fe2AS5gWmrouf7k2gpFqsNYFD5dUAKLa7YwNJQYYAXn3FCPB4qag",
  "key25": "3WTkx65mDoo77hsmJftrJ8RLfoZpRyTYgjcHg1t143skKeWEsByEP3cdjR32pugEYJYwDQEVdyN1t1kdVpcNYStg",
  "key26": "3NqRPMCqGi5DubEjSgiiRmDZzhShNhNqpcGTjRPhvEz6RQm2UEiUHzheHG4zWTTySEnp8ybkvwEDB6HWsEP2v3Qi",
  "key27": "3U9RGX6vfTnULXyKqdDDXpdh2jh3tKqo1g7NEpVvwXXgnztwFfmxLPjFcutZD8sK7wCGRak4JsLquNHD6gCydLpk",
  "key28": "2q9SX47cqGjsZzVYju69JzAZw8LY29JTuNR9NKpQjUxbHESHZwm9XzoSoZVirz5Urjn3bt2iuwfrVZyMS5BfVF6x",
  "key29": "2LDcuBsDzpuz2K7ngB6MX17i3edCbNJ97dwXFVmLpEMNfUnneifb2nfuzi3NwM9KdCzTFgVjUmHG5otQkPeDnZLB",
  "key30": "2UNAX7h7muA58tHncn432Z7Qo66gCKSKnNe3EywXgTX3NYjrdEvtZc8wuy9yeusZLfGGqdtifKDHSTMUnasyVhBD",
  "key31": "21huZrSDKpkKZjmsrwYKFXA6e4Hkp8emWbN2QNJVTeoovCBWwW2VSspE6CvXawhSyarPyqLpxPea8BPeDJGoC5JB"
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
