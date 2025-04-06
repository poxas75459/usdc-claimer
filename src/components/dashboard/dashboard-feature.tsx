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
    "5RUfnwVKg1FQPaPKxnGDyC4hU5aZF9hDHFpF2eadwYTbMsCmCrUimBw3rEdaSTyBKWVCmJDrDuF6BbzZfYebKSvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VfrJB38jYuZmBW8raaCGVsLmk6iXpVDzDvVZh68czFgY4tzG5kunW5pnaNKTKNocj4789YvobS2T1qets6KvL5r",
  "key1": "52vgErETSWZg4o7YqfW4AgwDTYfk4f7oKbfMuNXw8rbZWMCmKg9VebmTrDApxHG9krRUzuynK5xCpADY5ha2q3z6",
  "key2": "49oKEx2zAfqk8P7CmF3LRs7r684m1SNaxo7Z3ZiovJwrF62DR8NzbJmoBbTY1AeMs1KNM3ovjfFb64LWfLFA7nmQ",
  "key3": "4cC1nQn3facSnDMPfd3Q1NnFvq9qis5hk7GmeSWHW8SjhDgTNBWvUGGyy3dsihRtSLmgG2jExXpwaE7A6ge8cALs",
  "key4": "4mDJNZZRTDCnSsPVLLdmxToSi9UM4DrYTxxa8ao9VPW4MVj2YNvpeqP4rP7odDNRF4QMtDS8MmKVHqA82Hn9HJBJ",
  "key5": "48ZjWQK3hPBUnaeNdYuNCtb13VXzLY7hk2YbyFyk7AarRwtyXECTsBSMVyxXuqTQqeQHgyjbgdKcJZCLNi3JF6Z",
  "key6": "pVFjYfzEQpcD6e4g4RGJk15m3xuMmjRLWx1fMPbxEaCiNdhWiVsGN1Hr4RkVq4HwsAXhPANQdEwnRP4mdGNF3uQ",
  "key7": "56pMLmkRCJx8w4wN7h4dvJhHVt9bdgPmw8HavMbaYkz46sXrw4JyGiSBhxEwrggvMFFxU2NevUvcT6zp77i2qK8g",
  "key8": "VHpMMR5dhC7iULHnrFXvTv1p3avwdEwbPuSX2SXBFV6UYqVJdcCmXmkS9kbntP6Aqkr5KAmHJHgd3sFYJDP5hLv",
  "key9": "4BoNg3dSNT88NzixSMTqZxWbhfSTNKGfM1FxEhLwf6VrXCLiio3rgQ6bj1Ey99uApuynuoSe6w1J6hgPQpXN77de",
  "key10": "5NCMH7N54Ter4ieXcCYnhidcnmTzP6GwfrjmXjXZgT5ektPD5QV3teTX4WT62oeJvTHEig6YqjJbFJc2QyY4cHVZ",
  "key11": "4D7gR4GEA35puKZ6btgHGghn1aoRBJ1zXC5A7bzZX3f9dgAxsMChWF92nE1TBPGArqUV8u13sXwLNTMP8GuGBzGJ",
  "key12": "4xpmFf7nWBH52W3mf5pYgbGvN1NezCCFuaiQiqgT2dvrtXRnCNLSbr1orsDTCB9SR3zpU7eHgdoymXfjGnkuMLmy",
  "key13": "3o6EkWbEYu7Hg5PXFsG4tddRAvBamNRGvQEH5PGiBidys8TeUwpDC8xmogT7J7ggW69RwBCE5JDEirfoTcuj6Zvp",
  "key14": "FH2r4Upe2TZ9vhPf4odcbvGVTbNhAPMnVg72CTEb7eE5GgdKYW9cEmCyHn5chgj8z9JTWh8jRgLyaUdyKA3qpzV",
  "key15": "4aJL8q6ajjrSHtwgcQa6JykoPsKRNVTieec1wu5H5yyf7hJjTodr6gc73sTvnxMYKB2qb4W55hdWM5cgwz52vBJ4",
  "key16": "5LtEeGb6EBgjbYB7dK6Z9mEbdVXjvEcA2bfhsKAeUXWD1ZomhxEQeoMD4SyfArLp4MhYbtB2GmoXJb9HvzmnjPf5",
  "key17": "44MomfHpMeye1YLuerbNiBudGaT5J1a3QXmg1dqSPRNn8AaBVkYDFNCHrjz5FPpSoH5NPfKkr1iSnFQB3XUu4Uno",
  "key18": "3aVyC4qtxmWfEXRtG6dJXY9NkSAXTUL3ZXaGu3zR3wdE6LGXBz4GaRVeRHQTmsNB2E7SssLXJMEy9ncxzC8ERfzo",
  "key19": "4KmveZWFEtjU2pYEvdtCUQ9nSovvHE7UiR62GsR2D3KHF3M1ha9j2ECzcHEBJvQhk3huCg2BsctaUumYJiqudeV5",
  "key20": "63o7ntQ5tr5KLiZwtV4PpivKuqEgVa2ScvFJhCfuLaBDjeTcxP5EMSxG8oMipM2s76Eq3rRCPozRzSKEm5W2yvET",
  "key21": "2tT2kRAWabWyoFFqEs7Z8mQVxNDVvtKji44BbJkJmNzUjjgF66o1nz7epkbyr42Mq9yCm8LsuPo3s1fdhm1yNWQr",
  "key22": "PgJMcDcnx4wqBjnAeqcvrdfPErXcsUxZENA2VYcwkwtbzSSF8skn4VQsnqCMBZFKcyyicCVzHc5i5xxzm5fGmkw",
  "key23": "21dPPX1MgqDezCKkU7E1W5n8HFjmRZVp37vPRKjyQyAwj7pg6Arf53hTHJb8Zfszus3XMs7VxNpkX1DbkKp74gby",
  "key24": "Tjr81WaSdRJKPedX7NQLmmYANoP7qj9vAk78Ne9JBLP73NDSyU6JsQCrfjA26TnbymKQkPhfSqfESRDQnxCaPcZ",
  "key25": "dbYme9Z7H3ChbJyfj4ooL7r2tv2X9f1is7VAm5RhjHHMp1tdEu126YbJUMJ8EhKfEMqGQV56yPkVvFkzGTGywWu",
  "key26": "2cKpiF19oebtkqk9axLgGdD6nzQzjWWn1ZZEqGxhR8xSRHUaqeHbGamCF7HQtHhY2B38zD9C2yEUGcCkpxcVqzPa",
  "key27": "2tGGKRS6CuheYGuBPsTSzwCw1T6EJw2S5hm8XYRRWi8X6rsRagh8QpQg1Uau83WwLnBtA9FZhe5dFPDiGugc16NQ",
  "key28": "41ZJELCqCnpFPRxqr3JoMpzz9YqRsxSt9tvXRoQ89bACSTYYS1Fhf4Q9DpB4Gv39kiBVq6ifFAUSQ4HWXssVBWto",
  "key29": "3wHNfyAt8d6h6f1CUBAHnX92sVZ612yf74ouogoUtcCiENFwWEt8LUsibmShCDqd3hHhh2XquP2rfkFWezixTAUB",
  "key30": "3ymu3juzFkwEKoyiqFNFAYnLB4doq9hfxQcDeCVpxojx1Y8BwgKwYPVo8DoWn92SCPidC38wiSzWsXLHmUC7DxcV",
  "key31": "3Rg8ozDs8Bp3Ue3paYgFQU2B1LjSFBu2ecDV92836fXhruyTq3utjjFWkjcRrqCLLk7N8RHKxVWMB1MtTnxm3c1u",
  "key32": "4twUwgrhe1LEtcd8gU8UDN5UE6CrdDZeKt9hTACU8SxCEvqA8jVRRRV4ELT3LXxJrk1ctXnHCvab95D3fnxDSf8o",
  "key33": "kTo9UZunw3eq1bkVvx9G7y4pBxJkPQdbydmhLxk4VPDVMAwQ3ZT66Dy4WgXfN9rpDWdXYTQtVzReaCf7XHt3Lsn",
  "key34": "2Gub651LaEPdYD4soypXzb6hcsh6nQamv1oMVXbGNzfFfctqCCyFvVyh1vTHzNTdJzeg1Edf827jEZLC8iPSZLcr",
  "key35": "3GB89mwE6smbq73zFthAwd1dbhM4cQNWqZxX3jqkWU3heSpZrYJSHujdRxrCSiGdG9r7EJPvHAYQJYBujKmRAj7",
  "key36": "56jgDnEhJmvUUqHDtsN5VhqweKfVfphsq5QRCUyaqAsV2a42NKuB1ZAoB4hoz2iAZVvvQY163MRYkW48S9CSxnfj",
  "key37": "N2AoCkshJGXMTxMy5v2o5GsCEGV8sQeMjkpQtDkvGHMqBjpYz5nbrKL2ywLLMmY9ViCNwGsMaivSFtvwGu9fksk",
  "key38": "5fQebKcgsosBk2wj4zdidMthWh9iE4YPKsDbbw9dteK5sjTSwDEqReShHWXV3Tmr8Ah7567Fx7RWL3QTj9XcLXDJ",
  "key39": "2d3VHAmf26W1AdmR6b99jNcQbZKjQ4iQHoP8Eus5sxt1uNbmKgoXrTh3kBsYvuiY5F831Ugk9KxfcvfLHRgVKFHn",
  "key40": "2dtovbVTNkCZMuF1A1mEzVbFavKv2mPmnBqkFquKCGder25kjizTNrEtrAgXXTHi55Q23L7eniRQT27sYzRE5grT",
  "key41": "5Ywf4g5CcitFTvoRZxrM1P8Wx4uhpAmXJFwm1WLo7nYaRH2ic3p15AKxuKAR5H82pHM1YSYm9EPK7jgafS6Vhc7R",
  "key42": "2mWKxBkuxrrKiTCzJw1vpdm8TvacBE9KSeYZEevjsjyo2eZWUAcR4tBEDPpnPnfy2jPQxnHJ3JHpqZ8ntqSbmhWp",
  "key43": "3gbUpwA2kJGCiR76YKd6nRK3QzqXEnWDvptvzChnr3kDicUjKQ7Sbp8UM3aeMWhLhxL72uXzgmHF3QhwDL1VNNdi",
  "key44": "4ftmRC8cF7jzbLvS5pWfkdM9FsDoyS9A6jE1kScAW8fSLvZybT5FbBKRDkZvot9Fnr8gJMyCHrFF4GJXTiU9fRMZ",
  "key45": "46qLcrFZowuMsXHS6zgYg4MFRZQQxJvhf6M7q3HmCRhGnPuBU4iouvPSUk3bviCTqA4ZY1uiniDeNkpXqWDsPEe3",
  "key46": "z5RS3nfSNBAaP7X1BZfUmgbnB7wkdmp5gftUVWFBcvNmjWQ9fnXZQf7ZRF6tbRyJ8uW6yFG5kxsS2qVxHsE4mzH",
  "key47": "XZZM7CAbhMvRfC4H51MfZCaficb5JYJy8EVNfKV5Jgct5wHsLdM8kuUCYVYAAuDvLxJEPyq1TUQiiTFrFnuDtwt"
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
