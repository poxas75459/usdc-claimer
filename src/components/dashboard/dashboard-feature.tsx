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
    "43SZvujM1f4fSjhPBLZjU53bicCESGJ9GKR572y4gzzhmoFM5dkDUJ93j4HrcBRxP9ZrXxX2zqGTw5bXkaWBP1ei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bjsi56HAePVY874GpthEjTZjNyMecgCe4Ks3w4YCpvwk1GSikheNPoadKrEJ4H9LHEvPKELAfPENf4ZGZ1YDPMk",
  "key1": "3UNusNAfoGcAxRpznRqXzGGaNQZuc9gDtsHsPwGb386V9wBobpzE6ZwY7qj4DXoBR5pB6fMbq4Gx5bXVLiV7Pnan",
  "key2": "2PcHw5LFxTPftH354gdRs8qWKgD8om5DL3VjHJN7kNFErTkpF9J2PVRaQcS7Tvw5SExmCWMWPC5QgCavbb88Zicf",
  "key3": "2rDdaWso4gBMYKdQK8jctxnNAN3xAQT8am1ENWLqwzjMmF5uap12VGwLQMnHrqbmhofEdYFyoZN5NfHqAmgKwNFu",
  "key4": "u7CcKSPzmUYsDfViiKPRfcx1pPAWQJyCBckqL3JRDzjj25HafcJhN6sDq3o5Wq7aD6zjNgvVxCqGMxqmMr7D8zF",
  "key5": "2F9C5sun8KykQQcsFTG17tFEkN3BY7UMgKFn1CPPZie3tpktQvdNdtS7hgmp6xmiu8LhgdUKSPNyJjjVvujgnjj2",
  "key6": "3GxK3oSd6S11G55B1x159zt1X4fSmuXsBaZBo1sSdV6t8zE3PfStVwRNbyVZ2wvKCULaPCK7X1uZErra4q61xmz1",
  "key7": "4VzFDWQq1QhVrrTthKgqXTnsEjA5Wr3fTe1msNZXKGcLG83wYYkzTQFV6S6tkzZ5VsYh8M9VvtH5RTBM9u4RkXAN",
  "key8": "4bJvhDhbnEPAe36FGGEn1hYRcX1hFSG8V2CRcz8TfZZmpJqxJretHBXCo5pVR5KepBZtaaBv3vRkNSRmw9RY7Cax",
  "key9": "35QmhTqfFMDoS26jg7hB8NP1Kz89mCfzk4pnN9ogtTwa7iBE3bmysv3hrLTeBHi9Ry3vNnANs8VjFqiWZnXoakoU",
  "key10": "4YMiWXBWZDfewhGtuqvHACD1dvFRb9MFjP83AN9BiMsfdisz8B4c5o8PKGzkuwKs8ndeetSbDQxS7ZGfHH4XdU8f",
  "key11": "3EoytPBVZigmxFvazqX6uiZfLoXBcFRSFiDEtMcge9kqhyfT8qigDtjaqb6M8c51yinivRE9mFmfbSvrf6V11qBE",
  "key12": "v8ah3vAGSAUHRthxBc3FtXvSUMd9gPbEz4y7KALv1cKCHKNYXv8RijeYoBq288vTmjKMn6yQKUK2D4YHbvzmpWs",
  "key13": "2u3jHFrwhVejFNUPjMwfqu9B3wWAGe6ZcMygZz2ARQUJBG6cVuYaWitzZbfzechMpp4hNXtxXtKbv4Hnb7MLNZuy",
  "key14": "4WQboRfyAPk8ZiGmQAPnVawCozMtJbA9SnBJn3P7jDqPxJhrCVSvdGHVFWVJwjJaFGrVnfMLyUTHxLV4gFC11jmK",
  "key15": "3Bzo5VhWPq81vjcibpwcHj8dBSyiDWCDgUXZmk6zGVgp3d6FQ2m56dVN4yuScBtFuWwbUZvUKf7d9263iNfs8tLh",
  "key16": "5zwvWszsAkJ7HJsXJs54nwGiQkSHKnxBYzSLem8UvMemrbrjHHi7BNqDnWu3VL8wGRqVRs7ByF2KrUcdS36bx3od",
  "key17": "2rhSQauFdFvcgMY2nE6iuL31n5BgwLytW1tAyAqRPDtdrzmZhzDpiZzs7imnJ9NfRMa7b3ceUpg5he2EKAzPDpKu",
  "key18": "4pNnMFxZr1qgu3AVAuSae3CVuhEC5uq1XzyaNRvV4pyfWJt96CCWRbuUwyYBsVdkjM411H1Y5rth91gL98be6Dzu",
  "key19": "4T3guSzj2jz8gxW6JvEQKeugnkuhve2Z4qP8DiswNueMA4kD7amd6ies7Nz2GPBfZeBLVkc8LR77dtzgLEVjvYKt",
  "key20": "2gXqtSxKN4qQe8EAkGm1uJQPoyYeknoFNAuHDDgrDeum8wThjYe41QjbbebkxQfTeAreChoZLdppc13u3A6VhQCQ",
  "key21": "2VyXB7sTMSgc73FroNJURMKzrzqeD7tFz8QP7qa7rbwrz53MrkDd6hRjPyUyt7m6K2pTYXCpKBFLsfTkvKTU2Hdt",
  "key22": "4cmzsLqLCR4yCE3kY3xNDVricWAS833UrdkSAUW9FbSmBkuQehK9Ws1HJ3bAtrXBm6r5uVpjE2d7mrntu7UboFuv",
  "key23": "bgKiLa3fZ1xK6vhJHtjAZxemT8R3Cm3qNiQjD3oKhrgN9nLSLuBwi8xMWgn57yShvvx1izDsf9EeN2oM44tcRfa",
  "key24": "ehR14wVyAEPX6zXVN8MeydbUfbqnUSHJQbHZj8ZfXMxAfJrwWuVzWjkX5WX3booFoWv196c1jM5W6kiMoFaHtcH",
  "key25": "4ntyftN3WuYgQSEe1eGf19v1o5pTmV1P4xzkCdy2Nv9w4rZfNHaXJdmwDsbu7R5CE6B2co71TyasWmF42SMbbNkA",
  "key26": "3fUb7LtJhJyEtr1ADUNqTtd75h8dS7HLvNABaoGdzb1DyAJEuZafRPqmER3YPy3NBHcXuqRnQcGC51M3KQZTDuFE",
  "key27": "44DzjrvSLW7fvHxNTPSfdUwvfsrGXJvqy4HiLRvfdNhEDPxwaMBorZymdyGohcb5nNsCYWCi7x1uyYkJpLzTwZFU",
  "key28": "5HsL972zgg17WXLiZCe2DHsVHyGUQMEWPi6odEVuV6y3z3u4QQetJ8pmDyfoBtq3jvvnHo6AbDzYZGdkYvCay3u3",
  "key29": "21w3oBM9tSFZGyxM4TSTUXaJDKkejCBSgrACS8b1U2ZQzimXPZRcFU9epdV5iNXqkXXLH33N4G2VTPxYKkUmAUqj",
  "key30": "4qcExhUj9WwYV23ihQbqUbj2W1ton7A7pmqbkqm2C2mKdRdyhUuKuDR2jW495zSVHn3eSn2AybfzKwiv7v2TeoAx",
  "key31": "4qrNg6nB75XTAhfSJgbzuQenwhDCmKzrpmTUaPgNgxgZCgNj1BXpMSWoX5kbWWuVcQE6wFn9Cc4DLHk4d7NG1v4W",
  "key32": "2bpRvYyKVgy8eBYnMxC4bXsEMj4JKba6NMuU82K4vdoNgkitFpi6TK7k2gSte3b7rRKrE37peVFQvxs1yo5twttQ",
  "key33": "3q1UkerA3YLxeiwP5R7qnjTpzF6gbBdjD4or7xxD3c3hc8ZwQUjhp8iLxptTL3kz4MutwogSCU6XHUWLLo27YPoF",
  "key34": "5CKNnBNrCfiE3e1FQpkaNW7z4N3CfbWLva8X3eVzA44YBR1iduDamjFfBcXTkDWJDJRAL21xwJiE4nfmZTgmcAU3",
  "key35": "1vCp8PRKUfFyfUsgPTfMy93exoCAjf3JGSD7qfYG5kuz3ntweDAgWXsnE4jAQv7jjZpU5rdq5hkURxmdVhCv3La",
  "key36": "iZAbK2KntJUcoYecDrMhRzXXvb1QFAJB2ZxmJo9EApC8xyzZJw5hkU1neu4jJzYXAEoY7ErmFZqLxbMQkbFsF1s",
  "key37": "2kzmRrDynSyDLyCPRxNE8d3KKwn4DWf6jWv5Nw1WVn9pSMYKyjWR6P5GWtbDTBgiQ2cucvPuifRHAJMCvzGAdJd9",
  "key38": "Q6q2WmpjwQKnjrzr666hxirtcWcNxJ6w4dpjjpYDMpFVkVDyHesFuYC7i4YeJr9mx1PTvsJJJGjHQ1GHW9RtFV6",
  "key39": "5mV1HmGPwcLR6ZJXMovxum8Y86txjKQdpVufrWLiK9JnrfySGNvxEbfGm4pjTgrN6eo9QsNCKzS6HEVPq9dphzHD",
  "key40": "4hUNp8H9kHPfxNLNFxy9xGQAgU2wvRDLTcQNMENrSqaRjbLzM3CGukLLjYJWgDBptJsnHEY5d5M8VbuTJWfZfBo",
  "key41": "3fmicMRc9wpEECdWUpQQiyvEC9DmncRzj9KztzULaBKgfPLwnJdUXpUb9tNjfsXbFZ6RNgF3zXBxGJS3P5nz3gSm",
  "key42": "3y8SZBoLXNmt8AqBB6K36G841xnrjtdde1oosxz7DFM5U6Hc7sgR2AwadwUyU2r6jV9TU79cfZCr3qVzwDxdjaGc",
  "key43": "65RyJ3QMF95KzrRgZd92kSgWgwEMXXaw4QNpkcB7PdGmCPTJaBorot1KNSnJ9hbHeDMvpnaJ4fL8b9sSDYXbj59c"
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
