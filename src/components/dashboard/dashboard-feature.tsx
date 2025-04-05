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
    "CUPeYuRmoC5E8HTt7Zuf7PA2jmswfVgCmdRvpticMzQDa4fyYrNiKx1VWBmNhiCkTws8Khgve2rnfxnKRSWBy6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jnjW53yzJgLpKqF6YcfMkHMuvjon9uHrLW2fDXk55jsvZByg3SSJHisDXhwWREsrjtUGbfJZfb5nkeDBhT6i6UY",
  "key1": "21DLYnifuVAaUjDnzrpgCBoiJ2q5Ju31vEHzS31PJ7uWSTy6Pyhy3xBUgu4QPHnjNeRPKFXoF8QuGXDqMuBj1uB7",
  "key2": "4xCArdWja5WLGHSeZuPpm1st7WV5TEoy32i9izBo1Gxx4p67JHhVb2FZ51TKKvPqQnok9LGRq3dpy5UWGk7QRAAV",
  "key3": "3Eee4WXUXkfcMSCdTVme5pGHmzmg84BTcZ8WJrCJqdhffW2EnyCSiNg2RTDbAxDX8nsw92n718grAagbh64w3Ymk",
  "key4": "5CM2Y1S1WjtkkqiJ5fFokNzjddo1z9BfPADYdugKMxshi1EHASuvnXmsLYfn152p1YbLrXJHpaRcFEYYRrAsnwh",
  "key5": "M4M98H9nukGVmhR8JFWtEvN1JoETU3g3u25GDkembkHVgDz7mxQkAvF8CMDA65YTVYUEXCzFgNA5ytqGSm6FKvL",
  "key6": "U6J3XpkU24V7jFimQGbNS66K5XQpEDk7nnaN8iw6pxN8eT71M7cdceb3wqESiehpSzf1dGpCRyvxAqzVD7hN9N3",
  "key7": "5WgCXwuYcHk94jtM9UdQCbqRyUChp7URmg7fH6jcGtQkkvHtRLwYeknrKFUv2f2VvAvarmvhSaVNS5Po3jQPFUhF",
  "key8": "2KZyDpmzFhNhwH9X1b2Nceqr2wttMwb9dLCMKyMMsBwrzRmejY9eJbD4HbwpyhENBtWYj3JzBywxjcyFDsR74W7j",
  "key9": "5as7QX3ZcVDnpkMMH53U4doG6onUB3Zs5u5tUJXmtXWYhsGCoADNX5WURK58jNHSqwH7WiV6RSPexNZFG7AG3YWC",
  "key10": "3mVA6EF9ox7Jz4gz6GgvCUoyAfuTyfkMieMmoT6XUSahvUpPnJ3xfUfoh3ez5XkBm6DDMWYqe1vNXMKyCA6msuHk",
  "key11": "2G7iHoSmHVvT4HkCDNHDw3y48UBjXwqudjAvWUuESNfUXQf8Go1WW7JUhtrQ3GxNgtaCub1z16238iE7mB1y2ZNn",
  "key12": "2WEqbgMh2U3pTXE3fWJmr6gAU7wgUpRBfnFyxAqkuVpbnVRki66Tk59r5hS8rb5Ji8bzBTTBpkHPvKGggkY32D6U",
  "key13": "3SS3Tn9ouLC3KAgTr7GJveAn7uMMGvk3gjP2fyBxx7EXXaZnuebLbMNFKgd9VLM5o1pKrXz5i3riEKrBiw4NdAvT",
  "key14": "4X48Vs6kJCYf2n8ksfWLPRB3FCy9B61JgmvVWJ3HGKvJmCwXHig3o1DPVbxNpweanqWrSt7NZjJfVKv5vAzyHnWQ",
  "key15": "2Ypt2v7F4PCkJqRbqpJ8vJCzpbJWVXSRBMEGYG7A5a4uVnHZB5EdXMt5DWwSNZ24QfsebsJ8omzc2eJxjq6P5pmt",
  "key16": "E6kfxRPXDvBdHizcvWUaL4vvKJstHicMz788tuysNtX249Q2tjfWRJSukGYE3nZTqcCQRWv7WEU1mNyPBuZHPKj",
  "key17": "3QvbZbgYFqw4QxetyHE3wY1iA8xu5E3vgiqN4viwZ5Q8f5oq1tCBHoTFHNGFwkotUKwvms8mM967R1ADG8yKGeLv",
  "key18": "3tnJNinSZhVXUyMMJ3Qnz4vySGvGUw4AGu3d4mJGzpUmaDzWugWpVv1egJrWWVkVwDKDo7bvqTozHnVNqoDGeUur",
  "key19": "24qcQTayRxPZMV15yAebp2HhShdYJf8o3ormR1oE95gakxdHBqLNK23qHuvU6zy8KYwKEBbWNWSWPPbUhFtKTjm3",
  "key20": "yq8fxaQfwjKjsfer62Td3TM8j4RYtHraEkroqhXL5wbT7NPN5qR1H23dWTQMLyq5pQMvUMZoksyUHZTbfuxh8EP",
  "key21": "qpnCsDBMvHoWvgAtjA4LiH4HoR6vDY5cska96vJxmxdVSgJrmnDjfxkDvB1UyKN1UABzwPivipHezwKjZUdZduq",
  "key22": "3mJSWK5WpRNT3Wo947QE4jWtYcxt1PYU1adEdddqoCn5TtLuZVaXP5vdV4hCPMCWMWZrFRbCXbsc7QKGT1fdpTXS",
  "key23": "36JGrMyXhdkMFjbgSjwtvS1FaVTikYQMcwNfmocY933haCDPKPxqCjhEEkksqJMDHUk2orPgGjuFLjE9QG5XcWtk",
  "key24": "MA7L21gTe1qi7mFa7GS6f4M46a3HMaynUjgBrF9qXj8iuxicUXPT2dWPtcM64AZt97SErvTvHHKd1X7unTHBYKW",
  "key25": "4M1butRr14HRspfzufgXBvwJvkH3npRK8tVZKWjXDNNVwCS8ZE9Lf1s2echTjQamqnciPvfGV7XNMBXmWQfPvj34",
  "key26": "5U8wBbEVLPBrai9rnivqhtjCfdGEkuWfcZmyDctd3CfYpcdQK4xcz2gQck1ZQ5QSHkqqufFofTeQY9igjbqWreZH",
  "key27": "2TqP7ib6mikx8MgfMEBFeFseFXrwqU6uc3VpP2t7x1oc5b4UU2ufUCJJE41efUf1WFGWMULS4FiQK7ZpQNozsfWA",
  "key28": "2yxKJwZeCzfMuz8wLnJYcq5r6MZ3Pwm8tKEiLyhjN11cg569fb2qBn8GDMJM7fDiuvgdVrQu4e6mgar8YYyc91SF",
  "key29": "5RYZntdE4wcNQWYxcy7VaRZrCuniCjotJ4WHrGEQe2X8aLxoHdjgyQEyGrNcTRUQ7k8sncejLou9zhecpn1jSdvQ",
  "key30": "sxDEpTzhNcdWufNzcr7xbSqeU4Ao6fFE9m4pGNQ48MtyUtNXpcsNrkXipPUVHsFxAN1oWGoKYMXkP3CBNmLMYEd",
  "key31": "2pBTRvgicBEYKjRu7HDacsjdPa2uYRhJKwAqZ8ntYwEgaxDfg71AyGnhFQAkF5DNGaAEisSHFS1mvNdQ9zxpGJ8N",
  "key32": "5dqMRbTTW23yKtVwjimwqkHUVkz5HzTPmBJki9E1iWaCs3sDrgqJheU1EQHWVwFzkTEGkzFv897abj3QJxTTUbFA",
  "key33": "49EjHbJmkYyFTsKSaNqg4iQV5S5XCM5oFMm6bGpmnHpqPWBN96P7i1ydEhgZr44hpZ7yTqhdnBPs6j5DQyUt1D7r",
  "key34": "2C3JXuAj3UNYGNytjZYJwAkhSRSQKmX5A1dszax3FwzKmFKqJsNacugKeSU6q9vkwVMB57uJxnHdN41gqgx7Dzzm",
  "key35": "3cLtUcbBXwnmjN5C8V8ZLGhGB46Mh9rgWmhgwzmQaG81FV7mzG3ktmo43MBsvN5Z6GKoyVUmLMjwvEUhKx8E3yLb",
  "key36": "5xUvcugDQvD94LcTxChaTk2Vft4dhNdXKHhyjBQQ9rSBp3cT95mfG1cECS6nyaRMc5hFju25Ju4eBjoxS4UDw2eJ",
  "key37": "4c5KRL94NuLSLNsyzUpnwCZXU8e5cPqtrEVaEMPRYyWBJRWeNCKwP2iprApFKVxYE1PcpEpvNuJcfqN2Nqt8zeYL",
  "key38": "2ANAbbSwo9gNeaB3aMDjh2BKpknsKj6P8wmxig48N4DC6uERvvqvFDpxjNJb7RrDoDPf1X8rXjfZpuK9NCgUwRVa",
  "key39": "4SdjoA9ATMuQxYWzziGugmyxFQe8oge6rmiGFFgF9LcMnwypofjWA8YrXGz47ZKGa47vmVMCgMoTNrtEEivs8htG"
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
