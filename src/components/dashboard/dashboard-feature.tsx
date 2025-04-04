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
    "AiQ2Lotg25sRaF6zgH78GPkX76vq93LnXhXcA3gGFmTWJgwVNXjMC8A61v4REaX8tcCkfQ298Wjkr1dw9ngV5P8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mjp5ZXme9bBrnfmFZLLsesxLPtozkVGQG56hVJ3gejg3t8q3YeHJJCri6DpiUcdZL2uxhvUFuAnfocGbxeDuBHc",
  "key1": "3gcf4WwfaymtAMV2nLgcLckU3KN3FpzrxAG6ULeZqAq3GQiA9VbLVHGu21ND2jRwvzMxAjdTbeNtMBo8coB8jPoF",
  "key2": "eCMoUKjosoeGhH1LgsuEngws2qNLpszqPEM6P7qB1HQCk5YMsJ9Z88FpVNKGY9dvh59yCD4nkgpiGv52h4XHka9",
  "key3": "2GJHshop2kk1km5RiXKWn42XTWeHtbASzSDsepyusp8dkiaZDQn3S7kxP6WLMbyh58h9tWfAwxzedBz2AQj6Bh7y",
  "key4": "317TSa44Txv4JVf7hQYqJNjZ5du1mRAMNWyhWfjopjAwTGgZdzt3vypWC1fzK5fXuEKZhaTFYDSw8okixcabVRQ3",
  "key5": "2jr9UGafQzqZ8wQu4AP9RtzWkpDCfxcAqZcNEkZLd6LPuZoYrYaN2HP3YrPkerP9zSATunqpgjCVNWxFXeZAkeCx",
  "key6": "5vRih9xwnnoiKYfa2ecQCE6Ryi1xAJDnVjG1k8qPYnzuu6SBCmjAhexx1WKSXsKze7nWyrcbFVdUqmHYVHYcnUCj",
  "key7": "hKynkFkfzUCuJuM2MmUiKjBJhDTFpvtHvW6nSC6En39As7EpqpVNkTKezE3xdBxpwfzJ1BzN1pj1D4wdoi7wkwj",
  "key8": "5NVTtbxT652o9XExae86Wacr3Z6UxHYBmg48Eu8YCovbZ3mKAhP1q1pY4j1oDorGHAXMJE532NJQNE19hHH87MCa",
  "key9": "2ub4vmbz3KufKDwbjGARxTPFF3nfNfWUKk71AFgmH5bdZ9F9gb8CH49Yce8XqQVS2rSRqURFuhyq4w1nTVkMKcos",
  "key10": "qy5RaxRDePL2aEvx1YxQFFQ1ABsPWP2vWGyYGUWRR1u4J4YLhd85E8Lbd5ua8fGiVH2i3bXHhmHQgXEMtDhShHv",
  "key11": "53VwKTS2GXvrQdSGRQAEyqFU9i9qveGmeiggmxDKAQ3b9EBgzdXr7mJtwPof75uvQEA1NxapfXkuNdcH6STJZ7yF",
  "key12": "49RijiWCMqtEuVXEy7ZjYgiEFFHnRvx8L3xt1vKbLmzzJVz91KcHxQkUHBsqpgBMsRDYukf9Yf9KoRR2qUyhRLq1",
  "key13": "32vt7E4XwzZPsh39nfnpHi1CHFDnUSBwktz8o3CgrfUCL6ZZPHGMtnQSMNWTtnJwPQ74UqYXpgR1f1TTuW2J6Tgx",
  "key14": "65x7swLf1mctn4waFQCpjDioJNbWnoJNj4dYAcNkoos7yPwRAQknkLAbzeY8fa7TXSSSVCkYbeVB9tb1g1AWH6CA",
  "key15": "42F6WegYCpnM4Nn2TwFNPDY9UtikMJgDKeY7w8wNk36e3Z9nQuBtnfU8SKLCdYekkySkBzqVaVmDMh71TZr2VisG",
  "key16": "3Hz2aVoBCiBYXHTRMZRgSgDQvdSKM8519LUTyuX6DEpqAn5Pdz5HbMKHtR2EBXhg4icwcxxxzJaJK1mEpJLQTJtg",
  "key17": "3dK2pgjiCvNyHG4DdyJAyiJ1scGLxJA9JrVFc6wSWSmwpv3SJy47UAgK85c1xnYcAeLCfH4zrHVLm7QjfLpgN5Vp",
  "key18": "4CekjyCRyg2HyxrNQnSnj8QvJjhN9oZjCk3naow6FadtVfbeXMJaqTS6Nm71xwEegzMLjgv7y3ADqg9eZ58UUteu",
  "key19": "ZH7rA23HmYEiRZiD9TK3giEZsD3x9n43nn7KeiqZ4emBuxkkMSfnijeuL6K3dRMHXYxcmiZ7KCYiqj58Hapvqqo",
  "key20": "pMbNNh8H8dDAcG2bnDTSDjACism9WEzhsyXx9XJYwVUKXHvrv7ktwqnBbWVWwjNiEhcc8spx4uHPeSC43LkJw5D",
  "key21": "2k6KoqtVGs9EhgyM6oyLoi9FhBFgy5V4bVsTiA7yYsNu9zpKtqkTPHFmMGcAxsUXN7ED3JWGroQiVTMJwtUoAk95",
  "key22": "tb28R8QMQ1up3dhbLx19rY6Gc8UjFd3tipihKhnoiTQySyUZF2i39MVK88GrWmAmzFtLM1EEwkLcP1rW5nSUNVo",
  "key23": "3mac3NKrAczHdCsgZG5Rm2U53EmvJmoGYnQKLJK6WZenaMHFyFmux5bMsVLScgVZ3wTCdhvKoiLkphkwCGKbuSYT",
  "key24": "sdGVMHixVZt7eD5Kc7pjxYoCZbeFruzkzqP8MuSeXWmeGMn6VDqSdu6cpD78isrYuvL8K7cWtnXszpXr8xJxDnQ",
  "key25": "6d9cbVTX4mJKQAde4WYBQ8brzzM8ftLyYGYoYpyfJ45VZGGZvfjWnZsbqEwMLtmLtwe52pFcaQeYytrE324K5cu",
  "key26": "32jCdd3j8T5fh3ueMuwzi16sjEJhoor58TRRwUCfDrSjjMCcESqeRZc4cQdpH5jqvEpMBAo9TzeYmQtpmd9hvfX1",
  "key27": "4Pf4yK9N9qNnt9oCGFQxtXrqWNKNaSWRaVizfoQUXkw9UD6keBEtNQeKUCDvj5dxuKxUzsMGkjvG2rAGW2ctsxuU",
  "key28": "2KaZfMpxPJhCBWuZ8tgRYL7Rp4r4AT5RnxFyRJdLf9bcvz63fgAGMdd6N19rrSAH28G4uwWdScZnm8xtzBoMVz7f",
  "key29": "2Fd8cQCz99yXnGDG6RsZuKgPVK329FtvAZDpdPhe1SySZujLxPNdp1qstBUHJYYxiTrm2pDScdJeL9oZC8xdqDLz",
  "key30": "66NtQvcsRBm1jSWNNFtAXcSj9XoFoGJTyNiCu2VLTx5oe8CZiwKZ96JN5MewKXZUT5BQoHEJvtSckhtKViLzi1kY",
  "key31": "4SVX7n8WDPgwL9Qh9SvByCUALx7ZzeBJ8QuRH3PgBExWpui8rkaNTJhuMfLM5CEX8FjvbdZWcUdXL4zcE1fJ2Y5X",
  "key32": "41ptYZryMHJTNnKaYFcXr4zGqTKJERqGB7fyLfXcH6T3hdQ9ysJg3J1y1EdDgpH1oy2QHhtMCK4yciUpTVignBRU",
  "key33": "2zp8VjxfzansNd2WVZ377dbh77MgntR4ApaJNEhPvmi5M8ovLinCU6J8zzL1g8kuhbcxUxzpGFo3mQUQ16kVnVt5",
  "key34": "zUtKFgCYKbUazoo9fUuYaFHSvzxkqruEMBsvcPrBEgrDoJAk7kHZA2vFHpc1SXCwbHiLYvJjB9QK9neVeZx7VVC",
  "key35": "55h9RgwJNfnVHsmo59Vgh2fvAiW4FdfExWqdvu4rCfG913gM4L18tNRntmq7xqNSWn5viyrcVMf7YRLZygvnoNQf",
  "key36": "3VotafCic1pQxvurjy11NHh8wHr49pLhS133WK6TYxVPSfWGiVia5deYRpFbAsktjXvbRWCLzpcCDcdEKmhFvrYR",
  "key37": "VndDDMJfJ6djdbMgENrc4oK5mBEVdHPTyZwH7Y4utbLbWMfUzRfMyEtqPQtYxg8Fk9zG8hGPPPfC4chp8TkJryL",
  "key38": "2BdAVufPQBz2zgnSKpe68sf5jWGVjJRU4MHbSjkXkqvTEy44KApP7ijxKGCoUM3Mq4GahGUJiBWvfMXpfdYYkU6d",
  "key39": "37r3bahKogUUxvNApQUjKzAYoVPvJ1u94vBiy73bCcjeiBTRBMiyVT8CiQ5VsfYppqJJvcyGmMJ7XBXTSba7paKf",
  "key40": "a5jFFmdkH1fE4CL8yAc9YfyYbjXi2rnA5oG5mDXQB4V1VCBjXfJ6Nqt3e7c9JH3tyrkj7ctccsaE8oqLiowkXZi",
  "key41": "3175vudT2m9yQD2kpVcYEAxpgPGB4kxfBhCqcBPpHkAtW1xiLQawKdby4deJJpC3S4iKAwFgNAdSMPPiWAn45ypW",
  "key42": "Y3quwT5sv3i1tsz9pN3EsRp6nTwtJ4CngtibDbHax4r4wXi2JfoucRc9DggjFxEDowZGRy3bD3WZRCckNVM6wiP",
  "key43": "3NQUG7xiksjYVjiTdu4n4BudcneHrgXBfdAsX65wva1sp27J2Pp7beLVvJq6De33p5mF924iufjoFVb1t3HsUHdp",
  "key44": "5v5zyxJCqwrZX49FwmWprjSQLHfjacJeV4wjTjhL6ypVz3bpuSVKFfpn7ik6dZzFq4cTJPaP7cdBH3dHkLr2SE9T"
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
