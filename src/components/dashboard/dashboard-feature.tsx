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
    "5UUd3T8YtPDDNf6nKvufdR2TLBVTDgZd61L6TzpT3FJoVoG7VkZrigMRPxpMt7SFHnRRYCRTCZELjg3t8gHmhfLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JhRYykPwp3Rn5csXvLXVgHj9XcpTL3AQxYSqpCc6Qom3xTjuq3pWDSd5DpVbSfbDJhewCASTL65bsAhpkxWBpp",
  "key1": "4Sh2WoswyLn2cBXreJE21ndNdR6h6Kp53nYNvkXoB2UZcEBcrJFv6AvVYfqXDVtzviZ2Ws1ZQhzLaQof5Cktodho",
  "key2": "3HDCUqymkrGhBNgaj4TZa3cyavmJ9NJcK9DwuJ1LigrFb6dPZmo6atyYesecLj7qSxXDXjud37p63rZcJEW5tN4E",
  "key3": "4669kNDr28fAs6UDxaN2wTJP6H2kjxbAHZF5eTJPNvA7PkMacgd9x86bnjogwKwgdgph6F1Z77czG1dxikYZSUL",
  "key4": "4zTk9e26mnJpvvXnpLwR29J5TjUbZ4q8N9wKhjppgHfHQtUv5hkTd9uRNcEfDKEu2sEr5hBBBQCCcoev4Pk6773g",
  "key5": "2TkeqKPgay4q5Uu9MB3Yfb8QMg9Tqa7HqGkpXniedxDwqx1GJanuZeUsKvA9urvJPGFhnSqJeoq1KNKDN1snz7ha",
  "key6": "2En8oEV667H7D9pxw7fKD7hjPAaVuVfYoSn1rTrXrcJQRE1yZ79rRXzh6tnxPUGuu4FASBmCiUuTczZsXacRMDXa",
  "key7": "51VnAw9X3ymT61NFJyJEmBk2KR1TZDUPSTka1UQV1Pwkt6kzbX1XBYfe4A2fqAmgv6ixHRwbjGGdtDn51x6zc73L",
  "key8": "58mVq2ndS3kiMvHvvzx4GnFYNoTKuCDzL6P4LRwAQk5TPg2WJeGWJXDPxxZqvLJsEn91dzYANRjmDPDYzGVuzWUC",
  "key9": "3FSBWrXmDu23Xa1a4hEp7dGtUYnbTeMviU1CHL85oCbi88z3ikgBwzPaogScFeSwhQZZuFTWTfpNVdtr3XJBNa8Z",
  "key10": "46J6AKWp3YyLgdPiF3euLrg25sYD2gpq7rUsRE5S72NE91P9bszyhY5ZLHvfAmd6EyrrroSJFrD7ju64jvKiqdmi",
  "key11": "63fw5eAhr92MAhTnDxPKeE6EfSkrCHB3RY4sYri7XDwTKBsGtNWyGMmt5ACeGupFkCP2TBM1ghmi9MVeQvyRM9KA",
  "key12": "2ioYbFHtUNSs2jha1aK7gqVNe22vkEE2SxWNaHugKQeLjwKuxDtbAMo2ZC189RXvSEcwRKmdUf8UHQsuk1Wtz7GX",
  "key13": "2VNdWB7V3TLtdChBroVEBTvXDkrecjzGZeG7KMiSnNjS7LgFtmdbpU4zPmD4bhBj8fKMhszTZ3J7z5rhFjmE9kmc",
  "key14": "3NzZMY54v5w6BZ1TZn5DwKjW4X1ALBhPDhxv2Bz7gTHBxcSJsau3gsYhN1HHmjYAqbhNtNTZSW7mqaJ5s6TYpmtc",
  "key15": "CoGMDWQrVGrprr4EUzCw31ikci3De4ejssGvEs3qESzDASB1zmLVCQQgyMfiFddmxRGCvxUJCANNWkYXhC1YC9k",
  "key16": "2rDxsWUMVwAKrkNin7xwvebruNn42AXGBuiqSdevX1ojaoJaWs9YuECmXVCfQ6dXtGLpqWepMXtFCUjXjh5RyVLg",
  "key17": "3z8dS1sfHUQ99TkKAd4L5Snv4sKwMCvnZYZxJ7FeyupWyo9ZJqKzSThfJtTSCNXMCZfSxMTpA4DoAP7YSj85cZJy",
  "key18": "4eGwj7BJjtaZbeAntQm15CBwAggpQVavTc3uGToZLpriGcaYjUhwxD7E9PgrXVaa3b4UN5HwuJfcEZGasaXj32yM",
  "key19": "5VPZ8GET5VJbTCRHtkFBYzsUcFjc5Zt5BAL6RAqwuUzGX2T62a4hiMerPkjFCWD1aMF76cWGQq1v39tkkWxNygVv",
  "key20": "5FQbRVKWbTT2RUvgga6NVjhQzvzTQjdbaHHVc7p5sGqNFj81LvxLpVif2ahhKpAEe6hVRiTtBouyPx64khPdz5uW",
  "key21": "5b3J796xzJ7R6sztUeRymAKWYcPFQqsYMTgn51bGvAwqixLhMzVWGNR7DAJ4eWfEAtBk2r8cTJBwZL8pBiZ3fuKg",
  "key22": "4qVGPGxtQAturwha2LQipicB6WFTp1yYUvRWqYT5qqjJQQNhRsWC1J1tJX3rhVwcCebgkvEq3gfFSf2PcoUHtKeN",
  "key23": "2qjT8emE3fCBTAUSjZt3ZRaEEe3ocCVSp3G3L5tFDh3PEGAX7ba5AgJ2ZxjavjLykkiigb3dtqxyKRYVUMSTisVZ",
  "key24": "MFfDz4UwL1ppFQt9kMBoY4kLRKt13qhipe8DnrZNw1Zq38dC54SfCgWLoMBXr9qvKXrZ3oahJ3MFR3VSZ3nKBY6",
  "key25": "53JJczkpUkCN1ANn8MKxBo26mY41AXwuSE38StHMdwD18YVgQspX7RUEKbhqunAKjCF9WhCcYwEgKjXydp3ds5zc",
  "key26": "48Cin9aaLZjFqNv5mbhe1DP8yZWauehzgjys5dHByFRzm6sPquNN5BzXANiRq4ocVtCWR3QqiTQEVbLWDtM565As",
  "key27": "4559bvJYW8a4CikL461UYpHnKqA9b9qjexFbGHKqDhBHXQP5ANri5aWGBhZdx1AtSCMRE81FWNjx9MyAapXxZJnq",
  "key28": "2hPs16FKwSaYxvfHCx93bPXnkRF39okvFmah9xw3DTRgVbQc5MyDMqmk5YKjiSHU1mQgRqVdWA1ZgLzbckAR8FPN"
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
