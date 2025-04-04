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
    "5p6W2TpoAbQrJuGUzxMukTqknxf1YdoHPTqoVNAtFwU2tf45ycEuH4Cki2jZRKH5L9VW9UcLDLkSxG5Bx9dwqkPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tcYNyGCUBiyWPYKERywZcJfyvfce6tisuPnMFEfwKX9D2ukgiY1vDCb8KZryRV9UNrQWdmkEQtDFN7S7B2dAmrk",
  "key1": "2VQpLdZRMtuYZ6GXb4gpY5kNzNAur941kPH9UcnJxaLRin7TaW1bVg58tCfU1wfu8ZsyQFFH7B55KAD3DL77eeC4",
  "key2": "28JdvgFz7udgtMB5vBVzUjHNA5yrC9TBSWFfLYJwDC81GiYUqCANzvSBVwj2iW7hPxYtCJ8kJAxtjkimUbC91rRo",
  "key3": "4Tnjvzn12oDFE7mZsSvaE5dJUi9P1wz2oXbyUj8RPsEwSTm6zKCiU23D6us6TMuCgR2LXrVFVMpwQYdyqk1vxueS",
  "key4": "2u1q3QBGryXF3aanWgDbqhFF6f2heAsDNze98rdjebiU2Fja4a3X24AkKdbMkvK1ENwXxEdZmRt425yG2UZwuemA",
  "key5": "3GJou9vsqCPCevQfRzKDw7ZLBFUwk97MGoyDd5vahMaVVDjY2RA7F9RNnb3YpAbKw4iorJX4R7NzvoXQBoed4dMA",
  "key6": "3zKJarYJk4eKkSKUyauMbZ8sFXt7dqdN5nhKnehveBjSLyb62iCwcMoVU3fZkRnT1vdPkXLMJqfySS8RWREiSi8z",
  "key7": "2MkHDLgKDcr6orTT1zfHsxanvam2B7WXArZJhQtdWPBeSJmPrTNe9daiAoaK2GRTfQePMGcsMceSJYxFPzocRuEt",
  "key8": "46UZNNAe6iC49F5nTWqqkGS4CaGezxW84uXftd5NyiERoNkX6h1DyewxMSqmfT6K5n2fpBBT3rmDj3kmkJ9uHdBu",
  "key9": "2fuJhMZVP8yC4JdkXBWy16phY6Hwv2zhobzc9EReehHiTtVSrz4DnzsSjB7yXn3iu8BE1KDpvXNAt81W3YhFtSZx",
  "key10": "3dF9uLrVnoBtvCzDNwLf8Sfk1dsxZHg4YTtDDwkSPeTKWx6GoAKCPCbEBbbMupwGVEW4rCxmMNTQ3RcZb1M9Zxhv",
  "key11": "4hKmStgAoXex3AR9Rz3uxs1KWB2qPGMhoKASzpYgX2n8BDtQu4KRNArfj6ktT6MdWTvSX3KxstgUXp9knSpHn4Cy",
  "key12": "5AyaQo5ATbdLUz1kdff4fBwHaUbHLcgyuF16EqSVodpncxXRZuEYTtTYSJEdCPuoQA7YmYStoJxtYWYugaVp6ckh",
  "key13": "43KHyxdfybQcnWds77ZGsEEb72BUqxu97q4eDLcaXSwM6G6PWLhE9nyw5bEbzyakTJ6pmNfHTud5XjJ6JfHKVGYr",
  "key14": "4zwtMEmnYRq2uzeZBe1zo9HibJD5mDZrNcsh1s3AB8pY5i6JJjiksihauzuXCg1QRHZ96SA7sDyTqyBTsTPE2jnm",
  "key15": "4gxV7SG7SSEo1vd2BxJUbYLXgzXWBQhBt9x5EZteG8bEfCio7reHGexnFj7Za9zCG8vZgb3L2dwdAE4HdGMKfgcy",
  "key16": "4tx4Dq8w5qFC7uA2BiHyJxZArdm5cRqpSXJoVk7UzA2kTWNgUaEBDRmcbPFY14GduY3vkAwTr5cVJXZdanup7boj",
  "key17": "3tAvuQCJm16FLNkyiDZ9ZT48skX1QCygsVxZpRp9hV9g7Xob76gMXjdctR7TU5BcojZFcNTUvYyLZ9Nqg6QtfRK5",
  "key18": "5eKHBQ721Tah65LPZoVVPszeo8auPijJrEX77QQWDyPJEmLE8cxCRA3UvKnHJ5XZndo48VeNX9E9DZ4QNCzMxH7F",
  "key19": "27AACktaae3AmstTyBqgCJJ6mrkwMUU3Fqk9AFWhrViA1YPU4YR6hyQeSqeGuwwxxa9mhKsi2MduLhqFY9gKNpFN",
  "key20": "2uB96h3QFopTL2R86gxUEJan8mcf3EfnkxqpEy3W3XbxZ2hLPeMautLKCHty2cVbQfra8Bjrt5WUzkwLu9wXeani",
  "key21": "3wWFN3CH7RAuVJZo8iaroQzXfksnFVqzEmqZp1TXA6Qz4B3inLjp8YR9cwrYVgRG1914JPqzUZX8ciNTZeazr3YR",
  "key22": "3QzeArWTmMm4aSrT38mGx33Q6zLDUQXZY2XUPtM5qKVpweG3P6oGeEzf16JCzCYWYvaxGjfYRiYozyLymepo6U3u",
  "key23": "F2vWxSNhec3o5K4WRvYsnRo6cCn79GPqVpwmdrqN7koJzGMkVrZQdc7ZygN5dcmykeJwwuJXimprRUCHGQDxqky",
  "key24": "YrZyreZtMg5u7auBHExw7NXUZikUg9ACJyS9h5oQV7pntciCxmjzvohTDeHxBZPrG7kHKm7jtCYoQn4D75gm9au",
  "key25": "5vDbdWmGS2RA283HwRh8hJJ9G9zV1bvLkzZAmgukhv9yuRJe5MccFLxLy2pMN8ePBNCMnMjMNkcXtt77LAES94SA",
  "key26": "4Rivg9q12Rj2odjQSCBZU3qYBmuHoNL3PigQTiLsdnJ7JCYf81UXSsdzBavEnt4Hhvr3zcuaJYAb12wMSJApY3L6",
  "key27": "q8EeKNPdFrqCfSWjbqisAV7sc6XbbkAN5AWgp8apa74BEJVNBBSRYpX4D67EnhhT33NoUyJsRoS7oBeaLbSVhd4",
  "key28": "4ecUKT4xFBEnSwesFoCVZZQPgcoz4g9yRXk2GKdb16drEJHeTmUVwnvQe3dPFqZT4vsYAuR9vajYGFUqKQXAhAQE",
  "key29": "4nu2KiimdGaUck7qrhYefaX7dx2YNE4w3YQp9cLNY9MmsW2jvdWoWzBgVLewdD97YRCYfkFi3oRBbRATSDyz8gwn",
  "key30": "FKkzv342znuyjk8Bkt2d1BGwpy3ZpgyALcrQy4gsnDr5dJdCM99hoDZ35yRNAPie2ErDzuUMWJrzNTmn5KiStkc",
  "key31": "4HEg1gfrYfMkTrUjZYopojoCTkkpCMSGSQTzvVg56cxxruW9hsLkXbwLopXVGQ6bvdpMn9BLTDjFnxftJWBGeL7Q",
  "key32": "SZibCLYKwVqQ8YmvZBjXzXRWRtopRnnnSYGoGQ3y6yhksiEjE3hvRB6aTENZuZwuiZTrvh5Z9WCpN2SDGnh1Wpg",
  "key33": "4Cauj6nXQy8Yy2JBA8RMEkFnG5hxzMmHZbB8jjKHsrgZX1scjhGY7ja1yimhRemMvPeoay1pPsoUksSEpcVtpF5q",
  "key34": "5thi8zLLMRNmani1UYVbeRMNpynLgMQyECUd4JJhZimWj6TfYVAM9v5KghGAkrCDjAZiNmp9a47D4vi7kWvdJrPQ",
  "key35": "5FWRgNETgp9bMspQEPXq921X2LerpDWX8uaTGrBajJERQWmohAUmjieTsGqmYEQ7qhfM6cZC4iwyMvainLwPgmQA",
  "key36": "4yXffK88QKEYYxJcQdGYW6NZVwtg4YUzQuypPyRVKswgT3yQMBEHebojQaD3uvqbaBHmgPRUDvVgchFTtPS3o2bS"
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
