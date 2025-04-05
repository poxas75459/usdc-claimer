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
    "2RKVSTaqH1NZs3JP18qVjLQXswuYBnG8eoT116c3ssxy6s1VrVmPXM1aGPRDG5LSX6hjgyjwhyTuWHmKm3dEDwJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rvPBzosdiSTrqF6dh9k4jQDhimjpXAXeLrktSNKyjJW8AhDmweEtsdCtsH2VZqR2Kg4D7GFowhrQpuCW2mxF6mZ",
  "key1": "5PD1uhM8U1uqRDREHSYrL8YXk1TVgv4p8oF8z8UvURd8ehMkVTvvxcTeRNRZAwuacvUonALWsDwcvQf8KUcPVkQM",
  "key2": "5bPg1Z2mnCxhZzcgXKU3tjfsuavgDnqCET8cvHea6Rb2i86TXuVYwCwK38bMKJtBPsPgqaqx5oXfrN84PuNYvBgs",
  "key3": "4RYXj2ZYTMuTGrJEkb7KUbisiL6zLH9W8Z9g12sxGNEHqYuxwNVRmXnpRfzvV1EUsdF1NSLWVcDDY4YLagw3HJ5z",
  "key4": "4iaeGXYs4hoAds42iGcpYswHttcFVxR3NZTdyTABMkmworZ9c7spFLvX6MJ3fGnToGepqBGJeop67HgB3u1Mjnb9",
  "key5": "5Q41y5QQtU37J8by1YZ3t2r72KfqUUAqh9TxpPXgyEnvjrbFctKxErXz78QDwkLVZgKmB5qEHK58A8oAuzUjg2w8",
  "key6": "4i22hXhwRcrDmfGRyr1jHKovQhGp8TJAfRscLVFn3oetZYvE2atVug6KhN2ktx4moJ2q7gnYDz8vr1PgcWPkdWwf",
  "key7": "5dXrLpsVSAXMdrDzZKm3cQtDD5UTffZoJPZyBPPuFMhBukVnbPZ3AtC1nHCMxM9TiP4HNPGxjVYeR2Wa5ui18NEp",
  "key8": "4mh5Z4rQaA5HhJncAfqhxKGXFKgC6uL97pVoY7KbiDNAvG5EtSsWUz8GrpweDUvXRQcERMji7ChDZyW1RZoz5AV6",
  "key9": "4uxc5atHvdzdn1F2vGB2BVJpekRnrE4GgUe11uBpcQsQmidXL166e5VydDinZHj1CFxgHs4EkpYMCN85dAQssuQX",
  "key10": "2FaaD3ZXAB6bsjJLyGeiQfC757mEGaWZmbW1uDCDXJMUsVJshNmgqQ2M4QkgnyW5B4TvBMjzbxLrdvjbTVrDHVxY",
  "key11": "WdZNGCqTR1KnpNj19xwFUvMMhwHuN7CLZScMH4Rr3dK4bUL4c6GZZo8RRRexhWBpgWu9by3ETnp2L1Kfn1WUqj9",
  "key12": "3FvB51bGMt5417jBTcjicFP98MVx9PXDHu4UfKQCf2K8NmiHxh4xhmRhzJWAEYfnbjkCekRqXs7exUpqCoqc3BUK",
  "key13": "4G9eptgRBv5wyhkuHPWydLYefLPWJtuSnMyd8AaugR1pec9TcQGZa9UFdokLd5HkFpLHGEjZjT5ByzqNuTUDNP5Z",
  "key14": "xHAkYp5BVY5MYdJPPEaGW5xDMLgsBE1w1kZf3gnDQxh4ucKgGG5nCkjJUtc3aheCtudWKoWDuezZUxJs1MxqkLv",
  "key15": "4szdoMv51anJm996MkBmm65kmtryfwHjNTVHot2eki1A7TC1b2S9FfFjcvSNCKkxXtvLKwJqnbraw2qhj5DdR5Qe",
  "key16": "wwvfUzPbSn5tqdYQRC9aWfY7Ef9J8zFgAwMG6G9vu2M3KduUTS2xEniYDirFCP3Q5oo2Cd33QA7rq3WbAQSLXbP",
  "key17": "3yQCKDXy9mDN5Vd1FakxmtoJYe8qxvnihQuDt5CfR5gQD4ixJX3jZaPhyU59A4WBPHPFioTYJuVguUaPSq32T6X9",
  "key18": "2CoeoTHSgsCzFhdEJtkt63hxktrzVkAiCGc7uSwyBQw2nDgwqGZRtQeo3sjrck1vCawrNdiD3tXzbCrpEqjRXR7U",
  "key19": "2QyHuEYFV93HHTXp9FFEv9fsUZviCxTJFsEZFyFEKmr2bQGwnG6VVmtyHdYZUMeC3oG453HMCB4ULtoJk2vZWVxb",
  "key20": "Cm7a4Nq5DHaA2a27EkUjpwvAaJPTscCnHrN2DVRfxeruhk5d6oSuwh8FbXSic8UmaJizdjyDW6Jmxia7mdNsY55",
  "key21": "5DpNbrZiAgiw6ijUBiAspLMAB4DXcayN8YR8emzZ6EzA9rijXnRRdCyFgjbZ6DR564cu8NvSwv5umyjWUKd8cmhZ",
  "key22": "4P56m9ZtGSrspxA8vwLfVPjSMTS5r3nrNRi13TMsAJs96v7wGqcPWi4bwW6xJzUPmcsfnMd4eCsfUmeZftFzYZrN",
  "key23": "3dJw1VZjZ4F67YSKjAaZmCSHsn9iMftvj1iSQaKyY5wXem4TDugWKWZSRAKouL7LpqWq2sHzDLznFrR3YmtQm8PS",
  "key24": "hGqdvnn8cxoaNwnDaCdXrVf4atq5qveEtCHcBSw6eqEdQz2mhJr9hqDyFSDoWr4WdPbk66PiiPKZmchBDfSgN4s",
  "key25": "2f5QcfxcW1rAwGWPfXB8jSaC6N1uVYknc6sTAM3cr8XUMcftUQKxNpYEDXTuJm9KU3Hqav9bPvVJBTgcGFhTNexB",
  "key26": "4SXCowpXCWWhrRusNyRVJLpR131bDgeiRZ2okiwZYRpLigG3LNj5v3DHG12KHUW6HbCbhPafgvqXauqNRkN3ffbY",
  "key27": "2J3DTqwA5LoU3kVMxkYYvq1N6egWuQFxrESmVecAUEnFBcVDkCUi3D5SwMPNnxmFs2rTYiWMHATFTDpE4iSaifp9",
  "key28": "5aUNSEyQJnyeSddUxp7z4WeBMYSnPVw9BWVPos5m8whXWgobARRcLZzXCzg78F8VSZBF2nhHjFJhYWxmFVB9nCuN",
  "key29": "3HP2iXpwgAKPvnfwqEucvetztRxK5Fepavb1GJGPV1G6WxM8L83U16p2mcapwD4Rtc359v18MX9wS8H8gVb4quPL",
  "key30": "46kvPej1XFQCiJUXonBx9mhEggX5zzrVTdajifuAZ4ErTLeCTHR87yxoXT3H4QAQCag2n5idve858pDhFWsoN8hE",
  "key31": "67X13Vx1ydfUwSCVxkbaVoRfMB8e54VvPczYEMt93HshdFduVzckxD9nidBEv6rE6PdzjZaWGSMPv6t8itcXaN7",
  "key32": "YYRA6HwrvzhShVgdNt1ppxeg1Yrw43mpLAbvJ3KkUGF3CXmNK9pZiyNBPw7cG1gJDKMpmf6h3aioABD9uhJLR61",
  "key33": "2U6Jjz9J7jL8D9rEJ3m7UQsA78tABbwyDZqDhwV7CF8ph9wS83yTduSc5ipayCYMcAqmu1uMQC6weWybT8rdDPKy",
  "key34": "43WFirDB91KWth66ARdzXyi1rgsCjiws6JqsAvzwdB3SGa6QcSAF4n7VbpKwxgDfaWamUknNHR3ngzhovcQJgHJ",
  "key35": "41mWRwReT5ZaCuftffQVTAf6yHXDFtXKFtU7QR3Z4VRVopiLxstoLZRdCEduNYBee9pWcAVpntkxgKiE77XTpFjR",
  "key36": "5DhFPTqGVkN4x8hE9Dqfd6ZngpA737gDRCwWtCN1DsUzKL2RZ6HZU7PqrXNcdroewdDRLRExnojtimyNKCPYW3xD",
  "key37": "4C7NKYvvbFWHESQ2kfdhAPAybMMsVjE5Uno1rkSqgBwWE4m4knrwouaxb84pnwqDMGKHYSP4N9uj4zwYMGJNxtb2",
  "key38": "4AoAa6XaBztaXYJAzL58x2nE4gnmc8PT7pyJhuz38L2r45mhEXJCj21zuVvGTLu16mwZDoKSZapitaZFtEr6C5Uz",
  "key39": "3S3oibZGxexH12TGADxUUiJ2yPGaC9SLiVdL78cKHyEXdJVzB3w8cautLxQvV5xKV4o1R7UdcvJUekugzcBE8GGc",
  "key40": "WcWpHigg3guXtBTutgNDBMenGCAJihQ1xsyBWxP1NKv9ypiGhoE5pZt4dEprXjuq43SdJNC3rVeFB5c3KPA3cVG",
  "key41": "3KhUmvPyc5s8ateQw6u6qZpe6YjhHfkjVnWmrriCFUzyqEhubMUhExA33wFyfDEAFDLDnnbCo6u1png17vnty5TP",
  "key42": "2schKrufyf3mBb3YdjpW8KkAWGLXxv3Wc2umDwa5MGaeaHNb6fv6STrHa4vq432Etx9FM1DWkCTAXzST7hzbiXzo",
  "key43": "mz7My1NJD49PAsYqqkiKGMLXSgagqDDh1YYduxC6pa8KUikuEdYHNoB414p1FaoLQNkWZPb1wbNgjUuGPYi5vQ7",
  "key44": "2NWnL5N3VnBPMCrtAgaQFqc6u84CRQkmyAjZ8SaoTip5bQXSsAcjuCZ54bUFHcKWcD94Ue4Lv3UPS9ejXottSpv8",
  "key45": "5wDP2beb8TjJEPnuARYMEtFr7TU22ZsjcnKYVKWpxNF2NwMRKtSWARpdgg7vSthnjyQrrennV6obszqxxMrYHaWD",
  "key46": "3aLmoc3pw8xAmEDt6d6dXf37TaZfESsaN4ZBLaT28aKiau4j2bmVrEuq1cbgeBdeTQMQUEGwqyw5p9r3auNJ5M8G",
  "key47": "21P9cFmtRikrpF96uVEB6iNDnAS75FvrsDYtB3tz8fNt7QCEuErSSGMoucfn2yTdJnsP8f1bbEj8gBxDfkk8nvit"
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
