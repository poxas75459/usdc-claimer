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
    "2jFaz9QzDkSQZWudQTCTrKomnoWBxPYeFiDPr2BZf8geGyLMfDJmjDdzr3kiCuVdTjcC1b2ZUpHEhHCMUFQCud1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vbn41rz41nqQzyiFQWrky6jLKa9wULAhrxc2MDtnM2Pih8W3Lu8zVCwTCQjSVsvETMKwzBMRnziHVbreF7uMNCt",
  "key1": "5iS9eeiurenLEEkewczuUc5m4oZjmFEVRmVhDAPMGYdE9gvb3tUJTEhbzQ11iXTpVjBAas6BVUAgTvkii53pPXQ8",
  "key2": "45sUm2mbLNAviiian7wjALsybGb2LQK7yNeCDFDHF32DMe4H3QcTdWrPYbcnF9w2qC4ifTz95K6ifZqDspBEmW3b",
  "key3": "3yXPRMNxKnLYZsA6NvWr2WrqXqPKg55Xqq6cYVbAVFzVPHiqCPtNbkx1AKES2tXP5mNLYVpbi781QtVeNbcgkQA4",
  "key4": "5aytzCQdEGayFBejQ5QHZHsLwfoBgXf3A9WS4ucT5F2vRe8TKs8SDH1z1xNpkJ3Unxvfkgtzw8ZsusLiMgNgJqFF",
  "key5": "2MMC9fa9XmcQyXpAn8Gh2PT5s2Dwq251U7gAQEHEXULK3PdhzZgGZ3gPWDebsCPX67cFvjKBaf6QyVoKV9AL28r8",
  "key6": "4hkpYnMuyZ5MP7bVTEGW85Jm5u9JQ5CjU62D4trYaDxavARqiM8Hq2oNJMn62BKGNVkkvt5sUsr22a4Aogsg1wrG",
  "key7": "5yQxJCYYNxwK56RmLbbgB4DgJqVbWMUYeZDaVuWn39TgGNKbV4fXuDiZsXyf99wn4mQBgoMnShmFFm98CTEyxpjP",
  "key8": "25rp4ufXv56PJA9mir3pnWG99jriDES5zXU8Z8R8kfQ1yCktWNCLdwVoEnFGMxtKu7NRmYKUyFQs4A5mWJ12aPbN",
  "key9": "4oh36qUhjiY6sdV1J9n4rbWJcQeSn5EVyEWZSPv2M8bCAUKQCTRrbkHnuKwFjP6QVHEjhuL9vVuDRL2TYVVM4wrN",
  "key10": "3MZAaE7eDB6CsmkwKqE9kNHzSodDUWGUtfc1tD6ecfzmzAbVm1fNW2imqQ1eVkDyqStQhcehf7UKCY76rWxxe2R3",
  "key11": "5YSapxm7JNwZ5X4x9qTw1Ss1W3PUv7GCegmjSshft5hCpo7mTVCsRt5YkhoSQxgNuR3yZbkfrCZkuNCEdiDwASao",
  "key12": "58FKQsff1Qe9H1fsQYHPR9QowxxQZcZaMUszQTCCfF3eGrL58KGry6ToZ98CjgGnXQb2EGEmuvVEta7ATm3BLB6x",
  "key13": "4DfShkMYUjeCBMx2ED2naBFPuTeBcLYsCDodJTxeaQxC6F3H5jzaN3sEt2TaDFo2id45mmAN4VK2pY3NKFgvzTCw",
  "key14": "2Mg2szPPiy1tGQDcpDJjt8mcPsH7LCx5aBqKUsexYttdpoPNmsVLHrWgjynhRmBRDTZHdwoE8Qguj5MvdLv3auEC",
  "key15": "4RrHYCzgGAYqzYwyZboUjv7wUBs9db4WMF12U8h7EuA3zpVXwMvXquAQGo8twwesG7hyqBovfDFrPhDWVPfp3GpG",
  "key16": "28wCMN8njCukPCkPwLihbetwv8wExzPqauvEnrnWD7XnjD5wLzsRsuWP4ociCnvRKppoUFz8qPDHY3JBvdkofSXw",
  "key17": "2TKEP4Lcc1kURGiiibDPCbbN9afqkEe1q5ZsUK9b57k4H44PzP9UeGCqqVomRZgUbGeMj3VisMG8MZ7DbPfrfxXn",
  "key18": "3A7pqACub7ryg7HTDbbVYNYzqnRtMtbctbBiDMwnuNQaVgZhZ4Ke9utAjTCV79GYqoHPyisiM7haF4JDHot4y1L",
  "key19": "MfWzG5tvRXnpEDfpdVqQVZCNJZDu3mDCeog9ydCJGqE4BnSMxmqE4bzHB36dPpTAnf4fNAxt8Dn6XTnCanBZRYK",
  "key20": "3RYWtxD3h7gdfkdY3jDUFPQGwhoBDjtLWNuM1bAe9Gh4o8vNPYGLwFk7rG3RUVbttEBxJcxS7xLcoUjSyCQNgXQL",
  "key21": "62CcxiRQNzz1LyFQQLmiGwC4MDFsrQ5qu8piR47GuVQWjoCdmcS11HG6Py7K8q29bL4LmzJ4xjetMVw33ERKwixR",
  "key22": "3jLnKKeJLjCyrFa7cfnfUkB4SXiewJ5z4rV9FJbjUPV4Yi7k69oL1LjBHV5bgFVAodx2Gu7c6RqsdonRUEgkefxm",
  "key23": "4LakcnqVAbEfZGuSUWM5duqXqVyTrCDJSBuxMKT7jYom7yRxRUVmynGqBE8QzGX8b8F9gNCpcFKuKvnRHxfEYLH1",
  "key24": "29xjspCjkdpT8DxKdf4uixZUiDqoztid64qda8UvyzET5FGnQGwqoRTdmB3ecQLqBDAsKQk1kN8H8LyKdV5bwwTV",
  "key25": "3icG3Z3oExydA9skk8thsWujAfB2KhWmowHXVqG1DtQEhcd88YbocNPupRjE8iroerxEMh7zn7APkoKCumFLtihR",
  "key26": "2n6LWv85FJXb5sSadLZ4JrjvCgfuxzwBsMWCNFzTB9auvLBs8tqhhxe3thj7PMXX3bt7jeUUnpNaGJtV2mjAC3mJ",
  "key27": "8S6R4hMM1C7Y6Me1Z9zYWEp8GJWcGgXiAvptk5GQa5oVwLwKNTiEijXs34xkKAF9vMDLQ2BeP76M3bpEZvqYiv1",
  "key28": "3duh2fuy7B8MHwtrTviiFvRRCdUCHCioEW6QKTWkQAsgSfBXmchXxd2uDdyvXpx8dGZU7zq251UaDMBCWKRzLSbN",
  "key29": "Ue7GXeUSHHzAsNQJCTfTCNH3cgM8VrLaELTup3BRSyUvKhm2AwZ12S4XvGubDfsW8wCnzfGr9vFa9kPrLrS8gyc",
  "key30": "4tFAsK7t4xZwJDAVyx9CXRdciifuiHUSHXk75XjXzPULhaiJhkp1LgsM6VNdgY1mouioQzXMKHRsHCLbZNAzFRkm",
  "key31": "2oXQ77wfKqJ7Z7LRnUVNZkWfFxL5JmaLpqk6j27nja354odfCFXK2ZcNrz1rUaxzS5pdftXYVk3HxE6UiijbwTbi",
  "key32": "33cyaGty3L7m9AYWeMyW8c1F5aPCDY2JtvZUHzS7m46odVzwcgfW5R2JJvtYZQyRQb52gTBTTACKjMACewXyXzCS",
  "key33": "rCkaxncXGfGXqjLd7ViVgKpceZUPS8Ytvc8Tp6H9h2NEzNSMAj2A6e2rhxM66ovz35YZSZePBi7sarSucGUg1pP",
  "key34": "2qD9jsPsaSg2LQNeCdpbMbAQcB22WZWaH4kEatW9tpAoA7QXh5KpTGrESNAQVYTKb3WPKbeRxi6E1kBNZ9Hn3AKo",
  "key35": "4p7dkGSQG374AmyVKn1AqYtF63xxuYfpA3aV5HMFZBNK2hv6fQ4VwRpoRvK3NAffwwr3E4K8VsHRVqqXMiJ11hcw",
  "key36": "2b5KVcrKwGN1a8nHi5iAwWjad7BHAYTVyUx4cprPHMzsXFVNwsKADFenWwnFRQqkZoupzLMigrSRohvj2FrFF2tD",
  "key37": "3umbRkkdtqGWzNLNt5kiqoA7xWQDyhWnfRf7YfibBAVAstY1YyAAx4Y29zFBB6BjYHk7ERt9fZVN8bdZYcCA1tJ6",
  "key38": "4j3tDE8HHmkxafwDbCJ9hxJ8TkwiaErQ6JMA6R4JuX1EbRQW6KrnFeyQySrGzzAmKygeLU17LFfW1xzcji6gTi6j",
  "key39": "Bc5DwT6fzS6F6MrU79vRYerTMzT2tMtVzyFGMKLz8agpghnaxTDsHyRivPDdtiUm6NG2KY9enNqg9tzs64Ajsti",
  "key40": "5ASp83eqQeKCeLkgmDeg6iS3XGZ2a6vgW6SM5mFZzNnx2MKvrojo6ythxrDBUvHMnSrx3XeSUakxzv6QHJgCCx5P",
  "key41": "2UyaaNpnAcHt1jekPonUT6ihafXjXnF6wUu65qXqfcn2nzT2zYi5XrGXUrT2jEbYNyLpmPZFWAWw9XKMVywUmMDW",
  "key42": "2jh2dhotDfTp7fHWWXgvzL2QPHyKRHDi1zrcj1w5pK8PbFBuB7CcJxGHairYmfhuVMRfaD5gGAK2zPNVjmsqFmXi",
  "key43": "31bp5XXWi9YSBE1cQdXZeXUQNXTmcDsQCLrAjVAFWQvncrt3HfJxpADamfLj8NjPEBTfubvvUPqhDxMr1NkNYegC",
  "key44": "2HSUgskPv4Bvw8CgD67t7qfLaBnVX79tS6x3akS9L9nYkQsHqAi5YhbZwPipErDXZQ4q37Yo3UaLf7FJcmrT7xaQ",
  "key45": "48TeeempjktkJZrp4w8uWPihZEEcSA8wvTqQCw8fLZptDgrX6ZbdEzpdHCozTFJ8boEDiFzReSUhLximzCNrejRS"
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
