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
    "TskQe4DstovJxaFWeVQst9Kk2smBTugSdmzDbtcVaeHvpZEdkB59B4a6oauaEH8Qav7RGJC5pvhqoLa77bLjc9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37MpVJuRgd9FookRcHMw6hCLB84DykHPYhbF7e4cVLFqFNJxnrdZno41MsKJWthqi2BSLAYt9cciffgYVMYejLQ5",
  "key1": "3M43pxs7jevBus4emr9DvXs1CatBHS1ErbRJ5i8uwjxvcMGarG9JVj3RvYuoAKCA1VDUiExyVybKDcPLzJPc4EU7",
  "key2": "5Qf4CJG8sLnmD35wCxLMES8QsDBF74Q8htfCDXBTz23ktTvUR4CDfVEbACHUeHPn6hENgGmj7ewSxL4fJvm2dG4j",
  "key3": "4wH7gebHXNYBfm3GJPyCUS9sbvMp1Sfxhh69Go7yG9Pa5XpMzb9pVqCpVrtXFZ9vuCpK8MeDsC4oKBy3huZeRT4t",
  "key4": "w8UuqHPisdpik4hcwv6Nn9xEXE5xmJtfVMfvgqGJ1kktFRw2rF7uL5aVwuBdDZtzPXgjABazYachFVLA4Pb1BgE",
  "key5": "AqyZQBRfCcGiTKSS6jvwPNU76zaCwAYfouEBFvZzjNWo3ABuqdMW7WWGoTgCQSo9e2FyGYsyJDTwsbbSVBoHXSF",
  "key6": "Ama2Ce72wsvdw9SGfHMAEscM991MsjLAeKtyBqTP5Tcfdk9PhzYcrjZACYEuAXccqtCdJMjeUn7ugMSN74bnHNW",
  "key7": "48A2nPDVii4orEHqgTtcWmjEFYHczHK2se4zfukeQkpsgRUXFszviqTkS7JSgYUbhhBoSKTMaakD9UTRCtHKmQRL",
  "key8": "2L6PgH7d4cNMzzNntyG8DqSRVTru3Hn3JXRmFKta44b8obajewBggfJtsmTAQRuuJBCaPqnYMAA9zcFimM4SjSfj",
  "key9": "3VNDUoMDNsxHEkg7wZnGRzTRuRbt6zswEFNynJf8UCMoHwwVVDfHU11i92uSG4UR7PpZN9b91sb5LJ6RTm894PWm",
  "key10": "4tPjdDC6xWAjUbQbYymvofqbFjuUbz1QsR8T3F2KtRCAN3NsmHGzRxEiF8x2PPH1rvxCYXzX2RGJS1v8EGojLTEW",
  "key11": "5Zj6uL1mGLCmAoeND3qjVA2gLobexPCzdKFyUF8aWA2Tn2fobL6Vi8Q5nP9WgkWzX7wNegiNp8XQVgyLvwjkSAPW",
  "key12": "4F13A48jemSyCG5QdrYRDE1JH1ZKgzTFtJ1a8GMYLvLikrJiLDMZ5nbHSJwiwdsx5hgBBUUP9fCSKpCrLkRAry5P",
  "key13": "CwzD7WW1dGiH5ZphVKZu68ZvSvvYvNAfzAK9h6Qr7d6wWFWRCAPezK8gd2q2Ghd4ZEsdoBT1eoShPNKefUBG5BD",
  "key14": "52KKg7jcheQMkBWPEoGAGy28XG2s1g1jvNT5wU8kvKAASSsWgUhMg4Gj7EkY3CBpkUzujJToftzhB13PvbPwcQL8",
  "key15": "5hKA4zUCzT3LDPKsdqqwgtFpk64UuxsmEeHHkbErNT381R2M7oi1y8F2gZZvRWp4RvKSzoEtRFiVJZKzpVjHYPx8",
  "key16": "4oyRWrBfPQCKSYU1XnBYq3T9CGxwJkWeaqmRBawnTR2QRUriH5Z8mgfayNwFd1AncBo38fSpp9VQVyEKBkWyJhpq",
  "key17": "2CMASHoBFe6aSuoqRDkVPHNNAjUbWnCLzKnuEvErLkKV5vWbSNRFm48iCPDjQhej6Q1gmfcNYdnLqVbdPSZnuzMx",
  "key18": "5CwZTdeFbRkLkYXxfvHuKgWBxipvzzJsaiBYXmA8iUfkBpFcKuKv5VwrJ2rXuHS6PZdbP7aay7bWGg3xtgTUnJuv",
  "key19": "3cQZeXeyujQQ4QHnYSNjSND8f9FQpvzP3q4ScEdEyaSxLVQU3FwV2dbByvcnd9sYXVi5DXEi1ssaKcdyefzZuDRt",
  "key20": "5RVDiUmjPhoVnCQgGfxfFN3xP7GRa7wNZjBVLjvd9zzer5zD2nNyVpfvpYFfrNTs88xs2Y257biFivU7DA1BowkH",
  "key21": "3npjuHNbXZ4sHcFCPcq8y5SRAkvE3VbBv1f2SF7sTnCDnxa8RX3bBEjeUc8RAbsTSSTqos1uUtzQ828nCGCUMoAX",
  "key22": "4rXaZHYSt49xz6qRaJhazEyAAByS2hKXatCmM9v7wEQP34RL1yehiDhAsNjm8afN9aqLiBNiXyE6YSWHaX9kTCWr",
  "key23": "6rgCirP6c27ERxRuXhj1DFzdZRzx7Zjp4jS1mFpNGRwaKbG5TZK1RrWi8Ub1r2gYR3KDpMtcfrqsismcVCJdbvF",
  "key24": "5DCFQYKVFskCrszCuzdegm45duwkxE9939apQSwepKcNi55ozzDXc6YCpCUe4t9urKCkdQWv14rHe6CRz8XAete5",
  "key25": "5wieoKw3pQhFyTbHeBVH9RxyvULo5Ca1Jq6BMryLh8qfQDSoqx89RC43hhTfBcaQt4VRdLASunkhqivT9HgxijYx",
  "key26": "PFTBMJDyN4xWMmHgiquRFhaBXTP9gWYvrBURGJ2qHERzABJB1yhNfgBGJTDYNX7kycyMaYTFvv3Mj3xtGXSmNMW",
  "key27": "2qN7S6G3cEonGR8jkrDyRKNMsF9WWpFntWKi1RDZ59QmSVDyBHm5tyfNcEeCw4Zf5wRgdFgoUdFXj4oG2Z4Teey1",
  "key28": "3WQkhbxStFqgYrr1THTK1VEFHofvo7JrCZmuqdALFUWu6nkamwCzvYfRFLNa5co4guzfhwknarzA2saWmRZK3Hyu",
  "key29": "V37BLmons3nSULXHyMqU16osdTxCkf85eT8dDS6YxAiiN8pUzR9Jkn7BS747XXWv8Eo5payUef8hS9Mrg7vpESP",
  "key30": "i4RW8T3RGotkC5XgP8Z8S3mgZWpicWCSgRyDdesGDgG5T6AuKai2pPipPu1BozDHap36e7fZvANvgQJPM2JKi1k",
  "key31": "5iATBvQQTPvgWHeGdnrFbKyAUAjoGd5Eb5VW5tSQJKi3m2T7V6gD5GiwEPcUqHtPs87pa4htqkHkeSvDQgy7q89Z",
  "key32": "2v17myvkFbyx1PPrc4aabxRANsYXFAUibfj1DVFRXLo9JVcg7dhua3vUQSYYkSVjM8S9ma8fsZJ8BSzyYefmkoxv",
  "key33": "4WHSEAs9ShHTpoo6bG3EhFTXzVg6T3NterVxudu7VpZNLya8MpBgrmBMNej89zCuf3NgpE2fwyRoNWatoL95MPLQ",
  "key34": "3ibE9UqgN2K8edzt2d2mkUi7z6JbJXVsN8t2P6waxheSgPWwWo33M6eycx2HoHmoSTucnzkqG11KFF236V4T8N3G"
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
