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
    "5nqz9aAsYYp95BDBRYbP7EW3mCSRUaMZEp9DAvnZgEae8TCmj7Q3uf7Xr1vybrQXov6JJbyG5feHx8pPV3qtcgx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kuu5B5m5FDvzouvCg1YwqBdpDQyop9jcr41qRKdBh27aiRTQU914ojyTWC5LZYuAeTAaVByk4sX5HKhB6UqvY86",
  "key1": "4VSmPANqNCALz1p111bU6ubd3aWck34aw3c1MEPfd9YjqzqauYu41YTYH3rsbhHLwTP31kxQUdv9dMFKTZds7XNz",
  "key2": "5QNMSM8rFvr5YuLYTbKyGcUBr2wUL5mY8oWK5sRAswhgNdptEHaEQKZMokF6xfSZW1whXBt9M29oXBMbZ7xNJCPa",
  "key3": "2FEbK38ngXTJFxrjuP6gy2KFmoqU9Jgqi6SiVYjpxyseyCzVMwmtinbnqjvY25EPuHw3sZ1T3G15GWNTpD9Zu5YN",
  "key4": "52Gy2pYmJnCk9PHZx6QhFVMHMSyeYVYWMQzr9KaXNjV5BLHshBiuWYZat1RbNd42C4ypgfhYrZwmFstf3GyBkReB",
  "key5": "54KBBAPtteTy4EQmJaYoxS5CDtJwYNn9aaQ96M9P2qooCJZogh97nko2SgXVuWUaF1KpCHCewHt2fzjL3avcGUm",
  "key6": "3RMuU1epEAjiwDyZMt9YKiEHXFe8Rd5DhNSePNRj12R9fMRa7pGQDLdiTxBRMtEXy8RPtQuJkx3UeWRCfsXrZaWV",
  "key7": "5LoQF56r18sKAFCc7JyiRuxBKCgUXu5guCJ49ia6EjEASthhjNZR7M1TnFsByGp3vJhsszhbMxUKG37HBWtTe2PK",
  "key8": "2j9XrMxD7kDxSmYif6tE5AtSrqLFjnpspdDtLnUKWwd6FcgbNGkpNxZ8nt6kgFj4BsgwKU1zv1KDDmRmE5zbnSwe",
  "key9": "gCKmZ52Hh9JtP1GZwn9abGDwJEif72mcXvtN8pPS3T11mS6UXYw5j97vk7y4arhWQFwqaaJM7G9hzAK3R4GFRTH",
  "key10": "2nJYeA8H8xTvruZt1qw2RTWUv8yQVCNph1DCCDms7JSxbn4ntQc1FDoR7MepHv78ZgTsqumctKaUePF9mm4JH9D7",
  "key11": "58LYH1hQKcVVG2joaKJgWeR9746QM3d7rtUymxCG7r6GaTisjHDRaxakqdRWMJEMChxb7VgG5FBKyByvAV35gnLL",
  "key12": "4d5okhCDYUzxsYwQi7txBRe8GeZG9RpWbh3wbRVk7S3avgTnHvtjHX7NJc3BHqCb4wnoUpGrdRKzpTC4cM8RVrBg",
  "key13": "2eZS1Wcstj4gMAb5AgZcE5YfFGYv4GiDVAQxBCYUoqUVGtTAwyfHERr23Z9qUsAwusV9L1L63JaTmCARHiF9akhG",
  "key14": "4NSYhLR81mRc29dyudAKJNsESDyhVF7PUrmb8y18qeX2zyyQmzFD9s9ptDJLk6ewHL5Uep9pEuXrxtGWX6UQBsFu",
  "key15": "5nvrkXHFkpHZXJc51DNoB53Zt9cUrxXqzeFQL91qJh3hR6UnWNvmX8u3h5eJyGfx7nRQknkGavDjdTsvyET28N9e",
  "key16": "4gLVnub13RJMsGGUdH6HKk4CBDfHE13EPWqZD8YWk9Rzjw2qeMDn4x84cnUau6HwjwmhomKKgBqf8q8Fh6pRtv6H",
  "key17": "FP3NrhPTs6t3mi9yfcm46kmADrdDJVHeNEE9TrSjFvcYVXMa8KVHJZ77xMLytP8FHqP7fELgUuoXAuZYha4vVW7",
  "key18": "3dGhGN5cwAS6w9FSJwj2Th11yciJYPsn4JWQGZ7xMx8Dt9a36yyifiTJSWKP6AqkYuMayRY93mNiD9rpFN7oMj1W",
  "key19": "5zKftVSCTzBcYHnATYNhtdHoZtaHnxDNHMUUEhBTMWXPLbNdSzTibb51uWqheXax86pqXpgWyskfrFZuUhZDy8AD",
  "key20": "TLuKJsKRHqTCuJrcBzmZZ5tnWuZnNvXbTqfiAVfhNio5AFSqYdnSYfRk5PQpuVqWBzivN3dT6ztyT2cBcPAsqKX",
  "key21": "nGEuomWMin1UYrMQjvFPL6Cr9wzZFxUcKhkRgRCR7QSyHjVoW5wNbUMoASdLEaRtq4HZgAC4V6ZafGhjstTXZKC",
  "key22": "4ouc2bVWmJ9Himncb6aqDPTuABoQ1X58VBG85K2ioxewVG43wEWnzwNm1bGcnM7unELkTRsz4MHkR7xhTed3vyRd",
  "key23": "4TAs4Wv8awuL7p9WRzjecPHF2my6haL6P9mJMtwiLwS1GTbcjJcYfB8n7NUUkDntEizbKvWznqgNDDVfiyKcdeC5",
  "key24": "5hbXcUi5JUBW5QReBLPDRvxTTb5Z6UeTno5NHbEeehAAnD3utBpZRdWn19siPutkce9yMtvbKnAbBcZfBM15byCp",
  "key25": "4t27yPGfHMc9miwb8YwHqn25UbDnSdueVKDBYsqTAWdauuhL8LywvApECdBi9b3e87sfHi6r3W1vE2D3pGuP7Th4",
  "key26": "5teSF3SBT49ZyLasjem1Dwxp4vNqXSFM2TbE7AWMWSRpE8SWG6PbodZzv8vvLf73sUyXiBhfnJ2macwFHPBq295r",
  "key27": "65LEH4zjxNnfqrAjmzYAymEckUEL2pGoB58qmF6MBJRLatjr4xtduicP54293dWjZfGxfZnfzetc7kW9XL2PzZMC"
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
