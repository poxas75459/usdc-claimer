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
    "4E7BohjJiZAhEC2vWn5eFoGUF3BpTWHJYPSho7ZanK3hbWUrAK4zQwtK4rnCkXsb4wr1jGHfwr1LMfKExZ8AgKRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28jvX5iT2JDQ94xtkJigFhxjA448XhHWAYTSN7acND4Bgb3b3u4wvMYmwtcCyqvPT7qoCbt3ezJPdT7BLn3o4hqU",
  "key1": "2WNTC9ogKEYfosy1jA8874HjaRutitfpsKTApKid2RKcJuoZciNuz2UUPVgRmkmFaH2iH3XQYN6KRyQ3bgvCUEqi",
  "key2": "4HXEUtsH53DvGXmEt9ZuP7KedtVqZLxhaXML6Eadw6FFAZ8yMK18juqkwL5PUk9Q7N7itPJ9BKNHZmwzCawtUvfU",
  "key3": "3vWrMEcEHSuYjAtWEducHvbCWsR3ZKvmbPmdhCk71KNz68VRWTd6eMn17BR6QjkMfKiYZhP4DTsPHcgcgFqBGgbK",
  "key4": "2mC2ZHptZzsg6Xjy8Ucb93mrVaZdYN15bc6o2v4KLD4guxCW7BUCsrPh6aZU4Qu649vmBNEtfFMzLsxrGEHp1uYL",
  "key5": "5zmGjxKBgWNs7TsUGijcJnoVYrwrB2XigdfsavFCTJyrNH36B6xxe2EyH66JLcYrH5bGdFqUzTv6gv6tGir27dbJ",
  "key6": "26RALLNgu5UFU58CJf54QFixQu1sDfQCQtACB8DAoWD4fFPfLgTfFaSQ6s6i6NhZwGB7PdG88VN4SQ9QAhCxG2qP",
  "key7": "5NKhMFfDEjhpPELR9r1km2sEKVVC8Shi5cQ38VEn9EaMZXu6fcp7PdvGb1jt9tSvkhua9u8TpaxY12LuPLCjbW1Q",
  "key8": "2iuCVoY2DPyZbv1uzfTtH8XgKxfHa91fhGiAbQQMhYfLtBpefxko5fN5tzip6dpQkopYoQS7vXJBRA9dFEqRnfxQ",
  "key9": "21HwS3gPDaRSnxiDw3Sc68oh6aVRXVJpyYaoPxC1UQ1GCtUzrWttMwc1yPN1MQVjG99ri3oKBdxnBXZ1t5yigh5f",
  "key10": "J2URRaSvrs6vaBdxtUyKGidE32dNzEHTHax94sRL3dnVDeXiKau9uYa9kVA2pEtrUjkje9rvEXMkjdrXDAXMqZW",
  "key11": "2xvXHpb99u2MGxSe5FUhp1hwBbgWQtKP9jy6rZymJCo7Anq2ovTTDLYbSNMUXHWje1ZsebYic282YLwPnRTKW3ou",
  "key12": "3NSKhKdzR4SLmupLbXEgEEfYnFG1u8SGbq4YTqKERbf4kXde1EVbhfTYFpHgY4xfcvptemWf5hFNyoRX1nNcx2mx",
  "key13": "GtKrsF4xpivmjgkLZmBArXkpkMtAAF4zA8SgVJ8tdCmdbbHEsPFKBNJejViTQpY7Sz9hBw1PiTygjC8oiTVko8m",
  "key14": "5F8pcfTd75PEt3DRHDFhwwsvi98MNAdWJcBrP76JBcF6bcoXw9tJ5YGqWi63MwUgoq1wDSuBv2TCBRc1qGaGTh9w",
  "key15": "2LZuEDub1o6wxio4xWWSq8p2ZHYEGAuzZC79kesqMbuY3FHyuc1deunF3TAGsViZDe9CxsUMCjUSS9jGzm1HFX7k",
  "key16": "1MboXZ4kiFvBq9uBak6vJJiTJhEYzJtZZuiRv2ivEqRuiCLa1QA6M8uoL7rU4dn33nEP62eDDeUtVcrur5Bdv5d",
  "key17": "2qcqbTJY7v8Hsr5KANRJwSvwauyKZPLJQu8JvFoViNmAg7sRNHC4vttpA6CKFFhswmu37Csuyva6zwLxMWom5ysr",
  "key18": "yMfUyaCL1gLMYwKogbr6aJRc1mNQSeDts9mCgkhVftHRXbRZZwM9oJJs7RHyDhktjUgSvyqYHsecaGUVHhHWhAd",
  "key19": "5eCMv7BSR7gG8jLNzg1Bmgw56eL7q9hFufdTokxAzo5ZM5PH7jx4psM3T9C2SrQEx7xUeXBRmL8nXSbx656wrbGk",
  "key20": "4ra9pEDv5hPywtw9DgFE4yF3GWNkxiii14Zz1MjnC5kA27JGZsdtYur3gTC2aFvXAjXEbkFwYy5S3uoX4eUFd59f",
  "key21": "5zoYf2EhZ3Fxqg9GER4dX8kkkGaJAMSG5eU6xszpXtkX2JDW2Ddt2bF9NCsqtJ6NwPvMKpfatWfDqkk49LGvFE79",
  "key22": "3sh8MgW8vZdgWWmVs22CzZSQdbymZxwbrqh1uQoceLTVpw3osDin275h7uaSoFpuHLaua46jkHNvPTTbuAqLCQKh",
  "key23": "Yr5P5Q7WRMuS14Vs3S7dLY6FSqkumYM8eZvX9y4ZftJrVexsEG3kK8KdKLJahvwPzrpHLKA5zsd1vMvpf6gtUbL",
  "key24": "464esjxMHUkCp8yYVtA7jVkCcV6BehQYnN7JDxTpKRcMkpBXjwia3pvzARg1KMtMcm1twCoQZ8bYBg31MP5ain8Z",
  "key25": "4mXZUSYBnGcExyhk6UnWLowreio3XXCSorMGkzBztAEPuvgYvFht2KdiRiFW45PuUfyZjCuixXLpv5bgLzu6jsk8",
  "key26": "2zdnH4uaNaSi2uBTGcAeJz4pA1SjifCRxnPpmGvV2Q6AQstw9QAnadTRKWs6QVtMoczhYWcWwkx3bGqLVSbYF9cw",
  "key27": "3npiBVv4AzAVpEur87RXTJjU2tVmcdZJmW9ekAzFmMCQGPW9PcWhij57mY4hJQsgpFT9SDqBbFpLKeEyfG565pcp",
  "key28": "4uTxqjQkLjuCn1wqpUEMdnRot1yneEstdg9FLvDoMxoKmZVeFX6hN88RsD9yx1YodDoXktBW6FSdSeT3Cpb6whTT",
  "key29": "4gxXGBi5mWaS7ypSLrdtPuZgkekqx5YQvppuytmk5ibbGCANvrJUqtendQ1icJ52uzw8PAGf9gCYKJQgZszpvUxz",
  "key30": "4d7KnuPNFyScsoiM8hJpNzUydqw1869qhMfdtqRdXfaQjZ6DsiE81nMn9Fsybf3bZ98teYkbiMxKoWTVq7ABSK7H",
  "key31": "4oBwTbPLsrCaUEe4oZjY7tnzCX5pUUhDLZVkDBALLXg311FDSx8TngWBtwLgUV3LgYgyCCAfUA1XqnJPWfycwm9f",
  "key32": "5f7bk13TBongSUJfMTobsCtQkJzbNoLwgWt7KeCdiSoewf8nkbdAzKGw8bL4kv7q9jPJh9mxLCriU5RfnMsjHLxS",
  "key33": "SKc4pVUx5GVTZZfiBKEUajSrrWAvDjWTUtALciS4arctCG27gVJ7qYWfMZxopAwpZms9C2TpZH9yhZAqi5YSk2g",
  "key34": "HacULru8epaaJVqdRHjqCRb3ZrupGUEexns3J61QBW6JEyJxsMKgCn3gvYqLN9YygsmyzsgR4C7s3hVF7ZyDxW1",
  "key35": "4YcYPu3a5uU2SxsH7PRqKkP3AaG9RVrYC4NcX1x2v4K4cdRDVTV8Hm4dV42E5CfR5iggNZ961kZrDgeRW5BJAUNX",
  "key36": "3WfyGbqfx5XhohTCkqriC8RcD72wnnMRoEyBt1WPP4U868mZXf9i6M6igqXEGys1wX562HgkFZ8y63CXw5vPZetX",
  "key37": "54tv1DZJehFCDKdkHGp9Yhtq3gM3bUAyzGhLAwpJMUqwP56V4nMq4CdwkFen9UB9j9Js74k4SwcQYJmHSyvBNnZ6",
  "key38": "3cm32FWStxC8bSwpfTbdDbp7MvCPbcz3TGd86HJSmAxq9Yxfdwq1oRSC83Gfok4sMa5ME2Zgo5EpidFW3mvWhLNM",
  "key39": "PhYh5fmEHH2wUMWwij4QSCEMuEy1CgqAAFDZS4Uo5zc3PUfoNqKY1EJsFFSFAfq5DyoiPF8p8pXt2DKgZzdvGbR",
  "key40": "4kMx4znr7KgGiD3FcqhnxycwexP8epg9SjJy4GpmuyQgg2DLBTXaQbr4NW9VRiKT2YNq5QHGedbhV3M3SKfWqK7",
  "key41": "2hWn9vmQaecivpzctS1tWF4wF7yamiGBTq1YGu1TNycCk4CeGEaTwbt4LX7E21yA7tN31EHf5Wto3oKsnPA83zDX",
  "key42": "2Qp7ht4Mm4nHXdr7sPzK8UfvnGo2enRx1NXEGX45VHiCdxhA9J4uZJmp1Beo4HZy5xFAH31nar8pSTw3ZTSP2fi3",
  "key43": "2fBEdQ8qNkAKVnkPhNp4C2q69geLv3yz9uqUpXS6eiV3nhmJ4uUdTiYqwWTsuQPq9zLfiGZRQhxxsWekewyrPSJB",
  "key44": "4NikorgVUJ7cze3gBJr4Yo1c3pBLFPZHGfRVhXPieXmNpawKRH1DdPFZBWuSvYhjTvwqXCWMb8k3k9T99XJTwQ6H",
  "key45": "4ciGziinDJeXc7uW2RXBap7uxrM3tUQ4TwZ1nnjUrS4LducJYGdY4boVkhGdBNY2QoxbbucFWfHjw8qfmDkYuXFw",
  "key46": "3JRoNJiVTtQQwtDNgBbTbHvPL7woqYcPnf5RjduD3UfaK6xfFMkTLTCy17Gfzz8iMm3urorXBZeH8Jre2Fqv4mbV",
  "key47": "2gSJpeTwqQmQoQdEfXoWeifFGGfgmrD1jQR2aEXdiD26w9DRXZyhPdUku2U5cUh89Dj7o5N3mHRnQyvqJDyPJsf6",
  "key48": "3BBfNGketbFwAzZbT3w3145Nxqto6VJPhTouf9rUTkEZiwdsF6QnovfcBJDYzkZGEK9SkkutAjjkiFRR59qV6Nc7",
  "key49": "65Pg2k5tT89pcX78UKUbBd2fTTEsmDZLq1KtB6mSim9A8u9xBc24hHvWKNSRgpi5bX2kdkHBMG6KUrj93YM3yqWT"
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
