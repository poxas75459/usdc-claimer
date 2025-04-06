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
    "5LrbJ5skxeT7VRivLjdwJX3Ar3gWSDEKr664dertkCBAwCRvbrhuKNTUi4yUeGP3wjFN8enarefPvjrjTTbuRD8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WoZmYXHA6EtuAkhdBpMWEpPR9xtAQgANg6zQDHJ4qSJ3c5kgJ3fN9eCUk2DpvvW82aoBQQdzADzAM184pdpx48L",
  "key1": "5dAw2UgbbpD8aiAZ1goi9Mt6eYeWQVJPhQtFBZsgynuemW5YeDzZVNBNhmsu1HCGe4p9yxLJ3vi6rzbdjFF1d5dZ",
  "key2": "5ct1SkmxnNayfhV6FmAF7R3yK9D6aMWaSkXjQYKufiWkZ53CLUsWecYc9GD3AqJgXs1caMmKA4Kb6i1bqt8UNbF",
  "key3": "3au62Ppw8Cgc7RUjb8FPa1KV5ynYG8DSBoJfRyvxd85AqNmJLLioakZpTc147ViFPZFZCG5GrgYKdVA5Qmz7qpZv",
  "key4": "4GhJnaHRgdUZY4vXNJk4yyjZjcKAnwGi7HmSWty2qpJ4B9zN2DDMjdkGvkty16EYZiauJxqM2zYT1SGEp5Twdz1n",
  "key5": "2d4mrYdipkbcfZZmXMmqdy4qrRwDPo1UotiMiVE4pboCQ7iBotQbgjpq6k7cfCThe2Hp8Q1sa4naK2Ee3UibFx2n",
  "key6": "2C1QnNptJjqUVBed4RDMsNMqUbvW5ghrrFwVjfMHhwzF2RT7j6cNSPXGYf5mMvFrmpQri5KVrSBsswBrsLgSyU26",
  "key7": "2p4fRhnTMZkG5FtnnceHStvkZT5M29pbUJ552wUVrGAc13zw88aYvz5P5sdFE6F8w7eJCCWW1DP2FCC2oiECyf4A",
  "key8": "GC75yQ9tzDUQss1U6Xi4e9g8HzUTcEnbfCC6EWaieEiBfMiJ9icVDaK9ZpBgH2WNsMfhWtXH8wo54MozAurRsEj",
  "key9": "2Pzqf5k81oqsqFTiDRQ2LVaybg2y3feENxFQHiU7u4Ev58SJHWXvNATSv2bDhMwwzVaxdzGhnTiNsb3jVGM3QcNZ",
  "key10": "5311FMcGTmCW6a1ecbPJ6rpvdNesFjqGhwYGgUotZ2pYeABnbqg9zmM2Vv3ZfADeNrRgj59SuS2CbzgyAkm7zzNA",
  "key11": "3rkzzbRUq7QPg6dr8vAB9bNicBBhqrw6W7KygMP4LJPQ4pD5RDWhcrM7Fa8dWrRa7Faxz25C3GjHMDUr6xG8Ji91",
  "key12": "nfhF5Lvb7pyLahmvq6x2AqRSLfNipNRKsRNzyGq6n6stpCMSUgKrtgdYURSKeSFPHwyUBECf1KRpM785KpxAj4C",
  "key13": "2LLt6CR4jFCu3Pyaum1X9sNH7MXEq3X5RfyiyyfHS9pHn11rcBjfBkABRbDesKBcgLJdamPMJfjNLkRZm9FCW8N9",
  "key14": "5KMF65byCqvBMSZJG81vEUccvrNs6SvH7QyhpWfYD8JDADQwMb8D67i9Z7Y1GXJNeHpLwRUu9nkwnqRuWX9gLXHT",
  "key15": "5pKByAs62Y5C8CceJ981bGx4CwvD2qaSPXiftn5QyY4LcqhdWGuFYB7sEMVsCz6VwxmqHg6qE3pwT4pU4XqfNrxY",
  "key16": "57o196NNHgLSFEQDW6GfSht81Qu74vpb8e5Qdas4BXE1gYsMkJRWEJFqUcmHrbsnuoJEGDBiyRR7a26yTRiA9NWZ",
  "key17": "4KV7HbmXy6viBjj8njwyBdwCxDyGPeNYURwJFJeww3GLGFPn5hiBaeeSUb24KKYC9rd35ioVpqFAtZwqu26xsxTR",
  "key18": "5szQdgRyRgH1PXB9hLZ1CK5hqcgSoZrVPh952ptCkHP935TYX8NxYczEL8gPU5Q8bY7WwyRUF41r1pnsy9TBdEkA",
  "key19": "3ifttckBHejJKrsyNfdpKR5Tw1ZSm9gJeg6euS8JKKLGjAVhpfQeAhwAG4sEVB1opt4SWcTa8jkAq6LRyBjef8sa",
  "key20": "2xbjDEwER1sb9T3gwWamJAQuuvBFZndx7fTexTxrRRy5tMHqx76wERZKBZUtUWjyzFYF63hZs9oJ1x3f2kyC61iq",
  "key21": "4Hq9NA1zjPgc7RWEi1buauPT6zUQkKcFmxvPceNpJ8NRaJxn9TquwFcoLg73BDtxpPpkAfzDctevFL6LYxFfMjJ1",
  "key22": "3fepCvT13iWafsMtGhx1hU4UFw16VHoC5MvSL43FmbrCC6NAYQTfAM75m7jLiiA8ScczbEWvyj2zYLk2VBZxxqya",
  "key23": "5FohuwFWSeBZtkQh4X6m6WC2P3J8GajMHDcXyT9PiyAHBkgujrct3CGupn7iCA7WfJjnRpDKdqe56gPonPPcEZ6s",
  "key24": "2t8eU63hvm8Yq37SGD8xT27VfAVKt1KQ7qkneafhuC5WipTJuQN8T1ZyCeaMVgoL99wUG2Zq9RL4T2uCDapC5ZDT",
  "key25": "x917m1RvJW56gRQs8PY8JercZkhSPqsnQU2q6iCq1cVBLfnphdZLDB44ikaULwjjJF5m4nCFVvqdPJ5X5WUc5yo",
  "key26": "3EDCjgv6tHgBqdZUGXZDX98t6kufSqweMRorCdmoAdUNirm6xZDCJEMcgLyYt55EV1Kiuh14ecgLfVA4jVnVpRE9",
  "key27": "3gCf78w2arCoxTroutDSNK7N2Ur27iQa1zkQM1Cm7f7T2od5Fjodi4hmAtd87eCK7sXF8pgwnfYWdjPdxcwVc712",
  "key28": "4rpRHUuV7qbysRN1WNamB26W9gowB9XjM4be15DKk4HkEx9Zv4BLgeC2Wopx8AZWeVR4soqRLi69qw8xfv2vc7h2",
  "key29": "fhuZK57TNzTeXeRKkfdKZwYBxf3oZjWsZD83TycT54K5r698hxDtcKaVCQ3gE1AnGxxqdHiFH69h4Kc1wn22zp7",
  "key30": "rFkjBd7DEqcz9JFSFNF4cUVoKULXwdMSuywdfj1mvHXR36pToDsshW6Yny8FfM3h5kemYn9sxwFrvD8kzK1GPoT",
  "key31": "2xGZjto9SE9B459agYMGDRUhyN9nLTUFNpJR5YYdbHTx9NqWaSNGzqmchurNWcnV7RtgdNEGqV8T1hbzemQ9f2Yj",
  "key32": "5P44vyqP384EjrugyAYkBzuCbtKRiS9RmfhdggoU9R4MuKSbaU53QC76XTySz8HeSrd8mHJoNvecZgmNdVBYjTbb",
  "key33": "5mvW9YkfvA2MkGuZoRXiHsW9iLafg6RabxnuSVqMb1LVwfEZcuRE4Eo6n9pC1EBCvHGsQJpba7MmDuNvsdNrPfiw",
  "key34": "YQiSQZMnm7QS2YK99sMJgUwtiTX5Kg4DqWijyQAcnekd4kVMe4UeuKJxqpAiqmeTRwJMrdqM2baDk7ePFGwVf4p",
  "key35": "3XosXZZfPARiixR27xG5fDZUwxwcPZJJijv3AMTWauq2aAVfVEHCYnFXDAbaVLibqFopryFcffChQdXsE96HcGNy",
  "key36": "5KWsZA1KeQLuVoy1DVxbmVUmYCqZT34a4vhe5WuyTvYwULJm3qyeFMpMFutQYhDHdbnuAKxwNCr4QZGWAzsQR1r",
  "key37": "4v7fiQzwwUsBYgAU5N4sCkFYkCC8xQNadv47iPUDkjhrTUodUSHCoXG4KxamiPZhd6z1xTs54DyeYtW4aw7P7ZLF",
  "key38": "2U5RrwCmDHyCovRtg6ninoSFrDHZxygXfCZiNyTcdQcH4pccDXmZGc5QjZ2GKd1J2Nb7zZXn7VwDpnpXQ9uJ9oNm"
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
