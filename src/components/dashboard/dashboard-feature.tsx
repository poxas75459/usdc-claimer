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
    "29FrCBpARqNwm5PkAqEhn6cEyd1fo4rcayWbwXSdknEDh7g4Gon55Jo5Tub8WfvETjJXzMZrNcqxSNpmBsTntq9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Mez8T175PYs8QoXuGodjdzKhCMcXrant1aeKygLQSg8ixYVu6Ad25fb67E1mQ2GtAKLAwoMLL1NGDeguTLpuiJ",
  "key1": "bYMdK9f6LKZE7ZTEe4XqyoQPu2jXMvJMAs8KBn2PyRbDGYvZCgs1ETyz7GgpqEyfShADdDMr6foAsjjTrraVg2D",
  "key2": "3kUPkE57aLvp6Rms61wxLb7yAFgqQKthAstGm3Q7uzj7UcmprLPRT7tRwWk33cBocCdRgYevavTs951zeQik1CK1",
  "key3": "289QZ2NgJayGtvtqJHHhnpmdzjAZBgw7TWpYqb517Yf4GQLqUU8se7aicX7ZmhaQ4JfsGZBkUwE29kh75aejy65r",
  "key4": "4Yqhk5peDxoNvC8GkxC6LYMCtQCHZb4W4BDkWgikDhmowKgZuAuanSfGmpapLxA6xQTMjDsT7ums2LhNyM2styi5",
  "key5": "5Pgt8aRgQ9BgCKjPzfuYKs6vieWgiyvfnaNK7bDg9vaKLTanQXFK2G6RaTaKU6GHR1u35jDb62ixMZFh4tsysYA1",
  "key6": "49ywArjM1eFoxV4YAVxdv7AhyUVK7eBSF9bhxbgfNLrydNvWcnEjm98ck2c9EfaQRiWt8FA3pt9JxNbYQuEhdKwD",
  "key7": "Y3CxWv4Ua5wqgeGhwoqQYKhxKh6JGPDiuTY68t86gpmHz8d86BAhT4X4KnofZ54VqFdF8BrjErBSpqGmyLQAWSx",
  "key8": "315UU2oDSiJDHU9XKhAXkgjkQQP7m5x29TmfU5ZE1gxwLDVg98Vpm1awEnNnSm5bsL4E4U8Lv6BoDsw8XGFPQmC",
  "key9": "3VJ5uawGRVcaxRRVVZtu91jCc4KAc586YuFp31shMSxAsK4rDdFogSbN612Nrdgc2SxV5z3bGHfTpRPX2pz4MTdu",
  "key10": "3NYJB6txzdGe31p4yKguuGWN3AcgzqiVCTjvD8Mw5FAz5PEZf3uZsvt818PRzkAdQCjAgCU5FhpZbiAewxk4WFfR",
  "key11": "4qtjmjkSoL18YWX78mgMmn5he7s4UrB1uUrcVfbuSosvQQbXGNsgchpa3AKxDRs1KNgLa5w7itb13894DSBWFF3v",
  "key12": "3F2oDu4gxpsX7jTMFyxCNyYQDXEXX6E5UoiDiZhgT1BgERhpyMEGQo5m8vTu6LE3uYBYwGzVEhW3apdUgvJ4xW4",
  "key13": "4Kc6UaKRp5mx4hABRssLrmfjgvr2woznNKQgQL1zFPXq1kknQkpWHoJCg2Ggszccum8NeTFrwYX29vYQtdmwTzaM",
  "key14": "2vy3ACMHxPPwLPTaU5zWpsecc7Y74EYYbPco2q1fg3MXE8uU258fzYdBSudKmVezT39mBwRbuWLZeqhdeTGfhCFG",
  "key15": "2TSkvHa5MFLzEZBDGAQRLQmjDEdW4hPjCsvFg1UVwrAcrH9A9Mi9oi4DFVw4aMjFNhgJjLWAmVFPi365qvDbG9AJ",
  "key16": "2GEbT1TkQNttK9QrWmpkQvPgP4QXvvndL6SZyWfexWYJqmyKEpKtEpeWeHWZCRYRCpSbjMZkkme13mhC5fnX9thy",
  "key17": "2WTK2QJPe5mgkFNwj6b6Raqgc3o9R3MnJE8hD5J9btzza9BF8jWfH6HT7zPwa9A8UczMLEQwu5dk8ybzD9xzdLYg",
  "key18": "2gERtBDmbWVb5tux5CMMiyF8DdPiFGVuiDUEM4AvEeH2FMzFW8MXkM7g2eSAy8ns6oPkyqAPHyY8scZSx9Y5E1ZY",
  "key19": "5FukjE9fXsdcQxHw575YrW9iBsUSufGBsvCysXG39v8twMFq1YD9jeSj5w1JdUKNx66W4JMicm2ZhbKd9zpAt1me",
  "key20": "4aD2Xt2h68d9QPkm812bk9CD4emtB21EG3oiGv84w4oeg2emAboxZpfnMwv8git48c2yC2n4pa6QuPowcRDMfDRn",
  "key21": "2XPPna8XFfCtVnRS6ESWdSqPedicyxxcSdRRRXWg3VpRKkTEQL8yZeFHABLgTBmt3BpfJVzHsFNCvNSSVcNDmGeB",
  "key22": "5SHZ1nPnNZFSszTWtTGjzU2Q9urChJUKHvb6W2AGLmA9FF16ALdDi3xQfNdPzNx13e64LPd2rgPWrziRuZKqXymi",
  "key23": "44YGTZQu4gFnFa84CzSRzDiLsYBfsyPp6bDrM5gFgy2NmCDmtyJxkHCG71SBMWYaEssst5ynTmc1WZM3MqQoLX5H",
  "key24": "3hfgqmXshNYmATMHtnxPz5hraNHz1bwMNBDPhuW8fexZNFmCiDKKiiYCPTQLK9xkbbdftSx2qhdaP1eNXmrTmxDz",
  "key25": "UPZySTzA5QyYULxwboSodcpkZ5D11tkZbShUq6B3Evk1s8pnYhNqs5KdM9Uo3ncYRw7WPet96ZZsLSrkG4v6o7P",
  "key26": "24ymV3AcBzgRaAyd6asrUYSGpEFzzgEs6aPM57GfvMzJ3tKT5WaFGufWEubkBZZ2taz4YMtpLQxozi7d5N69n5o8",
  "key27": "4iU4Hqchsq32h8EdcCc51wufs4NH8MAekQFoEUsp6oWM5th62ESMCB4LhxD3D6m2HtTe66o7dhUzLYNbynkHYDMj",
  "key28": "53iacJNCeFESk9eUnZbnDsddpM7HjgZuh8oEfhRpb731ghwgLDQQT3gZUruEuPADpzj771zCUHR3ymZUszQWwb2v",
  "key29": "35NY9c1a9mqfrAfX7SX8MxGnzrWYZix8Accy68jvnaviiWMVZvhczvZVHSts1riheXn3vaXbJACaBe5MK5429vzR",
  "key30": "3Qj1QAJaviispBQDYuNxevRuKRPSCyNee475e9PuQBG8TgmCfJTgYTMA6uxhXteYbmEeNMkXsZiLTpwcTwTiDjEC",
  "key31": "2vM7HZWayGV7PPJvXiAkjy7QznH4fXxe7HcMD4TdxaCwoaJw8bm6Xa161r3HcQANShsDWHPBk6PHSyYNB3dzWujr",
  "key32": "2fkVmjvXNGss7msjJCNA7w2QYhLyHPiTRAxWyJ5pxm8ZUwRfHTx7xQVLUNhxcH9mPSaqBMPKBn9nKVW6yFUN2JkH",
  "key33": "4eQNyMocvfW5VxNRb9DtLp7YdECVzUzWBoA59e2fB4SJA9hgYqRgsb9NfJuaKipDdhXkvugTbWJ1nKQTZT23xiKF",
  "key34": "3mg84s6xVYBvGdSjdRZaDNYKiRjcRhEbDKewKCAF2jjKgGon9tDgQGYjGhYQVSeTpmWpUL8GRJLQLiNBUfcC4mtT"
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
