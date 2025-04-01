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
    "3K6W8kkzq4pEM5JUWnoGYSwa9xGMb6cdZbQWfpmEQ9Jqoc3LTzDaG3HSP8pvnwi1XD8vyTUsXCCfdJ9xsMbnz4La"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mvABCPujTgbmCHZMMWvdT8cMPsYC81UWNVaTtQmvK4oQb5yu8HrcygAqcUSGfB3rYJJqQEXzkTFnhqEeUs49Pbx",
  "key1": "5UVHYNznwKdAbwQYidRdJRswPynpmcjb8KCTTbPBdVmrmd5eBeUCeU42C7mj3dLLyA52Uny93aPEPmRakceAhWR4",
  "key2": "4hDSDVuGtzga92Bt4vFSw2WsPDrZpNGM17VyZiFdnRmezMFMpbSUKcD94EaFfmLRScFJvUzwNE9Gauu8G59mbDbD",
  "key3": "3Q6zSTtis39gQU579ThJeqfrkg7NNPWVNSx6MDqhbYATcL1scjM1YS21DvwrNdF2aET5gUpSuMGAa6T5G8CtoTUd",
  "key4": "2BscYJibt4Nj1dUsia7uyLdQmJXRZTCJ9cwX1N31Er96Q8CTweuTJsNTMhCyDtSD7c4iAM3gKbz2vsiBVdpkrTti",
  "key5": "5TEyjbkf7F86D2br1YEDCfzRyvswMtDCy5KhsgRc8FTMfuZmLdAXv912yAvrBSwawUJXtEFUaTZEKHFXUqJuuzGr",
  "key6": "MRFGJLB4Gm9Ewu9fMmJKYSi9z7z4LTS51FNfBxBWQT6gimtQ63NG5Ggrsoygd3Sw6LAq5GJgRkxY1gHw5d2w23a",
  "key7": "5d84UUxK7ibVxM8sSMitH9cMaW2qwL7RC4YKWeYzSv7pMQfeCtyUJLrLf9Jwf4tKF5m7znLYcHpDs476S6hbcd5L",
  "key8": "3uNAfmCEzzhyqPJbt22MMpqKuCCbxKn9kFYNwL4n83JSyKtd37RhG2BsRVsqou6eA3QNDD98PXdLJ7uozhAQqSMS",
  "key9": "nbXp114sXHWLKY1BhM5DdQQWdevYPGtKpuHpZ2McE6pzoB9dGC4dWc74UVk3YJqGacoaCgvBJjnRGJkPXHNDd7Y",
  "key10": "2C5ajWuc8VirpLrWDq4UKPHhiXeX8QimnXdSqsMnn6jXSwNd67MYtukT6jsGW1JDFpWxkhQQ41rv4M5EefDt1VrV",
  "key11": "5uJPeJ9hMRpMag5WYrYoUAkQxaeTkJiv657pJvmCzXGFbQ7jkqN713oSfu45xjVpwkJBj2yyzPjEkwYHvKxK6rpV",
  "key12": "3zBTQub9k2q1TZMKsSLm4R7wXySPBWj69VqNzyBi8Vf33ooFKudengXyW1j6gkaSzCm4D4BnDabEKadHugust7nc",
  "key13": "5eiMS3ANeEuaSkr3KbRpUycooZwcTTjCXpkjgA549Gw8B86vfAcJRc7WuQ1tpZ7BMnq6cyEENbgCuSTLA2ni3dgB",
  "key14": "GaDJuEKSFsxDYcDiGbseKfMsZnzGAwznPw3W53ujEgKGYfkWZ5tKoQyCiYQNLnWYZgfYjnEuFWqUEhHEQzBGgB9",
  "key15": "61t9hKatoJhvR2zzh7tqvbTGb8KDVYncMmHNZkrDbjhChXDPU6AHExsN7BZsNtyVnY1tXjjjAbQjKbrxRX4jkoCz",
  "key16": "25kkfpStGdS5CYkF4X5tkhhJHrFmvGyNC1D8KYXiamE4uBsUS8WvgASU6Kp8ek4veAGTWKfNMbXXEQL4hPdfHYc2",
  "key17": "2mBNmNiQjfspynNYiKAHzyLKJQYv2cEUrnLqW6TNwL17yVrxcAK3nFuRY2oomKJDXQmUyuouEhYqMZnvLdttFyJ2",
  "key18": "2LDN7F2mbN8sZau5mgMpDsL5gyWzhqTdaLSia4KKoEMByWobDNfyARqgKtZRQuPxxXbDztrmrWA5yL8SnW69rptj",
  "key19": "2NtdydQxQt1x3JFZTwqajUNrovvHNQivdWh3mFsqoF3zFysCh1dt3GFWwybWqeEza64sP1GkyvbnxQkQNzp3eMFY",
  "key20": "3QqNk1pSa89Sj6W2zK9SfZyUAR8JsD6MeiGNUgGiQmNHREnUDGgfEiWPwY9pDU7FQCx3oHwPCgv3JhPN4NxjS2y7",
  "key21": "4HQvn28PFHv1rNCjRkkmJ6xxodbU1UnjVq8qQAMtDNYca51TRAQqfLvJi5DBt1WzPTMT1YVdV5SUPrZ8qdoq9Ehg",
  "key22": "4U76viWXQBGR4yhVxTaL8ZbL2SLWhfCcjY7asM5mDAXSCfNKCetRNKhm3SScG7jCvhXXzNGUeQsdU46EbEp7PkLz",
  "key23": "3rEmXVLJ86tu2meaxge8QcE47k1K1vjUnRWQDLL4rCPJnAjWi9BEyNHshYb4imSenGBpdB9tNP7PSVuLwq6aG8Bn",
  "key24": "2YLKS56BFyXAqeNnich7DLwwWMKrZ1haHwfB5qDwX7sRQUoJufYa3BjWwVtvgmPh3N8RZt6EvdeangCeztsT1gzo",
  "key25": "2vBn3VsUYm23CAhRqz31E3rptGkGpWZJsWhhKnjpk3LcE5W6fQZ31SRa9THpgnp7E2Mo88vYRg2pZvBZVQyZMMQK",
  "key26": "4GukTWiC6PnQD2Vzt32EUNwzvJpPWEkNHMhr3zqdHJPoSu1g6Ms5ZUx75jnVheYfpQqdbfhN9igVQFq2EUpjLT8U",
  "key27": "uof4bQhXo6vaywhmtLVv5a13cSSsHMn55XgozxuHtS8FHkuK1xVhZ8zssqSp6x2CnWgLa3k5sq59vzFyLZh2V6n",
  "key28": "5pY7YJWGTj2V93DruyxevrgrLFNwonirg9c2YbyBU3ENjzhFRiwXpvcSec15nwJUQd6onckgxubL3trrRb6KmyKe",
  "key29": "32dpHEdX9DDSrVS55mTBxRaASVPiAqm49yrCyV9r85Y5uSfKH2GeZXpk5KjMx8ePLLxCJwTUdBeKB2gRMKgeQCGC",
  "key30": "3nqfjfWpWntPrN1SvSM3Z3TQBM3cPNLj8DwyqzSWHzKK2pM3wTx6BnttjgnrSMVqudTJYatG6Hqa6vUyXmX2Ziu8",
  "key31": "5RthGDM7dFGzLEsG2iSDd5QXEjPZjCW5tc7ovwTbieK8eqV3ekHHUVcZqR2Yy6VE9i7DhMPRmnchSmvUhC2f9i3w",
  "key32": "54mcMqGxSYM3TbsqmnQkT96GQgFQFTevFVoGhP5pUFsdjLKTXUTmEwiZW2xKkrFjcHmdDCrBtJHaUMeRctJqrUUS",
  "key33": "2pCKGCmBgKCoWhpDXiUwyNypSpNydbMMbmTrQdL3mrmyXE9JKLHXcAzKPs1yWqwg5WdLu3d3jJRnT5GaZncSiGM3",
  "key34": "EpBrN5vDpqE3YnEmXSCSCPtRupT5kkxTySeTqQ2RzP9tzpE8sf4aVgEauuWdiMv8U8Njn5RpMYUG7jnwo5gsR52",
  "key35": "gsLtfgrvoVfsdcVH3kHDK1FD8w7j2U73RstmXsuzy2vsM7q1LKgp6XqgxLsqvxxSGfheGfoVgCxkfeCVNGg1E2R",
  "key36": "5bLwBbjviwnxFKNGG7dVsVr4vvYiMgpakmkTpts2ivdV1dooE9GCnLf7VLdEuo5Hg6UKdyfon4M2QhSLJSkhFr7r",
  "key37": "4k4TjYrmcwQivMSx5XfhRFaFmddoV9PtN29pJRZcBSX3SM8oL1jzfR2JDhVncjK47cGrrFYSgqAWiVxyaj5rWETk",
  "key38": "JqVkMgKMVzW3Ac3sZ551phM2Q7ewicCErbsaATK7FyHjcXajdgLFQCtPLMbFqVJgEk8M8F7DvD9UqesiMA58GF3",
  "key39": "4izZMjQXNKxJpkQyDL3pzZXToSuXwMu4yw58qosnAAUhqqBcQEjC1NmgwEkyjHKv3dg3AMn2PzoG4H6HoT6Cbqfx",
  "key40": "2P6EG3zeBeeYdHSCdoDaw5HhNboGZM5kJnPmJizVifLwLbWdZmyZSnNEwMrDnqyJRQfJivC784Ds4KAH6T4xr4KC",
  "key41": "32bhqG1My4EgnYtNNZkn7vtzs1BdU9mkR5byvvSQjWkFgXY1hraSpKJ4B2632aqbn4EGGZYeFm4S6UZKxk1HX8Wh"
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
