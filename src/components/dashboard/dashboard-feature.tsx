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
    "2YdgYWHATH3xfZMoyjEuaFqauDULfMZQidDdJntnG59t9UxF8sw1NJ6Bfb4NFdY7RMt8KTrkDupxDNUdDxvG7Yh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zbfg1jFSnW82LzVySjuh3CyoHUEZ9b445tVqfk2q9MikyJiDDU5R8abQZH8AGqBHzBj37q4aoY1q3HBJmTUFe2P",
  "key1": "2eR1y8fEo5S6Bk6frpTxRmivQ3DzaCmDfunynBnenHoaQQL2PDxx3zWUpkCfumzneGRkfKgkQAZLUw8teNhLmpY8",
  "key2": "2KLmA6P1yd7h5JFk8yf8jM8kJMWZE3wq8Vc87hZj5pSR89kxsLXkcryC1LwutgAizUkMFdLTHkUG6RyKUSuWnJW5",
  "key3": "5aWfh5Ps7xVCamtZH1JpbLDAx3kcJujHsJkafVykCpbSVkNepKDRQebYxZpRyiUkCYAwPkhh5SJc89MfWTmDP8H",
  "key4": "4ufE95DHFix55TMLoqZs64DtFxTLJ1GDedgUucyxMd3KxdGGEKwRf5hoxV1vmXBsbVoDvLDwY9Nno2fPzYLUZ7S",
  "key5": "3d9fd4Mf3j7Ff5pdE4k9Z3t8ub42WHnDbDX5trFwdyNrUaTUuJJXWz1Fs5YwKdigg8VzwR8951vrzVxif5MqCRXQ",
  "key6": "3a6DCdPF8xhoxGKrwrNYYRiV2TXkq9hQX6oLpsEJ3Tff64w2pbSQzk5tQguYRovLJwfiQakt7dwxGn1ukgM8ZZjM",
  "key7": "3wXni9pzQbjJXZ3Bu1Qd4H8WN8CYWQL1QpAi5mEmcjsTKTAhUAs2v8VpHQtAbXThT214pHR1yABZ8hjNPiohfboi",
  "key8": "4sDztDaCTVvr8vaLonEnQETxF9qf1jjWLLcfCLe9bCjTAEXmHeKS95i7w5Aj2ZFDCPwJcTyzYegZnF46GYdBMa3S",
  "key9": "2qxiwum6F2hYBttbotTuDmz71z62rBc5grezbAgXaSkysGHos7AB9Y2KtToWrMN7Kn8g8JaKv5QsbSQXqSPdFiTV",
  "key10": "4PxN3Y7ataidkPfKs1w3zaRjVzv5WeFQrXgQXpxiy2C2AAcrC7tGWjjhGUSNeQiuuRPSSd5GD2gVr3haySY9bFEm",
  "key11": "2icbaNe4AjET2yQPcgZbtXJTFjzHyGFE22HJeKGpBrpnpKGGPc6GUn2zxtJTGKDd4RSpxS47eQ5AyGUZ7HW5UeXK",
  "key12": "NzW88gBhrdKb2vqxsWL6oRadaZDg4fEezTN2GD93XFeypaQdpz2KxT9N5mKZMKr1i5fB4LLeNgj1mT6f7yLLY6Z",
  "key13": "5QKnd52QwCkkkxh2oJ6hPU6EvsEKPLTPaugv28M3ArL274s4daHGFVeUEbNeLjJXDRwc8Pc9wpLKprw7wmBeyQPr",
  "key14": "tJgPjv5yy2G1NawYvCuvYhDo7sC8DoyLfQjvYdMCDaF8NqdrKdPYuXHr7vwqwSZHHSHhQyYDhkZqQmoxyQdNoxM",
  "key15": "3qRzvaBFsxCeWzpgijXJeWXC4x2qVK7gKxTPZ9b7N1FkfC1BCSFmA9qSKhDrQ3bpETSwrHxdTM1To6QxcWYk3BMi",
  "key16": "4aofKQ8GEqAjikp8XJ1xWYUS5tkezCLMTCXErr9XvtFDyfy6a9JMRD7H4w9RQvBkdvVypjkjKYfDwYbAqPcYjxMr",
  "key17": "5qhw5BEoAx9TTc9rxbGviVWFE3zmyAQxXMnyMwccQ2SW9vbv6mNf7Nqrg7Wu4zmsdpaUpFnpNAUrsYyYPmqudFhy",
  "key18": "387WAyxS8xYPpWJe36hfjT6gNhJA2oMYNKaErYvLCMYc5k51wZKv2jVDUdSHrzf5CAKju7iFegqvwUkUjAo8Nnd9",
  "key19": "29e5EqmXYBTqmuF4ZJ7qM8ND75vvGkj3TqgNfEhWRAmrXs4gwhjY7UdxVpTg6GXWukJUmCdfsyf4ikhLXST9jzWy",
  "key20": "3Lnz3gf7JPGmXEw1A7SFymyG7kcGYiXb1sMch8An1PckvRu82TGsKNXLojkHLrMcyfC1xqXLvvsnyRpXkVJ6J9DH",
  "key21": "4omhXGs5fMpjqvq28caQkzgsti2SG86oXPr5TqCRZrhYEKKacqNJf44pzqFbECBMucD34NZxrCVvctvqjUsSg4ei",
  "key22": "dgj1stJfEo7cP9xVRjHfCpGnvLPzEKnFQLBSKxNzK74r2JYSfCd3xa54Saz8fwd2Vgk4122xuUZyPR6NVXKMRHx",
  "key23": "3FZaGwaeD5awhVxVz5q3L28K8x8CLjEhU2GQ6e1sirQKNNqSAaNLpfPK5m5Vcbz7dFkWWWhLDqNSRwM9DiZHaucJ",
  "key24": "3F59hy3WtF1FjUcpXJx9VgvckTh5nFP3W72VoAMcKjdnkCrkU3TwtUiHNoaXTtdEyyHNrTsQJ5dvUd8wgbGx7pUb",
  "key25": "9QFnpPGwzr3p54aZGZjxcvDEZ9M5jzEiDSWJb7vE6g3TXuPpUVZnUExupGDq5Paytbjsw5d2Psbx9ZZLmvSFDwB",
  "key26": "kkGR2sofuQdtQvuLkLAy2g6zcUvEzDz1rKrnXWUZaMFaM3Jb5KhcyRQc7oddtBUSiqUWand1ipuzgA5HqiJQBtZ",
  "key27": "gW3rLn76BbWKE3BqPpctzXpyzDHDMAMrsVL6UyebKUCxAmjuxKnAAGcuKHXSdRMFV5VbheEsaUYsEz76ha8hnpr",
  "key28": "eFAxtNUu7RsRUyKjmuTMzZqUkFj9bDWS1uYmEhAjZQnEmqB1keDtuo42YRpTXHnvfim2PxyxGc91hjhgNzof9BJ",
  "key29": "j4qYU468YzYJ8ezXhHUP83CyJzDqbh6shmzLovDGJxUU4USN3zAxEt11gJTKsbY8n8VBiQBKvwmwq45NhKZ1PVd",
  "key30": "64EriM4dcg9oD4SP17ujQVHFXaYgrmU8uYUiE7o1y4UJVYuwazdur3ohA4p6xzYULpeLewXmkFnNxRjNCD33hPc6",
  "key31": "4gPsis83icjEDk3E9hSUdNoJnyVZXfHcan5x7rD5o2JTpkLWboYH4jaiKX5TUjheMRerizAqzXGnDpcPZ6x9j11V",
  "key32": "3K6BG45rF4FuAGio3c6fdoHoBAjgYNUfTAV5n2AhECSVXvFePU7gRmGqPtWFQykkGNbpM2mNVraHGcRiextxGJCY",
  "key33": "3NX9ZMTwDghx21wzpJA2h49nDp43Knsz8jxBNCtk3nHPfJMdNzdrd4y9aPac7Gvz5QQH5UsRxwbgpUcZHfxtJpxH",
  "key34": "4ZQ6ZPi8axoCypwoaNc3Dx3c8RZ8WpwgFkiZwxtyfy9d5mhAb4A6c8oUvfVjpRwWntiRF4gRMXQpe8vZJwdMd4bB",
  "key35": "cEi3WaDwaieRYrFDVgfPnz6yRNBeQu8pNLzRiQaUsR4BapUZdZHBKw8v7RwhjKie7UaRPbpSD1FEuc8NCxPigNm",
  "key36": "3V1RfjbGLepFNnPd18vwnyYY7Xh6TcnF9hcwLymseBJfTzbJBbQ5QDWA5ZwjGqAXLm2eekn9sMCVVtFXhsxHo4jj",
  "key37": "4FbZ8gJvGWyifmSP2t8Gr7PaHFbqGmoTE5S8LWXRNrnpziwBokxUKLhTRDo5uZDDUYJ5cqypYjk4ZG7hthSdbp2q",
  "key38": "2scguiuTPACZ1McF8wgsWFMsxQRMJvkiJMGsJ4UWtemhK6BVrtehTFRBnPULU47VixPsoTAfN7kg5xQkJ1PSyTRQ",
  "key39": "4iLbj2jtKAMDwCWwBwmQHYpHYZeKCH5bBo9SGn9GNEcXSWtsigjrTQwSbjuCsxLeUnnXGLJymHqvmTgmHYX3ZAUc",
  "key40": "5KGmrd8j2LwPw21umW5y8KWT24HUv62Vk7TK571ktsdeVgzDeSKshZhCrwDvYxycTVL5VhgXpUm2VYfDBmfdB2gR",
  "key41": "31zKUs8QjuARHxYqFUe27p6yF9Q66KZ6HZxjrJbhVSNu7JkMuwWyEoF8mQ3XMidxUwYMJEPKhrYvoQ7i5FNsYLiH",
  "key42": "38rUZwL2bPSk578XQ4HA6aJK4vGiasHzYh34A5vTetdMvByTRbitnQyqMcVKpBc3URZ1dKjWpdaLpFgM8LktKVha",
  "key43": "3GDUgTDtG5DvCJpFoGEtUBampD4vx6g7eyBrSqU1A7EMJYiRxg2v5aJuqTDQr4DYrxWYzvnnY8Mi2L2tKbFJmvCR",
  "key44": "3sdjAF2Y22ArKwvLUuf8zWFyPE2iAbRUoFyQuYUmRhSQXDPQjXgjhBi9W7zDS1x9g9MVaMFDQ2TCeyaNTJueB3St",
  "key45": "3hwsWGGNqks2Xy55xPYE52AxRPscAsn5tefhe3Eva3gKBN28rmusp49Antvc4DzBEt8VoBNzwP7V8AGiuPPdgErG",
  "key46": "2CvH3n9NAaHFkNfxijnpUGCQXXg8a4eu4zGcbY4PGZxW8k73UCkGHdY9162BT7ebE8QKNhjiXFoPBYwgMwV5J5L",
  "key47": "5iHHE6scw8d5APyztBfZeJU6B5bEEYENofDrCaLntC4QAMyFesZ6yXwKTWahaXitt1EDb21giitua3MDi6Mnkfwf",
  "key48": "Y9HdSzH5LM7pRmHNRRunqsjEWN1QMnwiW5cRxKNZRat7g4Nn32VpmKmnXBo3x8uW3DqzRMJJSrBpZjLUmHhVZSt"
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
