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
    "4DZsMyUgcTNR6MQBhSMhXekXcersasxUdnXC9gaeyKqiwZ36m46YBvEHTsXCoHyy1e1p9cUWmLheKPwTVx6Vzru9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HahS7karLwKAarrsYg76AumEGj2ErzsTuQWw5TZ5ffaCJazfg847rN9EvB4BRxmWmrZVfNZyuBxboL4AcvkdD3b",
  "key1": "57Vjtma7Twve28UNAD24WoJ2i7pwGjh4HNfKcuSSQbwt8ZVUzERPNnSk2EB979VQ6a1PsS5RuWQXHwv1qnzL1YFV",
  "key2": "5Fg1V517tKqGPivYDCFVtBDXgMCjgCTF1f6Z1j8Hs1hxjzpYLjU9iZs8htRRcUXyzXXWFoY7PgjdgKX2Hw5igT4X",
  "key3": "3JYKQdEWiAJBAKQVNeNXkZzRa7KRkJeJWQLzcc3bBLftrKCTFjUJdjVKBatuFSCPwfHCnYmhrFjDZuSGoms8oJ7w",
  "key4": "2gUrCv77rEtx593ZjPTqazYtj4AbXhWYBViLntt2tTuN1n4CSucqxNVP7smeSeDYCLbVrvpZgs3FtgGGDoK48K26",
  "key5": "2QzMSNDAHmBFbM5R5e7xvRDjnhRm7y4QLh1zBVD8DUhg8d2egWQucpsArmNRbvnWFdSGSArTyrG8qGwVkuFT5o88",
  "key6": "4yzBmwrPV1rwWy4xtkhb8DznCPTXevCgChPtRvP7uoRsAjhAWekHoBkgNnMbjvcBunzwE37VwBaZGHMSTbbaRM8r",
  "key7": "2mWj4Tvhbeizk6NuCBgj7v6gk5D3bshrYr6H8TuMhYCLBG9EDU8gDg8W7HKaMv4XDmZQmgFD9Nahqze56SB3KtsE",
  "key8": "44EndqB1XaZskTx3NVF4GFKxoEeJkRz88fqUykGkuSbjhzDyxcHUghWZShvt5iWQQBsDjk3WsoECSRKThw3hrv3g",
  "key9": "2eLqUXWc2EzeubwVahef1rEjncT6FGD5RnfsYJB1synbjP8mf6g3Zv9WJzzLXn6ciBN1nJYZwphcUaUtqFeN7HC7",
  "key10": "5pUiHcrC74N2Q3GTAqZFuV7DFjx1tWSX7f9SQocE4eQvD7WAPTCU5dZm38uhguGxTqt9cmyEcJqigbCUuC5m3edB",
  "key11": "3yarjkSUTiwpFGUBfRS44TAW4tGhL9YhiNsPLAaH521ykmTfY2ojTffLkCEBjkyBLhx7aTRLe7ttDu8zUXiA12cs",
  "key12": "23YjdHV39DNSUSERRFLY8NoYykQpHiGtMwEpZAG1xTFemhGA5kNgDK5sGqGUgA5K4JjbzSpKVZEYB3BkbeyBZjqv",
  "key13": "4TCDvnvhvVcuhjPajah28XbmhggPnL1PWMcipmxXEGHxDgLTPGTAbeqP25TZxrkF4Wa7vAxZ5P4QsKsVQLKjnuEj",
  "key14": "4gmrTCMbPjYGpBDHPccHF7DiPqrxdviy2sB1Kie1hVxc8VNhutqE1eMGV9FZSktYmJbLCjSkrdW6w7i8Bh1bDrvo",
  "key15": "5DdJMF9e7fY6AXHAiuSc4XB8FrC4A5NQ5xNeQd3n2TX44M1LfRk5sNgfFwVSAWVPNDJY3cjxidQyfLhJ6GpJKeKu",
  "key16": "4Yz39ufKQR38wJXVbMV7Hkg2kvGHgcSTr6QmoDe7dw1c6J8WtLzjBkpxg7pr7m9mjWnPejSJgjMxs4N2Fb1NZPuP",
  "key17": "4kwiXYbnmhpimRUxiQ7uU7DqXBfhsRSowmzzEU6donUwaFQM6tBBp73YjizifPn2qiQJWdRPbpn54Tss3QpUvCwX",
  "key18": "4axDrPPGb8ryD6NGH5aATPQoGPd7gwc9pwuNUAD8Kze88cpth2yDFcWHfyMezK1peMafvuXxzH7WbB6j5ii8DKgX",
  "key19": "2PZTnyeQmHrRr95KK2cTHqFTsv6VztZnehSdb3KAcdq3fdBhgQ8wbWRYbmmNKGUM4QKtTEubx7Kh2tCSEEiDREUw",
  "key20": "4VbWgJma3BKcWhTiYTvk3QXK7wVhfe4Avy58VvWMirz9YNvgneQJqrwXwJYxPJFf87EZC72ig8innHDharkkFSKh",
  "key21": "6g24Subgqd9VXE65x6yGkcDcRS4hHGSDpE6SpNcGAfE27jD1cqKnNVqX4J3anAakCwUw1D7VKwpo1DJp52hvxQU",
  "key22": "3SXhcUhsNxnzvtphU3869LscpbTbzgqjF2d1me5jAJ7h3XezTYCFUEGix3nisk42NRx81umvwJSGqBajMtFmXWSp",
  "key23": "4LDuxbfywyKVaCpvPkodZWJfj9NABmV1Lg1MCLc5xdZ8ySQLgSyBZpq1Bg4qMqzhmJ9fWfQsWZcZmsq4fgygkiqh",
  "key24": "3xxZ4PxvWUsf6RzW2s8VVLpiiaRfpUc2LBXWytHjmTuuHnznzi84EGqmf4eq7khtLFt4ESAWVT4uS9ehyo9kPdCm",
  "key25": "2nw84HM3KDJm3MxooMndpjjSieqgTAqArxDPkYVzLuuwMLd1z9qhNRMmiJWQUy5gKC1KG4C9DghX42FNigJCGeip",
  "key26": "2y89g3yYdG2u37BeM5UJtpU42tVupGEZCd63TqinA6zxgmqH6MuS4GnZJX29zDEL8S4naHjSTWME8WYndeaNyu4p",
  "key27": "4AmsQLqzM1RWhptJDScxi8gHtEw7RMGau34LieKkDJNXEpEQNu8uMwr5s1EfvmHEcMxEDUNHgkgKSQAb7xyxmhbD",
  "key28": "5NkYhUytsSStehNutkXxsfNCnn1WZpxD5xnarq4eWYYTXhSCNebzCteng1NfsUxfdr2bsjzHLLwPCirezSuWbsnt",
  "key29": "5b5FfQCXgYggQkUafNK9BPYoh2Y3kZGyfEm74mY29eMkJY1mVEpJ1wNbWaswEcHpKQu7PdPuW4mRnLmkuGJaS9gC",
  "key30": "2BEWZtt7RNmmjUnbgAqGPDVJ2XCELoi5zx8gv1VMw8wv3FUBGJxKpKiaafKRcStuagA3WwAeMKfErZbXRQKWdn5D",
  "key31": "pztNtYaaopqpB93N1Zt4UxpdG1iMRk95jfTVsDfKZUyr3TbDfoTMQZSGDRRtQ2Ve2bAki5sd7upC9xTywYR5BWS",
  "key32": "4XJDsWqEXi3BS6An69i3cxyqKn4SyPchzuojQj8ktco2Ld71GSbyGMVd3pCv79cJzEyzxhEniGVpproT66DSSoja",
  "key33": "5S7xiyiX4JqAedWXaupnKYazfg6ofyr6j9JtbYwGQaGdDugncR4swupZsS1attEU5pppLAvfdvbbJ12NwtWB8u8i",
  "key34": "66H5zbCex6M2kQT7mMZSzZEqVfWgD5SjabitEPhMZ4NWEDVExPnoo8QwZdYcabP8b9EMvLPrCxMpo5AYa5SFDssD",
  "key35": "21DT9nQUj3ouNXvmrDYjaWHJiaNhajfwTFc5LreqkKZ6WkQFnAyCjmsSnt2nZvaxfFNHR1gv2PCiRSJ9XVSooyya",
  "key36": "47yNie3f1bpCgM4GGFzopRN8Zar1gp6Z7trNjRNi7bjYXzwBzyaMsjDDjH7eb94PLAup41zLUh6mLwwjA8DaE5uB",
  "key37": "5BxUmfizyjUv2S4oGzzmSp6X7Qcsqmgk8c8W9Z7Fd7SkHbMozv4x81nDsbMpaNQn3JbUTNXPfSqMBXGs1LnzpJG7",
  "key38": "RcbsBjNCp6jyiq1thupm9TzUMFcBQCUNX2zz6pKjV1nyRzpDaEZ58RRiTag8xNVL87qWw1wAUei2UVMYYFHsxz3",
  "key39": "2qwnBxmmddo8HWMVCkkYgxLdKHPsfqHxf4tKGLLHCi6917Az6SAHmsz1jnxmpsvuTBwYiHRxPwbY8h7Rs5f9uyNA",
  "key40": "588b6dsj9wH8Y5EvoHtTNURTKXoEjCPb1EWF8PaiqbxoBeGNfdHoyoqrNPJpQthuGe16GPdftBuWR6RrXGMiXWGr",
  "key41": "kuJSKiBEXo968jDRdTBjE7kxq7KwBtTxLoa3bTPYNdCr8YisqBH3V9JHmWMbUNuoBuR9CN1uF8s4mk2nmtVgC6V",
  "key42": "2G63aMW2JDigPMF53R9ZxPCC1bWyfPQTqsfCGZ7o7wUMKWsfchsAp24uwCu9gq9DWJBxavfSHQ2ePtWrMksraAHP",
  "key43": "3q3xE4XuprAUKJu13sPNqgqWUf11kBdMM5mD2PN4xK7RNK9J8Exw8xVEmdHG8UAF57UpUr1R5xjEonXD1pkttYYQ",
  "key44": "5jX3r72SUzzRaE4FDEF7jcBDkz8ec2YwDAuwSopgo9d1U8AakfNVxygBRVFLn6Uf4vutKwrEAk8VK3uhrSDpYTdv",
  "key45": "5yd5zYx7vuu9XFJ8KwLfG83kutsY4zqLhssMwy17o9tRYqK5oguXf3w9zV7KBNi65t8E5tNzPkyFYrEHpNkVhxK5",
  "key46": "4xT1NVXvNHDC6MsixzTmr3KDN6kLQ4RKiBGxkjtfhy8kBEwFzok1eMLVw5DSv3WWi7KTcGuiqKJGbjegDu4fv6oZ",
  "key47": "515MiEoYeYSCitNB7ajmCd9VwVVYqpZ1KGunD3tEmujRXAdaLXSXfwfk6owajS7tjn7Ck5aBHjwP8bBA3K3mfRGy"
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
