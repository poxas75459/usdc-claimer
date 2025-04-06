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
    "W77kebX9ucC55idF34kmPHvME7wqBSFyhsPiqSJAZGBGDPH6wV3dMvpppevNwnLegPMxNwmuojnLYR2ZH448gfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WQGUg6hJKixiTtJe7Rczhykic8p1YVoodgEFKoDrvfjeVAzHaSmMRBDMaQcRvbinyfJFRZttybH93MVEVEh6kWi",
  "key1": "5bpbAKCCwSPb4bekcpADdhgznE4tCyTUyvaAPwZanGicSEQj7sZ61UVoZL7dwnaQV5vRftd1bmXyiWwosWS158V7",
  "key2": "Hv7mLMVC8qrpDkZwmZ9PRsaSaGkSTNg7cpZbihgTsxJimriKyKsEZJK1Pm2Nzm11zzTdLYgHVn9R5dTq6x4D4SW",
  "key3": "3aFQQeQjGDdaMReVvVu9eJ319TW3zJLZNtQ2izopWa6SWqyQxAcuB3hCK7ia5BnQoUszwQWrMMQ4z4Lmvo9mDia2",
  "key4": "46y3dS2b7cNiwPp3gbhTQwWHNJUBYBS2QiW9WRVBA7d3xoRNhHKozVZXRjccFxP8xkbujbNoQGEnTEjEq1SJZacb",
  "key5": "4ykvr76gdn4fKJ1dvRU6QC8EJQf2w5Xt2PqqR4Cu8u4XsduCQ16h2mJ1DXPp9R5Cz7mmgWYC17X2BX983r2Lv21X",
  "key6": "31diimA2ei85AsCoy3PZvcwVzzE69LbBT3e5tJNEMYtAZ5vmB5i3HZCv75dBbVb72nWZCg6hE35m7bqwjfpcnTXC",
  "key7": "3KFLLHqiFFMRNwYCCBZZGd8oP9vzQQhg8ZNgSVUnAHaou71NtqF2tUq67eS4qeLgrpSRzssQR5uzAFpWy5cth35k",
  "key8": "4NGhruDbPhRi65yFSg3VCswJTN7MCEjBvRjxD5xxdjsXHpkE6FPKHF91srfyzBamyYUE6vYCD3mgCavsQoUPUf39",
  "key9": "3xXgioHftkAQozYpvTP2syj2neDSEMLNMXV2U6a75wkVZrjSg9TiHjPrmeHyUi9HNeMNf3wEoga35adVbuHUg1EB",
  "key10": "bykP1hKmRc2wjpCAer48zR6cakdj4hHSQM3jNRpDETtGXMF576hgxGgu6RJqb3StqyMUVWCJDQ4rkiHTZLZ4ijB",
  "key11": "G13QJjGaXwaCeARn6JdT5fLP9s6Q6EweNcSFxNutDw6LsNmgAzGupzSCe7zi4Kh2oNCstFm1yLny59ma4JxDFHZ",
  "key12": "AX2hVdXZjw3GqtULEmzvTwVUgzivNnxHnY9yySujrSg1pLatCzbSNfpfoi9YtBRcHAnFZWZjrsqkiyEh5eMaWYw",
  "key13": "jXxHs8wCkvLjwTJcTfpxWPs4MzR43gcKBMHnJUhoqtMdC31xQ5emTXcrpX3GAU2bntVA9GPf4niQBPu4U31NUZA",
  "key14": "63DB1joqpcU8uoRH6QSMCGU8xZmyxTcKx1jCC2biHCMYjXjcrDg7jUtYJCFAusJU5tvz415iHdgpYXiVXhzBw5FK",
  "key15": "4tEp4Py1f3jHfWNvKk3EDgRQzHEbcdg6sBJnJKvwTxQweppcApj6JhppzR7iVgPP5acbAxsy6My31cEF1Q1Tv5cs",
  "key16": "5L9aubgbNfryxX1scv4jwy4S3QZqbYXaHBMAt8PmVQ96fVtm5cqu34VCW31fxrL6CJDFtub7pBaF1C4c1ZecNh1J",
  "key17": "3Y1JWm8yDuYz5h3Mpagj48PQDxuCyXDWCSznQ6TVuTEyXGd4UgRXPW4onTDpoAeNfWqF2fy3wcVJLaRc9T6kqZE5",
  "key18": "238qnnwAwceH9cY4o7bGFWR9NykoiA1CPx8sC6xs71VSXwFdeethvHLmRWGDReFB7xp1g2nm9in2uMYj9s3ZgN22",
  "key19": "4ufzAy3a9seXE3C8FJKkG4pQqHQy1nLpuKqizhwQcZPXy7TUb5cF4sPVBmci8zzg1Vs4GD6dbVXg5GuyFaN2twNR",
  "key20": "3CRMyhmHQeAmwVT1XyXDddXrzUXC4p9agtR6eCAjrFiYJkxjNybooQ6rLxQD9dd4HWiPLWKMrDkAgz4dFw38zt7o",
  "key21": "5hfWpiveVx7xa32h1EnmZH2RsVuevDEMP4AYd57SYTHT8YfWGqyekjaeHwaxs6aHkdPdgqU52R5EkGXaLfLDq8Ws",
  "key22": "5VhKpPMwqe87UryGnJMn9gx26UHfw7TYn1nBdTaNqie18Hinnwg1nviauYZQ6wpEMEnMDUEmJ9mYMYtyYDEhDHna",
  "key23": "3ccnjWuiCAir6pCfwRrT1KZsH6bG4YpB1eD2fu98GuiD75xskrwhdtXQZmWz8QhWVU6ZDgQzpWdasr2i7uerLWYv",
  "key24": "66hW5q44rfDzBkc3mMtmUFz2c4mFU42KPice529sCwzYAcPTPDpb1YkteMjMkPnkccWsCrbpJsgLytkW8b7rBsHf",
  "key25": "49VJXcam6gkM7YDgyYiCW2w2bLaGKrJYWFJbq2963JQGBR16bAEF1aTD7V9Dp9ep5Zz3PYxWG7c9KKFeC6aPMf28",
  "key26": "xZpRM45UnwzP8SGikp5NRYd2n2VJAXzbGhrHhGCtxrwRFK5q3u8eCsphnjFuERKHojsfTMymR7DJ9t4zKAi18xU",
  "key27": "4m9BF23FLL6DF6tr1JAUD3gn3Szde3LRBvUgNSnHugnFBYh3Fz1Tmdzy6Um8NxjpHFuTzikuHAAVeu9Eb7A1c3kq",
  "key28": "9sYJF9FG74wKfZ3wqmMmsCm8xAHEQBfLfc4tSJMzRuQtcLe5TpyrcCge92TD6rK1rBF77wCrHYbQR3TM42SGdK5",
  "key29": "2ZsnB9WQkViSPFj3Fya4iJp8xno8ku7F8WQDsadCFgxoMPP4sqzcuChtgZ8PsZi73g6PWbXMvVMWnFNUiEQT1N2x",
  "key30": "8hBVzjMcFnf7n3d6RGkHW1hqryUPNwLjEN7DyanNW6fm9coNXtpdUsS1dBWES13vt7HZVS13vu14y4WaukBWZLd",
  "key31": "3wXY9ybe6a91WEhZtSQpRRGC6VQUcNhuCpUnDSMHVgZPFUkYkVroAFci4V3FN5wwcHfr8VG6TcAb9tKC9fj9Ruam",
  "key32": "2a9jL74aGNF7ATLSNeiQptLQgxvWSbxEVq9aqdLRsvvHFqQfQjFzwWxqrrH9JMa2e9spVrw9GxUZXUd5BagnfZab",
  "key33": "5Co1z1o2EC18NZAkUXxymWPzKvaFdMhr4dxxYVSik929QVSz82zEMBTNcFk4MNRaSDkHbfvnMrB6UowPtcHWNUCe",
  "key34": "2YU72YW39RyFRk5gVdP5V6nFjE1Yv4ZEnArJuL1VQyEDrYRsrjCBwC5yWMgxx69oWn45ybvvuPr2isQousuTd8MU",
  "key35": "vumaAzSU4731Yx5e7GKWZr9RY7CLhUmhaRW4BrkuF9nynL4jC1Npufq12qf5JhNXqBP56Ea5PwTH7XEC7GdbJkF",
  "key36": "RnqpwADJ3PnVwhjbLwtMW3UojZdr5a3SLtbdNfk3dP527W5FJKGHorXqYKJq51HXMyPFYSwxTC3qZve41WZyUop"
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
