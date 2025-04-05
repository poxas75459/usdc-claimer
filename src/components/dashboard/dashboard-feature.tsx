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
    "V9w1A1vrzdqncGUe3pacevcb2WicTA58NdKuJ8Uzzh8RVdEwsamDj8JJxzwobJJNmkZeHEMVtnYP4Hr3mw6JoYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tLoZMCDSwcqp7BmDbM6UUh8H9WhAPstLaXXbsxwEyKEKMGkmALQpkgdrPLx5iuXgYPPJTpsgVNvPJP496D6Gsui",
  "key1": "5gKVKrfeksEfzbN9ZyGY8SEbjCRuurYwLNrutQxEGW8vaazknSR327i1CdTgMJ1Wo4GxLaNnAxg1qvy39BnhdYDb",
  "key2": "5GkGHwXqXjXoiH3EinsGxYwE5mrwzVG37P2kcEm8fNpA78F7m2pKDf8j9mJz3ABhjrWAT1AEUksHRbAuZwJ52qPj",
  "key3": "46VYzfqPCRAZ9y33ubG2XGWBHC7MuYp59U5SD8RYEPhm8RFbLkdYmWsmSPjYuNHCevGwieH52Tr4wRPThWBeGMHs",
  "key4": "s2DEnL4KqKZLshwPEo8C7UXaZYgChPatshbYyjnydR6v6H19g4EMCjA9DknNjaxVcp81WoCNShZg4TbuuRr2qis",
  "key5": "hcVagugwmrxGmjEicrui4gQfSc1yb7YDrndmQDqzk4xpMqcmEj9QwSMyzRpfvRQkZF89Fr9K4osG2LeQjfPEaUq",
  "key6": "2iopf9tyZJcsAPTP67HyFz6AYd5xXM1c5WNsCaUk4zJb35frHdwySXeCc7kkSSFtH6HJ2ZeCU7tG1dHGcjqRX3Hs",
  "key7": "dKcVHpGvqcfTgYvPVnPu2xDapjdNJBAoqYo1s2NzGN2ZYU8W1rtwNTBmpXGp6e3XGPsMFdjtdzTUwUn9crQwQov",
  "key8": "5WS2ChsPpP1En9NkQAkj45Z47YnydguLnQRXuZbywwd3HG8rhHC7HsD2fpHBbKG6Z3DK8pEp7VktPKm1e8jVEocW",
  "key9": "319nxRsNhBkA9qq7QkrnKouXQBGHxnrantf8RbmxUvqAJD33hb7wL5BvjxxBzZhpAtN8Gj2nB32zrn6ihyHrXRNV",
  "key10": "4Lq2tkdYLWzb14EyMvNnRFraWWRjuBHpgtcfoYqUZYBZMC229rjXyoAkNziEc7Pa2ek2byGzUimZkomLjpQxzuk",
  "key11": "61BcQC1EqEYKXPrJCrpiXMHdy5LWGJPvdwDnFVM1GDsFW8vJ9z6z19yGVcujAiz2hRaA2JrVz7y87e4ibyjX12yY",
  "key12": "6Lx9b6Vxk1hMGDVEawv89dZzajpbYmK3j74Jsu2eDpugxUbpTJqDvfVrSP9f9LH1svBgLAVZXwAyPmatJsyjj35",
  "key13": "5Q76LkuZxEDtHA2AVpHUQPrQMfNGdyqDFmpSWntsKbF88ZGN7HzRjvxD7emnQuJSjMiaqdPGmBnqZShzdipPswTn",
  "key14": "3mBMLWh76z7Q88x4gXDEswtbBf2Uj6hSi8bvhF2Ao94MxQbFf4aHNjSeCFD3brudYbAYcv5jqedktrwGgot2RokB",
  "key15": "2a4zcMCWwVvmvRBAAQu3cY5Lu9wc5ZWuppnZ68En8qwNeEpsfzKQFdmNjAuQYoE4kPmXxSReN8jqES6s7aN19Mv7",
  "key16": "5UEFwsEfQXDGLAyY2DxwVvMpLszoUqkBDASNR1TAfxRdzfY2WFDzWLfmitTrdefVjFW2nxvTE1KuvuTp3n8e4ymJ",
  "key17": "5Sqb7t4W83yCK4eZ4M9qSiCuB7gpJBNhqJabBQb8XtRpPC1Yncd3NsrkbhANreBkfWvdVbecMXDKQyRmthdCV2f",
  "key18": "jeJBB4s9wLWGU8upKQJay6nG534X24ByidxBZUTJzV8i1mjMVdh575djzxTe9HHXX2L6nmUUdUqmzBcWd8iv4xV",
  "key19": "5Cban8qbE1tUREh8woTqgPfDp2PNDwirVpfUhNT2E3BrBXRjg8CoNpjAuiHBaBaEZZvLqHo7LVXUXdzDz98NQuSB",
  "key20": "5aGNrLaQTMy2DqHHQ6T8XNnFhwmVMGBz3k5yWF7TDaVSBmWV3378kykQ1Gtr9LFk9N8UsUPqEuh3PNdiChSheked",
  "key21": "4xqpAsqxSwYAow8mcY1jb5pBv7wGHSXfZ65173tuRCJj8S2YJyLwYPu8voJtddKNWLQMV3vPVwK9ChNA276fo5nb",
  "key22": "2sANzKNaoNJy3cFqf8t1SDhDezm49QWrqSFA1raZWA66E7Zwq16eTzP6rGr3HJPdx4zwT1KaDUa7kiJrRzfe1mds",
  "key23": "5aWAAPbSz4xsnvZaojet22LghysYamWrV4fpqMoZ3oPP4Dug7aL7vfV6zBrxMnx6xrDq69ayjMoXxdRhwfENXgM3",
  "key24": "4v8dn4bCCLGqhKM2fPBqkzfuKfQtxR6h7rQRsogoPA4WwF5si82BffThf8x2DAjJx7Du1RqVxLy1zzpd9QGdxDSF",
  "key25": "4qXkjvcps2updUYkF2qMvZrdy69biBtSzCgUHcTVRNKd1BoMTGbxPd1TxF2BTf7658q17h3LCiTk1MM9zRX7pcYW",
  "key26": "2ccH7n7it5XZXb4rKnn6TJiJ4ZLNrJeoE92MMjHfT8ofgYay3bnTAqTnyMQFRexP4yG2dn4dSoTcjNQbfyJgfhL",
  "key27": "58MVf6ZSKvxqwoEHNHvxfpeLgcMC4wRj1nYE4wz6HVJA7kBcU1PUZyuEBYqTiVDJLkPQHhj9eFK2SgPojt68btg6",
  "key28": "2TgpNxtkBEqAkZyVeUtvBjj1ifkGL2zLWjUk8BzvLFW3qqQHdYwYG96LcpScvAdKnnaGxaGCRBXQnj1yoRXmDTe9",
  "key29": "5UzpmuEbRQQ5vyBe6b6e1s2gCadXR4EpRQ7RdLrKTW9HJRH4dJ67NnPbjNE8xtVoPdtwpwrP1VUmn1QyxqDWeiuX",
  "key30": "2sykFmuCiL3gHJion23i5rLaF4o6yq8p8CAXuaRGZMgZMWzmfrwNr41zoGJ6Zg5PRNqD6Q1X57RHH4Z83b3kAEyE",
  "key31": "3ZFeS4ZCobPdyoX1xQZ35zpKCL11Qm9cne2PDDw8hFxVrK1S3NFSFSBeL3bG28BBg7WFuR8W3ZQwHYYxvBJoZu6y",
  "key32": "4m38Gv7BFRGSt7Nx722Fm1hvBCMXnnznp3Yjbrj9Bz9SLL9T1nwMAiZDVKxRdznFMUR8bgZeK7JN5jknYQG7UzMz",
  "key33": "3jDBgfJ6E8Zuwq3mwGJ9k3UJubsqYN7ijGiEJWYYxqVorxq7F1Z5ozHJHD36N2CSj92m3tKqeAJJyNpbX5dJPvqQ",
  "key34": "64S4FsQGnJMZXogDs87xRaX1zksZytroxHC1g23Vn5y3ALNkavUb2neo62fKTd6tBBebTv6jeMmRUMGgUQgy4ZUt",
  "key35": "q8fzzQasuaop2FNKJmVpobKs8xJBjeawjJTxgmFmHFSWJM1EqGF2zjGSh1DFsRAZsShYdfd76HC6FFvgbNjqpPP",
  "key36": "2i1FoCDso5XNZ3BEbD7eXbVXWtk5YsoLLAr73cwTP3PvQBpvHHR6EY766n3sZxcCdTDT3gBkGF9XpXJKWduVD5Au",
  "key37": "2dFmLWj16Qrp233YtKukComs12NMCQhQUgVXwLVgeYR5Be3J3xwTnYM3LPFz53psoFVkhjD43odzm3zq1fpX4dLQ"
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
