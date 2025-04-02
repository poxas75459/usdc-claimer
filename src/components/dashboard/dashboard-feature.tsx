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
    "5itMkwT1H6UPXogRX9mzxB8uzHEaQLFRNfqpxW84uy4UX7jri4cKEVF5j33deBfFCYSS2CuMhmxAL4w9vMgkPvnM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "575ZSYUEqNbdPDDNV1FcHjBGnSSdLwJ5WCqKvCHfziyCzwHpwSr2xm8uBvRrmKSjheaWphNDAJqZg1aKz4E2dXtt",
  "key1": "vBAzuXk4WVYbPsyBdMLoh4nSaRtUFwYuHMzmcEgyw75ncpyKbKXBphyzuouSrFzfJ46DScY1an5DU6z1LwMpMkk",
  "key2": "2TrnMBUtNabGfsKgp9TFeHztBGqEMUpp5f8UdLrQroyq1dDbSLuaPdcU7AVF1jQjMFchodcSpAKQvhfaXerkZtbs",
  "key3": "4xdenvagHEZhrRNRYBWGm4gPziY1AX1RcpwXaM2hWXUVqghYFRfiu1MXPeaRcgMm6qpzHxJdencWXweQFobaVgHG",
  "key4": "2rrCVeLWgSyDag2BWTUk9HkPQWgfdm2yRmvsgNa7WKeC7bZGtrWxqVmSswVWHJNM3Xn7FvHiSQ3sRA4TcPWKeHM1",
  "key5": "2XDv7QbmpU6VwnBNN5eNyo9oYDp9GQHZDeaFYZmRrNk4C5L2PJqR6w18okFveGYPuCPHQkqFkRhnpnD3jTBhuMmh",
  "key6": "2WoYYXLeeVgxyiTmVAgcLJaGsRmhp29WeMSSs8gKJJUUZW6TPju5cx49CnGs22DHHGYEuooWghM62xsWHvtrasER",
  "key7": "5Ynj86CBrvxwYqP4Jqih38zNv8FLj1jMqZ62jPWMWP8PyBo65ez5XLXyN65orr6ffKJQQKwjyaZkZNrcrwKyF7xN",
  "key8": "5cWWaZFg67hPjoJu9NDexWyyDadtEWfRtXYFe2UdnCuwPUAya2azNb4djH3GKZ9ffUd8wcTbtdR5kSDxa1QvzhSz",
  "key9": "4TJ7RpkEZEgFkTP6P9yFwcqnEhTmzNPKF2kNaKdVL8D3YDnfJ4iaPAfErbbfuJRpgAoLLkED6bSVsUJVvoZ6Jf39",
  "key10": "3HjD6ZYL9gV2ywPc5LeGzLB4vb9YKtmvE3G5NRbcMX9GfveHWtyDAKontdT5cUgJnujUt2MgnGxGz8pDTmCA5v2s",
  "key11": "4HoUaTFNvQKFiuCUAUGjW4txrQWDhRYzr5LhAHcCpyvdaehYHLVDkSzrW532nx3kGKWCQZ2earnjthV5N9Tq7xX8",
  "key12": "3ppm1j44vke3weabs8btZido1JhbTDPwnVMcHYBcBPbhQUWZ8VdqRd22k7tHrNzGSBZKwCSU1ndFUf2KEC11pboz",
  "key13": "2Lp5SGoUACCikB8kA61N7V6WYqbkNMP9tnpdi5e2hsCGHHg26fTtHYKAdVFEXtstLvGymZWRZok1rGKBdm5Tu1Jo",
  "key14": "4reLgKbzQB8np9PHD3nQ3TZ8ChenGEruLsRHsfS64H1vmTmXdMLuQRC8DXah3hmg4eTU9AfsrLEpsWy3kqcRjodo",
  "key15": "2N9PaRnSsXRMeZ7B5jMBDKH27BF6DrAtsjB7RPH37ZmWmVed5UiP1o9a6snTiXzV7ByQov7RM7GukKwiyqPtUTRr",
  "key16": "312n8NFS685zjKJAFoKgUdM479nnBXhR4Rn9AQrhAfhy7uPhRUWjYfEbvF55z9j9UoVfLVE6zBXcrkaM9ahLjDrw",
  "key17": "2uyZ5KU6SjQQiSJFHHn5DXHogafEM2uUnoYvFofLiLNm2NshoZCQoZVx4HWMubGGkWErdtpJmFjShYtsc8DWhBcX",
  "key18": "2w4krzPRqMcfdteXTRoYFW4zAWdYmwFbjm94DSkbpWZnhaGrwhYJ51K1qFaydvVNZrbq9fmD2Jxvt2RxiQz2aeoB",
  "key19": "3EUrNDmBdCdYEVMM6Ywmdz4d6Y1z9gU7koqkKsLQ6CXaJNBepbL5hTTTduAPRjT7t5pgzzzKSKGTRr2teLUNAcXJ",
  "key20": "5uFmgo4McejvExh2yYMdkR5kBVStZNKYnpBZNBeckpJuaKgMAxTwt7JCijRNidutDW9ePwK8tNCRmdcVveG3Tze9",
  "key21": "51jXGnstAesAAxnnJ8WzCVRoWtg19ZShukWWhFNo2keqFeh2kDdVynjBJVjhQWe249aJujBExMbYSWFpwYVLuFQ9",
  "key22": "2izr7u9SSovkVRg1J29h5XXT4nh3GAGSmhBcHp7e4N4V1aS6WLkYzcJiS6hTSGZzjGDcMQveDrmGUDkuRQmRSyc9",
  "key23": "2bAejhE3CLqfieHPwcXHWx2Hx6CU7mZZYNWZvgJrfRoMY5iNAyEuPuvZVqn7Bfzw745Xk3DFeLUromT1TuLWEhoJ",
  "key24": "3yNANQftf7UaLsAzkFJLKRH3i5mYhWGPzLzEb5849kCGQLZ1zjYdH6RRz4xf3NRz2TMhxDN5JCzrodAMNkjFSrHY",
  "key25": "3ey7z97CpYFSbofgnbh1SEj2YsXkUZ5VDLcu1J8eMyCxcW8LH1NT8DFn91PJHpxKvacbZvmBVbXNnXaTVtwr8Ucm",
  "key26": "5TPeqQgoYyKxBKZkRbuFJ3vqcPavYYrqmnG8VP2x9eLm1AqEUvcqszYRwMvS2cyBjX68HbzS4foiRcn2eoGWRc3i",
  "key27": "4i9kn14DQ4H9drbZnhoUK1R5KjvULq26KX1v8vnSeaeV14Gb7RaMHMsJ2SCA1N9HMGq3fXYwWcsn2MjFiEubfCjf",
  "key28": "3XeNaKMEgyrSoGPAXWSuNDYiVaj3YJ9zCy55MZ8QXDFgRmKBRLg4LAcBCVHm2iyrfYdZUJcydJFjoSYjDzzjgTSi",
  "key29": "3Dkqe9unbngYMhFw23zxCycRgAxyTTYjRC3yVULCwgKCbHogrRv7LmDWPazvFgZiMHpCaW6uPXkZhjtCC7mLfJ7H",
  "key30": "5zWFLKmrp1gsF3Sfm6cTgVgcQTnjXtWuJJdahHpdUZHXHGcKmWdTm92D5yJonj2NEvKWbYeL4H73rZkRAD9GPTuf",
  "key31": "7iWY3XAt9zRUmPcENDBL3cjq4TUnL1WUyUj299KX2MbGZvNN2BjCohVKyTUNgJBC9hyRtXrT4gGmz24gQJX4BoY",
  "key32": "4rnt466WNotTqzLisGZFunW4g9Krvf6GRWZuEitPNbQ5i3muXBuc4t8YEjfmeH8DpQphVBS5nTVieMqnae37YfTD",
  "key33": "bWGcKtzM6b4GiyF5PsoKiym9UPHdKHFRzsTFpCUqVxTWJwAUVAMnRGivjjZpWyEktHTrDXWzWsJCPefNHzVKqCb",
  "key34": "5avBMQ4ymzHotG47d45vnQh9NZD5rNK9CTTEU6z7JReUWimqN3jbEQXLdbcRc3cfMtAhMxdLroaRQ1XdJ2Vyraqt",
  "key35": "4q6FiKogw8FVgATdX9dkWC5YYXpdezK9nShiE1Hvpd3B59DJeDeSFVqNdv5DAHQrUWYS8cHLoACtGiESh8GP7cEa",
  "key36": "FiAb1MRPECjfmvGt13qTerVQxv9w8arc61A46QHBjzRXe5h8Yc9ki1H6fDW5h18A8Mp1BhyLigfagBGMTr4QSG2",
  "key37": "wubLjAGWmZeejqsdnPtMmx8bF4zgWPG8YxzNezZRDX9TcVHQdo9xuXQMkgprxsq9KUvS2KSeCvq8aAF5qsbzgm9",
  "key38": "5ZPxsABkLAvDLB9TAY7YZHmTgFd2bpPLTjRW8TTVct4XBN33yvhqpAkkVejNhjLhjb5PqrWYsQHApP3hoBebsxeS",
  "key39": "2MNdJefNXP4asveMuwi1s7W7isKKNpDfPzRD53XtqFKe8hZr8TZCumrnj3psmDGw5kLTSdGsoHB8c6f6FwQFT4Tj",
  "key40": "5xSZ4YAqArauHnaSD82Gdrq9fFwxvN931XWvYgSmxY9JQ5ZWmbRtLbAqF8WwJ8V3xW4Ukstqf7ZEfF117QdsQVC8",
  "key41": "5bCvKfDk2jufs346QhEMG2QwZRojbMttSU9UbYZnqZS2baSYzLckBQUjN7CUQmUtFHbVUGSWDhRbkf1YREDVBeoC",
  "key42": "4tNpCd3pDK4CdV1THiMCqzKR1FcHjiQ6HvXGYmJzvbKnxDsK1dZBFGzaZ9DhmF8BR34xARfP7yzpszMv1pJf5gVE",
  "key43": "5rBUiiDqUT1aKdWxRYB2o3WCzFNySVou7nW3cuNh2nQG7PTscTvPPK8PTb4vVzidKPoRNjnzhbBRuSb5Vnhh12G5",
  "key44": "3XbwUc9ynGZKY3i2oTvTjdHiY1TnkTZy7XWYAysxXEZXRUhEXsNyTTMm83bxT6uNQYccC41VztNyi1MgNDYJobJc",
  "key45": "fMzt7qodMNE33sExjGnsuLxV7oj5XWY2kBSPKyYZiAMSd5vu4Ea2UEvSnAT9wSDVdpzm6vgdSegAWuZXQKqEXKF",
  "key46": "4Yp4d1P55Lz8Es38a121kGSvRThVNuD8VYzRBF9SwNuRwnPEz8FDUA3K9R2CUZRQAhGmNp91M546wRmRVxsHcVZb",
  "key47": "3MaK5b9zWK8rgaTAwM1P3xwUnVY68htpSSJYRVrdPZ4na8KhULfpDQDvoRSakdcqMueR6LuVe1U9pYPWtjGKiFZ4"
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
