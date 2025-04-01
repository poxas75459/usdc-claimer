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
    "4unumvJfGWmXNHfZ5HeNst5kb8EgYFxmVgvAbyN88xdNsuw2HJdqeKmHa7giyHRQvgzyKL5bHNynpTThuU2NchZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jMDfADX1m2S2n44ct5oahgaPDv4413tyvKnL7MuvAsJXrGCRcCmzy4dNhPdymeGMLmY2pBEutMS8frxfyn7uusa",
  "key1": "5fs7hJfaNxX3YSTYSfd8DDVhQa5Lqoe8TZjAx4d64T4poL2HyENRTz7MWpUkU4jRxUsbV3qiY7km52WvJZgbq6VM",
  "key2": "5VpdibTA3ukpyt5wCxHZusAX9gEUM6yvHr7ABTVX3b1eku15d2tK7AxibcVnqBtVW7Q1ib8pBJB3AiES8j11KMpv",
  "key3": "3MDpJaz8VCPcpEuyH8VtepSaf58uPBJj9JrDctzh2o8MnUsABwaoeHydbhWTmwX8qFkpBmwDQbkHPYejMMVnqusn",
  "key4": "542D7gknJRhj57t1FLEEc9xpcySCoCiety6DDsf748RQgcMv1u6WGubKCqLsofJ2m7VTb9NqT2WLWca9sAokrxnY",
  "key5": "4JFAoXA4cTGgV6rdpPKF5X1YaqKNQ9AcFBGcm5KcUL9WB8dL3dzcA7gTuSgvPXdCPwLo8AG2UCfJTdQTzEMdP46P",
  "key6": "echFXtw7iPsKVEmvWLHB9SoxNoADqrKHq4haicGeSGQzEG9ePSc7UH3ZsArQKG6QyGPpwN8qWHhXjeZZ5ttdfWH",
  "key7": "WSnJxDcez3c7ocwvfvoVDoAAi5Nrk5d83A3VonN3Ykb3Rrk4RtHHabwyGsGVfAmuMbwdDUq8uGrWZjbjcNAmY4j",
  "key8": "5hHMkemJGzbpnfcmvRDTcUwCrZi6cdRAXEJuXygSupUGzFmFXJ2Z6xn8aJtNVYyEduQdg64yEWasvh2Lzt1xywxp",
  "key9": "2rrbxFH5fY4K1reQoVpKUQoTUnQbkML6kGJtApRAtaW37CPqGtUqRy6rcTdHQ14gudZmDjuaQN55S28CBWZU9bpp",
  "key10": "48w6qhGZz1wpsXVZExZ6QMQYfCTENcgwTTBobcdvnMKkEKxrSnyNfBc4qs1gH7ZWhzxUtJgaVVnkHudkQsmzDLAn",
  "key11": "4k8jN7wJf9Bt8iDuigUxpKmKwfUCiJi12Ly5EBuvjtn4Lu2B5KDCGXNcb8RhRC8Jqam6MxAEjekjq7fhvVapmo3a",
  "key12": "5jnKV9zYiWAFnTgMCX8xNXyJFxsQgyNhn5qBxdpkvywhrnF2anEg1yxwwQyCAkMSJgvVe15T1m7b6AjDw1SUmUD3",
  "key13": "5y1KxaHrg3JhEPWBGrbBza9NaVesdBzpeASjHweYKzoH3c4BQtvkjMGS6bA8o1rycCz5mtRes3arCQU4VNQ4r2Pa",
  "key14": "35oSuzGYmfvU4V5CzATLFhwnCEBrAPRRuVsoWcKqsNiNPDvz1CMUS3uEL77r5y79hcuP8UeRYTmTSZPdzczB5nb3",
  "key15": "4RXfWNPW56TM4vgTEqFAyTim7EG8E9X3BCAT8JZiDnFW626oiVgzY5jFQXM6rcT4ASkatMKDvrm6TBgZ4ZGMVEgu",
  "key16": "2ChNj8p8Rxahm8QBXMELKYoJVYvK5b3s5eBEJknkkbjxjTgMivn3jpkYaRLcEc9QwR5wdhjz9R7enGEaDFFgKgmB",
  "key17": "5PgXfzsp4KjUAkEkvm1KFfqBaUv8Vm8zKajBPAFdLxZyMuhxCMCx3S5gdhLo28HPo4xgRysf4ne2rcu6poXCbxxf",
  "key18": "3nwgoJeAUQabVw5Wo7DbLy5bwUf5unhYxXKEg3mvmLb8bv6vJjAGh4zgvvqYfxZ9WXbqEnPFgs3qUmHgGiw93sFW",
  "key19": "2RigWApBzrtbVeuvgZV6YRhKBs84xkHxAtTz6iQQW2jk728Jg2AYz653He56cLGFkQtsLZtBfi2eQTdfw3A1mSzs",
  "key20": "2WGigZ5EUt7zESV9i5Us4R4aUBgBdNR7H4bAHSsCG8ejHjXwxc5HotLkYJbw2rYjc9Yw3Gh8HREcbT8tz7NRhMqE",
  "key21": "3jUHUrAY8rnamXsZB4SXvHax7gGC4GgZjjNTVEKXySm1ngHZFggoU3AxFFLbpGr3AEJRWCbcBEPajaeerbUhJyR8",
  "key22": "5UxrLHeFuxsUqmgMJzuSxejU5jHRnGZD322FEhcagBrXUsVPzBFG49pVVaFDU5hFxHg8QMzhWuWCEP3p2RJkiTMX",
  "key23": "2RiXwXkXHmm9WsH3FiETPN7gvnmBXowGL9CUDX7D2F1e4nvjDTt5XQTCAogF66uPR8McARPqBHreGkUU3fRGfe5A",
  "key24": "4p22iW85YoLqKxmszffCVHQyuGFHTPDFBCuBBV6ersssB46SFcVFuXaiLho9dheC9GiaS18kVMEYbBfSyaDC4SHE",
  "key25": "4c7sUh7jSQn1YDiWtqpZtiMRK63kjbwAU6LQ4nMB7VDpCEY8aq2R4xBeLuTaBYLX1pHzj7DcqdR3uMiiNitcnVx5",
  "key26": "2E2rrY28q16Qe58Pj1YVGrFrHr5jnwY5jeKrAeixhX4ko989SyW1MS1iJqzaYh84PijztQAAoMgztMF2zW6tiiY4",
  "key27": "2Bg1BRSCDY9ofsgekfjz9RGRdr6HrrZxibgKznVEhm7VGKf4Be4ragnCim3S7Vz4BuEEXpAQggCJPaqVnFvDSYb7",
  "key28": "SSbma4WY5tYtYDMjzGxFiasfuWhd3bQagbKuAVBNbRvvejVHrvhTqEEayMk1NASxqdXGTzodrxJGEzkBMqkSske",
  "key29": "5i3C66guHUaWZHVNsCtKKYqL9EdQpsWg4KDQus21EQQc9hAWGAMyYhfGfjjbuVD4bukXK1Kw7RBVShi65YyueYGR",
  "key30": "Lyq8mhtiNcCaVSZwytTBqAYAmgxUBHRfM6aMuEeKLp53EDqk5P42ysrhx1NUQA7DireU2Km27FSXxTc5B9Asce8",
  "key31": "3ziq6cXvpAQfGQ6FnFs1oqXQJWF1jP4EgXrDXBQyrZT7TPtpWUEiNerZJiGrgkyr7Kd9PpEU11zFsrRE9NWHYmx2",
  "key32": "2kzKdjTrompmdeXHdgKabmpTG9f5goZjcWaAEQHCAPuPQrjZnaJGwwxhevXY2ptTACbiMjrEQBrx6mo4THW8BSs5",
  "key33": "4CniYcDGr5tTsLAL1ZqEwyo2L38SiXidYGtnN3s1KKYvghnPPDSV8Fv3NZ9u5bzb8hTi49UPQip2kneVz2sBGkYE",
  "key34": "4KMBE39VkwVoEszh145uZQqnVmbRLwbR3FyAnCQFTh55FwTeEKb4Fh3956JyjVWMUv7JamU7PoVXLdHedDSnNxu5",
  "key35": "5yp6AqAyTcDKxGSzCGPLsewdF6JDdnKgrHUGrLft8g383a4bwEY6PkkHvvWNsR2D92zSgwZdkM11dcPn2fFKDY5a"
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
