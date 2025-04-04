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
    "4GFtouZiVtxrKmZydbEBUvLYjgYzeqActiLfbd5m9ULARmY7Q4MqEXkBSFw9MAGNgNBkDEuoXt7VxxTh6wsKBFi2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fHELqCajJH3FRoNJ5JUaw6YFfvf26XS4oGckRRVR1jvz9mteKSnJnry5tXZNLAzncZr9z3pV6wybwJZAxbhwvuD",
  "key1": "5rSE4H926wwLWx92fNVWxH1goZyzQDazkogpfZLqQ5KSezxRcDa75iaCeBJ1fm11m2wbhUAwKskdZbXFSywoDEXg",
  "key2": "6181vP4YatB7Bz2pdsz4TpBihqL9279WQ9CxgLYVdf3fr8jXyENS4bYzjBxonFXuHwi921B5iFhe16wqE1pVvBM5",
  "key3": "3V8A4pnDgupA6xTavv33Y7GtrFnnaZ9FUcDrt1japn5hABqP723S6uVae9fPqwfSYVVsx2HDGWeWR8jrkxMFMnrr",
  "key4": "52CgLRz5tAunkaPkVTJMscjDNBGQNGwF8NmhRDVv5AXfHaeX9aGd7pshGZeNoAoF26wBtTGfWDDKojb1qnk7w3wj",
  "key5": "4g1SMQurQKaoMHnRh3wYunmMPdgZugK7vqsFW3J9S3g6vnDUoNvfRMsFgw9kYdPTZNvFQNVrXHqaf6uLAYGUFwjt",
  "key6": "5Misf9gvj1Jb8Hu35U3pnDPaLsGXiMoYi9ARdTGQQweZs4d6YG7nygUXbZqsB3bmDTVs79EiFNoT4ZSRt4SXHZjo",
  "key7": "5J8FjsE2LwNhdgetHG4M96Pm2SX12x73tUc62rX858ci8aseTxw392nQRHkRJQmDdhe44YM6xkEBhCemzuUhaLtY",
  "key8": "2rESUN7kaJJWPmF9Ap9iFbf2XhobUoudMMQkUpS5nRWdiMAptbJ4CuTD6SwF3ocsXtffpMC4nareYoUZN6vpWeHM",
  "key9": "qLGaeiCsJi49iPVDLFVZAEJJNez6qQqaMTZ1qUyUbHbnrHqGrSn73h3BbCZTZU6Bvp39jfyLtP8cVC2jBwPF8Lg",
  "key10": "3RrXiJa4DTFiVYbcY1UUzPcDt8Jyv9pWfKmwDd9ujz4LC8HYiwuNzD65iHZKVJ9d39J4He4BqXftJopysPfFXUyU",
  "key11": "371v55iz329SEc5WdKst3oGiByY4fGbNi1yzmttcPj89c4tuknNAegNYqAvtwXuAuSrjXfWN48wHzi52ghuRDML1",
  "key12": "4rChrX4uwYh9De2dT6Ls3HB9w4B1VzB9bYHi1fDRQhcwSS7EXUwchbjRAMZ5XDkYuwyjTeWRDc9hPePy5hBjdXXm",
  "key13": "2tNjpVh5DTq7bs8z6xJMb8gAszcoSpzB8moxe3jcXbkcHUAEJwWMi7cBdy8d7sqb56EdSFfn5JAmqeSTgxzUb54u",
  "key14": "2oDZ5Bgosp7RDGCzjzoGRtSC7tUkmTXTTBteL93m6jnfTxAGGcwcWgnbWSG2xgAk8gj76QMkik5B5ivNFGL5ofJc",
  "key15": "3kJN5JT1pyEG4ZZdeMpWXZRGMiQZfosHWtKgN3oieJFP6KxPWB3qN4iA17kq2fESPZdWGux6oMErZPcrvYEy3sDC",
  "key16": "4b3u99hdWxFJhYQZPhPap159oUpH35JP7f9dPwGerz2Upe8Ujg2vp3aXhddLhdyQ4KuscBPWHUPuj9acD1xFPyYf",
  "key17": "2UW51MpAg8xNUB3EpXJrVTUb9mw2mTkFsFqLLpSUy47iM7mNg1wctrD5KbD14SWC8cmMXqdyPh8R1YdzX5iJsaJW",
  "key18": "2KavMpvfTwtSDW7WW7mT3n9igwYegfZ73M65c7ds6QN4cdbWEWWk6PDjfdF6qtikD823fcDN9YRa2YhHZoxqdhgk",
  "key19": "NC7CQQFNiWLebwjGNEM4JA2R9VJJQS23zCRhXgPJpdm9RDrXsjTGiaAFmVCgtNk9Vbk97jaT4hDfRFLZjMyF8Eu",
  "key20": "3xZW3RZZMq1P3hqTW8LvTmS8i86daPoiMcK7FbdntrE1dDmxvDMbTzHmz5Bw4JqVZrUqACwR9yitUpov1NCJq5fL",
  "key21": "2AHwpWPynMfvTaeM9d2MzPNrAtGHy2nxATXFkstTKWxNe9wbPXMSCc1jNcsJVNMqQXmmqHtsvwDzz22eet6hvBpA",
  "key22": "3Q29kZbwJkSJj19tCnYDAbxe6JMjiNy6PPhkiwU3f6JrscoAik2kKrgLxnDhTy3AsZtxtDCgr8ceYGP49PrSQe6z",
  "key23": "VqBhW5g53D8XciLG6iLngXqMtBQnv42y4nBNJj4T2HiU3oBfJQbfBRrsrw84XqRVzGAKKEsXUryRCyvJfMboRho",
  "key24": "iuekfPcN7UP9npK43MVVsUudgap6HwFJhLeNxrtpSc1XoBo4TMv581vT3hYzoYxNai5CWEwEC8seDGo9s5ExNpD",
  "key25": "2XNmxzfNGrzyZtq4CwohAZZX6XXdFDx3DqTfgE1XMsPztif3zPsMRn7uftMmDRBragVvgcGyCyQsQ1sdzg1LNGSS",
  "key26": "2yFQqG1cLJWusSNrCxDQBit4AtnGHgMfKVR375xC67fza6cuHe6Wni7EHjgAzXCJuwvueogq5KjrEaumKeXdxwGK",
  "key27": "27CbcUKpcKBmPy67Nfn1ioTXkvwm8fgRhDkFgCstBLnLC9mVCqK9CjsUrHg7DNiKJ2KcKST6vh4ryfwoxGcYPxUu",
  "key28": "3Hty3Yy1uUbFayQVMXPoHVfHC8NgCtKB5nrjwCcLHg4YYFMMdSnwJq1myfN5GZHdTexWVKTYgZ4RUFGJ7WqNDKAP",
  "key29": "BFCDz1bf7JPrQJ9jAK1QUe76DoXBLMgX4AFqsPPfh5TSLBeFUk8j8YQYwSmqZxBPFakNFnPJ1mSWikXhnARYpby",
  "key30": "3JHHqhHyH6joWc8b1PTb8TiBJJjZ5sKkkeo7rio8eKjrKV5GNnfiir614DNJeKv8T8Vyjcccme5AsfGJSkrBkkbC",
  "key31": "2TufpZJRXaFFbyJBe9VjwAdi5b4VkNtMHwrCpbsTqqBqq29rtzxQaYSYGiDPXRQtdtrcDHkL3d2VntZm8wRz7DRT",
  "key32": "3kERmwit8HxvpPx2aPHmX5xXwM4isDNFSm342QLMBR1ninwd4czDnhRKkDrYwCF6HQJsZTHEqWMFiff1nQyqWeN6",
  "key33": "3Wsdscuo679Yz9Qmo3oUfu85ZYGL8rw3k2ZvmAb8yq1QKCBnF3CRHWjAthFfPyESSKS64qESbbXLKKuYYSx3REyc",
  "key34": "HF8Jowv1Fs34opHysKp3ADqMEvS186pm1SAyYSjZpawYg3Li1QemSgbZifzkCT6F3tEy6QeSNmWiB43Fg46GT8j",
  "key35": "2wNt3riJ8Nh2V1Kf6P57tXbusceU1eCG1dcU6xXGPF5P7i4TBCUfQETHzteMgQhbZP4EUg79wBpfV7DEsGVqYWTR",
  "key36": "4oTv98CGxZ9UrK5inkT241fatEUysPF8or9M7t8ge5kFzPRhD85net8FLQ1qVZSbEd3zFmFBoiFnZyzbydjZUtfA",
  "key37": "4yWpJHZwWNH9p7hxvC1BSrRWeZ7fQREydPSP8boU36u8zkZggNz4yAEKzQFzhhA5P6ksxPeRZb7G3yRiaoywmLZW",
  "key38": "62LP3UeeGLoPVbNfhiLuJXb47KGfp6RjJT9fEonknnEBJY2njzpXGJHA2MygkiNSPCPfVnFaqnpdL8kS9pZ7iCfK",
  "key39": "65EEGzTq3JvrH6fNi5sphCoDLTH5HJPgDe9BBFMrMVKbdDWsPEZPAzrhKuPwyAcRvnkZmGqDHNMSaN2fvuCAoV6G",
  "key40": "5nuPbVrLsDeYbJ1vbZuwMvMbf1mLK2wBHxgv9umvUhcL9MR1y4xywqeWxX19apRCYXxNPoovEpV4i2pZ67BDtUc8",
  "key41": "5xbRQeUDis1ZvcWZZ41WcbdqPHQbRjrj51SFmMoZDZLVkomsX7JEXu11L1a12osRrWc9K3TTrUQkdnZ2f5pRkgr2",
  "key42": "m3cXjgMUDXY9B6XWtegEVQFZ2MCfMznPvkjqTp7WDN3hRRpAiHbWR3WQeMVh7gfLq9HSy4Jy7A6xG5J1Mm5EzSd",
  "key43": "29JbLCyD5d4o8Z25TSm8Cj5voeqLP8fpGa3YfD1NoVg8oBkAtVG89ndFiGJPEhfWoTFg3npb3bnBZtTaokjrrqk6",
  "key44": "3ymiVmYyqgcehjuzqcuTNCFZ5rJxyhWR7Tbdk8qvxmugjjzCdZo2q9vvWDoEnSo6HW8HipU1Rb5cP6XGxS9bHfii",
  "key45": "dxuXyDRPEJ5ek7sFJDt3Brn6uSYfYeTRaKepF3PgSyABinZ7Rja51Ynb1zF3DNzMsqL7kF229cugYwb73sHjy2K"
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
