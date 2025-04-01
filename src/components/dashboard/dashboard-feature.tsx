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
    "2p5tbkfTLA5fuYuYAPfyiLotY2PuSbXEjgpYPkWAVsYzpXHQ6t2N16V8saVHfQbFgTipLNPm7T4Qqz7Fr5Bv9BZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JcxocpLsutecAwV8dvHWyhtVfMrt2ftmDAtEh3tRDruKv1HUB95ZEGXmpG679CYU8RTPpz1XY39qwyxeTqrnBth",
  "key1": "fLx9UMJ47GTiSQFF5nc7XV69ymKeNNopafL6biUdxQTuxFbuXgY8XGbynPCF4VcGBYgWSMKZBWbKFGNDLKTjTeP",
  "key2": "SrJjmjZiGhm4XpjPEM2YaqFjsu4Xnnr6joUHjzzqM6j3FspeDy64uR6QJTLkDZxFevMZf85sSuCNReZp1Xbfuxk",
  "key3": "4bY8CKnUbaobmLuEYhjAh2sQFZpY41DKeUCjpBM3NU8m11UckRb46WjN5MgNyvyVSeEzKZ39gmxmPf8my6ToSffh",
  "key4": "vHfkYyPyECWjmntMbPanppg9WLxF22HXVQvFtnXwQ8tRDqnYMQCJ1TESjHqzXs49UcCKFzmgsPMfGJWgogZDYG2",
  "key5": "4A7qtDq585p112oY2EBbq6jvfZUwSt6zMdKKagP3YQUkFcSXzMsoiQdtknHZP9Tqm7nkiwh4h13iWuZfbiK37X8i",
  "key6": "5fMcPHneDrw5nR7XGfe8EZkYU8P3avDGJ7ooerPAc3nintMDyZuirY7GiWsoG64wgGMjKWpjHAZyUrvseosaDwHa",
  "key7": "4rXnXsJPQqcUTGWwGgB2aWxJZkgngSGz2c4izHKRry3sHsPn4Db3ohVPtqVNEMPjsVJysuRzCTaNw99tSNghPhYD",
  "key8": "4VxPdGgRJsRzk6y7FvWhvuj6vGj9BMS13DDeVCRa23xbt22R2gLmB2BwzcqkHAG5PcLFHULjZSMave6wnrCBm5sG",
  "key9": "FQ1XFFCLv6WUahjtgJLhFS39keZwUzTavKKDtetMcjio1ENKh9fHJafwbXHgUxQicY4wTzVLT21JjprgwRhgVfX",
  "key10": "fc2nS4CNozAMSG2F3xBZiJtLTxmaL8WN2SjSjNuwops61tP7qJHgBsBtFB6g6cryETjnTRUFU4c17YUTsfxP7gu",
  "key11": "ZUzu8Y37QUyURavN9o4uFkDx7wqcvSk6NVepVK53umvRqjLR1rLnifsLuqsDS7sCA5G9mWbXCbeAB87Vj6i82CN",
  "key12": "5noSfmna5X9TXJVwTpr4LnCdieJpizxGw2LzYxi6dNqxhL3ZhTBPJQAMcmEfLHcLAZzCG2tkJRdckmC6j1er8fcS",
  "key13": "2YEBBriZNZJjFWXgUEFXnSm9et8Xc1KefdBxNjYU7h98BjDnNAE3feM1AFGoY3WEaEQovQDjNaU9429xL4fuzt4Z",
  "key14": "4yshphor3c43RaJocWgdh2gBT9M9QMuo51f1oRYKk2nMhEvnz5eRix7zC58bKfshJSc2GDYJAcqd3XmhnsGhR9tW",
  "key15": "217dw72PWm7Cc7fm8WKqasXvC8FSWWCMaHW3Zu8rFVogcEM91TsoMGjHr7Jt2whpB1vnsRCW4KWXsxPtE9ecJCSC",
  "key16": "48XsW9A91vjGcr5rRsV81cgjnTwGpQK9mZSZp5rahfV6vEtHDrgdUNVFz9yn1siHPLKHqxz9RKCvtRaEVPyQmmGy",
  "key17": "5PGCyeaFuGJRBapWUJ6prbLNjkyDpd1PjApgTToKywD1fHXrmME6m8of8ZqdEJVYwq3CEiJN5jWwiia5pd9n4v9b",
  "key18": "57mRMGD9wibY2a7mthXSMyDanwSenrBccxCGdWGaATxcx7DKPwxay9Nk5d7L9dq2P3PdbV3CbyfkUXKefw32b2Fs",
  "key19": "2DZwxFaxwrGwXMPPY5DuTX3dWfNuUr4m2b6z5GeiazAcEGSrh5LCJhS2SePL6qLL3KbA1PNWpn4Hszo4PZQfgM7S",
  "key20": "4rB8nqUdeynGV1CphvS4NjfZxqxmYR7swQj4gZvVKr5pibEP7b6HwgTutRThb2vv23xBKTKFLwaA2GWfQyjfVsN4",
  "key21": "2vP5ALDiuure2gx5MjgdzMnMJU3PGw9HJcuucSMzgKFv3g7z1p3cqxdc9VT4KzZYfNixpa5yqPQ9Ct2p4WrCkr7o",
  "key22": "2fn6XHcWLaem3mpqXM4cCZqA61BYfJdzE4SnU71MAdL6zfKS336Dh9Z9W3Y585cvXnAu22nKsYgQ6VQ8HkQCJTk8",
  "key23": "sFHxh1RkVZxErq133teaPPceeJX5HJ4agyEVjeVqUGbjptZ9ARpakhyg57LZKGzoS5tEjpfKcsjiHBsyWxGeG7F",
  "key24": "5UqyxrajwwzpNQs98NkL9FmnvpFuWXdB1Y9j1CrTXTixLfgYtMNLui7aDwkL5LvK6TmMDFNKe6LFQjywWaUNF2wM",
  "key25": "DqkFnEwpvmH98HYWhNA81kWK1yVojPCM4Tnp3Xxb3hdZtEHzuF6Tr8QyLWr9fwAiw7GXSUxNamHUJxZmETdfTAn",
  "key26": "2oRcm9WUaWUpyJxuLM8Tms8xfVp5iWrQ11dWvr2JJLAUVpEBfstxfgcRQceMPTA3Z2kwJTgQmaQMtx7cbcGgMJdC",
  "key27": "4woQMz1znoSoWv6nfWBxwPQDooUqvePt9jBLcMmb59HcDpcq5yuF4VNfBNW8EiFA692YQgCtQdy8weABLMAg5NQi",
  "key28": "4WhPXahpNc2LCbiXNjEB77fmLaRkkpuLsT4iayr5H1NSh4BX5eVkafJnxHBuFcNrPZcXdE7dGK9eMRQPKWQDSXLK"
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
