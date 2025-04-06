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
    "4eet11NQfCh4p3n1Zi6SqaxfigJbvBSPSCYQ8wyEEGrcryiQaNk7kFv2HTkpTX76qrTPB6UdKFyuSaz5FVoEQrzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22uNmVdDN47GkgF7ZGjXbYgczcy74R8pSE2ZB2pH695QbBWYJkMSFHQyTkmhkV8QiE4bbcxBB8a4Znb3xaQL8kep",
  "key1": "3pJgmdkj81sc9XwtjRhvYKEiFyr9y2vwtviReHNBraMtwxQkkiTwNq6kE3g4ngNvHTvhXPgrCM5j7Uyr8mk4kF4Z",
  "key2": "4C2mpfJP9iCR3fQkjVxfBbgXRjWd2xrWcKmvGubqppHMUFRetyapYymzbU8fXaKFFA4Tn5nCHUy7ApdN4iNErQrC",
  "key3": "sCMnE2p35vuRa7GEMy7HynRmsnyGyJySRSNvxcqLmsLybdMwnxfBiZSf2Y5bEqFH9uRt3Nc2V17oUrztmGzkkpH",
  "key4": "3a7583EfDmjBamjTbHfkNeojz5hitVeXv6ubgHsQCgFNm6rBDXQjWtZHZzEwj4u3T7Jv3xXAjN2k91tXnrBb1JmU",
  "key5": "4DRhmVTpdKxXSjY1J3udxREsp1cd3e5PurSMemid27sJqRZY2ZcVUfTKeNz8PPbKUGGpMnDkypPikzf9NnySH8P2",
  "key6": "21q5nkN6Sdxw9dFeqV1b5QwFeu3ApzY41iyeNbhxg5MxBv11e6VTXjqwBBxED9T5WGM2TCAzYsPB8vtBhobjx2sU",
  "key7": "29rShUAcUctVFcPf9FrfAoRNmHu8a9xo71J3giQzzsoqyCfn8ZpMudWAjRiu4mPZNaLdDav2xqtm7RGj3gounMmW",
  "key8": "37PQ5KTK1z6TBDwczknsuFZCmgR8VTQrAPqRWcFFDrx4UbWsGyUTMMGKP9xzVs5SZ6v6QURVN8CtUUCcmmNjeFAU",
  "key9": "3GxoNMoLPwqDXQ2pHPyACcqiGY7jUpuGNqYNRNRBREfEXsRdSrAziCeWPExnrBE6duP523BWpHHWS5sLyRqUrRcV",
  "key10": "4rdcHQUBqDvY1EsDXUv99KHZyfDw29ZM5FHQMpjXymzR2iEAehrJw8b2paW2csFfv9ocoLwrTS8XF1vy73pxWWWd",
  "key11": "3usEj5yoQcgeJc8mteEnptk6fb5mtpFbTSL6CbG6iKzPYq531aZTV5vvD1QDVbtaFaz1LTVZ76mmPFiJFkdaWMep",
  "key12": "4QdKtF5X4D4sH1PvfpZ641pgtXky7XAs6AGosTMeqZRPG4sbpVE11yUdAnP5HD9AoZUv71HKZnAvuqHjE4r6dpcE",
  "key13": "dBChfX6ak68RZW7yvBJJ1f8QUm2H2kQgGkJDYAm3Aw2qB5D118FkbCJnBqppRTUiq63jtytVfWEXwGWNXGJhkwb",
  "key14": "4Bz7qmtn7TKy4mPQcauUbtCv6QxsJeMsrf8JrWeF5oT1Sf7QvJTfPB6R53KbdeL3R9u7HPkb8Qo7KJC8hiPSi827",
  "key15": "2wPVzvFwhSKwc1fQPc21gAqaS9J4RN5nrehSW2biDGbSrnQP3rP9AXJXvWwZqKN1XrLwFnUDH8hp75Uxtp89HxC9",
  "key16": "46giQhGy97ArGvwCpnR7DU3jbCA8aqEfQsRvbrUt6VN1LG2SWq21zuHYy92g2ZsuvghQXs8LJfK8j5uv1KMQabSF",
  "key17": "2htMhRFZntrsqc84UCww2SQCYKWVV3f2ufbsEpFqn9ZonEUq8CavQah3ENpmfvHqgScNhwCddvGwBWbmi9SFYmZT",
  "key18": "VN3SujVNsPhoYaGdnfA4ecFmNKfC3Q7m2EfRQ2M5MKhn8USg8ZpMsHhyFdrdhSWzT97jYnbkXoMDMDUjCqydJT8",
  "key19": "4zmEsRGQ67uv5GMgoemGzKuhNgpVpb2V5vzGeMa7ywu5B5ocZEJg84dX8AMoVragQqvt5m4CiTvMbNJqyAT3YjKM",
  "key20": "4oxFCrDj1SiDan9PantWBXCsPQ1o3tjCPLNiYuPg46ne1VvrBRFRwsHy3Y5DZ96Q3gnwAt9YxiVChhRudcbn1oS9",
  "key21": "5CWw93zgwFC9k5yfgQwp1LP5y4rQwuEhf9F1GGQhjTTp8xRnPqZR7hHXKJ1Niu3Q9QgR27FZyzCX88eEQ3FsZzjC",
  "key22": "zx4qzeGpAyVkss3B1mumWZQxbjyVcdnmqy5vQehxNVyxLH3fBntcx3sQLB64dt4BmAiTYoTmZVm881NjKob4A21",
  "key23": "5Ti2MKPxAJ2poQ42GM7htxLK9Rt7hiRfLqmditeumLsHjVn6uiqnWBTGQR6uBwqXQ7htCQSzyosqhZKiVkoKWwYq",
  "key24": "PvegtyojjGBjbHqoQwMXBz7nvH5M4wKDrMAbj9qzAGd12gJygCnK5zXETQwhvvnmRcpnRxD3Zpyo8bV3jGj3k6c",
  "key25": "2C767wGW1CY9uRsgWbSzD2Sp4Q2oDgU3dkbfbT4oYRBqXvAaU8cBoHwRP8f9KnXoQsa1VaXB9VvT7NhiRpFMxqNK",
  "key26": "5giGcU4qFgXYdB999xakNzxpvWSLDMCK8rpLhukCT2zHiqLEWZacGUiWnsTWG9o1fckeLGC6ukwJtGfsFtDHM598",
  "key27": "SnTci5Rqk62DjX9hEnqcjvSMPf43p5pdfJzf6wK74uJt8PEnbpfsarAva13Zor2D85wqaWDXRHAjFGLnuqPMC3h",
  "key28": "3mKnGH8eZqS35yhV4PSZ2NA3JYNSEBW2dzdZcrXUybiUjV75rWgGk2HwHzX3uK68qZffDEqEtyitsWrKtQEXtZ76",
  "key29": "2DpS9Px3abCpuknEZbQLsdTBKoKP9RQvBBgV4HBzHLjbGzirF59kSsnFXXAGXW1N2x53365qju5cDwh3hwnA1a3r",
  "key30": "LAA7869Km2KfpBhrxyYyTgMjx5Ax3xTMzQ3XWMr1StiXsAksaMmYpgQzr9ttUEYHsUdse6P8xh3BB8AZq6yBM7n",
  "key31": "2K1wTzm7nFSNDjEWudDDKq1ZGEouyLrsnmeDA2ejLX99wSGjwnht6gu2EcAyuvdSLh7KpPX8JVaw5GRyzApaSRWj",
  "key32": "2GR5ZGhNqBT1VYwj2C7zVXVf7r9bS4y4icZkp8XvZ9bRs1oYEGopqErQ6LBKru94kcjAaUyoYYCjL6Y2XYdToKpi",
  "key33": "2utTuNVASo3yXYeZTVFf5hyUZRSEcynPvNK2Xe6nUyuUMfL2zL85xQPT7ociruVrLzLtLdUZrCCCUf3NELX3upJL",
  "key34": "5WhPoUUX8TiGAGPDN1rGJALGQgbMW57PpTGBRQymJFoyb7qY8wN7Uyp5XerbDHXu6J3W7EgiS8djGMPp4QKvQxD5",
  "key35": "tNFCiUVZ1oGkrm5fev6exGVBYQnrd5NoXJ9X817tF6GfCEhtReaUnmGQFaRdwt9Gd5PFhqZ11Eq2gH3VzKWHiMH",
  "key36": "KQuyNXeEwXDGj7WKRhBjJL3TQf61ENPFvfDhK32kDyVWYZM4sMHJtbLt7TUNPMajCPdLujRv6LAfzCtUrz2WB24",
  "key37": "GfSCYLfiYPJ6WPTdWcyafwof4GbaxnEfxWu7zXtPEbjYrVRckdibLjeTyoVbCyNGgy7x9HaFTmrHNPKpwdkzYTU",
  "key38": "5bgiEYS862Qk3YuW5DkkgACdP6s5zAbyDnTtYLHzwVW9qgyXpuNMJtSe57Nx8vuD7p5XKXkna4FUubfx9EsnAYvv",
  "key39": "5wRumhwmkYi7XjuvyibUHL6HjTX9dYTZ7GB1nuz9nZtvHEJecg1ZgD8yhwRfXUzQKG6y7k6vwfmFCKcVsnyFhd2z",
  "key40": "34kNpur1iGtbzqvopdkFTYQcMuGFomGiQuQuc2VeZdDKy3XvLLq82WTeu8HpQoAQfDyws5Nf9FxZZifxqSKAGTY1",
  "key41": "3uc9dSVU7Q1wAFegpuavYJu9qvdDUJXZdL7umg7ykgLkyw6wEY3e3YLF9BrcoYVbrDeQQHEeziRgQ8NJixKTRDHK",
  "key42": "4DnmjcwCMDTe3HX8mtM1ctVevb3GVwd6SvdEtbS54aGHD7LN7sS4drry3YUdj1f1xsnzCQtMu71mYtFxzsWwTA4G",
  "key43": "32kTcJKb9tT7nrjWCawpDx9BTemyP41gmhQhBj8Xodz2fnvVRk93fFRK8bX6aRAU4jKrF9NwvWK26ZoShYRh4XTW"
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
