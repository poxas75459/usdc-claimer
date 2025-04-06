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
    "5FjZxaxcYVnQ6a2ZzNJvxT69eimAa147TbWWNHiECSL54wbFaqUDbDTZvPBk3bdwS6LU6WU7WjgYxxKCXFHaNpZs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ErSvBaiJTJiANwMNdRxrF6tJisBTbGUWv4XYygUN9dshVuCMTChga9TU8dg1Gz1fn65WtbUzCARhbw96UYLwTFX",
  "key1": "5SbBBaQZ1s1m6686Z5urs2J5nC4tnJ7uRUcP1RAuMtbK2vvEssyR3p1STnTFLEZGmFZH9Bj1ZtdJe4v6obzxsb9e",
  "key2": "5kHf3tGTs9hXckK6hUoWnfWfrDGMYKrTNxmRq7AxdSgvmYzeQ8878RoHyWYcoqtY1XSHMudEL1Din7eaPuRrLfbP",
  "key3": "5MTo47kLHX4JV722d1RdfkAPdZ13vzLdwsPzgRZfLzQPFs9y782cCMXurB7DpE2bK5kdzFTaNGgT49cLiTKjv91H",
  "key4": "5ZbZCGiArnmaUUsPdsvnzLF192TS6vXarhLdDZdgSRfQgj2N3Eej7e8CPKb4NwYqn31JGPbwApwMCzCKZso7gMoY",
  "key5": "2UWPxgxBpecsznYqpK6CsFhWfdi22kUHdQgnbezqTRHkjrkHC3NaKBtGvZaz5JUawEVrTAvqaRe6sPhfQeCeTtoT",
  "key6": "3xL6PUC8L4FVqgrxtT64h2ch9wJ18PCBMsQJmbuYecXPTAdk459nNCkvHA9bSCcaJd8c59mkE9q1aqArRQbDVk7t",
  "key7": "5d4qU4NbTTKv6dZHDwWSCwA3Hp11hoyDVwGY3rADKdrtQ3qUoGC3hFXyM9bWYKtKMeKdL6j5sgAErAVbPBjCBEZw",
  "key8": "SLwNyKCUk169QiftrawR9DBMg7vomtzGzVqvE484KhoxZs25EmLxn7oCzt3WdNSFGwucum6LarU18fUpyTzvxtD",
  "key9": "4Dk4TY5uZPz3CGnfx5q3uU61cefZXdqhe8RvcS2YUdUVqsbAVbEVMvcjfZfNnbgtYYGXTbagkNX6AZ6sTQ9ekYPh",
  "key10": "2YyG3bG6EjdHCVg6LzT7UWGHLcyGnT49zkzc38DgzVhUPxSpupWree2XvLdrynWBM1bAuhFSwNWFcsgcPLG6DvJA",
  "key11": "j8MkSmgXuscYUxjFMCrdkhAhGsmZJnNhcZTifaVANec2qwX5N2X5JTGSoFEqLtu6vumLxEJh4iSpbQDDES78UNy",
  "key12": "3acFuRpMNvjt7cyeayBEYSs6qqfbRPDr6SiacroYaLHoV9WLia1ZwDS9QsZuNmii5XjsZXvom9vHuUhVCa9SiQkc",
  "key13": "5hiJ822FqVeixxKynnpTfyrVyggRDW3QYj6t2Y3x6cqLjbeffRyXiv4GinNo6GcQDE94c7PtQoAPvyafdMkQeNwN",
  "key14": "85hz94evncf2FaZSyyzZ2xj41z5BqfqFJr8eniX4B5WLM8HnRwnRFGpvL1Ud3VLd1Ne8E1684JLkD5YbpU7xC3i",
  "key15": "5jBnFgcq2zdNbENMnsMCDSikPaE4ramWYaApPSnCamvCiZ7JiLetZrebJ8KZcki3uQs9egk9qbL6jw1tH33Aswzr",
  "key16": "4VtRuhwfT2zaAHRvwyuezHuFL8SwHSASfnFHrJHyAig6GtYatBUUv3d2yzPw9riiTTgjGZJEm6RXoC2eSDDJTKW5",
  "key17": "Jjd4U4gsxZ823Zcjsc5TsWBbYYdix95iAUq7UULe4xCboB2xxTUDTpN35tfxjhx7HrnF6tDHYveQ6nem9tYY1bo",
  "key18": "5FKZc3NErkTUCqyh6XX6eN4k5ucTH4FshL684zJZehrtobstWBLM9RQiF9oh6xiD6LmkJpQ64s8oiFin86wmpUHE",
  "key19": "2KVVAtvEb9pwRFWL5jb4WQBchthKsn1BRXXPtcryY4c21ETaa5MaPf8p4bM8ziBXqw9eqwHPeWa6jjqiRubZZckE",
  "key20": "43r2oEW8ZUNjPVBaphZipW2ZbTNL5eKgVEtWxsMuR7wdFWommZ5QmDzmdrdkHkoX1p5BtLYHn1JyjQd3WAvnVktF",
  "key21": "5WMMZxByWXeQ3V66QKM2tVgS5tGHTvQ8hrbvJDAMVbv62Mumo6DFgB4a7P423QiCSXenH4GooNovRkaPFHBw5uiN",
  "key22": "3aVknYdAAmJVmiuvpHbQHmVkS27V2JZMe98MNYdaQReNLGGpucnkbb9R3k5WWbMrg1cj3JVb3mCEUJHM8CBmAt9h",
  "key23": "5hHpZXre71DoF99ACyrQQYQNdzeMcoLu2praqwf77ceq4RvbVFrGp6twgyRYKchzYFMkRNsAPpMH9ZgKpc91Fzcj",
  "key24": "31bc4KDM29zCncF6ugaFe7eemnsTDY4frhQa1SkN6iu3sHi8QfT7Ry1BZg2YWCZPWsxBhT9h5SM9ZSic8qTh4arZ",
  "key25": "fJK6tsVyP2YeffrMvpvPvLgvTcyGXQyvte4SJGsisx9czmk4JPhBwpKwy4s9BVcuvAk6UxL9Vknts1iAzckdTV6",
  "key26": "7BktY86waePVgMf8AoeKBeQfR75fm9RkLY8LaFijeD6Y7LAcR5wN78gd4bAfbFD3YuoBXJw8nLzwitTzpQWacdX",
  "key27": "3XskYSAVruKRsoCKhJ8fojrm2rBH1HkkG295sdJDZWtp5KhsKC4APVVep4Z9Dyd9UYsKiPBLxXdz96F6XXyWuPPg",
  "key28": "5wYF8cAoLp5tkjeNFmVR9TwqG11WzVvkAXZQff355fzd2edErSUqSBJxXJuSEjbgfRzFjuLanB7u2YMcfmqsxvSt",
  "key29": "2g3GmKKpx4ceTUGNZCQs2PZwzEt8UMykvCrESX11ADunvsftRKMX3kL72qmWfoGKZ4cDKhckWt1YwRF5xhDkocbb",
  "key30": "21HbteGgdHzhrKCtYL4AghHKypxc8uEbka91S68j2NagZq5xKTrnYjqJqdCMKndbACRoyCb1dhj21octk9wRWHXP",
  "key31": "4YhCQcGX4WbWagSRQnf8pcb9tW8w89duDUTYP8XZaNc71Sw6RHfjyt7Fd79cuq78bqb7BvMqtiz9sTK2ckcY48fZ",
  "key32": "2Kfuu4gWLLNsmL4MWTc222rHuTSKpX4mzWDituc2guh4WtFUWSmoLtv1vQSo3yCARZm8dCfBuvn4xst5q8UaqjX3",
  "key33": "3kvgVymBwf4Ag3XYHXAqU7ZSD3UKfSLzBDcUfRK7h6yjxbSG91aQpSVQ6FM4fci5tnjJVdmEUmzF4Y9Qu1hiPTiC",
  "key34": "4kVUgyug2FtrzN1NsUmhmv6MW6XB4GMv3oM5GKus3pNjCUUgGn1vtSF6M37c8c63isE9hnWa2PfejWkLaaqv8Uhp",
  "key35": "2R9eQPEHbJsid2ZUKXVaTyP13fGkVfC2d3HZmTdQJ4Sugoo4Vi5td54GisuUN7t4PPSnF5N6UXyCGAU41aFx2ou4",
  "key36": "3sUmStGSwzKM19epvBoqHbYqHxujFgu8DJ8GmuwF7q18y6ARQ5iVQMupuA2LCArrZ19n9yhZEvEeZ1BmYEFsst9e",
  "key37": "2ULVjk9ZunMLjGXxuWG6tgAJE73KjctZMNSrtpCNrGCkUwjfFkDBHSZSBAnTadomMkr8zyqeGa6YowDvYeCrEfzk"
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
