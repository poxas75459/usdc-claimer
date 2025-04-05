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
    "4NSmBwXB1cHiohHCvoNqvRq29HaSMhzYK7yhhTcQF2NYxaXazyuQtce9FyZbct1s7ZDZreVLU35V12LNm2w9W4ov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UEgcmAiPLxpJZ8jUA28Ppoh5mwM37Z2CswWYSUThAGSzUwdwzu2QX8CVSQmfPKena4rUpegt9yumzWg8phCUNA",
  "key1": "3hyuEBariCZj7F5PYmkpVKdYVDKZR9vABoiGJ6na814vRjqhxvhaMdTcze2JyFqZhrHSxb9Ae3ikzk2rhV94um6X",
  "key2": "437AKFTFgPoB45B3bdijdPxzNHnpKAksw12sQwNSdG2ZupWAmGLyneqgS9g7GwT1ytR3gifFM18W2zV7oaj2H6Wj",
  "key3": "4j7mKU4F6sdRM5N7LmzNrgUbY4kedh8EHp7F1XwxoQq6Rhe7fodz9rNY74S1K5mMgRa3DMAJtLK7K2xnTcDbKpnm",
  "key4": "3qZ3rUMLNtY159R6WyGTfrBfK86gN8BmM7pYtnGyq2TavUb4BktbdNK7ACEP4ce21pPJLSyktdQtC2Fptj8gQc5F",
  "key5": "3zmEujZd3Q1PLpJNcAvVfUJjc7utkwsRtZtQbJpai7pz1CKBk9YqxraQLUTThU2GbFPKqu3CbVriHmvYf6P6hKPm",
  "key6": "43r4NLHq4M1Wjce9tdHH31AcJ5rw68tNT8NHdYwXNNr4xiPhheUxUCxLGBGeYstvp5zSEqDTY8XB1kG9dZVgPg5S",
  "key7": "kaA4MfgYxj2ebxymbV18m8QFrUJjrz53fcgj7eumhGjeFRapF1gNSAuPTDN3Fr5NmXryoG4nw1ighMBWyonXsKc",
  "key8": "28nDLcVvTHveaSfebBsSN1YcEQwebtbp7VvrsghoA3yjVS9S1pzW38WYMm518xXjjZNWGYmaPUn8AJEDCm8fMmri",
  "key9": "4aWgNo4nLzkJLESHWyqx3BY5X2bDSptd4rzDkjCboYJSWbmJHaE2t7EUw3FsKzPvbYX2XWjcwDvHQmEVLFWMMLWK",
  "key10": "EHdjDNE3PfDr9XdNbMgmQyKQaqEecw33GjJFzb12RpaYhuuaSebd8vtbUDAecJqVuZz5J5hyREym9fPXH2WXn6q",
  "key11": "PVfUkvd4TYHJ33NMRjgiWPwztQgP3d24DJfynfUjJhQKrbhhR1LTME6TDsE8pkhD8z4GRgebdPvVqhbzPj2s9Yi",
  "key12": "4eG1FoNgVN6VdKZ9p8qhiQhydgSDNpUkz1ZD4zreWoVoFrUsxvEB3Pgp6ALL9x3vYEEjKH3KwmSkphkcbCQ6TSk7",
  "key13": "4DHP1q4GPa27BQrrQ4aUeW5bWtCqczGLkstSemM4eRXdM24RnpVTN7qQbj9XjiXiLWoe5N4bexYTKAqPrZMBs3Ai",
  "key14": "BnxzaRbUBtuhcKVRBWx3VgMmavc5JsQgc9dTWdCvodaC22MTBu817km6zthnz37y4W28iBRhPAo2TKZoP5TV6FY",
  "key15": "RSmKQAjc1P7rDfzF438FGKfgSnuoX3uAMVc4cnkj1iv2e651q26WK4t7rDLsD5UdqXfjS8YboKihxrpaRKMLnCq",
  "key16": "55LqphRRByyMg9Gn9RHkm3VmX8idCqPa3rXy2FF6psDCB8X8eKhmL8VTDzBYK9quJwbnSF7kfDyreAXx5NaiEhhv",
  "key17": "5KBMQSva3bnU8wKx7wacETkVqFF2ffv7aRk6FNXHbFrUj8RaNBaDQpkYwhCUqDSLtjwqQzgzV8ig7EFvVMR55aXU",
  "key18": "3zVcpXMvV6RSeCuBx84D9SRDxYWitMNnkErxfNZeWsfKwfK5hjREcTr9JXhitKzY2i3QT136gpRQwKFSzwxjTku6",
  "key19": "44t8TmAR3ocLAmx2mqQYo2E1vo7FYyB3g2Ksmh9LkzxhYLSaHXgnh6nPnLKxyQui9R1LPcjyTzFnoPcRF39zPebN",
  "key20": "3SjA9m4j1j4ofWt79evRiRx4tMz5jgGTHpzxd2rCSpWFXU881fcFbSVHUUNvK8ZkvJY6E2yBRZyUiVQoLPxVp2CW",
  "key21": "27BTn5qWAFyzH8mRGLkrmuM8JDSnQAaDBHHpvHSuRHdUKmaqCqoU3Mp2etwbZUVSoqhzBQPRYHdGNzyJb5wNeRDb",
  "key22": "336WZbmTPJcrc4PPkhRqSKqcMZkRoDXVrNQvkP9dUKc99awXUsyjHXeLJH1DfJJVPyrGJTanXbLN91ZTKweE6dHq",
  "key23": "4rDnLFBA7o9152xNp7ekwxXYysAYyz6KQGNV9CazZNyJ6rPuu3Eoz4W6L5Aw9hN1rx3rrkWaXKdu6e9vHGuQsUXv",
  "key24": "5xM64ewpv5KhVisWceB8ZPb25AKNByEsys3y6d5V8eX8qb6ySKDNsFzJwLG8HvjF66sVGTiB3q8dTaYxRZ9Vwr5K",
  "key25": "4mkh7s52Jdr2oE7357YpsRFz9zbgMbddP2V9SKDQcwRPCNvXjvvJXXRQWTsjRF7eEtDnpN84YbqDFKLT1NTfpGu1",
  "key26": "1kVxYccdCdSTTfPc7694cnm8CPXz9HoVdvuGfHU1MhUG5wVj3ZXU46vxkykk4gtr8nNkQxrpUwc5UYXhCTuC4bX",
  "key27": "XWGg8mSPG7oapKD3LmF7khqfh3kuv6fnaoMdBYg9zxUf6ZuLb7Eewr3ckhVwtaxR94bcxd3mf7W7ZU2QoT3ry3Y",
  "key28": "4U8x9tVYRaiJHjgcPS2S7TkKqMs4WbZGERCLvERb9EDv18Q8efyeAycCFVwx4YNWhUMgBPfGUYeA84aswijXNjEy",
  "key29": "4ftGSXNtrrsiiKKLK8vjSA51Vp2GiQus8HJDLJxcSQBZM467VWqwvD2NUNNC1SztnxhGcvkJmQ4zTzrnCap7WBFb",
  "key30": "4QVipkYXH1PRq3QHpBKEbZwdCLVahgEnrxKLexS4dQ5AzHT15WK8u2JJa2VxrbJnNdL6arsJ8kMWE4cZ4EA32s5g",
  "key31": "3bSmeJBrmieaAUGbJG4k2Ei4wN52gg8hCdMrURbDSPv2h24iLy6xvyjn95Tf3uekSQs9Pd56zzy45GN1h81YdUCT",
  "key32": "5n4Y35VDofB49rPEpQvZ1artD9aPhmMsNDpLcKMa1vzidPPQkVykasktMadiQ2koHG5fwBBFfd2xCEMmj37krNpQ",
  "key33": "4biw9USrCJpmJcKfmXZK8V6H6zxAaWoLTJWc1DjnKamBWKT3Au4zb3ujYfJdzypo9X1wfkfzgAxoAR6P5MJ8h7iD"
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
