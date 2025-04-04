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
    "2WkKvS6mNYtsbwWMDypHo8dC3iBYKqEqaM8iSiJUXEPwmphVQJC4Q4zNGUUP1SLsvY6rkMRRk91C7ei1uoZ26ceq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zm29rCEuTAPgwev27tjW59m1cGFkcriFSm5gZZByvZ7tmXn3oCaTZNsHMJS3zazNTW7pGuRHrwHeLSWm81KcXvW",
  "key1": "4EwTLdkQPEi9RXPeQ1kump2sNpAsPDS2Y2KxkZxfWwNn8n6M8YWMVFYEXYcRm1iPszBBMGUdauHZuAC9T21qUXkm",
  "key2": "2jV7ELkeNsi5QAzkaeeMsXdLbqdSC1euTs2GgwxReHjNM6rryyfMftzcH4Kkg3xRHM31Lh9HBN6JZkEpVYdJ3hqK",
  "key3": "4CVxDTJeQsoVKvCimu3SECHj5zctKPDSbm3k9BWhByEyDC96ZTnnyKakgsjpQk9AdqdyJDRDqCH6zzJogxUWhMFE",
  "key4": "5hQWW3XzzAF4Gq1mv6ZJHvLasf2tKhEHtuE8xRZXRgaEBjs5fy3ja5Yufa58yiQ3VEE4kRFQeVuT46yWEddAdh91",
  "key5": "54vrAtQkTqfQZRucxuiSGypQcam1DdqLsJaD9h6dgMB79CymtGP69FEg8VwbUNdBGFN9eQcnzo71JZjezwU81W2g",
  "key6": "5wv5ahxEgeEL4FF9vyH2J3iu8hofvT24mShmi9V2xfSyBrYMWKmA4MQANWwJ7gGPkqtFvMZbJKvDp8tMHp8VMVLk",
  "key7": "2oGbrViuwMeUoTWbopFjGwGUsXMFyFSnUVWmmfFdFhTxkFxytpsEAiPP45Ckw2kpNytvorB9YbLeQ17zWbiyyC3X",
  "key8": "WGH3FrpCJhocbFYEucrktdEBKcDqXPpwwVcwCUBtqDwRup9cKpFEevTqDzkVCyptREo93SeXbm4AXMJ6FVWzpMj",
  "key9": "2fQDb8ursPR18Bz2QitpCqmEYWYAXNo3efJFjiw6sAsBNa6AntEzB1SfTVK51YDDiKa1pFtNw8ra4V9r8jYYac4S",
  "key10": "ofF6fSWULpK9DTa2ETms7Gm4EKdc1FovGyuUMDxBggB82aAVgbuZUYSKjDsHHFvyETsyKHGNLCbEHUXqrg35x9S",
  "key11": "4Jaqg1ghdauCKGgaYUnVbx1Yr7PT95dayzmBCrE578hMDKaf57vThX3L7n3N5Yv4wkW3vAeGuaA4Jxd45ibRLLzF",
  "key12": "H3YxQMFEqKvUkg1a66RRnRrnrBCvH8ULxSmr6dzu5UHTaRWSEmxqNbZEiE35nmYkGScqVU2hCZUybRdMZhb2QHj",
  "key13": "2hS3R9VxHbqztTWnWadmdNHvfn56WEMG2JjVBNbXRp4TcT234sD5EjENWEhGzBRdVC2XQQwE7XdtQzex3mz4NUHF",
  "key14": "2zW7ZZr7y4XpurroR9FhWupkK6RafwS8YvwNauHqULyyR1u59DPMgRs8jy8XnYggZFGggiimoHw662FQNzNB3k71",
  "key15": "4VYtkAwSMfARMEAkxLDznVbrmLX2dwKBa3bX4UE2LUHVjQZoyQ8K2uyXBnmBw5yA88bxojAj5ay5MuiMB4b79Mxn",
  "key16": "2x3q4FMN5UCqsjhKPzkMRxe6Aa4XeHc363AhSShVnq8hnNM4fr7yz6BJKxV9M9FQevBj3VbQjt6VDvSYiFHGki88",
  "key17": "4PoKjWu4T7hqgQ9EWcTw5BB34u9Nwm9YYLq5rqwyKDzN7q6uUtZvBhFV5GcrbQJDqmfi2WZtLLqNVRGL9gQFT8vr",
  "key18": "27Dum7mXfeEqWEvSYPUc9HwdrUBDTH7jUgW3vMG96BNxGDPP2jvkZE8rm5txMsB4UXz9maSGB6sWob9ArPiMMomo",
  "key19": "4o1wsWv9NaoG41xSK1pZxTtKU64onG7yt59MEtnsBE3Nb9sEMteUBAtoDQj87snJuSHvGsNdD6xECuyv16phJAqQ",
  "key20": "4pX1TRNNLdtfk6Babys2wJD1jb7jGWWfdN4pJqEEwscazxLwnSEqu3itpiNcWEURJuV9t2VkcaaeJu8sRFoKAELm",
  "key21": "2LWXNKLSWFgwBTdNJeKXs1MdydPoeGDListP8F8K7oJfhVWvdpMrpDeZL6XpVxjHKyQBYMcx9NZwB7ck1aTA2DC5",
  "key22": "4kirpMMNBdWyHBusdttVGcwbK6kqqYtR261TEdQMVzzFHuP5wPRLawE9bZTStDyZUxqePxKCDfjQMJ8k3D2EC6Qd",
  "key23": "oXcHHoFYMYuKJZ1jSccjA8YZYPGbfdfCBbmH5KMoxrzMqJ9sRpdHw9vuDqVR6VsXBNQYJYvhyyJtGSqdDAtnQy1",
  "key24": "3FHEf294ZY6xAe21KWcpcti64YqbjHLLZMy6nhCkBZtznmBAoveHsiiURnY3UGGJH5xhDsXtA66ZJrsycxP31uV6",
  "key25": "4vTHLCUoYKvrh3i5BUUGfUtz7Pe37EQ4ypXYAZWdAHWNZknAT9E1VupqM8YEpCDngUCizwryUCL8DAAt8PVaKPyT",
  "key26": "4KS3T1pkZ9A1VyuAZ4rcenCMc5iBSEYQVkXDJiZECBwUoq51CubMFqw3hXEFwTU75q4esc4SM1rqyYgtRgZC2yNm",
  "key27": "3ixY7h4LsPQ4cJEZDBF2XwyV28n9SwEKHNPGozW4bER32wf8k4z8SwqhytwmrGUsv6MisVmw6kgiX1JBJLJkWJwf",
  "key28": "5jpxAsgS2N3ej2V2ChEpdsNntZvJFWky7xQVX8zY6T2dCNw1FvK9E39mDWany5eNZHuCZEV2hyj9nUL7BwFjsQoF",
  "key29": "2MwuFH9aLd2yRJnxXWG7wp3qcFew6RkHdk837ouEhWxmU15QyqgkNSUzEkV5XRpp2w1Sr9VxdLpybujAqsrmBDdZ",
  "key30": "3A91ABDgjPhNTmZgbHryX3WF846TeqJxRJrXH17kHKpCAwDUYuPjLQgfoxzxiJtfJKgJojGhuMPAETV3iWTpob5u",
  "key31": "4FPCK2Hg8fXMQQA5CLjXbzw18AkJJojhgA5WScE3fcRMTD2seEyktHMNiM2CnTQyx82wp83Zjma87N1HPeR4ynD",
  "key32": "4WrK9MXFdMJhFD5QLKRbzThux6sBb9XBaMSNNHgve8ivPhKperJxXfduzhSZqQFkXUSSVuU5ZTTJREN6LkmWz3aB",
  "key33": "2t9iD6mfDRXe6UHNP96awZ6gmjfEMCcvVSUYXsvRPApNJVPZvc4KYEV47NeY9JT4nonqcAHcMm8SGwGRXCtd9e2J",
  "key34": "2GFrH15a6TFjW6mkibS3Ty29srsoApvvnAXQBp844kQ3vszi3aB4xbcBWXwpiEGSrjAQX8k3MCRoCrfqVsouA9iz",
  "key35": "VcfCnhsXudUQb7RHokvc7J9y6Fggb3HSHb1Q5VHwgyQHn1wRc1LV84VYK1vf1VifjnpcQGTUzomRVMRiE513cEN",
  "key36": "5BLdQVn3XukpMLVfXUYzdq96HsanhXsL6VwLNbnz3HwR4TZvDfHgGRxN18JwnN7MPp7WBomwbhCSR3SSmoMjkxud"
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
