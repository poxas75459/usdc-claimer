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
    "4bmHQ6ewdN6C88UV3LL9PW21etjRL81sTy52De2S3dPZTnPvvrn9Eq8mHCMC1mbfCPgQAnZAus5fjcuvcFfUTFFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xGZ7tPPzqWSgjknf2bP8zEsdhgqa7ESHbANUpeksccB7SVD98yAayxLUMurLZE5koRyqiM9EPyCm85iZqC6hKaQ",
  "key1": "3urawJtePgxTmbUJ8V9vD7n7Z8iEfpMWxWrY55jNeojsBi2pf4Q8gu73yJLo7LtcBt4QZeHAdAEQWXvP7woKd6QB",
  "key2": "2kQvyvE5xjhsPFNDLcKVShagzJ46s2HqRwWGKY5CTwXtSZWZ3tsPhmVXAtCbSUXZSmZFkbPN4LBiPGFtVmd7ZNfE",
  "key3": "3eGqvHoqgm1yypSsZai8BgUNvCukp3Zx37n5SdLWm4ebNb32mAHGpw8mfvAatZ1RLVEX7S9Y6z6eX25MMMAZMeWs",
  "key4": "5TukM5x5rjw2K6q6T6PeXSbt5a8AYozcMcNEpup2Efz5aYQmhJTLf5mnuZ5avTKfe5rUfKsCGtEcszpiyqo9kSnB",
  "key5": "5pxyxFCdtiG9LoqUPirx5AZnLFzK9gmKiQdZvro67rUJVLePU3oxGwgsMyGHG6JpRHt1z12hvzrgAdUNphjEKC4m",
  "key6": "5XttTK4ULWqGs7EdViPufm7vH2G1kyJF9XHFGCxTSY51Amy6ZrVjdzBkUnV5JmLPQyYzJAdjC95wbGXtZDY7nhsn",
  "key7": "sr4DRwKaxd8wWD4bt9WZVepoRRtinPGN58HoQnHtwu16bemeNLLmP5jy41Tc2MbqnawFDURURRSUZwDNroFwQDe",
  "key8": "5sdL1VRskeaJjpsraKdYLfQW2XSQsPRQn44NzHkz8c4vf7Fn78hTJc6ggUCeYBCA7Umg1Antprvgx5MdPYiJqNzk",
  "key9": "3wayKpWxCN4UQYQitEDAwMk1wttCQ5ww69uqcvgEo2a7ET8e5c4DhNMbir5om4jCJFdvKzkw9aFwRk7GMJLRjT1V",
  "key10": "2aVREZNgSwLhmT1kKvNgrigk6A2b6ioXuYToGT5Wy8Y8d4rs4hYNtohGeSSQmUwqBV12krKq6vLjpwPAbJxijsFx",
  "key11": "MoejhDUeHnCmCnHbgXoesZfLqE1tUNhjixqEvYt1Sx3PhjEguFbofHTPXKxvYH7t173MQRdfJRBhrrfyxdD8MQB",
  "key12": "4a6AkjcGJKYgSSw7wvjReBU1Ms3FzZ6MycRYeUniJWkZhJUb2kycggps81uRAkh4gzdVCFwkveYaZEBJYXJmwiwp",
  "key13": "3H6oU1z5f34xNapH4YZSV1wQMmvdPjFADqrdjezWsk429yzy2LcWavPGVn1LYoTP4d4d4ZWtDYcgkqEw2qRauEb9",
  "key14": "uHhmyS95EbD18mTVoPtaGAqFMmErs7q85sqwkvZMW8U921HXqwY5cP9EBs8kLKzc2w6etLLbsXBqd9S7j4ye8T5",
  "key15": "38RRj8zXuhK7D7XxwJ7UZ6xPj65zUgcVh8zyzm2dk3khy67RDuDJdHe975GR18KSLPdRkA2JLpow3hFQjeM1uuie",
  "key16": "5k5j75VHnBXX5QnDFMFFDcxuQkG7BEekYBWL2mfBjcD4Bf5CkHeQ5FpRwMXGKh48B9kfftYrqc3oXTGCZdWA2KAN",
  "key17": "5BDCByQBD9cMhkxLjPBN8aYK3FaQfrCVCuskmxo5ZLm7i2yCDmEFmM5J9cuMKkj29n32vfmJSPx2JpqvzmahckKg",
  "key18": "8cizDmxWmtRvrQ8oSC77eFg4Q7cUM8QW5LxwaaJXF5ZccSWPini6SkCQGT3fBNyS6PViDQrnc5gMRxg3dXhW2Wi",
  "key19": "38v4WbjsFAGfGEso9XdatjcqA7agVi4Hh9eZZnqF2xQk9GQqVSGniCBYwNyX5LKCEEoyKqjRKZrxu3TrKyuQyftx",
  "key20": "2ZdB9V3cCTeKc13x18u4yuZFbHBXX2P7HyUSFCnpchZaGGNAuJJeNyzo7F87ByB7sh7RrB6TKnPeft5fsAVfXJYE",
  "key21": "42Mm7ivGr1BYzPKhcoyQ5ttkX9GLermTvFuvQo6dFNMq9vSsfdDtKtJxzedd4nCCzr2sTNbg7ovyv2AcDHNaP3Nn",
  "key22": "8KY7cQX27EYs33oqav95EmmZmENKthhu1TL9XGq9rVhVZ1WwaS1qqTBYNJyTuJHngU5X2xxb1Q219WvxGGnxDAU",
  "key23": "126hpzpGREthEFTYcwwotjak2ncWRuMDH8FPiYGSAaQywJct8WupcD6922qipg5am3ghK3sfYWGmypDjpVcmnJQZ",
  "key24": "5wp5rkCwgyZUuyR5KE3ZBFhasXQDAfCr8Aidjsjcd5SRqvcX5N7padgsL2WH77KX7aPPEGegUeY2qGbBGzVdKADH",
  "key25": "5rPZfcdNKKwvZASGirkQQp3fWeMLVRAD4fBFbNM2kfBXqjcsYpJnh6aiw6gBS4f8mCwErc2sm1vnq7EFZC8dmHNm",
  "key26": "28G2UNkVm3wztcy2RrRT3mBAwpRjVNvGF7t22zzjYgxHpSWkLmmTQXhh461j2RqZkvbRercVgRiLL8tzfYPeAmWM",
  "key27": "2eSzM8iYgj5Tfq4jnC4hSfupEkPBWE3zzNDMRKqXCuzPKA4SyZP3xHrhcgU6oKQe8eAczazmtVnLdWxE8BSBxvXf",
  "key28": "1J95E2xZaK9oWxkiNgca11cTfdBg3SriPEb9QzEpWMN5ETaLcpGt2uJLFvgp3ouKfGf1snxFptnTsjRMZcJkixV",
  "key29": "4qe2NT2fXXeAmFYqmAtrwj1uHHnUtRJgCU7TtbJpC2D8NvcLrP4oTDhgU71MDLrGkSnvWc1H9Ap4K1ZJvQr7cj32",
  "key30": "3DrJweiajojW6AE9ogqUQAwZJvFZy8PqDAQAYmFwCgBgpim2Su5KPkyM5szZcNzoCz7kEKosBSq9vpK8RhWBDxsB",
  "key31": "3saCdaqkCLAVQDX1HCUpWRsf4QpmBMpes2yd4gUTmZq74yLFb72yyvoiP8qK8anVJcfBGYJwmaeCdrCJhnZgM3v6",
  "key32": "5CknHH1v84SHFhRN6hVFuqcjsxn4kFu6g6TZBCyPmku7ieNSs8QNZra69by4Ru9NR1dUYscb58Aes2f51FMXN1Qn",
  "key33": "563XNgB4UerM8tsGzstHzJocct1gh279tWyXiY5KsB4JQDmxQLE4JPDYhzUxrAfHFxdMPmNMKSmEpPaMNGwdaHfa",
  "key34": "4Fb22g88rTWkvQvDvGQFGup7RNKKR8iLm64QNZ3deEFbxya6sHjps58QesSEiGJkLXpNoUx7iV2v4uzTs4f3bFQK",
  "key35": "2n9mGCX7MUpNJNorJ8eF9dv9YErGBRvm8GhXuv4vEd7dH6VV9nZ7LkqoAeFbWZGqtmZs1VPN9qBP2Hz1hdFWUaXU",
  "key36": "2SJoSsyq7raVB7RbDU1VHLvzrMU3mnpe7USjoD2egx2PLZPwLSf5krFpv4pexfMFiohTj6CXKfZ4zKKizJSf8RM1",
  "key37": "28DXdASvnoT19HTfYsx4Cbb9XTJmDvp33vj2FbkCXLTmg1YNCRFeusn3WpJEHpW3LRJ4vAjDxJ19CYThHq98DeM5",
  "key38": "2pgbYLwBbCAc7YAxS3SfPmdFTm8s9AP3iJoS7f8EQB42TAazAwiUpeQBDTMdTknZ2JkC5AfN8jrwM83ZMYgD9bgL",
  "key39": "F2WbYBpMjLCrW4dF7E5We8kHwXKf3t1H6mGaoKfQ8jC1QYCTVtcK3WvkYZxdujZFxGMtkAUNTc5neqVoFpHU3Y5",
  "key40": "aixBGyijPvxjo7YtHZXpjaRit5XaVaDPbcKjee6Sxm4GwWaoACgKzKmt8BMYq817q3P6tWTEXwqruAAKDshDSbw",
  "key41": "2oTtQTcYvKyp2P5PVmCEXzQbETqsz9FRxwG1q9mP5Rg2VTTgGxMVxkjcfzzabJtuy6rTVmrG9BsemrKPqpZkoZtW",
  "key42": "4cWbjsBXoM2WD11YaRv1Vo3rtLCUTTwQFC8VhV6SmZ8pLJzoGk2GWQEVF11beUHK5TfCqjhKv9r9QjC2kF4b2QEU",
  "key43": "4zSGaqCFFmaHetxYwmzPMpWQb7cQS1XybRGbzRXcgZjj2TdgbDjEXNACkYqiRRPHm7Fs9dJn5ZsgmqVbqrMdyv6F",
  "key44": "3EpvDYTS947nJmbgdUygH3ycTYYh76JN7Kk7L5y1RP6e9YG8vPcfRSsjpgtSu9qLhKJGAjZmXtZPtMoUP3MM4JiQ",
  "key45": "JJ7uo5q64J7Cp8MaK1H112YLuvcgA4213z8DYaGS969qdyh57SYRB9WXfX8ejMtKeWAPxPsBuJptNHY5L9wfXcB",
  "key46": "4K5XFwrCkabndctHz2tjPxbYPzogdSBp14jyeEXVi6aQMwacckdbGLygKcSzfz4EWRpfe8ngwbqxTM4B8rp6p8QP",
  "key47": "3n5o9czEWMMTsco3fS26ZHK9i6d7HA9KniP4UAhf5MQoWeaHVLYkNHtMfKZxzGT45wwn5ozbVr2gwfJrYcj3YeZc"
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
