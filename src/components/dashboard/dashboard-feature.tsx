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
    "41RM7MWsVsqdd5RKrzPmBVmrjXrb3nXmMUHgrdceRH64utT1i95634kSqDgSsDy7BWsxoQjHBhjgRrjJKf1yJYNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43urtzBPpQ613T8VmrkCC3Zu2bboEA2gufqESGUVvMxXvdaoi8wgFim2DhDUQknuBGYHuy3iJBPiRx6VBQeCjnm2",
  "key1": "2to5uwTPzrJt4PqC3YmxGtLpxf1ZBRf4F4AgvcmAby2kuazpZJWnTtQD2sp8mcnLvo4bit7qKnQtHYEfFEpjN2oY",
  "key2": "32CjC1DGf181tWa9aHeJZzr3v5JprSqdrdCpAKUnt1Da2eXLvWPoKkEss5NPVALD2KMFLfpModBDAy7GEUNhpKBi",
  "key3": "39YcA3JkBAT25oN2TJELwPiVuSueCbfJYhSAENBqdcTGkh1sdsTKBWt1a5nN9Rup1mTy9Srr1kuVc16WPVbFPWuD",
  "key4": "4a6C3wGNhEFKM871xpW74VbqC55CWZZBoD1NWUjHk3Ypt5tJdTq2AAku8ia5eftJ1PGbXF9L2zr8Eu7yt7EoZa8v",
  "key5": "3kFc7vUj12bgbTwpJ8bCVMUzDmZrSsVLnhqPTPbz9RjfTtyvqXmH8XU2u1Fcbhm3F1TjS4iyDrHYp5KapZWiP15S",
  "key6": "391z9PNUtmBhSMHEiSTJKFa2cpv7PjFJ3PUCzhYZcNX7BCLYMndqbq2NHfX8RStTB5SbnJCmpfi8PH2ngWmZfhnE",
  "key7": "2EikYUSzTi2Guesr3jCvYdgthaz2b4w8ufGfHkc8KTcfNR7CBx33sCGiRHBuAfcg6XN3rFrX4kH82G1uUgeRMnCw",
  "key8": "2Vk4vHyiFR4jgrgd5rLEWbeRQYyoC7utDCygJZWAeQ2gXHfAf8ZRFHXwMUpJwSW3KQLaozBEjUdpya6b3tijDyK3",
  "key9": "5NRNmvL6TQN1L3WQopxuySCrc6H9QhEatW1WMNDvwcFYiVmYugwSPngCzGUcweKNMSYC42VSZTHTrNuHVgywa9LZ",
  "key10": "3p3pXqyyfScGTdCAZjouMUrmF1MGmS29V4QR1VLahno9asSj2AbRRSK57bsrDfo6puoNYk41AVvk9jLqFG1DdfTa",
  "key11": "3L9QSSmA3P1RnQtZmv1sNSBxtunkyXrVSPym3N1L79nNAbeeeSGF5kY4oAcSaCS7sA9eQmr7zYNHQM3auPa1w3J2",
  "key12": "4VHm6dhixrK8bj9iBo2yAjEuPkyxsxSKTqoWSTVHXVxfs8RNWzLV69Fh3SXp6oYj2csXdV9oQ9XZq6747g3PmM6M",
  "key13": "2kyTsjLHcYeQzkvSMT64MNHW3Emqj9SgyUb85qVDoyAFpc8XhnXSAk6YzbQ17J64QGX9ofAHWqHcmr7EBxXaK1j5",
  "key14": "61vS4DQvJV196KJCtJNqiJNVwhZqnvJHAbzbqaUU8MWnQtJUrd2Xn9DtCMh6kB4YJqzcfrXby5UtpWM9UjiijjYK",
  "key15": "RixVLoCPBCWLcmT7x7ja9cecEASCHEqCVv2VUZgYsdtUY5mH3ovdKnqDu3riWDAXpi4s9b7cd9u7gpwvy71TMcR",
  "key16": "2ysCGSAzPaUxsbYQQZcgxTpofLUMJpeNBPgxBVjGbdH3UVhdqqkEVtWzPcr7bbf5hgwDDVJBpLF5Kcpsk4Lr1Yc7",
  "key17": "YhxpkLi286399Ppp6DHAakRBiDn8MCEnCjYxphRyFjScrpK7WEwvYXWuhYniRriTQYZtZBfbvHMUyN97UcepBZc",
  "key18": "15sEPQ2CRAEKeKCTZ2h3T8YaQ8HeaPBQjMZCeT1ECAmomo3ubbNvaewL6jwacG9hBrP9tdz16aTKNxnZ1A1QaMd",
  "key19": "wQtGNu4svMymhy5X8qh8mzsvwT1SCcJwu3L2rqBLe39MmWPwFu4adqKafC14ZXHxpEor3pFy4CSfxxGdtm1Cqod",
  "key20": "383HhH1FSMWMkV8bMzYUS4vRdu5E2ib6zg1tH9YCPpA8AH9s9myWsNazDPRMwTH5tzRy5c6uVMWduarwiSTXx8Jm",
  "key21": "53M6ujQbecBtk4eu8xuHyRJxzpYGRKr5zxntrJNVQD7frqAocXGXdBqCUkv9Yb4otmiuP9drUy45aWCtR6hh9xoy",
  "key22": "2ZCeLzNqj6VS8Aqme77syDyF18ntdxNBkXh4UoNweptSud1AQhKZN6pD2w49SL1QKVaZAQQfMXqMtaEZX3yuXVuC",
  "key23": "4Jbeb8KyPkEMZRWEMcXKE8usFxjagUJYHXEteSTez73zSmttPU4t61PNqBbTro1itns1BmMLTdhLtyTrGumj93Ev",
  "key24": "3sp6XRRyuxXmfcu1A7kfQDWaJvryuPSMEumuipeWq78b9R7LZYZEmqC8HULcY1s5hkYNgbYWgM16Knirzpb4n1ca",
  "key25": "2TUfsVQbVnFqSN54bfD9GA2wQjiYRTy34TYU1iwu7vGhdGogXekN2hor9mMiKXGbnnAXnWmLKt4TggYyd3ujMhvs",
  "key26": "5bkUose43zMW9G7HtnNDVFpuvGCUoMSFGgUMmdT8RsGruzC3TaapMf6G8AAcDYLe2bbWyif5JKsLCRenRA2fF4dw",
  "key27": "5SdTVZxRFacKXkXMYERqXfCwdc4vvVwuNaSuSEaxhWhDSkMXRePpgqXyNNByspHKy33PmbaWcKYFvwcXQWgJGa9k",
  "key28": "4taoLBF4A1ZxdLvrAqcePdkwZgmk6gy6V4N4f77WjvJesY66AHw3gJzXzwGxd2uxKazgLaGwrv4fKipBetdvFpoD",
  "key29": "2Adi4faMMjw8LWBsbsXru6n7hScyhqtfSYpiVPCqgaAqZ5xarJjFDoZ43m8L1rxtyqJKTPFSFxDmjDn2mPMGJx5S",
  "key30": "4QLS5KYZjguYTiL9qaBZdhjYJxEcSFHkCedptXnnfG1f2NBwutN6HydKHsVC7WMACsMyyZgVtoK1VDMt9ZpNKfuA",
  "key31": "5Rrrrm1HsHiGGQQE8cqWRzU1zsxZNDurJhMXWyzRw6n2zmd9ZyeEn8a1B2mvV9m1CpHHANVfQyki6tR6Ctw54tQK",
  "key32": "5R6QwjcRrzMoFumV6dtmDAbpwSVjEGyHDGwri171EgtzirBMjAE6UJ4EoZs9QczUGJrHH1JUGyVibohs7gup383J",
  "key33": "2AEvJaM6ke1aBxTCVMggUMF3vQR1so2Ec6bAYgWPpmPXFCBpezNy8Nx2fTTHUVh7V2bbzzTbMzgJDQ3h2AvrBLaG",
  "key34": "Es97Vq4AC2ir85EgzSzVkVWz8FxrAYCHDwSA1ZrwKYJFnCH6o9bS5qG3RkbmfqxYZXYLmxXXfzySgniAe1S2spp",
  "key35": "4NbdtxvVbCz2Z8xFcwETW6TPA54ZxghYKobVTp4eSb2HXEhrRgrgNwpZ1tsXkkpmA486SVr4oHx4M6zxirHwrFiH",
  "key36": "4Yr7W4iV7tHRizD3DHoY7vUFvwtaxmyvApZBh7VqCQbHLfcqQ1v6Y9DfRSBbKKqYuDPzceYWCmD2EdapJzvXQ8gE",
  "key37": "2DnttPTfP1ZHoVbTUAiQE8CkK8oxMiogdSP5W5Ny1vYCMm7qgygH9RBtDFUS2k4EzikNZMv4UvQWzTmsHddHyWTJ",
  "key38": "4rRcZjxFKn7maTvq7iYsSCvT8SZwRjCgzPnxQtaLrxTNvRc2STkvkAzTbMC1cV1mU1BcvotTRyqDHh5qfKG59dii",
  "key39": "2w2KQFsXfxEx4K4BbEuteS5gvtwkgHFs5XTrRAeFpAoE1Ac3ZhJr1aeGtkxAf8LWozrLz12FiCAipmNhfYkzLcbf",
  "key40": "2MhPPWxytqDhwphHVfzERU6DR7jMCkVZ9w1FMNcu9BNpx5bqH4gshDsiX3x3QL2Sdq4RugLELjEfjFgs5GUdfBhc",
  "key41": "52dRRpBFGuWhe5UwCmDQWX7STKHReCdAP5MjwkU1thdgeuc4smRQCkPu4pVUBCzNX7AMShcAjTouQQtj3uvco7Mr",
  "key42": "5XBvcPC3EZK3jKt8TaddaG2PGEnZL43rtZYCge8CA4xUo6FQj4rY35vTmpTHCm7e8ABVPH7dniSnGbNXdt4Rpf5",
  "key43": "XQgq29oBgjUMRLdP1SLCcBjR1geKwALjdnZVcUxFjRhRxcWHDqR6FEZdEYtJMieqp7UM3W1fKzDADm7siezgHEg"
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
