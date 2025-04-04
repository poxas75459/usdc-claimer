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
    "MzP57EJLhRBBtrtKvSDmcoLpp6aER6CSTHJmi2hyyY6q6e7SpVEavbcKqfXnyBF5NxPEzcNQXytjupH62mtSdZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cUrF5DsjzDjzPjFr3u4dJsat7Ft79SbLKEkqVgwkX3mPDSqyFYmVci3Co3CHBr2AR8PriqrmUjPgET4jdRsXR4N",
  "key1": "4TgdtECKNkj3hmmPYQszMM95X4aGqxohCP1CPBog24VEUd3pLrsCVxFWeawjtNPuxpmr9dvRRgsPwbp7axXoAHGu",
  "key2": "4mLHsSTaBiDVspRM52kDciAUf3mEvqc37C4YiTCZNGhxgTw6Ev3sgGnh3Bw7zU2mUW32XnWKE6ye6kKH8ArozZ3o",
  "key3": "5gFLsX2LdzrjrDnvmmtkaPP5jcQUehGYogtvhFtmq7yTSFue5yEcMmNLLzgdH4yoEgvGsSAaowQC2msDQpEh37RZ",
  "key4": "3w8HoW5DkBaacpS8VJJX3cGB57wEWCHzdN34yPA7otuPBsGGTtDD5yaa56k4h62WUnaQCK6Vuz18DgMomMfyofLh",
  "key5": "5DDnsHbzYBJz9m8MLoxxPrZmEi8hmkZXBnzAcNVJHDDLeB3aPZFZybjZKrvKRMQ7RMckZK5qE1nhaAYaF8FJS12n",
  "key6": "5oXd5CA9UPHaycpYZUYvpaUhEmmVQTWGsyCuVMzpSsWs4Meee2cDgKcUZmp9PmwmL1ifEE4YYLkVLSffLW6vyRPe",
  "key7": "3x3VggdyADNb34ejMLapexbvEAm65kBPVWMPJLUbFQYkMFmp89nNtXXFnrKuYXNbXd8bTbg1gx8LEcnAW6tuRv5v",
  "key8": "3SQLEvWh6RYn81TFRQgnU8H3nLFKsVLPbdwEnAbgucAor2YSkwj4rw5uqmAR6BkwhiZVfGsaFQJQimUTQonV7RBU",
  "key9": "vgSycQbneb6YgdZj5qnivQw5VVEMcHe6djQprUjgTz4hGQYEo1a9MEkCX5pVK2MhdP8mo1Vn5BgXTeGJ4nvHAXE",
  "key10": "FfawGULooRFSwGZdzSJr75g8nhXih3m3TiEFYtCcrYeC6uKXSajVJzZzEAYcBhYSdDS1t53XBnxyA35T3v3wwGS",
  "key11": "3XxFWNXbEDHbTaMtXEHtD8mWpCAURcrbdiLdc6yiB1Ex5YiKxgD5Brx67DMeR2GUWyTUYvgLxayJ3N9F9CtMZp6Y",
  "key12": "3cBZenSoBhkvUuA1mwCJD7vgYWLXvAc3MAHxEaWkwLKUMYarEPyUAcgFGKSEUVY2B8KXS3jkWzWzR4GpaP4czXtg",
  "key13": "aEr5QQgpNGtQ6SFSPiX5vEzEnfUipvevwhn3n1RtMcL6AC92kJ7gkqMpsNtScb9z3tpWpjnm9nNFY5V8L3zdoLv",
  "key14": "6hkhTcYyZeniJYopsU8Thf7e9cD61Qu8ztmcgsjfY3q5vkmu5jcR4zFCSPiib6UGUdUPeiZPh6DgjgNyP9Mq5Nt",
  "key15": "uc6XkPwm8EWE9e9dXNE3ZTKaw312VaUMDxy2Jf67yCrpyovCycWpb6FtLjMYun4rgVqr8JoJ2euwJjzDgcxq7v2",
  "key16": "4pD1H8szj29JWHXbnEcR7r7cA5wJAH554LkddPcFRG4byeQ6vMZYwHVNm39cd9P8Tt51xGqVXbvye7tcVgyRW9Pc",
  "key17": "65gd15iXcyhjCcgySd6TqB9iWheJBSgY78Q9TsTakt1fF4aTRs17y1FzgNszuhMfmCvNFn5duc6zJAc2EswbthDN",
  "key18": "5GfZQD55UTEjY1T31NzNfzXsG5jdgFPtF6v8wHNu6KE4fRvnj81Hij7UoRm3HKfHVHZCiVxCCdQyVsNN1r38akKr",
  "key19": "33xBkuPkonx3BwYT49tqYRUJhfcZNJugFs66xZNmKSFcsSP4CvMGWRo8miCkNvoaVxY37TeEJE9PoWKiqUHkB78A",
  "key20": "rcvcGUeTKxJ6VzS9nYTUCE8yERvcGzx1Mrh1vndDgZFBaezXPkTQ6UrG19HtuBapJmQkir5H3pV6oztNjTXKsxz",
  "key21": "2tYXfxmWid1DhzkJrHQzTW4562c3k16G15k7iBbsBBxCZQrz3vadgY8x4zEn1eBxwJzfqXNYFEjmuKbrnsw3KuA6",
  "key22": "4XS4LuCkZP34LN7wbDvCAy3ixbesoFw8nH2CWcwT85SjTqB7r1ykc5Vqjn8k3kZX3WmLrHtdqMW1Jb3aj9tPfmJ8",
  "key23": "544BHYMdk2SQGFg5qKRXAxZmb8Ma7w9fr1khT7vsdEDUA5pmp6HAz8LfHBGoPBvjByGxPpsBoc927f3EvJQnLu59",
  "key24": "5HS4YJxKXf73jAJV2NqKbLZYntJJ2rGtX71uFzg4wPaZDrnotNch65xqdMS3SkKc8gVTGf3hfJRsscsrimBwzeBr",
  "key25": "2bZMyf8oso71LXNP8JbU17C3gppY1awxW38gGX85BB3N9RFLNiBsj7dS6e8eps2pggJ2U3TgpvG6TkELGJrmukvu",
  "key26": "4iVfibagmrknA7AxSp1XDgToT4s7WqkHzP9NKno8myq5ethqYwHL3aLL4DASwvtibsqs2nBbohLWYaETivRdXMbj",
  "key27": "X8nZxEp9f7y6ypXHrbYEWhM9oG4KYGwrZM6WXqY2fyLTv58ViWmEJ1nzuV38a8eE2WSZFJ5FW9t2317DxgdmnUk",
  "key28": "3jk2M4vCauU4cg17uZPGMNuG98e2ZGd5Av1Z2RPCqcMk5sKstzv8FwqYZFpJYrezUeEBJmrwh9VthK9YUCCBz7m4",
  "key29": "2GBJgosHqEJf1AJdpQ4PZSXBERVfCSiixwvrnHNHc4ScPovRgZpDRbEVSCZTkdZFUPLLnjZsuGUcDWnJWAonxbTe",
  "key30": "4f7tZQm9rmxZcPqtjeUxRoHHZtTa9UiiyLSa3qfLPbN8nMMgcU2skNsihCNrzzurz186T8uAwNszTEq7u5BY54qu",
  "key31": "2QSUWQXVj8jru5GHQCwuKWSEoz4gdEztpgbshC81UJ6Erd7mpaJjoeYk7j2wzPQfQ2Dtfs3tqZQ18cq5FVZuRWUL",
  "key32": "3NXVScaXUgrSeYykS68zcfFhA5yxdm2u3bpRQacebJChnS7ddUhrvybEqnwEKCM65Dk4wyfR2YGq1oc1BjTt7DNp",
  "key33": "5T7ZkMfoxyuJjFPvERg98npqUHkR3HGgscv3DeYxCAuZAVN1qfaii7PYGtkHxKUYXvf46H3ffzz3THLnMxLQ63UF",
  "key34": "r9Bjd67weV8fHZkwBSH2oc5HppbYdzMmQTpZGqTHRjXSPac5UGLHvxQVYRRqwdYenaDQDuZPTtMt4Boz1675uVH",
  "key35": "3t7938VvRQauxEtBdYRtqGLguJWwGxaaaWkGsEnfCAeW1RJb6eSXWQr4U8N23kngragxqz5KwA4a1TYFfjmyCTEb",
  "key36": "4efcwhumYKsT6zVGRvJDfkATQu4nuC5C1nezNphBnvuyxauNerbZPWujKDbacWNSFzQxoXgZQLzoTEGT8GU9uCaf",
  "key37": "35LDFBgVuK6VKx4UAc3U12BAbwda2tcsEDQNKZGZb8M6FWCiSCzzoyEo1KCj2s7o3spKVMXJ76EcX56TNABui4gt",
  "key38": "2otXJiRhwyami5iDAcXSKirQzndfYmwZx6Jj4nwp4Pth5VoUhZbjj5hVWqtdN5BDCUUhEUPtaUR9bxypDroskuv5",
  "key39": "syDJzHwA6WPdYaY78yF1hSywLnnfhUDsYKE4A9fsQdCgXhF3tW7aowa9Hhxy9E3EdBYmwKwrSXPHxxoibbW7XHW",
  "key40": "5nzchR6SS33PowUzie43rVYKWqw1WYSqmJRMGLwtZpqi99VnUkRkmE7tAtq8XfN9eLh1HJvH3TYsUDidm8gzpd1x",
  "key41": "53nab2KUZL66KczDeWKBEn8E48ZpZi9rjpc78SdS2AfH6LkokEm45JbZwEL2Zbq23v9jN3BiinQZCcHAP78x7dqW",
  "key42": "4YRmL2pKrVzAFcWTaeV2DtNnvTvVZSE6mfuLjLzThe5UBpzqouw2haesfJA3dhDR64xkfbTceMAxAF5LdQn2ybty",
  "key43": "4JSVxgjKodHb5x4ekm3S9EVizoJ217YqnRB2dTA2dngQa2gU6riatkEnftphknFnqEFLeMPiN5sJEsBA1Y5YUm4n",
  "key44": "4WBScX3nxmtiJDQD6QVdva9VWyZpjQKRmP1oqeYuiYpyGfyTnEfcX5DaURf2AhEwYAPnqfm9vnmEi3hckisGsFAx",
  "key45": "5CUpHpnt9QKPfjdztAQkkcXx3oEMsDEin2hmgkppqRvs1anjuPjn5TBJJ5M5ABXK9xSLbc1eXRFZSrSZN2BWzfXf"
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
