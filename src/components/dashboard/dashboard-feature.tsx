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
    "5goLqwCCe8JLcd2JQMzGUBvyirZJXTBatTa6JMuoxsxnv5AiGyqG4125wDRjBpEx4jyoBbjbU5N4wxU5f9eLw2Je"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QSCCJNhgsJbhyxPmJ6PN69nWxxoqVARvLbc84PYoHLoR7vMaZS1bAASEQ4e57yUdD1P49gZynaHfFE3QSopNgX2",
  "key1": "3HQkgkRUdBUjP47YAte2sKYi449j8hY4vqnUU6uEo2acNHUZ9vNHrftVjEGfYqEHuHCYg7n8ES674NmiP7jnxp5B",
  "key2": "3rJwxDzcB7HZWa2WsoNZnfKUuGxafdF5b8vtEJ1akbyycY9EsxrjH3uGxHE88H7MqiWvq38ydbWsZBm3B157Mpy3",
  "key3": "34zhXTJfxU7y5pt2RuhYZgpZPvKEocn6foytkBKXbT895Vxd8bK77gnu86sZ8xs5ZEGzP9KfmfqYX4no22vb29Cd",
  "key4": "4Z95YJvXGXdtawJpnidCW2LPSVgejfUy3dk1srdFGiLtk3RwhcL8V3uUiZ7dHU4MJgVz9LmxLyrqJs8KsJLKjyms",
  "key5": "3ZjCTD7wnYA5QFJSmUotnVy8wQKfGr4x9CqS1PD4cNxdmnTwwpKpzhqsnCu44dns43Mqt9zcpoqXpHLi2KfcfjE7",
  "key6": "qoLc1BRerSu4sMcMnEar8pZ4demJE5kS3xjADAFPEvz73zyfrYiM1QzA8JXU5WHKEeRzZCPVW2SW7rUzfpfEDZi",
  "key7": "4UrtfxSkmWNuzHJ7EmYqhLbSqrc5P28ejEijEtq4qSG7WmW53rq9CLojcQMHN9UndkWyXDDLg6MCzFigarw2hgaV",
  "key8": "3nxa39s4EZdQTPxwqyLpnnv7bPBmnu1o6i8pvWv6TYUUQ8pdwohnRSGsYDB5CHZTLYDMg8awfe4tXGu2PUDFpaJx",
  "key9": "45GdFVkcVScDJWWcq5v28iEjW5hGQKaFzypSyvAXVKUZXjwivkNxbwLtknb3PayhahT2CfMC9Fra3zc9FZz7NXNn",
  "key10": "22skWrPjgCzHKskTcBE4G3Ju3JxGFV1w8yPe3BALd4ZUPFQRViERQdka9swxwj92FxfHb2VybgTqP2FagL5PDf73",
  "key11": "7KZh7M7DmofxmTTWbTdkySF8wMZ3KPsqUuFWKYAHqKUgoLwdp5x2A8xYHQY1YpsxNZYst6Kni2PtwJA1kgXmAZi",
  "key12": "636TY9wgWuV3S59ufYqKZBCCaoB7k3mPYLnmak9CbZHtf6nDnu9Rqsy3omZcXZFq3bHrCaBmL733oPcRgJAm6Txi",
  "key13": "2MEZBKHwDs2DUtfJTKqsMLksLGPLnX2VmcbGJS4xMAfDcuP5rD5mvEADjMV5oov3zUZ25b8XVHsZd73wM8bqkZt4",
  "key14": "8fftfv7JShiHeZfJ4opTm5nqm5iHWEJxvXSF9sJ9KR2DbDSXyX4WYybMG1dKHz4E3wEbGA8qxqWvndj5FbKfU6S",
  "key15": "yTsEeF3EWT6CRKq58dTXjiunkjDbCufnwtsBbxFJnPd8b8adkRxhuMPxriKcv8kGMy1aGfSYpcYAzkT5SZHmBeD",
  "key16": "2RmcDNaCedFiorxYLNkpeCcn5TYBqeo9kTVB1Vryk6DF72UPJ5Yqp3Cyownv7b69zyztYSEVtDNaEpdtqs4D9iY8",
  "key17": "4ThWHrfAmTXjJNm2MNXXD9MyKJxGjuTXNyuuTvaBHjLckx1xwmdAseEv2w6JBnPQn1S5FCesG5bv1rinGXgSLcbK",
  "key18": "3aS6LsjBsZaUkzF5SxjiTLPMQrb8u7KKcpdGM4jvzsUkJTYrCTB8a8mvL5Fb254nWFrLF3NM5k7v4xD6eggRTAAj",
  "key19": "4ZT8C9Ew7AMjanFFGqxqoiYDYQDQF94F1zWMRy3SDMGpujuGzvckxpitikm5ZTExKGKca6oJk3PJMijfdVrQof9C",
  "key20": "3NakFK4uJyd4vyY9eJ99qEdEWWYpvLHzW2g9YZW9ff5FCCWAnrVDc2uWwFkit8DRPTFZ1gCjMD6wrFek5q4y2wZb",
  "key21": "csw9z1rPQVvD5URaPN7YiFnJCcbJp3R45GkW3SeSaXbUmvF1PZrnVfcBU51Bi7QuiTY6MVoaFQJGU4KPVwkTkTi",
  "key22": "4zRRfp3DhBh85Mhbw6vhzrLYMdnSk564KX1xr29wrq92ynhuyCL18E2cTMgKWKQ1ZZFiWU7K5GxEyHMfyB61TL4M",
  "key23": "53oT4kf7eTWk2amZ1agMU2dha1hwxgxuDCyQoVk5G24x9cvJkdbsPnWW3WwUVVDrsUdJBvjfNgG9jnXxroUqd3z3",
  "key24": "4UHmZutGyfSSZ5bLZucHtAMet4VK4eRBxUfLXts9UB7APVWB1CKn3ju8UERKtnE46zdMVMNFCyDRrVZ5zMBaQeqn",
  "key25": "2jafbEufeFMn3tBbBGbrei49Hbc4xCCbiWCSGEZNSbSrCFHKq44KifHDagytNmSbYMW54voBzKcEwiaGsVpJaJbQ",
  "key26": "BcS32wRy6erVjposB7KtPM6EdRBmAAPYnwaH2XC1jfSNHxPZmAe6FTs6DjGgFHNrNxZ8cTtpNbdY8jWTbh2MR8A",
  "key27": "5HUg9wKPLpsrvWAU4KireUaUyyVzeRoacBbBisj6denExrLAru43s9BtANUDij69Udjd67uAHppwz1YsrUrNnuhQ",
  "key28": "412rm6BgE24XJ4gafC7HMGe3UaUFNRLxwphKLgSpRGCAAkeuA2jmN17cpDe2UVQAUQVF96FP5MvLdixGBVz11bb4",
  "key29": "45T4JLVa3nEhcsNtKio17KY9WqbEtJdnwunp98wLZ3bDtF5EumbQqrna7vLxRNbFrHdWRi4M1C4YMw8RWhcVYX9c",
  "key30": "2LgpsbYR6eJ4BR97VCuwhHnBge4B9e7pU95K97AxRKkY6Wtr6zskgpDUM6hDX5F3guyoLwyNR6vFU38BoXmY2y3A",
  "key31": "5Zt12WEwbG54sbd8Q3dtN2UggkW5yooEBcDpK3eLGxNF9UvrChGNi7mgP5PPGNTSWRhtNtxutogiBjJhtoaKS7go",
  "key32": "kd62LExY2QarNeor5BCoCfwQVKhQh46vFj1nohVDDqzGmJWEVpWRMUvVKbGCTNEVASs3nsetXpLpSWnfkGp1hbu",
  "key33": "55eQnHgdspGcu2KQXgZZiT6We3PGUfrRJF8EMthSZfjndr29Zh1TaWabaXzVbHCxW17cpzCJqcD8QoM5FaYeaPav",
  "key34": "4qu9m3gWAD1mx4CKUTmg3z9dMLH1KUm86LkPZq2WVec4q47aXuuXRJm2pjk97Nf2HpX7e44yLih71y9EMHuSqjtE",
  "key35": "38wxYHkLUasr6GWijdGgqVjhtuZMBf85HRdubo4WaxVdJLhgkJYC5tuPaNdcEcUUcahtJcpcge6aNhVhXddGUMpK",
  "key36": "4Zv9YKAWNW7tRVXbkQGrzrEnz9tFmfJWH2Hd3SrUAtpjPtpwRcj7DkfkNzVrX9DiziqSD46MpJJBmjWLTfR6Snab",
  "key37": "4C7hyTynoXdpwQqZYtAffDDzSnEyFLaiKRTbZv3qYYw1hkG9jRbkV8BDM5TvMQZFWTKfmbL4MwKRitQpGwSfoVT2",
  "key38": "GqDv11kFf4GUyFWzuq93T4rtsf2UEKK51X8U6K3VJodb8wBU1YTfTzMwad3HaQnFmPKyvY2dAFyN2BuHwskG9Nz",
  "key39": "5EtttznjzEDjqw8hxiJ199GB46sCRQjTVV27mh3vLYMP9VokhC14qSK8iWD4vcj2xvpEs2WQALq3NWYbUWWYVZbg",
  "key40": "4voeHtVcEM53y1ziZ9tLuwA7QMvQGWvwQRCj1zE9mkFcXoaZhvtUdYgMgr7RVPquNsLjPQKkBjPXVi9RU9Nw6q5V",
  "key41": "2ijGcFYsJrqH1cU4c9a9cnGdbevRtFjZabVq2shc9HtN1NWBQivKXDJT4acBrU8EVxXcr1RjKVpeKrRqGPNBXJzx",
  "key42": "5B7HTNd6dXMYwD6mTGeHHLv7a2rmZ8HKTXVwrP7ecZy7zMYzY8NrJyDYxjuNcP6epnSzEQ6yuPsfNU52xVKHDZpV",
  "key43": "DnaGsCpwsoJ1GdYseswKTrp6UDNAcpgiiBQdyThX6uny2J43F3QTKeQcJ2D2D4EV6QaKZ996UMrfCEAWNn1LbhL",
  "key44": "2165chva83tci2aKFvykfKhnck8LxZZKdiYkHuhg8NbPehk49r2RAeSfBRL3ECYEfASzhHJa6ijRjDMKjvioecZb",
  "key45": "bHhYGcXbDBL1q22YVvBxarFqjFfwfgQsueToNDAnSYmjo7iK9Ecf9UapqBTFhAdKQBS5bDF1bNbKg3hhyhNpNWA",
  "key46": "4Nm5py213GGdcgKaZWkN8TfKnfCXbRa5JkMnP88ijwu4V2HtHtuzz2BQ8KF5gpz9aKCsE4XUdmF19tsQTaVJntDf",
  "key47": "4utmbzWxdu2Fo6LRtBUp21hZ3bKRUyq5HKVuxPFQ2fQQ7H3p9nDxFda71fehGwua2T5omQ6cyPFpu5Gf8hKSHtuZ"
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
