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
    "5B4d497CvpMbttHwhHCxxwt5Q4KnGMs8CEjnGTLXxVYbjwucMAfjJTMK8okQsRuGHVEjbUMerX3XwqGENCuNcnv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uU5hJZKtZPvaETgQceZxLDuXajriRvGY4gAPWSbvvoWn3HWCEtDjjnHBNqKebCExXeyKZzdjb84wF1RhSNLDRou",
  "key1": "2WhcW84oZbQoRzb36HrBRwh59UHkstNYqeNZYcb2p2xToWLkkG153Sr6nvqSRczF7gs8CqqVtsUymsnAkRPZdxDu",
  "key2": "jmtjJaKJtTitt7CgEUT1rgh33PuiAVTk9K6zmGFgmBj4kmWUq5fuQb5K3XX8qnd7cSZaUDSuaY81ke9qCXBAsTM",
  "key3": "3Y6DPTQydYy7aZZqg6aasfQZPqZa34Ayg6XTNba14DrjHaaYsAmcrBZiP2vi1EgjpHpC6bJdyywJKAKH1WuMnz6f",
  "key4": "3TfB27wJGyjXD45omUjQ7NsLpoFX3xBcsaC9wK2XLt4Y3LdGhCwsEPdz8rRvEi3bAompsbiqg75eQsY5ZakD95bX",
  "key5": "CjaXs6eDGHFeMLBkevZRFLj2Rz1H8AgyVqYm3yDTUd2cTpUArcauL9jC8MPeHgM46zz44UNL5udcNmQ3eU8pLZK",
  "key6": "5hpyhGT3xpN5pGPJ7FjTK4mCJKt6LDfbh5jwbM2ZB1JiPhSaNcPNa8TVwqGo2vgUY6Hvi2wY8314yBTTzogmwf7t",
  "key7": "5QNMDP9YADBmHffYDs1jfPm4XRyMBecMrXs5iphx8ff49asdPTpPtoQ4mpJmpCHxT8BGJE6buDQQHpCRsTS6pmzB",
  "key8": "2xU2KcjzADPdyuhLRHfSUsDwxyPeYMV8DABb7SRKZ9SaoQGqju3ziK3T583ppRe9bAD3oeuwwhLzY3TPPufjbtBJ",
  "key9": "29qbqpMiMN5yQjS8rVQ1GxKoSmkgBpR3qAfMWs1cdtaTNAXWniqz1wNMYGVLaDU1oAYyUYUfjJEjPRrbLzseWapM",
  "key10": "2H6nrsM2mmUCHFtoNsCTSGjzsDFz4wk35VGic52RnfZbmQgxkGcpMQynxgCS8CUQPSkPUMH488veLYbNrbeqVktm",
  "key11": "2U3dWXsTWTSn94ccxtN88pFxhrtnNtYTJarkjwweaJa4nwUDSn5PUdMpnCLVeaucmFUwBADFVv7cJ2YX7VENRj8X",
  "key12": "2zVXdKYkyEBdrTP5jc1ZvRFDJu1Dj3Panpr5jV12Tc3rm1k8G6u31jHhhF85WmQhAch4iddzyWj6QGF4B4jeLedQ",
  "key13": "VMZ99uMi1Dt26PRVYpdYiy9Gjtzx9XKQaQsDju52fy365NMbt2EbJ6YdZUkB7FxmA8covrmVeXqoncdbx3KT7pC",
  "key14": "3AaX5A9sqTBW5NxTvu8rsv72NE211cLe1DoaBYErGBLnnTBqZq9RQ5fXLSAE2sQCGy5MCeMgrRerxvG6HryE4goF",
  "key15": "3EYLjG8Z11EysftxmGNA8UQm8mQesZcXJvAX2Lwhmjut5FHu272trb83WMczfM1zMhxNReupatDbWFYM2oWshLEx",
  "key16": "2fxDFmiK5744A9eyR81oNPPuHBB1ms3HxJarxMGExUN3khEeX1kW28GGTbmiVXoUynRFaw1LDQmvFoyXzbvxXZZm",
  "key17": "5YqVF912nPK1HxyLHyHeFU7bHBp2fsdEMmoEkXF5ckd6AN31M4YA7EFDZ9QEkdzSjERv4h6Rd2ba4A9WAqJwkSgL",
  "key18": "2wrvM3s9akMf6AQGWmcXfQ3aeEhRQzRJnorZfdVZ4pC8RhD77xFo44DC6p65UBT4cvVRbq63rBbyqzhiVaZLyhq4",
  "key19": "5PcxTqqFKcBNfXpHR2eVxEjbYmyUqkTpHL7XrK6ci78eVN9AH37DuNUmJLmjDNU9z5twmYYMofXRgPSasrD2fi3U",
  "key20": "sJfLbf5CvtSs2atfW1G6pp8qA7TxNDEDKaRjtKxzZuGknhSDqqpLUzNXh31Yxg3kt3f7wmR4Y4xycUXonFpgW5j",
  "key21": "3pwhmEJ51gaZjM2AkYuGyQap4yfdDn6EU2bwHqxqvqGEiSDUNkTnCJMu9nbf9iwe77TSkYKfGSy4EcNpsyGBpsLa",
  "key22": "RzproT1v1JK1ZksDt8ciAmmWS23px3r9ffNBvSVhcY2i4Q1sVxyRZ3R2LiZP1uav5jLCSHDm6174YQFStvFsu4K",
  "key23": "3asgADqHenkC4Lhqa6mTrSTHh1EhjG7aN2xZvb23h3H4igMqoFhA3FpJQWPqN74h9BCaaUB9DYzNmBcVWck6gJff",
  "key24": "4CKS2HR2P7EZR5PswNVv4VQX9gnAS61Pg53qbDvNoNrbXMFpM39irvhiWHkDsdU7ozjYpbtVXXSEQVdHe9z9TVmY",
  "key25": "4yTxjS2W2587TE7dqemUimckgBDd7ssCy7zPP8msNFPc5jVC2Z9taDemNVSabi6FtNmGaHKccS5GMurBKuRHYk61",
  "key26": "dM8uzb3xucK1sCDUGiUDNXCCX55xMvN2iwJ9Hx4HASS11TqVb2EwptEMcANU2UZmJ9CC6T8mwa9LrcwaERvtVcx",
  "key27": "5QC3A2H8cGQT2BVRfhyV2qB99zxwB3Hn93TWjo1heQvkrmvYhbCpwHTatCuHSXbFyCdGHANkdcYFAWncjgdZkK3d",
  "key28": "58P4mnLMbKWvqbMn2CJFQ442SyYSEAnk9PXPEZNtPHBAxN34EtdNPHFVWgrBauwuoc8LqeKJ7WFNP6zTLHMAhJiC",
  "key29": "2G29SgUCeguJHYVQuDeY4VcqBrj2zjLRWTEbELrqoiJXdKPnpEThHg7BSzpYMPN6e6SCQ9fNuBK1kdkT38YARJZ",
  "key30": "QcLV3opd3Mxupt6j1nULLFVBBfHC86SXUWQJS78KWCh8fGdQAjTZbvgzDpL2guXeGRqymsSwzfujLPoHGhT9zsV",
  "key31": "4T3EH2EH3Fi2KcPMTouVFvXuefHka1wv85C589CfB8P4PpbdkpmaJ6R9uy1AGns3PvMotzVUEyRsYpbHKiULbrTU",
  "key32": "5ddh4boK5kR9nBwPmZzZ4v39NaCG1KxD4PzRyNjRDkow9xG3xwfBpmzCPyE6DhqVy5Zy5ZUq1CLBFhrjn1aybhsY",
  "key33": "21iNKEM67eoHrXHNNyqABELdakRrQZcR9658tqeKrSVSTQaxF1az6TBEC8etfmBgN9AhuDCUsh5nMBmYkGyFLBok",
  "key34": "2X9PjRxtc4imTvASr9LNKPgKJ6pBNaWLuAMGTfv3ZJNDwPza4UvLZ2866cFzj2c6WsNpZ51FVTBSR9QE13ErvxxV",
  "key35": "4DGwv5QCpdV9gNesLQFA6uJo9jWKRXoDeTXgLJVgqF6ZqGmtpemoCBMSLnpXsCx9QqN6Rcqxui1FNzzEvjxKiNCg",
  "key36": "KWLK9TAybSHFQwCmvUF4iFPYNi9d5vJjGFsmZkzGvQnrimxj1Ke4HsbF3dps2dC2wgKcNEuFNDZSCPwzssNNcDw",
  "key37": "23eoB5xCR1gi8cWfvo1TntvCbDgNS5mJdWFsYtBt3CN6ShY877q16REpi2uFQ7qiv2HCP9TutPDNxg5GiAqmtZu8",
  "key38": "5cTbriNAkAb6t8jz1cPawptEbHMX6XcXEmJW8Wupt6baYhkPiDMZMaqwUAuFm57cN74RDmuXj9Lvu84gFoL8zk5g"
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
