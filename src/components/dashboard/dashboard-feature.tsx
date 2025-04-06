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
    "2CuM5J3bv4ktqRgQeE4DS27qA2CmLCaHvp6KjJseUHiV5WXxU5JXqAdiAar4ahCyKn3E7EgunSf4MA5abYv3Cdrd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iPgLHTwo4pjXkpXRu41fFVozccf8i3ndxoLQdJ7PE2VFf5RguH7rAoJ8gb2V77kiEsPbcK7s2ZXkkjprwf8H55U",
  "key1": "GAkxwAnoyLpdRqZKqU5gytVcX65QVuxWXLujoWhEdh577knUJW4JoJPDyXAnGahhwPhVkjgvY28ZqQgBAZ7cfC8",
  "key2": "5VvwBhXUrEuHjrxf1Dt1PFQCZn45TATGH5a3NeNosC8TD9xKvpe2cdQSeDn34niWX9Dvsw2ptbyXTu7g2GivouSq",
  "key3": "3PGzuCypPxTXQqyVDjYBRALhBjqLWPxoB92UARQr3zyXzBBcofrUN2vAt4ckUpQySyhjY6LrX2EkD4TU14ytQHqx",
  "key4": "hZRNJCz3XNJLGuBzRiosbr6rSQ9LHgso3FpRZAF46a6vyViBgD5HqzTJXErR9dPpjH69HQoe7Y84W1P1bYpNsGd",
  "key5": "5sBkHLUabMGhT6PCYX4ZnWeqBUmwAHvsuSStmzL2SfsZguTKmqEQ1znVyWAYLD2RFjxw9b5zuQkrV4wM3Kj49cFc",
  "key6": "37dvR4JqqbuXb2TcpxXipWFaALApxW5PJyp6r8DJyXfghcfv3e9UEZn4R7DRKi9dJiJrg4etuGXWiVibgPcZBmFh",
  "key7": "QLT6QmwW1fo1ZzF8rgMGsHeEjBZga3kGJN1ZGYa1udkJRnn9HiFNwMPw7GGLzUQrNFhWTmKL9Jb8RYybRxFnQd1",
  "key8": "2RQWdMoWmcQjR8fbFdivHN1Q38RwxXCbu9f1LGfGAtK6qbQpYQQYkWvjKtT3aVPSeeZ2kaKsydv21EzGLszeFogZ",
  "key9": "2AcHWxv7WjSiaChLUN23tsdrKVKSiNQXzWNTJqqd6xmJrYHo932w3DkWkSuDEter2P81uCvP7PWksthX7T7n67Ji",
  "key10": "27m7UWz4d9vv4EnpavczN7j7cDnGhygSaeAJ25p2L44m55VnofbWTqWARwRL5xSHKuuCrVRT3p1NaPx5VBEoMoTM",
  "key11": "3AWD26nqd9Ys1yEfZgkM7pQFSL6NZYvKFbWavYtxyNqTHDVyVhEbNWFiwQE5Tk9RjHqufUctFYoPLvbsDaR3eHJQ",
  "key12": "rtrNEEnpUgeJUpBLmJymxmbtV8m4nrGnVhxM1ujZi3sZGPE4W8eDYnNptimF429gMZEWe9uGMLhDyH6zaHaWWBf",
  "key13": "43d3RXoSktvy7imYMKRYpHTo8pbSeLc4NmtbyDfguN1i6dqC5jSP3H4cftDS3KLmuwZtbrF2yvEwsdMkC6dmssWa",
  "key14": "128umGz6V2rqaHarPQLZVVumXLq5FG7AKRVXGgWZ9LycphjTruLWpZ8iCJf11zdTuFFZ6BYH7UCHGgfSSXtzHWYb",
  "key15": "59BbrHnZLaDDotwWy7KwXcEzEHXQnKdXUW7wAkxdSFciAvELNpUwCkqHgZVaDjFHPHBQju5HAzfCkFqSjW2ZYKSA",
  "key16": "YLkqyjfZ8jRGbaWfRrRK3CbfEDn42UfDJvHbHQ3AugFLcLYhRetdoWL9PphzD5nrQJ3haxuJsia8yH49xfi7HuB",
  "key17": "4S9RuJcZoZk2T639yd2G14BvQCC4RPKAW7Lh5xN3RXpJtUCgq3aDEVoX4zv2mUBj5vo9YBCNP2jazYi83mpWkVSP",
  "key18": "2NdhyVgdPeyhAWy6FB9cdLTbb7A5mrZH3d15B2EaB1baXTmU841Fb5DgjGvPFXRWGKnaS4dcEfwXpjWRF8iEs2F1",
  "key19": "2BF8RoEPgkqFsiAzQJE8QhBhHDeqxm38mw5v5oAyMhLQW8mg4VjDTAZM5bPdf1cNxg3CznyhtVYU4pdTbkZ9EpnQ",
  "key20": "UNsTiF93iTVeJBbYQajszd2VYSkMuwy4ooHxkFXuLN3htp8C1hcDC8WJgqxZCcp6efRLQF8W5eUtdczxzEZCGSw",
  "key21": "GoLLXzzB7Kskt3wMG311VcBXWsGaj9VoaPw74ST4cU9FHFi1xx2nkBwrUZ2uPqUazrE53BBfSDMiy4oLZRnW2Bd",
  "key22": "3mqrfQ7TJtJuRfC9tmNmLQQxQBDFea9dWsex7E8mgtT9FygBj3E2H6ahqqGwauHeo6L64uoR1G1FzxSTNGN3Cp9S",
  "key23": "9XbVWL63634fZrg7DDwD8CuwVjRG3fYNaY5yeqt9c9cCatfgBDuFBsgi66XZKY4EnvUrNX29iiVaJNnxCo2qi82",
  "key24": "5sGUJb3xBpxd9rfXj2y6buLW2x4kuJZZg5FVtacLWCnVhRXsArQmCr5T5MizGHamavkDFoYH8McKUtck9sdMA3Nh",
  "key25": "LVeKn5RUzSxXD8vCWuELqyX3c9XMy58kmdKjPen7VTs3zaJ23LMiobVnhQSjYVFdonSUrjcv6s6ZqGDA7EEDGpc",
  "key26": "2SATD4H1ThQWDjxy6R1EJxT6RbFHQJ8uPHxpHUXnFARZZ79meVeCRkRizRxGCfhN9mdsLZXeynByhbCsUR1fy3sn",
  "key27": "6c3Wy11zJP5A4YhCZVikgmDn5Eu9WKEA7Acrx8trmreVpWKG1CXkPNWJ4SqJJwztfFj6irVBVo81dcnF976Etpj",
  "key28": "BsnX28fudjm7tYRhuzf8jZWZMLTDnCDJ7ejGGYHLLTZxLCHYyvPkYqYQRPr2tLPg8cLiQuDkLSs4YB2h6iPh47k",
  "key29": "3d1PYcFYMtPHCDLdFRhi1npVY3QHjCwFAQqUapKbPfBc5hKr4C9y3cdqBnL3dEa27KbsGsGHaJkU5sLuaFjV1RRh",
  "key30": "2dYbkxQ4WfP7NKYspBEg9jDVm5bP9AaPLdu25jkLmkEq2dkKQJ71wMqifdCjPWuPBmrRWaqKu246gU9YfNFj1vN9",
  "key31": "5pampNn9hrzapHtbgnvTD3xTynfZAQ29eqsRVWnk8Feh5vRENjjFYNac9zwxaMp2PSUp8m44CasJSN2qbbmoiJNw",
  "key32": "4chQ9a9AbjVL4d2E3eaUBjJUFCS9Sd3gbzDWbAmBF14vpbMCZQ2indU4eNPhoQJ2XM8ALeooiWwiWvrEhXhVfBDA",
  "key33": "3PAAkLsF9DijHU45EPabnyvwMqU8vhXznUcNA5AC8j7maz9UCRUXkNy44VNwArcep6xZtC9p8gwS32v2KRN9ScCB",
  "key34": "5oFbuNyjgM1b2wwquEAUMpuWcryuYaTm4db5NQL2B5tXgRo2hRYAPD5svtCwuKpNTT9GWidEuPfyxQB7XmTezqJc",
  "key35": "2Yooz5UQE11gFyQCKDpKeM7Lsrx9d6EBGwuvnvrzwgKaUjxg613GetA8xh7NpuCqragrMRbHdyvuwDexALf7ecqr",
  "key36": "ubH8qr8thcoxZGso14pp6Sg7NQEbKF7pbfFF4VjpFSampgYj7huCGGRTj5wdFQnTJpH2xTtxh2LPSGYaVSoWfEX",
  "key37": "5nAM4UoEXtw6TQhLqgTwHHp32Sf2bs54WpQZhSA2wR9Gnj3kGDJervmKKRiznJTGECEvJavFV1pG536LCgHdtPNn",
  "key38": "35n3zvHUN5Kb2NSRZ1PreLiUY2MDi5uLxFotQ4sjhpXLusU3994B4UEy4PSLCawXsAc8oZNJjqN4MxLPhgcBSNnv",
  "key39": "3T3BE5toMkfZw2VdcaeptTjgxJa2AZWWVKuFuQCWFausFFemvLNktSCaebGbxGVq5LcNM6ieK1XhrKYT4HNa5T5U",
  "key40": "36SnwEys1URDhktiDCEGtrQinRrrEXCnHARiTn8bfW8RVXLS51KtWQmEazSxGkLc5xhS3W63YmXR7wSkP39EfVFy",
  "key41": "3ieqDVBXU4oLLno5MGAKynQVjDcZNhpbfwoQ91w5RpPudjykfB3fTA2nwXxyxTay8wDHpapqtZfQvr7UocCz3Qfj"
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
