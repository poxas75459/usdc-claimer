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
    "3k8F6Mg9PVRC5gyHfjUyEp1zoxzjZNe7C9zYnFnr38zvdeTFhvPrcBWVub4H8Qay76V6EmoH1ffF4zkDgwDQx3px"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47WVzDoFuDYGbyXa1b6H71bshragAcsvQeB1PsvSojeVF34SnGz4XUYNupiNCyp57iYcgViCLHBiqYyPoLDQ9nf5",
  "key1": "4HsdJYvM5xunpcMqTdUxVMdafb4FEsEpma291UztnVRFCBahjyrZs1UxfsCqKHKF4v5SFVW1oNzB7xQfCbXaqk6P",
  "key2": "38HCZ2sgpqnDvqbunSPm8CjCVP3Cbjo9xUrMqwm6w9TuhWhUZoEZimKJaZZxY9X4qU2K36RB4Un5mjEx4gckyvUT",
  "key3": "57QuW2Ep7xJrM8djTxJeVGLfPNK7tsCvoRAFSoQVPqcRivFgJtE3fEV7finqYwRgmJcsaMRaPDfg2WSiAo8yDSLP",
  "key4": "4eEY5kAqyTKiHs6KHDUeASN1QW723yQ3uVDiB63patjdWKn5R5UHJcoAWf1vwxU7v3X8satBxTacUkHzW8BotKSS",
  "key5": "NTb8Hn5vwrvyxWCTKEM8iXFpKz8MJrhR1m4sXfspQzYX4Mk5DFf588UuUZrz1wB971cyo8kqYWsMVLBk6DmumMR",
  "key6": "2KQuEqFHuzAanrxCZXhzuBvPbQGtiX5G3TTqQkeQ81Jzq1cqsHpmMzT1WCBa3u1kEoGAgFXkvJCe6i8HhzRau1QB",
  "key7": "2zYF2mr3s73DNj7BWADf9tmQf3iPLusd7wHXNMywuKV6mDAKY38UnfX3JNkP6Xe3tcgca65h2P1JvR8PRS5NEMzE",
  "key8": "3EBZTWLQCiHCMRJ5dGGGaf7r8F4CtiHSR1dfvKwL6gTdqprgZKZNEeGnWQE3hajXAnwKkm7VKFG4G5HGTQaBYn5A",
  "key9": "53dXAXUvj9Fqf1WmVNvrMK3JXbFkbwMMz6Z6RmwV4EnN6817FtWG1CSoweGJqzx5ZnF9AFHxeHyuCjGLu3hBbwuN",
  "key10": "3ntMcoNmismZi1BkUM8PqkDRS8SP1JyFNSyhJmf5St6GcAUKzrNwJv1cc4p6rGoi37eDEBMCUnh59J2DFYkCpLSQ",
  "key11": "2SVDjNv21yq7ycxTAJafx4aiAk62gxL7FtHrPjKnnM9reMLMUit33kyNctXyp8DMDnTfeP5NS8aMvjimMUMXHEWe",
  "key12": "4cLjPRJ2pjNHaN1LV9PDGThfyj8DhTtz1AsBiog6XiqbxFicFKQcToefP7EJRZ1QUcHi9VCUq8tgnXCRQtSiq5r1",
  "key13": "2wC4H3sdfdbcFfEVLMnGcRiNLtvGQmNrjoZJD2XbTwVZESZPDifCwTvbD4RcWTBQnCfuPNTsS9pzqJTdSDh4sGCH",
  "key14": "3FALbhLVTf6eKbzJJK8dzSGsXCLJdUn6EcfGtBrbgtzddUfaRPSky9cgikcHBjcM2P45aewyRFBSfZdKKsD2ei5Y",
  "key15": "4suAeeUAYznvEt38EyK154yCCMCeyYsPfq5h5Jf49gFTFybU15iRM3qUj1qtSPWUjiLuMVu4QMfKq4MUqCGDUmN1",
  "key16": "5uYs6nsoMevzLijjFT5EiTtxDHmMJDipQg9Y517TKa2XLn2927jEphfAakuqGECsKdNxuGPFatNVexGEJegVXnGq",
  "key17": "2Kkjmg88BmjNBqnV1mKT3mFbGixDfotovmkvavGg9dxcN1ivbvB6nz54huc5L1KPYqXYmcYSzbp73NVpFMru5bSX",
  "key18": "3iRDvfGKVqNzWuob9bo4tYMhcPpCoyNLM6BXJUms71t5mj2Tvg9womcdbx8T2dCAMkx9ptcRCKzpr2y5gKTaKXcz",
  "key19": "5oPDJ4dgpDcRchtwD2DvsgwToNuMZFNGFMSKR2Qb1Cvd6YrRDdSe3j5AesFSn2HhwTtseoW5ZAvCgG3uBzNHrAsa",
  "key20": "5s3ewrLJZq6YH2Uv4PMP3KLyFQNndw8et5u26nL9LfkmHH6eG6XhjjtoYEPFzbAhHWYTp2XFG3tViRg4KsYMuLKo",
  "key21": "23Y6JzFmR8c4fEpNqh8baNSkgJ75wKFywMcEB7DzGJ1QgSq5XNNQrpH1LJYA1oXefMEUhnu5ugBPZHtdN2bFVukT",
  "key22": "VZBMeLU4NbfCEZf77MSfHurSvyaia6epy1Gbcx3RXybcCsPdMQSQAWpX2551vrEL5YTNdR1LHRYa66dAXwqLbrt",
  "key23": "4QpuMBuUaU6BvGm2vqGM91FJVHToP3AZ4oCuhDbopAodpmCVP2VKF8pyh1URSPTTHuR2C3so8bs7ZrXnRaECb8tE",
  "key24": "5AWAjFAKAgCnkHVCXuoPt62yz8BNfMipRfhGkvKCBWR4e49ooo4hfkVukBDLjrSbZ7rTwCUr7tTayK5hr7oadTBT",
  "key25": "2r2XCtgEqneiKdSjpbHdXyEDoMPPUCXFocvSMJZWvc31wTncU5V5qUUidCFB6L58uijfYvtEwSCtZwdu8img6PHF",
  "key26": "3tYQC3ZhrMc3DXL4JKmRvfa4fV8L8QotYvrKviAK4JibGJYUfGNVzhcQYyD8hvioF8w16MhWUkuCCzERdwZznaQB",
  "key27": "5XkQCcViXTJvhwqUPjZuSThNE22osM1TCgouFMtA4SGCzGSVX8W9B85U8qSkBDEapKizbpiNHRqXVMoaTWXVNWxc",
  "key28": "2yVv7S3cn8F1zMsVxXFsgbtaG4said3tgw37Fzgd9zjFgKsHpbZDdJwAjWAKopvVKpgVb2ZEBgC82gTpQY7XYPnp",
  "key29": "3y8VGD8vBK4UZ3uuy1uZQirnhQAsRbWfqiTq7jHh8qJ3kHFo2HjMggRwFQmoTQybigLYAYeMukZAcmAA9tiAj8wT",
  "key30": "2v87Wgk1CQXqu5soUiedoYdv257tkVR6NWQDG5RWizYQGk91TcXWDb6JFDmW2YPueHzb58hRFkQP52sdpBPp7Tgg",
  "key31": "FxnD4z459YHovozVL6DfEYQEyXesX3VfykaTvjZhsxoSNxM55KT22yGnRKQoikBPR3Qsv7wyDHZne9LcrmVrSVL",
  "key32": "UN4or85a11uUfHjAfqj3U3LQmVw3za3dc67qCQnw9Xk2dbv19Wuks6uZ6ErkDtb55GrYRBffqtEWbYWV6RQrwyn",
  "key33": "PLUMrK1hEs5K9bvc7gYu6M74qBTNbFzjFeVKMYQSeCdDb9XM6TBe8Rrsn4P6BvzFX5PAthik2NvGysgKqP2G2hs",
  "key34": "2tkPvdeqUdLZQ3CMhnYxyNAC5k6hFgBfmy9aAiWLtoDwUdaE12CXdUNmr34i39w9cJqs3f4oxBQPrjc6wQZBywXh",
  "key35": "31nqnpvipwxYHPwA7nn64PwoKGibdnw6u7ZpY4wCDu8subNBvoD1cB9HeriDGPP9c4UC5sL499gi8ZxH8wq9SpMH",
  "key36": "2gznbkRrHnv6jj1k8KzenEQtSGpPT9eZ5pe4ehU3qR2x2197UsQumV9GK3rRCdGsJf1XiDcoPxXGXuQpYYXRW2C4",
  "key37": "29otsjgpp6mwawijuWYoPTNWkiLUzmir8j2CixTGNtKQkCbDjdC5cLqckTSH9PKSG22eNtS54HPL8YhBWi1ZqJpf",
  "key38": "4dixayiuDDbXG4Ea215nF3hi9vCrsVLbZsZZCfH3EZBQyMuKMoALDgCMejsWBUCRuG6jQAVZht6E4GoEryzdyAN4",
  "key39": "72fEKwiYTbS8YeEPZDrtCN6ZhmiDtWDRcmrsGVVjFijPiLGKL3xvqTbVTa2x6XvGmZZjce5AVQNUxYFCvnYgQa6",
  "key40": "35Yh5w86y7ZVkPCtbLGNxYpzNa8N88s5TsCbKmEtufAzFyffr5x6a4BtoRcxi1NYrBtVLQ1yXmWZ8uvK3e9RNHHk",
  "key41": "59JnKiuWrSzsRp4R7VCZ9hnn9MxTbndYNHXSymcQNBRsLskLi72bKN7jQ2hXiyWrq2hnTG4JjiRoW7UuzDK7mDe9",
  "key42": "44EMWPcNByDkV4GpiquCMoqRVvMuo3hiSyopJ45fp5KTGj8Sakr4jUibBowJzRDaenfmmfyoFYUFeWiudugYwwEb"
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
