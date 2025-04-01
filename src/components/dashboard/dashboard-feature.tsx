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
    "4vyDEsU75CZNsbXtpHceEhBnX521Pwq2hqZkCaqyn1Q8YWesPbJmzaCKEzyj31GXBLWS3AXQwNv1rdYRTws1M4Ym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gEuVsJBJUWJxqg6wscwBX2n2MZndj86RZUWGhRC3MBvjfd9RYJddXZFSBg9faVVyoNsVH6WsEbCnejRVP7BRbV1",
  "key1": "2UrhY5ShLoZ5rKQ8iN3mz7m12S2cyU36zXivkx4QykgBbMUvgWPJZj1ENmCmw7d85bMMnwNtRwevGfZJfob5ncwR",
  "key2": "5XLRWYj8fgifvmVbRAt2imSVCF2CH4Wn1LdzYJfXRW82wzzHomQ9EAYNtEucUPNqT1EFvxLePNk74nyd1WZ6NEnz",
  "key3": "524ZEVbhkkfVJLCTSaCRfYydUCUmkSqBmWRM9jixSbQtDiu65qZB1cSzdPGZq6rGd1SxfMSSZQLTN28Cwn7hXX4k",
  "key4": "25YRgDYuZ4bgR5T9eYjpWwZaKEfZFNf6UcYnxQQdUUH6LRhQrMva2HdFbWqcK88gHaBYtbECY9PjPiNae34QMTee",
  "key5": "T7oQWNdTcy64gPUHEGFuF4PSZX9Gpfd2WRcQCjvxFgtmVbvGee7rWwJfdeRp82h2ZQeaNob5sFerNZg2U3YBRtt",
  "key6": "TcWnX2yEitZBeBA4fMddMtVfMRS5Mb4ZnYkixMJaCjxnsrSHQoPx4i6NgyPVZV1fnUJw85U4ALWWsMd1LmvudFX",
  "key7": "5aVNc17hNpiewiEWxFgJLr9wKtqryaFfjegruDogEab89twr94NDGn4iCBEpAioM89LeLddRYEf47keKuDhWLuaP",
  "key8": "4nVaJBTsg27qKHtUysDp9xjrDDtkD65AWVKZys3WuGyUS2zTvBjHRpuxa1TaRmdC6UgqwyxbAfjx7gPZKozHERdU",
  "key9": "BDymBcpXoDkdNBQGiXDCdc3tJi5aFrXd9r8EJZy8M11JWPfxu8JFqzpAHYxPLhVD73VR2vi6cyC2kaiioppHNuW",
  "key10": "5WMfzjp2WApF98mETMKhMEZGq7oVL76Mpcrpivnd3uqLc4N4Dopxbzxo8g7t1oBGsUDLL147pL3yRuvkaducFXXD",
  "key11": "4YLgmZA8Z5tiRrbcG6ibv7NHa2zfNkoTgiBa7oyQyAREahEBkCdEyYcQ1SjGMZurkpDbKsvjUam9EZk7UVRY58jU",
  "key12": "3wUVPnEhZb2imeJjfGH2C2KK8BhXZNkKuE8d3YZZcvdjGxPPfaapkqoAXA6x58y54vUwLruD7nNJobBGWXJkmrZE",
  "key13": "2zr3cfZLEerZZyNg7w5gNkCnqZkHhnsuNCq53JVv7Ttsty2UCwBEpZV9yEHj7JMgoLRtoGszC9iATAAtjupF1jKm",
  "key14": "4YSgmYPM3YB5zuLnYZZmKDoJzHB23VXDhNArJtWJLukCpufL6QqmXiKXUqsoWRNiDpbwGkEBJER5y2tarNVDASMQ",
  "key15": "2DLL9JVQGR93ea2RqQSdUtiYgr4KiyM2BwBtEq3fyDiQqLSvHwxKMXDBjoGGynfrueVjXxUFq2ZyeMR4RQZPk1FV",
  "key16": "34UbbXisDkwupqNGtGBp3ABjjfnqe6amA5Z9jxuudHDYrtwDZ5Xq3ZU34VrzxiffS8G9gKcstfsUozhs84yWLtdT",
  "key17": "8TfRNXeUGZeQT33GRqvSgCwE3K8544ebT6pbrZNB5SxidYLLvM3KQ4Cp164NM51NmamsLNTLYB9WsBJGhrJohwE",
  "key18": "5ZRV4bWzZJvGMjfiyUMvkM7bL7poa3sTEVz8VyNoQUA6ZBYApHf2t22QNeYGAHMhTBgd37EYXpqZoHU1fnsARhGK",
  "key19": "wv212gtKKYDhM9KPF6XvoGn8ZR4rUTM1e3GwmviVvBFbJNHwzPbQMspM6Y4KFTYR9yRYYcGzs5JWQMPNxbudUup",
  "key20": "5WCvZvjh8jZrqMfhGFbP66W92FC6dA61No1Hq3cUnPBLoEXX92zA6NsnKeZXrkaJKTim8FCJ4er9eLraDXpzMYq9",
  "key21": "YNC2YVjYipffoTUkga637vGJKm9RmWL9zerwPBHK8GK2zTgttQu1gbAB5MmvkcF2FeQdv2WQDPRvRU4LP37MQ5t",
  "key22": "j4hCeTEj9wqeKJtb8z6d6rHdHj6uz1zZHfUqQPEAUW6RahLD2qBgerze1dawwTEXFkfzsWtD4T9jniobnfYjPph",
  "key23": "25hzGatjBgPpC1bwEPx75stVxqEQRoVU8CUR8ehwok9YZSKuMBnh99TwYqqRZaGRQyXeeCs3TiFQP5XrSCmqAjdB",
  "key24": "4wfuQAW26g8Hkq9HRBbasqVnjNcmWSVV6HYsd6BQCKMYp4To8yDsy7VKMNMdqBVooatx7FGLme7S8JgTmDV667wG",
  "key25": "2usWGdwZjfXDe7ZPknyLk6AWEkvAf6zFSTon69anpsgZ1aLntpVbmfVRMcHsZWb3Wzm5PV65J4QXXqRH6yFNyLyN",
  "key26": "3HgnDk7hGkXRsxJSYFgcgWixuuqoQ1RniTjwy3izXo5qY8N4EcTDG8i6qjMLVgDkVUWXBgE1yZYHxdAQy3YnFgcF",
  "key27": "2WWCph4zjspZ21R5wQC1LKzoLHN1miURHGnmrMRNhksioASJWPJWuj61MtC8QankW2d79SUyHU3aEWgdBpW64e9n",
  "key28": "2FL9qjsxoi4cckRWUmtaJ6AwL5mvYoiiKVukst7GppVACo1AMm659Geo8XuwFVer8jVEciBS7UnFQoreTacydzpV",
  "key29": "5oaaDHFCjfLQVYnzBo8ap5aXKiqetZgfAEkZDBQy88rW2ArhLAJGEz9NX7d3CMfqTPpn1pTVto2GQ82AbZn5qdcc",
  "key30": "2w5sQTfadBi3VUcrb5mz2tqExP99MW7NsXEnEZbpvpWtC14huZN9unsy9SoJmkvKPxXnyCzGwBnh6cQfoX9NSSwL",
  "key31": "4AA8Jqp5BJnJZ1JhWGEFJfp6UK2RvQ24SYYzgGsY42WToYKTLkESpCrMz2uu9csL2S2Mgwftw5nmqk1vVT1b4oZG",
  "key32": "64ppCmVGSSMdGfDpfrfERJ912zghnp9a5AESRWP2Qa4XuL8VkdUNRc8eUeaXr9852ytjsxzD7kCGRLnCMv7sbuc8",
  "key33": "2h7FFh6ZgrytKWKzchwfiuoKCzGeCAymdDuqATiNvJuVst4Z59m5Bii3pxgEG3pf8vxN5DgjAyoTQiX7w54gVBBm",
  "key34": "6376P1oW1xRQJsuzFF7Mo6h7325h2hoAVYY24UMkDtMcZBRtZn7iHPcEppBJHfgrixzby6gGhbfERn1MgVBKWDAd",
  "key35": "43HfRs6rfxCatZ3Tv1j923VyrGg6Vr3wHMV129d4MD1WkwAw43pmJRzD7cTFJQXTPruQnR7pVbA1ucX1PpEret62"
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
