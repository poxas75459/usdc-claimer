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
    "3RXRKDbx49QAxWNgT2EspDZHAd1LMyQGrEZwd5wjm9cz4VYCEuB7KZB8TiE1gjiVgHDk9EAdCgdBK1BaWdgcsLBm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kUYKLwd8uYwK5H2tXgrhnPWzis15q62HcAGAxzFtTS78HDN4rCQEuGMmGtS6mvgm5PbjXk7PJoaawHHnEXqLWXj",
  "key1": "K9NuiavLQyRFCtnwKEFu1sPuyvCc3mWDuHwro9UzJEcGgSM1ZZZr3gwQ3N45RsTS3daTEeuhL1DAZg8DZHyT3vA",
  "key2": "4ipaPAFUALm15EZKpsdM5i8mYAYpMNfDr5C2wz79mGoyKGKNprMb1y2iM1c5pMAXnNnhJaGUUv9XXDJHS3VqozUm",
  "key3": "2wcvtJpFfFSiPtyNZLBFrNZ1jXt9D1yW7snutJmrsaXx6DSHSAMArmn4b3R8DPkX933qK5aaEtEX59mL6Ab9DytP",
  "key4": "zQdQrKQtU9BefT64hhCC9XN16TFwkkLMjHm7LSUzHGN83RV62dUutsQNLpYoEQtfJxbdUaRZbi4hAHbNcgUV2yt",
  "key5": "joDJrMbeBtjdQCfk9zcz3N2V3P9irT3ftUWizqb2eRSQbQw92EVFZLRJaUJDQYys1afVZdAJeV43DTcGQfW5jzC",
  "key6": "368DrJienRTvwR7vbVXCGFbGzfHyZoVWuASzPNJAXSuXYXahLBmjcC6oww1tz8mdneY6sKWm71MpeoRNdwkiKBys",
  "key7": "zsCAV3A3YesS43Mhuch9hRwo9s9on5iX5uSqSuLHacHsJYzzPiGczFEYXxBBR3dTDLdtHq18xsFZbwBt7192hPN",
  "key8": "4kBU4P9rpHckNPS8WV5y7wMnoVua7qngoZTvNRgypBRqucMD8kf5Kyka8ays8bLtojKS3wbhxvc9PTqLF5Mjhadh",
  "key9": "24mfdXcj4bZCzm7fYzEGTQQpd1rMXkRLqTZcpnpteehgdNpQanrByPRFjQmearKVn9ihDtUJdbycaygQGnYAQ18d",
  "key10": "3r8G9BBqWgA4HNnGoFUcyHLkkUvdB2J9HmvaAzQiQef7WiazGUEtYtUGuYrqWFkBpmfGgRxCy7QGBAn1ybFrZfd4",
  "key11": "3FciUxn3x9Zer4gxaC6J9n5mbuj27oRzsypxAD9bankmf2yC8bTudx5J6vu62HCCMCJw5x4HkTRgsNS6mDqxdyjs",
  "key12": "33YHUihwCeds2LJCRrniSm16SLqL1VU6Y6FN1BXF9sabqKGj1zULLUJGeu3zK8nsfPo2Rc95uDrU1L14DeR93FaP",
  "key13": "iZzcQcVpgSBvnjxKKajnQTiRujpjEXyPTw8tuJLTsMYLJ47K686H9xozwxJooNBoQJ51irFNedp2GxJ7bv7EKf6",
  "key14": "4M11QpAARzxaD6aESG4J9pvGSC8PuGMmRjAN5peDaJbh81sMUjDVLGAYh4gfP3wuVXQbNquu94aW8rba5JzFdq6i",
  "key15": "61BDAcjK7NMRGjUPa2HiqnQQQuYGHvrhVGLgMEEVGhbuYNvoFeNe1H4j21RhruxRtQoGo4GiY543Mnw4RXudiZLd",
  "key16": "28z3rnJ7ei7PSEMqZcxMsWzmLQvmkdbB37QFQGZGHyRDaxUg2iL63dMFrheS6FQ6h7eyTiqGFq3CVWAm8pWDbxRZ",
  "key17": "LFpdFhGR47DKN12VRbUDuFunBGjKbN9K1NL4MEcjgPi5tjRHWrXyHJ2zNqQopYT93JJ4E7xHT2PmL24VUsY8Lou",
  "key18": "Xe3gHTEaB2XGk4TMguEun4ARRXgWZwbuinC5bK1Utrge8Wg7X9BaAzAhWDB8NuAAWRR8hCFaXwwWNeGqSnXFApQ",
  "key19": "dEwUPckHMDj4aLcNc5WeRqJSxPXnQEtVwUEM66XasgQBdx8B2JrAHgAKmRqAbQ4k45wfzppCAdFbKBGZxn3qfoC",
  "key20": "4aUyugDiVkarCyTyePYpY8kt8kDRQTNUVDtYLKJFWaTiXW76cm5JKNoHNsJTTVq2kBkcLwZGJeg1SjXV3GbkvrrH",
  "key21": "idLUSJckNcRp46xyjFkD2sw7J25J94x6NhjjTecfm6vvWAsXVYpraKnLPRXZfN2QoBc4EvorWLJ1Ra2rkmfYb4y",
  "key22": "1jxV21B3vyYhu3iXSTzYLoH1ohcbC4JRc9G9Wso5NDc2fPhLvj1JPRwP1mUE1EQJ4RSBdQSNQraTXgVy8HRtC1Y",
  "key23": "3e7QRLsBVpYNjLMZT986hb7HxL5N2ZMWViB4dnT7qYTKQeRm1rw4R9nJXY6AKXea3XQvonhcsxQKLar7f5X99Lxc",
  "key24": "56BbFdscYZtHkrtpdxXnAPiLA8LyWuiVCyRSa7ocZ8cNvheE6AGBPuVky7pf5g1ix8FbKUjr288k7t9sS3z1pNVv",
  "key25": "63g9PG6cUPLKrMmVp5j6eAhqTpwTokjWJnfb5iXi7vLWwRjinpbHBr2LWPjfrGXFgSfFvvJF5fHGpJSzAxatE6pd",
  "key26": "5UT1BnhkAvK4PoQpArbTwR5vmwtzg5dk9JQnDEVeKho4oqgwvLEBkBKcvza785fjU1wSJS8j33yG5JhysfNV5i2a",
  "key27": "2mVtP6RsJpA7VL8VE2UrX1QLvKgBh3qssPpabDG135tbnju2SvQcawBzeaiUwp9wvVTF9ZttNcospPc4LeiF4fWx",
  "key28": "2cQmBok64qHW9fCm7Wt3Qr4UBJ2T313mwG6bZoSLSQWBn9UWbQQHNmELpfaD7UUYdByjvjAbCqztFM4FCb8twRXk",
  "key29": "5uerxLeHQvgX8i2zNRbHFH88PwoFKd6zkpMkULyHjFhUfpUin9RV7NiGc1vNodmUcTxp1fcNzKYX5CY27kh4pwPD",
  "key30": "5f4uQgoFH7fc6T1qJWvBCZ7EAPqe6ySFvRYYUX4nVHPg49nD9pzJmfDGqFiyZKqieVVwrAtrUUU83Qd1rb84CctY",
  "key31": "u1YV4VcskfNHEG3qN73ngn6eiJzgziP6b3dT4EeUkiZMkKJX24RawFSzKYeW6AmxFouGykYcPx7FtikQ7ZmBaVM",
  "key32": "qqYzsgnwh29RbGeTM9F4V7WWaKeHuadcw1mrdP2HxcAHML67TcPGKLvpviNxf5zbhxWynsWQARYsX5fpKzTPCq3"
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
