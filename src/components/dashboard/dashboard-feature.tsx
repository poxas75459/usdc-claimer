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
    "xu2NXLdFy2eTPWbqZvhnndTmmC7JayEdEMLK8JWsxozLMbfTnzmzrH9ADAQDk9qv78rWQKoMBvK7VnkyEAdjWRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sf33N8HL1xnVEeKXbZnreiVUVM3u2XcqA7GZLQrXMG9X9o6UctfsShDsMynZCFa5bsQ7WornFWVYMDH7rS1HCam",
  "key1": "5G9fdXzyFjPhtHDew56TFrGZCKYHKwj4S6aKTFFpcTzBBVfhtEyf2wEgoTdaqz5L9K34T45NSuc7vRePaqskFbZn",
  "key2": "eJPrPXtTzafWx2yq6gft1H3DGz6sTcLmt7RDpAnBAXhLrZxJvfVWkMzZXfxe3jG4jRpytm1xeXcrmiDxDnyCtt3",
  "key3": "2xMJGhduYXZF7bthkG4cZzyK6Zd8JoutQ52zdZbgxetAFkuh5Tugg3N8jphpq7a9yAMFYz3WFXedVMvHJsfAukJA",
  "key4": "5i87mKwpEj4kYCPTEJLRsQryA9UDRoTURXdTrscGunzTAtyPCaqm3wg9kso6qavx22dGwnohtzCp2eBiNVejQ4Wo",
  "key5": "3Sug9QGS66KqbU8RFFyqtN6Jcf86omxyKBwnw7bxbv61XoYRPiNA3MRwuH2Cpmq3rzafqhgYQn9rsqqFXroEb84K",
  "key6": "3sDU9e2BhzdqR2ugwFjEzetPWJ2Y3hYzExFA4g9E3P6QJEEJt76MFubf5kDwUWLUhPbVmuGGScSy48UJDp9DrA4V",
  "key7": "4LrNv71DnkLtRjbBFM8qr7nzXTHzEB6X1AGCzqDZABu2ESqX1pxhXUYCB4M17W7rSjG3zCrTAMU2aqNZ26EkRiFZ",
  "key8": "3S6ugTYnfypQ3EzFEXvcJCPYg8tgawQhm4vTfTWNGjVDxMfc3xJwVvQvb2wrGRBwMp48T9gozX3vjw4AyACX4c3s",
  "key9": "58Y1mz8teCVycfFaTmuX6pTTnTYtLwQNntJo8ufUVpR6xR1pgfbhR2rWR6kigvPSHEhPD5zWPCELAfN91RiS6f3v",
  "key10": "4p2EELkWwY1NgTxTRnsZn3aYPb9TmRU3QuArsnuQwjD8VQaSnQgMJS5eTeBsGujvosFtJQdcpJEdFq531yWV4YEA",
  "key11": "PvrapAFjJJpKsrKadE7cLvckaYhb4kjbfWxmKM3oFoAZh669LDJW1qPW6YEM7ynWgQptkqGHsxf1jizgLAr8eTW",
  "key12": "3pFpPGcWPsCfBayYfo5w8jDnSNKkhPvd1J5j69743vV7pm78J13f7pcLtta5J6CipnLZ1LKjrykKWYkk1MZf1LzV",
  "key13": "FdDBUvhe5rTEZfjRGuYxtrz76iaXG4WUqna3Bxobyx6ceLhf3Z7B9P2B5RBg4cqvfhSopZaGaXedoBAR64JjVGx",
  "key14": "5TPjQgv3MU3gtRx6tZC3GYSEDB4STXSY5D212Y8wzn3JcXNMzyvqVm52NCRhuwQ8EpMSDkPmCw8Qd5RnyPNYSLw7",
  "key15": "3zoqgaaWXoywdgABv3nhSzihCBKdRWzevccEdF4w3haRpHkLhDU5pjz7ShbsiSczuatUYhpFpHe3gmf2JzUi2Nfv",
  "key16": "65ygVpzyQunFF3ge83MinNvGzrb9PZgY45XQ2HtuB8bdaiSJfNY5pPN88kjhYAD855ycpTWEpnGQ34bjQduM2KMY",
  "key17": "5ecSdoyq3Bma8tomHvnGMTgBr2bUNqqyLRNS4jguQaTFwzGEjTC8LoHPrBjnQrQKAHqKUTiViS8L2hTrgGRFw339",
  "key18": "5fb78SCX4cMzMeSQ1YpMzZQgdiMUxnmo9aJuZGzvzefv44PeY9SMiE4XVF7iug96XVRHo5J5GsgVaXyGfxiY9Djd",
  "key19": "ytLE3cs4nC9oZMh9aUp42LnqbpQuLowcpkUnFG7Bv78DvLcfdBp3Gu6V8m2QVKwVavCGNSfLGVaBAJ66RBCPRzd",
  "key20": "47Fo7QqvpZ1VbW2Jajf1uQVJ9oPHRZ5RhES68jXGv2h1oeNEKzA58eNikXHXKYG8Usw76UycZNPAGCS9zd76chca",
  "key21": "5eg4JjxBw9m6o4nmypaAqaKKtMSaieC1XKppspSE8sG4bA6Eona4qv8rL78B6jEUg7Z1HYN7sNydgHtymoqfenFY",
  "key22": "4Wmb41kexgRgoGqCgLxSPSZiKywqFUG8aghMU7YCPCwaJRsgdsihsUHWxKSn5X5sFxyViApXfegc2fKg8oSUVWVh",
  "key23": "4HC79ppDGXfRyLywG55h7EAbQTjCRJhUZsFcMsCoAKvkpRDRFVynWwfYsaUDM6e33CZgYXJWTXhtWoYnSdb3aZtS",
  "key24": "3pUeCJdtuVCwqYqvNZ2HCaNSvSgT5Wh89oxhhRu7HGAXuE64GSHtECYAvaYchFtXuENo3ycRGSBY4rZ7NaqXFUiJ",
  "key25": "7ZKqKSsa5PRKYQMJryazuVraKSuoUMAWajRDMe7C9RRYEGZDSvRNp9Mk9g1nPZcSvVKxivRkM5weEcqkQJmN87T",
  "key26": "3ec9TXabE1HN5e7ce6cAyhBLBbkFkK1AMRQ9M6YdtNGNXX6xqvyoTa6zXgRdL6NCVX5yvXtcbbLx7GBp7NSkZe57",
  "key27": "4dwGVgAYkz3Wy6THzbsTYF42b5phYNTbPA5Qeg7FEdqc6Q5cXcKZfv45VUjuxWwi4dYHLWNRDn7DReVVTWALytWw",
  "key28": "5eDjMr1P8PJ2DLnoiKgSUYvV732uUuXDUANWH5G6ZCg629M58coVLJnpLjzMG23rMpf1r4tohNXZ2vwpqgArvzhY",
  "key29": "5ZLPH5RPQjaqnWt4ezJeF8GNAu8ezqLKGrV3a3e7CM115z4Lj7spUMJdRm3nrVLFa5hXvXheGhXnqXHkc5VWazKr",
  "key30": "4cnb9u6JZMPbnmcrU2JDSkDMrMkEoHHDVWdRVn4Nu635jqGapvLJ8dmGiGMk3XuJRqeVNR1NeX3iGEN3ZvpsyiNX",
  "key31": "2wuhndAsjdpC1hSneCAWCtXK1BdaQWrAPzu9nFEVEEzpk3y6fHzoxgUXE6P3NJeqnQYtkyT1FBGGbGBqhZ2Fq8s5",
  "key32": "5XbxneLkbLxwoHjXG9QwPWYakRYPEkag1XHuEEWSa5eDbeYpB7cQcchsMoym8PnGdvXvx94ju5djzUmJKPWd3Nit",
  "key33": "h3DDz6fUAmq3vn6ovsWU3qQSrYp9hZyBw2gJVRGfP5zaDXAEW6ZmUujx75gnM7ngwYPJiydTBuGFAa2wPS9KiHg",
  "key34": "5zs9epXrGfJZR4Tg6T1peEt6NnjUH3nAZHi6MsdnjKUi4xsnPV43mZ5Pn8DmrkXeN6sREj29eRRgtu4ogNxMv1ft",
  "key35": "2WTmbv3fLvPRuiSiAtms5M1CjB2mBfii4jhBbbinkQBDHFs1U7sQ8L1tvcD3As9SEYdQ5LdBux1ajwANnJPSt22P",
  "key36": "4BnczhCf4fKnasUcWGTgP7KYLkYRzHn6NhE8m1rJyqUbWcXWZCyEvX3QqWMW3uzNo3oYd398xoLoCYtzeQxDXFsZ",
  "key37": "dZrs8v55F3hNKG34H5E3vgCtGjNPRaE63GdVX9WMcxJt7reyF5mWgm6e2FTV15Xd27KGT5H3RNUfGTsDJJB8HCs",
  "key38": "4Ehabn1jMBSNWXt8eeSTy6BtDbBuVgZrr9Bh2oz3y4EitFtjfoo3KRBxHnARmgKM5y97w1xzh25jSr1foMpipr4i",
  "key39": "64ke3DUZUm4yUHNu1urCoxMUuYjVSaX4UeWsHgcUv8pprwE27z2P6qU5imenpLZ3AeJh3wRa4nDWZTSP2CiQKRxB",
  "key40": "5rdVSffypq8EsFtKagVBGSfTb4X1McpTgHQHnk5M4rCfisDJZCDZkVm6uBjifmzDtMwR4vAFcywgiXvBSSyh4UfL"
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
