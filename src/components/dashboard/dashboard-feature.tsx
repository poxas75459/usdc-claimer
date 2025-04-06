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
    "5H6VNi2XD5ZtSUGgRdGrFwj7nj3pi33VDBKDWnsTbQ7qb97ncvMECpZef28mUkzah6CzisHm7fLQCKyTXPRaWHBk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qHaC6Q3pVoi8jB3KQtKCucnM3RevKBZaq3kcsuiwsBT8TayAU3LmbsY4A6QyQYmEtL7yyirSC8daRdvEQWWz1yQ",
  "key1": "2wqkBXFSWMoVLqUATj876cP5kYy54RyZvy9F91Nv3NX8NBdepn8c5x92j4FTAp4ijHxGRevk51n7we8kJEsZX72n",
  "key2": "2XxzQrEfEzeFWciHBry7GhtVa9XgFGxNs2PWKhwwXZ64VxqG77Gb4ocKM9RMcaRK6X1im24CQvKt66b1f9YGxFFS",
  "key3": "4HbxHtzes3vRrAVRLQbKjtCcsLB1AbGgk7soju7hWmTj68cJQ44jaC99m8o5S7y3ePakCQ2vngo7rJLpsf6YVE3g",
  "key4": "5gmksMchGSCxRR3prPrS3zeeUSuP4pyx9oCayzoCBanHyuv4Ui8J8Nf2mZYA9ZNtBTtmHBzfJ3Sb5t9RagzuRpEe",
  "key5": "3UaginigescXhmpfK5WYFR6sxChsvVdwqLfhGB47WbCBQJPFGjBJxvd8zdQekH16kMDdSgNS4MCXTYicdkdsfKLC",
  "key6": "3v1ASicxdkiVxuUYHGg81sq56RjRWRArkf7suMRC4HFZTgHYDaPCna32Neac5MFCmCBUQ9tPyLanqnLo1pWL9wqc",
  "key7": "5iKf2Xf9WZwhBtbB7ieftrBbSBt7v1iUo1KQKXyCSnsZtTXeyvtVoKRoajjk3zrtGCPUSeT11rUzGm6Se8hUoz8N",
  "key8": "4aGfwFxXAkWdjKmyUG4D5AJEh1DBvLdevD1K2GJVAA9QYPXqcdVVm32Ef83DgmbUYXdD5i4kseuDp4mhG3w9TdKc",
  "key9": "3uQSgqRgTCfEWFtCJ5Bhqs3euAfHJDu8bXyJtouJc1neYCK9wiMGET66BzTGKJjgoXRoWJcH7xtH89UDw9iU111U",
  "key10": "5uGMtnfMZNfPpFpu2RSNdGgqxA8EQBd1prDVE3PV2sHuLEF6WJWVPoBEGX2AnXEcuGRZbHkcMCpHwMoczrUB79aZ",
  "key11": "3mrX8nhyhMaAbw2SKphReoo5Pm3KGt7HjrZUAuexLdQXWKBxZciH5Cy2VcnkvpqYfuFTyQyw1FUv4SaX5car7nM2",
  "key12": "4dph27rGKnptzX3wsm7K1FAShhEJuCuhRs95todBbfJN7dXw38ShbGufoSR4DhNMdDR6mFbvfM5fJrsK3zEkitzM",
  "key13": "BXcjPcw9eZpbprMcBkteRQPPzCWJuvmJjWAqCEFZPUhmVWd1XWU7wiL7QE27JafN3stTX6zXQ8bwp3WZz7nZTh1",
  "key14": "5YbDiLPGmNPAJpSARM5scKZiTVvmfJhFeuyFvoUZ3gKGuLsZVwttBQbvxSW6cyLDWQuAwWdPXKWFyBMfMNWHiCbF",
  "key15": "4WfJFxin6uAZZffjXbn5EvPHWXGFzJMucGMcyUj5u6evqXc8WVmpTNfvzBKQikG9GhpAkoeLWUAhyLJZBY45nfWt",
  "key16": "XBcLVEf5esV9PW26p4zMAEJxPZdpF9Yk5RBbtoXwQfxobUBHd1x9ZNbKqxH5YwXXXaTCSMsGHHKTT6g9DQqLuZ8",
  "key17": "44jaHVN5VT8e52M2VeALbmwJGY3vNKyGhSWb7XvKdJPa1K5M31K8QVSMoUKMtDmQ8amU4jqPYBXeGAHWKLpT77GY",
  "key18": "xZaug8PMTT3x1xjB1zuXa5MhzzkRGVbVZXYZUaP9aiKXdRSK5deKfaZfxP4Z5PrLnqSS3kuaENXwzvdtnK7RsSY",
  "key19": "5XXHk8rkkqiuNrwCCvUWssGmRZZ7H6WoGTDsBiex4fM9TNa4MDwpw49Dyz1SubvpTJTmtjck5PXpZs1HegPshbJy",
  "key20": "6UQhK8AeNtr6wj5t8o1HnVTzvPQx3rGay2Xf9Ff4eYppnK73BkudtDYk6X9zWXHQ2d2XqSoTkpDp1j78TPQP81J",
  "key21": "f6cHoCx5mJDtp81DZP8pctnwYpmQVF9rim9B4GvJ5EFGJ6wNV9D4sKDYNxGaEf4qE6f5tqwumEmNcWwPzrf42Es",
  "key22": "26vSR5eVZcQqM22HrmmZzLu9NWvx4At8frC7GKLY1tUi6iHASkF1t3B9Y9dmgzXw9k25AHyc5MX7aJA4cXogZCvM",
  "key23": "CwiCnMx4L7ShEJXEfywQrtNckNpkNz9VtR1YQYBhsmykcN6uFFXechFjKR54WMwcs7QE1mUt5LcuEYQGwsXWTgM",
  "key24": "5MsFWjDQmmdiXymFfXBLXheFMKGoZaAGbvENt67S3RB8focoLTEonbkYbeVG7s8wZ2fdKxcLptocG6sTTppbKNdU",
  "key25": "2V5jufVnQee98NDX6y3NKwHXhW8V2jcd47QjfknaTMatP85Lc3ju3pfMU4gtsuD4UkhTdGwcBvhiZ9M1c56Zvwue",
  "key26": "TGRvhfEWWf48p8xrcmDdoYbAyKZNCceP6QBuWbg7FxFScaKVFvWyPKDPeacotBCxbjc1PbjLLKBXse357CZRfE2",
  "key27": "36Mui7PU6YymmqhShxFVnPujfCZxNjUCPtvjKqRGzgRvGbzrd4spdpYfMDHV34wc5zpTWaQRgmt2kccQRCWEK9m7",
  "key28": "64SZMWu88vKFaBYAgQCWb2pFR3CZTsL1vn13i9X33zkMxEZS1RR37EoXqaiUmHUcH7LRfLt9TuJViGKs9UbAi5P6",
  "key29": "2YsLbh24def9hKmGrFYfp7MeYghWngk2i3nh84gdY39smJCB8MNPfV37JRHEgSjPpJ4rPi93itR1EBqQngEWB85q",
  "key30": "4Ba3nsP6V8U8kVN5pDBRQ8EUZMejvrh5VTfayqDTy9nQ6ThHu6zJujTgfnohSw6SBSbDiPh5xizk8xEtsyehNuJq",
  "key31": "4YB5VpyFTPbJSygSzLNWjekyRABSmVraCBBTfNWGdvfm1bambfBLHJvnyHR3DQ7FFezZgdomvsHvSTTzEfCzH4Xu",
  "key32": "ukritgrzcV1y6hctcGkmzyzyDx2bbubTuPa9DC74YTAbbRwmpmbs5rCVVrXNYaq1SmckjL2V1NZLCpSjJxA2XYK",
  "key33": "WbtpMzVSTwSZCc2LhZ3Urnbgoms9xieLVsiUwxRtz7ARpszHASStDxs2mZZaYSsoYMXwe5Z8QtypbQBsFxYpsdo",
  "key34": "DUfxXCz4w1PLbhdQZsbZ4W2hDH2UFuJn3H28Yj69pXPRjHBEezr48oGBmNtZfiJHmt8tymYZt5LL6HhMxbfFmCb",
  "key35": "3qJybLhHDgpELNGJVwvUkbZrwJCUKUFks3X7wBFPxAgEgofooc23irw9md9JUtaZN3GoXRa3cwNFEQxgVvR3LCsy",
  "key36": "639xMXhSZcgCHzQrdzKQFWVAsiK5kqJ4YMHqAmLrYXqCtyFsjmZy5h57AFHJmzgtvprUwCqy92fiL7PNK4PS6TkM",
  "key37": "2bXoYctGFpf7b2MEvXEUSqjkLS8nYaxkpVT53R6oQejw1ttUXxTy8piBa1TkBbLoVtnZKPfctgusaw32ZeFqkQ35",
  "key38": "3Ma8brFoKvCSwLrDzhmWZahHEDrkQqkBgqpzgdajK3Aq7Kk6HE3FShq3fihS4amD4Y4QaKQwzhTneWSUrnmWhVug",
  "key39": "4cnw9nNXShSw8FWPoCbcnJRtCNyPgoyZPFWBPy5aGybS9hwpdqgZJMLLGdmrz55ZmMDbi3tkY8ur5oT3KeHctvBw",
  "key40": "5UgSMh1TTf57dBPkX4HRFauGeTSjCd4RA65v5Zrzm96Ln5VaD81KwMh6j86sVitaEerSD3tzJVTHw5srug2vLz8T",
  "key41": "4qgNz5Fu38KvKN4teBPUEP5eiDNXegvbTDY1WBzfMHmP47Hke83Yp6EXxrJH4ro2EKauwBRto7BFJN2b67rRVzKS",
  "key42": "MZ5yi9ikvWs54nuvdSB9iXj9ApsE8MuJRNof6ZZwFMt6BToaTCJ1nE2tyXsDmhHecjPNDtLCHdej7MBLybC312M",
  "key43": "gH7yNvU1WNZNyk1Q5nWK87KSc47jy3DgX83KF8m5rozo2zcoteuEkeFBeqmMixLv4EKRZrY7ehJharXwThqrVR5",
  "key44": "2LvBJC333JQRmQeeYoXdKYCoy2q5km6hzzP2GhH4bjndsQmMAWzWL3cSzKgs8F15ui9jtqvEHWri4hTQb4XBftiV",
  "key45": "6ZGYw5ARo7gM1HX2QyFh72vsC1F3BCKPWMitjUCBzbTayoaNYvpoM8mb3AbXTbEyUUxFkVHzEDDNAZ862GMFk4u",
  "key46": "4pe5AhPg73ojCsbPhkvLM3RSbfW4Jkm4L2JJEAy6UApaKRKFp2KzDzQeKJaSMaTCsQdgBQHqwAFzK7T1QooaJUrP",
  "key47": "3xZxAE979Zng84KJUrkc1DwwGou9sG3mykdiRm45mpK4WPs62RkyEey6JEuAowrjGY7D3NrZuxagWtpq5w5adLhL"
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
