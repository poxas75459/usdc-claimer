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
    "2fLD1FtgqmBPi2mSk8ay9XYBn1yWazmuYLB37suh44zVuJFnPnvFU4EZv4faCyAMCpKLau7cm6SS8x1hFs9jM74v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BpwWcrFFG6EEgAW7BbuAf7DPertVGa5J5wiuHf1UaS4y1u2W7q6SsKzM1eVGqKiDPByXaXWQ7TPunMNfJs1Gif8",
  "key1": "3V1nwiAb5AU8ENJYCTwHDinyhSBWgEkUABd8vJsaUo9fPuYxCCPZ6JtpP1MMh6tLtnddCWkGvGyBCyqPXABBcXMp",
  "key2": "GWWj8xyuLfwuwfp6McyXYpdLaXD8SLkeEswJ2eWbukw98q3PYTkfjNZgx6a6uG72rFmGjP7fwbrojzYhuJwHCWz",
  "key3": "wzgZjfuc82Wxwy9bu7t8M3cbAb7iB4Yd9J9nrHMfycXYZYKnFndzMXu3jNGnc9Xj5un5rRhP4VxDyQuc2gmUHow",
  "key4": "3AGPhXLMAHTmttuzWksC9CjMQvnQmTBBEDsVSBeuUwnAbiDQymkuUC6UTsv7NBt1S9tFV3TspwZbJiCx7oDbGV96",
  "key5": "5nVqEtGz1dwBDr5nYAMBZGTge7MnoDrSGs3KjgexJba9bFRfYZsRM9pidMywuQ9SN1cCvzPS1a2LkgBZsRYgsg2w",
  "key6": "3B5VdnCXAM4edcDJLagPsfkLnkFd8zfbHvMArmHcwdxyKDuTWxEyQHyYEr1rhc1TjKt4dStkjAn2haxVrNVKFQX",
  "key7": "3zUfLv27pkCTX3M56c9VvnFMHS7pRr5WRUVTqhq7AWWovy2zM8VpfPBvE4r7FRcKZ7hGkq8L7ej7yTES2YUUefcE",
  "key8": "2bPVwTwhYkZZoHjZhFxb3m2KCAKRyzPQfRiRVTfNJ96SFpPFKXdLzqen6PJzPLfttrvCaewep222PTZVnceYm6YS",
  "key9": "SYYhNmPxXsr8GJ5ae5xZBoX1nHUFHZe5CMcqteNA6ViQc5mxdzxKouz32Rf96rWVZ642pNbspaH9UHCw81srttQ",
  "key10": "61brvGYtLhnVHhKTTpBjnL9uRMcNbPZ35NpNMtDB5V168g5xLZyxn26Y5UcepUzXLCuzVKBaQMUJuz4xW7PiRbhr",
  "key11": "4n2GnvDCeKXNsKGDL2CKk5FswQMvouWk2ov5dfFBeNdVz9yyegdEaq2EENguQEm5ZP6Y6wCrkn71PoK1EDg2KWqi",
  "key12": "5JB1cmPQn7xbFan3po2XrHgfeVZ4J77QHEgayamwUtZaTCMgJxoMe14uqWyudcrU6mfjPmFtkPf8nchoHvrdfvwb",
  "key13": "5B3TcD8gNND1LE4wniTAFASWHYoS9g59CJGD5WcWDJAa2K7fhfE5ayBodDhuqMhZLZLPrrRRAocPPfWmvqi4EABu",
  "key14": "5M7zsyBihsnALGZyqwgUH2BhwQeYdCTCQYpEq4L1DX2sdXGHv8ZD1YPTJMzC8bSGocjQiEwNdoP9wt3S11pAb2XV",
  "key15": "4F6vqeuTK59xWgn9i56HjEXUbDHMSjCSkAADj2JUmdBffhjqk6LoHHWB2cGo4cQJNUhfkjWxX83Wktw1LsSaJACf",
  "key16": "5FA8CourAfrrvd5Pk6oXqdpLAiavTM3TUarfeizzTG1ZJjYBLyWAtuf54vYPi6u2kCz6GnWAUedanoYRSPL4Scis",
  "key17": "4QKW7GwJStmKua1npL7xaQ64WEwRdF5WQWAm59SResXS2u5oRaZEswih11GHfmdY7iYNc8yBn4EmHAbov3gJQD52",
  "key18": "53ysQ68Nfpj47GYmGjmvAcSVjqxB713U1ekhKoP6db4Mn5ve7qAv4AaVpfQgNrGKY69tX7wLLjEU7bhfLxqYwaD8",
  "key19": "2DHb4xmVW9QyVdax49vJMeotUqv17jP46JtqDCtcFt98GnWMUFRMsHvVsUSkn24vLwmDbRYkp6WR9hi3kJkPFcuS",
  "key20": "37waw86E3hQ5u5GzYK7Uqh6vSh41EFFKonxFR9f8pLwABRgeSSByLoSCoWt4KTkx7PB91z5jTNcrbuCByvrUKSke",
  "key21": "2j3oKPRr5tmLkmPE5VGKdgNYnrGksZh3pReF3AtfnA2RocvC3dvFtZjkjR1gqaaFSmmBDMByb3ewyrDAVjxeYV5j",
  "key22": "3mTYaH4hqfKybHvapBCy7LPE8P6Rv9BHHYb3QzjScmRSntkPAfHEY7dmNGJTN5zfyG8hk1n1TVHkhr88L7pjUsmT",
  "key23": "4dLoLqdXhLXhn1hNPZgLjUGvcAqBhqdec37Qd5YerbpWJ5EEPNsDVfNhmwXMZPhytQcJxvcTSU7dHRBPWqLdzhUB",
  "key24": "3o91gZvHXrbWpCsHDe6UmM6Cmoo6E5wZ9EdtUHzpC8smSNZMWL6o6AyrkoW6kwdUxGwHZtG9t17C7qDkBQgyDrTZ",
  "key25": "kWz2PtLTZgp9p7UM4GfjraKt4vxs8Huthb6sSM1dyXM1wfgGtKQ4QU4NYnkmHefidckVYjkk99WT7Xy2fTBTfif",
  "key26": "59gonQyXauz7v2JaWsVX44X31tcihAjL8zFgXd4fiVZtTVU1uwktpY8YHcU4RoRyuK2PSvYQBMBq2mohkBb77cA",
  "key27": "2toTnQhNdcRq4j5ouGPQvFFzE6TQQtfdPY3Luu3RtDFvRgMh3752jfXg57dvXbXRgUEJzU2WCdTbiXQ5vAkodfRP",
  "key28": "5ygstxP8xf9xpn46cPwpCi9N11BV6BU2pRP6zj7534jYKGF7PktMqDFyCLtPBYt5aJNJFiPAD69n7jUJctDef2C1",
  "key29": "4F8kK6T16GehBXewB4ZRUgiyCUo8XCorwkT5XBKVX9f5mubm6gWgPR3Y7dFide4ngEV3MDhFiRFQvAeKbxWQEHTM",
  "key30": "5kGRjB2w2qUrvbhH1ZctjfiZntzJguwrq5au31ouFq7MdkCsQQNYRhAYwEix7Mn3qE25tXJD1Bc6XT7cWAeEqALS",
  "key31": "sbBRyuBdspwXmXvaWsqvsxtiyt6xioeypLiJfT7NcdhVMPs26teThwRMQSyziZopUKqMDbdnn2TwVZRsMz5h2kW",
  "key32": "ZqDLYT6BDdBUBTXKzgq4c3jWuYLUA537yAxJVHo7zfueSRNBAHgbtvWYkcEzxdyhJr9sxa5GYAAZaydcBSsz9KW",
  "key33": "2xMvmbev6kCKWVHG8DEKvuffAXNwn7GQz1nAMDtEVpREXpLubnmsbyjs8xFCctqmWyx7ntybD3QRMd9FNTzYSCZQ",
  "key34": "2rtXoSBvK9y5zxpNULbR2Z8ggCuSGyCpnozAUnqkgegVxBcRVio6sDDdNYEfsUK48MT1SAbo22xDoU7PNKkSv9ju",
  "key35": "37wvFv4gc64QeRJLafUdziihWm7sBjptbAPpoEm3QHyxgKo9dGE23z2TNq5wDfvS4pZxSrocqnADgWHCNmraetV4",
  "key36": "gNiHm7yYjKY6V8mFj4PUCaJGsyX7gqUYD9vbSMsHNpDYDHmef5nSMHFXSewAMLS4P24ZtcjGD5pTquhBXTEaYCY",
  "key37": "3Snzbr2yDwuSUY7q785WBR8LfaZ1c2Cqta1ytAU7yiccxYoEnXG2CSvsoUbkmzS3Lj7aaNp3j5hkXjunbYcghpXi",
  "key38": "3NyoB5FeyFwU1r7h4ZfuB9J9usGooB73MTycPph7ckMAZmceBEGRo15dhutFHYy9RG3zB9ur8nVsetvpap9qyXbv",
  "key39": "3YGFiUPXpK3isPYqdj6CLJz4cueUbfVB9a7HGX9dzvxBXm8e79eP42dM4DfcCpDiM2qmJx73bdmAdHhvAu8PZ2b8",
  "key40": "4HmDGafTBcVEi5xwcFAY1uWmwdYP6ZrGLk1mChYkdZnKaJEgRYTSFyWKaADEUwZv1NHxS6dskP51zCmNC3jq58B7",
  "key41": "21yYvG2Ez5uQXQPF58zGLSeFHkTqvJ7kVxav3QweWUo3tTsG1et1kvosotqo5zoxSbUBGwm3B4GBpseeQ2hpDMo5",
  "key42": "CEcSyjyAWDaJxqpTPhQuLCJs95ARE9eS7tKhkULY8F7d8a3P21BKJN3uGvscm9uo1pFn62TrvDsVTQSVUVx5rTh",
  "key43": "2sMQwcAbKnCRPPPXnkxTPJSJyhrVz4Tirkt3yHkSSqs2fNCvB4CoEPTyizu9gBrY1aJ26tPyQEvHUGzvVhn9cyRB",
  "key44": "5ST5cACQVxE5xkiEdjQQLzYWwAvRNAuAPyUo3bT5pkYiUv57RJq2emnNnXA35qKDAK3TxdFsb9F2m5djfWbGTLv6",
  "key45": "64HGeFhvkyHoEcFmFvPAdjvoT3cXPPHYNjyjpC45QxtF7YwUn5cQ9C545ZGHPbcsbG1AbNfDeGdZgM2X7iLq4aou",
  "key46": "2YJMRWFg1Yeib67LKpBuFUTcY9Dxawt38aQpASLXnBHBjY1EYjWXC7J5vtSsskPfn5ro5wAdnwACyxdjkDB4a51D",
  "key47": "5nXBQE9RourQXtnGsfZwrSd8yyacoypunwbm7ZBPzd8UcNGhscDSYxFJKJi2gAUWEXCqA31iEhhQWVVE66b6wLNK",
  "key48": "2C2es5Qv9nSzy75V9TWYqYjAn8j41168D9PgHHwTUkxNDp3SqtecSBnXiKyga7P7ypfX4SdYgGLn5bjeYqi9kKEW",
  "key49": "3A6a72nwRMAdjzP6yKKs25uTjnf1LWwsYN3QzzR1yGE4Wj8FZX133viioNc9kyrAEjcUK3pSEJCfSngn85qVeAix"
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
