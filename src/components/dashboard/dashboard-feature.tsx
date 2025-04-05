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
    "4QgcoBiNjBMUUyK6LFc1z3zNgawBT1F1aQDy8uti5pXUvFMjpNTFDPdiSAfYDaLjt8tXTgxngEhRxCZ3TdAxhQq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aCKLhjqnU3m8z7fn3dFvXq7AB5xWbkQJmgnRSEiUEKbqZcw7aB1TAuDvwcLuXNqmazTXZTVHf2ZDJwayxvgpXAf",
  "key1": "23aYmKivtW3Vw1tDw1QwXDfdY5p4VZtzPoA77hzUSqexG2QUQgdYb9uqVBkfZPs6T12EDXciX9vw1RB8wroAf9dr",
  "key2": "fHbfv8xNANQP3FgBigDaCdWfuDQJmtT6gNG9mTofPwpTe8cx2vbnZ1Q1gQVF7FYBacndKJPKrMGob13L4m5JiXw",
  "key3": "4zb4ButvrKK1QaseehwVHfaVKrRQTBEYmGzyUTG6fEAaML3sb8ErCshHrBZV3Wi5jb4j6hHDY8dcB7gAQi8nWvfL",
  "key4": "3mgpykMNdrM5dQpFD9PPAuEqaX3ETTiDdfzbcoQdW1vZu3k7Qaa3bpwSnmS9S7wCLv2kwcdKv6qZjxZvuK5n7M8x",
  "key5": "n1vGfLke64rSsYpzJFncZytUtFUdGHwk4LMwPYNBc86JarUaNAQyGQKGfv9vYcxbqZXSm85TpA9ffftCAuafiVG",
  "key6": "56MZRCFaed3pGqGaxEqg2QBrSoDzUumhFBGJrz2T9SQDYEDi6XnFJQaBkDAisJC8gfzm8WKUGfyHsfbhsNxTtCX8",
  "key7": "3QUygEix9a7MGM56LMKc9JSYBf71JbDJkP4T3zgmW2Dhkc63stQTKSkBYAoQkc7SV5WjBisT3uGe2DWY3NJKHNk9",
  "key8": "2fQXZenLEpqcobb5QtbYfCR9BGLVz6cNPwEnxv6D2JPALyawfEAeR5iDJYwuACmDTUbbejT8RmuETLAjVTmco6p3",
  "key9": "qVhivYV7wpanLo6igce9vW9fGQWEVCGgyR24mA5w2nyMVVWQDoHV4k7G5H8gW5VnDtu62HcECiF1eqeBUMLKvJG",
  "key10": "3DSLJMYxugmhaNoSdNuZmw5UbBWhMBTcQejhtzKrwz8tkovL7Nq8EUYjkzKENTx9jVnktaJvgh6scNqmg3jVMnN9",
  "key11": "5xCC7jR7Ci9XcGijPq7N3HwJdetu4hqy4iF7W1Xcb537EheoEzp2fxpWJi3MQVz1oE1j9Zno1knrVXvznSpsUoPG",
  "key12": "4bki3hJDfQnwW7HAPa4GYP9GKD2K7Qx4qyE82wrwAp92XPVMELChJ8KSeNYRAcpDu77E93okMG96LfV4xjDNuhSb",
  "key13": "5Nb6xsVzEhvUdMNbN2SbiM7thKHxwDEdYHNMcpf6knxRvHsHBvhw855gvrwaF2A3hJXjmQ7gumR8WfWDjW1v6tTV",
  "key14": "61VcgXK5KsWBS9AnQuJodAiz7F9QcVrbtxCu7KC3xqqdXRWTromd3TeoXXVgj6HsFXgKHxjzzjz4r4dSiAQaprLC",
  "key15": "3nSo4hL9czh5BRu16Nk4DBasnVPbYmvdkFUDW3EACyu5wuTLToaqyqUK47cTDNFaCn6fnZSuzXjnvUow2W1zdCer",
  "key16": "5xBBny8mv5dmmtFiyencpABbP4qhT4N9QmhguNLJBycD6CcHnE2LUqwRu65HFvQcd1rFimRvoU48vHDfdF76LnHF",
  "key17": "2287Uv7x92Qns5n1QwsAX46HNJtnEywCbSwcFWxarYmqmKgGB1M9d343CcieDXyfi9EP62NtnepwXb4qwGYtaQ3N",
  "key18": "NMwjeuSvDYxHGPbKpnTUUL6HFdBtNNLzy8W4EViZUi7jWNFqWWzHnUaNLTuYMhxQ8knisE7r6cGLt7jTJsQ2u7d",
  "key19": "2UseGTZUoHU2qCzRTwXeJE852PVCtSFNju9yudYvcbK1FTP4fyYZs5eqz8sx1QHDDf7heuMroJsLo4tmsDFRm4d",
  "key20": "23L85sCE92XbCbiZzjsqnRipyFBc7ZWGDBAky8D94aT8uXKsFaYARKAzrLM6sTWG3oebM29gu77fcCKzHEfgovoL",
  "key21": "516p8WkgsyrRNuiMH1NVhkTvcrVEKi42ADcz9KRPeRKxmXP6i5TwvsoVHiCT5X9vDWqJjjtbRrkJwkRyJuRewzts",
  "key22": "2SAd68L6i9mjKcFCqZMsudhBc8mgMPshN3vNqFj129dQGyKHnuDbNvijcHW2rcf6g8j3pMaDTE6RwvQBTsnQmPSp",
  "key23": "3ixxg1QzJfx7JRXMDYf96R428vWEuW66vsvdoMxT4i43Zqr256bWZqMjWCYbqSgLWYtEZkT48fkxG8hm9CLxS7S4",
  "key24": "5axycXEWNF2UCjyRDs1zctk2nPncYT74rKEKJNvnUEvADiFP9hkPKB1djScNQDAgzUQM7dPb2XoZ4Vn35Cwb4CQe",
  "key25": "2ufX6zAjnziDVFe4cGrFL68rdmhC4KUbFQb6ZUZC52PogBw59xAevKua6ohzxm7kLBGVoSNCJapwj32aLHtu1NDz",
  "key26": "3U3aq4tHh5Rpduv83sxB1hRS4y7XPHA5GH4Uuw3Pvuyjv7Z8ssDRE2JoCPXi88XuhEokdqBu5dEdvtDoYHc129s3",
  "key27": "61qjSJ6p6XnShntfHvBetp6ktFYzPVfczBiqWUdRQR7sDaNc3fTG1gfLWFzMaBWk2vLrf7ZkTKov7R6JekP92QqS",
  "key28": "5cka4YvadMhxUpsGAkqfoA6WDVDDweRVHk3dDaixytmXj6qP28pRnWTXVNDar2Jw76byoZfNZbBPNJBzJX13nDMJ",
  "key29": "4uN3vntG4ndoSAge5vTGUaH6nAu4zgEvJkVchUDefuG1ZBQiaCLG8QTTxMS8JsJXv3YYyzakY8UuqY7GAUereNrG",
  "key30": "fdnKkz7njrSyyn48BfXAKnZyxgJvN9SeTZN4x2142QtpcQMKXDdbGY4nTCzGZjeUPDXf4L9PQWuCb3UAeQ1NNps",
  "key31": "Tvo9Fy3azFheMZD1apVa3yFtwkXm7yEbDsj473CDk15kthccWJhxhXNGrzfg4PGpmCc8kFhDy2A66QtpFCKuvPz",
  "key32": "2UijeaRFU7vmvfAcnUdVF8vfKu8mHCGhkCGbHakaz5DFaeQRAM7da14dPgTf5E2vbpnRzzWj8EWsB82fh26KHn2D",
  "key33": "fy1svkDsPS83KtcbU59FRGk9ztf8WTrHM5YqXhUdZcuF85KQKHakebXT36VV2zbtAFaDo3PkmpbxVcYsnJ4xcbd",
  "key34": "S3eHRJa1XdJs4tGU9PRwm5CcveV4VQ6nBwPv6epX8pyq7zkmiGgiGHg8YFFZvE4tZ8S64BsNG9qDgv6nqcX4P7x",
  "key35": "4YT97d6TGtrtTLNSdbaesp7M6Gx8jThteGqsS4wYaijZ9b4k1Fh6Pr1Tb9YXvw3mNvBWFdfLNh4C46uDowQENuWe",
  "key36": "2mGZMpn2EETW8hfn8rGWeP8ivsWnWKPQ42Heb91fu2htB8ZirCUHcmEGwf8XoSHU5Lvg15Sz5Cytwj9S24ffv71Y",
  "key37": "439KoYxLAfdTanht9xuBjc3gRTkVJRdz7VRYAAu6p3c8DC359zGapcSELuPjWb39maz61xeZfPwoyzi2EmRjYgCD",
  "key38": "ZqC2DEXGnnLMuQo2CMu2WeiMTRfD38o36SXDkAfGgPZ4TYywGNyGCbHqVFzXfnL9tvgLcuwMHMkTC8e1d7cFvXJ",
  "key39": "45xHSozPoWeCGFzKcUa6Tf7pAc7X6mZFMmDGZtFeyd9qn9to3DCCRcHD5sRugh5sgroTE3myqmq2qctvXrtwFLAZ",
  "key40": "UtKrjQkr5zPzRrLgjfqer5375s9KFnqo16UkrRqbwEAWExHNX5jUGARjLBVZcy7eSRa9y8orddCXHyMSxwcMiBx",
  "key41": "5ir665UNu5mJ9vChkzSSYWPp3N5MNNfXeQ4XUH5YEop2hUGQ898sVcs9fbTz3X5KX6rUeocSgyRSWq3UMeuZAN6A"
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
