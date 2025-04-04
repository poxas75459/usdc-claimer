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
    "4LZxV8sD9YBTcdYtdwPiJv4D6pWv1sEkk7FMNewVqAFX4h9FfgLydDAnJeWrcAVdk6VSoyB8qK8Zy6irrXphxhW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34o7pQu8hGzrS9ebyjvugf2k9XtGiVmLBkYcBPNsJ6qNfmsDviR1sU6cHPsAU5AaJLio4HcZw3Sr4s4HGGF6w2fR",
  "key1": "2e7QK4cyBq91QwzjLQqq6kijgfU86CKPJntnZm76LvZc8bQYRJof5r51rWeesEWZHfHbrpDWYRkJFVf5XfXZfWyV",
  "key2": "5SLt41docutpFkkvLmroHtoeN9RrTjiwzv3ZUM9shcrXrgtqUMuqzgwvNE15RYBLpePmCmjbLwrg8EaMEMijHzh2",
  "key3": "3KVe1sypYCupjuoY5piVFtDUWuCi7L47Jvn3qHy3Qd9kiSBg1F655Zjf882vohSEKssVMEsfNJEdX8TZRTzN7vS7",
  "key4": "4RvNCAQDFutPGQgijyj42nWnBqzzKViiMBQidnk9cC83tRpT6MM8V7tunyi47avs2Gd9BqUmwpKsjCQz2QfGSNyw",
  "key5": "76qjatKpLw3fywzkiv5uMCdd7x7o7w5jegpFx4ZrB7ACAbgby97N7MrxWnaN5uVeTT5PjcwF4ALJsePLAJiYfUN",
  "key6": "3YhAenM6LmqMbvJrDjPfMNCWZNF1RQuneviFk8M3CbNUaVjTHwJtbaBUXYUqy9qQAJVmsCWEdMSyXookoDyKuRn1",
  "key7": "3WLfGWLv54xbvuKKM2gyoDsCKPGQhJL3tkpiC8dJSxwvuvYRSDmvqsWfCPkCh3DUcPej7NDP5YpcyncFcgJJh4GP",
  "key8": "4bN2W5HsK2rMGXb7G95Jy7wrZzgS2b5THQ1LJzho7bToySabAX8e3A1jDfF1fJz9r8QG5nXnBXELP9SBz5NRqKJr",
  "key9": "Rh7XkW37WF87iNTiVhy1KTNa8dVWinbc6jweUobnMxjGH6C5fSVuDiUNjJTsRDdBTSqeZVKNB5JGDum6MWWX6DD",
  "key10": "3NmWei1H41DjwnSNFPgjMoPwjBH67ey9cFPWstzL2qE3trRds6e1PouVASKaiPsmue43u2vT9AobSm4gCNnjCRGN",
  "key11": "3XrwU5om4RFHxWMjM5PMrZT74NPDY1CRV2khdyMVMNX3q8kKWuMQi29KXTx8CRfiJ26Bnw9SwbuiK1nLo81RyTvK",
  "key12": "3DPukTD9JYpLfrNVvxT2vb1VqEpaKksmGD4UFvLyZ4L998ZkpLBXbM9CpibPRNzGRCwUxFp3PUAmzCWfCsaF9jzM",
  "key13": "3WWu3ci75mMpXYGBS1cM9ezRyqufCiPhkyr5Qss3QLZKyseJR12nduL6VjU3XiWjKxK5xbLmUVMmeybL3TLkK7f8",
  "key14": "4gxE2gnuwUPFXHbXjqTXSPW5yH82HAJjucAjCoQbBfcFs42PGWLAyAUr62jLbTVQfWzXNfbQbk2VHt8wZdDtUJbh",
  "key15": "2Ca1UGBNVCBJg9zrJFU3uzf54o6EqjX4bgVty2Fm71WhK9tc6U1uUEELZemLS7SKYxjmgM8JYWDcuwB76ip1pS3Q",
  "key16": "2DM8yu6Z2erUc6q9a1QJDitvyEXEGTCMLkDd5zMDqmuPueBmdfzJuSWasqPMRcz4UDtipmYref63FiKejTAVTnXP",
  "key17": "4kicT5BtB8X2UREZDckwZaTjTz83GpZjZdb3m51VjDVrQ5C7P1M4eqNa2q9KGxkEg8Fax4jEXZrHci6WDuztkwwj",
  "key18": "3YVw8o1iBDrdtemi1VwMA4VY78Yqf8Cz7nRm59tmN5Dw5nDSxFZrhRyLk8quEi7pkghGC88VbAuVgMDFg9cTMNgR",
  "key19": "pJt4n6Hz45bPoGRjoMgRJkXvhLkaGyKTf57WwKX6611PDh5px2NcfFNBJs3Bg1hxSLSCaxNv5uyJCRiWbpqKQJL",
  "key20": "YsQHc2we6mboYf8Lsx5mZcJFDtf6abmsUDRLAAkd5F6i79VqGBFhxXWxsak9kpdwpWbWisnGCEcUREamv66438Y",
  "key21": "5FeygNduZtFa5h1C1PUykZ4s7XdRmbwP1i23Gzwvmp57S9TnDYmvxV3VGJ1Y5ocxoH47AwctNa56vkipXgPXFjhX",
  "key22": "MahUWYEVi3Lor8EuHtNrQdtu3MZM7uUJ44jVvYJEGyCi4cdYeFg9ceac6YFPN8PkUfs5q7s9EVooJzZdBbiZpPn",
  "key23": "5CAvCfqe21jF4VpybS8GePZvZvhto6rhtjTUDqLoSFkn6c5crHMKL1a6ESpGoUUZBPb5c2setboZFiQJnZxsyrDk",
  "key24": "431y7fM8Ri9Qi6xQCysC8d5gYKSiJsFakeUxpicz63b1hNqPxM8kLQ7wLKMFrCpCoVmnrT6tPRJMme7tbVgjDuvf",
  "key25": "Ln9y7Mrrwvn8TE8Eabv8Qv9kxLczCwCrVz7JNPwrPvHQq6rSbSNnSS3d5trFfroMtqeaFA9zomcXBa24BFor5Qo",
  "key26": "5tcWY2AsUAYBPHFFoCRf5FAx5xrMeemEULkEXHQvasEZR6CYZbs9yy3bXFWg7udUndyzmcBBWVJYhUGkGsCgBswX",
  "key27": "5PDvYPq657NPpeCeXVioQLKNrK5UBmVbaLJ5qxCNG7C9hcdXpkSsxhNTdPk4EcLrAPDWVXaj2dqXg41xdtgAKz2G",
  "key28": "4iy1oWbvEwWNy77xADT7XGB3wfrGXS7nyHq4yn4ANyy6PiajUx4rJ7Yx9MBvaPSkQQstp9fJcFDGUgcTDFgLnphn",
  "key29": "4mwqaX2KSu6uZjWE4A9nu54ndz1gYHbHuJh8jWzr57rfDYwqn5bo7RS3NhTCNY5gsg9cnRL8pdEX5kKqTBdJZaMS",
  "key30": "2A7uG4geXHXCgFab3nDoh3MLdEaH6qF82oVuebsVYiGYuHMBywh38oi9sui8Bm7ATJsZ3JaXxBuaPVuVk66oxzus",
  "key31": "5WuTgHKqcZxeEcG1WAMR1fKgDonUqtv9Hypekv3bAQF472NkoqG57xzy4yr7ZpmUML38bPTyEnXyXMfj6EPAForh",
  "key32": "GopQxuiosx4ZfmRzhyCBrwPne6q8RYxoFs2SF6iDUgxxUM8F6cvkgs75Q7L2dhhGNq8NPCn933DrSdFosM645tR"
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
