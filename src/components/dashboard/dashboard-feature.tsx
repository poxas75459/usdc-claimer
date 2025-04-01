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
    "tRoaFFSwMFiPnGBwYKCKHXxW9CLScTmcsbVuvkuHYbhJ8eUdJH5Rq8HLYAYGDBCkG8rh4NAJ5MUWWsqLp1yiM8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UkiBrZpW31LVA7SJc1X5BLQXJXRy49ADWBVQyRSyupLYMCL4ugw6YeGtGgPLr8eueDakfuq9v2X124wuA2em9hB",
  "key1": "3yhjjd9FRUCRX5Xvm4epdTPx9o4UsSexbKyhrzBNdLzr2GB1WXwAkdkc6HToVDJtKxmYLLfFW5UMx1tZ2d9oCp5R",
  "key2": "4Ax3X4ReHfGQVEhd3e71DPvgEXtP3G2kCLuvPw3mGCuLVBzSHEPHuCEd6cDxKzFbzYPihrwfz1brZbjQGjs8bMdz",
  "key3": "3czo7qnJcxAPUfR4sFdbwEmMPuGC4Us7Kymce7WCX6PJzx7p2XMdUG9UoEGFPMGk2yWgrQUsPUhj1DENncWKfvsk",
  "key4": "5666jqUsbVBqwP9y3gjBjofJNq9V4SqHnCQp1iyqv2iY9hZXekzfsZJKTEBVM7AgxokzoXRk2BtJx24JtjpWPXXb",
  "key5": "3M86m32uovBwYAFjg53nrmpPUrPinibspA6fYTJ4pmM9AU6LQfPWy59XJn9p9Uvjxf9BjV1SaEJ5csYbdj6CCRsc",
  "key6": "JFoLCAWZdEJXgxbYwhfgVkVioPdgSg7Tc3FwzVxb8AxLfQhqozBmq9q5y7bh5zmDmVV9q1BAFbntrvkv6ULPHzB",
  "key7": "5WMGhosTSYVEja7AwPoZN86SwvEeRLLAydMD1ZdkYxaAYDvVDHvELH6CXAVJdgY31UZWoN69mPHhLCYXWBXKygEH",
  "key8": "4NknbKNwFCJiNe92xTLZxS6WHcN27YT8y6xf38NhNq5xL25ZNHHS45EooLTDGk3eio4z1Huzot9sdN82cTqanpju",
  "key9": "28xuRqvH465sBpF5gPf4w4z6S5BDWYvfLxPkeXZdxbTKFjAZuPDatvif6UQwswnUi5SKZ4o9ssJw6gCFJrLA9nqs",
  "key10": "29EXDdKWRknwdVxuDXkhgXxcANzk64a7NK2Whu5YZoHdqyprfFMNztivj7ChC4YijJJYjBobLtC37UkFstjie738",
  "key11": "4MEEAFDvEDJTTsbeERFs18xLrWcXQCX6LvDn2vvbknxkSPr6gv7qESCdqsgNiUSWbsRvA32tZNegCghuuyGaXcSH",
  "key12": "5uezo1TXySQy5A4jiUp4ZLXT1QsSNicnG5w4KGaWJRDUkeqexqZ9oKqXEEFXUvdk55Zmjxzr3Vs6y4g8QyULzz6W",
  "key13": "3TfiwxHWrRtKP13PsdqqwyavFto4RWZSWTDCAZsWUs5Ja4ATJz4jScCw5594c8KwBZn6fdwNHNjdYnajXFzZrSxw",
  "key14": "DfCj1rz7qbTdU2q8k292uW7EZ2wKjvUt83Dau1aPMDgtSvQ33PXRP9iKi3kkxztoKSDrUjHP47kU7HFF4rpvwfA",
  "key15": "2i9jiSuNV5zo1vyYDmXd9rsmGiQ61ipiTk3uGFVZfQcznstZVeAtAMEMa7P7A5UxsUrNSAEaqPeVHY8eUwU2krTF",
  "key16": "shtnPq7hgkFyZ3fR2ZU28M6Nn5x3VK4hDN4KrHkggAV6Mo6cnYwySLn3hZkbDqtXy446TBN59GhzT5unMNJQHxF",
  "key17": "5n1cH6eSXZvoY24g1ui9vXjXcHgtxjvGM3wodQ6YUvvh4iH3ZxxgTpFi5CNFtXdsfjDuRyFL5LNekUrLCBusk7tA",
  "key18": "CmQMX9ma2uZzxh2e4PPF7G8tHq5mtVm3VXcfofe8tCq2tCwtVW51BiDbRFAbpNXXKwUufuav8FWnKojag4SQHKM",
  "key19": "4uzjdv3oYdTXeDdQew4iY8kDyVMhLM9xcRu9pyiXXT6Q9HUe1DR5rcqphRyDbNHAYvXqD4SF8EkqcmPCjGz8QvKt",
  "key20": "2tTocbAqQ9a5F6SGcFwuBVeR3CjjqcJ6is68oziM9ufuQYY6quVuFk7oJGS57xod6DyEVcqZ8kdknhafnK3TysKY",
  "key21": "2FRAox4WQxj2DR5kC8hn3vgQPbyyjUy51Hr2fy3yWvpf14ehdVT3rhLF4nDeY4PbKojZkC7ikX32dXethAmKgx4E",
  "key22": "4nqJLe5QhPnzBeBC4fj3Z7wSLwCXB6vJ3amVreAvBTZnDBBThHdCGMN5tn8vQsKyWRe5LDvVmEqgyugcLyRwKi67",
  "key23": "3AnKNyJ8THhinTRbE9Bx2d5PgtMYxfrrhWuEYNDw6bNtBAayqqCLCJ37unH7YETZm9gubSQrkNh2j6Qrza5UWX4J",
  "key24": "GLieAGhF4xah9aWEPQxRUHbqwsJMw4kn53UWFH4YSiazFmYS6713DBA9os5t1e6WcuBr72iypnuJN3Vuh2JG57e",
  "key25": "7FLKjPqT1zLjYiQPMd75rXETBcFBscrzV8TpZ6HU4iPpw4oZSDHg6GzjvsBGxAzYXB7NLFKiX1RzpB2fTScAoha",
  "key26": "5BJsqW5yabQh6PfiR24frtmTBeFNFwEYnoxNAAR5cWTiJUPbQnSVjfTYvrK62EzMZ77QtjVMDLm5mBrujUpbN9pk",
  "key27": "4E1NvBTimDTDT7GaBicyWeVWTNDwvx3yb9ojckdupBUUE8SM49RdgpeP9sHeFLfoSRQE8JzcnoNa2D2D3Y73dJyj",
  "key28": "Tk4BgAWk6wzujKX25wp2npBM9NSBBQCsPgAftYFSEKQKrWRz3C6iVXMnoc2Lwe2ihPvLZUkhoGi7xrD7yzh2QnH",
  "key29": "GnDq3Vk5CV6EZ6ZNMvbZGiFEEFmwAB4eTb3yWwcLk4qbqyoiBDssqcsmWK6KD47RbuLMtxsjvDs3bRfQAgrnzwM",
  "key30": "2c8AHoVyMvsmD33E3UnrFirpmfsLDCDBCaNXencj5ZNBgKQJeFBPeeZ7yLYLCCSQpP6DWHL2ShYtFAuv1Wgo2Au7",
  "key31": "5aLLUSKtJttx75XrSSSD1icLZEZwmZjWus2d3XgHiwW43hMnmUZvFK4pQn6LWdJyzU5qxs81uTyWETBe4Rfs1j6c",
  "key32": "5EATeeXoscAWKdX7soPGzGtHPWV7nPZjSiUMS6dM2aLdoKK64iZg9eaM967yNJMEtEr687SWWsDtnf8UkX2kof1e",
  "key33": "51NnhzW2R3LYLA5v4bxcLeRffWXq2EEQNn68in914yiDbkQaD69ZQpV2nKFxARQFuNd1XrD1MUX3Lv4F7Xf5fcFQ",
  "key34": "cCk8tWWZ8qgdQhdJHfzX4Dxr6NECWZ6eAVbsyErsPKituH8XjrsAjvZwJG6RPByvkfGty71dXKKiTyJYGtub1bG",
  "key35": "5znXsap2wiCjtarLFFN7omMSLWX4FBMuReyWvNCubicGx5TT6ghykRuKYyMvJSJqFaJR9WFG2KamgqsVpDVasZXK",
  "key36": "2JPf76BdEaAKzUzZKbNsMjfMA6ibuVobKd6YWqnmbXUbun3s9TyuGn8Az9xqBbTRLbgSrJUYGAB52Y6XArfFYjzT",
  "key37": "5EDrdMhMRAT4pfTpYzJ1hzEtwfL1XYE4rpsewq6bf56kVn6c3iPN98Wm8JqruYJaVLfkFC2dVYRuLnJkEjQBFMdn",
  "key38": "86hy5mCtQA7Np3pyKNDiQDA3ZNQuzdgFbNcWcJtqSm2Vu9j8nhBtphHVM5ApHWySgqj4ow43deNcgnRiGw9rHs8",
  "key39": "TJD72BDaXgXZENA9A3Y3VgGC5V82mjLMfbKgJq7WBgbBcJeBU8dJpWYjfciFUbY6ofSqsij52GKHRE7xxdpgpiR",
  "key40": "pz51ARmybFoZvj9uqATKmkANZygx8pkz4Ww2HVqcY5RQFME8eLbHH3wr4pMFYNcN9gyS8zLxRyrxvcW2aYMNLoG",
  "key41": "4Xaj8scv2Aan6ZJn9CLp3RA35bMPkJNRuVehDQwKmN5eSNCKdnFgN4dmG1CCczS7UyLVbELYJKAzSTVsV7Z8hkLF",
  "key42": "28h222dtpqqGx7fZf7ecdNsRd7NRjJvXH1Kxyi4taV7cs2RJnCW1C9MmgU4mtnqZyCs9kW9xiDMn8cLVJNVaLTPH"
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
