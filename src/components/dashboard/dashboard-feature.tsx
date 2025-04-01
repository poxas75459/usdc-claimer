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
    "9bAua1Jfu38EzG7rVKCYke1HvF4AG7BzFjZaWVwp9D562nJqbHevxpu5mBwicfsbwYGJWU2QrJAgdS3GJg2thYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TSrRGUQMs1Szrf2SPMf2m1T9wXRdPiSee1vDJuRtEVsYHGrX6T8c3NLTxbCZJ9DaaYUZfcqLfcximdSHCWfgEfC",
  "key1": "JY9zUuWRZNKa1NmsVSdDBB7d6qMPiFp9Nf6uhKom7y9gn29Dp5T8MFJHHrXass328eTCSJaqKyFArahXehU3sVR",
  "key2": "4CLaVY62hUm2XbR5AVhKowuJ2nWLwCnPs2miB519Ahdj1aMzzzYRSpKUXC1B2KgJNrv9YCGDekcddU3rABFtVqEH",
  "key3": "LPNhwGew6xtJLeZ5MSSP7BzLWyctN7G9n3e8KK3mWqVRLprZq2N6JV4QPtK7tsxib9GPzcWf7C5RX8XFrMkGQU4",
  "key4": "4G4DtScH6r7LhC6sP7wQoxejXJN4jrp9tBG17pKx8itiwzEbp8xbmbRvvwgDox7WieKMSpzvR1qqxSAyqa3eTRdw",
  "key5": "39jvoHnnArsme7D9fQA6GsHmmuYD36ts2UroGuA3AdbEqgRibTEyf67EFo62HDRUSkM5DdNm8EAckFxZhUaJ8zU",
  "key6": "22LVBLAfWaPA8NwEHM8hmuXxSuhnrhcvhWudrsYJVsgiwNvUw9i13BLu42cnWEitcpf1KkWQGV3w18F6pZgAVNZS",
  "key7": "65ekxcWRWPytXobazJRiVL2rirn23Nd5tjY1wxCHVejcAkg4xvGbcgXtajgVz6xoDUPFAsx7h5EXcwA7ETA2D7eS",
  "key8": "2TBHZyPb9kzU7ZeQJYnhYXD2sWqb3qams8GdqW1ARDJMAG74RRGhr86h6d4CymnFVSnWpbbEVfuwdfsX1Frp7hEG",
  "key9": "3NVtySuAsTPP38uxi7he3Jn2BKuUwX2EgZStVATXFmVEnQqiHkkL29F47M4RhPd1STMhsFMCdXmXMGzaxq2kkBaW",
  "key10": "3JLftcpjBJrQTBf4Aai857ADqm5dMa2fr5xZemh4xyxy5gp7GetPUqYCbP9WZD9bNiTBvG52kpR2EnKAeLkJxfxa",
  "key11": "3N2Z82JjjkEm2Y455yMGgkgnX4ubDEXQMwJMKjbSHr6cSFm1v8GzhDoxa8ZG6UvpsMW54t8erJcqAZRMVyEG62Eg",
  "key12": "4cga4TRXU95XFQ9E3nEjkScc6GuxefN8gg54utvvUVLZVoZBiW9L19Gk11cFEVognxZC1eUq19hjufAUbFDuhEBN",
  "key13": "3YAz4fWvoDHsk48fAuA7pAnUHmjZ74JrRkKv7KJq4VwRvcvsTriQsFYo3aJKV5rYQgARzzphxMhjM9ACavyKAJtD",
  "key14": "3bUx7WJ2rvamqeF2oyUhrMBHie24LsqZgU6tcn94uT4cEKYvSBSz6rsTMzKDmKv9SVbqnQ9UKKaScHwuTV8hK6uN",
  "key15": "41nLiGqaQzoQWjHeMNqesybgApE8ucamotj63zLnzu7TmVc1qPgCE7LB8SQMGzsStMzoHpNiWyR5LtepCTFm95JV",
  "key16": "ip5VxuihN19R5RjHLZyJ6VX9eLTxvFAY5cu4csS2pr1TYGhV73JW8PvuwapfPnFd5tFqBxRgwd5YL2nvFscet3G",
  "key17": "3Hrdn2n9L6v38zT9dmWHuiNS2JXesNhgez5sHebc8MWH6ZSFQnXXX2jgodqrtpHHJyQSM8bRzsigpRWCXnJDU4vs",
  "key18": "Twg2k9dCcXuBAqQxL81xbTLXYiq9k9jXN2pZvD2FvKRvUWC8FVjPzv7VGQP7aEa27xTg4A1UbQtTJto1Yg9xG7x",
  "key19": "5npy9ybfajfeFCxoRCvuHRbpGeNqPkgqa2hgThy2cbKocb9ocvMWHVkdtMPRiAfrBN98o3gFjRynkN4Tixcs8FxS",
  "key20": "3Y4JG6uD6vQTGjDwwnZ86JwxwPj4NjdewD7RMM6YMgMV4bV8DbqHct55Ri1jCgK8WPQ2kudSqht7uFPgqF9jYY5D",
  "key21": "3o8atrQm2xjQfSpKPJSy3SZB8EgraDAnFh9hNiwSaEDQVSndjHUe8ACKCE1hcMYaJCynykz3eFR68XeHpSxg2r37",
  "key22": "5vE2JmH1sPrkdBaagytmzyXxYaTnpuixzGFPToXxMfCRTUdhHQg4vSWBejv1NATTqAmZVXvyjUnjZWoBWp2UMY66",
  "key23": "ZKgHcmWdaPZyENMHDeB3ewveiBZjMxuF1YKNZbqgxEtN8bF4RAiVtXpzBMesmWHucs76Lj4DPh1ydgJeCAEVQG9",
  "key24": "34N1uZXh1BDbhffKQ2HJJS1uWCPkEvA7wLUycj4fZr49jXr7DWiQzd7jaPjxs97c3HfRyXxaoUMrF6cgmfpEsmPu",
  "key25": "2uwuCAkcVWAU5FE2qbogiftqzGn9xpfpFLgHmFkQee7QvxmawggYHoYbxHmhLBb4gReBDjPCEMJUrNJ4Zs3HtsAv",
  "key26": "4t2SzkowzJC8PVdVqi5hd37MX8FuU9MExukmqsaNJ4dVgUxzvS1DYACVNysGSpTzMDfmAugv8ij9dBdtDpByNCU2",
  "key27": "4MF5hESGnqj3XW59XF6Hj8yvUQetHSx5sYCb1xr6KqchDMU8dZnVWY5RtFPGHJCWM9ve4zeRvkzNNS8i71yYq6a9",
  "key28": "4UXP6JoqdoBqX4He49Rmpau47A1VgZbyb9jMdwKohDhgwxxeWiVwuGfCpfbu2aGUPN5VnaDz7JcRc1MDBJk8Duk3",
  "key29": "4DbJNRLnTzghX8jHRcfcNeSq5jLVPWXv9h3MKAq4QaCHZbp7weqAvWmaTCiGrxGmzCRdmCeY9dXTPJmeePv2wBCc",
  "key30": "3nhwxzPCMuBKGqRb8C85EZJ928bPLJXaye85PCSrNfsuCLzU7VUFiW8GCAmU6pWH5UGqd9dDMk9U1aZMbjxaEkBR",
  "key31": "5LrzUnJdHQL6ag8DbsknDmoGikQRYMVQ1J9NVpoEMxJeaJjwhavSct2cZdrzoZEeDSzr28FyBvhWEfkYYWhNUBkJ",
  "key32": "mtEszHxnH6wjndy8CoauyxGpC43zCQFn7jhG4SkYgdoCGh1UyYBH1AjVGGfQM48zobXHZsq1hYgVC899m54ii38",
  "key33": "ucKuopSPs5E3FKiUKLGwQi8NhUU2PJVB46p1MaJEUsqmwAVRxxzAUccqywkErSY7sjuqcCMSpBesbSwxaWepmCs",
  "key34": "3NisDaVtymsyp3CqvHukJX3NGMCFciPT77yjppwRd4Y7H2NEydyBzkrtx5hDZZuuvzccAopiCnF5fwHg6Z7GQfaa",
  "key35": "5di9KwGmeynAudisNGGtrx3SHy7ZFsGKZgpBxcAJwBKi3oLrz7synjNxiKaix9SzqmBCUgBxr2xCqexAmsvyDHQ3",
  "key36": "66oXGJVVLBWP2vJ4FQopMD9WjUGu9akrfk55wimseUAfF6mxfQXSHd2Y3JoqtqUUsVjMJaMRoFsntz2DAPd4y85P",
  "key37": "3mBZu1LRrMgL72Aufb9ezc535Uz29quDg3QWozVqS1nzwmYRCnudbXy2DMxhGVNXcwWH6Eww8qL1nozko7rdRVmE",
  "key38": "3M4admrhFHewzqSA4pbf85ZRgSzndicizRsbnr23ueS4AQBVXoA4AXqVkCTcSLYaRQMGpHrfaf5cJUAad1dZdgAC",
  "key39": "3KDXk7DD5kSXrZrD2XU5LBU4A5fJRpCUV19vJ6xE7AXYnrDvhx9ahxGgTEkAT9CNj6L4WnuxEQdocKJGVsaPhFBE",
  "key40": "3tVLTUMUBwR76mjisufKuPJoSFEuPzwnusUonXDh6nfDNxkVhTrHzcagZc3b44GEvwWPC3YfRcNVAZ9VfCxjZJH5",
  "key41": "bxV72d3VVXEZ1dANBFQRGZDXAJmHkA32tk8Bsb4QbnQuJS7AgqaXAfLbCYVKWDVYTTN1ysvQPVAzLDYDUWiaoPU",
  "key42": "4Piy1fS1oZVW2jMb4yZ53fThogTk6sdvGhUQwZp3H6j2MVbmTfb1jvbmaMWB7wuooDReKUcnhDLK2Kt1TV2SvxBc",
  "key43": "4HFNarHDLgWm25sMi7AnSYzQzuUHaEf1pJ9PDbw5cqfp6p5LExJ8UXgAZhmMGBRqLKJJz5DJH589RasCEdGLAt1Y",
  "key44": "3nDLMf3gnAXoZjpx8b4nbmVzayXKgiWMtvgxjPyVCXAQAxDc1YTPc83tvHUosEUBSrxDCS4ds4vRo3yv51p4aoMd",
  "key45": "3MzzJsrbeVJw6kKDFmoQ4mrn62a3wYUG71urGC6uwrdky8eeLxc7J2Hc79d3cxnyKHZUK8NhZDpLh6AcU1S4VPg5",
  "key46": "4VX73MSfUZj8YhFywh2NjGD1m569pTRTAnG5JBxA4RhiYBq4rQeH9oDWi7Lu2iTchhzZyizQnARft26y3jer8wMa",
  "key47": "kdPBTRDreiLKKG9sm7bnskoaZomTAtuYzMWgXZNKNATJwEs9VuPWCptJTyyhjGg8p1HaDyM1gBoRtzLXDGQMy3T",
  "key48": "4ux3YJxvYDm9YjhzggGf5PAw3EZxmk5sVK1bm2KQrHc4rBNA9J15ijfEd51FBKjAPDevb4t5nUoiz6TfMdfo6MZ1",
  "key49": "S5fWJKmZnNSnukzAxxpcvqVfK2kJ51vwdGwzSNwqDAkR82WnEVhbbD7EXfjRMxh61kXZHRZ4dSn1gvYi1YZ3Cgs"
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
