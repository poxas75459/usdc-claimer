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
    "4bHezADwRjwweemx17tBNbiaJKPLQw52eoYRx4hTJvaSsoDjVKDfgygfmuf5NLeRymGZkzoBWt8cXYNLr4Jt4ZEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PySH3JaurN34YxsE2KLZqM3BjgrqE8GT32UuZ3SEoGgHz8syqv8Rxmc8xyFBbaJXgkFrhxksAJeWrZAimoZQQ8a",
  "key1": "2hVG2LHd29JVWQeEG7EFACnwvvFcFG6f1mggimWHnMUZfnzBbCbXJfs1L7Mq3ijrXki1HgkWpVhcq7KqxsAKBRXE",
  "key2": "27HU1n3yvSaNPT1ZRa9XYcX2FVtLG6abWJ93jZaPzFyv8Gm1YaGPzqBPRyJWs4ms3CcTebBTBWvG6xUzrLWsf1L8",
  "key3": "fp1LpkAa4dhr2MMAH9yXDd54z2cpzVtPBoC8D3hnWkt2WS38d38CzHCBVqJTJfV8UM52EEjZN9yuCm8hyR2hr1m",
  "key4": "4tv4c7uAvhrQMPn1Mir2FANWaJRpberxkAsEDVcFJD5gB8SceDx9sdvq5THu7Z448yhjZDZ2Y9sWchWPmo15iQMp",
  "key5": "4Yy9ZoZK47zeXYKh9SRRUMYenkwJLqk4nd8p5U8BeFPqJahfuPt1CLANiMUHVXiGe5dgR5Ndn1FeincGu78rkCjG",
  "key6": "2yC6acjZei3gLMnNf5u44q5Ctg1XmYQQGMvZyokTbgK39z2g23YyHPooQzRbdZThuzoF53N1p77rXwYmWsHKAsyB",
  "key7": "L4CYxqPTdwD7Rkrz7sRALeRhR6sswKK68jHrgVMKTMDX3J9Qntu8ZveGSbdFn1aR6PTCDPP5DncPY1CnzLuFgKg",
  "key8": "T153H5rhtdvaA54zwirm4ymPNxdmtBP8pU6i27YsJtm7zSaxmj7x4JmbTAwzTCmvSwLMHn4LebDPYTqirMr8d56",
  "key9": "39xMSk28Ryjaes8Z5BET3sDfLw3qwBimv3J8WBr2QWBFQvvfNfokkpjv4oZYour42uPc87zDm3axH8Hdb1gdrkka",
  "key10": "5QKoUwu21dEA6hpkADCW9YayLF5fTJBqASTB5oYe2u3PvQCmhWbbcnToQdXvrfXNr3ZZ11oP3zotxWDS3HM58TGU",
  "key11": "FmZSQXcm9ELKBGJQ4RvCcYo8frpVZZaKhWXYiD1CvhMX2xFoMd2qM78PY81hECfV3Ecs3PQU9nJXBWjgNnyeFQy",
  "key12": "4ZJPsgHrvykUXysUoaLB3qoSidW23RQG1NJqYkHVH5TWza53QshW19bmKUqvVAeAWnWz7nMfTtC6iM2ANvyXrWd9",
  "key13": "3oeUYhMsUtRJLstoRifzgccSCH6hd2PvRRAzbY3zmsKfQv9jRr3JFMHqMKYZX2jERutdKLoZfbqRKUNkC1ML91vA",
  "key14": "2wxjqTMX9Bh5QZecDwrjLfZbrJW9p9idyqzmjnmaCD31UgWXdhLWFJmvnVZDpCMmmKcZ816Tz5fSu2bS3MyUseio",
  "key15": "5jJxywQba1L7GsmkedUFUkaSCbn99foJGQ63tNtahjt64n6pSpcGxXpoaRUrXcdMPhsocUFiSMqxoUtZQfQocYey",
  "key16": "2y1FvYQHZA4S68Nkx4Jats7JiWpRm6KiB3WpjvR9aZt6qDYN9kgWyX4StvHF77A6v8nTCu12pjFUDRKMjTG8FtQD",
  "key17": "2UMVE2NVZD7aMKXuaSQS8o3LN6uZCnkVgMG6D6M5Z7wovR2jNHg99uD8puQkcNcLUzKFUNddxdW4zzBxPx4nvfZ9",
  "key18": "4SFiLvabNiUfYvSRdxDwZp4txhCaERvowefPU6ezSaDX9EiUXAnkU2uxrzHbpi1w7UTJBgZr6jWqTigysRvog1nm",
  "key19": "3hmTts59q6dGxtDH2ka4bwgp6vdqZaEZPJjPTahPh7yP9Y9MvqjBRGNkLBWypeoK8M92KmSR2aQtafuvRDJm4DMy",
  "key20": "5oAbYsFNzUnxuH44ctF15ASiZH6Nucf4QQ5736Zp85ix8SRgG1aPGPvQLPWyP3pB68XTNVb6VKYu4PqsRkssv6fY",
  "key21": "64sKVoBSyabJak6vCGwPmSmmeEet5onmfXkAuEUR9SZjLuHvhQy712WCMhhAAtpUuxMDrAUmzuZum8vduMov9J7K",
  "key22": "5PTkaNx3oNB8aG4pv7pS6c3oakTW4jgjDMNzdPpM4wZzw9jLniNFMzyE8v1LSYcpz7XbMddQqtZPDBMwGijKpk23",
  "key23": "4xRJ98HqNqg6QsuruFWGrsibRWjAtNNDcPL1PWzGnDLntnSMTBUFxZNNBKSNFZREf5Muh7G4ZnKQDCt69K1bzRok",
  "key24": "W4JDfcr1nfZV1uDHPF7Dr6SscChVQvsNt4WXgbGdXayg1zeLzaVW3BgefM6CXcQ5cEDNEpQ46rNnVXsDVry4EE9",
  "key25": "3rQDFdxatquR1RJdff5FgN3fR1813yXNqCyVPKxM8hY5CCVXkZGALduzfHxHDJazhi5QStfXrDT677SK3wZsgRXQ",
  "key26": "fHhxpRKuTi7BmsAnckiYdg2kh1AAZzSGH1bU67RmpqoTp3UfeHihroEyAqkuH5jotAzv1iZqCs6b7Nb8rLYM2dp",
  "key27": "58Jbmk8ynvZmpUk8WtKdyNmTqsahUCJezH8G4tLC7ohDLzPPZNGn2A9hPDDwKfNVnRCPuTnWovVb5rsFEeihx4x4",
  "key28": "2wYJdWWX6c3AjN9BZzfdbfckmer7ugz4JZsgMvhCNHG3bavJQCrgZ2m8s36Jk3eCSj1HXLVW7KVMtVPVosBU1kQ2",
  "key29": "cvnMKiSAuT2rd8QCRhcsZXHYFyXKfbYDfoZKwQFMPhwWnDqSBu5n1vVidTqvTSX1ehoBGDJKRqCg7yDgawakCQT",
  "key30": "2m1cbbUgAgBnJ9kcKQ81gWhBmU6vW8J1EJaXxBZETFLP8cJ52KVFe6AKjybX18LiA2KHhkULCPtrndQTuFea5j6j",
  "key31": "2B3VwjUSD3fjJBh6rh989UHE77iBavLHnWYgNRzv4t9soTM8WsQzoCqcwWDQzmsrtTekRcsMFKxbBje5rsUfiBdg",
  "key32": "4UP6csou9D3wCfnYGThefsUmZwjgUbYdMnhFwU8REjMSLzUnNv5cdHPhkvfjdMubdaXnKZHPkWtsLuQMthTtgQt3",
  "key33": "21YCdR4s8Miaq9kJSzbySHTTVsvY4uYeFEXKRWjqReuHHPFfdHaF9QoFsBRgLN4rpkp8Zm4RdBXkxYPZyxWTHY1w",
  "key34": "Yia9eTXQMWaA9Lu23fx3H1fyNVAhsMLQzA7BTLWfJF3GHFLWTzCQryUTXAeoqjbzbmXfUJdQEuXJo46cwFL7M2U",
  "key35": "5mwqeQFb18FP6j842vDQKw2GaNFfmu1HVJWvyXmeauzTmRpbnf1JGwH3Tvdc7dzmskFhxijPaAX18kEJroq6jx2s",
  "key36": "31CKEvLPAzSVwnboQXrhyuz7MYxT9byaYNF1P3pgUSND5SAL4p5EbcU2EL8jmrC4dXjuSCZ6tUFPHhmoBF6ZGsRj",
  "key37": "5ZyvzDkBikJpuk7Xnui19dxF71QcVUSF8niFFUh6gCsRTGSAmD6L5SGfZhDMMkwaDo15JJVXszVztFoErGxCZgWh",
  "key38": "4BzLLq6BRkDTCYTYdTWD5P3hb9yKA5yW2FNwPAhtisxb4kbfTUgDreqN6T4G8mz1zwKVU6QQdAE1CbAnaN543cd5",
  "key39": "2i2v1WJXg8hk7J4kncyqjFC79bd37oQTD2RxqZqqGc4xuxFHLj3gjiFoJWLeDMBEVF3GgSvQo1FnzK4gDc1nroUM",
  "key40": "2Uiz79WaGzZcr6RGuRNR9AtzpmnVDEeW1yHkTMLPmTzs7CCWRLB3BbZJA7Q2u8Yscbmk8PZDMHfHWR2Kin3xvQ6X",
  "key41": "3i45fTjoWuMmKua4ZJ3a1BakEfTtBqxSVJR6s2CL3pv3RwzXt5KGQKDazZHextbZETC9xYr9dBzWVp6B3vT4uLbi",
  "key42": "3kgY2wyMa3YxAZeQymEQgs81GQ6886s9m9ui8KcfNctj6KYjGbyXCjoCLhCRkCtsVkmhgNe7xeB8pM6CEB6jfXoW",
  "key43": "65xy6X34uQ39rp1R2tDCqs9juUGE3gXSsNbNAeiiKH8qhR8Qj3yNVCpZjp9k5xpun1t4u92nQbysZnyEkbV6brjx",
  "key44": "4nWUsg3UHQouFBb5eVEBiD7zTGTyjqeTBCAMJEauwSW69zvWLAW6n5QoRpuNf51UFUCEi36i8B7N31boMDyKg4ru"
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
