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
    "47tEDwYY4dBATsM8sAPjRPEBWqkrAanEgC6SzM6VHAKRvBYwzsS2DuiexX6AN66s6cPVNTdRUfSoa12dga9cxWJM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YMpKVPC18KDbjj2GtgYs1q95qi1TcudkZMAbKXzi3AGaitNvCBj92Pg4Wc5yLfTBXg8v6tVo7R6pymWz9VBfM2m",
  "key1": "5Zo92ueBbhUmJwG9rPGvVCktJLBMzHK4w1qgiPbLUcENFYbJY2KegY8iq9SPDo2iT1939eP6Ndjut8gmHBVeJADb",
  "key2": "4N6d883zvfZXehBiU7CVdEyhQT6GF2HtbCqrf3BiocjFPeKMD7HZiLEV4YGE8mZRxtxq6TktprzXT54aiy3rQw8X",
  "key3": "2wvck5eLkUak1hY42pauUNC5ty7tJFtQgFXFQ5BeBYzaAn5AAsgT8nvpgtAvACAsH49AmuDbFhapi4Zz7V1VwNwF",
  "key4": "3zApmVxkB5XNoQoQ3rsr1UMe4Rt8Vh24QVz6drLPv1eoxrrKs6ow5NfoQqPFpB8GoVd7F22QRY7DZhirxi8jw2YZ",
  "key5": "fV7VRvDVV9u6KdDvLgyPyZbgYJAkGqUuukHCSEHTsXrutwmUUfUdzkQYQLrXmFSF8SvHDxUHNbv6o4eNxR1fsvQ",
  "key6": "4PSqUDQ3tEsKYka8hazs1RaaAutc57rv6zkqnpxcC1giLTcu9UBeGvsYwX3kBR11P5X8VpjMDovWg2vAR2W7BaSY",
  "key7": "4BSe1HFsuzzuL8XBMetobm8kWzWVuuKapc6trV44rXtzpWwkAVvjx9wbkbLgKTgxPTLAjn3SUmRGievp8ea1NQcE",
  "key8": "95dwgoZzB8f7i9ar658CNsjDijhwx1f9qmLFhs4aUaRfLULxAvY1RHaPgGh9D8DX5SZFpc3Rdhs8kJ3PmaxQ7GN",
  "key9": "29QAY8zt5Vxson38m3E4da69jLctRcoaFuuZ7hb4kYFr2BGa6ZhgBGzDDwdriz2YS6yBcH8DgzyobRcQiNuVBTx3",
  "key10": "4rMTywEHhFe7VPL9T3WMFLE4bz3fMzZEpjw9zz5r5WgUoJoYKseHFwGE2QmVvfmVvNaBS5BqA3reKvLYPebk3gq6",
  "key11": "3BTQgn9qT6Che8Mx3TpaEofA37hX2y6JiDr2qMsV4Me3Qw9FRsJzpA45pwwQUNSRWjNsGQTpTaeBrypgbJtXKkVg",
  "key12": "5NxFXdMjMvFLJxSfvyVp4oDb3PzidrDWRXUQCbECdTdJ3aEF7MdC454eDuGyBHrpxAUPsZYSJY7ocrQWS1Wnnf1v",
  "key13": "4Yun5FhsWKWN5vx9mwgrhQrvKn9vYUqyhCRmo9AHdR5Co7H4mhbaZCngZZCsz8hRV93tUhwbGJHSkPRkgRGAkDk6",
  "key14": "3H8ad6R7g3ih4W2qDZvTUys7PwFdHC8rC3f82Yyy211hDFvZf52ADePbJhL6XTpZbQoGyFtnTnwoumY9F5CR2ZjN",
  "key15": "B6PitcEkgxVMdPwQAaVg11jz1X5Anfbz6585PfX8kdbP32as4XuAER9bAQLwaVokkEeFXBm4Z3VsZSBwyYM7myB",
  "key16": "1crnrA6uZNdQ1EqbCz6cm39ADzdPvQZUDZm8qU4CpRcdvD2xc5oWjzu7EmRbDoGLbV7iWnTDXyJe3iJM1TUwSNE",
  "key17": "uMtxXm23DucvDQ3brJKLoUi3x8LfeG4dHiN6ai6DhHAJthAz7kaRWLYQkSMnRpfD99ZtD6uRMX24X8yzRwtLrEz",
  "key18": "3GN8GxZs9bpFtnL7gbT1YCUD3jV3Quj1c6ZgvV34cEAJdLKatgoeykGWbTGRb4aQ7AVoraiGxR1qToEXsU4Pomt4",
  "key19": "PEUqwDRFM3ojYwruZM1UVxzR5sXHt3HiQFgDtf92SvDLn63c7He9uEr4sPWZQywSo9tbMssDjFSx3u4fJ2aherA",
  "key20": "2YijkTPA8MnmDNmS9KoCHpbrrpuBHMiWfKUZ5kb9GA7gDBLiWkGzcdJYdVPyLokUk5XgiDerYLbLtb36tCbPr6XF",
  "key21": "494HGzaFW7ViYzSecnr5LWpjmicXPcLMdBnH7sGPhw4TdpBtzZLfqXoXiVcMr3oV1QzQkUSN3wjCDoBQRzMR5EQH",
  "key22": "3yWFY9aG1j5HWqpC3ZeaiwYPRyUAsMsfVZoggaUBx7TzyUZhZttLjeWKpFChMyMdftLbn9aCPzwAxDDa9w8q14WZ",
  "key23": "476ohu7MKLrUhhh7dtHuivUgsCGo7pMwTHLxLqLauycfN5sKQBhuGkCFGF2bfG4CwSFzqKPXRGtBP7hpDYaG1chC",
  "key24": "2iozWu4MXx8JFx9hQXiJc7Txy1DuP5KjiKy42pVxvw7VFL7xbpmLRVVzn5aHnuUFKM1h3AKA1yv577f7FqHFxBVh",
  "key25": "5y2xK1KMDnGDz6vrNRfXWoMbd1d6vLApuDqJXfuEKCXkrevLWD9VPsGpkiNw9X8BGnvLwq34Ncac76cu49TtRwwY",
  "key26": "5VDmEXsD5JN9XiaWyW5wYGjdq7aL84adRaocV2SZpkXQBKnrxFcBQfJWfSCviPPuJSgUgUnr9Pvhg2B19h76U8N1",
  "key27": "4gVV2g2QwMfqKLATwXhd56xKgxTGsKwAXB59R6cFD2SNQSLidw7BK1nv1Vpzuwfzbj8Fpgj9coVZ3WsyPGAS3d5c",
  "key28": "4uBRX7aq8pNbouomKXZ8DSx7R5unRXVXkuCJskPS5FYxmx7MzZ8Mid4zeKuY7773kLruSSZEjKEUoqwYJuBNAggf",
  "key29": "4pPwhJgcRmPqjQ1KSZxUT6UmW7Aj5seQARhNzH4o4tnHV2TUZ3eZJezNchoKwLcTqnoosUstr4WHopwLQ76wSomJ",
  "key30": "pVPa8tWCU8BYZs5GbG4gKwh63YWopQossUaqFoZNnk3jWM9cFN6U1MjEAwURe5dpGr64Uj7dnMfVyyY9aZY5FFA",
  "key31": "3U8wR4dKaSBz12tBdcKm7Ve6zHNbtm9557xJFYWfwbHNXyBSDPxTVGDfkVmEf4DvG78TMhiNwyNDsBmVTkcPLtSH",
  "key32": "26LJETfAFVZ4d8sEvfBuxZq9CS8jnpzdNhiX8ZJv3RsWkQH74dJ7QG9fFRSFuNMFMysa3KCJR8G34UipUPpF9yVM",
  "key33": "45f4yQzo6ZtXNK6U42vW7YsJc1DQFTxyEhjyVGEC8QqPdhQ5gmcU24iRgzjxYBGhyJ85NXHzpMh5XgQbCZk5tX5m",
  "key34": "5mxaoZfr9SLgDgdemzmyeV1cS1u1FaK6aAtydDpGT5wxwCSEW51NwkChqKVYNR55nGrPwUPDPAb9TZFsy8KaRjkG",
  "key35": "5RJUDJELJUdW8BbLQhkM5DgwrbigU1dev9cWPWaQqpSGZ6iS2K5vst8LEU7auYGpQ1L9ptaQMALJXVJ5GiU8sbHW",
  "key36": "rbvRAjwgTnAnFxcE8sXez1wFhFFBmodMGdWEKy5DXkBV4EkEtkrSrTcyS4zKhgHNiNdQ2VncmTTHDUwrqUHUKWo",
  "key37": "xor2zfWxXhZneT8VDdUS6GafkUmmkBMC8monfua7t6dtwhs97ZkekJEL4XjhD9a7VQcBecRbZ4joS8SAR4DeHiv",
  "key38": "3heY4HqfRvxNkx2HniTa8RmQLWH2RR7ePQCiCtMWisM7fUpJ6gpp5eSQbDmFraEk1Z7f3Pm5xgVk71xP9iUL6bdB"
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
