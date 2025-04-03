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
    "3sY7JAJ8V9khscA8f4GBKCZzZHyRyA1FobpF6rTErG1UHi44fVJLPwwMencSsdTFyYA6pQYUVUHr64HjqEJ1MBte"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vK7uoKRnKvbAVZhqXWS7qrJ9HiWTRd2DVJZC1EkY2JCBrzY7TpCpBuFwdWhwi3KYgpnZ6XktSuhARNZ8c6tAbQk",
  "key1": "2zCJn2cwxgcUbt1PRokSpu4qmnysCPifPzL1CHWJHUfPD5aUiPSkLzqmCHyss9Z8ij6L7o2uAgu2uHUAWNhcCBaR",
  "key2": "4T9Kyym8YTQQDXRNvY9MFSPDYnHoEyxUdLqUkpv5RhF8FSBnFj1ejTotkhPHniAjDmLG1ToWmeQnh9Y2GkbDkz8X",
  "key3": "54MLejBerADNQrEZTU475CC7UPojS53hZKdghn37rNDSapv5WVrd8XGBgJi6gdEhbdg6sYLBTfR49WkFQmRNPw33",
  "key4": "5ggxvYZVnZyPhxLqQbPypQSu88Nmwyds4NZBQDP5hK9kLyHnj138nD8rk3eGy7nUDa7fWRPBBg1yg67cNsLs9H1y",
  "key5": "3uAUs1fRDjQuhD3ZFxNJr5ZoLd7954wcvXVvNAu9ynP4DueU8MF84hEhiQAqbckLkPFxETGCwndim7azyG5DteNa",
  "key6": "6YHjrzL27WtAS4bYkGcL2zzX1EXXWjALW3jEDbHSjBXru8GAAGtT43REXwRt29XsCMa1DxhsaeAMUCWzUiwRss5",
  "key7": "4H1Q4AyhAJZh1voJD5jaMJxLmqipTc3emjJ4KtuxhSizooyzMrs7tYtohbn6QQxdi54aaUpqT4aWGWYa2PDzAzvi",
  "key8": "2YhYTaEaP7uVmNV1vGVWsG1KkXA3TWEMSjuwztdZHHhFztjDAwBRFnZE5ZFUobrEjkHfhNbJmNc3AKFgVBa9ZSKY",
  "key9": "5iHqZ1RA3PrLt3hQVmAVUUAt2pydc2DBhbiFRnpLw7pUezvvck5fgEBTeATexMXg5XYLsBjvmaNnDPT6WVRQq3LA",
  "key10": "5wAdjmWCaxboTbC4fgP3DJMytZSPRgLsjFMR34eSdG8mhNzYyBGEorixjPmWDKACuB4RLcnwXSZnyTsKFRzLhAZK",
  "key11": "BFhR5eopQadkancC7nTJtRBGtzSyPh6Y9WdZHdpZvb1kjKoJhjvD9TixkVA2z3PW6URAk4gDUb2yW9UKwmbN66y",
  "key12": "4qiJhy5RUKnHXEkv7BX4GPHUdNWfFqnYECKKGK4XAJfBGhU3cEMeUUpMqdmrDzBzonJUTATDjCmVhiooBBai37wc",
  "key13": "5GGPi12Yy4bYBZ6t7MrUByVcNRZgh9UW7xSy3gQmbi17p4UiFHXQzomPBYVWZ5HStse448EkiXczBro2b2mEkeD6",
  "key14": "5oVTYVmJGCdKYVwaq84pxR2U2K2i6ymfsScr1uTcaUxu1aipWnhxVAk6PKp81hjjuuSi9AoHktfeQz4uxMGtn5xP",
  "key15": "3RxFiiTG5TNjC3A73FV1h29VQv9MzABkvbVLeiJ1vFi6Nb2mv2YzZTpY3VpijwzsnR2Krc8yd2Cs5T1thidCSFiY",
  "key16": "F6syKPbo3WpjcncG4w37nC8xPyRXFKkACXWmbTR8PupraxvJvMndp8ZqtAgQvMBw9ooHZrRWL7RX9B5CgLBA178",
  "key17": "4baZAcBT93U55cuNNCVauZvRbYaJds64TGBRBfv1YyXHug7s7YJLpiV2sjzmCEbBe42ZTiWFXMmvqt3ccHWC2BL2",
  "key18": "3n5JgePGqdKDHetP3UfhmQKS8NdXfcPR5hDwfnKRYVYRMM9XJ7AAfjLFicWLibMJGQTK8pMWjnZ77SCs4ffoBwt8",
  "key19": "nvDLDkVrjhSL7ECF7gFhmDuZu6QcGyupDJ5MGJwZVQEyenYVnehNDRChhK3hD5H9Z4CuwhoAif3NEHuZA9YWptM",
  "key20": "4XpcTxpW6FtcPgzLRBGRG2gfAj7WaFcNoyiWSM3wZkDrxUJzyK4yriEVApD8ziTR9XtxBY89EPrKFzqUWcmVASTz",
  "key21": "4FzTDEBtnR6SUzVjcw8qi1bzGfrmWaMKrewVu3NphWNfAmNT9xGsa97cxMTEQP7X7bSoVXfh54KmA3de99ocuMps",
  "key22": "21oUrzUaw48YJuBXxwMYio4Mk4mX1v9zDso9XPAiRG4LdX1bNmR6u4EPv55T94PkkfYWDBYPiciYrxESPve2KWaB",
  "key23": "3b4JKGgbSgqreFSgX2kKhjQ5rySuX7wrA3QAsowH46AP4HLL1nSaMhe15Gg4eicytR7iZXRE98GUhBSer3hbJYRm",
  "key24": "4hQaHQf3bvaLCstpCsaJFAc4NRQnj3aQKxddKW1bMJPuGg45m3gngPyBVT21Fa3rJV3QRpKRCS9PVVn8RTMk1HwW",
  "key25": "WAmJeqaeFYh7jqvSH3GuEQ8HsZVVpaVRnbJ68Bx6aw8MBcqqHNwNK3FM7TXEwVAC5c13pCvg6r4GNw97UUZpKw2",
  "key26": "3sbW3DhqgXa1zVTMVFvb9aUV9ProsNNYBrf8JuPhvF2KQfewPDSWFF89b5VcPrZ87UtahSHFE7X8dn2BYgJTfNju",
  "key27": "21vyfL7vt4nFnrA9kcQzmzfaJdvQ2vi3jZdRqZn4aqkX3fuWXtu6PK7EAn1DAV2dW9YZitmgCBF8s5aWGASNFF61",
  "key28": "5Jqj1uLS4yL3oFb2FwxUe4t3dAgY5fUeesXdqANnABYA2w9VSgPWLRpkjVJhw7bZxPUKWFHAcvKH4CWwQGzAi8EW",
  "key29": "J4kTZGXh9bRKLmajP2UGF8YfE3pNUUj8s9WQASEToZXtJu6gC9HKTxUsi56DJcvr6owWFw5UUzL9HQ4k5AfufCi",
  "key30": "5Q1cSr1M9aN2eQSq3Takx2TnKNaqzQ83iXDYQEGLLh95CDoZkxxh4QvnUtV7cHTrh4QPMTpM5dNvLkV76H9mvgae",
  "key31": "N4vuATX8uSZF3UwcMtAFYpypVhAMtdy7qDi4hQyX9sg6qaRyBdabRo3x5KPUhE2od1Nh2mK5tQ4EeT2hEiW4ntU",
  "key32": "yD4uuttY8zM3M5eafaN8TF8bEwgut8GRXVS4CjSxSie6UMKvGX4qnFqumkhAhXPFUriZAmTy2gZPpibfGeRqsny",
  "key33": "5qEg4PJNjPKRGsycEjRepqHJfQNBeQtxFr28JH9FfPYqvkvQcRZYGTjjTbFAyAE8VQRsot7AhTkYSCG4qf919H8g",
  "key34": "2c9Hy1rhN991Yur3FxbdwtLye92peXFDzniNR2vTdfcA7bq6X7URz6eArJMRx9trh72G2z24VWFVVAkzCKxQXMDy",
  "key35": "2Ywr8rpmriefo2WhAUQBX8hU9kzxwGtVkETUi98x2JC352du7hyitDBvhHNTucDAApo6qAGiat6ypkvkmZkbB86g",
  "key36": "4wTBahgYk8NECxCTncLBHRedkeu4rYVJMqGGH8916NUVborZKiAcCxTWjYkDjxeRG873H3eEcC6sNyEF8jM2ytMH",
  "key37": "5QhXS7VL4jbDPYuoczP8dpZQTeADRoNc723Xf73WrwzywBHR4pvBSoZFMZ7dTiVw31UTq2y8eN6uWtDLE7PHdcN7",
  "key38": "2RTsb4ApksMxd2AkVkMG2WVMnLGCVF8v6RCPsYxdvbzCbkJqtZf58i6UDf2hkg5Q2ommz7b9jXWGw6AzCjSJM9XC",
  "key39": "232TUeLucX5MxxYHmxA2tFvQgbSRPPUekf4V19iYZzvtZ8L7JvtpfMu9XWmBhktsEJDnxLVSbHinEHxqgFiVuWWa",
  "key40": "5wpsRwvjJ3AXx3yaAAuLZi3PHs2DdfDnQrSWGaz9NKYHGEkADCdVaZMg1dQzQw9Yb21JKZmbLGHXJD5EXWQPPkHk",
  "key41": "29QC4v67pRSnH8ZH8GfSpy9RjLHKRDMbnhysCjiqtwM32Eg89UJKHiKBGb8d4Dx23Sqmza3Dnyf4usWa25LzYqKd"
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
