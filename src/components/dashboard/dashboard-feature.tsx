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
    "4WNyTrmnBLJ3zP4N4vhnfPxBZKi13pfakfxxsF5HTEMNxwEbyfYiFnbKkALwfdZMCugvkru1exfPeooQgRtqExE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QeV9yaryWy2SBwFWmPn26K8gYXLp73YwCfWdRZNCeFNtkx7yRdYTdfRUmkMRTQnRHga6V8qkeRAD3jQc5h1FoHX",
  "key1": "21sDRE2YsLpbaVivTF7KLU2u7RaZLjyRjKvW6qyZki4e6hCgf4drzfSFDG9GFHZLxtQAkBqwhNyk1i631sBnX8RT",
  "key2": "sQhhjy97DyK84nroTgBf3YArBrH9PT9WJJpi121qWiVMn5KyGjP4zs4USHjPYowrxzCf4xPXLN1U9ygg54BBaVE",
  "key3": "kJEh3MxSGLsvxnePebgZGuvbBG9SYaDi4LCHf3AFTAEE93JQn4tYeigZnJfDUEHiULHN5bkb6oyhSRa9s6rSf8C",
  "key4": "4LQsicPkdCZ7sBNmiUP24jKCLYX2K7xnC6RQAFbCAW8ewe9K7hGERsGszsxPKxVGpMdovNBv1tk2BDChUGdzSM3R",
  "key5": "4XhgyoTzojiinx2FjKNSzbXPfGJHPUqvcVDuMmyTmBPRDULSEEi1pTQAo78Stjg4cmW9ng1VVM881Hvjwjjs5HAx",
  "key6": "2Ro7Q8nx7hJQwX77cmZEJvFPNk8XVd2UGFR9wQsTLrYqfkiW4KyexNYNBWRgxh349MmMoYeMn3A4ueVsvSVxr8m1",
  "key7": "xX5KzVrHemT4Rx4a8aKpnWzqv8vRvbMKUXnM5P94iAZxnBWt2KBA9A1UYzd3yfhCwGGMYFJueSgKcsdbiSo3rZT",
  "key8": "3TM8PR3KEMfnAxunZYzJ1ULA2NVrP5Z5Cfa7CxgEysuYW7SjDn6vUbnh23DegFTR1cRAcwLk7EaBPfwHEnb8mH2T",
  "key9": "3GzStLUELtiRrMUVLmC75AhVvEEEc7zMnTccRrzSCyeAPZ68czWVgtfMAWFapjfgKdYo6L3qgFU4yVirfN2yMW6E",
  "key10": "2wkDaQpaYqBf3cdSagTbMt4Nr93zYDLi3kHTmnBvaoNhaQMq8q64gE3XVBpk8XHsbAGgMf1RuLVrsamV3yichMfH",
  "key11": "Uyfn28ftx1iEDNoYq73bKTbLfpYj17anmp5ga1CmLSqytBa4RQPfUkhsXobt4hVaqKRmgtnvA3tDTsjuMN4Hgb6",
  "key12": "4KZGVL24sdZajzMnuV711BN3pEFHM99UpEH9VQQFHF8YTdxdAqfUzxg1qCb4Qm7f9xc5n2cfvYsyoLME9YFhfvgt",
  "key13": "SySG7W9tKJ2mr1iqC944GLELMYnWpUzCJ51tU1SiVPz2fzvK8AgroeiSPBtMtvonbCGyRSgncoCF5ampFWkBTB9",
  "key14": "4RTfn4Px5GL5uPP7Ng62b7EfKsiXFtsYbkEiHXmKAYz2aGDgqyqRHPYY9xZmGZyrNXCZDsepUesfGrBKBsE6CwwG",
  "key15": "4MDqqzFPF6aDxew283LWFpu2QHskJ2ZUHPBessqFmFkFgKMUkT5igqUTr1kzYHWXiU8VGFL8CwuSs5SMcUouuiBy",
  "key16": "3htTGvXJeisCKmWV48fzuuzRaXfrQJSKw8KUMnWTk1M46KJxNbrRkxL5smW3cpoGhLhnzbwuwHaW5j5Agmu8fb3t",
  "key17": "5VeYsr4LcLtzoWsnHVyMySZ9aZ5N8BkE3ckcSZAS8C3zDngZ6v4xRmgSa5Aajsoo7Rdmy4VAtNhAbCQPfF61e8E",
  "key18": "2FT9ce9cmiiwxFHoC7fhRfCRYKwsNXMkxuELTCxXoQrgd5cMxyTQXosGvojYSWZH2HYoDmZF47gu8P91HCnbjDmK",
  "key19": "HnR9vVGTLekRRMvN2hVgaG77E5N7GeNgLvp4qaaM38rZeBzPW1zpR5bCpNQZRYvmfmPjcFUT4fKD2xt4ML91YFL",
  "key20": "2N7cMCZhwEvYtrYja4k1Bphf1VxTUafSBQRfbmHbm7R2qBPePN76x3YEffoWix8X84eNZHPf8nuKbb4Hwr6otvCe",
  "key21": "2gKfGpMrLSWL6quVcRkGA8PCjsdscD691gowVjuJPcoAnAfpd2LDgz962EaGceQfwaRxiQx9JW7NrmwL27RnGoFN",
  "key22": "MhmfKhYDzkCStSzW5kScvJsTriCTJ4aM58tk3Hs5rrqn15QUW2hBhSWBrjwDzBRqxXQgY9B2oeVYHKo9jotHoW6",
  "key23": "3XuH8zGzNW1JCjjRr6TafugTudgEpVxzU4ypaz7spUCgnUqdQ97sqCcSJGKB5PvUj7VJ2q8TDWRfZetVQ3AqwtdK",
  "key24": "4rp8WckBeV3E1biYsxon6X1XE54mbm676VoiNyjp39YM4iYYShg5rCCXPLp7zf2nSahjZf4eQRkhPzZ72PUicprW",
  "key25": "2NtJXtVj6ENJjE319oYEoW4CQ9TYGEZ1CBBJdjHpXxMFAKVzPK6CivePg3hqTScSWyofWZkbvss18JcuXRn3Zoj6",
  "key26": "3VzotCpfkiAVi9u1uP3U81PjYktGvZwb66xTUfqbPVeSBU1QJABsouycEYXYAe4JyCtxM85tijzG7BwVWeqhRvWi",
  "key27": "4NvzP5gaCcQwrU4S6r4TWB6QCZ8EA7eW6dATph3YGTfCMkQPAdAaspqH6H59bcWHigvj4GVgo9ypvk7xXYa7s2WF",
  "key28": "5EQVC6yE7zAwsvgRXxa72vdXGcjxi1AMcQ6gGndpWum3xDj7zxiqaoCy9HrhmSidCR3F9ikqFSofHBbKxHfi4SVx",
  "key29": "3eCGh8iNQVHwiKp9mAUMH12LZxkM6dsw92ak2rXV2g68PTwonVzGjKnkiDnqqmKro2fS2UhGztgbViqcUaF2LhW7",
  "key30": "36nUpWfzBQkWzBKAkdugiiBG9Q4Sxg52o3UY2KXvDo5JZpFFtQAGTzMaTFaT69NW9xJiwM1P7jpu5PCf39txHuUS",
  "key31": "a9igu5db9AK9AM1LW4Ahz8pMmbMirpYawi9NdTsdJjvsfZdVwXJb5VaemUeejViGFgxChfRsuvtVkcqX9o9rRF2"
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
