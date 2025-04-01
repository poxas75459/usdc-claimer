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
    "52aLXTXntmmfzCaSbPvP12PCBRFZ1KiE7RK64DcaxnfM9h7zHRAe9WHZdmRdJ8QcC5b92BpGVGJN2Sk93yrUU2UX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64QsCrmQ93QVre9jz2SxvuTBEjDqjUXzz6fL7HE7KUCETrYQNTnZukd1hwYKWx7BBqbNbTdhAeL6vCreHAzu8BXn",
  "key1": "3DkxEdxfU7ponLgS7XZc3tdH5VwRUWX2v9o9FRRte4bmQX2LmRsvJqMiBuWSoJ7C5d6dTYB1eL9PNxuJHLaoi1tu",
  "key2": "bCnFtRHmJmd5uMLJ5Gozg6yWBqYagWEip7CcWm1DvLAnw8Uzhwrfup4gqqVZV1xm8gWohaNB6k8Z96C9Gs5293J",
  "key3": "4m28TRzmyb2XGKBkPaqC4kzCarXLwVRYGtBufLZrHUABUgkVV6zwQRV1k2ngr5mV3PWpmzCLUoki1TbMsvCrUvPM",
  "key4": "uuwVv6rM1Ake2SHj1SD4mLdpWacox1UMgvu4fDWhpzcW66yvUvwwZRABsYTDAHAmFkzUwuM9SBvswmryujBnrg1",
  "key5": "kj4XGwVJcByiGvEkgpb6w3vv5mPaD5MSkH5nkmKx5yiT2DvFTbNyTkku6c6EKnjATNpkB7zGqexvsob47qC6rTc",
  "key6": "3THnnThFz4LKcP2hhZUasWJHKe2qwfajkUhXK9n8oNxB4ew5hWGbpMvLVKZEH93tuebwuPjDruVFg84f3KnzFZcn",
  "key7": "2K2rGLCZ8MSwPo2KWYgkRaMsC7e4U7PTyf5XpvJqnfhnLcbWJHQibYHTKwti4h8ArtkNkfMhHBPUkbV4ggWWED92",
  "key8": "5opsGKUbUGng84Xm54frHiZC9sedKH6WZTGND2pL9AhkRwo2tEv2hrc4ytPixnFUER5dH25pT43rHhN5JD7C7PHw",
  "key9": "5aJUjn8BEkD72gWJJFrvNu7eaGcfCbdKdxd95ehXuxuTb9srTg8JgcKHmhpKjNC4ayPPCbBEQx94kWK5xcCYCs7u",
  "key10": "4mb8SEDKbZN97UR1sCr3NWzHzyZC9pYzBHwmd6GKoedeAL4C22E7RGMuhwMLM7jRRoCv3bSVhs9JZoEgSoYdfsD1",
  "key11": "45BfjnoqR7wSTSQXvHX4Ln1ZXD9AHVMY4u84tsG6eDhWy99CKG6t6AScacwZnxP1ySKY9NRcGwFZn2o3N9GELhVm",
  "key12": "5NmohPGtA4sFACfpb8rGg6jMZQNS4Xi4k7pM6UeyPFUCtxR8RA3E3BMYmYpLYUs7jjPMFoaxZhb3BkUWA8pwkjEB",
  "key13": "5ephsPhpXa5w2nLm17w9Qck7RgN8rMy2ytYhyyAQc5dxADQNYZ6q1CKaQhtx8kFX91fpCNwdXmSXm7nrsKvpcHWo",
  "key14": "35GcZySeShiiHwsU4a4HX7RJoyQDFRZZcFSDHTpTFfGJ1ggEVH5j44Gh8ndbcWzKm7dq15vgUssgmwd1CVwC28wU",
  "key15": "3SU4RjV4uQYNp4NfAm8LFVmbzZMbYN3sDtRL9StuUc72mBUTV8mgshjcqhYFdXB4w9fqRjJBued53hiR6qEnumKM",
  "key16": "XR8dNa4NxDC5KxYcxLs2aZm3js6hDq6diKNhyeFbkraEMGiPAohpbV75Guq3QvgrheVokBFPsFfvyzww1fVnY2w",
  "key17": "47V4fHxTj328SobXh7jutAeqzaywxcCZiT5Yj2BQCEMH7e2rrYtkKZrYzuBkxfVqiskRQXt8hk98mCx3bSPFVFcP",
  "key18": "4ftWgAdgn3bs1XesBa4wbDFmKVHtbcEWBm9eKjXdMhof3Zmfwour2i4hZkeReimy22R3HrWsuRv5X8165HJbDNJV",
  "key19": "5eLcDCcanESyLQiVh2xGtjnVniLqD6HZbVVsLEa3L1211YgKQGvfh2S9UWPFmgYo2eeoK2htD8N6yDAFZpaYB4DM",
  "key20": "VVPCVUbsp8Rw3L7RgXAbEiJvre5ZSWqP1DCePhFbRhTKTY7ZLL3Kf5HWUutitnXz3E1WmD88GKpWUJ6poQVSvNs",
  "key21": "s461wEBAB7ou1FfHdqSyNHQjsGBzDDGiKNsfaWyekkXuGUo7szp1LZNQyuY4Pcz6wyUEdcqASpWip1zfcUk5of8",
  "key22": "4qXSNLw8yDuJLht6S3vgjQJEjwhdJ561vr4PR14wsPVRpMYcJo4oHaAhsxTW9s5GkvU5vkpwYFiEZdgR5quSfWRA",
  "key23": "2Rre1Q2fRs6GeszmSj8vQR7GQ9vagR7MVst5ono4rY81sx6gwigSAMDzU5Lmu6Mr6nTmxeHMDFxUTxUtzG7tShEC",
  "key24": "5y6hiKFpcvqjtcc5sdFmMsQbWBvyhmaBP2QpQ8nbucVpooYY39XEXCJ8t2HQsWMHG9SxZaawMsFSYY4BUV3BCqRo",
  "key25": "211PqyYDKgHraqgDYXX59BrhX15LZ34PwB8YLWaoFh5pR4kxZ6TGmsuCUmYfXaaQ4nAbTtX9VskPLfw7EnLNuvN2",
  "key26": "4MgxxK8uLL3ht7A7ZWLz1DGZoWYD3hYMLqbz7a5ZNniy8QNzkmrVDwFTGe6ui5K6FoLEZH6xRhPv98eg1xAWFLKf",
  "key27": "ZZBgd1u6y2e9W6c3MdYgTZu4LFLESrX4z2hyuxKnZ4993EKN9CvaxfSSdrybBJ7Qi1nGMofVJFjkkvjor8EiWKB",
  "key28": "75agErnZfUKSPuEPbg9KWkyjuWicMdRaV3GPFcuzdF5B5Y6dCyg2vxs2CtA3Y5VvonEtrRbEhiV5cS4mHrjGchQ",
  "key29": "3yjN5eKwDVKPuKjENW1atm5UVK6e3myxDMKCeekZ7ocZ4FMw7csD5Kohs6bhkpGt1kMKZP1F4UymfKT6NKd8987d",
  "key30": "5EqYx3o9wsYC1hQDPG9g684j2eNuiAhzA8CtWYFesKXsry2jaCtXHTXEHSxg35CXK8YF4mWcgEpprmdZMtveL1nQ",
  "key31": "56H374KBQnCW7G1ET2c47z7tto8BMw3yKCgvMV2tkaiz2M3UEn9w2PvQ1xAkRrYc5aC9QA22Qh2JJHQeeVFEvHxr",
  "key32": "a97rTNhuofBGRvaovzwXR7cwYvXVWXDC8joYxXmTDUMc7RWwTgxgg8P5ZLLUsmRgZgMWW69bdPsDAe4PFX3CA2z",
  "key33": "4jLHzvBJnedYm7Q5gW7BZY1ZZZJXzay3RaHHvRaJCHJbqv38K46jUAtu9k6mv8Lp8DX9VP2DB2XDN2ddXnYGEdP",
  "key34": "MXPMXWCvLSq3CzAjYmrpSkHqS37VDVrgtscBsg28y1ULRDhJ2p9dra2A4wvt2RyrpnoCWXUXz6iPkSBAFvfYt6g",
  "key35": "2boJvx9rMkXrrC3nLyN3iZjAXvnHfyWdM5nF22EG5GjD58gC8H4qeZfV96yf8mWqaiUvbuitX9rV2rSx6Qjb89f5",
  "key36": "hW4sEFtvaGazmBeMAztBjLFGXK9axY3ukoVUWLQvfb6CV8ZSBhz783eRDLq5EWPZfoyG9nJyfSszssmcTNKGUWU",
  "key37": "tjXYjQCQVGCiB8jbj2mFfTMZXDpa1tgGMHebPapnnjLRdTMtTNnGE9xry2GsMWLmLmhU9e1wocRuygYa12JyEoD",
  "key38": "3VGWYPXcDEvhouK81Gv6cVyyAkyY2FCugNQY99hMGBgspnVs1qT9tAsa4kczm6ZymkzQGi2huN5BRwdH5QV4Xonq",
  "key39": "QVi7v6XY3oWZQDvpPSAxXKkFPfjYD89v5B9rMzcPwK4xYQ2iKS5QtEScPbtZUD7yAhgNYR7rq7vLBAAogfkKMVw",
  "key40": "632roGwMRkE937nxZXxmXLZcUgrfsqcQEm7r55JbhjsK5BDMbaNWehswYhZJAAe52BvPzEZSTAHf6vhRon8L2fEC",
  "key41": "4KUHTUN62nZeQDNY9fQnh1XAa3xFXaPt4gh4BKQm2SJ87t9EqYwoKcu2hskZgHiCg6fx8LWQgrJfdw4sHBRb5oTd",
  "key42": "5DdsTYgDNWuCfetPzVHvhmGofD27FwJ2ZsP2PSvGWU2jZUJnfvVQ95rgxfoxx4VVQTfh8AV3xPQz19RowxCjajJm"
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
