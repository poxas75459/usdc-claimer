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
    "2jA4E1KBs1yfY97KFLXhbH8FTewUjvQUnunbcdpxwPLxXPch86Z4JibuHdrybADfDwGCcv8TYzErLPgVB2AnpLH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P4hFHexcD3F2CFqZnLdmqueFVihbNEo3sxUz273XHaGF6LB9WMS4n6rAgKA7nUGo6cbtbP5soLpeEyz45j3W5nz",
  "key1": "3qZv4ye9HiAvLfyfdeayjj4umwRiDi3QpPwbvDBTxNUBEWmm6ZVRLg8n3RqPcT2MGoSVPWUrpEiMekA5PEXegtGt",
  "key2": "4GQnx8x5c2Uc8U3NdNYt3ZBqdMoucLrp4cv227XqnVadEYBxuRRuPgVPYkcTzKgtMV529d6SdRmhHpvDuZ9sctd6",
  "key3": "2EyyY7vFYZMCBABeKS56GqFQ7sEGtuRwkJTJECTij3nbVGa5e6LnmLoNEiptYLYAmPS5L3G3Duw8W8WSpgTCdRMd",
  "key4": "3Wbyj51s9wpv9KM6XstJB48vugbqtxeDj7yVvVDAPj2rdNVpQqUnjgVqq28rg52QzPA6FQgZKGdMxgbqrvEMvzB3",
  "key5": "54ap2map2a5Vdorc2MgBJLZ2XHMmcLZpzGXQfgzFnAW5YZ9kUNvAVJguMTTvXVdQzMFRUVwget2eosScyNMf2RN9",
  "key6": "2dLuEwEGUQMv6o8u1XNbcrGVf1zDWi8oHycaFJWjrGDK9kgKuG16TKQ8Czd5JLVHWzyGxsKcGX6g3m6sKBXnxauY",
  "key7": "32zrVpgc3gdQ46Mp6qjmd9aVp69W3bFCPEvpWWRRq24Q3zHHxSQVsNAREXzh7Ao9BbhpiFBefkh9HHQk4up1xHJS",
  "key8": "3wfPFG1PXd5LDSjkZAM44ZnN2sEwuJj5THqep7fnNKn6XLvK7pFvzASX15FSx3he2dkesnyLEpuKFciP9qFveC5L",
  "key9": "4GtujCgYgt1BbXbdUxyDD9XsjrkA31gMx8E2zDTb3zZQQjjK3yVUXekUcTMnVT3CKax4t6Rx9CLmXpFyXDfJjvTV",
  "key10": "43uLsYC5skujR7qmKDgAg4pNPVtWXn6PNj7guLNK8m8J6TPLFcXYSg5aQR93CysGcDA2CKcsCHXjirvKSiTiz1te",
  "key11": "2xo88xELESALG5MoRjboFQJer8MrfeZVLtuuMP7Sq4txpbDWKZ4KHf9a6N3jNm2D3AzWsqsSrEanmNRn2FDM2VjB",
  "key12": "2fGGdiMHU8LCHKfu7ef4YDkGATDp8KBbqLBbVr569M5foWyu1cTHwwJWPgYGamiZ9m1LPLTz5jsTftrjAhQHA9Xo",
  "key13": "2UCBaHZsZCJbFE34M1mMuEES7iKBwqHvZ1nGBaFRRgUoYBLRkW7qHFVtLxrS6vAG4zdjC6k35WuwwWVf8GqZmYV8",
  "key14": "2WAEFGRnD7pNxr5nonTXRet6Mf7nXy9YCCea7W7QHu3odij8vhy8NDH1eLb3tvxyrRkJ4sr8mWeppzSvpjvxKeDC",
  "key15": "3c65pt4pLmZhnE8WgZfszHaPfYkBXCGx2FQb9ZwnTZ1nZZ9HchiQHNBN1F9kbk7rVCeSoTtJ3xqz1JgTS5HdzFCP",
  "key16": "4AMfQCpa1k6FaAKbAy1BwfF1f6AP7sDuPQG7bRXc71AmQYv3mH971wh5aZsBDLxuJbQ1Np8gFB2UraPRi8LZXSDq",
  "key17": "5iJmoRcJgjWvGTXeCKkGHg9YsztDHUtX5R5KYvVh3wQxW6DfJbEQYUeSsRHz1rU1wrfe2SHdUdKMy2tjyMbtw5sT",
  "key18": "BWjBxdWtt7knCZS2DUVVEfUX9ywPZ7SsKTvyX3Kyu9axG7mNA9myNRwiZz7g79s1vfjyoRE8ghYrb1MafVPAnaZ",
  "key19": "64qvJePuEj8MBeEYG6YSm9S5SNghLDXDRi5KeiB88CEGZ76UMNQwbaxxKphdHq2fVdER1vTqbQw6n5wfvTYMXNyv",
  "key20": "5ymzsEZj9JmsGSBB8kdkToafeFUN3rCSyKVAmnQfFQ5H4LRUZngomkwt34C69TPVfgi5wMvBQFqwBRv9sT5ufnVT",
  "key21": "3YSfursuNY9SN69THLZcxC6agud2kccPKsYRALFHfLSysY1RRrcy59FeHrDJsqmD4pCjHLFUNAmH3RKkgjnpCErq",
  "key22": "5PWXuwaQR8w6Jke7UQFyHu3ogjEXDEerkx46xbSSNpwLu2dSHJdjequAK3Qfvqw72PsFHj5bp4P3JXSeM6GsoWG6",
  "key23": "253TvbwvARdQReaZ1DL8CvdccWw6njyNycFdhGpyi4wTCRhTW1irv12yx94rZmgLVErmnREFWpUVhhPSwfJLHrii",
  "key24": "2kjbpBm1Fs3BxD41QvgcGLHub1hDnLhfsaanAgKXaVMzPTTawUVNkcQ1GY1j2RJtyVobjfkbHeHrzqLdxW4wCtR6",
  "key25": "3asLSRYx3CtEwZ7GnGkwKcxbXbj148wGTXM3KnQhwvmUYF39oMTxtYCmLGhzUEveMYN1t4uFco5SGw7qBvtDRjeh",
  "key26": "4EfJ5zFtaUTZ96kEvBZ8KFMX2pLhyeDHouike64DEoApVUjzNUaZzjnaScEJgwmGmeJgYvDAiSgPpZgDayEj5mBP",
  "key27": "dxAcmSAd625gFkb82MXt83viD8HfAieV1NjWzLek63Y8TWGoQ4gbZv6jeEN4wUEUQfJR1dJoKcj8v4YHsvQ9osG",
  "key28": "2jSpv1zZFKgQh36Lj4Hb3e9y8kgCpwXu56GprzqRZ7E88P3nTrjUecLTyzRvLwkXFWMTVsu88b75GqBSLRZk3DvA",
  "key29": "NRuCWy2a7tDL2tEUAbPGTjswt7rQVeX873t1LycZEppDUW967pLAhruBVFkfBwA8SWgLqRHKcfERTtxZD3QpDAn",
  "key30": "2gNRcXo3zB5JkQJ7SiZP6TVHRMTxjA3M1TTnXjJmhPNDca8A78yXHDNxDk5KFNYejNg6YEPGXYMvocE6USJCLRbd",
  "key31": "gbw52QjwZGxR66CFp7d3zGhb8xf3jm8oxrV9YRoi1QdUUD7M4R6AsNVzVFMdf3NJo9wFaqkjy1xA71E7ZG1nkqq",
  "key32": "4CtR8JrPvgL3ArGhRAXbHPR6GR658gdUJhTGmQvJ5NgA3fRsVACbpjxkgJ4ULdRndyGBEH6VZkWVXVwwyMEiZYps",
  "key33": "4seqjmfW5DqKcv9U21fz6DFPy1iu8tGAxNCuMFkDCmf7FqHVEDJJqDY1EQdALzJBZ2Xqbn7i636aZfYhvVh9Tv9h",
  "key34": "5zrR4LzSL61RRsKEwAZYJbe4eqTPBAUaS9SxhGb2dLBjddcKFfKvLHPftZAsAoVCLhFykgN6HEB8U8hSSDk1jM37",
  "key35": "4mWHcqW88AyhMHFS4JGCDavY8EBRy9Hb2z77QFF7WNbTdviQUfGhfWt8jW3r1WkbtqWb3PXVK5zypxuMiNMw3t41",
  "key36": "3bn6ivdpVW2Jtih3RfFJnDaFbdivyj4gLfWiDApe32ZvFSzjbzaiVBiqxy8H22Gvm4R9zkW2xtgiBggGiNayXANF"
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
