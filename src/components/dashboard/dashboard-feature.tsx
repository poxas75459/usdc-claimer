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
    "NqKpzFDhaPCQMGXUu8h8cyg6ZoLDLSv3uHGLwTnLyZTR3DUF9pqWLSfNacZk1ynD2xrg8xiURnWbW9k7UYYzC8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hu2GFh253abjo5D3a8T3JAtibguqzsv8UnsHULNjP8DKub5aFBBToXorx6hx3Ldk5P2KYp6BUYoaRLbyP29gbrL",
  "key1": "3Y1Lk5rMm2WQQfSF4rKKWJjNd8ppodW3vFAqzt8bAu1QnbvvGRkjFw8zq2N46tSvFYWbSU3cCZe3Ln8WBa6Po96a",
  "key2": "3JQhViT8kPcKEbEQcbYWxrbEABJYHuyyQCfpk8md8Qf98Wxukzr23v1EoDxGWwBpHht4uk3WhBYcRn586J1rxNic",
  "key3": "4VkhspHYnmga1AMCYQB8UzLi7xJFNSKUN8WgCSgYxzBcq2sbX4WnskmMkffpsm9Mzcjk2ey8gPcfDMFCp78zcTZd",
  "key4": "4hzAK64yNr48BYSgbvrvf1yyYtGjLyPRND1dGkv8XNeh9MLAhDtNJcJTC9puSnNHA3aesjMQmPTgs9RUJrSPvLET",
  "key5": "5dj6D4CWV29qtKngEdw3HDvKnG9LTj1S556ysTSAsinDbZZKBS785cga8yuigqk9DZYxUFNegAjdU44aUxPDVJyW",
  "key6": "4cmHeGnMJ7s67RopDsMzk88ipQtBdqMckbqnMXu6zdq8gZ8i1pFbPfpz3DfGayfVL4P9PEu1EM2R76uBzuJaPDwH",
  "key7": "3XSRPJchzEtySeTaZiTzmxLuLh3JYqygFupfdfaBNwSTEYqr3fQZYzFVUKA6fV9v1NPJNZ68NBgQfLGSZ5JKbYF3",
  "key8": "4fWbCJ8EvVF4cEbYk3j6tcpcGWiDTA2be7eY2LY6NXezA9UeUQX248jFqT1ppfqATUSoVEfGSzYFoB2DPxqXNdFq",
  "key9": "2VgMCEAoF4Ta8ov5KMQZJ1UdnckqcB9jBUmvtGa16zVtpkDrQsPRmsoyynRRmaZfbE1dcxSzL8oKx4Ezn5yetBqs",
  "key10": "3fyrAFDCWDgHRBzGPi32qFz38sbQqBb646CJNja3SAGb1XP6AtP1kuMcog9cQ9ngJ2qsxHs2Ks8FzxTKAFcoXN5E",
  "key11": "48KspfL4dcTawRYdB8yC8hYMhMZ5iJJfUtis4YAye7x8i3uSTTTnaUZM8RppAM3UBgwBUcRKw4netbP6N5zshF9U",
  "key12": "2TiZti6JgkTq9tPgQf6LwRitgPGzv2wgyuCVx4NY9fRTzxPBqvsd9ae6VKXH8NnpsKcdannHSGnrQL5n6jvnUaaq",
  "key13": "2rf171EaNbwxWc9gVf8x4HB3HkwyPfLvdL6X8RXTrHyVSdLqM1HBDUot9bCPxR7wcQNNWLbLj9h5ErxpJ7EAPUoQ",
  "key14": "5kFXPtbcRNkNUWwxdjTWR7AdxyvSDkVCjL84knU1DnmxqgFNyWPhE4XXP7BRkBmwq1wbYUKg8YHSMdvQSZt9SxDG",
  "key15": "4LPX5VcivLCs7SQgGYvHKUWr2hXcG7YeKbrSXJyFRsC8aWsNnXbvMyNS8mTa3PRfEBxh1bUiL1Yytc8DPzkjHUZR",
  "key16": "2ZuAiMz3MzmV8HsRMexxaZGhus38aHSaqKpTJ4MFXW4fWEaAKsPSgbWo64avAESYPuToJxr4m1taPpd7UjQk9EsL",
  "key17": "4mwhxLUw4ZipHTEu1mdx2YrFimGrfxrAN1aboLQkMqx7GRKZDTpbDREMaNEM3Q42UPQkAMhrWDEuMq4yja7JHWnz",
  "key18": "3yuN8QvMu8qMvhPV9QsxbLJc6pV7us2vEdZq8SonPmFVgWrrgRNEYjZzPyfegaRfXx1NyPAWGftV6oaFGCdXmmdD",
  "key19": "4nsXDe6DpbbLVeuG8rDnmxkcR2qMpFT6L6RpPDo6vgMfYN183F4ecwGkYk2f2ocDxw4Stez3NFK9Zdya2Pw4FQEi",
  "key20": "3ipofNgf6iYTPKuQ5FyzwnbVhxqjFQ2nG2YfMrCMQoCQQTqaT7eXNszoTZtszA4Jr4tFVvor8KQmR8vgEWmxxiWR",
  "key21": "mD9nGA4Xc3dSBtzWVe4ws16jkZQKmHN9pPoEBNs9eg7wyyKE2UoK4rMKkmM3gzMj2Ruknv7CFJWsz4vaf9YAsM8",
  "key22": "2ZYpbtn71XX7fQteQnpSf8DYHnp1sKCLnpkwbcYiTWAdUCughH1DLA6h5ahZWCcEDh8gSRXR3AyX5woGA71ZhM96",
  "key23": "37RroYL3CeBxN4ZzDnXoPNwnS9bMgC3VEGuBkKfvjKLF8HHMuueLLMVsTGKmVB44SjM8Fbza8hmWFKU3gq7ayfos",
  "key24": "3AWnwhgCxsiEPBwkJLoCxLJcFa1ARTeYYoBiTbQTyyaXmUSzubPELi3jS9omJDUvFQf21nXcHw93tEr51HcNzmK3",
  "key25": "63wBNt71aLED7wE9iu4DGEPXgedvgPcGKzoctBkJNnmsxDf1fZaifsVq4TEy3gVH8YgTti8fVwVAKM8s2ggojZAu",
  "key26": "27UpEK5nrYinVdmNGPZjZZLHoPZFpsvY51wmtBHScnW2W3ANmMWPtKrJr1ZY8VLAMxozLFNeC64rBzMSVtpT6rqS",
  "key27": "5UNF7HKRm5gcuvKPEeWRv9ctSegu3BgvAjDKKAanpsc3TDUk8Stari8dJaY3fYFkB7bbHT9vBRgJUyZg3dnTKCNN",
  "key28": "45CJP9sSK9ctwXvYm2rwyLHw6kLUK95rLwMdcsPbLB1Jc7bZ2mEQXpxUFYDL7K6pMK7o8YSJb6886d1P99aCP7W4",
  "key29": "4MKfnjjHbnh22DBkTMbo25hPM26n828mqk7sqxjMcUZr8EcfCr4FyXs8G55bdvVS3aPEd3QTCS8w8CEyyo3g1FPb",
  "key30": "5wD7gqyZXj3cQHzPuU9ebpeGVjtgeYxN7RsS6jaN63pQuvfW8D4ixwyfeKPXkv892YPgTTi1U9WHrgAJgsmuvpL",
  "key31": "4WkMCYJcFyuMAxD5z2b3c8S9SuVG3Ggu3jEAfVaxq2j1p81L9poq2Y43uHLzWCuAA1s3Tj434DFWDhvBViJsJsCZ",
  "key32": "5bskTs6VnbGUfshrDtv6K4d6FxLgwy1NfHbh4unet9Shvb3RKdT2nspZr8gEPg66ZBPEAucbgLkQnRCYCzzkhCuf",
  "key33": "31wnxV9F138HPTeq2uAGni23FZ1TisRfFjCGBfh1pQYS63i5ZGccEUnQuto2926Hxzr5uwqfMSPd5dJWk88Cjk1",
  "key34": "515rvhPwuu379EjoeLjJhdd2zGaWxm6Wn1WTmC5TKaKUzfS3K2ij7Ljkkv9NDUtLURq7YmiKR46YH6DDMnCeDbuU",
  "key35": "3xAV2Mc2NLEuxc1afUGwP61ZbQTzankajAx6GSZuPqUDCDoo21jRF4QTx7QGKmtt3qg5PsEXQD9k8NUhXfNednPy",
  "key36": "y7Df2dhCxD9V3JY1hfTNFPDE19LGAYJGSjFBHhZMQYp2xvGanE3hbjrHRM4z3a3E2QtYqzkH9LEHMuB17R33wbo",
  "key37": "2KFhJcfbkWfYi3gf3PXLvAArVaDo6sPxPH5LLPJbcoRxmUtAFswPtrw81SrpuNNiU7X8aZuortcDKZ9CJWBdK5GE",
  "key38": "664tQq2c5eDtcvxnyqbJmBP9RWks3BCzd2ttAQgr1tdbr29B4bFLcEwk12NAKKbecbwddexzhAjSGPokAGZUeHb5",
  "key39": "58u4JY9PURen3tkS6nGy9B64zmwaF83CdS1iLN4sVRYBM9MFYjhgbRsdn9dd6FiHpBZHdWJFSeKGV7vb2GDa65DD",
  "key40": "3CBHFNMVML8CjQmKMi2uM5jifRA2iU5b8bzcWN4uEtj5kMJSNUePC4enezgo1YLzjRhHNgrMzQJmrZZYvnmmwRfA",
  "key41": "5MQehR4GkjKYF1EcDC2Cki6pToUX1Mujq9X6fH6TURi2kh2f4Zptf8CS933HgMjdVo1CUHjM2suQ37dzkEBixema",
  "key42": "2CkPofAmZcYytjUrJiCgJXmpu6ex8k4Ak9vU5rQhTH4z57PaU694buKB4dyVUrKiZdJB1wbT2x3L7t5U9kN5QQ4M",
  "key43": "2sYSuopQeHnjzNHWqWu1unaQ89ZojoTXxZ17DJtY8gENGQ3B3ERfiTQjvbFF2cVcU6De7u3dK5dt55eESFgq91t8",
  "key44": "3oQ3gpoRMhDhyC32LAqkc127ZgbbK2ihC9Yx2XjU3o8S8CPEPQhxSQbdsXJihQ7GXQu9RCnqcbc5Fw25GTDPiyGd",
  "key45": "4bhpHq3F3ggBQySurJHaqL7UUvR5wRAdcnESXa7qU7qB8WSrjaDMaYzC8qjg7gnC5a37Fn2A6zaLxiDShgqTJHXx",
  "key46": "3K5tjMtpq1iWd8Yk3AdVXyZ2TtQFg93sZcBmTjQgfBLTJ6Urjt4xkwZWdUgudXhx5ZTXMCqs9qEsBgoQg9Wf1jHF",
  "key47": "4XxCAcZefULnkipioNkstBJXnWcsNYxLpkUA8xE7d7S2W8Ebbzx3n9tMXPNbpkitEHJH7Pfd922wbq5H8dfESNne",
  "key48": "5AtZTrM5htfiujhvdNkMkZz9jv1w8E3ahXGbzaDmSXuWv8ZkXU7NqciEAYa4qCrCqBjqRc8W2p6gcwn1EUkvyd8f"
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
