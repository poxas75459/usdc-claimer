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
    "2YQBXzQWtNWPWoskSgcUSC2wx7YiG1i121dMecEtkDhvR6ta8pjJ25pEegoa7CDCf4yLZkpGnCjqt9pcrfPazFoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YftErxK1qg3QPgo4SLTYMCSpwWfPEd5C61gE7knBK8aBC2VNqooaJS2wtgAjTuvbBg6Yag8h5A8VZCh1yiXhteg",
  "key1": "25nhfdLFYz4e2QKY24tC9Uo6VxwHeD8JTCHJhpthzFJYBvhrm7w5GwxGhuAgnmZJVj38MFoHWp5vEdbosCBGnxvA",
  "key2": "4s7CMUXDomVQbxdHVcXy4dSZs98PpqDChhX4PpuWhQ72FgGVYEoYLSzbrWzBjCBo6GY3ffpbaKKPJYCkg97SYy8r",
  "key3": "222wQ8TdUTdFbnPyrzUR9L6aQFTN2SaZoxRLcg6ow1ZgDT4X4thU3C16A9AVPW9FXRs9fshXLiHgjgx46aR1iTPV",
  "key4": "4WJM82TU4uVhaWo76EKVo4ME2Yv38r69eQEgaZSuQ5ueee2Dxf8nRb4jN7o6EoZydj6MEWYQEY4SfapaYh4PmKjA",
  "key5": "2fEcEDF9mGmBmC2wkgQrR2u4tzTJWfHQjfCVuCzdNcaQneiGNS3PrApa9jMePDDXbuM4mFtZEK9BskpdQEqj4cgZ",
  "key6": "28BmDyxp4g5hSJhtPf2mF7BQneRztx4oDcsT6VnAzwU6XKh8mptdjnDnYTwt9kecgH4UbGNVyTGaYmaJHBRYG12N",
  "key7": "35djD9kqFtBKEVuukbxttsUxWfwFvsz7hHrbN6BxWHDy6F2UVK898YBYzz8yxgwYmFuG1L9wfEeW6wbdKiqnrgFK",
  "key8": "v9NTUarxufkZyezLjDTPtqcw5BWpDsc3qurpwYWQcH46cM6iE4DjZQxg9VE285E9rcRRrijdVjxPr3CKJNbfSFG",
  "key9": "33VWBFM6y3RBX6dFacx6QePf1YC8CjxD5FVya4EPUsTp5yRSD3AFDTr4caiGkZpeZSsFRXfvhfQHwgiV582jgm3o",
  "key10": "3SJyeytvDFHm38TvVAEGVHopxYF9nmfzUriaMPaH5ATs2JSaeDXZhJUaSgnm7NcWuR7kmLyLRXmfkaeCTG7mmLGf",
  "key11": "5Tt67jkseU8QUPPS8NRMVAGhTJrKo3BGGmCLUyuiDixmMoDB62kBQDkk5qMZh36mtDLsye6geMtDLAWxotMGRjj6",
  "key12": "56xYEDkn1QNMVaWw4T8ffsj1Qe86LJant3h8ouedoooG3D8d7QEpJejpLc55pgW6tGs5Z7VsymWBked4rLqtwRoQ",
  "key13": "4WHTE7zz2gvAqmPwptut8Xh4yj2ubkHT2f2A7gCZxE6gGPP98tAM1LcQLuFXEzxyFuM8ZnrgdxV79imbNQzXceRB",
  "key14": "54jR5dv9KS8JqSwiun8NuecL9LeXTeZPBDaDbECrAJdTcy3AK91BXYyk1XvbT2T4waJwD6u5WKSyVtip75SRN9Vv",
  "key15": "4qHYazqfJfQQa4dB27ExzQVostngXTY83JANRamgScxydzgPbCHsSKRp1n3moQU9QNntEGJmjaYESM9YM83eCbcC",
  "key16": "4QWG9rvWkDBZPqwooFyDcyFYT7V3sGcHV5APqbEwpZMHWfJPz1ctGWvNGnSoXwKcgBu7g3hyMHUV7KcGCQAWst2E",
  "key17": "m77Cgg1NUb511r2AHBzQgsSCKeg3EMbVZ1nr1KpMGh7xWize3EEYh7mU7Pbqg5pyaNCvV4x2VKqEtu8fiTK6t5n",
  "key18": "5zJtgZmNg43v1s8EafBKA5K7se3LC6k4wqKkWH59JGbC1EnEAC6t5HWJKUMHMSNYunXQNrJmFP5oewQUhesNPhon",
  "key19": "2hoZVMQBH7B7gNL9YbZH4747rdtJg7YmaeGWjBPmLCz6EMUCbYu4Q4sRfecZg3PfvL6TWqYdhgmh8mwammZ5UwYs",
  "key20": "3XmyCgRRupFGsg3gHjLAs4F78fExrcak6ZKwwFXyyKCAiDDHHqsan2iAr1n8xVCAM1RrCKcVoek5z5999ZyvKrUX",
  "key21": "44dqvYDmiB76kJYYv1WQTFWMeSnnLT62jLRkPvRLkN8Lo1LWfBF9zq94hcBoVwJ1ThxajUBM2guDAujKEne7Gnro",
  "key22": "Lbyir6qbmmR2vhyfveaBYj6H57ij6BC27CttxBFx8u6Lbt62zCQGU6E39nbd7FjpfgkWgXLTBdA4Hu5fAvJgA6y",
  "key23": "5uoFq9TUsr3ZTYoYHusbtwQEcJqRUHngYFRmUdTpiECq9fut9mAEW5rh1UPuG5QAr4zCKw4A4irDhUkBS9UheMB7",
  "key24": "56Qc8bHm4xxmdb2vCevEVbZ8j7o342JnSTcGSB7weciwCE8LmcbHrgo4FjkVe8qazGDMagbci1ZYdNsu65f2eCj5",
  "key25": "5PmsLVAHuzL4JTCog5z8jJNRnsZ3CoTNVmEPEQmQMKJY7BXEYocGGZSUY9tHi21ZXZ9v6FFgPCd9hv2cP5shCc5w",
  "key26": "2PaVTHRDT4Fv77CYiwmaqwahGCMmGC3PRzVjjSghDoxKMz3gfmfJSQszVJfUaEx7r6s7ofGmY5XR8hdWJmFSKkZa",
  "key27": "4Bh29Xd2PueP37RRBdpR4eYWYMb7ioRzACYctxTZJDKQ2ovZmT2G2QLvXaDkBxfmSjrSzYnDHL8qCnpTr4LtHpXm",
  "key28": "4neZsgsjqTCS9rHszBhdS5ACSdMdkGqqHYYCQTx7CsZ2ZdTs4FyNTLLThECburkLYyq3HBWkmEggAhMasGQibn6H",
  "key29": "5vEzyQDCM9UXkQkRcUUtZq3mH31aGwkWidwuC5bnLJGVAsu3YYLPggCXQNx6H3fmErDE5KddRw3pRtMWxKJx9YZ4",
  "key30": "5Se8GpoYExExZZyxdafgWoMT1BeL2rEevrDfgQhw7NZBLk8r4QrKxo9hqZYU5cy1HCo4MLC7UhSk6mWVroiubQ4P",
  "key31": "oqJHkuAwTCbziEzqsWXbTpobPHYVrXE7moRKEL1sCP5rGdPFnjKfuNWC9Qp2qEHdSGUwAHfdTCNJGErUvR11ham",
  "key32": "2bxJ74UYTYCZrbAfqsQppB47GH3vHFS5Tbu4c1G3goFgT7GxaibRUjzaCQBEpmGWE9KeM8gcXBRLVtg7CHMLf7A1",
  "key33": "4CxLNqXnja9zGBMS87nafLEJBzcA9vHWcMMyAZgQmpbjuMudYoSDZ3WkyGmuCymy3JMhpaTHWTQCxmYcUpwJt5d2",
  "key34": "2Faf9kAL56T4AKcvFco6tQDCW7u4c7Rz66c7rduuJtuJXESRejY1zypPcsMvmGvkVsZWB91mm65bYAWBqrNxgga3",
  "key35": "mVQs2B1q9xU1xnHSAj4q9N8BmoZpuGne2CLSqdZm1vccKjfvwCLnnctyDxo1acSbVhi3hodAk578jCQyRnvKksX",
  "key36": "D5iVeScPfa2LSvGFC4c5hRRV2LxWDdTEs2AgYnUaSH1xwsz8rg9F5H5697c9c9PS87nM1G6mKjWRMRsFEcBfPQY",
  "key37": "Dd4c8VMpYDjhLcCgNnAENCGDhjsinPEYfMu97Hc58kurdUFQmi6GbkCnmDoYZyJnXAHnUZiGUwzzrzWeUkDx4pm",
  "key38": "4X515vLjgRnmdCCkxS6EwQgEFYqbatcDsrQ5ajgzLQZzC7u7JQxvHo9GiKTGRnYyhK6m7Pxb945tSs7FTQcT8gHU",
  "key39": "714VbFDzxcdPkYxudpTQpXcCdtub9rsxh5YhgbCMVMApmynPqeJCQnA1yXKdt2p7MUogjtRPeBMEtTNoRe9VhC1",
  "key40": "2wguo3Jg9ZgpqxAs2g6SGoR1Zai159S5t6fjQCCXznQHnHe3pQ5cP5jLxhAaQvXUp6Feo2CX57YopLULfp4QjGqF",
  "key41": "5hFzb3K3LusiFqA7uzruhjq8otHvDYuD9Bi3Hd3RXkQ1TZXSHwTXzbVpTUAe8AvtKhsjfxUpDz22J8Co8LGjCRLn",
  "key42": "4kJ6ziihKgm2kbwPYs2rgiUW5xBdteemtGcnxsxEXwqiwx4RGGzQSEcY3dHZZTjUfWexyqajhfA23JMfP4ULWM5a",
  "key43": "4usj6UQkLhRGJEFcbNNkipwZpEyS1aDCwRXAAzYZzdGx121hC5ru1BRSh3wWACB2rRJTPYs9U9TmVV1cg4jXhB8j",
  "key44": "3RB2uoqmK2FaMua88qzcqzXZzGk86nutWsret5PAW3buefythwXSfK7GRXEeqvv33zSAmmnVm7PsDbeSfzYZvFyf",
  "key45": "4DckUCnkfyoYhurziHh4FjgmxH5oPRaiKE3cyEe3FQTZPMs2VqKnsRKYaMahYcXHU3prFQcDg7hG6ZbBKkwxAF7m",
  "key46": "awXdxfs3PvcKti4MBammf2DQCtEqCZRuVzYGRjBs5673D1RtpGiHWWkbPQT6mqtMHqiMYGzSVPQjcmDbaBMFy9d",
  "key47": "5xGhno1NB2bMn2ybReD4NJn4akk7jKJFkxTvm5iZcnwwTiUdV3idZ2p2Xz5Nwv53t2Dm7sqpfcSoMF8ZavGicgeJ",
  "key48": "2yk1i4DVShrw8c6uvp2ns8wSez4DPY9aPTMAxWCBtAxiiVcL4nSWdrQZAsyGie3LbF65DhWNABXtQK64fQGfUywc"
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
