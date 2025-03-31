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
    "4nrwszbqDhMSi22xpREobQaQ8DBcq6WikoA3aqokTJhzvTvvey3ozcWVmf5HZzUSC1RJr8QnEzUCiWg6HYPLNBot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rZkPJtYiV9uGWKN53ZEbTGjjUxkxFSNtEi4nRzC2c69rvvMuM7En8uapAge4EgZ6H9vxH1PnZWs4zgTnEFuRnms",
  "key1": "2qutdFtyCXmQWn3P5hMKQuxXudQaVdZ36KcUc3eCTX2N92i95CccRFrVFZyc69ruuGQchEpdc8Z1JFdu4Mt9XDgJ",
  "key2": "2zSXurtZFhxopXpLSn7aRaoNRjQjiHZfj2usTxsKQTujivKj3yipHuwjwWFVY5b2sEMaJvnNquVTvxJt21EGAsfY",
  "key3": "5Kjm1ZBtPapZemqvGduSjVKGmXwFWnMCAjrtBhwRHPqK7hwnFNtzAbnD2dkZ6QBZnZa54AzDXDVZfZb7wvDEd82S",
  "key4": "2bdje2RJuFcnJFSwwKgP3ntdMhVAPxkbbL2M7L92TuvoWF3Xbp8jCqfsHwh2vxReJGfZvKUTJPMgEn4Swhr669s3",
  "key5": "53xrADCT18xkgviRzmMQqCARK4ggHwFVpTKe3ho9kLj64uDxn8L4HepQu664nJVyr97WSuPxK9ApG5sZLeniYNri",
  "key6": "4iqgGc1JspGHGJQtXqLqYV1XwF6hd3HPGd3yYECmzc74unc4ejEm1moKVrubivRjXSRVi5XHfRuaorPbDdjeYujL",
  "key7": "2ZWUw946a4Af1XjL23YiW75xM53RF3Q5CMf6ZnJmLWNXKh9wb1NdZzX3SiwP4DrfSfv2re7f4UhUdbwC3Ykebj8o",
  "key8": "cop79mwhwArHUAh7ZGZ1hBQjo2ZYy4C5AditieRwvJDQHJKBvkC65JMTT9peZnze52NgxqaDpuweFMSFBqFM4vE",
  "key9": "3tpRHAXCL5r8pEgYzbKoLefxBcYgT5iBuvV2MT8AfPBwMgarV17fCaAz8Xuykuvf3vBKSaJMqrCRaFYPbEm5daxY",
  "key10": "QxNm3pmehXyGgsG7cLmiAsZCphW7Ch5DzPNySSWHnnkinYBMaPUijNr4hfR5buXP1PvF3opDiBCxksnyhXYuX38",
  "key11": "ESvmSmHynegsqV8dNN3UuPPn4TCjhUNmy43an4bQcH8xDCsELaVjAyMwt4dNKaafmM5ronupr8WdrtLuNXMR47S",
  "key12": "dfJdxJBkCTf4zsYvG3cznuGgVyiXDJy98XGJF59tPP1jDUg8g2RzDz11GiYgTESSTSd1vcaeabMgVTqBvzv1FNV",
  "key13": "4izmXD3Cmy4Wk7G3XjxpiScxHNBJJA6wWsPBqBKvdwhvNwDmN6xZcHCrZ7Vv1yDKCzJNz7MiNScGmUdnwb6dcbYb",
  "key14": "X9UpzCcpCR2wzuvFZuXim47v9oS6Jr5aC8VgCwotiHb6gCWCQ1GgQSaaLcye4zDFW4WWMnrjT5kSW7ugMKgaFQ3",
  "key15": "XCvYPixjVhcgDj4qU9gc7deQ1TqG8o4y1ZyExBBb911WaAX7X5ro2i2JHwuY3JE1EDTTsuk8z2dbHUf5Y7v71WJ",
  "key16": "37iHNif7sTxCK6JMgA4mqpywFrB8Kt3wYNr5avAC7CUe7J1QVmx7z9cRXGKqTe5AHCBC3mF3G4RBkdYjpKP3Y5u6",
  "key17": "5fZRu8oQVjmRWX9CF39BRmadz63MDuyqY3jPR3RjmN5qyBFR5DGc5rdbZBdgNtTYCh8c9VcjrJjGZEhV5sb1U2gn",
  "key18": "4pvHJpqDqtNQvAoP43gfsurwMiACcEK4X2UCYtPTABpuusV3VXFysveq7mXsmKgdsFpiKZHGwPv2CevP5NpXVUu1",
  "key19": "Dmkw4e2JrtzxFozvgrCNudzprdFaztiSHkD9nEL6muARC5NdHNtZMf5F53cnKwwYXBuY5z3gTX69rGy5if4Z3Dp",
  "key20": "66F8zxcFyVDB93CXsYpuiUmpo8PCmQkVRKAhw5PwKqiXMVViYsC3jy5VuJigZRSeKgks6uuuXYvRbH65CBwQ1Pts",
  "key21": "pW9hNeuT8etxbxrynPZ3iGrZca5AgWzYk24qSVbL8cTLfdSGv5qN56VUuSoA5WM8cEkqmsMaY1ucDYANeLpUbfb",
  "key22": "4DgWSjg6m44jkdVeKMbM54pygyDeVETtFkPXExKfayMKo9DXmVHbBBgEbXGjduZqeVmFgvfWyHURNVy47FvhYRNW",
  "key23": "3vREswbbnx3txq7Pg14TpMaEmLdB4sVRWHTmHJsXB4Vjyemsj85Ey7d18HAZFomzNCExrLiqvu44Ssj9CmBu4raS",
  "key24": "52bbvESnEpEptgrLNQTtKeXx7drmbHcP9aRHrfiPsioksb5hMrXd2evS14SELBSab873UUsH7kJAV72ya2J2zXAU",
  "key25": "4BTXvgQy3AdKzMPRJPaPpT6JvzWmAPsCp2DqjTfNQFk2jjYTokUMKXGhZ2YG29Rvbnas8ZJHvMbKnMoYa8bK9M1d",
  "key26": "5pa9zNEZUmemSg5gKidb47q2kkJ2kP4uveL2MuxjqT4BN3v8kuA5P49WhmhWEXUcf8J8WgFA9ytQAmXxnJLcuwbV",
  "key27": "nto8bSQXfk1CWXgy6DfqxgtcWu9tTvHHXbwr4tT6FeZJQA6BPFyv1GGP3FaHisdPj8nJaNksvKMmA48uB44gvcq",
  "key28": "5sAiRj63AwQJfLB2C116zBycg5rjz9maDAFQH3PZf4Een9qkwAVvsCiRTYiUwFB3xzZTXmu8pwAZnwhxYokxSQiA",
  "key29": "3B1XJxqVXxjjvXH8XrddpyYvp8VZwoxmBfWJEBLrSE6xRr7qJUkg9wqC8X14er7pSkao2QpjYRZ2VXvEkH5RFn7K"
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
