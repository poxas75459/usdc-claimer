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
    "8BuzewUmPVBtkYG9Kzi1AMFUbCfBvcqd4FwEmXt9WhczvAuFCYEBifcdgVKx2xpE23DkeBfze1S6doAa89t7cV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33vDEhcUihmju9QmQk8jF27gaEyrRYyMWZu1UWVyaYUHcY4kjoeb25SVnRkdFJgEXFLRNm75rshKc2CALBjM35FW",
  "key1": "1xsisE88XRgtC5xeRD3Joqswu8HL6reA6WA2qHkQNZe8BQ86KN6Ej31CWuxhnT2acSdit3Rtr8wNEbaDwSdQPX",
  "key2": "2JGpBJgp8TH9gzChUsxigzmZPWZxhxBNMaTJ8AYpFNfABGDeUcfQSPbM6joc1tnd1w2dmhQMjf7k3PHKzM4iJMWX",
  "key3": "4yBMbvJtgDNqRaG92LmGdcYsiWzks5jdzB4PVbiPynZZFupnqzLXDMEqKBcS7dDUkcjkv5k7WVYuAGBxSpUsZa4G",
  "key4": "m64KXhPorkcDKLfXUQcjB3SbgZg9dbqJeYL5CfCiXUZKRWS1Q14Dtjdmt8jzti2zHJbtMEtUd2Eai19hfYbBdYo",
  "key5": "5iF4x5FDfdfp3we6JjZE4x9y5xtun6ugsATo6Xo7hNMnEQdkCiHe9sa6PdHCHv9j8EnoxwndopFC7gEzjtLxJytz",
  "key6": "2iSJ6W1YoG7Qyu9HvMvbTDsNvQU4iEwjytjC24NgKZYkvHMfEUDtsikPhHS4KHTgzZFXgkWHXw5yqQeLKeppSDdJ",
  "key7": "43f1kbFB7PYDgoUWyASVps9hnKCViMUtZwiY43GNeYNwgE3DMqUXvgpzXKWQy9vAZTZxNnZQQ3s8EkZzmXVVo2md",
  "key8": "XphGn8G5UZ5xKKdvBmtfWauiwDSGJYe3rxkG1F1ppkBBNTKztKWLShRWp5xw9cp63rz9gA7chBikFm6vdeMiwj6",
  "key9": "2t65P2emGMsnTfPBoFFgt841392Lc84zMEXPTVoJF3nqkmZjjCNnxwT9ZN3yrs5ctMx1DGsEexGS74r21AJ4kYfK",
  "key10": "5vyD785dwvnbM2veew1GQZ2PhLQbkWPrf8cbLZEDZhepMefZaXVX4B6Cb87JKndHFDpYQzWJxRGcyipvF2CSnhZk",
  "key11": "28Hy2ShYhw1kMRXfVcbHCQadGm3gxrY9xQXTkZ71i2XkdVUjhvTqGnU5muySZSCRq5SbzNihMgKLtKtLwQBRu6LU",
  "key12": "3hGWPQ7hg2xqdzH2WPgAC6PN8GBbiGhYP8Q7i9ZRUD63Lynb14hnc2HjvXphpJNuTYsV2ZaaqFFhCwcYDUVtKYGs",
  "key13": "4pKWfaps7h11sdiQ8PtWDAzgPrKAwtGB9UbEj94zCxvtRr6koYv8NbgX36mRwmzEXYmmYcwAL15P9SKjehyqU4bM",
  "key14": "597PABULuDKaWbmFostLSng2Rv5qXcsqfHtHY5jVCA96BjkojT7q1SuiGLotwVri7Wc4CU7ozvF7Jnz2QEmZXSm7",
  "key15": "4ioTFbVa3kT6kmYyiqZG9oi49eabSG7VRGJ7d9BHaMSjCskwqn45nrnkFhzN9J8nggwxZ9avtinzj8Bq6z4vRV3q",
  "key16": "4VN2Be3b1PRB7J5nTY4jnYuG15EHQxZYR8WAmQgcDPWqz3GtZ2yYLHd7p3DEbtN3a7YEah1oJCH35CVvrPbYZJrm",
  "key17": "42aHRX5VQVrAR3i2HLZ9KFb42mqoRyQp8c14U8dQ5mvGQ9R2v9rwvd5LyXtrXxuND9xXdvboebLLV5rCb8H5VL5w",
  "key18": "3ax9wadWw6mtjGhayXc7D3kTcxqX2NgSrbEjaywEny1fdN5Tnf4UAyHN1Hinj1vKN8hHicbX7hepKUXbsr5DWihf",
  "key19": "5ZpPRaYhp6sPufH4RPVKbMgKzhr5To1dJnZkZP5iXP6i4ijPaEEcwWZtZDgnLZzRzgR4J8VqUwQrXBifJA23E1WS",
  "key20": "3Pz6DrefbrXSy6AjQ6jGh5y4yu9KjpBQGMdQmE829LsQ5dE1tPK6npiWcSDcDFyYVPXMiQJU5qYFkGqQoEoNZKW5",
  "key21": "5nA8xuhxjUWNzwuULTBw9itDsPZpRarkNjkoZKL87YifuEVk7DZ8AXM2Y6eDpSAGstBbo51UBy1e48syJqyv83RQ",
  "key22": "3jcUpR1NB327mFBxKdNHfaG1VeE1YSKRjXHbSQ1MQLyrsbtt2XBPizgGP1qfamh9nZ9zS6bsEuSqFmxBELjjoLAy",
  "key23": "4pfjwiGAtY6b4Xzra4NsUGTLHAw67YK11H9RztGjyeQBXTGkHBzam75jtN3QnU7qy3NQZvLXQR3q2KJmh6YrEtjG",
  "key24": "4rhC27H5p8oVvvHhSXWurp9CVB6K8odGEo6djXQdyBSFXe3WxK4P57ETAmXRbiZzzLptBh49ibXD3cvcpGnhFFj1",
  "key25": "2i2rxufnuua818T5z4ZFWsiTF35cJUCHwoCXVxyPCeMPGMbUrQVE7SN7e8gXH3A5qgsU3YLJVuDSyNR5iZXFhfXd",
  "key26": "oP8oAVH9drrT6GSAByErxSepJ4nKmvY1GyJLQc7rCkAycfX1kPXE3Bo2Xu1zrJvtCAFroXjLAgc5dGY2G5ANny8",
  "key27": "ymbkjaV9QhSgnyug5MfUd13mEkNNxuyrq1jPs3hR3oSn1C221U4AnUSdPfVre4Fkr21pthFUtQFZj8EwB65URKY",
  "key28": "5iSx1zsHkoGT6eDC3fGSeziwpNgP1b2aRSJWu3bgR9ADBaZSMzTVtaucMWkxfXcYVPQWceCz6FUGEkYNqCwiZSZW",
  "key29": "3pvnscuvQqJHn1ZEyzjmQYrNcWrcG4Afw58YqrGRJCkxHpBj4v2ARmU9mE3j87tET2HubFHucRoTqkGHxG7gY2d2",
  "key30": "3ErQ7CAMc8KCNNhfiHxkKVWj4gArwXmgadDxaYP5Ko12mxinrdX41rqcVHsCHwQ7qJpoSkeF6tX4Y65eEStcRAji",
  "key31": "2k7WyuP4ZS23U8RLjDVpjDyEFDSmywFHgGpodY4rnwfXpHDrdB9hPv9Xm1EGYeJzmWdar1LUBoUeFLuJSLmQ6VGU",
  "key32": "4YAza4no9Y42w6A6Fjo9nMwFo57Egr8FQ1ucYfqV7fwwp82Vu1JNGkbHzroVnjxQiAJsGvCCaFwyULCy1aUfefgu",
  "key33": "2sk6ghRuCAGWQWanbf2dterQToi7wJzn9HTLJsbd1Cyk6bY6tXksY363zHEnzCrLDYYDwA8Ab6ALhNQ3JjKW3GJN",
  "key34": "4Nt5sVYv2X7TroSUAUVrBRRuCNgArQyhNf5LYuJAtcV6EuhB7JqLwn7nftRpiuXLugv5wGHbobWgQvSEJPjziFnB",
  "key35": "5nef1Cp5mBseJPYj9mrX4jE3EdvG8h6iLJnGniwPvV422EPtYbm16ZHCqeHqxV1YoVf1GgoFYg4wfaLsyZm9ja1e",
  "key36": "3ZQxbw7riTrU1zFsFUBa8azNcAW3xo5HMm1fMT4EhNaWAxxJfaiX5eZ4gAf5CwRYvu2AbxgtaUrCRwiYJUA9gcYq",
  "key37": "hZiqHF4chpfSS3pk5c386hKSWMFVFjVEfBm4hJktb2ZA6Ec75jeEuGsrUdGorczs7XuxAsPg9obww5ZvexsMFbj",
  "key38": "2EcRb9Rxb7vAA8T3xVinN7Q4i8nUSbeN98K6WtZ738qaPpZxTyY7Sn2t5o8bV15cn8hnYTBfhaPpC6ZhTExm9agM",
  "key39": "4WrJRSXJDNzG1ke4qq3kKdKjWG5VhzKuTX1gKZvZk4X62qEjh1gP4UjNtufZi9hHqf5HqavBNKnyFBf6KYZkApmu",
  "key40": "2dNGUfPcttZ7ZaxUfjMRsdop43CBTqqpY9fv7g83xdJZW6bXpWKKnupAZvnZ1BzMgZReQM3wcZi3TNV42ixV3EcE",
  "key41": "5UynEBThemkxqgDkt3meVhuFiLpWsVGA479RoYJHXhET7fk2rPmxv2wErPKQhD9H9UKgPjqNBEnFbciBz8HUWXY7",
  "key42": "66aEfddrvypivC4LJVmXRvgBv4Knptroqmuot6asq5UNbgLYAU72DxcQHdFxcnmdVhtPhCj8Lyjf23LfdoBzts2n",
  "key43": "2YNwQzinqQTY9CtRZTMHPzNM469m4Kn3gT2BabPgxCTPCqM6MaFFNCzPDb3mddRXb8HfV3STAZUjJzr2u8PnqD8M",
  "key44": "3mbkTSnzEra4RPM6oPFHh4kkxhNwCJpgmypRKCeA8VnZnGoVwh84tGdkVBhbbevPBtqCebdwMay2XdWsu8jp4qp1",
  "key45": "4jSfBUtJUUGLYuBDCv1LLNfhB5GmaoDvJ8tJj6TtjUaGd7j3TNNm4jszenqnMtDTeZorznTakGA8FPUwRucaaWMS"
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
