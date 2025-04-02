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
    "4hijG4w6JY9EL4KhuEdsNxE849XBgdTgETF1g6DHvJ2KEiYp58YXMFNhRz4PHednZEZZ77k7sok4nbTW1n9tqGX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XtRmd6NfutXboudCPBZGfc64U6veXHmtC2tmuaugc2ajnXLVMzXsqtAUuw5enc8nzEmjtPeZn7ZfowZVg4uSZUr",
  "key1": "4wJzAsgvnLk1wwec8EYZ7UTDSEByb6SRewEa6wvNB7wXXdvNMviocj8n37i1PPK986hiZTPK2Cqqo37nkZhf7dPW",
  "key2": "3F6iQvN4ZWW7tT8tAMyrFMYAhFfJ4EXQ8oW2cWXpDvfKSYwMPfYMigBmSoAhJoAMEBXgRdzvRF8K7NtKsNHCWG4Z",
  "key3": "3NKYSN3Py75E4uSbAaM3nn7tSaGDjW2f7LTgSnP5K3MAcU2ycp4dyfMyUcqChwYQcVSD3fkRB5wjELhik7JE653K",
  "key4": "3KjBrFTtE2mc9wQPwp5det9wEdmZL2DrxD9ouTkduFpRQ2XafFY67ZCiBzMjika4oewJNwKbUCid5sSn1XjK3qew",
  "key5": "2CgEGTtbdGPTns92wmhLvoGgp7HqvZxQL4uV5a3SP9qP2Xz7b1b6sFhw2cZ5jEo4tVQbjk5VXTbYfpsHw1Vhc5P3",
  "key6": "86bTzUY58yiXCg7g69GbGouHZUhp4p1WRZZtUpuw8fbtv6qRJ6spbtrcmT6apTKanCS7p2zkfAd4xRfgogFDUBN",
  "key7": "5jn82i8BHpYRuQFRRVYuwBiKXTwbQ5gxXAtGTPWr6va6Ymuy7SXGcyR2ujehN99btMNHsS2HPdjtrce1Yx7P8vRf",
  "key8": "2yTyqvmdEJUvt8GYsfQ7WSLbtRmrWVcMcAhzmzpF9Evteq6y1hAWjkGT1WjtBBRKP1yGi1wqUXykf4XzXEbMtseQ",
  "key9": "46Lb4Laymx72H12Fq79ViHwdtc1x1VCuwTqMpTtGuKSdFonJ5amQMUW1t5bnVCR49aykz8Ny6u1z1wPqk6MdBP9F",
  "key10": "3hR1T1jUVWqbRCGMxEavEWVmQ7metvL6EmtXAC8reBGU1XAaz54GUFQ36zjodUBd8kpxajTeERwNmDh1q1AhZcBR",
  "key11": "28JFoKnzjWs6YxtFzPq5eJXXAcMwEYZ7St4wfCxDHkGxn8cAhoxsR6cNMsC9Hq5SzHSPBR924RWSfSfhT94skYRR",
  "key12": "2KKnWkS2JiFAPP2waRm1Dw3PZRw3LQ9B3UVvPJTLrNaywEkqL1V23FY3kHdscEeR9Lqc8mufqkQksZ7BAwszD3S8",
  "key13": "22xMW9mfweMtyxFQKLD3sw5PE5ELkDMorXQYhUrPMaarnQkZtusx4Q3TCSfnHgbKUU2jfiuuGihk2DGbwc1uQZbQ",
  "key14": "8jY4kiGUSBsrzxirgSZSyYytyCZiYwd7wdjCLUiKyy3PoMXwo6YQrfSBUqH2SmZPj4jZ4AxDUfqH8xcFHyKvBnV",
  "key15": "32KSRgqv4hupq6waEPWjk766t5pYcsQKPArCCnNYRYtsGePpbUJHLpNsRPMu5gb6GG4LT6AUSR9djcRK31q3FAFo",
  "key16": "4hejYJ6mfePyZ2rhMvUDWusA1LB94HaPD9jpsg5SbcH5GCQP4hPpJLU1wHnHYe1C8FwWirAeABMPbCKQ5ehL4sW6",
  "key17": "2zKpaCPoCvmFnfxmk5fDGUZZXHzGUdXs7jbaAu9gWddRYQhCvHdvJD2FqkGYjvpZ4ut31ZcHUSaBzJ8bwDwR2eRV",
  "key18": "4oFjx5zHHmyQEEMtXtmfuPdqvHwgrYx8nr9T3DhgYLys1mRETT5fzAUYxCNW4TZTLtAKSsaaYpwrtfRYEy3tkokQ",
  "key19": "46vHVhrpH42uvX3dkDQEn5V4wEYM3yMXxrHSUda5TzQdeYzvoDHc6oS5knRQ1dRjhEwMBdEmgQSiK7o61t44EX1u",
  "key20": "3FhpweCgSEAGoMKeKCvBhwotGzqaArGGPqwuqXv4rffuSxvnCQgmN7eFwehKULXXnnquwbZJJiQU2guxZ3abbgVL",
  "key21": "Z6Dm3vhpHuy3XkieDFhpX9CHxNfBwqfWErT3XZRrbySLbykPV7p1DjDDWHZM3jrjDCev8KDtGhPBtD4fx4ti6du",
  "key22": "ZawpQ6sPx3GMabSAgMqartji8F1XmGdf4RuB7U9a12jg9f5FvUriXSqjEGbAG2PmCBzZHCwZwHPHScyRVBcD9u9",
  "key23": "4pG8r2LXQzKhcJY3CXqFRaj2pkKVCEWuu31WdyggGZDrsxiifSv8esghvmYgT9s4oM7jXi9nAbP3VtxdAV8eWY6m",
  "key24": "4yCJwJeSGdAUzShMUDEnixq8oLZ5hiqYbQ8EhoJ4sPSvdeZCetocYkvuQaadqcLyNSAoTXqFxbTBVmxrc23euTAr",
  "key25": "5Ps41SR92BtcgVBN88cXhiEudeiLaVQPS9YyLBs12Zn8BvoDJSxboYCPUU7PR92d28C1UrZmrLcDptjYUdzsFCkU",
  "key26": "4w4t1y5DkTSSwdN6xbXZU3hTiFWUQy6hGWY4QLni8S8ejJdEurMwAvPTFhKcZdSKx67XXEZEFDmLQzmS4Roa2asG",
  "key27": "5fiw9FzgZ6edhVkNTk2rB4RqoAHxgAowSXgD9PuzmykMAW38gy66Gj5uB1vi3NveNhCDUEjS9XeUhC9trMDAnTNb",
  "key28": "2RHK311qgzpBeSkk2URZy8ABHVptWcEWM2PdA9wpiVpNAC16GWGqztDV8FhbupVMBXt73hLho32KQcE6DViAm9hQ",
  "key29": "3jj8UBy5fayzKW4n6DeQb3NEjYHvUgntiZD2HTqLbcEAJRWDB4Z2VxN7F8tgv7rBvgHRpU2CYGVgALGgwUN2hdrs",
  "key30": "2pPFhi7rYkvwJAMc86Sb1TdbtG1Gf3FPh7hcCV9KKJ5hWjGuiGrqimF67fggzJvwCZLr7NYt2PcEFn9Zo9LKmFDU",
  "key31": "3YNGHR8pYGbLhMno6HNMBFZRBeojBFxFeHngJT1DxQJubkVRZ3zUFXukktzpvovifuC81VmnMFKTFoqbQKxfBMQh",
  "key32": "3LD1y8cRKWgCGCBCGuCAzPBHLYK83JyJNbfoGgnuJzGrDATcqRxxDzrx8YyuAc1SyFuyB5HFgDpjYYiMPyptEQeB",
  "key33": "5Ey6bw29zz6vsgTdphayKsF2nUjfvMvMZxSrykRfqakPxEin88AXVttqQW3jsfpqpToC1k3eRT6QErqbbpemo76N",
  "key34": "363SYfTusQaBy2TfQgrKnJPuhSw6NBtJ9bZkxykwGDBEXMyWJmzHYAr4vFa4gy9DXW4WkqDDvgTsoDod63HoABKx",
  "key35": "5CKf8oqGQhm9uU4eNETiwNRctujbi2eQ6k6amrnSSYvNA7ijYoprYg6kueoZcRpyjCndvqbkv9kr7L8n9HTo5Ger",
  "key36": "zyDVFE1QfX922MTq35pJRsWpG1HdudYC3i4HcoyGTRM1zXcRfnjYo8MGZeWWsi9j6qkHXPFfZHHva7wXvQt7CH5",
  "key37": "4Cc8DcwbCgbMmYxwr2qL5F2wmbqEf3gxxWcw1D7n81hkErWBoaUBBwdhVqneKfBUkRpCLydbY9XvxTAdkWYJyYP2",
  "key38": "3ZiNLD7vdJpGKBL5wrV5xLxEEGcRAvgVdX3hVNGxRYjC6EzN7NDFFpE2DpMwQnGXcjZgqondk6K7E2WV1NQFML46",
  "key39": "4BeLwftabkivr1aomhavDrHGzdiYvoKVG5QczrYmR3M1J3n2q3wHyNwFVtXETyAAPzcVRQANjxMeSeVAVzuBD6R5",
  "key40": "3o3MPH1DsEcsHCuPGUVJTKbFTfxCTLRLoT7mnnVg5WEbiEvBNCUYwXEwt8NjtgSJzBKVUj4D6mPyT1o21Gm5F4av",
  "key41": "2BHJLwWoeBrYULjkyEnzeL2KTptVDAkvxQJNJEXdpzYmhFK5X2zsiz1f366SYuV2n33AoBGVRwT5TvpVzTcNaiD2",
  "key42": "4bPFg41vSfHbuLaQRVdrBZvkLnv6bWGgw2JbSocB5oxEFZNV3WUSyKRHrkoaA95JeVzW5h7aKrhuVDjc95TiFP1E",
  "key43": "4EfmSuxvb4JsLQTq7icQUBJfsqQ8bwoCinFmy7zVY7c4q2sKmYaHiaaoBigVPNUL9mEGdnSV7teRnJv9K5dmrw54",
  "key44": "5o4wJczmYuE2g1iXWz9unGcexJG9pFFrbf8YnmZP4jgmgtHD75cw5KMfHh977PnTKfvrEBFP73DWvvTKwkxCgxwg",
  "key45": "4TBiSngXb12tS7p54dtAmVBJuDLuc5WGKgQinhmdsS2d3ZyD5gikmGvmpk5zK5ZcNMfuRv2aHJh1AU6LPvFM55Qj",
  "key46": "2u17cxSbv7w7nFgpTuuApmFcHj4dzJy7c6LMKbAbUBVbGSvQ3H4mesvMnSiCPtiZSD45CXuv7ZbTsGpoHVCmzRfo",
  "key47": "3zobhXzNrAZSb45dHd7kHUqSYJFkJ3p8za59k8eDoiYsHLpC2sPEM4Apq8xfdpMmoxvCyvwP71GwZYEZQPYZzgnN",
  "key48": "419rxoEvKxG77oPFqTEdEnTBjF4ZfebL6gh14UAbQkZDvh4FwvZ1YQ98RR8jGimgjQzHCAKhYxtRgmUneFvA7gCd",
  "key49": "3bqV4aLFLBCMmcaBCdEmhW9PSdYybCgnjMSnPm61cMd5VgS2ttvcFDSpHyWghUdBf2b2NBQvQJfnZqJHU1dfraaz"
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
