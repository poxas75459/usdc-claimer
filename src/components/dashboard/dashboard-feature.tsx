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
    "AeyHXz2dLA7CNiFr6Qtww9XsQvFfAL18MGE7rQ3ba6aKDNKXBuKhH1urFiZcspMHVxRMQmeGEgXj41S7s7UkneN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ujQYuWzkSiMHRoYhwYMfpfSE2WhFYi788gxXyZXaNwfYNBEs24gs4vVUFEDLjUR7hyXtLKGifyNKFAYyBagCfbn",
  "key1": "4XrfAHPaZeY3uB1EkwXk7bHavLG2Sv6yPZRunewSGikrmrXux9y8Vq6YDXizFDsQ4ssqGuudcMTiuLR5hisNi3Er",
  "key2": "4B1XzFEBCqviHcBG8uioY4cJJ4AAtS5jdJsZHWGSDQ56sGz6xVLpvKPQpvmpsBEUbgVUVmWUcwjp4McdcLCFoyvv",
  "key3": "3yHrSbwQwEiMiyrAYBcuewtUZeqsjXdVgTPvtvPBPiTWEk5BExZTJuBUY3xj169iggmnCDN5pZDkSdqb8fwQkdEn",
  "key4": "2eeCUCiBiMJifMpUD8Qs3R8EU7FPzsVufANrt6rL78TRRnCHcMLRKFLhBkkbkNykpKiuD3JPGsQGtf9xLLw69bd9",
  "key5": "3CjSeJW2LgRQKzUMtnAUa6rL6oSuM9soQHKPCEWAffWA7kcwXWkz7r2RMzV3aovfnUtGU6nmGqF7ne1xGu4dN931",
  "key6": "fMF14r6x8973KwvvAy5FJWCS8JvGEuTRRPxNEHjPPwDF1TYtjmrmtJBjg3vBuagqoJZLvxJfTauq6TuG7fLYFGu",
  "key7": "3c58NXiAd6eBRWRFcxxgg1GkJ4xgUuSerSHA88jxJq3c2QUpN7vPsm75bFdfS9sppvfVHCCUdWfvTtbWuTSyzzGo",
  "key8": "Nysq1Zg3C1ifjZewzHNMBNosSfR7pVZiAU2jYh8HjaVzsQiFYNEXdYk3at51Qy6nhtTFiyNRjiFErvw6HFriqYk",
  "key9": "5X7KuXTWXy1tK2nsnLstWmXRnpBf8tkQXoN3UCK797SiHtB1J98qUsYnKFxqufxBqS9pfepNa3ogmZGmfeB654bo",
  "key10": "66VXeR2QXoUgDiLA1UXxSnu1Eb7u8qVzTyLA2avwmRJgy84YhdB6yBm5r36VDBVV1HdJbubjd2o1yAJEBFAWxKz2",
  "key11": "5byxancSuLaip7SAyrsAqCxtdzAzm9Vtpr4zGSoCPyYBggtuYyqXH6b2h5SWHnSQUeoFzoEJcn8dYigNKSJjnkTD",
  "key12": "k68kYqhSR9wmp3r5gXm1ev9un5cghvmYQLLhHfVEowmnmrFtM6rZEzBJ6qBumYfWQ7UoWJfCUynimbGZ5sgauUY",
  "key13": "4cAt9WBQtqqWrxWN55qKBLqv2dDYM3JVGjLhhg77MFJzfkB7WEShfroYYjSwUL3Bjc8M4br67ofsESfviQvH8DER",
  "key14": "3Z7iFgvWC23LEAMtPKSiKiPSgSvzd4MPHab3KXXhRr7swySdHJy57zC9WbrH5wAT3m13ojmfcs4V75tYipvp1DJU",
  "key15": "2A16LxPYqex4Y1TQpCfxNQwGMPe8dsSan9YGj4SGdoVRwPQLBjTSUHDPdX2AyF32vYNh4V4h2fAw53TzRkzNvPuu",
  "key16": "33TwRwFrrCTQ3VeJioSPcv2LJAXyF1h8iZTv89nsJEDSyn2SHSWPZRnTck9DFMsooyYF6pASKvnTeWHQbsDJFfae",
  "key17": "5Z26wrx9zc9HyhWLZBjjq9mLpcm82UiJNanRjQyf6qL9QjB98N85ZHw6gUNhvzr3PGTXKWEzJHoConrhrbDru6ht",
  "key18": "2woUuz1vYpn1uML47qnQoYWyTWUitN7pCeFGmQLT7qsZFrCH1LexeJa7hokaW6t675LV58oYZbmXLjeZCMCmpqGU",
  "key19": "53FYtgmFePsfsyLrxQQsWoQC8T4QWTAf54kxoZTi3Tbq28iE3SYAjNRtUVhVw2CCT4tayAdvszTjv251Dk6B8ddF",
  "key20": "4mCvWJ24kMmw2BqzFqia74eSgLsBJYx2XFGH9kTVn2CeFPJPkPRXY2WaW9Zhm2xHsmojjxbeo3fh92T5BE9ULDEC",
  "key21": "5CA1bu75bJgW5MyVhdErjJFqpKKHFcjQuAQ9Depx3KG66tjdW5X9s8s47E29k8uxp3gBca3Yq9NYSUcnaxLkSj4N",
  "key22": "3EHx4EH4AUVDij8GzkTkQeuDgBZJWXCTRhsxHrS5RaUcnxBzdg9Ppr9Kd9VhkAQ7PizXk4XS4ngigQy9KPfU3FnT",
  "key23": "28XMsi7cJDLJRB2Zc7mxh8nMcvwCr1wki7vDzdfWDk2b7t1b6h8oYWeuz4DZon4QR4DnEKTZSf36ppEPd2j2FoYX",
  "key24": "33j8xHD5UBTuH28RbpmjhYAs1SybGFNVamwomqFd5t2HGsYYMrRkZPKU98xtk1pmDHiGQqNvuEeY1ex2UJRRddYB",
  "key25": "2XxVRtG8sZY6wStc5g5oDxupUeQrQUjaqV1avf5Ke4QrxMoWjcGiDqPieHKFSyo87YxAP2k45fqBdRD74KNKNiSj",
  "key26": "3ctqG9zBVE3nemhvoqtYeJHZzkn2Es4dh5EN4UqfMZxSW6uL3buDs4NG5MtfQBB5CBuespHPocxLdWJSmUrHBwzn",
  "key27": "4iEKZRjGdFczyNgHWnBeLPh5v8RWR8R2Nxyo8FmwUXpzd6Ap6Uh8pFjMPEZ7gvms65Wf781VH9k21aJQwAWFh2sG",
  "key28": "2ehTbFgzceXddX9V8mqwfhe9zjQ4VcfiRU2AruzJS8XABQBetfyBxMZnUsaPJDPVmo439xwoP9qZwEMG9T5JwUiG",
  "key29": "5DbfsyR98CpygAaAkUKWFvXSpQrKv4vBPZnJaZZJ23XKAxZ84XzcLqcpBARuP3D7KAbDXR8Z8LvpoqSEpYyJwGQe",
  "key30": "WPDnp34ABiEkyzgdzHtouGaJeXmAYF7ABbHY64FELK1G4EAnP3chUANKeAcNMXUfQ1NiKxzrYbjJmAehyUqubhw",
  "key31": "2NroBKBwtTMfBECLMB2LQe739nZuVw4vZc44kHAfiWZazYbMoe3XZ7SQrVP3xAfQfZ2B8pPwwv2KHNo9Le5ZYkZM",
  "key32": "3evamQgayjk19N9CwtYvaDaghyEeA3uyjXMTYi4ewLwsP9W8MZx6i8TY459TVQ34eRgwWriD5yzNdLUY6a8MnAeK",
  "key33": "3dzGwjFcaC52k5Qeho2svGEVVPwZxWkMEYyg3DyQjJqodjFWNmRE5oJ51sG5zehZDPNouWu9cuJbwYRuDE1vzVv7",
  "key34": "3NS6xUKkj56VsCx2cp9aHjYxsFuFoyjKPEc3BqhiSW5QvTCcDTWtVSbLBnJVoUm6iT8PehpqUGqLbab3vKs8GZaX",
  "key35": "4ENSJPx3LzghNXa5SAWZft5h9RW17uzb4uXwQhsaMPoKsdMFWHNnXxnWM6e9yxCi5MtKD8SKU5TLyX6RjsmYYEVw",
  "key36": "4KBy2v2sDzRn1p649GZGrhGUuN62pxwohNXBwHpwgh2VueWEss22iCDkEhMPWmmuVUM62d2XVZnjmF17i5L4xFZs",
  "key37": "5rHKXeJ1JjzBnd8BvRwNLEofnTNERgsXK5s1jLgcK9ZoksRxKJ7o5VcBiZxZyiaMrESyrL3zvL4WDn6Up6zgXYMm",
  "key38": "4Sx6iGcQF1w9dma5mD8zRPJbQJDpK9E2Wwc4uwFdL9jzEvrYdnwwaXzt8Yne9UUr1ty2kseRA3CmVxYeiC7DSHVW",
  "key39": "2CPobzxSyvGsEmPmaQgAhFXZKCuEVrYy9HRAnZrV1vA1Dr1s1mNyiNmCKL2GTQTN9gigXUzEQYcLNhBNSVMUZU3Q",
  "key40": "NyTu7ER9y3zHoVW3f4jydNixDg5CZf87v5p3GMwGTjdmjCEh8kFBSj5kR1GnC9nAgUMBDM1ji1B5ZotASmfmVpW",
  "key41": "2jeTY4yREdukcxSjQDRNt3wKjRGgLC3u6q5N2AH9Fn9a3VxGPfFdGgZmGQ3CPQSib4u6bpkqsKAcxzRifYtdm91T",
  "key42": "4KNxQG9BcwRfffhnzBLXzRoDd5o7C8ygbuwRnpfvNvaRHMFiBRjZHVdEKrGnzugVn6ymSwx9H8k9U5UHZHa1Sr32"
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
