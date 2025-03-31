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
    "4WwvhBsAzucXKCoxXCZ5fmpWH6AYsLnrQzurUvaN1jiphgpUyS4opeYkiF6QAouRSJc13cBKA7YDY5XGKYdvWWWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4siwshGQWsLSBCmoANSWEBxRSHn6bQRgSnHWe2aKbTbtv3xRBkQBcGUKRK6KxBfwrtgPdhKUCMQihgTSjCdJDjS",
  "key1": "23h6W7YhuQ3LreFp2adZfbuJCSz4Gp9MKtUCyPWGT1Bm4Ww7Fzmwpgbmsqt6SKSv79WZijmWjAjPaSc7yAWwBX6H",
  "key2": "25iioBQdMAnne1riVowtXeWkKC9w34p4wkwzAhaF7M77j8syhgeqB11vWs1482eXVUzXvPEdu7Zh9YN4Hja16Y2h",
  "key3": "51WGjR9rzkash7UJGJGFLo5jKyBHgbNK7NcaahpVzLSQdTZxKsp62mXCU9xdFHhdpTyskTv8dQTpLoZcRf5FS8HD",
  "key4": "FbVUc1mBaTWZkTP3N3NtVSBwYRNVzWm38TdAnjWRa8W3WtLXaHxpBzzkBJtxZXEECH8jiXCCEDHuuabU3rdwTPP",
  "key5": "58NVAUbrFcM1bRp35uL623BdJDeZpUcV4U6q2p1JwUi1DarH7KVV1WaG81urFu3QXw46fDpuGyHTB9ijjZkLLYyj",
  "key6": "59CZAVKYkrNevdmxtk66yvGQGde3gm1dRnfgV4tzNhnSbp4oNqLyoUfa5JhLUcbHzSG2PiWDxGfwxK7E5GCMnVEH",
  "key7": "48N2gMefeYRuaFgdDd3u5Ne7WDEYnCLGRn1DLVrUFGw9cJgUxZQetv2ebtfn3tQosvCcEcgaaZGHE4uqDwGHmuQN",
  "key8": "4YXgHbEiJ6QrotDgNd9qHWTUiAzxDFEcfjXF3111pdY6AhwnYxd5f58E6ijXULYiLmoCmD869p6ATY1Ta9jisxcp",
  "key9": "2vU5WVFijXCnsToGUvR1QNRu9QaQXbz1WUZ1xgscgVjamyzJmNav19G1KmTA7RzbJYrUFQsHrvjEj87VqpenngfG",
  "key10": "2B8b9hEZgYGZwQ8a49JCXiJzBnW5TFmp5hKYR6mrNozdYpWPajeoo9nbHgb8LVKN6BxArFenRKcxZXAGUTsguzA",
  "key11": "e3FGyMEsphiYPVLpBt7Ss73FJyLp7Q6oqgnvoGoNSviMDTnYm1wSg8j7FpkjEdfc9otJYpkJQax9GAdC9RQna3y",
  "key12": "hbzf7qyne9rBi38m5xqLceksCNnx4KsXEbuFrivqt6txitGPm2hPfKdF2kwwgpRR8GwvBGwUARXn9egygM76TmC",
  "key13": "2JuWPp6GiFz7emZp8bf7W6SaC5izJWxhGiMywd6gT5n8USTcacsDpBusEQ9G1h5EGVmxzpFTE1LnhpAMz4vFcmck",
  "key14": "5JkTScqZqw6fNYuFu4JqxmbsJZDZLqcLyQCMWndbDfzhM2Czfcq7ipzhZKYqMPfVdz5ffzVZL2Q7suPqYGDWAx9T",
  "key15": "5kvvr5t4kq8wru5GSFMsxJaAMF8ZkiqHjacmLinNfxVSTHUfVyy8PSqpTLPLHLxSeu5mz7x5M5ZeWr8r1SEoz4Nj",
  "key16": "4Qqu2iPWsidnWSfsqLNyCxJ8fjjgyeeX6GXGJW1gzc4N6ZdR8TuGYA89fd53DXnTsNdMJVNepBa3CbVk4KBXhgyz",
  "key17": "4BXpxYfLQamZ6RhPKYfAUz8ymgCmAwCsSXR2wK6dyQPxyXYAtRURba5yBbiYQMpZAQVkFs7nUcaLQcuLHXsHyZqa",
  "key18": "5FWnJPZ1ZJ2qLDCwf5meqSNzXrFhZmBPNHu4GkvP8CMfsyxTNv3Nj8SbZZJ2uXCFU3zBD2qdCs9kgbw9LbEMdaiM",
  "key19": "5XmuxhBeeLfzM2pLwnvWeDKMiD8kFcWzBwDcd9Tyj1DbDbE8esnLnbBnyVZqQgsVn9C8mWDQp3i2p8KCcoGpBdbB",
  "key20": "3Ldr7s4HSx7q6ArBpRTGvxSmRy1xHdhXg6KkW3NDmHnWDhWMApx2oXPtZjzy6TdtRuJ5auhH83EhTNBDrN9sFAQQ",
  "key21": "TtCW8ZNobf2XrZS2vXLBoPcuWrRt6ZUN1eTu6u2kq9yxCUrnf3pnbY3cFFNpoa1kQnFxmNCfyHf56TMRNUwR8of",
  "key22": "4yftwNGxYuuLiabgovsAzqCb26wRNHwyDWeYFgHb8P32YS9RXBs8g7xqE7ozTYs6zq8qXvpGnBPbfUHfqkD883qF",
  "key23": "51RukWACpWZbijmF4J55WyXTEff6byePeJHHGFYbDW8kpXBpvcv7577XXVQm2N2CNGJ2wfgsi3qe2ECFM4nHRC43",
  "key24": "483BmZjRSRmmhKJw72F5FgjuQLhqARPDXJXYrGE1ofVh4Xvex9arZjJuZVHvAe8Wcb7U6hegwqRgu74Gf69vrvXe",
  "key25": "3czAK6iacHaK5QuokKJjZcjS1ZPqr2uH2kUJAb7qtGkecD6J6UwdGB3z2v51XbWAvhVo39LPDpinS7ScSjZRDHks",
  "key26": "9E3R6HBTGJ9H1G4qbyfP82rUAMQmtJErpYiGpS9Z2mp9f8w15QaqxAsJcr3y3q1XgAMNs2g2pSYdgwHdDU5t5xu",
  "key27": "mGH82pkAjTzzTy9xgfCXXoPWq1GisUXEGwerpDYiFZnGPLe4H5wLJVw7tWiQWmudWZXnNxvdnN6uJJia3YneQ4c",
  "key28": "CBWQC7iLTrLs8WS9u3bmtf6gZcpiA7mS5wL1VmHCGntqgE7TaFxHNYmtgak79kcS6WhV1bjkTiY1cbJnq7WhN9Y",
  "key29": "5DFR5SQCGp4gQjGVaHkcXm9fBx8QSRzEH5tzoMcN8TFb4mXEmwLQmrZJKkvJm3HRNUcAupgY8NYong1BThJK741v",
  "key30": "4KTU4x1sN7vV8NDfNfAWqbC6gTYR1dVrueP4ihCJUSqbf7DVj8Lcwpgytq5CCXyXh6GnQETMs3d4kYyFQdpsJ1KZ",
  "key31": "4V6tYrR3KMBCoYf5RqeS3cwFBv2pCV7C5f4wjCePxiNhC9VcRVu7rx2BdbKHif9FzeZxWQP5Z5fzABMAwEe8bBA3",
  "key32": "3GwLnruHnNmfrXBC3BiiaE96gPG6JsoGMJstCaG5wTVTs2bp5NApAJod7DkymoEbmeNKprES1yAYcURge95a9mcW",
  "key33": "4sH9gVR5zwWsq8Dm6NzU2LcnRJpWNj8WKYetGtJXtusPAgLPGMg3TAi43vxGP6sXndfC6FgFuqj8xPNuPqKt7iTZ",
  "key34": "4eMZ5rQZDsMAxipNmjrG6uwgcyjnuo4reFEuEWzUw5avKa2z5NANfRqVdNufsK7NvES9tq4vB8DpsYED8YnLDYwM",
  "key35": "2RAWiZSvVRHZyrxpr2cYRiz3cAEToBxkv8JSwvZUn9HujbtDhbj8bLesiAg5RyTpvKrMAhLwtVKzKD58Ld42CpxR",
  "key36": "VxqwH4cULqMy7YvG38bt9v2uu9mhJCrLLu9Bi6mMUjthtR4R3JqNa4KyL3KA5gA5PTAwDow4uydyfunMgJLPRzL",
  "key37": "5JJZFisM3djM13FHbhsuA1iRwg4J59TTPy8vk5gSfdzUAmPytXYBGzTZxmCzj9jdBuiL8LHVRxPxTdK6h5uSujDF",
  "key38": "2MuoAv1MkwrKTT2nJG2TyEYFH46PixYdH2wj4QLLtWxD6MfSi7hkJuAUdX48RymwsN7feZWLNSmXev1D8czoDd4Y",
  "key39": "3ZcTDtsbfAzBrpcWtepM1Co3qazoF8E9CK6d1VuybF1NXDYj7JqXQ5HPX7bCyhdvKKQ98MnDCCSj4dy1DBdLR4NP",
  "key40": "5ARyefpcAWrgJ3cNaV5kdDZmH3C5YuGYjrVbdeqjxBxqssQCoHAu2TThpKgTmMV3uDRvse71sMbdTD1MqMFZZnjD",
  "key41": "64Afu87WvN7JBMhUKM9iYTcBvA4mPKUMZaZv4wMJp3N3d8bbisy7jUmm6wYkuxYNQ9uuYD53wSN9idhpEzuPPBaj",
  "key42": "37F4bxYdGh3o5CFnq6WQRKKyhLW7YsumLrJNmFJWiY25wp3n2E2xSKZtxm3EQCmn1jb7whWn29BG3dxhbbMDWLbC",
  "key43": "yK33BadVTovhYx4aG9jQ6uQSbhTfs7mULJdkV9HJpK1THENHMaJt1tKoL5BHigua2bdLCEF3aWi7t3UW9qtHhwQ",
  "key44": "5md8NAWtEvznHPH213wUu5bwjuvDcqRYnUzJo5yZcsxAjkZegqsAHq6DGTaGt1EtjALNsibuQ6omEBPj5hD5Zo3E",
  "key45": "3mw6WjbnpYMtvDL4yAgGxDRLs7RGigQf89ZiSWibsX1wP3FV1x1qpewCfo4PSDpw8eAEP6pjGtTvSSxqNcFUv49o",
  "key46": "4JKT2qyVbi6g7FSW9Ae79BujTnT7CMoUC8JgVzyA7YoTJunkhc6oDH9ApXXmXn9q6afCcsdnTaViAgsAgpUNuoR9",
  "key47": "2JEaMEkcR5ooV6JzWsz9PhD4Gh1ccfAPqHUmChXL7eeQrEf29up7RzthQTDpCA5AL6FWq5ANJxoL77nDqJsSX1PQ",
  "key48": "3NY7oJDAfN7itKzBAuEV6EqhQ5GBYokjmhpX9PC83B6JEGUFXgL4fQs5EmogXYgVaYoin26iezHyES5wVfzZk8ft"
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
