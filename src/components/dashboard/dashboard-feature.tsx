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
    "qMtCJ7wWowDdKEgwdruViTkoUp4beHGUfuYTEKDwqJvk1syi8Dg4gYSWwJ7Sp75S9Am87bxL9zGuRbi2arzSfga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UyA9ksqijhZqrY7JdrKYe1jYaV9eQgBAskVntXWLo71c71w8is4CpFsWcv5zNgN4FR1tU2FqongyxR4WPkDw3pt",
  "key1": "66HYbosXpKJ21bsMvaDjfHNj8vcr8L8qPDzHY7MoJjwdvuvDSi5scezJD2ptB7KSRB876H9bmYaWQmY1j6Tq3p49",
  "key2": "GBYbqr3TboMT6sMHNkXWozz4LTt4SLnebngAHTPXMSDXc58m6vtccmraWhQyFZVroUJ33YhRJ6PRkg3vJB8RqYP",
  "key3": "2jSToNhWenrx5t47WovWNU3qXRiGvX7YMGoFxtT8qCMmC7VSWihMuZhbWnfj2TwCAWEwQpteWrrTGjqgnBeKKpFN",
  "key4": "3qi3cbQDFWFFtsGZWKwySNLWi1NjXjsx6bVvb5E93jYfuRMWzNQWnzzKrmr16c4rR946eS3LZVyawdt1hTszJ8SW",
  "key5": "4MKex8rHFmmFPFjwrcfviDwXbiRgWY84h39cmuzeJ5YLqJaebgnAcY8Eu7jMYrjaGLiS1MBMVb4JTdxzi1zGb4Pa",
  "key6": "4K5i5tHqXeE4oPevBWTpNzSHBKqSAe4CbPZ7fgNe2UqpVGTRsqpo9S5zxbEmc7BQhf6kTPwN2sauiM8AimnGd9Zw",
  "key7": "M7mv3ugQJ58eWsWw54LrtDnekumuFo1Q2iAA3NGcHVpHqZ6gVep2f2JoAGsGjR1tU9zLZc65bhMi934r589NfXj",
  "key8": "5Cjc2FKL2mWeNoP7d3HXgqaNfpSUh1dsFaWwbEyEkB9MXGqWwumyUr6WxB5LRV8CkTNzcu4bVea385SMWouyP7g6",
  "key9": "2era2zSfuXiGSC2CqvhZoC7AdgAgo8ZTVd3uUVdWTPj3EfUZTFWu5PKtsfSsLZYbUMjz9f7NA6A4dhBCc7bM9iFG",
  "key10": "4JBqR2Wejd62rW2BLa4JK7DYByDc2SQEMzqBVGwT2dTMGDRxiQ3jeN14ZaFVNodMkZgnqW9ADu8pFYzF3GNPUoVF",
  "key11": "p5sfFYhvdM1utaaU8xTRZmSh4DJj9ewi3aM7PtxbMNngYQ4RFoRYW31CzW9gLMRGB5VJ4RPDRWJs7zh62c52t7h",
  "key12": "5st3s1muf4dmWhb3X2oBY8t78NNGdtBVttGV1PRNFz4dYKdifXvcSE97ZnPebb8nUNSGEdwbpKatxsxCzd8bn6yp",
  "key13": "235auPSJexqeUME9T9XnUkCqrwvdgqr3pzGPUX4f8FUR66rAEddHEiLDSBWQBPd3WKdVP45PduiSDQpTZqTerdmy",
  "key14": "3Snyq6E4ifg6pB6dXAgkXLQ3YmLi76NZ73VDZshGaioVfAYao6yu2MCyhn2kK91Ngh4y5kD1JFPScEHs5M7hsKn6",
  "key15": "21Uh4MKEEaYREwfDMuU8PDV2YHTZq7N4nvyTvfb76bBSvEZfVRSgq8DZzmSWwg9pdBqSz5qVp1a2i479jHnRXAbW",
  "key16": "5D12kFznKS1v9AhGbf9MpspfhGBgineART7mAEX94ijcAtuPsPsemzx4n3kXYXYestJQr4ZY5JPyC2ToLBNUfj56",
  "key17": "2V7KUxWtw6hCLW7aKBJEPr1qEr3txBUZgUW3B6JFcFyHK7WNhyJZjy59dbcECoEcTaviWitKwF13WV73141MNJwf",
  "key18": "4nv1ZKUGgVWefYMLZ7azqgceUrTdL96DDkbiqwwnYvUhNLL1gJQgnZRGuvxjATsKZrfCaAzk1b7QNBHEnWUYd9eZ",
  "key19": "1qoQpjCeMiEQsyuX8ZLhwQDQQyfMMyjrAxqQR4AovNrQLSg2DKLQT9YSFMQBt4fZvoWy5u5gxdnNFFjdBQstrU8",
  "key20": "n7CNvpbijj8xA3V1DEffyvW8Hyq8ELrhAPK1myHpSSX36utsmuJreb11JCT3fy3Wx2gVuAPaimYk4PPumDDqs6L",
  "key21": "2u41qn2Y6nKAvVNqUp481gg4V7SpKG3DhiXvANXBQcJ9jzyJf8mp1RHymPwTUeeX2jYXrv65tE3nE6Fuy6R6kHVn",
  "key22": "neLkWimxqccGQYGZ9ZYkRGCT8fJtZMbwa7fmSva9xJXoMGHCdwjPUMkLgpZkuZzgMukkH3kXpCkiMCybpioAgs5",
  "key23": "2U1w6RGo1BrEYAeNHJSVc4i7tBuPXTiMbaTXE62WU5QPsn5QptWrSpAwiLpKxdshW2UyJ2NjWkpiSAbVv5P46TRC",
  "key24": "2mumYEa9h8GXZmqe2xzC66uY51rZitPy4P534o1bAJMnkFL5KWEumGKfUw59YTrErwZMPzsmFw5eENiyfxYTDFte",
  "key25": "39ixtwtX1mpic8mxRoJUj1LrWbLTiCgYFeprR8ZSYrAdMCuhm3YMrjbkntjyQkmseik7S22onowC2aqmCdzdMVbY",
  "key26": "bgausC6pNV9Dj5pKakSNaxotTw7ZP56aAvwJK6d1aMAEssjmTN3HJJtgkbxj73DdebEDngkZAHWK1B83MfmGZrj",
  "key27": "2vQ2ysndUmk2qjfYxzomzLKFRcim7zqeY1nhBu8iTrYXkzPHdGJYyeQrbUEKpkqy8zwpeGfiKbT6XBeEAw88W9oF",
  "key28": "2SffYCky5fwVeDNXVhHBbXST9D8EpfjvCrtX8ohHgrgdBRLiVHEddrgTaW9qvzJjTopjwsnZAg5yYrCZJbBNxjrp",
  "key29": "bjwbjAdV4gLPgycKbXaTzzKzUfmsJx5zXwwMjBiaq4iAunfRUtxcBWnsJ5CntsAxdg8PX4RxcFNCB7PtRALqzTZ",
  "key30": "4ycNRou2jAaBiBfuLZjxFyHmQTJtQ75kWE5M4ZD2si9u6nzW3sj5vwtQMAd7BAvkKcWQpUb26Zah4ib2BXWnyFEH",
  "key31": "3ua4FRyhQjDsWvZcvCYA11tFAJ84Sz4dXxD98hjaeR4StbciDG5kpvGS8CLZPWBTLrJRwxDGCQExMUBAZdzAVLMQ",
  "key32": "52g4E6rWTeFf9wNsPoUc9LtpnUE32WaXgeY1EXyYSZCm6saf8xT7a2Mgf5HL9Lxbgkbdyznf8BPbpEEXtXr6WDni",
  "key33": "5RzWx1DheRD48qBSzRUzL2iHwaYxCnAThTYnioqLFVu3AFaMyGHF4YX6oF84ZWXPHWNCPYS7gTukuJ2yRUJpkUf8",
  "key34": "3v9U9LjZUBxzbu6NR6LGLkauq26Tv71zjk5sMCVwTWT5rM3dKTsMkk3cqL6Khuu67bYZ5WB4VnnaXKbMLEpm8L5n",
  "key35": "2WwWobLEs2KHcSjoP2VrEfDfnB8BcJiEnVNHJFA6FyvUmJGcLNuGY3CYE9PusHApphBdGZBW4wwYcqAMgjJ739o3",
  "key36": "YKWmRBZBzpM1Yv5BSqbEnWZtckgA7B6296jYSk8XD9yy67n6Z5naezrSS3qR9SoRDT3YEYdKXg5TS9LFEQ5dZRv",
  "key37": "yq6Ak4Thskco8okZU7BsVraK7NJJZez6519C6wc5r2yAx9Bm5waa1bFQAm8kyooP6UvAfvc7fGW3JRMgbPG4BRE",
  "key38": "3EUwfZMM5fcWxnRvbZRyyHQicw5M17twmurdLRzhWo74VMH6XsvMsBq5fuLC9vjqRZ1sJF2rTKC2NCwLBxWDCxDB",
  "key39": "gTA7fYyGs2SZ5J6y8375En2Angfncvzgy7qJR2aBe8XRu5UCvF79mLvqBywiu2rUSK1jTqYDpSjva6587dUqMfz",
  "key40": "4vkNaUxKfGwJXM799E1csqShPx8XHNHw8eSfxkqxAwC8x2pn4vQmmF8XiCLvxQE34JwEGefx7WSKeqAi6fUfqB4M",
  "key41": "3T5Ja38jQPCtnxUpNvqEWSYY8duji3Ti9bCgKDmpHG5ioQ6DTYS5pwKBpQm6yKdLydJ4n6E9XPEAD4LGsbi8YPdm",
  "key42": "4NGNjzo278uJw63mJ97rsgGopuzPfqSuWNvHpaw9SpNVL1QjnDWmkhZGuP5yLqQ7DZrojSzjgNDZ2NABRPM4Jtqd",
  "key43": "2nugxFi8XJZ5CVhQPoqA4fZ2UzzmABK4Qx6YyTFU94ybrEZqmQfzqRsjrnYF31ftSYJVMV7wxGkq9qwYopMB183U",
  "key44": "5Nizfnao54TC9mbVoVadjc6cdJ6Nxsk3b8RkEdNCzD1C8HG23akqb9f91EQTK7ZQhMvrvPWALcNWa4aWzipJUxWC",
  "key45": "5NTdvJ52PHai2pEHyUxLi8LzjVSSTz7Dz4VjXCrBBkxhr5TuDyatEKoNuRD1D2C1N7AWiybtv6hpnX5sqWGwCxja"
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
