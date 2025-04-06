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
    "5VbMP6AV58pt7acJSmZMBvoGLv4CdjBBkgbjJX5YVn1qnpfxPVoqbQbvyw3WG82tvs99VYR4BuL3vnY8rAEGGETL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R7s53pMXdqPLoTpjyRzSVLMQxvKdxeYnWXooyDRkwpCNCJkVS79uyaoUEpeYPJoQRojjgUWmT6qNrLZhxxoznyW",
  "key1": "67g3xT3QnvDtkTgQLuCorqXcfD8hZHviGnvC6Sf6avQtcAfsXZsnPNhuGS7aC4xirw1N1wsNZaFWKBtNyrntkQ5Q",
  "key2": "2P6gqxwNaBMKWz3SEQLkQNrzzJwHUWxsm8jWqQUH8h1CLeAazz1a5azN3bBJmwF6JCQL7BgSYQ4gASKCLV3u3kPc",
  "key3": "okzVoXnzVtYnRUa6FRGPWkBv5ByqaJniXtz1nUvGFER8RqLUviJiWoZwrq6mTTwoFLvHmNvDJknv5ekhesW3agW",
  "key4": "tH5vaXK76sWetp5EAFxy4EzyQ325gnoY3zLfvTMFoYTsU5m6bS4vLtck2tQTwmj34bDPz2otczFXKwT6WmBKqRg",
  "key5": "2RncfXin7vkU22r1tH711awD5jxv1EfHZ3BwFLfVpeXuSfRGJ1gHaBanpcYviuVgqdEmZ6iybj6rAqnAxvkfvjod",
  "key6": "44N4UqUJDLzUd89byE4jfQUwPZEW9ysJUE419VbpJ8gaEHDrmTajoc3GgpbFp3ARTLN394wmNFmxSk9vdHxZrfMQ",
  "key7": "3EuQSgWgtPA9QmYXPBSAS4Aa55uopB7KdHfZ2Q5vkLsjkDBiPS9ovKpNmk9nKpgcs5UasSkTz9FfqMkPwn2ynQoe",
  "key8": "5HMTyQsXLA5VBB8EBhaFXKTPqDTv9pEWPCnoqiKkKwt3JGtwQHrU2uzD95t1Y8XFYHNmShch3LueVd7KZJe87S3v",
  "key9": "GEYpi3fGKFqDiY4c6ykLH8Wb6Q8CxVTstePGMXcttV1V9toAyAjQKNkmECVWiD34ns3bEoasm9wqhJkuNPGc2R4",
  "key10": "5sJ9Mg5vdmMb4W6LCXCYVNQH9uTce1XsWhK4z1pXFzkw9LSWq4eena8sazA9xe5pNFDaKYgHQdJMekQqYHE6sLSs",
  "key11": "52TYu5e5vYstyPsJd4jeAsGig9ik5UbayTHxR5pxBuCyrY7F8L3TAyNhHzmJ2B3V7ZU9mN6NVRGY6DoWJBSVZbY4",
  "key12": "5utxSLHgLV9r6x6sRQ3ycuz6gZ3PLsB4DKYjcufCAFo8YhBdjEyEQk3vMEMeFdskLEiWTpcwajSQGkHHWXEh5vkg",
  "key13": "bvmt3bE7RerigzkHBzbM1kNJqkrKEzwEZRLWHoDwUDtFDZ1snoTayR5XZj6xAbbmMdz7Y6HecADWd9nRSAK2VmV",
  "key14": "4ETbUfDRc3agWh52vxHjtDw7xCR5U3pfxTd8cAeJAmfKq68G9zkudGKmwktVwqiFWCxtvipBGnWKJ5cj8mPEKsyH",
  "key15": "5vNT1Ch1dSKuU5qccKC41f1zTJ9Fdkn1yJYWy9Jsy2DuYnB24LCzTsJoGrY7RpEDv4iReKMuyJ8KokkmGZVyBhT7",
  "key16": "5VC3M42sovWaJpqyKXEMeyYsjNQ1as4sp44oaGKxiNqTcqKhSb62rn9cBcCTBpGXSUCo8YTmAePjYwGd3DpSJvMY",
  "key17": "3izkEzU9Xokc6usDzopsgjNmcFV5nUdM8EC3C2QCmqgBBASSu2DCeD5h7tdJdD3DN2NNXbCAWgrKKdiqtixNiLdi",
  "key18": "4st8tSrQ64bQhwPnVhcCYHAdmt97wsmjTqsnhLPQMzDZFdxDSz8tRRkSYHg9Aey2NY1toLnm2bCxgDQ194XyTtEk",
  "key19": "5dR9Pa9CeaVjK3Jyf8q5d2d49dffvyMw9dZa5WTeVB4EKhWzghNCGC1K7ktYxR42o8ChkbaV398RUPtrUZCt15PB",
  "key20": "5H76CVjgqQcKxLHaw5wfr3xb2yjTpJ5ycQmc82qw9Au1p8d6mEkxsAP2dydZwipsD1WZApEUswtjHVRSLRU5DoVs",
  "key21": "5LQ2vEGgJDPgqjw5DQW8wCqYDzonzwaehhxH7NAcZq4CE2xf3T6zBrK7ay3N8PFPQnHrCpMPzja3XD2R9TqShRNy",
  "key22": "3vCc5skMoMMPKEnHmnrx9SobVhunhhzT4BsTQkXZWey1Ssqqky4Ff83AhccY9YcVusqoQbFejqdZbxpfbZeNnkJz",
  "key23": "3g4DwRiA5J4tCkrqJRoppm2YoUSGZfrYwdD7b7HyaUbakPWy5jXnCeSxgCLfWgqnbtzq75kSP7aNfuQpdWqL4kJX",
  "key24": "632t817iN51vBrbEZEUhcknFGH4zJ1fWbGb4Tq5GJEuKaDFeoo8TrdavXB3qaskjwPPspRjTJ1wArDSnKSDrG4xs",
  "key25": "LQGME3WfQSQeYFqoffPdEfQ8LUYvNr2DML962LkAmh7WzE3M5QDHCQLYq2TBXWsgCyjqGszqL9Eqk4cJ3QTYnjP",
  "key26": "4KjQsD2QH2eUeY3MbTNE9X2xqLBLDHALGmZW2hEiyTAmyo5TVxaYCVK3gx86BCDC2DeDwjvMRsC1YZLTWnvmpcXa",
  "key27": "4ZV4qoai4M2MTs1PBhFRDBDBEdX1Y4pEWZr5kEvo3jUf3UDQMrNV2rTCb34Yz8aPDjMXWk9NRE1ogRrcjsme3t3d",
  "key28": "xy7kWTMcgP96y9CzrtvmWeMSJTy4VPTjJRFiZrXdf4HnbSJDVbZTAbm3fQ29gNqGrmMV5Y8EVd29e6rYhF54fMi",
  "key29": "27MqcmKteH28rM6qSVPML9Bab7258NUz39JtCm2aXwUzok7ReDcJG1QdRMsu11YnaokR3uFsZhYKiHtkbm5JeN33",
  "key30": "5KPR6i9sngotRmKegiqU68jfYNG6kbUTXUsAKQgjSsT9GiJ29vPpCs2cERyAPwtTVaxRYHvrKYuk4ySVfo9ZMhqK",
  "key31": "hZNvKZKVWuzvoVkKb1LxjeZd6cANdF4ksgqaLx2GXLPHDstqnP914N51cs6xLutqZxXKQWrHwqYvu84ZMZevGKQ",
  "key32": "5Up8eaC3hP8dhiGvvMfrFnQmfZLUyQ6wh1EwqG18NyBqUBzY8XxpfPJC7HptKPMukfSqvmCTNDWCxdtqXcyCjgfo",
  "key33": "3xbZP5DarEjWTQ7FQYG44GHaoEB6YiTBMRvtp4GKJwCFWDMJLK6PXBL8FU4a4zMq6HSGeXEPUKid4SMXGTxJFUa7",
  "key34": "29Bs3JvAbVBhkkuNKjFFCcdKtfQG7Z98TLbN5mb4nbCi7eq2bmxYv5Com2eUxSCz6VFV1PduYjnDjvzWQRRd14dr",
  "key35": "5yc3qd5zPgDSKae9jTChPdBpyLhrZYuu29HoiqSJFq8iEbVWqUyqPRX6aQwEDYZ9DvA6cGTkHCS5LAkH3MDJ3RoT",
  "key36": "492vfVKBPhMStT7LtVkkRuMVJe1QvZytwMMYrB55DbH5aNwpdejo28LLrDtoQ8hGs4RcBSt1LXjTG6gCqGXwUL52",
  "key37": "4aB2kboYj7yXaHp8imQDCnpownhoh8SXHq11yEFN44d7sJEhzVFzw6T5t33xkNpBEjdCSLLyZiDNe19edQcyNnxV",
  "key38": "SGsWrFoWWL8iHwk8nNxKuUdfPTx2tCegg1WnE4tMNxMixdXqdys2DveRXeHV2d5DcN4UjYQRFwH6X7amnc6exqC",
  "key39": "3z7xXQiCJT7FxHzyMssWc6TddewPn8MmQrm1AHmWZqUFiy5wcCuzZ6Mf13uG6WnLbHWbuJhA3ZdwVmuQwYD7ivMc",
  "key40": "3uHfNgSFAEgWwjCEbK1FSnzvPjaehTQ3ngJh5HxbaAanLgG1koL8dd3G9g8Ty3ubu5wy6TdBG4yATNRt3u6SckN7",
  "key41": "PLFyqsiNyoajnyzwoVSkUuR7FJZCFS9n4ZQVATjm5wWz1qAuoTJPUwyRbhUr5QFVpFbyWfSgBkQDAwaA2Wqwcgi"
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
