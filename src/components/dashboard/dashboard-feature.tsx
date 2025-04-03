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
    "EE4r7nGRpDd3b427tEt6rQov1DL2LEHpHyXkgf4sNYtRQUTxcERyS9CGej4Q19edpwR8i6N7jWSf5EVYYq4Pvh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s2Re5YndRX1dyZ1szpjDziQxXivVvfyi3Pkeyb4AzZRZrTxCb9MZvqy8r4efGsBv8X89yK5ZSNPtzKEYGpAEDuD",
  "key1": "3G1CNRApFcottn4eVfaWLiP8F1m4AVp6ZCDa75a18oJmqkDS4Ais5VUyDtRiRjkvevadhaDDQhKr7txucKA1BtF4",
  "key2": "5xXcDJFaVnm7GmVRuU91p7Fv8pMH3RapcpoPt7xM82sDoQs4G92qBbZM8sRsUF7jZU7LjFFJKt7QyWJTgPsNarEf",
  "key3": "5s9Qbb9U3mJdCrgkMuPUJdSwdWDW3gGoh5WdpAWfDFndN9WUNarmWL1ncfkF2SvkbeiSh4wSpmEQyaAond1F5srD",
  "key4": "66SqQtjiiUKPGHgHoTdfCDJfP5t8fU6WJkb2ruj6VLKNaEGtPFid6LmSc8gWPNyWqvYKcE6LMCNPpRtgFH4tzxaD",
  "key5": "4hbZiD2LxMkC4ubGvWxah3yg3DwfUVAgQNqarKXZ8eLc7nrSQCEruiE2fTu2TnRL13H3kB1k3Y7ToEdMpo1zzdy7",
  "key6": "5j3GKEP8MAqNY878q8SghS7ByUwSR7Yp6kwzsXg28HrEZR9vUhXHbX5p5qgtsug4aASkutXZCaqzjvPu75Zr7wvw",
  "key7": "5wgZAo8Ju5j4YykPjYqGktHgbdkWgcomWkFc62Ut2eubbRHMgzRb2ttMnA5Drim1UWr41fb3QceG5fyTjCoFGxtG",
  "key8": "3qSnuDiieWra4TTC2pKgpkRwuBUk3E41CJ6TpASqU7o9Pn13d1dswhxD6PQbsKvGRKRaHHf2FfZPfAkPQ7HFwL4f",
  "key9": "Q4YVJMQFCE12rVqAgGEayt5ih9qzqnQRXbBJhR1YsV42A3H6M1ZfmvJv3ejQvM8yopZZDhMuqZ8TVTVr8vgKFxp",
  "key10": "5mx2LVpxTcPM3pYQxRKL2ph9oU2DSpKpH1FmZhA7PK5z5FrcxUmDrPc7UmrLnidrMj4hqJ3aX6E78FscTNTaurTf",
  "key11": "48n9H1zn68dFqmjVvNkQ8S6BPMQmWh6iYHDuLVBzAhmsx8sE4MA3TSTaXuTV69UMfaR9YHwNLCLh2nSWFVXrYFyU",
  "key12": "2rSuun1WC6TYDCNSjzi9DVKYpckXWarzjKB7JYxs3gc25hhG43WXRk6UXFdcbxw3BiidRiB38gLYvib2NvgFZqPj",
  "key13": "2krd1dUYhHnceLFwJF2tu4mPxhytYRB5rLY5YV28BDmBQCNByPrAayMF86M9DGMea2bi1cQ7dUdBppRLvvdMna5u",
  "key14": "2mXegjUM3ZyqBtwWmUAzbFsH8NQLJNsC3L8NduCf686BiH6PzxupXorgxQD6LyZfwa4qqRi8CAqN5Z1xwcLhuPHC",
  "key15": "uWBYoWptPX8zTQNCZkaY4BfkrKuu8P1RDrLz3TvwvUQZANSqqHS8VbwbUx64Bt2cT1mDTUY8g9Bow26fjByTJT4",
  "key16": "dAquMbfKiFtbyoNKu3iLcW3GWqFJpdtc8JEZnMQ6sffa3D7W5PYVd8hBN24HuyJPM6Meftbk9tjJdKSxt1An6KS",
  "key17": "dYRDfRckDJHRuEgfukw4LULqp9oELcYptzApMJGWerApk6t8ZASUuxeCCPPFX4WEAd3gqfAiz7FMLgt79aTfoC4",
  "key18": "zioiQ43roLcbVyVKq1VgoKuG7GA6FYZwwSSmBCpKtvNQpEFpDP3FeRUHHFPy3YvMAnURA9NsA6QXYyUotZYEgNU",
  "key19": "5L81HDS6rXKKwRW8pw29uGn3f1URrDxFep2EaRyYM22j1RWjrPSmRjSEcSJkjGyTetQW3LhWYMEJBPsoqF2n1i8y",
  "key20": "5kMUxxS6Rt4pioVULxCcCAZu55ubFnnf8CJ99bEw3eYQdZyp7tY7jz4TZhc2eeehTWtMhqDwJRGkwJuKLCCa3U6c",
  "key21": "adApqY15SAFogUyst7JZX6Hz72BAAMFq8fj3Puj6PCuMi8sQs1fAmAGSp5B8aE5vCCiKTKPmq1k9KkXE6Dzfw3T",
  "key22": "5pCDHS56MTsnfkrApAGM9gVbsAPSjQ8Jc2C9sj1GeDWQ5Qy9KeBXPVRGDvqQS2A5WhkK1oGVyjgNyTzEBpy2MiNd",
  "key23": "CCG37D3ndwttJaH2yUWNbEbwdvEvJTHMTY1UFtzBETc7YVAu5eMSetJMRUv3Vn1Ew7RnK8jqBxv4vb7rZZW7FhH",
  "key24": "427wXS5o1KoBnM9uKWpo17Y3445RG2atvq3Ke317epmjaH5g2ZqkkHVvm7oTh3HZuWbz6K3bxFnAki4fjUJuWxL6",
  "key25": "2n4H3S2p8x7AgDC95eXk8JFQZWRbg8ydAM6yudRxBHjydN2k6oyAuMj4XJvdRsx7kKycUhjuvAvG2YTfbRFZSZYC",
  "key26": "2cu81wnxUnP1T7uMUBrwgy6VvSuEFbpYgG48EV5NxNuE8jbvVwrxvJZ9wqwYueg2rKtimBSChKDzzQYsfrio19Ge",
  "key27": "3aNdnBwP4UEDHkbCiA7E72scG41MjtcZGSVWUDGr4dbLLz3jWE5RjJzZM1KWSwYXpSBcpku4ki9B5EanTgqoq15h",
  "key28": "4Wqh4SFvRtwYyafP2ubrQbS8DWq9sko8fspPtwj6NNwbLXPvqNa23DafgYv9bgk9JsFPag7rTneWuxU5AmC4dZWL",
  "key29": "3z1YHGVt67WWLk9xu2rKhxhZWJCQ7ZvGLyEThQY8cC9yPL5v7DGYTsgr5rkqDuNZWeXe5KD34ewnE4gspruLzERR",
  "key30": "4viTgP6KYktaCTpFtoX7HXkdBW9E2n5cCGJGJidXSkZ8gVGZxGcCUa1iRoQmzU3ehmqHXD1Bm6UvGcJ4L5G31V5H",
  "key31": "3KLAqHYy2b8vqFpD6xubTuDCqkRj1S2FJ6E9qNWvbceE54d54jF4vRans6AHLhJmfudtPGUpirDxsJkChTPipe7j",
  "key32": "242GdCDyg7tYxavfrdbe9gJKRahh3swUfLaAizg4ce7vdyRfsMtcrZpnSqmxCSes3MqZEsyfUMH8xtGYGZ91JvBH",
  "key33": "2ACs34UtbRyG7h6RLcUTt6b5R44dptsfWDoi6JusFb7Jp1W4ufRKPQwZaPdgrnyZcFC6F6hqaJSqSdNSJ7GN3BD9",
  "key34": "2aSd34b4RvtTVzPUkDNutC1xQffXtSS3NS5BGR7DFQMc2n7z21jRzbyBRoDT8329xNHB1kdJaPxNiQtHB7Bq5h3y",
  "key35": "23AgZ7MKAC2tbKoGL9Yd7uZFiQVn9vU5kS4orEYLUyxx7SD8w7aCPCjPLxr6hp5iF8n9TsvL3i6wLy2N7F3vRAGe",
  "key36": "3BwAqpjjRP7eX3xFMqSwTbtZzzPXSYfoWthCpU3cvyYPaqVdDPWNWK4X8mRU5KwhktA3R1gdcozNvVhqL7PwvJyw",
  "key37": "2jJ4w3ZP8McAGnHamzaDVRy3jnV3FY5imnL4T9cf1hL8gaGHEz3jsXfgwiydGdVNZqyvomrM7hy6GTbfxqPYsEoe"
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
