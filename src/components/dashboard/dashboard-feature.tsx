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
    "46P4Uj9dBjCiCaFWcX5NfggY4Y5W6RPWaqDEztLJmfTAjFfzx1asnULcVJaxVZs9x1arKPcyZkSymRVru57g2t6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xz4e1EW2hu5jgXcCbi2c2PXGfJDb6K9RRivvTp34yQeMtHdtRSyYuVnNXwRDFRrkY8nTna7AWbsBSzwmz2bP3aN",
  "key1": "5Xo5H3kWdDRCyu3HdkQqxGmhJDsQASRoe1yjAdzYbKNzSCcrYJYtgEKAH4hESaAQKzz26tEvNKcoVYAVVG5Jh3bb",
  "key2": "YYdNYLzg98dfGydD23U13Vrw7CHZySnacNHFuqs4ijAewb57egsgEBDrnDkzzLghGkVxbnZX2Zas3u67L6ZLQQ3",
  "key3": "dh2fcWTpDxA23tMAxyedFop7g8VPVc9rFzxTzDB3qLEdQVL6af4Mq43WSaRHzWZJ7abnXefLjGFBMviYDjFv3UR",
  "key4": "4wGKgRHRcLLL3ktA5u7nNX8wdCkrCK3SzBf1WKp7ovEeeFb6h8c8J3DXYH12zf2r4Wpyt6vFUVGepnFRoYBGHfsj",
  "key5": "2r3M6u7reQRbN2Dx5rfkCo1BWLb31uaWdgg6rMsRNnASzX5w8XgzN7KnqhWe8s8t59yXEPcYCcJAuUn22wEzQ1ks",
  "key6": "57yzD1HV1iyvALP3G1MpGC7XXQSnkU1X1UYo9M9aEXAkDbmbLnC65GpuEKvbP7SZvh7DGtrgUSFTKBg38B5q2aGe",
  "key7": "5dT9LeGkgDaBJb3xNo8v2Ah5XTL7SucMwTukDJjs2Jsyk3c8cfhg6APvMXooUgYHKauZ845Gp8nh4T6TWZVbXK2k",
  "key8": "4gucN8NQ48xauevLLCdxTN1UWFvhYQ9bB5ttRXjk98hmSYg4BYvY21zdJnvHyYpgvcSoaW4nv3yQnY5X9b3yWccX",
  "key9": "4aj66H2MQjxFQEYGj95qRrdR71v9CdaZKDGbXFKb6q4AbXx9BfmpZMHNwtdPyvtyTDApiy6uhumAUQLjvecDFDpA",
  "key10": "3vLK2XsLmJ8BPZaaVaFC8HGxShZDCFNKzHvG4MZ6TKBukaK3B2ejDRrUdjXtcEnZ6wEh7QJ2GhYrRu8mBPBpQNxE",
  "key11": "ZM64H1nsgMuRvzbHgLz3j1hRYG3YvDgFSsYrtDWNbMHmyN2WuPFCJBF7Fmcw2gceUkuKzSdkzVzC5jm9eTpK6Hc",
  "key12": "3JtZhuntheUgTwhejcQWYNgJ1wiVuyXAfcychNsArab7ifhUcAXg6BM25KZ4hSvynBC7FxykHVjBmvDQ1fqRudPe",
  "key13": "3xaTALJUbmrP7ghy1xZDpR6Yu62fgpj75VKir9yAmiwf9MJFWew2iVDYRkcPHeMD6VQEtoXwJkEp1Jwzk9ch5ob5",
  "key14": "Y4VbMv6efNrT14pjsq1AGZoaM99FWAwDHL7MVETQ5B6iQqsapuifwpVJXqbygiSe2K5E6PCWw9tZGB1RsnT8mHQ",
  "key15": "5MzGAwQJySy1WSAuDMxyfg14Vb2bECcJ3qjJkzDeTZdvk7s7Lu3aeKW1kCc7X2vv7yUhZWgG6jb7CE6i5osGM4vJ",
  "key16": "2HipeSGnrn2eVcAcBkncyUuPvA2WQZUKgfds9FwQdvZo6QYyC4ngVsoXx1GDMnYUq45ZyAPLsyRChRmoM8zBiV7J",
  "key17": "3Y1dYGUSo1kXjWKTVGmiLV8p8eWqvR2uj5Z2yNaiAF9w86feK9oCUm1jffhTmeCTzkfwbgtKEFPzB7Cg4j238y7W",
  "key18": "4BRtqznBAbKDBSupMVeAK9qm5C5sBe4NmQtXwb5QPupkWkc9Eo3YG7NGz85fJAzrM5LkmF28CnhPqSufbT86H2nU",
  "key19": "rMvrU2KSa4cXzXeJ1i7bV4KLWNrUZBNJ7ZcmXu2pGeP2qrrvrkgxsFEYVx87E31bM1YGJSos9KRFD5opL8cTcrZ",
  "key20": "5t5omrZrgmJnjdgFWxdzZfN6dFUBfmPneaz8QFEJhu75KXgnNLygK7J6aVijWAA4CJ5mZT2wj3hzMX1UZZYe4Lkc",
  "key21": "2Rpk2hcZ6zKwL5dhVy1pLocX1SRjNLKD4uXjPDDCDJ11aU7GH82QjigASjpjXY76BZD9EemLwQreP1Rvbvi2x6Ws",
  "key22": "4mATFq7guHejpQnBCbGoGVFzgWKdjWxtbEKomif1GZkUsUa6Gm54czzNqHx4Y6ehwKMewc6ueZPsgKccQ44rsUuL",
  "key23": "3RkAdeZWJ25kxMtxk3MzrX5snfode8iSLvPFzH9GH9QwxiWhqByqejci9EUjVmxPt1f8g7u2zY9FzvnvZX5qwsqt",
  "key24": "4DkLzVET3UcQrFzUGAN6gBixCgVpgMkbHUqrY37ckcTeMiKVP7YFcSmzm4UymoFCr1D3vxMYo8vSDDM18ZeBVnAy",
  "key25": "4qhy6cQ3F4Ns7rkvwKpptofWHnywZjrFSuB5Yq7JDyQZikuMauzh4Z6u3R3t2h1oCHvSBsppEavyfa2sfDTvyBDn",
  "key26": "5UTo3FqmpAjuotRxrWN1PsGg3e2b7Tr3J5ruqd7pHudjcr3V7xxZtLjyjSttqNbmTcUqqdADdzpGeVee25r6UgjG",
  "key27": "3367iegF1t3aboEz2wT1fG5PzYVRiDzfxvpUajs2CMMHEWpm5efZQQSUKbjrpe77qNLTXnBnCYdXR2GuyXfXr6hi",
  "key28": "4XSj9Bo792YUWw8StJpaTfqkV9bUVbJN24FgqCZ43ivBzVP1nnUgDyHxbUPJgeL7QVb7Cmoa89UtQ1Sx6VWxcKSy",
  "key29": "4ZPT55BHYhBbjqv6cA3T48VDR7bqnZ2hKiUGQYYqSRVf1zobLcvM1dXzvTGthkNKPg5VoWicMmjocKiHfjPUUb73",
  "key30": "21xqAQq4pqFJ7kmmCM3LqafveFoHipHCjetyjagNrQBAMSzH1jJNnj6eEoyg5ez2djdsaCvUvToAVfvDqSoPcWQg",
  "key31": "3MFEcNiUAQEMejzZFJcVaSfTotDLwevY3xc69bekxeRnumY6Ki9qcQPMHoUXnWFUBkmduYND3ZpSd4Vg2uXR2HhW",
  "key32": "vP27uR2XLzcSrH9F8k54avKykawgYmpgCi4eKbTBmYTXctCKuf9e6j1rpXB6M2PAbRpAobUDA8RuPJCZo3j1d58",
  "key33": "38f1XR1phcDY9krCzaUqgnLL7TkAi5tdLhZNospcNusjTQ7ioeR7yxSRq7G8JXTpC89bnk6FGkk2p4uc94Y6jJ8m",
  "key34": "5ECJG8oHwhBqAMkkExjgp4v7PtSX9UXiJAa54gDC3CynjdfYpJX7eKqxUCd3sWZJqg1JZhH28n9uApcTkhE6b98c",
  "key35": "2KtC4f3kTCpEsw6qwuYMmXrfcPR3kAKE7dUWmGw3ZmBKEj8K6v548JYyYLYFEvv18ATCoCxT3JKN3974J8d9BdWF",
  "key36": "5f19XJm2ipHWBSLF9GBxHVQjeTEXPrS8JwjtDB1CZM8fawMGQ3vRty7CfcXU2jg8KQUHejsppW1PG9xGXRtChZGG",
  "key37": "4EwqZ5o3yTnVhpCvUjSRntzc1RGFWEMvHReKKk5GEVNZDRn2znikMmuUW9u9GGH8mmzNyhsYGXzC97R5cn34NH9i",
  "key38": "5W71zjSpv93xwqhu5hwRH8kYB1dBSUG7XTXWmm2xX2jEPEt4D8ZaTSeSd4348JodX8fntBfDuo9ZzNwRA6yBn7Mk",
  "key39": "4rARvnvxih3oqon69z5ecVAGAXLpSHvUdTRp3saUo5durdHytak67etPB7Jja2qHngRjS15WKR4kU7czFR8E4A3o",
  "key40": "2muuZ8YCkAXpNNKH2EETZezfnVHfbZKQzTPi4ENbx5Pq7pRPTKJbscET8QRWVmT42TKnmUGoguhPyquo6G6s7sYw",
  "key41": "NAd8vfNY87rstmfo2uSQSZFcbv897W3bmSVScHQpaFGMQp6kG2Yhefs3m2N6AkEp63Ag3mLnuwq9rFdvGS38TB8",
  "key42": "4Qj8CPgviMDWuyHUrDc1mnwCJeLtAbWvffPndXj5VNvgnpCKTpmgVpwcfgefU6uoYGJKdwqTKwN7ydJfxoCnjtx6",
  "key43": "KxUsFMnL1BZbE3FRDL2DbKg4s57UNQZMjrufSE23B19dLkKq2CA2AJVPRh3a5AMPhZc1MzwmPQTwjfdXbJBN1nj",
  "key44": "gefF31JymGwCeLHh2SFs4FZ1kV8cVS8gr5TVN6Rxiu7YhumaxgZiS5DKktPAkb3C5Tehuzutg6BbL17bNHpL1Yn",
  "key45": "5xpVVjY8MTSMz37pS8cqipiuEDNnNFANBrcgJPSTf3ysAkWdwDcG2w382eymFuwRbFfJwEJkHFKjV5gdUJF1kryY",
  "key46": "515TYRAc6jXFPmAuycdAZVmxJRPknFm2zEcziLK6NZoj9HUUa1kGJx3g2EbJ17HP82g3xfYNYsMR9o2uMDbbNxx3",
  "key47": "rKWuMncFUjRgBMjgXT1H2wyhM7YjkdzpojguV1prQWxnbWDCNSQCpBTHpMEhynZtrKtdTkWqGrhs3ePapfyzxPZ",
  "key48": "bFNzzXfpE6aPoreJ9dCr6miQEHJXK297odqHfATvGNPAMSAiCFAn2UmZ5rzSxuUUeV6yMybuYCvmLeyCcXCFc38",
  "key49": "2Be9DAJwxESstVjNR717nA6VkD4Pt2DAmo6Fz4D1m8du6snLXJ2CiSNQzVz6MM5Ge4PUP76LQbxjKLheATPXfuDy"
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
