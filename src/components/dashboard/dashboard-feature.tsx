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
    "ARR4V7Uw6VyHYy8739HYcxsS8mWCErsDSbUXiXEuS2n6hCs8pQfaY1ynmYL9U7KCV2c9x8yqJ3aCXQEqbDUR6Ys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K8zRsXyNZVZevBNLbFr5hC6m4r6WC3ZAJJKN4nNKrUAyvXAEmNCvYhDdjjTqpZPT68aZ4hvZwmjgxfkR4PxvAwv",
  "key1": "3knZFeCVUeWZKiYsXquWMsJtDdPspQhvLDpzpTAN8b5aVoKPV2m9octZ2jf7ZNFr9qxUYBQrELneLrqxaW3jqW6w",
  "key2": "24sjrADh9B5UGHqARXLMB2FZ1Wyp32uizJYhpGj6U47s6EYdVsH33d64DA6HAo561aaro4hpc8BQbCiU2srQTVt4",
  "key3": "4kZi5kZYjBoy5FqFtdpFGDtCKNxa1ET8SWrsftXRg8SJ71Kw32qvZRnETtnz6b855PCce5dTCcL4fpubdX9oUfji",
  "key4": "44JCPxrY25JN92qZTN11xneJGXFpgvUfhVANuuK3JPdwzZ9Qd3ct5wdtj8wtcPt55JFD5RQi5X5cVpXFhDbUzSFP",
  "key5": "54JUynwRYkLtUoH131vn9wd6jyEJSdQxX4wcraiVBZBQfpatbJ7VTV2eEb2eyDKsnrnoh4CgzaVCG6QYS9jfPviK",
  "key6": "3W6MpcqrLtP3NvoGBbg3dwPGBNCvofiBG6fKfgWHZpHAGJKSksJKWpKYCe2wMqjkdea7uL3pK5JfCeyPXVec9ZGP",
  "key7": "2L2e2X2Hf3ircMh31JB4nsG7SMT7cT4rRbxgrVJvPQwZkDqehBczRZgZXxkXwAf48Hn4vrvnFQxXV9knNxcCNcG",
  "key8": "hY74JiPY4yjTZHAUFRq1Hn12syac5HDNwKSdpwu22cNkX8t3m8GkZ6yLicfELXzVMP1heQqqGoMxcEUZawdrNTf",
  "key9": "FhYWMBbZNY1fSPWmkJhHoicuKwiTDQS3s25FyrmcN79GXH88yGWUThPKmrmsap49qn21ru5LDcZCybeV7JFKHzJ",
  "key10": "2sqxAxcfZZ5bbVAjc5LRtk7eJRTu8vjpnKeNCNt4FLTyK7rR6EDBr91pTPmiUnqveKsZS4mXT7XtLJkLneWcb2JU",
  "key11": "2Bx3gwWL642Ctj7mVssrxYxYBT3DwbPNze3ktsmovyP8JP6Y77jJrLp7X6F871wmfJstoV7BRFT3jVKmMvhZdDBm",
  "key12": "uRyZv5pjNgcGZ6qRVYS8SxHue4HUQqimK8UXZxHX9SV63x14Ggey1CaWcRezyy5EMqGfX5n8S2QzNkt8wEWtpph",
  "key13": "5okjNVXQxaSAbtxAabgb4eoqC7oEdc46hjCDpKaTmLzTwDadE5os5YPnoKhWwSB8Ab9LUq8Uc1gWfoXboLRDbkx7",
  "key14": "4HKJoAeNKhTUcSWsMzaJhaJXzTrbtzKEn4eqFdtXtrtMLyL8E39pDarv6gs4a4A8ai1SMoSiQPMFRWwoMZNMNgWs",
  "key15": "5CzVCgQwLcvkv59fyssqS5HSBDJ535dJAG5XBxC5ZMEh1wJxXFmsqLNKNmYd8zpHC1qqs8wqRbBbQnKtjT8LRtrP",
  "key16": "4ehbs9Pdvu4p3f7dqbHa54gEtNvsqoQKRHcbdH9vmpRyhdTwr51GevqndNY6prnGHivH2TH9aC4VVR3dAgFARpn5",
  "key17": "2D2MyssBYgAdKkczwnAFWdyH5sCnYeToxxcfEYgyNFjQSa15yiW5G6HjVcEPtBJJ9oTrPZTzybEWrs5b9z15apC4",
  "key18": "4ATyxhr7ZHcEQW2F49qQN5ZsBfRs3mqZH2taWCfvVuggRk9K6puJuzx8P2zfL88hJ9bmjPXqZ7vEwmuQxSzELFRa",
  "key19": "617rVWHb5cTjeDwaupgGxEwbQXuwEhvbwRw8mLVGa41wyFy1sfvmpCmnGHMm9QhZYDTvxvpW6KPhDd7pem9mmVRK",
  "key20": "4HrDJeK66UzyQJXLFyZ2SEpCJyDvGsX9Cwr1FcSTYWDj9eMjWViXJ2QJPkjREZuzPCX6kbGUUXjzcHiPVMYhZDCt",
  "key21": "5XQF2H5Kqj1XXxWgavc34ZjBwoPDfJZNcVWg5kHdDFNUYUpcF64TgiYytLHaYG4g7Y3NarBx71eZLUF76RTcK9CT",
  "key22": "Fry7xuaDhyMmS4Zq5yx1mFnHb5mLrUmtXrDzvYhjKPWcvpsDsfJWDqZ5E52JZezF9MEkt67psTtqU81bkeeZ351",
  "key23": "2fTK7yPPL3WmDk6ndeayHB3fg4bYAV8DKmo1KXzj5h1KTFxY1xsBbQsJbw9f9xN96vUzwsMXDY3M6doz456tu4nd",
  "key24": "4rceKgG5X4U3A6qZMU5WbRPJQ6DWpfAsVssKVDZ9B1uSAj3oZeAjhCe4PuHXbiJSnYPpLgaY2oT617dxxDjpDwTc",
  "key25": "3qxG9b3ytLVYMcVPwwJ64u4ifXqNwDqPGdNd9GXXXrkfuEAL5xFaNsCMQNHY7Dooa47BZb3itCKoHiYcUBDeSAo8",
  "key26": "4eNc8BKCb9FhfqCzheP79PiLeesSa8pEVPhBXv9MaakNcL2ubroeZuRy4GbPVM2JCG1V6CRvdWqwQc6UyVhaYa4U",
  "key27": "2tetKkoYgTMUpDsbFgUWBXJdTjbVpQ7gxh281LjJ7m9BT7VTp8Abp7dNDkECgTsAuSazVGJvu7Z6Tp6XztF3AUwV",
  "key28": "21sbVEhFoygyGaeG7wNd8Asf5AYh8mDCL99WwXEUbEKBXr2HbjPVLxBB6ipmqvvkJPqfgLcUcybhti8V9vdRXoZg",
  "key29": "58MVDLCDWbvk6ReSjdm8yRJXLHkTErfXMbPzkg3egTkGLfhRJMkds9QQHCNeRAYtkfhCdvBYoBBAgipewr4kJWp1",
  "key30": "hFshtHRRxEBjvucNaw8E7RLKPmj2f77sqifFWraEqwetjEUz5aDR66bM1ZCsZKGLVwBYhc1XqmcsxFo1R1GKnnw",
  "key31": "2dzdUwGjc3xM6QMx7JU9RDseB3UJ6uMZu8ZQais2GtBoYYn6FNnGoLPVQ3dUfW5r1TpKP4jiFqt2i61p5YFJRC5H",
  "key32": "2KGm2gij5L6mKJ399JPTFLdv4UBEhffiaHD1Awxs2v3BpnxSeXWSaUuzt2FtDB2MXiLhX5hCGcPH6S1hJRq1mo1r",
  "key33": "2oGL7Sh3MoGmi569V55CKKrz2gY8cTaWbBkuL4H5qnuNFxwXRzuaMbXivY8b3fRzrgsczTPobRB85QJGShRb2Khq",
  "key34": "5xrRWmDYyPvF4PgMD49tGWxPWKxWB1KJmjTF6g9KgyxhuzoEeNLQSSmnRLLimCQv7cZztTm1TEzWUbYrds7ryxVy",
  "key35": "5niCwH8aWXuU8gZHHvpVEwk6acyKpBbmNmJqxT3vswCD1urDxYjgoHZeyoFWEWQPwDVDa9Po3taK29K3g2SVS2rZ",
  "key36": "4MomApR71TbtDraQMEn7QSdp7jgyNfZ7D2TVdM3Ztc3UdnvfnuMSNwFrJRf3TQWFomq4dQwiNCoheiLMCoGmrejN"
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
