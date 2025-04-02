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
    "5wrvsixVVbMqarN2afk6QhZdyiB9eEZp75E9X74FaDPT1S8ZBJ29MTtLXjWbXy4dC1RrxKNt67Be9g4yH8kRCMcA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26mdDAzDYiFhs45EXyDG8kK8Xq1cFX6VwGMGVofCBvX6xg1WFFeCxfMafwtLqncVex6vAUmMUmtqqBMgsH2xm9Ts",
  "key1": "2xdpwgnBYj9wTq8F1YsnD9ztUZV1vrzVtA2UBGZQRoczSWehPio4rj7JK2pyQsfVWB86ni1xoSzRyD6ps2bRRHS",
  "key2": "5mdbEFCtey5a7osBXhhySsD2aDqkmvcAgbcuU25XwYeYiiWhhuf8A8wMa2qJRaDCdpWusM7zh5nriVjZD33HX9Fn",
  "key3": "26ZMXY5mfgBvnqxNoxeuhzTKBEMcbK4UKQwbs9uHmqcKoWtDhqt5gNLrb7X9bpYwXZFwC47xn4mJx8Rwykfy1a6F",
  "key4": "4R8PtpVAEwDFFHZwDLmf6JxKGFS8kWHYrMckg5MiieDL1DgCgG5dNg3bWAmQf1PNqrj86mrcNKUsZXt568nUD41V",
  "key5": "3ZWHQGbyxoazZ5mFf6GshG3tmyWRVDivYFEBCBL9zfWY1v6wZWTJGf3wGLuM85ys5kNH29qMGCWZympqZh4zgEAn",
  "key6": "T1JAAesdWCUF6UHBjWSY36UC97Xc9EBTNBwxtK4hWTdRthjQDFjkadDNuT84kX1K9waMftAtVo6APyBYznybUNg",
  "key7": "4VgkuQD7BCotuk5MzXgcYL8q979FRMhxJcXRUjSTmhXFQuP9bx9wdizLcD7XrkeFJEWVBprsTBXhMoad7Aj9fzBe",
  "key8": "iWurrWGXX7uTHugYHd8buorw3aS97c5jP63iojkNmU8UdHTw6ZDh538ycWiebnGqFxLss18gJmNyTcmHMqUVz4R",
  "key9": "4NVeCm6Js24HCwqU34hHt1yrZuTNmELkB4zWo9hK5iSCEygMtyvjZxeu6fmPVvVCyHNgDLYGM16VDKdxB5vb2gft",
  "key10": "x1bN8opFcNtrXFC3rJWsLnD2FVkmrVAqWptkf5bLzE2QoXmc1TdNUiLjuamVvDssuKiKU5avxU6RhpRFQgzCKrS",
  "key11": "2CeJwxRXCvHGscq84PMoJNhtF8zMVoauLAk94rK8pXbEGzxTr1P2ccpe819zpJUxUyp22AmtS6MhNEaYD26J9eBg",
  "key12": "39Ysh9CJZcfwvzLVsFBzZf7ZTy5CCcxd4gU8aqBpcVDrBz7ahFe5euN93ckycik4iJvKes9dGFsTSas65p6vaFr9",
  "key13": "3Z3J5HmzmivNBBUW9WtimUCiiDrQU37jrAKUHvuFBRSjnUHZXVzVVgnCGnty2LJyHHCu4p1E82HM7n2eh28veS4V",
  "key14": "3TjgUbyqcRVbvsKCEWRfzBiz6qwfFcYAYVVvE7yJ6sE9fZ3XZ4bUYyshoupvh1m6i8Q8d6kn1VPVex7vLPtYXPxp",
  "key15": "2mCtYbM1LWEkWBNHT1DmLWbnuRJp3MVchrQXE9k3DnNXVonxkyGei72qzYCqikh1b4B9A4zpZgzCUBNM8gmr8xs7",
  "key16": "51VcHpvmc5W1r1yP8oDm4W59sv8nz164U5WzwWsB1NqeRVXa7qBL8ZAeMnM8PVUE9jQqWUtr36ugZgSaJ3MRtQdn",
  "key17": "2NVnSoi8VLU3z9hogWmuGCavA8HkGTjULdGP6Z5nwpRFfHUBgf5GZWZRxVMtdDJq7vaZ9QMmSGskXMqKpuT2GAEf",
  "key18": "Wj35fvbZPCQ3U1KnPFSuHsJQP61T1qnjoyUhtEH7ZJ1e12fWnimn5WfwQYpPNBsRd1ZjfpAU77aUyqEmYCLDL9Z",
  "key19": "3JDk8qkapbGenT8DtyQEes8GUnof4AbJyP8hQQZy3xd6dYwiaqb1WCuiXkibtfEYaaUK4gqkYwMTGSka83g4paEZ",
  "key20": "5XsnA4H2iKD7T7ALMXYhf7BpToXf8jWEKpPjDB4UUqc5c4tJsTHoEt2Ur5oNW2m49txGmtFk2WpnBwYmnLUiZCZK",
  "key21": "2qntR4tqJDRuNPnqxvGXFxzcv9XCvGrZih5pWCPKL7HoxPJtqnRVtEutaiXo6jmNs8CakYSmJ3guseJYgDrw825L",
  "key22": "3g78otETsBSANvWWT2eZ8qPfPQP68tfnHzXhXKeYGBR2TYVfZMbdPDDuBVuXxg5GqPwcPU4WuxaoQew9m1HAufe3",
  "key23": "5YdAUExv4RZfS11hMbQd2iDH3tXjDQov9uWjRR5t8f7toHvq13bLKZZXGDGM1b97WPVyu4PNA9NDBtPv5gbJCd1o",
  "key24": "4Y59JuAv7aBDtiQj1KtW8GjJvNBGYnNdB9bPYRb8s4AcHzZaseeY5zWDKC8vreyCiuEdUaGcZtjhBBPxCJbLyxQC",
  "key25": "4Px2oqGDgfBJBug7RTvTqMW1yDfApnVt4NpTAkT94an6S6pEhN3xPBu5DuonZVYdnV3NNvB21sc5Um8fazc6MMHH",
  "key26": "5zryuahLeQjg3hra7T2dB7pSjAE42495gcWNudzKAprGGgzF6sE1mQtQEnDpPA5fXbnfbVh3jQcdK8X64t7ATXJN",
  "key27": "5xGJT5m31U79wa4BiDUEMbdXJjzeo6XSp9zrwigSAZUybj33mLrjiG6rxRqykjtqe9iHAV7fe6AgiWyPCVVseZFk",
  "key28": "2ScHQEDT2GYFaGfS42ypVuGxu2KwbB7FFDdLPZBaHci5gTCin45voZ27x51ucUuoimJEG9Y5s1YDSiTmUhQLmVZv",
  "key29": "34HsgEyYUo7QQsTUynocyTgsbKY1TQdJw18bVJBQfqNmVVsnhTcXtp4KopkYfnfybegL5mXtv8gw8tic2uGS4c3f",
  "key30": "H5GaWGT4ZVMeYrwmd19sRDgyayjjz95oZhwKKuYHvcjLmxg6yeDxxas2BRYcU1ScxRHLBHFjHFUR11gRAEGWvw2",
  "key31": "455nsVyRGJaYJtLWSkeuasCFhe9H93F4NyBRoCyoo89LHiqVZdGPtE7NZrGwV5SmmMtVnNeW6azmZqC7jgeg9Qmd",
  "key32": "4dhgWA7Ucqsg68HHGY1JDNNDrJCDB5keNJ7ZKkQnf5HvYNGygWcyGuSrQrTJVFn5MCbQhTTsnbxfhhX7Lrm5BhSt"
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
