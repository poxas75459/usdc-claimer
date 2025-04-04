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
    "2fkTtKRbTpEaMuavU1TbFMfmFykPfu8qUAHgfaYYqmUSPB1ZxKwgjNLvveLG4UUXtrV15HbMUgEVT1vfumssPAHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yTuB8Dum8E62gB5RbHgbu16svLgMUdoCtjRD8HYEQBqnN2QxCETiFHWCSWCJiQPWedtuXDypwzVKF5axrbKNDU4",
  "key1": "2yK9YVvN6GNS9APnEoMT5J1fZTdaMEyt95wtQezffAfCrLgXGkguKfDSSajQpTnXs3dUy8ZoQMWyG4pTB6DDLLGU",
  "key2": "4PNHwdBWM6k4zvaovfkr2pWBBVQcHxuBBEtrjjH7ocPMWxCY37cPtWTZe26CnYVXcyU7s7rYiFPuEXgbuNoEV1df",
  "key3": "iVRUXvAA19Y2z86FGVGGWjgQHGmT3QLtehEsoYehdyZzkapAyYXYT2niFCruksyFE71vC2wcPrPZj4SqFaja9WY",
  "key4": "48mKz9dpGbeMFN48ypna7WKBsk51CeZ94EX6cqfuEyCcE8up98Mt1LPkxoy5kmctxzCn9a1erR6haHvN4GY8ivHr",
  "key5": "46iBLsHuqKy4BgauG2sGJ1VY9opxsszDFGVVbjiBiVSekZvpXHtgtX5rR32mhtKRv6X8qdvc1uRB4a3M38dpJ8Pn",
  "key6": "5hqVpmeyPea5Q8wjpa5S4EiapZqauWLyzxxZru54xmBXTpuvbaZDeppAJwkRoLza52Va7N54UU9KJSTfcz7uTpPW",
  "key7": "BDgv7PAt9EdvyeMGryyHQzwZzQJzKDeyEWBPbgzwearCbT5QFGvfnhBEPS9XQBZXW4ujvAM9j6jdHkT2ApnqPCN",
  "key8": "mLeLsgyi17gK3WK2EoSHk15vgzHVTmRBoWNGMRB5NXa4P8N8siNwYhqM2sdV3ETryj2cTuq9EtptKWfQFUVxysZ",
  "key9": "a7BbPoxjhLVNSssFTqpBESTRfiGPMmEFqsFAcT4XScvmNFLjtfkp1hrGYt23eQpDT41o9WbSH1KKamNwT9dttt4",
  "key10": "53Gk9pRRAMq7sMoe6nSzUtjapigaMYusVxGTpCVeahCVY7cEbyW45CWorS5AsmhEhyAFshWdXTbPs5LPBbcCHkaX",
  "key11": "4bdQqv85CUvcJqmVJ2FymMcny3yRxuSXEb4cPEj9j2z1feqNBbDcV6TF9aNbyiFTyYZ2yXUNTxmKoYgbARSd3B5L",
  "key12": "4sGRe9xKDMU4zXTpxXpyVxbz1hSUKMVd5MoxiWHTdvEXcDjn7pAELLymCSu3PL9Qx6AxkTKNfzCXoXMYeZ6zdk2g",
  "key13": "2haeVDKvhF2LtXVQBysU9VXupQCQsbGXrj9vKgwqGp4zhKNE87rgiNUydFARu8AZYQrrDVBJeFyAKx9MpJjb2E4N",
  "key14": "4ZNCj6WPcVUQiW6aBFsyDD4hBko35Y19DZyViJsj57ECvvhdEjdYt5RGM6FQJrP1MCHxSoNCAQh2u53mwn6nqMoX",
  "key15": "5QiFJ4MJd4EvNx49K1nJhFY2vS2viRABJQY46VnqsYMMWQ19rBWPUDyhvGppPhDwDmLSekQYuJrsqsDkB8Mg7GV7",
  "key16": "2pyeFhZtJhZmnChZTRWoept3jMZrETQzCHJkzTMVWRgRiRpYMdT2jLJU3PKjssPhAqtCGwUd46r7yMt25YNF9MwH",
  "key17": "4H76ZbL9Ja7qxEjPLG5ewqb5W6dFs5UdteuGXx3LYyf5PJuvfnm8GbdoBMu3EJMw4C2Gky3qjpoCDB1wGE8h4o3z",
  "key18": "3zCwxwkmzQ8akBg8oNNyuM5vYe7LE5Kf7iFp2eAKhZQovWPeMMskcX4P4HJib3LZtoxgUHrgXeheathnKZ3XSpoB",
  "key19": "2U59XdAkZwptC5LvztoFeB7Uni5rW5MvwHL4FedVNAsaz6ERAKJjXDQvGc4Zm85cqirP3YyqX7G4abMwZKkSGLvj",
  "key20": "hDSJHumSjPae8SdNQxwLAABfvkW3aXLR7STDqQLUtoqqkXPbbz3pgHGKzNNS6DJx27pRkcLqmw3iURcAuzzZxr9",
  "key21": "vRExnJxpi1Rc1rufPLVoi7DbMttvRXe7RHpkaHexX2VK3QQ17kmfS3q4DXqkecn57x7Hwd1ejnzcZsAhq1JTsXD",
  "key22": "2qARkbSdiivQieiTfNRuVmqcTjcZweubaSTY2hqj34N7MTjLjQQXAT5nXJbgUAUX3TYLWxEhKUP8gTQpmc1nynSr",
  "key23": "5Af71moTsGKyk2gqfjDTiQ1TidGyrEZx2VoBMXsoSXaEn1eSD8nm4KxHLEKUr2ag6MqPBbZrofqq2QMyooc7S7md",
  "key24": "4ADWp3zNUAXyBfNHMsF41AmJbrjKov2WUBTfV2DJSg96sWAY8kV6adixntzcScCAotuP5h1FizyNHPyG5MKpZ8er",
  "key25": "MbJQ5CVRxAQgyFiXHPJFFrygPwYuzLkP1Px8wncNv1ZWnXXs6J4nysksZPWyHYcoSj9eJW6iQM3CWeYUp9WXq4e",
  "key26": "4wwMe3NUU4tGyx3R1GMqkCV34fjtqGagK5ZTUQYarkvCL1wAHDU3Xgof391kB2knxeZGZP8aknUN5AGbUABK549v",
  "key27": "zX2qtP336TkXdKMH4JQ2EgaUnp3HiKp9QTveAf4yQ99dkqoUX6VveE1mSphUaG3ZfqXyDHhuUAFzMW1HC2RpjR2",
  "key28": "5Rd4r5DXQnhDDpLwfZQDFc7mrhkcuhnGDkZjA7KzQqdpC6Bn82kQvvgSzNbiLfzg7aZNKvBXPTLRDSKmeSXhAzbx",
  "key29": "4pGgRQ2XcEVURDUgLrgwiZyeUer5Es3oJdhFsgm5ALHHbHwvzeLp2A3SCJjeraBy81jSwAYQ9oYWG7xsBKTYiSsG",
  "key30": "46P4uVKyAm26axgsNVo8zGEi3vgwU3BZfv5cgQdWi8U1c5JTi3omZtyj7tiZxtVgaWGARpiH2Dy6oNLTspLzohJz",
  "key31": "vxBAHHERNv9BW3Ee3djJ6UUH4Ud1U34D84j7ZTiWHgZndZQ4N87cHHgupXufWqtsVydaLbkPSTs5DxkYkRM3ujQ",
  "key32": "EXPKssY9xrLLtrtAEG4txHrWPfNjNfkuXhHeBgVGhp4Ps3R5VmVVPHXkxYtEmTTuR3z5WQxsjDMsMxd39pP84bB",
  "key33": "2Ut6zbSfNCSBvcDaj8cLcC6Nzk8quaGAFdJZHD7Kv5WCZaQoTfsLwgDKXXGbmTanahCKRjaRSpYLcHuLKggmmVTq",
  "key34": "222WPGMUk7HySw9fSbkqdCY6K5GA7nC4HRXz1TRKQBb6LDQ9eF5hN9U6kdK3kwfnwfMM2bwh8xq3ftEGYAHTEdWn",
  "key35": "pBJgRmX1FEgrG8GDF8qt4vFXZmLT8ehVE6QQJ62KjotdnfpVHBDNzSgfpJxMTu37Syra8vi4WBGyjJgUyJVk5vX",
  "key36": "53SXTXEbangBDkrtBdjPAaFF1gLBhkCFncqHh4YDYk6bQjn4hDPTPcfZT2XxWzYCQYRJe6Abt5UsufcwiEy4BMDs",
  "key37": "7kQBLvNamG3fPDd521aj5PyDwdVkyak3cxs55V2EDtxEFcUAfrutEFbtV7DWQD6XwL3omUr5ZYrq9dy1spcL2Up"
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
