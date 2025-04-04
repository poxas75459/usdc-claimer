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
    "3JbCjs8KLdBqxus6XfqHk4cdgktYBotdLQBQfpAR58Syaev4ix4rZrjzr1XScBrqeRZ5k37cwh23hQf49gRMiJ9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eiCXgVBW2rz2YkuDv9TqyNeMsSteeUZoDbiUYNPaRNTHxNLV46PmRFwMarK8odpiB1Ke2zbNPFv5xoMMWrVW48p",
  "key1": "4AfznN8rCwNSEjwnxWFYx3UPx4RGNLzixFXrWjL3cfEqmA1zBvtVxmTTaCJEvNYAceeJMBqYFs8wXaFL835YTnjN",
  "key2": "3FpcA38R6zQnhHSeg9N2UopXjxwTRzXPKt442aZyc86vyYqpoKCnnz6zoFzickKhf89T7FcdgGf2dRKZyzeDVpA",
  "key3": "3nkF7FBpRFDm9Wx6mg2WD1xw4XLt3poVvjtvRKqP9LtxC7VkaajXVksKjQ8geNoV3Wv7c65LgfwJYDnXJH3SizS6",
  "key4": "rLrSDEruwFkTvnuwSPFvwPCzRDHARfCrGZ33NGLxcrvR1ofMGbMCAmmL3LPogq7PuxZGZZdT7uhv9T4AwJURnVW",
  "key5": "4DhJsAn5sXsdPi5PDBX39W15Y3NEPdw8zn6cnQss62CnnN9bWy2CPa8HxcVrYgY2eC59Jnf8GkRGFjKJ9fjUjNXn",
  "key6": "5NCx3JSjVpjULvwxdKc45BEWUB1MmqXQPereU7GAETVW5szrFEoC8F1jtpVnNJtT38SgGne6G4EVBVguYNgX7mgJ",
  "key7": "42LXHV8HY3uejjUUrVLypXKgPL2qKGAYTyhq9TMp8nuGKdKgGdiGKaC8BgcmT8W5A5VfF2T2BbsqU5hadP9M7d3R",
  "key8": "3qBoF27ncT1rTfAV7VZdbmmEqFVQmLFzUa2wPdi7KSupox9UZpMb7ZW1GsrBuxVQp1Pcwk72Dw94SbxTJNJtNqjq",
  "key9": "56SJZGgdjYxBGHKm3W3tDwWugTVXMNXbYAYKfX3sRNoLhNc7vke7nTBfPW9wXTiMt4jpwC1PjVh1a4BYcmybSPFP",
  "key10": "3ah9ciqFcHNbS2VeXmAVWXLoAyL61WieYUy2oULQ9VP3ugvkdmmvv7j68aNNRb7KkkxpQrMy28KH3CdaUE8QGAG6",
  "key11": "34xhBx1GeivKU2YYPdDvyLHWdpc44D9mr6ZVxjC29Wbhrh4SqGJ2Eb9EScxTwMMwnMkgEbYdZY54k5dVz5izJrh6",
  "key12": "4iXyEz3HoKbRtkFuEr1pLgEifARm1NwdB4VvZypnoYjAvtsge1V6bGxgtPzhmEJvMCe5n4xWc68QE36J1RzDwDaB",
  "key13": "3JWCYpmv3Z3zCS4gRikCHx19umaUn21gEPq1XMcd5h7gcbY9EGi938QQRoz3nHPqHUtLb1nGyQpjvMKXoAZ8ji97",
  "key14": "zh87MrbXd4KqaExdGf5aXAoGVLNJegjcMkNxpMtruqfFM2WEaUBCHaMnT1Yz92acK5fDzof22mp98uTgEYLDYEM",
  "key15": "2YUsmHRmDQALrqT1d2M7P9SvmhfzvaXG7g1pWi3gX43v8qE5sCeYXVZ9FrzBfgWBErVVpGByvZ6D1kK43o8fVVDz",
  "key16": "3dBvsVFYKvG3C2wUE53tGeopAB4RQVzbke7JxJrukTjmioK8w4SkM8WvRDojKuBnKuG7KUtvoBdW6GcL4SzoK3hT",
  "key17": "2qbG1NDFmTF69raujy3wgnKxqgdidB2W8rrQbnYvrUruAExMxDkvVo6kCgbsFsmhb4wsihByMnHmaskccupNJ4wr",
  "key18": "3iai8ktzBkq5HXP7qTSoqyNpgkUYxrbYTzmE2fk6VCuM9ho7xHKfeh423mjx6nMTB5tSJRYsyWfAEFQqkdtef27",
  "key19": "JAE5AoWvv24V2uzSkRmAHyq9J43t7A6UQamfFtb5N5N9DFZSTqfGLPE6ZjLX9sgZs3uNvQBMo8WwKN5RefVrFbe",
  "key20": "4AgJLNkeykfBH4DHABqx5epupmkEiDs2FZpdZyi4NgCMu2Shnq1V4Xh8fK6QrRb3655eib8JvShPJnhBva56iQDR",
  "key21": "2LmS8t5PbykR4U1Eg75KGMpMUxvkMXEBzBqnKnUJizHRqXCcDYfJyHLdvx6GsaaMNLQhzcKemsZw92fev5A7hGrV",
  "key22": "5ivjtQcXSRfJq3d6SrFvcaLt8ZJuQhNzuLYCan2XpmnCxQMPhMics1aBBn3VhiqjxBbg1wBgzRLonE8d8QGNYLkF",
  "key23": "31XnnffdxLfyioPUJVCQYDFwcaXvh9XcDu8fLan7XwHJYsF3Hh7xQQqN2aJzNJtvRMDr6xybxQEc9ctDXUw76ZHs",
  "key24": "56HxkuocnShwKSgY2vRVT8xXDso44tyVjcYCRZ6bMBAsWZusqxZbuXDTaGCnMpbGg7xY6VLmzS6z9Xayf2aHTUww",
  "key25": "5VJ2zv1hNMychy7bSGndk5fpqaq7mnNy54V3XaXRoAZQs8XnmEuhJbSa5DJbRpJQVGR9ovyhgLiHA3anruenbA7j",
  "key26": "4kvPcJRkAJJLc6tJ3kjH68qUqCNzL3TjsreqjdmoXsymf6bRjQUE4kKQ49QpnkaTdy8WPTXek1SHtvMdPFnufzSy",
  "key27": "4tntmwvXpb7HPCscxBLRCDTgdHnDPa93u9g3MtzZa9691pDMjPAp83MWkbKCH2qLs5gaRAD1RL2mjxEdavgjgnST",
  "key28": "5Zyo1aL95tEvi3eUWHvP5jMXWR4xJDuHXFBYmsJnPbJkPUfEJxejqPhE468K2vR5m2akT3uKDHr1JKfCw83uLcxf",
  "key29": "4JXQNJ3YcCRwdHRiPRCDUHNhp9N6Nqq2EMVBx8kzRQtAi1tx4AqTcf8KVapEuY2VEw3ctn9U21f2mm2qtscoBZDh",
  "key30": "3iQV6bZg9niW29pJXS5quyT2at6kkDQduR5nkG7QtQ1EsnsD9rTsuBNTa7Rb3qSLpnRyuMzTxB2mHK3gpUwY8nhy",
  "key31": "5LkYcfTnurTqUks8pnCYj4Zdc1jpQDj9C6vdnmZWm4j5pKCD8bDPNVdjPbzQw35eNax6skDLZbb8qC1Lb7RVx9gn",
  "key32": "4udLYBDYqrmTDHDDk5Kd2ag6dS8N5gkP5dQD6W5wCC7smYdwsnmV3tLmHYCr8vWgtowuoWANAJ5n6Lbtf5CTuNai",
  "key33": "UnEwS4J9bPJy8VD6WkLce7DfHpGNDD4SbPMVcH4pvvXnPR3EoqCfCnPAW3q4aipg3krfRYq15TZNEbh4cPWBRmm",
  "key34": "2xocXkkChhKzcbF2dFCc29BUZ79HniEsPKkbtarMVx3jmSVQrxvGVmGekZ6AS4ux8Nsjv5Ke7khqRAVtpgFqc3aQ"
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
