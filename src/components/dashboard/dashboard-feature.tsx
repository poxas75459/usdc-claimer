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
    "4r9WHZeeSJaeEjf8XCRuGun6E7RtsphW7ibE77a9TrnNFnuMX3hvznX1BV2inWoKgSc262GUGCwoLbD6duenK4c3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "513oayRzePYbqoWMRgoiN4PYXZ4LtvUABT98s1YCbhekDcARHpqsAAJFEJ29huspP4K49H2ETQx1ceJZWMQB6fFg",
  "key1": "4h22oYHRs1vC8hRGCiXQBzNokvixhdB1QB4bpN5vE9ybLhyDpVEFVkyGqv6QZNttcMCay19MCr8m7LaonNoKrU5N",
  "key2": "26gg51SeUQK1ej966ioNK1ffaakRsdPgcQuQ1fnqFfNH9NnSmnZnRC197Gut8MsmWuAwweccF3GYN2rFvWbkFg3W",
  "key3": "43SYGd2Ku6uMpYakD3p6k3BWiUeCJzTRpnTMQfA8RA4W8ASt35s1GNCoSR16oVGvTkBQBuqqQt5j7r8GXLvyADYV",
  "key4": "QR9kXEMWNpsCUuygZtam9XCCZv57WpNMgEZYtLpmZ5VzYfZVcN6RvEGQEzoWsFoZFGrJpWpKmqPdE44JEKy3cjH",
  "key5": "5RR8ynQqpxXZVoUUxPTvcuEJeZgFmHv7MRQNEXyeSKRxK7o5KrMhHtHGaF7j2xMkxtc6SjZQJisrVJx7iCTZKS3F",
  "key6": "3Mcia2SZG7iLXgSXk6Gahe1LW762acGKSEVZyh9DcfUALAimeKN5CH7c7p4cuqED6djfptiqd3MmvdPYwgeQz2cJ",
  "key7": "3sf9scneqMtDpnMqHYc5yFRZeLUjugcBGBRAQtriGXVqNuG42viQzGRYu2GaJsTxj6dnEHh1s8s9Kph6cTMBWrAB",
  "key8": "5yjfgk8xRDYLEYUVqYvNX7AzptYLGyMaEZWNCZ98agVR2zqjrdP6S3LtTBaxEAwKZ54PkT49BRGYYzxgErVmPUMn",
  "key9": "29KQxK2tSK8d1vGxSq7Q8JbCASJrTiJESRKEpGK8PbQCy67z4bukubZzeEssxuNMF78SwAxGvfVtNgn79gmVgbWK",
  "key10": "2zjYwa5fN556RnZJekQRtAEL19836GJ8zrN3GwQEPSXMDhEFCCw2rHscdheosHDQN9FcrnUSxgWiA91FhvaYLBHV",
  "key11": "4ySXRkifj1wEz3rQ7cTHMfEaaNp3nV9SBq2BVgxPNMiooGfbgKMC7uRhHtmSUkdMNLarW6XvpBR6CMKqa4ft9kXK",
  "key12": "Y5R7K8KJ3Tq785DG1nhNRPXVsPjkEyCcpNfnWJEmhNNjvYMeJb9NtVvSBraWMWcBbMDBWgXaVNUy94TbonCNRE3",
  "key13": "3cwZL1cePeipGeGEqjaaPZmx4uEZedrWzQDGxT5BXw8e4y4HdXGmetdCZYm2uBqu5xSY6g8KpjroqNNu1SHzM8oh",
  "key14": "4fxzrX4WbScZ44PJsAXqhWYPsECn15LJdptmSdbFz59ghNGdmvMNRjdeLUVxe1CYYdRppDvAf6SfF1j5hv5GkHNz",
  "key15": "38odarPVj5hodGwxeQ33qBB6yaXDHk7Fu7dsdWTA6aAGHcRkZCmB2P94z8aBsoeQPML2a67phZjL9CZej2JxcHzW",
  "key16": "5qAkW4ro72pbLBtTn6MfmdvePcBbpEeE1W3EuwSBmyeLoFyWRGTC8syXmJhBQMTktHBJdzNMPGidfgxwrcoTDE17",
  "key17": "5q7XEzeDPfV711QyFPSQ1geoqDSmsXaNeCvnNjvXGf2fbQYnWP2v5xEjhHDDuynymo584UKmPhQxBMM2yDufvN2u",
  "key18": "3FJAvyw13zNJkaA3LPtPgTCjktxBfxY3GYAgcQ9N7Dp8JgEN2cPrZtrpJyM9pnQjHgMMMjRHeJuoNm45E8VSdHQK",
  "key19": "3dWrnvnBJV1fMep82pW88vF5chwc7ppvtsu9iwppsGsDgWPHa34MiWBu2WoTEWE6DcaZ9ZhqB1fR3MKo4QtQ1nhs",
  "key20": "r462k6H9pFkUvHyPj7NCdcsMmuFvQsLNQ6x49hZn3vy61NP6U16XM32E5BQ57zUxays3RLJKBonDy9EPvwzmy9R",
  "key21": "5Xk1FoT2LrSmWnKWsuJYGjw6RwZq1a12yp6ooJxcqwMm26y6Fn4xoJ4oQFC5AXPK1SxpBJmEAfrxiPhdDGYbBKD7",
  "key22": "FXffWbgfLxBrGLikPHTgzm9yeiSbUEYYQ62jYjEyE8FvN8FoduLaS2tU97F8pc7YKDqhsRL9LEGwXqmYQviaBbV",
  "key23": "2ptB2GGcfsyrJJq9m7g8HCiT3AN49g2dd4gk9XjQrf7wXuGr3c7HCrFCdFwUZFQKaXFC7rHDswoX9gA3gGA3xpsm",
  "key24": "HiFPebetmJhXhMgEkVgjKBKFbYDmSdetTUzJ14bYCtF4WMKqdhYqwVsxKx1SiemQp3aKxMLLgNDDMXAAMdfctwd",
  "key25": "2wdSa1718u81kygFhKYgQ5gtAsCuA3SnfRcFk1kdZ9UXwbnW1a5piMLjTpdbweEdzCrHWdKnmAXonfZaenDWv2uR",
  "key26": "5ULY8Vomjypu4swNrL3RyWtHs7TqMXn3DancysRv5ptcBf4rzikDUrH3PWFSfKnfqTWXEvMDbC3VRHHMcvzM9677",
  "key27": "5i2bdZG7Uchib5vVP6Pp6KP4wuUzzruTBS7M6oUJHZfuwHDDx7y4a84H8qcHPH4cqEreSC7BoSdZ1ekQFtMsyhpv",
  "key28": "4c57oiU5RJqL1ZEosvETWkK2o4wazQiq5JTAVY4YeSTouamCvzznsSJGRx1CdyorukZKAKs7ipSnAEgh6spbQwgQ",
  "key29": "2n8tLFGLUhwuEPpBvNJKgs8oedPCzWDAHsu6LPFAVie5joYxkRGhsZNaefoaG8CxFLNQLxNDtJp2rFkNLGmWPDHi",
  "key30": "4yHp7i2vLHegHe4Fav2MWfch9LXBdGYdMNnWVRC8HrnmS9T2mLaSChqUUR725jhgrLrrGwr2LKdsFTuH3M9TNzFs",
  "key31": "53EaD1DCXVw5N9jbVdUFvY7Q22oWNBET4c3Bg2vyvZ2tTzLLjCq7f8p2CQvzgS56DjwzcaYLMeShv26hisW1cXh8",
  "key32": "5yaEET8XiucoVfcVKc27LBpYXouMPjGYYi4omnFHGArWgtsCLCArEZ4oKnec4MXTrfgUu7JRHYkdT5bm3LXugUiV",
  "key33": "41qa8mUzoXUSYt2Usps9xWo44UThDy3vkz3Kr9YCbHBQgvoSp9ebv3bzBcQxKGhT6HiaqRumBCzVvXBykvGjQ3Kb",
  "key34": "63cGQwzt6sNmrKMbdsPVugjrycU1PkZxgCHvq6PSmEX5ENoNrXxNtFP8UYL2ZfrUU8GTmUegXDenfdEkdgo8qXA2",
  "key35": "3abWLfxMJLJxnPv2k8pDSj6kftxiD4c5YUh7MkuAeHgSarePs7oC98zditWigXvkSuNMqRWcNuuMyEANctARocxY",
  "key36": "63Q37492WQzsJypd4piPkPkuPFUPLHnoSPqni4fKKB4jZcn6NywBEUZafhBTwCuSRvBKijcn1gnvyJTzuwabzn3H"
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
