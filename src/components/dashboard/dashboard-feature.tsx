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
    "hmKegSgTYH3v7HFpv4c5PB7euqpfhZ8SmeinjePk9kWbkDkvzvRYBGzSjgJFzY1avsbG5nzQtsQFtmEqSWqpUbs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22PHeb2qgKfSB88J16Ssx1nu4J6j1s3aKvPgDkgi7uiPGXSws4c77N6G1NmGPz52Eqqhz6B75otySmxggybkNqpr",
  "key1": "5Viht52ifkxAMwPgnLC9wD3cW44i7SzTKpnMGJRnVaMsSLc9Lj71R6Gf4cSEzcVj1A7n7yBvC9F99mdw96eb2gsK",
  "key2": "3CGfK2ng4XPnqQMXeVSA7BWd4FKTx8XpAK59EjQHNNvrLPQFDMBWBz3bTosDzrm3U5qJrKNAXTXxY9YkwNzZCXZ8",
  "key3": "5ymC2QVhsXxNpmsUZvTWM4EiN2LX4SxsRvPuGiyEmfte1XSgZTf4nhcMZ3Aa1CoZcDLEYPS6auQr9Zy9Jb87L4Ek",
  "key4": "P2q9nEqYGW8Ch3mZ3fjoT43wek5Nic4XsF1AXoptrdizAzQTmwLWt8qr7bXaPyRgt9auvtTuBPuLWAY6sxCnrtx",
  "key5": "4UHRe5ZECoLgmJviYVPvi97DArQ31mHeC5tmREUPxEKFrHv8nRYwhhn8hKVA8sgFcuULNNCxawVFbbWQBLydzBH6",
  "key6": "5Kydn5eFXxXpiUrAvAJyRmijpAkvFWxYCqZzfJBSGJzdqvqDWsVUEuEMwWVnjQqHh1xkbpFrt57RM8jN4hhBNvFB",
  "key7": "3876tG2K37Wuv1Eu1KRJgmHwBvbqNn73My62PdUxnqvWAyEVJXquHtHdWeS1DHAvUXmmABK6ayEXrcWM3E6TR2vp",
  "key8": "3iuUZTxud9AvMPFABcP1kxoKg2umxPsjNKSJoY97Qwv5ezGMZY911T9Nn5ZYAbaxXXLRFcw2KgW5UWmEKM9FbEUB",
  "key9": "qVouEeykZ6yma577t4uYr4FvGCqqh9idtKRYcP5E1Sw3iebrVYe6Sjjb1RCMqpjNsJoSUJHpWQVUTKwzokz8pmK",
  "key10": "4B8eFRFW56uTsBtWKNVm2SKU4PZQCrg6uJR4aXYck6f8EWmHV1eGdsf74om2brkn3S92b1KdWdoMFgLPHxUodGzT",
  "key11": "3RcsLHrp4k3fMYGzmZqHFdkK3sfRbv8AEaVqoYuDmjQXC7n12U963gJLpJGuuffYLJYQE61eQ4UxZv47R4YUNxhZ",
  "key12": "5xqKuDamij8WnkxhJS4Q9rasbsG5oznRZxDSef9bFueDv7dSfLN7EWjRwX79E2YKsp4DbBA9wA2UhmKtJgQStNMY",
  "key13": "4tFu3cmq672s7azCfMGJtkLVMsA18VYfmioC1FcBMb2wWcfVLQFPSRpbJJ9Rg9efp8KZPseNwsquqFsw9ENwd5Hq",
  "key14": "3zecMXhgZD8EaENuQWSnZk4BoTt4x2et9rov5LvUVrH9kok22ts1QBCYgU8PhU8SbnKohq6tFhHGVqm2YUvrKSDf",
  "key15": "A4ktWDH78KKuMsNPadWo8dpW1Lfj1o5gbs9NmMJneJHzDdacTV1rsSq5bRGpzjWxPqgWdEQ972377H8tMu3ivTr",
  "key16": "5rsLjdjN6HMBLrTFrtQDmahjkDvdSVyxE4Tr5i2KUgV1SAXJAzHY1PUZmatecLv3Y9qS7HE8wxQrQCfioP7bBWa6",
  "key17": "2u9uU8d2L27HjScosALjkEqoa5VSKf19HgbfSdgTmXqPT73YCxEZYvywpYxvy6fNEL1DvXgJjwbkMFAtbNJDA7MG",
  "key18": "2iCEb5M4K8t8wFNdx8fA4uVSHv9c5RK79Smu8Q7APwnGZCuznNrPjsdLPdaXy8rfAWnKJS9Z618tFk7BkLUnc2Jz",
  "key19": "4FuPRa9heAmKSc2eAzDc5oYXtAqQJZhFE4j4LtwtkXbKMRJHUr7ajMEKUuZHETviQFattNhXo6YGGFDzq9CW3gSo",
  "key20": "4Vr2p7Nkj6Cy4enwmBPsKQuBgBZR9exkmGHBevCFmb51cS6KkqqXosztEtRNcpCNB8KiYHUNX4fZkVZevrzcTaTp",
  "key21": "Zug2UFA7pu56qgFf7HY4LVWsv1k4fLsVREkuU21egc1AUZ8a2XrvqdqP7ZxLuTL5oNkAA1WvsAWMxZNMrEzzV8H",
  "key22": "4XaXGMDngpmzKKwSQbZE9sXjqcSZGWxd12wVucvg8spHaVZTYnRfAL7tCtYSfNjB2dyd9WCUo2miQ4ypMU2QsWuR",
  "key23": "2c13xPbZFndUsCq3XbFtCLRz7nPk3FFtsPTtSEEJ5MCwqUfG9euphsHxWChWzrC3iotKmuiBUanWuqRV8LVzSSWt",
  "key24": "2tDSoGTyKwDHgFqR2MCcUWaQRzX435kEYLnwqBZJhKqyKh1skYhV3fUYvdvWt1VEAxbdPXGFwua1UHZ31X1iMdg",
  "key25": "63UieZi2XuZNLCoDB7tKwrmt5MZZFruZY1Awmz2k3mSFJNE7bf89GDshmBZGpBrKE7VsuhtWZicFmCiLUUvwszmG",
  "key26": "3HMkKaFGR3fML2Zb3ujynBjKvoJVNA3Uygx8q8xDCDSQbSSbNZ4yhJaJqgkUGZ42TQzUZND6Y3qeZxhsrPytXGwq",
  "key27": "32TdQiiE4utc8peZYGbmXwX7cqxbJhtznM1Ug98VUjX2W3GyzkfgTiLWgeZE8deBPFaneTEvmXGrxqx6u7zM73cJ",
  "key28": "2Z6xnzxGkk2aNHAQGNok6Mn7gy7GNbY4msYD7tJDnmkP3qD17RwVAocsXbGnmYWyNeuitFDV6Kg2fEmY7i4NmoEz",
  "key29": "Wvh4RTd14M42VEfAs7ESrSaufMsk5zRswTMVd6mSDMnuHodAu8vWpNPzZVdyjM99c53zarGndeQrGLHrWDBFTTN",
  "key30": "517rqSm5Q5gYKjKAYcUNjNm8JeNNLKah6y1AsyC4ptuCTqMVBMXS5qXWk9vpGtFTv9Cpdr6d3D4t2PDWHM8NpVvJ",
  "key31": "3VD7KxDN4Lh4BFJFTgpoKu5bJMNrDvKQLjsDz4aM91RZeNnRMg148zTSuBPFrUtR7qCbxdZbPPbEoMLCw3hkPXgg",
  "key32": "24bj7MkWfE1vhNrgocD9MV1cTWQNZQ3BtSRTmNMzCmHG9ksegNXV6GidsFgAJ1tLyLVfGUSnY1qsT5oHJd2PGBU4",
  "key33": "EFy7SFL91BXhBSTzuct7aZLxCNvHWLxfAxYh7FRyehPbrAMF1j1hXUwvBrRShiNgLPzEiqXpgXGuNBjNp824N73",
  "key34": "4h6s8nFvCjzzm8W8qM74tWAZSJrmq2zhrxMC8LzDJza12493LoxRoQjk1eEjv79ZJEYdDB9whpPFs2ZwTxFnWDA8",
  "key35": "5gXjESpUSShpWS9H6AyNrhymQvBWJwfKAwA7EXNBiWse1AMDtT4EXWuWT2z2XFXE5Rnsjm6yyYDJcGYTQPKCGXoE",
  "key36": "2HLA9SeWAajXekFwnDwWMVPZJndo3M3JnRXXbk4BZ3ANBxAWUcywRJHRQ6LuzDENx745PnDroC9h2vBXLPTNUnVt",
  "key37": "WtGSw3Gx1VMjq6jJKbvyG2pJRUbTWUPTMQBYq3x4HWrNzfDx64s1XSqSwRUkUc8Gycqpv4DdAXR1M4fNXkJwqGn"
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
