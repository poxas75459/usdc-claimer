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
    "36ynpAEeXzusWusZo71ZTwDuFsPDbsaU61vGeznmj6cgdvV5zXiGCwHrdcxYZbetTdDbijdcguMi52YCveHdEydB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e2JpF92t2m7tS7Hrimb7jsLDwkF6TutWdyH1afGyA9BBRNYks5zvjLzN8gy5dQUPxbDGNwEVmiDoimQjNsqQr1k",
  "key1": "5cuibkZoLERwnE6M2p9QqkeV1TTkErAcB5E97UmrjoQueywJzapvbkkM1KXMsTsdW7MBgcXEUkzCNaiu8BTQ33RH",
  "key2": "4G37aiqpNG9gxYpB8WR2c6TXNcLXRYovP2sUJtLGs8pu8RTCt2CUd1F4tRjnAz5J1o8T15jp2HgrXw8Tvkw1gQt4",
  "key3": "LjYV2ovSeijBnDELtzarpjxeSWNHZKqK7Yf4yGF1rRmb36vfJZkAMYWyxuyQPoq4t5aV4XsiA48UYkP1DfBDoDr",
  "key4": "2qQCpnkBPWWcUzgdNwGpvuJpxSWF6j29SdvDVECD2NfdxDJBnDKgW6qVUFcToxF8kvmD5FzCT4R6nopXtVSJRzvX",
  "key5": "49iBqJDRRLZbJhEfiwSqqh4eSfSncsxw7vZmyA2w4Z7zsz1BGoHDR6uAA9v3UmE3FhfxsAiCqV86ENkD7vpvaNb5",
  "key6": "2m4ZA3mLWALwe4UTacrdoCucce1a3qrMYVDsNTXZbquTmZqmhG6JQGrKqTKLiPGy2RLJd8FaXg5CekwiSp6gUQka",
  "key7": "3GcrVSzbQBmMgHRcTCjtWbV2VHALKZCyzWyuqjYDDbrKkobQqDKUjtetpdionT75df7SDtZjFDT957YBfUVKAvs7",
  "key8": "5Du4tVLR7YN6qvF5nQZixDTtEwS98izxnATKi4a5pT7ojn5D8bC8hotoTCJAmTABJQ26PZ4BErtSpv1T9je8adKD",
  "key9": "5d4NrdEAkibjS465jGfeV1NHz6rWMCicXGatEtAHPzhiG9ztPogNHK9tvyyhoxU2D3BUGaVcr5XWGVXpcuHg9UBY",
  "key10": "sKcZ1xf31Vj4hX9EeL5p3Ug6aBtrCjDu59dvSNuSH4LkutcJ3oS2M6T2gyHkdZNgu29TfQSxNRSW4LFCY2LPwHi",
  "key11": "41zAQfZB65yJb3izj8czo4WgA5zR5HTNQSsZuHAUKheHvs9kTfHM4vuo6rmCEj7C2zuGAJdQU85fgdaT8h7rh3hH",
  "key12": "5WWBReZRfhMb6Nt5C6z9VuS24xvkxg2VR9zaj8Nu2SH6M8mvrABH3MrVa8XmtiGbroWcuNZsvUbnKddiV3q3nmNw",
  "key13": "4zB1A3qMTF4fvwHVk5ao8zj8SYCy6Hiz87fws5YA7mxixM7LZoh1QvNVKZGe8PscU38hVWzt1iLxsVWT8NQ6b4RJ",
  "key14": "UqsnQw3M2LbeoGPykhRxmoSQbvrnHaGhJFfRbmGVa6NBepaUaLSvk7Rcw1WDaupn3hCRqzdT86SifeR51rNsrbF",
  "key15": "4VQdsBmaSCDRJjxoPzzjfZdhiJFHTKvJDgWjYg3ExA6uecFfL25tGPzbWriTw3WKr8ZnJrhFzZjgQbs2MUDrg7L7",
  "key16": "juSESQDwvsuR8LodXypzfMS6aezU3xxRqkTKs79Ym63heq1WRETyPSHRQfThn5UpyujevejweJZPHDqhYoVKrt9",
  "key17": "3rYwwoG4Gw9GdWp1918H2gCBFMzxVFufwyQQjAZLLZpCXNZsREavxhgo4v3TshCXJ2nMFiCttddi2munDRZxL88w",
  "key18": "2Yy2LatQwe5vxYEqpPuNmaC8paC8YCY6ECdW9rdThuyw7HeEVdrqkD5dnRyuC9nrSrS4zQdNMNLfBHzoV6gSuV8W",
  "key19": "55oN9BK2VhuC7N5zvwqoTsmkMHdmTMDbTMdVkJqo1CQMY172DonvURmk9NtHC9iusXhB62RjXT6tPhSK4rBC5sdp",
  "key20": "4XLWRx2cNbwBUwtkitNhX8QneCZf9eP5auyGRCsAxyCp16SGz4kfZ7FEwCwBRpSMojUBaD3tyrRJbjTXwJZZNtMi",
  "key21": "53fNbSY4hvV4QPcPQTEMJi66SCfXP97P88kzMwK7FxQvNZrZdW8bXK4xizX8KCozhg1U3wEc4kBHvDNriDg2DjBN",
  "key22": "2CPuiFn7ZaPxdRRhXwK1RXNJjaCYzvHrLE3XqAqmkzv8n7PeybqysX8eU31tVMqc5VWKo4Ddo57TbxmBiTbzj6qq",
  "key23": "5qkp3UMJ9FQqLKo8caG8jWP5R7BiJda2kkENp3aP3zwtiJ6bfec3eTdMJWQgTsexE8eneQUnXQswKFvFR9gDYs2J",
  "key24": "569vF3z4ZHiGZG1ZJHP8ydsfSL6PC4V457fHGasQnQEJ9fpSPKA5FjAQGQamdGsMf8oqckv4SU7H9pC2V5SiNMpi",
  "key25": "3T22y22HUV6rEp5SFJ2eK1HviDzKG6359uv7wfgnFsKVvVTdPnUydMwhk3n4ky2TeaeFkXeGQkUkuhymzCdpebp9",
  "key26": "39KMvPAyTyRBocjE6pPvEZRTEspjaof2y1pKVEXNk9MznEKVV1xDmPcrvjR2Bqy2WqNkEycysbYxpxbbAjMTZUYE",
  "key27": "5P7etZVPGqZ9VFQCswg7Tz4tZRHnynPu8dpLSaVfUDb6ascfpg4JTVyfLBRMdNTfoWUUxnibLNciz99WnLQTfD74",
  "key28": "xs11UAFQcLxwQE45fncrGwMLgJuWuZ6KdGu9aKW4rL2Jd6i4pWx7GDGQh4AMtY4phDj9PkyQfNwwJRm6phVSUZL",
  "key29": "4KBPDjEqC8Hek3xq1PJ2pEkzZr5hx8VbiDB4MHNbPj7vmgYzHTEBbR4NZCYs6iJCbJLyqEApNpaqTU9DQoxp2xMh",
  "key30": "5PQTSJM3XUtgPtWUqe61xy6sQ6rXjGtsB9ANN2JnmSJgkspEymxZgWCtptXucf7snGdwRJFRr2nipdTWJZMFE2kV",
  "key31": "wws39AfQQaj6JA5VUZTGpJgqwwGRvLLvUMztUAwcn74JtNeSz8kxDFCprj21CBpVfFL2tw9xMY5NufuNpQyDRo3",
  "key32": "pDwtiFmSWH1R1HQ9Jj1LYeyXtmHTL7jFndabQiFx7hKLVtxQE6jAhD1e2A6RDocipfN42izNcJVhDYFTJjUnHaU",
  "key33": "22xu8Zweq8PVEfYEmiJ8PDuKXpzjPHKHhJmNkZbgLNoShoLxbuy5HkiJpnHyMvdnayWRxtNFAXsS53jgaQmS4a9e",
  "key34": "3QAUfaUJ5ivsv8DQw6Qf7gjATWj2x13YVfy5hwyNt7yyumQsgJBwtRtZBLPVcCegFGhCBc3EaKo2RnoRgAnbkfSh",
  "key35": "UYCrjREh4yVkEEYV2ND2bouhvG1jE8PzEzi1PJ45Tc1y8cbTkJTWWuurFsUzpmXKjzKP9jc3dTMhUB7GKBWYR4J",
  "key36": "4EJeuAjg2cd6AGj7NZPZvyubyUgKFbPq3WDb8zzyNaZ6GZNkbJHbT7FLDomF7uL4sLKA13SjSUVgLfthzRsrrSSU",
  "key37": "64PVdk6JhpEN6tv83zA1xBakDbpR988eWN5uRtB1QX22B6MvPjh7E4v1xjLagraEDBYt96KPWmHWohDs9ysVPL2w",
  "key38": "5TFarZ6f85pcLEeyuxEyLnHPnsyzzEUtTRcAdq3utpB6vjRou9MVTSHs49ozhRfXsWfuPc8R6NKqbRjntPnxeBaq",
  "key39": "66oiKUzR3u2AQUbg58s91sCJBVx6LbM8N9UTJNGP65nD4FivuMe1Lxeinjxhy9hHcmDKALZoEoAdd6Uo6vu4gV6x",
  "key40": "45R6WyoW4E7zPHnX8QCTSXJSbvaXNNPvn5RA4k3wVP4Gk4cqknDeBC8T7nH2Gw3ma2ADAT8ZANWpqvpSA4QZiq6p",
  "key41": "4Gri9XTdHftFX73wApwTsdGPSQiPeJtLNaYE4cLatBLvoGuPEn4aS5r1YUAE4n5XW2RbZuBYFCPAkx5Jiqp5FDKF",
  "key42": "5sgxFqXQ52eygwuiD9iJgKdNb2GRDvipimpZ73q73TDYAHP7ZGa9vUbApayiQCaWe8efKFjC6cKa32jB23CtNwFM"
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
