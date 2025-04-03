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
    "3jWJw6UwTinrZCwrXA1XTHGjKHVRaHmv1UAeDiKHaZJ7kC6xDfFibfiKHcayVeWCMGbK33hAvz8QuU7FBcmF7ZKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KzYLEuX5pDu4u3UJxj2eWt5dmYM8Y8GRY8zWbZgRgTq9sXPDT7KX16Z31WwatuoipaqWMwQzET75bSEmLLNj4rY",
  "key1": "fnMryL69g8RNZmCVZs9g2QarUDdtMhA76vUiQx2J21FsrYuZCH9rW1mJ65H6NqDnSMgPvsYeA6QqwexUQvMttx8",
  "key2": "25wwTf8oymwu71WUTumyxGnYwr2c31EbX8GsUd42h2DgrhBzeQaQJguQ3QpVS4QtkEjt8Wm8UZ5ymBRqPDsCoULP",
  "key3": "3NAMrGM4PciWAWdYpd9d3bk1CtFcNbSnNpLPvDE27cU54LKL5iDSAmEo58SD4NWNEii571eUaK6sEBgtcoaYRX9y",
  "key4": "kacResjrXkS98R1vA7VxewD5A2cb9oK2XeSEKMwP4eTFsw7Cd4cuXRPj48sgTRkfRzMqq7buxtE89iTfb58WQVi",
  "key5": "4KQG9KVsKddybgnDoMa7uXgqUPrRPYs94b67vn7c4nvVo6iZm1dQw1uRReRTpgCb98xHwikecTFEx7oM3wAVKQDo",
  "key6": "56pNCYfX6a1i2KSHc1upnWtPnZP4n3aupXnoc2oACvE2JHKbmdE85TCQw9GAgrx33DxexbWon67zWkZ3B1vAPshV",
  "key7": "3prCvFZLVwRTj2bECvYJB4DiPCfxoRjYdGtkTDSKpngViLh8DrPbMFMk2EU4CeoNeV7o4Jksq3gAYDkkURkZ6bsu",
  "key8": "2XL846NTrvJnGs7eLTddJppKPLNsVzLqf8xjctPLQwSTFF9R194Xm7V1W2x7XUP2G3BA8yvsnL5gFo5ovHwKuexf",
  "key9": "4ccrs4nsviPkzkobsTG1tTh4jUMUvDVsQSEhd8YBRHBkWDxcRjeQ6RrbsxrAtpZXLLboYMGWqbGUvPDHLKdZVhj9",
  "key10": "4XEyw7p3xs3sVqGRNDMWXRM57wA6Q6ntZcowmthJxCFBqsDVvRANtveGzm6gWD7wVgpBXCvLwm8pwKjpRVYR1UwJ",
  "key11": "3cSetYofDGRVAtQwJxmiAcpEUuW3idiQ3SwS7z3koLUR2DsqX6ewXfcgYfRfQ65C54Pzsq9VamGY4VtfMuadBgE3",
  "key12": "3THH6G5Mb9wVDkfqMbPUkyVQb2PCoVTuRJuJu5hR8dewUdePts34ncArrZeqBNWDFwzjgGZ73FFDFkMftMKFMPzc",
  "key13": "63zJWtRxxFPWhe8znz69VLG7hAuzWPWUXHaBMmmYmnQPaEnmhBLcbzDs3uuYUzy4kCEkwp6tDPUoiqhVA3da55u8",
  "key14": "pUUtkFcos42jJGdM9VEta3JRfDpgEMDLDwczGvKqfBqHQUhNRzCtpjiTL24E4qkZtFD2hGJqKhbjyyTETBHvPz4",
  "key15": "5anPvipee5fuWrZ57GJb4wR8sPZFCBnAnN3h5G5Cziw6wdYWrz2z2yVMwqTgATvTNPWRzRcuAqL6TuWAUVw6xXKq",
  "key16": "4soPAE4fxT7bCStLWwL2CVRk88AYMwu2P2qGugCfr8fmGEWwNPxyuPmBXDTYpPzSwPktrC4WTXAGWnZpYLWaeLSu",
  "key17": "2B4npnT5pAKjAXvMLcs773GwGWZ8EFbkN1Zmh1FXJwZk7LevxW2USyVvKmRejiwMvAmX6FiBatd8EDkP8kRuG1JN",
  "key18": "39qX1TZsjZjkzPC7hHvQKy5sqqVVE1F6MrVcoz1PyYjxbxwTtG4Xq4hc9dFG5qtxVe7JXVXJhCJeG3SsQhNB6XMU",
  "key19": "dXQRZTzu5zps86f846RQWirjsjnVrCZifUCa1PR57SitNoKYG51nKCiiXLFwpZiENJ6Cqydu1PTCpc3VVq5FxHm",
  "key20": "65iRuSqJa2B7uNpmcCmbtiEaGwwrLuwDZwXwfh36omqv4pka9q6kqcgJqc7eWCLug5whQG7JuhFBycFfUADg2TK9",
  "key21": "5tFf3wef6iW4pbutiMxSxW1AzUbYyyo6ZunFMpxekehip75bXmuUZEhf8d5WWtPhf1HhKZ45yHBRjWjpdck2QjuV",
  "key22": "36nyBgya225Zb78xbBeyx6mBSmVeSJcSBzv2upEF8YTGdYfrsgESAUSdY9tFaY1YXZmJeL5Ws1cvTDBwwcCU1cE3",
  "key23": "5AyfpdkaeeoUmpCTsroR8geEdG398LK96sdjYLGL3D9ywKnaC7VQJ6Z1RVAgA48PYMVKno4eTV8S1tApRcLCQfm1",
  "key24": "332e6fnLN9cHvKXu7LEoWbaajVzWVgto9Ap3MADKD4wpuc6c5eVcLEb8oJQnAr5VU1PUSkzUmCnSCj3qMKuo4rAK",
  "key25": "2FANvzrfbVJM26nGboRp2yCZMcSTTtfBpKv4eDgEgat2hAbkVoQKner2ot4aiEuvsTZfxrkhuugniibgP2hZA3Ss",
  "key26": "3g6sygiJv9DddiHyTNwLyerzvaEBfkY6kMU6g1FLcx8qjR2k8nyiRVNKDvkd6oVBJEtj3jbfJSLhSCmMA2PNxxDs",
  "key27": "61bJ4zQ8bQ4upNMRaLL29vjJea7ZdXDm6hNM3KR1gjiEvkAV7AFehjbDbskxrMmZAenSvakMrvoh69uxDQEo9noX",
  "key28": "3bUiRAUmqEAXxvJtucAhVy8iCoCYxxM2MnuP4xZo6PN6Uh4AVfyrW42zobg3L2M6411TyrQD1cLb5b8t33FNYuJW",
  "key29": "4JjSykVT89aRRY3G1APVRj3yu5pqAKf8sWGFKBh5HQp1tjwTMnhumtoP5VCKxaCkGisrU6jtzXvpudAwko4EZrQd",
  "key30": "5AWNiUHL4bzyrLq7kuG7CBU8w6wrvRZ4kjBce3bwD5nLsCT9LUxqT5Mf5TW14Jojr3irgjto8idKDkKQTwfMgJQm",
  "key31": "62WHPf9mbtq8UNr9DGQgA9LMZhxBbazt1hJzfdPgCpycdXG3zthqL9ob8KiJDPyhFB11SBdH5NVgRqwrcqrviDgL",
  "key32": "5MR3xagfJTVdE2eKqrdySePVJBftKwKoTDMXbz3hn2B8AsjVYwji6y1AdvYevaqEE8HWTC6vPMaJZTFRp3q6xVQR",
  "key33": "56DJXWwuao6yh3wkm76ppU2bFh6crFDu9HQoWNq6Vt3UNzoPorb6f5EQYqT6tZ5RDei28aArpNvJbm52PFoBNtyz",
  "key34": "h2KxwuKNXBCN2GLoHsemaaWjkyNFme5s5oDjeBYkczxur4t98jw4H1YsnwRRF4osrztnYRBxmcMUtzkBM6dQN4q",
  "key35": "4nF4yrZvyDqjKhprMkuMiY7von6ZbvGkyALSNZH5rAVkdkGP4jFAwg9p6L4STunHURkBJjpRkkSncHuESuperGAg",
  "key36": "3iywX9QdJ2jV1v1gWugdwP5oBUBwAbnxtjRzR7t9x3DBnJAGhtqw8N4g8nUhAgMBLYfaNZWgoA8LdmwAY8udWqf4"
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
