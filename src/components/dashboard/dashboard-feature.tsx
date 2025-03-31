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
    "3ZyfTZQJTt13WACq6hyw9pnUyYk4X5hzhJSQYW9bYSF5mj4BYiWBTo943A69Dtz4vm9Qom3KQE3E14kRNCRNinj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62z13wSen8JZP75MiXgrGYpnshh1LCpmFW5HCzpAHvLrkUo4GuAvKXCzgx7HsAjZ6ueFt6DpoGQeEb7ExqbahiEK",
  "key1": "bjvPHVk7zamh9QEWKNjw9dbTzyLwkaGvsbwsyRWYYDz2S5TJaGm64b2xLoxXSEsNXYkUPGqFDi24i4v6CPXVs6K",
  "key2": "67dity3MCGt9JKUd45SawJRbknEtYttERbKWVZ5oh494Ssxq5wbCM7q1tbSg5jg2hzP81ZcBxanpmJcc9b41mQT8",
  "key3": "2JkmgqEwUt1pMEAwkAYvgRMdTRSFTKaDiWVJs5bNByj9tCBkzCtFKZzU7gdtg9kPNdSr5puHJoVVhaAS3aFwDMyg",
  "key4": "5FCwH1JLK5oJpAaXFfHQVYP4AR3VJ7Km9mMrJh6H9iw98CsgV3ijfar6GLaJLK1veTgSeg88zBtKEe1U9ySVuwUa",
  "key5": "5hA9kyjHnthf35xkKeTHf35eZXuXRZ4YMizscfRwqpt5ysYBSR7fCwkfCeC2KDqj5C9gNCfkj3HP3jHzzALZzZp",
  "key6": "57g82DXsrL6CxzZ1PdLNX6bmHXc2W8Beme6x1Y9x2z3DEM2FPaKqpemTD2gx8w2HfJoFVm4UvvTEAGWpWKtYEEqD",
  "key7": "4XeTpvj3NChmoxjvpk3HjH4JExSQpwmcTaKKcUB1oBnwiEJ43nUP8qzJf2TtWf3jkBNzfhcgeEpWBifVZNg5jb3t",
  "key8": "4H5J8K1dr1EmhsjcWZ9zQ9RD8ZqJQeczRH46zDNVonWrgwLb7JKrfwDTSEZKhy3AjD5WCiw3ychyuop8J3jDhki5",
  "key9": "2P9Xg4mfzKQ3y2XhvoeLZxUVi2Qfr5sHW27oXrog7d8q3bVMJ2fb1ecjy69U4uM393c3a9YFowvAf3SidyE2EKwF",
  "key10": "39sm8KLNwNxAargjKK9RWCsXvqmVcUFicMQyvPeTeyLUE6iR5J1qordowgoySyUHxKGP7Xsmfdu55KDvojiEUKUS",
  "key11": "2972zuYQH5wsQwv4TnVQ95mdivbsBwXn2mmCqaeGGeyTu5yMUceR2XSKwoqurSCXBUs5HzYQcgZcqCF1u32YUgvy",
  "key12": "5cphSWAjSyoKTwttbVCrnZ1jmMyJbnQsMuSgp8VijSpghWZyhkgTsgiiRadeXDkbPAaRvg4mnsBhTX9bogqp2nLK",
  "key13": "3G9KxohrSvAkCyddU7om3c7EUBbtMmTpDqmJNdAhhzmdRHzCUcFAgfSeKtHBH1tVnDE18zhDbmZPR8SZcjNTHbU1",
  "key14": "4M3UnRT1Hyz5ugyV5Hu9e7nzrvsRr2jriGtKfR93vJxzmowy1rdqUW7upoAsMXhfsn9bNE5h1DR56eV4kxmpuB13",
  "key15": "3FMPcxhf6JmhA8499qGBhT94W9B6ba89dcTJh2vzzZ3mqUYgF3XYELFBjXzEcGF6wEzuCFmTEg1fuiAQJEqMaKQp",
  "key16": "E3hWaudU5kAqjq8iqiKNtrAVFbEixZhb5CgTP1aMfjN3PUaNDmMfqSA7RnLTfgtiefsBAqG6NA3dWLQRE79WP5g",
  "key17": "4drqvK5g9xNU7rhcz7zTFPsPYfTi1zsLVWoDU4KdpWknjAtVTeHhHfob75QRDsyEzb2UrqPoHLr9oWAqVQU7h17M",
  "key18": "2rpZu6x1izoBvyrWpiUr5GMzRQRWLGRLzC9i4XRVRJaeugGnZ9mBiJSYkQ2G33cPw5s9Trct3TY5LxaKPNu5m5p1",
  "key19": "4rHUCqee34in8CZn1V27C2ijQE9xsMWdT2hy1uC527BENTuheqPut5ceqNbArzhpZ7ZdzKRh7jxNAzNPvxbHm11j",
  "key20": "2LFgKd4KYtAHoh5k8nHx7VqhMVhyKB7VtyLsbtuUZrETaJdAx3xC6daEiAZ5mUK1hAcXi6tHLDmNcouMaQHBXNrH",
  "key21": "3enehqjthoRd58Y3mFJcAiggXeRXHzbp4Q5ei84LfMFhiRmAQZXmqM56H1zz3Y8zFJZdJ3TgzVUWbER8bZUcRhrD",
  "key22": "HPKjwkzkSWkL9gmwpapVEhqD4aca8y2vwqGBPo6jnN2SMoLhwBtCp51W3mSGwWZ3iX4UkT6fVHSos5sAqeEVca7",
  "key23": "59KPMNyVQuurxNFysdTnR82DDxLHsUsQQSz9F1D1q9eRREdUQW8zmbE2qsTqSjYKVyCt8hKy5QugXYEX7Kg1wxHh",
  "key24": "hho2XJp8D4CgeAe5CfChBwwjqDBNRmdUnecFpBATqGHXcSTHffUZmsJNUaRaTjS69RjGXkSoEkB3wVRBgxoQVhH",
  "key25": "2mKG5TcL7GZVYBr5iiQDnCGx3YfHBNfYihpbeofQPvh9KbWHhemmBqGxv1heJc3j4Lj2ZaFfDJbtSpQqrAjnWUBB",
  "key26": "4ShNwKG72PwgE7qXij8bU4rzPC31Covr1wVudXbuYCNW5sVoLJTMx2M5t86qFRqFbazyiQEBaPY97Quyz5EqR5A5",
  "key27": "2FhCHpkF4eBCqxMV7vMpJwXv2YQFTeT8irNx6AimFQRBKR8pobWs5n6bRDwSp2a4r6u7uAuF19RzY7sDb2SAdKzq",
  "key28": "4XtsHMcWMkxajkccvoeNBoxpCH58mbPxWBqhwsbPiHko7Hu7wMCWaCR8QNYtohiW6BkSxJiovCnpPiuBhvQgbdr",
  "key29": "E9UKvMhFe5TRRLS6rm2TkikFqA6vdW45PWydw1DAwuXib1Wbq3oY3vY2uVop1exYCBfkhGUh9u53s73bF1W55tZ",
  "key30": "5gTu4AwfcyxJCKMchE2x5bLVhB61P98QrNRGV1sdLy2ZRugmdBToASBt3PDCd5xVFuLzLesFuD89CFPnc3NRS8zC",
  "key31": "sv89YznR8hivLqRPo9uCTQWBgeG4FQqD7CSqH95Dnk5DWyKxgrY2L2i7Ak1UAq62VRHQ2gR35naeKB4kcv6NioU",
  "key32": "3osf5ePkCdAjwQER7YorFC4MjB1wCpE2KRxKtP9MDVEzfP5PAPWWoA1FZtpubeN9KhekCR4bGNEPtrq2aiV3Z9yL",
  "key33": "45qwg34YjKQfPi7gwBFgzEUkSzwqVCT3V9uBsUEs3cPSAE7Z9RNX4oqtXn62qVh4iemWKUDCx9wNFgptHuhkTFds",
  "key34": "3Jwn6Ewn9LSQrgkDXoi5oophHXockgi2tbfRSNG5zK1HBopPGKuHdKtPssJyfRaDFwyhsYBgUznB8ACgarmrJqrY",
  "key35": "59V1sgK7KeyEYLHne3kYxELNc5CALnHHPhDJu4qUHaGjDBtPJzch3MzhZvM5w9hPrQkXQAVEEY4YbLzWpDAYeTZh",
  "key36": "f4SEaMbTa32ue9SVPm9fjLAouEBoPVCnqqEdW1nxzXPRe4zAiBuSU4Z3u6b91iwvdi3J2oygmyojkJs5G4pXVEM",
  "key37": "2be7DYsW217d78iiVn6cdeuizGNb2q4GeMhpBzamComybxoDQEBtiHME3qowyckeyR5jonNfU6EWFY5FMU1mL18p",
  "key38": "BZjLs62vszjJsFtWPbqphdemtbHV7wyneeVLCrpPScF46TaL84DAbAzNijYQpwTongv2QTR264Q1yRtQEvyfYf3",
  "key39": "5JdUjnMdvKoaRGzqhNX4B4RefdFYxgT63j7Q6hacKoxnk3m2YE6EDVGbAPNgdexZfSExnNVz1en6DcFEM1SEc39",
  "key40": "3b4YRrFdZk7ChKaqwKT7dtqjacxe8A3zT4Ph9C8XNiL1Mit8uVY6uhYWq8RNz2NNPg2koxxFvYbHfJSVST3C4rZE",
  "key41": "2dHAjbWLfGcrWLw9a8VeBVsijtZSQ2LBPjGr7KveVfkbM3ZV5SwF2uTvWbpUxvcZFuXc8xXm1uHvFX11VehJeUQB",
  "key42": "3Lt5zG9MpxNEpir3zJj7gNHkGCMZdS99n5kdRS65vmxCseosjT1SL6S2wRvwq2pApKMHqeQiJT3Sdt443by1XFSV",
  "key43": "hQ4HKkegzbLVFA8QF1SpbrgXVhbFgcT6tNxhbYKNLD7LCstGUCHE3mwB4AcxPyHZuoBH7asRQ2SkMaHTteBjBzc",
  "key44": "2kfcTMqDozG2dsw6ZBdFMexXHnNk6WKdmiN5NHCedHi5VLBMnkNYEpAYtBEhWmSzizxgdfdJJi8Xp75Zd6YVryw3",
  "key45": "4K3rt2o8PhGWevwEDhFRwAm6GRnz5eUXU4ZFNMRG6fS7bkauh9LXMrq7hyEyotVYrwaip5TYfeTzcRYtwzqviUhJ",
  "key46": "61LcS4i2ceYhLxcucNpSWp4YFxexDKz1WW7tunjkTDLBaPWcWLjytRiK5UBGoSwmHmPNzuhxCYqExH5HMPXimhbW",
  "key47": "4gZ3moVRxenYhusEigCF2wrcZ4HiXXv1TL94g1xHAwe2Jf9aB6SD9Mtc5H5Q3gBCaPHngaaJRAE1ATMvJ2LEAgw6"
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
