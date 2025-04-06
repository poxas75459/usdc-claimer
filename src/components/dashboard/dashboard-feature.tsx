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
    "s4bCUrKxMUgsFquFe6Lwj6sVtUuZhUsiQjBKC3ZWcuVGkTVTCbph7kEdsHXPddS2WFsfs4hmqcj79Pe8uRviSXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sG4qZD9RzTQbAdayEARYffJvJa2rMwHejhpxmnhvLYbLVu6hp54ezrWG7URnppRBUUq5H1tyNdEtY6wP98uUvTM",
  "key1": "5Tdop5s7vNX7NZJUzvor1pCNSacCSGiKGjuxpwut3bQ1V3Lz79fzsVPgDhrng3FNraBKFTYhkU1KpMFYB2e3BZPB",
  "key2": "oeUYbExrqfCxRwtkmTbhetQjy5nAS2XoNA5wSoKNv2RCXfthUi6CQn34rxKJK3PeS3zqMXWyhyYLG3zseGZXGLU",
  "key3": "5z6EcFEogongSwzXWfJnHzkjjBf7LBZ5vpujYAVuJsgFmN98xgfQTRnSPucoPAf7aG7MGjabtTNXNeqxvTcpNoaP",
  "key4": "5k2hVwqRmaL3k8791JJYL56cxe8oLzXmtegC9VwRkiUmvek3BV5gKKE9LaySUFoD94dgPDYNxPL2nXrr7JPEJGx",
  "key5": "2M9sUeu4EFz2E7r2GCR4tVfmW53KayRErUi9VPdWbGVo1jZc1khxeVvJ8W8dbqxSBuZ75pJ9fhBEG8qRZEtAo4Ud",
  "key6": "2sTFVWQZmA6MUxN5ZKZefyWJ2xUGpwGammCu483dq8GEC4iUXzarmcndX6CS2pLfjUjCK3JQWQcRiP3SQ4CWNLew",
  "key7": "3UxwMzNUwfk6vRD6spusbysxmiFJUUB2LPsLFmYHdzTxzMk3bgoDWhkKVpDvSBcJ9xNm1XhwrpPTzP1kqvXjUPxy",
  "key8": "3uphK2NMcFaYEfHm8BsKrsgh5hY7QqPsPijJeSNRLrZxnf2nPWTgdBZczgWnUdpqjbd7tZVmBPnRgZtjwASHSmQs",
  "key9": "3FFvhpGwNu1wVmQsWacboU18KgcjR4TEriHvTBx3JN9aXwRWan7c8rxXvGYbc3JvRjZs6vv1cmmeDGo9VU3bGC3M",
  "key10": "5BsRm6apNv3LFrZf8mgq5dfUkAfLJc237Lmvjwn5gD3gVntaFRMvuc1Cd8xnWzoCeHFXLsAYnmiWz3vHo93dgaQv",
  "key11": "52zgi2rZCdihbQGxtgkCp4ahC8xuFpQA1v5D7a5AcXaRsox4R2kva2sBSbPrcq1ddLwRHY5JSpyXYpV8y5ewVJGB",
  "key12": "5d1JCPYL8b8pmA45WAmG7JvwnTDPQWmx2WNKbC7VS1RdVbrk17ruFQs8NAvLW87ChTCkzSRynQCGhV4PrWhvSrPQ",
  "key13": "BRx9KB14hEc4hFmqUD3EEHzKoU3GzP49HAFTJynoLZhjSNVzpvrXghXXdrv3GAjoQHGrF2Q69cCMKTwT912KoPY",
  "key14": "gWDXvHQVCwciY76UxyBwEUFLXEhKf8ATTJoqPw9uun3zSxHw4KKkh8xeHpBUJ22ELKyixUx5ano1j8sFPs8uio5",
  "key15": "5RBeNLrbYRqfPzq5SSrF2SAU4iKFhD1dkXFv3HpygM4qtUS7tiJAQyCiv8UKircjJuyn2aVYbKfhH9r2pPRKgETt",
  "key16": "5n5RdWUNm6nYXu2vWPFY7iLwdPr6t6jFgu2KCiNWRwDZiSYXyAhZUX644Yfzgqz4FqPSAybjJVMgcfYjeRDPqMiD",
  "key17": "5vNTHXwyhPhv16KXPMQxc6VnmBJvUdiJExZbycW5mr9AXPGz6TyfTcQQyd8k1oLCGWxEJeKKWc8BFpc32GjTFT32",
  "key18": "3BSnG1Pc4ZJD2kk9c5RJ9GUnunC4QnCbonU918iaFF4eRe1UvL6gif3S1brYtQUnjZjqM93xLxfyEUq2Mtqit9ud",
  "key19": "2u2nTFcTBLyLyfXW5LU3Vj7wXHWZpEvuBXsBGqZP2qmNwD5PvVtyXw1JUs2ScJ3ScgwszEkAmMrNBS6zWsABGTbv",
  "key20": "YSL8pApRJY7fS1NKA5V4fs28uDiAtqaihTc683PxmzxV4WsEVdMRCDC9pkRbixJbhrLSMBw2ryfsB6HmewwigJz",
  "key21": "3kc1j7NMGL7xq9hqodZdagMigrUgFYAuf6ydak68baBipCJzWyFU8fkdULU5fX7X6WuEdnHQVmoKxA8xdyx7ueC5",
  "key22": "3pHVwazyndg7t65jkskMFtJ4bXapbqcEjkoWDNaV8kn8jmNTMphsBjTZRYLm16QWQcx8dF5ynPzTYr63rUfGXxzE",
  "key23": "21kjehZgn5BpfM4WjfEJ7apDzDBHnH71X6s5fAEGAHcGmE84K1qFzBLU2eHGYG8am24xWQydMELsddgGkLdpdjhi",
  "key24": "61o5Lz4ZvnGiQWypnLob1P1K3utGhQw6M7ren6iA6Ua6QAfPpPjU8q8uoxZgzd4i9g1Uq11Qk47f75338rGaLEXY",
  "key25": "4LiGtsq6hn6hJrRMmau2jjXAoLkirtnw3yegxdrGfnnfjEPddAT5KHB9qtEypFzsTVUjRHoAwZgFXYLisqpBijQ2",
  "key26": "28zdZFmhv2Urk1RH86CDJtKrKC4JKZxsuy5H8iT8oZmrXF3zEvd4UJEtFSgsTHHrTfvFJ6wx586vcTYJjRpyA1Mq",
  "key27": "2jr5jHCxPUPkyuSYs8LCZRUbCipMFkzqNRDRogbfEBqRahLQU9SgumLM2iZmFou35RE7gcn893qkDyzDMKfVTrvD",
  "key28": "5uhG1dHzpCohhnHu7Gm2GBCYniJ4GpLWThzgNSsJXSVY8MxTezCnckwoU69AmWwihM3pXL97CzsBTaVcq6vRGC19",
  "key29": "2RXodEsJPTktXwsSfaGVx7VZRBNoELtsqKa6EEKBAWtTKajnYptedkW5sToLDU4bDr8WP1uqWk9Hx9Jsy6qJcf8G",
  "key30": "5x7Z4E58XUNcPsumbXKoAmqKhytFMpTs9H3FSPhkF7dv4eFVWdB9oyM7xndJpfxkAyPFFGiohyguht58ChDx4KEr",
  "key31": "5e3rrjsriQgSd4bbAGrPEUES5jpvYk3zLuAyUEYHMazAFZUbAqGXjDEzSLK8caak7YvpeD3F8R8SALS7J5H1r4Zn",
  "key32": "3aGCjSuD3oCaNLSnCeXf66ecuuRncAoX8UWSvriqctB8xJrj8LUxMkPfNNhomkCUKkvBVtKktmd7RsCPSSH3KfWm",
  "key33": "4W17m6UrtdpksZLQ5pbBnvaicT4atJw59WXv4zkpGGBoDjwgGygz1ZqcUoKrUFR1LYq6bzwi7AdWXDcKGfVPj8WR",
  "key34": "9uwwGRzY1cWYmSukH5rFRe1XGPfR69bLspj6AU9XxfWgh792RmZMc9UGzpgs9UTWJq3QhTbU1tjV14MYX1Gv5pN",
  "key35": "5pxRp3Npr74VbYf5ZRXXvMGEhbtM5z8s4nfKjdcfcsjDNF1mvu2wiQpyEpH2chWu16hcwgBqEPjpLL3EQRRwFCpi",
  "key36": "5XPzWZfxWVrS37pTgyc2wmTRv2TnMjdMULRCcAWEnNsz7bgtEded4Qz5FaTU1PbrNU2atmgqLqFiY537kNiSe45B",
  "key37": "23Uaa4BEZUxX8ZuWccvo6n7FH5xmDGt7tN6ZRrVsfhmYUMLNQNRd29YRPb6pQzyxjyhJptgbA4NnwfcMfJoxuGdc",
  "key38": "5mkZRUQ5wm3pKW13BLWvXA2mdxbRiUaeoSgXjbhYkEtZzAFSE7AdduLgHGA6aMrifR4jaGd6ws532ShNHUzCyjbU",
  "key39": "27DW5Cpn4EUZteVL7wR43dcE9yxATUaPr6rrTiUY1R5Pcq6ZLy6ewUvE1mdjAGEQEEq13xMFjjbatuLHwXUjRzrp",
  "key40": "5BEj55gV5EFMXBC4G1MYJuyeGje2DJWsKUTJs3hpEKVbsQtnqvWKzAH6WtXL592c7dJq2cEGjaLu9pSdfvJ2RLZ6",
  "key41": "YgTSecoBoYwAzHTF3ixCLWpdJAdeANWkEBaFet4zEgN6EtmJXPTGSw9M5AQCr2iwcYaFaDbmo9FEtVKLHdMcUkJ",
  "key42": "nUyuQW2oxm3X8TV3VtAC5BYx6sQ9RAHaoDAN39wmZM2K5frcBkCGFzt8eZbrFDEVHW3rCwwRQ2p2yiGGNnphcnZ",
  "key43": "4kMrMxGnH7Vo98UC2hPMsZqoD5hV5nNFLbBfHNgTaJiAULfYEbTqzxUDBp4cuGYgxnxPs1MJacnqxLYTcJwDawC8",
  "key44": "66sKkmGf63Y9RzxC2qYdzsyAiHzPBauoT1UnB2yugzgn8QSKNfaP5eHbADAUEMjNoH4oZ6Fw8x6s2g3Fq3Pg4Kho",
  "key45": "5Bxx87cfZh42nXM13HRrXjsmrwfG7iWi4eRMqJbUb5uxTjvFaa14JAs7BaBABe4sE8EVUNWzAvWeCh1TxcTN5gB2",
  "key46": "yq2U37iEBuegaYCAsgdPwTk3EyspYF6yWRtj3Z43xp2K9q1oTTK5iNaDnsGFy7hgwubmVN6CPUF5NAiPf56Azzu",
  "key47": "jY9mA5udvGJgDZ8VWxX7MjS9UWU5nHqDAk3MwsMrnH3WG924sn9E6A2ZsLVT6uo2N5vtf5RpvCVMAk1oUZPN8WD"
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
