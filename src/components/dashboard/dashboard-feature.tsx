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
    "5YQiD445a24gbtGTb5NdZ7vCiY3TzkS6sS7QvZttiEKohfwgHtT8QY9m4frg9AHCtpR9cePnWKccBHnD7aMxSQro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M3YGMHgng3FghgAtGMiUp4snxT3cWx52JL8ejC2xmJTrxvsrDUhQ1GjfR1fSwwkJK9r87d93hBJpNuM4dDDEw7Q",
  "key1": "rNgfZ1mz3CYYJm4n6TqBnt1V14KXsuX2evVKZXnkoDmtDg4AkXueYn9ZZQuH2HrowCkGjrzmfW668d2qJU1oJJa",
  "key2": "4Tpc1TkoLCXtRf6XeMjcayraEpQYLZ8Zu76uznEhnaFkGjN65h4HPAVefD9qCgS6cXfQJCta7cezRt5eRyT5cZBm",
  "key3": "5oetdEmE4Erqd1DBXRFZs2YALWNm3guQ4FkYiNNNWWdiD4HokzxPfsiDPn9it72bbexvPBj9Qfne453wc7bpcqws",
  "key4": "5HmALGMLRhsJdQCJrPZugbKwZjH5Dn5c8UCGYWnwqiMkqFDDFKHLh7Ln6pDrGBPKB3RZ1V9N4LwdmJta6mJSZYzz",
  "key5": "Kj98VHYJS7ayrvXQ1QPDjgHBwz5BtbafAxErJPEbEpk8diJpTrvDZHou5yB5gBiC8TL3XoEcWTs8doHe4HMu6zw",
  "key6": "5znGvvfyYbZDmk6SNUNJS2APGknhWox8TzYaBH5RTemj4dCmfvW6WjddzhrmMBiVBGWT1fkaFbs2gcxX3YHXW629",
  "key7": "4pdMGArKYX1nGTKeWf8QBdF3w7utuEvrvqKZeaVJNS1idkk7cpBizFma4EBANZ4UC42VkGQJpQQkU9GxmHhDcguX",
  "key8": "24sYCFvpZsVH4rGKCxUT3dg5ahC4x2wuMUJJguWRRj2GNusg3tq8Q8HubhXJHjJvWqgmZRds2NTCuxKvHx6aP3NX",
  "key9": "5ZXjnXzrHb6cwavqUg8uNxFyP3AC8X6ghbfXXvq1ts38V3JRN9Ucjyww8qYoRC6tfenkr7MBnwExpiXjdqVmAoUr",
  "key10": "4T9CyN5rmTtszEdAUzRTBbVVjZB3pEBoYVfUEEFvYEkFvX2RjhxhYfeni88zmf3njph4Wuo8dz3AtVJUTrjEaYhS",
  "key11": "33tCDqePfBFfvdhNQU3QncrNa6b3S9HpYL2rz4LgFkfnfhFSDPoFK7gvUhtWS7X8QPgLLCbxrBDZ57JnJyo4TCS9",
  "key12": "2J1Hzxgvb32X6wDXpRekKdxgho9uVjmHmAptYGVsWULKsCefxnnQnTp9m3xuCQaycBCX2VnqUW5ew7x7qF7uEvJY",
  "key13": "3Vv7iVvk2d3zsaNFabkvmrBf2FwX614KxHUabBYujwWSqKeQkQECEnxUGTZJVF1mTMbT7xrRKw7am28nutqru8CA",
  "key14": "5i12RnLxoYRkGnkVnS8wZ5pRPkoP3w7FopTDVTAkVjaZ5pk4s8RDxpF5mboijwNRXmD3Cn9LL19sD2a4TXR3Zsow",
  "key15": "5uQnd5s74ZYajzSDhRyZj8QHZWL9GdQc7acoZjyawmZMJnhYzAsXpD59FXQ8r2dddoxtWj3W88aAfkrFF6TxHRDF",
  "key16": "5t54KAVZBKwJxVECB8bREUkgXX6EKKJEkKWjoBaUWKBCCNPskUnwQTTyyDxgrNGgHAyDXLQZo5FQtWUJKBuUQnfH",
  "key17": "2WF4eKwzF2AWmmHTSkEs6egTQcJLGQuTc4hBRcbarVdUS2k71ZeGJhMsr9anJvBr9GSu3wh1cq3ygtyq44YXd6N1",
  "key18": "5h1nJ5E2paXaDG4PJF9GUXdcwaW5SvfavsVRUEgxR5bhshwJ2BCbWRvjptft973u4e1Hi6NKVTkiMpY9VMUSsRkJ",
  "key19": "36RHoqE8N78YJMmcGqPEuXV9ztQgeryL15M4J9d6WSKimwGe2j45WMqvWkQcnKJREFUAoz9gbVwoKZyN7SqKvN1u",
  "key20": "2HRy2T1zDTF1yX3kxd64yRq6z38iZXhXNKtEZ3nvSphbDMam8xQSA8zktuSgvawJoC2zx9qPzaXsfti5Dw3Xbmj",
  "key21": "35MBWq7QF1QbmE8eAbGwdRDPnzAX8PZZ6sYYKUEZoQM98het42zki7c8EWxR9M86tEV1mM8Dp31jZRnhR3R4kNKm",
  "key22": "61b8ogUahPiAPvpEjdozGnQuoim52D9sx78Hpezus1gjy8WzTJC4tdi4EgPxLPpqeAh7JyxpvaNkTiE5N4ddr2Uo",
  "key23": "366TZspx8n3Mz7eAB2GGEpSLP86deeHudcnVmxQMd64LYaf6nCttbAbyZ42qXmXkVXhnC15Dpc1mZVYHG2ZLgA3a",
  "key24": "5v7Ek8pfYa1m3czJdvJPwiEaSV1j2uxJFh8GFgGUkHak2fBozRaE9N23XBLNiqYEteGJYoLEiN9f2mAeSZFs7HVE",
  "key25": "26mD6ZwnD8B23DyhiNS4faBXMq4b83PfJdgNTphefT3RL7JvitBJmBtEdyeGayAQziFodsPsM4BYmvUnJzp4xrX7"
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
