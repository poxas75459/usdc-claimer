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
    "W8S6m8BznKhiCcSzb95ewyizoHyj1mUQ4YPPq9DVn9Q2t8TZnn4oFnZbNGFW5mFe3GmMvGoHJAD8RVVaq4ungDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sF3uUcD9KMtHEz5q6oYL7u5ZvzbHbabL4nrXzAPRmoszwPVEQtr8xmNPr3WEECYwiyH9vnY3diTCAGBCjmJuRHo",
  "key1": "4WFqyhNGEDnVuUWtMEBgfGNfE85WRCAYWwFh7gjLNLo6WVCBQAu9rVymxGZedkHZorSKZ6tck6tZb5umgxBtGZV5",
  "key2": "2PUaferwAVQ2cixBds6ggJZaEejnqY6jUTRMuc1YAyqJwDjL996CfoUJpLDQVhG147iKxrtcusp1YBpGR31BNbPa",
  "key3": "T3UE5WwhmKvMTJMNc4eTTTdXXwTKspESM2v8TJ9PEzAjJizk6xN6WMM27vCmmcXipB2c9gtUGjtNuJT8cJUnxA4",
  "key4": "wonknC3PnEHZFeqH7C6gBouTjpZvnRCHh8bb9edb45odWFUFc97dVCEJ7S56gAumMzwwhwjYhuBYFSUNakjZnHe",
  "key5": "4PYAwVFH6yyKt4Zq983d3rVrFBPfUrvYd9yETWT6Te7J3KvkX116JJ3ndxg2Lyz4BX4XHJ2SnSPZir8MLN2WfW4Y",
  "key6": "5kv2bfiVp3jvm4S9GuTT5meaWGT8d8iPHcTYPQK59Jw5vNwFBigyzFKgtCPUaR7uPLSoEbigUXthRMTEsursTgqu",
  "key7": "Hv5nPaCbXQLPq9Km3HWnthicaZxjXdWtWaYNxzLMTyiYuJnJCkWxuTwjmfrM2QLujzMyae3dTj2tXcuvUtaGV7n",
  "key8": "3enBKFpEwWY1WkTpyVm2VCXYbcr75vfCeSTPWKwrYEKCHuLSigPfat3128EJt264oKHRNQuKSwMofceUdoARcfVb",
  "key9": "M1r6ALwbwfpTqwZW2p1g2ivkBvkurff285TrfsNDExFwNRdSFJQfamDbQw8N1jEtLQr8aRq76HMhBA5Ci5o6tFz",
  "key10": "5iEd5AgAj1yA5TGqm3CRiFLRMqMGApaLAb2yQEpLbuWExUnchDxyizTgNMxbdM8ZErJpQP8RWMbRgV2AppXD4Mzk",
  "key11": "5TeTs9ao6Dpcn8jAbrf4ySp5PubeXLwvZfovofWuwBS7cDCTFnFPz5FX5d6w8atxakpjxeX9Y6mnCwCuupS6xf6V",
  "key12": "3PkSjuEUzRiNGFxgw6W11Taag3Uhfw319Dxb6tQY8EiP8X3pdXT4jnjC2c2CvSNoi9BMJtwgBso1TBMhq2coqNKF",
  "key13": "m1Du1TTDUk39kSZozLfv9se9g9WTrrdbeqyjt1N8BfB8eZeZAVsWUZX6GQ4V3io6bjRRmLWmkoxUCPxdwVqyvJZ",
  "key14": "3371JJiin3NR9j9rqnP6Fv6okMHTQvJbLJBvxE8mwhcTD4D6ckp6dBoyFWUwZZsNtRVjRYJBLxS7h3bqTB2UbYAp",
  "key15": "4ktfgnisvoW5dxnUVugmnq38TmHEW9XTZmHjGL8NvYyps3tzAR6FGYuX6Lwn8aWdoPyeVv3gXvL9VQfmrxMs1dAZ",
  "key16": "2eoBvWSwdPHB4eLBn3Jzm1TEt8Wob5YdDSTWatSY6hnJokXBr6rr6VtkEM5UhUAhKiD2VYoZ4c73NPH4ocMyC9gZ",
  "key17": "zKrXp1jKLeksBL5GyuJsthyXNcbV2YKTHteVTMgpVXd4HPkapJwcjY3U6ALrCNWzztzR2E61fowEvrCpfxw6c2r",
  "key18": "3yHqBXhY1jmLCizN1QRgxDzfyiS3xbomsv4vtAeNQD2aVyvnh36EXbYpj11eBYcKyXBUAx9Ma8eHSkG3HUx6AkcE",
  "key19": "2xNbvjsqAximTUFaHf6AjekPLb794ZhDyYHfqBtBiHWkxjTrmLxmAU7qm276FKLAAuMKM9NjiAhHSi7kZWixTkyU",
  "key20": "3oHsXeoCJeE3qZU7xy8XecVz1v8kHSrGuhwhsZSwGaby32pWyfM5QpKNaG4f1PfkHmHgTkoZhs4KYCguzZyMauCy",
  "key21": "4nVt79JhYTVWQK7DGWBcq9aCcMumAZh5MwZDf5gKdVQehMV45RWcyWNQyH7RSvpJxb4wsWsdgkqEBLic82BaQm2t",
  "key22": "46jqAtzdJFQ8zAs4epeBN5foJaReg1v8oHEowGJNF9WQ1JhpqqrvhQpmUoaehTk8erpkooSkNfJoHqh7ucCc7z7q",
  "key23": "3x89XUGbJaB5HPnQtR9svdPjqbztDk38SBNdF9he13bfnig3G5X2bMZaPvvG7CSz9eqRrKXUcacar9xbQnVxJ6oH",
  "key24": "nH2HGJDWGDAM3qRM3BSz1V2XWQxMTXNz3fmEokzhBTc61W6zL3w9QY1mtnPEQaAykzhQPjg3BBqjU33PJG7UTVA",
  "key25": "4taYipnu1pCQRCpuhz1FVVtLJprxVP9yGjNVuUopLLQXZ2Zrc5vAc3bV87HBqWiS36uMAurm6ieDmrrcixmQcXPa",
  "key26": "5TXv3dJR6nMyNo9V9ppXySf5nPNGAj7tTShTXTX6yEwLNmuYaVzwpZHoEnjA4bh7Jgk9pWc6vJbZq3yYpwZUSwom",
  "key27": "2tkfvaNm7GKvyV2XyEqgV4ssJBm31zoM9PXndxLMPTwshZRe5nko95Mp89nNTHCqG4vmmUUjq15jQMxr72rkZgv2",
  "key28": "5ps7wj797AbxoLW1n5hC3p7QJ8JRoZQLtHtjWmkaFyw1GHfVzWZ28dw3cTGZgy1nnUGntvqJM27gqxBzGdC6GtyB",
  "key29": "62kYWTdgRacTGtnPj1wPx9NYC4B3abtX4SozrAtwEygkEZmaZKha45NXQ7Vxe9D2iLnxi1SvAUYRKEmVuPzzkQrw"
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
