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
    "5mDzTBfkVqPLewkSNwYvB6AejKp4pdoa1qf3Luq6Xsb7Gfbm5VWZtbZBXa9s1TMj91yg9YQ1w45M9W3GiKpeeC98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23Hk6EwgT1ezL7XzRnZMHWDBGtrqKAXisg5KbnzB8FuvPmCQXLe1x8qG4Q7UxKQoxXmb7biJzdY5P2jkvZnJydNH",
  "key1": "z67iXrdgFBg6kkWheg3mhGYCtjNWpg8TjkbjHod8dBJg6ZRu2wA313XdDaCcBVLTTCkBTDyKd3BUpLzgmvHt8jU",
  "key2": "uML81Sahppj7Z3EYv74MrHze5YkpwQ8DP9zLDZYmYMzq5n1MGuN6YzbKU5AvC6YMt9S3xLBpAxaa1uhSbyYpSSK",
  "key3": "3zvUMFS6GBfe1o3bk7sW1r8cDDvFdMmBP2MZzXjhQnMgAJU7yo436RVmHb6ebL7thGKtuLP4vHfu7VpfAe1GXbdf",
  "key4": "2MKNPyfQFYLyg5ViNy5LjhppLMF3QwpQVSuWYpmAnRBV2Eeg9BQoaUfTkfeDfwSNR6KtoCTiH8hcsTXmc7gQc52c",
  "key5": "5NXEKVPMZqiGKkj5NeZxo2EBJm9cQv4JX7mjH96qPwxrpczJ1EkC4nb1tKVNMqHB58eeYeE2pwFUnfFRavRPyFEY",
  "key6": "Be7rJ5DwjyUKXNva2TWw3hCi497oBrz5j8kXvFY4CnDk3mKaa47otAJkMeEFxB2mMnd4Z5LcKysF3rsbUzREFME",
  "key7": "GuJzKntbZpcrMGWw5xRVFMG4xXaKfznDv2vsfKAPYeyyU8DMeTvvTqdadjGzcCz4ou71CFxpNwxyUrfm5bFEH73",
  "key8": "23nNvsfkd5yfYekExZ6qiUtzphrm2ALVydhhCSW8Jitk5eXTcmsTJMBdPogMZ5wYrhnzsyLKHjt6pXzivW9rd9LB",
  "key9": "5FeMMn7oBs3sQWHpU979ghBgsii3XKQGrTXkjBo6SmqvgnGcmTLKVBgCba1raRKr6PVvSeaUpZJcjm5BWD6FqZGn",
  "key10": "3q4WbMn7X7Eo9SDW3WhYKcmYHAjjd7Q9Fqqp1zDmuDXH3b1zNZEUwFe6bAVpbNRx8Fz6UKy6JjT2nXi4exU8R11v",
  "key11": "3H7TY7jHabJv6LqUAd9ADwWPE7YLz84HujRufh2dpLyq5ZP3K6n7cNhHXT489ehfrQ4gwM3mVqkuzoYnpSg768rm",
  "key12": "4Vh7N7tdV6HSJG7NVaGZQQ3zTyMCk6e1YKi4jkMRoNuTiy2GQY3RiCKF3AYoH7PNdZeUxGcTdB6Zc1qfHEJhpNGa",
  "key13": "P6mwpThwz5GPMJLEAQDJqrKmhG7zKMinkfSdSqqbHZV7eRxLuAG3ezGY1VRAav8EGiTWxo1z9F71XHK1oTpeDua",
  "key14": "3EH7eCNcAj5hYq6o6bhKuED8CLPySy17WjtV1cKe5TYCYSHEiM3mat93hbCnGiAKgzf8KtrNUURH4A8DZX2geDP2",
  "key15": "59QGHE8nq8uQH4wm7oqas9i8jntY9GQnEhTuXbv6kHxLQDbcjyg7SQkeSTQ6VWb7zA8eJjXZiU1wMSHrMDjFXEpa",
  "key16": "5Kt82XbZucHeKWR8PfUuNRBKNrRJjTmpEgiAGMYduansna4prZsDEoymxqQCBH4ubphr6Ty9HcRWgRrnSBJPjwzg",
  "key17": "2JrWjhLfgwmXdniuusoBd4kvNLJbXjenKo4YXumGZSfAnoipaRHvGRVE4QGeT1tGoBeJuMoaosHpC58HBy1BFga",
  "key18": "62cam3xMRttn7oGATGUPNe4ZW5BaZLHTcLNE7d7gvezR1iu3pChmPuAvEKbSiTAxTb8yeEuhSCTKh3HCBmijaHK9",
  "key19": "2ENazXVYTXkt7YKpTGMbTpaT1ads7TvwLFQLKAAwQZqdNvsUqGmynP8mXZ5YZ46rZiqCgys6VTBMo8qNszHveUpa",
  "key20": "4ZLwSSCDpBiRUkWA335DCbktrmTcU44VuaaWksjLRfjyUFNyteUmze66sSmYrEtHDVYVS2GsEvgUXeHyaeTUrzk4",
  "key21": "5ueGQJFCxTRSoKChcmayAHoHfkVajf3SkYydCusx9rn6XSjMUzbmHLg3MvS8FdZqNicoKkEkWYkMom37L2Lprqsf",
  "key22": "nXrdXWF5HRzgPaBDFpin8D3iTCEwUZjGLYvgV1DFuqD1rfkrUHJtB2joe6uPyiJZyPV9Jx71vjebW7VVgqE8D5Q",
  "key23": "56bMYurLLRF8zKtURghUYB4JjRNPBSdfbko5aHwdKv9jtwTWeksbdhLfmyGcGXoAVLnJ7eRvJ26Hgg4i3NLs2Xnq",
  "key24": "247RhdQnfvPBeL7TaJZDhoseuQ2NHSN4rk3RypeJzRqCmyGoxi8dmsc5rXMN5mtS2cXrzPTkbqF4zMtKDsrpxxsx",
  "key25": "2RZF5nbyMoyKQYwE5jX6AzRYwxEZMxXseDihtys8vdUZ6B9psiuhwVnPnnhJpgwgYQcqAV1UVJvrQp2hmszZHWiE",
  "key26": "37U8EqddpZeP3W9Mtwt9CcqTxub55JN4mBLSstimjjYruBZ4juGZcCirUFn3nzmE2XaAFU8gM1VhwSPMfzoJFWuM",
  "key27": "3Q4EobzPnGARzSdA4bBkAEc1Uf52z42Chi7cVuJdf6GBnmR3WgyQdBSoKGM5rJ6vnbtZVm2W2u9cDb86Le38GwAj",
  "key28": "3XPk37KtoF5G52376PpbySv9UCg4avyF3V5Mk8BTpduJWakxbYivbgA1o4UJjBE9bxUXvhokay9evhfDowdYDi2J",
  "key29": "5xsWJ27n5HwncAwa5KALUvjmpVXeamTUazpESPxWHwtyGU2S6b9asQ3EXNeuem55oQuPcSZV3FRKoGh4FQ54uT4d",
  "key30": "2QK91Fck3kBrUcJLqpfSXCiCnD1ykcdbneD8hsJH6AWkDcPABmgsNoTCWd1skCZJB7GASiMo4faub98naYJXkKcm",
  "key31": "u43sNXEWjQB8JUVVjwDsYTeTuqZdvhscmdANxyM8wofSf6D2gMaPXano5sd3DyERYMC67aE8TMz6T66U2tiuyw2",
  "key32": "R3NSCxQSxemEctyWhQGEJEJwtsDmSaiw78LkZwbz7t3tragPPyQJWxHAhauruRKbfbHjHdg6HpER7FcEoTj25Do",
  "key33": "3wB3to1GffrDcroPPk5B6oJnav3mkYoHZdnmf6xzBpFLtacAPaDXPtifDnfi6pW81LYgXECSo2EVsSXh18rnEeYA",
  "key34": "3fNYYNmTZ2rweuFMhDExKGqi57dNo2eqhofqTaDwNPMPj9m678bNRVvHyhpeFTKZ7v1SLSmFevovbrVWSz3Ak5iZ",
  "key35": "3Tp5AnDgUTfvkeSxBeRqkLKTiSRTB8YAhTmMQFXzPKhxTkhjS2L8i72X4meLeUb8m3JqYiEEjhv73F33QR7hpHyH",
  "key36": "EsUUEGQW4LPRn5iBDHYVh4zQSQszFhUwSoLxjKGuHBNPWXKkLny2dnLFeLDPpusoNp2oTG5bpxaqpAir4ebn5o8",
  "key37": "3AtZV7rq93JyGXGdG2MvtoMm6N465d8uWyUqXaY23r7znuyBAvxW8JDvLRLidonfVPKG4i2i8Rh7e3ttQsZFt8v9"
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
