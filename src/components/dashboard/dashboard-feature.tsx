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
    "3cyxJSSoyoscJahZKnEg4c5eQdDHZWzS8vCyMRJHgxub29DQHGh6ApJbVjzRWQKjn5j8wRNwEY8U7uyZUGX2yfDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25Y4jRombc5mxPjmgtEhnfxFk8oNUYwVxa9T4PdGsLbU2kDxh6JzPCFjwRBxbJXMPV36cqRHs56BkGaVGUwB2afd",
  "key1": "2ErJEVaEZQWmZV2eFjUkrfEsi28bEKhdpn94DAdsdv47YTEU4wSVMoZaRuRnVeRPVMgY9ZEpLmNQM6xwu2Twb98s",
  "key2": "5xfYQpqys2r4KrMykfq7uJcF2s2oAVCRg6MLM74WE4kke4Ucn6MoY63EXdpkgqNRHLaBQUqUo36pB7wwA1e9Gmy3",
  "key3": "5oGxnhTT1ChSDXD4JF43jkudZb1fT4VZqp2v1kqHu43KHbCuxVRCwHtHnmudjwAFusDJtw2j7JKc3YZ6QJTgQVxi",
  "key4": "dnefnk5YFmwymZEPEcTETGLaGnGwH9V3Yxwu3gTyu7qeUknpZL23ZSYzRZuVCVSKHGoDz7NDGDXMgCdAKkgehL2",
  "key5": "25ncYbQ6Z82dtaJTmotyMkJNpbu83WP5qu27oY5Fd5KnavANFkHcEK8C43jTrqgVJCFXHPnxExWGJjciSwXrYFET",
  "key6": "4AmPvmfkxYHvJbnYPHwNMwiN9Za34Bd8eGXNqqYZeFtEZDN4sp8pj6rdPz51SLWRYxV7qrKB13MkMkAfBYazegCy",
  "key7": "3N64N5aD3oSTa4V3PA7xMTdioKLEBujko1Ymfnis6JonSPv9cJpEPSKAhf5di1ZM3bwiSdsJwvVa8EvMhmUVk6D1",
  "key8": "SAzsADcfPmhAaGp6EEZoA8c4pnHcGhqigALXUZ1jC37Wm8csAWdwrFue7BizNZXph6rbAy8M9gBTGaE4Ef1GZ2a",
  "key9": "5V5zEunWuiov2wakHfTNs9C489cP7pK1A7bqDKetW5tzrydhXt6iYMA8KcMzx54W9jnkPhrCf94jr3hriTyyujv4",
  "key10": "3MeQU6uDNBXqXNp2wx1HGa9p53TSUsEhQF8dZtMBg51N3nK9wTPK1HVNuDDb4k1M1t3Ct2jXkyfyiYegJoFQ8xwv",
  "key11": "4QzytTLY53eU1RQtBkMAatKB8jQ7GGRCGwx3hzJ6k3AWVQHyng61HjeZzvY1n7e4r6Lv5fyk2ZkC4qeh4Gcv2J5j",
  "key12": "4ogDGJ1RWkLyENSjzRtsr1rJpNBUqcj4RBXsbNRV7BcfBsQdggJhLLopLGLbHmWYJoXPvbF6zEh6TKKY3EJgPThX",
  "key13": "38KESTkPteAFGZ7mbG2Ncz2SFoC2zbTuL6q6XojNWf2p41JeBd4PZLGX7r2dfobtuXcJnHbHs2JwBCyuqQNWuH42",
  "key14": "3muVecUhFgahyCuty9DJSwEPBEit1utjSBkDtvaB7FphXNUetx8hfJspamswnKMrGqBMYtAVi5uH1wviEWAqZE67",
  "key15": "RhJYm4JJmLtsTLQZAihnecghV1n2Xuegu5Mph2vqrrvtnLTJhfn2RM6xR5hBGteLEfN3hg3M8NCFnJfqAHhHcsm",
  "key16": "5aKBsEN6VN4YWKftF5aj8YdV51jM7wFZQbuJEiiQuQoHnJqvF9P5NV1Kb6sZT6385rTXXC8tNsHTnkGFHeNMq9dr",
  "key17": "5NeHzzhRSpq4TDAKQEWz7YaGuqbEjnodP8PXG2kszTtv9jsS4jRuV7jPtNPqKokD5jUdEY3Qi2AzXUupPhoVi5FY",
  "key18": "4uoPtyMra7wVUCrbUBrMsLf6gvVQkKc8GAjyzmzBbcA4RdQsA9on5QEY57FNAjqhGtoeTo9fRcAJxcx18h2rdQX4",
  "key19": "5c1rQExxFzaCJYaw1odrPkGU2Lmi1DcSH4VVMcfiPb5tkH3oPKstkmtu4GuatkeRa1kxubPqBmx91oggcBJvV5tL",
  "key20": "3ZH53dxuAdT3uo4qhkjjfkvbnTPYeVCqqUr7XqdJf4fUy3FuhYoJBgHpfaXBR4Rzp7tJv7U9Mhd9511GPHaztsyz",
  "key21": "3u8jGhLpq74uaVzTVFxM7MUnynB2ujk5UnpATiqzm6LyircfyUiVzQjr4XsDCB9umoq5S57eyxZPufbpgXotQEvF",
  "key22": "3JPYn5F9LAW4rmYuqzZLrRxzwhdaMFkotsP319cf7XTKNWLwWyvryffyEZbkQEmcRa4eTwZNejDWNhA4SgBke67P",
  "key23": "KaQr575Cice7FPWpBN9bvdCE9GiLnAD6u1HS8T6c4SttBdrqf9EduGLF3Tt2E82cGdn8tYACKZLzftb1bFUpTgV",
  "key24": "27J7MJb7WAHEFPPscqSNF81nCMFfXaXCKLd9yPWMSqAHr1vRPx9ppxSpwpRBCw4dk41dJbrU9njMmYBUm1osxUbk",
  "key25": "2CAMC9AKfna692ViX7voAoYW3ohnQ2Mb9PZEF8yPy7TWMVwhicx4bSdGHQsyhDnL7JoqjhLpXwDQes1TrNiQsiLU",
  "key26": "ojF6jzWETwVnTQxyiULjEFeYzMpWc5XFvGGtMfKDnEnBSX85sF1Bxtwx4pvNEpMGKN4ZUfSeVT8EJekBxC1c1xz",
  "key27": "49VLmaoE9o2nadoWZp262d2sWKguZhUFE6r77qXCVSapZUDX9qmCDcHXsPeSjYZ7gs8ARnNVtCouZU3XCrxXtmEk",
  "key28": "5LdGbbmFaf3vbEn8iuJKVWphR1b4rT7txXyftE7yiwP36WQSpXxLVBPis5oMwLcHcjKvc8fKvasAJEcpiBcJEh8S",
  "key29": "2oya8QFEQWR2VkhtrcAcgKLGGwNbJgJQ1mStsqBb7nvUZULDSKhiAis9KsTYkTszQ6kERChQ7VS2NTNL4iQL3fuV",
  "key30": "4dNZwwvdUEawx8HmYEk39XoWAjSGSH3ijtBthmWhMkQqrdQeRbdGk6Epv9jrG76ZvM2G6mAhDTsWEkhqhYpkuGiJ",
  "key31": "22pWdJRTkjjS5idxtW7WdQDhG8gnVCNvxmCgo8LwrAxy2CjAeF6ziMGyYKs4P7HXpHL61HAbrf4ttDv819Jgwk9q",
  "key32": "SsJLJr5qP6RtxC7XS52pk5yum4MPcUYT44SBfx8T9jgyKh8jcn8AzhLeuD3BDxhiLpruCCUwsdErk5UU2ukzp6b",
  "key33": "3iXyMqS5Zz5FbDgcoFY93EZgNomE4mrVAnCYaQmQ17WuG7WCpHA2FRWin8CvpH6kbviZKiK1Gx5YFexuFdMK8s3B",
  "key34": "2BEdPkWJN3yN23twQ5SMQTWYKZn3vssSdZtPwBLU2kVEV52Hk8hK4K2npdrKPirWqTDgkuMhp8DVAiDbRjMZqBbv",
  "key35": "5RuvsNNNq9Tc7CjdaGr6qUcppCjA3irnTBdFYXktCg3Hdqq9vJzR4o55K6C5n4YjPxRv8XTSStQUpUdZREzKSf6y",
  "key36": "4By9ZxwjyHQPvcit5edcme5spjhRj1QhnJqMb8SmhodkPLtBSQ3GWCCRVHLjG5t9mfFUdosfSpiEv7ZUV8Vn89j1",
  "key37": "5GqEC7iiQkfbemLTPAuCQFHDqjhT9e7DYKMNBffnHY4LqB5YwQvKGkQPF6RLMPGga9XoYJ7dk54nxkbD69GK2NnW",
  "key38": "5VerZxCbgTyVjnm9YPfp1pouBJKX43Uqp2VZhc57NXAqBbxxGZ2q7MXeBGc5SdHewY82pkrvkQmZX5aKLv7xKxdd",
  "key39": "3616y2hmPoaa95NgvD9oseijfPcsQQYtr1Kij5sZKKBCzZeCJS7BH3A8e7Qq4Yq1w9V1buCJgUtTFJvA8yfsXq2K",
  "key40": "2BdXP1ojJ395bRLyHdmSHyocjJU6jwEdiEZqMk79jL5a6ZRUU3zHk4eepGLNs3zXKYoQmWqmBmaRoicpQq43iSxA",
  "key41": "gJvo4uPDZogNLJjjatKNucRS5sxpP3PB2WEpdBZTcDdaWWYqLhq1WkeiGpNt56yyCDQoArTPMDvFBAbSZntj392",
  "key42": "7pCJPEbwqTkB1TBdD8VKCA9yfEFqNctubsZuQFPx3m4n3bopnVnrWAdks3d9iZhKqj1rYvLymtzB14se9kqXsou",
  "key43": "2iHCQ7vrSi9d2t4bfAnsfzLLxmMqDxypL7o9njryHntEqsghN5cTePNWh4RqQwQS7fvi5uaTTq11JNvF7SNBBhTc"
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
