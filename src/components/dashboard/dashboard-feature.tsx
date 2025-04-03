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
    "4MqH2v53zYXrUSky4mjrHw8562LRem9128fNbe5GTkUSacYGN5T97fSgfuDHuKq1agscqQEjxizPWp8dbJpAdH4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oA1ZRAqoNhhqxdrCTbfNWb5z7L2ykSqtS7DttS5MqysbZVMMk8NdGLrTfFKj8LHsFMFoa8JMVdoCzgoAT8gbQA4",
  "key1": "4VmRjQLdzcEcZWaPNokroUjkgefA2C2JwwXiBCFFQPT3x8136ZnPwckvjSsNr3d6Qr2RvDzecbGjDkTq3CrhJ7Jv",
  "key2": "NwcFE2SFpzMPfbYG8enpcvt2zh3zmomp9sxrPKsEg3ksPSym7YWmrubsSLYV9LD8Huv7Km2qpK2LPW7bnksGgFG",
  "key3": "41bXrgniav7mLkF4GoQCLLch4McekBgxs9Vom8mJeeXLHxCJhVxAFBpHg4bDWCJcHnWsHXqNNqSLcXNzCBAB5DtU",
  "key4": "2UPA3SsGLaCYgJBNbu7HA9xBoLaqyXeTuEprwZUtKbTy1VgxdcyioHY67GbYcquLcmusx4kbHqNfiernLCrck5Zh",
  "key5": "62sa2La263GG9w8GtXgr34Gf9mYDE8u8RHszDW6Wg23kjJ6nqHoxBDj6YKktuumYXrGu49HoLgcZa7iyHgqWXdcY",
  "key6": "5XtsqByUEWQCG6KWnZP7MGnwQWzBrZvGhuan6HED1nGDjRtoYvxtJ3asU6KH7EWM5oHR8m5yFdpcPnbi8VcF2Ecj",
  "key7": "39ch5Chj4dpCcAXbNjkFRg5SiR5VozaG5mQYVpcuyEUqKoKyN6yNBCWeGRdfJw8wWLr7jEAGsdoooHH5nEMAVtd7",
  "key8": "59ZNZ2s98FE8hfLEtVohdEyBiXo3jbTYctDAFeg7bGWa7LcuQ6PSPdCJKyeD7RBzTWsj1ThRa8z3hEQjCBDPA8TR",
  "key9": "5AvSyySLYR4mScJWjiGKY3kePiFkKxHMUSCqYVA9PE8qJUffRFUGsn9apW4wr16aCWq3gASE1j6bTRBk6QoToQbH",
  "key10": "2V5Nq3r2YGPeZrKqdQfapjBdBeFCeVi4u23MiYTeuyoBREfeM9uatVfuZQeiWMrvkvfsDXrze6P7mpASJuuBEM9P",
  "key11": "5EZmbtetPcSPvwxTutUmY53m79SG8qaiPUPEhaKUi4f1HMKyP64Kk2UNiv6Afh5LtSkTien7j29KmKp7Sf8oQC8x",
  "key12": "2Tf57mBRXAwKkAdra6Q1iNr8GPE2CDNwYFwVbioogn4yXijDidnNQEG2wzjY2cCwZZX6eTRD6CKXmPdM6xAsSQK",
  "key13": "2KwUKb3TvowvTnHhtVK27UdyTipwzPkrverkRte7JZUgVuzXX3VQfxV3ydWaoz9HsZSLswhfo9vVDP4rvsHbZVJ",
  "key14": "2GBXWhP5VvckMAtzrzyU9ryV1UX8tRU6vKutm8yQkuP7hyAg78smcMvLP1oXpTMdrSzQiP2HVTj2nUHDKkkHGoFK",
  "key15": "37X6v34jDUnKqjRJLG7DPHjxuzWQHuxWuACdeRehVyDJTc5mSLK672byqe1KZJfWGKdpWZj44TJCs9UAdVepKrMt",
  "key16": "4JuVXHhULMhatbbKVdoQZwa4Gs2UBATiwtm8ioL2ESTHg5MFAaAtWKxcP7eRk4rHxVNVideHRcx75TvLToinoZDu",
  "key17": "4Sk8EwXuwVJSZ1dtH1434pq8C8QZ1rrSsuvRywhA9P4PHYvBKwygebQndJs2c8DMckZTShYN5wjBd5gzK9MfA7zA",
  "key18": "46TTEcRpVft7ksLgu6w4QAZT611LJcaRfxaFrKcZAZj4NP7YKuDj7t6crEvu2ov44fLiXfAX3jxpsKxkWFkbhV1P",
  "key19": "3y9kuYc8DtHhzLsBxfVo68h5YTwB3bWzVPLb8FxkkZXPrcwByShN9baSVJmS7kyQwdaGDNiWANhJQFR9QxfzKaLy",
  "key20": "58JLFSgL71da8418WAejz1WXApqrPqTSwRzqWoMWUVfTJbYR46ZJbUwywHgv7PKQNfyNMDb2fqnYds3afWzoZLqQ",
  "key21": "5Mw53BQKX6yQkctB95U9P2frbBwYnU7gAm46p8h9BHXdFF1eSEcesihzFk7tb6Mvzcd4r7XV7fmbaY1aKqKrhNJC",
  "key22": "3AG8XziakstigFDS4veSWPeYVB4eNnuDHB4dMM2ztb1J1gd7LXATLGcsPY7rZVcPrZbiU4bs7zkkeb1iyUyGrTGt",
  "key23": "2ky178ko9eg2DYCs1tFpgVzfJCTucoJHceApYmfnjAGBDmEpix7bBwW118S97wmQBAiNpmavrJYUxNgdd6kagiUU",
  "key24": "5pe6Rke4TbY8HyqfmTm4uC1U3nGdtwFK2o4N8FQugCnUTA1ZGm7HxzDRcBXQjCiEaWetvbJm4cnGK46tW32zWFyk",
  "key25": "5NGXRftrFdNi37DeMGug4sbAgLqZ7dNmhmDc4F42ejxBpW6HKXjxZU6LPJ6zb6npbYXrX1q6FQfkBxjiqWyo26kA",
  "key26": "2ihfQ1NuRvTzdBKUNpYryZ9wtmR2EH9YrKUAFfJZPbPZdwSDGsduEw5e6RaF5WNjW9KggF6S7Ta7R8JuptgKqvGp"
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
