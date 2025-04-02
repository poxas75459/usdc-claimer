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
    "3YF5w9hfSDbZyaghTuYJwTwMCJ6iwvBF5BizJ85HAwAfJA6MxrrHece1nwrUoXNxoTXoxStk2Y1MGeZEyAVfWHsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VzfMPft68B3u7X5Zd9o7kQQsK1Cs6zBE8DeCBXbMjuzqdpSdTkJXfNXibLFjVDugVDQdbC3c458daKTYyiYkyVz",
  "key1": "4SRLzqPxnYYv5QPEiCeoX5B2321eUFdBHrGHcewAo9MnPHMeRGFxcTmAdQ9RhWtb6ST4p85epKjuvpGQH5oXkMZY",
  "key2": "364jLogPvdJgvrGz9NdKxurkX64RZCFSowzWGUXdfPWdMhP2G3Km2WQikJCRAjZtrUuicJkUyLKYPScWNh9UMubR",
  "key3": "2o5oV6Y5ZQbWoMyBb5njwR2B6anKmY3yUce9rryJWYroFXc67kgoMqmCYPzes2tjhzQSTvk3HFEiYBoKHta1Ai3G",
  "key4": "jnQe3Vynh1B7qFEMMBAszeNpmcpnbKEeMDcdyqFeg2yxhNZjkW2jsyPiFmP6i9whJndRvh1fjMtp4W9LZjqKu5F",
  "key5": "UARuUDsNwNW4L9kgqct2ReLaF8ftX5ajvv4A3dbJeCVPs82to8Prwoozbxx4qD97wDRDaiEoLx8gqhzSzJT3C1M",
  "key6": "2wc5mfa6SxDzSsDY8f9uuqGUzTEFrdaarC4AfQbyvJjZdtb724QswAvTB51Z8cgeJc1J2y3EDXeMtGdhVuu1EmPJ",
  "key7": "2cah4vUBuuSC3XxmRc6SWorWSJfYmgCDiCf5xRj65Z374BadJq5votgkZrWG3pireaULNmmB8PVaTSfaXXRKnBzT",
  "key8": "3v43nVALq1aF5Dp72vruqKsaHb5KN4cAKZWR5B11hELSyUw2c8zq1sttKsP24iNvvhxtxV6G65C3zW2grbNKdgYY",
  "key9": "5VRLYJFFrJSc5rQAvLkzvR9hnEUciZDre8R1nhvWvhX9arUjweW8wigodNLgfTwturZCoRfGEkefL23UfAsbtX1s",
  "key10": "37dR1SMRCttGXfUfq6caDb7aHzgFctpohvJaktKjgjTJu25T7oy4RH9YgyxnpBB139iLfuDH3MD8r2pSw1xaRh12",
  "key11": "5TKYe5V2UiGedpBrmd5oirmMZuojuaVADG2V85Nhg6EAwg4JJB8iRFhXVF3VTjA7FvgLUURWtY8nHe35chquXfjk",
  "key12": "aX19yk9Rjv1uUjgmFqkYvfsA3KkDchgoPTpV1myRWmgbcTJt7kW41QttiZNn8mJxY8fBTfMhs6qKujzR1ymxTUh",
  "key13": "3e8CYk5KcGXhbChzrEaivtcMnPh9pgWU885A7y3Xpu7c1p7EndmjXVV8mnrtHQt83uCphvoriXEgX3SAodsJKVgV",
  "key14": "3QPnMT1W8Pb1D3bChWMzq5txZT3iC4e9UvAUc3y1UKgunWE5Eo4JyPadTLJgNvxMVN6wdYE2u3eJb5vKo2A3XivA",
  "key15": "53j72TpF4L3pz66uDD4akFCR7eJfsBt7ECFaGQsfb9eaicBqBCcdUDpTTpYVCawZLjtpuGG5KCijxBdxFvNPDD7B",
  "key16": "3DmTLpAaPACUbgQpniNJNB7hSm8w6u3LQB7bcCR8D51GgeRamx2s1mqQ8rmNTp9MuNt94VGJeDgDTm6Ai6CLRar5",
  "key17": "5mdehiTNPiiukKdtaioXCJSZCh3hD1d4oHuXSapcDKAAsZN2VEZfka42H9fjo7ametSsiCXtgRfCC2Pd2V1KjhLh",
  "key18": "5TXpBVFgT9LDweHgh9V3VmcdmEFmqDgxveszGvT3TnudzCKmdiniuxhTsErHyrDj8hb218L34et81KDq4TZbDE11",
  "key19": "49VoJZgCTCDSvAQ77uWXvVhuhGWVZ3J4RXAbdVPQKsw1nEtnn7PYCQVyqyw1iAAnvDzDRrQ5MehXL7WoKL7gtiuY",
  "key20": "3BvjW57hZ5z7bx6cX5bMrYX9baWxJ5xbezarGbkKWk3FTSNaYQY4Gvs7syZKvQghzw1ZEU1UxaT7Px64Uni5vBU3",
  "key21": "2STbMtYKmPFEY7kk8RnmMr4m8M4SycTLkkeAr9nX1jFkot7baT3rARyrfiXBZfuPYqpKEXTSQuZm5o9J4PrWQbjT",
  "key22": "5KkZgvLQhHuKZaFUET3FE9MBccbhueCCgAqWqBsYYr64tL5j9R2eTgMtVpLFV6NNeac2nQEWNy48SkNXztBGSSws",
  "key23": "3bxwoZD9SB2vKmhmy6dwLmsbA2UG9yMvNBEVzTELQCRxn4WpUWbBKXwKsA9Vq1ghfYEZLv2iNxnHkLMFG5DErSNd",
  "key24": "3qVSNGJo5zLqjUV1cBbgGhwnQ2isG8qdxC2dtG3Rm5hv3dYqJPEKt449rhacXyKw8kxS7R4eNXE5pG9G7jUtbe7e",
  "key25": "2EFxDt4pcJ7of2iuR1DBxPNSC7tqQ3nEDGV2khNxLuTU9EzjJXtYdG8cxexSbFshKc9tkJwmxLowT2vM4C7VT1ir",
  "key26": "wYzPcNjKYoZG7PRCcxhGScPWacRCQ1mMBh2F86K3aU7PfwhKEVK9hMoPWmPypBwK3pzHp96PwGRC1cVG77aqDTG",
  "key27": "wFRsDEcusBjGbX9kBqWbCjTZ9CaUHHKHQoitX2JKMZX5rfNHNfkbF3CL8Rofqq13mqfWbE4J7vyJyFNNGn2swRJ",
  "key28": "4uT4y4q7WVrTEY7TevB7TSxmBWPf3BZZPmXmAmK4B8eSGPJLgfue57hPZQwJ4HwoJY6he123SNg5SUmCoWP43ZuD",
  "key29": "5tD7Y8qTwdWmWMoYVz6sMBwKeRVoxHvXC18NwkypUgGc5upJY1xVztNbEs18t33BqJ4j2p6H7u1Xho1tCWWmB7a4",
  "key30": "58EqtLPYqJXEQEW9BiJzWjCJfnCdmAZGXwnUTgFXe4pVC6RB3eW5e2wV3PtCck1GTjJBkRNNykSinfnfxVKa3SWX",
  "key31": "4CM7w8JEEigK3AsR3W8JhW5Y3k1AuwJBphA6n9hkbE2be9cWGqz3jzjZKsZRpSifjHXTJgyUJDUKrPP83M17kNnJ",
  "key32": "8svti4uEPvZkhEH15Cf6skXN8HSAfSMw3o8HKPjT8T2Bbjw9ZUCcbb8Qhh7j5ywuhBQsk5vWFK5Dhucf4KHkGgx",
  "key33": "3h2cm1aFQqZ6DWx6M9maW22NxjEWF6PKUASJbdLBy9QjXP4dVuarhVtHzDRuPFbo9NsTPJ515mFemGFiZZmgV8NE",
  "key34": "4fy7zk24nDcVXD5FZ3Ki7MB3MbUcKMM24V1vEk63jyiF8i4ThcZD4Y9pqY9Adc47FkQepF1kjTsnKSNs4qDHY7cP",
  "key35": "3HW5HJLWngNeVudSynRGdcsW16SvjVn61Rua95vRsQvXCFLcKJ2rxzRs58HBSgEeGKfXUcwwo2NytXbqDSyunPXG",
  "key36": "2GA8xLEKPynYwuhh7fFhcFhDocKDcZfSEgs3MKbmMxLpmPiD6nMazFCV5HN682JVgLdezkq2S3uvjvTmupQUij44"
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
