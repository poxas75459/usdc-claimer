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
    "23vUH5aGnNb6fa6EpJRcsnaNGpqmpm194YtWEFVUgaDTBWh8oyGm7cZYxvuNSeXyFkHTvmX1Aaz8G2AeGQxM1KNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kREzLJmRvbDVRuGZr6wPGNnYnqX2b8XpDV5v2ej6qctuY8ULnaTeguvpkKCqNQjAeHjaYLRED84p6mPCoN1QSmq",
  "key1": "24CmEhoZV84TDSPu8AoQjsSkMxQD1nuf2AibXEPUyAdkenSj7zjq5X4xTNecErtWQQkC5nuDDg7NFodRaPtd9nvw",
  "key2": "25tCNWddJzauyCkFsFJ9rLgJt53WSHPamJJuk6UNiA7WimqWSaB3Xoz8nAZwRho7WDGvt7SDjb2KfvtBunCL61aH",
  "key3": "2fJpdpA9akzB7GjkT1HQ4vkRganQBzkrBCaATurPwoBACC7NYrsBPaVR2gzYCTHr86ycK2g6b13hKvhCufGqV8KP",
  "key4": "4WZZHK2P7nkwENmVmrwpaMfnAKr7yaCvwzJPRbk6HKrhLhGyEJnJE9YLZxUw7F1uQnUfgNKWeHVpXEXiQdc2bRJh",
  "key5": "5btobaACRcD6AEzKt5N3SktnWmW2g9zhDuc5dCxq7fgv4SFrfQqhX2KJsvJH4uLPWBV5xErUufDoiT4MiRizHet2",
  "key6": "2cXkG1AogEzpnySWEh3dTv4UAeBboiLJ5E945eMbvkB4UQwudBwPKyJWXVMNoWkW79yuh8hncnmmivhgJFWbbJXT",
  "key7": "3cW6XdVaZ55Rfmj22VHtBsRGC2gai71wa8KLyCMNbpwr3T8XNJ35siBBUt17pz1g4tCMpZPjact2NzwZzh4fo9MQ",
  "key8": "2QzP1vbqqSeXsfFZDfj4rN1NvtRk5iN56QgTE3HHGpzWSWZakxm9FBsQTg1oANzn5oZL5CEoEBqSZEn56UpUkKSG",
  "key9": "3i222HwuyKf8ogXnpRFa1ybX17r7YUpZq7HB42hajD2DEzHX7nsfggXbSaa9mTUCmUj594X31UAjEppoq7HunaG4",
  "key10": "5eQW7rALsCck8WFyatmyPafAy4DizX4eJ4urb52tNpoHF3mgA5hritBsg6pXPPw8C4Nvs3kUYGuSkeQAXQKCwgws",
  "key11": "4P9Hd7msT7CDdeKUVZX3Z51sJ9EgZo3DNqyjGiMxhxkNBWapEneY5piQSDBpyyXeUoyTYphsL2VtUAmx3ZJS9sZH",
  "key12": "5MeEixEP65oRos3VtBAKZ6zYvXEd8UfCz22BZ1vYgx8eZnD5nYw3sV7yae6fmNHT95t8GCV2CzP9CHd54spU4SwS",
  "key13": "2JveZDkJgPLk51SkuXXms3rApZZturRymrmFRNVSskub6TfJLqQsPuE5Q9W1E8ZEAHuCuR2bJXsBrvLGnUKeniNZ",
  "key14": "dBRv2bsWvnVf5RuFTiMeSVdJQQdEbyt2UdH4259dieP2tU8ktkiRY67BrnpYjr2tmMXk3eck6qv922NznJwQN6F",
  "key15": "XoXexrwbRVG3YifiLAAabjzWB31SrupdHHNKFoBVFCkynE2fboqKjksgE6P1p35z1MJjLtY9Z8qhXtpT1grdpe6",
  "key16": "1Wfaa25XwyJ2MLgg3K3PMWLhcFdwgDdpm4DqqLYLpfSzy12vaSwqijNddLQBgucF8Va3uhTkucrAnCyVBGKLiWF",
  "key17": "2ZpbA6PjtmYDq2E6UdeBjPKD7UFMVGEhnAys6d1MuiatCZHFj57YCY8BSqdM31jy5AFVSguL5DTcF624sF6FPfnB",
  "key18": "Ash7EcbqFEzf9es16BBkPN1dBv9KH57c3fjvtaDKJpNFWDp2cmbdpqqoQ5idrhuQ9FnPdxdu136oUexmPqfY3CE",
  "key19": "31vKqkTgMj6r7cg9Rrx1REdh9huDM9wff7eeD5DyxKnWVHMpzNqDTRZXP9p3yrNVVH1YzjgAejMibd328q7EUS2b",
  "key20": "4P4P2S5ZSnRZSJXQUoe6ihavBdWmT3Qw8LcTdYUzBkp5qT97vBXXZwAZLSoRtiqChWfsWKpVVxzSg7dNyD8tmymU",
  "key21": "3XSwXhfXeSyFRXD2gQsbxRVg2GEE5CpNQmFmSVhzNjY84imCWpGGJjfmCJXXZSSgU3GdymYkPXUKiPDBCANk4CuJ",
  "key22": "4Eh3PYSpeJehChPbBYdQtie3thayyBoXqPeuuzcwZmu7ae2qkUEm7iHxJW4FQWaQjLhZEirXP2NgAkD8BCeHg75e",
  "key23": "4DTcDwMUaNpeX9vMi1nFmVBwtp64dK2LThWwp7XAi5LSncY6vnrZ1VZGLENBGVwQwdnNDe4wp479mW35dMNj9MFu",
  "key24": "2toPs1E1ZBJ7wRDZuBtFiHjDUHvSP542muL78wTvdDVhKMci8FCggcBri1b9jCK7Psdnwmou94rXvydAKSsu7ZtY",
  "key25": "49qfoN3WtRFbzGq5p9zc4pKywazREnVNwuJc4UStM6r6LejoTgjfdh7eXjW4kjrEmeCcar4oEnoPDomkeL9hBmxG",
  "key26": "5PsFYBMUc9b3UdKqjmHSYS29q7bESn2FGtckYvC5b4AUi4ru1yDaMQU1fCJVA4BwCFaoii4G1QFBR4QQimVxRpg1",
  "key27": "5affsn11K5SJdJsMoY5rbk1Vd596nyinUUY6EiZboaiLY6Tfkf5pcG5VATPAgsj3DuEaLNcKfn12Qt4utaeQ3k1D",
  "key28": "36AtrFuzB9pQVQYruQGyfgyh9AH9vayFWo1pKJr8bUX9V72zuYno1YPQ7gKiaaCqi9smLkzYCLA1zJGkxPnJZEEy",
  "key29": "4JTiHK3F1kZDm5BYVr6FAQkfc8t8tJtAnb1Zwux7EToh9BmLvr5X34e41rmCAFkbj1obRGsosrCpzPkmHR4WbyTR",
  "key30": "4g4CKTVeVihWuzf8CY2JoXWG6GYVk9ZKBiouCSUUrAbUbgPEmTmNtQHF49dQ4SDqgd3usjTUK7Y9m9biJTC1qRod",
  "key31": "5vw8aTbsvnK14aTG21YGkX1VdRemt5CR7MyXyi8ZikVrK3TB3tXYkCde7k2dwxiqef2W9GrHH3dnEG6MorSbuAW",
  "key32": "5qRHmr8r7WufHgbjMeRMZmgj79dtsiNsFo4vpGaNMjrVLpyffer8dcieKGzB1NQPU3g69oDhzMvDmvQnz85xSqsj",
  "key33": "5zogQ94NPzm1Vy9JJ5tmTMEhBpqf7is7Aq1trCRwg3bpKNjRFvuhL7vNQMLFQGRX7JYuBecAxXYhZ53YzaVSaJRU",
  "key34": "4zRahbhh8rmuVv31acWqCx1z3bTAXVGSf7rougQ7gb7yoUsL5bfgLGpPgiPMgLjvEwaW5krxTCtJHWvZF83EJZhb",
  "key35": "yMUcz83RwRPrLAuoXjxmifP3SWi3226BWzbv9BtdbWkoxfasrBZ2PK4Zyz36QGjdfKBcqQeAskdueoqminnMDBt",
  "key36": "5bRpde2SazWS7t8rh2CrtpHZNu68tkQBisRgJuqoWbE3iZpD7MT9J64y2LopxSkikEq2BDudTmttP8HKgq97gFgu"
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
