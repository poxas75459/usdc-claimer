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
    "LWmzqMHUc2YQJCtDkztn6w3AAyjDqhrVmnr1RK4QjQCUSFN7eBT3UqPCWzWvWxixfHQ4u2jLupd39yrAb18QgUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51m6yaNu4RGid28Aw1qrG3dPG9PmkeiRLkuzixMbnKDuzFnEDWj7uddtHFe3QrCpfrRk5NVPTpooxPcrqVnApJNF",
  "key1": "3LpAMt3sw1t2snW6PjkikjQsRa5cGSwj16bNXJgs7UmSWUAivPC2KCibSchWfGpFMwDDPiskv39oPH5Rg18wnpqu",
  "key2": "4fa2qN4oQgdSzwQEj4WyTpkLZfp2RBmr7tVyjEPedXehYvB7vjRoBhYF8nKf6FK9yNh4b9sFBaqvKFQMR9JbXjtc",
  "key3": "USjBhpoBZ41tBe4C8PZa24V4Qu7XVbfvgcAfkXrzpQRGerARzTpwjroQtESfG97BC45N1CKimCFx6652Q2CA3LQ",
  "key4": "XmjfyPZWeybSo5kgcK5395HkU8KoTGP13cgYVbXHUaxg3uozyHSibthHTz18h1b7jD78iviJ1qh2gNRJTGfiPkT",
  "key5": "477GvpUzXP8QFokdiHzQmUCyMXPmJqMcfBkbKaV2q2vBmjLVWDtn39rLVdbJnafub3yJsyyUXRT6HtPegwDUxZLo",
  "key6": "eZf78wsqAPkm8H7pVBU3FdEuDxAhmKpuFYooE72FEuW1No9KmEjcSVon7g7WB4uczn3dnMHTPrKyvzstunTRWpH",
  "key7": "54xRzyTP4krqcVi15pt1682Dp3XFBMVT6RUotAH9XqQeaEw6C874oLqB4LQ3Ecvnr4Ferj21TXacNJZamD8S4j6A",
  "key8": "25oUjFVWnF2ih5Z685cwBa8z9SPtwTCkNZV3SQLBf6TerSSmXX8pLeEtxrFmLvdmAJYDtFa6JNjrdUnW9tngegCN",
  "key9": "2mm3wm1vFxE4Ae3831mDMGGXMgJJgEyVpaH8nDcJHsfP8PkNyjnke71TrfSm2VrHh7aDbaQsjaMfx9dcwtPmh6cK",
  "key10": "5yKuST26QeRidwefoKgaJhTxHsBbGfKCWyGs3JmUGFAWTatyfQ4GxAEAUEBDQFZSbnppRWvVNGASe1MKtXyWmLoR",
  "key11": "kGnXF2jYoa6ucEGcDSjwMNsXLy3tanRGN6U5QAgTdbgcD2KsCijdNPPUWbUYPKCPG58Xwyza4PZbRPxaWANmS5s",
  "key12": "41df5yQD1hvAzMXma1MeNPpRfP62n2ti2LhF3y6y4MTwQSMuM7PT8sNoDRyQuD4KEUcmtJA31QvUvyMEXyr5DaMz",
  "key13": "3v25TZZ9L8MqczGVnTQ6k8XTHSWDqhJFjtNGjh2VvYcoamYehmBNGUPA4yd5tyXqwJCf8eEuBCwDorQ4C92o5UYv",
  "key14": "4vbctzKsYYJiPWYUsFdwGWAtZPdd9HunH1AyKiYmtA8moLRDhCfqZ9GWZuuquiUvmEUohHS66qhsyrSTxzN45ueJ",
  "key15": "2m9JkAkZ8g8aXAELohJShnQZGLzZJhKNu3sMiFLfMACRAa3GQoNCW5qGEve7J3CTHznEWncqarojeLbFjdNdMsia",
  "key16": "rqRut4tg4APAYEGc9okVyJxSZh64S3L49gv1XDQP4Q1EHW5b6Vi5c3WaNbhewiGhKWJY3bzoQ5FtqAWMoUS6FHc",
  "key17": "2vymxnH6xSVp6w7Rjb7CUhTHJdXq8q7jNYVMRJmMyjNHcGbgSgdAu4tdjjB6fiperPFkzYMsDmrGM5hZg1avSNdY",
  "key18": "2MRZr3UyKoKKvpwVamhh5EiG1kJCUn7YRaeaRx3a9MdfsEZnkN6Evg9Nx7cV2327Z3snnWwno9Y4zXbZE4pG4rii",
  "key19": "p6GE5vTLDsT4GeqA3EZAeqKnhvsT76d6fXyfb1W5vsa9PJyaoqh9sdwta9EW4uqY5ckWVXf49MgXN2QUQCbLZxH",
  "key20": "3MdDxUdD1BMZa252Y2RZp8JfJcmZwuiTB9hrmdaYET6CpJ8EeujDcChH6oBoevaJV3v19SJGha1SBEqzwDmq18E9",
  "key21": "3nbpHDQdY6gkxojCdzgqRGXcnRezRpy8Y7QPZbaDqY4WnKHHsjTJDffYfJ3TU8RmiB2Pug6ogCDb6LXGc3xmY1d3",
  "key22": "47k3bSqPR8pS6r9LY7pyuSGSQTaTC3e2TPo6TjPe31ZWLoWEed4PbHTEdVJdsBt4ie1ZG7wLgVtZrjUt23C6vwTD",
  "key23": "Jqbpfxef24M61xRi5JGWfFH62QkGzWrKe1T5PBmCbxiBPi4Tm66sNSK3t7bkLbJ3X1yMw55CbaJsuB7GDPhd6xL",
  "key24": "5rcMWDFfUNVi8eJycz7pLtuUhhTbUfmA9Qy5SxAXhdJq3j4XDaDEhZjXS3bp6uL37Ars43FN6cge54FuLVMch88Y",
  "key25": "5koEr9V2tRKtTaj9uwoX9Rz3Mb3t7FP6Sx3LJcM2CG4iPsiD2auS4Fv68qkdDf8qDH7ANDYacowXj1pUoVVqkpbv",
  "key26": "2eWmXHkCL4g73pFSyutWSdV56P9cp9Xf2SaM4BCb1bh8PciKWKbXfik5q4QqxDLHFmiees7BGxNQdYdDpZbYRcPc",
  "key27": "5EB58UNkrPsCgV59Qhbn8835hBjdxE1f6jBLiJvhMCdifLdonTeLdFX5K7pGHsiSLr4FRwhQw7ZNNuKW7GmdNJ8y"
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
