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
    "2UDdJNVQ6HJXAH6VtDtR8yNS4Hopfn92MqFcgRPEgRnmPdkYz9N3Z1m9L4ScCzmKd4poopNuWnfJ9dVtXdU7Y6xb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u6vEUxGqs96wAdenJKvyeuHrHGEdjMSBSQxoy7ZCXEq19TZbHjSbjUcKH4CRGGPe35cRpRXSN6gECbhxY4BnKNo",
  "key1": "5ejMB5gtyeQiZLEki9vs8W4wKDAqoMJ25wi6JAnbvHaC9HJAKDqRCZStMxiLFGcV1K2m7vTnkRSJgMwM7sQzKsDk",
  "key2": "2qxwWYdeLALZXoqFzdJUk5mA7bFzBc9VNPXWQnUJanCgupSswrsg8PrprdXTd1CrkqVC8Wav4LmTFaX5ECtN9zDZ",
  "key3": "wEhvowRTo1Swib8pJycxgrA2BqDM9egqg9VAE3p7Ms5VtJ4kY4xxUkRv1a5yaN1YZepEwsETStb7uErBNWnU8eD",
  "key4": "2m2xEJFD1NrToSt23kgDMvM5AZ7gbXU2D1VcfPFbHpf63NZQqkAvsedo3XWnvBGz2X1BvgpAJLEH5GP66YpcJgUp",
  "key5": "4MRC5LDemmFs6r9BmoZUJK1xD7vLsrtVNRPki7Kuf7gknYNsqiVdvVzAKiXqWGsaL13yv5z5zt5RtuSYSo4BuD9G",
  "key6": "3adMpmEfWR3HE3PM8GbyuTLrMuZU4kbo45K7qaBHbhCHpQZgKw7FQASjVpMMceLN5vwekoiYEPX6LZ5Jyj8mcUUH",
  "key7": "r3uxv2DpWmJVuLkDLJPw6rCyF3o95rGY9kmqRdZZboC84UEf3p66Mv58JNgFJpwTQ3osSRuwdu998mXT6teLs4a",
  "key8": "oaqvhhqw8KmJsm7yBjG93oHj3Ki33YzkZiESQSG2MMfKou7h3hic4hqvtJu7KYapReGf17wGrL97urNsYqpccyx",
  "key9": "3oqdNpTSSUSknRgFERMHmEpgYU5m8YUW1aqT7JtVLx24ibGsVhd9EEVRfLubjf5YGha1JEj4kHi9qhznSj3ATYiv",
  "key10": "pb1WyiaqRPv57AAy9iuEowr8QNpxnhgiUYDCsZvkuTWZ7QHKSkrErrRRS2yfGZ71XpATF5ojyCSevosnC4PvAxt",
  "key11": "3ZZ2VwBWGnqs3ZhQCeNfECxaRbLUHH5bMr6UHTE2oEvjKMVTPzwuJvmi3S8rCAggaWjwrFm1pK63g4yq3du2FSTa",
  "key12": "5YJsk6JMwDFMi3WhwHf8QPNqTMTRgXaX8k6NE46Dck5cuKX616UAoHRzJS7qdVMmh9VsU5u3TYXbVacWDPooZb2x",
  "key13": "EzfWao4mBMBnWCkFdoJcSBCqDUC4FZHVpaDxrproiEDFMsTQ6v2CxQN6Ear4ziaaaZtio7AhwTCDhQfa6kfGyq5",
  "key14": "3VkBu5CuoT99NCuynzDfGNYQeWzLzAU6cxjGaufyb76jzeiQjVwUJLVvCWPjkJVGQfdiyV7P8c7PptqynZN7Gpg5",
  "key15": "GMLRHzvnu99uNAAgLVDxxu5hspGjxqzHgf1jkZ4aTXsJ3NLSfAadTVGTkXEz97vAy21y7RQAT5rQWvUzYJ5E6Cr",
  "key16": "5M7ggow4R75FRzQ4vRLtdoJfZN4akwZg4nGTYN8Ym5fR8mMwa9f7a5Y8weJ9iTnyj4NSqAEFkjwaDfAtpfATtGHs",
  "key17": "5uVEsrFXG6aYV9FsHh7qoxbHY4PZv15LUvE5Beiahzz6BxXMH7LXStBtgvNWe9sFKJUTUJZtYb82B8CvP7qCsUrS",
  "key18": "7dbEBY5GAf3wcqbp776Ks6qpBEVsNoYpWffMtw21SF4o8fsqZCNPLuNPEPZaH4N7SYCdqdQ7dqzJPQxRz1uQCLH",
  "key19": "38LthGwPNioxPS5Yw65rgZ4tJ4BVVGPjvqRUCrYtSTZXAqpnqGfkNbtx1daf1awR59mHmCUdm9T6s2NT7Yw275a",
  "key20": "4qUvoaW4rfHfWqWXAMsbt7VaXnU6z2C7pqBweTu12Js32MkXBbpECHc3f91W93E6CL8h5QFk3VHWtC2Yy5w4dcqt",
  "key21": "4gMbXNaTp3GmYKYgpgvMRAGdfooSx8RVg2dR4mpLfaNH8YteG7WFHbK33eJv1wqaNefmVxUnt4SQ53xNpZjyC6QK",
  "key22": "3hJ8pwXdNGLUUuf1gTP12pveWWmHYeuFnADjRj9ZsqxmqS5b8deFjwx3G1LoDH2QSJdvRGWM2MBRoZMfFGAmLrV5",
  "key23": "2RRXjD5atqRoPzv4hAQNgWwHqeXZgE2Wrr9j6b76rQvGKrKT7Yhxn2ng4JL5CsAcZGw84ScGT5CaiMY9dGETwpvS",
  "key24": "7qD5RfWZdGgdivtnL9DZqaX5JAtq9JxB1XTsv1pbxCe4ioZJaGpr156fvWV7g18xGo6qoMapCm4KocrjctSJRyq",
  "key25": "jPdeGEhqhC3GeZrd8iFYU1rERgJ5Hq5g9cqi1DAnLN4r5BRWHD9zRJr8K91s19CEwtBo76qQ1tkw1kemMAnjpcv",
  "key26": "64vaETjBdtUXhLmT2VV1wpDhJnVCsfQiNo1eLEsCpDApkD5rpmEUmA3gB7KUnE3vBjG5FiysbArn3F1N35cNm77B",
  "key27": "2m5DufDiXkHbYHgfLZm8S4eZNW9JkdHwPrSmQWHL9P9TC3Ri5g7doYExAJneuw5CE8AKat8j5hRFMRjmbzTRaCmB",
  "key28": "273cgq66uCEUJNRardVdNd7Ck4R4fwMLbBLrDz6xsMvR5NjmggNSC4czqqGnM4ndUMi62U2WncFUAM4zdRXVDAGW",
  "key29": "3zn8srHD8rvR737jutv1fVWr277YbqVapsKaEeR48Wx4Ct94J1pAFReckuuHRo8SKB3q56qQ6c8NAgNsXohGWzu9",
  "key30": "3mCdQCJe8zptQ9wngJw8vwqEsvcoEYx1b5kPgCkj2NBmGkUfeggRjgccbEhqmU7c1rsSuq2WhgGhL8LuJXnCsVnc",
  "key31": "5jRYkqWHBgdTpfa1vZoLUBR77cKkdqwQixDWxyELpqkFb69s5Ps4pjoKzKGe2PF9jHBu61LMMqHJ3s4XLRknnbq",
  "key32": "3KJTxGNu86uGPzdXsL9jVkz5LxwKfhJ5uBUeUJFjfMxgKdtpPr2p5i5UH4t1q9zmELBBFx5tgAxrMKzRXX4Zxqu5",
  "key33": "3h9UhKEA4ASmg2bP4hNaryh4duHeTYmVgHmPzXMU8aMBKWrdn9BRKdvfx8jwHg6iArMtUzV3d2jm8GbBV1xU6wdS",
  "key34": "2VJ71G4XY5Rygs8ZhnRUigQd1pnpLooyBkvYE7HYyiGwi5mRwU3LipbQjru1uq8WZzvXQPoHAbsESgfgnWDWrqHP",
  "key35": "5noN6fFmC9KEghFMKykv1JMcwVArx3Ct94J8tmNphdDLW38mzEHscb5rcTgpz58fqXZH9s2PiPYZRzCi5Qr6NbKP",
  "key36": "5ZsUwyFr8bgjeUvotX29ojs9FQpwr65D8stPRYyQmy6wEobX1tpfkDewZcpQMYmUFKW1UcNSeWfbFoRNQ4vqdsDe",
  "key37": "4QMq9Tr8pGZYwMnBnYySkc1rmzH7NDNr9o92yN5CUES45dJpnEpG4wUWCz118P7fT76HBQcwCUbzPnxTbsEfUM6i",
  "key38": "3H951Mxb1Drpz9VBAwEjbPzsVezcfGfx95e3XmfPda9XLZuJtTgHj91YPy7VJ6J24vhWZ8QY7SbtAYWBubMwpEEk",
  "key39": "3qRyvMzbFzjFwfpVzczM2NFYuULvsuGPscxyU72JPg5tQfC18hdAYuznJJ9VhEV5i8edpo2uE8T8ofJLJubaYz4u",
  "key40": "4RQv8c9hvusJcje3wNumkagneN4fsYNDkkwwk8v29FDRddDkwWboV3bZCavNbwTdpwtG8d4XQoVCcodVUw6t3bgN",
  "key41": "27KMmrmxb7BpHPoHEBWUTTLXJ1bTQp5jsj7eqtv3kgAiuNARYPCy4VqkAu5RKyfwtJoc71wbYbJAmWEHU51UdQ6A"
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
