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
    "gAw2SY8YuP2vy2fKe8NGzyAtexYz638EMThm1MDRF4jZ2a2eWZZbn5FcFydkwKbX6psRRb1A736sEfURU7PUEZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kuR4pNdjUC7mYkPnq2sXhd1Z1LjosnFe3MtcboRGUPz7PkPqStm4nQ7EdWF2iQwhyUBEwu36q4SA7PhHv55m9sg",
  "key1": "2JeJzKVZcb4Q4sA13EuaKdk4z7iPWUUCBZ1ucz9ESYdqNakNq7D3nMx4x5HQ5y3wRQkwt8YMTtAiBLptKakR9Y7X",
  "key2": "5wS418YgAjYE8WdWGekEBBBVmEPoTLML3H8U6HhuBu7rQdCmiWx4HFyE2phDRF8dfRWq4MXQrmwWtHjohxG49xbF",
  "key3": "LfDhPrCDgwhbygdudpiKSrgUfaJgWyXmh1F3t7LUc25agKBC2aQxxmuZtwbLch1gDFjLvgsd78HK1LjFwqcR7a5",
  "key4": "53cjputLVTi4L9e4TfmYgsb8ZJHsDnQsxxMDTDyjoUdEq4mEzTnwwDh47uaNQvsmjtBRTtCBzKagUjV9vd89EVqP",
  "key5": "2weRzxsmgaDi3N5SXou4wufs5T1bay9QdJ497WyD5cqpFxekaJWHj9kV2ioRJcNh1KPzb8SbYe1i3v9LA7AyQS5M",
  "key6": "FaUYtJ1bn2dkDqGW8pH4drVPiJULpneAQ3ofjEoG81oofM673cMe52yk1a1ZzDiycFm41x7kjtTKGUSyhGGS3vj",
  "key7": "2zkmPXSiFnGUPezCtXfGJRqMZFCjuoHLnGR2xuLTPBTxhkmsvD4x7HzbFciyVtgr8XubWysvM7hsoxsNnxqvc3W2",
  "key8": "23BKw5v7gWu7vhit5dPEoMm5kbCc3AkHzb8yncQiR6Zn8mkcAjKfCTkJ1jbJ4NTZfxzaHTmyP74dWDjK4FUvftTn",
  "key9": "4AYd7gaaFvfCVTLqgETdUuXxntP59hQMwhdNEQN8aEXQXDVrwGkRrbWuMTsdJsGa7Q2T3rUG6gAxVg2AEbCkWxec",
  "key10": "4dmXDSHqWvW3B56MeTiGF2BdfHeCYc3FZ1jh4nqqu4sxghJYaxALmL5LY72zaYRRCFRPqz7FTjy1b8YAN8A9hmdo",
  "key11": "3b5fUcc6DmXh2Y6m6KD9urEBgZKMmLhozMYphc7F3qMo4d47JrK5jAec3UADVpnE55dMSBZjBMcMkTecSyzEqgxQ",
  "key12": "3XAnYxzAAK2yhtc8Y4rmzXjEMAob4BmvHRFL3bf1W1LQ9K36ojGYXW9ivnG5NN25wi6mfZGCxoyW7G8asrEqzJvX",
  "key13": "31YGmufVwLgt8PsUg7bMN5Hmg1mT8ayD8hdzriVGr8UNqvPHwAyBjRa27KfjvRG8EDMi785weJx67xng8W1EwsQW",
  "key14": "5fKnzin4xWumeSgCv9HAHVshVQhrmS2dPoiTmHfsCfRdYtAj17qmK2D1YYpNhacJStgm1fNLccpF2j8m2b361KdL",
  "key15": "2cAEDfc4uoCM2XxbYNhZxAifvhyZZT8bs2TR9ah3UPFuFyX3VNHQFUAkeqHfM8qtfeBrqZbbjvZeodp4K33kAZqo",
  "key16": "5petnMJ9SkeVngjYSE5uyGNqsvicgbSgKGwStgiVtg3diKMEHiyqcv72PNACn1A84UNd2UvwwqWN7C1CgurVhgJ4",
  "key17": "2tSJkd4J9FdTFmD6pX7vzUiPX7LbWFNYmNdP7Aqe96baShE5dyby2iu4waxGLoFv2i7CCpN8mXKnQnf11mUaLS31",
  "key18": "4tsL3wVHsAg8UhKje6qUGDK8rKvaJFxDzEAxMsQJBs7fWhykGm4MssWKUJnRTG17zmmb5g9wsLFeDYMU5BpzeXXb",
  "key19": "64BvqnP3gT2fvAMtUGmdWNizKAuXkArastHb6aZGkkqqY43PZoGe5tWM4Ebnf1WD4ghjw1UEVCi3dpa6BfYcxTYv",
  "key20": "35j5r8R8Dmncv7YL5BT1iU3QY4zcswb6x3fTwCoCvMzUg1n6zJxLH2sdesEHv4kTMguqgS8yNwzDubHg4GtqvYPu",
  "key21": "4mDDkC5MUMyNJN3J7rsVycXyPXC6EKzTYghsaZWCjSRmvJzxJF8GBEVSn6bJv2petsXvgWs2XmwADMMYDHoWn7fZ",
  "key22": "3M2Rz6SDVYYbcgBVgxcBJ5eDXBSAssmYpkZq2QS3wBDWLLUoGSZMz6Ak17TzmiYvAphVSSJTdHwXW5zZLXo8GPEd",
  "key23": "1kuks4RjfyxNP58ei6asRJoLA85uNGzUS3Eu92xqGuNTi68fFzGmHxNsj6poYCg2BgNBU2PAY263JT4S1aZW1T6",
  "key24": "4H1riAS391aFjCwNXB2uqsTRk1TNfvdtYVdiJ9sNrz6fqT3pzoYyKQxjp51Q4mdMFc2KijSAxhNfm5iijJ2yncpa",
  "key25": "3YDX5bsTQPWFRjZ1H1MrXN2ZhbnHdxWrsXSwxU6gGZx8X7ELRJ8qwLqtVZGrowCYTiFbJSnWhdj2LuHyT4sHQTAQ",
  "key26": "4m3rDFCvEq8wsvQ2WNDm8uE3VZavLpKxg69n5n8s7CTYardPbJ5sqDVe6EjdZTkXgZ9ZEFWaHmh1qkwJywx2waJy",
  "key27": "4URcwqcpkUaWGibCuDf9DUd6xTCR5vLiNNah81irZXNsEyutNomJaYXpvHMH4MFadU3JM6DkkYPNJxWvFwWMbvjG",
  "key28": "3Qpz96Gv3h72tSQGysBoSG1BU828niZcYo7CLJBbuSi7wnY7FRddpw2EhiwfvbvrxuRPa4Pd3S5poPvWwyj85jZp",
  "key29": "2F6ZAAKn4GdCmdkNx2KgJVFJeS1yNfguZ1hwdDZT6ZxCtquAyQaxDDKkWEsZoAcowAEzRhVC5RvhAnWoNFaKw38r",
  "key30": "gS4FXxNk4VfPbB66TSqF4CeFmtTZyRtnw6foUmuN995nFVS9xhguALiHXsWZhMaYyn8wSzEUbGdZ5HSzKHXE1Jr",
  "key31": "2XH4KWBJJ5QubW4z2j83QikLPbZS5HeEiy6HNujGxULcoJGP6aCoSC2u4u7UK3UgWHWwEDmE5c27ns1LaijnAc8U",
  "key32": "4RKhfqDs8jdSZZH1UyfQU1oMLEeachRGHHYCS9QC3KnaSY5nV4LeVe8ZwR3JWXcnjzudcVaWf7CcLMiBVPDychrE",
  "key33": "2NxNd5J5KCrbYj8ioc1EwvUxengfYvzhwXeDSYZVFqjmhM3EXXmLf22sReadtwD7QK6hunF8V7mGFZqUthLBPk8E",
  "key34": "2NLdnHvghnrQmDqeM5W9og1mMVHhAB9a4bZRyN29FD8jtUWSWrdCiXahVRMrXabNsPk4Vyh3DCiNoQia1KZt4UJf",
  "key35": "jCBkWxJwxmJYsJ3BHMBoSnuN7x4CQwaXsWJ5dwn5x58YgbhVoZGipeBPHyufbVuvYTzXKCNpEw4Cdyph5qvCv6G",
  "key36": "TybzhajEtcZ18pts2ncR8sdbL2Gqund2pe1u8Qw4PctxDjsXrgUgg3Zp7561q1fy5gxpuGBFmJWsPof23UNiEsM",
  "key37": "53FeabERHdJVTGPywVK54LWRxnw6df4nwoSWrVRavr1qP7irqpHFEksw9sxodtoQNUYifUDyyRLguzBu7F68CPP6",
  "key38": "44VLehUJSqW5AnQSJEJwQQPhZqiYPLXsyEqEU8yzyYqLRSwJTfWNjBc5YHwo6QEZQS53Wjg7yiJLsq5ASz2A8UMy",
  "key39": "2tY85TcyCXbYC8c2u3TgUMe3mw6sQPJTkSiDg4fjnq43e2z7ZZefg9aqnTaLGXV3DscCkwamwgmcLUXMrvu6SDnR",
  "key40": "4yuaMKSrD2V3FevXgM27AVXVMBM8Gx8V9FdAwQwZLuAavAvfpMToZ356WDtPm1UGtpwTpiTH6rKK88U8MA69un3t"
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
