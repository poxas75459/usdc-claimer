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
    "5xFG5AgcpXSLK1aPufxUYXSem2yEwo2vyVxt5RBYGdCFp9uaUjhxoz3WGhNVoSMGmCmZsfpbLb9hUyf4nm1savyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YQ8V7F8NAurQxHswde1Jp4ccPvQ3AEU5dtv7SQYWrWfp73uWncyJicYcRKkZBLbSNs87hAPkBVLV5KReNWDtMkp",
  "key1": "4iZxqRsmdLLJjvVDqbvvppqQgdou1QER7vZNfYQtFFQP8EQnWkJNy3rLCtgoSRMN5vMJLs8iMnERj6pHTm65jGgo",
  "key2": "4Djs4wt335CYhrENfYfVhCiL9k8xkigw72RwYrKCryvzXdDsKvF2aZ525STgEpESGG6kzPcJSVLccH8ptARAFcAr",
  "key3": "pBsdsitAmJGyrRb5MZAC2kWgHUi1qonmB4LdN1Gxo4nQ9KSWL5E4s9u188FtZASW4HGSYTqPv34h3ovW21xVXrQ",
  "key4": "2EMhLpRYhoTrC8jTdj8vrB6GgdYKhjk9gAVe3DofeZj6KWdkUuHZTHSQpH7wi3t2n9Qts8Q4FkTWkaqwUzWdLzUN",
  "key5": "3cPro9dLK6qdsBS6MQrZVXcpiyXWbx7Gh6yKhiHrAgbi5VFQTTbiCTvdnS79oeRaum5ULKdpRCGwSR2LF8bEsoVr",
  "key6": "5xHLK7T2S9dLRr7moD3zvB3sXi2HyYZhf6vfnWZ8C3vVgYPrhq6j933cxt3uM2pe2pycWzAeFhHb5mihpHVtha6Y",
  "key7": "3V9J9QeerNBN4mezZ3C4n8xzAAbvexwkUDo7HbVtTuZ6fAymcNuyimMRwCGnjBHqvXCddeVuGJsqjz4gqJXW3yN",
  "key8": "CrikKQtDWZQ4qsW8sQG8G8dropaUxYVwS1CATCaDiqUZ68s21MpNBr8GeaAXBoSwNszr5w9gAsbztqJP7ShBwYu",
  "key9": "4w2AYHz5zU82eaGi6Lbts2iZ9VR28jWMqScWcyRag9DrsG8n2TwoJdbHPXs1XHusyZXYtCsiEBZ44agAh3cVjTyq",
  "key10": "RpumWYHi3Wj9YwcFMkrGxoSKykaibc6rU3JvfXZdkzxVekN3jko98EcK5wGPFvxi2bKGw2dZ6Ph6fzYVYPXU3iu",
  "key11": "21WiuURqi2NdyVwouiMbjwuCkwRCDWbsKQeEGFB3HkTVot99UvSdfpYKzFM1QcBr6zuWde9DADRc5LNcpoVcaTAv",
  "key12": "4YAYDDXNqrwzCevrkoGbzbPfTiLYzncpyf97pZinuMPtd7gFGrCCfcvxGCj8Mps6PLjdzhP5z2dyTJ1esx1PQiCk",
  "key13": "3mkmb5qgatFR1zMZyjqCaGwXASV4eg5REXUzy8zEiEGiQFj4VGoFz9xXWWRv41guvkdpe759ByZeeBvHGisdy8ZE",
  "key14": "3QYnst8eKs5p2n37MFa4tpMmzGpt7oeVCeSpQBMFY3ttTw1U9RYtViGT4bmjQ4jqJ5F6wSkb2ho91tzqYvuHAtPd",
  "key15": "43dmzoq4sLXX39yHybgSu8fLxGC1CKxNuGm5ucfnwwe8Y2WYRHqDN8yai9xxAmARk1dqzHhBPnrR34KvwksGgMuB",
  "key16": "3aHbtPEer84G3uVJ5fV52UgVv2aN9XfpncxJtCFw3ai1VyBj7ozw1Z61viiUut2AwKxzvLRFkEv4t3LZFYGTWEyY",
  "key17": "4QPN23QG66sbXLFY9aHpPhzKkSxFxSFeh4DitjNwmFqBUuZYo6ztoGQa2yx85VvWhEGUFKF3gFVLDxsVVzdUbfQn",
  "key18": "2UFNKdZLz3rSDCxPBLw27QU4PaVBYwEertNc3buzNguvZTf2zJH6Djny3H6yVzbQeQsT3sHXE9HhZmSMB6rU7W2P",
  "key19": "sH7w47WyQaEJqoPZ7LMh9Jy1wdsndwSURuWaPLEUYqviTpaGL3eW3WHZHmsUjcuTLUC9W2rKXeb3FKUUcbCuDMc",
  "key20": "6fpKD6Gdqtw2jfcewkPHABEMfn6GKthNeaTXnvgoGNMJthfgYztdVJrAV9Y2G4fTwXEtDjujFCUefBNo9J7RqQz",
  "key21": "3MtBziQAYmCy7CijJ9KCBa1GmJdvCRsEceEpvZrysbQ7eVmxW3EdSSgJMfjax52sKBccx5KYGPxXiG449Hcd6q8M",
  "key22": "5fDLDF474h9WBpv1AtJ9MYB5oVNSYyY3oEGrLHpzVH3J79XgGAVaN8GqxoRmqFo6Q6ZjhN6eivzBNYjDPN2HJVFZ",
  "key23": "9sfYHWyFiQVAkYTGHbsggPJX8uZ9XXSiAtH4H3NdsaTfNbbiirrP2WAHarmBkMVoDACGzcZbFCYdtTXBd8XASEW",
  "key24": "1BTmQxdVWU7CGjMa3e7nVcds33bx1V89BrQikU1Qu6Y4UgutoxoELq5KjcJYaaXqae4cs64WJdJg2tJUhVMDAKi",
  "key25": "U6rfSqNgpvuAATjHbzfcyeWxXF6C97Yee8M7vHwSGm4dYxgJa8fEwjMJ39zvgKa4fM8nML2Fkx5s5ZwGYJh3SxU",
  "key26": "37YT2gHQpnx28cLPCHwD2onss5JvhG7zzuHNV7ybH2iGornEMuetGoKPgMgyadwuJVRaKiM4AJqKa6wcZ1JGtKSn",
  "key27": "66k6pVvUbK3Ry95vutYZbSj1riEwiEtdqJ7umqLjEQDwaeiorKVbZJtFp3ZjvhN1L1eDqbSzt6XYdKKTi7iqubv2",
  "key28": "5HFVfvnBNwjsmPEZnAyz5chwFfBpxCixp5ao63BCxW4rbS54RhtUyopMzefgsCg1NngptWMrrVyLvWdeRkFVSMCr",
  "key29": "4HF2S3VwSTE2QSfKeeuzQimwamcTuDY3HdA71P39q17ns1uxuqDkH4TCYreo7rGnTYvE98ikgUmGP4tXA9k8tzHY",
  "key30": "35yZk1YLA1zPAdDA7T8ThYQKq8gikiN4aTwF3LStyvnLPFf262SHVbAczXN9nrgwe4EM5iwifub8hQmjqvxSUhev",
  "key31": "5SX9DDK5PYAMqaYCYdtzXApFW33xYn1CnrjpQ4WMisjZpmugCpGjnai4uWPuBiwM4LCpg3eJkVRF4BoZ3wGWX8jL",
  "key32": "5jx8w2e1PzsmsY16cqEeFH3WoSnbDn1mTHazFyR8kZ8Ywkwj8iXaH7ADwRmmufDLGXMiNy7drsB7U6vuPWEFqSoz",
  "key33": "3ni4pCu2hQDF9VgPMzkbx5MAKRPqkbvY8gXpXGkbph7xUgwizkPZ7YuCMSBxxVkjEQPwkqmXRaan3WcQSDCfpgC",
  "key34": "5SNcfHPUb7iXmBhEmoqJGxVacogreA6jkgE6SZRgWPrToBqzFpbL1vGnAHSJnN23JHVGy77cM8ajh4Hhm5v7d6C8",
  "key35": "5N34HoGc2bUYWMPrhJNHro2pJ6zaX1JLFMsP9bYTi7DgcLohcsp18gChRcRmoMmRfYKsD4t3PMBa8hxFZ97Qz5kF",
  "key36": "5fvVfEKzPddgNCDbqAoodAxM49LE7MmMrSgvKAEHt3UCrtzGnyW5u2u3RBaHfkRWSJcFMbEShTDBinMG2VoWXEs9",
  "key37": "3PfsEEeHHZWxVKWod1YxAfERp4XL3gxQDqg1XZgqEDGdUVqyvzt5sYLRfzUZ8BXNCP6E27Y1iKJsxNXBuwLTYwD5",
  "key38": "FAXYjomSNXmH8SHUGCWTZvYYHrnVjTV3nofmD96wuPqnbWCqgymJL7KYjRoKFsmRKwtdxakoG1zeTdMgtYcjD9W",
  "key39": "3vyeyeGqqfneQ9NG2LWdFuXniP6CMVaJiQXZMNdV8EjLwkBFUfeTgvYUgAdoz4n19zSxHeaKMnK8yQFV8uveF5P",
  "key40": "nXRTiyGEoS6QpebVniWRvMos7L1d8LTKTbctq83xxNSC6QU14YHaLfTYQgjRVpzA3ESTmbTyFZGAPek8iW6fLxD",
  "key41": "AeQZinyGPCRJKwHmSx7uChTR2krrPwPDUmmLWD6FXammUqvyHKP3wmjnMUifnUUUXpPHJ7DhCdroiZkPGBoiwVJ",
  "key42": "4xQUrNnqVtPPdzWGRaTSVTgsPtmsL9MnAjEvtZsVk16RJudTaiA88S4GMox3QBE1JBwsWANWhQ4vAZRg3LyUJwsf",
  "key43": "26NyX5975DJKHmHNE9WNZwcRdXM1mGDJqfb5dwt1K8tusnTFixwhoy2j6y5q73SMAPPSdaK8nePVvaqX2vcViJJJ",
  "key44": "4RqanQEAyt2sbrxZQ7qh4UtfjMWj6JwREzSx7FnTjRjJNDR832EjDTSTyWebuvrpQHSjUT3wKoKnunJkPqxW2tZh",
  "key45": "2SdtFTL5UtSRCLpiu5sBUXeNCow2zXZu8F5njTq43xaL4aW7PdcjhQ6cGG9R89ZocqkupN6VLkyuTqWFpEqw9zCM",
  "key46": "3EEUPG1p4tWo8kcTifuAqKKPBKd24BqqVVC5NnxiXEaYbJPD1UVVUypeMTb9zLgeCxJ5EQkJAyzqu16KhoQTwLAn"
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
