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
    "3y1wUh9KHCfqHToXqh525VWSrXULybLkCncMBCP7tdseg8PxbgDooLebG82jhMKojWC8srWzeKuhQ2o6yznPq2p8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wi6diX58oJT6rT39rUL5uEtAg6P2QeQeoXYhWjvo13ZbUSk67x8kDyi9kgmo1Lh9vmEy1av7jHiZD4gg6CZGiBj",
  "key1": "qtP2fHfyVH9xq33eooq2qq1w21Cs4SEDnA24WEn3kDwgkoGesci1P5JBTS8EE8viz7MBx5qGq5SWF6BN4iyo9sX",
  "key2": "5VGdE5oKKLnj6FCN2pWLnww1mDvWQ3vfpWezFhR5XZrnCszRJia76utxaMrDBqKyemwfbYQaUU3sbGNE1jM7eKtQ",
  "key3": "4Ex3n6ZBRGoswoAb3NzypKp5faAJteVfpkPTp5Gdu1TkDmimFjHThjQHHJjDuZaPYMfJoaFNkN7ACZRbZgPT1oy1",
  "key4": "5rjeQSHRco6dy7vSVR7bZyAoJJ6EjP91HcN3nkmosDv7ouovVwwo3YPrg2hmTG9CRb9HBxVHzuAQjJzJe89qmm76",
  "key5": "e8KpyiTjqyqhM49KEwfS6gx8H1mHxMvyzpWiyAgepQ1BuPSwt7NWVgCuiN4vhHT4k2WmMvtQqrkLHQAK1ufg8Wq",
  "key6": "54M7xszwJqBPDprGjerA4buepbqqfAZX8TZa9senkkFarLYFTPGVoSUB3ao8CReMyS1qEq1TssUikQJf9ke9NhdT",
  "key7": "3NkqzX8zXMT8YHdzWNAdjSf65co2ePyuGGrLo3RYoegCHoRgifWgLJP5AuJtJu8dZ4XrQibxywCGCza7u84nSH6H",
  "key8": "2cAS6LCpPRXLqGA9vq3tmsuoH6Ckop4o4YLuuVPqxfvthidzBcixT5sxJ6afGCNRdXZeAxuGQqLAui9Zj6FCK8Da",
  "key9": "41cjib1bgZQGXGsKS4StCm8n2pBQ2g67GwcNLpAxGUvdXyaNki8pqvAekWtrfemV5GYxdmXocP5HhWcejZxGtUVC",
  "key10": "5BeHUSEwYZXNTWg5xzQ7xTaW8RydxDhNqTxt74UP8cNHJXTFAkYryx5XCfdcqgHg3Aj3Dd66WvyHNP35akQYnh7G",
  "key11": "2etCbhKQ6UX95RGRnVeTbVBERJSUCjpwTW2QdFNprYqNcFx8b489FGFpXFTSh1XjuwSHoxnc4QUQVeEKJfZJNXH",
  "key12": "3sSY9EoiWgG5EqR8tPiev7fBJu845ikxb8Hudo7Tju56Kk8Luu1k2mkbkQstEgZrfARg54E4E7uXJ32zpP3ag5Bb",
  "key13": "3JhZ2JFQrZRcgmXfdofphoqczjBxPqmtVmoXAQn8p5eysP6jfDdDdjRVtzk43sugJhYZXwZuJW2XpeALKQPJSC8w",
  "key14": "5REgBC1PWh6VFfpNPaQBGSnAWWgg16gyaZDH86URdr34Wd8GsfhFDHrRxLzgkXfQJJeyhGmBSoWNKkrUGpZEEbKd",
  "key15": "xvyBn8GKW4dZhKW1DbLnDh1vBvT735eWxiPtKYANZMDqkuzsZGfu71ukUfPSdkN2fzLtPbSJyf881ugZzSoT1A4",
  "key16": "3iVjustSzLZU2Q9ucfP8twDtVQjyTddTY2qgtceEQkQqWFJACtm84rDqrafkNSbK3CDGHEpZsxgPryYffvhSnSoU",
  "key17": "3E46umHhESkVty18cmWY9seBnt1ArJoCLSjnmMaX5F7a928CvsGBzUBvLKq3AM9GuNqbdAyYt3nxe9YXziKSXAkq",
  "key18": "vD4je4cPxGfheFDgnbsnCwgKoNCs9bmPZAGfK6JEQ8d43HPauM9XN2B1bJPjBNE2HiiVVcXGaUXNEcBDkrDYNXP",
  "key19": "3rQ1LnS3sAmbqWmyufqJ3PMndAzXWLL6kq4poZ7xroVrRWnrGtVQyWYJPctomg8KHyNsDwspFid5LdYtqHDxzS5c",
  "key20": "56EBYeXHG9DU1EnCFXNEFEfgnmKhWdn1kfhuBBCh5C8J2QRKk5pP9bkWnUfrC237pE5wtNnZuzyffw7nVo8x5R9a",
  "key21": "3yDbxwsFkqFA99bbNfCLCgtrDhQZQ368kVF228eu5RmymmM2efGXWmcbbGohRY4Z2bsdMyRS5q95nH1ywhmPCDdV",
  "key22": "2H8oXPDbMdF6rmC6uApo42uW8s3Mq77g83uWM1F41cTzqGxwB9VPpzryZA4aSwLDGyn1qBVohq5yVaGVX446j99",
  "key23": "C97J3XHTYovifxa3nLYTguJC7pbrUZj2yhiuW1L7XJ6urmB66jZUTfFV2r7z9qN3XB5C7yrSxHvD6KdYknPZKHP",
  "key24": "FPfG1MW1zUGKFJr7XYHscXQEa4BZTgxD5EuWv3QWeNXEgoYRuLqyFcYXbR6adaeso7LZzNL9RFCP7QBjEG3F76U",
  "key25": "4hkvjGaTrMubGSke9ofjA5oa1HUxBB3YAkeUd7QxpfR2VTDwjCd9TL2WKejZZ3cbTUH3R4zuNJ19HsehN8bRUpfv",
  "key26": "4kXiVWTjtPkWkaNedcw3KpKWMPXvypoiEHFL3YBVsUuw6BPp9bShePLXrcQfmpiEmjvwcs6UyMe7NbytB87Z5oCu",
  "key27": "3DLF81hsxZz7N38wHJBuDLwZNMWpCrVRNhpd1PH5m2YCZZxbCMmCXKDVNtD9su88QoGtjAFQTwDUp9RTvQesJB25",
  "key28": "5pL2nu5ydXthjBFcCZQjoRtiDV9PGv1RzKcEFH9CxiJnbn9X4gzAFNh8Rrthrxfg2FA9PsjsqSRCadphNmNLXJwA",
  "key29": "5yKDBnDQav9P7Wgky9gtoZ57Piiv1WF6KejdAK5PmzKAvLojmwyRNnuntgZDAFAsXtnZ6NpYhojhSbkfeME5z1C9",
  "key30": "3HxhPfy8NEMckr4dTf6nTefsxD2iCusnB5R9hTWuABsDnjZkgUy1i4JJCwQbr3gYyjBQfzG75XxPDU9mafqnQRq1",
  "key31": "4UMEeNgNPrPQXPQPPmJNM7VmkZwcDk9MWd3p3bn9RijWjw7Z3oCSZqBJ6bJqtzzHq2zWKxLNGpQDyi9kzZPLi42R",
  "key32": "5jKL69hQqUY2yVsyaCFSyZr4WcNK5a9iEjj1nWYH7CWYbvj3EwyMzq5DE7Mwg3dXvePjZjyMBkU1cFtRrbJmXojb",
  "key33": "uYD7VwdPojNW5SmZnUPMLU87X9FsRUFzHSvsy6svj7MmTy8j88NDtpZn22Sj62TzoqWqquoV83HBtZ3DBCjHAzJ",
  "key34": "4dAiUFwTzZkopnUPk6mhX3oGUTkm4cx74EnUyxeiZqX46X19QH21BKiFefX3UjmqMxsuC17jVSmtum43d6oZUjJE"
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
