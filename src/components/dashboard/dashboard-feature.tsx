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
    "3g64AAARs3dmfwnMDbVpayMMduUSWQgdaDstNSvAfetU1GvxXP58XemDGVDqDh4MxWjJQfEYx24imc9kkuzSwmd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nW4gmH2RBYgMT28EYTBgAxU232F8NDV4EMv3xyEAkqwJrd1DgoV5vvrBrkRpUxY6K6nz5ShGWnVkeooFTjJK8Kk",
  "key1": "2k4p7EEsfEeBLL8Y2RRWWcZK9XFJoYVn2V8j1ThjEacaQ56hZFiBrQ7kbahbMjghjXrNn12WcRzKQa3YYCiALgBr",
  "key2": "5QVvmLtJZJ5ka5rGW58y3Fw6PjPhiy8b8kreJWMAf4rsquc1JkL2QmFeJQoTPY2bxBU6icLXuf9zjMNUdYqFkr3",
  "key3": "4cnoNDs5EUnwRjd9WbuHJCqGvjyZgR6tmfBRF2yQe2m6xsdWRoziSjCxb3rdM2bSpTBFCHUAKXmSi993PvRhx31q",
  "key4": "4FW9gsbZxCERNKZJrgNo1SfpCA43FDGVjwW8mU1uUDYK84ywbKUG5vssCPVxQFFfasHxbHasxpNwUZKS1zFxwYc9",
  "key5": "4FRXu9GrrSWcptXDnCdCPqbirLDw5VpgfA3WZCWrwzf3nkq2Y5MYZ7dFMRXvAUU6D5ZBPeUbDZcYNVf51STJXuuU",
  "key6": "2mWocDSUJsywUJirrhnJ9aB9NhbBSf33JbM5Gy4bextbMmt88hHNez2heziEBAtSNeR5Fx6yGnRMsyysEoAeT5Sm",
  "key7": "32BCZr5MwoNiNpSRYMCVFMucD2RA1yKGjKKjjRGrvqRiHXL3HGxR1quJaQ5fZLd8jiR5sbvmRgGJySagm4rPAAQi",
  "key8": "2c4mUTZDLrHwbwQptojSwnPCD9chtterMcUHbZpeJ6sd114y7mAZSa4YMg3oSgbd7Ka4vPMzwD7XoQxy26yJK9bZ",
  "key9": "3CwEVh9brVsahyaTC1gmbApKwTAngmkTnVpyjWKSgmyPjWWAfUAQLwb1Xwg3PBS4QNNwpAwLmZcDZMTmTEzWiyTw",
  "key10": "gBFwJh48ty1FeFYaJp8K3WE1omJKJUEh2xNcjgZ1CfjwvCxCgi15ENrk1EL8nnzH78NM91t6HBUCEmGPqhQpWkE",
  "key11": "4UoJbAoEwpt5TxWd1yvXKLU9TVGifoAnJA7RnAzY2WwrToSptkwo9Fsz9vjQNXJXAd4r6TkMzngUf7AQ9wQgLkj3",
  "key12": "3Esvr2WpecmPPiEJMK8ZVw1WFtCTw5Q7TfpEgXxbZXsiQSgg4qmtp8f4XU8LSypsne9xs27kc2HAnWMS57Vxj8uG",
  "key13": "4jHnGomZ8jqcziunuZe8UW5YcrHnvH6j3R6b8TkR4ZcJk7G6sm6WEWQ4hVTHhy7TV2KTXWvUekfth4FhUFVnJ41z",
  "key14": "f9E74mA7mWYmhTSW1b1mLquHF4FefBn8Brdyfe9au9ScE2C9WaZPV28qdfF65igr491rTACcPPVG1Ldtd5grsc5",
  "key15": "2x5DpVF5kFo74ofDmY7tm8HWnJd8XS8rpx9adhUzak2uDvXocYHqa7nuMGvWKFfn9Hj4JG62kDRWxCLAdbEcBggK",
  "key16": "5t5WvCFV9wjCQZksYgGjVcMYcZYMmriBQHdc2ohzz3a6WPppyqd3wWa8qjUdXiqut4mdWLjz21dgrvUN76msA1nu",
  "key17": "2pQaPv6dKxwTRbQJ13UJR657DzfaVFvB9VMzreNVssMhqNg1imXmi2YxNGQ6TaNeVdChvdLxCYDAZPcE5X72BnA7",
  "key18": "2VPpqvSdDuwFnk9NuXPaqTUNiBHrFpWfEfz4e2ZSN8AFHkQMZrjXkXBB1BLL4U1JkfvKkoNhm8pFQkT8LcQ5wXkh",
  "key19": "2aRc2M3HxsuGQKn9dQvf6iHsU4nRoGXvSJoGNxiEQJpiQUvChcAe23LEHhqtwgmv5CDPqhBsP8fw6JrfR8o3oN61",
  "key20": "5PKwAn5mXxB5RBnz7eh6vEtNTjLHSDsLjpcJUxezoaNYh1ry9AkPWjoxjMZm4EbdVeE3RGhNLsSFxbNHdRcrMMVp",
  "key21": "CivCU85zKr68pWPy4dJKZDKqa9Fard6AqBAimwXrdWWWD4D2feDAqmQE8DRVoeSrrkcJEuWXgwCuqqmSy2NbmJL",
  "key22": "44Y4LtS6TZukXRebYmJBudGTQrK9TRR5fTngbfihGTXkneXr71MndfPdtZR5gfJrNWm1nTG7YXwW4MYwv6kWoVH2",
  "key23": "BvS7Uu5M7ZEzMRUMy85nVxLWzyFYr1WnUZEYndaMQb2uWmpXBUSTS3W7jvXgWaswR4dgaGHdFBVALzffxYAt45u",
  "key24": "5K8B8q1JgNyW2JvSngiz6Sh2ksJmnTd4hWXuE5DopRiU4F3v8LJuCN3GtA5a1s8bkeARwyzKbPGngcE18gJQW4VL",
  "key25": "64o7fKzYMAeX3gZ7NBegkszZ4nMch2ux7EQUAzpxywV9e9tQodti6Sjtqycc767sVtGCw3tKfqG3rWL7bx4gaoqz",
  "key26": "3kEKVpYegqnJze3CoZp7yDjF8vm5jCqtGaDc9rsVc1tDGvCTPUhqcb1p5P33opkztdoKrwLT57bZFsyeXuy8gQLA",
  "key27": "5G5VRgH4vARUwbWiHwWGnUf9LsnTwxCwVWU7dhSdhrjKyiHtrFzZPze35rwf9eGYAzKPYCnf21eiTTLSFr3dB19G",
  "key28": "5yVa3cupDZFU6iy1dcfPWSmqa4cbr6npYWQwujHc2jnrjfSdJduLsMFwSyWHxkHniWUL3ThZES4RXVSdr5xAsBVW",
  "key29": "4RiXmjJFvSWYekcCFGZT4js3hqUHfthBsP5mZAYgon7h5nHNTXfmH8Kgwp23PQG7jTjwjmn3rmp59RBnQabXSQce",
  "key30": "3a1zxwqbsxVDZuNTWrC8UstD6gR9UnePu9HvMcBAwbfdteoWymGt3wAMBuK7cvPYH7NZsF99YfTCkfiz11ASAw5g",
  "key31": "2khCbfbrLiRG5S3i4xHHCYy7P3jHhUcEJ8PfRhX8E5LdoBTf86TiEHDJgyqQqUX64uokUEgckEbxKiJfusE6JHmE",
  "key32": "42nDhrehZf7MnDvJroMy33c4Nt2fbzHt1YMPyumSxaXiB7481Jxm2RVNpWtvM5WBQ1DNG2PNvjUZ3Zr5BqGCb1Dx",
  "key33": "45EXaP811zPU5jzCE1GgEhdZTrYZUpcveG3nt2NTfHuMCwqSgpxESFePTwVZeb2WUs99M1hjhz8hQC16gfGhLqRA",
  "key34": "3U6vWjhmhr4PrVtAnMmuRaygVC4b87TWLc1VFH9osDek8xpUTsd4bEi4GZzUNQtXb5jqEhFXPbjeUuX2dbWsKgxq",
  "key35": "2jimGfkDrqcdspioGQTQVKBYTjb3HNE9R3UEZMK1ToviW1dWi8ec12gn1S9bEKUA5MncptJJz52mWm9VmWPs3S83",
  "key36": "3DuRZeeKpnNmfjpeNBFtU3VRCnAGhEKFY5HyoX6nYc6JTpPKRHEKoTovEjhDV67MajnLvGNTrJcDyBq7GPy4L2x1",
  "key37": "3rXS7BwoCMqWp5g7tnwjSp4eTZuNejSgHtuymYqP4MGn7Uh4BFY3ZV1aJAX5CBtX2qbqZsCoSfJMDo9AG5E6p76U",
  "key38": "54L4wj9b9kVmXyQ5jxm46eqd6VUCiYZmU9Gvnuzhxniq4SH267JEonWEMYsbUEZGRxAnS1KToh98PHZ622mSn6Lt",
  "key39": "5oUNxkG56hvnBp4caKqP8Xh2mNMP8xWYvfa88ywTecsSd1ZAHdv3thMK9wNNK9rCEAUsDshb8ZYaRp5nbTNft1Xv"
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
