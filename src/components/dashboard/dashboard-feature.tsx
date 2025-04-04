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
    "cpiDiV7RVMG5VksQ1jZtxUo6QYHPpKDdJBvNpWspsnPnGKTjiKP8wMTKRPsGCYTZQsPZmkMiT5yho7V2VoMmHSe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zMi2xmjpLz4zMPynrHMAhHpUezmMBeSTfc9jaCg5YrDtf9XPHVsRjYo7WoFtZxK81m9YyyaXFgoibwq6ZNA2mhd",
  "key1": "2RS4L1GEpdzz5aJ7UxP5QVLye5LeR66WjAtyF7eg6YW8gL1ysCPJb4BuED6eHNXMcJE2jDTNH3on36n1xGw942vZ",
  "key2": "4uqEBD3X6YdBVtqGvfGPosDj16a5izXrTnfe6d6J18YUMurBZ2h2jfW9MrHBQDyEvTPMvmZh8yqi99hjNWVsaHzo",
  "key3": "5EfeyHeegJaobx7cKQknFjJ4YhXfuYCyAGz4EWKVMr1oNG4QGkNAj64V1CZtaZfWPQmE7GhWMT3tGnERN1Se5w3A",
  "key4": "4XBiG8JH7k11EZCKexWEa5gKdHkvv7emog63CpmSH9w7C1wkfErgAgJxAtJbrw4kvjxJhjgEJjRMtyiY8gTBTj6S",
  "key5": "2E96fnK1rCW5wXsLx2ztqjoRSgWwsocb9PeUsLa71pTJSbpa5RL4JdgPSAUbZyk7pnXyKWcTUcPDu9nDSeGdtz9Y",
  "key6": "4HDfhiD1r8iavVCQEPC8S1WdTWLATh7eJVjknBAEDway2frV74P43S9gAkbCihjryBvYQSaHn462HNLv485Twxdd",
  "key7": "2fKAeUB5DtdxMd6cuvr3mwvU48pjvE6D7pDnbt5JqMwh79wpvxxAkwRsckbZxM1caejxxgVKXN14FAuDB5ngQhCi",
  "key8": "57s1sNZmthsSi9QFjNUXyq1jWh2qozw13AZ1qYS6pHp5Pwcn279nzCGJv4ZxB7Auhbm6jgmUmPn6NAdeFDHkv4Ab",
  "key9": "5YZcR7dutYjyEdtYBRCkj9k5SvpYxyodNpoSPuSMfYJrBbApBco9rmfkYsj1AyNknSTNHHCkMNopXTR8GLfS58Sj",
  "key10": "5xpFdkT9uu8SvQ6AjTXBFnYUAk1XyXGT4ZqifBDcToPMrgAJ3ogD5rE8yKZ75kFiv4ypX7nxuPNyBjQZx4xxrKnx",
  "key11": "2zKwStoM6EfEFwUTyNHDdneu6FFTuz2gL8nfUh7W28TVEnredjTHgnfF2UKM3qvxaWipcG73Z3sCoCNEDiGT5wuf",
  "key12": "4L4gg72dgQLifMpimB3y5Js2FZb2esBFwoaKiX6fghshfGYyXUxgQ1iTTGSS9UjPVE6hcP3MQUDtG2bDhq5P7kPw",
  "key13": "52sDS5KjwNeMLLBbtgLVW8RqPqXDYDBTEB21Y2fwC8RNhPJX6wgJQGWU4o173jdak16c7FtD8rKuUFGsQFZ2T4vp",
  "key14": "59Pb5YuQpJsnhbdRu1cu5563JcNhwffbaZHAr9CUsfEthtvwjighdniw8cg2AzEmdwTiiY98wkC6U5GVWTK17iFV",
  "key15": "2ki9znKpiqMCzrxeCkFFVaF4avag14bpjw5VDcL85VCmyBFqBnFHQKCbaacfmFWyiSVrMuHkJqva6WCL44pZkWx9",
  "key16": "25GXpyDRuaKZ3yxsFaN7pGeMvRxJsXrHzdwYK1g7Ewoa3J7YcYvcerNLfNdm8GFjwMbktTasYV1W6Yn2LvYVeJF5",
  "key17": "4SeciBzaYSYckGeFztvvJJjWUqYQdgWQ8o4jd2KxfLLDR6tceoF7YLJr4YDP87cfu5V38yqmQb1mVX9aDCYYNGhD",
  "key18": "rdp9jJPv9V3m4WtBFS9ZqpKMvVaA73jsLie1WGPNx4XnU2zHRyBdabFg9HUMYnX2oGxFPyizBgW7rd4oHbYM3XF",
  "key19": "2si7tDRr72fLpJRdzhgW9DMK1rxLzoFiMrWFkMLsAhKvGxeTmy1S824V9xS4YsWuh4qdM5YLuYAmCiVoxEZk4SK6",
  "key20": "8VW813Ygzfb5BJv9fWptY2ahTjxnw5ioTF8RNMJ32jVUy8bezr9zokpayi6h2Ua75SpnQMjgZJgxZP5TNCSjbxw",
  "key21": "3cMBF6D2tQwBsarwVGiNJy4QUbSphSfng2KDARak9bizpSE9kFGUB1EU2LDSW4mHEbE6LaoJe6h2yMtJNngaaHrX",
  "key22": "2LAJbXGv3Ba2sdu6Uu3L5YnPZUGmBDqMhD89uv1XLcYhmuYkuy2M4KsQBybMZmtptQ7Vh2xUAQvjykpTG8dogEVg",
  "key23": "28fEQpXqNzeGTxxs9acBdLcD6RdU8boXjvruedzkGu2TEVuhUDdU9bFcWLP6hdQ4mtDTLxp5mytgz9NKaYPdCPVv",
  "key24": "5BKnjTSExDyiJPtksYCQGE3GuvA9ks9SCirkBPFMLG4fMgPDsbWdgzUjSSEdUE4gXEBk8HD38KbE8SLE9SuYSbge",
  "key25": "2ESWQaeQdtEFUCuf5rKZZ2P7EDafLtMCdDFDadYjrmuwtbzj23DhkRe8KAnDEdLwNxu92VoBHVBHyvQtWGi3KqS",
  "key26": "22TxNNCLykQnnfb58YNgK9b93Zz8vMk1CCLLsVm6vTTKmCAd9rMUyXiUzXGRo9d9ujQ8aV6ULV3ESa8LXcMs4rRK",
  "key27": "58DCSaZkB2EhMtY8ntBEnrr7Di2YQN9UqwWbac4BnCwFEtC5qFXFA14itMxyhRx5U6RWcDhCcB3FkPFTpfiQCgpS",
  "key28": "33V1bESw81UM2wGRRWUYdBcj9n2aASwkLBPheEz3S1YNBpKmS5tx9qs5ruKVHEFsSYTBow34uRduxUrGfDT6hbNy",
  "key29": "kdvSE8ZHcTNnxSMbjw5TGMfRUPNg2JMXxgFH2RyvxKJvq6iVfz4oLoEJVGS9VUM6DxgLwcHdUBYDEG4rNucdToN",
  "key30": "2SgsYru2yBhfCETi7Bq4hxgD9kdRiUaRbpSkSEhJ69Z9a91m1ApkL71DupmCgMeVezkLnc4Mfr1puDRBHXKqnCNK",
  "key31": "3oBDxePAYaxHbHy2oiEn234YQYiMuS2XVz6pz8GgGC3vpG2s6yoP8RZRTbgjLpQ8bBpdptYV92HJnrN9DBReDCZ7",
  "key32": "3cim5brvZYpWFt66K5K5Zg24R9F3VnbqthCuPBTc8gXE8WJZRUUSTZqfSGYC4WbmmMwWYkz7F2wuJKPeE8rDcE9J",
  "key33": "48E54rx8AKt289mAAcndrwUfe5usCuwTKKnziZq42MrC73Qt8krqLgaYsg5ZU8qzhzmXDdcJHUoAc2yv8HZAVogk",
  "key34": "4kvXnwk3TD43aT2msJH683zYe1uLDq98DjCumc8bjFSRZpX8yR5BN6uph1z6cynFJRTwyfffeX3ujMVSZqBJ4j7c",
  "key35": "56wP8zFftQoCLavxqbX8wyNNYDfgvVwK5UWtUJTahmgpuRKfXjTePzDB7u575KEBRytVkLsM8a5BGtAQNM319j1K",
  "key36": "KRhWoWCN4MCWEuuJ2wQPjQFFpZQthLSurS6sAZagEgUiyqVsHt8yL9PmuuMm7G9k1EUHfNDkpaER8K28G73uxo3",
  "key37": "2WyREYGF4wLturZrqCNTiuMSskbfE39TsKaNgu5xP96rGw2TYW95GTW9iqTMkU1b17ettfdNHYwADNdpnUbxiPhX",
  "key38": "2hvMiV76yw9yJFXzGzyerDiJEWZCMtwLnYjaDsiDpVrZHbPU1oqfhB61dmBjBvZzYb7ytDK1rctvYm9L26FjeSLX",
  "key39": "3UJyTDfSGen8HGqZj6Rc4Wrhrn9NKWoT6t3Mm6iHv1kFNaMsdm5vJu78WDYuMqmG4yoS1CV3xmdCVEiWKSuuPYAK",
  "key40": "2UGCa6MQDG78hzisC6sFDcfhMFmKi1avsh8xZpsephEcxC35jYaAt5kxPnS1qsuys44sdA3wJkiLK15McwUtBCcG"
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
