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
    "2D2ZCHtxvQbQR4mw87QWRfna7d5gpLhtRu7BaMmjwwjoqesqu1NFcnvPrmoTm2nJwLvZNtwVHyXqxtdfww9BuTph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EnY4XDpgJRuqdaJEyYLk1dM3nJWeSVFg8S2gx3G1sD78nQXBBz6Vn9fWctoDYoWL7cdeRfVYNTxW6zeKTv4FbiZ",
  "key1": "5DdjGbkUZLM5vcGsDQRpcnYCBxyXkuHyRBbpmRJSp1mkXw1sKGYEUPAqwMwYZZrNVX8jGPacWVibBfBemKS4AkNt",
  "key2": "5NzRUxc4RjFEEgapsZCwUxs3F2EdZXAhxcRZkWk5VcBokdaLbgrrhAQoGfdkduXQ1h5MrQvg8mSJGCkxLab4XCss",
  "key3": "3YnvchBPfRB6Cm973YoDohd2E6NG6ooJCRagLVj741xDEDz57iuDRCsgYFMmYrUN8SbpueNejzMmtbLbaXQno4Zf",
  "key4": "MYSaekJmbXH2BQomPG8nzJWFGRUEM9Bndhh2bKepFd6Ud3HNCzW7kUBUhDcMsnff111r3rsWWpMmVzpmXwbHzGV",
  "key5": "63esaw4HcxdLHmA2QhTFFA9sBjR1kjC4CJddorkrD1DHGm4rPJeYzDTMTsjVNanJjrL65XXKDcVkCm57KoDXotYa",
  "key6": "4UpdWuHLivhQ6YdhQ3G5MAByvmEoF1PpF391S2N9ugHehaqV8VtZAdc5qRT8y63zzS3Rv5asemkphemgzj3avfKC",
  "key7": "4h73RaxiMWKvhDCk5aZJknjwLSisdHuhBi84H5M6YfNRV9GMMXTApGy72AbXXYAnkEtcSQtmypqqxSpNh6rDWrb1",
  "key8": "2xHPm927anmUY5ZW1uJafsKN3rYm7HvnwGMfZHDh7nfZWPjr8X6UqseKmhos66tLAEvdLsRZFdkFhkSH1SKC2TUE",
  "key9": "3cNqDY3QukLvEuWvo2zZN6i9mAgavn9WGSGAJrnCG1bZc822eDqHBCuSpRF1gknLe3kFTTN9BeyHzq9Th3LXoyuJ",
  "key10": "4VYPFDy3Ziydku4ZqL7g1szAm23WmXwHYBCNn6pvMLAzD8B3eqYdxq78LoiR25iy3rgnqoP5K6m8kJXgEgyTDo3i",
  "key11": "3TzSf1fUvARzTKs9PFWajxzGNERoqvRPiSx7JYmAifLQXaD5WsMRhLkxTeYoKWoj4u8Khd8efbpW1MSx85Rr9FsW",
  "key12": "63Z2H9NKZaJ9VQx3owM8btpwGamkCBAD1fvqXqmZc13n15VDQFpV8HQQdapQFwm1wW5PLZTNdfaPdF4k8DCKDBzu",
  "key13": "sFY3rG8w1seW6rLto4gGDQw2g4rEpZcCYZWeWdhH8JzPS1AyM5vucjWZ3M9K9MwBxUSkCdm2rgvJysoMVqSeLyE",
  "key14": "4kg6nEAvb8MM93zatbsf8YeSi87aG51WQ4bEPxCuDw2NcaogrWd2vRXUqbRavxpu4eHTWqbyea5ewNKLGhodduyQ",
  "key15": "knxcEA8BxEzMEpPfKLkS6PPCk5LGbwRtgty1CuhngyBP87c9saFPcm3PBDqEgUGzRpCyUVJ6nst6euxEyXgn4tn",
  "key16": "3dngdMHU7nDi2CD6NQd8kmmz4wnqugB8thmgkGznoGP46ab6xDGEgxjHFqTa8wFBr1NATmzLJdtXRPx86eDoQQmd",
  "key17": "5Fdppu9sA9kBqJNUuBEPex4bbkUCe8KA6DA4hn9Wg4e5qdVpXfzGLnyHSF54DNbJfJAM95T6rTmoPbwJA8iVzgZo",
  "key18": "5hBwqBDQhWBf4HzGcacEUHp5N8vduPw5JktV1MDttEaZuxQSVxwqSw72Yy7po2Gn6hsErHJWXWdVL86v7xb4Qgbi",
  "key19": "39hmmwveYTZgbyur6mJSAXwq5rw1eUUUZqKya2j2YBSFRp9FJFXKCWcZnxM6vKt6kFDwhcZT8CVrXAgDRnvCfiA9",
  "key20": "3NpQkL22CbuuKAgjWedusSgq1WpCojs97R9En5CAfBJ3rH3HyXoy3HMCgJVEfQYaoQ8fYpxz2onUHkgojkSVH78h",
  "key21": "VjyXFbPWyBX9q1F4qn6QdMQcJ93ra9febLMgKd3ohApaxRzbkiaAMLDFDLpuVmyfBawMdaDtqxSqpKs7HgTziXy",
  "key22": "3bAotWvToriZ1YAFB9x8t4KFDB3JUMUJ1MFx6AK6hurGN5GyhKFAD6kr1DNeUwGVkcqb56iB3SabW2EfcXhuwDQs",
  "key23": "573uHU146kgEp1AmY4B2MGZ3dppUT729PXv5QFGAd6sX3aatHbws1JmjEr7uEabGaYvAN9dtdynU2t59XA6Kk6Ss",
  "key24": "312MB88vNSsg5Qy1DxXQFwutUnNCvpRdTjdWUq17114wUqTktN4xHQpWWJ1ZAfvqZhDfDiX96SsCTwzC9j2ieufx",
  "key25": "51MczgVBPcGMPHAwrKnew2As5hf7arrwhhHbDWrRooSrWdfWm8wkdh1pBCJuCCPuCXdTHdcidccrMfiLTkcJkmV6",
  "key26": "5J7ac79LCoXopnkDad8iYZ8U8vrMSJKLYNc6XBtJ672MLiqBYD9MDbw8DAKtrMZsPHx8rmjptBqw5yP2skFrxHxK",
  "key27": "4rrgyw818wE85Bg2S5LHhA4gjuzkV9zxBcbxVyx15pEmfAPeeg4E12MjrdNbhXsAABUy95URfzyog6NGXL31agtN"
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
