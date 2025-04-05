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
    "536xoKmdtvXZ1baS7QuvMMNxKpdsa53QwtaX6RvjGXt1bXzyWDDxMASJf9xpe7sJCDriXkPkLGPpgEtaiKyCujVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tsWrZAUoBwATrakTfbBSzcAtgTZ61aJHCS7Hh9DU6xQPHEeBAPnyYNEe6JwvyuJbp89Ymgj34eCzLgiQ6CsviEH",
  "key1": "3JGM39WaMvrMmMHCyRNFUnd9c9BriALayzKcpgzHtRWJkNuQXowYa6aAc4Qs7MRzZhg1kjRu8ucAMVPtD7zoEDm1",
  "key2": "5bFZByW5JUgJbYkpFRPH2gv2iW9xdTxLE8Jn9UyvW3oSPbBfvjpEBQjuQUEgj8ffGpnyUkYrKZuGQGqbRwUSWGQi",
  "key3": "249CV5FFvEEAccpuKBSjGxUyrhAV1xmYAUEdg4DAhtbm5bybpw53ALUVbPWTTFCxi9TcbfTbv7B697dumiXvNZWo",
  "key4": "2MNQA7MiSSbn5uuRbbkY79wEo7SZoErSjBYzCWQCGAyahQJavGmVG8aDctSQehD7kG7hatVJmbzQzxD8KXHNQeG6",
  "key5": "jRt3bzdXJNEVd2WBrzMSCxKebPoa3nnq9gdyF9UnJiypHyKxC3TKAqHqccUiuw3f91JoBVYuz7W1aBdFtUesMGW",
  "key6": "4akmzhLEXtua2UjV5ZXhHjRsbCzGyTmv1T84rHJMtEJRk9Y4wUzc91Ak6DwczzawYjUtwJpCQF4VWhymCv7Cf6Ep",
  "key7": "2rjzPVjRnakWnZCjYFYFFxDLMjKkv5gRmDRPYthUwxg7qZEczwrj8AR2raJE6tjxjiP56izEZXkf4HKwKDHxpb6Y",
  "key8": "4Z5ubyYcSsXvwNFavxpEtkqTtDtKWWpfetxoz9esanpvwyqYYgzmxabDXkh8KG2oHeGXZ5MxeYLsKEGCEQFsAFG6",
  "key9": "57VGdCT6S7GCqwuuyC6KhSd5YoYoizB5nZk4G8bWNvfC7cNLskSUdHWdDSiY3veczJDT6Bb9Uc2Wt1N8n2jrBA4j",
  "key10": "2qVbKyeTMLEcsDQznFuHqaHkg2YzdqVK9vqM3ZewWLK7s31rDT7Pyvb8xq4wsqdyt6XPVPgERLCyo4DNMutHhkW8",
  "key11": "3LbphNfxzz3p4HebgN66bUQecScoNtixvMLXvodEK7iDVnQPsTmouLMYLffoB1XC9kJqhTso6uKxtXPFRQHA4jGo",
  "key12": "2gkxDqckae9UvJ5wiuhYVzkmDR4kxnBKZmdkoYBs5E2EbxWUHoUH3V357ux7frYkQp9ZiQUZyU7hPghxBe8H9VVa",
  "key13": "4poUdMRK5KLmNdgkwXR4ikhaPGdUJW6RNiMgN7dgB8CBFWNygwXqnjS2roh7Di8DXBf7uWe2knVSbBzEwpejdrf1",
  "key14": "2mXfeZ7LBf9qYDnxZXKf5gpWjLGsNYcfpu7acumkLrpiBRK1n7nSZiDKTLVhSe3NVAadkk3rNi5CcnRXnu1jPcUD",
  "key15": "2SKQTCZhQod7AqQWFVGV55L2xL9F5LwoxXhveWBGQx8vSDmcwJD9sntiusei8voUjUrL2nbXD1aM4x9K5ZZJG7gU",
  "key16": "VunswYxyR9cqthEQcfpYGEAebgYPFjjuk3nHjmiGpGhDgGdWzUki4wwjpAjkxRGj8qAq38dDbZ12pVFb6LSgsnP",
  "key17": "rZQDwmY1rcYhD1vTVC98oqLjsS5rnV6uJSJUkHHHEn6wAvyLNTaGT7H48MZft2EUYd8Z15KD4TfgkD9g2rm5zb4",
  "key18": "4VxBVWyeAguvyLNHUbRPFraEsKQBdGgKbbt1c1WGE7BAJ7oJ8UK8Yyj5XDSPBuWTKbuNG6qRZgKwTyufgiVgJjpq",
  "key19": "4WxRXsW6maA2gaaSf29ws4H9n2DxF8t2rWyBZTsE9JASn2jqXZmERDti8S7kCFT11tPVhhZoS72EYGo91qXYzzFq",
  "key20": "2Z8c1Gn9yQAiGrXEg1Pf553ZYhXkyy4yZFiNGELwoYDcEFU5QTRv6CMAv4GA81WzTueSTeYnwuQju3VU1e8JVuLv",
  "key21": "2iaNAAaWM34N2g3zBe96P4ziPAPYtjcjsYEyEVcdHJpXhUZvRxDHkK7FoWyr54eVgWdMQJKFJjdyPWEabvKht4Wq",
  "key22": "2n1yn3TnnBBrMogTkadtRfFL2MmGqXuZPjdgvYNroiZQxi3gSU6nNzDTfTPrbxeWA7S35QUEULHWf6WBnQSerXU1",
  "key23": "3bLQT2JPrYk4Wd1Kx7pD1jTQ5gK6ocTJ511MEevb4mcNYB7GYFndbnWSzAc8fJG5rZYVPgxFzrPdKaNZp6jMUJDg",
  "key24": "2Br8oPbQVsxtTcvWSd5fVQCQTAbE5FQQJAdzd8z5ZTaMjckgUeSBot9yfmssVZ7Qzkm4C8a7DnS6znuAAmPrJBax",
  "key25": "PHW3qNSoq9QnCThihfEyjPRck1YRkVtpj3cRdUWrcWnWbsJLbc3nMqyZwFp66c8cmMZGVYyQWFhJgXvqv3S2qCC",
  "key26": "5W1oEjV54di6Xkq9TGbHSm6DRkexhDAz1diftD7QccgF3idB2vkNVgjZv7Pkb5Fqjnx95fGCiSciSuto2z9oVUMs",
  "key27": "4Bb2fgPa7LCrVCpirmr4uCw4tznLViwRz9nSf815ucJ8K9deG1ytgcBYRWgbPhH27Ctd6gBWinqDR1wiqEPiHZL6",
  "key28": "2yHRN5CxNrhGs8gwKoRWYjCxQrM1xV6SqE5ryzJhvdHYrPuvJrKTn4GgweUYVdwewZtS2AERCSNe3KHPNZHg4Rgv",
  "key29": "47xvEpgFmj6XG4Q6EsZWsyB3Zj7x1mJU8cRkEFQiJ16SN5uyUZGDermDXxgEBvBV2QuNWwyXff5AYgvBodT8J3Xy",
  "key30": "4jVq9PdHxKgcohnLsze5XEg75Bgr9C5aQ168iXeDtGw2iAeVPLiiEW8rt8j7tq4Jh6qvshG3v7Us3KgLqYu12XZZ",
  "key31": "N6VXNn9ReEop7vmXARun1ML3u8qRufCw4Fap3bDoqxsf6RGcfqURU4o5uhCsGawNwFNZwra4kwrCF7DBnLFFrFg",
  "key32": "3sLhUQfYQzoGWqjhUTF3zJxX2Xost2TAqST3LBTM34BtTPLK2e3tVKDw55YDgup4YaBnAJNtrWJ79UtRZqRP9SJc"
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
