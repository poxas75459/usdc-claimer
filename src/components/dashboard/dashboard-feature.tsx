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
    "ApwWLpMm6A8noGiU6RNmv1A2RqK76pDuevozteJK8Lh1vPSYT8JttqdpUob8GcEdHcwgM8wyFJDC2AgBFxgYuQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gypkFM33qp9gPUkpttxgTctSnFRLuBXaB9XVpP49naDaKtgbtcSanqQFSA4cNxg8niYuEz1oFnyMsvWd1WFpF5P",
  "key1": "DWJyoiWxM9H93Z4RLNVJFhX7THaFT3DLzZqVhBVSZMFJuwHYVfwY9cnDJgx1yQdHqEkCKzgyyj2ABBRNt7cq8Jn",
  "key2": "53bvD5GiC8DEaNcRG7e8wQnfBndYBrX2Pgqza1wR3zwXmbi7n9vq9MFN69yxm6CHwrFibtLh1mhfu3u5abRCnEtu",
  "key3": "5kgTMXViBMap2s8BBTTEgjEkXUC8NBF6vi8HXmJ9m1m85aBCRv8zbBTBjaySC152CQLCnjjHcgvwZm8VyTEC8efb",
  "key4": "2LPsSo59EjzQGNRdBVxNxD4U7JkK7T7kTuRdarKU94bea4HLqRfjqmY4nVmoDE27UtqKtruP5L7g91pGW4D6Hc7e",
  "key5": "5MombTt4gjRzRQWors3xfcMVFcNbmsZqRna8ZaD22UYrCQYBxMz9PuHeqRU4hAr9W5eBPW3YjXCenFjSkpgXuj2D",
  "key6": "4owtfSb8xq1SbY5RA2QTYKMzSdKByUcCmB28V4fBvvyjCD7NyiG33yriFxu5yYu5y7XqK4Vi1p5YXEuU1ccpJfYo",
  "key7": "UjUoL7CUQsq1wdA3DLUi7ZbNvpR6sgWBfG67buN8LABLNAMg4zY1VLTxDjdNrMub22bTqWcFWAiq19BhcCnTo6c",
  "key8": "5aQHeM1vxKqwdi9cou4rnLWoMxeUjMwpavjDKUwhHf8kqnzuendLWcCuce9JA1F75enJtR1YHq8fBub1KjB42FQR",
  "key9": "4cQag2y47aX9h3Locm6DbBSD3hAzKqPoccAHAdFRydh6tHq7RYZThYMjB9LMkapVf5Dbzh4S3uwfmCFzxCtGFVAp",
  "key10": "4yGcarYrGFaxwK711VMauQrKH78JGtxTfKRCbau7H1Vz643Pjb9mbHXJfcLSADW2dPzdq5WEvMTVL3pxH3uii9Gu",
  "key11": "3q3L7ZHpVLBpuSzF2MxjpQhsD2g9wbYjWK4nSp5drLrfeah3yZhzTSRHeD7GYoCHCaDephBW4jrXWpSkAinHRmhA",
  "key12": "diG6NJEEsLHr3krjGG4VnvNZzuC69NZodCaWLskp3b8Y9LrPueC9fZLwo5SC7Do9MgMcQbhWmuFr1x7E8K6Hh5T",
  "key13": "27EcsyxiXTapxf6We5kpiM9bYjniKuJ1i1zQEeDoyxTFx7SDc4pf9B4xN58BSEWjEMbpHbhspGrefcj13UQ7gJD2",
  "key14": "5jkLCYBKzKZQBBqQ6fedpwe5vVqBsFwQrWdXYxNpdHrNqLFSogtkCr2MNRQFugP1w26VAR69zwjDFvm9LU5m2HJu",
  "key15": "5Kn2kYwaWRdjMtkn9FK3B1Zo7kzFvR3y45HntoqkEwNLnuLPbr8RkMYTCkuHzgy4rey47FTaQWHSWehgAwTYkQZF",
  "key16": "3BkefZMBE9uwRGdjgZTkkbCrWNW2FRPZN6xeCucXo6H6PosEKdE2ayhxBwyp9yEK9ebQ2Tn2ACJjqcJkWC5xEXaj",
  "key17": "3EXddBezHrXiWTJcdXuf3K8Yik9pe4JXs8CTQDnDBTRqDkM3cH3mYRFKspSP8XgrD2cawpujHreuem13YaHpHmQm",
  "key18": "5r7BbF426cYphEf26jxCoRkdbpV7EVSu52zRcX9M2DpkA8UzL4ioaRLU3opEWgbVd1MvK4sizs7aXJetXT5ARGai",
  "key19": "W3dMtfURaRZQyYimAFaMBC4EA3QDjZRT2zXTQQ6XZS98Ng7pEfoThjT8FwLYAqCVBezPrcv6PCeeRhPrxBHE4V3",
  "key20": "2JdSfQhaqmgFmMiDUkZG1eDqBTDzuw3U6x9yet6smSfzYKStToTHqPPN9ombG21jxtaQ8H8RXhXokvkRTzLGmXaF",
  "key21": "2wEU1VEfxiYjg76jw6g6a22JPo8vtSJv3qFSpnHYvmNpZcVGP6vXuD6ot5ieQQAXMpeuFrgiKRxjufcAHpzbNHuv",
  "key22": "B4pZSeYZVBY8FwBFhR6fzk4Zt8yk7UqaqKeh7mYGcjugzwdwdAXLUGvzSbPZAaNBP5iNRmgRjUrS7Tmxu7VXbZP",
  "key23": "5z9YpDgLqfCKhp68UsFutF9PyBZrge6K5cD2AgDjBxoq7VoUzSNRu9jXn6s6F9KYfzfk1k4ctJQ3oGfUQ9uqF4CJ",
  "key24": "3YXmHGPT3ACdTMpM3kdxoTrr3msLDNUP1xC7JrENe9w3Rq9djzS8vqszPYZTuH5XyTBTsJvpFndvRtzBxQfmL53m",
  "key25": "xT1vk2MEvUKn64FikxwYEbq36jWwiv4bNqSSZzQeHTSCGqtnL196ZiHbLqkyFQL58Q3xF1RwmmtE1LEG1dAwoxo",
  "key26": "5MapLgvnqYfEuhbm97DREJYctN29ueMfasWSPMZPQbaeFqBzCZNDbBk48tYQ3FNSi59jXnHYsvVnGDMb8MonBSx4",
  "key27": "2bGDGXGq7YW6zR4DEemZQjgm1vdHjA6DDMPQRt3ccg5wwdtyM7dxJP44KaFnzvWkyuSENotE9Tx8UXQ1fYomCHX6",
  "key28": "53F63Upcf2qjoZQSX28zFrQN7KW6A3TdHMbrP1HiVhFfdM4t8Q4B8fP5p4fTn5vWyyQe5UwnUYAmYYjQ1CGMY1uj",
  "key29": "4gaM6wEUWksEhr8tEfcJwa1oUM6big4f5CZFPpnAJZKnSZddS93dnDVGtM4Efhw6oLJaCCgahs3xHWj43vfUNZyz",
  "key30": "2v42HQAcFjcLusyfYbYUnxuvmDNwe3jjLZBd5zhXZKA3M1CBXLdKMmuWAGW9kwGkzixsDfd2PRsArRP9PdJkUPA1",
  "key31": "3i9DdyKLUdbutmMXs3QQ9eJopjg2gWwcwQTPkFC2ep1ptaSm1gywDW5inz7QSiMHSiz6fnPRNVhfdojhP9Ng2a14",
  "key32": "5NMDqohB8FDwywsmDwd5trR7kkunKnzpAcSqfDa36pytfuT4e6BfujzAzitr38iygteWfpoJbuukMmCUUhDEeh3Z",
  "key33": "2mTDsCefCcmusZH9gxhnfemb2xetp6nrirjPvxBmg8Dyyi9RYFbU4wRFR4NcsEJe74Mv1J1MpJ1ze6wcdzFggY4S",
  "key34": "5bkPhSQ67Z6bYySDavwmM9Bifg9Dxp5qiuZ95QTWEeEdp5AHJeRMvUaSC3tFA81Pw7ndYe9HdSx95DLR9CzFbiNK",
  "key35": "5RLWXHpKcqhen1N8JVXwkHwLVGWY6XiYCdmRsL4mqALG34tbeQB1KHHHH2wQttGq6k5UCq9MthLjPHV3rhPNbLSS",
  "key36": "3cLv1y5BAgXGYnmP3Ng3oerBW36i3ipy42VfN71puD8zgKjAn9xTAyYfM8n38eZJcMKau4g8KHsdxfh45JpG9J5b",
  "key37": "3CLKwiUuApVHqnoomjfxvTGsUYSZFNcK1tt9uVcfKwna9yHPLzZkdf2X41h8yoQCSCyaZ3Q19et828ZvM2hjhH2t",
  "key38": "JYWUN42gpwfcmyJFigGxVVYxRi23ATVKSDEiDzXDaEb416RCHnS6RWMpBYafxTPQWaVsBy6eA1NmYT9HmHfQfZc",
  "key39": "3jnZekKjAdWzyPs1HsMhWWmzFyGrbHKaTLoBTGNSouNASh26StrZR8J32E9oHEKfnarMQdDBpGs7RLGGHJdXpsN5",
  "key40": "2EYUd7SsiYPn5SZ797YgoqGQgNbSrQvCiw51nyxL2d66Bzjpv1MzmTqrYmXJxUYsR3gEYNa2UnjgMxgJdRRWWzw5",
  "key41": "G1pUz9ko3STfvAoTiRV2mJ4TTRQJP7LvEavg78w9tKRVyknhiQT4oPzXpUn5uPtWkLrgL5ZMqgkZm4cd6Be2Egt",
  "key42": "3EL1cKEkT4SYV9AtJwhT3rmmYswunpw9ranBGPmnpUaL1NX5oajMPsacyfsYfNA8YXQtfxMmEFWseuZs4y6YBUB5",
  "key43": "26vkSeQJniM2pYQ2y5YwWhsnn2kY7aTtiq4Tz5ZGfn2RBsDamRLzggTjF6rFAj11J2qtJKorbmZkG2tviMgU78nq",
  "key44": "39dPAaVVvNEXAdMLSdPWzxGfaQ9nBJhBjkbZ37urSG5D2jgkdKPRQWfQXBFywSZbCEfTN3hUWKsCkqd8L6qCUzev",
  "key45": "5UGPBMaTKwwU15LM2JmoFdh8uBdabdso6wLGt5b5uEfsSYJqTAsANGsQiqm7pxRxhaLn9XLKY3VDeUK5Wq7GK5Cj"
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
