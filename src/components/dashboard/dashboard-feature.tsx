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
    "3CHZCPD2r1xn8Qnr5rFhQp4yGpkpE6Cdd3DvWa4gXMM9u78tmgcWU899F4ebzye3Ww7gBJr2SBUtpXxAurqaPuNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y4ENdTvv9efbkdrTYU6D2u2M6JZTZ4kuyZ5QfFRpg7BaKWg1VakeXgy6oPPvpwTER6pXK5YxUJyohNG6bWZo16o",
  "key1": "5KRrpN5KUBQcjprCVK8GY5H42rhC9JkVroH74YcGyZo8agKDeCJM7978CAKraTiupjekReP1cw8ZrkPKCFKMjTHu",
  "key2": "3BDgLFNgt7dPMpWBX4t3parAvz4Ce4yqeSGqCqAKrM4iL1MPV4KLXnzmG5R4qkS3oLh3UMs25wGdwye8BeDWciEx",
  "key3": "5p8momN5VcYjtGj1g6X3cW14Qss3YnP73hjvwE4rEgSozZd1qvrUpa9YT5Pjy1ZW8fHxnewxCVqDrGr17mytLUmW",
  "key4": "4Kk3sAkGEx9e7i4z9NUWjCCGdnM1UJpweYwP4CeLAVmB7AgQYUVh1miDn6j7raJrLSP3XFsAuMMJaSPBtqqaAWCW",
  "key5": "rJzDBqaeGJGYdnXjhkhgdvJSvWC8KyePTJZKe7hAPcVVUTnSNTMSPrPN2CJhUKvDxH1ztkpJwjiuQynb2NaDFy8",
  "key6": "2muAr6xqmfcHtwQR5vKAhoZpx4vkKAiQsjU4TZTs59XYPhzG5wfNkW9p5pRKBWh1pdQps68ySvG5sqq79THB1kch",
  "key7": "5BwbD2qt1jyHYdNZRNp9jXmZBSLCbweDUmeeYN2DRW9RZoZexvRD8sYAX9GPPFfTsYfcVDJZZLDyAYbUZXK3N3we",
  "key8": "3BEmgvX1g9pGfoJaJXQvaiPFnUC5JEAsEZnVs6VZwHhMg3dYdyxb53SeH8VSGe3AUMs3p1uX3SSYy7jBa5QBXBhY",
  "key9": "5gEpE9qQkcAEF5jgwu5ttfRq6YFovEsACPiNsKGc9Lw9WGuJ5k7PHdTAV6XDFMCaDta7qz3vFvTQd1Nad1koKXoc",
  "key10": "P8nyqrLfNQFaNCjzd8huVSUZPVXkgbNmg55CTMuEzAk7BNGo2m8eS1AsbBaa6Adr4nXAuYHVBR7ZJXGfphiQGVu",
  "key11": "2gVKrcJi4t2dN663H74StjBMxUCJiw1VKam9ZuT8knA6bG4T2akfAi7Lg3jPYR5oUYJRGyscAinPggA7XfGa2h1f",
  "key12": "2uj2VEzEEHXA8YLC3rgy8EEzsfTWjxP9oB87PLSventXyVSG1rbk2vhhxY2zgiC6tjFByfL2HnRc7TiKkcV3jqM5",
  "key13": "3KXo71Gbh6tu6URCBSssYhskymck15F56WEm1i4pwRcdY4LUehuNf2xbb2HGHHaSVrX8PnWsiuFu2pGeo7dY1LZj",
  "key14": "2vGcD54mfGc8gqcizcdN78yWmY2th5pPWvgwGCYPa1E8bgLRjazJXo4553gFvnGk2kJrPysVFCu1AJ7JQ5QiSzo8",
  "key15": "5R62DnL8uSHWNaR8Y6yAeq9hrRqwAXRj9nhXoNtgGr7XVP8smqhYhxxZH9eedWVkC1w8BNegHbRUQEGHDbnxzkK3",
  "key16": "4F4Q5UVmnMs7YQQH7qMEHYXk4J7D6CPiQhpHfDDGjk3NBfMCDxYyXnVSVviEJtdZeffg4ZEUkxwA7TMVBmzYL6g",
  "key17": "3wbN8b2UE7whVntiWdVsani6yAUVXaybPVd4eWx1VjCg8LGCA4VZUR8xjL9DK2cQUPivGxaELdRYvKTVif8u3DGz",
  "key18": "5QsdNQVMxeFVXm9CrFebKd1Wn5cNFzxGBe4S7Gcvf9FUmJQmTbKqJLdSnPt8J4Hhwmwbpdf9eQTAH3YYjN1tJ3uH",
  "key19": "HLqXwEAX8JWQdfJqjLGeiXyK8UC9r7Z7gprKoAZgXRM8K8aE3bEA8d2jyEDMsLCBcZSQg753VW9nTxFypNVCLvo",
  "key20": "2VG4a6UbEU8yBKeebyxtw25WwG93pHS3FFE7ApSPWkqB2i3KyJXowKvYLNLyKvY1oJbzArhGoKJV8tafhDodkKPQ",
  "key21": "5eY8EELqLCLpiEU9doM6LAxDE4BWQAXCsWJJT7cscbF66eHoRAPLeGdPxJEdTQv5Gshd6KNbcQ1yoc4bHGcoBKrz",
  "key22": "sutSK4XDiKDzr9PGTmhS9kcmmnLZSewQWgDxE3n3Svc4SBpDeQBuDxLa2U5X7qPapDRTjBfEN5AsCBLPomaeiVW",
  "key23": "5PUdUZ6oRY4TYTC9qzrN98qU8XBvorWrXgTnmu4pkxSUa15T2eBSYaEfDCMX9besbbeVcC4VV2wWRgEC2NAkhYcv",
  "key24": "66WZcxkQAhyZKxjaNp2cT6FZQkAWxPVxSN2S7gkDkp2TRMKn9qomKcBtxNfEoBMuMXNoPsLN2RhwS2x1TPSdPVU4",
  "key25": "5MdNcGiZbi4aKkJpYBGCr2ZLASd76ssLvLGdYfSkfgZ9BTRh8hj9ShiSgKWACA1QdZ2oHctGxwYnPx7v9Y66iung",
  "key26": "5swHCbi3j98Wak46dyBA4uaFYsmKWEMxafDnz7igDFho8LJPZCeT7er4tHs22xeApxFEAtVi8VhTkcyUiocM7JCz",
  "key27": "5An4aGpXmqgXJkpJ7zjQrxzkRXnJoviyi8NEHm6siAzvP8BVRqE2ioRBg5crHxfUVMQPHmwsgW5siqLr6zeo73Rm",
  "key28": "s7J3gjFExtmxV1GCYETsEikWaCCAPbsFPB1ZrWLzEcoEKKgaghGNCjucmtbkM7kNqrcH9sFd4vUjNspjN9Ziz7Z",
  "key29": "3FXQCQs6nPcVFgrwBtzkLqWrG6uKp6vYxBFMQDzUywtLfj77rADKFEe65spwhdrifryXJ5Z7oMNdJtib4vSEnzFs",
  "key30": "dQivHRiys94TnvnymDGkqenVPCF7Ep4PRRE12vZWBgg53kuNu8PS93rxNunvuDCBKPMfEkzN7t9kuehpB4hquNV",
  "key31": "3WbdqQSagBmDoqEihJsUoZrHSHuHR4hdjEZ5CfwDxn9BPj5pXb2kJAX71FBFNQP14ybWfprmMP8K344MAsP9QE7Q",
  "key32": "2zsA5XUum6j8aJWug23hwYnGcS8rs7kT1kg1ML3Z6eRFBCm4CgvdKgZtdfLQy3VGjk36SVuxxgctCQepUwwjXTHn",
  "key33": "4iHwz9ewquCtCSMrfQspL4jP2BQWmymjbChvnUrsgwRpDyi6f2JTJvtWXhaesNhc9KiRRChCNmiKo5jQjLrkx8Cg",
  "key34": "H3cUdjZmz3vZXLTtBsvimEbrHuTzpsiRj3i6wXShLY5JECYPAEPhDoJvwArSLUSj76xLUs4exyfVPZxHacvaz6P",
  "key35": "5w1EJYJzvXUNzavE8THKRFkuUmRLQYjXkdoGhiPZcc5AdcHUggmjsyVRNwAfMiLhpTynQdPSNEz3Nx9WUZGbX4n8",
  "key36": "2EAvzKAjK3sLio8Rfa7Uakj7z7c57zyQsn5YJuXaDpJejzoqy3aVzYrAVmZTa43ZuweD3xLeCxRt4ccxEX1rcWq5",
  "key37": "iR9LZUSYtdjqvujvY6rYPzqNGgFGhJW6SEz5eF8NqqE9YJB1JFQX1etm2YcoabdJySwR6moYazdrGcqBgbJjQih",
  "key38": "3bvyWL7UYRaQ3FLu2xLM5UJKqMxsDuwwUxjYrAw1qmr61gTbB1gVpijucr9amijaNhHgbRbwpnSbc3AkVs8ixwjF"
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
