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
    "4ra85d5BGENvwyQq1ro9XRumDszh1BkxzrknEnkk3ELnKBBsxCf6v899hGDcTYeE5onqoxnZ87Ki6mZ3ec4cygSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vwY8SER5itat6DqAPRoRnpUfhbrgALxBLpwLSQKVCyB6fiWEzUK8KRotyKsNaEawLs2DssJ7ApVPkXppM5ZUCLR",
  "key1": "dFotuDVkqvb8CMFStebHXwJWsjB84ZQjew9rSs81RK1DqN2v3mXG37gprUDi2vMtQcyM8uq6JBUmWAWhGecPfni",
  "key2": "5ed7N9xRyUf7XG4X9Kt3KPMR3v7cUNKBzVBF3Kx9UsV1oeEFi2ZqLMVkkZm3pKHkgqs16AkSwGAjzNLhvqGka7gG",
  "key3": "3Bw5hpZiviEVBJUkdNf6qFBQxrcMnzbvoMiPKZFQbamdqrLLnzP9JULsqNRCHu8eU6mgq7CuQbxcx9665fMNM9fi",
  "key4": "48tnR6bDXbX3ySSdDSgXqMrDdeNaBbTqZw9ef49mdGq6fniegm7GZscNGsnPi1DAEKSfpAbyt8sccgbXNYjBTDgn",
  "key5": "2BmZAHiqGWTWLkBJmcpkSdGPvQQ6BYKHBXfbgdntQcn9JtsdDvdGvbCR2r5W2ZCgChYUxvdg3N5yFLys563rHGTL",
  "key6": "drE3L4sT2VbSZnyTC6XfznsjPookxeUQHa1hrBjbJTamHf7FT1CFHAXNUHQCpKTZ3nuqTWSpJ4WYwCyVmPxYrYo",
  "key7": "2JAqMkzHdvGmypdPVkmcBXNguum8F3pW495g9nVC4mPFnZHG6AHT6fp4GSDVEouhAHD5bAywSRnSMoeEhhMSHuU4",
  "key8": "67qjxk4euJWwRMnvYCdrwzTjfEvu3XqCexT5pMNdw7iVd8eWG5SETJRRqSAt2VhQxEgrbtGdexvuQAct65Ja5dCy",
  "key9": "5Yg5F84E6uam1gqanvxj3FhKFqnuSSeNHTWzhW92NNLF3kVzjkhpBm37EhNpbgJx2vYbz9ZTFT3uzmctrmeK1xPv",
  "key10": "3UcBqRRW9YvBpGLSHUs5u13hMaxa7WyGTLDvVc3WmdEjf4bZhu1NK14TxTBELc1rMzxhA353Rtdhb8eMVuNqRcr1",
  "key11": "2mbaitynVoDXFRoWMKECSGgxT8xJCJu56dKVDW8WyArv1jjVP6Be8U4KzL86jerFfkN3QodG3ji4LcPuvq4o9Axr",
  "key12": "qhoavK5n77gMRb3Hbb5TUxcCBdk7VBaP7KktTFwPcauuRLeA7LBv2vGApUodxuSHxVz7xJdXuqW49TAnuYg4mxx",
  "key13": "WBerqjZgXoX2f2jMrjY4XonA8n8ysxA3AiwCUmi2FSoRMtyxH2WLwNgST1DpG9E786iQL2WSoFsWWMJZRNyubFP",
  "key14": "2R5vAR3ZWDSDnhrt8NxsM7vSasDKVo99zr4TSPRUmLCtpKT1cZy8iTacyZ3B6pq7yQvpFwRnpoZ7KMMBCfqTTtTi",
  "key15": "5mY8HY97RY4yBhTMDfmjWzCeiPbedVyLBGwy3R2kLYiW5AbAWZNAHYdcx2v6auDotPh6C1hXLpRfUkspjkQoZRGo",
  "key16": "osYCX8gGzDyGF2axCDPqJ6jbTNb7YxeLQabCP9tYUAdCzpVh6bZDVBa2TnLFwAiye6DbG6Bm1ead3Wjto1V9eP5",
  "key17": "2XySPBB98SQH2RojCC7HHDXrFvN2SDw2f9mJfMBFccAvfubCZoR95Fs5Y4eSgKvt9272Kh6wc1oB99mrJnPsmwdt",
  "key18": "53Y3MFjMVRM5DNfWHzXtEayzgQw1u7AscjopwY2bWQoMp5FrmwFex41MbCsRhd2D7JEkkVeWVqYjP6NJAL5hYTyh",
  "key19": "2uDhiunS9u2ukifgLuTTun16xa6NzrdJx8AJmzsTBCZmCfeUzckMXcUW73udJuPTnQkz314TL58LXScVJAM22Uds",
  "key20": "G2XHQfaapbd1hCMC4XYc5KwucLQnYcgjFqkoiQEMUL52G1bqkNuzNX6Ta5EWaZ55rxFKYJcStUjK5VsxCVcv1bw",
  "key21": "2Vw1JvpKuJKmC42etQbsZpSWaURQDJyeMcVTyeuLJQFsNVvyxF3z59h4ANNS7QNC6o5yU8e3rVqkYhYTsQHaxiNT",
  "key22": "4KZukoSaxCozEfnVpPMPpQ8sJxp3b1tBaB3qpRPsS5Bqwyvd7gkmXBt7FnH6aoAUYSmxmfuwK99tjETwGSyvT85a",
  "key23": "2obs91eXZkcjUEgMqzSjBQZnmFzZneW6AmJ3PfryX1qf4L5WgZq5xt6vC4dVtFCBd89SbCQKBA96p3hHVm3r8rS8",
  "key24": "2kFQ89M8TdPNsj7CcXJvfzTQRSPXSNXw3hQd2hwawg7rf7ho4fSdQB9FNBnxMN4KtaWdzvLmcvNr6XXdFaMdofte",
  "key25": "2LLJRsTGvRTn2qaDXVZ8pkA2L1AtkHVTxxBQaTifEJLv9qS16iGqTESTGm1QJZNwmXxpospV3ZJjXJnWtUMaEQNH",
  "key26": "4cYYF3CgXfjnBmbpMmRK2ggj2MAJRnuzeAFu8bygF7KGSsmu4My2gpP1cqyhyzMANokx2ARRLnwGFMkxQfpd7AwT",
  "key27": "4DoVHC1gCNd6ZjUsQnL2uCYvVYDxE3wKegoPKsLw65bs6KE2ze7cXbHhyFTv7o1HePS8keU3k1nvQNFx7PbGxjwP",
  "key28": "3qehVUUKThBJwUgHo1CkvX3dS5b8U1gF3ByQMx3XKUWuBrCa4DBBVWcq9hnmyQpJKdE7T3abadxas8RLGpPaPEn",
  "key29": "5W3wd7uUvkdgmN6qGra8RMmRznVupJEdLre7NvZXg7g2aAwgKo8WfCpjynC9YPBMBPXtJocWbMNH41UDKgJs2amu",
  "key30": "4sxDvwbGQLTQt9PYDwAv5NmYknAmtRjaaieMN5L3YncuurW6vu5FQHA6Dk3Wer7Xpon7j4vFqM3RpZbrduiGUUBk",
  "key31": "3e3XFJage8kpLLtK3yoRwcyFgXB1Crg2yj9rcEyfXLaBrXwrMSBvBT6Q34zK7nEMh8MhppG95Xsb5YfQvHmHSFMa",
  "key32": "34xDJ1TA3iSGDDnxHiRdYSbvtK29YKKhTyZ3B77bTyRWd8JBR3UhZtpd2X2sCm3QoW7BWTv1QkinwTRa3564TttK",
  "key33": "2jkHuajPnKfB3teHwi8BDyAj2Wo4PNpNATfYod4HQ7ZEyaDr7JDF9CBWnJcbyinbDBBTLQM4WpXR8n6p9kJnBnk4",
  "key34": "5EnsigBi2D4i7dGDwzTS1T17SeMgQU1M3VythDh4c8YjQ7GJyyGM2rKhJY1LuVpYVaDxEfvE9A3ecpQGV7zCHKLB",
  "key35": "5zy4oDK2BP56FjfUq4uTt6ewYPrPHkLyU4qz2hF54K31x7z7W9okaTFE26Qp1hYB3qskk6hSmb2gC34ytYF9SBBy",
  "key36": "AqpeCG4f6ZwUZas8yjdPsCi4Bq6QHJBmv9acScULCgaZUWccmJ6EdYiPnAHnrQ3QBTrTTE6zY7nyXx9txkyqva9"
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
