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
    "2M1bZLyLzb6scuKsFv7aRtjj8gAjAWUycGwxXHkYHAa25FrbPtVUVy4bTqSaSBT8fTW4LzyT8G16V4vjh2tz6an4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GuEdG6M6Bp4NCSoBtoFWvg7BhoW71maEH8xeo1YJuEqzHT7x6cmqivAtLS792W72xWETLcKyeao84sNdSNJowC7",
  "key1": "4aBxRRsU3tzuYrNnrTy1DucZbQNfDpbut1iaaG44pfcZ8BENSHXJdPzzxeqt7rMeYYYhZnhef1qqZQKAZWAkQUkE",
  "key2": "9CZP9XCQFRy674DfF3TQt7kf7es7t2cU4ynSNyUgfUnNV7Yiij7H2RrndhdQignjcQ7uWfvRJH7WVAtA4KTBqqq",
  "key3": "2nbiTCdsheo7XAnarqQkp4GNKCLpvApAQGuD1zcJp72wiUWbkVhcjNPg1rwDZ9mWSKQGLtThFRzcMVGyfphacG8H",
  "key4": "hWDHam8F1SL5kwHzLAuTgESsESpHgxbgFb2sRrExrUrxmBRtmFkNKvYxdRNxqT1PN5nedZWLbGQ2mQCtzzrkLBo",
  "key5": "2JzT5ZEenyWDfUPs5sXLhwfmwav58K5kdYiTj23bnRBCNtaRCnjRDE4VNYqtWrPWH7jJDg6y4G9orH3ksm1zdZPP",
  "key6": "2kEK6YAsND9eGf1jW6YwT4Kwqui38kQ7Xh1rjeUk4enLt94gP2eWwsXD6ZKK2RtZ8g1CrHPQJ18NmEfH2bTjZoc",
  "key7": "4JK1vaCYiUn56V9edvBjwTu48ks7WtiL9gEvojXb7tdXarH2vFKreSavAv7EqQoCGeLQwaVcjE7V8MnweyG7R5b5",
  "key8": "57Y9SKGf2nieNDF4kabZrqD7mxQfBPFAHe4yrrV5SuZek1A63E6KBEfYQxrDbZXhNcGjTuutohtjLLSBZsWbzHvA",
  "key9": "t6ndQa4ViXvCt2yDeUZYskhBcJ41BpWUUnW52wswDcSdZWpzGuj3HFHHcUSeP8C3LcNyU32YvfCfMvvNujkb1Ki",
  "key10": "52eePJfWdVH4WHEPMneT9sm129qABhWiCiGcRwZrQJQhVqpJqx8c9oyJKq5TEoALgLJweWCkVW6RGrXyyxnvVAXE",
  "key11": "2wqaDGicBrG1pmqCRUwKxpCdrhGMK2D9xdmgYHXKdD2wq7Yh8pC5JULg7AySCh2E5tmDU9ZPWqoURmP42BKxWZP8",
  "key12": "63u6XEkovL2G7uZdmPd5x4jG1wrh1t7VG7CLBi3BwzH2SaRFxm3JMdEJJpCtBKEHsnL2uZyn7yvbDHzVtevgYJhc",
  "key13": "3dW48nqLFYs6jT6eW9D1TXZptQrWqdWppAiep3vV3sQkJNv3NeeHizPayUvBrLcgAVnVfN1BHB8CftRtTSQMD5gp",
  "key14": "4WHZF8QxRUZrRf6tkuNGGtx1s9RPSnRLhF461tt7Egn41FnNe5MjafMnyEMZ7PgjqZcLrGbTTuK7suXicqshqvmA",
  "key15": "3oFF6FmN9pmhLxKxQfBipQbauhFqgdgnzk6VaWw58ymmYtKp68pFVFe3umV1A7jyKhnRcjrHDr23K4nwPPfKv22W",
  "key16": "4LxT3ZrmtpCf9iE4GbgDvu2Sjdhi5EoynkqP7F2gzG2xK98tykocgiJbfX4Yw4ynfq8Kq8iUhWEUTdDq7ZCgEHkD",
  "key17": "3vTEMw9ThkkGVavYSrAfxHo7fsqvxP2V7guoDu8uG98n7VevrKFAw1DwuCX5sVSth8q7aA7W8GhW1NMvgGHnfLao",
  "key18": "27C3kfhXkRthBw89kTze3JXRZssoSgyvneKzBLndyvHascE8pJBUbgzru3j5EbUG8D4NgBsBZNm1A14X8QzvEvYi",
  "key19": "5VBhie383kUZxEvYMDS51jtUWcc2zt9NfTCYZaM7gbF4aTWGJnLXyZKgCgqyirPt9EYv6TTtYrcXD6LD9EMvHeab",
  "key20": "5CdyrFgV9Q7UzU41qGSjwRYmVUY39HfPKSYtsPyRw1B1XGxNP3zaEhzMYUXuwdkmd13nbpp425TbkvyVb7JiCgbN",
  "key21": "49eY2KE8HyZGJ53pWsRnKHR8LpMnL4V8dyd2xC4Tzqp4nqPGiosurd81SwEuHgRV6TNGnaBFQpS3sRK3Brj5r51W",
  "key22": "keF6CASTJMP8qTgd79soXqRqDHN73eSjABAf1BgV87DLAURfmPJpN9hot46sYXouQysXvFvSQffh7DLVjJ2XKt3",
  "key23": "3uJUFHdCp3cLNHGe7j9NwLG5yPHgKdmZsQYeRZrbmxAh5tAVpHUHt8ZfijYNsNRVYaoa3PycWiKfW2g136YNPHzA",
  "key24": "3HxjF9NT6Q21ht2mYtRH2jQLM59WrYrGVSnidytnaA1JsrjbjmnZsLChEn4ayaZKQCrP4CXrHF2mpoF5Mn438ZHn",
  "key25": "2m58UzvjV9x5BaCYBufpqrnNZp3jimCrzdkMZetMiBGSQG2ARLTK3XnmPGT8EdB1WitQuPum1zfZ485RFJxiXsyP",
  "key26": "3KFZaFh33dieLWCgvFQb2pUUShJivfX63EcpzbTUR1ah2psfS9aLT8wVqvPYiXVRMtvoij8v5gqX3SbWfxhR8kC2",
  "key27": "5MQMg5ae5MX2x43oMkCUanfu1f3VWduEUuc2m9XZv2iJNVKpw7Jv1rCAHUinn1kv7gDkjdHVPmcg5g2muBWPPqMw",
  "key28": "4vegCzmFYg8AAJ5AJ46Vq6vcpHn1dd1jZhM5r4QBvHjUR999mxkjpXEhgZ11CAsz3VqJqUzMnfsMsniPCaGiPsAy",
  "key29": "2GD8iYKUX5Yyv7JrXDB55vQvaYczWyp7b4yft3rmrpxBQtyXQNHaRFNYLPfY4bFjKKywixsoZnbRfZEqbKQvNFuv",
  "key30": "jtX8Bswf5A3BDuxXxgoeEDo76fyQ3mX6XjKT2GjfH2gXEdyc5rnV2v2AFWLjADZ69b3V8krnBHNwPmTw6df4n5o",
  "key31": "51CeWcdw8fKA3TPw3FPCKzj7Pbmbh7JVyQ6nCANGNTZdLooBfPUD1qnAR97XANYVov1z6YYAWtJXrjt7MTAcaqKe",
  "key32": "3nHY82nJp3wdqw1LDD8aHt51x6w1cnPo3sZJsHqrpCXyzKkqaPvEGvtSX5nvSx8u6JtFF9p96Ssq119oLoh3sX4T",
  "key33": "2Mi7zYduwY18SoB6ao7CzDMmxS5mLX1miVsNukteEUGpdYSrkJAv9CjagWT2MgSNsG7v2x5fDyHrJhwoesJL8kXY",
  "key34": "3hLoKwhDxuWB6dKtkwq9qUeFULDDyrMUPcgH9h1bFyiiTu3uPSH3Xw8WXxBG4zbQHnvazQGhQQVaPqtH1rsMC1Zk",
  "key35": "3Eocx8dJ65jkGFuVdZZu5unhKHEdVdtQpGCKqhkY6qwBz4Ztg1Us1SSBNtQwiUdeHRJV4y7YGeHKHPx4G66eC6e5",
  "key36": "3rbQLTtcEapg1r5S6WwTK5oGnP3RPRcSmMVp177HLRLoY5iTARe97V6xGuH3K7T6jCSKisfBKDCV1WEd6i8qwJhN",
  "key37": "4wmBMfZiUxZNTotwgifLXCc4eW72WLxT4WfqH9YaBGCXfs1iv5aFStmgriMhw6gSFbyRgEeTiGwVC5dfkHWFkgqR",
  "key38": "5EitEZfCZR6BXDEcS44y4JLitGFY7gqU7mM5fKeJ4Wq4n7VjL4mBK2XCVycPMLAADtX7BPMbNScjq4JTAgYNxQYs",
  "key39": "4ECQXZwPAhgt5Bgs2BU3eGrJRmU2PodA1SNDo57RdQ2KPg2w8hMoud7YXNUxLZnysUapCx6PyKdHUREeMQhnXZY6",
  "key40": "3PpGe8FfoDZbGDMwyHYz86Dg2w9jEjuYbaCBV9BmrZrcK1Vit7HzAE27j8E3dxDYE9GAK2VQJtCv1vVpLgaCgLuq",
  "key41": "4P9pwAmLN94wsZ84BRqcST8Lt976MtTUTuK7Hxqy3fjUSwidEf9UcifL99wywmv3EXXVfSTNnkWT2bj2TJP4Zr5e",
  "key42": "34qvMCnD8cMyRF7x5jT7ytxpbBDeFmuv2hieSRUs5inEAkiGCBpU5Qx3GyBeEC2cEkTPnnDMk7CgtHcTBpNmfY5k",
  "key43": "2gFsmZsHtc7mJtML1uHoqkKwKwdfvkECUzYBqKKP4bYFseVaEU5KBUQB6F7u8VJTYARNR1LJFCtTNrLNuhHYCr8V"
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
