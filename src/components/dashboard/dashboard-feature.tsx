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
    "5G7eKF9skWLxsM4idJChQB4zcwpyZxoTMPj4Dq9KSw1xoxo81MteCv5tpMkvzwYJhqArzWXdTkM27mCdCDEmEzVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dy5mP44UbADs7TpazxmWSu7Ec3ygaFmRdEVEsPskjn1ZxeTZrBJFmB2i7B8g3Wmffo24jt1ZUxyva3hfHrnpn7N",
  "key1": "3PfHSk5XQMDZreBzS8BogrjWQNw4wfiJFaJ6w3sZhhWDegTkXMt6arege3jgFZZy15KsG9WUDVmgrtDTbbPpYd4",
  "key2": "2e6cu3qfJ9VWbufkaApZdLriPL56mWVPQfgkrVPN8AWy6vehHabe3L5xVoTGj8iPcsBTtRtMLZ6FQxiJGQQmnWpS",
  "key3": "2MSxisNCm5iE23LTPWTaKQSkLCuHV4vAUBgsU7XgN1wcEq3Rc9VxHAad9eBjjKWPsmtCZJPwBtC4wMpvD2TU87s5",
  "key4": "Fka2yAnKWN6aYDTrdr9b7mBT1MkUg1CHSyBGuYmg5y6LXfWZRh5W7QtcvCQsz6Mo29ZHpSwz6Y544wjTVc3tgu8",
  "key5": "2eFKAaSQpbn6trAC2Nj1M1RH9PbtTCpvRiPP8TYcyovDJH4WY39WpBvKJbtTYeLwTGJqQs5xfVCjq14Jw1UinPTH",
  "key6": "3jDuArtN89wEXiHkLN7Xva8fBaqMUKD9MvfgtgLK1XY9NfpdvUaS5isWXkUU33rbGpFiHnhwaRnW8srZwg1Sryp4",
  "key7": "2Msk4LNRa4xySGygy5u2wK7JTADELUwT7aKExdF2UBEv6C3JoUiQF53Ph68aKPreZzy93tTCCM6yXjUmVG1KDPZ4",
  "key8": "3YN4uSkkSwkT2NaKTGpvzeaWf4fqbPyXqBkk3k9xZzqmSSw9M8WRMLG83bQyVZvRncxyY4p3SAoUJ4GGiCMvfiR9",
  "key9": "52qtrVKbFcFsVtPY5o2ARautHoxwMWVGqEckMQjv6TUKUybbSHzxVMeqfWPenqPSm8fdQzowSQSY6d8PxYkXc9fA",
  "key10": "4qyzY1G26ACcTyYbvf1usT7qR73b58xCgLWHjakwTV148kzVrKoFnpCSTsobuRq4k4sNQCEa9fwyg5A49SGhKUVU",
  "key11": "51LwnBD5p1q5DcPPKuoRpMGZ5TEbjojiywSD9zuoSRmrcj56YvEGw4bYj9CjsYYGARnYzkNN6AcM9bu7ipc45Ago",
  "key12": "4nDmXfdwimdfjzJFGs8XKawFwtYUtyqntH43AXUjGVzmJ8Ygs26PFzBnZYW1uoMzMruQayo7DPSqr8pdSzd2N3Ja",
  "key13": "62RgJJG243xRMpMuELoA8sQ863KwzHCJjzZVVGP7oZt24pTF5mUauzGaxJhiiH4n8ST4rYiysKgNAx6db8ycRyKv",
  "key14": "2MFkenGNNSvmgckB43RqedCNJqgkZ2rim6S7oxrDXwYvxuA2QC8v7jk4M9zybxXeuUgYFq1iwDqoX5cKSxjd7u5M",
  "key15": "5rCrtTD44DXgDfDPvFqr47dTvncrVUpVjoSjWiNgZ9UAX1xCbwUQzDxHzYcKjcRVdNqmk5NQzZSNL9SYdNviYN7n",
  "key16": "54fMqtacASpWFqwxyUmcPRzFgx8kN5KsK6FFv1xWiCAXVDNVvGuZ7NpNbPQAd7px4wqGHR5WLRzL32y5GWBq4K66",
  "key17": "2geb8jCoPDrQ6bYGpXVFuCeZpByxzNZtjDpqn5vNdVfTpkUGtUz1x5Zid4x2iDp5uYFRyKcjhhbDvWhhJK82J4GE",
  "key18": "3ceSMFexdnZ17egxEaHuHZB3ChPgabbqFvevviEq67FrSsNzofr94zi2Rvj7WXYyWnyKHXYrbqBqyEraEPwZwdot",
  "key19": "kccRaJUpZn66qQuLf4wu2Gxq7pfns7apcopZ1b4LNSdzCSQPNiJDRPVWvXtZkg5sdS54ixqF5AqrQ7sNio7uVJr",
  "key20": "58zNep47KDfL3rtyG87fhShA9tLmTrQWzYPqnPY5rfVj4p4L6vr8Fft6fuJH27N5PyiQ1W1ixbJ6Gqt1dGvZZgjg",
  "key21": "5bAfQnxDNuLrNGHe6GwPxmazZ6KKuZxBS8CMJSjRn4tGTsH4ZA8tGgT8oore8V8Ksk56hwdfy6i1KX2pfHRX9re8",
  "key22": "5iaoEhDM1h274ucFFy16VM3QBTY5uKZSuGL6YghdwzmvpGBkP9tjrgSRpJoBVhLPQU8Vgw1mv9SbF7MRJ9GJP5A4",
  "key23": "bd29D9bQhBtN29AYfq78gVZrRyEtp59KW8Dn7Mgx8qhd78TeHXyxixZ5L4Bp3KmkRHXMvmeeAMkuU7zo2RP5iLf",
  "key24": "2Vi7WobMHSBkzUS5Htwx2az3oRTcEFp2wS5sHVLjQoHnAJzyHjaMhFq413oxtuZ7SgjLMEd1uMMNvKPVQCtVQnum",
  "key25": "5cGbMAsHtbgripZyZjjhHqW1hi9kKLtdvMCLAddqHuTi3BBhJHFLq87TmrS4hE1QBa6FPaxvcQKzjpBFAwfuw3oF",
  "key26": "2Qngzx1Lc26H6Y1sP25gGXEcHtLxNmUkQQAKUUaJuYnwd2Ye6eDGTNF8yXbGdRML8rjB7G3tQBXG3gEf6jwmeisr",
  "key27": "LWGUC9f3wNqNJ1UDa39XmwE7XraKeYqLDBo4n8qufytbA1E8fcaSuJJHRVMvn9yPXTWFtTNPgQPKjjL9ubEF6kU",
  "key28": "4GAY9brikuX8t6WT6nvtsQJmvDasL6UB9z6yPNixTtQoV2X4a9KKFsaepDdnFbk4cZbDsBuqsZbfpuhhRgxGhq2t",
  "key29": "5Z3Qvr18tnCcy81XBtbtgnaThEq7p5DLpXa6SQkAFEkXvQo4BXYxbhz5GeoFXfWrtFDXbZCDzwqkxwCGtDhAbtQ5",
  "key30": "4y7iN6pwGedGmponiNrcgHtAaj1QD5zHRFg21UJWdeS24xvw6fcE8sFUeDWQGvhxxfhjP2v5acSHrhEWP27SC1X3",
  "key31": "3R6M2tVHTujcBvPkjn5Le8v15zYBGSFRzLf9aF3mcfSwRj4rCxE6NS9ZNq3iUo92jiEQ69mxbAXhgQYBuY976b6o",
  "key32": "4scT8QM6Kz6XZ8z2sMshaA1URmVuZ2SLkdx8sfXxvGVmz9xL6xW71reeV8qKwGiZyLqm9HgkDTuoRdZ7ZZgkTWpk",
  "key33": "3QTBVNiNemUEgQ3BiWvVjKsdqGFNzTjY1oci62SKjjy2un7AKw47BvLihT7XpMvD97yiTrDj7vgP3qj8BQjZNgT3",
  "key34": "33A41z15yAKcSqJ2oPkdyZD3PbynRGwcZQwfdqaYbFzfybbmgCnZc5Ny59HWnBrG3PNAYk4kF5gfG9gnVqrY1uiQ",
  "key35": "2vYhdTWXhkgoiDyA66fiE1xHVhrp34cSV2B4b1SMJnVKiaUfjyMiFzSB4wA5og3LzEqLroPEMUrdvSDE1kCJHfJB",
  "key36": "4jzHR19HF8sGEJ92ULHbhYUHtojuDSGYAFvVSdMWoKxgbKHwXgKBWTwgM1whR1CwE549wFU8Gz1m6UEHM1AHNtm1",
  "key37": "5qDznpaP2FhCqjAyS6GTx39XG4hhq5tuucrtBMGPhFbcNnXz18U6tnsG8mVYWqCyLLJCwHQtt9VEYoAgUPrs8bqh",
  "key38": "5MzMXKybhyEvEeUzuJKRGY6j76xFbXpBb6ya9yuVAh7JnZPMnMg13uS3YKJ7xu6PEhjctVqu8rMrSKXR51zinyTj",
  "key39": "66n2Vgv47Ev5VpttvYTaejUHoCFCswaTgL5mbZue67dxqJzPsfiEPWzYdGPavYn9X1i9uDzcGaNisMobpYV7ht66",
  "key40": "HG4owqzczJrjwf6L1mXKKMKPtDaXi3wBoQG2QnQnW1cHSMVRS5VG42SxZ1vVMsdk84uH1UvLVJhvmzKJUvMYMY3"
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
