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
    "67LFjbtyFakMAX7rKuKyvPhsMk7f7QKJBV1nBbg9nzHTkxQz7qz2CE12UxMezMhcZcbebjRgFmRUrkb1xQT6RGWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DtQnRwroytyDpRPUxg5sWrtsBmAQC2Qf5tcu58E3oZ8XzvY5gcXPUfRowp6cmzzpK27ZTZCk1RqsPibzVKEqSun",
  "key1": "4Pa9GxD7PpuUUH9LBsV2ugYjqxf79JPcXMqk8jr5TwQ7qMuTqdUY22aRtLKo7bpRDo397twea6DXJsEwYe1REbTy",
  "key2": "2jrFdHarLRdio5hPVzRFfxgA1a7wBB4XU84jkgErkM1TY1KLEuh6rxAuaNbzmPcyeDSXrDZQc18BDZFdSJkFfXqi",
  "key3": "G3kuibvNtuCWnvZAtLz8KbQcQHBHSyPRtLWdofwxprBLp9NPG24aaiKKRXH9oygLbopEYDh2avHCyCrYJji8FJb",
  "key4": "vZNb37gd6JUGJy2cL8wVAZbzHYT3YSfX3UotrBotpKoU9BzoWtqCqQ2b79T7UtUrGGRP6TqakDPk5op1gfzqpkV",
  "key5": "5867CoMvcB2qP6GbJmpPxR3VqQg48Tz21ewnJHzbeGsH7kpZaHsfgjaTw4yonAHkXdZffxgs2PvvTjWXyeCp384W",
  "key6": "3xseMiTRGnhKCe7NAPivLLkNF251nKzxEuhqZH7zCSNTS8rTGHwR1qW3b6ipFw6K5CVvuDMvLJD4uLzSrRek6jZf",
  "key7": "32vDTizuAFj6xcaEcwKKcRsPKEoQfzrqa7BVNAyvKPo7f1qCUbQvzjHdxyyUNgZcXt3N5WzBk2WSzsnj6cNks59A",
  "key8": "5pCeikAuhrugYPyiyd8Hn9Zkf1oXiWBpSxEVbHREMT3Q46r3CoA2eWxHkgafFyLkdpUT42YfKJfRordQHifS2vwG",
  "key9": "5KVQKAHKZhtMGM2VuJMC6fYDfqd7nnma9QPR9towyndrULREfZpRhxpyi817HvrzFctFycPp1eNDnVYWJPEe6XKk",
  "key10": "5SRtSZ251sPQ2bafRjuAZ32fVbnuceECjgEp4Bu4katnFqYLUFTiRn9DaVu5GyrfRQ5nkbNyp9Xz8pdf9ny7kA9y",
  "key11": "wV7AYcy36DFaRoaEV3Co6A4xddXzUAdL1C4VgrYJfeViJo4dzKqAaksPzpLQ35FjqjZkByPf6kjrB6e484PSyzJ",
  "key12": "Xuh1xKkHUKBESqxBe7z3pb7KRnq4CMKt2b2212kmYxDpp7EQCdDrRg2hSkyQmeqa8duqicAab12iosndoRK9rgt",
  "key13": "5KTHtzpqsV7PXtELrrszBYEuZiba68H5EBQqMH4bXE6jXvb7zYJJwphgpaH5ibvpwoo11Ans4HsFeGEvwZX2idU7",
  "key14": "26ZWJbkSXTZadVrMktPRoqk7r7Pcoh6nCcgWTrNzD34tZZydC5gPPSPS7LonZ9k6f8yPik79udSiMEy2TjZdHTeC",
  "key15": "3vUyAtLkWfHHqXwYgexJ1YAwVh6KGaWyXgEXowkEV89MNTepRo4UTjGZARRhSAPBJk1RzxVcGMcNxKzVJMWCu1j",
  "key16": "4jXcQCGSFgAsNcWnjxoP1L47aERgaW9Gcj2F2aYPgYnocfBmXEhqcCjoNWbUHhWieCe5YAmRmCjeVzfR6PE3DRpp",
  "key17": "593yEguRD5WmK6Nc1zHgvgbJ9kyy2n7aFAgWY8wtk9z3mMTg74PNQmeeFeS7QxTH1MSHkKbr1Pi9w8k4rFz8uQFS",
  "key18": "4sw2omBHxybcL9DDhcvSkm9FbukwNHrAd1iSZDnH2u8GQHLm1nSqPT5fg4KonkcicXxVPoTJpQFCiqsaEusKEXFQ",
  "key19": "4u5AVokggwxJWEUu5xknJWAtzPkjHc6FjFbMCDgoNm1gQc7Yhf5cPsv7iLM33nYJ4UA6cbof8WQDDk7EGj1WMsQ3",
  "key20": "4Xt6sa5DnEoXc7CEkEsoHcU1TfhrBb2Kc1oJz8uE6fTdHixXv3ahRvnhYQB1bYP8JGJCsNC8DgceLU8ciiTpuMKL",
  "key21": "45xevi12LsoX369NQLSx4mURAPjNPe38ZyRFEaxvsgP5m1rjfP1dHPYQq1G1ABEc9MAufoi14WREJprf3i8eztgH",
  "key22": "5KDi2cz3vhGQpritvhpWQxVesKs21vZouyCM7vXoALm7wptLJsXJydymM7HmvJUJojEPhTHSf8d9sWtFFN8rMS56",
  "key23": "484YgrTp7QA3GKfu9W5zKHNeKuY2W7E997QszjeeuWxm1E51PQLovZ8txQ9QtJLoJLjibJPWg9VVMbgcNefRaZnS",
  "key24": "5W5RhKY5tFDfzUm69W23QAWJCdFXjoWYwrq8mGbqva269tisJ677e5Jz4UhBEjYKrjDfB7VTD1R4n3UNdfVLC6mM",
  "key25": "5CnSkNZt36PT4BLaWpsdMgoziUfjTsLp4CJewzG9HQREarSLXYY7hT56ebFspPF7dJPmvN5Hf5A7UwYWvk91TRqA",
  "key26": "3E7Yd8MRsQVxCa9N35qeAy3GYYHAgVptB6U2K4n9PpvQhNJ4WyjmeBu2AkLDs8AibywGt7KfzXP9Z4dSzhNt61Pj",
  "key27": "gQpk5Lv1QEjKxN4ycMyoxjGxjkQifo7RHDVNvFm4Uig1tFnZ2eK931dBK95N8bZnmBAwX3DuuLeeznfmqmhvop1",
  "key28": "Kzu3djhTpSFa3ZYZhoqU5qCGUayoqVU64vGFzvYpAEmfcvVNAqQx6Wf4JXKmDCg2ygzKtrgcQ6ZwMGPquB9LzPR",
  "key29": "4ybaWp1iQHU4hcjuG9rnBJu8G151j9q7zpnCJdKkHx3PMVShuohHb5c1NWxQqjzMe9VWYS5zPt9HVneWaSfcURxX",
  "key30": "2h4YeXWnYejsBQu2gzd4mUzKkuEdXZ3UBsPTsn87XsnDVkeH3ZAUbTVaboDRySgDC1SKxZWHtm6dxQ4abddvBpi2",
  "key31": "56UpbJW4jXnCQ2TTUvCHm76u7GJ8XjBDuBJFfyR7X9MvJt8sWD9nfHFnf8bxSCduj9cNcTEqg18CbCLf885VLegq",
  "key32": "62WXFsYcjF38UZApYuzR9AseVLpxHYUDmGSdqSgMFKDTKpdMC2pRf57jwdJGHW88aD7Cz44KpBLFSNkBinZMaYWT"
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
