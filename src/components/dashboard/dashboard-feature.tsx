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
    "5a9NU2rYzXNc93WQyYxxSSpHvP6fmjGvymjsHPCpJ2rp56uB4nBwFZCPGVBdwHC5w5SSNfPq3HgG9EqfMWQoignF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8ZQtnJvFkmPBHi2jPKCus1YhUqRyUToJ1PP2EXaE4w8osx55JC3aQohYFpC9cc6gkvrYLUXRsWRJeoWHzRD4W7u",
  "key1": "4sUgRt1NF5ESb74uiTCTEVgTbYgHeu8hQU7UFDmocD2hfDkCNnbfSuwSq9a6aun2gvVD6psLYA9mc4iYf6bWrx86",
  "key2": "J8yVTVQvZizRTmVxrPBLifA37ZUAWqZ2VZ3buFKovZui4DboxozQTySr9KY7j55x5ctftRtzZTKp9hFKUvM5GEM",
  "key3": "4awbyb7TkxRSkzmuCYRphpodqj337gYafnD4rSj4hTHkrLvWXoyACe8KVYXN6F8c6ZJu9KXq4hVpLi2HvAuxuQZS",
  "key4": "2nXCv8tCjZ8hYYs6bxNHwD65Frug6MBvYRcAWDfwZk3AKCwJiajcrRnaYCmapjzFFbpwQqxLS1fatLZ55n4vuhhK",
  "key5": "2RixBraGc6kykyvHNYcMxqKy2xdKf4gvqEx5HYHUZF8nbWxNYxYwjuwP1TjB8mFrQRS7JLFx39fF43sNsB7EctaY",
  "key6": "33cpmqmh2Z6qBhGehhamUiQ4cuP43nDft7WLYfbzMB5WwmeeaaiesQScK8Nth9tFnrh5KZnpvJXDHcm54ntr5QZZ",
  "key7": "5egtNX1WRVXwQDCAq9LXaYsJH2x2pxJSfLGeYG2PTy5uP6QgV1pgZWSUhijrM3aCvoQ8Roy7YLJQYHvSCAzU9nY7",
  "key8": "4QA9JZ73iwWXTQan3puE7BdJswsjBS1tsUotcdZxzL1HnDpGi6yujLC2vWQSgGAAmWdAWWdcgH2xqP7dECftWob3",
  "key9": "29zrSoCntuRysnv1cD13ukw34V4wSQ6NnEAXs3WKZonmTdqnKcQM7jJzXWFjbLiWdRmzDjURkKhjc2QctWXBWj2S",
  "key10": "5XHfjLZRJmiLJaZyetGftXUpHCAaWtRsK22He4wTmExQFTdyC1jGUsgyYngDsmvf9NRw1bK6sybgDtT4iZGT1BQo",
  "key11": "4SdnwTiL6ANfFJ7zhTQ8r88KUneseRGXNymnmqRFjFYyWGuPj1naJFiwqcCeMd8CkEfD59hU9U2oHJAEVEMS5fyt",
  "key12": "3cbfrtNsztnfut76ahw9nR282D23ZwcYFNf3RDyERLSkHgKCPQghr5Xeni2eo5E3XaXEdBxKZboeC2HfRGrLLyy1",
  "key13": "5p61mhhF6YiCct99Yq6GFXqZiwf4B3UKebXWRnNbS2EMpuFrfBFsTZNQxXvqJQAgS7NBpwYRbYTRCNZ6iGvpWCfg",
  "key14": "2hxzxMhXEhnVTP4rVHHzsdFFccc8ajh2J61xjBt26PtfNNSsjZC4AV7PUD6eyXqiVQa5ivMv2qNaq9fXFrpFY7vT",
  "key15": "3smf4wbS3GJqrtMxHm1h2yNNijAo5pHKxaJDX5QAw3xCkSXLcVwbYiPEdgnNYRjSfDkdyFgnxf47kgSHrmivDE5v",
  "key16": "2Kvysh4VpvjuCURtNG51E1Xrdkqxfn4tkmMjKJ3NFUKErCpHagUtYiz3XzUeremuq33pZJLXz6o8XZ2UyXAQWfw1",
  "key17": "3cLdCogDsswtmmCqxKPxJnC9Mjonj2sxYSp9n1ez8VADdQxbCRLKZ4VJSccMGJrpgQzTCrPrgafnTPyZhSyVansB",
  "key18": "5m9CgQobbNcfecP1LR7pS87s5zPQqxqVid6kME85Md5dWwJexHRVz6X7rqLjnWxpwQw9AMqAf7AFKUVa2ABfKvA5",
  "key19": "5jzAU8T8iuMzw2tnMeoQ1Ja6vXyJrcWE2FcaupUjbwLCxmeowoyR87YobwdZEj2u5wCAhcFXjsJgYzRKDXKHfZs3",
  "key20": "5BoYEtqVdJsY5AEUMAXTXihfNaeReEr5VntTsLxCa35KUyCeoyTbQdjr3RXjNiuNiiasAsmsRPTiDt6Hjy8mJUv3",
  "key21": "5VDxAXz1rG6W3cHzJNE164DZzCuzMWdFFM5zREke4q5JWXcGBLLxoT839KBQVnhqFsvsfBgqryXV2Wo7r1rmW4xF",
  "key22": "gu7HEbWEsBnn5RkEMTCGj4zFTa4Rwr8mVk4X4jPVWvE498nGmW2PvJ5sSPJNbnMjr3V1cGYHehFgKmY16ocaCvL",
  "key23": "4rT6DxBkXMkaiPEMDj9pZv3qrGWXe1yAUqYsYNTvkaWRtXiS6gDNTWkg7Q5kFvRepkxLkbYi4EE6h6aFbjkjB7FA",
  "key24": "aVgtzjFFaGKF4WSigFuMTcu1TnWHFtokZdCWKgXcKD36T5ZKYirRfKsFjg3MUCoCKRKDPT4d5AMoxRk1XZSFqqR",
  "key25": "4FU9GqE4wGEZzcJzfpQJS6NxpLAKu6BgR8iShaKbv9Mypu5F8MhMgdXeQPhuuFduL6zADCgHM5ue1nR85PeLnu5f",
  "key26": "5Xn4vEbC6S6tHiW7qw6gQHz5NZEW82QdvnybbU5ArA9LfwPYz4fMzCjgPGazyH7XyFtWTadRM4LgsxzEvdQ1B69N",
  "key27": "4wW5LEvBhipxHM4SfMr9muxzQSLJ892Ggu7sHigWeHUaaDRk38NnXSVevDgExE72tY3vbHxXWuSqqc99cMVnXwvd",
  "key28": "2nM2YtQXoWfZhf5kSZQRW6sebUA9p7dWayW3Xd9FBejsarmbJcYWrFQssYSfKEjK6G2P3u52T1KXXsrcPktJsgw2",
  "key29": "aLTsrynHMHjy4jG8uvGcmdrgtxyG43FP4WTccgz61pd8ufGBhH3Vm4ZKBBjDmF579NVia85bGPLu1TA42waJGFX",
  "key30": "8TX44WhMuJ1XJPf3f2ooG3ooyecWy4owmWJvRQubxz1rFEfZCMTKfgYWF9VUtT4GTdFfmqFweG6fAyzUHWiphCu",
  "key31": "5ny3anUFs3E6ELXYbAw9F8J2xHkjqVLsr8idpyag6eHbHSFfWMpxF6zWwJE62EMtBMSjwon27ixuBPpdbfwq1GGj",
  "key32": "4MRbgdLgUwLQHaEHJhkBS6SEGzqNW3i4inPQSjcu7YNgVcTfTpm8rBLaQziooSSfvLjjRzBg6mdD9RKVcbnqED1H",
  "key33": "bAjxjkYTYiaJvmUjYHfD5ummgGm9HP5qYQ66DboyPj4c5uz6tPKPE3huAESamNM3mzK5YnifmTwjTpqxiktGcje",
  "key34": "5QCePvmBHQ16KRRcGbZ3ptBoeq8Xv9DHQUKNMQmMoYVHCeJ6uSRSDC7M9Gsk27TcuuNFdKU6akyYSwFKnaeWQska",
  "key35": "LuiZCVzdzmRpCdHt8CwTJLE5HPKPJrK6oSNPbp2v6fbzBmGMwnPePx4xn4Fp7FJbcc5oqf1qhM1HDgEemtFbFGQ",
  "key36": "qTQtwhM4apQ5Cd1DfNpM1YSqnxcFnzmptsQZFZ4R7Z5MhqDx1UhvK9p8yKrS1wCmgm4wN3uau9hWEMs95psRJeB",
  "key37": "5R8hkDXNodBaiTiDjmYcCiknbDW3SpB99b6UrEHEHNVeqbmrUPFik6VWViBG6ScnAKqxmzsH4zuww6QfgnPg4JoE",
  "key38": "4mpXsUniAdNkTCdMr9m6boXENiqF4cEUdCWPAK33QDgAyet1Uzq94iNUHc4VLjuYWvgjGVB8U6BFPSRvAAefAJzc",
  "key39": "4RfnZo1ZYr5cXKeYZCii8xfLNHt2M5sLKDvvZnVWEyhnsaRQJ6TZR4VgPxHmxfR3xuJvPvKCk1Wcoz7XrEHHXCDu",
  "key40": "2X24kzKYqZFbXxd8xt97YUnitYEXMroK8a1xco1brmG84QAoEnBKYishGE36gwbnfF7StPiRAZew4xS3KyDrqmK1",
  "key41": "2W8xowoWQV9L7vUxgX1JEBQnW6ahXvyRPMiB6EpFgLhEBbaCnkatXjcdzLupAj71DUWqxXwvZtVj1JAuKzWoAQg2",
  "key42": "2f3intm2aFrqpL2HspdLb786c1xVoC5emFQPyWV3E5UKtqS5JGYanDv9mLG3JswBtbhX7mveBCpQsYREhEAaEbfE",
  "key43": "5htuCevPjKWmvGo74d8SuBsLSmDbkYaLmKTaR2hh6eXxRCup958XGdvkHdwde1P8gh5k25asaf5jn5iYANHtJwh",
  "key44": "2QG5wyRceXm1qKBr8knJUUJwZqpjHD2DRQzMCxLU3regKGuCx5fVEe5eFMPJ7h6DqstbdLwm1dTFhi4mkXrhKQoX",
  "key45": "5eYcY64nLamSLF4EJxxL1Ejo7MV54F96EyG45v4bgHKx657RG1z7AfZ3rCXxcE5QW2rehX2RAcWfZXtAZBq2hDo9"
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
