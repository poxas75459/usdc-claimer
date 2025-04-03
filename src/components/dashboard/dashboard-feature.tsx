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
    "51QAcGbQ6xPmZhErSXz7SLdhrkWXeBdi3FwPM5Mo3tpEZyh4AG69zV1cjCEt6qscgU7hq2Xi2P4yMUaJYYFYnBP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AXxayBvfQoKJKr41RYt3QNUHAZPLx7zXwjJasHawLeHtdZBv9iJXZjuG9YzN9jpmAUYBE788TUKSPCbAaiAMpcQ",
  "key1": "2NM8EWGor236odr2iSCLTz4MSjcFwBzLVz8ic7MPWtBEWMPQ8jKT3S4zi4w2jAyWfSA4yjGhfg6Mbjj9ogzCF6fo",
  "key2": "2sjc525dWwTBKRGRgv6HGJDwoVEfp7UTQwvDK8BkY31fY4hEw1ThtBZuvy6gRm3wQY2veogJJ4aKCn8DeC3SUvJC",
  "key3": "5Wq2r6KKTdUwv4jTFkYffQQV9vjtLHMkfZykvVfENU7BhQYNeMwscjf6sffFDE95USZTqEs7kGGRjSApeXXSqc2h",
  "key4": "62dtMgWLGUw9PbMYWjXrCN6hpJbya81EqsUSxw6SS5GpECPLbUQ4QKQwn9LqjS7wGfYAr4xwnW1EG1R2yjEYNbQw",
  "key5": "4ooxMEKQRA1bfKUD2H5b5Kj2qtftry1LAaFLsYeDZ7Gim6rrDZG3otYQtojEWPsSPWrKyWXmhgTjRxcyhqer3NCF",
  "key6": "3JTe13GYWVyo75nsSdT28hZURjqqa6VjdvJx7aMD2MHdNdNsynybndSFgw8qAABaBbE1TfdTGSjtFkN68P5TSgAt",
  "key7": "q5VmNw5YQpp4dhja2FpyiiDCyCLC8k2HxkUeZtMnRkv7CUmEQKs8hAEzzCHyt3Ghjr43ZDvnx2wxE48xyNgWCMw",
  "key8": "22rM6vzC2eHLnBBhoDTyMkiAK3qnxKPDPyCfyu5TrVgpJqdBgKJ4Q1iTpfpCDDL54BTKFoh7q3kSCbeHpTG7wBdm",
  "key9": "5FCsSj1N92gfnGXiUqQfM1uFEhmqqjwmMRCjD4zqDFobh14ogqY57TLjt5GL3nPk9r8FNgEJEpsLqogZE5bQhai3",
  "key10": "PEmc7e4oNPmXhB4Vtpgn7zAv3teTU9F5p7G6MvajaxZiugVrnWmhF6gExxXpe2F9F9wpprKyAPURmYUG22EaLVD",
  "key11": "4zVUJvojs5V2ASyfkKqFg2CUr6t2TBPJF9ZzsHcDz23ZQM2efqLvJh4g4WFe1dRYVZMuY3PxujLH1gcpPNWuoA1C",
  "key12": "3Vi5HyRVKBhHQMcEXKyWMw1pmL7ShAJVmgBr3zVyNVRjRJbEH4renfQQPE1nXK3FF5wWEB53t21aAs5rjv8EngnA",
  "key13": "2SGukcytKBZwcUmLRyxDUbW7MssYACjQJzBYZeaAQApPgtEdeVhMgraR5YLid1he1wTn7XsLPpkUsEYpKATuW4x1",
  "key14": "288M6hmbqj9mjGTqgnw4kxFHR3qxXGcii1b8ZL2tD9cvJXM7TKmDxFQARdZUSVcxtGv2sDv8f1Ra5fNMeChdbtzW",
  "key15": "2RqxWAyEhcxCJzWUbBmicmy7hwxqG14TZnudWmZotxzgDS6iQeLZG2uFt8RorWjrPZDS1LDP1XXT16cc94mUKeQt",
  "key16": "4BivfcojT3TUbRS5h2JbUeDH3zxgs291W8AcQtAeXZrReuvHfUZ5usKqG3SJQiQrZKmRVCm8PEC2seZe7wzv9tXi",
  "key17": "5UpSsUqPRi1qTguh1tpWEVuvqAPa2o1jQVQtRuZiqvuZ6tTWmuj8Y8gGj5fW7295DKFq4FhBZN7efmo6poAdaAAJ",
  "key18": "vjkwCjvgF34kV2T8oQ8rXQHiQLDNGVRc7kWQRKBskmRzXcF1jtbmqvvVHfWQpEF4LVQmckb6AhVrW7hEvr8digU",
  "key19": "4mygF8JPqBKksyPZPKUHwuoVcJM5qUMDg8XCFgbDuoYFpCmNXSdjszC3XRWTRCojYQ1PcgnDjZdaVhJGRAE2rCsf",
  "key20": "3BMi4um6NxT8HTnUvgKmcX5SE7kWP7LfMpnnfoaD3Jqg5f6oUzcV5U7sFAFSXbyVwbYsmgnCEi7HuhEg2wzEq9AM",
  "key21": "j52jvMYAMFGRbTekfmJGhYe5xX8MUoTQGMSBdzRtCtJ6ju8HZFXGNYB6SwdFJcQboKYTDXbAcP9grsBqqwQPofY",
  "key22": "Fniewxsvnz47PHTi74YE5ujrpHEWRgB7DgaLacHK6Tfivk5GNPCvJkWwcTp1k2fzeWDJjPNJMDo1F1ysL2tQ44D",
  "key23": "3XSqyonMcVJjqcdumJ2VsjZYxRjz5TGE1kXPgQigAcbkm6Wi7wgV721DC6ucQaMkdpjpzYrbc9FBQmTh8uXoaRNM",
  "key24": "2Qibd53ahBQphfLyULCNNMRM45Vx8QeCZiG55QALsrqL7fbGxW2f4bTSDf7kJJKTST1EBT3aJsxWXjJAJNhWkTvS",
  "key25": "463zzQgou2p5JnircahU7vtvR9v2pUEUsDVApNiDpcM4Wc5MLHNL8jYk58hPZ8YfwJ7gu8SEjCjNseVJ5Vkmx1ww",
  "key26": "21UkGXAyzkJhAZfz81QYFNdE3bN8Pj7mAgkTejTXiNAWgPrFdYo6XvVkyPoRdpzKzogHug6opgFnwuBx1BmmzXkR",
  "key27": "2GnC5qgf8QaykE43R6AqtyDaL8eoEYTXST3LR1UnyUVqQ1pCqDrkNeSgZAYaZmWvvNRKwjEcX7Logn7deMCN8hDB",
  "key28": "677pp6fiWWBZHjaKu7Tx3uu93KHmoLPDHGQYNEZTRBZoEofnutr4drKrGttcvBvwMfvH6ZfkdEEKSdFDvLVprbV1",
  "key29": "5q52QY7Z51pM2V83hhPCVf27RDLRebYaV7RfF37cwqKqoTzNs7N5htZJdxNVJfomAKZKLpwgfg7ZSrRrFstqAvRE",
  "key30": "5hZqhLjKfKCAnGh1pqVyVUAUqXCobNr7KenPNXred5PXZq9EC5DzLE2JkuNnUy1ZzMQSeziVUZ7NhDiG7KwmQr4m",
  "key31": "KyJmZUgghd21jganaM5oDDbNTvfG11LYp7yxfALERowybTyPTQJHjpvicwyzNw1bEKMpjca3mc1wLM3RciEpHaM",
  "key32": "2kNJe5eMX3qweN7ra2uYDXVC9smBq92F3oSSCmYXn1wuBRWwRqCZrybVVko3RkXdyYsc48UowowGxsvoMiaeSjrP",
  "key33": "M95CHpcrqj13bfQkWwYuKxx2sV8gwzyapNnmTwEWLbeSmHqogzxFzqqDbYwj57xBTEFRo68hMtpYyE5eVuw6wFc",
  "key34": "2MVijyxeFmBNtoFVazaCz87tKrL65Jig8gui8TPfb9GbizqpZju3qykpC6azBpKrddWvtRwf9Soi8YpiG5kDAEC8",
  "key35": "46vpCihMGvCdZLHxdMWRx5PnSxqHnPBfxkdQB3iPPmEdKRMct2LuWuMSYNfQLdQ4LogiAbKoh1GaJG3DK26Au3mP",
  "key36": "5LgmmWfpPzqmkEoabZe6ELuys2vsb7VUFHG41bDuoGQ7P6aW2MW2ZJwMtdYxEv2v3qDFfPpUjdvagjzzkFBLweB1",
  "key37": "BANvSnqpr2fE7d9aA78itCYHHWUkLvARvDmeN6r1LLGMdZo6kgR4Rpz2NrQBpLd7pKtK6gGXpLJJgqqUHjDuS3B",
  "key38": "5s8jsr6imornP1xdSNn8YDDh4QZSC78SwYhhi2VCAT8kcL7j57NWTiZSMuCoyKqej6pkjvFqvGJAKezJyhnfYEZf",
  "key39": "5MQb5Dzz1LHEty7FVKSV7YtZH7Ddknhp6ttZoumh5K7Tz231mL9DXGXr5EoKMpsyz8vGBjMHh7jELrzR31hpX1Zu",
  "key40": "52DCUJNMLJMVxomTYRopqLjvdnGBN82Ye2uceMaVdGBbgUwFDhkSftbggiXdetVMr8RraT2Ns6Lh17No2hMS2z5B",
  "key41": "2RAnYtaw24Tbj7XV6aR45Cbjbs7Rvi1kdwPzH9JznAAC8dmiQhYQRM142C83QKWqVtLzKNex9gYuGxsrm29ndXrW",
  "key42": "8qmQFebXdrZaEqRZgKVNQrbqccYs7pB5734rNFAcerNV8LcW9JVD1vYAWc8iKY3E2tnHiFRxHhUM975NjjA1CdB",
  "key43": "5tMvQqZrrdFN6VeZJYkXsXK8zVuSWVZUhXytHy7C31dzVBnx87dCpJKywPr2VSXUxr5NSfiWUvuzx39W8sBsKBJM",
  "key44": "3hYMxJgBA5CXdnvZ2CR7nnGqCeSc3HrBNfkFeAK8e568njZMD2mheESNMty5PcJekU591fuq8Yd8itrEvqQJQ679",
  "key45": "2XDgvMrKJcjbnZBw3QvhesTPAJtLzuBCsRyjsK553VaZDvMF2hYffBaSWmm7dpkH6RHhCHoTa9yHXXrhE6yuxrcW",
  "key46": "WaGJ73qHgvD9PigW5kA1freYCFVxvySGgEPa4qX8RyMWqiGZ9zQezeGJJWv1C5iNdBCe5Yy6rxBkDBm3qSkiZAM"
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
