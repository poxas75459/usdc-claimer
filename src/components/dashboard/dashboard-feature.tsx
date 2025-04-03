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
    "4oxFz7aQLp5ztVr4sRgtKDnap5NK6JpcP1iJA4BA9KddBbHRa2oZspxPULYA5nMwMURDcW1zpvahp2LkNHQvsvMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tBXyF4prMQ2wETHdZ45JHdzot2TJq2CPxumu4sbsj9kYc8JcC1FnLRzZiAfw1wurRWekkthqa22VnbqpsZMwqzk",
  "key1": "4GFQeZR7y823TW1tBiNMgafJhircBfp2YdkihHRXXUMLU25WZzYH23ZwTfw8Nwfadsd8MdMAZfcoLA62W49dmG69",
  "key2": "2uEzoHiCfSnfJtjsD5Y6zEF1kVqMvEUBmMhX7898xvTw6LKJi9Nm1xYoEKG1tetVLYQVEectPS66gfbUJruN3wfT",
  "key3": "4KGWPL6mJr4Xw4Agz89Y5JnVnhYaMksSxH6TPwxHserMFkPq2c4Apx1G6g9rU3p94hLSFiBXt1e8Ap9G7s8WRDcU",
  "key4": "2iyZX6MLeFMEhJnA6X7np7EP8KfAS4B7uQ9rfsc4uSuMS9Mpr7SpALYsAExvGoXRNr4KvrULCs2B1RgW7fQHu6HV",
  "key5": "tkvBVx7MD867jQBZmUet26b3gCLdme9rZtgXH92B6oL4gSyoJf9e6DbJyJUPHCwRYzcFbbiEx7iJKzYFuKYm3zz",
  "key6": "3qfBfkEzB4BfWq4LvDHqXsQicfo8ryy6KTNkc5T7xizrGGfGLR187JzGoPpTQEzEbyctsJiRaFDDjfwMKixBFdVW",
  "key7": "MEDzN7aGRCq728zb3uHFfzaQpEsRuV8ifD2WjqJ92FRKSKXAT9b4SwMPxycAz3g6QasjY5cMpiVvdHkuzihZeHb",
  "key8": "3YsyF5k6gcF397h1McpQTaf3DT9CpZyTjkhasQx7qoQVE82nvUexD1K9g3rsCCa2apSLjN9yzgtLeM8qH1bLx27y",
  "key9": "4XZcRoTQR7ZUJQV62QkFfgJf7hadCccvnixFyYdNjXt4njGTmQQX55iLCaBtrEycyAkDMMyoyWDLdHQYBX7kRkpF",
  "key10": "4SQ3r55xzZ3jSa6HifCZLbG1cwmPWifrbQeFnqM39kgyus7anD8Kae9KZapeK6J7y2nM2SRFxE4YKwXb393yLP7x",
  "key11": "53fxHSqCPjKBDs4LzXQZc1yejivkHEoTq9p9s1fJwbTUmP4NpEPUbNki1niXREYDpZ15mkdn93BQxKMBfzpwTu8W",
  "key12": "3jbCzANMXmRChS1HZPjxYDwEgFLQtKwdoSP4yCAfEwqKtV5Gv5GNHxQYxSioxMfPvTfuDrJ2UPbUDtUmVR7UQojo",
  "key13": "4Zt5ughRBJMh55zyBXpr4AqMRvmHh5Ko4EunpbY7h2Y7qkPRUyGnxoK4BA4zbgm8rMqML4UCL4tMFjjNVzdLqR6y",
  "key14": "3tfKSi58VExtAakFqa6yF8YNk6588rRiioQTihZLq9NBeG2xg3XHuWF4PupmTuhWKPcS5zz58kwZXcZBWoa5nf1n",
  "key15": "65srGagjM2yp59PCksLj7CGTUnWBNvDfV3CUJiSVjBmSUF1MzdDZ72HHj4quS53Wx78SuS5253H8a8LJ8Pg8uoS",
  "key16": "2Ut7qVnJCJ43cBhpSQHV7rs3XY4k14hXcr7aMe5kL1btwdbh9y7PeuS7fL8ZKu6CaTKnvrczFRLGxhm11qVy7ZbS",
  "key17": "2wjKFZb5wPaB4kSdLMxQFE3J1CgxqCXaQwHz64YDoG7MtpYzumfNBrFJ7rDbdPMVBzrQTSrW41fjvYFj1CT7iQLv",
  "key18": "kohY4BNM93H8FYczKrtTDrwzdgZWX6HJbPk7Kg3KkLX4rsP9KJsPU4fDwQUmaE8CrUEnDg1mXvPFqpKcu3qWDY1",
  "key19": "3JhijBb5fW3ofJ5t3oLoG1VTNcSGdAz2hk3wWnfwL9C1fwc9FcjHnr3wsQnkxh1JQGRaMfXmxAcCAXm2BptkRjVo",
  "key20": "2Njgg7mF7djxjRdEhLSzbCv1KwQs6VFve2hcjccgfiBZkRAhBAj2LxAACrYc9Lc3robkWQpgKqTBK8FRZ6REw773",
  "key21": "5cxpZrWpmqiPViUkZ6yE5zhdptdPZMsGtMM42Py5yThoRnAXyj3M8SGgFdg194vTY6dYKiT6cAD6yfWKGQCLTF6f",
  "key22": "4oyTVNrhig5rXcNedztQbKzPfAj5pcHxAoT8JsqBEL1j5jtZivD5pbJG5vML1ukkmTzYDF8cy8yWaK8JgKbq9mh3",
  "key23": "41xHuBCHSzbZKxh93j5EqvMeinRnDyniSW13Zogdr2nc5628VmeZpW7RLD3Ac5USMbNTUBRFsfuqz3CZTEeWQkmQ",
  "key24": "4jsr6JjeR6hAkpuFShYc1nbDUsgG2ct7d3CCerQMmivz6WL4xRNExvUACuweD3RvRsALsA1iwZue4pzAjcgF8wRj"
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
