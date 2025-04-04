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
    "3zWRY1CXbpqEF4vXc7S89mnzzumFkcrbjZ6yTWrf3nB3B8PUMJNmmDana6anDqbsjM1sDbRavCam6rKYMJa6B5Y4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56C2u63jTCdxMiRpfCvZWCEe5iPmTXD1WQkEQmbaVTk7zpppkh8zaYrhqGCeYbHmuQZT1K2QxBnhkdBNsQUGcMFZ",
  "key1": "4uR8DM8DKL8Nksbibz21HNBGMDdSRR55M4WnF2H6TBx9E5L8DqKHS7uHTMWyrmVBh48JtBpLStqEZApusLh29Ykx",
  "key2": "9YAdwWuKyNkCkShFNpjMpDcuY2NNUikyEauGbQFHwq4WN1cSrCVatBTCjcB4VZBdToYNRtPU5R1CU112nmL8PFX",
  "key3": "JmR6YxwTZPNe7kwQbtP1okTAc7LT16DWD4ZVVnnuvbkDAnDJ8oHvm9iTSfj3o5m6d2TeFHxyXfD9KjyPH4b9A3D",
  "key4": "4LouyhFzfQA3GywDkxUmocNnhgDJ3ZUf79GKwm39rD9Sw4ropoTZRhvBaA27axjt9bw5hkort5Gojap6gQbzgHkE",
  "key5": "3HU9QJPF1gR4CALELL49Fit9cgW4WqMrf1RQi1SFC9HDkrZoFpvwWW4bb1q2QyUqDqiyqqqVjqHTW468KwP48LoL",
  "key6": "d5p77Fq237Q91DxVs1AWMzi5FedeapwuSQ6R9pow2iwNVK4KNo8zFEqds6HzM5arLRy94V7m698EskHETejY6Sk",
  "key7": "618SnHu54By1UWd4TU41jeUxRoi9GaRuqM1J2bLt5M9sKcqSLS5B92PDCxpyKKnBHkWvShPKMhkjaUoo5CkeRuiS",
  "key8": "Pp8n99YkmY2LduQTPfx43Easzitxq4TiCmC9eMfkTj26Ab4ehU2J9w3DcXVhWUnYYAaLPZJFvKdmbg4kA974zNm",
  "key9": "2voLoDyAiATR3PsvnpB2n9WqTHQw7A7V6uTe5BWmYhi46ajbRyJutkHJMFMYcnrrW71a3nc4aTPsVQoGzCj4c2bm",
  "key10": "2Wq9Vm4BFtYUBRfv27YZkFKN3mgRpqHFZaHE4iqnWMmifTEHFonmgu7R5jjQaQZy4CVXiCHX8qmZM6aPeQB8fM1D",
  "key11": "tq4M2pKuWxK5Nguzv6zZkCqttSjcitihkx41gXJniQXq3Fyp76TdVHPt9uM1sKfA4QF2HY9Vo4LK3P5UroXrxqa",
  "key12": "2MXrBc3vrFZXK2ctT39PytTMmXg5pP44yuGuJfywyfvjus6ayezWriwo1j1d9CgvUsBfiKP1nD2D8w9VbXmBxngm",
  "key13": "2YNMpUkurnN6kXhdhPTCKxfR9iDdupdH19VChNzA4U7v4FEfmj1eTXRLaYQhzb2XVioP88TsJ5YbPM8R9hJ9KVsw",
  "key14": "23q94Ya2krar2rronndrAdvFkXoNRoJ7i4hapP9wrENjq3aVJsF4HJtKbh1zXWK5gVam7UydD8tt8mhLCG9ij4FB",
  "key15": "xhJ1cYRsF9wj1rk6j4Qq7r5xV8vWsrRnZRuzWh93exiMWbVRw9utruj9D2cEBashQYjYMweWeWBbRrZ7rBBZx79",
  "key16": "yaixYvc56ut8NfZcCNxnBFkkgNePHzWuJr9WMVA3iyqPBVD9Ejmeh2ujPVbSvp3e6vvM5wdRnMTXfd8ptdkgTwQ",
  "key17": "BTRTNhP6yiixEAtHNUBgJGKTH77KU5TWQhtY9gtTMgvxJKP99sKqBKme88kb7szZD55KRWbqzNsX8zH7BTikyoF",
  "key18": "5b7CeMxbTq9hgRxjDg7oaYDRvYpiwKRZyiC7XkSwQbk5dmBNYwNrTzX6VjhHitE7oZkNLtspfBKs1gzaakXpj5o5",
  "key19": "61RyymWqUnp5MgdjZQqrqSWYX5mxte97Q7ZgCxztDA5ussBWv7JdV4HsUQvqZwWjz8VqKWucBEEDSHRBrbScdpMt",
  "key20": "38bmkg97BdEmqakSpd2QaCQb24LbwzcrPunruTqdWVnKXv79BjuftwHhzbPSXgbU6wmY43TaDMDY4m22ihwfafPQ",
  "key21": "2GespeiFFFGG67RcFvkxpEkXBcuMocRem7Va3o5MVnwLCwx6ZA9A9JLkrxREC67xPptkpMyAMapQbGAgdF4fJfGK",
  "key22": "EeY717WAhFGrf47irfaKGaz3eEGcGuoUH9N1kzv3iR2Y7KVYEibnKLahsaKjr1BhY8uGJxvqLDfuSjhUdQU2z3j",
  "key23": "2BEVnsLJcGRRNEjVLfMSKbTjagbT5j57XgezDuby6a6JscZ4kKmsLwAiGyUToC6K24CJeZS6iy6cbHvxPeBnTG3E",
  "key24": "913num7eLcjTih5CCpqREYrZz7ttGfnESqgWxrdLvY2vmXcgZi8pCSBwN8WTbUCNhcee9g5NFJovPWGwGtfAkhq",
  "key25": "24GPiBGAZYA3ryNDxWVnUUcyvYy48jaKwTzBTBVwpvUcMuAtGLygrZxxYiGNVZf62zbtRvWXN2CcsDfhmA3HLYC3",
  "key26": "oPW9TiuKQgf8Vps5pUbJyXdqoNQBiwk45qNPRb35KCAT8srhcbBXrBG2JBNNogs2Z1gwU2XsiRBeesVBGYNhTVK",
  "key27": "3hceDYJPjfUE8uz6YHrRAccBYtZbHZWbYfuG5Epr3MMdpYD8nW6UgcdZBrNknWwhogiCdrYs1zeeMov2UybDFooX",
  "key28": "3wSEx59CpGF7HUogbd8sdAgEXLCdVKB74wNHGwUKkhmrc7j7fjut2BwihqQxYuRPF4mozQT7R9qoXQAUxuajEd1M",
  "key29": "5uPGGDScquS98KmWNiNqZEeRrT6tsLiAsZNcRevsyq2X24KXFvQD9ZrMMNRwfQgBnNREh2ctUcyw2MfrdmBL8GWh",
  "key30": "2W29SgjgzP9jY1M6VvidSBJFBaMr4Q9WJykdYuuWfRbvsCoL7Jt7PhRzHeBAGLDytowXCYHumdq2yxErybEtZsyY",
  "key31": "4EFcuKox2BFVmHh1CUmLvJXE49YUEbmPCiPSs5BxiGEWVof1781N2SVFhKfDZoyVEjCXy9Ww9evfCnF7eep3wCVp",
  "key32": "5Rw7d2N9trwNUMMXnwz6tGbcxFqoNgvGqnPf6VJK4CKwCjWtbeE8TqK3FASSmCVpUDiP5UBpv5vtYCUjzjVwMKf6",
  "key33": "3AJj9xLZf1JECKwcq2wiDaH4cgXUWfCcpYM7Lgragj1nWqoLUAYRJR1nk6hiVga6qcPd5thdmnpmLehA61xoifzz",
  "key34": "3hrBp3fPfBfc8sBnqsUQ9wH3849eiffUbFyr3Y64MASwMVKyMJtpjDuY3uzbWpqYMgLiGeGrkbUUUXu5CGe8sgxA",
  "key35": "4DhP6H6owFBHubWZn8vFYocdZ7QcQG1HktNsTmEWxcVrwFaZLPmmAUq9bUsBJ6xh6zqysPtFvHsraXjqtJUDyHe3",
  "key36": "2DZSxAAeLhbvKVnwuE8igj42x5FQS7Q4c7iuYNazqYtDopLF7uuq89k2r28NEMNXteP2uASYE5cYeCFihRdnQcLB",
  "key37": "3RnziiiFKzwA2syKEYAixEX31mPa8BLUzZGCjKiQVRcKKzWeivbykDwGGSkXBhv9iRFPLJn8AhWdpd7NcPM4e3Wy",
  "key38": "4wMiRY2xp2bayJwFm7fhfJmM55HnfsVHyKuYHJ8CgTCj3qawRs48ugPZY4zBzKkmuiRqmpPj7csVFGzookJjGANb",
  "key39": "4CT7D6r3RUs6iJ1knMWyaHEB9X7Nh3cup7hDUcR6jNXnyAw6tc2TVjDNTb1LaLfP4b4gw8s4U9NK3B9FR5pJhk5T",
  "key40": "G2Q1dhn6JB7CWjZSef6zqLpTwR7PkDsuG2zcuY9aSYZDByQmadsXoDGEesuViJCzSvQtrE4okzipU95MmfoM6Q1",
  "key41": "pxjfaJqUScXFW2qomZHuwQv9KwMQDjNcn8WEzuzeYVAcBPpG9455tFZ5LuTnT9jP3WiLFJYjDmyvwDnPVVo7AFH",
  "key42": "LAZ8jYkKkUpFXad5tDxv4UAVcnFXVdrWEEugHs9rkCF62WkJiAychzgVfDJtTkzoqgYS5NeTQAfxXmdJsGL1yY7"
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
