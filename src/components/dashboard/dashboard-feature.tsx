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
    "2Zp8aRntFqRBpfSaJj4mo9iFHQAvqDUHEW6p49Dc51VsDZXoafDZfaBF5HWiGv4jkWghDHnb2URSSxkd7putMyVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34vrKWTKdPrA81mNmy3VpVjtZGKnmkiADwVrFzmWYNoSizgcd3KGakbd8uMw6S9JHouKQpPhoda1uvNQd6LKJX4v",
  "key1": "35x1WRZy7qohp93BRkZeed9BwYiZq9DYKLFrFfwXJPBJudRw34Hv7d2dC4ExdRUBFaUpFZ6C5Z7kaRKmsxMwRJZG",
  "key2": "X6i2QaU2VSsk4Dmr9smhVcQbdtCpvZJcpMRw37SjHiourQwGrW3DwEgxqab5cHXmEZRzTeUqQgefHayDeRKwREu",
  "key3": "iWDJBAZbqwRxAaDcJkkJWvPy2uaQX1zpvpkPai5NhgxNh4E1WfuLytABPWZoMy64PUmy224CUb3ozmcso41YZ1b",
  "key4": "436uewwHobS7UFtegsTaKkx8xkAbAFSQRCVWLCUn124aWezvdrYds2QPYFBL4L3FVQzPiykP9Efkz1Lb7MUXDn8H",
  "key5": "4CzxjASNBqxwDhxkckSB51AXk1RmiggrDd3uQ8Uc4NUdJakteGEGmhz2L72GMBiYVbXicECi3KfDYuuFrcNsqant",
  "key6": "u3mGT31YY9ymX4tRQJBQiZoGSHpq2F5TTwScjPAie4sXAj2KV5Fkicti5Kmzouops7tAKAdEL4T3PaKtVkMshkL",
  "key7": "61vv2w4KoiLNPMgtYzFnhDjjcjPtRVWc4k5WXSvzZ6TBQf41vFMqBtTw5QTec4XAFvzoZ34LPaP1qzwXh7ngiHNi",
  "key8": "5tUuGtZ9khNyEPeMNMJfZ5xBc6HVpTJ1PoCukfJFtaBFnqBtTAfS41XYMtn4wiJgQ3zi9kNHVE23BsJ21WGPRDNN",
  "key9": "2Hwv2dwpUEm247P4dXhBZgWH14MpkiDKUwuiSmQ1iYmErpd54AgvtPvTCWVYRSAHkXsAsdbcXpGjX8qr1hD5sg6a",
  "key10": "2fxZWEho9Gh4rbKQirDrMBD1gUjSrGSbNabwjhRGJFLow6v4usoXHpNeqgAj8Ldm9sXVvMnzyaLPqwD6q4CHhDGG",
  "key11": "2KHtcyQRPa2hEvkKGeBVu5PkdLFLfuYcAJZuEfj7HxCBUzgyXL6xWPmHysiicyXeyt5Peq2E86zcjMetEgKDYXbD",
  "key12": "2bA78x6ZZtgKKJro8qU4siFKHAnE9XTFFCALoYvpt1yFr2ZVyQWSnZZD2PBquzpqKgRBM4eJ7QymnKSJ8etASwKh",
  "key13": "55bKSzTynmU2WFdAh3aHjcHHVnbSf2bQCRAze4PabL1vtLGwyiwU5A6N9g4Hxuqf9HNKABpSTNb34Rdn3db1oNpw",
  "key14": "4yNDXBhVsKdAw6iPtGjRm3XkByKijWgVUtzXjwWuhtGi8dsnzNEYQR7Mb4vrVuRBkZLexHJRFBkesUQcUQkFxAHx",
  "key15": "jtMyqJWjgiF4foQkgi6UG2YovxpqN2UjQH3aki2uP94TELPDze6dcfivtVScGBaVJUo3ZAsaLfJKduKPgXCS4Qo",
  "key16": "3c4iuz6mhXPNKLS2m7pi7NHkc7GQ689tzuvvfarphXucXb5PgpffXMw2G2ae1vfogbGMoTdbtC5v7F4J53voZgjB",
  "key17": "4Rk6EhHoaFrgJKqEX6Nh9d1i72nprfw8qsNhN6pqZRcgMfPhAmmyDi6XTSnsKTuhiSuyZ35AToF8Apc15ezTwLs1",
  "key18": "2EwfhDA1hhxYMMr7Jt984MyW9Z5isMYSTHujjXCygABQjKm6FQMPKpMg6CpTDi2nhTa4uwhBYrsWCgjsD2dT7XS2",
  "key19": "5BnXVByw46zpgmkyadJ7eUzLbKSFurFRzjggwuYiCF84GtUogmae7iNPR2XzDv8LPmKFMGyHZBLCUZ1DFochdhiN",
  "key20": "25GvqS6YR26QKhufH9x9bKtcLkmNi4ae5NccfhkbQ17vDVoNP1LTsspVSoYU8UpfgRsnnpZXS8mXaxfgsCsHuYbM",
  "key21": "31eTNcXbniRFVgZrvpKtxyRpCy4rYxsLmKB5URmJzvADAGsnhrm7VHKYJkF2nzb7kaViWLSeEE2m2qqPPKeDBG78",
  "key22": "xBi9bXz1SVbiX9nuDrK6XkG3QE1AJa4SKMmuKbCMnX2R7nA9Ucz1moUCyciEnmaZd7RDRT1TZu6Tj5K3akABtdv",
  "key23": "5dESwJMGwsjGSZ35MAAr3x3z52YpoZdsbp1QJNsXeR27nh1GWpaRuyjJPdg5raiehGnrwzNDurc6sPTMHELUFdj9",
  "key24": "4L8JAM4FYneYJ7v26uaGyLMUaWDL45cDiLvL8eH7VBq7jWeejUkS82EVgXNM9Rks3eHkwmorg3JFsazVFWBsLLJK",
  "key25": "3gH851GiGji5A2scCCQTxo3Hh9YDEmtbBwStCD5rYRPYecGXvc3hQDheJWrG6h1McvQMsc4HfprfTY37Rb9xV596",
  "key26": "3E1bo9bxvocBiGbZgSrcQjvmy2C3Vk2L5s1k4nZEHdn4qBNDJqSKqr8a4FU4rTucVfwhUxNs1Ynn57bxu3GouH7m",
  "key27": "5ZgjPCqgFYZz4eMepzZM7yFMvmsTFYsvmcQWQvemQZG7ry9Xg2PdZNSJFyRpEY95JRcgZTNgWDNmzKBqku1QAGFm",
  "key28": "475ouU5hJZm3TJF2c5nzyK6bNz6vh2TYUQkkZFi7DXgccN9r6NcTTSskFpXX3Aebcsgmf6Di87vZCLEcK5dJboLJ",
  "key29": "2z4aa67J443gvd2gKEqjXSeYvScDsGveHAfhdn2NR3XVfJcCe1ESCRqyhVbf8AtWR6A37r1fYhC2H53oWDwSNbBU",
  "key30": "42tCwL2RnmZJMwMmnPvQNvAsBzX2RFRjh137obzNFTkX8F61Yy4UwZ6wNguYwU6vpmT6CZH7WXV7QxVWGFkWZf3z",
  "key31": "F3wdYdNo2CvzyPvnnogDJJc9vdW4jeZ2QyTBboRJWKQcgLTPcxup25cmfjDMeWZoUMkHooLxU9dy8znDqfVzUTQ",
  "key32": "5DWKhtvP2QDAhUjRrkwzbgnvJzomPWginWZr76K3MD5Vq3Zn5hkiFwqdMDpacC9YQga988RCx3kQFrWwKuxZFbFL",
  "key33": "DMdJfyXiu33Ya6FLg1pBp7sVvFLS9Hd9MpEn9Lr3uFcUQNPV7c3iXBdinweWw6GfMMjLXxcj6KkxCKjAjsjAf4L",
  "key34": "3qvULYKQ5nLb7JLazykXGACmDRh2p9nrnG2K9AsXJ9rMoCF8gBRXVaFTRtbqYurzzRMyZVYr69QqwHszrJN6fsF",
  "key35": "3tdHPaehYxeN9VLm46kkuhbx9nL7afp1sqF9R4sxJmJRcto63m1BCDGc3ZnfchpyBdULVPgM1u8nfcUcentC1FFx",
  "key36": "XGqi7EjKgtMuyXoH1cRToYYxScoE4wwRb4zvXj1nQhhKC9WojZYRA68sRmRyKdgmJFztSkpffAe1Qu6WarqtKpW",
  "key37": "2pAWvfrf3oCMFtq6cczpidVB71Fqu1MudrqriybDQavkGpnYUhBfasuv2zSo8MuUKtc4UNkAusHmgtMDU8V52NAU",
  "key38": "2NPGtmq5H8YD3CMMCiNcm7BfCo9nmkfNhE6UhAZAwrC26mQktFQwHqeNct8tKRPEXit4xxL3NEUQYwydHji1Fmmw"
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
