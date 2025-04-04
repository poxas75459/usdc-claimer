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
    "wMNfmn8bC25o5x9qQVnkLoPGkvMa9w67wKfM59gHnwGPEvubNdDpwvdAP8r95pJ5Yh3EfbJwmFjMo9ApBqiP4Xq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VAG88ZvrqqbMScwue2AMCZ9ufUYFVJcvRcWiEFDPxKq8nbZBcmudsrFtyrF6h5ovY321U8t76iHBd4zLwyByT3g",
  "key1": "curqeSoUczKhSGc9WT2JDafn43pYUnzDij67MvhohqneM3pPt99Ei93nURPpk1XrNcqf31yHzArJrvfGCGt97u5",
  "key2": "2NDfZWzLMdYutTzh2oQszugafnn6qULAbwSH6PEowARYwhZEiTUBt1Pj96drgburRkBqN6QemQ7bGHWLnVu5sRxt",
  "key3": "5TyStJd4TM1HZ4NPV81CrrMvhRdvxvL5UZhiRTwgGVw4WXrzo2QS8gfbhyRDjfGoWdTSjovF3UpY1u72Y7nFhNXN",
  "key4": "2r7AddYqg1hmreTgtB5bL3qzBb2q1mpGrEahzxkMZDtoTeHojyq1srBGAVfcWpmgxXN8iThX29PExh9nbMz3o2Zs",
  "key5": "3itMjnRZPfezXHBSWp7QMoiWLpKQZBsKS53h9fNfDyreJuuhLrMnadT7AeoCWqyjLgsR87FxTJvVAFsghPiL51Gv",
  "key6": "5UfcN9zwEDMoz667zC83Prw9TtFDw325NDGgQT9siSmeswoofuRXwGMZqeLrpziRdGYB6ifhfAtTJxpuYDZsJsXe",
  "key7": "4eTwKxRvJUtzuk9GZKQD7CJi3Kr8XFrRsSwshoxVT6Jb3DS9XnVohrwcsiTc4wUxfofjK4FhhSJieMmy7ALiMMHZ",
  "key8": "3McVSeTuLKWctxmo9L3HMcsnjhWUq1KPUtnpmVT8HeXPqiL4VDZcALbWcDE4yQFdERotKFPFAKQ5tngX1nueeZc1",
  "key9": "5NfTao6BkwHxVapMQBtfwgdBDqTkEJq6QsoQs4tKbjWpFkD9LAdRs8S4D4Qe4rpkFTPLRhjQXCErukDmhVvLMHgU",
  "key10": "5shDxwYErarF9u3Cfz5p8tS3XkJLeUsYn4HAcKtQmqLh6R3TcPZGKdaTFpfx336qZe2CJEYQRRrPCN4gm2rHbu2p",
  "key11": "5tGZqWy7WqQpiqd9jMVFsX55qBx8SscscGvFwwtQpqLKpDwRkLy9MmwiempyMhTTMbooygZH8fTR7HfLtSWhhSuR",
  "key12": "4q2iVUEoJwQrqmahrKkMRBLC3XVTrZMajytUvxEKcuXn63nodnQM2J335vwrhybeUjwXbWZu5qkjPdbxRhGA6dkc",
  "key13": "o2R3dwwEyiSgMBng9gpNw9HzUj3M9ysymeedTYT5KwE1gTaXeFPFEw11po4UJV1jtyyFXVMh9MunBELhAPRNrjj",
  "key14": "zZdsVCH7bf7A1BNMSkmEdkX5Wfgk6ihbJoBhVZ9aKvQ3BpF1yznJCyNGc4AsoJ7LCn24wfKN8dtjxriD2zRAUmf",
  "key15": "4F4PGkppUiqQPtX2UJLKjFkacQvZJ4bSgPQH2BomjUQhjUCzXftyxNkSvfMh8Aouuu1CBJLmXLuYW7vxQT5yQVLF",
  "key16": "4qm92oFRg2UwHVJ4qQNiBwEbwwkBPN6T6QX1ynSPNHYNdhEqKhXdHcWvhrs97U3buzvYJe1ZwiRtZ7xA27NbP5ib",
  "key17": "29DbYKeoTs6Re1gK4P5bvSQERg6L3FUV1PwC7TRcgGfaTAePKnvEPx4uwS46KXR3jjuuFJo1RdN1rpEQfapYmUd7",
  "key18": "2WG5q3jeAAJ9PS7tG15qX4eZxPZbuc63yWPDBcuofYBTDNW8WGa2XxVSy1ks65wskC6StQWy4ciGqZXYVojWmLma",
  "key19": "3cZSbVTtTZ5LKmzq6jF5VZhTqmHdi3EBGKpNH4CSvyEqBa2ysj1Y4vSnVLrbTe8sRGR1QXTqFQDMbhkvJkVBTwkE",
  "key20": "2oNGRNEpXjjf9Wgrcwsyd3u3FSH1iKPjkATZfCSsfGbFT3BADmvjiHhMeFAfdMb2gUMh9gaJse39bRN3aWD2af1b",
  "key21": "21DfnPTnnJUd9A5SkyAva6Epjeab4JeFk8feAfrix5hfDAn7JQpHKt4ShjZwSSor48KW2jaqN8Vx9QRFS2vDfAdN",
  "key22": "3V6wBRPcBfxGE8qu6KbjdXNnLQcJpiLzfUxFizVGR9CZz88DN2gkmZNmWErdnRfQZ7FRHKFkFyehNQs9gttp3NC5",
  "key23": "2b1Y1C14Qv2TKinay4Fud1P3Cebev2MHyr3mNeKn6iD5PUS4ynYcBdVSAEDppGx8TBsYpJtwuUr7v6PGP12ZLEtG",
  "key24": "2UDHru9L8BUffNaE5Xh1Jeb32pdobvwwKX3jxDEMANygDxUEME6WKAPdJW4PhY8Umz1RqBcj5QCWhUkP5H7jwuRA",
  "key25": "3h87ejHa2Artzg3MjrWZmJez33eaWAwt4GDwDWPNC5gDis6ztMDfhBezBtBywFtKpHfdbdxSonWigHTgYsfvwAX7",
  "key26": "2GuvogpBRsHvBavVBNdXKAxn2a18ghdvAhW7DJ3ppV9UoCY8kzSJzw7nBfRwHJrN3Fud2LpohWsDSt19pLjHLg1L",
  "key27": "cq4VhD4ne6mvRh34qMnmgZvTCWaha8x2PMJ1eepqmsCn1pL7R6hgwimRpyrqyEQ3ufuq3cPVDKMDsu8uYCMfnQb",
  "key28": "nQDLjh6ttZdvJz1MTjQoSUMEduTth2UfpQ7prVFdVyJGRQNeK7QBgFK3M8FUggcnhtwWy1B5FPEbCBBGh1rSgtM",
  "key29": "4niuUsyE8KcNFSdC5QfE81AS2wydPhYXNTQBtXESKpzB4s9gdFxcPsDMrX9GMJzfKHZW2wXS7qCF9gaMzuZTRPr5",
  "key30": "5iyKx4U34m3UfGcuMxvvq5FNaQ7V5Priqv2RGf3oqbCKoaUwRBxNbLTUjNMxDsCxHA4CCTvqBGs4VshaxA8PR7D1",
  "key31": "3GDvsewSJeT3yE2BU7B6SFQxKfyyAmSCaoQUXtEVwL5M35VyGxGUtA47XXDGoB2PjEmekpKq6dnoXPKCLiHtim9v",
  "key32": "31hShGFB9zHtX5hak8MrCkshjqtYuA1KFACHzMRYLRG8xEHGxw3d579NWqwvCHvpwoTFdSv6B83i4siFnUqrevtS",
  "key33": "5evbVC8i4GjFRVoVBynzuvxkXvwgEesqEFKGLKptN7zWhU4kQEJ5yFGKCmWWVFfJ9cxDpcLLpPuZR39cQ1GBJx5m",
  "key34": "29cPpcRqDRrVgD8nayWpbp5VjPEBVbMF5RW7Q1D8pWAzwiAGMNaCGtgs6jWzWpB23rEQcQFMxJ6zt5Yn9vMjj8ZF"
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
