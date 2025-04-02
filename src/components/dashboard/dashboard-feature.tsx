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
    "3UCe6B4WFNrZ2mwQgv4g7J2vBwns1oNCLVxWfEnD1sGiUz6zPNa3LMafVEuMbTjQHGvUahuQVrzdRyEbAMMUyAPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45AcRr2Mt25baQ6spFrAGQbDrpPkFxfnEbyADpA4UZyuj6JQzCHugxapnTR3mQQTvKZu7VG4ZB1oP8q67tEjYNd9",
  "key1": "mWxyWNgkHHuqyCkHXPm3uZCh5KbBe4iSrprot8DrLVGZNWSaWcshaBR9QHAfPdFqhpNEtHD77X7pAzjFUoSKTz9",
  "key2": "2PowD5C8Lq4XvDswMX9fvinjJWxSf22akH4EQeFqUusSUyqBsdwuS4UDBv6BoxKg13sNwTTFAvnLWgXtVKkjEiv2",
  "key3": "2CZ4TcnPVxJtQnizSfkj3YkBHTcJZDZSn19Cie1AKF1HSF5iSSbaGcRDWmYvmpvKSFHERp3TzQtRQJRmf5s9TWNv",
  "key4": "21XBFUiHd6UCbsEuvQpYsAgMpTjQsdhd3JBgEgft14Q1EDpV9tFBVQA8JX1SHSxdTbLDG7uG5qD8zzsK4aXHEnNB",
  "key5": "2r8abWbApWWruYKUGDNP1SMEHSMf6bfV83rSizrm49zaLhvNNXLRbrCgFWYLMCcDawU6KC6U2GrAdyH5eErg4hSg",
  "key6": "2yU2Can7zDuB13nn6CXmKWYU1gq4f5WfwM7ExXeGte1674TVzxJSGMw7JQUmMGtmG2nZanEYwsfuP9Y2n6QEWTBm",
  "key7": "41o8naaxpUiyhnbKaKFTidw7Wvu38ZEyCTTNfBQvrkbYxPczmHTeDoWcYzgJoYAKxRNgMsHxmsXUiVhdVnFAKCyF",
  "key8": "2XGf5kKvYsjWsCokd62JEef4H3fMobqiBoHvsuENLtyjXB58gSX19jVSVPqdUa6RSqhegMXvv1GgYwVwxbv6kFMk",
  "key9": "2q64ydacM629vcZi8ujq5iV6TTirfovusGsBLZrdejwgYZ86zNNPcd4fsS8ZbwjN85gskmcsWvrpWHZbrhNYAu9c",
  "key10": "2WRC8RZs2Q4bZYNbDyr2t3q1hr45V41BvjFAmgmLr1NJT975qDRbFZuhfhMW82whvAFkFakAr9ZYFhJK1JcTEPgE",
  "key11": "5wFDkceSdBS4RvbPFkNJdTu2kpMhNBFGjYtKXhhntWMWGeFmrfJ2y1TkMjr7A8iMopS4xDfbZi2KedVXTYRAH4XW",
  "key12": "6BU13AggWso1VDHfg4Ewb7m59nJfSntyWffDcEuiCeJA43DiPCP32RL4jJQsNvsfoEFkUiLkhkE5mZ5WTpMRDgT",
  "key13": "5qZzt7vYpJBxMPXRq8LSsH24pyie8VV4vN7iiTXUpmNi13erxoWHE6d1Dz7taZyyXktBay7f8Emsh6VmcC3q47fz",
  "key14": "Mcvsy19GKNT7w67tx5fHxGSB5K1PKdQxiL8pTcPRDzzW32PNZcLRCYkoy1XhvXYFAUj94xYigjZ5KzVBsFZfEjL",
  "key15": "3PY5am9jPvzjxY7Gd3RUyUzGdCtJMH1yjap4WUQBLXzE2wzCYqwz8FzVTGCP5tBNqDk6o2k1EDcz4hL6hYc6u6gW",
  "key16": "Q98fYHo4Sb4hYD7VLaCdw9T64nN6vuf38PS1DPYc8DSykzwVoLJ1nwHM7ooCbcbFUikRuxncqwVB3bLaEqMu5qy",
  "key17": "2YkeosaYiYn9RTrbWn8wTKfkDkgEk2yjBW6iZnYTvxqWBM9oUqBw71kYcraAcgHb7i8M4V62WDpXidZRa3ohedb6",
  "key18": "5TWjJk3GHLpRXNShFNmfUPp2RsSF62wrKdu9NiejqV7WhaTVuRxN5S3kKck5xhNNGjRVR3Xa1URL2hfK9c1kVbYe",
  "key19": "4rUW1iUxn5QELJ6WtbJH7x4rwk4RTWerLE3pX86G99XdNcC593igJZcf1vsxr1VigfEKWYhehVXwkpJdW42uCBfJ",
  "key20": "wyroRKsLvKqhPJmhwjfU9eUrhz5n2A2YoXgD1PPQSi5kP4PDpCtB7XHccEa3yqvsyK2MnkEFqzgH64KQXvB2Nnt",
  "key21": "5BpwN2B3D5UdTC3qNjYLFdKA4vaQw9H9KkgS1nmk3w57B7YARxDezXuLyfrCVoBWDHzABYLiR5e5v2HqKF6LQBJe",
  "key22": "4BF42MP8poY5hEKHy8N3Jm3poTDFU87cVtHUSt6kvyhZGrHEbytu4JxieG5r7yoz22KpgAfG6BF1hvEpcoeFgEqo",
  "key23": "38hcyzpXxFMKBQPBGkctA4UTnAnnWsJr1xTqhLjEgqFhTAnGKuXEoDpARPqnpzz4NDuG5CozCC7yJx7QWZN5UYrX",
  "key24": "KzEZWqpdJ4jc6b4ZJjZR6Jjwmr12RaQiXVLuD6cKKGvCyKrM8sj58vmMoYGnekQpBP8yBYXF6kRDdxnyvuEHUB1",
  "key25": "5tvfE2XWq76CMvJfjinMtvXonZCuAmyfiduqkjcKGwNUSkNTJgDmn3QqZgJBQcNffVDcuPMp2569TyLe6tvDKHjE",
  "key26": "2A3yC97aX1GU2yXGpd1poZuxQpgx2c5YEqM2CNrerhL5MmoyiwazEdMEgbZ7utRmNUQKuQrrPhJCWzjh1Pz6UNG4",
  "key27": "ad5VMsJEGdAZ8d6aTS3S6LWZMogxgTTwS85QXYJcMrHAdnp32R878xERjqpgmY673M7WDNamqTa8CHWDoimJ2nX",
  "key28": "2wP1TsuAymG6H3KNjGLoTeTjsF1TaFrv1vD9f4dvr68sCEtsuDWQC4AqA7feVYRNH9bcY19FJVTDUz3ic6j7jqa1",
  "key29": "5AgQQ4RW118asovYfoBauMteHaCQNhyfZitC75Q6UDJLvZYLWQcrLDtCuG7kKnPQTgsEKEBLqo52p9YZgjdNdSQs",
  "key30": "2p1TMfWxzYQ8RVqLWxNNAD2GANXDTTZvktEaxYrQ7rMxaAVAu1jk6ZFszcZj28yY7dcVHicHvgeranvF1wTh9cNA",
  "key31": "xPrdxCXDU8C2WioPLjWHQcDT4aDLTsVkZTS2P5PLH2K9YLxrTAuAhFLY9MRwRaMJhLNWPTSFQpSvvLyoLkUYfyB",
  "key32": "3bYA6xfRmk7HMuQXWa5vJxQ2Puo5Tq9sdHjFx3C5oEUKjaQVs5qQJBg6ZbVPjVFK6n8bhH525D9aPcauNZNdee8d",
  "key33": "3qNW3DAT95UJjjeoEUCLAShRgARP7MSaGFtsGkQ5WXAiyprR2BbZNeQdtL3kmGegsQKxvVTMxLetriZbU5izxRrT",
  "key34": "4iMwewNprg1zvPfEfweXXhXqGSiavkGLVrMpzqxjEyDzW7udZm6WbJf2FuyYkuSVGx8orFX1isWdxh8uQpodLjRH",
  "key35": "2mw4A3vmGu68pqGiAYfTZeeyNw6bTLAj9A8PFwpj8a7pdDtGNvFW4iwUUj5UZVYWiXoo1fLYSg7a1s61KoLAfPqz",
  "key36": "4uvEbjYBeigXoNUqV3te1y8JBkKT5sX1Vda2DVf1cpj5NMEt8bvc6tj5FjsuQoihuZS42MPri48WiBwLtRLm2pQL",
  "key37": "5ThLQi2Yr6fKUrEHXC3u5krgzun5ap2fhqyb2hv29MvTsvBdgUef3jK5JP6aRSPCHKayWtPCM9SSj6VvXpPzGm2",
  "key38": "5fanEb9Ebq6GhTogJ1KycZUWqXrhLCGBpo584Hy4YG3AgvR2TjFqgRkkxpPfnXNyr3R8bC2L8nGoT5yh9tj1Q3UU",
  "key39": "4cv9edRpJRFiNE45fcSh2fJb3L2MzFBCXkrx1apxktkm2S37tZ2mtKKH6YMXaHNpAfBvhimGf1A2fNEThB7R8eLS",
  "key40": "3JVECouhXqKL6tYF4E62A1Gb4TFu3zAyoLXXEDL7sJ91TeiBCjPq4Pr4e8Ktt7tPZ9gpvrAGE4HCSX3pnPfF7g2W"
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
