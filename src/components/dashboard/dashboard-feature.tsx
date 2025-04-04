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
    "2Bz4rjgHgqE9f979PsRi8vbjqg2i3r9xnoVdkqEo3gUs5cWuMs5KHzP9diem6aXV3FRvn8fKLd2fyDA1hkq9DQXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mE3Aj8c6g4cDBkzs7j2fUZggoZJBTDSv723nHgQgrxbAvP5nK9xLGJksykaxUNJC4KMXyg3wC2XRvU7qHghrqp6",
  "key1": "47TDMtBdS9FbQ6q92tasRVjVuCWFEyY2moXyWuuymMxiAWCbs465sQCsHm3Fkh9bueatmeXE3mtZhXVdhfk31dtZ",
  "key2": "4pwEPQDyyyGQwacnjxCfJqUWWtQwXFCtRSidza2oPRU11K3pu4vtED5TsGuXxHoNNYy3idFuUdMM2bcefgo3BQGh",
  "key3": "37vauEgxtA4osKEoBjUrMWQdArhWiuCFc5iYpVoe5FfGu47CCHjafcckeq5ju2GMdRUmn77nH3CJNMT3gMt4Bun2",
  "key4": "2FnsuZygvXRUXiFceKjL8eoxdnJi29w3XcVYCBxFn1huu45XZERY6qn583aw1s4gCFipcX4MDyXEae8Wbgi2MQr2",
  "key5": "3edbszynJpiZiQ56WUpTQKK9UkuUPhCW6hGmQvPaJa1Np3icvASCD145U5M2KET9cV1gS7vaUCnqPjg9b3dNdWwu",
  "key6": "3CSKEWmis1GGm2QkDpAStkD5iHqbjhxX2MBoEJAp8ZCRUkAtb9b9LxaYTx7pevuDiJZwYoAM6RtakPBaeJCAyW4r",
  "key7": "2nS26GosEenUUw5fYMRCrjoqnhWSZvAieRTjYAVyNrvppqEn2Pezdc3jsFRivqMa72tXvAQM24RvDvevmmKqsBgj",
  "key8": "2PDCsAJpPzxpU14YwDDM7TU33mS7PmXRUaq8GHcHVWTF8BEH1DWVrCu78DwFozn4WEcqJpm6msAAKiktJPYtYeWu",
  "key9": "4G5VFWMx3gGyfa7FiR2jDschBrTEa7hYq9axpuvVKXeGMMH8oBbsauGgAsS19MpNyUbTR9jh62kyVwF5FHG1CqRM",
  "key10": "qYVKv45pYdkezR3AqGARLzEzfkx3vQ1YLLcmGNiZN89RMWeNVEZwMMKtXnqXY5n2rEvBR7HtA7HLXPyFfeZvr4E",
  "key11": "NBbj7mn3dmoDg1aUFELMXGiQLWYY97J6tA3pHifghQ3z2avchYZRU2Z2nkos3Rqdh7M8HXibQBbYf4Hji8i4ivB",
  "key12": "2dgjYP2WA6PeQ5BMbGUE5sKYKaYPQAGQM8CgD1gtYR7fQbo7ZmR1udSzdgNF6oAjmXTx6cVbZBKmymifgrUbQirW",
  "key13": "3KBpyjvozJtcR9tD15Y97GjjCCdF2HMZkt9aJvKS99J12Biy19HzAF5KMGTupc1S2UkmxKQYeJASMfXWuF5p9G78",
  "key14": "23vhjjVnAUt8eVkMt5HUR32o2MDgNJbmJEvVN4pQxhLFU1yxffGfefx5SucAX8QnSYvfmQwsNGKR4TL8KtSAmNDY",
  "key15": "2XDgSBr5XXH7SZBXpC3PtTYFc5Pon1XSAA9cZKa2rP2Qa5yHwvXgutw3XTDfBDTvHWqa33BYMBwwbji5S2gGLdTs",
  "key16": "5bHPJTsjknjv3DjHaNYUWFzv3FPxBMqe7gZRCHMeHtEUzd1CrzUgVvfU7YxVXk7PL1P3rtcEZ4oxfpNpcwthWgao",
  "key17": "5CuC982sUgQU52sUGLYuBCiW4ZkLsM66VffNDqYbxkzLwse4pzL7LaBkfv1mUwBCtzT1iQnB2C8kWNMv1L61rAHk",
  "key18": "RWU2Ad5zBqk4PgUMqVAUttuXSpU1eHbTF72ZdZAPSYsFicCVch8cHYS4XxbCvfzPbdeS1fkVfZaTSPLEc8nF4xi",
  "key19": "5eis3mEbUrk5xJViC1ZXbWQAcynGVJYx5TvfbcUWnYkeKzPHs9zkprFpArcz9HaGaUeJ5rA3MyKDQU9KA4YhedMj",
  "key20": "qM4deYgQVt4ExrZC7FLNWrqykVbo1NSwAkgJX3Zr8fKqjVJ6PEwZxkSvQtkdSc8aemPzRdKxDMxg3fD4LnGW3ii",
  "key21": "4R7cg2ENsSHjDTRBUNe5ZAshRTx1FB3CBn3wUoUg2Ej1VkynqYayKmedAjqQ5jbteQ2MJtMQW2Cm9GrtGLUhReXP",
  "key22": "5cUxwvjFrRK77cAmCC9H328Hb8svJ1uyaCgtUWPBFJCMVtbRsriyutvs1uLAo9k3zDaRA9XbJDU1zWdkGuqKNXup",
  "key23": "2J7Ej3miF8wYpUjPp9MWMfJFQ8a1aMmbomc85ssQM3dBMrwQE4VXgsvK2FLzNZywRsPcrLY2ZpHEWfNB3hdUmthF",
  "key24": "2sJUZzfU64sY7Afpzxyf46UzUK8KnB1V1f8caga2UQbkK4xKmvZbpexKKrmyALQEuB3skaRNHYxEDnbJgn4LC1HF",
  "key25": "2kKSvinAfkaVbEGytzowJbcvcrdivzzGycY2anKXmEcAmBuGqnsJ45Z9w6GTgVuc2HkUjFC589qVXgsx6VQ7UQFD",
  "key26": "sDGx8T9GCvpKBchNbbyUqXMLphRW6Xnuj3FLEYptxmCmHqaBdSzkpVgKtSenyr3QtijRvfubFhhWbNY3cBUvi35",
  "key27": "4QisfYVYLPmBKGeaTD2mhGJuojcfQdaMjke9fVLfvnvr2V4MLD9jjr12QooGptdNX8M5YovHXQr5QN1YaMa7J4p6",
  "key28": "5tdQipwjhbvcc3khwJS9HerLcY9dGKDVeSTvMkVe9frhY2z3reEfEr3cDASeWBXKd5x1ZztNQAo3UGcFX7kCZ5Vu",
  "key29": "3ecP6STP5GQDBjNvBrWk8LbQMrhjXsouxhauHAZ6hWGpFQQc3wXvdViFKWmb7MDZ4kQX6q7XZsB91ZfwrJLGWPiz",
  "key30": "3BhCA7ABxmwJUhudFd8PQfnfmbc6vKQb5kiLjPm8RNYXP3pWY88i26SBDMUe2ApvziJffFFDJjo2mBsoGWWUEZoG",
  "key31": "127X7URuXfRKBSuY89cHdL6GC6rgcH3FYFGJmyVoFYPwUeVCsXSZHQzx7JyHnVZ6b2ewnPxXQjhoAjQ8ESmJxyx6",
  "key32": "3j9Jvstg8peXf8qJ1MiBnGt1cAwnzBfTZX5G3VzatZSv9LMHpjrxnNsNFuPF3XUSqvSdeneFB6N6bUMLXpA4xHgm",
  "key33": "5U2zT3AZuuMw38RympM12X28xp935uzWbPw1izdSEx5k8Vf49crLKDkAeC8P3pD8YwaHfSKfBKxhRmB8Fw5DwzLc",
  "key34": "5e3NmkhgxuKRwts6HgoHTbb9VuvYdh7agE7jTjE52GgDv5TYh9Jnx3pqA1aFpVmTsy54k4SUxZ8C74nk85RP8pJM",
  "key35": "2oxfQ8Lb5HDsBHZLMKffdeFMfarnM24Z2FERtAxA88xFES48aWEZiJeAsVeJ1K4xK9N5vrqCuFFfgv6dLaXn4Nzn",
  "key36": "opcdzHa8wUhUu97x5YuvjVZ42D5X7eZJEdG2C5G3RVTE1hCBYJwMxLSZc9gC9B7nz6UnVrxdFCUCmDk5Lngybf3",
  "key37": "YFSuTbkHFjjNcWyQprtvtgupifB7ynzJ5aeaRhtCxwxwrX7oHhidouK5CwgDA5Kz1faGgKsVJCLxR5qWJGK9ENK",
  "key38": "32yXJPrhap99ebaM9UyjYhcANWKVTaEaqENfoWaNGxgUSaJ8TDstGbzZHLWfwoXtEqeUvfWJA6fAPoZrptCWBEg9",
  "key39": "5j6FBDRKjxVe9f6K2dUwfFqVPEzDBp9QY4b9CHBCic8CmCdNkpWk36GKYmntG1JjeUwAAzEySfa1Vd9CPftYUwXC",
  "key40": "1Mpdgh6FdXNZVeqF8CQAP6PSaxMcaGVMLciHDcdL4dgHDsAcANcG2rEvzbveKgGA67ydW6nKXS2NQCJ2VvSXDRP",
  "key41": "23maVpMWn8JKzwn9o6k37jihSQBy33xeLtNHNaa9pixsbtgawYzg2gw8WFGm1ANZED3QKMrMYNe6cRAVLRuwQTrC"
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
