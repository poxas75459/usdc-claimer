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
    "2E4hgBpSxQvUUmuKD9Zu956eaaRqeJEuTmAPcnUh2HFevTwAvPoT4Q3R1WGh3nKJipzRzSvGfYkpV2C6fZG4Fuh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B7RqMEWgT5Bm9TWPRj5fiUJphBYYXzeZ1zXtt9kMHUxT9mcvE96nKdx5bVQXN3zNpFFbBcMXMLAzLKSoRU86DrU",
  "key1": "2inNUwmNaTWqrx6k54jG7JB2mh2hz4ZXEDHNdt1gWSzqwNChZZLj49EDLsm7wZQDcoSJHXNGQRtpWGSmMEmAE7Yr",
  "key2": "3bJ75MsC3pAZLgaJisRZ19ps3jSgobCfi6cjftV98DjTMEV6R4ND265xNB1oY54Bw8kLNZNFZixpJEFMeKZxuWLt",
  "key3": "31f6WEYkk9wcYhGfKaoCmYP5oCKzVA4DvDBdBCRxh4aDREGnBk6jijsk9zyBZV1tTDg8ysxvdNav3zEtYZw25wfa",
  "key4": "3ShKcfprjVdMeJQMW4Srvht1JipqQtShYn3aTdqsKHaNqKwRdvvuYKjXazQZoq3TycmBBUafcnoPBPJNqZqtf4nj",
  "key5": "4djs1PjMQ1Hs11JDtgArkZdKmi6eDndfCNCKoWynseLxEToThMVftu6EnqhqTXLx6jh9sDzAS7ZsK8GqwPeXZM84",
  "key6": "3aWyQ83V6jiZDKkiLgR2bwiBP3muRtzahwTcEdRseAPek5FFECfUa1irYM6HXDxYvCBbVXkYD6569hpkzS56bNbU",
  "key7": "2rkee47FcdifnD8biGHG9YHDZNThrzvw5ufDdy7Tgkn6zhDuNpppNMTMhyVcmPVfgWKF8TtApkJ52K3JCSLfCCrv",
  "key8": "5qbR1zjEcW4r28R3K9vPsexVfEhfLn4XNoiyZjbfh9bxJBgquhmmRDrxdCEDDJQAkXS4eQ82QzRspuUyaBxDj3Xo",
  "key9": "5raYk3PDt3p5pWeib3VdD5zthcQNGjgcGcp72mrZ8HnKPtsP7kFtW4dpz9t2TwGhYxK9wyQ5HBq137N9pZW7P6dq",
  "key10": "2MYBzCiedfpi6NeMDh7DZPNgx3WNwVUoFgPo7wnfVzkUR19FsDjnvXiPX58ZdkmwyegnT2hu3PK6Zwtdd8X2BKqs",
  "key11": "ADrEM65B6fmffam4nBMpTLVNNSaX6Djj2hk8JxtYcaP4M81Mn3hvrSCSUgTasbmQJenujoNRTpswwKitPrWKenD",
  "key12": "3PmusYhNtAQpER2CnC5BXUj7u8vdaMPGsgPYVBCjoMDyoEX2opzfXPEcSCnEEeXDQ8vmhS3NkTexEvSUp8Yx2UNr",
  "key13": "5NUQMEdHpqvXWexeLtuzTweMNpUn3HbDyifnTe3f9SbXFudhVcExY9qbsnFA63Z6E3wTmtXqq3SiEB5ezf2RSdbr",
  "key14": "t1pz4vqMoNDgh1Q3wqCE7HfocgqYo9CY3woQxgBo6sQuVZtkieiiT5bHLSyLyqZ44CixX1YCHNzdsnqrhqBkHNp",
  "key15": "22xw6DtcCwBa5TsfQw6FVr1jwRswdfmo4aPU4CV9BA7xxdDbemFMovLhao7tgN652PvEVcFs7ojxzkVdgBudg4ig",
  "key16": "2UGEAyxCaNvh9L6PSFgpwkBRH8NUCMrzDk1Jbwy3BJ5ZuwDReRj3aG4qt5tADysw6SxF3999oY58VK3PYKNzV34w",
  "key17": "218Zo5YnpupnLrB5qiyDDwuNGVz3gey9rS75N3GaVr8bM3m8uoVqxE5GprGFN9e79cTC73ze3J3nMnBeYsqLaBcs",
  "key18": "3KoiDZdNJ8zXLnEebYfxvXHzT6nYBnjv42iKxrBokKAZacSmLGxqpBEDiWX2Yk9Qdcjb4yzYeJiK3J6tAxek2SS6",
  "key19": "3PJjnfsZicpBBs57unaX9sVN4RWFVzW36JFskzpGjQ8v2Pz6tV7kdC1qrwhzQvgMoJbAcdJXN4owZ4pQuWzmXX1",
  "key20": "3UTBN28a3vRko1SPUmTWsCXap6BxJWMUTgV2B5PNWZzWtBjfcHGfHmUBR3vjm5i4M7bWH84iuSAdzxxYtfooRFhJ",
  "key21": "wHLP1VbhXdfmBRR7JhkxTm5c5xbNoQA6C2NBRD4G77n2p7C5kRoEn5TUbpn1jCQZxLeTSRwobSqprBX3Ab341X6",
  "key22": "2BzQwuMt94vMhoCuyDY2uWocx3TD7anPUdRQdqrps8nSes8T8XsHCHXSKD4zDV45T5orgonABVsdyjREKyAtPtD4",
  "key23": "4tWP323Y5cwjN3vpH7yZYwhxX53PaZiQZEqfJiAW2Mi42TZi4A89Z7s5BLA86M2nAqNTwdYmTBaa8JzukmkssYxb",
  "key24": "3rZbxHZFHC9rwQm4HVnseb1jEMqxcxE35bUzozxxcQft7mBf1scEC4YWNNr8GQY3gCCDgSMW35M1q9iiHJdkXhAG",
  "key25": "34p1QyJEhr8mcDD6yJm5GuJDBinQmZWLERqC6RUczVswjGTUSES9iwDCHeB3DbXDhqmc783rtNVA66NhEDNdoBH5",
  "key26": "4wJthHzQN3dMFqwUDepGhzVZdR5MGcgUE4bZp5EU7EbymnkUDJjxTWSGH999U5eGxN2ydHKhjpanyuVjLM3oYgQy",
  "key27": "4R43NELYNT2PED1pUoLwn4hhUJkCQ21Ku7gLHL3rDw3eoGM5rgVc5GTzpR1YJNjAg9aEbjYwFqjJEWTLXZcwuyyw",
  "key28": "28CW2zNWVpmWzJCndNSG3ENMsZ68nkhpdFhqh3LRwhXDJHRcYkZUDDkXW27BWNezzwEZzNMvqjHvwfEnHvq5xWGx",
  "key29": "5ChzFiEiSvqZCQBUFDqpPwwYC6sqWoZJd2eBK4dAtC9J71waKxM11i28ZBB3E4VYCM5jxvzTuG7Lnv3m1rcnXRM9",
  "key30": "uVKyV7wZwwJz5yeGfhg61PW57W2Gmo5PYwC24dSqZo9oWa1NrFVain3vpDtmyDy8DAmvL5zoRC2Jq31RGf5htGK",
  "key31": "DiPRZgP7h32J41q38PuZX29BtpmrhVoojBvj9f9hpCc6DgNmXUNFM13E3TwqaGh9rpxyKTxJRmMiuxUNaFLu3hz",
  "key32": "32a8gVcXhFAk2kbrGWD9nqti1hAhgpZ8MZVAA4smXLM5PbFAwateVZdqMB1xvrc59AHtgn45nEzHjHkYsPpAR92q",
  "key33": "5MtDhWYhA12dSzsmtDCGdsHwTEZwYKBk6znJbqnLg4b2ha1nGEFVV8v24kuWMnYrUBLgQEx6gUNCSiegyKgKmpkT",
  "key34": "5auzaDTTWRHB8ZoTaHeDNrVJ1DsHuwRonKJoNcqCogC4rmNfvGzzUBzqwPVVbnZq4ZAv6jTfzXE5WM48NKA92wE4",
  "key35": "3Aw4xtXmUzGk9nPN1xLTvWZYoWreS91EEXqN4nQdyhSYyH52r1TJhvKoVzcBBSpE1L7SVbRFYdAAHCdYSu8ddznK",
  "key36": "2nqZ6iLUM4NBwJpKKsnsPA11oT6vNCv1uS8C9z5cfRruXghjj8fq8LutjnwtivAVx98dKyFjLqs7xyZGR6ZsnX1X",
  "key37": "5DVjEpenyJgmwPKCVAVBEcvkjVSrQx9R9HMtbS73fnH5DgoPWSSf9FuTJiJadS9i91kSANm82Up1EhCe7sSDYwV9",
  "key38": "3cNgJoXpufeBGbvcN6guaYxyZra2UasX5yo3u2wDXqS8xMMMUZHDDxGKu4PwwT7JD9T5x5Zgq7ywukYzqSjjvk1L",
  "key39": "5XbQ3qs622R1GGP42uxGaxY4aWfaqfXsJVyvRR5wHcEk8jqjBBDrzUMKVPoYGYAjTMNxe7ePWBc4GCoVs3jvLprk",
  "key40": "4EMkizoDLPHsBwKjTKGBr7btxEM7JTv9XcwxWuskwksc1Y73SSbY5BJVo6UGPeRFxZoJWdFBUvFruZ7tRCstPFpq",
  "key41": "2EBNrHPPqX6mHnf9fjdpMwjuB3fDtDZQRgDvF3UFgzQGB1eWSMm9Ycx4wdiQYz9PFDBvWTNptxBfPP6mGxBThEXr",
  "key42": "4wEwPmNGyHqMgFx9F7jQmfsQDwgMHapQ67dBKPkK9grtQbX7va7FuUERscb6YtvEiYMc24uDNdQ7YoPzHJhNj2TT"
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
