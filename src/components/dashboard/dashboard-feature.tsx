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
    "2jGVVT9ok9gR7A4Wn7wHQbbiQupZhR99oGVSZ7qsVSMoC4dJ7wARG1JWcJpUath1oGE9CppuWVSdyUbKL9ywgBhM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JShL5G4Hma9bXNtDykZs6saXLibb9CzNDdyn5u34Vkh51LW5L5A26puRpyj7bia99az1gJTwnvHR6xF9tcK9PoM",
  "key1": "3fsxEWPtB1mxyCnzSJeTaTMPkH7MPt4qovRvCwnwcFog6ssM8QVTKTgmUo7poaWyJ1LnbiLV71rrACyV3pRvZgBy",
  "key2": "2G877WYG5AfTA3TbguJyuAvvhxeCfw96o3KeRT7KnuckL3jTiK4fmJK5LpkHt1QSZY1hDbkvs955zRV4tRFBY79K",
  "key3": "2xucNL5VQQb7z16awiAsZ5hVT2Gs8PXLRkxqpERcV6ZYamMn9U2ohm3icYy8rECbSrqbXkME3roWzEBpH3Sw4sek",
  "key4": "5HzNsADVYfMdVPzbs1XZMqWKjk6GdswtTDcrxnK53HUP3DN59HqJECq1rDoGYGLrB7GrafJUXcxmqzPkodMaHj3i",
  "key5": "2ktUut4sVYA5iof7LvPiv8T9ktL2hTrJPBx8RYUVQFXyaJQrEg1jZfMZy6FDNqa9RauoLGCGzwbUp16gM4dSBESQ",
  "key6": "387Xe2jDNqdGNg2HRTH5rrJ3SQhrAWangotKoMi6J9VrboAz1BsDGpif8HtQ58VPgZBDL9ZcqSQpEfQa8fkqWAks",
  "key7": "29jMMLrFA5eio8frVRZ3scQPS7hzWgHbuFFzKzov7pi5Ha9uiQjzjKB6D67kjeRdY5A1t5vFN1QbVyVr3pq7ZL24",
  "key8": "4arYs4y4bBFquvp1dK5ShDskKDbm5RCBJGxvLuzHaK9Gxee2j5WRavZ5978ZF5NUFXmkxdd8YYCC8EzHUzijHjHx",
  "key9": "5SZg8ZmsaWyrWq9S8BEGnqP6BjmfRCPLiaXzj37bLgv8xzm4ER2oE2yarXe5sMWX7eZSb6kn4X4sm1MWqSvtj1me",
  "key10": "2mWQKrSQCocrtrwHYYqU2QLWyGGxWg3sC4zv136AP4NqLveawXadbmdqtdv1o79QAEATQfVUtGgvpRZbNdT65euw",
  "key11": "2bLGf5C4HdRHkBrZqNkv87NeF3F7NXdvsPNzsNuf2JVSMQ66zCUsmkeuvxXQNzYJZvyGo34PNtiBrDJhmtcUGUAP",
  "key12": "3YHpXcQRJjNfK7J34pupVrcHQyvuZ2efdPfp19fphNxEgv6kGVFzL17tcpRcQxBpnL2Wcj1J5U9DcBU1TtQsdLTf",
  "key13": "59XU6wAz2DyZbUMdSiaazdQgHXbip55ca3jQc2ysopuYdAnruYUTbS4D8f1zdAFMMT3CgkHhJyQjxT1w3K7PafeY",
  "key14": "3WMm8hz5NfjuHH6qWzuEGxr14ko4aM1nhVio7xSfsfbdDjYhQVeDSjqMN3YwvqYXdMZRTwSr1BVtrJJJXSNHDYRT",
  "key15": "3bpACo8sZdD9xUDLCmem4PnUEbdvtnSmeEMdWsytvWHRz3aTtJAKKn3gjoo9xkoQwexpJ4jaV4MqDtX8tTUUpCCt",
  "key16": "3R9qKiyTiqqVULDkhXeqXpZUMjoiyz5BUwHtTcCvs1ADWgnP11v5wUp5eoDYzKr1sEBK9n7t7bjztpANP3QLFRQz",
  "key17": "231ofJSoSRpA2BqDkFjzTvor662CjMzv5eisnxV85auceo6PBhjEa6MzKbiyhNif2KBoNhyQw4VwLJBqfCS8DznS",
  "key18": "ZQy3KKXYQhHFC8tNZDvxrGq43hjtxgAj3z6ACKue69Xgw77mcj4uMMJaYDD56e1C2P7ndwPpUHAP3AReP4SSfK4",
  "key19": "2LmkxxDaKnxs3XVrG5BeH5hL1nCoiYfpoq37BBWRSdawWaR5XE1zTYY3Vht5JnGQj2pqiQLJx4hHEgc32DFxS4Db",
  "key20": "5cgwQg4TCrVrzF6ouVSLYreWhX8iCcit1F7hZ53ji9qc7vDFa71jVJR9TSJM3Hs7qKBeSMpXb2qixKjbz6RGH5S7",
  "key21": "MopLU6BCo919oGtPXkGPAyTxXLEcUZWPQUdcKUqJq6ufHrj4srM6V1TcxHbDjVTLf63mucr7UMozK9rHSLv9SEQ",
  "key22": "4ahVRM2y9aH7uDUKKiGCZGgVAiY9XMHf2bYKp6yGY1eBmFqtAogeRXvPRDDSQWzAwYUWWuGgsdhyfpU4ta1tctRT",
  "key23": "3oVHSD5yye6QNgpcStAUyn9Yh8JkruyDB42qRXDSk5MdSyTvHp4DmhJMXJBo6rqWKV1zRtvYHXV3pgUgCtkwBPCh",
  "key24": "5GZT1QruHtuLsLvtEZe52BCUyYJQpCHx5P9Nn7C8uoRXqYgShFTTDhB1WxiyGG5DA6eYq8EGSLxoAzFigZfxR679",
  "key25": "2LSAGuJywTsUJKZ9Dr6tCRqSY2e9d969TZvg6WFdXfXS6Ky2ED5bs86ENk2pukkp8wVARH8ag3nHPsuhhEeyBSys",
  "key26": "3yx2bEerKG7ZJ25XLoVDtK1Z9RXEVXcSwFUhRuvU9WxoW9ujt8N7EHWYmMC7U2gmJ6PRkuCnZshnaDBwcCHgcZ6o",
  "key27": "4g35sm5vPEYKhQbHHx3txqvGsEYJnYGbYrixkH3qTRUX2CgCFgLUJZpqE9ABzHF24tz3U1tVAWB8sEi5u7hZ8gwv",
  "key28": "Pi2hkNmmbgwuJF7hrHdjF9zYDPVs83JpiNFPm1cKxEvRgyHCLomWTXWsibcxomT3xg2DZ1NxBSLG951mqiu6Z7v",
  "key29": "2u8heqvqu22U2Drrka19KJNB6LUf29AacPz3rg5MU81Hv5JHiucNTwREgmNP88gpJTWEMr3yBJXy88LeTSpg4d8T",
  "key30": "44PjcZLTmgtrgBZ5yxPR5NFD1dDvtJrDeaD3SrHQ9UgFyC8iJDphv5wwA2e37mNoWJiHnFeaUxppMPPQ8fxuHAH2",
  "key31": "3WDMgdGrkToLcYn5MeAoLmM9mTGGstKzz3wKa8BbJ4piFxvfpv2S11r1EeCGNnedWQkqbKZyz3SSyZnuF28mMVxg",
  "key32": "2WnD75u2XgwEFa6rZ1rbpE2xtY5jwihR8qEBAryDkAXH1nqhmff9ppXHtzT4ooSdRG62kU1mBzKrn7MSpYRviSKH",
  "key33": "4BC49xqEZ6D8n9TnKdoEcbae8rCoqnTrUYnnFp5HHo6SGehjpwsTJhNmiDpbuaiPhk85JdeFp5N83wE4WNy3sxvv",
  "key34": "5MbKaw2Jp6tc12Q1QC6RrycVE2gT23xWGpQYXct74LJ7DaD1e54z1aYZKoD5j4itjxmT99GGJMwDPxHRL8jjpXvQ",
  "key35": "57X5M2Duoe2bC1zMDc5C3QMpuaPwyfznpGi2RBJeDiw4wKr6BwKYX8QCCBMyHPKsmFPenSumqRhU6s3tHCt9afxT",
  "key36": "64seK5B8YjhZrxXMhgT23EUuqisFDoTxAuT6nsYzFvfREqyQ9XB9ik4SHTsc7AnLrfw1oZM2Hzs35abt6ytquTpt",
  "key37": "AcHyKpYDqr4vBxrxVitzDpYFF9RFc4h8a8U4K3ibTEYRYT8TG6RV56nJxdHZiSF6h3vgfqexmwitWwYYWhdc6SZ",
  "key38": "8EgNqvcYSerzcgCztP7CVBVD4ESDqUUYbxFu8E1nRpumBfubE6Npq5NEwWB5PseQ9rqK6eAzduRyMR5KbhR6mz2",
  "key39": "3Y9Z6MfzaD4gZysBLW14iXMX6mdadcAwvUDW9b6c1hDW8iUSvVb9N845JEphjMFTWNHGRNgFjzhKgCtqwPKiuuc2",
  "key40": "32q19fEwhVBMsDyDFP4SuFJUQuqHgo9rMrTvenDVUA8dXDbgdLXwFfT8Z3MP76QQNsk2r2TL1Puk2YME9SYjQsyj",
  "key41": "5f16j8LqPtxti8qDNvyKwq9TTEE5f7MxgPQo4gDnDhPkZvXnLgRy42hV7cEH4RtWG9JjXjvLD8zBdsCc652K1vRa",
  "key42": "4V6vxihv4r8JqAoDSkdxmZ1J45KUKBoUJMwB1t6JZbtdjuaztWTygGfT63aBPHE3MpXVFtWRKKDqtGvxVB5G8wQj",
  "key43": "3Sj7TUcXvgynGdfUpksXJcbSyrvYXLSyDw5MhFyhRydXnNz6otggrdcUpiwUgDgBC4vVuszy2NJvYeq4XeBFa5Ux",
  "key44": "4SVS5c3H5mjYkAhSJ5qruaGJ7QzxvytMQGv6hnconZxUgaa62mdcrzwe2CePRmeThZg4Z7VD1LQ3nsGRHgcm2dAs",
  "key45": "2roRzrAfHtG7p7ZeRH189auHDFoWDZDt8hcPzvwT3NPsj3EfuDh8oRwP7aMDXLHDdPjGbNRda2E1SnRkqZzcFixf",
  "key46": "2LgjbWRTRwtNcB3V9KmBm2LEq46BoDvvuF6x3DhDNHLv6a78LJW2XakZBGTrUVshTXuX3tzKb6i7W36brausrwuN"
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
