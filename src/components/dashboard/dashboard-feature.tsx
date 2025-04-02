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
    "2CB4pNEG6nvnqjqwrsTSrJqktx6nP7vrRtctjKF8zsifiFW9Paa5BW8pQWZWvXjoHMd3z5Fr63pzmaK8RNvp5Pmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iDB4t17zgT6UDRU8CvrRegD6n8UBANoNV4JdjTqdkY45U4W2gEgEy1RBERX3964vBPBTesguQd63pUCVa5VbFn3",
  "key1": "4yvdZLZxze46vaEVMdGYGiqBSaoCjfwFX3cCA86ggc2MRxeZNgMMoKyi3c858N3HSTs9xPFtMkDdzb8KRBsumHTu",
  "key2": "6EvipDQ28AW37UWGKNvAhXcbTX7BZEfBqbkstSeXFBteX77prVRSr8wf3jdnre3uNfcnKyCfXtiv9XYSUjRY3t6",
  "key3": "mPhF3C6pRniuMCpfrZGEwifWpVSWsRbH7PgXhmYx2QbyUyG5wbBKABWmLzLaFvUouHQtLL3T3ytb7ksKTGfqJHn",
  "key4": "4nWibJXbdWBL5h2rsjVwJKFwUpJ4kCFCGqTTFx79cUTTTtqhdQwLkkR76ssysmJw8yLwkHGc8zZxcnvZRNuuPzKm",
  "key5": "32wgY7wp6E2FfnE3orbBPmioHH4yHeVCCkJRWQ6YvWLpYXq4e4xwTtXfYMqhkJvpVNNzooi5GdFiDjDoTYgdtu2Q",
  "key6": "2XcjvinT3amNkkaBhEn1nPhzktGQ9CMcxvWNkqaJ92pVp86FpijLFftUgPPgmWL2g5cxk4SKdty61fK43fpVqPUx",
  "key7": "BimHW1Vcff4DPC8fiA5TvCNUuaGbnQXm2fqYXthxUXFAVtPYkKKYYZ6FnNBqPjpAUWcH1qyJ1qGNhFZ6V525vsw",
  "key8": "4uyrvFfPThGBDZ4d8BVwfMvU7pxwT5eELKf5Y9kpvafvkmgh8d4t2TAgkdfispb9aii6BKMSff51wzLE41NofXsY",
  "key9": "65tB7KHkL8vkzJQtc473dApwTAPYswvaMqVmnTFNr6qaARrB2woLNUPkwJHB7QXRYNZWyu7QwQzxoXPaZFKSFbn4",
  "key10": "3C1XNYYZxWTxdj9kWvVfSMj6bJ7Lv8WgRRMkdUnUuY2jfwcBDwyjpP7pp7yLyhhu7BvrHGaBaB2Ck4mcRDsCJKRD",
  "key11": "4CXaiyX4Ze7BWU44jJfpDmaBTtQp4LL2X4Q4eMEqVFMDRRCdrnS5pGCF595vVdjdeiEB7w2bv8EWWkJz8tnzYf5p",
  "key12": "5bkowb4FYDgn2Gb8DHn322TdDTipHZmUp7PQ5zyNytjHWV4Y2qAFAAMj7fCC2b3ZrEzX7oXDHRsoEds27Ci6RCXk",
  "key13": "3BieqakHrAUsrKYcBvTiFxqWCXFGUv7a8cGzfUGhWL6E4ZWrqz1GWE3hBRZx66GNMwBw1kzmz6gdwRpYJZwvVcKw",
  "key14": "5avoizmHpeF3YmA2Qzoi8kZYC3uSuV1EUEP88RYozr2GAmrxkwJJeZZQELtzSZRRZiyGsa1zQDrVKpqCbDDAEFTm",
  "key15": "5HW4BAfYau1Dane9Yx2hwwe4CCQ4htjrcRcTjwYhqBjzBHX8aiVtu3MvwJxPMipEaVKwdiHFJ8e7PRSkDVsdSKGh",
  "key16": "NQe1udT2QKfcUW3GhhdTYRKDUhj3axwgNgBSativb55nn3YtHvNV7siA8VP4PjotgU99U14JGau29D8twtwFYeV",
  "key17": "Ab77z8bS2mTMwsEjiKxLHHCYnTyKoWVwhwAB6j4WuKMMRXrgSPQhPpDsF5Jxq55QiQhHqNKkTMeBjod1rHmvM7w",
  "key18": "JMNBdkQNoNcdnjFQiZ3cRBmBSffD5dK2VoWuxkGoM26pHjWcFavW741xBoqgKrkNtc6bSF23V5ZUQ1oiuivKc9t",
  "key19": "3FA2xT1JUdot2Fx96ThRdq8qLSqwggBHCApMKAvrerM5Vosq11cb6FgJsHR1MX95YwMhrXjVHQCS3zvq5tfMBBFE",
  "key20": "r3kdiUPGwM1R1sSJ2QUgPmkEH8FstbhHuYytCcWdn4R4cjkEkj2we6j64ePDWZjh1BTJLM98Reh3jtz3ad16c14",
  "key21": "6antLhe5iBwiDgwKKZEaTsG84k92iy1u49AazrXWc5o8pWhUYL8VwWvLMNrPHfVRZ6fZNoiXC31KrxbwtbUPVVQ",
  "key22": "cvSDdtAJmjvaBWqw7KgQEQox9jNXFzppJqTizHqRDU84hLnZHh7uk7fcypdRMAkEMY3bTizrDmFMWzUartCgn7F",
  "key23": "4ak8ctebv3bpUzMJNWbAcCf4TxB1RWzip3kxfNC6eWwPzrLt1uq6FXqBEhJib7oZFos1QLLXTknGbwBJ4hg4c2Vy",
  "key24": "4G1xCx91qF5B18TfNib5goznWd4BKDDoGNUjtp1VtEgsazG7YgNejuDXHE31maFuxSoNiS2ucaa7pBVMchNFSWKK",
  "key25": "5JcsuKE4QJMV3SJ4ihjCJixthJc7DHPyq1wZNJvvEBMXCCrgeUqe9jdkkMfCm6wXAYGaWfeabo7hnLJhUMUnLhRC",
  "key26": "UtqT7MU6ZteLqzhh1q4hhXwQ8tbMXdTfz2PFYPex9ZB7fDSYpcsn5KLgUohJ1LE45qpL8Sg92tY8cBKtAseehef",
  "key27": "5V9BvajV3VStcxZsjDLk9HqbzWKoK8zGqEz27JAjHHqqQKFmZPahQyCeSpaAJxy9GPvXEK3YunSPQwqu8c8YDweG",
  "key28": "3LXSDJe8xJBfepkde2dGuctX7g5pJ9VGiABGimdJgkMD4WoQaidxDt8LSdwmSmad3K2ZRquuHZeyJKaLtTkNRKRQ",
  "key29": "3RZ5zhqfCX6QURaZufhaHDZvQeoT1thtK9k2YHHNCk7NYAsjVq2vXkp8EofXPJCZ84DN9UDXLDwDLsxWnC9v184J",
  "key30": "3GYfd7YiTAUMZCCYgz2u4wxqVEk31Uq1b8nZGG1iJYnEyWLcfmggBBeALhAbKMyLcrDdmtxqrBqqN4KCd6AHsXJz",
  "key31": "5okRCVKQArPFvG2Jdv46rMDmxP7S21x4Xx7UToQqDKN5UWzncwSYG3mzXAb66E7n7KzyQpRzUGvVAdqB3nM2n9X1",
  "key32": "63WXURZf5R5NaKgPs9DKnUmVZz5jy4K4WdQBL2kuKoiNeFNEwFAYYtLJig5QAxTQuhkN146FgnP9CdABGptAh8dJ",
  "key33": "2yMaWku6ZpKTKEf594W96YmUMarV94fxXZ8TxJvacB1aKsAJmR5sJhLifg9bWwdpEndDbzaP64GmKnMa9BHwme2r",
  "key34": "8tfA4Dbtd86SJ4T2GkpcGLW2cqtXWbKuRHsQBJ7BPoqHGjjwmStnERd6B5f72BBUtH9VHSLcvHeR2g4qbmJnV8R",
  "key35": "2MGxAvFCcaESAgird9bL82SGayhc4HNBukVA1RFVXdNuxkP1WkxMchsSjxCYWe4EA6oHnJZuhvskZDgHMDppDqyg",
  "key36": "R2iCR4Z7PreSP6SL6p7cG8Kmdqap2iqC1ovZrYnyoVE4rudmivQgrhXye95NYQmdXN3H4V5zssZ5w8V8EC5noGz"
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
