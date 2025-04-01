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
    "GvrUnpCo2jYcoNeX6dU4F5s1TSj2Hnh1DNe7WUCQjZQzAZAx1G2gd7R3k1HHoYLszA8z8oCkBgcjEbRy5p7bQfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w3fg6eRsep5gHf7FNAdxaxd9bcZB3hZSUUJWWT3uFQTkA8o9KwBt23tsM3GP6GRUmKJqub3EBYS4NiDAzEf2seQ",
  "key1": "3kYJp7tzgq69QEW4MEbuhMtZv5CDpANdM5onqZEQPTvdNBFo6P3jYgpHk4jdWmaWzp2wgeH3EN4VmnUeL3GyEUS7",
  "key2": "Z3jJxtRwekCh3RaasK9HwXTyHptb8GCf6sAM57rGqfGNyfwc9HLxw1wdTUPBYXb9A3FXYwWsE1W22VohCyGtWzr",
  "key3": "5VHPPmvtmaZsFTeaXHwxo4YfoiFYfekPKwBC6EuBqpVoJ28mkJrRra4drzZAVmRE8adviiXMdYQCtNv5e4VvqPMX",
  "key4": "2ETd5Vomjm5gHLf8kJLLgHmW2QfFB3FiGJLbyN9sr2GG222i52YN7ueuQp6WiZuErJZDReUaytLPevoZjo8VEqYX",
  "key5": "5XCjxdbjwKqaLpuEJJQmamwRFBPwwGaFxzy9KTWPPL79X4gUM6fioXSwJgRhmoAjNc2xuy6W4q8D23BWNdWtQSFU",
  "key6": "5iNDU7ihArtg6rRFufNMJbqbteBSiWhxoHQMVpbgSFMx9xgyjNwNkWWu4CaCeiQ4EtfMZCPcLUQx2g7mt231qNv3",
  "key7": "3NqPGKrePW8ofn2xKGq6gB3aBHbRB7vhkLSoamJABzezgEjpsgWRXHVMfK9JRuoPWZoYJw8SBXLdYV1HUp9zu7PA",
  "key8": "nJpqJvRyCe2wX3zDkxq56nbQwF6ZoVCngYRcNR8KaqtkpcsGRsdRLmT9hCy8UM7uKNtQNeZ4fiKdF7F9yeCpPDK",
  "key9": "5RSBfHXGGpEDj4qQFv4SYLLgBf87VyNDrnNoXnEvcqZzEgjFdChdXmXuSpyUyk3HqEo9joCM8TXvmT9iRMXNQLap",
  "key10": "2BZezeQx1kFgKVrN1MjBUw9XtbpdJ5VfcM8CpqMx6yVm7ATiYbqjRfw1NNDbTHZM3Gf8983vPkYxaMbLCXif3bQW",
  "key11": "VcxMpeMV5hCYPd5v1Kgdcfk7tW9drS2stYfYE6XNK388J2rran8yaP5UwLR54cjRkRPoUTDA9WGVPm8G5VSBCCa",
  "key12": "4CkPxeyVszmHyTUuvCpmWXM8uUtSkh1cfaNfCYoG4nEmQKCgkdvFdZ9bEoKA8iypF6AEhnsJWBWjdMLyJyjuicWV",
  "key13": "62NUYXbKDzQdc5PgfGL2uBahH7sEQcgJ9hXoj3k5xASSH1xbA1Sp5qoxV9Ah1pGj8gwcYYfvVWWQ3KdnUVLpLH8N",
  "key14": "3hbSEhBQhoCTJVSxuG9dynZsJuuAUizy4P4nWd4Ds4KCUd1QAeEN44a4sDNHtVQVHyauXbKJt2tntmFGY3EXpnoN",
  "key15": "5md79hBWWcKKj5HHehD6bEz8ZpGAWwk7fe8G4mrtEMSwARYCVrcKzJgdgSUReSzVmUD7Guaat6WJLioLQLNuDHYs",
  "key16": "2z1BfV85cfqNtnY5T7YtS1Tm9uEbYNJNcQVixGaEgsL5Jb5KyAukN51vmij51qy1tzYiTr1MJG3T5fQnNEAaPSnF",
  "key17": "5GXoXx8SFTCCt6gv3M1TrDEcQ814A75eG8Gk3zjSYQHhXTYaVMdfoqySg3bcb2UjUmipAcoDFCDFuGW3LXZZYuFT",
  "key18": "2WLfrTnDmeSbpGXTvhxEHKtReKAzLVUnSv2gaAUJeoWMUenD2AqDwQykyKZ3wcvzYLFW7YyJFkxVSiyfzQ8rzvke",
  "key19": "5KDsohoG1K3XYnY9ieLptAeXmQob8kJScvcDbD8zSHmZGAZA9akuLWz4UQ5hUzUdVnj5gcZ3y7LMigX7DoXRYFYP",
  "key20": "29eRXTGRKBrW965tuHmVTdYPSmzkYdicnFz1Nsoc5TwJLLH5N3epfQFpGMenk9EXz6J3eare4eAHVqt8XaLBHSG4",
  "key21": "3yQTa3U1GG777WDgGCHn4cocgVQAt9UZpbpwbhTepPsV9ZVLsjWJ3F2fe21hebUCqRQPnDGGptEDsUcVMmfedjoz",
  "key22": "2uToFd95SHnq7Cx23AMVCDBpvtFhQXMuAYm7Coa25ergjKMTmxXHdz9aXZzwaNMUuSNj6j1ApbCKPbXRe4pYFnnJ",
  "key23": "4UDmE8ZdYh4ii8NN4TA2GEBra8C5p2mojubVRffSS9zbJdmqgpTtRvDHHTS98yYwHKAbioSpgod8paKe9VEvzUY1",
  "key24": "5JqrYYEbPQ5SVaxHRy7BSo8uDNxvodXFeBofwELn6pYseo6WcvbGgQzCUTVvLBhbDzi1pPRAR1XgVDt2pydhBx5d",
  "key25": "65QBE1ViaMvTsGg2pTzVpJuZmoH3cZCfhJk3nQqFrVMkKRERPk75wBGkNqdfVFqV6tGPDkr3JuLVizkCGfR8Sdu4",
  "key26": "3BTyGaSbU1MF9fQZ7Q9E8rJgUMTHD5K9LiKoBqszyLdrL9rJVRwLmrBZPAeB6dDvD4rUHp82FWM9jVCrk3bfE5Zx",
  "key27": "3FXXisuCWpbkBZU8REVWYD4PawnEwBTevKiJ64B1bhxpkUT6am6BGa7cyPVUBWQ6ENKKKFh3jUmgmvwUUAQMC4RL",
  "key28": "3tMQJJMkcojNoDR9k3ivyR9eavMMjxUyHqZqB9XYc3w1DCdmpe8NgxbBb88VDE9QteMJpTCNsBYa8mvDcGtearKQ",
  "key29": "2D7AddCNmH5BxtgZxsFBy2PRHRm7hYunGdjyrTh5nK79xfvD1ECJZVP5DzwFXA8ZtT5kjFuFcGzzypQVHDNkJofL",
  "key30": "21KSNg4LHSQjLm8yq7EV5uDAck6t9KzT1PThcgRTwRAxa9dcVr1X27mPyjDgDgo3K8Do4GCsLVBq5bepfMvKATdu",
  "key31": "Hom4y4cDQ54mAiWcqPdpS8ciScFtjUMpAW8Yy6i4dan35JHkNc6PM2e4wWqoeyYhXueyC2sav9HSjN8kLGC4L5u",
  "key32": "2hvCtUtSVrzGeJxgPQACYnhoHPXjAideaaajRLigzZkW2dLcybeeXWRfKxvQu35hooNa8T1puKXq5bXcdDRi6SuQ",
  "key33": "5LzexeuGRFKszoB9fVk6fizkfLVG48p3fhFdieASEPHnBuePXfSBMgv97eci5cj65HZa1nUacvRZAgfbmsxgjjQA"
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
