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
    "39B5Bcyu5MffRKus3RpyJ4n2x7sFhiFdKAHLDN6TD886y8aYVkcFeSxj25nAnWfamTQA6SRAfuw4QSNvyZZqkHk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EpiLLA64DGLapSvdWoddeWtTMXpVf9din61ps3pvTcvQFQQ3wSZ3mbE5DMcbS3LEsCE5paRRF4hMyh11B8g3P3j",
  "key1": "FKpdEiEU8ktA4wdrd6Qt1X9qwkB7bRe9BqH2SbXJA9XCYFxsDPnf87ZkkFpX2e6qKdnTBh6QqBG6Fvru5AxGcYw",
  "key2": "5zZbS3WpSmUnZnQVYytzuCvbEUc2GFZG9rALHRMdVCVgHQfjfiN6JPEST5451VUcXFgCqzA3qsuRewg17nZNgSyk",
  "key3": "3hbtiyNwy6Bo88USEhPTfY4FKHdcVvPLyeZ7kibcshxwV61Rx3QR7vVm323U48HJywYYGKQgncXx4Sm5SiYt515S",
  "key4": "aEAJL6GQpjTaHJBhfsXSd2U8YDMk8EcGEzmyg15C6Sqno5hr1x3tErf9Xc6HzRx3zHdta7F2oaKmXkzcAhAEjyQ",
  "key5": "5jXmX2iebK9wcNqTP4aNRfRM2qQRjUVWWto21jhLfcEYJbcEzYx8ardCP6DSpBLsVhThiATWcWb6tD4ticDqy6QW",
  "key6": "42hK6mNT4brJLNBY1jodA6qAapwaUKKA1rp1N1NmhW2tNdq6PDQGqHcckpU457P7GMhM8bL7hLt1WFumaevHkbn6",
  "key7": "Hsz9AbVgkDAjCEtX6aPE2c8nvWYWBBJ2RrMEeBqdp8UM3gpijZGtSqTJxMFLpFH9pSaXFWpQ2uzNCK6Uo7PLF9Y",
  "key8": "4Qdxou1gPfhebrPaSw6NHZnr7ugArj76wcEHmSejnL8uvoVDJcZKcjmbpiybL91MgdfEwm2doR7GXVdn6hFfzWiY",
  "key9": "3urXvNpKVNu25osUntYj712THAqzQ15xwy4mvccTboS5kDkJaTRB9XH2qudCB89s5e19V4HU4hJXYPwWjs2red82",
  "key10": "3JzQeDTtR2U3taPrV9ArApCpin2Cp7VTAAfBdZswB7rdTgVY6EWxpNmaiAcN2g8JXqCseumGfpM2WGeTF4uzP4PU",
  "key11": "3Hbn74jsgaVbYgb4xpvbJSuyFTLfK2Lb2Q1YB1n8XD7DMsq4AvpjJeAGBZ5M31pfqVSSLnRbqW2u7xVb8J6utCm8",
  "key12": "LEmoeBiDn7juVQGa6mFgXZtB6wxi2tcAAW3zSXgbskaLR7wbZhQUiKZm7tTfcBnctRvLqxMcCUkhfcwsH1Tqi5S",
  "key13": "5EfD6rWLcJqsgCxztD3CKSr8kpZSnVzrpsDUPKhyKyrTbM2FGcye4H4tTbn34ibadooJaGzvZgtkmXXajz6ryWBT",
  "key14": "5uZJi7gchAXQcg1jQGm2HBsPZ2RcAZDbSTeh1znKtRyQ4zmyCZqRztQQXKNfWKZetnrPwZCUaLtrm69z2Exz4arw",
  "key15": "3qdqESEAih8FzctJ6yR98W62HMs9dsRnZ4qGUfPAwGtzk8ATByE3cfAUXzauKTKuj7T45e7zm3LdwBevyY2XXyTT",
  "key16": "26NZU6eFctrnouP2wF3XQs8s5QTbFANeWzo7Zwd2VuUPn9k2yhNzMotH3jKwcXVELTKrfWtZgj34eoLJM1TyEwuU",
  "key17": "5ZJp5Gwug7AGVZqDAJVyPJsQNa5ujgzhETZSJphsa8NnET6PgD2HCJCCn7KkjuQWP1FNnXAdC9QhYV8SMyspZyvZ",
  "key18": "39CezFBTw4vjJoUCtXc1RUiVq69if2bgncTEddXHUQvvHixzSJ2VxXFXRoUJnFB8hWuJ3JwjxkN7oSd6beBWBjRu",
  "key19": "3tJuqn16gADpUxb4j8wYAuMp6hVvHjiNy54KBqT6vP7qwuV9NgHf35P36k3zBbEfJDTAnkLJuvkPmCA8SiFnhuQA",
  "key20": "4yfVcky5bUQrFpuavPUywjNe3pwLEzPT4vmryJa5gGAY8ABt5puuQ1GTnfHVvaWiRj2DHUc8dKq8d79UUz93gVVW",
  "key21": "4hMZvkVDGn8LY2rCPmEdKQUQubTcxpXPZY62Dz8wfYKiCtceSk3tTxC27ZDG6kdPTrs5oRc6f6ZyVLLDfeqLqxQ5",
  "key22": "2T7A2uXQWAM832RF5nxEZUwudXpz4hLzZ38TB9Wx8iXVQk2WyA5ZNvkuRn9781tmUE2EvUqbpjDqcFcCz9PDSwmL",
  "key23": "1XjEwUwwvQAAcqm3FtiExSvdwwQ9xFqCjN6gDvWFoTq7XWLfKNiT4KuFDkSTqoeBUDrRCEVzfe18epURhfUX4Up",
  "key24": "21rEBegyuK3MiuVRYchRwyd2pK6AR8mrXdxorJRrD3eAJfJoTuFPfKNLfUkFCos4EVo25MUD36jWc5q8HeTtw82P",
  "key25": "SrUDG5d7SJniQCNn58SqdZjrYR7KNjHFoC7iyv8HGbRakBsP7CWZUjcvDzTaqJ9gZEFqUDp8GRSvLuBJyNtsczW",
  "key26": "ScgP6vyQRhBS6iYitEqRrmX6x3KTAPpnsJnbqgLeUfjoKEZS8DfMfTrat429QZVjUQdhU1MtAvPL4vudPNoUA6z",
  "key27": "2FSftUZdmiwzqn8sbkFj7g9yc7ggFEcNwXLDk1ghEagjYFyemmPYs94zSyPMf9gdyruhBYe8MXhyMNxtiHzfEyHu",
  "key28": "5CCrdGVqqZ6bE7TWSvf1HzoZmm3zyc6iCasr1snAc5cis4ULHMyQiqZNwzvoN4CJkr8tmmyCY5VrWSragmGxGQwx",
  "key29": "4Y3aEDdznKBz5B8azcNJjxafd6pKHQQpUNJoxFGc82JfngAJBnHhcU1951cH469jSWoQoUW3g1fmEe5FTqGtjVq6",
  "key30": "2GRG5yytFPkg54QoraFsG7pvW2XuqXqdaLiZ3Kx5LVobbiCX44hdzqoDvno9wwx5b4cYPKMkSqJf4baYph5tdLmS",
  "key31": "2EWGkrmc5T8pNf5nQzFnj9e3TFm3BDNGCCNqY6fbkG7knbn7y5yFHtbNK7wbPEPNt84Tbsj45sQN3rdUjdJQXB4v",
  "key32": "3m3n9A1UesVRfNvuXbuyLZSYiJmS9yDMzjv16sC1BQ66PDD1DmSrcg2WUcwTNbR7Grru6EcxSXQHNhFcWvGSvjB4",
  "key33": "3iDFjkEVoMKXmmHx1GivjhPiZ4uLBz1u8QmYCKhU4Y25TXmmQyLn3sRY4ynKsKHR9avQTC3nUB1CxRtPmgqaa2Yv",
  "key34": "3pTKpxeUCQ9CW3RdjGcaBwbaG2nRek3pM3YfLhmCh6KdfX1wpJbjpgj9K875zCD6Zf6eRfVPkJy4LuQeJfMQURJR",
  "key35": "4gdy6sMEw9oSZBJMLLXdYX27vGqwdQFh2NpNG7uv2pGXV6t2SFV5V9qLebr8xsM4BdfKFGKKQbnRpR9NuuMtXbeV",
  "key36": "3YVJ6DzxbJuQsDLZ5QXVPZcwRwNaD3HoVw2WrXD5d8vShXHbkge1L5T7TdizPJH84EWWRTq96uiCv5E5WAzxo65f",
  "key37": "2sHqTU9So6P1xPF298qgxWvQ8LFS3iCCKv6P2dVxjHJa2fJMhy3STyitNifRuRbiESMX27GsGJQ64GC3K5agMZFN",
  "key38": "VLWBn5KsddDRsvS878ZFCiprjS6rnAvoBiKZ64AR8UTDxSgpAzywYUkjugQ99jsKwxySTot42mPPuSx4tvz2XLn",
  "key39": "5Y3JwB5cYBryKCpMmSJ8J7m1DNXpNsQnQsdUcgU8wGYkraVoE14BujXgep7fXeLetnaJ8qiUeo9Ehdn73ZFnC34p",
  "key40": "3Af5uQUVWXaJTb8mSan5G1EvXokBghfS3pDSQuUtBFt86tzZP97oSJzLUQvmPixf7rZFcxNmLLakVXxWcg96WRSd",
  "key41": "4Lpxp5FJMJFXA4NNNX8Wbwk7fSGpjckY9bctZbmbLPomv2i6dKkNjW5VbCT53J5EnLzttYxw9jgSHXMY4iczCBmm",
  "key42": "2QgRLSBm8mTopYDEMzBKzJH8rsfS82YT3tnJYn5BuoSLX7cRVzMPd2DRmEf3Dfqibyn3UEfwrySZnyAZrce5XvML",
  "key43": "2g13FiGMdDx735cp2BwjBvZJqoojQCAM3E78dMZ3eV18hGAMEdEgcQNQYwVunim5ehGvvsRAtThQ8x1xY8gRDgr9",
  "key44": "4nX4bArmrKzqSGLkUmuBFKJW4XvuNrVAdbLHqfYFDNsp6hDs3HdnGggDLTQDhSbuKm7DmZsDiM4nD8mX7aEka9bb",
  "key45": "4Adggb4CyKEQfmhUdXWznBgBZvrwsKSp4KFhSe5SPpY6PD5hibQYq9p8KJWLmFXXW3kKTZTjsESKEH5aUWRhsque"
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
