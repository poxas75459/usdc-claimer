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
    "4r3NfLaMZs4SjLNDMj3NmASLEvbi7mq5YErB68KBYqc4M6NXdKB9vrWQGNVS3Mf4u6f83KABzELYotYPdps6duhj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zBjpfwr9SgWaWTcDpeHbuyp4tcnSkgAc9XgFTUyaBm31u3hXnzJFzFjK7hS3VAGrBaDcqYWNVznaz3hvm47Hv4Z",
  "key1": "3HhxXJT5NsKv83kSWcxPMGNeMYwn4YpdAHZZAiKtoCFj2WLy6iyCBYVx6s1qTu7aiN4nx363MYui7UpHbpM3uKqX",
  "key2": "26V8wKJyGmx53XnZpbKX4QUXhKN3TQanxAtRb9pAz9NhUXoB9C8LjKtGBwLqp3euXTYcoyP3ofFdTUDvtV9EAN7f",
  "key3": "3zfedsjesy8LbkwzguiLeD3rgBjkM4CYLqbFTCpDZpozkDRAAvkgT1KQALfwVUS8kS9gL2MFFkKh3ZTGqW2UMExq",
  "key4": "BAYaBUtwy3Ne2mE19WPcnovUwQtQw2d14EuaG5Rb11pK5KjZSuSBeWMMFbXAasWSqY3RF2zSTh1YYrYwygbZMR4",
  "key5": "YMBzJBzd6g3oAweHQaiuK3A7y45SFajq2DfHpnz5ddSUX5RU4LRQVgYwdKkSBUXF67jpGWcbMDwPjVMPduaENAz",
  "key6": "88Lj1t5YPnPv4NnEpRgAzxa5mNtLjTMzuWqV5YLMuH4obrb6MgVQmLnXqVTVWwZasNLBpuPjfiB7rJeZjiFgTYg",
  "key7": "218MmShwA1m57babypHvkQr8FGdeypDHSuaBDNbj6LTePff4W4gsM2vdRoaCsJgHMaAqJTUBqvet1Dod4na9i3Xs",
  "key8": "4YZ3gr8bbEkQ6dUEfWPYjAyjNsuGLBjDpSu4Rtcn3B75gEs5ptLg13KAErhieZdLGRyu5o5GfGh6DejhG1v5bknS",
  "key9": "4foKLFLHdWCWc19xyStAQLta3gMEBZtp8XuowgHG29iiSSx6EX8cGAecFQyLrnrL3vEHwvyZsGSz6tenuZg7WGUe",
  "key10": "3fksUM8LKLpN2yc4bgB8XxWxzVNTbNv2XgdPQqyYcKbkTzkhPqzjyyowVDoqcLNEntztBfJhSd1kLhi3ApR4P3tJ",
  "key11": "5MoahGHLCDiR72vozTTggG6fwVBKvFy3ToDfUvQNTwCYGVbxhH61XZGLBDvTFctpPcytCQL5cJAvHJ5cMnKN22Ap",
  "key12": "3a2M9jmmZLqCCmJzcm7E2s2JUq3Ej7Emao4Gfb7g654gQGjDaDwm5BPnQb84h2UgZuKtxtWfi7VWReVFro9fij6N",
  "key13": "2GA9juuLXEmyFAjUNouU8djyEfNws1ZKC4WhzchebWEBUwGm6wSqzeA3AmPVGMZTJRBPLLXYGLx5QLF1rPbxRFua",
  "key14": "4MAF7KzQ53aMeysNZqbSN4SCbmNKQU5vreR2uP1569Bm4Z3eqbhseDZ9npsxgrtdkGX34RRCacPmirkAJR8cdzqU",
  "key15": "55juwQXMdeMbfQUS2bw46ZxmgCLzceKzBhNiNUHAMSb1FdH2ksm4ESwea8mMAX53decBmQQVWh1WVqRCR656M5ps",
  "key16": "KrxTgBRyUPqHCDVq9n7m6K5k4ycgZgcGqD92mLRnGfCBtQo5JH1awGTX9jR7ihy7MWYiEBBsbK2Y7BY5FvnF7ko",
  "key17": "h9GWd16CB6JSWjJZi5xKTU2Qvzf283UqFwx3DhGV2h4V2oqq21giJ9QA8bUrDJ98i5RuafjCVq2uwNs9pLHQ3B5",
  "key18": "3VnyV7GgbuUtY1AkQRg7uruxqCYYyoCTT1mnMtZei5GfMQuw94omYvmmj1gcdJRU6s6TbLpbMS5mVmDhYZxhi63A",
  "key19": "5Li1cP8qb6YZdVN3P8waohJuv4UcQaNVk7hYGXJLU6ZW2RqVhJ66mqZDqkM2RYFC9RNwGSvR5H79ucXaqUFM29oG",
  "key20": "2gbDXTJc3gMpwty1LMwVVwRL8CeuyhdNjTY5osfTX318zSPFVCRJtv8KcfvTezh4xTKKQv9LELYcbc6psp9pVTGZ",
  "key21": "hFrnzrvn44fSkx8TKNLGgjsLt8a2AhRCrkDhKUWPhZFotEmj1ofCNuHTU9PUdShcYnRDSQe2FKA7rfpiHAZc7Nk",
  "key22": "5MaWFkb6KowZTcagvxbXjTsmtdK6xzA9nHi6UyqLAyyU5iKMiE999oQHDhh3NfzYVmPSsPyv3DxtKFypdCTW19wS",
  "key23": "274qqrFpHmnAFbMVbMJRaYAFeeW3LXzvNn66Sz5LE4kKtdjrMzzz5iBuioqjBVbo4KFeac4k3JwhcojDkYZMK7nT",
  "key24": "2tQjM68DUH5Zy53XDfJXvENDA4b5nCMwfkpq4L6y7kAHV4tZXqQ87Z3T6YnSGuxuVs3SX6zStQHNQzZwWZH5LUoV",
  "key25": "5DbZatotCgZci7BcDkQjXoKSd58JzXFfALZGyXhEJSQzQXTQaBW1ADwjk4dCcHEDYA6FQL7u8xwHe7cRT4v3ztxN",
  "key26": "4Ev1fWSXR3dQqBiNFwxmS8Lec2f7LEQLGxgNXhUK6jkzRvm5vLjSK2VtDvFxENPmnZ3n42p5kD8oHmaa2emwk2rZ",
  "key27": "4t2esttzx9Ci6T6j8daLs9Yddv9Zxgf34rtF4USWqU8s4MXHxvhgM8rGpkABas3Jg5F1KEVUqRYLFsnwefhYpRF3",
  "key28": "57rkauS5xCBVgGZQPu3VpLFEGYLXgaoxfA1iPXTfzTYUgEVNhpSQkcLMhXa87PkdJjzM2qvab98popX8LDLJTZdC",
  "key29": "MhhG3U6dG2d51y85vNCSiHaEbZ7zhoEQCRa7Yh4JiWndN9GWyVQMkh9Ua5B5HVmKzL58qeYWtGNvV6jiR9bHbe2",
  "key30": "2ZiaNLyXcp1mdRRALfF5VBzyY77vWL4VL7Vn2i1KADWUrMASeCZ2Z86Mm9jfa1vfA291GMCEEKRLMDhgv8MCPcvN",
  "key31": "55x42yrxNXD1c1x1NxTf74kiNo6XfvHCKYtixcnk7dRUK7ZaYaoYMtFsYd7VdrxHPWtovt9qoFiiH8Gu3v6YcgKR",
  "key32": "4PXvtPCNyfaK4jitH8jm3XGNjP8MYEvqHtmEcPV1Rh2RqLx6d5UKsMxTTkgogNKzKJBDme8JAkVhpR26vhoCK5Tv",
  "key33": "5zt72LEe4Hj4L7rmZD8skqZxTLE3SHN5ZUtctVB1y1wJWjmesGdxMVHnL3gZUnLuHCpURftdU6Mju5Wuhyh2NJbv",
  "key34": "2Xf2B5Yskth4fKd3yG6aCDjRcrEwKviUJLTJyfCEHDqaaSUcsJDtE5GUUMuSbgYg3j6gQV1boxJfbcjrpfjrDJQq",
  "key35": "56J7JyQ646cVjh6jo4CBAQX1jf46NEWR8mRTyfiK1oRz2D7pV1G3z4zdfG6YMkU1uZorPZKV1aMD3DKf4sT3866y",
  "key36": "26hZUbPGqMRSYjtDGT3pydQxSTiEbEoH3wVApUpVZQvNuVFLFzfegjwbF8tMAy2qWeGWkFGEBRdoneYGWHdeLRNG",
  "key37": "2akkCrNs8Lpx3YEqEbRyf3EtaAbXtjHs68mJx8rJxZKEYrk9TqapCsJgJKm69gv9moDmPXXiyvECeoHFvFMaQGTW",
  "key38": "LuaAfbWJj2p1y4r5UPguuo2fqs1kRFqCyDme62JVhZMpbrtouYYvvf8SKQySiduuAur9qBaDKSbgs6mCPj21qkK",
  "key39": "42tsLWAipif7Pa887aiw86ceUBJgWmzKN273gmr149yCa6QC3qhveRbzdoE4fJ1rwxp7zixNFZhGgWrW5JuJDLjv",
  "key40": "346NqLdvrYTZgVHDu2YDHTS1u4mXiZu3iKkMU7JFmtbp1znr1dLrBtwvehrtF4Uct4wiGNc3KduweQrQhaDLuudD",
  "key41": "32Bp49Xr15SrJpwS9XShKDtvQuagsowFyaYMFE8M45B6SQZudYQVLm1f5UhRsHAPy81vdAc1Z79BvBmVvrFBScCH",
  "key42": "2rHAgxSZvwFXWAeEnu8R3gQ4P2EcDJhs1HMMv6SnwAcPcwo2BQtCGTjVxHdXsusp5RyoT4vQLmsZDKb1feLzrk9e",
  "key43": "3jYs6skyP8zrgqV27uwaP4qiNTEkC8fP44mKV4S282EjZ7Un7Yg5WAkDQtQbZEPYYn4VCv9MosiUWz6ddJQzq9Dz",
  "key44": "53JRpwvAz6dqUhDTNGqM7S8YR4NTzYu8YxK1rMftQGvsE9UXmaB84PSpAfJMZrxDK5e1kPSsRtem2cPj2zXtxTgV",
  "key45": "5GpW2SekFWRh9K79UWH6oCADxzvtV33hFDfuwpmbQJFGKRgppJCfwCvaZ5epTfujAUbBcE12evSMaoeckspMohqq",
  "key46": "52GUbaaXV5BDbuVfRzPFiLZpjwUepMVnMy8N2sAJmZiAmZKkhXQkfpSoGmwbvkgBEUzoAB1kDCXLGm91shsE9vY5"
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
