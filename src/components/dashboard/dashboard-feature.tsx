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
    "61H6qjM1LBP1mhjTq9g1M1nCXxN8pjqamCF4PPWAcyxpmfiv1rpdgYbnYYUYmGnw75mwXLSk3bsJpYrd3aCnTXii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VEihcZyV6H8BYZ3FPGf4Muj3iHoD4od5vaTcAb258fJHGURv9kDaPphtbzYrU98PUYUkU8puHNJLEv4hXPqFsF4",
  "key1": "QjPQ3nr3nGp1qmVNpd637Ey5puKyMJerfNiUWPUAq8Punzp6ovxLHmqJM9866J9EbLxR5xASESTAtC84mMnd33F",
  "key2": "33f6y1VQAfMjvdq3Ma1EA7EyZQCVKkdMrazgjcjiyuJXEWgQse66rgrPBdjsCrBsN5zLt2Qin3odG8iD2CeE6jmh",
  "key3": "5LzajwsYHuaTMeE1qSmFZ7HWpAGsoBNwvqU3ELHzMn5i97pBhj26kP1KAL2qQkHxrHtSfJo1pwvVdqoS6iPeqSXZ",
  "key4": "5SPANybWtxDJ4itgLKhm6hwRvvmzBEV4FowhM2VGt5N8aTJxRDrWDZPyvBehi5pDYMhi2WkeujmxqY17hnVSwoH5",
  "key5": "5w3tLuayTrzXAbQBQvBmhRZDUTMoETCCEMXBRdxHeu34ys3W43vj7uejDW8wqGN1ffJRpSg6ZaKKXqATz8g57oFX",
  "key6": "ZzZu2J2etaZpA59qcS1uJZGawscVRJYFR7RxkG3qckeDFnfo2rS1CD5H11DsreK945GHzb2qdoYAngumjPZ1LNu",
  "key7": "4TX46rptrtNRnG78vykxrXSaSL99ToCme7Knrh2SuxBx7NgaMHdz5okhPsRExFQLtYJi23xf3T3J8eqhPZQtq453",
  "key8": "5VdpfaiuxGVd4uMCdEvKiFxFsFw1futCHr9GU1JPr3VMJf7Mo2eJo723TYKq9cB66BGBBiAdRV2VJrLJLZYQ6LK7",
  "key9": "43GjHQ6DDAenKqce5s3xD7zzA8uq8THWVQzC3URsjEU6UuVpaAfsKrTsUPR5dDgguez9Lm7RdCxHjEksSzpzyncf",
  "key10": "4VDzsdUghQHQCfnUJy6JCAUfjVAaSRC9e6dDB4XJ1tDig5U7NDNCvW8zsLv5ALtFtvwxHDQsdNNu6erh9oR79xVr",
  "key11": "4FbN8wUU6ULpfQ4VAMHDfG6LSGRQ58tEeYQGZA41g4949gS8bVLeADv7nCzZ5t4LK3Jf5mc6s4sfEHhS3saPHmYK",
  "key12": "3cRCymCWxL6jLNrvd2anScKmN6dRJPpTRt5j14oFW5PwBVpL1iFiQ8REAia8iEKDxM8Cn4vGM2moHTdJtz1vwnFB",
  "key13": "26aozGfE2Gu4WZhBofzVMNvYGD72Npa1rP3dtmr9CbJQQEa4Bvcq9bDkWSwEYgxaGSqPSAUmuNHjcaGWTLv6F5DW",
  "key14": "2knoz88Wo3yir7abgN9s8vNd6iJ13vsWjSe5DvCYCSUc7jW42hDdwN3BF4kFWktpmS5q2zE8oV7GMneZLstansWk",
  "key15": "5xJmGXV16mDoE6XPzL4ZFV7pVLUR2j5WnZM53NCEwUgRhg43dzvKKZWpJhAynfXkYJindGBdoV7guakaYY52gsKc",
  "key16": "BEtygoRyjP7RiAGTezbDo4fWqiudunRkc1PYuTTQuCq4t2Yig1pZySUc1fZbTuYXV6bU7z4PrLxwpRQcPjAPCLC",
  "key17": "3pR4DNHbRn7JUSYEqEc3Bc4v7Fwwzg8S3wr1M4eFU5KSVXg6S8Yn3PmSLtvGeZydxJmpeD37gokANgrTHPeKs9un",
  "key18": "471XL4owuYmhbH8EQFZziHgEm76orsKiGzKXYgqVnjHPKkCBCDxbzS5YnXYKQu9nkDEwXjLNhnUTR9aK94vdHgys",
  "key19": "zcfrpeYj7Xp7q1kQX2HCqKtT8ctf7H7j7uMbAQJnGUSe9cxdsBzigQwu6SsRBCBzYePEtMD5iqQmfEBBzmJNMQN",
  "key20": "3fFo6MGXR26LqScu6RkrVZbCLM7Tnwfd138CZ5xvbrYxmhBSUjmh31BKP6peZ5ejz94yhVkMpJXFx79HFk4spvEb",
  "key21": "WuY278FQfZBXKFCzACPyhv6WuLEnBMqj9z9pTuHDwwxs8NpwHdgPh54W8EP2ethKXaWBo6VEcn1E5JZLcytzmGg",
  "key22": "3ELeQKNkXtjKX39fN16T2Jfuj8hBmCdnn6fjVG9Qatkm9rNfsRkzcWgaEMMHuvGUqYQwfsX1Cxou3f75gxqSvStP",
  "key23": "5RkZrSCgswqhtGfLRLRpXAdSKRf5Pwpv2Xc5QhHHizZeRoWAkwJfyxNpFKcGYy62gBekoYtRF28x18LGCXMubzQC",
  "key24": "3hiCDPCQbiQ9ynzuz2NzwQrDN8CqXBxKccJizWV4w4386BVNzcWebkHcLBFJQbGvroMDyvtK17UQDDBWQyo2rLtP",
  "key25": "5T5FBHKVjrxLSGrDzgtNcngBKMKhFGaGd8u4XiJqg3bB973p488QcYqcpqAtWJjhqnyZTQGdhYN7FfUebeqHJMND",
  "key26": "47KLwf4ZjNdCAS5TvGvgXr1dncQfXQYbBnbJpbLBk1awEzuRa7dtoxNmWK5cF954gbkHSzfQiHULDtwdJrotcZg5",
  "key27": "5fKf7K4DETWydD8itHpNZ9MGHv8mMzcpBoZ8Rkh3PBbrKBRovkBp9LSG5baVS6JwW3J1rhx2fCaKdDU7aNuSfWcR",
  "key28": "gKmHu9ro7gwrXuvH2LuipfgctxRvQpSVdrH8qF8oCYnBRf78fxH5ePGtAnJbv7Dgr1ZCgLPoFBmsC3jw8r8U2JZ",
  "key29": "djAz1W3hT5jfpAnP868gCRnonMmSt1sMubDAa2KCiFY3mcyXzJEThuzJSvjZAgmwbPoHQNwtq1KDXtGWjQ9zzsi",
  "key30": "5gbczeSXBMrSgDUvGvAhycMchCyV7HoxMBgCsK8vcdsiaGekwUS5RM9wt6UjcLNgwyfSQUbopnvzApWftVUH9Gkf",
  "key31": "6558Zh3e1iYVefAVUAf2n1MpgUxB4rkd5TxVC5RjxteVSbFo92fveXrDPdcpjShpDY8wJAAznzjjr52LmcuyjPdx",
  "key32": "59f1hcPdHTp5Z2CWMrvwqZQMbA3QQMuFVpaBhcZWhVQd2RkUKHEqXKyv2GrSuJ4CDPceqp6PTzFQarZVBXyTQbHd",
  "key33": "EwThD3RXBMD1dVh2Mg5x4TPq783Xu5CHVxSVv3b29tm67qANb3fVqmzkqfG8cjG2zi3KFpQBj8mEbBEnEo38tgy",
  "key34": "sPHeZjGTyqZRiNW6MTpx3nJJWym5RJnt2bpcLNAs1dQVoXiNbJrXifu2CHzhsUCP5TYNJpsUKWL68cBpiAV7PjK",
  "key35": "mzyiChoNJw4PXaCkBNbnygW5yQbNzoGvZbWXrWxaVpaRjy3aP7BLK2ni2Az4UYfPCjxh5ueU2p5ZLCTPHF7pwbm",
  "key36": "56cwpCrdpffhWzmY9haD6mzgLngAGwpLypYsNQTsQxPQJqVGRt1ZiDnZR3iR8gjPBCbCmzkTcHsHy2mrPFwst8EB",
  "key37": "2FxgMNYw83y7HokNYSyv8uQW1BuDDXrRDkPp2Vur5r3CFCxQ75Rw7JkdPAkLHMhb5oDgSpmmeFfN6zvXxrWb3izF",
  "key38": "2Tc3nStDU6avMTiXHQHr6w6kFqC7M1sNKdxCqdtCrDmz3LfAhCWDyLHrigPYozTn7rqz3NDq97x6Rs6iNxTycVNQ",
  "key39": "62acvVZhW2izmD5S7Z43dNoih4GVvrtgFqsezUntcAFvzjgrhZp3CaZnXp1GTC1saDiUA8L2d4dG7wiWeGjGDf1s",
  "key40": "4ppuSxjaczYFwEDoeavSfRHSc5esEgzwaRsxUnwJHmNJpjQy9MHAAcF2m6nLkNuaPyM1MsW6rFR2vkyiN4Y5x5dA",
  "key41": "5w7qYwJpWyccCMLLpAAsQpV7GiVJu4U7eaarbQndJcMQjHWA64BJzoiD3zu1bNmjbhduiZTanNtqCFuL1pGzHx68",
  "key42": "mF5trgygu5uD8CiesA5b1pGfUf9Xkb5hfwgZvks3NgW35wW7c3hs5x98sUvBij3di7w5rwxSZDidzavHzr7dLSG",
  "key43": "JF7B8REyDWLwwkQgJVtGShxaLrbfsvoQUrdZGoqjMmZ9egRHSH9VK9KCGVQaUAfcNEGFf7vqgsHmuUQNhSSChWe",
  "key44": "4oxies2UQJfyLk1wJwcAfXt8c1b7ZYRPYv2Leez2CT7F6y9Fu6fpC52Zy45ZxdsM8TqZiGAfmXW8RLJdGYQ3muS",
  "key45": "3w2KhrMppL4oRetptuv9iyE6qVCK3d1RsfHCzyZZjmFN5nwbhfzT5Qm8ekGaJZDmZvdNmMCrVbSp6Qwwkzi99T76",
  "key46": "4xweRRCnJ2iAGNhkjs5TLcLqvJB5FytqnTLjf7JR84V8C3crnBt9PdSTRBwJLA1Y8z2kXfhg7cQbmbvXPm1EgpQy"
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
