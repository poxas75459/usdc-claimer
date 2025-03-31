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
    "4iSxcf9UGiAdJU9193dMU6bDfg6fixxxNh7qmBbgAiM4ScXD3G6K34coSxRhRNAy77kzhQyYySv9xg1DExibFA8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sr69PjdH7diWJcykTMpJkYLGnr5nXkMFmLiiSGajYc2qy4WXFLo495yHzfnr1upbVLKAtAuiaoSzaVXanVi5cov",
  "key1": "3e3FBP9Q4dr7nTcXXGjTcn6XfBH1ERoo5L9DxZGAD91qwz26JRGpZTW1RxV9x6Kfk7DKrb1e2hMPu7JgFVALQjyG",
  "key2": "36dy27zRtRdtzyMqp88pBxyfuGqE9u1AoBiKX2vnwqrqd2geR6Zox236HXp4njLweiDVFsuM9tcC5ZCPoSR1BrXq",
  "key3": "2MKXQaiTEj8uzhnwp4esX3VfoRBvwYzFwE97XSUNx9j13C1dwT6ncEsdeLnMhibgUeELpgKmm6DPxosuL9DvSc5R",
  "key4": "4zfCMXyHKUVUWxBNNwRmcA4dZqVtnUF7S87jV2n98MYneqfnhJo8czmabvFfkYK4sH4dKtdSG8SBzTN97VkN7K6c",
  "key5": "3t3jtrGwvruazJns6b87J498hXkvrR7ch1HmvKURGDuuzwSPoPDKZRTdAAjL1Z9LQ6Ehn6xDcWSJaU6LgQ6JZ183",
  "key6": "3LxruZuZhigthVr9ofKAqHeFi9btY3SRwYwu4qEggLnwkQWLX3DEJh36M3WtDPafjKaVF46y8VNyqyGQGMDbXULj",
  "key7": "4T2ez78ooZgo1dZyXaNktVodcW74fqbEvQPFEFLUaEjpNHTUHNiwsXrqp9nN2AUZWbMTDkqQdRoFLbCsN8QYrBcJ",
  "key8": "4E7GujK12zEsjXAa6ed8o7r86pabun6vFMAJPz9hQnJy7qwDazZAwKmeRqvMZLSErw4AJpdFa1XYe5pnz5kAgSgm",
  "key9": "5Qy8beCnSHmiZFpi6QUwv1QmmQfjncckaDCdX4ioGRHuqCgzh267Nqm3jwnbotEhe1UJfiV12zmvnVBt52icNz48",
  "key10": "3WKdKBdjvpwEFis23AGhuieREMJczyBfS7tvpYELCdaCjqBuqVv5bE2vc7CYaQdTk2T5kZukWkbAiojSgo56tF9u",
  "key11": "65uRfob9jLckVvUfuLQpqJwf65zwjQdBRGMqoDuv348MdGDotKeRmBdpJnyQx4o1irLKwGU6xuEKqwxoeXAajHJn",
  "key12": "xv8AVYSpVKU9A2oywcbdEBBxoZ6fHUqSQuF7BhUqP58LBVcS8MaqApUjG7qS43BK6koLrXTqTHHqCofmqAWjkF5",
  "key13": "2EjNx3sspSkKKpvxyChk3pocopvdtuWrRgqZSXe2kArG8qWL9ygCu3fD3i7r3aMgkLXP6fS8CrHHxEnzmwjXM9hK",
  "key14": "4F7rJbZY4EogjXfDgU1qUTU64RUU8kBE4Ggu6LUkzs4Ee7Rgpkz65zqTwgsuB3F3o8t4Ht3LkZbrCHBzJgGfLjCU",
  "key15": "2J1iqrCKfmpqS7jLqz2ywULUAEthrJpqEuGmzQdaMNPbydasqJHTwWyH558XmB22pDxJ5fdo1CRYQtR7iH4jd5qq",
  "key16": "37qH86uq6wzzXaEWEf17eA7BLibcoGXbtSFKrc9tEFcgbMpbaPeH8AqTyNVM1uPTf1oy1BUSHdDGCdWxJ4wcXjgz",
  "key17": "NfczJ7C2koUR1DpjG1Z3ZFKWdRpMZFB2y1w4hVxsJXm2k9Ky2w28uwX5Uv1ea3MQZiufzyvwYDq5FRGWUHbCbcZ",
  "key18": "5RrkEBY9Tuo2iVMCSLsi6tmpZdyuAqXCSgNv7uCCttMHCg6Pbwe2iHjusKJTvxgTJnpak2N9zYXa5irCkrai2mZp",
  "key19": "2X6kkFzwfs1jxBoKjEghrbAa6uGrcFWnjW5Cqmm5P16aa6HhAraBgSR5T3DCsjbyY2jtELPnB5ovieKr5BKndaX",
  "key20": "Wa7bEgGaW2UHMu4hTNCfzbvLK6VENasyuZGX31Sz45DPHciuCK67Ex1AdzGzc2k86LFeoPegK5qtuE1dbCVcMVU",
  "key21": "4kJzJGe2CEzZCwhmxCaNDwGo9xUSVkrTQWS9apy8uefwEmKEEWrCd9YUspKAFkqVvqTx5XPgQgeEkinxVTqryYtZ",
  "key22": "5L2BRJuMJs1MUfiarS1bY5p5eDhG23EUmvSkRGRDndxdydjdgztZTTfBi6PBZUcV2DW3xTisj3HJc6nv9QT2SePs",
  "key23": "3HwwweNU7mJyXwPYukkkCGT8Y3PJAYyh7dqR62Mp2ugHnFznAhcCBQe4B4jQENEqsFFxyzpedbWjoJQ48Q348pLt",
  "key24": "3PzTJEuZe45dLzKhPznioAUAzRFSTAN95r1AYu9Btu15nQj8KzeF7Vx2R6KRuB9LrYY1eapS85xsSdvhYDpEBFZw",
  "key25": "5BMdooGM1JsnXMnfjr8bgHrFiDUTfxQXUrx5kidD2CwgKRhQ1WFPQQANefnmq1AXxDRRSo28DKCggwpjA99oUQLA",
  "key26": "3EGHf487zUbKTTS1D4c2TD92g34rntUdKwCiuUJbjmWbmeSr4LN2LAiRhJQHx5p58W8jechPdB5z7rnscNmQgwTi",
  "key27": "3ZEet5FuifnbT8LgtfjJwcViv17YV7DZZp8PDELjhk7y8GPZSR8MygsRUNJ7NEASKGwcehsHfLHeSurMb45vXwrL",
  "key28": "5dtNTu6bKuhRA5d6N2WKjcvDrdQuUp2122WXEgBw4cwpTvGYWkxyNE7Te7aUUVAN7pg1SFuZw7tXXsbbN8Ncvm7Z",
  "key29": "438cHzMPrYitn4aRXNQcwJJaepamwE5oNowdJ9kgoaLZtfYKQnkFykwrKs2WQ73fzpwrnU55AnxawjQNUwZwJ1Y3",
  "key30": "4oJRGqRxao3PYp9u6bfn62CbpYAtxX6EW5XcrznPRDVdqjQUpfgKiKFL6JtaZicXCGqsipo7xSWoPfHKjnEoWCpW",
  "key31": "5XpbW5fcKXcSRs7PKcYZ1EYFEdM2ALxKVhPYGuzRnUWT6RAkpEGKF2ra4qW9LcuZQnTQ1qazwgeTdqUdmq9AJeA5",
  "key32": "5SxQCxf2Mi6T3p3KX4VHHs54PtRC67JqHXAxEAFmNwdiVG5Twdhh2HtJLH4gXRExzfssNnEkpqdNkTBWUeiHejV8"
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
