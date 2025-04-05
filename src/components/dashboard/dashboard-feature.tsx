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
    "5Nf1UNkPMpZECqBAWaMCG86eeveL2ghKEpezufTLUC6ar1iJNbvNQtCNyH5FXxh4noa2L5oTnk14tvzhsK6x855i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39C9c9G5iPYSwyY79ZJqTJFb3NE4u1oMjQWLk4joWXGvLcRLFsD73V58oCiuq5oHYZm9sDTSHv6jHwkWbQasifgQ",
  "key1": "23vpwHbH9Njb2dELGqiVwHybSG5wWtnPRVosXCjptJxG7SSXy8QsqHDbJY9rWTj2JWn53Ks2DNd5w5pJhXYefhvY",
  "key2": "5GK37Nom3HcTkJoBYCvo5VkKNfKpdYNXAbyApAbUsGLArFh1STmKZY1Ehr9QcHUbknRmnGLfCyiLKMfaGuwvjQox",
  "key3": "5nzjdXhsgeTpj3WhmPgQh6CKLLgQ7DAeHj1m8R1mkizkPUGGY8nhtzuRde1g127zgUVmZ8rbqTDYzGuvi7GPThcw",
  "key4": "3BJTykYG6pcWGkLYNtYcANWGgDXMZJxUfHQ7m7r2PnUKaiYzuN8fmBQ7U23UQroT3E1CuvBQfMqDJ9hLpJE5EQym",
  "key5": "2Cksnm5etU28CzzHSrSXuoPP1M1GD3sj6TryVvqTaMxuADJU45jquK863A5hhb14eNPYyWYgtUJhcYyKfbmimc52",
  "key6": "5NPHVzfLSbGC71WwrzhnrRobrbN9Kn7wsGQ1ZUPF8uojP1wyiLEMB2bvLseGRXdkyY8th1jySLE78ijgFokGwfEW",
  "key7": "5etDm7HTwg4NjcdXmXtNBxPSpUwNq1fWLqJxQmVHhZMeWy6KzbM9XgByPq1r2AfuM56bsp64DkiJCMXXCXYDFDLH",
  "key8": "EwmWzTB9qJqNGCXZCpTwtWHR7crHzsHFs4pQbmHC8aphTdB9tRLaNe12TBS6E7pAziWp7N8GbWHGxGoXvBKheq8",
  "key9": "5u6hdw9EDxYciPrC2dwpBibjDPJQMVzbXhFnGs2GGkyZasq2xtxAioZiCPxz4HEWweGr4jXeSBS32TEuWtq7wHXB",
  "key10": "41E4b8SjQhKvGyCwhXG1NQmJvwk3uz4WB8rBzKDyuhz5QgRXPYCGTZmFZB3b3QxMWCQdd9BCTQNSjYbW3NuqeBvb",
  "key11": "4KAf4jB7oa5A16S8huZ9uoPSkYdm2sb5AQmZV7C5vkApdoCqcdhVXzKv8F8oSw17yFACAzx1Fc9Ku1X72BBto6oK",
  "key12": "5JXBxrFHxPJXVs5LvU3Gza6bo47V33q5TYZcBfSbA2Y8FURtaK2LBEtQ8V2dfGnENGWLyTxswQ5BeSexQmT5mrbq",
  "key13": "29gyVhy1LRRdLFoXq3X1RniJWyXUxQGhkoH2A4KU96AJYTCE3wZy4zoxE5HgjhPDWnBnBvyMcpSH175Qe3McavDA",
  "key14": "5d3L8E1DPJ7ZyNYefmw7st48tjyK4jSjsHJHHm7WYmCvJBNfDHWNjTWi2aAWEBQF9jQbcULBYprciMQajXCJTJJn",
  "key15": "2xnpstoXJUT1qpa9BxpKMPFWcqbgKizdJjnEuwxHd4oAt7wpQmxUxsedemeWuwTtpheGR2DEy2KTxcJ8MS7EYCpB",
  "key16": "2nwzkcavNm92M7qsiprs7jZtrbjsRX78Y25XHUnygsKwH9jjnGhNZ9wVC4rVMcnvkp8e7tPF3MGX2tA9ZGG23e47",
  "key17": "3owD8x2qRcu751bHkZvAHoeRPpi675SmeZL1aUqiDKe5kWAs37WrSBSj79BArGNfRsCLVNuAyeiUxVSNsXBNytu9",
  "key18": "2WeD9S2WkmGUNYb4VLzZvamtG6AFkvGCcPaFH9Dzw7rhaE2C7xeVw4SjgcpCRgPDXU46Yx2WXBhzUsJW27rjQ8RN",
  "key19": "3psz4V5LyBebbXcjGhHtB6HNegzofZpLxgX4r7TFK6xij8pWGUkvSfj1rGyJXR5aVqQDPpDQ1dXK3JwePt4b4eG8",
  "key20": "5pB1uzy7ovtVkXF8h8okyZ9y7TJ2twYqzoincU5gqpqSXSsfDbYxPqJU4fAtRf26VdsKyAapQQoRGqLW8aCTyLgj",
  "key21": "4ePwzj58TFNN87ao7fUDPtPrqNhwNhz5wzHSGHm2M1JtUzQUMyj3LESUpuWcw3ktKahyPd7A9neKHJ8mHRR2Ypbe",
  "key22": "37fSgDPce5iEaX1591Yxvz4uhGB7hqcz3hYZ46FvHaAayZxRZpShTemggxX5TzZedsLb2wkyZoVmJtYb9E9JCgLF",
  "key23": "5YEjdojDiVeXgYboYX1pRUUXDyYu6oh4PYSZD3pBk7r7CuWEEHUEJgMvF9kM9aVKCZWxZvsKe7ZXFx4HX8cM24Ak",
  "key24": "3SJEuiaDMyTuuGbUtYCAXFHwtHV5HsMCbyaa4PikvkH3aL1Fa5URjpmhgrYWvvQ3n5zvGUrNCopwA75iEbhZ1qiU",
  "key25": "5wrug7qS7VTWCEf6uieC37F4ZiZBxnZq2pQpE2yRnAFSTtrCB4FeZx1ka2YL4mqC8uyR3YTKYimEtGnDBeitDD73",
  "key26": "2T2L9TWUr4b6EHrVCWrYsrnUyQ6RupiRtugvCmREkgePypyP6kAX2QzYJfD1vQU6nDhAHcAELvYm9mLA3dZyfrPN",
  "key27": "7xM5oo784W2UGrV91qym1S2vJLJzzCNeWPaAoCGsTvX3rtfr29QQRELg8abqeSKF7VXDsbxJmD6dmoHscSAi9he",
  "key28": "32rD4EtBCrupWvfedWfQihA4T8aauW7KxzkcjGpFAaAbjNnmV72UEQaXc9uH7feNMXnGQSkTANthhfzjHM1BBZLb",
  "key29": "4VySvtQfSack63pWuLWrdYAmXM9LNL5iENXEetCtuTd5a192tjWHe2tK8jvD74vWw97rmqp6ti66EXA3ALiivadv",
  "key30": "5RJvBh6ghxCxwKU9k4kf57gTAumnyffRLTKitFwHWsPnMektQ5bcNaJ9QDn4zTTQygDGCgquA7MwCG2376noPxWo",
  "key31": "4dN72FX1PnuJfPMvpJFBGEU7JgSPeGRNfmcYWP38CtLtPLcshHdF11K5TPHPkFSCoqjLqG8h87Q2YVyVLTRejqnv",
  "key32": "3iexi5LTHtHm1d98WTSLqWfZUS6euTwUeMZBnjm7MR1PSuvdAAcqUGHGCv9oibQZ2ph7rnMKkAtvZLiBdKfJUvoE",
  "key33": "44fCB3od95nyzT2HW9rfyfsw5cSLL4TzmCa1r6QwDwPKrTK67ah47niZWJ22X211jRceoNRVML2oivnU7UKaREzE",
  "key34": "3e7fcLuP74kfTgQvNpsc1y7gppBJ5yMcFkMCALHmoCkFb4XPDph2KTVgiWYMAxCJHUADmkH65a9A6nvgh6DXmitR",
  "key35": "5jWgbpzpxTxF1hDjftHTS3yYh4CJG7vj3yLYpqgvC899PWbfVhkG8oWLR5SPDzDebWnrEcjEz4NVnRNmgZrgSS2A",
  "key36": "4E4SGbiVfsA83m6VVBczMLGNf5SnA5ciTbggeyM4tyBwUzjMAxfWHVpETtq7BX3YC7x7wGZCSvuk7qtgas8acVFN",
  "key37": "63sagi7eBGL6hX1mgk4ajC687zxrcYeF7tt3tTjnCjd53UM9Z4FGm56ZEDJjthKq7tYdMsuRiHYZrXK25EwGFcdn",
  "key38": "4dLtSFT2FSHFJymU1Kgs65qsvpbcsiGiVqi4V3mYGeWkynz9XVL3uUKt86gXBHeApNN9aiwd7qAeTcvi9wU1SAqK",
  "key39": "4yUQTbfUvSU4yTaJvQYeaYqiea2wux6EZjMW6QnV3WvZWcpqAhCkajEK6234TS5FrpLHoaPH7BMcyCseFoMmvvtC",
  "key40": "3bmaFA21DnMU4kR6iXSMVscAC5Hqgcx53y4VvV8cqYc99Jusu2EHC4FKB5tzE8igAr82JYy98QXQZFpoB4TFwjya",
  "key41": "5H8SNdpemoQzTETZLKikQqzPskyynJ1a6estHtaVa3i1cv7DDQLh1jmQUFD5z2rcMNCUQtF9Mboz7xTmNVGL8tEZ",
  "key42": "2J6qFT2kZ8uXfVXnJsL8f2SeGxVwNnDSDepUNmrA4ivhijWSzP4CCG6p8wkP5RXTr4K2vqrZupCVfarayaQJtiwi",
  "key43": "42oDzLGVQjwGLBsP9D8uKFF7LSqaRaQ9xUPh6msTZRQF3rV5h4JAXuSDhPcXhB5SFsTiCy1ADoc24hobAcX892ZB",
  "key44": "2UWFs6uAsv11WF6vgZFmHPXx2VACWVQeYg9J3bK6ywdcmi1bAgwEMxyUCnLomw5iLoSDejh3ZXiDhdteqob4SUcx",
  "key45": "3pVeyyhksXRZuUvCmJ8HE1Uc3U1rY5Bh3NrjpTsnvjUJsnbFDxquF2qzPyfsJBLyA1m3t9cCdRmC7gvjpbMQdCf2",
  "key46": "3QYaJ8jytBUXYnKGB5AY2x7o1xwfVcC88jzjASSK1oeVo3ujeCwYoMCN1XiecMFPJrbXJ4eLVF2WThkSDbYrVXqH",
  "key47": "4V8Pu59rwYwZZEVDqaFM1bLg41qsyvXZhH1CpmWEKqLwuVKkgX7VfBha7ut15shWMQDu8ccDBmZaYpBHj4ryGZhe"
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
