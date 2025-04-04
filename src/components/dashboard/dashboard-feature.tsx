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
    "2saPkCMj5XYvrBJTTjnyv3k1oddyVUr31Bu26UmEyZLWyEb8jjuRBaJu5h4wSKKyBgx2EbbX5GwqBSuLzx3RPkWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mHAZ4mFzDD7h8TWppP9kAC5VS9UEgFFT7yMoV9adK9yPTPuxRsJQAbZZW483x3Ttw1tdgKQjQZmPuDJ161rthbv",
  "key1": "4Z4zwbHo9MxLJZMLKK7qX8XA2KCDFXYVtNwCPiWigGvxXGPWPBqpiF2RhQFhKADEpFbL7fx33jWjLsEn2fGvWDwC",
  "key2": "32NeLPNdZGCqYEYmsTdfKzpJkCbdkrsnDurxPSpPEH8SRsjGi1Bw7pC9EE8KgN78FFGrmV6tsawQQmZsceYks6KP",
  "key3": "NSJfjrjLwufYTTkiqqHhXUZxP6uEoSbVVbmhY31Mr2be5kmS48rawoFUoTwNZcWogS7qh5JEPKmYCYbM8SmHoQn",
  "key4": "3mXPStoumjWj63tQdnktoh4g9PoCvLTggCt3KYvPP1LfTCrQtDQe6AHNsqLyKaAqSq8tnofejF68PupbzTZ5TpSg",
  "key5": "51C1nmCNJspRJsH3shdWpeb1gRsFb6W79uFedtbKfQzNHvUbFJFqocdrWe9MGUyJ4pPuEdNAYy1mys13HXTY6SzY",
  "key6": "dr3wxi2V4ekRTxkUuYDacjtZhVp2QVuQseUf6VcZXPjdt1DVy6zb8oN9rDoy8qoj9KF86Nicz63HLxgMyvU766T",
  "key7": "332Hvqs3C2jd97J2BXt4vGyk7tTZWfQsJqiYmkQokFPbepaVNHnL35TJDHdgs7vNRFh9wbTFFP85qn3QEJtirheL",
  "key8": "44Nur9o4iiwcCMeuZ1o1SjL5oDPMp6wumaTy5BeF8gazQm4zwsRrcJebUh4gYeehivVthpfaMdr4ZPAUTgyYMNPT",
  "key9": "2gabGQ4b857dpbdHDW2TFSgs3Ebik8LkUfgt8eVznWMUgFn6r7fmkNpPKW6JZettiv55bKHm4W9ptXBs7qppcdbt",
  "key10": "2eQqFTTvZmebAvnmocvXdb4zHY2VL1CiB39U4pP6Fa6EW39KGL3FNXoznovkKtqAbjQQgcP7wgvNuaNCJJb3ffxL",
  "key11": "5CZqo5Kpavhb11xMK8ugo5VDz6KBKaxT5anWNVTPW5wfrsTMeeB1ksC2nW47m1DpMZbUwgSC7dsNSpCfLv6xLFUb",
  "key12": "UZ4jxSji6HR8Ctu4Zc1Rgw2WTk8zXaZjdfDiYhHbZeStkw2yrr91XMvXAztYsrMzHw8gJnibD3Tc2k2o3gyPHeY",
  "key13": "5whkecsfgLHHieUxz8Tb6SsPMZbjLVY8dk7dMTwcNraBZCrz1H8xnV48yA1W72pkS14bEnXSSWGLAfTd7JVLaeBe",
  "key14": "4Pf1aT6q4rUGrKXdCocchNBJkg9Uo34JTSSPDQBV5CMD5r3SF5RaeGssr4hdAvzcUSZ6aJSvr8hiKHRf4mUSXKwP",
  "key15": "5FqX35Ua2SvnhHXDrKbbYp78TfDEWdKLn39Pt8Bu7uLCPwJU8ag1eLzaJGz8TaDZfQjeAnAr2k2Aoy2nEwQE8go6",
  "key16": "269M7BC2yPPWCqyVmJ9c1TLctwiuHW56xNwCecr1EwuJRPYNg6m1pkti4LvWg8CfhqCfLmJvLUgjww1Wkm4tHsZa",
  "key17": "2nS9C9hRhBHeRQhX7dHqmMKKSAS8qvV3DRc7cSQakT6U4GYxEUhpcde2cQV5tgk7tXvoZCNfFxKXgi5tWj2cnmjh",
  "key18": "2N8z3uZBi8cU3QEdHZTrNjK7voUN6dATShoLCBUP7DWHaqXkMj7biDAemcEwGRfbgLQ48rSJTUch2QjhYd6tUqCH",
  "key19": "24XnKNioRxoBVMWwRsswR858rR9amQU19CGwLZcz7RWJiV38nBZRaNFmp3TvrMKzQfTMFT7MbAPS8CJuDwER6LRC",
  "key20": "ZKrAUhnJojvMHKnEZx8oe1sfEjAtoHJzp3dvNuw98AyBinMW37Cayk2JSfzt1cKF2AnQa8PvrAfU1t7AnQ2gW9r",
  "key21": "6ECeXm11f9qsBc23FUyEXyZqTBFJhGsRxGBh4zhi9KdppkMc6BU9jbfvKTfvLE9a91NtwBtG4nVC69mNy9v1pdw",
  "key22": "4iMsnn61BX1oVfeBxzxV7aLf3fK9BQaEyRG1C3ka563VKyiBoeg7btHkTFtmpg5yQea1CabJn2VFJFDoBmzWhgyQ",
  "key23": "SUhfHNPRdFQjmNgwTVNAYtcXHXma9dWVzApX1NMJZXsXrd8xwRHWR9MSpbnbx6dorGnNRG77vdkAYScdS9sHxBe",
  "key24": "2ytczPVTKtGGZGaqGiNNett7bVgrm8kyjSN45Y4AeX4bZuXo5arX8wEQKHZmEyy4saNya9XASE5qtiuDaUzQbLhR",
  "key25": "3F52hyauvgKqsBJ1wazTNq5WNG72Xg3f4QHdqqUzNzaTyvPWVwNovPDoawjdJtUJ81FNwzBUjofJYK9VsNsAnqRa",
  "key26": "42TUJAMtWaMNT8cSfoDKzFFuqKyTnNDq5CmVAJqAJgP4ggR6qo1m3p314LUMnazPqnMqMaorNp7zEjizWyPh5GG4",
  "key27": "2QucHA4U2nPZNdCBJmumipwNLbkn3gjFCUJfmmaU9gQw74vr7prLXiXAaD9cmgfJ9RcqhJwrZGiakA7eoJdJ3XLV",
  "key28": "3WmBmQC9D4bQZDY2LW35sw9cNULEU9DX4vmNNr5q5cEpWtT9AJ6GQe5tcxw3i7bmq3R4rTiwNff7ZnnMr7NfxsYZ",
  "key29": "4xQinAyFCzPJNyiUB4b4wD76jNwVRJJwKNYFsFjv4TRUTXgdTCx29qmCHmBdkdbb4fm732Adk1LvYZ2At7KipXVU",
  "key30": "3ywH72KxMfyXqi8nkJAoERwUapyPtT9XfXEWWG4RCJhELNvfEwgnYWLt63qB3WokArkRWMnPMQJa5Mkmy3FGz3Jf",
  "key31": "4Pb36b656jCHWNmgQpiSXKN3L94MY2vhsWYkWuh3qKwneywuEWAx1xNFsBp7Ps8nBa7VRKQUZQnqnUMqgBZpiTjv",
  "key32": "2tQ2mczuyhUM5W8vSMiLAwjSZpgDn8nMtWmb1uRa6CpKqPsYAebm6RzHyfFBKporCkSW9CSj9igovQ7aREmjaXe9",
  "key33": "NkoygfaoYzLqCVXPPmYFfYpqqvwLojxGBTFD2f2bt4xpBh7rPdNxMs1y3oh6RNSgsfCoWkXrpAA6hBEBaY4Tuzk",
  "key34": "4gEr9YnfjLWtY5mn96ZEpWJx7ZnWyBwJWLEwsAQHh25LgbUNMNW9nLVKS9KvUCJCFVNGARcgJDHLgRzeatYHbDU2",
  "key35": "59NhSQQ4Cjtkvgauu3rmTfRM5UN7jV3wPhDzy4Fn9qq7KJ3yykWF8A6AptTc1sHfNtdFJ1tLNWxM5VbS2nomj5Hy",
  "key36": "4sGiaKVkR9ukP817XKsRdwuHLQygYzPDayFiDQTp7yEP8shXiy5KUZQ9YqKy9Z1JVVQLDDv5S3a1k7rEVHECUZA3",
  "key37": "2ocmCC8Ai9pBeC9EXS9fdusvdkFgWXH6Yowuzi8GxAU7jPP2hNWb3Nei5EwEdXJGJM19uw8hNmEGhzdTP7SRdtLU",
  "key38": "w957GjKH7CRyqEnFmyvURAyCNySCBpuubu6TWNZNQn5zfYPQvtXEYjk6APNG4Rns54wH9kmHMnHZGvkQcyGLigV",
  "key39": "28oceTozWtRkwVG7GgKHcuNLV1CHVPFtjoZZ2T8tRDoEk3imdsPZ8AHBMzHyTU9neTqCD4hrtB1fNPXNL8fevHfb",
  "key40": "G8cBmZ2TFdZAompuyx6xK6PwJEvD5EQYxwonhFYwceJHSKCuRhs1pxQ81Jy5jYgjGm8SNZhj1YxXtU8aaJL6bFi",
  "key41": "3yS9dMLtLPTrQVr5L1vs6nGhM5ZjhcL5nG9h5sowNTFkzCTunb7aie6qxKF7S31JyRRnRxwDQqXv7HejE8Ebratz",
  "key42": "3n7DJHKFwrSGUnNUjaLiSnAgZK4RrXjnL2Zh9ckxy9qJ7pynCzdUDJVeDo1FBkaaZKdwExYHQhjZD5yaae8UsbCy",
  "key43": "2yhY8mf56hLR8ZrXpVeHmD1kYNKnEMiiUf2pkS6hAYpQn4ZrWhDW2bU8eKkvM6sMNVqhRdyuU4hN4kPYeo7LeALt"
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
