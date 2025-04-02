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
    "f8tCeN2E5tDHdWYnCrpgWNky2ahDjeYdopUZUDG7PgACJ3ANwa9xmwd5JEZtcZzrToRzJaFVWF4EebqQvEhV597"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28i9UTWLkMQ3i6VZWtcLgFiZdcCBScWjoXeegyJY9wRpGkK1LWkAXt1bFvkLToNak8wP6eT3ZTcn53ZvGXW8bjRV",
  "key1": "FCtUFVj18N3BbfefwvEEFHa5uBe1JY2dxF2MziMhd8ojrG2w1FhdP4dZvL4LfNjqMqV8dK6mA5guHmd1xTjDqH1",
  "key2": "2iqUxzzL5wtPSCdsmG25neJ5cVQwsPC7erD5cVKCdrmx3VyosNjTUgSyx4Kp4RDBxNqSxhpZ6StB5kvN2v1sTpAe",
  "key3": "5irKg6icPFTNXTz6fxo6MqFhMebgeQ57K3AUTWWyv9Z3yWfqUVWsbBgXgBpAffp5eJTtbE1GNMPPqpYZBYXg2r8c",
  "key4": "2yKzKP6artxQYr1hXaWJLGTjQQ999WV9RwkqyZrvgYxSAgDj21Z6M1kMwuNcUqPR3b9hSmfxusjZRC4J3Sv1RBTe",
  "key5": "qWmQ8PwMySVFEFMupJcqiLtKmCF3Vv1M4D7nthX5XiX5vYLeDNu2vRW1xMMCuFcJVYhd4eXsdkzsJemrmFSe1UV",
  "key6": "56xWSJNHDL67cxnv3CRY6xqbdyazFF3dACtGpFLXsNqEscjMwMdPNbjsgawBd9ymRvyE3Bi2wp9bWMm3r3DgNVDm",
  "key7": "2iYKrxWeuqAithW1J2wauCZWu36rmHQt4gDxYqrrauUvqzYSV2xkuKjTYrP2tM239auHf2ZSCinfXzTb8q9gYNGj",
  "key8": "4PQ2ekg4yazENXoZy1cHWZLG8Y9oYz8eRWseRZJEBGt8CZRB1xkhuhtL2xB5XejU46MMzVgprAqijgjHSzJi12K8",
  "key9": "zNFNhnGjEJyX3qE71iFjXoBYjp6QbvQkfzrfU8vxtF21yoeNm4nHVnUbDp6qwVurwKogoGEu9kBu8g3a6Jsj2Vx",
  "key10": "KcndKSRvofByCp7UFYusjLEhwA2Ga2GSdHy7NwosDWPYSRHooWYrCczPV5fGKM6ousphUTFAsz3qd13EVKVzmJT",
  "key11": "3QMGPRjmmfs7gXzig22r7ttpjoXrbXPLuqY9GcSaDAWfcevG8bxrPukNbnQFSCbSnCkW7rV6XPshgQXkgvoGpo6t",
  "key12": "4Cw8Y6V5iJ7Xm23W8W2DeVXF88bVVu5Jz5UAhRwkgGCwkxewRK7Hp6tQdJRm6JvV3Upvf1ZBhRQU3RMufLqySCcW",
  "key13": "5PjJSvwS8TrCSBw3oN7yGZsagKnqfV7F2mXjDAZkTdJtKA12ktbWJsW58LNPaTnrFC2ajVCEQMdbTdBS4YLrFF1",
  "key14": "3pvPHpztaFEGsYS9RAoTQTXqJZ9sVt1fLw3xoE3WDJPpdCs5K3Tc9cMKJaQoXiiQfaUjntLekTkPzPRzCyPYZfyv",
  "key15": "5zyZWcvvfzRimdjDfgf8a5etr8ejBiUtM2Hh2us4Ffhsw4iHKEwoimsJ2bSDUWY1dr9CjxoQeptFp7Ddd9mdMpmU",
  "key16": "KdpasWx1c4iSDCEsWU9cXa9QLWjjgqnyvHnMztVYHXifVgj5WE4Q27HfMqMjGnTMvoAiKvnnYoz7hDqsxmfqGbn",
  "key17": "TJQSbJcKeSa4gWbAYy6sSf9v648VE4VPn5Ph9ia2Umdy5gCvmcikH9KzWi6LwmVVwNJ4nbrHPXTUJNeUevExiZq",
  "key18": "2yti9fkqEtywJjz9rU6tNWFVc61VkeceDmTLZ4L4SbgWNbW2NtYZ6bwEM58NanGvNshKjAaeUqqQK1U2Lw7RkSH7",
  "key19": "2sNq9GtRZGFc1Ap6hHpC3ECDuqDAWw7GY7WoFXbyjADfBp71A51PzRu6YYJgs3rGPcTVvMYJeVkTgn8ckqr5DXHY",
  "key20": "5zKdYUFS3R3oCEXUeSxPCNwhJKGCA8WeEg6QbmkzYPrUj3LstxacC3bmzYqDTF2LeU1ZLZuQxZCwdc5r6PUXXcUr",
  "key21": "2eQBBma7QnbqVxAF1jgj8Qdb77CmqDd8pCX4WoVAyaFzNz2Qr1PawGw32tbwUD15BPGc7iGj9F1gCRiCBa9aamhe",
  "key22": "2YH6RGq4pARnadyKmDVjcPuswyEAidvJRrMT6UrT7DLRqF62Af4mVXUu69f2drhDSRtsHqCKihaNR8ZdzzQNrxbq",
  "key23": "2HyskccAvy7s42WtrHJnbvEW8cNhBhpEc2mtjLuYJXFh15iFPxbMjTqjxQGscShKh74GS1sWqD4ztWcgZUAQygnF",
  "key24": "4ziyiJwpRPYg1R14VNLi38V6uZ8Cy7pstvVLsKvWYWydLz3BG6pxMvPmuxGQWZRxtswPnnt4PR7vzi3N2wZbH6um",
  "key25": "5nZxcZM4wq4XuUKk7nCDJw6d1aMsRjELiu2Bed9m65PvHox7VgoMjDunFT599xkPiqQ8w6YGvQ2GnF2KqqRXEkUL",
  "key26": "5C5yK9Tgs6CRaHgpC7TMpRNPzGYTge8Z7oyUFzgG2xuqXcFsJnXDay1jTHEKFqqYFp4MhzdDzjYsRREMvCZJhC28",
  "key27": "1qzYAHr9J8fPCciHwKW5QaRaNSLjdytkyvgTCzuThnTr5niXEzN1yxVZc7gCYZrPQo1XeHCVi75naTf4Vcwi33T",
  "key28": "5StNTv4ZrdoBZQBRnRhQtsSgrNupaegyj4S5uKjaWKhp5AxLdqpHGiMmHAnD6ypp3fa5PyzCR6K8JBEZRWVZt7oN",
  "key29": "3m8LpLEahrwgdyHwsr2c2kdtJLmC2H2cK3nfgQyvMEKBTU7vkSzFv7qmZQKVCFSxKtckDBDFnvNmQFS5ARhfwa1r",
  "key30": "53E6yW3y3XZijQYBhBKyFBjFkgsrW9h9kWBmUNqr5Ee6QwuDrhfTETC1bRVXRk12JydV3JxPhqQaQ62xvNxgQfLm",
  "key31": "4S3qEsEG22GJikTw3cAn9rK5puj4Ce2P1zkMBU7g5D81WXKmEyL4m5DNB3S28XsLH5q4Uv5N5n6zKkqhR66bBzr7",
  "key32": "5RurJT1sjbDQyk77WYdYUPj3n4L6qovL5KsHARPjp7yxZMo3UU3ZHMPj4kj3UZBdSW8EGdafqspk8XGN4HrpqinF",
  "key33": "2bZgoqiimjvbD42o1cEmJB9z8B8YvWzFQN9KwFqCho4Hkx1CPSAUMxdAdqFoxZ4CLmD5VxDYmCo1uMraFkByzwvy",
  "key34": "4jA3fKtSB6dvHt9z9SN8LqCQgM37Hrs63gUcogMbsNr8L9kbFf5Mn59DuPtZAz34SDsjNR8Y6Di1XHca5PxAU3m9",
  "key35": "4sE72wonP7GHT6bo6T5UFNQqjrCLQTVTTqXQCQ5zwST4JL7dgnNiCSwefhDDoayTq45tTB2h4D6hDsgJY6118HXx",
  "key36": "4Moj5WifgtPujUv6KBDEYDqR1172wLxUDZGjUwogGBueBnvhS2j8e6GmePvKwSfL92Hs9fCC74Uh2xBzut2XzPed",
  "key37": "4kxMVxZDzfU19hm3ouYqdQHa2aiywJWXcfyKkJNcJ8VtJ4p1A8Zx7gvH5HrcQHhzLNRWWpQSrqn8BDcNFMw946uP",
  "key38": "5UM9qD4RGQzMNB4fKyiyFMS67JRvgBpqL5MzUn1sZDGv8Jzeeaht4VoMq13rjJK1CTmoq7JBdfzhNUh9kdY6MFLV",
  "key39": "4isoC3785qpbnYQ6TttkX77jpcderyReTu1T6jihV4G8LNFFU3KLCuK39dPBS2yRfuoev2UqUm6ZjV9j1nnnDRks",
  "key40": "arpDJFwbqWWSFh2KxSyz6eEfW3mN8Zz3Lq75aQkYWH5RdV19V4XHQRUWyicHXST1aErY73L2fSAy9w8vGNJqLim",
  "key41": "4yxA8mxa7Ne435zvBAgBRhdQDHJfoY31Ti9PSAiZsZvQ6KbmE3po9tCzRLYcaLXsjvbXg3d4oKaJk98BQEQVZ7F3"
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
