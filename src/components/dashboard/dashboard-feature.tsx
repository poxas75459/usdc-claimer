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
    "61bxuTxDgBpMYdhhNQoit9MXZyM3paLvsYajWrVU9a5B9mj8FuZ9BStXhXhKUvaLWHcWYsULoJcdKZp12eRXEHbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43F85dNxBXEUZfJG47BXjZmko5aD6RzKxAEkaGUQcgsSKoCYt4rXvkj82R3KrckmbVbTdL5P3TrqDFLsTPjRy2xq",
  "key1": "4Wd2ECu2webB766hpbee1GxCVutMiQbZ9HZoFWShLBvdygnmVipWCobXDoJjnFTMKFLEwCTcJ5WZQac7RUnsQT8s",
  "key2": "3WqzNZG7n81oXQmZmzN8ZkM9GGorkNRR6mDSwATU3Yrjonkw1SDUAom1Ms4yVCfpPj4Zszug7QGhmYh6DUABgQbP",
  "key3": "2R5EjN5HjmptCsjSn3pRVbK2ukdkXvwEZvzuMdTTuAXnE579HRPGpVTa54Pz4PcrHa2pk8FDA1L2av1tN7FCX98W",
  "key4": "4oKTYduLvtDNDW8vfW1E6otSbne7N1ZfJM1Vqs4TqnGaF8zQNHg1g2oAfWRZmLjTCLcQwqrYdbEcUvKCACXuhbqz",
  "key5": "2qssUfbusFqhCoRaxzfPCNiSSc6ybE5P4M6GWgnfCaiTQVY7nvhAkYzf697o1rFQncHLabhRPn8LF7tdjgwtXGgP",
  "key6": "2Xt2q1JU5g79CZBBhZ7wAwA5TbbmMWYy5s4CxUTTdzVDFycrnPbcqX69UW72EPd6KeQyKtkTqtbxZ5prrcRYAJV8",
  "key7": "21X23DJXK7CK8c6GENpEJLNTZ19yo5sc5UjYL5QGuPLNXa7TNPb47iKe6LRHzXCLdinBZ1doG8f7hZx3WBJ4V1MP",
  "key8": "7myKgGXSCYUGxKQtzcqYA3bJvJeuSyRAcB6vR8qQhFwhMZXpFLoFVph7W6SaSKZP6VkGpBQTVrjVEHsSEeRoU8U",
  "key9": "LBRyVzbEngNDr9uSwSEmdDndvrKDNEz1aL9pkBCgDrTVR7RFRPVkeqtpH1mWTUdEx53G9XyLf3KCshkfGRXLWzb",
  "key10": "y88YmBbbRc1DApBx6zVFzm9zSDjZ4w7VAG2FCW7FwGiLLAUgdNA4MiEAHbqvvzYM72wWj6rwYYgRpUvTNVi2sZ4",
  "key11": "3Ue3WHWSRaof1ynsSFgEfcJEGwXV2x4oxsFKE8WuDWdgQqV84v28ycKtg4AWVakVaDP7W67Z7KjWG4Va5Ks3B5GN",
  "key12": "28TAvTH6un7FXFXwLnx8jhvL5DDWFB1jftxzMZqzDJjxGYZkpowkfsjiyXpq47VWTqza1yvCFwkXGqTY4sUqw5Qh",
  "key13": "2Qv2J2bYcTYnPaJj6WR6fdNVb6jhW5tmkV78hLye4JhCfXGmqaEoCcR6tUVRDG7haEWR5SNBDNq1QXrkVRtv2Xu7",
  "key14": "326GENE8d3wFzLPhk1Bv6g9JU6bf8pPBrRkiV1NKre1Pxkjg1a5GynioiAkugRhQQiVehFeafG3LEmiYFVxB6mCW",
  "key15": "21riheJjwYtQQ5nJGtp7oJfJgJX1Vaz8wSdNQ2ZBUBznNgPYexLEvEcRmYAJ4K9o6htUfoojqitva8BkKt2LhRmn",
  "key16": "3k6je2kDVx8Y9QR3qgCQhBwtTr9NKevoT9G3YLyfcLCS1kmt1XstKiXiJuSLjdfjHNg4wa8s2FXqSZX5btEBeN7j",
  "key17": "4VSwEJAE7YWcbu3KXyi1gcaVPRTdHVvPMZDuTfeUvZ2EFtiQcTbhcohuSuo7qUG5pgRNBeemBAuK5NRXYEyf2fSn",
  "key18": "3RuwHWeUQZqnAGmSQFhfwMyGTY7EkHj6bCAthj53naRxNoPHCemAdjXZ4NqQUqBJVpWfpqWU7LoshG1mS6JaYqqg",
  "key19": "2CHJBcskSnstSJ2jmMx2r7BmtvzjD135rSzqW2vsLTfLugh67fDZsuR3KhGy4xRvbNJEKWP7FWbWSzvFjBdALwdm",
  "key20": "22jbws3gsygaf11ECviWcxfjoYJCz3LqGExx8yPsNug7MiGhKBd3ZdUFbwZnHFmwPcashhbPcTqRZARwXaUBqiNF",
  "key21": "5Z46NgesxYAs9X3H96p6VcYechmuFEh64CpEpyKqKLntKvcRmDgekGuo3X7dgMGr7qFTwcPQFpPjvAMMPApaUaxz",
  "key22": "4ADhPh58QDiFEFQu7EXDEtMaNy2F5kjr9cA5jMV4f7F6RDtcF4UagXSiED7LQPn3YHJ4bDWG3KUc6phii5ZjKsyR",
  "key23": "4uExRYNtZJD1WWc5z3TiDZfvCstkAEnvxiMg368DrTTr1LAzdTnszSZYEdWETn7HyM28ixNqZRUsNSG5Gv38qa9R",
  "key24": "2DgU31EfQRB5Zhew1MvfHa23ns7qdYJ5vV4G7ndH5kybEjanP4E5tRiN7pfcQwNs1Yds1SLYVu3dkobaNxaewA72",
  "key25": "4R4oPmC8MyvseUNXSBNdkfPnFsLFiDZSn9rcYjbZodpa77g8Sxz4sqr8TdwwPrR3c7Ea6KiVSfjDNUaExCKaNdxF",
  "key26": "3o1a2bphds5u5DYGfsBgxSRzWMj3KoMGTGqj9TS15KSSegWfiNHLG3SrhfdjfJCXpc8VEC9NfYBS7kFp9ZQwVf7R",
  "key27": "2GtLfs6tudWkGt4PagiRkHUFXZvpt6RPtMY5dHn3RrHLYhLUyVeEyURStea9F5ewfigSdGYs4D7qjRzdEuceKUjP",
  "key28": "2srqKLJ9agSr2iegM5DPFYtifCU81mCfoariiJfopksjfdrjKaWgr4aCthKkKpZ6Kfx3yE1umNdghwnZ1w1Q9gCU",
  "key29": "Ujz79vwHnrZwu75M2vDLACqseGvpZWX67fGrAdp1caUymAuamdo2smh6NSzvZ7xZtUzzrqJbJJvMHZeVqceLSLJ",
  "key30": "4gHogDwTdL9oWkpChhfqUTyVUCJiWi7cXiASYws1XPcJkKoaNGE28JRV9iPU6PZLoCPaP5zkkFQX3iUGaFLGp9qY",
  "key31": "jqxTbRELpqcy9QD5aWBMgQjw9ttkKEVBnFSbUXfgPaCj6yMo5FgNPvb2UXqVNjvxjd5GTmLWeDD3erpFN2huDWn",
  "key32": "2JbUE47VCyHWZTJdoXfYTxqLKAqM6vNWdbhxcufUg9CknSWirPnNtA7QHQUq6eJ9DYzPkmAzw9ZB9pssJ4TKFu5F",
  "key33": "vdhn7wTirufnLdD7EtY9UpaDdAy6HjH2veCC7rsY936sr7Ji8GG9JnL35qeeUDxeHJybbuvtvQTYc28Rb49Gm5S",
  "key34": "2JQzivRrVSZhVEsAajeQFFuPx4pmEPR2MpTNKXk3Lk9kq29rQg2whzAqGDsbGDGphj6PkU9PFi6GkQnKdv9V6sJj",
  "key35": "h54F4xUcRRbpspSDawano9FfMgVyZGnBzzwoqn8r2w8RSyCTtavav1NQ38h6muVErNqvEhKRHMbZrVn968mYcfi",
  "key36": "2J4rfp2BKVqZAExE7zDPPgbZp3MdkUMcVPuKrbDwAEBDMUKH2A7aLTQ4RJhTEp1K5VkmjxxqXAb8yAHev5emvg3G",
  "key37": "25GkUcKzPBZfmHEy7YeEmh6xujxfJnWDfExYGipHKngiBNpQibcWqeVYT1f25P6TKB2o3Efefnicn1hFuDA712Fp",
  "key38": "3UWjmWCaHGzjSizqj7MRLQ6WXj7kMDki8BEhNE7GziU7Fxdnc4Dgzromhn4nH9RhpX95pQo6RYNNKTNm2bCJTWEB",
  "key39": "3gNz131htVpqS8vjNEHsopQtnxzs7YVvrVEwzm6w1R4x9AwPJudYh2wR9zMLGBBWXznbMu74zNSaXSLS19qJRLdT",
  "key40": "2ThWZxCFJY8Wnnhhft6sqLfoCqWHFNrxigVgu5L2Ei3uXXx8Rtnwak64WMjowLMzrSQz4dX2MdfX9aiFD5osYfMh",
  "key41": "5bAo5aSLto6Jb9aEngv4qxMFUTAGFg3rMw5Q7er5PFGmB6e64WxY7CYJVuf1mjC7BFCFBzgBokmQqKW9jUVPVUR4",
  "key42": "4AsiBVDmcbn45QJvCa8FRL2ti5nvzJ2cuu5vtMcaPRnsgEXFZrkyWWY8N6kYDwRonRUXn92rGP4aBnW97jq7EpKT"
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
