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
    "5TcJmAyxS8rFiUg6MAsDJGRXUPELRx12SdjonboZ7BY7J7UhBUAmTA1p4HSSwtqH954e3dVBDr9KFK6NigB9JXnr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3puH4HMYxBdqVLjuJEQU5wzFYgr3WzNQjSSEXogArP1VFxw7gtewz6mUz7MmD9CaaEbntn5x2jmciFLnLimyBFtx",
  "key1": "mWwgfoxaxNiVAxj9ByrP5DrGzJ64f7FLKHVV4v42MyfujaLFGugzmutBwg5nANZJpj69vGaUZvdbq4guxVtzBpb",
  "key2": "xW9xrBQDgYerh8ns11meB9jUsuwjBNq7yG85QuyawqMe1ABuUW62PSq12ZNAvVURSZmUJQQ4RNM2VxpPHTqSKsE",
  "key3": "5Yq4SRU2Hdnp7uXmLnxfFnPM7ME6hTCUZcAggC3DM5ddtt6cwixjc5gP5D8V9kUXGMVZarfYjTnsryJ6hNXEPD7Q",
  "key4": "3sikkffMvjMwXUQErtfpky1cgrD6aQrnqARLzws9gwDtpb4VRRhY4j3byiDUDzEAsa7PzbTKYuESUtjCGEdHq5EF",
  "key5": "2EFgN8dm781hJNeUsqnwBqVvuorknynmpjU2nyyYeJRfFSkrSDQ64CL1PBxnTogea1nJ2fMco9tCnGsdzgcUJuLA",
  "key6": "EFnswNnHWkn8Fs4YVANRZi2QVved1NZ3LtKVrnpG2uEExjo4ut6fWRxvZDiTu4oUcsntEa7cDJXckP2LZv5ywuj",
  "key7": "3HX7FNi8GYvcCc4sdQA7BrLgC7zJbkv8Tf2tW4G25FaZ6VxMXdoiN7kmyjYfUowVEYPf3XGaVaQ7Wi1j8McS1gp9",
  "key8": "2E1fDMb1NR54iWZhbvzmwCaL7tVryz1FaRYgnbWx9PHsC1rJiJ9hJkRVVqzg3T4iLvS9ZQ7jeyoxqUADFgcug6aF",
  "key9": "mnSiciaGdJQ5KB7RzedcAntPrRA3ynBBrtaQrosV22PD9XBMJSfuFpRPsy3gCPe83Q9hLNutVjn3y9XawBcLVPD",
  "key10": "5B9V9CCcF7MSX31aEfYntzi5KQPfWXg9eS9KKMLk526MMM8QzqGPUPgbsuFj8Aq9LJK7qsmvYLgM3GTySg6v7SZH",
  "key11": "fC3Zvh5xuMoMXt2qzRQLJDrviqNrGpizzBajdHJq79weELkkqwfkjUZU871yfSu8iTcgp3CwYPGcZwTqi2eQ3Me",
  "key12": "123Qa7M1vjmT6Lz9H3Nc7PKr7dvs96KysvGW2Z7frKLDVSwVe6auSqZW5SJyz5ToGNJ5RRkENRpr8WnG8Kki1e9f",
  "key13": "2swDNDXSEpKVSoY1p7aR2F5s3pCoSMoiYe93yCZF1diVgEZiZSTfMHL5GYJV99a2yJdzwtZU9gFXepKJPj2dzvMU",
  "key14": "5Ai4on6E2QKPvjuKeVnyZBmxRihaRzdzyZw5ChHDHje5ZrBACueRtHsmJDJ5FkBSFodBf1rPAyEtaE9dNwnKzLsh",
  "key15": "twvwVugWJrQZoBWno6zGxkPx9DZZgaf7FbMSNFc9t3TmpGkmkUsPgsiZw549HxPVCndqCny7yMBKBP8rzkGFa3k",
  "key16": "1UjaeLFnaaFySdC5hRseWs2tGew5zNndmZcM67oQ5Ub4J2AC5KgJ5E5mrCvWWdDdTQNDaBAPu67LaHbaufz2oiv",
  "key17": "Uamu8otxhKcRoCuGBnQPuG7RHQ3fsBpoXkkEb44e69BELEX4YpkwpiYuvSEmoDL7AHXx73oWZaJx1wQefSGtQ8x",
  "key18": "HNE5peKWZDPyH2n9kGUUEMUe3LL1Nhtd7hnt9mBWs5i4mkFNqLNKdo8yswq7FEJwt2PVxerRAdaHRgGFb21XL93",
  "key19": "ziHHrjnGkV2mGgU674RTJXXSiZd8fkDFa5hJV6PNASpfPU3GE1WJWyVYWofgDQL8QAf8QKemvjjfPUCuE7RNHJj",
  "key20": "3RbvpiDxr7AmjiykqzettKNhg4aCfKqK3dmRaXATdY1Gjo8CTU6S83HPLyPBs2Qa5aqLR3zg7NjU5mLp3uP55AQm",
  "key21": "2CmGsutsbRai5hj53bLWdHxjeBgT1DCQejP6gcpWyCmrEgoYX6T5jkoCBeeemBaX2R9McqLMPDnUmHUkLDJe7t3y",
  "key22": "4zh8PZmtXWpfHkCMWspUYZ8gEuw2tsxPYFAsy59c3YcoRG4EtXYNnfat1iSVYMNgotUg4FxEM6xKrdqhREKpQcMj",
  "key23": "3m6aXBaDYW1HtuuRSLWBuPpPwEX7LbhtY7m8XiEgUUcorCZErKHszREgSNVd4UqC3vsddSUvbceZDHKV98fay1GM",
  "key24": "2MuWyTEj228XqwTZcq5aXk8o7XPKRAUWpSX8E3u7XwPgayPkk6nGWmaeeTFGdSxndK42mwrF5L42zR9aEP6nc7tw",
  "key25": "pRtwNwS9YQmEJXmVTmsoih7FcgsNk4oipMUZcyzgSA1EWDrJd84VYSV89Nbkbd6ASarichkeXxAvxFrUVnfiYki",
  "key26": "26kqh3yLF3oPdCNfPxzSH4gDfSKt2cwSf6mPihPWsUhfvKcpdQkJLew2ihoB3QN2Wex7wzWs6DHf5i1M6Ynz5uuB",
  "key27": "5YaAHDuT9SXVaQGseViesHm3g2L5q9AqvRhf2n4s5qX1fZWBqRZ3eAVEDaMa9dmn14j2PdL9J17js3w7rSTYxdPQ",
  "key28": "jVsiUMZbrvHcrGp9Xk4UGjWZAv1JmYMWJxHQcyNdzMrctqtQjaUjmUAqM6qQYUojJSnzP7YD3k1PE2HfWq5vGX5",
  "key29": "4YD9szMcDCdF6o3MFCyHfznVwTdWW1JgmUgNswVvqYNph2pb65PNrS83KqqW9CsR9CZDmBYfudSPB4XekUkMkPFn",
  "key30": "29TFT5dpS5ZyBcgF9oXihEdVFk9L1zFtPrDA3ztTRx63KxAqDdRtDgaiA4wKEtx97ZovEgYZZzHAXSAnZC17F61V",
  "key31": "5kWPjPoZMo96WayTMzF2wBM2tUboR6A6bx2VqwE9RD2HESEdsNwGNM7k6oKaBvzYj6YW4E6JJvSS2evYWsQQ2cx9",
  "key32": "3neKBjYL65hjhLdKLUiNK8Ffr7y4K4CJKMdvXHK1ieWqyYVG13aBwC8U7cutR4CNQ2HppVFWqgEdZbFL6GCn2S1Z",
  "key33": "4QUFEHWL8MfqnTvVYNeM7avc9smjEkpA7pPauH1qCPsbyTg8XHojWtdLtjJCTra5kuduNmaPLuL7vs2BA111VrAV",
  "key34": "2Arzt8vkTi1RWweYfrjcd1Wbu2GtgnMtQAkv7bCWeW2uMz2VmCFLSWkeev8FsSL2WcwtZUZA62dCafgk9rLmBf5Z",
  "key35": "5dRqet1cJEMi1Z7srNnzw9T6dW9rJEdmb7v4Vj5ZNEgCa4NAyiZi1R368o8baHDeqErNfbFfBMDAAQtuD1wMZF76",
  "key36": "4Lsa7tHEJyNchn4Lx729s55eJYt65x6ZhLTMbG46wE9iBAKCSvbPkvvDV5QL66sE8TxrymnpJLqi1xCUCtAW8t1N",
  "key37": "4rfBcwWSkPnuuDqWL3ype8WWzMKSSLoeHRd9tPqFSncdEPFK7mqmoE3cYKzpQdr238uzK6FBkaReVWesAPqrEoqF",
  "key38": "v2im9PmC16iZGghEmDuSU1xEA5funxfHiXhRBmaJLNLMfP7YBTrsJa6syKWSTX4TEU5bucxw6poF4k5hRZ5Vs2i",
  "key39": "2DM93xkqDKuGVhyYgCn8QpBCYfff6guGthXZcUNU2h6KZCQMAG7oFz65tvcLxvwvTV37xMigTwPdcRKAKRkfMJCR",
  "key40": "B9N5dQinVWGyWerMmjz1GuECUMtwEASYzbH9j6DvabNHFNR54eaa8bjgCBf9Sri5ASsvPd5df72DJsCZ2henLKh",
  "key41": "2Rn8PRSeV63KNzLY4MBJ1SDPvLxB68jq7ctojEzDcasSpyUatDhfZ6CXhH88H9UKhM9cGk7kBjyntL2ktu1mUWjK",
  "key42": "2T2x7EhohGmJePs7yG5UnYgXxzYH6LgHM1Dedn3szG9NsT1gZNuzAi8FygFHxTxXdBs1TDxcskzsNFV3JMnoYA5T",
  "key43": "DrnSoUg7TryiQA3BD6mWLYNeMN9zEEcm2QdrJ18tg5BnRCDopdeASVmD3m9Ecp5zim7o9gR7Z1E3nuhmAYHj9tX"
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
