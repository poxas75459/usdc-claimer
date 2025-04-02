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
    "4wvLUr4hZ444nDdpCLQREEx9SaMnRba3mJiiawyHe7p8UNqocSxNj5CrQbLRdbqwovTxs3SRnTVHevtziTYC7Ryd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t5byTp1955oRJK37z3zFJTSCqQmyw1Sxm1f6hSnZcnucDRbh9Vz2nH5ozy8KoVnMGx1gep85BTYwgmCxTDahXSh",
  "key1": "2FKLkeCMwxY1q435TFUwdvAkh7qNSEKs4Rxo5j6uNZ4VBprto5ygvLhQbfMLLFgEwG8v6JCdRKHkk1qPFuQT7h9c",
  "key2": "4tnCiGHrcBTjxgV9DjuiUA1JwjrZ374eAfggPm8t66L4BG8E3Wny6xiyNbubATW4CpbXFx6Ad2DzjMMtJMf3vuuo",
  "key3": "AAfAnmqG3FXQGaPik6QPRsdmLLdEEXFwLZszxmTfcKeZkXheasgD4oBkMTJ54UfsxhY1bAEBheYfxiahRMQsxzg",
  "key4": "yusZJisut9Hwo3woZBVgjfEDL47Xdnt15Dj55B4NnHMy1vxz66Jz5g1mDjdgpPDeNn6bBTAmnoA7ZHqfs6S9EmH",
  "key5": "xmSchKBURbuYmaQheur84aehRS23BTDNGCprCwSqh5YBN6zLDnCLjq94VAFibjqXRtTmdXoFzSWw2iENTF34tyV",
  "key6": "2ynURtV8JK6Je73Hie6yjbV2HDWEMBNbP8SF57vBAm6qg7zvyCfmAT7wwsETfhrQJP5Tx23ErV2cphnvs3isEEQS",
  "key7": "5fKuxV4wVTYMGqvqYvi82weh7wZJ6WTmBXPrBBdFJHAiWYP9BG8C9rAVeAptZCWBgyFovFZYaS67VAszKorYNYaC",
  "key8": "2mMRdxJnP8EnNiVJTg5taAWeBAPFJZ1cNWrrfWbcSGYhysB2opv17cF8RrXAsUPokFzMWvUzAdTM9WjFWXhJoZeq",
  "key9": "3hF5FX6MjfT8LZ6h5izZP6WCY4YXxe4SDVBMjU2uQQLWb3STCMmntmgKoNrrkiLRAi2Je7533oYdeJJx6XogRBpt",
  "key10": "2cscTxmWCCvABNYW9mvWyPCX9JLpnNz4A3LtfGEbgZ71BotWubiYC6AaBGsBWVcuiA3b1FMiV3aDF5ve15VPVMQR",
  "key11": "4GwbzSHLvbZTAvsD3RBAZWZ5SzzLF6SkUX7Ay3Hrph7jPHxkSXmiHVzSDYW8k8QxHX92p8cHvpR5ppdhuYPRWMoz",
  "key12": "2BxdMMyvnTTuBaC6h8cSXJ42WBYbN7FAxx871uXNSxsMTmTRhNcJ9twbvJvNvtwLQZNder7kgfxcwbffh5y5Gsfm",
  "key13": "3VicF2qEwwK83d13bQfYLfeZSerXBMQ1d6NapvUMyv89ev34TjWaRyZizWV4QGBFdVFVueB5TkvQuwAF2CV8KDcp",
  "key14": "v296PHExWYDhq19w9bwfdkFJDttqe6KVqvPM8HC19QLgx57jnGUa7MQ5d7GK7eTpzfqpCHGCmbgNMQAXzgLG8dU",
  "key15": "2U9PnzM11435rHyXSJkxoWvE3FHpn2cgjrowEvh7z4ntpkqgF8BE6hbYBcxk3gvXGg1iShKwe4niNJX4LMWwgV78",
  "key16": "36qZoPGAARZHNQsGnyuuoZb2uAsZGqmigifr4cDFRCimHNeFHhKPFiU1yKsyr7nnLXMFZETiEgr3jP4EVHz5RJVo",
  "key17": "3p1nXYKUPcjy4EfgSNMYtYMTqEAxpEG5MqjZM6UQYnoXATFv1gAFovyRiNQvyVmQEQf9xJ3KVjwbcqwcPBE4qKG8",
  "key18": "41GqdMgsEUWQ9LvTEve9uMQuHGYuZkXbgg854vteusBirNCCvMswoDEYafc2poqy3sVeFuH9KX29zcpmSu21io5F",
  "key19": "2aCreyry2BkKhD1EcRJPhiHL1ghMEN7ZGTEcdfEPw6VohpTswZ4WTYSYCDpLGB4RLTsDN3nUnECyNQepQ9z3HeKs",
  "key20": "4iq2X2kzDPY5es81sGrPcqbQLH1nN8t4msgP57E7mqNqr69ethDZ8rkv8qN62UUixac1DQ4EeHrkab974bQKnUSA",
  "key21": "fg3N79kHXMmnmepNKyN2rCxAYPNziTLFhJiZzsoQ4zx29wcehuGxuc7Sy7ccvGa4kayq4yzpevTqpejQCbMzcug",
  "key22": "3eoBaaah95dDxg7ndWerU81x8TR8bAEk1aN6do9CaWpFkbPpkfQ6JXs7xM1MLPkZBK1UVfCWjMicDh8ejtXhpDM",
  "key23": "2Vp5BeFDsDLxCj6yzrZmr4Tj8rsAcN6QZ3W26QNFzBTRe9Hfc2dQqEWeYTyTzKmpL7eGc197hCKgauj3C7bPgPV",
  "key24": "3dW5JjGAU4E7gtu98etyL92tME1fYcwjDYJ9fYTQhZmezUZwRMCzDKQWYcdrmgmG1E8BKo7UfbUUTq7unrUBs5sg",
  "key25": "2vkFh4vL52JsazuoNPfd6eW4DpTfvrGwzYwD3Avbp8dq1BxNY6WnH8gQXgoCjJJQNt5hRiPRaAtFpQxcquGafayu",
  "key26": "2P9VnnF8Fe23NV2GBraFvzuHWvFQvBo1dqCvhVQ9kWhMFznixC4Vyi29m7VdxUjVjEYhuXZpByjofpJPSojru8gh",
  "key27": "2GGSgpLFxwmKYgowBGYjsHpfAYDQ5C8B8VHZ8Jx6A9Zd3YRgap46VSBFGP1YmMMsFJw5AGsr5RBXeCcacAcN6f1u",
  "key28": "212KGHaPbBGRNPFWJ9JoRnDA8NNKUWAJan2xcojuyrF4tYQh2h4WxKe5MjhM3xA3JW1s3dvXwq6BT2H5QWJKXCtc",
  "key29": "5xLMxExewwmdvgvYNawHSWo2jJ9TbTjbWYYRoZrSe1RhMXni9wDUZTUmUEfxKc97bnuoAL7XDRwXGmQdPSyxHbvf",
  "key30": "648NLpbaXCmyRc6Hd8z54k4hNB6gioFneHAS51M3QwUv15kc6mZzphDPYqbCtvJkDQHb2TpJ6SFoZqGaFtPYztR4",
  "key31": "3cUS2U5EvUTgAXixyJkNc18PYyt6oUe7ipUCc9R4MH5XEB6FHwBjrEquASAEghZ4QQ37fF7UmnP8QG5jBg59DdF6",
  "key32": "613qSzNH9sLZjkX4R5H7WxPVUw5HDgQbciFZ5LGmhNp4jxjwDNBa2GQdWzHxWLpFEscSd18uYpsobM1xvj2QKwRg",
  "key33": "3EdWa8fTRD5J63Lar22ph9XqfH9CFTFmCUiQBUq3W5rgYfh6jfxwk7isgJLyVH7tZJHTqVFADR8TtDuQNQy8VvCt",
  "key34": "4dFMKtqbtyCUzuqHCySxZUnKNkpMCDUC1f5WxSo5QtqMh5xuqWetfPu3tkP3JWEt9FrAdF1jxJyZfK7tLrHF3Wmq",
  "key35": "4ZGCpKURv3TgKyLBMqMntLPd4s8gFXSMoqSR5skbmsX2kdNxMd1uYCq324UGea1YGmFHQ145nPwiRbXhjZKpQorv",
  "key36": "SvpuSpqD5ttH4PDv1DRriviQ9dfCJjjgySha2EhQfrqgqVYhRdh8rBFmnYKsR2tTSpw6V6Z1iGDTGaumj9gBciz",
  "key37": "3Vt7kQyTkzNazcW4v4amXu7H4dSuzTaHcVmWJeVGHKcDToNf8ntcP6EtC7ey8dE4Vrore9AQd7GkcpuasAeYm2oG",
  "key38": "5Nahrktx1nYVZJQdy2gPqknK76CJBYub3kXnEkfVc3X1WCTgwdS75pJs4Rw4igX1SeGZCkL5TmsXc3ig7KamK1nB",
  "key39": "5no7hug53gGB4bNpiBocMspjYTvzbGp1WKFRqdkCSNZvx3w3y74d32ABca5mZxYRCx3ni8yCKfmyF3wtwc6b2WTe",
  "key40": "5VDmCNZRBXPT2vx6qJnei4K4yhQQb9KG6qa6Zwgg3XFbEEq7YB8cWWPzEBj8VVM2UHEhZaxDskFEwZv8qnzq76by",
  "key41": "473oDfA9r17KZVfwxpiBGjXaHmk4dTSZBdCrS1xnBYSok24UZv42RZxAnLmTcDarVB2H8r4EDDJLNzPWrhArM8ZN",
  "key42": "5dLk1xNqu3ZAmbyBWq6QhsLn3B545pWG2iWVcEDbUfk1cAQk2MP5wDxmcHhyw1tF36TSTAi1TJxYHNUZhjXZonkR",
  "key43": "2i9RxPjaEJsQY6321NLEBWESLNpSqKPHfZxw79bM5g8fk9KEjdhYYXd5SJ1ziMSWHggNYPMWw6hgP6tiHcMhtwDP",
  "key44": "vgSDVvNVfqzGT5n5sJeRkjfQvokwSduUJ8eSg2WGGXbuWajDZvF9dDmWhnTtaW1Fzg8qK2j5e4kbAfEV4HnUzxS"
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
