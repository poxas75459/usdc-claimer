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
    "JGByqoW5CcEYE31dbWxpGqxHBAT5BhNi4kPWDdD5A4fNopDSowc6x7wtsmT1zhhLieNg7UqGLiK2Pf3iaUTn3L1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F4okTdcTVzkwEJAT3qP796qMcy4yzNjQd6pyPuRosY8ZV5gHhzxytA15zwNXz4MnSxcphHsF9emBZLbhjqSThzD",
  "key1": "3PLWBsHM3Rmmm6ZzfYUE74RnUokKNRCLNRYFhY1FaKvfcJ4QcqXPYJJ5BtPWLu4tGRrtoAqGYXERXcGQwLDvprwD",
  "key2": "3xt5KJPnRZg2mgRZHT9i5RARNSeCYypbjb6cNhybCDZ91kWwp616HUjvx2BbKfvg54YurVsbdUWTtHzTc76KPSGc",
  "key3": "5yHyGcvPJwgdXXu1ZfBWuHZ2wSUSSMmPAHX9CKkHeYEXGZHqJy3VCvKfgiqyedMF6Nh7tnReGWUMKVkdcv9NnwgD",
  "key4": "3WBg9vQ8ssaEZf1wKezsUM96gQxFKYKSL8M7g8jtL4LE8LKJLCvwF4drA6mMDsogUf8YM5vcL85FdvECdyNaj9b7",
  "key5": "cMam2NTo8FSM3oBWsL8ktpsY2TH342hQyAEzSPfXGtzXFBdXZZnekC2YFfmP8rs5uBJVkbQmuK9Vtr1LV6QjbxY",
  "key6": "2imjqgY5b8phNZuvrxZQxpVEKvaJXSVVNrwFsLq3LS7S6oXx3SRNSZJR8rSfUeB2szAUi8rRb23e53JYGbj2u8bv",
  "key7": "62FCqtCAEgKVCF57dD8LAjsq1gWQxbFvj8XfEpCmXdByZBcryq4TXSNTQQA6eAicia7ZXXFGJHisuSDK7ky5J4g4",
  "key8": "5ik2EuazmZzKmmsPz7ouTwbHCnE5S3rx2vArk65KuJxVrjYaV7FxN4XdG155wiM6d98hJJtELJBYKkDzLXQHd2v6",
  "key9": "AdRuFfHFJj13yVrUKzg7N6gKQEn6DVA7AhXfG7q2oBZ9bpmUZtV6L6FGp9dPLhDb2pM2a4jZ14YqTedyqtrUpmH",
  "key10": "85UvrXMtF6GP2HjC49nX6zsiFcdeyw2sRoUkhivFMLJ1qFUTt9YtimeYp3m7JQPx84wDUbBDbrdkAW5C9PpnSdD",
  "key11": "3GyFBPWowpWJ8RK4n4zsSrUJXfhiKczHpbyskv9YjHsvYMFsUKFbDKXFfnkyLn9rB2stSS5adDc7E8ZZt4H9UJ6y",
  "key12": "vjpqA8dgQmnBqdAaSWnByw2EdoxgSYD6ruNBSiQnVzEU1aZuuZH32Kqb36YzUyT6jTVg6J75DmA91LA7PiSBS8V",
  "key13": "2BDHKyHpsEHoeUYfhvyQLx7mz6CYZDJj9fPzuDDSpPPNpVLREQPd6RHXJpSdyUZ1ZjA7GmuPG8hXLo4cQwpCXL2W",
  "key14": "fRyPSjoZKuQpbFHA2NsWtB5LaBu8buY7Zp5fB3YVBGKaF6nPzgxKAVKS3jvwTqhPoitELsn7w6rjv47b8YZknBi",
  "key15": "2svDKFjPfwzyjreuSDaf5veftUb8HZyV3xyMBVU6JGBddBmbki1npQptRoGW11UqT8HwiRTYcdM2aa8nDQRFyWcE",
  "key16": "j8b3XexgKEfNKHDLogWnsQyjhV1zHEpgrB4SSRgMWd4tsKJyW1S3CFNyG2CrWAKS4mZ86m8oF9wxEQJRmkCSz55",
  "key17": "5TncdgYKuDGF1YVoUEbCQXDQy8UewBrxDQaAkJTiHmgfZcsHRdcUXMZXVw2qc9jqzf59AEbyXvSYAM3X6bV9RCrV",
  "key18": "2pZmW24tMhK3nfm6tCraQSXnx9pJzFiZniiSD13fDJ5QRNY87BpsTaJNunF4Ju7FfaPmf5efPZTjaC4G9PAMcgBT",
  "key19": "2gPTDvKhFzVw58oY2DDXxCYdbU2aeaXFUm35uxQ9iZiT9vNuUWhvS6SS4Mt9PmhPRtTCqoPe48EHYiTcRVh7S59C",
  "key20": "4E3GimvcWkdyMfmvDFrFX6qTKBAfgEf7Sun66owGpPhmTh61P7TR6JYps9V6VApwUWpiyd752wRztyq12ubPpBGL",
  "key21": "2HihTC75468hhPNLPNbZbqVEQx55y3oPiEW46eeivNuhYKZXynsXoYnEBPqBGtfcKavERLG5WJWaPVsj94omvDsb",
  "key22": "4J6nXrqbbiPJCayS3dh5yZuXpzaXuGE7TXuPdi5sFrHXZqsZWExBKKQXLNfpq1kEGGUXi6uudb8RBNELK2L9krqB",
  "key23": "4p1uFWaZXcRnorBYzqEw9UFWGk5jsX5CkczB9e2GaumanBXgYpWvGDzvZe4nYJwiJFHNeQ9iYGyg6WeQNfcv8TiS",
  "key24": "53np82zvB6ubfqpgSXRtP13AG7m8HiVpgPcasAC3devC6HcqzkJGL6dhZpZLArwRFKG4Q7rZLutzA4oWwEqJYwWN",
  "key25": "41eeM4gjhrbJbpoqyTNTP4RZW4kEGRgESMyRmr5VSztLt7Bg6aF7RCmpR4qvSZhBJqMXrtxk2vheQYnTV3iPSGkV",
  "key26": "3KM88AGfyFshufR6KLX7JRVwRAfnYTtAA2EGuYZ8m2En6BiuJsL3nfkGWv4VbVpivNLb2bq4TZy55TDx8SGi8sQG",
  "key27": "571kGxh4h1bDnTgPZwewJUZvP9Cf38CFhewf5nNGuCe8DHBx6a3PXmVtM9LHqTjUbszPtorYShfbJk86k1rJ1pas",
  "key28": "2rbS7qVvnH52KGXE9Zx5nw6sXa1A1LF9gPuy7UNj2UT2mhLqokeQWTEVKtVUcRYmLzAgFDwLG1HUiUq5eUm3g3Ec",
  "key29": "43mv7NwZXP5ztUNsGwAaG9efbjSTcVXkze5SVpgEjV9pZQrkFT1DTTGMjNNusab7a65gx9Rno6WN2qfoAfyNFEX6",
  "key30": "2CpCLzYj1LUXm2cn6sXrVYhTNDHjZcnjeuE2b47qJRzLn3BcHD4En8pSuw1V9CnqmVbwG6rTHL6TpCA3ckTMLLBR",
  "key31": "4RuStCwJHdk6qwWiCjXX2onjXwxD2bG2rDsr6VB72yB8UTH3nDFVe9eEbrHogNXECifrPj8RfkxR7tUNSXhSXmsa",
  "key32": "3P9N1cB8ZnrpzQ85EDJYZtQFBUzGbQkdJwafdJebV5rgCBt1HnMoWjLvfzU4WkaE4cgF78MeDNuthpc4Uk6FBKTb",
  "key33": "3A3JtcjyW9dbESYgnvCeFkz9esdznpGzfqAdcEhXs4678iG8nTNyKv2ERRExLRxTxB1JfS9YZezzVVNqgTBBUMVe",
  "key34": "4nDeAtBvX3b8FJBE8XkzstCwbnChq2pdup1VpcUyp5scFeEHXtKruFh3eRriPFqFgCYTgvxxuT9NjKNhK4UCLoVq",
  "key35": "x9otyW9yir3wtykpJj6tgwRb51DekazcTEuTei9Tk4xFLSRhZQ9hKDAEX5WM1YeQ8uMZmoxNRRJmkSrWNu7eF8e",
  "key36": "416WLcftmzLBsARHqXeThWdE9evmuxfgz2YQMqdVn9EWLSqSrQee381fMDFCoB9CxmSbKDw7QjtNSMLMkUjfLFmY",
  "key37": "5tE3RGXKWpujD1BfgzL1CF5EnCLPVP6ekX7NnYVcGuMkR293xVx6DjUZ8KfWcgBiDw4iwVA9dxRZfTJEJRkYv6st",
  "key38": "55YYsPskgEqUxUcQ5tBhGcwNQzDfhgJgT475Rmwq3bStstNpt8WUSxDvsZ7QZT9bGJ3bzXocdVwxJjn9XLQ3uv53",
  "key39": "5aZKBDaMGTqU94A8z82ZSQ6YkiJKoLsePoy88BbMUzRAeQ93wCsYMVp83Kge1ofek9ebGS8edymVbNh7DDYteQ3K",
  "key40": "5KVkX6gfwESJYjS4tJQHqhN6DSMwHn9WCyJTR8szZ2DNXBsdEqCdznLB5YoiN2FPzn5AVeo1pf9Tw8y33dT4VANj",
  "key41": "44axWBh7PAUpLTS9j9xw64Qzirfsuc58qACNtDQBp1ci2b1biiQbtwL13Y79sRtWtDvPNY7VLpwAA98SkvDYk9A1",
  "key42": "of8i8PCFeFPNiVL7HgvEYybsZffpV1UNhSxY8oikdCJVn1faQAnfbrD2Qu6PzB7f5k8BgiBvrMfFQYcekYSLZjV",
  "key43": "4DjTyEM8hAWedGtLKKTWmoG9R6rea9Nq18dSi6SZGgq1SzzzwXqrG3ScTNQFBwHX8QwHSrRkW9qJ8Kn2tmkxyUqA",
  "key44": "2SK6aCazCEBqAKapix6rkeiyWVRxY2LsMufvJnz1jMcvmsCG5ANYwY4GZJVCQmEHWdynEjvdLc8tL8ZixuDVNbYD",
  "key45": "4zGg5DN54pXpZXS8NCBjYZRDtGcTCk1U89pdcpGz94sCs1WwzoywyiboQwbp94hYECTwXPGqaFBXCkzm8EhUiYh9",
  "key46": "4CtfeV78tRRUvUrj18moazn7JsgPpCo3xMZo8RUV6Xbnw7fvrVL4oL6masLf2Bin3t5WMHi6ux2mYgDs3pqUkWA2",
  "key47": "4qtAjPCYCD43xJMjVgbTa65ccvHu1jEpoi7w4p469SN5A828HJidEDgaqKuov4vUbSPFXrkwjZ5G4yaQNgjzHvJo",
  "key48": "3bT8aaSPgYAryAnVkMWrMxKfEc1Y762QH12b8XmKBZvaTEYTkQji98dXWLWaaU1JYikmBG2xqFv9P9wsKt2rqdYX",
  "key49": "3CceTe3RzEboz7oTz8DTRfY91Rqz5tGkb8FzvJa8U6EjaCHZ4VDAvD1ahC7YQCVhMcDsfM9Gz9ywKyf2CttVcC8f"
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
