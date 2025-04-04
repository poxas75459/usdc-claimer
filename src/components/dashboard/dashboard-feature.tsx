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
    "3dRGwC9mHPiAbPW6F919uhqyMT5bJpRjz4XXxqJVWpYBASBXu6zApEghFL57C326FEGjtfowXH4uvizKNGdqVHcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C7o1MW8NMcLU4Y8sHqdbhjo6wNDrY8EaSeoCtyBqKT2KobU6dbKT7RQ5oVzwHGXBJ2tTM88HQizZ6qH4WmbGmAG",
  "key1": "2UopMqxHY8NxG9pGnVDygiFxmvU7XX91jEA5PKuqtUfBuqAXHgaaJG1ZS79cppEgW4yZNAKA2CCQUNy8mwB9NUEQ",
  "key2": "P5p8dAgxmqXdEcXH746d9q4B8WHtVwSHbzDYdjn4UircVRiYRfyh2jqnyggf7GETkjvKsP1MzWCZysTmT4ogALk",
  "key3": "3sq8tJ86GDBVPW7oQehXpkcZeoN5izSC31P2D2gu313uJoGi6TUva6XHwv7zmTAT5zTyExJr3XDEpmGvSSuZqJAx",
  "key4": "5oW2GdA22UgaBuvSDmctJobGmD3rX3ck6EGhByXGt84G49QPWe732APvAwTTwgcfiKeNS3U8h2uDVR7DVbMzUUXh",
  "key5": "4dMmyJUggx2zGTgKX85MTwz6b5eDpCwTsB1CbpDeaGCVQ3WCsV12uWmFtevZdjJbe6k5hDu1J1UMJbGFj86b7Z6W",
  "key6": "5mnhRLYHMqXo9orKsPEbm3Sq9DxksYdbANeuXS4n7onK6e4j3ujDHNjnVue2iAxeVAXrzg91x3DXKFx8wEf3WVn2",
  "key7": "5it4LziX99z6Zmc5mF2QEhrcnfeE7nnzAtogzW4XZWKoWptRx6HiUzmfzHgTMiuVe6o1bPaTsev5Gu8JPopGXqhh",
  "key8": "44LNSAjzDxktmZSNZXVMj5vWG22LzUFu4LiW3jLvqQ8wEbD6RCJyRdT49mh6coTpbZJGf11hoRJfqEJjfdkfTfRQ",
  "key9": "3cXih6YUeFa2RooSQHtXhFGm2NWhPusVsYCGZGkaUSbgXWnuFCQRC3jFtbZKc1o45ZaDxS3sbQAxnZ3AZ4WotbMD",
  "key10": "3EKhGqZKitf9gUwDjChTKxSmevGqKira4mQ54kM3JPJRYUXHvtuxb9iUVt6VKjJWn6oyR4RbqR2aGxLXbe9bBYo6",
  "key11": "4B5TdskAyJRhu3FNGtmyKT4sNwJidKxMFGgstnei9Af96fnAAsKYHV1dtcHGMjHYka8bx1TffXAXgtDyDX4dFAzj",
  "key12": "558KzWWyCHPJhe267Kuv7LNr8mnnT87zEpgtWa4Lpf7x1Fivha9GuB9nzw2qYnpJpFhmft9YFqBiNQ1zjBDowRFT",
  "key13": "2HVicjeQbD3qeYeN8SeHHcHB1RdNdPfz2XsynBEB6q6ZcHJRqNgcvyxwqooryKADFrPBqu6MsTBSFLCGLbBMJMBC",
  "key14": "3jd5RnGug6DxR7XrjnnpxtaTETVcZD4MAC5dnCbPeyJzpHGugRohwUtgKaydSix7gR1yt2H4tVggSUzHyYitYTtw",
  "key15": "3ENRisyortnRHSMgMk6qnG8ATbF9feDTsLaSuqjQd3BzWUB4xXLYMPWosuVqX4pc5HcQkojwra6mboScdS3JnPjB",
  "key16": "2jifqEZjHyNkZL28RQA7t7sdtrRq9AF7G6AidViZeT3ue59vmLVVmM4mDci3FAg9eLZHJ1bsDz4NhtYrD7ipcLMs",
  "key17": "55mFybHSZaM9RxEzKruDm1ifw68ppWeEzG9RrFxSd2Q8HVRsGC9jJWU6Dm3CXjFh7V5TaCNv8yRecGVtPhc1nfFX",
  "key18": "3xbiai49EZw57suCnKxX3LEeHe1Jsox8MVSFcyo2Wk4NNYfeefK1NaMGdY1JS6t5zixN7ecyDJueatFFgn3k6nb1",
  "key19": "5kLdeZAay2ctcigFD2FKVgVHTtDWutsxVCjWAEKf1na4e7Yod5dkgp7Kt3xULN6MgQDwgeBdwwtSmgsdiVEAkkSS",
  "key20": "3KiQDSNzhKqS7RgcCMRHm46bYeBgPxcjJ7fAtvVsWTCYpFN124no4bKxgWkQC2UwsPXcNLHD1Abdss1mu7hpcV29",
  "key21": "3RryhqgkekNA2xZZm6UtuuQrjSiWiVrPsWSTnUKU4o8KMvatiXUXZDjVnGPfYZdWDdMJT2hwUJA6xNWqR2k94hCk",
  "key22": "5z4k3jHcabFsG1bJPdmXjRHQM8vBfuWe4Y64zC1q7JscwxndmSSZSL78puNruokEdpTNVHpj5aSGnnenYRgZ3Vxr",
  "key23": "5RLGKcQQtuJRaYcX3sFiHKrdqPMgS3XLPaaqTYpYN9mX8UTXvHJVekJHhLV73qora1nV7eiijNByPfszdT6fNFvM",
  "key24": "2dDC2bKYu5dWmyYWfbPRCqjh431KmyBoSNGiTXuwNzzLh7fYBSy9iXt9udDNmv9hgqwMEJJ4tDafpprgjQp9za9u",
  "key25": "r1wn1HaRZq7V6Pr4H9by1LzZdUSakMDPz1EsjCNyyxX5gtTDhXdhdzhVbjfdKqZajkYxMrkkXBxAKMK9uScZu8r",
  "key26": "29qfQsQDeEXnWofLhBrMKEZpZ2dAAfMRzdmtcUfgoEENjbQArSuxehCuBssKsMcu4x1M5pTQaeTdGyTi6eUtYt1F",
  "key27": "5eR2XK4bAv7Z3fZdcbaDQMNeEGnZYK1nYB8tmvm2E3QpXGvX5N2s7o5ZxTcgkoGTrgVeWdyVR6ppXnGzzwdhjC15",
  "key28": "4LdNo5KQZLUfTNhbbFDf5ksPCtqUgK3zaoSYx5PxA6AXCHnCyeCztjXa81ps47qvAyQudwDU2pAiM3okxqZunF8u",
  "key29": "3VxuFo4qZcgusc9DSSoLpLQetazn1gpJ9q6T9N6vjYpx5TV8fi1JC89LLf1xFfuH2fRhaWBqQrFhFRDfdUUByYYG",
  "key30": "4cbw6cR27JpCWk9UfjuJkR5TrzjjXduFeNMuUJ31FEF232G5efAvRvuzG3kWY7xJEs9BFt1vN1AthjtvYXRERovV",
  "key31": "2t2qgPJGJB9JsQY49ozpXCk5V6tGQuLRWUYQ1NQfeMv7mbvBxi8WL3w8HXjL5w5XSbtnGzCHoyRGd2WJEvwXSgcP",
  "key32": "3Jy5gc5CYBcJRMaw3uuyJ2uF8WvR3AoRTm6bZWwK1333VWUZNpvorUWzkwC4zGk1METmu7ZB7WuHZdUuRt162E6V",
  "key33": "2CKeEMhM3J8bTJ5zXdmjH9nz5oJogCMPPRVAECTRj2pJGTndXXMSuaGnA8SFAxYaFgV9ZLQEz3F15feRSYBgSicn"
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
