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
    "2srT6LDeBT2Z9JKrCzG25BWRTHwFcpwdj95qDFRiwxGvWR2EGzwB9fKkJb2DtpvQrsFuChEQNppLXJZ8Ph3tqJUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35JpwdZoMMrQdW4aQPS28moGGK2ZFPoL6gkzxS7apLfSES6URG5GF2A2rK1sFQfLAGae31ww1pTdFRttYdJ3KQQH",
  "key1": "44Kok4tVkLHiFxSmW1SKe1kx2Yvc2Gvy7wNGD8syaZ4siFcgxPeYVPUzxvYU7FxKrV3Ea32oq3px1UCACwwEjacg",
  "key2": "DE52CfgAwNQwrjoRgz3tp9x2QHkibdeD2aAaetdCXjnRc7vEJMdbfeYgLaqUkp9LSdRjj7WunRm28nmkosRv9LE",
  "key3": "4BDJNebSff4dJFC6wPabKcvCXYHnpwCUYNSz7daz3fWoaQResQrytncXdCw2GTbUv4dGqW1iN4J1wxz6wwHrjf9w",
  "key4": "5AomTvYjyXcNMM9kjqxZuc8Ny5MEJnzxGrxnhCmqzuNQLyiGQ9xHJzHsQ1bpgr1y4fZYDpgz71Lg2WjUiF54fwqV",
  "key5": "5H729UF4DUvnqfzXM7szVqQjkA1U528zWjBgTebPM26p8BxhfHiXDWQLWJX9Nhx5t9RYyiss6XTdTNiW9F8uith",
  "key6": "54usdaz5PaNWbWuHuXTevca8USu3ar7MrLTJADJWYGReYNnieFcaSU6VaSG7Dwb9oWpjuj1sRChhDgdzCchQrFSd",
  "key7": "S1wopZyAre6ScvGMq5q6XVLK2QzViEtQEWhpJKNEmVKnfZu9U2JSvcCFR11AUDqB3NKDUhVgFymH5rRP1Sq6n4X",
  "key8": "552FDPPS3ZEYPEStWKjwka9yv2RaKpAVJQEc4tHVnWxo1qxgqgq77rF4XrT6ZTMrzkqFtQMcGcTsyK1djQRHKQP5",
  "key9": "4P4icbWaX17GTmkz6mLj48Zqod3dksdNkMQ3qyBn8NQYXVoT44DPZbTNNQn2hfrrk8eXaXbKUZwVm5MdN3daHSWP",
  "key10": "4PxRWgj7XmzmX9a9NsrQh3VREQGLEyevwxFufdWireYLZWDSC8FUn7ykkcVYJsWHP1LRqaDSURTKXaT4f2qifcfv",
  "key11": "4Z7eb2J79nDMNQ8FoautnACCx4XzgAGW4BsjB9NSsGN8dXnAGwTGmASFdsX2N3wGosme7LEEV54gskJYABBqbDAE",
  "key12": "5EFCad49aaM9RHAX1LCHqLssb1Y65XXHXLh6tTKeSGXPDf3sWMknHMu2F5ErDJx8ZoehGDVCF4ZSmsMxNT8kCqUL",
  "key13": "3NjtzuRMFSZArgknGX3xnwDW91g64n8S63hDHuLFry5HWpsTkySCkMhnenA72zggq58HH5wi7Zj9RqmSq3dD67e2",
  "key14": "5C4S7nXhX5nDjFeYV5JKWPH5ipERP66DrtsFPaDZVGaZLbdNeQPaP7wpGnPTxAMhrWxVthJcR78syWh5uZTVAE7z",
  "key15": "4i7MX72uhpspjCLPwoNa7p72wFAfvTGhT3noA8XVin2naPmDYb92RAdpLjXvbK1cPBrsWmVgpbKRXEoNZf5h6CVT",
  "key16": "64kKrF5p9MoixTWmaQTWWT5P7CrnJ1n2AuQkHurCvpBb1dmGdDthN3gnF9du8cxqZSqRoWrRsjfwu18M7LuSy7bb",
  "key17": "2jnDmrev2rfx6gPp4xtDfDFdseugm1Y9DG5cao2RWkrfNfHCWraHkaoD2WtdYpxLgexkU45aWGQmsjdMHNeLZTy2",
  "key18": "32k7QPBnKJH81YyJd2HUBvXGEviNjqYBCgn2eeoP9RC1m46vDfoAfXTS3AawbH28BpMYbCdZKNcMoxqGAe7GPnud",
  "key19": "3SeeEC9crtgMKJgP1RjNoAwbfFgrQ7hKa1v3foSoxUXGvyDbfhZNABzSJZJ9Q63GCAt3Muyssq1modETJViTaNY4",
  "key20": "36JHL6TY4DqJKKz9bQtoJAU6x3hSKwZdaY9mRJ29jZtpmjmoNiYNWtSQDp9ivaqov4v39upHj95xYPvEkPcYugWd",
  "key21": "4ScUPM2YfSS1zoEyRaBULNuhBrxDJy6XLp9CXMQsenuzVum5wrKisv5nM463dFhUAbgJyZ7WtcNT9iqmwUxDo7wu",
  "key22": "3PxtoD5jvGBbGqER5HCe6Ez2zXPRFF2jfqXCZgBy8dzAb4CQa2j58a8HuWKZjLzQVY8puN1cH68RZKDnts14w5eK",
  "key23": "hRvyAELKgJUFM9ag79jtJJB2DyjTLxcqkGBqu7TiozmPUtK4hzSyzNG8YMtPaptnqPTRdBNvrXwQhUpNeasd8aZ",
  "key24": "3fzJxUxVYMbgWfmuWXr9vuJUTVRoKD2xuo1JTLyLzGNTN7wJbnFW3hBpmYpkB6Bp1G3Uo6BbiFwpUtBpKtoebEJb",
  "key25": "cUGtJR7nqHFgEfkwxxAKx6Wv2TAfbZCLqjs6SEXDjKt1QHfLXQ2X7ydeNJxf4aQZwn1VkstPgNBQ3p1F2YSeJbr",
  "key26": "DmKKcRFzvJGYruyP9DvBFRrkBf2Rumto9Ci36c3fT5XvCwMFxR6RTRFYU6gsPk9JtD6c6z5fJp3jbyjg6GwghLm",
  "key27": "51FQmjD6dXbNZ7ZjaQip6Xwf6ovwmE53BufNHp9fgXNTzVRk9cKbEeVjXCsWA5exW1jAPdnUNK2YDkkTiXajBcsR",
  "key28": "3mvggAD1AihaGQH21GJiWLWBaRsqzg6cAuZDVkx9pJA8ugn7yYC7PRQpGQ4P3Pc1cXvZqmemAeMKwK5DjgMvhytm",
  "key29": "4Y77VwHvEHbufqcKngTBRYAVVp1YVJk36hyp8iWZBfZLCWhqb1DhBbHKKBTUhcH45sNSxTtJS2KDFjY7zTeqoN1J",
  "key30": "LV8NK8UYSLcp7BWkY1WCLBWyCRmHFStdRW4GaoxVwQW6n1Mb7WHJTs5nd5572znh2CQfwSWc6prmRy3oZ6Ys2wQ",
  "key31": "53HuETh7TAQWDHk67ZNxPT2hB7LAWrByctHf3mJhnz9D6vmSUCb6GV87aPHUmp35N6BEtnTcTReufgtXYdPkTyEA",
  "key32": "491d3cTK79TegNH1xGV8E6tAjDeT4TyifnzNDvAmxxtVKPe3XYqRMHHqjyx1hJX5tWFPGbGXDNKETBeFfxvTFJTY",
  "key33": "5zNLG4i6FnN2XZR7vCFsAzGyfhV3FPGZqw1Vi1YocYyibzHRE2Lcyxm6vscXUf5F2giHdkdVQnNvqwBjb5wpxSWM",
  "key34": "35LQhb5zgLD5Faez1ymoCddxYJQk9ziYMhQyE2a8howiSinngcGwYmKVZyznaj11mTVkPtGFX2UYtcvbuFp4PRxA",
  "key35": "z8qc6Yv8NLL7Ag8k5DQQEnCb2wnGMurbWJaanjQkpTH34suVMkGTGTnm6hNKDg6zppDuicvxj9bHTd3zPVGFTi2",
  "key36": "4PJRruaVDLptwoZUUh6Vy49k3FzM7daiXJDGk53K5fAubyFSd5fvC3UywsRwXPz1Z5cnkCTvNXVxDbYMW3HPAeGs"
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
