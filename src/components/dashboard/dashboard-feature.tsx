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
    "5XT35BBcP8DoNJHzwXCULjrrRjdq9MGwrefuQniBCKb7tYuiLmQyQb3b69fx2BYFB2XoKECrgyqh6hoWhfokEKcX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m2gTsbQBcLtWDGq5CnHZtEYtLVMuwJtTi1tVH9ajpNQXU2UnhibyhLbrtdTtAAG8pDMjWDnDoUPPa4DkMnNPTVG",
  "key1": "2mXfFM2GLZnZ3Syezp1hTGFgvYccUX9xQfs18b74qyyDJff4LqhrW8ZYmrE1Er5YQisxvk3X67vyrEwKPp9afp6K",
  "key2": "mUKLYdayFQ7DNZbQxD9gExfhb6HYykVjG6yVZKaz5dC79AHKWfy92dasW9zo2mKycidT9WwdjBsdMGxDxHAeK5L",
  "key3": "2MiAKaGMhJ5EY6HajdLYz9FBq6AyzBsbWBv8TeK8f7gSkGFRkZxboEpatP2HDGUgE9vjLncQxyQ4Az7GSKTGfDhg",
  "key4": "5grZp19YUN9yPLo8GqPmN1QmZTsfUUbW7nCAgA6g99TLyTtmuxnpP3L3SAoLzx8jDL1YaFSYPUFqs9KW1C4HTBuC",
  "key5": "55TxjuTL2DzTP5MJujSmZKBu3L1sajpVFKtmuwngHf4jJNCGmdfdYGqPn1SgcpTd49AESiyr4f3gJhG4RvpYC6BT",
  "key6": "2DtqueiL2cdaQjTbDhRsvPrhKJfkijfPXXLaaJKsxiwHFzurqTyaLGKF9ttEBw3iTHRRtBQMofwm5MqizuApWRV1",
  "key7": "51Ant9rNjyjETXcQTgxQZ8exbVgreWVKb9N3MGa1qcvGRLdow85khajufKHKVzNv6afjmtGxvF8oYpEvFSUtUaV6",
  "key8": "3LHB3Szdkuq44uk7fZEpBmDpTTPjqdhnfsDGaDKPrpCFpHJqVLLAwesQBPBf9eEpiQuPcZygFhGEyn5Sjq4dqvLs",
  "key9": "RDG6Hbr1MBNJfpx5KqMrane3Ta1VEC73VFnvDieYi4tEBAa8RjZC9HcacE44fxx5sN7FcjbhxQatCT661DfUDbV",
  "key10": "GHYe4ySuQkZGtE9VhccsRqL5CMFkCib5diXFhCe8eu8vWVyorVKnd1Z7uMfBnZZki4ptHh9sZzV7xsYKGBQWQ3k",
  "key11": "ij5xEcxjBR9odqFSff4nGop8aMq6UM5sAKeVRwH73x58hssnRMMPWgZp4rqRC4UqVdj7UC4aFXecyCShHqqehR2",
  "key12": "3RyXGsgcNobpQyZEdm4RhshKycNpnQpaPkibEk3tVqj5L4x7q8YoLyszyWDwR6ZnHFuK8bWDpfKHxs5Qg2whjZ1B",
  "key13": "4JXRFRtKRmo6gEmbgK1WWucVaNtJZ3mrVZfa673iga3cdfzu85i1rY9fb1bHCkXQXAqgQZRoQfwrehVauD4PsDLe",
  "key14": "3rr6u7BM4EHtkcgHWwPsGf9RdvesWvANr3L4SYBgf3ZEv9UpQ13vWwDcd34ZwpX7txyETuZ8dJAs4JsXELNtX7sE",
  "key15": "3WeKCXE65as57kK8TCtDx1BuZqsWesH1Mu8jQW2Lrs35qe2w7WXMPHiYkUGDM489wK14dqDcSEoyKyfdFReoGVFh",
  "key16": "2w1MZ87Ze8mx1Xr6r4N5PHJjWBhi83hnKTaXHzayjqPNpLefHBkMPyNcsRFyCmasJ942JKXWurSeQRHAVipyQtRP",
  "key17": "4LMvmLjKe1oQDLZueXVcYiKodXKrgJFSLFrdkNQYuEsQWqhBnFbFKDjsY2kkoW5rBxyKH8744qGSpvUVZ38rvzYE",
  "key18": "4vvFqe58gjnZ5WdN6UGShVMaa3bcgcxXfHNjRoiupo981E4h2WAFkPaKNwRBA8ipNmPkkGHMfmNJQzca4jE2eyhB",
  "key19": "5oxbrXPyBWj7MjcJgqmY4xPnWmjnB4GLK3A7X62jnhH1PmKpgJjXMZy5KUTe2AgbhNyNbUDiRfZP5WUuw1njJshM",
  "key20": "3Gh2aWaMSRpz7hhSk8N77Ukf9QW1NgPB7ahq8iwwmJfCzyzkdEV5M18V44GSaYcY9Lc8mUA4pmR9px6xBrAAj8YJ",
  "key21": "4Ny27NqUn7W6BgMmiAsxueei3conoDtS7jrk5H4JvMrPMyAoaqpsC12GnjHkcgMzt6NndKo9MDXNJC6dtSTXA2Xe",
  "key22": "8nPdytDNW65y8AUML8j1WjhJXunK1qfLmsLckGLooHweTawtsvdjHgXvtievbRQ2Ax9JKj5kK1PRbjbovTzmebR",
  "key23": "3YpruXD3B9WDKmeHr7ZPBiNGBzpbuca93rskKxYQKBvmcmKSb1SyhNLQbRHn2VoiZ3gnVt8HPCoFbYsvMuiDGB7z",
  "key24": "mNN5KmtVWwvsh8LgbHwUUu5ZaPW9SUTZgFszJUzaBQFY126NU6vPUHZEUoqSSRU7n9GvbcPC4Byo5sNNeGD2tSj",
  "key25": "4fdc5Tmw6Msns52i14jQcn1JNigQzVc49oNgagbe6qtxn8rvUNzQqYNpiP4ZCqs82yEXngQWWyYx7uyKofvWi6YN",
  "key26": "hn4JAw7jWDu7Uo4k5MTmT6fN4dn2n5v4YAqA1UnXDwU4YWBB3zjwSWtFderbSNytVYTbuVkVtXmPUrVoLJLbFhp",
  "key27": "49kFzidqGt16TRgxAEmbqEfab3sHgRYrKhCTT7VRhFmXAtzHyKeEVQ3dg3Nua7zyWhyfjbDjP4TDHqFuWQimZZKt",
  "key28": "i6e7stg3RiSdjWpcSytMQCHfcd3ySWDwCZXXUZuzZwFRkLfLBrypwWM5x4LFAqnMmBbJncncpoy49kZCEjGdJ78",
  "key29": "UKkXADqcHL3hgvo1BPdAPXvHUwJTjpGQg9BsnsU9keRNTfkZ4WgqCigjWE3PC2AoQJFWSEKfNzqs617596Jpebc",
  "key30": "zTjNRDbSLNMvsAkdPKjUFbyVo4gwDv6gHdYoV7Cuc1bk2Q7ziMe5db5F7UEPJpzp8ehsitkWPYDag4GoQFQa7RG"
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
