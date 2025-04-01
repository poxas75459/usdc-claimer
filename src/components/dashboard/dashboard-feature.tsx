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
    "4B6RQ6offSo5K3Kj6DKVBvUN7ZuAmdB5FYX9pE29Yf2UEtSMYoHDRtvQGca3xEvcGhJZLoqYYXQ3b6AEtJVx3hWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66SmogVxnUof3gobjyMyUdwAeLk55nGhnnheKyChPTQZKXPJ4rUFVLBtnKRcSrZkQ6fW6rvktAPpnP7DFeVSUQee",
  "key1": "23gHMtVA6BjsSUD9gTy3qYjXfCDD7NxTKg7aqoJg168YbizkWXWStFx973BDadwpnSrXtB5j2RkTseVzkp8AX1cA",
  "key2": "tX8fbFwFWJopKHUzedRaikrrpJ2CX4LSPqpnScddheFcxn9LGpxhFBEs9qTXi1siUg42Fsjbw2dBSzCAaU4YNo8",
  "key3": "4GKd9xJyJSWqDb39yDBfoKebeCuMPDgi6yQfDPQeDfZ1cqAyFbtq3o6WweNdX2GDKq6S8LxGmRBPBAKeHEdjuhci",
  "key4": "3Ppj9cUZwTYS1M8A3m5UJ2j6Xw8kKmzdR4xoWjRvKM2nhdGiHbxQnxa5mEuxydSQ9HjWU7438WA1dBEmxr7gSWoW",
  "key5": "5dBnm7icNL9htCv9pJchAQ1NmBYiVK1rAA2JSVp49x7e3SdDDwbDQYDX68MQo6PTRcfYwNkJoWoVfG6jX22iEGGv",
  "key6": "YNRfYzT9VY8vcBQeJHyFiLnJuJjXQMW1qYh8QDzQYz6sKsoMiPeKFhFowaiawSUZQTgqjXgeBNWTN21tG1bwWhb",
  "key7": "5fRiiES63hBqyUepuBcHUVzocmbffErjpsRR5AyK88qzYr9RqHzqMetJUK9NCU6Ce1UEEPHL1CtxaZPDcLy1FpLf",
  "key8": "4dhYJ8mGtycw6EwG7LKoU7dZLTe3hpXQD45qnyjubQT924D51RUUeofDsFUJCG2HddfBeixarPzwKL7bqXro851k",
  "key9": "54kaVHDRMxg1LVJGrLANVZBbZT7odQbbf4rR9WKwJ9vUNb8NL5uZdJd81hBjxrd4LBZwmoHv8DZ21tQC6LjJgWBP",
  "key10": "3NChDXU6xuE3frmC7xgrLTwPhtF9FfQPCNE28m8NChBzMkW9xrvnB7yK3MCtgezehBMkdVsH5R7ZUjpNFVYcAx1p",
  "key11": "3T7zuoHHHFEozYWUUNFQvoaXRom8geaDncsEoCQJ7j9AVMJC2zSc1W3DCXWur1u52C56T7xzCJroHgH1adU9MRfr",
  "key12": "5uQJK3rLbFnGx9zpdpMLhiuh4zL95QagqvBZiXBRH7ty1FiDsyoRf2sdRmySfv75W67tCcbhvGwSEByRjuLsGzMx",
  "key13": "45UgtGWoLvBXQRr2ZrSxJvyuoQpfp9jA9G4MNNCf9aV9ieTZx2ShzohUwbqTPrrnusLAF21pUmwSvPGRwKDGPSZ7",
  "key14": "5tUE4wwYNMv4cnVKAddiCvU63bfLxbd5ArEQ6FXh1kKbgviNm9JMfisd988hZGKF2EPzMXqJa8vjrG4cuFcodVQY",
  "key15": "4cYZNH3VJB6GtTiqhsRNB3nsdHoARxFGvPoouprAasrLhCdekDYXLpVuPamffgHNYDB3z7ApsMtfJZdz5Vux2a4x",
  "key16": "5U4BL4m3RWuavUqTsgPqHqeocEjKAzsJ9cLdqkJautQ9kzeFKmGzggwTA1tyQUBks88wUbnEA6PqT3RXuLfaxC21",
  "key17": "eqwLBtA7DaFiVSdbmNJ2hEd95s2frJ7cKmqctVxXqxHZ9Jfa9svDsbQ12cy1HFSCpbgoZdCRrSfWFwxaMM4GKdK",
  "key18": "3R93S3QkjNVTn8Gm2rvSSvd22TJBNENAxd6c6bwh6c2Ur38ViFbeaqmG2EoyyEGrYdLEj5wa3icN821Q7Vk6QAqS",
  "key19": "1JjeZn1LbzAzbB6JtyJinsQ14smtxzKAy2ZeqC5C64hFq1mU5eWTrEhkVWSmxAc3cBq4Utz8hP87uSAGRgHYxdS",
  "key20": "3E3BiRKK5SVBrJgdiYNo4gLUw6XurVVkgd2SuBk3daLyiaosVRcmpszfHW5a6Gpi6bBGw7ZnjBiuMZQRficn8uz4",
  "key21": "5X8NhcDeqeAXTmckbfz3iYRczFmCVvFxjUqbHiuQK63FHS46sj4B4kDgv7PodeZY6V1PyopFwtRjb1hEf7RusJcs",
  "key22": "mH2hotVkz5E34gr2hbkQDfTbVWiMHQRuUbV69GQZXBmpBAZmwnGkL3aWapJCEZ5ceBooRpowHs2rhZCrmYo54gN",
  "key23": "DcvxZzGGt1z3oJVxo5bY6Ck3HM9bQkF3STBPzoqwzxtotD3XTDNeZyWWS3tH73bSWhzvCKdntoU2ZGiev2ERbDn",
  "key24": "2whmPLo8zespcMRzS4JPbooFY8DccmdTPjBnmvZW2SuwmoxMkVebSkK7jEK7qz6SsQc1ZZdnXfvwMFP79L6x7DCD",
  "key25": "3gALsr4FJmzPHXtMPqR667MV7MphW1kgmaonXBTzyz9fUsAHvp5N2cf1RKkKvsVy9LG46tnpJYFWSLp9znU1MknF",
  "key26": "3ms4y8pnKBMugv2AcP48fZYUWpQojtZrHLbsSLkLK8rpWezSnv3RtwvVVUrqEZkPdZ1PejwSVZQVcFkZtvHq5Vxw",
  "key27": "4m2w25Sj4bemiEaZ1NgXfSpbNkCpoKkYTUnJf21jeJezU9yZEAGCXCVNdUm1h3gNpKtefqqHi1woY6TJRLp17VUU",
  "key28": "2nMQTAj7hrkeDRiAhdGDzz5rBbiaUYsv8kM8HkduDvNfDUN4EDKsrRXdqkdCHCc5uCi2d8SKVqLtRNFkmSeZgxwc",
  "key29": "4hYtFm5NXBSLr713PBQsz5UVgDDwXy5vSGaX5MdGhdrwRjaxH1SzL2V8Z9HjGK9BfN2tpRs65aYTPRiaQP819Xxz",
  "key30": "2aH1NyfPUUp3SBVZfoVy69SRM4iAD6nu2o7UgMPWGaNAGmP79pJD3T673d7gQi9KHb1Ys8kAJ3bfdtW24JHuWgZv",
  "key31": "5VVzYZggijAMeQd3vvvpKyUy1WMkWuNMXRqEkJ3QWJKY8Rr94orucMh9k98xpXVnXECuiniip8PmimVxf2REf1U5"
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
