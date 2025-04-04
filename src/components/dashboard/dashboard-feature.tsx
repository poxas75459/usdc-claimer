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
    "5YifJGzaoC7DeV3zLRxGvaofGubu3uygcKLZBomJDEyLXw81E2kq6svuo6uexSYxYER64qJms7DEMitSUVQqNTLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cJUbsfqWfwwg9DbMpjfAbBzEyNiNsUXEsMAH9FpZDsXT1k98mYhr8QPs7cLMoYQYGKXVu7njFjYt27N98xMP8ZW",
  "key1": "x2UkCEQmURkCSt1pTUnnEzopECT7kUe3CMwUKdtn5QYVUcP5RR9cifD95dbCQPV8fF8QKq1sqd7BBBSsF3RaqcT",
  "key2": "3AaQEz9WxEtkJhGtVM5iuZaQc345CkcSFRN8hzhC6KoV4xyerTZTodBrGAipWQuVFTku3aXCwaV2gCKySX3XHyw2",
  "key3": "3hCnPnrtSxYeFYfrt9cvf2ysjWdyPsXvi1ryvHkpAA7FmqDY35zJPoi93UzbmFRkzHfJT4DLiZ1uBNCnkJ5d2Nhc",
  "key4": "529uN1Zbp9L2QGwmeHhzwmbp86t5od1gBgD6TWPy6nqW7vA1SFZ9jEhqeAmNkiCpKV9QfPr4Buh7WifmatB6e1cn",
  "key5": "ZhjqVTsPRgCwFaaqGy6nUhFQRrNGaTyjMMTkTL7iuh2b3LeV3PD3q2DxbpfC2tsa4XYr7aJDPyzSwv4recuVFix",
  "key6": "3Jdxo7TYuoLo4b9LUZQ6grufc47HzcQARb5XwbTK93tyDRjdSkXwjs7HG16b2vmMDCPADVUeS4nF6rYhLZp7fk8p",
  "key7": "5Nc2ygc65F163623RPzbyv6fk9jRQFNu4QzjhXv4JmZDgi2aNxXaNudypWvuWsZAjqKWuN6DmprsRwwN1q4dQSbk",
  "key8": "2oEVZwXccyfE9fvuUVSeS7gAEcowdgWRetxTBYavAoBZ1F8CNGyrqHtCxkZ3sMgB2rtZzPaSnbgGpCNBPdVncJD5",
  "key9": "26WZVhbKA4pxdXJvTnF32GVVCAJG2mRvKKygqPhZTdWKBWMwRgN7cNhHVaPjV1Y1SHswCPMDV1He3YJVMwhieVfr",
  "key10": "3E7kmtDPdkU9Z2MtNaUQ8LszKTon1Zj3VGfPAcXjHYwZYTjLW4kimaorwp6hhpJbSZPtEKZecNVTpAW3dCnGXFM6",
  "key11": "67AYF6A5BzQ5BUvcZR13JXTNrVxeLG8fnKBvryFFd3prSyJBRYNqCiJw2eGR6BoLseFUpWScUfBkUGh3186t5hQB",
  "key12": "2ZQ3CwmiCeuNbQfnQzryGDWb7RxysrQzM5P8H2FcnxxovXvCY2XswK2yjXakL6byi3yxMUtxHEjwHw8jqPsto5sE",
  "key13": "2oXb2TDdfYDhNHH7A6uoJDY2bmr9RSP5PSpDHhKusGu4zeEKyJFCpnLr2S5hUGKuRatVYQG1VnZjPkxJJGVHZC7n",
  "key14": "3wXpj71CMqM3aQ5s6nH7u5GCta5VJZWbnSvLPs7DbeBphnMdc4AH8yCSahNpUmHDDi9Lueqp6U4PYbbwzbLC9hWj",
  "key15": "57b9434pyMirLKqeBeHy2yvd2s7P7j3nPm1p1YfRE5LAEf85EYruYRvVu7yYTzsqPrZbWVjdFvW56drwsurURD5G",
  "key16": "2TXgezsAz5DxGvKLNQ3jFjkrEFW6enH3CaxX6xsPAQPJf5LeRp4tpK9fWSaeNoeJD3RgzwhyW5hLX8dFLzJM5BRg",
  "key17": "3hYRX2rTjHtJriuEuq6CehFcVvCa7uzU3A6y52Uto6pjrwnfnvekE9hPDAqqWXCST9ze949PycYox42v2urei17J",
  "key18": "5DaS4hCgMjqsvknpYnNxCqBVkBB5GrJeKNPvLbaZeb6UhGAFAMTZEiJTqWH1VBtjpgbEPLJmkEFgHxcghN772NCD",
  "key19": "227GTJWYNfjuJiQVs8efDG17bx1oNyU9cV9wv33uevqjZ18W9TpoFNB4hdDnWZJTB2d9AMF5gjUKbnfMDMq6bxfR",
  "key20": "61QFu7VqHHPFwt4u4HSMWo7d6wJQVCXeLC3nAuTphv6L6ja3RkomyEJfvW78pKdQeuANcfaXkt8GhrivP8FfSkCP",
  "key21": "5TfhBi9d5tdsPdjwpi3dmfaj76LSAXkxWoahaQ5qw4fhKtjREutqEiHc8aKAK2xLLG8fAxauE9qgAsoTjsTKyiHv",
  "key22": "2wTtwVAc2DXgqhEnRbnujMnaFNNuiC3wtcptXbvnfdZprSNVXVKASJMckHeyxLHkQgrn16VnaDrqw2W5X2KY5Sz6",
  "key23": "4YRnEZvgWKZkbwrbx3hSCnmeZqpdAW7czfUhnvD9mPL2YriJZ3ydZeAcvAbMtD1Sy82uR1B325dky79PHjbU1uGj",
  "key24": "121SxeKVGFCso2sPnVSbP1fGcM6UGau2rgKVZGG61pd3oM5ipgkck63LEGmunQPqtMEMNhL5VS4jrCL1qW6crDtz",
  "key25": "5CJoD8v2ChGxbjFDB3YP2mqicg3jpjstWqXekF6HymBPtH4HDumpUTFUHmXG6KRFagnKjwybdzKm7PQjwoMCuzME",
  "key26": "3p3PWha2YoGmHMmBZYrpm4Y27MgwtyY7m7xGYuMn9HfBeLMnMrUTdLCqaXFynY7UaViivM3EBzHC25zBbTpfxsQq",
  "key27": "2in7RajQH9LL4QrPCjKsHNxE9ADoQK8akJWcve16zp6bhML1KMgEZsrBLpqsaxqUoFxLAxGbcsPwG9oXKuYew8zX",
  "key28": "nqLhANp7KHEwHd79qF68acusCxVirh6MnsBjxdEyXXZ3MXHvWgdSSUawcCFZPvDHNyGKJtc61WqaqSf1kSXLAzg",
  "key29": "39XSxyiDtTJJ8ygFWYfYLG8CnzBHWbd69YddEL3Xn4aMteWxiYS2FGdLx9miRpb4cmy33uor77KSRRaLwb5dv63M",
  "key30": "4cA1kwnj8vKsWAoscAE1Bq9NjqVCgbhZyfBF7xS56biseNr31jrxiEhdM8hYu29CYu5VphHYiRtUp8WXwQs66QUx",
  "key31": "SCGg15An9orfe7hL6xyi8CaaexazDmYZBucVMEEHyPtG9Rk7Np9j4ctUFPka3krJcum8pBuqanyRT8mcu2ha8HU",
  "key32": "5qSJrRWoDgWLHjyxRiDoysGtys599mbSaKqoFAuX3RgXKvqUvjCZGJesjzuzapDddoYdXJJrEYdpGnVzjQbuBpkd",
  "key33": "5VM9zhb9n11o6ynys1ntjudmDBpNoTGVPo4JxpjRc3neLwpSNzGqxEqxLBqwv25qygqPZpjq9mwZ7bq51HSN54nf",
  "key34": "Skhhyue7XrxxrZ6vk6vd6JQuv8NFJaiNitEwnpMAZGfmQ7EzuWyDBW8XQ5e1Ao9mGvh8sqR47xMzCwBQEWeEVDe",
  "key35": "2Sb6zBfaHAg3ooYNGCFYF7vAGpqzHX3Z3KXjv8UXaQPvJDpC7z6KU6CPKd1japwLK9RcyPyZgUWNc8TyUJLNHefT",
  "key36": "hA6wfN1oGiiLXQBfT4SPQpxfossiUpqHgwjG4prKQ6bFhfxyZHAkvAWJyDDzc9So5EVAAgdiA9xyJL55LgqqXWf",
  "key37": "3b5XHHbrvFu1xB8XkLuxRR8mQ6MsSKLgvwV1fiPAPpv9VGP17e97obwJWTSq8EzWL1XMh87tf9oRGmnquVFzBJbs",
  "key38": "2pXgjZE1drD9JmsxNhSw7qR4psSvRqvqQiiQtuTb2UVzXWANcz4BfB6s9mQGjxBiHmN2SgUCQzKvJJS8Ccmxzxxb",
  "key39": "2krpob4feqbauz2K3Zq8fxWdQx19cfGu3s2eswbfUVV2g9b5znM6uKUwqKbYQEbS3ds4aTZZVP7VG1BxC6QU2389",
  "key40": "4Cq6P2JvPGTYCPjrU5YNJDenvbsFRWmN3aX1XGsjeYhcCFpZReZFege2aoXS8UKzef4zDrsZs6HZt8knsR8dqBUu",
  "key41": "345MGHkLXsV57WsjgcqHUcnWe4RWD4DMsNiiZqprrsegfvCAM7ganTx9pX4RAMRNXWW5uauSVP3mLYfMHJgcWC2D",
  "key42": "5xnitE7BKx8T3dKjjE48Y6KqCkGMwsa5C2tTnmaHR9WP1Wvsi7eTmbs7WVCJsxA5NqFzKbvtitYu9mcqPxTFVT5f",
  "key43": "4zE3t1PHoLt3v3DzgFoFN2ZRm7u7zLtvhn1T6WviTP637VpmmsCrJrr1DLzoaG1UN4PazeNMXgTxYeLhRNYBhbUF",
  "key44": "5846icFS98Ccy3yzZdECBVVVnbYxNeE4FKjkkBVauzxAJpGng9auhz6LYev1vvauKdZP2KV5ZvKT21svUYCfEwzU",
  "key45": "37g2JcyPW8Y8MF4sf1nCYDQhJGBmZXn8qpwnFSWK57EPxLHt6nxaeeMZLmKX7LtzJEpc1L5iii1jJRZ77zbx2T2s",
  "key46": "4TNCJoHY2jDYJn6zVVwU2XhUUghdakXgMj5e6MkFTERWgYiCeci5tEaf5DgyyFazLYVMC9vSFm3hV4u4doyDAtEv",
  "key47": "66CqPeDe4dTR5ahEA5VFEfvKNKbN6593oZzpAtnL7wMA5vn5FJy9KFmfF5SpDjDPjEEQbmSGCfDifKQp2zgoiKQJ",
  "key48": "jofKqcpUGE7GJBA7vUAZuXf1y64VHaVFQLsZo8m2ufcW7xb411VEUMqzPoidwT1YtDnyGQtVngaskXyEa5MH5YX",
  "key49": "cpsmhnrEhoCbofQaS8MdVhbTWsjY82eD7CHtSk5y2X3EqHdCyLYRsDiGcFeVJ5XKFhvdhEvbe3z7k8RrHQxkNDM"
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
