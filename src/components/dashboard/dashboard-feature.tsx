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
    "5pE1WfAZjiG56J39iw9h7g986x7ZKuVegYDwRPZ8cp7JqqYuZjyxFVHaGAbnAEviqJvnXtoRroyPQ5BHAp7YRdyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52rSFr1Lhrzg2bMrHBWiQ6C7rLyDdyGhchKWmBCQGTWzTuK5duxSpfV1oCNYWPQSHYKWWjyWHV1auxQMeu2fn4Xc",
  "key1": "4AKn6W1UrJDPqWX8S3BfGKZ6UbNdVij3HJRK8onyZjzYSwHAecDkhTszChNwyTqFjfZEdFXvgERHUEauBSN754vA",
  "key2": "4jtzoxVENsRPxtjqoxJ6QVijXNBXQwsdEwuNhqVQn8V1cxY9z4Uet2S1gdUkpQpqhECTBRk9uWdikXcyocfxwHFf",
  "key3": "5Jg88o8teJcR2sr65qFTKpqdSeNBs9UvHBNZjYKQAqetXVH4KEZDq7oa3xLvqgREVzdXnZqbwXUfa6bm1McXgdkQ",
  "key4": "3raDyaTqfmNzU33WNwKCF7LhoKcX1cYe9N8Y85vKSLS9h1ma5QgQZyZMDeRFaM49DXDC36QeoRkMwYa11zwFznfh",
  "key5": "3D4xtXfP6Y9kEyMHE3QJKgr4foPweyJ6EmMGqRXBDUjADPrW7rzwgDcTHc1JrAxyy3hCqr7WMpztTNWveY45QJQB",
  "key6": "4a791Yqr8H33ERT7jhga6K8X264Yh7wp4LCRAQsr98rqcgyARZbt6ef8Y11vRaP8qrCxERanFnjUnKdKNiKKzoeR",
  "key7": "5v2MKE3ZDNj4nub8JzD46GErv3gjCXRC4cetAbHNZNWmTy81mM9PYyJrGBvyouoY5c1MvkSGKBajuFiYncyriMd4",
  "key8": "4LnjoEPY26nRLqSk3q6Jf8QW169DmTgU3kJfTLxXUp2s38q6UN4yoSXTDnWPmDeEXnLi6wKBN7mY3c4kyfmAzbL7",
  "key9": "5psYyPGFgcLcG642oFYsBUUvUHKdK29ZN4xpJEc9NF6kQfTypqjEKa6UVr9R26C1saSbR7nw7eytPyj9Czi2KuN1",
  "key10": "kMxCF5bwWtvpg51svKu3BaQ6uA1v9gq5LTeq6LScbCS5LDYEVuDeE5boLDierkcAG1eQivm2ur2MzRN4KyhS7G1",
  "key11": "5DhC7C3fZ3eYqktTZrM7gNRGfqjrMwJscWniDvvCcUPEUxdwZzH7L6BeW39sXJMY6Z8he8nb4uAdi5y3n7vbCfoz",
  "key12": "2nLnf8uxDyP4f5GHp48qfCathj2ccmcdsCfMSXZUEw3dMyU94MtqpdVtG8qyLXejohFB5TrdmJ51utNLbXSKJ5iU",
  "key13": "567EZpc5n1H5ZtBPjBe15hxC91SVaCosBuxRpfw1RMq66Gst7n6CifXSU7iNCshQ8Y5AfsiCer4zJXMwuQSHvDu9",
  "key14": "cgR7VnABVk2sgRQ96K1CEP8eS48ZhAvfzpAkHKGxuYgzeygvE3ayRa3HFW1WoqArmb7Y6EnPNs422123mtUNziV",
  "key15": "4hDkN2cNqMUG8ZjtdXSqau2hvd29nQTZzQBKK2CLJwdKMCJQ73A2Co1NJEpb4yNv8VLfzECmmHDYeHgTAgLiNMRe",
  "key16": "5nrJv9AT6yTgJTESSFq7HPYWMYcu1tPFyA5gkG9prW5A2hzKx7fqXHKPhgqoojUQKp9D6nhVKPfEV8mMcqRVVMWL",
  "key17": "4gf5UqkqBLTmHdAXMzcMe36Q4qWCkkjRoXcAT72DTgCSsthGvAahGMJrHj4XgmndsPbgCKx3yoj1brhFvDnRz8mn",
  "key18": "39Z5R9vfXP5auGEwAdiTKv8u2Kd5WKeFEvjydS73GGJ5c8ZkodPC7Bq7mgAnENRju3DbvJNi6mF1vi1DCSuwKSuu",
  "key19": "2hc6uRMzjRk1i1rjCoRSgxCvxgNdxyBzJAjKzzVJtx5RpsT5YNvCgQaMQNnVPun7MoXEgqLA2E52vwDUZUQwvb46",
  "key20": "4DdhvwNEJR767QKF5f4R4y8NBfj33QwTkDK6io36f99WgvqfVMvJ1EMPHtj4ftGXxqcYoJtn4UNaQ3CmHtpo8GbD",
  "key21": "2nbw36Wb7vL2iqT1rF9MJeezsGLJp9a2WDnfnn1CNEptHmzhzWWWcxYkdQ2uQkgUvniKfmZR4Rei41eGoroF3rS3",
  "key22": "53H9MWE9UmLffTe1Q1s1VAyHrFHKVy67FB3oHFQMYnopVtw7fHxmWZwQw49X6kjSxWMWm4f3y31UcX63xc1Y6ZCE",
  "key23": "34SPiFg3i5153ntA8iA7K5HuJJoo7dyGuy8Stv8ezPFb5GmXyLAe81MeqUKXsG77ApKihfSWHqjfRf4fCDahTBMs",
  "key24": "4doTzpGcCTtKLAtB46M8y5hAdcDskMhtrGnSMKvMBJS3VSbbsLD7xe5qgmqDxZituvA746p7mbJo3LJVgeFj7zW3",
  "key25": "2qUbeGAKyVvrqbFAGszfZMyzVXstKEjPSCSJpYkhRbSPDJL67bF72BkAjG5EFSGob9BFDnEswD49t68PfyDycoyE",
  "key26": "4Kk1jvUxZWSeGUHyRF7sTnuM2rTLxTGeAuLFSgS1nSnt3NnmMF62DcCLFzAEcoUPNU5fzoVDxSHmUCSteLBphqhq",
  "key27": "3xB9H5urRd7NxX6mnYYUpYipDfQRsa6i6EZJmpSGmZUKw3qkQJo1EBQqkVoWAvQQfwNRkFR3XFE1UuJnTtivAS8t",
  "key28": "59orG55Wjy4SHH7WENYdFa9dmf8365fa9iTWAuEn6EUihwyc1V1fzQE1AHyoTnjafNHuLYhvf88fxezGATeV7vJ5",
  "key29": "4H1ugktL8gQRy38mmFvjCPL3yjvb4kF62Djzeoij16coBqKksqoVBQm5p4rD5wh8FKzc6tJ6ZoPBFYC1WoLVEuQW",
  "key30": "4zDXWGv2GgVV6d7wvDjmCrBe5RtMxq15Eo7yQ8m7L7L68yP6b6zejV3P2XtDjhHjnJkzF3U2N2Te562MAWA1fcff",
  "key31": "4Gjv3Az5KnXHtsFtu6z9vHTT8pRXYrrysicmM9vUU4za52T3HDcFhaFnoSV1rBxnSouv3KVfjQcst9rS6mdKhLVu",
  "key32": "5mBL8udQquw8ryoV2HLeNUoqpmDXKT1dQWeeU1gjbmTozktaZwENzG2EghSAcLtuvmBYMT6JXJD5i4KruNqBbgiG",
  "key33": "apLYBgeExts81cjCtP1d5Db6QzRofN6WHrSjd9b3wgidF7qMBScM7BFP5i9UCWvL9GnorMSyFuASnaxFzHj3S6E",
  "key34": "4nG2FJDeQaZJAXpXB2QoagW8USoXLNdW6KUxU3jNsna87B8PmyjpurHf7DeuSBp6S4TAES29BZ3KMmhDfT3FHgqF",
  "key35": "2gZALTSxcss7FThPNBkGXC3N5FTfU3jxqV9FbAA7pEpw7utPbH9DC1wNvPnh1SsX5ReV8beooWQDgU2XfgArEhXP",
  "key36": "5gX5xMpC8teivCBd6uWALj5SrtFiJ4z3NTheZxyNGZsFHKfy6u7qrpCnEZ5kxTT4sdFWRpAA51MvxSpJ2Hzg2Fru",
  "key37": "2KZ8Aqg3V6VDnHJHPKkJEiLmxjBXUuFE769Zm8MX8zDhjWBJa5ihwNaRrzYVw8zod7jkYG2BrpypA1wdqpqAs1mv",
  "key38": "3oH3rHwMhN67daBFJ5R5iC69Co9QRehNsFCnr3SG7ybekvyrZEB2xSv446Nmu4zxAujirVDzgz9oEemQ8cQZkrfa",
  "key39": "58Pum8CSnKhDoPZStDMfiJbhMnKijGwic7Nx8qLaoaWQP2PBLho4tZZ5shTH81wMSx3xTG9AKuMx1USwEZ6Vjx1R",
  "key40": "tHHxYxBQRug4R7Lhp4EtmL49bkqXmnmjVdLC6cCzEhtPWR8CbevdTcZr12ExCagSgRER6mNr9SULFCHYo89v5mc",
  "key41": "9oAdmhF1Bw58PQKhhkcv5V275kW2grWy97cz23GCKazekAor1hJuVRk97Xmus7LwbcKdeebEY93yH3RNj3osYHt",
  "key42": "35pPvkGLteVPaecMs96c1b2myr2eqnVjf6D7VPNkjc2uorn9jJbbhurxzeW4beEiv786ApfXCwAvcfzeUXQgBSP",
  "key43": "32o5ENTn8uFXuSrb3ASPExLauNYy2sK3DwSU4ydhyUMru7VesBpYnvqKRXhUuEFfgA6FG3eKfmxqKgZ56dZniPJi",
  "key44": "319NvsSQceD6n9XDK2N1QDS95Ecg4SssFzoG84F3kyCWA7MdoCus4QbanprLL7FNi6h8BidRcEPEwaHzBy2dMQgM",
  "key45": "4aQrQrLfLTq5woi1VGiEQJokJbNbDcGLoMzwTW6LmegqtARjUBC3ftSZudi3R4mfwtay9EvmAk5UdaqnASRG6spE"
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
