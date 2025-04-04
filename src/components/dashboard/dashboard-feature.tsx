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
    "4Em4TETun5kFDHG4DpkFdmRvcFRPjmT2cbNRvV2CzhPBbKqUjq9fSq7Ux7b5uKsNAYN2iKVjAkWfsAgm1AnQSFG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GY4dciB6EtcpTx7JdkJ8fHi69UsLBaAhJgnocNy4Xxrw9xLWp5sAPUXBYoGC767uZrVnsKWsLDJd8ok7NCQgGyg",
  "key1": "2VGYmvB2nF4K8XuZNtrFWNkvxwyopHw4fV4KVZRnNNmzdTtHrn7LcHQ8VZB8QBq79AtwrTWVy29aYnUUAGCPqVpy",
  "key2": "3ZmyGkXD9nKuQ6VGSKk3udEbzZpvnSZitnVECRWVLaNW2XYUcAhZbtdSWecnvRKSWVs61SKbbsuEA4ghpoUQTAv",
  "key3": "GsFz3smHv7rrGuuMvnzZjz8zxw8zoBT2cSUwgANMzUYaoGGbLPJdzZSRdeQmUTTTRobXnw2qJPGJtnYkmuZW6v7",
  "key4": "BBwfcPiZcJRNPvd2QXpBj4cziKqrxQo34gpJXxgQMpehWHCM8TtVgwLR6aAarPDJQU2NNa3d48vQX9rcWzJcYkF",
  "key5": "4aNXNK7TpvQgqcioRptQfSKPcKnocnmQ9XvZwFoaq2EULRHRnyrn2rCBZfJRr2dJEfz3yCYWkoHU3RnNfm1nUD2i",
  "key6": "Ao228tnfUfzoR8e9JyvRgcvHTBSrwDpcur3TMkvxQ8FpWpgBYYcWg9oBGHoHoCigdiBouaJgruaPWcPFUYFZUwn",
  "key7": "5uPdVSeQvYHPAV2v5rmNognXLdvi46wkPvXJiHAsvrBeiRjqWNMVLxAF3Z6YxhqQNG4woPQPEPJRG8wCvoBg5tac",
  "key8": "43XL9bZNiKt9AsENvo8JeV3DNx7gM4WrVafFJuays3N71fr4XacQV8pYcAMuywMvedhxpqGqpZscNa4Fcun5Yun5",
  "key9": "4sSYVfe1ufVKXWcxVNTjUQ3HAzYAt778CQmkWMTkAf36AczGrqNYN2769npGYHPtDYbVW9zEv9PGTSSy5dvFtiCG",
  "key10": "TwPLjD4RVeFAbNgNMSAZwcQuptKLZp5LSNQNxjrMFxmMsoFNkwBjfu1M8RSeqtV6F883wvEikhjMH47k4bgj98A",
  "key11": "2U7jUyWYmtWsGV56z3R8DnNzbC54DPyGMRTJuCMQkJzVcrydDnqhcKNxuHUndq11yxjG6jA8KrGCivvCMGwq5MJa",
  "key12": "5KWnYCtTkcnyyKzpajwFVozioqe5QRjFENg9meUnnmBFMhRct9JJiqNXt7MgHSWEb5SDYhQ7yvHSaKLniW8zSi7k",
  "key13": "yyJ26NkHsXf9sw6nBUAFrUManFEoqe5nd8tXqKj62W7Sqm2e7ZRi9rVdM846N6SmWNXfCBy8Rvd3ujRHPWcStTr",
  "key14": "PUr6vrt7n3oNdqdRdfeC1gKUWRreuezdVn8jTT4iVnAFhJStcJ2KAEKReTqynJNWteqLNyatKsm1ZnwiTgV25tq",
  "key15": "hSi1mh4D25amfBaxiJPo7sb6hXygGHsAgoKq1eJhgQvvDX4zHFB2TF2Vd4N5E1SN22tkdUn5ZWvRdWouVRh5d5Z",
  "key16": "56ff3R1m5wRixEBXaSJ3orRTZY2VcaY3ourkEKDb9dR9Eyoaih47aMBE6AnBBrGQwKyRN9BmGe7iPGS54fzaMJ3T",
  "key17": "Gm4idDuU7cH6rdCx6rVmrzga6Pzgm1aahSXKYp1yfhDA1mywsnrjsA84415VqBJSKKMt94xMz9i1WFvJfDzc5bQ",
  "key18": "5iCHAM2dYCBCT63MBFkai3WbrgmR2x5oxcd6CguNS6b6Bs21gqLVf6Gd7iU7Sz6wt2NfyBjR1LDuBbZphD18iDK5",
  "key19": "2qDnGav64jpGaqdwZVMqh2i8t5o8ryd1LrCNkpiwdHv7SaSmTQfMpngeUt2ysVgsjJQBAqBsFVkR2Lmw99nTY1QT",
  "key20": "39wqf7jUZMuaqcdqd9mrVXRPYjEv3wVdqomLp3GqYxdLRmfZ1vur3iJfjZ4q4tPEABBfti8XGtMgwGSTEVVW21aj",
  "key21": "3rwJ5CdWYcGGFn6DVfFFr5f9uG1A1rDCwQACyTMw5VTLXBuWGbj8vcY6hevj2cfYfH9mXYuTxpEWQxYXEqeoN7MV",
  "key22": "5ieRNibhTmRcHR6oWPYogitejxcdkWF99hZhUixJtungGMhpdCZx5omKRGWahx6VwBHFZUQtzfGzxzZjYwTHMhui",
  "key23": "3BUSMgjzNrfz8QV1zRazU8XVVh68mmd6nJYqpfpkkak1Yf5d8Foj1nLFzeXsS6P7ZKo7gKVpJAvaCFsKTd9jkbvD",
  "key24": "29s3xRG727hafxZ5mrUYqm2eb3dCrdWXaQ1cL44KqA3J37FUFmHWw5BzuoEsR8zWfYT9v2ePX8uVA6AffPMMKb48",
  "key25": "5BK2PaG7r736LDtq3aJ1wuLe547ox3PzHgdivU3ZsvRQYDThqDu5vtZPebDQRGjBt9t4gu28Zov4euNkcekuRwD4",
  "key26": "5QW4uFE7Zrxtd545Qck1bgoHemAnnVMJZZyo4QyaZfVktgHwZ2tTgEVfWqyTLHGgD123wSyYq4R4LJWkzMXxzYUv",
  "key27": "3Zm8kRUjo8SWkMyprzqhq4VPZvjEzdE5K3fCgDHZKRK2hw2W12sjnjPd5i2uxo7T1o59fTXWvBjTGVZM5itHfUSw",
  "key28": "3pBhhpWVj3oBHGGAWemNcVoWnn5tCzGcB673NFH2jbjMkokCNr8RtAstYz3dJysK2ct5pgyCh8AgS9QtqELv375J",
  "key29": "5jYvzPDQ34i1YSq9XLQrtddBTuFXwX1B8gQTXHHUM4jARPEDcrkbrNM22pBHFyxAx7vXcyihK4SL1hQvqYVJCcbU",
  "key30": "367JtnPDJXRPqXRfaEyvm25AUHvmWrik95Xk98qa7s6kUDuHtT85DxgNiJaNDUpUfgrhih8MMWKeqhmhopu72u2f",
  "key31": "48m3TokviCvuxhVLRDCjdNDPXrVra6rkzxNoZBuvKAdeuTfyJCgzmawPwKiLjhndrg8gejHAR5mDHxQDVwm98uCe",
  "key32": "63CwaBntDdyxbiKPb9cDk5dgcDfF3D95NNzKp4TN89p4qLiHq4zAegThhMPsuMbapxZoVn43QQd5ePRCz1sfFMJH",
  "key33": "KVZYKJ8GLVCBfdoBM8P5yfvXC85WcVbahx88LtxjNxerfKHinj97C46QwhLYTXvQSrTPQhC4Sa9CBw4Z4gzSdiN",
  "key34": "5EVEeecGyRKtnipnRLxQYgzyG1eQYfA6mNv1PusXp5ATpE8iciAy8VRaNwfLQ6HKbzy2h12RFxuA2FpaenMmbgAQ",
  "key35": "4rnGT4tPDzVoAJqU2zoPVGvjrZyzihi8fkeX6pfPPRBtVsBpMxLwDpaXCCMUYXHTZepNuzMQ1KrGMKKK5V9dzfzy",
  "key36": "56mRs65rtsrqAp7LYgCn528mfUiKzQbErxTQzkxZbRcNzYzSHQESRdiTVoLywyEyN8Ps8T93j9tLQDdDYdDbX2N9"
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
