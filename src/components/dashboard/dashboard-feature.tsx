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
    "56d5Kevt1QgrEekwMnHGLWNLasMtnSBgwcR2KUJ51Hf8omkLqXv6PtxNg19qaxPkX3zZXoY1ZPsEx2Mx9jQbymut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kLBfiiH82jg5zL2R1ey4jtWE9jGyU2HvxY7P6EyLHfCgEwLALJE3hYCtiYDqmoerVxJLvFBWecjQKhREyVBRB5j",
  "key1": "5LuqcjTZNKhWnv9BNG31bhNau1nvVg1XM9T2aMVpmSajabqeHP7Z47oaBjGnogRzqJjFxP2xePvvHVViD4xaTz4r",
  "key2": "5VNYaAcUXp2Y8KWYokDB4x1p9D7ErgUdNMr5QBqHZfMWp6kbUXZ5SQhtNZc633hVNMWca8kbCEdjLJ91N64KB2NS",
  "key3": "d3qvjHZiTm2zTD82RyoCMXmZP6Dkb7K9Tt2Bcej1HEXpVZq2NNTRy14bY8ntXHbkLZ7EBg5tcHmaL4T7yrGkQLw",
  "key4": "oZq81WAupNu1jcuujcErRWVDFqkq44VrDQPb3YRGQGYrYVa4jrLFLDoQyeqQAbxoxwbKREKZu7jmyD15A4e5wnN",
  "key5": "2VKMAiuwCny3ZUoRVwzaVUKQxuA2Tg4CiJ8C23c1KMb78EUXe8BcCWpJMdmorHUBEffSfUzPzCKwGMnSFGX37ESP",
  "key6": "5kG2UUZEk4GPRWSmcXQ5wNto3bDc7JgUDN6BvnXTC8HmVMomB7xFTSJGg4tY45xGKvv2NvzPFHCVLnXNTA29Z2C5",
  "key7": "2GbnLrEex3j7v331g39jpyQrXVLXJmGtsZh7VY2rh5U8X6sVSkteRKsS6fTGDnj6dBNrTPBdU1BAHtMFLd9brto9",
  "key8": "561HNHSqPWdR24TzQWDAFxQBSQCKbyzyEUmNtwFArnGV13jg1D5AGdJQ8GQAX4C59hVqybLCpMJZePi3NdcmVMWe",
  "key9": "2EbfZ2MQCsqwL4gpTDBMap3muZvf9fUE1fFtBM6Yr4BuH4qFaSA2EHBVyg8WhD2FeLCJfZwhte5Q8cnLTt5RaptA",
  "key10": "RXNL6Di88xzWNwxvXsYoSx2J5NfQvXnZ5JnJA3mcNMNCYyyM62nWjri6BDwazMK1Lgq1AUVTxyaw7LkworubLNP",
  "key11": "5wFYahqcWnfFq2uYhTRDKa51PqwJvdYFibxmzzyYaBudhiq7JY85DevqDCtDEfhtZhCopHCH9jefM1DvJyqGWg7t",
  "key12": "4st3yYhyGJUbG8yH2eNFFNqa3ir3TiWN3W3TrvDtnbKJjMYNWX7MVkTWuqdMjxMcdbRgtQDdR2kbuCVkUc6iQccK",
  "key13": "3mJre7GEHtYmv5t22VK5PbeQNG1khsZfKKWMoPGkSrrvDzbWHFc4knZ5RWUnu663FK14vA6vfgdEdhv8KjPE5bnx",
  "key14": "zSy93QpoEsEdGvfDC71BPpaxw2vjHyjvhJzede4Kw2etAHjiKGCKG2URp3Y45o1y5d2suis2tpV8qVpKEHUWYkc",
  "key15": "65bFLTqKAvNjDNM3Y3u3L35QezZuKap23MfxCzjWZZUXbMA7mZZv69XLbPcJBqjXrAzAk3haEQEAMaAdWktsmsE9",
  "key16": "3NgExk4nfcQM9STMCoxBY9gHgd1BizokWoCWcHepGEZvH86GmmuNv7pXg7S3AHiAoxnvK9TyAE7ttgeANArEhr6G",
  "key17": "3ekWYP3NwdHazEtHdvG4nPvVra7vRW5tgivNKbdcKZSayzbX5sG9Qezm25s2ybe3Wza2WxdhHtDrwbqP8CCNiayJ",
  "key18": "NXE1CgePN5FM12KLVPoCsADcvJHzHaEaCLqK5KVcuteamfHu7LLkbXpwTJvrq6KafnrC2VaoKvWStNgmBziF5J6",
  "key19": "35YkhUZUdXZJp8wXbhWNfQicsXnHGg7NU1druTHYEyWJQ8pe2USuFJ8GVTA9TEGkM4KwNhnggfYbeewDEtfUSUSf",
  "key20": "xhSN7BekFSdM2aotZ3Psj2gUdqfgU7dTxv1o3xobLKzRyooBpePRnLJKxvaLuhNdKYWtEw2D6zj2fAAxF3mBGTF",
  "key21": "3qvWG1wtJs3Tq81dvqsKjy4Af9MaC5uWfKbuFT88k6VZeAhCnKxRcmDn8hZU5JsB29Z3Nq3cyDkT1U8UEZGVP8sU",
  "key22": "5nLoupwqrePFe34LkF4oJKaDYwEhM47zxDbxJDE9vdZAYkv43VzK2sgbD4Y4PqBNCMXa3Zi2QBPjCriNW4ofEv4u",
  "key23": "3murYuve7W72m64jFEZAjCjNKJGmf2vSWCDvTr8Xh6dwMdzMEApHgLYqRHtECb6ZLE2KtDtnX9rR1hHD5xtNnSbR",
  "key24": "2s3e4caUWcesDFdunq7UTZw11e1oJgZk1VkBZhNjFoXJAb39unmt3Vxb7EWvE9KSWDTfGA1xUGBiad38oR5nJVEJ",
  "key25": "4sMt8gSoW6u2q6CNVC83FWLLssWiabJsoigQKA588qsv17VnJ114hoaCQNpDqBh8a7dDw6Q1tEwtXtZStpKnemiJ",
  "key26": "4dZdU6tkDaU19fosFNmSh4FTmSYtcNXRE3XUuSaMVaDuaK2413qcoCJaotPXJ4W6TburaviJQDNQhXeKHtKLcJWh",
  "key27": "4uyk49im7wM5Tav4VBAHN3dT2oEBgRapeRF7TdUDYe3hxtfpWfuy4Zm7gA1tRKakRmk8kdbRet4ANfRSJGfdpDuY",
  "key28": "GZcLgcYCmtTLV8dbZnVQ176zy25YEQmaUFgohJsRK4N8Y92WgkYsAXKHsLNvJz4Rpdr7kNdsPeafhStaNJXCvUp",
  "key29": "63cRDcBEbX2ku1n7zCMVLieB9zVvCgRdthvvr38LskQgpWtyVpsCmz9aiPRuCoiCuMoeX8eY7cvKcVNqA3Yi9Zmj",
  "key30": "4PRw5dKgZSpkkt4kHLfCtX63P5Cbk5Y3mQfka3eN5W2n22FgwBbKY7ViRsToGbQqC8TmiXFQhWdCHQaN7yx9w249",
  "key31": "2ia8Ft1PQY6xs2GU97MnBDy7fdgu5TmZjwFtPBvVC5hdHkze8gJvt42nWKffbZu7WGb9YxQAcZLmeG5BHSYfGeZ6"
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
