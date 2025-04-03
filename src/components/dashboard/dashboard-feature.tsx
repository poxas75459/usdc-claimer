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
    "53F1pwyYRyMtY3sgKkp6neMssnN7pZPjok1gF3FCkY89xJHSUknJcMuLZpYiD9a8NiAfHubW6B8p1jitsvHE1qRk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jdoxyw1dr1JtbLLCicYsqUCyUN4guMvbGMcJZdo3ghXfZVjE8jisjPu5LjE75ymCpmWftq58CqA1Q7EqxXvadC1",
  "key1": "27f1P7CXwAAS7FnkMs4zjF1is5588UB89KdjeRxBiCwHkVSF1d72fESrK9bX1c4pHdzuNomHtzRpyEyDs1VBsswx",
  "key2": "64BGYvgAngqJ62HgwAshazRUwRottVvEokvDB6P9A4FdRzgGctXFxwHksdRjKhWE91VZEfWQSwyhBfJpymacY5LT",
  "key3": "25LDTGJmkczgFbwfHbmM2XFZMuVEoYZBgikFLtmRQtW8z1LiUfmcdpw4Fkq1v2NLAV57ViHkksHC7yGgVKw5FGHC",
  "key4": "5utwBLL14rYFTiXHqZ2A8miX4hvTRGUtNXm2zZQSE8q5Xdp7oiJVcZk37GFb6VxCFXkzRJw2JyqxEqdCgNuyGEj5",
  "key5": "2XtQuxWLtkABGX6vcfTNFPGfJMgJW4ui3EEkisWeLAHi9FMTb645u65uYssL5jNcJ3iazQ3rF6gjdpsiLyVWGAHG",
  "key6": "mh26YPrJ4Diep3dv2YHEMKN6ezvdgu7n86Ebb6QH1JFCxcooQCGF3mtvWE13VMpjPfZzAdKo4nQk8akApRmydYQ",
  "key7": "4wFERNVpKc2ZBvk15dagyHX3LT9o8WcH3kQFGXHRLpddg4Xs7xUeoKH3WWupXsecoQUBHc1p2rrvjK3pHLJEJN6u",
  "key8": "45Mnqazq9GdFtXFpTEYtdfMYg7N6t2rrkovK3oX6QBaPw5Tip1fnHowWRKyfYdusuf165P93SbkU2ZCfBdgTvZud",
  "key9": "3GxvLVNS1UhMNwhbRna2FZiHnDsmGfc1NbTAkEdZLb5f41biRKdCD9664oR5Uh8GJpFVGXefzmA1YVoP4kBuisbS",
  "key10": "5h1qH5wcBHHK26755KTUQ1Nfitan6ynQ1HNUzXgbtJ17jf21hvsLnyaSBfwNNdsBusVYPiMvBKVAEQow3ufLQ4mL",
  "key11": "5K1KwSuQJq5nMQapfp3XSeR2VPbc6drdZv2VfETrFD5744JsV76xbCAtK4FLUWrzfVqeoafyKWEojSJJ8q5EGm4x",
  "key12": "3LNEvhEvvbvfbFLv4qc4VRcXAd5JuppqrG2mDusYbpYUonzdMCTJsJXH9YMjsx385mGdAyjYqxeJcZwnqHW8nbL6",
  "key13": "4JHiY269VVLDSN2i1YdLXUTCQdfBXAmmLcdj5SSxrbC5v7LmdArtzPb4KRZpFVaZbAJY6mMGyoe3gjL8CFoMwxJ5",
  "key14": "64h1ViiacueSBfs5gGZcgUx6t8ddmGSkro2NchvgrbPNfqi5CQSxaG3wZDPAiVBnSqX2K4UhxTHUnbUHetdZSHka",
  "key15": "2LDornj14igfCFddcL2xyt8UrktrPB9zQXgoCr6mFH9gMKMNDveHS7pLiUSRqsxUob7hB52y2q4RP8zC3jZtTgmh",
  "key16": "b41xFWPmd6sGoWGTkSGCTt3vQxhgaYSuCgHkfcPGS8hVzaPXZjeXHV4PbnFyJT8YYDeXFGGjtyygsByn56oPb5m",
  "key17": "4pTiTDhJj57hzAbSHQZq2AeewRwBKSCVmbgQnCSE2j7teoeKNBtJLswbTLXEEbiaU7WjuavxxF8w4FsHJ2zAFLH4",
  "key18": "39vmYayLuifpzBNv5BGz7epes9juKvPwChs62Y1pkHLDUFoX8KSp9DhghuFouJJKyyoYujpBoNiwrurH1oNwTJ3U",
  "key19": "4SXYt5J1XeVvvF8QMKwfz5QWVxBp3eHMDcsxH32UskVfEncZPhEcwxEcYAEGDVKa61Aee9B4QsX8AmFGFb6JGbCg",
  "key20": "3tvYhUXt8cQtTipz1iazqDBtHweisgkd6rLvNgGSzKvFPurgKvXJtwp5zMqWe3HuhNVpPJ8mHYvxVfrQMztpG2Vn",
  "key21": "5ng2imQf1eDT3CjjTpHkpD3SYnR6CS2iGqf696VDWzftabukMUiT5mbExc4Dth6JjMSiBiWfsyAsiVjnGaeGDhhq",
  "key22": "3MzrvHydVKh5euHyChvqWNFyZX7moUbWKs1NQMY5MPmVfP636m8bU444c6SwTUMDkXaV8LwXoyhgk4USxFZMhWN",
  "key23": "3MLoQhGqy1Me1vnEkmfQuENAvKdycygwtyrcAKXuwsSpRXagbzpWWupZfkLLLbikaWAVHrBFtWSy8WrMCHT8nuW4",
  "key24": "4FFagAbgq2ED2dLKi7TnhfvFPwgPyD3cFxEvLqWxFRBFxBAKYFSrCawjAPRcrREYpCRwbqjyTNx1qzU72fpajABQ",
  "key25": "CJeqWEELKsiBC1sMLG9pYJSzWygy3iTRGy3qpiRHLp9ehaApVBzrLPiTjjzJ8vctPQi4vT28Zax4EPzhBFkrLcP",
  "key26": "uUMXrnya2xFaDXrFaf543XYaGqnUAsfofGaUcuuabrpg5s3T8w4kEBKvc2ZXqpKh9cpZ1HWeHn89kEhyHgDjUYP",
  "key27": "4gU5G8H8Nj4stM4zwFWgEmYdZbZKfjNnTY4BCRidFpNNE4s3k2Eezqm4ihgaVdkV11hx9SEVz6EVRHzrPdWmDQDK",
  "key28": "3zY8mTQqEfxNyeG6Htss1e9ZHYb7L7HaeL1C8qymPft4CziJiYFGsYMPWXz4e5zqTD9t7fGVCVCLut5Kv8zAacFc",
  "key29": "5guJmKNLVW9s1uh6KgWvoUr46TTFnPb7UJKYVvJdy4SwnfhzsVgVJGMnZCHvMBiY69KcxmsyvZYdPr7gaS4n7hyV",
  "key30": "25Hecu8M7QajNxJYRUg6WYb4KDXBz4CUiWoTvtYwEKDgLWVB6sq2S7pP3KVgUpDb4TYoHEog1aXZN7Dtjt7Szypx",
  "key31": "21PKsM1MfdZ76mvrTjqWqn4Jw53JHWjMx9gnKcQCKYH3ZBsMd4J7x3rZXG38iGC8fTMSeB6XVTwULJyEpca9DAuy",
  "key32": "3FQTq3YsAvsQNdLwT5rioLXo3FZaft69p3VkHXrieW1CqECLnqbBDyLDCqzs2qUajUXcdaAUosSNA1AAXLXzLbs4",
  "key33": "2t4gNfuzCatFu1swWJN8kjLcbbDigpBaQRREMm6yrVzMJMohyaVVMveaLMaXMf1oXi66BjAYpBTeS1hbqv34NvTj",
  "key34": "5nvD7o4RHCRWjk3s6HcGAVbitrnuPa9tWuSUaUQCrFhX2uhiiyC4fAboM7nfCxdf9qrPsgoLCiTyF8HHpSDj84yd",
  "key35": "pCpY4m8YF2EVB9btHtuAt7QZec2pLc6ffzPmbqnTp8eWZ4hYUgiaejH6yy4QV1cqER9FRPkbCkmgyp88FdYLzLb",
  "key36": "4mMp6S5sA7pzmeQCSm3CvxxKazGwk8LYdupBbLwCsERZ29FZtYdNexyhPFxq6bjYEkGHHn77tHPqy6qRNz9Xn8pU",
  "key37": "4gNZLB4ZLmtgCxcCm1N9nzmG9GxuFjNtuikmqRVdTuH171pZKchfnTYs1n1rFWzpq9x6tPxa6zwhAQJVeQBjq9sP",
  "key38": "4sRAFuzmbyJkugGRXjKpXmAQheqFVEtay9FUKyZgCF3dzgFwXW9sHaKAYYVrtXWqSzovKEj2cyphx2N4LmCHaaqv",
  "key39": "4z5sNZ8G9dgkSqqYE1tq21HdMwJsotGPCRKjNRt2MwFpPJ73R1nnT6869qKgCST9nAL8gQFxniT73wsnGadLgNMP",
  "key40": "3LATMhkj6GA9vCfXEkwDwMCfb7Fc4aLEzVHUxYKcgcZqPC5W94HMvTEhs46K6X5wLNHXwWJvgAsRpRHcT16og6bd",
  "key41": "T4CPhyYz4UpBSxdP1CzpyXVWGkzHxdixJkWrTw63z3AA1W3NU4hPtbEQnE4fnrzXKRVkyDCjcFa7w4ipdhZSGxF",
  "key42": "4nRH9jdyrHx3AYtQfyZLGTSceKZ1hWJxspWaL3df5N6a5APqGYL2SpcJNv4Cky1XfevEDVJCeediK1R9LFxMEgqe",
  "key43": "KV4nXtc1DWnayWrVgFcoZ6wQAHmJu6H48c6MCHubEC1AGwXvByBYngTSN6QNL7RJSf74ikufD6HFxugabCNzF37",
  "key44": "2PCsodZ9uz6nYh4DFKREeRoocMPBfbmYCmZuQDYYR9cBF4m3JURR1VeNXQ14vtYaafgWTNHzRadcRWdr33ktJHbx",
  "key45": "n16iBo2hVrcR1aqVMEBUbJ4jATPvTgtw2LWvqxfpHQuLdrhy4QZ6ksW6mhcJ4crtxmQVBQ7FkeCtPB5BniY4GJu",
  "key46": "3jzC1q1WFUx6dAiT5qebGoPLbd2NjiGyFvbei5cMtoZhh7XrF1TC8YxzqybJBNR3iVF9cpUwmaGFMopQJzyPiyxF",
  "key47": "29zZNhQPv5fvEVZ4BkMQo2xVYfdB8BWHwJmautriCUwrXC4wNvat4xys8nBkN46AmFuPir67jXDMbrZe1n35tNUk",
  "key48": "4QKYSB1Mn2QrtLhVSFQQg8uLjvVzBj8J6BupC9R43ERhYbV6amK9LPojT14yN6FKVNT5qRSftpNBfFr6xYkg5kzg",
  "key49": "3DKFDdF24jtNLUv41bwRa738qe6u92U8LQbsBsHVqs8t1cHgNSXhs63wuTKSh4jdDK1cZ3SL7UwxZrL5nRCTCdG9"
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
