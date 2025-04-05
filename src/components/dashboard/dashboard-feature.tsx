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
    "2w7b2jMr7yMScjnUbaUoqwfTqNSWHcvymkHJwmNHfDcibHAxQ4ASuKfBpd6KZCBFrnUVQt3AHSs3asYB3fcmKihw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TSmgguDmgA2ApEDEgqsDaVjops53oRPz7PRyoQDhSvd8mzbVkAebbAksVbgraqrwzSfYSdtYMkdPUmnpdtsqVEs",
  "key1": "57EW2rfYQRGf478vQvyCyPyFNXoyHJx6vC3Ru72ty9BJmaJRG9J9bzC3Kf7NWdjZtdNtNeghqDtdweDokcFBJuKD",
  "key2": "28tMD54eVFMSFJ7jxa4LkGk61q5bt2C4KtKEyGWNw7yMbhgs7NM2WGgFEMQiwth35BS2qdfvGAgjiTV3Cv28XhAk",
  "key3": "5D6bt1edtxkTYxhsBPHKmVQFJfpksTXFjMotwthsTEkUkuixkTRqCeGjLsDS1geM9v4FkbaoZdBfAi5CMaYuHrQS",
  "key4": "3b7XJoW12dKhrCQAEpWUcXUdsNMokPVoXjtxWtmVzycynvutn5Ysacp3NYPwTVSVw78i6B1GmFSqyDUQate3NgW5",
  "key5": "2oCi7cRN77UxCec6ypXNq5KoqVEQQsuRv1nqFrNmAxBNiofZKhBV6moLGhcW5RsjUaJRTc19mS2s3vbFtcUqF8D7",
  "key6": "2rYuxbgoYYMAF2BuH73JqNvt7Yg2tUSBdCQDzWvJa25wrUnW6aZAs8aaCMAx9G8oRsXsig91u2NvUqHcXQHazioQ",
  "key7": "A3xjYawCX96X7RmhgvzwCA5MwhuDnn4FgpxRs561kdw3unaW3vhgPHXKBsjxLbS7ymtiQuFS8ai9bhCzZrJmXKy",
  "key8": "2QcgDgUWRpZtPFVAQMiBnoL1trvneoHSwKr7jDfPErHFe6Pw9mdzBHw6mmUQkPdHV5GYeN3SBhmaD99Qr8EAPgWC",
  "key9": "6YgCA2QP1jUpFG21dKGu8A1J8Y1syMVYucCVssTR72Nvj5K4WHmAhcpXnYBaW1mHqJXVqfcwsTeMXKpCG2asjfb",
  "key10": "2nFhwi5U8ZT2AeikNKXxrZEUHx9ifukGrJ8vrU67reLoToSNfLneNahRUkY3xW5MauUJKFsCBtqzVDELcHUDheQM",
  "key11": "gHz7g3hftnnjRjton3iR1PViC6H4V8pvnGCTZ1pUgu4VXPbkxTipY73wy9NpMg86FMkeBvkCsL2D5AAvrjHc4Xy",
  "key12": "gWc9KDY5cbPBRnCQqxT7WLyQxT9nX3SNTBYXRBtJUn3b53VAyVGRQ5JV7Cs2tYxP2W6wGLbRBdoX3GubbgDEone",
  "key13": "2p2ZZq4UVv5vgKx9yNarrSzkcrhi7aaDR2XjYP3kCgxk43uuoCXYPWUs6V94PWnUPMAVxfN9TES7g5MLYL1EtmyH",
  "key14": "5ZxnvF63DrWunqSba1dQubkVZGcmnwrrFbWMJWjfHNRxrqbMF9AQwaffPNrEbE7YVtqocLkVkJp37ttzUtCciauN",
  "key15": "3dcTcQzA1zWmzQGFVxP6JVL3q6GJcZMkLFyytm52bjzEAm7JqiEqtyqNeyQn7z7oqybqxhTAEX6kE2GZ6Hffnbav",
  "key16": "5sZvvtyNHtfcwGDKgz24ZQ74V2a9gkaSmPnYrUWcmojVAFKy5FcWeeiy682ynrZ9ESF1XPUT6BVXQpoibFMQCpFi",
  "key17": "2saH3CmHfr54UEZjZpKAz5DZ4hkQNspTzfSwx9xnQdiEY37UkN2VVGEfwb3k2tunxi2YS6kjyqB6yJ63QhogFq4a",
  "key18": "sdSFDQRcecxCY1AdPBPqvMDSe9QAQUQBV7aqPXRLSp16AY8hUtYN3sFtgmb7SqjXgnJ83ra2q6jrAM6yGKjF1Q4",
  "key19": "2oKYL7fH6Pk62cwUeLpuEeDEEfoiYcFhJzerkcGVeco6et2rQseEbxMkGAUGPgeJFVSUr8woM7XxBPHgfibYRoWY",
  "key20": "4jsPTnzi64ZVRRUZrGffw2pCf2q8uGxN4f33GUnBDyvZH6Fdpi5GU2AdhBqQZQpTUuNVrJ4JPCxg34UecqmcmMpt",
  "key21": "4GfgAb1yQMqfWoYiyzj13KEZFAzShdttQF2ffW5bFPvtjYANkE7N6wfa1YrSqK9kP6JZCdoi56Yw1q6Ds4LCN8zf",
  "key22": "5QMbusXiwdXAoGBR39dGPswjzrGCtCmwa36NZq5E27ucqDmKEwvRpAWvb98swAedP3R7NTzWVARAYHnFP7Y5YHvV",
  "key23": "48njDruy9ESwqDff9tkELUnTKLiYgkP7Fb1EBxibXWEfZxxWyeHGjGgH74B2vgzjKaS2bo9jE42KcgjKaeMy7q3f",
  "key24": "WdcpzeFvkkAGVkfCVS1ngpB3dGysXarcpuxzYrC2Pwyu3YETxjZqYvM7QWZRsSsETsGSbNMn9VEcnano2pZo123",
  "key25": "2gBkDkvKDWdBs2ewnePT3tQQiwThYMfnNP2B65dwoSPnUpbcGuPAuqVxciKVSjH5YVaWZrkALwNLwiATZ1uPdXaT",
  "key26": "3ULjUfxhpqaL6vSRmUbLEHZQBquhp56nPzqEx4PDBbSLjHBU7pmDJLPxgR6sBCw2hHW4t1g6mnGF4EBvaotSsUWQ",
  "key27": "2DfJiPnsDfa5jH8KgcbBLkQW3LUo8Ar8VRB6JZ5zECcsCzVjnLwxPf1Q4pd7oaLVPTvTmpwrN9o3rJ8FfqhEda3A",
  "key28": "4oSosAAfe9WdHtUD4g8h4816LQcA8eKbwUTrNgbn9Bpr3GYytHABSxdBdzKdBNkg6ayiNx9fFxNR8raUa8h8tbpz",
  "key29": "4joDSr4qadFURc1SB6yZWySsTyxkFTQUrKZnKcx77aFdJAMWmSj7v6mPu2mFd9G5RmeRKRKgjkuZBAJbQMTBa5rH",
  "key30": "2F1rh4jMY9pkYAZxw1cXriqowMDA1g6mFUwBUooTE3Nvhhhqvvc1Vsz5u3Sf26d2pcqpZhUDuUC9uz7m4iQCRGGa",
  "key31": "4FoDLGzjVZ93qs5noYvQuQptjvfEJGVqBumUWvUDn9EBNTYSZsXes2KpRtpNbexkqPNfMN8t9GauzCzvm4wkoAtG",
  "key32": "5Sq6QfnqvAuoeVFZswyYfmuf7pY6UPFYAUSYep8zGZnHf3gFsEksxxyaNdHAhSeFK7RMErC7nStHYEDJhb4CQ3cK",
  "key33": "4VgCAPczp4RjhmRqniQSrcxvnS176MeLkY7tRx9VgYb2pkAKo5QmyU2GbrjXvo6jggoPFqNU9JxQ5b4hbqRgfkig",
  "key34": "21GuzLMvpFCjSdzQvtW94yHAzqwEbt2536GESn8WDo8j2XWWbSmhU3AToNqCLptq4xjofQHpzmMve38nEeq7xdhr",
  "key35": "2upcZk5ou4Jqfu9egJVrjgAfgBLu54bTYx3fPwjogn6Lh3UFzjYgaiW2s28aG25Qvxfdgp9zw5rteQdKjEjYYsNt",
  "key36": "wagUL7yCNy2VcZR57yXTgfjxPgVWX2uhzCTboCGMjHw4jXngDDSReQ264XqhVUYrEcAyQMcAgo6ZRHuQAJvsMyB",
  "key37": "5ZsyoASJcjVUp5nupbjZvMwfuEDQqBuUjN1iafN6ThkUTPWZuYEtxqgJeubg19mi7nUzSznJNMQn29XMSDYMnTJB",
  "key38": "KxNc63A75rGpTc2VkRZy8J5hrUAkEbhw6FQDCVQCo2tBc1Ai6Kyq6nzVXKWCQUE5JeeBQiY4hGmbD3G7zSauuVW",
  "key39": "2qesJqXpmCztK8tpue8mnjztSegtmhp5siDLKK5ncKuBqy3aFrkk2U2fD5QNTWDqbnaks2eU8xpqyC65Yhnn856L",
  "key40": "H1vyUyMM5j1nztVf1U7LvprBH6anENACqntce7ZkJjdDJoehchr9Dw7X97RCsytw5F3gAM2NXh6RV5va6QVwvbR",
  "key41": "5jLmtc72FSne6Umq3ncyn6ERCku2N2DLUaAB6fu1vfpNhziyzZKzWSfToeYrxbPCuwC9aE99rNtRPtbfENENRh7s",
  "key42": "2hscBLc8WpQJRj3xboBCwVypGgr2VnwMrdebmt2TwrEQa3DXmqtn4eQePxuynAhxfb3dYKkqXw49r3qpTqBqgfW9",
  "key43": "imso93ze8Gax7gmpcw9kFJ5G37QwfUjaFWybydpHsND6SXDaAm7HvN7od897rZfTium2WU7jc95cUpav87iMirE",
  "key44": "3gNYtWAzHSyFV7ormekasV5H32ZS2EAviGvnAEtNuRboc77xcgHWQ25CHCfcYohCJdVrkD5A3gEASkHr6nD8FDA1",
  "key45": "4CJypPs1geJKKN8KrLeZaefh1pFE9aHEkGkzhnW4Hncsu8gAqKBdyoFt8zXY6voHmZ1DZACUKK44REux7ComcByp",
  "key46": "2gYNCqq5QW8YvzDKmrWD2RioXKx9aK2RmsF4W5jserQoe3J6FeAFDue2eQDNCpxo6X4JZgyX6G7CWXoGGmUnnSty",
  "key47": "2g6sEp8Yhgkh24ZsG3W7zFAQptA6PpgEfmJijcCMTJ4zDFJpMTohPYafpito6LpCdRSW5XdGf6ydGrPkrgYHjSRi"
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
