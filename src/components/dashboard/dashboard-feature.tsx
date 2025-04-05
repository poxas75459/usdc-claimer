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
    "4wz1QKqU5dnZw5M41hrh5GxhuNDKAC1a86iGC4HWpKWqnB41tkzXijzympmtKxbLUjdcp7jz2A5bsveyjX9NiMGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UHMoxW6bFwQ7Xe7APkbTReM7gkZgToMQLpmcVRSA4VuDD5mT4LxgryPDPbnSWAt4xxmwEaxGnACD3zrSo7eLWLY",
  "key1": "5hp8VvMXyzG2WBgPebAQvf3MqBS7gJYgVRuGNzx1wD2uFUnKWtktgvNum4bptsYHaQAUNAN2Xr2A2vus9q4pRFHH",
  "key2": "9UDLdC27E6BfUZdZSvBtNGBdZpANyefSoy5pVrbSjXhgJ1YJiLVodPaU5QYYeyKUmXqLAPLnMmCKs3Cz8efoimy",
  "key3": "9Yj8du4mZ8KwRFh24YpkGtTCqDgvvPFFy2xCbrz5WHrhQuR9c4WJ1UuGQCWBQzkaDsCECb7B1Pu2yku7qQgcXXc",
  "key4": "5FiYsDgSbX1XTcPKWCEj2njxd6gEv2NXNdFFkSnceVAvXXMFwtpoJYLfN42r5J6vKW3J6XUmHnQrUJMmmBM47dA3",
  "key5": "2osvxptUDiQLTGeN1rYCP8Krxv2tiw2eCTti4CfZCHrWhzeQDRmaYn3Mp1ia8D3vdwy8imb5HRH7RTgeiKcFyizt",
  "key6": "3HSERhqSNzDBPu1wsCm8XCzJwCjN6anE24J2vW11Qxtf8VRZretjFsWJUJexoDgRd9cWMq6GorYPJzUSgbguWsLo",
  "key7": "kQFdj8qZFZZNeQTkH12NY8U1fkr7W2FXDgGmPWArCyfka2tmcXjCjc77caSZH6MHpYiQjcm8bA8NutrCL6kA56Z",
  "key8": "4LY4XkX56Ps85yHTbfbzSue38hAyHexhJri2fspi7aa9uth6e3A3J5Gbic2pUKJisXdGXKRosLXdLmimKpEEiy8j",
  "key9": "4MQ2KQNtygpTSSkyDonLMcPyRUZQ9Uj2AzFeyn33XT3YjD8BqpbuuFDFLX5GzkTZbzcyzeyKqUTU9WHj4nhGWyQp",
  "key10": "5t5eLp3RDUd1S4XT8Air8EMr8XGkvuPUFeqmkh6WkxbB4dCpsWNGgkLw5zsMS7CjyStbNLkiqH9fEb62PUUmu3Rp",
  "key11": "432qPv2LUhn88beW2YYBWnZEAMZhcVEmkAzaWAWfta1djd2dLgUmCf1aQMJKChcRLHE6VpAM2TPsusTUqHuSsXxN",
  "key12": "3ePzeBbKdNzmPXdBAXu1w4sapDrnDkwiPTbSjsMAVycoyrYWqZmPkohmz7qgG7UHanohjJzZp8ytsNinfmWEUpnA",
  "key13": "27ZPh9NXHyBeZii9ppxhEdiVNhMe7YdybtMzKiLRMmH4EekSE4iKZJCWG7jP4zUaRs5nr3n5ixGtURayQaDwdqoY",
  "key14": "k1xjQ5qCdTi1C7cj5tgwW5uwJw4N9xfBm6LwfUDywdGk6gzMx927i4bgsHazkwVzdwBJjkviiP4DHyknQ3BrpBM",
  "key15": "WAsUkaETBSDqv2VCPysaAvrwtucUBSptuprC5cjHLur2v1dKdaDSxEotPgcBiM6GUbpQKmCEyXWKJnAMMk9aJAx",
  "key16": "223h5vpRm9F4etzmjDHEUqeHXZW2CCzJr7LZNjZfPgkSnLhmazn2NR4ZcMB9UiNNPpxUGW9AvQ2XVzsUV9mwFRoX",
  "key17": "uiRHrPwgvQq8GhWPViA8X8oL597bQQEaGZTzV37yYs6LXcXEE48jnXBGJv9SkxEuK2672k83rWRRgbEXbEy4Jym",
  "key18": "bbf4yiPCx8sd9q36YuckozALdZoppyvYGe5MsR6UHgWaJr2qBeRCbdxjKqeLEpqXeSmNv8fRR9qXEHqTD5ogRhv",
  "key19": "2PhtnLgZNxeFsvb433pti2RrpPCbySkqyuBNqGWVxMaHwF2fKZYk64YYrArbBNYCNqYYYknwQMhasPB4QMasQxSx",
  "key20": "2qj1pabQ4eE3rvUhhaRxPrXACpr7K8GqobgcjDedwuUoeTCBvpNXpK2tgjEsLPMjzZw7AEEv9xmMJM2GbvQmbJh4",
  "key21": "4qWWzkwDgbACGWqM52c9AEdxaPxHPC7eSTKzEat6EYK4qzddQe4f2gMrfuVqFupF6mLpLYw32dE2UBBCzzoGNJaB",
  "key22": "2GHtGNPPfrLdYJdHkgxu1r5wmsv1K4SKdL4AenMaNHrbWRL8cKBLGXrSuaLpAd6trWRVmDLS6vj4AbS2PaxqsMY7",
  "key23": "48dnAZ81kSA9N1bbSYXU9bxSZTA4NDwnw83zEt3FGtTxG3XNUNQb4vULSbFKSgt8arVkD4XZ2PdQresDyVcDakmQ",
  "key24": "4cwyNMJMZXerrvKs8zxL1yLkMAn3kQDmkFnhtbayWpDwwjYW5VwwkmtmkCKj2xYzvp9aGQhAedYZU7NBduERpTmq",
  "key25": "FSmVdeJYJ7PXMfD5fZFMrSeppJozTvLZjsPmrY7besYYiLTJTQm8Ak6ptwWkMZ4X6VNWwB31M9MLtx2PtJ9Rfj8",
  "key26": "52sZUDjBpKTTavc4dcgwsw55Mf3uKSRHhztuAKMXbfNXHCJK3JN6VzP1cv9MDEuDYRiAF8GqNNB41S9CuX5CH4MH",
  "key27": "nigeFJwmwXFzJSNd6Rqtp32fs1UxFDJrZo2xbZ2SHG7WVn9iAU6k7CQK5SKP878MZjRW1hg7AMHrNiyGjAA32MF",
  "key28": "3ErvoMkVr2rV2TZ4Vb9drZnt6R4L5Y3DNhmvTREPLAwdG7PGBuZs2ysojd7HaDS7shXgrJnPp4E6kx3yTz38azKA",
  "key29": "BhqpRNx72Rpc3gXr7uDaGpYmMbo2Tozq5zh1ftJCDJRXAuFNymCrhPiU7VjyEXLujeNRHpRmZVT9TS5ACD9LBon",
  "key30": "4VcWhkcJ3vnScSNcpiWnk86BKFmk7vTVBZALTXBGd7gzAxA7Vs9MjMVkt8bkB5Wx6AuNGZp3WdQPNWhLBy7HTcB6",
  "key31": "5SPRzbQemZeiFBfajKCzZu3qK2j8tKijogKELJ3AK2CGK5hoaooT7xDHpw8bRFdkvVk4uwb11MFrVdpSj7RKcxoJ",
  "key32": "3FZfjHutA3ptULa9bVXWR2uMzShcX3gzpcSupJGdo6cmpurqzYLLoHvLkrvNVu3YhBzyVGXgtoaVZ3TLWjjnKw7a",
  "key33": "5UzEfQ2wwpdY3acgCxJrWKKrzjBfL2UBnJrwjm1M1jcTtKryTj4zkyB7ZuFATzpkiMGLSpYCcvVanGVXo5M55rQr",
  "key34": "4JipJBLnBWkL1C7LhQipAETjs4LetA9xsGRm3oJDmfiQSeQzoiAAmYuF5Vb7H3eHAc4kKX4U1wokwb66GUMtrnzN",
  "key35": "2NYRu27Py5P9dLyQ2s86NpLdj2XzyBNxRGvRopn7WurSPm2yZkUKYPMyFkcGuGJRfNRTgTQM1hefdsNPTsdoow3Y",
  "key36": "2mTp5nUy21Lxanv7bEWGuTrocecJA3q2PPJ9aXQbwpYeH11BYDhuacP6oHmKe2Ku86yYZ6wHWmpnoMCibeikEaic",
  "key37": "26sNFrxfnp1SAidrxrVV64QiSGAqeeatH7MpFGrm1kFSgPT3WEinLZt9bZ3YshjaQ5ABNJtEnN1NmG9ppb9dFsYF",
  "key38": "S2GWiajbtvRAMiC7Ufyd24ZUxVoAxq5gEMawguN4w5cSuRtrDExMXs4iDAmxYrgbx7LSCdWEFYBovSJfmMNvkxG",
  "key39": "5iY4JMUL8wWkwN3XTxDVDm6bm4wZw39Y2fJhCtEL4gSwpDN8qauxWs18vh3qJtFFrKB4VVTagX9pmxpEn2X7NDHr",
  "key40": "4fRqdtQ81GYfxrbN8W2ubz8LTDFc54QjZ74skBEcZo3vQpxgnNBheNZwEVPPBBPy7vDjuuYXUtx6uhNLU2uTanKo",
  "key41": "3w64pvfonmntef6dcbA2DUjGAHPFPibxQNr78e1a4mhUoVMsjADo9gbK2Hs1DbvLHEQsTG1mVtzCfA6ZmwqvTgap"
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
