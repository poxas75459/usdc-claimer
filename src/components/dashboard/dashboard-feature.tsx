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
    "2CubWUQGX4o8HUsKms6ZQK4SMq38qLrNB7eGHD7WaeHekH7VRZYvaX3DxeAK5qSjt4eWnpu9Q3Y7ptNBVYGgvk3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4na92QiLpSHANuQphpL7TfdxmXaQcJgQRgugJLMJW535Ar51noNXKmhY27XxawGDehLRsbTumKqQFhkga8fHsU6s",
  "key1": "4WkRAY8QVt7jzkyLqvfh2oeRueX2XLM4yCguWoe5RqG7q9Pk2PHcYK9CvFtsHT8LNSUjfKGUWjZEwW1C9A9GgoiB",
  "key2": "4SwxDZqZSzaZmmTNBQVQJHNkgbXHYsYaWFjYXB2M3VnZGvP5eUfML62968C3gx3aCTcTq3LUUNs6TsThwqCZo9mP",
  "key3": "5cENSQAYtn8oJVstawBSSNeGTH2jz6XaMdiNdtXeWf9SS8QownfkCxLmXfHxvQKVKajCK6oWcbwhtt1hVapXMnth",
  "key4": "5pKsuLqkBrX81trPyb4v983e3jM7Lkqmjd1KJ5Z8bhUQkkL2vWQmQLiteofkuz8dBigBrjkcyKTrpZtxmxvNNQCd",
  "key5": "38vJLbUP78Kecs8sBfPr3SG282612iUVvZBZ4FuiycXHLePtWEcQW3hgMxtMy8XQavRQY8tbfF1Ew8ALd89wFHho",
  "key6": "2is4XSAiSHDZenUtxrMFVc4RKqGpsBixGNtGZDYCbGMwn4FFWS6xVmPW1UWBvJSd7yYFbpxAsFUhrTRhKkdZRfAk",
  "key7": "5uMHDvDCNNbhPFsqVjMaeNbrtNuSPsL2Yz4BCTtnNryoxWBKiBsTmbyPyuK8DpH7ie7tyPH7Nx1vLN4BKLm7PgoR",
  "key8": "5vnjzzVrRa1FXgp8yLTPBBGmrF8P4QdD1Ka3mMgaQqETF37a5aEvJBY5dDZp8WTvGYoC9zmJ3Jk95kavi3TykXdE",
  "key9": "5QbbQQNQCg32ANTJNCB7oqnVuNsaQ9RHbbPQJoGCrXtK8n6SiTrTAxXexw8QiAGxFonAqGYGH1dhSK8o5H6FHikm",
  "key10": "4TtGP7KeiyaS8gCHVr5wyNvX6kvKLJrSXFKjD2c3vy8EFhbxiF7uVHZDv58Vrrc5Z5ci2HDjNga9Wcw4EW6wRFR8",
  "key11": "25xxmepMaYge3aWawy7ENWJHg7YcFiNApc16DuxHhc174H8opSrhq2S2CWGCrNnbGC6FqgrbcgaJbpjhq2mwnfag",
  "key12": "3N4HkDBXPx6LZJ5UQqfVLTse2deY95D6RVJyEb8Pz2tthGW14mmB2dqzwitLEyFMGJ7S86aCmEGiAFx5AJ1kvsfN",
  "key13": "3EUtYxsN5EgcCnPCthZXCPDpoUeA2Y8aUFiuSpzwQFuZ6pfRDjabXYPcsuRbsbwSe1MqtDhTN2gP98i2iswYYXwX",
  "key14": "2aFAj3ZpTLZVDkjt7RqCKtMwcZHZhYVb3wQsg2VMGgENAH2UfRg234CWN1bD9qnJLYpbuAJezqhwk3Wur5xJv2Xc",
  "key15": "4fSMK82CqpGirhehCc6C8jxFQCMHN8mVWzjGD9doTe67WAxGwqpKiedGpumzE8NYrygVtMdxBjS3sGTm5e6tdNjX",
  "key16": "27HW3VwHEMfmjpVkvdgcS69zwyTARGnKj3hxeV1FARaUDwThd9bgNWqmoNZVrmFsEad2BRZNftJ6ASTKh3fmp2M1",
  "key17": "5a1pqpuQUUDvocjW9gnGXKtEKLrp32uHZua9gnfY734nQB9iJ5MoyKp3exMRPHrjBHo2Wj8QkdMfsReDvRVgDWHs",
  "key18": "2WXGTancVjAngCaK7n5XbypfZBwKQpuByNBwGygupcWMrFHq18EeoHKY1y78jCAPNx1i8T1hhWY8yqXiyQTJ7fGb",
  "key19": "3a6UBRwQDzMN272zd5P9RyxWzBPamaXoSHCruytY6c9zS2hrnoBc53iBshAGENY15bxsJ4p5YhgXfjNc8rmK79Nt",
  "key20": "2gMegsdVM5J7Se6M1oKfSSESLRaDpRHWYG5rMApWcR8kT4iU4wpicg8i2pu4pLPFddgfnMoMyCHxdP3vsFHB9DRg",
  "key21": "4CFAtpNYSz7S3eSyFh2R2bUN5ugkaVr4DffZh5QB9aJa4QULb5zva8AAZFWnD6ogR7Lv1JaUfQ7ASu7N958LDiHw",
  "key22": "UvKDteD3WaedopLwFJcir3PKBAq3VnsAD6FoGWKeauJYBMDoXmYA3Ckud6HRZdNF542JUY2nrweHp7qebpBwjaR",
  "key23": "2VCodEMoALwoZyknMAWiHfkFXNVLZZjoj5op3q2yc3oM2eQGhZDagsVfRoJ5LMdHz2YURfLvR2pTaiAJ1XojLN5J",
  "key24": "3kN2CMnoJ9QuzBNUVJrkkjpsZzX3yZqrUV3GZsVDHy6bPn1yGLkJdnvtze7WvLzWr2ZssGWnVTb7utZ5ZNzzo4zD",
  "key25": "4NYnvFpPbqdV4SAvmrvdXagBaaVbRzm69Z9Pdp19v4KSafXjFa6WcPoVRhpregBwLjBbWJ7HaMRqPzSBbD2CdWkb",
  "key26": "2pP1uojifXqCABd186hbhyZ4YS3VrRHRkXMGRB4jqxzXSyouXNGu6gog1xnF68QiDXgDUVXBFwM4Aibmqy5j9df2",
  "key27": "27myfHdjH4rAVjUNqWbHYvB3mdU4fBwbELgkY41g5j4YwLeownGmiENuNAe5m5hUxnj7HWMHCdvpPRaZqMYF3o8c",
  "key28": "46aRFmadBeUCxWn4bKi3PSo7vZ3uK4xFxTV9ibe92fpnvkoUEV4URYqwNNUQv1M4wU3JMYH3bzGyxgzAop4Eehij",
  "key29": "uVioGas5qnTs1iBfNriKwUmQERdktppQHzNniCi1HEjREBsrjgfu64qCndHfA6DHyuymBXi2tLxKtrrsnHiujwp",
  "key30": "3SVa9cBzX1riw8W3fGxZ59Avx6GW27fTHR3cyWSTZrj4rqapAt2svhiBVKmnYHSg3cxAuMudNVypGok18aE8G5pB",
  "key31": "4b1NRDXsL2Ej2U9GPFVLXNJU8yAHu3p7848bCBmT6s8Rm6YqjhSZanRX1k4dbtFjNPNTdVdhs6LmKais7B3noCZn",
  "key32": "5Hsc4Hoizrf5bK4UDcAjW6AM7zekwvFi9NhvooU1741Ksheevefjfd6nqFLoibhf2B2JDy8wWPa2G9d1FturetJY",
  "key33": "49uTZZC4ULWu4LXeVMvosRbMbWXckZRbGM87Ggzy9ssKEu7yvZjrjNt3q1GMPMwLJNCcpMJTThmNphhTAxfRVxDd",
  "key34": "24isD8BytGvk14ad9Ap6XLXkFLGq9YeFktDTY7GUKeomdGaimM25oAs7vRigoxY8CEhU737vc3TNps5bK56EKZ9q",
  "key35": "2i2NEvsa2YkCcY1sfN38ZxcyroyQJXibcWfLerp45CTWWXLH9YBxPpmPHTrYfRMEPx4sKcrPtxxTzMieNtregBB1",
  "key36": "itSZKw6fwNFieHEzQVXrNTNAwJKjTAZYDQT4f2T2Eprqby27cpwm3kmo3Rt7SYUpPD4GfB5Tq9LC63AnSpTBPXP",
  "key37": "5T7W3F1F7SerU8NpEJunccnqw23WCa84ScBS3iswz9jr63KmTbxF3Rw6Sg6LH2JZWkbhBJajGPZRymbVbqKF7ToM",
  "key38": "BckskJR8eVj9G6x5KtT14HjKVcAEE3ZCb9FJSwRfgxAc4nN2Ng6ZX9qPKt7rKuX2bmU7FJfWTCbeHFFK5eaUZUw",
  "key39": "4vLr2iKMJtPoGVmHxVe96GmRKN16yQjeGVCfd9sAAMErNCH1hZxLRtn2UNhY7mCGjLSTQXQwyEuKBkAZfPSk2h9D",
  "key40": "59HB5GZ5krpMaBFaVVsBxkUJXiDbFkp8ZvdLsgGjoh84a7LiaNH2py4rfjftUC1YeyYgj1Y744cA1adzCgQXe1cV",
  "key41": "3xqTWCXbEnzRNYjVVqL6PqJop3zC1HvwtGnRBCVup8o9Cx5Zi6PYh1r1BoMzCFLXjaHBiDzewsMZjWSaGLcojiWF",
  "key42": "3xWgbn699uFzpprtgDhtp6Piz7f7p62KMr26mqLuoutrxSbnvomhgSGtUj8mrGj4BbeWdfh8xtaoxPsQv1WoGpS6",
  "key43": "2fDzDscEfmw9i7VchELQLW5jEWZP4HLyxLSyDRrDfmbRRmLoGuGKMAoedJMmpkaHaKsjaKN5TfFYRsi43YzfdvF5",
  "key44": "5U32eFiD27CPUuAQx73q9w67VGhHx22tsbZvZCnF1EPdCvoyShiTkAjmJgmx9PmMYvTs2u3HTYfLD1i1vkuAogci",
  "key45": "5naZW28RGjgVTtxQcowUuycA7RpwgyiNWp55atqX4h9XYGoi58voPKRALQcKawNAXJMmCbcES4BpkBmkTjRfYCzB",
  "key46": "2hPuf7dMaEXSg9bxfwQDcCYFiXsn9f3hHqzEtyzg1sgRZt9rrh6vmXnaEgaFs2yGvdYhqEwiq4FbXEXALvYjQFQU",
  "key47": "CMtF5721yYBRkChy5t224BhFGwiRCABgkGnPRMY13AKLx5fS3oCeUU9NkVewXe8iPNDs74Fn4UUPkbAnZxDSJVQ"
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
