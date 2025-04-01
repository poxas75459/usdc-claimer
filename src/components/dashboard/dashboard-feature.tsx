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
    "4Etceb7D8HReXXmfrdFPfbaW3P1U8FG2nDYc1Y3q8Zxat5rfLjovzBoMZzVXtMrGStxmJ6RezBRjmG9NgRQKYVGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g58v58eXctbsfL4QVj4em4pREeAb2QMoiWNehjVWLAhAqmhBggLc8vxVPZzqC1BYBAVJYPoqzLYqd2542rJqhJ9",
  "key1": "2sBMF33ygZW4wmJF6TEthDzWEUW6FaufeKZvidGW3Lj46oBjtBxF4K6ZUwv9boEXnpNy9gdLhuF5s5jcykP7cqv1",
  "key2": "UTWVmnw8CfgphgiNgiyKY6VKi1c9KUib2Mu1QP8UhcxBzH67QntiTVnXufueEJZk9qvaeUwnarmUDfoNHVQsCEp",
  "key3": "4bZJos81JDbVjM1fpChyrMPTi8Qj3sCXFKigQuM9XGiP26V8CSTrPSjdiBHoxgivoW2i2z2otUNGDhSTtevGarHX",
  "key4": "25Sk7Kx74cPFASQUSPuSeyobmeGaNw1G9R7RuJKMmrgae1AwsxipMP9MZPaLYhC6n8wYrVd7FCM2rG4vqFWxozhk",
  "key5": "5FwNDtTuVV2Xoy3DB7ffX5uuHBiP4zULNYGVovhsbxNnNvKcgcVj8ReGhuDLvbKmbQRiWUxjihAxdpu3XCU7PJFN",
  "key6": "4c8Sf6nnXWd4bC4bDpeZSJSiVZiLzSpFZKuxZ1cQNNxpFy8uVHKawQEDJbAMCogxxuiRKX5xYhghgEfiBZiTC9uq",
  "key7": "4chZKaLaNJE8NrGsrzBzjBYyvd4n9q5xooFqwNbgCtvGR3vj3QKLEVp8dNbBuLVHzAbD3quxDa54Qt19tdaJ3HzN",
  "key8": "4WCaGqMzZe2KMJxcbQw6kyeJ5q5tJDdP5T6gTkPFLTLwkW6Bm8rgJR2gh1h32RVVduGu3mtjq2FbheR7v6FfGnVk",
  "key9": "4VFCCY1XKXSjotwE1cCBs2H758N7CPZ8an5Q42Nakjjn48Vv33oR8148tUSMiMeUzajzzheB9S4gBybd4MdCmArh",
  "key10": "YCfxsuN7u2bnRtpFdD3R6df9nTzh89nvhXeWQYNTZ5xG5aao4eWthwZKEGP685chVdaJ4HFjtD3QAWCGsR6uED7",
  "key11": "2PdsPCkrUCS1fkwFgKh5CZMW4kXcsEZwDgg8iBaf296eqTSbKBdJUNZnMRGtZa8L6a5QoaXrt86Hbb8Wyi4a4oUL",
  "key12": "5cLQDP4GWADyv2spJpmuQ6AmeBCFwhotHjaLWdGkto6oMbCo3X9jj41WZFiDWctzzQB9UUmeo5WGECr99KfYUv2N",
  "key13": "5czF519HeBiAyR3DoGD1G99nkfcWiCr6mjZqmGEwatGehWuok4HPCf3rWv5TqiueUr81ufs1MsKgkP54Tvjexwem",
  "key14": "3co4YWYDKtjnPTzjyVtFMwiwv3QCEzXnm6trQ8YTRmXhhX47BWtQxtkNGWgFDT1ed4isbXoh1GKkH2GiCBfaRQ1H",
  "key15": "2nyovyDKJire3AU67Fk8yp6PasHC7k37Jhx2Y7BHN699xSuKyMyw5L3jTqCBXJxd6LAGC1Qf3soUVgo7xMnDpi5B",
  "key16": "2exf7D1RPATabBFAWWZAantFY5xBDizjHQ4hb3PwDGDBVjFcv6pwttFBn6hUYzvKZCA1nmDaLG6c7evWfKvNrHPA",
  "key17": "2M8FRGJXGPLZjTBuidPCXd7Z19XiYU5mcQ4GtvWXakxz3DJ6aedEkLuYGjEJXKhXHFw3soUCZGrX9pXv5f6SSjuF",
  "key18": "4Ukjxaq5V7yYnChnzTd1Md57tSPVq5bcPLxANVrPsuSgrwueda9y2hempGS3hR23sxQex45kaYoWkaAKix9ByKFf",
  "key19": "v9RxBnNukXF7FBfiamjDhckz2QMFhSxaEhAg6SyDbBhsL4rrkoULHgaaMKXWixjTEbKveQtkrmw4nuQMheujdXA",
  "key20": "3vLExwSVAfVNhV5dkAw1X7SsQWKuADEFpTakKxTqvuBwg31zS7Ah1VuaRtUVu5o34VUuLbPoNXeNfUcjfJ6EDQyz",
  "key21": "2qe7tx9aEGVKVyKL3LCqPPvQuPrjipUEmK2SjH7M5U1UR3Cmhm5RRJwt44cnrcreQCVUHcDWLDAHHvqz5QNfTFbL",
  "key22": "5brfn6WVPerUeRajYfE5tWAY7g7WJW9jyYof2zv5MWPkkGat4ZUPryQpVY2CiUF95G3zDqHwsu8LXp4ThpZsRaet",
  "key23": "2de2YetL1R9uWMnHYZszGigN5PvdhKjEYcg5SdYdSmwjD8AqRXzAfySkpP39ocpLjZvhwfK8RwMGjY6fcGsGbtfx",
  "key24": "36iFyYYpN8WyXjpKKDFjoeubkvwtiyitn3nU7CL9Ypft9Taj9bkQoSjtvmPkjZuHePmazU7nNo8f21mZ5pcRvNV9",
  "key25": "51GzRnoxMGQby8tBi1XDMTbXBUaUNkomXbkCgDL8L9YaUomTyatGrUcvzBeNPukazDmQ81QnqyufErZx8MYzv98B",
  "key26": "snMELsSoLkgpHboAhcZZJV3pxMnAtCjTSpAjXXYg71ZSDuT469iJV7oevNyDig9Q8Bj5bdQsyHMWnx5gY25FFoe",
  "key27": "39AtgoiVbqbqD9q5Jmaiaqmey4tuwHpgVjkgFbF3CVPKLf2jfCSumYUiU6KhTUuAWsJzh3fjeYNJv3ZcuVj9dLST",
  "key28": "57Mz8rtURXKcaw6JyPRJzBSRoaNoeVEfF7NfU4Mb8nYo7Y69UsR2Z4NjJHTWXe2GknqCSiB6KN6fRR2m3xYaiKeV",
  "key29": "4EKDBCLa4zxSbymWPGJ3H98vnfrfxAe3sdbBUfLUCDVgUkCowy6QdwULduZPYbY18D7Hmdbj5wa8Pve7HFgQWLke",
  "key30": "28nGFKpbBmdhWBW4AbwpYXkbHAF7CXkEsGYo38SGVwSXadppK7PzUEXg9EVxueWcS3Ue8n4ChpAhnfv5vNBibf3r"
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
