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
    "5NMSrqP1WLyGPBAQ1mTXXmQHYmDUnMUZtB7d6TT6aE4RyBqiobwayHV4gVmSrFuGPz3atHNacanhHWKEhfV8LR8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fq6kcsVqxbzP5B1BjF7Y4NE9M2dhuRy5qgAHE6vQvb42rHmCWtbcRQaCEtuZWV3zYftmhEQRtboiFR3nJWFq8bZ",
  "key1": "5oYYchP32kHJHkFAEoxAAx1ZUFND3bwh37LTqLxeRmCyHtHQV6moGzUZBymuLeFQCxESPZ9oA9wZdSrVy9x4KkTy",
  "key2": "GEPCXN3R7ZXnoc8LF8KP7QNcULHAf4AhxPCyADbDwmtLWfo1NxLvZkYb7LxymcdBh1ZXaZ3zch2SfxuBgRKpv2F",
  "key3": "5Y8STjWyaFmYSCWtCG4puy3XSJNWLEbYABqqKzSbjP2HYrYBqSqom9uZekondhbZfxeMgvFdCKTHfV8ExaBg3ur5",
  "key4": "S3jLoXmpxonrWTphViGjHs4yDTRG22kN62Yuvy8JK5kATCbKTqw1aeSmPz8TvMyDJWkRPghjBefW97ZHtaRDZen",
  "key5": "HU13AqWxGxdbzo8ekmNKZ1w29Lv1123DAB9xQhcBtRy7cB5jnrwwApVJ5RH73sNya2KDbyUMnhTRRWMJxRz8kev",
  "key6": "2kYB4pYgPi7qU3o5DnzXDvTm9pybUEs3kPj5Bi4izSBJwLVCgAmj3Bogn6U6gNB949aLdTQiJJysV4qnayuw5rcB",
  "key7": "2yTNiNPkYefctyjvpfKoBbRNj2AU1kjDdmeE7YLRKGZZUnwnsC2MNEnfCY8rLginesQER2D2JxWhAy7VqP1j3589",
  "key8": "qYZScyQkeK5fRuQXoM3hqyK671fDnWkdF6Tjfu6s8oyT6xEmjJPjQ4Bx3u2Zp4DJNiZq7vyQEx4joz3nGkn1t8h",
  "key9": "3ntsM9xX2c3hm49kuSvje6WDQ4ZRKaNzWEE8465RbjfhtYZaUoTEN3UybMHFj6r8KurgXrEAZxfqcarzk3aqaV4d",
  "key10": "GenwecevMHeynRPiRknMRWs3F141feVXSGeYujrrJT1Xgh7x9F3Mzf5aizfBXdxizjEBraM9SiTRyxJJDMnox9e",
  "key11": "4AdKNiL5AEWqzd9MY1V54FHTtJwNZ5N7TUHXrhKhoo9rFS3PQ6bb2ncwz8GVvRfjikxFQ5DFnNiE64R9bnKCsPH1",
  "key12": "5hN2VQ2yB4a8HudNpEXwvYc5S3b3popPajzcL8mTFZW8dvfPnwfNEKoK92QEZWGqASEgCxRRm4TGnUo9yuGUSGuE",
  "key13": "5y6Rfduv8oCFZv29Vb1BoHsxLSyg9PP7oFYdvHZZ5AX9uTZQwxULvfdpZLd1uBvsdrjai2FhqVGeD1FWRCKGb5VM",
  "key14": "a6RmSPoHj71mMiYRopun3TWGF4mKg2tZP4tvbb3o9SbYcPxikJA1zFkdmsqJHkitH3Lyg94Jht8oNH6D3RXeWG2",
  "key15": "5KC4wCHngFJHTkDExdSQsgJQxWNndguifcShKa8SwpNyGavsXyUqg6btR2GeDWL1DxGfdYfn4MESdz5m8qUXs6FS",
  "key16": "2N3cXV7ogrXkP8EeFZgY1cNsdKdAa7mEtMSKNGGzBYnucZ8rP4dvhGgpUrgLxjqvkmyyRqPpHQbKMMMQwn9bYDYr",
  "key17": "5KyfHGEFKbB1jBqXSKCtSEpX7S4Bt49UCLF1gzNQqJvixGDN3BXDZGExxy5Tuww2ym4ghStQ8jNeJhoAV5vfNKNE",
  "key18": "64SzDUrZfyHEQGV3VKChSShDFxtBC2cYWW2xXk9BvYcbhGU3y4ERQFGjYtz76EKmATL6HfpNCSeB1FMAEnczb1ZL",
  "key19": "56K1kwdCVEzjfx6wGxz1WtzbTePDW7Ly1vo3uxJ5TKC6HJTBR68xKse9WRMYZo9nw4Bh1yvLcN7aNST3XJJxY9ua",
  "key20": "2SZpx4EarZmW5HziiDK2gcbiYA92KWgWsNbkJoveNCJSmnhkM1LSKcKWCFDDu8T8R28Wj4PegyLh6fHjEjU8izko",
  "key21": "59qhJtVsEoomq7FP9t7TsRsB9ZHZN4xXcj1Zhbx1TJ35HPiu63f6R8DEshcLjUkDz3RNxvH7z9wPJy6eCbNh4VSU",
  "key22": "5jSs2tpypB3WQe79y7xjHupib1z9TB5xjSkYsS3KmGbJqfrsHqMoEzHPLcsSrRtSJKhpKeWScK4pmrZ6DCRbbU4a",
  "key23": "wQUwoXC6cXY1sx1ASu3M18E2YYbcsRoYJcnjH3bvn5eqkSSH56w3aPFUf79NafmesqkXVHcWdQzPN5gpHjSndSr",
  "key24": "2PmJJvZSPwu9TzRsz6YfoJnQjbmCR3VKoStSSBeiiwpwYHXCtkoWN4Z47vCuiUNdaU66eeWkEHD4UYJZtPinZcoy",
  "key25": "44w6rHnesUWDkGsfGwy6uXayost6SgGmcmzPXdDV5nTCyPG1sGXuxJ4nQWNy7JTZkwkeiAUCLx384zvtXeK6fvRo",
  "key26": "5hojQzXrJeuLsmJVxuMBHdJVhdQnnznu3b7a4AY3SiPp9bzsGLNBzh9KfaRDXFaqrPUDvMYkUWm8tmjwLa7ptwmi",
  "key27": "hEkVbPVnPsjxuM66zbB9Nh4rqPSMUsf7zjab7MVmWZtxXo3JpF862Cgd7Q3UBqVTxdnfm1aGx2nE9NWrtm8Z9qU",
  "key28": "5gcUn6gr6JxdwXqTMu6yD1HG8r7fGnc6w7ZbXTLRKXwRs8D8vbhVShviJt3yCXAMDZjAs44DqXa2VnqPXWuWayT",
  "key29": "5mmnSaTD48GdFM4tPjJPv8i5GgsB18bhTs82fCg6tqiopY2F7aTcSUzZmEMinVTQDMt5eUnqaf9QZVhtyYNpk7WX",
  "key30": "4gn75scVcfUqdN5JbH8nMUeFPscwBtco1vmgJQhU8ZLXgyKVyMVdi17HWsR7maiuKvSHhpFu8kGAaQBEPwf1sG2J",
  "key31": "5yVr2UXuxkD4LAGd3CPEXJMaC4KhScvZsKQ7PTVfrAL5xCucmAz7fn3UjHj3ZN4yq7M87rcwGRRGWJtriPSj6sCX",
  "key32": "56H8Q1dbdS7cQdjRxHURD7QYEufPL1oj24APUkQQVCp3L26jJrPshH7BHT3z37KbyyrWWd9xwm9t5BNwqpGgGG7b",
  "key33": "3uk9nMQJNb39ubnN9GohWbVc3FFzjduaoca3nwj7pB6gxfSaSDrXb7HwfKXNYY2LtzBwgUSF4zKKVwCS7SfrBicc",
  "key34": "vYPmVqUq1krnPDEQQYfuvyazxPRtk9rwDxAXpHv8VWgUm6vL6EXSHAjcirHGLxh6psaJF7Wr4V22Pwd2twKVUHo",
  "key35": "2aQ7iKmjTuoysSnHAJcWrsBM6ovRhBmH1qhWAEL6JWcGDDQr7LZWovFKxVnDTj8YJ8pCs347ys2GFYXjAvUhpdBR",
  "key36": "4YBXyTcovBi1FinGmBFjeuyUCWk4eVvfCZcux6ASPEmC6CjtMa8mn61GuGEgvA6UNofiHNvWCuexLc1TfXHVfxKF",
  "key37": "2Fnfbv2GD2EQycgjSHsgxLSta39XM5UMpKt698EBiPJ2YT279EHjBwyoLfL3QeK2JS6BhGFG8Axcb7XKHjUkxBVR",
  "key38": "1NR1Kv7BekScwLpWJZKEtCddjFq3oEEmRqKhHQrmwLorWNausaamdioX6DmSPiTHChtNBv5DwEvYUeenGy7c4d5",
  "key39": "61jMFcNDq5WBx7ZsqRPho7Mp7hiQn3D4QV7Jqkurxbr5DHwqwbQTgcSLNMq86ink911SPxSwfnCeJoDuLf2WscRN",
  "key40": "4su2EcrQnN3pixqGoCo6qZ7XjAudWyjyLekvxTWNpTjtfGnTJWR8wdT5sHapxZ6GVcCmbMVC8eMkgGmJHgPRsmWJ",
  "key41": "52jpBnKbwcYL9D25Nn7uBaV292iwJ5TJhxUh11tqmEt263NpDeTYLBRCAUdGCKjiocWggnjnWYhJMGiRhZppaf2U",
  "key42": "5bsB66J8ejK2w9G6cDxwLNLreDJApYndDmHmxZY5n3K1hz3H2zkTAWGdwAgnswSmCayYG3RtD6wEPU38LuWLQfe",
  "key43": "467EtUtzsBfWt7ogfdymqdDpRcdm44gRM4zZgwv7iPHKnbJQmA2LdMcjPrfh2VFjYghaDMSHZ67e9B7uLbTSQTRF",
  "key44": "423CeRCxJX6MEVrTKSXGp1mqdQr2t3DFSa1aNKDWdkaXJdsqCMXTRpHwnaVgs1SmqEBRVVCwszx358WT8fSjHS5x",
  "key45": "XrKfmcVJsKqMoLaf8nysXNRJXUiRQsp48b2wCtSWyeiGpEf6BKiGwFsDiGdkrAtPXE6ZpRmaLrTmAP8KkvzsJuX"
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
