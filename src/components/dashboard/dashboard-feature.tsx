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
    "474KhrqHe2aKkTWzAR9ciESC8QyusHYgfECi6hX7qFvxi9kobH5GyWemz2R5JrfgkvasXm2cKufCK7SBiBkCq2mi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N5NDxDYJgbgYaqn22j7uTnd1TD3XQMZVcpg5SWM9WguBCEe3RTyiF33DqUSJzcUJ8XRQeWHSwRGVrxeX3Tco8mw",
  "key1": "2DW8MFzdm3YBYHHbtyweqG4bg8CV9fPT3m32RYN8g8LX5D9TrtZaX6noMJbpgHof8mQhNmcb1BCrSUQf1FYsHaL1",
  "key2": "WjtYCK1JEpfSzJoKEcaEHwLw8pRJjMqnod5U1YbrzW8uDYZfBBrUy1sTR8BBjNJ8iQvdtkecmBKFgh6Acym9EsM",
  "key3": "5JfZL8zycRH8Snsb4RRZGLwWEvqWuXJoohWQeKLz36CB92VKYE2ZfRovtiWszRPrnNdm1SebHhde9Kj5WXXYQxwS",
  "key4": "2izBbDrVtKr7EGGm7aV3bBbJK4xQWyUvqPgww4Q6ExLD4QjGmgGLtmqtDJbZsoHJxwpbsbrxDNXe5e7UfDzMP3Wg",
  "key5": "C87x4Kn2VZ5ekasA5ZXBiijAe6tvbZvr7FgektzxVnJBKEmVS6JhWFKBcK1h9THV4BVNB1n6HdMFHy41hKFo3aw",
  "key6": "oggVgzCho9PNA2A6iHe8ZKDvgVCpDWZwUB7MGtzv2FZkNG7YTAvU8oGsACdcvtSnLJTN8JdJs1PeE4UW8erZY1z",
  "key7": "2XbT8D4a63qLZCwdaT1pHzWbE23z1mmzHtqaY3QYKFD3o9ATtBCUXpCJ1E6b1ibJU3N3jRcJxEVQv5bKQbLY7abA",
  "key8": "9x2GWnFASo9nZbsQu3gE8GtickwXZjVDLHghUuSDMtMaPg7JD9JWbUF2nMtuMBDKdjiTMFd2PfcSz5JBbfXXcKs",
  "key9": "2SL9RqqNH5d74ao3j9EeBxh1zNjZzgSCdaHWbgfNfiodarZuEK7LsvU9pGuukPeRrJqisoKruEsAiz6arN3Hr6vs",
  "key10": "4exew9FGNFFmzkBvFYtzyVUCkL4XEPKFbP71uFvQ5cSfu2MRj7KtRb2HepAx9KUZaByCW8aA8e1mkGRZ2gWS2jgm",
  "key11": "7C9eaMwVeZWHkBCmyVm8pYfjvU3qrkkJL953B5Z8EehMc12hpbQ84m8N7G9nzfM9DiFKvFXHPrH6hPU6QrFWXY3",
  "key12": "L7jWH6KnmTcXY8YAXRUNxvxpowFzYTxRNKrc2utoAMarRb2NpdSGBhP4psCZZC7AvxHxujBcQo2mABA3WQLDNkP",
  "key13": "4bPFJhCigcKZuCvM8QpskU1SjumWBtyLu2jB1ekDiPwgdz8bxTYgqRQnVRDNzLb3kWTgZcwvYup8Dv8hUo6Rzkxv",
  "key14": "44f2NyLQzNUZq3iAc8ts3CQPnLDR8JtvxGooeYgvNoYJ9MbmqPzNwikqxsYbutLeBPKdeD6vjJcjXBiHTzFQvEFu",
  "key15": "27781gmG7spfCHQsQhMiYzNLynLwQsv8pD5qFowTfVrw56SKSRVJgPeYmqUL5g175uwEDwWP8yUvwcL5sswagnRn",
  "key16": "4a9k8iekgvWxjqKGNfsS39L6nHQLDx6wQni463iNpnFemsfCcwjyQB6tXM7dG8ZFuG6owh3piNrBU6HvVFwWsiPj",
  "key17": "5badx6UMUCmKemnTsKaAqegikTD31pZXBwtBmWonBAhgMKmBnZ9JYmxvphDc6sWxecyvNEPiUU7WNBTcr3vAXTtk",
  "key18": "2bR2GJxgZoHP19ceWpdNWzpsguHh2wqdXb1nAgStfi2V1bQToivask6M9eqfC1TwUTL5d8436sUGgrxbY3838LCd",
  "key19": "4wKXUPghtPYXaNippPZxV6QwPjNDT6whvsEmJqBPRpMU4oK5FvfBxRd6iypnJGvL6Miguwh5ek2EbWTZ7RXbGq4V",
  "key20": "2VsSPzdKkn129z8BHX4EhbyJN2u52Bifdv4t6dDVpBg7ySCH53zfxjzjUNRbeYHgwdZMTRDXhfiiv9AY5CUwiMaJ",
  "key21": "2LrA5yRpvPC19kL83Qoh4JThkR2GYWCXAHQQLmqd4BvKxY7FRM1UUXyEseCweegf5WVQALSuAR7Ndcn6FbA2tFx2",
  "key22": "5f1uYSrgVma1FKSgwY89hz4rhAoLamEvWJRMU64U9jdYP4TWpdzERqCTRTeihGy8wXLZcoZiGLQZapPNwa9hsrNV",
  "key23": "UzbF875dG2tS5BBXhzLpX7NNk4tEgQMcGGHrive9REkGXGcKFpCEsZtqiBfXxpKTLKD6hnd9dA5f1DT8hdu2TL7",
  "key24": "68epiRVu7cH6TkmeVnzWPCuBr98cuWE8HnKLAjeH9SCDVCKy3NTM5SMKXtRGn5aEbWDYeEpwEHWVV9rUptxiyd9",
  "key25": "3QAqHB6kZcNJTwCpLXZ3n1usp3t7w5BuevyPjSZBweRz1esK8XJe9ZsyWVzCYtUNYhy3cmDcxG6LBiD2mexV8s3z",
  "key26": "2UxuVJeA1SttHEfzWK69vyUNSoyWKtbdG9FpPSkebvRvXfjJrUzo8d3W85fQkfqUGG5ibAsZmoMRfTSYtYvEuEGd",
  "key27": "3TA68PcmGRMMev1HQfR4kw753n4Luu5q997gEzyvHxwJqzFUGnfMzpdaTZRXtGk6Jqi4UX2ojghqtXFuSZxrPT9N",
  "key28": "4kyPwz8Jg5QT1ZHuEVQsSQQayusnXEhGQx9GAFJUArgYx4ZCvdpsDoW4R5Wk8yxSXcLvBAnpdNcSCWf6vR3vVzSf",
  "key29": "5AUDwFECbibKikJ3tWSaMjAKGHWiSU3q1gF1mPB5M8kmasbQ9rzaPJkR95autvz665eeZCGAhh6JPFq5vnr3HZKS",
  "key30": "31nXVXX6i6QyeS7Y23Tt7HSQZztWZ2RZGT6FFeGriEPZxcWw9dX1XU7QGAnCNHGNFKxp2aHK1soBckQbokCYHJ6f",
  "key31": "4tv9Gg4Hiby7qizkYRLXoNG1NKYyySbaHC1hqT5HxweSnWwJhXGyF4iJYq4ya8CpDeVxH7RpubgRWtfwnCdtVFCT",
  "key32": "3yHpsjhTGEgStH3KQVcwCVYv2PCFfkZCpdTpspQmHrERc2z5iDPNMPRJ5yxuj7TfufMgvyeJ5EE1955xvqdbiWF2",
  "key33": "3xgrS49yyNaXywDFhH7eoVtv3VtN9M8uoNDBUDqBGTpRfzm9ZJsHEpM7LRT2XNEDLF7jf3heeoX15VaBL8VKQ5vv",
  "key34": "c2fzTiuLyMrp8v6AsZtvsNe5yhdwnq6ghDfnyCDBSJ8QxBfaUx1ACDgaDQH39urs9dVGAnUzWsSW6yefk5s2fsH",
  "key35": "3Xh62F4isY1AkRNqt97a7ezY6VqrHNtmqzduB98vUmUGk2poAo9W4QdtPxrayZS3F24hDKWQuTfKbDfBfRQyhLsi",
  "key36": "3YbSmbEeRMMtyKzzPQWjhzZ3AJZZ8JJSYyy7oGRB74LMeokhNPad2H8VzqtobZ7bNtRNtbBAGeFovrQMwqLwXq7A",
  "key37": "4muPaoPSzBZo98ApxhufZXN8zgAXFj2riJYfYRWpUa2HEw6V6fpqBjMYCREjeesw3ExiG25Jo9hvDztfvsDqoBqE"
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
