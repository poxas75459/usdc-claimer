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
    "NNr6SrfyeZkKK5eBJXjUnzX3jQ2RRYPwGBeAwyrLzKvuh5CSLRpZo72sgbti35wrUYCnnMzeHcHuFre9W6nkAsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jqizkp4KWBWS82Cyza5CgZbxgNXFS64Pvp8GfTSVYUQ4BPVC9chijD8Rvu97C8vzpXxaYdXXYNYcNHfNqaiPVw",
  "key1": "eEQgVWnjUGV22BPoQKH56z8CvxQhUL4tCQKVZ62bC9vpBgZpeyxpGTQEqtAVPsoHrRUPhAUddrKZkJmnuJYdSGk",
  "key2": "2UGbiDdjQ6JtqhZrctLmUjDkm4FqJA25TY8Z4ynbPuaNb86gZRFSb1HkZy7CZDEeg1KxvVFGBWedMM97Xj9U8eVx",
  "key3": "2PiJSWHVSuaYNWZXCd1bo9Pyru1DxDrJ1C3LGiaA3tVZFTH3hWenUAwf915oqi1bvWsNx6WYRtp671NKV2HqWmiU",
  "key4": "4VGTvDjvGELhS1UtVYyzj9UkgmnoFtSNModZ8XBKMduocN3F1L264tsgXrmkKZ9bdSoCfiNqiLNvf4vSq4dPqUyS",
  "key5": "ExpcpmM43WKcYoqkTjCxnWMKRAWdwSXxadhHmaDW5MrW63wS5YnbMKj241cDZWqCuVJg8fMVEK1yiU16eP66Ki5",
  "key6": "53kw4jmLRh9YMCVswBzbfgTb2a8yxM8jVsoV1wnhDt2YKjgD3FLtNssYQxDMkf21sWqVnD7p8CyT1HjjrAkdLaY6",
  "key7": "3wVf6Xk2AKHhw7gwcxybR43CGkr8eUod5yxX3uasb3FwiwkDpPGJuxq2bCVed5JSgBYhJeCHJVT8Ap3zguTNanwz",
  "key8": "58XJ1JRPqugPAtDjkfXVtnu9DLjxhTs7sZRWWaB3Z7PQJQcWFEAM74BWCYHSXRaxtXhT6Uu1U8D44BeXXccFy5BU",
  "key9": "43hzaum7HwDARb3cnNA2kPRWRXhAXWuFu3fxh8yyNqde42DihsPfT2zJPLriGjRw47Tw9NjsnNSHruFJPWqjd5tk",
  "key10": "2shP9Pm4V3ni1jtm5XKBhTeWQ3UUncgeVdLWYY3A2JiAtV9sJeDn5TsWUkA9GUyKLfN9UQAHFF7sgHj4mgmru2Cp",
  "key11": "h6hYuD51cJkvFvxhVNUqX9KAog8GATwt1NpXEnzd22yVKxKMgoBfFUZHgLDtYbf6WCcx5mBuXLQKfF58Kfwmhkk",
  "key12": "3ry3fBBnXuccyYrEDJX1zZsZqBTk5aJdk4XEvG9B7ZW4E4NyZ4AW84M2nT7yWEqJ11gc4Yb6XQU7F6wxMDXsGPpE",
  "key13": "58VvpccZ6E6dTRrCcyN64AbWh295RvRrxNiQihVrhcao5vArFXM6t9sYWxrLra8uy6hkXU9wn7ktoXFyUzVRyPAt",
  "key14": "5a7uqpA13DEP1PnkBnvAwsg2M99QEfk5fouFzqRPA2A2sNa8aStbvcd4Uza7NrBPphWhmCsY5V3svBn8aMyc1F5Y",
  "key15": "5b8KvntSYkHahkwJeKyaENZp6na2N53U2P946rZUgL4D8KYmnKh3g52yWs8a274RYqhecMfvQCYVwpEE2bKTyap5",
  "key16": "2DSYuqBKWLTrhY3xkjdzDPLfAU3jPHa2Tfxypp4PXtqr4FFC5kfqbB3jBBEsqCxMTbUzo4FBDegHQZa7UNgBuQNA",
  "key17": "4QLcfwGH3ZwrZihp9FmBvydEsoXPeUM2MkWmVMDr7sYhpNzPydj4cdrT7gw2SWoPv8Vpdk6VtL1ZyhaZZar8Twm9",
  "key18": "o8VDxdLin7Gi5SG5uvz3nr4wVy6TLZfysYUn4996HN1Q3iM3nDNtcL8x55RzVDiCKFPjoi9YP1FG4DuBefve4Wz",
  "key19": "U5bsp4UA863TJFJaqQXzyGNSu8GgAdbAQFrPS9HMV7RiC5iKwZp38CXFP2DjdBtWST82vP55v8RAMFWDBjpZm6j",
  "key20": "2v3SyVi9ouDVNV4Ueftvc1FLqCDVQRLd2wgXtFibZz5wJPPTLKNYYYRHhDBEQub9vB6ckSHkbmdwgvnmAG8vw5o",
  "key21": "2rFwJRXXqC91AmV9zXY7NqqRDnWChDuHBeyxoijz1fxQw5q3dNGANNe16yy2ojWAhz71qHx2TcAfMLsYFXrJGsF9",
  "key22": "UVnanhT2yNakSpbLGXGjGMKo47tzBfQMEc1WowEJXTyovw88wuAejhHnE7Wf4bNBdwmr26QPVv5pCMg9sEogLba",
  "key23": "57rtTQcnRopH8EwW3CLrPC6nRFBX5MyZWsn53h1QCtxLZz4b7Ep77ysfyVC5Ep9RErSjoTMR7ED2RD6U7tjZv1PD",
  "key24": "2sRhyrcSYrwKoLdwKbgm1vVjYy95JNYBHB8ctiaofjWXTuF36vVffuudqXpZ6c1B2MU8Lsi8x6qVGDvsqAJWPiks",
  "key25": "2ythWoN8vcpxvnNtVu3uTT5oHFcew6u46ueincZb3GxfCY9XFkaU9WbyQ8ud8AYbzoHuwYs8uLm8TDBGuA6WTCT7",
  "key26": "3RHWuGy3yda4oebjhx4aktFjhH5n1mUEcMdUYjMr9mRr98x7UCBUDu2TaumdgHws4gDKFJxRUein4k6d7RR29wAc",
  "key27": "61H7x9gmz8wSD6K2k12kbNMBHgK918FZFmvbhSpCx9a3YhiCYEVqopk5hA5s8UgD3uUtgjPCeP6jkRC7FuZWLh3f",
  "key28": "3JKkH8WsDQaPsQE9sRVXENsssdZ9TLcNU6qSiNHgoEETdWgqFerMrs3nDV9cachEGVmprCQ5BDukmTZySTGLF4nF",
  "key29": "26YrQNmsfGLEvn328iP577jeXNwsGJhSfQvLfYB14fuK6qBby6xikvqvRmwnFMgKoDenWz1z8XjQaacUbH2D4quU",
  "key30": "2N9jJafEfLKwpF3yYpzZeHktgGiozhCrDh4Qv5t1QLR3innB64GFFE29YKjmpfARZzmLjr9yVzp5gNYxvRPZUESL",
  "key31": "BgwySCEVk4vojXDa3mmyUj7ckCj5DP4HGUJWGtDQBz3titZNmZ4oiNV61GXkNSpMhZmuXoCLBuYaj9D3wSVvhKP",
  "key32": "3NBTpWDkBBBMq1dxGBxg1rZ3P22gWJFzVUv68g2F3U2f5hfyXNxeDLSg54WLEG2H8bBHdsNphXmNnLG9e8pYoMFE",
  "key33": "3uJHFRLzMvVL25UwkiYBT1Kmd4Kvb9cb5fKY2gwvdXWZcbBtCJeAMaJgVxCUorvoDDpXDCT9HP9dDhizhMDjLrw",
  "key34": "LBbiJbLF8KSzushUtk8VXMLbb5Ufm7Pi5kFTQFyBLFLm4s1pK4QuaqUEGoAtMEZbr989qrAY8EJZYH9bHyxDwts",
  "key35": "BhLHpRh7LFfEDzKKcWPAvj6VM4S5P2KrR3sX6uAvCqTcTcuHopQfEq7aTGhLP6CPxKcoB6ZsMrWGbMeo6sp8Zxs",
  "key36": "4vU6gXhqQXBPH2JhXGm4wrjpxiTAWp9aHr6tj9VJPYdmhMiRatczBF66VgWcT7ngZ9izcVMCNqVqVgbv1thfkjmc",
  "key37": "2SBpeYNqH5cQQcBkF96jEJNZ6xFX1DxPdERtu33tykwunmMab6T8z8VHjV6BoBcvvd9nnQ7JvGRXuUkrgPg1vJ8q",
  "key38": "LE4D3Rkg2xgUsR2WdQ5XbkYZRRY1r82CmhkJb8cMJm4wawpv7cHcgAswgKKDSiGf7VL2UYGMAen67H3b7vVnpuW",
  "key39": "121yUq35TQqGQxD8PwLjnxLtMKoLeWJjtVmgDmsd7m1PNziVfmH4v17ufZGZUpKGXBhv1upuG2TxtBzeaYHfhCDw"
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
