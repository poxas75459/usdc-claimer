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
    "5VZhhVUx1MWzQh8Kvnv1nKueZifVypShn334ypPS5HETjUfqqWoLxht6PzNWBAsfPuw1rg2UecmSjq3Kgst5UH1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kV3Vu8Sbx5rAM6vEGyrmFLfhebpeC3ieEcFaXfNDQsdLUPxct3LpAsW3QjoZXDhfKpLyLh3PBguuxt5ydP3MTTs",
  "key1": "4aCjXW6XsHvvSwMCM21kv7Hyy9nQ12W5FHdTsqaiYbwhjBjFqEb416oyJFtnVHMcQb2yy9bBioZX63djZamthSYN",
  "key2": "LSjFAY6ruPpWCtPEkyuWzUe2HJ6mXHK6jW6N77mF24MZh5teQd9XeqBfo9zo3ZiB7fS9mg1GLnFgdJgbcPheDRK",
  "key3": "3n5eLo11PQVfG5VZCEFnapZrMzjRCDnYBQuWqypJFuVqY5GC8qkpisw27wuscmWgsDcH2xtq7WoNpM7CSpEZF2gA",
  "key4": "3hVo5veftDaXPQk8y5UT6YALJzicDcrAkC4yB621fMhRkVDqHjKcqTHhcdiYXsufJbSNd7BUjGELHL2AEhyhBqKy",
  "key5": "5aana26z3SyhoLSmeGNVNYnZnahxDghWoaWNqgVZctCYBUc8LBwixR22bYUJtq196u4PdMbpfqq2T9i5qNMJ1Vva",
  "key6": "5Po81EZpfzDpvzL2SU27uEg3c5uYPZh4JbJ77JkTqfU5KLHGTfraihgF4K53tjFvmDQgEt8wJnSrTpoXAnfuPM5k",
  "key7": "4kZEALvqwJbFRqp4bjsMQrKKtrnkxYG7qhPhLe7shLewNpamUZmeZkY3fk1Zqb48ese7anojojCyfaxSRRmQmaYo",
  "key8": "4i1PtU1RCn7caH6YyHxagpkFYJH4a24SD6smYVSLmUfX9RVHABGYrJtPmwtzxeRjY4oVBNhMvNo9aH5FPZPHyToh",
  "key9": "5RfydqxYhVhQYzvgqzA1UgrtWSkbgyvd65pp5XeKTdhyCyC7vqKGy7sEL9xxfp4SqmzKcXgVS9kRceFe64SifkVF",
  "key10": "akU2MdTgEnWpWGPmEZfPaAjzJxZGgPkW3Lo6W4QLhcag8ECEyjD1MCBkSe5QYtLxwK4q8VYi4V4EUm3k14mh6tJ",
  "key11": "u1A3rpWbLk4CeB7SKRbVk1ZJCJPu7fnrb264eeSECT6y8f5MhTonuDrmfNFwjfk7XTXtsjSWC6VuwWaR3fhfS8A",
  "key12": "59UYBkR2aBinrANMQRBjcssnEfPfrf5VkRgHY3P6qAU6zfW37E7b9GWwiV15QpFnnU5QRJ2W5BLTjHDUuwF9VMex",
  "key13": "oMKETvEDYNEWDmrxBiJkn4bf8ZY9uXR2Mrs5nMvTGRNYPdnrfTTiFpHbs2jwpambmHkxHpNdMoDiopkQ6LWoWJN",
  "key14": "BiuZatpFac9r1fuhRnWac2PXdFGfukCMu2QP31Cu6QKkUBz1qwQXicMcY2NKAgHPZFS3nq33BVcfspmmWMtnvJ6",
  "key15": "4cyAv4Ss9U9G6puZNhDk4SvKLyQtCFf1Ht5mH1MZwsxRfA8xrjxqLjstSGTKhm3HCPB4RNhrEUB9kvMUrs6SDGPZ",
  "key16": "5g2LzqSZo5WwSTwBXLzDTwHfoX3kYyDCtaYWbHbUXTHrZp21FrssbQe1HrnK8cpZLTfH29saYMsEqtm4cig6rtkE",
  "key17": "3vDU3PcFaWBH85QDwdtKLAozfju8qrZ4qBWQbAVHFc3uwRCZyQuzcabFQ1hdgcex8ZujAtLKQTNSSP3yA2nYEs8m",
  "key18": "2Mnt2XbzDZvMGNLATQefQv5C7qBFHSmCyEpd4emYrohz6e3zPKUBrAkW9S25d1fotL4qSbKCxc1ieM1hCeUYPp4u",
  "key19": "3a1vk79FuBS7sQQVksUw6SmfEcYcSzUoMwHCdoNoeDSVoZhVCTyMyo1GTwDs49XHDFFLVW2tTHKgHHtG9F8HhDGt",
  "key20": "4RiLeAviBkyLDgzhWmXtwFqbPLfXdzq2d5TwYnXT6Ui5htFNdr386e8zyjn2RZVckw1co2nnKYrsapEu9EEg3UL8",
  "key21": "63VeRa3aydY6h9KmDKrNoP8PbGK157XY2RdEPyeiPJv51HfyFZDf43LgiNdbyuDCvhArnxYVdvq4Eapdzjr6bv5Z",
  "key22": "3BgzPboiHbdUWu7Q98WCWqJQkgYW9Tsa7Mw3wgnKAEkPQBhRMrBkgXdzdzDxxTjiNQhD3pd1QMqj2xP2veuKBTC3",
  "key23": "5NeYEp4RMFSHCuPwzgupiepf9kXEeiBGJQra2ppsQ2FbnzRWDg6kYUJ7xFzmczpYvgD8ubceekyXyBHFAsFYoUkT",
  "key24": "5NduqW3454KdZazd82FdDCEgKcKLvT5d4Tknfus1T43aWhvNuKeKbrQ36Nti7UPjQCDb3LwNyBVspbUPXzzcq6vm",
  "key25": "59aEgB2QZNZh6rdZ4BmWPqdN2JY7MYq9a4BqJ3mL1a1ALqrRWFgc96PnGFAGB4zYsVyvdnPUde6P3pLsNo4pnNX",
  "key26": "4CYkuTk7vzMFpSK3HiAGS79AufVRj9ctxYN5sTfumqCn4J7HeNQvxMq2VEh6MCQfM7pCUd5i27GQBqkWX9mshGNy",
  "key27": "7ZjMYDU84zrVncmNgNSFigL8WD9CSD1iJQYwvudDneqFpVkQckPsKogtttCEoZX3Ui1Syk1ikxkDM3thJfDkBba",
  "key28": "61gAuvTQyVApZJzBWUBcxbWgf7KtKci2vUUozPd5pd6kkiQwxchVzVGxktugXn2di5trToTyAqEYz5ZDggkPMQ5K",
  "key29": "2bdqpnHvCvsCkpjrdpRm6uYC4EhXEjuF6LCoBReKXttD2zHT8o96NzJBMNDD37MYqFyxVf2b6BfWqFpncPc4CQ1b",
  "key30": "4pyBMMY93iJ3hL4C6Qrc99j7wMc45JWoiMwi4LmXF17j3zDXP28ZWkJtyBfWSLTW2tHrsNsw1hjQcgwG1peNnDX6",
  "key31": "2cc1scTu9EtfUVhgKmaUFoEtCikRQYa2Py6kfHjCJr4F2d8MXNoVbvJMRNYQLfNKFUX9EbGUk1KcK5cSa7bPwwCR",
  "key32": "59ukrv8fNjofkUuVcQBJti8VAApqFYPFvr27jL1ZEavaRujEfcwKeFVXSbhBAg7ddCzNgMxXcvSNKArR6Dv4NADm",
  "key33": "58scwnyRjgwBaMTsAhUmbqmytP8Vx3m8rqYkLuvY3UvQHJpngU4AKSU6TeZKQMMdKEy2wZrogZh2iDzuV6nwaScs",
  "key34": "4gzBpqYfz96iLgPHM4WREqQevWkzjbUzZoYp8QQ25HeqYeh6hph5reCYth9tToPZeTETqna15CgAPQ72tE1FYzmb",
  "key35": "3yjXFHhvgAFFJMuiQDk4iWzs9aL53NAKBYyEXR5tSVwsbFm8FPnrNaW91ChJy6xtSukZXL1VoJs9uKn8xDCT2zzE",
  "key36": "5HTiBnXDR5suN4UnyFwdgyJbsestNHVsSAcgLxWcLoULvybVUeDqB5yLTyhpW9yRjM5rWqfCZaXZtKYWfmFTHYLN",
  "key37": "e6M2oc53Msn8tUTThw4Kyovuht85RXrJxaE9QoxYTGQEzFpqWA1xdmjmYrdmrtGcie4qopLACWh8WrNDukcoNgR",
  "key38": "yMwoXabYCrYspe4bB6PEbx1dJa3Ywiy1jp5AGkxaxkGuj4QVZBhJKNWKhTkvw3M1xJi5PRoJTY7v8mFVc1nzJT3",
  "key39": "5ZBKLxTwST91ajeUbankc4Qyvbuq5ZA3N9LU655JcuxqQTkMSqr2wR9DaXq5CFGysLXAEecSS9PVHdiCMo3zekGt",
  "key40": "cCXThXkvkXuRDvaKcQ5LopJjpu3GfwS6dy3bNQY6d3UsuZ5pS2uNQrqSFKUgbCke1W168JAC2RETkKv3PQtkzU3",
  "key41": "3hFEzfRdywNTX8VsEyRWQnGYHj6H96wy1QsLaAA1MvLipN5rxT7v4NtteA8zozL91dy1GL2HHZqj7ugEUafA2yRz",
  "key42": "3YmuqStvLC1usYHs7hHcg4bjZZqHtZuhyLMsbGJ6B8FM4fuEMjwetJds7BXLYWvswXVnULXMKr8ErQyZtKUxM142",
  "key43": "3mCuyNpo7RDF2zpbfCvRPivBm99NNWNLx1YHZUWwAXuo3FDKC5F7jRqu5wQPbhkrmLwdUxzeADjbHW3j9YeovRDr",
  "key44": "52goeLP74P7WURAgNfqrpUNGEj5m6bhr1n1VhaxJhQ4EsqURuF49Y18KHUjY7RbQa61auTkmHiqLQN1cPUmn5ijL",
  "key45": "whFpqp8orHboK3KwAtjEAuXuMK3DWHBQcvdFjD9jJtfqG4Gyzic1WaH8ztAPdhEFPqx3fYiCNNFqveN5HWxCYK6",
  "key46": "5dLtK751FKkhqT9B4Y4LM5PMtXXULfEwoQySqnDC5ra5AgD79Qo8bt2rYbHHhLUPkwoGiMZjEjUYWvxNibvuRHLS"
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
