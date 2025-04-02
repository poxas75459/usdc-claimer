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
    "4UWw8JMCXGLVZnWx5oGf4cNAoSL68EQMi5KHwAWpTmK2bAFegKBRNSvYZV2Rw2Ux3xTnRCZd18Dw9ZTLsBBfccbj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iB4969KDj6B7GtpWv6Qniv5Co1V5ZG6jyjVte9AMYTrBi6vrjD6JoF8Y19KNTD7sxH97Hz88X4k573v7asUz4aG",
  "key1": "k8GNJsEierRcmCo5z5TKsB7fCxmTXE3zTT5FSVqkBQxGh63f4V3GYy46RhGVZhxrvxHkYVpt7b4R4jxBGr7wgGs",
  "key2": "5AVmQJfkmWtuXggN5ipRiuM8kD5tayzmH6zJv1K8WnGLYu9tvjGNktJPEXi9jKUPYCgZrs2pkaviAs67M2iAtHJq",
  "key3": "2SQCEiurmS6HnfQhpVyehLQyZLZKS5d1qgL4Cm2jUuK7xGPEqhELDKJ2QRKphrfHBxBf35cJ6F5T3L6kYRt34BPv",
  "key4": "4kGbFYuEaBJJkc7EScghkziHYT8mywkdVnUjmRFKUo14ZEnfvLVENUBZTgE1dx2aU2vHfbd6VXDnob3Qsyuapocr",
  "key5": "4a9KVQF9mMMYHeLc8bHBY8yc18U7Dtbf8oZXycdh9q8Rkf2ddZKjrwqp8nLn5sJ3tgrk3c4mL1WDk2BZJutLXdVa",
  "key6": "3c2jPwXBJX4XPwiVNphLsxagF7htEp1WsWkdS5XrWS88zjLLvDrDacTeQJuf4zfkbHjZgXQaCT1SrSbTFF7y1KBw",
  "key7": "4eCuv4iQ6XTkTehgJPxuhfYBSKjEbs8MpuMCp6y5s7hfw2TVFvMsYqg9Zybbku64CYfehadPFBSaTD9DyVvZuFP",
  "key8": "3H7bxAX2Ds3YTJFgoKRemjCubmtKRbz1VbHMnfRQ1NRZEmQi2kedRFhmnMve2ch5TggmxEARja9Ps8tFC288miSV",
  "key9": "5AQSh2X3Xpqbkw9BxBrMAH9sEWH4Hqnbegyrrq6QNPeWLMALtyHcUWACo1fzeQeTEaGnM2CYTzzQtR2qwprbKvai",
  "key10": "3coQyJiF8yztscyYRPtWpoju79V2HTwBBNJy2AtQxEvVM67DM1RPSQvkYZyrPjoDEJikgr3AhRT2hSQHkAZEfQBR",
  "key11": "fZVwSQcYKPvNuD9fx8ukkQUvmbuVPpLiLoY8bm2oNWeEmnSMsC49ncYearS5YanoSZz7nNY9QZH5URHTTddBxDy",
  "key12": "VouYGwmBxxCgnQLTLHKwxW8h9pc6hTEMJzzaBnvbPScfaTsaQJvm51zfH26U5YNaYZscbZUJmPWg91v2c3ZAmGs",
  "key13": "L4nR7YLMeZ8xNGuMWQ7Z4acsRc5vkUNEDzYMZchttjneKqWQSEspGXjpbv8iLD9G7yQ4c6qqDMi5F3bTJVbw8z5",
  "key14": "49Mb5zzgRWwPD14A85HWv4wxVZtqZbqxLZ5Q7UDvxe76gZf4M6GUZzpNNytimowttqg7kKihgjxoL4EA7ZCjzujC",
  "key15": "FHFgHsLbkka6r4M52eUKKep7mGWqFuzH8davZ5bVvn4zYXEjoBKE2V9ZkG1e4uscz4gXs8frK7r5kKqLY7Tozpv",
  "key16": "2Vnzm2DS9QcDxdzBoiJP8QXerB9B4pN4kdqdohNXrFd5vigXPW4xFYSoajt6HfGWFx8ehzFDKJr28eoNkh9YYm1P",
  "key17": "3kwseyykb6i9QfdEzwHdzHvfZwpaCcW5EWQrCYNPAoxzPMcT8o8dH2e25nycBeumM1ddA3Wu8idWEcCaWh8HWfn",
  "key18": "2QU2wFHyUc3RA8H6VK85uPQq1TvTkpn576DyE3DGZWNcnoAD3Ph5cGhPnyjHMqqg1ZQXipZg9vGxYj8yCGYiqJ5M",
  "key19": "viS3U4inPinHE5JLWZo8dPPhBcBfnGrGC6sv2iqK9rPvXNzSNVvLiGBSDoZABoPfYhr3kBmaYop2rDBPgaZphc8",
  "key20": "htJXhYPj4gpTnHKK67yvEUvfPRp5rmpWnWbvfetGjimxYibkQFk2RH79Mw3x4pLYgiFZm4bbiso6TbJRjbuzVmS",
  "key21": "5THdfqc8AYY83st3ygjBirGZtsNWSCg8H6GDqsQB31vnphNVp6rzPTqYWRD6yrbVWubdrWE4VgpVTauPMxZqMjBm",
  "key22": "r5spdua1VvMnwwsEgqMxh7MugEZU6a8RNJpzfVDL5LTaZhi4Qp7JKVbcNZaHSj1HDxNmYrMZTXdEDpP8y9LuS5w",
  "key23": "3oupeTP6JPqmWCefehCmAZQQKB2JyzEbpTrrpe3Lpd3aLBRjx4hoYBfbCp8e4Jfvoga1hiQZ77W1EGmyo1Z7zobH",
  "key24": "GkT6HZvYyAAhZ7D9W7S3G1TxbhB1YvpEAKox1QkuLDaK7z5XsPtiRwQBzoeFqngALphVQzjMeEgJDGPf9jYHKzY",
  "key25": "4hz3q1w3nSFLoeeMoTdn2BzFS8jFtTzQSo1hvm6JvZd4s111Axj3xewaQZx7zPjDwD6HQDyB2GUkdBqA6UmkgUmh",
  "key26": "4HGSk24RriyKRXVychcXBAHe3rjXoRXVoZ56dnqVXeaQZqU8P7XuWMTqcPuyDiPAtEudVpKXpYRNieqQZ5ZNCyay",
  "key27": "3vp4boMaafzGYUTTUHpEQvrnTnFxVWFemMdrsyxggzdMRr4GetnVVLRqm5dnNvGBpWesHYLnTB6tEeYir8Kc1LwN",
  "key28": "fhM1rG9Zry283jhHnRoQDqRSuLjwkpiVTRZisAY4TDrfofuSwNguaQUrXMAXj2ArUhKfRrXQLCtWQcevbFYTjd3",
  "key29": "3tCh5vwSSKP4bFZzZNj7LR7rWTbd2HECBTewtsRd8NWcsTsgbcaH6AddPQ3puRiZc2tt4GYgZp6r1QqgrJegoZ9a",
  "key30": "1qoiVhSqUx3KqcAJzLbK6GPwz1HFgXjfsaJZ9MxL6BMeJFYLFE3TDHYadABiMXtmoAeatWdShUuBRSVcXcGmnnb",
  "key31": "2bPKeGQsaRoen8cUq2wkMJYq5EvpX3vwCBYPVqPVgmzgBBbXUMTfzLiK6MVt5EkgmNMLE5c3nPrBe9huZKtqgDuq",
  "key32": "2KgoG7H1HKJBbdFjkX1EgJo1VEXZD1Ef4GNjcSzUMGBUTt5DJy3vv1yFh6tRBiuNp15EYXe1jEyD3NkJUeEUGgBn",
  "key33": "v1Twx8CRGckQHDwo64PKBt1fs6FYLuhRDeeeA3n8fxFWvP8xj7VTzN8xDS3a6kgb2sgRC2dGoEMRWAtuKLE98cA",
  "key34": "61CSyGVAMKrRp2Sd652rLLfkgrmXsym7tjTvTWYQtCu22iCpNayfEvtSWaXiHSRKZ7KYEK8f42uTp8vUAU7DDZpp",
  "key35": "5DeoGkx4yTJTKqzUQjBwexacWJQjJFkHygLbHfUWSZbP9C6F5X78J1vXzJbhv7RwwvRyAr1HsdqiFfCPWZoGJRNj",
  "key36": "4PdWJmi6B2MrfKeyhUvfP9KF4ar3qatKr7FLypfFTGkLrKZyXaDL1PcfQYLd1ia2hnXZyuytB4ix4b69P9q2m3js",
  "key37": "2NAvcj32Dh7HZCTDLiqrxuqCaLv73r39N4rTNuc8T37jFkJqg6Uyi8FgBJPwLqdSmBDgn3wm7MqFx63aCo8Y6Efa",
  "key38": "eQJCbGHcxuDUVbmZWg4mXz85PDDKuuXXLTeW4S1E7DrHsyF6RLjyaU37RQvLWSm4m1qUWp3EytJmXuAqg6ctHAC",
  "key39": "5ag8RZg9VTnpGkbDQapaZvxev4e3tbH71yD89ZUxzLv9ZibYpbra6xTM86xPJzgYfSXkLtxus3ZPEdgMcxuGRJTA",
  "key40": "WQkyVcbqBeGruuPDU79g1HgV7JxyxTSh9tZJeh6fY7pLJD7pkdLZqWg3E236aoeFgBAbuTTWWZUeYmPG55TGeBE",
  "key41": "3pGAzU71tJvgpearfGmWqqdqEpJHZtisJRDNRYU1fk4X54nbBRJb1ZYCVzjEWfMgK6v9nUdkjtcPdWaXPyNrE7Yr",
  "key42": "3g4QWfRUybHcUMU5okHMgVEaVEYwNbLtdMzzKSNGdDnM3D3y8ct7ZyDzZW2ETcdjMYHwJL4XGD1iLeh8YnEBmgJB",
  "key43": "2nBqyVGBj3gfu7eekvacdpMkW2hdXd5UmU7udYp1PdMSGj77osmTQFSCrBwXw5ZTqchdrmDz58GmrtmmW8mWLSQf",
  "key44": "5yxTEuARLtRPVEyxwqdFuSB8gzpar5mPSoYPEM19REvChZiRKZhCweNgtUymKWPbipiu3u4LZHAwGKFTRvA9ENBQ",
  "key45": "5kVC5M24UigsHvXfXiKMQhnHMjNC6E1yevag5jJ932cpMuqpFRBVCdhqGmP5ERRxP4aMsbjNJ1CzxrpJdPmWQuar",
  "key46": "3gzk9Hwwqpm1boH6nS32SwKKXgWnBRi8s9ptngwu8RkrJwLGed2H7Q9z14SFRScksUw5nCoq3vs4n4rrHwdGzTcs",
  "key47": "5iLsBmzY6HvFbdRVPpkHoiAxEpEdZEvRTisrnSYq8VuXWYZ2Z1u9WJo34ABdPuYzrhyVGBH4QfsgD2URnVCGLBao"
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
