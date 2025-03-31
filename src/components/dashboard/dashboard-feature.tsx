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
    "4azUDiRxaQsQUdcJfgX8ZaFDgPVqtFVh2YWMvePq5f8TozdPnHWdfKmLCgDTTBcKZd3WbxaXzMFh65f6CzHx1bxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49ttu6RnFAmNbarU6XpJbLci4ptPqU9nyPxyu17tboGkWYqTu4Vc5UHJRnp7jTcbCNd5u49VFbs2LEUGzeBXvy8b",
  "key1": "3naFp24WbS49G1tfDv6kRDshjvexWYiY4yr1XCEmkrCkeHsDbYsEKfYQQssjq2tgizUZd85vbbAhdQKexFKzNWdx",
  "key2": "X7eJSv5gMwzgwWDnZ6EtAwG29xvwbpAiNjZNxa8j3HXvF4pDqiCkLSyjphsnuRz1a8eQKntBjcCVKeF2gnqegrW",
  "key3": "5eQT9dPVZmHLqggEBZaZkMXer5Z3oqaAQ4BwNAsUzNrMXX5jNCTDsFksAdhfXCKtV7m7T5zUkPwVHvhefYMQep57",
  "key4": "59kniSkSU1SfnzpZSeSuLXPyhsoSsd5vYamBDsv3hVzsn98dS5TsG3GAmJhUc3cnM5D2s7FUDHbkuS42amp8SwM5",
  "key5": "4MjMXKN9KRcwx3m4oZEhYn4WGfoeS96w8PUywYMLRW57AvjmULWoQSjWwVkExVCuDytCBso8rD73Rv4oxTpqmxAb",
  "key6": "5gTPZpqgjmGY52cA7wm1Z6eh3ccdmmdZ8Ux4wHveqZJRxzu8HcxKSLL9njA1kFUYdNtzJj2ybggGwBqMXxTjYefz",
  "key7": "3rdoCsHF6je9SNrSv6WX3Wn4o2BszSRRJfZjV81SgvqnydJTg2PzGHBiZXdbu679pSc3h5RMvmLFGfXf4ojMYkp1",
  "key8": "4UahsTanbEa3LFke5Tr53EsTngAQhTKXo9yRWo3pBLb6zmjR3Ve4krcFxS5pEVPZtbSUEu1PninBqwBUURDT8fSr",
  "key9": "3MXgcxdpFv7A3FkBUM9vGcv3ttEfKpBjMD1HURqcNRB5weJco4ZiJ9mh6gKXdw5kAaiYpZQs3EU9L8MS6Botzmpx",
  "key10": "VJgM9vkbcBSxccNHUED8tzd1sEd6YXcoiVLhjtLPWqnghqYeoJ9uayuyDY9ueUyw4ZrqdQEcWSHoV7hZHMQ1K4d",
  "key11": "2LWpArd1986KWYHmbpJ7rREdUzvB8idEsxjJLXf4uVCdQQ11NkqkC8mPsfVegRUiMYpWeTrLTtX7DM5EbqJLbJ1Q",
  "key12": "4wv7W5GfK1aG2wuvDCSHLedkcbd9RoxrHhVkuuwJJ2kGZciqJ7jmSyj6ZShQFTwy1SBoPxkcnpbHEKhbqQLF6GgY",
  "key13": "4hzKtBvVviMXWBkzH6AKtdwhgt7kmCaGDrfMzBWzXeADo61D6u4guQvRHrVc5E79aCJrT36zDfdvjCnqxYaBvpu7",
  "key14": "53Z3YHnJ2skAaycFSpFUcb1vhT8Jh5EMk58LL7Ck9a67ohzFVzdvgZgMzPoXLtBqtdMWw1z9SWvmhu3VGDRDT2Dp",
  "key15": "Q9VyAz2Y7rQiU6WWGaGd6UdFGSCEiFjzE7C7NLpYn1juYKJp6pKF5E3rEnue8LG7TYLWYGvft24CCVksng61o3f",
  "key16": "4XttT2Hk9js18a5y3hgcHoEXfahngmkjJTLCA8gNAHoC8J7qRV6sAAdM2jS7LwTF62eyu8NFyUoHVVAfpiKgmZvq",
  "key17": "3pfcmD8eWz1uDFsxnj1XzoAAVwv3Gupzbssd5FfhYEkDJRryzwpxun9UnQSUocft1CvdLqqUtQwHiCzeSnFizucE",
  "key18": "5Ak8EDAFyyZBxyYLqwcw4xDqUL7FsYX3Tt6G9odSyehghwXS2DJjGSuanWGGskyMgfpnT36zaodmKNAGbGtvLVFr",
  "key19": "5uJrvxJNeBCgKsXx239Yfydk46dN52eyRDJJjuH2z6ZjWFWF1mNHoCfnGFF6C9icMRMq9pzwRRwMSJc5Gy2VoEWM",
  "key20": "2je82cUFHsZKuXx46TPJzTjeDo72fxu4jisW12VkLh35J8gje29hRFUvYRHfniNF29ZdWwuB4Q5S9qENVcamoz7q",
  "key21": "bfwkdaDYAwMimdMGw8rNqSSpbeg5S3Go9pRyBe8UTV4HJkdM44NbdiegvWw2noV7zetzh4zwh5Rg4FRe8P2aVzF",
  "key22": "5mEEfMtfqnnEeGwPE4d95EC8cRr7WwGXbg9ge9HmLzWLHQ8mgMM71RbkLpyf69tS1rmYaDctLM1xExKr2ZdjyGjV",
  "key23": "4YvYHfJeEpXh6cgTdA5x12mSktRnJQtSToMwR3PbA7cX6bR4P3vNTtUfdfMz6hdkwfcQffoYEFXqW2XUaxTBtsNY",
  "key24": "bT6k1ucHviuHDwNxhhohGGftYMwYKwNGM2uj1tfCMDqYn8JYh2tShXKJwBHLWrTWHoDqUfqSHZrYzgjpoHKqA8H",
  "key25": "FsZncVUFYfzHS9S8xFmsXq3HYM2mnXL95rmuXJf8FBiNXoQmHsGsfn4fBDxNxnEGZWNQQapePy7egfTwiVEnm4t",
  "key26": "3Y4S7DgKEHAWx3c1Mjd8eMVDLLPuRtNM9SCt21o6eJdXCXgYnT5eX6LFtcwtBC7Y4wDQYnxTdHATm9RxDg44QrMm",
  "key27": "4ucEMuFXCpoxcfStKjaVNbSSkiR1HBoaPvrPj5NzXuSfrpLDusrFMhPd2Py3WFjZecQfQgAtWe7fNfJW7afzwDLS",
  "key28": "4VGk2NMAzXMkFsMVE1c8BT6XBJ3FkpuzBBQabRs6MHtitvQr4wRmibGjREhdo8Q7fNWo7VK1ewC93tbdddUgAPJA",
  "key29": "26Evn7SQGAEGn36VvA3m2DoJcN4v5iHP2DjfqevUx3J3iekZgHpSgSjQzujFzt4UveSTfJDsAUqv3qTHbG457Spp",
  "key30": "e8ZM2rSPs3DY3McTD2r1m1iMnwE6CvrRvstScUvXjoEk1YHDMzhCRC1qJThj9fBED1t9NeAarn8rgUT1U8GD43m",
  "key31": "4PxgLobdjNC1WnVyyDS4GHoB6PDfdJYAaWyWNw6GCSBSHAiVEKpwbxmRM7bf2VzZh8wQ2NMf12VZbYAhm33CyU4L",
  "key32": "5FFtZaJAqLXTbRUAH24i9FBmZZySsjwzghbGsfCadrWwjxui2vW5kqjeLrx9D5fvEor4V5VRhbQCc5KjXBqLvEei",
  "key33": "2oCAMrDxJ2BuTkFpScKRjn49s6zyTE3A4scwQiVZfDfok7RLHjMwEwQq1mJ9huFhw6r7UBX5ALzZrU2VZTLBv53G",
  "key34": "4fHjQfJs5MLkvvmSbfQaQFAheaZTJbsTmDFa189cXuc6a6aNRaCRGv4a4tKAFmRPQN2QyVYQEt4Nhpy37dg6iVdD",
  "key35": "3TEwP8AxRy4W1qEht8vThySUvDVVCAJA8HHzPQDLTaerzxqhjxLeN5y7tA3pEB9ibPfBaV9X6a8FfPD7ujuPem47",
  "key36": "25NVuRTCMcnZrkYpQWdkEbk9i5YPdRyzDPy3hGsPt1XaYmZEzGyNfCXQAHinU9iCthJudPiemiAgmUbNv7TK8iRU",
  "key37": "5nWajDuxfBx6zF235ea59SfBmc3HmLsy4LfMatLQL7BtefFin5BKtb5DNEZJ49djjJCeNNZZ9WCFcNTBw1XuN1QF",
  "key38": "58n6Akc86hQUrQ1PpbzUJ7QxwUSvMAfzYXPeDUDbMygAaA1vLuGqxcRiBnwjBWCAE13TBvoKG7oGH8RXE3RRaUie",
  "key39": "28Ay8NRhCR6h4VFbzfzzX2epKDQiLPanfr839dqaRzUimN22gVwBe1kmMwmARt7xsKVcBwwj5coSKdGGT4sSqVPi",
  "key40": "3VeFqPHuWCPJbBvypopPRkvhbEegVd4H8DtLbe2bAeWgVj3qPHoqshUoSjKwEdJQuu3tk7GT5AY1StiTUnLVANi5",
  "key41": "42goKx6feSmKErkU4poAiFjDLHfEzyKre1kRuLmXhdD7MWinL5FJ2X6tdg4tPXHBq7kdkA3JsDa2joisTS8fU9q2",
  "key42": "3xTSczR9idGR3so7Hiqi2mawsVsCZepPaUHFvMkGriEwBm4KRgNbLR5FvXjvQ4j8NFYW2hNMfCQbJZh2KXPjYmKQ",
  "key43": "5HvTHF75UHJn89FZMGZkXJt3pef7zJb5JVV3b2KgaxfX3RcvsCNDXVRQjE2KduQT1nJqWwFXyL3ywVLBVxpwjqRd",
  "key44": "4znoSMMiQBfV1dr5HZ9LDy3zDEQY6QRbPr2SaqYgYrJdA3mUrcfzF2Hpe7j2F2GUY6ZvmUuhnTunuMXj1T29nsWu",
  "key45": "5qevA1mi6uTWFxDtYwpoabsnSiFmfoLmJXV1cdQW24YYRc34RUVSQdYbwFRUygZqtQ4EBbTVXUEd96dfhq1eWb3v",
  "key46": "3e31hq4Rw6K2PN6Z4achSw8wwi1Abhoifr476nDQTCsFRuD9gYv1LaDBLT96u72qH8fWhGUfGjhUm3cS7Jj1rKNP",
  "key47": "6GHRVRbzQwYEE79dYgLvEspMca7dCJUyq7ZA799ddFkWueX9VKPkU6iAuAykwxQ5nESDbjQ2Ppaq84s86z7vTQT",
  "key48": "4EiBzkYag5NP67wt1QP3sQBLAjXrKYBh8QUm2KBiBArhHRdVn9QdMtRqDqZJoG1tb7cQWv9dBKYyAnTVzNScxQpt"
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
