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
    "2ETcEszRcBFjSRzQzbkZRbyZPNVdzQY3qvhESWmK378ViZwYxFBuCkeHyPkacDGivJafvGnzhi2tCcvMuPMDgp5F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V2ud893NUy12g4aA7tfxCmXgmFfmFns5e1gX4qLZbZo6YzYLpqTponQ2k4u1Cjcmvf69fx9Tqbrq72Gcf9jnJd6",
  "key1": "2QC36muaFJqth4DHmb7ayAnFUom2e9rYRS6NTPeMxCjL5QDYGBFpqwkRdYKSUZGHjoPzZHJCLuquvzdR2c8ofmqW",
  "key2": "2r9CqtPQHLpCLSGWXD4YKmXtvh4C4TFb8ez8Qyg8NUusJ1W816oBpwdRb96PrYWX6w6fgiZJjDiPrnjW1t2py5Yn",
  "key3": "2EJprbdaUi79DJbHuVzpDSSJtw9EM55eMcivufr7aKRShfqh8ZzEi18B1kZbr9BDaGN6nHGv6SKaQ3GReR1bnsb7",
  "key4": "32pQbFYFTUt262mwy2dDUcAN3KFcd5J42dxRTbzUL9X8LuEEo6b6x9s7hMW39zym4m9CJ2qvwTt2DbYhbwJY3kpc",
  "key5": "2Mf1PnznTr6LH2bF1XdmDEPvEJLnfTLe5gf1ZiJswJ43LqaA2SjwZCofFDJtvub7p5huuktn7QKrZkr5wLh6Dq21",
  "key6": "5tkbMvmMbmRMK9vBA66232QCNFu4d74kmYsewYUSdh9W5Qi4ub6uQ6GiypJrM8mzqnEBbXvxJXbM2DJziXU3v8sg",
  "key7": "2X19GP8wbzfDdRLLcbVqpZ7fMdWtsEHPW1JowtH2JvRnyZJtSGRJkbcUXJ1HphwVjtK3k1rFF38ee5hVWqAiBJr",
  "key8": "2PHRamWBpzQQShg7yi6zw3arKCspzcfssrpdHdxBrDi5jLHxGQr9UPAQorRx1AJ2BYiaqEUVgh7pbbRxH6yFc4k8",
  "key9": "2upcGMaL2DQn9yhcFnLb3CN1cubQ8owmBMY5aWJcXjsEEkJi5KMeW9PRzkE7ZPv6yjbqZcnxwg9hLcYoHYztBAE5",
  "key10": "41jXahPcYrhwjWUD1EWcBT2wXqYrxFMeEkZriHzZ9R8hAa6T3mDR3VWpygWWLePMsB8GM1ZBUTUNqht5QG1Zy8UN",
  "key11": "3LbUFYRBsmkDvCQjWxZgpK5tD4kt6JEoSjRKqpDsbLDnWgoWhp9HLH6giFg5B6zZg9P4JrSkaVA5H1pp79TEDdbh",
  "key12": "22CXMXw4YxDKfPGXLx4DW2NBybBQWHBtmFRr2LipLH8ZMggLuU8fXgmzPsT571ME8QgawNJwgiFpXHukKje7U4PK",
  "key13": "2GbU4oBzKZxkoKYDh5CgsunU1r4szZfgUagDYmu9xzCDcVkoYUdZZJdJMCgSoTuuuqTutVSeVGdyw6Ymwy2xS6HB",
  "key14": "Cjgh6jKoYRYZvapVsWoFqs7umvGwUWoL4JjcVpJ89uTcnkHDdhrYFr2cd9p5hvYAmghR1WP3xAVaCQztTrRVQbb",
  "key15": "48TaBSxfiTBxWGiRBjWiwsZP9XfbN1gdqmPUzDBYRehCNoyFh9jykNd58MQTUzCrrpT1GsEaTbyooyc7ioJfkKD2",
  "key16": "4eARzkriA4TWgWqnqk9e6nnpc4w3QZcqnRdaTCRQxRm5XqxFXmwg7cNWoPVcMTkzquzQdMfpXu5xFYC9tLVkdiBh",
  "key17": "66LLpaZDY6GBJtvLf8BKbd2DJFvwiamo3wwXP55FYEhAviw5abVgwtX8hHJycyPRZUs5H2HBhyyq2VLyCjsnHCGC",
  "key18": "4ThFkrGrbWW5Sq8o7iCyqmQrced2qhxj1H2nui1sS92VMncLR7p5KLA5kBWASVwXgCaRv6HjJNoiQfcLHGuFQZHN",
  "key19": "5gdTwWCajwkNo3DhD7H4Uz8yUcQ8sZt4dnMndtomvc6diBGrkjWprHkyfzzkYWkDFSNJLopVvJDpRXsjmqAPy1sd",
  "key20": "zQn6sa94494YeLP3L5YyruoRXssjy9e2RjghHNeh8FZhWw7eUG13zvbRyUq1FY9fKy78NArKRYWJfj72g1bEyDJ",
  "key21": "3jrmnNuavdnQ1qYwKuQ5n8Z11pdHz4ab4dwVM8xQnbvYn4rxs3AMorKuU2Ywps4Fm3ZTWB33oQ8rHPdfqBCkxbLh",
  "key22": "4RY7MCGkWeDEf7mLxuR38coEv8FqTKmXmQhgnAS1E6ZMEZhJxaviXu1pHPK82hisJnpUYcfLhPa9tpcnf2vn1XgV",
  "key23": "4UxE2dXJVLRehCj7S7dw5tFhrLLheADomvxkKLonfEr1fQjm5ag6Nu8p74xDyQ6EzuoTWv8Fo2iS9g2PtRFgRTp9",
  "key24": "3NkR9nXQ3yek8YvnRqTawijKSuK8UcBQ7gYyhFTvZMhdXojh5uZp5ZUSEssRcKBNeQGmuXGtCvYmymYVGS6SXDac",
  "key25": "4DZJf6ynNDPYGMkDwCC2ts7fvj5Sp6ppvTgr4hdV7N5JpTQC2hyDLziwFJDsckrFyG6DG2ZQ7Fo2Lf3y19vpagn8",
  "key26": "4ET6p9obiog2HKRQzhKBajSswati7t2UYfGDdeEKBGZcmMRS1NuDf8zV7dppvYsobQ4KCEkmWV7brCiAeQ3sQHaX",
  "key27": "3dEvFn84xqCA1iskGBaNwtixcUSHj4nopfLsw2P7sDmzCocYaXnumBshUxbeGReXLZqFmdkhV3wFSF8we75hUcUx",
  "key28": "5m2LbWmUmy955JoXxKVWwGsvguDxBaUNeUh8iZWQ4ZTh5uha8nWEeLfegJsPFGGERFMNnbAwGyYmHqiCNnWfm1eZ",
  "key29": "8zWBHtanah4X7bGqXrpM8vwMQvnRpTKU14JZAJ4PFR1hYyQ5nfj5QL3o8ER56gdtK9Ecq8mYCYcpEd1YL5u9Swe",
  "key30": "EpzG4hQYUcAKt4cxhdZ235YHgu9yF7hAu2RaVPnWUX383zphyhporhrRx4io5nvh3d4pEZzyEPiYiRhdZXKgRmH",
  "key31": "4WKQUheDbH69ZEBfYpvyXfvYPQBJeiuoS4AQg1RY5xPCNQv2QXpi8qRF6SahVL4K9abqLqKqK79PHuip7ZFLAuYW",
  "key32": "2pUo1hbFtp7GXFaYAtb11MUsEirjKtLmqQoDMf4GbAwsa8rWcjzVmBayqNHsefxLXZS6xHUDt5D9KnpGEJzrkf3f",
  "key33": "2Br58kHzNmV7jp5ihBE7zeXJ8FZ5V1gD8tnDV9nC2oviQSpYa9vvWE3YeYfN4G3evaCDtQRSEAGM6mL9HiWwCTQw",
  "key34": "3SSsJWLSXPuYYxq8aHXqJe4U8jhcsjUohmq8FynfXr248KnUXnP1c56GqrpHvGPkfAbRTG4SuDJi6PPp6qSSmbNH",
  "key35": "2vZxsQd2dACesFToePig8RaXr3cLcTUV6XYf8PGCwYnQUhHRH3u1fx3bkYx19BLQqDiGTD3xTXWWNLj6ezeSPyKC",
  "key36": "3HUnxpV5PGY1GNaBkiZxiz4KeewQBsp31Rje3dRbdp35pEkpkZTrB6sdJDSMN52LovaEG7QB5bCD6ZqewEEVrePU",
  "key37": "44Hy5foz3bsD1zE7TjPQTGjLcDzXS5yo7h85shac2yrqaEhcZJYwL7h5rnH3rCJMcE4qAsikPEpwXKT6y5qEzVjz",
  "key38": "2zBhRDgEEq4cpSFX3tXnnG68sUfL4oWMCB8AZ7WD7YDJQ2C9BN9kEokuSoFZzRfC5aC64JVeibTC6AgJvLmsc7kh",
  "key39": "Kis1pkEiuY8SAByUTD8Auu6e4QUM7JASmsHDKeKWDQiyixYs2HmxSijNzz4ueUwyPddNpV4FNW1oCwmDJapRSai",
  "key40": "AnqRf8bFTRGfFBhc5PnRwQHn9DG6ey4Gpbo4QXLQcQL1Vx18W8Ro53DG7pSxJDVErqnCfnJ1ta64GmmYrPCLGS7",
  "key41": "21ikonP2JtZfec5sTE7invCj5KSda4Wb1hXMEPw3HSYRomctEuEmdE6bbu9gUkXy31oL7Htak68F84ebGyddtNcS",
  "key42": "2p5ssGwvfQ4XQWCwyz3Ve9esNsaeRLViXxqiXRknvj6nt3nnCRrH89xWikeZUEzck8kV4uGHNFhMJgF3RJ6apgmV",
  "key43": "4EmDYKN1k8v6X8g8qPt99ubB4os8Wg7oL3TZTUDnZUQbYsZvHnQi3sarGtUdrEQSfbcV1ZZpQBTcmE8nvT8hW8pz",
  "key44": "6BFA4MjL6vQ4bMBUpWF9WrswF4KUtTuTqw68kjNX8y6CXEm2qxcnTh7L3Nkq2Gp1vAfoViV7qkVe3aV8HWN3FL9"
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
