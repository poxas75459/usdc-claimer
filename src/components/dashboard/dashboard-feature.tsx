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
    "5qVHCUz1MDVzXg2hjzb4Mywv1uCMvobMrRS6gfeoS4QZZpnk4HaJDiXoKUJarx4TGvui7eiYNhSXR9irgYfU6AeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PeVBFzhm5c8zQB7G6nnirZfLtzXCsWi4XD8ELnw1ce5QyXxYpypKxaasPWTxEyqWuritSjniQJEUF5MPQpHoujj",
  "key1": "2Bd17ZmaB4q6hqRLyEKAKun34sp6AaTicPNeQ5XEBTyUACUYcC8wzNWH4b44d8vaoA1hDKPJhBRsYWVkPPbpX98q",
  "key2": "2N8cSuyWqn8R6yCFeCqRx6oGRrf5vZhWb9txKR3ruejmxcsTgq2bHQkmoLzm8tp9T8zJREMAkSrtoGr1SB5LT7KX",
  "key3": "CVqjwRBgvTSJNLdDBmGgTv7ZYGgBTJ6kKALCg63fKNr4rks4oaJpmLewxFa7nBsr6Kgr1sA1shnYuYQbHMBvqJ5",
  "key4": "4YvRqqFYZXSr49JJcVdvaYyUS7SBatyHdqhQa1yBwETuGhyq5MhmEoSDE6niTeQZjEPiryAvhZ2YN5gs5FdqXEs2",
  "key5": "3nQusU8hkRaqVfQ7qHZM51wGLb19i8omdubNPEGz6qNmEJi9X8WicLQkLAcZVG1qnzF4srtMh3qPX5UYPtRG7yyC",
  "key6": "4xf5htqBNt1iK6EwxMEh7zefq3167jbTG4B33mrMJea8HNYpttNGUPdQg8yUSSeLV9FzVgC1rJwwzGBf1Mwef19F",
  "key7": "2apdVkEweEkkL9fVErfrqQ81AwSwJ9vidtJF484UqKeqmcDuippNuc7ogBPAfStkoiAuYANmj1VDMPdtxhKrWswF",
  "key8": "51mWRUyphhAJLT6kpYAAWLeF4Wai9iqZFjRpKaGLoZfyGdRm5axcLQqHAuGigV1UmLW4A4WPEaWqiDXWe9BD1xAc",
  "key9": "2vcPFad6sjYF41ehNetCWEqoTGvfX1KmomaRNsVtmffTPG8NjzFZg4vTTRNRkiNHs2CWYeUFmB7CYteCqCKhXhNu",
  "key10": "4T4b8CfT4Br4skrG5njC131UV9oq7MvYb6nDrvtBtZWsCWWcFevZig8QgJgopcd2MfFZvTU7RWZBy6uzBUMpzoLS",
  "key11": "4yYT2D1XDcNCeNRHCCLW3xRHzbnwWsahCfjYpiniQSLpB3HBPFgBgaPxhHNHBRYTnhS69bYiqQsVVPpcd3S35Jf2",
  "key12": "3S9iGnXjhfTEqkvhH3v44TVbY89635d8qd8aFQTf9nBsT4DaUJzxmmraPncDeyry7U9MW9VGyZpWkxHR5UQqDwPt",
  "key13": "2Jav36c61A9ThFZroRhfBUn11TBwGZ4quaXxQhJcHb5Fk2Bs7RdgFpcddvS6LMaN7MPApMiXzCQAsiTikWzCDnni",
  "key14": "2qg3tkEZf17mg9ib4syi1N6dAwN4Gc2J8KdKjDoXtuTi9bA9QbZk8rDXqt5848RWark7xN327NLh6dQBxdLryNHA",
  "key15": "21o3yJ1Ma1QnpzkZGmccYTvxjU9453UnqgzT62fiP5HC8khvV3KXCdFMogFfzD4Hei4dYKHjEu4Y91oEV43JByT9",
  "key16": "442X8VaEdDfJcwZLrJikg6gS3SA4SoNdTY3npdJAqsfiJdD3Fe4MP4XJZzZrY9LDCJ61iRDgvsXqJkYpabpye2Mc",
  "key17": "35DxjxsGurdv8KewotMhEkfGAAT4QtJXCQ8tVFuAbuDw1K2RXgQFMg76XK3muHiUzfS9FK97ZC1KQzkaL5CXrwc2",
  "key18": "ztxuAosrgCKir6HJ3sV81AeLruq4WbNS9GYu6a8yhgFtZ1GmgyrNpwajXr69MYVqEBxPFCeCeNy1g8b2WQv4mJZ",
  "key19": "2sptGV5x3LSQCgCH5THcoWuKPMAwTYWomvo2UuEjbv3x5jYhaP6LA1UbYtxm2LgHiBspTuwRDuJLP8RuvnAe4xbL",
  "key20": "oz86fVUX3r3GUwVSw6DPdAUcjuKNdxUtybJREyA1XauLyz7hXfqWMT8NVDQzNQxc8kvv4MhzrLkeKihVC66eU36",
  "key21": "73LbXXnjLUpVyhTfk62woRpj3dxB8NQSD5KVZ3maHBR8Df9YRY6VjMwZNcKJpB37UoF5MG3Fb9hGfCGQzBGAUZe",
  "key22": "3bmJzqnAUdiRZ9y7yTQBa754wEqCESLQnhnuv3vAoorCTZq3FvQjMcSjEM8YMB8UNMDWfurNgB3uwawx6X6FGzZ9",
  "key23": "4itYfQsPJjnDYPDHNZ58Pc5kSGNxFCgkvF4EiUscCSSBtSi39ATRtvEGxW7zGabptH6L8XdtbpwMWx6qZcPGYTH5",
  "key24": "3u56cJFv8Vxtom1yetc1N8xHe3bJom8JYkq43Uoujz1tm53AHW5JLbCQCtFHj7Lt6qmaqWczeLgCfVhHnmaffF1G",
  "key25": "2rryi8B1be41CqWyeK4APRJfzAxp96WxX9H1nvnfRNmkUcfVLZr8GtVmhM2UcU1GBEMEbFinFDKoQw61x4tr2Roj",
  "key26": "2jdBmj6HDSgXofyCadCkSmmbt6yP8yEwXht8UQp1LzC6xYEQXCPHHVVDqQC9Fqt9qQ4ow6wDmjGwDdVpaYVWX6LU",
  "key27": "44338yjbwhzKGknSgoUwHF13LrsvMCsYRpuNt1sFZvxGiM9JdchESdUHFw3oACnLHPEhz4HaCN2NVSJNwwqGEzY9",
  "key28": "4377r8qYyTtpVzPr6Fp9wPwJyUAKaPrPvfrh1z1V6yUxP2pqoQZXuGznYqc39MHrrvcDeaRnkm9j3D3N42ebkzd3",
  "key29": "4MXJ4YPBKNgsSbvdCa9r1HPYwnv9LYC7ta7LXaNPP9uY9Njxsc6Pq7i3Y2KYxYo6bChZxkNg9BUrERUfPPtcZjUg",
  "key30": "4yKBQ6zMhZYnMi99oYZL2cTTi6FziQEN726ouvqExH9o1pqjmb9ViPX7KdpzeJBSVczYD1gFVJyLqoNpdrMD27c8",
  "key31": "3bLSiLTGdzJZDuaaQVfJ6uY8vWLdUZbVnyt6DmNJKbiVQVUQUTUv5fU2pbRnQtoHyGQH29ga5Anyk8zyVnqXuXDr",
  "key32": "4NiFeemMdDwvCi3AMt2tCLD5PVut4eCU5CGTFZt5JkxwRCQbwNcR3CBwv1vPLjHwDvk6YxrSwrHGu6kMan4YYEdk",
  "key33": "8JuedCARdYD8zQNHMPGuNGwH3LXAczrpYQZGQpeH2i854mEHWSgfyuBm1U5cZxsbbbBTjS6hMYM11TqxgTphfvB",
  "key34": "63woxV9hCEzVRcskt48Pb6dE4PS92E396ihb81YM4aG6hDEmmCrebdYL1bpR32v6Ws682ahb6w4umcb1Z5pGT6z4",
  "key35": "65ECskPAkFkgxC83bDhV7CqKoHfi7W7bPYN7XeJKCQn2bbgt8YmeDkPR7cD8umR6cEGqKkqktKnbGoABLHQTbDMo",
  "key36": "2RipHZM2aKfE2Wwg1f8nBVYgxLcJwyDnmsqWA4e5xTSGT8GNYE391ohgLKZoKKe7zpyaVWNRVyWqwr8VDLDhZPxJ",
  "key37": "5fQh8osPJaiQx9e2RVHzFtgGPiQfJSt8rGW5fUxtW55xWSSxFbeDVHZ4M8gejdxHEcnECHb6ueW9tUXs7vp1LE2B",
  "key38": "8qqiR49FUf2xVcFfDZTN2PMzjYfTZy7mwA7R243USd92D3MekWtXTQHaLszMMSfMgr41gMgwwZRnVsceXY4xyqX",
  "key39": "5UqnczhLHqhf88jkTkfNLfvaiDdH76HsyjAgkmoRGbpKdezdk1SEWy4V2j5PzfDsWMpLeMmLHnZWkcCDxFfzwHPR",
  "key40": "iAidUpUQBK6vGCj5FqGMTxezcsoSWRKcNytccwhK7AyWWqZKXyy3QT7erXVzEsdVHmst7NJSdFyRZjSKotQdoPa",
  "key41": "3syFLASUy2KNA7brRtV88jqx8exUuRVWazoiETSMkbNvGLq9tKniC1UDqr9M9FvCTazs1ShohDWGNdkG938GAPwZ",
  "key42": "5gpDMLykCc1wS4qECtpkPW4fM6zH6i8MSA38cGFdsVCVutYaB5SGLMkjVtG47v8wjGzXmoKThcKGmCFWUKKbQtWf",
  "key43": "2VbHpnMuQ1JWLxtkJsb5EzsHvCA4bdhgLmXx5aYRpxRjfyeGDsbBQzV8AVDxFHboFb3wURz1aBmvmfLFuDet12en",
  "key44": "3A9TgCqtkKpfNnji6yP1jfJzcM51u68NavFBaH9TAKV61etciXcaVeu5amNwhE8tpGq84rDFF6K59mffUks9sFud",
  "key45": "3EvGqr8UsuykeSax8i2r4tDaFPH9a2nV9wryhbWLWYXAVvHLn4GGS4EFcwCd6g2x35NcdVZAKdYW7KRuch5xBiKE",
  "key46": "gEwviMQoWN8QZ9xCmh3c91vKuxHoKxTLptMVLD1GhzE9cJ6LpZXtgNkzZAznzsXqnhCmeoVezNf49Gnb9FXSTAz",
  "key47": "29tXjhuYjZgmVUC23vqmWiRWKqg21EjowJFqFDRU7xTs99odeFb2GUZ4D1wBiBfgctwDEWNMaR7qhY6tVt1fjeme"
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
