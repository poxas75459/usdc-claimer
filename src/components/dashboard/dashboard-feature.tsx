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
    "318AigYrYn6cUZ9BtB4EkBijn1MGUSpi3yWQXbtVHHCdzhgTRGoQwpAj6j5B6rB74zF1KKqsqfe1VXFQrLY5VXRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NkajGSjaVrsXG84hhXFD83TJC2aZ9H9TbsGTxLsthFq3FDhkVy4oor4Qu5Z8PC5MVcH5D5p7LAakAF5DqsWpE7k",
  "key1": "BSqZUvMQPN7j8HojDYyL1F4SxmDCrD4Z11QNABe6qNxZNHqUxBGx321cQvcaiik7oQHMsLw73RMxEvoxsk34mfB",
  "key2": "2CSp1wtR6neEdSHGEV21kLEsYpUiwPMjbbaQvab88w5dMjoDmyg39Zi5NJbdL1KytJQSQJyZGiKnWC7PMmQh1Qd9",
  "key3": "4rV9ZSsTbW5AmqsSQZdiDMqLkwzKps6UiCS9X6gtwQ1kFyEW5iDHMw4s5myVGQ1DoiJ96QKVHCbXUs5v7SoVVYL8",
  "key4": "3a9fYnNWobkQToxAEa4r9STjUX62DkgJycP1wsksimy7rj6RQRZKKDQy3RibKeG8P22yJDyw4rHT1afybrnio4m8",
  "key5": "wkoZroXDyczasySRVzLhzcHhoNrN7RzkGS1DSggoXkspZFU3yuVyhxRWdUbGZYH6CPB6mdqzzkAHTKFZbEy4JAt",
  "key6": "2sj7J883wsukzpuTfcDQtKbUbNsP2mcwj8y2yC9PkrfTGsgbBv7LHr8Qj5GDeNAmPtv7LxhMHwq6q45DMuR78KLP",
  "key7": "5fM3nrzj3522gfqsTRaPWo88i3DPpjdrsRTGLc9eCJhkfbECmKytRqCNgHceHqsip3AtRdwnXX4bdYvVgXUknmxM",
  "key8": "3DUpzR7CrAMJ1XojhY5bdmESoeUtWDZ4ZNx8Nxuki8aa5peJMWRqJ8yz9NjLQDSn1WoGATHotfGd8qVNs4Jbo3Tk",
  "key9": "c2qeQ1aiFx3GZE8V7fmibJA4YKLp5oRc2ZLb5Lk7LPqAtaqUC8apQ5mnuLZWgNwtGc6uwCXghmjpeeDNmeomn7A",
  "key10": "kTsZZRXzRbU2qkxgRUfQdZc582teLKuQtyfkd4hxUd7N26WS3fnxoKjoDzVTcQapfDHNN3JUaHV4VA62FynH6ac",
  "key11": "3fahxjeLXbtAckuLZT4jj4PBWsHp29UEH7wFz3tDnPSuMjrN9CVdyYw4kcCfLMR5qPZmUYrmKphnbXbxmwfK2icf",
  "key12": "4j42RorHbuzvJdw9hMBpkrvTBycXApb2xnuNGmyuCR96spHhFzhQzJ2eFPy4YnhRWh62wrFh9SJCQaQ2pzGsky1T",
  "key13": "rY6scYEX6HLaqxj3ECbBhpJ2MHubMCrQ5zrjVG1V1aJHWFVTZzNVhcSEvQTzjSjSWv631KGGuCpdDe2DxCsbxk1",
  "key14": "4DLk3UEzwsx4WWoteP8KgtDEDuyuk9NBSapT2vrBMzqJ5tvRr4uRqqsxPCTdJeCeLWZi9YWj1GkmZfeSjxxKXGPr",
  "key15": "5fgJxuYHjzDwYz1df2hHRQY4awn1RnypmXLvPrUFVYf2BVFtze3dntiDJcbJMvPXTTwvVJJinmDpB2U6D5TrcBL7",
  "key16": "4KVu7PcufFZisB7P43s27wzbS4sfJfiq73ahpMubHNhjxV395rfDuJvTKXC1Zu1rxJMKRitUTCaUbcvPtN9DvHar",
  "key17": "2sxX7pnbKovjLcwgCm4Us9R61T5F3naGPm6hxfvfP5d7r3VcpFWHF7Q9GBKEp4SJymqjVkZFVBNkEFXeMuMQavL6",
  "key18": "Ni6N8eDVrE651sJLLm3ohFxrdk337HX619oesxazyo242CHxZMMPKsXJFfy8mCX9ToaC3k1kVW8MDkvwh9VTLU6",
  "key19": "5VXYPuhwHEibgzJuveN7PbPeRjjgjLjij8MxN3TBaFVhSNayL92dZDkCZYwSDS3FncMMAHNCoET6fmin953UTTbJ",
  "key20": "5HPLTP7F9QyhvqupXcEqfKi6yULnPZrKjsUwodwV5tw581gZzsQZ4uYwc9e7mR8NMxH5mCvK2E2EyDPhhsbyAjXt",
  "key21": "4UEWj5jpzdVH6ZWz9EL1sFURSQCc1PR1i5BxGcWr9iXPbTC72ihc3rRp1VKFULMJmUaWkvTS159VinfiMQF6ePYd",
  "key22": "UcjM3cxX84inEdXGnPgETfKt67sNoHqNAj7CQgEKNYK76XPaWT5PDzXcVyaeAfQ9My4245kGQQiwTDYHoyGcETr",
  "key23": "8SgFaGQBo6WL214Xt7DvhKkW664wkXCrjewBjHz29RkXPLJa6mUaKnaC2JNWukD5Q1grkdKgJT3k4g8u6KcCM7y",
  "key24": "DNHThokJKYvWq1HitXbLkXbNMNkyAZprUsp4JV9aSBSW37SdMd7o5SfRidjpKytCPafS4aWery1Gw56fT6uN9s5",
  "key25": "66zoERJK7SYDqKv4fVXUowTgEe6cBdeCCDaBJYaQUgF7bvsFeEp9d5EVfxDwbq7mkvkiGNVL8w7WfvxoCDRrJmfc",
  "key26": "5z2DXs8sDjzRp1pHo6w81zT2UWuYcw7q525aJT1kqdQQEDE9yL41EmBDXhmVKkpAySdiaBDYHSkJfKZ3rVogvQGz",
  "key27": "2Jqo32bTHS8scz9dMg4Z27rsLuWqpSRECvtAoGYPLnjz2cYW4pHmoTHXcB1ALGHgafFgC2wF6bA8VcpeXBB2CptF",
  "key28": "HwKT1cw1LnmP7tDcL2a8eHUGGgsSh9tZork31ZskrdB7qdSwGuzoiV3FdWjhJ1JwHq2VHYSLYgkPiAWGTSGsR9u",
  "key29": "4aKBzbNT7cvXMnXQAAfawnwcPxJz3QxMV8XmexWoZRk7gb8kGF3ZRJhswWE2rb74KwppikTNpiGwYdHR5H9Vmpne",
  "key30": "66BVbk56um1kFCy9sJ2SNN31kJvrdALKcbd7dGi3AuCCrucRymotMhjJH3cLXHRcV3owxvEETPUQY6bAixQuLymS",
  "key31": "2KsMfA3QXkkx7jkyVYoz1bPPTqXoPMZj3ALqHzMLLzjfhR4kZL8Bh21MgpmYsXLrnNEMAKUF1WGgK4aAKw6ASukQ",
  "key32": "5wdXJhMikFXmR5SCHucFAqDbSzzhw9iGXM6NorUXLFmcjFUiFFWuV1a5vWT6ekKCf4MPxnQfgjgkzTh2Sgm7LYvj",
  "key33": "3Kp5RWgvKa4xaxpQKwGJaDMFDkqrKDfh8FMfVFP3HQ7KGEgyAdWXaWHjY4hKwMMzdfBbCxvk7irDucGF21jZbypS",
  "key34": "5gj5HbJvxoN8yzL7MRsyDPFGp8zng5JpRMr6woXipFMmJmEegX4yyR2jcd9BpBv2KrNdmixr6ocxS5GgA1kzu29z",
  "key35": "53Jxs5p5oiW3Qkfai1fu7FaxkF2SJGXQaCJQHZM7MMu55BkZurwaTHru3GZHJBnR5HNrTHE68NWufnULTcV77NeY",
  "key36": "5Ab3GWNwfrbdktxeEEhzpWiDNiEyGtAvEGdL99dcdxUr2vQ9X6VkxAFTGJq3Fgy3WwwMQqK6pGqumTyZBsN6aaww",
  "key37": "5koVRzX5vaxzm1MwjpLZ1xmZFZ52cuuR4ZWTs3Up5GyXavGfqoVnq2x8Cb1XmBVC4EDVktbyxh4oFdoBudaz6iYX",
  "key38": "4TaK3whE6NeBuVg9BJBSBw22ntsrvTL5V5hXuqUf5w3nsP4UBHcFdGYHs7tFeRk4cYBykrFa9KcepnQCyZvS6HM5"
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
