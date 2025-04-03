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
    "4LkuvZebsh5K25Ptt1GYCPBSbxEUmzJxnYh5JgHa2BLKRFgYwCV6eDHwASDCZuTweTjBXVaTQEiTgWaagSJuFSCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59tWFBU9baRx6yNKhDKBfq9bZtQSjnUD6Kwq77xou2GxE9kkh9GVgduXaL57nLo4c1NHDzJA5GKbpvszWtfvxiMF",
  "key1": "5qAEkao5TEEJiMAZCRjR52dJnfPev9yGbHoHg64G8NGT24wRxf815ZjSgea4mhTMVvbukuhrQW6hEvXyLxh8K7Q7",
  "key2": "5gS1uD4oeca5PEJPpA4bkkJqEUaJmHqGcNH6RYBqucrsmpFzztvMT8s3Kyaov1CVzV5wEJhEmF5gZBachYXoxEza",
  "key3": "LjQUNeucJxxuFjg4Dmckb4PiU1D6PLFDr9nc1tFQwas4aFoL6b6KtoDkkR64LNHKtELcYs4xViH7u7hf7Y7GTC6",
  "key4": "QbcgXwtcX6xmFT8mj11SVeph2xAesbpWafyvqEJf1NRsYfU6vHyf6VTMKUdKXMySZxyeZetqZf9P7LCfny8ihQg",
  "key5": "4wGumDNRVyxPF6rfzCCvwR4hVmZEsgg5CXxSRCLwbuD5FrrLrkYQ1cUvNCKV4tfubyhFy2RRUG2mh5tKuc81r6BQ",
  "key6": "2cSpCev9nZ34CbxjpZExMna2yK6KDKkEXjDRpuePoQBPmhjKFJf91dob2U5T8w1VGN2zxvS9VLjHZowpLP3rbsEj",
  "key7": "5vajnkfrDKmfhCEwgfMZcCwyNUVC5mHkRtFWk2c6GqYxVEUo7uqGxJHHUiXu6fKhxPULdugd5FMkPhkLgARBdpXF",
  "key8": "4yoX47cgYh8TcrdppBCQosuWyzLdaxy8pbRqvqMNi6yd8PwB9TMnpVotyz3UQvzuVnWwD8DMS1as9LWTGgh6GQpu",
  "key9": "27Y7zfN1nLW3bucBTMw9imQgZWL2ijfXAuD3s6rp6kdBY84yukwvs6vVFGB347Ndck2GCgaGHoTknKXe5ioNeLWN",
  "key10": "5W1WTNGBjvcTBWF6daZ7zfS428fdsF1AdzP6RyXKBWebdwUPWJryWCMqY9YfMLQDmJuBo8e7Mu1GyNgE3kLNJPe7",
  "key11": "TQyWpYRtrzm6ULgWjASvE8wi3BsnvMmyRFTpcBHGARteS5FT21Rmd1E6rcxoNdnMTXJaTJuRLUNm1Rm7crWTJNX",
  "key12": "289ZiG4KbcWbapjsNkVhUc3xc8Q79x5GXidppectRE3BeFQUhFLWASgWZRZqt8oDyNZEZjnmhz5Jtra42C6ayEBD",
  "key13": "35ZURAXGDHk4s3NkzdmasHd5fa49euMUbfmJQc9VSddHPKHHnpaExQdL4j5SSnVzpLehxzfkyWzMCYCfLqFaT2Nn",
  "key14": "5vYAe28fpTrxWXkTVA3H8hqZ2TjUxRBVwubi2ieTC3htcJQZfBYpZDAJKJaRfce8FcpySmGgUnYSADiC6oL6jzpW",
  "key15": "3aHpadjEs9nPkW5QW1CwNoZkhJnn99bUwuzaRc1E5d2PtAFLoFg7UfhLZpokzveqD6ELUvChjMV7B45ApzXLfvj6",
  "key16": "6dzf7MtXPbSDn5p97QNhnKqQQg8LMVUcnYFxm4WvujU9GXrc2RYkurcrk17N3A1sk3zeWcPsRXWSRDNCvKDZmtN",
  "key17": "2Qr5V9zYZcjxazHqhfsT8wtYSmzkWRM88eeuadnvApWVczKybXgX1ESrhckxBLqcin84pAJpCUcvEiNjU9a515cg",
  "key18": "27V36DQtCaJtJVfyA2fd7WiQg7q8mLH7MVPv7JM4KfxPZ4TypYyUGGhXuzkinEackrPpRJqLgxcjhAX8jFeYbkVm",
  "key19": "2m64dx9r3WMgLzsxrDdM6CfqLwBJHtTBfntc7JskVhKJNgbhcnCFiWHH6aupCVtqdLJcq9p6ZJCmEG46RzTmEsNW",
  "key20": "61pDucejkDHX52WJZ6SvNVqH5KCgvCHgEuhXrxAbQvEsoqDxwU9W14FvzgbhJ16hd9VyfmzCT18dJKGVgwacG7M3",
  "key21": "4gGJoAnhWCj2v2rpNTMLM8HX7BQVemMHsPsSfdADtqy3Lb9fkQqoVWd9VpDyBRW1XKJTA4x8t3AZUphk8TzG9ahw",
  "key22": "55CeN7e2nkXFGUQZD6q2hzYiQ7nB6agBvy2DuNXXKpfg5mqwcgAQfgF1zLqsXLLKhFaoWMcVWY5T1JaBnbwV6B1V",
  "key23": "tYq1FqhTVKhgiMENHGF3mHC7dM7frqvgAfTiMtp56B2DmRrQJjm4AgYr2P6D48NLSBmmWoEAAmw5JJaxe6KXhew",
  "key24": "2njPfj29uAxLVsVLc1s18Dq5no8fWXaHukucxaNBkMGfY1WVM5Y61HLEKxpU6uabdr1V3eSjUSQied2pyfnW85kb",
  "key25": "3XVgyhxB5naFW1n8gwmBsrH59Tb2UAHRhW6tpSF3XJYobYvYHZP3QmGSoBPkN6PqtdHMREga5csXYteuEL5suPtZ",
  "key26": "5gUnQT6cmTvPxPfo8Lr9ZPJAx8Rso3wJJBU4b3iAs76eT8zoVpH6Zj1RkwwGdPXCR33mTHTtisG63rFCiu5BE3DR",
  "key27": "AaUxyVZPCJwDpmPBMavtsT2wRwkXiLnd4DP2M4cvnxF5YS6bJsFCS5Vj75J3vLiy7a8tdguwMJ8ubSQ2H9UWEmF",
  "key28": "oG6FQNGb7eN8gjxtuB4a4mszFNwcxwYVPTMn4wzKDZaa1ro3J6XxbMmTSDeNVYLMu9eMRUqa3dmjEwLiEzXJQX7",
  "key29": "4vS69T87ahUoq6zy9Y3rhBSNRZ591D558Qu41KxRe4tBVYq6Liet7VFQtBa2CC9dPDkwxwDoD9v9ZWbFJayBDGZk",
  "key30": "98bXVhNiiNR2Qzbn5PRaYFC5J6QTSjVcTECRp2G8XPrndKMnjfbeQyPghvqEsHNSogMdeSvdtZey8ZraetH54LZ",
  "key31": "444tZVk3NyAAC6mgbtq7Jtn45QvQk8Cwwyx5mdBjiKuhXiBtbTRYaeHVDjUL9fBoBLKC54mXyW4i1wTqxnyjDQgD"
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
